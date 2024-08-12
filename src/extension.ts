import * as vscode from 'vscode';
import { NaosTaskProvider } from './NaosTaskProvider';
import { ApiError, NaosClient } from './naosclient';
import { UserInfo } from './naosclient/models/UserInfo';
import { UsersProvider } from './treeProviders/UsersProvider';

export function activate(context: vscode.ExtensionContext) {

	// API client
	const config = vscode.workspace.getConfiguration("naos");
	const baseURL = config.get<string>("gatewayURL");
	const apiClient = new NaosClient({ BASE: baseURL });

	// TreeViews
	const userProvider = new UsersProvider(apiClient);
	const userTreeview = vscode.window.createTreeView("naos.users", { treeDataProvider: userProvider });
	userTreeview.onDidChangeSelection(async (e) => {
		const selectedUser = e.selection[0];
		if (selectedUser) {
			console.log('selected');
			const user = await apiClient.admin.getUser(selectedUser.id);
			vscode.workspace.openTextDocument({
				language: "json",
				content: JSON.stringify(user),
			});
        }
	});
	context.subscriptions.push(userTreeview);

	// Task provider
	const taskProvider = vscode.tasks.registerTaskProvider("naos-job", new NaosTaskProvider(apiClient));
	context.subscriptions.push(taskProvider);


	// Commands
	function registerNaosCommand(command: string, callback: (...args: any[]) => any) {
		context.subscriptions.push(vscode.commands.registerCommand(command, callback));
	};

	registerNaosCommand("naos.user.add", async () => {
		const name = await vscode.window.showInputBox({ title: "user name", prompt: "What is his name?" });
		if (name) {
			try {
				const password = name.padEnd(8, '!1Aa');
				await apiClient.admin.createUser({
					name,
					login: name,
					email: `${name}@forsk.com`,
					is_admin: false,
					password: password,
					confirm: password,
				});
				await vscode.commands.executeCommand("naos.refresh");
			} catch (error) {
				if (error instanceof ApiError) {
					vscode.window.showErrorMessage(error.message, error.body as string);
				}
			}
		}
	});

	registerNaosCommand("naos.user.delete", async (user: UserInfo) => {
		const typed = await vscode.window.showInputBox({
			title: "Confirm user delete?",
			prompt: "Enter the user login again.",
			placeHolder: user.login,
			// validateInput(value) {
				
			// },
		});
		if (typed === user.login){
			await apiClient.admin.deleteUser(user.id!);
			await vscode.commands.executeCommand("naos.refresh");
		}
	});

	registerNaosCommand("naos.refresh", () => {
		userProvider.refresh();
	});

	// Config listening
	context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(e => {
		if (e.affectsConfiguration("naos")) {
			vscode.window.showInformationMessage(`naos config changed!`);
			apiClient.request.config.BASE = config.get<string>("gatewayURL")!;
			vscode.commands.executeCommand("naos.refresh");
		}
	}));

}

export function deactivate() { }
