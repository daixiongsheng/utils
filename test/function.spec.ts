import { noop, debounce, throttle } from '../src'

describe('base', () => {
  it('noop', () => {
    expect(noop()).toBe(void 0)
  })
})

describe('防抖', () => {
  it('debounce 200ms', () => {
    const fn = debounce(() => {}, 0)
    expect(fn).toBeDefined()
    expect(fn.cancel).toBeDefined()
    fn()
    fn()
    fn()
    setTimeout(() => {
      expect(fn).toBeCalled()
    }, 200)
    setTimeout(() => {
      expect(fn).toBeCalled()
    }, 400)
  })

  it('debounce immediate', () => {
    const fn = debounce(() => {}, 0, false)
    expect(fn).toBeDefined()
    expect(fn.cancel).toBeDefined()
    fn()
    fn()
    fn()
    fn.cancel()
    setTimeout(() => {
      expect(fn).toBeCalled()
    }, 200)
    setTimeout(() => {
      expect(fn).toBeCalled()
    }, 400)
  })
})

describe('节流', () => {
  it('throttle 200ms', () => {
    const fn = throttle(() => {}, 200)
    expect(fn).toBeDefined()
    fn()
    fn()
    fn()
    setTimeout(() => {
      expect(fn).toBeCalled()
    }, 400)
    setTimeout(() => {
      expect(fn).toBeCalled()
    }, 400)
  })
})
