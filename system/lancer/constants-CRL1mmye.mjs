var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { g as getAugmentedNamespace } from "./lancer-DKinUL9c.mjs";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = /* @__PURE__ */ __name(function(d, b) {
  return extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) b2.hasOwnProperty(p) && (d2[p] = b2[p]);
  }, extendStatics(d, b);
}, "extendStatics");
function __extends$1(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  __name(__, "__"), d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
__name(__extends$1, "__extends$1");
var __assign$7 = /* @__PURE__ */ __name(function() {
  return __assign$7 = Object.assign || /* @__PURE__ */ __name(function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, "__assign"), __assign$7.apply(this, arguments);
}, "__assign$7");
function __rest(s, e) {
  var t = {};
  for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0 && (t[p] = s[p]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
      e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]) && (t[p[i]] = s[p[i]]);
  return t;
}
__name(__rest, "__rest");
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(__decorate, "__decorate");
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
__name(__param, "__param");
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(metadataKey, metadataValue);
}
__name(__metadata, "__metadata");
function __awaiter$d(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return __name(adopt, "adopt"), new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step"), step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
__name(__awaiter$d, "__awaiter$d");
function __generator$d(thisArg, body) {
  var _ = { label: 0, sent: /* @__PURE__ */ __name(function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, "sent"), trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    for (; _; ) try {
      if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      switch (y = 0, t && (op = [op[0] & 2, t.value]), op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          return _.label++, { value: op[1], done: !1 };
        case 5:
          _.label++, y = op[1], op = [0];
          continue;
        case 7:
          op = _.ops.pop(), _.trys.pop();
          continue;
        default:
          if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1], t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2], _.ops.push(op);
            break;
          }
          t[2] && _.ops.pop(), _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e], y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: !0 };
  }
}
__name(__generator$d, "__generator$d");
function __createBinding(o, m, k, k2) {
  k2 === void 0 && (k2 = k), o[k2] = m[k];
}
__name(__createBinding, "__createBinding");
function __exportStar(m, exports$1) {
  for (var p in m) p !== "default" && !exports$1.hasOwnProperty(p) && (exports$1[p] = m[p]);
}
__name(__exportStar, "__exportStar");
function __values$2(o) {
  var s = typeof Symbol == "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length == "number") return {
    next: /* @__PURE__ */ __name(function() {
      return o && i >= o.length && (o = void 0), { value: o && o[i++], done: !o };
    }, "next")
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
__name(__values$2, "__values$2");
function __read$6(o, n) {
  var m = typeof Symbol == "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    for (; (n === void 0 || n-- > 0) && !(r = i.next()).done; ) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      r && !r.done && (m = i.return) && m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
__name(__read$6, "__read$6");
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read$6(arguments[i]));
  return ar;
}
__name(__spread, "__spread");
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
__name(__spreadArrays, "__spreadArrays");
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
__name(__await, "__await");
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    g[n] && (i[n] = function(v) {
      return new Promise(function(a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    });
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    f(v), q.shift(), q.length && resume(q[0][0], q[0][1]);
  }
}
__name(__asyncGenerator, "__asyncGenerator");
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
    } : f;
  }
}
__name(__asyncDelegator, "__asyncDelegator");
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values$2 == "function" ? __values$2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
__name(__asyncValues, "__asyncValues");
function __makeTemplateObject(cooked, raw) {
  return Object.defineProperty ? Object.defineProperty(cooked, "raw", { value: raw }) : cooked.raw = raw, cooked;
}
__name(__makeTemplateObject, "__makeTemplateObject");
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) Object.hasOwnProperty.call(mod, k) && (result[k] = mod[k]);
  return result.default = mod, result;
}
__name(__importStar, "__importStar");
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
__name(__importDefault, "__importDefault");
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver))
    throw new TypeError("attempted to get private field on non-instance");
  return privateMap.get(receiver);
}
__name(__classPrivateFieldGet, "__classPrivateFieldGet");
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver))
    throw new TypeError("attempted to set private field on non-instance");
  return privateMap.set(receiver, value), value;
}
__name(__classPrivateFieldSet, "__classPrivateFieldSet");
const tslib_es6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return __assign$7;
  },
  __asyncDelegator,
  __asyncGenerator,
  __asyncValues,
  __await,
  __awaiter: __awaiter$d,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __createBinding,
  __decorate,
  __exportStar,
  __extends: __extends$1,
  __generator: __generator$d,
  __importDefault,
  __importStar,
  __makeTemplateObject,
  __metadata,
  __param,
  __read: __read$6,
  __rest,
  __spread,
  __spreadArrays,
  __values: __values$2
}, Symbol.toStringTag, { value: "Module" }));
var AWS_CLOUDWATCH_CATEGORY = "Logging", __values$1 = function(o) {
  var s = typeof Symbol == "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length == "number") return {
    next: /* @__PURE__ */ __name(function() {
      return o && i >= o.length && (o = void 0), { value: o && o[i++], done: !o };
    }, "next")
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, __read$5 = function(o, n) {
  var m = typeof Symbol == "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    for (; (n === void 0 || n-- > 0) && !(r = i.next()).done; ) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      r && !r.done && (m = i.return) && m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}, __spreadArray$2 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++)
    (ar || !(i in from)) && (ar || (ar = Array.prototype.slice.call(from, 0, i)), ar[i] = from[i]);
  return to.concat(ar || Array.prototype.slice.call(from));
}, LOG_LEVELS = {
  VERBOSE: 1,
  DEBUG: 2,
  INFO: 3,
  WARN: 4,
  ERROR: 5
}, LOG_TYPE;
(function(LOG_TYPE2) {
  LOG_TYPE2.DEBUG = "DEBUG", LOG_TYPE2.ERROR = "ERROR", LOG_TYPE2.INFO = "INFO", LOG_TYPE2.WARN = "WARN", LOG_TYPE2.VERBOSE = "VERBOSE";
})(LOG_TYPE || (LOG_TYPE = {}));
var ConsoleLogger = (
  /** @class */
  (function() {
    function ConsoleLogger2(name, level) {
      level === void 0 && (level = LOG_TYPE.WARN), this.name = name, this.level = level, this._pluggables = [];
    }
    return __name(ConsoleLogger2, "ConsoleLogger"), ConsoleLogger2.prototype._padding = function(n) {
      return n < 10 ? "0" + n : "" + n;
    }, ConsoleLogger2.prototype._ts = function() {
      var dt = /* @__PURE__ */ new Date();
      return [this._padding(dt.getMinutes()), this._padding(dt.getSeconds())].join(":") + "." + dt.getMilliseconds();
    }, ConsoleLogger2.prototype.configure = function(config) {
      return config ? (this._config = config, this._config) : this._config;
    }, ConsoleLogger2.prototype._log = function(type) {
      for (var e_1, _a, msg = [], _i = 1; _i < arguments.length; _i++)
        msg[_i - 1] = arguments[_i];
      var logger_level_name = this.level;
      ConsoleLogger2.LOG_LEVEL && (logger_level_name = ConsoleLogger2.LOG_LEVEL), typeof window < "u" && window.LOG_LEVEL && (logger_level_name = window.LOG_LEVEL);
      var logger_level = LOG_LEVELS[logger_level_name], type_level = LOG_LEVELS[type];
      if (type_level >= logger_level) {
        var log = console.log.bind(console);
        type === LOG_TYPE.ERROR && console.error && (log = console.error.bind(console)), type === LOG_TYPE.WARN && console.warn && (log = console.warn.bind(console));
        var prefix = "[".concat(type, "] ").concat(this._ts(), " ").concat(this.name), message = "";
        if (msg.length === 1 && typeof msg[0] == "string")
          message = "".concat(prefix, " - ").concat(msg[0]), log(message);
        else if (msg.length === 1)
          message = "".concat(prefix, " ").concat(msg[0]), log(prefix, msg[0]);
        else if (typeof msg[0] == "string") {
          var obj = msg.slice(1);
          obj.length === 1 && (obj = obj[0]), message = "".concat(prefix, " - ").concat(msg[0], " ").concat(obj), log("".concat(prefix, " - ").concat(msg[0]), obj);
        } else
          message = "".concat(prefix, " ").concat(msg), log(prefix, msg);
        try {
          for (var _b = __values$1(this._pluggables), _c = _b.next(); !_c.done; _c = _b.next()) {
            var plugin = _c.value, logEvent = { message, timestamp: Date.now() };
            plugin.pushLogs([logEvent]);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            _c && !_c.done && (_a = _b.return) && _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
    }, ConsoleLogger2.prototype.log = function() {
      for (var msg = [], _i = 0; _i < arguments.length; _i++)
        msg[_i] = arguments[_i];
      this._log.apply(this, __spreadArray$2([LOG_TYPE.INFO], __read$5(msg), !1));
    }, ConsoleLogger2.prototype.info = function() {
      for (var msg = [], _i = 0; _i < arguments.length; _i++)
        msg[_i] = arguments[_i];
      this._log.apply(this, __spreadArray$2([LOG_TYPE.INFO], __read$5(msg), !1));
    }, ConsoleLogger2.prototype.warn = function() {
      for (var msg = [], _i = 0; _i < arguments.length; _i++)
        msg[_i] = arguments[_i];
      this._log.apply(this, __spreadArray$2([LOG_TYPE.WARN], __read$5(msg), !1));
    }, ConsoleLogger2.prototype.error = function() {
      for (var msg = [], _i = 0; _i < arguments.length; _i++)
        msg[_i] = arguments[_i];
      this._log.apply(this, __spreadArray$2([LOG_TYPE.ERROR], __read$5(msg), !1));
    }, ConsoleLogger2.prototype.debug = function() {
      for (var msg = [], _i = 0; _i < arguments.length; _i++)
        msg[_i] = arguments[_i];
      this._log.apply(this, __spreadArray$2([LOG_TYPE.DEBUG], __read$5(msg), !1));
    }, ConsoleLogger2.prototype.verbose = function() {
      for (var msg = [], _i = 0; _i < arguments.length; _i++)
        msg[_i] = arguments[_i];
      this._log.apply(this, __spreadArray$2([LOG_TYPE.VERBOSE], __read$5(msg), !1));
    }, ConsoleLogger2.prototype.addPluggable = function(pluggable) {
      pluggable && pluggable.getCategoryName() === AWS_CLOUDWATCH_CATEGORY && (this._pluggables.push(pluggable), pluggable.configure(this._config));
    }, ConsoleLogger2.prototype.listPluggables = function() {
      return this._pluggables;
    }, ConsoleLogger2.LOG_LEVEL = null, ConsoleLogger2;
  })()
), __read$4 = function(o, n) {
  var m = typeof Symbol == "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    for (; (n === void 0 || n-- > 0) && !(r = i.next()).done; ) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      r && !r.done && (m = i.return) && m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}, logger$6 = new ConsoleLogger("Amplify"), AmplifyClass = (
  /** @class */
  (function() {
    function AmplifyClass2() {
      this._components = [], this._config = {}, this._modules = {}, this.Auth = null, this.Analytics = null, this.API = null, this.Credentials = null, this.Storage = null, this.I18n = null, this.Cache = null, this.PubSub = null, this.Interactions = null, this.Pushnotification = null, this.UI = null, this.XR = null, this.Predictions = null, this.DataStore = null, this.Geo = null, this.Notifications = null, this.Logger = ConsoleLogger, this.ServiceWorker = null;
    }
    return __name(AmplifyClass2, "AmplifyClass"), AmplifyClass2.prototype.register = function(comp) {
      logger$6.debug("component registered in amplify", comp), this._components.push(comp), typeof comp.getModuleName == "function" ? (this._modules[comp.getModuleName()] = comp, this[comp.getModuleName()] = comp) : logger$6.debug("no getModuleName method for component", comp), comp.configure(this._config);
    }, AmplifyClass2.prototype.configure = function(config) {
      var _this = this;
      return config ? (this._config = Object.assign(this._config, config), logger$6.debug("amplify config", this._config), Object.entries(this._modules).forEach(function(_a) {
        var _b = __read$4(_a, 2);
        _b[0];
        var comp = _b[1];
        Object.keys(comp).forEach(function(property) {
          _this._modules[property] && (comp[property] = _this._modules[property]);
        });
      }), this._components.map(function(comp) {
        comp.configure(_this._config);
      }), this._config) : this._config;
    }, AmplifyClass2.prototype.addPluggable = function(pluggable) {
      pluggable && pluggable.getCategory && typeof pluggable.getCategory == "function" && this._components.map(function(comp) {
        comp.addPluggable && typeof comp.addPluggable == "function" && comp.addPluggable(pluggable);
      });
    }, AmplifyClass2;
  })()
), Amplify = new AmplifyClass(), Framework;
(function(Framework2) {
  Framework2.WebUnknown = "0", Framework2.React = "1", Framework2.NextJs = "2", Framework2.Angular = "3", Framework2.VueJs = "4", Framework2.Nuxt = "5", Framework2.Svelte = "6", Framework2.ServerSideUnknown = "100", Framework2.ReactSSR = "101", Framework2.NextJsSSR = "102", Framework2.AngularSSR = "103", Framework2.VueJsSSR = "104", Framework2.NuxtSSR = "105", Framework2.SvelteSSR = "106", Framework2.ReactNative = "201", Framework2.Expo = "202";
})(Framework || (Framework = {}));
var Category;
(function(Category2) {
  Category2.API = "api", Category2.Auth = "auth", Category2.Analytics = "analytics", Category2.DataStore = "datastore", Category2.Geo = "geo", Category2.InAppMessaging = "inappmessaging", Category2.Interactions = "interactions", Category2.Predictions = "predictions", Category2.PubSub = "pubsub", Category2.PushNotification = "pushnotification", Category2.Storage = "storage";
})(Category || (Category = {}));
var AnalyticsAction;
(function(AnalyticsAction2) {
  AnalyticsAction2.Record = "1", AnalyticsAction2.UpdateEndpoint = "2";
})(AnalyticsAction || (AnalyticsAction = {}));
var ApiAction;
(function(ApiAction2) {
  ApiAction2.GraphQl = "1", ApiAction2.Get = "2", ApiAction2.Post = "3", ApiAction2.Put = "4", ApiAction2.Patch = "5", ApiAction2.Del = "6", ApiAction2.Head = "7";
})(ApiAction || (ApiAction = {}));
var AuthAction;
(function(AuthAction2) {
  AuthAction2.FederatedSignIn = "30";
})(AuthAction || (AuthAction = {}));
var DataStoreAction;
(function(DataStoreAction2) {
  DataStoreAction2.Subscribe = "1", DataStoreAction2.GraphQl = "2";
})(DataStoreAction || (DataStoreAction = {}));
var GeoAction;
(function(GeoAction2) {
  GeoAction2.None = "0";
})(GeoAction || (GeoAction = {}));
var InAppMessagingAction;
(function(InAppMessagingAction2) {
  InAppMessagingAction2.None = "0";
})(InAppMessagingAction || (InAppMessagingAction = {}));
var InteractionsAction;
(function(InteractionsAction2) {
  InteractionsAction2.None = "0";
})(InteractionsAction || (InteractionsAction = {}));
var PredictionsAction;
(function(PredictionsAction2) {
  PredictionsAction2.Convert = "1", PredictionsAction2.Identify = "2", PredictionsAction2.Interpret = "3";
})(PredictionsAction || (PredictionsAction = {}));
var PubSubAction;
(function(PubSubAction2) {
  PubSubAction2.Subscribe = "1";
})(PubSubAction || (PubSubAction = {}));
var PushNotificationAction;
(function(PushNotificationAction2) {
  PushNotificationAction2.None = "0";
})(PushNotificationAction || (PushNotificationAction = {}));
var StorageAction;
(function(StorageAction2) {
  StorageAction2.Put = "1", StorageAction2.Get = "2", StorageAction2.List = "3", StorageAction2.Copy = "4", StorageAction2.Remove = "5", StorageAction2.GetProperties = "6";
})(StorageAction || (StorageAction = {}));
var version = "5.3.26", globalExists = /* @__PURE__ */ __name(function() {
  return typeof global < "u";
}, "globalExists"), windowExists = /* @__PURE__ */ __name(function() {
  return typeof window < "u";
}, "windowExists"), documentExists = /* @__PURE__ */ __name(function() {
  return typeof document < "u";
}, "documentExists"), processExists = /* @__PURE__ */ __name(function() {
  return typeof process < "u";
}, "processExists"), keyPrefixMatch = /* @__PURE__ */ __name(function(object, prefix) {
  return !!Object.keys(object).find(function(key) {
    return key.startsWith(prefix);
  });
}, "keyPrefixMatch");
function reactWebDetect() {
  var elementKeyPrefixedWithReact = /* @__PURE__ */ __name(function(key) {
    return key.startsWith("_react") || key.startsWith("__react");
  }, "elementKeyPrefixedWithReact"), elementIsReactEnabled = /* @__PURE__ */ __name(function(element) {
    return Object.keys(element).find(elementKeyPrefixedWithReact);
  }, "elementIsReactEnabled"), allElementsWithId = /* @__PURE__ */ __name(function() {
    return Array.from(document.querySelectorAll("[id]"));
  }, "allElementsWithId");
  return documentExists() && allElementsWithId().some(elementIsReactEnabled);
}
__name(reactWebDetect, "reactWebDetect");
function reactSSRDetect() {
  return processExists() && typeof process.env < "u" && !!Object.keys(process.env).find(function(key) {
    return key.includes("react");
  });
}
__name(reactSSRDetect, "reactSSRDetect");
function vueWebDetect() {
  return windowExists() && keyPrefixMatch(window, "__VUE");
}
__name(vueWebDetect, "vueWebDetect");
function vueSSRDetect() {
  return globalExists() && keyPrefixMatch(global, "__VUE");
}
__name(vueSSRDetect, "vueSSRDetect");
function svelteWebDetect() {
  return windowExists() && keyPrefixMatch(window, "__SVELTE");
}
__name(svelteWebDetect, "svelteWebDetect");
function svelteSSRDetect() {
  return processExists() && typeof process.env < "u" && !!Object.keys(process.env).find(function(key) {
    return key.includes("svelte");
  });
}
__name(svelteSSRDetect, "svelteSSRDetect");
function nextWebDetect() {
  return windowExists() && window.next && typeof window.next == "object";
}
__name(nextWebDetect, "nextWebDetect");
function nextSSRDetect() {
  return globalExists() && (keyPrefixMatch(global, "__next") || keyPrefixMatch(global, "__NEXT"));
}
__name(nextSSRDetect, "nextSSRDetect");
function nuxtWebDetect() {
  return windowExists() && // @ts-ignore
  (window.__NUXT__ !== void 0 || window.$nuxt !== void 0);
}
__name(nuxtWebDetect, "nuxtWebDetect");
function nuxtSSRDetect() {
  return globalExists() && typeof global.__NUXT_PATHS__ < "u";
}
__name(nuxtSSRDetect, "nuxtSSRDetect");
function angularWebDetect() {
  var angularVersionSetInDocument = !!(documentExists() && document.querySelector("[ng-version]")), angularContentSetInWindow = !!// @ts-ignore
  (windowExists() && typeof window.ng < "u");
  return angularVersionSetInDocument || angularContentSetInWindow;
}
__name(angularWebDetect, "angularWebDetect");
function angularSSRDetect() {
  var _a;
  return processExists() && typeof process.env == "object" && ((_a = process.env.npm_lifecycle_script) === null || _a === void 0 ? void 0 : _a.startsWith("ng ")) || !1;
}
__name(angularSSRDetect, "angularSSRDetect");
function reactNativeDetect() {
  return typeof navigator < "u" && typeof navigator.product < "u" && navigator.product === "ReactNative";
}
__name(reactNativeDetect, "reactNativeDetect");
function expoDetect() {
  return globalExists() && typeof global.expo < "u";
}
__name(expoDetect, "expoDetect");
function webDetect() {
  return windowExists();
}
__name(webDetect, "webDetect");
var detectionMap = [
  // First, detect mobile
  { platform: Framework.Expo, detectionMethod: expoDetect },
  { platform: Framework.ReactNative, detectionMethod: reactNativeDetect },
  // Next, detect web frameworks
  { platform: Framework.NextJs, detectionMethod: nextWebDetect },
  { platform: Framework.Nuxt, detectionMethod: nuxtWebDetect },
  { platform: Framework.Angular, detectionMethod: angularWebDetect },
  { platform: Framework.React, detectionMethod: reactWebDetect },
  { platform: Framework.VueJs, detectionMethod: vueWebDetect },
  { platform: Framework.Svelte, detectionMethod: svelteWebDetect },
  { platform: Framework.WebUnknown, detectionMethod: webDetect },
  // Last, detect ssr frameworks
  { platform: Framework.NextJsSSR, detectionMethod: nextSSRDetect },
  { platform: Framework.NuxtSSR, detectionMethod: nuxtSSRDetect },
  { platform: Framework.ReactSSR, detectionMethod: reactSSRDetect },
  { platform: Framework.VueJsSSR, detectionMethod: vueSSRDetect },
  { platform: Framework.AngularSSR, detectionMethod: angularSSRDetect },
  { platform: Framework.SvelteSSR, detectionMethod: svelteSSRDetect }
];
function detect() {
  var _a;
  return ((_a = detectionMap.find(function(detectionEntry) {
    return detectionEntry.detectionMethod();
  })) === null || _a === void 0 ? void 0 : _a.platform) || Framework.ServerSideUnknown;
}
__name(detect, "detect");
var frameworkCache, frameworkChangeObservers = [], resetTriggered = !1, SSR_RESET_TIMEOUT = 10, WEB_RESET_TIMEOUT = 10, PRIME_FRAMEWORK_DELAY = 1e3, detectFramework = /* @__PURE__ */ __name(function() {
  if (!frameworkCache) {
    if (frameworkCache = detect(), resetTriggered)
      for (; frameworkChangeObservers.length; )
        frameworkChangeObservers.pop()();
    else
      frameworkChangeObservers.forEach(function(fcn) {
        return fcn();
      });
    resetTimeout(Framework.ServerSideUnknown, SSR_RESET_TIMEOUT), resetTimeout(Framework.WebUnknown, WEB_RESET_TIMEOUT);
  }
  return frameworkCache;
}, "detectFramework"), observeFrameworkChanges = /* @__PURE__ */ __name(function(fcn) {
  resetTriggered || frameworkChangeObservers.push(fcn);
}, "observeFrameworkChanges");
function clearCache() {
  frameworkCache = void 0;
}
__name(clearCache, "clearCache");
function resetTimeout(framework, delay) {
  frameworkCache === framework && !resetTriggered && setTimeout(function() {
    clearCache(), resetTriggered = !0, setTimeout(detectFramework, PRIME_FRAMEWORK_DELAY);
  }, delay);
}
__name(resetTimeout, "resetTimeout");
var __read$3 = function(o, n) {
  var m = typeof Symbol == "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    for (; (n === void 0 || n-- > 0) && !(r = i.next()).done; ) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      r && !r.done && (m = i.return) && m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}, BASE_USER_AGENT = "aws-amplify", PlatformBuilder = (
  /** @class */
  (function() {
    function PlatformBuilder2() {
      this.userAgent = "".concat(BASE_USER_AGENT, "/").concat(version);
    }
    return __name(PlatformBuilder2, "PlatformBuilder"), Object.defineProperty(PlatformBuilder2.prototype, "framework", {
      get: /* @__PURE__ */ __name(function() {
        return detectFramework();
      }, "get"),
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(PlatformBuilder2.prototype, "isReactNative", {
      get: /* @__PURE__ */ __name(function() {
        return this.framework === Framework.ReactNative || this.framework === Framework.Expo;
      }, "get"),
      enumerable: !1,
      configurable: !0
    }), PlatformBuilder2.prototype.observeFrameworkChanges = function(fcn) {
      observeFrameworkChanges(fcn);
    }, PlatformBuilder2;
  })()
), Platform = new PlatformBuilder(), getAmplifyUserAgentObject = /* @__PURE__ */ __name(function(_a) {
  var _b = _a === void 0 ? {} : _a, category = _b.category, action = _b.action;
  _b.framework;
  var userAgent = [[BASE_USER_AGENT, version]];
  return category && userAgent.push([category, action]), userAgent.push(["framework", detectFramework()]), userAgent;
}, "getAmplifyUserAgentObject"), getAmplifyUserAgent = /* @__PURE__ */ __name(function(customUserAgentDetails) {
  var userAgent = getAmplifyUserAgentObject(customUserAgentDetails), userAgentString = userAgent.map(function(_a) {
    var _b = __read$3(_a, 2), agentKey = _b[0], agentValue = _b[1];
    return "".concat(agentKey, "/").concat(agentValue);
  }).join(" ");
  return userAgentString;
}, "getAmplifyUserAgent"), __assign$6 = function() {
  return __assign$6 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$6.apply(this, arguments);
}, __read$2 = function(o, n) {
  var m = typeof Symbol == "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    for (; (n === void 0 || n-- > 0) && !(r = i.next()).done; ) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      r && !r.done && (m = i.return) && m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}, __spreadArray$1 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++)
    (ar || !(i in from)) && (ar || (ar = Array.prototype.slice.call(from, 0, i)), ar[i] = from[i]);
  return to.concat(ar || Array.prototype.slice.call(from));
}, logger$5 = new ConsoleLogger("Hub"), AMPLIFY_SYMBOL$1 = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default";
function isLegacyCallback(callback) {
  return callback.onHubCapsule !== void 0;
}
__name(isLegacyCallback, "isLegacyCallback");
var HubClass = (
  /** @class */
  (function() {
    function HubClass2(name) {
      this.listeners = [], this.patterns = [], this.protectedChannels = [
        "core",
        "auth",
        "api",
        "analytics",
        "interactions",
        "pubsub",
        "storage",
        "ui",
        "xr"
      ], this.name = name;
    }
    return __name(HubClass2, "HubClass"), HubClass2.prototype._remove = function(channel, listener) {
      if (channel instanceof RegExp) {
        var pattern_1 = this.patterns.find(function(_a) {
          var pattern = _a.pattern;
          return pattern.source === channel.source;
        });
        if (!pattern_1) {
          logger$5.warn("No listeners for ".concat(channel));
          return;
        }
        this.patterns = __spreadArray$1([], __read$2(this.patterns.filter(function(x) {
          return x !== pattern_1;
        })), !1);
      } else {
        var holder = this.listeners[channel];
        if (!holder) {
          logger$5.warn("No listeners for ".concat(channel));
          return;
        }
        this.listeners[channel] = __spreadArray$1([], __read$2(holder.filter(function(_a) {
          var callback = _a.callback;
          return callback !== listener;
        })), !1);
      }
    }, HubClass2.prototype.remove = function(channel, listener) {
      this._remove(channel, listener);
    }, HubClass2.prototype.dispatch = function(channel, payload, source, ampSymbol) {
      if (source === void 0 && (source = ""), this.protectedChannels.indexOf(channel) > -1) {
        var hasAccess = ampSymbol === AMPLIFY_SYMBOL$1;
        hasAccess || logger$5.warn("WARNING: ".concat(channel, " is protected and dispatching on it can have unintended consequences"));
      }
      var capsule = {
        channel,
        payload: __assign$6({}, payload),
        source,
        patternInfo: []
      };
      try {
        this._toListeners(capsule);
      } catch (e) {
        logger$5.error(e);
      }
    }, HubClass2.prototype.listen = function(channel, callback, listenerName) {
      var _this = this;
      listenerName === void 0 && (listenerName = "noname");
      var cb;
      if (isLegacyCallback(callback))
        logger$5.warn("WARNING onHubCapsule is Deprecated. Please pass in a callback."), cb = callback.onHubCapsule.bind(callback);
      else {
        if (typeof callback != "function")
          throw new Error("No callback supplied to Hub");
        cb = callback;
      }
      if (channel instanceof RegExp)
        this.patterns.push({
          pattern: channel,
          callback: cb
        });
      else {
        var holder = this.listeners[channel];
        holder || (holder = [], this.listeners[channel] = holder), holder.push({
          name: listenerName,
          callback: cb
        });
      }
      return function() {
        _this._remove(channel, cb);
      };
    }, HubClass2.prototype._toListeners = function(capsule) {
      var channel = capsule.channel, payload = capsule.payload, holder = this.listeners[channel];
      if (holder && holder.forEach(function(listener) {
        logger$5.debug("Dispatching to ".concat(channel, " with "), payload);
        try {
          listener.callback(capsule);
        } catch (e) {
          logger$5.error(e);
        }
      }), this.patterns.length > 0) {
        if (!payload.message) {
          logger$5.warn("Cannot perform pattern matching without a message key");
          return;
        }
        var payloadStr_1 = payload.message;
        this.patterns.forEach(function(pattern) {
          var match = payloadStr_1.match(pattern.pattern);
          if (match) {
            var _a = __read$2(match), groups = _a.slice(1), dispatchingCapsule = __assign$6(__assign$6({}, capsule), { patternInfo: groups });
            try {
              pattern.callback(dispatchingCapsule);
            } catch (e) {
              logger$5.error(e);
            }
          }
        });
      }
    }, HubClass2;
  })()
), Hub = new HubClass("__default__"), makeQuerablePromise = /* @__PURE__ */ __name(function(promise) {
  if (promise.isResolved)
    return promise;
  var isPending = !0, isRejected = !1, isFullfilled = !1, result = promise.then(function(data) {
    return isFullfilled = !0, isPending = !1, data;
  }, function(e) {
    throw isRejected = !0, isPending = !1, e;
  });
  return result.isFullfilled = function() {
    return isFullfilled;
  }, result.isPending = function() {
    return isPending;
  }, result.isRejected = function() {
    return isRejected;
  }, result;
}, "makeQuerablePromise"), browserOrNode = /* @__PURE__ */ __name(function() {
  var isBrowser = typeof window < "u" && typeof window.document < "u", isNode = typeof process < "u" && process.versions != null && process.versions.node != null;
  return {
    isBrowser,
    isNode
  };
}, "browserOrNode"), __extends = /* @__PURE__ */ (function() {
  var extendStatics2 = /* @__PURE__ */ __name(function(d, b) {
    return extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) Object.prototype.hasOwnProperty.call(b2, p) && (d2[p] = b2[p]);
    }, extendStatics2(d, b);
  }, "extendStatics");
  return function(d, b) {
    if (typeof b != "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics2(d, b);
    function __() {
      this.constructor = d;
    }
    __name(__, "__"), d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})(), __awaiter$c = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return __name(adopt, "adopt"), new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step"), step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator$c = function(thisArg, body) {
  var _ = { label: 0, sent: /* @__PURE__ */ __name(function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, "sent"), trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    for (; g && (g = 0, op[0] && (_ = 0)), _; ) try {
      if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      switch (y = 0, t && (op = [op[0] & 2, t.value]), op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          return _.label++, { value: op[1], done: !1 };
        case 5:
          _.label++, y = op[1], op = [0];
          continue;
        case 7:
          op = _.ops.pop(), _.trys.pop();
          continue;
        default:
          if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1], t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2], _.ops.push(op);
            break;
          }
          t[2] && _.ops.pop(), _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e], y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: !0 };
  }
}, __read$1 = function(o, n) {
  var m = typeof Symbol == "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    for (; (n === void 0 || n-- > 0) && !(r = i.next()).done; ) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      r && !r.done && (m = i.return) && m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}, __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++)
    (ar || !(i in from)) && (ar || (ar = Array.prototype.slice.call(from, 0, i)), ar[i] = from[i]);
  return to.concat(ar || Array.prototype.slice.call(from));
}, logger$4 = new ConsoleLogger("Util"), NonRetryableError = (
  /** @class */
  (function(_super) {
    __extends(NonRetryableError2, _super);
    function NonRetryableError2(message) {
      var _this = _super.call(this, message) || this;
      return _this.nonRetryable = !0, _this;
    }
    return __name(NonRetryableError2, "NonRetryableError"), NonRetryableError2;
  })(Error)
), isNonRetryableError = /* @__PURE__ */ __name(function(obj) {
  var key = "nonRetryable";
  return obj && obj[key];
}, "isNonRetryableError");
function retry(functionToRetry, args, delayFn, onTerminate) {
  return __awaiter$c(this, void 0, void 0, function() {
    var _this = this;
    return __generator$c(this, function(_a) {
      if (typeof functionToRetry != "function")
        throw Error("functionToRetry must be a function");
      return [2, new Promise(function(resolve, reject) {
        return __awaiter$c(_this, void 0, void 0, function() {
          var attempt, terminated, wakeUp, lastError, _loop_1, state_1;
          return __generator$c(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                attempt = 0, terminated = !1, wakeUp = /* @__PURE__ */ __name(function() {
                }, "wakeUp"), _loop_1 = /* @__PURE__ */ __name(function() {
                  var _b, _c, err_1, retryIn_1;
                  return __generator$c(this, function(_d) {
                    switch (_d.label) {
                      case 0:
                        attempt++, logger$4.debug("".concat(functionToRetry.name, " attempt #").concat(attempt, " with this vars: ").concat(JSON.stringify(args))), _d.label = 1;
                      case 1:
                        return _d.trys.push([1, 3, , 7]), _b = {}, _c = resolve, [4, functionToRetry.apply(void 0, __spreadArray([], __read$1(args), !1))];
                      case 2:
                        return [2, (_b.value = _c.apply(void 0, [_d.sent()]), _b)];
                      case 3:
                        return err_1 = _d.sent(), lastError = err_1, logger$4.debug("error on ".concat(functionToRetry.name), err_1), isNonRetryableError(err_1) ? (logger$4.debug("".concat(functionToRetry.name, " non retryable error"), err_1), [2, { value: reject(err_1) }]) : (retryIn_1 = delayFn(attempt, args, err_1), logger$4.debug("".concat(functionToRetry.name, " retrying in ").concat(retryIn_1, " ms")), retryIn_1 === !1 || terminated ? [2, { value: reject(err_1) }] : [3, 4]);
                      case 4:
                        return [4, new Promise(function(r) {
                          wakeUp = r, setTimeout(wakeUp, retryIn_1);
                        })];
                      case 5:
                        _d.sent(), _d.label = 6;
                      case 6:
                        return [3, 7];
                      case 7:
                        return [
                          2
                          /*return*/
                        ];
                    }
                  });
                }, "_loop_1"), _a2.label = 1;
              case 1:
                return terminated ? [3, 3] : [5, _loop_1()];
              case 2:
                return state_1 = _a2.sent(), typeof state_1 == "object" ? [2, state_1.value] : [3, 1];
              case 3:
                return reject(lastError), [
                  2
                  /*return*/
                ];
            }
          });
        });
      })];
    });
  });
}
__name(retry, "retry");
var MAX_DELAY_MS = 300 * 1e3;
function jitteredBackoff$1(maxDelayMs) {
  maxDelayMs === void 0 && (maxDelayMs = MAX_DELAY_MS);
  var BASE_TIME_MS = 100, JITTER_FACTOR = 100;
  return function(attempt) {
    var delay = Math.pow(2, attempt) * BASE_TIME_MS + JITTER_FACTOR * Math.random();
    return delay > maxDelayMs ? !1 : delay;
  };
}
__name(jitteredBackoff$1, "jitteredBackoff$1");
var jitteredExponentialRetry = /* @__PURE__ */ __name(function(functionToRetry, args, maxDelayMs, onTerminate) {
  return retry(functionToRetry, args, jitteredBackoff$1(maxDelayMs));
}, "jitteredExponentialRetry"), build$1 = {};
const require$$0$1 = /* @__PURE__ */ getAugmentedNamespace(tslib_es6);
var jsSha256 = {}, constants = {}, hasRequiredConstants;
function requireConstants() {
  return hasRequiredConstants || (hasRequiredConstants = 1, Object.defineProperty(constants, "__esModule", { value: !0 }), constants.MAX_HASHABLE_LENGTH = constants.INIT = constants.KEY = constants.DIGEST_LENGTH = constants.BLOCK_SIZE = void 0, constants.BLOCK_SIZE = 64, constants.DIGEST_LENGTH = 32, constants.KEY = new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]), constants.INIT = [
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ], constants.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1), constants;
}
__name(requireConstants, "requireConstants");
var RawSha256 = {}, hasRequiredRawSha256;
function requireRawSha256() {
  if (hasRequiredRawSha256) return RawSha256;
  hasRequiredRawSha256 = 1, Object.defineProperty(RawSha256, "__esModule", { value: !0 }), RawSha256.RawSha256 = void 0;
  var constants_1 = requireConstants(), RawSha256$1 = (
    /** @class */
    (function() {
      function RawSha2562() {
        this.state = Int32Array.from(constants_1.INIT), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1;
      }
      return __name(RawSha2562, "RawSha256"), RawSha2562.prototype.update = function(data) {
        if (this.finished)
          throw new Error("Attempted to update an already finished hash.");
        var position = 0, byteLength = data.byteLength;
        if (this.bytesHashed += byteLength, this.bytesHashed * 8 > constants_1.MAX_HASHABLE_LENGTH)
          throw new Error("Cannot hash more than 2^53 - 1 bits");
        for (; byteLength > 0; )
          this.buffer[this.bufferLength++] = data[position++], byteLength--, this.bufferLength === constants_1.BLOCK_SIZE && (this.hashBuffer(), this.bufferLength = 0);
      }, RawSha2562.prototype.digest = function() {
        if (!this.finished) {
          var bitsHashed = this.bytesHashed * 8, bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength), undecoratedLength = this.bufferLength;
          if (bufferView.setUint8(this.bufferLength++, 128), undecoratedLength % constants_1.BLOCK_SIZE >= constants_1.BLOCK_SIZE - 8) {
            for (var i = this.bufferLength; i < constants_1.BLOCK_SIZE; i++)
              bufferView.setUint8(i, 0);
            this.hashBuffer(), this.bufferLength = 0;
          }
          for (var i = this.bufferLength; i < constants_1.BLOCK_SIZE - 8; i++)
            bufferView.setUint8(i, 0);
          bufferView.setUint32(constants_1.BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), !0), bufferView.setUint32(constants_1.BLOCK_SIZE - 4, bitsHashed), this.hashBuffer(), this.finished = !0;
        }
        for (var out = new Uint8Array(constants_1.DIGEST_LENGTH), i = 0; i < 8; i++)
          out[i * 4] = this.state[i] >>> 24 & 255, out[i * 4 + 1] = this.state[i] >>> 16 & 255, out[i * 4 + 2] = this.state[i] >>> 8 & 255, out[i * 4 + 3] = this.state[i] >>> 0 & 255;
        return out;
      }, RawSha2562.prototype.hashBuffer = function() {
        for (var _a = this, buffer = _a.buffer, state = _a.state, state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7], i = 0; i < constants_1.BLOCK_SIZE; i++) {
          if (i < 16)
            this.temp[i] = (buffer[i * 4] & 255) << 24 | (buffer[i * 4 + 1] & 255) << 16 | (buffer[i * 4 + 2] & 255) << 8 | buffer[i * 4 + 3] & 255;
          else {
            var u = this.temp[i - 2], t1_1 = (u >>> 17 | u << 15) ^ (u >>> 19 | u << 13) ^ u >>> 10;
            u = this.temp[i - 15];
            var t2_1 = (u >>> 7 | u << 25) ^ (u >>> 18 | u << 14) ^ u >>> 3;
            this.temp[i] = (t1_1 + this.temp[i - 7] | 0) + (t2_1 + this.temp[i - 16] | 0);
          }
          var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (constants_1.KEY[i] + this.temp[i] | 0) | 0) | 0, t2 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
          state7 = state6, state6 = state5, state5 = state4, state4 = state3 + t1 | 0, state3 = state2, state2 = state1, state1 = state0, state0 = t1 + t2 | 0;
        }
        state[0] += state0, state[1] += state1, state[2] += state2, state[3] += state3, state[4] += state4, state[5] += state5, state[6] += state6, state[7] += state7;
      }, RawSha2562;
    })()
  );
  return RawSha256.RawSha256 = RawSha256$1, RawSha256;
}
__name(requireRawSha256, "requireRawSha256");
var build = {}, convertToBuffer = {}, fromUtf8$2 = /* @__PURE__ */ __name(function(input) {
  for (var bytes = [], i = 0, len = input.length; i < len; i++) {
    var value = input.charCodeAt(i);
    if (value < 128)
      bytes.push(value);
    else if (value < 2048)
      bytes.push(value >> 6 | 192, value & 63 | 128);
    else if (i + 1 < input.length && (value & 64512) === 55296 && (input.charCodeAt(i + 1) & 64512) === 56320) {
      var surrogatePair = 65536 + ((value & 1023) << 10) + (input.charCodeAt(++i) & 1023);
      bytes.push(surrogatePair >> 18 | 240, surrogatePair >> 12 & 63 | 128, surrogatePair >> 6 & 63 | 128, surrogatePair & 63 | 128);
    } else
      bytes.push(value >> 12 | 224, value >> 6 & 63 | 128, value & 63 | 128);
  }
  return Uint8Array.from(bytes);
}, "fromUtf8$2"), toUtf8$2 = /* @__PURE__ */ __name(function(input) {
  for (var decoded = "", i = 0, len = input.length; i < len; i++) {
    var byte = input[i];
    if (byte < 128)
      decoded += String.fromCharCode(byte);
    else if (192 <= byte && byte < 224) {
      var nextByte = input[++i];
      decoded += String.fromCharCode((byte & 31) << 6 | nextByte & 63);
    } else if (240 <= byte && byte < 365) {
      var surrogatePair = [byte, input[++i], input[++i], input[++i]], encoded = "%" + surrogatePair.map(function(byteValue) {
        return byteValue.toString(16);
      }).join("%");
      decoded += decodeURIComponent(encoded);
    } else
      decoded += String.fromCharCode((byte & 15) << 12 | (input[++i] & 63) << 6 | input[++i] & 63);
  }
  return decoded;
}, "toUtf8$2");
function fromUtf8$1(input) {
  return new TextEncoder().encode(input);
}
__name(fromUtf8$1, "fromUtf8$1");
function toUtf8$1(input) {
  return new TextDecoder("utf-8").decode(input);
}
__name(toUtf8$1, "toUtf8$1");
var fromUtf8 = /* @__PURE__ */ __name(function(input) {
  return typeof TextEncoder == "function" ? fromUtf8$1(input) : fromUtf8$2(input);
}, "fromUtf8"), toUtf8 = /* @__PURE__ */ __name(function(input) {
  return typeof TextDecoder == "function" ? toUtf8$1(input) : toUtf8$2(input);
}, "toUtf8");
const es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fromUtf8,
  toUtf8
}, Symbol.toStringTag, { value: "Module" })), require$$2 = /* @__PURE__ */ getAugmentedNamespace(es);
var hasRequiredConvertToBuffer;
function requireConvertToBuffer() {
  if (hasRequiredConvertToBuffer) return convertToBuffer;
  hasRequiredConvertToBuffer = 1, Object.defineProperty(convertToBuffer, "__esModule", { value: !0 }), convertToBuffer.convertToBuffer = void 0;
  var util_utf8_browser_1 = require$$2, fromUtf82 = typeof Buffer < "u" && Buffer.from ? function(input) {
    return Buffer.from(input, "utf8");
  } : util_utf8_browser_1.fromUtf8;
  function convertToBuffer$1(data) {
    return data instanceof Uint8Array ? data : typeof data == "string" ? fromUtf82(data) : ArrayBuffer.isView(data) ? new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(data);
  }
  return __name(convertToBuffer$1, "convertToBuffer$1"), convertToBuffer.convertToBuffer = convertToBuffer$1, convertToBuffer;
}
__name(requireConvertToBuffer, "requireConvertToBuffer");
var isEmptyData = {}, hasRequiredIsEmptyData;
function requireIsEmptyData() {
  if (hasRequiredIsEmptyData) return isEmptyData;
  hasRequiredIsEmptyData = 1, Object.defineProperty(isEmptyData, "__esModule", { value: !0 }), isEmptyData.isEmptyData = void 0;
  function isEmptyData$1(data) {
    return typeof data == "string" ? data.length === 0 : data.byteLength === 0;
  }
  return __name(isEmptyData$1, "isEmptyData$1"), isEmptyData.isEmptyData = isEmptyData$1, isEmptyData;
}
__name(requireIsEmptyData, "requireIsEmptyData");
var numToUint8 = {}, hasRequiredNumToUint8;
function requireNumToUint8() {
  if (hasRequiredNumToUint8) return numToUint8;
  hasRequiredNumToUint8 = 1, Object.defineProperty(numToUint8, "__esModule", { value: !0 }), numToUint8.numToUint8 = void 0;
  function numToUint8$1(num) {
    return new Uint8Array([
      (num & 4278190080) >> 24,
      (num & 16711680) >> 16,
      (num & 65280) >> 8,
      num & 255
    ]);
  }
  return __name(numToUint8$1, "numToUint8$1"), numToUint8.numToUint8 = numToUint8$1, numToUint8;
}
__name(requireNumToUint8, "requireNumToUint8");
var uint32ArrayFrom = {}, hasRequiredUint32ArrayFrom;
function requireUint32ArrayFrom() {
  if (hasRequiredUint32ArrayFrom) return uint32ArrayFrom;
  hasRequiredUint32ArrayFrom = 1, Object.defineProperty(uint32ArrayFrom, "__esModule", { value: !0 }), uint32ArrayFrom.uint32ArrayFrom = void 0;
  function uint32ArrayFrom$1(a_lookUpTable) {
    if (!Array.from) {
      for (var return_array = new Uint32Array(a_lookUpTable.length), a_index = 0; a_index < a_lookUpTable.length; )
        return_array[a_index] = a_lookUpTable[a_index];
      return return_array;
    }
    return Uint32Array.from(a_lookUpTable);
  }
  return __name(uint32ArrayFrom$1, "uint32ArrayFrom$1"), uint32ArrayFrom.uint32ArrayFrom = uint32ArrayFrom$1, uint32ArrayFrom;
}
__name(requireUint32ArrayFrom, "requireUint32ArrayFrom");
var hasRequiredBuild$1;
function requireBuild$1() {
  return hasRequiredBuild$1 || (hasRequiredBuild$1 = 1, (function(exports$1) {
    Object.defineProperty(exports$1, "__esModule", { value: !0 }), exports$1.uint32ArrayFrom = exports$1.numToUint8 = exports$1.isEmptyData = exports$1.convertToBuffer = void 0;
    var convertToBuffer_1 = requireConvertToBuffer();
    Object.defineProperty(exports$1, "convertToBuffer", { enumerable: !0, get: /* @__PURE__ */ __name(function() {
      return convertToBuffer_1.convertToBuffer;
    }, "get") });
    var isEmptyData_1 = requireIsEmptyData();
    Object.defineProperty(exports$1, "isEmptyData", { enumerable: !0, get: /* @__PURE__ */ __name(function() {
      return isEmptyData_1.isEmptyData;
    }, "get") });
    var numToUint8_1 = requireNumToUint8();
    Object.defineProperty(exports$1, "numToUint8", { enumerable: !0, get: /* @__PURE__ */ __name(function() {
      return numToUint8_1.numToUint8;
    }, "get") });
    var uint32ArrayFrom_1 = requireUint32ArrayFrom();
    Object.defineProperty(exports$1, "uint32ArrayFrom", { enumerable: !0, get: /* @__PURE__ */ __name(function() {
      return uint32ArrayFrom_1.uint32ArrayFrom;
    }, "get") });
  })(build)), build;
}
__name(requireBuild$1, "requireBuild$1");
var hasRequiredJsSha256;
function requireJsSha256() {
  if (hasRequiredJsSha256) return jsSha256;
  hasRequiredJsSha256 = 1, Object.defineProperty(jsSha256, "__esModule", { value: !0 }), jsSha256.Sha256 = void 0;
  var tslib_1 = require$$0$1, constants_1 = requireConstants(), RawSha256_1 = requireRawSha256(), util_1 = requireBuild$1(), Sha256 = (
    /** @class */
    (function() {
      function Sha2562(secret) {
        if (this.hash = new RawSha256_1.RawSha256(), secret) {
          this.outer = new RawSha256_1.RawSha256();
          var inner = bufferFromSecret(secret), outer = new Uint8Array(constants_1.BLOCK_SIZE);
          outer.set(inner);
          for (var i = 0; i < constants_1.BLOCK_SIZE; i++)
            inner[i] ^= 54, outer[i] ^= 92;
          this.hash.update(inner), this.outer.update(outer);
          for (var i = 0; i < inner.byteLength; i++)
            inner[i] = 0;
        }
      }
      return __name(Sha2562, "Sha256"), Sha2562.prototype.update = function(toHash) {
        if (!((0, util_1.isEmptyData)(toHash) || this.error))
          try {
            this.hash.update((0, util_1.convertToBuffer)(toHash));
          } catch (e) {
            this.error = e;
          }
      }, Sha2562.prototype.digestSync = function() {
        if (this.error)
          throw this.error;
        return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest();
      }, Sha2562.prototype.digest = function() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function() {
          return (0, tslib_1.__generator)(this, function(_a) {
            return [2, this.digestSync()];
          });
        });
      }, Sha2562;
    })()
  );
  jsSha256.Sha256 = Sha256;
  function bufferFromSecret(secret) {
    var input = (0, util_1.convertToBuffer)(secret);
    if (input.byteLength > constants_1.BLOCK_SIZE) {
      var bufferHash = new RawSha256_1.RawSha256();
      bufferHash.update(input), input = bufferHash.digest();
    }
    var buffer = new Uint8Array(constants_1.BLOCK_SIZE);
    return buffer.set(input), buffer;
  }
  return __name(bufferFromSecret, "bufferFromSecret"), jsSha256;
}
__name(requireJsSha256, "requireJsSha256");
var hasRequiredBuild;
function requireBuild() {
  return hasRequiredBuild || (hasRequiredBuild = 1, (function(exports$1) {
    Object.defineProperty(exports$1, "__esModule", { value: !0 });
    var tslib_1 = require$$0$1;
    (0, tslib_1.__exportStar)(requireJsSha256(), exports$1);
  })(build$1)), build$1;
}
__name(requireBuild, "requireBuild");
var buildExports = requireBuild(), __assign$5 = function() {
  return __assign$5 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$5.apply(this, arguments);
}, logger$3 = new ConsoleLogger("Parser"), parseAWSExports = /* @__PURE__ */ __name(function(config) {
  var amplifyConfig = {};
  if (config.aws_mobile_analytics_app_id) {
    var Analytics = {
      AWSPinpoint: {
        appId: config.aws_mobile_analytics_app_id,
        region: config.aws_mobile_analytics_app_region
      }
    };
    amplifyConfig.Analytics = Analytics;
  }
  (config.aws_cognito_identity_pool_id || config.aws_user_pools_id) && (amplifyConfig.Auth = {
    userPoolId: config.aws_user_pools_id,
    userPoolWebClientId: config.aws_user_pools_web_client_id,
    region: config.aws_cognito_region,
    identityPoolId: config.aws_cognito_identity_pool_id,
    identityPoolRegion: config.aws_cognito_region,
    mandatorySignIn: config.aws_mandatory_sign_in === "enable",
    signUpVerificationMethod: config.aws_cognito_sign_up_verification_method || "code"
  });
  var storageConfig;
  return config.aws_user_files_s3_bucket ? storageConfig = {
    AWSS3: {
      bucket: config.aws_user_files_s3_bucket,
      region: config.aws_user_files_s3_bucket_region,
      dangerouslyConnectToHttpEndpointForTesting: config.aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing
    }
  } : storageConfig = config ? config.Storage || config : {}, config.Logging && (amplifyConfig.Logging = __assign$5(__assign$5({}, config.Logging), { region: config.aws_project_region })), config.geo && (amplifyConfig.Geo = Object.assign({}, config.geo), config.geo.amazon_location_service && (amplifyConfig.Geo = {
    AmazonLocationService: config.geo.amazon_location_service
  })), amplifyConfig.Analytics = Object.assign({}, amplifyConfig.Analytics, config.Analytics), amplifyConfig.Auth = Object.assign({}, amplifyConfig.Auth, config.Auth), amplifyConfig.Storage = Object.assign({}, storageConfig), amplifyConfig.Logging = Object.assign({}, amplifyConfig.Logging, config.Logging), logger$3.debug("parse config", config, "to amplifyconfig", amplifyConfig), amplifyConfig;
}, "parseAWSExports"), __awaiter$b = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return __name(adopt, "adopt"), new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step"), step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator$b = function(thisArg, body) {
  var _ = { label: 0, sent: /* @__PURE__ */ __name(function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, "sent"), trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    for (; g && (g = 0, op[0] && (_ = 0)), _; ) try {
      if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      switch (y = 0, t && (op = [op[0] & 2, t.value]), op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          return _.label++, { value: op[1], done: !1 };
        case 5:
          _.label++, y = op[1], op = [0];
          continue;
        case 7:
          op = _.ops.pop(), _.trys.pop();
          continue;
        default:
          if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1], t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2], _.ops.push(op);
            break;
          }
          t[2] && _.ops.pop(), _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e], y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: !0 };
  }
}, logger$2 = new ConsoleLogger("CognitoCredentials"), waitForInit$1 = new Promise(function(res, rej) {
  if (!browserOrNode().isBrowser)
    return logger$2.debug("not in the browser, directly resolved"), res();
  var ga = window.gapi && window.gapi.auth2 ? window.gapi.auth2 : null;
  if (ga)
    return logger$2.debug("google api already loaded"), res();
  setTimeout(function() {
    return res();
  }, 2e3);
}), GoogleOAuth$1 = (
  /** @class */
  (function() {
    function GoogleOAuth2() {
      this.initialized = !1, this.refreshGoogleToken = this.refreshGoogleToken.bind(this), this._refreshGoogleTokenImpl = this._refreshGoogleTokenImpl.bind(this);
    }
    return __name(GoogleOAuth2, "GoogleOAuth"), GoogleOAuth2.prototype.refreshGoogleToken = function() {
      return __awaiter$b(this, void 0, void 0, function() {
        return __generator$b(this, function(_a) {
          switch (_a.label) {
            case 0:
              return this.initialized ? [3, 2] : (logger$2.debug("need to wait for the Google SDK loaded"), [4, waitForInit$1]);
            case 1:
              _a.sent(), this.initialized = !0, logger$2.debug("finish waiting"), _a.label = 2;
            case 2:
              return [2, this._refreshGoogleTokenImpl()];
          }
        });
      });
    }, GoogleOAuth2.prototype._refreshGoogleTokenImpl = function() {
      var ga = null;
      return browserOrNode().isBrowser && (ga = window.gapi && window.gapi.auth2 ? window.gapi.auth2 : null), ga ? new Promise(function(res, rej) {
        ga.getAuthInstance().then(function(googleAuth) {
          googleAuth || (logger$2.debug("google Auth undefined"), rej(new NonRetryableError("google Auth undefined")));
          var googleUser = googleAuth.currentUser.get();
          googleUser.isSignedIn() ? (logger$2.debug("refreshing the google access token"), googleUser.reloadAuthResponse().then(function(authResponse) {
            var id_token = authResponse.id_token, expires_at = authResponse.expires_at;
            res({ token: id_token, expires_at });
          }).catch(function(err) {
            err && err.error === "network_error" ? rej("Network error reloading google auth response") : rej(new NonRetryableError("Failed to reload google auth response"));
          })) : rej(new NonRetryableError("User is not signed in with Google"));
        }).catch(function(err) {
          logger$2.debug("Failed to refresh google token", err), rej(new NonRetryableError("Failed to refresh google token"));
        });
      }) : (logger$2.debug("no gapi auth2 available"), Promise.reject("no gapi auth2 available"));
    }, GoogleOAuth2;
  })()
), __awaiter$a = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return __name(adopt, "adopt"), new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step"), step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator$a = function(thisArg, body) {
  var _ = { label: 0, sent: /* @__PURE__ */ __name(function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, "sent"), trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    for (; g && (g = 0, op[0] && (_ = 0)), _; ) try {
      if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      switch (y = 0, t && (op = [op[0] & 2, t.value]), op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          return _.label++, { value: op[1], done: !1 };
        case 5:
          _.label++, y = op[1], op = [0];
          continue;
        case 7:
          op = _.ops.pop(), _.trys.pop();
          continue;
        default:
          if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1], t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2], _.ops.push(op);
            break;
          }
          t[2] && _.ops.pop(), _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e], y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: !0 };
  }
}, logger$1 = new ConsoleLogger("CognitoCredentials"), waitForInit = new Promise(function(res, rej) {
  if (!browserOrNode().isBrowser)
    return logger$1.debug("not in the browser, directly resolved"), res();
  var fb = window.FB;
  if (fb)
    return logger$1.debug("FB SDK already loaded"), res();
  setTimeout(function() {
    return res();
  }, 2e3);
}), FacebookOAuth$1 = (
  /** @class */
  (function() {
    function FacebookOAuth2() {
      this.initialized = !1, this.refreshFacebookToken = this.refreshFacebookToken.bind(this), this._refreshFacebookTokenImpl = this._refreshFacebookTokenImpl.bind(this);
    }
    return __name(FacebookOAuth2, "FacebookOAuth"), FacebookOAuth2.prototype.refreshFacebookToken = function() {
      return __awaiter$a(this, void 0, void 0, function() {
        return __generator$a(this, function(_a) {
          switch (_a.label) {
            case 0:
              return this.initialized ? [3, 2] : (logger$1.debug("need to wait for the Facebook SDK loaded"), [4, waitForInit]);
            case 1:
              _a.sent(), this.initialized = !0, logger$1.debug("finish waiting"), _a.label = 2;
            case 2:
              return [2, this._refreshFacebookTokenImpl()];
          }
        });
      });
    }, FacebookOAuth2.prototype._refreshFacebookTokenImpl = function() {
      var fb = null;
      if (browserOrNode().isBrowser && (fb = window.FB), !fb) {
        var errorMessage = "no fb sdk available";
        return logger$1.debug(errorMessage), Promise.reject(new NonRetryableError(errorMessage));
      }
      return new Promise(function(res, rej) {
        fb.getLoginStatus(function(fbResponse) {
          if (!fbResponse || !fbResponse.authResponse) {
            var errorMessage2 = "no response from facebook when refreshing the jwt token";
            logger$1.debug(errorMessage2), rej(new NonRetryableError(errorMessage2));
          } else {
            var response = fbResponse.authResponse, accessToken = response.accessToken, expiresIn = response.expiresIn, date = /* @__PURE__ */ new Date(), expires_at = expiresIn * 1e3 + date.getTime();
            if (!accessToken) {
              var errorMessage2 = "the jwtToken is undefined";
              logger$1.debug(errorMessage2), rej(new NonRetryableError(errorMessage2));
            }
            res({
              token: accessToken,
              expires_at
            });
          }
        }, { scope: "public_profile,email" });
      });
    }, FacebookOAuth2;
  })()
), GoogleOAuth = new GoogleOAuth$1(), FacebookOAuth = new FacebookOAuth$1(), dataMemory = {}, MemoryStorage = (
  /** @class */
  (function() {
    function MemoryStorage2() {
    }
    return __name(MemoryStorage2, "MemoryStorage"), MemoryStorage2.setItem = function(key, value) {
      return dataMemory[key] = value, dataMemory[key];
    }, MemoryStorage2.getItem = function(key) {
      return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : void 0;
    }, MemoryStorage2.removeItem = function(key) {
      return delete dataMemory[key];
    }, MemoryStorage2.clear = function() {
      return dataMemory = {}, dataMemory;
    }, MemoryStorage2;
  })()
), StorageHelper = (
  /** @class */
  (function() {
    function StorageHelper2() {
      try {
        this.storageWindow = window.localStorage, this.storageWindow.setItem("aws.amplify.test-ls", 1), this.storageWindow.removeItem("aws.amplify.test-ls");
      } catch {
        this.storageWindow = MemoryStorage;
      }
    }
    return __name(StorageHelper2, "StorageHelper"), StorageHelper2.prototype.getStorage = function() {
      return this.storageWindow;
    }, StorageHelper2;
  })()
), defaultPartition = {
  id: "aws",
  outputs: {
    dnsSuffix: "amazonaws.com"
  },
  regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
  regions: ["aws-global"]
}, partitionsInfo = {
  partitions: [
    defaultPartition,
    {
      id: "aws-cn",
      outputs: {
        dnsSuffix: "amazonaws.com.cn"
      },
      regionRegex: "^cn\\-\\w+\\-\\d+$",
      regions: ["aws-cn-global"]
    }
  ]
}, __values = function(o) {
  var s = typeof Symbol == "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length == "number") return {
    next: /* @__PURE__ */ __name(function() {
      return o && i >= o.length && (o = void 0), { value: o && o[i++], done: !o };
    }, "next")
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, getDnsSuffix = /* @__PURE__ */ __name(function(region) {
  var e_1, _a, partitions = partitionsInfo.partitions;
  try {
    for (var partitions_1 = __values(partitions), partitions_1_1 = partitions_1.next(); !partitions_1_1.done; partitions_1_1 = partitions_1.next()) {
      var _b = partitions_1_1.value, regions = _b.regions, outputs = _b.outputs, regionRegex = _b.regionRegex, regex = new RegExp(regionRegex);
      if (regions.includes(region) || regex.test(region))
        return outputs.dnsSuffix;
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      partitions_1_1 && !partitions_1_1.done && (_a = partitions_1.return) && _a.call(partitions_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return defaultPartition.outputs.dnsSuffix;
}, "getDnsSuffix");
function unfetch_module(e, n) {
  return n = n || {}, new Promise(function(t, r) {
    var s = new XMLHttpRequest(), o = [], u = [], i = {}, a = /* @__PURE__ */ __name(function() {
      return { ok: (s.status / 100 | 0) == 2, statusText: s.statusText, status: s.status, url: s.responseURL, text: /* @__PURE__ */ __name(function() {
        return Promise.resolve(s.responseText);
      }, "text"), json: /* @__PURE__ */ __name(function() {
        return Promise.resolve(s.responseText).then(JSON.parse);
      }, "json"), blob: /* @__PURE__ */ __name(function() {
        return Promise.resolve(new Blob([s.response]));
      }, "blob"), clone: a, headers: { keys: /* @__PURE__ */ __name(function() {
        return o;
      }, "keys"), entries: /* @__PURE__ */ __name(function() {
        return u;
      }, "entries"), get: /* @__PURE__ */ __name(function(e2) {
        return i[e2.toLowerCase()];
      }, "get"), has: /* @__PURE__ */ __name(function(e2) {
        return e2.toLowerCase() in i;
      }, "has") } };
    }, "a");
    for (var l in s.open(n.method || "get", e, !0), s.onload = function() {
      s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e2, n2, t2) {
        o.push(n2 = n2.toLowerCase()), u.push([n2, t2]), i[n2] = i[n2] ? i[n2] + "," + t2 : t2;
      }), t(a());
    }, s.onerror = r, s.withCredentials = n.credentials == "include", n.headers) s.setRequestHeader(l, n.headers[l]);
    s.send(n.body || null);
  });
}
__name(unfetch_module, "unfetch_module");
const unfetch_module$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: unfetch_module
}, Symbol.toStringTag, { value: "Module" })), require$$0 = /* @__PURE__ */ getAugmentedNamespace(unfetch_module$1);
var browser, hasRequiredBrowser;
function requireBrowser() {
  return hasRequiredBrowser || (hasRequiredBrowser = 1, browser = self.fetch || (self.fetch = require$$0.default || require$$0)), browser;
}
__name(requireBrowser, "requireBrowser");
requireBrowser();
var withMemoization = /* @__PURE__ */ __name(function(payloadAccessor) {
  var cached;
  return function() {
    return cached || (cached = payloadAccessor()), cached;
  };
}, "withMemoization"), __assign$4 = function() {
  return __assign$4 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$4.apply(this, arguments);
}, __awaiter$9 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return __name(adopt, "adopt"), new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step"), step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator$9 = function(thisArg, body) {
  var _ = { label: 0, sent: /* @__PURE__ */ __name(function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, "sent"), trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    for (; g && (g = 0, op[0] && (_ = 0)), _; ) try {
      if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      switch (y = 0, t && (op = [op[0] & 2, t.value]), op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          return _.label++, { value: op[1], done: !1 };
        case 5:
          _.label++, y = op[1], op = [0];
          continue;
        case 7:
          op = _.ops.pop(), _.trys.pop();
          continue;
        default:
          if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1], t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2], _.ops.push(op);
            break;
          }
          t[2] && _.ops.pop(), _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e], y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: !0 };
  }
}, shouldSendBody = /* @__PURE__ */ __name(function(method) {
  return !["HEAD", "GET", "DELETE"].includes(method.toUpperCase());
}, "shouldSendBody"), fetchTransferHandler = /* @__PURE__ */ __name(function(_a, _b) {
  var url = _a.url, method = _a.method, headers = _a.headers, body = _a.body, abortSignal = _b.abortSignal;
  return __awaiter$9(void 0, void 0, void 0, function() {
    var resp, e_1, responseHeaders, httpResponse, bodyWithMixin, _c, _d;
    return __generator$9(this, function(_e) {
      switch (_e.label) {
        case 0:
          return _e.trys.push([0, 2, , 3]), [4, fetch(url, {
            method,
            headers,
            body: shouldSendBody(method) ? body : void 0,
            signal: abortSignal
          })];
        case 1:
          return resp = _e.sent(), [3, 3];
        case 2:
          throw e_1 = _e.sent(), e_1 instanceof TypeError ? new Error("Network error") : e_1;
        case 3:
          return responseHeaders = {}, (_c = resp.headers) === null || _c === void 0 || _c.forEach(function(value, key) {
            responseHeaders[key.toLowerCase()] = value;
          }), httpResponse = {
            statusCode: resp.status,
            headers: responseHeaders,
            body: null
          }, bodyWithMixin = Object.assign((_d = resp.body) !== null && _d !== void 0 ? _d : {}, {
            text: withMemoization(function() {
              return resp.text();
            }),
            blob: withMemoization(function() {
              return resp.blob();
            }),
            json: withMemoization(function() {
              return resp.json();
            })
          }), [2, __assign$4(__assign$4({}, httpResponse), { body: bodyWithMixin })];
      }
    });
  });
}, "fetchTransferHandler"), __assign$3 = function() {
  return __assign$3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$3.apply(this, arguments);
}, __awaiter$8 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return __name(adopt, "adopt"), new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step"), step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator$8 = function(thisArg, body) {
  var _ = { label: 0, sent: /* @__PURE__ */ __name(function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, "sent"), trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    for (; g && (g = 0, op[0] && (_ = 0)), _; ) try {
      if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      switch (y = 0, t && (op = [op[0] & 2, t.value]), op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          return _.label++, { value: op[1], done: !1 };
        case 5:
          _.label++, y = op[1], op = [0];
          continue;
        case 7:
          op = _.ops.pop(), _.trys.pop();
          continue;
        default:
          if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1], t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2], _.ops.push(op);
            break;
          }
          t[2] && _.ops.pop(), _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e], y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: !0 };
  }
}, DEFAULT_RETRY_ATTEMPTS = 3, retryMiddleware = /* @__PURE__ */ __name(function(_a) {
  var _b = _a.maxAttempts, maxAttempts = _b === void 0 ? DEFAULT_RETRY_ATTEMPTS : _b, retryDecider = _a.retryDecider, computeDelay = _a.computeDelay, abortSignal = _a.abortSignal;
  if (maxAttempts < 1)
    throw new Error("maxAttempts must be greater than 0");
  return function(next, context) {
    return /* @__PURE__ */ __name(function(request) {
      var _a2;
      return __awaiter$8(this, void 0, void 0, function() {
        var error, attemptsCount, response, handleTerminalErrorOrResponse, e_1, delay;
        return __generator$8(this, function(_b2) {
          switch (_b2.label) {
            case 0:
              attemptsCount = (_a2 = context.attemptsCount) !== null && _a2 !== void 0 ? _a2 : 0, handleTerminalErrorOrResponse = /* @__PURE__ */ __name(function() {
                if (response)
                  return addOrIncrementMetadataAttempts(response, attemptsCount), response;
                throw addOrIncrementMetadataAttempts(error, attemptsCount), error;
              }, "handleTerminalErrorOrResponse"), _b2.label = 1;
            case 1:
              if (!(!(abortSignal != null && abortSignal.aborted) && attemptsCount < maxAttempts)) return [3, 11];
              _b2.label = 2;
            case 2:
              return _b2.trys.push([2, 4, , 5]), [4, next(request)];
            case 3:
              return response = _b2.sent(), error = void 0, [3, 5];
            case 4:
              return e_1 = _b2.sent(), error = e_1, response = void 0, [3, 5];
            case 5:
              return attemptsCount = context.attemptsCount > attemptsCount ? context.attemptsCount : attemptsCount + 1, context.attemptsCount = attemptsCount, [4, retryDecider(response, error)];
            case 6:
              return _b2.sent() ? !(abortSignal != null && abortSignal.aborted) && attemptsCount < maxAttempts ? (delay = computeDelay(attemptsCount), [4, cancellableSleep(delay, abortSignal)]) : [3, 8] : [3, 9];
            case 7:
              _b2.sent(), _b2.label = 8;
            case 8:
              return [3, 1];
            case 9:
              return [2, handleTerminalErrorOrResponse()];
            case 10:
              return [3, 1];
            case 11:
              if (abortSignal != null && abortSignal.aborted)
                throw new Error("Request aborted.");
              return [2, handleTerminalErrorOrResponse()];
          }
        });
      });
    }, "retryMiddleware");
  };
}, "retryMiddleware"), cancellableSleep = /* @__PURE__ */ __name(function(timeoutMs, abortSignal) {
  if (abortSignal != null && abortSignal.aborted)
    return Promise.resolve();
  var timeoutId, sleepPromiseResolveFn, sleepPromise = new Promise(function(resolve) {
    sleepPromiseResolveFn = resolve, timeoutId = setTimeout(resolve, timeoutMs);
  });
  return abortSignal == null || abortSignal.addEventListener("abort", /* @__PURE__ */ __name(function cancelSleep(event) {
    clearTimeout(timeoutId), abortSignal == null || abortSignal.removeEventListener("abort", cancelSleep), sleepPromiseResolveFn();
  }, "cancelSleep")), sleepPromise;
}, "cancellableSleep"), addOrIncrementMetadataAttempts = /* @__PURE__ */ __name(function(nextHandlerOutput, attempts) {
  var _a;
  Object.prototype.toString.call(nextHandlerOutput) === "[object Object]" && (nextHandlerOutput.$metadata = __assign$3(__assign$3({}, (_a = nextHandlerOutput.$metadata) !== null && _a !== void 0 ? _a : {}), { attempts }));
}, "addOrIncrementMetadataAttempts"), DEFAULT_MAX_DELAY_MS = 300 * 1e3, jitteredBackoff = /* @__PURE__ */ __name(function(attempt) {
  var delayFunction = jitteredBackoff$1(DEFAULT_MAX_DELAY_MS), delay = delayFunction(attempt);
  return delay === !1 ? DEFAULT_MAX_DELAY_MS : delay;
}, "jitteredBackoff"), CLOCK_SKEW_ERROR_CODES = [
  "AuthFailure",
  "InvalidSignatureException",
  "RequestExpired",
  "RequestInTheFuture",
  "RequestTimeTooSkewed",
  "SignatureDoesNotMatch",
  "BadRequestException"
  // API Gateway
], isClockSkewError = /* @__PURE__ */ __name(function(errorCode) {
  return CLOCK_SKEW_ERROR_CODES.includes(errorCode);
}, "isClockSkewError"), __awaiter$7 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return __name(adopt, "adopt"), new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step"), step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator$7 = function(thisArg, body) {
  var _ = { label: 0, sent: /* @__PURE__ */ __name(function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, "sent"), trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    for (; g && (g = 0, op[0] && (_ = 0)), _; ) try {
      if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      switch (y = 0, t && (op = [op[0] & 2, t.value]), op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          return _.label++, { value: op[1], done: !1 };
        case 5:
          _.label++, y = op[1], op = [0];
          continue;
        case 7:
          op = _.ops.pop(), _.trys.pop();
          continue;
        default:
          if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1], t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2], _.ops.push(op);
            break;
          }
          t[2] && _.ops.pop(), _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e], y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: !0 };
  }
}, getRetryDecider = /* @__PURE__ */ __name(function(errorParser) {
  return function(response, error) {
    return __awaiter$7(void 0, void 0, void 0, function() {
      var errorCode, _a, statusCode, _b;
      return __generator$7(this, function(_c) {
        switch (_c.label) {
          case 0:
            return error == null ? [3, 1] : (_a = error, [3, 3]);
          case 1:
            return [4, errorParser(response)];
          case 2:
            _a = _c.sent(), _c.label = 3;
          case 3:
            return errorCode = ((_b = _a) !== null && _b !== void 0 ? _b : {}).name, statusCode = response == null ? void 0 : response.statusCode, [2, isConnectionError(error) || isThrottlingError(statusCode, errorCode) || isClockSkewError(errorCode) || isServerSideError(statusCode, errorCode)];
        }
      });
    });
  };
}, "getRetryDecider"), THROTTLING_ERROR_CODES = [
  "BandwidthLimitExceeded",
  "EC2ThrottledException",
  "LimitExceededException",
  "PriorRequestNotComplete",
  "ProvisionedThroughputExceededException",
  "RequestLimitExceeded",
  "RequestThrottled",
  "RequestThrottledException",
  "SlowDown",
  "ThrottledException",
  "Throttling",
  "ThrottlingException",
  "TooManyRequestsException"
], TIMEOUT_ERROR_CODES = [
  "TimeoutError",
  "RequestTimeout",
  "RequestTimeoutException"
], isThrottlingError = /* @__PURE__ */ __name(function(statusCode, errorCode) {
  return statusCode === 429 || THROTTLING_ERROR_CODES.includes(errorCode);
}, "isThrottlingError"), isConnectionError = /* @__PURE__ */ __name(function(error) {
  return (error == null ? void 0 : error.name) === "Network error";
}, "isConnectionError"), isServerSideError = /* @__PURE__ */ __name(function(statusCode, errorCode) {
  return [500, 502, 503, 504].includes(statusCode) || TIMEOUT_ERROR_CODES.includes(errorCode);
}, "isServerSideError"), __awaiter$6 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return __name(adopt, "adopt"), new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step"), step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator$6 = function(thisArg, body) {
  var _ = { label: 0, sent: /* @__PURE__ */ __name(function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, "sent"), trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    for (; g && (g = 0, op[0] && (_ = 0)), _; ) try {
      if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      switch (y = 0, t && (op = [op[0] & 2, t.value]), op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          return _.label++, { value: op[1], done: !1 };
        case 5:
          _.label++, y = op[1], op = [0];
          continue;
        case 7:
          op = _.ops.pop(), _.trys.pop();
          continue;
        default:
          if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1], t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2], _.ops.push(op);
            break;
          }
          t[2] && _.ops.pop(), _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e], y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: !0 };
  }
}, userAgentMiddleware = /* @__PURE__ */ __name(function(_a) {
  var _b = _a.userAgentHeader, userAgentHeader = _b === void 0 ? "x-amz-user-agent" : _b, _c = _a.userAgentValue, userAgentValue = _c === void 0 ? "" : _c;
  return function(next) {
    return /* @__PURE__ */ __name(function(request) {
      return __awaiter$6(this, void 0, void 0, function() {
        var result, headerName, response;
        return __generator$6(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return userAgentValue.trim().length !== 0 ? [3, 2] : [4, next(request)];
            case 1:
              return result = _a2.sent(), [2, result];
            case 2:
              return headerName = userAgentHeader.toLowerCase(), request.headers[headerName] = request.headers[headerName] ? "".concat(request.headers[headerName], " ").concat(userAgentValue) : userAgentValue, [4, next(request)];
            case 3:
              return response = _a2.sent(), [2, response];
          }
        });
      });
    }, "userAgentMiddleware");
  };
}, "userAgentMiddleware"), composeTransferHandler = /* @__PURE__ */ __name(function(coreHandler, middleware) {
  return function(request, options) {
    for (var context = {}, composedHandler = /* @__PURE__ */ __name(function(request2) {
      return coreHandler(request2, options);
    }, "composedHandler"), i = middleware.length - 1; i >= 0; i--) {
      var m = middleware[i], resolvedMiddleware = m(options);
      composedHandler = resolvedMiddleware(composedHandler, context);
    }
    return composedHandler(request);
  };
}, "composeTransferHandler"), unauthenticatedHandler = composeTransferHandler(fetchTransferHandler, [userAgentMiddleware, retryMiddleware]), __assign$2 = function() {
  return __assign$2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$2.apply(this, arguments);
}, parseMetadata = /* @__PURE__ */ __name(function(response) {
  var _a, _b, headers = response.headers, statusCode = response.statusCode;
  return __assign$2(__assign$2({}, isMetadataBearer(response) ? response.$metadata : {}), { httpStatusCode: statusCode, requestId: (_b = (_a = headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : headers["x-amzn-request-id"]) !== null && _b !== void 0 ? _b : headers["x-amz-request-id"], extendedRequestId: headers["x-amz-id-2"], cfId: headers["x-amz-cf-id"] });
}, "parseMetadata"), isMetadataBearer = /* @__PURE__ */ __name(function(response) {
  return typeof (response == null ? void 0 : response.$metadata) == "object";
}, "isMetadataBearer"), __awaiter$5 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return __name(adopt, "adopt"), new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step"), step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator$5 = function(thisArg, body) {
  var _ = { label: 0, sent: /* @__PURE__ */ __name(function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, "sent"), trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    for (; g && (g = 0, op[0] && (_ = 0)), _; ) try {
      if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      switch (y = 0, t && (op = [op[0] & 2, t.value]), op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          return _.label++, { value: op[1], done: !1 };
        case 5:
          _.label++, y = op[1], op = [0];
          continue;
        case 7:
          op = _.ops.pop(), _.trys.pop();
          continue;
        default:
          if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1], t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2], _.ops.push(op);
            break;
          }
          t[2] && _.ops.pop(), _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e], y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: !0 };
  }
}, __read = function(o, n) {
  var m = typeof Symbol == "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    for (; (n === void 0 || n-- > 0) && !(r = i.next()).done; ) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      r && !r.done && (m = i.return) && m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}, parseJsonError = /* @__PURE__ */ __name(function(response) {
  return __awaiter$5(void 0, void 0, void 0, function() {
    var body, sanitizeErrorCode, code, message, error, _a, _b, _c, _d, _e;
    return __generator$5(this, function(_f) {
      switch (_f.label) {
        case 0:
          return !response || response.statusCode < 300 ? [
            2
            /*return*/
          ] : [4, parseJsonBody(response)];
        case 1:
          return body = _f.sent(), sanitizeErrorCode = /* @__PURE__ */ __name(function(rawValue) {
            var _a2 = __read(rawValue.toString().split(/[\,\:]+/), 1), cleanValue = _a2[0];
            return cleanValue.includes("#") ? cleanValue.split("#")[1] : cleanValue;
          }, "sanitizeErrorCode"), code = sanitizeErrorCode((_c = (_b = (_a = response.headers["x-amzn-errortype"]) !== null && _a !== void 0 ? _a : body.code) !== null && _b !== void 0 ? _b : body.__type) !== null && _c !== void 0 ? _c : "UnknownError"), message = (_e = (_d = body.message) !== null && _d !== void 0 ? _d : body.Message) !== null && _e !== void 0 ? _e : "Unknown error", error = new Error(message), [2, Object.assign(error, {
            name: code,
            $metadata: parseMetadata(response)
          })];
      }
    });
  });
}, "parseJsonError"), parseJsonBody = /* @__PURE__ */ __name(function(response) {
  return __awaiter$5(void 0, void 0, void 0, function() {
    var output;
    return __generator$5(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (!response.body)
            throw new Error("Missing response payload");
          return [4, response.body.json()];
        case 1:
          return output = _a.sent(), [2, Object.assign(output, {
            $metadata: parseMetadata(response)
          })];
      }
    });
  });
}, "parseJsonBody"), __awaiter$4 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return __name(adopt, "adopt"), new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step"), step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator$4 = function(thisArg, body) {
  var _ = { label: 0, sent: /* @__PURE__ */ __name(function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, "sent"), trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    for (; g && (g = 0, op[0] && (_ = 0)), _; ) try {
      if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      switch (y = 0, t && (op = [op[0] & 2, t.value]), op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          return _.label++, { value: op[1], done: !1 };
        case 5:
          _.label++, y = op[1], op = [0];
          continue;
        case 7:
          op = _.ops.pop(), _.trys.pop();
          continue;
        default:
          if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1], t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2], _.ops.push(op);
            break;
          }
          t[2] && _.ops.pop(), _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e], y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: !0 };
  }
}, SERVICE_NAME = "cognito-identity", endpointResolver = /* @__PURE__ */ __name(function(_a) {
  var region = _a.region;
  return {
    url: new URL("https://cognito-identity.".concat(region, ".").concat(getDnsSuffix(region)))
  };
}, "endpointResolver"), disableCacheMiddleware = /* @__PURE__ */ __name(function() {
  return function(next, context) {
    return /* @__PURE__ */ __name(function(request) {
      return __awaiter$4(this, void 0, void 0, function() {
        return __generator$4(this, function(_a) {
          return request.headers["cache-control"] = "no-store", [2, next(request)];
        });
      });
    }, "disableCacheMiddleware");
  };
}, "disableCacheMiddleware"), cognitoIdentityTransferHandler = composeTransferHandler(unauthenticatedHandler, [disableCacheMiddleware]), defaultConfig = {
  service: SERVICE_NAME,
  endpointResolver,
  retryDecider: getRetryDecider(parseJsonError),
  computeDelay: jitteredBackoff,
  userAgentValue: getAmplifyUserAgent()
};
observeFrameworkChanges(function() {
  defaultConfig.userAgentValue = getAmplifyUserAgent();
});
var getSharedHeaders = /* @__PURE__ */ __name(function(operation) {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.".concat(operation)
  };
}, "getSharedHeaders"), buildHttpRpcRequest = /* @__PURE__ */ __name(function(_a, headers, body) {
  var url = _a.url;
  return {
    headers,
    url,
    body,
    method: "POST"
  };
}, "buildHttpRpcRequest"), __assign$1 = function() {
  return __assign$1 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$1.apply(this, arguments);
}, __awaiter$3 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return __name(adopt, "adopt"), new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step"), step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator$3 = function(thisArg, body) {
  var _ = { label: 0, sent: /* @__PURE__ */ __name(function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, "sent"), trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    for (; g && (g = 0, op[0] && (_ = 0)), _; ) try {
      if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      switch (y = 0, t && (op = [op[0] & 2, t.value]), op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          return _.label++, { value: op[1], done: !1 };
        case 5:
          _.label++, y = op[1], op = [0];
          continue;
        case 7:
          op = _.ops.pop(), _.trys.pop();
          continue;
        default:
          if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1], t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2], _.ops.push(op);
            break;
          }
          t[2] && _.ops.pop(), _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e], y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: !0 };
  }
}, composeServiceApi = /* @__PURE__ */ __name(function(transferHandler, serializer, deserializer, defaultConfig2) {
  return function(config, input) {
    return __awaiter$3(void 0, void 0, void 0, function() {
      var resolvedConfig, endpoint, request, response;
      return __generator$3(this, function(_a) {
        switch (_a.label) {
          case 0:
            return resolvedConfig = __assign$1(__assign$1({}, defaultConfig2), config), [4, resolvedConfig.endpointResolver(resolvedConfig, input)];
          case 1:
            return endpoint = _a.sent(), [4, serializer(input, endpoint)];
          case 2:
            return request = _a.sent(), [4, transferHandler(request, __assign$1({}, resolvedConfig))];
          case 3:
            return response = _a.sent(), [4, deserializer(response)];
          case 4:
            return [2, _a.sent()];
        }
      });
    });
  };
}, "composeServiceApi"), __awaiter$2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return __name(adopt, "adopt"), new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step"), step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator$2 = function(thisArg, body) {
  var _ = { label: 0, sent: /* @__PURE__ */ __name(function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, "sent"), trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    for (; g && (g = 0, op[0] && (_ = 0)), _; ) try {
      if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      switch (y = 0, t && (op = [op[0] & 2, t.value]), op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          return _.label++, { value: op[1], done: !1 };
        case 5:
          _.label++, y = op[1], op = [0];
          continue;
        case 7:
          op = _.ops.pop(), _.trys.pop();
          continue;
        default:
          if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1], t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2], _.ops.push(op);
            break;
          }
          t[2] && _.ops.pop(), _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e], y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: !0 };
  }
}, getIdSerializer = /* @__PURE__ */ __name(function(input, endpoint) {
  var headers = getSharedHeaders("GetId"), body = JSON.stringify(input);
  return buildHttpRpcRequest(endpoint, headers, body);
}, "getIdSerializer"), getIdDeserializer = /* @__PURE__ */ __name(function(response) {
  return __awaiter$2(void 0, void 0, void 0, function() {
    var error, body;
    return __generator$2(this, function(_a) {
      switch (_a.label) {
        case 0:
          return response.statusCode >= 300 ? [4, parseJsonError(response)] : [3, 2];
        case 1:
          throw error = _a.sent(), error;
        case 2:
          return [4, parseJsonBody(response)];
        case 3:
          return body = _a.sent(), [2, {
            IdentityId: body.IdentityId,
            $metadata: parseMetadata(response)
          }];
      }
    });
  });
}, "getIdDeserializer"), getId = composeServiceApi(cognitoIdentityTransferHandler, getIdSerializer, getIdDeserializer, defaultConfig), __awaiter$1 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return __name(adopt, "adopt"), new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step"), step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator$1 = function(thisArg, body) {
  var _ = { label: 0, sent: /* @__PURE__ */ __name(function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, "sent"), trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    for (; g && (g = 0, op[0] && (_ = 0)), _; ) try {
      if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      switch (y = 0, t && (op = [op[0] & 2, t.value]), op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          return _.label++, { value: op[1], done: !1 };
        case 5:
          _.label++, y = op[1], op = [0];
          continue;
        case 7:
          op = _.ops.pop(), _.trys.pop();
          continue;
        default:
          if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1], t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2], _.ops.push(op);
            break;
          }
          t[2] && _.ops.pop(), _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e], y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: !0 };
  }
}, getCredentialsForIdentitySerializer = /* @__PURE__ */ __name(function(input, endpoint) {
  var headers = getSharedHeaders("GetCredentialsForIdentity"), body = JSON.stringify(input);
  return buildHttpRpcRequest(endpoint, headers, body);
}, "getCredentialsForIdentitySerializer"), getCredentialsForIdentityDeserializer = /* @__PURE__ */ __name(function(response) {
  return __awaiter$1(void 0, void 0, void 0, function() {
    var error, body;
    return __generator$1(this, function(_a) {
      switch (_a.label) {
        case 0:
          return response.statusCode >= 300 ? [4, parseJsonError(response)] : [3, 2];
        case 1:
          throw error = _a.sent(), error;
        case 2:
          return [4, parseJsonBody(response)];
        case 3:
          return body = _a.sent(), [2, {
            IdentityId: body.IdentityId,
            Credentials: deserializeCredentials(body.Credentials),
            $metadata: parseMetadata(response)
          }];
      }
    });
  });
}, "getCredentialsForIdentityDeserializer"), deserializeCredentials = /* @__PURE__ */ __name(function(output) {
  return output === void 0 && (output = {}), {
    AccessKeyId: output.AccessKeyId,
    SecretKey: output.SecretKey,
    SessionToken: output.SessionToken,
    Expiration: new Date(output.Expiration * 1e3)
  };
}, "deserializeCredentials"), getCredentialsForIdentity = composeServiceApi(cognitoIdentityTransferHandler, getCredentialsForIdentitySerializer, getCredentialsForIdentityDeserializer, defaultConfig), __assign = function() {
  return __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign.apply(this, arguments);
}, __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return __name(adopt, "adopt"), new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step"), step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}, __generator = function(thisArg, body) {
  var _ = { label: 0, sent: /* @__PURE__ */ __name(function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, "sent"), trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    for (; g && (g = 0, op[0] && (_ = 0)), _; ) try {
      if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      switch (y = 0, t && (op = [op[0] & 2, t.value]), op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          return _.label++, { value: op[1], done: !1 };
        case 5:
          _.label++, y = op[1], op = [0];
          continue;
        case 7:
          op = _.ops.pop(), _.trys.pop();
          continue;
        default:
          if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1], t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2], _.ops.push(op);
            break;
          }
          t[2] && _.ops.pop(), _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e], y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: !0 };
  }
}, logger = new ConsoleLogger("Credentials"), CREDENTIALS_TTL = 3e3 * 1e3, COGNITO_IDENTITY_KEY_PREFIX = "CognitoIdentityId-", AMPLIFY_SYMBOL = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default", dispatchCredentialsEvent = /* @__PURE__ */ __name(function(event, data, message) {
  Hub.dispatch("core", { event, data, message }, "Credentials", AMPLIFY_SYMBOL);
}, "dispatchCredentialsEvent"), CredentialsClass = (
  /** @class */
  (function() {
    function CredentialsClass2(config) {
      this._gettingCredPromise = null, this._refreshHandlers = {}, this.Auth = void 0, this.configure(config), this._refreshHandlers.google = GoogleOAuth.refreshGoogleToken, this._refreshHandlers.facebook = FacebookOAuth.refreshFacebookToken;
    }
    return __name(CredentialsClass2, "CredentialsClass"), CredentialsClass2.prototype.getModuleName = function() {
      return "Credentials";
    }, CredentialsClass2.prototype.getCredSource = function() {
      return this._credentials_source;
    }, CredentialsClass2.prototype.configure = function(config) {
      if (!config)
        return this._config || {};
      this._config = Object.assign({}, this._config, config);
      var refreshHandlers = this._config.refreshHandlers;
      return refreshHandlers && (this._refreshHandlers = __assign(__assign({}, this._refreshHandlers), refreshHandlers)), this._storage = this._config.storage, this._storage || (this._storage = new StorageHelper().getStorage()), this._storageSync = Promise.resolve(), typeof this._storage.sync == "function" && (this._storageSync = this._storage.sync()), dispatchCredentialsEvent("credentials_configured", null, "Credentials has been configured successfully"), this._config;
    }, CredentialsClass2.prototype.get = function() {
      return logger.debug("getting credentials"), this._pickupCredentials();
    }, CredentialsClass2.prototype._getCognitoIdentityIdStorageKey = function(identityPoolId) {
      return "".concat(COGNITO_IDENTITY_KEY_PREFIX).concat(identityPoolId);
    }, CredentialsClass2.prototype._pickupCredentials = function() {
      return logger.debug("picking up credentials"), !this._gettingCredPromise || !this._gettingCredPromise.isPending() ? (logger.debug("getting new cred promise"), this._gettingCredPromise = makeQuerablePromise(this._keepAlive())) : logger.debug("getting old cred promise"), this._gettingCredPromise;
    }, CredentialsClass2.prototype._keepAlive = function() {
      return __awaiter(this, void 0, void 0, function() {
        var cred, _a, Auth, user_1, session, refreshToken_1, refreshRequest, err_1;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (logger.debug("checking if credentials exists and not expired"), cred = this._credentials, cred && !this._isExpired(cred) && !this._isPastTTL())
                return logger.debug("credentials not changed and not expired, directly return"), [2, Promise.resolve(cred)];
              if (logger.debug("need to get a new credential or refresh the existing one"), _a = this.Auth, Auth = _a === void 0 ? Amplify.Auth : _a, !Auth || typeof Auth.currentUserCredentials != "function")
                return [2, this._setCredentialsForGuest()];
              if (!(!this._isExpired(cred) && this._isPastTTL())) return [3, 6];
              logger.debug("ttl has passed but token is not yet expired"), _b.label = 1;
            case 1:
              return _b.trys.push([1, 5, , 6]), [4, Auth.currentUserPoolUser()];
            case 2:
              return user_1 = _b.sent(), [4, Auth.currentSession()];
            case 3:
              return session = _b.sent(), refreshToken_1 = session.refreshToken, refreshRequest = new Promise(function(res, rej) {
                user_1.refreshSession(refreshToken_1, function(err, data) {
                  return err ? rej(err) : res(data);
                });
              }), [4, refreshRequest];
            case 4:
              return _b.sent(), [3, 6];
            case 5:
              return err_1 = _b.sent(), logger.debug("Error attempting to refreshing the session", err_1), [3, 6];
            case 6:
              return [2, Auth.currentUserCredentials()];
          }
        });
      });
    }, CredentialsClass2.prototype.refreshFederatedToken = function(federatedInfo) {
      logger.debug("Getting federated credentials");
      var provider = federatedInfo.provider, user = federatedInfo.user, token = federatedInfo.token, identity_id = federatedInfo.identity_id, expires_at = federatedInfo.expires_at;
      expires_at = new Date(expires_at).getFullYear() === 1970 ? expires_at * 1e3 : expires_at;
      var that = this;
      return logger.debug("checking if federated jwt token expired"), expires_at > (/* @__PURE__ */ new Date()).getTime() ? (logger.debug("token not expired"), this._setCredentialsFromFederation({
        provider,
        token,
        user,
        identity_id,
        expires_at
      })) : that._refreshHandlers[provider] && typeof that._refreshHandlers[provider] == "function" ? (logger.debug("getting refreshed jwt token from federation provider"), this._providerRefreshWithRetry({
        refreshHandler: that._refreshHandlers[provider],
        provider,
        user
      })) : (logger.debug("no refresh handler for provider:", provider), this.clear(), Promise.reject("no refresh handler for provider"));
    }, CredentialsClass2.prototype._providerRefreshWithRetry = function(_a) {
      var _this = this, refreshHandler = _a.refreshHandler, provider = _a.provider, user = _a.user, MAX_DELAY_MS2 = 10 * 1e3;
      return jitteredExponentialRetry(refreshHandler, [], MAX_DELAY_MS2).then(function(data) {
        return logger.debug("refresh federated token sucessfully", data), _this._setCredentialsFromFederation({
          provider,
          token: data.token,
          user,
          identity_id: data.identity_id,
          expires_at: data.expires_at
        });
      }).catch(function(e) {
        var isNetworkError = typeof e == "string" && e.toLowerCase().lastIndexOf("network error", e.length) === 0;
        return isNetworkError || _this.clear(), logger.debug("refresh federated token failed", e), Promise.reject("refreshing federation token failed: " + e);
      });
    }, CredentialsClass2.prototype._isExpired = function(credentials) {
      if (!credentials)
        return logger.debug("no credentials for expiration check"), !0;
      logger.debug("are these credentials expired?", credentials);
      var ts = Date.now(), expiration = credentials.expiration;
      return expiration.getTime() <= ts;
    }, CredentialsClass2.prototype._isPastTTL = function() {
      return this._nextCredentialsRefresh <= Date.now();
    }, CredentialsClass2.prototype._setCredentialsForGuest = function() {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var _b, identityPoolId, region, mandatorySignIn, identityPoolRegion, identityId, _c, cognitoConfig, guestCredentialsProvider, credentials, _this = this;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              return logger.debug("setting credentials for guest"), !((_a = this._config) === null || _a === void 0) && _a.identityPoolId || (this._config = Object.assign({}, this._config, parseAWSExports(this._config || {}).Auth)), _b = this._config, identityPoolId = _b.identityPoolId, region = _b.region, mandatorySignIn = _b.mandatorySignIn, identityPoolRegion = _b.identityPoolRegion, mandatorySignIn ? [2, Promise.reject("cannot get guest credentials when mandatory signin enabled")] : identityPoolId ? !identityPoolRegion && !region ? (logger.debug("region is not configured for getting the credentials"), [2, Promise.reject("region is not configured for getting the credentials")]) : (_c = this, [4, this._getGuestIdentityId()]) : (logger.debug("No Cognito Identity pool provided for unauthenticated access"), [2, Promise.reject("No Cognito Identity pool provided for unauthenticated access")]);
            case 1:
              return identityId = _c._identityId = _d.sent(), cognitoConfig = { region: identityPoolRegion ?? region }, guestCredentialsProvider = /* @__PURE__ */ __name(function() {
                return __awaiter(_this, void 0, void 0, function() {
                  var IdentityId, Credentials2;
                  return __generator(this, function(_a2) {
                    switch (_a2.label) {
                      case 0:
                        return identityId ? [3, 2] : [4, getId(cognitoConfig, {
                          IdentityPoolId: identityPoolId
                        })];
                      case 1:
                        IdentityId = _a2.sent().IdentityId, this._identityId = IdentityId, _a2.label = 2;
                      case 2:
                        return [4, getCredentialsForIdentity(cognitoConfig, {
                          IdentityId: this._identityId
                        })];
                      case 3:
                        return Credentials2 = _a2.sent().Credentials, [2, {
                          identityId: this._identityId,
                          accessKeyId: Credentials2.AccessKeyId,
                          secretAccessKey: Credentials2.SecretKey,
                          sessionToken: Credentials2.SessionToken,
                          expiration: Credentials2.Expiration
                        }];
                    }
                  });
                });
              }, "guestCredentialsProvider"), credentials = guestCredentialsProvider().catch(function(err) {
                return __awaiter(_this, void 0, void 0, function() {
                  return __generator(this, function(_a2) {
                    throw err;
                  });
                });
              }), [2, this._loadCredentials(credentials, "guest", !1, null).then(function(res) {
                return res;
              }).catch(function(e) {
                return __awaiter(_this, void 0, void 0, function() {
                  var guestCredentialsProvider_1, _this2 = this;
                  return __generator(this, function(_a2) {
                    switch (_a2.label) {
                      case 0:
                        return e.name === "ResourceNotFoundException" && e.message === "Identity '".concat(identityId, "' not found.") ? (logger.debug("Failed to load guest credentials"), [4, this._removeGuestIdentityId()]) : [3, 2];
                      case 1:
                        return _a2.sent(), guestCredentialsProvider_1 = /* @__PURE__ */ __name(function() {
                          return __awaiter(_this2, void 0, void 0, function() {
                            var IdentityId, Credentials2;
                            return __generator(this, function(_a3) {
                              switch (_a3.label) {
                                case 0:
                                  return [4, getId(cognitoConfig, {
                                    IdentityPoolId: identityPoolId
                                  })];
                                case 1:
                                  return IdentityId = _a3.sent().IdentityId, this._identityId = IdentityId, [4, getCredentialsForIdentity(cognitoConfig, {
                                    IdentityId
                                  })];
                                case 2:
                                  return Credentials2 = _a3.sent().Credentials, [2, {
                                    identityId: IdentityId,
                                    accessKeyId: Credentials2.AccessKeyId,
                                    secretAccessKey: Credentials2.SecretKey,
                                    sessionToken: Credentials2.SessionToken,
                                    expiration: Credentials2.Expiration
                                  }];
                              }
                            });
                          });
                        }, "guestCredentialsProvider_1"), credentials = guestCredentialsProvider_1().catch(function(err) {
                          return __awaiter(_this2, void 0, void 0, function() {
                            return __generator(this, function(_a3) {
                              throw err;
                            });
                          });
                        }), [2, this._loadCredentials(credentials, "guest", !1, null)];
                      case 2:
                        return [2, e];
                    }
                  });
                });
              })];
          }
        });
      });
    }, CredentialsClass2.prototype._setCredentialsFromFederation = function(params) {
      var _this = this, provider = params.provider, token = params.token, identity_id = params.identity_id, domains = {
        google: "accounts.google.com",
        facebook: "graph.facebook.com",
        amazon: "www.amazon.com",
        developer: "cognito-identity.amazonaws.com"
      }, domain = domains[provider] || provider;
      if (!domain)
        return Promise.reject("You must specify a federated provider");
      var logins = {};
      logins[domain] = token;
      var _a = this._config, identityPoolId = _a.identityPoolId, region = _a.region, identityPoolRegion = _a.identityPoolRegion;
      if (!identityPoolId)
        return logger.debug("No Cognito Federated Identity pool provided"), Promise.reject("No Cognito Federated Identity pool provided");
      if (!identityPoolRegion && !region)
        return logger.debug("region is not configured for getting the credentials"), Promise.reject("region is not configured for getting the credentials");
      var cognitoConfig = { region: identityPoolRegion ?? region }, authenticatedCredentialsProvider = /* @__PURE__ */ __name(function() {
        return __awaiter(_this, void 0, void 0, function() {
          var IdentityId, Credentials2;
          return __generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                return identity_id ? [3, 2] : [4, getId(cognitoConfig, {
                  IdentityPoolId: identityPoolId,
                  Logins: logins
                })];
              case 1:
                IdentityId = _a2.sent().IdentityId, identity_id = IdentityId, _a2.label = 2;
              case 2:
                return [4, getCredentialsForIdentity(cognitoConfig, {
                  IdentityId: identity_id,
                  Logins: logins
                })];
              case 3:
                return Credentials2 = _a2.sent().Credentials, [2, {
                  identityId: identity_id,
                  accessKeyId: Credentials2.AccessKeyId,
                  secretAccessKey: Credentials2.SecretKey,
                  sessionToken: Credentials2.SessionToken,
                  expiration: Credentials2.Expiration
                }];
            }
          });
        });
      }, "authenticatedCredentialsProvider"), credentials = authenticatedCredentialsProvider().catch(function(err) {
        return __awaiter(_this, void 0, void 0, function() {
          return __generator(this, function(_a2) {
            throw err;
          });
        });
      });
      return this._loadCredentials(credentials, "federated", !0, params);
    }, CredentialsClass2.prototype._setCredentialsFromSession = function(session) {
      var _this = this;
      logger.debug("set credentials from session");
      var idToken = session.getIdToken().getJwtToken(), _a = this._config, region = _a.region, userPoolId = _a.userPoolId, identityPoolId = _a.identityPoolId, identityPoolRegion = _a.identityPoolRegion;
      if (!identityPoolId)
        return logger.debug("No Cognito Federated Identity pool provided"), Promise.reject("No Cognito Federated Identity pool provided");
      if (!identityPoolRegion && !region)
        return logger.debug("region is not configured for getting the credentials"), Promise.reject("region is not configured for getting the credentials");
      var key = "cognito-idp." + region + ".amazonaws.com/" + userPoolId, logins = {};
      logins[key] = idToken;
      var cognitoConfig = { region: identityPoolRegion ?? region }, credentialsProvider = /* @__PURE__ */ __name(function() {
        return __awaiter(_this, void 0, void 0, function() {
          var guestIdentityId, generatedOrRetrievedIdentityId, IdentityId, _a2, _b, AccessKeyId, Expiration, SecretKey, SessionToken, primaryIdentityId;
          return __generator(this, function(_c) {
            switch (_c.label) {
              case 0:
                return [4, this._getGuestIdentityId()];
              case 1:
                return guestIdentityId = _c.sent(), guestIdentityId ? [3, 3] : [4, getId(cognitoConfig, {
                  IdentityPoolId: identityPoolId,
                  Logins: logins
                })];
              case 2:
                IdentityId = _c.sent().IdentityId, generatedOrRetrievedIdentityId = IdentityId, _c.label = 3;
              case 3:
                return [4, getCredentialsForIdentity(cognitoConfig, {
                  IdentityId: guestIdentityId || generatedOrRetrievedIdentityId,
                  Logins: logins
                })];
              case 4:
                return _a2 = _c.sent(), _b = _a2.Credentials, AccessKeyId = _b.AccessKeyId, Expiration = _b.Expiration, SecretKey = _b.SecretKey, SessionToken = _b.SessionToken, primaryIdentityId = _a2.IdentityId, this._identityId = primaryIdentityId, guestIdentityId ? (logger.debug("The guest identity ".concat(guestIdentityId, " has been successfully linked to the logins")), guestIdentityId === primaryIdentityId && logger.debug("The guest identity ".concat(guestIdentityId, " has become the primary identity")), [4, this._removeGuestIdentityId()]) : [3, 6];
              case 5:
                _c.sent(), _c.label = 6;
              case 6:
                return [2, {
                  accessKeyId: AccessKeyId,
                  secretAccessKey: SecretKey,
                  sessionToken: SessionToken,
                  expiration: Expiration,
                  identityId: primaryIdentityId
                }];
            }
          });
        });
      }, "credentialsProvider"), credentials = credentialsProvider().catch(function(err) {
        return __awaiter(_this, void 0, void 0, function() {
          return __generator(this, function(_a2) {
            throw err;
          });
        });
      });
      return this._loadCredentials(credentials, "userPool", !0, null);
    }, CredentialsClass2.prototype._loadCredentials = function(credentials, source, authenticated, info) {
      var _this = this, that = this;
      return new Promise(function(res, rej) {
        credentials.then(function(credentials2) {
          return __awaiter(_this, void 0, void 0, function() {
            var user, provider, token, expires_at, identity_id;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (logger.debug("Load credentials successfully", credentials2), this._identityId && !credentials2.identityId && (credentials2.identityId = this._identityId), that._credentials = credentials2, that._credentials.authenticated = authenticated, that._credentials_source = source, that._nextCredentialsRefresh = (/* @__PURE__ */ new Date()).getTime() + CREDENTIALS_TTL, source === "federated") {
                    user = Object.assign({ id: this._credentials.identityId }, info.user), provider = info.provider, token = info.token, expires_at = info.expires_at, identity_id = info.identity_id;
                    try {
                      this._storage.setItem("aws-amplify-federatedInfo", JSON.stringify({
                        provider,
                        token,
                        user,
                        expires_at,
                        identity_id
                      }));
                    } catch (e) {
                      logger.debug("Failed to put federated info into auth storage", e);
                    }
                  }
                  return source !== "guest" ? [3, 2] : [4, this._setGuestIdentityId(credentials2.identityId)];
                case 1:
                  _a.sent(), _a.label = 2;
                case 2:
                  return res(that._credentials), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }).catch(function(err) {
          if (err) {
            logger.debug("Failed to load credentials", credentials), logger.debug("Error loading credentials", err), rej(err);
            return;
          }
        });
      });
    }, CredentialsClass2.prototype.set = function(params, source) {
      return source === "session" ? this._setCredentialsFromSession(params) : source === "federation" ? this._setCredentialsFromFederation(params) : source === "guest" ? this._setCredentialsForGuest() : (logger.debug("no source specified for setting credentials"), Promise.reject("invalid source"));
    }, CredentialsClass2.prototype.clear = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return this._credentials = null, this._credentials_source = null, logger.debug("removing aws-amplify-federatedInfo from storage"), this._storage.removeItem("aws-amplify-federatedInfo"), [
            2
            /*return*/
          ];
        });
      });
    }, CredentialsClass2.prototype._getGuestIdentityId = function() {
      return __awaiter(this, void 0, void 0, function() {
        var identityPoolId, e_1;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              identityPoolId = this._config.identityPoolId, _a.label = 1;
            case 1:
              return _a.trys.push([1, 3, , 4]), [4, this._storageSync];
            case 2:
              return _a.sent(), [2, this._storage.getItem(this._getCognitoIdentityIdStorageKey(identityPoolId))];
            case 3:
              return e_1 = _a.sent(), logger.debug("Failed to get the cached guest identityId", e_1), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, CredentialsClass2.prototype._setGuestIdentityId = function(identityId) {
      return __awaiter(this, void 0, void 0, function() {
        var identityPoolId, e_2;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              identityPoolId = this._config.identityPoolId, _a.label = 1;
            case 1:
              return _a.trys.push([1, 3, , 4]), [4, this._storageSync];
            case 2:
              return _a.sent(), this._storage.setItem(this._getCognitoIdentityIdStorageKey(identityPoolId), identityId), [3, 4];
            case 3:
              return e_2 = _a.sent(), logger.debug("Failed to cache guest identityId", e_2), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, CredentialsClass2.prototype._removeGuestIdentityId = function() {
      return __awaiter(this, void 0, void 0, function() {
        var identityPoolId;
        return __generator(this, function(_a) {
          return identityPoolId = this._config.identityPoolId, logger.debug("removing ".concat(this._getCognitoIdentityIdStorageKey(identityPoolId), " from storage")), this._storage.removeItem(this._getCognitoIdentityIdStorageKey(identityPoolId)), [
            2
            /*return*/
          ];
        });
      });
    }, CredentialsClass2.prototype.shear = function(credentials) {
      return {
        accessKeyId: credentials.accessKeyId,
        sessionToken: credentials.sessionToken,
        secretAccessKey: credentials.secretAccessKey,
        identityId: credentials.identityId,
        authenticated: credentials.authenticated
      };
    }, CredentialsClass2;
  })()
), Credentials = new CredentialsClass(null);
Amplify.register(Credentials);
var USER_AGENT_HEADER = "x-amz-user-agent";
export {
  AuthAction as A,
  ConsoleLogger as C,
  Hub as H,
  Platform as P,
  StorageHelper as S,
  USER_AGENT_HEADER as U,
  __assign$7 as _,
  buildExports as a,
  browserOrNode as b,
  __read$6 as c,
  __awaiter$d as d,
  __generator$d as e,
  Category as f,
  getAmplifyUserAgent as g,
  __extends$1 as h,
  Credentials as i,
  Amplify as j,
  composeTransferHandler as k,
  parseMetadata as l,
  fromUtf8 as m,
  jitteredBackoff as n,
  getRetryDecider as o,
  parseAWSExports as p,
  getDnsSuffix as q,
  retryMiddleware as r,
  composeServiceApi as s,
  StorageAction as t,
  userAgentMiddleware as u,
  withMemoization as w
};
//# sourceMappingURL=constants-CRL1mmye.mjs.map
