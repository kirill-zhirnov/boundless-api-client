export interface ICharacteristic {
    characteristic_id: number;
    parent_id: number;
    group_id: number;
    type: TCharacteristicType;
    alias: string | null;
    sort: number;
    title: string;
    cases?: ICharacteristicCase[];
}
export interface INonVariantCaracteristic {
    characteristic_id: number;
    title: string;
    is_folder?: boolean;
    children?: INonVariantChild[];
    value?: string;
}
export interface INonVariantChild {
    characteristic_id: number;
    title: string;
    cases: [
        {
            id: number;
            value: string;
        }
    ];
}
export interface IVariantCharacteristic {
    id: number;
    title: string;
    cases: [
        {
            id: number;
            title: string;
        }
    ];
}
export declare enum TCharacteristicType {
    checkbox = "checkbox",
    radio = "radio",
    select = "select",
    text = "text",
    textarea = "textarea"
}
export interface ICharacteristicCase {
    case_id: number;
    characteristic_id: number;
    sort: number;
    title: string;
    products_qty: number;
}
