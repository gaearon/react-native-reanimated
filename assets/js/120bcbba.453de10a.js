"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[2436],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=m(t),u=r,g=c["".concat(l,".").concat(u)]||c[u]||p[u]||i;return t?a.createElement(g,o(o({ref:n},s),{},{components:t})):a.createElement(g,o({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[c]="string"==typeof e?e:r,o[1]=d;for(var m=2;m<i;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},88419:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var a=t(58168),r=(t(96540),t(15680));const i={id:"migration",title:"Migrating from Reanimated 1.x",sidebar_label:"Migration from v1"},o=void 0,d={unversionedId:"fundamentals/migration",id:"version-2.x/fundamentals/migration",title:"Migrating from Reanimated 1.x",description:"We wanted to make it possible to migrate from Reanimated 1 to Reanimated 2 incrementally.",source:"@site/versioned_docs/version-2.x/fundamentals/migration.md",sourceDirName:"fundamentals",slug:"/fundamentals/migration",permalink:"/react-native-reanimated/docs/2.x/fundamentals/migration",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/edit/main/packages/docs-reanimated/versioned_docs/version-2.x/fundamentals/migration.md",tags:[],version:"2.x",frontMatter:{id:"migration",title:"Migrating from Reanimated 1.x",sidebar_label:"Migration from v1"},sidebar:"docs",previous:{title:"Layout Animations",permalink:"/react-native-reanimated/docs/2.x/fundamentals/layout_animations"},next:{title:"Web Support",permalink:"/react-native-reanimated/docs/2.x/fundamentals/web-support"}},l={},m=[{value:"Renamed methods:",id:"renamed-methods",level:3},{value:"1. <code>interpolate</code> renamed to <code>interpolateNode</code>",id:"1-interpolate-renamed-to-interpolatenode",level:4},{value:"2. <code>Easing</code> renamed to <code>EasingNode</code>",id:"2-easing-renamed-to-easingnode",level:4}],s={toc:m},c="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"We wanted to make it possible to migrate from Reanimated 1 to Reanimated 2 incrementally.\nWhen installing Reanimated 2, you will be able to use the old API as well as the new one.\nWe made the latest stable Reanimated 1 available from the same package with a few exceptions, as we needed to address some naming collisions.\nWhenever there was a naming collision with Reanimated 1, we'd rename the Reanimated 1 version of such method in order to keep the naming in Reanimated 2 cleaner.\nThis strategy made the most sense to us, as we are planning to slowly phase out the old API (we will keep making fixes to Reanimated 1 core but most likely stop new feature development).\nUnfortunately, it means that Reanimated 2 introduces some breaking changes to the API, where some methods pulled from Reanimated 1 changed their name.\nThankfully the list of the renamed methods is relatively short, and the renamed methods weren't too frequently used anyways."),(0,r.yg)("h3",{id:"renamed-methods"},"Renamed methods:"),(0,r.yg)("h4",{id:"1-interpolate-renamed-to-interpolatenode"},"1. ",(0,r.yg)("inlineCode",{parentName:"h4"},"interpolate")," renamed to ",(0,r.yg)("inlineCode",{parentName:"h4"},"interpolateNode")),(0,r.yg)("p",null,"When using ",(0,r.yg)("inlineCode",{parentName:"p"},"interpolate")," imported directly from ",(0,r.yg)("inlineCode",{parentName:"p"},"react-native-reanimated")," v1, in v2 you should use ",(0,r.yg)("inlineCode",{parentName:"p"},"interpolateNode")," instead.\nIf you were using a class member method ",(0,r.yg)("inlineCode",{parentName:"p"},"AnimatedValue.interpolate"),", no change is necessary."),(0,r.yg)("h4",{id:"2-easing-renamed-to-easingnode"},"2. ",(0,r.yg)("inlineCode",{parentName:"h4"},"Easing")," renamed to ",(0,r.yg)("inlineCode",{parentName:"h4"},"EasingNode")),(0,r.yg)("p",null,"When using ",(0,r.yg)("inlineCode",{parentName:"p"},"Easing")," imported from ",(0,r.yg)("inlineCode",{parentName:"p"},"react-native-reanimated")," v1, in v2 you should use ",(0,r.yg)("inlineCode",{parentName:"p"},"EasingNode")," instead."))}p.isMDXComponent=!0}}]);