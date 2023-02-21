import {IVWCountry} from '../delivery';
import {ICartItem} from './cart';
import {IOrder} from './orders';
import {ICheckoutPageSettings, ILocaleSettings, ISystemTax} from '../settings';
import {ICheckoutStepper} from './checkout';
import {ICustomer} from '../customer';
import {ICurrency} from '../system';
import {ITotal} from '../total';

export interface ICheckoutInitData {
	items: ICartItem[],
	order: IOrder,
	settings: ICheckoutPageSettings,
	currency: ICurrency,
	localeSettings: ILocaleSettings,
	taxSettings: ISystemTax,
	loggedInCustomer: ICustomer|null,
	hasCouponCampaigns: boolean,
	needShipping: boolean,
	stepper: ICheckoutStepper,
	total: ITotal
}

export enum TPaymentGatewayAlias {
	cashOnDelivery = 'cashOnDelivery',
	paypal = 'paypal'
}

export interface IPaymentMethod {
	payment_method_id: number;
	title: string;
	for_all_delivery: boolean;
	mark_up: string;
	sort: number;
	gateway_alias: TPaymentGatewayAlias;
}

export interface ICheckoutPaymentPageData {
	paymentMethods: IPaymentMethod[],
	requiredBillingAddress: boolean,
	countries: IVWCountry[]
}

export interface ICheckoutPostPaymentPageData {
	order_id: string;
	payment_method_id: number;
	payment_address_the_same?: string;
	first_name?: string;
	last_name?: string;
	company?: string;
	address_line_1?: string;
	address_line_2?: string;
	city?: string;
	state?: string;
	country_id?: number | string;
	zip?: string;
}