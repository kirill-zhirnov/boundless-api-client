import { BoundlessClient } from '../client';
import { ICartItem } from '../types/orders/cart';
import { ICheckoutPageSettings } from '../types/settings';
import { ICheckoutPostContactsData, ICheckoutStepper, TCheckoutRedirect } from '../types/orders/checkout';
import { IOrder, IOrderDiscount } from '../types/orders/orders';
import { ICustomer } from '../types/customer';
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
        hasCouponCampaigns: boolean;
        needShipping: boolean;
    }>;
    saveContactsData(contactsData: ICheckoutPostContactsData): Promise<{
        customer: ICustomer;
    }>;
    getPaymentPage(orderId: string): Promise<ICheckoutPaymentPageData>;
    setPaymentMethod(paymentsData: ICheckoutPostPaymentPageData): Promise<{
        redirectTo: TCheckoutRedirect;
        url?: string;
        error?: string;
    }>;
    paypalCapture(id: string): Promise<{
        result: boolean;
        order?: IOrder;
    }>;
    addDiscountCode(orderId: string, discountCode: string): Promise<{
        discount: IOrderDiscount;
    }>;
    clearDiscounts(orderId: string): Promise<{
        order_id: string;
    }>;
    getShippingPage(orderId: string): Promise<{
        order_id: string;
    }>;
}
