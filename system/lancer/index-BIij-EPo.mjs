var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { b as browserOrNode, a as buildExports, C as ConsoleLogger, _ as __assign$1, c as __read, d as __awaiter, e as __generator, A as AuthAction, f as Category, U as USER_AGENT_HEADER, g as getAmplifyUserAgent$1, H as Hub, h as __extends, i as Credentials, P as Platform$1, p as parseAWSExports, S as StorageHelper$1, j as Amplify } from "./constants-BdIthzG3.mjs";
import { c as commonjsGlobal } from "./lancer-kt_Lk13n.mjs";
var CognitoHostedUIIdentityProvider;
(function(CognitoHostedUIIdentityProvider2) {
  CognitoHostedUIIdentityProvider2.Cognito = "COGNITO", CognitoHostedUIIdentityProvider2.Google = "Google", CognitoHostedUIIdentityProvider2.Facebook = "Facebook", CognitoHostedUIIdentityProvider2.Amazon = "LoginWithAmazon", CognitoHostedUIIdentityProvider2.Apple = "SignInWithApple";
})(CognitoHostedUIIdentityProvider || (CognitoHostedUIIdentityProvider = {}));
function isFederatedSignInOptions(obj) {
  var keys = ["provider"];
  return obj && !!keys.find(function(k) {
    return obj.hasOwnProperty(k);
  });
}
__name(isFederatedSignInOptions, "isFederatedSignInOptions");
function isFederatedSignInOptionsCustom(obj) {
  var keys = ["customProvider"];
  return obj && !!keys.find(function(k) {
    return obj.hasOwnProperty(k);
  });
}
__name(isFederatedSignInOptionsCustom, "isFederatedSignInOptionsCustom");
function hasCustomState(obj) {
  var keys = ["customState"];
  return obj && !!keys.find(function(k) {
    return obj.hasOwnProperty(k);
  });
}
__name(hasCustomState, "hasCustomState");
function isCognitoHostedOpts(oauth) {
  return oauth.redirectSignIn !== void 0;
}
__name(isCognitoHostedOpts, "isCognitoHostedOpts");
var AuthErrorTypes;
(function(AuthErrorTypes2) {
  AuthErrorTypes2.NoConfig = "noConfig", AuthErrorTypes2.MissingAuthConfig = "missingAuthConfig", AuthErrorTypes2.EmptyUsername = "emptyUsername", AuthErrorTypes2.InvalidUsername = "invalidUsername", AuthErrorTypes2.EmptyPassword = "emptyPassword", AuthErrorTypes2.EmptyCode = "emptyCode", AuthErrorTypes2.SignUpError = "signUpError", AuthErrorTypes2.NoMFA = "noMFA", AuthErrorTypes2.InvalidMFA = "invalidMFA", AuthErrorTypes2.EmptyChallengeResponse = "emptyChallengeResponse", AuthErrorTypes2.NoUserSession = "noUserSession", AuthErrorTypes2.Default = "default", AuthErrorTypes2.DeviceConfig = "deviceConfig", AuthErrorTypes2.NetworkError = "networkError", AuthErrorTypes2.AutoSignInError = "autoSignInError";
})(AuthErrorTypes || (AuthErrorTypes = {}));
function isUsernamePasswordOpts(obj) {
  return !!obj.username;
}
__name(isUsernamePasswordOpts, "isUsernamePasswordOpts");
var GRAPHQL_AUTH_MODE;
(function(GRAPHQL_AUTH_MODE2) {
  GRAPHQL_AUTH_MODE2.API_KEY = "API_KEY", GRAPHQL_AUTH_MODE2.AWS_IAM = "AWS_IAM", GRAPHQL_AUTH_MODE2.OPENID_CONNECT = "OPENID_CONNECT", GRAPHQL_AUTH_MODE2.AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS", GRAPHQL_AUTH_MODE2.AWS_LAMBDA = "AWS_LAMBDA";
})(GRAPHQL_AUTH_MODE || (GRAPHQL_AUTH_MODE = {}));
function urlSafeEncode(str) {
  return str.split("").map(function(char) {
    return char.charCodeAt(0).toString(16).padStart(2, "0");
  }).join("");
}
__name(urlSafeEncode, "urlSafeEncode");
function urlSafeDecode(hex) {
  return hex.match(/.{2}/g).map(function(char) {
    return String.fromCharCode(parseInt(char, 16));
  }).join("");
}
__name(urlSafeDecode, "urlSafeDecode");
var cookie = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var hasRequiredCookie;
function requireCookie() {
  if (hasRequiredCookie) return cookie;
  hasRequiredCookie = 1, cookie.parse = parse, cookie.serialize = serialize;
  var __toString = Object.prototype.toString, __hasOwnProperty = Object.prototype.hasOwnProperty, cookieNameRegExp = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/, cookieValueRegExp = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/, domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
  function parse(str, opt) {
    if (typeof str != "string")
      throw new TypeError("argument str must be a string");
    var obj = {}, len = str.length;
    if (len < 2) return obj;
    var dec = opt && opt.decode || decode2, index = 0, eqIdx = 0, endIdx = 0;
    do {
      if (eqIdx = str.indexOf("=", index), eqIdx === -1) break;
      if (endIdx = str.indexOf(";", index), endIdx === -1)
        endIdx = len;
      else if (eqIdx > endIdx) {
        index = str.lastIndexOf(";", eqIdx - 1) + 1;
        continue;
      }
      var keyStartIdx = startIndex(str, index, eqIdx), keyEndIdx = endIndex(str, eqIdx, keyStartIdx), key = str.slice(keyStartIdx, keyEndIdx);
      if (!__hasOwnProperty.call(obj, key)) {
        var valStartIdx = startIndex(str, eqIdx + 1, endIdx), valEndIdx = endIndex(str, endIdx, valStartIdx);
        str.charCodeAt(valStartIdx) === 34 && str.charCodeAt(valEndIdx - 1) === 34 && (valStartIdx++, valEndIdx--);
        var val = str.slice(valStartIdx, valEndIdx);
        obj[key] = tryDecode(val, dec);
      }
      index = endIdx + 1;
    } while (index < len);
    return obj;
  }
  __name(parse, "parse");
  function startIndex(str, index, max) {
    do {
      var code = str.charCodeAt(index);
      if (code !== 32 && code !== 9) return index;
    } while (++index < max);
    return max;
  }
  __name(startIndex, "startIndex");
  function endIndex(str, index, min) {
    for (; index > min; ) {
      var code = str.charCodeAt(--index);
      if (code !== 32 && code !== 9) return index + 1;
    }
    return min;
  }
  __name(endIndex, "endIndex");
  function serialize(name, val, opt) {
    var enc = opt && opt.encode || encodeURIComponent;
    if (typeof enc != "function")
      throw new TypeError("option encode is invalid");
    if (!cookieNameRegExp.test(name))
      throw new TypeError("argument name is invalid");
    var value = enc(val);
    if (!cookieValueRegExp.test(value))
      throw new TypeError("argument val is invalid");
    var str = name + "=" + value;
    if (!opt) return str;
    if (opt.maxAge != null) {
      var maxAge = Math.floor(opt.maxAge);
      if (!isFinite(maxAge))
        throw new TypeError("option maxAge is invalid");
      str += "; Max-Age=" + maxAge;
    }
    if (opt.domain) {
      if (!domainValueRegExp.test(opt.domain))
        throw new TypeError("option domain is invalid");
      str += "; Domain=" + opt.domain;
    }
    if (opt.path) {
      if (!pathValueRegExp.test(opt.path))
        throw new TypeError("option path is invalid");
      str += "; Path=" + opt.path;
    }
    if (opt.expires) {
      var expires = opt.expires;
      if (!isDate(expires) || isNaN(expires.valueOf()))
        throw new TypeError("option expires is invalid");
      str += "; Expires=" + expires.toUTCString();
    }
    if (opt.httpOnly && (str += "; HttpOnly"), opt.secure && (str += "; Secure"), opt.partitioned && (str += "; Partitioned"), opt.priority) {
      var priority = typeof opt.priority == "string" ? opt.priority.toLowerCase() : opt.priority;
      switch (priority) {
        case "low":
          str += "; Priority=Low";
          break;
        case "medium":
          str += "; Priority=Medium";
          break;
        case "high":
          str += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (opt.sameSite) {
      var sameSite = typeof opt.sameSite == "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
      switch (sameSite) {
        case !0:
          str += "; SameSite=Strict";
          break;
        case "lax":
          str += "; SameSite=Lax";
          break;
        case "strict":
          str += "; SameSite=Strict";
          break;
        case "none":
          str += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return str;
  }
  __name(serialize, "serialize");
  function decode2(str) {
    return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
  }
  __name(decode2, "decode");
  function isDate(val) {
    return __toString.call(val) === "[object Date]";
  }
  __name(isDate, "isDate");
  function tryDecode(str, decode3) {
    try {
      return decode3(str);
    } catch {
      return str;
    }
  }
  return __name(tryDecode, "tryDecode"), cookie;
}
__name(requireCookie, "requireCookie");
var cookieExports = requireCookie();
function hasDocumentCookie() {
  const testingValue = typeof global > "u" ? void 0 : global.TEST_HAS_DOCUMENT_COOKIE;
  return typeof testingValue == "boolean" ? testingValue : typeof document == "object" && typeof document.cookie == "string";
}
__name(hasDocumentCookie, "hasDocumentCookie");
function parseCookies(cookies) {
  return typeof cookies == "string" ? cookieExports.parse(cookies) : typeof cookies == "object" && cookies !== null ? cookies : {};
}
__name(parseCookies, "parseCookies");
function readCookie(value, options = {}) {
  const cleanValue = cleanupCookieValue(value);
  if (!options.doNotParse)
    try {
      return JSON.parse(cleanValue);
    } catch {
    }
  return value;
}
__name(readCookie, "readCookie");
function cleanupCookieValue(value) {
  return value && value[0] === "j" && value[1] === ":" ? value.substr(2) : value;
}
__name(cleanupCookieValue, "cleanupCookieValue");
const _Cookies = class _Cookies {
  constructor(cookies, defaultSetOptions = {}) {
    this.changeListeners = [], this.HAS_DOCUMENT_COOKIE = !1, this.update = () => {
      if (!this.HAS_DOCUMENT_COOKIE)
        return;
      const previousCookies = this.cookies;
      this.cookies = cookieExports.parse(document.cookie), this._checkChanges(previousCookies);
    };
    const domCookies = typeof document > "u" ? "" : document.cookie;
    this.cookies = parseCookies(cookies || domCookies), this.defaultSetOptions = defaultSetOptions, this.HAS_DOCUMENT_COOKIE = hasDocumentCookie();
  }
  _emitChange(params) {
    for (let i = 0; i < this.changeListeners.length; ++i)
      this.changeListeners[i](params);
  }
  _checkChanges(previousCookies) {
    new Set(Object.keys(previousCookies).concat(Object.keys(this.cookies))).forEach((name) => {
      previousCookies[name] !== this.cookies[name] && this._emitChange({
        name,
        value: readCookie(this.cookies[name])
      });
    });
  }
  _startPolling() {
    this.pollingInterval = setInterval(this.update, 300);
  }
  _stopPolling() {
    this.pollingInterval && clearInterval(this.pollingInterval);
  }
  get(name, options = {}) {
    return options.doNotUpdate || this.update(), readCookie(this.cookies[name], options);
  }
  getAll(options = {}) {
    options.doNotUpdate || this.update();
    const result = {};
    for (let name in this.cookies)
      result[name] = readCookie(this.cookies[name], options);
    return result;
  }
  set(name, value, options) {
    options ? options = Object.assign(Object.assign({}, this.defaultSetOptions), options) : options = this.defaultSetOptions;
    const stringValue = typeof value == "string" ? value : JSON.stringify(value);
    this.cookies = Object.assign(Object.assign({}, this.cookies), { [name]: stringValue }), this.HAS_DOCUMENT_COOKIE && (document.cookie = cookieExports.serialize(name, stringValue, options)), this._emitChange({ name, value, options });
  }
  remove(name, options) {
    const finalOptions = options = Object.assign(Object.assign(Object.assign({}, this.defaultSetOptions), options), { expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0 });
    this.cookies = Object.assign({}, this.cookies), delete this.cookies[name], this.HAS_DOCUMENT_COOKIE && (document.cookie = cookieExports.serialize(name, "", finalOptions)), this._emitChange({ name, value: void 0, options });
  }
  addChangeListener(callback) {
    this.changeListeners.push(callback), this.HAS_DOCUMENT_COOKIE && this.changeListeners.length === 1 && (typeof window == "object" && "cookieStore" in window ? window.cookieStore.addEventListener("change", this.update) : this._startPolling());
  }
  removeChangeListener(callback) {
    const idx = this.changeListeners.indexOf(callback);
    idx >= 0 && this.changeListeners.splice(idx, 1), this.HAS_DOCUMENT_COOKIE && this.changeListeners.length === 0 && (typeof window == "object" && "cookieStore" in window ? window.cookieStore.removeEventListener("change", this.update) : this._stopPolling());
  }
};
__name(_Cookies, "Cookies");
let Cookies = _Cookies;
var __assign = function() {
  return __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign.apply(this, arguments);
}, isBrowser = browserOrNode().isBrowser, ONE_YEAR_IN_MS = 365 * 24 * 60 * 60 * 1e3, UniversalStorage = (
  /** @class */
  (function() {
    function UniversalStorage2(context) {
      context === void 0 && (context = {}), this.cookies = new Cookies(), this.store = isBrowser ? window.localStorage : /* @__PURE__ */ Object.create(null), this.cookies = context.req ? new Cookies(decodeURIComponent(context.req.headers.cookie)) : new Cookies(), Object.assign(this.store, this.cookies.getAll());
    }
    return __name(UniversalStorage2, "UniversalStorage"), Object.defineProperty(UniversalStorage2.prototype, "length", {
      get: /* @__PURE__ */ __name(function() {
        return Object.entries(this.store).length;
      }, "get"),
      enumerable: !1,
      configurable: !0
    }), UniversalStorage2.prototype.clear = function() {
      var _this = this;
      Array.from(new Array(this.length)).map(function(_, i) {
        return _this.key(i);
      }).forEach(function(key) {
        return _this.removeItem(key);
      });
    }, UniversalStorage2.prototype.getItem = function(key) {
      return this.getLocalItem(key);
    }, UniversalStorage2.prototype.getLocalItem = function(key) {
      return Object.prototype.hasOwnProperty.call(this.store, key) ? this.store[key] : null;
    }, UniversalStorage2.prototype.getUniversalItem = function(key) {
      return this.cookies.get(key);
    }, UniversalStorage2.prototype.key = function(index) {
      return Object.keys(this.store)[index];
    }, UniversalStorage2.prototype.removeItem = function(key) {
      this.removeLocalItem(key), this.removeUniversalItem(key);
    }, UniversalStorage2.prototype.removeLocalItem = function(key) {
      delete this.store[key];
    }, UniversalStorage2.prototype.removeUniversalItem = function(key) {
      this.cookies.remove(key, {
        path: "/"
      });
    }, UniversalStorage2.prototype.setItem = function(key, value) {
      this.setLocalItem(key, value);
      var tokenType = key.split(".").pop(), sessionTokenTypes = [
        "LastAuthUser",
        "accessToken",
        // refreshToken originates on the client, but SSR pages won't fail when this expires
        // Note: the new `accessToken` will also be refreshed on the client (since Amplify doesn't set server-side cookies)
        "refreshToken",
        // Required for CognitoUserSession
        "idToken"
        // userData is used when `Auth.currentAuthenticatedUser({ bypassCache: false })`.
        // Can be persisted to speed up calls to `Auth.currentAuthenticatedUser()`
        // 'userData',
        // Ignoring clockDrift on the server for now, but needs testing
        // 'clockDrift',
      ];
      sessionTokenTypes.includes(tokenType ?? "") && this.setUniversalItem(key, value, {
        expires: new Date(Date.now() + ONE_YEAR_IN_MS)
      });
    }, UniversalStorage2.prototype.setLocalItem = function(key, value) {
      this.store[key] = value;
    }, UniversalStorage2.prototype.setUniversalItem = function(key, value, options) {
      options === void 0 && (options = {}), this.cookies.set(key, value, __assign(__assign({}, options), {
        path: "/",
        // `httpOnly` cannot be set via JavaScript: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#JavaScript_access_using_Document.cookie
        sameSite: !0,
        // Allow unsecure requests to http://localhost:3000/ when in development.
        secure: !(isBrowser && window.location.hostname === "localhost")
      }));
    }, UniversalStorage2;
  })()
);
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var AuthenticationDetails = /* @__PURE__ */ (function() {
  function AuthenticationDetails2(data) {
    var _ref = data || {}, ValidationData = _ref.ValidationData, Username = _ref.Username, Password = _ref.Password, AuthParameters = _ref.AuthParameters, ClientMetadata = _ref.ClientMetadata;
    this.validationData = ValidationData || {}, this.authParameters = AuthParameters || {}, this.clientMetadata = ClientMetadata || {}, this.username = Username, this.password = Password;
  }
  __name(AuthenticationDetails2, "AuthenticationDetails");
  var _proto = AuthenticationDetails2.prototype;
  return _proto.getUsername = /* @__PURE__ */ __name(function() {
    return this.username;
  }, "getUsername"), _proto.getPassword = /* @__PURE__ */ __name(function() {
    return this.password;
  }, "getPassword"), _proto.getValidationData = /* @__PURE__ */ __name(function() {
    return this.validationData;
  }, "getValidationData"), _proto.getAuthParameters = /* @__PURE__ */ __name(function() {
    return this.authParameters;
  }, "getAuthParameters"), _proto.getClientMetadata = /* @__PURE__ */ __name(function() {
    return this.clientMetadata;
  }, "getClientMetadata"), AuthenticationDetails2;
})(), buffer = {}, base64Js = {}, hasRequiredBase64Js;
function requireBase64Js() {
  if (hasRequiredBase64Js) return base64Js;
  hasRequiredBase64Js = 1, base64Js.byteLength = byteLength, base64Js.toByteArray = toByteArray, base64Js.fromByteArray = fromByteArray;
  for (var lookup = [], revLookup = [], Arr = typeof Uint8Array < "u" ? Uint8Array : Array, code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, len = code.length; i < len; ++i)
    lookup[i] = code[i], revLookup[code.charCodeAt(i)] = i;
  revLookup[45] = 62, revLookup[95] = 63;
  function getLens(b64) {
    var len2 = b64.length;
    if (len2 % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var validLen = b64.indexOf("=");
    validLen === -1 && (validLen = len2);
    var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
    return [validLen, placeHoldersLen];
  }
  __name(getLens, "getLens");
  function byteLength(b64) {
    var lens = getLens(b64), validLen = lens[0], placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  __name(byteLength, "byteLength");
  function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  __name(_byteLength, "_byteLength");
  function toByteArray(b64) {
    var tmp, lens = getLens(b64), validLen = lens[0], placeHoldersLen = lens[1], arr = new Arr(_byteLength(b64, validLen, placeHoldersLen)), curByte = 0, len2 = placeHoldersLen > 0 ? validLen - 4 : validLen, i2;
    for (i2 = 0; i2 < len2; i2 += 4)
      tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)], arr[curByte++] = tmp >> 16 & 255, arr[curByte++] = tmp >> 8 & 255, arr[curByte++] = tmp & 255;
    return placeHoldersLen === 2 && (tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4, arr[curByte++] = tmp & 255), placeHoldersLen === 1 && (tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2, arr[curByte++] = tmp >> 8 & 255, arr[curByte++] = tmp & 255), arr;
  }
  __name(toByteArray, "toByteArray");
  function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
  }
  __name(tripletToBase64, "tripletToBase64");
  function encodeChunk(uint8, start, end) {
    for (var tmp, output = [], i2 = start; i2 < end; i2 += 3)
      tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255), output.push(tripletToBase64(tmp));
    return output.join("");
  }
  __name(encodeChunk, "encodeChunk");
  function fromByteArray(uint8) {
    for (var tmp, len2 = uint8.length, extraBytes = len2 % 3, parts = [], maxChunkLength = 16383, i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength)
      parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
    return extraBytes === 1 ? (tmp = uint8[len2 - 1], parts.push(
      lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
    )) : extraBytes === 2 && (tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1], parts.push(
      lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
    )), parts.join("");
  }
  return __name(fromByteArray, "fromByteArray"), base64Js;
}
__name(requireBase64Js, "requireBase64Js");
var ieee754 = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var hasRequiredIeee754;
function requireIeee754() {
  return hasRequiredIeee754 || (hasRequiredIeee754 = 1, ieee754.read = function(buffer2, offset, isLE, mLen, nBytes) {
    var e, m, eLen = nBytes * 8 - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, nBits = -7, i = isLE ? nBytes - 1 : 0, d = isLE ? -1 : 1, s = buffer2[offset + i];
    for (i += d, e = s & (1 << -nBits) - 1, s >>= -nBits, nBits += eLen; nBits > 0; e = e * 256 + buffer2[offset + i], i += d, nBits -= 8)
      ;
    for (m = e & (1 << -nBits) - 1, e >>= -nBits, nBits += mLen; nBits > 0; m = m * 256 + buffer2[offset + i], i += d, nBits -= 8)
      ;
    if (e === 0)
      e = 1 - eBias;
    else {
      if (e === eMax)
        return m ? NaN : (s ? -1 : 1) * (1 / 0);
      m = m + Math.pow(2, mLen), e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  }, ieee754.write = function(buffer2, value, offset, isLE, mLen, nBytes) {
    var e, m, c, eLen = nBytes * 8 - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, i = isLE ? 0 : nBytes - 1, d = isLE ? 1 : -1, s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    for (value = Math.abs(value), isNaN(value) || value === 1 / 0 ? (m = isNaN(value) ? 1 : 0, e = eMax) : (e = Math.floor(Math.log(value) / Math.LN2), value * (c = Math.pow(2, -e)) < 1 && (e--, c *= 2), e + eBias >= 1 ? value += rt / c : value += rt * Math.pow(2, 1 - eBias), value * c >= 2 && (e++, c /= 2), e + eBias >= eMax ? (m = 0, e = eMax) : e + eBias >= 1 ? (m = (value * c - 1) * Math.pow(2, mLen), e = e + eBias) : (m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen), e = 0)); mLen >= 8; buffer2[offset + i] = m & 255, i += d, m /= 256, mLen -= 8)
      ;
    for (e = e << mLen | m, eLen += mLen; eLen > 0; buffer2[offset + i] = e & 255, i += d, e /= 256, eLen -= 8)
      ;
    buffer2[offset + i - d] |= s * 128;
  }), ieee754;
}
__name(requireIeee754, "requireIeee754");
var isarray, hasRequiredIsarray;
function requireIsarray() {
  if (hasRequiredIsarray) return isarray;
  hasRequiredIsarray = 1;
  var toString = {}.toString;
  return isarray = Array.isArray || function(arr) {
    return toString.call(arr) == "[object Array]";
  }, isarray;
}
__name(requireIsarray, "requireIsarray");
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var hasRequiredBuffer;
function requireBuffer() {
  return hasRequiredBuffer || (hasRequiredBuffer = 1, (function(exports$1) {
    var base64 = requireBase64Js(), ieee7542 = requireIeee754(), isArray = requireIsarray();
    exports$1.Buffer = Buffer2, exports$1.SlowBuffer = SlowBuffer, exports$1.INSPECT_MAX_BYTES = 50, Buffer2.TYPED_ARRAY_SUPPORT = commonjsGlobal.TYPED_ARRAY_SUPPORT !== void 0 ? commonjsGlobal.TYPED_ARRAY_SUPPORT : typedArraySupport(), exports$1.kMaxLength = kMaxLength();
    function typedArraySupport() {
      try {
        var arr = new Uint8Array(1);
        return arr.__proto__ = { __proto__: Uint8Array.prototype, foo: /* @__PURE__ */ __name(function() {
          return 42;
        }, "foo") }, arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray == "function" && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0;
      } catch {
        return !1;
      }
    }
    __name(typedArraySupport, "typedArraySupport");
    function kMaxLength() {
      return Buffer2.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }
    __name(kMaxLength, "kMaxLength");
    function createBuffer(that, length) {
      if (kMaxLength() < length)
        throw new RangeError("Invalid typed array length");
      return Buffer2.TYPED_ARRAY_SUPPORT ? (that = new Uint8Array(length), that.__proto__ = Buffer2.prototype) : (that === null && (that = new Buffer2(length)), that.length = length), that;
    }
    __name(createBuffer, "createBuffer");
    function Buffer2(arg, encodingOrOffset, length) {
      if (!Buffer2.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer2))
        return new Buffer2(arg, encodingOrOffset, length);
      if (typeof arg == "number") {
        if (typeof encodingOrOffset == "string")
          throw new Error(
            "If encoding is specified then the first argument must be a string"
          );
        return allocUnsafe(this, arg);
      }
      return from(this, arg, encodingOrOffset, length);
    }
    __name(Buffer2, "Buffer"), Buffer2.poolSize = 8192, Buffer2._augment = function(arr) {
      return arr.__proto__ = Buffer2.prototype, arr;
    };
    function from(that, value, encodingOrOffset, length) {
      if (typeof value == "number")
        throw new TypeError('"value" argument must not be a number');
      return typeof ArrayBuffer < "u" && value instanceof ArrayBuffer ? fromArrayBuffer(that, value, encodingOrOffset, length) : typeof value == "string" ? fromString(that, value, encodingOrOffset) : fromObject(that, value);
    }
    __name(from, "from"), Buffer2.from = function(value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length);
    }, Buffer2.TYPED_ARRAY_SUPPORT && (Buffer2.prototype.__proto__ = Uint8Array.prototype, Buffer2.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && Buffer2[Symbol.species] === Buffer2 && Object.defineProperty(Buffer2, Symbol.species, {
      value: null,
      configurable: !0
    }));
    function assertSize(size) {
      if (typeof size != "number")
        throw new TypeError('"size" argument must be a number');
      if (size < 0)
        throw new RangeError('"size" argument must not be negative');
    }
    __name(assertSize, "assertSize");
    function alloc(that, size, fill, encoding) {
      return assertSize(size), size <= 0 ? createBuffer(that, size) : fill !== void 0 ? typeof encoding == "string" ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill) : createBuffer(that, size);
    }
    __name(alloc, "alloc"), Buffer2.alloc = function(size, fill, encoding) {
      return alloc(null, size, fill, encoding);
    };
    function allocUnsafe(that, size) {
      if (assertSize(size), that = createBuffer(that, size < 0 ? 0 : checked(size) | 0), !Buffer2.TYPED_ARRAY_SUPPORT)
        for (var i = 0; i < size; ++i)
          that[i] = 0;
      return that;
    }
    __name(allocUnsafe, "allocUnsafe"), Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(null, size);
    }, Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(null, size);
    };
    function fromString(that, string, encoding) {
      if ((typeof encoding != "string" || encoding === "") && (encoding = "utf8"), !Buffer2.isEncoding(encoding))
        throw new TypeError('"encoding" must be a valid string encoding');
      var length = byteLength(string, encoding) | 0;
      that = createBuffer(that, length);
      var actual = that.write(string, encoding);
      return actual !== length && (that = that.slice(0, actual)), that;
    }
    __name(fromString, "fromString");
    function fromArrayLike(that, array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      that = createBuffer(that, length);
      for (var i = 0; i < length; i += 1)
        that[i] = array[i] & 255;
      return that;
    }
    __name(fromArrayLike, "fromArrayLike");
    function fromArrayBuffer(that, array, byteOffset, length) {
      if (array.byteLength, byteOffset < 0 || array.byteLength < byteOffset)
        throw new RangeError("'offset' is out of bounds");
      if (array.byteLength < byteOffset + (length || 0))
        throw new RangeError("'length' is out of bounds");
      return byteOffset === void 0 && length === void 0 ? array = new Uint8Array(array) : length === void 0 ? array = new Uint8Array(array, byteOffset) : array = new Uint8Array(array, byteOffset, length), Buffer2.TYPED_ARRAY_SUPPORT ? (that = array, that.__proto__ = Buffer2.prototype) : that = fromArrayLike(that, array), that;
    }
    __name(fromArrayBuffer, "fromArrayBuffer");
    function fromObject(that, obj) {
      if (Buffer2.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        return that = createBuffer(that, len), that.length === 0 || obj.copy(that, 0, 0, len), that;
      }
      if (obj) {
        if (typeof ArrayBuffer < "u" && obj.buffer instanceof ArrayBuffer || "length" in obj)
          return typeof obj.length != "number" || isnan(obj.length) ? createBuffer(that, 0) : fromArrayLike(that, obj);
        if (obj.type === "Buffer" && isArray(obj.data))
          return fromArrayLike(that, obj.data);
      }
      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }
    __name(fromObject, "fromObject");
    function checked(length) {
      if (length >= kMaxLength())
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
      return length | 0;
    }
    __name(checked, "checked");
    function SlowBuffer(length) {
      return +length != length && (length = 0), Buffer2.alloc(+length);
    }
    __name(SlowBuffer, "SlowBuffer"), Buffer2.isBuffer = /* @__PURE__ */ __name(function(b) {
      return !!(b != null && b._isBuffer);
    }, "isBuffer"), Buffer2.compare = /* @__PURE__ */ __name(function(a, b) {
      if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b))
        throw new TypeError("Arguments must be Buffers");
      if (a === b) return 0;
      for (var x = a.length, y = b.length, i = 0, len = Math.min(x, y); i < len; ++i)
        if (a[i] !== b[i]) {
          x = a[i], y = b[i];
          break;
        }
      return x < y ? -1 : y < x ? 1 : 0;
    }, "compare"), Buffer2.isEncoding = /* @__PURE__ */ __name(function(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }, "isEncoding"), Buffer2.concat = /* @__PURE__ */ __name(function(list, length) {
      if (!isArray(list))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (list.length === 0)
        return Buffer2.alloc(0);
      var i;
      if (length === void 0)
        for (length = 0, i = 0; i < list.length; ++i)
          length += list[i].length;
      var buffer2 = Buffer2.allocUnsafe(length), pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!Buffer2.isBuffer(buf))
          throw new TypeError('"list" argument must be an Array of Buffers');
        buf.copy(buffer2, pos), pos += buf.length;
      }
      return buffer2;
    }, "concat");
    function byteLength(string, encoding) {
      if (Buffer2.isBuffer(string))
        return string.length;
      if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer))
        return string.byteLength;
      typeof string != "string" && (string = "" + string);
      var len = string.length;
      if (len === 0) return 0;
      for (var loweredCase = !1; ; )
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
          case void 0:
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) return utf8ToBytes(string).length;
            encoding = ("" + encoding).toLowerCase(), loweredCase = !0;
        }
    }
    __name(byteLength, "byteLength"), Buffer2.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      var loweredCase = !1;
      if ((start === void 0 || start < 0) && (start = 0), start > this.length || ((end === void 0 || end > this.length) && (end = this.length), end <= 0) || (end >>>= 0, start >>>= 0, end <= start))
        return "";
      for (encoding || (encoding = "utf8"); ; )
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase(), loweredCase = !0;
        }
    }
    __name(slowToString, "slowToString"), Buffer2.prototype._isBuffer = !0;
    function swap(b, n, m) {
      var i = b[n];
      b[n] = b[m], b[m] = i;
    }
    __name(swap, "swap"), Buffer2.prototype.swap16 = /* @__PURE__ */ __name(function() {
      var len = this.length;
      if (len % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var i = 0; i < len; i += 2)
        swap(this, i, i + 1);
      return this;
    }, "swap16"), Buffer2.prototype.swap32 = /* @__PURE__ */ __name(function() {
      var len = this.length;
      if (len % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var i = 0; i < len; i += 4)
        swap(this, i, i + 3), swap(this, i + 1, i + 2);
      return this;
    }, "swap32"), Buffer2.prototype.swap64 = /* @__PURE__ */ __name(function() {
      var len = this.length;
      if (len % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var i = 0; i < len; i += 8)
        swap(this, i, i + 7), swap(this, i + 1, i + 6), swap(this, i + 2, i + 5), swap(this, i + 3, i + 4);
      return this;
    }, "swap64"), Buffer2.prototype.toString = /* @__PURE__ */ __name(function() {
      var length = this.length | 0;
      return length === 0 ? "" : arguments.length === 0 ? utf8Slice(this, 0, length) : slowToString.apply(this, arguments);
    }, "toString"), Buffer2.prototype.equals = /* @__PURE__ */ __name(function(b) {
      if (!Buffer2.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
      return this === b ? !0 : Buffer2.compare(this, b) === 0;
    }, "equals"), Buffer2.prototype.inspect = /* @__PURE__ */ __name(function() {
      var str = "", max = exports$1.INSPECT_MAX_BYTES;
      return this.length > 0 && (str = this.toString("hex", 0, max).match(/.{2}/g).join(" "), this.length > max && (str += " ... ")), "<Buffer " + str + ">";
    }, "inspect"), Buffer2.prototype.compare = /* @__PURE__ */ __name(function(target, start, end, thisStart, thisEnd) {
      if (!Buffer2.isBuffer(target))
        throw new TypeError("Argument must be a Buffer");
      if (start === void 0 && (start = 0), end === void 0 && (end = target ? target.length : 0), thisStart === void 0 && (thisStart = 0), thisEnd === void 0 && (thisEnd = this.length), start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length)
        throw new RangeError("out of range index");
      if (thisStart >= thisEnd && start >= end)
        return 0;
      if (thisStart >= thisEnd)
        return -1;
      if (start >= end)
        return 1;
      if (start >>>= 0, end >>>= 0, thisStart >>>= 0, thisEnd >>>= 0, this === target) return 0;
      for (var x = thisEnd - thisStart, y = end - start, len = Math.min(x, y), thisCopy = this.slice(thisStart, thisEnd), targetCopy = target.slice(start, end), i = 0; i < len; ++i)
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i], y = targetCopy[i];
          break;
        }
      return x < y ? -1 : y < x ? 1 : 0;
    }, "compare");
    function bidirectionalIndexOf(buffer2, val, byteOffset, encoding, dir) {
      if (buffer2.length === 0) return -1;
      if (typeof byteOffset == "string" ? (encoding = byteOffset, byteOffset = 0) : byteOffset > 2147483647 ? byteOffset = 2147483647 : byteOffset < -2147483648 && (byteOffset = -2147483648), byteOffset = +byteOffset, isNaN(byteOffset) && (byteOffset = dir ? 0 : buffer2.length - 1), byteOffset < 0 && (byteOffset = buffer2.length + byteOffset), byteOffset >= buffer2.length) {
        if (dir) return -1;
        byteOffset = buffer2.length - 1;
      } else if (byteOffset < 0)
        if (dir) byteOffset = 0;
        else return -1;
      if (typeof val == "string" && (val = Buffer2.from(val, encoding)), Buffer2.isBuffer(val))
        return val.length === 0 ? -1 : arrayIndexOf(buffer2, val, byteOffset, encoding, dir);
      if (typeof val == "number")
        return val = val & 255, Buffer2.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? dir ? Uint8Array.prototype.indexOf.call(buffer2, val, byteOffset) : Uint8Array.prototype.lastIndexOf.call(buffer2, val, byteOffset) : arrayIndexOf(buffer2, [val], byteOffset, encoding, dir);
      throw new TypeError("val must be string, number or Buffer");
    }
    __name(bidirectionalIndexOf, "bidirectionalIndexOf");
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      var indexSize = 1, arrLength = arr.length, valLength = val.length;
      if (encoding !== void 0 && (encoding = String(encoding).toLowerCase(), encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le")) {
        if (arr.length < 2 || val.length < 2)
          return -1;
        indexSize = 2, arrLength /= 2, valLength /= 2, byteOffset /= 2;
      }
      function read(buf, i2) {
        return indexSize === 1 ? buf[i2] : buf.readUInt16BE(i2 * indexSize);
      }
      __name(read, "read");
      var i;
      if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++)
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1 && (foundIndex = i), i - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else
            foundIndex !== -1 && (i -= i - foundIndex), foundIndex = -1;
      } else
        for (byteOffset + valLength > arrLength && (byteOffset = arrLength - valLength), i = byteOffset; i >= 0; i--) {
          for (var found = !0, j = 0; j < valLength; j++)
            if (read(arr, i + j) !== read(val, j)) {
              found = !1;
              break;
            }
          if (found) return i;
        }
      return -1;
    }
    __name(arrayIndexOf, "arrayIndexOf"), Buffer2.prototype.includes = /* @__PURE__ */ __name(function(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    }, "includes"), Buffer2.prototype.indexOf = /* @__PURE__ */ __name(function(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, !0);
    }, "indexOf"), Buffer2.prototype.lastIndexOf = /* @__PURE__ */ __name(function(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, !1);
    }, "lastIndexOf");
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      length ? (length = Number(length), length > remaining && (length = remaining)) : length = remaining;
      var strLen = string.length;
      if (strLen % 2 !== 0) throw new TypeError("Invalid hex string");
      length > strLen / 2 && (length = strLen / 2);
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (isNaN(parsed)) return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    __name(hexWrite, "hexWrite");
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    __name(utf8Write, "utf8Write");
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    __name(asciiWrite, "asciiWrite");
    function latin1Write(buf, string, offset, length) {
      return asciiWrite(buf, string, offset, length);
    }
    __name(latin1Write, "latin1Write");
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    __name(base64Write, "base64Write");
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    __name(ucs2Write, "ucs2Write"), Buffer2.prototype.write = /* @__PURE__ */ __name(function(string, offset, length, encoding) {
      if (offset === void 0)
        encoding = "utf8", length = this.length, offset = 0;
      else if (length === void 0 && typeof offset == "string")
        encoding = offset, length = this.length, offset = 0;
      else if (isFinite(offset))
        offset = offset | 0, isFinite(length) ? (length = length | 0, encoding === void 0 && (encoding = "utf8")) : (encoding = length, length = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      var remaining = this.length - offset;
      if ((length === void 0 || length > remaining) && (length = remaining), string.length > 0 && (length < 0 || offset < 0) || offset > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      encoding || (encoding = "utf8");
      for (var loweredCase = !1; ; )
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
            return asciiWrite(this, string, offset, length);
          case "latin1":
          case "binary":
            return latin1Write(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase(), loweredCase = !0;
        }
    }, "write"), Buffer2.prototype.toJSON = /* @__PURE__ */ __name(function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    }, "toJSON");
    function base64Slice(buf, start, end) {
      return start === 0 && end === buf.length ? base64.fromByteArray(buf) : base64.fromByteArray(buf.slice(start, end));
    }
    __name(base64Slice, "base64Slice");
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      for (var res = [], i = start; i < end; ) {
        var firstByte = buf[i], codePoint = null, bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              firstByte < 128 && (codePoint = firstByte);
              break;
            case 2:
              secondByte = buf[i + 1], (secondByte & 192) === 128 && (tempCodePoint = (firstByte & 31) << 6 | secondByte & 63, tempCodePoint > 127 && (codePoint = tempCodePoint));
              break;
            case 3:
              secondByte = buf[i + 1], thirdByte = buf[i + 2], (secondByte & 192) === 128 && (thirdByte & 192) === 128 && (tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63, tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343) && (codePoint = tempCodePoint));
              break;
            case 4:
              secondByte = buf[i + 1], thirdByte = buf[i + 2], fourthByte = buf[i + 3], (secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128 && (tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63, tempCodePoint > 65535 && tempCodePoint < 1114112 && (codePoint = tempCodePoint));
          }
        }
        codePoint === null ? (codePoint = 65533, bytesPerSequence = 1) : codePoint > 65535 && (codePoint -= 65536, res.push(codePoint >>> 10 & 1023 | 55296), codePoint = 56320 | codePoint & 1023), res.push(codePoint), i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    __name(utf8Slice, "utf8Slice");
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH)
        return String.fromCharCode.apply(String, codePoints);
      for (var res = "", i = 0; i < len; )
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        );
      return res;
    }
    __name(decodeCodePointsArray, "decodeCodePointsArray");
    function asciiSlice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i = start; i < end; ++i)
        ret += String.fromCharCode(buf[i] & 127);
      return ret;
    }
    __name(asciiSlice, "asciiSlice");
    function latin1Slice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i = start; i < end; ++i)
        ret += String.fromCharCode(buf[i]);
      return ret;
    }
    __name(latin1Slice, "latin1Slice");
    function hexSlice(buf, start, end) {
      var len = buf.length;
      (!start || start < 0) && (start = 0), (!end || end < 0 || end > len) && (end = len);
      for (var out = "", i = start; i < end; ++i)
        out += toHex(buf[i]);
      return out;
    }
    __name(hexSlice, "hexSlice");
    function utf16leSlice(buf, start, end) {
      for (var bytes = buf.slice(start, end), res = "", i = 0; i < bytes.length; i += 2)
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      return res;
    }
    __name(utf16leSlice, "utf16leSlice"), Buffer2.prototype.slice = /* @__PURE__ */ __name(function(start, end) {
      var len = this.length;
      start = ~~start, end = end === void 0 ? len : ~~end, start < 0 ? (start += len, start < 0 && (start = 0)) : start > len && (start = len), end < 0 ? (end += len, end < 0 && (end = 0)) : end > len && (end = len), end < start && (end = start);
      var newBuf;
      if (Buffer2.TYPED_ARRAY_SUPPORT)
        newBuf = this.subarray(start, end), newBuf.__proto__ = Buffer2.prototype;
      else {
        var sliceLen = end - start;
        newBuf = new Buffer2(sliceLen, void 0);
        for (var i = 0; i < sliceLen; ++i)
          newBuf[i] = this[i + start];
      }
      return newBuf;
    }, "slice");
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
      if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
    }
    __name(checkOffset, "checkOffset"), Buffer2.prototype.readUIntLE = /* @__PURE__ */ __name(function(offset, byteLength2, noAssert) {
      offset = offset | 0, byteLength2 = byteLength2 | 0, noAssert || checkOffset(offset, byteLength2, this.length);
      for (var val = this[offset], mul = 1, i = 0; ++i < byteLength2 && (mul *= 256); )
        val += this[offset + i] * mul;
      return val;
    }, "readUIntLE"), Buffer2.prototype.readUIntBE = /* @__PURE__ */ __name(function(offset, byteLength2, noAssert) {
      offset = offset | 0, byteLength2 = byteLength2 | 0, noAssert || checkOffset(offset, byteLength2, this.length);
      for (var val = this[offset + --byteLength2], mul = 1; byteLength2 > 0 && (mul *= 256); )
        val += this[offset + --byteLength2] * mul;
      return val;
    }, "readUIntBE"), Buffer2.prototype.readUInt8 = /* @__PURE__ */ __name(function(offset, noAssert) {
      return noAssert || checkOffset(offset, 1, this.length), this[offset];
    }, "readUInt8"), Buffer2.prototype.readUInt16LE = /* @__PURE__ */ __name(function(offset, noAssert) {
      return noAssert || checkOffset(offset, 2, this.length), this[offset] | this[offset + 1] << 8;
    }, "readUInt16LE"), Buffer2.prototype.readUInt16BE = /* @__PURE__ */ __name(function(offset, noAssert) {
      return noAssert || checkOffset(offset, 2, this.length), this[offset] << 8 | this[offset + 1];
    }, "readUInt16BE"), Buffer2.prototype.readUInt32LE = /* @__PURE__ */ __name(function(offset, noAssert) {
      return noAssert || checkOffset(offset, 4, this.length), (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    }, "readUInt32LE"), Buffer2.prototype.readUInt32BE = /* @__PURE__ */ __name(function(offset, noAssert) {
      return noAssert || checkOffset(offset, 4, this.length), this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    }, "readUInt32BE"), Buffer2.prototype.readIntLE = /* @__PURE__ */ __name(function(offset, byteLength2, noAssert) {
      offset = offset | 0, byteLength2 = byteLength2 | 0, noAssert || checkOffset(offset, byteLength2, this.length);
      for (var val = this[offset], mul = 1, i = 0; ++i < byteLength2 && (mul *= 256); )
        val += this[offset + i] * mul;
      return mul *= 128, val >= mul && (val -= Math.pow(2, 8 * byteLength2)), val;
    }, "readIntLE"), Buffer2.prototype.readIntBE = /* @__PURE__ */ __name(function(offset, byteLength2, noAssert) {
      offset = offset | 0, byteLength2 = byteLength2 | 0, noAssert || checkOffset(offset, byteLength2, this.length);
      for (var i = byteLength2, mul = 1, val = this[offset + --i]; i > 0 && (mul *= 256); )
        val += this[offset + --i] * mul;
      return mul *= 128, val >= mul && (val -= Math.pow(2, 8 * byteLength2)), val;
    }, "readIntBE"), Buffer2.prototype.readInt8 = /* @__PURE__ */ __name(function(offset, noAssert) {
      return noAssert || checkOffset(offset, 1, this.length), this[offset] & 128 ? (255 - this[offset] + 1) * -1 : this[offset];
    }, "readInt8"), Buffer2.prototype.readInt16LE = /* @__PURE__ */ __name(function(offset, noAssert) {
      noAssert || checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    }, "readInt16LE"), Buffer2.prototype.readInt16BE = /* @__PURE__ */ __name(function(offset, noAssert) {
      noAssert || checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    }, "readInt16BE"), Buffer2.prototype.readInt32LE = /* @__PURE__ */ __name(function(offset, noAssert) {
      return noAssert || checkOffset(offset, 4, this.length), this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    }, "readInt32LE"), Buffer2.prototype.readInt32BE = /* @__PURE__ */ __name(function(offset, noAssert) {
      return noAssert || checkOffset(offset, 4, this.length), this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    }, "readInt32BE"), Buffer2.prototype.readFloatLE = /* @__PURE__ */ __name(function(offset, noAssert) {
      return noAssert || checkOffset(offset, 4, this.length), ieee7542.read(this, offset, !0, 23, 4);
    }, "readFloatLE"), Buffer2.prototype.readFloatBE = /* @__PURE__ */ __name(function(offset, noAssert) {
      return noAssert || checkOffset(offset, 4, this.length), ieee7542.read(this, offset, !1, 23, 4);
    }, "readFloatBE"), Buffer2.prototype.readDoubleLE = /* @__PURE__ */ __name(function(offset, noAssert) {
      return noAssert || checkOffset(offset, 8, this.length), ieee7542.read(this, offset, !0, 52, 8);
    }, "readDoubleLE"), Buffer2.prototype.readDoubleBE = /* @__PURE__ */ __name(function(offset, noAssert) {
      return noAssert || checkOffset(offset, 8, this.length), ieee7542.read(this, offset, !1, 52, 8);
    }, "readDoubleBE");
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer2.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
    }
    __name(checkInt, "checkInt"), Buffer2.prototype.writeUIntLE = /* @__PURE__ */ __name(function(value, offset, byteLength2, noAssert) {
      if (value = +value, offset = offset | 0, byteLength2 = byteLength2 | 0, !noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var mul = 1, i = 0;
      for (this[offset] = value & 255; ++i < byteLength2 && (mul *= 256); )
        this[offset + i] = value / mul & 255;
      return offset + byteLength2;
    }, "writeUIntLE"), Buffer2.prototype.writeUIntBE = /* @__PURE__ */ __name(function(value, offset, byteLength2, noAssert) {
      if (value = +value, offset = offset | 0, byteLength2 = byteLength2 | 0, !noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var i = byteLength2 - 1, mul = 1;
      for (this[offset + i] = value & 255; --i >= 0 && (mul *= 256); )
        this[offset + i] = value / mul & 255;
      return offset + byteLength2;
    }, "writeUIntBE"), Buffer2.prototype.writeUInt8 = /* @__PURE__ */ __name(function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 1, 255, 0), Buffer2.TYPED_ARRAY_SUPPORT || (value = Math.floor(value)), this[offset] = value & 255, offset + 1;
    }, "writeUInt8");
    function objectWriteUInt16(buf, value, offset, littleEndian) {
      value < 0 && (value = 65535 + value + 1);
      for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i)
        buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
    }
    __name(objectWriteUInt16, "objectWriteUInt16"), Buffer2.prototype.writeUInt16LE = /* @__PURE__ */ __name(function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 2, 65535, 0), Buffer2.TYPED_ARRAY_SUPPORT ? (this[offset] = value & 255, this[offset + 1] = value >>> 8) : objectWriteUInt16(this, value, offset, !0), offset + 2;
    }, "writeUInt16LE"), Buffer2.prototype.writeUInt16BE = /* @__PURE__ */ __name(function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 2, 65535, 0), Buffer2.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 8, this[offset + 1] = value & 255) : objectWriteUInt16(this, value, offset, !1), offset + 2;
    }, "writeUInt16BE");
    function objectWriteUInt32(buf, value, offset, littleEndian) {
      value < 0 && (value = 4294967295 + value + 1);
      for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i)
        buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
    }
    __name(objectWriteUInt32, "objectWriteUInt32"), Buffer2.prototype.writeUInt32LE = /* @__PURE__ */ __name(function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 4, 4294967295, 0), Buffer2.TYPED_ARRAY_SUPPORT ? (this[offset + 3] = value >>> 24, this[offset + 2] = value >>> 16, this[offset + 1] = value >>> 8, this[offset] = value & 255) : objectWriteUInt32(this, value, offset, !0), offset + 4;
    }, "writeUInt32LE"), Buffer2.prototype.writeUInt32BE = /* @__PURE__ */ __name(function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 4, 4294967295, 0), Buffer2.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 24, this[offset + 1] = value >>> 16, this[offset + 2] = value >>> 8, this[offset + 3] = value & 255) : objectWriteUInt32(this, value, offset, !1), offset + 4;
    }, "writeUInt32BE"), Buffer2.prototype.writeIntLE = /* @__PURE__ */ __name(function(value, offset, byteLength2, noAssert) {
      if (value = +value, offset = offset | 0, !noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = 0, mul = 1, sub = 0;
      for (this[offset] = value & 255; ++i < byteLength2 && (mul *= 256); )
        value < 0 && sub === 0 && this[offset + i - 1] !== 0 && (sub = 1), this[offset + i] = (value / mul >> 0) - sub & 255;
      return offset + byteLength2;
    }, "writeIntLE"), Buffer2.prototype.writeIntBE = /* @__PURE__ */ __name(function(value, offset, byteLength2, noAssert) {
      if (value = +value, offset = offset | 0, !noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = byteLength2 - 1, mul = 1, sub = 0;
      for (this[offset + i] = value & 255; --i >= 0 && (mul *= 256); )
        value < 0 && sub === 0 && this[offset + i + 1] !== 0 && (sub = 1), this[offset + i] = (value / mul >> 0) - sub & 255;
      return offset + byteLength2;
    }, "writeIntBE"), Buffer2.prototype.writeInt8 = /* @__PURE__ */ __name(function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 1, 127, -128), Buffer2.TYPED_ARRAY_SUPPORT || (value = Math.floor(value)), value < 0 && (value = 255 + value + 1), this[offset] = value & 255, offset + 1;
    }, "writeInt8"), Buffer2.prototype.writeInt16LE = /* @__PURE__ */ __name(function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 2, 32767, -32768), Buffer2.TYPED_ARRAY_SUPPORT ? (this[offset] = value & 255, this[offset + 1] = value >>> 8) : objectWriteUInt16(this, value, offset, !0), offset + 2;
    }, "writeInt16LE"), Buffer2.prototype.writeInt16BE = /* @__PURE__ */ __name(function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 2, 32767, -32768), Buffer2.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 8, this[offset + 1] = value & 255) : objectWriteUInt16(this, value, offset, !1), offset + 2;
    }, "writeInt16BE"), Buffer2.prototype.writeInt32LE = /* @__PURE__ */ __name(function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648), Buffer2.TYPED_ARRAY_SUPPORT ? (this[offset] = value & 255, this[offset + 1] = value >>> 8, this[offset + 2] = value >>> 16, this[offset + 3] = value >>> 24) : objectWriteUInt32(this, value, offset, !0), offset + 4;
    }, "writeInt32LE"), Buffer2.prototype.writeInt32BE = /* @__PURE__ */ __name(function(value, offset, noAssert) {
      return value = +value, offset = offset | 0, noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648), value < 0 && (value = 4294967295 + value + 1), Buffer2.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 24, this[offset + 1] = value >>> 16, this[offset + 2] = value >>> 8, this[offset + 3] = value & 255) : objectWriteUInt32(this, value, offset, !1), offset + 4;
    }, "writeInt32BE");
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
      if (offset < 0) throw new RangeError("Index out of range");
    }
    __name(checkIEEE754, "checkIEEE754");
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      return noAssert || checkIEEE754(buf, value, offset, 4), ieee7542.write(buf, value, offset, littleEndian, 23, 4), offset + 4;
    }
    __name(writeFloat, "writeFloat"), Buffer2.prototype.writeFloatLE = /* @__PURE__ */ __name(function(value, offset, noAssert) {
      return writeFloat(this, value, offset, !0, noAssert);
    }, "writeFloatLE"), Buffer2.prototype.writeFloatBE = /* @__PURE__ */ __name(function(value, offset, noAssert) {
      return writeFloat(this, value, offset, !1, noAssert);
    }, "writeFloatBE");
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      return noAssert || checkIEEE754(buf, value, offset, 8), ieee7542.write(buf, value, offset, littleEndian, 52, 8), offset + 8;
    }
    __name(writeDouble, "writeDouble"), Buffer2.prototype.writeDoubleLE = /* @__PURE__ */ __name(function(value, offset, noAssert) {
      return writeDouble(this, value, offset, !0, noAssert);
    }, "writeDoubleLE"), Buffer2.prototype.writeDoubleBE = /* @__PURE__ */ __name(function(value, offset, noAssert) {
      return writeDouble(this, value, offset, !1, noAssert);
    }, "writeDoubleBE"), Buffer2.prototype.copy = /* @__PURE__ */ __name(function(target, targetStart, start, end) {
      if (start || (start = 0), !end && end !== 0 && (end = this.length), targetStart >= target.length && (targetStart = target.length), targetStart || (targetStart = 0), end > 0 && end < start && (end = start), end === start || target.length === 0 || this.length === 0) return 0;
      if (targetStart < 0)
        throw new RangeError("targetStart out of bounds");
      if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
      if (end < 0) throw new RangeError("sourceEnd out of bounds");
      end > this.length && (end = this.length), target.length - targetStart < end - start && (end = target.length - targetStart + start);
      var len = end - start, i;
      if (this === target && start < targetStart && targetStart < end)
        for (i = len - 1; i >= 0; --i)
          target[i + targetStart] = this[i + start];
      else if (len < 1e3 || !Buffer2.TYPED_ARRAY_SUPPORT)
        for (i = 0; i < len; ++i)
          target[i + targetStart] = this[i + start];
      else
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, start + len),
          targetStart
        );
      return len;
    }, "copy"), Buffer2.prototype.fill = /* @__PURE__ */ __name(function(val, start, end, encoding) {
      if (typeof val == "string") {
        if (typeof start == "string" ? (encoding = start, start = 0, end = this.length) : typeof end == "string" && (encoding = end, end = this.length), val.length === 1) {
          var code = val.charCodeAt(0);
          code < 256 && (val = code);
        }
        if (encoding !== void 0 && typeof encoding != "string")
          throw new TypeError("encoding must be a string");
        if (typeof encoding == "string" && !Buffer2.isEncoding(encoding))
          throw new TypeError("Unknown encoding: " + encoding);
      } else typeof val == "number" && (val = val & 255);
      if (start < 0 || this.length < start || this.length < end)
        throw new RangeError("Out of range index");
      if (end <= start)
        return this;
      start = start >>> 0, end = end === void 0 ? this.length : end >>> 0, val || (val = 0);
      var i;
      if (typeof val == "number")
        for (i = start; i < end; ++i)
          this[i] = val;
      else {
        var bytes = Buffer2.isBuffer(val) ? val : utf8ToBytes(new Buffer2(val, encoding).toString()), len = bytes.length;
        for (i = 0; i < end - start; ++i)
          this[i + start] = bytes[i % len];
      }
      return this;
    }, "fill");
    var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
    function base64clean(str) {
      if (str = stringtrim(str).replace(INVALID_BASE64_RE, ""), str.length < 2) return "";
      for (; str.length % 4 !== 0; )
        str = str + "=";
      return str;
    }
    __name(base64clean, "base64clean");
    function stringtrim(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    }
    __name(stringtrim, "stringtrim");
    function toHex(n) {
      return n < 16 ? "0" + n.toString(16) : n.toString(16);
    }
    __name(toHex, "toHex");
    function utf8ToBytes(string, units) {
      units = units || 1 / 0;
      for (var codePoint, length = string.length, leadSurrogate = null, bytes = [], i = 0; i < length; ++i) {
        if (codePoint = string.charCodeAt(i), codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              (units -= 3) > -1 && bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              (units -= 3) > -1 && bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            (units -= 3) > -1 && bytes.push(239, 191, 189), leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else leadSurrogate && (units -= 3) > -1 && bytes.push(239, 191, 189);
        if (leadSurrogate = null, codePoint < 128) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0) break;
          bytes.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0) break;
          bytes.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0) break;
          bytes.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return bytes;
    }
    __name(utf8ToBytes, "utf8ToBytes");
    function asciiToBytes(str) {
      for (var byteArray = [], i = 0; i < str.length; ++i)
        byteArray.push(str.charCodeAt(i) & 255);
      return byteArray;
    }
    __name(asciiToBytes, "asciiToBytes");
    function utf16leToBytes(str, units) {
      for (var c, hi, lo, byteArray = [], i = 0; i < str.length && !((units -= 2) < 0); ++i)
        c = str.charCodeAt(i), hi = c >> 8, lo = c % 256, byteArray.push(lo), byteArray.push(hi);
      return byteArray;
    }
    __name(utf16leToBytes, "utf16leToBytes");
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    __name(base64ToBytes, "base64ToBytes");
    function blitBuffer(src, dst, offset, length) {
      for (var i = 0; i < length && !(i + offset >= dst.length || i >= src.length); ++i)
        dst[i + offset] = src[i];
      return i;
    }
    __name(blitBuffer, "blitBuffer");
    function isnan(val) {
      return val !== val;
    }
    __name(isnan, "isnan");
  })(buffer)), buffer;
}
__name(requireBuffer, "requireBuffer");
var bufferExports = requireBuffer(), crypto;
typeof window < "u" && window.crypto && (crypto = window.crypto);
!crypto && typeof window < "u" && window.msCrypto && (crypto = window.msCrypto);
!crypto && typeof global < "u" && global.crypto && (crypto = global.crypto);
if (!crypto && typeof require == "function")
  try {
    crypto = require("crypto");
  } catch {
  }
function cryptoSecureRandomInt() {
  if (crypto) {
    if (typeof crypto.getRandomValues == "function")
      try {
        return crypto.getRandomValues(new Uint32Array(1))[0];
      } catch {
      }
    if (typeof crypto.randomBytes == "function")
      try {
        return crypto.randomBytes(4).readInt32LE();
      } catch {
      }
  }
  throw new Error("Native crypto module could not be used to get secure random number.");
}
__name(cryptoSecureRandomInt, "cryptoSecureRandomInt");
function hexStringify(wordArray) {
  for (var words = wordArray.words, sigBytes = wordArray.sigBytes, hexChars = [], i = 0; i < sigBytes; i++) {
    var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
    hexChars.push((bite >>> 4).toString(16)), hexChars.push((bite & 15).toString(16));
  }
  return hexChars.join("");
}
__name(hexStringify, "hexStringify");
var WordArray = /* @__PURE__ */ (function() {
  function WordArray2(words, sigBytes) {
    words = this.words = words || [], sigBytes != null ? this.sigBytes = sigBytes : this.sigBytes = words.length * 4;
  }
  __name(WordArray2, "WordArray");
  var _proto = WordArray2.prototype;
  return _proto.random = /* @__PURE__ */ __name(function(nBytes) {
    for (var words = [], i = 0; i < nBytes; i += 4)
      words.push(cryptoSecureRandomInt());
    return new WordArray2(words, nBytes);
  }, "random"), _proto.toString = /* @__PURE__ */ __name(function() {
    return hexStringify(this);
  }, "toString"), WordArray2;
})();
function BigInteger(a, b) {
  a != null && this.fromString(a, b);
}
__name(BigInteger, "BigInteger");
function nbi() {
  return new BigInteger(null);
}
__name(nbi, "nbi");
var dbits, canary = 244837814094590, j_lm = (canary & 16777215) == 15715070;
function am1(i, x, w, j, c, n) {
  for (; --n >= 0; ) {
    var v = x * this[i++] + w[j] + c;
    c = Math.floor(v / 67108864), w[j++] = v & 67108863;
  }
  return c;
}
__name(am1, "am1");
function am2(i, x, w, j, c, n) {
  for (var xl = x & 32767, xh = x >> 15; --n >= 0; ) {
    var l = this[i] & 32767, h = this[i++] >> 15, m = xh * l + h * xl;
    l = xl * l + ((m & 32767) << 15) + w[j] + (c & 1073741823), c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30), w[j++] = l & 1073741823;
  }
  return c;
}
__name(am2, "am2");
function am3(i, x, w, j, c, n) {
  for (var xl = x & 16383, xh = x >> 14; --n >= 0; ) {
    var l = this[i] & 16383, h = this[i++] >> 14, m = xh * l + h * xl;
    l = xl * l + ((m & 16383) << 14) + w[j] + c, c = (l >> 28) + (m >> 14) + xh * h, w[j++] = l & 268435455;
  }
  return c;
}
__name(am3, "am3");
var inBrowser = typeof navigator < "u";
inBrowser && j_lm && navigator.appName == "Microsoft Internet Explorer" ? (BigInteger.prototype.am = am2, dbits = 30) : inBrowser && j_lm && navigator.appName != "Netscape" ? (BigInteger.prototype.am = am1, dbits = 26) : (BigInteger.prototype.am = am3, dbits = 28);
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz", BI_RC = new Array(), rr, vv;
rr = 48;
for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
rr = 97;
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
rr = 65;
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
function int2char(n) {
  return BI_RM.charAt(n);
}
__name(int2char, "int2char");
function intAt(s, i) {
  var c = BI_RC[s.charCodeAt(i)];
  return c ?? -1;
}
__name(intAt, "intAt");
function bnpCopyTo(r) {
  for (var i = this.t - 1; i >= 0; --i) r[i] = this[i];
  r.t = this.t, r.s = this.s;
}
__name(bnpCopyTo, "bnpCopyTo");
function bnpFromInt(x) {
  this.t = 1, this.s = x < 0 ? -1 : 0, x > 0 ? this[0] = x : x < -1 ? this[0] = x + this.DV : this.t = 0;
}
__name(bnpFromInt, "bnpFromInt");
function nbv(i) {
  var r = nbi();
  return r.fromInt(i), r;
}
__name(nbv, "nbv");
function bnpFromString(s, b) {
  var k;
  if (b == 16) k = 4;
  else if (b == 8) k = 3;
  else if (b == 2) k = 1;
  else if (b == 32) k = 5;
  else if (b == 4) k = 2;
  else throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
  this.t = 0, this.s = 0;
  for (var i = s.length, mi = !1, sh = 0; --i >= 0; ) {
    var x = intAt(s, i);
    if (x < 0) {
      s.charAt(i) == "-" && (mi = !0);
      continue;
    }
    mi = !1, sh == 0 ? this[this.t++] = x : sh + k > this.DB ? (this[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh, this[this.t++] = x >> this.DB - sh) : this[this.t - 1] |= x << sh, sh += k, sh >= this.DB && (sh -= this.DB);
  }
  this.clamp(), mi && BigInteger.ZERO.subTo(this, this);
}
__name(bnpFromString, "bnpFromString");
function bnpClamp() {
  for (var c = this.s & this.DM; this.t > 0 && this[this.t - 1] == c; ) --this.t;
}
__name(bnpClamp, "bnpClamp");
function bnToString(b) {
  if (this.s < 0) return "-" + this.negate().toString(b);
  var k;
  if (b == 16) k = 4;
  else if (b == 8) k = 3;
  else if (b == 2) k = 1;
  else if (b == 32) k = 5;
  else if (b == 4) k = 2;
  else throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
  var km = (1 << k) - 1, d, m = !1, r = "", i = this.t, p = this.DB - i * this.DB % k;
  if (i-- > 0)
    for (p < this.DB && (d = this[i] >> p) > 0 && (m = !0, r = int2char(d)); i >= 0; )
      p < k ? (d = (this[i] & (1 << p) - 1) << k - p, d |= this[--i] >> (p += this.DB - k)) : (d = this[i] >> (p -= k) & km, p <= 0 && (p += this.DB, --i)), d > 0 && (m = !0), m && (r += int2char(d));
  return m ? r : "0";
}
__name(bnToString, "bnToString");
function bnNegate() {
  var r = nbi();
  return BigInteger.ZERO.subTo(this, r), r;
}
__name(bnNegate, "bnNegate");
function bnAbs() {
  return this.s < 0 ? this.negate() : this;
}
__name(bnAbs, "bnAbs");
function bnCompareTo(a) {
  var r = this.s - a.s;
  if (r != 0) return r;
  var i = this.t;
  if (r = i - a.t, r != 0) return this.s < 0 ? -r : r;
  for (; --i >= 0; ) if ((r = this[i] - a[i]) != 0) return r;
  return 0;
}
__name(bnCompareTo, "bnCompareTo");
function nbits(x) {
  var r = 1, t;
  return (t = x >>> 16) != 0 && (x = t, r += 16), (t = x >> 8) != 0 && (x = t, r += 8), (t = x >> 4) != 0 && (x = t, r += 4), (t = x >> 2) != 0 && (x = t, r += 2), (t = x >> 1) != 0 && (x = t, r += 1), r;
}
__name(nbits, "nbits");
function bnBitLength() {
  return this.t <= 0 ? 0 : this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
}
__name(bnBitLength, "bnBitLength");
function bnpDLShiftTo(n, r) {
  var i;
  for (i = this.t - 1; i >= 0; --i) r[i + n] = this[i];
  for (i = n - 1; i >= 0; --i) r[i] = 0;
  r.t = this.t + n, r.s = this.s;
}
__name(bnpDLShiftTo, "bnpDLShiftTo");
function bnpDRShiftTo(n, r) {
  for (var i = n; i < this.t; ++i) r[i - n] = this[i];
  r.t = Math.max(this.t - n, 0), r.s = this.s;
}
__name(bnpDRShiftTo, "bnpDRShiftTo");
function bnpLShiftTo(n, r) {
  var bs = n % this.DB, cbs = this.DB - bs, bm = (1 << cbs) - 1, ds = Math.floor(n / this.DB), c = this.s << bs & this.DM, i;
  for (i = this.t - 1; i >= 0; --i)
    r[i + ds + 1] = this[i] >> cbs | c, c = (this[i] & bm) << bs;
  for (i = ds - 1; i >= 0; --i) r[i] = 0;
  r[ds] = c, r.t = this.t + ds + 1, r.s = this.s, r.clamp();
}
__name(bnpLShiftTo, "bnpLShiftTo");
function bnpRShiftTo(n, r) {
  r.s = this.s;
  var ds = Math.floor(n / this.DB);
  if (ds >= this.t) {
    r.t = 0;
    return;
  }
  var bs = n % this.DB, cbs = this.DB - bs, bm = (1 << bs) - 1;
  r[0] = this[ds] >> bs;
  for (var i = ds + 1; i < this.t; ++i)
    r[i - ds - 1] |= (this[i] & bm) << cbs, r[i - ds] = this[i] >> bs;
  bs > 0 && (r[this.t - ds - 1] |= (this.s & bm) << cbs), r.t = this.t - ds, r.clamp();
}
__name(bnpRShiftTo, "bnpRShiftTo");
function bnpSubTo(a, r) {
  for (var i = 0, c = 0, m = Math.min(a.t, this.t); i < m; )
    c += this[i] - a[i], r[i++] = c & this.DM, c >>= this.DB;
  if (a.t < this.t) {
    for (c -= a.s; i < this.t; )
      c += this[i], r[i++] = c & this.DM, c >>= this.DB;
    c += this.s;
  } else {
    for (c += this.s; i < a.t; )
      c -= a[i], r[i++] = c & this.DM, c >>= this.DB;
    c -= a.s;
  }
  r.s = c < 0 ? -1 : 0, c < -1 ? r[i++] = this.DV + c : c > 0 && (r[i++] = c), r.t = i, r.clamp();
}
__name(bnpSubTo, "bnpSubTo");
function bnpMultiplyTo(a, r) {
  var x = this.abs(), y = a.abs(), i = x.t;
  for (r.t = i + y.t; --i >= 0; ) r[i] = 0;
  for (i = 0; i < y.t; ++i) r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
  r.s = 0, r.clamp(), this.s != a.s && BigInteger.ZERO.subTo(r, r);
}
__name(bnpMultiplyTo, "bnpMultiplyTo");
function bnpSquareTo(r) {
  for (var x = this.abs(), i = r.t = 2 * x.t; --i >= 0; ) r[i] = 0;
  for (i = 0; i < x.t - 1; ++i) {
    var c = x.am(i, x[i], r, 2 * i, 0, 1);
    (r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV && (r[i + x.t] -= x.DV, r[i + x.t + 1] = 1);
  }
  r.t > 0 && (r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1)), r.s = 0, r.clamp();
}
__name(bnpSquareTo, "bnpSquareTo");
function bnpDivRemTo(m, q, r) {
  var pm = m.abs();
  if (!(pm.t <= 0)) {
    var pt = this.abs();
    if (pt.t < pm.t) {
      q != null && q.fromInt(0), r != null && this.copyTo(r);
      return;
    }
    r == null && (r = nbi());
    var y = nbi(), ts = this.s, ms = m.s, nsh = this.DB - nbits(pm[pm.t - 1]);
    nsh > 0 ? (pm.lShiftTo(nsh, y), pt.lShiftTo(nsh, r)) : (pm.copyTo(y), pt.copyTo(r));
    var ys = y.t, y0 = y[ys - 1];
    if (y0 != 0) {
      var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0), d1 = this.FV / yt, d2 = (1 << this.F1) / yt, e = 1 << this.F2, i = r.t, j = i - ys, t = q ?? nbi();
      for (y.dlShiftTo(j, t), r.compareTo(t) >= 0 && (r[r.t++] = 1, r.subTo(t, r)), BigInteger.ONE.dlShiftTo(ys, t), t.subTo(y, y); y.t < ys; ) y[y.t++] = 0;
      for (; --j >= 0; ) {
        var qd = r[--i] == y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
        if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd)
          for (y.dlShiftTo(j, t), r.subTo(t, r); r[i] < --qd; ) r.subTo(t, r);
      }
      q != null && (r.drShiftTo(ys, q), ts != ms && BigInteger.ZERO.subTo(q, q)), r.t = ys, r.clamp(), nsh > 0 && r.rShiftTo(nsh, r), ts < 0 && BigInteger.ZERO.subTo(r, r);
    }
  }
}
__name(bnpDivRemTo, "bnpDivRemTo");
function bnMod(a) {
  var r = nbi();
  return this.abs().divRemTo(a, null, r), this.s < 0 && r.compareTo(BigInteger.ZERO) > 0 && a.subTo(r, r), r;
}
__name(bnMod, "bnMod");
function bnpInvDigit() {
  if (this.t < 1) return 0;
  var x = this[0];
  if ((x & 1) == 0) return 0;
  var y = x & 3;
  return y = y * (2 - (x & 15) * y) & 15, y = y * (2 - (x & 255) * y) & 255, y = y * (2 - ((x & 65535) * y & 65535)) & 65535, y = y * (2 - x * y % this.DV) % this.DV, y > 0 ? this.DV - y : -y;
}
__name(bnpInvDigit, "bnpInvDigit");
function bnEquals(a) {
  return this.compareTo(a) == 0;
}
__name(bnEquals, "bnEquals");
function bnpAddTo(a, r) {
  for (var i = 0, c = 0, m = Math.min(a.t, this.t); i < m; )
    c += this[i] + a[i], r[i++] = c & this.DM, c >>= this.DB;
  if (a.t < this.t) {
    for (c += a.s; i < this.t; )
      c += this[i], r[i++] = c & this.DM, c >>= this.DB;
    c += this.s;
  } else {
    for (c += this.s; i < a.t; )
      c += a[i], r[i++] = c & this.DM, c >>= this.DB;
    c += a.s;
  }
  r.s = c < 0 ? -1 : 0, c > 0 ? r[i++] = c : c < -1 && (r[i++] = this.DV + c), r.t = i, r.clamp();
}
__name(bnpAddTo, "bnpAddTo");
function bnAdd(a) {
  var r = nbi();
  return this.addTo(a, r), r;
}
__name(bnAdd, "bnAdd");
function bnSubtract(a) {
  var r = nbi();
  return this.subTo(a, r), r;
}
__name(bnSubtract, "bnSubtract");
function bnMultiply(a) {
  var r = nbi();
  return this.multiplyTo(a, r), r;
}
__name(bnMultiply, "bnMultiply");
function bnDivide(a) {
  var r = nbi();
  return this.divRemTo(a, r, null), r;
}
__name(bnDivide, "bnDivide");
function Montgomery(m) {
  this.m = m, this.mp = m.invDigit(), this.mpl = this.mp & 32767, this.mph = this.mp >> 15, this.um = (1 << m.DB - 15) - 1, this.mt2 = 2 * m.t;
}
__name(Montgomery, "Montgomery");
function montConvert(x) {
  var r = nbi();
  return x.abs().dlShiftTo(this.m.t, r), r.divRemTo(this.m, null, r), x.s < 0 && r.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(r, r), r;
}
__name(montConvert, "montConvert");
function montRevert(x) {
  var r = nbi();
  return x.copyTo(r), this.reduce(r), r;
}
__name(montRevert, "montRevert");
function montReduce(x) {
  for (; x.t <= this.mt2; )
    x[x.t++] = 0;
  for (var i = 0; i < this.m.t; ++i) {
    var j = x[i] & 32767, u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM;
    for (j = i + this.m.t, x[j] += this.m.am(0, u0, x, i, 0, this.m.t); x[j] >= x.DV; )
      x[j] -= x.DV, x[++j]++;
  }
  x.clamp(), x.drShiftTo(this.m.t, x), x.compareTo(this.m) >= 0 && x.subTo(this.m, x);
}
__name(montReduce, "montReduce");
function montSqrTo(x, r) {
  x.squareTo(r), this.reduce(r);
}
__name(montSqrTo, "montSqrTo");
function montMulTo(x, y, r) {
  x.multiplyTo(y, r), this.reduce(r);
}
__name(montMulTo, "montMulTo");
Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;
function bnModPow(e, m, callback) {
  var i = e.bitLength(), k, r = nbv(1), z = new Montgomery(m);
  if (i <= 0) return r;
  i < 18 ? k = 1 : i < 48 ? k = 3 : i < 144 ? k = 4 : i < 768 ? k = 5 : k = 6;
  var g = new Array(), n = 3, k1 = k - 1, km = (1 << k) - 1;
  if (g[1] = z.convert(this), k > 1) {
    var g2 = nbi();
    for (z.sqrTo(g[1], g2); n <= km; )
      g[n] = nbi(), z.mulTo(g2, g[n - 2], g[n]), n += 2;
  }
  var j = e.t - 1, w, is1 = !0, r2 = nbi(), t;
  for (i = nbits(e[j]) - 1; j >= 0; ) {
    for (i >= k1 ? w = e[j] >> i - k1 & km : (w = (e[j] & (1 << i + 1) - 1) << k1 - i, j > 0 && (w |= e[j - 1] >> this.DB + i - k1)), n = k; (w & 1) == 0; )
      w >>= 1, --n;
    if ((i -= n) < 0 && (i += this.DB, --j), is1)
      g[w].copyTo(r), is1 = !1;
    else {
      for (; n > 1; )
        z.sqrTo(r, r2), z.sqrTo(r2, r), n -= 2;
      n > 0 ? z.sqrTo(r, r2) : (t = r, r = r2, r2 = t), z.mulTo(r2, g[w], r);
    }
    for (; j >= 0 && (e[j] & 1 << i) == 0; )
      z.sqrTo(r, r2), t = r, r = r2, r2 = t, --i < 0 && (i = this.DB - 1, --j);
  }
  var result = z.revert(r);
  return callback(null, result), result;
}
__name(bnModPow, "bnModPow");
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.addTo = bnpAddTo;
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.modPow = bnModPow;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function randomBytes(nBytes) {
  return bufferExports.Buffer.from(new WordArray().random(nBytes).toString(), "hex");
}
__name(randomBytes, "randomBytes");
var HEX_MSB_REGEX = /^[89a-f]/i, initN = "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF", newPasswordRequiredChallengeUserAttributePrefix = "userAttributes.", AuthenticationHelper = /* @__PURE__ */ (function() {
  function AuthenticationHelper2(PoolName) {
    this.N = new BigInteger(initN, 16), this.g = new BigInteger("2", 16), this.k = new BigInteger(this.hexHash("" + this.padHex(this.N) + this.padHex(this.g)), 16), this.smallAValue = this.generateRandomSmallA(), this.getLargeAValue(function() {
    }), this.infoBits = bufferExports.Buffer.from("Caldera Derived Key", "utf8"), this.poolName = PoolName;
  }
  __name(AuthenticationHelper2, "AuthenticationHelper");
  var _proto = AuthenticationHelper2.prototype;
  return _proto.getSmallAValue = /* @__PURE__ */ __name(function() {
    return this.smallAValue;
  }, "getSmallAValue"), _proto.getLargeAValue = /* @__PURE__ */ __name(function(callback) {
    var _this = this;
    this.largeAValue ? callback(null, this.largeAValue) : this.calculateA(this.smallAValue, function(err, largeAValue) {
      err && callback(err, null), _this.largeAValue = largeAValue, callback(null, _this.largeAValue);
    });
  }, "getLargeAValue"), _proto.generateRandomSmallA = /* @__PURE__ */ __name(function() {
    var hexRandom = randomBytes(128).toString("hex"), randomBigInt = new BigInteger(hexRandom, 16);
    return randomBigInt;
  }, "generateRandomSmallA"), _proto.generateRandomString = /* @__PURE__ */ __name(function() {
    return randomBytes(40).toString("base64");
  }, "generateRandomString"), _proto.getRandomPassword = /* @__PURE__ */ __name(function() {
    return this.randomPassword;
  }, "getRandomPassword"), _proto.getSaltDevices = /* @__PURE__ */ __name(function() {
    return this.SaltToHashDevices;
  }, "getSaltDevices"), _proto.getVerifierDevices = /* @__PURE__ */ __name(function() {
    return this.verifierDevices;
  }, "getVerifierDevices"), _proto.generateHashDevice = /* @__PURE__ */ __name(function(deviceGroupKey, username, callback) {
    var _this2 = this;
    this.randomPassword = this.generateRandomString();
    var combinedString = "" + deviceGroupKey + username + ":" + this.randomPassword, hashedString = this.hash(combinedString), hexRandom = randomBytes(16).toString("hex");
    this.SaltToHashDevices = this.padHex(new BigInteger(hexRandom, 16)), this.g.modPow(new BigInteger(this.hexHash(this.SaltToHashDevices + hashedString), 16), this.N, function(err, verifierDevicesNotPadded) {
      err && callback(err, null), _this2.verifierDevices = _this2.padHex(verifierDevicesNotPadded), callback(null, null);
    });
  }, "generateHashDevice"), _proto.calculateA = /* @__PURE__ */ __name(function(a, callback) {
    var _this3 = this;
    this.g.modPow(a, this.N, function(err, A) {
      err && callback(err, null), A.mod(_this3.N).equals(BigInteger.ZERO) && callback(new Error("Illegal paramater. A mod N cannot be 0."), null), callback(null, A);
    });
  }, "calculateA"), _proto.calculateU = /* @__PURE__ */ __name(function(A, B) {
    this.UHexHash = this.hexHash(this.padHex(A) + this.padHex(B));
    var finalU = new BigInteger(this.UHexHash, 16);
    return finalU;
  }, "calculateU"), _proto.hash = /* @__PURE__ */ __name(function(buf) {
    var awsCryptoHash = new buildExports.Sha256();
    awsCryptoHash.update(buf);
    var resultFromAWSCrypto = awsCryptoHash.digestSync(), hashHex = bufferExports.Buffer.from(resultFromAWSCrypto).toString("hex");
    return new Array(64 - hashHex.length).join("0") + hashHex;
  }, "hash"), _proto.hexHash = /* @__PURE__ */ __name(function(hexStr) {
    return this.hash(bufferExports.Buffer.from(hexStr, "hex"));
  }, "hexHash"), _proto.computehkdf = /* @__PURE__ */ __name(function(ikm, salt) {
    var infoBitsBuffer = bufferExports.Buffer.concat([this.infoBits, bufferExports.Buffer.from("", "utf8")]), awsCryptoHash = new buildExports.Sha256(salt);
    awsCryptoHash.update(ikm);
    var resultFromAWSCryptoPrk = awsCryptoHash.digestSync(), awsCryptoHashHmac = new buildExports.Sha256(resultFromAWSCryptoPrk);
    awsCryptoHashHmac.update(infoBitsBuffer);
    var resultFromAWSCryptoHmac = awsCryptoHashHmac.digestSync(), hashHexFromAWSCrypto = resultFromAWSCryptoHmac, currentHex = hashHexFromAWSCrypto.slice(0, 16);
    return currentHex;
  }, "computehkdf"), _proto.getPasswordAuthenticationKey = /* @__PURE__ */ __name(function(username, password, serverBValue, salt, callback) {
    var _this4 = this;
    if (serverBValue.mod(this.N).equals(BigInteger.ZERO))
      throw new Error("B cannot be zero.");
    if (this.UValue = this.calculateU(this.largeAValue, serverBValue), this.UValue.equals(BigInteger.ZERO))
      throw new Error("U cannot be zero.");
    var usernamePassword = "" + this.poolName + username + ":" + password, usernamePasswordHash = this.hash(usernamePassword), xValue = new BigInteger(this.hexHash(this.padHex(salt) + usernamePasswordHash), 16);
    this.calculateS(xValue, serverBValue, function(err, sValue) {
      err && callback(err, null);
      var hkdf = _this4.computehkdf(bufferExports.Buffer.from(_this4.padHex(sValue), "hex"), bufferExports.Buffer.from(_this4.padHex(_this4.UValue), "hex"));
      callback(null, hkdf);
    });
  }, "getPasswordAuthenticationKey"), _proto.calculateS = /* @__PURE__ */ __name(function(xValue, serverBValue, callback) {
    var _this5 = this;
    this.g.modPow(xValue, this.N, function(err, gModPowXN) {
      err && callback(err, null);
      var intValue2 = serverBValue.subtract(_this5.k.multiply(gModPowXN));
      intValue2.modPow(_this5.smallAValue.add(_this5.UValue.multiply(xValue)), _this5.N, function(err2, result) {
        err2 && callback(err2, null), callback(null, result.mod(_this5.N));
      });
    });
  }, "calculateS"), _proto.getNewPasswordRequiredChallengeUserAttributePrefix = /* @__PURE__ */ __name(function() {
    return newPasswordRequiredChallengeUserAttributePrefix;
  }, "getNewPasswordRequiredChallengeUserAttributePrefix"), _proto.padHex = /* @__PURE__ */ __name(function(bigInt) {
    if (!(bigInt instanceof BigInteger))
      throw new Error("Not a BigInteger");
    var isNegative = bigInt.compareTo(BigInteger.ZERO) < 0, hexStr = bigInt.abs().toString(16);
    if (hexStr = hexStr.length % 2 !== 0 ? "0" + hexStr : hexStr, hexStr = HEX_MSB_REGEX.test(hexStr) ? "00" + hexStr : hexStr, isNegative) {
      var invertedNibbles = hexStr.split("").map(function(x) {
        var invertedNibble = ~parseInt(x, 16) & 15;
        return "0123456789ABCDEF".charAt(invertedNibble);
      }).join(""), flippedBitsBI = new BigInteger(invertedNibbles, 16).add(BigInteger.ONE);
      hexStr = flippedBitsBI.toString(16), hexStr.toUpperCase().startsWith("FF8") && (hexStr = hexStr.substring(2));
    }
    return hexStr;
  }, "padHex"), AuthenticationHelper2;
})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var CognitoJwtToken = /* @__PURE__ */ (function() {
  function CognitoJwtToken2(token) {
    this.jwtToken = token || "", this.payload = this.decodePayload();
  }
  __name(CognitoJwtToken2, "CognitoJwtToken");
  var _proto = CognitoJwtToken2.prototype;
  return _proto.getJwtToken = /* @__PURE__ */ __name(function() {
    return this.jwtToken;
  }, "getJwtToken"), _proto.getExpiration = /* @__PURE__ */ __name(function() {
    return this.payload.exp;
  }, "getExpiration"), _proto.getIssuedAt = /* @__PURE__ */ __name(function() {
    return this.payload.iat;
  }, "getIssuedAt"), _proto.decodePayload = /* @__PURE__ */ __name(function() {
    var payload = this.jwtToken.split(".")[1];
    try {
      return JSON.parse(bufferExports.Buffer.from(payload, "base64").toString("utf8"));
    } catch {
      return {};
    }
  }, "decodePayload"), CognitoJwtToken2;
})();
function _inheritsLoose$2(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf$2(t, o);
}
__name(_inheritsLoose$2, "_inheritsLoose$2");
function _setPrototypeOf$2(t, e) {
  return _setPrototypeOf$2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf$2(t, e);
}
__name(_setPrototypeOf$2, "_setPrototypeOf$2");
var CognitoAccessToken = /* @__PURE__ */ (function(_CognitoJwtToken) {
  function CognitoAccessToken2(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, AccessToken = _ref.AccessToken;
    return _CognitoJwtToken.call(this, AccessToken || "") || this;
  }
  return __name(CognitoAccessToken2, "CognitoAccessToken"), _inheritsLoose$2(CognitoAccessToken2, _CognitoJwtToken), CognitoAccessToken2;
})(CognitoJwtToken);
function _inheritsLoose$1(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf$1(t, o);
}
__name(_inheritsLoose$1, "_inheritsLoose$1");
function _setPrototypeOf$1(t, e) {
  return _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf$1(t, e);
}
__name(_setPrototypeOf$1, "_setPrototypeOf$1");
var CognitoIdToken = /* @__PURE__ */ (function(_CognitoJwtToken) {
  function CognitoIdToken2(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, IdToken = _ref.IdToken;
    return _CognitoJwtToken.call(this, IdToken || "") || this;
  }
  return __name(CognitoIdToken2, "CognitoIdToken"), _inheritsLoose$1(CognitoIdToken2, _CognitoJwtToken), CognitoIdToken2;
})(CognitoJwtToken);
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var CognitoRefreshToken = /* @__PURE__ */ (function() {
  function CognitoRefreshToken2(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, RefreshToken = _ref.RefreshToken;
    this.token = RefreshToken || "";
  }
  __name(CognitoRefreshToken2, "CognitoRefreshToken");
  var _proto = CognitoRefreshToken2.prototype;
  return _proto.getToken = /* @__PURE__ */ __name(function() {
    return this.token;
  }, "getToken"), CognitoRefreshToken2;
})(), version = "5.0.4";
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var BASE_USER_AGENT = "aws-amplify/" + version, Platform = {
  userAgent: BASE_USER_AGENT,
  isReactNative: typeof navigator < "u" && navigator.product === "ReactNative"
}, getUserAgent = /* @__PURE__ */ __name(function() {
  return Platform.userAgent;
}, "getUserAgent");
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var CognitoUserSession = /* @__PURE__ */ (function() {
  function CognitoUserSession2(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, IdToken = _ref.IdToken, RefreshToken = _ref.RefreshToken, AccessToken = _ref.AccessToken, ClockDrift = _ref.ClockDrift;
    if (AccessToken == null || IdToken == null)
      throw new Error("Id token and Access Token must be present.");
    this.idToken = IdToken, this.refreshToken = RefreshToken, this.accessToken = AccessToken, this.clockDrift = ClockDrift === void 0 ? this.calculateClockDrift() : ClockDrift;
  }
  __name(CognitoUserSession2, "CognitoUserSession");
  var _proto = CognitoUserSession2.prototype;
  return _proto.getIdToken = /* @__PURE__ */ __name(function() {
    return this.idToken;
  }, "getIdToken"), _proto.getRefreshToken = /* @__PURE__ */ __name(function() {
    return this.refreshToken;
  }, "getRefreshToken"), _proto.getAccessToken = /* @__PURE__ */ __name(function() {
    return this.accessToken;
  }, "getAccessToken"), _proto.getClockDrift = /* @__PURE__ */ __name(function() {
    return this.clockDrift;
  }, "getClockDrift"), _proto.calculateClockDrift = /* @__PURE__ */ __name(function() {
    var now = Math.floor(/* @__PURE__ */ new Date() / 1e3), iat = Math.min(this.accessToken.getIssuedAt(), this.idToken.getIssuedAt());
    return now - iat;
  }, "calculateClockDrift"), _proto.isValid = /* @__PURE__ */ __name(function() {
    var now = Math.floor(/* @__PURE__ */ new Date() / 1e3), adjusted = now - this.clockDrift;
    return adjusted < this.accessToken.getExpiration() && adjusted < this.idToken.getExpiration();
  }, "isValid"), CognitoUserSession2;
})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], DateHelper = /* @__PURE__ */ (function() {
  function DateHelper2() {
  }
  __name(DateHelper2, "DateHelper");
  var _proto = DateHelper2.prototype;
  return _proto.getNowString = /* @__PURE__ */ __name(function() {
    var now = /* @__PURE__ */ new Date(), weekDay = weekNames[now.getUTCDay()], month = monthNames[now.getUTCMonth()], day = now.getUTCDate(), hours = now.getUTCHours();
    hours < 10 && (hours = "0" + hours);
    var minutes = now.getUTCMinutes();
    minutes < 10 && (minutes = "0" + minutes);
    var seconds = now.getUTCSeconds();
    seconds < 10 && (seconds = "0" + seconds);
    var year = now.getUTCFullYear(), dateNow = weekDay + " " + month + " " + day + " " + hours + ":" + minutes + ":" + seconds + " UTC " + year;
    return dateNow;
  }, "getNowString"), DateHelper2;
})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var CognitoUserAttribute = /* @__PURE__ */ (function() {
  function CognitoUserAttribute2(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, Name = _ref.Name, Value = _ref.Value;
    this.Name = Name || "", this.Value = Value || "";
  }
  __name(CognitoUserAttribute2, "CognitoUserAttribute");
  var _proto = CognitoUserAttribute2.prototype;
  return _proto.getValue = /* @__PURE__ */ __name(function() {
    return this.Value;
  }, "getValue"), _proto.setValue = /* @__PURE__ */ __name(function(value) {
    return this.Value = value, this;
  }, "setValue"), _proto.getName = /* @__PURE__ */ __name(function() {
    return this.Name;
  }, "getName"), _proto.setName = /* @__PURE__ */ __name(function(name) {
    return this.Name = name, this;
  }, "setName"), _proto.toString = /* @__PURE__ */ __name(function() {
    return JSON.stringify(this);
  }, "toString"), _proto.toJSON = /* @__PURE__ */ __name(function() {
    return {
      Name: this.Name,
      Value: this.Value
    };
  }, "toJSON"), CognitoUserAttribute2;
})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var dataMemory = {}, MemoryStorage = /* @__PURE__ */ (function() {
  function MemoryStorage2() {
  }
  return __name(MemoryStorage2, "MemoryStorage"), MemoryStorage2.setItem = /* @__PURE__ */ __name(function(key, value) {
    return dataMemory[key] = value, dataMemory[key];
  }, "setItem"), MemoryStorage2.getItem = /* @__PURE__ */ __name(function(key) {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : void 0;
  }, "getItem"), MemoryStorage2.removeItem = /* @__PURE__ */ __name(function(key) {
    return delete dataMemory[key];
  }, "removeItem"), MemoryStorage2.clear = /* @__PURE__ */ __name(function() {
    return dataMemory = {}, dataMemory;
  }, "clear"), MemoryStorage2;
})(), StorageHelper = /* @__PURE__ */ (function() {
  function StorageHelper2() {
    try {
      this.storageWindow = window.localStorage, this.storageWindow.setItem("aws.cognito.test-ls", 1), this.storageWindow.removeItem("aws.cognito.test-ls");
    } catch {
      this.storageWindow = MemoryStorage;
    }
  }
  __name(StorageHelper2, "StorageHelper");
  var _proto = StorageHelper2.prototype;
  return _proto.getStorage = /* @__PURE__ */ __name(function() {
    return this.storageWindow;
  }, "getStorage"), StorageHelper2;
})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var isNavigatorAvailable = typeof navigator < "u", userAgent = isNavigatorAvailable ? Platform.isReactNative ? "react-native" : navigator.userAgent : "nodejs", CognitoUser = /* @__PURE__ */ (function() {
  function CognitoUser2(data) {
    if (data == null || data.Username == null || data.Pool == null)
      throw new Error("Username and Pool information are required.");
    this.username = data.Username || "", this.pool = data.Pool, this.Session = null, this.client = data.Pool.client, this.signInUserSession = null, this.authenticationFlowType = "USER_SRP_AUTH", this.storage = data.Storage || new StorageHelper().getStorage(), this.keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId(), this.userDataKey = this.keyPrefix + "." + this.username + ".userData";
  }
  __name(CognitoUser2, "CognitoUser");
  var _proto = CognitoUser2.prototype;
  return _proto.setSignInUserSession = /* @__PURE__ */ __name(function(signInUserSession) {
    this.clearCachedUserData(), this.signInUserSession = signInUserSession, this.cacheTokens();
  }, "setSignInUserSession"), _proto.getSignInUserSession = /* @__PURE__ */ __name(function() {
    return this.signInUserSession;
  }, "getSignInUserSession"), _proto.getUsername = /* @__PURE__ */ __name(function() {
    return this.username;
  }, "getUsername"), _proto.getAuthenticationFlowType = /* @__PURE__ */ __name(function() {
    return this.authenticationFlowType;
  }, "getAuthenticationFlowType"), _proto.setAuthenticationFlowType = /* @__PURE__ */ __name(function(authenticationFlowType) {
    this.authenticationFlowType = authenticationFlowType;
  }, "setAuthenticationFlowType"), _proto.initiateAuth = /* @__PURE__ */ __name(function(authDetails, callback) {
    var _this = this, authParameters = authDetails.getAuthParameters();
    authParameters.USERNAME = this.username;
    var clientMetaData = Object.keys(authDetails.getValidationData()).length !== 0 ? authDetails.getValidationData() : authDetails.getClientMetadata(), jsonReq = {
      AuthFlow: "CUSTOM_AUTH",
      ClientId: this.pool.getClientId(),
      AuthParameters: authParameters,
      ClientMetadata: clientMetaData
    };
    this.getUserContextData() && (jsonReq.UserContextData = this.getUserContextData()), this.client.request("InitiateAuth", jsonReq, function(err, data) {
      if (err)
        return callback.onFailure(err);
      var challengeName = data.ChallengeName, challengeParameters = data.ChallengeParameters;
      return challengeName === "CUSTOM_CHALLENGE" ? (_this.Session = data.Session, callback.customChallenge(challengeParameters)) : (_this.signInUserSession = _this.getCognitoUserSession(data.AuthenticationResult), _this.cacheTokens(), callback.onSuccess(_this.signInUserSession));
    });
  }, "initiateAuth"), _proto.authenticateUser = /* @__PURE__ */ __name(function(authDetails, callback) {
    return this.authenticationFlowType === "USER_PASSWORD_AUTH" ? this.authenticateUserPlainUsernamePassword(authDetails, callback) : this.authenticationFlowType === "USER_SRP_AUTH" || this.authenticationFlowType === "CUSTOM_AUTH" ? this.authenticateUserDefaultAuth(authDetails, callback) : callback.onFailure(new Error("Authentication flow type is invalid."));
  }, "authenticateUser"), _proto.authenticateUserDefaultAuth = /* @__PURE__ */ __name(function(authDetails, callback) {
    var _this2 = this, authenticationHelper = new AuthenticationHelper(this.pool.getUserPoolName()), dateHelper = new DateHelper(), serverBValue, salt, authParameters = {};
    this.deviceKey != null && (authParameters.DEVICE_KEY = this.deviceKey), authParameters.USERNAME = this.username, authenticationHelper.getLargeAValue(function(errOnAValue, aValue) {
      errOnAValue && callback.onFailure(errOnAValue), authParameters.SRP_A = aValue.toString(16), _this2.authenticationFlowType === "CUSTOM_AUTH" && (authParameters.CHALLENGE_NAME = "SRP_A");
      var clientMetaData = Object.keys(authDetails.getValidationData()).length !== 0 ? authDetails.getValidationData() : authDetails.getClientMetadata(), jsonReq = {
        AuthFlow: _this2.authenticationFlowType,
        ClientId: _this2.pool.getClientId(),
        AuthParameters: authParameters,
        ClientMetadata: clientMetaData
      };
      _this2.getUserContextData(_this2.username) && (jsonReq.UserContextData = _this2.getUserContextData(_this2.username)), _this2.client.request("InitiateAuth", jsonReq, function(err, data) {
        if (err)
          return callback.onFailure(err);
        var challengeParameters = data.ChallengeParameters;
        _this2.username = challengeParameters.USER_ID_FOR_SRP, _this2.userDataKey = _this2.keyPrefix + "." + _this2.username + ".userData", serverBValue = new BigInteger(challengeParameters.SRP_B, 16), salt = new BigInteger(challengeParameters.SALT, 16), _this2.getCachedDeviceKeyAndPassword(), authenticationHelper.getPasswordAuthenticationKey(_this2.username, authDetails.getPassword(), serverBValue, salt, function(errOnHkdf, hkdf) {
          errOnHkdf && callback.onFailure(errOnHkdf);
          var dateNow = dateHelper.getNowString(), concatBuffer = bufferExports.Buffer.concat([bufferExports.Buffer.from(_this2.pool.getUserPoolName(), "utf8"), bufferExports.Buffer.from(_this2.username, "utf8"), bufferExports.Buffer.from(challengeParameters.SECRET_BLOCK, "base64"), bufferExports.Buffer.from(dateNow, "utf8")]), awsCryptoHash = new buildExports.Sha256(hkdf);
          awsCryptoHash.update(concatBuffer);
          var resultFromAWSCrypto = awsCryptoHash.digestSync(), signatureString = bufferExports.Buffer.from(resultFromAWSCrypto).toString("base64"), challengeResponses = {};
          challengeResponses.USERNAME = _this2.username, challengeResponses.PASSWORD_CLAIM_SECRET_BLOCK = challengeParameters.SECRET_BLOCK, challengeResponses.TIMESTAMP = dateNow, challengeResponses.PASSWORD_CLAIM_SIGNATURE = signatureString, _this2.deviceKey != null && (challengeResponses.DEVICE_KEY = _this2.deviceKey);
          var _respondToAuthChallenge = /* @__PURE__ */ __name(function(challenge, challengeCallback) {
            return _this2.client.request("RespondToAuthChallenge", challenge, function(errChallenge, dataChallenge) {
              return errChallenge && errChallenge.code === "ResourceNotFoundException" && errChallenge.message.toLowerCase().indexOf("device") !== -1 ? (challengeResponses.DEVICE_KEY = null, _this2.deviceKey = null, _this2.randomPassword = null, _this2.deviceGroupKey = null, _this2.clearCachedDeviceKeyAndPassword(), _respondToAuthChallenge(challenge, challengeCallback)) : challengeCallback(errChallenge, dataChallenge);
            });
          }, "respondToAuthChallenge"), jsonReqResp = {
            ChallengeName: "PASSWORD_VERIFIER",
            ClientId: _this2.pool.getClientId(),
            ChallengeResponses: challengeResponses,
            Session: data.Session,
            ClientMetadata: clientMetaData
          };
          _this2.getUserContextData() && (jsonReqResp.UserContextData = _this2.getUserContextData()), _respondToAuthChallenge(jsonReqResp, function(errAuthenticate, dataAuthenticate) {
            return errAuthenticate ? callback.onFailure(errAuthenticate) : _this2.authenticateUserInternal(dataAuthenticate, authenticationHelper, callback);
          });
        });
      });
    });
  }, "authenticateUserDefaultAuth"), _proto.authenticateUserPlainUsernamePassword = /* @__PURE__ */ __name(function(authDetails, callback) {
    var _this3 = this, authParameters = {};
    if (authParameters.USERNAME = this.username, authParameters.PASSWORD = authDetails.getPassword(), !authParameters.PASSWORD) {
      callback.onFailure(new Error("PASSWORD parameter is required"));
      return;
    }
    var authenticationHelper = new AuthenticationHelper(this.pool.getUserPoolName());
    this.getCachedDeviceKeyAndPassword(), this.deviceKey != null && (authParameters.DEVICE_KEY = this.deviceKey);
    var clientMetaData = Object.keys(authDetails.getValidationData()).length !== 0 ? authDetails.getValidationData() : authDetails.getClientMetadata(), jsonReq = {
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: this.pool.getClientId(),
      AuthParameters: authParameters,
      ClientMetadata: clientMetaData
    };
    this.getUserContextData(this.username) && (jsonReq.UserContextData = this.getUserContextData(this.username)), this.client.request("InitiateAuth", jsonReq, function(err, authResult) {
      return err ? callback.onFailure(err) : _this3.authenticateUserInternal(authResult, authenticationHelper, callback);
    });
  }, "authenticateUserPlainUsernamePassword"), _proto.authenticateUserInternal = /* @__PURE__ */ __name(function(dataAuthenticate, authenticationHelper, callback) {
    var _this4 = this, challengeName = dataAuthenticate.ChallengeName, challengeParameters = dataAuthenticate.ChallengeParameters;
    if (challengeName === "SMS_MFA")
      return this.Session = dataAuthenticate.Session, callback.mfaRequired(challengeName, challengeParameters);
    if (challengeName === "SELECT_MFA_TYPE")
      return this.Session = dataAuthenticate.Session, callback.selectMFAType(challengeName, challengeParameters);
    if (challengeName === "MFA_SETUP")
      return this.Session = dataAuthenticate.Session, callback.mfaSetup(challengeName, challengeParameters);
    if (challengeName === "SOFTWARE_TOKEN_MFA")
      return this.Session = dataAuthenticate.Session, callback.totpRequired(challengeName, challengeParameters);
    if (challengeName === "CUSTOM_CHALLENGE")
      return this.Session = dataAuthenticate.Session, callback.customChallenge(challengeParameters);
    if (challengeName === "NEW_PASSWORD_REQUIRED") {
      this.Session = dataAuthenticate.Session;
      var userAttributes = null, rawRequiredAttributes = null, requiredAttributes = [], userAttributesPrefix = authenticationHelper.getNewPasswordRequiredChallengeUserAttributePrefix();
      if (challengeParameters && (userAttributes = JSON.parse(dataAuthenticate.ChallengeParameters.userAttributes), rawRequiredAttributes = JSON.parse(dataAuthenticate.ChallengeParameters.requiredAttributes)), rawRequiredAttributes)
        for (var i = 0; i < rawRequiredAttributes.length; i++)
          requiredAttributes[i] = rawRequiredAttributes[i].substr(userAttributesPrefix.length);
      return callback.newPasswordRequired(userAttributes, requiredAttributes);
    }
    if (challengeName === "DEVICE_SRP_AUTH") {
      this.Session = dataAuthenticate.Session, this.getDeviceResponse(callback);
      return;
    }
    this.signInUserSession = this.getCognitoUserSession(dataAuthenticate.AuthenticationResult), this.challengeName = challengeName, this.cacheTokens();
    var newDeviceMetadata = dataAuthenticate.AuthenticationResult.NewDeviceMetadata;
    if (newDeviceMetadata == null)
      return callback.onSuccess(this.signInUserSession);
    authenticationHelper.generateHashDevice(dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceKey, function(errGenHash) {
      if (errGenHash)
        return callback.onFailure(errGenHash);
      var deviceSecretVerifierConfig = {
        Salt: bufferExports.Buffer.from(authenticationHelper.getSaltDevices(), "hex").toString("base64"),
        PasswordVerifier: bufferExports.Buffer.from(authenticationHelper.getVerifierDevices(), "hex").toString("base64")
      };
      _this4.verifierDevices = deviceSecretVerifierConfig.PasswordVerifier, _this4.deviceGroupKey = newDeviceMetadata.DeviceGroupKey, _this4.randomPassword = authenticationHelper.getRandomPassword(), _this4.client.request("ConfirmDevice", {
        DeviceKey: newDeviceMetadata.DeviceKey,
        AccessToken: _this4.signInUserSession.getAccessToken().getJwtToken(),
        DeviceSecretVerifierConfig: deviceSecretVerifierConfig,
        DeviceName: userAgent
      }, function(errConfirm, dataConfirm) {
        return errConfirm ? callback.onFailure(errConfirm) : (_this4.deviceKey = dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceKey, _this4.cacheDeviceKeyAndPassword(), dataConfirm.UserConfirmationNecessary === !0 ? callback.onSuccess(_this4.signInUserSession, dataConfirm.UserConfirmationNecessary) : callback.onSuccess(_this4.signInUserSession));
      });
    });
  }, "authenticateUserInternal"), _proto.completeNewPasswordChallenge = /* @__PURE__ */ __name(function(newPassword, requiredAttributeData, callback, clientMetadata) {
    var _this5 = this;
    if (!newPassword)
      return callback.onFailure(new Error("New password is required."));
    var authenticationHelper = new AuthenticationHelper(this.pool.getUserPoolName()), userAttributesPrefix = authenticationHelper.getNewPasswordRequiredChallengeUserAttributePrefix(), finalUserAttributes = {};
    requiredAttributeData && Object.keys(requiredAttributeData).forEach(function(key) {
      finalUserAttributes[userAttributesPrefix + key] = requiredAttributeData[key];
    }), finalUserAttributes.NEW_PASSWORD = newPassword, finalUserAttributes.USERNAME = this.username;
    var jsonReq = {
      ChallengeName: "NEW_PASSWORD_REQUIRED",
      ClientId: this.pool.getClientId(),
      ChallengeResponses: finalUserAttributes,
      Session: this.Session,
      ClientMetadata: clientMetadata
    };
    this.getUserContextData() && (jsonReq.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", jsonReq, function(errAuthenticate, dataAuthenticate) {
      return errAuthenticate ? callback.onFailure(errAuthenticate) : _this5.authenticateUserInternal(dataAuthenticate, authenticationHelper, callback);
    });
  }, "completeNewPasswordChallenge"), _proto.getDeviceResponse = /* @__PURE__ */ __name(function(callback, clientMetadata) {
    var _this6 = this, authenticationHelper = new AuthenticationHelper(this.deviceGroupKey), dateHelper = new DateHelper(), authParameters = {};
    authParameters.USERNAME = this.username, authParameters.DEVICE_KEY = this.deviceKey, authenticationHelper.getLargeAValue(function(errAValue, aValue) {
      errAValue && callback.onFailure(errAValue), authParameters.SRP_A = aValue.toString(16);
      var jsonReq = {
        ChallengeName: "DEVICE_SRP_AUTH",
        ClientId: _this6.pool.getClientId(),
        ChallengeResponses: authParameters,
        ClientMetadata: clientMetadata,
        Session: _this6.Session
      };
      _this6.getUserContextData() && (jsonReq.UserContextData = _this6.getUserContextData()), _this6.client.request("RespondToAuthChallenge", jsonReq, function(err, data) {
        if (err)
          return callback.onFailure(err);
        var challengeParameters = data.ChallengeParameters, serverBValue = new BigInteger(challengeParameters.SRP_B, 16), salt = new BigInteger(challengeParameters.SALT, 16);
        authenticationHelper.getPasswordAuthenticationKey(_this6.deviceKey, _this6.randomPassword, serverBValue, salt, function(errHkdf, hkdf) {
          if (errHkdf)
            return callback.onFailure(errHkdf);
          var dateNow = dateHelper.getNowString(), concatBuffer = bufferExports.Buffer.concat([bufferExports.Buffer.from(_this6.deviceGroupKey, "utf8"), bufferExports.Buffer.from(_this6.deviceKey, "utf8"), bufferExports.Buffer.from(challengeParameters.SECRET_BLOCK, "base64"), bufferExports.Buffer.from(dateNow, "utf8")]), awsCryptoHash = new buildExports.Sha256(hkdf);
          awsCryptoHash.update(concatBuffer);
          var resultFromAWSCrypto = awsCryptoHash.digestSync(), signatureString = bufferExports.Buffer.from(resultFromAWSCrypto).toString("base64"), challengeResponses = {};
          challengeResponses.USERNAME = _this6.username, challengeResponses.PASSWORD_CLAIM_SECRET_BLOCK = challengeParameters.SECRET_BLOCK, challengeResponses.TIMESTAMP = dateNow, challengeResponses.PASSWORD_CLAIM_SIGNATURE = signatureString, challengeResponses.DEVICE_KEY = _this6.deviceKey;
          var jsonReqResp = {
            ChallengeName: "DEVICE_PASSWORD_VERIFIER",
            ClientId: _this6.pool.getClientId(),
            ChallengeResponses: challengeResponses,
            Session: data.Session
          };
          _this6.getUserContextData() && (jsonReqResp.UserContextData = _this6.getUserContextData()), _this6.client.request("RespondToAuthChallenge", jsonReqResp, function(errAuthenticate, dataAuthenticate) {
            return errAuthenticate ? callback.onFailure(errAuthenticate) : (_this6.signInUserSession = _this6.getCognitoUserSession(dataAuthenticate.AuthenticationResult), _this6.cacheTokens(), callback.onSuccess(_this6.signInUserSession));
          });
        });
      });
    });
  }, "getDeviceResponse"), _proto.confirmRegistration = /* @__PURE__ */ __name(function(confirmationCode, forceAliasCreation, callback, clientMetadata) {
    var jsonReq = {
      ClientId: this.pool.getClientId(),
      ConfirmationCode: confirmationCode,
      Username: this.username,
      ForceAliasCreation: forceAliasCreation,
      ClientMetadata: clientMetadata
    };
    this.getUserContextData() && (jsonReq.UserContextData = this.getUserContextData()), this.client.request("ConfirmSignUp", jsonReq, function(err) {
      return err ? callback(err, null) : callback(null, "SUCCESS");
    });
  }, "confirmRegistration"), _proto.sendCustomChallengeAnswer = /* @__PURE__ */ __name(function(answerChallenge, callback, clientMetadata) {
    var _this7 = this, challengeResponses = {};
    challengeResponses.USERNAME = this.username, challengeResponses.ANSWER = answerChallenge;
    var authenticationHelper = new AuthenticationHelper(this.pool.getUserPoolName());
    this.getCachedDeviceKeyAndPassword(), this.deviceKey != null && (challengeResponses.DEVICE_KEY = this.deviceKey);
    var jsonReq = {
      ChallengeName: "CUSTOM_CHALLENGE",
      ChallengeResponses: challengeResponses,
      ClientId: this.pool.getClientId(),
      Session: this.Session,
      ClientMetadata: clientMetadata
    };
    this.getUserContextData() && (jsonReq.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", jsonReq, function(err, data) {
      return err ? callback.onFailure(err) : _this7.authenticateUserInternal(data, authenticationHelper, callback);
    });
  }, "sendCustomChallengeAnswer"), _proto.sendMFACode = /* @__PURE__ */ __name(function(confirmationCode, callback, mfaType, clientMetadata) {
    var _this8 = this, challengeResponses = {};
    challengeResponses.USERNAME = this.username, challengeResponses.SMS_MFA_CODE = confirmationCode;
    var mfaTypeSelection = mfaType || "SMS_MFA";
    mfaTypeSelection === "SOFTWARE_TOKEN_MFA" && (challengeResponses.SOFTWARE_TOKEN_MFA_CODE = confirmationCode), this.deviceKey != null && (challengeResponses.DEVICE_KEY = this.deviceKey);
    var jsonReq = {
      ChallengeName: mfaTypeSelection,
      ChallengeResponses: challengeResponses,
      ClientId: this.pool.getClientId(),
      Session: this.Session,
      ClientMetadata: clientMetadata
    };
    this.getUserContextData() && (jsonReq.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", jsonReq, function(err, dataAuthenticate) {
      if (err)
        return callback.onFailure(err);
      var challengeName = dataAuthenticate.ChallengeName;
      if (challengeName === "DEVICE_SRP_AUTH") {
        _this8.getDeviceResponse(callback);
        return;
      }
      if (_this8.signInUserSession = _this8.getCognitoUserSession(dataAuthenticate.AuthenticationResult), _this8.cacheTokens(), dataAuthenticate.AuthenticationResult.NewDeviceMetadata == null)
        return callback.onSuccess(_this8.signInUserSession);
      var authenticationHelper = new AuthenticationHelper(_this8.pool.getUserPoolName());
      authenticationHelper.generateHashDevice(dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceKey, function(errGenHash) {
        if (errGenHash)
          return callback.onFailure(errGenHash);
        var deviceSecretVerifierConfig = {
          Salt: bufferExports.Buffer.from(authenticationHelper.getSaltDevices(), "hex").toString("base64"),
          PasswordVerifier: bufferExports.Buffer.from(authenticationHelper.getVerifierDevices(), "hex").toString("base64")
        };
        _this8.verifierDevices = deviceSecretVerifierConfig.PasswordVerifier, _this8.deviceGroupKey = dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, _this8.randomPassword = authenticationHelper.getRandomPassword(), _this8.client.request("ConfirmDevice", {
          DeviceKey: dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceKey,
          AccessToken: _this8.signInUserSession.getAccessToken().getJwtToken(),
          DeviceSecretVerifierConfig: deviceSecretVerifierConfig,
          DeviceName: userAgent
        }, function(errConfirm, dataConfirm) {
          return errConfirm ? callback.onFailure(errConfirm) : (_this8.deviceKey = dataAuthenticate.AuthenticationResult.NewDeviceMetadata.DeviceKey, _this8.cacheDeviceKeyAndPassword(), dataConfirm.UserConfirmationNecessary === !0 ? callback.onSuccess(_this8.signInUserSession, dataConfirm.UserConfirmationNecessary) : callback.onSuccess(_this8.signInUserSession));
        });
      });
    });
  }, "sendMFACode"), _proto.changePassword = /* @__PURE__ */ __name(function(oldUserPassword, newUserPassword, callback, clientMetadata) {
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return callback(new Error("User is not authenticated"), null);
    this.client.request("ChangePassword", {
      PreviousPassword: oldUserPassword,
      ProposedPassword: newUserPassword,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      ClientMetadata: clientMetadata
    }, function(err) {
      return err ? callback(err, null) : callback(null, "SUCCESS");
    });
  }, "changePassword"), _proto.enableMFA = /* @__PURE__ */ __name(function(callback) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return callback(new Error("User is not authenticated"), null);
    var mfaOptions = [], mfaEnabled = {
      DeliveryMedium: "SMS",
      AttributeName: "phone_number"
    };
    mfaOptions.push(mfaEnabled), this.client.request("SetUserSettings", {
      MFAOptions: mfaOptions,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(err) {
      return err ? callback(err, null) : callback(null, "SUCCESS");
    });
  }, "enableMFA"), _proto.setUserMfaPreference = /* @__PURE__ */ __name(function(smsMfaSettings, softwareTokenMfaSettings, callback) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return callback(new Error("User is not authenticated"), null);
    this.client.request("SetUserMFAPreference", {
      SMSMfaSettings: smsMfaSettings,
      SoftwareTokenMfaSettings: softwareTokenMfaSettings,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(err) {
      return err ? callback(err, null) : callback(null, "SUCCESS");
    });
  }, "setUserMfaPreference"), _proto.disableMFA = /* @__PURE__ */ __name(function(callback) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return callback(new Error("User is not authenticated"), null);
    var mfaOptions = [];
    this.client.request("SetUserSettings", {
      MFAOptions: mfaOptions,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(err) {
      return err ? callback(err, null) : callback(null, "SUCCESS");
    });
  }, "disableMFA"), _proto.deleteUser = /* @__PURE__ */ __name(function(callback, clientMetadata) {
    var _this9 = this;
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return callback(new Error("User is not authenticated"), null);
    this.client.request("DeleteUser", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      ClientMetadata: clientMetadata
    }, function(err) {
      return err ? callback(err, null) : (_this9.clearCachedUser(), callback(null, "SUCCESS"));
    });
  }, "deleteUser"), _proto.updateAttributes = /* @__PURE__ */ __name(function(attributes, callback, clientMetadata) {
    var _this10 = this;
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return callback(new Error("User is not authenticated"), null);
    this.client.request("UpdateUserAttributes", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      UserAttributes: attributes,
      ClientMetadata: clientMetadata
    }, function(err, result) {
      return err ? callback(err, null) : _this10.getUserData(function() {
        return callback(null, "SUCCESS", result);
      }, {
        bypassCache: !0
      });
    });
  }, "updateAttributes"), _proto.getUserAttributes = /* @__PURE__ */ __name(function(callback) {
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return callback(new Error("User is not authenticated"), null);
    this.client.request("GetUser", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(err, userData) {
      if (err)
        return callback(err, null);
      for (var attributeList = [], i = 0; i < userData.UserAttributes.length; i++) {
        var attribute = {
          Name: userData.UserAttributes[i].Name,
          Value: userData.UserAttributes[i].Value
        }, userAttribute = new CognitoUserAttribute(attribute);
        attributeList.push(userAttribute);
      }
      return callback(null, attributeList);
    });
  }, "getUserAttributes"), _proto.getMFAOptions = /* @__PURE__ */ __name(function(callback) {
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return callback(new Error("User is not authenticated"), null);
    this.client.request("GetUser", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(err, userData) {
      return err ? callback(err, null) : callback(null, userData.MFAOptions);
    });
  }, "getMFAOptions"), _proto.createGetUserRequest = /* @__PURE__ */ __name(function() {
    return this.client.promisifyRequest("GetUser", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    });
  }, "createGetUserRequest"), _proto.refreshSessionIfPossible = /* @__PURE__ */ __name(function(options) {
    var _this11 = this;
    return options === void 0 && (options = {}), new Promise(function(resolve) {
      var refresh = _this11.signInUserSession.getRefreshToken();
      refresh && refresh.getToken() ? _this11.refreshSession(refresh, resolve, options.clientMetadata) : resolve();
    });
  }, "refreshSessionIfPossible"), _proto.getUserData = /* @__PURE__ */ __name(function(callback, params) {
    var _this12 = this;
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return this.clearCachedUserData(), callback(new Error("User is not authenticated"), null);
    var userData = this.getUserDataFromCache();
    if (!userData) {
      this.fetchUserData().then(function(data) {
        callback(null, data);
      }).catch(callback);
      return;
    }
    if (this.isFetchUserDataAndTokenRequired(params)) {
      this.fetchUserData().then(function(data) {
        return _this12.refreshSessionIfPossible(params).then(function() {
          return data;
        });
      }).then(function(data) {
        return callback(null, data);
      }).catch(callback);
      return;
    }
    try {
      callback(null, JSON.parse(userData));
      return;
    } catch (err) {
      this.clearCachedUserData(), callback(err, null);
      return;
    }
  }, "getUserData"), _proto.getUserDataFromCache = /* @__PURE__ */ __name(function() {
    var userData = this.storage.getItem(this.userDataKey);
    return userData;
  }, "getUserDataFromCache"), _proto.isFetchUserDataAndTokenRequired = /* @__PURE__ */ __name(function(params) {
    var _ref = params || {}, _ref$bypassCache = _ref.bypassCache, bypassCache = _ref$bypassCache === void 0 ? !1 : _ref$bypassCache;
    return bypassCache;
  }, "isFetchUserDataAndTokenRequired"), _proto.fetchUserData = /* @__PURE__ */ __name(function() {
    var _this13 = this;
    return this.createGetUserRequest().then(function(data) {
      return _this13.cacheUserData(data), data;
    });
  }, "fetchUserData"), _proto.deleteAttributes = /* @__PURE__ */ __name(function(attributeList, callback) {
    var _this14 = this;
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return callback(new Error("User is not authenticated"), null);
    this.client.request("DeleteUserAttributes", {
      UserAttributeNames: attributeList,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(err) {
      return err ? callback(err, null) : _this14.getUserData(function() {
        return callback(null, "SUCCESS");
      }, {
        bypassCache: !0
      });
    });
  }, "deleteAttributes"), _proto.resendConfirmationCode = /* @__PURE__ */ __name(function(callback, clientMetadata) {
    var jsonReq = {
      ClientId: this.pool.getClientId(),
      Username: this.username,
      ClientMetadata: clientMetadata
    };
    this.client.request("ResendConfirmationCode", jsonReq, function(err, result) {
      return err ? callback(err, null) : callback(null, result);
    });
  }, "resendConfirmationCode"), _proto.getSession = /* @__PURE__ */ __name(function(callback, options) {
    if (options === void 0 && (options = {}), this.username == null)
      return callback(new Error("Username is null. Cannot retrieve a new session"), null);
    if (this.signInUserSession != null && this.signInUserSession.isValid())
      return callback(null, this.signInUserSession);
    var keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, idTokenKey = keyPrefix + ".idToken", accessTokenKey = keyPrefix + ".accessToken", refreshTokenKey = keyPrefix + ".refreshToken", clockDriftKey = keyPrefix + ".clockDrift";
    if (this.storage.getItem(idTokenKey)) {
      var idToken = new CognitoIdToken({
        IdToken: this.storage.getItem(idTokenKey)
      }), accessToken = new CognitoAccessToken({
        AccessToken: this.storage.getItem(accessTokenKey)
      }), refreshToken = new CognitoRefreshToken({
        RefreshToken: this.storage.getItem(refreshTokenKey)
      }), clockDrift = parseInt(this.storage.getItem(clockDriftKey), 0) || 0, sessionData = {
        IdToken: idToken,
        AccessToken: accessToken,
        RefreshToken: refreshToken,
        ClockDrift: clockDrift
      }, cachedSession = new CognitoUserSession(sessionData);
      if (cachedSession.isValid())
        return this.signInUserSession = cachedSession, callback(null, this.signInUserSession);
      if (!refreshToken.getToken())
        return callback(new Error("Cannot retrieve a new session. Please authenticate."), null);
      this.refreshSession(refreshToken, callback, options.clientMetadata);
    } else
      callback(new Error("Local storage is missing an ID Token, Please authenticate"), null);
  }, "getSession"), _proto.refreshSession = /* @__PURE__ */ __name(function(refreshToken, callback, clientMetadata) {
    var _this15 = this, wrappedCallback = this.pool.wrapRefreshSessionCallback ? this.pool.wrapRefreshSessionCallback(callback) : callback, authParameters = {};
    authParameters.REFRESH_TOKEN = refreshToken.getToken();
    var keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId(), lastUserKey = keyPrefix + ".LastAuthUser";
    if (this.storage.getItem(lastUserKey)) {
      this.username = this.storage.getItem(lastUserKey);
      var deviceKeyKey = keyPrefix + "." + this.username + ".deviceKey";
      this.deviceKey = this.storage.getItem(deviceKeyKey), authParameters.DEVICE_KEY = this.deviceKey;
    }
    var jsonReq = {
      ClientId: this.pool.getClientId(),
      AuthFlow: "REFRESH_TOKEN_AUTH",
      AuthParameters: authParameters,
      ClientMetadata: clientMetadata
    };
    this.getUserContextData() && (jsonReq.UserContextData = this.getUserContextData()), this.client.requestWithRetry("InitiateAuth", jsonReq, function(err, authResult) {
      if (err)
        return err.code === "NotAuthorizedException" && _this15.clearCachedUser(), wrappedCallback(err, null);
      if (authResult) {
        var authenticationResult = authResult.AuthenticationResult;
        return Object.prototype.hasOwnProperty.call(authenticationResult, "RefreshToken") || (authenticationResult.RefreshToken = refreshToken.getToken()), _this15.signInUserSession = _this15.getCognitoUserSession(authenticationResult), _this15.cacheTokens(), wrappedCallback(null, _this15.signInUserSession);
      }
    });
  }, "refreshSession"), _proto.cacheTokens = /* @__PURE__ */ __name(function() {
    var keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId(), idTokenKey = keyPrefix + "." + this.username + ".idToken", accessTokenKey = keyPrefix + "." + this.username + ".accessToken", refreshTokenKey = keyPrefix + "." + this.username + ".refreshToken", clockDriftKey = keyPrefix + "." + this.username + ".clockDrift", lastUserKey = keyPrefix + ".LastAuthUser";
    this.storage.setItem(idTokenKey, this.signInUserSession.getIdToken().getJwtToken()), this.storage.setItem(accessTokenKey, this.signInUserSession.getAccessToken().getJwtToken()), this.storage.setItem(refreshTokenKey, this.signInUserSession.getRefreshToken().getToken()), this.storage.setItem(clockDriftKey, "" + this.signInUserSession.getClockDrift()), this.storage.setItem(lastUserKey, this.username);
  }, "cacheTokens"), _proto.cacheUserData = /* @__PURE__ */ __name(function(userData) {
    this.storage.setItem(this.userDataKey, JSON.stringify(userData));
  }, "cacheUserData"), _proto.clearCachedUserData = /* @__PURE__ */ __name(function() {
    this.storage.removeItem(this.userDataKey);
  }, "clearCachedUserData"), _proto.clearCachedUser = /* @__PURE__ */ __name(function() {
    this.clearCachedTokens(), this.clearCachedUserData();
  }, "clearCachedUser"), _proto.cacheDeviceKeyAndPassword = /* @__PURE__ */ __name(function() {
    var keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, deviceKeyKey = keyPrefix + ".deviceKey", randomPasswordKey = keyPrefix + ".randomPasswordKey", deviceGroupKeyKey = keyPrefix + ".deviceGroupKey";
    this.storage.setItem(deviceKeyKey, this.deviceKey), this.storage.setItem(randomPasswordKey, this.randomPassword), this.storage.setItem(deviceGroupKeyKey, this.deviceGroupKey);
  }, "cacheDeviceKeyAndPassword"), _proto.getCachedDeviceKeyAndPassword = /* @__PURE__ */ __name(function() {
    var keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, deviceKeyKey = keyPrefix + ".deviceKey", randomPasswordKey = keyPrefix + ".randomPasswordKey", deviceGroupKeyKey = keyPrefix + ".deviceGroupKey";
    this.storage.getItem(deviceKeyKey) && (this.deviceKey = this.storage.getItem(deviceKeyKey), this.randomPassword = this.storage.getItem(randomPasswordKey), this.deviceGroupKey = this.storage.getItem(deviceGroupKeyKey));
  }, "getCachedDeviceKeyAndPassword"), _proto.clearCachedDeviceKeyAndPassword = /* @__PURE__ */ __name(function() {
    var keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, deviceKeyKey = keyPrefix + ".deviceKey", randomPasswordKey = keyPrefix + ".randomPasswordKey", deviceGroupKeyKey = keyPrefix + ".deviceGroupKey";
    this.storage.removeItem(deviceKeyKey), this.storage.removeItem(randomPasswordKey), this.storage.removeItem(deviceGroupKeyKey);
  }, "clearCachedDeviceKeyAndPassword"), _proto.clearCachedTokens = /* @__PURE__ */ __name(function() {
    var keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId(), idTokenKey = keyPrefix + "." + this.username + ".idToken", accessTokenKey = keyPrefix + "." + this.username + ".accessToken", refreshTokenKey = keyPrefix + "." + this.username + ".refreshToken", lastUserKey = keyPrefix + ".LastAuthUser", clockDriftKey = keyPrefix + "." + this.username + ".clockDrift";
    this.storage.removeItem(idTokenKey), this.storage.removeItem(accessTokenKey), this.storage.removeItem(refreshTokenKey), this.storage.removeItem(lastUserKey), this.storage.removeItem(clockDriftKey);
  }, "clearCachedTokens"), _proto.getCognitoUserSession = /* @__PURE__ */ __name(function(authResult) {
    var idToken = new CognitoIdToken(authResult), accessToken = new CognitoAccessToken(authResult), refreshToken = new CognitoRefreshToken(authResult), sessionData = {
      IdToken: idToken,
      AccessToken: accessToken,
      RefreshToken: refreshToken
    };
    return new CognitoUserSession(sessionData);
  }, "getCognitoUserSession"), _proto.forgotPassword = /* @__PURE__ */ __name(function(callback, clientMetadata) {
    var jsonReq = {
      ClientId: this.pool.getClientId(),
      Username: this.username,
      ClientMetadata: clientMetadata
    };
    this.getUserContextData() && (jsonReq.UserContextData = this.getUserContextData()), this.client.request("ForgotPassword", jsonReq, function(err, data) {
      return err ? callback.onFailure(err) : typeof callback.inputVerificationCode == "function" ? callback.inputVerificationCode(data) : callback.onSuccess(data);
    });
  }, "forgotPassword"), _proto.confirmPassword = /* @__PURE__ */ __name(function(confirmationCode, newPassword, callback, clientMetadata) {
    var jsonReq = {
      ClientId: this.pool.getClientId(),
      Username: this.username,
      ConfirmationCode: confirmationCode,
      Password: newPassword,
      ClientMetadata: clientMetadata
    };
    this.getUserContextData() && (jsonReq.UserContextData = this.getUserContextData()), this.client.request("ConfirmForgotPassword", jsonReq, function(err) {
      return err ? callback.onFailure(err) : callback.onSuccess("SUCCESS");
    });
  }, "confirmPassword"), _proto.getAttributeVerificationCode = /* @__PURE__ */ __name(function(attributeName, callback, clientMetadata) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return callback.onFailure(new Error("User is not authenticated"));
    this.client.request("GetUserAttributeVerificationCode", {
      AttributeName: attributeName,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      ClientMetadata: clientMetadata
    }, function(err, data) {
      return err ? callback.onFailure(err) : typeof callback.inputVerificationCode == "function" ? callback.inputVerificationCode(data) : callback.onSuccess("SUCCESS");
    });
  }, "getAttributeVerificationCode"), _proto.verifyAttribute = /* @__PURE__ */ __name(function(attributeName, confirmationCode, callback) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return callback.onFailure(new Error("User is not authenticated"));
    this.client.request("VerifyUserAttribute", {
      AttributeName: attributeName,
      Code: confirmationCode,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(err) {
      return err ? callback.onFailure(err) : callback.onSuccess("SUCCESS");
    });
  }, "verifyAttribute"), _proto.getDevice = /* @__PURE__ */ __name(function(callback) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return callback.onFailure(new Error("User is not authenticated"));
    this.client.request("GetDevice", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: this.deviceKey
    }, function(err, data) {
      return err ? callback.onFailure(err) : callback.onSuccess(data);
    });
  }, "getDevice"), _proto.forgetSpecificDevice = /* @__PURE__ */ __name(function(deviceKey, callback) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return callback.onFailure(new Error("User is not authenticated"));
    this.client.request("ForgetDevice", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: deviceKey
    }, function(err) {
      return err ? callback.onFailure(err) : callback.onSuccess("SUCCESS");
    });
  }, "forgetSpecificDevice"), _proto.forgetDevice = /* @__PURE__ */ __name(function(callback) {
    var _this16 = this;
    this.forgetSpecificDevice(this.deviceKey, {
      onFailure: callback.onFailure,
      onSuccess: /* @__PURE__ */ __name(function(result) {
        return _this16.deviceKey = null, _this16.deviceGroupKey = null, _this16.randomPassword = null, _this16.clearCachedDeviceKeyAndPassword(), callback.onSuccess(result);
      }, "onSuccess")
    });
  }, "forgetDevice"), _proto.setDeviceStatusRemembered = /* @__PURE__ */ __name(function(callback) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return callback.onFailure(new Error("User is not authenticated"));
    this.client.request("UpdateDeviceStatus", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: this.deviceKey,
      DeviceRememberedStatus: "remembered"
    }, function(err) {
      return err ? callback.onFailure(err) : callback.onSuccess("SUCCESS");
    });
  }, "setDeviceStatusRemembered"), _proto.setDeviceStatusNotRemembered = /* @__PURE__ */ __name(function(callback) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return callback.onFailure(new Error("User is not authenticated"));
    this.client.request("UpdateDeviceStatus", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: this.deviceKey,
      DeviceRememberedStatus: "not_remembered"
    }, function(err) {
      return err ? callback.onFailure(err) : callback.onSuccess("SUCCESS");
    });
  }, "setDeviceStatusNotRemembered"), _proto.listDevices = /* @__PURE__ */ __name(function(limit, paginationToken, callback) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return callback.onFailure(new Error("User is not authenticated"));
    var requestParams = {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      Limit: limit
    };
    paginationToken && (requestParams.PaginationToken = paginationToken), this.client.request("ListDevices", requestParams, function(err, data) {
      return err ? callback.onFailure(err) : callback.onSuccess(data);
    });
  }, "listDevices"), _proto.globalSignOut = /* @__PURE__ */ __name(function(callback) {
    var _this17 = this;
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return callback.onFailure(new Error("User is not authenticated"));
    this.client.request("GlobalSignOut", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(err) {
      return err ? callback.onFailure(err) : (_this17.clearCachedUser(), callback.onSuccess("SUCCESS"));
    });
  }, "globalSignOut"), _proto.signOut = /* @__PURE__ */ __name(function(revokeTokenCallback) {
    var _this18 = this;
    if (!revokeTokenCallback || typeof revokeTokenCallback != "function") {
      this.cleanClientData();
      return;
    }
    this.getSession(function(error, _session) {
      if (error)
        return revokeTokenCallback(error);
      _this18.revokeTokens(function(err) {
        _this18.cleanClientData(), revokeTokenCallback(err);
      });
    });
  }, "signOut"), _proto.revokeTokens = /* @__PURE__ */ __name(function(revokeTokenCallback) {
    if (revokeTokenCallback === void 0 && (revokeTokenCallback = /* @__PURE__ */ __name(function() {
    }, "revokeTokenCallback")), typeof revokeTokenCallback != "function")
      throw new Error("Invalid revokeTokenCallback. It should be a function.");
    if (!this.signInUserSession) {
      var error = new Error("User is not authenticated");
      return revokeTokenCallback(error);
    }
    if (!this.signInUserSession.getAccessToken()) {
      var _error = new Error("No Access token available");
      return revokeTokenCallback(_error);
    }
    var refreshToken = this.signInUserSession.getRefreshToken().getToken(), accessToken = this.signInUserSession.getAccessToken();
    if (this.isSessionRevocable(accessToken) && refreshToken)
      return this.revokeToken({
        token: refreshToken,
        callback: revokeTokenCallback
      });
    revokeTokenCallback();
  }, "revokeTokens"), _proto.isSessionRevocable = /* @__PURE__ */ __name(function(token) {
    if (token && typeof token.decodePayload == "function")
      try {
        var _token$decodePayload = token.decodePayload(), origin_jti = _token$decodePayload.origin_jti;
        return !!origin_jti;
      } catch {
      }
    return !1;
  }, "isSessionRevocable"), _proto.cleanClientData = /* @__PURE__ */ __name(function() {
    this.signInUserSession = null, this.clearCachedUser();
  }, "cleanClientData"), _proto.revokeToken = /* @__PURE__ */ __name(function(_ref2) {
    var token = _ref2.token, callback = _ref2.callback;
    this.client.requestWithRetry("RevokeToken", {
      Token: token,
      ClientId: this.pool.getClientId()
    }, function(err) {
      if (err)
        return callback(err);
      callback();
    });
  }, "revokeToken"), _proto.sendMFASelectionAnswer = /* @__PURE__ */ __name(function(answerChallenge, callback) {
    var _this19 = this, challengeResponses = {};
    challengeResponses.USERNAME = this.username, challengeResponses.ANSWER = answerChallenge;
    var jsonReq = {
      ChallengeName: "SELECT_MFA_TYPE",
      ChallengeResponses: challengeResponses,
      ClientId: this.pool.getClientId(),
      Session: this.Session
    };
    this.getUserContextData() && (jsonReq.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", jsonReq, function(err, data) {
      if (err)
        return callback.onFailure(err);
      if (_this19.Session = data.Session, answerChallenge === "SMS_MFA")
        return callback.mfaRequired(data.ChallengeName, data.ChallengeParameters);
      if (answerChallenge === "SOFTWARE_TOKEN_MFA")
        return callback.totpRequired(data.ChallengeName, data.ChallengeParameters);
    });
  }, "sendMFASelectionAnswer"), _proto.getUserContextData = /* @__PURE__ */ __name(function() {
    var pool = this.pool;
    return pool.getUserContextData(this.username);
  }, "getUserContextData"), _proto.associateSoftwareToken = /* @__PURE__ */ __name(function(callback) {
    var _this20 = this;
    this.signInUserSession != null && this.signInUserSession.isValid() ? this.client.request("AssociateSoftwareToken", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(err, data) {
      return err ? callback.onFailure(err) : callback.associateSecretCode(data.SecretCode);
    }) : this.client.request("AssociateSoftwareToken", {
      Session: this.Session
    }, function(err, data) {
      return err ? callback.onFailure(err) : (_this20.Session = data.Session, callback.associateSecretCode(data.SecretCode));
    });
  }, "associateSoftwareToken"), _proto.verifySoftwareToken = /* @__PURE__ */ __name(function(totpCode, friendlyDeviceName, callback) {
    var _this21 = this;
    this.signInUserSession != null && this.signInUserSession.isValid() ? this.client.request("VerifySoftwareToken", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      UserCode: totpCode,
      FriendlyDeviceName: friendlyDeviceName
    }, function(err, data) {
      return err ? callback.onFailure(err) : callback.onSuccess(data);
    }) : this.client.request("VerifySoftwareToken", {
      Session: this.Session,
      UserCode: totpCode,
      FriendlyDeviceName: friendlyDeviceName
    }, function(err, data) {
      if (err)
        return callback.onFailure(err);
      _this21.Session = data.Session;
      var challengeResponses = {};
      challengeResponses.USERNAME = _this21.username;
      var jsonReq = {
        ChallengeName: "MFA_SETUP",
        ClientId: _this21.pool.getClientId(),
        ChallengeResponses: challengeResponses,
        Session: _this21.Session
      };
      _this21.getUserContextData() && (jsonReq.UserContextData = _this21.getUserContextData()), _this21.client.request("RespondToAuthChallenge", jsonReq, function(errRespond, dataRespond) {
        return errRespond ? callback.onFailure(errRespond) : (_this21.signInUserSession = _this21.getCognitoUserSession(dataRespond.AuthenticationResult), _this21.cacheTokens(), callback.onSuccess(_this21.signInUserSession));
      });
    });
  }, "verifySoftwareToken"), CognitoUser2;
})(), AUTH_CATEGORY = "auth";
function UserAgent() {
}
__name(UserAgent, "UserAgent");
UserAgent.prototype.userAgent = getUserAgent();
var appendToCognitoUserAgent = /* @__PURE__ */ __name(function(content) {
  content && (UserAgent.prototype.userAgent && !UserAgent.prototype.userAgent.includes(content) && (UserAgent.prototype.userAgent = UserAgent.prototype.userAgent.concat(" ", content)), (!UserAgent.prototype.userAgent || UserAgent.prototype.userAgent === "") && (UserAgent.prototype.userAgent = content));
}, "appendToCognitoUserAgent"), addAuthCategoryToCognitoUserAgent = /* @__PURE__ */ __name(function() {
  UserAgent.category = AUTH_CATEGORY;
}, "addAuthCategoryToCognitoUserAgent"), addFrameworkToCognitoUserAgent = /* @__PURE__ */ __name(function(framework) {
  UserAgent.framework = framework;
}, "addFrameworkToCognitoUserAgent"), getAmplifyUserAgent = /* @__PURE__ */ __name(function(action) {
  var uaCategoryAction = UserAgent.category ? " " + UserAgent.category : "", uaFramework = UserAgent.framework ? " framework/" + UserAgent.framework : "", userAgent2 = "" + UserAgent.prototype.userAgent + uaCategoryAction + uaFramework;
  return userAgent2;
}, "getAmplifyUserAgent");
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}
__name(_inheritsLoose, "_inheritsLoose");
function _wrapNativeSuper(t) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = /* @__PURE__ */ __name(function(t2) {
    if (t2 === null || !_isNativeFunction(t2)) return t2;
    if (typeof t2 != "function") throw new TypeError("Super expression must either be null or a function");
    if (r !== void 0) {
      if (r.has(t2)) return r.get(t2);
      r.set(t2, Wrapper);
    }
    function Wrapper() {
      return _construct(t2, arguments, _getPrototypeOf(this).constructor);
    }
    return __name(Wrapper, "Wrapper"), Wrapper.prototype = Object.create(t2.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t2);
  }, "_wrapNativeSuper"), _wrapNativeSuper(t);
}
__name(_wrapNativeSuper, "_wrapNativeSuper");
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
__name(_construct, "_construct");
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_isNativeReflectConstruct = /* @__PURE__ */ __name(function() {
    return !!t;
  }, "_isNativeReflectConstruct"))();
}
__name(_isNativeReflectConstruct, "_isNativeReflectConstruct");
function _isNativeFunction(t) {
  try {
    return Function.toString.call(t).indexOf("[native code]") !== -1;
  } catch {
    return typeof t == "function";
  }
}
__name(_isNativeFunction, "_isNativeFunction");
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}
__name(_setPrototypeOf, "_setPrototypeOf");
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}
__name(_getPrototypeOf, "_getPrototypeOf");
var CognitoError = /* @__PURE__ */ (function(_Error) {
  function CognitoError2(message, code, name, statusCode) {
    var _this;
    return _this = _Error.call(this, message) || this, _this.code = code, _this.name = name, _this.statusCode = statusCode, _this;
  }
  return __name(CognitoError2, "CognitoError"), _inheritsLoose(CognitoError2, _Error), CognitoError2;
})(/* @__PURE__ */ _wrapNativeSuper(Error)), Client = /* @__PURE__ */ (function() {
  function Client2(region, endpoint, fetchOptions) {
    this.endpoint = endpoint || "https://cognito-idp." + region + ".amazonaws.com/";
    var _ref = fetchOptions || {}, credentials = _ref.credentials;
    this.fetchOptions = credentials ? {
      credentials
    } : {};
  }
  __name(Client2, "Client");
  var _proto = Client2.prototype;
  return _proto.promisifyRequest = /* @__PURE__ */ __name(function(operation, params) {
    var _this2 = this;
    return new Promise(function(resolve, reject) {
      _this2.request(operation, params, function(err, data) {
        err ? reject(new CognitoError(err.message, err.code, err.name, err.statusCode)) : resolve(data);
      });
    });
  }, "promisifyRequest"), _proto.requestWithRetry = /* @__PURE__ */ __name(function(operation, params, callback) {
    var _this3 = this, MAX_DELAY_IN_MILLIS = 5 * 1e3;
    jitteredExponentialRetry(function(p) {
      return new Promise(function(res, rej) {
        _this3.request(operation, p, function(error, result) {
          error ? rej(error) : res(result);
        });
      });
    }, [params], MAX_DELAY_IN_MILLIS).then(function(result) {
      return callback(null, result);
    }).catch(function(error) {
      return callback(error);
    });
  }, "requestWithRetry"), _proto.request = /* @__PURE__ */ __name(function(operation, params, callback) {
    var headers = {
      "Content-Type": "application/x-amz-json-1.1",
      "X-Amz-Target": "AWSCognitoIdentityProviderService." + operation,
      "X-Amz-User-Agent": getAmplifyUserAgent(),
      "Cache-Control": "no-store"
    }, options = Object.assign({}, this.fetchOptions, {
      headers,
      method: "POST",
      mode: "cors",
      body: JSON.stringify(params)
    }), response;
    fetch(this.endpoint, options).then(function(resp) {
      return response = resp, resp;
    }, function(err) {
      throw err instanceof TypeError ? new Error("Network error") : err;
    }).then(function(resp) {
      return resp.json().catch(function() {
        return {};
      });
    }).then(function(data) {
      if (response.ok) return callback(null, data);
      var code = (data.__type || data.code).split("#").pop(), error = new Error(data.message || data.Message || null);
      return error.name = code, error.code = code, callback(error);
    }).catch(function(err) {
      if (response && response.headers && response.headers.get("x-amzn-errortype"))
        try {
          var code = response.headers.get("x-amzn-errortype").split(":")[0], error = new Error(response.status ? response.status.toString() : null);
          return error.code = code, error.name = code, error.statusCode = response.status, callback(error);
        } catch {
          return callback(err);
        }
      else err instanceof Error && err.message === "Network error" && (err.code = "NetworkError");
      return callback(err);
    });
  }, "request"), Client2;
})(), logger$3 = {
  debug: /* @__PURE__ */ __name(function() {
  }, "debug")
}, isNonRetryableError = /* @__PURE__ */ __name(function(obj) {
  var key = "nonRetryable";
  return obj && obj[key];
}, "isNonRetryableError");
function retry(functionToRetry, args, delayFn, attempt) {
  if (attempt === void 0 && (attempt = 1), typeof functionToRetry != "function")
    throw Error("functionToRetry must be a function");
  return logger$3.debug(functionToRetry.name + " attempt #" + attempt + " with args: " + JSON.stringify(args)), functionToRetry.apply(void 0, args).catch(function(err) {
    if (logger$3.debug("error on " + functionToRetry.name, err), isNonRetryableError(err))
      throw logger$3.debug(functionToRetry.name + " non retryable error", err), err;
    var retryIn = delayFn(attempt, args, err);
    if (logger$3.debug(functionToRetry.name + " retrying in " + retryIn + " ms"), retryIn !== !1)
      return new Promise(function(res) {
        return setTimeout(res, retryIn);
      }).then(function() {
        return retry(functionToRetry, args, delayFn, attempt + 1);
      });
    throw err;
  });
}
__name(retry, "retry");
function jitteredBackoff(maxDelayMs) {
  var BASE_TIME_MS = 100, JITTER_FACTOR = 100;
  return function(attempt) {
    var delay = Math.pow(2, attempt) * BASE_TIME_MS + JITTER_FACTOR * Math.random();
    return delay > maxDelayMs ? !1 : delay;
  };
}
__name(jitteredBackoff, "jitteredBackoff");
function jitteredExponentialRetry(functionToRetry, args, maxDelayMs) {
  return retry(functionToRetry, args, jitteredBackoff(maxDelayMs));
}
__name(jitteredExponentialRetry, "jitteredExponentialRetry");
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var USER_POOL_ID_MAX_LENGTH = 55, CognitoUserPool = /* @__PURE__ */ (function() {
  function CognitoUserPool2(data, wrapRefreshSessionCallback) {
    var _ref = data || {}, UserPoolId = _ref.UserPoolId, ClientId = _ref.ClientId, endpoint = _ref.endpoint, fetchOptions = _ref.fetchOptions, AdvancedSecurityDataCollectionFlag = _ref.AdvancedSecurityDataCollectionFlag;
    if (!UserPoolId || !ClientId)
      throw new Error("Both UserPoolId and ClientId are required.");
    if (UserPoolId.length > USER_POOL_ID_MAX_LENGTH || !/^[\w-]+_[0-9a-zA-Z]+$/.test(UserPoolId))
      throw new Error("Invalid UserPoolId format.");
    var region = UserPoolId.split("_")[0];
    this.userPoolId = UserPoolId, this.clientId = ClientId, this.client = new Client(region, endpoint, fetchOptions), this.advancedSecurityDataCollectionFlag = AdvancedSecurityDataCollectionFlag !== !1, this.storage = data.Storage || new StorageHelper().getStorage(), wrapRefreshSessionCallback && (this.wrapRefreshSessionCallback = wrapRefreshSessionCallback);
  }
  __name(CognitoUserPool2, "CognitoUserPool");
  var _proto = CognitoUserPool2.prototype;
  return _proto.getUserPoolId = /* @__PURE__ */ __name(function() {
    return this.userPoolId;
  }, "getUserPoolId"), _proto.getUserPoolName = /* @__PURE__ */ __name(function() {
    return this.getUserPoolId().split("_")[1];
  }, "getUserPoolName"), _proto.getClientId = /* @__PURE__ */ __name(function() {
    return this.clientId;
  }, "getClientId"), _proto.signUp = /* @__PURE__ */ __name(function(username, password, userAttributes, validationData, callback, clientMetadata) {
    var _this = this, jsonReq = {
      ClientId: this.clientId,
      Username: username,
      Password: password,
      UserAttributes: userAttributes,
      ValidationData: validationData,
      ClientMetadata: clientMetadata
    };
    this.getUserContextData(username) && (jsonReq.UserContextData = this.getUserContextData(username)), this.client.request("SignUp", jsonReq, function(err, data) {
      if (err)
        return callback(err, null);
      var cognitoUser = {
        Username: username,
        Pool: _this,
        Storage: _this.storage
      }, returnData = {
        user: new CognitoUser(cognitoUser),
        userConfirmed: data.UserConfirmed,
        userSub: data.UserSub,
        codeDeliveryDetails: data.CodeDeliveryDetails
      };
      return callback(null, returnData);
    });
  }, "signUp"), _proto.getCurrentUser = /* @__PURE__ */ __name(function() {
    var lastUserKey = "CognitoIdentityServiceProvider." + this.clientId + ".LastAuthUser", lastAuthUser = this.storage.getItem(lastUserKey);
    if (lastAuthUser) {
      var cognitoUser = {
        Username: lastAuthUser,
        Pool: this,
        Storage: this.storage
      };
      return new CognitoUser(cognitoUser);
    }
    return null;
  }, "getCurrentUser"), _proto.getUserContextData = /* @__PURE__ */ __name(function(username) {
    if (!(typeof AmazonCognitoAdvancedSecurityData > "u")) {
      var amazonCognitoAdvancedSecurityDataConst = AmazonCognitoAdvancedSecurityData;
      if (this.advancedSecurityDataCollectionFlag) {
        var advancedSecurityData = amazonCognitoAdvancedSecurityDataConst.getData(username, this.userPoolId, this.clientId);
        if (advancedSecurityData) {
          var userContextData = {
            EncodedData: advancedSecurityData
          };
          return userContextData;
        }
      }
      return {};
    }
  }, "getUserContextData"), CognitoUserPool2;
})(), js_cookie = { exports: {} };
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
var hasRequiredJs_cookie;
function requireJs_cookie() {
  return hasRequiredJs_cookie || (hasRequiredJs_cookie = 1, (function(module, exports$1) {
    (function(factory) {
      var registeredInModuleLoader;
      if (module.exports = factory(), registeredInModuleLoader = !0, !registeredInModuleLoader) {
        var OldCookies = window.Cookies, api = window.Cookies = factory();
        api.noConflict = function() {
          return window.Cookies = OldCookies, api;
        };
      }
    })(function() {
      function extend() {
        for (var i = 0, result = {}; i < arguments.length; i++) {
          var attributes = arguments[i];
          for (var key in attributes)
            result[key] = attributes[key];
        }
        return result;
      }
      __name(extend, "extend");
      function decode2(s) {
        return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      __name(decode2, "decode");
      function init(converter) {
        function api() {
        }
        __name(api, "api");
        function set(key, value, attributes) {
          if (!(typeof document > "u")) {
            attributes = extend({
              path: "/"
            }, api.defaults, attributes), typeof attributes.expires == "number" && (attributes.expires = new Date(/* @__PURE__ */ new Date() * 1 + attributes.expires * 864e5)), attributes.expires = attributes.expires ? attributes.expires.toUTCString() : "";
            try {
              var result = JSON.stringify(value);
              /^[\{\[]/.test(result) && (value = result);
            } catch {
            }
            value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
            var stringifiedAttributes = "";
            for (var attributeName in attributes)
              attributes[attributeName] && (stringifiedAttributes += "; " + attributeName, attributes[attributeName] !== !0 && (stringifiedAttributes += "=" + attributes[attributeName].split(";")[0]));
            return document.cookie = key + "=" + value + stringifiedAttributes;
          }
        }
        __name(set, "set");
        function get(key, json) {
          if (!(typeof document > "u")) {
            for (var jar = {}, cookies = document.cookie ? document.cookie.split("; ") : [], i = 0; i < cookies.length; i++) {
              var parts = cookies[i].split("="), cookie2 = parts.slice(1).join("=");
              !json && cookie2.charAt(0) === '"' && (cookie2 = cookie2.slice(1, -1));
              try {
                var name = decode2(parts[0]);
                if (cookie2 = (converter.read || converter)(cookie2, name) || decode2(cookie2), json)
                  try {
                    cookie2 = JSON.parse(cookie2);
                  } catch {
                  }
                if (jar[name] = cookie2, key === name)
                  break;
              } catch {
              }
            }
            return key ? jar[key] : jar;
          }
        }
        return __name(get, "get"), api.set = set, api.get = function(key) {
          return get(
            key,
            !1
            /* read as raw */
          );
        }, api.getJSON = function(key) {
          return get(
            key,
            !0
            /* read as json */
          );
        }, api.remove = function(key, attributes) {
          set(key, "", extend(attributes, {
            expires: -1
          }));
        }, api.defaults = {}, api.withConverter = init, api;
      }
      return __name(init, "init"), init(function() {
      });
    });
  })(js_cookie)), js_cookie.exports;
}
__name(requireJs_cookie, "requireJs_cookie");
var js_cookieExports = requireJs_cookie(), CookieStorage = /* @__PURE__ */ (function() {
  function CookieStorage2(data) {
    if (data === void 0 && (data = {}), data.domain && (this.domain = data.domain), data.path ? this.path = data.path : this.path = "/", Object.prototype.hasOwnProperty.call(data, "expires") ? this.expires = data.expires : this.expires = 365, Object.prototype.hasOwnProperty.call(data, "secure") ? this.secure = data.secure : this.secure = !0, Object.prototype.hasOwnProperty.call(data, "sameSite")) {
      if (!["strict", "lax", "none"].includes(data.sameSite))
        throw new Error('The sameSite value of cookieStorage must be "lax", "strict" or "none".');
      if (data.sameSite === "none" && !this.secure)
        throw new Error("sameSite = None requires the Secure attribute in latest browser versions.");
      this.sameSite = data.sameSite;
    } else
      this.sameSite = null;
  }
  __name(CookieStorage2, "CookieStorage");
  var _proto = CookieStorage2.prototype;
  return _proto.setItem = /* @__PURE__ */ __name(function(key, value) {
    var options = {
      path: this.path,
      expires: this.expires,
      domain: this.domain,
      secure: this.secure
    };
    return this.sameSite && (options.sameSite = this.sameSite), js_cookieExports.set(key, value, options), js_cookieExports.get(key);
  }, "setItem"), _proto.getItem = /* @__PURE__ */ __name(function(key) {
    return js_cookieExports.get(key);
  }, "getItem"), _proto.removeItem = /* @__PURE__ */ __name(function(key) {
    var options = {
      path: this.path,
      expires: this.expires,
      domain: this.domain,
      secure: this.secure
    };
    return this.sameSite && (options.sameSite = this.sameSite), js_cookieExports.remove(key, options);
  }, "removeItem"), _proto.clear = /* @__PURE__ */ __name(function() {
    for (var cookies = js_cookieExports.get(), numKeys = Object.keys(cookies).length, index = 0; index < numKeys; ++index)
      this.removeItem(Object.keys(cookies)[index]);
    return {};
  }, "clear"), CookieStorage2;
})(), url = {}, punycode$1 = { exports: {} };
/*! https://mths.be/punycode v1.3.2 by @mathias */
var punycode = punycode$1.exports, hasRequiredPunycode;
function requirePunycode() {
  return hasRequiredPunycode || (hasRequiredPunycode = 1, (function(module, exports$1) {
    (function(root) {
      var freeExports = exports$1 && !exports$1.nodeType && exports$1, freeModule = module && !module.nodeType && module, freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal;
      (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) && (root = freeGlobal);
      var punycode2, maxInt = 2147483647, base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = "-", regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, errors = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      }, baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode, key;
      function error(type) {
        throw RangeError(errors[type]);
      }
      __name(error, "error");
      function map(array, fn) {
        for (var length = array.length, result = []; length--; )
          result[length] = fn(array[length]);
        return result;
      }
      __name(map, "map");
      function mapDomain(string, fn) {
        var parts = string.split("@"), result = "";
        parts.length > 1 && (result = parts[0] + "@", string = parts[1]), string = string.replace(regexSeparators, ".");
        var labels = string.split("."), encoded = map(labels, fn).join(".");
        return result + encoded;
      }
      __name(mapDomain, "mapDomain");
      function ucs2decode(string) {
        for (var output = [], counter = 0, length = string.length, value, extra; counter < length; )
          value = string.charCodeAt(counter++), value >= 55296 && value <= 56319 && counter < length ? (extra = string.charCodeAt(counter++), (extra & 64512) == 56320 ? output.push(((value & 1023) << 10) + (extra & 1023) + 65536) : (output.push(value), counter--)) : output.push(value);
        return output;
      }
      __name(ucs2decode, "ucs2decode");
      function ucs2encode(array) {
        return map(array, function(value) {
          var output = "";
          return value > 65535 && (value -= 65536, output += stringFromCharCode(value >>> 10 & 1023 | 55296), value = 56320 | value & 1023), output += stringFromCharCode(value), output;
        }).join("");
      }
      __name(ucs2encode, "ucs2encode");
      function basicToDigit(codePoint) {
        return codePoint - 48 < 10 ? codePoint - 22 : codePoint - 65 < 26 ? codePoint - 65 : codePoint - 97 < 26 ? codePoint - 97 : base;
      }
      __name(basicToDigit, "basicToDigit");
      function digitToBasic(digit, flag) {
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
      }
      __name(digitToBasic, "digitToBasic");
      function adapt(delta, numPoints, firstTime) {
        var k = 0;
        for (delta = firstTime ? floor(delta / damp) : delta >> 1, delta += floor(delta / numPoints); delta > baseMinusTMin * tMax >> 1; k += base)
          delta = floor(delta / baseMinusTMin);
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
      }
      __name(adapt, "adapt");
      function decode2(input) {
        var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic, j, index, oldi, w, k, digit, t, baseMinusT;
        for (basic = input.lastIndexOf(delimiter), basic < 0 && (basic = 0), j = 0; j < basic; ++j)
          input.charCodeAt(j) >= 128 && error("not-basic"), output.push(input.charCodeAt(j));
        for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
          for (oldi = i, w = 1, k = base; index >= inputLength && error("invalid-input"), digit = basicToDigit(input.charCodeAt(index++)), (digit >= base || digit > floor((maxInt - i) / w)) && error("overflow"), i += digit * w, t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias, !(digit < t); k += base)
            baseMinusT = base - t, w > floor(maxInt / baseMinusT) && error("overflow"), w *= baseMinusT;
          out = output.length + 1, bias = adapt(i - oldi, out, oldi == 0), floor(i / out) > maxInt - n && error("overflow"), n += floor(i / out), i %= out, output.splice(i++, 0, n);
        }
        return ucs2encode(output);
      }
      __name(decode2, "decode");
      function encode2(input) {
        var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], inputLength, handledCPCountPlusOne, baseMinusT, qMinusT;
        for (input = ucs2decode(input), inputLength = input.length, n = initialN, delta = 0, bias = initialBias, j = 0; j < inputLength; ++j)
          currentValue = input[j], currentValue < 128 && output.push(stringFromCharCode(currentValue));
        for (handledCPCount = basicLength = output.length, basicLength && output.push(delimiter); handledCPCount < inputLength; ) {
          for (m = maxInt, j = 0; j < inputLength; ++j)
            currentValue = input[j], currentValue >= n && currentValue < m && (m = currentValue);
          for (handledCPCountPlusOne = handledCPCount + 1, m - n > floor((maxInt - delta) / handledCPCountPlusOne) && error("overflow"), delta += (m - n) * handledCPCountPlusOne, n = m, j = 0; j < inputLength; ++j)
            if (currentValue = input[j], currentValue < n && ++delta > maxInt && error("overflow"), currentValue == n) {
              for (q = delta, k = base; t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias, !(q < t); k += base)
                qMinusT = q - t, baseMinusT = base - t, output.push(
                  stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
                ), q = floor(qMinusT / baseMinusT);
              output.push(stringFromCharCode(digitToBasic(q, 0))), bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength), delta = 0, ++handledCPCount;
            }
          ++delta, ++n;
        }
        return output.join("");
      }
      __name(encode2, "encode");
      function toUnicode(input) {
        return mapDomain(input, function(string) {
          return regexPunycode.test(string) ? decode2(string.slice(4).toLowerCase()) : string;
        });
      }
      __name(toUnicode, "toUnicode");
      function toASCII(input) {
        return mapDomain(input, function(string) {
          return regexNonASCII.test(string) ? "xn--" + encode2(string) : string;
        });
      }
      if (__name(toASCII, "toASCII"), punycode2 = {
        /**
         * A string representing the current Punycode.js version number.
         * @memberOf punycode
         * @type String
         */
        version: "1.3.2",
        /**
         * An object of methods to convert from JavaScript's internal character
         * representation (UCS-2) to Unicode code points, and back.
         * @see <https://mathiasbynens.be/notes/javascript-encoding>
         * @memberOf punycode
         * @type Object
         */
        ucs2: {
          decode: ucs2decode,
          encode: ucs2encode
        },
        decode: decode2,
        encode: encode2,
        toASCII,
        toUnicode
      }, freeExports && freeModule)
        if (module.exports == freeExports)
          freeModule.exports = punycode2;
        else
          for (key in punycode2)
            punycode2.hasOwnProperty(key) && (freeExports[key] = punycode2[key]);
      else
        root.punycode = punycode2;
    })(punycode);
  })(punycode$1, punycode$1.exports)), punycode$1.exports;
}
__name(requirePunycode, "requirePunycode");
var util, hasRequiredUtil;
function requireUtil() {
  return hasRequiredUtil || (hasRequiredUtil = 1, util = {
    isString: /* @__PURE__ */ __name(function(arg) {
      return typeof arg == "string";
    }, "isString"),
    isObject: /* @__PURE__ */ __name(function(arg) {
      return typeof arg == "object" && arg !== null;
    }, "isObject"),
    isNull: /* @__PURE__ */ __name(function(arg) {
      return arg === null;
    }, "isNull"),
    isNullOrUndefined: /* @__PURE__ */ __name(function(arg) {
      return arg == null;
    }, "isNullOrUndefined")
  }), util;
}
__name(requireUtil, "requireUtil");
var querystring = {}, decode, hasRequiredDecode;
function requireDecode() {
  if (hasRequiredDecode) return decode;
  hasRequiredDecode = 1;
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  return __name(hasOwnProperty, "hasOwnProperty"), decode = /* @__PURE__ */ __name(function(qs, sep, eq, options) {
    sep = sep || "&", eq = eq || "=";
    var obj = {};
    if (typeof qs != "string" || qs.length === 0)
      return obj;
    var regexp = /\+/g;
    qs = qs.split(sep);
    var maxKeys = 1e3;
    options && typeof options.maxKeys == "number" && (maxKeys = options.maxKeys);
    var len = qs.length;
    maxKeys > 0 && len > maxKeys && (len = maxKeys);
    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, "%20"), idx = x.indexOf(eq), kstr, vstr, k, v;
      idx >= 0 ? (kstr = x.substr(0, idx), vstr = x.substr(idx + 1)) : (kstr = x, vstr = ""), k = decodeURIComponent(kstr), v = decodeURIComponent(vstr), hasOwnProperty(obj, k) ? Array.isArray(obj[k]) ? obj[k].push(v) : obj[k] = [obj[k], v] : obj[k] = v;
    }
    return obj;
  }, "decode"), decode;
}
__name(requireDecode, "requireDecode");
var encode, hasRequiredEncode;
function requireEncode() {
  if (hasRequiredEncode) return encode;
  hasRequiredEncode = 1;
  var stringifyPrimitive = /* @__PURE__ */ __name(function(v) {
    switch (typeof v) {
      case "string":
        return v;
      case "boolean":
        return v ? "true" : "false";
      case "number":
        return isFinite(v) ? v : "";
      default:
        return "";
    }
  }, "stringifyPrimitive");
  return encode = /* @__PURE__ */ __name(function(obj, sep, eq, name) {
    return sep = sep || "&", eq = eq || "=", obj === null && (obj = void 0), typeof obj == "object" ? Object.keys(obj).map(function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      return Array.isArray(obj[k]) ? obj[k].map(function(v) {
        return ks + encodeURIComponent(stringifyPrimitive(v));
      }).join(sep) : ks + encodeURIComponent(stringifyPrimitive(obj[k]));
    }).join(sep) : name ? encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj)) : "";
  }, "encode"), encode;
}
__name(requireEncode, "requireEncode");
var hasRequiredQuerystring;
function requireQuerystring() {
  return hasRequiredQuerystring || (hasRequiredQuerystring = 1, querystring.decode = querystring.parse = requireDecode(), querystring.encode = querystring.stringify = requireEncode()), querystring;
}
__name(requireQuerystring, "requireQuerystring");
var hasRequiredUrl;
function requireUrl() {
  if (hasRequiredUrl) return url;
  hasRequiredUrl = 1;
  var punycode2 = requirePunycode(), util2 = requireUtil();
  url.parse = urlParse, url.resolve = urlResolve, url.resolveObject = urlResolveObject, url.format = urlFormat, url.Url = Url;
  function Url() {
    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
  }
  __name(Url, "Url");
  var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, delims = ["<", ">", '"', "`", " ", "\r", `
`, "	"], unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims), autoEscape = ["'"].concat(unwise), nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape), hostEndingChars = ["/", "?", "#"], hostnameMaxLen = 255, hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, unsafeProtocol = {
    javascript: !0,
    "javascript:": !0
  }, hostlessProtocol = {
    javascript: !0,
    "javascript:": !0
  }, slashedProtocol = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0
  }, querystring2 = requireQuerystring();
  function urlParse(url2, parseQueryString, slashesDenoteHost) {
    if (url2 && util2.isObject(url2) && url2 instanceof Url) return url2;
    var u = new Url();
    return u.parse(url2, parseQueryString, slashesDenoteHost), u;
  }
  __name(urlParse, "urlParse"), Url.prototype.parse = function(url2, parseQueryString, slashesDenoteHost) {
    if (!util2.isString(url2))
      throw new TypeError("Parameter 'url' must be a string, not " + typeof url2);
    var queryIndex = url2.indexOf("?"), splitter = queryIndex !== -1 && queryIndex < url2.indexOf("#") ? "?" : "#", uSplit = url2.split(splitter), slashRegex = /\\/g;
    uSplit[0] = uSplit[0].replace(slashRegex, "/"), url2 = uSplit.join(splitter);
    var rest = url2;
    if (rest = rest.trim(), !slashesDenoteHost && url2.split("#").length === 1) {
      var simplePath = simplePathPattern.exec(rest);
      if (simplePath)
        return this.path = rest, this.href = rest, this.pathname = simplePath[1], simplePath[2] ? (this.search = simplePath[2], parseQueryString ? this.query = querystring2.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : parseQueryString && (this.search = "", this.query = {}), this;
    }
    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      var lowerProto = proto.toLowerCase();
      this.protocol = lowerProto, rest = rest.substr(proto.length);
    }
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var slashes = rest.substr(0, 2) === "//";
      slashes && !(proto && hostlessProtocol[proto]) && (rest = rest.substr(2), this.slashes = !0);
    }
    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
      for (var hostEnd = -1, i = 0; i < hostEndingChars.length; i++) {
        var hec = rest.indexOf(hostEndingChars[i]);
        hec !== -1 && (hostEnd === -1 || hec < hostEnd) && (hostEnd = hec);
      }
      var auth, atSign;
      hostEnd === -1 ? atSign = rest.lastIndexOf("@") : atSign = rest.lastIndexOf("@", hostEnd), atSign !== -1 && (auth = rest.slice(0, atSign), rest = rest.slice(atSign + 1), this.auth = decodeURIComponent(auth)), hostEnd = -1;
      for (var i = 0; i < nonHostChars.length; i++) {
        var hec = rest.indexOf(nonHostChars[i]);
        hec !== -1 && (hostEnd === -1 || hec < hostEnd) && (hostEnd = hec);
      }
      hostEnd === -1 && (hostEnd = rest.length), this.host = rest.slice(0, hostEnd), rest = rest.slice(hostEnd), this.parseHost(), this.hostname = this.hostname || "";
      var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!ipv6Hostname)
        for (var hostparts = this.hostname.split(/\./), i = 0, l = hostparts.length; i < l; i++) {
          var part = hostparts[i];
          if (part && !part.match(hostnamePartPattern)) {
            for (var newpart = "", j = 0, k = part.length; j < k; j++)
              part.charCodeAt(j) > 127 ? newpart += "x" : newpart += part[j];
            if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i), notHost = hostparts.slice(i + 1), bit = part.match(hostnamePartStart);
              bit && (validParts.push(bit[1]), notHost.unshift(bit[2])), notHost.length && (rest = "/" + notHost.join(".") + rest), this.hostname = validParts.join(".");
              break;
            }
          }
        }
      this.hostname.length > hostnameMaxLen ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), ipv6Hostname || (this.hostname = punycode2.toASCII(this.hostname));
      var p = this.port ? ":" + this.port : "", h = this.hostname || "";
      this.host = h + p, this.href += this.host, ipv6Hostname && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), rest[0] !== "/" && (rest = "/" + rest));
    }
    if (!unsafeProtocol[lowerProto])
      for (var i = 0, l = autoEscape.length; i < l; i++) {
        var ae = autoEscape[i];
        if (rest.indexOf(ae) !== -1) {
          var esc = encodeURIComponent(ae);
          esc === ae && (esc = escape(ae)), rest = rest.split(ae).join(esc);
        }
      }
    var hash = rest.indexOf("#");
    hash !== -1 && (this.hash = rest.substr(hash), rest = rest.slice(0, hash));
    var qm = rest.indexOf("?");
    if (qm !== -1 ? (this.search = rest.substr(qm), this.query = rest.substr(qm + 1), parseQueryString && (this.query = querystring2.parse(this.query)), rest = rest.slice(0, qm)) : parseQueryString && (this.search = "", this.query = {}), rest && (this.pathname = rest), slashedProtocol[lowerProto] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
      var p = this.pathname || "", s = this.search || "";
      this.path = p + s;
    }
    return this.href = this.format(), this;
  };
  function urlFormat(obj) {
    return util2.isString(obj) && (obj = urlParse(obj)), obj instanceof Url ? obj.format() : Url.prototype.format.call(obj);
  }
  __name(urlFormat, "urlFormat"), Url.prototype.format = function() {
    var auth = this.auth || "";
    auth && (auth = encodeURIComponent(auth), auth = auth.replace(/%3A/i, ":"), auth += "@");
    var protocol = this.protocol || "", pathname = this.pathname || "", hash = this.hash || "", host = !1, query = "";
    this.host ? host = auth + this.host : this.hostname && (host = auth + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (host += ":" + this.port)), this.query && util2.isObject(this.query) && Object.keys(this.query).length && (query = querystring2.stringify(this.query));
    var search = this.search || query && "?" + query || "";
    return protocol && protocol.substr(-1) !== ":" && (protocol += ":"), this.slashes || (!protocol || slashedProtocol[protocol]) && host !== !1 ? (host = "//" + (host || ""), pathname && pathname.charAt(0) !== "/" && (pathname = "/" + pathname)) : host || (host = ""), hash && hash.charAt(0) !== "#" && (hash = "#" + hash), search && search.charAt(0) !== "?" && (search = "?" + search), pathname = pathname.replace(/[?#]/g, function(match) {
      return encodeURIComponent(match);
    }), search = search.replace("#", "%23"), protocol + host + pathname + search + hash;
  };
  function urlResolve(source, relative) {
    return urlParse(source, !1, !0).resolve(relative);
  }
  __name(urlResolve, "urlResolve"), Url.prototype.resolve = function(relative) {
    return this.resolveObject(urlParse(relative, !1, !0)).format();
  };
  function urlResolveObject(source, relative) {
    return source ? urlParse(source, !1, !0).resolveObject(relative) : relative;
  }
  return __name(urlResolveObject, "urlResolveObject"), Url.prototype.resolveObject = function(relative) {
    if (util2.isString(relative)) {
      var rel = new Url();
      rel.parse(relative, !1, !0), relative = rel;
    }
    for (var result = new Url(), tkeys = Object.keys(this), tk = 0; tk < tkeys.length; tk++) {
      var tkey = tkeys[tk];
      result[tkey] = this[tkey];
    }
    if (result.hash = relative.hash, relative.href === "")
      return result.href = result.format(), result;
    if (relative.slashes && !relative.protocol) {
      for (var rkeys = Object.keys(relative), rk = 0; rk < rkeys.length; rk++) {
        var rkey = rkeys[rk];
        rkey !== "protocol" && (result[rkey] = relative[rkey]);
      }
      return slashedProtocol[result.protocol] && result.hostname && !result.pathname && (result.path = result.pathname = "/"), result.href = result.format(), result;
    }
    if (relative.protocol && relative.protocol !== result.protocol) {
      if (!slashedProtocol[relative.protocol]) {
        for (var keys = Object.keys(relative), v = 0; v < keys.length; v++) {
          var k = keys[v];
          result[k] = relative[k];
        }
        return result.href = result.format(), result;
      }
      if (result.protocol = relative.protocol, !relative.host && !hostlessProtocol[relative.protocol]) {
        for (var relPath = (relative.pathname || "").split("/"); relPath.length && !(relative.host = relPath.shift()); ) ;
        relative.host || (relative.host = ""), relative.hostname || (relative.hostname = ""), relPath[0] !== "" && relPath.unshift(""), relPath.length < 2 && relPath.unshift(""), result.pathname = relPath.join("/");
      } else
        result.pathname = relative.pathname;
      if (result.search = relative.search, result.query = relative.query, result.host = relative.host || "", result.auth = relative.auth, result.hostname = relative.hostname || relative.host, result.port = relative.port, result.pathname || result.search) {
        var p = result.pathname || "", s = result.search || "";
        result.path = p + s;
      }
      return result.slashes = result.slashes || relative.slashes, result.href = result.format(), result;
    }
    var isSourceAbs = result.pathname && result.pathname.charAt(0) === "/", isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === "/", mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split("/") || [], relPath = relative.pathname && relative.pathname.split("/") || [], psychotic = result.protocol && !slashedProtocol[result.protocol];
    if (psychotic && (result.hostname = "", result.port = null, result.host && (srcPath[0] === "" ? srcPath[0] = result.host : srcPath.unshift(result.host)), result.host = "", relative.protocol && (relative.hostname = null, relative.port = null, relative.host && (relPath[0] === "" ? relPath[0] = relative.host : relPath.unshift(relative.host)), relative.host = null), mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "")), isRelAbs)
      result.host = relative.host || relative.host === "" ? relative.host : result.host, result.hostname = relative.hostname || relative.hostname === "" ? relative.hostname : result.hostname, result.search = relative.search, result.query = relative.query, srcPath = relPath;
    else if (relPath.length)
      srcPath || (srcPath = []), srcPath.pop(), srcPath = srcPath.concat(relPath), result.search = relative.search, result.query = relative.query;
    else if (!util2.isNullOrUndefined(relative.search)) {
      if (psychotic) {
        result.hostname = result.host = srcPath.shift();
        var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : !1;
        authInHost && (result.auth = authInHost.shift(), result.host = result.hostname = authInHost.shift());
      }
      return result.search = relative.search, result.query = relative.query, (!util2.isNull(result.pathname) || !util2.isNull(result.search)) && (result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "")), result.href = result.format(), result;
    }
    if (!srcPath.length)
      return result.pathname = null, result.search ? result.path = "/" + result.search : result.path = null, result.href = result.format(), result;
    for (var last = srcPath.slice(-1)[0], hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === "." || last === "..") || last === "", up = 0, i = srcPath.length; i >= 0; i--)
      last = srcPath[i], last === "." ? srcPath.splice(i, 1) : last === ".." ? (srcPath.splice(i, 1), up++) : up && (srcPath.splice(i, 1), up--);
    if (!mustEndAbs && !removeAllDots)
      for (; up--; up)
        srcPath.unshift("..");
    mustEndAbs && srcPath[0] !== "" && (!srcPath[0] || srcPath[0].charAt(0) !== "/") && srcPath.unshift(""), hasTrailingSlash && srcPath.join("/").substr(-1) !== "/" && srcPath.push("");
    var isAbsolute = srcPath[0] === "" || srcPath[0] && srcPath[0].charAt(0) === "/";
    if (psychotic) {
      result.hostname = result.host = isAbsolute ? "" : srcPath.length ? srcPath.shift() : "";
      var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : !1;
      authInHost && (result.auth = authInHost.shift(), result.host = result.hostname = authInHost.shift());
    }
    return mustEndAbs = mustEndAbs || result.host && srcPath.length, mustEndAbs && !isAbsolute && srcPath.unshift(""), srcPath.length ? result.pathname = srcPath.join("/") : (result.pathname = null, result.path = null), (!util2.isNull(result.pathname) || !util2.isNull(result.search)) && (result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "")), result.auth = relative.auth || result.auth, result.slashes = result.slashes || relative.slashes, result.href = result.format(), result;
  }, Url.prototype.parseHost = function() {
    var host = this.host, port = portPattern.exec(host);
    port && (port = port[0], port !== ":" && (this.port = port.substr(1)), host = host.substr(0, host.length - port.length)), host && (this.hostname = host);
  }, url;
}
__name(requireUrl, "requireUrl");
var urlExports = requireUrl(), SELF = "_self", launchUri = /* @__PURE__ */ __name(function(url2) {
  var windowProxy = window.open(url2, SELF);
  return windowProxy ? Promise.resolve(windowProxy) : Promise.reject();
}, "launchUri"), setState = /* @__PURE__ */ __name(function(state) {
  window.sessionStorage.setItem("oauth_state", state);
}, "setState"), getState = /* @__PURE__ */ __name(function() {
  var oauth_state = window.sessionStorage.getItem("oauth_state");
  return window.sessionStorage.removeItem("oauth_state"), oauth_state;
}, "getState"), setPKCE = /* @__PURE__ */ __name(function(private_key) {
  window.sessionStorage.setItem("ouath_pkce_key", private_key);
}, "setPKCE"), getPKCE = /* @__PURE__ */ __name(function() {
  var ouath_pkce_key = window.sessionStorage.getItem("ouath_pkce_key");
  return window.sessionStorage.removeItem("ouath_pkce_key"), ouath_pkce_key;
}, "getPKCE"), AMPLIFY_SYMBOL$1 = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default", dispatchAuthEvent$1 = /* @__PURE__ */ __name(function(event, data, message) {
  Hub.dispatch("auth", { event, data, message }, "Auth", AMPLIFY_SYMBOL$1);
}, "dispatchAuthEvent$1"), logger$2 = new ConsoleLogger("OAuth"), OAuth = (
  /** @class */
  (function() {
    function OAuth2(_a) {
      var config = _a.config, cognitoClientId = _a.cognitoClientId, _b = _a.scopes, scopes = _b === void 0 ? [] : _b;
      if (this._urlOpener = config.urlOpener || launchUri, this._config = config, this._cognitoClientId = cognitoClientId, !this.isValidScopes(scopes))
        throw Error("scopes must be a String Array");
      this._scopes = scopes;
    }
    return __name(OAuth2, "OAuth"), OAuth2.prototype.isValidScopes = function(scopes) {
      return Array.isArray(scopes) && scopes.every(function(scope) {
        return typeof scope == "string";
      });
    }, OAuth2.prototype.oauthSignIn = function(responseType, domain, redirectSignIn, clientId, provider, customState) {
      responseType === void 0 && (responseType = "code"), provider === void 0 && (provider = CognitoHostedUIIdentityProvider.Cognito);
      var generatedState = this._generateState(32), state = customState ? generatedState + "-" + urlSafeEncode(customState) : generatedState;
      setState(state);
      var pkce_key = this._generateRandom(128);
      setPKCE(pkce_key);
      var code_challenge = this._generateChallenge(pkce_key), code_challenge_method = "S256", scopesString = this._scopes.join(" "), queryString = Object.entries(__assign$1(__assign$1({ redirect_uri: redirectSignIn, response_type: responseType, client_id: clientId, identity_provider: provider, scope: scopesString, state }, responseType === "code" ? { code_challenge } : {}), responseType === "code" ? { code_challenge_method } : {})).map(function(_a) {
        var _b = __read(_a, 2), k = _b[0], v = _b[1];
        return encodeURIComponent(k) + "=" + encodeURIComponent(v);
      }).join("&"), URL = "https://" + domain + "/oauth2/authorize?" + queryString;
      logger$2.debug("Redirecting to " + URL), this._urlOpener(URL, redirectSignIn);
    }, OAuth2.prototype._handleCodeFlow = function(currentUrl) {
      return __awaiter(this, void 0, void 0, function() {
        var code, currentUrlPathname, redirectSignInPathname, oAuthTokenEndpoint, client_id, redirect_uri, code_verifier, oAuthTokenBody, body, customUserAgentDetails, _a, access_token, refresh_token, id_token, error, _b;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              return code = (urlExports.parse(currentUrl).query || "").split("&").map(function(pairings) {
                return pairings.split("=");
              }).reduce(function(accum, _a2) {
                var _b2, _c2 = __read(_a2, 2), k = _c2[0], v = _c2[1];
                return __assign$1(__assign$1({}, accum), (_b2 = {}, _b2[k] = v, _b2));
              }, { code: void 0 }).code, currentUrlPathname = urlExports.parse(currentUrl).pathname || "/", redirectSignInPathname = urlExports.parse(this._config.redirectSignIn).pathname || "/", !code || currentUrlPathname !== redirectSignInPathname ? [
                2
                /*return*/
              ] : (oAuthTokenEndpoint = "https://" + this._config.domain + "/oauth2/token", dispatchAuthEvent$1("codeFlow", {}, "Retrieving tokens from " + oAuthTokenEndpoint), client_id = isCognitoHostedOpts(this._config) ? this._cognitoClientId : this._config.clientID, redirect_uri = isCognitoHostedOpts(this._config) ? this._config.redirectSignIn : this._config.redirectUri, code_verifier = getPKCE(), oAuthTokenBody = __assign$1({
                grant_type: "authorization_code",
                code,
                client_id,
                redirect_uri
              }, code_verifier ? { code_verifier } : {}), logger$2.debug("Calling token endpoint: " + oAuthTokenEndpoint + " with", oAuthTokenBody), body = Object.entries(oAuthTokenBody).map(function(_a2) {
                var _b2 = __read(_a2, 2), k = _b2[0], v = _b2[1];
                return encodeURIComponent(k) + "=" + encodeURIComponent(v);
              }).join("&"), customUserAgentDetails = {
                category: Category.Auth,
                action: AuthAction.FederatedSignIn
              }, [4, fetch(oAuthTokenEndpoint, {
                method: "POST",
                headers: (_b = {
                  "Content-Type": "application/x-www-form-urlencoded"
                }, _b[USER_AGENT_HEADER] = getAmplifyUserAgent$1(customUserAgentDetails), _b),
                body
              })]);
            case 1:
              return [4, _c.sent().json()];
            case 2:
              if (_a = _c.sent(), access_token = _a.access_token, refresh_token = _a.refresh_token, id_token = _a.id_token, error = _a.error, error)
                throw new Error(error);
              return [2, {
                accessToken: access_token,
                refreshToken: refresh_token,
                idToken: id_token
              }];
          }
        });
      });
    }, OAuth2.prototype._handleImplicitFlow = function(currentUrl) {
      return __awaiter(this, void 0, void 0, function() {
        var _a, id_token, access_token;
        return __generator(this, function(_b) {
          return _a = (urlExports.parse(currentUrl).hash || "#").substr(1).split("&").map(function(pairings) {
            return pairings.split("=");
          }).reduce(function(accum, _a2) {
            var _b2, _c = __read(_a2, 2), k = _c[0], v = _c[1];
            return __assign$1(__assign$1({}, accum), (_b2 = {}, _b2[k] = v, _b2));
          }, {
            id_token: void 0,
            access_token: void 0
          }), id_token = _a.id_token, access_token = _a.access_token, dispatchAuthEvent$1("implicitFlow", {}, "Got tokens from " + currentUrl), logger$2.debug("Retrieving implicit tokens from " + currentUrl + " with"), [2, {
            accessToken: access_token,
            idToken: id_token,
            refreshToken: null
          }];
        });
      });
    }, OAuth2.prototype.handleAuthResponse = function(currentUrl) {
      return __awaiter(this, void 0, void 0, function() {
        var urlParams, error, error_description, state, _a, _b, e_1;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              if (_c.trys.push([0, 5, , 6]), urlParams = currentUrl ? __assign$1(__assign$1({}, (urlExports.parse(currentUrl).hash || "#").substr(1).split("&").map(function(entry) {
                return entry.split("=");
              }).reduce(function(acc, _a2) {
                var _b2 = __read(_a2, 2), k = _b2[0], v = _b2[1];
                return acc[k] = v, acc;
              }, {})), (urlExports.parse(currentUrl).query || "").split("&").map(function(entry) {
                return entry.split("=");
              }).reduce(function(acc, _a2) {
                var _b2 = __read(_a2, 2), k = _b2[0], v = _b2[1];
                return acc[k] = v, acc;
              }, {})) : {}, error = urlParams.error, error_description = urlParams.error_description, error)
                throw new Error(error_description);
              return state = this._validateState(urlParams), logger$2.debug("Starting " + this._config.responseType + " flow with " + currentUrl), this._config.responseType !== "code" ? [3, 2] : (_a = [{}], [4, this._handleCodeFlow(currentUrl)]);
            case 1:
              return [2, __assign$1.apply(void 0, [__assign$1.apply(void 0, _a.concat([_c.sent()])), { state }])];
            case 2:
              return _b = [{}], [4, this._handleImplicitFlow(currentUrl)];
            case 3:
              return [2, __assign$1.apply(void 0, [__assign$1.apply(void 0, _b.concat([_c.sent()])), { state }])];
            case 4:
              return [3, 6];
            case 5:
              throw e_1 = _c.sent(), logger$2.debug("Error handling auth response.", e_1), e_1;
            case 6:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, OAuth2.prototype._validateState = function(urlParams) {
      if (urlParams) {
        var savedState = getState(), returnedState = urlParams.state;
        if (savedState && savedState !== returnedState)
          throw new Error("Invalid state in OAuth flow");
        return returnedState;
      }
    }, OAuth2.prototype.signOut = function() {
      return __awaiter(this, void 0, void 0, function() {
        var oAuthLogoutEndpoint, client_id, signout_uri;
        return __generator(this, function(_a) {
          return oAuthLogoutEndpoint = "https://" + this._config.domain + "/logout?", client_id = isCognitoHostedOpts(this._config) ? this._cognitoClientId : this._config.oauth.clientID, signout_uri = isCognitoHostedOpts(this._config) ? this._config.redirectSignOut : this._config.returnTo, oAuthLogoutEndpoint += Object.entries({
            client_id,
            logout_uri: encodeURIComponent(signout_uri)
          }).map(function(_a2) {
            var _b = __read(_a2, 2), k = _b[0], v = _b[1];
            return k + "=" + v;
          }).join("&"), dispatchAuthEvent$1("oAuthSignOut", { oAuth: "signOut" }, "Signing out from " + oAuthLogoutEndpoint), logger$2.debug("Signing out from " + oAuthLogoutEndpoint), [2, this._urlOpener(oAuthLogoutEndpoint, signout_uri)];
        });
      });
    }, OAuth2.prototype._generateState = function(length) {
      for (var result = "", i = length, chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; i > 0; --i)
        result += chars[Math.round(Math.random() * (chars.length - 1))];
      return result;
    }, OAuth2.prototype._generateChallenge = function(code) {
      var awsCryptoHash = new buildExports.Sha256();
      awsCryptoHash.update(code);
      var resultFromAWSCrypto = awsCryptoHash.digestSync(), b64 = bufferExports.Buffer.from(resultFromAWSCrypto).toString("base64"), base64URLFromAWSCrypto = this._base64URL(b64);
      return base64URLFromAWSCrypto;
    }, OAuth2.prototype._base64URL = function(string) {
      return string.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }, OAuth2.prototype._generateRandom = function(size) {
      var CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", buffer2 = new Uint8Array(size);
      if (typeof window < "u" && window.crypto)
        window.crypto.getRandomValues(buffer2);
      else
        for (var i = 0; i < size; i += 1)
          buffer2[i] = Math.random() * CHARSET.length | 0;
      return this._bufferToString(buffer2);
    }, OAuth2.prototype._bufferToString = function(buffer2) {
      for (var CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", state = [], i = 0; i < buffer2.byteLength; i += 1) {
        var index = buffer2[i] % CHARSET.length;
        state.push(CHARSET[index]);
      }
      return state.join("");
    }, OAuth2;
  })()
);
const urlListener = /* @__PURE__ */ __name((function(callback) {
  if (browserOrNode().isBrowser && window.location) {
    var url2 = window.location.href;
    callback({ url: url2 });
  } else if (!browserOrNode().isNode) throw new Error("Not supported");
}), "urlListener");
var AuthErrorStrings;
(function(AuthErrorStrings2) {
  AuthErrorStrings2.DEFAULT_MSG = "Authentication Error", AuthErrorStrings2.EMPTY_EMAIL = "Email cannot be empty", AuthErrorStrings2.EMPTY_PHONE = "Phone number cannot be empty", AuthErrorStrings2.EMPTY_USERNAME = "Username cannot be empty", AuthErrorStrings2.INVALID_USERNAME = "The username should either be a string or one of the sign in types", AuthErrorStrings2.EMPTY_PASSWORD = "Password cannot be empty", AuthErrorStrings2.EMPTY_CODE = "Confirmation code cannot be empty", AuthErrorStrings2.SIGN_UP_ERROR = "Error creating account", AuthErrorStrings2.NO_MFA = "No valid MFA method provided", AuthErrorStrings2.INVALID_MFA = "Invalid MFA type", AuthErrorStrings2.EMPTY_CHALLENGE = "Challenge response cannot be empty", AuthErrorStrings2.NO_USER_SESSION = "Failed to get the session because the user is empty", AuthErrorStrings2.NETWORK_ERROR = "Network Error", AuthErrorStrings2.DEVICE_CONFIG = "Device tracking has not been configured in this User Pool", AuthErrorStrings2.AUTOSIGNIN_ERROR = "Please use your credentials to sign in";
})(AuthErrorStrings || (AuthErrorStrings = {}));
var logger$1 = new ConsoleLogger("AuthError"), AuthError = (
  /** @class */
  (function(_super) {
    __extends(AuthError2, _super);
    function AuthError2(type) {
      var _this = this, _a = authErrorMessages[type], message = _a.message, log = _a.log;
      return _this = _super.call(this, message) || this, _this.constructor = AuthError2, Object.setPrototypeOf(_this, AuthError2.prototype), _this.name = "AuthError", _this.log = log || message, logger$1.error(_this.log), _this;
    }
    return __name(AuthError2, "AuthError"), AuthError2;
  })(Error)
), NoUserPoolError = (
  /** @class */
  (function(_super) {
    __extends(NoUserPoolError2, _super);
    function NoUserPoolError2(type) {
      var _this = _super.call(this, type) || this;
      return _this.constructor = NoUserPoolError2, Object.setPrototypeOf(_this, NoUserPoolError2.prototype), _this.name = "NoUserPoolError", _this;
    }
    return __name(NoUserPoolError2, "NoUserPoolError"), NoUserPoolError2;
  })(AuthError)
), authErrorMessages = {
  noConfig: {
    message: AuthErrorStrings.DEFAULT_MSG,
    log: `
            Error: Amplify has not been configured correctly.
            This error is typically caused by one of the following scenarios:

            1. Make sure you're passing the awsconfig object to Amplify.configure() in your app's entry point
                See https://aws-amplify.github.io/docs/js/authentication#configure-your-app for more information
            
            2. There might be multiple conflicting versions of amplify packages in your node_modules.
				Refer to our docs site for help upgrading Amplify packages (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js)
        `
  },
  missingAuthConfig: {
    message: AuthErrorStrings.DEFAULT_MSG,
    log: `
            Error: Amplify has not been configured correctly. 
            The configuration object is missing required auth properties.
            This error is typically caused by one of the following scenarios:

            1. Did you run \`amplify push\` after adding auth via \`amplify add auth\`?
                See https://aws-amplify.github.io/docs/js/authentication#amplify-project-setup for more information

            2. This could also be caused by multiple conflicting versions of amplify packages, see (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js) for help upgrading Amplify packages.
        `
  },
  emptyUsername: {
    message: AuthErrorStrings.EMPTY_USERNAME
  },
  // TODO: should include a list of valid sign-in types
  invalidUsername: {
    message: AuthErrorStrings.INVALID_USERNAME
  },
  emptyPassword: {
    message: AuthErrorStrings.EMPTY_PASSWORD
  },
  emptyCode: {
    message: AuthErrorStrings.EMPTY_CODE
  },
  signUpError: {
    message: AuthErrorStrings.SIGN_UP_ERROR,
    log: "The first parameter should either be non-null string or object"
  },
  noMFA: {
    message: AuthErrorStrings.NO_MFA
  },
  invalidMFA: {
    message: AuthErrorStrings.INVALID_MFA
  },
  emptyChallengeResponse: {
    message: AuthErrorStrings.EMPTY_CHALLENGE
  },
  noUserSession: {
    message: AuthErrorStrings.NO_USER_SESSION
  },
  deviceConfig: {
    message: AuthErrorStrings.DEVICE_CONFIG
  },
  networkError: {
    message: AuthErrorStrings.NETWORK_ERROR
  },
  autoSignInError: {
    message: AuthErrorStrings.AUTOSIGNIN_ERROR
  },
  default: {
    message: AuthErrorStrings.DEFAULT_MSG
  }
}, logger = new ConsoleLogger("AuthClass"), USER_ADMIN_SCOPE = "aws.cognito.signin.user.admin", OAUTH_FLOW_MS_TIMEOUT = 10 * 1e3, AMPLIFY_SYMBOL = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default", dispatchAuthEvent = /* @__PURE__ */ __name(function(event, data, message) {
  Hub.dispatch("auth", { event, data, message }, "Auth", AMPLIFY_SYMBOL);
}, "dispatchAuthEvent"), MAX_DEVICES = 60, MAX_AUTOSIGNIN_POLLING_MS = 180 * 1e3, AuthClass = (
  /** @class */
  (function() {
    function AuthClass2(config) {
      var _this = this;
      this.userPool = null, this.user = null, this.oAuthFlowInProgress = !1, this.autoSignInInitiated = !1, this.inflightSessionPromise = null, this.inflightSessionPromiseCounter = 0, this.Credentials = Credentials, this.wrapRefreshSessionCallback = function(callback) {
        var wrapped = /* @__PURE__ */ __name(function(error, data) {
          return data ? dispatchAuthEvent("tokenRefresh", void 0, "New token retrieved") : dispatchAuthEvent("tokenRefresh_failure", error, "Failed to retrieve new token"), callback(error, data);
        }, "wrapped");
        return wrapped;
      }, this.configure(config), this.currentCredentials = this.currentCredentials.bind(this), this.currentUserCredentials = this.currentUserCredentials.bind(this), Hub.listen("auth", function(_a) {
        var payload = _a.payload, event = payload.event;
        switch (event) {
          case "verify":
          case "signIn":
            _this._storage.setItem("amplify-signin-with-hostedUI", "false");
            break;
          case "signOut":
            _this._storage.removeItem("amplify-signin-with-hostedUI");
            break;
          case "cognitoHostedUI":
            _this._storage.setItem("amplify-signin-with-hostedUI", "true");
            break;
        }
      }), addAuthCategoryToCognitoUserAgent(), addFrameworkToCognitoUserAgent(Platform$1.framework), Platform$1.observeFrameworkChanges(function() {
        addFrameworkToCognitoUserAgent(Platform$1.framework);
      });
    }
    return __name(AuthClass2, "AuthClass"), AuthClass2.prototype.getModuleName = function() {
      return "Auth";
    }, AuthClass2.prototype.configure = function(config) {
      var _this = this;
      if (!config)
        return this._config || {};
      logger.debug("configure Auth");
      var conf = Object.assign({}, this._config, parseAWSExports(config).Auth, config);
      this._config = conf;
      var _a = this._config, userPoolId = _a.userPoolId, userPoolWebClientId = _a.userPoolWebClientId, cookieStorage = _a.cookieStorage, oauth = _a.oauth, region = _a.region, identityPoolId = _a.identityPoolId, mandatorySignIn = _a.mandatorySignIn, refreshHandlers = _a.refreshHandlers, identityPoolRegion = _a.identityPoolRegion, clientMetadata = _a.clientMetadata, endpoint = _a.endpoint, storage = _a.storage;
      if (!storage)
        cookieStorage ? this._storage = new CookieStorage(cookieStorage) : this._storage = config.ssr ? new UniversalStorage() : new StorageHelper$1().getStorage();
      else {
        if (!this._isValidAuthStorage(storage))
          throw logger.error("The storage in the Auth config is not valid!"), new Error("Empty storage object");
        this._storage = storage;
      }
      if (this._storageSync = Promise.resolve(), typeof this._storage.sync == "function" && (this._storageSync = this._storage.sync()), userPoolId) {
        var userPoolData = {
          UserPoolId: userPoolId,
          ClientId: userPoolWebClientId,
          endpoint
        };
        userPoolData.Storage = this._storage, this.userPool = new CognitoUserPool(userPoolData, this.wrapRefreshSessionCallback);
      }
      this.Credentials.configure({
        mandatorySignIn,
        region,
        userPoolId,
        identityPoolId,
        refreshHandlers,
        storage: this._storage,
        identityPoolRegion
      });
      var cognitoHostedUIConfig = oauth ? isCognitoHostedOpts(this._config.oauth) ? oauth : oauth.awsCognito : void 0;
      if (cognitoHostedUIConfig) {
        var cognitoAuthParams = Object.assign({
          cognitoClientId: userPoolWebClientId,
          UserPoolId: userPoolId,
          domain: cognitoHostedUIConfig.domain,
          scopes: cognitoHostedUIConfig.scope,
          redirectSignIn: cognitoHostedUIConfig.redirectSignIn,
          redirectSignOut: cognitoHostedUIConfig.redirectSignOut,
          responseType: cognitoHostedUIConfig.responseType,
          Storage: this._storage,
          urlOpener: cognitoHostedUIConfig.urlOpener,
          clientMetadata
        }, cognitoHostedUIConfig.options);
        this._oAuthHandler = new OAuth({
          scopes: cognitoAuthParams.scopes,
          config: cognitoAuthParams,
          cognitoClientId: cognitoAuthParams.cognitoClientId
        });
        var usedResponseUrls_1 = {};
        urlListener(function(_a2) {
          var url2 = _a2.url;
          usedResponseUrls_1[url2] || (usedResponseUrls_1[url2] = !0, _this._handleAuthResponse(url2));
        });
      }
      if (dispatchAuthEvent("configured", null, "The Auth category has been configured successfully"), !this.autoSignInInitiated && typeof this._storage.getItem == "function") {
        var pollingInitiated = this.isTrueStorageValue("amplify-polling-started");
        pollingInitiated && (dispatchAuthEvent("autoSignIn_failure", null, AuthErrorTypes.AutoSignInError), this._storage.removeItem("amplify-auto-sign-in")), this._storage.removeItem("amplify-polling-started");
      }
      return this._config;
    }, AuthClass2.prototype.signUp = function(params) {
      for (var _this = this, restOfAttrs = [], _i = 1; _i < arguments.length; _i++)
        restOfAttrs[_i - 1] = arguments[_i];
      var _a, _b, _c;
      if (!this.userPool)
        return this.rejectNoUserPool();
      var username = null, password = null, attributes = [], validationData = null, clientMetadata, autoSignIn = { enabled: !1 }, autoSignInValidationData = {}, autoSignInClientMetaData = {};
      if (params && typeof params == "string") {
        username = params, password = restOfAttrs ? restOfAttrs[0] : null;
        var email = restOfAttrs ? restOfAttrs[1] : null, phone_number = restOfAttrs ? restOfAttrs[2] : null;
        email && attributes.push(new CognitoUserAttribute({ Name: "email", Value: email })), phone_number && attributes.push(new CognitoUserAttribute({
          Name: "phone_number",
          Value: phone_number
        }));
      } else if (params && typeof params == "object") {
        username = params.username, password = params.password, params && params.clientMetadata ? clientMetadata = params.clientMetadata : this._config.clientMetadata && (clientMetadata = this._config.clientMetadata);
        var attrs_1 = params.attributes;
        attrs_1 && Object.keys(attrs_1).map(function(key) {
          attributes.push(new CognitoUserAttribute({ Name: key, Value: attrs_1[key] }));
        });
        var validationDataObject_1 = params.validationData;
        validationDataObject_1 && (validationData = [], Object.keys(validationDataObject_1).map(function(key) {
          validationData.push(new CognitoUserAttribute({
            Name: key,
            Value: validationDataObject_1[key]
          }));
        })), autoSignIn = (_a = params.autoSignIn) !== null && _a !== void 0 ? _a : { enabled: !1 }, autoSignIn.enabled && (this._storage.setItem("amplify-auto-sign-in", "true"), autoSignInValidationData = (_b = autoSignIn.validationData) !== null && _b !== void 0 ? _b : {}, autoSignInClientMetaData = (_c = autoSignIn.clientMetaData) !== null && _c !== void 0 ? _c : {});
      } else
        return this.rejectAuthError(AuthErrorTypes.SignUpError);
      return username ? password ? (logger.debug("signUp attrs:", attributes), logger.debug("signUp validation data:", validationData), new Promise(function(resolve, reject) {
        _this.userPool.signUp(username, password, attributes, validationData, function(err, data) {
          err ? (dispatchAuthEvent("signUp_failure", err, username + " failed to signup"), reject(err)) : (dispatchAuthEvent("signUp", data, username + " has signed up successfully"), autoSignIn.enabled && _this.handleAutoSignIn(username, password, autoSignInValidationData, autoSignInClientMetaData, data), resolve(data));
        }, clientMetadata);
      })) : this.rejectAuthError(AuthErrorTypes.EmptyPassword) : this.rejectAuthError(AuthErrorTypes.EmptyUsername);
    }, AuthClass2.prototype.handleAutoSignIn = function(username, password, validationData, clientMetadata, data) {
      this.autoSignInInitiated = !0;
      var authDetails = new AuthenticationDetails({
        Username: username,
        Password: password,
        ValidationData: validationData,
        ClientMetadata: clientMetadata
      });
      data.userConfirmed ? this.signInAfterUserConfirmed(authDetails) : this._config.signUpVerificationMethod === "link" ? this.handleLinkAutoSignIn(authDetails) : this.handleCodeAutoSignIn(authDetails);
    }, AuthClass2.prototype.handleCodeAutoSignIn = function(authDetails) {
      var _this = this, listenEvent = /* @__PURE__ */ __name(function(_a) {
        var payload = _a.payload;
        payload.event === "confirmSignUp" && _this.signInAfterUserConfirmed(authDetails, listenEvent);
      }, "listenEvent");
      Hub.listen("auth", listenEvent);
    }, AuthClass2.prototype.handleLinkAutoSignIn = function(authDetails) {
      var _this = this;
      this._storage.setItem("amplify-polling-started", "true");
      var start = Date.now(), autoSignInPollingIntervalId = setInterval(function() {
        Date.now() - start > MAX_AUTOSIGNIN_POLLING_MS ? (clearInterval(autoSignInPollingIntervalId), dispatchAuthEvent("autoSignIn_failure", null, "Please confirm your account and use your credentials to sign in."), _this._storage.removeItem("amplify-auto-sign-in")) : _this.signInAfterUserConfirmed(authDetails, null, autoSignInPollingIntervalId);
      }, 5e3);
    }, AuthClass2.prototype.signInAfterUserConfirmed = function(authDetails, listenEvent, autoSignInPollingIntervalId) {
      return __awaiter(this, void 0, void 0, function() {
        var user, error_1, _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              user = this.createCognitoUser(authDetails.getUsername()), _a.label = 1;
            case 1:
              return _a.trys.push([1, 3, , 4]), [4, user.authenticateUser(authDetails, this.authCallbacks(user, function(value) {
                dispatchAuthEvent("autoSignIn", value, authDetails.getUsername() + " has signed in successfully"), listenEvent && Hub.remove("auth", listenEvent), autoSignInPollingIntervalId && (clearInterval(autoSignInPollingIntervalId), _this._storage.removeItem("amplify-polling-started")), _this._storage.removeItem("amplify-auto-sign-in");
              }, function(error) {
                logger.error(error), _this._storage.removeItem("amplify-auto-sign-in");
              }))];
            case 2:
              return _a.sent(), [3, 4];
            case 3:
              return error_1 = _a.sent(), logger.error(error_1), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AuthClass2.prototype.confirmSignUp = function(username, code, options) {
      var _this = this;
      if (!this.userPool)
        return this.rejectNoUserPool();
      if (!username)
        return this.rejectAuthError(AuthErrorTypes.EmptyUsername);
      if (!code)
        return this.rejectAuthError(AuthErrorTypes.EmptyCode);
      var user = this.createCognitoUser(username), forceAliasCreation = options && typeof options.forceAliasCreation == "boolean" ? options.forceAliasCreation : !0, clientMetadata;
      return options && options.clientMetadata ? clientMetadata = options.clientMetadata : this._config.clientMetadata && (clientMetadata = this._config.clientMetadata), new Promise(function(resolve, reject) {
        user.confirmRegistration(code, forceAliasCreation, function(err, data) {
          if (err)
            reject(err);
          else {
            dispatchAuthEvent("confirmSignUp", data, username + " has been confirmed successfully");
            var autoSignIn = _this.isTrueStorageValue("amplify-auto-sign-in");
            autoSignIn && !_this.autoSignInInitiated && (dispatchAuthEvent("autoSignIn_failure", null, AuthErrorTypes.AutoSignInError), _this._storage.removeItem("amplify-auto-sign-in")), resolve(data);
          }
        }, clientMetadata);
      });
    }, AuthClass2.prototype.isTrueStorageValue = function(value) {
      var item = this._storage.getItem(value);
      return item ? item === "true" : !1;
    }, AuthClass2.prototype.resendSignUp = function(username, clientMetadata) {
      if (clientMetadata === void 0 && (clientMetadata = this._config.clientMetadata), !this.userPool)
        return this.rejectNoUserPool();
      if (!username)
        return this.rejectAuthError(AuthErrorTypes.EmptyUsername);
      var user = this.createCognitoUser(username);
      return new Promise(function(resolve, reject) {
        user.resendConfirmationCode(function(err, data) {
          err ? reject(err) : resolve(data);
        }, clientMetadata);
      });
    }, AuthClass2.prototype.signIn = function(usernameOrSignInOpts, pw, clientMetadata) {
      if (clientMetadata === void 0 && (clientMetadata = this._config.clientMetadata), !this.userPool)
        return this.rejectNoUserPool();
      var username = null, password = null, validationData = {};
      if (typeof usernameOrSignInOpts == "string")
        username = usernameOrSignInOpts, password = pw;
      else if (isUsernamePasswordOpts(usernameOrSignInOpts))
        typeof pw < "u" && logger.warn("The password should be defined under the first parameter object!"), username = usernameOrSignInOpts.username, password = usernameOrSignInOpts.password, validationData = usernameOrSignInOpts.validationData;
      else
        return this.rejectAuthError(AuthErrorTypes.InvalidUsername);
      if (!username)
        return this.rejectAuthError(AuthErrorTypes.EmptyUsername);
      var authDetails = new AuthenticationDetails({
        Username: username,
        Password: password,
        ValidationData: validationData,
        ClientMetadata: clientMetadata
      });
      return password ? this.signInWithPassword(authDetails) : this.signInWithoutPassword(authDetails);
    }, AuthClass2.prototype.authCallbacks = function(user, resolve, reject) {
      var _this = this, that = this;
      return {
        onSuccess: /* @__PURE__ */ __name(function(session) {
          return __awaiter(_this, void 0, void 0, function() {
            var cred, e_1, currentUser, e_2;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  logger.debug(session), delete user.challengeName, delete user.challengeParam, _a.label = 1;
                case 1:
                  return _a.trys.push([1, 4, 5, 9]), [4, this.Credentials.clear()];
                case 2:
                  return _a.sent(), [4, this.Credentials.set(session, "session")];
                case 3:
                  return cred = _a.sent(), logger.debug("succeed to get cognito credentials", cred), [3, 9];
                case 4:
                  return e_1 = _a.sent(), logger.debug("cannot get cognito credentials", e_1), [3, 9];
                case 5:
                  return _a.trys.push([5, 7, , 8]), [4, this.currentUserPoolUser()];
                case 6:
                  return currentUser = _a.sent(), that.user = currentUser, dispatchAuthEvent("signIn", currentUser, "A user " + user.getUsername() + " has been signed in"), resolve(currentUser), [3, 8];
                case 7:
                  return e_2 = _a.sent(), logger.error("Failed to get the signed in user", e_2), reject(e_2), [3, 8];
                case 8:
                  return [
                    7
                    /*endfinally*/
                  ];
                case 9:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, "onSuccess"),
        onFailure: /* @__PURE__ */ __name(function(err) {
          logger.debug("signIn failure", err), dispatchAuthEvent("signIn_failure", err, user.getUsername() + " failed to signin"), reject(err);
        }, "onFailure"),
        customChallenge: /* @__PURE__ */ __name(function(challengeParam) {
          logger.debug("signIn custom challenge answer required"), user.challengeName = "CUSTOM_CHALLENGE", user.challengeParam = challengeParam, resolve(user);
        }, "customChallenge"),
        mfaRequired: /* @__PURE__ */ __name(function(challengeName, challengeParam) {
          logger.debug("signIn MFA required"), user.challengeName = challengeName, user.challengeParam = challengeParam, resolve(user);
        }, "mfaRequired"),
        mfaSetup: /* @__PURE__ */ __name(function(challengeName, challengeParam) {
          logger.debug("signIn mfa setup", challengeName), user.challengeName = challengeName, user.challengeParam = challengeParam, resolve(user);
        }, "mfaSetup"),
        newPasswordRequired: /* @__PURE__ */ __name(function(userAttributes, requiredAttributes) {
          logger.debug("signIn new password"), user.challengeName = "NEW_PASSWORD_REQUIRED", user.challengeParam = {
            userAttributes,
            requiredAttributes
          }, resolve(user);
        }, "newPasswordRequired"),
        totpRequired: /* @__PURE__ */ __name(function(challengeName, challengeParam) {
          logger.debug("signIn totpRequired"), user.challengeName = challengeName, user.challengeParam = challengeParam, resolve(user);
        }, "totpRequired"),
        selectMFAType: /* @__PURE__ */ __name(function(challengeName, challengeParam) {
          logger.debug("signIn selectMFAType", challengeName), user.challengeName = challengeName, user.challengeParam = challengeParam, resolve(user);
        }, "selectMFAType")
      };
    }, AuthClass2.prototype.signInWithPassword = function(authDetails) {
      var _this = this;
      if (this.pendingSignIn)
        throw new Error("Pending sign-in attempt already in progress");
      var user = this.createCognitoUser(authDetails.getUsername());
      return this.pendingSignIn = new Promise(function(resolve, reject) {
        user.authenticateUser(authDetails, _this.authCallbacks(user, function(value) {
          _this.pendingSignIn = null, resolve(value);
        }, function(error) {
          _this.pendingSignIn = null, reject(error);
        }));
      }), this.pendingSignIn;
    }, AuthClass2.prototype.signInWithoutPassword = function(authDetails) {
      var _this = this, user = this.createCognitoUser(authDetails.getUsername());
      return user.setAuthenticationFlowType("CUSTOM_AUTH"), new Promise(function(resolve, reject) {
        user.initiateAuth(authDetails, _this.authCallbacks(user, resolve, reject));
      });
    }, AuthClass2.prototype.getMFAOptions = function(user) {
      return new Promise(function(res, rej) {
        user.getMFAOptions(function(err, mfaOptions) {
          if (err) {
            logger.debug("get MFA Options failed", err), rej(err);
            return;
          }
          logger.debug("get MFA options success", mfaOptions), res(mfaOptions);
        });
      });
    }, AuthClass2.prototype.getPreferredMFA = function(user, params) {
      var _this = this, that = this;
      return new Promise(function(res, rej) {
        var clientMetadata = _this._config.clientMetadata, bypassCache = params ? params.bypassCache : !1;
        user.getUserData(function(err, data) {
          return __awaiter(_this, void 0, void 0, function() {
            var cleanUpError_1, mfaType;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (!err) return [3, 5];
                  if (logger.debug("getting preferred mfa failed", err), !this.isSessionInvalid(err)) return [3, 4];
                  _a.label = 1;
                case 1:
                  return _a.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(user)];
                case 2:
                  return _a.sent(), [3, 4];
                case 3:
                  return cleanUpError_1 = _a.sent(), rej(new Error("Session is invalid due to: " + err.message + " and failed to clean up invalid session: " + cleanUpError_1.message)), [
                    2
                    /*return*/
                  ];
                case 4:
                  return rej(err), [
                    2
                    /*return*/
                  ];
                case 5:
                  return mfaType = that._getMfaTypeFromUserData(data), mfaType ? (res(mfaType), [
                    2
                    /*return*/
                  ]) : (rej("invalid MFA Type"), [
                    2
                    /*return*/
                  ]);
              }
            });
          });
        }, { bypassCache, clientMetadata });
      });
    }, AuthClass2.prototype._getMfaTypeFromUserData = function(data) {
      var ret = null, preferredMFA = data.PreferredMfaSetting;
      if (preferredMFA)
        ret = preferredMFA;
      else {
        var mfaList = data.UserMFASettingList;
        if (mfaList)
          mfaList.length === 0 ? ret = "NOMFA" : logger.debug("invalid case for getPreferredMFA", data);
        else {
          var MFAOptions = data.MFAOptions;
          MFAOptions ? ret = "SMS_MFA" : ret = "NOMFA";
        }
      }
      return ret;
    }, AuthClass2.prototype._getUserData = function(user, params) {
      var _this = this;
      return new Promise(function(res, rej) {
        user.getUserData(function(err, data) {
          return __awaiter(_this, void 0, void 0, function() {
            var cleanUpError_2;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (!err) return [3, 5];
                  if (logger.debug("getting user data failed", err), !this.isSessionInvalid(err)) return [3, 4];
                  _a.label = 1;
                case 1:
                  return _a.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(user)];
                case 2:
                  return _a.sent(), [3, 4];
                case 3:
                  return cleanUpError_2 = _a.sent(), rej(new Error("Session is invalid due to: " + err.message + " and failed to clean up invalid session: " + cleanUpError_2.message)), [
                    2
                    /*return*/
                  ];
                case 4:
                  return rej(err), [
                    2
                    /*return*/
                  ];
                case 5:
                  res(data), _a.label = 6;
                case 6:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, params);
      });
    }, AuthClass2.prototype.setPreferredMFA = function(user, mfaMethod) {
      return __awaiter(this, void 0, void 0, function() {
        var clientMetadata, userData, smsMfaSettings, totpMfaSettings, _a, mfaList, currentMFAType, _this = this;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              return clientMetadata = this._config.clientMetadata, [4, this._getUserData(user, {
                bypassCache: !0,
                clientMetadata
              })];
            case 1:
              switch (userData = _b.sent(), smsMfaSettings = null, totpMfaSettings = null, _a = mfaMethod, _a) {
                case "TOTP":
                  return [3, 2];
                case "SOFTWARE_TOKEN_MFA":
                  return [3, 2];
                case "SMS":
                  return [3, 3];
                case "SMS_MFA":
                  return [3, 3];
                case "NOMFA":
                  return [3, 4];
              }
              return [3, 6];
            case 2:
              return totpMfaSettings = {
                PreferredMfa: !0,
                Enabled: !0
              }, [3, 7];
            case 3:
              return smsMfaSettings = {
                PreferredMfa: !0,
                Enabled: !0
              }, [3, 7];
            case 4:
              return mfaList = userData.UserMFASettingList, [4, this._getMfaTypeFromUserData(userData)];
            case 5:
              if (currentMFAType = _b.sent(), currentMFAType === "NOMFA")
                return [2, Promise.resolve("No change for mfa type")];
              if (currentMFAType === "SMS_MFA")
                smsMfaSettings = {
                  PreferredMfa: !1,
                  Enabled: !1
                };
              else if (currentMFAType === "SOFTWARE_TOKEN_MFA")
                totpMfaSettings = {
                  PreferredMfa: !1,
                  Enabled: !1
                };
              else
                return [2, this.rejectAuthError(AuthErrorTypes.InvalidMFA)];
              return mfaList && mfaList.length !== 0 && mfaList.forEach(function(mfaType) {
                mfaType === "SMS_MFA" ? smsMfaSettings = {
                  PreferredMfa: !1,
                  Enabled: !1
                } : mfaType === "SOFTWARE_TOKEN_MFA" && (totpMfaSettings = {
                  PreferredMfa: !1,
                  Enabled: !1
                });
              }), [3, 7];
            case 6:
              return logger.debug("no validmfa method provided"), [2, this.rejectAuthError(AuthErrorTypes.NoMFA)];
            case 7:
              return [2, new Promise(function(res, rej) {
                user.setUserMfaPreference(smsMfaSettings, totpMfaSettings, function(err, result) {
                  if (err)
                    return logger.debug("Set user mfa preference error", err), rej(err);
                  logger.debug("Set user mfa success", result), logger.debug("Caching the latest user data into local"), user.getUserData(function(err2, data) {
                    return __awaiter(_this, void 0, void 0, function() {
                      var cleanUpError_3;
                      return __generator(this, function(_a2) {
                        switch (_a2.label) {
                          case 0:
                            if (!err2) return [3, 5];
                            if (logger.debug("getting user data failed", err2), !this.isSessionInvalid(err2)) return [3, 4];
                            _a2.label = 1;
                          case 1:
                            return _a2.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(user)];
                          case 2:
                            return _a2.sent(), [3, 4];
                          case 3:
                            return cleanUpError_3 = _a2.sent(), rej(new Error("Session is invalid due to: " + err2.message + " and failed to clean up invalid session: " + cleanUpError_3.message)), [
                              2
                              /*return*/
                            ];
                          case 4:
                            return [2, rej(err2)];
                          case 5:
                            return [2, res(result)];
                        }
                      });
                    });
                  }, {
                    bypassCache: !0,
                    clientMetadata
                  });
                });
              })];
          }
        });
      });
    }, AuthClass2.prototype.disableSMS = function(user) {
      return new Promise(function(res, rej) {
        user.disableMFA(function(err, data) {
          if (err) {
            logger.debug("disable mfa failed", err), rej(err);
            return;
          }
          logger.debug("disable mfa succeed", data), res(data);
        });
      });
    }, AuthClass2.prototype.enableSMS = function(user) {
      return new Promise(function(res, rej) {
        user.enableMFA(function(err, data) {
          if (err) {
            logger.debug("enable mfa failed", err), rej(err);
            return;
          }
          logger.debug("enable mfa succeed", data), res(data);
        });
      });
    }, AuthClass2.prototype.setupTOTP = function(user) {
      return new Promise(function(res, rej) {
        user.associateSoftwareToken({
          onFailure: /* @__PURE__ */ __name(function(err) {
            logger.debug("associateSoftwareToken failed", err), rej(err);
          }, "onFailure"),
          associateSecretCode: /* @__PURE__ */ __name(function(secretCode) {
            logger.debug("associateSoftwareToken success", secretCode), res(secretCode);
          }, "associateSecretCode")
        });
      });
    }, AuthClass2.prototype.verifyTotpToken = function(user, challengeAnswer) {
      logger.debug("verification totp token", user, challengeAnswer);
      var signInUserSession;
      user && typeof user.getSignInUserSession == "function" && (signInUserSession = user.getSignInUserSession());
      var isLoggedIn = signInUserSession == null ? void 0 : signInUserSession.isValid();
      return new Promise(function(res, rej) {
        user.verifySoftwareToken(challengeAnswer, "My TOTP device", {
          onFailure: /* @__PURE__ */ __name(function(err) {
            logger.debug("verifyTotpToken failed", err), rej(err);
          }, "onFailure"),
          onSuccess: /* @__PURE__ */ __name(function(data) {
            isLoggedIn || dispatchAuthEvent("signIn", user, "A user " + user.getUsername() + " has been signed in"), dispatchAuthEvent("verify", user, "A user " + user.getUsername() + " has been verified"), logger.debug("verifyTotpToken success", data), res(data);
          }, "onSuccess")
        });
      });
    }, AuthClass2.prototype.confirmSignIn = function(user, code, mfaType, clientMetadata) {
      var _this = this;
      if (clientMetadata === void 0 && (clientMetadata = this._config.clientMetadata), !code)
        return this.rejectAuthError(AuthErrorTypes.EmptyCode);
      var that = this;
      return new Promise(function(resolve, reject) {
        user.sendMFACode(code, {
          onSuccess: /* @__PURE__ */ __name(function(session) {
            return __awaiter(_this, void 0, void 0, function() {
              var cred, e_3, currentUser, e_4;
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    logger.debug(session), _a.label = 1;
                  case 1:
                    return _a.trys.push([1, 4, 5, 10]), [4, this.Credentials.clear()];
                  case 2:
                    return _a.sent(), [4, this.Credentials.set(session, "session")];
                  case 3:
                    return cred = _a.sent(), logger.debug("succeed to get cognito credentials", cred), [3, 10];
                  case 4:
                    return e_3 = _a.sent(), logger.debug("cannot get cognito credentials", e_3), [3, 10];
                  case 5:
                    that.user = user, _a.label = 6;
                  case 6:
                    return _a.trys.push([6, 8, , 9]), [4, this.currentUserPoolUser()];
                  case 7:
                    return currentUser = _a.sent(), user.attributes = currentUser.attributes, [3, 9];
                  case 8:
                    return e_4 = _a.sent(), logger.debug("cannot get updated Cognito User", e_4), [3, 9];
                  case 9:
                    return dispatchAuthEvent("signIn", user, "A user " + user.getUsername() + " has been signed in"), resolve(user), [
                      7
                      /*endfinally*/
                    ];
                  case 10:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          }, "onSuccess"),
          onFailure: /* @__PURE__ */ __name(function(err) {
            logger.debug("confirm signIn failure", err), reject(err);
          }, "onFailure")
        }, mfaType, clientMetadata);
      });
    }, AuthClass2.prototype.completeNewPassword = function(user, password, requiredAttributes, clientMetadata) {
      var _this = this;
      if (requiredAttributes === void 0 && (requiredAttributes = {}), clientMetadata === void 0 && (clientMetadata = this._config.clientMetadata), !password)
        return this.rejectAuthError(AuthErrorTypes.EmptyPassword);
      var that = this;
      return new Promise(function(resolve, reject) {
        user.completeNewPasswordChallenge(password, requiredAttributes, {
          onSuccess: /* @__PURE__ */ __name(function(session) {
            return __awaiter(_this, void 0, void 0, function() {
              var cred, e_5;
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    logger.debug(session), _a.label = 1;
                  case 1:
                    return _a.trys.push([1, 4, 5, 6]), [4, this.Credentials.clear()];
                  case 2:
                    return _a.sent(), [4, this.Credentials.set(session, "session")];
                  case 3:
                    return cred = _a.sent(), logger.debug("succeed to get cognito credentials", cred), [3, 6];
                  case 4:
                    return e_5 = _a.sent(), logger.debug("cannot get cognito credentials", e_5), [3, 6];
                  case 5:
                    return that.user = user, dispatchAuthEvent("signIn", user, "A user " + user.getUsername() + " has been signed in"), resolve(user), [
                      7
                      /*endfinally*/
                    ];
                  case 6:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          }, "onSuccess"),
          onFailure: /* @__PURE__ */ __name(function(err) {
            logger.debug("completeNewPassword failure", err), dispatchAuthEvent("completeNewPassword_failure", err, _this.user + " failed to complete the new password flow"), reject(err);
          }, "onFailure"),
          mfaRequired: /* @__PURE__ */ __name(function(challengeName, challengeParam) {
            logger.debug("signIn MFA required"), user.challengeName = challengeName, user.challengeParam = challengeParam, resolve(user);
          }, "mfaRequired"),
          mfaSetup: /* @__PURE__ */ __name(function(challengeName, challengeParam) {
            logger.debug("signIn mfa setup", challengeName), user.challengeName = challengeName, user.challengeParam = challengeParam, resolve(user);
          }, "mfaSetup"),
          totpRequired: /* @__PURE__ */ __name(function(challengeName, challengeParam) {
            logger.debug("signIn mfa setup", challengeName), user.challengeName = challengeName, user.challengeParam = challengeParam, resolve(user);
          }, "totpRequired")
        }, clientMetadata);
      });
    }, AuthClass2.prototype.sendCustomChallengeAnswer = function(user, challengeResponses, clientMetadata) {
      var _this = this;
      return clientMetadata === void 0 && (clientMetadata = this._config.clientMetadata), this.userPool ? challengeResponses ? new Promise(function(resolve, reject) {
        user.sendCustomChallengeAnswer(challengeResponses, _this.authCallbacks(user, resolve, reject), clientMetadata);
      }) : this.rejectAuthError(AuthErrorTypes.EmptyChallengeResponse) : this.rejectNoUserPool();
    }, AuthClass2.prototype.deleteUserAttributes = function(user, attributeNames) {
      var that = this;
      return new Promise(function(resolve, reject) {
        that.userSession(user).then(function(session) {
          user.deleteAttributes(attributeNames, function(err, result) {
            return err ? reject(err) : resolve(result);
          });
        });
      });
    }, AuthClass2.prototype.deleteUser = function() {
      return __awaiter(this, void 0, void 0, function() {
        var e_6, isSignedInHostedUI, _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return _a.trys.push([0, 2, , 3]), [4, this._storageSync];
            case 1:
              return _a.sent(), [3, 3];
            case 2:
              throw e_6 = _a.sent(), logger.debug("Failed to sync cache info into memory", e_6), new Error(e_6);
            case 3:
              return isSignedInHostedUI = this._oAuthHandler && this._storage.getItem("amplify-signin-with-hostedUI") === "true", [2, new Promise(function(res, rej) {
                return __awaiter(_this, void 0, void 0, function() {
                  var user_1, _this2 = this;
                  return __generator(this, function(_a2) {
                    if (this.userPool)
                      if (user_1 = this.userPool.getCurrentUser(), user_1)
                        user_1.getSession(function(err, session) {
                          return __awaiter(_this2, void 0, void 0, function() {
                            var cleanUpError_4, _this3 = this;
                            return __generator(this, function(_a3) {
                              switch (_a3.label) {
                                case 0:
                                  if (!err) return [3, 5];
                                  if (logger.debug("Failed to get the user session", err), !this.isSessionInvalid(err)) return [3, 4];
                                  _a3.label = 1;
                                case 1:
                                  return _a3.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(user_1)];
                                case 2:
                                  return _a3.sent(), [3, 4];
                                case 3:
                                  return cleanUpError_4 = _a3.sent(), rej(new Error("Session is invalid due to: " + err.message + " and failed to clean up invalid session: " + cleanUpError_4.message)), [
                                    2
                                    /*return*/
                                  ];
                                case 4:
                                  return [2, rej(err)];
                                case 5:
                                  user_1.deleteUser(function(err2, result) {
                                    if (err2)
                                      rej(err2);
                                    else {
                                      dispatchAuthEvent("userDeleted", result, "The authenticated user has been deleted."), user_1.signOut(), _this3.user = null;
                                      try {
                                        _this3.cleanCachedItems();
                                      } catch {
                                        logger.debug("failed to clear cached items");
                                      }
                                      isSignedInHostedUI ? _this3.oAuthSignOutRedirect(res, rej) : (dispatchAuthEvent("signOut", _this3.user, "A user has been signed out"), res(result));
                                    }
                                  }), _a3.label = 6;
                                case 6:
                                  return [
                                    2
                                    /*return*/
                                  ];
                              }
                            });
                          });
                        });
                      else
                        return logger.debug("Failed to get user from user pool"), [2, rej(new Error("No current user."))];
                    else
                      logger.debug("no Congito User pool"), rej(new Error("Cognito User pool does not exist"));
                    return [
                      2
                      /*return*/
                    ];
                  });
                });
              })];
          }
        });
      });
    }, AuthClass2.prototype.updateUserAttributes = function(user, attributes, clientMetadata) {
      var _this = this;
      clientMetadata === void 0 && (clientMetadata = this._config.clientMetadata);
      var attributeList = [], that = this;
      return new Promise(function(resolve, reject) {
        that.userSession(user).then(function(session) {
          for (var key in attributes)
            if (key !== "sub" && key.indexOf("_verified") < 0) {
              var attr = {
                Name: key,
                Value: attributes[key]
              };
              attributeList.push(attr);
            }
          user.updateAttributes(attributeList, function(err, result, details) {
            if (err)
              return dispatchAuthEvent("updateUserAttributes_failure", err, "Failed to update attributes"), reject(err);
            var attrs = _this.createUpdateAttributesResultList(attributes, details == null ? void 0 : details.CodeDeliveryDetailsList);
            return dispatchAuthEvent("updateUserAttributes", attrs, "Attributes successfully updated"), resolve(result);
          }, clientMetadata);
        });
      });
    }, AuthClass2.prototype.createUpdateAttributesResultList = function(attributes, codeDeliveryDetailsList) {
      var attrs = {};
      return Object.keys(attributes).forEach(function(key) {
        attrs[key] = {
          isUpdated: !0
        };
        var codeDeliveryDetails = codeDeliveryDetailsList == null ? void 0 : codeDeliveryDetailsList.find(function(value) {
          return value.AttributeName === key;
        });
        codeDeliveryDetails && (attrs[key].isUpdated = !1, attrs[key].codeDeliveryDetails = codeDeliveryDetails);
      }), attrs;
    }, AuthClass2.prototype.userAttributes = function(user) {
      var _this = this;
      return new Promise(function(resolve, reject) {
        _this.userSession(user).then(function(session) {
          user.getUserAttributes(function(err, attributes) {
            err ? reject(err) : resolve(attributes);
          });
        });
      });
    }, AuthClass2.prototype.verifiedContact = function(user) {
      var that = this;
      return this.userAttributes(user).then(function(attributes) {
        var attrs = that.attributesToObject(attributes), unverified = {}, verified = {};
        return attrs.email && (attrs.email_verified ? verified.email = attrs.email : unverified.email = attrs.email), attrs.phone_number && (attrs.phone_number_verified ? verified.phone_number = attrs.phone_number : unverified.phone_number = attrs.phone_number), {
          verified,
          unverified
        };
      });
    }, AuthClass2.prototype.isErrorWithMessage = function(err) {
      return typeof err == "object" && Object.prototype.hasOwnProperty.call(err, "message");
    }, AuthClass2.prototype.isTokenRevokedError = function(err) {
      return this.isErrorWithMessage(err) && err.message === "Access Token has been revoked";
    }, AuthClass2.prototype.isRefreshTokenRevokedError = function(err) {
      return this.isErrorWithMessage(err) && err.message === "Refresh Token has been revoked";
    }, AuthClass2.prototype.isUserDisabledError = function(err) {
      return this.isErrorWithMessage(err) && err.message === "User is disabled.";
    }, AuthClass2.prototype.isUserDoesNotExistError = function(err) {
      return this.isErrorWithMessage(err) && err.message === "User does not exist.";
    }, AuthClass2.prototype.isRefreshTokenExpiredError = function(err) {
      return this.isErrorWithMessage(err) && err.message === "Refresh Token has expired";
    }, AuthClass2.prototype.isPasswordResetRequiredError = function(err) {
      return this.isErrorWithMessage(err) && err.message === "Password reset required for the user";
    }, AuthClass2.prototype.isSignedInHostedUI = function() {
      return this._oAuthHandler && this._storage.getItem("amplify-signin-with-hostedUI") === "true";
    }, AuthClass2.prototype.isSessionInvalid = function(err) {
      return this.isUserDisabledError(err) || this.isUserDoesNotExistError(err) || this.isTokenRevokedError(err) || this.isRefreshTokenRevokedError(err) || this.isRefreshTokenExpiredError(err) || this.isPasswordResetRequiredError(err);
    }, AuthClass2.prototype.cleanUpInvalidSession = function(user) {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              user.signOut(), this.user = null, _a.label = 1;
            case 1:
              return _a.trys.push([1, 3, , 4]), [4, this.cleanCachedItems()];
            case 2:
              return _a.sent(), [3, 4];
            case 3:
              return _a.sent(), logger.debug("failed to clear cached items"), [3, 4];
            case 4:
              return this.isSignedInHostedUI() ? [2, new Promise(function(res, rej) {
                _this.oAuthSignOutRedirect(res, rej);
              })] : (dispatchAuthEvent("signOut", this.user, "A user has been signed out"), [
                2
                /*return*/
              ]);
          }
        });
      });
    }, AuthClass2.prototype.currentUserPoolUser = function(params) {
      var _this = this;
      return this.userPool ? new Promise(function(res, rej) {
        _this._storageSync.then(function() {
          return __awaiter(_this, void 0, void 0, function() {
            var user, session, bypassCache, clientMetadata, _a, scope, err_1, _this2 = this;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  return this.isOAuthInProgress() ? (logger.debug("OAuth signIn in progress, waiting for resolution..."), [4, new Promise(function(res2) {
                    var timeoutId = setTimeout(function() {
                      logger.debug("OAuth signIn in progress timeout"), Hub.remove("auth", hostedUISignCallback), res2();
                    }, OAUTH_FLOW_MS_TIMEOUT);
                    Hub.listen("auth", hostedUISignCallback);
                    function hostedUISignCallback(_a2) {
                      var payload = _a2.payload, event = payload.event;
                      (event === "cognitoHostedUI" || event === "cognitoHostedUI_failure") && (logger.debug("OAuth signIn resolved: " + event), clearTimeout(timeoutId), Hub.remove("auth", hostedUISignCallback), res2());
                    }
                    __name(hostedUISignCallback, "hostedUISignCallback");
                  })]) : [3, 2];
                case 1:
                  _b.sent(), _b.label = 2;
                case 2:
                  if (user = this.userPool.getCurrentUser(), !user)
                    return logger.debug("Failed to get user from user pool"), rej("No current user"), [
                      2
                      /*return*/
                    ];
                  _b.label = 3;
                case 3:
                  return _b.trys.push([3, 7, , 8]), [4, this._userSession(user)];
                case 4:
                  return session = _b.sent(), bypassCache = params ? params.bypassCache : !1, bypassCache ? [4, this.Credentials.clear()] : [3, 6];
                case 5:
                  _b.sent(), _b.label = 6;
                case 6:
                  if (clientMetadata = this._config.clientMetadata, _a = session.getAccessToken().decodePayload().scope, scope = _a === void 0 ? "" : _a, scope.split(" ").includes(USER_ADMIN_SCOPE))
                    user.getUserData(function(err, data) {
                      return __awaiter(_this2, void 0, void 0, function() {
                        var cleanUpError_5, preferredMFA, attributeList, i, attribute, userAttribute, attributes;
                        return __generator(this, function(_a2) {
                          switch (_a2.label) {
                            case 0:
                              if (!err) return [3, 7];
                              if (logger.debug("getting user data failed", err), !this.isSessionInvalid(err)) return [3, 5];
                              _a2.label = 1;
                            case 1:
                              return _a2.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(user)];
                            case 2:
                              return _a2.sent(), [3, 4];
                            case 3:
                              return cleanUpError_5 = _a2.sent(), rej(new Error("Session is invalid due to: " + err.message + " and failed to clean up invalid session: " + cleanUpError_5.message)), [
                                2
                                /*return*/
                              ];
                            case 4:
                              return rej(err), [3, 6];
                            case 5:
                              res(user), _a2.label = 6;
                            case 6:
                              return [
                                2
                                /*return*/
                              ];
                            case 7:
                              for (preferredMFA = data.PreferredMfaSetting || "NOMFA", attributeList = [], i = 0; i < data.UserAttributes.length; i++)
                                attribute = {
                                  Name: data.UserAttributes[i].Name,
                                  Value: data.UserAttributes[i].Value
                                }, userAttribute = new CognitoUserAttribute(attribute), attributeList.push(userAttribute);
                              return attributes = this.attributesToObject(attributeList), Object.assign(user, { attributes, preferredMFA }), [2, res(user)];
                          }
                        });
                      });
                    }, { bypassCache, clientMetadata });
                  else
                    return logger.debug("Unable to get the user data because the " + USER_ADMIN_SCOPE + " is not in the scopes of the access token"), [2, res(user)];
                  return [3, 8];
                case 7:
                  return err_1 = _b.sent(), rej(err_1), [3, 8];
                case 8:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }).catch(function(e) {
          return logger.debug("Failed to sync cache info into memory", e), rej(e);
        });
      }) : this.rejectNoUserPool();
    }, AuthClass2.prototype.isOAuthInProgress = function() {
      return this.oAuthFlowInProgress;
    }, AuthClass2.prototype.currentAuthenticatedUser = function(params) {
      return __awaiter(this, void 0, void 0, function() {
        var federatedUser, e_8, federatedInfo, user, e_9;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              logger.debug("getting current authenticated user"), federatedUser = null, _a.label = 1;
            case 1:
              return _a.trys.push([1, 3, , 4]), [4, this._storageSync];
            case 2:
              return _a.sent(), [3, 4];
            case 3:
              throw e_8 = _a.sent(), logger.debug("Failed to sync cache info into memory", e_8), e_8;
            case 4:
              try {
                federatedInfo = JSON.parse(this._storage.getItem("aws-amplify-federatedInfo")), federatedInfo && (federatedUser = __assign$1(__assign$1({}, federatedInfo.user), { token: federatedInfo.token }));
              } catch {
                logger.debug("cannot load federated user from auth storage");
              }
              return federatedUser ? (this.user = federatedUser, logger.debug("get current authenticated federated user", this.user), [2, this.user]) : [3, 5];
            case 5:
              logger.debug("get current authenticated userpool user"), user = null, _a.label = 6;
            case 6:
              return _a.trys.push([6, 8, , 9]), [4, this.currentUserPoolUser(params)];
            case 7:
              return user = _a.sent(), [3, 9];
            case 8:
              return e_9 = _a.sent(), e_9 === "No userPool" && logger.error("Cannot get the current user because the user pool is missing. Please make sure the Auth module is configured with a valid Cognito User Pool ID"), logger.debug("The user is not authenticated by the error", e_9), [2, Promise.reject("The user is not authenticated")];
            case 9:
              return this.user = user, [2, this.user];
          }
        });
      });
    }, AuthClass2.prototype.currentSession = function() {
      var that = this;
      return logger.debug("Getting current session"), this.userPool ? new Promise(function(res, rej) {
        that.currentUserPoolUser().then(function(user) {
          that.userSession(user).then(function(session) {
            res(session);
          }).catch(function(e) {
            logger.debug("Failed to get the current session", e), rej(e);
          });
        }).catch(function(e) {
          logger.debug("Failed to get the current user", e), rej(e);
        });
      }) : Promise.reject(new Error("No User Pool in the configuration."));
    }, AuthClass2.prototype._userSession = function(user) {
      return __awaiter(this, void 0, void 0, function() {
        var clientMetadata, userSession, _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!user)
                return logger.debug("the user is null"), [2, this.rejectAuthError(AuthErrorTypes.NoUserSession)];
              clientMetadata = this._config.clientMetadata, this.inflightSessionPromiseCounter === 0 && (this.inflightSessionPromise = new Promise(function(res, rej) {
                user.getSession(function(err, session) {
                  return __awaiter(_this, void 0, void 0, function() {
                    var cleanUpError_6;
                    return __generator(this, function(_a2) {
                      switch (_a2.label) {
                        case 0:
                          if (!err) return [3, 5];
                          if (logger.debug("Failed to get the session from user", user), !this.isSessionInvalid(err)) return [3, 4];
                          _a2.label = 1;
                        case 1:
                          return _a2.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(user)];
                        case 2:
                          return _a2.sent(), [3, 4];
                        case 3:
                          return cleanUpError_6 = _a2.sent(), rej(new Error("Session is invalid due to: " + err.message + " and failed to clean up invalid session: " + cleanUpError_6.message)), [
                            2
                            /*return*/
                          ];
                        case 4:
                          return rej(err), [
                            2
                            /*return*/
                          ];
                        case 5:
                          return logger.debug("Succeed to get the user session", session), res(session), [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                }, { clientMetadata });
              })), this.inflightSessionPromiseCounter++, _a.label = 1;
            case 1:
              return _a.trys.push([1, , 3, 4]), [4, this.inflightSessionPromise];
            case 2:
              return userSession = _a.sent(), user.signInUserSession = userSession, [2, userSession];
            case 3:
              return this.inflightSessionPromiseCounter--, [
                7
                /*endfinally*/
              ];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AuthClass2.prototype.userSession = function(user) {
      return this._userSession(user);
    }, AuthClass2.prototype.currentUserCredentials = function() {
      return __awaiter(this, void 0, void 0, function() {
        var e_10, federatedInfo, _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              logger.debug("Getting current user credentials"), _a.label = 1;
            case 1:
              return _a.trys.push([1, 3, , 4]), [4, this._storageSync];
            case 2:
              return _a.sent(), [3, 4];
            case 3:
              throw e_10 = _a.sent(), logger.debug("Failed to sync cache info into memory", e_10), e_10;
            case 4:
              federatedInfo = null;
              try {
                federatedInfo = JSON.parse(this._storage.getItem("aws-amplify-federatedInfo"));
              } catch (e) {
                logger.debug("failed to get or parse item aws-amplify-federatedInfo", e);
              }
              return federatedInfo ? [2, this.Credentials.refreshFederatedToken(federatedInfo)] : [2, this.currentSession().then(function(session) {
                return logger.debug("getting session success", session), _this.Credentials.set(session, "session");
              }).catch(function() {
                return logger.debug("getting guest credentials"), _this.Credentials.set(null, "guest");
              })];
          }
        });
      });
    }, AuthClass2.prototype.currentCredentials = function() {
      return logger.debug("getting current credentials"), this.Credentials.get();
    }, AuthClass2.prototype.verifyUserAttribute = function(user, attr, clientMetadata) {
      return clientMetadata === void 0 && (clientMetadata = this._config.clientMetadata), new Promise(function(resolve, reject) {
        user.getAttributeVerificationCode(attr, {
          onSuccess: /* @__PURE__ */ __name(function(success) {
            return resolve(success);
          }, "onSuccess"),
          onFailure: /* @__PURE__ */ __name(function(err) {
            return reject(err);
          }, "onFailure")
        }, clientMetadata);
      });
    }, AuthClass2.prototype.verifyUserAttributeSubmit = function(user, attr, code) {
      return code ? new Promise(function(resolve, reject) {
        user.verifyAttribute(attr, code, {
          onSuccess: /* @__PURE__ */ __name(function(data) {
            resolve(data);
          }, "onSuccess"),
          onFailure: /* @__PURE__ */ __name(function(err) {
            reject(err);
          }, "onFailure")
        });
      }) : this.rejectAuthError(AuthErrorTypes.EmptyCode);
    }, AuthClass2.prototype.verifyCurrentUserAttribute = function(attr) {
      var that = this;
      return that.currentUserPoolUser().then(function(user) {
        return that.verifyUserAttribute(user, attr);
      });
    }, AuthClass2.prototype.verifyCurrentUserAttributeSubmit = function(attr, code) {
      var that = this;
      return that.currentUserPoolUser().then(function(user) {
        return that.verifyUserAttributeSubmit(user, attr, code);
      });
    }, AuthClass2.prototype.cognitoIdentitySignOut = function(opts, user) {
      return __awaiter(this, void 0, void 0, function() {
        var e_11, isSignedInHostedUI, _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return _a.trys.push([0, 2, , 3]), [4, this._storageSync];
            case 1:
              return _a.sent(), [3, 3];
            case 2:
              throw e_11 = _a.sent(), logger.debug("Failed to sync cache info into memory", e_11), e_11;
            case 3:
              return isSignedInHostedUI = this._oAuthHandler && this._storage.getItem("amplify-signin-with-hostedUI") === "true", [2, new Promise(function(res, rej) {
                if (opts && opts.global) {
                  logger.debug("user global sign out", user);
                  var clientMetadata = _this._config.clientMetadata;
                  user.getSession(function(err, result) {
                    return __awaiter(_this, void 0, void 0, function() {
                      var cleanUpError_7, _this2 = this;
                      return __generator(this, function(_a2) {
                        switch (_a2.label) {
                          case 0:
                            if (!err) return [3, 5];
                            if (logger.debug("failed to get the user session", err), !this.isSessionInvalid(err)) return [3, 4];
                            _a2.label = 1;
                          case 1:
                            return _a2.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(user)];
                          case 2:
                            return _a2.sent(), [3, 4];
                          case 3:
                            return cleanUpError_7 = _a2.sent(), rej(new Error("Session is invalid due to: " + err.message + " and failed to clean up invalid session: " + cleanUpError_7.message)), [
                              2
                              /*return*/
                            ];
                          case 4:
                            return [2, rej(err)];
                          case 5:
                            return user.globalSignOut({
                              onSuccess: /* @__PURE__ */ __name(function(data) {
                                if (logger.debug("global sign out success"), isSignedInHostedUI)
                                  _this2.oAuthSignOutRedirect(res, rej);
                                else
                                  return res();
                              }, "onSuccess"),
                              onFailure: /* @__PURE__ */ __name(function(err2) {
                                return logger.debug("global sign out failed", err2), rej(err2);
                              }, "onFailure")
                            }), [
                              2
                              /*return*/
                            ];
                        }
                      });
                    });
                  }, { clientMetadata });
                } else
                  logger.debug("user sign out", user), user.signOut(function() {
                    if (isSignedInHostedUI)
                      _this.oAuthSignOutRedirect(res, rej);
                    else
                      return res();
                  });
              })];
          }
        });
      });
    }, AuthClass2.prototype.oAuthSignOutRedirect = function(resolve, reject) {
      var isBrowser2 = browserOrNode().isBrowser;
      isBrowser2 ? this.oAuthSignOutRedirectOrReject(reject) : this.oAuthSignOutAndResolve(resolve);
    }, AuthClass2.prototype.oAuthSignOutAndResolve = function(resolve) {
      this._oAuthHandler.signOut(), resolve();
    }, AuthClass2.prototype.oAuthSignOutRedirectOrReject = function(reject) {
      this._oAuthHandler.signOut(), setTimeout(function() {
        return reject(Error("Signout timeout fail"));
      }, 3e3);
    }, AuthClass2.prototype.signOut = function(opts) {
      return opts === void 0 && (opts = {}), __awaiter(this, void 0, void 0, function() {
        var e_13, user;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return _a.trys.push([0, 2, , 3]), [4, this.cleanCachedItems()];
            case 1:
              return _a.sent(), [3, 3];
            case 2:
              return _a.sent(), logger.debug("failed to clear cached items"), [3, 3];
            case 3:
              if (!this.userPool) return [3, 11];
              _a.label = 4;
            case 4:
              return _a.trys.push([4, 6, , 7]), [4, this._storageSync];
            case 5:
              return _a.sent(), [3, 7];
            case 6:
              throw e_13 = _a.sent(), logger.debug("Failed to sync cache info into memory", e_13), e_13;
            case 7:
              return user = this.userPool.getCurrentUser(), user ? [4, this.cognitoIdentitySignOut(opts, user)] : [3, 9];
            case 8:
              return _a.sent(), [3, 10];
            case 9:
              logger.debug("no current Cognito user"), _a.label = 10;
            case 10:
              return [3, 12];
            case 11:
              logger.debug("no Cognito User pool"), _a.label = 12;
            case 12:
              return dispatchAuthEvent("signOut", this.user, "A user has been signed out"), this.user = null, [
                2
                /*return*/
              ];
          }
        });
      });
    }, AuthClass2.prototype.cleanCachedItems = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.Credentials.clear()];
            case 1:
              return _a.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, AuthClass2.prototype.changePassword = function(user, oldPassword, newPassword, clientMetadata) {
      var _this = this;
      return clientMetadata === void 0 && (clientMetadata = this._config.clientMetadata), new Promise(function(resolve, reject) {
        _this.userSession(user).then(function(session) {
          user.changePassword(oldPassword, newPassword, function(err, data) {
            return err ? (logger.debug("change password failure", err), reject(err)) : resolve(data);
          }, clientMetadata);
        });
      });
    }, AuthClass2.prototype.forgotPassword = function(username, clientMetadata) {
      if (clientMetadata === void 0 && (clientMetadata = this._config.clientMetadata), !this.userPool)
        return this.rejectNoUserPool();
      if (!username)
        return this.rejectAuthError(AuthErrorTypes.EmptyUsername);
      var user = this.createCognitoUser(username);
      return new Promise(function(resolve, reject) {
        user.forgotPassword({
          onSuccess: /* @__PURE__ */ __name(function() {
            resolve();
          }, "onSuccess"),
          onFailure: /* @__PURE__ */ __name(function(err) {
            logger.debug("forgot password failure", err), dispatchAuthEvent("forgotPassword_failure", err, username + " forgotPassword failed"), reject(err);
          }, "onFailure"),
          inputVerificationCode: /* @__PURE__ */ __name(function(data) {
            dispatchAuthEvent("forgotPassword", user, username + " has initiated forgot password flow"), resolve(data);
          }, "inputVerificationCode")
        }, clientMetadata);
      });
    }, AuthClass2.prototype.forgotPasswordSubmit = function(username, code, password, clientMetadata) {
      if (clientMetadata === void 0 && (clientMetadata = this._config.clientMetadata), !this.userPool)
        return this.rejectNoUserPool();
      if (!username)
        return this.rejectAuthError(AuthErrorTypes.EmptyUsername);
      if (!code)
        return this.rejectAuthError(AuthErrorTypes.EmptyCode);
      if (!password)
        return this.rejectAuthError(AuthErrorTypes.EmptyPassword);
      var user = this.createCognitoUser(username);
      return new Promise(function(resolve, reject) {
        user.confirmPassword(code, password, {
          onSuccess: /* @__PURE__ */ __name(function(success) {
            dispatchAuthEvent("forgotPasswordSubmit", user, username + " forgotPasswordSubmit successful"), resolve(success);
          }, "onSuccess"),
          onFailure: /* @__PURE__ */ __name(function(err) {
            dispatchAuthEvent("forgotPasswordSubmit_failure", err, username + " forgotPasswordSubmit failed"), reject(err);
          }, "onFailure")
        }, clientMetadata);
      });
    }, AuthClass2.prototype.currentUserInfo = function() {
      return __awaiter(this, void 0, void 0, function() {
        var source, user, attributes, userAttrs, credentials, e_14, info, err_2, user;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return source = this.Credentials.getCredSource(), !source || source === "aws" || source === "userPool" ? [4, this.currentUserPoolUser().catch(function(err) {
                return logger.error(err);
              })] : [3, 9];
            case 1:
              if (user = _a.sent(), !user)
                return [2, null];
              _a.label = 2;
            case 2:
              return _a.trys.push([2, 8, , 9]), [4, this.userAttributes(user)];
            case 3:
              attributes = _a.sent(), userAttrs = this.attributesToObject(attributes), credentials = null, _a.label = 4;
            case 4:
              return _a.trys.push([4, 6, , 7]), [4, this.currentCredentials()];
            case 5:
              return credentials = _a.sent(), [3, 7];
            case 6:
              return e_14 = _a.sent(), logger.debug("Failed to retrieve credentials while getting current user info", e_14), [3, 7];
            case 7:
              return info = {
                id: credentials ? credentials.identityId : void 0,
                username: user.getUsername(),
                attributes: userAttrs
              }, [2, info];
            case 8:
              return err_2 = _a.sent(), logger.error("currentUserInfo error", err_2), [2, {}];
            case 9:
              return source === "federated" ? (user = this.user, [2, user || {}]) : [
                2
                /*return*/
              ];
          }
        });
      });
    }, AuthClass2.prototype.federatedSignIn = function(providerOrOptions, response, user) {
      return __awaiter(this, void 0, void 0, function() {
        var options, provider, customState, client_id, redirect_uri, provider, loggedInUser, token, identity_id, expires_at, credentials, currentUser;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this._config.identityPoolId && !this._config.userPoolId)
                throw new Error("Federation requires either a User Pool or Identity Pool in config");
              if (typeof providerOrOptions > "u" && this._config.identityPoolId && !this._config.userPoolId)
                throw new Error("Federation with Identity Pools requires tokens passed as arguments");
              return isFederatedSignInOptions(providerOrOptions) || isFederatedSignInOptionsCustom(providerOrOptions) || hasCustomState(providerOrOptions) || typeof providerOrOptions > "u" ? (options = providerOrOptions || {
                provider: CognitoHostedUIIdentityProvider.Cognito
              }, provider = isFederatedSignInOptions(options) ? options.provider : options.customProvider, customState = (isFederatedSignInOptions(options), options.customState), this._config.userPoolId && (client_id = isCognitoHostedOpts(this._config.oauth) ? this._config.userPoolWebClientId : this._config.oauth.clientID, redirect_uri = isCognitoHostedOpts(this._config.oauth) ? this._config.oauth.redirectSignIn : this._config.oauth.redirectUri, this._oAuthHandler.oauthSignIn(this._config.oauth.responseType, this._config.oauth.domain, redirect_uri, client_id, provider, customState)), [3, 4]) : [3, 1];
            case 1:
              provider = providerOrOptions;
              try {
                loggedInUser = JSON.stringify(JSON.parse(this._storage.getItem("aws-amplify-federatedInfo")).user), loggedInUser && logger.warn("There is already a signed in user: " + loggedInUser + ` in your app.
																	You should not call Auth.federatedSignIn method again as it may cause unexpected behavior.`);
              } catch {
              }
              return token = response.token, identity_id = response.identity_id, expires_at = response.expires_at, [4, this.Credentials.set({ provider, token, identity_id, user, expires_at }, "federation")];
            case 2:
              return credentials = _a.sent(), [4, this.currentAuthenticatedUser()];
            case 3:
              return currentUser = _a.sent(), dispatchAuthEvent("signIn", currentUser, "A user " + currentUser.username + " has been signed in"), logger.debug("federated sign in credentials", credentials), [2, credentials];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AuthClass2.prototype._handleAuthResponse = function(URL) {
      return __awaiter(this, void 0, void 0, function() {
        var currentUrl, hasCodeOrError, hasTokenOrError, _a, accessToken, idToken, refreshToken, state, session, credentials, isCustomStateIncluded, currentUser, customState, err_3;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (this.oAuthFlowInProgress)
                return logger.debug("Skipping URL " + URL + " current flow in progress"), [
                  2
                  /*return*/
                ];
              _b.label = 1;
            case 1:
              if (_b.trys.push([1, , 8, 9]), this.oAuthFlowInProgress = !0, !this._config.userPoolId)
                throw new Error("OAuth responses require a User Pool defined in config");
              if (dispatchAuthEvent("parsingCallbackUrl", { url: URL }, "The callback url is being parsed"), currentUrl = URL || (browserOrNode().isBrowser ? window.location.href : ""), hasCodeOrError = !!(urlExports.parse(currentUrl).query || "").split("&").map(function(entry) {
                return entry.split("=");
              }).find(function(_a2) {
                var _b2 = __read(_a2, 1), k = _b2[0];
                return k === "code" || k === "error";
              }), hasTokenOrError = !!(urlExports.parse(currentUrl).hash || "#").substr(1).split("&").map(function(entry) {
                return entry.split("=");
              }).find(function(_a2) {
                var _b2 = __read(_a2, 1), k = _b2[0];
                return k === "access_token" || k === "error";
              }), !(hasCodeOrError || hasTokenOrError)) return [3, 7];
              this._storage.setItem("amplify-redirected-from-hosted-ui", "true"), _b.label = 2;
            case 2:
              return _b.trys.push([2, 6, , 7]), [4, this._oAuthHandler.handleAuthResponse(currentUrl)];
            case 3:
              return _a = _b.sent(), accessToken = _a.accessToken, idToken = _a.idToken, refreshToken = _a.refreshToken, state = _a.state, session = new CognitoUserSession({
                IdToken: new CognitoIdToken({ IdToken: idToken }),
                RefreshToken: new CognitoRefreshToken({
                  RefreshToken: refreshToken
                }),
                AccessToken: new CognitoAccessToken({
                  AccessToken: accessToken
                })
              }), credentials = void 0, this._config.identityPoolId ? [4, this.Credentials.set(session, "session")] : [3, 5];
            case 4:
              credentials = _b.sent(), logger.debug("AWS credentials", credentials), _b.label = 5;
            case 5:
              return isCustomStateIncluded = /-/.test(state), currentUser = this.createCognitoUser(session.getIdToken().decodePayload()["cognito:username"]), currentUser.setSignInUserSession(session), window && typeof window.history < "u" && window.history.replaceState(window.history.state, "", this._config.oauth.redirectSignIn), dispatchAuthEvent("signIn", currentUser, "A user " + currentUser.getUsername() + " has been signed in"), dispatchAuthEvent("cognitoHostedUI", currentUser, "A user " + currentUser.getUsername() + " has been signed in via Cognito Hosted UI"), isCustomStateIncluded && (customState = state.split("-").splice(1).join("-"), dispatchAuthEvent("customOAuthState", urlSafeDecode(customState), "State for user " + currentUser.getUsername())), [2, credentials];
            case 6:
              return err_3 = _b.sent(), logger.debug("Error in cognito hosted auth response", err_3), window && typeof window.history < "u" && window.history.replaceState(window.history.state, "", this._config.oauth.redirectSignIn), dispatchAuthEvent("signIn_failure", err_3, "The OAuth response flow failed"), dispatchAuthEvent("cognitoHostedUI_failure", err_3, "A failure occurred when returning to the Cognito Hosted UI"), dispatchAuthEvent("customState_failure", err_3, "A failure occurred when returning state"), [3, 7];
            case 7:
              return [3, 9];
            case 8:
              return this.oAuthFlowInProgress = !1, [
                7
                /*endfinally*/
              ];
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AuthClass2.prototype.essentialCredentials = function(credentials) {
      return {
        accessKeyId: credentials.accessKeyId,
        sessionToken: credentials.sessionToken,
        secretAccessKey: credentials.secretAccessKey,
        identityId: credentials.identityId,
        authenticated: credentials.authenticated
      };
    }, AuthClass2.prototype.attributesToObject = function(attributes) {
      var _this = this, obj = {};
      return attributes && attributes.map(function(attribute) {
        attribute.Name === "email_verified" || attribute.Name === "phone_number_verified" ? obj[attribute.Name] = _this.isTruthyString(attribute.Value) || attribute.Value === !0 : obj[attribute.Name] = attribute.Value;
      }), obj;
    }, AuthClass2.prototype.isTruthyString = function(value) {
      return typeof value.toLowerCase == "function" && value.toLowerCase() === "true";
    }, AuthClass2.prototype.createCognitoUser = function(username) {
      var userData = {
        Username: username,
        Pool: this.userPool
      };
      userData.Storage = this._storage;
      var authenticationFlowType = this._config.authenticationFlowType, user = new CognitoUser(userData);
      return authenticationFlowType && user.setAuthenticationFlowType(authenticationFlowType), user;
    }, AuthClass2.prototype._isValidAuthStorage = function(obj) {
      return !!obj && typeof obj.getItem == "function" && typeof obj.setItem == "function" && typeof obj.removeItem == "function" && typeof obj.clear == "function";
    }, AuthClass2.prototype.noUserPoolErrorHandler = function(config) {
      return config && (!config.userPoolId || !config.identityPoolId) ? AuthErrorTypes.MissingAuthConfig : AuthErrorTypes.NoConfig;
    }, AuthClass2.prototype.rejectAuthError = function(type) {
      return Promise.reject(new AuthError(type));
    }, AuthClass2.prototype.rejectNoUserPool = function() {
      var type = this.noUserPoolErrorHandler(this._config);
      return Promise.reject(new NoUserPoolError(type));
    }, AuthClass2.prototype.rememberDevice = function() {
      return __awaiter(this, void 0, void 0, function() {
        var currUser, error_2;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return _a.trys.push([0, 2, , 3]), [4, this.currentUserPoolUser()];
            case 1:
              return currUser = _a.sent(), [3, 3];
            case 2:
              return error_2 = _a.sent(), logger.debug("The user is not authenticated by the error", error_2), [2, Promise.reject("The user is not authenticated")];
            case 3:
              return currUser.getCachedDeviceKeyAndPassword(), [2, new Promise(function(res, rej) {
                currUser.setDeviceStatusRemembered({
                  onSuccess: /* @__PURE__ */ __name(function(data) {
                    res(data);
                  }, "onSuccess"),
                  onFailure: /* @__PURE__ */ __name(function(err) {
                    err.code === "InvalidParameterException" ? rej(new AuthError(AuthErrorTypes.DeviceConfig)) : err.code === "NetworkError" ? rej(new AuthError(AuthErrorTypes.NetworkError)) : rej(err);
                  }, "onFailure")
                });
              })];
          }
        });
      });
    }, AuthClass2.prototype.forgetDevice = function() {
      return __awaiter(this, void 0, void 0, function() {
        var currUser, error_3;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return _a.trys.push([0, 2, , 3]), [4, this.currentUserPoolUser()];
            case 1:
              return currUser = _a.sent(), [3, 3];
            case 2:
              return error_3 = _a.sent(), logger.debug("The user is not authenticated by the error", error_3), [2, Promise.reject("The user is not authenticated")];
            case 3:
              return currUser.getCachedDeviceKeyAndPassword(), [2, new Promise(function(res, rej) {
                currUser.forgetDevice({
                  onSuccess: /* @__PURE__ */ __name(function(data) {
                    res(data);
                  }, "onSuccess"),
                  onFailure: /* @__PURE__ */ __name(function(err) {
                    err.code === "InvalidParameterException" ? rej(new AuthError(AuthErrorTypes.DeviceConfig)) : err.code === "NetworkError" ? rej(new AuthError(AuthErrorTypes.NetworkError)) : rej(err);
                  }, "onFailure")
                });
              })];
          }
        });
      });
    }, AuthClass2.prototype.fetchDevices = function() {
      return __awaiter(this, void 0, void 0, function() {
        var currUser, error_4;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return _a.trys.push([0, 2, , 3]), [4, this.currentUserPoolUser()];
            case 1:
              return currUser = _a.sent(), [3, 3];
            case 2:
              throw error_4 = _a.sent(), logger.debug("The user is not authenticated by the error", error_4), new Error("The user is not authenticated");
            case 3:
              return currUser.getCachedDeviceKeyAndPassword(), [2, new Promise(function(res, rej) {
                var cb = {
                  onSuccess: /* @__PURE__ */ __name(function(data) {
                    var deviceList = data.Devices.map(function(device) {
                      var deviceName = device.DeviceAttributes.find(function(_a2) {
                        var Name = _a2.Name;
                        return Name === "device_name";
                      }) || {}, deviceInfo = {
                        id: device.DeviceKey,
                        name: deviceName.Value
                      };
                      return deviceInfo;
                    });
                    res(deviceList);
                  }, "onSuccess"),
                  onFailure: /* @__PURE__ */ __name(function(err) {
                    err.code === "InvalidParameterException" ? rej(new AuthError(AuthErrorTypes.DeviceConfig)) : err.code === "NetworkError" ? rej(new AuthError(AuthErrorTypes.NetworkError)) : rej(err);
                  }, "onFailure")
                };
                currUser.listDevices(MAX_DEVICES, null, cb);
              })];
          }
        });
      });
    }, AuthClass2;
  })()
), Auth = new AuthClass(null);
Amplify.register(Auth);
export {
  Auth,
  AuthErrorStrings,
  CognitoHostedUIIdentityProvider,
  CognitoUser,
  CookieStorage,
  GRAPHQL_AUTH_MODE,
  appendToCognitoUserAgent,
  Auth as default
};
//# sourceMappingURL=index-BIij-EPo.mjs.map
