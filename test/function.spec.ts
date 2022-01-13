import { noop, debounce, throttle, Lock, compose, pipe } from '../src'

describe('base', () => {
  it('noop', () => {
    expect(noop()).toBe(void 0)
  })
})

describe('防抖', () => {
  it('debounce 200ms', () => {
    return new Promise((resolve) => {
      const callback = jest.fn()
      const fn = debounce(callback, 200)
      expect(fn).toBeDefined()
      expect(fn.cancel).toBeDefined()
      fn()
      fn()
      fn()
      setTimeout(() => {
        expect(callback).toBeCalled()
        resolve(null)
      }, 400)
    })
  })

  it('debounce immediate', () => {
    return new Promise((resolve) => {
      const callback = jest.fn()
      const fn = debounce(callback, 100, true)
      expect(fn).toBeDefined()
      expect(fn.cancel).toBeDefined()
      fn()
      fn()
      fn()
      setTimeout(() => {
        expect(callback).toBeCalled()
        resolve(null)
      }, 400)
    })
  })

  it('debounce cancel', () => {
    return new Promise((resolve) => {
      const callback = jest.fn()
      const fn = debounce(callback, 200)
      expect(fn).toBeDefined()
      expect(fn.cancel).toBeDefined()
      fn()
      setTimeout(() => {
        fn.cancel()
      }, 100)
      setTimeout(() => {
        expect(callback).not.toBeCalled()
        resolve(null)
      }, 400)
    })
  })
})

describe('节流', () => {
  it('throttle 200ms', () => {
    return new Promise((resolve) => {
      const callback = jest.fn()
      const fn = throttle(callback, 200)
      expect(fn).toBeDefined()
      fn()
      fn()
      fn()
      setTimeout(() => {
        fn()
        resolve(() => {
          expect(callback).toBeCalled()
        })
      }, 400)
    })
  })
})

describe('锁', () => {
  it('加解锁', () => {
    expect(Lock.isLocked('getUserInfo')).toBe(false)
    // 加 getUserInfo锁
    Lock.lock('getUserInfo')
    expect(Lock.isLocked('getUserInfo')).toBe(true)
    expect(Lock.isLocked('getUsername')).toBe(false)
    Lock.unlock('getUsername')
    expect(Lock.isLocked('getUserInfo')).toBe(true)
    // 解 getUserInfo锁
    Lock.unlock('getUserInfo')
    expect(Lock.isLocked('getUserInfo')).toBe(false)
  })
})

it('compose', () => {
  function addFive(number) {
    return number + 5
  }
  function multiplyTen(number) {
    return number * 10
  }

  function subSix(number) {
    return number - 6
  }

  expect(compose(addFive, multiplyTen)(10)).toBe(10 * 10 + 5)

  expect(compose(addFive)(10)).toBe(10 + 5)

  expect(compose(multiplyTen, addFive)(10)).toBe((10 + 5) * 10)

  expect(compose(multiplyTen, addFive, subSix)(10)).toBe((10 - 6 + 5) * 10)

  expect(compose(addFive, multiplyTen)(10)).toBe(10 * 10 + 5)

  expect(compose()(10)).toBe(10)
})

it('pipe', () => {
  function addFive(number) {
    return number + 5
  }
  function multiplyTen(number) {
    return number * 10
  }

  function subSix(number) {
    return number - 6
  }

  expect(pipe(addFive, multiplyTen)(10)).toBe((10 + 5) * 10)

  expect(pipe(addFive)(10)).toBe(10 + 5)

  expect(pipe(multiplyTen, addFive)(10)).toBe(10 * 10 + 5)

  expect(pipe(multiplyTen, addFive, subSix)(10)).toBe(10 * 10 + 5 - 6)
})
