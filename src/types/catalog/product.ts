import {ILabel} from '../label';
import {IImage} from '../image';
import {TPublishingStatus} from '../common';
import {ICategory} from './category';

export interface IProduct {
	product_id: number;
	title: string;
	sku?: string|null;
	url_key?: string|null;
	has_variants: boolean;
	item_id?: number|null;
	commodity_group?: IProductCommodityGroup|null;
	manufacturer_id?: number|null;
	manufacturer: IProductManufacturer|null;
	price_id?: number|null;
	price_alias?: string;
	point_id: number;
	price: IProductPrice|null;
	props: IProductProps|null;
	default_category: IProductCategory|null;
	images: IImage[]|null;
	labels: ILabel[]|null;
	sort_price: string|number|null;
	sort_in_stock: number|null;
	status: TPublishingStatus;
	deleted_at: string|null;
	in_stock: boolean;
}

export interface IProductCommodityGroup {
	group_id: number;
	title: string;
	type: string;
	track_inventory: boolean;
}

export interface IProductManufacturer {
	manufacturer_id: number,
	title: string,
	url_key?: string|null,
	image?: string|null,
}

export interface IProductPrice {
	value: string|number|null;
	min: number|null;
	max: number|null;
	old: number|null;
	old_min: number|null;
	old_max: number|null;
	currency_alias: string|null;
}

export interface IProductProps {
	available_qty: number|null;
	country_of_origin: number|null;
	extra: {[key: string]:any}|null;
	size: {[key: string]:number}|null;
}

export type IProductCategory = Pick<ICategory, 'category_id'|'title'|'url_key'>;
