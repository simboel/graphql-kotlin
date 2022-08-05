"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9772],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},69396:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(87462),a=t(63366),s=(t(67294),t(3905)),i=["components"],o={id:"renaming-fields",title:"Renaming Fields",original_id:"renaming-fields"},l=void 0,c={unversionedId:"schema-generator/customizing-schemas/renaming-fields",id:"version-3.x.x/schema-generator/customizing-schemas/renaming-fields",title:"Renaming Fields",description:"By default, the schema generator will use the simple name of the underlying class for the type names and function/property names for fields.",source:"@site/versioned_docs/version-3.x.x/schema-generator/customizing-schemas/renaming-fields.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/renaming-fields",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/renaming-fields",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/customizing-schemas/renaming-fields.md",tags:[],version:"3.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1659727992,formattedLastUpdatedAt:"8/5/2022",frontMatter:{id:"renaming-fields",title:"Renaming Fields",original_id:"renaming-fields"},sidebar:"version-3.x.x/docs",previous:{title:"Excluding Fields",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/excluding-fields"},next:{title:"Directives",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/directives"}},p={},u=[{value:"Known Issues",id:"known-issues",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"By default, the schema generator will use the simple name of the underlying class for the type names and function/property names for fields.\nYou can change this default behavior by annotating the target class/field with ",(0,s.kt)("inlineCode",{parentName:"p"},"@GraphQLName"),". The following Kotlin ",(0,s.kt)("inlineCode",{parentName:"p"},"Widget")," class\nwill be renamed to ",(0,s.kt)("inlineCode",{parentName:"p"},"MyCustomName")," GraphQL type and its fields will also be renamed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n@GraphQLName("MyCustomName")\ndata class Widget(\n    @GraphQLName("myCustomField")\n    val value: Int?\n)\n\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"\ntype MyCustomName {\n  myCustomField: Int\n}\n\n")),(0,s.kt)("h2",{id:"known-issues"},"Known Issues"),(0,s.kt)("p",null,">"," NOTE: Due to how we deserialize input classes, if you rename a field of an input class or an enum value you must also annotate it with the Jackson annotation @JsonProperty. See ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/493"},"issue 493")," for more info."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'\ndata class MyInputClass(\n    @JsonProperty("renamedField")\n    @GraphQLName("renamedField")\n    val field1: String\n)\n\n// GraphQL enums should use UPPER_CASE naming if possible, but any case is supported\nenum class Selection {\n\n  @JsonProperty("first")\n  @GraphQLName("first")\n  ONE,\n\n  @JsonProperty("second")\n  @GraphQLName("second")\n  TWO\n}\n\nclass QueryClass {\n  fun parseData(arg: MyInputClass) = "You sent ${arg.field1}"\n\n  fun chooseValue(selection: Selection): String = when (selection) {\n    Selection.ONE -> "You chose the first value"\n    Selection.TWO -> "You chose the second value"\n  }\n}\n\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"\ninput MyInputClassInput {\n  # This only works if both @JsonProperty and @GraphQLName are present\n  renamedField: String!\n}\n\nenum Selection {\n  first,\n  second\n}\n\ntype Query {\n  parseData(arg: MyInputClass!): String!\n  chooseValue(selection: Selection!): String!\n}\n\n")))}d.isMDXComponent=!0}}]);