import { AxiosInstance, AxiosRequestConfig } from 'axios';
import CatalogApi from './endpoints/catalog';
import CartApi from './endpoints/cart';
import { BoundlessThumb } from './thumb';
import CheckoutApi from './endpoints/checkout';
import CustomerApi from './endpoints/customer';
/**
* Boundless Commerce API client.
*/
export declare class BoundlessClient {
    protected token: string | null;
    protected baseUrl: string;
    protected instanceId: number | null;
    protected s3FolderPrefix?: string;
    protected mediaServerUrl?: string;
    protected customerAuthToken: string | null;
    readonly catalog: CatalogApi;
    readonly cart: CartApi;
    readonly checkout: CheckoutApi;
    readonly customer: CustomerApi;
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
    createRequest(config?: AxiosRequestConfig, appendCustomerAuthToken?: boolean): AxiosInstance;
    setS3FolderPrefix(prefix: string): this;
    setMediaServerUrl(url: string): this;
    makeThumb(params: {
        imgLocalPath: string;
        maxSize: number;
        originalWidth?: number;
        originalHeight?: number;
    }): BoundlessThumb;
    setCustomerAuthToken(token: string | null): this;
    getCustomerAuthToken(): string | null;
}
