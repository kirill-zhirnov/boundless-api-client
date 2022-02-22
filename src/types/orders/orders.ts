import {TPublishingStatus} from '../common';
import {IPaymentMethod} from './payment';
import {IItemPrice, IVwItem} from '../catalog/inventoryItem';

export interface IOrder {
	id: string;
	status_id: null | number;
	payment_method_id: null|number;
	service_total_price: null | string;
	total_price: null | string;
	discount_for_order: null | string;
	paid_at: null | string;
	publishing_status: TPublishingStatus;
	created_at: string;
	customer?: ICustomer;
	discounts?: IOrderDiscount[];
	paymentMethod?: IPaymentMethod;
	services?: IOrderService[];
}

export interface IDetailedOrder extends IOrder {
	items: IOrderItem[],
	props: {
		client_comment: string|null;
		custom_attrs: null|{[key: string]: any}
	}
	discounts: IOrderDiscount[];
	customer: ICustomer|null;
	status: IOrderStatus|null;
	paymentMethod: IPaymentMethod|null;
	services: IOrderService[];
}

export interface IOrderItem {
	reserve_item_id?: number;
	basket_item_id?: number;
	reserve_id?: number;
	stock_id?: number|null;
	item_id: number;
	qty: number;
	total_price?: string|null,
	item_price_id: number;
	created_at: string;
	itemPrice: IItemPrice;
	vwItem: IVwItem;
}

export interface IOrderService {
	order_service_id: number;
	service_id: number|null;
	qty: number;
	total_price: string|number;
	item_price_id: string|number;
	is_delivery: boolean;
	serviceDelivery?: IOrderServiceDelivery;
}

export interface IOrderServiceDelivery {
	delivery_id: number|null;
	title: string|null;
	text_info: string|null;
	data: {[key: string]: any}|null;
	delivery?: IDelivery;
}

export enum TDeliveryCalcMethod {
	byShippingService = 'byShippingService',
	byOwnRates = 'byOwnRates',
	single = 'single'
}

export interface IDelivery {
	delivery_id: number;
	title: string|number;
	alias: string|null;
	shipping_id: number|null;
	shipping_config: {[key: string]: any}|null;
	free_shipping_from: null|string;
	calc_method: TDeliveryCalcMethod|null;
	created_at: string;
	shipping?: IVwShipping;
}

export enum TShippingAlias {
	selfPickup = 'selfPickup'
}

export interface IVwShipping {
	shipping_id: number;
	shipping_title: string;
	alias: TShippingAlias|null;
	settings: null|{[key: string]: any}
}

export interface ICustomer {
	id: string;
	email: string | null;
	created_at: string,
	first_name: string | null,
	last_name: string | null,
	phone: string | null,
	receive_marketing_info: boolean,
	custom_attrs: {[key: string]: any},
	addresses: ICustomerAddress[]
}

export enum TAddressType {
	billing = 'billing',
	shipping = 'shipping'
}

export interface ICustomerAddress {
	id: string;
	type: TAddressType | null;
	is_default: boolean;
	first_name: string | null;
	last_name: string | null;
	company: string | null;
	address_line_1: string | null;
	address_line_2: string | null;
	city: string | null;
	state: string | null;
	country_id: number | null;
	zip: string | null;
	phone: string | null;
	created_at: string;
}

export enum TDiscountType {
	fixed = 'fixed',
	percent = 'percent'
}

export enum TDiscountSource {
	manual = 'manual',
	coupon = 'coupon'
}

export interface IOrderDiscount {
	discount_id: number;
	title: string | null;
	discount_type: TDiscountType | null;
	value: string;
	source: TDiscountSource | null;
	code_id: number | null;
	created_at?: string;
}

export enum TOrderStockLocation {
	inside = 'inside',
	outside = 'outside',
	basket = 'basket'
}

export interface IOrderStatus {
	status_id: number;
	alias: string|null;
	title: string;
	background_color: string|null;
	stock_location: TOrderStockLocation;
	sort: number;
	created_at: string;
	deleted_at: null|string;
}