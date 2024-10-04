/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoundingBox } from './BoundingBox';
import type { ProjectBase } from './ProjectBase';
export type Workspace = (ProjectBase & {
    user?: string;
    user_id?: string;
    project_id?: string;
    readonly project_name?: string;
    geo_bounding_box?: BoundingBox;
    net_bounding_box?: BoundingBox;
    bounding_box?: BoundingBox;
});

