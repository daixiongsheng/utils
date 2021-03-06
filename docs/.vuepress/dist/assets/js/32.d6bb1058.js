;(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    381: function (t, s, a) {
      'use strict'
      a.r(s)
      var n = a(41),
        e = Object(n.a)(
          {},
          function () {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h3', { attrs: { id: '十进制转十六进制' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#十进制转十六进制' },
                    },
                    [t._v('#')]
                  ),
                  t._v(' 十进制转十六进制'),
                ]),
                t._v(' '),
                a('p', [a('code', [t._v('dec2hex(number)')])]),
                t._v(' '),
                a('h4', { attrs: { id: '说明' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#说明' } },
                    [t._v('#')]
                  ),
                  t._v(' 说明'),
                ]),
                t._v(' '),
                a('p', [t._v('进制转换')]),
                t._v(' '),
                a('h4', { attrs: { id: 'params' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#params' },
                    },
                    [t._v('#')]
                  ),
                  t._v(' params'),
                ]),
                t._v(' '),
                a('ol', [
                  a('li', [
                    a('code', [t._v('{number}')]),
                    t._v(': 需要转换的数'),
                  ]),
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'return' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#return' },
                    },
                    [t._v('#')]
                  ),
                  t._v(' return'),
                ]),
                t._v(' '),
                a('p', [
                  a('code', [t._v('{string}')]),
                  t._v(': 返回转换后十六进制的字串形式'),
                ]),
                t._v(' '),
                a('h4', { attrs: { id: 'eg' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#eg' } },
                    [t._v('#')]
                  ),
                  t._v(' eg'),
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
                        [t._v('dec2hex')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('10'),
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
                        t._v("'a'"),
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
                        [t._v('dec2hex')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('16'),
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
                        t._v("'10'"),
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n'),
                    ]),
                  ]),
                  t._v(' '),
                  a('div', { staticClass: 'line-numbers-wrapper' }, [
                    a('span', { staticClass: 'line-number' }, [t._v('1')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [t._v('2')]),
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
      s.default = e.exports
    },
  },
])
