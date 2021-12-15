import { sign } from 'jsonwebtoken';
export function generateBoundlessToken(clientId, secret, instanceId, expiresIn = '10 days') {
    return sign({
        iId: instanceId,
        cId: clientId
    }, secret, { algorithm: 'HS512', expiresIn });
}
