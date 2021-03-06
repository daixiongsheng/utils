;(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    367: function (s, t, a) {
      'use strict'
      a.r(t)
      var n = a(41),
        e = Object(n.a)(
          {},
          function () {
            var s = this,
              t = s.$createElement,
              a = s._self._c || t
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': s.$parent.slotKey } },
              [
                a('h3', { attrs: { id: '防抖函数' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#防抖函数' },
                    },
                    [s._v('#')]
                  ),
                  s._v(' 防抖函数'),
                ]),
                s._v(' '),
                a('p', [
                  a('code', [s._v('debounce(func, delay, [immediate=false])')]),
                ]),
                s._v(' '),
                a('h4', { attrs: { id: '说明' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#说明' } },
                    [s._v('#')]
                  ),
                  s._v(' 说明'),
                ]),
                s._v(' '),
                a('p', [
                  s._v('创建一个 '),
                  a('code', [s._v('debounced')]),
                  s._v(' 防抖函数，该函数会从上一次被调用后，延迟 '),
                  a('code', [s._v('delay')]),
                  s._v(' 毫秒后调用 '),
                  a('code', [s._v('func')]),
                  s._v(' 方法。\n返回的 '),
                  a('code', [s._v('debounced')]),
                  s._v(' 防抖函数提供一个 '),
                  a('code', [s._v('cancel')]),
                  s._v(' 方法取消延迟的函数调用\n'),
                  a('code', [s._v('immediate')]),
                  s._v(' 表示先调用后等待 还是 先等待后调用'),
                ]),
                s._v(' '),
                a('h4', { attrs: { id: 'params' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#params' },
                    },
                    [s._v('#')]
                  ),
                  s._v(' params'),
                ]),
                s._v(' '),
                a('ol', [
                  a('li', [
                    a('code', [s._v('{Function}')]),
                    s._v(': 需要防抖的函数'),
                  ]),
                  s._v(' '),
                  a('li', [a('code', [s._v('{number}')]), s._v(': 防抖时间')]),
                  s._v(' '),
                  a('li', [
                    a('code', [s._v('{boolean} [immediate=false]')]),
                    s._v(': 是否立即执行'),
                  ]),
                ]),
                s._v(' '),
                a('h4', { attrs: { id: 'return' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#return' },
                    },
                    [s._v('#')]
                  ),
                  s._v(' return'),
                ]),
                s._v(' '),
                a('p', [
                  a('code', [s._v('{Function}')]),
                  s._v(': 返回新的 '),
                  a('code', [s._v('debounced')]),
                  s._v(' 防抖函数。'),
                ]),
                s._v(' '),
                a('h4', { attrs: { id: 'eg' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#eg' } },
                    [s._v('#')]
                  ),
                  s._v(' eg'),
                ]),
                s._v(' '),
                a('div', { staticClass: 'language-JS line-numbers-mode' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [s._v('// 这个函数会在滚动停止后的200ms后执行')]
                      ),
                      s._v('\nwindow'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('.')]
                      ),
                      s._v('onscroll '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('debounce')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=>')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('{')]
                      ),
                      s._v('\n  console'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('.')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('log')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'这个函数会在滚动停止后的200ms后执行'"),
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')]
                      ),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('}')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(',')]
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        s._v('200'),
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')]
                      ),
                      s._v('\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          s._v(
                            '// 这个函数会立即执行一次，并且在停止滚动后的200ms再次滚动不会执行'
                          ),
                        ]
                      ),
                      s._v('\nwindow'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('.')]
                      ),
                      s._v('onscroll '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('debounce')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=>')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('{')]
                      ),
                      s._v('\n  console'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('.')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('log')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v(
                          "'这个函数会立即执行一次，并且在停止滚动后的200ms再次滚动不会执行'"
                        ),
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')]
                      ),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('}')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(',')]
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        s._v('200'),
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(',')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token boolean' } },
                        [s._v('true')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')]
                      ),
                      s._v('\n\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          s._v(
                            '// cancel后，这个函数不会在滚动停止后的200ms后执行'
                          ),
                        ]
                      ),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [s._v('const')]
                      ),
                      s._v(' f '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('debounce')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=>')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('{')]
                      ),
                      s._v('\n  console'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('.')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('log')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'这个函数不会在滚动停止后的200ms后执行'"),
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')]
                      ),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('}')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(',')]
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        s._v('200'),
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')]
                      ),
                      s._v('\nwindow'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('.')]
                      ),
                      a(
                        'span',
                        {
                          pre: !0,
                          attrs: { class: 'token function-variable function' },
                        },
                        [s._v('onscroll')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=>')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('{')]
                      ),
                      s._v('\n  '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('f')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(';')]
                      ),
                      s._v('\n  f'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('.')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('cancel')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')]
                      ),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('}')]
                      ),
                      s._v('\n'),
                    ]),
                  ]),
                  s._v(' '),
                  a('div', { staticClass: 'line-numbers-wrapper' }, [
                    a('span', { staticClass: 'line-number' }, [s._v('1')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('2')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('3')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('4')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('5')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('6')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('7')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('8')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('9')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('10')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('11')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('12')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('13')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('14')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('15')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('16')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('17')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('18')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('19')]),
                    a('br'),
                  ]),
                ]),
              ]
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      t.default = e.exports
    },
  },
])
