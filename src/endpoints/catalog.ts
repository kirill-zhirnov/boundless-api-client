import {BoundlessClient} from '../client';
import {IProduct, IProductItem} from '../types/catalog/product';
import {IFilter, TFilterFieldType} from '../types/catalog/filter';
import {ICategory, ICategoryFlatItem, ICategoryItem} from '../types/catalog/category';
import {createGetStr, extractPaginationFromHeaders} from '../utils';
import {IPagination} from '../types/common';
import {IProductManufacturer} from '../types/catalog/product';
import {ICharacteristic, TAdapterExtraRequestInit} from '..';

export default class CatalogApi {
	constructor(protected client: BoundlessClient) { }

	async getProducts(params: IGetProductsParams = {}, extraRequest: TAdapterExtraRequestInit = {}): Promise<{products: IProduct[], pagination: IPagination}> {
		const {headers, data: products} = await this.client.createRequest({extraRequest})
			.get(`/catalog/products?${createGetStr({...params})}`);
		const pagination = extractPaginationFromHeaders(headers as {[key: string]: string});

		return {products, pagination};
	}

	async getCategoryTree(params: IGetCategoryTreeParams = {}, extraRequest: TAdapterExtraRequestInit = {}): Promise<ICategory[]> {
		const {data} = await this.client.createRequest({extraRequest})
			.get('/catalog/categories/tree', {params});

		return data;
	}

	async getCategoryItem(slugOrId: number | string, params: IGetCategoryItemParams = {}, extraRequest: TAdapterExtraRequestInit = {}): Promise<ICategoryItem> {
		const {data} = await this.client.createRequest({extraRequest})
			.get(`/catalog/categories/item/${slugOrId}`, {params});

		return data;
	}

	async getFlatCategories(params: IGetCategoryFlatParams = {}, extraRequest: TAdapterExtraRequestInit = {}): Promise<ICategoryFlatItem[]> {
		const {data} = await this.client.createRequest({extraRequest})
			.get('/catalog/categories/flat', {params});

		return data;
	}

	async getCategoryParents(categoryId: number, extraRequest: TAdapterExtraRequestInit = {}): Promise<ICategoryFlatItem[]> {
		const {data} = await this.client.createRequest({extraRequest})
			.get('/catalog/categories/parents', {params: {category: categoryId}});

		return data;
	}

	async getFilters(params: IGetFiltersParams = {}, extraRequest: TAdapterExtraRequestInit = {}): Promise<IFilter[]> {
		const {data} = await this.client.createRequest({extraRequest})
			.get('/catalog/filters', {params});

		return data;
	}

	async getFiltersByCategory(categoryId: number, extraRequest: TAdapterExtraRequestInit = {}): Promise<IFilter[]> {
		const {data} = await this.client.createRequest({extraRequest})
			.get(`/catalog/filters/by-category/${categoryId}`);

		return data;
	}

	async getFilterFieldsRanges(request: IFilterFieldsRequest, extraRequest: TAdapterExtraRequestInit = {}): Promise<IFilterFieldsRangesResponse> {
		const {data} = await this.client.createRequest({extraRequest})
			.post('/catalog/products/filter-fields-ranges', request);

		return data;
	}

	async getProduct(slugOrId: number | string, extraRequest: TAdapterExtraRequestInit = {}): Promise<IProductItem> {
		const {data} = await this.client.createRequest({extraRequest})
			.get(`/catalog/products/item/${slugOrId}`);

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
	collection?: number[]|string[];
	props?: {[key: number]: string | number | (string | number)[]};
	in_stock?: TGetProductsInStock;
	price_min?: number;
	price_max?: number;
	brand?: number[];
	text_search?: string;
	page?: number;
	cross_sell_category?: 'related' | 'similar';
	cross_sell_product?: number;
	removed?: 'all' | 'removed';
	published_status?: 'all' | 'hidden';
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
	with_children?: string | number;
	with_siblings?: string | number;
	with_parents?: string | number;
	with_filter?: string | number;
}

export interface IGetFiltersParams {
	is_default?: 0 | 1;
}

export interface IFilterFieldsRequest {
	filter_fields: IFilterFieldRequest[];
	values?: IGetProductsParams;
}

export interface IFilterFieldsRangesResponse {
	ranges: IFilterFieldRange[];
	totalProducts: number;
}

export interface IFilterFieldRequest {
	type: TFilterFieldType,
	characteristic_id?: number | string;
}

export interface IFilterFieldRange {
	type: TFilterFieldType,
	range?: {
		min: string;
		max: string;
	}
	manufacturers?: (IProductManufacturer & {products_qty: number})[]
	characteristic_id?: number;
	characteristic?: ICharacteristic;
}
