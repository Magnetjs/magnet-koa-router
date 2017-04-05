import { Module } from 'magnet-core/module'
import * as Router from 'koa-router'

export default class MagnetKoaRouterStart extends Module {
  get moduleName () { return 'koa_router' }
  get defaultConfig () { return __dirname }

  async setup () {
    console.log('koa router use ')
    // console.log('this.app.koa_router', this.app.koa_router)
    this.app.koa.use(this.app.koa_router.routes())
  }
}
