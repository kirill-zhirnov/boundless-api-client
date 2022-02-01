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

export enum TCheckoutStep {
	contactInfo = 'contact-info',
	shippingAddress = 'shipping-address',
	shippingMethod = 'shipping-method',
	paymentMethod = 'payment-method',
}

export interface ICheckoutStepper {
	steps: TCheckoutStep[],
	filledSteps: TCheckoutStep[],
	nextStep: TCheckoutStep,
	summaryByStep?: {
		[K in TCheckoutStep]: string
	}
}

export interface ICheckoutPageSettings {
	logo: string|null;
	contactFields: {
		email: {
			show: boolean;
			required: boolean;
		},
		phone: {
			show: boolean;
			required: boolean;
		}
	},
	accountPolicy: TCheckoutAccountPolicy,
	customerNameRequired: TCheckoutCustomerName[],
	addressLine2: TCheckoutFieldStatus,
	companyName: TCheckoutFieldStatus,
	footerLinks: {title: string, url: string}[],
	loggedInCustomer: null|{},
	hasCouponCampaigns: boolean,
	needShipping: boolean,
	stepper: ICheckoutStepper
}