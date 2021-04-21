---
title: typeOf
search: true
---

### 判断数据的类型

`typeOf(any)`

#### params

1. `{any}`: 需要判断的值

#### return

`{string}`: 返回对应类型, 值为以下内容之一`string` `boolean` `bigint` `number` `symbol` `function` `undefined` `NaN` `object` `null` `array`

#### eg

```JS
console.assert(typeOf({}) === 'object')
console.assert(typeOf(1n) === 'bigint')
console.assert(typeOf() === 'undefined')
```
