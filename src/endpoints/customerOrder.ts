import {BoundlessClient} from '../client';
import {IDetailedOrder} from '../types/orders/orders';

export default class CustomerOrderApi {
	constructor(protected client: BoundlessClient) {
	}

	async getOrder(id: string): Promise<IDetailedOrder> {
		const {data} = await this.client.createRequest().get(`/orders/customer/order/get/${id}`);

		return data;
	}

	async setCustomAttrs(postData: {order_id: string; attrs: {[key: string]: any}}): Promise<true> {
		const {data} = await this.client.createRequest().post('/orders/customer/order/set-custom-attrs', postData);

		return data;
	}

	async makePaymentLink(postData: {order_id: string}): Promise<{url: string}> {
		const {data} = await this.client.createRequest().post('/orders/customer/order/make-payment-link', postData);

		return data;
	}
}