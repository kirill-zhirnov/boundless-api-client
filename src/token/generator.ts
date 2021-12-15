import {sign} from 'jsonwebtoken';

/**
* Generates token for API requests authorization.
*
* @param {number} clientId
* @param {string} secret
* @param {number} instanceId
* @param {string} expiresIn - token expiration string (default 10 days)
*/
export function generateBoundlessToken(clientId: number, secret: string, instanceId: number, expiresIn: string = '10 days'): string {
	return sign({
		iId: instanceId,
		cId: clientId
	}, secret, {algorithm: 'HS512', expiresIn});
}