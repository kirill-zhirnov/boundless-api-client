import {BoundlessClient} from '../client';
import {ICartItem, IOrder} from '../types/orders/cart';
import {ICheckoutPageSettings} from '../types/settings';
import {ICheckoutPostContactsData} from '../types/orders/checkout';

export default class CheckoutApi {
	constructor(protected client: BoundlessClient) {
	}

	async init(cart_id: string): Promise<{
		items: ICartItem[],
		order: IOrder,
		settings: ICheckoutPageSettings
	}> {
		const {data} = await this.client.createRequest().post('/orders/checkout/init', {
			cart_id
		});

		return data;
	}

	async saveContactsData(contactsData: ICheckoutPostContactsData) {
		const {data} = await this.client.createRequest().post('/orders/checkout/contact', contactsData);

		return data;
	}
}