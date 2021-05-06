---
title: 介绍
---

# 前端常用工具类方法

[文档链接](https://daixiongsheng.github.io/utils/)

> 本文档的持续更新中...

---

本文档主要记录一些作者在开发中常用到的能用方法，比如深拷贝,深比较...

每种方法都有相应的单测用例，保证符合大部分业务场景

本文档不会做过多的向下兼容（ie...）

本文档由[VuePress](https://vuepress.vuejs.org/zh/)生成，感谢尤大大及其团队的贡献 🚩

## 安装

`npm install dxs-utils`

## 使用

```js
import { bytes2simple } from 'dxs-utils'
// or
// const { bytes2simple } = require('dxs-utils');

console.assert(bytes2simple(1024 * 1024) === '1MB')
```
