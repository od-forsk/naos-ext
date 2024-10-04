/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoundingBox } from './BoundingBox';
import type { GeoFileFormatEnum } from './GeoFileFormatEnum';
import type { GeoGraphicsTypeEnum } from './GeoGraphicsTypeEnum';
import type { GeoTypeEnum } from './GeoTypeEnum';
/**
 * Object describing a Naos/Atoll geo file.
 */
export type GeoFile = {
    /**
     * Geo file identifier.
     */
    readonly id?: string;
    /**
     * Geo file name.
     */
    name?: string;
    /**
     * Geo file URI.
     */
    uri?: string;
    geo_type?: GeoTypeEnum;
    file_format?: GeoFileFormatEnum;
    graphics_type?: GeoGraphicsTypeEnum;
    tags?: Array<string>;
    crs?: number;
    bounding_box?: BoundingBox;
    /**
     * Rasters only: pixel size as a pair.
     */
    resolution?: Array<number>;
    raster_properties?: {
        placeholder?: string;
    };
    vector_properties?: {
        /**
         * Propagation models in which the geo file can be used
         */
        scope?: Array<string>;
        height_field?: string;
        fixed_height?: number;
        propagation_class?: string;
    };
};

