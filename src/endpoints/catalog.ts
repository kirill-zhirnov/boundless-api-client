import {BoundlessClient} from '../client';
import {IProduct} from '../types/catalog/product';
import {ICategory} from '../types/catalog/category';

export default class CatalogApi {
	constructor(protected client: BoundlessClient) {}

	async getProducts(params: GetProductsParams = {}): Promise<IProduct[]> {
		const {data} = await this.client.createRequest().get('/catalog/products', {params});

		return data;
	}

	async getCategoryTree(params: GetCategoryTreeParams = {}): Promise<ICategory[]> {
		const {data} = await this.client.createRequest().get('/catalog/categories/tree', {params});

		return data;
	}
}

export interface GetProductsParams {
	product?: number[];
	category?: number[];
	collection?: number[];
	props?: {[key: number]: string|number|string[]}
	in_stock?: 0|1; //0 - false, 1 - true
	price_min?: number;
	price_max?: number;
	brand?: number[];
	page?: number;
	'per-page'?: number;
	sort?: [string, 'asc'|'desc'];
}

export interface GetCategoryTreeParams {
	menu?: 'category';
	calc_products?: 0|1;
}