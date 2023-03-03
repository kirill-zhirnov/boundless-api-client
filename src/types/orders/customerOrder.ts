import {IAddressFields, TAddressType} from '../delivery';

export interface ISetAddressesData {
	order_id: string,
	required_addresses?: TAddressType[],
	shipping_address?: IAddressFields,
	billing_address_the_same?: boolean,
	billing_address?: IAddressFields
}