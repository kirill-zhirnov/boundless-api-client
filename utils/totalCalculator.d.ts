import { TDiscountType } from '../types/orders/orders';
interface IItem {
    id: number;
    price: number;
    qty: number;
}
interface IItemsTotal {
    price: number;
    qty: number;
}
interface IDiscountRow {
    type: TDiscountType;
    value: number;
}
export declare class TotalCalculator {
    itemsList: IItem[];
    items: IItemsTotal;
    shipping: {
        price: number;
    };
    services: IItemsTotal;
    discounts: IDiscountRow[];
    addItem(id: number, price: number, qty: number): this;
    changeItem(item: IItem): void;
    changeItemPrice(itemId: number, price: number): void;
    changeItemQty(itemId: number, qty: number): void;
    rmItem(id: number): void;
    clearItems(): void;
    setItems(price: number, qty: number): this;
    setShipping(price: number): this;
    setServices(price: number, qty: number): this;
    clearDiscounts(): void;
    setDiscounts(discounts: IDiscountRow[]): this;
    addDiscount(type: TDiscountType, value: number): this;
    calcTotalForItems(): IItemsTotal;
    calcTotal(): {
        price: string;
        discount: string;
    };
}
export {};
