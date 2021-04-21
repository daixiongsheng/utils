---
title: simple2bytes
search: true
---

### 将简写模式还原成字节

`simple2bytes(string)`

#### 说明

进制转换

#### params

1. `{string}`: 需要转换的简写模式字符串

#### return

`{number}`: 返回还原后的字节数

#### eg

```JS
console.assert(simple2bytes('1b') === 1)
console.assert(simple2bytes('1kb') === 1024)
```
