/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoundingBox } from './BoundingBox';
import type { ProjectBase } from './ProjectBase';
export type Workspace = (ProjectBase & {
    bounding_box?: BoundingBox;
    geo_bounding_box?: BoundingBox;
    project_id?: string;
    readonly project_name?: string;
    user?: string;
    user_id?: string;
});

