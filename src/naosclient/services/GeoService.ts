/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeoFile } from '../models/GeoFile';
import type { GeoFileForm } from '../models/GeoFileForm';
import type { GeoFileFormatEnum } from '../models/GeoFileFormatEnum';
import type { GeoGraphicsTypeEnum } from '../models/GeoGraphicsTypeEnum';
import type { GeoTypeEnum } from '../models/GeoTypeEnum';
import type { IdResponse } from '../models/IdResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GeoService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     *  ADMIN. Create geo file
     * Uses the geo_file request body to create a geo file in a volume that is mapped to the explorer.
     * Use the `zip_file` parameter in conjunction with the geo_file body to create and upload the geo file from a zip file.
     * When a zip file is uploaded, the URI parameter in the request body is not necessary and is ignored.
     *
     * @param autoscan Automatic scanning of `bounding_box` and `crs`.
     * This opens the geo file in an async task and extracts the info if present in the metadata.
     *
     * @param formData
     * @returns IdResponse Ok
     * @throws ApiError
     */
    public createGeoFile(
        autoscan: boolean = false,
        formData?: GeoFileForm,
    ): CancelablePromise<IdResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/geofiles',
            query: {
                'autoscan': autoscan,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Invalid geo file details`,
                403: `Current user is not admin`,
            },
        });
    }
    /**
     * ADMIN. Get geo file list
     * Lists all available geo files that match the query criteria.
     * @param name Filter by file name or regex. Logic AND.
     * @param geoType Filter by geo type (clutter classes, clutter heights, or DTM). Logic OR.
     * @param fileFormat Filter by file format. Logic OR.
     * @param graphicsType Filter by spatial data type (vector or raster). Logic OR.
     * @param tags Filter by tags. Logic AND.
     * @param crs CRS
     * @param propertiesFieldKey Filter. Select an attribute of the raster/vector properties. Logic AND.
     * @param propertiesFieldType Filter. Select the type of the attribute of the raster/vector properties. Logic AND.
     * @param propertiesFieldValue Filter. Select a value to apply to the field selected in propertiesFieldKey. Logic AND.
     * @param uri Filter by URI. The URI is translated internally to perform the search. If provided, all other filters are ignored.
     * @param skip Number of items to skip.
     * @param limit Maximum number of items to return.
     * @param orderBy Order by ressource fields. Multiple fields can be used separated by a comma,
     * and order can be controlled by prepending fields with '+' (ascending, default) or '-' (descending).
     *
     * @param naosFilepathMode Map URI values in the response to the desired context
     * @returns GeoFile Geo files
     * @throws ApiError
     */
    public getGeoFiles(
        name?: string,
        geoType?: Array<GeoTypeEnum>,
        fileFormat?: Array<GeoFileFormatEnum>,
        graphicsType?: Array<GeoGraphicsTypeEnum>,
        tags?: Array<string>,
        crs?: number,
        propertiesFieldKey?: string,
        propertiesFieldType: 'string' | 'regex' | 'number' = 'string',
        propertiesFieldValue?: Array<string>,
        uri?: string,
        skip?: number,
        limit: number = 1000,
        orderBy?: string,
        naosFilepathMode?: 'atoll' | 'naos-service-win' | 'naos-service-linux',
    ): CancelablePromise<Array<GeoFile>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/geofiles',
            headers: {
                'Naos-Filepath-Mode': naosFilepathMode,
            },
            query: {
                'name': name,
                'geo_type': geoType,
                'file_format': fileFormat,
                'graphics_type': graphicsType,
                'tags': tags,
                'crs': crs,
                'properties_field_key': propertiesFieldKey,
                'properties_field_type': propertiesFieldType,
                'properties_field_value': propertiesFieldValue,
                'uri': uri,
                'skip': skip,
                'limit': limit,
                'order_by': orderBy,
            },
            errors: {
                400: `Bad request`,
                403: `Current user is not admin`,
            },
        });
    }
    /**
     * ADMIN. Create geo files from XML
     * Parses an Atoll XML configuration file and extracts the geo files.
     * @param requestBody
     * @returns IdResponse Ok
     * @throws ApiError
     */
    public createGeoFilesFromXml(
        requestBody?: {
            /**
             * URI of the XML configuration file.
             */
            uri?: string;
        },
    ): CancelablePromise<Array<IdResponse>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/geofiles/atoll-xml',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request.`,
                403: `Current user is not admin`,
            },
        });
    }
    /**
     * ADMIN. Get geo file information
     * Returns the details of a specific geo file.
     * @param geofileId Geo file identifier.
     * @param naosFilepathMode Map URI values in the response to the desired context
     * @returns GeoFile Geo file
     * @throws ApiError
     */
    public getGeoFile(
        geofileId: string,
        naosFilepathMode?: 'atoll' | 'naos-service-win' | 'naos-service-linux',
    ): CancelablePromise<GeoFile> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/geofiles/{geofile_id}',
            path: {
                'geofile_id': geofileId,
            },
            headers: {
                'Naos-Filepath-Mode': naosFilepathMode,
            },
            errors: {
                403: `Current user is not admin`,
                404: `Not found`,
            },
        });
    }
    /**
     * ADMIN. Edit geo file
     * Modifies the `name`, `tags`, `bounding_box` and `crs` fields of a specific geo file. Other fields are ignored.
     * @param geofileId Geo file identifier.
     * @param requestBody
     * @returns GeoFile OK
     * @throws ApiError
     */
    public editGeoFile(
        geofileId: string,
        requestBody?: GeoFile,
    ): CancelablePromise<GeoFile> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/geofiles/{geofile_id}',
            path: {
                'geofile_id': geofileId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                403: `Current user is not admin`,
                404: `Not found`,
            },
        });
    }
    /**
     * ADMIN. Delete a geo file
     * Deletes a specific geo file in the file system.
     * @param geofileId Geo file identifier.
     * @param eraseFile Deletes the file from the location referenced by its URI.
     * @returns any OK
     * @throws ApiError
     */
    public deleteGeoFile(
        geofileId: string,
        eraseFile: boolean = false,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/geofiles/{geofile_id}',
            path: {
                'geofile_id': geofileId,
            },
            query: {
                'erase_file': eraseFile,
            },
            errors: {
                403: `Current user is not admin`,
                404: `Not found`,
            },
        });
    }
}
