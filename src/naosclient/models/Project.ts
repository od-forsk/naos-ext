/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoundingBox } from './BoundingBox';
import type { ProjectBase } from './ProjectBase';
export type Project = (ProjectBase & {
    bounding_box?: BoundingBox;
    readonly created_by?: {
        id?: string;
        name?: string;
    };
    geo_bounding_box?: BoundingBox;
    readonly modified_by?: {
        id?: string;
        name?: string;
    };
    net_bounding_box?: BoundingBox;
});

