---
title: isObject
search: true
---

### 判断是不是一个 Promise

`isObject(any)`

#### 说明

判断是不是一个对象

#### params

1. `{any}`: 需要判断的值

#### return

`{boolean}}`: 返回是不是对象

#### eg

```JS
console.assert(isObject({}) === true)
console.assert(isObject(null) === false)
console.assert(isObject(1) === false)
console.assert(isObject([]) === true)
```
