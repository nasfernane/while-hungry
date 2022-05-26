/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/arrify/index.js":
/***/ ((module) => {

"use strict";


const arrify = value => {
	if (value === null || value === undefined) {
		return [];
	}

	if (Array.isArray(value)) {
		return value;
	}

	if (typeof value === 'string') {
		return [value];
	}

	if (typeof value[Symbol.iterator] === 'function') {
		return [...value];
	}

	return [value];
};

module.exports = arrify;


/***/ }),

/***/ "./node_modules/fast-text-encoding/text.min.js":
/***/ (function() {

(function(l){function m(){}function k(a,c){a=void 0===a?"utf-8":a;c=void 0===c?{fatal:!1}:c;if(-1===r.indexOf(a.toLowerCase()))throw new RangeError("Failed to construct 'TextDecoder': The encoding label provided ('"+a+"') is invalid.");if(c.fatal)throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.");}function t(a){return Buffer.from(a.buffer,a.byteOffset,a.byteLength).toString("utf-8")}function u(a){var c=URL.createObjectURL(new Blob([a],{type:"text/plain;charset=UTF-8"}));
try{var f=new XMLHttpRequest;f.open("GET",c,!1);f.send();return f.responseText}catch(e){return q(a)}finally{URL.revokeObjectURL(c)}}function q(a){for(var c=0,f=Math.min(65536,a.length+1),e=new Uint16Array(f),h=[],d=0;;){var b=c<a.length;if(!b||d>=f-1){h.push(String.fromCharCode.apply(null,e.subarray(0,d)));if(!b)return h.join("");a=a.subarray(c);d=c=0}b=a[c++];if(0===(b&128))e[d++]=b;else if(192===(b&224)){var g=a[c++]&63;e[d++]=(b&31)<<6|g}else if(224===(b&240)){g=a[c++]&63;var n=a[c++]&63;e[d++]=
(b&31)<<12|g<<6|n}else if(240===(b&248)){g=a[c++]&63;n=a[c++]&63;var v=a[c++]&63;b=(b&7)<<18|g<<12|n<<6|v;65535<b&&(b-=65536,e[d++]=b>>>10&1023|55296,b=56320|b&1023);e[d++]=b}}}if(l.TextEncoder&&l.TextDecoder)return!1;var r=["utf-8","utf8","unicode-1-1-utf-8"];Object.defineProperty(m.prototype,"encoding",{value:"utf-8"});m.prototype.encode=function(a,c){c=void 0===c?{stream:!1}:c;if(c.stream)throw Error("Failed to encode: the 'stream' option is unsupported.");c=0;for(var f=a.length,e=0,h=Math.max(32,
f+(f>>>1)+7),d=new Uint8Array(h>>>3<<3);c<f;){var b=a.charCodeAt(c++);if(55296<=b&&56319>=b){if(c<f){var g=a.charCodeAt(c);56320===(g&64512)&&(++c,b=((b&1023)<<10)+(g&1023)+65536)}if(55296<=b&&56319>=b)continue}e+4>d.length&&(h+=8,h*=1+c/a.length*2,h=h>>>3<<3,g=new Uint8Array(h),g.set(d),d=g);if(0===(b&4294967168))d[e++]=b;else{if(0===(b&4294965248))d[e++]=b>>>6&31|192;else if(0===(b&4294901760))d[e++]=b>>>12&15|224,d[e++]=b>>>6&63|128;else if(0===(b&4292870144))d[e++]=b>>>18&7|240,d[e++]=b>>>12&
63|128,d[e++]=b>>>6&63|128;else continue;d[e++]=b&63|128}}return d.slice?d.slice(0,e):d.subarray(0,e)};Object.defineProperty(k.prototype,"encoding",{value:"utf-8"});Object.defineProperty(k.prototype,"fatal",{value:!1});Object.defineProperty(k.prototype,"ignoreBOM",{value:!1});var p=q;"function"===typeof Buffer&&Buffer.from?p=t:"function"===typeof Blob&&"function"===typeof URL&&"function"===typeof URL.createObjectURL&&(p=u);k.prototype.decode=function(a,c){c=void 0===c?{stream:!1}:c;if(c.stream)throw Error("Failed to decode: the 'stream' option is unsupported.");
a=a instanceof Uint8Array?a:a.buffer instanceof ArrayBuffer?new Uint8Array(a.buffer):new Uint8Array(a);return p(a)};l.TextEncoder=m;l.TextDecoder=k})("undefined"!==typeof window?window:"undefined"!==typeof global?global:this);


/***/ }),

/***/ "./node_modules/gaxios/build/src/common.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright 2018 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GaxiosError = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
class GaxiosError extends Error {
    constructor(message, options, response) {
        super(message);
        this.response = response;
        this.config = options;
        this.code = response.status.toString();
    }
}
exports.GaxiosError = GaxiosError;
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/gaxios/build/src/gaxios.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// Copyright 2018 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Gaxios = void 0;
const extend_1 = __importDefault(__webpack_require__("extend"));
const https_1 = __webpack_require__("https");
const node_fetch_1 = __importDefault(__webpack_require__("node-fetch"));
const querystring_1 = __importDefault(__webpack_require__("querystring"));
const is_stream_1 = __importDefault(__webpack_require__("is-stream"));
const url_1 = __webpack_require__("url");
const common_1 = __webpack_require__("./node_modules/gaxios/build/src/common.js");
const retry_1 = __webpack_require__("./node_modules/gaxios/build/src/retry.js");
/* eslint-disable @typescript-eslint/no-explicit-any */
const fetch = hasFetch() ? window.fetch : node_fetch_1.default;
function hasWindow() {
    return typeof window !== 'undefined' && !!window;
}
function hasFetch() {
    return hasWindow() && !!window.fetch;
}
function hasBuffer() {
    return typeof Buffer !== 'undefined';
}
function hasHeader(options, header) {
    return !!getHeader(options, header);
}
function getHeader(options, header) {
    header = header.toLowerCase();
    for (const key of Object.keys((options === null || options === void 0 ? void 0 : options.headers) || {})) {
        if (header === key.toLowerCase()) {
            return options.headers[key];
        }
    }
    return undefined;
}
let HttpsProxyAgent;
function loadProxy() {
    var _a, _b, _c, _d;
    const proxy = ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.HTTPS_PROXY) ||
        ((_b = process === null || process === void 0 ? void 0 : process.env) === null || _b === void 0 ? void 0 : _b.https_proxy) ||
        ((_c = process === null || process === void 0 ? void 0 : process.env) === null || _c === void 0 ? void 0 : _c.HTTP_PROXY) ||
        ((_d = process === null || process === void 0 ? void 0 : process.env) === null || _d === void 0 ? void 0 : _d.http_proxy);
    if (proxy) {
        HttpsProxyAgent = __webpack_require__("https-proxy-agent");
    }
    return proxy;
}
loadProxy();
function skipProxy(url) {
    var _a;
    const noProxyEnv = (_a = process.env.NO_PROXY) !== null && _a !== void 0 ? _a : process.env.no_proxy;
    if (!noProxyEnv) {
        return false;
    }
    const noProxyUrls = noProxyEnv.split(',');
    const parsedURL = new url_1.URL(url);
    return !!noProxyUrls.find(url => {
        if (url.startsWith('*.') || url.startsWith('.')) {
            url = url.replace(/^\*\./, '.');
            return parsedURL.hostname.endsWith(url);
        }
        else {
            return url === parsedURL.origin || url === parsedURL.hostname;
        }
    });
}
// Figure out if we should be using a proxy. Only if it's required, load
// the https-proxy-agent module as it adds startup cost.
function getProxy(url) {
    // If there is a match between the no_proxy env variables and the url, then do not proxy
    if (skipProxy(url)) {
        return undefined;
        // If there is not a match between the no_proxy env variables and the url, check to see if there should be a proxy
    }
    else {
        return loadProxy();
    }
}
class Gaxios {
    /**
     * The Gaxios class is responsible for making HTTP requests.
     * @param defaults The default set of options to be used for this instance.
     */
    constructor(defaults) {
        this.agentCache = new Map();
        this.defaults = defaults || {};
    }
    /**
     * Perform an HTTP request with the given options.
     * @param opts Set of HTTP options that will be used for this HTTP request.
     */
    async request(opts = {}) {
        opts = this.validateOpts(opts);
        return this._request(opts);
    }
    async _defaultAdapter(opts) {
        const fetchImpl = opts.fetchImplementation || fetch;
        const res = (await fetchImpl(opts.url, opts));
        const data = await this.getResponseData(opts, res);
        return this.translateResponse(opts, res, data);
    }
    /**
     * Internal, retryable version of the `request` method.
     * @param opts Set of HTTP options that will be used for this HTTP request.
     */
    async _request(opts = {}) {
        try {
            let translatedResponse;
            if (opts.adapter) {
                translatedResponse = await opts.adapter(opts, this._defaultAdapter.bind(this));
            }
            else {
                translatedResponse = await this._defaultAdapter(opts);
            }
            if (!opts.validateStatus(translatedResponse.status)) {
                throw new common_1.GaxiosError(`Request failed with status code ${translatedResponse.status}`, opts, translatedResponse);
            }
            return translatedResponse;
        }
        catch (e) {
            const err = e;
            err.config = opts;
            const { shouldRetry, config } = await (0, retry_1.getRetryConfig)(err);
            if (shouldRetry && config) {
                err.config.retryConfig.currentRetryAttempt =
                    config.retryConfig.currentRetryAttempt;
                return this._request(err.config);
            }
            throw err;
        }
    }
    async getResponseData(opts, res) {
        switch (opts.responseType) {
            case 'stream':
                return res.body;
            case 'json': {
                let data = await res.text();
                try {
                    data = JSON.parse(data);
                }
                catch (_a) {
                    // continue
                }
                return data;
            }
            case 'arraybuffer':
                return res.arrayBuffer();
            case 'blob':
                return res.blob();
            default:
                return res.text();
        }
    }
    /**
     * Validates the options, and merges them with defaults.
     * @param opts The original options passed from the client.
     */
    validateOpts(options) {
        const opts = (0, extend_1.default)(true, {}, this.defaults, options);
        if (!opts.url) {
            throw new Error('URL is required.');
        }
        // baseUrl has been deprecated, remove in 2.0
        const baseUrl = opts.baseUrl || opts.baseURL;
        if (baseUrl) {
            opts.url = baseUrl + opts.url;
        }
        opts.paramsSerializer = opts.paramsSerializer || this.paramsSerializer;
        if (opts.params && Object.keys(opts.params).length > 0) {
            let additionalQueryParams = opts.paramsSerializer(opts.params);
            if (additionalQueryParams.startsWith('?')) {
                additionalQueryParams = additionalQueryParams.slice(1);
            }
            const prefix = opts.url.includes('?') ? '&' : '?';
            opts.url = opts.url + prefix + additionalQueryParams;
        }
        if (typeof options.maxContentLength === 'number') {
            opts.size = options.maxContentLength;
        }
        if (typeof options.maxRedirects === 'number') {
            opts.follow = options.maxRedirects;
        }
        opts.headers = opts.headers || {};
        if (opts.data) {
            const isFormData = typeof FormData === 'undefined'
                ? false
                : (opts === null || opts === void 0 ? void 0 : opts.data) instanceof FormData;
            if (is_stream_1.default.readable(opts.data)) {
                opts.body = opts.data;
            }
            else if (hasBuffer() && Buffer.isBuffer(opts.data)) {
                // Do not attempt to JSON.stringify() a Buffer:
                opts.body = opts.data;
                if (!hasHeader(opts, 'Content-Type')) {
                    opts.headers['Content-Type'] = 'application/json';
                }
            }
            else if (typeof opts.data === 'object') {
                // If www-form-urlencoded content type has been set, but data is
                // provided as an object, serialize the content using querystring:
                if (!isFormData) {
                    if (getHeader(opts, 'content-type') ===
                        'application/x-www-form-urlencoded') {
                        opts.body = opts.paramsSerializer(opts.data);
                    }
                    else {
                        // } else if (!(opts.data instanceof FormData)) {
                        if (!hasHeader(opts, 'Content-Type')) {
                            opts.headers['Content-Type'] = 'application/json';
                        }
                        opts.body = JSON.stringify(opts.data);
                    }
                }
            }
            else {
                opts.body = opts.data;
            }
        }
        opts.validateStatus = opts.validateStatus || this.validateStatus;
        opts.responseType = opts.responseType || 'json';
        if (!opts.headers['Accept'] && opts.responseType === 'json') {
            opts.headers['Accept'] = 'application/json';
        }
        opts.method = opts.method || 'GET';
        const proxy = getProxy(opts.url);
        if (proxy) {
            if (this.agentCache.has(proxy)) {
                opts.agent = this.agentCache.get(proxy);
            }
            else {
                // Proxy is being used in conjunction with mTLS.
                if (opts.cert && opts.key) {
                    const parsedURL = new url_1.URL(proxy);
                    opts.agent = new HttpsProxyAgent({
                        port: parsedURL.port,
                        host: parsedURL.host,
                        protocol: parsedURL.protocol,
                        cert: opts.cert,
                        key: opts.key,
                    });
                }
                else {
                    opts.agent = new HttpsProxyAgent(proxy);
                }
                this.agentCache.set(proxy, opts.agent);
            }
        }
        else if (opts.cert && opts.key) {
            // Configure client for mTLS:
            if (this.agentCache.has(opts.key)) {
                opts.agent = this.agentCache.get(opts.key);
            }
            else {
                opts.agent = new https_1.Agent({
                    cert: opts.cert,
                    key: opts.key,
                });
                this.agentCache.set(opts.key, opts.agent);
            }
        }
        return opts;
    }
    /**
     * By default, throw for any non-2xx status code
     * @param status status code from the HTTP response
     */
    validateStatus(status) {
        return status >= 200 && status < 300;
    }
    /**
     * Encode a set of key/value pars into a querystring format (?foo=bar&baz=boo)
     * @param params key value pars to encode
     */
    paramsSerializer(params) {
        return querystring_1.default.stringify(params);
    }
    translateResponse(opts, res, data) {
        // headers need to be converted from a map to an obj
        const headers = {};
        res.headers.forEach((value, key) => {
            headers[key] = value;
        });
        return {
            config: opts,
            data: data,
            headers,
            status: res.status,
            statusText: res.statusText,
            // XMLHttpRequestLike
            request: {
                responseURL: res.url,
            },
        };
    }
}
exports.Gaxios = Gaxios;
//# sourceMappingURL=gaxios.js.map

/***/ }),

/***/ "./node_modules/gaxios/build/src/index.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2018 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.request = exports.instance = exports.Gaxios = exports.GaxiosError = void 0;
const gaxios_1 = __webpack_require__("./node_modules/gaxios/build/src/gaxios.js");
Object.defineProperty(exports, "Gaxios", ({ enumerable: true, get: function () { return gaxios_1.Gaxios; } }));
var common_1 = __webpack_require__("./node_modules/gaxios/build/src/common.js");
Object.defineProperty(exports, "GaxiosError", ({ enumerable: true, get: function () { return common_1.GaxiosError; } }));
/**
 * The default instance used when the `request` method is directly
 * invoked.
 */
exports.instance = new gaxios_1.Gaxios();
/**
 * Make an HTTP request using the given options.
 * @param opts Options for the request
 */
async function request(opts) {
    return exports.instance.request(opts);
}
exports.request = request;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/gaxios/build/src/retry.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright 2018 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRetryConfig = void 0;
async function getRetryConfig(err) {
    var _a;
    let config = getConfig(err);
    if (!err || !err.config || (!config && !err.config.retry)) {
        return { shouldRetry: false };
    }
    config = config || {};
    config.currentRetryAttempt = config.currentRetryAttempt || 0;
    config.retry =
        config.retry === undefined || config.retry === null ? 3 : config.retry;
    config.httpMethodsToRetry = config.httpMethodsToRetry || [
        'GET',
        'HEAD',
        'PUT',
        'OPTIONS',
        'DELETE',
    ];
    config.noResponseRetries =
        config.noResponseRetries === undefined || config.noResponseRetries === null
            ? 2
            : config.noResponseRetries;
    // If this wasn't in the list of status codes where we want
    // to automatically retry, return.
    const retryRanges = [
        // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        // 1xx - Retry (Informational, request still processing)
        // 2xx - Do not retry (Success)
        // 3xx - Do not retry (Redirect)
        // 4xx - Do not retry (Client errors)
        // 429 - Retry ("Too Many Requests")
        // 5xx - Retry (Server errors)
        [100, 199],
        [429, 429],
        [500, 599],
    ];
    config.statusCodesToRetry = config.statusCodesToRetry || retryRanges;
    // Put the config back into the err
    err.config.retryConfig = config;
    // Determine if we should retry the request
    const shouldRetryFn = config.shouldRetry || shouldRetryRequest;
    if (!(await shouldRetryFn(err))) {
        return { shouldRetry: false, config: err.config };
    }
    // Calculate time to wait with exponential backoff.
    // If this is the first retry, look for a configured retryDelay.
    const retryDelay = config.currentRetryAttempt ? 0 : (_a = config.retryDelay) !== null && _a !== void 0 ? _a : 100;
    // Formula: retryDelay + ((2^c - 1 / 2) * 1000)
    const delay = retryDelay + ((Math.pow(2, config.currentRetryAttempt) - 1) / 2) * 1000;
    // We're going to retry!  Incremenent the counter.
    err.config.retryConfig.currentRetryAttempt += 1;
    // Create a promise that invokes the retry after the backOffDelay
    const backoff = new Promise(resolve => {
        setTimeout(resolve, delay);
    });
    // Notify the user if they added an `onRetryAttempt` handler
    if (config.onRetryAttempt) {
        config.onRetryAttempt(err);
    }
    // Return the promise in which recalls Gaxios to retry the request
    await backoff;
    return { shouldRetry: true, config: err.config };
}
exports.getRetryConfig = getRetryConfig;
/**
 * Determine based on config if we should retry the request.
 * @param err The GaxiosError passed to the interceptor.
 */
function shouldRetryRequest(err) {
    const config = getConfig(err);
    // node-fetch raises an AbortError if signaled:
    // https://github.com/bitinn/node-fetch#request-cancellation-with-abortsignal
    if (err.name === 'AbortError') {
        return false;
    }
    // If there's no config, or retries are disabled, return.
    if (!config || config.retry === 0) {
        return false;
    }
    // Check if this error has no response (ETIMEDOUT, ENOTFOUND, etc)
    if (!err.response &&
        (config.currentRetryAttempt || 0) >= config.noResponseRetries) {
        return false;
    }
    // Only retry with configured HttpMethods.
    if (!err.config.method ||
        config.httpMethodsToRetry.indexOf(err.config.method.toUpperCase()) < 0) {
        return false;
    }
    // If this wasn't in the list of status codes where we want
    // to automatically retry, return.
    if (err.response && err.response.status) {
        let isInRange = false;
        for (const [min, max] of config.statusCodesToRetry) {
            const status = err.response.status;
            if (status >= min && status <= max) {
                isInRange = true;
                break;
            }
        }
        if (!isInRange) {
            return false;
        }
    }
    // If we are out of retry attempts, return
    config.currentRetryAttempt = config.currentRetryAttempt || 0;
    if (config.currentRetryAttempt >= config.retry) {
        return false;
    }
    return true;
}
/**
 * Acquire the raxConfig object from an GaxiosError if available.
 * @param err The Gaxios error with a config object.
 */
function getConfig(err) {
    if (err && err.config && err.config.retryConfig) {
        return err.config.retryConfig;
    }
    return;
}
//# sourceMappingURL=retry.js.map

/***/ }),

/***/ "./node_modules/gcp-metadata/build/src/index.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.requestTimeout = exports.resetIsAvailableCache = exports.isAvailable = exports.project = exports.instance = exports.HEADERS = exports.HEADER_VALUE = exports.HEADER_NAME = exports.SECONDARY_HOST_ADDRESS = exports.HOST_ADDRESS = exports.BASE_PATH = void 0;
const gaxios_1 = __webpack_require__("./node_modules/gaxios/build/src/index.js");
const jsonBigint = __webpack_require__("./node_modules/json-bigint/index.js");
exports.BASE_PATH = '/computeMetadata/v1';
exports.HOST_ADDRESS = 'http://169.254.169.254';
exports.SECONDARY_HOST_ADDRESS = 'http://metadata.google.internal.';
exports.HEADER_NAME = 'Metadata-Flavor';
exports.HEADER_VALUE = 'Google';
exports.HEADERS = Object.freeze({ [exports.HEADER_NAME]: exports.HEADER_VALUE });
/**
 * Returns the base URL while taking into account the GCE_METADATA_HOST
 * environment variable if it exists.
 *
 * @returns The base URL, e.g., http://169.254.169.254/computeMetadata/v1.
 */
function getBaseUrl(baseUrl) {
    if (!baseUrl) {
        baseUrl =
            process.env.GCE_METADATA_IP ||
                process.env.GCE_METADATA_HOST ||
                exports.HOST_ADDRESS;
    }
    // If no scheme is provided default to HTTP:
    if (!/^https?:\/\//.test(baseUrl)) {
        baseUrl = `http://${baseUrl}`;
    }
    return new URL(exports.BASE_PATH, baseUrl).href;
}
// Accepts an options object passed from the user to the API. In previous
// versions of the API, it referred to a `Request` or an `Axios` request
// options object.  Now it refers to an object with very limited property
// names. This is here to help ensure users don't pass invalid options when
// they  upgrade from 0.4 to 0.5 to 0.8.
function validate(options) {
    Object.keys(options).forEach(key => {
        switch (key) {
            case 'params':
            case 'property':
            case 'headers':
                break;
            case 'qs':
                throw new Error("'qs' is not a valid configuration option. Please use 'params' instead.");
            default:
                throw new Error(`'${key}' is not a valid configuration option.`);
        }
    });
}
async function metadataAccessor(type, options, noResponseRetries = 3, fastFail = false) {
    options = options || {};
    if (typeof options === 'string') {
        options = { property: options };
    }
    let property = '';
    if (typeof options === 'object' && options.property) {
        property = '/' + options.property;
    }
    validate(options);
    try {
        const requestMethod = fastFail ? fastFailMetadataRequest : gaxios_1.request;
        const res = await requestMethod({
            url: `${getBaseUrl()}/${type}${property}`,
            headers: Object.assign({}, exports.HEADERS, options.headers),
            retryConfig: { noResponseRetries },
            params: options.params,
            responseType: 'text',
            timeout: requestTimeout(),
        });
        // NOTE: node.js converts all incoming headers to lower case.
        if (res.headers[exports.HEADER_NAME.toLowerCase()] !== exports.HEADER_VALUE) {
            throw new Error(`Invalid response from metadata service: incorrect ${exports.HEADER_NAME} header.`);
        }
        else if (!res.data) {
            throw new Error('Invalid response from the metadata service');
        }
        if (typeof res.data === 'string') {
            try {
                return jsonBigint.parse(res.data);
            }
            catch (_a) {
                /* ignore */
            }
        }
        return res.data;
    }
    catch (e) {
        const err = e;
        if (err.response && err.response.status !== 200) {
            err.message = `Unsuccessful response status code. ${err.message}`;
        }
        throw e;
    }
}
async function fastFailMetadataRequest(options) {
    const secondaryOptions = {
        ...options,
        url: options.url.replace(getBaseUrl(), getBaseUrl(exports.SECONDARY_HOST_ADDRESS)),
    };
    // We race a connection between DNS/IP to metadata server. There are a couple
    // reasons for this:
    //
    // 1. the DNS is slow in some GCP environments; by checking both, we might
    //    detect the runtime environment signficantly faster.
    // 2. we can't just check the IP, which is tarpitted and slow to respond
    //    on a user's local machine.
    //
    // Additional logic has been added to make sure that we don't create an
    // unhandled rejection in scenarios where a failure happens sometime
    // after a success.
    //
    // Note, however, if a failure happens prior to a success, a rejection should
    // occur, this is for folks running locally.
    //
    let responded = false;
    const r1 = (0, gaxios_1.request)(options)
        .then(res => {
        responded = true;
        return res;
    })
        .catch(err => {
        if (responded) {
            return r2;
        }
        else {
            responded = true;
            throw err;
        }
    });
    const r2 = (0, gaxios_1.request)(secondaryOptions)
        .then(res => {
        responded = true;
        return res;
    })
        .catch(err => {
        if (responded) {
            return r1;
        }
        else {
            responded = true;
            throw err;
        }
    });
    return Promise.race([r1, r2]);
}
/**
 * Obtain metadata for the current GCE instance
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function instance(options) {
    return metadataAccessor('instance', options);
}
exports.instance = instance;
/**
 * Obtain metadata for the current GCP Project.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function project(options) {
    return metadataAccessor('project', options);
}
exports.project = project;
/*
 * How many times should we retry detecting GCP environment.
 */
function detectGCPAvailableRetries() {
    return process.env.DETECT_GCP_RETRIES
        ? Number(process.env.DETECT_GCP_RETRIES)
        : 0;
}
let cachedIsAvailableResponse;
/**
 * Determine if the metadata server is currently available.
 */
async function isAvailable() {
    try {
        // If a user is instantiating several GCP libraries at the same time,
        // this may result in multiple calls to isAvailable(), to detect the
        // runtime environment. We use the same promise for each of these calls
        // to reduce the network load.
        if (cachedIsAvailableResponse === undefined) {
            cachedIsAvailableResponse = metadataAccessor('instance', undefined, detectGCPAvailableRetries(), 
            // If the default HOST_ADDRESS has been overridden, we should not
            // make an effort to try SECONDARY_HOST_ADDRESS (as we are likely in
            // a non-GCP environment):
            !(process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST));
        }
        await cachedIsAvailableResponse;
        return true;
    }
    catch (e) {
        const err = e;
        if (process.env.DEBUG_AUTH) {
            console.info(err);
        }
        if (err.type === 'request-timeout') {
            // If running in a GCP environment, metadata endpoint should return
            // within ms.
            return false;
        }
        if (err.response && err.response.status === 404) {
            return false;
        }
        else {
            if (!(err.response && err.response.status === 404) &&
                // A warning is emitted if we see an unexpected err.code, or err.code
                // is not populated:
                (!err.code ||
                    ![
                        'EHOSTDOWN',
                        'EHOSTUNREACH',
                        'ENETUNREACH',
                        'ENOENT',
                        'ENOTFOUND',
                        'ECONNREFUSED',
                    ].includes(err.code))) {
                let code = 'UNKNOWN';
                if (err.code)
                    code = err.code;
                process.emitWarning(`received unexpected error = ${err.message} code = ${code}`, 'MetadataLookupWarning');
            }
            // Failure to resolve the metadata service means that it is not available.
            return false;
        }
    }
}
exports.isAvailable = isAvailable;
/**
 * reset the memoized isAvailable() lookup.
 */
function resetIsAvailableCache() {
    cachedIsAvailableResponse = undefined;
}
exports.resetIsAvailableCache = resetIsAvailableCache;
/**
 * Obtain the timeout for requests to the metadata server.
 */
function requestTimeout() {
    // In testing, we were able to reproduce behavior similar to
    // https://github.com/googleapis/google-auth-library-nodejs/issues/798
    // by making many concurrent network requests. Requests do not actually fail,
    // rather they take significantly longer to complete (and we hit our
    // default 3000ms timeout).
    //
    // This logic detects a GCF environment, using the documented environment
    // variables K_SERVICE and FUNCTION_NAME:
    // https://cloud.google.com/functions/docs/env-var and, in a GCF environment
    // eliminates timeouts (by setting the value to 0 to disable).
    return process.env.K_SERVICE || process.env.FUNCTION_NAME ? 0 : 3000;
}
exports.requestTimeout = requestTimeout;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/authclient.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2012 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthClient = void 0;
const events_1 = __webpack_require__("events");
const transporters_1 = __webpack_require__("./node_modules/google-auth-library/build/src/transporters.js");
class AuthClient extends events_1.EventEmitter {
    constructor() {
        super(...arguments);
        this.transporter = new transporters_1.DefaultTransporter();
        this.credentials = {};
        this.eagerRefreshThresholdMillis = 5 * 60 * 1000;
        this.forceRefreshOnFailure = false;
    }
    /**
     * Sets the auth credentials.
     */
    setCredentials(credentials) {
        this.credentials = credentials;
    }
    /**
     * Append additional headers, e.g., x-goog-user-project, shared across the
     * classes inheriting AuthClient. This method should be used by any method
     * that overrides getRequestMetadataAsync(), which is a shared helper for
     * setting request information in both gRPC and HTTP API calls.
     *
     * @param headers object to append additional headers to.
     */
    addSharedMetadataHeaders(headers) {
        // quota_project_id, stored in application_default_credentials.json, is set in
        // the x-goog-user-project header, to indicate an alternate account for
        // billing and quota:
        if (!headers['x-goog-user-project'] && // don't override a value the user sets.
            this.quotaProjectId) {
            headers['x-goog-user-project'] = this.quotaProjectId;
        }
        return headers;
    }
}
exports.AuthClient = AuthClient;
//# sourceMappingURL=authclient.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/awsclient.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwsClient = void 0;
const awsrequestsigner_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/awsrequestsigner.js");
const baseexternalclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/baseexternalclient.js");
/**
 * AWS external account client. This is used for AWS workloads, where
 * AWS STS GetCallerIdentity serialized signed requests are exchanged for
 * GCP access token.
 */
class AwsClient extends baseexternalclient_1.BaseExternalAccountClient {
    /**
     * Instantiates an AwsClient instance using the provided JSON
     * object loaded from an external account credentials file.
     * An error is thrown if the credential is not a valid AWS credential.
     * @param options The external account options object typically loaded
     *   from the external account JSON credential file.
     * @param additionalOptions Optional additional behavior customization
     *   options. These currently customize expiration threshold time and
     *   whether to retry on 401/403 API request errors.
     */
    constructor(options, additionalOptions) {
        var _a;
        super(options, additionalOptions);
        this.environmentId = options.credential_source.environment_id;
        // This is only required if the AWS region is not available in the
        // AWS_REGION or AWS_DEFAULT_REGION environment variables.
        this.regionUrl = options.credential_source.region_url;
        // This is only required if AWS security credentials are not available in
        // environment variables.
        this.securityCredentialsUrl = options.credential_source.url;
        this.regionalCredVerificationUrl =
            options.credential_source.regional_cred_verification_url;
        this.imdsV2SessionTokenUrl =
            options.credential_source.imdsv2_session_token_url;
        const match = (_a = this.environmentId) === null || _a === void 0 ? void 0 : _a.match(/^(aws)(\d+)$/);
        if (!match || !this.regionalCredVerificationUrl) {
            throw new Error('No valid AWS "credential_source" provided');
        }
        else if (parseInt(match[2], 10) !== 1) {
            throw new Error(`aws version "${match[2]}" is not supported in the current build.`);
        }
        this.awsRequestSigner = null;
        this.region = '';
    }
    /**
     * Triggered when an external subject token is needed to be exchanged for a
     * GCP access token via GCP STS endpoint.
     * This uses the `options.credential_source` object to figure out how
     * to retrieve the token using the current environment. In this case,
     * this uses a serialized AWS signed request to the STS GetCallerIdentity
     * endpoint.
     * The logic is summarized as:
     * 1. If imdsv2_session_token_url is provided in the credential source, then
     *    fetch the aws session token and include it in the headers of the
     *    metadata requests. This is a requirement for IDMSv2 but optional
     *    for IDMSv1.
     * 2. Retrieve AWS region from availability-zone.
     * 3a. Check AWS credentials in environment variables. If not found, get
     *     from security-credentials endpoint.
     * 3b. Get AWS credentials from security-credentials endpoint. In order
     *     to retrieve this, the AWS role needs to be determined by calling
     *     security-credentials endpoint without any argument. Then the
     *     credentials can be retrieved via: security-credentials/role_name
     * 4. Generate the signed request to AWS STS GetCallerIdentity action.
     * 5. Inject x-goog-cloud-target-resource into header and serialize the
     *    signed request. This will be the subject-token to pass to GCP STS.
     * @return A promise that resolves with the external subject token.
     */
    async retrieveSubjectToken() {
        // Initialize AWS request signer if not already initialized.
        if (!this.awsRequestSigner) {
            const metadataHeaders = {};
            if (this.imdsV2SessionTokenUrl) {
                metadataHeaders['x-aws-ec2-metadata-token'] =
                    await this.getImdsV2SessionToken();
            }
            this.region = await this.getAwsRegion(metadataHeaders);
            this.awsRequestSigner = new awsrequestsigner_1.AwsRequestSigner(async () => {
                // Check environment variables for permanent credentials first.
                // https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html
                if (process.env['AWS_ACCESS_KEY_ID'] &&
                    process.env['AWS_SECRET_ACCESS_KEY']) {
                    return {
                        accessKeyId: process.env['AWS_ACCESS_KEY_ID'],
                        secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY'],
                        // This is normally not available for permanent credentials.
                        token: process.env['AWS_SESSION_TOKEN'],
                    };
                }
                // Since the role on a VM can change, we don't need to cache it.
                const roleName = await this.getAwsRoleName(metadataHeaders);
                // Temporary credentials typically last for several hours.
                // Expiration is returned in response.
                // Consider future optimization of this logic to cache AWS tokens
                // until their natural expiration.
                const awsCreds = await this.getAwsSecurityCredentials(roleName, metadataHeaders);
                return {
                    accessKeyId: awsCreds.AccessKeyId,
                    secretAccessKey: awsCreds.SecretAccessKey,
                    token: awsCreds.Token,
                };
            }, this.region);
        }
        // Generate signed request to AWS STS GetCallerIdentity API.
        // Use the required regional endpoint. Otherwise, the request will fail.
        const options = await this.awsRequestSigner.getRequestOptions({
            url: this.regionalCredVerificationUrl.replace('{region}', this.region),
            method: 'POST',
        });
        // The GCP STS endpoint expects the headers to be formatted as:
        // [
        //   {key: 'x-amz-date', value: '...'},
        //   {key: 'Authorization', value: '...'},
        //   ...
        // ]
        // And then serialized as:
        // encodeURIComponent(JSON.stringify({
        //   url: '...',
        //   method: 'POST',
        //   headers: [{key: 'x-amz-date', value: '...'}, ...]
        // }))
        const reformattedHeader = [];
        const extendedHeaders = Object.assign({
            // The full, canonical resource name of the workload identity pool
            // provider, with or without the HTTPS prefix.
            // Including this header as part of the signature is recommended to
            // ensure data integrity.
            'x-goog-cloud-target-resource': this.audience,
        }, options.headers);
        // Reformat header to GCP STS expected format.
        for (const key in extendedHeaders) {
            reformattedHeader.push({
                key,
                value: extendedHeaders[key],
            });
        }
        // Serialize the reformatted signed request.
        return encodeURIComponent(JSON.stringify({
            url: options.url,
            method: options.method,
            headers: reformattedHeader,
        }));
    }
    /**
     * @return A promise that resolves with the IMDSv2 Session Token.
     */
    async getImdsV2SessionToken() {
        const opts = {
            url: this.imdsV2SessionTokenUrl,
            method: 'PUT',
            responseType: 'text',
            headers: { 'x-aws-ec2-metadata-token-ttl-seconds': '300' },
        };
        const response = await this.transporter.request(opts);
        return response.data;
    }
    /**
     * @param headers The headers to be used in the metadata request.
     * @return A promise that resolves with the current AWS region.
     */
    async getAwsRegion(headers) {
        // Priority order for region determination:
        // AWS_REGION > AWS_DEFAULT_REGION > metadata server.
        if (process.env['AWS_REGION'] || process.env['AWS_DEFAULT_REGION']) {
            return (process.env['AWS_REGION'] || process.env['AWS_DEFAULT_REGION']);
        }
        if (!this.regionUrl) {
            throw new Error('Unable to determine AWS region due to missing ' +
                '"options.credential_source.region_url"');
        }
        const opts = {
            url: this.regionUrl,
            method: 'GET',
            responseType: 'text',
            headers: headers,
        };
        const response = await this.transporter.request(opts);
        // Remove last character. For example, if us-east-2b is returned,
        // the region would be us-east-2.
        return response.data.substr(0, response.data.length - 1);
    }
    /**
     * @param headers The headers to be used in the metadata request.
     * @return A promise that resolves with the assigned role to the current
     *   AWS VM. This is needed for calling the security-credentials endpoint.
     */
    async getAwsRoleName(headers) {
        if (!this.securityCredentialsUrl) {
            throw new Error('Unable to determine AWS role name due to missing ' +
                '"options.credential_source.url"');
        }
        const opts = {
            url: this.securityCredentialsUrl,
            method: 'GET',
            responseType: 'text',
            headers: headers,
        };
        const response = await this.transporter.request(opts);
        return response.data;
    }
    /**
     * Retrieves the temporary AWS credentials by calling the security-credentials
     * endpoint as specified in the `credential_source` object.
     * @param roleName The role attached to the current VM.
     * @param headers The headers to be used in the metadata request.
     * @return A promise that resolves with the temporary AWS credentials
     *   needed for creating the GetCallerIdentity signed request.
     */
    async getAwsSecurityCredentials(roleName, headers) {
        const response = await this.transporter.request({
            url: `${this.securityCredentialsUrl}/${roleName}`,
            responseType: 'json',
            headers: headers,
        });
        return response.data;
    }
}
exports.AwsClient = AwsClient;
//# sourceMappingURL=awsclient.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/awsrequestsigner.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwsRequestSigner = void 0;
const crypto_1 = __webpack_require__("./node_modules/google-auth-library/build/src/crypto/crypto.js");
/** AWS Signature Version 4 signing algorithm identifier.  */
const AWS_ALGORITHM = 'AWS4-HMAC-SHA256';
/**
 * The termination string for the AWS credential scope value as defined in
 * https://docs.aws.amazon.com/general/latest/gr/sigv4-create-string-to-sign.html
 */
const AWS_REQUEST_TYPE = 'aws4_request';
/**
 * Implements an AWS API request signer based on the AWS Signature Version 4
 * signing process.
 * https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html
 */
class AwsRequestSigner {
    /**
     * Instantiates an AWS API request signer used to send authenticated signed
     * requests to AWS APIs based on the AWS Signature Version 4 signing process.
     * This also provides a mechanism to generate the signed request without
     * sending it.
     * @param getCredentials A mechanism to retrieve AWS security credentials
     *   when needed.
     * @param region The AWS region to use.
     */
    constructor(getCredentials, region) {
        this.getCredentials = getCredentials;
        this.region = region;
        this.crypto = (0, crypto_1.createCrypto)();
    }
    /**
     * Generates the signed request for the provided HTTP request for calling
     * an AWS API. This follows the steps described at:
     * https://docs.aws.amazon.com/general/latest/gr/sigv4_signing.html
     * @param amzOptions The AWS request options that need to be signed.
     * @return A promise that resolves with the GaxiosOptions containing the
     *   signed HTTP request parameters.
     */
    async getRequestOptions(amzOptions) {
        if (!amzOptions.url) {
            throw new Error('"url" is required in "amzOptions"');
        }
        // Stringify JSON requests. This will be set in the request body of the
        // generated signed request.
        const requestPayloadData = typeof amzOptions.data === 'object'
            ? JSON.stringify(amzOptions.data)
            : amzOptions.data;
        const url = amzOptions.url;
        const method = amzOptions.method || 'GET';
        const requestPayload = amzOptions.body || requestPayloadData;
        const additionalAmzHeaders = amzOptions.headers;
        const awsSecurityCredentials = await this.getCredentials();
        const uri = new URL(url);
        const headerMap = await generateAuthenticationHeaderMap({
            crypto: this.crypto,
            host: uri.host,
            canonicalUri: uri.pathname,
            canonicalQuerystring: uri.search.substr(1),
            method,
            region: this.region,
            securityCredentials: awsSecurityCredentials,
            requestPayload,
            additionalAmzHeaders,
        });
        // Append additional optional headers, eg. X-Amz-Target, Content-Type, etc.
        const headers = Object.assign(
        // Add x-amz-date if available.
        headerMap.amzDate ? { 'x-amz-date': headerMap.amzDate } : {}, {
            Authorization: headerMap.authorizationHeader,
            host: uri.host,
        }, additionalAmzHeaders || {});
        if (awsSecurityCredentials.token) {
            Object.assign(headers, {
                'x-amz-security-token': awsSecurityCredentials.token,
            });
        }
        const awsSignedReq = {
            url,
            method: method,
            headers,
        };
        if (typeof requestPayload !== 'undefined') {
            awsSignedReq.body = requestPayload;
        }
        return awsSignedReq;
    }
}
exports.AwsRequestSigner = AwsRequestSigner;
/**
 * Creates the HMAC-SHA256 hash of the provided message using the
 * provided key.
 *
 * @param crypto The crypto instance used to facilitate cryptographic
 *   operations.
 * @param key The HMAC-SHA256 key to use.
 * @param msg The message to hash.
 * @return The computed hash bytes.
 */
async function sign(crypto, key, msg) {
    return await crypto.signWithHmacSha256(key, msg);
}
/**
 * Calculates the signing key used to calculate the signature for
 * AWS Signature Version 4 based on:
 * https://docs.aws.amazon.com/general/latest/gr/sigv4-calculate-signature.html
 *
 * @param crypto The crypto instance used to facilitate cryptographic
 *   operations.
 * @param key The AWS secret access key.
 * @param dateStamp The '%Y%m%d' date format.
 * @param region The AWS region.
 * @param serviceName The AWS service name, eg. sts.
 * @return The signing key bytes.
 */
async function getSigningKey(crypto, key, dateStamp, region, serviceName) {
    const kDate = await sign(crypto, `AWS4${key}`, dateStamp);
    const kRegion = await sign(crypto, kDate, region);
    const kService = await sign(crypto, kRegion, serviceName);
    const kSigning = await sign(crypto, kService, 'aws4_request');
    return kSigning;
}
/**
 * Generates the authentication header map needed for generating the AWS
 * Signature Version 4 signed request.
 *
 * @param option The options needed to compute the authentication header map.
 * @return The AWS authentication header map which constitutes of the following
 *   components: amz-date, authorization header and canonical query string.
 */
async function generateAuthenticationHeaderMap(options) {
    const additionalAmzHeaders = options.additionalAmzHeaders || {};
    const requestPayload = options.requestPayload || '';
    // iam.amazonaws.com host => iam service.
    // sts.us-east-2.amazonaws.com => sts service.
    const serviceName = options.host.split('.')[0];
    const now = new Date();
    // Format: '%Y%m%dT%H%M%SZ'.
    const amzDate = now
        .toISOString()
        .replace(/[-:]/g, '')
        .replace(/\.[0-9]+/, '');
    // Format: '%Y%m%d'.
    const dateStamp = now.toISOString().replace(/[-]/g, '').replace(/T.*/, '');
    // Change all additional headers to be lower case.
    const reformattedAdditionalAmzHeaders = {};
    Object.keys(additionalAmzHeaders).forEach(key => {
        reformattedAdditionalAmzHeaders[key.toLowerCase()] =
            additionalAmzHeaders[key];
    });
    // Add AWS token if available.
    if (options.securityCredentials.token) {
        reformattedAdditionalAmzHeaders['x-amz-security-token'] =
            options.securityCredentials.token;
    }
    // Header keys need to be sorted alphabetically.
    const amzHeaders = Object.assign({
        host: options.host,
    }, 
    // Previously the date was not fixed with x-amz- and could be provided manually.
    // https://github.com/boto/botocore/blob/879f8440a4e9ace5d3cf145ce8b3d5e5ffb892ef/tests/unit/auth/aws4_testsuite/get-header-value-trim.req
    reformattedAdditionalAmzHeaders.date ? {} : { 'x-amz-date': amzDate }, reformattedAdditionalAmzHeaders);
    let canonicalHeaders = '';
    const signedHeadersList = Object.keys(amzHeaders).sort();
    signedHeadersList.forEach(key => {
        canonicalHeaders += `${key}:${amzHeaders[key]}\n`;
    });
    const signedHeaders = signedHeadersList.join(';');
    const payloadHash = await options.crypto.sha256DigestHex(requestPayload);
    // https://docs.aws.amazon.com/general/latest/gr/sigv4-create-canonical-request.html
    const canonicalRequest = `${options.method}\n` +
        `${options.canonicalUri}\n` +
        `${options.canonicalQuerystring}\n` +
        `${canonicalHeaders}\n` +
        `${signedHeaders}\n` +
        `${payloadHash}`;
    const credentialScope = `${dateStamp}/${options.region}/${serviceName}/${AWS_REQUEST_TYPE}`;
    // https://docs.aws.amazon.com/general/latest/gr/sigv4-create-string-to-sign.html
    const stringToSign = `${AWS_ALGORITHM}\n` +
        `${amzDate}\n` +
        `${credentialScope}\n` +
        (await options.crypto.sha256DigestHex(canonicalRequest));
    // https://docs.aws.amazon.com/general/latest/gr/sigv4-calculate-signature.html
    const signingKey = await getSigningKey(options.crypto, options.securityCredentials.secretAccessKey, dateStamp, options.region, serviceName);
    const signature = await sign(options.crypto, signingKey, stringToSign);
    // https://docs.aws.amazon.com/general/latest/gr/sigv4-add-signature-to-request.html
    const authorizationHeader = `${AWS_ALGORITHM} Credential=${options.securityCredentials.accessKeyId}/` +
        `${credentialScope}, SignedHeaders=${signedHeaders}, ` +
        `Signature=${(0, crypto_1.fromArrayBufferToHex)(signature)}`;
    return {
        // Do not return x-amz-date if date is available.
        amzDate: reformattedAdditionalAmzHeaders.date ? undefined : amzDate,
        authorizationHeader,
        canonicalQuerystring: options.canonicalQuerystring,
    };
}
//# sourceMappingURL=awsrequestsigner.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/baseexternalclient.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseExternalAccountClient = exports.CLOUD_RESOURCE_MANAGER = exports.EXTERNAL_ACCOUNT_TYPE = exports.EXPIRATION_TIME_OFFSET = void 0;
const stream = __webpack_require__("stream");
const authclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/authclient.js");
const sts = __webpack_require__("./node_modules/google-auth-library/build/src/auth/stscredentials.js");
/**
 * The required token exchange grant_type: rfc8693#section-2.1
 */
const STS_GRANT_TYPE = 'urn:ietf:params:oauth:grant-type:token-exchange';
/**
 * The requested token exchange requested_token_type: rfc8693#section-2.1
 */
const STS_REQUEST_TOKEN_TYPE = 'urn:ietf:params:oauth:token-type:access_token';
/** The default OAuth scope to request when none is provided. */
const DEFAULT_OAUTH_SCOPE = 'https://www.googleapis.com/auth/cloud-platform';
/** The google apis domain pattern. */
const GOOGLE_APIS_DOMAIN_PATTERN = '\\.googleapis\\.com$';
/** The variable portion pattern in a Google APIs domain. */
const VARIABLE_PORTION_PATTERN = '[^\\.\\s\\/\\\\]+';
/**
 * Offset to take into account network delays and server clock skews.
 */
exports.EXPIRATION_TIME_OFFSET = 5 * 60 * 1000;
/**
 * The credentials JSON file type for external account clients.
 * There are 3 types of JSON configs:
 * 1. authorized_user => Google end user credential
 * 2. service_account => Google service account credential
 * 3. external_Account => non-GCP service (eg. AWS, Azure, K8s)
 */
exports.EXTERNAL_ACCOUNT_TYPE = 'external_account';
/** Cloud resource manager URL used to retrieve project information. */
exports.CLOUD_RESOURCE_MANAGER = 'https://cloudresourcemanager.googleapis.com/v1/projects/';
/** The workforce audience pattern. */
const WORKFORCE_AUDIENCE_PATTERN = '//iam.googleapis.com/locations/[^/]+/workforcePools/[^/]+/providers/.+';
/**
 * Base external account client. This is used to instantiate AuthClients for
 * exchanging external account credentials for GCP access token and authorizing
 * requests to GCP APIs.
 * The base class implements common logic for exchanging various type of
 * external credentials for GCP access token. The logic of determining and
 * retrieving the external credential based on the environment and
 * credential_source will be left for the subclasses.
 */
class BaseExternalAccountClient extends authclient_1.AuthClient {
    /**
     * Instantiate a BaseExternalAccountClient instance using the provided JSON
     * object loaded from an external account credentials file.
     * @param options The external account options object typically loaded
     *   from the external account JSON credential file.
     * @param additionalOptions Optional additional behavior customization
     *   options. These currently customize expiration threshold time and
     *   whether to retry on 401/403 API request errors.
     */
    constructor(options, additionalOptions) {
        super();
        if (options.type !== exports.EXTERNAL_ACCOUNT_TYPE) {
            throw new Error(`Expected "${exports.EXTERNAL_ACCOUNT_TYPE}" type but ` +
                `received "${options.type}"`);
        }
        this.clientAuth = options.client_id
            ? {
                confidentialClientType: 'basic',
                clientId: options.client_id,
                clientSecret: options.client_secret,
            }
            : undefined;
        if (!this.validateGoogleAPIsUrl('sts', options.token_url)) {
            throw new Error(`"${options.token_url}" is not a valid token url.`);
        }
        this.stsCredential = new sts.StsCredentials(options.token_url, this.clientAuth);
        // Default OAuth scope. This could be overridden via public property.
        this.scopes = [DEFAULT_OAUTH_SCOPE];
        this.cachedAccessToken = null;
        this.audience = options.audience;
        this.subjectTokenType = options.subject_token_type;
        this.quotaProjectId = options.quota_project_id;
        this.workforcePoolUserProject = options.workforce_pool_user_project;
        const workforceAudiencePattern = new RegExp(WORKFORCE_AUDIENCE_PATTERN);
        if (this.workforcePoolUserProject &&
            !this.audience.match(workforceAudiencePattern)) {
            throw new Error('workforcePoolUserProject should not be set for non-workforce pool ' +
                'credentials.');
        }
        if (typeof options.service_account_impersonation_url !== 'undefined' &&
            !this.validateGoogleAPIsUrl('iamcredentials', options.service_account_impersonation_url)) {
            throw new Error(`"${options.service_account_impersonation_url}" is ` +
                'not a valid service account impersonation url.');
        }
        this.serviceAccountImpersonationUrl =
            options.service_account_impersonation_url;
        // As threshold could be zero,
        // eagerRefreshThresholdMillis || EXPIRATION_TIME_OFFSET will override the
        // zero value.
        if (typeof (additionalOptions === null || additionalOptions === void 0 ? void 0 : additionalOptions.eagerRefreshThresholdMillis) !== 'number') {
            this.eagerRefreshThresholdMillis = exports.EXPIRATION_TIME_OFFSET;
        }
        else {
            this.eagerRefreshThresholdMillis = additionalOptions
                .eagerRefreshThresholdMillis;
        }
        this.forceRefreshOnFailure = !!(additionalOptions === null || additionalOptions === void 0 ? void 0 : additionalOptions.forceRefreshOnFailure);
        this.projectId = null;
        this.projectNumber = this.getProjectNumber(this.audience);
    }
    /** The service account email to be impersonated, if available. */
    getServiceAccountEmail() {
        var _a;
        if (this.serviceAccountImpersonationUrl) {
            // Parse email from URL. The formal looks as follows:
            // https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/name@project-id.iam.gserviceaccount.com:generateAccessToken
            const re = /serviceAccounts\/(?<email>[^:]+):generateAccessToken$/;
            const result = re.exec(this.serviceAccountImpersonationUrl);
            return ((_a = result === null || result === void 0 ? void 0 : result.groups) === null || _a === void 0 ? void 0 : _a.email) || null;
        }
        return null;
    }
    /**
     * Provides a mechanism to inject GCP access tokens directly.
     * When the provided credential expires, a new credential, using the
     * external account options, is retrieved.
     * @param credentials The Credentials object to set on the current client.
     */
    setCredentials(credentials) {
        super.setCredentials(credentials);
        this.cachedAccessToken = credentials;
    }
    /**
     * @return A promise that resolves with the current GCP access token
     *   response. If the current credential is expired, a new one is retrieved.
     */
    async getAccessToken() {
        // If cached access token is unavailable or expired, force refresh.
        if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) {
            await this.refreshAccessTokenAsync();
        }
        // Return GCP access token in GetAccessTokenResponse format.
        return {
            token: this.cachedAccessToken.access_token,
            res: this.cachedAccessToken.res,
        };
    }
    /**
     * The main authentication interface. It takes an optional url which when
     * present is the endpoint being accessed, and returns a Promise which
     * resolves with authorization header fields.
     *
     * The result has the form:
     * { Authorization: 'Bearer <access_token_value>' }
     */
    async getRequestHeaders() {
        const accessTokenResponse = await this.getAccessToken();
        const headers = {
            Authorization: `Bearer ${accessTokenResponse.token}`,
        };
        return this.addSharedMetadataHeaders(headers);
    }
    request(opts, callback) {
        if (callback) {
            this.requestAsync(opts).then(r => callback(null, r), e => {
                return callback(e, e.response);
            });
        }
        else {
            return this.requestAsync(opts);
        }
    }
    /**
     * @return A promise that resolves with the project ID corresponding to the
     *   current workload identity pool or current workforce pool if
     *   determinable. For workforce pool credential, it returns the project ID
     *   corresponding to the workforcePoolUserProject.
     *   This is introduced to match the current pattern of using the Auth
     *   library:
     *   const projectId = await auth.getProjectId();
     *   const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;
     *   const res = await client.request({ url });
     *   The resource may not have permission
     *   (resourcemanager.projects.get) to call this API or the required
     *   scopes may not be selected:
     *   https://cloud.google.com/resource-manager/reference/rest/v1/projects/get#authorization-scopes
     */
    async getProjectId() {
        const projectNumber = this.projectNumber || this.workforcePoolUserProject;
        if (this.projectId) {
            // Return previously determined project ID.
            return this.projectId;
        }
        else if (projectNumber) {
            // Preferable not to use request() to avoid retrial policies.
            const headers = await this.getRequestHeaders();
            const response = await this.transporter.request({
                headers,
                url: `${exports.CLOUD_RESOURCE_MANAGER}${projectNumber}`,
                responseType: 'json',
            });
            this.projectId = response.data.projectId;
            return this.projectId;
        }
        return null;
    }
    /**
     * Authenticates the provided HTTP request, processes it and resolves with the
     * returned response.
     * @param opts The HTTP request options.
     * @param retry Whether the current attempt is a retry after a failed attempt.
     * @return A promise that resolves with the successful response.
     */
    async requestAsync(opts, retry = false) {
        let response;
        try {
            const requestHeaders = await this.getRequestHeaders();
            opts.headers = opts.headers || {};
            if (requestHeaders && requestHeaders['x-goog-user-project']) {
                opts.headers['x-goog-user-project'] =
                    requestHeaders['x-goog-user-project'];
            }
            if (requestHeaders && requestHeaders.Authorization) {
                opts.headers.Authorization = requestHeaders.Authorization;
            }
            response = await this.transporter.request(opts);
        }
        catch (e) {
            const res = e.response;
            if (res) {
                const statusCode = res.status;
                // Retry the request for metadata if the following criteria are true:
                // - We haven't already retried.  It only makes sense to retry once.
                // - The response was a 401 or a 403
                // - The request didn't send a readableStream
                // - forceRefreshOnFailure is true
                const isReadableStream = res.config.data instanceof stream.Readable;
                const isAuthErr = statusCode === 401 || statusCode === 403;
                if (!retry &&
                    isAuthErr &&
                    !isReadableStream &&
                    this.forceRefreshOnFailure) {
                    await this.refreshAccessTokenAsync();
                    return await this.requestAsync(opts, true);
                }
            }
            throw e;
        }
        return response;
    }
    /**
     * Forces token refresh, even if unexpired tokens are currently cached.
     * External credentials are exchanged for GCP access tokens via the token
     * exchange endpoint and other settings provided in the client options
     * object.
     * If the service_account_impersonation_url is provided, an additional
     * step to exchange the external account GCP access token for a service
     * account impersonated token is performed.
     * @return A promise that resolves with the fresh GCP access tokens.
     */
    async refreshAccessTokenAsync() {
        // Retrieve the external credential.
        const subjectToken = await this.retrieveSubjectToken();
        // Construct the STS credentials options.
        const stsCredentialsOptions = {
            grantType: STS_GRANT_TYPE,
            audience: this.audience,
            requestedTokenType: STS_REQUEST_TOKEN_TYPE,
            subjectToken,
            subjectTokenType: this.subjectTokenType,
            // generateAccessToken requires the provided access token to have
            // scopes:
            // https://www.googleapis.com/auth/iam or
            // https://www.googleapis.com/auth/cloud-platform
            // The new service account access token scopes will match the user
            // provided ones.
            scope: this.serviceAccountImpersonationUrl
                ? [DEFAULT_OAUTH_SCOPE]
                : this.getScopesArray(),
        };
        // Exchange the external credentials for a GCP access token.
        // Client auth is prioritized over passing the workforcePoolUserProject
        // parameter for STS token exchange.
        const additionalOptions = !this.clientAuth && this.workforcePoolUserProject
            ? { userProject: this.workforcePoolUserProject }
            : undefined;
        const stsResponse = await this.stsCredential.exchangeToken(stsCredentialsOptions, undefined, additionalOptions);
        if (this.serviceAccountImpersonationUrl) {
            this.cachedAccessToken = await this.getImpersonatedAccessToken(stsResponse.access_token);
        }
        else if (stsResponse.expires_in) {
            // Save response in cached access token.
            this.cachedAccessToken = {
                access_token: stsResponse.access_token,
                expiry_date: new Date().getTime() + stsResponse.expires_in * 1000,
                res: stsResponse.res,
            };
        }
        else {
            // Save response in cached access token.
            this.cachedAccessToken = {
                access_token: stsResponse.access_token,
                res: stsResponse.res,
            };
        }
        // Save credentials.
        this.credentials = {};
        Object.assign(this.credentials, this.cachedAccessToken);
        delete this.credentials.res;
        // Trigger tokens event to notify external listeners.
        this.emit('tokens', {
            refresh_token: null,
            expiry_date: this.cachedAccessToken.expiry_date,
            access_token: this.cachedAccessToken.access_token,
            token_type: 'Bearer',
            id_token: null,
        });
        // Return the cached access token.
        return this.cachedAccessToken;
    }
    /**
     * Returns the workload identity pool project number if it is determinable
     * from the audience resource name.
     * @param audience The STS audience used to determine the project number.
     * @return The project number associated with the workload identity pool, if
     *   this can be determined from the STS audience field. Otherwise, null is
     *   returned.
     */
    getProjectNumber(audience) {
        // STS audience pattern:
        // //iam.googleapis.com/projects/$PROJECT_NUMBER/locations/...
        const match = audience.match(/\/projects\/([^/]+)/);
        if (!match) {
            return null;
        }
        return match[1];
    }
    /**
     * Exchanges an external account GCP access token for a service
     * account impersonated access token using iamcredentials
     * GenerateAccessToken API.
     * @param token The access token to exchange for a service account access
     *   token.
     * @return A promise that resolves with the service account impersonated
     *   credentials response.
     */
    async getImpersonatedAccessToken(token) {
        const opts = {
            url: this.serviceAccountImpersonationUrl,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            data: {
                scope: this.getScopesArray(),
            },
            responseType: 'json',
        };
        const response = await this.transporter.request(opts);
        const successResponse = response.data;
        return {
            access_token: successResponse.accessToken,
            // Convert from ISO format to timestamp.
            expiry_date: new Date(successResponse.expireTime).getTime(),
            res: response,
        };
    }
    /**
     * Returns whether the provided credentials are expired or not.
     * If there is no expiry time, assumes the token is not expired or expiring.
     * @param accessToken The credentials to check for expiration.
     * @return Whether the credentials are expired or not.
     */
    isExpired(accessToken) {
        const now = new Date().getTime();
        return accessToken.expiry_date
            ? now >= accessToken.expiry_date - this.eagerRefreshThresholdMillis
            : false;
    }
    /**
     * @return The list of scopes for the requested GCP access token.
     */
    getScopesArray() {
        // Since scopes can be provided as string or array, the type should
        // be normalized.
        if (typeof this.scopes === 'string') {
            return [this.scopes];
        }
        else if (typeof this.scopes === 'undefined') {
            return [DEFAULT_OAUTH_SCOPE];
        }
        else {
            return this.scopes;
        }
    }
    /**
     * Checks whether Google APIs URL is valid.
     * @param apiName The apiName of url.
     * @param url The Google API URL to validate.
     * @return Whether the URL is valid or not.
     */
    validateGoogleAPIsUrl(apiName, url) {
        let parsedUrl;
        // Return false if error is thrown during parsing URL.
        try {
            parsedUrl = new URL(url);
        }
        catch (e) {
            return false;
        }
        const urlDomain = parsedUrl.hostname;
        // Check the protocol is https.
        if (parsedUrl.protocol !== 'https:') {
            return false;
        }
        const googleAPIsDomainPatterns = [
            new RegExp('^' +
                VARIABLE_PORTION_PATTERN +
                '\\.' +
                apiName +
                GOOGLE_APIS_DOMAIN_PATTERN),
            new RegExp('^' + apiName + GOOGLE_APIS_DOMAIN_PATTERN),
            new RegExp('^' +
                apiName +
                '\\.' +
                VARIABLE_PORTION_PATTERN +
                GOOGLE_APIS_DOMAIN_PATTERN),
            new RegExp('^' +
                VARIABLE_PORTION_PATTERN +
                '\\-' +
                apiName +
                GOOGLE_APIS_DOMAIN_PATTERN),
        ];
        for (const googleAPIsDomainPattern of googleAPIsDomainPatterns) {
            if (urlDomain.match(googleAPIsDomainPattern)) {
                return true;
            }
        }
        return false;
    }
}
exports.BaseExternalAccountClient = BaseExternalAccountClient;
//# sourceMappingURL=baseexternalclient.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/computeclient.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2013 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Compute = void 0;
const arrify = __webpack_require__("./node_modules/arrify/index.js");
const gaxios_1 = __webpack_require__("./node_modules/gaxios/build/src/index.js");
const gcpMetadata = __webpack_require__("./node_modules/gcp-metadata/build/src/index.js");
const oauth2client_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/oauth2client.js");
class Compute extends oauth2client_1.OAuth2Client {
    /**
     * Google Compute Engine service account credentials.
     *
     * Retrieve access token from the metadata server.
     * See: https://developers.google.com/compute/docs/authentication
     */
    constructor(options = {}) {
        super(options);
        // Start with an expired refresh token, which will automatically be
        // refreshed before the first API call is made.
        this.credentials = { expiry_date: 1, refresh_token: 'compute-placeholder' };
        this.serviceAccountEmail = options.serviceAccountEmail || 'default';
        this.scopes = arrify(options.scopes);
    }
    /**
     * Refreshes the access token.
     * @param refreshToken Unused parameter
     */
    async refreshTokenNoCache(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    refreshToken) {
        const tokenPath = `service-accounts/${this.serviceAccountEmail}/token`;
        let data;
        try {
            const instanceOptions = {
                property: tokenPath,
            };
            if (this.scopes.length > 0) {
                instanceOptions.params = {
                    scopes: this.scopes.join(','),
                };
            }
            data = await gcpMetadata.instance(instanceOptions);
        }
        catch (e) {
            if (e instanceof gaxios_1.GaxiosError) {
                e.message = `Could not refresh access token: ${e.message}`;
                this.wrapError(e);
            }
            throw e;
        }
        const tokens = data;
        if (data && data.expires_in) {
            tokens.expiry_date = new Date().getTime() + data.expires_in * 1000;
            delete tokens.expires_in;
        }
        this.emit('tokens', tokens);
        return { tokens, res: null };
    }
    /**
     * Fetches an ID token.
     * @param targetAudience the audience for the fetched ID token.
     */
    async fetchIdToken(targetAudience) {
        const idTokenPath = `service-accounts/${this.serviceAccountEmail}/identity` +
            `?format=full&audience=${targetAudience}`;
        let idToken;
        try {
            const instanceOptions = {
                property: idTokenPath,
            };
            idToken = await gcpMetadata.instance(instanceOptions);
        }
        catch (e) {
            if (e instanceof Error) {
                e.message = `Could not fetch ID token: ${e.message}`;
            }
            throw e;
        }
        return idToken;
    }
    wrapError(e) {
        const res = e.response;
        if (res && res.status) {
            e.code = res.status.toString();
            if (res.status === 403) {
                e.message =
                    'A Forbidden error was returned while attempting to retrieve an access ' +
                        'token for the Compute Engine built-in service account. This may be because the Compute ' +
                        'Engine instance does not have the correct permission scopes specified: ' +
                        e.message;
            }
            else if (res.status === 404) {
                e.message =
                    'A Not Found error was returned while attempting to retrieve an access' +
                        'token for the Compute Engine built-in service account. This may be because the Compute ' +
                        'Engine instance does not have any permission scopes specified: ' +
                        e.message;
            }
        }
    }
}
exports.Compute = Compute;
//# sourceMappingURL=computeclient.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/downscopedclient.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DownscopedClient = exports.EXPIRATION_TIME_OFFSET = exports.MAX_ACCESS_BOUNDARY_RULES_COUNT = void 0;
const stream = __webpack_require__("stream");
const authclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/authclient.js");
const sts = __webpack_require__("./node_modules/google-auth-library/build/src/auth/stscredentials.js");
/**
 * The required token exchange grant_type: rfc8693#section-2.1
 */
const STS_GRANT_TYPE = 'urn:ietf:params:oauth:grant-type:token-exchange';
/**
 * The requested token exchange requested_token_type: rfc8693#section-2.1
 */
const STS_REQUEST_TOKEN_TYPE = 'urn:ietf:params:oauth:token-type:access_token';
/**
 * The requested token exchange subject_token_type: rfc8693#section-2.1
 */
const STS_SUBJECT_TOKEN_TYPE = 'urn:ietf:params:oauth:token-type:access_token';
/** The STS access token exchange end point. */
const STS_ACCESS_TOKEN_URL = 'https://sts.googleapis.com/v1/token';
/**
 * The maximum number of access boundary rules a Credential Access Boundary
 * can contain.
 */
exports.MAX_ACCESS_BOUNDARY_RULES_COUNT = 10;
/**
 * Offset to take into account network delays and server clock skews.
 */
exports.EXPIRATION_TIME_OFFSET = 5 * 60 * 1000;
/**
 * Defines a set of Google credentials that are downscoped from an existing set
 * of Google OAuth2 credentials. This is useful to restrict the Identity and
 * Access Management (IAM) permissions that a short-lived credential can use.
 * The common pattern of usage is to have a token broker with elevated access
 * generate these downscoped credentials from higher access source credentials
 * and pass the downscoped short-lived access tokens to a token consumer via
 * some secure authenticated channel for limited access to Google Cloud Storage
 * resources.
 */
class DownscopedClient extends authclient_1.AuthClient {
    /**
     * Instantiates a downscoped client object using the provided source
     * AuthClient and credential access boundary rules.
     * To downscope permissions of a source AuthClient, a Credential Access
     * Boundary that specifies which resources the new credential can access, as
     * well as an upper bound on the permissions that are available on each
     * resource, has to be defined. A downscoped client can then be instantiated
     * using the source AuthClient and the Credential Access Boundary.
     * @param authClient The source AuthClient to be downscoped based on the
     *   provided Credential Access Boundary rules.
     * @param credentialAccessBoundary The Credential Access Boundary which
     *   contains a list of access boundary rules. Each rule contains information
     *   on the resource that the rule applies to, the upper bound of the
     *   permissions that are available on that resource and an optional
     *   condition to further restrict permissions.
     * @param additionalOptions Optional additional behavior customization
     *   options. These currently customize expiration threshold time and
     *   whether to retry on 401/403 API request errors.
     * @param quotaProjectId Optional quota project id for setting up in the
     *   x-goog-user-project header.
     */
    constructor(authClient, credentialAccessBoundary, additionalOptions, quotaProjectId) {
        super();
        this.authClient = authClient;
        this.credentialAccessBoundary = credentialAccessBoundary;
        // Check 1-10 Access Boundary Rules are defined within Credential Access
        // Boundary.
        if (credentialAccessBoundary.accessBoundary.accessBoundaryRules.length === 0) {
            throw new Error('At least one access boundary rule needs to be defined.');
        }
        else if (credentialAccessBoundary.accessBoundary.accessBoundaryRules.length >
            exports.MAX_ACCESS_BOUNDARY_RULES_COUNT) {
            throw new Error('The provided access boundary has more than ' +
                `${exports.MAX_ACCESS_BOUNDARY_RULES_COUNT} access boundary rules.`);
        }
        // Check at least one permission should be defined in each Access Boundary
        // Rule.
        for (const rule of credentialAccessBoundary.accessBoundary
            .accessBoundaryRules) {
            if (rule.availablePermissions.length === 0) {
                throw new Error('At least one permission should be defined in access boundary rules.');
            }
        }
        this.stsCredential = new sts.StsCredentials(STS_ACCESS_TOKEN_URL);
        this.cachedDownscopedAccessToken = null;
        // As threshold could be zero,
        // eagerRefreshThresholdMillis || EXPIRATION_TIME_OFFSET will override the
        // zero value.
        if (typeof (additionalOptions === null || additionalOptions === void 0 ? void 0 : additionalOptions.eagerRefreshThresholdMillis) !== 'number') {
            this.eagerRefreshThresholdMillis = exports.EXPIRATION_TIME_OFFSET;
        }
        else {
            this.eagerRefreshThresholdMillis = additionalOptions
                .eagerRefreshThresholdMillis;
        }
        this.forceRefreshOnFailure = !!(additionalOptions === null || additionalOptions === void 0 ? void 0 : additionalOptions.forceRefreshOnFailure);
        this.quotaProjectId = quotaProjectId;
    }
    /**
     * Provides a mechanism to inject Downscoped access tokens directly.
     * The expiry_date field is required to facilitate determination of the token
     * expiration which would make it easier for the token consumer to handle.
     * @param credentials The Credentials object to set on the current client.
     */
    setCredentials(credentials) {
        if (!credentials.expiry_date) {
            throw new Error('The access token expiry_date field is missing in the provided ' +
                'credentials.');
        }
        super.setCredentials(credentials);
        this.cachedDownscopedAccessToken = credentials;
    }
    async getAccessToken() {
        // If the cached access token is unavailable or expired, force refresh.
        // The Downscoped access token will be returned in
        // DownscopedAccessTokenResponse format.
        if (!this.cachedDownscopedAccessToken ||
            this.isExpired(this.cachedDownscopedAccessToken)) {
            await this.refreshAccessTokenAsync();
        }
        // Return Downscoped access token in DownscopedAccessTokenResponse format.
        return {
            token: this.cachedDownscopedAccessToken.access_token,
            expirationTime: this.cachedDownscopedAccessToken.expiry_date,
            res: this.cachedDownscopedAccessToken.res,
        };
    }
    /**
     * The main authentication interface. It takes an optional url which when
     * present is the endpoint being accessed, and returns a Promise which
     * resolves with authorization header fields.
     *
     * The result has the form:
     * { Authorization: 'Bearer <access_token_value>' }
     */
    async getRequestHeaders() {
        const accessTokenResponse = await this.getAccessToken();
        const headers = {
            Authorization: `Bearer ${accessTokenResponse.token}`,
        };
        return this.addSharedMetadataHeaders(headers);
    }
    request(opts, callback) {
        if (callback) {
            this.requestAsync(opts).then(r => callback(null, r), e => {
                return callback(e, e.response);
            });
        }
        else {
            return this.requestAsync(opts);
        }
    }
    /**
     * Authenticates the provided HTTP request, processes it and resolves with the
     * returned response.
     * @param opts The HTTP request options.
     * @param retry Whether the current attempt is a retry after a failed attempt.
     * @return A promise that resolves with the successful response.
     */
    async requestAsync(opts, retry = false) {
        let response;
        try {
            const requestHeaders = await this.getRequestHeaders();
            opts.headers = opts.headers || {};
            if (requestHeaders && requestHeaders['x-goog-user-project']) {
                opts.headers['x-goog-user-project'] =
                    requestHeaders['x-goog-user-project'];
            }
            if (requestHeaders && requestHeaders.Authorization) {
                opts.headers.Authorization = requestHeaders.Authorization;
            }
            response = await this.transporter.request(opts);
        }
        catch (e) {
            const res = e.response;
            if (res) {
                const statusCode = res.status;
                // Retry the request for metadata if the following criteria are true:
                // - We haven't already retried.  It only makes sense to retry once.
                // - The response was a 401 or a 403
                // - The request didn't send a readableStream
                // - forceRefreshOnFailure is true
                const isReadableStream = res.config.data instanceof stream.Readable;
                const isAuthErr = statusCode === 401 || statusCode === 403;
                if (!retry &&
                    isAuthErr &&
                    !isReadableStream &&
                    this.forceRefreshOnFailure) {
                    await this.refreshAccessTokenAsync();
                    return await this.requestAsync(opts, true);
                }
            }
            throw e;
        }
        return response;
    }
    /**
     * Forces token refresh, even if unexpired tokens are currently cached.
     * GCP access tokens are retrieved from authclient object/source credential.
     * Then GCP access tokens are exchanged for downscoped access tokens via the
     * token exchange endpoint.
     * @return A promise that resolves with the fresh downscoped access token.
     */
    async refreshAccessTokenAsync() {
        var _a;
        // Retrieve GCP access token from source credential.
        const subjectToken = (await this.authClient.getAccessToken()).token;
        // Construct the STS credentials options.
        const stsCredentialsOptions = {
            grantType: STS_GRANT_TYPE,
            requestedTokenType: STS_REQUEST_TOKEN_TYPE,
            subjectToken: subjectToken,
            subjectTokenType: STS_SUBJECT_TOKEN_TYPE,
        };
        // Exchange the source AuthClient access token for a Downscoped access
        // token.
        const stsResponse = await this.stsCredential.exchangeToken(stsCredentialsOptions, undefined, this.credentialAccessBoundary);
        /**
         * The STS endpoint will only return the expiration time for the downscoped
         * access token if the original access token represents a service account.
         * The downscoped token's expiration time will always match the source
         * credential expiration. When no expires_in is returned, we can copy the
         * source credential's expiration time.
         */
        const sourceCredExpireDate = ((_a = this.authClient.credentials) === null || _a === void 0 ? void 0 : _a.expiry_date) || null;
        const expiryDate = stsResponse.expires_in
            ? new Date().getTime() + stsResponse.expires_in * 1000
            : sourceCredExpireDate;
        // Save response in cached access token.
        this.cachedDownscopedAccessToken = {
            access_token: stsResponse.access_token,
            expiry_date: expiryDate,
            res: stsResponse.res,
        };
        // Save credentials.
        this.credentials = {};
        Object.assign(this.credentials, this.cachedDownscopedAccessToken);
        delete this.credentials.res;
        // Trigger tokens event to notify external listeners.
        this.emit('tokens', {
            refresh_token: null,
            expiry_date: this.cachedDownscopedAccessToken.expiry_date,
            access_token: this.cachedDownscopedAccessToken.access_token,
            token_type: 'Bearer',
            id_token: null,
        });
        // Return the cached access token.
        return this.cachedDownscopedAccessToken;
    }
    /**
     * Returns whether the provided credentials are expired or not.
     * If there is no expiry time, assumes the token is not expired or expiring.
     * @param downscopedAccessToken The credentials to check for expiration.
     * @return Whether the credentials are expired or not.
     */
    isExpired(downscopedAccessToken) {
        const now = new Date().getTime();
        return downscopedAccessToken.expiry_date
            ? now >=
                downscopedAccessToken.expiry_date - this.eagerRefreshThresholdMillis
            : false;
    }
}
exports.DownscopedClient = DownscopedClient;
//# sourceMappingURL=downscopedclient.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/envDetect.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getEnv = exports.clear = exports.GCPEnv = void 0;
const gcpMetadata = __webpack_require__("./node_modules/gcp-metadata/build/src/index.js");
var GCPEnv;
(function (GCPEnv) {
    GCPEnv["APP_ENGINE"] = "APP_ENGINE";
    GCPEnv["KUBERNETES_ENGINE"] = "KUBERNETES_ENGINE";
    GCPEnv["CLOUD_FUNCTIONS"] = "CLOUD_FUNCTIONS";
    GCPEnv["COMPUTE_ENGINE"] = "COMPUTE_ENGINE";
    GCPEnv["CLOUD_RUN"] = "CLOUD_RUN";
    GCPEnv["NONE"] = "NONE";
})(GCPEnv = exports.GCPEnv || (exports.GCPEnv = {}));
let envPromise;
function clear() {
    envPromise = undefined;
}
exports.clear = clear;
async function getEnv() {
    if (envPromise) {
        return envPromise;
    }
    envPromise = getEnvMemoized();
    return envPromise;
}
exports.getEnv = getEnv;
async function getEnvMemoized() {
    let env = GCPEnv.NONE;
    if (isAppEngine()) {
        env = GCPEnv.APP_ENGINE;
    }
    else if (isCloudFunction()) {
        env = GCPEnv.CLOUD_FUNCTIONS;
    }
    else if (await isComputeEngine()) {
        if (await isKubernetesEngine()) {
            env = GCPEnv.KUBERNETES_ENGINE;
        }
        else if (isCloudRun()) {
            env = GCPEnv.CLOUD_RUN;
        }
        else {
            env = GCPEnv.COMPUTE_ENGINE;
        }
    }
    else {
        env = GCPEnv.NONE;
    }
    return env;
}
function isAppEngine() {
    return !!(process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME);
}
function isCloudFunction() {
    return !!(process.env.FUNCTION_NAME || process.env.FUNCTION_TARGET);
}
/**
 * This check only verifies that the environment is running knative.
 * This must be run *after* checking for Kubernetes, otherwise it will
 * return a false positive.
 */
function isCloudRun() {
    return !!process.env.K_CONFIGURATION;
}
async function isKubernetesEngine() {
    try {
        await gcpMetadata.instance('attributes/cluster-name');
        return true;
    }
    catch (e) {
        return false;
    }
}
async function isComputeEngine() {
    return gcpMetadata.isAvailable();
}
//# sourceMappingURL=envDetect.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/externalclient.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExternalAccountClient = void 0;
const baseexternalclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/baseexternalclient.js");
const identitypoolclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/identitypoolclient.js");
const awsclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/awsclient.js");
/**
 * Dummy class with no constructor. Developers are expected to use fromJSON.
 */
class ExternalAccountClient {
    constructor() {
        throw new Error('ExternalAccountClients should be initialized via: ' +
            'ExternalAccountClient.fromJSON(), ' +
            'directly via explicit constructors, eg. ' +
            'new AwsClient(options), new IdentityPoolClient(options) or via ' +
            'new GoogleAuth(options).getClient()');
    }
    /**
     * This static method will instantiate the
     * corresponding type of external account credential depending on the
     * underlying credential source.
     * @param options The external account options object typically loaded
     *   from the external account JSON credential file.
     * @param additionalOptions Optional additional behavior customization
     *   options. These currently customize expiration threshold time and
     *   whether to retry on 401/403 API request errors.
     * @return A BaseExternalAccountClient instance or null if the options
     *   provided do not correspond to an external account credential.
     */
    static fromJSON(options, additionalOptions) {
        var _a;
        if (options && options.type === baseexternalclient_1.EXTERNAL_ACCOUNT_TYPE) {
            if ((_a = options.credential_source) === null || _a === void 0 ? void 0 : _a.environment_id) {
                return new awsclient_1.AwsClient(options, additionalOptions);
            }
            else {
                return new identitypoolclient_1.IdentityPoolClient(options, additionalOptions);
            }
        }
        else {
            return null;
        }
    }
}
exports.ExternalAccountClient = ExternalAccountClient;
//# sourceMappingURL=externalclient.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/googleauth.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleAuth = exports.CLOUD_SDK_CLIENT_ID = void 0;
const child_process_1 = __webpack_require__("child_process");
const fs = __webpack_require__("fs");
const gcpMetadata = __webpack_require__("./node_modules/gcp-metadata/build/src/index.js");
const os = __webpack_require__("os");
const path = __webpack_require__("path");
const crypto_1 = __webpack_require__("./node_modules/google-auth-library/build/src/crypto/crypto.js");
const transporters_1 = __webpack_require__("./node_modules/google-auth-library/build/src/transporters.js");
const computeclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/computeclient.js");
const idtokenclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/idtokenclient.js");
const envDetect_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/envDetect.js");
const jwtclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/jwtclient.js");
const refreshclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/refreshclient.js");
const externalclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/externalclient.js");
const baseexternalclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/baseexternalclient.js");
exports.CLOUD_SDK_CLIENT_ID = '764086051850-6qr4p6gpi6hn506pt8ejuq83di341hur.apps.googleusercontent.com';
class GoogleAuth {
    constructor(opts) {
        /**
         * Caches a value indicating whether the auth layer is running on Google
         * Compute Engine.
         * @private
         */
        this.checkIsGCE = undefined;
        // To save the contents of the JSON credential file
        this.jsonContent = null;
        this.cachedCredential = null;
        opts = opts || {};
        this._cachedProjectId = opts.projectId || null;
        this.cachedCredential = opts.authClient || null;
        this.keyFilename = opts.keyFilename || opts.keyFile;
        this.scopes = opts.scopes;
        this.jsonContent = opts.credentials || null;
        this.clientOptions = opts.clientOptions;
    }
    // Note:  this properly is only public to satisify unit tests.
    // https://github.com/Microsoft/TypeScript/issues/5228
    get isGCE() {
        return this.checkIsGCE;
    }
    // GAPIC client libraries should always use self-signed JWTs. The following
    // variables are set on the JWT client in order to indicate the type of library,
    // and sign the JWT with the correct audience and scopes (if not supplied).
    setGapicJWTValues(client) {
        client.defaultServicePath = this.defaultServicePath;
        client.useJWTAccessWithScope = this.useJWTAccessWithScope;
        client.defaultScopes = this.defaultScopes;
    }
    getProjectId(callback) {
        if (callback) {
            this.getProjectIdAsync().then(r => callback(null, r), callback);
        }
        else {
            return this.getProjectIdAsync();
        }
    }
    getProjectIdAsync() {
        if (this._cachedProjectId) {
            return Promise.resolve(this._cachedProjectId);
        }
        // In implicit case, supports three environments. In order of precedence,
        // the implicit environments are:
        // - GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT environment variable
        // - GOOGLE_APPLICATION_CREDENTIALS JSON file
        // - Cloud SDK: `gcloud config config-helper --format json`
        // - GCE project ID from metadata server)
        if (!this._getDefaultProjectIdPromise) {
            // TODO: refactor the below code so that it doesn't mix and match
            // promises and async/await.
            this._getDefaultProjectIdPromise = new Promise(
            // eslint-disable-next-line no-async-promise-executor
            async (resolve, reject) => {
                try {
                    const projectId = this.getProductionProjectId() ||
                        (await this.getFileProjectId()) ||
                        (await this.getDefaultServiceProjectId()) ||
                        (await this.getGCEProjectId()) ||
                        (await this.getExternalAccountClientProjectId());
                    this._cachedProjectId = projectId;
                    if (!projectId) {
                        throw new Error('Unable to detect a Project Id in the current environment. \n' +
                            'To learn more about authentication and Google APIs, visit: \n' +
                            'https://cloud.google.com/docs/authentication/getting-started');
                    }
                    resolve(projectId);
                }
                catch (e) {
                    reject(e);
                }
            });
        }
        return this._getDefaultProjectIdPromise;
    }
    /**
     * @returns Any scopes (user-specified or default scopes specified by the
     *   client library) that need to be set on the current Auth client.
     */
    getAnyScopes() {
        return this.scopes || this.defaultScopes;
    }
    getApplicationDefault(optionsOrCallback = {}, callback) {
        let options;
        if (typeof optionsOrCallback === 'function') {
            callback = optionsOrCallback;
        }
        else {
            options = optionsOrCallback;
        }
        if (callback) {
            this.getApplicationDefaultAsync(options).then(r => callback(null, r.credential, r.projectId), callback);
        }
        else {
            return this.getApplicationDefaultAsync(options);
        }
    }
    async getApplicationDefaultAsync(options = {}) {
        // If we've already got a cached credential, just return it.
        if (this.cachedCredential) {
            return {
                credential: this.cachedCredential,
                projectId: await this.getProjectIdAsync(),
            };
        }
        let credential;
        let projectId;
        // Check for the existence of a local environment variable pointing to the
        // location of the credential file. This is typically used in local
        // developer scenarios.
        credential =
            await this._tryGetApplicationCredentialsFromEnvironmentVariable(options);
        if (credential) {
            if (credential instanceof jwtclient_1.JWT) {
                credential.scopes = this.scopes;
            }
            else if (credential instanceof baseexternalclient_1.BaseExternalAccountClient) {
                credential.scopes = this.getAnyScopes();
            }
            this.cachedCredential = credential;
            projectId = await this.getProjectId();
            return { credential, projectId };
        }
        // Look in the well-known credential file location.
        credential = await this._tryGetApplicationCredentialsFromWellKnownFile(options);
        if (credential) {
            if (credential instanceof jwtclient_1.JWT) {
                credential.scopes = this.scopes;
            }
            else if (credential instanceof baseexternalclient_1.BaseExternalAccountClient) {
                credential.scopes = this.getAnyScopes();
            }
            this.cachedCredential = credential;
            projectId = await this.getProjectId();
            return { credential, projectId };
        }
        // Determine if we're running on GCE.
        let isGCE;
        try {
            isGCE = await this._checkIsGCE();
        }
        catch (e) {
            if (e instanceof Error) {
                e.message = `Unexpected error determining execution environment: ${e.message}`;
            }
            throw e;
        }
        if (!isGCE) {
            // We failed to find the default credentials. Bail out with an error.
            throw new Error('Could not load the default credentials. Browse to https://cloud.google.com/docs/authentication/getting-started for more information.');
        }
        // For GCE, just return a default ComputeClient. It will take care of
        // the rest.
        options.scopes = this.getAnyScopes();
        this.cachedCredential = new computeclient_1.Compute(options);
        projectId = await this.getProjectId();
        return { projectId, credential: this.cachedCredential };
    }
    /**
     * Determines whether the auth layer is running on Google Compute Engine.
     * @returns A promise that resolves with the boolean.
     * @api private
     */
    async _checkIsGCE() {
        if (this.checkIsGCE === undefined) {
            this.checkIsGCE = await gcpMetadata.isAvailable();
        }
        return this.checkIsGCE;
    }
    /**
     * Attempts to load default credentials from the environment variable path..
     * @returns Promise that resolves with the OAuth2Client or null.
     * @api private
     */
    async _tryGetApplicationCredentialsFromEnvironmentVariable(options) {
        const credentialsPath = process.env['GOOGLE_APPLICATION_CREDENTIALS'] ||
            process.env['google_application_credentials'];
        if (!credentialsPath || credentialsPath.length === 0) {
            return null;
        }
        try {
            return this._getApplicationCredentialsFromFilePath(credentialsPath, options);
        }
        catch (e) {
            if (e instanceof Error) {
                e.message = `Unable to read the credential file specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable: ${e.message}`;
            }
            throw e;
        }
    }
    /**
     * Attempts to load default credentials from a well-known file location
     * @return Promise that resolves with the OAuth2Client or null.
     * @api private
     */
    async _tryGetApplicationCredentialsFromWellKnownFile(options) {
        // First, figure out the location of the file, depending upon the OS type.
        let location = null;
        if (this._isWindows()) {
            // Windows
            location = process.env['APPDATA'];
        }
        else {
            // Linux or Mac
            const home = process.env['HOME'];
            if (home) {
                location = path.join(home, '.config');
            }
        }
        // If we found the root path, expand it.
        if (location) {
            location = path.join(location, 'gcloud', 'application_default_credentials.json');
            if (!fs.existsSync(location)) {
                location = null;
            }
        }
        // The file does not exist.
        if (!location) {
            return null;
        }
        // The file seems to exist. Try to use it.
        const client = await this._getApplicationCredentialsFromFilePath(location, options);
        return client;
    }
    /**
     * Attempts to load default credentials from a file at the given path..
     * @param filePath The path to the file to read.
     * @returns Promise that resolves with the OAuth2Client
     * @api private
     */
    async _getApplicationCredentialsFromFilePath(filePath, options = {}) {
        // Make sure the path looks like a string.
        if (!filePath || filePath.length === 0) {
            throw new Error('The file path is invalid.');
        }
        // Make sure there is a file at the path. lstatSync will throw if there is
        // nothing there.
        try {
            // Resolve path to actual file in case of symlink. Expect a thrown error
            // if not resolvable.
            filePath = fs.realpathSync(filePath);
            if (!fs.lstatSync(filePath).isFile()) {
                throw new Error();
            }
        }
        catch (err) {
            if (err instanceof Error) {
                err.message = `The file at ${filePath} does not exist, or it is not a file. ${err.message}`;
            }
            throw err;
        }
        // Now open a read stream on the file, and parse it.
        const readStream = fs.createReadStream(filePath);
        return this.fromStream(readStream, options);
    }
    /**
     * Create a credentials instance using the given input options.
     * @param json The input object.
     * @param options The JWT or UserRefresh options for the client
     * @returns JWT or UserRefresh Client with data
     */
    fromJSON(json, options) {
        let client;
        if (!json) {
            throw new Error('Must pass in a JSON object containing the Google auth settings.');
        }
        options = options || {};
        if (json.type === 'authorized_user') {
            client = new refreshclient_1.UserRefreshClient(options);
            client.fromJSON(json);
        }
        else if (json.type === baseexternalclient_1.EXTERNAL_ACCOUNT_TYPE) {
            client = externalclient_1.ExternalAccountClient.fromJSON(json, options);
            client.scopes = this.getAnyScopes();
        }
        else {
            options.scopes = this.scopes;
            client = new jwtclient_1.JWT(options);
            this.setGapicJWTValues(client);
            client.fromJSON(json);
        }
        return client;
    }
    /**
     * Return a JWT or UserRefreshClient from JavaScript object, caching both the
     * object used to instantiate and the client.
     * @param json The input object.
     * @param options The JWT or UserRefresh options for the client
     * @returns JWT or UserRefresh Client with data
     */
    _cacheClientFromJSON(json, options) {
        let client;
        // create either a UserRefreshClient or JWT client.
        options = options || {};
        if (json.type === 'authorized_user') {
            client = new refreshclient_1.UserRefreshClient(options);
            client.fromJSON(json);
        }
        else if (json.type === baseexternalclient_1.EXTERNAL_ACCOUNT_TYPE) {
            client = externalclient_1.ExternalAccountClient.fromJSON(json, options);
            client.scopes = this.getAnyScopes();
        }
        else {
            options.scopes = this.scopes;
            client = new jwtclient_1.JWT(options);
            this.setGapicJWTValues(client);
            client.fromJSON(json);
        }
        // cache both raw data used to instantiate client and client itself.
        this.jsonContent = json;
        this.cachedCredential = client;
        return client;
    }
    fromStream(inputStream, optionsOrCallback = {}, callback) {
        let options = {};
        if (typeof optionsOrCallback === 'function') {
            callback = optionsOrCallback;
        }
        else {
            options = optionsOrCallback;
        }
        if (callback) {
            this.fromStreamAsync(inputStream, options).then(r => callback(null, r), callback);
        }
        else {
            return this.fromStreamAsync(inputStream, options);
        }
    }
    fromStreamAsync(inputStream, options) {
        return new Promise((resolve, reject) => {
            if (!inputStream) {
                throw new Error('Must pass in a stream containing the Google auth settings.');
            }
            let s = '';
            inputStream
                .setEncoding('utf8')
                .on('error', reject)
                .on('data', chunk => (s += chunk))
                .on('end', () => {
                try {
                    try {
                        const data = JSON.parse(s);
                        const r = this._cacheClientFromJSON(data, options);
                        return resolve(r);
                    }
                    catch (err) {
                        // If we failed parsing this.keyFileName, assume that it
                        // is a PEM or p12 certificate:
                        if (!this.keyFilename)
                            throw err;
                        const client = new jwtclient_1.JWT({
                            ...this.clientOptions,
                            keyFile: this.keyFilename,
                        });
                        this.cachedCredential = client;
                        this.setGapicJWTValues(client);
                        return resolve(client);
                    }
                }
                catch (err) {
                    return reject(err);
                }
            });
        });
    }
    /**
     * Create a credentials instance using the given API key string.
     * @param apiKey The API key string
     * @param options An optional options object.
     * @returns A JWT loaded from the key
     */
    fromAPIKey(apiKey, options) {
        options = options || {};
        const client = new jwtclient_1.JWT(options);
        client.fromAPIKey(apiKey);
        return client;
    }
    /**
     * Determines whether the current operating system is Windows.
     * @api private
     */
    _isWindows() {
        const sys = os.platform();
        if (sys && sys.length >= 3) {
            if (sys.substring(0, 3).toLowerCase() === 'win') {
                return true;
            }
        }
        return false;
    }
    /**
     * Run the Google Cloud SDK command that prints the default project ID
     */
    async getDefaultServiceProjectId() {
        return new Promise(resolve => {
            (0, child_process_1.exec)('gcloud config config-helper --format json', (err, stdout) => {
                if (!err && stdout) {
                    try {
                        const projectId = JSON.parse(stdout).configuration.properties.core.project;
                        resolve(projectId);
                        return;
                    }
                    catch (e) {
                        // ignore errors
                    }
                }
                resolve(null);
            });
        });
    }
    /**
     * Loads the project id from environment variables.
     * @api private
     */
    getProductionProjectId() {
        return (process.env['GCLOUD_PROJECT'] ||
            process.env['GOOGLE_CLOUD_PROJECT'] ||
            process.env['gcloud_project'] ||
            process.env['google_cloud_project']);
    }
    /**
     * Loads the project id from the GOOGLE_APPLICATION_CREDENTIALS json file.
     * @api private
     */
    async getFileProjectId() {
        if (this.cachedCredential) {
            // Try to read the project ID from the cached credentials file
            return this.cachedCredential.projectId;
        }
        // Ensure the projectId is loaded from the keyFile if available.
        if (this.keyFilename) {
            const creds = await this.getClient();
            if (creds && creds.projectId) {
                return creds.projectId;
            }
        }
        // Try to load a credentials file and read its project ID
        const r = await this._tryGetApplicationCredentialsFromEnvironmentVariable();
        if (r) {
            return r.projectId;
        }
        else {
            return null;
        }
    }
    /**
     * Gets the project ID from external account client if available.
     */
    async getExternalAccountClientProjectId() {
        if (!this.jsonContent || this.jsonContent.type !== baseexternalclient_1.EXTERNAL_ACCOUNT_TYPE) {
            return null;
        }
        const creds = await this.getClient();
        // Do not suppress the underlying error, as the error could contain helpful
        // information for debugging and fixing. This is especially true for
        // external account creds as in order to get the project ID, the following
        // operations have to succeed:
        // 1. Valid credentials file should be supplied.
        // 2. Ability to retrieve access tokens from STS token exchange API.
        // 3. Ability to exchange for service account impersonated credentials (if
        //    enabled).
        // 4. Ability to get project info using the access token from step 2 or 3.
        // Without surfacing the error, it is harder for developers to determine
        // which step went wrong.
        return await creds.getProjectId();
    }
    /**
     * Gets the Compute Engine project ID if it can be inferred.
     */
    async getGCEProjectId() {
        try {
            const r = await gcpMetadata.project('project-id');
            return r;
        }
        catch (e) {
            // Ignore any errors
            return null;
        }
    }
    getCredentials(callback) {
        if (callback) {
            this.getCredentialsAsync().then(r => callback(null, r), callback);
        }
        else {
            return this.getCredentialsAsync();
        }
    }
    async getCredentialsAsync() {
        const client = await this.getClient();
        if (client instanceof baseexternalclient_1.BaseExternalAccountClient) {
            const serviceAccountEmail = client.getServiceAccountEmail();
            if (serviceAccountEmail) {
                return { client_email: serviceAccountEmail };
            }
        }
        if (this.jsonContent) {
            const credential = {
                client_email: this.jsonContent.client_email,
                private_key: this.jsonContent.private_key,
            };
            return credential;
        }
        const isGCE = await this._checkIsGCE();
        if (!isGCE) {
            throw new Error('Unknown error.');
        }
        // For GCE, return the service account details from the metadata server
        // NOTE: The trailing '/' at the end of service-accounts/ is very important!
        // The GCF metadata server doesn't respect querystring params if this / is
        // not included.
        const data = await gcpMetadata.instance({
            property: 'service-accounts/',
            params: { recursive: 'true' },
        });
        if (!data || !data.default || !data.default.email) {
            throw new Error('Failure from metadata server.');
        }
        return { client_email: data.default.email };
    }
    /**
     * Automatically obtain a client based on the provided configuration.  If no
     * options were passed, use Application Default Credentials.
     */
    async getClient() {
        if (!this.cachedCredential) {
            if (this.jsonContent) {
                this._cacheClientFromJSON(this.jsonContent, this.clientOptions);
            }
            else if (this.keyFilename) {
                const filePath = path.resolve(this.keyFilename);
                const stream = fs.createReadStream(filePath);
                await this.fromStreamAsync(stream, this.clientOptions);
            }
            else {
                await this.getApplicationDefaultAsync(this.clientOptions);
            }
        }
        return this.cachedCredential;
    }
    /**
     * Creates a client which will fetch an ID token for authorization.
     * @param targetAudience the audience for the fetched ID token.
     * @returns IdTokenClient for making HTTP calls authenticated with ID tokens.
     */
    async getIdTokenClient(targetAudience) {
        const client = await this.getClient();
        if (!('fetchIdToken' in client)) {
            throw new Error('Cannot fetch ID token in this environment, use GCE or set the GOOGLE_APPLICATION_CREDENTIALS environment variable to a service account credentials JSON file.');
        }
        return new idtokenclient_1.IdTokenClient({ targetAudience, idTokenProvider: client });
    }
    /**
     * Automatically obtain application default credentials, and return
     * an access token for making requests.
     */
    async getAccessToken() {
        const client = await this.getClient();
        return (await client.getAccessToken()).token;
    }
    /**
     * Obtain the HTTP headers that will provide authorization for a given
     * request.
     */
    async getRequestHeaders(url) {
        const client = await this.getClient();
        return client.getRequestHeaders(url);
    }
    /**
     * Obtain credentials for a request, then attach the appropriate headers to
     * the request options.
     * @param opts Axios or Request options on which to attach the headers
     */
    async authorizeRequest(opts) {
        opts = opts || {};
        const url = opts.url || opts.uri;
        const client = await this.getClient();
        const headers = await client.getRequestHeaders(url);
        opts.headers = Object.assign(opts.headers || {}, headers);
        return opts;
    }
    /**
     * Automatically obtain application default credentials, and make an
     * HTTP request using the given options.
     * @param opts Axios request options for the HTTP request.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async request(opts) {
        const client = await this.getClient();
        return client.request(opts);
    }
    /**
     * Determine the compute environment in which the code is running.
     */
    getEnv() {
        return (0, envDetect_1.getEnv)();
    }
    /**
     * Sign the given data with the current private key, or go out
     * to the IAM API to sign it.
     * @param data The data to be signed.
     */
    async sign(data) {
        const client = await this.getClient();
        const crypto = (0, crypto_1.createCrypto)();
        if (client instanceof jwtclient_1.JWT && client.key) {
            const sign = await crypto.sign(client.key, data);
            return sign;
        }
        const projectId = await this.getProjectId();
        if (!projectId) {
            throw new Error('Cannot sign data without a project ID.');
        }
        const creds = await this.getCredentials();
        if (!creds.client_email) {
            throw new Error('Cannot sign data without `client_email`.');
        }
        return this.signBlob(crypto, creds.client_email, data);
    }
    async signBlob(crypto, emailOrUniqueId, data) {
        const url = 'https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/' +
            `${emailOrUniqueId}:signBlob`;
        const res = await this.request({
            method: 'POST',
            url,
            data: {
                payload: crypto.encodeBase64StringUtf8(data),
            },
        });
        return res.data.signedBlob;
    }
}
exports.GoogleAuth = GoogleAuth;
/**
 * Export DefaultTransporter as a static property of the class.
 */
GoogleAuth.DefaultTransporter = transporters_1.DefaultTransporter;
//# sourceMappingURL=googleauth.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/iam.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright 2014 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IAMAuth = void 0;
class IAMAuth {
    /**
     * IAM credentials.
     *
     * @param selector the iam authority selector
     * @param token the token
     * @constructor
     */
    constructor(selector, token) {
        this.selector = selector;
        this.token = token;
        this.selector = selector;
        this.token = token;
    }
    /**
     * Acquire the HTTP headers required to make an authenticated request.
     */
    getRequestHeaders() {
        return {
            'x-goog-iam-authority-selector': this.selector,
            'x-goog-iam-authorization-token': this.token,
        };
    }
}
exports.IAMAuth = IAMAuth;
//# sourceMappingURL=iam.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/identitypoolclient.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IdentityPoolClient = void 0;
const fs = __webpack_require__("fs");
const util_1 = __webpack_require__("util");
const baseexternalclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/baseexternalclient.js");
// fs.readfile is undefined in browser karma tests causing
// `npm run browser-test` to fail as test.oauth2.ts imports this file via
// src/index.ts.
// Fallback to void function to avoid promisify throwing a TypeError.
const readFile = (0, util_1.promisify)((_a = fs.readFile) !== null && _a !== void 0 ? _a : (() => { }));
const realpath = (0, util_1.promisify)((_b = fs.realpath) !== null && _b !== void 0 ? _b : (() => { }));
const lstat = (0, util_1.promisify)((_c = fs.lstat) !== null && _c !== void 0 ? _c : (() => { }));
/**
 * Defines the Url-sourced and file-sourced external account clients mainly
 * used for K8s and Azure workloads.
 */
class IdentityPoolClient extends baseexternalclient_1.BaseExternalAccountClient {
    /**
     * Instantiate an IdentityPoolClient instance using the provided JSON
     * object loaded from an external account credentials file.
     * An error is thrown if the credential is not a valid file-sourced or
     * url-sourced credential or a workforce pool user project is provided
     * with a non workforce audience.
     * @param options The external account options object typically loaded
     *   from the external account JSON credential file.
     * @param additionalOptions Optional additional behavior customization
     *   options. These currently customize expiration threshold time and
     *   whether to retry on 401/403 API request errors.
     */
    constructor(options, additionalOptions) {
        var _a, _b;
        super(options, additionalOptions);
        this.file = options.credential_source.file;
        this.url = options.credential_source.url;
        this.headers = options.credential_source.headers;
        if (!this.file && !this.url) {
            throw new Error('No valid Identity Pool "credential_source" provided');
        }
        // Text is the default format type.
        this.formatType = ((_a = options.credential_source.format) === null || _a === void 0 ? void 0 : _a.type) || 'text';
        this.formatSubjectTokenFieldName =
            (_b = options.credential_source.format) === null || _b === void 0 ? void 0 : _b.subject_token_field_name;
        if (this.formatType !== 'json' && this.formatType !== 'text') {
            throw new Error(`Invalid credential_source format "${this.formatType}"`);
        }
        if (this.formatType === 'json' && !this.formatSubjectTokenFieldName) {
            throw new Error('Missing subject_token_field_name for JSON credential_source format');
        }
    }
    /**
     * Triggered when a external subject token is needed to be exchanged for a GCP
     * access token via GCP STS endpoint.
     * This uses the `options.credential_source` object to figure out how
     * to retrieve the token using the current environment. In this case,
     * this either retrieves the local credential from a file location (k8s
     * workload) or by sending a GET request to a local metadata server (Azure
     * workloads).
     * @return A promise that resolves with the external subject token.
     */
    async retrieveSubjectToken() {
        if (this.file) {
            return await this.getTokenFromFile(this.file, this.formatType, this.formatSubjectTokenFieldName);
        }
        return await this.getTokenFromUrl(this.url, this.formatType, this.formatSubjectTokenFieldName, this.headers);
    }
    /**
     * Looks up the external subject token in the file path provided and
     * resolves with that token.
     * @param file The file path where the external credential is located.
     * @param formatType The token file or URL response type (JSON or text).
     * @param formatSubjectTokenFieldName For JSON response types, this is the
     *   subject_token field name. For Azure, this is access_token. For text
     *   response types, this is ignored.
     * @return A promise that resolves with the external subject token.
     */
    async getTokenFromFile(filePath, formatType, formatSubjectTokenFieldName) {
        // Make sure there is a file at the path. lstatSync will throw if there is
        // nothing there.
        try {
            // Resolve path to actual file in case of symlink. Expect a thrown error
            // if not resolvable.
            filePath = await realpath(filePath);
            if (!(await lstat(filePath)).isFile()) {
                throw new Error();
            }
        }
        catch (err) {
            if (err instanceof Error) {
                err.message = `The file at ${filePath} does not exist, or it is not a file. ${err.message}`;
            }
            throw err;
        }
        let subjectToken;
        const rawText = await readFile(filePath, { encoding: 'utf8' });
        if (formatType === 'text') {
            subjectToken = rawText;
        }
        else if (formatType === 'json' && formatSubjectTokenFieldName) {
            const json = JSON.parse(rawText);
            subjectToken = json[formatSubjectTokenFieldName];
        }
        if (!subjectToken) {
            throw new Error('Unable to parse the subject_token from the credential_source file');
        }
        return subjectToken;
    }
    /**
     * Sends a GET request to the URL provided and resolves with the returned
     * external subject token.
     * @param url The URL to call to retrieve the subject token. This is typically
     *   a local metadata server.
     * @param formatType The token file or URL response type (JSON or text).
     * @param formatSubjectTokenFieldName For JSON response types, this is the
     *   subject_token field name. For Azure, this is access_token. For text
     *   response types, this is ignored.
     * @param headers The optional additional headers to send with the request to
     *   the metadata server url.
     * @return A promise that resolves with the external subject token.
     */
    async getTokenFromUrl(url, formatType, formatSubjectTokenFieldName, headers) {
        const opts = {
            url,
            method: 'GET',
            headers,
            responseType: formatType,
        };
        let subjectToken;
        if (formatType === 'text') {
            const response = await this.transporter.request(opts);
            subjectToken = response.data;
        }
        else if (formatType === 'json' && formatSubjectTokenFieldName) {
            const response = await this.transporter.request(opts);
            subjectToken = response.data[formatSubjectTokenFieldName];
        }
        if (!subjectToken) {
            throw new Error('Unable to parse the subject_token from the credential_source URL');
        }
        return subjectToken;
    }
}
exports.IdentityPoolClient = IdentityPoolClient;
//# sourceMappingURL=identitypoolclient.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/idtokenclient.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IdTokenClient = void 0;
const oauth2client_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/oauth2client.js");
class IdTokenClient extends oauth2client_1.OAuth2Client {
    /**
     * Google ID Token client
     *
     * Retrieve access token from the metadata server.
     * See: https://developers.google.com/compute/docs/authentication
     */
    constructor(options) {
        super();
        this.targetAudience = options.targetAudience;
        this.idTokenProvider = options.idTokenProvider;
    }
    async getRequestMetadataAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    url) {
        if (!this.credentials.id_token ||
            (this.credentials.expiry_date || 0) < Date.now()) {
            const idToken = await this.idTokenProvider.fetchIdToken(this.targetAudience);
            this.credentials = {
                id_token: idToken,
                expiry_date: this.getIdTokenExpiryDate(idToken),
            };
        }
        const headers = {
            Authorization: 'Bearer ' + this.credentials.id_token,
        };
        return { headers };
    }
    getIdTokenExpiryDate(idToken) {
        const payloadB64 = idToken.split('.')[1];
        if (payloadB64) {
            const payload = JSON.parse(Buffer.from(payloadB64, 'base64').toString('ascii'));
            return payload.exp * 1000;
        }
    }
}
exports.IdTokenClient = IdTokenClient;
//# sourceMappingURL=idtokenclient.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/impersonated.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Impersonated = void 0;
const oauth2client_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/oauth2client.js");
const gaxios_1 = __webpack_require__("./node_modules/gaxios/build/src/index.js");
class Impersonated extends oauth2client_1.OAuth2Client {
    /**
     * Impersonated service account credentials.
     *
     * Create a new access token by impersonating another service account.
     *
     * Impersonated Credentials allowing credentials issued to a user or
     * service account to impersonate another. The source project using
     * Impersonated Credentials must enable the "IAMCredentials" API.
     * Also, the target service account must grant the orginating principal
     * the "Service Account Token Creator" IAM role.
     *
     * @param {object} options - The configuration object.
     * @param {object} [options.sourceClient] the source credential used as to
     * acquire the impersonated credentials.
     * @param {string} [options.targetPrincipal] the service account to
     * impersonate.
     * @param {string[]} [options.delegates] the chained list of delegates
     * required to grant the final access_token. If set, the sequence of
     * identities must have "Service Account Token Creator" capability granted to
     * the preceding identity. For example, if set to [serviceAccountB,
     * serviceAccountC], the sourceCredential must have the Token Creator role on
     * serviceAccountB. serviceAccountB must have the Token Creator on
     * serviceAccountC. Finally, C must have Token Creator on target_principal.
     * If left unset, sourceCredential must have that role on targetPrincipal.
     * @param {string[]} [options.targetScopes] scopes to request during the
     * authorization grant.
     * @param {number} [options.lifetime] number of seconds the delegated
     * credential should be valid for up to 3600 seconds by default, or 43,200
     * seconds by extending the token's lifetime, see:
     * https://cloud.google.com/iam/docs/creating-short-lived-service-account-credentials#sa-credentials-oauth
     * @param {string} [options.endpoint] api endpoint override.
     */
    constructor(options = {}) {
        var _a, _b, _c, _d, _e, _f;
        super(options);
        this.credentials = {
            expiry_date: 1,
            refresh_token: 'impersonated-placeholder',
        };
        this.sourceClient = (_a = options.sourceClient) !== null && _a !== void 0 ? _a : new oauth2client_1.OAuth2Client();
        this.targetPrincipal = (_b = options.targetPrincipal) !== null && _b !== void 0 ? _b : '';
        this.delegates = (_c = options.delegates) !== null && _c !== void 0 ? _c : [];
        this.targetScopes = (_d = options.targetScopes) !== null && _d !== void 0 ? _d : [];
        this.lifetime = (_e = options.lifetime) !== null && _e !== void 0 ? _e : 3600;
        this.endpoint = (_f = options.endpoint) !== null && _f !== void 0 ? _f : 'https://iamcredentials.googleapis.com';
    }
    /**
     * Refreshes the access token.
     * @param refreshToken Unused parameter
     */
    async refreshToken(refreshToken) {
        var _a, _b, _c, _d, _e, _f;
        try {
            await this.sourceClient.getAccessToken();
            const name = 'projects/-/serviceAccounts/' + this.targetPrincipal;
            const u = `${this.endpoint}/v1/${name}:generateAccessToken`;
            const body = {
                delegates: this.delegates,
                scope: this.targetScopes,
                lifetime: this.lifetime + 's',
            };
            const res = await this.sourceClient.request({
                url: u,
                data: body,
                method: 'POST',
            });
            const tokenResponse = res.data;
            this.credentials.access_token = tokenResponse.accessToken;
            this.credentials.expiry_date = Date.parse(tokenResponse.expireTime);
            return {
                tokens: this.credentials,
                res,
            };
        }
        catch (error) {
            if (!(error instanceof Error))
                throw error;
            let status = 0;
            let message = '';
            if (error instanceof gaxios_1.GaxiosError) {
                status = (_c = (_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) === null || _c === void 0 ? void 0 : _c.status;
                message = (_f = (_e = (_d = error === null || error === void 0 ? void 0 : error.response) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.error) === null || _f === void 0 ? void 0 : _f.message;
            }
            if (status && message) {
                error.message = `${status}: unable to impersonate: ${message}`;
                throw error;
            }
            else {
                error.message = `unable to impersonate: ${error}`;
                throw error;
            }
        }
    }
}
exports.Impersonated = Impersonated;
//# sourceMappingURL=impersonated.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/jwtaccess.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2015 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JWTAccess = void 0;
const jws = __webpack_require__("jws");
const LRU = __webpack_require__("lru-cache");
const DEFAULT_HEADER = {
    alg: 'RS256',
    typ: 'JWT',
};
class JWTAccess {
    /**
     * JWTAccess service account credentials.
     *
     * Create a new access token by using the credential to create a new JWT token
     * that's recognized as the access token.
     *
     * @param email the service account email address.
     * @param key the private key that will be used to sign the token.
     * @param keyId the ID of the private key used to sign the token.
     */
    constructor(email, key, keyId, eagerRefreshThresholdMillis) {
        this.cache = new LRU({
            max: 500,
            maxAge: 60 * 60 * 1000,
        });
        this.email = email;
        this.key = key;
        this.keyId = keyId;
        this.eagerRefreshThresholdMillis =
            eagerRefreshThresholdMillis !== null && eagerRefreshThresholdMillis !== void 0 ? eagerRefreshThresholdMillis : 5 * 60 * 1000;
    }
    /**
     * Ensures that we're caching a key appropriately, giving precedence to scopes vs. url
     *
     * @param url The URI being authorized.
     * @param scopes The scope or scopes being authorized
     * @returns A string that returns the cached key.
     */
    getCachedKey(url, scopes) {
        let cacheKey = url;
        if (scopes && Array.isArray(scopes) && scopes.length) {
            cacheKey = url ? `${url}_${scopes.join('_')}` : `${scopes.join('_')}`;
        }
        else if (typeof scopes === 'string') {
            cacheKey = url ? `${url}_${scopes}` : scopes;
        }
        if (!cacheKey) {
            throw Error('Scopes or url must be provided');
        }
        return cacheKey;
    }
    /**
     * Get a non-expired access token, after refreshing if necessary.
     *
     * @param url The URI being authorized.
     * @param additionalClaims An object with a set of additional claims to
     * include in the payload.
     * @returns An object that includes the authorization header.
     */
    getRequestHeaders(url, additionalClaims, scopes) {
        // Return cached authorization headers, unless we are within
        // eagerRefreshThresholdMillis ms of them expiring:
        const key = this.getCachedKey(url, scopes);
        const cachedToken = this.cache.get(key);
        const now = Date.now();
        if (cachedToken &&
            cachedToken.expiration - now > this.eagerRefreshThresholdMillis) {
            return cachedToken.headers;
        }
        const iat = Math.floor(Date.now() / 1000);
        const exp = JWTAccess.getExpirationTime(iat);
        let defaultClaims;
        // Turn scopes into space-separated string
        if (Array.isArray(scopes)) {
            scopes = scopes.join(' ');
        }
        // If scopes are specified, sign with scopes
        if (scopes) {
            defaultClaims = {
                iss: this.email,
                sub: this.email,
                scope: scopes,
                exp,
                iat,
            };
        }
        else {
            defaultClaims = {
                iss: this.email,
                sub: this.email,
                aud: url,
                exp,
                iat,
            };
        }
        // if additionalClaims are provided, ensure they do not collide with
        // other required claims.
        if (additionalClaims) {
            for (const claim in defaultClaims) {
                if (additionalClaims[claim]) {
                    throw new Error(`The '${claim}' property is not allowed when passing additionalClaims. This claim is included in the JWT by default.`);
                }
            }
        }
        const header = this.keyId
            ? { ...DEFAULT_HEADER, kid: this.keyId }
            : DEFAULT_HEADER;
        const payload = Object.assign(defaultClaims, additionalClaims);
        // Sign the jwt and add it to the cache
        const signedJWT = jws.sign({ header, payload, secret: this.key });
        const headers = { Authorization: `Bearer ${signedJWT}` };
        this.cache.set(key, {
            expiration: exp * 1000,
            headers,
        });
        return headers;
    }
    /**
     * Returns an expiration time for the JWT token.
     *
     * @param iat The issued at time for the JWT.
     * @returns An expiration time for the JWT.
     */
    static getExpirationTime(iat) {
        const exp = iat + 3600; // 3600 seconds = 1 hour
        return exp;
    }
    /**
     * Create a JWTAccess credentials instance using the given input options.
     * @param json The input object.
     */
    fromJSON(json) {
        if (!json) {
            throw new Error('Must pass in a JSON object containing the service account auth settings.');
        }
        if (!json.client_email) {
            throw new Error('The incoming JSON object does not contain a client_email field');
        }
        if (!json.private_key) {
            throw new Error('The incoming JSON object does not contain a private_key field');
        }
        // Extract the relevant information from the json key file.
        this.email = json.client_email;
        this.key = json.private_key;
        this.keyId = json.private_key_id;
        this.projectId = json.project_id;
    }
    fromStream(inputStream, callback) {
        if (callback) {
            this.fromStreamAsync(inputStream).then(() => callback(), callback);
        }
        else {
            return this.fromStreamAsync(inputStream);
        }
    }
    fromStreamAsync(inputStream) {
        return new Promise((resolve, reject) => {
            if (!inputStream) {
                reject(new Error('Must pass in a stream containing the service account auth settings.'));
            }
            let s = '';
            inputStream
                .setEncoding('utf8')
                .on('data', chunk => (s += chunk))
                .on('error', reject)
                .on('end', () => {
                try {
                    const data = JSON.parse(s);
                    this.fromJSON(data);
                    resolve();
                }
                catch (err) {
                    reject(err);
                }
            });
        });
    }
}
exports.JWTAccess = JWTAccess;
//# sourceMappingURL=jwtaccess.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/jwtclient.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2013 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JWT = void 0;
const gtoken_1 = __webpack_require__("./node_modules/gtoken/build/src/index.js");
const jwtaccess_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/jwtaccess.js");
const oauth2client_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/oauth2client.js");
class JWT extends oauth2client_1.OAuth2Client {
    constructor(optionsOrEmail, keyFile, key, scopes, subject, keyId) {
        const opts = optionsOrEmail && typeof optionsOrEmail === 'object'
            ? optionsOrEmail
            : { email: optionsOrEmail, keyFile, key, keyId, scopes, subject };
        super({
            eagerRefreshThresholdMillis: opts.eagerRefreshThresholdMillis,
            forceRefreshOnFailure: opts.forceRefreshOnFailure,
        });
        this.email = opts.email;
        this.keyFile = opts.keyFile;
        this.key = opts.key;
        this.keyId = opts.keyId;
        this.scopes = opts.scopes;
        this.subject = opts.subject;
        this.additionalClaims = opts.additionalClaims;
        this.credentials = { refresh_token: 'jwt-placeholder', expiry_date: 1 };
    }
    /**
     * Creates a copy of the credential with the specified scopes.
     * @param scopes List of requested scopes or a single scope.
     * @return The cloned instance.
     */
    createScoped(scopes) {
        return new JWT({
            email: this.email,
            keyFile: this.keyFile,
            key: this.key,
            keyId: this.keyId,
            scopes,
            subject: this.subject,
            additionalClaims: this.additionalClaims,
        });
    }
    /**
     * Obtains the metadata to be sent with the request.
     *
     * @param url the URI being authorized.
     */
    async getRequestMetadataAsync(url) {
        url = this.defaultServicePath ? `https://${this.defaultServicePath}/` : url;
        const useSelfSignedJWT = (!this.hasUserScopes() && url) ||
            (this.useJWTAccessWithScope && this.hasAnyScopes());
        if (!this.apiKey && useSelfSignedJWT) {
            if (this.additionalClaims &&
                this.additionalClaims.target_audience) {
                const { tokens } = await this.refreshToken();
                return {
                    headers: this.addSharedMetadataHeaders({
                        Authorization: `Bearer ${tokens.id_token}`,
                    }),
                };
            }
            else {
                // no scopes have been set, but a uri has been provided. Use JWTAccess
                // credentials.
                if (!this.access) {
                    this.access = new jwtaccess_1.JWTAccess(this.email, this.key, this.keyId, this.eagerRefreshThresholdMillis);
                }
                let scopes;
                if (this.hasUserScopes()) {
                    scopes = this.scopes;
                }
                else if (!url) {
                    scopes = this.defaultScopes;
                }
                const headers = await this.access.getRequestHeaders(url !== null && url !== void 0 ? url : undefined, this.additionalClaims, 
                // Scopes take precedent over audience for signing,
                // so we only provide them if useJWTAccessWithScope is on
                this.useJWTAccessWithScope ? scopes : undefined);
                return { headers: this.addSharedMetadataHeaders(headers) };
            }
        }
        else if (this.hasAnyScopes() || this.apiKey) {
            return super.getRequestMetadataAsync(url);
        }
        else {
            // If no audience, apiKey, or scopes are provided, we should not attempt
            // to populate any headers:
            return { headers: {} };
        }
    }
    /**
     * Fetches an ID token.
     * @param targetAudience the audience for the fetched ID token.
     */
    async fetchIdToken(targetAudience) {
        // Create a new gToken for fetching an ID token
        const gtoken = new gtoken_1.GoogleToken({
            iss: this.email,
            sub: this.subject,
            scope: this.scopes || this.defaultScopes,
            keyFile: this.keyFile,
            key: this.key,
            additionalClaims: { target_audience: targetAudience },
        });
        await gtoken.getToken({
            forceRefresh: true,
        });
        if (!gtoken.idToken) {
            throw new Error('Unknown error: Failed to fetch ID token');
        }
        return gtoken.idToken;
    }
    /**
     * Determine if there are currently scopes available.
     */
    hasUserScopes() {
        if (!this.scopes) {
            return false;
        }
        return this.scopes.length > 0;
    }
    /**
     * Are there any default or user scopes defined.
     */
    hasAnyScopes() {
        if (this.scopes && this.scopes.length > 0)
            return true;
        if (this.defaultScopes && this.defaultScopes.length > 0)
            return true;
        return false;
    }
    authorize(callback) {
        if (callback) {
            this.authorizeAsync().then(r => callback(null, r), callback);
        }
        else {
            return this.authorizeAsync();
        }
    }
    async authorizeAsync() {
        const result = await this.refreshToken();
        if (!result) {
            throw new Error('No result returned');
        }
        this.credentials = result.tokens;
        this.credentials.refresh_token = 'jwt-placeholder';
        this.key = this.gtoken.key;
        this.email = this.gtoken.iss;
        return result.tokens;
    }
    /**
     * Refreshes the access token.
     * @param refreshToken ignored
     * @private
     */
    async refreshTokenNoCache(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    refreshToken) {
        const gtoken = this.createGToken();
        const token = await gtoken.getToken({
            forceRefresh: this.isTokenExpiring(),
        });
        const tokens = {
            access_token: token.access_token,
            token_type: 'Bearer',
            expiry_date: gtoken.expiresAt,
            id_token: gtoken.idToken,
        };
        this.emit('tokens', tokens);
        return { res: null, tokens };
    }
    /**
     * Create a gToken if it doesn't already exist.
     */
    createGToken() {
        if (!this.gtoken) {
            this.gtoken = new gtoken_1.GoogleToken({
                iss: this.email,
                sub: this.subject,
                scope: this.scopes || this.defaultScopes,
                keyFile: this.keyFile,
                key: this.key,
                additionalClaims: this.additionalClaims,
            });
        }
        return this.gtoken;
    }
    /**
     * Create a JWT credentials instance using the given input options.
     * @param json The input object.
     */
    fromJSON(json) {
        if (!json) {
            throw new Error('Must pass in a JSON object containing the service account auth settings.');
        }
        if (!json.client_email) {
            throw new Error('The incoming JSON object does not contain a client_email field');
        }
        if (!json.private_key) {
            throw new Error('The incoming JSON object does not contain a private_key field');
        }
        // Extract the relevant information from the json key file.
        this.email = json.client_email;
        this.key = json.private_key;
        this.keyId = json.private_key_id;
        this.projectId = json.project_id;
        this.quotaProjectId = json.quota_project_id;
    }
    fromStream(inputStream, callback) {
        if (callback) {
            this.fromStreamAsync(inputStream).then(() => callback(), callback);
        }
        else {
            return this.fromStreamAsync(inputStream);
        }
    }
    fromStreamAsync(inputStream) {
        return new Promise((resolve, reject) => {
            if (!inputStream) {
                throw new Error('Must pass in a stream containing the service account auth settings.');
            }
            let s = '';
            inputStream
                .setEncoding('utf8')
                .on('error', reject)
                .on('data', chunk => (s += chunk))
                .on('end', () => {
                try {
                    const data = JSON.parse(s);
                    this.fromJSON(data);
                    resolve();
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
    /**
     * Creates a JWT credentials instance using an API Key for authentication.
     * @param apiKey The API Key in string form.
     */
    fromAPIKey(apiKey) {
        if (typeof apiKey !== 'string') {
            throw new Error('Must provide an API Key string.');
        }
        this.apiKey = apiKey;
    }
    /**
     * Using the key or keyFile on the JWT client, obtain an object that contains
     * the key and the client email.
     */
    async getCredentials() {
        if (this.key) {
            return { private_key: this.key, client_email: this.email };
        }
        else if (this.keyFile) {
            const gtoken = this.createGToken();
            const creds = await gtoken.getCredentials(this.keyFile);
            return { private_key: creds.privateKey, client_email: creds.clientEmail };
        }
        throw new Error('A key or a keyFile must be provided to getCredentials.');
    }
}
exports.JWT = JWT;
//# sourceMappingURL=jwtclient.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/loginticket.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright 2014 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginTicket = void 0;
class LoginTicket {
    /**
     * Create a simple class to extract user ID from an ID Token
     *
     * @param {string} env Envelope of the jwt
     * @param {TokenPayload} pay Payload of the jwt
     * @constructor
     */
    constructor(env, pay) {
        this.envelope = env;
        this.payload = pay;
    }
    getEnvelope() {
        return this.envelope;
    }
    getPayload() {
        return this.payload;
    }
    /**
     * Create a simple class to extract user ID from an ID Token
     *
     * @return The user ID
     */
    getUserId() {
        const payload = this.getPayload();
        if (payload && payload.sub) {
            return payload.sub;
        }
        return null;
    }
    /**
     * Returns attributes from the login ticket.  This can contain
     * various information about the user session.
     *
     * @return The envelope and payload
     */
    getAttributes() {
        return { envelope: this.getEnvelope(), payload: this.getPayload() };
    }
}
exports.LoginTicket = LoginTicket;
//# sourceMappingURL=loginticket.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/oauth2client.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OAuth2Client = exports.CertificateFormat = exports.CodeChallengeMethod = void 0;
const querystring = __webpack_require__("querystring");
const stream = __webpack_require__("stream");
const formatEcdsa = __webpack_require__("ecdsa-sig-formatter");
const crypto_1 = __webpack_require__("./node_modules/google-auth-library/build/src/crypto/crypto.js");
const authclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/authclient.js");
const loginticket_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/loginticket.js");
var CodeChallengeMethod;
(function (CodeChallengeMethod) {
    CodeChallengeMethod["Plain"] = "plain";
    CodeChallengeMethod["S256"] = "S256";
})(CodeChallengeMethod = exports.CodeChallengeMethod || (exports.CodeChallengeMethod = {}));
var CertificateFormat;
(function (CertificateFormat) {
    CertificateFormat["PEM"] = "PEM";
    CertificateFormat["JWK"] = "JWK";
})(CertificateFormat = exports.CertificateFormat || (exports.CertificateFormat = {}));
class OAuth2Client extends authclient_1.AuthClient {
    constructor(optionsOrClientId, clientSecret, redirectUri) {
        super();
        this.certificateCache = {};
        this.certificateExpiry = null;
        this.certificateCacheFormat = CertificateFormat.PEM;
        this.refreshTokenPromises = new Map();
        const opts = optionsOrClientId && typeof optionsOrClientId === 'object'
            ? optionsOrClientId
            : { clientId: optionsOrClientId, clientSecret, redirectUri };
        this._clientId = opts.clientId;
        this._clientSecret = opts.clientSecret;
        this.redirectUri = opts.redirectUri;
        this.eagerRefreshThresholdMillis =
            opts.eagerRefreshThresholdMillis || 5 * 60 * 1000;
        this.forceRefreshOnFailure = !!opts.forceRefreshOnFailure;
    }
    /**
     * Generates URL for consent page landing.
     * @param opts Options.
     * @return URL to consent page.
     */
    generateAuthUrl(opts = {}) {
        if (opts.code_challenge_method && !opts.code_challenge) {
            throw new Error('If a code_challenge_method is provided, code_challenge must be included.');
        }
        opts.response_type = opts.response_type || 'code';
        opts.client_id = opts.client_id || this._clientId;
        opts.redirect_uri = opts.redirect_uri || this.redirectUri;
        // Allow scopes to be passed either as array or a string
        if (opts.scope instanceof Array) {
            opts.scope = opts.scope.join(' ');
        }
        const rootUrl = OAuth2Client.GOOGLE_OAUTH2_AUTH_BASE_URL_;
        return (rootUrl +
            '?' +
            querystring.stringify(opts));
    }
    generateCodeVerifier() {
        // To make the code compatible with browser SubtleCrypto we need to make
        // this method async.
        throw new Error('generateCodeVerifier is removed, please use generateCodeVerifierAsync instead.');
    }
    /**
     * Convenience method to automatically generate a code_verifier, and its
     * resulting SHA256. If used, this must be paired with a S256
     * code_challenge_method.
     *
     * For a full example see:
     * https://github.com/googleapis/google-auth-library-nodejs/blob/main/samples/oauth2-codeVerifier.js
     */
    async generateCodeVerifierAsync() {
        // base64 encoding uses 6 bits per character, and we want to generate128
        // characters. 6*128/8 = 96.
        const crypto = (0, crypto_1.createCrypto)();
        const randomString = crypto.randomBytesBase64(96);
        // The valid characters in the code_verifier are [A-Z]/[a-z]/[0-9]/
        // "-"/"."/"_"/"~". Base64 encoded strings are pretty close, so we're just
        // swapping out a few chars.
        const codeVerifier = randomString
            .replace(/\+/g, '~')
            .replace(/=/g, '_')
            .replace(/\//g, '-');
        // Generate the base64 encoded SHA256
        const unencodedCodeChallenge = await crypto.sha256DigestBase64(codeVerifier);
        // We need to use base64UrlEncoding instead of standard base64
        const codeChallenge = unencodedCodeChallenge
            .split('=')[0]
            .replace(/\+/g, '-')
            .replace(/\//g, '_');
        return { codeVerifier, codeChallenge };
    }
    getToken(codeOrOptions, callback) {
        const options = typeof codeOrOptions === 'string' ? { code: codeOrOptions } : codeOrOptions;
        if (callback) {
            this.getTokenAsync(options).then(r => callback(null, r.tokens, r.res), e => callback(e, null, e.response));
        }
        else {
            return this.getTokenAsync(options);
        }
    }
    async getTokenAsync(options) {
        const url = OAuth2Client.GOOGLE_OAUTH2_TOKEN_URL_;
        const values = {
            code: options.code,
            client_id: options.client_id || this._clientId,
            client_secret: this._clientSecret,
            redirect_uri: options.redirect_uri || this.redirectUri,
            grant_type: 'authorization_code',
            code_verifier: options.codeVerifier,
        };
        const res = await this.transporter.request({
            method: 'POST',
            url,
            data: querystring.stringify(values),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        const tokens = res.data;
        if (res.data && res.data.expires_in) {
            tokens.expiry_date = new Date().getTime() + res.data.expires_in * 1000;
            delete tokens.expires_in;
        }
        this.emit('tokens', tokens);
        return { tokens, res };
    }
    /**
     * Refreshes the access token.
     * @param refresh_token Existing refresh token.
     * @private
     */
    async refreshToken(refreshToken) {
        if (!refreshToken) {
            return this.refreshTokenNoCache(refreshToken);
        }
        // If a request to refresh using the same token has started,
        // return the same promise.
        if (this.refreshTokenPromises.has(refreshToken)) {
            return this.refreshTokenPromises.get(refreshToken);
        }
        const p = this.refreshTokenNoCache(refreshToken).then(r => {
            this.refreshTokenPromises.delete(refreshToken);
            return r;
        }, e => {
            this.refreshTokenPromises.delete(refreshToken);
            throw e;
        });
        this.refreshTokenPromises.set(refreshToken, p);
        return p;
    }
    async refreshTokenNoCache(refreshToken) {
        if (!refreshToken) {
            throw new Error('No refresh token is set.');
        }
        const url = OAuth2Client.GOOGLE_OAUTH2_TOKEN_URL_;
        const data = {
            refresh_token: refreshToken,
            client_id: this._clientId,
            client_secret: this._clientSecret,
            grant_type: 'refresh_token',
        };
        // request for new token
        const res = await this.transporter.request({
            method: 'POST',
            url,
            data: querystring.stringify(data),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        const tokens = res.data;
        // TODO: de-duplicate this code from a few spots
        if (res.data && res.data.expires_in) {
            tokens.expiry_date = new Date().getTime() + res.data.expires_in * 1000;
            delete tokens.expires_in;
        }
        this.emit('tokens', tokens);
        return { tokens, res };
    }
    refreshAccessToken(callback) {
        if (callback) {
            this.refreshAccessTokenAsync().then(r => callback(null, r.credentials, r.res), callback);
        }
        else {
            return this.refreshAccessTokenAsync();
        }
    }
    async refreshAccessTokenAsync() {
        const r = await this.refreshToken(this.credentials.refresh_token);
        const tokens = r.tokens;
        tokens.refresh_token = this.credentials.refresh_token;
        this.credentials = tokens;
        return { credentials: this.credentials, res: r.res };
    }
    getAccessToken(callback) {
        if (callback) {
            this.getAccessTokenAsync().then(r => callback(null, r.token, r.res), callback);
        }
        else {
            return this.getAccessTokenAsync();
        }
    }
    async getAccessTokenAsync() {
        const shouldRefresh = !this.credentials.access_token || this.isTokenExpiring();
        if (shouldRefresh) {
            if (!this.credentials.refresh_token) {
                if (this.refreshHandler) {
                    const refreshedAccessToken = await this.processAndValidateRefreshHandler();
                    if (refreshedAccessToken === null || refreshedAccessToken === void 0 ? void 0 : refreshedAccessToken.access_token) {
                        this.setCredentials(refreshedAccessToken);
                        return { token: this.credentials.access_token };
                    }
                }
                else {
                    throw new Error('No refresh token or refresh handler callback is set.');
                }
            }
            const r = await this.refreshAccessTokenAsync();
            if (!r.credentials || (r.credentials && !r.credentials.access_token)) {
                throw new Error('Could not refresh access token.');
            }
            return { token: r.credentials.access_token, res: r.res };
        }
        else {
            return { token: this.credentials.access_token };
        }
    }
    /**
     * The main authentication interface.  It takes an optional url which when
     * present is the endpoint being accessed, and returns a Promise which
     * resolves with authorization header fields.
     *
     * In OAuth2Client, the result has the form:
     * { Authorization: 'Bearer <access_token_value>' }
     * @param url The optional url being authorized
     */
    async getRequestHeaders(url) {
        const headers = (await this.getRequestMetadataAsync(url)).headers;
        return headers;
    }
    async getRequestMetadataAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    url) {
        const thisCreds = this.credentials;
        if (!thisCreds.access_token &&
            !thisCreds.refresh_token &&
            !this.apiKey &&
            !this.refreshHandler) {
            throw new Error('No access, refresh token, API key or refresh handler callback is set.');
        }
        if (thisCreds.access_token && !this.isTokenExpiring()) {
            thisCreds.token_type = thisCreds.token_type || 'Bearer';
            const headers = {
                Authorization: thisCreds.token_type + ' ' + thisCreds.access_token,
            };
            return { headers: this.addSharedMetadataHeaders(headers) };
        }
        // If refreshHandler exists, call processAndValidateRefreshHandler().
        if (this.refreshHandler) {
            const refreshedAccessToken = await this.processAndValidateRefreshHandler();
            if (refreshedAccessToken === null || refreshedAccessToken === void 0 ? void 0 : refreshedAccessToken.access_token) {
                this.setCredentials(refreshedAccessToken);
                const headers = {
                    Authorization: 'Bearer ' + this.credentials.access_token,
                };
                return { headers: this.addSharedMetadataHeaders(headers) };
            }
        }
        if (this.apiKey) {
            return { headers: { 'X-Goog-Api-Key': this.apiKey } };
        }
        let r = null;
        let tokens = null;
        try {
            r = await this.refreshToken(thisCreds.refresh_token);
            tokens = r.tokens;
        }
        catch (err) {
            const e = err;
            if (e.response &&
                (e.response.status === 403 || e.response.status === 404)) {
                e.message = `Could not refresh access token: ${e.message}`;
            }
            throw e;
        }
        const credentials = this.credentials;
        credentials.token_type = credentials.token_type || 'Bearer';
        tokens.refresh_token = credentials.refresh_token;
        this.credentials = tokens;
        const headers = {
            Authorization: credentials.token_type + ' ' + tokens.access_token,
        };
        return { headers: this.addSharedMetadataHeaders(headers), res: r.res };
    }
    /**
     * Generates an URL to revoke the given token.
     * @param token The existing token to be revoked.
     */
    static getRevokeTokenUrl(token) {
        const parameters = querystring.stringify({ token });
        return `${OAuth2Client.GOOGLE_OAUTH2_REVOKE_URL_}?${parameters}`;
    }
    revokeToken(token, callback) {
        const opts = {
            url: OAuth2Client.getRevokeTokenUrl(token),
            method: 'POST',
        };
        if (callback) {
            this.transporter
                .request(opts)
                .then(r => callback(null, r), callback);
        }
        else {
            return this.transporter.request(opts);
        }
    }
    revokeCredentials(callback) {
        if (callback) {
            this.revokeCredentialsAsync().then(res => callback(null, res), callback);
        }
        else {
            return this.revokeCredentialsAsync();
        }
    }
    async revokeCredentialsAsync() {
        const token = this.credentials.access_token;
        this.credentials = {};
        if (token) {
            return this.revokeToken(token);
        }
        else {
            throw new Error('No access token to revoke.');
        }
    }
    request(opts, callback) {
        if (callback) {
            this.requestAsync(opts).then(r => callback(null, r), e => {
                return callback(e, e.response);
            });
        }
        else {
            return this.requestAsync(opts);
        }
    }
    async requestAsync(opts, retry = false) {
        let r2;
        try {
            const r = await this.getRequestMetadataAsync(opts.url);
            opts.headers = opts.headers || {};
            if (r.headers && r.headers['x-goog-user-project']) {
                opts.headers['x-goog-user-project'] = r.headers['x-goog-user-project'];
            }
            if (r.headers && r.headers.Authorization) {
                opts.headers.Authorization = r.headers.Authorization;
            }
            if (this.apiKey) {
                opts.headers['X-Goog-Api-Key'] = this.apiKey;
            }
            r2 = await this.transporter.request(opts);
        }
        catch (e) {
            const res = e.response;
            if (res) {
                const statusCode = res.status;
                // Retry the request for metadata if the following criteria are true:
                // - We haven't already retried.  It only makes sense to retry once.
                // - The response was a 401 or a 403
                // - The request didn't send a readableStream
                // - An access_token and refresh_token were available, but either no
                //   expiry_date was available or the forceRefreshOnFailure flag is set.
                //   The absent expiry_date case can happen when developers stash the
                //   access_token and refresh_token for later use, but the access_token
                //   fails on the first try because it's expired. Some developers may
                //   choose to enable forceRefreshOnFailure to mitigate time-related
                //   errors.
                // Or the following criteria are true:
                // - We haven't already retried.  It only makes sense to retry once.
                // - The response was a 401 or a 403
                // - The request didn't send a readableStream
                // - No refresh_token was available
                // - An access_token and a refreshHandler callback were available, but
                //   either no expiry_date was available or the forceRefreshOnFailure
                //   flag is set. The access_token fails on the first try because it's
                //   expired. Some developers may choose to enable forceRefreshOnFailure
                //   to mitigate time-related errors.
                const mayRequireRefresh = this.credentials &&
                    this.credentials.access_token &&
                    this.credentials.refresh_token &&
                    (!this.credentials.expiry_date || this.forceRefreshOnFailure);
                const mayRequireRefreshWithNoRefreshToken = this.credentials &&
                    this.credentials.access_token &&
                    !this.credentials.refresh_token &&
                    (!this.credentials.expiry_date || this.forceRefreshOnFailure) &&
                    this.refreshHandler;
                const isReadableStream = res.config.data instanceof stream.Readable;
                const isAuthErr = statusCode === 401 || statusCode === 403;
                if (!retry && isAuthErr && !isReadableStream && mayRequireRefresh) {
                    await this.refreshAccessTokenAsync();
                    return this.requestAsync(opts, true);
                }
                else if (!retry &&
                    isAuthErr &&
                    !isReadableStream &&
                    mayRequireRefreshWithNoRefreshToken) {
                    const refreshedAccessToken = await this.processAndValidateRefreshHandler();
                    if (refreshedAccessToken === null || refreshedAccessToken === void 0 ? void 0 : refreshedAccessToken.access_token) {
                        this.setCredentials(refreshedAccessToken);
                    }
                    return this.requestAsync(opts, true);
                }
            }
            throw e;
        }
        return r2;
    }
    verifyIdToken(options, callback) {
        // This function used to accept two arguments instead of an options object.
        // Check the types to help users upgrade with less pain.
        // This check can be removed after a 2.0 release.
        if (callback && typeof callback !== 'function') {
            throw new Error('This method accepts an options object as the first parameter, which includes the idToken, audience, and maxExpiry.');
        }
        if (callback) {
            this.verifyIdTokenAsync(options).then(r => callback(null, r), callback);
        }
        else {
            return this.verifyIdTokenAsync(options);
        }
    }
    async verifyIdTokenAsync(options) {
        if (!options.idToken) {
            throw new Error('The verifyIdToken method requires an ID Token');
        }
        const response = await this.getFederatedSignonCertsAsync();
        const login = await this.verifySignedJwtWithCertsAsync(options.idToken, response.certs, options.audience, OAuth2Client.ISSUERS_, options.maxExpiry);
        return login;
    }
    /**
     * Obtains information about the provisioned access token.  Especially useful
     * if you want to check the scopes that were provisioned to a given token.
     *
     * @param accessToken Required.  The Access Token for which you want to get
     * user info.
     */
    async getTokenInfo(accessToken) {
        const { data } = await this.transporter.request({
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${accessToken}`,
            },
            url: OAuth2Client.GOOGLE_TOKEN_INFO_URL,
        });
        const info = Object.assign({
            expiry_date: new Date().getTime() + data.expires_in * 1000,
            scopes: data.scope.split(' '),
        }, data);
        delete info.expires_in;
        delete info.scope;
        return info;
    }
    getFederatedSignonCerts(callback) {
        if (callback) {
            this.getFederatedSignonCertsAsync().then(r => callback(null, r.certs, r.res), callback);
        }
        else {
            return this.getFederatedSignonCertsAsync();
        }
    }
    async getFederatedSignonCertsAsync() {
        const nowTime = new Date().getTime();
        const format = (0, crypto_1.hasBrowserCrypto)()
            ? CertificateFormat.JWK
            : CertificateFormat.PEM;
        if (this.certificateExpiry &&
            nowTime < this.certificateExpiry.getTime() &&
            this.certificateCacheFormat === format) {
            return { certs: this.certificateCache, format };
        }
        let res;
        let url;
        switch (format) {
            case CertificateFormat.PEM:
                url = OAuth2Client.GOOGLE_OAUTH2_FEDERATED_SIGNON_PEM_CERTS_URL_;
                break;
            case CertificateFormat.JWK:
                url = OAuth2Client.GOOGLE_OAUTH2_FEDERATED_SIGNON_JWK_CERTS_URL_;
                break;
            default:
                throw new Error(`Unsupported certificate format ${format}`);
        }
        try {
            res = await this.transporter.request({ url });
        }
        catch (e) {
            if (e instanceof Error) {
                e.message = `Failed to retrieve verification certificates: ${e.message}`;
            }
            throw e;
        }
        const cacheControl = res ? res.headers['cache-control'] : undefined;
        let cacheAge = -1;
        if (cacheControl) {
            const pattern = new RegExp('max-age=([0-9]*)');
            const regexResult = pattern.exec(cacheControl);
            if (regexResult && regexResult.length === 2) {
                // Cache results with max-age (in seconds)
                cacheAge = Number(regexResult[1]) * 1000; // milliseconds
            }
        }
        let certificates = {};
        switch (format) {
            case CertificateFormat.PEM:
                certificates = res.data;
                break;
            case CertificateFormat.JWK:
                for (const key of res.data.keys) {
                    certificates[key.kid] = key;
                }
                break;
            default:
                throw new Error(`Unsupported certificate format ${format}`);
        }
        const now = new Date();
        this.certificateExpiry =
            cacheAge === -1 ? null : new Date(now.getTime() + cacheAge);
        this.certificateCache = certificates;
        this.certificateCacheFormat = format;
        return { certs: certificates, format, res };
    }
    getIapPublicKeys(callback) {
        if (callback) {
            this.getIapPublicKeysAsync().then(r => callback(null, r.pubkeys, r.res), callback);
        }
        else {
            return this.getIapPublicKeysAsync();
        }
    }
    async getIapPublicKeysAsync() {
        let res;
        const url = OAuth2Client.GOOGLE_OAUTH2_IAP_PUBLIC_KEY_URL_;
        try {
            res = await this.transporter.request({ url });
        }
        catch (e) {
            if (e instanceof Error) {
                e.message = `Failed to retrieve verification certificates: ${e.message}`;
            }
            throw e;
        }
        return { pubkeys: res.data, res };
    }
    verifySignedJwtWithCerts() {
        // To make the code compatible with browser SubtleCrypto we need to make
        // this method async.
        throw new Error('verifySignedJwtWithCerts is removed, please use verifySignedJwtWithCertsAsync instead.');
    }
    /**
     * Verify the id token is signed with the correct certificate
     * and is from the correct audience.
     * @param jwt The jwt to verify (The ID Token in this case).
     * @param certs The array of certs to test the jwt against.
     * @param requiredAudience The audience to test the jwt against.
     * @param issuers The allowed issuers of the jwt (Optional).
     * @param maxExpiry The max expiry the certificate can be (Optional).
     * @return Returns a promise resolving to LoginTicket on verification.
     */
    async verifySignedJwtWithCertsAsync(jwt, certs, requiredAudience, issuers, maxExpiry) {
        const crypto = (0, crypto_1.createCrypto)();
        if (!maxExpiry) {
            maxExpiry = OAuth2Client.MAX_TOKEN_LIFETIME_SECS_;
        }
        const segments = jwt.split('.');
        if (segments.length !== 3) {
            throw new Error('Wrong number of segments in token: ' + jwt);
        }
        const signed = segments[0] + '.' + segments[1];
        let signature = segments[2];
        let envelope;
        let payload;
        try {
            envelope = JSON.parse(crypto.decodeBase64StringUtf8(segments[0]));
        }
        catch (err) {
            if (err instanceof Error) {
                err.message = `Can't parse token envelope: ${segments[0]}': ${err.message}`;
            }
            throw err;
        }
        if (!envelope) {
            throw new Error("Can't parse token envelope: " + segments[0]);
        }
        try {
            payload = JSON.parse(crypto.decodeBase64StringUtf8(segments[1]));
        }
        catch (err) {
            if (err instanceof Error) {
                err.message = `Can't parse token payload '${segments[0]}`;
            }
            throw err;
        }
        if (!payload) {
            throw new Error("Can't parse token payload: " + segments[1]);
        }
        if (!Object.prototype.hasOwnProperty.call(certs, envelope.kid)) {
            // If this is not present, then there's no reason to attempt verification
            throw new Error('No pem found for envelope: ' + JSON.stringify(envelope));
        }
        const cert = certs[envelope.kid];
        if (envelope.alg === 'ES256') {
            signature = formatEcdsa.joseToDer(signature, 'ES256').toString('base64');
        }
        const verified = await crypto.verify(cert, signed, signature);
        if (!verified) {
            throw new Error('Invalid token signature: ' + jwt);
        }
        if (!payload.iat) {
            throw new Error('No issue time in token: ' + JSON.stringify(payload));
        }
        if (!payload.exp) {
            throw new Error('No expiration time in token: ' + JSON.stringify(payload));
        }
        const iat = Number(payload.iat);
        if (isNaN(iat))
            throw new Error('iat field using invalid format');
        const exp = Number(payload.exp);
        if (isNaN(exp))
            throw new Error('exp field using invalid format');
        const now = new Date().getTime() / 1000;
        if (exp >= now + maxExpiry) {
            throw new Error('Expiration time too far in future: ' + JSON.stringify(payload));
        }
        const earliest = iat - OAuth2Client.CLOCK_SKEW_SECS_;
        const latest = exp + OAuth2Client.CLOCK_SKEW_SECS_;
        if (now < earliest) {
            throw new Error('Token used too early, ' +
                now +
                ' < ' +
                earliest +
                ': ' +
                JSON.stringify(payload));
        }
        if (now > latest) {
            throw new Error('Token used too late, ' +
                now +
                ' > ' +
                latest +
                ': ' +
                JSON.stringify(payload));
        }
        if (issuers && issuers.indexOf(payload.iss) < 0) {
            throw new Error('Invalid issuer, expected one of [' +
                issuers +
                '], but got ' +
                payload.iss);
        }
        // Check the audience matches if we have one
        if (typeof requiredAudience !== 'undefined' && requiredAudience !== null) {
            const aud = payload.aud;
            let audVerified = false;
            // If the requiredAudience is an array, check if it contains token
            // audience
            if (requiredAudience.constructor === Array) {
                audVerified = requiredAudience.indexOf(aud) > -1;
            }
            else {
                audVerified = aud === requiredAudience;
            }
            if (!audVerified) {
                throw new Error('Wrong recipient, payload audience != requiredAudience');
            }
        }
        return new loginticket_1.LoginTicket(envelope, payload);
    }
    /**
     * Returns a promise that resolves with AccessTokenResponse type if
     * refreshHandler is defined.
     * If not, nothing is returned.
     */
    async processAndValidateRefreshHandler() {
        if (this.refreshHandler) {
            const accessTokenResponse = await this.refreshHandler();
            if (!accessTokenResponse.access_token) {
                throw new Error('No access token is returned by the refreshHandler callback.');
            }
            return accessTokenResponse;
        }
        return;
    }
    /**
     * Returns true if a token is expired or will expire within
     * eagerRefreshThresholdMillismilliseconds.
     * If there is no expiry time, assumes the token is not expired or expiring.
     */
    isTokenExpiring() {
        const expiryDate = this.credentials.expiry_date;
        return expiryDate
            ? expiryDate <= new Date().getTime() + this.eagerRefreshThresholdMillis
            : false;
    }
}
exports.OAuth2Client = OAuth2Client;
OAuth2Client.GOOGLE_TOKEN_INFO_URL = 'https://oauth2.googleapis.com/tokeninfo';
/**
 * The base URL for auth endpoints.
 */
OAuth2Client.GOOGLE_OAUTH2_AUTH_BASE_URL_ = 'https://accounts.google.com/o/oauth2/v2/auth';
/**
 * The base endpoint for token retrieval.
 */
OAuth2Client.GOOGLE_OAUTH2_TOKEN_URL_ = 'https://oauth2.googleapis.com/token';
/**
 * The base endpoint to revoke tokens.
 */
OAuth2Client.GOOGLE_OAUTH2_REVOKE_URL_ = 'https://oauth2.googleapis.com/revoke';
/**
 * Google Sign on certificates in PEM format.
 */
OAuth2Client.GOOGLE_OAUTH2_FEDERATED_SIGNON_PEM_CERTS_URL_ = 'https://www.googleapis.com/oauth2/v1/certs';
/**
 * Google Sign on certificates in JWK format.
 */
OAuth2Client.GOOGLE_OAUTH2_FEDERATED_SIGNON_JWK_CERTS_URL_ = 'https://www.googleapis.com/oauth2/v3/certs';
/**
 * Google Sign on certificates in JWK format.
 */
OAuth2Client.GOOGLE_OAUTH2_IAP_PUBLIC_KEY_URL_ = 'https://www.gstatic.com/iap/verify/public_key';
/**
 * Clock skew - five minutes in seconds
 */
OAuth2Client.CLOCK_SKEW_SECS_ = 300;
/**
 * Max Token Lifetime is one day in seconds
 */
OAuth2Client.MAX_TOKEN_LIFETIME_SECS_ = 86400;
/**
 * The allowed oauth token issuers.
 */
OAuth2Client.ISSUERS_ = [
    'accounts.google.com',
    'https://accounts.google.com',
];
//# sourceMappingURL=oauth2client.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/oauth2common.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getErrorFromOAuthErrorResponse = exports.OAuthClientAuthHandler = void 0;
const querystring = __webpack_require__("querystring");
const crypto_1 = __webpack_require__("./node_modules/google-auth-library/build/src/crypto/crypto.js");
/** List of HTTP methods that accept request bodies. */
const METHODS_SUPPORTING_REQUEST_BODY = ['PUT', 'POST', 'PATCH'];
/**
 * Abstract class for handling client authentication in OAuth-based
 * operations.
 * When request-body client authentication is used, only application/json and
 * application/x-www-form-urlencoded content types for HTTP methods that support
 * request bodies are supported.
 */
class OAuthClientAuthHandler {
    /**
     * Instantiates an OAuth client authentication handler.
     * @param clientAuthentication The client auth credentials.
     */
    constructor(clientAuthentication) {
        this.clientAuthentication = clientAuthentication;
        this.crypto = (0, crypto_1.createCrypto)();
    }
    /**
     * Applies client authentication on the OAuth request's headers or POST
     * body but does not process the request.
     * @param opts The GaxiosOptions whose headers or data are to be modified
     *   depending on the client authentication mechanism to be used.
     * @param bearerToken The optional bearer token to use for authentication.
     *   When this is used, no client authentication credentials are needed.
     */
    applyClientAuthenticationOptions(opts, bearerToken) {
        // Inject authenticated header.
        this.injectAuthenticatedHeaders(opts, bearerToken);
        // Inject authenticated request body.
        if (!bearerToken) {
            this.injectAuthenticatedRequestBody(opts);
        }
    }
    /**
     * Applies client authentication on the request's header if either
     * basic authentication or bearer token authentication is selected.
     *
     * @param opts The GaxiosOptions whose headers or data are to be modified
     *   depending on the client authentication mechanism to be used.
     * @param bearerToken The optional bearer token to use for authentication.
     *   When this is used, no client authentication credentials are needed.
     */
    injectAuthenticatedHeaders(opts, bearerToken) {
        var _a;
        // Bearer token prioritized higher than basic Auth.
        if (bearerToken) {
            opts.headers = opts.headers || {};
            Object.assign(opts.headers, {
                Authorization: `Bearer ${bearerToken}}`,
            });
        }
        else if (((_a = this.clientAuthentication) === null || _a === void 0 ? void 0 : _a.confidentialClientType) === 'basic') {
            opts.headers = opts.headers || {};
            const clientId = this.clientAuthentication.clientId;
            const clientSecret = this.clientAuthentication.clientSecret || '';
            const base64EncodedCreds = this.crypto.encodeBase64StringUtf8(`${clientId}:${clientSecret}`);
            Object.assign(opts.headers, {
                Authorization: `Basic ${base64EncodedCreds}`,
            });
        }
    }
    /**
     * Applies client authentication on the request's body if request-body
     * client authentication is selected.
     *
     * @param opts The GaxiosOptions whose headers or data are to be modified
     *   depending on the client authentication mechanism to be used.
     */
    injectAuthenticatedRequestBody(opts) {
        var _a;
        if (((_a = this.clientAuthentication) === null || _a === void 0 ? void 0 : _a.confidentialClientType) === 'request-body') {
            const method = (opts.method || 'GET').toUpperCase();
            // Inject authenticated request body.
            if (METHODS_SUPPORTING_REQUEST_BODY.indexOf(method) !== -1) {
                // Get content-type.
                let contentType;
                const headers = opts.headers || {};
                for (const key in headers) {
                    if (key.toLowerCase() === 'content-type' && headers[key]) {
                        contentType = headers[key].toLowerCase();
                        break;
                    }
                }
                if (contentType === 'application/x-www-form-urlencoded') {
                    opts.data = opts.data || '';
                    const data = querystring.parse(opts.data);
                    Object.assign(data, {
                        client_id: this.clientAuthentication.clientId,
                        client_secret: this.clientAuthentication.clientSecret || '',
                    });
                    opts.data = querystring.stringify(data);
                }
                else if (contentType === 'application/json') {
                    opts.data = opts.data || {};
                    Object.assign(opts.data, {
                        client_id: this.clientAuthentication.clientId,
                        client_secret: this.clientAuthentication.clientSecret || '',
                    });
                }
                else {
                    throw new Error(`${contentType} content-types are not supported with ` +
                        `${this.clientAuthentication.confidentialClientType} ` +
                        'client authentication');
                }
            }
            else {
                throw new Error(`${method} HTTP method does not support ` +
                    `${this.clientAuthentication.confidentialClientType} ` +
                    'client authentication');
            }
        }
    }
}
exports.OAuthClientAuthHandler = OAuthClientAuthHandler;
/**
 * Converts an OAuth error response to a native JavaScript Error.
 * @param resp The OAuth error response to convert to a native Error object.
 * @param err The optional original error. If provided, the error properties
 *   will be copied to the new error.
 * @return The converted native Error object.
 */
function getErrorFromOAuthErrorResponse(resp, err) {
    // Error response.
    const errorCode = resp.error;
    const errorDescription = resp.error_description;
    const errorUri = resp.error_uri;
    let message = `Error code ${errorCode}`;
    if (typeof errorDescription !== 'undefined') {
        message += `: ${errorDescription}`;
    }
    if (typeof errorUri !== 'undefined') {
        message += ` - ${errorUri}`;
    }
    const newError = new Error(message);
    // Copy properties from original error to newly generated error.
    if (err) {
        const keys = Object.keys(err);
        if (err.stack) {
            // Copy error.stack if available.
            keys.push('stack');
        }
        keys.forEach(key => {
            // Do not overwrite the message field.
            if (key !== 'message') {
                Object.defineProperty(newError, key, {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    value: err[key],
                    writable: false,
                    enumerable: true,
                });
            }
        });
    }
    return newError;
}
exports.getErrorFromOAuthErrorResponse = getErrorFromOAuthErrorResponse;
//# sourceMappingURL=oauth2common.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/refreshclient.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2015 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRefreshClient = void 0;
const oauth2client_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/oauth2client.js");
class UserRefreshClient extends oauth2client_1.OAuth2Client {
    constructor(optionsOrClientId, clientSecret, refreshToken, eagerRefreshThresholdMillis, forceRefreshOnFailure) {
        const opts = optionsOrClientId && typeof optionsOrClientId === 'object'
            ? optionsOrClientId
            : {
                clientId: optionsOrClientId,
                clientSecret,
                refreshToken,
                eagerRefreshThresholdMillis,
                forceRefreshOnFailure,
            };
        super({
            clientId: opts.clientId,
            clientSecret: opts.clientSecret,
            eagerRefreshThresholdMillis: opts.eagerRefreshThresholdMillis,
            forceRefreshOnFailure: opts.forceRefreshOnFailure,
        });
        this._refreshToken = opts.refreshToken;
        this.credentials.refresh_token = opts.refreshToken;
    }
    /**
     * Refreshes the access token.
     * @param refreshToken An ignored refreshToken..
     * @param callback Optional callback.
     */
    async refreshTokenNoCache(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    refreshToken) {
        return super.refreshTokenNoCache(this._refreshToken);
    }
    /**
     * Create a UserRefreshClient credentials instance using the given input
     * options.
     * @param json The input object.
     */
    fromJSON(json) {
        if (!json) {
            throw new Error('Must pass in a JSON object containing the user refresh token');
        }
        if (json.type !== 'authorized_user') {
            throw new Error('The incoming JSON object does not have the "authorized_user" type');
        }
        if (!json.client_id) {
            throw new Error('The incoming JSON object does not contain a client_id field');
        }
        if (!json.client_secret) {
            throw new Error('The incoming JSON object does not contain a client_secret field');
        }
        if (!json.refresh_token) {
            throw new Error('The incoming JSON object does not contain a refresh_token field');
        }
        this._clientId = json.client_id;
        this._clientSecret = json.client_secret;
        this._refreshToken = json.refresh_token;
        this.credentials.refresh_token = json.refresh_token;
        this.quotaProjectId = json.quota_project_id;
    }
    fromStream(inputStream, callback) {
        if (callback) {
            this.fromStreamAsync(inputStream).then(() => callback(), callback);
        }
        else {
            return this.fromStreamAsync(inputStream);
        }
    }
    async fromStreamAsync(inputStream) {
        return new Promise((resolve, reject) => {
            if (!inputStream) {
                return reject(new Error('Must pass in a stream containing the user refresh token.'));
            }
            let s = '';
            inputStream
                .setEncoding('utf8')
                .on('error', reject)
                .on('data', chunk => (s += chunk))
                .on('end', () => {
                try {
                    const data = JSON.parse(s);
                    this.fromJSON(data);
                    return resolve();
                }
                catch (err) {
                    return reject(err);
                }
            });
        });
    }
}
exports.UserRefreshClient = UserRefreshClient;
//# sourceMappingURL=refreshclient.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/auth/stscredentials.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StsCredentials = void 0;
const gaxios_1 = __webpack_require__("./node_modules/gaxios/build/src/index.js");
const querystring = __webpack_require__("querystring");
const transporters_1 = __webpack_require__("./node_modules/google-auth-library/build/src/transporters.js");
const oauth2common_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/oauth2common.js");
/**
 * Implements the OAuth 2.0 token exchange based on
 * https://tools.ietf.org/html/rfc8693
 */
class StsCredentials extends oauth2common_1.OAuthClientAuthHandler {
    /**
     * Initializes an STS credentials instance.
     * @param tokenExchangeEndpoint The token exchange endpoint.
     * @param clientAuthentication The client authentication credentials if
     *   available.
     */
    constructor(tokenExchangeEndpoint, clientAuthentication) {
        super(clientAuthentication);
        this.tokenExchangeEndpoint = tokenExchangeEndpoint;
        this.transporter = new transporters_1.DefaultTransporter();
    }
    /**
     * Exchanges the provided token for another type of token based on the
     * rfc8693 spec.
     * @param stsCredentialsOptions The token exchange options used to populate
     *   the token exchange request.
     * @param additionalHeaders Optional additional headers to pass along the
     *   request.
     * @param options Optional additional GCP-specific non-spec defined options
     *   to send with the request.
     *   Example: `&options=${encodeUriComponent(JSON.stringified(options))}`
     * @return A promise that resolves with the token exchange response containing
     *   the requested token and its expiration time.
     */
    async exchangeToken(stsCredentialsOptions, additionalHeaders, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options) {
        var _a, _b, _c;
        const values = {
            grant_type: stsCredentialsOptions.grantType,
            resource: stsCredentialsOptions.resource,
            audience: stsCredentialsOptions.audience,
            scope: (_a = stsCredentialsOptions.scope) === null || _a === void 0 ? void 0 : _a.join(' '),
            requested_token_type: stsCredentialsOptions.requestedTokenType,
            subject_token: stsCredentialsOptions.subjectToken,
            subject_token_type: stsCredentialsOptions.subjectTokenType,
            actor_token: (_b = stsCredentialsOptions.actingParty) === null || _b === void 0 ? void 0 : _b.actorToken,
            actor_token_type: (_c = stsCredentialsOptions.actingParty) === null || _c === void 0 ? void 0 : _c.actorTokenType,
            // Non-standard GCP-specific options.
            options: options && JSON.stringify(options),
        };
        // Remove undefined fields.
        Object.keys(values).forEach(key => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (typeof values[key] === 'undefined') {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                delete values[key];
            }
        });
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        };
        // Inject additional STS headers if available.
        Object.assign(headers, additionalHeaders || {});
        const opts = {
            url: this.tokenExchangeEndpoint,
            method: 'POST',
            headers,
            data: querystring.stringify(values),
            responseType: 'json',
        };
        // Apply OAuth client authentication.
        this.applyClientAuthenticationOptions(opts);
        try {
            const response = await this.transporter.request(opts);
            // Successful response.
            const stsSuccessfulResponse = response.data;
            stsSuccessfulResponse.res = response;
            return stsSuccessfulResponse;
        }
        catch (error) {
            // Translate error to OAuthError.
            if (error instanceof gaxios_1.GaxiosError && error.response) {
                throw (0, oauth2common_1.getErrorFromOAuthErrorResponse)(error.response.data, 
                // Preserve other fields from the original error.
                error);
            }
            // Request could fail before the server responds.
            throw error;
        }
    }
}
exports.StsCredentials = StsCredentials;
//# sourceMappingURL=stscredentials.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/crypto/browser/crypto.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/* global window */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BrowserCrypto = void 0;
// This file implements crypto functions we need using in-browser
// SubtleCrypto interface `window.crypto.subtle`.
const base64js = __webpack_require__("base64-js");
// Not all browsers support `TextEncoder`. The following `require` will
// provide a fast UTF8-only replacement for those browsers that don't support
// text encoding natively.
// eslint-disable-next-line node/no-unsupported-features/node-builtins
if (typeof process === 'undefined' && typeof TextEncoder === 'undefined') {
    __webpack_require__("./node_modules/fast-text-encoding/text.min.js");
}
const crypto_1 = __webpack_require__("./node_modules/google-auth-library/build/src/crypto/crypto.js");
class BrowserCrypto {
    constructor() {
        if (typeof window === 'undefined' ||
            window.crypto === undefined ||
            window.crypto.subtle === undefined) {
            throw new Error("SubtleCrypto not found. Make sure it's an https:// website.");
        }
    }
    async sha256DigestBase64(str) {
        // SubtleCrypto digest() method is async, so we must make
        // this method async as well.
        // To calculate SHA256 digest using SubtleCrypto, we first
        // need to convert an input string to an ArrayBuffer:
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        const inputBuffer = new TextEncoder().encode(str);
        // Result is ArrayBuffer as well.
        const outputBuffer = await window.crypto.subtle.digest('SHA-256', inputBuffer);
        return base64js.fromByteArray(new Uint8Array(outputBuffer));
    }
    randomBytesBase64(count) {
        const array = new Uint8Array(count);
        window.crypto.getRandomValues(array);
        return base64js.fromByteArray(array);
    }
    static padBase64(base64) {
        // base64js requires padding, so let's add some '='
        while (base64.length % 4 !== 0) {
            base64 += '=';
        }
        return base64;
    }
    async verify(pubkey, data, signature) {
        const algo = {
            name: 'RSASSA-PKCS1-v1_5',
            hash: { name: 'SHA-256' },
        };
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        const dataArray = new TextEncoder().encode(data);
        const signatureArray = base64js.toByteArray(BrowserCrypto.padBase64(signature));
        const cryptoKey = await window.crypto.subtle.importKey('jwk', pubkey, algo, true, ['verify']);
        // SubtleCrypto's verify method is async so we must make
        // this method async as well.
        const result = await window.crypto.subtle.verify(algo, cryptoKey, signatureArray, dataArray);
        return result;
    }
    async sign(privateKey, data) {
        const algo = {
            name: 'RSASSA-PKCS1-v1_5',
            hash: { name: 'SHA-256' },
        };
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        const dataArray = new TextEncoder().encode(data);
        const cryptoKey = await window.crypto.subtle.importKey('jwk', privateKey, algo, true, ['sign']);
        // SubtleCrypto's sign method is async so we must make
        // this method async as well.
        const result = await window.crypto.subtle.sign(algo, cryptoKey, dataArray);
        return base64js.fromByteArray(new Uint8Array(result));
    }
    decodeBase64StringUtf8(base64) {
        const uint8array = base64js.toByteArray(BrowserCrypto.padBase64(base64));
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        const result = new TextDecoder().decode(uint8array);
        return result;
    }
    encodeBase64StringUtf8(text) {
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        const uint8array = new TextEncoder().encode(text);
        const result = base64js.fromByteArray(uint8array);
        return result;
    }
    /**
     * Computes the SHA-256 hash of the provided string.
     * @param str The plain text string to hash.
     * @return A promise that resolves with the SHA-256 hash of the provided
     *   string in hexadecimal encoding.
     */
    async sha256DigestHex(str) {
        // SubtleCrypto digest() method is async, so we must make
        // this method async as well.
        // To calculate SHA256 digest using SubtleCrypto, we first
        // need to convert an input string to an ArrayBuffer:
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        const inputBuffer = new TextEncoder().encode(str);
        // Result is ArrayBuffer as well.
        const outputBuffer = await window.crypto.subtle.digest('SHA-256', inputBuffer);
        return (0, crypto_1.fromArrayBufferToHex)(outputBuffer);
    }
    /**
     * Computes the HMAC hash of a message using the provided crypto key and the
     * SHA-256 algorithm.
     * @param key The secret crypto key in utf-8 or ArrayBuffer format.
     * @param msg The plain text message.
     * @return A promise that resolves with the HMAC-SHA256 hash in ArrayBuffer
     *   format.
     */
    async signWithHmacSha256(key, msg) {
        // Convert key, if provided in ArrayBuffer format, to string.
        const rawKey = typeof key === 'string'
            ? key
            : String.fromCharCode(...new Uint16Array(key));
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        const enc = new TextEncoder();
        const cryptoKey = await window.crypto.subtle.importKey('raw', enc.encode(rawKey), {
            name: 'HMAC',
            hash: {
                name: 'SHA-256',
            },
        }, false, ['sign']);
        return window.crypto.subtle.sign('HMAC', cryptoKey, enc.encode(msg));
    }
}
exports.BrowserCrypto = BrowserCrypto;
//# sourceMappingURL=crypto.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/crypto/crypto.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/* global window */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromArrayBufferToHex = exports.hasBrowserCrypto = exports.createCrypto = void 0;
const crypto_1 = __webpack_require__("./node_modules/google-auth-library/build/src/crypto/browser/crypto.js");
const crypto_2 = __webpack_require__("./node_modules/google-auth-library/build/src/crypto/node/crypto.js");
function createCrypto() {
    if (hasBrowserCrypto()) {
        return new crypto_1.BrowserCrypto();
    }
    return new crypto_2.NodeCrypto();
}
exports.createCrypto = createCrypto;
function hasBrowserCrypto() {
    return (typeof window !== 'undefined' &&
        typeof window.crypto !== 'undefined' &&
        typeof window.crypto.subtle !== 'undefined');
}
exports.hasBrowserCrypto = hasBrowserCrypto;
/**
 * Converts an ArrayBuffer to a hexadecimal string.
 * @param arrayBuffer The ArrayBuffer to convert to hexadecimal string.
 * @return The hexadecimal encoding of the ArrayBuffer.
 */
function fromArrayBufferToHex(arrayBuffer) {
    // Convert buffer to byte array.
    const byteArray = Array.from(new Uint8Array(arrayBuffer));
    // Convert bytes to hex string.
    return byteArray
        .map(byte => {
        return byte.toString(16).padStart(2, '0');
    })
        .join('');
}
exports.fromArrayBufferToHex = fromArrayBufferToHex;
//# sourceMappingURL=crypto.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/crypto/node/crypto.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeCrypto = void 0;
const crypto = __webpack_require__("crypto");
class NodeCrypto {
    async sha256DigestBase64(str) {
        return crypto.createHash('sha256').update(str).digest('base64');
    }
    randomBytesBase64(count) {
        return crypto.randomBytes(count).toString('base64');
    }
    async verify(pubkey, data, signature) {
        const verifier = crypto.createVerify('sha256');
        verifier.update(data);
        verifier.end();
        return verifier.verify(pubkey, signature, 'base64');
    }
    async sign(privateKey, data) {
        const signer = crypto.createSign('RSA-SHA256');
        signer.update(data);
        signer.end();
        return signer.sign(privateKey, 'base64');
    }
    decodeBase64StringUtf8(base64) {
        return Buffer.from(base64, 'base64').toString('utf-8');
    }
    encodeBase64StringUtf8(text) {
        return Buffer.from(text, 'utf-8').toString('base64');
    }
    /**
     * Computes the SHA-256 hash of the provided string.
     * @param str The plain text string to hash.
     * @return A promise that resolves with the SHA-256 hash of the provided
     *   string in hexadecimal encoding.
     */
    async sha256DigestHex(str) {
        return crypto.createHash('sha256').update(str).digest('hex');
    }
    /**
     * Computes the HMAC hash of a message using the provided crypto key and the
     * SHA-256 algorithm.
     * @param key The secret crypto key in utf-8 or ArrayBuffer format.
     * @param msg The plain text message.
     * @return A promise that resolves with the HMAC-SHA256 hash in ArrayBuffer
     *   format.
     */
    async signWithHmacSha256(key, msg) {
        const cryptoKey = typeof key === 'string' ? key : toBuffer(key);
        return toArrayBuffer(crypto.createHmac('sha256', cryptoKey).update(msg).digest());
    }
}
exports.NodeCrypto = NodeCrypto;
/**
 * Converts a Node.js Buffer to an ArrayBuffer.
 * https://stackoverflow.com/questions/8609289/convert-a-binary-nodejs-buffer-to-javascript-arraybuffer
 * @param buffer The Buffer input to covert.
 * @return The ArrayBuffer representation of the input.
 */
function toArrayBuffer(buffer) {
    return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}
/**
 * Converts an ArrayBuffer to a Node.js Buffer.
 * @param arrayBuffer The ArrayBuffer input to covert.
 * @return The Buffer representation of the input.
 */
function toBuffer(arrayBuffer) {
    return Buffer.from(arrayBuffer);
}
//# sourceMappingURL=crypto.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/index.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleAuth = exports.auth = exports.DefaultTransporter = exports.DownscopedClient = exports.BaseExternalAccountClient = exports.ExternalAccountClient = exports.IdentityPoolClient = exports.AwsClient = exports.UserRefreshClient = exports.LoginTicket = exports.OAuth2Client = exports.CodeChallengeMethod = exports.Impersonated = exports.JWT = exports.JWTAccess = exports.IdTokenClient = exports.IAMAuth = exports.GCPEnv = exports.Compute = exports.AuthClient = void 0;
// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const googleauth_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/googleauth.js");
Object.defineProperty(exports, "GoogleAuth", ({ enumerable: true, get: function () { return googleauth_1.GoogleAuth; } }));
var authclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/authclient.js");
Object.defineProperty(exports, "AuthClient", ({ enumerable: true, get: function () { return authclient_1.AuthClient; } }));
var computeclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/computeclient.js");
Object.defineProperty(exports, "Compute", ({ enumerable: true, get: function () { return computeclient_1.Compute; } }));
var envDetect_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/envDetect.js");
Object.defineProperty(exports, "GCPEnv", ({ enumerable: true, get: function () { return envDetect_1.GCPEnv; } }));
var iam_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/iam.js");
Object.defineProperty(exports, "IAMAuth", ({ enumerable: true, get: function () { return iam_1.IAMAuth; } }));
var idtokenclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/idtokenclient.js");
Object.defineProperty(exports, "IdTokenClient", ({ enumerable: true, get: function () { return idtokenclient_1.IdTokenClient; } }));
var jwtaccess_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/jwtaccess.js");
Object.defineProperty(exports, "JWTAccess", ({ enumerable: true, get: function () { return jwtaccess_1.JWTAccess; } }));
var jwtclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/jwtclient.js");
Object.defineProperty(exports, "JWT", ({ enumerable: true, get: function () { return jwtclient_1.JWT; } }));
var impersonated_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/impersonated.js");
Object.defineProperty(exports, "Impersonated", ({ enumerable: true, get: function () { return impersonated_1.Impersonated; } }));
var oauth2client_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/oauth2client.js");
Object.defineProperty(exports, "CodeChallengeMethod", ({ enumerable: true, get: function () { return oauth2client_1.CodeChallengeMethod; } }));
Object.defineProperty(exports, "OAuth2Client", ({ enumerable: true, get: function () { return oauth2client_1.OAuth2Client; } }));
var loginticket_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/loginticket.js");
Object.defineProperty(exports, "LoginTicket", ({ enumerable: true, get: function () { return loginticket_1.LoginTicket; } }));
var refreshclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/refreshclient.js");
Object.defineProperty(exports, "UserRefreshClient", ({ enumerable: true, get: function () { return refreshclient_1.UserRefreshClient; } }));
var awsclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/awsclient.js");
Object.defineProperty(exports, "AwsClient", ({ enumerable: true, get: function () { return awsclient_1.AwsClient; } }));
var identitypoolclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/identitypoolclient.js");
Object.defineProperty(exports, "IdentityPoolClient", ({ enumerable: true, get: function () { return identitypoolclient_1.IdentityPoolClient; } }));
var externalclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/externalclient.js");
Object.defineProperty(exports, "ExternalAccountClient", ({ enumerable: true, get: function () { return externalclient_1.ExternalAccountClient; } }));
var baseexternalclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/baseexternalclient.js");
Object.defineProperty(exports, "BaseExternalAccountClient", ({ enumerable: true, get: function () { return baseexternalclient_1.BaseExternalAccountClient; } }));
var downscopedclient_1 = __webpack_require__("./node_modules/google-auth-library/build/src/auth/downscopedclient.js");
Object.defineProperty(exports, "DownscopedClient", ({ enumerable: true, get: function () { return downscopedclient_1.DownscopedClient; } }));
var transporters_1 = __webpack_require__("./node_modules/google-auth-library/build/src/transporters.js");
Object.defineProperty(exports, "DefaultTransporter", ({ enumerable: true, get: function () { return transporters_1.DefaultTransporter; } }));
const auth = new googleauth_1.GoogleAuth();
exports.auth = auth;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/options.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validate = void 0;
// Accepts an options object passed from the user to the API.  In the
// previous version of the API, it referred to a `Request` options object.
// Now it refers to an Axiox Request Config object.  This is here to help
// ensure users don't pass invalid options when they upgrade from 0.x to 1.x.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function validate(options) {
    const vpairs = [
        { invalid: 'uri', expected: 'url' },
        { invalid: 'json', expected: 'data' },
        { invalid: 'qs', expected: 'params' },
    ];
    for (const pair of vpairs) {
        if (options[pair.invalid]) {
            const e = `'${pair.invalid}' is not a valid configuration option. Please use '${pair.expected}' instead. This library is using Axios for requests. Please see https://github.com/axios/axios to learn more about the valid request options.`;
            throw new Error(e);
        }
    }
}
exports.validate = validate;
//# sourceMappingURL=options.js.map

/***/ }),

/***/ "./node_modules/google-auth-library/build/src/transporters.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultTransporter = void 0;
const gaxios_1 = __webpack_require__("./node_modules/gaxios/build/src/index.js");
const options_1 = __webpack_require__("./node_modules/google-auth-library/build/src/options.js");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = __webpack_require__("./node_modules/google-auth-library/package.json");
const PRODUCT_NAME = 'google-api-nodejs-client';
class DefaultTransporter {
    /**
     * Configures request options before making a request.
     * @param opts GaxiosOptions options.
     * @return Configured options.
     */
    configure(opts = {}) {
        opts.headers = opts.headers || {};
        if (typeof window === 'undefined') {
            // set transporter user agent if not in browser
            const uaValue = opts.headers['User-Agent'];
            if (!uaValue) {
                opts.headers['User-Agent'] = DefaultTransporter.USER_AGENT;
            }
            else if (!uaValue.includes(`${PRODUCT_NAME}/`)) {
                opts.headers['User-Agent'] = `${uaValue} ${DefaultTransporter.USER_AGENT}`;
            }
            // track google-auth-library-nodejs version:
            const authVersion = `auth/${pkg.version}`;
            if (opts.headers['x-goog-api-client'] &&
                !opts.headers['x-goog-api-client'].includes(authVersion)) {
                opts.headers['x-goog-api-client'] = `${opts.headers['x-goog-api-client']} ${authVersion}`;
            }
            else if (!opts.headers['x-goog-api-client']) {
                const nodeVersion = process.version.replace(/^v/, '');
                opts.headers['x-goog-api-client'] = `gl-node/${nodeVersion} ${authVersion}`;
            }
        }
        return opts;
    }
    request(opts, callback) {
        // ensure the user isn't passing in request-style options
        opts = this.configure(opts);
        try {
            (0, options_1.validate)(opts);
        }
        catch (e) {
            if (callback) {
                return callback(e);
            }
            else {
                throw e;
            }
        }
        if (callback) {
            (0, gaxios_1.request)(opts).then(r => {
                callback(null, r);
            }, e => {
                callback(this.processError(e));
            });
        }
        else {
            return (0, gaxios_1.request)(opts).catch(e => {
                throw this.processError(e);
            });
        }
    }
    /**
     * Changes the error to include details from the body.
     */
    processError(e) {
        const res = e.response;
        const err = e;
        const body = res ? res.data : null;
        if (res && body && body.error && res.status !== 200) {
            if (typeof body.error === 'string') {
                err.message = body.error;
                err.code = res.status.toString();
            }
            else if (Array.isArray(body.error.errors)) {
                err.message = body.error.errors
                    .map((err2) => err2.message)
                    .join('\n');
                err.code = body.error.code;
                err.errors = body.error.errors;
            }
            else {
                err.message = body.error.message;
                err.code = body.error.code || res.status;
            }
        }
        else if (res && res.status >= 400) {
            // Consider all 4xx and 5xx responses errors.
            err.message = body;
            err.code = res.status.toString();
        }
        return err;
    }
}
exports.DefaultTransporter = DefaultTransporter;
/**
 * Default user agent.
 */
DefaultTransporter.USER_AGENT = `${PRODUCT_NAME}/${pkg.version}`;
//# sourceMappingURL=transporters.js.map

/***/ }),

/***/ "./node_modules/google-p12-pem/build/src/index.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPem = void 0;
const fs = __webpack_require__("fs");
const forge = __webpack_require__("node-forge");
const util_1 = __webpack_require__("util");
const readFile = util_1.promisify(fs.readFile);
function getPem(filename, callback) {
    if (callback) {
        getPemAsync(filename)
            .then(pem => callback(null, pem))
            .catch(err => callback(err, null));
    }
    else {
        return getPemAsync(filename);
    }
}
exports.getPem = getPem;
function getPemAsync(filename) {
    return readFile(filename, { encoding: 'base64' }).then(keyp12 => {
        return convertToPem(keyp12);
    });
}
/**
 * Converts a P12 in base64 encoding to a pem.
 * @param p12base64 String containing base64 encoded p12.
 * @returns a string containing the pem.
 */
function convertToPem(p12base64) {
    const p12Der = forge.util.decode64(p12base64);
    const p12Asn1 = forge.asn1.fromDer(p12Der);
    const p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, 'notasecret');
    const bags = p12.getBags({ friendlyName: 'privatekey' });
    if (bags.friendlyName) {
        const privateKey = bags.friendlyName[0].key;
        const pem = forge.pki.privateKeyToPem(privateKey);
        return pem.replace(/\r\n/g, '\n');
    }
    else {
        throw new Error('Unable to get friendly name.');
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/gtoken/build/src/index.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleToken = void 0;
const fs = __webpack_require__("fs");
const gaxios_1 = __webpack_require__("./node_modules/gtoken/node_modules/gaxios/build/src/index.js");
const jws = __webpack_require__("jws");
const path = __webpack_require__("path");
const util_1 = __webpack_require__("util");
const readFile = fs.readFile
    ? util_1.promisify(fs.readFile)
    : async () => {
        // if running in the web-browser, fs.readFile may not have been shimmed.
        throw new ErrorWithCode('use key rather than keyFile.', 'MISSING_CREDENTIALS');
    };
const GOOGLE_TOKEN_URL = 'https://www.googleapis.com/oauth2/v4/token';
const GOOGLE_REVOKE_TOKEN_URL = 'https://accounts.google.com/o/oauth2/revoke?token=';
class ErrorWithCode extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}
let getPem;
class GoogleToken {
    /**
     * Create a GoogleToken.
     *
     * @param options  Configuration object.
     */
    constructor(options) {
        this.configure(options);
    }
    get accessToken() {
        return this.rawToken ? this.rawToken.access_token : undefined;
    }
    get idToken() {
        return this.rawToken ? this.rawToken.id_token : undefined;
    }
    get tokenType() {
        return this.rawToken ? this.rawToken.token_type : undefined;
    }
    get refreshToken() {
        return this.rawToken ? this.rawToken.refresh_token : undefined;
    }
    /**
     * Returns whether the token has expired.
     *
     * @return true if the token has expired, false otherwise.
     */
    hasExpired() {
        const now = new Date().getTime();
        if (this.rawToken && this.expiresAt) {
            return now >= this.expiresAt;
        }
        else {
            return true;
        }
    }
    /**
     * Returns whether the token will expire within eagerRefreshThresholdMillis
     *
     * @return true if the token will be expired within eagerRefreshThresholdMillis, false otherwise.
     */
    isTokenExpiring() {
        var _a;
        const now = new Date().getTime();
        const eagerRefreshThresholdMillis = (_a = this.eagerRefreshThresholdMillis) !== null && _a !== void 0 ? _a : 0;
        if (this.rawToken && this.expiresAt) {
            return this.expiresAt <= now + eagerRefreshThresholdMillis;
        }
        else {
            return true;
        }
    }
    getToken(callback, opts = {}) {
        if (typeof callback === 'object') {
            opts = callback;
            callback = undefined;
        }
        opts = Object.assign({
            forceRefresh: false,
        }, opts);
        if (callback) {
            const cb = callback;
            this.getTokenAsync(opts).then(t => cb(null, t), callback);
            return;
        }
        return this.getTokenAsync(opts);
    }
    /**
     * Given a keyFile, extract the key and client email if available
     * @param keyFile Path to a json, pem, or p12 file that contains the key.
     * @returns an object with privateKey and clientEmail properties
     */
    async getCredentials(keyFile) {
        const ext = path.extname(keyFile);
        switch (ext) {
            case '.json': {
                const key = await readFile(keyFile, 'utf8');
                const body = JSON.parse(key);
                const privateKey = body.private_key;
                const clientEmail = body.client_email;
                if (!privateKey || !clientEmail) {
                    throw new ErrorWithCode('private_key and client_email are required.', 'MISSING_CREDENTIALS');
                }
                return { privateKey, clientEmail };
            }
            case '.der':
            case '.crt':
            case '.pem': {
                const privateKey = await readFile(keyFile, 'utf8');
                return { privateKey };
            }
            case '.p12':
            case '.pfx': {
                // NOTE:  The loading of `google-p12-pem` is deferred for performance
                // reasons.  The `node-forge` npm module in `google-p12-pem` adds a fair
                // bit time to overall module loading, and is likely not frequently
                // used.  In a future release, p12 support will be entirely removed.
                if (!getPem) {
                    getPem = (await Promise.resolve().then(() => __webpack_require__("./node_modules/google-p12-pem/build/src/index.js"))).getPem;
                }
                const privateKey = await getPem(keyFile);
                return { privateKey };
            }
            default:
                throw new ErrorWithCode('Unknown certificate type. Type is determined based on file extension. ' +
                    'Current supported extensions are *.json, *.pem, and *.p12.', 'UNKNOWN_CERTIFICATE_TYPE');
        }
    }
    async getTokenAsync(opts) {
        if (this.inFlightRequest && !opts.forceRefresh) {
            return this.inFlightRequest;
        }
        try {
            return await (this.inFlightRequest = this.getTokenAsyncInner(opts));
        }
        finally {
            this.inFlightRequest = undefined;
        }
    }
    async getTokenAsyncInner(opts) {
        if (this.isTokenExpiring() === false && opts.forceRefresh === false) {
            return Promise.resolve(this.rawToken);
        }
        if (!this.key && !this.keyFile) {
            throw new Error('No key or keyFile set.');
        }
        if (!this.key && this.keyFile) {
            const creds = await this.getCredentials(this.keyFile);
            this.key = creds.privateKey;
            this.iss = creds.clientEmail || this.iss;
            if (!creds.clientEmail) {
                this.ensureEmail();
            }
        }
        return this.requestToken();
    }
    ensureEmail() {
        if (!this.iss) {
            throw new ErrorWithCode('email is required.', 'MISSING_CREDENTIALS');
        }
    }
    revokeToken(callback) {
        if (callback) {
            this.revokeTokenAsync().then(() => callback(), callback);
            return;
        }
        return this.revokeTokenAsync();
    }
    async revokeTokenAsync() {
        if (!this.accessToken) {
            throw new Error('No token to revoke.');
        }
        const url = GOOGLE_REVOKE_TOKEN_URL + this.accessToken;
        await gaxios_1.request({ url });
        this.configure({
            email: this.iss,
            sub: this.sub,
            key: this.key,
            keyFile: this.keyFile,
            scope: this.scope,
            additionalClaims: this.additionalClaims,
        });
    }
    /**
     * Configure the GoogleToken for re-use.
     * @param  {object} options Configuration object.
     */
    configure(options = {}) {
        this.keyFile = options.keyFile;
        this.key = options.key;
        this.rawToken = undefined;
        this.iss = options.email || options.iss;
        this.sub = options.sub;
        this.additionalClaims = options.additionalClaims;
        if (typeof options.scope === 'object') {
            this.scope = options.scope.join(' ');
        }
        else {
            this.scope = options.scope;
        }
        this.eagerRefreshThresholdMillis = options.eagerRefreshThresholdMillis;
    }
    /**
     * Request the token from Google.
     */
    async requestToken() {
        const iat = Math.floor(new Date().getTime() / 1000);
        const additionalClaims = this.additionalClaims || {};
        const payload = Object.assign({
            iss: this.iss,
            scope: this.scope,
            aud: GOOGLE_TOKEN_URL,
            exp: iat + 3600,
            iat,
            sub: this.sub,
        }, additionalClaims);
        const signedJWT = jws.sign({
            header: { alg: 'RS256' },
            payload,
            secret: this.key,
        });
        try {
            const r = await gaxios_1.request({
                method: 'POST',
                url: GOOGLE_TOKEN_URL,
                data: {
                    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                    assertion: signedJWT,
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                responseType: 'json',
            });
            this.rawToken = r.data;
            this.expiresAt =
                r.data.expires_in === null || r.data.expires_in === undefined
                    ? undefined
                    : (iat + r.data.expires_in) * 1000;
            return this.rawToken;
        }
        catch (e) {
            this.rawToken = undefined;
            this.tokenExpires = undefined;
            const body = e.response && e.response.data ? e.response.data : {};
            if (body.error) {
                const desc = body.error_description
                    ? `: ${body.error_description}`
                    : '';
                e.message = `${body.error}${desc}`;
            }
            throw e;
        }
    }
}
exports.GoogleToken = GoogleToken;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/gtoken/node_modules/gaxios/build/src/common.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright 2018 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GaxiosError = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
class GaxiosError extends Error {
    constructor(message, options, response) {
        super(message);
        this.response = response;
        this.config = options;
        this.code = response.status.toString();
    }
}
exports.GaxiosError = GaxiosError;
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/gtoken/node_modules/gaxios/build/src/gaxios.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// Copyright 2018 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Gaxios = void 0;
const extend_1 = __importDefault(__webpack_require__("extend"));
const https_1 = __webpack_require__("https");
const node_fetch_1 = __importDefault(__webpack_require__("node-fetch"));
const querystring_1 = __importDefault(__webpack_require__("querystring"));
const is_stream_1 = __importDefault(__webpack_require__("is-stream"));
const url_1 = __webpack_require__("url");
const common_1 = __webpack_require__("./node_modules/gtoken/node_modules/gaxios/build/src/common.js");
const retry_1 = __webpack_require__("./node_modules/gtoken/node_modules/gaxios/build/src/retry.js");
/* eslint-disable @typescript-eslint/no-explicit-any */
const fetch = hasFetch() ? window.fetch : node_fetch_1.default;
function hasWindow() {
    return typeof window !== 'undefined' && !!window;
}
function hasFetch() {
    return hasWindow() && !!window.fetch;
}
function hasBuffer() {
    return typeof Buffer !== 'undefined';
}
function hasHeader(options, header) {
    return !!getHeader(options, header);
}
function getHeader(options, header) {
    header = header.toLowerCase();
    for (const key of Object.keys((options === null || options === void 0 ? void 0 : options.headers) || {})) {
        if (header === key.toLowerCase()) {
            return options.headers[key];
        }
    }
    return undefined;
}
let HttpsProxyAgent;
function loadProxy() {
    const proxy = process.env.HTTPS_PROXY ||
        process.env.https_proxy ||
        process.env.HTTP_PROXY ||
        process.env.http_proxy;
    if (proxy) {
        HttpsProxyAgent = __webpack_require__("https-proxy-agent");
    }
    return proxy;
}
loadProxy();
function skipProxy(url) {
    var _a;
    const noProxyEnv = (_a = process.env.NO_PROXY) !== null && _a !== void 0 ? _a : process.env.no_proxy;
    if (!noProxyEnv) {
        return false;
    }
    const noProxyUrls = noProxyEnv.split(',');
    const parsedURL = new url_1.URL(url);
    return !!noProxyUrls.find(url => {
        if (url.startsWith('*.') || url.startsWith('.')) {
            url = url.replace(/^\*\./, '.');
            return parsedURL.hostname.endsWith(url);
        }
        else {
            return url === parsedURL.origin || url === parsedURL.hostname;
        }
    });
}
// Figure out if we should be using a proxy. Only if it's required, load
// the https-proxy-agent module as it adds startup cost.
function getProxy(url) {
    // If there is a match between the no_proxy env variables and the url, then do not proxy
    if (skipProxy(url)) {
        return undefined;
        // If there is not a match between the no_proxy env variables and the url, check to see if there should be a proxy
    }
    else {
        return loadProxy();
    }
}
class Gaxios {
    /**
     * The Gaxios class is responsible for making HTTP requests.
     * @param defaults The default set of options to be used for this instance.
     */
    constructor(defaults) {
        this.agentCache = new Map();
        this.defaults = defaults || {};
    }
    /**
     * Perform an HTTP request with the given options.
     * @param opts Set of HTTP options that will be used for this HTTP request.
     */
    async request(opts = {}) {
        opts = this.validateOpts(opts);
        return this._request(opts);
    }
    async _defaultAdapter(opts) {
        const fetchImpl = opts.fetchImplementation || fetch;
        const res = (await fetchImpl(opts.url, opts));
        const data = await this.getResponseData(opts, res);
        return this.translateResponse(opts, res, data);
    }
    /**
     * Internal, retryable version of the `request` method.
     * @param opts Set of HTTP options that will be used for this HTTP request.
     */
    async _request(opts = {}) {
        try {
            let translatedResponse;
            if (opts.adapter) {
                translatedResponse = await opts.adapter(opts, this._defaultAdapter.bind(this));
            }
            else {
                translatedResponse = await this._defaultAdapter(opts);
            }
            if (!opts.validateStatus(translatedResponse.status)) {
                throw new common_1.GaxiosError(`Request failed with status code ${translatedResponse.status}`, opts, translatedResponse);
            }
            return translatedResponse;
        }
        catch (e) {
            const err = e;
            err.config = opts;
            const { shouldRetry, config } = await retry_1.getRetryConfig(e);
            if (shouldRetry && config) {
                err.config.retryConfig.currentRetryAttempt =
                    config.retryConfig.currentRetryAttempt;
                return this._request(err.config);
            }
            throw err;
        }
    }
    async getResponseData(opts, res) {
        switch (opts.responseType) {
            case 'stream':
                return res.body;
            case 'json': {
                let data = await res.text();
                try {
                    data = JSON.parse(data);
                }
                catch (_a) {
                    // continue
                }
                return data;
            }
            case 'arraybuffer':
                return res.arrayBuffer();
            case 'blob':
                return res.blob();
            default:
                return res.text();
        }
    }
    /**
     * Validates the options, and merges them with defaults.
     * @param opts The original options passed from the client.
     */
    validateOpts(options) {
        const opts = extend_1.default(true, {}, this.defaults, options);
        if (!opts.url) {
            throw new Error('URL is required.');
        }
        // baseUrl has been deprecated, remove in 2.0
        const baseUrl = opts.baseUrl || opts.baseURL;
        if (baseUrl) {
            opts.url = baseUrl + opts.url;
        }
        opts.paramsSerializer = opts.paramsSerializer || this.paramsSerializer;
        if (opts.params && Object.keys(opts.params).length > 0) {
            let additionalQueryParams = opts.paramsSerializer(opts.params);
            if (additionalQueryParams.startsWith('?')) {
                additionalQueryParams = additionalQueryParams.slice(1);
            }
            const prefix = opts.url.includes('?') ? '&' : '?';
            opts.url = opts.url + prefix + additionalQueryParams;
        }
        if (typeof options.maxContentLength === 'number') {
            opts.size = options.maxContentLength;
        }
        if (typeof options.maxRedirects === 'number') {
            opts.follow = options.maxRedirects;
        }
        opts.headers = opts.headers || {};
        if (opts.data) {
            const isFormData = typeof FormData === 'undefined'
                ? false
                : (opts === null || opts === void 0 ? void 0 : opts.data) instanceof FormData;
            if (is_stream_1.default.readable(opts.data)) {
                opts.body = opts.data;
            }
            else if (hasBuffer() && Buffer.isBuffer(opts.data)) {
                // Do not attempt to JSON.stringify() a Buffer:
                opts.body = opts.data;
                if (!hasHeader(opts, 'Content-Type')) {
                    opts.headers['Content-Type'] = 'application/json';
                }
            }
            else if (typeof opts.data === 'object') {
                // If www-form-urlencoded content type has been set, but data is
                // provided as an object, serialize the content using querystring:
                if (!isFormData) {
                    if (getHeader(opts, 'content-type') ===
                        'application/x-www-form-urlencoded') {
                        opts.body = opts.paramsSerializer(opts.data);
                    }
                    else {
                        // } else if (!(opts.data instanceof FormData)) {
                        if (!hasHeader(opts, 'Content-Type')) {
                            opts.headers['Content-Type'] = 'application/json';
                        }
                        opts.body = JSON.stringify(opts.data);
                    }
                }
            }
            else {
                opts.body = opts.data;
            }
        }
        opts.validateStatus = opts.validateStatus || this.validateStatus;
        opts.responseType = opts.responseType || 'json';
        if (!opts.headers['Accept'] && opts.responseType === 'json') {
            opts.headers['Accept'] = 'application/json';
        }
        opts.method = opts.method || 'GET';
        const proxy = getProxy(opts.url);
        if (proxy) {
            if (this.agentCache.has(proxy)) {
                opts.agent = this.agentCache.get(proxy);
            }
            else {
                // Proxy is being used in conjunction with mTLS.
                if (opts.cert && opts.key) {
                    const parsedURL = new url_1.URL(proxy);
                    opts.agent = new HttpsProxyAgent({
                        port: parsedURL.port,
                        host: parsedURL.host,
                        protocol: parsedURL.protocol,
                        cert: opts.cert,
                        key: opts.key,
                    });
                }
                else {
                    opts.agent = new HttpsProxyAgent(proxy);
                }
                this.agentCache.set(proxy, opts.agent);
            }
        }
        else if (opts.cert && opts.key) {
            // Configure client for mTLS:
            if (this.agentCache.has(opts.key)) {
                opts.agent = this.agentCache.get(opts.key);
            }
            else {
                opts.agent = new https_1.Agent({
                    cert: opts.cert,
                    key: opts.key,
                });
                this.agentCache.set(opts.key, opts.agent);
            }
        }
        return opts;
    }
    /**
     * By default, throw for any non-2xx status code
     * @param status status code from the HTTP response
     */
    validateStatus(status) {
        return status >= 200 && status < 300;
    }
    /**
     * Encode a set of key/value pars into a querystring format (?foo=bar&baz=boo)
     * @param params key value pars to encode
     */
    paramsSerializer(params) {
        return querystring_1.default.stringify(params);
    }
    translateResponse(opts, res, data) {
        // headers need to be converted from a map to an obj
        const headers = {};
        res.headers.forEach((value, key) => {
            headers[key] = value;
        });
        return {
            config: opts,
            data: data,
            headers,
            status: res.status,
            statusText: res.statusText,
            // XMLHttpRequestLike
            request: {
                responseURL: res.url,
            },
        };
    }
}
exports.Gaxios = Gaxios;
//# sourceMappingURL=gaxios.js.map

/***/ }),

/***/ "./node_modules/gtoken/node_modules/gaxios/build/src/index.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright 2018 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.request = exports.instance = exports.Gaxios = void 0;
const gaxios_1 = __webpack_require__("./node_modules/gtoken/node_modules/gaxios/build/src/gaxios.js");
Object.defineProperty(exports, "Gaxios", ({ enumerable: true, get: function () { return gaxios_1.Gaxios; } }));
var common_1 = __webpack_require__("./node_modules/gtoken/node_modules/gaxios/build/src/common.js");
Object.defineProperty(exports, "GaxiosError", ({ enumerable: true, get: function () { return common_1.GaxiosError; } }));
/**
 * The default instance used when the `request` method is directly
 * invoked.
 */
exports.instance = new gaxios_1.Gaxios();
/**
 * Make an HTTP request using the given options.
 * @param opts Options for the request
 */
async function request(opts) {
    return exports.instance.request(opts);
}
exports.request = request;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/gtoken/node_modules/gaxios/build/src/retry.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright 2018 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRetryConfig = void 0;
async function getRetryConfig(err) {
    var _a;
    let config = getConfig(err);
    if (!err || !err.config || (!config && !err.config.retry)) {
        return { shouldRetry: false };
    }
    config = config || {};
    config.currentRetryAttempt = config.currentRetryAttempt || 0;
    config.retry =
        config.retry === undefined || config.retry === null ? 3 : config.retry;
    config.httpMethodsToRetry = config.httpMethodsToRetry || [
        'GET',
        'HEAD',
        'PUT',
        'OPTIONS',
        'DELETE',
    ];
    config.noResponseRetries =
        config.noResponseRetries === undefined || config.noResponseRetries === null
            ? 2
            : config.noResponseRetries;
    // If this wasn't in the list of status codes where we want
    // to automatically retry, return.
    const retryRanges = [
        // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        // 1xx - Retry (Informational, request still processing)
        // 2xx - Do not retry (Success)
        // 3xx - Do not retry (Redirect)
        // 4xx - Do not retry (Client errors)
        // 429 - Retry ("Too Many Requests")
        // 5xx - Retry (Server errors)
        [100, 199],
        [429, 429],
        [500, 599],
    ];
    config.statusCodesToRetry = config.statusCodesToRetry || retryRanges;
    // Put the config back into the err
    err.config.retryConfig = config;
    // Determine if we should retry the request
    const shouldRetryFn = config.shouldRetry || shouldRetryRequest;
    if (!(await shouldRetryFn(err))) {
        return { shouldRetry: false, config: err.config };
    }
    // Calculate time to wait with exponential backoff.
    // If this is the first retry, look for a configured retryDelay.
    const retryDelay = config.currentRetryAttempt ? 0 : (_a = config.retryDelay) !== null && _a !== void 0 ? _a : 100;
    // Formula: retryDelay + ((2^c - 1 / 2) * 1000)
    const delay = retryDelay + ((Math.pow(2, config.currentRetryAttempt) - 1) / 2) * 1000;
    // We're going to retry!  Incremenent the counter.
    err.config.retryConfig.currentRetryAttempt += 1;
    // Create a promise that invokes the retry after the backOffDelay
    const backoff = new Promise(resolve => {
        setTimeout(resolve, delay);
    });
    // Notify the user if they added an `onRetryAttempt` handler
    if (config.onRetryAttempt) {
        config.onRetryAttempt(err);
    }
    // Return the promise in which recalls Gaxios to retry the request
    await backoff;
    return { shouldRetry: true, config: err.config };
}
exports.getRetryConfig = getRetryConfig;
/**
 * Determine based on config if we should retry the request.
 * @param err The GaxiosError passed to the interceptor.
 */
function shouldRetryRequest(err) {
    const config = getConfig(err);
    // node-fetch raises an AbortError if signaled:
    // https://github.com/bitinn/node-fetch#request-cancellation-with-abortsignal
    if (err.name === 'AbortError') {
        return false;
    }
    // If there's no config, or retries are disabled, return.
    if (!config || config.retry === 0) {
        return false;
    }
    // Check if this error has no response (ETIMEDOUT, ENOTFOUND, etc)
    if (!err.response &&
        (config.currentRetryAttempt || 0) >= config.noResponseRetries) {
        return false;
    }
    // Only retry with configured HttpMethods.
    if (!err.config.method ||
        config.httpMethodsToRetry.indexOf(err.config.method.toUpperCase()) < 0) {
        return false;
    }
    // If this wasn't in the list of status codes where we want
    // to automatically retry, return.
    if (err.response && err.response.status) {
        let isInRange = false;
        for (const [min, max] of config.statusCodesToRetry) {
            const status = err.response.status;
            if (status >= min && status <= max) {
                isInRange = true;
                break;
            }
        }
        if (!isInRange) {
            return false;
        }
    }
    // If we are out of retry attempts, return
    config.currentRetryAttempt = config.currentRetryAttempt || 0;
    if (config.currentRetryAttempt >= config.retry) {
        return false;
    }
    return true;
}
/**
 * Acquire the raxConfig object from an GaxiosError if available.
 * @param err The Gaxios error with a config object.
 */
function getConfig(err) {
    if (err && err.config && err.config.retryConfig) {
        return err.config.retryConfig;
    }
    return;
}
//# sourceMappingURL=retry.js.map

/***/ }),

/***/ "./node_modules/json-bigint/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var json_stringify = (__webpack_require__("./node_modules/json-bigint/lib/stringify.js").stringify);
var json_parse     = __webpack_require__("./node_modules/json-bigint/lib/parse.js");

module.exports = function(options) {
    return  {
        parse: json_parse(options),
        stringify: json_stringify
    }
};
//create the default method members with no options applied for backwards compatibility
module.exports.parse = json_parse();
module.exports.stringify = json_stringify;


/***/ }),

/***/ "./node_modules/json-bigint/lib/parse.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var BigNumber = null;

// regexpxs extracted from
// (c) BSD-3-Clause
// https://github.com/fastify/secure-json-parse/graphs/contributors and https://github.com/hapijs/bourne/graphs/contributors

const suspectProtoRx = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/;
const suspectConstructorRx = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;

/*
    json_parse.js
    2012-06-20

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    This file creates a json_parse function.
    During create you can (optionally) specify some behavioural switches

        require('json-bigint')(options)

            The optional options parameter holds switches that drive certain
            aspects of the parsing process:
            * options.strict = true will warn about duplicate-key usage in the json.
              The default (strict = false) will silently ignore those and overwrite
              values for keys that are in duplicate use.

    The resulting function follows this signature:
        json_parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = json_parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

    This is a reference implementation. You are free to copy, modify, or
    redistribute.

    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.
*/

/*members "", "\"", "\/", "\\", at, b, call, charAt, f, fromCharCode,
    hasOwnProperty, message, n, name, prototype, push, r, t, text
*/

var json_parse = function (options) {
  'use strict';

  // This is a function that can parse a JSON text, producing a JavaScript
  // data structure. It is a simple, recursive descent parser. It does not use
  // eval or regular expressions, so it can be used as a model for implementing
  // a JSON parser in other languages.

  // We are defining the function inside of another function to avoid creating
  // global variables.

  // Default options one can override by passing options to the parse()
  var _options = {
    strict: false, // not being strict means do not generate syntax errors for "duplicate key"
    storeAsString: false, // toggles whether the values should be stored as BigNumber (default) or a string
    alwaysParseAsBig: false, // toggles whether all numbers should be Big
    useNativeBigInt: false, // toggles whether to use native BigInt instead of bignumber.js
    protoAction: 'error',
    constructorAction: 'error',
  };

  // If there are options, then use them to override the default _options
  if (options !== undefined && options !== null) {
    if (options.strict === true) {
      _options.strict = true;
    }
    if (options.storeAsString === true) {
      _options.storeAsString = true;
    }
    _options.alwaysParseAsBig =
      options.alwaysParseAsBig === true ? options.alwaysParseAsBig : false;
    _options.useNativeBigInt =
      options.useNativeBigInt === true ? options.useNativeBigInt : false;

    if (typeof options.constructorAction !== 'undefined') {
      if (
        options.constructorAction === 'error' ||
        options.constructorAction === 'ignore' ||
        options.constructorAction === 'preserve'
      ) {
        _options.constructorAction = options.constructorAction;
      } else {
        throw new Error(
          `Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${options.constructorAction}`
        );
      }
    }

    if (typeof options.protoAction !== 'undefined') {
      if (
        options.protoAction === 'error' ||
        options.protoAction === 'ignore' ||
        options.protoAction === 'preserve'
      ) {
        _options.protoAction = options.protoAction;
      } else {
        throw new Error(
          `Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${options.protoAction}`
        );
      }
    }
  }

  var at, // The index of the current character
    ch, // The current character
    escapee = {
      '"': '"',
      '\\': '\\',
      '/': '/',
      b: '\b',
      f: '\f',
      n: '\n',
      r: '\r',
      t: '\t',
    },
    text,
    error = function (m) {
      // Call error when something is wrong.

      throw {
        name: 'SyntaxError',
        message: m,
        at: at,
        text: text,
      };
    },
    next = function (c) {
      // If a c parameter is provided, verify that it matches the current character.

      if (c && c !== ch) {
        error("Expected '" + c + "' instead of '" + ch + "'");
      }

      // Get the next character. When there are no more characters,
      // return the empty string.

      ch = text.charAt(at);
      at += 1;
      return ch;
    },
    number = function () {
      // Parse a number value.

      var number,
        string = '';

      if (ch === '-') {
        string = '-';
        next('-');
      }
      while (ch >= '0' && ch <= '9') {
        string += ch;
        next();
      }
      if (ch === '.') {
        string += '.';
        while (next() && ch >= '0' && ch <= '9') {
          string += ch;
        }
      }
      if (ch === 'e' || ch === 'E') {
        string += ch;
        next();
        if (ch === '-' || ch === '+') {
          string += ch;
          next();
        }
        while (ch >= '0' && ch <= '9') {
          string += ch;
          next();
        }
      }
      number = +string;
      if (!isFinite(number)) {
        error('Bad number');
      } else {
        if (BigNumber == null) BigNumber = __webpack_require__("./node_modules/bignumber.js/bignumber.mjs");
        //if (number > 9007199254740992 || number < -9007199254740992)
        // Bignumber has stricter check: everything with length > 15 digits disallowed
        if (string.length > 15)
          return _options.storeAsString
            ? string
            : _options.useNativeBigInt
            ? BigInt(string)
            : new BigNumber(string);
        else
          return !_options.alwaysParseAsBig
            ? number
            : _options.useNativeBigInt
            ? BigInt(number)
            : new BigNumber(number);
      }
    },
    string = function () {
      // Parse a string value.

      var hex,
        i,
        string = '',
        uffff;

      // When parsing for string values, we must look for " and \ characters.

      if (ch === '"') {
        var startAt = at;
        while (next()) {
          if (ch === '"') {
            if (at - 1 > startAt) string += text.substring(startAt, at - 1);
            next();
            return string;
          }
          if (ch === '\\') {
            if (at - 1 > startAt) string += text.substring(startAt, at - 1);
            next();
            if (ch === 'u') {
              uffff = 0;
              for (i = 0; i < 4; i += 1) {
                hex = parseInt(next(), 16);
                if (!isFinite(hex)) {
                  break;
                }
                uffff = uffff * 16 + hex;
              }
              string += String.fromCharCode(uffff);
            } else if (typeof escapee[ch] === 'string') {
              string += escapee[ch];
            } else {
              break;
            }
            startAt = at;
          }
        }
      }
      error('Bad string');
    },
    white = function () {
      // Skip whitespace.

      while (ch && ch <= ' ') {
        next();
      }
    },
    word = function () {
      // true, false, or null.

      switch (ch) {
        case 't':
          next('t');
          next('r');
          next('u');
          next('e');
          return true;
        case 'f':
          next('f');
          next('a');
          next('l');
          next('s');
          next('e');
          return false;
        case 'n':
          next('n');
          next('u');
          next('l');
          next('l');
          return null;
      }
      error("Unexpected '" + ch + "'");
    },
    value, // Place holder for the value function.
    array = function () {
      // Parse an array value.

      var array = [];

      if (ch === '[') {
        next('[');
        white();
        if (ch === ']') {
          next(']');
          return array; // empty array
        }
        while (ch) {
          array.push(value());
          white();
          if (ch === ']') {
            next(']');
            return array;
          }
          next(',');
          white();
        }
      }
      error('Bad array');
    },
    object = function () {
      // Parse an object value.

      var key,
        object = Object.create(null);

      if (ch === '{') {
        next('{');
        white();
        if (ch === '}') {
          next('}');
          return object; // empty object
        }
        while (ch) {
          key = string();
          white();
          next(':');
          if (
            _options.strict === true &&
            Object.hasOwnProperty.call(object, key)
          ) {
            error('Duplicate key "' + key + '"');
          }

          if (suspectProtoRx.test(key) === true) {
            if (_options.protoAction === 'error') {
              error('Object contains forbidden prototype property');
            } else if (_options.protoAction === 'ignore') {
              value();
            } else {
              object[key] = value();
            }
          } else if (suspectConstructorRx.test(key) === true) {
            if (_options.constructorAction === 'error') {
              error('Object contains forbidden constructor property');
            } else if (_options.constructorAction === 'ignore') {
              value();
            } else {
              object[key] = value();
            }
          } else {
            object[key] = value();
          }

          white();
          if (ch === '}') {
            next('}');
            return object;
          }
          next(',');
          white();
        }
      }
      error('Bad object');
    };

  value = function () {
    // Parse a JSON value. It could be an object, an array, a string, a number,
    // or a word.

    white();
    switch (ch) {
      case '{':
        return object();
      case '[':
        return array();
      case '"':
        return string();
      case '-':
        return number();
      default:
        return ch >= '0' && ch <= '9' ? number() : word();
    }
  };

  // Return the json_parse function. It will have access to all of the above
  // functions and variables.

  return function (source, reviver) {
    var result;

    text = source + '';
    at = 0;
    ch = ' ';
    result = value();
    white();
    if (ch) {
      error('Syntax error');
    }

    // If there is a reviver function, we recursively walk the new structure,
    // passing each name/value pair to the reviver function for possible
    // transformation, starting with a temporary root object that holds the result
    // in an empty key. If there is not a reviver function, we simply return the
    // result.

    return typeof reviver === 'function'
      ? (function walk(holder, key) {
          var k,
            v,
            value = holder[key];
          if (value && typeof value === 'object') {
            Object.keys(value).forEach(function (k) {
              v = walk(value, k);
              if (v !== undefined) {
                value[k] = v;
              } else {
                delete value[k];
              }
            });
          }
          return reviver.call(holder, key, value);
        })({ '': result }, '')
      : result;
  };
};

module.exports = json_parse;


/***/ }),

/***/ "./node_modules/json-bigint/lib/stringify.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var BigNumber = __webpack_require__("./node_modules/bignumber.js/bignumber.mjs");

/*
    json2.js
    2013-05-26

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON = module.exports;

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key],
            isBigNumber = value != null && (value instanceof BigNumber || BigNumber.isBigNumber(value));

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            if (isBigNumber) {
                return value;
            } else {
                return quote(value);
            }

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':
        case 'bigint':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                Object.keys(value).forEach(function(k) {
                    var v = str(k, value);
                    if (v) {
                        partial.push(quote(k) + (gap ? ': ' : ':') + v);
                    }
                });
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }
}());


/***/ }),

/***/ "./apps/api/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_service_1 = __webpack_require__("./apps/api/src/app/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
};
AppController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// check auth token middleware
const checkAuth_1 = __webpack_require__("./apps/api/src/middlewares/checkAuth.ts");
// modules
const recipes_module_1 = __webpack_require__("./apps/api/src/modules/recipes/recipes.module.ts");
const posts_module_1 = __webpack_require__("./apps/api/src/modules/posts/posts.module.ts");
const auth_module_1 = __webpack_require__("./apps/api/src/modules/auth/auth.module.ts");
const claps_module_1 = __webpack_require__("./apps/api/src/modules/claps/claps.module.ts");
const reviews_module_1 = __webpack_require__("./apps/api/src/modules/reviews/reviews.module.ts");
const recipes_comments_module_1 = __webpack_require__("./apps/api/src/modules/recipes-comments/recipes-comments.module.ts");
const users_module_1 = __webpack_require__("./apps/api/src/modules/users/users.module.ts");
const definitions_module_1 = __webpack_require__("./apps/api/src/modules/definitions/definitions.module.ts");
const favorites_module_1 = __webpack_require__("./apps/api/src/modules/favorites/favorites.module.ts");
const shopping_list_module_1 = __webpack_require__("./apps/api/src/modules/shopping-list/shopping-list.module.ts");
const files_module_1 = __webpack_require__("./apps/api/src/modules/files/files.module.ts");
const recipes_tags_module_1 = __webpack_require__("./apps/api/src/modules/recipes-tags/recipes-tags.module.ts");
// app controller & service
const app_controller_1 = __webpack_require__("./apps/api/src/app/app.controller.ts");
const app_service_1 = __webpack_require__("./apps/api/src/app/app.service.ts");
// trottler (rate limiter)
const core_1 = __webpack_require__("@nestjs/core");
const throttler_1 = __webpack_require__("@nestjs/throttler");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(checkAuth_1.CheckAuthMiddleware)
            .forRoutes('users', 'favorites', 'shopping-list', { path: 'recipes', method: common_1.RequestMethod.POST }, { path: 'recipes/:id', method: common_1.RequestMethod.DELETE }, { path: 'recipes/:id', method: common_1.RequestMethod.PATCH }, { path: 'recipes-comments', method: common_1.RequestMethod.POST }, { path: 'recipes/picture', method: common_1.RequestMethod.POST }, { path: 'reviews', method: common_1.RequestMethod.POST }, { path: 'reviews:id', method: common_1.RequestMethod.PATCH }, { path: 'claps', method: common_1.RequestMethod.POST }, { path: 'claps/check', method: common_1.RequestMethod.POST });
    }
};
AppModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            throttler_1.ThrottlerModule.forRoot({
                ttl: 10,
                limit: 5000,
            }),
            recipes_module_1.RecipesModule,
            posts_module_1.PostsModule,
            auth_module_1.AuthModule,
            claps_module_1.ClapsModule,
            reviews_module_1.ReviewsModule,
            recipes_comments_module_1.RecipesCommentsModule,
            users_module_1.UsersModule,
            definitions_module_1.DefinitionsModule,
            favorites_module_1.FavoritesModule,
            shopping_list_module_1.ShoppingListModule,
            files_module_1.FilesModule,
            recipes_tags_module_1.RecipesTagsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, { provide: core_1.APP_GUARD, useClass: throttler_1.ThrottlerGuard }],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AppService = class AppService {
};
AppService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/api/src/filters/http-exception.filter.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
};
HttpExceptionFilter = (0, tslib_1.__decorate)([
    (0, common_1.Catch)(common_1.HttpException)
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;


/***/ }),

/***/ "./apps/api/src/middlewares/checkAuth.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckAuthMiddleware = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const common_2 = __webpack_require__("@nestjs/common");
const jwt = (0, tslib_1.__importStar)(__webpack_require__("jsonwebtoken"));
let CheckAuthMiddleware = class CheckAuthMiddleware {
    use(req, res, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const token = req.headers.authorization
                ? req.headers.authorization.split(' ')[1]
                : null;
            const decoded = token
                ? jwt.verify(token, process.env['ACCESS_TOKEN_SECRET'])
                : null;
            if (!token || !decoded) {
                throw new common_2.HttpException('Unauthorized', common_2.HttpStatus.UNAUTHORIZED);
            }
            next();
        });
    }
};
CheckAuthMiddleware = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], CheckAuthMiddleware);
exports.CheckAuthMiddleware = CheckAuthMiddleware;


/***/ }),

/***/ "./apps/api/src/modules/auth/auth.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const register_module_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/register/register.module.ts");
const login_module_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/login/login.module.ts");
const updatePassword_module_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/updatePassword/updatePassword.module.ts");
const loginGoogle_module_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/loginGoogle/loginGoogle.module.ts");
let AuthModule = class AuthModule {
};
AuthModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [register_module_1.RegisterModule, login_module_1.LoginModule, updatePassword_module_1.UpdatePasswordModule, loginGoogle_module_1.LoginGoogleModule],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/loginGoogle/loginGoogle.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginGoogleController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const loginGoogle_service_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/loginGoogle/loginGoogle.service.ts");
const http_exception_filter_1 = __webpack_require__("./apps/api/src/filters/http-exception.filter.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const throttler_1 = __webpack_require__("@nestjs/throttler");
let LoginGoogleController = class LoginGoogleController {
    constructor(service) {
        this.service = service;
    }
    login(Param) {
        return this.service.login(Param);
    }
};
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The user has been successfully logged.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, throttler_1.Throttle)(3, 2),
    (0, common_1.Post)('/loginGoogle'),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], LoginGoogleController.prototype, "login", null);
LoginGoogleController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof loginGoogle_service_1.LoginGoogleService !== "undefined" && loginGoogle_service_1.LoginGoogleService) === "function" ? _a : Object])
], LoginGoogleController);
exports.LoginGoogleController = LoginGoogleController;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/loginGoogle/loginGoogle.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginGoogleModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const loginGoogle_service_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/loginGoogle/loginGoogle.service.ts");
const loginGoogle_controller_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/loginGoogle/loginGoogle.controller.ts");
let LoginGoogleModule = class LoginGoogleModule {
};
LoginGoogleModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [loginGoogle_controller_1.LoginGoogleController],
        providers: [loginGoogle_service_1.LoginGoogleService],
    })
], LoginGoogleModule);
exports.LoginGoogleModule = LoginGoogleModule;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/loginGoogle/loginGoogle.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginGoogleService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
const bcrypt = (0, tslib_1.__importStar)(__webpack_require__("bcrypt"));
const jwt_1 = __webpack_require__("./apps/api/src/utils/jwt.ts");
const common_2 = __webpack_require__("@nestjs/common");
const http_exception_filter_1 = __webpack_require__("./apps/api/src/filters/http-exception.filter.ts");
let LoginGoogleService = class LoginGoogleService {
    login(param) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const email = yield jwt_1.Jwt.verifyGoogleTOken(param.googleToken);
            if (email && typeof (email) === 'string') {
                const user = yield prisma_client_1.prisma.user.findUnique({
                    where: {
                        email,
                    },
                });
                //  if user not found
                if (!user) {
                    const nickname = this.randomNickname();
                    const password = this.randomPassword();
                    const user = yield prisma_client_1.prisma.user.create({
                        data: { email, nickname, password, avatar: 'avatar9' },
                    });
                    const accessToken = yield jwt_1.Jwt.signAccessToken(user);
                    return Object.assign(Object.assign({}, user), { accessToken });
                }
                const accessToken = yield jwt_1.Jwt.signAccessToken(user);
                return Object.assign(Object.assign({}, user), { accessToken });
            }
        });
    }
    randomNickname() {
        const prefixes = ['adorable', 'adventurous', 'aggressive', 'agreable', 'alert', 'alive', 'amused', 'angry', 'annoyed', 'anxious', 'arrogant', 'ashamed', 'attractive', 'average', 'awful', 'bad', 'beautiful', 'better', 'bewildered', 'black',
            'bloody', 'blue', 'blushing', 'bored', 'brainy', 'brave', 'breakable', 'bright', 'busy', 'calm', 'careful', 'cautious', 'charming', 'cheerful', 'clean', 'clear', 'clever', 'cloudy', 'clumsy', 'colorful', 'combative', 'comfortable', 'concerned', 'condemned', 'confused', 'cooperative', 'courageous', 'crazy', 'creepy', 'crowded', 'cruel', 'curious', 'cute', 'dangerous', 'dark', 'dead', 'defeated', 'defiant', 'delightful', 'depressed', 'determined', 'different', 'difficult', 'disgusted', 'distinct', 'disturbed', 'dizzy', 'doubtful', 'drab', 'dulleager', 'easy', 'elated', 'elegant', 'embarrassed', 'enchanting', 'encouraging', 'energetic', 'enthusiastic', 'envious', 'evil', 'excited', 'expensive', 'exuberant', 'fair', 'faithful', 'famous', 'fancy', 'fantastic', 'fierce', 'filthy', 'fine', 'foolish', 'fragile', 'frail', 'frantic', 'friendly', 'frightened', 'funny', 'gentle', 'gifted', 'glamorous', 'gleaming', 'glorious', 'good', 'gorgeous', 'graceful', 'grieving', 'grotesque', 'grumpy', 'handsome', 'happy', 'healthy', 'helpful', 'helpless', 'hilarious', 'homeless', 'homely', 'horrible', 'hungry', 'hurt', 'ill', 'important', 'impossible', 'inexpensive', 'innocent', 'inquisitive', 'itchy', 'jealous', 'jittery', 'jolly', 'joyous', 'kind', 'lazy', 'light', 'lively', 'lonely', 'long', 'lovely', 'lucky', 'magnificent', 'misty', 'modern', 'motionless', 'muddy', 'mushy', 'mysterious', 'nasty', 'naughty', 'nervous', 'nice', 'nutty', 'obedient', 'obnoxious', 'odd', 'old-fashioned', 'open', 'outrageous', 'outstanding', 'panicky', 'perfect', 'plain', 'pleasant', 'poised', 'poor', 'powerful', 'precious', 'prickly', 'proud', 'putrid', 'puzzled', 'quaint', 'real', 'relieved', 'repulsive', 'rich', 'scary', 'selfish', 'shiny', 'shy', 'silly', 'sleepy', 'smiling', 'smoggy', 'sore', 'sparkling', 'splendid', 'spotless', 'stormy', 'strange', 'stupid', 'successful', 'super', 'talented', 'tame', 'tasty', 'tender', 'tense', 'terrible', 'thankful', 'thoughtful', 'thoughtless', 'tired', 'tough', 'troubled', 'ugliest', 'ugly', 'uninterested', 'unsightly', 'unusual', 'upset', 'uptight', 'vast', 'victorious', 'vivacious', 'wandering', 'weary', 'wicked', 'wild', 'witty', 'worried', 'worrisome', 'wrong', 'zany', 'zealous'];
        const suffixes = ['Cow', 'Rabbit', 'Ducks', 'Shrimp', 'Pig', 'Goat', 'Crab', 'Deer', 'Bee', 'Sheep', 'Fish', 'Turkey', 'Dove', 'Chicken', 'Horse', 'Crow', 'Peacock', 'Dove', 'Sparrow', 'Goose', 'Stork', 'Pigeon', 'Turkey', 'Hawk', 'Eagle', 'Raven', 'Parrot', 'Flamingo', 'Seagull', 'Ostrich', 'Swallow', 'Penguin', 'Robin', 'Swan', 'Owl', 'Woodpecker', 'Squirrel', 'Dog', 'Chimpanzee', 'Ox', 'Lion', 'Panda', 'Walrus', 'Otter', 'Mouse', 'Kangaroo', 'Goat', 'Horse', 'Monkey', 'Cow', 'Koala', 'Mole', 'Elephant', 'Leopard', 'Hippopotamus', 'Giraffe', 'Fox', 'Coyote', 'Hedgehong', 'Sheep', 'Deer',
            'Camel', 'Starfish', 'Koala', 'Alligator', 'Owl', 'Tiger', 'Bear', 'Whale', 'Coyote', 'Chimpanzee', 'Raccoon', 'Lion', 'Wolf', 'Crocodile', 'Dolphin', 'Squirrel', 'Snake', 'Kangaroo', 'Hippopotamus', 'Elk', 'Fox', 'Gorilla', 'Bat', 'Hare', 'Toad', 'Frog', 'Deer', 'Rat', 'Badger', 'Lizard', 'Mole', 'Hedgehog', 'Otter', 'Reindeer', 'Vicuna'];
        const randomPrefixeIndex = Math.floor(Math.random() * (prefixes.length - 1 + 1) + 1);
        const randomPrefix = prefixes[randomPrefixeIndex];
        const randomSuffixeIndex = Math.floor(Math.random() * (suffixes.length - 1 + 1) + 1);
        const randomSuffixe = suffixes[randomSuffixeIndex];
        const nickname = randomPrefix.charAt(0).toUpperCase() + randomPrefix.slice(1) + randomSuffixe + Math.floor(Math.random() * (1337 - 1 + 1) + 1);
        return nickname;
    }
    randomPassword() {
        const password = Math.random().toString(36).slice(-7);
        return bcrypt.hashSync(password, 8);
    }
};
LoginGoogleService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, common_2.UseFilters)(new http_exception_filter_1.HttpExceptionFilter())
], LoginGoogleService);
exports.LoginGoogleService = LoginGoogleService;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/login/login.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const login_service_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/login/login.service.ts");
const http_exception_filter_1 = __webpack_require__("./apps/api/src/filters/http-exception.filter.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const throttler_1 = __webpack_require__("@nestjs/throttler");
let LoginController = class LoginController {
    constructor(service) {
        this.service = service;
    }
    login(Param) {
        return this.service.login(Param);
    }
};
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The user has been successfully logged.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, throttler_1.Throttle)(3, 2),
    (0, common_1.Post)('/login'),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], LoginController.prototype, "login", null);
LoginController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" ? _a : Object])
], LoginController);
exports.LoginController = LoginController;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/login/login.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const login_service_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/login/login.service.ts");
const login_controller_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/login/login.controller.ts");
let LoginModule = class LoginModule {
};
LoginModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [login_controller_1.LoginController],
        providers: [login_service_1.LoginService],
    })
], LoginModule);
exports.LoginModule = LoginModule;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/login/login.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
const bcrypt = (0, tslib_1.__importStar)(__webpack_require__("bcrypt"));
const jwt_1 = __webpack_require__("./apps/api/src/utils/jwt.ts");
const common_2 = __webpack_require__("@nestjs/common");
const http_exception_filter_1 = __webpack_require__("./apps/api/src/filters/http-exception.filter.ts");
let LoginService = class LoginService {
    login(param) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { email, password } = param;
            const user = yield prisma_client_1.prisma.user.findUnique({
                where: {
                    email,
                },
            });
            // if user not found or wrontg credentials
            if (!user || !bcrypt.compareSync(password, user.password)) {
                return { status: 404, message: 'Bad credentials' };
            }
            delete user.password;
            const accessToken = yield jwt_1.Jwt.signAccessToken(user);
            return Object.assign(Object.assign({}, user), { accessToken });
        });
    }
};
LoginService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, common_2.UseFilters)(new http_exception_filter_1.HttpExceptionFilter())
], LoginService);
exports.LoginService = LoginService;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/register/register.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const register_service_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/register/register.service.ts");
const http_exception_filter_1 = __webpack_require__("./apps/api/src/filters/http-exception.filter.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const throttler_1 = __webpack_require__("@nestjs/throttler");
let RegisterController = class RegisterController {
    constructor(service) {
        this.service = service;
    }
    register(Param) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.service.register(Param);
        });
    }
};
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The user has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, throttler_1.Throttle)(3, 2),
    (0, common_1.Post)('/register'),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RegisterController.prototype, "register", null);
RegisterController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof register_service_1.RegisterService !== "undefined" && register_service_1.RegisterService) === "function" ? _a : Object])
], RegisterController);
exports.RegisterController = RegisterController;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/register/register.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const register_service_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/register/register.service.ts");
const register_controller_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/register/register.controller.ts");
let RegisterModule = class RegisterModule {
};
RegisterModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [register_controller_1.RegisterController],
        providers: [register_service_1.RegisterService],
    })
], RegisterModule);
exports.RegisterModule = RegisterModule;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/register/register.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
const http_errors_1 = (0, tslib_1.__importDefault)(__webpack_require__("http-errors"));
const bcrypt = (0, tslib_1.__importStar)(__webpack_require__("bcrypt"));
const jwt_1 = __webpack_require__("./apps/api/src/utils/jwt.ts");
const common_2 = __webpack_require__("@nestjs/common");
const http_exception_filter_1 = __webpack_require__("./apps/api/src/filters/http-exception.filter.ts");
let RegisterService = class RegisterService {
    /**
     * registers users
     * @param param
     * @returns created user
     */
    register(param) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { email, nickname, passwordConfirm } = param;
            let { password } = param;
            if (password === passwordConfirm) {
                password = bcrypt.hashSync(password, 8);
                // create new user with a default avatar
                const user = yield prisma_client_1.prisma.user.create({
                    data: { email, nickname, password, avatar: 'avatar9' },
                });
                const accessToken = yield jwt_1.Jwt.signAccessToken(user);
                return Object.assign(Object.assign({}, user), { accessToken });
            }
            else {
                throw new http_errors_1.default.NotFound('Password and confirmation are not identical');
            }
        });
    }
};
RegisterService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, common_2.UseFilters)(new http_exception_filter_1.HttpExceptionFilter())
], RegisterService);
exports.RegisterService = RegisterService;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/updatePassword/updatePassword.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePasswordController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const updatePassword_service_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/updatePassword/updatePassword.service.ts");
const http_exception_filter_1 = __webpack_require__("./apps/api/src/filters/http-exception.filter.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const throttler_1 = __webpack_require__("@nestjs/throttler");
let UpdatePasswordController = class UpdatePasswordController {
    constructor(service) {
        this.service = service;
    }
    updatePassword(id, passwords) {
        return this.service.updatePassword(+id, passwords);
    }
};
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The password has been successfully updated.',
    }),
    (0, throttler_1.Throttle)(3, 2),
    (0, common_1.Post)('/pwupdate/:id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UpdatePasswordController.prototype, "updatePassword", null);
UpdatePasswordController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    (0, common_1.UseFilters)(new http_exception_filter_1.HttpExceptionFilter()),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof updatePassword_service_1.UpdatePasswordService !== "undefined" && updatePassword_service_1.UpdatePasswordService) === "function" ? _a : Object])
], UpdatePasswordController);
exports.UpdatePasswordController = UpdatePasswordController;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/updatePassword/updatePassword.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePasswordModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const updatePassword_service_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/updatePassword/updatePassword.service.ts");
const updatePassword_controller_1 = __webpack_require__("./apps/api/src/modules/auth/useCases/updatePassword/updatePassword.controller.ts");
let UpdatePasswordModule = class UpdatePasswordModule {
};
UpdatePasswordModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [updatePassword_controller_1.UpdatePasswordController],
        providers: [updatePassword_service_1.UpdatePasswordService],
    })
], UpdatePasswordModule);
exports.UpdatePasswordModule = UpdatePasswordModule;


/***/ }),

/***/ "./apps/api/src/modules/auth/useCases/updatePassword/updatePassword.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePasswordService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
const bcrypt = (0, tslib_1.__importStar)(__webpack_require__("bcrypt"));
const jwt_1 = __webpack_require__("./apps/api/src/utils/jwt.ts");
const common_2 = __webpack_require__("@nestjs/common");
const http_exception_filter_1 = __webpack_require__("./apps/api/src/filters/http-exception.filter.ts");
let UpdatePasswordService = class UpdatePasswordService {
    updatePassword(id, passwords) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { oldPassword, password } = passwords;
            const user = yield prisma_client_1.prisma.user.findUnique({
                where: {
                    id,
                },
            });
            // if user not found or wrontg credentials
            if (!user || !bcrypt.compareSync(oldPassword, user.password)) {
                return { status: 404, message: 'Bad credentials' };
            }
            else {
                const updatedUser = yield prisma_client_1.prisma.user.update({
                    where: {
                        id: id,
                    },
                    data: {
                        // hash new password
                        password: bcrypt.hashSync(password, 8),
                    },
                });
                const accessToken = yield jwt_1.Jwt.signAccessToken(updatedUser);
                return Object.assign(Object.assign({}, updatedUser), { accessToken });
            }
        });
    }
};
UpdatePasswordService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, common_2.UseFilters)(new http_exception_filter_1.HttpExceptionFilter())
], UpdatePasswordService);
exports.UpdatePasswordService = UpdatePasswordService;


/***/ }),

/***/ "./apps/api/src/modules/claps/claps.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClapsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// use cases modules
const check_module_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/check/check.module.ts");
const create_module_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/create/create.module.ts");
const count_module_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/getUserCount/count.module.ts");
let ClapsModule = class ClapsModule {
};
ClapsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [check_module_1.CheckModule, create_module_1.CreateModule, count_module_1.CountModule],
    })
], ClapsModule);
exports.ClapsModule = ClapsModule;


/***/ }),

/***/ "./apps/api/src/modules/claps/useCases/check/check.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckController = void 0;
const tslib_1 = __webpack_require__("tslib");
// nest libs & utils
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
//service
const check_service_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/check/check.service.ts");
// schema
const client_1 = __webpack_require__("@prisma/client");
let CheckController = class CheckController {
    constructor(service) {
        this.service = service;
    }
    /**
     * check if user already clapped the author
     * @param clap
     * @returns a boolean
     */
    check(clap) {
        return this.service.check(clap);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/check'),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof client_1.Clap !== "undefined" && client_1.Clap) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CheckController.prototype, "check", null);
CheckController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Claps'),
    (0, common_1.Controller)('claps'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof check_service_1.CheckService !== "undefined" && check_service_1.CheckService) === "function" ? _b : Object])
], CheckController);
exports.CheckController = CheckController;


/***/ }),

/***/ "./apps/api/src/modules/claps/useCases/check/check.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const check_service_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/check/check.service.ts");
const check_controller_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/check/check.controller.ts");
let CheckModule = class CheckModule {
};
CheckModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [check_controller_1.CheckController],
        providers: [check_service_1.CheckService],
    })
], CheckModule);
exports.CheckModule = CheckModule;


/***/ }),

/***/ "./apps/api/src/modules/claps/useCases/check/check.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CheckService = class CheckService {
    /**
     * check if user already clapped the author
     * @param clap
     * @returns a boolean
     */
    check(clap) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const clapExists = yield prisma_client_1.prisma.clap.findFirst({
                where: {
                    clapperId: +clap.clapperId,
                    clappedId: +clap.clappedId,
                },
            });
            if (clapExists) {
                return true;
            }
            else {
                false;
            }
        });
    }
};
CheckService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], CheckService);
exports.CheckService = CheckService;


/***/ }),

/***/ "./apps/api/src/modules/claps/useCases/create/create.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/create/create.service.ts");
// import { CreateClapDto } from './dto/create-clap.dto';
// import { UpdateClapDto } from './dto/update-clap.dto';
const client_1 = __webpack_require__("@prisma/client");
const swagger_1 = __webpack_require__("@nestjs/swagger");
let CreateController = class CreateController {
    constructor(service) {
        this.service = service;
    }
    create(clap) {
        return this.service.create(clap);
    }
};
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The clap has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof client_1.Clap !== "undefined" && client_1.Clap) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Claps'),
    (0, common_1.Controller)('claps'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _b : Object])
], CreateController);
exports.CreateController = CreateController;


/***/ }),

/***/ "./apps/api/src/modules/claps/useCases/create/create.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/create/create.service.ts");
const create_controller_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/create/create.controller.ts");
let CreateModule = class CreateModule {
};
CreateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService],
    })
], CreateModule);
exports.CreateModule = CreateModule;


/***/ }),

/***/ "./apps/api/src/modules/claps/useCases/create/create.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// import { CreateClapDto } from './dto/create-clap.dto';
// import { UpdateClapDto } from './dto/update-clap.dto';
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CreateService = class CreateService {
    create(clap) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newClap = yield prisma_client_1.prisma.clap.create({
                data: {
                    clapperId: +clap.clapperId,
                    clappedId: +clap.clappedId,
                },
            });
            return newClap;
        });
    }
};
CreateService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], CreateService);
exports.CreateService = CreateService;


/***/ }),

/***/ "./apps/api/src/modules/claps/useCases/getUserCount/count.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const count_service_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/getUserCount/count.service.ts");
let CountController = class CountController {
    constructor(service) {
        this.service = service;
    }
    /**
     * get claps count of user
     * @param id
     * @returns number
     */
    count(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.service.count(id);
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)('/count/:id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CountController.prototype, "count", null);
CountController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('claps'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof count_service_1.CountService !== "undefined" && count_service_1.CountService) === "function" ? _a : Object])
], CountController);
exports.CountController = CountController;


/***/ }),

/***/ "./apps/api/src/modules/claps/useCases/getUserCount/count.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const count_service_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/getUserCount/count.service.ts");
const count_controller_1 = __webpack_require__("./apps/api/src/modules/claps/useCases/getUserCount/count.controller.ts");
let CountModule = class CountModule {
};
CountModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [count_controller_1.CountController],
        providers: [count_service_1.CountService],
    })
], CountModule);
exports.CountModule = CountModule;


/***/ }),

/***/ "./apps/api/src/modules/claps/useCases/getUserCount/count.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CountService = class CountService {
    /**
     * gets claps count of user
     * @param id
     * @returns number
     */
    count(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const count = yield prisma_client_1.prisma.clap.count({
                where: {
                    clappedId: +id,
                },
            });
            return count;
        });
    }
};
CountService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], CountService);
exports.CountService = CountService;


/***/ }),

/***/ "./apps/api/src/modules/definitions/definitions.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefinitionsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// use cases modules
const create_module_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/create/create.module.ts");
const delete_module_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/delete/delete.module.ts");
const find_module_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/find/find.module.ts");
const findAll_module_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/findAll/findAll.module.ts");
const update_module_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/update/update.module.ts");
let DefinitionsModule = class DefinitionsModule {
};
DefinitionsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            create_module_1.CreateModule,
            delete_module_1.DeleteModule,
            find_module_1.FindModule,
            findAll_module_1.FindAllModule,
            update_module_1.UpdateModule,
        ],
    })
], DefinitionsModule);
exports.DefinitionsModule = DefinitionsModule;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/create/create.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
// service
const create_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/create/create.service.ts");
// schema
const client_1 = __webpack_require__("@prisma/client");
let CreateController = class CreateController {
    constructor(service) {
        this.service = service;
    }
    /**
     * Create a new definition
     * @param definition
     * @returns definition
     */
    create(definition) {
        return this.service.create(definition);
    }
};
(0, tslib_1.__decorate)([
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The user has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof client_1.Definition !== "undefined" && client_1.Definition) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Definitions'),
    (0, common_1.Controller)('definitions'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _b : Object])
], CreateController);
exports.CreateController = CreateController;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/create/create.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/create/create.service.ts");
const create_controller_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/create/create.controller.ts");
let CreateModule = class CreateModule {
};
CreateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService],
    })
], CreateModule);
exports.CreateModule = CreateModule;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/create/create.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CreateService = class CreateService {
    create(definition) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newDefinition = yield prisma_client_1.prisma.definition.create({
                data: Object.assign({}, definition),
            });
            return newDefinition;
        });
    }
};
CreateService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], CreateService);
exports.CreateService = CreateService;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/delete/delete.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const delete_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/delete/delete.service.ts");
let DeleteController = class DeleteController {
    constructor(service) {
        this.service = service;
    }
    /**
     * delete a definition based on id
     * @param id
     * @returns
     */
    remove(id) {
        return this.service.delete(+id);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Delete)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], DeleteController.prototype, "remove", null);
DeleteController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('Delete'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof delete_service_1.DeleteService !== "undefined" && delete_service_1.DeleteService) === "function" ? _a : Object])
], DeleteController);
exports.DeleteController = DeleteController;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/delete/delete.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const delete_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/delete/delete.service.ts");
const delete_controller_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/delete/delete.controller.ts");
let DeleteModule = class DeleteModule {
};
DeleteModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [delete_controller_1.DeleteController],
        providers: [delete_service_1.DeleteService],
    })
], DeleteModule);
exports.DeleteModule = DeleteModule;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/delete/delete.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let DeleteService = class DeleteService {
    delete(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            yield prisma_client_1.prisma.definition.delete({
                where: {
                    id,
                },
            });
        });
    }
};
DeleteService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], DeleteService);
exports.DeleteService = DeleteService;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/findAll/findAll.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/findAll/findAll.service.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
let FindAllController = class FindAllController {
    constructor(service) {
        this.service = service;
    }
    /**
     * gets all definitions ordered by labels alphabetical order
     * @returns an array of definitions
     */
    findAll() {
        return this.service.findAll();
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindAllController.prototype, "findAll", null);
FindAllController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Definitions'),
    (0, common_1.Controller)('definitions'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof findAll_service_1.FindAllService !== "undefined" && findAll_service_1.FindAllService) === "function" ? _a : Object])
], FindAllController);
exports.FindAllController = FindAllController;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/findAll/findAll.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/findAll/findAll.service.ts");
const findAll_controller_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/findAll/findAll.controller.ts");
let FindAllModule = class FindAllModule {
};
FindAllModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findAll_controller_1.FindAllController],
        providers: [findAll_service_1.FindAllService],
    })
], FindAllModule);
exports.FindAllModule = FindAllModule;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/findAll/findAll.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindAllService = class FindAllService {
    /**
     * gets all definitions ordered by labels alphabetical order
     * @returns an array of definitions
     */
    findAll() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const definitions = yield prisma_client_1.prisma.definition.findMany({
                orderBy: {
                    label: 'asc',
                },
            });
            return definitions;
        });
    }
};
FindAllService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], FindAllService);
exports.FindAllService = FindAllService;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/find/find.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
// service
const find_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/find/find.service.ts");
let FindController = class FindController {
    constructor(service) {
        this.service = service;
    }
    /**
     * find a definition based on id
     * @param id
     * @returns definition
     */
    find(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.service.find(+id);
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindController.prototype, "find", null);
FindController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Definitions'),
    (0, common_1.Controller)('definitions'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof find_service_1.FindService !== "undefined" && find_service_1.FindService) === "function" ? _a : Object])
], FindController);
exports.FindController = FindController;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/find/find.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const find_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/find/find.service.ts");
const find_controller_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/find/find.controller.ts");
let FindModule = class FindModule {
};
FindModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [find_controller_1.FindController],
        providers: [find_service_1.FindService],
    })
], FindModule);
exports.FindModule = FindModule;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/find/find.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindService = class FindService {
    /**
     * finds a definition based on id
     * @param id
     * @returns definition
     */
    find(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const definition = yield prisma_client_1.prisma.definition.findFirst({
                where: {
                    id,
                },
            });
            return definition;
        });
    }
};
FindService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], FindService);
exports.FindService = FindService;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/update/update.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const update_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/update/update.service.ts");
// prisma schema
const client_1 = __webpack_require__("@prisma/client");
let UpdateController = class UpdateController {
    constructor(service) {
        this.service = service;
    }
    /**
     * update a definition based on id
     * @param id
     * @param definition
     * @returns updated definition
     */
    update(id, definition) {
        return this.service.update(+id, definition);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Patch)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, typeof (_a = typeof client_1.Definition !== "undefined" && client_1.Definition) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UpdateController.prototype, "update", null);
UpdateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('Update'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof update_service_1.UpdateService !== "undefined" && update_service_1.UpdateService) === "function" ? _b : Object])
], UpdateController);
exports.UpdateController = UpdateController;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/update/update.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const update_service_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/update/update.service.ts");
const update_controller_1 = __webpack_require__("./apps/api/src/modules/definitions/useCases/update/update.controller.ts");
let UpdateModule = class UpdateModule {
};
UpdateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [update_controller_1.UpdateController],
        providers: [update_service_1.UpdateService],
    })
], UpdateModule);
exports.UpdateModule = UpdateModule;


/***/ }),

/***/ "./apps/api/src/modules/definitions/useCases/update/update.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let UpdateService = class UpdateService {
    /**
     * update a definition based on id
     * @param id
     * @param definition
     * @returns updated definition
     */
    update(id, definition) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const updatedDefinition = yield prisma_client_1.prisma.definition.update({
                where: {
                    id,
                },
                data: Object.assign({}, definition),
            });
            return updatedDefinition;
        });
    }
};
UpdateService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], UpdateService);
exports.UpdateService = UpdateService;


/***/ }),

/***/ "./apps/api/src/modules/favorites/favorites.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FavoritesModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_module_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/findAll/findAll.module.ts");
const findAllFiltered_module_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/findAllFiltered/findAllFiltered.module.ts");
const create_module_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/create/create.module.ts");
const delete_module_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/delete/delete.module.ts");
let FavoritesModule = class FavoritesModule {
};
FavoritesModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [findAll_module_1.FindAllModule, findAllFiltered_module_1.FindAllFilteredModule, create_module_1.CreateModule, delete_module_1.DeleteModule],
    })
], FavoritesModule);
exports.FavoritesModule = FavoritesModule;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/create/create.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const create_service_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/create/create.service.ts");
// prisma schema
const client_1 = __webpack_require__("@prisma/client");
let CreateController = class CreateController {
    constructor(service) {
        this.service = service;
    }
    create(favorite) {
        return this.service.create(favorite);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof client_1.RecipeFavorite !== "undefined" && client_1.RecipeFavorite) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('favorites'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _b : Object])
], CreateController);
exports.CreateController = CreateController;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/create/create.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/create/create.service.ts");
const create_controller_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/create/create.controller.ts");
let CreateModule = class CreateModule {
};
CreateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService],
    })
], CreateModule);
exports.CreateModule = CreateModule;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/create/create.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CreateService = class CreateService {
    create(favorite) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newFavorite = yield prisma_client_1.prisma.recipeFavorite.create({
                data: Object.assign({}, favorite),
            });
            if (newFavorite) {
                return newFavorite;
            }
        });
    }
};
CreateService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], CreateService);
exports.CreateService = CreateService;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/delete/delete.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const delete_service_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/delete/delete.service.ts");
let DeleteController = class DeleteController {
    constructor(service) {
        this.service = service;
    }
    delete(id) {
        return this.service.delete(+id);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Delete)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], DeleteController.prototype, "delete", null);
DeleteController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('favorites'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof delete_service_1.DeleteService !== "undefined" && delete_service_1.DeleteService) === "function" ? _a : Object])
], DeleteController);
exports.DeleteController = DeleteController;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/delete/delete.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const delete_service_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/delete/delete.service.ts");
const delete_controller_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/delete/delete.controller.ts");
let DeleteModule = class DeleteModule {
};
DeleteModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [delete_controller_1.DeleteController],
        providers: [delete_service_1.DeleteService],
    })
], DeleteModule);
exports.DeleteModule = DeleteModule;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/delete/delete.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let DeleteService = class DeleteService {
    delete(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const deletedFavorite = yield prisma_client_1.prisma.recipeFavorite.delete({
                where: {
                    id,
                },
            });
            return deletedFavorite;
        });
    }
};
DeleteService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], DeleteService);
exports.DeleteService = DeleteService;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/findAllFiltered/findAllFiltered.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllFilteredController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
// service
const findAllFiltered_service_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/findAllFiltered/findAllFiltered.service.ts");
let FindAllFilteredController = class FindAllFilteredController {
    constructor(service) {
        this.service = service;
    }
    /**
     * find all favorite recipes bases on user id, with filters
     * @param id (user)
     * @param filters
     * @returns an array of RecipeFavorite
     */
    findAllWithFilters(id, filters) {
        return this.service.findAllFiltered(+id, filters);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindAllFilteredController.prototype, "findAllWithFilters", null);
FindAllFilteredController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Favorites'),
    (0, common_1.Controller)('favorites'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof findAllFiltered_service_1.FindAllFilteredService !== "undefined" && findAllFiltered_service_1.FindAllFilteredService) === "function" ? _a : Object])
], FindAllFilteredController);
exports.FindAllFilteredController = FindAllFilteredController;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/findAllFiltered/findAllFiltered.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllFilteredModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAllFiltered_service_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/findAllFiltered/findAllFiltered.service.ts");
const findAllFiltered_controller_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/findAllFiltered/findAllFiltered.controller.ts");
let FindAllFilteredModule = class FindAllFilteredModule {
};
FindAllFilteredModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findAllFiltered_controller_1.FindAllFilteredController],
        providers: [findAllFiltered_service_1.FindAllFilteredService],
    })
], FindAllFilteredModule);
exports.FindAllFilteredModule = FindAllFilteredModule;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/findAllFiltered/findAllFiltered.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllFilteredService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindAllFilteredService = class FindAllFilteredService {
    findAllFiltered(id, filters) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const favorites = yield prisma_client_1.prisma.recipeFavorite.findMany({
                where: {
                    userId: id,
                    recipe: {
                        AND: [
                            {
                                difficulty: filters.difficulty ? filters.difficulty : undefined,
                            },
                            {
                                recipeTags: {
                                    some: {
                                        tag: {
                                            name: filters.tag ? filters.tag : undefined,
                                        },
                                    },
                                },
                            },
                            {
                                avgReview: filters.rating ? +filters.rating : undefined,
                            },
                        ],
                    },
                },
                include: {
                    recipe: {
                        include: {
                            author: true,
                            recipeInstructions: true,
                            recipeNotes: true,
                            requiredIngredients: true,
                            requiredUstensils: true,
                            recipeTags: {
                                include: {
                                    tag: true,
                                },
                            },
                            recipeComments: {
                                include: {
                                    author: true,
                                },
                            },
                            recipeReviews: true,
                            recipeFavorites: true,
                        },
                    },
                },
            });
            return favorites;
        });
    }
};
FindAllFilteredService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], FindAllFilteredService);
exports.FindAllFilteredService = FindAllFilteredService;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/findAll/findAll.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
// service
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/findAll/findAll.service.ts");
let FindAllController = class FindAllController {
    constructor(service) {
        this.service = service;
    }
    /**
     * find all favorite recipes bases on user id
     * @param id string
     * @returns an array of favorites
     */
    findAll(id) {
        return this.service.findAll(+id);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindAllController.prototype, "findAll", null);
FindAllController = (0, tslib_1.__decorate)([
    (0, swagger_1.ApiTags)('Favorites'),
    (0, common_1.Controller)('favorites'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof findAll_service_1.FindAllService !== "undefined" && findAll_service_1.FindAllService) === "function" ? _a : Object])
], FindAllController);
exports.FindAllController = FindAllController;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/findAll/findAll.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/findAll/findAll.service.ts");
const findAll_controller_1 = __webpack_require__("./apps/api/src/modules/favorites/useCases/findAll/findAll.controller.ts");
let FindAllModule = class FindAllModule {
};
FindAllModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findAll_controller_1.FindAllController],
        providers: [findAll_service_1.FindAllService],
    })
], FindAllModule);
exports.FindAllModule = FindAllModule;


/***/ }),

/***/ "./apps/api/src/modules/favorites/useCases/findAll/findAll.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindAllService = class FindAllService {
    /**
     * find all favorite recipes bases on user id
     * @param id number
     * @returns an array of favorites
     */
    findAll(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const favorites = yield prisma_client_1.prisma.recipeFavorite.findMany({
                where: {
                    userId: id,
                },
                include: {
                    recipe: {
                        include: {
                            author: true,
                            recipeInstructions: true,
                            recipeNotes: true,
                            requiredIngredients: true,
                            requiredUstensils: true,
                            recipeTags: {
                                include: {
                                    tag: true,
                                },
                            },
                            recipeComments: {
                                include: {
                                    author: true,
                                },
                            },
                            recipeReviews: true,
                            recipeFavorites: true,
                        },
                    },
                },
            });
            return favorites;
        });
    }
};
FindAllService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], FindAllService);
exports.FindAllService = FindAllService;


/***/ }),

/***/ "./apps/api/src/modules/files/files.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilesModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// use cases modules
const getPicture_module_1 = __webpack_require__("./apps/api/src/modules/files/useCases/getPicture/getPicture.module.ts");
let FilesModule = class FilesModule {
};
FilesModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [getPicture_module_1.GetPictureModule],
    })
], FilesModule);
exports.FilesModule = FilesModule;


/***/ }),

/***/ "./apps/api/src/modules/files/useCases/getPicture/getPicture.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetPictureController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const fs_1 = __webpack_require__("fs");
const path_1 = __webpack_require__("path");
let GetPictureController = class GetPictureController {
    /**
     * Find a file by name and return it as a streamable file
     * @param {string} name - The name of the file to be returned.
     * @param res - The response object.
     * @returns A StreamableFile object.
     */
    find(name, res) {
        // return this.service.find(name);
        const fileExists = (0, fs_1.existsSync)((0, path_1.join)(__dirname, 'public/' + name));
        let file;
        // const file = createReadStream(join(__dirname, 'public/' + name));
        if (fileExists) {
            file = (0, fs_1.createReadStream)((0, path_1.join)(__dirname, 'public/' + name));
        }
        else {
            file = (0, fs_1.createReadStream)((0, path_1.join)(__dirname, 'public/nopicture.jpg'));
        }
        res.set({
            'Content-Type': 'image/jpeg',
            'Content-Disposition': 'attachment; filename="picture.jpeg"',
        });
        return new common_1.StreamableFile(file);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':name'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('name')),
    (0, tslib_1.__param)(1, (0, common_1.Response)({ passthrough: true })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", typeof (_a = typeof common_1.StreamableFile !== "undefined" && common_1.StreamableFile) === "function" ? _a : Object)
], GetPictureController.prototype, "find", null);
GetPictureController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('getpicture')
], GetPictureController);
exports.GetPictureController = GetPictureController;


/***/ }),

/***/ "./apps/api/src/modules/files/useCases/getPicture/getPicture.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetPictureModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const getPicture_controller_1 = __webpack_require__("./apps/api/src/modules/files/useCases/getPicture/getPicture.controller.ts");
let GetPictureModule = class GetPictureModule {
};
GetPictureModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [getPicture_controller_1.GetPictureController],
    })
], GetPictureModule);
exports.GetPictureModule = GetPictureModule;


/***/ }),

/***/ "./apps/api/src/modules/posts/posts.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_module_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/create/create.module.ts");
const find_module_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/find/find.module.ts");
const findAll_module_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/findAll/findAll.module.ts");
const findLast_module_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/findLast/findLast.module.ts");
const update_module_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/update/update.module.ts");
let PostsModule = class PostsModule {
};
PostsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            create_module_1.CreateModule,
            findLast_module_1.FindLastModule,
            find_module_1.FindModule,
            findAll_module_1.FindAllModule,
            update_module_1.UpdateModule,
        ],
    })
], PostsModule);
exports.PostsModule = PostsModule;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/create/create.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/create/create.service.ts");
const client_1 = __webpack_require__("@prisma/client");
let CreateController = class CreateController {
    constructor(service) {
        this.service = service;
    }
    create(post) {
        return this.service.create(post);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof client_1.Post !== "undefined" && client_1.Post) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('posts'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _b : Object])
], CreateController);
exports.CreateController = CreateController;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/create/create.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/create/create.service.ts");
const create_controller_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/create/create.controller.ts");
let CreateModule = class CreateModule {
};
CreateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService],
    })
], CreateModule);
exports.CreateModule = CreateModule;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/create/create.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CreateService = class CreateService {
    create(post) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newPost = yield prisma_client_1.prisma.post.create({
                data: {
                    title: post.title,
                    content: post.content,
                    picture: post.picture,
                    published: false,
                    authorId: post.authorId,
                },
            });
            return newPost;
        });
    }
};
CreateService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], CreateService);
exports.CreateService = CreateService;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/findAll/findAll.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/findAll/findAll.service.ts");
let FindAllController = class FindAllController {
    constructor(service) {
        this.service = service;
    }
    /**
     * get all posts
     * @returns an array of Post
     */
    findAll() {
        return this.service.findAll();
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindAllController.prototype, "findAll", null);
FindAllController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('posts'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof findAll_service_1.FindAllService !== "undefined" && findAll_service_1.FindAllService) === "function" ? _a : Object])
], FindAllController);
exports.FindAllController = FindAllController;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/findAll/findAll.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/findAll/findAll.service.ts");
const findAll_controller_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/findAll/findAll.controller.ts");
let FindAllModule = class FindAllModule {
};
FindAllModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findAll_controller_1.FindAllController],
        providers: [findAll_service_1.FindAllService],
    })
], FindAllModule);
exports.FindAllModule = FindAllModule;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/findAll/findAll.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindAllService = class FindAllService {
    /**
     * get all posts
     * @returns an array of Post
     */
    findAll() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const posts = yield prisma_client_1.prisma.post.findMany({
                include: {
                    author: true,
                },
            });
            return posts;
        });
    }
};
FindAllService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], FindAllService);
exports.FindAllService = FindAllService;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/findLast/findLast.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindLastController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const findLast_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/findLast/findLast.service.ts");
let FindLastController = class FindLastController {
    constructor(service) {
        this.service = service;
    }
    /**
     * find last post created
     * @returns post
     */
    findLast() {
        return this.service.findLast();
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)('/last'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindLastController.prototype, "findLast", null);
FindLastController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('posts'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof findLast_service_1.FindLastService !== "undefined" && findLast_service_1.FindLastService) === "function" ? _a : Object])
], FindLastController);
exports.FindLastController = FindLastController;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/findLast/findLast.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindLastModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findLast_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/findLast/findLast.service.ts");
const findLast_controller_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/findLast/findLast.controller.ts");
let FindLastModule = class FindLastModule {
};
FindLastModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findLast_controller_1.FindLastController],
        providers: [findLast_service_1.FindLastService],
    })
], FindLastModule);
exports.FindLastModule = FindLastModule;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/findLast/findLast.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindLastService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindLastService = class FindLastService {
    /**
     * find last post created
     * @returns post
     */
    findLast() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const post = yield prisma_client_1.prisma.post.findFirst({
                orderBy: {
                    createdAt: 'desc',
                },
                include: {
                    author: true,
                },
            });
            return post;
        });
    }
};
FindLastService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], FindLastService);
exports.FindLastService = FindLastService;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/find/find.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const find_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/find/find.service.ts");
let FindController = class FindController {
    constructor(service) {
        this.service = service;
    }
    /**
     * finds a recipe based on id
     * @param id
     * @returns recipe
     */
    find(id) {
        return this.service.find(+id);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindController.prototype, "find", null);
FindController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('posts'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof find_service_1.FindService !== "undefined" && find_service_1.FindService) === "function" ? _a : Object])
], FindController);
exports.FindController = FindController;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/find/find.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const find_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/find/find.service.ts");
const find_controller_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/find/find.controller.ts");
let FindModule = class FindModule {
};
FindModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [find_controller_1.FindController],
        providers: [find_service_1.FindService],
    })
], FindModule);
exports.FindModule = FindModule;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/find/find.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindService = class FindService {
    find(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const post = yield prisma_client_1.prisma.post.findUnique({
                where: {
                    id: id,
                },
                include: {
                    author: true,
                },
            });
            return post;
        });
    }
};
FindService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], FindService);
exports.FindService = FindService;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/update/update.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const update_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/update/update.service.ts");
const client_1 = __webpack_require__("@prisma/client");
let UpdateController = class UpdateController {
    constructor(service) {
        this.service = service;
    }
    /**
     * update a post based on id
     * @param id
     * @param post
     * @returns updated post
     */
    update(id, post) {
        return this.service.update(+id, post);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Patch)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, typeof (_a = typeof client_1.Post !== "undefined" && client_1.Post) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UpdateController.prototype, "update", null);
UpdateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('posts'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof update_service_1.UpdateService !== "undefined" && update_service_1.UpdateService) === "function" ? _b : Object])
], UpdateController);
exports.UpdateController = UpdateController;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/update/update.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const update_service_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/update/update.service.ts");
const update_controller_1 = __webpack_require__("./apps/api/src/modules/posts/useCases/update/update.controller.ts");
let UpdateModule = class UpdateModule {
};
UpdateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [update_controller_1.UpdateController],
        providers: [update_service_1.UpdateService],
    })
], UpdateModule);
exports.UpdateModule = UpdateModule;


/***/ }),

/***/ "./apps/api/src/modules/posts/useCases/update/update.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let UpdateService = class UpdateService {
    /**
     * update a post based on id
     * @param id
     * @param post
     * @returns updated post
     */
    update(id, post) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const updatedPost = yield prisma_client_1.prisma.post.update({
                where: {
                    id: id,
                },
                data: post,
            });
            return updatedPost;
        });
    }
};
UpdateService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], UpdateService);
exports.UpdateService = UpdateService;


/***/ }),

/***/ "./apps/api/src/modules/recipes-comments/recipes-comments.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecipesCommentsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_module_1 = __webpack_require__("./apps/api/src/modules/recipes-comments/useCases/create.module.ts");
let RecipesCommentsModule = class RecipesCommentsModule {
};
RecipesCommentsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [create_module_1.CreateModule],
    })
], RecipesCommentsModule);
exports.RecipesCommentsModule = RecipesCommentsModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes-comments/useCases/create.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const create_service_1 = __webpack_require__("./apps/api/src/modules/recipes-comments/useCases/create.service.ts");
// schema
const client_1 = __webpack_require__("@prisma/client");
let CreateController = class CreateController {
    constructor(service) {
        this.service = service;
    }
    /**
     * create a new comment
     * @param comment
     * @returns new comment
     */
    create(comment) {
        return this.service.create(comment);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof client_1.RecipeComment !== "undefined" && client_1.RecipeComment) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes-comments'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _b : Object])
], CreateController);
exports.CreateController = CreateController;


/***/ }),

/***/ "./apps/api/src/modules/recipes-comments/useCases/create.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/recipes-comments/useCases/create.service.ts");
const create_controller_1 = __webpack_require__("./apps/api/src/modules/recipes-comments/useCases/create.controller.ts");
let CreateModule = class CreateModule {
};
CreateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService],
    })
], CreateModule);
exports.CreateModule = CreateModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes-comments/useCases/create.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CreateService = class CreateService {
    /**
     * create a new comment
     * @param comment
     * @returns new comment
     */
    create(comment) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newComment = yield prisma_client_1.prisma.recipeComment.create({
                data: Object.assign({}, comment),
            });
            return newComment;
        });
    }
};
CreateService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], CreateService);
exports.CreateService = CreateService;


/***/ }),

/***/ "./apps/api/src/modules/recipes-tags/recipes-tags.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecipesTagsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_module_1 = __webpack_require__("./apps/api/src/modules/recipes-tags/useCases/findAll/findAll.module.ts");
let RecipesTagsModule = class RecipesTagsModule {
};
RecipesTagsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [findAll_module_1.FindAllModule],
    })
], RecipesTagsModule);
exports.RecipesTagsModule = RecipesTagsModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes-tags/useCases/findAll/findAll.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/recipes-tags/useCases/findAll/findAll.service.ts");
let FindAllController = class FindAllController {
    constructor(service) {
        this.service = service;
    }
    /**
     * find all recipe tags options
     * @returns an array of tags categories including different labels
     */
    findAll() {
        return this.service.findAll();
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], FindAllController.prototype, "findAll", null);
FindAllController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('tags'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof findAll_service_1.FindAllService !== "undefined" && findAll_service_1.FindAllService) === "function" ? _b : Object])
], FindAllController);
exports.FindAllController = FindAllController;


/***/ }),

/***/ "./apps/api/src/modules/recipes-tags/useCases/findAll/findAll.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/recipes-tags/useCases/findAll/findAll.service.ts");
const findAll_controller_1 = __webpack_require__("./apps/api/src/modules/recipes-tags/useCases/findAll/findAll.controller.ts");
let FindAllModule = class FindAllModule {
};
FindAllModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findAll_controller_1.FindAllController],
        providers: [findAll_service_1.FindAllService],
    })
], FindAllModule);
exports.FindAllModule = FindAllModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes-tags/useCases/findAll/findAll.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindAllService = class FindAllService {
    findAll() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const tags = yield prisma_client_1.prisma.recipeTagCategory.findMany({
                include: {
                    RecipeTagLabels: true,
                },
            });
            return tags;
        });
    }
};
FindAllService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], FindAllService);
exports.FindAllService = FindAllService;


/***/ }),

/***/ "./apps/api/src/modules/recipes/recipes.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecipesModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// use cases modules
const authorCount_module_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/authorCount/authorCount.module.ts");
const create_module_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/create/create.module.ts");
const delete_module_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/delete/delete.module.ts");
const find_module_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/find/find.module.ts");
const findAll_module_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAll/findAll.module.ts");
const findAllFiltered_module_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAllFiltered/findAllFiltered.module.ts");
const findLast_module_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findLast/findLast.module.ts");
const update_module_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/update/update.module.ts");
const findAllNamed_module_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAllNamed/findAllNamed.module.ts");
let RecipesModule = class RecipesModule {
};
RecipesModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            authorCount_module_1.AuthorCountModule,
            create_module_1.CreateModule,
            delete_module_1.DeleteModule,
            findLast_module_1.FindLastModule,
            findAll_module_1.FindAllModule,
            findAllFiltered_module_1.FindAllFilteredModule,
            update_module_1.UpdateModule,
            find_module_1.FindModule,
            findAllNamed_module_1.FindAllNamedModule,
        ],
    })
], RecipesModule);
exports.RecipesModule = RecipesModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/authorCount/authorCount.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorCountController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const authorCount_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/authorCount/authorCount.service.ts");
let AuthorCountController = class AuthorCountController {
    constructor(service) {
        this.service = service;
    }
    /**
     * get recipe count based on user id
     * @param id
     * @returns number
     */
    getAuthorCount(id) {
        return this.service.getAuthorCount(id);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)('authorcount/:id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AuthorCountController.prototype, "getAuthorCount", null);
AuthorCountController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof authorCount_service_1.AuthorCountService !== "undefined" && authorCount_service_1.AuthorCountService) === "function" ? _a : Object])
], AuthorCountController);
exports.AuthorCountController = AuthorCountController;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/authorCount/authorCount.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorCountModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const authorCount_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/authorCount/authorCount.service.ts");
const authorCount_controller_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/authorCount/authorCount.controller.ts");
let AuthorCountModule = class AuthorCountModule {
};
AuthorCountModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [authorCount_controller_1.AuthorCountController],
        providers: [authorCount_service_1.AuthorCountService],
    })
], AuthorCountModule);
exports.AuthorCountModule = AuthorCountModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/authorCount/authorCount.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorCountService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// utils
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let AuthorCountService = class AuthorCountService {
    /**
     * get recipe count based on user id
     * @param authorId
     * @returns number
     */
    getAuthorCount(authorId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const count = yield prisma_client_1.prisma.recipe.count({
                where: {
                    authorId: +authorId,
                },
            });
            return count;
        });
    }
};
AuthorCountService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], AuthorCountService);
exports.AuthorCountService = AuthorCountService;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/create/create.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const platform_express_1 = __webpack_require__("@nestjs/platform-express");
const create_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/create/create.service.ts");
const multer_1 = __webpack_require__("multer");
const path_1 = __webpack_require__("path");
const client_1 = __webpack_require__("@prisma/client");
let CreateController = class CreateController {
    constructor(service) {
        this.service = service;
    }
    create(recipe) {
        return this.service.create(recipe);
    }
    /**
     * The function takes a picture as a parameter, and then returns the result of the storePicture
     * function in the service
     * @param picture - Express.Multer.File
     */
    storePicture(picture) {
        return this.service.storePicture(picture);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof client_1.Recipe !== "undefined" && client_1.Recipe) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CreateController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/picture')
    /* A decorator that intercepts the file and stores it in the public folder. */
    ,
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('picture', {
        storage: (0, multer_1.diskStorage)({
            destination: __dirname + '/public',
            filename: (req, file, cb) => {
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                return cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            },
        }),
    })),
    (0, tslib_1.__param)(0, (0, common_1.UploadedFile)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof Express !== "undefined" && (_b = Express.Multer) !== void 0 && _b.File) === "function" ? _c : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CreateController.prototype, "storePicture", null);
CreateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_d = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _d : Object])
], CreateController);
exports.CreateController = CreateController;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/create/create.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/create/create.service.ts");
const create_controller_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/create/create.controller.ts");
let CreateModule = class CreateModule {
};
CreateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService],
    })
], CreateModule);
exports.CreateModule = CreateModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/create/create.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CreateService = class CreateService {
    create(recipe) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newRecipe = yield prisma_client_1.prisma.recipe.create({
                data: {
                    author: { connect: { id: recipe.authorId } },
                    name: recipe.name,
                    picture: recipe.picture || null,
                    difficulty: recipe.difficulty,
                    cookTime: recipe.cookTime,
                    serves: recipe.serves,
                    description: recipe.description,
                    unit: recipe.unit,
                    requiredIngredients: {
                        create: [...recipe.requiredIngredients],
                    },
                    recipeInstructions: {
                        create: [...recipe.recipeInstructions],
                    },
                    recipeNotes: {
                        create: [...recipe.recipeNotes],
                    },
                    recipeTags: {
                        create: [...recipe.recipeTags],
                    },
                },
            });
            return newRecipe;
        });
    }
    storePicture(picture) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return picture;
        });
    }
};
CreateService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], CreateService);
exports.CreateService = CreateService;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/delete/delete.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const delete_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/delete/delete.service.ts");
let DeleteController = class DeleteController {
    constructor(service) {
        this.service = service;
    }
    /**
     * delete a recipe based on id
     * @param id
     * @returns removed recipe
     */
    delete(id) {
        return this.service.delete(+id);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Delete)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], DeleteController.prototype, "delete", null);
DeleteController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof delete_service_1.DeleteService !== "undefined" && delete_service_1.DeleteService) === "function" ? _a : Object])
], DeleteController);
exports.DeleteController = DeleteController;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/delete/delete.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const delete_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/delete/delete.service.ts");
const delete_controller_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/delete/delete.controller.ts");
let DeleteModule = class DeleteModule {
};
DeleteModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [delete_controller_1.DeleteController],
        providers: [delete_service_1.DeleteService],
    })
], DeleteModule);
exports.DeleteModule = DeleteModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/delete/delete.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let DeleteService = class DeleteService {
    delete(id) {
        return prisma_client_1.prisma.recipe.delete({
            where: {
                id: id,
            },
        });
    }
};
DeleteService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], DeleteService);
exports.DeleteService = DeleteService;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findAllFiltered/findAllFiltered.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllFilteredController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAllFiltered_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAllFiltered/findAllFiltered.service.ts");
let FindAllFilteredController = class FindAllFilteredController {
    constructor(service) {
        this.service = service;
    }
    /**
     * return all recipes based on filters
     * @param filters
     * @returns an array of Recipe
     */
    findAllWithFilters(filters) {
        return this.service.findAllFiltered(filters);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)('/filters'),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindAllFilteredController.prototype, "findAllWithFilters", null);
FindAllFilteredController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof findAllFiltered_service_1.FindAllFilteredService !== "undefined" && findAllFiltered_service_1.FindAllFilteredService) === "function" ? _a : Object])
], FindAllFilteredController);
exports.FindAllFilteredController = FindAllFilteredController;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findAllFiltered/findAllFiltered.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllFilteredModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAllFiltered_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAllFiltered/findAllFiltered.service.ts");
const findAllFiltered_controller_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAllFiltered/findAllFiltered.controller.ts");
let FindAllFilteredModule = class FindAllFilteredModule {
};
FindAllFilteredModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findAllFiltered_controller_1.FindAllFilteredController],
        providers: [findAllFiltered_service_1.FindAllFilteredService],
    })
], FindAllFilteredModule);
exports.FindAllFilteredModule = FindAllFilteredModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findAllFiltered/findAllFiltered.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllFilteredService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindAllFilteredService = class FindAllFilteredService {
    /**
     * return all recipes based on filters
     * @param filters
     * @returns an array of Recipe
     */
    findAllFiltered(filters) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const recipes = yield prisma_client_1.prisma.recipe.findMany({
                where: {
                    AND: [
                        {
                            difficulty: filters.difficulty ? filters.difficulty : undefined,
                        },
                        {
                            recipeTags: {
                                some: {
                                    tag: {
                                        name: filters.tag ? filters.tag : undefined,
                                    },
                                },
                            },
                        },
                        {
                            avgReview: filters.rating ? +filters.rating : undefined,
                        },
                    ],
                },
                include: {
                    author: true,
                    recipeInstructions: true,
                    recipeNotes: true,
                    requiredIngredients: true,
                    requiredUstensils: true,
                    recipeTags: {
                        include: {
                            tag: true,
                        },
                    },
                    recipeComments: {
                        include: {
                            author: true,
                        },
                    },
                    recipeReviews: true,
                    recipeFavorites: true,
                },
            });
            return recipes;
        });
    }
};
FindAllFilteredService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], FindAllFilteredService);
exports.FindAllFilteredService = FindAllFilteredService;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findAllNamed/findAllNamed.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllNamedController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAllNamed_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAllNamed/findAllNamed.service.ts");
let FindAllNamedController = class FindAllNamedController {
    constructor(service) {
        this.service = service;
    }
    /**
     * return all recipes based on filters
     * @param filters
     * @returns an array of Recipe
     */
    findAllWithFilters(name) {
        return this.service.findAllNamed(name);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)('/name/:name'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('name')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindAllNamedController.prototype, "findAllWithFilters", null);
FindAllNamedController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof findAllNamed_service_1.FindAllNamedService !== "undefined" && findAllNamed_service_1.FindAllNamedService) === "function" ? _a : Object])
], FindAllNamedController);
exports.FindAllNamedController = FindAllNamedController;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findAllNamed/findAllNamed.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllNamedModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAllNamed_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAllNamed/findAllNamed.service.ts");
const findAllNamed_controller_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAllNamed/findAllNamed.controller.ts");
let FindAllNamedModule = class FindAllNamedModule {
};
FindAllNamedModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findAllNamed_controller_1.FindAllNamedController],
        providers: [findAllNamed_service_1.FindAllNamedService],
    })
], FindAllNamedModule);
exports.FindAllNamedModule = FindAllNamedModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findAllNamed/findAllNamed.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllNamedService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindAllNamedService = class FindAllNamedService {
    /**
     * Find all recipes that have a name that contains the given string
     * @param {string} name - The name of the recipe.
     * @returns An array of Recipe objects.
     */
    findAllNamed(name) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const recipes = yield prisma_client_1.prisma.recipe.findMany({
                where: {
                    name: {
                        contains: name,
                    },
                },
                include: {
                    author: true,
                    recipeInstructions: true,
                    recipeNotes: true,
                    requiredIngredients: true,
                    requiredUstensils: true,
                    recipeTags: {
                        include: {
                            tag: true,
                        },
                    },
                    recipeComments: {
                        include: {
                            author: true,
                        },
                    },
                    recipeReviews: true,
                    recipeFavorites: true,
                },
            });
            return recipes;
        });
    }
};
FindAllNamedService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], FindAllNamedService);
exports.FindAllNamedService = FindAllNamedService;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findAll/findAll.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAll/findAll.service.ts");
let FindAllController = class FindAllController {
    constructor(service) {
        this.service = service;
    }
    /**
     * find all recipes
     * @returns an array of Recipe
     */
    findAll() {
        return this.service.findAll();
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindAllController.prototype, "findAll", null);
FindAllController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof findAll_service_1.FindAllService !== "undefined" && findAll_service_1.FindAllService) === "function" ? _a : Object])
], FindAllController);
exports.FindAllController = FindAllController;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findAll/findAll.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAll/findAll.service.ts");
const findAll_controller_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findAll/findAll.controller.ts");
let FindAllModule = class FindAllModule {
};
FindAllModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findAll_controller_1.FindAllController],
        providers: [findAll_service_1.FindAllService],
    })
], FindAllModule);
exports.FindAllModule = FindAllModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findAll/findAll.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindAllService = class FindAllService {
    findAll() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const recipes = yield prisma_client_1.prisma.recipe.findMany({
                include: {
                    author: true,
                    recipeInstructions: true,
                    recipeNotes: true,
                    requiredIngredients: true,
                    requiredUstensils: true,
                    recipeTags: {
                        include: {
                            tag: true,
                        },
                    },
                    recipeComments: {
                        include: {
                            author: true,
                        },
                    },
                    recipeReviews: true,
                    recipeFavorites: true,
                },
            });
            return recipes;
        });
    }
};
FindAllService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], FindAllService);
exports.FindAllService = FindAllService;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findLast/findLast.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindLastController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findLast_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findLast/findLast.service.ts");
let FindLastController = class FindLastController {
    constructor(service) {
        this.service = service;
    }
    /**
     * return the 3 last recipes created
     * @returns an array of Recipe
     */
    findLast() {
        return this.service.findLast();
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)('/last'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], FindLastController.prototype, "findLast", null);
FindLastController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof findLast_service_1.FindLastService !== "undefined" && findLast_service_1.FindLastService) === "function" ? _b : Object])
], FindLastController);
exports.FindLastController = FindLastController;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findLast/findLast.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindLastModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findLast_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findLast/findLast.service.ts");
const findLast_controller_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/findLast/findLast.controller.ts");
let FindLastModule = class FindLastModule {
};
FindLastModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findLast_controller_1.FindLastController],
        providers: [findLast_service_1.FindLastService],
    })
], FindLastModule);
exports.FindLastModule = FindLastModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/findLast/findLast.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindLastService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindLastService = class FindLastService {
    /**
     * return last 3 FindLast posted
     * @returns an array of Recipe
     */
    findLast() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const recipes = yield prisma_client_1.prisma.recipe.findMany({
                orderBy: {
                    createdAt: 'desc',
                },
                take: 3,
                include: {
                    author: true,
                    recipeInstructions: true,
                    recipeNotes: true,
                    requiredIngredients: true,
                    requiredUstensils: true,
                    recipeTags: {
                        include: {
                            tag: true,
                        },
                    },
                    recipeComments: {
                        include: {
                            author: true,
                        },
                        orderBy: {
                            createdAt: 'desc',
                        },
                    },
                    recipeReviews: true,
                    recipeFavorites: true,
                },
            });
            return recipes;
        });
    }
};
FindLastService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], FindLastService);
exports.FindLastService = FindLastService;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/find/find.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const find_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/find/find.service.ts");
let FindController = class FindController {
    constructor(service) {
        this.service = service;
    }
    /**
     * finds a recipe based on id
     * @param id
     * @returns recipe
     */
    find(id) {
        return this.service.find(+id);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindController.prototype, "find", null);
FindController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof find_service_1.FindService !== "undefined" && find_service_1.FindService) === "function" ? _a : Object])
], FindController);
exports.FindController = FindController;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/find/find.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const find_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/find/find.service.ts");
const find_controller_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/find/find.controller.ts");
let FindModule = class FindModule {
};
FindModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [find_controller_1.FindController],
        providers: [find_service_1.FindService],
    })
], FindModule);
exports.FindModule = FindModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/find/find.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindService = class FindService {
    find(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const recipe = yield prisma_client_1.prisma.recipe.findUnique({
                where: {
                    id: id,
                },
                include: {
                    author: true,
                    recipeInstructions: true,
                    recipeNotes: true,
                    requiredIngredients: true,
                    requiredUstensils: true,
                    recipeTags: {
                        include: {
                            tag: true,
                        },
                    },
                    recipeComments: {
                        include: {
                            author: true,
                        },
                        orderBy: {
                            createdAt: 'desc',
                        },
                    },
                    recipeReviews: true,
                    recipeFavorites: true,
                },
            });
            return recipe;
        });
    }
};
FindService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], FindService);
exports.FindService = FindService;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/update/update.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const update_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/update/update.service.ts");
const client_1 = __webpack_require__("@prisma/client");
let UpdateController = class UpdateController {
    constructor(service) {
        this.service = service;
    }
    /**
     * update a recipe based on id
     * @param id
     * @param recipe
     * @returns updated recipe
     */
    update(id, recipe) {
        return this.service.update(+id, recipe);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Patch)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, typeof (_a = typeof client_1.Recipe !== "undefined" && client_1.Recipe) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UpdateController.prototype, "update", null);
UpdateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('recipes'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof update_service_1.UpdateService !== "undefined" && update_service_1.UpdateService) === "function" ? _b : Object])
], UpdateController);
exports.UpdateController = UpdateController;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/update/update.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const update_service_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/update/update.service.ts");
const update_controller_1 = __webpack_require__("./apps/api/src/modules/recipes/useCases/update/update.controller.ts");
let UpdateModule = class UpdateModule {
};
UpdateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [update_controller_1.UpdateController],
        providers: [update_service_1.UpdateService],
    })
], UpdateModule);
exports.UpdateModule = UpdateModule;


/***/ }),

/***/ "./apps/api/src/modules/recipes/useCases/update/update.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let UpdateService = class UpdateService {
    /**
     * update a recipe based on id
     * @param id
     * @param recipe
     * @returns updated recipe
     */
    update(id, recipe) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const updatedRecipe = prisma_client_1.prisma.recipe.update({
                where: {
                    id: id,
                },
                data: Object.assign({}, recipe),
            });
            return updatedRecipe;
        });
    }
};
UpdateService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], UpdateService);
exports.UpdateService = UpdateService;


/***/ }),

/***/ "./apps/api/src/modules/reviews/reviews.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReviewsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const check_module_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/check/check.module.ts");
const update_module_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/update/update.module.ts");
const create_module_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/create/create.module.ts");
let ReviewsModule = class ReviewsModule {
};
ReviewsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [create_module_1.CreateModule, update_module_1.UpdateModule, check_module_1.CheckModule],
    })
], ReviewsModule);
exports.ReviewsModule = ReviewsModule;


/***/ }),

/***/ "./apps/api/src/modules/reviews/useCases/check/check.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const check_service_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/check/check.service.ts");
let CheckController = class CheckController {
    constructor(service) {
        this.service = service;
    }
    /**
     * check if user already reviewed a recipe
     * @param recipeId
     * @param userId
     * @returns review
     */
    check(recipeId, userId) {
        return this.service.check(recipeId, userId);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)('/check/:recipeId/:userId'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('recipeId')),
    (0, tslib_1.__param)(1, (0, common_1.Param)('userId')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CheckController.prototype, "check", null);
CheckController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('reviews'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof check_service_1.CheckService !== "undefined" && check_service_1.CheckService) === "function" ? _a : Object])
], CheckController);
exports.CheckController = CheckController;


/***/ }),

/***/ "./apps/api/src/modules/reviews/useCases/check/check.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const check_service_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/check/check.service.ts");
const check_controller_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/check/check.controller.ts");
let CheckModule = class CheckModule {
};
CheckModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [check_controller_1.CheckController],
        providers: [check_service_1.CheckService],
    })
], CheckModule);
exports.CheckModule = CheckModule;


/***/ }),

/***/ "./apps/api/src/modules/reviews/useCases/check/check.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CheckService = class CheckService {
    /**
     * check if user already reviewed a recipe
     * @param recipeId
     * @param userId
     * @returns review
     */
    check(recipeId, userId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const review = yield prisma_client_1.prisma.recipeReview.findFirst({
                where: {
                    recipeId: +recipeId,
                    authorId: +userId,
                },
            });
            return review;
        });
    }
};
CheckService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], CheckService);
exports.CheckService = CheckService;


/***/ }),

/***/ "./apps/api/src/modules/reviews/useCases/create/create.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const create_service_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/create/create.service.ts");
// schemas
const client_1 = __webpack_require__("@prisma/client");
let CreateController = class CreateController {
    constructor(service) {
        this.service = service;
    }
    /**
     * create new review on recipe
     * @param review
     * @returns new review
     */
    create(review) {
        return this.service.create(review);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof client_1.RecipeReview !== "undefined" && client_1.RecipeReview) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('reviews'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _b : Object])
], CreateController);
exports.CreateController = CreateController;


/***/ }),

/***/ "./apps/api/src/modules/reviews/useCases/create/create.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/create/create.service.ts");
const create_controller_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/create/create.controller.ts");
let CreateModule = class CreateModule {
};
CreateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService],
    })
], CreateModule);
exports.CreateModule = CreateModule;


/***/ }),

/***/ "./apps/api/src/modules/reviews/useCases/create/create.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CreateService = class CreateService {
    create(review) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const newReview = yield prisma_client_1.prisma.recipeReview.create({
                data: Object.assign({}, review),
            });
            return newReview;
        });
    }
};
CreateService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], CreateService);
exports.CreateService = CreateService;


/***/ }),

/***/ "./apps/api/src/modules/reviews/useCases/update/update.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const update_service_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/update/update.service.ts");
// schemas
const client_1 = __webpack_require__("@prisma/client");
let UpdateController = class UpdateController {
    constructor(service) {
        this.service = service;
    }
    /**
     * update a review based on id
     * @param id
     * @param review
     * @returns updated review
     */
    update(id, review) {
        return this.service.update(+id, review);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Patch)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, typeof (_a = typeof client_1.RecipeReview !== "undefined" && client_1.RecipeReview) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UpdateController.prototype, "update", null);
UpdateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('reviews'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof update_service_1.UpdateService !== "undefined" && update_service_1.UpdateService) === "function" ? _b : Object])
], UpdateController);
exports.UpdateController = UpdateController;


/***/ }),

/***/ "./apps/api/src/modules/reviews/useCases/update/update.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const update_service_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/update/update.service.ts");
const update_controller_1 = __webpack_require__("./apps/api/src/modules/reviews/useCases/update/update.controller.ts");
let UpdateModule = class UpdateModule {
};
UpdateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [update_controller_1.UpdateController],
        providers: [update_service_1.UpdateService],
    })
], UpdateModule);
exports.UpdateModule = UpdateModule;


/***/ }),

/***/ "./apps/api/src/modules/reviews/useCases/update/update.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let UpdateService = class UpdateService {
    /**
     * update a review based on id
     * @param id
     * @param review
     * @returns updated review
     */
    update(id, review) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const updatedReview = yield prisma_client_1.prisma.recipeReview.update({
                where: {
                    id: id,
                },
                data: Object.assign({}, review),
            });
            return updatedReview;
        });
    }
};
UpdateService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], UpdateService);
exports.UpdateService = UpdateService;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/shopping-list.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShoppingListModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_module_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/create/create.module.ts");
const findAll_module_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/findAll/findAll.module.ts");
const deleteAll_module_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/deleteAll/deleteAll.module.ts");
const delete_module_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/delete/delete.module.ts");
let ShoppingListModule = class ShoppingListModule {
};
ShoppingListModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [create_module_1.CreateModule, findAll_module_1.FindAllModule, deleteAll_module_1.DeleteAllModule, delete_module_1.DeleteModule],
    })
], ShoppingListModule);
exports.ShoppingListModule = ShoppingListModule;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/create/create.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const create_service_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/create/create.service.ts");
let CreateController = class CreateController {
    constructor(service) {
        this.service = service;
    }
    /**
     * create a new comment
     * @param comment
     * @returns new comment
     */
    create(shoppinglist) {
        return this.service.create(shoppinglist);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], CreateController.prototype, "create", null);
CreateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('shopping-list'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof create_service_1.CreateService !== "undefined" && create_service_1.CreateService) === "function" ? _a : Object])
], CreateController);
exports.CreateController = CreateController;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/create/create.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const create_service_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/create/create.service.ts");
const create_controller_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/create/create.controller.ts");
let CreateModule = class CreateModule {
};
CreateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [create_controller_1.CreateController],
        providers: [create_service_1.CreateService],
    })
], CreateModule);
exports.CreateModule = CreateModule;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/create/create.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let CreateService = class CreateService {
    /**
     * create a new comment
     * @param comment
     * @returns new comment
     */
    create(shoppinglist) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const list = {
                recipeId: shoppinglist.recipeId,
                userId: +shoppinglist.userId,
                shoppingListItems: {
                    create: [...shoppinglist.ingredients],
                },
            };
            const newList = yield prisma_client_1.prisma.shoppingList.create({ data: list });
            return newList;
        });
    }
};
CreateService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], CreateService);
exports.CreateService = CreateService;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/deleteAll/deleteAll.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteAllController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const deleteAll_service_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/deleteAll/deleteAll.service.ts");
let DeleteAllController = class DeleteAllController {
    constructor(service) {
        this.service = service;
    }
    deleteAll(id) {
        return this.service.deleteAll(id);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Delete)('all/:id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], DeleteAllController.prototype, "deleteAll", null);
DeleteAllController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('shopping-list'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof deleteAll_service_1.DeleteAllService !== "undefined" && deleteAll_service_1.DeleteAllService) === "function" ? _a : Object])
], DeleteAllController);
exports.DeleteAllController = DeleteAllController;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/deleteAll/deleteAll.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteAllModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const deleteAll_service_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/deleteAll/deleteAll.service.ts");
const deleteAll_controller_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/deleteAll/deleteAll.controller.ts");
let DeleteAllModule = class DeleteAllModule {
};
DeleteAllModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [deleteAll_controller_1.DeleteAllController],
        providers: [deleteAll_service_1.DeleteAllService],
    })
], DeleteAllModule);
exports.DeleteAllModule = DeleteAllModule;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/deleteAll/deleteAll.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteAllService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let DeleteAllService = class DeleteAllService {
    /**
     * Delete all shopping lists and their items for a given user
     * @param {number} userId - The id of the user whose shopping lists you want to delete.
     */
    deleteAll(userId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const shoppingLists = yield prisma_client_1.prisma.shoppingList.findMany({
                where: {
                    userId: +userId,
                },
            });
            if (shoppingLists) {
                // delete shopping lists items first
                for (const list of shoppingLists) {
                    const count = yield prisma_client_1.prisma.shoppingListItem.deleteMany({
                        where: {
                            shoppingListId: +list.id,
                        },
                    });
                    // then delete list
                    if (count) {
                        yield prisma_client_1.prisma.shoppingList.delete({
                            where: {
                                id: +list.id,
                            },
                        });
                    }
                }
            }
            // check if all lists successfully deleted
            const checkLists = yield prisma_client_1.prisma.shoppingList.findMany({
                where: {
                    userId: +userId,
                },
            });
            if (checkLists.length === 0) {
                return { res: 'success' };
            }
        });
    }
};
DeleteAllService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], DeleteAllService);
exports.DeleteAllService = DeleteAllService;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/delete/delete.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const delete_service_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/delete/delete.service.ts");
let DeleteController = class DeleteController {
    constructor(service) {
        this.service = service;
    }
    delete(id) {
        return this.service.delete(+id);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Delete)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], DeleteController.prototype, "delete", null);
DeleteController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('shopping-list'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof delete_service_1.DeleteService !== "undefined" && delete_service_1.DeleteService) === "function" ? _a : Object])
], DeleteController);
exports.DeleteController = DeleteController;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/delete/delete.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const delete_service_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/delete/delete.service.ts");
const delete_controller_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/delete/delete.controller.ts");
let DeleteModule = class DeleteModule {
};
DeleteModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [delete_controller_1.DeleteController],
        providers: [delete_service_1.DeleteService],
    })
], DeleteModule);
exports.DeleteModule = DeleteModule;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/delete/delete.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let DeleteService = class DeleteService {
    delete(id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            // delete list items first
            const count = yield prisma_client_1.prisma.shoppingListItem.deleteMany({
                where: {
                    shoppingListId: id,
                },
            });
            // then delete list
            if (count) {
                const deletedList = yield prisma_client_1.prisma.shoppingList.delete({
                    where: {
                        id,
                    },
                });
                return deletedList;
            }
        });
    }
};
DeleteService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], DeleteService);
exports.DeleteService = DeleteService;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/findAll/findAll.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// service
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/findAll/findAll.service.ts");
let FindAllController = class FindAllController {
    constructor(service) {
        this.service = service;
    }
    create(id) {
        return this.service.findAll(id);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], FindAllController.prototype, "create", null);
FindAllController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('shopping-list'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof findAll_service_1.FindAllService !== "undefined" && findAll_service_1.FindAllService) === "function" ? _a : Object])
], FindAllController);
exports.FindAllController = FindAllController;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/findAll/findAll.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const findAll_service_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/findAll/findAll.service.ts");
const findAll_controller_1 = __webpack_require__("./apps/api/src/modules/shopping-list/useCases/findAll/findAll.controller.ts");
let FindAllModule = class FindAllModule {
};
FindAllModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [findAll_controller_1.FindAllController],
        providers: [findAll_service_1.FindAllService],
    })
], FindAllModule);
exports.FindAllModule = FindAllModule;


/***/ }),

/***/ "./apps/api/src/modules/shopping-list/useCases/findAll/findAll.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindAllService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let FindAllService = class FindAllService {
    /**
     * get all posts
     * @returns an array of Post
     */
    findAll(userId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const shoppingLists = yield prisma_client_1.prisma.shoppingList.findMany({
                where: {
                    userId: +userId,
                },
                include: {
                    recipe: true,
                    shoppingListItems: true,
                },
            });
            return shoppingLists;
        });
    }
};
FindAllService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], FindAllService);
exports.FindAllService = FindAllService;


/***/ }),

/***/ "./apps/api/src/modules/users/useCases/updateAvatar/updateAvatar.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAvatarController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const updateAvatar_service_1 = __webpack_require__("./apps/api/src/modules/users/useCases/updateAvatar/updateAvatar.service.ts");
let UpdateAvatarController = class UpdateAvatarController {
    constructor(service) {
        this.service = service;
    }
    updateAvatar(id, avatar) {
        return this.service.updateAvatar(+id, avatar);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)(':id/avatar'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UpdateAvatarController.prototype, "updateAvatar", null);
UpdateAvatarController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('users'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof updateAvatar_service_1.UpdateAvatarService !== "undefined" && updateAvatar_service_1.UpdateAvatarService) === "function" ? _a : Object])
], UpdateAvatarController);
exports.UpdateAvatarController = UpdateAvatarController;


/***/ }),

/***/ "./apps/api/src/modules/users/useCases/updateAvatar/updateAvatar.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAvatarModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const updateAvatar_service_1 = __webpack_require__("./apps/api/src/modules/users/useCases/updateAvatar/updateAvatar.service.ts");
const updateAvatar_controller_1 = __webpack_require__("./apps/api/src/modules/users/useCases/updateAvatar/updateAvatar.controller.ts");
let UpdateAvatarModule = class UpdateAvatarModule {
};
UpdateAvatarModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [updateAvatar_controller_1.UpdateAvatarController],
        providers: [updateAvatar_service_1.UpdateAvatarService],
    })
], UpdateAvatarModule);
exports.UpdateAvatarModule = UpdateAvatarModule;


/***/ }),

/***/ "./apps/api/src/modules/users/useCases/updateAvatar/updateAvatar.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAvatarService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
// utils
const jwt_1 = __webpack_require__("./apps/api/src/utils/jwt.ts");
let UpdateAvatarService = class UpdateAvatarService {
    updateAvatar(id, avatar) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const user = yield prisma_client_1.prisma.user.update({
                where: {
                    id: id,
                },
                data: Object.assign({}, avatar),
            });
            if (user) {
                const accessToken = yield jwt_1.Jwt.signAccessToken(user);
                delete user.password;
                return Object.assign(Object.assign({}, user), { accessToken });
            }
        });
    }
};
UpdateAvatarService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], UpdateAvatarService);
exports.UpdateAvatarService = UpdateAvatarService;


/***/ }),

/***/ "./apps/api/src/modules/users/useCases/update/update.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const update_service_1 = __webpack_require__("./apps/api/src/modules/users/useCases/update/update.service.ts");
const client_1 = __webpack_require__("@prisma/client");
let UpdateController = class UpdateController {
    constructor(service) {
        this.service = service;
    }
    /**
     * updates user data based on id
     * @param id
     * @param user
     * @returns new user data
     */
    update(id, user) {
        return this.service.update(+id, user);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Patch)(':id'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('id')),
    (0, tslib_1.__param)(1, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, typeof (_a = typeof client_1.User !== "undefined" && client_1.User) === "function" ? _a : Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], UpdateController.prototype, "update", null);
UpdateController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('users'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof update_service_1.UpdateService !== "undefined" && update_service_1.UpdateService) === "function" ? _b : Object])
], UpdateController);
exports.UpdateController = UpdateController;


/***/ }),

/***/ "./apps/api/src/modules/users/useCases/update/update.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const update_service_1 = __webpack_require__("./apps/api/src/modules/users/useCases/update/update.service.ts");
const update_controller_1 = __webpack_require__("./apps/api/src/modules/users/useCases/update/update.controller.ts");
let UpdateModule = class UpdateModule {
};
UpdateModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [update_controller_1.UpdateController],
        providers: [update_service_1.UpdateService],
    })
], UpdateModule);
exports.UpdateModule = UpdateModule;


/***/ }),

/***/ "./apps/api/src/modules/users/useCases/update/update.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
// utils
const jwt_1 = __webpack_require__("./apps/api/src/utils/jwt.ts");
// prisma client
const prisma_client_1 = __webpack_require__("./libs/prisma-client/src/index.ts");
let UpdateService = class UpdateService {
    /**
     * updates user data based on id
     * @param id
     * @param user
     * @returns new user data
     */
    update(id, userData) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const user = yield prisma_client_1.prisma.user.update({
                where: {
                    id: id,
                },
                data: Object.assign({}, userData),
            });
            const accessToken = yield jwt_1.Jwt.signAccessToken(user);
            delete user.password;
            return Object.assign(Object.assign({}, user), { accessToken });
        });
    }
};
UpdateService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], UpdateService);
exports.UpdateService = UpdateService;


/***/ }),

/***/ "./apps/api/src/modules/users/users.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const updateAvatar_module_1 = __webpack_require__("./apps/api/src/modules/users/useCases/updateAvatar/updateAvatar.module.ts");
const update_module_1 = __webpack_require__("./apps/api/src/modules/users/useCases/update/update.module.ts");
let UsersModule = class UsersModule {
};
UsersModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [update_module_1.UpdateModule, updateAvatar_module_1.UpdateAvatarModule],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./apps/api/src/utils/jwt.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Jwt = void 0;
const tslib_1 = __webpack_require__("tslib");
const dotenv_1 = (0, tslib_1.__importDefault)(__webpack_require__("dotenv"));
const jwt = (0, tslib_1.__importStar)(__webpack_require__("jsonwebtoken"));
const http_errors_1 = (0, tslib_1.__importDefault)(__webpack_require__("http-errors"));
const google_auth_library_1 = __webpack_require__("./node_modules/google-auth-library/build/src/index.js");
const moment_1 = (0, tslib_1.__importDefault)(__webpack_require__("moment"));
dotenv_1.default.config();
class Jwt {
    static signAccessToken(payload) {
        return new Promise((resolve, reject) => {
            jwt.sign({ payload }, process.env['ACCESS_TOKEN_SECRET'], {}, (err, token) => {
                if (err) {
                    reject(http_errors_1.default['InternalServeurError']);
                }
                resolve(token);
            });
        });
    }
    static verifyGoogleTOken(token) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const client = new google_auth_library_1.OAuth2Client(process.env['GOOGLE_CLIENT_ID']);
            const ticket = yield client.verifyIdToken({
                idToken: token,
                audience: process.env['GOOGLE_CLIENT_ID'],
            });
            const payload = ticket.getPayload();
            const validISS = payload.iss === 'https://accounts.google.com' ? true : false;
            const validAUD = payload.aud === process.env['GOOGLE_CLIENT_ID'] ? true : false;
            const validEXP = (0, moment_1.default)(payload.exp).isBefore(moment_1.default.now()) ? true : false;
            const validEmail = payload.email_verified;
            const email = payload.email;
            if (validISS && validAUD && validEXP && validEmail && email) {
                return email;
            }
            else {
                return false;
            }
        });
    }
}
exports.Jwt = Jwt;


/***/ }),

/***/ "./libs/prisma-client/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prisma = void 0;
var prisma_client_1 = __webpack_require__("./libs/prisma-client/src/prisma-client.ts");
Object.defineProperty(exports, "prisma", ({ enumerable: true, get: function () { return prisma_client_1.prisma; } }));


/***/ }),

/***/ "./libs/prisma-client/src/prisma-client.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prisma = void 0;
// create a single client to handle whole app
const client_1 = __webpack_require__("@prisma/client");
exports.prisma = new client_1.PrismaClient();


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/platform-express":
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/swagger":
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/throttler":
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/throttler");

/***/ }),

/***/ "@prisma/client":
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "base64-js":
/***/ ((module) => {

"use strict";
module.exports = require("base64-js");

/***/ }),

/***/ "bcrypt":
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "dotenv":
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "ecdsa-sig-formatter":
/***/ ((module) => {

"use strict";
module.exports = require("ecdsa-sig-formatter");

/***/ }),

/***/ "events":
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "extend":
/***/ ((module) => {

"use strict";
module.exports = require("extend");

/***/ }),

/***/ "helmet":
/***/ ((module) => {

"use strict";
module.exports = require("helmet");

/***/ }),

/***/ "http-errors":
/***/ ((module) => {

"use strict";
module.exports = require("http-errors");

/***/ }),

/***/ "https-proxy-agent":
/***/ ((module) => {

"use strict";
module.exports = require("https-proxy-agent");

/***/ }),

/***/ "is-stream":
/***/ ((module) => {

"use strict";
module.exports = require("is-stream");

/***/ }),

/***/ "jsonwebtoken":
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "jws":
/***/ ((module) => {

"use strict";
module.exports = require("jws");

/***/ }),

/***/ "lru-cache":
/***/ ((module) => {

"use strict";
module.exports = require("lru-cache");

/***/ }),

/***/ "moment":
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "multer":
/***/ ((module) => {

"use strict";
module.exports = require("multer");

/***/ }),

/***/ "node-fetch":
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");

/***/ }),

/***/ "node-forge":
/***/ ((module) => {

"use strict";
module.exports = require("node-forge");

/***/ }),

/***/ "querystring":
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

"use strict";
module.exports = require("tslib");

/***/ }),

/***/ "url":
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "child_process":
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "https":
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "os":
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "./node_modules/bignumber.js/bignumber.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BigNumber": () => (/* binding */ BigNumber),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 *      bignumber.js v9.0.2
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2021 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */


var
  isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
  mathceil = Math.ceil,
  mathfloor = Math.floor,

  bignumberError = '[BigNumber Error] ',
  tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',

  BASE = 1e14,
  LOG_BASE = 14,
  MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
  // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
  POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  SQRT_BASE = 1e7,

  // EDITABLE
  // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
  // the arguments to toExponential, toFixed, toFormat, and toPrecision.
  MAX = 1E9;                                   // 0 to MAX_INT32


/*
 * Create and return a BigNumber constructor.
 */
function clone(configObject) {
  var div, convertBase, parseNumeric,
    P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null },
    ONE = new BigNumber(1),


    //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------


    // The default values below must be integers within the inclusive ranges stated.
    // The values can also be changed at run-time using BigNumber.set.

    // The maximum number of decimal places for operations involving division.
    DECIMAL_PLACES = 20,                     // 0 to MAX

    // The rounding mode used when rounding to the above decimal places, and when using
    // toExponential, toFixed, toFormat and toPrecision, and round (default value).
    // UP         0 Away from zero.
    // DOWN       1 Towards zero.
    // CEIL       2 Towards +Infinity.
    // FLOOR      3 Towards -Infinity.
    // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
    // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
    // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
    // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
    // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
    ROUNDING_MODE = 4,                       // 0 to 8

    // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

    // The exponent value at and beneath which toString returns exponential notation.
    // Number type: -7
    TO_EXP_NEG = -7,                         // 0 to -MAX

    // The exponent value at and above which toString returns exponential notation.
    // Number type: 21
    TO_EXP_POS = 21,                         // 0 to MAX

    // RANGE : [MIN_EXP, MAX_EXP]

    // The minimum exponent value, beneath which underflow to zero occurs.
    // Number type: -324  (5e-324)
    MIN_EXP = -1e7,                          // -1 to -MAX

    // The maximum exponent value, above which overflow to Infinity occurs.
    // Number type:  308  (1.7976931348623157e+308)
    // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
    MAX_EXP = 1e7,                           // 1 to MAX

    // Whether to use cryptographically-secure random number generation, if available.
    CRYPTO = false,                          // true or false

    // The modulo mode used when calculating the modulus: a mod n.
    // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
    // The remainder (r) is calculated as: r = a - n * q.
    //
    // UP        0 The remainder is positive if the dividend is negative, else is negative.
    // DOWN      1 The remainder has the same sign as the dividend.
    //             This modulo mode is commonly known as 'truncated division' and is
    //             equivalent to (a % n) in JavaScript.
    // FLOOR     3 The remainder has the same sign as the divisor (Python %).
    // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
    // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
    //             The remainder is always positive.
    //
    // The truncated division, floored division, Euclidian division and IEEE 754 remainder
    // modes are commonly used for the modulus operation.
    // Although the other rounding modes can also be used, they may not give useful results.
    MODULO_MODE = 1,                         // 0 to 9

    // The maximum number of significant digits of the result of the exponentiatedBy operation.
    // If POW_PRECISION is 0, there will be unlimited significant digits.
    POW_PRECISION = 0,                       // 0 to MAX

    // The format specification used by the BigNumber.prototype.toFormat method.
    FORMAT = {
      prefix: '',
      groupSize: 3,
      secondaryGroupSize: 0,
      groupSeparator: ',',
      decimalSeparator: '.',
      fractionGroupSize: 0,
      fractionGroupSeparator: '\xA0',        // non-breaking space
      suffix: ''
    },

    // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
    // '-', '.', whitespace, or repeated character.
    // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
    ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz',
    alphabetHasNormalDecimalDigits = true;


  //------------------------------------------------------------------------------------------


  // CONSTRUCTOR


  /*
   * The BigNumber constructor and exported function.
   * Create and return a new instance of a BigNumber object.
   *
   * v {number|string|BigNumber} A numeric value.
   * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
   */
  function BigNumber(v, b) {
    var alphabet, c, caseChanged, e, i, isNum, len, str,
      x = this;

    // Enable constructor call without `new`.
    if (!(x instanceof BigNumber)) return new BigNumber(v, b);

    if (b == null) {

      if (v && v._isBigNumber === true) {
        x.s = v.s;

        if (!v.c || v.e > MAX_EXP) {
          x.c = x.e = null;
        } else if (v.e < MIN_EXP) {
          x.c = [x.e = 0];
        } else {
          x.e = v.e;
          x.c = v.c.slice();
        }

        return;
      }

      if ((isNum = typeof v == 'number') && v * 0 == 0) {

        // Use `1 / n` to handle minus zero also.
        x.s = 1 / v < 0 ? (v = -v, -1) : 1;

        // Fast path for integers, where n < 2147483648 (2**31).
        if (v === ~~v) {
          for (e = 0, i = v; i >= 10; i /= 10, e++);

          if (e > MAX_EXP) {
            x.c = x.e = null;
          } else {
            x.e = e;
            x.c = [v];
          }

          return;
        }

        str = String(v);
      } else {

        if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);

        x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
      }

      // Decimal point?
      if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

      // Exponential form?
      if ((i = str.search(/e/i)) > 0) {

        // Determine exponent.
        if (e < 0) e = i;
        e += +str.slice(i + 1);
        str = str.substring(0, i);
      } else if (e < 0) {

        // Integer.
        e = str.length;
      }

    } else {

      // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
      intCheck(b, 2, ALPHABET.length, 'Base');

      // Allow exponential notation to be used with base 10 argument, while
      // also rounding to DECIMAL_PLACES as with other bases.
      if (b == 10 && alphabetHasNormalDecimalDigits) {
        x = new BigNumber(v);
        return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
      }

      str = String(v);

      if (isNum = typeof v == 'number') {

        // Avoid potential interpretation of Infinity and NaN as base 44+ values.
        if (v * 0 != 0) return parseNumeric(x, str, isNum, b);

        x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;

        // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
        if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
          throw Error
           (tooManyDigits + v);
        }
      } else {
        x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
      }

      alphabet = ALPHABET.slice(0, b);
      e = i = 0;

      // Check that str is a valid base b number.
      // Don't use RegExp, so alphabet can contain special characters.
      for (len = str.length; i < len; i++) {
        if (alphabet.indexOf(c = str.charAt(i)) < 0) {
          if (c == '.') {

            // If '.' is not the first character and it has not be found before.
            if (i > e) {
              e = len;
              continue;
            }
          } else if (!caseChanged) {

            // Allow e.g. hexadecimal 'FF' as well as 'ff'.
            if (str == str.toUpperCase() && (str = str.toLowerCase()) ||
                str == str.toLowerCase() && (str = str.toUpperCase())) {
              caseChanged = true;
              i = -1;
              e = 0;
              continue;
            }
          }

          return parseNumeric(x, String(v), isNum, b);
        }
      }

      // Prevent later check for length on converted number.
      isNum = false;
      str = convertBase(str, b, 10, x.s);

      // Decimal point?
      if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
      else e = str.length;
    }

    // Determine leading zeros.
    for (i = 0; str.charCodeAt(i) === 48; i++);

    // Determine trailing zeros.
    for (len = str.length; str.charCodeAt(--len) === 48;);

    if (str = str.slice(i, ++len)) {
      len -= i;

      // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
      if (isNum && BigNumber.DEBUG &&
        len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
          throw Error
           (tooManyDigits + (x.s * v));
      }

       // Overflow?
      if ((e = e - i - 1) > MAX_EXP) {

        // Infinity.
        x.c = x.e = null;

      // Underflow?
      } else if (e < MIN_EXP) {

        // Zero.
        x.c = [x.e = 0];
      } else {
        x.e = e;
        x.c = [];

        // Transform base

        // e is the base 10 exponent.
        // i is where to slice str to get the first element of the coefficient array.
        i = (e + 1) % LOG_BASE;
        if (e < 0) i += LOG_BASE;  // i < 1

        if (i < len) {
          if (i) x.c.push(+str.slice(0, i));

          for (len -= LOG_BASE; i < len;) {
            x.c.push(+str.slice(i, i += LOG_BASE));
          }

          i = LOG_BASE - (str = str.slice(i)).length;
        } else {
          i -= len;
        }

        for (; i--; str += '0');
        x.c.push(+str);
      }
    } else {

      // Zero.
      x.c = [x.e = 0];
    }
  }


  // CONSTRUCTOR PROPERTIES


  BigNumber.clone = clone;

  BigNumber.ROUND_UP = 0;
  BigNumber.ROUND_DOWN = 1;
  BigNumber.ROUND_CEIL = 2;
  BigNumber.ROUND_FLOOR = 3;
  BigNumber.ROUND_HALF_UP = 4;
  BigNumber.ROUND_HALF_DOWN = 5;
  BigNumber.ROUND_HALF_EVEN = 6;
  BigNumber.ROUND_HALF_CEIL = 7;
  BigNumber.ROUND_HALF_FLOOR = 8;
  BigNumber.EUCLID = 9;


  /*
   * Configure infrequently-changing library-wide settings.
   *
   * Accept an object with the following optional properties (if the value of a property is
   * a number, it must be an integer within the inclusive range stated):
   *
   *   DECIMAL_PLACES   {number}           0 to MAX
   *   ROUNDING_MODE    {number}           0 to 8
   *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
   *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
   *   CRYPTO           {boolean}          true or false
   *   MODULO_MODE      {number}           0 to 9
   *   POW_PRECISION       {number}           0 to MAX
   *   ALPHABET         {string}           A string of two or more unique characters which does
   *                                       not contain '.'.
   *   FORMAT           {object}           An object with some of the following properties:
   *     prefix                 {string}
   *     groupSize              {number}
   *     secondaryGroupSize     {number}
   *     groupSeparator         {string}
   *     decimalSeparator       {string}
   *     fractionGroupSize      {number}
   *     fractionGroupSeparator {string}
   *     suffix                 {string}
   *
   * (The values assigned to the above FORMAT object properties are not checked for validity.)
   *
   * E.g.
   * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
   *
   * Ignore properties/parameters set to null or undefined, except for ALPHABET.
   *
   * Return an object with the properties current values.
   */
  BigNumber.config = BigNumber.set = function (obj) {
    var p, v;

    if (obj != null) {

      if (typeof obj == 'object') {

        // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
        // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          DECIMAL_PLACES = v;
        }

        // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
        // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
          v = obj[p];
          intCheck(v, 0, 8, p);
          ROUNDING_MODE = v;
        }

        // EXPONENTIAL_AT {number|number[]}
        // Integer, -MAX to MAX inclusive or
        // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
        // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -MAX, 0, p);
            intCheck(v[1], 0, MAX, p);
            TO_EXP_NEG = v[0];
            TO_EXP_POS = v[1];
          } else {
            intCheck(v, -MAX, MAX, p);
            TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
          }
        }

        // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
        // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
        // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
        if (obj.hasOwnProperty(p = 'RANGE')) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -MAX, -1, p);
            intCheck(v[1], 1, MAX, p);
            MIN_EXP = v[0];
            MAX_EXP = v[1];
          } else {
            intCheck(v, -MAX, MAX, p);
            if (v) {
              MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
            } else {
              throw Error
               (bignumberError + p + ' cannot be zero: ' + v);
            }
          }
        }

        // CRYPTO {boolean} true or false.
        // '[BigNumber Error] CRYPTO not true or false: {v}'
        // '[BigNumber Error] crypto unavailable'
        if (obj.hasOwnProperty(p = 'CRYPTO')) {
          v = obj[p];
          if (v === !!v) {
            if (v) {
              if (typeof crypto != 'undefined' && crypto &&
               (crypto.getRandomValues || crypto.randomBytes)) {
                CRYPTO = v;
              } else {
                CRYPTO = !v;
                throw Error
                 (bignumberError + 'crypto unavailable');
              }
            } else {
              CRYPTO = v;
            }
          } else {
            throw Error
             (bignumberError + p + ' not true or false: ' + v);
          }
        }

        // MODULO_MODE {number} Integer, 0 to 9 inclusive.
        // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
          v = obj[p];
          intCheck(v, 0, 9, p);
          MODULO_MODE = v;
        }

        // POW_PRECISION {number} Integer, 0 to MAX inclusive.
        // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          POW_PRECISION = v;
        }

        // FORMAT {object}
        // '[BigNumber Error] FORMAT not an object: {v}'
        if (obj.hasOwnProperty(p = 'FORMAT')) {
          v = obj[p];
          if (typeof v == 'object') FORMAT = v;
          else throw Error
           (bignumberError + p + ' not an object: ' + v);
        }

        // ALPHABET {string}
        // '[BigNumber Error] ALPHABET invalid: {v}'
        if (obj.hasOwnProperty(p = 'ALPHABET')) {
          v = obj[p];

          // Disallow if less than two characters,
          // or if it contains '+', '-', '.', whitespace, or a repeated character.
          if (typeof v == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
            alphabetHasNormalDecimalDigits = v.slice(0, 10) == '0123456789';
            ALPHABET = v;
          } else {
            throw Error
             (bignumberError + p + ' invalid: ' + v);
          }
        }

      } else {

        // '[BigNumber Error] Object expected: {v}'
        throw Error
         (bignumberError + 'Object expected: ' + obj);
      }
    }

    return {
      DECIMAL_PLACES: DECIMAL_PLACES,
      ROUNDING_MODE: ROUNDING_MODE,
      EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
      RANGE: [MIN_EXP, MAX_EXP],
      CRYPTO: CRYPTO,
      MODULO_MODE: MODULO_MODE,
      POW_PRECISION: POW_PRECISION,
      FORMAT: FORMAT,
      ALPHABET: ALPHABET
    };
  };


  /*
   * Return true if v is a BigNumber instance, otherwise return false.
   *
   * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
   *
   * v {any}
   *
   * '[BigNumber Error] Invalid BigNumber: {v}'
   */
  BigNumber.isBigNumber = function (v) {
    if (!v || v._isBigNumber !== true) return false;
    if (!BigNumber.DEBUG) return true;

    var i, n,
      c = v.c,
      e = v.e,
      s = v.s;

    out: if ({}.toString.call(c) == '[object Array]') {

      if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {

        // If the first element is zero, the BigNumber value must be zero.
        if (c[0] === 0) {
          if (e === 0 && c.length === 1) return true;
          break out;
        }

        // Calculate number of digits that c[0] should have, based on the exponent.
        i = (e + 1) % LOG_BASE;
        if (i < 1) i += LOG_BASE;

        // Calculate number of digits of c[0].
        //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
        if (String(c[0]).length == i) {

          for (i = 0; i < c.length; i++) {
            n = c[i];
            if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
          }

          // Last element cannot be zero, unless it is the only element.
          if (n !== 0) return true;
        }
      }

    // Infinity/NaN
    } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
      return true;
    }

    throw Error
      (bignumberError + 'Invalid BigNumber: ' + v);
  };


  /*
   * Return a new BigNumber whose value is the maximum of the arguments.
   *
   * arguments {number|string|BigNumber}
   */
  BigNumber.maximum = BigNumber.max = function () {
    return maxOrMin(arguments, P.lt);
  };


  /*
   * Return a new BigNumber whose value is the minimum of the arguments.
   *
   * arguments {number|string|BigNumber}
   */
  BigNumber.minimum = BigNumber.min = function () {
    return maxOrMin(arguments, P.gt);
  };


  /*
   * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
   * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
   * zeros are produced).
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
   * '[BigNumber Error] crypto unavailable'
   */
  BigNumber.random = (function () {
    var pow2_53 = 0x20000000000000;

    // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
    // Check if Math.random() produces more than 32 bits of randomness.
    // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
    // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
    var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
     ? function () { return mathfloor(Math.random() * pow2_53); }
     : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
       (Math.random() * 0x800000 | 0); };

    return function (dp) {
      var a, b, e, k, v,
        i = 0,
        c = [],
        rand = new BigNumber(ONE);

      if (dp == null) dp = DECIMAL_PLACES;
      else intCheck(dp, 0, MAX);

      k = mathceil(dp / LOG_BASE);

      if (CRYPTO) {

        // Browsers supporting crypto.getRandomValues.
        if (crypto.getRandomValues) {

          a = crypto.getRandomValues(new Uint32Array(k *= 2));

          for (; i < k;) {

            // 53 bits:
            // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
            // 11111 11111111 11111111 11111111 11100000 00000000 00000000
            // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
            //                                     11111 11111111 11111111
            // 0x20000 is 2^21.
            v = a[i] * 0x20000 + (a[i + 1] >>> 11);

            // Rejection sampling:
            // 0 <= v < 9007199254740992
            // Probability that v >= 9e15, is
            // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
            if (v >= 9e15) {
              b = crypto.getRandomValues(new Uint32Array(2));
              a[i] = b[0];
              a[i + 1] = b[1];
            } else {

              // 0 <= v <= 8999999999999999
              // 0 <= (v % 1e14) <= 99999999999999
              c.push(v % 1e14);
              i += 2;
            }
          }
          i = k / 2;

        // Node.js supporting crypto.randomBytes.
        } else if (crypto.randomBytes) {

          // buffer
          a = crypto.randomBytes(k *= 7);

          for (; i < k;) {

            // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
            // 0x100000000 is 2^32, 0x1000000 is 2^24
            // 11111 11111111 11111111 11111111 11111111 11111111 11111111
            // 0 <= v < 9007199254740992
            v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
               (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
               (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

            if (v >= 9e15) {
              crypto.randomBytes(7).copy(a, i);
            } else {

              // 0 <= (v % 1e14) <= 99999999999999
              c.push(v % 1e14);
              i += 7;
            }
          }
          i = k / 7;
        } else {
          CRYPTO = false;
          throw Error
           (bignumberError + 'crypto unavailable');
        }
      }

      // Use Math.random.
      if (!CRYPTO) {

        for (; i < k;) {
          v = random53bitInt();
          if (v < 9e15) c[i++] = v % 1e14;
        }
      }

      k = c[--i];
      dp %= LOG_BASE;

      // Convert trailing digits to zeros according to dp.
      if (k && dp) {
        v = POWS_TEN[LOG_BASE - dp];
        c[i] = mathfloor(k / v) * v;
      }

      // Remove trailing elements which are zero.
      for (; c[i] === 0; c.pop(), i--);

      // Zero?
      if (i < 0) {
        c = [e = 0];
      } else {

        // Remove leading elements which are zero and adjust exponent accordingly.
        for (e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);

        // Count the digits of the first element of c to determine leading zeros, and...
        for (i = 1, v = c[0]; v >= 10; v /= 10, i++);

        // adjust the exponent accordingly.
        if (i < LOG_BASE) e -= LOG_BASE - i;
      }

      rand.e = e;
      rand.c = c;
      return rand;
    };
  })();


   /*
   * Return a BigNumber whose value is the sum of the arguments.
   *
   * arguments {number|string|BigNumber}
   */
  BigNumber.sum = function () {
    var i = 1,
      args = arguments,
      sum = new BigNumber(args[0]);
    for (; i < args.length;) sum = sum.plus(args[i++]);
    return sum;
  };


  // PRIVATE FUNCTIONS


  // Called by BigNumber and BigNumber.prototype.toString.
  convertBase = (function () {
    var decimal = '0123456789';

    /*
     * Convert string of baseIn to an array of numbers of baseOut.
     * Eg. toBaseOut('255', 10, 16) returns [15, 15].
     * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
     */
    function toBaseOut(str, baseIn, baseOut, alphabet) {
      var j,
        arr = [0],
        arrL,
        i = 0,
        len = str.length;

      for (; i < len;) {
        for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);

        arr[0] += alphabet.indexOf(str.charAt(i++));

        for (j = 0; j < arr.length; j++) {

          if (arr[j] > baseOut - 1) {
            if (arr[j + 1] == null) arr[j + 1] = 0;
            arr[j + 1] += arr[j] / baseOut | 0;
            arr[j] %= baseOut;
          }
        }
      }

      return arr.reverse();
    }

    // Convert a numeric string of baseIn to a numeric string of baseOut.
    // If the caller is toString, we are converting from base 10 to baseOut.
    // If the caller is BigNumber, we are converting from baseIn to base 10.
    return function (str, baseIn, baseOut, sign, callerIsToString) {
      var alphabet, d, e, k, r, x, xc, y,
        i = str.indexOf('.'),
        dp = DECIMAL_PLACES,
        rm = ROUNDING_MODE;

      // Non-integer.
      if (i >= 0) {
        k = POW_PRECISION;

        // Unlimited precision.
        POW_PRECISION = 0;
        str = str.replace('.', '');
        y = new BigNumber(baseIn);
        x = y.pow(str.length - i);
        POW_PRECISION = k;

        // Convert str as if an integer, then restore the fraction part by dividing the
        // result by its base raised to a power.

        y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'),
         10, baseOut, decimal);
        y.e = y.c.length;
      }

      // Convert the number as integer.

      xc = toBaseOut(str, baseIn, baseOut, callerIsToString
       ? (alphabet = ALPHABET, decimal)
       : (alphabet = decimal, ALPHABET));

      // xc now represents str as an integer and converted to baseOut. e is the exponent.
      e = k = xc.length;

      // Remove trailing zeros.
      for (; xc[--k] == 0; xc.pop());

      // Zero?
      if (!xc[0]) return alphabet.charAt(0);

      // Does str represent an integer? If so, no need for the division.
      if (i < 0) {
        --e;
      } else {
        x.c = xc;
        x.e = e;

        // The sign is needed for correct rounding.
        x.s = sign;
        x = div(x, y, dp, rm, baseOut);
        xc = x.c;
        r = x.r;
        e = x.e;
      }

      // xc now represents str converted to baseOut.

      // THe index of the rounding digit.
      d = e + dp + 1;

      // The rounding digit: the digit to the right of the digit that may be rounded up.
      i = xc[d];

      // Look at the rounding digits and mode to determine whether to round up.

      k = baseOut / 2;
      r = r || d < 0 || xc[d + 1] != null;

      r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
            : i > k || i == k &&(rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
             rm == (x.s < 0 ? 8 : 7));

      // If the index of the rounding digit is not greater than zero, or xc represents
      // zero, then the result of the base conversion is zero or, if rounding up, a value
      // such as 0.00001.
      if (d < 1 || !xc[0]) {

        // 1^-dp or 0
        str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
      } else {

        // Truncate xc to the required number of decimal places.
        xc.length = d;

        // Round up?
        if (r) {

          // Rounding up may mean the previous digit has to be rounded up and so on.
          for (--baseOut; ++xc[--d] > baseOut;) {
            xc[d] = 0;

            if (!d) {
              ++e;
              xc = [1].concat(xc);
            }
          }
        }

        // Determine trailing zeros.
        for (k = xc.length; !xc[--k];);

        // E.g. [4, 11, 15] becomes 4bf.
        for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));

        // Add leading zeros, decimal point and trailing zeros as required.
        str = toFixedPoint(str, e, alphabet.charAt(0));
      }

      // The caller will add the sign.
      return str;
    };
  })();


  // Perform division in the specified base. Called by div and convertBase.
  div = (function () {

    // Assume non-zero x and k.
    function multiply(x, k, base) {
      var m, temp, xlo, xhi,
        carry = 0,
        i = x.length,
        klo = k % SQRT_BASE,
        khi = k / SQRT_BASE | 0;

      for (x = x.slice(); i--;) {
        xlo = x[i] % SQRT_BASE;
        xhi = x[i] / SQRT_BASE | 0;
        m = khi * xlo + xhi * klo;
        temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
        carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
        x[i] = temp % base;
      }

      if (carry) x = [carry].concat(x);

      return x;
    }

    function compare(a, b, aL, bL) {
      var i, cmp;

      if (aL != bL) {
        cmp = aL > bL ? 1 : -1;
      } else {

        for (i = cmp = 0; i < aL; i++) {

          if (a[i] != b[i]) {
            cmp = a[i] > b[i] ? 1 : -1;
            break;
          }
        }
      }

      return cmp;
    }

    function subtract(a, b, aL, base) {
      var i = 0;

      // Subtract b from a.
      for (; aL--;) {
        a[aL] -= i;
        i = a[aL] < b[aL] ? 1 : 0;
        a[aL] = i * base + a[aL] - b[aL];
      }

      // Remove leading zeros.
      for (; !a[0] && a.length > 1; a.splice(0, 1));
    }

    // x: dividend, y: divisor.
    return function (x, y, dp, rm, base) {
      var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
        yL, yz,
        s = x.s == y.s ? 1 : -1,
        xc = x.c,
        yc = y.c;

      // Either NaN, Infinity or 0?
      if (!xc || !xc[0] || !yc || !yc[0]) {

        return new BigNumber(

         // Return NaN if either NaN, or both Infinity or 0.
         !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

          // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
          xc && xc[0] == 0 || !yc ? s * 0 : s / 0
       );
      }

      q = new BigNumber(s);
      qc = q.c = [];
      e = x.e - y.e;
      s = dp + e + 1;

      if (!base) {
        base = BASE;
        e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
        s = s / LOG_BASE | 0;
      }

      // Result exponent may be one less then the current value of e.
      // The coefficients of the BigNumbers from convertBase may have trailing zeros.
      for (i = 0; yc[i] == (xc[i] || 0); i++);

      if (yc[i] > (xc[i] || 0)) e--;

      if (s < 0) {
        qc.push(1);
        more = true;
      } else {
        xL = xc.length;
        yL = yc.length;
        i = 0;
        s += 2;

        // Normalise xc and yc so highest order digit of yc is >= base / 2.

        n = mathfloor(base / (yc[0] + 1));

        // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
        // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
        if (n > 1) {
          yc = multiply(yc, n, base);
          xc = multiply(xc, n, base);
          yL = yc.length;
          xL = xc.length;
        }

        xi = yL;
        rem = xc.slice(0, yL);
        remL = rem.length;

        // Add zeros to make remainder as long as divisor.
        for (; remL < yL; rem[remL++] = 0);
        yz = yc.slice();
        yz = [0].concat(yz);
        yc0 = yc[0];
        if (yc[1] >= base / 2) yc0++;
        // Not necessary, but to prevent trial digit n > base, when using base 3.
        // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;

        do {
          n = 0;

          // Compare divisor and remainder.
          cmp = compare(yc, rem, yL, remL);

          // If divisor < remainder.
          if (cmp < 0) {

            // Calculate trial digit, n.

            rem0 = rem[0];
            if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

            // n is how many times the divisor goes into the current remainder.
            n = mathfloor(rem0 / yc0);

            //  Algorithm:
            //  product = divisor multiplied by trial digit (n).
            //  Compare product and remainder.
            //  If product is greater than remainder:
            //    Subtract divisor from product, decrement trial digit.
            //  Subtract product from remainder.
            //  If product was less than remainder at the last compare:
            //    Compare new remainder and divisor.
            //    If remainder is greater than divisor:
            //      Subtract divisor from remainder, increment trial digit.

            if (n > 1) {

              // n may be > base only when base is 3.
              if (n >= base) n = base - 1;

              // product = divisor * trial digit.
              prod = multiply(yc, n, base);
              prodL = prod.length;
              remL = rem.length;

              // Compare product and remainder.
              // If product > remainder then trial digit n too high.
              // n is 1 too high about 5% of the time, and is not known to have
              // ever been more than 1 too high.
              while (compare(prod, rem, prodL, remL) == 1) {
                n--;

                // Subtract divisor from product.
                subtract(prod, yL < prodL ? yz : yc, prodL, base);
                prodL = prod.length;
                cmp = 1;
              }
            } else {

              // n is 0 or 1, cmp is -1.
              // If n is 0, there is no need to compare yc and rem again below,
              // so change cmp to 1 to avoid it.
              // If n is 1, leave cmp as -1, so yc and rem are compared again.
              if (n == 0) {

                // divisor < remainder, so n must be at least 1.
                cmp = n = 1;
              }

              // product = divisor
              prod = yc.slice();
              prodL = prod.length;
            }

            if (prodL < remL) prod = [0].concat(prod);

            // Subtract product from remainder.
            subtract(rem, prod, remL, base);
            remL = rem.length;

             // If product was < remainder.
            if (cmp == -1) {

              // Compare divisor and new remainder.
              // If divisor < new remainder, subtract divisor from remainder.
              // Trial digit n too low.
              // n is 1 too low about 5% of the time, and very rarely 2 too low.
              while (compare(yc, rem, yL, remL) < 1) {
                n++;

                // Subtract divisor from remainder.
                subtract(rem, yL < remL ? yz : yc, remL, base);
                remL = rem.length;
              }
            }
          } else if (cmp === 0) {
            n++;
            rem = [0];
          } // else cmp === 1 and n will be 0

          // Add the next digit, n, to the result array.
          qc[i++] = n;

          // Update the remainder.
          if (rem[0]) {
            rem[remL++] = xc[xi] || 0;
          } else {
            rem = [xc[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] != null) && s--);

        more = rem[0] != null;

        // Leading zero?
        if (!qc[0]) qc.splice(0, 1);
      }

      if (base == BASE) {

        // To calculate q.e, first get the number of digits of qc[0].
        for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);

        round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

      // Caller is convertBase.
      } else {
        q.e = e;
        q.r = +more;
      }

      return q;
    };
  })();


  /*
   * Return a string representing the value of BigNumber n in fixed-point or exponential
   * notation rounded to the specified decimal places or significant digits.
   *
   * n: a BigNumber.
   * i: the index of the last digit required (i.e. the digit that may be rounded up).
   * rm: the rounding mode.
   * id: 1 (toExponential) or 2 (toPrecision).
   */
  function format(n, i, rm, id) {
    var c0, e, ne, len, str;

    if (rm == null) rm = ROUNDING_MODE;
    else intCheck(rm, 0, 8);

    if (!n.c) return n.toString();

    c0 = n.c[0];
    ne = n.e;

    if (i == null) {
      str = coeffToString(n.c);
      str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS)
       ? toExponential(str, ne)
       : toFixedPoint(str, ne, '0');
    } else {
      n = round(new BigNumber(n), i, rm);

      // n.e may have changed if the value was rounded up.
      e = n.e;

      str = coeffToString(n.c);
      len = str.length;

      // toPrecision returns exponential notation if the number of significant digits
      // specified is less than the number of digits necessary to represent the integer
      // part of the value in fixed-point notation.

      // Exponential notation.
      if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {

        // Append zeros?
        for (; len < i; str += '0', len++);
        str = toExponential(str, e);

      // Fixed-point notation.
      } else {
        i -= ne;
        str = toFixedPoint(str, e, '0');

        // Append zeros?
        if (e + 1 > len) {
          if (--i > 0) for (str += '.'; i--; str += '0');
        } else {
          i += e - len;
          if (i > 0) {
            if (e + 1 == len) str += '.';
            for (; i--; str += '0');
          }
        }
      }
    }

    return n.s < 0 && c0 ? '-' + str : str;
  }


  // Handle BigNumber.max and BigNumber.min.
  function maxOrMin(args, method) {
    var n,
      i = 1,
      m = new BigNumber(args[0]);

    for (; i < args.length; i++) {
      n = new BigNumber(args[i]);

      // If any number is NaN, return NaN.
      if (!n.s) {
        m = n;
        break;
      } else if (method.call(m, n)) {
        m = n;
      }
    }

    return m;
  }


  /*
   * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
   * Called by minus, plus and times.
   */
  function normalise(n, c, e) {
    var i = 1,
      j = c.length;

     // Remove trailing zeros.
    for (; !c[--j]; c.pop());

    // Calculate the base 10 exponent. First get the number of digits of c[0].
    for (j = c[0]; j >= 10; j /= 10, i++);

    // Overflow?
    if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

      // Infinity.
      n.c = n.e = null;

    // Underflow?
    } else if (e < MIN_EXP) {

      // Zero.
      n.c = [n.e = 0];
    } else {
      n.e = e;
      n.c = c;
    }

    return n;
  }


  // Handle values that fail the validity test in BigNumber.
  parseNumeric = (function () {
    var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      dotAfter = /^([^.]+)\.$/,
      dotBefore = /^\.([^.]+)$/,
      isInfinityOrNaN = /^-?(Infinity|NaN)$/,
      whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

    return function (x, str, isNum, b) {
      var base,
        s = isNum ? str : str.replace(whitespaceOrPlus, '');

      // No exception on ±Infinity or NaN.
      if (isInfinityOrNaN.test(s)) {
        x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
      } else {
        if (!isNum) {

          // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
          s = s.replace(basePrefix, function (m, p1, p2) {
            base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
            return !b || b == base ? p1 : m;
          });

          if (b) {
            base = b;

            // E.g. '1.' to '1', '.1' to '0.1'
            s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
          }

          if (str != s) return new BigNumber(s, base);
        }

        // '[BigNumber Error] Not a number: {n}'
        // '[BigNumber Error] Not a base {b} number: {n}'
        if (BigNumber.DEBUG) {
          throw Error
            (bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
        }

        // NaN
        x.s = null;
      }

      x.c = x.e = null;
    }
  })();


  /*
   * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
   * If r is truthy, it is known that there are more digits after the rounding digit.
   */
  function round(x, sd, rm, r) {
    var d, i, j, k, n, ni, rd,
      xc = x.c,
      pows10 = POWS_TEN;

    // if x is not Infinity or NaN...
    if (xc) {

      // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
      // n is a base 1e14 number, the value of the element of array x.c containing rd.
      // ni is the index of n within x.c.
      // d is the number of digits of n.
      // i is the index of rd within n including leading zeros.
      // j is the actual index of rd within n (if < 0, rd is a leading zero).
      out: {

        // Get the number of digits of the first element of xc.
        for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);
        i = sd - d;

        // If the rounding digit is in the first element of xc...
        if (i < 0) {
          i += LOG_BASE;
          j = sd;
          n = xc[ni = 0];

          // Get the rounding digit at index j of n.
          rd = n / pows10[d - j - 1] % 10 | 0;
        } else {
          ni = mathceil((i + 1) / LOG_BASE);

          if (ni >= xc.length) {

            if (r) {

              // Needed by sqrt.
              for (; xc.length <= ni; xc.push(0));
              n = rd = 0;
              d = 1;
              i %= LOG_BASE;
              j = i - LOG_BASE + 1;
            } else {
              break out;
            }
          } else {
            n = k = xc[ni];

            // Get the number of digits of n.
            for (d = 1; k >= 10; k /= 10, d++);

            // Get the index of rd within n.
            i %= LOG_BASE;

            // Get the index of rd within n, adjusted for leading zeros.
            // The number of leading zeros of n is given by LOG_BASE - d.
            j = i - LOG_BASE + d;

            // Get the rounding digit at index j of n.
            rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
          }
        }

        r = r || sd < 0 ||

        // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
         xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

        r = rm < 4
         ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
         : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

          // Check whether the digit to the left of the rounding digit is odd.
          ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
           rm == (x.s < 0 ? 8 : 7));

        if (sd < 1 || !xc[0]) {
          xc.length = 0;

          if (r) {

            // Convert sd to decimal places.
            sd -= x.e + 1;

            // 1, 0.1, 0.01, 0.001, 0.0001 etc.
            xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
            x.e = -sd || 0;
          } else {

            // Zero.
            xc[0] = x.e = 0;
          }

          return x;
        }

        // Remove excess digits.
        if (i == 0) {
          xc.length = ni;
          k = 1;
          ni--;
        } else {
          xc.length = ni + 1;
          k = pows10[LOG_BASE - i];

          // E.g. 56700 becomes 56000 if 7 is the rounding digit.
          // j > 0 means i > number of leading zeros of n.
          xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
        }

        // Round up?
        if (r) {

          for (; ;) {

            // If the digit to be rounded up is in the first element of xc...
            if (ni == 0) {

              // i will be the length of xc[0] before k is added.
              for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
              j = xc[0] += k;
              for (k = 1; j >= 10; j /= 10, k++);

              // if i != k the length has increased.
              if (i != k) {
                x.e++;
                if (xc[0] == BASE) xc[0] = 1;
              }

              break;
            } else {
              xc[ni] += k;
              if (xc[ni] != BASE) break;
              xc[ni--] = 0;
              k = 1;
            }
          }
        }

        // Remove trailing zeros.
        for (i = xc.length; xc[--i] === 0; xc.pop());
      }

      // Overflow? Infinity.
      if (x.e > MAX_EXP) {
        x.c = x.e = null;

      // Underflow? Zero.
      } else if (x.e < MIN_EXP) {
        x.c = [x.e = 0];
      }
    }

    return x;
  }


  function valueOf(n) {
    var str,
      e = n.e;

    if (e === null) return n.toString();

    str = coeffToString(n.c);

    str = e <= TO_EXP_NEG || e >= TO_EXP_POS
      ? toExponential(str, e)
      : toFixedPoint(str, e, '0');

    return n.s < 0 ? '-' + str : str;
  }


  // PROTOTYPE/INSTANCE METHODS


  /*
   * Return a new BigNumber whose value is the absolute value of this BigNumber.
   */
  P.absoluteValue = P.abs = function () {
    var x = new BigNumber(this);
    if (x.s < 0) x.s = 1;
    return x;
  };


  /*
   * Return
   *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
   *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
   *   0 if they have the same value,
   *   or null if the value of either is NaN.
   */
  P.comparedTo = function (y, b) {
    return compare(this, new BigNumber(y, b));
  };


  /*
   * If dp is undefined or null or true or false, return the number of decimal places of the
   * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
   *
   * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
   * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
   * ROUNDING_MODE if rm is omitted.
   *
   * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   */
  P.decimalPlaces = P.dp = function (dp, rm) {
    var c, n, v,
      x = this;

    if (dp != null) {
      intCheck(dp, 0, MAX);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);

      return round(new BigNumber(x), dp + x.e + 1, rm);
    }

    if (!(c = x.c)) return null;
    n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

    // Subtract the number of trailing zeros of the last number.
    if (v = c[v]) for (; v % 10 == 0; v /= 10, n--);
    if (n < 0) n = 0;

    return n;
  };


  /*
   *  n / 0 = I
   *  n / N = N
   *  n / I = 0
   *  0 / n = 0
   *  0 / 0 = N
   *  0 / N = N
   *  0 / I = 0
   *  N / n = N
   *  N / 0 = N
   *  N / N = N
   *  N / I = N
   *  I / n = I
   *  I / 0 = I
   *  I / N = N
   *  I / I = N
   *
   * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
   * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
   */
  P.dividedBy = P.div = function (y, b) {
    return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
  };


  /*
   * Return a new BigNumber whose value is the integer part of dividing the value of this
   * BigNumber by the value of BigNumber(y, b).
   */
  P.dividedToIntegerBy = P.idiv = function (y, b) {
    return div(this, new BigNumber(y, b), 0, 1);
  };


  /*
   * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
   *
   * If m is present, return the result modulo m.
   * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
   * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
   *
   * The modular power operation works efficiently when x, n, and m are integers, otherwise it
   * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
   *
   * n {number|string|BigNumber} The exponent. An integer.
   * [m] {number|string|BigNumber} The modulus.
   *
   * '[BigNumber Error] Exponent not an integer: {n}'
   */
  P.exponentiatedBy = P.pow = function (n, m) {
    var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y,
      x = this;

    n = new BigNumber(n);

    // Allow NaN and ±Infinity, but not other non-integers.
    if (n.c && !n.isInteger()) {
      throw Error
        (bignumberError + 'Exponent not an integer: ' + valueOf(n));
    }

    if (m != null) m = new BigNumber(m);

    // Exponent of MAX_SAFE_INTEGER is 15.
    nIsBig = n.e > 14;

    // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
    if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {

      // The sign of the result of pow when x is negative depends on the evenness of n.
      // If +n overflows to ±Infinity, the evenness of n would be not be known.
      y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
      return m ? y.mod(m) : y;
    }

    nIsNeg = n.s < 0;

    if (m) {

      // x % m returns NaN if abs(m) is zero, or m is NaN.
      if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);

      isModExp = !nIsNeg && x.isInteger() && m.isInteger();

      if (isModExp) x = x.mod(m);

    // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
    // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
    } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
      // [1, 240000000]
      ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
      // [80000000000000]  [99999750000000]
      : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {

      // If x is negative and n is odd, k = -0, else k = 0.
      k = x.s < 0 && isOdd(n) ? -0 : 0;

      // If x >= 1, k = ±Infinity.
      if (x.e > -1) k = 1 / k;

      // If n is negative return ±0, else return ±Infinity.
      return new BigNumber(nIsNeg ? 1 / k : k);

    } else if (POW_PRECISION) {

      // Truncating each coefficient array to a length of k after each multiplication
      // equates to truncating significant digits to POW_PRECISION + [28, 41],
      // i.e. there will be a minimum of 28 guard digits retained.
      k = mathceil(POW_PRECISION / LOG_BASE + 2);
    }

    if (nIsBig) {
      half = new BigNumber(0.5);
      if (nIsNeg) n.s = 1;
      nIsOdd = isOdd(n);
    } else {
      i = Math.abs(+valueOf(n));
      nIsOdd = i % 2;
    }

    y = new BigNumber(ONE);

    // Performs 54 loop iterations for n of 9007199254740991.
    for (; ;) {

      if (nIsOdd) {
        y = y.times(x);
        if (!y.c) break;

        if (k) {
          if (y.c.length > k) y.c.length = k;
        } else if (isModExp) {
          y = y.mod(m);    //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
        }
      }

      if (i) {
        i = mathfloor(i / 2);
        if (i === 0) break;
        nIsOdd = i % 2;
      } else {
        n = n.times(half);
        round(n, n.e + 1, 1);

        if (n.e > 14) {
          nIsOdd = isOdd(n);
        } else {
          i = +valueOf(n);
          if (i === 0) break;
          nIsOdd = i % 2;
        }
      }

      x = x.times(x);

      if (k) {
        if (x.c && x.c.length > k) x.c.length = k;
      } else if (isModExp) {
        x = x.mod(m);    //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
      }
    }

    if (isModExp) return y;
    if (nIsNeg) y = ONE.div(y);

    return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
  };


  /*
   * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
   * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
   *
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
   */
  P.integerValue = function (rm) {
    var n = new BigNumber(this);
    if (rm == null) rm = ROUNDING_MODE;
    else intCheck(rm, 0, 8);
    return round(n, n.e + 1, rm);
  };


  /*
   * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
   * otherwise return false.
   */
  P.isEqualTo = P.eq = function (y, b) {
    return compare(this, new BigNumber(y, b)) === 0;
  };


  /*
   * Return true if the value of this BigNumber is a finite number, otherwise return false.
   */
  P.isFinite = function () {
    return !!this.c;
  };


  /*
   * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
   * otherwise return false.
   */
  P.isGreaterThan = P.gt = function (y, b) {
    return compare(this, new BigNumber(y, b)) > 0;
  };


  /*
   * Return true if the value of this BigNumber is greater than or equal to the value of
   * BigNumber(y, b), otherwise return false.
   */
  P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
    return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;

  };


  /*
   * Return true if the value of this BigNumber is an integer, otherwise return false.
   */
  P.isInteger = function () {
    return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
  };


  /*
   * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
   * otherwise return false.
   */
  P.isLessThan = P.lt = function (y, b) {
    return compare(this, new BigNumber(y, b)) < 0;
  };


  /*
   * Return true if the value of this BigNumber is less than or equal to the value of
   * BigNumber(y, b), otherwise return false.
   */
  P.isLessThanOrEqualTo = P.lte = function (y, b) {
    return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
  };


  /*
   * Return true if the value of this BigNumber is NaN, otherwise return false.
   */
  P.isNaN = function () {
    return !this.s;
  };


  /*
   * Return true if the value of this BigNumber is negative, otherwise return false.
   */
  P.isNegative = function () {
    return this.s < 0;
  };


  /*
   * Return true if the value of this BigNumber is positive, otherwise return false.
   */
  P.isPositive = function () {
    return this.s > 0;
  };


  /*
   * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
   */
  P.isZero = function () {
    return !!this.c && this.c[0] == 0;
  };


  /*
   *  n - 0 = n
   *  n - N = N
   *  n - I = -I
   *  0 - n = -n
   *  0 - 0 = 0
   *  0 - N = N
   *  0 - I = -I
   *  N - n = N
   *  N - 0 = N
   *  N - N = N
   *  N - I = N
   *  I - n = I
   *  I - 0 = I
   *  I - N = N
   *  I - I = N
   *
   * Return a new BigNumber whose value is the value of this BigNumber minus the value of
   * BigNumber(y, b).
   */
  P.minus = function (y, b) {
    var i, j, t, xLTy,
      x = this,
      a = x.s;

    y = new BigNumber(y, b);
    b = y.s;

    // Either NaN?
    if (!a || !b) return new BigNumber(NaN);

    // Signs differ?
    if (a != b) {
      y.s = -b;
      return x.plus(y);
    }

    var xe = x.e / LOG_BASE,
      ye = y.e / LOG_BASE,
      xc = x.c,
      yc = y.c;

    if (!xe || !ye) {

      // Either Infinity?
      if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

      // Either zero?
      if (!xc[0] || !yc[0]) {

        // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
        return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

         // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
         ROUNDING_MODE == 3 ? -0 : 0);
      }
    }

    xe = bitFloor(xe);
    ye = bitFloor(ye);
    xc = xc.slice();

    // Determine which is the bigger number.
    if (a = xe - ye) {

      if (xLTy = a < 0) {
        a = -a;
        t = xc;
      } else {
        ye = xe;
        t = yc;
      }

      t.reverse();

      // Prepend zeros to equalise exponents.
      for (b = a; b--; t.push(0));
      t.reverse();
    } else {

      // Exponents equal. Check digit by digit.
      j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

      for (a = b = 0; b < j; b++) {

        if (xc[b] != yc[b]) {
          xLTy = xc[b] < yc[b];
          break;
        }
      }
    }

    // x < y? Point xc to the array of the bigger number.
    if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

    b = (j = yc.length) - (i = xc.length);

    // Append zeros to xc if shorter.
    // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
    if (b > 0) for (; b--; xc[i++] = 0);
    b = BASE - 1;

    // Subtract yc from xc.
    for (; j > a;) {

      if (xc[--j] < yc[j]) {
        for (i = j; i && !xc[--i]; xc[i] = b);
        --xc[i];
        xc[j] += BASE;
      }

      xc[j] -= yc[j];
    }

    // Remove leading zeros and adjust exponent accordingly.
    for (; xc[0] == 0; xc.splice(0, 1), --ye);

    // Zero?
    if (!xc[0]) {

      // Following IEEE 754 (2008) 6.3,
      // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
      y.s = ROUNDING_MODE == 3 ? -1 : 1;
      y.c = [y.e = 0];
      return y;
    }

    // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
    // for finite x and y.
    return normalise(y, xc, ye);
  };


  /*
   *   n % 0 =  N
   *   n % N =  N
   *   n % I =  n
   *   0 % n =  0
   *  -0 % n = -0
   *   0 % 0 =  N
   *   0 % N =  N
   *   0 % I =  0
   *   N % n =  N
   *   N % 0 =  N
   *   N % N =  N
   *   N % I =  N
   *   I % n =  N
   *   I % 0 =  N
   *   I % N =  N
   *   I % I =  N
   *
   * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
   * BigNumber(y, b). The result depends on the value of MODULO_MODE.
   */
  P.modulo = P.mod = function (y, b) {
    var q, s,
      x = this;

    y = new BigNumber(y, b);

    // Return NaN if x is Infinity or NaN, or y is NaN or zero.
    if (!x.c || !y.s || y.c && !y.c[0]) {
      return new BigNumber(NaN);

    // Return x if y is Infinity or x is zero.
    } else if (!y.c || x.c && !x.c[0]) {
      return new BigNumber(x);
    }

    if (MODULO_MODE == 9) {

      // Euclidian division: q = sign(y) * floor(x / abs(y))
      // r = x - qy    where  0 <= r < abs(y)
      s = y.s;
      y.s = 1;
      q = div(x, y, 0, 3);
      y.s = s;
      q.s *= s;
    } else {
      q = div(x, y, 0, MODULO_MODE);
    }

    y = x.minus(q.times(y));

    // To match JavaScript %, ensure sign of zero is sign of dividend.
    if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;

    return y;
  };


  /*
   *  n * 0 = 0
   *  n * N = N
   *  n * I = I
   *  0 * n = 0
   *  0 * 0 = 0
   *  0 * N = N
   *  0 * I = N
   *  N * n = N
   *  N * 0 = N
   *  N * N = N
   *  N * I = N
   *  I * n = I
   *  I * 0 = N
   *  I * N = N
   *  I * I = I
   *
   * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
   * of BigNumber(y, b).
   */
  P.multipliedBy = P.times = function (y, b) {
    var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
      base, sqrtBase,
      x = this,
      xc = x.c,
      yc = (y = new BigNumber(y, b)).c;

    // Either NaN, ±Infinity or ±0?
    if (!xc || !yc || !xc[0] || !yc[0]) {

      // Return NaN if either is NaN, or one is 0 and the other is Infinity.
      if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
        y.c = y.e = y.s = null;
      } else {
        y.s *= x.s;

        // Return ±Infinity if either is ±Infinity.
        if (!xc || !yc) {
          y.c = y.e = null;

        // Return ±0 if either is ±0.
        } else {
          y.c = [0];
          y.e = 0;
        }
      }

      return y;
    }

    e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
    y.s *= x.s;
    xcL = xc.length;
    ycL = yc.length;

    // Ensure xc points to longer array and xcL to its length.
    if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

    // Initialise the result array with zeros.
    for (i = xcL + ycL, zc = []; i--; zc.push(0));

    base = BASE;
    sqrtBase = SQRT_BASE;

    for (i = ycL; --i >= 0;) {
      c = 0;
      ylo = yc[i] % sqrtBase;
      yhi = yc[i] / sqrtBase | 0;

      for (k = xcL, j = i + k; j > i;) {
        xlo = xc[--k] % sqrtBase;
        xhi = xc[k] / sqrtBase | 0;
        m = yhi * xlo + xhi * ylo;
        xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
        c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
        zc[j--] = xlo % base;
      }

      zc[j] = c;
    }

    if (c) {
      ++e;
    } else {
      zc.splice(0, 1);
    }

    return normalise(y, zc, e);
  };


  /*
   * Return a new BigNumber whose value is the value of this BigNumber negated,
   * i.e. multiplied by -1.
   */
  P.negated = function () {
    var x = new BigNumber(this);
    x.s = -x.s || null;
    return x;
  };


  /*
   *  n + 0 = n
   *  n + N = N
   *  n + I = I
   *  0 + n = n
   *  0 + 0 = 0
   *  0 + N = N
   *  0 + I = I
   *  N + n = N
   *  N + 0 = N
   *  N + N = N
   *  N + I = N
   *  I + n = I
   *  I + 0 = I
   *  I + N = N
   *  I + I = I
   *
   * Return a new BigNumber whose value is the value of this BigNumber plus the value of
   * BigNumber(y, b).
   */
  P.plus = function (y, b) {
    var t,
      x = this,
      a = x.s;

    y = new BigNumber(y, b);
    b = y.s;

    // Either NaN?
    if (!a || !b) return new BigNumber(NaN);

    // Signs differ?
     if (a != b) {
      y.s = -b;
      return x.minus(y);
    }

    var xe = x.e / LOG_BASE,
      ye = y.e / LOG_BASE,
      xc = x.c,
      yc = y.c;

    if (!xe || !ye) {

      // Return ±Infinity if either ±Infinity.
      if (!xc || !yc) return new BigNumber(a / 0);

      // Either zero?
      // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
      if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
    }

    xe = bitFloor(xe);
    ye = bitFloor(ye);
    xc = xc.slice();

    // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
    if (a = xe - ye) {
      if (a > 0) {
        ye = xe;
        t = yc;
      } else {
        a = -a;
        t = xc;
      }

      t.reverse();
      for (; a--; t.push(0));
      t.reverse();
    }

    a = xc.length;
    b = yc.length;

    // Point xc to the longer array, and b to the shorter length.
    if (a - b < 0) t = yc, yc = xc, xc = t, b = a;

    // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
    for (a = 0; b;) {
      a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
      xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
    }

    if (a) {
      xc = [a].concat(xc);
      ++ye;
    }

    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
    // ye = MAX_EXP + 1 possible
    return normalise(y, xc, ye);
  };


  /*
   * If sd is undefined or null or true or false, return the number of significant digits of
   * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
   * If sd is true include integer-part trailing zeros in the count.
   *
   * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
   * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
   * ROUNDING_MODE if rm is omitted.
   *
   * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
   *                     boolean: whether to count integer-part trailing zeros: true or false.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
   */
  P.precision = P.sd = function (sd, rm) {
    var c, n, v,
      x = this;

    if (sd != null && sd !== !!sd) {
      intCheck(sd, 1, MAX);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);

      return round(new BigNumber(x), sd, rm);
    }

    if (!(c = x.c)) return null;
    v = c.length - 1;
    n = v * LOG_BASE + 1;

    if (v = c[v]) {

      // Subtract the number of trailing zeros of the last element.
      for (; v % 10 == 0; v /= 10, n--);

      // Add the number of digits of the first element.
      for (v = c[0]; v >= 10; v /= 10, n++);
    }

    if (sd && x.e + 1 > n) n = x.e + 1;

    return n;
  };


  /*
   * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
   * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
   *
   * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
   */
  P.shiftedBy = function (k) {
    intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
    return this.times('1e' + k);
  };


  /*
   *  sqrt(-n) =  N
   *  sqrt(N) =  N
   *  sqrt(-I) =  N
   *  sqrt(I) =  I
   *  sqrt(0) =  0
   *  sqrt(-0) = -0
   *
   * Return a new BigNumber whose value is the square root of the value of this BigNumber,
   * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
   */
  P.squareRoot = P.sqrt = function () {
    var m, n, r, rep, t,
      x = this,
      c = x.c,
      s = x.s,
      e = x.e,
      dp = DECIMAL_PLACES + 4,
      half = new BigNumber('0.5');

    // Negative/NaN/Infinity/zero?
    if (s !== 1 || !c || !c[0]) {
      return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
    }

    // Initial estimate.
    s = Math.sqrt(+valueOf(x));

    // Math.sqrt underflow/overflow?
    // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
    if (s == 0 || s == 1 / 0) {
      n = coeffToString(c);
      if ((n.length + e) % 2 == 0) n += '0';
      s = Math.sqrt(+n);
      e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

      if (s == 1 / 0) {
        n = '5e' + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf('e') + 1) + e;
      }

      r = new BigNumber(n);
    } else {
      r = new BigNumber(s + '');
    }

    // Check for zero.
    // r could be zero if MIN_EXP is changed after the this value was created.
    // This would cause a division by zero (x/t) and hence Infinity below, which would cause
    // coeffToString to throw.
    if (r.c[0]) {
      e = r.e;
      s = e + dp;
      if (s < 3) s = 0;

      // Newton-Raphson iteration.
      for (; ;) {
        t = r;
        r = half.times(t.plus(div(x, t, dp, 1)));

        if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

          // The exponent of r may here be one less than the final result exponent,
          // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
          // are indexed correctly.
          if (r.e < e) --s;
          n = n.slice(s - 3, s + 1);

          // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
          // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
          // iteration.
          if (n == '9999' || !rep && n == '4999') {

            // On the first iteration only, check to see if rounding up gives the
            // exact result as the nines may infinitely repeat.
            if (!rep) {
              round(t, t.e + DECIMAL_PLACES + 2, 0);

              if (t.times(t).eq(x)) {
                r = t;
                break;
              }
            }

            dp += 4;
            s += 4;
            rep = 1;
          } else {

            // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
            // result. If not, then there are further digits and m will be truthy.
            if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

              // Truncate to the first rounding digit.
              round(r, r.e + DECIMAL_PLACES + 2, 1);
              m = !r.times(r).eq(x);
            }

            break;
          }
        }
      }
    }

    return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
  };


  /*
   * Return a string representing the value of this BigNumber in exponential notation and
   * rounded using ROUNDING_MODE to dp fixed decimal places.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   */
  P.toExponential = function (dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp++;
    }
    return format(this, dp, rm, 1);
  };


  /*
   * Return a string representing the value of this BigNumber in fixed-point notation rounding
   * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
   *
   * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
   * but e.g. (-0.00001).toFixed(0) is '-0'.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   */
  P.toFixed = function (dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp = dp + this.e + 1;
    }
    return format(this, dp, rm);
  };


  /*
   * Return a string representing the value of this BigNumber in fixed-point notation rounded
   * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
   * of the format or FORMAT object (see BigNumber.set).
   *
   * The formatting object may contain some or all of the properties shown below.
   *
   * FORMAT = {
   *   prefix: '',
   *   groupSize: 3,
   *   secondaryGroupSize: 0,
   *   groupSeparator: ',',
   *   decimalSeparator: '.',
   *   fractionGroupSize: 0,
   *   fractionGroupSeparator: '\xA0',      // non-breaking space
   *   suffix: ''
   * };
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   * [format] {object} Formatting options. See FORMAT pbject above.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   * '[BigNumber Error] Argument not an object: {format}'
   */
  P.toFormat = function (dp, rm, format) {
    var str,
      x = this;

    if (format == null) {
      if (dp != null && rm && typeof rm == 'object') {
        format = rm;
        rm = null;
      } else if (dp && typeof dp == 'object') {
        format = dp;
        dp = rm = null;
      } else {
        format = FORMAT;
      }
    } else if (typeof format != 'object') {
      throw Error
        (bignumberError + 'Argument not an object: ' + format);
    }

    str = x.toFixed(dp, rm);

    if (x.c) {
      var i,
        arr = str.split('.'),
        g1 = +format.groupSize,
        g2 = +format.secondaryGroupSize,
        groupSeparator = format.groupSeparator || '',
        intPart = arr[0],
        fractionPart = arr[1],
        isNeg = x.s < 0,
        intDigits = isNeg ? intPart.slice(1) : intPart,
        len = intDigits.length;

      if (g2) i = g1, g1 = g2, g2 = i, len -= i;

      if (g1 > 0 && len > 0) {
        i = len % g1 || g1;
        intPart = intDigits.substr(0, i);
        for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
        if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
        if (isNeg) intPart = '-' + intPart;
      }

      str = fractionPart
       ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize)
        ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'),
         '$&' + (format.fractionGroupSeparator || ''))
        : fractionPart)
       : intPart;
    }

    return (format.prefix || '') + str + (format.suffix || '');
  };


  /*
   * Return an array of two BigNumbers representing the value of this BigNumber as a simple
   * fraction with an integer numerator and an integer denominator.
   * The denominator will be a positive non-zero value less than or equal to the specified
   * maximum denominator. If a maximum denominator is not specified, the denominator will be
   * the lowest value necessary to represent the number exactly.
   *
   * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
   *
   * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
   */
  P.toFraction = function (md) {
    var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s,
      x = this,
      xc = x.c;

    if (md != null) {
      n = new BigNumber(md);

      // Throw if md is less than one or is not an integer, unless it is Infinity.
      if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
        throw Error
          (bignumberError + 'Argument ' +
            (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
      }
    }

    if (!xc) return new BigNumber(x);

    d = new BigNumber(ONE);
    n1 = d0 = new BigNumber(ONE);
    d1 = n0 = new BigNumber(ONE);
    s = coeffToString(xc);

    // Determine initial denominator.
    // d is a power of 10 and the minimum max denominator that specifies the value exactly.
    e = d.e = s.length - x.e - 1;
    d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
    md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;

    exp = MAX_EXP;
    MAX_EXP = 1 / 0;
    n = new BigNumber(s);

    // n0 = d1 = 0
    n0.c[0] = 0;

    for (; ;)  {
      q = div(n, d, 0, 1);
      d2 = d0.plus(q.times(d1));
      if (d2.comparedTo(md) == 1) break;
      d0 = d1;
      d1 = d2;
      n1 = n0.plus(q.times(d2 = n1));
      n0 = d2;
      d = n.minus(q.times(d2 = d));
      n = d2;
    }

    d2 = div(md.minus(d0), d1, 0, 1);
    n0 = n0.plus(d2.times(n1));
    d0 = d0.plus(d2.times(d1));
    n0.s = n1.s = x.s;
    e = e * 2;

    // Determine which fraction is closer to x, n0/d0 or n1/d1
    r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
        div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];

    MAX_EXP = exp;

    return r;
  };


  /*
   * Return the value of this BigNumber converted to a number primitive.
   */
  P.toNumber = function () {
    return +valueOf(this);
  };


  /*
   * Return a string representing the value of this BigNumber rounded to sd significant digits
   * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
   * necessary to represent the integer part of the value in fixed-point notation, then use
   * exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
   */
  P.toPrecision = function (sd, rm) {
    if (sd != null) intCheck(sd, 1, MAX);
    return format(this, sd, rm, 2);
  };


  /*
   * Return a string representing the value of this BigNumber in base b, or base 10 if b is
   * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
   * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
   * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
   * TO_EXP_NEG, return exponential notation.
   *
   * [b] {number} Integer, 2 to ALPHABET.length inclusive.
   *
   * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
   */
  P.toString = function (b) {
    var str,
      n = this,
      s = n.s,
      e = n.e;

    // Infinity or NaN?
    if (e === null) {
      if (s) {
        str = 'Infinity';
        if (s < 0) str = '-' + str;
      } else {
        str = 'NaN';
      }
    } else {
      if (b == null) {
        str = e <= TO_EXP_NEG || e >= TO_EXP_POS
         ? toExponential(coeffToString(n.c), e)
         : toFixedPoint(coeffToString(n.c), e, '0');
      } else if (b === 10 && alphabetHasNormalDecimalDigits) {
        n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
        str = toFixedPoint(coeffToString(n.c), n.e, '0');
      } else {
        intCheck(b, 2, ALPHABET.length, 'Base');
        str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
      }

      if (s < 0 && n.c[0]) str = '-' + str;
    }

    return str;
  };


  /*
   * Return as toString, but do not accept a base argument, and include the minus sign for
   * negative zero.
   */
  P.valueOf = P.toJSON = function () {
    return valueOf(this);
  };


  P._isBigNumber = true;

  P[Symbol.toStringTag] = 'BigNumber';

  // Node.js v10.12.0+
  P[Symbol.for('nodejs.util.inspect.custom')] = P.valueOf;

  if (configObject != null) BigNumber.set(configObject);

  return BigNumber;
}


// PRIVATE HELPER FUNCTIONS

// These functions don't need access to variables,
// e.g. DECIMAL_PLACES, in the scope of the `clone` function above.


function bitFloor(n) {
  var i = n | 0;
  return n > 0 || n === i ? i : i - 1;
}


// Return a coefficient array as a string of base 10 digits.
function coeffToString(a) {
  var s, z,
    i = 1,
    j = a.length,
    r = a[0] + '';

  for (; i < j;) {
    s = a[i++] + '';
    z = LOG_BASE - s.length;
    for (; z--; s = '0' + s);
    r += s;
  }

  // Determine trailing zeros.
  for (j = r.length; r.charCodeAt(--j) === 48;);

  return r.slice(0, j + 1 || 1);
}


// Compare the value of BigNumbers x and y.
function compare(x, y) {
  var a, b,
    xc = x.c,
    yc = y.c,
    i = x.s,
    j = y.s,
    k = x.e,
    l = y.e;

  // Either NaN?
  if (!i || !j) return null;

  a = xc && !xc[0];
  b = yc && !yc[0];

  // Either zero?
  if (a || b) return a ? b ? 0 : -j : i;

  // Signs differ?
  if (i != j) return i;

  a = i < 0;
  b = k == l;

  // Either Infinity?
  if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

  // Compare exponents.
  if (!b) return k > l ^ a ? 1 : -1;

  j = (k = xc.length) < (l = yc.length) ? k : l;

  // Compare digit by digit.
  for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;

  // Compare lengths.
  return k == l ? 0 : k > l ^ a ? 1 : -1;
}


/*
 * Check that n is a primitive number, an integer, and in range, otherwise throw.
 */
function intCheck(n, min, max, name) {
  if (n < min || n > max || n !== mathfloor(n)) {
    throw Error
     (bignumberError + (name || 'Argument') + (typeof n == 'number'
       ? n < min || n > max ? ' out of range: ' : ' not an integer: '
       : ' not a primitive number: ') + String(n));
  }
}


// Assumes finite n.
function isOdd(n) {
  var k = n.c.length - 1;
  return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
}


function toExponential(str, e) {
  return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
   (e < 0 ? 'e' : 'e+') + e;
}


function toFixedPoint(str, e, z) {
  var len, zs;

  // Negative exponent?
  if (e < 0) {

    // Prepend zeros.
    for (zs = z + '.'; ++e; zs += z);
    str = zs + str;

  // Positive exponent
  } else {
    len = str.length;

    // Append zeros.
    if (++e > len) {
      for (zs = z, e -= len; --e; zs += z);
      str += zs;
    } else if (e < len) {
      str = str.slice(0, e) + '.' + str.slice(e);
    }
  }

  return str;
}


// EXPORT


var BigNumber = clone();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BigNumber);


/***/ }),

/***/ "./node_modules/google-auth-library/package.json":
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"_from":"google-auth-library","_id":"google-auth-library@8.0.2","_inBundle":false,"_integrity":"sha512-HoG+nWFAThLovKpvcbYzxgn+nBJPTfAwtq0GxPN821nOO+21+8oP7MoEHfd1sbDulUFFGfcjJr2CnJ4YssHcyg==","_location":"/google-auth-library","_phantomChildren":{"buffer-equal-constant-time":"1.0.1","ecdsa-sig-formatter":"1.0.11","safe-buffer":"5.2.1"},"_requested":{"type":"tag","registry":true,"raw":"google-auth-library","name":"google-auth-library","escapedName":"google-auth-library","rawSpec":"","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/google-auth-library/-/google-auth-library-8.0.2.tgz","_shasum":"5fa0f2d3795c3e4019d2bb315ade4454cc9c30b5","_spec":"google-auth-library","_where":"C:\\\\Users\\\\sekol\\\\Desktop\\\\DEV\\\\While Hungry\\\\wh","author":{"name":"Google Inc."},"bugs":{"url":"https://github.com/googleapis/google-auth-library-nodejs/issues"},"bundleDependencies":false,"dependencies":{"arrify":"^2.0.0","base64-js":"^1.3.0","ecdsa-sig-formatter":"^1.0.11","fast-text-encoding":"^1.0.0","gaxios":"^5.0.0","gcp-metadata":"^5.0.0","gtoken":"^5.3.2","jws":"^4.0.0","lru-cache":"^6.0.0"},"deprecated":false,"description":"Google APIs Authentication Client Library for Node.js","devDependencies":{"@compodoc/compodoc":"^1.1.7","@types/base64-js":"^1.2.5","@types/chai":"^4.1.7","@types/jws":"^3.1.0","@types/lru-cache":"^5.0.0","@types/mocha":"^8.0.0","@types/mv":"^2.1.0","@types/ncp":"^2.0.1","@types/node":"^16.0.0","@types/sinon":"^10.0.0","@types/tmp":"^0.2.0","assert-rejects":"^1.0.0","c8":"^7.0.0","chai":"^4.2.0","codecov":"^3.0.2","execa":"^5.0.0","gts":"^3.1.0","is-docker":"^2.0.0","karma":"^6.0.0","karma-chrome-launcher":"^3.0.0","karma-coverage":"^2.0.0","karma-firefox-launcher":"^2.0.0","karma-mocha":"^2.0.0","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^5.0.0","keypair":"^1.0.4","linkinator":"^3.0.3","mocha":"^9.2.2","mv":"^2.1.1","ncp":"^2.0.0","nock":"^13.0.0","null-loader":"^4.0.0","puppeteer":"^13.0.0","sinon":"^13.0.0","tmp":"^0.2.0","ts-loader":"^8.0.0","typescript":"^4.6.3","webpack":"^5.21.2","webpack-cli":"^4.0.0"},"engines":{"node":">=12"},"files":["build/src","!build/src/**/*.map"],"homepage":"https://github.com/googleapis/google-auth-library-nodejs#readme","keywords":["google","api","google apis","client","client library"],"license":"Apache-2.0","main":"./build/src/index.js","name":"google-auth-library","repository":{"type":"git","url":"git+https://github.com/googleapis/google-auth-library-nodejs.git"},"scripts":{"browser-test":"karma start","clean":"gts clean","compile":"tsc -p .","docs":"compodoc src/","docs-test":"linkinator docs","fix":"gts fix","lint":"gts check","precompile":"gts clean","predocs-test":"npm run docs","prelint":"cd samples; npm link ../; npm install","prepare":"npm run compile","presystem-test":"npm run compile","pretest":"npm run compile","samples-setup":"cd samples/ && npm link ../ && npm run setup && cd ../","samples-test":"cd samples/ && npm link ../ && npm test && cd ../","system-test":"mocha build/system-test --timeout 60000","test":"c8 mocha build/test","webpack":"webpack"},"types":"./build/src/index.d.ts","version":"8.0.2"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const helmet_1 = (0, tslib_1.__importDefault)(__webpack_require__("helmet"));
const app_module_1 = __webpack_require__("./apps/api/src/app/app.module.ts");
const configureSwagger = (app) => {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('While Hungry')
        .setDescription('REST API')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
};
function bootstrap() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        // set api prefix
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        // set http headers to prevent security vulnerabilites
        app.use((0, helmet_1.default)({ crossOriginResourcePolicy: false }));
        // enable cors origin between apps
        app.enableCors();
        // protection against csurf attacks
        // app.use(cookieParser());
        // app.use(
        //   session({
        //     secret: 'ultrasecresessionpassword',
        //     resave: false,
        //     saveUninitialized: false,
        //   }),
        // );
        // app.use(csurf());
        // app.use('*', function (req, res) {
        //   res.cookie('XSRF-TOKEN', req.csrfToken())
        // })
        // configure swagger for api endpoints documentation
        configureSwagger(app);
        const port = process.env.PORT || 3000;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map