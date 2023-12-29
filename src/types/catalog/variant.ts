import {IVariantCharacteristic} from './characteristic';
import {IItemSize} from './inventoryItem';
import {IFinalPrice} from './prices';

export interface IVariant {
	variant_id: number;
	product_id: number;
	sku: string | null;
	cases: number[];
	created_at: string;
	size: IItemSize;
	title: string;
	in_stock: boolean;
	prices: IFinalPrice[];
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

export interface IExtendedVariants {
	characteristics: IVariantCharacteristic[],
	combinations: IVariantCombination,
	idCombinations: IVariantIdCombinations,
	list: IVariant[];
}

export interface IVariantCombination {
	[variantId: string | number]: string[];
}

export interface IVariantIdCombinations {
	[variantId: string | number]: {[characteristicId: string | number]: number};
}