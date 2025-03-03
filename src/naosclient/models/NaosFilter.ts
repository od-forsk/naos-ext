/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type NaosFilter = {
    /**
     * GeoJSON geometry object (https://tools.ietf.org/html/rfc7946).
     *
     */
    geometry?: string;
    /**
     * Data filter using the DAS filtering syntax, ie `<column>.<operator>.<value>`.
     * For now, when applied on Naos projects, this only targets 'sites' attributes.
     *
     */
    data?: string;
};

