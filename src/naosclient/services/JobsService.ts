/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiError } from '../models/ApiError';
import type { JobDescribe } from '../models/JobDescribe';
import type { JobEdit } from '../models/JobEdit';
import type { JobIdResponse } from '../models/JobIdResponse';
import type { JobRequestInput } from '../models/JobRequestInput';
import type { JobSummary } from '../models/JobSummary';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class JobsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get launched jobs list
     * Returns the list of all launched jobs for a project.
     * @param projectId Project identifier.
     * @param names Filter jobs by name as comma separated string.
     * @param regexName Filter jobs by name as specified regex.
     * @param orderBy Order jobs by field.
     * (fields should be comma-separated and can be prefixed by '+'(ascending, default) or '-'(descending))
     *
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @returns JobSummary Successful operation
     * @throws ApiError
     */
    public getProjectJobs(
        projectId: string,
        names?: string,
        regexName?: string,
        orderBy?: string,
        skip?: number,
        limit: number = 1000,
    ): CancelablePromise<Array<JobSummary>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/jobs',
            path: {
                'project_id': projectId,
            },
            query: {
                'names': names,
                'regex_name': regexName,
                'order_by': orderBy,
                'skip': skip,
                'limit': limit,
            },
        });
    }
    /**
     * Request for job execution
     * Makes a job request that should be queued for future execution.
     * @param projectId Project identifier.
     * @param requestBody Job input parameters.
     * @param runNow Whether to run the job as soon as possible.
     * @returns ApiError Error
     * @returns JobIdResponse Created
     * @throws ApiError
     */
    public createProjectJob(
        projectId: string,
        requestBody: JobRequestInput,
        runNow: boolean = false,
    ): CancelablePromise<ApiError | JobIdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/jobs',
            path: {
                'project_id': projectId,
            },
            query: {
                'run_now': runNow,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete job
     * Removes any running job associated with this ID and delete execution details.
     * @param projectId Project identifier.
     * @param jobId job ID
     * @returns ApiError Error
     * @returns any Job marked for deletion
     * @throws ApiError
     */
    public deleteProjectJob(
        projectId: string,
        jobId: string,
    ): CancelablePromise<ApiError | any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/jobs/{job_id}',
            path: {
                'project_id': projectId,
                'job_id': jobId,
            },
        });
    }
    /**
     * Get project job by ID
     * Returns a single job in the specified project.
     * @param projectId Project identifier.
     * @param jobId job ID
     * @returns JobDescribe Successful operation
     * @returns ApiError Error
     * @throws ApiError
     */
    public getProjectJob(
        projectId: string,
        jobId: string,
    ): CancelablePromise<JobDescribe | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/jobs/{job_id}',
            path: {
                'project_id': projectId,
                'job_id': jobId,
            },
        });
    }
    /**
     * Update project job
     * Changes information about an existing job.
     * @param projectId Project identifier.
     * @param jobId job ID
     * @param requestBody Process description
     * @param runNow Whether to run the job as soon as possible.
     * @returns JobDescribe Job has been updated
     * @returns ApiError Error
     * @throws ApiError
     */
    public updateProjectJob(
        projectId: string,
        jobId: string,
        requestBody: JobEdit,
        runNow: boolean = false,
    ): CancelablePromise<JobDescribe | ApiError> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/projects/{project_id}/jobs/{job_id}',
            path: {
                'project_id': projectId,
                'job_id': jobId,
            },
            query: {
                'run_now': runNow,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get worskpace launched jobs list
     * Returns the list of all launched jobs.
     * @param workspaceId Workspace identifier.
     * @param names Filter jobs by name as comma separated string.
     * @param regexName Filter jobs by name as specified regex.
     * @param orderBy Order jobs by field.
     * (fields should be comma-separated and can be prefixed by '+'(ascending, default) or '-'(descending))
     *
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @returns JobSummary Successful operation
     * @throws ApiError
     */
    public getWorkspaceJobs(
        workspaceId: string,
        names?: string,
        regexName?: string,
        orderBy?: string,
        skip?: number,
        limit: number = 1000,
    ): CancelablePromise<Array<JobSummary>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/workspaces/{workspace_id}/jobs',
            path: {
                'workspace_id': workspaceId,
            },
            query: {
                'names': names,
                'regex_name': regexName,
                'order_by': orderBy,
                'skip': skip,
                'limit': limit,
            },
        });
    }
    /**
     * Request for job execution
     * Makes a job request that should be queued for future execution.
     * @param workspaceId Workspace identifier.
     * @param requestBody Job input parameters.
     * @param runNow Whether to run the job as soon as possible.
     * @returns ApiError Error
     * @returns JobIdResponse Created
     * @throws ApiError
     */
    public createWorkspaceJob(
        workspaceId: string,
        requestBody: JobRequestInput,
        runNow: boolean = false,
    ): CancelablePromise<ApiError | JobIdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/workspaces/{workspace_id}/jobs',
            path: {
                'workspace_id': workspaceId,
            },
            query: {
                'run_now': runNow,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete workspace job
     * Removes any running job associated with this ID and delete execution details.
     * @param workspaceId Workspace identifier.
     * @param jobId job ID
     * @returns ApiError Error
     * @returns any Job marked for deletion
     * @throws ApiError
     */
    public deleteWorkspaceJob(
        workspaceId: string,
        jobId: string,
    ): CancelablePromise<ApiError | any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/workspaces/{workspace_id}/jobs/{job_id}',
            path: {
                'workspace_id': workspaceId,
                'job_id': jobId,
            },
        });
    }
    /**
     * Get workspace job by ID
     * Returns a single job in the specified workspace.
     * @param workspaceId Workspace identifier.
     * @param jobId job ID
     * @returns JobDescribe Successful operation
     * @returns ApiError Error
     * @throws ApiError
     */
    public getWorkspaceJob(
        workspaceId: string,
        jobId: string,
    ): CancelablePromise<JobDescribe | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/workspaces/{workspace_id}/jobs/{job_id}',
            path: {
                'workspace_id': workspaceId,
                'job_id': jobId,
            },
        });
    }
    /**
     * Update workspace job
     * Changes information about an existing job.
     * @param workspaceId Workspace identifier.
     * @param jobId job ID
     * @param requestBody Process description
     * @param runNow Whether to run the job as soon as possible.
     * @returns JobDescribe Job has been updated
     * @returns ApiError Error
     * @throws ApiError
     */
    public updateWorkspaceJob(
        workspaceId: string,
        jobId: string,
        requestBody: JobEdit,
        runNow: boolean = false,
    ): CancelablePromise<JobDescribe | ApiError> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/workspaces/{workspace_id}/jobs/{job_id}',
            path: {
                'workspace_id': workspaceId,
                'job_id': jobId,
            },
            query: {
                'run_now': runNow,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
