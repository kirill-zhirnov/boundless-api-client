import { ICartProduct, IVwItem } from '..';
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
    removeFromCart(cartId: string, items: number[]): Promise<{
        result: true;
    }>;
    setCartItemsQty(cartId: string, items: IItemsQty[]): Promise<{
        result: true;
    }>;
    addCustomItemToCart(cartId: string, title: string, price: number, qty: number): Promise<{
        result: true;
    }>;
}
export declare type IAddToCartResponse = IAddToCartSuccess | IAddToCartChooseVariant;
export interface IAddToCartSuccess {
    result: true;
    cartTotal: ICartTotal;
    added: {
        item: IVwItem;
        qty: number;
    };
}
export interface IAddToCartChooseVariant {
    actionRequired?: 'chooseVariant';
    product?: ICartProduct;
    variants?: IVariant[];
}
export interface IItemsQty {
    item_id: number;
    qty: number;
}
