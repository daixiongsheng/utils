;(window.webpackJsonp = window.webpackJsonp || []).push([
  [37],
  {
    383: function (t, a, s) {
      'use strict'
      s.r(a)
      var r = s(41),
        e = Object(r.a)(
          {},
          function () {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a
            return s(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                s('h3', { attrs: { id: '转成数字' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#转成数字' },
                    },
                    [t._v('#')]
                  ),
                  t._v(' 转成数字'),
                ]),
                t._v(' '),
                s('p', [s('code', [t._v('toNumber(value)')])]),
                t._v(' '),
                s('h4', { attrs: { id: '说明' } }, [
                  s(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#说明' } },
                    [t._v('#')]
                  ),
                  t._v(' 说明'),
                ]),
                t._v(' '),
                s('p', [t._v('将一个字符串转成 10 进制的数字')]),
                t._v(' '),
                s('h4', { attrs: { id: 'params' } }, [
                  s(
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
                s('ol', [
                  s('li', [
                    s('code', [t._v('{string|number}')]),
                    t._v(': 需要转的字符串'),
                  ]),
                ]),
                t._v(' '),
                s('h4', { attrs: { id: 'return' } }, [
                  s(
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
                s('p', [
                  s('code', [t._v('{number}')]),
                  t._v(': 返回转换后的数字'),
                ]),
                t._v(' '),
                s('h4', { attrs: { id: 'eg' } }, [
                  s(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#eg' } },
                    [t._v('#')]
                  ),
                  t._v(' eg'),
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-JS line-numbers-mode' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    s('code', [
                      t._v('console'),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('.')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('assert')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [t._v('toNumber')]
                      ),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v('(')]
                      ),
                      s('span', { pre: !0, attrs: { class: 'token string' } }, [
                        t._v("'100'"),
                      ]),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v(' '),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [t._v('===')]
                      ),
                      t._v(' '),
                      s('span', { pre: !0, attrs: { class: 'token number' } }, [
                        t._v('100'),
                      ]),
                      s(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [t._v(')')]
                      ),
                      t._v('\n'),
                    ]),
                  ]),
                  t._v(' '),
                  s('div', { staticClass: 'line-numbers-wrapper' }, [
                    s('span', { staticClass: 'line-number' }, [t._v('1')]),
                    s('br'),
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
      a.default = e.exports
    },
  },
])
