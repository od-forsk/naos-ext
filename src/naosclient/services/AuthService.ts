/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiError } from '../models/ApiError';
import type { TokenResponse } from '../models/TokenResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AuthService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Login user and return tokens (access and refresh)
     * @returns TokenResponse Tokens
     * @returns ApiError Error
     * @throws ApiError
     */
    public login(): CancelablePromise<TokenResponse | ApiError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/login',
        });
    }
    /**
     * Returns a new access token using a refresh token
     * @returns TokenResponse Access token
     * @returns ApiError Error
     * @throws ApiError
     */
    public refresh(): CancelablePromise<TokenResponse | ApiError> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/token',
        });
    }
}
