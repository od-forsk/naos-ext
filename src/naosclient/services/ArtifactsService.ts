/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiError } from '../models/ApiError';
import type { Artifact } from '../models/Artifact';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ArtifactsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * ADMIN. Get artifacts list
     * Returns a list of all available user artifacts.
     * @param name Resource name to look for
     * @param createdFrom Filter creation date from (lower bound).
     * @param createdTo Filter creation date to (upper bound).
     * @param naosFilepathMode Map URI values in the response to the desired context
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @param orderBy Order by ressource fields. Multiple fields can be used separated by a comma,
     * and order can be controlled by prepending fields with '+' (ascending, default) or '-' (descending).
     *
     * @param atype Filter on type of the artifacts
     * @returns Artifact Artifacts
     * @returns ApiError Error
     * @throws ApiError
     */
    public getArtifacts(
        name?: string,
        createdFrom?: string,
        createdTo?: string,
        naosFilepathMode?: 'atoll' | 'naos-service-win' | 'naos-service-linux',
        skip?: number,
        limit: number = 1000,
        orderBy?: string,
        atype?: 'coverage',
    ): CancelablePromise<Array<Artifact> | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/artifacts',
            headers: {
                'Naos-Filepath-Mode': naosFilepathMode,
            },
            query: {
                'name': name,
                'created_from': createdFrom,
                'created_to': createdTo,
                'skip': skip,
                'limit': limit,
                'order_by': orderBy,
                'atype': atype,
            },
        });
    }
    /**
     * ADMIN. Delete Artifact details
     * Delete the given artifact.
     * @param artifactId Artifact ID
     * @param deleteData Delete referenced data on drive/object store
     * @returns any OK
     * @throws ApiError
     */
    public deleteArtifact(
        artifactId: string,
        deleteData: boolean = false,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/artifacts/{artifact_id}',
            path: {
                'artifact_id': artifactId,
            },
            query: {
                'delete_data': deleteData,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * ADMIN. Get Artifact details
     * Returns details the artifact.
     * @param artifactId Artifact ID
     * @param naosFilepathMode Map URI values in the response to the desired context
     * @returns Artifact Artifact details
     * @throws ApiError
     */
    public getArtifact(
        artifactId: string,
        naosFilepathMode?: 'atoll' | 'naos-service-win' | 'naos-service-linux',
    ): CancelablePromise<Artifact> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/artifacts/{artifact_id}',
            path: {
                'artifact_id': artifactId,
            },
            headers: {
                'Naos-Filepath-Mode': naosFilepathMode,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * ADMIN. Get Artifact content
     * Returns the content of the artifact.
     * @param artifactId Artifact ID
     * @returns binary Artifact content
     * @throws ApiError
     */
    public downloadArtifact(
        artifactId: string,
    ): CancelablePromise<Blob> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/artifacts/{artifact_id}/download',
            path: {
                'artifact_id': artifactId,
            },
        });
    }
}
