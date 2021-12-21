import {BoundlessClient} from '../client';
import {IProduct} from '../types/catalog/product';
import {ICategory, ICategoryFlatItem, ICategoryItem} from '../types/catalog/category';
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

	async getCategoryItem(slugOrId: number | string, params: IGetCategoryItemParams = {}): Promise<ICategoryItem> {
		if (!slugOrId) return null;

		let data = null;
		try {
			({data} = await this.client.createRequest().get(`/catalog/categories/item/${String(slugOrId)}`, {params}));
		} catch (err) {
			if (err.response.status !== 404) {
				throw err;
			}
		}

		return data;
	}

	async getFlatCategories(params: IGetCategoryFlatParams = {}): Promise<ICategoryFlatItem[]> {
		const {data} = await this.client.createRequest().get('/catalog/categories/flat', {params});

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

export interface IGetCategoryFlatParams {
	menu?: 'category';
	calc_products?: 0 | 1;
	calc_children?: 0 | 1;
	parent?: number;
	brand?: number[];
	sort?: string;
}

export interface IGetCategoryItemParams {
	with_children?: 0 | 1;
	with_siblings?: 0 | 1;
}