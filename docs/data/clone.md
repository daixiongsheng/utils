---
title: clone
search: true
---

### 深拷贝

`clone(any)`

#### 说明

进行深度拷贝，支持循环引用的拷贝

#### params

1. `{any}`: 需要拷贝的内容

#### return

`{string}`: 返回深拷贝的数据

#### eg

```JS
const s = {
  foo: 'bar'
}
const c = clone(s)
console.assert(c !== s)
console.assert(c.foo === s.foo)
```
