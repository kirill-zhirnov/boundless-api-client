"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBoundlessToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
/**
* Generates token for API requests authorization.
*
* @param {number} clientId
* @param {string} secret
* @param {number} instanceId
* @param {string} expiresIn - token expiration string (default 10 days)
*/
function generateBoundlessToken(clientId, secret, instanceId, expiresIn = '10 days') {
    return (0, jsonwebtoken_1.sign)({
        iId: instanceId,
        cId: clientId
    }, secret, { algorithm: 'HS512', expiresIn });
}
exports.generateBoundlessToken = generateBoundlessToken;
