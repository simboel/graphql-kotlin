"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"custom-type-reference",title:"Custom Types"},l=void 0,c={unversionedId:"schema-generator/customizing-schemas/custom-type-reference",id:"schema-generator/customizing-schemas/custom-type-reference",title:"Custom Types",description:"Code-first has many advantages and removes duplication. However, one downside is that the types defined have to match",source:"@site/docs/schema-generator/customizing-schemas/custom-type-reference.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/custom-type-reference",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/custom-type-reference",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/customizing-schemas/custom-type-reference.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1655159016,formattedLastUpdatedAt:"6/13/2022",frontMatter:{id:"custom-type-reference",title:"Custom Types"},sidebar:"docs",previous:{title:"Deprecating Schema",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/deprecating-schema"},next:{title:"Restricting Input and Output Types",permalink:"/graphql-kotlin/docs/schema-generator/customizing-schemas/restricting-input-output"}},p={},u=[{value:"<code>@GraphQLType</code>",id:"graphqltype",level:2},{value:"Custom Type Configuration",id:"custom-type-configuration",level:3},{value:"Adding Missing Kotlin Types",id:"adding-missing-kotlin-types",level:2},{value:"Final Result",id:"final-result",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Code-first has many advantages and removes duplication. However, one downside is that the types defined have to match\ncompiled Kotlin code. In some cases, it is possible to define a schema that is valid in SDL but it would be impossible to\nreturn a Kotlin type that matches exactly that type. In these cases, you can pass in custom types in the schema\ngenerator config and annotate the schema with the type info."),(0,r.kt)("p",null,"A common example is when you need to return a type or union defined in library JAR, but you can not change the code.\nFor example, let's say there is a type in a library. You can not change the fields, add annotations, or have it implement interfaces."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"// Defined in external library\nclass Foo(val number: Int)\n")),(0,r.kt)("p",null,"If you want to have this type be used in a new interface or union defined in your API, it is not possible to do in Kotlin code\nsince you can not modify the compiled code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"// New interface\ninterface TypeWithNumber { val number: Int }\n// New union\ninterface TypeWithAnyField\n\n// Error: We are not able to return Foo for any of these functions\nfun customInterface(): TypeWithNumber = Foo(1)\nfun customUnion(): TypeWithAnyField = Foo(1)\n")),(0,r.kt)("h2",{id:"graphqltype"},(0,r.kt)("inlineCode",{parentName:"h2"},"@GraphQLType")),(0,r.kt)("p",null,"You can use this annotation to change the return type of a field. The annotation accepts the type name, which will be\nadded as a type reference in the schema. This means that you will have to define the type and its schema with the same name in the configuration."),(0,r.kt)("p",null,"Doing this could still be serialization issues, so you should make sure that the data you return from the field matches the defined schema of the type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Defined in external library or can not be modified\nclass Foo(val number: Int)\nclass Bar(val value: String)\n\n// Might return Foo or Bar\n@GraphQLType("FooOrBar")\nfun customUnion(): Any = if (Random.nextBoolean()) Foo(1) else Bar("hello")\n\n// Will throw runtime error when serialized data does not match the schema\n@GraphQLType("FooOrBar")\nfun invalidType(): String = "hello"\n')),(0,r.kt)("h3",{id:"custom-type-configuration"},"Custom Type Configuration"),(0,r.kt)("p",null,"In our above example there is no Kotlin code for the type ",(0,r.kt)("inlineCode",{parentName:"p"},"FooOrBar"),". It only exists by reference right now.\nTo add the type into the schema, specify the additional types in the ",(0,r.kt)("a",{parentName:"p",href:"./generator-config"},"SchemaGeneratorConfiguration"),".\nThis is using the ",(0,r.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/schema#union"},"grapqhl-java schema object builders"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val fooCustom = GraphQLUnionType.newUnionType()\n    .name("FooOrBar")\n    .possibleType(GraphQLTypeReference("Foo"))\n    .possibleType(GraphQLTypeReference("Bar"))\n    .typeResolver { /* Logic for how to resolve types */ }\n    .build()\nval config = SchemaGeneratorConfig(supportedPackages, additionalTypes = setOf(fooCustom))\n')),(0,r.kt)("h2",{id:"adding-missing-kotlin-types"},"Adding Missing Kotlin Types"),(0,r.kt)("p",null,"In our above example, since the return type of the Kotlin code did not reference the Kotlin types ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Bar"),",\nreflection will not pick those up by default. They will also need to be added as additional Kotlin types (",(0,r.kt)("inlineCode",{parentName:"p"},"KType"),") when generating the schema."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val generator = SchemaGenerator(config)\nval schema = generator.use {\n    it.generateSchema(\n        queries = listOf(TopLevelObject(Query())),\n        additionalTypes = setOf(\n            Foo::class.createType(),\n            Bar::class.createType(),\n        )\n    )\n}\n")),(0,r.kt)("h2",{id:"final-result"},"Final Result"),(0,r.kt)("p",null,"With all the above code, the final resulting schema should like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n    customUnion: FooOrBar!\n}\n\nunion FooOrBar = Foo | Bar\ntype Foo { number: Int! }\ntype Bar { value: String! }\n")))}d.isMDXComponent=!0}}]);