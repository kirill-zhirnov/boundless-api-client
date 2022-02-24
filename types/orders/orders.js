"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOrderStockLocation = exports.TDiscountSource = exports.TDiscountType = void 0;
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
