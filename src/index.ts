export {BoundlessClient} from './client';
export {BoundlessThumb} from './thumb';

//Types exports:
export * from './types/catalog/filter';
export * from './types/catalog/product';
export * from './types/catalog/category';
export * from './types/catalog/characteristic';
export * from './types/catalog/variant';
export * from './types/catalog/inventoryItem';
export * from './types/catalog/label';

export * from './types/orders/cart';
export * from './types/orders/checkout';
export * from './types/orders/orders';

export * from './types/settings';

export * from './types/customer';

export * from './endpoints/catalog'; // FIXME organize exports
export * from './endpoints/orders';
export * from './endpoints/checkout';
export * from './endpoints/customer';