/**
 * 空函数
 *
 * @export
 * @return {*}  {void}
 */
export declare function noop(): void;
/**
 * Object.prototype.toString
 *
 * @export
 * @param {*} o
 * @return {*}  {string}
 */
export declare function toString<T = any>(o: T): string;
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
