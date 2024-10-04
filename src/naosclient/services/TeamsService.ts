/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GatewayTeam } from '../models/GatewayTeam';
import type { GatewayTeamUser } from '../models/GatewayTeamUser';
import type { IdResponse } from '../models/IdResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TeamsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * ADMIN. List teams
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @param matchPattern Regular expression pattern used to match teams names
     * @returns GatewayTeam Ok
     * @throws ApiError
     */
    public getTeams(
        skip?: number,
        limit: number = 1000,
        matchPattern?: string,
    ): CancelablePromise<Array<GatewayTeam>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/teams',
            query: {
                'skip': skip,
                'limit': limit,
                'match_pattern': matchPattern,
            },
            errors: {
                403: `Current user is not admin`,
            },
        });
    }
    /**
     * ADMIN. Create team
     * @param requestBody Team details
     * @returns IdResponse Created
     * @throws ApiError
     */
    public createTeam(
        requestBody: GatewayTeam,
    ): CancelablePromise<IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/teams',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Current user is not admin`,
            },
        });
    }
    /**
     * ADMIN. Get team
     * @param teamId Team identifier.
     * @returns GatewayTeam Ok
     * @throws ApiError
     */
    public getTeam(
        teamId: string,
    ): CancelablePromise<GatewayTeam> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/teams/{team_id}',
            path: {
                'team_id': teamId,
            },
            errors: {
                403: `Current user is not admin`,
                404: `Team not found`,
            },
        });
    }
    /**
     * ADMIN. Delete team
     * @param teamId Team identifier.
     * @returns any Ok
     * @throws ApiError
     */
    public deleteTeam(
        teamId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/teams/{team_id}',
            path: {
                'team_id': teamId,
            },
            errors: {
                403: `Current user is not admin`,
                404: `Team not found`,
            },
        });
    }
    /**
     * ADMIN. Edit team details
     * @param teamId Team identifier.
     * @param requestBody Team details
     * @returns GatewayTeam Ok
     * @throws ApiError
     */
    public editTeam(
        teamId: string,
        requestBody: GatewayTeam,
    ): CancelablePromise<GatewayTeam> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/teams/{team_id}',
            path: {
                'team_id': teamId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Current user is not admin`,
                404: `Team not found`,
            },
        });
    }
    /**
     * ADMIN. Get team's users
     * @param teamId Team identifier.
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @returns GatewayTeamUser Ok
     * @throws ApiError
     */
    public getTeamUsers(
        teamId: string,
        skip?: number,
        limit: number = 1000,
    ): CancelablePromise<Array<GatewayTeamUser>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/teams/{team_id}/users',
            path: {
                'team_id': teamId,
            },
            query: {
                'skip': skip,
                'limit': limit,
            },
            errors: {
                403: `Current user is not admin`,
                404: `Team not found`,
            },
        });
    }
    /**
     * ADMIN. Add a batch of users to an existing team
     * @param teamId Team identifier.
     * @param requestBody List of users and roles to add to the team
     * @returns GatewayTeamUser List of added users. Skip if the user already belong to the team
     * @throws ApiError
     */
    public addTeamUsers(
        teamId: string,
        requestBody: Array<GatewayTeamUser>,
    ): CancelablePromise<Array<GatewayTeamUser>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/teams/{team_id}/users',
            path: {
                'team_id': teamId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `User not found`,
                403: `Current user is not admin`,
                404: `Team not found`,
            },
        });
    }
    /**
     * ADMIN. Add a user to an existing team
     * @param teamId Team identifier.
     * @param userId User identifier.
     * @param role User can be a member or a team admin
     * @returns GatewayTeamUser Ok
     * @throws ApiError
     */
    public addTeamUser(
        teamId: string,
        userId: string,
        role: 'MEMBER' | 'ADMIN',
    ): CancelablePromise<GatewayTeamUser> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/teams/{team_id}/users/{user_id}',
            path: {
                'team_id': teamId,
                'user_id': userId,
            },
            query: {
                'role': role,
            },
            errors: {
                400: `User already exists in the team`,
                403: `Current user is not admin`,
                404: `Team/User not found`,
            },
        });
    }
    /**
     * ADMIN. Remove a user from a team
     * @param teamId Team identifier.
     * @param userId User identifier.
     * @returns any Ok
     * @throws ApiError
     */
    public deleteTeamUser(
        teamId: string,
        userId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/teams/{team_id}/users/{user_id}',
            path: {
                'team_id': teamId,
                'user_id': userId,
            },
            errors: {
                403: `Current user is not admin`,
                404: `Team/User not found`,
            },
        });
    }
    /**
     * ADMIN. Modify the role of a user that belongs to a team
     * @param teamId Team identifier.
     * @param userId User identifier.
     * @param requestBody
     * @returns GatewayTeamUser Ok
     * @throws ApiError
     */
    public editTeamUser(
        teamId: string,
        userId: string,
        requestBody: GatewayTeamUser,
    ): CancelablePromise<GatewayTeamUser> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/teams/{team_id}/users/{user_id}',
            path: {
                'team_id': teamId,
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Current user is not admin`,
                404: `Team/User not found`,
            },
        });
    }
}
