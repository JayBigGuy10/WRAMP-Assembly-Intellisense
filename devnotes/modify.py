f = open("text.md", "r")

f2 = open("allcmds.md", "w")

i=0

while True:
	i=i+1
	if (i == 133):
		break

	print(i)

	text = []
	sText = []
	toWrite = ""

	text.append(f.readline())
	text.append(f.readline())
	text.append(f.readline())
	text.append(f.readline())

	while (True):
		justRead = f.readline()
		if justRead == "\n":
			break
		if justRead == "":
			break
		toWrite = toWrite + justRead.strip() + " "

	text.append(toWrite)

	for string in text:
		sText.append(string.strip())

	finalString = text[1] + "\n    "

	match = text[1].split()

	#print(sText)

	textbody = text[4].split(". ")
	print(textbody)

	finalTextBody = ""

	for string in textbody:
		if string != "":
			finalTextBody = finalTextBody + "\n* " + string



	var0 = f'if (word == "{match[0]}") '
	var1 = "{"
	var = f"""const markdown = new vscode.MarkdownString('');
		const codeBlock = `{text[1].strip()};`;
		markdown.appendCodeblock(codeBlock, "wramp");
		markdown.appendMarkdown(`**{text[0].strip()}** - _Special Instruction_{finalTextBody}`);
		markdown.isTrusted = true;
		return new vscode.Hover(markdown, new vscode.Range(position, position));"""
	var2 = "}"


	#output = var0 + var1 + var +var2
	#print(output)
	#f2.write(output + "\n")
	f2.write(match[0]+"','")

f2.close()
f.close()