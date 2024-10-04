/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoundingBox } from './BoundingBox';
import type { ProjectBase } from './ProjectBase';
export type Project = (ProjectBase & {
    readonly created_by?: {
        id?: string;
        name?: string;
    };
    readonly modified_by?: {
        id?: string;
        name?: string;
    };
    geo_bounding_box?: BoundingBox;
    net_bounding_box?: BoundingBox;
    bounding_box?: BoundingBox;
});

