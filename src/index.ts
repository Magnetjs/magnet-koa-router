import { Module } from 'magnet-core/module'
import * as Router from 'koa-router'

export default class MagnetKoaRouter extends Module {
  get moduleName () { return 'koa_router' }
  get defaultConfig () { return __dirname }

  async setup () {
    console.log('koa router', this.config)
    this.insert(new Router())
    // this.app.koa.use(this.app.koa_router.routes())

    console.log('this.config.allowedMethods', this.config.allowedMethods)
    if (this.config.allowedMethods) {
      this.app.koa.use(this.app.koa_router.allowedMethods(this.config.allowedMethods))
    }
  }
}
