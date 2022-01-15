export declare enum TLabelIcon {
    star = "star",
    flag = "flag",
    fire = "fire",
    ok = "ok",
    tag = "tag",
    heart = "heart"
}
export interface ILabel {
    label_id: number;
    title: string;
    color: string;
    text_color: string;
    icon: TLabelIcon | null;
    remove_after?: string | null;
    created_at?: string;
    deleted_at?: string | null;
}
