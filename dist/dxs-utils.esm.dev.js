/*!
 * dxs-utils v0.0.2
 * (c) 2020-2021 Xiongsheng Dai
 * Released under the MIT License.
 */
/**
 * 进制转换
 *
 * @export
 * @param {number} number 需要转换的数
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
    let ret = '';
    const symbols = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let exp = (Math.log(bytes) / Math.log(2)) | 0;
    if (exp < 1) {
        exp = 0;
    }
    const i = Math.floor(exp / 10);
    ret = `${bytes / Math.pow(2, 10 * i)}`;
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
    const symbols = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const length = parseInt(size, 10);
    const unit = size.substring(length.toString().length).toUpperCase();
    const index = symbols.findIndex(i => i === unit);
    return length * Math.pow(2, 10 * index);
}

/**
 * 将对象转成query串
 * @example object2QueryString({age:123}) => age=123
 * @param o
 */
function object2QueryString(o) {
    let s = '';
    const keys = Object.keys(o);
    if (!keys.length) {
        return s;
    }
    keys.forEach(key => {
        const value = o[key];
        const type = typeof value;
        switch (type) {
            case 'number':
                // no NaN
                if (value === value) {
                    s += `${key}=${value}&`;
                }
                break;
            case 'object':
                if (value !== null) {
                    s += `${key}=${encodeURIComponent(object2QueryString(value))}&`;
                }
                else {
                    s += `${key}=null&`;
                }
                break;
            case 'boolean':
                s += `${key}=${value}&`;
                break;
            case 'string':
                s += `${key}=${encodeURIComponent(value)}&`;
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
function dealPath(path, pramsObject = {}) {
    if (!path || path.length === 1 || Object.keys(pramsObject).length === 0) {
        return path;
    }
    // 是否已经经过处理
    const isDealt = path.includes('?');
    if (isDealt) {
        const [p, ...query] = path.split('?');
        pramsObject = {
            ...query2Object(query.join('')),
            ...pramsObject
        };
        path = p;
    }
    else if (path[path.length - 1] !== '/') {
        path = `${path}/`;
    }
    const queryString = object2QueryString(pramsObject);
    path += `?${queryString}&`;
    return path.substr(0, path.length - 1);
}
/**
 * 将查询串转成对象，并且最大可能的还原原来的类型
 * @param queryString {string} 需要解析的url query 串
 * @return {Object}
 */
function query2Object(queryString) {
    const o = {};
    if (!queryString) {
        return o;
    }
    if (queryString.includes('?')) {
        const splitArray = queryString.split('?');
        queryString = splitArray[splitArray.length - 1];
    }
    const qArr = queryString.split('&');
    qArr.forEach(item => {
        const [k, v] = item.split('=');
        o[k] = v === void 0 ? '' : decodeURIComponent(v);
    });
    Object.keys(o).forEach(key => {
        const value = o[key];
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
            const result = JSON.parse(decodeURIComponent(value));
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
 * @param {(number | Date)} day
 * @param {number} [month]
 * @param {number} [year]
 * @return {*}  {string}
 */
function dayOfTheWeek(day, month, year) {
    // 基姆拉尔森计算公式
    if (day instanceof Date) {
        month = day.getMonth() + 1;
        year = day.getFullYear();
        day = day.getDate();
    }
    const now = new Date();
    month = typeof month === 'undefined' ? now.getMonth() + 1 : month;
    year = typeof year === 'undefined' ? now.getFullYear() : year;
    const arr = [
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
    const w = ((day +
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
 * 深拷贝对象
 *
 * @export
 * @param {*} obj
 * @param {*} [map=new Map()]
 * @return {*}
 */
function clone(obj, map = new Map()) {
    let copy;
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
                const has = map.get(obj);
                if (has) {
                    return has;
                }
                if (Array.isArray(obj)) {
                    const len = obj.length;
                    copy = new Array(len);
                    map.set(obj, copy);
                    for (let i = 0; i < len; i++) {
                        copy[i] = clone(obj[i], map);
                    }
                }
                else {
                    copy = {};
                    map.set(obj, copy);
                    Reflect.ownKeys(obj).forEach(key => {
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
    const type = typeof value;
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
            const typeString = toString(value).slice(8);
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
function strictEqual(value, other, ma = new Map()) {
    if (value === other) {
        return true;
    }
    const typeA = typeOf(value);
    const typeB = typeOf(other);
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
            for (let i = 0, len = value.length; i < len; i++) {
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
            for (const key of Reflect.ownKeys(value)) {
                if (!strictEqual(value[key], other[key], ma)) {
                    return false;
                }
            }
            return true;
    }
    return value === other;
}

export { bin2dec, bin2hex, bytes2simple, clone, dayOfTheWeek, dealPath, dec2bin, dec2hex, hex2bin, hex2dec, noop, numberConvert, object2QueryString, query2Object, simple2bytes, strictEqual, toString, typeOf };
