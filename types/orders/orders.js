"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TDiscountSource = exports.TDiscountType = exports.TAddressType = void 0;
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
