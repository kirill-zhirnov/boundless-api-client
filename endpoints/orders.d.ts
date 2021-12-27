import { ICartProduct } from '..';
import { BoundlessClient } from '../client';
import { ICartInfo, ICart, ICartTotal } from '../types/orders/cart';
import { IVariant } from '../types/catalog/variant';
export default class OrdersApi {
    protected client: BoundlessClient;
    constructor(client: BoundlessClient);
    retrieveCart(): Promise<ICartInfo>;
    getCartInfo(cartId: string): Promise<ICartInfo>;
    getCartItems(cartId: string): Promise<ICart>;
    addItemToCart(cartId: string, itemId: number, qty: number): Promise<IAddToCartResponse>;
    removeFromCart(cartId: number, items: number[]): Promise<{
        result: true;
    }>;
    setCartItemsQty(cartId: number, items: IItemsQty[]): Promise<{
        result: true;
    }>;
    addCustomItemToCart(cartId: string, title: string, price: number, qty: number): Promise<{
        result: true;
    }>;
}
export interface IAddToCartResponse {
    result?: true;
    actionRequired?: 'chooseVariant';
    product?: ICartProduct;
    variants?: IVariant[];
    cartTotal?: ICartTotal;
}
export interface IItemsQty {
    item_id: number;
    qty: number;
}
