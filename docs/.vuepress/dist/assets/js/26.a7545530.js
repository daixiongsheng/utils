;(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    373: function (t, e, o) {
      'use strict'
      o.r(e)
      var r = o(41),
        n = Object(r.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e
            return o(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                o('h3', { attrs: { id: 'feature' } }, [
                  o(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#feature' },
                    },
                    [t._v('#')]
                  ),
                  t._v(' feature'),
                ]),
                t._v(' '),
                o('ol', [
                  o('li', [
                    t._v('增加 '),
                    o('code', [t._v('compose')]),
                    t._v(' '),
                    o('code', [t._v('pipe')]),
                    t._v(' 函数'),
                  ]),
                ]),
                t._v(' '),
                o(
                  'p',
                  [
                    o('RouterLink', { attrs: { to: '/function/compose/' } }, [
                      t._v('compose'),
                    ]),
                  ],
                  1
                ),
                t._v(' '),
                o(
                  'p',
                  [
                    o('RouterLink', { attrs: { to: '/function/pipe/' } }, [
                      t._v('pipe'),
                    ]),
                  ],
                  1
                ),
              ]
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = n.exports
    },
  },
])
