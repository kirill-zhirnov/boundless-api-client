import { BoundlessClient } from '../client';
import { IProduct } from '../types/catalog/product';
import { IFilter } from '../types/catalog/filter';
import { ICategory, ICategoryFlatItem, ICategoryItem } from '../types/catalog/category';
import { IPagination } from '../types/common';
import { IProductManufacturer } from '../types/catalog/product';
import { ICharacteristic } from '..';
export default class CatalogApi {
    protected client: BoundlessClient;
    constructor(client: BoundlessClient);
    getProducts(params?: IGetProductsParams): Promise<{
        products: IProduct[];
        pagination: IPagination;
    }>;
    getCategoryTree(params?: IGetCategoryTreeParams): Promise<ICategory[]>;
    getCategoryItem(slugOrId: number | string, params?: IGetCategoryItemParams): Promise<ICategoryItem>;
    getFlatCategories(params?: IGetCategoryFlatParams): Promise<ICategoryFlatItem[]>;
    getCategoryParents(categoryId: number): Promise<ICategoryFlatItem[]>;
    getFilters(params?: IGetFiltersParams): Promise<IFilter[]>;
    getFilterFieldsRanges(request: IFilterFieldsRequest): Promise<IFilterFieldsRangesResponse>;
}
export declare enum TGetProductsInStock {
    inStock = "1",
    outOfStock = "0"
}
export interface IGetProductsParams {
    product?: (string | number)[];
    category?: (number | string)[];
    collection?: number[];
    props?: {
        [key: number]: string | number | (string | number)[];
    };
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
export interface IFilterFieldsRangesResponse {
    ranges: IFilterFieldRange[];
}
export interface IFilterFieldRequest {
    type: TFilterType;
    characteristic_id?: number;
}
export declare enum TFilterType {
    price_range = "price_range",
    manufacturer = "manufacturer",
    characteristic = "characteristic"
}
export interface IFilterFieldRange {
    type: TFilterType;
    range?: {
        min: string;
        max: string;
    };
    manufacturers?: (IProductManufacturer & {
        product_qty: number;
    })[];
    characteristic_id?: number;
    characteristic?: ICharacteristic;
}
