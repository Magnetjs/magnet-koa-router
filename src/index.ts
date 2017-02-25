import { Module } from 'magnet-core/module'
import * as Router from 'koa-router'

import defaultConfig from './config/koaRouter'

export default class KoaRouter extends Module {
  async setup () {
    const config = this.prepareConfig('koaRouter', defaultConfig)

    this.app.koaRouter = new Router(config)
    this.app.router = this.app.koaRouter

    this.app.koa.use(this.app.koaRouter.routes())
    this.app.koa.use(this.app.koaRouter.allowedMethods(config.allowedMethods))
  }
}
