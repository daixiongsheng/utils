;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    356: function (s, t, a) {
      'use strict'
      a.r(t)
      var e = a(41),
        n = Object(e.a)(
          {},
          function () {
            var s = this,
              t = s.$createElement,
              a = s._self._c || t
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': s.$parent.slotKey } },
              [
                a('h1', { attrs: { id: '前端常用工具类方法' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#前端常用工具类方法' },
                    },
                    [s._v('#')]
                  ),
                  s._v(' 前端常用工具类方法'),
                ]),
                s._v(' '),
                a('p', [
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://daixiongsheng.github.io/utils/',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                    },
                    [s._v('文档链接'), a('OutboundLink')],
                    1
                  ),
                ]),
                s._v(' '),
                a('blockquote', [a('p', [s._v('本文档的持续更新中...')])]),
                s._v(' '),
                a('hr'),
                s._v(' '),
                a('p', [
                  s._v(
                    '本文档主要记录一些作者在开发中常用到的能用方法，比如深拷贝,深比较...'
                  ),
                ]),
                s._v(' '),
                a('p', [
                  s._v('每种方法都有相应的单测用例，保证符合大部分业务场景'),
                ]),
                s._v(' '),
                a('p', [s._v('本文档不会做过多的向下兼容（ie...）')]),
                s._v(' '),
                a('p', [
                  s._v('本文档由'),
                  a(
                    'a',
                    {
                      attrs: {
                        href: 'https://vuepress.vuejs.org/zh/',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                    },
                    [s._v('VuePress'), a('OutboundLink')],
                    1
                  ),
                  s._v('生成，感谢尤大大及其团队的贡献 🚩'),
                ]),
                s._v(' '),
                a('h2', { attrs: { id: '安装' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#安装' } },
                    [s._v('#')]
                  ),
                  s._v(' 安装'),
                ]),
                s._v(' '),
                a('p', [a('code', [s._v('npm install dxs-utils')])]),
                s._v(' '),
                a('h2', { attrs: { id: '使用' } }, [
                  a(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#使用' } },
                    [s._v('#')]
                  ),
                  s._v(' 使用'),
                ]),
                s._v(' '),
                a('div', { staticClass: 'language-js line-numbers-mode' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [s._v('import')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('{')]
                      ),
                      s._v(' bytes2simple '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('}')]
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [s._v('from')]
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'dxs-utils'"),
                      ]),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [s._v('// or')]
                      ),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          s._v(
                            "// const { bytes2simple } = require('dxs-utils');"
                          ),
                        ]
                      ),
                      s._v('\n\nconsole'),
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
                        [s._v('bytes2simple')]
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')]
                      ),
                      a('span', { pre: !0, attrs: { class: 'token number' } }, [
                        s._v('1024'),
                      ]),
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
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'1KB'"),
                      ]),
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
      t.default = n.exports
    },
  },
])
