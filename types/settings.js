"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TCheckoutStep = exports.TCheckoutFieldStatus = exports.TCheckoutAccountPolicy = exports.TCheckoutCustomerName = void 0;
var TCheckoutCustomerName;
(function (TCheckoutCustomerName) {
    TCheckoutCustomerName["first"] = "first";
    TCheckoutCustomerName["last"] = "last";
})(TCheckoutCustomerName = exports.TCheckoutCustomerName || (exports.TCheckoutCustomerName = {}));
var TCheckoutAccountPolicy;
(function (TCheckoutAccountPolicy) {
    TCheckoutAccountPolicy["guestAndLogin"] = "guest-and-login";
    TCheckoutAccountPolicy["guest"] = "guest";
    TCheckoutAccountPolicy["loginRequired"] = "login-required";
})(TCheckoutAccountPolicy = exports.TCheckoutAccountPolicy || (exports.TCheckoutAccountPolicy = {}));
var TCheckoutFieldStatus;
(function (TCheckoutFieldStatus) {
    TCheckoutFieldStatus["optional"] = "optional";
    TCheckoutFieldStatus["required"] = "required";
})(TCheckoutFieldStatus = exports.TCheckoutFieldStatus || (exports.TCheckoutFieldStatus = {}));
var TCheckoutStep;
(function (TCheckoutStep) {
    TCheckoutStep["contactInfo"] = "contact-info";
    TCheckoutStep["shippingAddress"] = "shipping-address";
    TCheckoutStep["shippingMethod"] = "shipping-method";
    TCheckoutStep["paymentMethod"] = "payment-method";
})(TCheckoutStep = exports.TCheckoutStep || (exports.TCheckoutStep = {}));
