---
title: 函数相关
search: true
---

## 空函数

```JS
// 啥都不干的一个函数
noop() => void 0
```

## 节流函数

```JS
const fn = throttle(() => {
}, 100)

fn()
fn()
fn()
```

## 防抖函数

```JS
const fn = debounce(() => {
}, 100, false)

fn()
fn.cancel()

```
