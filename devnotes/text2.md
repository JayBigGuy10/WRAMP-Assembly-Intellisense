const movgsSnippet  = new vscode.CompletionItem('movgs');
		const movgsDocs: any = new vscode.MarkdownString();
		movgsSnippet.insertText = new vscode.SnippetString('movgs $${1}, $${2}');
		movgsDocs.appendCodeblock(`movgs Rd, Rs;`, "wramp");
		movgsDocs.appendMarkdown(`**Move general register to special register** - _Special Instruction_
* Copy the contents of general purpose register Rs into special purpose register Rd`);
		movgsSnippet.documentation = movgsDocs;
		items.push(movgsSnippet);
const movsgSnippet  = new vscode.CompletionItem('movsg');
		const movsgDocs: any = new vscode.MarkdownString();
		movsgSnippet.insertText = new vscode.SnippetString('movsg $${1}, $${2}');
		movsgDocs.appendCodeblock(`movsg Rd, Rs;`, "wramp");
		movsgDocs.appendMarkdown(`**Move special register to general register** - _Special Instruction_
* Copy the contents of special purpose register Rs into general purpose register Rd`);
		movsgSnippet.documentation = movsgDocs;
		items.push(movsgSnippet);
const breakSnippet  = new vscode.CompletionItem('break');
		const breakDocs: any = new vscode.MarkdownString();
		breakSnippet.insertText = new vscode.SnippetString('break ');
		breakDocs.appendCodeblock(`break;`, "wramp");
		breakDocs.appendMarkdown(`**Break** - _Special Instruction_
* Generate a breakpoint exception, transferring control to the exception handler`);
		breakSnippet.documentation = breakDocs;
		items.push(breakSnippet);
const syscallSnippet  = new vscode.CompletionItem('syscall');
		const syscallDocs: any = new vscode.MarkdownString();
		syscallSnippet.insertText = new vscode.SnippetString('syscall ');
		syscallDocs.appendCodeblock(`syscall;`, "wramp");
		syscallDocs.appendMarkdown(`**System call** - _Special Instruction_
* Generate a system call exception, transferring control to the exception handler`);
		syscallSnippet.documentation = syscallDocs;
		items.push(syscallSnippet);
const rfeSnippet  = new vscode.CompletionItem('rfe');
		const rfeDocs: any = new vscode.MarkdownString();
		rfeSnippet.insertText = new vscode.SnippetString('rfe ');
		rfeDocs.appendCodeblock(`rfe;`, "wramp");
		rfeDocs.appendMarkdown(`**Return from exception** - _Special Instruction_
* Restore the saved interrupt enable and kernel/user mode bits and jump to the instruction at the address specified in the special register $ear `);
		rfeSnippet.documentation = rfeDocs;
		items.push(rfeSnippet);
