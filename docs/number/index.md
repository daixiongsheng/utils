---
title: 数字/单位处理
search: true
---

## 进制转换

**任意进制转任意进制**

```JS
numberConvert(10, 10, 10)// '10'
numberConvert(10, 10, 16)// 'a'
numberConvert(10, 2, 16)// '2'
numberConvert(10, 2, 16)// '2'
numberConvert(10, 2, 16)// '2'
```

**10 进制转 2 进制**

```JS
dec2bin(2)// '10'
dec2bin(-10)// '-1010'

```

**10 进制转 16 进制**

```JS
dec2hex(10)// 'a'
dec2hex('16')// '10'

```

**2 进制转 10 进制**

```JS
bin2dec(1010)// '10'
bin2dec(1000)// '8'
bin2dec('1000')// '8'

```

**2 进制转 16 进制**

```JS
bin2hex(10)// '2'
bin2hex('10')// '2'
bin2hex('10')// '2'

```

**16 进制转 2 进制**

```JS
hex2bin(1)// '1'
hex2bin(10)// '10000'


```

**16 进制转 10 进制**

```JS
hex2dec(10) // 16
```

## 单位转换 [B,KB,MB...]

**字节简化**

```JS
bytes2simple(1024)  //'1KB'
bytes2simple(0) // '0B'
bytes2simple(100.245) // '100.25B'
bytes2simple(1024 * 1024) // '1MB'
bytes2simple(1024 * 1024 * 1024) // '1GB'
```

**还原字节**

```JS
simple2bytes('1b')// 1
simple2bytes('1kb')// 1024
simple2bytes('1mb')// 1024 * 1024
simple2bytes('1gb')// 1024 * 1024 * 1024
simple2bytes('1tb')// 1024 * 1024 * 1024 * 1024
```
