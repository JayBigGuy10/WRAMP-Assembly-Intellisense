/* eslint-disable no-useless-escape */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeManager = void 0;
const os = require("os");
const path_1 = require("path");
const vscode = require("vscode");
const utility_1 = require("./utility");
const TmpDir = os.tmpdir();
class CodeManager {
    constructor() {
        this._terminal = null;
    }
    onDidCloseTerminal() {
        this._terminal = null;
    }
    async run(fileUri, wasmArgs, wlinkArgs, extensionLocation) {
        if (this._isRunning) {
            vscode.window.showInformationMessage("Code is already running!");
            return;
        }
        this._runFromExplorer = this.checkIsRunFromExplorer(fileUri);
        if (this._runFromExplorer) {
            this._document = await vscode.workspace.openTextDocument(fileUri);
        }
        else {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                this._document = editor.document;
            }
            else {
                vscode.window.showInformationMessage("No code found or selected.");
                return;
            }
        }
        this.initialize();
        const fileExtension = (0, path_1.extname)(this._document.fileName);
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
        let executor1 = "wasm $fileName";
        let executor2 = " & wlink -o $fileNameWithoutExt.srec $fileNameWithoutExt.o ";
        if (wasmArgs[0] != '') {
            wasmArgs.forEach(argument => {
                executor1 = executor1 + ' & wasm ' + argument + '.s';
            });
        }
        if (wlinkArgs[0] != '') {
            wlinkArgs.forEach(argument => {
                executor2 = executor2 + argument + '.o ';
            });
        }
        const executor = executor1 + executor2;
        this.getCodeFileAndExecute(fileExtension, executor, true);
    }
    dispose() {
        vscode.window.showInformationMessage('WRAMP code manager was disposed');
    }
    checkIsRunFromExplorer(fileUri) {
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
    initialize() {
        this._config = this.getConfiguration("wramp-runner");
        this._cwd = this._config.get("cwd");
        if (this._cwd) {
            return;
        }
        this._workspaceFolder = this.getWorkspaceFolder();
        if ((this._config.get("fileDirectoryAsCwd") || !this._workspaceFolder) && this._document && !this._document.isUntitled) {
            this._cwd = (0, path_1.dirname)(this._document.fileName);
        }
        else {
            this._cwd = this._workspaceFolder;
        }
        if (this._cwd) {
            return;
        }
        this._cwd = TmpDir;
    }
    getConfiguration(section) {
        return utility_1.Utility.getConfiguration(section, this._document);
    }
    getWorkspaceFolder() {
        if (vscode.workspace.workspaceFolders) {
            if (this._document) {
                const workspaceFolder = vscode.workspace.getWorkspaceFolder(this._document.uri);
                if (workspaceFolder) {
                    return workspaceFolder.uri.fsPath;
                }
            }
            return vscode.workspace.workspaceFolders[0].uri.fsPath;
        }
        else {
            return undefined;
        }
    }
    getCodeFileAndExecute(fileExtension, executor, appendFile) {
        let selection;
        const activeTextEditor = vscode.window.activeTextEditor;
        if (activeTextEditor) {
            selection = activeTextEditor.selection;
        }
        this._codeFile = this._document.fileName;
        if (this._config.get("saveAllFilesBeforeRun")) {
            return vscode.workspace.saveAll().then(() => {
                this.executeCommand(executor, appendFile);
            });
        }
        if (this._config.get("saveFileBeforeRun")) {
            return this._document.save().then(() => {
                this.executeCommand(executor, appendFile);
            });
        }
        this.executeCommand(executor, appendFile);
    }
    async executeCommand(executor, appendFile) {
        let isNewTerminal = false;
        if (this._terminal === null) {
            const icons = { id: "combine" };
            // eslint-disable-next-line prefer-const
            let terminalOptions = { name: "WRAMP A&L", iconPath: icons, shellPath: "C:\\Windows\\System32\\cmd.exe" };
            this._terminal = vscode.window.createTerminal(terminalOptions);
            isNewTerminal = true;
        }
        this._terminal.show(this._config.get("preserveFocus"));
        executor = this.changeExecutorFromCmdToPs(executor);
        let command = await this.getFinalCommandToRunCodeFile(executor, appendFile);
        command = this.changeFilePathForBashOnWindows(command);
        if (this._config.get("clearPreviousOutput") && !isNewTerminal) {
            await vscode.commands.executeCommand("workbench.action.terminal.clear");
        }
        //vscode.window.showInformationMessage(this._cwd);
        if (this._config.get("fileDirectoryAsCwd") || (!this._workspaceFolder && this._document && !this._document.isUntitled)) {
            const cwd = this.changeFilePathForBashOnWindows(this._cwd);
            this._terminal.sendText(`cd "${cwd}"`);
        }
        this._terminal.sendText(command);
        //vscode.window.showInformationMessage(command);
    }
    getWorkspaceRoot(codeFileDir) {
        return this._workspaceFolder ? this._workspaceFolder : codeFileDir;
    }
    /**
     * Gets the base name of the code file, that is without its directory.
     */
    getCodeBaseFile() {
        const regexMatch = this._codeFile.match(/.*[\/\\](.*)/);
        return regexMatch ? regexMatch[1] : this._codeFile;
    }
    /**
     * Gets the code file name without its directory and extension.
     */
    getCodeFileWithoutDirAndExt() {
        const regexMatch = this._codeFile.match(/.*[\/\\](.*(?=\..*))/);
        return regexMatch ? regexMatch[1] : this._codeFile;
    }
    /**
     * Gets the directory of the code file.
     */
    getCodeFileDir() {
        const regexMatch = this._codeFile.match(/(.*[\/\\]).*/);
        return regexMatch ? regexMatch[1] : this._codeFile;
    }
    /**
     * Gets the drive letter of the code file.
     */
    getDriveLetter() {
        const regexMatch = this._codeFile.match(/^([A-Za-z]:).*/);
        return regexMatch ? regexMatch[1] : "$driveLetter";
    }
    /**
     * Gets the directory of the code file without a trailing slash.
     */
    getCodeFileDirWithoutTrailingSlash() {
        return this.getCodeFileDir().replace(/[\/\\]$/, "");
    }
    /**
     * Includes double quotes around a given file name.
     */
    quoteFileName(fileName) {
        return '\"' + fileName + '\"';
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
    async getFinalCommandToRunCodeFile(executor, appendFile) {
        let cmd = executor;
        if (this._codeFile) {
            const codeFileDir = this.getCodeFileDir();
            const placeholders = [
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
                { regex: /\$dir/g, replaceValue: this.quoteFileName(codeFileDir) }
            ];
            placeholders.forEach((placeholder) => {
                cmd = cmd.replace(placeholder.regex, placeholder.replaceValue);
            });
        }
        return (cmd !== executor ? cmd : executor + (appendFile ? " " + this.quoteFileName(this._codeFile) : ""));
    }
    changeExecutorFromCmdToPs(executor) {
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
    isPowershellOnWindows() {
        if (os.platform() === "win32") {
            const defaultProfile = vscode.workspace.getConfiguration("terminal").get("integrated.defaultProfile.windows");
            if (defaultProfile) {
                if (defaultProfile.toLowerCase().includes("powershell")) {
                    return true;
                }
                else if (defaultProfile === "Command Prompt") {
                    return false;
                }
            }
            const windowsShell = vscode.env.shell;
            return (true);
        }
        return false;
    }
    changeFilePathForBashOnWindows(command) {
        //my change
        if (command == undefined) {
            return "";
        }
        //end my change
        if (os.platform() === "win32") {
            const windowsShell = vscode.env.shell;
            const terminalRoot = this._config.get("terminalRoot");
            if (windowsShell && terminalRoot) {
                command = command
                    .replace(/([A-Za-z]):\\/g, (match, p1) => `${terminalRoot}${p1.toLowerCase()}/`)
                    .replace(/\\/g, "/");
            }
            else if (windowsShell && windowsShell.toLowerCase().indexOf("bash") > -1 && windowsShell.toLowerCase().indexOf("windows") > -1) {
                command = command.replace(/([A-Za-z]):\\/g, this.replacer).replace(/\\/g, "/");
            }
        }
        return command;
    }
    replacer(match, p1) {
        return `/mnt/${p1.toLowerCase()}/`;
    }
}
exports.CodeManager = CodeManager;
//# sourceMappingURL=codeManager.js.map