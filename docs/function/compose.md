---
title: compose
search: true
sidebarDepth: 3
---

### 和 pipe 功能类似

`compose(...funcs)`

#### 说明

进制转换

#### params

1. `{funcs}`: 函数

#### return

`{(value: any) => any}}`: 将需要嵌套执行的函数平铺 **从右向左**执行

#### eg

```JS
console.assert(pipe(multiplyTen, addFive, subSix)(10) === (10 - 6 + 5）* 10)
```
