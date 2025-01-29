/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';
import { AdminService } from './services/AdminService';
import { ArtifactsService } from './services/ArtifactsService';
import { AuthService } from './services/AuthService';
import { CoveragesService } from './services/CoveragesService';
import { DataAccessServiceService } from './services/DataAccessServiceService';
import { GeoService } from './services/GeoService';
import { JobsService } from './services/JobsService';
import { LicenseService } from './services/LicenseService';
import { NaosService } from './services/NaosService';
import { ProjectsService } from './services/ProjectsService';
import { ResultsService } from './services/ResultsService';
import { SchedulerService } from './services/SchedulerService';
import { ServiceService } from './services/ServiceService';
import { TeamsService } from './services/TeamsService';
import { UserService } from './services/UserService';
import { WorkspacesService } from './services/WorkspacesService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class NaosClient {
    public readonly admin: AdminService;
    public readonly artifacts: ArtifactsService;
    public readonly auth: AuthService;
    public readonly coverages: CoveragesService;
    public readonly dataAccessService: DataAccessServiceService;
    public readonly geo: GeoService;
    public readonly jobs: JobsService;
    public readonly license: LicenseService;
    public readonly naos: NaosService;
    public readonly projects: ProjectsService;
    public readonly results: ResultsService;
    public readonly scheduler: SchedulerService;
    public readonly service: ServiceService;
    public readonly teams: TeamsService;
    public readonly user: UserService;
    public readonly workspaces: WorkspacesService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '/v1',
            VERSION: config?.VERSION ?? '1.9.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.admin = new AdminService(this.request);
        this.artifacts = new ArtifactsService(this.request);
        this.auth = new AuthService(this.request);
        this.coverages = new CoveragesService(this.request);
        this.dataAccessService = new DataAccessServiceService(this.request);
        this.geo = new GeoService(this.request);
        this.jobs = new JobsService(this.request);
        this.license = new LicenseService(this.request);
        this.naos = new NaosService(this.request);
        this.projects = new ProjectsService(this.request);
        this.results = new ResultsService(this.request);
        this.scheduler = new SchedulerService(this.request);
        this.service = new ServiceService(this.request);
        this.teams = new TeamsService(this.request);
        this.user = new UserService(this.request);
        this.workspaces = new WorkspacesService(this.request);
    }
}

