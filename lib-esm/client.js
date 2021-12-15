import axios from 'axios';
const DEFAULT_BASE_URL = 'https://api.rick.dev.boundless-commerce.com';
/**
* Boundless Commerce API client.
*/
export class BoundlessClient {
    /**
    * Create an instance of Boundless Commerce API client.
    *
    * @param {string} token - permanent or regular token. Regular token can be generated with generateBoundlessToken
    * @param {string} baseUrl - custom base URL for API requests.
    */
    constructor(token, baseUrl = DEFAULT_BASE_URL) {
        this.token = token;
        this.baseUrl = baseUrl;
        this.server = null;
        this.instanceId = null;
        if (!token)
            throw new Error('Token is required for authorization');
    }
    /**
    * Sets your shop instance ID for getting images.
    *
    * @param {number} instanceId
    */
    setInstanceId(instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    /**
    * Sets custom base URL for API requests.
    *
    * @param {string} baseURL
    */
    setBaseUrl(baseURL) {
        this.baseUrl = baseURL;
        return this;
    }
    /**
    * Returns a server (axios) instance to make custom API requests.
    *
    * @param {AxiosRequestConfig} config - additional axios request config
    */
    createRequest(config = {}) {
        this.setupAxios(config);
        return this.server;
    }
    setupAxios(config = {}) {
        this.server = axios.create(Object.assign({
            baseURL: this.baseUrl,
            proxy: false
        }, config));
        this.server.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
    }
}
export class BoundlessClientStatic extends BoundlessClient {
    /**
    * Creates an instance of Boundless Commerce API client.
    *
    * @param {string} token - permanent or regular token. Regular token cab be generated with generateBoundlessToken
    */
    create(token) {
        return new BoundlessClient(token);
    }
}
