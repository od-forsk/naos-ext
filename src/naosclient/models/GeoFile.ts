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
    bounding_box?: BoundingBox;
    crs?: number;
    file_format?: GeoFileFormatEnum;
    geo_type?: GeoTypeEnum;
    graphics_type?: GeoGraphicsTypeEnum;
    /**
     * Geo file identifier.
     */
    readonly id?: string;
    /**
     * Geo file name.
     */
    name?: string;
    raster_properties?: {
        placeholder?: string;
    };
    /**
     * Rasters only: pixel size as a pair.
     */
    resolution?: Array<number>;
    tags?: Array<string>;
    /**
     * Geo file URI.
     */
    uri?: string;
    vector_properties?: {
        fixed_height?: number;
        height_field?: string;
        propagation_class?: string;
        /**
         * Propagation models in which the geo file can be used
         */
        scope?: Array<string>;
    };
};

