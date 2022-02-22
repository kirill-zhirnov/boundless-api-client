import { BoundlessClient } from '../client';
import { IDetailedOrder } from '../types/orders/orders';
export default class CustomerOrderApi {
    protected client: BoundlessClient;
    constructor(client: BoundlessClient);
    getOrder(id: string): Promise<IDetailedOrder>;
    setCustomAttrs(postData: {
        order_id: string;
        attrs: {
            [key: string]: any;
        };
    }): Promise<true>;
    makePaymentLink(postData: {
        order_id: string;
    }): Promise<{
        url: string;
    }>;
}
