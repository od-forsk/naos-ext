/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gateway health check route
     * @returns any Ok
     * @throws ApiError
     */
    public healthCheck(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/',
        });
    }
    /**
     * Get the status of the gateway and each naos service
     * @returns any Services status
     * @throws ApiError
     */
    public getGlobalStatus(): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/status',
        });
    }
    /**
     * Gateway release notes
     * @returns string Release notes
     * @throws ApiError
     */
    public getReleaseNotes(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/release-notes',
        });
    }
}
