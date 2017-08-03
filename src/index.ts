import { Module } from 'magnet-core/module'
import * as Router from 'koa-router'

export default class MagnetKoaRouter extends Module {
  init () {
    this.moduleName = 'koa-router'
    this.defaultConfig = __dirname
  }

  async setup () {
    this.insert(new Router())

    if (this.config.allowedMethods) {
      this.app.koa.use(this.app.koa_router.allowedMethods(this.config.allowedMethods))
    }
  }
}
