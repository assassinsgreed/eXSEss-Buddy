# exsess-buddy README

eXSEss Buddy is a GBA Pokemon romhacking utility for quickly converting events' scripts to `#RemoveAll` statements, written as a VSCode extension. It is used to quickly remove existing event code from a game's binary data.

A significant portion of the code written using GitHub Copilot, as an educational experiment.

## How to build

This extension is not available on the marketplace. These instructions assume you are familiar with `npm`.

To use it, you'll need to build the extension bundle yourself by:

1. Installing VSCE (Visual Studio Code Extensions) with `npm install -g @vscode/vsce`
2. Calling `vsce package` in a terminal
3. Installing the resulting `*.vsix` file for use

## How to use

1. Open an event's script in XSE (for example, by selecting the event in AdvanceMap and clicking Open Script).
2. Copy the entire contents of the decompiled script into a VSCode text editor
3. Run the extension command with `ctrl` + `shift` + `p` then selecting `Format XSE Script`
4. The formatted content will be copied to your clipboard
5. Paste the contents into XSE and execute them to remove the script content from the game

⚠ Remember: XSE decompiles all scripts referenced by an event. Take care not to remove scripts that may be reused across events (such as movement)

## Example

Given an input like the following, which represents a standard trainer on Route 15:

```txt
'---------------
#org 0x1AACAD
trainerbattle 0x0 0x112 0x0 0x818680C 0x8186841
special2 LASTRESULT 0x39
compare LASTRESULT 0x1
if 0x1 goto 0x81AACD4
msgbox 0x818686F MSG_NORMAL '"I love having my Pokémon greet me\..."
end

'---------------
#org 0x1AACD4
trainerbattle 0x5 0x112 0x0 0x81C279D 0x8186841
msgbox 0x818686F MSG_NORMAL '"I love having my Pokémon greet me\..."
end

'---------
' Strings
'---------
#org 0x18680C
= I raise Pokémon for protection\nbecause I live alone.

#org 0x186841
= Pokémon isn't about winning or\nlosing for me.

#org 0x18686F
= I love having my Pokémon greet me\nwhen I get home.\pIt's so reassuring.

#org 0x1C279D
= I raise Pokémon for protection\nbecause I live alone.\pThat hasn't changed.
```

The output will be:

```txt
#RemoveAll 0x1AACAD
#RemoveAll 0x1AACD4
#RemoveAll 0x18680C
#RemoveAll 0x186841
#RemoveAll 0x18686F
#RemoveAll 0x1C279D
```

## Built with GitHub Copilot

This extension was written almost entirely using GitHub Copilot. GitHub Copilot is an AI-powered code completion tool that helps you write code faster and with fewer errors. It was a fascinating experiment to see how much of the extension could be written with the assistance of this AI tool.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)
* [GitHub Copilot](https://copilot.github.com/)
