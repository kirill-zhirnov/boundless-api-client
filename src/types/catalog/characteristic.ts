export interface ICharacteristic {
	characteristic_id: number;
	parent_id: number;
	group_id: number;
	type: TCharacteristicType;
	alias: string|null;
	sort: number;
	title: string;
}

export enum TCharacteristicType {
	checkbox = 'checkbox',
	radio = 'radio',
	select = 'select',
	text = 'text',
	textarea = 'textarea'
}