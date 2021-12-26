import {BoundlessClient} from '../client';
import {IProduct} from '../types/catalog/product';
import {IFilter} from '../types/catalog/filter';
import {ICategory, ICategoryFlatItem, ICategoryItem} from '../types/catalog/category';
import {extractPaginationFromHeaders} from '../utils';
import {IPagination} from '../types/common';
import {IProductManufacturer} from '../types/catalog/product';
import {ICharacteristic} from '..';

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

		const {data} = await this.client.createRequest().get(`/catalog/categories/item/${slugOrId}`, {params});

		return data;
	}

	async getFlatCategories(params: IGetCategoryFlatParams = {}): Promise<ICategoryFlatItem[]> {
		const {data} = await this.client.createRequest().get('/catalog/categories/flat', {params});

		return data;
	}

	async getCategoryParents(categoryId: number): Promise<ICategoryFlatItem[]> {
		const {data} = await this.client.createRequest().get('/catalog/categories/parents', {params: {category: categoryId}});

		return data;
	}

	async getFilters(params: IGetFiltersParams = {}): Promise<IFilter[]> {
		const {data} = await this.client.createRequest().get('/catalog/filters', {params});

		return data;
	}

	async getFilterFields(request: IFilterFieldsRequest): Promise<IFilterFieldsResponse> {
		const {data} = await this.client.createRequest().post('/catalog/products/filter-fields', request);

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
	with_parents?: 0 | 1;
}

export interface IGetFiltersParams {
	is_default?: 0 | 1;
}

export interface IFilterFieldsRequest {
	filter_fields: IFilterFieldRequest[];
	values: IGetProductsParams;
}

export interface IFilterFieldsResponse {
	filterFields: IFilterFieldProp[];
}

export interface IFilterFieldRequest {
	type: TFilterType,
	characteristic_id?: number;
}

export enum TFilterType {
	price_range =	'price_range',
	manufacturer = 'manufacturer',
	characteristic = 'characteristic'
}

export interface IFilterFieldProp {
	type: TFilterType,
	range?: {
		min: string;
		max: string;
	}
	manufacturers?: (IProductManufacturer & {product_qty: number})[]
	characteristic_id?: number;
	characteristic?: ICharacteristic;
}
