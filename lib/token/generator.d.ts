/**
* Generates token for API requests authorization.
*
* @param {number} clientId
* @param {string} secret
* @param {number} instanceId
* @param {string} expiresIn - token expiration string (default 10 days)
*/
export declare function generateBoundlessToken(clientId: number, secret: string, instanceId: number, expiresIn?: string): string;
