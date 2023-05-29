/* eslint-disable no-useless-escape */
"use strict";
import * as fs from "fs";
import * as os from "os";
import { basename, dirname, extname, join } from "path";
import * as vscode from "vscode";
import { Utility } from "./utility";

const TmpDir = os.tmpdir();

export class CodeManager implements vscode.Disposable {
    private _terminal: vscode.Terminal | null;
    private _isRunning: boolean;
    private _codeFile: string;
    private _cwd: string | undefined;
    private _runFromExplorer: boolean;
    private _document: vscode.TextDocument;
    private _workspaceFolder: string | undefined;
    private _config: vscode.WorkspaceConfiguration;

    constructor() {
        this._terminal = null;
    }

    public onDidCloseTerminal(): void {
        this._terminal = null;
    }

    public async run(fileUri: vscode.Uri, wasmArgs: string[], wlinkArgs: string[], extensionLocation: vscode.Uri) {
        if (this._isRunning) {
            vscode.window.showInformationMessage("Code is already running!");
            return;
        }

        this._runFromExplorer = this.checkIsRunFromExplorer(fileUri);
        if (this._runFromExplorer) {
            this._document = await vscode.workspace.openTextDocument(fileUri);
        } else {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                this._document = editor.document;
            } else {
                vscode.window.showInformationMessage("No code found or selected.");
                return;
            }
        }

        this.initialize();

        const fileExtension = extname(this._document.fileName);

        //code for using integrated toolchain if setting environment variables hadn't worked
        // let executor1: string;
        // let executor2: string;

        // if (this._config.get<boolean>("useIntegratedToolchain")){
        // executor1 = '"'+extensionLocation.fsPath+ '/toolchain/wasm.exe" $fileName';
        // executor2 = ' & "'+extensionLocation.fsPath+ '/toolchain/+" -o $fileNameWithoutExt.srec $fileNameWithoutExt.o ';
        // } else{
        //     executor1 = "wasm $fileName";
        //     executor2 = " & wlink -o $fileNameWithoutExt.srec $fileNameWithoutExt.o ";
        // }

        if (this._config.get<boolean>("saveAllFilesBeforeRun")) {
            vscode.workspace.saveAll();
        }

        else if (this._config.get<boolean>("saveFileBeforeRun")) {
            this._document.save();
        }

        const executor1 = "wasm $fullFileName";
        let executor2 = "wlink -o $openDir$fileNameWithoutExt.srec\" $openDir$fileNameWithoutExt.o\" ";

        if (wlinkArgs[0] != '') {
            wlinkArgs.forEach(argument => {
                executor2 = executor2 + "$openDir"+argument + '.o\" ';
            });
        }
        
        const appendFile = true;
        let selection;
        const activeTextEditor = vscode.window.activeTextEditor;
        if (activeTextEditor) {
            selection = activeTextEditor.selection;
        }

        this._codeFile = this._document.fileName;

        if (wasmArgs[0] != '') {
            wasmArgs.forEach(argument => {
                //executor1 = executor1 + ' & wasm ' + argument + '.s';
                this.executeCommand("wasm $openDir"+argument+".s\"",true);
            });
        }
        
        this.executeCommand(executor1, appendFile);
        this.executeCommand(executor2, appendFile);
        
    }

    public dispose() {
        vscode.window.showInformationMessage('WRAMP code manager was disposed');
    }

    private checkIsRunFromExplorer(fileUri: vscode.Uri): boolean {
        const editor = vscode.window.activeTextEditor;
        if (!fileUri || !fileUri.fsPath) {
            return false;
        }
        if (!editor) {
            return true;
        }
        if (fileUri.fsPath === editor.document.uri.fsPath) {
            return false;
        }
        return true;
    }

    private initialize(): void {
        this._config = this.getConfiguration("wramp-runner");
        this._cwd = this._config.get<string>("cwd");
        if (this._cwd) {
            return;
        }
        this._workspaceFolder = this.getWorkspaceFolder();
        if ((this._config.get<boolean>("fileDirectoryAsCwd") || !this._workspaceFolder) && this._document && !this._document.isUntitled) {
            this._cwd = dirname(this._document.fileName);
        } else {
            this._cwd = this._workspaceFolder;
        }
        if (this._cwd) {
            return;
        }
        this._cwd = TmpDir;
    }

    private getConfiguration(section?: string): vscode.WorkspaceConfiguration {
        return Utility.getConfiguration(section, this._document);
    }

    private getWorkspaceFolder(): string | undefined {
        if (vscode.workspace.workspaceFolders) {
            if (this._document) {
                const workspaceFolder = vscode.workspace.getWorkspaceFolder(this._document.uri);
                if (workspaceFolder) {
                    return workspaceFolder.uri.fsPath;
                }
            }
            return vscode.workspace.workspaceFolders[0].uri.fsPath;
        } else {
            return undefined;
        }
    }

    private async executeCommand(executor: string, appendFile: boolean) {
        let isNewTerminal = false;
        if (this._terminal === null) {
            const icons: vscode.ThemeIcon = {id:"combine"};
            // eslint-disable-next-line prefer-const
            let terminalOptions: vscode.TerminalOptions = { name: "WRAMP A&L", iconPath:icons }; //, shellPath: "C:\\Windows\\System32\\cmd.exe"
            this._terminal = vscode.window.createTerminal(terminalOptions);

            isNewTerminal = true;
        }
        this._terminal.show(this._config.get<boolean>("preserveFocus"));
        executor = this.changeExecutorFromCmdToPs(executor);
        let command = await this.getFinalCommandToRunCodeFile(executor, appendFile);
        command = this.changeFilePathForBashOnWindows(command);
        if (this._config.get<boolean>("clearPreviousOutput") && !isNewTerminal) {
            await vscode.commands.executeCommand("workbench.action.terminal.clear");
        }

        //vscode.window.showInformationMessage(this._cwd);
        if (this._config.get<boolean>("fileDirectoryAsCwd") || (!this._workspaceFolder && this._document && !this._document.isUntitled)) {
            const cwd = this.changeFilePathForBashOnWindows(this._cwd);
            this._terminal.sendText(`cd "${cwd}"`);
        }
        this._terminal.sendText(command);
        //vscode.window.showInformationMessage(command);
    }

    private getWorkspaceRoot(codeFileDir: string): string {
        return this._workspaceFolder ? this._workspaceFolder : codeFileDir;
    }

    /**
     * Gets the base name of the code file, that is without its directory.
     */
    private getCodeBaseFile(): string {
        const regexMatch = this._codeFile.match(/.*[\/\\](.*)/);
        return regexMatch ? regexMatch[1] : this._codeFile;
    }

    /**
     * Gets the code file name without its directory and extension.
     */
    private getCodeFileWithoutDirAndExt(): string {
        const regexMatch = this._codeFile.match(/.*[\/\\](.*(?=\..*))/);
        return regexMatch ? regexMatch[1] : this._codeFile;
    }

    /**
     * Gets the directory of the code file.
     */
    private getCodeFileDir(): string {
        const regexMatch = this._codeFile.match(/(.*[\/\\]).*/);
        return regexMatch ? regexMatch[1] : this._codeFile;
    }

    /**
     * Gets the drive letter of the code file.
     */
    private getDriveLetter(): string {
        const regexMatch = this._codeFile.match(/^([A-Za-z]:).*/);
        return regexMatch ? regexMatch[1] : "$driveLetter";
    }

    /**
     * Gets the directory of the code file without a trailing slash.
     */
    private getCodeFileDirWithoutTrailingSlash(): string {
        return this.getCodeFileDir().replace(/[\/\\]$/, "");
    }

    /**
     * Includes double quotes around a given file name.
     */
    private quoteFileName(fileName: string): string {
        return '\"' + fileName + '\"';
    }
    private openQuoteFileName(fileName: string): string {
        return '\"' + fileName;
    }

    /**
     * Gets the executor to run a source code file
     * and generates the complete command that allow that file to be run.
     * This executor command may include a variable $1 to indicate the place where
     * the source code file name have to be included.
     * If no such a variable is present in the executor command,
     * the file name is appended to the end of the executor command.
     *
     * @param executor The command used to run a source code file
     * @return the complete command to run the file, that includes the file name
     */
    private async getFinalCommandToRunCodeFile(executor: string, appendFile: boolean): Promise<string> {
        let cmd = executor;

        if (this._codeFile) {
            const codeFileDir = this.getCodeFileDir();
            const placeholders: Array<{ regex: RegExp, replaceValue: string }> = [
                // A placeholder that has to be replaced by the path of the folder opened in VS Code
                // If no folder is opened, replace with the directory of the code file
                { regex: /\$workspaceRoot/g, replaceValue: this.getWorkspaceRoot(codeFileDir) },
                // A placeholder that has to be replaced by the code file name without its extension
                { regex: /\$fileNameWithoutExt/g, replaceValue: this.getCodeFileWithoutDirAndExt() },
                // A placeholder that has to be replaced by the full code file name
                { regex: /\$fullFileName/g, replaceValue: this.quoteFileName(this._codeFile) },
                // A placeholder that has to be replaced by the code file name without the directory
                { regex: /\$fileName/g, replaceValue: this.getCodeBaseFile() },
                // A placeholder that has to be replaced by the drive letter of the code file (Windows only)
                { regex: /\$driveLetter/g, replaceValue: this.getDriveLetter() },
                // A placeholder that has to be replaced by the directory of the code file without a trailing slash
                { regex: /\$dirWithoutTrailingSlash/g, replaceValue: this.quoteFileName(this.getCodeFileDirWithoutTrailingSlash()) },
                // A placeholder that has to be replaced by the directory of the code file
                { regex: /\$dir/g, replaceValue: this.quoteFileName(codeFileDir) },
                { regex: /\$openDir/g, replaceValue: this.openQuoteFileName(codeFileDir) }
            ];

            placeholders.forEach((placeholder) => {
                cmd = cmd.replace(placeholder.regex, placeholder.replaceValue);
            });
        }

        return (cmd !== executor ? cmd : executor + (appendFile ? " " + this.quoteFileName(this._codeFile) : ""));
    }

    private changeExecutorFromCmdToPs(executor: string): string {
        if (executor.includes(" && ") && this.isPowershellOnWindows()) {
            let replacement = "; if ($?) {";
            executor = executor.replace("&&", replacement);
            replacement = "} " + replacement;
            executor = executor.replace(/&&/g, replacement);
            executor = executor.replace(/\$dir\$fileNameWithoutExt/g, ".\\$fileNameWithoutExt");
            return executor + " }";
        }
        return executor;
    }

    private isPowershellOnWindows(): boolean {
        if (os.platform() === "win32") {
            const defaultProfile = vscode.workspace.getConfiguration("terminal").get<string>("integrated.defaultProfile.windows");
            if (defaultProfile) {
                if (defaultProfile.toLowerCase().includes("powershell")) {
                    return true;
                } else if (defaultProfile === "Command Prompt") {
                    return false;
                }
            }
            const windowsShell = vscode.env.shell;
            return (true);
        }
        return false;
    }

    private changeFilePathForBashOnWindows(command: string | undefined): string {
        //my change
        if (command == undefined) {
            return "";
        }
        //end my change

        if (os.platform() === "win32") {
            const windowsShell = vscode.env.shell;
            const terminalRoot = this._config.get<string>("terminalRoot");
            if (windowsShell && terminalRoot) {
                command = command
                    .replace(/([A-Za-z]):\\/g, (match, p1) => `${terminalRoot}${p1.toLowerCase()}/`)
                    .replace(/\\/g, "/");
            } else if (windowsShell && windowsShell.toLowerCase().indexOf("bash") > -1 && windowsShell.toLowerCase().indexOf("windows") > -1) {
                command = command.replace(/([A-Za-z]):\\/g, this.replacer).replace(/\\/g, "/");
            }
        }
        return command;
    }

    private replacer(match: string, p1: string): string {
        return `/mnt/${p1.toLowerCase()}/`;
    }

}
