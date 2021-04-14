import { noop, debounce, throttle, Lock } from '../src'

describe('base', () => {
  it('noop', () => {
    expect(noop()).toBe(void 0)
  })
})

describe('防抖', () => {
  it('debounce 200ms', () => {
    return new Promise(resolve => {
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
    return new Promise(resolve => {
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
    return new Promise(resolve => {
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
    return new Promise(resolve => {
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
