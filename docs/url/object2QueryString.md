---
title: object2QueryString
search: true
---

### 将对象转成查询串

`object2QueryString(object)`

#### params

1. `{object}`: 需要转换的对象

#### return

`{string}`: 返回转换后的串

#### eg

```JS
const query = object2QueryString({
  id: 1,
  username: 'username',
  email: 'email',
  age: '',
  gender: true,
  updated: void 0,
  book: null,
  delete: false,
  f: NaN
})
// id=1&username=username&email=email&age=&gender=true&book=null&delete=false
```
