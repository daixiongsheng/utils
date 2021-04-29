;(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    368: function(t, s, a) {
      'use strict'
      a.r(s)
      var n = a(41),
        e = Object(n.a)(
          {},
          function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h3', { attrs: { id: '节流函数' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#节流函数' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 节流函数')
                ]),
                t._v(' '),
                a('p', [a('code', [t._v('throttle(func, delay)')])]),
                t._v(' '),
                a('h4', { attrs: { id: '说明' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#说明' } },
                    [t._v('#')]
                  ),
                  t._v(' 说明')
                ]),
                t._v(' '),
                a('p', [
                  t._v('创建一个节流函数，在 '),
                  a('code', [t._v('delay')]),
                  t._v(' 秒内最多执行 '),
                  a('code', [t._v('func')]),
                  t._v(' 一次的函数。')
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'params' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#params' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' params')
                ]),
                t._v(' '),
                a('ol', [
                  a('li', [
                    a('code', [t._v('{Function}')]),
                    t._v(': 需要防抖的函数')
                  ]),
                  t._v(' '),
                  a('li', [a('code', [t._v('{number}')]), t._v(': 节流时间')])
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'return' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#return' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' return')
                ]),
                t._v(' '),
                a('p', [
                  a('code', [t._v('{Function}')]),
                  t._v(': 返回新的防抖函数。')
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'eg' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#eg' } },
                    [t._v('#')]
                  ),
                  t._v(' eg')
                ]),
                t._v(' '),
                a('div', { staticClass: 'language-JS line-numbers-mode' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [t._v('// 这个函数会在滚动过程中，每隔200ms执行一次')]
                      ),
                      t._v('\nwindow'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      t._v('onscroll '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('throttle')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('=>')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      t._v('\n  console'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('log')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'这个函数会在滚动停止后的200ms后执行'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(',')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('200')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n')
                    ])
                  ]),
                  t._v(' '),
                  a('div', { staticClass: 'line-numbers-wrapper' }, [
                    a('span', { staticClass: 'line-number' }, [t._v('1')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [t._v('2')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [t._v('3')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [t._v('4')]),
                    a('br')
                  ])
                ])
              ]
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      s.default = e.exports
    }
  }
])
