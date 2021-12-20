import {BoundlessClient} from '../client';
import {IProduct} from '../types/catalog/product';
import {ICategory, ICategoryItem} from '../types/catalog/category';
import {extractPaginationFromHeaders} from '../utils';
import {IPagination} from '../types/common';

export default class CatalogApi {
	constructor(protected client: BoundlessClient) { }

	async getProducts(params: IGetProductsParams = {}): Promise<{products: IProduct[], pagination: IPagination}> {
		const {headers, data: products} = await this.client.createRequest().get('/catalog/products', {params});
		const pagination = extractPaginationFromHeaders(headers);

		return {products, pagination};
	}

	async getCategoryTree(params: IGetCategoryTreeParams = {}): Promise<ICategory[]> {
		const {data} = await this.client.createRequest().get('/catalog/categories/tree', {params});

		return data;
	}

	async getCategoryItem(slugOrId: string | number): Promise<ICategoryItem> {
		let data = null;
		try {
			({data} = await this.client.createRequest().get(`/catalog/categories/item/${String(slugOrId)}`));
		} catch (err) {
			if (err.response.status !== 404) {
				throw err;
			}
		}

		return data;
	}
}

export enum TGetProductsInStock {
	inStock = '1',
	outOfStock = '0'
}

export interface IGetProductsParams {
	product?: (string | number)[];
	category?: (number | string)[];
	collection?: number[];
	props?: {[key: number]: string | number | (string | number)[]};
	in_stock?: TGetProductsInStock;
	price_min?: number;
	price_max?: number;
	brand?: number[];
	page?: number;
	'per-page'?: number;
	sort?: string;
}

export interface IGetCategoryTreeParams {
	menu?: 'category';
	calc_products?: 0 | 1;
}