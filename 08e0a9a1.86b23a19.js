(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{181:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,b=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.a.createElement(b,o(o({ref:t},s),{},{components:n})):r.a.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(181)),l={id:"arguments",title:"Arguments",original_id:"arguments"},o={unversionedId:"schema-generator/writing-schemas/arguments",id:"version-3.x.x/schema-generator/writing-schemas/arguments",isDocsHomePage:!1,title:"Arguments",description:"Method arguments are automatically exposed as part of the arguments to the corresponding GraphQL fields.",source:"@site/versioned_docs/version-3.x.x/schema-generator/writing-schemas/arguments.md",slug:"/schema-generator/writing-schemas/arguments",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/arguments",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/writing-schemas/arguments.md",version:"3.x.x",lastUpdatedBy:"Tarkan Nielsen",lastUpdatedAt:1618166232,sidebar:"version-3.x.x/docs",previous:{title:"Nullability",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/nullability"},next:{title:"Scalars",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/scalars"}},u=[{value:"Input Types",id:"input-types",children:[]},{value:"Optional input fields",id:"optional-input-fields",children:[]},{value:"Default values",id:"default-values",children:[]}],s={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Method arguments are automatically exposed as part of the arguments to the corresponding GraphQL fields."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"\nclass SimpleQuery{\n  fun doSomething(value: Int): Boolean = true\n}\n\n")),Object(i.b)("p",null,"The above Kotlin code will generate following GraphQL schema:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n  doSomething(value: Int!): Boolean!\n}\n\n")),Object(i.b)("p",null,"This behavior is true for all arguments except for the special classes for the ",Object(i.b)("a",{parentName:"p",href:"../execution/contextual-data"},"GraphQLContext")," and the ",Object(i.b)("a",{parentName:"p",href:"../execution/data-fetching-environment"},"DataFetchingEnvironment")),Object(i.b)("h2",{id:"input-types"},"Input Types"),Object(i.b)("p",null,"Query and mutation function arguments are automatically converted to corresponding GraphQL input fields. GraphQL makes a\ndistinction between input and output types and requires unique names for all the types. Since we can use the same\nobjects for input and output in our Kotlin functions, ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," will automatically append\nan ",Object(i.b)("inlineCode",{parentName:"p"},"Input")," suffix to the query input objects."),Object(i.b)("p",null,"For example, the following code:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"\nclass WidgetMutation {\n    fun processWidget(widget: Widget): Widget {\n        if (null == widget.value) {\n            widget.value = 42\n        }\n        return widget\n    }\n}\n\ndata class Widget(var value: Int? = nul) {\n    fun multiplyValueBy(multiplier: Int) = value?.times(multiplier)\n}\n\n")),Object(i.b)("p",null,"Will generate the following schema:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},"\ntype Mutation {\n  processWidget(widget: WidgetInput!): Widget!\n}\n\ntype Widget {\n  value: Int\n  multiplyValueBy(multiplier: Int!): Int\n}\n\ninput WidgetInput {\n  value: Int\n}\n\n")),Object(i.b)("p",null,"Please note that only fields are exposed in the input objects. Functions will only be available on the GraphQL output\ntypes."),Object(i.b)("p",null,"If you know a type will only be used for input types you can call your class something like ",Object(i.b)("inlineCode",{parentName:"p"},"CustomTypeInput"),". The library will not\nappend ",Object(i.b)("inlineCode",{parentName:"p"},"Input")," if the class name already ends with ",Object(i.b)("inlineCode",{parentName:"p"},"Input")," but that means you can not use this type as output because\nthe schema would have two types with the same name and that would be invalid."),Object(i.b)("h2",{id:"optional-input-fields"},"Optional input fields"),Object(i.b)("p",null,"Kotlin requires variables/values to be initialized upon their declaration either from the user input OR by providing\ndefaults (even if they are marked as nullable). Therefore in order for a GraphQL input field to be optional it needs to be\nnullable and also specify a default Kotlin value."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'\nfun doSomethingWithOptionalInput(requiredValue: Int, optionalValue: Int?) = "required value=$requiredValue, optional value=$optionalValue"\n\n')),Object(i.b)("p",null,"NOTE: Non nullable input fields will always require users to specify the value regardless of whether a default Kotlin value\nis provided or not."),Object(i.b)("p",null,"NOTE: Even though you could specify a default values for arguments in Kotlin ",Object(i.b)("inlineCode",{parentName:"p"},"optionalValue: Int? = null"),", this will not\nbe used. If query does not explicitly specify root argument values, our function data fetcher will default to use null as\nthe value. This is because Kotlin properties always have to be initialized, and we cannot determine whether underlying\nargument has default value or not. As a result, Kotlin default value will never be used. For example, with argument\n",Object(i.b)("inlineCode",{parentName:"p"},"optionalList: List<Int>? = emptyList()"),", the value will be null if not passed a value by the client."),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"../execution/optional-undefined-arguments"},"optional undefined arguments")," for details how to determine whether argument\nwas specified or not."),Object(i.b)("h2",{id:"default-values"},"Default values"),Object(i.b)("p",null,"Default argument values are currently not supported. See issue ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/53"},"#53"),"\nfor more details."))}p.isMDXComponent=!0}}]);