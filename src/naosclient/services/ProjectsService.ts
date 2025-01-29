/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiError } from '../models/ApiError';
import type { GeoFileAssociationInput } from '../models/GeoFileAssociationInput';
import type { IdResponse } from '../models/IdResponse';
import type { Project } from '../models/Project';
import type { ProjectPermission } from '../models/ProjectPermission';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List available projects
     * @param name Project name to look for
     * @param createdFrom Filter on starting creation date
     * @param createdTo Filter on ending creation date
     * @param modifiedFrom Filter on starting modification date
     * @param modifiedTo Filter on ending modification date
     * @param createdBy Filter on project creator id
     * @param modifiedBy Filter on project last modifier id
     * @param technologies Determines the radio technologies for the query.
     * @param orderBy Order by ressource fields. Multiple fields can be used separated by a comma,
     * and order can be controlled by prepending fields with '+' (ascending, default) or '-' (descending).
     *
     * @param naosFilepathMode Map URI values in the response to the desired context
     * @param prefer Prefer header according to RFC 7240.
     * Supported preferences:
     * - details: minimal/normal/full <br>Level of details on the targeted resource response. Defaults to 'normal' on listing APIs, and 'full' on single resources.
     *
     * @returns Project Projects
     * @returns ApiError Error
     * @throws ApiError
     */
    public getProjects(
        name?: string,
        createdFrom?: string,
        createdTo?: string,
        modifiedFrom?: string,
        modifiedTo?: string,
        createdBy?: string,
        modifiedBy?: string,
        technologies?: Array<'5G_NR' | 'LTE' | 'NB_IOT' | 'UMTS' | '1XRTT' | 'GSM'>,
        orderBy?: string,
        naosFilepathMode?: 'atoll' | 'naos-service-win' | 'naos-service-linux',
        prefer?: string,
    ): CancelablePromise<Array<Project> | ApiError> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects',
            headers: {
                'Naos-Filepath-Mode': naosFilepathMode,
                'Prefer': prefer,
            },
            query: {
                'name': name,
                'created_from': createdFrom,
                'created_to': createdTo,
                'modified_from': modifiedFrom,
                'modified_to': modifiedTo,
                'created_by': createdBy,
                'modified_by': modifiedBy,
                'technologies': technologies,
                'order_by': orderBy,
            },
        });
    }
    /**
     * ADMIN. Create a new project
     * Adds a new project to a Naos instance. This allows you to create a project with autoscan in an asynchronous mode.
     * @param autoscan Automatic scanning of project's info. This opens the project in a new Naos instance to retrieve project's info.
     * @param requestBody
     * @returns IdResponse Created
     * @throws ApiError
     */
    public createProject(
        autoscan: boolean = true,
        requestBody?: Project,
    ): CancelablePromise<IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects',
            query: {
                'autoscan': autoscan,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid project details`,
            },
        });
    }
    /**
     * ADMIN. Add geo files to an existing project
     * @param projectId Project identifier.
     * @param requestBody
     * @returns Project Project details
     * @throws ApiError
     */
    public addGeoFilesToProject(
        projectId: string,
        requestBody?: Array<GeoFileAssociationInput>,
    ): CancelablePromise<Project> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/geofiles',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                404: `Not found.`,
            },
        });
    }
    /**
     * ADMIN. Update existing geo files indexes on project.
     * Update existing geo files indexes on project.
     * @param projectId Project identifier.
     * @param requestBody
     * @returns Project Project details
     * @throws ApiError
     */
    public updateProjectGeoFiles(
        projectId: string,
        requestBody?: Array<GeoFileAssociationInput>,
    ): CancelablePromise<Project> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/projects/{project_id}/geofiles',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                404: `Not found`,
            },
        });
    }
    /**
     * ADMIN. Removes all geo files from a project
     * @param projectId Project identifier.
     * @returns Project Project details
     * @throws ApiError
     */
    public deleteGeoFilesFromProject(
        projectId: string,
    ): CancelablePromise<Project> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/geofiles',
            path: {
                'project_id': projectId,
            },
            errors: {
                400: `Bad request`,
                404: `Not found.`,
            },
        });
    }
    /**
     * ADMIN. Add geo file to project
     * Adds a single geo file to an existing project.
     * @param projectId Project identifier.
     * @param geoFileId Geo file identifier.
     * @param index Geo file Index
     * @returns Project Project details
     * @throws ApiError
     */
    public addGeoFileToProject(
        projectId: string,
        geoFileId: string,
        index?: number,
    ): CancelablePromise<Project> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/projects/{project_id}/geofiles/{geo_file_id}',
            path: {
                'project_id': projectId,
                'geo_file_id': geoFileId,
            },
            query: {
                'index': index,
            },
            errors: {
                400: `Bad request`,
                404: `Not found.`,
            },
        });
    }
    /**
     * ADMIN. Deletes a geo file from a project
     * Deletes a single geo file from an existing project.
     * @param projectId Project identifier.
     * @param geoFileId Geo file identifier.
     * @returns Project Project details.
     * @throws ApiError
     */
    public deleteGeoFileFromProject(
        projectId: string,
        geoFileId: string,
    ): CancelablePromise<Project> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/geofiles/{geo_file_id}',
            path: {
                'project_id': projectId,
                'geo_file_id': geoFileId,
            },
            errors: {
                400: `Bad request.`,
                404: `Not found.`,
            },
        });
    }
    /**
     * ADMIN. List project permissions
     * @param projectId Project identifier.
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @returns ProjectPermission Ok
     * @throws ApiError
     */
    public getPermissions(
        projectId: string,
        skip?: number,
        limit: number = 1000,
    ): CancelablePromise<Array<ProjectPermission>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/permissions',
            path: {
                'project_id': projectId,
            },
            query: {
                'skip': skip,
                'limit': limit,
            },
            errors: {
                404: `Team not found`,
            },
        });
    }
    /**
     * ADMIN. Grant read/write access for teams and users
     * @param projectId Project identifier.
     * @param requestBody List of permissions for teams and users
     * @returns IdResponse List of created permissions. Skip permissions that may already exist
     * @throws ApiError
     */
    public addPermissions(
        projectId: string,
        requestBody: Array<ProjectPermission>,
    ): CancelablePromise<Array<IdResponse>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/permissions',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Project/Team not found`,
            },
        });
    }
    /**
     * ADMIN. Get permission details
     * @param projectId Project identifier.
     * @param permissionId Permission Id
     * @returns ProjectPermission Ok
     * @throws ApiError
     */
    public getPermission(
        projectId: string,
        permissionId: string,
    ): CancelablePromise<ProjectPermission> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/permissions/{permission_id}',
            path: {
                'project_id': projectId,
                'permission_id': permissionId,
            },
            errors: {
                404: `Permission not found`,
            },
        });
    }
    /**
     * ADMIN. Remove a permission for a project
     * @param projectId Project identifier.
     * @param permissionId Permission Id
     * @returns any Ok
     * @throws ApiError
     */
    public deletePermission(
        projectId: string,
        permissionId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/permissions/{permission_id}',
            path: {
                'project_id': projectId,
                'permission_id': permissionId,
            },
            errors: {
                404: `Permission not found`,
            },
        });
    }
    /**
     * ADMIN. Edit a project permission
     * @param projectId Project identifier.
     * @param permissionId Permission Id
     * @param requestBody
     * @returns ProjectPermission Ok
     * @throws ApiError
     */
    public editPermission(
        projectId: string,
        permissionId: string,
        requestBody: ProjectPermission,
    ): CancelablePromise<ProjectPermission> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/projects/{project_id}/permissions/{permission_id}',
            path: {
                'project_id': projectId,
                'permission_id': permissionId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Permission not found`,
            },
        });
    }
    /**
     * Proxy GET to Data Access Service
     * Forwards a GET request to the Naos Data Access Service.
     * The service along with its query parameters are specified in the 'route' parameter.
     *
     * @param projectId Project identifier.
     * @param route
     * @returns any OK
     * @throws ApiError
     */
    public dasProjectProxyGet(
        projectId: string,
        route: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}/data/{route}',
            path: {
                'project_id': projectId,
                'route': route,
            },
            errors: {
                404: `Not found`,
                502: `Naos Data Access Service is unhealthy`,
                503: `Connection timeout trying to communicate with the Naos Data Access Service`,
                504: `Read timeout trying to communicate with the Naos Data Access Service`,
            },
        });
    }
    /**
     * Proxy POST to Data Access Service
     * Forwards a POST request to the Naos Data Access Service.
     * The service along with its query parameters are specified in the 'route' parameter.
     *
     * @param projectId Project identifier.
     * @param route
     * @param requestBody Any value.
     * @returns any OK
     * @throws ApiError
     */
    public dasProjectProxyPost(
        projectId: string,
        route: string,
        requestBody?: (string | Record<string, any>) | null,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/projects/{project_id}/data/{route}',
            path: {
                'project_id': projectId,
                'route': route,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
                502: `Naos Data Access Service is unhealthy`,
                503: `Connection timeout trying to communicate with the Naos Data Access Service`,
                504: `Read timeout trying to communicate with the Naos Data Access Service`,
            },
        });
    }
    /**
     * Proxy PUT to Data Access Service
     * Forwards a PUT request to the Naos Data Access Service.
     * The service along with its query parameters are specified in the 'route' parameter.
     *
     * @param projectId Project identifier.
     * @param route
     * @param requestBody Any value.
     * @returns any OK
     * @throws ApiError
     */
    public dasProjectProxyPut(
        projectId: string,
        route: string,
        requestBody?: (string | Record<string, any>) | null,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/projects/{project_id}/data/{route}',
            path: {
                'project_id': projectId,
                'route': route,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
                502: `Naos Data Access Service is unhealthy`,
                503: `Connection timeout trying to communicate with the Naos Data Access Service`,
                504: `Read timeout trying to communicate with the Naos Data Access Service`,
            },
        });
    }
    /**
     * Proxy PATCH to Data Access Service
     * Forwards a PATCH request to the Naos Data Access Service.
     * The service along with its query parameters are specified in the 'route' parameter.
     *
     * @param projectId Project identifier.
     * @param route
     * @param requestBody Any value.
     * @returns any OK
     * @throws ApiError
     */
    public dasProjectProxyPatch(
        projectId: string,
        route: string,
        requestBody?: (string | Record<string, any>) | null,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/projects/{project_id}/data/{route}',
            path: {
                'project_id': projectId,
                'route': route,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
                502: `Naos Data Access Service is unhealthy`,
                503: `Connection timeout trying to communicate with the Naos Data Access Service`,
                504: `Read timeout trying to communicate with the Naos Data Access Service`,
            },
        });
    }
    /**
     * Proxy DELETE to Data Access Service
     * Forwards a DELETE request to the Naos Data Access Service.
     * The service along with its query parameters are specified in the 'route' parameter.
     *
     * @param projectId Project identifier.
     * @param route
     * @returns any OK
     * @throws ApiError
     */
    public dasProjectProxyDelete(
        projectId: string,
        route: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}/data/{route}',
            path: {
                'project_id': projectId,
                'route': route,
            },
            errors: {
                404: `Not found`,
                502: `Naos Data Access Service is unhealthy`,
                503: `Connection timeout trying to communicate with the Naos Data Access Service`,
                504: `Read timeout trying to communicate with the Naos Data Access Service`,
            },
        });
    }
    /**
     * Get details concerning a specific project
     * @param projectId Project identifier.
     * @param naosFilepathMode Map URI values in the response to the desired context
     * @param prefer Prefer header according to RFC 7240.
     * Supported preferences:
     * - details: minimal/normal/full <br>Level of details on the targeted resource response. Defaults to 'normal' on listing APIs, and 'full' on single resources.
     *
     * @returns Project Project details
     * @throws ApiError
     */
    public getProject(
        projectId: string,
        naosFilepathMode?: 'atoll' | 'naos-service-win' | 'naos-service-linux',
        prefer?: string,
    ): CancelablePromise<Project> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/projects/{project_id}',
            path: {
                'project_id': projectId,
            },
            headers: {
                'Naos-Filepath-Mode': naosFilepathMode,
                'Prefer': prefer,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Delete a project
     * @param projectId Project identifier.
     * @returns any OK
     * @throws ApiError
     */
    public deleteProject(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/projects/{project_id}',
            path: {
                'project_id': projectId,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * ADMIN. Edit a project
     * @param projectId Project identifier.
     * @param historyMessage An optional message indicating the changes that were made to the document. If omitted, a default meaningful message will be generated.
     * @param force Forces an open or edit of a project. This opens or edits the project even if:
     * - the parsing of the geo files did not finish or finished with errors.
     * - the automatic scanning did not finished or finished with errors.
     *
     * @param requestBody
     * @returns Project OK
     * @throws ApiError
     */
    public editProject(
        projectId: string,
        historyMessage?: string,
        force: boolean = false,
        requestBody?: Project,
    ): CancelablePromise<Project> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/projects/{project_id}',
            path: {
                'project_id': projectId,
            },
            query: {
                'history_message': historyMessage,
                'force': force,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
            },
        });
    }
}
