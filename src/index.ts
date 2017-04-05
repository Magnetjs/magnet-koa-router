import { Module } from 'magnet-core/module'
import * as Router from 'koa-router'

export default class MagnetKoaRouter extends Module {
  get moduleName () { return 'koa_router' }
  get defaultConfig () { return __dirname }

  async setup () {
    this.insert(new Router())

    if (this.config.allowedMethods) {
      this.app.koa.use(this.app.koa_router.allowedMethods(this.config.allowedMethods))
    }
  }
}
