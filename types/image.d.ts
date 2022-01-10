export interface IImage {
    image_id: number;
    path: string;
    is_default: boolean;
    description: string | null;
    alt: string | null;
    tags: IImageTag[] | null;
}
export interface IImageShort {
    path: string;
    width: number;
    height: number;
}
export interface IImageItem {
    image_id: number;
    name: string;
    size: number;
    path: string;
    width: number;
    height: number;
    used_in: string[];
    created_at: string;
    deleted_at: string | null;
    mime_type: string | null;
}
export interface IProductImage {
    product_image_id: number;
    image_id: number;
    is_default: boolean;
    sort: number;
    description: string | null;
    alt: string | null;
    image: IImageItem;
    tags: IImageTag[] | null;
}
export interface IImageTag {
    image_tag_id: number;
    title: string;
}
export declare enum TThumbMode {
    scale = "scale"
}
export declare enum TThumbQuality {
    low = "low",
    normal = "normal",
    high = "high"
}
export declare enum TThumbRatio {
    '1-1' = "1-1",
    '2-3' = "2-3",
    '3-2' = "3-2",
    '4-5' = "4-5",
    '5-4' = "5-4",
    '3-4' = "3-4",
    '4-3' = "4-3",
    '16-9' = "16-9",
    '9-16' = "9-16"
}
