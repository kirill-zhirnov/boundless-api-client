import {BoundlessClient} from '../client';
import {ICartItem} from '../types/orders/cart';
import {ICheckoutPageSettings} from '../types/settings';
import {ICheckoutPostContactsData, ICheckoutStepper, TCheckoutRedirect} from '../types/orders/checkout';
import {ICustomer, IOrder} from '../types/orders/orders';
import {
	ICheckoutPaymentPageData,
	ICheckoutPostPaymentPageData
} from '../types/orders/payment';

export default class CheckoutApi {
	constructor(protected client: BoundlessClient) {
	}

	async init(cart_id: string): Promise<{
		items: ICartItem[],
		order: IOrder,
		settings: ICheckoutPageSettings,
		stepper: ICheckoutStepper,
		loggedInCustomer: ICustomer|null
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

	async getPaymentPage(orderId: string): Promise<ICheckoutPaymentPageData> {
		const {data} = await this.client.createRequest().get(`/orders/checkout/payment/${orderId}`);

		return data;
	}

	async setPaymentMethod(paymentsData: ICheckoutPostPaymentPageData): Promise<{redirectTo: TCheckoutRedirect}> {
		const {data} = await this.client.createRequest().post('/orders/checkout/payment/set', paymentsData);

		return data;
	}
}