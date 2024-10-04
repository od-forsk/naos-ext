/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Error object
 */
export type ApiError = {
    /**
     * HTTP error code
     */
    readonly status: number;
    readonly title?: string;
    /**
     * Detail concerning encountered error
     */
    readonly detail: string;
    readonly type?: string;
};

