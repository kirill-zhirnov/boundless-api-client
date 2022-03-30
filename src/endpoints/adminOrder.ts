import {BoundlessClient} from '../client';
import {createGetStr, extractPaginationFromHeaders} from '../utils';
import {IAdminOrderInList} from '../types/orders/orders';
import {IPagination} from '../types/common';

export default class AdminOrderApi {
	constructor(protected client: BoundlessClient) {
	}

	async getOrders(params: IGetOrdersParams): Promise<{orders: IAdminOrderInList[], pagination: IPagination}> {
		const {headers, data: orders} = await this.client.createRequest().get(`/orders/admin/orders?${createGetStr({...params})}`);
		const pagination = extractPaginationFromHeaders(headers);

		return {orders, pagination};
	}
}

export interface IGetOrdersParams {
	created_at?: string;
	total_price?: string;
	status_id?: number;
	customer_id?: string;
}