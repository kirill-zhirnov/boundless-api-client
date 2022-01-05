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
            const { data } = yield this.client.createRequest().get(`/orders/cart/${cartId}/total`);
            return data;
        });
    }
    getCartItems(cartId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.client.createRequest().get(`/orders/cart/${cartId}/items`);
            return data;
        });
    }
    addItemToCart(cartId, itemId, qty) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.client.createRequest().post('/orders/cart/add', {
                cart_id: cartId,
                item_id: itemId,
                qty
            });
            return data;
        });
    }
    removeFromCart(cartId, items) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.client.createRequest().post('/orders/cart/rm-items', {
                cart_id: cartId,
                items,
            });
            return data;
        });
    }
    setCartItemsQty(cartId, items) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.client.createRequest().post('/orders/cart/set-qty', {
                cart_id: cartId,
                items,
            });
            return data;
        });
    }
    addCustomItemToCart(cartId, title, price, qty) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.client.createRequest().post('/orders/cart/add-custom-item', {
                cart_id: cartId,
                price,
                title,
                qty
            });
            return data;
        });
    }
}
exports.default = OrdersApi;
