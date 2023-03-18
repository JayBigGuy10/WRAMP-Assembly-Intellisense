/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const provider1 = vscode.languages.registerCompletionItemProvider('wramp', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			// a simple completion item which inserts `Hello World!`

			// eslint-disable-next-line prefer-const
			let items: Array<vscode.CompletionItem> = [];

			//arithmetic ones
			// eslint-disable-next-line no-constant-condition
			const addSnippet = new vscode.CompletionItem('add');
			const addDocs: any = new vscode.MarkdownString();
			addSnippet.insertText = new vscode.SnippetString('add $${1}, $${2}, $${3}');
			addDocs.appendCodeblock(`add Rd, Rs, Rt;`, "wramp");
			addDocs.appendMarkdown(`**Addition** - _Arithmetic Instruction_
* Put the sum of register Rs and register Rt into register Rd
* Generate an overflow exception on signed overflow`);
			addSnippet.documentation = addDocs;
			items.push(addSnippet);
			const addiSnippet = new vscode.CompletionItem('addi');
			const addiDocs: any = new vscode.MarkdownString();
			addiSnippet.insertText = new vscode.SnippetString('addi $${1}, $${2}, ${3}');
			addiDocs.appendCodeblock(`addi Rd, Rs, Immediate;`, "wramp");
			addiDocs.appendMarkdown(`**Addition, immediate** - _Arithmetic Instruction_
* Put the sum of register Rs and the sign-extended immediate into register Rd
* Generate an overflow exception on signed overflow`);
			addiSnippet.documentation = addiDocs;
			items.push(addiSnippet);
			const adduSnippet = new vscode.CompletionItem('addu');
			const adduDocs: any = new vscode.MarkdownString();
			adduSnippet.insertText = new vscode.SnippetString('addu $${1}, $${2}, $${3}');
			adduDocs.appendCodeblock(`addu Rd, Rs, Rt;`, "wramp");
			adduDocs.appendMarkdown(`**Addition, unsigned** - _Arithmetic Instruction_
* Put the sum of register Rs and register Rt into register Rd
* Generate an overflow exception on unsigned overflow`);
			adduSnippet.documentation = adduDocs;
			items.push(adduSnippet);
			const adduiSnippet = new vscode.CompletionItem('addui');
			const adduiDocs: any = new vscode.MarkdownString();
			adduiSnippet.insertText = new vscode.SnippetString('addui $${1}, $${2}, ${3}');
			adduiDocs.appendCodeblock(`addui Rd, Rs, Immediate;`, "wramp");
			adduiDocs.appendMarkdown(`**Addition, unsigned, immediate** - _Arithmetic Instruction_
* Put the sum of register Rs and the zero-extended immediate into register Rd
* Generate an overflow exception on unsigned overflow`);
			adduiSnippet.documentation = adduiDocs;
			items.push(adduiSnippet);
			const subSnippet = new vscode.CompletionItem('sub');
			const subDocs: any = new vscode.MarkdownString();
			subSnippet.insertText = new vscode.SnippetString('sub $${1}, $${2}, $${3}');
			subDocs.appendCodeblock(`sub Rd, Rs, Rt;`, "wramp");
			subDocs.appendMarkdown(`**Subtraction** - _Arithmetic Instruction_
* Put the difference of register Rs and register Rt into register Rd
* Generate an overflow exception on signed overflow`);
			subSnippet.documentation = subDocs;
			items.push(subSnippet);
			const subiSnippet = new vscode.CompletionItem('subi');
			const subiDocs: any = new vscode.MarkdownString();
			subiSnippet.insertText = new vscode.SnippetString('subi $${1}, $${2}, ${3}');
			subiDocs.appendCodeblock(`subi Rd, Rs, Immediate;`, "wramp");
			subiDocs.appendMarkdown(`**Subtraction, immediate** - _Arithmetic Instruction_
* Put the difference of register Rs and the sign-extended immediate into register Rd
* Generate an overflow exception on signed overflow`);
			subiSnippet.documentation = subiDocs;
			items.push(subiSnippet);
			const subuSnippet = new vscode.CompletionItem('subu');
			const subuDocs: any = new vscode.MarkdownString();
			subuSnippet.insertText = new vscode.SnippetString('subu $${1}, $${2}, $${3}');
			subuDocs.appendCodeblock(`subu Rd, Rs, Rt;`, "wramp");
			subuDocs.appendMarkdown(`**Subtraction, unsigned** - _Arithmetic Instruction_
* Put the difference of register Rs and register Rt into register Rd
* Generate an overflow exception on unsigned overflow`);
			subuSnippet.documentation = subuDocs;
			items.push(subuSnippet);
			const subuiSnippet = new vscode.CompletionItem('subui');
			const subuiDocs: any = new vscode.MarkdownString();
			subuiSnippet.insertText = new vscode.SnippetString('subui $${1}, $${2}, ${3}');
			subuiDocs.appendCodeblock(`subui Rd, Rs, Immediate;`, "wramp");
			subuiDocs.appendMarkdown(`**Subtraction, unsigned, immediate** - _Arithmetic Instruction_
* Put the difference of register Rs and the zero-extended immediate into register Rd
* Generate an overflow exception on unsigned overflow`);
			subuiSnippet.documentation = subuiDocs;
			items.push(subuiSnippet);
			const multSnippet = new vscode.CompletionItem('mult');
			const multDocs: any = new vscode.MarkdownString();
			multSnippet.insertText = new vscode.SnippetString('mult $${1}, $${2}, $${3}');
			multDocs.appendCodeblock(`mult Rd, Rs, Rt;`, "wramp");
			multDocs.appendMarkdown(`**Multiplication** - _Arithmetic Instruction_
* Put the product of the signed multiplication of register Rs and register Rt into register Rd
* Generate an overflow exception on signed overflow`);
			multSnippet.documentation = multDocs;
			items.push(multSnippet);
			const multiSnippet = new vscode.CompletionItem('multi');
			const multiDocs: any = new vscode.MarkdownString();
			multiSnippet.insertText = new vscode.SnippetString('multi $${1}, $${2}, ${3}');
			multiDocs.appendCodeblock(`multi Rd, Rs, Immediate;`, "wramp");
			multiDocs.appendMarkdown(`**Multiplication, immediate** - _Arithmetic Instruction_
* Put the product of the signed multiplication of register Rs and the sign-extended immediate into register Rd
* Generate an overflow exception on signed overflow`);
			multiSnippet.documentation = multiDocs;
			items.push(multiSnippet);
			const multuSnippet = new vscode.CompletionItem('multu');
			const multuDocs: any = new vscode.MarkdownString();
			multuSnippet.insertText = new vscode.SnippetString('multu $${1}, $${2}, $${3}');
			multuDocs.appendCodeblock(`multu Rd, Rs, Rt;`, "wramp");
			multuDocs.appendMarkdown(`**Multiplication, unsigned** - _Arithmetic Instruction_
* Put the product of the unsigned multiplication of register Rs and register Rt into register Rd
* Generate an overflow exception on unsigned overflow`);
			multuSnippet.documentation = multuDocs;
			items.push(multuSnippet);
			const multuiSnippet = new vscode.CompletionItem('multui');
			const multuiDocs: any = new vscode.MarkdownString();
			multuiSnippet.insertText = new vscode.SnippetString('multui $${1}, $${2}, ${3}');
			multuiDocs.appendCodeblock(`multui Rd, Rs, Immediate;`, "wramp");
			multuiDocs.appendMarkdown(`**Multiplication, unsigned, immediate** - _Arithmetic Instruction_
* Put the product of the unsigned multiplication of register Rs and the zero-extended immediate into register Rd
* Generate an overflow exception on unsigned overflow`);
			multuiSnippet.documentation = multuiDocs;
			items.push(multuiSnippet);
			const divSnippet = new vscode.CompletionItem('div');
			const divDocs: any = new vscode.MarkdownString();
			divSnippet.insertText = new vscode.SnippetString('div $${1}, $${2}, $${3}');
			divDocs.appendCodeblock(`div Rd, Rs, Rt;`, "wramp");
			divDocs.appendMarkdown(`**Division** - _Arithmetic Instruction_
* Put the result of the signed integer division of register Rs by register Rt into register Rd
* Generate a divide-by-zero exception if the contents of Rt is zero`);
			divSnippet.documentation = divDocs;
			items.push(divSnippet);
			const diviSnippet = new vscode.CompletionItem('divi');
			const diviDocs: any = new vscode.MarkdownString();
			diviSnippet.insertText = new vscode.SnippetString('divi $${1}, $${2}, ${3}');
			diviDocs.appendCodeblock(`divi Rd, Rs, Immediate;`, "wramp");
			diviDocs.appendMarkdown(`**Division, immediate** - _Arithmetic Instruction_
* Put the result of the signed integer division of register Rs by the sign-extended immediate into register Rd
* Generate a divide-by-zero exception if the immediate value is zero`);
			diviSnippet.documentation = diviDocs;
			items.push(diviSnippet);
			const divuSnippet = new vscode.CompletionItem('divu');
			const divuDocs: any = new vscode.MarkdownString();
			divuSnippet.insertText = new vscode.SnippetString('divu $${1}, $${2}, $${3}');
			divuDocs.appendCodeblock(`divu Rd, Rs, Rt;`, "wramp");
			divuDocs.appendMarkdown(`**Division, unsigned** - _Arithmetic Instruction_
* Put the result of the unsigned division of register Rs by register Rt into register Rd
* Generate a divide-by-zero exception if the contents of Rt is zero`);
			divuSnippet.documentation = divuDocs;
			items.push(divuSnippet);
			const divuiSnippet = new vscode.CompletionItem('divui');
			const divuiDocs: any = new vscode.MarkdownString();
			divuiSnippet.insertText = new vscode.SnippetString('divui $${1}, $${2}, ${3}');
			divuiDocs.appendCodeblock(`divui Rd, Rs, Immediate;`, "wramp");
			divuiDocs.appendMarkdown(`**Division, unsigned, immediate** - _Arithmetic Instruction_
* Put the result of the unsigned division of register Rs by the zero-extended immediate into register Rd
* Generate a divide-by-zero exception if the immediate value is zero`);
			divuiSnippet.documentation = divuiDocs;
			items.push(divuiSnippet);
			const remSnippet = new vscode.CompletionItem('rem');
			const remDocs: any = new vscode.MarkdownString();
			remSnippet.insertText = new vscode.SnippetString('rem $${1}, $${2}, $${3}');
			remDocs.appendCodeblock(`rem Rd, Rs, Rt;`, "wramp");
			remDocs.appendMarkdown(`**Remainder** - _Arithmetic Instruction_
* Put the remainder of the signed division of register Rs by register Rt into register Rd
* Generate a divide-by-zero exception if the contents of Rt is zero`);
			remSnippet.documentation = remDocs;
			items.push(remSnippet);
			const remiSnippet = new vscode.CompletionItem('remi');
			const remiDocs: any = new vscode.MarkdownString();
			remiSnippet.insertText = new vscode.SnippetString('remi $${1}, $${2}, ${3}');
			remiDocs.appendCodeblock(`remi Rd, Rs, Immediate;`, "wramp");
			remiDocs.appendMarkdown(`**Remainder, immediate** - _Arithmetic Instruction_
* Put the remainder of the signed division of register Rs by the sign-extended immediate into register Rd
* Generate a divide-by-zero exception if the immediate value is zero`);
			remiSnippet.documentation = remiDocs;
			items.push(remiSnippet);
			const remuSnippet = new vscode.CompletionItem('remu');
			const remuDocs: any = new vscode.MarkdownString();
			remuSnippet.insertText = new vscode.SnippetString('remu $${1}, $${2}, $${3}');
			remuDocs.appendCodeblock(`remu Rd, Rs, Rt;`, "wramp");
			remuDocs.appendMarkdown(`**Remainder, unsigned** - _Arithmetic Instruction_
* Put the remainder of the unsigned division of register Rs by the register Rt into register Rd
* Generate a divide-by-zero exception if the contents of Rt is zero`);
			remuSnippet.documentation = remuDocs;
			items.push(remuSnippet);
			const remuiSnippet = new vscode.CompletionItem('remui');
			const remuiDocs: any = new vscode.MarkdownString();
			remuiSnippet.insertText = new vscode.SnippetString('remui $${1}, $${2}, ${3}');
			remuiDocs.appendCodeblock(`remui Rd, Rs, Immediate;`, "wramp");
			remuiDocs.appendMarkdown(`**Remainder, unsigned, immediate** - _Arithmetic Instruction_
* Put the remainder of the unsigned division of register Rs by the zero-extended immediate into register Rd
* Generate a divide-by-zero exception if the immediate value is zero`);
			remuiSnippet.documentation = remuiDocs;
			items.push(remuiSnippet);
			const lhiSnippet = new vscode.CompletionItem('lhi');
			const lhiDocs: any = new vscode.MarkdownString();
			lhiSnippet.insertText = new vscode.SnippetString('lhi $${1}, ${2}');
			lhiDocs.appendCodeblock(`lhi Rd, Immediate;`, "wramp");
			lhiDocs.appendMarkdown(`**Load high immediate** - _Arithmetic Instruction_
* Put the 16 bit immediate into the upper 16 bits of register Rd, and set the lower 16 bits to zero`);
			lhiSnippet.documentation = lhiDocs;
			items.push(lhiSnippet);
			const laSnippet = new vscode.CompletionItem('la');
			const laDocs: any = new vscode.MarkdownString();
			laSnippet.insertText = new vscode.SnippetString('la $${1}, ${2}');
			laDocs.appendCodeblock(`la Rd, Address;`, "wramp");
			laDocs.appendMarkdown(`**Load address** - _Arithmetic Instruction_
* Put the zero-extended 20 bit address into register Rd`);
			laSnippet.documentation = laDocs;
			items.push(laSnippet);



			//bitwise boys
			const andSnippet = new vscode.CompletionItem('and');
			const andDocs: any = new vscode.MarkdownString();
			andSnippet.insertText = new vscode.SnippetString('and $${1}, $${2}, $${3}');
			andDocs.appendCodeblock(`and Rd, Rs, Rt;`, "wramp");
			andDocs.appendMarkdown(`**And** - _Bitwise Instruction_
* Put the result of the logical AND of registers Rs and Rt into register Rd`);
			andSnippet.documentation = andDocs;
			items.push(andSnippet);
			const andiSnippet = new vscode.CompletionItem('andi');
			const andiDocs: any = new vscode.MarkdownString();
			andiSnippet.insertText = new vscode.SnippetString('andi $${1}, $${2}, ${3}');
			andiDocs.appendCodeblock(`andi Rd, Rs, Immediate;`, "wramp");
			andiDocs.appendMarkdown(`**And, immediate** - _Bitwise Instruction_
* Put the result of the logical AND of register Rs and the zero-extended immediate into register Rd`);
			andiSnippet.documentation = andiDocs;
			items.push(andiSnippet);
			const orSnippet = new vscode.CompletionItem('or');
			const orDocs: any = new vscode.MarkdownString();
			orSnippet.insertText = new vscode.SnippetString('or $${1}, $${2}, $${3}');
			orDocs.appendCodeblock(`or Rd, Rs, Rt;`, "wramp");
			orDocs.appendMarkdown(`**Or** - _Bitwise Instruction_
* Put the result of the logical OR of registers Rs and Rt into register Rd`);
			orSnippet.documentation = orDocs;
			items.push(orSnippet);
			const oriSnippet = new vscode.CompletionItem('ori');
			const oriDocs: any = new vscode.MarkdownString();
			oriSnippet.insertText = new vscode.SnippetString('ori $${1}, $${2}, ${3}');
			oriDocs.appendCodeblock(`ori Rd, Rs, Immediate;`, "wramp");
			oriDocs.appendMarkdown(`**Or, immediate** - _Bitwise Instruction_
* Put the result of the logical OR of register Rs and the zero-extended immediate into register Rd`);
			oriSnippet.documentation = oriDocs;
			items.push(oriSnippet);
			const xorSnippet = new vscode.CompletionItem('xor');
			const xorDocs: any = new vscode.MarkdownString();
			xorSnippet.insertText = new vscode.SnippetString('xor $${1}, $${2}, $${3}');
			xorDocs.appendCodeblock(`xor Rd, Rs, Rt;`, "wramp");
			xorDocs.appendMarkdown(`**Xor** - _Bitwise Instruction_
* Put the result of the logical exclusive-OR of registers Rs and Rt into register Rd`);
			xorSnippet.documentation = xorDocs;
			items.push(xorSnippet);
			const xoriSnippet = new vscode.CompletionItem('xori');
			const xoriDocs: any = new vscode.MarkdownString();
			xoriSnippet.insertText = new vscode.SnippetString('xori $${1}, $${2}, ${3}');
			xoriDocs.appendCodeblock(`xori Rd, Rs, Immediate;`, "wramp");
			xoriDocs.appendMarkdown(`**Xor, immediate** - _Bitwise Instruction_
* Put the result of the logical exclusive-OR of register Rs and the zero-extended immediate into register Rd`);
			xoriSnippet.documentation = xoriDocs;
			items.push(xoriSnippet);
			const sllSnippet = new vscode.CompletionItem('sll');
			const sllDocs: any = new vscode.MarkdownString();
			sllSnippet.insertText = new vscode.SnippetString('sll $${1}, $${2}, $${3}');
			sllDocs.appendCodeblock(`sll Rd, Rs, Rt;`, "wramp");
			sllDocs.appendMarkdown(`**Shift left logical** - _Bitwise Instruction_
* Shift the value in register Rs left by the unsigned value given by the least significant 5 bits of register Rt, and put the result in register Rd, inserting zeros into the low order bits`);
			sllSnippet.documentation = sllDocs;
			items.push(sllSnippet);
			const slliSnippet = new vscode.CompletionItem('slli');
			const slliDocs: any = new vscode.MarkdownString();
			slliSnippet.insertText = new vscode.SnippetString('slli $${1}, $${2}, ${3}');
			slliDocs.appendCodeblock(`slli Rd, Rs, Immediate;`, "wramp");
			slliDocs.appendMarkdown(`**Shift left logical, immediate** - _Bitwise Instruction_
* Shift the value in register Rs left by the unsigned value given by the least significant 5 bits of the immediate, and put the result in register Rd, inserting zeros into the low order bits`);
			slliSnippet.documentation = slliDocs;
			items.push(slliSnippet);
			const srlSnippet = new vscode.CompletionItem('srl');
			const srlDocs: any = new vscode.MarkdownString();
			srlSnippet.insertText = new vscode.SnippetString('srl $${1}, $${2}, $${3}');
			srlDocs.appendCodeblock(`srl Rd, Rs, Rt;`, "wramp");
			srlDocs.appendMarkdown(`**Shift right logical** - _Bitwise Instruction_
* Shift the value in register Rs right by the unsigned value given by the least significant 5 bits of register Rt, and place the result in register Rd, inserting zeros into the high order bits`);
			srlSnippet.documentation = srlDocs;
			items.push(srlSnippet);
			const srliSnippet = new vscode.CompletionItem('srli');
			const srliDocs: any = new vscode.MarkdownString();
			srliSnippet.insertText = new vscode.SnippetString('srli $${1}, $${2}, ${3}');
			srliDocs.appendCodeblock(`srli Rd, Rs, Immediate;`, "wramp");
			srliDocs.appendMarkdown(`**Shift right logical, immediate** - _Bitwise Instruction_
* Shift the value in register Rs right by the unsigned value given by the least significant 5 bits of the immediate, and place the result in register Rd, inserting zeros into the high order bits`);
			srliSnippet.documentation = srliDocs;
			items.push(srliSnippet);
			const sraSnippet = new vscode.CompletionItem('sra');
			const sraDocs: any = new vscode.MarkdownString();
			sraSnippet.insertText = new vscode.SnippetString('sra $${1}, $${2}, $${3}');
			sraDocs.appendCodeblock(`sra Rd, Rs, Rt;`, "wramp");
			sraDocs.appendMarkdown(`**Shift right arithmetic** - _Bitwise Instruction_
* Shift the value in register Rs right by the unsigned value given by the least significant 5 bits of register Rt, and place the result in register Rd, sign-extending the high order bits`);
			sraSnippet.documentation = sraDocs;
			items.push(sraSnippet);
			const sraiSnippet = new vscode.CompletionItem('srai');
			const sraiDocs: any = new vscode.MarkdownString();
			sraiSnippet.insertText = new vscode.SnippetString('srai $${1}, $${2}, ${3}');
			sraiDocs.appendCodeblock(`srai Rd, Rs, Immediate;`, "wramp");
			sraiDocs.appendMarkdown(`**Shift right arithmetic, immediate** - _Bitwise Instruction_
* Shift the value in register Rs right by the unsigned value given by the least significant 5 bits of the immediate, and place the result in register Rd, sign-extending the high order bits`);
			sraiSnippet.documentation = sraiDocs;
			items.push(sraiSnippet);



			//tests

			const sltSnippet = new vscode.CompletionItem('slt');
			const sltDocs: any = new vscode.MarkdownString();
			sltSnippet.insertText = new vscode.SnippetString('slt $${1}, $${2}, $${3}');
			sltDocs.appendCodeblock(`slt Rd, Rs, Rt;`, "wramp");
			sltDocs.appendMarkdown(`**Set on less than** - _Test Instruction_
* Set register Rd to 1 if register Rs is less than register Rt according to a signed comparison, and 0 otherwise`);
			sltSnippet.documentation = sltDocs;
			items.push(sltSnippet);
			const sltiSnippet = new vscode.CompletionItem('slti');
			const sltiDocs: any = new vscode.MarkdownString();
			sltiSnippet.insertText = new vscode.SnippetString('slti $${1}, $${2}, ${3}');
			sltiDocs.appendCodeblock(`slti Rd, Rs, Immediate;`, "wramp");
			sltiDocs.appendMarkdown(`**Set on less than immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is less than the sign-extended immediate according to a signed comparison, and 0 otherwise`);
			sltiSnippet.documentation = sltiDocs;
			items.push(sltiSnippet);
			const sltuSnippet = new vscode.CompletionItem('sltu');
			const sltuDocs: any = new vscode.MarkdownString();
			sltuSnippet.insertText = new vscode.SnippetString('sltu $${1}, $${2}, $${3}');
			sltuDocs.appendCodeblock(`sltu Rd, Rs, Rt;`, "wramp");
			sltuDocs.appendMarkdown(`**Set on less than, unsigned** - _Test Instruction_
* Set register Rd to 1 if register Rs is less than register Rt according to an unsigned comparison, and 0 otherwise`);
			sltuSnippet.documentation = sltuDocs;
			items.push(sltuSnippet);
			const sltuiSnippet = new vscode.CompletionItem('sltui');
			const sltuiDocs: any = new vscode.MarkdownString();
			sltuiSnippet.insertText = new vscode.SnippetString('sltui $${1}, $${2}, ${3}');
			sltuiDocs.appendCodeblock(`sltui Rd, Rs, Immediate;`, "wramp");
			sltuiDocs.appendMarkdown(`**Set on less than, unsigned, immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is less than the zero-extended immediate according to an unsigned comparison, and 0 otherwise`);
			sltuiSnippet.documentation = sltuiDocs;
			items.push(sltuiSnippet);
			const sgtSnippet = new vscode.CompletionItem('sgt');
			const sgtDocs: any = new vscode.MarkdownString();
			sgtSnippet.insertText = new vscode.SnippetString('sgt $${1}, $${2}, $${3}');
			sgtDocs.appendCodeblock(`sgt Rd, Rs, Rt;`, "wramp");
			sgtDocs.appendMarkdown(`**Set on greater than** - _Test Instruction_
* Set register Rd to 1 if register Rs is greater than register Rt according to a signed comparison, and 0 otherwise`);
			sgtSnippet.documentation = sgtDocs;
			items.push(sgtSnippet);
			const sgtiSnippet = new vscode.CompletionItem('sgti');
			const sgtiDocs: any = new vscode.MarkdownString();
			sgtiSnippet.insertText = new vscode.SnippetString('sgti $${1}, $${2}, ${3}');
			sgtiDocs.appendCodeblock(`sgti Rd, Rs, Immediate;`, "wramp");
			sgtiDocs.appendMarkdown(`**Set on greater than, immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is greater than the sign-extended immediate according to a signed comparison, and 0 otherwise`);
			sgtiSnippet.documentation = sgtiDocs;
			items.push(sgtiSnippet);
			const sgtuSnippet = new vscode.CompletionItem('sgtu');
			const sgtuDocs: any = new vscode.MarkdownString();
			sgtuSnippet.insertText = new vscode.SnippetString('sgtu $${1}, $${2}, $${3}');
			sgtuDocs.appendCodeblock(`sgtu Rd, Rs, Rt;`, "wramp");
			sgtuDocs.appendMarkdown(`**Set on greater than, unsigned** - _Test Instruction_
* Set register Rd to 1 if register Rs is greater than register Rt according to an unsigned comparison, and 0 otherwise`);
			sgtuSnippet.documentation = sgtuDocs;
			items.push(sgtuSnippet);
			const sgtuiSnippet = new vscode.CompletionItem('sgtui');
			const sgtuiDocs: any = new vscode.MarkdownString();
			sgtuiSnippet.insertText = new vscode.SnippetString('sgtui $${1}, $${2}, ${3}');
			sgtuiDocs.appendCodeblock(`sgtui Rd, Rs, Immediate;`, "wramp");
			sgtuiDocs.appendMarkdown(`**Set on greater than, unsigned, immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is greater than the zero-extended immediate according to an unsigned comparison, and 0 otherwise`);
			sgtuiSnippet.documentation = sgtuiDocs;
			items.push(sgtuiSnippet);
			const sleSnippet = new vscode.CompletionItem('sle');
			const sleDocs: any = new vscode.MarkdownString();
			sleSnippet.insertText = new vscode.SnippetString('sle $${1}, $${2}, $${3}');
			sleDocs.appendCodeblock(`sle Rd, Rs, Rt;`, "wramp");
			sleDocs.appendMarkdown(`**Set on less than or equal to** - _Test Instruction_
* Set register Rd to 1 if register Rs is less than or equal to register Rt according to a signed comparison, and 0 otherwise`);
			sleSnippet.documentation = sleDocs;
			items.push(sleSnippet);
			const sleiSnippet = new vscode.CompletionItem('slei');
			const sleiDocs: any = new vscode.MarkdownString();
			sleiSnippet.insertText = new vscode.SnippetString('slei $${1}, $${2}, ${3}');
			sleiDocs.appendCodeblock(`slei Rd, Rs, Immediate;`, "wramp");
			sleiDocs.appendMarkdown(`**Set on less than or equal to, immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is less than or equal to the sign-extended immediate according to a signed comparison, and 0 otherwise`);
			sleiSnippet.documentation = sleiDocs;
			items.push(sleiSnippet);
			const sleuSnippet = new vscode.CompletionItem('sleu');
			const sleuDocs: any = new vscode.MarkdownString();
			sleuSnippet.insertText = new vscode.SnippetString('sleu $${1}, $${2}, $${3}');
			sleuDocs.appendCodeblock(`sleu Rd, Rs, Rt;`, "wramp");
			sleuDocs.appendMarkdown(`**Set on less than or equal to, unsigned** - _Test Instruction_
* Set register Rd to 1 if register Rs is less than or equal to register Rt according to an unsigned comparison, and 0 otherwise`);
			sleuSnippet.documentation = sleuDocs;
			items.push(sleuSnippet);
			const sleuiSnippet = new vscode.CompletionItem('sleui');
			const sleuiDocs: any = new vscode.MarkdownString();
			sleuiSnippet.insertText = new vscode.SnippetString('sleui $${1}, $${2}, ${3}');
			sleuiDocs.appendCodeblock(`sleui Rd, Rs, Immediate;`, "wramp");
			sleuiDocs.appendMarkdown(`**Set on less than or equal to, unsigned, immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is less than or equal to the zero-extended immediate according to an unsigned comparison, and 0 otherwise`);
			sleuiSnippet.documentation = sleuiDocs;
			items.push(sleuiSnippet);
			const sgeSnippet = new vscode.CompletionItem('sge');
			const sgeDocs: any = new vscode.MarkdownString();
			sgeSnippet.insertText = new vscode.SnippetString('sge $${1}, $${2}, $${3}');
			sgeDocs.appendCodeblock(`sge Rd, Rs, Rt;`, "wramp");
			sgeDocs.appendMarkdown(`**Set on greater than or equal to** - _Test Instruction_
* Set register Rd to 1 if register Rs is greater than or equal to register Rt according to a signed comparison, and 0 otherwise`);
			sgeSnippet.documentation = sgeDocs;
			items.push(sgeSnippet);
			const sgeiSnippet = new vscode.CompletionItem('sgei');
			const sgeiDocs: any = new vscode.MarkdownString();
			sgeiSnippet.insertText = new vscode.SnippetString('sgei $${1}, $${2}, ${3}');
			sgeiDocs.appendCodeblock(`sgei Rd, Rs, Immediate;`, "wramp");
			sgeiDocs.appendMarkdown(`**Set on greater than or equal to immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is greater than or equal to the sign-extended immediate according to a signed comparison, and 0 otherwise`);
			sgeiSnippet.documentation = sgeiDocs;
			items.push(sgeiSnippet);
			const sgeuSnippet = new vscode.CompletionItem('sgeu');
			const sgeuDocs: any = new vscode.MarkdownString();
			sgeuSnippet.insertText = new vscode.SnippetString('sgeu $${1}, $${2}, $${3}');
			sgeuDocs.appendCodeblock(`sgeu Rd, Rs, Rt;`, "wramp");
			sgeuDocs.appendMarkdown(`**Set on greater than or equal to, unsigned** - _Test Instruction_
* Set register Rd to 1 if register Rs is greater than or equal to register Rt according to an unsigned comparison, and 0 otherwise`);
			sgeuSnippet.documentation = sgeuDocs;
			items.push(sgeuSnippet);
			const sgeuiSnippet = new vscode.CompletionItem('sgeui');
			const sgeuiDocs: any = new vscode.MarkdownString();
			sgeuiSnippet.insertText = new vscode.SnippetString('sgeui $${1}, $${2}, ${3}');
			sgeuiDocs.appendCodeblock(`sgeui Rd, Rs, Immediate;`, "wramp");
			sgeuiDocs.appendMarkdown(`**Set on greater than or equal to, unsigned, immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is greater than or equal to the zero-extended immediate according to an unsigned comparison, and 0 otherwise`);
			sgeuiSnippet.documentation = sgeuiDocs;
			items.push(sgeuiSnippet);
			const seqSnippet = new vscode.CompletionItem('seq');
			const seqDocs: any = new vscode.MarkdownString();
			seqSnippet.insertText = new vscode.SnippetString('seq $${1}, $${2}, $${3}');
			seqDocs.appendCodeblock(`seq Rd, Rs, Rt;`, "wramp");
			seqDocs.appendMarkdown(`**Set on equal to** - _Test Instruction_
* Set register Rd to 1 if register Rs is equal to register Rt according to a signed comparison, and 0 otherwise`);
			seqSnippet.documentation = seqDocs;
			items.push(seqSnippet);
			const seqiSnippet = new vscode.CompletionItem('seqi');
			const seqiDocs: any = new vscode.MarkdownString();
			seqiSnippet.insertText = new vscode.SnippetString('seqi $${1}, $${2}, ${3}');
			seqiDocs.appendCodeblock(`seqi Rd, Rs, Immediate;`, "wramp");
			seqiDocs.appendMarkdown(`**Set on equal to immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is equal to the sign-extended immediate according to a signed comparison, and 0 otherwise`);
			seqiSnippet.documentation = seqiDocs;
			items.push(seqiSnippet);
			const sequSnippet = new vscode.CompletionItem('sequ');
			const sequDocs: any = new vscode.MarkdownString();
			sequSnippet.insertText = new vscode.SnippetString('sequ $${1}, $${2}, $${3}');
			sequDocs.appendCodeblock(`sequ Rd, Rs, Rt;`, "wramp");
			sequDocs.appendMarkdown(`**Set on equal to, unsigned** - _Test Instruction_
* Set register Rd to 1 if register Rs is equal to register Rt according to an unsigned comparison, and 0 otherwise`);
			sequSnippet.documentation = sequDocs;
			items.push(sequSnippet);
			const sequiSnippet = new vscode.CompletionItem('sequi');
			const sequiDocs: any = new vscode.MarkdownString();
			sequiSnippet.insertText = new vscode.SnippetString('sequi $${1}, $${2}, ${3}');
			sequiDocs.appendCodeblock(`sequi Rd, Rs, Immediate;`, "wramp");
			sequiDocs.appendMarkdown(`**Set on equal to, unsigned, immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is equal to the zero-extended immediate according to an unsigned comparison, and 0 otherwise`);
			sequiSnippet.documentation = sequiDocs;
			items.push(sequiSnippet);
			const sneSnippet = new vscode.CompletionItem('sne');
			const sneDocs: any = new vscode.MarkdownString();
			sneSnippet.insertText = new vscode.SnippetString('sne $${1}, $${2}, $${3}');
			sneDocs.appendCodeblock(`sne Rd, Rs, Rt;`, "wramp");
			sneDocs.appendMarkdown(`**Set on not equal to** - _Test Instruction_
* Set register Rd to 1 if register Rs is not equal to register Rt according to a signed comparison, and 0 otherwise`);
			sneSnippet.documentation = sneDocs;
			items.push(sneSnippet);
			const sneiSnippet = new vscode.CompletionItem('snei');
			const sneiDocs: any = new vscode.MarkdownString();
			sneiSnippet.insertText = new vscode.SnippetString('snei $${1}, $${2}, ${3}');
			sneiDocs.appendCodeblock(`snei Rd, Rs, Immediate;`, "wramp");
			sneiDocs.appendMarkdown(`**Set on not equal to immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is not equal to the sign-extended immediate according to a signed comparison, and 0 otherwise`);
			sneiSnippet.documentation = sneiDocs;
			items.push(sneiSnippet);
			const sneuSnippet = new vscode.CompletionItem('sneu');
			const sneuDocs: any = new vscode.MarkdownString();
			sneuSnippet.insertText = new vscode.SnippetString('sneu $${1}, $${2}, $${3}');
			sneuDocs.appendCodeblock(`sneu Rd, Rs, Rt;`, "wramp");
			sneuDocs.appendMarkdown(`**Set on not equal to, unsigned** - _Test Instruction_
* Set register Rd to 1 if register Rs is not equal to register Rt according to an unsigned comparison, and 0 otherwise`);
			sneuSnippet.documentation = sneuDocs;
			items.push(sneuSnippet);
			const sneuiSnippet = new vscode.CompletionItem('sneui');
			const sneuiDocs: any = new vscode.MarkdownString();
			sneuiSnippet.insertText = new vscode.SnippetString('sneui $${1}, $${2}, ${3}');
			sneuiDocs.appendCodeblock(`sneui Rd, Rs, Immediate;`, "wramp");
			sneuiDocs.appendMarkdown(`**Set on not equal to, unsigned, immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is not equal to the zero-extended immediate according to an unsigned comparison, and 0 otherwise`);
			sneuiSnippet.documentation = sneuiDocs;
			items.push(sneuiSnippet);



			//branch
			const jSnippet = new vscode.CompletionItem('j');
			const jDocs: any = new vscode.MarkdownString();
			jSnippet.insertText = new vscode.SnippetString('j ${1}');
			jDocs.appendCodeblock(`j Address;`, "wramp");
			jDocs.appendMarkdown(`**Jump** - _Branch Instruction_
* Unconditionally jump to the instruction whose address is given by the address field`);
			jSnippet.documentation = jDocs;
			items.push(jSnippet);
			const jrSnippet = new vscode.CompletionItem('jr');
			const jrDocs: any = new vscode.MarkdownString();
			jrSnippet.insertText = new vscode.SnippetString('jr $${1}');
			jrDocs.appendCodeblock(`jr Rs;`, "wramp");
			jrDocs.appendMarkdown(`**Jump to register** - _Branch Instruction_
* Unconditionally jump to the instruction whose address is in the least significant 20 bits of register Rs`);
			jrSnippet.documentation = jrDocs;
			items.push(jrSnippet);
			const jalSnippet = new vscode.CompletionItem('jal');
			const jalDocs: any = new vscode.MarkdownString();
			jalSnippet.insertText = new vscode.SnippetString('jal ${1}');
			jalDocs.appendCodeblock(`jal Address;`, "wramp");
			jalDocs.appendMarkdown(`**Jump and link** - _Branch Instruction_
* Unconditionally jump to the instruction whose address is given by the address field
* Save the address of the next instruction in register $ra`);
			jalSnippet.documentation = jalDocs;
			items.push(jalSnippet);
			const jalrSnippet = new vscode.CompletionItem('jalr');
			const jalrDocs: any = new vscode.MarkdownString();
			jalrSnippet.insertText = new vscode.SnippetString('jalr $${1}');
			jalrDocs.appendCodeblock(`jalr Rs;`, "wramp");
			jalrDocs.appendMarkdown(`**Jump and link register** - _Branch Instruction_
* Unconditionally jump to the instruction whose address is in the least significant 20 bits of register Rs
* Save the address of the next instruction in register $ra`);
			jalrSnippet.documentation = jalrDocs;
			items.push(jalrSnippet);
			const beqzSnippet = new vscode.CompletionItem('beqz');
			const beqzDocs: any = new vscode.MarkdownString();
			beqzSnippet.insertText = new vscode.SnippetString('beqz $${1}, ${2}');
			beqzDocs.appendCodeblock(`beqz Rs, Offset;`, "wramp");
			beqzDocs.appendMarkdown(`**Branch on equal to zero** - _Branch Instruction_
* Conditionally branch the number of instructions specified by the sign-extended offset if register Rs is equal to 0`);
			beqzSnippet.documentation = beqzDocs;
			items.push(beqzSnippet);
			const bnezSnippet = new vscode.CompletionItem('bnez');
			const bnezDocs: any = new vscode.MarkdownString();
			bnezSnippet.insertText = new vscode.SnippetString('bnez $${1}, ${2}');
			bnezDocs.appendCodeblock(`bnez Rs, Offset;`, "wramp");
			bnezDocs.appendMarkdown(`**Branch on not equal to zero** - _Branch Instruction_
* Conditionally branch the number of instructions specified by the sign-extended offset if register Rs is not equal to 0`);
			bnezSnippet.documentation = bnezDocs;
			items.push(bnezSnippet);



			//memory
			const lwSnippet = new vscode.CompletionItem('lw');
			const lwDocs: any = new vscode.MarkdownString();
			lwSnippet.insertText = new vscode.SnippetString('lw $${1}, ${2}(${3})');
			lwDocs.appendCodeblock(`lw Rd, Offset(Rs);`, "wramp");
			lwDocs.appendMarkdown(`**Load word** - _Memory Instruction_
* Add the contents of register Rs and the sign-extended offset to give an effective address
* Load the contents of the memory location specified by this effective address into register Rd`);
			lwSnippet.documentation = lwDocs;
			items.push(lwSnippet);
			const swSnippet = new vscode.CompletionItem('sw');
			const swDocs: any = new vscode.MarkdownString();
			swSnippet.insertText = new vscode.SnippetString('sw $${1}, ${2}(${3})');
			swDocs.appendCodeblock(`sw Rd, Offset(Rs);`, "wramp");
			swDocs.appendMarkdown(`**Store word** - _Memory Instruction_
* Add the contents of register Rs and the sign-extended offset to give an effective address
* Store the contents of register Rd into the memory location specified by this effective address`);
			swSnippet.documentation = swDocs;
			items.push(swSnippet);

			//special boys

			const movgsSnippet = new vscode.CompletionItem('movgs');
			const movgsDocs: any = new vscode.MarkdownString();
			movgsSnippet.insertText = new vscode.SnippetString('movgs $${1}, $${2}');
			movgsDocs.appendCodeblock(`movgs Rd, Rs;`, "wramp");
			movgsDocs.appendMarkdown(`**Move general register to special register** - _Special Instruction_
* Copy the contents of general purpose register Rs into special purpose register Rd`);
			movgsSnippet.documentation = movgsDocs;
			items.push(movgsSnippet);
			const movsgSnippet = new vscode.CompletionItem('movsg');
			const movsgDocs: any = new vscode.MarkdownString();
			movsgSnippet.insertText = new vscode.SnippetString('movsg $${1}, $${2}');
			movsgDocs.appendCodeblock(`movsg Rd, Rs;`, "wramp");
			movsgDocs.appendMarkdown(`**Move special register to general register** - _Special Instruction_
* Copy the contents of special purpose register Rs into general purpose register Rd`);
			movsgSnippet.documentation = movsgDocs;
			items.push(movsgSnippet);
			const breakSnippet = new vscode.CompletionItem('break');
			const breakDocs: any = new vscode.MarkdownString();
			breakSnippet.insertText = new vscode.SnippetString('break ');
			breakDocs.appendCodeblock(`break;`, "wramp");
			breakDocs.appendMarkdown(`**Break** - _Special Instruction_
* Generate a breakpoint exception, transferring control to the exception handler`);
			breakSnippet.documentation = breakDocs;
			items.push(breakSnippet);
			const syscallSnippet = new vscode.CompletionItem('syscall');
			const syscallDocs: any = new vscode.MarkdownString();
			syscallSnippet.insertText = new vscode.SnippetString('syscall ');
			syscallDocs.appendCodeblock(`syscall;`, "wramp");
			syscallDocs.appendMarkdown(`**System call** - _Special Instruction_
* Generate a system call exception, transferring control to the exception handler`);
			syscallSnippet.documentation = syscallDocs;
			items.push(syscallSnippet);
			const rfeSnippet = new vscode.CompletionItem('rfe');
			const rfeDocs: any = new vscode.MarkdownString();
			rfeSnippet.insertText = new vscode.SnippetString('rfe ');
			rfeDocs.appendCodeblock(`rfe;`, "wramp");
			rfeDocs.appendMarkdown(`**Return from exception** - _Special Instruction_
* Restore the saved interrupt enable and kernel/user mode bits and jump to the instruction at the address specified in the special register $ear `);
			rfeSnippet.documentation = rfeDocs;
			items.push(rfeSnippet);






			// a completion item that inserts its text as snippet,
			// the `insertText`-property is a `SnippetString` which will be
			// honored by the editor.

			// const snippetCompletion = new vscode.CompletionItem('addui');
			// snippetCompletion.insertText = new vscode.SnippetString('addui $${1}, $${2}, $${3}');
			// const docs: any = new vscode.MarkdownString("markdown");
			// snippetCompletion.documentation = docs;


			// a completion item that can be accepted by a commit character,
			// the `commitCharacters`-property is set which means that the completion will
			// be inserted and then the character will be typed.
			const commitCharacterCompletion = new vscode.CompletionItem('.');
			commitCharacterCompletion.commitCharacters = [''];
			commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get directives');

			items.push(commitCharacterCompletion);

			// a completion item that retriggers IntelliSense when being accepted,
			// the `command`-property is set which the editor will execute after 
			// completion has been inserted. Also, the `insertText` is set so that 
			// a space is inserted after `new`

			// const commandCompletion = new vscode.CompletionItem('new');
			// commandCompletion.kind = vscode.CompletionItemKind.Keyword;
			// commandCompletion.insertText = 'new ';
			// commandCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };

			// return all completion items as array
			return items;//[

			//sneuiSnippet,
			//commitCharacterCompletion,
			//commandCompletion
			//];
		}
	});

	const provider2 = vscode.languages.registerCompletionItemProvider(
		'wramp',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				// get all text until the `position` and check if it reads `console.`
				// and if so then complete if `log`, `warn`, and `error`
				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('.')) {
					return undefined;
				}

				const textLabel = new vscode.CompletionItem('text');
				const textLabelDocs: any = new vscode.MarkdownString(`The .text section contains WRAMP assembly instructions which will be converted to machine language
				which can be executed on the WRAMP CPU.`);
				textLabel.documentation = textLabelDocs;

				const dataLabel = new vscode.CompletionItem('data');
				const dataLabelDocs: any = new vscode.MarkdownString(`Within the .data section, space in the memory can be reserved and initialised.
				This is useful for strings, constants, and variables which have an initial value`);
				dataLabel.documentation = dataLabelDocs;

				const wordLabel = new vscode.CompletionItem('word');
				wordLabel.insertText = new vscode.SnippetString('word ${1}');
				const wordLabelDocs: any = new vscode.MarkdownString(`.word n assigns one word of memory space and initialises it to the number n. If a character is provided
				instead of a number, like .word ‘a’, the space will be initialised to the ASCII value of that character.
				If the name of a label is provided, like .word main, the space will be initialised to the address of
				that label.`);
				wordLabel.documentation = wordLabelDocs;

				const bssLabel = new vscode.CompletionItem('bss');
				const bssLabelDocs: any = new vscode.MarkdownString(`The .bss section allows memory space to be reserved but not initialised. 
				The advantage of this is that space can be reserved in chunks using a single command. 
				This feature makes the .bss section useful for arrays.`);
				bssLabel.documentation = bssLabelDocs;

				const asciizLabel = new vscode.CompletionItem('asciiz');
				asciizLabel.insertText = new vscode.SnippetString('asciiz "${1}"');
				const asciizLabelDocs: any = new vscode.MarkdownString(`.asciiz "str" reserves and initialises space for a NULL terminated ASCII string ("str"). This means
				that the string is followed immediately by a NULL character (0). The NULL character can then be
				used to identify the end of the string.`);
				asciizLabel.documentation = asciizLabelDocs;

				const asciiLabel = new vscode.CompletionItem('ascii');
				asciiLabel.insertText = new vscode.SnippetString('ascii "${1}"');
				const asciiLabelDocs: any = new vscode.MarkdownString(`.ascii "str" reserves and initialises space for the ASCII string "str" without NULL terminating.`);
				asciiLabel.documentation = asciiLabelDocs;

				const spaceLabel = new vscode.CompletionItem('space');
				spaceLabel.insertText = new vscode.SnippetString('space ${1}');
				const spaceLabelDocs: any = new vscode.MarkdownString(`.space n is used to allocate a chunk of space of size n in the .bss section.`);
				spaceLabel.documentation = spaceLabelDocs;

				const globalLabel = new vscode.CompletionItem('global');
				globalLabel.insertText = new vscode.SnippetString('global ${1}');
				const globalLabelDocs: any = new vscode.MarkdownString(`When linking multiple files, we need to share functions and data. However, we do not want to expose all
				the labels in a file. Only labels declared as global (using the .global directive) are accessible outside the
				current file.`);
				globalLabel.documentation = globalLabelDocs;

				const equLabel = new vscode.CompletionItem('equ');
				equLabel.insertText = new vscode.SnippetString('equ ${1}, ${2}');
				const equLabelDocs: any = new vscode.MarkdownString(`The .equ directive will create a named constant, which is simply an alias to a number.
				It is similar to a #define directive in C. It will not define an area in memory, nor will it exist in a compiled program aside from where it is used.`);
				equLabel.documentation = equLabelDocs;

				return [
					textLabel,
					bssLabel,
					dataLabel,
					asciizLabel,
					asciiLabel,
					spaceLabel,
					wordLabel,
					globalLabel,
					equLabel
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);

	vscode.languages.registerHoverProvider('wramp', {
		provideHover(document, position, token) {

			const range = document.getWordRangeAtPosition(position);
			const word = document.getText(range);

			const dollarrange = document.getWordRangeAtPosition(position,RegExp("[$]sp"));
			const dollarword = document.getText(dollarrange);

			const dollarrange2 = document.getWordRangeAtPosition(position,RegExp("[$]ra"));
			const dollarword2 = document.getText(dollarrange2);

			//if (word == "HELLO") {

			//	return new vscode.Hover({
			//		language: "Hello language",
			//		value: "Hello Value"
			//});
			//}

			// 			if (word == "add") {

			// 				const markdown = new vscode.MarkdownString('');
			// 				const codeBlock = `add Rd, Rs, Rt;`;
			// 				markdown.appendCodeblock(codeBlock, "wramp");
			// 				//markdown.appendText("______________________________\n"); 
			// 				markdown.appendMarkdown(
			// 					`**Addition** - _Arithmetic Instruction_
			// * Put the sum of register Rs and register Rt into register Rd. 
			// * Generate an overflow exception on signed overflow.`
			// 				);

			// 				markdown.isTrusted = true;

			// 				return new vscode.Hover(markdown, new vscode.Range(position, position));
			// 				//return new vscode.Hover({
			// 					//language: "Hello language",
			// 					//value: "add Rd, Rs, Rt \n    Addition\n    Arithmetic Instruction\nPut the sum of register Rs and register Rt into register Rd. Generate an overflow exception on signed overflow."
			// 				//});
			// 			}

			//registers
			if (dollarword == "$sp") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `$sp`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Stack Pointer** - _Register_
* The fourteenth register is denoted $sp. This register is defined by the conventions to be the stack pointer.
While the hardware imposes no special conditions on this register, failure to follow this convention may
affect the ability of code to interoperate with other software.`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}

			if (dollarword2 == "$ra") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `$ra`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Return Address** - _Register_
* The fifteenth register is denoted $ra. It is defined to be the subroutine return address register. When a
jump and link instruction is executed this register is loaded with the address of the next instruction after
the jump and link. A return from subroutine is performed by executing a jump to register $ra, ie. jr
$ra`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			//directives
			if (word == "text") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `.text`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Executable Code** - _Directive_
* The .text section contains WRAMP assembly instructions which will be converted to machine language
which can be executed on the WRAMP CPU.`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}

			if (word == "data") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `.data`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Initialised Data** - _Directive_
* Within the .data section, space in the memory can be reserved and initialised.
This is useful for strings, constants, and variables which have an initial value`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}

			if (word == "word") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `.word n`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Memory Assigning** - _Directive_
* .word n assigns one word of memory space and initialises it to the number n. If a character is provided
instead of a number, like .word ‘a’, the space will be initialised to the ASCII value of that character.
If the name of a label is provided, like .word main, the space will be initialised to the address of
that label.`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}

			if (word == "bss") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `.bss`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Uninitialised Data** - _Directive_
* The .bss section allows memory space to be reserved but not initialised. 
The advantage of this is that space can be reserved in chunks using a single command. 
This feature makes the .bss section useful for arrays.`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}

			if (word == "asciiz") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `.asciiz "str"`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Memory Assigning** - _Directive_
* .asciiz "str" reserves and initialises space for a NULL terminated ASCII string ("str"). This means
that the string is followed immediately by a NULL character (0). The NULL character can then be
used to identify the end of the string.`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}

			if (word == "ascii") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `.ascii "str"`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Memory Assigning** - _Directive_
* .ascii "str" reserves and initialises space for the ASCII string "str" without NULL terminating.`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}

			if (word == "space") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `.space n`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Memory Assigning** - _Directive_
* .space n is used to allocate a chunk of space of size n in the .bss section.`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}

			if (word == "global") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `.global label`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Label Attribute** - _Directive_
* When linking multiple files, we need to share functions and data. However, we do not want to expose all
the labels in a file. Only labels declared as global (using the .global directive) are accessible outside the
current file.`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}

			if (word == "equ") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `.equ constant, value`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Assembler Instruction** - _Directive_
* The .equ directive will create a named constant, which is simply an alias to a number.
It is similar to a #define directive in C. It will not define an area in memory, nor will it exist in a compiled program aside from where it is used.`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}

			//Arithmetic Instructions
			if (word == "add") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `add Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Addition** - _Arithmetic Instruction_
* Put the sum of register Rs and register Rt into register Rd
* Generate an overflow exception on signed overflow`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "addi") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `addi Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Addition, immediate** - _Arithmetic Instruction_
* Put the sum of register Rs and the sign-extended immediate into register Rd
* Generate an overflow exception on signed overflow`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "addu") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `addu Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Addition, unsigned** - _Arithmetic Instruction_
* Put the sum of register Rs and register Rt into register Rd
* Generate an overflow exception on unsigned overflow`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "addui") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `addui Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Addition, unsigned, immediate** - _Arithmetic Instruction_
* Put the sum of register Rs and the zero-extended immediate into register Rd
* Generate an overflow exception on unsigned overflow`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sub") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sub Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Subtraction** - _Arithmetic Instruction_
* Put the difference of register Rs and register Rt into register Rd
* Generate an overflow exception on signed overflow`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "subi") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `subi Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Subtraction, immediate** - _Arithmetic Instruction_
* Put the difference of register Rs and the sign-extended immediate into register Rd
* Generate an overflow exception on signed overflow`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "subu") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `subu Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Subtraction, unsigned** - _Arithmetic Instruction_
* Put the difference of register Rs and register Rt into register Rd
* Generate an overflow exception on unsigned overflow`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "subui") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `subui Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Subtraction, unsigned, immediate** - _Arithmetic Instruction_
* Put the difference of register Rs and the zero-extended immediate into register Rd
* Generate an overflow exception on unsigned overflow`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "mult") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `mult Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Multiplication** - _Arithmetic Instruction_
* Put the product of the signed multiplication of register Rs and register Rt into register Rd
* Generate an overflow exception on signed overflow`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "multi") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `multi Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Multiplication, immediate** - _Arithmetic Instruction_
* Put the product of the signed multiplication of register Rs and the sign-extended immediate into register Rd
* Generate an overflow exception on signed overflow`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "multu") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `multu Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Multiplication, unsigned** - _Arithmetic Instruction_
* Put the product of the unsigned multiplication of register Rs and register Rt into register Rd
* Generate an overflow exception on unsigned overflow`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "multui") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `multui Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Multiplication, unsigned, immediate** - _Arithmetic Instruction_
* Put the product of the unsigned multiplication of register Rs and the zero-extended immediate into register Rd
* Generate an overflow exception on unsigned overflow`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "div") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `div Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Division** - _Arithmetic Instruction_
* Put the result of the signed integer division of register Rs by register Rt into register Rd
* Generate a divide-by-zero exception if the contents of Rt is zero`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "divi") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `divi Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Division, immediate** - _Arithmetic Instruction_
* Put the result of the signed integer division of register Rs by the sign-extended immediate into register Rd
* Generate a divide-by-zero exception if the immediate value is zero`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "divu") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `divu Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Division, unsigned** - _Arithmetic Instruction_
* Put the result of the unsigned division of register Rs by register Rt into register Rd
* Generate a divide-by-zero exception if the contents of Rt is zero`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "divui") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `divui Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Division, unsigned, immediate** - _Arithmetic Instruction_
* Put the result of the unsigned division of register Rs by the zero-extended immediate into register Rd
* Generate a divide-by-zero exception if the immediate value is zero`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "rem") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `rem Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Remainder** - _Arithmetic Instruction_
* Put the remainder of the signed division of register Rs by register Rt into register Rd
* Generate a divide-by-zero exception if the contents of Rt is zero`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "remi") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `remi Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Remainder, immediate** - _Arithmetic Instruction_
* Put the remainder of the signed division of register Rs by the sign-extended immediate into register Rd
* Generate a divide-by-zero exception if the immediate value is zero`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "remu") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `remu Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Remainder, unsigned** - _Arithmetic Instruction_
* Put the remainder of the unsigned division of register Rs by the register Rt into register Rd
* Generate a divide-by-zero exception if the contents of Rt is zero`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "remui") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `remui Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Remainder, unsigned, immediate** - _Arithmetic Instruction_
* Put the remainder of the unsigned division of register Rs by the zero-extended immediate into register Rd
* Generate a divide-by-zero exception if the immediate value is zero`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "lhi") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `lhi Rd, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Load high immediate** - _Arithmetic Instruction_
* Put the 16 bit immediate into the upper 16 bits of register Rd, and set the lower 16 bits to zero`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "la") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `la Rd, Address;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Load address** - _Arithmetic Instruction_
* Put the zero-extended 20 bit address into register Rd`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}

			//Bitwise Instructions
			if (word == "and") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `and Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**And** - _Bitwise Instruction_
* Put the result of the logical AND of registers Rs and Rt into register Rd`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "andi") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `andi Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**And, immediate** - _Bitwise Instruction_
* Put the result of the logical AND of register Rs and the zero-extended immediate into register Rd`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "or") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `or Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Or** - _Bitwise Instruction_
* Put the result of the logical OR of registers Rs and Rt into register Rd`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "ori") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `ori Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Or, immediate** - _Bitwise Instruction_
* Put the result of the logical OR of register Rs and the zero-extended immediate into register Rd`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "xor") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `xor Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Xor** - _Bitwise Instruction_
* Put the result of the logical exclusive-OR of registers Rs and Rt into register Rd`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "xori") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `xori Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Xor, immediate** - _Bitwise Instruction_
* Put the result of the logical exclusive-OR of register Rs and the zero-extended immediate into register Rd`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sll") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sll Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Shift left logical** - _Bitwise Instruction_
* Shift the value in register Rs left by the unsigned value given by the least significant 5 bits of register Rt, and put the result in register Rd, inserting zeros into the low order bits`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "slli") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `slli Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Shift left logical, immediate** - _Bitwise Instruction_
* Shift the value in register Rs left by the unsigned value given by the least significant 5 bits of the immediate, and put the result in register Rd, inserting zeros into the low order bits`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "srl") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `srl Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Shift right logical** - _Bitwise Instruction_
* Shift the value in register Rs right by the unsigned value given by the least significant 5 bits of register Rt, and place the result in register Rd, inserting zeros into the high order bits`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "srli") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `srli Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Shift right logical, immediate** - _Bitwise Instruction_
* Shift the value in register Rs right by the unsigned value given by the least significant 5 bits of the immediate, and place the result in register Rd, inserting zeros into the high order bits`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sra") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sra Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Shift right arithmetic** - _Bitwise Instruction_
* Shift the value in register Rs right by the unsigned value given by the least significant 5 bits of register Rt, and place the result in register Rd, sign-extending the high order bits`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "srai") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `srai Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Shift right arithmetic, immediate** - _Bitwise Instruction_
* Shift the value in register Rs right by the unsigned value given by the least significant 5 bits of the immediate, and place the result in register Rd, sign-extending the high order bits`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}

			//test instructions
			if (word == "slt") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `slt Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on less than** - _Test Instruction_
* Set register Rd to 1 if register Rs is less than register Rt according to a signed comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "slti") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `slti Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on less than immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is less than the sign-extended immediate according to a signed comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sltu") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sltu Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on less than, unsigned** - _Test Instruction_
* Set register Rd to 1 if register Rs is less than register Rt according to an unsigned comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sltui") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sltui Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on less than, unsigned, immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is less than the zero-extended immediate according to an unsigned comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sgt") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sgt Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on greater than** - _Test Instruction_
* Set register Rd to 1 if register Rs is greater than register Rt according to a signed comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sgti") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sgti Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on greater than, immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is greater than the sign-extended immediate according to a signed comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sgtu") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sgtu Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on greater than, unsigned** - _Test Instruction_
* Set register Rd to 1 if register Rs is greater than register Rt according to an unsigned comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sgtui") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sgtui Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on greater than, unsigned, immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is greater than the zero-extended immediate according to an unsigned comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sle") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sle Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on less than or equal to** - _Test Instruction_
* Set register Rd to 1 if register Rs is less than or equal to register Rt according to a signed comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "slei") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `slei Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on less than or equal to, immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is less than or equal to the sign-extended immediate according to a signed comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sleu") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sleu Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on less than or equal to, unsigned** - _Test Instruction_
* Set register Rd to 1 if register Rs is less than or equal to register Rt according to an unsigned comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sleui") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sleui Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on less than or equal to, unsigned, immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is less than or equal to the zero-extended immediate according to an unsigned comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sge") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sge Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on greater than or equal to** - _Test Instruction_
* Set register Rd to 1 if register Rs is greater than or equal to register Rt according to a signed comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sgei") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sgei Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on greater than or equal to immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is greater than or equal to the sign-extended immediate according to a signed comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sgeu") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sgeu Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on greater than or equal to, unsigned** - _Test Instruction_
* Set register Rd to 1 if register Rs is greater than or equal to register Rt according to an unsigned comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sgeui") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sgeui Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on greater than or equal to, unsigned, immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is greater than or equal to the zero-extended immediate according to an unsigned comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "seq") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `seq Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on equal to** - _Test Instruction_
* Set register Rd to 1 if register Rs is equal to register Rt according to a signed comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "seqi") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `seqi Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on equal to immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is equal to the sign-extended immediate according to a signed comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sequ") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sequ Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on equal to, unsigned** - _Test Instruction_
* Set register Rd to 1 if register Rs is equal to register Rt according to an unsigned comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sequi") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sequi Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on equal to, unsigned, immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is equal to the zero-extended immediate according to an unsigned comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sne") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sne Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on not equal to** - _Test Instruction_
* Set register Rd to 1 if register Rs is not equal to register Rt according to a signed comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "snei") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `snei Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on not equal to immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is not equal to the sign-extended immediate according to a signed comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sneu") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sneu Rd, Rs, Rt;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on not equal to, unsigned** - _Test Instruction_
* Set register Rd to 1 if register Rs is not equal to register Rt according to an unsigned comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sneui") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sneui Rd, Rs, Immediate;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Set on not equal to, unsigned, immediate** - _Test Instruction_
* Set register Rd to 1 if register Rs is not equal to the zero-extended immediate according to an unsigned comparison, and 0 otherwise`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}

			//Branch Instructions
			if (word == "j") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `j Address;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Jump** - _Branch Instruction_
* Unconditionally jump to the instruction whose address is given by the address field`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "jr") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `jr Rs;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Jump to register** - _Branch Instruction_
* Unconditionally jump to the instruction whose address is in the least significant 20 bits of register Rs`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "jal") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `jal Address;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Jump and link** - _Branch Instruction_
* Unconditionally jump to the instruction whose address is given by the address field
* Save the address of the next instruction in register $ra`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "jalr") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `jalr Rs;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Jump and link register** - _Branch Instruction_
* Unconditionally jump to the instruction whose address is in the least significant 20 bits of register Rs
* Save the address of the next instruction in register $ra`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "beqz") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `beqz Rs, Offset;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Branch on equal to zero** - _Branch Instruction_
* Conditionally branch the number of instructions specified by the sign-extended offset if register Rs is equal to 0`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "bnez") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `bnez Rs, Offset;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Branch on not equal to zero** - _Branch Instruction_
* Conditionally branch the number of instructions specified by the sign-extended offset if register Rs is not equal to 0`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}

			//Memory Instructions
			if (word == "lw") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `lw Rd, Offset(Rs);`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Load word** - _Memory Instruction_
* Add the contents of register Rs and the sign-extended offset to give an effective address
* Load the contents of the memory location specified by this effective address into register Rd`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "sw") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `sw Rd, Offset(Rs);`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Store word** - _Memory Instruction_
* Add the contents of register Rs and the sign-extended offset to give an effective address
* Store the contents of register Rd into the memory location specified by this effective address`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}

			//special instructions

			if (word == "movgs") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `movgs Rd, Rs;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Move general register to special register** - _Special Instruction_
* Copy the contents of general purpose register Rs into special purpose register Rd`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "movsg") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `movsg Rd, Rs;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Move special register to general register** - _Special Instruction_
* Copy the contents of special purpose register Rs into general purpose register Rd`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "break") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `break;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Break** - _Special Instruction_
* Generate a breakpoint exception, transferring control to the exception handler`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "syscall") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `syscall;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**System call** - _Special Instruction_
* Generate a system call exception, transferring control to the exception handler`);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}
			if (word == "rfe") {
				const markdown = new vscode.MarkdownString('');
				const codeBlock = `rfe;`;
				markdown.appendCodeblock(codeBlock, "wramp");
				markdown.appendMarkdown(`**Return from exception** - _Special Instruction_
* Restore the saved interrupt enable and kernel/user mode bits and jump to the instruction at the address specified in the special register $ear `);
				markdown.isTrusted = true;
				return new vscode.Hover(markdown, new vscode.Range(position, position));
			}





		}
	});

	context.subscriptions.push(provider1, provider2);
}




