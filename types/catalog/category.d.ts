import { TPublishingStatus } from '../common';
import { IImageItem } from '../image';
import { IFilter } from './filter';
import { IItemSeo } from './product';
export interface ICategory {
    category_id: number;
    parent_id: number | null;
    title: string;
    url_key: string | null;
    tree_sort: string | null;
    level: number;
    image?: IImageItem | null;
    custom_link: string | null;
    children?: ICategory[] | null;
}
export interface ICategoryItem {
    category_id: number;
    parent_id: number | null;
    sort: number;
    created_at: string;
    deleted_at: string | null;
    external_id: number | string | null;
    status: TPublishingStatus;
    created_by: number | null;
    image_id: number | null;
    products_qty?: number;
    image?: IImageItem | null;
    text: ICategoryText | null;
    props?: ICategoryProps | null;
    children?: ICategoryFlatItem[];
    siblings?: ICategoryFlatItem[];
    parents?: ICategoryFlatItem[];
    filter?: IFilter;
    seo: IItemSeo;
}
export interface ICategoryFlatItem {
    category_id: number;
    parent_id: number | null;
    title: string;
    url_key: string | null;
    level: number;
    tree_sort: string;
    joined_title: string | null;
    image?: IImageItem | null;
    custom_link: string | null;
    products_qty?: number;
    children_qty?: number;
}
interface ICategoryText {
    category_id: number;
    lang_id: number;
    title: string;
    custom_title: string | null;
    custom_header: string | null;
    meta_description: string | null;
    meta_keywords: string | null;
    url_key: string | null;
    description_top: string | null;
    description_bottom: string | null;
}
interface ICategoryProps {
    category_id: number;
    use_filter: boolean;
    filter_id: number | null;
    custom_link: string | null;
}
export interface IProductCategoryRels {
    category_id: number;
    is_default: boolean;
    category: ICategoryItem;
}
export {};
