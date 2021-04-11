(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{132:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),i=(t(0),t(181)),o=t(186),l=t(187),c={id:"client-features",title:"Client Features"},s={unversionedId:"client/client-features",id:"client/client-features",isDocsHomePage:!1,title:"Client Features",description:"Jackson and Kotlinx Serialization Support",source:"@site/docs/client/client-features.mdx",slug:"/client/client-features",permalink:"/graphql-kotlin/docs/client/client-features",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/client/client-features.mdx",version:"current",lastUpdatedBy:"Tarkan Nielsen",lastUpdatedAt:1618166232,sidebar:"docs",previous:{title:"Client Overview",permalink:"/graphql-kotlin/docs/client/client-overview"},next:{title:"Client Customization",permalink:"/graphql-kotlin/docs/client/client-customization"}},u=[{value:"Jackson and Kotlinx Serialization Support",id:"jackson-and-kotlinx-serialization-support",children:[]},{value:"Polymorphic Types Support",id:"polymorphic-types-support",children:[]},{value:"Default Enum Values",id:"default-enum-values",children:[]},{value:"Auto Generated Documentation",id:"auto-generated-documentation",children:[]},{value:"Native Support for Coroutines",id:"native-support-for-coroutines",children:[]},{value:"Batch Operation Support",id:"batch-operation-support",children:[]}],p={toc:u};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"jackson-and-kotlinx-serialization-support"},"Jackson and Kotlinx Serialization Support"),Object(i.b)("p",null,"GraphQL Kotlin supports generation of client data models that are compatible with both ",Object(i.b)("inlineCode",{parentName:"p"},"Jackson")," (default) and ",Object(i.b)("inlineCode",{parentName:"p"},"kotlinx.serialization"),"\nformats. Build plugins and ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-client")," default to use ",Object(i.b)("inlineCode",{parentName:"p"},"Jackson")," whereas ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-ktor-client"),"\ndefaults to ",Object(i.b)("inlineCode",{parentName:"p"},"kotlinx.serialization"),"."),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/client/client-serialization"},"client serialization documentation")," for additional details."),Object(i.b)("h2",{id:"polymorphic-types-support"},"Polymorphic Types Support"),Object(i.b)("p",null,"GraphQL supports polymorphic types through unions and interfaces which can be represented in Kotlin as marker and\nregular interfaces. In order to ensure generated objects are not empty, GraphQL queries referencing polymorphic types\nhave to ",Object(i.b)("strong",{parentName:"p"},"explicitly specify all implementations"),". Polymorphic queries also have to explicitly request ",Object(i.b)("inlineCode",{parentName:"p"},"__typename"),"\nfield so it can be used to Jackson correctly distinguish between different implementations."),Object(i.b)("p",null,"Given example schema"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  interfaceQuery: BasicInterface!\n}\n\ninterface BasicInterface {\n  id: Int!\n  name: String!\n}\n\ntype FirstInterfaceImplementation implements BasicInterface {\n  id: Int!\n  intValue: Int!\n  name: String!\n}\n\ntype SecondInterfaceImplementation implements BasicInterface {\n  floatValue: Float!\n  id: Int!\n  name: String!\n}\n")),Object(i.b)("p",null,"We can query interface field as"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"query PolymorphicQuery {\n  interfaceQuery {\n    __typename\n    id\n    name\n    ... on FirstInterfaceImplementation {\n      intValue\n    }\n    ... on SecondInterfaceImplementation {\n      floatValue\n    }\n  }\n}\n")),Object(i.b)("p",null,"Which will generate following data models"),Object(i.b)(o.a,{defaultValue:"jackson",values:[{label:"Jackson",value:"jackson"},{label:"kotlinx.serialization",value:"kotlinx"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"jackson",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'@JsonTypeInfo(\n  use = JsonTypeInfo.Id.NAME,\n  include = JsonTypeInfo.As.PROPERTY,\n  property = "__typename"\n)\n@JsonSubTypes(value = [com.fasterxml.jackson.annotation.JsonSubTypes.Type(value =\n    FirstInterfaceImplementation::class,\n    name="FirstInterfaceImplementation"),com.fasterxml.jackson.annotation.JsonSubTypes.Type(value\n    = SecondInterfaceImplementation::class, name="SecondInterfaceImplementation")])\ninterface BasicInterface {\n  abstract val id: Int\n  abstract val name: String\n}\n\ndata class FirstInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val intValue: Int\n) : BasicInterface\n\ndata class SecondInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val floatValue: Float\n) : BasicInterface\n'))),Object(i.b)(l.a,{value:"kotlinx",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'@Serializable\nsealed class BasicInterface {\n  abstract val id: Int\n  abstract val name: String\n}\n\n@Serializable\n@SerialName(value = "FirstInterfaceImplementation")\ndata class FirstInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val intValue: Int\n) : BasicInterface()\n\n@Serializable\n@SerialName(value = "SecondInterfaceImplementation")\ndata class SecondInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val floatValue: Float\n) : BasicInterface()\n')))),Object(i.b)("h2",{id:"default-enum-values"},"Default Enum Values"),Object(i.b)("p",null,"Enums represent predefined set of values. Adding additional enum values could be a potentially breaking change as your\nclients may not be able to process it. GraphQL Kotlin Client automatically adds default ",Object(i.b)("inlineCode",{parentName:"p"},"__UNKNOWN_VALUE")," to all generated\nenums as a catch all safeguard for handling new enum values."),Object(i.b)("h2",{id:"auto-generated-documentation"},"Auto Generated Documentation"),Object(i.b)("p",null,"GraphQL Kotlin build plugins automatically pull in GraphQL descriptions of the queried fields from the target schema and\nadd it as KDoc to corresponding data models."),Object(i.b)("p",null,"Given simple GraphQL object definition"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},'"Some basic description"\ntype BasicObject {\n  "Unique identifier"\n  id: Int!\n  "Object name"\n  name: String!\n}\n')),Object(i.b)("p",null,"Will result in a corresponding auto generated data class"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"/**\n * Some basic description\n */\ndata class BasicObject(\n  /**\n   * Unique identifier\n   */\n  val id: Int,\n  /**\n   * Object name\n   */\n  val name: String\n)\n")),Object(i.b)("h2",{id:"native-support-for-coroutines"},"Native Support for Coroutines"),Object(i.b)("p",null,"GraphQL Kotlin Client is a generic interface that exposes ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," methods that will suspend your GraphQL operation until\nit gets a response back without blocking the underlying thread. Reference Ktor and Spring WebClient based implementations\noffer fully asynchronous communication through Kotlin coroutines. In order to fetch data asynchronously you should wrap\nyour client execution in ",Object(i.b)("inlineCode",{parentName:"p"},"launch")," or ",Object(i.b)("inlineCode",{parentName:"p"},"async")," coroutine builder and explicitly ",Object(i.b)("inlineCode",{parentName:"p"},"await")," for their results."),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/coroutines-overview.html"},"Kotlin coroutines documentation")," for additional details."),Object(i.b)("h2",{id:"batch-operation-support"},"Batch Operation Support"),Object(i.b)("p",null,"GraphQL Kotlin Clients provide out of the box support for batching multiple client operations into a single GraphQL request.\nBatch requests are sent as an array of individual GraphQL requests and clients expect the server to respond with a corresponding\narray of GraphQL responses. Each response is then deserialized to a corresponding result type."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'\nval client = GraphQLKtorClient(url = URL("http://localhost:8080/graphql"))\nval firstQuery = FirstQuery(variables = FirstQuery.Variables(foo = "bar"))\nval secondQuery = SecondQuery(variables = SecondQuery.Variables(foo = "baz"))\n\nval results: List<GraphQLResponse<*>> = client.execute(listOf(firstQuery, secondQuery))\n\n')))}d.isMDXComponent=!0},181:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=a,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return t?r.a.createElement(m,l(l({ref:n},s),{},{components:t})):r.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},182:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},183:function(e,n,t){"use strict";var a=t(0),r=t(184);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},184:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},186:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(183),o=t(182),l=t(53),c=t.n(l),s=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,l=e.defaultValue,p=e.values,d=e.groupId,b=e.className,m=Object(i.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,v=Object(a.useState)(l),y=v[0],g=v[1],O=a.Children.toArray(e.children);if(null!=d){var j=f[d];null!=j&&j!==y&&p.some((function(e){return e.value===j}))&&g(j)}var I=function(e){g(e),null!=d&&h(d,e)},k=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},b)},p.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===n,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===n}),key:n,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(k,e.target,e)},onFocus:function(){return I(n)},onClick:function(){I(n)}},t)}))),n?Object(a.cloneElement)(O.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},187:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}}}]);