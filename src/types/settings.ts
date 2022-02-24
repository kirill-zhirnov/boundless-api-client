import {ICustomer} from './customer';

export enum TCheckoutCustomerName {
	first = 'first',
	last = 'last',
}

export enum TCheckoutAccountPolicy {
	guestAndLogin = 'guest-and-login',
	guest = 'guest',
	loginRequired = 'login-required'
}

export enum TCheckoutFieldStatus {
	optional = 'optional',
	required = 'required',
}

export interface ICheckoutSettingsContactFields {
	email: {
		show: boolean;
		required: boolean;
	},
	phone: {
		show: boolean;
		required: boolean;
	}
}

export interface ICheckoutPageSettings {
	logo: string|null;
	contactFields: ICheckoutSettingsContactFields,
	accountPolicy: TCheckoutAccountPolicy,
	customerNameRequired: TCheckoutCustomerName[],
	addressLine2: TCheckoutFieldStatus,
	companyName: TCheckoutFieldStatus,
	footerLinks: {title: string, url: string}[],
	loggedInCustomer: null|ICustomer,
	hasCouponCampaigns: boolean,
	needShipping: boolean,
}