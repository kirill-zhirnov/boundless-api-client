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
class CheckoutApi {
    constructor(client) {
        this.client = client;
    }
    init(cart_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.client.createRequest().post('/orders/checkout/init', {
                cart_id
            });
            return data;
        });
    }
    saveContactsData(contactsData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.client.createRequest().post('/orders/checkout/contact', contactsData);
            return data;
        });
    }
    getPaymentPage(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.client.createRequest().get(`/orders/checkout/payment/${orderId}`);
            return data;
        });
    }
    setPaymentMethod(paymentsData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.client.createRequest().post('/orders/checkout/payment/set', paymentsData);
            return data;
        });
    }
}
exports.default = CheckoutApi;
