"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[6573],{34489:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>g,contentTitle:()=>h,default:()=>S,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var t=n(58168),r=n(96540),l=n(15680),i=n(9176),s=n(62257),o=n(72188),u=n(45151);function d(){const e=(0,u.useSharedValue)(100);return r.createElement(i.A,{style:p.container},r.createElement(u.default.View,{style:{...p.box,width:e}}),r.createElement(s.A,{onPress:()=>{e.value+=50},title:"Click me"}))}const p=o.A.create({container:{flex:1,alignItems:"center"},box:{height:100,backgroundColor:"#b58df1",borderRadius:20,marginVertical:64}}),c="import React from 'react';\nimport { Button, StyleSheet, View } from 'react-native';\nimport Animated, { useSharedValue } from 'react-native-reanimated';\n\nexport default function App() {\n  // highlight-next-line\n  const width = useSharedValue<number>(100);\n\n  const handlePress = () => {\n    // highlight-next-line\n    width.value += 50;\n  };\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={{ ...styles.box, width }} />\n      <Button onPress={handlePress} title=\"Click me\" />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  box: {\n    height: 100,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    marginVertical: 64,\n  },\n});\n",m={sidebar_position:1},h="useSharedValue",y={unversionedId:"core/useSharedValue",id:"core/useSharedValue",title:"useSharedValue",description:"useSharedValue lets you define shared values in your components.",source:"@site/docs/core/useSharedValue.mdx",sourceDirName:"core",slug:"/core/useSharedValue",permalink:"/react-native-reanimated/docs/core/useSharedValue",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/edit/main/packages/docs-reanimated/docs/core/useSharedValue.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Core",permalink:"/react-native-reanimated/docs/category/core"},next:{title:"useAnimatedStyle",permalink:"/react-native-reanimated/docs/core/useAnimatedStyle"}},g={},v=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>initialValue</code>",id:"initialvalue",level:4},{value:"Returns",id:"returns",level:3},{value:"React Compiler support",id:"react-compiler-support",level:4},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],f=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.yg)("div",a)},b=f("InteractiveExample"),N=f("Indent"),w=f("PlatformCompatibility"),V={toc:v},C="wrapper";function S(e){let{components:a,...n}=e;return(0,l.yg)(C,(0,t.A)({},V,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"usesharedvalue"},"useSharedValue"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"useSharedValue")," lets you define ",(0,l.yg)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared values")," in your components."),(0,l.yg)("h2",{id:"reference"},"Reference"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"import { useSharedValue } from 'react-native-reanimated';\n\nfunction App() {\n  const sv = useSharedValue(100);\n\n  // read a shared value\n  console.log(sv.value);\n\n  // and modify it\n  sv.value += 50;\n}\n")),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Type definitions"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-typescript"},"interface SharedValue<Value = unknown> {\n  value: Value;\n  get(): Value;\n  set(value: Value | ((value: Value) => Value)): void;\n  addListener: (listenerID: number, listener: (value: Value) => void) => void;\n  removeListener: (listenerID: number) => void;\n  modify: (\n    modifier?: <T extends Value>(value: T) => T,\n    forceUpdate?: boolean\n  ) => void;\n}\n\nfunction useSharedValue<Value>(initialValue: Value): SharedValue<Value>;\n"))),(0,l.yg)("h3",{id:"arguments"},"Arguments"),(0,l.yg)("h4",{id:"initialvalue"},(0,l.yg)("inlineCode",{parentName:"h4"},"initialValue")),(0,l.yg)("p",null,"The value you want to store initially in the shared value. It can be any JavaScript value like ",(0,l.yg)("inlineCode",{parentName:"p"},"number"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"string")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"boolean")," but also data structures such as ",(0,l.yg)("inlineCode",{parentName:"p"},"array")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"object"),"."),(0,l.yg)("h3",{id:"returns"},"Returns"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"useSharedValue")," returns a shared value initially set to the ",(0,l.yg)("inlineCode",{parentName:"p"},"initialValue"),"."),(0,l.yg)("p",null,"You can access data stored in the shared value with either its ",(0,l.yg)("inlineCode",{parentName:"p"},"value")," property or ",(0,l.yg)("inlineCode",{parentName:"p"},"get")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"set")," methods."),(0,l.yg)("h4",{id:"react-compiler-support"},"React Compiler support"),(0,l.yg)("p",null,"When working with the ",(0,l.yg)("a",{parentName:"p",href:"https://react.dev/learn/react-compiler"},"React Compiler"),", you should refrain from accessing and modifying the ",(0,l.yg)("inlineCode",{parentName:"p"},"value")," property directly. Instead, use the ",(0,l.yg)("inlineCode",{parentName:"p"},"get")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"set")," methods. They're the alternative API for ",(0,l.yg)("inlineCode",{parentName:"p"},"useSharedValue"),", compliant with the React Compiler standards."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"function App() {\n  const sv = useSharedValue(100);\n\n  const animatedStyle = useAnimatedStyle(() => {\n    'worklet';\n    return { width: sv.get() * 100 };\n  });\n\n  const handlePress = () => {\n    sv.set((value) => value + 1);\n  };\n}\n")),(0,l.yg)("h2",{id:"example"},"Example"),(0,l.yg)(b,{src:c,component:d,showCode:!0,mdxType:"InteractiveExample"}),(0,l.yg)("h2",{id:"remarks"},"Remarks"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Don't read or modify the value of a shared value during a component's render. Access to ",(0,l.yg)("inlineCode",{parentName:"p"},"value")," property or calling ",(0,l.yg)("inlineCode",{parentName:"p"},"get"),"/",(0,l.yg)("inlineCode",{parentName:"p"},"set")," methods is a side-effect. Triggering side-effects during render ",(0,l.yg)("a",{parentName:"p",href:"https://react.dev/reference/rules/components-and-hooks-must-be-pure#side-effects-must-run-outside-of-render"},"violates the Rules of React"),". All reads from and writes to a shared value should happen in relevant callbacks which aren't executed during render, i.e. in ",(0,l.yg)("inlineCode",{parentName:"p"},"useAnimatedStyle")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"useEffect")," hooks.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"When you change the ",(0,l.yg)("inlineCode",{parentName:"p"},"sv.value")," Reanimated will update the styles and keep the shared value in sync between the threads. However, this won't trigger a typical React re-render because a shared value is a plain JavaScript object.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"When you read the ",(0,l.yg)("inlineCode",{parentName:"p"},"sv.value")," on the ",(0,l.yg)("a",{parentName:"p",href:"/docs/fundamentals/glossary#javascript-thread"},"JavaScript thread"),", the thread will get blocked until the value is fetched from the ",(0,l.yg)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),". In most cases it will be negligible, but if the UI thread is busy or you are reading a value multiple times, the wait time needed to synchronize both threads may significantly increase.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"When you change the ",(0,l.yg)("inlineCode",{parentName:"p"},"sv.value")," the update will happen synchronously on the ",(0,l.yg)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),". On the other hand, on the ",(0,l.yg)("a",{parentName:"p",href:"/docs/fundamentals/glossary#javascript-thread"},"JavaScript thread")," the update is asynchronous. This means when you try to immediately log the ",(0,l.yg)("inlineCode",{parentName:"p"},"value")," after the change it will log the previously stored value."))),(0,l.yg)(N,{mdxType:"Indent"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"function App() {\n  const sv = useSharedValue(100); // initially set 100\n\n  sv.value += 50; // changing value stored in a shared value\n\n  console.log(sv.value); // will still log 100\n}\n"))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Stay away from ",(0,l.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"},"destructuring assignment")," when working with shared values. While this is a completely valid JavaScript code it will make Reanimated unable to keep the reactivity of a shared value.")),(0,l.yg)(N,{mdxType:"Indent"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"function App() {\n  let { value } = sv; // don't do this\n\n  console.log(value); // you can read the value just fine\n\n  value += 50; // but this won't update the styles\n}\n"))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"When storing objects in a shared value, make sure to reassign an object instead of changing the properties individually.")),(0,l.yg)(N,{mdxType:"Indent"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"function App() {\n  const sv = useSharedValue({ x: 0, y: 0 });\n\n  sv.value.x = 50; // Reanimated loses reactivity \ud83d\udea8\n\n  sv.value = { x: 50, y: 0 }; // \u2705\n}\n"))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"When storing large arrays or complex objects in a shared value, you can use ",(0,l.yg)("inlineCode",{parentName:"li"},".modify")," method to alter the existing value instead of creating a new one.")),(0,l.yg)(N,{mdxType:"Indent"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"function App() {\n  const sv = useSharedValue([1, 2, 3]);\n\n  sv.value.push(1000); // Reanimated loses reactivity \ud83d\udea8\n\n  sv.value = [...sv.value, 1000]; // works, but creates a new copy \u26a0\ufe0f\n\n  sv.modify((value) => {\n    'worklet';\n    value.push(1000); // \u2705\n    return value;\n  });\n}\n"))),(0,l.yg)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,l.yg)(w,{android:!0,ios:!0,web:!0,mdxType:"PlatformCompatibility"}))}S.isMDXComponent=!0},62257:(e,a,n)=>{n.d(a,{A:()=>u});var t=n(96540),r=n(72188),l=n(46413),i=n(78506),s=t.forwardRef(((e,a)=>{var n=e.accessibilityLabel,r=e.color,s=e.disabled,u=e.onPress,d=e.testID,p=e.title;return t.createElement(l.A,{accessibilityLabel:n,accessibilityRole:"button",disabled:s,focusable:!s,onPress:u,ref:a,style:[o.button,r&&{backgroundColor:r},s&&o.buttonDisabled],testID:d},t.createElement(i.A,{style:[o.text,s&&o.textDisabled]},p))}));s.displayName="Button";var o=r.A.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const u=s}}]);