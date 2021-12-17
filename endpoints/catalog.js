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
class CatalogApi {
    constructor(client) {
        this.client = client;
    }
    getProducts(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.client.createRequest().get('/catalog/products', { params });
            return data;
        });
    }
    getCategoryTree(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.client.createRequest().get('/catalog/categories/tree', { params });
            return data;
        });
    }
}
exports.default = CatalogApi;
