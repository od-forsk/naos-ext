/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Object describing external data location.
 */
export type StorageInfo = {
    /**
     * Required if using MongoDB pathloss storage.
     * Represents the best possible resolution (in meters) for pathlosses, and by extension the best reachable resolution for coverages.
     * Individual pathlosses can use higher resolution.
     *
     */
    best_resolution?: number;
    pathloss?: {
        private?: string;
        /**
         * A folder file URI for legacy pathloss storage (.los files) or a MongoDB URI for Naos coverages calculations.
         * See Naos documentation for more info.
         *
         */
        shared?: string;
    };
    root?: string;
};

