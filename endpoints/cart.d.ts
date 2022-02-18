import { ICartProduct } from '../types/catalog/product';
import { IVwItem } from '../types/catalog/inventoryItem';
import { BoundlessClient } from '../client';
import { ICartInfo, ICart, ICartTotal } from '../types/orders/cart';
export default class CartApi {
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
export interface IAddToCartResponse {
    result?: true;
    cartTotal?: ICartTotal;
    added?: {
        item: IVwItem;
        qty: number;
    };
    actionRequired?: 'chooseVariant';
    product?: ICartProduct;
}
export interface IItemsQty {
    item_id: number;
    qty: number;
}