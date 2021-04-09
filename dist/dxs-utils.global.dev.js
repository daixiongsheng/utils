/*!
 * dxs-utils v0.0.1
 * (c) 2020-2021 Xiongsheng Dai
 * Released under the MIT License.
 */
var DxsUtil = (function (exports) {
  'use strict';

  /**
   * add
   *
   * @export
   * @param {number} a
   * @param {number} b
   * @return {*}  {number}
   */
  function add(a, b) {
      return a + b;
  }
  const noop = () => void 0;

  exports.add = add;
  exports.noop = noop;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
