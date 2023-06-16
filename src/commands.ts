import * as vscode from 'vscode';

export async function whatTime() {
	const choice = await vscode.window.showQuickPick("café ricard week-end".split(" "));
	vscode.window.showInformationMessage(`c'est l'heure du ${choice}!`);
}
