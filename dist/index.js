'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('magnet-core/dist/base');

var _base2 = _interopRequireDefault(_base);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _requireAll = require('require-all');

var _requireAll2 = _interopRequireDefault(_requireAll);

var _boom = require('boom');

var _boom2 = _interopRequireDefault(_boom);

var _fs = require('mz/fs');

var _fs2 = _interopRequireDefault(_fs);

var _forOwn = require('lodash/forOwn');

var _forOwn2 = _interopRequireDefault(_forOwn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Router = function (_Base) {
  _inherits(Router, _Base);

  function Router() {
    _classCallCheck(this, Router);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Router).apply(this, arguments));
  }

  _createClass(Router, [{
    key: 'setup',
    value: function () {
      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.app.router = (0, _koaRouter2.default)();
                this.app.application.use(this.app.router.routes());
                this.app.application.use(this.app.router.allowedMethods({
                  throw: true,
                  notImplemented: function notImplemented() {
                    return new _boom2.default.notImplemented();
                  },
                  methodNotAllowed: function methodNotAllowed() {
                    return new _boom2.default.methodNotAllowed();
                  }
                }));

                if (!this.app.controllers) {
                  this.app.controllers = {};
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setup() {
        return ref.apply(this, arguments);
      }

      return setup;
    }()
  }, {
    key: 'start',
    value: function () {
      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        var folderPath, exists, files;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                folderPath = _path2.default.resolve(process.cwd(), this.config.controllerPath || 'server/controllers');
                _context2.next = 3;
                return _fs2.default.exists(folderPath);

              case 3:
                exists = _context2.sent;

                if (exists) {
                  files = (0, _requireAll2.default)(folderPath);


                  (0, _forOwn2.default)(files, function (controllers) {
                    (0, _forOwn2.default)(controllers, function (controller, controllerName) {
                      _this2.app.controllers[controllerName] = controller(_this2.app);
                    });
                  });
                }

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function start() {
        return ref.apply(this, arguments);
      }

      return start;
    }()
  }]);

  return Router;
}(_base2.default);

exports.default = Router;
//# sourceMappingURL=index.js.map