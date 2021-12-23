import {ICharacteristic} from './characteristic';

export interface IFilter {
	filter_id: number;
	title: string;
	is_default: boolean;
	created_at: string;
	fields: IFilterField[];
}

interface IFilterField {
	field_id: number;
	filter_id: number;
	type: IFilterFieldType;
	characteristic_id: number | null;
	sort: number;
	characteristic: ICharacteristic | null
}

export enum IFilterFieldType {
	category = 'category', //deprecated
	brand = 'brand',
	price = 'price',
	availability = 'availability',
	characteristic = 'characteristic'
}