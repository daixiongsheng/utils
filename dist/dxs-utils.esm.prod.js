function e(e,t,n){return parseInt(e+"",t).toString(n)}function t(t){return e(t,2,16)}function n(t){return e(t,2,10)}function r(t){return e(t,16,2)}function o(t){return e(t,16,10)}function s(t){return e(t,10,2)}function c(t){return e(t,10,16)}function i(e){let t="";let n=Math.log(e)/Math.log(2)|0;n<1&&(n=0);const r=Math.floor(n/10);return t=""+e/Math.pow(2,10*r),e.toString().length>e.toFixed(2).toString().length&&(t=e.toFixed(2)),t+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][r]}function a(e){const t=parseInt(e,10),n=e.substring(t.toString().length).toUpperCase(),r=["B","KB","MB","GB","TB","PB","EB","ZB","YB"].findIndex((e=>e===n));return t*Math.pow(2,10*r)}function u(e){let t="";const n=Object.keys(e);return n.length?(n.forEach((n=>{const r=e[n];switch(typeof r){case"number":r==r&&(t+=`${n}=${r}&`);break;case"object":t+=null!==r?`${n}=${encodeURIComponent(u(r))}&`:`${n}=null&`;break;case"boolean":t+=`${n}=${r}&`;break;case"string":t+=`${n}=${encodeURIComponent(r)}&`}})),t.substr(0,t.length&&t.length-1)):t}function l(e,t={}){if(!e||1===e.length||0===Object.keys(t).length)return e;if(e.includes("?")){const[n,...r]=e.split("?");t={...f(r.join("")),...t},e=n}else"/"!==e[e.length-1]&&(e=`${e}/`);return(e+=`?${u(t)}&`).substr(0,e.length-1)}function f(e){const t={};if(!e)return t;if(e.includes("?")){const t=e.split("?");e=t[t.length-1]}return e.split("&").forEach((e=>{const[n,r]=e.split("=");t[n]=void 0===r?"":decodeURIComponent(r)})),Object.keys(t).forEach((e=>{const n=t[e];switch(n){case"null":return void(t[e]=null);case"false":return void(t[e]=!1);case"true":return void(t[e]=!0)}if(parseInt(n,10).toString()!==n)try{const r=JSON.parse(decodeURIComponent(n));t[e]=r}catch(r){t[e]=n}else t[e]=Number(n)})),t}function g(e,t,n){e instanceof Date&&(t=e.getMonth()+1,n=e.getFullYear(),e=e.getDate());const r=new Date;t=void 0===t?r.getMonth()+1:t,n=void 0===n?r.getFullYear():n;t<3&&(t+=12,--n);const o=(e+2*t+3*t/5+n+(n/4>>>0)-(n/100>>>0)+(n/400>>>0)+1>>>0)%7;return[["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][o],o+1]}function b(){}function h(e){return Object.prototype.toString.call(e)}function d(e,t=new Map){let n;switch(typeof e){case"undefined":break;case"number":case"boolean":n=e;break;case"string":n=e+"";break;case"bigint":n=BigInt(e);break;case"object":if(null===e)n=null;else if(e instanceof RegExp)n=new RegExp(e.source,e.flags);else if(e instanceof Date)n=new Date(e);else{const r=t.get(e);if(r)return r;if(Array.isArray(e)){const r=e.length;n=new Array(r),t.set(e,n);for(let o=0;o<r;o++)n[o]=d(e[o],t)}else n={},t.set(e,n),Reflect.ownKeys(e).forEach((r=>{n[r]=d(e[r],t)}))}break;case"symbol":n=Symbol(e.description);break;case"function":n=e}return n}function p(e){const t=typeof e;switch(t){case"string":case"boolean":case"bigint":case"number":case"symbol":case"function":case"undefined":return e!=e?"NaN":t;case"object":if(null===e)return"null";if(h(e).slice(8).includes("Object"))return"object";if(Array.isArray(e))return"array"}return"object"}function y(e,t,n=new Map){if(e===t)return!0;const r=p(e);if(r!==p(t))return!1;switch(r){case"symbol":return e.description===t.description;case"NaN":return!0;case"array":if(e.length!==t.length)return!1;if(n.has(e))return n.get(e)===t;if(n.has(t))return!1;n.set(e,t);for(let r=0,o=e.length;r<o;r++)if(!y(e[r],t[r],n))return!1;return!0;case"object":if(n.has(e))return n.get(e)===t;n.set(e,t);for(const r of Reflect.ownKeys(e))if(!y(e[r],t[r],n))return!1;return!0}return e===t}export{n as bin2dec,t as bin2hex,i as bytes2simple,d as clone,g as dayOfTheWeek,l as dealPath,s as dec2bin,c as dec2hex,r as hex2bin,o as hex2dec,b as noop,e as numberConvert,u as object2QueryString,f as query2Object,a as simple2bytes,y as strictEqual,h as toString,p as typeOf};
