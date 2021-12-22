"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TGetProductsInStock = void 0;
const utils_1 = require("../utils");
class CatalogApi {
    constructor(client) {
        this.client = client;
    }
    getProducts(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { headers, data: products } = yield this.client.createRequest().get('/catalog/products', { params });
            const pagination = (0, utils_1.extractPaginationFromHeaders)(headers);
            return { products, pagination };
        });
    }
    getCategoryTree(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.client.createRequest().get('/catalog/categories/tree', { params });
            return data;
        });
    }
    getCategoryItem(slugOrId, params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!slugOrId)
                return null;
            const { data } = yield this.client.createRequest().get(`/catalog/categories/item/${slugOrId}`, { params });
            return data;
        });
    }
    getFlatCategories(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.client.createRequest().get('/catalog/categories/flat', { params });
            return data;
        });
    }
    getCategoryParents(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.client.createRequest().get('/catalog/categories/parents', { params: { category: categoryId } });
            return data;
        });
    }
}
exports.default = CatalogApi;
var TGetProductsInStock;
(function (TGetProductsInStock) {
    TGetProductsInStock["inStock"] = "1";
    TGetProductsInStock["outOfStock"] = "0";
})(TGetProductsInStock = exports.TGetProductsInStock || (exports.TGetProductsInStock = {}));
