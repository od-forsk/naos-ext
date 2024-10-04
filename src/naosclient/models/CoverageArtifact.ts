/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Artifact } from './Artifact';
export type CoverageArtifact = (Artifact & {
    type?: CoverageArtifact.type;
    receiver_heights?: Array<number>;
});
export namespace CoverageArtifact {
    export enum type {
        RAW = 'raw',
        TILED = 'tiled',
    }
}

