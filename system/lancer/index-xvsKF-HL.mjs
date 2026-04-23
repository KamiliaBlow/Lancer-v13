var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { a as buildExports, C as ConsoleLogger, w as withMemoization, k as composeTransferHandler, u as userAgentMiddleware, r as retryMiddleware, l as parseMetadata, d as __awaiter$k, e as __generator$k, m as fromUtf8, n as jitteredBackoff, g as getAmplifyUserAgent, o as getRetryDecider, q as getDnsSuffix, U as USER_AGENT_HEADER, s as composeServiceApi, H as Hub, f as Category, i as Credentials, t as StorageAction, S as StorageHelper, p as parseAWSExports, j as Amplify } from "./constants-DWjI_1-6.mjs";
var getSignedHeaders = /* @__PURE__ */ __name(function(headers) {
  return Object.keys(headers).map(function(key) {
    return key.toLowerCase();
  }).sort().join(";");
}, "getSignedHeaders"), ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm", AMZ_DATE_QUERY_PARAM = "X-Amz-Date", CREDENTIAL_QUERY_PARAM = "X-Amz-Credential", EXPIRES_QUERY_PARAM = "X-Amz-Expires", SIGNATURE_QUERY_PARAM = "X-Amz-Signature", SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders", TOKEN_QUERY_PARAM = "X-Amz-Security-Token", AUTH_HEADER = "authorization", HOST_HEADER = "host", AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase(), TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase(), KEY_TYPE_IDENTIFIER = "aws4_request", SHA256_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256", SIGNATURE_IDENTIFIER = "AWS4", EMPTY_HASH = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD", getCredentialScope = /* @__PURE__ */ __name(function(date, region, service) {
  return "".concat(date, "/").concat(region, "/").concat(service, "/").concat(KEY_TYPE_IDENTIFIER);
}, "getCredentialScope"), getFormattedDates = /* @__PURE__ */ __name(function(date) {
  var longDate = date.toISOString().replace(/[:\-]|\.\d{3}/g, "");
  return {
    longDate,
    shortDate: longDate.slice(0, 8)
  };
}, "getFormattedDates"), getSigningValues = /* @__PURE__ */ __name(function(_a) {
  var credentials = _a.credentials, _b = _a.signingDate, signingDate = _b === void 0 ? /* @__PURE__ */ new Date() : _b, signingRegion = _a.signingRegion, signingService = _a.signingService, _c = _a.uriEscapePath, uriEscapePath = _c === void 0 ? !0 : _c, accessKeyId = credentials.accessKeyId, secretAccessKey = credentials.secretAccessKey, sessionToken = credentials.sessionToken, _d = getFormattedDates(signingDate), longDate = _d.longDate, shortDate = _d.shortDate, credentialScope = getCredentialScope(shortDate, signingRegion, signingService);
  return {
    accessKeyId,
    credentialScope,
    longDate,
    secretAccessKey,
    sessionToken,
    shortDate,
    signingRegion,
    signingService,
    uriEscapePath
  };
}, "getSigningValues"), SHORT_TO_HEX = {};
for (var i = 0; i < 256; i++) {
  var encodedByte = i.toString(16).toLowerCase();
  encodedByte.length === 1 && (encodedByte = "0" + encodedByte), SHORT_TO_HEX[i] = encodedByte;
}
function toHex(bytes) {
  for (var out = "", i = 0; i < bytes.byteLength; i++)
    out += SHORT_TO_HEX[bytes[i]];
  return out;
}
__name(toHex, "toHex");
var getHashedData = /* @__PURE__ */ __name(function(key, data) {
  var sha256 = new buildExports.Sha256(key);
  sha256.update(data);
  var hashedData = sha256.digestSync();
  return hashedData;
}, "getHashedData"), getHashedDataAsHex = /* @__PURE__ */ __name(function(key, data) {
  var hashedData = getHashedData(key, data);
  return toHex(hashedData);
}, "getHashedDataAsHex"), __read$9 = function(o, n) {
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
}, getCanonicalHeaders = /* @__PURE__ */ __name(function(headers) {
  return Object.entries(headers).map(function(_a) {
    var _b, _c = __read$9(_a, 2), key = _c[0], value = _c[1];
    return {
      key: key.toLowerCase(),
      value: (_b = value == null ? void 0 : value.trim().replace(/\s+/g, " ")) !== null && _b !== void 0 ? _b : ""
    };
  }).sort(function(a, b) {
    return a.key < b.key ? -1 : 1;
  }).map(function(entry) {
    return "".concat(entry.key, ":").concat(entry.value, `
`);
  }).join("");
}, "getCanonicalHeaders"), __read$8 = function(o, n) {
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
}, getCanonicalQueryString = /* @__PURE__ */ __name(function(searchParams) {
  return Array.from(searchParams).sort(function(_a, _b) {
    var _c = __read$8(_a, 2), keyA = _c[0], valA = _c[1], _d = __read$8(_b, 2), keyB = _d[0], valB = _d[1];
    return keyA === keyB ? valA < valB ? -1 : 1 : keyA < keyB ? -1 : 1;
  }).map(function(_a) {
    var _b = __read$8(_a, 2), key = _b[0], val = _b[1];
    return "".concat(escapeUri(key), "=").concat(escapeUri(val));
  }).join("&");
}, "getCanonicalQueryString"), escapeUri = /* @__PURE__ */ __name(function(uri) {
  return encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode$1);
}, "escapeUri"), hexEncode$1 = /* @__PURE__ */ __name(function(c) {
  return "%".concat(c.charCodeAt(0).toString(16).toUpperCase());
}, "hexEncode$1"), getCanonicalUri = /* @__PURE__ */ __name(function(pathname, uriEscapePath) {
  return uriEscapePath === void 0 && (uriEscapePath = !0), pathname ? uriEscapePath ? encodeURIComponent(pathname).replace(/%2F/g, "/") : pathname : "/";
}, "getCanonicalUri"), getHashedPayload = /* @__PURE__ */ __name(function(body) {
  if (body == null)
    return EMPTY_HASH;
  if (isSourceData(body)) {
    var hashedData = getHashedDataAsHex(null, body);
    return hashedData;
  }
  return UNSIGNED_PAYLOAD;
}, "getHashedPayload"), isSourceData = /* @__PURE__ */ __name(function(body) {
  return typeof body == "string" || ArrayBuffer.isView(body) || isArrayBuffer$1(body);
}, "isSourceData"), isArrayBuffer$1 = /* @__PURE__ */ __name(function(arg) {
  return typeof ArrayBuffer == "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
}, "isArrayBuffer$1"), getCanonicalRequest = /* @__PURE__ */ __name(function(_a, uriEscapePath) {
  var body = _a.body, headers = _a.headers, method = _a.method, url = _a.url;
  return uriEscapePath === void 0 && (uriEscapePath = !0), [
    method,
    getCanonicalUri(url.pathname, uriEscapePath),
    getCanonicalQueryString(url.searchParams),
    getCanonicalHeaders(headers),
    getSignedHeaders(headers),
    getHashedPayload(body)
  ].join(`
`);
}, "getCanonicalRequest"), getSigningKey = /* @__PURE__ */ __name(function(secretAccessKey, date, region, service) {
  var key = "".concat(SIGNATURE_IDENTIFIER).concat(secretAccessKey), dateKey = getHashedData(key, date), regionKey = getHashedData(dateKey, region), serviceKey = getHashedData(regionKey, service), signingKey = getHashedData(serviceKey, KEY_TYPE_IDENTIFIER);
  return signingKey;
}, "getSigningKey"), getStringToSign = /* @__PURE__ */ __name(function(date, credentialScope, hashedRequest) {
  return [SHA256_ALGORITHM_IDENTIFIER, date, credentialScope, hashedRequest].join(`
`);
}, "getStringToSign"), getSignature = /* @__PURE__ */ __name(function(request, _a) {
  var credentialScope = _a.credentialScope, longDate = _a.longDate, secretAccessKey = _a.secretAccessKey, shortDate = _a.shortDate, signingRegion = _a.signingRegion, signingService = _a.signingService, uriEscapePath = _a.uriEscapePath, canonicalRequest = getCanonicalRequest(request, uriEscapePath), hashedRequest = getHashedDataAsHex(null, canonicalRequest), stringToSign = getStringToSign(longDate, credentialScope, hashedRequest), signature = getHashedDataAsHex(getSigningKey(secretAccessKey, shortDate, signingRegion, signingService), stringToSign);
  return signature;
}, "getSignature"), __assign$i = function() {
  return __assign$i = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$i.apply(this, arguments);
}, signRequest = /* @__PURE__ */ __name(function(request, options) {
  var signingValues = getSigningValues(options), accessKeyId = signingValues.accessKeyId, credentialScope = signingValues.credentialScope, longDate = signingValues.longDate, sessionToken = signingValues.sessionToken, headers = __assign$i({}, request.headers);
  headers[HOST_HEADER] = request.url.host, headers[AMZ_DATE_HEADER] = longDate, sessionToken && (headers[TOKEN_HEADER] = sessionToken);
  var requestToSign = __assign$i(__assign$i({}, request), { headers }), signature = getSignature(requestToSign, signingValues), credentialEntry = "Credential=".concat(accessKeyId, "/").concat(credentialScope), signedHeadersEntry = "SignedHeaders=".concat(getSignedHeaders(headers)), signatureEntry = "Signature=".concat(signature);
  return headers[AUTH_HEADER] = "".concat(SHA256_ALGORITHM_IDENTIFIER, " ").concat(credentialEntry, ", ").concat(signedHeadersEntry, ", ").concat(signatureEntry), requestToSign;
}, "signRequest"), __assign$h = function() {
  return __assign$h = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$h.apply(this, arguments);
}, __rest = function(s, e) {
  var t = {};
  for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0 && (t[p] = s[p]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
      e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]) && (t[p[i]] = s[p[i]]);
  return t;
}, __read$7 = function(o, n) {
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
}, presignUrl = /* @__PURE__ */ __name(function(_a, _b) {
  var _c, _d, _e, _f, body = _a.body, _g = _a.method, method = _g === void 0 ? "GET" : _g, url = _a.url, expiration = _b.expiration, options = __rest(_b, ["expiration"]), signingValues = getSigningValues(options), accessKeyId = signingValues.accessKeyId, credentialScope = signingValues.credentialScope, longDate = signingValues.longDate, sessionToken = signingValues.sessionToken, presignedUrl = new URL(url);
  Object.entries(__assign$h(__assign$h((_c = {}, _c[ALGORITHM_QUERY_PARAM] = SHA256_ALGORITHM_IDENTIFIER, _c[CREDENTIAL_QUERY_PARAM] = "".concat(accessKeyId, "/").concat(credentialScope), _c[AMZ_DATE_QUERY_PARAM] = longDate, _c[SIGNED_HEADERS_QUERY_PARAM] = HOST_HEADER, _c), expiration && (_d = {}, _d[EXPIRES_QUERY_PARAM] = expiration.toString(), _d)), sessionToken && (_e = {}, _e[TOKEN_QUERY_PARAM] = sessionToken, _e))).forEach(function(_a2) {
    var _b2 = __read$7(_a2, 2), key = _b2[0], value = _b2[1];
    presignedUrl.searchParams.append(key, value);
  });
  var requestToSign = {
    body,
    headers: (_f = {}, _f[HOST_HEADER] = url.host, _f),
    method,
    url: presignedUrl
  }, signature = getSignature(requestToSign, signingValues);
  return presignedUrl.searchParams.append(SIGNATURE_QUERY_PARAM, signature), presignedUrl;
}, "presignUrl"), getSkewCorrectedDate = /* @__PURE__ */ __name(function(systemClockOffset) {
  return new Date(Date.now() + systemClockOffset);
}, "getSkewCorrectedDate"), SKEW_WINDOW = 300 * 1e3, isClockSkewed = /* @__PURE__ */ __name(function(clockTimeInMilliseconds, clockOffsetInMilliseconds) {
  return Math.abs(getSkewCorrectedDate(clockOffsetInMilliseconds).getTime() - clockTimeInMilliseconds) >= SKEW_WINDOW;
}, "isClockSkewed"), getUpdatedSystemClockOffset = /* @__PURE__ */ __name(function(clockTimeInMilliseconds, currentSystemClockOffset) {
  return isClockSkewed(clockTimeInMilliseconds, currentSystemClockOffset) ? clockTimeInMilliseconds - Date.now() : currentSystemClockOffset;
}, "getUpdatedSystemClockOffset"), __awaiter$j = function(thisArg, _arguments, P, generator) {
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
}, __generator$j = function(thisArg, body) {
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
}, signingMiddleware = /* @__PURE__ */ __name(function(_a) {
  var credentials = _a.credentials, region = _a.region, service = _a.service, _b = _a.uriEscapePath, uriEscapePath = _b === void 0 ? !0 : _b, currentSystemClockOffset;
  return function(next) {
    return /* @__PURE__ */ __name(function(request) {
      return __awaiter$j(this, void 0, void 0, function() {
        var signRequestOptions, _a2, signedRequest, response, dateString, _b2;
        return __generator$j(this, function(_c) {
          switch (_c.label) {
            case 0:
              return currentSystemClockOffset = currentSystemClockOffset ?? 0, _b2 = {}, typeof credentials != "function" ? [3, 2] : [4, credentials()];
            case 1:
              return _a2 = _c.sent(), [3, 3];
            case 2:
              _a2 = credentials, _c.label = 3;
            case 3:
              return signRequestOptions = (_b2.credentials = _a2, _b2.signingDate = getSkewCorrectedDate(currentSystemClockOffset), _b2.signingRegion = region, _b2.signingService = service, _b2.uriEscapePath = uriEscapePath, _b2), [4, signRequest(request, signRequestOptions)];
            case 4:
              return signedRequest = _c.sent(), [4, next(signedRequest)];
            case 5:
              return response = _c.sent(), dateString = getDateHeader(response), dateString && (currentSystemClockOffset = getUpdatedSystemClockOffset(Date.parse(dateString), currentSystemClockOffset)), [2, response];
          }
        });
      });
    }, "signingMiddleware");
  };
}, "signingMiddleware"), getDateHeader = /* @__PURE__ */ __name(function(_a) {
  var _b, _c, _d = _a === void 0 ? {} : _a, headers = _d.headers;
  return (_c = (_b = headers == null ? void 0 : headers.date) !== null && _b !== void 0 ? _b : headers == null ? void 0 : headers.Date) !== null && _c !== void 0 ? _c : headers == null ? void 0 : headers["x-amz-date"];
}, "getDateHeader"), extendedEncodeURIComponent = /* @__PURE__ */ __name(function(uri) {
  var extendedCharacters = /[!'()*]/g;
  return encodeURIComponent(uri).replace(extendedCharacters, hexEncode);
}, "extendedEncodeURIComponent"), hexEncode = /* @__PURE__ */ __name(function(c) {
  return "%".concat(c.charCodeAt(0).toString(16).toUpperCase());
}, "hexEncode"), SEND_UPLOAD_PROGRESS_EVENT = "sendUploadProgress", SEND_DOWNLOAD_PROGRESS_EVENT = "sendDownloadProgress", NETWORK_ERROR_MESSAGE = "Network Error", NETWORK_ERROR_CODE = "ECONNABORTED", ABORT_ERROR_MESSAGE = "Request aborted", ABORT_ERROR_CODE = "ERR_ABORTED", CANCELED_ERROR_MESSAGE = "canceled", CANCELED_ERROR_CODE = "ERR_CANCELED", CONTENT_SHA256_HEADER = "x-amz-content-sha256", __awaiter$i = function(thisArg, _arguments, P, generator) {
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
}, __generator$i = function(thisArg, body) {
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
}, contentSha256Middleware = /* @__PURE__ */ __name(function(options) {
  return function(next) {
    return /* @__PURE__ */ __name(function(request) {
      return __awaiter$i(this, void 0, void 0, function() {
        var hash;
        return __generator$i(this, function(_a) {
          switch (_a.label) {
            case 0:
              return request.headers[CONTENT_SHA256_HEADER] ? [2, next(request)] : [3, 1];
            case 1:
              return [4, getHashedPayload(request.body)];
            case 2:
              return hash = _a.sent(), request.headers[CONTENT_SHA256_HEADER] = hash, [2, next(request)];
          }
        });
      });
    }, "contentSha256Middleware");
  };
}, "contentSha256Middleware"), __read$6 = function(o, n) {
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
}, logger$5 = new ConsoleLogger("xhr-http-handler"), xhrTransferHandler = /* @__PURE__ */ __name(function(request, options) {
  var url = request.url, method = request.method, headers = request.headers, body = request.body, emitter = options.emitter, responseType = options.responseType, abortSignal = options.abortSignal;
  return new Promise(function(resolve, reject) {
    var _a, xhr = new XMLHttpRequest();
    if (xhr.open(method.toUpperCase(), url.toString()), Object.entries(headers).filter(function(_a2) {
      var _b = __read$6(_a2, 1), header = _b[0];
      return !FORBIDDEN_HEADERS.includes(header);
    }).forEach(function(_a2) {
      var _b = __read$6(_a2, 2), header = _b[0], value = _b[1];
      xhr.setRequestHeader(header, value);
    }), xhr.responseType = responseType, emitter && (xhr.upload.addEventListener("progress", function(event) {
      emitter.emit(SEND_UPLOAD_PROGRESS_EVENT, event), logger$5.debug(event);
    }), xhr.addEventListener("progress", function(event) {
      emitter.emit(SEND_DOWNLOAD_PROGRESS_EVENT, event), logger$5.debug(event);
    })), xhr.addEventListener("error", function() {
      var error = simulateAxiosError(NETWORK_ERROR_MESSAGE, NETWORK_ERROR_CODE, xhr, options);
      logger$5.error(NETWORK_ERROR_MESSAGE), reject(error), xhr = null;
    }), xhr.addEventListener("abort", function() {
      if (!(!xhr || abortSignal != null && abortSignal.aborted)) {
        var error = simulateAxiosError(ABORT_ERROR_MESSAGE, ABORT_ERROR_CODE, xhr, options);
        logger$5.error(ABORT_ERROR_MESSAGE), reject(error), xhr = null;
      }
    }), xhr.addEventListener("readystatechange", function() {
      if (!(!xhr || xhr.readyState !== xhr.DONE)) {
        var onloadend = /* @__PURE__ */ __name(function() {
          if (xhr) {
            var responseHeaders = convertResponseHeaders(xhr.getAllResponseHeaders()), responseType2 = xhr.responseType, responseBlob = xhr.response, responseText = responseType2 === "text" ? xhr.responseText : "", bodyMixIn = {
              blob: /* @__PURE__ */ __name(function() {
                return Promise.resolve(responseBlob);
              }, "blob"),
              text: withMemoization(function() {
                return responseType2 === "blob" ? readBlobAsText(responseBlob) : Promise.resolve(responseText);
              }),
              json: /* @__PURE__ */ __name(function() {
                return Promise.reject(
                  // S3 does not support JSON response. So fail-fast here with nicer error message.
                  new Error("Parsing response to JSON is not implemented. Please use response.text() instead.")
                );
              }, "json")
            }, response = {
              statusCode: xhr.status,
              headers: responseHeaders,
              // The xhr.responseType is only set to 'blob' for streaming binary S3 object data. The streaming data is
              // exposed via public interface of Storage.get(). So we need to return the response as a Blob object for
              // backward compatibility. In other cases, the response payload is only used internally, we return it is
              // {@link ResponseBodyMixin}
              body: xhr.responseType === "blob" ? Object.assign(responseBlob, bodyMixIn) : bodyMixIn
            };
            resolve(response), xhr = null;
          }
        }, "onloadend");
        setTimeout(onloadend);
      }
    }), abortSignal) {
      var onCancelled = /* @__PURE__ */ __name(function() {
        if (xhr) {
          var canceledError = simulateAxiosCanceledError(CANCELED_ERROR_MESSAGE, CANCELED_ERROR_CODE, xhr, options);
          xhr.abort(), reject(canceledError), xhr = null;
        }
      }, "onCancelled");
      abortSignal.aborted ? onCancelled() : abortSignal.addEventListener("abort", onCancelled);
    }
    if (typeof ReadableStream == "function" && body instanceof ReadableStream)
      throw new Error("ReadableStream request payload is not supported.");
    xhr.send((_a = body) !== null && _a !== void 0 ? _a : null);
  });
}, "xhrTransferHandler"), simulateAxiosError = /* @__PURE__ */ __name(function(message, code, request, config) {
  return Object.assign(new Error(message), {
    code,
    config,
    request
  });
}, "simulateAxiosError"), simulateAxiosCanceledError = /* @__PURE__ */ __name(function(message, code, request, config) {
  var error = simulateAxiosError(message, code, request, config);
  return error.name = "CanceledError", error.__CANCEL__ = !0, error;
}, "simulateAxiosCanceledError"), isCancelError = /* @__PURE__ */ __name(function(error) {
  return !!(error != null && error.__CANCEL__);
}, "isCancelError"), convertResponseHeaders = /* @__PURE__ */ __name(function(xhrHeaders) {
  return xhrHeaders ? xhrHeaders.split(`\r
`).reduce(function(headerMap, line) {
    var parts = line.split(": "), header = parts.shift(), value = parts.join(": ");
    return headerMap[header.toLowerCase()] = value, headerMap;
  }, {}) : {};
}, "convertResponseHeaders"), readBlobAsText = /* @__PURE__ */ __name(function(blob) {
  var reader = new FileReader();
  return new Promise(function(resolve, reject) {
    reader.onloadend = function() {
      reader.readyState === FileReader.DONE && resolve(reader.result);
    }, reader.onerror = function() {
      reject(reader.error);
    }, reader.readAsText(blob);
  });
}, "readBlobAsText"), FORBIDDEN_HEADERS = ["host"], s3TransferHandler = composeTransferHandler(xhrTransferHandler, [
  contentSha256Middleware,
  userAgentMiddleware,
  retryMiddleware,
  signingMiddleware
]), parser = {
  parse: /* @__PURE__ */ __name(function(xmlStr) {
    var domParser = new DOMParser(), xml = domParser.parseFromString(xmlStr, "text/xml"), parsedObj = parseXmlNode(xml), rootKey = Object.keys(parsedObj)[0];
    return parsedObj[rootKey];
  }, "parse")
}, parseXmlNode = /* @__PURE__ */ __name(function(node) {
  var _a, _b, _c;
  if (isDocumentNode(node))
    return _a = {}, _a[node.documentElement.nodeName] = parseXmlNode(node.documentElement), _a;
  if (node.nodeType === Node.TEXT_NODE)
    return (_b = node.nodeValue) === null || _b === void 0 ? void 0 : _b.trim();
  if (isElementNode(node)) {
    if (isTextOnlyElementNode(node))
      return (_c = node.childNodes[0]) === null || _c === void 0 ? void 0 : _c.nodeValue;
    for (var nodeValue = {}, i = 0; i < node.attributes.length; i++) {
      var attr = node.attributes[i];
      isNamespaceAttributeName(attr.nodeName) || (nodeValue[attr.nodeName] = attr.nodeValue);
    }
    if (node.children.length > 0)
      for (var i = 0; i < node.children.length; i++) {
        var child = node.children[i], childValue = parseXmlNode(child);
        if (childValue !== void 0) {
          var childName = child.nodeName;
          nodeValue[childName] === void 0 ? nodeValue[childName] = childValue : Array.isArray(nodeValue[childName]) ? nodeValue[childName].push(childValue) : nodeValue[childName] = [nodeValue[childName], childValue];
        }
      }
    return Object.keys(nodeValue).length === 0 ? "" : nodeValue;
  }
}, "parseXmlNode"), isElementNode = /* @__PURE__ */ __name(function(node) {
  return node.nodeType === Node.ELEMENT_NODE;
}, "isElementNode"), isDocumentNode = /* @__PURE__ */ __name(function(node) {
  return node.nodeType === Node.DOCUMENT_NODE;
}, "isDocumentNode"), isTextOnlyElementNode = /* @__PURE__ */ __name(function(node) {
  var _a;
  return hasOnlyNamespaceAttributes(node) && node.children.length === 0 && ((_a = node.firstChild) === null || _a === void 0 ? void 0 : _a.nodeType) === Node.TEXT_NODE;
}, "isTextOnlyElementNode"), hasOnlyNamespaceAttributes = /* @__PURE__ */ __name(function(node) {
  for (var i = 0; i < node.attributes.length; i++) {
    var attr = node.attributes[i];
    if (!isNamespaceAttributeName(attr.nodeName))
      return !1;
  }
  return !0;
}, "hasOnlyNamespaceAttributes"), isNamespaceAttributeName = /* @__PURE__ */ __name(function(name) {
  return name === "xmlns" || name.startsWith("xmlns:");
}, "isNamespaceAttributeName");
function bytesToBase64(bytes) {
  var base64Str = Array.from(bytes, function(x) {
    return String.fromCodePoint(x);
  }).join("");
  return btoa(base64Str);
}
__name(bytesToBase64, "bytesToBase64");
function utf8Encode(input) {
  return new TextEncoder().encode(input);
}
__name(utf8Encode, "utf8Encode");
function toBase64(input) {
  return bytesToBase64(typeof input == "string" ? utf8Encode(input) : new Uint8Array(input.buffer, input.byteOffset, input.byteLength));
}
__name(toBase64, "toBase64");
var __awaiter$h = function(thisArg, _arguments, P, generator) {
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
}, __generator$h = function(thisArg, body) {
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
}, parseXmlError = /* @__PURE__ */ __name(function(response) {
  return __awaiter$h(void 0, void 0, void 0, function() {
    var statusCode, body, code, message, error, _a, _b;
    return __generator$h(this, function(_c) {
      switch (_c.label) {
        case 0:
          return !response || response.statusCode < 300 ? [
            2
            /*return*/
          ] : (statusCode = response.statusCode, [4, parseXmlBody(response)]);
        case 1:
          return body = _c.sent(), code = body != null && body.Code ? body.Code : statusCode === 404 ? "NotFound" : statusCode.toString(), message = (_b = (_a = body == null ? void 0 : body.message) !== null && _a !== void 0 ? _a : body == null ? void 0 : body.Message) !== null && _b !== void 0 ? _b : code, error = new Error(message), [2, Object.assign(error, {
            name: code,
            $metadata: parseMetadata(response)
          })];
      }
    });
  });
}, "parseXmlError"), parseXmlBody = /* @__PURE__ */ __name(function(response) {
  return __awaiter$h(void 0, void 0, void 0, function() {
    var data;
    return __generator$h(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (!response.body)
            throw new Error("S3 aborted request.");
          return [4, response.body.text()];
        case 1:
          if (data = _a.sent(), (data == null ? void 0 : data.length) > 0)
            try {
              return [2, parser.parse(data)];
            } catch {
              throw new Error("Failed to parse XML response.");
            }
          return [2, {}];
      }
    });
  });
}, "parseXmlBody"), __values$2 = function(o) {
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
}, map = /* @__PURE__ */ __name(function(obj, instructions) {
  var e_1, _a, result = {};
  try {
    for (var _b = __values$2(Object.entries(instructions)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var _d = __read$5(_c.value, 2), key = _d[0], instruction = _d[1], _e = __read$5(Array.isArray(instruction) ? instruction : [instruction], 2), accessor = _e[0], deserializer = _e[1];
      obj.hasOwnProperty(accessor) && (result[key] = deserializer ? deserializer(obj[accessor]) : String(obj[accessor]));
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
  return result;
}, "map"), deserializeNumber = /* @__PURE__ */ __name(function(value) {
  return value ? Number(value) : void 0;
}, "deserializeNumber"), deserializeBoolean = /* @__PURE__ */ __name(function(value) {
  return value ? value === "true" : void 0;
}, "deserializeBoolean"), deserializeTimestamp = /* @__PURE__ */ __name(function(value) {
  return value ? new Date(value) : void 0;
}, "deserializeTimestamp"), emptyArrayGuard = /* @__PURE__ */ __name(function(value, deserializer) {
  if (value === "")
    return [];
  var valueArray = (Array.isArray(value) ? value : [value]).filter(function(e) {
    return e != null;
  });
  return deserializer(valueArray);
}, "emptyArrayGuard"), deserializeMetadata = /* @__PURE__ */ __name(function(headers) {
  var objectMetadataHeaderPrefix = "x-amz-meta-", deserialized = Object.keys(headers).filter(function(header) {
    return header.startsWith(objectMetadataHeaderPrefix);
  }).reduce(function(acc, header) {
    return acc[header.replace(objectMetadataHeaderPrefix, "")] = headers[header], acc;
  }, {});
  return Object.keys(deserialized).length > 0 ? deserialized : void 0;
}, "deserializeMetadata"), BLOCK_SIZE = 64, DIGEST_LENGTH = 16, INIT = [1732584193, 4023233417, 2562383102, 271733878], Md5 = (
  /** @class */
  (function() {
    function Md52() {
      this.state = Uint32Array.from(INIT), this.buffer = new DataView(new ArrayBuffer(BLOCK_SIZE)), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1;
    }
    return __name(Md52, "Md5"), Md52.prototype.update = function(sourceData) {
      if (!isEmptyData(sourceData)) {
        if (this.finished)
          throw new Error("Attempted to update an already finished hash.");
        var data = convertToBuffer(sourceData), position = 0, byteLength2 = data.byteLength;
        for (this.bytesHashed += byteLength2; byteLength2 > 0; )
          this.buffer.setUint8(this.bufferLength++, data[position++]), byteLength2--, this.bufferLength === BLOCK_SIZE && (this.hashBuffer(), this.bufferLength = 0);
      }
    }, Md52.prototype.digest = function() {
      return __awaiter$k(this, void 0, void 0, function() {
        var _a, buffer, undecoratedLength, bytesHashed, bitsHashed, i, i, out, i;
        return __generator$k(this, function(_b) {
          if (!this.finished) {
            if (_a = this, buffer = _a.buffer, undecoratedLength = _a.bufferLength, bytesHashed = _a.bytesHashed, bitsHashed = bytesHashed * 8, buffer.setUint8(this.bufferLength++, 128), undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
              for (i = this.bufferLength; i < BLOCK_SIZE; i++)
                buffer.setUint8(i, 0);
              this.hashBuffer(), this.bufferLength = 0;
            }
            for (i = this.bufferLength; i < BLOCK_SIZE - 8; i++)
              buffer.setUint8(i, 0);
            buffer.setUint32(BLOCK_SIZE - 8, bitsHashed >>> 0, !0), buffer.setUint32(BLOCK_SIZE - 4, Math.floor(bitsHashed / 4294967296), !0), this.hashBuffer(), this.finished = !0;
          }
          for (out = new DataView(new ArrayBuffer(DIGEST_LENGTH)), i = 0; i < 4; i++)
            out.setUint32(i * 4, this.state[i], !0);
          return [2, new Uint8Array(out.buffer, out.byteOffset, out.byteLength)];
        });
      });
    }, Md52.prototype.hashBuffer = function() {
      var _a = this, buffer = _a.buffer, state = _a.state, a = state[0], b = state[1], c = state[2], d = state[3];
      a = ff(a, b, c, d, buffer.getUint32(0, !0), 7, 3614090360), d = ff(d, a, b, c, buffer.getUint32(4, !0), 12, 3905402710), c = ff(c, d, a, b, buffer.getUint32(8, !0), 17, 606105819), b = ff(b, c, d, a, buffer.getUint32(12, !0), 22, 3250441966), a = ff(a, b, c, d, buffer.getUint32(16, !0), 7, 4118548399), d = ff(d, a, b, c, buffer.getUint32(20, !0), 12, 1200080426), c = ff(c, d, a, b, buffer.getUint32(24, !0), 17, 2821735955), b = ff(b, c, d, a, buffer.getUint32(28, !0), 22, 4249261313), a = ff(a, b, c, d, buffer.getUint32(32, !0), 7, 1770035416), d = ff(d, a, b, c, buffer.getUint32(36, !0), 12, 2336552879), c = ff(c, d, a, b, buffer.getUint32(40, !0), 17, 4294925233), b = ff(b, c, d, a, buffer.getUint32(44, !0), 22, 2304563134), a = ff(a, b, c, d, buffer.getUint32(48, !0), 7, 1804603682), d = ff(d, a, b, c, buffer.getUint32(52, !0), 12, 4254626195), c = ff(c, d, a, b, buffer.getUint32(56, !0), 17, 2792965006), b = ff(b, c, d, a, buffer.getUint32(60, !0), 22, 1236535329), a = gg(a, b, c, d, buffer.getUint32(4, !0), 5, 4129170786), d = gg(d, a, b, c, buffer.getUint32(24, !0), 9, 3225465664), c = gg(c, d, a, b, buffer.getUint32(44, !0), 14, 643717713), b = gg(b, c, d, a, buffer.getUint32(0, !0), 20, 3921069994), a = gg(a, b, c, d, buffer.getUint32(20, !0), 5, 3593408605), d = gg(d, a, b, c, buffer.getUint32(40, !0), 9, 38016083), c = gg(c, d, a, b, buffer.getUint32(60, !0), 14, 3634488961), b = gg(b, c, d, a, buffer.getUint32(16, !0), 20, 3889429448), a = gg(a, b, c, d, buffer.getUint32(36, !0), 5, 568446438), d = gg(d, a, b, c, buffer.getUint32(56, !0), 9, 3275163606), c = gg(c, d, a, b, buffer.getUint32(12, !0), 14, 4107603335), b = gg(b, c, d, a, buffer.getUint32(32, !0), 20, 1163531501), a = gg(a, b, c, d, buffer.getUint32(52, !0), 5, 2850285829), d = gg(d, a, b, c, buffer.getUint32(8, !0), 9, 4243563512), c = gg(c, d, a, b, buffer.getUint32(28, !0), 14, 1735328473), b = gg(b, c, d, a, buffer.getUint32(48, !0), 20, 2368359562), a = hh(a, b, c, d, buffer.getUint32(20, !0), 4, 4294588738), d = hh(d, a, b, c, buffer.getUint32(32, !0), 11, 2272392833), c = hh(c, d, a, b, buffer.getUint32(44, !0), 16, 1839030562), b = hh(b, c, d, a, buffer.getUint32(56, !0), 23, 4259657740), a = hh(a, b, c, d, buffer.getUint32(4, !0), 4, 2763975236), d = hh(d, a, b, c, buffer.getUint32(16, !0), 11, 1272893353), c = hh(c, d, a, b, buffer.getUint32(28, !0), 16, 4139469664), b = hh(b, c, d, a, buffer.getUint32(40, !0), 23, 3200236656), a = hh(a, b, c, d, buffer.getUint32(52, !0), 4, 681279174), d = hh(d, a, b, c, buffer.getUint32(0, !0), 11, 3936430074), c = hh(c, d, a, b, buffer.getUint32(12, !0), 16, 3572445317), b = hh(b, c, d, a, buffer.getUint32(24, !0), 23, 76029189), a = hh(a, b, c, d, buffer.getUint32(36, !0), 4, 3654602809), d = hh(d, a, b, c, buffer.getUint32(48, !0), 11, 3873151461), c = hh(c, d, a, b, buffer.getUint32(60, !0), 16, 530742520), b = hh(b, c, d, a, buffer.getUint32(8, !0), 23, 3299628645), a = ii(a, b, c, d, buffer.getUint32(0, !0), 6, 4096336452), d = ii(d, a, b, c, buffer.getUint32(28, !0), 10, 1126891415), c = ii(c, d, a, b, buffer.getUint32(56, !0), 15, 2878612391), b = ii(b, c, d, a, buffer.getUint32(20, !0), 21, 4237533241), a = ii(a, b, c, d, buffer.getUint32(48, !0), 6, 1700485571), d = ii(d, a, b, c, buffer.getUint32(12, !0), 10, 2399980690), c = ii(c, d, a, b, buffer.getUint32(40, !0), 15, 4293915773), b = ii(b, c, d, a, buffer.getUint32(4, !0), 21, 2240044497), a = ii(a, b, c, d, buffer.getUint32(32, !0), 6, 1873313359), d = ii(d, a, b, c, buffer.getUint32(60, !0), 10, 4264355552), c = ii(c, d, a, b, buffer.getUint32(24, !0), 15, 2734768916), b = ii(b, c, d, a, buffer.getUint32(52, !0), 21, 1309151649), a = ii(a, b, c, d, buffer.getUint32(16, !0), 6, 4149444226), d = ii(d, a, b, c, buffer.getUint32(44, !0), 10, 3174756917), c = ii(c, d, a, b, buffer.getUint32(8, !0), 15, 718787259), b = ii(b, c, d, a, buffer.getUint32(36, !0), 21, 3951481745), state[0] = a + state[0] & 4294967295, state[1] = b + state[1] & 4294967295, state[2] = c + state[2] & 4294967295, state[3] = d + state[3] & 4294967295;
    }, Md52;
  })()
);
function cmn(q, a, b, x, s, t) {
  return a = (a + q & 4294967295) + (x + t & 4294967295) & 4294967295, (a << s | a >>> 32 - s) + b & 4294967295;
}
__name(cmn, "cmn");
function ff(a, b, c, d, x, s, t) {
  return cmn(b & c | ~b & d, a, b, x, s, t);
}
__name(ff, "ff");
function gg(a, b, c, d, x, s, t) {
  return cmn(b & d | c & ~d, a, b, x, s, t);
}
__name(gg, "gg");
function hh(a, b, c, d, x, s, t) {
  return cmn(b ^ c ^ d, a, b, x, s, t);
}
__name(hh, "hh");
function ii(a, b, c, d, x, s, t) {
  return cmn(c ^ (b | ~d), a, b, x, s, t);
}
__name(ii, "ii");
function isEmptyData(data) {
  return typeof data == "string" ? data.length === 0 : data.byteLength === 0;
}
__name(isEmptyData, "isEmptyData");
function convertToBuffer(data) {
  return typeof data == "string" ? fromUtf8(data) : ArrayBuffer.isView(data) ? new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(data);
}
__name(convertToBuffer, "convertToBuffer");
var __assign$g = function() {
  return __assign$g = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$g.apply(this, arguments);
}, __awaiter$g = function(thisArg, _arguments, P, generator) {
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
}, __generator$g = function(thisArg, body) {
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
}, __values$1 = function(o) {
  var s = typeof Symbol == "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length == "number") return {
    next: /* @__PURE__ */ __name(function() {
      return o && i >= o.length && (o = void 0), { value: o && o[i++], done: !o };
    }, "next")
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, __read$4 = function(o, n) {
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
}, assignStringVariables = /* @__PURE__ */ __name(function(values) {
  var e_1, _a, queryParams = {};
  try {
    for (var _b = __values$1(Object.entries(values)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var _d = __read$4(_c.value, 2), key = _d[0], value = _d[1];
      value != null && (queryParams[key] = value.toString());
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
  return queryParams;
}, "assignStringVariables"), serializeObjectSsecOptionsToHeaders = /* @__PURE__ */ __name(function(input) {
  return __awaiter$g(void 0, void 0, void 0, function() {
    var getMd5Digest, _a, _b, _c, _d, _e;
    return __generator$g(this, function(_f) {
      switch (_f.label) {
        case 0:
          return getMd5Digest = /* @__PURE__ */ __name(function(content) {
            return __awaiter$g(void 0, void 0, void 0, function() {
              var md5Hasher;
              return __generator$g(this, function(_a2) {
                return md5Hasher = new Md5(), md5Hasher.update(utf8Encode(content)), [2, md5Hasher.digest()];
              });
            });
          }, "getMd5Digest"), _a = assignStringVariables, _e = {
            "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm,
            // base64 encoded is need
            // see: https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html#specifying-s3-c-encryption
            "x-amz-server-side-encryption-customer-key": input.SSECustomerKey && toBase64(input.SSECustomerKey)
          }, _b = "x-amz-server-side-encryption-customer-key-md5", _c = input.SSECustomerKey, _c ? (_d = toBase64, [4, getMd5Digest(input.SSECustomerKey)]) : [3, 2];
        case 1:
          _c = _d.apply(void 0, [_f.sent()]), _f.label = 2;
        case 2:
          return [2, _a.apply(void 0, [
            // Calculate the md5 digest of the the SSE-C key, for compatibility with AWS SDK
            // see: https://github.com/aws/aws-sdk-js-v3/blob/91fc83307c38cc9cbe0b3acd919557d5b5b831d6/packages/middleware-ssec/src/index.ts#L36
            (_e[_b] = _c, _e)
          ])];
      }
    });
  });
}, "serializeObjectSsecOptionsToHeaders"), serializeObjectConfigsToHeaders = /* @__PURE__ */ __name(function(input) {
  return __awaiter$g(void 0, void 0, void 0, function() {
    var _a, _b;
    return __generator$g(this, function(_c) {
      switch (_c.label) {
        case 0:
          return _a = [{}], [4, serializeObjectSsecOptionsToHeaders(input)];
        case 1:
          return [2, __assign$g.apply(void 0, [__assign$g.apply(void 0, _a.concat([_c.sent()])), assignStringVariables(__assign$g({ "x-amz-server-side-encryption": input.ServerSideEncryption, "x-amz-server-side-encryption-aws-kms-key-id": input.SSEKMSKeyId, "x-amz-acl": input.ACL, "cache-control": input.CacheControl, "content-disposition": input.ContentDisposition, "content-language": input.ContentLanguage, "content-encoding": input.ContentEncoding, "content-type": input.ContentType, expires: (_b = input.Expires) === null || _b === void 0 ? void 0 : _b.toUTCString(), "x-amz-tagging": input.Tagging }, serializeMetadata(input.Metadata)))])];
      }
    });
  });
}, "serializeObjectConfigsToHeaders"), serializeMetadata = /* @__PURE__ */ __name(function(metadata) {
  return metadata === void 0 && (metadata = {}), Object.keys(metadata).reduce(function(acc, suffix) {
    return acc["x-amz-meta-".concat(suffix.toLowerCase())] = metadata[suffix], acc;
  }, {});
}, "serializeMetadata"), serializePathnameObjectKey = /* @__PURE__ */ __name(function(url, key) {
  return url.pathname.replace(/\/$/, "") + "/".concat(key.split("/").map(extendedEncodeURIComponent).join("/"));
}, "serializePathnameObjectKey"), DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/, IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/, DOTS_PATTERN = /\.\./, SERVICE_NAME = "s3", endpointResolver = /* @__PURE__ */ __name(function(options, apiInput) {
  var region = options.region, useAccelerateEndpoint = options.useAccelerateEndpoint, customEndpoint = options.customEndpoint, forcePathStyle = options.forcePathStyle, endpoint;
  if (customEndpoint)
    endpoint = new URL(customEndpoint);
  else if (useAccelerateEndpoint) {
    if (forcePathStyle)
      throw new Error("Path style URLs are not supported with S3 Transfer Acceleration.");
    endpoint = new URL("https://s3-accelerate.".concat(getDnsSuffix(region)));
  } else
    endpoint = new URL("https://s3.".concat(region, ".").concat(getDnsSuffix(region)));
  if (apiInput != null && apiInput.Bucket) {
    if (!isDnsCompatibleBucketName(apiInput.Bucket))
      throw new Error('Invalid bucket name: "'.concat(apiInput.Bucket, '".'));
    forcePathStyle || apiInput.Bucket.includes(".") ? endpoint.pathname = "/".concat(apiInput.Bucket) : endpoint.host = "".concat(apiInput.Bucket, ".").concat(endpoint.host);
  }
  return { url: endpoint };
}, "endpointResolver"), isDnsCompatibleBucketName = /* @__PURE__ */ __name(function(bucketName) {
  return DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
}, "isDnsCompatibleBucketName"), defaultConfig = {
  service: SERVICE_NAME,
  endpointResolver,
  retryDecider: getRetryDecider(parseXmlError),
  computeDelay: jitteredBackoff,
  userAgentValue: getAmplifyUserAgent(),
  useAccelerateEndpoint: !1,
  uriEscapePath: !1
  // Required by S3. See https://github.com/aws/aws-sdk-js-v3/blob/9ba012dfa3a3429aa2db0f90b3b0b3a7a31f9bc3/packages/signature-v4/src/SignatureV4.ts#L76-L83
}, __assign$f = function() {
  return __assign$f = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$f.apply(this, arguments);
}, __awaiter$f = function(thisArg, _arguments, P, generator) {
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
}, __generator$f = function(thisArg, body) {
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
}, __read$3 = function(o, n) {
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
}, __values = function(o) {
  var s = typeof Symbol == "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length == "number") return {
    next: /* @__PURE__ */ __name(function() {
      return o && i >= o.length && (o = void 0), { value: o && o[i++], done: !o };
    }, "next")
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, getObjectSerializer = /* @__PURE__ */ __name(function(input, endpoint) {
  return __awaiter$f(void 0, void 0, void 0, function() {
    var headers, query, url;
    return __generator$f(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, serializeObjectSsecOptionsToHeaders(input)];
        case 1:
          return headers = _a.sent(), query = map(input, {
            "response-cache-control": "ResponseCacheControl",
            "response-content-disposition": "ResponseContentDisposition",
            "response-content-encoding": "ResponseContentEncoding",
            "response-content-language": "ResponseContentLanguage",
            "response-content-type": "ResponseContentType"
          }), url = new URL(endpoint.url.toString()), url.pathname = serializePathnameObjectKey(url, input.Key), url.search = new URLSearchParams(query).toString(), [2, {
            method: "GET",
            headers,
            url
          }];
      }
    });
  });
}, "getObjectSerializer"), getObjectDeserializer = /* @__PURE__ */ __name(function(response) {
  return __awaiter$f(void 0, void 0, void 0, function() {
    var error;
    return __generator$f(this, function(_a) {
      switch (_a.label) {
        case 0:
          return response.statusCode >= 300 ? [4, parseXmlError(response)] : [3, 2];
        case 1:
          throw error = _a.sent(), error;
        case 2:
          if (response.body)
            return [2, __assign$f(__assign$f({}, map(response.headers, {
              DeleteMarker: ["x-amz-delete-marker", deserializeBoolean],
              AcceptRanges: "accept-ranges",
              Expiration: "x-amz-expiration",
              Restore: "x-amz-restore",
              LastModified: ["last-modified", deserializeTimestamp],
              ContentLength: ["content-length", deserializeNumber],
              ETag: "etag",
              ChecksumCRC32: "x-amz-checksum-crc32",
              ChecksumCRC32C: "x-amz-checksum-crc32c",
              ChecksumSHA1: "x-amz-checksum-sha1",
              ChecksumSHA256: "x-amz-checksum-sha256",
              MissingMeta: ["x-amz-missing-meta", deserializeNumber],
              VersionId: "x-amz-version-id",
              CacheControl: "cache-control",
              ContentDisposition: "content-disposition",
              ContentEncoding: "content-encoding",
              ContentLanguage: "content-language",
              ContentRange: "content-range",
              ContentType: "content-type",
              Expires: ["expires", deserializeTimestamp],
              WebsiteRedirectLocation: "x-amz-website-redirect-location",
              ServerSideEncryption: "x-amz-server-side-encryption",
              SSECustomerAlgorithm: "x-amz-server-side-encryption-customer-algorithm",
              SSECustomerKeyMD5: "x-amz-server-side-encryption-customer-key-md5",
              SSEKMSKeyId: "x-amz-server-side-encryption-aws-kms-key-id",
              BucketKeyEnabled: [
                "x-amz-server-side-encryption-bucket-key-enabled",
                deserializeBoolean
              ],
              StorageClass: "x-amz-storage-class",
              RequestCharged: "x-amz-request-charged",
              ReplicationStatus: "x-amz-replication-status",
              PartsCount: ["x-amz-mp-parts-count", deserializeNumber],
              TagCount: ["x-amz-tagging-count", deserializeNumber],
              ObjectLockMode: "x-amz-object-lock-mode",
              ObjectLockRetainUntilDate: [
                "x-amz-object-lock-retain-until-date",
                deserializeTimestamp
              ],
              ObjectLockLegalHoldStatus: "x-amz-object-lock-legal-hold"
            })), { Metadata: deserializeMetadata(response.headers), $metadata: parseMetadata(response), Body: response.body })];
          throw new Error("Got empty response body.");
        case 3:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}, "getObjectDeserializer"), getObject = composeServiceApi(s3TransferHandler, getObjectSerializer, getObjectDeserializer, __assign$f(__assign$f({}, defaultConfig), { responseType: "blob" })), getPresignedGetObjectUrl = /* @__PURE__ */ __name(function(config, input) {
  return __awaiter$f(void 0, void 0, void 0, function() {
    var endpoint, _a, url, headers, method, _b, _c, _d, headerName, value, e_1, _e, _f;
    return __generator$f(this, function(_g) {
      switch (_g.label) {
        case 0:
          return endpoint = defaultConfig.endpointResolver(config, input), [4, getObjectSerializer(input, endpoint)];
        case 1:
          _a = _g.sent(), url = _a.url, headers = _a.headers, method = _a.method, url.searchParams.append(CONTENT_SHA256_HEADER, EMPTY_HASH), url.searchParams.append((_f = config.userAgentHeader) !== null && _f !== void 0 ? _f : USER_AGENT_HEADER, config.userAgentValue);
          try {
            for (_b = __values(Object.entries(headers).sort(function(_a2, _b2) {
              var _c2 = __read$3(_a2, 1), key1 = _c2[0], _d2 = __read$3(_b2, 1), key2 = _d2[0];
              return key1.localeCompare(key2);
            })), _c = _b.next(); !_c.done; _c = _b.next())
              _d = __read$3(_c.value, 2), headerName = _d[0], value = _d[1], url.searchParams.append(headerName, value);
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              _c && !_c.done && (_e = _b.return) && _e.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          return [2, presignUrl({ method, url, body: null }, __assign$f(__assign$f({}, defaultConfig), config)).toString()];
      }
    });
  });
}, "getPresignedGetObjectUrl"), __assign$e = function() {
  return __assign$e = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$e.apply(this, arguments);
}, __awaiter$e = function(thisArg, _arguments, P, generator) {
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
}, __generator$e = function(thisArg, body) {
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
}, listObjectsV2Serializer = /* @__PURE__ */ __name(function(input, endpoint) {
  var headers = assignStringVariables({
    "x-amz-request-payer": input.RequestPayer,
    "x-amz-expected-bucket-owner": input.ExpectedBucketOwner
  }), query = assignStringVariables({
    "list-type": "2",
    "continuation-token": input.ContinuationToken,
    delimiter: input.Delimiter,
    "encoding-type": input.EncodingType,
    "fetch-owner": input.FetchOwner,
    "max-keys": input.MaxKeys,
    prefix: input.Prefix,
    "start-after": input.StartAfter
  }), url = new URL(endpoint.url.toString());
  return url.search = new URLSearchParams(query).toString(), {
    method: "GET",
    headers,
    url
  };
}, "listObjectsV2Serializer"), listObjectsV2Deserializer = /* @__PURE__ */ __name(function(response) {
  return __awaiter$e(void 0, void 0, void 0, function() {
    var error, parsed, contents;
    return __generator$e(this, function(_a) {
      switch (_a.label) {
        case 0:
          return response.statusCode >= 300 ? [4, parseXmlError(response)] : [3, 2];
        case 1:
          throw error = _a.sent(), error;
        case 2:
          return [4, parseXmlBody(response)];
        case 3:
          return parsed = _a.sent(), contents = map(parsed, {
            CommonPrefixes: [
              "CommonPrefixes",
              function(value) {
                return emptyArrayGuard(value, deserializeCommonPrefixList);
              }
            ],
            Contents: [
              "Contents",
              function(value) {
                return emptyArrayGuard(value, deserializeObjectList);
              }
            ],
            ContinuationToken: "ContinuationToken",
            Delimiter: "Delimiter",
            EncodingType: "EncodingType",
            IsTruncated: ["IsTruncated", deserializeBoolean],
            KeyCount: ["KeyCount", deserializeNumber],
            MaxKeys: ["MaxKeys", deserializeNumber],
            Name: "Name",
            NextContinuationToken: "NextContinuationToken",
            Prefix: "Prefix",
            StartAfter: "StartAfter"
          }), [2, __assign$e({ $metadata: parseMetadata(response) }, contents)];
      }
    });
  });
}, "listObjectsV2Deserializer"), deserializeCommonPrefixList = /* @__PURE__ */ __name(function(output) {
  return output.map(deserializeCommonPrefix);
}, "deserializeCommonPrefixList"), deserializeCommonPrefix = /* @__PURE__ */ __name(function(output) {
  return map(output, {
    Prefix: "Prefix"
  });
}, "deserializeCommonPrefix"), deserializeObjectList = /* @__PURE__ */ __name(function(output) {
  return output.map(deserializeObject);
}, "deserializeObjectList"), deserializeObject = /* @__PURE__ */ __name(function(output) {
  return map(output, {
    Key: "Key",
    LastModified: ["LastModified", deserializeTimestamp],
    ETag: "ETag",
    ChecksumAlgorithm: [
      "ChecksumAlgorithm",
      function(value) {
        return emptyArrayGuard(value, deserializeChecksumAlgorithmList);
      }
    ],
    Size: ["Size", deserializeNumber],
    StorageClass: "StorageClass",
    Owner: ["Owner", deserializeOwner]
  });
}, "deserializeObject"), deserializeChecksumAlgorithmList = /* @__PURE__ */ __name(function(output) {
  return output.map(function(entry) {
    return String(entry);
  });
}, "deserializeChecksumAlgorithmList"), deserializeOwner = /* @__PURE__ */ __name(function(output) {
  return map(output, { DisplayName: "DisplayName", ID: "ID" });
}, "deserializeOwner"), listObjectsV2 = composeServiceApi(s3TransferHandler, listObjectsV2Serializer, listObjectsV2Deserializer, __assign$e(__assign$e({}, defaultConfig), { responseType: "text" })), __assign$d = function() {
  return __assign$d = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$d.apply(this, arguments);
}, __awaiter$d = function(thisArg, _arguments, P, generator) {
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
}, __generator$d = function(thisArg, body) {
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
}, putObjectSerializer = /* @__PURE__ */ __name(function(input, endpoint) {
  return __awaiter$d(void 0, void 0, void 0, function() {
    var headers, _a, url, _b;
    return __generator$d(this, function(_c) {
      switch (_c.label) {
        case 0:
          return _a = [{}], [4, serializeObjectConfigsToHeaders(__assign$d(__assign$d({}, input), { ContentType: (_b = input.ContentType) !== null && _b !== void 0 ? _b : "application/octet-stream" }))];
        case 1:
          return headers = __assign$d.apply(void 0, [__assign$d.apply(void 0, _a.concat([_c.sent()])), assignStringVariables({ "content-md5": input.ContentMD5 })]), url = new URL(endpoint.url.toString()), url.pathname = serializePathnameObjectKey(url, input.Key), [2, {
            method: "PUT",
            headers,
            url,
            body: input.Body
          }];
      }
    });
  });
}, "putObjectSerializer"), putObjectDeserializer = /* @__PURE__ */ __name(function(response) {
  return __awaiter$d(void 0, void 0, void 0, function() {
    var error;
    return __generator$d(this, function(_a) {
      switch (_a.label) {
        case 0:
          return response.statusCode >= 300 ? [4, parseXmlError(response)] : [3, 2];
        case 1:
          throw error = _a.sent(), error;
        case 2:
          return [2, __assign$d(__assign$d({}, map(response.headers, {
            ETag: "etag",
            VersionId: "x-amz-version-id"
          })), { $metadata: parseMetadata(response) })];
      }
    });
  });
}, "putObjectDeserializer"), putObject = composeServiceApi(s3TransferHandler, putObjectSerializer, putObjectDeserializer, __assign$d(__assign$d({}, defaultConfig), { responseType: "text" })), __assign$c = function() {
  return __assign$c = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$c.apply(this, arguments);
}, __awaiter$c = function(thisArg, _arguments, P, generator) {
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
}, createMultipartUploadSerializer = /* @__PURE__ */ __name(function(input, endpoint) {
  return __awaiter$c(void 0, void 0, void 0, function() {
    var headers, url;
    return __generator$c(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, serializeObjectConfigsToHeaders(input)];
        case 1:
          return headers = _a.sent(), url = new URL(endpoint.url.toString()), url.pathname = serializePathnameObjectKey(url, input.Key), url.search = "uploads", [2, {
            method: "POST",
            headers,
            url
          }];
      }
    });
  });
}, "createMultipartUploadSerializer"), createMultipartUploadDeserializer = /* @__PURE__ */ __name(function(response) {
  return __awaiter$c(void 0, void 0, void 0, function() {
    var error, parsed, contents;
    return __generator$c(this, function(_a) {
      switch (_a.label) {
        case 0:
          return response.statusCode >= 300 ? [4, parseXmlError(response)] : [3, 2];
        case 1:
          throw error = _a.sent(), error;
        case 2:
          return [4, parseXmlBody(response)];
        case 3:
          return parsed = _a.sent(), contents = map(parsed, {
            UploadId: "UploadId"
          }), [2, __assign$c({ $metadata: parseMetadata(response) }, contents)];
      }
    });
  });
}, "createMultipartUploadDeserializer"), createMultipartUpload = composeServiceApi(s3TransferHandler, createMultipartUploadSerializer, createMultipartUploadDeserializer, __assign$c(__assign$c({}, defaultConfig), { responseType: "text" })), __assign$b = function() {
  return __assign$b = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$b.apply(this, arguments);
}, __awaiter$b = function(thisArg, _arguments, P, generator) {
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
}, uploadPartSerializer = /* @__PURE__ */ __name(function(input, endpoint) {
  return __awaiter$b(void 0, void 0, void 0, function() {
    var headers, _a, url;
    return __generator$b(this, function(_b) {
      switch (_b.label) {
        case 0:
          return _a = [{}], [4, serializeObjectSsecOptionsToHeaders(input)];
        case 1:
          return headers = __assign$b.apply(void 0, [__assign$b.apply(void 0, _a.concat([_b.sent()])), assignStringVariables({ "content-md5": input.ContentMD5 })]), headers["content-type"] = "application/octet-stream", url = new URL(endpoint.url.toString()), url.pathname = serializePathnameObjectKey(url, input.Key), url.search = new URLSearchParams({
            partNumber: input.PartNumber + "",
            uploadId: input.UploadId
          }).toString(), [2, {
            method: "PUT",
            headers,
            url,
            body: input.Body
          }];
      }
    });
  });
}, "uploadPartSerializer"), uploadPartDeserializer = /* @__PURE__ */ __name(function(response) {
  return __awaiter$b(void 0, void 0, void 0, function() {
    var error;
    return __generator$b(this, function(_a) {
      switch (_a.label) {
        case 0:
          return response.statusCode >= 300 ? [4, parseXmlError(response)] : [3, 2];
        case 1:
          throw error = _a.sent(), error;
        case 2:
          return [2, __assign$b(__assign$b({}, map(response.headers, {
            ETag: "etag"
          })), { $metadata: parseMetadata(response) })];
      }
    });
  });
}, "uploadPartDeserializer"), uploadPart = composeServiceApi(s3TransferHandler, uploadPartSerializer, uploadPartDeserializer, __assign$b(__assign$b({}, defaultConfig), { responseType: "text" })), __assign$a = function() {
  return __assign$a = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$a.apply(this, arguments);
}, __awaiter$a = function(thisArg, _arguments, P, generator) {
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
}, INVALID_PARAMETER_ERROR_MSG = "Invalid parameter for ComplteMultipartUpload API", completeMultipartUploadSerializer = /* @__PURE__ */ __name(function(input, endpoint) {
  return __awaiter$a(void 0, void 0, void 0, function() {
    var headers, url;
    return __generator$a(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, serializeObjectSsecOptionsToHeaders(input)];
        case 1:
          return headers = _a.sent(), headers["content-type"] = "application/xml", url = new URL(endpoint.url.toString()), url.pathname = serializePathnameObjectKey(url, input.Key), url.search = new URLSearchParams({ uploadId: input.UploadId }).toString(), [2, {
            method: "POST",
            headers,
            url,
            body: '<?xml version="1.0" encoding="UTF-8"?>' + serializeCompletedMultipartUpload(input.MultipartUpload)
          }];
      }
    });
  });
}, "completeMultipartUploadSerializer"), serializeCompletedMultipartUpload = /* @__PURE__ */ __name(function(input) {
  var _a;
  if (!(!((_a = input.Parts) === null || _a === void 0) && _a.length))
    throw new Error("".concat(INVALID_PARAMETER_ERROR_MSG, ": ").concat(input));
  return '<CompleteMultipartUpload xmlns="http://s3.amazonaws.com/doc/2006-03-01/">'.concat(input.Parts.map(serializeCompletedPartList).join(""), "</CompleteMultipartUpload>");
}, "serializeCompletedMultipartUpload"), serializeCompletedPartList = /* @__PURE__ */ __name(function(input) {
  if (!input.ETag || input.PartNumber == null)
    throw new Error("".concat(INVALID_PARAMETER_ERROR_MSG, ": ").concat(input));
  return "<Part><ETag>".concat(input.ETag, "</ETag><PartNumber>").concat(input.PartNumber, "</PartNumber></Part>");
}, "serializeCompletedPartList"), parseXmlBodyOrThrow = /* @__PURE__ */ __name(function(response) {
  return __awaiter$a(void 0, void 0, void 0, function() {
    var parsed, error;
    return __generator$a(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, parseXmlBody(response)];
        case 1:
          return parsed = _a.sent(), parsed.Code !== void 0 && parsed.Message !== void 0 ? [4, parseXmlError(__assign$a(__assign$a({}, response), { statusCode: 500 }))] : [3, 3];
        case 2:
          throw error = _a.sent(), error.$metadata.httpStatusCode = response.statusCode, error;
        case 3:
          return [2, parsed];
      }
    });
  });
}, "parseXmlBodyOrThrow"), completeMultipartUploadDeserializer = /* @__PURE__ */ __name(function(response) {
  return __awaiter$a(void 0, void 0, void 0, function() {
    var error, parsed, contents;
    return __generator$a(this, function(_a) {
      switch (_a.label) {
        case 0:
          return response.statusCode >= 300 ? [4, parseXmlError(response)] : [3, 2];
        case 1:
          throw error = _a.sent(), error;
        case 2:
          return [4, parseXmlBodyOrThrow(response)];
        case 3:
          return parsed = _a.sent(), contents = map(parsed, {
            ETag: "ETag",
            Key: "Key",
            Location: "Location"
          }), [2, __assign$a({ $metadata: parseMetadata(response) }, contents)];
      }
    });
  });
}, "completeMultipartUploadDeserializer"), retryWhenErrorWith200StatusCode = /* @__PURE__ */ __name(function(response, error) {
  return __awaiter$a(void 0, void 0, void 0, function() {
    var parsed, defaultRetryDecider;
    return __generator$a(this, function(_a) {
      switch (_a.label) {
        case 0:
          return response.statusCode !== 200 ? [3, 2] : response.body ? [4, parseXmlBody(response)] : [2, !0];
        case 1:
          return parsed = _a.sent(), parsed.Code !== void 0 && parsed.Message !== void 0 ? [2, !0] : [2, !1];
        case 2:
          return defaultRetryDecider = defaultConfig.retryDecider, [2, defaultRetryDecider(response, error)];
      }
    });
  });
}, "retryWhenErrorWith200StatusCode"), completeMultipartUpload = composeServiceApi(s3TransferHandler, completeMultipartUploadSerializer, completeMultipartUploadDeserializer, __assign$a(__assign$a({}, defaultConfig), { responseType: "text", retryDecider: retryWhenErrorWith200StatusCode })), __assign$9 = function() {
  return __assign$9 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$9.apply(this, arguments);
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
}, listPartsSerializer = /* @__PURE__ */ __name(function(input, endpoint) {
  return __awaiter$9(void 0, void 0, void 0, function() {
    var headers, url;
    return __generator$9(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, serializeObjectSsecOptionsToHeaders(input)];
        case 1:
          return headers = _a.sent(), url = new URL(endpoint.url.toString()), url.pathname = serializePathnameObjectKey(url, input.Key), url.search = new URLSearchParams({
            uploadId: input.UploadId
          }).toString(), [2, {
            method: "GET",
            headers,
            url
          }];
      }
    });
  });
}, "listPartsSerializer"), listPartsDeserializer = /* @__PURE__ */ __name(function(response) {
  return __awaiter$9(void 0, void 0, void 0, function() {
    var error, parsed, contents;
    return __generator$9(this, function(_a) {
      switch (_a.label) {
        case 0:
          return response.statusCode >= 300 ? [4, parseXmlError(response)] : [3, 2];
        case 1:
          throw error = _a.sent(), error;
        case 2:
          return [4, parseXmlBody(response)];
        case 3:
          return parsed = _a.sent(), contents = map(parsed, {
            UploadId: "UploadId",
            Parts: [
              "Part",
              function(value) {
                return emptyArrayGuard(value, deserializeCompletedPartList);
              }
            ]
          }), [2, __assign$9({ $metadata: parseMetadata(response) }, contents)];
      }
    });
  });
}, "listPartsDeserializer"), deserializeCompletedPartList = /* @__PURE__ */ __name(function(input) {
  return input.map(function(item) {
    return map(item, {
      PartNumber: ["PartNumber", deserializeNumber],
      ETag: "ETag",
      Size: ["Size", deserializeNumber]
    });
  });
}, "deserializeCompletedPartList"), listParts = composeServiceApi(s3TransferHandler, listPartsSerializer, listPartsDeserializer, __assign$9(__assign$9({}, defaultConfig), { responseType: "text" })), __assign$8 = function() {
  return __assign$8 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$8.apply(this, arguments);
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
}, abortMultipartUploadSerializer = /* @__PURE__ */ __name(function(input, endpoint) {
  var url = new URL(endpoint.url.toString());
  return url.pathname = serializePathnameObjectKey(url, input.Key), url.search = new URLSearchParams({
    uploadId: input.UploadId
  }).toString(), {
    method: "DELETE",
    headers: {},
    url
  };
}, "abortMultipartUploadSerializer"), abortMultipartUploadDeserializer = /* @__PURE__ */ __name(function(response) {
  return __awaiter$8(void 0, void 0, void 0, function() {
    var error;
    return __generator$8(this, function(_a) {
      switch (_a.label) {
        case 0:
          return response.statusCode >= 300 ? [4, parseXmlError(response)] : [3, 2];
        case 1:
          throw error = _a.sent(), error;
        case 2:
          return [2, {
            $metadata: parseMetadata(response)
          }];
      }
    });
  });
}, "abortMultipartUploadDeserializer"), abortMultipartUpload = composeServiceApi(s3TransferHandler, abortMultipartUploadSerializer, abortMultipartUploadDeserializer, __assign$8(__assign$8({}, defaultConfig), { responseType: "text" })), __assign$7 = function() {
  return __assign$7 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$7.apply(this, arguments);
}, __awaiter$7 = function(thisArg, _arguments, P, generator) {
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
}, copyObjectSerializer = /* @__PURE__ */ __name(function(input, endpoint) {
  return __awaiter$7(void 0, void 0, void 0, function() {
    var headers, _a, url;
    return __generator$7(this, function(_b) {
      switch (_b.label) {
        case 0:
          return _a = [{}], [4, serializeObjectConfigsToHeaders(input)];
        case 1:
          return headers = __assign$7.apply(void 0, [__assign$7.apply(void 0, _a.concat([_b.sent()])), assignStringVariables({
            "x-amz-copy-source": input.CopySource,
            "x-amz-metadata-directive": input.MetadataDirective
          })]), url = new URL(endpoint.url.toString()), url.pathname = serializePathnameObjectKey(url, input.Key), [2, {
            method: "PUT",
            headers,
            url
          }];
      }
    });
  });
}, "copyObjectSerializer"), copyObjectDeserializer = /* @__PURE__ */ __name(function(response) {
  return __awaiter$7(void 0, void 0, void 0, function() {
    var error;
    return __generator$7(this, function(_a) {
      switch (_a.label) {
        case 0:
          return response.statusCode >= 300 ? [4, parseXmlError(response)] : [3, 2];
        case 1:
          throw error = _a.sent(), error;
        case 2:
          return [4, parseXmlBody(response)];
        case 3:
          return _a.sent(), [2, {
            $metadata: parseMetadata(response)
          }];
      }
    });
  });
}, "copyObjectDeserializer"), copyObject = composeServiceApi(s3TransferHandler, copyObjectSerializer, copyObjectDeserializer, __assign$7(__assign$7({}, defaultConfig), { responseType: "text" })), __assign$6 = function() {
  return __assign$6 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$6.apply(this, arguments);
}, __awaiter$6 = function(thisArg, _arguments, P, generator) {
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
}, headObjectSerializer = /* @__PURE__ */ __name(function(input, endpoint) {
  return __awaiter$6(void 0, void 0, void 0, function() {
    var headers, url;
    return __generator$6(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, serializeObjectSsecOptionsToHeaders(input)];
        case 1:
          return headers = _a.sent(), url = new URL(endpoint.url.toString()), url.pathname = serializePathnameObjectKey(url, input.Key), [2, {
            method: "HEAD",
            headers,
            url
          }];
      }
    });
  });
}, "headObjectSerializer"), headObjectDeserializer = /* @__PURE__ */ __name(function(response) {
  return __awaiter$6(void 0, void 0, void 0, function() {
    var error, contents;
    return __generator$6(this, function(_a) {
      switch (_a.label) {
        case 0:
          return response.statusCode >= 300 ? [4, parseXmlError(response)] : [3, 2];
        case 1:
          throw error = _a.sent(), error;
        case 2:
          return contents = __assign$6(__assign$6({}, map(response.headers, {
            ContentLength: ["content-length", deserializeNumber],
            ContentType: "content-type",
            ETag: "etag",
            LastModified: ["last-modified", deserializeTimestamp],
            VersionId: "x-amz-version-id"
          })), { Metadata: deserializeMetadata(response.headers) }), [2, __assign$6({ $metadata: parseMetadata(response) }, contents)];
      }
    });
  });
}, "headObjectDeserializer"), headObject = composeServiceApi(s3TransferHandler, headObjectSerializer, headObjectDeserializer, __assign$6(__assign$6({}, defaultConfig), { responseType: "text" })), __assign$5 = function() {
  return __assign$5 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$5.apply(this, arguments);
}, __awaiter$5 = function(thisArg, _arguments, P, generator) {
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
}, deleteObjectSerializer = /* @__PURE__ */ __name(function(input, endpoint) {
  var url = new URL(endpoint.url.toString());
  return url.pathname = serializePathnameObjectKey(url, input.Key), {
    method: "DELETE",
    headers: {},
    url
  };
}, "deleteObjectSerializer"), deleteObjectDeserializer = /* @__PURE__ */ __name(function(response) {
  return __awaiter$5(void 0, void 0, void 0, function() {
    var error, content;
    return __generator$5(this, function(_a) {
      switch (_a.label) {
        case 0:
          return response.statusCode >= 300 ? [4, parseXmlError(response)] : [3, 2];
        case 1:
          throw error = _a.sent(), error;
        case 2:
          return content = map(response.headers, {
            DeleteMarker: ["x-amz-delete-marker", deserializeBoolean],
            VersionId: "x-amz-version-id",
            RequestCharged: "x-amz-request-charged"
          }), [2, __assign$5(__assign$5({}, content), { $metadata: parseMetadata(response) })];
      }
    });
  });
}, "deleteObjectDeserializer"), deleteObject = composeServiceApi(s3TransferHandler, deleteObjectSerializer, deleteObjectDeserializer, __assign$5(__assign$5({}, defaultConfig), { responseType: "text" })), StorageErrorStrings;
(function(StorageErrorStrings2) {
  StorageErrorStrings2.NO_CREDENTIALS = "No credentials", StorageErrorStrings2.NO_SRC_KEY = 'source param should be an object with the property "key" with value of type string', StorageErrorStrings2.NO_DEST_KEY = 'destination param should be an object with the property "key" with value of type string', StorageErrorStrings2.INVALID_BLOB = "Object must be an instance of Blob";
})(StorageErrorStrings || (StorageErrorStrings = {}));
var AWSS3ProviderMultipartCopierErrors;
(function(AWSS3ProviderMultipartCopierErrors2) {
  AWSS3ProviderMultipartCopierErrors2.CLEANUP_FAILED = "Multipart copy clean up failed", AWSS3ProviderMultipartCopierErrors2.NO_OBJECT_FOUND = "Object does not exist", AWSS3ProviderMultipartCopierErrors2.INVALID_QUEUESIZE = "Queue size must be a positive number", AWSS3ProviderMultipartCopierErrors2.NO_COPYSOURCE = "You must specify a copy source", AWSS3ProviderMultipartCopierErrors2.MAX_NUM_PARTS_EXCEEDED = "Only a maximum of 10000 parts are allowed";
})(AWSS3ProviderMultipartCopierErrors || (AWSS3ProviderMultipartCopierErrors = {}));
var AWSS3ProviderUploadErrorStrings;
(function(AWSS3ProviderUploadErrorStrings2) {
  AWSS3ProviderUploadErrorStrings2.UPLOAD_PAUSED_MESSAGE = "paused";
})(AWSS3ProviderUploadErrorStrings || (AWSS3ProviderUploadErrorStrings = {}));
var AMPLIFY_SYMBOL = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default", localTestingStorageEndpoint = "http://localhost:20005", UPLOADS_STORAGE_KEY = "__uploadInProgress", byteLength = /* @__PURE__ */ __name(function(x) {
  if (typeof x == "string")
    return x.length;
  if (isArrayBuffer(x))
    return x.byteLength;
  if (isBlob(x))
    return x.size;
  throw new Error("Cannot determine byte length of " + x);
}, "byteLength"), dispatchStorageEvent = /* @__PURE__ */ __name(function(track, event, attrs, metrics, message) {
  if (track) {
    var data = { attrs };
    metrics && (data.metrics = metrics), Hub.dispatch("storage", {
      event,
      data,
      message
    }, "Storage", AMPLIFY_SYMBOL);
  }
}, "dispatchStorageEvent"), isFile = /* @__PURE__ */ __name(function(x) {
  return typeof x < "u" && x instanceof File;
}, "isFile"), isBlob = /* @__PURE__ */ __name(function(x) {
  return typeof x < "u" && x instanceof Blob;
}, "isBlob"), isArrayBuffer = /* @__PURE__ */ __name(function(x) {
  return typeof x < "u" && x instanceof ArrayBuffer;
}, "isArrayBuffer"), __assign$4 = function() {
  return __assign$4 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$4.apply(this, arguments);
}, __awaiter$4 = function(thisArg, _arguments, P, generator) {
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
}, logger$4 = new ConsoleLogger("S3ClientUtils"), INVALID_CRED = { accessKeyId: "", secretAccessKey: "" }, getPrefix = /* @__PURE__ */ __name(function(config) {
  var credentials = config.credentials, level = config.level, customPrefix = config.customPrefix, identityId = config.identityId, resolvedCustomPrefix = customPrefix || {}, resolvedIdentityId = identityId || credentials.identityId, privatePath = (resolvedCustomPrefix.private !== void 0 ? resolvedCustomPrefix.private : "private/") + resolvedIdentityId + "/", protectedPath = (resolvedCustomPrefix.protected !== void 0 ? resolvedCustomPrefix.protected : "protected/") + resolvedIdentityId + "/", publicPath = resolvedCustomPrefix.public !== void 0 ? resolvedCustomPrefix.public : "public/";
  switch (level) {
    case "private":
      return privatePath;
    case "protected":
      return protectedPath;
    default:
      return publicPath;
  }
}, "getPrefix"), credentialsProvider = /* @__PURE__ */ __name(function() {
  return __awaiter$4(void 0, void 0, void 0, function() {
    var credentials, cred, error_1;
    return __generator$4(this, function(_a) {
      switch (_a.label) {
        case 0:
          return _a.trys.push([0, 2, , 3]), [4, Credentials.get()];
        case 1:
          return credentials = _a.sent(), credentials ? (cred = Credentials.shear(credentials), logger$4.debug("credentials provider get credentials", cred), [2, cred]) : [2, INVALID_CRED];
        case 2:
          return error_1 = _a.sent(), logger$4.warn("credentials provider error", error_1), [2, INVALID_CRED];
        case 3:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}, "credentialsProvider"), loadS3Config = /* @__PURE__ */ __name(function(config) {
  if (!config.region)
    throw new Error("Region is missing.");
  return __assign$4(__assign$4(__assign$4({}, config), { region: config.region, credentials: config.credentials ? function() {
    return Promise.resolve(config.credentials);
  } : credentialsProvider, userAgentValue: getAmplifyUserAgent({
    category: Category.Storage,
    action: config.storageAction
  }) }), config.dangerouslyConnectToHttpEndpointForTesting ? {
    customEndpoint: localTestingStorageEndpoint,
    forcePathStyle: !0
  } : {});
}, "loadS3Config"), MiB = 1024 * 1024, GiB = 1024 * MiB, TiB = 1024 * GiB, DEFAULT_PART_SIZE = 5 * MiB, MAX_OBJECT_SIZE = 5 * TiB, MAX_PARTS_COUNT = 1e4, DEFAULT_QUEUE_SIZE = 4, calculatePartSize = /* @__PURE__ */ __name(function(totalSize) {
  for (var partSize = DEFAULT_PART_SIZE, partsCount = Math.ceil(totalSize / partSize); partsCount > MAX_PARTS_COUNT; )
    partSize *= 2, partsCount = Math.ceil(totalSize / partSize);
  return partSize;
}, "calculatePartSize"), events = { exports: {} }, hasRequiredEvents;
function requireEvents() {
  if (hasRequiredEvents) return events.exports;
  hasRequiredEvents = 1;
  var R = typeof Reflect == "object" ? Reflect : null, ReflectApply = R && typeof R.apply == "function" ? R.apply : /* @__PURE__ */ __name(function(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }, "ReflectApply"), ReflectOwnKeys;
  R && typeof R.ownKeys == "function" ? ReflectOwnKeys = R.ownKeys : Object.getOwnPropertySymbols ? ReflectOwnKeys = /* @__PURE__ */ __name(function(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  }, "ReflectOwnKeys") : ReflectOwnKeys = /* @__PURE__ */ __name(function(target) {
    return Object.getOwnPropertyNames(target);
  }, "ReflectOwnKeys");
  function ProcessEmitWarning(warning) {
    console && console.warn && console.warn(warning);
  }
  __name(ProcessEmitWarning, "ProcessEmitWarning");
  var NumberIsNaN = Number.isNaN || /* @__PURE__ */ __name(function(value) {
    return value !== value;
  }, "NumberIsNaN");
  function EventEmitter() {
    EventEmitter.init.call(this);
  }
  __name(EventEmitter, "EventEmitter"), events.exports = EventEmitter, events.exports.once = once, EventEmitter.EventEmitter = EventEmitter, EventEmitter.prototype._events = void 0, EventEmitter.prototype._eventsCount = 0, EventEmitter.prototype._maxListeners = void 0;
  var defaultMaxListeners = 10;
  function checkListener(listener) {
    if (typeof listener != "function")
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  __name(checkListener, "checkListener"), Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: !0,
    get: /* @__PURE__ */ __name(function() {
      return defaultMaxListeners;
    }, "get"),
    set: /* @__PURE__ */ __name(function(arg) {
      if (typeof arg != "number" || arg < 0 || NumberIsNaN(arg))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
      defaultMaxListeners = arg;
    }, "set")
  }), EventEmitter.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, EventEmitter.prototype.setMaxListeners = /* @__PURE__ */ __name(function(n) {
    if (typeof n != "number" || n < 0 || NumberIsNaN(n))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    return this._maxListeners = n, this;
  }, "setMaxListeners");
  function _getMaxListeners(that) {
    return that._maxListeners === void 0 ? EventEmitter.defaultMaxListeners : that._maxListeners;
  }
  __name(_getMaxListeners, "_getMaxListeners"), EventEmitter.prototype.getMaxListeners = /* @__PURE__ */ __name(function() {
    return _getMaxListeners(this);
  }, "getMaxListeners"), EventEmitter.prototype.emit = /* @__PURE__ */ __name(function(type) {
    for (var args = [], i = 1; i < arguments.length; i++) args.push(arguments[i]);
    var doError = type === "error", events2 = this._events;
    if (events2 !== void 0)
      doError = doError && events2.error === void 0;
    else if (!doError)
      return !1;
    if (doError) {
      var er;
      if (args.length > 0 && (er = args[0]), er instanceof Error)
        throw er;
      var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
      throw err.context = er, err;
    }
    var handler = events2[type];
    if (handler === void 0)
      return !1;
    if (typeof handler == "function")
      ReflectApply(handler, this, args);
    else
      for (var len = handler.length, listeners = arrayClone(handler, len), i = 0; i < len; ++i)
        ReflectApply(listeners[i], this, args);
    return !0;
  }, "emit");
  function _addListener(target, type, listener, prepend) {
    var m, events2, existing;
    if (checkListener(listener), events2 = target._events, events2 === void 0 ? (events2 = target._events = /* @__PURE__ */ Object.create(null), target._eventsCount = 0) : (events2.newListener !== void 0 && (target.emit(
      "newListener",
      type,
      listener.listener ? listener.listener : listener
    ), events2 = target._events), existing = events2[type]), existing === void 0)
      existing = events2[type] = listener, ++target._eventsCount;
    else if (typeof existing == "function" ? existing = events2[type] = prepend ? [listener, existing] : [existing, listener] : prepend ? existing.unshift(listener) : existing.push(listener), m = _getMaxListeners(target), m > 0 && existing.length > m && !existing.warned) {
      existing.warned = !0;
      var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      w.name = "MaxListenersExceededWarning", w.emitter = target, w.type = type, w.count = existing.length, ProcessEmitWarning(w);
    }
    return target;
  }
  __name(_addListener, "_addListener"), EventEmitter.prototype.addListener = /* @__PURE__ */ __name(function(type, listener) {
    return _addListener(this, type, listener, !1);
  }, "addListener"), EventEmitter.prototype.on = EventEmitter.prototype.addListener, EventEmitter.prototype.prependListener = /* @__PURE__ */ __name(function(type, listener) {
    return _addListener(this, type, listener, !0);
  }, "prependListener");
  function onceWrapper() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  __name(onceWrapper, "onceWrapper");
  function _onceWrap(target, type, listener) {
    var state = { fired: !1, wrapFn: void 0, target, type, listener }, wrapped = onceWrapper.bind(state);
    return wrapped.listener = listener, state.wrapFn = wrapped, wrapped;
  }
  __name(_onceWrap, "_onceWrap"), EventEmitter.prototype.once = /* @__PURE__ */ __name(function(type, listener) {
    return checkListener(listener), this.on(type, _onceWrap(this, type, listener)), this;
  }, "once"), EventEmitter.prototype.prependOnceListener = /* @__PURE__ */ __name(function(type, listener) {
    return checkListener(listener), this.prependListener(type, _onceWrap(this, type, listener)), this;
  }, "prependOnceListener"), EventEmitter.prototype.removeListener = /* @__PURE__ */ __name(function(type, listener) {
    var list, events2, position, i, originalListener;
    if (checkListener(listener), events2 = this._events, events2 === void 0)
      return this;
    if (list = events2[type], list === void 0)
      return this;
    if (list === listener || list.listener === listener)
      --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete events2[type], events2.removeListener && this.emit("removeListener", type, list.listener || listener));
    else if (typeof list != "function") {
      for (position = -1, i = list.length - 1; i >= 0; i--)
        if (list[i] === listener || list[i].listener === listener) {
          originalListener = list[i].listener, position = i;
          break;
        }
      if (position < 0)
        return this;
      position === 0 ? list.shift() : spliceOne(list, position), list.length === 1 && (events2[type] = list[0]), events2.removeListener !== void 0 && this.emit("removeListener", type, originalListener || listener);
    }
    return this;
  }, "removeListener"), EventEmitter.prototype.off = EventEmitter.prototype.removeListener, EventEmitter.prototype.removeAllListeners = /* @__PURE__ */ __name(function(type) {
    var listeners, events2, i;
    if (events2 = this._events, events2 === void 0)
      return this;
    if (events2.removeListener === void 0)
      return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : events2[type] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete events2[type]), this;
    if (arguments.length === 0) {
      var keys = Object.keys(events2), key;
      for (i = 0; i < keys.length; ++i)
        key = keys[i], key !== "removeListener" && this.removeAllListeners(key);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (listeners = events2[type], typeof listeners == "function")
      this.removeListener(type, listeners);
    else if (listeners !== void 0)
      for (i = listeners.length - 1; i >= 0; i--)
        this.removeListener(type, listeners[i]);
    return this;
  }, "removeAllListeners");
  function _listeners(target, type, unwrap) {
    var events2 = target._events;
    if (events2 === void 0)
      return [];
    var evlistener = events2[type];
    return evlistener === void 0 ? [] : typeof evlistener == "function" ? unwrap ? [evlistener.listener || evlistener] : [evlistener] : unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
  }
  __name(_listeners, "_listeners"), EventEmitter.prototype.listeners = /* @__PURE__ */ __name(function(type) {
    return _listeners(this, type, !0);
  }, "listeners"), EventEmitter.prototype.rawListeners = /* @__PURE__ */ __name(function(type) {
    return _listeners(this, type, !1);
  }, "rawListeners"), EventEmitter.listenerCount = function(emitter, type) {
    return typeof emitter.listenerCount == "function" ? emitter.listenerCount(type) : listenerCount.call(emitter, type);
  }, EventEmitter.prototype.listenerCount = listenerCount;
  function listenerCount(type) {
    var events2 = this._events;
    if (events2 !== void 0) {
      var evlistener = events2[type];
      if (typeof evlistener == "function")
        return 1;
      if (evlistener !== void 0)
        return evlistener.length;
    }
    return 0;
  }
  __name(listenerCount, "listenerCount"), EventEmitter.prototype.eventNames = /* @__PURE__ */ __name(function() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
  }, "eventNames");
  function arrayClone(arr, n) {
    for (var copy = new Array(n), i = 0; i < n; ++i)
      copy[i] = arr[i];
    return copy;
  }
  __name(arrayClone, "arrayClone");
  function spliceOne(list, index) {
    for (; index + 1 < list.length; index++)
      list[index] = list[index + 1];
    list.pop();
  }
  __name(spliceOne, "spliceOne");
  function unwrapListeners(arr) {
    for (var ret = new Array(arr.length), i = 0; i < ret.length; ++i)
      ret[i] = arr[i].listener || arr[i];
    return ret;
  }
  __name(unwrapListeners, "unwrapListeners");
  function once(emitter, name) {
    return new Promise(function(resolve, reject) {
      function errorListener(err) {
        emitter.removeListener(name, resolver), reject(err);
      }
      __name(errorListener, "errorListener");
      function resolver() {
        typeof emitter.removeListener == "function" && emitter.removeListener("error", errorListener), resolve([].slice.call(arguments));
      }
      __name(resolver, "resolver"), eventTargetAgnosticAddListener(emitter, name, resolver, { once: !0 }), name !== "error" && addErrorHandlerIfEventEmitter(emitter, errorListener, { once: !0 });
    });
  }
  __name(once, "once");
  function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    typeof emitter.on == "function" && eventTargetAgnosticAddListener(emitter, "error", handler, flags);
  }
  __name(addErrorHandlerIfEventEmitter, "addErrorHandlerIfEventEmitter");
  function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on == "function")
      flags.once ? emitter.once(name, listener) : emitter.on(name, listener);
    else if (typeof emitter.addEventListener == "function")
      emitter.addEventListener(name, /* @__PURE__ */ __name(function wrapListener(arg) {
        flags.once && emitter.removeEventListener(name, wrapListener), listener(arg);
      }, "wrapListener"));
    else
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
  return __name(eventTargetAgnosticAddListener, "eventTargetAgnosticAddListener"), events.exports;
}
__name(requireEvents, "requireEvents");
var eventsExports = requireEvents(), __awaiter$3 = function(thisArg, _arguments, P, generator) {
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
}, calculateContentMd5 = /* @__PURE__ */ __name(function(content) {
  return __awaiter$3(void 0, void 0, void 0, function() {
    var hasher, buffer, digest;
    return __generator$3(this, function(_a) {
      switch (_a.label) {
        case 0:
          return hasher = new Md5(), typeof content != "string" ? [3, 1] : (hasher.update(content), [3, 3]);
        case 1:
          return [4, readFile(content)];
        case 2:
          buffer = _a.sent(), hasher.update(buffer), _a.label = 3;
        case 3:
          return [4, hasher.digest()];
        case 4:
          return digest = _a.sent(), [2, toBase64(digest)];
      }
    });
  });
}, "calculateContentMd5"), readFile = /* @__PURE__ */ __name(function(file) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onloadend = function() {
      reader.result && resolve(reader.result), reader.onabort = function() {
        return reject(new Error("Read aborted"));
      }, reader.onerror = function() {
        return reject(reader.error);
      };
    }, file !== void 0 && reader.readAsArrayBuffer(file);
  });
}, "readFile"), __assign$3 = function() {
  return __assign$3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$3.apply(this, arguments);
}, __awaiter$2 = function(thisArg, _arguments, P, generator) {
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
}, logger$3 = new ConsoleLogger("AWSS3ProviderManagedUpload"), AWSS3ProviderManagedUpload = (
  /** @class */
  (function() {
    function AWSS3ProviderManagedUpload2(params, opts, emitter) {
      this.opts = null, this.completedParts = [], this.partSize = DEFAULT_PART_SIZE, this.bytesUploaded = 0, this.totalBytesToUpload = 0, this.emitter = null, this.params = params, this.opts = __assign$3({ isObjectLockEnabled: !1 }, opts), this.emitter = emitter, this.s3Config = loadS3Config(__assign$3(__assign$3({}, opts), { emitter, storageAction: StorageAction.Put }));
    }
    return __name(AWSS3ProviderManagedUpload2, "AWSS3ProviderManagedUpload"), AWSS3ProviderManagedUpload2.prototype.upload = function() {
      return __awaiter$2(this, void 0, void 0, function() {
        var isObjectLockEnabled, _a, _b, _c, _d, _e, numberOfPartsToUpload, parts, start, error_1, _f, _this = this;
        return __generator$2(this, function(_g) {
          switch (_g.label) {
            case 0:
              return _g.trys.push([0, 12, , 14]), isObjectLockEnabled = this.opts.isObjectLockEnabled, isObjectLockEnabled !== !0 ? [3, 2] : (_a = this.params, [4, calculateContentMd5(
                // @ts-expect-error currently ReadableStream<any> is not being supported in put api
                this.params.Body
              )]);
            case 1:
              _a.ContentMD5 = _g.sent(), _g.label = 2;
            case 2:
              return this.body = this.validateAndSanitizeBody(this.params.Body), this.totalBytesToUpload = this.byteLength(this.body), this.totalBytesToUpload <= DEFAULT_PART_SIZE ? (this.params.Body = this.body, _b = putObject, _c = [this.s3Config], _d = [__assign$3({}, this.params)], _f = {}, [4, this.getObjectKeyWithPrefix(this.params.Key)]) : [3, 4];
            case 3:
              return [2, _b.apply(void 0, _c.concat([__assign$3.apply(void 0, _d.concat([(_f.Key = _g.sent(), _f)]))]))];
            case 4:
              return this.partSize = calculatePartSize(this.totalBytesToUpload), _e = this, [4, this.createMultiPartUpload()];
            case 5:
              _e.uploadId = _g.sent(), numberOfPartsToUpload = Math.ceil(this.totalBytesToUpload / this.partSize), parts = this.createParts(), start = 0, _g.label = 6;
            case 6:
              return start < numberOfPartsToUpload ? [4, this.uploadParts(this.uploadId, parts.slice(start, start + DEFAULT_QUEUE_SIZE))] : [3, 9];
            case 7:
              _g.sent(), _g.label = 8;
            case 8:
              return start += DEFAULT_QUEUE_SIZE, [3, 6];
            case 9:
              return parts.map(function(part) {
                _this.removeEventListener(part);
              }), [4, this.finishMultiPartUpload(this.uploadId)];
            case 10:
              return [2, _g.sent()];
            case 11:
              return [3, 14];
            case 12:
              return error_1 = _g.sent(), [4, this.cleanup(this.uploadId)];
            case 13:
              throw _g.sent(), logger$3.error("Error. Cancelling the multipart upload."), error_1;
            case 14:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AWSS3ProviderManagedUpload2.prototype.createParts = function() {
      try {
        for (var parts = [], bodyStart = 0; bodyStart < this.totalBytesToUpload; ) {
          var bodyEnd = Math.min(bodyStart + this.partSize, this.totalBytesToUpload);
          parts.push({
            bodyPart: this.body.slice(bodyStart, bodyEnd),
            partNumber: parts.length + 1,
            emitter: new eventsExports.EventEmitter(),
            _lastUploadedBytes: 0
          }), bodyStart += this.partSize;
        }
        return parts;
      } catch (error) {
        throw logger$3.error(error), error;
      }
    }, AWSS3ProviderManagedUpload2.prototype.createMultiPartUpload = function() {
      return __awaiter$2(this, void 0, void 0, function() {
        var response, _a, _b, _c, error_2, _d;
        return __generator$2(this, function(_e) {
          switch (_e.label) {
            case 0:
              return _e.trys.push([0, 3, , 4]), _a = createMultipartUpload, _b = [this.s3Config], _c = [__assign$3({}, this.params)], _d = {}, [4, this.getObjectKeyWithPrefix(this.params.Key)];
            case 1:
              return [4, _a.apply(void 0, _b.concat([__assign$3.apply(void 0, _c.concat([(_d.Key = _e.sent(), _d)]))]))];
            case 2:
              return response = _e.sent(), logger$3.debug(response.UploadId), [2, response.UploadId];
            case 3:
              throw error_2 = _e.sent(), logger$3.error(error_2), error_2;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AWSS3ProviderManagedUpload2.prototype.uploadParts = function(uploadId, parts) {
      return __awaiter$2(this, void 0, void 0, function() {
        var allResults, i, error_3, _this = this;
        return __generator$2(this, function(_a) {
          switch (_a.label) {
            case 0:
              return _a.trys.push([0, 2, , 3]), [4, Promise.all(parts.map(function(part) {
                return __awaiter$2(_this, void 0, void 0, function() {
                  var isObjectLockEnabled, _a2, _b, Bucket, SSECustomerAlgorithm, SSECustomerKey, SSECustomerKeyMD5, ContentMD5, res, _c, _d, _e;
                  return __generator$2(this, function(_f) {
                    switch (_f.label) {
                      case 0:
                        return this.setupEventListener(part), isObjectLockEnabled = this.opts.isObjectLockEnabled, isObjectLockEnabled ? (_a2 = this.params, [4, calculateContentMd5(part.bodyPart)]) : [3, 2];
                      case 1:
                        _a2.ContentMD5 = _f.sent(), _f.label = 2;
                      case 2:
                        return _b = this.params, _b.Key, Bucket = _b.Bucket, SSECustomerAlgorithm = _b.SSECustomerAlgorithm, SSECustomerKey = _b.SSECustomerKey, SSECustomerKeyMD5 = _b.SSECustomerKeyMD5, ContentMD5 = _b.ContentMD5, _c = uploadPart, _d = [__assign$3(__assign$3({}, this.s3Config), { emitter: part.emitter })], _e = {
                          PartNumber: part.partNumber,
                          Body: part.bodyPart,
                          UploadId: uploadId
                        }, [4, this.getObjectKeyWithPrefix(this.params.Key)];
                      case 3:
                        return [4, _c.apply(void 0, _d.concat([(_e.Key = _f.sent(), _e.Bucket = Bucket, _e.SSECustomerAlgorithm = SSECustomerAlgorithm, _e.SSECustomerKey = SSECustomerKey, _e.SSECustomerKeyMD5 = SSECustomerKeyMD5, _e.ContentMD5 = ContentMD5, _e)]))];
                      case 4:
                        return res = _f.sent(), [2, res];
                    }
                  });
                });
              }))];
            case 1:
              for (allResults = _a.sent(), i = 0; i < allResults.length; i++)
                this.completedParts.push({
                  PartNumber: parts[i].partNumber,
                  ETag: allResults[i].ETag
                });
              return [3, 3];
            case 2:
              throw error_3 = _a.sent(), logger$3.error("Error happened while uploading a part. Cancelling the multipart upload"), error_3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AWSS3ProviderManagedUpload2.prototype.finishMultiPartUpload = function(uploadId) {
      return __awaiter$2(this, void 0, void 0, function() {
        var input, Key, error_4, _a;
        return __generator$2(this, function(_b) {
          switch (_b.label) {
            case 0:
              return _a = {
                Bucket: this.params.Bucket
              }, [4, this.getObjectKeyWithPrefix(this.params.Key)];
            case 1:
              input = (_a.Key = _b.sent(), _a.UploadId = uploadId, _a.MultipartUpload = { Parts: this.completedParts }, _a), _b.label = 2;
            case 2:
              return _b.trys.push([2, 4, , 5]), [4, completeMultipartUpload(__assign$3(__assign$3({}, this.s3Config), { emitter: void 0 }), input)];
            case 3:
              return Key = _b.sent().Key, [2, Key];
            case 4:
              throw error_4 = _b.sent(), logger$3.error("Error happened while finishing the upload."), error_4;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AWSS3ProviderManagedUpload2.prototype.cleanup = function(uploadId) {
      return __awaiter$2(this, void 0, void 0, function() {
        var input, data, _a;
        return __generator$2(this, function(_b) {
          switch (_b.label) {
            case 0:
              return this.body = null, this.completedParts = [], this.bytesUploaded = 0, this.totalBytesToUpload = 0, uploadId ? (_a = {
                Bucket: this.params.Bucket
              }, [4, this.getObjectKeyWithPrefix(this.params.Key)]) : [
                2
                /*return*/
              ];
            case 1:
              return input = (_a.Key = _b.sent(), _a.UploadId = uploadId, _a), [4, abortMultipartUpload(this.s3Config, input)];
            case 2:
              return _b.sent(), [4, listParts(this.s3Config, input)];
            case 3:
              if (data = _b.sent(), data && data.Parts && data.Parts.length > 0)
                throw new Error("Multipart upload clean up failed.");
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AWSS3ProviderManagedUpload2.prototype.removeEventListener = function(part) {
      part.emitter.removeAllListeners(SEND_UPLOAD_PROGRESS_EVENT), part.emitter.removeAllListeners(SEND_DOWNLOAD_PROGRESS_EVENT);
    }, AWSS3ProviderManagedUpload2.prototype.setupEventListener = function(part) {
      var _this = this;
      part.emitter.on(SEND_UPLOAD_PROGRESS_EVENT, function(progress) {
        _this.progressChanged(part.partNumber, progress.loaded - part._lastUploadedBytes), part._lastUploadedBytes = progress.loaded;
      });
    }, AWSS3ProviderManagedUpload2.prototype.progressChanged = function(partNumber, incrementalUpdate) {
      this.bytesUploaded += incrementalUpdate, this.emitter.emit(SEND_UPLOAD_PROGRESS_EVENT, {
        loaded: this.bytesUploaded,
        total: this.totalBytesToUpload,
        part: partNumber,
        key: this.params.Key
      });
    }, AWSS3ProviderManagedUpload2.prototype.byteLength = function(input) {
      if (input == null)
        return 0;
      if (typeof input.byteLength == "number")
        return input.byteLength;
      if (typeof input.length == "number")
        return input.length;
      if (typeof input.size == "number")
        return input.size;
      if (typeof input.path != "string") throw new Error("Cannot determine length of " + input);
    }, AWSS3ProviderManagedUpload2.prototype.validateAndSanitizeBody = function(body) {
      var sanitizedBody = this.isGenericObject(body) ? JSON.stringify(body) : body;
      if (this.byteLength(sanitizedBody) > MAX_OBJECT_SIZE)
        throw new Error("File size bigger than S3 Object limit of 5TB, got ".concat(this.totalBytesToUpload, " Bytes"));
      return sanitizedBody;
    }, AWSS3ProviderManagedUpload2.prototype.isGenericObject = function(body) {
      if (body !== null && typeof body == "object")
        try {
          return !(this.byteLength(body) >= 0);
        } catch {
          return !0;
        }
      return !1;
    }, AWSS3ProviderManagedUpload2.prototype.getObjectKeyWithPrefix = function(keyWithoutPrefix) {
      return __awaiter$2(this, void 0, void 0, function() {
        var _a, _b, _c;
        return __generator$2(this, function(_d) {
          switch (_d.label) {
            case 0:
              return _a = getPrefix, _b = [__assign$3({}, this.opts)], _c = {}, [4, credentialsProvider()];
            case 1:
              return [4, _a.apply(void 0, [__assign$3.apply(void 0, _b.concat([(_c.credentials = _d.sent(), _c)]))])];
            case 2:
              return [2, _d.sent() + keyWithoutPrefix];
          }
        });
      });
    }, AWSS3ProviderManagedUpload2;
  })()
), __assign$2 = function() {
  return __assign$2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$2.apply(this, arguments);
}, __awaiter$1 = function(thisArg, _arguments, P, generator) {
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
}, logger$2 = new ConsoleLogger("AWSS3UploadTask"), AWSS3UploadTaskState;
(function(AWSS3UploadTaskState2) {
  AWSS3UploadTaskState2[AWSS3UploadTaskState2.INIT = 0] = "INIT", AWSS3UploadTaskState2[AWSS3UploadTaskState2.IN_PROGRESS = 1] = "IN_PROGRESS", AWSS3UploadTaskState2[AWSS3UploadTaskState2.PAUSED = 2] = "PAUSED", AWSS3UploadTaskState2[AWSS3UploadTaskState2.CANCELLED = 3] = "CANCELLED", AWSS3UploadTaskState2[AWSS3UploadTaskState2.COMPLETED = 4] = "COMPLETED";
})(AWSS3UploadTaskState || (AWSS3UploadTaskState = {}));
var TaskEvents;
(function(TaskEvents2) {
  TaskEvents2.CANCEL = "cancel", TaskEvents2.UPLOAD_COMPLETE = "uploadComplete", TaskEvents2.UPLOAD_PROGRESS = "uploadPartProgress", TaskEvents2.ERROR = "error";
})(TaskEvents || (TaskEvents = {}));
function comparePartNumber(a, b) {
  return a.PartNumber - b.PartNumber;
}
__name(comparePartNumber, "comparePartNumber");
var AWSS3UploadTask = (
  /** @class */
  (function() {
    function AWSS3UploadTask2(_a) {
      var s3Config = _a.s3Config, file = _a.file, emitter = _a.emitter, storage = _a.storage, params = _a.params, level = _a.level, prefixPromise = _a.prefixPromise;
      this.queueSize = DEFAULT_QUEUE_SIZE, this.partSize = DEFAULT_PART_SIZE, this.inProgress = [], this.completedParts = [], this.queued = [], this.bytesUploaded = 0, this.totalBytes = 0, this.state = AWSS3UploadTaskState.INIT, this.prefixPromise = prefixPromise, this.s3Config = s3Config, this.storage = storage, this.storageSync = Promise.resolve(), typeof this.storage.sync == "function" && (this.storageSync = this.storage.sync()), this.params = params, this.file = file, this.totalBytes = this.file.size, this.bytesUploaded = 0, this.emitter = emitter, this.queued = [], this.fileId = this._getFileId(level), this._validateParams(), this.emitter.on(TaskEvents.ERROR, function() {
      });
    }
    return __name(AWSS3UploadTask2, "AWSS3UploadTask"), Object.defineProperty(AWSS3UploadTask2.prototype, "percent", {
      get: /* @__PURE__ */ __name(function() {
        return this.bytesUploaded / this.totalBytes * 100;
      }, "get"),
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(AWSS3UploadTask2.prototype, "isInProgress", {
      get: /* @__PURE__ */ __name(function() {
        return this.state === AWSS3UploadTaskState.IN_PROGRESS;
      }, "get"),
      enumerable: !1,
      configurable: !0
    }), AWSS3UploadTask2.prototype._listSingleFile = function(_a) {
      var key = _a.key, bucket = _a.bucket;
      return __awaiter$1(this, void 0, void 0, function() {
        var objectKeyPrefix, _b, Contents, obj;
        return __generator$1(this, function(_c) {
          switch (_c.label) {
            case 0:
              return [4, this.prefixPromise];
            case 1:
              return objectKeyPrefix = _c.sent(), [4, listObjectsV2(this.s3Config, {
                Bucket: bucket,
                Prefix: objectKeyPrefix + key
              })];
            case 2:
              return _b = _c.sent().Contents, Contents = _b === void 0 ? [] : _b, obj = Contents.find(function(o) {
                return o.Key === "".concat(objectKeyPrefix).concat(key);
              }), [2, obj];
          }
        });
      });
    }, AWSS3UploadTask2.prototype._getFileId = function(level) {
      return isFile(this.file) ? [
        this.file.name,
        this.file.lastModified,
        this.file.size,
        this.file.type,
        this.params.Bucket,
        level,
        this.params.Key
      ].join("-") : [
        this.file.size,
        this.file.type,
        this.params.Bucket,
        level,
        this.params.Key
      ].join("-");
    }, AWSS3UploadTask2.prototype._findCachedUploadParts = function() {
      return __awaiter$1(this, void 0, void 0, function() {
        var uploadRequests, cachedUploadFileData, _a, Parts, _b, _c, _d;
        return __generator$1(this, function(_e) {
          switch (_e.label) {
            case 0:
              return [4, this._listCachedUploadTasks()];
            case 1:
              return uploadRequests = _e.sent(), Object.keys(uploadRequests).length === 0 || !Object.prototype.hasOwnProperty.call(uploadRequests, this.fileId) ? [2, { parts: [], uploadId: null }] : (cachedUploadFileData = uploadRequests[this.fileId], cachedUploadFileData.lastTouched = Date.now(), this.storage.setItem(UPLOADS_STORAGE_KEY, JSON.stringify(uploadRequests)), _b = listParts, _c = [this.s3Config], _d = {
                Bucket: this.params.Bucket
              }, [4, this.prefixPromise]);
            case 2:
              return [4, _b.apply(void 0, _c.concat([(_d.Key = _e.sent() + this.params.Key, _d.UploadId = cachedUploadFileData.uploadId, _d)]))];
            case 3:
              return _a = _e.sent().Parts, Parts = _a === void 0 ? [] : _a, [2, {
                parts: Parts,
                uploadId: cachedUploadFileData.uploadId
              }];
          }
        });
      });
    }, AWSS3UploadTask2.prototype._emitEvent = function(event, payload) {
      this.emitter.emit(event, payload);
    }, AWSS3UploadTask2.prototype._validateParams = function() {
      if (this.totalBytes > MAX_OBJECT_SIZE)
        throw new Error("File size bigger than S3 Object limit of 5TB, got ".concat(this.totalBytes, " Bytes"));
    }, AWSS3UploadTask2.prototype._listCachedUploadTasks = function() {
      return __awaiter$1(this, void 0, void 0, function() {
        var tasks;
        return __generator$1(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.storageSync];
            case 1:
              return _a.sent(), tasks = this.storage.getItem(UPLOADS_STORAGE_KEY) || "{}", [2, JSON.parse(tasks)];
          }
        });
      });
    }, AWSS3UploadTask2.prototype._cache = function(fileMetadata) {
      return __awaiter$1(this, void 0, void 0, function() {
        var uploadRequests;
        return __generator$1(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this._listCachedUploadTasks()];
            case 1:
              return uploadRequests = _a.sent(), uploadRequests[this.fileId] = fileMetadata, this.storage.setItem(UPLOADS_STORAGE_KEY, JSON.stringify(uploadRequests)), [
                2
                /*return*/
              ];
          }
        });
      });
    }, AWSS3UploadTask2.prototype._isCached = function() {
      return __awaiter$1(this, void 0, void 0, function() {
        var _a, _b;
        return __generator$1(this, function(_c) {
          switch (_c.label) {
            case 0:
              return _b = (_a = Object.prototype.hasOwnProperty).call, [4, this._listCachedUploadTasks()];
            case 1:
              return [2, _b.apply(_a, [_c.sent(), this.fileId])];
          }
        });
      });
    }, AWSS3UploadTask2.prototype._removeFromCache = function() {
      return __awaiter$1(this, void 0, void 0, function() {
        var uploadRequests;
        return __generator$1(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this._listCachedUploadTasks()];
            case 1:
              return uploadRequests = _a.sent(), delete uploadRequests[this.fileId], this.storage.setItem(UPLOADS_STORAGE_KEY, JSON.stringify(uploadRequests)), [
                2
                /*return*/
              ];
          }
        });
      });
    }, AWSS3UploadTask2.prototype._onPartUploadCompletion = function(_a) {
      var eTag = _a.eTag, partNumber = _a.partNumber, chunk = _a.chunk;
      return __awaiter$1(this, void 0, void 0, function() {
        return __generator$1(this, function(_b) {
          return this.completedParts.push({
            ETag: eTag,
            PartNumber: partNumber
          }), this.bytesUploaded += byteLength(chunk), this._emitEvent(TaskEvents.UPLOAD_PROGRESS, {
            loaded: this.bytesUploaded,
            total: this.totalBytes
          }), this.inProgress = this.inProgress.filter(function(job) {
            return job.uploadPartInput.PartNumber !== partNumber;
          }), this.queued.length && this.state !== AWSS3UploadTaskState.PAUSED && this._startNextPart(), this._isDone() && this._completeUpload(), [
            2
            /*return*/
          ];
        });
      });
    }, AWSS3UploadTask2.prototype._completeUpload = function() {
      return __awaiter$1(this, void 0, void 0, function() {
        var _a, _b, err_1, _c;
        return __generator$1(this, function(_d) {
          switch (_d.label) {
            case 0:
              return _d.trys.push([0, 4, , 5]), _a = completeMultipartUpload, _b = [this.s3Config], _c = {
                Bucket: this.params.Bucket
              }, [4, this.prefixPromise];
            case 1:
              return [4, _a.apply(void 0, _b.concat([(_c.Key = _d.sent() + this.params.Key, _c.UploadId = this.uploadId, _c.MultipartUpload = {
                // Parts are not always completed in order, we need to manually sort them
                Parts: __spreadArray$1([], __read$2(this.completedParts), !1).sort(comparePartNumber)
              }, _c)]))];
            case 2:
              return _d.sent(), [4, this._verifyFileSize()];
            case 3:
              return _d.sent(), this._emitEvent(TaskEvents.UPLOAD_COMPLETE, {
                key: this.params.Key
              }), this._removeFromCache(), this.state = AWSS3UploadTaskState.COMPLETED, [3, 5];
            case 4:
              return err_1 = _d.sent(), logger$2.error("error completing upload", err_1), this._emitEvent(TaskEvents.ERROR, err_1), [3, 5];
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AWSS3UploadTask2.prototype._makeUploadPartRequest = function(input, abortSignal) {
      return __awaiter$1(this, void 0, void 0, function() {
        var res, _a, _b, _c, err_2, _d;
        return __generator$1(this, function(_e) {
          switch (_e.label) {
            case 0:
              return _e.trys.push([0, 4, , 5]), _a = uploadPart, _b = [__assign$2(__assign$2({}, this.s3Config), { abortSignal })], _c = [__assign$2({}, input)], _d = {}, [4, this.prefixPromise];
            case 1:
              return [4, _a.apply(void 0, _b.concat([__assign$2.apply(void 0, _c.concat([(_d.Key = _e.sent() + this.params.Key, _d)]))]))];
            case 2:
              return res = _e.sent(), [4, this._onPartUploadCompletion({
                eTag: res.ETag,
                partNumber: input.PartNumber,
                chunk: input.Body
              })];
            case 3:
              return _e.sent(), [3, 5];
            case 4:
              return err_2 = _e.sent(), this.state === AWSS3UploadTaskState.PAUSED ? logger$2.log("upload paused") : this.state === AWSS3UploadTaskState.CANCELLED ? logger$2.log("upload aborted") : logger$2.error("error starting next part of upload: ", err_2), !isCancelError(err_2) && err_2.message !== CANCELED_ERROR_MESSAGE && (this._emitEvent(TaskEvents.ERROR, err_2), this.pause()), [3, 5];
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AWSS3UploadTask2.prototype._startNextPart = function() {
      if (this.queued.length > 0 && this.state !== AWSS3UploadTaskState.PAUSED) {
        var abortController = new AbortController(), nextPart = this.queued.shift();
        this.inProgress.push({
          uploadPartInput: nextPart,
          s3Request: this._makeUploadPartRequest(nextPart, abortController.signal),
          abortController
        });
      }
    }, AWSS3UploadTask2.prototype._verifyFileSize = function() {
      return __awaiter$1(this, void 0, void 0, function() {
        var valid, obj, e_1;
        return __generator$1(this, function(_a) {
          switch (_a.label) {
            case 0:
              return _a.trys.push([0, 2, , 3]), [4, this._listSingleFile({
                key: this.params.Key,
                bucket: this.params.Bucket
              })];
            case 1:
              return obj = _a.sent(), valid = !!(obj && obj.Size === this.file.size), [3, 3];
            case 2:
              return e_1 = _a.sent(), logger$2.log("Could not get file on s3 for size matching: ", e_1), [
                2
                /*return*/
              ];
            case 3:
              if (!valid)
                throw new Error("File size does not match between local file and file on s3");
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AWSS3UploadTask2.prototype._isDone = function() {
      return !this.queued.length && !this.inProgress.length && this.bytesUploaded === this.totalBytes;
    }, AWSS3UploadTask2.prototype._createParts = function() {
      for (var size = this.file.size, parts = [], bodyStart = 0; bodyStart < size; ) {
        var bodyEnd = Math.min(bodyStart + this.partSize, size);
        parts.push({
          Body: this.file.slice(bodyStart, bodyEnd),
          Key: this.params.Key,
          Bucket: this.params.Bucket,
          PartNumber: parts.length + 1,
          UploadId: this.uploadId
        }), bodyStart += this.partSize;
      }
      return parts;
    }, AWSS3UploadTask2.prototype._initCachedUploadParts = function(cachedParts) {
      this.bytesUploaded += cachedParts.reduce(function(acc, part) {
        return acc + part.Size;
      }, 0);
      var uploadedPartNumSet = new Set(cachedParts.map(function(part) {
        return part.PartNumber;
      }));
      this.queued = this.queued.filter(function(part) {
        return !uploadedPartNumSet.has(part.PartNumber);
      }), this.completedParts = cachedParts.map(function(part) {
        return {
          PartNumber: part.PartNumber,
          ETag: part.ETag
        };
      }), this._emitEvent(TaskEvents.UPLOAD_PROGRESS, {
        loaded: this.bytesUploaded,
        total: this.totalBytes
      });
    }, AWSS3UploadTask2.prototype._initMultipartUpload = function() {
      return __awaiter$1(this, void 0, void 0, function() {
        var res, _a, _b, _c, _d;
        return __generator$1(this, function(_e) {
          switch (_e.label) {
            case 0:
              return _a = createMultipartUpload, _b = [this.s3Config], _c = [__assign$2({}, this.params)], _d = {}, [4, this.prefixPromise];
            case 1:
              return [4, _a.apply(void 0, _b.concat([__assign$2.apply(void 0, _c.concat([(_d.Key = _e.sent() + this.params.Key, _d)]))]))];
            case 2:
              return res = _e.sent(), this._cache({
                uploadId: res.UploadId,
                lastTouched: Date.now(),
                bucket: this.params.Bucket,
                key: this.params.Key,
                fileName: this.file instanceof File ? this.file.name : ""
              }), [2, res.UploadId];
          }
        });
      });
    }, AWSS3UploadTask2.prototype._initializeUploadTask = function() {
      return __awaiter$1(this, void 0, void 0, function() {
        var _a, parts, uploadId, uploadId, err_3;
        return __generator$1(this, function(_b) {
          switch (_b.label) {
            case 0:
              this.state = AWSS3UploadTaskState.IN_PROGRESS, this.partSize = calculatePartSize(this.totalBytes), _b.label = 1;
            case 1:
              return _b.trys.push([1, 7, , 8]), [4, this._isCached()];
            case 2:
              return _b.sent() ? [4, this._findCachedUploadParts()] : [3, 4];
            case 3:
              return _a = _b.sent(), parts = _a.parts, uploadId = _a.uploadId, this.uploadId = uploadId, this.queued = this._createParts(), this._initCachedUploadParts(parts), this._isDone() ? this._completeUpload() : this._startUpload(), [3, 6];
            case 4:
              return this.uploadId ? [3, 6] : [4, this._initMultipartUpload()];
            case 5:
              uploadId = _b.sent(), this.uploadId = uploadId, this.queued = this._createParts(), this._startUpload(), _b.label = 6;
            case 6:
              return [3, 8];
            case 7:
              return err_3 = _b.sent(), isCancelError(err_3) || (logger$2.error("Error initializing the upload task", err_3), this._emitEvent(TaskEvents.ERROR, err_3)), [3, 8];
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AWSS3UploadTask2.prototype.resume = function() {
      this.state === AWSS3UploadTaskState.CANCELLED ? logger$2.warn("This task has already been cancelled") : this.state === AWSS3UploadTaskState.COMPLETED ? logger$2.warn("This task has already been completed") : this.state === AWSS3UploadTaskState.IN_PROGRESS ? logger$2.warn("Upload task already in progress") : this.uploadId ? this._startUpload() : this._initializeUploadTask();
    }, AWSS3UploadTask2.prototype._startUpload = function() {
      this.state = AWSS3UploadTaskState.IN_PROGRESS;
      for (var i = 0; i < this.queueSize; i++)
        this._startNextPart();
    }, AWSS3UploadTask2.prototype._cancel = function() {
      return __awaiter$1(this, void 0, void 0, function() {
        var _a, _b, err_4, _c;
        return __generator$1(this, function(_d) {
          switch (_d.label) {
            case 0:
              return this.state !== AWSS3UploadTaskState.CANCELLED ? [3, 1] : (logger$2.warn("This task has already been cancelled"), [2, !1]);
            case 1:
              return this.state !== AWSS3UploadTaskState.COMPLETED ? [3, 2] : (logger$2.warn("This task has already been completed"), [2, !1]);
            case 2:
              this.pause(), this.queued = [], this.completedParts = [], this.bytesUploaded = 0, this.state = AWSS3UploadTaskState.CANCELLED, _d.label = 3;
            case 3:
              return _d.trys.push([3, 7, , 8]), _a = abortMultipartUpload, _b = [this.s3Config], _c = {
                Bucket: this.params.Bucket
              }, [4, this.prefixPromise];
            case 4:
              return [4, _a.apply(void 0, _b.concat([(_c.Key = _d.sent() + this.params.Key, _c.UploadId = this.uploadId, _c)]))];
            case 5:
              return _d.sent(), [4, this._removeFromCache()];
            case 6:
              return _d.sent(), [2, !0];
            case 7:
              return err_4 = _d.sent(), logger$2.error("Error cancelling upload task", err_4), [2, !1];
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AWSS3UploadTask2.prototype.pause = function() {
      var _a;
      this.state === AWSS3UploadTaskState.CANCELLED ? logger$2.warn("This task has already been cancelled") : this.state === AWSS3UploadTaskState.COMPLETED ? logger$2.warn("This task has already been completed") : this.state === AWSS3UploadTaskState.PAUSED && logger$2.warn("This task is already paused"), this.state = AWSS3UploadTaskState.PAUSED;
      var removedInProgressReq = this.inProgress.splice(0, this.inProgress.length);
      removedInProgressReq.forEach(function(req) {
        req.abortController.abort();
      }), (_a = this.queued).unshift.apply(_a, __spreadArray$1([], __read$2(removedInProgressReq.map(function(req) {
        return req.uploadPartInput;
      })), !1));
    }, AWSS3UploadTask2;
  })()
), __assign$1 = function() {
  return __assign$1 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign$1.apply(this, arguments);
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
}, logger$1 = new ConsoleLogger("AWSS3Provider"), DEFAULT_STORAGE_LEVEL = "public", DEFAULT_PRESIGN_EXPIRATION = 900, AWSS3Provider = (
  /** @class */
  (function() {
    function AWSS3Provider2(config) {
      var _this = this;
      this._config = config || {}, this._storage = new StorageHelper().getStorage(), Hub.listen("auth", function(data) {
        var payload = data.payload;
        (payload.event === "signOut" || payload.event === "signIn") && _this._storage.removeItem(UPLOADS_STORAGE_KEY);
      }), logger$1.debug("Storage Options", this._config);
    }
    return __name(AWSS3Provider2, "AWSS3Provider"), AWSS3Provider2.prototype.getCategory = function() {
      return AWSS3Provider2.CATEGORY;
    }, AWSS3Provider2.prototype.getProviderName = function() {
      return AWSS3Provider2.PROVIDER_NAME;
    }, AWSS3Provider2.prototype.configure = function(config) {
      if (logger$1.debug("configure Storage", config), !config)
        return this._config;
      var amplifyConfig = parseAWSExports(config);
      return this._config = Object.assign({}, this._config, amplifyConfig.Storage), this._config.bucket || logger$1.debug("Do not have bucket yet"), this._config;
    }, AWSS3Provider2.prototype.startResumableUpload = function(addTaskInput, config) {
      var _a, s3Config = addTaskInput.s3Config, emitter = addTaskInput.emitter, key = addTaskInput.key, file = addTaskInput.file, params = addTaskInput.params, progressCallback = config.progressCallback, completeCallback = config.completeCallback, errorCallback = config.errorCallback, track = (_a = config.track, _a === void 0 ? !1 : _a);
      if (!(file instanceof Blob))
        throw new Error(StorageErrorStrings.INVALID_BLOB);
      emitter.on(TaskEvents.UPLOAD_PROGRESS, function(event) {
        progressCallback && (typeof progressCallback == "function" ? progressCallback(event) : logger$1.warn("progressCallback should be a function, not a " + typeof progressCallback));
      }), emitter.on(TaskEvents.UPLOAD_COMPLETE, function(event) {
        completeCallback && (typeof completeCallback == "function" ? completeCallback(event) : logger$1.warn("completeCallback should be a function, not a " + typeof completeCallback));
      }), emitter.on(TaskEvents.ERROR, function(err) {
        errorCallback && (typeof errorCallback == "function" ? errorCallback(err) : logger$1.warn("errorCallback should be a function, not a " + typeof errorCallback));
      });
      var prefixPromise = Credentials.get().then(function(credentials) {
        var cred = Credentials.shear(credentials);
        return getPrefix(__assign$1(__assign$1({}, config), { level: addTaskInput.accessLevel, credentials: cred }));
      }), task = new AWSS3UploadTask({
        s3Config,
        file,
        emitter,
        level: addTaskInput.accessLevel,
        storage: this._storage,
        params,
        prefixPromise
      });
      return dispatchStorageEvent(track, "upload", { method: "put", result: "success" }, null, "Upload Task created successfully for ".concat(key)), task.resume(), task;
    }, AWSS3Provider2.prototype.copy = function(src, dest, config) {
      return __awaiter(this, void 0, void 0, function() {
        var credentialsOK, opt, acl, bucket, cacheControl, expires, track, serverSideEncryption, SSECustomerAlgorithm, SSECustomerKey, SSECustomerKeyMD5, SSEKMSKeyId, srcLevel, srcIdentityId, srcKey, destLevel, destKey, srcPrefix, destPrefix, finalSrcKey, finalDestKey, params, error_1, _a, _b;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              return [4, this._ensureCredentials()];
            case 1:
              if (credentialsOK = _c.sent(), !credentialsOK || !this._isWithCredentials(this._config))
                throw new Error(StorageErrorStrings.NO_CREDENTIALS);
              if (opt = Object.assign({}, this._config, config), acl = opt.acl, bucket = opt.bucket, cacheControl = opt.cacheControl, expires = opt.expires, track = opt.track, serverSideEncryption = opt.serverSideEncryption, SSECustomerAlgorithm = opt.SSECustomerAlgorithm, SSECustomerKey = opt.SSECustomerKey, SSECustomerKeyMD5 = opt.SSECustomerKeyMD5, SSEKMSKeyId = opt.SSEKMSKeyId, srcLevel = (_a = src.level, _a === void 0 ? DEFAULT_STORAGE_LEVEL : _a), srcIdentityId = src.identityId, srcKey = src.key, destLevel = (_b = dest.level, _b === void 0 ? DEFAULT_STORAGE_LEVEL : _b), destKey = dest.key, !srcKey || typeof srcKey != "string")
                throw new Error(StorageErrorStrings.NO_SRC_KEY);
              if (!destKey || typeof destKey != "string")
                throw new Error(StorageErrorStrings.NO_DEST_KEY);
              srcLevel !== "protected" && srcIdentityId && logger$1.warn(`You may copy files from another user if the source level is "protected", currently it's `.concat(srcLevel)), srcPrefix = this._prefix(__assign$1(__assign$1(__assign$1({}, opt), { level: srcLevel }), srcIdentityId && { identityId: srcIdentityId })), destPrefix = this._prefix(__assign$1(__assign$1({}, opt), { level: destLevel })), finalSrcKey = "".concat(bucket, "/").concat(srcPrefix).concat(srcKey), finalDestKey = "".concat(destPrefix).concat(destKey), logger$1.debug("copying ".concat(finalSrcKey, " to ").concat(finalDestKey)), params = {
                Bucket: bucket,
                CopySource: finalSrcKey,
                Key: finalDestKey,
                // Copies over metadata like contentType as well
                MetadataDirective: "COPY"
              }, cacheControl && (params.CacheControl = cacheControl), expires && (params.Expires = expires), serverSideEncryption && (params.ServerSideEncryption = serverSideEncryption), SSECustomerAlgorithm && (params.SSECustomerAlgorithm = SSECustomerAlgorithm), SSECustomerKey && (params.SSECustomerKey = SSECustomerKey), SSECustomerKeyMD5 && (params.SSECustomerKeyMD5 = SSECustomerKeyMD5), SSEKMSKeyId && (params.SSEKMSKeyId = SSEKMSKeyId), acl && (params.ACL = acl), _c.label = 2;
            case 2:
              return _c.trys.push([2, 4, , 5]), [4, copyObject(loadS3Config(__assign$1(__assign$1({}, opt), { storageAction: StorageAction.Copy })), params)];
            case 3:
              return _c.sent(), dispatchStorageEvent(track, "copy", {
                method: "copy",
                result: "success"
              }, null, "Copy success from ".concat(srcKey, " to ").concat(destKey)), [2, {
                key: destKey
              }];
            case 4:
              throw error_1 = _c.sent(), dispatchStorageEvent(track, "copy", {
                method: "copy",
                result: "failed"
              }, null, "Copy failed from ".concat(srcKey, " to ").concat(destKey)), error_1;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AWSS3Provider2.prototype.get = function(key, config) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var credentialsOK, opt, bucket, download, cacheControl, contentDisposition, contentEncoding, contentLanguage, contentType, expires, track, SSECustomerAlgorithm, SSECustomerKey, SSECustomerKeyMD5, progressCallback, validateObjectExistence, prefix, final_key, emitter, s3Config, params, response, error_2, error_3, url, _b, _c, error_4, _d, _e;
        return __generator(this, function(_f) {
          switch (_f.label) {
            case 0:
              return [4, this._ensureCredentials()];
            case 1:
              if (credentialsOK = _f.sent(), !credentialsOK || !this._isWithCredentials(this._config))
                throw new Error(StorageErrorStrings.NO_CREDENTIALS);
              if (opt = Object.assign({}, this._config, config), bucket = opt.bucket, download = opt.download, cacheControl = opt.cacheControl, contentDisposition = opt.contentDisposition, contentEncoding = opt.contentEncoding, contentLanguage = opt.contentLanguage, contentType = opt.contentType, expires = opt.expires, track = opt.track, SSECustomerAlgorithm = opt.SSECustomerAlgorithm, SSECustomerKey = opt.SSECustomerKey, SSECustomerKeyMD5 = opt.SSECustomerKeyMD5, progressCallback = opt.progressCallback, validateObjectExistence = (_d = opt.validateObjectExistence, _d === void 0 ? !1 : _d), prefix = this._prefix(opt), final_key = prefix + key, emitter = new eventsExports.EventEmitter(), s3Config = loadS3Config(__assign$1(__assign$1({}, opt), { emitter, storageAction: StorageAction.Get })), logger$1.debug("get " + key + " from " + final_key), params = {
                Bucket: bucket,
                Key: final_key
              }, cacheControl && (params.ResponseCacheControl = cacheControl), contentDisposition && (params.ResponseContentDisposition = contentDisposition), contentEncoding && (params.ResponseContentEncoding = contentEncoding), contentLanguage && (params.ResponseContentLanguage = contentLanguage), contentType && (params.ResponseContentType = contentType), SSECustomerAlgorithm && (params.SSECustomerAlgorithm = SSECustomerAlgorithm), SSECustomerKey && (params.SSECustomerKey = SSECustomerKey), SSECustomerKeyMD5 && (params.SSECustomerKeyMD5 = SSECustomerKeyMD5), download !== !0) return [3, 5];
              _f.label = 2;
            case 2:
              return _f.trys.push([2, 4, , 5]), progressCallback && (typeof progressCallback == "function" ? emitter.on(SEND_DOWNLOAD_PROGRESS_EVENT, function(progress) {
                progressCallback(progress);
              }) : logger$1.warn("progressCallback should be a function, not a " + typeof progressCallback)), [4, getObject(s3Config, params)];
            case 3:
              return response = _f.sent(), emitter.removeAllListeners(SEND_DOWNLOAD_PROGRESS_EVENT), dispatchStorageEvent(track, "download", { method: "get", result: "success" }, {
                fileSize: Number(response.Body.size || response.Body.length)
              }, "Download success for ".concat(key)), [2, response];
            case 4:
              throw error_2 = _f.sent(), dispatchStorageEvent(track, "download", {
                method: "get",
                result: "failed"
              }, null, "Download failed with ".concat(error_2.message)), error_2;
            case 5:
              if (!validateObjectExistence) return [3, 9];
              _f.label = 6;
            case 6:
              return _f.trys.push([6, 8, , 9]), [4, headObject(s3Config, params)];
            case 7:
              return _f.sent(), [3, 9];
            case 8:
              throw error_3 = _f.sent(), ((_a = error_3.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) === 404 && dispatchStorageEvent(track, "getSignedUrl", {
                method: "get",
                result: "failed"
              }, null, "".concat(key, " not found")), error_3;
            case 9:
              return _f.trys.push([9, 12, , 13]), _b = getPresignedGetObjectUrl, _c = [__assign$1({}, s3Config)], _e = { expiration: expires || DEFAULT_PRESIGN_EXPIRATION }, [4, s3Config.credentials()];
            case 10:
              return [4, _b.apply(void 0, [__assign$1.apply(void 0, _c.concat([(_e.credentials = _f.sent(), _e.signingRegion = s3Config.region, _e.signingService = SERVICE_NAME, _e)])), params])];
            case 11:
              return url = _f.sent(), dispatchStorageEvent(track, "getSignedUrl", { method: "get", result: "success" }, null, "Signed URL: ".concat(url)), [2, url];
            case 12:
              throw error_4 = _f.sent(), logger$1.warn("get signed url error", error_4), dispatchStorageEvent(track, "getSignedUrl", { method: "get", result: "failed" }, null, "Could not get a signed URL for ".concat(key)), error_4;
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AWSS3Provider2.prototype.getProperties = function(key, config) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var credentialsOK, opt, bucket, track, SSECustomerAlgorithm, SSECustomerKey, SSECustomerKeyMD5, prefix, final_key, s3Config, params, response, getPropertiesResponse, error_5, _b;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              return [4, this._ensureCredentials()];
            case 1:
              if (credentialsOK = _c.sent(), !credentialsOK || !this._isWithCredentials(this._config))
                throw new Error(StorageErrorStrings.NO_CREDENTIALS);
              opt = Object.assign({}, this._config, config), bucket = opt.bucket, track = (_b = opt.track, _b === void 0 ? !1 : _b), SSECustomerAlgorithm = opt.SSECustomerAlgorithm, SSECustomerKey = opt.SSECustomerKey, SSECustomerKeyMD5 = opt.SSECustomerKeyMD5, prefix = this._prefix(opt), final_key = prefix + key, logger$1.debug("getProperties ".concat(key, " from ").concat(final_key)), s3Config = loadS3Config(__assign$1(__assign$1({}, opt), { storageAction: StorageAction.GetProperties })), params = {
                Bucket: bucket,
                Key: final_key
              }, SSECustomerAlgorithm && (params.SSECustomerAlgorithm = SSECustomerAlgorithm), SSECustomerKey && (params.SSECustomerKey = SSECustomerKey), SSECustomerKeyMD5 && (params.SSECustomerKeyMD5 = SSECustomerKeyMD5), _c.label = 2;
            case 2:
              return _c.trys.push([2, 4, , 5]), [4, headObject(s3Config, params)];
            case 3:
              return response = _c.sent(), getPropertiesResponse = {
                contentLength: response.ContentLength,
                contentType: response.ContentType,
                eTag: response.ETag,
                lastModified: response.LastModified,
                metadata: response.Metadata
              }, dispatchStorageEvent(track, "getProperties", { method: "getProperties", result: "success" }, null, "getProperties successful for ".concat(key)), [2, getPropertiesResponse];
            case 4:
              throw error_5 = _c.sent(), ((_a = error_5.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) === 404 && dispatchStorageEvent(track, "getProperties", {
                method: "getProperties",
                result: "failed"
              }, null, "".concat(key, " not found")), error_5;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AWSS3Provider2.prototype.put = function(key, object, config) {
      var opt = Object.assign({}, this._config, config), bucket = opt.bucket, track = opt.track, progressCallback = opt.progressCallback, level = opt.level, resumable = opt.resumable, contentType = opt.contentType, contentDisposition = opt.contentDisposition, contentEncoding = opt.contentEncoding, cacheControl = opt.cacheControl, expires = opt.expires, metadata = opt.metadata, tagging = opt.tagging, acl = opt.acl, serverSideEncryption = opt.serverSideEncryption, SSECustomerAlgorithm = opt.SSECustomerAlgorithm, SSECustomerKey = opt.SSECustomerKey, SSECustomerKeyMD5 = opt.SSECustomerKeyMD5, SSEKMSKeyId = opt.SSEKMSKeyId, type = contentType || "binary/octet-stream", params = {
        Bucket: bucket,
        Key: key,
        Body: object,
        ContentType: type
      };
      cacheControl && (params.CacheControl = cacheControl), contentDisposition && (params.ContentDisposition = contentDisposition), contentEncoding && (params.ContentEncoding = contentEncoding), expires && (params.Expires = expires), metadata && (params.Metadata = metadata), tagging && (params.Tagging = tagging), serverSideEncryption && (params.ServerSideEncryption = serverSideEncryption), SSECustomerAlgorithm && (params.SSECustomerAlgorithm = SSECustomerAlgorithm), SSECustomerKey && (params.SSECustomerKey = SSECustomerKey), SSECustomerKeyMD5 && (params.SSECustomerKeyMD5 = SSECustomerKeyMD5), SSEKMSKeyId && (params.SSEKMSKeyId = SSEKMSKeyId);
      var emitter = new eventsExports.EventEmitter(), uploader = new AWSS3ProviderManagedUpload(params, opt, emitter);
      if (acl && (params.ACL = acl), resumable === !0) {
        var s3Config = loadS3Config(__assign$1(__assign$1({}, opt), { storageAction: StorageAction.Put })), addTaskInput = {
          bucket,
          key,
          s3Config,
          file: object,
          emitter,
          accessLevel: level,
          params
        };
        return this.startResumableUpload(addTaskInput, config);
      }
      try {
        return progressCallback && (typeof progressCallback == "function" ? emitter.on(SEND_UPLOAD_PROGRESS_EVENT, function(progress) {
          progressCallback(progress);
        }) : logger$1.warn("progressCallback should be a function, not a " + typeof progressCallback)), uploader.upload().then(function(response) {
          return logger$1.debug("upload result", response), dispatchStorageEvent(track, "upload", { method: "put", result: "success" }, null, "Upload success for ".concat(key)), { key };
        });
      } catch (error) {
        throw logger$1.warn("error uploading", error), dispatchStorageEvent(track, "upload", { method: "put", result: "failed" }, null, "Error uploading ".concat(key)), error;
      }
    }, AWSS3Provider2.prototype.remove = function(key, config) {
      return __awaiter(this, void 0, void 0, function() {
        var credentialsOK, opt, bucket, track, prefix, final_key, params, s3Config, response, error_6;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this._ensureCredentials()];
            case 1:
              if (credentialsOK = _a.sent(), !credentialsOK || !this._isWithCredentials(this._config))
                throw new Error(StorageErrorStrings.NO_CREDENTIALS);
              opt = Object.assign({}, this._config, config), bucket = opt.bucket, track = opt.track, prefix = this._prefix(opt), final_key = prefix + key, logger$1.debug("remove " + key + " from " + final_key), params = {
                Bucket: bucket,
                Key: final_key
              }, s3Config = loadS3Config(__assign$1(__assign$1({}, opt), { storageAction: StorageAction.Remove })), _a.label = 2;
            case 2:
              return _a.trys.push([2, 4, , 5]), [4, deleteObject(s3Config, params)];
            case 3:
              return response = _a.sent(), dispatchStorageEvent(track, "delete", { method: "remove", result: "success" }, null, "Deleted ".concat(key, " successfully")), [2, response];
            case 4:
              throw error_6 = _a.sent(), dispatchStorageEvent(track, "delete", { method: "remove", result: "failed" }, null, "Deletion of ".concat(key, " failed with ").concat(error_6)), error_6;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AWSS3Provider2.prototype._list = function(params, opt, prefix) {
      return __awaiter(this, void 0, void 0, function() {
        var list, response;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return list = {
                results: [],
                hasNextToken: !1
              }, [4, listObjectsV2(loadS3Config(__assign$1(__assign$1({}, opt), { storageAction: StorageAction.List })), __assign$1({}, params))];
            case 1:
              return response = _a.sent(), response && response.Contents && (list.results = response.Contents.map(function(item) {
                return {
                  key: item.Key.substr(prefix.length),
                  eTag: item.ETag,
                  lastModified: item.LastModified,
                  size: item.Size
                };
              }), list.nextToken = response.NextContinuationToken, list.hasNextToken = response.IsTruncated), [2, list];
          }
        });
      });
    }, AWSS3Provider2.prototype.list = function(path, config) {
      return __awaiter(this, void 0, void 0, function() {
        var credentialsOK, opt, bucket, track, pageSize, nextToken, prefix, final_path, list, MAX_PAGE_SIZE, listResult, params, error_7, _a, _b;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              return [4, this._ensureCredentials()];
            case 1:
              if (credentialsOK = _c.sent(), !credentialsOK || !this._isWithCredentials(this._config))
                throw new Error(StorageErrorStrings.NO_CREDENTIALS);
              opt = Object.assign({}, this._config, config), bucket = opt.bucket, track = opt.track, pageSize = opt.pageSize, nextToken = opt.nextToken, prefix = this._prefix(opt), final_path = prefix + path, logger$1.debug("list " + path + " from " + final_path), _c.label = 2;
            case 2:
              if (_c.trys.push([2, 10, , 11]), list = {
                results: [],
                hasNextToken: !1
              }, MAX_PAGE_SIZE = 1e3, listResult = void 0, params = {
                Bucket: bucket,
                Prefix: final_path,
                MaxKeys: MAX_PAGE_SIZE,
                ContinuationToken: nextToken
              }, params.ContinuationToken = nextToken, pageSize !== "ALL") return [3, 7];
              _c.label = 3;
            case 3:
              return [4, this._list(params, opt, prefix)];
            case 4:
              listResult = _c.sent(), (_a = list.results).push.apply(_a, __spreadArray([], __read$1(listResult.results), !1)), listResult.nextToken && (params.ContinuationToken = listResult.nextToken), _c.label = 5;
            case 5:
              if (listResult.nextToken) return [3, 3];
              _c.label = 6;
            case 6:
              return [3, 9];
            case 7:
              return pageSize && pageSize <= MAX_PAGE_SIZE && typeof pageSize == "number" ? params.MaxKeys = pageSize : logger$1.warn("pageSize should be from 0 - ".concat(MAX_PAGE_SIZE, ".")), [4, this._list(params, opt, prefix)];
            case 8:
              listResult = _c.sent(), (_b = list.results).push.apply(_b, __spreadArray([], __read$1(listResult.results), !1)), list.hasNextToken = listResult.hasNextToken, list.nextToken = listResult.nextToken, _c.label = 9;
            case 9:
              return dispatchStorageEvent(track, "list", { method: "list", result: "success" }, null, "".concat(list.results.length, " items returned from list operation")), logger$1.debug("list", list), [2, list];
            case 10:
              throw error_7 = _c.sent(), logger$1.error("list InvalidArgument", error_7), dispatchStorageEvent(track, "list", { method: "list", result: "failed" }, null, "Listing items failed: ".concat(error_7.message)), error_7;
            case 11:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AWSS3Provider2.prototype._ensureCredentials = function() {
      return __awaiter(this, void 0, void 0, function() {
        var credentials, cred, error_8;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return _a.trys.push([0, 2, , 3]), [4, Credentials.get()];
            case 1:
              return credentials = _a.sent(), credentials ? (cred = Credentials.shear(credentials), logger$1.debug("set credentials for storage", cred), this._config.credentials = cred, [2, !0]) : [2, !1];
            case 2:
              return error_8 = _a.sent(), logger$1.warn("ensure credentials error", error_8), [2, !1];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, AWSS3Provider2.prototype._isWithCredentials = function(config) {
      return typeof config == "object" && config.hasOwnProperty("credentials");
    }, AWSS3Provider2.prototype._prefix = function(config) {
      var credentials = config.credentials, level = config.level, customPrefix = config.customPrefix || {}, identityId = config.identityId || credentials.identityId, privatePath = (customPrefix.private !== void 0 ? customPrefix.private : "private/") + identityId + "/", protectedPath = (customPrefix.protected !== void 0 ? customPrefix.protected : "protected/") + identityId + "/", publicPath = customPrefix.public !== void 0 ? customPrefix.public : "public/";
      switch (level) {
        case "private":
          return privatePath;
        case "protected":
          return protectedPath;
        default:
          return publicPath;
      }
    }, AWSS3Provider2.CATEGORY = "Storage", AWSS3Provider2.PROVIDER_NAME = "AWSS3", AWSS3Provider2;
  })()
), __assign = function() {
  return __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign.apply(this, arguments);
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
}, logger = new ConsoleLogger("StorageClass"), loggerStorageInstance = new ConsoleLogger("Storage"), DEFAULT_PROVIDER = "AWSS3", Storage = (
  /** @class */
  (function() {
    function Storage2() {
      this._config = {}, this._pluggables = [], this._abortControllerMap = /* @__PURE__ */ new WeakMap(), logger.debug("Storage Options", this._config), this.get = this.get.bind(this), this.put = this.put.bind(this), this.remove = this.remove.bind(this), this.list = this.list.bind(this);
    }
    return __name(Storage2, "Storage"), Storage2.prototype.getModuleName = function() {
      return "Storage";
    }, Storage2.prototype.addPluggable = function(pluggable) {
      if (pluggable && pluggable.getCategory() === "Storage") {
        this._pluggables.push(pluggable);
        var config = {};
        return config = pluggable.configure(this._config[pluggable.getProviderName()]), config;
      }
    }, Storage2.prototype.getPluggable = function(providerName) {
      var pluggable = this._pluggables.find(function(pluggable2) {
        return pluggable2.getProviderName() === providerName;
      });
      return pluggable === void 0 ? (logger.debug("No plugin found with providerName", providerName), null) : pluggable;
    }, Storage2.prototype.removePluggable = function(providerName) {
      this._pluggables = this._pluggables.filter(function(pluggable) {
        return pluggable.getProviderName() !== providerName;
      });
    }, Storage2.prototype.configure = function(config) {
      var _this = this, _a;
      if (logger.debug("configure Storage"), !config)
        return this._config;
      var amplifyConfig = parseAWSExports(config), storageConfig = (_a = amplifyConfig.Storage) !== null && _a !== void 0 ? _a : {}, defaultProviderConfigKeys = [
        "bucket",
        "region",
        "level",
        "track",
        "customPrefix",
        "ContentMD5",
        "serverSideEncryption",
        "SSECustomerAlgorithm",
        "SSECustomerKey",
        // TODO(AllanZhengYP): remove in V6.
        "SSECustomerKeyMD5",
        "SSEKMSKeyId"
      ], hasDefaultProviderConfigKeys = /* @__PURE__ */ __name(function(config2) {
        return Object.keys(config2).find(function(key) {
          return defaultProviderConfigKeys.includes(key);
        });
      }, "hasDefaultProviderConfigKeys");
      return hasDefaultProviderConfigKeys(storageConfig) && !storageConfig[DEFAULT_PROVIDER] && (storageConfig[DEFAULT_PROVIDER] = {}), Object.entries(storageConfig).forEach(function(_a2) {
        var _b = __read(_a2, 2), key = _b[0], value = _b[1];
        key && defaultProviderConfigKeys.includes(key) && value !== void 0 && (storageConfig[DEFAULT_PROVIDER][key] = value, delete storageConfig[key]);
      }), Object.keys(storageConfig).forEach(function(providerName) {
        typeof storageConfig[providerName] != "string" && (_this._config[providerName] = __assign(__assign({}, _this._config[providerName]), storageConfig[providerName]));
      }), this._pluggables.forEach(function(pluggable) {
        pluggable.configure(_this._config[pluggable.getProviderName()]);
      }), this._pluggables.length === 0 && this.addPluggable(new AWSS3Provider()), this._config;
    }, Storage2.prototype.getAbortController = function() {
      return new AbortController();
    }, Storage2.prototype.updateRequestToBeCancellable = function(request, abortController) {
      this._abortControllerMap.set(request, abortController);
    }, Storage2.prototype.isUploadTask = function(x) {
      return typeof x < "u" && typeof x.pause == "function" && typeof x.resume == "function";
    }, Storage2.prototype.cancel = function(request, message) {
      if (request instanceof AWSS3UploadTask)
        return request._cancel();
      var abortController = this._abortControllerMap.get(request);
      abortController ? abortController.abort(message) : logger.debug("The request does not map to any cancel token");
    }, Storage2.prototype.copy = function(src, dest, config) {
      var provider = (config == null ? void 0 : config.provider) || DEFAULT_PROVIDER, plugin = this._pluggables.find(function(pluggable) {
        return pluggable.getProviderName() === provider;
      });
      if (plugin === void 0)
        return logger.debug("No plugin found with providerName", provider), Promise.reject("No plugin found in Storage for the provider");
      var abortController = this.getAbortController();
      if (typeof plugin.copy != "function")
        return Promise.reject(".copy is not implemented on provider ".concat(plugin.getProviderName()));
      var responsePromise = plugin.copy(src, dest, __assign(__assign({}, config), { abortSignal: abortController.signal }));
      return this.updateRequestToBeCancellable(responsePromise, abortController), responsePromise;
    }, Storage2.prototype.get = function(key, config) {
      var provider = (config == null ? void 0 : config.provider) || DEFAULT_PROVIDER, plugin = this._pluggables.find(function(pluggable) {
        return pluggable.getProviderName() === provider;
      });
      if (plugin === void 0)
        return logger.debug("No plugin found with providerName", provider), Promise.reject("No plugin found in Storage for the provider");
      var abortController = this.getAbortController(), responsePromise = plugin.get(key, __assign(__assign({}, config), { abortSignal: abortController.signal }));
      return this.updateRequestToBeCancellable(responsePromise, abortController), responsePromise;
    }, Storage2.prototype.isCancelError = function(error) {
      return isCancelError(error);
    }, Storage2.prototype.getProperties = function(key, config) {
      var provider = (config == null ? void 0 : config.provider) || DEFAULT_PROVIDER, plugin = this._pluggables.find(function(pluggable) {
        return pluggable.getProviderName() === provider;
      });
      if (plugin === void 0)
        throw logger.debug("No plugin found with providerName", provider), new Error("No plugin found with providerName");
      var abortController = this.getAbortController();
      if (typeof plugin.getProperties != "function")
        return Promise.reject(".getProperties is not implemented on provider ".concat(plugin.getProviderName()));
      var responsePromise = plugin == null ? void 0 : plugin.getProperties(key, __assign({}, config));
      return this.updateRequestToBeCancellable(responsePromise, abortController), responsePromise;
    }, Storage2.prototype.put = function(key, object, config) {
      var provider = (config == null ? void 0 : config.provider) || DEFAULT_PROVIDER, plugin = this._pluggables.find(function(pluggable) {
        return pluggable.getProviderName() === provider;
      });
      if (plugin === void 0)
        return logger.debug("No plugin found with providerName", provider), Promise.reject("No plugin found in Storage for the provider");
      var abortController = this.getAbortController(), response = plugin.put(key, object, __assign(__assign({}, config), { abortSignal: abortController.signal }));
      return this.isUploadTask(response) || this.updateRequestToBeCancellable(response, abortController), response;
    }, Storage2.prototype.remove = function(key, config) {
      var provider = (config == null ? void 0 : config.provider) || DEFAULT_PROVIDER, plugin = this._pluggables.find(function(pluggable) {
        return pluggable.getProviderName() === provider;
      });
      return plugin === void 0 ? (logger.debug("No plugin found with providerName", provider), Promise.reject("No plugin found in Storage for the provider")) : plugin.remove(key, config);
    }, Storage2.prototype.list = function(path, config) {
      var provider = (config == null ? void 0 : config.provider) || DEFAULT_PROVIDER, plugin = this._pluggables.find(function(pluggable) {
        return pluggable.getProviderName() === provider;
      });
      return plugin === void 0 ? (logger.debug("No plugin found with providerName", provider), Promise.reject("No plugin found in Storage for the provider")) : plugin.list(path, config);
    }, Storage2;
  })()
), _instance = null, getInstance = /* @__PURE__ */ __name(function() {
  if (_instance)
    return _instance;
  loggerStorageInstance.debug("Create Storage Instance, debug"), _instance = new Storage(), _instance.vault = new Storage();
  var old_configure = _instance.configure;
  return _instance.configure = function(options) {
    loggerStorageInstance.debug("storage configure called");
    var vaultConfig = __assign({}, old_configure.call(_instance, options));
    Object.keys(vaultConfig).forEach(function(providerName) {
      typeof vaultConfig[providerName] != "string" && (vaultConfig[providerName] = __assign(__assign({}, vaultConfig[providerName]), { level: "private" }));
    }), loggerStorageInstance.debug("storage vault configure called"), _instance.vault.configure(vaultConfig);
  }, _instance;
}, "getInstance"), StorageInstance = getInstance();
Amplify.register(StorageInstance);
export {
  AWSS3Provider,
  StorageInstance as Storage,
  Storage as StorageClass
};
//# sourceMappingURL=index-xvsKF-HL.mjs.map
