---
title: throttle
search: true
---

### 节流函数

`throttle(func, delay)`

#### 说明

创建一个节流函数，在 `delay` 秒内最多执行 `func` 一次的函数。

#### params

1. `{Function}`: 需要防抖的函数
2. `{number}`: 节流时间

#### return

`{Function}`: 返回新的防抖函数。

#### eg

```JS
// 这个函数会在滚动过程中，每隔200ms执行一次
window.onscroll = throttle(() => {
  console.log('这个函数会在滚动停止后的200ms后执行')
}, 200)
```
