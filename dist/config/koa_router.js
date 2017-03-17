"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boom_1 = require("boom");
// https://github.com/alexmingoia/koa-router#new-routeropts
exports.default = {
    // prefix: '/users',
    allowedMethods: {
        throw: true,
        notImplemented: () => new boom_1.notImplemented(),
        methodNotAllowed: () => new boom_1.methodNotAllowed()
    }
};
//# sourceMappingURL=koa_router.js.map