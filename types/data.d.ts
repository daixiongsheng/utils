/**
 * Object.prototype.toString
 *
 * @export
 * @param {*} o
 * @return {*}  {string}
 */
export declare function toString<T = any>(o: T): string;
/**
 * 判断是不是对象
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
/**
 * 判断是不是一个空对象
 *
 * @export
 * @param {object} value
 * @return {*}  {boolean}
 */
export declare function isEmptyObject(v: any): boolean;
/**
 * 获取指定范围的随机整数
 * @param min 最小值
 * @param max 最大值
 */
export declare function random(min?: number, max?: number): number;
/**
 * 洗牌算法（数组乱序算法）
 * @param {Array} array
 * @return {Array} 返回乱序后的数组
 */
export declare function shuffle<T = any>(array: T[]): T[];
