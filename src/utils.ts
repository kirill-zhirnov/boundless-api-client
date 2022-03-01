import {IPagination} from './types/common';
import {TThumbRatio} from './types/image';

export function extractPaginationFromHeaders(headers: {[key: string]: string}): IPagination {
	const parsedHeaders = {};
	for (const [key, value] of Object.entries(headers)) {
		//@ts-ignore
		parsedHeaders[key.toLowerCase()] = value;
	}

	const headers2Keys = {
		'x-pagination-total-count': 'totalCount',
		'x-pagination-page-count': 'pageCount',
		'x-pagination-current-page': 'currentPage',
		'x-pagination-per-page': 'perPage'
	};

	const pagination: Partial<IPagination> = {};

	for (const [header, key] of Object.entries(headers2Keys)) {
		if (header in parsedHeaders) {
			//@ts-ignore
			pagination[key] = parseInt(parsedHeaders[header]);
		}
	}

	return pagination as IPagination;
}

export type TGetParams = {[param: string]: string | number | (string | number)[] | TGetParams} | (string | number)[];
export function createGetStr(params: TGetParams, skipRoot: string[] = [], prefix: string = '') {
	const out: string[] = [];
	const isArray = Array.isArray(params);

	Object.entries(params).forEach(([key, val]) => {
		if (skipRoot.indexOf(key) !== -1) {
			return;
		}

		let name;
		if (prefix !== '') {
			name = (!isArray) ? `${prefix}[${key}]` : `${prefix}[]`;
		} else {
			name = key;
		}

		if ((typeof (val) === 'object' && val !== null) || Array.isArray(val)) {
			out.push(createGetStr(val as {}, [], name));
		} else {
			if (val === null) {
				val = '';
			}

			val = encodeURIComponent(val as string);
			out.push(`${name}=${val}`);
		}
	});

	return out.join('&');
}

export function calcThumbSizeByProportion(maxSize: number, imgRatio: TThumbRatio) {
	let thumbHeight:number, thumbWidth:number;
	const parts = imgRatio.split('-');

	const width = parseInt(parts[0]);
	const height = parseInt(parts[1]);

	if (width === Math.max(width, height)) {
		thumbWidth = maxSize;
		thumbHeight = calcProportion(maxSize, height, width);
	} else {
		thumbWidth = calcProportion(maxSize, width, height);
		thumbHeight = maxSize;
	}

	return {
		width: thumbWidth,
		height: thumbHeight
	};
}

export function calcProportion(mul1: number, mul2: number, divider: number): number {
	return Math.round((mul1 * mul2) / divider);
}

