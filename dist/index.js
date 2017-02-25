"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("magnet-core/module");
const Router = require("koa-router");
const koaRouter_1 = require("./config/koaRouter");
class KoaRouter extends module_1.Module {
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            const config = this.prepareConfig('koaRouter', koaRouter_1.default);
            this.app.koaRouter = new Router(config);
            this.app.router = this.app.koaRouter;
            this.app.koa.use(this.app.koaRouter.routes());
            this.app.koa.use(this.app.koaRouter.allowedMethods(config.allowedMethods));
        });
    }
}
exports.default = KoaRouter;
//# sourceMappingURL=index.js.map