export declare enum TPaymentGatewayAlias {
    cashOnDelivery = "cashOnDelivery",
    paypal = "paypal"
}
export interface IPaymentMethod {
    payment_method_id: number;
    title: string;
    for_all_delivery: boolean;
    mark_up: string;
    sort: number;
    gateway_alias: TPaymentGatewayAlias;
}
export interface ICheckoutPaymentPageData {
    paymentMethods: IPaymentMethod[];
}
export interface ICheckoutPostPaymentPageData {
    order_id: string;
    payment_method_id: number;
}
