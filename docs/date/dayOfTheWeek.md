---
title: dayOfTheWeek
search: true
---

### 返回这一天是周几

`throttle(day = new Date(), [month], [year])`

#### 说明

返回今天是指定的日期是周几，默认返回今天是周几，最多可接受 3 个参数，为别表示日期的日，月，年。当月/年不传时，默认为今年的这个月

#### params

1. `{number | Date}`: 日期对象的实例，或者今天的日期
2. `{[month]}`: 月份，默认当月
3. `{[year]}`: 年份，默认当年

#### return

`{[string, number]}` 返回一个数组，第一个值为对应的英语名称，第二个为 1-7 表示周一到周日

#### eg

```JS
// 返回一个数组，第一个值为对应的英语名称，第二个为1-7表示周一到周日

// 2020-3-3这一天为周3
dayOfTheWeek(3, 3, 2021)
// ['Wednesday',3]


// 不传年默认为当年
dayOfTheWeek(3, 3)
// ['Wednesday',3]

// 不传月，默认为当月
// 假设这个月是2021年的3月
dayOfTheWeek(3)
// ['Wednesday',3]

// 也可以接受一个Date对象
// 假设这个月是2021年的3月
dayOfTheWeek(new Date())
// ['Wednesday',3]
```
