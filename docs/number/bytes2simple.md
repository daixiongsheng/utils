---
title: bytes2simple
search: true
---

### 将字节转换成简单模式

`bytes2simple(number)`

#### 说明

进制转换

#### params

1. `{number}`: 需要转换的数

#### return

`{string}`: 返回转换后简写字符串

#### eg

```JS
console.assert(bytes2simple(1024) === '1KB')
console.assert(bytes2simple(1024 * 1024) === '1MB')
console.assert(bytes2simple(1500) === '1.46484375KB')
```
