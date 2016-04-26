import Base from 'magnet-core/dist/base';
import router from 'koa-router';
import path from 'path';
import requireAll from 'require-all';
import Boom from 'boom';
import fs from 'mz/fs';
import forOwn from 'lodash/forOwn';

export default class Router extends Base {
  async setup() {
    this.app.router = router();
    this.app.application.use(this.app.router.routes());
    this.app.application.use(this.app.router.allowedMethods({
      throw: true,
      notImplemented: () => new Boom.notImplemented(),
      methodNotAllowed: () => new Boom.methodNotAllowed()
    }));

    if (!this.app.controllers) {
      this.app.controllers = {};
    }
  }

  async start() {
    const folderPath = path.resolve(
      process.cwd(),
      this.config.controllerPath || 'server/controllers'
    );

    const exists = await fs.exists(folderPath);
    if (exists) {
      const files = requireAll(folderPath);

      forOwn(files, (controllers) => {
        forOwn(controllers, (controller, controllerName) => {
          this.app.controllers[controllerName] = controller(this.app);
        });
      });
    }
  }
}
