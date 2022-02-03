import { BoundlessClient } from '../client';
import { ICartItem } from '../types/orders/cart';
import { ICheckoutPageSettings } from '../types/settings';
import { ICheckoutPostContactsData } from '../types/orders/checkout';
import { ICustomer, IOrder } from '../types/orders/orders';
export default class CheckoutApi {
    protected client: BoundlessClient;
    constructor(client: BoundlessClient);
    init(cart_id: string): Promise<{
        items: ICartItem[];
        order: IOrder;
        settings: ICheckoutPageSettings;
    }>;
    saveContactsData(contactsData: ICheckoutPostContactsData): Promise<{
        customer: ICustomer;
    }>;
}
