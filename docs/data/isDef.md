---
title: isDef
search: true
---

### 判断是否有定义

`isDef(any)`

#### params

1. `{any}`: 需要判断的值

#### return

`{boolean}}`: 返回是否有定义

#### eg

```JS
console.assert(isDef({}) === true)
console.assert(isDef(null) === false)
console.assert(isDef(1) === true)
console.assert(isDef(void 0) === false)
```
