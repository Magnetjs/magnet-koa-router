import { Module } from 'magnet-core/module'
import * as Router from 'koa-router'

export default class KoaRouter extends Module {
  get moduleName () { return 'koa_router' }
  get defaultConfig () { return __dirname }

  async setup () {
    this.app.koa.use(this.app.koa_router.routes())
  }
}
