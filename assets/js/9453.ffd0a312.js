"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[9453],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),p=i,d=f["".concat(l,".").concat(p)]||f[p]||m[p]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},49638:(e,t,n)=>{n.d(t,{n:()=>i});var r=n(67177);const i=(0,n(99435).F)(r.Z)},35842:(e,t,n)=>{n.d(t,{l:()=>v});var r=n(67294),i=n(86425),a=n(97604),o=n(49402),s=n(76933),l=n(10758),c=n(40093),u=n(41956),f=n(83442);const m=(0,f.Wr)();function p(e,t,n,r){if(Array.isArray(t)&&t.forEach(((t,i)=>{p(e,t,n&&n[i],r&&r[i])})),"object"==typeof t&&t.onFrame){const i=t;let a=i.current;null!=r&&("object"==typeof r?void 0!==r.value?a=r.value:void 0!==r.onFrame&&(void 0!==(null==n?void 0:n.current)?a=n.current:void 0!==(null==r?void 0:r.current)&&(a=r.current)):a=r),i.callStart=e=>{i.onStart(i,a,e,n)},i.callStart(e),i.callStart=null}else"object"==typeof t&&Object.keys(t).forEach((i=>p(e,t[i],n&&n[i],r&&r[i])))}function d(e,t,n,r,i){if(!i.value)return!0;if(Array.isArray(e)){r[n]=[];let a=!0;return e.forEach(((e,o)=>{d(e,t,o,r[n],i)||(a=!1)})),a}if("object"==typeof e&&e.onFrame){let i=!0;return e.finished||(e.callStart&&(e.callStart(t),e.callStart=null),i=e.onFrame(e,t),e.timestamp=t,i&&(e.finished=!0,e.callback&&e.callback(!0))),r[n]=e.current,i}if("object"==typeof e){r[n]={};let a=!0;return Object.keys(e).forEach((o=>{d(e[o],t,o,r[n],i)||(a=!1)})),a}return r[n]=e,!0}function y(e,t){if(Array.isArray(e))for(const n of e)y(n,t);else if("object"==typeof e&&null!==e&&void 0===e.value)for(const n of Object.keys(e))y(e[n],n);else if(void 0!==t&&"object"==typeof e&&null!==e&&void 0!==e.value)throw new Error(`[Reanimated] Invalid value passed to \`${t}\`, maybe you forgot to use \`.value\`?`)}function v(e,t,v){let b=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const g=(0,u.H)(),h=(0,r.useRef)();let w=Object.values(e.__closure??{});var O;m&&(!w.length&&null!==(O=t)&&void 0!==O&&O.length&&(w=t));const j=v?Array.isArray(v)?v:[v]:[],A=v?(0,c.Nq)(j):null,E=(0,l.y)(!0),R=(0,r.useRef)({});if(t?t.push(e.__workletHash):t=[...w,e.__workletHash],A&&t.push(A),!h.current){const t=(0,s.AX)(e);0,h.current={initial:{value:t,updater:e},remoteState:(0,i.Uv)({last:t,animations:{},isAnimationCancelled:!1,isAnimationRunning:!1}),viewDescriptors:(0,u.G)()}}const{initial:S,remoteState:k,viewDescriptors:C}=h.current,_=C.shareableViewDescriptors;t.push(_),(0,r.useEffect)((()=>{let t,r=e;v&&(r=()=>{const t=e();return j.forEach((e=>{e(t)})),t}),t=(0,f.V5)()?()=>{!function(e,t,r,i,a,s,l){const u=r.animations??{},f=t()??{},m=r.last;let y,v=!1;Object.keys(u).forEach((e=>{const t=f[e];(0,c.mE)(t)||delete u[e]})),Object.keys(f).forEach((e=>{const t=f[e];(0,c.mE)(t)&&(y=n.g.__frameTimestamp||n.g._getAnimationTimestamp(),p(y,t,u[e],m[e]),u[e]=t,v=!0)})),v?(r.animations=u,r.isAnimationRunning||(r.isAnimationCancelled=!1,r.isAnimationRunning=!0,function t(n){const{animations:c,last:u,isAnimationCancelled:f}=r;if(f)return void(r.isAnimationRunning=!1);const m={};let p=!0;Object.keys(c).forEach((e=>{d(c[e],n,e,m,a)?(u[e]=m[e],delete c[e]):p=!1})),Object.keys(m).length&&(0,o.R)(e,m,i,s,l),p?r.isAnimationRunning=!1:requestAnimationFrame(t)}(y))):(r.isAnimationCancelled=!0,r.animations=[]),r.last=f,(0,c.wU)(m,f)||(0,o.R)(e,f,i,s,l)}(_,e,k,g,E,R,j)}:()=>{!function(e,t,r,i,a){let s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const l=r.animations??{},u=t()??{},f=r.last,m={};let y,v=!1,b=!1;for(const o in u){const e=u[o];(0,c.mE)(e)?(y=n.g.__frameTimestamp||n.g._getAnimationTimestamp(),p(y,e,l[o],f[o]),l[o]=e,v=!0):(b=!0,m[o]=e,delete l[o])}if(v){const t=n=>{const{animations:s,last:l,isAnimationCancelled:c}=r;if(c)return void(r.isAnimationRunning=!1);const u={};let f=!0;for(const e in s)d(s[e],n,e,u,a)?(l[e]=u[e],delete s[e]):f=!1;u&&(0,o.Z)(e,u,i),f?r.isAnimationRunning=!1:requestAnimationFrame(t)};r.animations=l,r.isAnimationRunning||(r.isAnimationCancelled=!1,r.isAnimationRunning=!0,t(y)),b&&(0,o.Z)(e,m,i)}else r.isAnimationCancelled=!0,r.animations=[],(0,c.wU)(f,u)||(0,o.Z)(e,u,i,s);r.last=u}(_,r,k,g,E,b)};const i=(0,a.R)(t,w);return()=>{(0,a.B)(i)}}),t),(0,r.useEffect)((()=>(E.value=!0,()=>{E.value=!1})),[E]),y(S.value);const P=(0,r.useRef)(null);return P.current||(P.current=(0,f.V5)()?{viewDescriptors:C,initial:S,viewsRef:g,jestAnimatedStyle:R}:{initial:S,viewsRef:g,viewDescriptors:C}),P.current}},76636:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),i=n(63366),a=n(67294),o=n(28033),s=n(67177),l=n(13145),c=["style"],u=l.Z&&window.CSS&&window.CSS.supports&&window.CSS.supports("top: constant(safe-area-inset-top)")?"constant":"env",f=a.forwardRef(((e,t)=>{var n=e.style,l=(0,i.Z)(e,c);return a.createElement(s.Z,(0,r.Z)({},l,{ref:t,style:o.Z.compose(m.root,n)}))}));f.displayName="SafeAreaView";var m=o.Z.create({root:{paddingTop:u+"(safe-area-inset-top)",paddingRight:u+"(safe-area-inset-right)",paddingBottom:u+"(safe-area-inset-bottom)",paddingLeft:u+"(safe-area-inset-left)"}});const p=f}}]);