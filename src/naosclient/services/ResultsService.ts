/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiError } from '../models/ApiError';
import type { Result } from '../models/Result';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResultsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * ADMIN. Get results list
     * Returns a list of all available results.
     * @param targetId Result target id (coverage id, ...)
     * @param name Resource name to look for
     * @param jobId Filter ressource on job id.
     *
     * @param runId Filter ressource on run id.
     *
     * @param resultType Result type
     * @param createdFrom Filter creation date from (lower bound).
     * @param createdTo Filter creation date to (upper bound).
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @param orderBy Order by ressource fields. Multiple fields can be used separated by a comma,
     * and order can be controlled by prepending fields with '+' (ascending, default) or '-' (descending).
     *
     * @returns Result Results
     * @returns ApiError Error
     * @throws ApiError
     */
    public getResults(
        targetId?: string,
        name?: string,
        jobId?: string,
        runId?: string,
        resultType?: 'basic' | 'coverage',
        createdFrom?: string,
        createdTo?: string,
        skip?: number,
        limit: number = 1000,
        orderBy?: string,
    ): CancelablePromise<Array<Result> | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/results',
            query: {
                'target_id': targetId,
                'name': name,
                'job_id': jobId,
                'run_id': runId,
                'result_type': resultType,
                'created_from': createdFrom,
                'created_to': createdTo,
                'skip': skip,
                'limit': limit,
                'order_by': orderBy,
            },
        });
    }
    /**
     * ADMIN. Get result details
     * @param resultId Result Id
     * @returns Result OK
     * @returns ApiError Error
     * @throws ApiError
     */
    public getResult(
        resultId: string,
    ): CancelablePromise<Result | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/results/{result_id}',
            path: {
                'result_id': resultId,
            },
        });
    }
    /**
     * ADMIN. Delete result
     * @param resultId Result Id
     * @returns ApiError Error
     * @throws ApiError
     */
    public deleteResult(
        resultId: string,
    ): CancelablePromise<ApiError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/results/{result_id}',
            path: {
                'result_id': resultId,
            },
        });
    }
}
