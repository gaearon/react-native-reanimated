"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[9372],{79271:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(67294);const a="collapseButton_X7H2",o="arrow_XdVJ";var i;function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const s=e=>{let{title:t,titleId:n,...a}=e;return r.createElement("svg",l({width:12,height:7,viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?r.createElement("title",{id:n},t):null,i||(i=r.createElement("path",{d:"m1 1 5 5 5-5",stroke:"#001A72",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};var c;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}const u=e=>{let{title:t,titleId:n,...a}=e;return r.createElement("svg",d({width:12,height:7,viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?r.createElement("title",{id:n},t):null,c||(c=r.createElement("path",{d:"m1 1 5 5 5-5",stroke:"#F8F9FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};var m=n(92949),h=n(86010);const p=e=>{let{label:t,labelCollapsed:n,collapsed:i,onCollapse:l,className:c}=e;const{colorMode:d}=(0,m.I)();return r.createElement("div",{className:(0,h.default)(a,c),"data-collapsed":i,onClick:()=>l()},"light"===d?r.createElement(s,{className:o}):r.createElement(u,{className:o}),r.createElement("button",null,i?n:t))}},61837:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(60614);const o={container:"container_oGcb",collapseButton:"collapseButton_YVdr"};var i=n(79271);function l(e){let{src:t,showLines:n}=e;const[l,s]=(0,r.useState)(!0);if(!n)return r.createElement(a.Z,{language:"jsx"},t);const[c,d]=n,u=t.split("\n").slice(c,d+1).join("\n");return r.createElement("div",{className:o.container},r.createElement(i.Z,{label:"Collapse the full code",labelCollapsed:"Expand the full code",collapsed:l,onCollapse:()=>s(!l),className:o.collapseButton}),r.createElement(a.Z,{language:"jsx"},l?u:t))}},83760:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){let{sources:t}=e;return r.createElement("div",{style:{flexDirection:"row",justifyContent:"space-between",marginBottom:"16px",display:"flex"}},r.createElement("video",{autoPlay:!0,muted:!0,loop:!0,style:{height:"auto",width:"48%"}},r.createElement("source",{src:t.android,type:"video/mp4"}),"Your browser does not support the video tag."),r.createElement("video",{autoPlay:!0,muted:!0,loop:!0,style:{height:"auto",width:"48%"}},r.createElement("source",{src:t.ios,type:"video/mp4"}),"Your browser does not support the video tag."))}},35554:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),a=n(67177),o=n(28033),i=n(72400),l=n(6665),s=n(72290),c=n(35842),d=n(49638),u=n(10758),m=n(17020);const h=e=>{let{onLayout:t,children:n}=e;return r.createElement(s.n,{horizontal:!0,style:x.hidden,pointerEvents:"box-none"},r.createElement(a.Z,{onLayout:e=>t(e.nativeEvent.layout.width)},n))},p={code:"function anonymous(){const{index,childrenWidth,offset}=this.__closure;return{left:(index-1)*childrenWidth,transform:[{translateX:-offset.value}]};}"},f=e=>{let{index:t,children:n,offset:a,childrenWidth:o}=e;const i=(0,c.l)(function(){const e=function(){return{left:(t-1)*o,transform:[{translateX:-a.value}]}};return e.__closure={index:t,childrenWidth:o,offset:a},e.__workletHash=0xc6c7abc273a,e.__initData=p,e}());return r.createElement(d.n,{style:[E.animatedStyle,i]},n)},v=e=>{let{count:t,renderChild:n}=e;return r.createElement(r.Fragment,null,(a=t,Array.from({length:a},((e,t)=>t))).map(n));var a},y={code:"function anonymous(i){const{offset,coeff,childrenWidth,duration}=this.__closure;var _i$timeSincePreviousF;offset.value+=coeff.value*(((_i$timeSincePreviousF=i.timeSincePreviousFrame)!==null&&_i$timeSincePreviousF!==void 0?_i$timeSincePreviousF:1)*childrenWidth)/duration;offset.value=offset.value%childrenWidth;}"},g=e=>{let{duration:t,childrenWidth:n,parentWidth:a,reverse:o,children:i}=e;const l=(0,u.y)(0),s=(0,u.y)(o?1:-1);r.useEffect((()=>{s.value=o?1:-1}),[o]),(0,m.N)(function(){const e=function(e){l.value+=s.value*((e.timeSincePreviousFrame??1)*n)/t,l.value=l.value%n};return e.__closure={offset:l,coeff:s,childrenWidth:n,duration:t},e.__workletHash=5525573484121,e.__initData=y,e}(),!0);const c=Math.round(a/n)+2;return r.createElement(v,{count:c,renderChild:e=>r.createElement(f,{key:`clone-${e}`,index:e,offset:l,childrenWidth:n},i)})},w=e=>{let{duration:t=2e3,reverse:n=!1,children:o,style:i}=e;const[l,s]=r.useState(0),[c,d]=r.useState(0);return r.createElement(a.Z,{style:i,onLayout:e=>{s(e.nativeEvent.layout.width)},pointerEvents:"box-none"},r.createElement(a.Z,{style:x.row,pointerEvents:"box-none"},r.createElement(h,{onLayout:d},o),c>0&&l>0&&r.createElement(g,{duration:t,parentWidth:l,childrenWidth:c,reverse:n},o)))},x=o.Z.create({hidden:{opacity:0,zIndex:-1},row:{flexDirection:"row",overflow:"hidden"}});const E=o.Z.create({horseImage:{width:140,height:80,marginRight:80},container:{flex:1},safeArea:{display:"flex",gap:"1rem",alignItems:"center",justifyContent:"center",flex:1},animatedStyle:{position:"absolute"},circle:{marginTop:4,borderRadius:100,height:120,width:160,backgroundColor:"#b58df1",display:"flex",justifyContent:"center",alignItems:"center"}}),b=function(){const[e,t]=(0,r.useState)(!1);return r.createElement(a.Z,{style:E.container},r.createElement(a.Z,{style:E.safeArea},r.createElement(i.Z,{onPress:()=>t((e=>!e)),title:"Reverse"}),r.createElement(w,{reverse:e},r.createElement(l.Z,{style:E.horseImage,source:{uri:"https://docs.swmansion.com/react-native-reanimated/img/logo.svg"}}))))}},58454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var r=n(87462),a=(n(67294),n(3905)),o=n(35554),i=n(47814),l=n(83760),s=n(61837);const c={slug:"marquee",title:"Marquee"},d=void 0,u={permalink:"/react-native-reanimated/examples/marquee",source:"@site/blog/marquee.md",title:"Marquee",description:"A marquee is an element used to display scrolling content horizontally within a confined space. It's commonly seen in applications to information such as news tickers, advertisements, or any content that needs continuous display within a limited area.",date:"2024-06-27T12:21:28.000Z",formattedDate:"June 27, 2024",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{slug:"marquee",title:"Marquee"},prevItem:{title:"Floating Action Button",permalink:"/react-native-reanimated/examples/floatingactionbutton"},nextItem:{title:"Section List",permalink:"/react-native-reanimated/examples/sectionlist"}},m={authorsImageUrls:[]},h=[],p=(f="InteractiveExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var f;const v={toc:h},y="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A marquee is an element used to display scrolling content horizontally within a confined space. It's commonly seen in applications to information such as news tickers, advertisements, or any content that needs continuous display within a limited area."),(0,a.kt)(p,{src:i.Z,component:o.Z,mdxType:"InteractiveExample"}),(0,a.kt)("p",null,"Now, let's understand how this example works:"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"MeasureElement")," component measures the width of its children and passes this information to its parent component, Marquee."),(0,a.kt)("samp",{id:"Marquee"},"Marquee"),(0,a.kt)(s.Z,{src:i.Z,showLines:[8,18],mdxType:"CollapsibleCode"}),(0,a.kt)(l.Z,{sources:{android:"/react-native-reanimated/recordings/examples/marquee_android.mov",ios:"/react-native-reanimated/recordings/examples/marquee_ios.mov"},mdxType:"ExampleVideo"}),(0,a.kt)("p",null,"We use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useFrameCallback")," hook to execute the animation logic on each frame."),(0,a.kt)(s.Z,{src:i.Z,showLines:[57,62],mdxType:"CollapsibleCode"}),(0,a.kt)("p",null,"It is located inside ",(0,a.kt)("strong",{parentName:"p"},"ChildrenScroller")," component that manages the scrolling animation by updating the offset value. It determines the horizontal translation of the child components, creates clones of the children and animates them horizontally based on the specified duration."),(0,a.kt)("samp",{id:"Marquee"},"Marquee"),(0,a.kt)(s.Z,{src:i.Z,showLines:[43,76],mdxType:"CollapsibleCode"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Marquee")," component serves as the main orchestrator of the marquee effect. It calculates necessary dimensions, renders child components within a container, and coordinates the animation by utilizing the ChildrenScroller component."),(0,a.kt)("samp",{id:"Marquee"},"Marquee"),(0,a.kt)(s.Z,{src:i.Z,showLines:[78,104],mdxType:"CollapsibleCode"}))}g.isMDXComponent=!0},47814:(e,t,n)=>{n.d(t,{Z:()=>r});const r="import React, { useState } from 'react';\nimport { Button, StyleSheet, View, Image } from 'react-native';\nimport Animated, {\n  useAnimatedStyle,\n  useFrameCallback,\n  useSharedValue,\n} from 'react-native-reanimated';\n\nconst MeasureElement = ({ onLayout, children }) => (\n  <Animated.ScrollView\n    horizontal\n    style={marqueeStyles.hidden}\n    pointerEvents=\"box-none\">\n    <View onLayout={(ev) => onLayout(ev.nativeEvent.layout.width)}>\n      {children}\n    </View>\n  </Animated.ScrollView>\n);\n\nconst TranslatedElement = ({ index, children, offset, childrenWidth }) => {\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      left: (index - 1) * childrenWidth,\n      transform: [\n        {\n          translateX: -offset.value,\n        },\n      ],\n    };\n  });\n  return (\n    <Animated.View style={[styles.animatedStyle, animatedStyle]}>\n      {children}\n    </Animated.View>\n  );\n};\n\nconst getIndicesArray = (length) => Array.from({ length }, (_, i) => i);\n\nconst Cloner = ({ count, renderChild }) => (\n  <>{getIndicesArray(count).map(renderChild)}</>\n);\n\nconst ChildrenScroller = ({\n  duration,\n  childrenWidth,\n  parentWidth,\n  reverse,\n  children,\n}) => {\n  const offset = useSharedValue(0);\n  const coeff = useSharedValue(reverse ? 1 : -1);\n\n  React.useEffect(() => {\n    coeff.value = reverse ? 1 : -1;\n  }, [reverse]);\n\n  useFrameCallback((i) => {\n    // prettier-ignore\n    offset.value += (coeff.value * ((i.timeSincePreviousFrame ?? 1) * childrenWidth)) / duration;\n    offset.value = offset.value % childrenWidth;\n  }, true);\n\n  const count = Math.round(parentWidth / childrenWidth) + 2;\n  const renderChild = (index) => (\n    <TranslatedElement\n      key={`clone-${index}`}\n      index={index}\n      offset={offset}\n      childrenWidth={childrenWidth}>\n      {children}\n    </TranslatedElement>\n  );\n\n  return <Cloner count={count} renderChild={renderChild} />;\n};\n\nconst Marquee = ({ duration = 2000, reverse = false, children, style }) => {\n  const [parentWidth, setParentWidth] = React.useState(0);\n  const [childrenWidth, setChildrenWidth] = React.useState(0);\n\n  return (\n    <View\n      style={style}\n      onLayout={(ev) => {\n        setParentWidth(ev.nativeEvent.layout.width);\n      }}\n      pointerEvents=\"box-none\">\n      <View style={marqueeStyles.row} pointerEvents=\"box-none\">\n        <MeasureElement onLayout={setChildrenWidth}>{children}</MeasureElement>\n\n        {childrenWidth > 0 && parentWidth > 0 && (\n          <ChildrenScroller\n            duration={duration}\n            parentWidth={parentWidth}\n            childrenWidth={childrenWidth}\n            reverse={reverse}>\n            {children}\n          </ChildrenScroller>\n        )}\n      </View>\n    </View>\n  );\n};\n\nconst marqueeStyles = StyleSheet.create({\n  hidden: { opacity: 0, zIndex: -1 },\n  row: { flexDirection: 'row', overflow: 'hidden' },\n});\n\nfunction MarqueeScreen() {\n  const [reverse, setReverse] = useState(false);\n  return (\n    <View style={styles.container}>\n      <View style={styles.safeArea}>\n        <Button onPress={() => setReverse((v) => !v)} title=\"Reverse\" />\n        <Marquee reverse={reverse}>\n          <Image\n            style={styles.horseImage}\n            source={{\n              uri: 'https://docs.swmansion.com/react-native-reanimated/img/logo.svg',\n            }}\n          />\n        </Marquee>\n      </View>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  horseImage: {\n    width: 140,\n    height: 80,\n    marginRight: 80,\n  },\n  container: {\n    flex: 1,\n  },\n  safeArea: {\n    display: 'flex',\n    gap: '1rem',\n    alignItems: 'center',\n    justifyContent: 'center',\n    flex: 1,\n  },\n  animatedStyle: {\n    position: 'absolute',\n  },\n  circle: {\n    marginTop: 4,\n    borderRadius: 100,\n    height: 120,\n    width: 160,\n    backgroundColor: '#b58df1',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});\n\nexport default MarqueeScreen;\n"}}]);