import { BoundlessClient } from '../client';
import { ICartInfo, ICart } from '../types/orders/cart';
export default class OrdersApi {
    protected client: BoundlessClient;
    constructor(client: BoundlessClient);
    retrieveCart(): Promise<ICartInfo>;
    getCartInfo(cartId: string): Promise<ICartInfo>;
    getCartItems(cartId: string): Promise<ICart>;
}
