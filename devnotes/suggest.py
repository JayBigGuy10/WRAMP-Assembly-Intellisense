f = open("text.md", "r")

f2 = open("text2.md", "w")

i=0

while True:
	i=i+1
	if (i == 40):
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
	arguments = len(match)-1
	print(match)
	print(arguments)

	argumentsString = ""

	for x in range(1,arguments+1):
		print(match[x].strip().replace(',', ''))
		if (argumentsString ==""):
			if (len(match[x].strip().replace(',', '')) > 2):
				argumentsString = argumentsString + "${"+str(x)+"}"
			else:
				argumentsString = argumentsString + "$${"+str(x)+"}"
		else:
			if (len(match[x].strip().replace(',', '')) > 2):
				argumentsString = argumentsString + ", ${"+str(x)+"}"
			else:
				argumentsString = argumentsString + ", $${"+str(x)+"}"


	#print(sText)

	textbody = text[4].split(". ")
	#print(textbody)

	finalTextBody = ""

	for string in textbody:
		if string != "":
			finalTextBody = finalTextBody + "\n* " + string


	



	var = f"""const {match[0].strip()}Snippet  = new vscode.CompletionItem('{match[0].strip()}');
		const {match[0].strip()}Docs: any = new vscode.MarkdownString();
		{match[0].strip()}Snippet.insertText = new vscode.SnippetString('{match[0].strip()} """
		
	var2 = f"""');
		{match[0].strip()}Docs.appendCodeblock(`{text[1].strip()};`, "wramp");
		{match[0].strip()}Docs.appendMarkdown(`**{text[0].strip()}** - _Special Instruction_{finalTextBody}`);
		{match[0].strip()}Snippet.documentation = {match[0].strip()}Docs;
		items.push({match[0].strip()}Snippet);"""
	

	output = var +argumentsString +var2
	print(output)
	f2.write(output + "\n")

f2.close()
f.close()