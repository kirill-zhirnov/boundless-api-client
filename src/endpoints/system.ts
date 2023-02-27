import {BoundlessClient} from '../client';
import {createGetStr} from '../utils';

export default class SystemApi {
	constructor(protected client: BoundlessClient) {
	}

	async fetchSettings(keys: string[]): Promise<{[key: string]: any}> {
		const {data} = await this.client.createRequest().get(`/system/settings/fetch?${createGetStr({keys})}`);
		return data;
	}
}