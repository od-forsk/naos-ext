import * as vscode from 'vscode';
import { UsersProvider } from './treeProviders/UsersProvider';
import { whatTime } from './commands';
import { User } from './models/User';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {

	// TOOLING
	function registerNaosCommand(command: string, callback: (...args: any[]) => any) {
		context.subscriptions.push(vscode.commands.registerCommand(command, callback));
	};

	// MISC
	registerNaosCommand('naos.misc.whattime', whatTime);

	// USER
	const userProvider = new UsersProvider();
	const userTreeview = vscode.window.createTreeView("naos.users", { treeDataProvider: userProvider });
	context.subscriptions.push(userTreeview);
	
	registerNaosCommand("naos.user.add", async () => {
		const userName = await vscode.window.showInputBox({ title: "user name", prompt: "What is his name?" });
		if (userName) {
			userProvider.users.push(new User(userName));
			userProvider.refresh();
		}
	});

	// CONFIG LISTENER
	// const config = vscode.workspace.getConfiguration("naos");
	context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(e => {
		if (e.affectsConfiguration("naos")) {
			vscode.window.showInformationMessage(`naos config changed!`);
		}
	}));

}

export function deactivate() { }
