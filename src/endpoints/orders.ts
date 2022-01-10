import {ICartProduct, IExtendedVariants, IVwItem} from '..';
import {BoundlessClient} from '../client';
import {ICartInfo, ICart, ICartTotal} from '../types/orders/cart';

export default class OrdersApi {
	constructor(protected client: BoundlessClient) { }

	async retrieveCart(): Promise<ICartInfo> {
		const {data} = await this.client.createRequest().post('/orders/cart/retrieve');

		return data;
	}

	async getCartInfo(cartId: string): Promise<ICartInfo> {
		const {data} = await this.client.createRequest().get(`/orders/cart/${cartId}/total`);

		return data;
	}

	async getCartItems(cartId: string): Promise<ICart> {
		const {data} = await this.client.createRequest().get(`/orders/cart/${cartId}/items`);

		return data;
	}

	async addItemToCart(cartId: string, itemId: number, qty: number): Promise<IAddToCartResponse> {
		const {data} = await this.client.createRequest().post('/orders/cart/add', {
			cart_id: cartId,
			item_id: itemId,
			qty
		});

		return data;
	}

	async removeFromCart(cartId: string, items: number[]): Promise<{result: true}> {
		const {data} = await this.client.createRequest().post('/orders/cart/rm-items', {
			cart_id: cartId,
			items,
		});

		return data;
	}

	async setCartItemsQty(cartId: string, items: IItemsQty[]): Promise<{result: true}> {
		const {data} = await this.client.createRequest().post('/orders/cart/set-qty', {
			cart_id: cartId,
			items,
		});

		return data;
	}

	async addCustomItemToCart(cartId: string, title: string, price: number, qty: number): Promise<{result: true}> {
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
	cartTotal?: ICartTotal;
	added?: {
		item: IVwItem;
		qty: number;
	}
	actionRequired?: 'chooseVariant'
	product?: ICartProduct;
	variants?: IExtendedVariants;
}

export interface IItemsQty {
	item_id: number;
	qty: number;
}