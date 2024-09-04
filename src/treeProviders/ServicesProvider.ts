import * as vscode from 'vscode';
import { NaosClient } from '../naosclient';
import { invalidColor, validColor } from '../utils';

export interface Service {
	name: string;
	status: string;
	version: string;
}

export class ServicesProvider implements vscode.TreeDataProvider<Service> {

	constructor(
		private api: NaosClient
	) { }

	private _onDidChangeTreeData = new vscode.EventEmitter<any>();
	readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

	async getChildren(element?: any): Promise<Service[]> {
		const services = await this.api.service.getGlobalStatus();
		return Object.entries(services).map(([k, v]) => ({ name: k, ...v }));
	}

	getTreeItem(service: Service): vscode.TreeItem {
		const icon = service.status === "healthy" ?
			new vscode.ThemeIcon("run", validColor) :
			new vscode.ThemeIcon("run-errors", invalidColor);
		return {
			collapsibleState: vscode.TreeItemCollapsibleState.None,
			label: service.name,
			description: service.version,
			iconPath: icon,
			contextValue: "naos.service",
			id: service.name,
			// command: {
			// 	command: "naos.copyid",
			// 	title: "zelfuezf",
			// 	arguments: [{ id: service.name }],
			// }
			// command: {
			// 	command: "vscode.open",
			// 	title: "Display NAOS service status",
			// 	arguments: [
			// 		vscode.Uri.parse(`naos:/service/${}.json`)
			// 	]
			// }
		};
	}

	refresh() {
		this._onDidChangeTreeData.fire(null);
	}

}

// {
// 	"naos_data_access_service": {
// 	  "connections": {
// 		"naos_explorer": "healthy",
// 		"naos_gateway": "healthy",
// 		"naos_workflow_manager": "healthy"
// 	  },
// 	  "mongo": "healthy",
// 	  "status": "healthy",
// 	  "version": "1.3.0",
// 	  "volumes": {
// 		"file:///mnt/c/naos_share": "healthy"
// 	  }
// 	},
// 	"naos_explorer": {
// 	  "connections": {
// 		"naos_data_access_service": "healthy",
// 		"naos_gateway": "healthy",
// 		"naos_workflow_manager": "healthy"
// 	  },
// 	  "mongo": "healthy",
// 	  "status": "healthy",
// 	  "version": "1.7.0",
// 	  "volumes": {
// 		"file:///mnt/c/naos_share": "healthy"
// 	  },
// 	  "workers": {
// 		"count": 1,
// 		"status": "healthy"
// 	  }
// 	},
// 	"naos_gateway": {
// 	  "connections": {
// 		"naos_data_access_service": "healthy",
// 		"naos_explorer": "healthy",
// 		"naos_workflow_manager": "healthy"
// 	  },
// 	  "mongo": "healthy",
// 	  "status": "healthy",
// 	  "version": "1.8.0",
// 	  "volumes": {
// 		"file:///mnt/c/naos_share": "healthy"
// 	  },
// 	  "workers": {
// 		"count": 1,
// 		"status": "healthy"
// 	  }
// 	},
// 	"naos_workflow_manager": {
// 	  "connections": {
// 		"naos_data_access_service": "healthy",
// 		"naos_explorer": "healthy",
// 		"naos_gateway": "healthy"
// 	  },
// 	  "mongo": "healthy",
// 	  "status": "healthy",
// 	  "version": "1.3.0",
// 	  "volumes": {
// 		"file:///mnt/c/naos_share": "healthy"
// 	  },
// 	  "workers": {
// 		"count": 1,
// 		"status": "healthy"
// 	  }
// 	}
//   }