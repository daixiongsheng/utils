/*!
 * dxs-utils v0.0.5
 * (c) 2020-2021 Xiongsheng Dai
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 讲字符串转成数字,转换失败会返回原来的值
 *
 * @export
 * @param {string} val
 * @return {*}  {(number | string)}
 */
function toNumber(val) {
    var n = parseFloat(val + '');
    return n !== n ? val : n;
}
/**
 * 进制转换
 *
 * @export
 * @param {number | string} number 需要转换的数
 * @param {number} base 原进制
 * @param {number} radix 转换后的进制
 * @return {*}  {string}
 */
function numberConvert(number, base, radix) {
    return parseInt(number + '', base).toString(radix);
}
/**
 * 二进制转16进制
 *
 * @export
 * @param {(string | number)} s
 * @return {*}  {string}
 */
function bin2hex(s) {
    return numberConvert(s, 2, 16);
}
/**
 * 二进制转10进制
 *
 * @export
 * @param {(string | number)} s
 * @return {*}  {string}
 */
function bin2dec(s) {
    return numberConvert(s, 2, 10);
}
/**
 * 16进制转2进制
 *
 * @export
 * @param {(string | number)} s
 * @return {*}  {string}
 */
function hex2bin(s) {
    return numberConvert(s, 16, 2);
}
/**
 * 16进制转10进制
 *
 * @export
 * @param {(string | number)} s
 * @return {*}  {string}
 */
function hex2dec(s) {
    return numberConvert(s, 16, 10);
}
/**
 * 10进制转2进制
 *
 * @export
 * @param {(string | number)} s
 * @return {*}  {string}
 */
function dec2bin(s) {
    return numberConvert(s, 10, 2);
}
/**
 * 10进制转16进制
 *
 * @export
 * @param {(string | number)} s
 * @return {*}  {string}
 */
function dec2hex(s) {
    return numberConvert(s, 10, 16);
}
/**
 * 将字节数转成文本形式 1024 --> 1KB
 * 字节单位换算
 * @export
 * @param {number} bytes
 * @return {*}  {string}
 */
function bytes2simple(bytes) {
    var ret = '';
    var symbols = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var exp = (Math.log(bytes) / Math.log(2)) | 0;
    if (exp < 1) {
        exp = 0;
    }
    var i = Math.floor(exp / 10);
    ret = "" + bytes / Math.pow(2, 10 * i);
    if (bytes.toString().length > bytes.toFixed(2).toString().length) {
        ret = bytes.toFixed(2);
    }
    return ret + symbols[i];
}
/**
 * 1KB -> 1024
 * 字节单位换算
 * @export
 * @param {string} size
 * @return {*}  {(number | string)}
 */
function simple2bytes(size) {
    var symbols = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var length = parseInt(size, 10);
    var unit = size.substring(length.toString().length).toUpperCase();
    var index = symbols.findIndex(function (i) { return i === unit; });
    return length * Math.pow(2, 10 * index);
}

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/**
 * 将对象转成query串
 * @example object2QueryString({age:123}) => age=123
 * @param o
 */
function object2QueryString(o) {
    var s = '';
    var keys = Object.keys(o);
    if (!keys.length) {
        return s;
    }
    keys.forEach(function (key) {
        var value = o[key];
        var type = typeof value;
        switch (type) {
            case 'number':
                // no NaN
                if (value === value) {
                    s += key + "=" + value + "&";
                }
                break;
            case 'object':
                if (value !== null) {
                    s += key + "=" + encodeURIComponent(object2QueryString(value)) + "&";
                }
                else {
                    s += key + "=null&";
                }
                break;
            case 'boolean':
                s += key + "=" + value + "&";
                break;
            case 'string':
                s += key + "=" + encodeURIComponent(value) + "&";
                break;
        }
    });
    return s.substr(0, s.length && s.length - 1);
}
/**
 * 用于处理url参数传递需要手动拼接字符串的问题
 *
 * @param {string} path url
 * @param {object} pramsObj 传给url的参数对象
 * @return {string} 返回拼接后的url串
 */
function dealPath(path, pramsObject) {
    if (pramsObject === void 0) { pramsObject = {}; }
    if (!path || path.length === 1 || Object.keys(pramsObject).length === 0) {
        return path;
    }
    // 是否已经经过处理
    var isDealt = path.includes('?');
    if (isDealt) {
        var _a = __read(path.split('?')), p = _a[0], query = _a.slice(1);
        pramsObject = __assign(__assign({}, query2Object(query.join(''))), pramsObject);
        path = p;
    }
    else if (path[path.length - 1] !== '/') {
        path = path + "/";
    }
    var queryString = object2QueryString(pramsObject);
    path += "?" + queryString + "&";
    return path.substr(0, path.length - 1);
}
/**
 * 将查询串转成对象，并且最大可能的还原原来的类型
 * @param queryString {string} 需要解析的url query 串
 * @return {Object}
 */
function query2Object(queryString) {
    var o = {};
    if (!queryString) {
        return o;
    }
    if (queryString.includes('?')) {
        var splitArray = queryString.split('?');
        queryString = splitArray[splitArray.length - 1];
    }
    var qArr = queryString.split('&');
    qArr.forEach(function (item) {
        var _a = __read(item.split('='), 2), k = _a[0], v = _a[1];
        o[k] = v === void 0 ? '' : decodeURIComponent(v);
    });
    Object.keys(o).forEach(function (key) {
        var value = o[key];
        switch (value) {
            case 'null':
                o[key] = null;
                return;
            case 'false':
                o[key] = false;
                return;
            case 'true':
                o[key] = true;
                return;
        }
        // value是number
        if (parseInt(value, 10).toString() === value) {
            o[key] = Number(value);
            return;
        }
        try {
            var result = JSON.parse(decodeURIComponent(value));
            o[key] = result;
        }
        catch (e) {
            o[key] = value;
        }
    });
    return o;
}

/**
 * 返回这一天是周几
 *
 * @export
 * @param {(number | Date)} [day=new Date()]
 * @param {number} [month]
 * @param {number} [year]
 * @return {array: [string, number]}  返回一个数组，第一个值为对应的英语名称，第二个为1-7表示周一到周日
 */
function dayOfTheWeek(day, month, year) {
    if (day === void 0) { day = new Date(); }
    // 基姆拉尔森计算公式
    if (day instanceof Date) {
        month = day.getMonth() + 1;
        year = day.getFullYear();
        day = day.getDate();
    }
    var now = new Date();
    month = typeof month === 'undefined' ? now.getMonth() + 1 : month;
    year = typeof year === 'undefined' ? now.getFullYear() : year;
    var arr = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    if (month < 3) {
        month += 12;
        --year;
    }
    // w 为 0-6
    var w = ((day +
        2 * month +
        (3 * month) / 5 +
        year +
        ((year / 4) >>> 0) -
        ((year / 100) >>> 0) +
        ((year / 400) >>> 0) +
        1) >>>
        0) %
        7;
    return [arr[w], w + 1];
}

/**
 * 空函数
 *
 * @export
 * @return {*}  {void}
 */
function noop() {
    return void 0;
}
/**
 * 防抖函数
 *
 * @export
 * @template T
 * @param {T} func
 * @param {number} delay
 * @param {boolean} [immediate=true]
 * @return {*}  {DebouncedFunction<T>}
 */
function debounce(func, delay, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timer = null;
    function f() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var that = this;
        if (timer) {
            clearTimeout(timer);
        }
        if (immediate) {
            var callNow = !timer;
            timer = setTimeout(function () {
                timer = null;
            }, delay);
            if (callNow) {
                return func.apply(that, args);
            }
        }
        else {
            timer = setTimeout(function () {
                timer = null;
                func.apply(that, args);
            }, delay);
        }
    }
    f.cancel = function () {
        clearTimeout(timer);
    };
    return f;
}
/**
 *节流函数
 *
 * @export
 * @template T
 * @param {T} func
 * @param {number} delay
 * @return {*}  {ThrottledFunction<T>}
 */
function throttle(func, delay) {
    var prev = Date.now();
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var that = this;
        var now = Date.now();
        if (now - prev >= delay) {
            func.apply(that, args);
            prev = Date.now();
        }
    };
}
// 锁
var Lock = {
    /**
     *
     * 加锁
     * @param {string} key 加锁的内容
     * @return {*}  {boolean}
     */
    isLocked: function (key) {
        return Boolean(this["$$" + key]);
    },
    /**
     *
     * 解锁
     * @param {string} key 解锁的内容
     */
    unlock: function (key) {
        if ("$$" + key in this) {
            delete this["$$" + key];
        }
    },
    /**
     *
     * 判断某有没有加锁
     * @param {string} key
     */
    lock: function (key) {
        this["$$" + key] = true;
    }
};

/**
 * Object.prototype.toString
 *
 * @export
 * @param {*} o
 * @return {*}  {string}
 */
function toString(o) {
    return Object.prototype.toString.call(o);
}
/**
 * 判断是不是对象
 *
 * @export
 * @template T
 * @param {T} o
 * @return {*}  {boolean}
 */
function isObject(o) {
    return typeof o === 'object' && o !== null;
}
/**
 * 判断有没有定义，不是null和undefined
 *
 * @export
 * @template T
 * @param {T} o
 * @return {*}  {boolean}
 */
function isDef(v) {
    return v !== undefined && v !== null;
}
/**
 * 判断是不是一个promise
 *
 * @export
 * @param {*} v
 * @return {*}  {boolean}
 */
function isPromise(v) {
    return (isDef(v) && typeof v.then === 'function' && typeof v.catch === 'function');
}
/**
 * 深拷贝对象
 *
 * @export
 * @param {*} obj
 * @param {*} [map=new Map()]
 * @return {*}
 */
function clone(obj, map) {
    if (map === void 0) { map = new Map(); }
    var copy;
    switch (typeof obj) {
        case 'undefined':
            break;
        case 'number':
        case 'boolean':
            copy = obj;
            break;
        case 'string':
            copy = obj + '';
            break;
        case 'bigint':
            copy = BigInt(obj);
            break;
        case 'object':
            if (obj === null) {
                copy = null;
            }
            else if (obj instanceof RegExp) {
                copy = new RegExp(obj.source, obj.flags);
            }
            else if (obj instanceof Date) {
                copy = new Date(obj);
            }
            else {
                var has = map.get(obj);
                if (has) {
                    return has;
                }
                if (Array.isArray(obj)) {
                    var len = obj.length;
                    copy = new Array(len);
                    map.set(obj, copy);
                    for (var i = 0; i < len; i++) {
                        copy[i] = clone(obj[i], map);
                    }
                }
                else {
                    copy = {};
                    map.set(obj, copy);
                    Reflect.ownKeys(obj).forEach(function (key) {
                        copy[key] = clone(obj[key], map);
                    });
                }
            }
            break;
        case 'symbol':
            copy = Symbol(obj.description);
            break;
        case 'function':
            copy = obj;
            break;
    }
    return copy;
}
/**
 * 自定义判断类型函数
 *
 * @export
 * @param {*} value
 * @return {*}  {string}
 */
function typeOf(value) {
    var type = typeof value;
    switch (type) {
        case 'string':
        case 'boolean':
        case 'bigint':
        case 'number':
        case 'symbol':
        case 'function':
        case 'undefined':
            /* eslint-disable no-self-compare */
            if (value !== value) {
                return 'NaN';
            }
            return type;
        case 'object':
            if (value === null) {
                return 'null';
            }
            var typeString = toString(value).slice(8);
            if (typeString.includes('Object')) {
                return 'object';
            }
            if (Array.isArray(value)) {
                return 'array';
            }
    }
    return 'object';
}
/**
 * 深度比较函数，不能比较有循环引用的对象
 *
 * @export
 * @param {*} value
 * @param {*} other
 * @return {*}  {boolean}
 */
function strictEqual(value, other, ma) {
    var e_1, _a;
    if (ma === void 0) { ma = new Map(); }
    if (value === other) {
        return true;
    }
    var typeA = typeOf(value);
    var typeB = typeOf(other);
    if (typeA !== typeB) {
        return false;
    }
    switch (typeA) {
        case 'symbol':
            return (value.description ===
                other.description);
        case 'NaN':
            return true;
        case 'array':
            if (value.length !== other.length) {
                return false;
            }
            if (ma.has(value)) {
                return ma.get(value) === other;
            }
            else if (ma.has(other)) {
                return false;
            }
            ma.set(value, other);
            for (var i = 0, len = value.length; i < len; i++) {
                if (!strictEqual(value[i], other[i], ma)) {
                    return false;
                }
            }
            return true;
        case 'object':
            if (ma.has(value)) {
                return ma.get(value) === other;
            }
            ma.set(value, other);
            try {
                for (var _b = __values(Reflect.ownKeys(value)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    if (!strictEqual(value[key], other[key], ma)) {
                        return false;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return true;
    }
    return value === other;
}
/**
 * 判断是不是一个空对象
 *
 * @export
 * @param {object} value
 * @return {*}  {boolean}
 */
function isEmptyObject(v) {
    if (!isObject(v)) {
        return false;
    }
    return !Object.keys(v).length;
}
/**
 * 获取指定范围的随机整数
 * @param min 最小值
 * @param max 最大值
 */
function random(min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return (Math.random() * (+max - +min) + +min) | 0;
}
/**
 * 洗牌算法（数组乱序算法）
 * @param {Array} array
 * @return {Array} 返回乱序后的数组
 */
function shuffle(array) {
    var _a;
    var result = clone(array);
    var m = result.length, i;
    while (m) {
        i = (Math.random() * m--) | 0;
        _a = __read([result[i], result[m]], 2), result[m] = _a[0], result[i] = _a[1];
    }
    return result;
}

exports.Lock = Lock;
exports.bin2dec = bin2dec;
exports.bin2hex = bin2hex;
exports.bytes2simple = bytes2simple;
exports.clone = clone;
exports.dayOfTheWeek = dayOfTheWeek;
exports.dealPath = dealPath;
exports.debounce = debounce;
exports.dec2bin = dec2bin;
exports.dec2hex = dec2hex;
exports.hex2bin = hex2bin;
exports.hex2dec = hex2dec;
exports.isDef = isDef;
exports.isEmptyObject = isEmptyObject;
exports.isObject = isObject;
exports.isPromise = isPromise;
exports.noop = noop;
exports.numberConvert = numberConvert;
exports.object2QueryString = object2QueryString;
exports.query2Object = query2Object;
exports.random = random;
exports.shuffle = shuffle;
exports.simple2bytes = simple2bytes;
exports.strictEqual = strictEqual;
exports.throttle = throttle;
exports.toNumber = toNumber;
exports.toString = toString;
exports.typeOf = typeOf;
