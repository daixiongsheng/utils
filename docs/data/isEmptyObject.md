---
title: isEmptyObject
search: true
---

### 判断是不是没有数据的对象

`isEmptyObject(any)`

#### params

1. `{object|array}`: 需要判断的值

#### return

`{boolean}}`: 返回是不是没有数据

#### eg

```JS
console.assert(isEmptyObject({}) === true)
console.assert(isEmptyObject(null) === false)
console.assert(isEmptyObject(1) === false)
console.assert(isEmptyObject([]) === true)
```
