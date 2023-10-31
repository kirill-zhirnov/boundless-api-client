export interface ICharacteristic {
	id: number;
	title: string;
	parent_id: number;
	group_id: number;
	type: TCharacteristicType;
	alias: string;
	sort: number;
	help: string | null;
	cases?: ICharacteristicCase[]
}

export interface IVariantCharacteristic {
	id: number;
	title: string;
	cases: [
		{id: number; title: string;}
	]
}

export interface IProductAttribute {
	id: number;
	title: string;
	alias: string;
	type: TCharacteristicType;
	is_folder?: boolean;
	children?: Omit<IProductAttribute, 'is_folder' | 'children'>[];
	value?: string;
	cases?: [
		{id: number; title: string;}
	]
}

export enum TCharacteristicType {
	checkbox = 'checkbox',
	radio = 'radio',
	select = 'select',
	text = 'text',
	textarea = 'textarea',
	wysiwyg = 'wysiwyg'
}

export interface ICharacteristicCase {
	case_id: number;
	title: string;
	sort: number;
	products_qty: number;
}
