export {BoundlessClient} from './client';
export {BoundlessThumb} from './thumb';
export {extractPaginationFromHeaders, createGetStr, calcThumbSizeByProportion, calcProportion} from './utils';
export {
	AxiosFetchAdapter,
	IAdapterResponse,
	IAdapterNegativeResponse,
	TAdapterExtraRequestInit,
	TAdapterBodyInit,
	TAdapterHeaders
} from './axiosFetchAdapter';

//Types exports:
export * from './types/catalog/filter';
export * from './types/catalog/product';
export * from './types/catalog/category';
export * from './types/catalog/characteristic';
export * from './types/catalog/variant';
export * from './types/catalog/inventoryItem';
export * from './types/catalog/label';
export * from './types/catalog/prices';

export * from './types/orders/cart';
export * from './types/orders/checkout';
export * from './types/orders/orders';
export * from './types/orders/payment';
export * from './types/orders/customerOrder';

export * from './types/settings';
export * from './types/system';

export * from './types/customer';

export * from './types/delivery';

export * from './types/common';

export * from './types/image';
export * from './types/total';

export * from './endpoints/catalog'; // FIXME organize exports
export * from './endpoints/cart';
export * from './endpoints/checkout';
export * from './endpoints/customer';