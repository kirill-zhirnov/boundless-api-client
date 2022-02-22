import { BoundlessClient } from '../client';
import { ICheckoutPostContactsData, TCheckoutRedirect } from '../types/orders/checkout';
import { ICustomer, IOrder, IOrderDiscount } from '../types/orders/orders';
import { ICheckoutInitData, ICheckoutPaymentPageData, ICheckoutPostPaymentPageData } from '../types/orders/payment';
export default class CheckoutApi {
    protected client: BoundlessClient;
    constructor(client: BoundlessClient);
    init(cart_id: string): Promise<ICheckoutInitData>;
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
}
