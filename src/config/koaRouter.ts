import {
  notImplemented as NotImplemented,
  methodNotAllowed as MethodNotAllowed
} from 'boom'

export default {
  // prefix: '/users',

  allowedMethods: {
    throw: true,
    notImplemented: () => new NotImplemented(),
    methodNotAllowed: () => new MethodNotAllowed()
  }
}
