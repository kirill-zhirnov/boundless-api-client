"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TAddressType = exports.TShippingAlias = exports.TDeliveryCalcMethod = void 0;
var TDeliveryCalcMethod;
(function (TDeliveryCalcMethod) {
    TDeliveryCalcMethod["byShippingService"] = "byShippingService";
    TDeliveryCalcMethod["byOwnRates"] = "byOwnRates";
    TDeliveryCalcMethod["single"] = "single";
})(TDeliveryCalcMethod = exports.TDeliveryCalcMethod || (exports.TDeliveryCalcMethod = {}));
var TShippingAlias;
(function (TShippingAlias) {
    TShippingAlias["selfPickup"] = "selfPickup";
})(TShippingAlias = exports.TShippingAlias || (exports.TShippingAlias = {}));
var TAddressType;
(function (TAddressType) {
    TAddressType["shipping"] = "shipping";
    TAddressType["billing"] = "billing";
})(TAddressType = exports.TAddressType || (exports.TAddressType = {}));
