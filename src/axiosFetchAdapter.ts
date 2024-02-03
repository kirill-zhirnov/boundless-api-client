import {createGetStr} from './utils';

export class AxiosFetchAdapter {
	constructor(
		protected baseUrl: string = '',
		protected headers: TAdapterHeaders = {},
		protected extraRequest: TAdapterExtraRequestInit = {}
	) {
	}

	head<DATA = any>(url: string, config: IAdapterAxiosConfig | null = null): Promise<IAdapterResponse<DATA>> {
		return this.execute('HEAD', url, null, config);
	}

	get<DATA = any>(url: string, config: IAdapterAxiosConfig | null = null): Promise<IAdapterResponse<DATA>> {
		return this.execute('GET', url, null, config);
	}

	post<DATA = any>(url: string, body: TAdapterBodyInit | null = null): Promise<IAdapterResponse<DATA>> {
		return this.execute('POST', url, body);
	}

	patch<DATA = any>(url: string, body: TAdapterBodyInit | null = null): Promise<IAdapterResponse<DATA>> {
		return this.execute('PATCH', url, body);
	}

	put<DATA = any>(url: string, body: TAdapterBodyInit | null = null): Promise<IAdapterResponse<DATA>> {
		return this.execute('PUT', url, body);
	}

	delete<DATA = any>(url: string): Promise<IAdapterResponse<DATA>> {
		return this.execute('DELETE', url);
	}

	async execute<DATA = any>(method: string, url: string, body: TAdapterBodyInit | null = null, config: IAdapterAxiosConfig | null = null): Promise<IAdapterResponse<DATA>> {
		if (config?.params) {
			url += `?${createGetStr(config?.params)}`;
		}

		const init: RequestInit = {
			method,
			headers: {},
			...this.extraRequest
		};

		if (['post', 'patch', 'put'].includes(method.toLowerCase())) {
			if (body instanceof FormData) {
				init.body = body;
			} else {
				init.body = JSON.stringify(body);
				Object.assign(init.headers, {
					'Content-Type': 'application/json'
				});
			}
		}

		init.headers = {
			...init.headers,
			...this.headers
		};

		const response = await fetch(`${this.baseUrl}${url}`, init);

		const outHeaders: Record<string, string> = {};
		response.headers.forEach((value, key) => outHeaders[key] = value);

		const out: IAdapterResponse<DATA> = {
			ok: response.ok,
			status: response.status,
			statusText: response.statusText,
			redirected: response.redirected,
			headers: outHeaders,
			url: response.url,
			data: null
		};

		switch (String(response.headers.get('Content-Type')).toLowerCase()) {
			case 'application/json':
			case 'application/json; charset=utf-8':
				out.data = await response.json();
				break;
			default:
				out.data = await response.text() as unknown as DATA;
				break;
		}

		if (response.ok) {
			return out;
		}

		return Promise.reject({
			isAxiosError: true,
			message: `Request failed with status code ${response.status}`,
			name: 'AxiosError',
			code: 'ERR_BAD_REQUEST',
			response: out
		});
	}

	setExtraRequest(val: TAdapterExtraRequestInit) {
		this.extraRequest = val;
		return this;
	}
}

export interface IAdapterResponse<D = any> {
	ok: boolean;
	status: number;
	statusText: string;
	redirected: boolean;
	headers: Record<string, string>;
	url: string;
	data: D|null;
}

export interface IAdapterNegativeResponse {
	isAxiosError: boolean,
	message: string,
	name: string,
	code: string,
	response: IAdapterResponse
}

export type TAdapterExtraRequestInit = RequestInit & {
	[key: string]: any
};

export type TAdapterBodyInit = BodyInit | Record<string, any>;
export type TAdapterHeaders = Record<string, string>;
export interface IAdapterAxiosConfig {
	params?: Record<string, any>;
}