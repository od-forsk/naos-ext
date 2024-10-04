/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SchedulerService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Forwards a GET request to the Naos Workflow Manager service. The service along with its query parameters are specified in the 'route' parameter
     * @param route
     * @returns any OK
     * @throws ApiError
     */
    public schedulerProxyGet(
        route: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/scheduler/{route}',
            path: {
                'route': route,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Forwards a POST request to the Naos Workflow Manager service. The service along with its query parameters are specified in the 'route' parameter
     * @param route
     * @param requestBody Any value.
     * @returns any OK
     * @throws ApiError
     */
    public schedulerProxyPost(
        route: string,
        requestBody?: (string | Record<string, any>) | null,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/scheduler/{route}',
            path: {
                'route': route,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Forwards a PUT request to the Naos Workflow Manager service. The service along with its query parameters are specified in the 'route' parameter
     * @param route
     * @param requestBody Any value.
     * @returns any OK
     * @throws ApiError
     */
    public schedulerProxyPut(
        route: string,
        requestBody?: (string | Record<string, any>) | null,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/scheduler/{route}',
            path: {
                'route': route,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Forwards a PATCH request to the Naos Workflow Manager service. The service along with its query parameters are specified in the 'route' parameter
     * @param route
     * @param requestBody Any value.
     * @returns any OK
     * @throws ApiError
     */
    public schedulerProxyPatch(
        route: string,
        requestBody?: (string | Record<string, any>) | null,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/scheduler/{route}',
            path: {
                'route': route,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Forwards a DELETE request to the Naos Workflow Manager service. The service along with its query parameters are specified in the 'route' parameter
     * @param route
     * @returns any OK
     * @throws ApiError
     */
    public schedulerProxyDelete(
        route: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/scheduler/{route}',
            path: {
                'route': route,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
}
