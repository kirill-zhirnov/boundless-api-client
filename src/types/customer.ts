export interface IRegisterCustomerData {
	email: string;
	password: string;
	re_password: string;
	first_name?: string;
	last_name: string;
	private_comment?: string;
	receive_marketing_info?: '1';
	custom_attrs?: {
		[key: string]: any
	}
}