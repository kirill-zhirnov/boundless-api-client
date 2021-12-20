import { TPublishingStatus } from '../common';
export interface ICategory {
    category_id: number;
    parent_id: number | null;
    title: string | null;
    url_key: string | null;
    tree_sort: string | null;
    level: number;
    image_id?: number | null;
    image_path?: string | null;
    icon?: ICategoryIcon | null;
    custom_link: string | null;
    children: ICategory[] | null;
}
export interface ICategoryItem {
    category_id: number;
    parent_id: number | null;
    site_id: number | null;
    sort: number;
    created_at: string;
    deleted_at: string | null;
    external_id: number | string | null;
    status: TPublishingStatus;
    created_by: number | null;
    icon: ICategoryIcon | ICategoryIcon[];
    text: ICategoryText | null;
    props: ICategoryProps | null;
}
interface ICategoryIcon {
    type: 'icon' | 'image';
    icon?: string | null;
    image?: string | null;
}
interface ICategoryText {
    category_id: number;
    lang_id: number;
    title: string;
    custom_title: string | null;
    custom_header: string | null;
    meta_description: string | null;
    meta_keywords: string | null;
    url_key: string | number | null;
    description_top: string | null;
    description_bottom: string | null;
}
interface ICategoryProps {
    category_id: number;
    use_filter: boolean;
    filter_id: number | null;
    custom_link: string | null;
}
export {};
