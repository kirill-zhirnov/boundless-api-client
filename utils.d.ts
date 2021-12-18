import { IPagination } from './types/common';
export declare function extractPaginationFromHeaders(headers: {
    [key: string]: string;
}): IPagination;
export declare type TGetParams = {
    [param: string]: string | object | number;
} | string[];
export declare function createGetStr(params: TGetParams, skipRoot?: string[], prefix?: string): string;
