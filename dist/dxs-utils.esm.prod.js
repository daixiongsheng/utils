function e(e){var n=parseFloat(e+"");return n!=n?e:n}function n(e,n,t){return parseInt(e+"",n).toString(t)}function t(e){return n(e,2,16)}function r(e){return n(e,2,10)}function o(e){return n(e,16,2)}function a(e){return n(e,16,10)}function i(e){return n(e,10,2)}function u(e){return n(e,10,16)}function c(e){var n="",t=Math.log(e)/Math.log(2)|0;t<1&&(t=0);var r=Math.floor(t/10);return n=""+e/Math.pow(2,10*r),e.toString().length>e.toFixed(2).toString().length&&(n=e.toFixed(2)),n+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][r]}function l(e){var n=parseInt(e,10),t=e.substring(n.toString().length).toUpperCase(),r=["B","KB","MB","GB","TB","PB","EB","ZB","YB"].findIndex((function(e){return e===t}));return n*Math.pow(2,10*r)}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var f=function(){return(f=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function s(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,a=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(t=a.return)&&t.call(a)}finally{if(o)throw o.error}}return i}function h(e){var n="",t=Object.keys(e);return t.length?(t.forEach((function(t){var r=e[t];switch(typeof r){case"number":r==r&&(n+=t+"="+r+"&");break;case"object":n+=null!==r?t+"="+encodeURIComponent(h(r))+"&":t+"=null&";break;case"boolean":n+=t+"="+r+"&";break;case"string":n+=t+"="+encodeURIComponent(r)+"&"}})),n.substr(0,n.length&&n.length-1)):n}function v(e,n){if(void 0===n&&(n={}),!e||1===e.length||0===Object.keys(n).length)return e;if(e.includes("?")){var t=s(e.split("?")),r=t[0],o=t.slice(1);n=f(f({},y(o.join(""))),n),e=r}else"/"!==e[e.length-1]&&(e+="/");return(e+="?"+h(n)+"&").substr(0,e.length-1)}function y(e){var n={};if(!e)return n;if(e.includes("?")){var t=e.split("?");e=t[t.length-1]}return e.split("&").forEach((function(e){var t=s(e.split("="),2),r=t[1];n[t[0]]=void 0===r?"":decodeURIComponent(r)})),Object.keys(n).forEach((function(e){var t=n[e];switch(t){case"null":return void(n[e]=null);case"false":return void(n[e]=!1);case"true":return void(n[e]=!0)}if(parseInt(t,10).toString()!==t)try{var r=JSON.parse(decodeURIComponent(t));n[e]=r}catch(o){n[e]=t}else n[e]=Number(t)})),n}function d(e,n,t){void 0===e&&(e=new Date),e instanceof Date&&(n=e.getMonth()+1,t=e.getFullYear(),e=e.getDate());var r=new Date;n=void 0===n?r.getMonth()+1:n,t=void 0===t?r.getFullYear():t;n<3&&(n+=12,--t);var o=(e+2*n+3*n/5+t+(t/4>>>0)-(t/100>>>0)+(t/400>>>0)+1>>>0)%7;return[["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][o],o+1]}function g(){}function p(e,n,t){void 0===t&&(t=!1);var r=null;function o(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];var i=this;if(r&&clearTimeout(r),t){var u=!r;if(r=setTimeout((function(){r=null}),n),u)return e.apply(i,o)}else r=setTimeout((function(){r=null,e.apply(i,o)}),n)}return o.cancel=function(){clearTimeout(r)},o}function b(e,n){var t=Date.now();return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];var a=this,i=Date.now();i-t>=n&&(e.apply(a,r),t=Date.now())}}var m={isLocked:function(e){return Boolean(this["$$"+e])},unlock:function(e){"$$"+e in this&&delete this["$$"+e]},lock:function(e){this["$$"+e]=!0}};function w(e){return Object.prototype.toString.call(e)}function B(e){return"object"==typeof e&&null!==e}function j(e){return null!=e}function k(e){return j(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function S(e,n){var t;switch(void 0===n&&(n=new Map),typeof e){case"undefined":break;case"number":case"boolean":t=e;break;case"string":t=e+"";break;case"bigint":t=BigInt(e);break;case"object":if(null===e)t=null;else if(e instanceof RegExp)t=new RegExp(e.source,e.flags);else if(e instanceof Date)t=new Date(e);else{var r=n.get(e);if(r)return r;if(Array.isArray(e)){var o=e.length;t=new Array(o),n.set(e,t);for(var a=0;a<o;a++)t[a]=S(e[a],n)}else n.set(e,t={}),Reflect.ownKeys(e).forEach((function(r){t[r]=S(e[r],n)}))}break;case"symbol":t=Symbol(e.description);break;case"function":t=e}return t}function M(e){var n=typeof e;switch(n){case"string":case"boolean":case"bigint":case"number":case"symbol":case"function":case"undefined":return e!=e?"NaN":n;case"object":if(null===e)return"null";if(w(e).slice(8).includes("Object"))return"object";if(Array.isArray(e))return"array"}return"object"}function O(e,n,t){var r,o;if(void 0===t&&(t=new Map),e===n)return!0;var a=M(e);if(a!==M(n))return!1;switch(a){case"symbol":return e.description===n.description;case"NaN":return!0;case"array":if(e.length!==n.length)return!1;if(t.has(e))return t.get(e)===n;if(t.has(n))return!1;t.set(e,n);for(var i=0,u=e.length;i<u;i++)if(!O(e[i],n[i],t))return!1;return!0;case"object":if(t.has(e))return t.get(e)===n;t.set(e,n);try{for(var c=function(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}(Reflect.ownKeys(e)),l=c.next();!l.done;l=c.next()){var f=l.value;if(!O(e[f],n[f],t))return!1}}catch(s){r={error:s}}finally{try{l&&!l.done&&(o=c.return)&&o.call(c)}finally{if(r)throw r.error}}return!0}return e===n}function x(e){return!!B(e)&&!Object.keys(e).length}function D(e,n){return void 0===e&&(e=0),void 0===n&&(n=100),Math.random()*(+n-+e)+ +e|0}function E(e){for(var n,t,r=S(e),o=r.length;o;)n=s([r[t=Math.random()*o--|0],r[o]],2),r[o]=n[0],r[t]=n[1];return r}export{m as Lock,r as bin2dec,t as bin2hex,c as bytes2simple,S as clone,d as dayOfTheWeek,v as dealPath,p as debounce,i as dec2bin,u as dec2hex,o as hex2bin,a as hex2dec,j as isDef,x as isEmptyObject,B as isObject,k as isPromise,g as noop,n as numberConvert,h as object2QueryString,y as query2Object,D as random,E as shuffle,l as simple2bytes,O as strictEqual,b as throttle,e as toNumber,w as toString,M as typeOf};
