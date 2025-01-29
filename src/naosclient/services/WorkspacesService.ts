/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiError } from '../models/ApiError';
import type { IdResponse } from '../models/IdResponse';
import type { NaosInstance } from '../models/NaosInstance';
import type { Workspace } from '../models/Workspace';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkspacesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List available user workspaces
     * @param name Workspace name to look for
     * @param createdFrom Filter on starting creation date
     * @param createdTo Filter on ending creation date
     * @param modifiedFrom Filter on starting modification date
     * @param modifiedTo Filter on ending modification date
     * @param technologies Determines the radio technologies for the query.
     * @param naosFilepathMode Map URI values in the response to the desired context
     * @param orderBy Order by ressource fields. Multiple fields can be used separated by a comma,
     * and order can be controlled by prepending fields with '+' (ascending, default) or '-' (descending).
     *
     * @param prefer Prefer header according to RFC 7240.
     * Supported preferences:
     * - details: minimal/normal/full <br>Level of details on the targeted resource response. Defaults to 'normal' on listing APIs, and 'full' on single resources.
     *
     * @returns Workspace Workspaces
     * @returns ApiError Error
     * @throws ApiError
     */
    public getWorkspaces(
        name?: string,
        createdFrom?: string,
        createdTo?: string,
        modifiedFrom?: string,
        modifiedTo?: string,
        technologies?: Array<'5G_NR' | 'LTE' | 'NB_IOT' | 'UMTS' | '1XRTT' | 'GSM'>,
        naosFilepathMode?: 'atoll' | 'naos-service-win' | 'naos-service-linux',
        orderBy?: string,
        prefer?: string,
    ): CancelablePromise<Array<Workspace> | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/workspaces',
            headers: {
                'Naos-Filepath-Mode': naosFilepathMode,
                'Prefer': prefer,
            },
            query: {
                'name': name,
                'created_from': createdFrom,
                'created_to': createdTo,
                'modified_from': modifiedFrom,
                'modified_to': modifiedTo,
                'technologies': technologies,
                'order_by': orderBy,
            },
        });
    }
    /**
     * Create a new workspace
     * @param applyProjectCfg Load project's configfuration files while creating the workspace, these configuration files will not appear in the workspace metadata and loaded only once.
     * Configuration files defined in the body of the request are applied at workspace openning.
     *
     * @param requestBody
     * @returns IdResponse Ok
     * @throws ApiError
     */
    public createWorkspace(
        applyProjectCfg: boolean = true,
        requestBody?: Workspace,
    ): CancelablePromise<IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/workspaces',
            query: {
                'apply_project_cfg': applyProjectCfg,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid workspace details`,
            },
        });
    }
    /**
     * Proxy GET to Data Access Service
     * Forwards a GET request to the Naos Data Access Service.
     * The service along with its query parameters are specified in the 'route' parameter".
     *
     * @param workspaceId Workspace identifier.
     * @param route
     * @returns any OK
     * @throws ApiError
     */
    public dasWorkspaceProxyGet(
        workspaceId: string,
        route: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/workspaces/{workspace_id}/data/{route}',
            path: {
                'workspace_id': workspaceId,
                'route': route,
            },
            errors: {
                404: `Not found`,
                501: `Not implemented`,
                502: `Naos Data Access Service is unhealthy`,
                503: `Connection timeout trying to communicate with the Naos Data Access Service`,
                504: `Read timeout trying to communicate with the Naos Data Access Service`,
            },
        });
    }
    /**
     * Proxy POST to Data Access Service
     * Forwards a POST request to the Naos Data Access Service.
     * The service along with its query parameters are specified in the 'route' parameter.
     *
     * @param workspaceId Workspace identifier.
     * @param route
     * @param requestBody Any value.
     * @returns any OK
     * @throws ApiError
     */
    public dasWorkspaceProxyPost(
        workspaceId: string,
        route: string,
        requestBody?: (string | Record<string, any>) | null,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/workspaces/{workspace_id}/data/{route}',
            path: {
                'workspace_id': workspaceId,
                'route': route,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
                501: `Not implemented`,
                502: `Naos Data Access Service is unhealthy`,
                503: `Connection timeout trying to communicate with the Naos Data Access Service`,
                504: `Read timeout trying to communicate with the Naos Data Access Service`,
            },
        });
    }
    /**
     * Proxy PUT to Data Access Service
     * Forwards a PUT request to the Naos Data Access Service.
     * The service along with its query parameters are specified in the 'route' parameter.
     *
     * @param workspaceId Workspace identifier.
     * @param route
     * @param requestBody Any value.
     * @returns any OK
     * @throws ApiError
     */
    public dasWorkspaceProxyPut(
        workspaceId: string,
        route: string,
        requestBody?: (string | Record<string, any>) | null,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/workspaces/{workspace_id}/data/{route}',
            path: {
                'workspace_id': workspaceId,
                'route': route,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
                501: `Not implemented`,
                502: `Naos Data Access Service is unhealthy`,
                503: `Connection timeout trying to communicate with the Naos Data Access Service`,
                504: `Read timeout trying to communicate with the Naos Data Access Service`,
            },
        });
    }
    /**
     * Proxy PATCH to Data Access Service
     * Forwards a PATCH request to the Naos Data Access Service.
     * The service along with its query parameters are specified in the 'route' parameter.
     *
     * @param workspaceId Workspace identifier.
     * @param route
     * @param requestBody Any value.
     * @returns any OK
     * @throws ApiError
     */
    public dasWorkspaceProxyPatch(
        workspaceId: string,
        route: string,
        requestBody?: (string | Record<string, any>) | null,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/workspaces/{workspace_id}/data/{route}',
            path: {
                'workspace_id': workspaceId,
                'route': route,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
                501: `Not implemented`,
                502: `Naos Data Access Service is unhealthy`,
                503: `Connection timeout trying to communicate with the Naos Data Access Service`,
                504: `Read timeout trying to communicate with the Naos Data Access Service`,
            },
        });
    }
    /**
     * Proxy DELETE to Data Access Service
     * Forwards a DELETE request to the Naos Data Access Service.
     * The service along with its query parameters are specified in the 'route' parameter.
     *
     * @param workspaceId Workspace identifier.
     * @param route
     * @returns any OK
     * @throws ApiError
     */
    public dasWorkspaceProxyDelete(
        workspaceId: string,
        route: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/workspaces/{workspace_id}/data/{route}',
            path: {
                'workspace_id': workspaceId,
                'route': route,
            },
            errors: {
                404: `Not found`,
                501: `Not implemented`,
                502: `Naos Data Access Service is unhealthy`,
                503: `Connection timeout trying to communicate with the Naos Data Access Service`,
                504: `Read timeout trying to communicate with the Naos Data Access Service`,
            },
        });
    }
    /**
     * Get details concerning a specific workspace
     * @param workspaceId Workspace identifier.
     * @param naosFilepathMode Map URI values in the response to the desired context
     * @param prefer Prefer header according to RFC 7240.
     * Supported preferences:
     * - details: minimal/normal/full <br>Level of details on the targeted resource response. Defaults to 'normal' on listing APIs, and 'full' on single resources.
     *
     * @returns Workspace Workspace details
     * @returns ApiError Error
     * @throws ApiError
     */
    public getWorkspace(
        workspaceId: string,
        naosFilepathMode?: 'atoll' | 'naos-service-win' | 'naos-service-linux',
        prefer?: string,
    ): CancelablePromise<Workspace | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/workspaces/{workspace_id}',
            path: {
                'workspace_id': workspaceId,
            },
            headers: {
                'Naos-Filepath-Mode': naosFilepathMode,
                'Prefer': prefer,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Delete a workspace
     * @param workspaceId Workspace identifier.
     * @param force Forces deletion. When applied to workspaces, any pending modifications are not saved.
     * Workspaces are deleted if their state is different from `accepted`, `created`, or `failed`.
     *
     * @returns any OK
     * @returns ApiError Error
     * @throws ApiError
     */
    public deleteWorkspace(
        workspaceId: string,
        force: boolean = false,
    ): CancelablePromise<any | ApiError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/workspaces/{workspace_id}',
            path: {
                'workspace_id': workspaceId,
            },
            query: {
                'force': force,
            },
        });
    }
    /**
     * Edit a workspace
     * @param workspaceId Workspace identifier.
     * @param historyMessage An optional message indicating the changes that were made to the document. If omitted, a default meaningful message will be generated.
     * @param requestBody
     * @returns Workspace OK
     * @throws ApiError
     */
    public editWorkspace(
        workspaceId: string,
        historyMessage?: string,
        requestBody?: Workspace,
    ): CancelablePromise<Workspace> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/workspaces/{workspace_id}',
            path: {
                'workspace_id': workspaceId,
            },
            query: {
                'history_message': historyMessage,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Opens a workspace on a new instance
     * @param workspaceId Workspace identifier.
     * @param requestBody
     * @returns any Accepted
     * @throws ApiError
     */
    public startInstanceAndOpenWorkspace(
        workspaceId: string,
        requestBody?: NaosInstance,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/workspaces/{workspace_id}',
            path: {
                'workspace_id': workspaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
