import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('exsess-buddy.format', async () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return; // No open text editor
		}

		const text = editor.document.getText();
		const regex = /#org\s+(0x[0-9a-fA-F]{6})/g;
		let match;
		let output = '';

		while ((match = regex.exec(text)) !== null) {
			output += `#RemoveAll ${match[1]}\r\n`;
		}
		if (output === '') {
			vscode.window.showInformationMessage('No hex addresses found to copy.');
		} else {
			await vscode.env.clipboard.writeText(output);
			vscode.window.showInformationMessage('Remove All statements copied to clipboard.');
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
