import {TPublishingStatus} from '../common';
import {IImageShort} from '../image';
import {ILabel} from '../label';
import {IVwItemProduct} from './product';

export interface IItemPrice {
	item_price_id: number;
	price_id: number;
	basic_price: string | null;
	final_price: string | null;
	discount_amount: string | number | null;
	discount_percent: string | number | null;
}

export interface IVwItem {
	item_id: number;
	type: 'product' | 'variant';
	track_inventory: boolean;
	available_qty: number;
	reserved_qty: number;
	product_id: number;
	variant_id: number | null;
	custom_item_id: number | null;
	status: TPublishingStatus;
	deleted_at: string | null;
	product: IVwItemProduct;
	commodity_group: IVwItemCommodityGroup;
	image: IImageShort;
	prices: IItemPrice[];
	labels: ILabel[];
}

export interface IVwItemCommodityGroup {
	group_id: number;
	physical_products: boolean;
	title: string;
	trackInventory: boolean;
}

export interface IItemPrice {
	point_id: number;
	price_id: number;
	alias: string;
	currency_id: number;
	value: number|null;
	min: number|null;
	max: number|null;
	is_auto_generated: boolean;
	old: number|null;
	old_min: number|null;
	old_max: number|null;
}