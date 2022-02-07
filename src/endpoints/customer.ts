import {BoundlessClient} from '../client';
import {IRegisterCustomerData} from '../types/customer';
import {ICustomer} from '../types/orders/orders';

export default class CustomerApi {
	constructor(protected client: BoundlessClient) {
	}

	async login(email: string, password: string): Promise<{customer: ICustomer, authToken: string}> {
		const {data} = await this.client.createRequest().post('/user/customer/login', {
			email,
			password
		});

		return data;
	}

	async register(customerData: IRegisterCustomerData): Promise<{customer: ICustomer, authToken: string}> {
		const {data} = await this.client.createRequest().post('/user/customer/register', customerData);

		return data;
	}
}