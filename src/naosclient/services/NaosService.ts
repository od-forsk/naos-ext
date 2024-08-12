/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiError } from '../models/ApiError';
import type { IdResponse } from '../models/IdResponse';
import type { NaosInstance } from '../models/NaosInstance';
import type { NaosInstanceParameters } from '../models/NaosInstanceParameters';
import type { Project } from '../models/Project';
import type { Workspace } from '../models/Workspace';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NaosService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Free all user instances
     * @returns any OK
     * @throws ApiError
     */
    public freeInstances(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/naos',
        });
    }
    /**
     * List user active instances
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @param prefer Prefer header according to RFC 7240.
     * Supported preferences:
     * - details: minimal/normal/full <br>Level of details on the targeted resource response. Defaults to 'normal' on listing APIs, and 'full' on single resources.
     *
     * @param matchPattern Regular expression pattern used to match instance names
     * @returns NaosInstance Ok
     * @throws ApiError
     */
    public getInstances(
        skip?: number,
        limit: number = 1000,
        prefer?: string,
        matchPattern?: string,
    ): CancelablePromise<Array<NaosInstance>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/naos',
            headers: {
                'Prefer': prefer,
            },
            query: {
                'skip': skip,
                'limit': limit,
                'match_pattern': matchPattern,
            },
        });
    }
    /**
     * Request a new instance
     * @param requestBody
     * @returns ApiError Error
     * @returns IdResponse Created
     * @throws ApiError
     */
    public addInstance(
        requestBody?: NaosInstanceParameters,
    ): CancelablePromise<ApiError | IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/naos',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get accepted naos flavors
     * @returns string Ok
     * @throws ApiError
     */
    public getNaosFlavors(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/naos/flavors',
        });
    }
    /**
     * Free user instance
     * @param instanceId Instance identifier.
     * @param backup Backup instance project if available
     * @returns any OK
     * @throws ApiError
     */
    public freeInstance(
        instanceId: string,
        backup: boolean = false,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/naos/{instance_id}',
            path: {
                'instance_id': instanceId,
            },
            query: {
                'backup': backup,
            },
            errors: {
                403: `Current user has no access to this instance`,
                404: `Not found`,
            },
        });
    }
    /**
     * Get user active instance details
     * @param instanceId Instance identifier.
     * @param prefer Prefer header according to RFC 7240.
     * Supported preferences:
     * - details: minimal/normal/full <br>Level of details on the targeted resource response. Defaults to 'normal' on listing APIs, and 'full' on single resources.
     *
     * @returns NaosInstance Ok
     * @throws ApiError
     */
    public getInstance(
        instanceId: string,
        prefer?: string,
    ): CancelablePromise<NaosInstance> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/naos/{instance_id}',
            path: {
                'instance_id': instanceId,
            },
            headers: {
                'Prefer': prefer,
            },
            errors: {
                403: `Current user has no access to this instance`,
                404: `Not found`,
            },
        });
    }
    /**
     * Force backup creation. <b>Warning</b> this API may change without notice
     * @param instanceId Instance identifier.
     * @returns IdResponse OK
     * @throws ApiError
     */
    public createBackup(
        instanceId: string,
    ): CancelablePromise<IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/naos/{instance_id}',
            path: {
                'instance_id': instanceId,
            },
            errors: {
                403: `Current user has no access to this instance`,
                404: `Not found`,
            },
        });
    }
    /**
     * Create a workspace from an opened project or raw Naos document.
     * When creating a workspace from project, it is strongly recommended to use the POST /workspaces route that is more efficient.
     * @param instanceId Instance identifier.
     * @param requestBody Simple JSON body that contains a name.
     * @param userId ADMIN. Id of the user that will own the workspace. If none is provided, the owner will be the sender of the request.
     * @returns IdResponse Ok
     * @throws ApiError
     */
    public createWorkspaceFromInstance(
        instanceId: string,
        requestBody: {
            name: string;
        },
        userId?: string,
    ): CancelablePromise<IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/naos/{instance_id}/create_workspace',
            path: {
                'instance_id': instanceId,
            },
            query: {
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Current user has no access to this instance`,
            },
        });
    }
    /**
     * Closes a project. Has no effect if a workspace is attached to the instance.
     * @param instanceId Instance identifier.
     * @returns any Ok
     * @throws ApiError
     */
    public closeProject(
        instanceId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/naos/{instance_id}/project',
            path: {
                'instance_id': instanceId,
            },
            errors: {
                403: `Current user has no access to this instance`,
            },
        });
    }
    /**
     * Get instance project
     * @param instanceId Instance identifier.
     * @returns Project Ok
     * @throws ApiError
     */
    public getInstanceProject(
        instanceId: string,
    ): CancelablePromise<Project> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/naos/{instance_id}/project',
            path: {
                'instance_id': instanceId,
            },
            errors: {
                403: `Current user has no access to this instance`,
            },
        });
    }
    /**
     * Save the changes made to the project
     * Only available for projects whose source type is Atl
     * @param instanceId Instance identifier.
     * @param historyMessage An optional message indicating the changes that were made to the document. If omitted, a default meaningful message will be generated.
     * @returns Project Ok
     * @returns any Accepted
     * @throws ApiError
     */
    public saveProject(
        instanceId: string,
        historyMessage?: string,
    ): CancelablePromise<Project | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/naos/{instance_id}/project',
            path: {
                'instance_id': instanceId,
            },
            query: {
                'history_message': historyMessage,
            },
            errors: {
                403: `Current user has no access to this instance`,
            },
        });
    }
    /**
     * Opens a project
     * @param instanceId Instance identifier.
     * @param requestBody Simple JSON body that contains an identifier.
     * @param force Forces an open or edit of a project. This opens or edits the project even if:
     * - the parsing of the geo files did not finish or finished with errors.
     * - the automatic scanning did not finished or finished with errors.
     *
     * @returns any Ok
     * @throws ApiError
     */
    public openProject(
        instanceId: string,
        requestBody: {
            id: string;
        },
        force: boolean = false,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/naos/{instance_id}/project',
            path: {
                'instance_id': instanceId,
            },
            query: {
                'force': force,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Current user has no access to this instance`,
            },
        });
    }
    /**
     * Archive the changes made to the project
     * The project's source type must be a db type or an Atl connected to a db.
     * @param instanceId Instance identifier.
     * @param historyMessage A message indicating the changes to the project
     * @returns Project Ok
     * @returns any Accepted
     * @throws ApiError
     */
    public archiveProject(
        instanceId: string,
        historyMessage?: string,
    ): CancelablePromise<Project | any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/naos/{instance_id}/project',
            path: {
                'instance_id': instanceId,
            },
            query: {
                'history_message': historyMessage,
            },
            errors: {
                403: `Current user has no access to this instance`,
            },
        });
    }
    /**
     * Closes a workspace. Has no effect if no workspace is attached to the instance.
     * @param instanceId Instance identifier.
     * @returns any Ok
     * @throws ApiError
     */
    public closeWorkspace(
        instanceId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/naos/{instance_id}/workspace',
            path: {
                'instance_id': instanceId,
            },
            errors: {
                403: `Current user has no access to this instance`,
            },
        });
    }
    /**
     * Get instance workspace
     * @param instanceId Instance identifier.
     * @returns Workspace Ok
     * @throws ApiError
     */
    public getInstanceWorkspace(
        instanceId: string,
    ): CancelablePromise<Workspace> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/naos/{instance_id}/workspace',
            path: {
                'instance_id': instanceId,
            },
            errors: {
                403: `Current user has no access to this instance`,
            },
        });
    }
    /**
     * Save the changes made to the workspace
     * If body is empty, SAVE. If name in body, SAVE AS
     * @param instanceId Instance identifier.
     * @param historyMessage An optional message indicating the changes that were made to the document. If omitted, a default meaningful message will be generated.
     * @param userId ADMIN. Id of the user that will own the workspace. If none is provided, the owner will be the sender of the request.
     * @param requestBody Simple JSON body that contains an optional name.
     * @returns Workspace Ok
     * @throws ApiError
     */
    public saveWorkspace(
        instanceId: string,
        historyMessage?: string,
        userId?: string,
        requestBody?: {
            name?: string;
        },
    ): CancelablePromise<Workspace> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/naos/{instance_id}/workspace',
            path: {
                'instance_id': instanceId,
            },
            query: {
                'history_message': historyMessage,
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Current user has no access to this instance`,
            },
        });
    }
    /**
     * Opens a workspace
     * @param instanceId Instance identifier.
     * @param requestBody Simple JSON body that contains an identifier.
     * @returns any Ok
     * @throws ApiError
     */
    public openWorkspace(
        instanceId: string,
        requestBody: {
            id: string;
        },
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/naos/{instance_id}/workspace',
            path: {
                'instance_id': instanceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Current user has no access to this instance`,
            },
        });
    }
    /**
     * Push the changes made to the workspace onto the parent project
     * The parent project's source must be a db type or an Atl connected to a db
     * @param instanceId Instance identifier.
     * @param historyMessage An optional message indicating the changes that were made to the document. If omitted, a default meaningful message will be generated.
     * @returns Project Ok
     * @throws ApiError
     */
    public archiveWorkspace(
        instanceId: string,
        historyMessage?: string,
    ): CancelablePromise<Project> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/naos/{instance_id}/workspace',
            path: {
                'instance_id': instanceId,
            },
            query: {
                'history_message': historyMessage,
            },
            errors: {
                400: `Bad request`,
                403: `Current user has no access to this instance`,
            },
        });
    }
    /**
     * Forwards a DELETE request to a naos instance. The service along with its query parameters are specified in the 'route' parameter
     * @param instanceId Instance identifier.
     * @param route
     * @returns any OK
     * @throws ApiError
     */
    public proxyDelete(
        instanceId: string,
        route: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/naos/{instance_id}/{route}',
            path: {
                'instance_id': instanceId,
                'route': route,
            },
            errors: {
                403: `Current user has no access to this instance`,
                404: `Not found`,
                502: `Naos service is unhealthy`,
                503: `Connection timeout trying to communicate with the Naos service`,
                504: `Read timeout trying to communicate with the Naos engine`,
            },
        });
    }
    /**
     * Forwards a GET request to a naos instance. The service along with its query parameters are specified in the 'route' parameter
     * @param instanceId Instance identifier.
     * @param route
     * @returns any OK
     * @throws ApiError
     */
    public proxyGet(
        instanceId: string,
        route: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/naos/{instance_id}/{route}',
            path: {
                'instance_id': instanceId,
                'route': route,
            },
            errors: {
                403: `Current user has no access to this instance`,
                404: `Not found`,
                502: `Naos service is unhealthy`,
                503: `Connection timeout trying to communicate with the Naos service`,
                504: `Read timeout trying to communicate with the Naos engine`,
            },
        });
    }
    /**
     * Forwards a PATCH request to a naos instance. The service along with its query parameters are specified in the 'route' parameter
     * @param instanceId Instance identifier.
     * @param route
     * @param requestBody Any value.
     * @returns any OK
     * @throws ApiError
     */
    public proxyPatch(
        instanceId: string,
        route: string,
        requestBody?: (string | Record<string, any> | null),
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/naos/{instance_id}/{route}',
            path: {
                'instance_id': instanceId,
                'route': route,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Current user has no access to this instance`,
                404: `Not found`,
                502: `Naos service is unhealthy`,
                503: `Connection timeout trying to communicate with the Naos service`,
                504: `Read timeout trying to communicate with the Naos engine`,
            },
        });
    }
    /**
     * Forwards a POST request to a naos instance. The service along with its query parameters are specified in the 'route' parameter
     * @param instanceId Instance identifier.
     * @param route
     * @param requestBody Any value.
     * @returns any OK
     * @throws ApiError
     */
    public proxyPost(
        instanceId: string,
        route: string,
        requestBody?: (string | Record<string, any> | null),
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/naos/{instance_id}/{route}',
            path: {
                'instance_id': instanceId,
                'route': route,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Current user has no access to this instance`,
                404: `Not found`,
                502: `Naos service is unhealthy`,
                503: `Connection timeout trying to communicate with the Naos service`,
                504: `Read timeout trying to communicate with the Naos engine`,
            },
        });
    }
    /**
     * Forwards a PUT request to a naos instance. The service along with its query parameters are specified in the 'route' parameter
     * @param instanceId Instance identifier.
     * @param route
     * @param requestBody Any value.
     * @returns any OK
     * @throws ApiError
     */
    public proxyPut(
        instanceId: string,
        route: string,
        requestBody?: (string | Record<string, any> | null),
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/naos/{instance_id}/{route}',
            path: {
                'instance_id': instanceId,
                'route': route,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Current user has no access to this instance`,
                404: `Not found`,
                502: `Naos service is unhealthy`,
                503: `Connection timeout trying to communicate with the Naos service`,
                504: `Read timeout trying to communicate with the Naos engine`,
            },
        });
    }
}
