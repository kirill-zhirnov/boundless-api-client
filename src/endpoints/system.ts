import {BoundlessClient} from '../client';
import {createGetStr} from '../utils';
import {TAdapterExtraRequestInit} from '../axiosFetchAdapter';

export default class SystemApi {
	constructor(protected client: BoundlessClient) {
	}

	async fetchSettings(keys: string[], extraRequest: TAdapterExtraRequestInit = {}): Promise<{[key: string]: any}> {
		const {data} = await this.client.createRequest({extraRequest})
			.get(`/system/settings/fetch?${createGetStr({keys})}`)
		;
		return data;
	}
}