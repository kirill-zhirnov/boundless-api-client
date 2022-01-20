import { TPublishingStatus } from '../common';
import { IImageShort } from '../image';
import { ILabel } from './label';
import { IVwItemProduct } from './product';
import { IVariant } from './variant';
export interface IItemPrice {
    item_price_id: number;
    price_id: number;
    basic_price: string | null;
    final_price: string | null;
    discount_amount: string | number | null;
    discount_percent: string | number | null;
}
export interface IVwItem {
    item_id: number;
    type: 'product' | 'variant';
    track_inventory: boolean;
    available_qty: number;
    reserved_qty: number;
    product_id: number;
    variant_id: number | null;
    custom_item_id: number | null;
    status: TPublishingStatus;
    deleted_at: string | null;
    product: IVwItemProduct;
    commodity_group: IVwItemCommodityGroup;
    image: IImageShort | null;
    prices: IVwItemPrice[];
    labels: ILabel[];
    variant?: Omit<IVariant, 'product_id' | 'created_at' | 'inventoryItem'>;
}
export interface IVwItemCommodityGroup {
    group_id: number;
    physical_products: boolean;
    title: string;
    trackInventory: boolean;
}
export interface IVwItemPrice {
    point_id: number;
    price_id: number;
    alias: string;
    currency_id: number;
    currency_alias: string;
    value: number | null;
    min: number | null;
    max: number | null;
    is_auto_generated: boolean;
    old: number | null;
    old_min: number | null;
    old_max: number | null;
}
export interface IItemSize {
    width?: number | string;
    height?: number | string;
    length?: number | string;
    weight?: number | string;
}
