---
title: isPromise
search: true
---

### 判断是不是一个 Promise

`isPromise(any)`

#### 说明

判断是不是一个 Promise

#### params

1. `{any}`: 需要判断的值

#### return

`{boolean}}`: 返回是不是 Promise

#### eg

```JS
console.assert(isPromise({}) === false)
console.assert(isPromise(1) === false)
console.assert(isPromise(new Promise(_ => _)) === true)
console.assert(isPromise(Promise.resolve()) === true)
console.assert(isPromise({ then() {}, catch() {} }) === true)
```
