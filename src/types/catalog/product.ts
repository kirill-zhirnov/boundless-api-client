import {ILabel} from './label';
import {IImageItem, IProductImage, IProductListImage} from '../image';
import {TPublishingStatus} from '../common';
import {ICategory, ICategoryItem, IProductCategoryRels} from './category';
import {IProductAttribute} from './characteristic';
import {IExtendedVariants} from './variant';
import {IItemSize} from './inventoryItem';

export enum TTaxStatus {
	taxable = 'taxable',
	none = 'none'
}

export interface IProduct {
	product_id: number;
	sku?: string | null;
	title: string;
	url_key?: string | null;
	has_variants: boolean;
	external_id: null | string;
	item_id: number;
	in_stock: boolean;
	price_id?: number | null;
	price_alias?: string;
	price: IProductPrice | null;
	text: IProductText | null;
	props: IProductProps | null;
	manufacturer: IProductManufacturer | null;
	default_category: IProductCategory | null;
	images: IProductListImage[] | null;
	product_type?: IProductCommodityGroup | null;
	labels: ILabel[] | null;
	status: TPublishingStatus;
	deleted_at: string | null;
	sort_price: string | number | null;
	sort_in_stock: number | null;
}

export interface IProductManufacturer {
	manufacturer_id: number,
	title: string,
	url_key?: string | null,
	image?: string | null,
}

export interface IProductPrice {
	value: number | null;
	min: number | null;
	max: number | null;
	old: number | null;
	old_min: number | null;
	old_max: number | null;
	currency_alias: string | null;
}

export interface IProductProps {
	available_qty: number | null;
	reserved_qty: number | null;
	country_of_origin: number | null;
	extra: {[key: string]: any} | null;
	size: IItemSize | null;
	attr_values: {[key: string]:any}|null;
	tax_status: TTaxStatus;
	tax_class_id: number|null;
	arbitrary_data: {[key: string]:any}|null;
}

export type IProductCategory = Pick<ICategory, 'category_id' | 'title' | 'url_key'>;

export interface ICartProduct {
	product_id: number;
	sku: string | null;
	title: string;
	url_key?: string | null;
	external_id: number | string | null,
	has_variants: boolean;
	item_id: number;
	group_id: number;
	price: IProductPrice | null;
	status: TPublishingStatus;
	text: IProductText;
	extendedVariants: IExtendedVariants;
	in_stock: boolean;
	images: IProductImage[];
	created_by: number | null;
	created_at: string;
	deleted_at: string | null;
}

export interface IProductText {
	description: string | null;
	custom_title: string | null;
	// custom_header: string | null;
	meta_description: string | null;
}

export interface IVwItemProduct {
	product_id: number;
	sku: string | null;
	has_variants: boolean;
	title: string;
	url_key: string | null;
	default_category_id: number;
	manufacturer_id: number | null;
}

export interface IProductItemManufacturer {
	manufacturer_id: number;
	title: string,
	url_key?: string | null,
	text: IManufacturerText;
	image?: IImageItem|null;
	status: TPublishingStatus;
	created_by: number | null;
	created_at: string;
	deleted_at?: string | null;
}

export interface IManufacturerText {
	custom_title: string | null;
	// custom_header: string | null;
	meta_description: string | null;
	// url_key: string | null;
	description: string | null;
}

export interface IProductCommodityGroup {
	group_id: number;
	title: string;
	is_default: boolean;
	physical_products: boolean;
	track_inventory: boolean;
}

export interface IItemSeo {
	compiledTitle: null|string,
	compiledMetaDescription: null|string,
	customTitle: null|string,
	customMetaDesc: null|string,
	title: string,
	metaDesc: null|string
}

export interface IProductItem {
	product_id: number;
	sku: string | null;
	title: string;
	url_key?: string | null;
	has_variants: boolean;
	external_id: string | null;
	item_id: number;
	in_stock: boolean;
	price: IProductPrice | null;
	text: IProductText;
	images: IProductImage[];
	props: IProductItemProps;
	manufacturer: IProductItemManufacturer | null;
	categoryRels: IProductCategoryRels[];
	default_category: ICategoryItem | null;
	product_type: IProductCommodityGroup;
	labels: ILabel[],
	extendedVariants?: IExtendedVariants;
	attributes: IProductAttribute[];
	seo: IItemSeo;
	status: TPublishingStatus;
	created_by: number | null;
	created_at: string;
	deleted_at?: string | null;
}

export interface IProductItemProps {
	available_qty: number;
	reserved_qty: number;
	country_of_origin: number | null;
	extra: {[key: string]: any} | null,
	size: IItemSize | null;
	tax_status: TTaxStatus;
	tax_class_id: number|null;
	arbitrary_data: {[key: string]:any}|null;
	attr_values: {[key: string]: number[] | string}
}