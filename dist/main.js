(()=>{"use strict";var n,e,t,r,o={179:(n,e,t)=>{t.a(n,(async(n,r)=>{try{t.r(e),t.d(e,{__wbg_get_27fe3dac1c4d0224:()=>a.Se,__wbg_isArray_39d28997bf6b96b4:()=>a.e7,__wbg_length_e498fbc24f9c1d4f:()=>a.nH,__wbg_new_b525de17f44a8943:()=>a.zQ,__wbg_push_49c286f04dd3bf59:()=>a.jI,__wbg_set_wasm:()=>a.oT,__wbindgen_debug_string:()=>a.fY,__wbindgen_number_get:()=>a.M1,__wbindgen_number_new:()=>a.pT,__wbindgen_object_drop_ref:()=>a.ug,__wbindgen_string_new:()=>a.h4,__wbindgen_throw:()=>a.Or,kmeans:()=>a.aB,kmeans_rgb:()=>a.GN});var o=t(689),a=t(293),i=n([o]);o=(i.then?(await i)():i)[0],(0,a.oT)(o),r()}catch(n){r(n)}}))},293:(n,e,t)=>{let r;function o(n){r=n}t.d(e,{GN:()=>k,M1:()=>M,Or:()=>P,Se:()=>T,aB:()=>x,e7:()=>$,fY:()=>B,h4:()=>j,jI:()=>I,nH:()=>E,oT:()=>o,pT:()=>A,ug:()=>S,zQ:()=>O}),n=t.hmd(n);const a=new Array(128).fill(void 0);function i(n){return a[n]}a.push(void 0,null,!0,!1);let s=a.length;function c(n){const e=i(n);return function(n){n<132||(a[n]=s,s=n)}(n),e}function f(n){return null==n}let u=null,d=null;function l(){return null!==d&&0!==d.byteLength||(d=new Int32Array(r.memory.buffer)),d}let _=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});_.decode();let h=null;function g(){return null!==h&&0!==h.byteLength||(h=new Uint8Array(r.memory.buffer)),h}function b(n,e){return _.decode(g().subarray(n,n+e))}function m(n){s===a.length&&a.push(a.length+1);const e=s;return s=a[e],a[e]=n,e}function p(n){const e=typeof n;if("number"==e||"boolean"==e||null==n)return`${n}`;if("string"==e)return`"${n}"`;if("symbol"==e){const e=n.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==e){const e=n.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(n)){const e=n.length;let t="[";e>0&&(t+=p(n[0]));for(let r=1;r<e;r++)t+=", "+p(n[r]);return t+="]",t}const t=/\[object ([^\]]+)\]/.exec(toString.call(n));let r;if(!(t.length>1))return toString.call(n);if(r=t[1],"Object"==r)try{return"Object("+JSON.stringify(n)+")"}catch(n){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n${n.stack}`:r}let w=0,y=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const v="function"==typeof y.encodeInto?function(n,e){return y.encodeInto(n,e)}:function(n,e){const t=y.encode(n);return e.set(t),{read:n.length,written:t.length}};function k(n,e,t,o){try{const _=r.__wbindgen_add_to_stack_pointer(-16),h=function(n,e){const t=e(1*n.length);return g().set(n,t/1),w=n.length,t}(o,r.__wbindgen_malloc),b=w;r.kmeans_rgb(_,n,e,t,h,b);var a=l()[_/4+0],i=l()[_/4+1],s=l()[_/4+2];if(l()[_/4+3])throw c(s);var f=(u=a,d=i,g().subarray(u/1,u/1+d)).slice();return r.__wbindgen_free(a,1*i),f}finally{r.__wbindgen_add_to_stack_pointer(16)}var u,d}function x(n,e,t,o){try{const s=r.__wbindgen_add_to_stack_pointer(-16);r.kmeans(s,n,e,t,m(o));var a=l()[s/4+0],i=l()[s/4+1];if(l()[s/4+2])throw c(i);return c(a)}finally{r.__wbindgen_add_to_stack_pointer(16)}}function S(n){c(n)}function M(n,e){const t=i(e),o="number"==typeof t?t:void 0;(null!==u&&0!==u.byteLength||(u=new Float64Array(r.memory.buffer)),u)[n/8+1]=f(o)?0:o,l()[n/4+0]=!f(o)}function j(n,e){return m(b(n,e))}function A(n){return m(n)}function T(n,e){return m(i(n)[e>>>0])}function E(n){return i(n).length}function O(){return m(new Array)}function $(n){return Array.isArray(i(n))}function I(n,e){return i(n).push(i(e))}function B(n,e){const t=function(n,e,t){if(void 0===t){const t=y.encode(n),r=e(t.length);return g().subarray(r,r+t.length).set(t),w=t.length,r}let r=n.length,o=e(r);const a=g();let i=0;for(;i<r;i++){const e=n.charCodeAt(i);if(e>127)break;a[o+i]=e}if(i!==r){0!==i&&(n=n.slice(i)),o=t(o,r,r=i+3*n.length);const e=g().subarray(o+i,o+r);i+=v(n,e).written}return w=i,o}(p(i(e)),r.__wbindgen_malloc,r.__wbindgen_realloc),o=w;l()[n/4+1]=o,l()[n/4+0]=t}function P(n,e){throw new Error(b(n,e))}},697:n=>{n.exports={eudist:function(n,e){for(var t=n.length,r=0,o=0;o<t;o++){var a=(n[o]||0)-(e[o]||0);r+=a*a}return r},mandist:function(n,e){for(var t=n.length,r=0,o=0,a=0;a<t;a++)r+=(o=(n[a]||0)-(e[a]||0))>=0?o:-o;return r},dist:function(n,e,t){var r=Math.abs(n-e);return t?r:r*r}}},35:(n,e,t)=>{var r=t(697),o=r.eudist,a=r.dist;n.exports={kmrand:function(n,e){for(var t={},r=[],o=e<<2,a=n.length,i=n[0].length>0;r.length<e&&o-- >0;){var s=n[Math.floor(Math.random()*a)],c=i?s.join("_"):"".concat(s);t[c]||(t[c]=!0,r.push(s))}if(r.length<e)throw new Error("Error initializating clusters");return r},kmpp:function(n,e,t){var r=t||(n[0].length?o:a),i=[],s=n.length,c=n[0].length>0,f=n[Math.floor(Math.random()*s)];for(c?f.join("_"):"".concat(f),i.push(f);i.length<e;){for(var u=[],d=i.length,l=0,_=[],h=0;h<s;h++){for(var g=1/0,b=0;b<d;b++){var m=r(n[h],i[b]);m<=g&&(g=m)}u[h]=g}for(var p=0;p<s;p++)l+=u[p];for(var w=0;w<s;w++)_[w]={i:w,v:n[w],pr:u[w]/l,cs:0};_.sort((function(n,e){return n.pr-e.pr})),_[0].cs=_[0].pr;for(var y=1;y<s;y++)_[y].cs=_[y-1].cs+_[y].pr;for(var v=Math.random(),k=0;k<s-1&&_[k++].cs<v;);i.push(_[k-1].v)}return i}}},160:(n,e,t)=>{var r=t(697),o=t(35),a=r.eudist,i=(r.mandist,r.dist,o.kmrand),s=o.kmpp;function c(n,e,t){t=t||[];for(var r=0;r<n;r++)t[r]=e;return t}function f(n,e){for(var t=Array.isArray(n),r=this.centroids,o=r.length,i=1/0,s=0,c=0;c<o;c++){var f=e?e(n,r[c]):t?a(n,r[c]):Math.abs(n-r[c]);f<=i&&(i=f,s=c)}return{idx:s,centroid:r[s]}}n.exports=function(n,e,t,r,o){var u=[],d=[],l=[],_=[],h=!1,g=r||1e4,b=n.length,m=n[0].length,p=m>0,w=[];if(t)u="kmrand"==t?i(n,e):"kmpp"==t?s(n,e,o):t;else for(var y={},v=0;u.length<e;){var k=Math.floor(Math.random()*b);y[k]||(y[k]=!0,u[v++]=n[k])}do{c(e,0,w);for(var x=0;x<b;x++){for(var S=1/0,M=0,j=0;j<e;j++)(_=o?o(n[x],u[j]):p?a(n[x],u[j]):Math.abs(n[x]-u[j]))<=S&&(S=_,M=j);l[x]=M,w[M]++}var A=[];if(d=[],p)for(var T=0;T<e;T++)A[T]=c(m,0,A[T]),d[T]=u[T];else for(var E=0;E<e;E++)A[E]=0,d[E]=u[E];if(p){for(var O=0;O<e;O++)u[O]=[];for(var $=0;$<b;$++)for(var I=A[l[$]],B=n[$],P=0;P<m;P++)I[P]+=B[P];h=!0;for(var H=0;H<e;H++){for(var D=u[H],W=A[H],q=d[H],z=w[H],F=0;F<m;F++)D[F]=W[F]/z||0;if(h)for(var L=0;L<m;L++)if(q[L]!=D[L]){h=!1;break}}}else{for(var G=0;G<b;G++)A[l[G]]+=n[G];for(var N=0;N<e;N++)u[N]=A[N]/w[N]||0;h=!0;for(var Y=0;Y<e;Y++)if(d[Y]!=u[Y]){h=!1;break}}h=h||--g<=0}while(!h);return{it:(r||1e4)-g,k:e,idxs:l,centroids:u,test:f}}},607:function(n,e,t){var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0});const o=r(t(160)),a=r(t(179)),i=[2,10,50],s=[3,10,50],c=100;function f(n,e,...t){let r=0;for(let o=0;o<e;o++){const e=performance.now(),o=n(...t);r+=performance.now()-e,console.log(o.toString())}return r/e}function u(n,e){return new Array(n).fill(0).map((()=>new Array(e).fill(0).map((()=>Math.random()))))}function d(n){const e=Array.from(new Set(n.map((n=>n.k)))).sort(((n,e)=>n-e)),t=Array.from(new Set(n.map((n=>n.dimensions)))).sort(((n,e)=>n-e));let r="\n    <table>\n      <thead>\n        <tr>\n          <th>Dimensions \\ k</th>\n  ";return e.forEach((n=>{r+=`<th>${n}</th>`})),r+="\n        </tr>\n      </thead>\n      <tbody>\n  ",t.forEach((t=>{r+=`<tr><td>${t}</td>`,e.forEach((e=>{const o=n.find((n=>n.k===e&&n.dimensions===t));r+=`<td>${o?o.avarageTime:""}</td>`})),r+="</tr>"})),r+="\n      </tbody>\n    </table>\n  ",r}(async()=>{const n=(await a.default).kmeans,e=(await a.default).kmeans_rgb,t=i.map((n=>s.map((e=>({k:n,dimensions:e,data:u(1e3,e)}))))).flat(),r=t.map((({k:n,dimensions:e,data:t})=>({k:n,dimensions:e,avarageTime:f(o.default,10,t,n,void 0,c)}))),l=t.map((({k:e,dimensions:t,data:r})=>({k:e,dimensions:t,avarageTime:f(n,10,e,0,c,r)}))),_=document.getElementById("results-table");_&&(_.innerHTML+=`\n      <h2>skmeans</h2>\n      ${d(r)}\n      <h2>kmeans-wasm</h2>\n      ${d(l)}\n    `);const h=new Image;h.src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",h.crossOrigin="Anonymous",h.onload=()=>{const n=document.createElement("canvas");n.width=h.width,n.height=h.height;const t=n.getContext("2d");t.drawImage(h,0,0);const r=t.getImageData(0,0,n.width,n.height).data,a=[];for(let n=0;n<r.length;n+=4)a.push([r[n],r[n+1],r[n+2]]);const s=i.map((n=>({k:n,dimensions:3,avarageTime:f(o.default,10,a,n,void 0,c)}))),u=[];for(let n=0;n<r.length;n+=4)u.push(r[n],r[n+1],r[n+2]);const l=new Uint8Array(u),g=i.map((n=>({k:n,dimensions:3,avarageTime:f(e,10,n,0,c,l)})));_&&(_.innerHTML+=`\n      <h2>skmeans RGB</h2>\n      ${d(s)}\n      <h2>kmeans-wasm RGB</h2>\n      ${d(g)}\n      `)}})()},689:(n,e,t)=>{var r=t(293);n.exports=t.v(e,n.id,"bc15e4c48c8607b1393c",{"./kmeans_wasm_bg.js":{__wbindgen_object_drop_ref:r.ug,__wbindgen_number_get:r.M1,__wbindgen_string_new:r.h4,__wbindgen_number_new:r.pT,__wbg_get_27fe3dac1c4d0224:r.Se,__wbg_length_e498fbc24f9c1d4f:r.nH,__wbg_new_b525de17f44a8943:r.zQ,__wbg_isArray_39d28997bf6b96b4:r.e7,__wbg_push_49c286f04dd3bf59:r.jI,__wbindgen_debug_string:r.fY,__wbindgen_throw:r.Or}})}},a={};function i(n){var e=a[n];if(void 0!==e)return e.exports;var t=a[n]={id:n,loaded:!1,exports:{}};return o[n].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}n="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=n=>{n&&!n.d&&(n.d=1,n.forEach((n=>n.r--)),n.forEach((n=>n.r--?n.r++:n())))},i.a=(o,a,i)=>{var s;i&&((s=[]).d=1);var c,f,u,d=new Set,l=o.exports,_=new Promise(((n,e)=>{u=e,f=n}));_[e]=l,_[n]=n=>(s&&n(s),d.forEach(n),_.catch((n=>{}))),o.exports=_,a((o=>{var a;c=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[n])return o;if(o.then){var a=[];a.d=0,o.then((n=>{i[e]=n,r(a)}),(n=>{i[t]=n,r(a)}));var i={};return i[n]=n=>n(a),i}}var s={};return s[n]=n=>{},s[e]=o,s})))(o);var i=()=>c.map((n=>{if(n[t])throw n[t];return n[e]})),f=new Promise((e=>{(a=()=>e(i)).r=0;var t=n=>n!==s&&!d.has(n)&&(d.add(n),n&&!n.d&&(a.r++,n.push(a)));c.map((e=>e[n](t)))}));return a.r?f:i()}),(n=>(n?u(_[t]=n):f(l),r(s)))),s&&(s.d=0)},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.hmd=n=>((n=Object.create(n)).children||(n.children=[]),Object.defineProperty(n,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+n.id)}}),n),i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),i.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.v=(n,e,t,r)=>{var o=fetch(i.p+""+t+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,r).then((e=>Object.assign(n,e.instance.exports))):o.then((n=>n.arrayBuffer())).then((n=>WebAssembly.instantiate(n,r))).then((e=>Object.assign(n,e.instance.exports)))},(()=>{var n;i.g.importScripts&&(n=i.g.location+"");var e=i.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=n})(),i(607)})();