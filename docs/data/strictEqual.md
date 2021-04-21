---
title: strictEqual
search: true
---

### 判断两个值是不是全等

`strictEqual(value, other)`

#### 说明

判断两个值是不是全等, 支持循环引用判断

#### params

1. `{value}`: 需要比较的值
2. `{other}`: 需要比较的值

#### return

`{boolean}`: 返回是否全等

#### eg

```JS
const s = {
  foo: 'bar'
}
const o = {
  foo: 'bar'
}
console.assert(strictEqual(s, o) === true)
```
