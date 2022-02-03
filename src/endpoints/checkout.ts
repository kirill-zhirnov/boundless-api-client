import {BoundlessClient} from '../client';
import {ICartItem} from '../types/orders/cart';
import {ICheckoutPageSettings} from '../types/settings';
import {ICheckoutPostContactsData} from '../types/orders/checkout';
import {ICustomer, IOrder} from '../types/orders/orders';

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

	async saveContactsData(contactsData: ICheckoutPostContactsData): Promise<{customer: ICustomer}> {
		const {data} = await this.client.createRequest().post('/orders/checkout/contact', contactsData);

		return data;
	}
}