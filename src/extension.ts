import * as vscode from 'vscode';
import { NaosTaskProvider } from './NaosTaskProvider';
import { NaosTextDocumentContentProvider } from './NaosTextDocumentContentProvider';
import { TaskDescribe } from './models/TaskDescribe';
import { ApiError, NaosClient } from './naosclient';
import { Artifact } from './naosclient/models/Artifact';
import { Coverage } from './naosclient/models/Coverage';
import { GatewayTeam } from './naosclient/models/GatewayTeam';
import { GatewayTeamUser } from './naosclient/models/GatewayTeamUser';
import { GeoFile } from './naosclient/models/GeoFile';
import { JobDescribe } from './naosclient/models/JobDescribe';
import { NaosInstance } from './naosclient/models/NaosInstance';
import { NaosInstanceParameters } from './naosclient/models/NaosInstanceParameters';
import { Project } from './naosclient/models/Project';
import { TokenResponse } from './naosclient/models/TokenResponse';
import { UserInfo } from './naosclient/models/UserInfo';
import { Workspace } from './naosclient/models/Workspace';
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
import { RunDescribe } from './models/RunDescribe';

export let consoleNAOS = vscode.window.createOutputChannel("NAOS-ext", { log: true });

export function activate(context: vscode.ExtensionContext) {

	// API client
	const config = vscode.workspace.getConfiguration("naos");
	const apiClient = new NaosClient({
		BASE: config.get<string>("gatewayURL"),
		async HEADERS(options) {
			const headers: Record<string, string> = {};
			if (options.method === "POST" && options.body === undefined) {
				headers['Content-Type'] = 'application/json';
			}
			return headers;
		},
	});

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

	registerNaosCommand("naos.user.token", async (user: UserInfo) => {
		const password = await vscode.window.showInputBox({
			title: "User password",
			prompt: "Enter the user password.",
			password: true,
		});
		if (!password) { return; }
		const impersonateClient = impersonate(apiClient, user, password);
		const { access_token } = await impersonateClient.auth.login() as TokenResponse;
		await vscode.env.clipboard.writeText(access_token);
		await vscode.window.showInformationMessage(`Copied access token.`);
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
		await apiClient.naos.freeInstance(instance.id!);
		await vscode.commands.executeCommand("naos.refresh");
	});

	registerNaosCommand("naos.project.delete", async (project: Project) => {
		await apiClient.projects.deleteProject(project.id!);
		await vscode.commands.executeCommand("naos.refresh");
	});

	registerNaosCommand("naos.workspace.delete", async (workspace: Workspace) => {
		await apiClient.workspaces.deleteWorkspace(workspace.id!, true);
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

	registerNaosCommand("naos.run.abort", async (run: RunDescribe) => {
		await apiClient.scheduler.schedulerProxyPost(`jobs/${run.job_id}/runs/${run.id}/_abort`);
		await vscode.commands.executeCommand("naos.refresh");
	});

	registerNaosCommand("naos.geofile.delete", async (geofile: GeoFile) => {
		await apiClient.geo.deleteGeoFile(geofile.id!, true);
		await vscode.commands.executeCommand("naos.refresh");
	});

	registerNaosCommand("naos.coverage.delete", async (coverage: Coverage) => {
		if (coverage.work_area?.type === "project") {
			await apiClient.coverages.deleteProjectCoverage(coverage.work_area?.id, coverage.id!);
		} else {
			await apiClient.coverages.deleteWorkspaceCoverage(coverage.work_area?.id, coverage.id!);
		}
		await vscode.commands.executeCommand("naos.refresh");
	});

	registerNaosCommand("naos.artifact.delete", async (artifact: Artifact) => {
		await apiClient.artifacts.deleteArtifact(artifact.id!, true);
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

	registerNaosCommand("naos.publish", async () => {
		// TODO avoid usage with command palette.
		const uri = vscode.window.activeTextEditor?.document.uri;
		try {
			const [resourceKind, resourceIds] = parseNaosURI(uri!);
			let editorText = getActiveEditorText();
			switch (resourceKind) {
				case "user":
					const user = JSON.parse(editorText) as UserInfo;
					if (user.id) {
						await apiClient.admin.editUser(user.id, user);
					} else {
						await apiClient.admin.createUser(user);
					}
					break;

				case "team":
					const team = JSON.parse(editorText) as GatewayTeam;
					if (team.id) {
						await apiClient.teams.editTeam(team.id, team);
					} else {
						await apiClient.teams.createTeam(team);
					}
					break;

				case "instance":
					const instance = JSON.parse(editorText) as NaosInstanceParameters;
					await apiClient.naos.addInstance(instance);
					break;

				case "job":
					const job = JSON.parse(editorText);
					if (job.id && job.work_area_type && job.work_area_id) {
						if (job.work_area_type === "project") {
							await apiClient.jobs.updateProjectJob(job.work_area_id, job.id, job);
						} else if (job.work_area_type === "workspace") {
							await apiClient.jobs.updateWorkspaceJob(job.work_area_id, job.id, job);
						}
					} else {
						if (job.work_area_type === "project") {
							await apiClient.jobs.createProjectJob(job.work_area_id, job);
						} else if (job.work_area_type === "workspace") {
							await apiClient.jobs.createWorkspaceJob(job.work_area_id, job);
						}
					}
					break;

				case "project":
					await sendProject(editorText, apiClient);
					break;

				case "workspace":
					const workspace = JSON.parse(editorText) as Workspace;
					if (workspace.id) {
						await apiClient.workspaces.editWorkspace(workspace.id, undefined, workspace);
					} else {
						await apiClient.workspaces.createWorkspace(true, workspace);
					}
					break;

				// TODO case "geofile":
				// TODO case "coverage":

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

function impersonate(apiClient: NaosClient, user: UserInfo, password: string) {
	const config = vscode.workspace.getConfiguration("naos");
	const gatewayURL = vscode.Uri.parse(config.get<string>("gatewayURL")!);
	const impersonateClient = new NaosClient({
		...apiClient.request.config,
		BASE: gatewayURL.with({
			authority: gatewayURL.authority.split("@").at(-1)
		}).toString(),
		USERNAME: user.login,
		PASSWORD: password,
	});
	return impersonateClient;
}
