import { IPagination } from './types/common';
export declare function extractPaginationFromHeaders(headers: {
    [key: string]: string;
}): IPagination;
export declare type TGetParams = {
    [param: string]: string | number | (string | number)[] | TGetParams;
} | (string | number)[];
export declare function createGetStr(params: TGetParams, skipRoot?: string[], prefix?: string): string;
