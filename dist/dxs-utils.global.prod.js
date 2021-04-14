var DxsUtil=function(e){"use strict";function t(e,t,n){return parseInt(e+"",t).toString(n)}function n(e){let t="";const r=Object.keys(e);return r.length?(r.forEach((r=>{const o=e[r];switch(typeof o){case"number":o==o&&(t+=`${r}=${o}&`);break;case"object":t+=null!==o?`${r}=${encodeURIComponent(n(o))}&`:`${r}=null&`;break;case"boolean":t+=`${r}=${o}&`;break;case"string":t+=`${r}=${encodeURIComponent(o)}&`}})),t.substr(0,t.length&&t.length-1)):t}function r(e){const t={};if(!e)return t;if(e.includes("?")){const t=e.split("?");e=t[t.length-1]}return e.split("&").forEach((e=>{const[n,r]=e.split("=");t[n]=void 0===r?"":decodeURIComponent(r)})),Object.keys(t).forEach((e=>{const n=t[e];switch(n){case"null":return void(t[e]=null);case"false":return void(t[e]=!1);case"true":return void(t[e]=!0)}if(parseInt(n,10).toString()!==n)try{const r=JSON.parse(decodeURIComponent(n));t[e]=r}catch(r){t[e]=n}else t[e]=Number(n)})),t}function o(e){return Object.prototype.toString.call(e)}function c(e){return"object"==typeof e&&null!==e}function i(e){return null!=e}function s(e,t=new Map){let n;switch(typeof e){case"undefined":break;case"number":case"boolean":n=e;break;case"string":n=e+"";break;case"bigint":n=BigInt(e);break;case"object":if(null===e)n=null;else if(e instanceof RegExp)n=new RegExp(e.source,e.flags);else if(e instanceof Date)n=new Date(e);else{const r=t.get(e);if(r)return r;if(Array.isArray(e)){const r=e.length;n=new Array(r),t.set(e,n);for(let o=0;o<r;o++)n[o]=s(e[o],t)}else n={},t.set(e,n),Reflect.ownKeys(e).forEach((r=>{n[r]=s(e[r],t)}))}break;case"symbol":n=Symbol(e.description);break;case"function":n=e}return n}function u(e){const t=typeof e;switch(t){case"string":case"boolean":case"bigint":case"number":case"symbol":case"function":case"undefined":return e!=e?"NaN":t;case"object":if(null===e)return"null";if(o(e).slice(8).includes("Object"))return"object";if(Array.isArray(e))return"array"}return"object"}return e.Lock={isLocked(e){return Boolean(this[`$$${e}`])},unlock(e){`$$${e}`in this&&delete this[`$$${e}`]},lock(e){this[`$$${e}`]=!0}},e.bin2dec=function(e){return t(e,2,10)},e.bin2hex=function(e){return t(e,2,16)},e.bytes2simple=function(e){let t="",n=Math.log(e)/Math.log(2)|0;n<1&&(n=0);const r=Math.floor(n/10);return t=""+e/Math.pow(2,10*r),e.toString().length>e.toFixed(2).toString().length&&(t=e.toFixed(2)),t+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][r]},e.clone=s,e.dayOfTheWeek=function(e,t,n){e instanceof Date&&(t=e.getMonth()+1,n=e.getFullYear(),e=e.getDate());const r=new Date;t=void 0===t?r.getMonth()+1:t,n=void 0===n?r.getFullYear():n,t<3&&(t+=12,--n);const o=(e+2*t+3*t/5+n+(n/4>>>0)-(n/100>>>0)+(n/400>>>0)+1>>>0)%7;return[["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][o],o+1]},e.dealPath=function(e,t={}){if(!e||1===e.length||0===Object.keys(t).length)return e;if(e.includes("?")){const[n,...o]=e.split("?");t={...r(o.join("")),...t},e=n}else"/"!==e[e.length-1]&&(e=`${e}/`);return(e+=`?${n(t)}&`).substr(0,e.length-1)},e.debounce=function(e,t,n=!1){let r=null;function o(...o){const c=this;if(r&&clearTimeout(r),n){const n=!r;if(r=setTimeout((()=>{r=null}),t),n)return e.apply(c,o)}else r=setTimeout((()=>{r=null,e.apply(c,o)}),t)}return o.cancel=()=>{clearTimeout(r)},o},e.dec2bin=function(e){return t(e,10,2)},e.dec2hex=function(e){return t(e,10,16)},e.hex2bin=function(e){return t(e,16,2)},e.hex2dec=function(e){return t(e,16,10)},e.isDef=i,e.isEmptyObject=function(e){return!!c(e)&&!Object.keys(e).length},e.isObject=c,e.isPromise=function(e){return i(e)&&"function"==typeof e.then&&"function"==typeof e.catch},e.noop=function(){},e.numberConvert=t,e.object2QueryString=n,e.query2Object=r,e.random=function(e=0,t=100){return Math.random()*(+t-+e)+ +e|0},e.shuffle=function(e){const t=s(e);let n,r=t.length;for(;r;)n=Math.random()*r--|0,[t[r],t[n]]=[t[n],t[r]];return t},e.simple2bytes=function(e){const t=parseInt(e,10),n=e.substring(t.toString().length).toUpperCase(),r=["B","KB","MB","GB","TB","PB","EB","ZB","YB"].findIndex((e=>e===n));return t*Math.pow(2,10*r)},e.strictEqual=function e(t,n,r=new Map){if(t===n)return!0;const o=u(t);if(o!==u(n))return!1;switch(o){case"symbol":return t.description===n.description;case"NaN":return!0;case"array":if(t.length!==n.length)return!1;if(r.has(t))return r.get(t)===n;if(r.has(n))return!1;r.set(t,n);for(let o=0,c=t.length;o<c;o++)if(!e(t[o],n[o],r))return!1;return!0;case"object":if(r.has(t))return r.get(t)===n;r.set(t,n);for(const o of Reflect.ownKeys(t))if(!e(t[o],n[o],r))return!1;return!0}return t===n},e.throttle=function(e,t){let n=Date.now();return function(...r){const o=this;Date.now()-n>=t&&(e.apply(o,r),n=Date.now())}},e.toNumber=function(e){const t=parseFloat(e+"");return isNaN(t)?e:t},e.toString=o,e.typeOf=u,Object.defineProperty(e,"__esModule",{value:!0}),e}({});
