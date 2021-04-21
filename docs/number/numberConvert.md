---
title: numberConvert
search: true
---

### 进制转换

`numberConvert(number, base, radix)`

#### 说明

进制转换

#### params

1. `{number|string}`: 需要转换的数
2. `{number}`: 原进制
3. `{number}`: 转换后的进制

#### return

`{string}`: 返回转换后的字串形式

#### eg

```JS
console.assert(numberConvert('10', 10, 10) === '10')
console.assert(numberConvert('10', 2, 10) === '2')
console.assert(numberConvert(10, 10, 16) === 'a')
console.assert(numberConvert('10', 2, 10) === '2')
```
