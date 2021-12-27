import {ICartProduct} from '..';
import {BoundlessClient} from '../client';
import {ICartInfo, ICart, ICartTotal} from '../types/orders/cart';
import {IVariant} from '../types/catalog/variant';

export default class OrdersApi {
	constructor(protected client: BoundlessClient) { }

	async retrieveCart(): Promise<ICartInfo> {
		const {data} = await this.client.createRequest().post('/orders/cart/retrieve');

		return data;
	}

	async getCartInfo(cartId: string): Promise<ICartInfo> {
		if (!cartId) throw new Error('Cart ID should be specified');

		const {data} = await this.client.createRequest().get(`/orders/cart/${cartId}/total`);

		return data;
	}

	async getCartItems(cartId: string): Promise<ICart> {
		if (!cartId) throw new Error('Cart ID should be specified');

		const {data} = await this.client.createRequest().get(`/orders/cart/${cartId}/items`);

		return data;
	}

	async addItemToCart(cartId: string, itemId: number, qty: number): Promise<IAddToCartResponse> {
		if (!cartId || !itemId || !qty) throw new Error('Cart ID, item ID and quantity are required');

		const {data} = await this.client.createRequest().post('/orders/cart/add', {
			cart_id: cartId,
			item_id: itemId,
			qty
		});

		return data;
	}

	async removeFromCart(cartId: number, items: number[]): Promise<{result: true}> {
		if (!cartId || !items) throw new Error('Cart ID and item IDs are required');

		const {data} = await this.client.createRequest().post('/orders/cart/rm-items', {
			cart_id: cartId,
			items,
		});

		return data;
	}

	async setCartItemsQty(cartId: number, items: IItemsQty[]): Promise<{result: true}> {
		if (!cartId || !items) throw new Error('Cart ID and item are required');

		const {data} = await this.client.createRequest().post('/orders/cart/set-qty', {
			cart_id: cartId,
			items,
		});

		return data;
	}

	async addCustomItemToCart(cartId: string, title: string, price: number, qty: number): Promise<{result: true}> {
		if (!cartId || !price || !title ||  !qty) throw new Error('Cart ID, title, price and quantity are required');

		const {data} = await this.client.createRequest().post('/orders/cart/add-custom-item', {
			cart_id: cartId,
			price,
			title,
			qty
		});

		return data;
	}
}

export interface IAddToCartResponse {
	result?: true;
	actionRequired?: 'chooseVariant'
	product?: ICartProduct;
	variants?: IVariant[];
	cartTotal?: ICartTotal;
}

export interface IItemsQty {
	item_id: number;
	qty: number;
}