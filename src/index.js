import Base from 'magnet-core/base';
import router from 'koa-router';
import Boom from 'boom';

export default class Router extends Base {
  async setup() {
    this.app.router = router();
    this.app.application.use(this.app.router.routes());
    this.app.application.use(this.app.router.allowedMethods({
      throw: true,
      notImplemented: () => new Boom.notImplemented(),
      methodNotAllowed: () => new Boom.methodNotAllowed()
    }));
  }
}
