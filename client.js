"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoundlessClient = void 0;
const axios_1 = require("axios");
const catalog_1 = require("./endpoints/catalog");
const orders_1 = require("./endpoints/orders");
const thumb_1 = require("./thumb");
const DEFAULT_BASE_URL = 'https://api.rick.dev.boundless-commerce.com';
/**
* Boundless Commerce API client.
*/
class BoundlessClient {
    /**
    * Create an instance of Boundless Commerce API client.
    *
    * @param {string} token - permanent or regular token. Regular token can be generated with generateBoundlessToken
    * @param {string} baseUrl - custom base URL for API requests.
    */
    constructor(token = null, baseUrl = DEFAULT_BASE_URL) {
        this.token = token;
        this.baseUrl = baseUrl;
        this.instanceId = null;
        this.catalog = new catalog_1.default(this);
        this.orders = new orders_1.default(this);
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
    * Sets auth token for API requests.
    *
    * @param {string} token
    */
    setAuthToken(token) {
        this.token = token;
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
    * Returns an axios instance to make custom API requests.
    *
    * @param {AxiosRequestConfig} config - additional axios request config
    */
    createRequest(config = {}) {
        if (!this.token) {
            throw new Error('Token is required for authorization, use setAuthToken to set the token');
        }
        const instance = axios_1.default.create(Object.assign({
            baseURL: this.baseUrl,
            proxy: false
        }, config));
        instance.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
        return instance;
    }
    setS3FolderPrefix(prefix) {
        this.s3FolderPrefix = prefix;
        return this;
    }
    setMediaServerUrl(url) {
        this.mediaServerUrl = url;
        return this;
    }
    makeThumb(localPath, maxSize, originalWidth, originalHeight) {
        const thumb = new thumb_1.BoundlessThumb(localPath, maxSize, originalWidth, originalHeight);
        if (this.instanceId) {
            thumb.setInstanceId(this.instanceId);
        }
        if (this.s3FolderPrefix) {
            thumb.setFolderPrefix(this.s3FolderPrefix);
        }
        if (this.mediaServerUrl) {
            thumb.setMediaServerUrl(this.mediaServerUrl);
        }
        return thumb;
    }
}
exports.BoundlessClient = BoundlessClient;
