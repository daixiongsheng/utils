import {
  numberConvert,
  dec2hex,
  hex2bin,
  bin2dec,
  hex2dec,
  dec2bin,
  bin2hex,
  bytes2simple,
  simple2bytes,
  toNumber,
} from '../src'

describe('进制转换', () => {
  it('toNumber', () => {
    expect(toNumber(1)).toBe(1)
    expect(toNumber('100')).toBe(100)
    expect(toNumber('189xxx')).toBe(189)
    expect(toNumber('0x11')).toBe(0)
    expect(toNumber('011')).toBe(11)
    expect(toNumber('af11')).toBe('af11')
  })

  it('任意进制转任意进制', () => {
    expect(numberConvert(10, 10, 10)).toBe('10')
    expect(numberConvert(10, 10, 16)).toBe('a')
    expect(numberConvert(10, 2, 16)).toBe('2')
    expect(numberConvert(10, 2, 16)).toBe('2')
    expect(numberConvert(10, 2, 16)).toBe('2')
  })

  it('10进制转2进制', () => {
    expect(dec2bin(2)).toBe('10')
    expect(dec2bin(-10)).toBe('-1010')
  })

  it('10进制转16进制', () => {
    expect(dec2hex(10)).toBe('a')
    expect(dec2hex('16')).toBe('10')
  })

  it('2进制转10进制', () => {
    expect(bin2dec(1010)).toBe('10')
    expect(bin2dec(1000)).toBe('8')
    expect(bin2dec('1000')).toBe('8')
  })

  it('2进制转16进制', () => {
    expect(bin2hex(10)).toBe('2')
    expect(bin2hex('10')).toBe('2')
    expect(bin2hex('10')).toBe('2')
    expect(bin2hex(10000)).toBe('10')
  })

  it('16进制转2进制', () => {
    expect(hex2bin(1)).toBe('1')
    expect(hex2bin(10)).toBe('10000')
  })

  it('16进制转10进制', () => {
    expect(hex2dec(10)).toBe('16')
  })
})

describe('单位换算', () => {
  it('字节简化', () => {
    expect(bytes2simple(1024)).toBe('1KB')
    expect(bytes2simple(2)).toBe('2B')
    expect(bytes2simple(0)).toBe('0B')
    expect(bytes2simple(100.245)).toBe('100.25B')
    expect(bytes2simple(1500)).toBe('1.46484375KB')
    expect(bytes2simple(1023)).toBe('1023B')
    expect(bytes2simple(1024 * 1024)).toBe('1MB')
    expect(bytes2simple(1024 * 1024 * 1024)).toBe('1GB')
  })

  it('还原字节', () => {
    expect(simple2bytes('1b')).toBe(1)
    expect(simple2bytes('1kb')).toBe(1024)
    expect(simple2bytes('1mb')).toBe(1024 * 1024)
    expect(simple2bytes('1gb')).toBe(1024 * 1024 * 1024)
    expect(simple2bytes('1tb')).toBe(1024 * 1024 * 1024 * 1024)
  })
})
