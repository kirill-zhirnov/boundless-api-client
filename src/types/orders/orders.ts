import {TPublishingStatus} from '../common';

export interface IOrder {
	id: string;
	status_id: null | number;
	service_total_price: null | string;
	total_price: null | string;
	discount_for_order: null | string;
	paid_at: null | string;
	publishing_status: TPublishingStatus;
	created_at: string;
	customer?: ICustomer;
}

export interface ICustomer {
	id: string;
	email: string|null;
	created_at: string,
	first_name: string|null,
	last_name: string|null,
	phone: string|null,
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
	first_name: string|null;
	last_name: string|null;
	company: string|null;
	address_line_1: string|null;
	address_line_2: string|null;
	city: string|null;
	state: string|null;
	country_id: number|null;
	zip: string|null;
	phone: string|null;
	created_at: string;
}

export enum TDiscountType {
	fixed = 'fixed',
	percent = 'percent'
}