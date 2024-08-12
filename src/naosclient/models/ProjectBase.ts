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
    configuration_files?: {
        /**
         * Secondary configuration files, meant to append to existing configurations (applicable to geographic files).
         */
        append?: Array<string>;
        /**
         * Main configuration files, meant to replace existing configurations. Applied in array order.
         */
        replace?: Array<string>;
    };
    created?: string;
    filters?: NaosFilter;
    /**
     * List of geographic files associated to this Project/Workspace.
     */
    readonly geographic_data?: Array<GeoFileAssociation>;
    readonly history?: {
        entries?: Array<{
            date?: string;
            message?: string;
            user?: string;
            user_id?: string;
        }>;
    };
    readonly id?: string;
    info?: {
        bounding_box?: BoundingBox;
        coordinate_system?: {
            code?: number;
        };
        shared_pathloss?: string;
        sites?: number;
        studies?: Array<{
            id?: string;
            name?: string;
        }>;
        technologies?: Array<{
            cells?: number;
            name?: '5G_NR' | 'LTE' | 'NB_IOT' | 'UMTS' | '1XRTT' | 'GSM';
        }>;
    };
    modified?: string;
    name?: string;
    source?: SourceInfo;
    readonly status?: Record<string, any>;
    storage?: StorageInfo;
    readonly technologies?: Array<string>;
};

