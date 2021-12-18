"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGetStr = exports.extractPaginationFromHeaders = void 0;
function extractPaginationFromHeaders(headers) {
    const headers2Keys = {
        'x-pagination-total-count': 'totalCount',
        'x-pagination-page-count': 'pageCount',
        'x-pagination-current-page': 'currentPage',
        'x-pagination-per-page': 'perPage'
    };
    const pagination = {};
    for (const [header, key] of Object.entries(headers2Keys)) {
        if (header in headers) {
            pagination[key] = parseInt(headers[header]);
        }
    }
    return pagination;
}
exports.extractPaginationFromHeaders = extractPaginationFromHeaders;
function createGetStr(params, skipRoot = [], prefix = '') {
    const out = [];
    const isArray = Array.isArray(params);
    Object.entries(params).forEach(([key, val]) => {
        if (skipRoot.indexOf(key) !== -1) {
            return;
        }
        let name;
        if (prefix !== '') {
            name = (!isArray) ? `${prefix}[${key}]` : `${prefix}[]`;
        }
        else {
            name = key;
        }
        if ((typeof (val) === 'object' && val !== null) || Array.isArray(val)) {
            out.push(createGetStr(val, [], name));
        }
        else {
            if (val === null) {
                val = '';
            }
            val = encodeURIComponent(val);
            out.push(`${name}=${val}`);
        }
    });
    return out.join('&');
}
exports.createGetStr = createGetStr;
