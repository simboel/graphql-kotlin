(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{161:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),o=(t(0),t(181)),i={id:"apollo-federation",title:"Apollo Federation",original_id:"apollo-federation"},l={unversionedId:"federated/apollo-federation",id:"version-3.x.x/federated/apollo-federation",isDocsHomePage:!1,title:"Apollo Federation",description:"In many cases, exposing single GraphQL API that exposes unified view of all the available data provides tremendous value",source:"@site/versioned_docs/version-3.x.x/federated/apollo-federation.md",slug:"/federated/apollo-federation",permalink:"/graphql-kotlin/docs/3.x.x/federated/apollo-federation",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/federated/apollo-federation.md",version:"3.x.x",lastUpdatedBy:"Tarkan Nielsen",lastUpdatedAt:1618166232,sidebar:"version-3.x.x/docs",previous:{title:"Introspection",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/introspection"},next:{title:"Federated Schemas",permalink:"/graphql-kotlin/docs/3.x.x/federated/federated-schemas"}},c=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[{value:"<code>toFederatedSchema</code>",id:"tofederatedschema",children:[]}]},{value:"Example",id:"example",children:[]}],s={toc:c};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In many cases, exposing single GraphQL API that exposes unified view of all the available data provides tremendous value\nto their clients. As the underlying graph scales, managing single monolithic GraphQL server might become less and less\nfeasible making it much harder to manage and leading to unnecessary bottlenecks. Migrating towards federated model with\nan API gateway and a number of smaller GraphQL services behind it alleviates some of those problems and allows teams to\nscale their graphs more easily."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/"},"Apollo Federation")," is an architecture for\ncomposing multiple GraphQL services into a single graph. Federated schemas rely on a number of custom directives to\ninstrument the behavior of the underlying graph and convey the relationships between different schema types. Each individual\nGraphQL server generates a valid GraphQL schema and can be run independently. This is in contrast with traditional schema\nstitching approach where relationships between individual services, i.e. linking configuration, is configured at the GraphQL\nGateway level."),Object(o.b)("h2",{id:"install"},"Install"),Object(o.b)("p",null,"Using a JVM dependency manager, link ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," to your project."),Object(o.b)("p",null,"With Maven:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n  <groupId>com.expediagroup</groupId>\n  <artifactId>graphql-kotlin-federation</artifactId>\n  <version>${latestVersion}</version>\n</dependency>\n\n")),Object(o.b)("p",null,"With Gradle:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'\nimplementation("com.expediagroup", "graphql-kotlin-federation", latestVersion)\n\n')),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," build on top of ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and adds a few extra methods and class to use to generate federation\ncompliant schemas."),Object(o.b)("h3",{id:"tofederatedschema"},Object(o.b)("inlineCode",{parentName:"h3"},"toFederatedSchema")),Object(o.b)("p",null,"Just like the basic ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/schema-generator-getting-started"},"toSchema"),", ",Object(o.b)("inlineCode",{parentName:"p"},"toFederatedSchema")," accepts four parameters: ",Object(o.b)("inlineCode",{parentName:"p"},"config"),", ",Object(o.b)("inlineCode",{parentName:"p"},"queries"),", ",Object(o.b)("inlineCode",{parentName:"p"},"mutations")," and ",Object(o.b)("inlineCode",{parentName:"p"},"subscriptions"),".\nThe difference is that the ",Object(o.b)("inlineCode",{parentName:"p"},"config")," class is of type ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/FederatedSchemaGeneratorConfig.kt"},"FederatedSchemaGeneratorConfig"),".\nThis class extends the ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/generator-config"},"base configuration class")," and adds some default logic. You can override the logic if needed, but do so with caution as you may no longer generate a spec compliant schema."),Object(o.b)("p",null,"You can see the definition for ",Object(o.b)("inlineCode",{parentName:"p"},"toFederatedSchema")," ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/federation/toFederatedSchema.kt"},"in the\nsource")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'\n@KeyDirective(fields = FieldSet("id"))\ndata class User(\n  val id: ID,\n  val name: String\n)\n\nclass Query {\n  fun getUsers(): List<User> = getUsersFromDB()\n}\n\nval config = FederatedSchemaGeneratorConfig(\n  supportedPackages = "com.example"\n)\n\ntoFederatedSchema(\n  config = config,\n  queries = listOf(TopLevelObject(Query()))\n)\n\n')),Object(o.b)("p",null,"will generate"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},'\ntype Query {\n getUsers: [User!]!\n}\n\ntype User @key(fields : "id") {\n id: ID!\n name: String!\n}\n\n')))}d.isMDXComponent=!0},181:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),d=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return t?r.a.createElement(b,l(l({ref:n},s),{},{components:t})):r.a.createElement(b,l({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);