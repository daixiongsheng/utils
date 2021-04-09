import { clone, noop, strictEqual, typeOf } from '../src'

describe('base', () => {
  it('noop', () => {
    expect(noop()).toBe(void 0)
  })

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
          for: 'bar'
        },
        r: /r/,
        date: new Date(),
        g: [{ foo: 'bar' }, 1, null],
        h: 1n
      }
    ].forEach(input => {
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

  it('类型', () => {
    expect(typeOf([])).toBe('array')
    expect(typeOf(1)).toBe('number')
    expect(typeOf(NaN)).toBe('NaN')
    expect(typeOf(null)).toBe('null')
    expect(typeOf({})).toBe('object')
    expect(typeOf(/r/)).toBe('object')
    expect(typeOf(true)).toBe('boolean')
    expect(typeOf(void 0)).toBe('undefined')
    expect(typeOf(1n)).toBe('bigint')
    expect(typeOf(Symbol())).toBe('symbol')
    expect(typeOf(Symbol())).not.toBe('number')
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
      a: 1
    }
    const b = {
      foo: 'bar',
      a,
      s: Symbol()
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
