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
class OrdersApi {
    constructor(client) {
        this.client = client;
    }
    retrieveCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.client.createRequest().post('/orders/cart/retrieve');
            return data;
        });
    }
    getCartInfo(cartId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!cartId)
                throw new Error('Cart ID should be specified');
            const { data } = yield this.client.createRequest().get(`/orders/cart/${cartId}/total`);
            return data;
        });
    }
    getCartItems(cartId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!cartId)
                throw new Error('Cart ID should be specified');
            const { data } = yield this.client.createRequest().get(`/orders/cart/${cartId}/items`);
            return data;
        });
    }
}
exports.default = OrdersApi;
