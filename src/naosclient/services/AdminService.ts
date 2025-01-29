/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiError } from '../models/ApiError';
import type { GatewayTeam } from '../models/GatewayTeam';
import type { IdResponse } from '../models/IdResponse';
import type { NaosInstance } from '../models/NaosInstance';
import type { NaosInstanceParameters } from '../models/NaosInstanceParameters';
import type { SetPasswordObject } from '../models/SetPasswordObject';
import type { UserInfo } from '../models/UserInfo';
import type { UserToken } from '../models/UserToken';
import type { Workspace } from '../models/Workspace';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AdminService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * ADMIN. List users
     * @param name User name to look for
     * @param login User login to look for
     * @param email User email to look for
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @param orderBy Order by ressource fields. Multiple fields can be used separated by a comma,
     * and order can be controlled by prepending fields with '+' (ascending, default) or '-' (descending).
     *
     * @param prefer Prefer header according to RFC 7240.
     * Supported preferences:
     * - details: minimal/normal/full <br>Level of details on the targeted resource response. Defaults to 'normal' on listing APIs, and 'full' on single resources.
     *
     * @returns UserInfo Ok
     * @throws ApiError
     */
    public getUsers(
        name?: string,
        login?: string,
        email?: string,
        skip?: number,
        limit: number = 1000,
        orderBy?: string,
        prefer?: string,
    ): CancelablePromise<Array<UserInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/users',
            headers: {
                'Prefer': prefer,
            },
            query: {
                'name': name,
                'login': login,
                'email': email,
                'skip': skip,
                'limit': limit,
                'order_by': orderBy,
            },
        });
    }
    /**
     * ADMIN. Create user
     * @param requestBody User info
     * @returns IdResponse Created
     * @throws ApiError
     */
    public createUser(
        requestBody: UserInfo,
    ): CancelablePromise<IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ADMIN. Change user password
     * @param userId User identifier.
     * @param requestBody Password info
     * @returns any Ok
     * @throws ApiError
     */
    public changeUserPassword(
        userId: string,
        requestBody: SetPasswordObject,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/admin/users/{user_id}/password',
            path: {
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Current user is not admin`,
                404: `User not found`,
            },
        });
    }
    /**
     * ADMIN. Returns a list of teams a user is member of
     * @param userId User identifier.
     * @returns GatewayTeam Ok
     * @throws ApiError
     */
    public getUserTeams(
        userId: string,
    ): CancelablePromise<Array<GatewayTeam>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/users/{user_id}/teams',
            path: {
                'user_id': userId,
            },
            errors: {
                403: `Current user is not admin`,
                404: `User not found`,
            },
        });
    }
    /**
     * ADMIN. List user tokens
     * @param userId User identifier.
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @param createdFrom Filter creation date from (lower bound).
     * @param createdTo Filter creation date to (upper bound).
     * @param expiresFrom Filter expiration date from (lower bound).
     * @param expiresTo Filter expiration date to (upper bound).
     * @param lastSeenFrom Filter last seen date from (lower bound).
     * @param lastSeenTo Filter last seen date to (upper bound).
     * @param orderBy Order by ressource fields. Multiple fields can be used separated by a comma,
     * and order can be controlled by prepending fields with '+' (ascending, default) or '-' (descending).
     *
     * @returns UserToken Ok
     * @throws ApiError
     */
    public getUserTokens(
        userId: string,
        skip?: number,
        limit: number = 1000,
        createdFrom?: string,
        createdTo?: string,
        expiresFrom?: string,
        expiresTo?: string,
        lastSeenFrom?: string,
        lastSeenTo?: string,
        orderBy?: string,
    ): CancelablePromise<Array<UserToken>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/users/{user_id}/tokens',
            path: {
                'user_id': userId,
            },
            query: {
                'skip': skip,
                'limit': limit,
                'created_from': createdFrom,
                'created_to': createdTo,
                'expires_from': expiresFrom,
                'expires_to': expiresTo,
                'last_seen_from': lastSeenFrom,
                'last_seen_to': lastSeenTo,
                'order_by': orderBy,
            },
            errors: {
                403: `Current user is not admin`,
                404: `User not found`,
            },
        });
    }
    /**
     * ADMIN. Delete all user tokens, effectively 'logging out' the user
     * @param userId User identifier.
     * @returns any Ok
     * @throws ApiError
     */
    public deleteUserTokens(
        userId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/users/{user_id}/tokens',
            path: {
                'user_id': userId,
            },
            errors: {
                403: `Current user is not admin`,
                404: `User not found`,
            },
        });
    }
    /**
     * ADMIN. Get user token
     * @param userId User identifier.
     * @param tokenId Token Id
     * @returns UserToken Ok
     * @throws ApiError
     */
    public getUserToken(
        userId: string,
        tokenId: string,
    ): CancelablePromise<UserToken> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/users/{user_id}/tokens/{token_id}',
            path: {
                'user_id': userId,
                'token_id': tokenId,
            },
            errors: {
                403: `Current user is not admin`,
                404: `User or Token not found`,
            },
        });
    }
    /**
     * ADMIN. Revoke user token
     * @param userId User identifier.
     * @param tokenId Token Id
     * @returns any Ok
     * @throws ApiError
     */
    public revokeUserToken(
        userId: string,
        tokenId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/users/{user_id}/tokens/{token_id}',
            path: {
                'user_id': userId,
                'token_id': tokenId,
            },
            errors: {
                403: `Current user is not admin`,
                404: `User or Token not found`,
            },
        });
    }
    /**
     * ADMIN. List user active instances
     * @param userId User identifier.
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @param orderBy Order by ressource fields. Multiple fields can be used separated by a comma,
     * and order can be controlled by prepending fields with '+' (ascending, default) or '-' (descending).
     *
     * @param prefer Prefer header according to RFC 7240.
     * Supported preferences:
     * - details: minimal/normal/full <br>Level of details on the targeted resource response. Defaults to 'normal' on listing APIs, and 'full' on single resources.
     *
     * @returns NaosInstance Ok
     * @throws ApiError
     */
    public getUserInstances(
        userId: string,
        skip?: number,
        limit: number = 1000,
        orderBy?: string,
        prefer?: string,
    ): CancelablePromise<Array<NaosInstance>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/users/{user_id}/naos',
            path: {
                'user_id': userId,
            },
            headers: {
                'Prefer': prefer,
            },
            query: {
                'skip': skip,
                'limit': limit,
                'order_by': orderBy,
            },
            errors: {
                403: `Current user is not admin`,
                404: `User not found`,
            },
        });
    }
    /**
     * ADMIN. Free all user instances
     * @param userId User identifier.
     * @returns any OK
     * @throws ApiError
     */
    public freeUserInstances(
        userId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/users/{user_id}/naos',
            path: {
                'user_id': userId,
            },
            errors: {
                403: `Current user is not admin`,
            },
        });
    }
    /**
     * ADMIN Create a new user instance
     * @param userId User identifier.
     * @param requestBody
     * @returns IdResponse Created
     * @throws ApiError
     */
    public addUserInstance(
        userId: string,
        requestBody?: NaosInstanceParameters,
    ): CancelablePromise<IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/users/{user_id}/naos',
            path: {
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Current user is not admin`,
            },
        });
    }
    /**
     * ADMIN. Get user active instance details
     * @param userId User identifier.
     * @param instanceId Instance identifier.
     * @param prefer Prefer header according to RFC 7240.
     * Supported preferences:
     * - details: minimal/normal/full <br>Level of details on the targeted resource response. Defaults to 'normal' on listing APIs, and 'full' on single resources.
     *
     * @returns NaosInstance Ok
     * @throws ApiError
     */
    public getUserInstance(
        userId: string,
        instanceId: string,
        prefer?: string,
    ): CancelablePromise<NaosInstance> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/users/{user_id}/naos/{instance_id}',
            path: {
                'user_id': userId,
                'instance_id': instanceId,
            },
            headers: {
                'Prefer': prefer,
            },
            errors: {
                403: `Current user is not admin`,
                404: `User or instance not found`,
            },
        });
    }
    /**
     * ADMIN. Free user instance
     * @param userId User identifier.
     * @param instanceId Instance identifier.
     * @param backup Backup instance project if available
     * @returns any OK
     * @throws ApiError
     */
    public freeUserInstance(
        userId: string,
        instanceId: string,
        backup: boolean = false,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/users/{user_id}/naos/{instance_id}',
            path: {
                'user_id': userId,
                'instance_id': instanceId,
            },
            query: {
                'backup': backup,
            },
            errors: {
                403: `Current user is not admin`,
                404: `Not found`,
            },
        });
    }
    /**
     * ADMIN. Get user
     * @param userId User identifier.
     * @param prefer Prefer header according to RFC 7240.
     * Supported preferences:
     * - details: minimal/normal/full <br>Level of details on the targeted resource response. Defaults to 'normal' on listing APIs, and 'full' on single resources.
     *
     * @returns UserInfo Ok
     * @throws ApiError
     */
    public getUser(
        userId: string,
        prefer?: string,
    ): CancelablePromise<UserInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/users/{user_id}',
            path: {
                'user_id': userId,
            },
            headers: {
                'Prefer': prefer,
            },
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * ADMIN. Delete user
     * @param userId User identifier.
     * @param deleteWorkspaces Remove user workspaces
     * @returns any Ok
     * @throws ApiError
     */
    public deleteUser(
        userId: string,
        deleteWorkspaces: boolean = true,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/users/{user_id}',
            path: {
                'user_id': userId,
            },
            query: {
                'delete_workspaces': deleteWorkspaces,
            },
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * ADMIN. Edit user info
     * @param userId User identifier.
     * @param requestBody User info
     * @returns UserInfo Ok
     * @throws ApiError
     */
    public editUser(
        userId: string,
        requestBody: UserInfo,
    ): CancelablePromise<UserInfo> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/admin/users/{user_id}',
            path: {
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * ADMIN. List global active instances
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @param orderBy Order by ressource fields. Multiple fields can be used separated by a comma,
     * and order can be controlled by prepending fields with '+' (ascending, default) or '-' (descending).
     *
     * @param prefer Prefer header according to RFC 7240.
     * Supported preferences:
     * - details: minimal/normal/full <br>Level of details on the targeted resource response. Defaults to 'normal' on listing APIs, and 'full' on single resources.
     *
     * @param matchPattern Regular expression pattern used to match instance names
     * @returns NaosInstance Ok
     * @throws ApiError
     */
    public getGlobalInstances(
        skip?: number,
        limit: number = 1000,
        orderBy?: string,
        prefer?: string,
        matchPattern?: string,
    ): CancelablePromise<Array<NaosInstance>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/naos',
            headers: {
                'Prefer': prefer,
            },
            query: {
                'skip': skip,
                'limit': limit,
                'order_by': orderBy,
                'match_pattern': matchPattern,
            },
            errors: {
                403: `Current user is not admin`,
            },
        });
    }
    /**
     * ADMIN. Get global active instance details
     * @param instanceId Instance identifier.
     * @param prefer Prefer header according to RFC 7240.
     * Supported preferences:
     * - details: minimal/normal/full <br>Level of details on the targeted resource response. Defaults to 'normal' on listing APIs, and 'full' on single resources.
     *
     * @returns NaosInstance Ok
     * @throws ApiError
     */
    public getGlobalInstance(
        instanceId: string,
        prefer?: string,
    ): CancelablePromise<NaosInstance> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/naos/{instance_id}',
            path: {
                'instance_id': instanceId,
            },
            headers: {
                'Prefer': prefer,
            },
            errors: {
                403: `Current user is not admin`,
            },
        });
    }
    /**
     * ADMIN. Free global instance
     * @param instanceId Instance identifier.
     * @param backup Backup instances project if available
     * @returns any OK
     * @throws ApiError
     */
    public freeGlobalInstance(
        instanceId: string,
        backup: boolean = false,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/naos/{instance_id}',
            path: {
                'instance_id': instanceId,
            },
            query: {
                'backup': backup,
            },
            errors: {
                403: `Current user is not admin`,
            },
        });
    }
    /**
     * ADMIN. List tokens
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @param clientIp Filter by client IP.
     * @param createdFrom Filter creation date from (lower bound).
     * @param createdTo Filter creation date to (upper bound).
     * @param expiresFrom Filter expiration date from (lower bound).
     * @param expiresTo Filter expiration date to (upper bound).
     * @param lastSeenFrom Filter last seen date from (lower bound).
     * @param lastSeenTo Filter last seen date to (upper bound).
     * @param orderBy Order by ressource fields. Multiple fields can be used separated by a comma,
     * and order can be controlled by prepending fields with '+' (ascending, default) or '-' (descending).
     *
     * @returns UserToken Ok
     * @throws ApiError
     */
    public getGlobalTokens(
        skip?: number,
        limit: number = 1000,
        clientIp?: string,
        createdFrom?: string,
        createdTo?: string,
        expiresFrom?: string,
        expiresTo?: string,
        lastSeenFrom?: string,
        lastSeenTo?: string,
        orderBy?: string,
    ): CancelablePromise<Array<UserToken>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/tokens',
            query: {
                'skip': skip,
                'limit': limit,
                'client_ip': clientIp,
                'created_from': createdFrom,
                'created_to': createdTo,
                'expires_from': expiresFrom,
                'expires_to': expiresTo,
                'last_seen_from': lastSeenFrom,
                'last_seen_to': lastSeenTo,
                'order_by': orderBy,
            },
            errors: {
                403: `Current user is not admin`,
            },
        });
    }
    /**
     * ADMIN. Revoke all tokens
     * @returns any Ok
     * @throws ApiError
     */
    public revokeAllToken(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/tokens',
            errors: {
                403: `Current user is not admin`,
            },
        });
    }
    /**
     * ADMIN. Get a token
     * @param tokenId Token Id
     * @returns UserToken Ok
     * @throws ApiError
     */
    public getToken(
        tokenId: string,
    ): CancelablePromise<UserToken> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/tokens/{token_id}',
            path: {
                'token_id': tokenId,
            },
            errors: {
                403: `Current user is not admin`,
                404: `Token not found`,
            },
        });
    }
    /**
     * ADMIN. Revoke a token
     * @param tokenId Token Id
     * @returns any Ok
     * @throws ApiError
     */
    public revokeToken(
        tokenId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/tokens/{token_id}',
            path: {
                'token_id': tokenId,
            },
            errors: {
                403: `Current user is not admin`,
                404: `Token not found`,
            },
        });
    }
    /**
     * ADMIN. List workspaces
     * @param name Workspace name to look for
     * @param createdFrom Filter on starting creation date
     * @param createdTo Filter on ending creation date
     * @param modifiedFrom Filter on starting modification date
     * @param modifiedTo Filter on ending modification date
     * @param userId Filter on user id
     * @param projectName Filter on project name
     * @param projectId Filter on project id
     * @param technologies Determines the radio technologies for the query.
     * @param skip Workspaces to skip
     * @param limit Max workspaces to return
     * @returns Workspace Workspaces
     * @returns ApiError Error
     * @throws ApiError
     */
    public getAllWorkspaces(
        name?: string,
        createdFrom?: string,
        createdTo?: string,
        modifiedFrom?: string,
        modifiedTo?: string,
        userId?: string,
        projectName?: string,
        projectId?: string,
        technologies?: Array<'5G_NR' | 'LTE' | 'NB_IOT' | 'UMTS' | '1XRTT' | 'GSM'>,
        skip?: number,
        limit?: number,
    ): CancelablePromise<Array<Workspace> | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/workspaces',
            query: {
                'name': name,
                'created_from': createdFrom,
                'created_to': createdTo,
                'modified_from': modifiedFrom,
                'modified_to': modifiedTo,
                'user_id': userId,
                'project_name': projectName,
                'project_id': projectId,
                'technologies': technologies,
                'skip': skip,
                'limit': limit,
            },
            errors: {
                403: `Current user is not admin`,
            },
        });
    }
    /**
     * ADMIN. Get details concerning a specific workspace
     * @param workspaceId Workspace identifier.
     * @returns Workspace Workspace details
     * @throws ApiError
     */
    public getWorkspaceAdmin(
        workspaceId: string,
    ): CancelablePromise<Workspace> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/workspaces/{workspace_id}',
            path: {
                'workspace_id': workspaceId,
            },
            errors: {
                403: `Current user is not admin`,
                404: `Not found`,
            },
        });
    }
    /**
     * ADMIN. Delete a workspace
     * @param workspaceId Workspace identifier.
     * @param force Forces deletion. When applied to workspaces, any pending modifications are not saved.
     * Workspaces are deleted if their state is different from `accepted`, `created`, or `failed`.
     *
     * @returns any OK
     * @returns ApiError Error
     * @throws ApiError
     */
    public deleteWorkspaceAdmin(
        workspaceId: string,
        force: boolean = false,
    ): CancelablePromise<any | ApiError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/workspaces/{workspace_id}',
            path: {
                'workspace_id': workspaceId,
            },
            query: {
                'force': force,
            },
            errors: {
                403: `Current user is not admin`,
            },
        });
    }
    /**
     * ADMIN. Edit a workspace
     * @param workspaceId Workspace identifier.
     * @param requestBody
     * @returns Workspace OK
     * @throws ApiError
     */
    public editWorkspaceAdmin(
        workspaceId: string,
        requestBody?: Workspace,
    ): CancelablePromise<Workspace> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/admin/workspaces/{workspace_id}',
            path: {
                'workspace_id': workspaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Current user is not admin`,
                404: `Not found`,
            },
        });
    }
    /**
     * ADMIN. List user workspaces
     * @param userId User identifier.
     * @param name Workspace name to look for
     * @param createdFrom Filter on starting creation date
     * @param createdTo Filter on ending creation date
     * @param modifiedFrom Filter on starting modification date
     * @param modifiedTo Filter on ending modification date
     * @param projectName Filter on project name
     * @param projectId Filter on project id
     * @param technologies Determines the radio technologies for the query.
     * @param skip Workspaces to skip
     * @param limit Max workspaces to return
     * @returns Workspace Workspaces
     * @returns ApiError Error
     * @throws ApiError
     */
    public getUserWorkspaces(
        userId: string,
        name?: string,
        createdFrom?: string,
        createdTo?: string,
        modifiedFrom?: string,
        modifiedTo?: string,
        projectName?: string,
        projectId?: string,
        technologies?: Array<'5G_NR' | 'LTE' | 'NB_IOT' | 'UMTS' | '1XRTT' | 'GSM'>,
        skip?: number,
        limit?: number,
    ): CancelablePromise<Array<Workspace> | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/{user_id}/workspaces',
            path: {
                'user_id': userId,
            },
            query: {
                'name': name,
                'created_from': createdFrom,
                'created_to': createdTo,
                'modified_from': modifiedFrom,
                'modified_to': modifiedTo,
                'project_name': projectName,
                'project_id': projectId,
                'technologies': technologies,
                'skip': skip,
                'limit': limit,
            },
            errors: {
                403: `Current user is not admin`,
            },
        });
    }
    /**
     * ADMIN. Create a user's workspace
     * @param userId User identifier.
     * @param applyProjectCfg Load project's configfuration files while creating the workspace, these configuration files will not appear in the workspace metadata and loaded only once.
     * Configuration files defined in the body of the request are applied at workspace openning.
     *
     * @param requestBody
     * @returns IdResponse Ok
     * @throws ApiError
     */
    public createUserWorkspace(
        userId: string,
        applyProjectCfg: boolean = true,
        requestBody?: Workspace,
    ): CancelablePromise<IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/{user_id}/workspaces',
            path: {
                'user_id': userId,
            },
            query: {
                'apply_project_cfg': applyProjectCfg,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid workspace details`,
                403: `Current user is not admin`,
            },
        });
    }
}
