"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[2583],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>h});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(h,i(i({ref:n},d),{},{components:t})):r.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98385:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(58168),o=(t(96540),t(15680));const a={id:"scrollTo",title:"scrollTo",sidebar_label:"scrollTo"},i=void 0,l={unversionedId:"api/nativeMethods/scrollTo",id:"version-2.x/api/nativeMethods/scrollTo",title:"scrollTo",description:"Provides synchronous scroll on the UI thread to a given offset using an animated ref to a scroll view. This allows performing smooth scrolling without lags (which might have otherwise occured when it was asynchronous and based on lots of events).",source:"@site/versioned_docs/version-2.x/api/nativeMethods/scrollTo.md",sourceDirName:"api/nativeMethods",slug:"/api/nativeMethods/scrollTo",permalink:"/react-native-reanimated/docs/2.x/api/nativeMethods/scrollTo",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/edit/main/packages/docs-reanimated/versioned_docs/version-2.x/api/nativeMethods/scrollTo.md",tags:[],version:"2.x",frontMatter:{id:"scrollTo",title:"scrollTo",sidebar_label:"scrollTo"},sidebar:"docs",previous:{title:"measure",permalink:"/react-native-reanimated/docs/2.x/api/nativeMethods/measure"},next:{title:"getRelativeCoords",permalink:"/react-native-reanimated/docs/2.x/api/miscellaneous/getRelativeCoords"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>animatedRef</code>",id:"animatedref",level:4},{value:"<code>x</code> Float",id:"x-float",level:4},{value:"<code>y</code> Float",id:"y-float",level:4},{value:"<code>animated</code> Boolean",id:"animated-boolean",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Provides synchronous scroll on the UI thread to a given offset using an animated ref to a scroll view. This allows performing smooth scrolling without lags (which might have otherwise occured when it was asynchronous and based on lots of events)."),(0,o.yg)("h3",{id:"arguments"},"Arguments"),(0,o.yg)("h4",{id:"animatedref"},(0,o.yg)("inlineCode",{parentName:"h4"},"animatedRef")),(0,o.yg)("p",null,"The product of ",(0,o.yg)("a",{parentName:"p",href:"/docs/2.x/api/hooks/useAnimatedRef"},(0,o.yg)("inlineCode",{parentName:"a"},"useAnimatedRef"))," which is Reanimated's extension of a standard React ref (delivers the view tag on the UI thread)."),(0,o.yg)("h4",{id:"x-float"},(0,o.yg)("inlineCode",{parentName:"h4"},"x")," ","[Float]"),(0,o.yg)("p",null,"Corresponds to the pixel along the horizontal axis of the element that you want displayed in the upper left."),(0,o.yg)("h4",{id:"y-float"},(0,o.yg)("inlineCode",{parentName:"h4"},"y")," ","[Float]"),(0,o.yg)("p",null,"Corresponds to the pixel along the vertical axis of the element that you want displayed in the upper left."),(0,o.yg)("h4",{id:"animated-boolean"},(0,o.yg)("inlineCode",{parentName:"h4"},"animated")," ","[Boolean]"),(0,o.yg)("p",null,"Indicates whether the scroll should be smooth (",(0,o.yg)("inlineCode",{parentName:"p"},"true"),") or instant (",(0,o.yg)("inlineCode",{parentName:"p"},"false"),")."),(0,o.yg)("h3",{id:"returns"},"Returns"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"void")),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { TouchableOpacity, View, Text, ScrollView } from 'react-native';\nimport {\n  useAnimatedRef,\n  useDerivedValue,\n  useSharedValue,\n  scrollTo,\n} from 'react-native-reanimated';\n\nconst ITEM_COUNT = 10;\nconst ITEM_SIZE = 100;\nconst ITEM_MARGIN = 10;\n\nexport const Comp = () => {\n  const aref = useAnimatedRef();\n  const scroll = useSharedValue(0);\n\n  useDerivedValue(() => {\n    scrollTo(aref, 0, scroll.value * (ITEM_SIZE + 2 * ITEM_MARGIN), true);\n  });\n\n  const items = Array.from(Array(ITEM_COUNT).keys());\n\n  const Incrementor = ({ increment }) => (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <TouchableOpacity\n        onPress={() => {\n          scroll.value =\n            scroll.value + increment > 0\n              ? scroll.value + increment\n              : ITEM_COUNT - 1 + increment;\n\n          if (scroll.value >= ITEM_COUNT - 2) scroll.value = 0;\n        }}>\n        <Text>{`Scroll ${Math.abs(increment)} ${\n          increment > 0 ? 'down' : 'up'\n        }`}</Text>\n      </TouchableOpacity>\n    </View>\n  );\n\n  return (\n    <View style={{ flex: 1, flexDirection: 'column' }}>\n      <Incrementor increment={1} />\n      <View\n        style={{ width: '100%', height: (ITEM_SIZE + 2 * ITEM_MARGIN) * 2 }}>\n        <ScrollView ref={aref} style={{ backgroundColor: 'orange' }}>\n          {items.map((_, i) => (\n            <View\n              key={i}\n              style={{\n                backgroundColor: 'white',\n                aspectRatio: 1,\n                width: ITEM_SIZE,\n                margin: ITEM_MARGIN,\n                justifyContent: 'center',\n                alignContent: 'center',\n              }}>\n              <Text style={{ textAlign: 'center' }}>{i}</Text>\n            </View>\n          ))}\n        </ScrollView>\n      </View>\n\n      <Incrementor increment={-1} />\n    </View>\n  );\n};\n")))}p.isMDXComponent=!0}}]);