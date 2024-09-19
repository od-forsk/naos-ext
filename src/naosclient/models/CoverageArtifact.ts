/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Artifact } from './Artifact';
export type CoverageArtifact = (Artifact & {
    receiver_heights?: Array<number>;
    type?: CoverageArtifact.type;
});
export namespace CoverageArtifact {
    export enum type {
        RAW = 'raw',
        TILED = 'tiled',
    }
}

