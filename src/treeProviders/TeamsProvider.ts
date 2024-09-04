import * as vscode from 'vscode';
import { NaosClient } from '../naosclient';
import { GatewayTeam } from '../naosclient/models/GatewayTeam';
import { GatewayTeamUser } from '../naosclient/models/GatewayTeamUser';

export interface TeamUser extends GatewayTeamUser{
	team_id: string;
}

type AdminItem = GatewayTeam | TeamUser;

// TODO Drag n Drop
// https://github.com/microsoft/vscode-extension-samples/blob/main/tree-view-sample/src/testViewDragAndDrop.ts
export class TeamsProvider implements vscode.TreeDataProvider<AdminItem> {

	constructor(
		private api: NaosClient
	) { }

	private _onDidChangeTreeData = new vscode.EventEmitter<any>();
	readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

	async getChildren(element?: any): Promise<AdminItem[]> {
		if (!element) {
			return await this.api.teams.getTeams();
		}
		const team = element as GatewayTeam;
		const users = await this.api.teams.getTeamUsers(team.id);
		return users.map(user => ({...user, team_id: team.id}));
	}

	getTreeItem(element: AdminItem): vscode.TreeItem {
		if ("user_name" in element) {
			const user = element as TeamUser;
			return {
				label: user.user_name,
				description: user.role,
				iconPath: new vscode.ThemeIcon("person"),
				contextValue: "naos.user",
				id: `${user.team_id}:${user.user_id}`,
				// resourceUri
				// command
				// how to display role MEMBER | ADMIN
			};
		}
		const team = element as GatewayTeam;
		return {
			collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
			label: team.name,
			description: team.id,
			iconPath: new vscode.ThemeIcon("organization"),
			contextValue: "naos.team",
			id: team.id,
			command: {
				command: "vscode.open",
				title: "Open NAOS Team description.",
				arguments: [vscode.Uri.parse(`naos:/team/${team.id}.json`)]
			}
		};
	}

	refresh() {
		this._onDidChangeTreeData.fire(null);
	}

}
