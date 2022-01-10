import {IVariantCharacteristic} from './characteristic';
import {IItemSize} from './item';

export interface IVariant {
	variant_id: number;
	product_id: number;
	sku: string | null;
	cases: number[];
	created_at: string;
	size: IItemSize;
	title: string;
	inventoryItem: IInventoryItem;
}

export interface IInventoryItem {
	item_id: number;
	product_id: number | null;
	variant_id: number;
	available_qty: number;
	reserved_qty: number;
	custom_item_id: number | null;
}

export interface IProductVariant {
	variant_id: number;
	sku: string | null;
	title: string;
	price: string;
	price_old: string | null;
	item_id: number;
	track_inventory: boolean;
	available_qty: number;
	reserved_qty: number;
	in_stock: boolean;
}

export interface IExtendedVariants {
	characteristics: IVariantCharacteristic[],
	combinations: IVariantCombination,
	idCombinations: IVariantIdCombinations,
	list: IProductVariant[];
}

export interface IVariantCombination {
	[key: string | number]: string[];
}

export interface IVariantIdCombinations {
	[key: string | number]: {[key: string | number]: number};
}