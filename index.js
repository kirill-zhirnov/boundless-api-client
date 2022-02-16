"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoundlessThumb = exports.BoundlessClient = void 0;
var client_1 = require("./client");
Object.defineProperty(exports, "BoundlessClient", { enumerable: true, get: function () { return client_1.BoundlessClient; } });
var thumb_1 = require("./thumb");
Object.defineProperty(exports, "BoundlessThumb", { enumerable: true, get: function () { return thumb_1.BoundlessThumb; } });
//Types exports:
__exportStar(require("./types/catalog/filter"), exports);
__exportStar(require("./types/catalog/product"), exports);
__exportStar(require("./types/catalog/category"), exports);
__exportStar(require("./types/catalog/characteristic"), exports);
__exportStar(require("./types/catalog/variant"), exports);
__exportStar(require("./types/catalog/inventoryItem"), exports);
__exportStar(require("./types/catalog/label"), exports);
__exportStar(require("./types/orders/cart"), exports);
__exportStar(require("./types/orders/checkout"), exports);
__exportStar(require("./types/orders/orders"), exports);
__exportStar(require("./types/orders/payment"), exports);
__exportStar(require("./types/settings"), exports);
__exportStar(require("./types/customer"), exports);
__exportStar(require("./endpoints/catalog"), exports); // FIXME organize exports
__exportStar(require("./endpoints/cart"), exports);
__exportStar(require("./endpoints/checkout"), exports);
__exportStar(require("./endpoints/customer"), exports);
