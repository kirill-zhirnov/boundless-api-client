import { BoundlessClient } from '../client';
import { ICartItem } from '../types/orders/cart';
import { ICheckoutPageSettings } from '../types/settings';
import { ICheckoutPostContactsData, ICheckoutStepper, TCheckoutRedirect } from '../types/orders/checkout';
import { ICustomer, IOrder } from '../types/orders/orders';
import { ICheckoutPaymentPageData, ICheckoutPostPaymentPageData } from '../types/orders/payment';
export default class CheckoutApi {
    protected client: BoundlessClient;
    constructor(client: BoundlessClient);
    init(cart_id: string): Promise<{
        items: ICartItem[];
        order: IOrder;
        settings: ICheckoutPageSettings;
        stepper: ICheckoutStepper;
        loggedInCustomer: ICustomer | null;
    }>;
    saveContactsData(contactsData: ICheckoutPostContactsData): Promise<{
        customer: ICustomer;
    }>;
    getPaymentPage(orderId: string): Promise<ICheckoutPaymentPageData>;
    setPaymentMethod(paymentsData: ICheckoutPostPaymentPageData): Promise<{
        redirectTo: TCheckoutRedirect;
    }>;
}
