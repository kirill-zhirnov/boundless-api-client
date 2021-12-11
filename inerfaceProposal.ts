import {AxiosInstance, AxiosRequestConfig} from 'axios';

interface IClient {
	setSecretTokens: (clientId: string, secret: string) => IClient;

	setPermanentToken: (token: string) => IClient;

	/**
	 * InstanceId нам нужен для работы с изображениями и для генерации secret токена вручную.
	 *
	 * @param instanceId
	 */
	setInstanceId: (instanceId: number) => IClient;

	/**
	 * Возвращает axios.create() instance, чтобы можно было выполнить произвольный запрос к АПИ, которого нет в
	 * наших методах (с уже установленными хидерами авторизации).
	 *
	 * @param config
	 */
	request: (config?: AxiosRequestConfig) => AxiosInstance;

	catalog: {
		getProducts: (filterParams: {}, axiosParams: {}) => Promise<{}[]>,
		headProducts: (filterParams: {}, axiosParams: {}) => Promise<{}>,
		getVariants: (filterParams: {}, axiosParams: {}) => Promise<{}[]>,
		makeFilterFields: (filterParams: {}, axiosParams: {}) => Promise<{}>,
	}
}

interface IClientStatic {
	new(permanentToken?: string): IClient;
}

interface IOurLib {
	Client: IClientStatic;
}

//использоваться будет так:
//import {Client} from 'boundless-api-client';
//const client = new IClientStatic(process.env.BOUNDLESS_PERMANENT_TOKEN);