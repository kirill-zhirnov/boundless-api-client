import {BoundlessClient} from '../client';
import {createGetStr, extractPaginationFromHeaders} from '../utils';
import {IAdminOrderInList} from '../types/orders/orders';
import {IPagination} from '../types/common';

export default class AdminOrderApi {
	constructor(protected client: BoundlessClient) {
	}

	async getOrders(params: IGetOrdersParams = {}): Promise<{orders: IAdminOrderInList[], pagination: IPagination}> {
		const {headers, data: orders} = await this.client.createRequest().get(`/orders/admin/orders?${createGetStr({...params})}`);
		const pagination = extractPaginationFromHeaders(headers as {[key: string]: string});

		return {orders, pagination};
	}

	async updateOrder(uuId: string, request: IUpdateOrderRequest): Promise<IAdminOrderInList> {
		const {data: order} = await this.client.createRequest().patch(`/orders/admin/order/${uuId}`, request);

		return order;
	}
}

export interface IUpdateOrderRequest {
	status_id?: number,
	customer_id?: string,
	is_paid?: boolean,
	payment_method_id?: number,
	internal_comment?: string,
	delivery_id?: number,
	shipping_address?: {[key: string]: any},
	billing_address?: {[key: string]: any},
	billing_address_the_same?: boolean,
	custom_attrs?: {[key: string]: any}
}

export interface IGetOrdersParams {
	created_at?: string;
	total_price?: string;
	status_id?: number;
	customer_id?: string;
}