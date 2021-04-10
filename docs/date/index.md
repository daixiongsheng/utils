---
title: 日期相关
search: true
---

## 返回这一天是周几

```JS
// 返回一个数组，第一个值为对应的英语名称，第二个为1-7表示周一到周日

// 2020-3-3这一天为周3
dayOfTheWeek(3, 3, 2021) => ['Wednesday',3]
// 不传年默认为当年
dayOfTheWeek(3, 3) => ['Wednesday',3]

// 不传月，默认为当月
// 假设这个月是2021年的3月
dayOfTheWeek(3) => ['Wednesday',3]

// 也可以接受一个Date对象
// 假设这个月是2021年的3月
dayOfTheWeek(new Date()) => ['Wednesday',3]
```
