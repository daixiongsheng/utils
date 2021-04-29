;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    359: function(s, t, a) {
      'use strict'
      a.r(t)
      var n = a(41),
        r = Object(n.a)(
          {},
          function() {
            var s = this,
              t = s.$createElement,
              a = s._self._c || t
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': s.$parent.slotKey } },
              [
                a('h3', { attrs: { id: '深拷贝' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#深拷贝' }
                    },
                    [s._v('#')]
                  ),
                  s._v(' 深拷贝')
                ]),
                s._v(' '),
                a('p', [a('code', [s._v('clone(any)')])]),
                s._v(' '),
                a('h4', { attrs: { id: '说明' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#说明' } },
                    [s._v('#')]
                  ),
                  s._v(' 说明')
                ]),
                s._v(' '),
                a('p', [s._v('进行深度拷贝，支持循环引用的拷贝')]),
                s._v(' '),
                a('h4', { attrs: { id: 'params' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#params' }
                    },
                    [s._v('#')]
                  ),
                  s._v(' params')
                ]),
                s._v(' '),
                a('ol', [
                  a('li', [
                    a('code', [s._v('{any}')]),
                    s._v(': 需要拷贝的内容')
                  ])
                ]),
                s._v(' '),
                a('h4', { attrs: { id: 'return' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#return' }
                    },
                    [s._v('#')]
                  ),
                  s._v(' return')
                ]),
                s._v(' '),
                a('p', [
                  a('code', [s._v('{string}')]),
                  s._v(': 返回深拷贝的数据')
                ]),
                s._v(' '),
                a('h4', { attrs: { id: 'eg' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#eg' } },
                    [s._v('#')]
                  ),
                  s._v(' eg')
                ]),
                s._v(' '),
                a('div', { staticClass: 'language-JS line-numbers-mode' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [s._v('const')]
                      ),
                      s._v(' s '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('{')]
                      ),
                      s._v('\n  foo'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v(':')]
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'bar'")
                      ]),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('}')]
                      ),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [s._v('const')]
                      ),
                      s._v(' c '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('clone')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')]
                      ),
                      s._v('s'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')]
                      ),
                      s._v('\nconsole'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('.')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('assert')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')]
                      ),
                      s._v('c '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('!==')]
                      ),
                      s._v(' s'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')]
                      ),
                      s._v('\nconsole'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('.')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('assert')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')]
                      ),
                      s._v('c'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('.')]
                      ),
                      s._v('foo '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('===')]
                      ),
                      s._v(' s'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('.')]
                      ),
                      s._v('foo'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')]
                      ),
                      s._v('\n')
                    ])
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
      t.default = r.exports
    }
  }
])
