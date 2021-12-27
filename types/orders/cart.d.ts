export interface ICartInfo {
    id: string;
    created_at: string;
    total: ICartTotal;
}
export interface ICartTotal {
    qty: number;
    total: number | string;
}
export interface ICart {
    cart: ICartInfo;
    items: ICartItem[];
}
export interface ICartItem {
}
