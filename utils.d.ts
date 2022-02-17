import { IPagination } from './types/common';
import { TThumbRatio } from './types/image';
export { TotalCalculator } from './utils/totalCalculator';
export declare function extractPaginationFromHeaders(headers: {
    [key: string]: string;
}): IPagination;
export declare type TGetParams = {
    [param: string]: string | number | (string | number)[] | TGetParams;
} | (string | number)[];
export declare function createGetStr(params: TGetParams, skipRoot?: string[], prefix?: string): string;
export declare function calcThumbSizeByProportion(maxSize: number, imgRatio: TThumbRatio): {
    width: number;
    height: number;
};
export declare function calcProportion(mul1: number, mul2: number, divider: number): number;
