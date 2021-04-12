/**
 * 空函数
 *
 * @export
 * @return {*}  {void}
 */
export function noop(): void {
  return void 0
}

interface DebouncedFunction<T extends (...args: any) => any> {
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
  immediate: boolean = true
): DebouncedFunction<T> {
  let timer: number | null = null
  function f(...args: Parameters<T>): void {
    const that = this
    if (timer) {
      clearTimeout(timer)
    }
    if (immediate) {
      const callNow = !timer
      timer = (setTimeout(() => {
        timer = null
      }, delay) as unknown) as number
      if (callNow) {
        return func.apply(that, args)
      }
    } else {
      timer = (setTimeout(() => {
        timer = null
        func.apply(that, args)
      }, delay) as unknown) as number
    }
  }
  f.cancel = () => {
    clearTimeout(timer as any)
  }
  return f
}

interface ThrottledFunction<T extends (...args: any) => any> {
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
  return function(...args: Parameters<T>): void {
    const that = this
    const now = Date.now()
    if (now - prev >= delay) {
      func.apply(that, args)
      prev = Date.now()
    }
  }
}
