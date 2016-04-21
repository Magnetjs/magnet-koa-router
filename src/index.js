import Base from 'magnet-core/dist/base';
import router from 'koa-router';
import Boom from 'boom';

export default class Router extends Base {
  async setup() {
    this.app.router = router();
  }

  async start() {
    this.app.application.use(this.app.router.routes());
    this.app.application.use(this.app.router.allowedMethods({
      throw: true,
      notImplemented: () => new Boom.notImplemented(),
      methodNotAllowed: () => new Boom.methodNotAllowed()
    }));
  }
}
