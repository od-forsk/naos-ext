/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangePasswordObject } from '../models/ChangePasswordObject';
import type { GatewayTeam } from '../models/GatewayTeam';
import type { UserInfo } from '../models/UserInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get user info
     * Gets information about the current user.
     * @returns UserInfo Ok
     * @throws ApiError
     */
    public getCurrentUser(): CancelablePromise<UserInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user',
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * Edit user info
     * Changes information about the current user.
     * @param requestBody User info
     * @returns UserInfo Ok
     * @throws ApiError
     */
    public editCurrentUser(
        requestBody: UserInfo,
    ): CancelablePromise<UserInfo> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/user',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * Change password
     * Changes the password of the current user.
     * @param requestBody Password info
     * @returns any Ok
     * @throws ApiError
     */
    public changeCurrentUserPassword(
        requestBody: ChangePasswordObject,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/user/password',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `User not found`,
            },
        });
    }
    /**
     * Get user teams
     * Gets the list of teams that the current user belongs to. Only returns the team id and name from the Gateway Teams object.
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @returns GatewayTeam Ok
     * @throws ApiError
     */
    public getCurrentUserTeams(
        skip?: number,
        limit: number = 1000,
    ): CancelablePromise<Array<GatewayTeam>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/teams',
            query: {
                'skip': skip,
                'limit': limit,
            },
            errors: {
                404: `User not found`,
            },
        });
    }
}
