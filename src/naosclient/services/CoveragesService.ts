/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiError } from '../models/ApiError';
import type { Artifact } from '../models/Artifact';
import type { AtollCoverage } from '../models/AtollCoverage';
import type { Coverage } from '../models/Coverage';
import type { CoverageDetails } from '../models/CoverageDetails';
import type { CoverageResult } from '../models/CoverageResult';
import type { IdResponse } from '../models/IdResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CoveragesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * ADMIN. Get coverages list.
     * Returns a list of all available coverages.
     * @param name Resource name to look for
     * @param workAreaId Filter ressource on work area id.
     *
     * @param ctype Coverage type to look for
     * @param createdFrom Filter creation date from (lower bound).
     * @param createdTo Filter creation date to (upper bound).
     * @param modifiedFrom Filter on starting modification date
     * @param modifiedTo Filter on ending modification date
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @param orderBy Order by ressource fields. Multiple fields can be used separated by a comma,
     * and order can be controlled by prepending fields with '+' (ascending, default) or '-' (descending).
     *
     * @returns Coverage Coverages
     * @returns ApiError Error
     * @throws ApiError
     */
    public getCoverages(
        name?: string,
        workAreaId?: string,
        ctype?: 'Signal Level' | 'RSRP' | 'CSI-RSRP' | 'Best Broadcast Beam' | 'Best Service Beam' | 'PDSCH C/(I+N)' | 'SSS C/(I+N)' | 'Peak RLC Channel Throughput (DL)' | 'Peak RLC Channel Throughput (UL)',
        createdFrom?: string,
        createdTo?: string,
        modifiedFrom?: string,
        modifiedTo?: string,
        skip?: number,
        limit: number = 1000,
        orderBy?: string,
    ): CancelablePromise<Array<Coverage> | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/coverages',
            query: {
                'name': name,
                'work_area_id': workAreaId,
                'ctype': ctype,
                'created_from': createdFrom,
                'created_to': createdTo,
                'modified_from': modifiedFrom,
                'modified_to': modifiedTo,
                'skip': skip,
                'limit': limit,
                'order_by': orderBy,
            },
        });
    }
    /**
     * ADMIN. Get coverage details
     * Return the details of the coverages.
     * @param coverageId Coverage Id
     * @returns CoverageDetails OK
     * @returns ApiError Error
     * @throws ApiError
     */
    public getCoverage(
        coverageId: string,
    ): CancelablePromise<CoverageDetails | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/coverages/{coverage_id}',
            path: {
                'coverage_id': coverageId,
            },
        });
    }
    /**
     * Get project's atoll coverages
     * Retrieve coverages extracted from project's configuration files.
     * @param projectId Project identifier.
     * @param name Resource name to look for
     * @param ctype Coverage type to look for
     * @param createdFrom Filter creation date from (lower bound).
     * @param modifiedFrom Filter on starting modification date
     * @param modifiedTo Filter on ending modification date
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @param orderBy Order by ressource fields. Multiple fields can be used separated by a comma,
     * and order can be controlled by prepending fields with '+' (ascending, default) or '-' (descending).
     *
     * @returns AtollCoverage OK
     * @returns ApiError Error
     * @throws ApiError
     */
    public getProjectAtollCoverages(
        projectId: string,
        name?: string,
        ctype?: 'Signal Level' | 'RSRP' | 'CSI-RSRP' | 'Best Broadcast Beam' | 'Best Service Beam' | 'PDSCH C/(I+N)' | 'SSS C/(I+N)' | 'Peak RLC Channel Throughput (DL)' | 'Peak RLC Channel Throughput (UL)',
        createdFrom?: string,
        modifiedFrom?: string,
        modifiedTo?: string,
        skip?: number,
        limit: number = 1000,
        orderBy?: string,
    ): CancelablePromise<Array<AtollCoverage> | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/atoll-coverages',
            path: {
                'project_id': projectId,
            },
            query: {
                'name': name,
                'ctype': ctype,
                'created_from': createdFrom,
                'modified_from': modifiedFrom,
                'modified_to': modifiedTo,
                'skip': skip,
                'limit': limit,
                'order_by': orderBy,
            },
        });
    }
    /**
     * Delete all project's coverages
     * @param projectId Project identifier.
     * @returns ApiError Error
     * @throws ApiError
     */
    public deleteProjectCoverages(
        projectId: string,
    ): CancelablePromise<ApiError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/coverages',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Get project's coverages
     * @param projectId Project identifier.
     * @param name Resource name to look for
     * @param ctype Coverage type to look for
     * @param createdFrom Filter creation date from (lower bound).
     * @param createdTo Filter creation date to (upper bound).
     * @param modifiedFrom Filter on starting modification date
     * @param modifiedTo Filter on ending modification date
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @param orderBy Order by ressource fields. Multiple fields can be used separated by a comma,
     * and order can be controlled by prepending fields with '+' (ascending, default) or '-' (descending).
     *
     * @returns Coverage OK
     * @returns ApiError Error
     * @throws ApiError
     */
    public getProjectCoverages(
        projectId: string,
        name?: string,
        ctype?: 'Signal Level' | 'RSRP' | 'CSI-RSRP' | 'Best Broadcast Beam' | 'Best Service Beam' | 'PDSCH C/(I+N)' | 'SSS C/(I+N)' | 'Peak RLC Channel Throughput (DL)' | 'Peak RLC Channel Throughput (UL)',
        createdFrom?: string,
        createdTo?: string,
        modifiedFrom?: string,
        modifiedTo?: string,
        skip?: number,
        limit: number = 1000,
        orderBy?: string,
    ): CancelablePromise<Array<Coverage> | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/coverages',
            path: {
                'project_id': projectId,
            },
            query: {
                'name': name,
                'ctype': ctype,
                'created_from': createdFrom,
                'created_to': createdTo,
                'modified_from': modifiedFrom,
                'modified_to': modifiedTo,
                'skip': skip,
                'limit': limit,
                'order_by': orderBy,
            },
        });
    }
    /**
     * Create project coverage
     * @param projectId Project identifier.
     * @param requestBody
     * @returns ApiError Error
     * @returns IdResponse Created
     * @throws ApiError
     */
    public createProjectCoverage(
        projectId: string,
        requestBody?: (CoverageDetails & Record<string, any>),
    ): CancelablePromise<ApiError | IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/coverages',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete project's coverage
     * @param projectId Project identifier.
     * @param coverageId Coverage Id
     * @returns ApiError Error
     * @throws ApiError
     */
    public deleteProjectCoverage(
        projectId: string,
        coverageId: string,
    ): CancelablePromise<ApiError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/coverages/{coverage_id}',
            path: {
                'project_id': projectId,
                'coverage_id': coverageId,
            },
        });
    }
    /**
     * Get project's coverage
     * @param projectId Project identifier.
     * @param coverageId Coverage Id
     * @returns CoverageDetails OK
     * @returns ApiError Error
     * @throws ApiError
     */
    public getProjectCoverage(
        projectId: string,
        coverageId: string,
    ): CancelablePromise<CoverageDetails | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/coverages/{coverage_id}',
            path: {
                'project_id': projectId,
                'coverage_id': coverageId,
            },
        });
    }
    /**
     * Edit project coverage
     * @param projectId Project identifier.
     * @param coverageId Coverage Id
     * @param requestBody
     * @returns CoverageDetails Ok
     * @returns ApiError Error
     * @throws ApiError
     */
    public editProjectCoverage(
        projectId: string,
        coverageId: string,
        requestBody?: CoverageDetails,
    ): CancelablePromise<CoverageDetails | ApiError> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/projects/{project_id}/coverages/{coverage_id}',
            path: {
                'project_id': projectId,
                'coverage_id': coverageId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete all coverage results
     * @param projectId Project identifier.
     * @param coverageId Coverage Id
     * @returns ApiError Error
     * @throws ApiError
     */
    public deleteProjectCoverageResults(
        projectId: string,
        coverageId: string,
    ): CancelablePromise<ApiError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/coverages/{coverage_id}/results',
            path: {
                'project_id': projectId,
                'coverage_id': coverageId,
            },
        });
    }
    /**
     * Get coverage results
     * @param projectId Project identifier.
     * @param coverageId Coverage Id
     * @param name Resource name to look for
     * @param createdFrom Filter creation date from (lower bound).
     * @param createdTo Filter creation date to (upper bound).
     * @param jobId Filter ressource on job id.
     *
     * @param runId Filter ressource on run id.
     *
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @param orderBy Order by ressource fields. Multiple fields can be used separated by a comma,
     * and order can be controlled by prepending fields with '+' (ascending, default) or '-' (descending).
     *
     * @returns CoverageResult OK
     * @returns ApiError Error
     * @throws ApiError
     */
    public getProjectCoverageResults(
        projectId: string,
        coverageId: string,
        name?: string,
        createdFrom?: string,
        createdTo?: string,
        jobId?: string,
        runId?: string,
        skip?: number,
        limit: number = 1000,
        orderBy?: string,
    ): CancelablePromise<Array<CoverageResult> | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/coverages/{coverage_id}/results',
            path: {
                'project_id': projectId,
                'coverage_id': coverageId,
            },
            query: {
                'name': name,
                'created_from': createdFrom,
                'created_to': createdTo,
                'job_id': jobId,
                'run_id': runId,
                'skip': skip,
                'limit': limit,
                'order_by': orderBy,
            },
        });
    }
    /**
     * Create a coverage result. Erase oldest result if coverage max_results is reached.
     * @param projectId Project identifier.
     * @param coverageId Coverage Id
     * @param requestBody
     * @returns ApiError Error
     * @returns IdResponse Created
     * @throws ApiError
     */
    public createProjectCoverageResult(
        projectId: string,
        coverageId: string,
        requestBody?: (CoverageResult & Record<string, any>),
    ): CancelablePromise<ApiError | IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/coverages/{coverage_id}/results',
            path: {
                'project_id': projectId,
                'coverage_id': coverageId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Reset coverage max results
     * @param projectId Project identifier.
     * @param coverageId Coverage Id
     * @returns ApiError Error
     * @throws ApiError
     */
    public resetProjectCoverageMaxResults(
        projectId: string,
        coverageId: string,
    ): CancelablePromise<ApiError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/coverages/{coverage_id}/results/resize',
            path: {
                'project_id': projectId,
                'coverage_id': coverageId,
            },
        });
    }
    /**
     * Change coverage max results
     * @param projectId Project identifier.
     * @param coverageId Coverage Id
     * @param requestBody
     * @returns ApiError Error
     * @throws ApiError
     */
    public resizeProjectCoverageResults(
        projectId: string,
        coverageId: string,
        requestBody?: {
            max_results?: number;
        },
    ): CancelablePromise<ApiError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/coverages/{coverage_id}/results/resize',
            path: {
                'project_id': projectId,
                'coverage_id': coverageId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete coverage result
     * @param projectId Project identifier.
     * @param coverageId Coverage Id
     * @param resultId Result Id
     * @returns ApiError Error
     * @throws ApiError
     */
    public deleteProjectCoverageResult(
        projectId: string,
        coverageId: string,
        resultId: string,
    ): CancelablePromise<ApiError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/coverages/{coverage_id}/results/{result_id}',
            path: {
                'project_id': projectId,
                'coverage_id': coverageId,
                'result_id': resultId,
            },
        });
    }
    /**
     * Get coverage result
     * @param projectId Project identifier.
     * @param coverageId Coverage Id
     * @param resultId Result Id
     * @returns CoverageResult OK
     * @returns ApiError Error
     * @throws ApiError
     */
    public getProjectCoverageResult(
        projectId: string,
        coverageId: string,
        resultId: string,
    ): CancelablePromise<CoverageResult | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/coverages/{coverage_id}/results/{result_id}',
            path: {
                'project_id': projectId,
                'coverage_id': coverageId,
                'result_id': resultId,
            },
        });
    }
    /**
     * Append an artifact to a coverage result
     * @param projectId Project identifier.
     * @param coverageId Coverage Id
     * @param resultId Result Id
     * @param requestBody
     * @returns ApiError Error
     * @returns IdResponse Created
     * @throws ApiError
     */
    public appendProjectCoverageResultArtifact(
        projectId: string,
        coverageId: string,
        resultId: string,
        requestBody?: Artifact,
    ): CancelablePromise<ApiError | IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/coverages/{coverage_id}/results/{result_id}/artifacts',
            path: {
                'project_id': projectId,
                'coverage_id': coverageId,
                'result_id': resultId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove coverage result retain
     * @param projectId Project identifier.
     * @param coverageId Coverage Id
     * @param resultId Result Id
     * @returns ApiError Error
     * @throws ApiError
     */
    public removeRetainFromProjectCoverageResult(
        projectId: string,
        coverageId: string,
        resultId: string,
    ): CancelablePromise<ApiError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/coverages/{coverage_id}/results/{result_id}/retain',
            path: {
                'project_id': projectId,
                'coverage_id': coverageId,
                'result_id': resultId,
            },
        });
    }
    /**
     * Retain a coverage result
     * @param projectId Project identifier.
     * @param coverageId Coverage Id
     * @param resultId Result Id
     * @param requestBody
     * @returns ApiError Error
     * @throws ApiError
     */
    public setRetainOnProjectCoverageResult(
        projectId: string,
        coverageId: string,
        resultId: string,
        requestBody?: {
            comment?: string;
        },
    ): CancelablePromise<ApiError> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/projects/{project_id}/coverages/{coverage_id}/results/{result_id}/retain',
            path: {
                'project_id': projectId,
                'coverage_id': coverageId,
                'result_id': resultId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get workspace atoll coverages
     * Retrieve coverages extracted from workspace's configuration files.
     * @param workspaceId Workspace identifier.
     * @param name Resource name to look for
     * @param createdFrom Filter creation date from (lower bound).
     * @param createdTo Filter creation date to (upper bound).
     * @param modifiedFrom Filter on starting modification date
     * @param modifiedTo Filter on ending modification date
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @param orderBy Order by ressource fields. Multiple fields can be used separated by a comma,
     * and order can be controlled by prepending fields with '+' (ascending, default) or '-' (descending).
     *
     * @returns AtollCoverage OK
     * @returns ApiError Error
     * @throws ApiError
     */
    public getWorkspaceAtollCoverages(
        workspaceId: string,
        name?: string,
        createdFrom?: string,
        createdTo?: string,
        modifiedFrom?: string,
        modifiedTo?: string,
        skip?: number,
        limit: number = 1000,
        orderBy?: string,
    ): CancelablePromise<Array<AtollCoverage> | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/workspaces/{workspace_id}/atoll-coverages',
            path: {
                'workspace_id': workspaceId,
            },
            query: {
                'name': name,
                'created_from': createdFrom,
                'created_to': createdTo,
                'modified_from': modifiedFrom,
                'modified_to': modifiedTo,
                'skip': skip,
                'limit': limit,
                'order_by': orderBy,
            },
        });
    }
    /**
     * Delete all workspace's coverages
     * @param workspaceId Workspace identifier.
     * @returns ApiError Error
     * @throws ApiError
     */
    public deleteWorkspaceCoverages(
        workspaceId: string,
    ): CancelablePromise<ApiError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/workspaces/{workspace_id}/coverages',
            path: {
                'workspace_id': workspaceId,
            },
        });
    }
    /**
     * Get workspace's coverages
     * @param workspaceId Workspace identifier.
     * @param name Resource name to look for
     * @param ctype Coverage type to look for
     * @param createdFrom Filter creation date from (lower bound).
     * @param createdTo Filter creation date to (upper bound).
     * @param modifiedFrom Filter on starting modification date
     * @param modifiedTo Filter on ending modification date
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @param orderBy Order by ressource fields. Multiple fields can be used separated by a comma,
     * and order can be controlled by prepending fields with '+' (ascending, default) or '-' (descending).
     *
     * @returns Coverage OK
     * @returns ApiError Error
     * @throws ApiError
     */
    public getWorkspaceCoverages(
        workspaceId: string,
        name?: string,
        ctype?: 'Signal Level' | 'RSRP' | 'CSI-RSRP' | 'Best Broadcast Beam' | 'Best Service Beam' | 'PDSCH C/(I+N)' | 'SSS C/(I+N)' | 'Peak RLC Channel Throughput (DL)' | 'Peak RLC Channel Throughput (UL)',
        createdFrom?: string,
        createdTo?: string,
        modifiedFrom?: string,
        modifiedTo?: string,
        skip?: number,
        limit: number = 1000,
        orderBy?: string,
    ): CancelablePromise<Array<Coverage> | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/workspaces/{workspace_id}/coverages',
            path: {
                'workspace_id': workspaceId,
            },
            query: {
                'name': name,
                'ctype': ctype,
                'created_from': createdFrom,
                'created_to': createdTo,
                'modified_from': modifiedFrom,
                'modified_to': modifiedTo,
                'skip': skip,
                'limit': limit,
                'order_by': orderBy,
            },
        });
    }
    /**
     * Create workspace coverage
     * @param workspaceId Workspace identifier.
     * @param requestBody
     * @returns ApiError Error
     * @returns IdResponse Created
     * @throws ApiError
     */
    public createWorkspaceCoverage(
        workspaceId: string,
        requestBody?: (CoverageDetails & Record<string, any>),
    ): CancelablePromise<ApiError | IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/workspaces/{workspace_id}/coverages',
            path: {
                'workspace_id': workspaceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete workspace's coverage
     * @param workspaceId Workspace identifier.
     * @param coverageId Coverage Id
     * @returns ApiError Error
     * @throws ApiError
     */
    public deleteWorkspaceCoverage(
        workspaceId: string,
        coverageId: string,
    ): CancelablePromise<ApiError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/workspaces/{workspace_id}/coverages/{coverage_id}',
            path: {
                'workspace_id': workspaceId,
                'coverage_id': coverageId,
            },
        });
    }
    /**
     * Get workspace's coverage
     * @param workspaceId Workspace identifier.
     * @param coverageId Coverage Id
     * @returns CoverageDetails OK
     * @returns ApiError Error
     * @throws ApiError
     */
    public getWorkspaceCoverage(
        workspaceId: string,
        coverageId: string,
    ): CancelablePromise<CoverageDetails | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/workspaces/{workspace_id}/coverages/{coverage_id}',
            path: {
                'workspace_id': workspaceId,
                'coverage_id': coverageId,
            },
        });
    }
    /**
     * Edit workspace coverage
     * @param workspaceId Workspace identifier.
     * @param coverageId Coverage Id
     * @param requestBody
     * @returns CoverageDetails Ok
     * @returns ApiError Error
     * @throws ApiError
     */
    public editWorkspaceCoverage(
        workspaceId: string,
        coverageId: string,
        requestBody?: CoverageDetails,
    ): CancelablePromise<CoverageDetails | ApiError> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/workspaces/{workspace_id}/coverages/{coverage_id}',
            path: {
                'workspace_id': workspaceId,
                'coverage_id': coverageId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete all coverage results
     * @param workspaceId Workspace identifier.
     * @param coverageId Coverage Id
     * @returns ApiError Error
     * @throws ApiError
     */
    public deleteWorkspaceCoverageResults(
        workspaceId: string,
        coverageId: string,
    ): CancelablePromise<ApiError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/workspaces/{workspace_id}/coverages/{coverage_id}/results',
            path: {
                'workspace_id': workspaceId,
                'coverage_id': coverageId,
            },
        });
    }
    /**
     * Get coverage results
     * @param workspaceId Workspace identifier.
     * @param coverageId Coverage Id
     * @param name Resource name to look for
     * @param createdFrom Filter creation date from (lower bound).
     * @param createdTo Filter creation date to (upper bound).
     * @param jobId Filter ressource on job id.
     *
     * @param runId Filter ressource on run id.
     *
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @param orderBy Order by ressource fields. Multiple fields can be used separated by a comma,
     * and order can be controlled by prepending fields with '+' (ascending, default) or '-' (descending).
     *
     * @returns CoverageResult OK
     * @returns ApiError Error
     * @throws ApiError
     */
    public getWorkspaceCoverageResults(
        workspaceId: string,
        coverageId: string,
        name?: string,
        createdFrom?: string,
        createdTo?: string,
        jobId?: string,
        runId?: string,
        skip?: number,
        limit: number = 1000,
        orderBy?: string,
    ): CancelablePromise<Array<CoverageResult> | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/workspaces/{workspace_id}/coverages/{coverage_id}/results',
            path: {
                'workspace_id': workspaceId,
                'coverage_id': coverageId,
            },
            query: {
                'name': name,
                'created_from': createdFrom,
                'created_to': createdTo,
                'job_id': jobId,
                'run_id': runId,
                'skip': skip,
                'limit': limit,
                'order_by': orderBy,
            },
        });
    }
    /**
     * Create a coverage result. Erase oldest result if coverage max_results is reached.
     * @param workspaceId Workspace identifier.
     * @param coverageId Coverage Id
     * @param requestBody
     * @returns ApiError Error
     * @returns IdResponse Created
     * @throws ApiError
     */
    public createWorkspaceCoverageResult(
        workspaceId: string,
        coverageId: string,
        requestBody?: (CoverageResult & Record<string, any>),
    ): CancelablePromise<ApiError | IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/workspaces/{workspace_id}/coverages/{coverage_id}/results',
            path: {
                'workspace_id': workspaceId,
                'coverage_id': coverageId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Reset coverage max results
     * @param workspaceId Workspace identifier.
     * @param coverageId Coverage Id
     * @returns ApiError Error
     * @throws ApiError
     */
    public resetWorkspaceCoverageMaxResults(
        workspaceId: string,
        coverageId: string,
    ): CancelablePromise<ApiError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/workspaces/{workspace_id}/coverages/{coverage_id}/results/resize',
            path: {
                'workspace_id': workspaceId,
                'coverage_id': coverageId,
            },
        });
    }
    /**
     * Change coverage max results
     * @param workspaceId Workspace identifier.
     * @param coverageId Coverage Id
     * @param requestBody
     * @returns ApiError Error
     * @throws ApiError
     */
    public resizeWorkspaceCoverageResults(
        workspaceId: string,
        coverageId: string,
        requestBody?: {
            max_results?: number;
        },
    ): CancelablePromise<ApiError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/workspaces/{workspace_id}/coverages/{coverage_id}/results/resize',
            path: {
                'workspace_id': workspaceId,
                'coverage_id': coverageId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete coverage result
     * @param workspaceId Workspace identifier.
     * @param coverageId Coverage Id
     * @param resultId Result Id
     * @returns ApiError Error
     * @throws ApiError
     */
    public deleteWorkspaceCoverageResult(
        workspaceId: string,
        coverageId: string,
        resultId: string,
    ): CancelablePromise<ApiError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/workspaces/{workspace_id}/coverages/{coverage_id}/results/{result_id}',
            path: {
                'workspace_id': workspaceId,
                'coverage_id': coverageId,
                'result_id': resultId,
            },
        });
    }
    /**
     * Get coverage result
     * @param workspaceId Workspace identifier.
     * @param coverageId Coverage Id
     * @param resultId Result Id
     * @returns CoverageResult OK
     * @returns ApiError Error
     * @throws ApiError
     */
    public getWorkspaceCoverageResult(
        workspaceId: string,
        coverageId: string,
        resultId: string,
    ): CancelablePromise<CoverageResult | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/workspaces/{workspace_id}/coverages/{coverage_id}/results/{result_id}',
            path: {
                'workspace_id': workspaceId,
                'coverage_id': coverageId,
                'result_id': resultId,
            },
        });
    }
    /**
     * Append an artifact to a coverage result
     * @param workspaceId Workspace identifier.
     * @param coverageId Coverage Id
     * @param resultId Result Id
     * @param requestBody
     * @returns ApiError Error
     * @returns IdResponse Created
     * @throws ApiError
     */
    public appendWorkspaceCoverageResultArtifact(
        workspaceId: string,
        coverageId: string,
        resultId: string,
        requestBody?: Artifact,
    ): CancelablePromise<ApiError | IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/workspaces/{workspace_id}/coverages/{coverage_id}/results/{result_id}/artifacts',
            path: {
                'workspace_id': workspaceId,
                'coverage_id': coverageId,
                'result_id': resultId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove coverage result retain
     * @param workspaceId Workspace identifier.
     * @param coverageId Coverage Id
     * @param resultId Result Id
     * @returns ApiError Error
     * @throws ApiError
     */
    public removeRetainFromWorkspaceCoverageResult(
        workspaceId: string,
        coverageId: string,
        resultId: string,
    ): CancelablePromise<ApiError> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/workspaces/{workspace_id}/coverages/{coverage_id}/results/{result_id}/retain',
            path: {
                'workspace_id': workspaceId,
                'coverage_id': coverageId,
                'result_id': resultId,
            },
        });
    }
    /**
     * Retain a coverage result
     * @param workspaceId Workspace identifier.
     * @param coverageId Coverage Id
     * @param resultId Result Id
     * @param requestBody
     * @returns ApiError Error
     * @throws ApiError
     */
    public setRetainOnWorkspaceCoverageResult(
        workspaceId: string,
        coverageId: string,
        resultId: string,
        requestBody?: {
            comment?: string;
        },
    ): CancelablePromise<ApiError> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/workspaces/{workspace_id}/coverages/{coverage_id}/results/{result_id}/retain',
            path: {
                'workspace_id': workspaceId,
                'coverage_id': coverageId,
                'result_id': resultId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
