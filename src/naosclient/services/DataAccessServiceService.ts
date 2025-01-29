/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DataAccessServiceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Forwards a GET request to the Naos Data Access Service. The service along with its query parameters are specified in the 'route' parameter
     * @param route
     * @returns any OK
     * @throws ApiError
     */
    public dasProxyGet(
        route: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/data-access-service/{route}',
            path: {
                'route': route,
            },
        });
    }
    /**
     * Forwards a POST request to the Naos Data Access Service. The service along with its query parameters are specified in the 'route' parameter
     * @param route
     * @param requestBody Any value.
     * @returns any OK
     * @throws ApiError
     */
    public dasProxyPost(
        route: string,
        requestBody?: (string | Record<string, any>) | null,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/data-access-service/{route}',
            path: {
                'route': route,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Forwards a PUT request to the Naos Data Access Service. The service along with its query parameters are specified in the 'route' parameter
     * @param route
     * @param requestBody Any value.
     * @returns any OK
     * @throws ApiError
     */
    public dasProxyPut(
        route: string,
        requestBody?: (string | Record<string, any>) | null,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/data-access-service/{route}',
            path: {
                'route': route,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Forwards a PATCH request to the Naos Data Access Service. The service along with its query parameters are specified in the 'route' parameter
     * @param route
     * @param requestBody Any value.
     * @returns any OK
     * @throws ApiError
     */
    public dasProxyPatch(
        route: string,
        requestBody?: (string | Record<string, any>) | null,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/data-access-service/{route}',
            path: {
                'route': route,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Forwards a DELETE request to the Naos Data Access Service. The service along with its query parameters are specified in the 'route' parameter
     * @param route
     * @returns any OK
     * @throws ApiError
     */
    public dasProxyDelete(
        route: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/data-access-service/{route}',
            path: {
                'route': route,
            },
        });
    }
}
