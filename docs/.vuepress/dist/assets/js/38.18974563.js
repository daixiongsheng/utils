;(window.webpackJsonp = window.webpackJsonp || []).push([
  [38],
  {
    387: function (s, t, a) {
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
                a('h3', { attrs: { id: 'url-传参时进行参数拼接' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#url-传参时进行参数拼接' },
                    },
                    [s._v('#')]
                  ),
                  s._v(' url 传参时进行参数拼接'),
                ]),
                s._v(' '),
                a('p', [a('code', [s._v('dealPath(path, queryObject)')])]),
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
                a('p', [s._v('目前还没有做 hash 的处理, 支持多次调用')]),
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
                    a('code', [s._v('{path}')]),
                    s._v(': 需要转换的 path'),
                  ]),
                  s._v(' '),
                  a('li', [
                    a('code', [s._v('{object}')]),
                    s._v(': 需要添加的相应参数'),
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
                  a('code', [s._v('{string}')]),
                  s._v(': 返回拼接后的 url'),
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
                        [s._v('// a.b.c/?page=1')]
                      ),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('dealPath')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'a.b.c'"),
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(',')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('{')]
                      ),
                      s._v('\n  page'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v(':')]
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        s._v('1'),
                      ]),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('}')]
                      ),
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
                            '// https://daixiongsheng.github.io/?page=1&size=2&limit=10'
                          ),
                        ]
                      ),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('dealPath')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'https://daixiongsheng.github.io'"),
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(',')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('{')]
                      ),
                      s._v('\n  page'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v(':')]
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        s._v('1'),
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(',')]
                      ),
                      s._v('\n  size'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v(':')]
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        s._v('2'),
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(',')]
                      ),
                      s._v('\n  limit'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v(':')]
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        s._v('10'),
                      ]),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('}')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')]
                      ),
                      s._v('\n\n'),
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
