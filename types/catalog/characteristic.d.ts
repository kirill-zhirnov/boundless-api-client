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
export interface INonVariantCaracteristic {
    id: number;
    title: string;
    is_folder?: boolean;
    children?: Omit<INonVariantCaracteristic, 'is_folder' | 'children'>[];
    value?: string;
    cases?: [
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
