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
class KoaRouter extends module_1.Module {
    get moduleName() { return 'koa_router'; }
    get defaultConfig() { return __dirname; }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            this.insert(new Router(this.config));
            this.app.koa.use(this.app.koa_router.routes());
            this.app.koa.use(this.app.koa_router.allowedMethods(this.config.allowedMethods));
        });
    }
}
exports.default = KoaRouter;
//# sourceMappingURL=index.js.map