import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import CatalogApi from './endpoints/catalog';
import CartApi from './endpoints/cart';
import {BoundlessThumb} from './thumb';
import CheckoutApi from './endpoints/checkout';
import CustomerApi from './endpoints/customer';
import CustomerOrderApi from './endpoints/customerOrder';
import AdminOrderApi from './endpoints/adminOrder';
import SystemApi from './endpoints/system';

const DEFAULT_BASE_URL = 'https://v1.api.boundless-commerce.com';

/**
* Boundless Commerce API client.
*/

export class BoundlessClient {
	protected instanceId: number|null = null;
	protected s3FolderPrefix?: string;
	protected mediaServerUrl?: string;
	protected customerAuthToken: string|null = null;

	public readonly catalog: CatalogApi;
	public readonly cart: CartApi;
	public readonly checkout: CheckoutApi;
	public readonly customer: CustomerApi;
	public readonly customerOrder: CustomerOrderApi;
	public readonly adminOrder: AdminOrderApi;
	public readonly system: SystemApi;

	/**
	* Create an instance of Boundless Commerce API client.
	*
	* @param {string} token - permanent or regular token. Regular token can be generated with generateBoundlessToken
	* @param {string} baseUrl - custom base URL for API requests.
	*/
	constructor(protected token: string|null = null, protected baseUrl: string = DEFAULT_BASE_URL) {
		this.catalog = new CatalogApi(this);
		this.cart = new CartApi(this);
		this.checkout = new CheckoutApi(this);
		this.customer = new CustomerApi(this);
		this.customerOrder = new CustomerOrderApi(this);
		this.adminOrder = new AdminOrderApi(this);
		this.system = new SystemApi(this);
	}

	/**
	* Sets your shop instance ID for getting images.
	*
	* @param {number} instanceId
	*/
	public setInstanceId(instanceId: number) {
		this.instanceId = instanceId;

		return this;
	}

	/**
	* Sets auth token for API requests.
	*
	* @param {string} token
	*/
	public setAuthToken(token: string) {
		this.token = token;

		return this;
	}

	/**
	* Sets custom base URL for API requests.
	*
	* @param {string} baseURL
	*/
	public setBaseUrl(baseURL: string) {
		this.baseUrl = baseURL;

		return this;
	}

	/**
	* Returns an axios instance to make custom API requests.
	*
	* @param {AxiosRequestConfig} config - additional axios request config
	*/
	public createRequest(config: AxiosRequestConfig = {}, appendCustomerAuthToken = true): AxiosInstance {
		if (!this.token) {
			throw new Error('Token is required for authorization, use setAuthToken to set the token');
		}

		const instance = axios.create(Object.assign({
			baseURL: this.baseUrl,
			proxy: false
		}, config));

		instance.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;

		if (appendCustomerAuthToken && this.customerAuthToken) {
			instance.defaults.headers.common['X-Customer'] = this.customerAuthToken;
		}

		return instance;
	}

	public setS3FolderPrefix(prefix: string) {
		this.s3FolderPrefix = prefix;
		return this;
	}

	public setMediaServerUrl(url: string) {
		this.mediaServerUrl = url;
		return this;
	}

	public makeThumb(params: {imgLocalPath: string, maxSize: number, originalWidth?: number, originalHeight?: number}): BoundlessThumb {
		const thumb = new BoundlessThumb(params);

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

	public setCustomerAuthToken(token: string|null) {
		this.customerAuthToken = token;
		return this;
	}

	public getCustomerAuthToken(): string|null {
		return this.customerAuthToken;
	}
}