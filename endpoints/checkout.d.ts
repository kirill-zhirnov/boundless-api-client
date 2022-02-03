import { BoundlessClient } from '../client';
import { ICartItem, IOrder } from '../types/orders/cart';
import { ICheckoutPageSettings } from '../types/settings';
import { ICheckoutPostContactsData } from '../types/orders/checkout';
export default class CheckoutApi {
    protected client: BoundlessClient;
    constructor(client: BoundlessClient);
    init(cart_id: string): Promise<{
        items: ICartItem[];
        order: IOrder;
        settings: ICheckoutPageSettings;
    }>;
    saveContactsData(contactsData: ICheckoutPostContactsData): Promise<any>;
}
