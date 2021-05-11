import { dayOfTheWeek } from '../src'

describe('日期', () => {
  it('返回今天是周几', () => {
    expect(dayOfTheWeek(10, 4)[1]).toBe(6)
    expect(dayOfTheWeek(1, 2)[1]).toBe(1)
    expect(dayOfTheWeek(10, 4, 2021)[1]).toBe(6)
    expect(dayOfTheWeek(28, 4, 2021)[1]).toBe(3)
    const toDay = new Date()

    expect(dayOfTheWeek(toDay)[1]).toBeGreaterThanOrEqual(1)
    expect(dayOfTheWeek(toDay)[1]).toBeLessThanOrEqual(7)
    expect(dayOfTheWeek()[1]).toEqual(dayOfTheWeek(toDay)[1])
  })
})
