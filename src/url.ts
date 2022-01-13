/**
 * 将对象转成query串
 * @example object2QueryString({age:123}) => age=123
 * @param o
 */
export function object2QueryString(o: Record<string, any>): string {
  let s = ''
  const keys = Object.keys(o)
  if (!keys.length) {
    return s
  }
  keys.forEach((key) => {
    const value = o[key]
    const type = typeof value
    switch (type) {
      case 'number':
        // no NaN
        if (value === value) {
          s += `${key}=${value}&`
        }
        break
      case 'object':
        if (value !== null) {
          s += `${key}=${encodeURIComponent(object2QueryString(value))}&`
        } else {
          s += `${key}=null&`
        }
        break
      case 'boolean':
        s += `${key}=${value}&`
        break
      case 'string':
        s += `${key}=${encodeURIComponent(value)}&`
        break
      default:
        break
    }
  })
  return s.substr(0, s.length && s.length - 1)
}

/**
 * 用于处理url参数传递需要手动拼接字符串的问题
 *
 * @param {string} path url
 * @param {object} pramsObj 传给url的参数对象
 * @return {string} 返回拼接后的url串
 */
export function dealPath(
  path: string,
  pramsObject: Record<string, any> = {} as Record<string, any>
): string {
  if (!path || path.length === 1 || Object.keys(pramsObject).length === 0) {
    return path
  }
  // 是否已经经过处理
  const isDealt = path.includes('?')
  if (isDealt) {
    const [p, ...query] = path.split('?')
    pramsObject = {
      ...query2Object(query.join('')),
      ...pramsObject,
    }
    path = p
  }
  const queryString = object2QueryString(pramsObject)
  path += `?${queryString}&`
  return path.substr(0, path.length - 1)
}

/**
 * 将查询串转成对象，并且最大可能的还原原来的类型
 * @param queryString {string} 需要解析的url query 串
 * @return {Object}
 */
export function query2Object(queryString: string): Record<string, string> {
  const o = {}
  if (!queryString) {
    return o
  }
  if (queryString.includes('?')) {
    const splitArray = queryString.split('?')
    queryString = splitArray[splitArray.length - 1]
  }
  const qArr = queryString.split('&')
  qArr.forEach((item) => {
    const [k, v] = item.split('=')
    o[k] = v === void 0 ? '' : decodeURIComponent(v)
  })

  Object.keys(o).forEach((key) => {
    const value = o[key]
    switch (value) {
      case 'null':
        o[key] = null
        return
      case 'false':
        o[key] = false
        return
      case 'true':
        o[key] = true
        return
      default:
        break
    }
    // value是number
    if (parseInt(value, 10).toString() === value) {
      o[key] = Number(value)
      return
    }
    try {
      const result = JSON.parse(decodeURIComponent(value))
      o[key] = result
    } catch (e) {
      o[key] = value
    }
  })
  return o
}
