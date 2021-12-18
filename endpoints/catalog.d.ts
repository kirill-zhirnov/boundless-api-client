import { BoundlessClient } from '../client';
import { IProduct } from '../types/catalog/product';
import { ICategory } from '../types/catalog/category';
import { IPagination } from '../types/common';
export default class CatalogApi {
    protected client: BoundlessClient;
    constructor(client: BoundlessClient);
    getProducts(params?: IGetProductsParams): Promise<{
        products: IProduct[];
        pagination: IPagination;
    }>;
    getCategoryTree(params?: IGetCategoryTreeParams): Promise<ICategory[]>;
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
