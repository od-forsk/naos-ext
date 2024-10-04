/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoundingBox } from './BoundingBox';
import type { GeoFileAssociation } from './GeoFileAssociation';
import type { NaosFilter } from './NaosFilter';
import type { SourceInfo } from './SourceInfo';
import type { StorageInfo } from './StorageInfo';
export type ProjectBase = {
    readonly id?: string;
    name?: string;
    source?: SourceInfo;
    storage?: StorageInfo;
    configuration_files?: {
        /**
         * Main configuration files, meant to replace existing configurations. Applied in array order.
         */
        replace?: Array<string>;
        /**
         * Secondary configuration files, meant to append to existing configurations (applicable to geographic files).
         */
        append?: Array<string>;
    };
    /**
     * List of geographic files associated to this Project/Workspace.
     */
    readonly geographic_data?: Array<GeoFileAssociation>;
    info?: {
        technologies?: Array<{
            name?: '5G_NR' | 'LTE' | 'NB_IOT' | 'UMTS' | '1XRTT' | 'GSM';
            cells?: number;
        }>;
        coordinate_system?: {
            code?: number;
        };
        studies?: Array<{
            id?: string;
            name?: string;
        }>;
        bounding_box?: BoundingBox;
        sites?: number;
        shared_pathloss?: string;
    };
    created?: string;
    modified?: string;
    readonly history?: {
        entries?: Array<{
            date?: string;
            user_id?: string;
            user?: string;
            message?: string;
        }>;
    };
    readonly status?: Record<string, any>;
    readonly technologies?: Array<string>;
    filters?: NaosFilter;
};

