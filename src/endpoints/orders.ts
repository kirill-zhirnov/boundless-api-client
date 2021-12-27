import {BoundlessClient} from '../client';
import {ICartInfo, ICart} from '../types/orders/cart';

export default class OrdersApi {
	constructor(protected client: BoundlessClient) { }

	async retrieveCart(): Promise<ICartInfo> {
		const {data} = await this.client.createRequest().post('/orders/cart/retrieve');

		return data;
	}

	async getCartInfo(cartId: string): Promise<ICartInfo> {
		if (!cartId) throw new Error('Cart ID should be specified');

		const {data} = await this.client.createRequest().get(`/orders/cart/${cartId}/total`);

		return data;
	}

	async getCartItems(cartId: string): Promise<ICart> {
		if (!cartId) throw new Error('Cart ID should be specified');

		const {data} = await this.client.createRequest().get(`/orders/cart/${cartId}/items`);

		return data;
	}
}

