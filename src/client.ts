import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const DEFAULT_BASE_URL = 'https://api.rick.dev.boundless-commerce.com';

/**
* Boundless Commerce API client.
*/

export class BoundlessClient {
	protected server: AxiosInstance|null = null;
	protected instanceId: number|null = null;

	/**
	* Create an instance of Boundless Commerce API client.
	*
	* @param {string} token - permanent or regular token. Regular token can be generated with generateBoundlessToken
	* @param {string} baseUrl - custom base URL for API requests.
	*/
	constructor(protected token: string|null = null, protected baseUrl: string = DEFAULT_BASE_URL) {
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
	public createRequest(config: AxiosRequestConfig = {}): AxiosInstance {
		if (!this.token) {
			throw new Error('Token is required for authorization, use setAuthToken to set the token');
		}

		const instance = axios.create(Object.assign({
			baseURL: this.baseUrl,
			proxy: false
		}, config));

		instance.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;

		return instance;
	}
}