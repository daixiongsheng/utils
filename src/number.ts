/**
 * 进制转换
 *
 * @export
 * @param {number} number 需要转换的数
 * @param {number} base 原进制
 * @param {number} radix 转换后的进制
 * @return {*}  {string}
 */
export function numberConvert(
  number: number | string,
  base: number,
  radix: number
): string {
  return parseInt(number + '', base).toString(radix)
}

/**
 * 二进制转16进制
 *
 * @export
 * @param {(string | number)} s
 * @return {*}  {string}
 */
export function bin2hex(s: string | number): string {
  return numberConvert(s, 2, 16)
}

/**
 * 二进制转10进制
 *
 * @export
 * @param {(string | number)} s
 * @return {*}  {string}
 */
export function bin2dec(s: string | number): string {
  return numberConvert(s, 2, 10)
}

/**
 * 16进制转2进制
 *
 * @export
 * @param {(string | number)} s
 * @return {*}  {string}
 */
export function hex2bin(s: string | number): string {
  return numberConvert(s, 16, 2)
}

/**
 * 16进制转10进制
 *
 * @export
 * @param {(string | number)} s
 * @return {*}  {string}
 */
export function hex2dec(s: string | number): string {
  return numberConvert(s, 16, 10)
}

/**
 * 10进制转2进制
 *
 * @export
 * @param {(string | number)} s
 * @return {*}  {string}
 */
export function dec2bin(s: string | number): string {
  return numberConvert(s, 10, 2)
}

/**
 * 10进制转16进制
 *
 * @export
 * @param {(string | number)} s
 * @return {*}  {string}
 */
export function dec2hex(s: string | number): string {
  return numberConvert(s, 10, 16)
}

/**
 * 将字节数转成文本形式 1024 --> 1KB
 * 字节单位换算
 * @export
 * @param {number} bytes
 * @return {*}  {string}
 */
export function bytes2simple(bytes: number): string {
  let ret = ''
  const symbols = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let exp = (Math.log(bytes) / Math.log(2)) | 0
  if (exp < 1) {
    exp = 0
  }
  const i = Math.floor(exp / 10)
  ret = `${bytes / Math.pow(2, 10 * i)}`

  if (bytes.toString().length > bytes.toFixed(2).toString().length) {
    ret = bytes.toFixed(2)
  }
  return ret + symbols[i]
}

/**
 * 1KB -> 1024
 * 字节单位换算
 * @export
 * @param {string} size
 * @return {*}  {(number | string)}
 */
export function simple2bytes(size: string): number {
  const symbols = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const length = parseInt(size, 10)
  const unit = size.substring(length.toString().length).toUpperCase()
  const index = symbols.findIndex(i => i === unit)
  return length * Math.pow(2, 10 * index)
}
