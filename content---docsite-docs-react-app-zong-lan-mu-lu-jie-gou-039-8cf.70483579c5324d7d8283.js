(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{282:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return j}));t(0);var s=t(388);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a={},i=[{value:"原始的 Redux 项目目录结构",id:"原始的-redux-项目目录结构",children:[]},{value:"Rematch 封装的 Redux 项目结构",id:"rematch-封装的-redux-项目结构",children:[]}],c={rightToc:i},d="wrapper";function j(e){var n=e.components,t=o(e,["components"]);return Object(s.b)(d,r({},c,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"目录结构"},"目录结构"),Object(s.b)("h2",{id:"原始的-redux-项目目录结构"},"原始的 Redux 项目目录结构"),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-text"}),"Project/App\n├── index.js                                      # 入口文件\n├── router.js                                     # App路由\n├── store.js                                      # 生成Store\n├── <manifest.json>                               # App的相关配置\n├── components                                    # 展示型组件\n│   └── Header                                    # 以<Header>组件为例\n│       ├── index.js                            \n│       ├── index.less                            # 样式文件\n│       └── __tests__                             # 测试\n│           ├── __snapshots__                     # 快照测试文件夹，自动生成\n│           └── index.test.js                     # 展示型组件测试 \n├── ui                                            # 自定义的基础ui组件\n│   └── Button                                    # 以<Button>组件为例\n│       ├── index.js                       \n│       ├── index.less                     \n│       └── __tests__                              \n│           ├── __snapshots__                      \n│           └── index.test.js                \n├── states                                        # 状态管理相关，主要是Redux\n│   ├── containers                                # 容器型组件\n│   │   ├── Header.js\n│   │   ├── index.js                              # 将所有container聚合\n│   │   └── __tests__                             \n│   │       └── Header.test.js   \n│   ├── middlewares                               # 中间件\n│   │   ├── middlewareOne.js              \n│   │   ├── middlewareTwo.js              \n│   │   ├── index.js                              # 将所有中间件聚合\n│   │   └── __tests__                              \n│   │       ├── middlewareOne.test.js     \n│   │       └── middlewareTwo.test.js    \n│   ├── selectors                                                           \n│   │   ├── selectorOne.js              \n│   │   ├── selectorTwo.js              \n│   │   ├── index.js                              # 将所有异步selector聚合\n│   │   └── __tests__                              \n│   │       ├── selectorOne.test.js     \n│   │       └── selectorTwo.test.js      \n│   ├── actions                                  \n│   │   ├── sync                                  # 同步action\n│   │   │   ├── actionOne.js              \n│   │   │   ├── actionTwo.js              \n│   │   │   ├── index.js                          # 将所有同步action聚合\n│   │   │   └── __tests__                          \n│   │   │       ├── actionOne.test.js     \n│   │   │       └── actionTwo.test.js      \n│   │   └── async                                 # 异步action\n│   │       ├── actionOne.js               \n│   │       ├── actionTwo.js               \n│   │       ├── index.js                          # 将所有异步action聚合\n│   │       └── __tests__                          \n│   │           ├── actionOne.test.js      \n│   │           └── actionTwo.test.js       \n│   ├── reducers                                    \n│   │   ├── reducerOne.js              \n│   │   ├── reducerTwo.js              \n│   │   ├── index.js                              # 将所有异步reducer聚合\n│   │   └── __tests__                              \n│   │       ├── reducerOne.test.js     \n│   │       └── reducerTwo.test.js      \n│   ├── types                             \n│   │   ├── typeOne.js              \n│   │   ├── typeTwo.js              \n│   │   ├── index.js                              # 将所有异步type聚合\n│   │   └── __tests__                              \n│   │       ├── typeOne.test.js     \n│   │       └── typeTwo.test.js  \n├── apis                                           \n│   ├── apiOne.js              \n│   ├── apiTwo.js              \n│   ├── index.js                                  # 将所有api聚合\n│   └── __tests__                              \n│       ├── apiOne.test.js     \n│       └── apiTwo.test.js     \n└── utils                                         # 一些公共的工具类文件\n    ├── utilOne.js              \n    ├── utilTwo.js              \n    ├── index.js                                  # 将所有util聚合\n    └── __tests__                              \n        ├── utilOne.test.js     \n        └── utilTwo.test.js        \n")),Object(s.b)("h2",{id:"rematch-封装的-redux-项目结构"},Object(s.b)("a",r({parentName:"h2"},{href:"https://github.com/rematch/rematch"}),"Rematch")," 封装的 Redux 项目结构"),Object(s.b)("p",null,"在实际开发中，使用原始 Redux 开发时，会发现每加一个新功能就需要定义一堆 ",Object(s.b)("inlineCode",{parentName:"p"},"action")," , ",Object(s.b)("inlineCode",{parentName:"p"},"type")," , ",Object(s.b)("inlineCode",{parentName:"p"},"reducer")," , 非常繁琐，哪怕是一个非常小的功能。这时候就可以使用 Rematch 去改造 Redux 项目。由于 Redux 和 Rematch 的 model 定义可以共存，在定义项目的结构的时候可以调整为如下方式："),Object(s.b)("pre",null,Object(s.b)("code",r({parentName:"pre"},{className:"language-text"}),"Project/App\n├── index.js                                      # 入口文件\n├── router.js                                     # App路由\n├── store.js                                      # 生成Store\n├── <manifest.json>                               # App的相关配置\n├── components                                    # 展示型组件\n│   └── Header                                    # 以<Header>组件为例\n│       ├── index.js                            \n│       ├── index.less                            # 样式文件\n│       └── __tests__                             # 测试\n│           ├── __snapshots__                     # 快照测试文件夹，自动生成\n│           └── index.test.js                     # 展示型组件测试 \n├── ui                                            # 自定义的基础ui组件\n│   └── Button                                    # 以<Button>组件为例\n│       ├── index.js                       \n│       ├── index.less                     \n│       └── __tests__                              \n│           ├── __snapshots__                      \n│           └── index.test.js                \n├── states                                        # 状态管理相关\n│   ├── containers                                # 容器型组件\n│   │   ├── Header.js\n│   │   ├── index.js                              # 将所有container聚合\n│   │   └── __tests__                             \n│   │       └── Header.test.js   \n│   ├── middlewares                               # 中间件\n│   │   ├── middlewareOne.js              \n│   │   ├── middlewareTwo.js              \n│   │   ├── index.js                              # 将所有中间件聚合\n│   │   └── __tests__                              \n│   │       ├── middlewareOne.test.js     \n│   │       └── middlewareTwo.test.js      \n│   ├── selectors                                                           \n│   │   ├── selectorOne.js              \n│   │   ├── selectorTwo.js              \n│   │   ├── index.js                              # 将所有异步selector聚合\n│   │   └── __tests__                              \n│   │       ├── selectorOne.test.js     \n│   │       └── selectorTwo.test.js      \n│   ├── models                                    # model层，替代原始Redux\n│   │   ├── modelOne.js              \n│   │   ├── modelTwo.js              \n│   │   ├── index.js                              # 将所有model聚合\n│   │   └── __tests__                              \n│   │       ├── modelOne.test.js     \n│   │       └── modelTwo.test.js  \n├── apis                                           \n│   ├── apiOne.js              \n│   ├── apiTwo.js              \n│   ├── index.js                                  # 将所有api聚合\n│   └── __tests__                              \n│       ├── apiOne.test.js     \n│       └── apiTwo.test.js     \n└── utils                                         # 一些公共的工具类文件\n    ├── utilOne.js              \n    ├── utilTwo.js              \n    ├── index.js                                  # 将所有util聚合\n    └── __tests__                              \n        ├── utilOne.test.js     \n        └── utilTwo.test.js        \n")),Object(s.b)("p",null,"Rematch 的使用方式，以及如何和 Redux 项目进行兼容，详细见其文档教程：",Object(s.b)("a",r({parentName:"p"},{href:"https://rematch.gitbook.io/handbook/"}),"https://rematch.gitbook.io/handbook/")))}j.isMDXComponent=!0},388:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return l}));var s=t(0),r=t.n(s),o=r.a.createContext({}),a=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=a(e.components);return r.a.createElement(o.Provider,{value:n},e.children)};var c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},j=Object(s.forwardRef)((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,c=function(e,n){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&-1===n.indexOf(s)&&(t[s]=e[s]);return t}(e,["components","mdxType","originalType","parentName"]),j=a(t),l=s,p=j[i+"."+l]||j[l]||d[l]||o;return t?r.a.createElement(p,Object.assign({},{ref:n},c,{components:t})):r.a.createElement(p,Object.assign({},{ref:n},c))}));function l(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=j;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[c]="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"}}]);