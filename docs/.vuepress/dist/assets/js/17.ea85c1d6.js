;(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    361: function(t, s, a) {
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
                a('h3', { attrs: { id: '判断数据的类型' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#判断数据的类型' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 判断数据的类型')
                ]),
                t._v(' '),
                a('p', [a('code', [t._v('typeOf(any)')])]),
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
                  a('li', [a('code', [t._v('{any}')]), t._v(': 需要判断的值')])
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
                  a('code', [t._v('{string}')]),
                  t._v(': 返回对应类型, 值为以下内容之一'),
                  a('code', [t._v('string')]),
                  t._v(' '),
                  a('code', [t._v('boolean')]),
                  t._v(' '),
                  a('code', [t._v('bigint')]),
                  t._v(' '),
                  a('code', [t._v('number')]),
                  t._v(' '),
                  a('code', [t._v('symbol')]),
                  t._v(' '),
                  a('code', [t._v('function')]),
                  t._v(' '),
                  a('code', [t._v('undefined')]),
                  t._v(' '),
                  a('code', [t._v('NaN')]),
                  t._v(' '),
                  a('code', [t._v('object')]),
                  t._v(' '),
                  a('code', [t._v('null')]),
                  t._v(' '),
                  a('code', [t._v('array')])
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
                      t._v('console'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('assert')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('typeOf')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('{')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('}')]
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
                        [t._v('===')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'object'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\nconsole'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('assert')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('typeOf')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('1n')
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('===')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'bigint'")
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\nconsole'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('assert')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('typeOf')]
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
                        [t._v('===')]
                      ),
                      t._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'undefined'")
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
