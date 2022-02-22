import { BoundlessClient } from '../client';
import { ICheckoutPostContactsData, TCheckoutRedirect, ICheckoutPostAddressData } from '../types/orders/checkout';
import { IOrder, IOrderDiscount } from '../types/orders/orders';
import { ICustomer } from '../types/customer';
import { ICheckoutInitData, ICheckoutPaymentPageData, ICheckoutPostPaymentPageData } from '../types/orders/payment';
import { ICheckoutShippingPageData } from '../types/delivery';
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
    getShippingPage(orderId: string): Promise<ICheckoutShippingPageData>;
    setDeliveryMethod(orderId: string, deliveryId: number): Promise<boolean>;
    setShippingAddress(shipmentData: ICheckoutPostAddressData): Promise<{
        person: ICustomer;
    }>;
}
