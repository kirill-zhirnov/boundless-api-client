import { ILabel } from './label';
import { IImage, IImageItem, IProductImage } from '../image';
import { TPublishingStatus } from '../common';
import { ICategory, IProductCategoryRels } from './category';
import { INonVariantCaracteristic } from './characteristic';
import { IExtendedVariants } from './variant';
import { IItemSize } from './item';
export interface IProduct {
    product_id: number;
    title: string;
    sku?: string | null;
    url_key?: string | null;
    has_variants: boolean;
    item_id: number;
    commodity_group?: IProductCommodityGroup | null;
    manufacturer_id?: number | null;
    manufacturer: IProductManufacturer | null;
    price_id?: number | null;
    price_alias?: string;
    point_id: number;
    price: IProductPrice | null;
    props: IProductProps | null;
    default_category: IProductCategory | null;
    images: IImage[] | null;
    labels: ILabel[] | null;
    sort_price: string | number | null;
    sort_in_stock: number | null;
    status: TPublishingStatus;
    deleted_at: string | null;
    in_stock: boolean;
}
export interface IProductCommodityGroup {
    group_id: number;
    title: string;
    type: string;
    track_inventory: boolean;
}
export interface IProductManufacturer {
    manufacturer_id: number;
    title: string;
    url_key?: string | null;
    image?: string | null;
}
export interface IProductPrice {
    value: number | null;
    min: number | null;
    max: number | null;
    old: number | null;
    old_min: number | null;
    old_max: number | null;
    currency_alias: string | null;
}
export interface IProductProps {
    available_qty: number | null;
    country_of_origin: number | null;
    extra: {
        [key: string]: any;
    } | null;
    size: IItemSize | null;
}
export declare type IProductCategory = Pick<ICategory, 'category_id' | 'title' | 'url_key'>;
export interface ICartProduct {
    product_id: number;
    sku: string | null;
    manufacturer_id: number | null;
    has_variants: boolean;
    group_id: number;
    created_at: string;
    deleted_at: string | null;
    external_id: number | string | null;
    status: TPublishingStatus;
    created_by: number | null;
    text: IProductText;
    extendedVariants: IExtendedVariants;
}
export interface IProductText {
    product_id: number;
    title: string;
    custom_title: string | null;
    custom_header: string | null;
    meta_description: string | null;
    url_key: string | null;
    description: string | null;
}
export interface IVwItemProduct {
    product_id: number;
    sku: string | null;
    has_variants: boolean;
    title: string;
    url_key: string | null;
    default_category_id: number;
    manufacturer_id: number | null;
}
export interface IProductItemManufacturer {
    manufacturer_id: number;
    created_at: string;
    deleted_at: string | null;
    image_id: number;
    status: TPublishingStatus;
    created_by: number | null;
    image: IImageItem;
    text: IManufacturerText;
}
export interface IManufacturerText {
    manufacturer_id: number;
    title: string;
    custom_title: string | null;
    custom_header: string | null;
    meta_description: string | null;
    url_key: string | null;
    description: string | null;
}
export interface IProductCommodityGroup {
    group_id: number;
    created_at: string;
    deleted_at: string | null;
    is_default: boolean;
    physical_products: boolean;
    title: string;
    trackInventory: boolean;
}
export interface IProductItem {
    product_id: number;
    sku: string | null;
    manufacturer_id: number | null;
    group_id: number;
    created_at: string;
    deleted_at: string | null;
    has_variants: boolean;
    external_id: number | string | null;
    status: TPublishingStatus;
    created_by: number | null;
    price: IProductPrice | null;
    in_stock: boolean;
    item_id: number;
    text: IProductText;
    images: IProductImage[];
    props: IProductItemProps;
    manufacturer: IProductItemManufacturer;
    categoryRels: IProductCategoryRels[];
    commodityGroup: IProductCommodityGroup;
    labels: ILabel[];
    nonVariantCharacteristics: INonVariantCaracteristic[];
    extendedVariants?: IExtendedVariants;
}
export interface IProductItemProps {
    product_id: number;
    available_qty: number;
    reserved_qty: number;
    layout: null;
    country_of_origin: number | null;
    extra: {
        [key: string]: any;
    } | null;
    size: IItemSize | null;
    characteristic: {
        [key: string]: number[] | string;
    };
}
