/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Error object
 */
export type ApiError = {
    /**
     * Detail concerning encountered error
     */
    readonly detail: string;
    /**
     * HTTP error code
     */
    readonly status: number;
    readonly title?: string;
    readonly type?: string;
};

