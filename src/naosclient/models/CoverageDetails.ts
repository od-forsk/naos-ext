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
         * Server selection method
         */
        server_mode?: CoverageDetails.server_mode;
        /**
         * [NOT IMPLEMENTED] Server layer filtering
         */
        server_layers?: Array<Reference> | null;
        /**
         * [NOT IMPLEMENTED] Server channel filtering
         */
        server_channels?: Array<Reference> | null;
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
        /**
         * Standalone or Both. For now, only standalone is available.
         *
         */
        cell_mode?: CoverageDetails.cell_mode;
        rat_interferences?: RatInterferences;
        /**
         * Traffic characteristics
         */
        traffic?: {
            terminal?: Reference;
            service?: Reference;
            mobility?: Reference;
        };
    };
    filters?: {
        /**
         * GeoJSON geometry object (https://tools.ietf.org/html/rfc7946).
         *
         */
        geometry?: string;
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
    } | null;
    /**
     * Keep older results of the coverage
     */
    max_results?: number;
    last_result?: CoverageResult;
});
export namespace CoverageDetails {
    /**
     * Server selection method
     */
    export enum server_mode {
        ALL = 'all',
        BEST = 'best',
    }
    /**
     * Standalone or Both. For now, only standalone is available.
     *
     */
    export enum cell_mode {
        SA = 'SA',
        BOTH = 'Both',
    }
}

