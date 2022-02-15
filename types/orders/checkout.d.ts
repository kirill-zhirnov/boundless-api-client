export interface ICheckoutPostContactsData {
    order_id: string;
    phone?: string;
    email?: string;
    receive_marketing_info?: '1';
}
export declare enum TCheckoutStep {
    contactInfo = "contact-info",
    shippingAddress = "shipping-address",
    shippingMethod = "shipping-method",
    paymentMethod = "payment-method",
    thankYou = "thank-you"
}
export interface ICheckoutStepper {
    filledSteps: TCheckoutStep[];
    currentStep: TCheckoutStep;
    steps: TCheckoutStep[];
}
export declare type TCheckoutRedirect = TCheckoutStep | 'url';
