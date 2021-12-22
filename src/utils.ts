import {IPagination} from './types/common';

export function extractPaginationFromHeaders(headers: {[key: string]: string}): IPagination {
	const parsedHeaders = {};
	for (const [key, value] of Object.entries(headers)) {
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
			pagination[key] = parseInt(parsedHeaders[header]);
		}
	}

	return pagination as IPagination;
}

export type TGetParams = {[param: string]: string | object | number} | string[];
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

		if ((typeof(val) === 'object' && val !== null) || Array.isArray(val)) {
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