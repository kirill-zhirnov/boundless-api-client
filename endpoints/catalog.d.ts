import { BoundlessClient } from '../client';
export default class CatalogApi {
    protected client: BoundlessClient;
    constructor(client: BoundlessClient);
    getProducts(): Promise<any>;
}
