import { AxiosInstance, AxiosRequestConfig } from 'axios';
/**
* Boundless Commerce API client.
*/
export declare class BoundlessClient {
    protected token: string | null;
    protected baseUrl: string;
    protected server: AxiosInstance | null;
    protected instanceId: number | null;
    /**
    * Create an instance of Boundless Commerce API client.
    *
    * @param {string} token - permanent or regular token. Regular token can be generated with generateBoundlessToken
    * @param {string} baseUrl - custom base URL for API requests.
    */
    constructor(token?: string | null, baseUrl?: string);
    /**
    * Sets your shop instance ID for getting images.
    *
    * @param {number} instanceId
    */
    setInstanceId(instanceId: number): this;
    /**
    * Sets auth token for API requests.
    *
    * @param {string} token
    */
    setAuthToken(token: string): this;
    /**
    * Sets custom base URL for API requests.
    *
    * @param {string} baseURL
    */
    setBaseUrl(baseURL: string): this;
    /**
    * Returns an axios instance to make custom API requests.
    *
    * @param {AxiosRequestConfig} config - additional axios request config
    */
    createRequest(config?: AxiosRequestConfig): AxiosInstance;
}
