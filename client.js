"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoundlessClient = void 0;
const axios_1 = require("axios");
const catalog_1 = require("./endpoints/catalog");
const cart_1 = require("./endpoints/cart");
const thumb_1 = require("./thumb");
const checkout_1 = require("./endpoints/checkout");
const customer_1 = require("./endpoints/customer");
const customerOrder_1 = require("./endpoints/customerOrder");
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
        this.customerAuthToken = null;
        this.catalog = new catalog_1.default(this);
        this.cart = new cart_1.default(this);
        this.checkout = new checkout_1.default(this);
        this.customer = new customer_1.default(this);
        this.customerOrder = new customerOrder_1.default(this);
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
    createRequest(config = {}, appendCustomerAuthToken = true) {
        if (!this.token) {
            throw new Error('Token is required for authorization, use setAuthToken to set the token');
        }
        const instance = axios_1.default.create(Object.assign({
            baseURL: this.baseUrl,
            proxy: false
        }, config));
        instance.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
        if (appendCustomerAuthToken && this.customerAuthToken) {
            instance.defaults.headers.common['X-Customer'] = this.customerAuthToken;
        }
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
    makeThumb(params) {
        const thumb = new thumb_1.BoundlessThumb(params);
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
    setCustomerAuthToken(token) {
        this.customerAuthToken = token;
        return this;
    }
    getCustomerAuthToken() {
        return this.customerAuthToken;
    }
}
exports.BoundlessClient = BoundlessClient;
