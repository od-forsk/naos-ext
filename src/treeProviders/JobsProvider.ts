import * as vscode from 'vscode';
import { NaosClient } from '../naosclient';
import { UserInfo } from '../naosclient/models/UserInfo';

// TODO type SchedulingUnit = JobDescribe | typeof JobSummary['work_area_type']

export class JobsProvider implements vscode.TreeDataProvider<UserInfo> {

	constructor(
		private api: NaosClient
	) { }

	private _onDidChangeTreeData = new vscode.EventEmitter<any>();
	readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

	async getChildren(element?: any) {
		if (!element) {
			return await this.api.admin.getUsers();
		}
	}

	getTreeItem(user: UserInfo): vscode.TreeItem | Thenable<vscode.TreeItem> {
		const uri = vscode.Uri.parse(`naos:/user/${user.id}.json`);
		return {
			collapsibleState: vscode.TreeItemCollapsibleState.None,
			label: user.name,
			description: user.email,
			iconPath: new vscode.ThemeIcon("person"),
			contextValue: "naos.user",
			id: user.id,
			command: {
				command: "vscode.open",
				title: "Open Call",
				arguments: [
					uri,
					<vscode.TextDocumentShowOptions>{
						
					}
				]
			}
		};
	}

	refresh() {
		this._onDidChangeTreeData.fire(null);
	}

}
