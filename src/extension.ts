import * as vscode from 'vscode';
import { UsersProvider } from './treeProviders/UsersProvider';
import { whatTime } from './commands';
import { User } from './models/User';

export function activate(context: vscode.ExtensionContext) {

	// const subscription = interval(500).pipe(
	// 	mergeMap(i => from(vscode.window.showInformationMessage(`${i}`)))
	// ).subscribe();
	// context.subscriptions.push(new vscode.Disposable(subscription.unsubscribe));

	console.log(vscode.workspace.getConfiguration("naos"));

	function registerNaosCommand(command: string, callback: (...args: any[]) => any, thisArg?: any) {
		context.subscriptions.push(vscode.commands.registerCommand(command, callback));
	};
	registerNaosCommand('naos.misc.whattime', whatTime);

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

	context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(e => {
		if (e.affectsConfiguration("naos")) {
			vscode.window.showInformationMessage(`naos config changed!`);
		}
	}));
}

export function deactivate() { }
