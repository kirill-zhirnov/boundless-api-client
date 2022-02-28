"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalCalculator = void 0;
const currency_js_1 = __importDefault(require("currency.js"));
class TotalCalculator {
    constructor() {
        this.itemsList = [];
        this.items = {
            price: 0,
            qty: 0
        };
        this.shipping = {
            price: 0
        };
        this.services = {
            price: 0,
            qty: 0
        };
        this.discounts = [];
        this.paymentMarkUp = 0;
    }
    addItem(id, price, qty) {
        if (this.itemsList.some(el => el.id === id))
            return this;
        this.itemsList.push({
            id,
            price,
            qty
        });
        this.calcTotalForItems();
    }
    changeItem(item) {
        const index = this.itemsList.findIndex(el => el.id === item.id);
        if (index !== -1) {
            Object.assign(this.itemsList[index], item);
            this.calcTotalForItems();
        }
    }
    changeItemPrice(itemId, price) {
        const index = this.itemsList.findIndex(el => el.id === itemId);
        if (index !== -1) {
            this.itemsList[index].price = price;
            this.calcTotalForItems();
        }
    }
    changeItemQty(itemId, qty) {
        const index = this.itemsList.findIndex(el => el.id === itemId);
        if (index !== -1) {
            this.itemsList[index].qty = qty;
            this.calcTotalForItems();
        }
    }
    rmItem(id) {
        this.itemsList = this.itemsList.filter(el => el.id !== id);
        this.calcTotalForItems();
    }
    clearItems() {
        this.itemsList = [];
    }
    setItems(price, qty) {
        this.items = {
            price,
            qty
        };
        return this;
    }
    setShipping(price) {
        this.shipping.price = price;
        return this;
    }
    setServices(price, qty) {
        this.services = {
            price,
            qty
        };
        return this;
    }
    setPaymentMarkUp(val) {
        this.paymentMarkUp = val;
        return this;
    }
    clearDiscounts() {
        this.discounts = [];
    }
    setDiscounts(discounts) {
        discounts.forEach(row => this.addDiscount(row.discount_type, row.value));
        return this;
    }
    addDiscount(type, value) {
        this.discounts.push({
            type,
            value
        });
        return this;
    }
    calcTotalForItems() {
        this.items.price = this.itemsList.reduce((a, b) => a + Number(b.price * b.qty), 0);
        this.items.qty = this.itemsList.reduce((a, b) => a + Number(b.qty), 0);
        return this.items;
    }
    calcTotal() {
        let price = (0, currency_js_1.default)(this.items.price)
            .add(this.shipping.price)
            .add(this.services.price)
            .format();
        let discount = (0, currency_js_1.default)(0).format();
        this.discounts.forEach((row) => {
            switch (row.type) {
                case 'fixed':
                    discount = (0, currency_js_1.default)(discount).add(row.value).format();
                    price = (0, currency_js_1.default)(price).subtract(row.value).format();
                    break;
                case 'percent': {
                    //apply discount only to items, not services:
                    const rowVal = (0, currency_js_1.default)(row.value).divide(100).multiply(this.items.price).format();
                    discount = (0, currency_js_1.default)(discount).add(rowVal).format();
                    price = (0, currency_js_1.default)(price).subtract(rowVal).format();
                    break;
                }
            }
        });
        let paymentMarkUp = (0, currency_js_1.default)(0).format();
        if (this.paymentMarkUp) {
            paymentMarkUp = (0, currency_js_1.default)(price).multiply((0, currency_js_1.default)(this.paymentMarkUp)).divide(100).format();
            price = (0, currency_js_1.default)(price).add(paymentMarkUp).format();
        }
        return {
            price,
            discount,
            paymentMarkUp
        };
    }
}
exports.TotalCalculator = TotalCalculator;
