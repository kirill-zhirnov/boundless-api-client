export interface IVariant {
	variant_id: number;
	product_id: number;
	sku: string | null;
	cases: number[];
	created_at: string;
	size: any[]; //FIXME
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