import { Module } from 'magnet-core/module'
import * as Router from 'koa-router'

export default class MagnetKoaRouterStart extends Module {
  init () {
    this.moduleName = 'koa-router'
    this.defaultConfig = __dirname
  }

  async setup () {
    this.app.koa.use(this.app.koa_router.routes())
  }
}
