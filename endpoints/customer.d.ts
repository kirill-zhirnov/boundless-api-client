import { BoundlessClient } from '../client';
import { ICustomer, IRegisterCustomerData } from '../types/customer';
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
