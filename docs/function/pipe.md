---
title: pipe
search: true
sidebarDepth: 3
---

### pipe 管道函数

`pipe(...funcs)`

#### 说明

进制转换

#### params

1. `{funcs}`: 函数

#### return

`{(value: any) => any}}`: 将需要嵌套执行的函数平铺 **从左向右**执行

#### eg

```JS
console.assert(pipe(multiplyTen, addFive, subSix)(10) === (10 * 10) + 5 - 6)
```
