(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{153:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(181)),o={id:"documenting-fields",title:"Documenting Schema"},c={unversionedId:"schema-generator/customizing-schemas/documenting-fields",id:"schema-generator/customizing-schemas/documenting-fields",isDocsHomePage:!1,title:"Documenting Schema",description:"Since Javadocs are not available at runtime for introspection, graphql-kotlin-schema-generator includes an annotation",source:"@site/docs/schema-generator/customizing-schemas/documenting-fields.md",slug:"/schema-generator/customizing-schemas/documenting-fields",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/documenting-fields",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/customizing-schemas/documenting-fields.md",version:"current",lastUpdatedBy:"Tarkan Nielsen",lastUpdatedAt:1618166232,sidebar:"docs",previous:{title:"Generator Configuration",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/generator-config"},next:{title:"Excluding Fields",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/excluding-fields"}},s=[],l={toc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Since Javadocs are not available at runtime for introspection, ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," includes an annotation\nclass ",Object(i.b)("inlineCode",{parentName:"p"},"@GraphQLDescription")," that can be used to add schema descriptions to ",Object(i.b)("em",{parentName:"p"},"any")," GraphQL schema element. The string value can be in the Markdown format."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'\n@GraphQLDescription("A useful widget")\ndata class Widget(\n  @GraphQLDescription("The widget\'s value that can be `null`")\n  val value: Int?\n)\n\nclass WidgetQuery {\n  @GraphQLDescription("Creates new widget for given ID")\n  fun widgetById(@GraphQLDescription("The special ingredient") id: Int): Widget? = Widget(id)\n}\n\n')),Object(i.b)("p",null,"The above query would produce the following GraphQL schema:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},'\nschema {\n  query: Query\n}\n\ntype Query {\n  """Creates new widget for given ID"""\n  widgetById(\n    """The special ingredient"""\n    id: Int!\n  ): Widget\n}\n\n"""A useful widget"""\ntype Widget {\n  """The widget\'s value that can be `null`"""\n  value: Int\n}\n\n')))}u.isMDXComponent=!0},181:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,g=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return t?a.a.createElement(g,c(c({ref:n},l),{},{components:t})):a.a.createElement(g,c({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);