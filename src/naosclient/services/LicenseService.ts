/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LicenseKey } from '../models/LicenseKey';
import type { LicenseSession } from '../models/LicenseSession';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class LicenseService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * ADMIN. Get details about license keys
     * @returns LicenseKey Ok
     * @throws ApiError
     */
    public getLicenses(): CancelablePromise<Array<LicenseKey>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/license',
        });
    }
    /**
     * ADMIN. List consumed tokens per instance
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @param userId Filter by user
     * @param teamId Filter by team
     * @returns LicenseSession Ok
     * @throws ApiError
     */
    public getSessions(
        skip?: number,
        limit: number = 1000,
        userId?: string,
        teamId?: string,
    ): CancelablePromise<Array<LicenseSession>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/license/session',
            query: {
                'skip': skip,
                'limit': limit,
                'user_id': userId,
                'team_id': teamId,
            },
        });
    }
}
