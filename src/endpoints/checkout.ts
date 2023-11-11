import {BoundlessClient} from '../client';
import {ICheckoutPostContactsData, TCheckoutRedirect, ICheckoutPostAddressData} from '../types/orders/checkout';
import {IOrder} from '../types/orders/orders';
import {ICustomer} from '../types/customer';
import {
	ICheckoutInitData,
	ICheckoutPaymentPageData,
	ICheckoutPostPaymentPageData
} from '../types/orders/payment';
import {ICheckoutShippingPageData} from '../types/delivery';
import {ITotal} from '../types/total';

export default class CheckoutApi {
	constructor(protected client: BoundlessClient) {
	}

	async init(cart_id: string): Promise<ICheckoutInitData> {
		const {data} = await this.client.createRequest().post('/orders/checkout/init', {
			cart_id
		});

		return data;
	}

	async saveContactsData(contactsData: ICheckoutPostContactsData): Promise<{customer: ICustomer, authToken?: string}> {
		const {order_id, ...postData} = contactsData;
		const {data} = await this.client.createRequest().post(`/orders/checkout/${order_id}/contact`, postData);

		return data;
	}

	async getPaymentPage(orderId: string): Promise<ICheckoutPaymentPageData> {
		const {data} = await this.client.createRequest().get(`/orders/checkout/payment/${orderId}`);

		return data;
	}

	async setPaymentMethod(paymentsData: ICheckoutPostPaymentPageData): Promise<{redirectTo: TCheckoutRedirect, url?: string, error?: string}> {
		const {data} = await this.client.createRequest().post('/orders/checkout/payment/set', paymentsData);

		return data;
	}

	async paypalCapture(id: string): Promise<{result: boolean, order?: IOrder}> {
		const {data} = await this.client.createRequest().post('/orders/checkout/payment/paypal-capture', {id});

		return data;
	}

	async addDiscountCode(orderId: string, discountCode: string): Promise<{order: IOrder, total: ITotal}> {
		const {data} = await this.client.createRequest().post('/orders/checkout/discount-code', {
			order_id: orderId,
			code: discountCode
		});

		return data;
	}

	async clearDiscounts(orderId: string): Promise<{order: IOrder, total: ITotal}> {
		const {data} = await this.client.createRequest().delete(`/orders/checkout/${orderId}/discounts`);

		return data;
	}

	async getShippingPage(orderId: string): Promise<ICheckoutShippingPageData> {
		const {data} = await this.client.createRequest().get(`/orders/checkout/${orderId}/shipping-step`);

		return data;
	}

	async setDeliveryMethod(orderId: string, deliveryId: number): Promise<{order: IOrder, total: ITotal}> {
		const {data} = await this.client.createRequest().post('/orders/checkout/shipping/delivery-method', {
			order_id: orderId,
			delivery_id: deliveryId
		});

		return data;
	}

	async setShippingAddress(shipmentData: ICheckoutPostAddressData): Promise<{person: ICustomer}> {
		const {data} = await this.client.createRequest().post('/orders/checkout/shipping/address', shipmentData);

		return data;
	}
}