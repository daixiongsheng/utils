---
title: dealPath
search: true
---

### url 传参时进行参数拼接

`dealPath(path, queryObject)`

#### 说明

目前还没有做 hash 的处理, 支持多次调用

#### params

1. `{path}`: 需要转换的 path
1. `{object}`: 需要添加的相应参数

#### return

`{string}`: 返回拼接后的 url

#### eg

```JS
// a.b.c/?page=1
dealPath('a.b.c', {
  page: 1
})

// https://daixiongsheng.github.io/?page=1&size=2&limit=10
dealPath('https://daixiongsheng.github.io', {
  page: 1,
  size: 2,
  limit: 10
})

```
