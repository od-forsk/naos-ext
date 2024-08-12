/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Coverage } from './Coverage';
import type { CoverageResult } from './CoverageResult';
import type { RatInterferences } from './RatInterferences';
import type { Reference } from './Reference';
export type CoverageDetails = (Coverage & {
    /**
     * Coverage calculation conditions
     */
    conditions?: {
        /**
         * Standalone or Both. For now, only standalone is available.
         *
         */
        cell_mode?: CoverageDetails.cell_mode;
        /**
         * [NOT IMPLEMENTED] Chosen coverage type will validate possible cell types.
         *
         */
        cell_types?: {
            /**
             * Is primary cell considered
             */
            primary?: boolean;
            /**
             * Secondary cell index
             */
            secondary_index?: number;
        };
        rat_interferences?: RatInterferences;
        /**
         * [NOT IMPLEMENTED] Server channel filtering
         */
        server_channels?: Array<Reference> | null;
        /**
         * [NOT IMPLEMENTED] Server layer filtering
         */
        server_layers?: Array<Reference> | null;
        /**
         * Server selection method
         */
        server_mode?: CoverageDetails.server_mode;
        /**
         * Traffic characteristics
         */
        traffic?: {
            mobility?: Reference;
            service?: Reference;
            terminal?: Reference;
        };
    };
    filters?: {
        /**
         * Data filter using the DAS filtering syntax, ie `<column>.<operator>.<value>`.
         * For now, it is only possible to filter on installed antennas base & custom fields or sites & ttansmitters lists:
         * - fband.eq.my_value
         * - custom_field.eq.my_value
         * - sites_lists.eq.site_list1
         * - txs_lists.eq.tx_list1
         *
         */
        data?: string;
        /**
         * GeoJSON geometry object (https://tools.ietf.org/html/rfc7946).
         *
         */
        geometry?: string;
    } | null;
    last_result?: CoverageResult;
    /**
     * Keep older results of the coverage
     */
    max_results?: number;
});
export namespace CoverageDetails {
    /**
     * Standalone or Both. For now, only standalone is available.
     *
     */
    export enum cell_mode {
        SA = 'SA',
        BOTH = 'Both',
    }
    /**
     * Server selection method
     */
    export enum server_mode {
        ALL = 'all',
        BEST = 'best',
    }
}

