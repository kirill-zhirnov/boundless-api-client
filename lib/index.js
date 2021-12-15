"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBoundlessToken = exports.BoundlessClientStatic = exports.BoundlessClient = void 0;
var client_1 = require("./client");
Object.defineProperty(exports, "BoundlessClient", { enumerable: true, get: function () { return client_1.BoundlessClient; } });
Object.defineProperty(exports, "BoundlessClientStatic", { enumerable: true, get: function () { return client_1.BoundlessClientStatic; } });
var generator_1 = require("./token/generator");
Object.defineProperty(exports, "generateBoundlessToken", { enumerable: true, get: function () { return generator_1.generateBoundlessToken; } });
