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
interface ICategoryIcon {
    type: 'icon' | 'image';
    icon?: string | null;
    image?: string | null;
}
export {};
