import { BoundlessClient } from '../client';
import { IProduct } from '../types/catalog/product';
import { ICategory } from '../types/catalog/category';
export default class CatalogApi {
    protected client: BoundlessClient;
    constructor(client: BoundlessClient);
    getProducts(params?: GetProductsParams): Promise<IProduct[]>;
    getCategoryTree(params?: GetCategoryTreeParams): Promise<ICategory[]>;
}
export interface GetProductsParams {
    product?: number[];
    category?: number[];
    collection?: number[];
    props?: {
        [key: number]: string | number | string[];
    };
    in_stock?: 0 | 1;
    price_min?: number;
    price_max?: number;
    brand?: number[];
    page?: number;
    'per-page'?: number;
    sort?: [string, 'asc' | 'desc'];
}
export interface GetCategoryTreeParams {
    menu?: 'category';
    calc_products?: 0 | 1;
}
