/**
 * 讲字符串转成数字,转换失败会返回原来的值
 *
 * @export
 * @param {string} val
 * @return {*}  {(number | string)}
 */
export declare function toNumber(val: string | number): number | string;
/**
 * 进制转换
 *
 * @export
 * @param {number | string} number 需要转换的数
 * @param {number} base 原进制
 * @param {number} radix 转换后的进制
 * @return {*}  {string}
 */
export declare function numberConvert(number: number | string, base: number, radix: number): string;
/**
 * 二进制转16进制
 *
 * @export
 * @param {(string | number)} s
 * @return {*}  {string}
 */
export declare function bin2hex(s: string | number): string;
/**
 * 二进制转10进制
 *
 * @export
 * @param {(string | number)} s
 * @return {*}  {string}
 */
export declare function bin2dec(s: string | number): string;
/**
 * 16进制转2进制
 *
 * @export
 * @param {(string | number)} s
 * @return {*}  {string}
 */
export declare function hex2bin(s: string | number): string;
/**
 * 16进制转10进制
 *
 * @export
 * @param {(string | number)} s
 * @return {*}  {string}
 */
export declare function hex2dec(s: string | number): string;
/**
 * 10进制转2进制
 *
 * @export
 * @param {(string | number)} s
 * @return {*}  {string}
 */
export declare function dec2bin(s: string | number): string;
/**
 * 10进制转16进制
 *
 * @export
 * @param {(string | number)} s
 * @return {*}  {string}
 */
export declare function dec2hex(s: string | number): string;
/**
 * 将字节数转成文本形式 1024 --> 1KB
 * 字节单位换算
 * @export
 * @param {number} bytes
 * @return {*}  {string}
 */
export declare function bytes2simple(bytes: number): string;
/**
 * 1KB -> 1024
 * 字节单位换算
 * @export
 * @param {string} size
 * @return {*}  {(number | string)}
 */
export declare function simple2bytes(size: string): number;
