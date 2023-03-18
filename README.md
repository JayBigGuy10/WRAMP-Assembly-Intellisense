# WRAMP Assembly Intellisense

This extension implements the provideHover and provideCompletionItems functions of IntelliSense into the editor for the WRAMP Assembly language.
WRAMP was developed by the University of Waikato as an easy-to-learn architecture for teaching assembly language and basic processor concepts.



![Sample](img/instruction%20suggest.png)


## Features

Intellisense input suggestions will appear which contain all WRAMP Instruction set commands, as well as directives. The suggestions have accompanying documentation and use snippet strings which create input fields when needed, which can be tabbed between.

Commands, Directives and system registers also have documentation which will display upon hover. Includes command parameters, type and function explanations

![sample](img/directive-suggest.png)<br>
*directive suggestions*<br>
![sample](img/instruction-suggest-accept.png)<br>
*inserted snippet string*

![sample](img/directive-hover.png)
*directive hover*
![sample](img/instruction-hover.png)
*instruction hover*
![sample](img/register-hover.png)
*register hover*

## Notes

based on (vaguely) https://github.com/microsoft/vscode-extension-samples/tree/main/completions-sample

if developing follow install instructions from here https://github.com/microsoft/vscode-extension-samples/

Usage
1. git clone https://github.com/JayBigGuy10/WRAMP-Assembly-Intellisense
2. npm install in the terminal, 
3. then F5 to run the sample


thanks to [stackoverflow.com/67749752/](https://stackoverflow.com/questions/67749752/how-to-apply-styling-and-html-tags-on-hover-message-with-vscode-api)
and [stackoverflow.com//54792391/](
https://stackoverflow.com/questions/54792391/vs-code-hover-extension-implement-hoverprovider) for providing needed usage contex

https://code.visualstudio.com/api/working-with-extensions/publishing-extension

https://code.visualstudio.com/api/language-extensions/programmatic-language-features#show-hovers

https://code.visualstudio.com/api/references/vscode-api#languages.registerCompletionItemProvider

### `vscode` module

- [`languages.registerCompletionItemProvider`](https://code.visualstudio.com/api/references/vscode-api#languages.registerCompletionItemProvider)
- [`languages.registerHoverProvider`](https://code.visualstudio.com/api/references/vscode-api#languages.registerHoverProvider)



