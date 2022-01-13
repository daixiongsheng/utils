/**
 * 空函数
 *
 * @export
 * @return {*}  {void}
 */
export function noop(): void {
  return void 0
}

export interface DebouncedFunction<T extends (...args: any) => any> {
  (...args: Parameters<T>): void
  cancel: () => void
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
export function debounce<T extends (...args: any) => any>(
  func: T,
  delay: number,
  immediate = false
): DebouncedFunction<T> {
  let timer: number | null = null
  function f(...args: Parameters<T>): void {
    const that = this
    if (timer) {
      clearTimeout(timer)
    }
    if (immediate) {
      const callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, delay) as unknown as number
      if (callNow) {
        return func.apply(that, args)
      }
    } else {
      timer = setTimeout(() => {
        timer = null
        func.apply(that, args)
      }, delay) as unknown as number
    }
  }
  f.cancel = () => {
    clearTimeout(timer as any)
  }
  return f
}

export interface ThrottledFunction<T extends (...args: any) => any> {
  (...args: Parameters<T>): void
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
export function throttle<T extends (...args: any) => any>(
  func: T,
  delay: number
): ThrottledFunction<T> {
  let prev = Date.now()
  return function (...args: Parameters<T>): void {
    const that = this
    const now = Date.now()
    if (now - prev >= delay) {
      func.apply(that, args)
      prev = Date.now()
    }
  }
}

// 锁
export const Lock = {
  /**
   *
   * 加锁
   * @param {string} key 加锁的内容
   * @return {*}  {boolean}
   */
  isLocked(key: string): boolean {
    return Boolean(this[`$$${key}`])
  },

  /**
   *
   * 解锁
   * @param {string} key 解锁的内容
   */
  unlock(key: string): void {
    if (`$$${key}` in this) {
      delete this[`$$${key}`]
    }
  },

  /**
   *
   * 判断某有没有加锁
   * @param {string} key
   */
  lock(key: string): void {
    this[`$$${key}`] = true
  },
}

/**
 *
 * 从右到左
 *
 * @param  {Array[Function]} funcs
 */

export function compose(
  ...funcs: ((value: any) => any)[]
): (value: any) => any {
  return function (x) {
    return funcs.reduceRight(function (res, cb) {
      return cb(res)
    }, x)
  }
}

/**
 *
 * 从左到右
 *
 * @param  {Array[Function]} funcs
 */
export function pipe(...funcs: ((value: any) => any)[]): (value: any) => any {
  return function (x) {
    return funcs.reduce(function (res, cb) {
      return cb(res)
    }, x)
  }
}
