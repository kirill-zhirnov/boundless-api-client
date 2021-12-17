import {BoundlessClient} from '../client';

export default class CatalogApi {
	constructor(protected client: BoundlessClient) {

	}

	async getProducts() {
		const url = '/catalog/products';
		const {data} = await this.client.createRequest().get(url);

		return data;
	}
}
