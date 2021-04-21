---
title: query2Object
search: true
---

### 讲 url 查询串转成对象

`query2Object(string)`

#### params

1. `{string}`: 需要解析的串

#### return

`{object}`: 返回转换解析后的对象

#### eg

```JS
const result = query2Object('a=1&b=b&c=true&d=false&e=null&f')
// {
//   a: 1,
//   b: 'b',
//   c: true,
//   d: false,
//   e: null,
//   f: ''
// }
```
