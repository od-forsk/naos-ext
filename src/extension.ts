import * as vscode from 'vscode';
import { NaosTaskProvider } from './NaosTaskProvider';
import { NaosTextDocumentContentProvider } from './NaosTextDocumentContentProvider';
import { TaskDescribe } from './models/TaskDescribe';
import { ApiError, NaosClient } from './naosclient';
import { GatewayTeam } from './naosclient/models/GatewayTeam';
import { GatewayTeamUser } from './naosclient/models/GatewayTeamUser';
import { JobDescribe } from './naosclient/models/JobDescribe';
import { NaosInstance } from './naosclient/models/NaosInstance';
import { Project } from './naosclient/models/Project';
import { UserInfo } from './naosclient/models/UserInfo';
import { ArtifactsProvider } from './treeProviders/ArtifactsProvider';
import { CoveragesProvider } from './treeProviders/CoveragesProvider';
import { GeofilesProvider } from './treeProviders/GeofilesProvider';
import { InstancesProvider } from './treeProviders/InstancesProvider';
import { JobsProvider } from './treeProviders/JobsProvider';
import { ServicesProvider } from './treeProviders/ServicesProvider';
import { TeamsProvider, TeamUser } from './treeProviders/TeamsProvider';
import { UsersProvider } from './treeProviders/UsersProvider';
import { sendProject, WorkareasProvider } from './treeProviders/WorkareasProvider';
import { getActiveEditorText, parseNaosURI, uuidValidateV4 } from './utils';

export let consoleNAOS = vscode.window.createOutputChannel("NAOS-ext", { log: true });

export function activate(context: vscode.ExtensionContext) {

	// API client
	const config = vscode.workspace.getConfiguration("naos");
	const baseURL = config.get<string>("gatewayURL");
	const apiClient = new NaosClient({ BASE: baseURL });

	// Config listening
	context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(async e => {
		if (e.affectsConfiguration("naos")) {
			await vscode.window.showInformationMessage(`naos config changed!`);
			const config = vscode.workspace.getConfiguration("naos");
			apiClient.request.config.BASE = config.get<string>("gatewayURL")!;
			await vscode.commands.executeCommand("naos.refresh");
		}
	}));

	// Task provider
	const taskProvider = vscode.tasks.registerTaskProvider(
		"naos-job",
		new NaosTaskProvider(apiClient)
	);
	context.subscriptions.push(taskProvider);

	// TextDocumentProvider
	const docProvider = vscode.workspace.registerTextDocumentContentProvider(
		"naos",
		new NaosTextDocumentContentProvider(apiClient)
	);
	context.subscriptions.push(docProvider);

	// TreeViews
	function registerTreeView(viewId: string, options: vscode.TreeViewOptions<any>) {
		// vscode.window.registerTreeDataProvider("naos.services", servicesProvider);
		const treeView = vscode.window.createTreeView(viewId, options);
		context.subscriptions.push(treeView);
		return treeView;
	}

	const usersProvider = new UsersProvider(apiClient);
	registerTreeView("naos.users", { treeDataProvider: usersProvider });

	const teamsProvider = new TeamsProvider(apiClient);
	registerTreeView("naos.teams", { treeDataProvider: teamsProvider });

	const servicesProvider = new ServicesProvider(apiClient);
	registerTreeView("naos.services", { treeDataProvider: servicesProvider });

	const instancesProvider = new InstancesProvider(apiClient);
	registerTreeView("naos.instances", { treeDataProvider: instancesProvider });

	const workareasProvider = new WorkareasProvider(apiClient);
	registerTreeView("naos.workareas", { treeDataProvider: workareasProvider });

	const geofilesProvider = new GeofilesProvider(apiClient);
	registerTreeView("naos.geofiles", { treeDataProvider: geofilesProvider });

	const jobsProvider = new JobsProvider(apiClient);
	registerTreeView("naos.jobs", { treeDataProvider: jobsProvider });

	const coveragesProvider = new CoveragesProvider(apiClient);
	registerTreeView("naos.coverages", { treeDataProvider: coveragesProvider });

	const artifactsProvider = new ArtifactsProvider(apiClient);
	registerTreeView("naos.artifacts", { treeDataProvider: artifactsProvider });

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
					await vscode.window.showErrorMessage(error.message, error.body as string);
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
		if (typed === user.login) {
			await apiClient.admin.deleteUser(user.id!);
			await vscode.commands.executeCommand("naos.refresh");
		}
	});

	registerNaosCommand("naos.team.add", async () => {
		const name = await vscode.window.showInputBox({ title: "team name", prompt: "What is its name?" });
		if (name) {
			try {
				await apiClient.teams.createTeam({ name } as GatewayTeam);
				await vscode.commands.executeCommand("naos.refresh");
			} catch (error) {
				if (error instanceof ApiError) {
					await vscode.window.showErrorMessage(error.message, error.body as string);
				}
			}
		}
	});

	registerNaosCommand("naos.team.delete", async (team: GatewayTeam) => {
		const typed = await vscode.window.showInputBox({
			title: "Confirm team delete?",
			prompt: "Enter the team name again.",
			placeHolder: team.name,
			// validateInput(value) {

			// },
		});
		if (typed === team.name) {
			await apiClient.teams.deleteTeam(team.id!);
			await vscode.commands.executeCommand("naos.refresh");
		}
	});

	registerNaosCommand("naos.team.addUser", async (teamId: string, userId: string, role?: GatewayTeamUser.role) => {
		teamId = await getUUID(teamId, { title: "NAOS Team ID" });
		userId = await getUUID(userId, { title: "NAOS User ID" });
		role = role ?? await vscode.window.showQuickPick(Object.values(GatewayTeamUser.role)) as GatewayTeamUser.role;
		if (role !== undefined) {
			await apiClient.teams.addTeamUser(teamId, userId, role);
			await vscode.commands.executeCommand("naos.refresh");
		}
	});

	registerNaosCommand("naos.team.removeUser", async (teamUser: TeamUser) => {
		await apiClient.teams.deleteTeamUser(teamUser.team_id, teamUser.user_id!);
		await vscode.commands.executeCommand("naos.refresh");
	});

	registerNaosCommand("naos.instance.add", async () => {
		// TODO multiple step QuickPick
		// vscode.window.createQuickPick()

		await apiClient.naos.addInstance({ parameters: {} });
		await vscode.commands.executeCommand("naos.refresh");
	});

	registerNaosCommand("naos.instance.delete", async (instance: NaosInstance) => {
		// await apiClient.admin.freeGlobalInstance(instance.id);
		await apiClient.naos.freeInstance(instance.id);
		await vscode.commands.executeCommand("naos.refresh");
	});

	registerNaosCommand("naos.project.delete", async (project: Project) => {
		await apiClient.projects.deleteProject(project.id!);
		await vscode.commands.executeCommand("naos.refresh");
	});

	registerNaosCommand("naos.job.delete", async (job: JobDescribe) => {
		await apiClient.scheduler.schedulerProxyDelete(`jobs/${job.id}`);
		await vscode.commands.executeCommand("naos.refresh");
	});

	registerNaosCommand("naos.job.run", async (job: JobDescribe) => {
		await vscode.commands.executeCommand("workbench.action.tasks.runTask", {
			type: NaosTaskProvider.taskType,
			jobId: job.id,
		});
		await vscode.commands.executeCommand("naos.refresh");
	});

	registerNaosCommand("naos.task.getMessages", async (task: TaskDescribe) => {
		await vscode.commands.executeCommand(
			"vscode.open",
			vscode.Uri.parse(`naos:${task.job_id}/${task.run_id}/${task.id}.messages.naos`),
			<vscode.TextDocumentShowOptions>{},
		);
	});

	registerNaosCommand("naos.copyid", async (e: any) => {
		if (e.id !== undefined) {
			await vscode.env.clipboard.writeText(e.id);
			await vscode.window.showInformationMessage(`Copied UUID ${e.id}`);
		}
	});

	registerNaosCommand("naos.publish", async (uri: vscode.Uri) => {
		// TODO avoid usage with command palette.
		try {
			const [resourceKind, resourceIds] = parseNaosURI(uri);
			let editorText = getActiveEditorText();
			switch (resourceKind) {
				case "project":
					await sendProject(editorText, apiClient);
					break;
				default:
					vscode.window.showErrorMessage("Unknown NAOS resource kind.");
			}
			vscode.commands.executeCommand("naos.refresh");
		} catch (error) {
			consoleNAOS.error(error as Error);
		}
	});

	registerNaosCommand("naos.refresh", () => {
		servicesProvider.refresh();
		usersProvider.refresh();
		teamsProvider.refresh();
		instancesProvider.refresh();
		workareasProvider.refresh();
		geofilesProvider.refresh();
		jobsProvider.refresh();
		coveragesProvider.refresh();
		artifactsProvider.refresh();
	});

}

export function deactivate() { }


async function getUUID(arg: any, prompt: vscode.InputBoxOptions): Promise<string> {
	if (arg === undefined) {
		arg = await vscode.window.showInputBox(prompt);
	} else if (typeof arg === "object" && "id" in arg) {
		arg = arg.id;
	}

	if (typeof arg === "string" && uuidValidateV4(arg)) {
		return arg;
	}
	throw new Error("Impossible to get the UUID");
}