import {ICustomer} from './customer';

export interface IVWCountry {
	country_id: number,
	code: string,
	title: string
}

export interface IDelivery {
	delivery_id: number;
	title: string;
	alias: string | null;
	shipping_id: number | null;
	shipping_config: IShippingConfig;
	free_shipping_from: string | null;
	calc_method: TDeliveryCalcMethod;
	created_at: string;
	shipping: IShippingData | null;
}

export interface ICheckoutShippingPageData {
	shippingAddress: IAddress|null,
	requiredBillingAddress: boolean,
	person: ICustomer;
	options: {
		country: IVWCountry[];
	};
}

export interface IShippingData {
	shipping_id: number;
	shipping_title: string;
	alias: string;
	settings: null; //FIXME
}

export interface IShippingConfig {
	address?: string;
	price?: number;
}

export enum TDeliveryCalcMethod {
	byShippingService = 'byShippingService',
	single = 'single'
}

export interface IAddress {
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

export enum TAddressType {
	shipping = 'shipping',
	billing = 'billing'
}