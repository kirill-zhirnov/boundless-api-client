import {TPublishingStatus} from '../common';
import {ICustomer} from '../customer';
import {IPaymentMethod} from './payment';

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
	discounts?: IOrderDiscount[];
	paymentMethod?: IPaymentMethod;
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