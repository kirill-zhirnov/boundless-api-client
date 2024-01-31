import {BoundlessClient} from '../client';
import {ICustomer, IRegisterCustomerData} from '../types/customer';
import {ICartInfo} from '../types/orders/cart';

export default class CustomerApi {
	constructor(protected client: BoundlessClient) {
	}

	async login(email: string, password: string, cart_id?: string): Promise<{
		customer: ICustomer,
		authToken: string,
		activeCart?: ICartInfo
	}> {
		const {data} = await this.client.createRequest().post('/user/customer/login', {
			email,
			password,
			cart_id
		});

		return data;
	}

	async register(customerData: IRegisterCustomerData): Promise<{customer: ICustomer, authToken: string}> {
		const {data} = await this.client.createRequest().post('/user/customer/register', customerData);

		return data;
	}
}