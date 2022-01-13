import {
  clone,
  strictEqual,
  typeOf,
  isObject,
  isDef,
  isPromise,
  isEmptyObject,
  random,
  shuffle,
} from '../src'

describe('类型', () => {
  it('isPromise', () => {
    expect(isPromise({})).toBe(false)
    expect(isPromise(new Promise((_) => _))).toBe(true)
    expect(isPromise(Promise.resolve())).toBe(true)
    expect(isPromise({ then() {}, catch() {} })).toBe(true)
  })

  it('isObject', () => {
    expect(isObject({})).toBe(true)
    expect(isObject([])).toBe(true)
    expect(isObject(null)).toBe(false)
    expect(isObject(1)).toBe(false)
  })

  it('isDef', () => {
    expect(isDef({})).toBe(true)
    expect(isDef([])).toBe(true)
    expect(isDef(null)).toBe(false)
    expect(isDef(void 0)).toBe(false)
  })

  it('类型', () => {
    expect(typeOf([])).toBe('array')
    expect(typeOf(1)).toBe('number')
    expect(typeOf(NaN)).toBe('NaN')
    expect(typeOf(null)).toBe('null')
    expect(typeOf({})).toBe('object')
    expect(typeOf(/r/)).toBe('object')
    expect(typeOf(true)).toBe('boolean')
    expect(typeOf(void 0)).toBe('undefined')
    // @ts-ignore
    expect(typeOf()).toBe('undefined')
    // @ts-ignore
    expect(typeOf(1n)).toBe('bigint')
    expect(typeOf(Symbol())).toBe('symbol')
    expect(typeOf(Symbol())).not.toBe('number')
  })
})

describe('base', () => {
  it('克隆对象', () => {
    expect(clone({ a: 1, b: 2 })).toStrictEqual({ a: 1, b: 2 })
    ;[
      1,
      true,
      false,
      null,
      NaN,
      void 0,
      [1, 2, 3],
      {
        a: 1,
        b: null,
        c: true,
        d: NaN,
        e: () => {
          return void 0
        },
        f: {
          for: 'bar',
        },
        r: /r/,
        date: new Date(),
        g: [{ foo: 'bar' }, 1, null],
        // @ts-ignore
        h: 1n,
      },
    ].forEach((input) => {
      // Symbol 不能StrictEqual
      expect(clone(input)).toStrictEqual(input)
      if (typeof input === 'object' && input !== null) {
        expect(clone(input)).not.toBe(input)
      }
    })
  })

  it('克隆对象循环引用对象', () => {
    const a: any = {}
    const b = { a }
    a.b = b
    const cloneA = clone(a)
    expect(Reflect.ownKeys(cloneA)).toStrictEqual(['b'])
    expect(Reflect.ownKeys(cloneA.b)).toStrictEqual(['a'])
  })

  it('深比较', () => {
    expect(strictEqual({}, {})).toBe(true)
    expect(strictEqual(NaN, NaN)).toBe(true)
    expect(strictEqual({ a: 1 }, {})).toBe(false)
    expect(strictEqual([1, 2, 3], [4, 5, 6])).toBe(false)
    expect(strictEqual([1, 2, 3], [4, 5])).toBe(false)
    expect(strictEqual(2, 2)).toBe(true)
    expect(strictEqual(2, 3)).toBe(false)
    expect(strictEqual({ foo: 'bar' }, {})).toBe(false)
  })

  it('深比较循环引用', () => {
    const a: any = {
      n: NaN,
      c: [],
      a: 1,
    }
    const b = {
      foo: 'bar',
      a,
      s: Symbol(),
    }
    a.b = b
    a.a = a

    const c = [a]
    const d = [a, c]
    c.push(d)

    expect(strictEqual(a, b)).toBe(false)
    expect(strictEqual(a, a)).toBe(true)
    expect(strictEqual(c, d)).toBe(false)
    expect(strictEqual(a, clone(a))).toBe(true)
    expect(strictEqual(c, clone(c))).toBe(true)
  })
})

describe('判断是不是空对象', () => {
  it('空对象', () => {
    expect(isEmptyObject({})).toBe(true)
    expect(isEmptyObject([])).toBe(true)
    expect(isEmptyObject(null)).toBe(false)
    expect(isEmptyObject(void 0)).toBe(false)
    expect(isEmptyObject(1)).toBe(false)
    expect(isEmptyObject(Object.create(null))).toBe(true)
  })

  it('不是空对象', () => {
    expect(isEmptyObject(1)).toBe(false)
    expect(isEmptyObject(null)).toBe(false)
    expect(isEmptyObject(void 0)).toBe(false)
    expect(isEmptyObject([1])).toBe(false)
    expect(isEmptyObject({ foo: 'bar' })).toBe(false)
  })
})

describe('随机娄', () => {
  it('随机数', () => {
    const result: number[] = []
    for (let i = 0; i < 100; i++) {
      const a = random(0, i)
      const b = random(300, i)
      expect(a).toBeGreaterThanOrEqual(0)
      expect(random()).toBeGreaterThanOrEqual(0)
      expect(random()).toBeLessThanOrEqual(100)
      expect(a).toBeLessThanOrEqual(i)
      expect(b).toBeLessThanOrEqual(300)
      expect(b).toBeGreaterThanOrEqual(i)
      result.push(a, b)
    }
    expect(new Set(result).size).toBeGreaterThanOrEqual(10)
    expect(random(0, 0)).toBe(0)
    expect(random(100, 100)).toBe(100)
  })
})

describe('乱序数组', () => {
  it('乱序', () => {
    for (let i = 0; i < 300; i++) {
      const arr = new Array(10).map(() => random())
      expect(shuffle(arr)).not.toStrictEqual(arr)
    }
  })
})
