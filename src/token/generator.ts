import {sign} from 'jsonwebtoken';

export function generateBoundlessToken(clientId: string, secret: string, instanceId: string | number, expiresIn: string = '10 days') {
    return sign({
        iId: instanceId,
        cId: clientId
    }, secret, {algorithm: 'HS512', expiresIn});
}