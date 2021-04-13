/**
 * Object.prototype.toString
 *
 * @export
 * @param {*} o
 * @return {*}  {string}
 */
export declare function toString<T = any>(o: T): string;
/**
 * 判断是不是对象，typeof
 *
 * @export
 * @template T
 * @param {T} o
 * @return {*}  {boolean}
 */
export declare function isObject<T = any>(o: T): boolean;
/**
 * 判断有没有定义，不是null和undefined
 *
 * @export
 * @template T
 * @param {T} o
 * @return {*}  {boolean}
 */
export declare function isDef(v: any): boolean;
/**
 * 判断是不是一个promise
 *
 * @export
 * @param {*} v
 * @return {*}  {boolean}
 */
export declare function isPromise(v: any): boolean;
/**
 * 深拷贝对象
 *
 * @export
 * @param {*} obj
 * @param {*} [map=new Map()]
 * @return {*}
 */
export declare function clone<T = any>(obj: T, map?: Map<any, any>): T;
/**
 * 自定义判断类型函数
 *
 * @export
 * @param {*} value
 * @return {*}  {string}
 */
export declare function typeOf<T = any>(value: T): string;
/**
 * 深度比较函数，不能比较有循环引用的对象
 *
 * @export
 * @param {*} value
 * @param {*} other
 * @return {*}  {boolean}
 */
export declare function strictEqual<T = any>(value: T, other: T, ma?: Map<any, any>): boolean;
