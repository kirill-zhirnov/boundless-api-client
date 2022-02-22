"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOrderStockLocation = exports.TDiscountSource = exports.TDiscountType = exports.TAddressType = exports.TShippingAlias = exports.TDeliveryCalcMethod = void 0;
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
    TAddressType["billing"] = "billing";
    TAddressType["shipping"] = "shipping";
})(TAddressType = exports.TAddressType || (exports.TAddressType = {}));
var TDiscountType;
(function (TDiscountType) {
    TDiscountType["fixed"] = "fixed";
    TDiscountType["percent"] = "percent";
})(TDiscountType = exports.TDiscountType || (exports.TDiscountType = {}));
var TDiscountSource;
(function (TDiscountSource) {
    TDiscountSource["manual"] = "manual";
    TDiscountSource["coupon"] = "coupon";
})(TDiscountSource = exports.TDiscountSource || (exports.TDiscountSource = {}));
var TOrderStockLocation;
(function (TOrderStockLocation) {
    TOrderStockLocation["inside"] = "inside";
    TOrderStockLocation["outside"] = "outside";
    TOrderStockLocation["basket"] = "basket";
})(TOrderStockLocation = exports.TOrderStockLocation || (exports.TOrderStockLocation = {}));
