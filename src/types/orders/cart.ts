import {IVwItem, IItemPrice} from '../catalog/inventoryItem';
import {TPublishingStatus} from '../common';

export interface ICartInfo {
	id: string;
	created_at: string;
	total: ICartTotal;
}

export interface ICartTotal {
	qty: number;
	total: number | string;
}

export interface ICart {
	cart: ICartInfo;
	items: ICartItem[];
}

export interface ICartItem {
	basket_item_id: number;
	item_id: number;
	qty: number;
	item_price_id: number;
	created_at: string;
	itemPrice: IItemPrice;
	vwItem: IVwItem;
}

export interface IOrder {
	id: string;
	status_id: null | number;
	service_total_price: null | string;
	total_price: null | string;
	discount_for_order: null | string;
	paid_at: null | string;
	publishing_status: TPublishingStatus;
	created_at: string;
}