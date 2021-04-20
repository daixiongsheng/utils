---
title: debounce
search: true
---

### 防抖函数

`debounce(func, delay, [immediate=false])`

#### 说明

创建一个 `debounced` 防抖函数，该函数会从上一次被调用后，延迟 `delay` 毫秒后调用 `func` 方法。
返回的 `debounced` 防抖函数提供一个 `cancel` 方法取消延迟的函数调用
`immediate` 表示先调用后等待 还是 先等待后调用

#### params

1. `{Function}`: 需要防抖的函数
2. `{number}`: 防抖时间
3. `{boolean} [immediate=false]`: 是否立即执行

#### return

`{Function}`: 返回新的 `debounced` 防抖函数。

#### eg

```JS
// 这个函数会在滚动停止后的200ms后执行
window.onscroll = debounce(() => {
  console.log('这个函数会在滚动停止后的200ms后执行')
}, 200)

// 这个函数会立即执行一次，并且在停止滚动后的200ms再次滚动不会执行
window.onscroll = debounce(() => {
  console.log('这个函数会立即执行一次，并且在停止滚动后的200ms再次滚动不会执行')
}, 200, true)


// cancel后，这个函数不会在滚动停止后的200ms后执行
const f = debounce(() => {
  console.log('这个函数不会在滚动停止后的200ms后执行')
}, 200)
window.onscroll = () => {
  f();
  f.cancel()
}
```
