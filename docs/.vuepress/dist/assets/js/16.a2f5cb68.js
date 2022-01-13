;(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    360: function (s, t, a) {
      'use strict'
      a.r(t)
      var n = a(41),
        r = Object(n.a)(
          {},
          function () {
            var s = this,
              t = s.$createElement,
              a = s._self._c || t
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': s.$parent.slotKey } },
              [
                a('h3', { attrs: { id: '判断两个值是不是全等' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#判断两个值是不是全等' },
                    },
                    [s._v('#')]
                  ),
                  s._v(' 判断两个值是不是全等'),
                ]),
                s._v(' '),
                a('p', [a('code', [s._v('strictEqual(value, other)')])]),
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
                a('p', [s._v('判断两个值是不是全等, 支持循环引用判断')]),
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
                    a('code', [s._v('{value}')]),
                    s._v(': 需要比较的值'),
                  ]),
                  s._v(' '),
                  a('li', [
                    a('code', [s._v('{other}')]),
                    s._v(': 需要比较的值'),
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
                  a('code', [s._v('{boolean}')]),
                  s._v(': 返回是否全等'),
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
                        s._v("'bar'"),
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
                      s._v(' o '),
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
                        s._v("'bar'"),
                      ]),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('}')]
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
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('strictEqual')]
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
                        [s._v(',')]
                      ),
                      s._v(' o'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('===')]
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
      t.default = r.exports
    },
  },
])
