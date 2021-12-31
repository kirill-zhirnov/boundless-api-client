export declare enum TPublishingStatus {
    published = "published",
    draft = "draft"
}
export interface IPagination {
    totalCount: number;
    pageCount: number;
    currentPage: number;
    perPage: number;
}
