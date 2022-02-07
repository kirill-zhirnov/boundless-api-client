import { BoundlessClient } from '../client';
import { IRegisterCustomerData } from '../types/customer';
import { ICustomer } from '../types/orders/orders';
export default class CustomerApi {
    protected client: BoundlessClient;
    constructor(client: BoundlessClient);
    login(email: string, password: string): Promise<{
        customer: ICustomer;
        authToken: string;
    }>;
    register(customerData: IRegisterCustomerData): Promise<{
        customer: ICustomer;
        authToken: string;
    }>;
}
