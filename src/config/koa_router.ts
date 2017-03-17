import {
  notImplemented as NotImplemented,
  methodNotAllowed as MethodNotAllowed
} from 'boom'

// https://github.com/alexmingoia/koa-router#new-routeropts
export default {
  // prefix: '/users',

  allowedMethods: {
    throw: true,
    notImplemented: () => new NotImplemented(),
    methodNotAllowed: () => new MethodNotAllowed()
  }
}
