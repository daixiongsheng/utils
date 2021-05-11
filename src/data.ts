/**
 * Object.prototype.toString
 *
 * @export
 * @param {*} o
 * @return {*}  {string}
 */
export function toString<T = any>(o: T): string {
  return Object.prototype.toString.call(o)
}

/**
 * 判断是不是对象
 *
 * @export
 * @template T
 * @param {T} o
 * @return {*}  {boolean}
 */
export function isObject<T = any>(o: T): boolean {
  return typeof o === 'object' && o !== null
}

export type BaseType = boolean | number | string | symbol | bigint | any;
/**
 * 判断有没有定义，不是null和undefined
 *
 * @export
 * @template T
 * @param {T} o
 * @return {*}  {boolean}
 */
export function isDef(v: BaseType): boolean {
  return v !== undefined && v !== null
}

/**
 * 判断是不是一个promise
 *
 * @export
 * @param {*} v
 * @return {*}  {boolean}
 */
export function isPromise(v: BaseType): boolean {
  return (
    isDef(v) && typeof v.then === 'function' && typeof v.catch === 'function'
  )
}

/**
 * 深拷贝对象
 *
 * @export
 * @param {*} obj
 * @param {*} [map=new Map()]
 * @return {*}
 */
export function clone<T = any>(obj: T, map = new Map()): T {
  let copy
  switch (typeof obj) {
    case 'undefined':
      break
    case 'number':
    case 'boolean':
      copy = obj
      break
    case 'string':
      copy = obj + ''
      break
    case 'bigint':
      copy = BigInt(obj)
      break
    case 'object':
      if (obj === null) {
        copy = null
      } else if (obj instanceof RegExp) {
        copy = new RegExp(obj.source, obj.flags)
      } else if (obj instanceof Date) {
        copy = new Date(obj)
      } else {
        const has = map.get(obj)
        if (has) {
          return has
        }
        if (Array.isArray(obj)) {
          const len = obj.length
          copy = new Array(len)
          map.set(obj, copy)
          for (let i = 0; i < len; i++) {
            copy[i] = clone(obj[i], map)
          }
        } else {
          copy = {}
          map.set(obj, copy)
          Reflect.ownKeys(obj as any).forEach(key => {
            copy[key] = clone(obj[key], map)
          })
        }
      }
      break
    case 'symbol':
      copy = Symbol(obj.description)
      break
    case 'function':
      copy = obj
      break
  }
  return copy
}
/**
 * 自定义判断类型函数
 *
 * @export
 * @param {*} value
 * @return {*}  {string}
 */
export function typeOf<T = any>(value: T): string {
  const type = typeof value
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
        return 'NaN'
      }
      return type
    case 'object':
      if (value === null) {
        return 'null'
      }
      const typeString = toString(value).slice(8)
      if (typeString.includes('Object')) {
        return 'object'
      }
      if (Array.isArray(value)) {
        return 'array'
      }
  }
  return 'object'
}

/**
 * 深度比较函数，不能比较有循环引用的对象
 *
 * @export
 * @param {*} value
 * @param {*} other
 * @return {*}  {boolean}
 */
export function strictEqual<T = any>(
  value: T,
  other: T,
  ma = new Map()
): boolean {
  if (value === other) {
    return true
  }
  const typeA = typeOf(value)
  const typeB = typeOf(other)
  if (typeA !== typeB) {
    return false
  }
  switch (typeA) {
    case 'symbol':
      return (
        ((value as unknown) as symbol).description ===
        ((other as unknown) as symbol).description
      )
    case 'NaN':
      return true
    case 'array':
      if (
        ((value as unknown) as []).length !== ((other as unknown) as []).length
      ) {
        return false
      }

      if (ma.has(value)) {
        return ma.get(value) === other
      } else if (ma.has(other)) {
        return false
      }
      ma.set(value, other)
      for (let i = 0, len = ((value as unknown) as []).length; i < len; i++) {
        if (!strictEqual(value[i], other[i], ma)) {
          return false
        }
      }
      return true
    case 'object':
      if (ma.has(value)) {
        return ma.get(value) === other
      }
      ma.set(value, other)
      for (const key of Reflect.ownKeys(value as any)) {
        if (!strictEqual(value[key], other[key], ma)) {
          return false
        }
      }
      return true
  }
  return value === other
}

/**
 * 判断是不是一个空对象
 *
 * @export
 * @param {object} value
 * @return {*}  {boolean}
 */
export function isEmptyObject(v: BaseType): boolean {
  if (!isObject(v)) {
    return false
  }
  return !Object.keys(v).length
}

/**
 * 获取指定范围的随机整数
 * @param min 最小值
 * @param max 最大值
 */
export function random(min = 0, max = 100): number {
  return (Math.random() * (+max - +min) + +min) | 0
}

/**
 * 洗牌算法（数组乱序算法）
 * @param {Array} array
 * @return {Array} 返回乱序后的数组
 */
export function shuffle<T = any>(array: T[]): T[] {
  const result: T[] = clone(array)
  let m = result.length,
    i
  while (m) {
    i = (Math.random() * m--) | 0
    ;[result[m], result[i]] = [result[i], result[m]]
  }
  return result
}
