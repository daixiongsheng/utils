---
title: Lock
search: true
---

### 加解锁

`Lock.isLocked(key), Lock.lock(key), Lock.unlock(key)`

#### 说明

加一个锁，只有在解锁后`Lock.isLocked(key)` 才加返回`false`

#### params

1. `{string}`: 加锁的键名

#### return

1. **`Lock.isLocked(key)`** `{boolean}`: 返回是否是锁定状态
2. **`Lock.lock(key)`**: 加锁
3. **`Lock.unlock(key)`**: 解锁

#### eg

```JS
console.assert(Lock.isLocked('fetchUserInfo') === false);
Lock.lock('fetchUserInfo')
console.assert(Lock.isLocked('fetchUserInfo') === true);
Lock.unlock('fetchUserInfo')
console.assert(Lock.isLocked('fetchUserInfo') === false);
```
