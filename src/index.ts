import { Module } from 'magnet-core/module'
import * as Router from 'koa-router'

export default class KoaRouter extends Module {
  get moduleName () { return 'koa_router' }
  get defaultConfig () { return __dirname }

  async setup () {
    this.app.koaRouter = new Router(this.config)
    this.app.router = this.app.koaRouter

    this.app.koa.use(this.app.koaRouter.routes())
    this.app.koa.use(this.app.koaRouter.allowedMethods(this.config.allowedMethods))
  }
}
