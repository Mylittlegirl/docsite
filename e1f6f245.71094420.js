(window.webpackJsonp=window.webpackJsonp||[]).push([[411],{394:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));n(0);var a=n(546),r=n(547),c=n(550);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const l={id:"middleware",title:"Middleware",sidebar_label:"Middleware"},d=[{value:"\u601d\u60f3\u7cbe\u534e\u4e09\uff1a\u4e2d\u95f4\u4ef6\u601d\u60f3\u4e0e\u6d0b\u8471\u6a21\u578b",id:"\u601d\u60f3\u7cbe\u534e\u4e09\uff1a\u4e2d\u95f4\u4ef6\u601d\u60f3\u4e0e\u6d0b\u8471\u6a21\u578b",children:[{value:"\u5728 dispatch \u8fc7\u7a0b\u4e2d\u7a7f\u8fc7 middleware",id:"\u5728-dispatch-\u8fc7\u7a0b\u4e2d\u7a7f\u8fc7-middleware",children:[]},{value:"\u6539\u5584 middleware \u7684\u987a\u5e8f",id:"\u6539\u5584-middleware-\u7684\u987a\u5e8f",children:[]}]},{value:"\u6d0b\u8471\u6a21\u578b\u4e2d\u91cd\u8981\u53d8\u91cf\u7684\u503c",id:"\u6d0b\u8471\u6a21\u578b\u4e2d\u91cd\u8981\u53d8\u91cf\u7684\u503c",children:[{value:"store.getState",id:"storegetstate",children:[]},{value:"store.dispatch",id:"storedispatch",children:[]},{value:"next",id:"next",children:[]}]},{value:"applyMiddleware",id:"applymiddleware",children:[{value:"\u5b9e\u73b0 applyMiddleware",id:"\u5b9e\u73b0-applymiddleware",children:[]},{value:"\u5b98\u65b9 applyMiddleware",id:"\u5b98\u65b9-applymiddleware",children:[]}]}],o={rightToc:d},s="wrapper";function p({components:e,...t}){return Object(a.b)(s,i({},o,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u601d\u60f3\u7cbe\u534e\u4e09\uff1a\u4e2d\u95f4\u4ef6\u601d\u60f3\u4e0e\u6d0b\u8471\u6a21\u578b"},"\u601d\u60f3\u7cbe\u534e\u4e09\uff1a\u4e2d\u95f4\u4ef6\u601d\u60f3\u4e0e\u6d0b\u8471\u6a21\u578b"),Object(a.b)("h3",{id:"\u5728-dispatch-\u8fc7\u7a0b\u4e2d\u7a7f\u8fc7-middleware"},"\u5728 dispatch \u8fc7\u7a0b\u4e2d\u7a7f\u8fc7 middleware"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u539f\u751f dispatch -> \u6d0b\u8471\u7684\u4e2d\u5fc3"),Object(a.b)("li",{parentName:"ul"},"middleware -> \u6d0b\u8471\u7684\u4e00\u5c42\u4e00\u5c42\u76ae"),Object(a.b)("li",{parentName:"ul"},"store.dispatch -> \u7ecf\u8fc7\u6d0b\u8471\u5305\u88f9\u540e\u7684 dispatch")),Object(a.b)(c.a,{width:"400",legend:"\u56fe\uff1amiddleware \u6d0b\u8471\u6a21\u578b",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/middleware.png",mdxType:"Img"}),Object(a.b)("p",null,"\u6211\u4eec\u9700\u8981\u5bf9 dispatch \u505a\u4e00\u4e2a\u589e\u5f3a\uff0c\u8ba9\u5176\u6bcf\u8c03\u7528\u4e00\u6b21\u90fd\u7a7f\u8fc7\u6240\u6709\u7684 middleware\uff0c\u5047\u8bbe\u5c06\u8fd9\u4e2a\u589e\u5f3a\u7684\u51fd\u6570\u5b9a\u4e49\u4e3a:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),"enhanceDispatchByMiddleware(store, [middleware1, middleware2])\n")),Object(a.b)("p",null,"\u5728\u6211\u4eec\u4e4b\u524d\u7684\u4ee3\u7801 ",Object(a.b)("inlineCode",{parentName:"p"},"demo.js")," \u7684\u57fa\u7840\u4e0a\uff0c\u521b\u5efa\u4e862\u4e2a\u4e2d\u95f4\u4ef6\uff0c\u4e00\u4e2a\u7528\u6765\u8bb0\u5f55\u65e5\u5fd7\uff0c\u4e00\u4e2a\u7528\u6765\u6355\u83b7\u9519\u8bef\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),"const middleware1 = store => next => action => {\n  console.log('m1 left part')\n  next(action)\n  console.log('m1 right part')\n}\nconst middleware2 = store => next => action => {\n  console.log('m2 left part')\n  next(action)\n  console.log('m2 right part')\n}\nenhanceDispatchByMiddleware(store, [middleware1, middleware2])\n")),Object(a.b)("p",null,"\u6211\u4eec\u6ce8\u610f\u5230\u4e2d\u95f4\u4ef6\u662f\u4e00\u4e2a\u67ef\u91cc\u5316\u7684\u51fd\u6570\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),"const middleware1 = store => next => action => {}\n")),Object(a.b)("p",null,"\u5176\u5b9e\u6bcf\u4e2a\u4e2d\u95f4\u4ef6\u8c03\u7528\u540e\uff0c\u672c\u8d28\u76ee\u7684\u662f\u589e\u5f3a ",Object(a.b)("inlineCode",{parentName:"p"},"store.dispatch"),", \u800c ",Object(a.b)("inlineCode",{parentName:"p"},"next")," \u662f\u6307\u4e0a\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u7a7f\u8d8a\u8fc7\u540e\u7684",Object(a.b)("inlineCode",{parentName:"p"},"store.dispatch"),", \u53ef\u4ee5\u7b80\u5355\u8fd9\u6837\u7406\u89e3\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"next"),": previous enhanced dispatch"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"store.dispatch"),": current enhanced dispatch")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-diff"}),"+ function enhanceDispatchByMiddleware (store, middlewares) {\n+   middlewares.forEach(middleware => {\n+     let next = store.dispatch\n+     store.dispatch = middleware(store)(next) // \u4f20\u5165 store \u662f\u56e0\u4e3a\u4e00\u4e9b\u4e2d\u95f4\u4ef6\u9700\u8981 getState\n+   })\n+ }\nexport {\n  createStore,\n+ enhanceDispatchByMiddleware\n}\n")),Object(a.b)("p",null,"\u4ee5\u4e0a\u662f redux \u4e2d\u4e2d\u95f4\u4ef6\u7684\u57fa\u672c\u5b9e\u73b0\u539f\u7406\uff0cmiddleware \u5728\u91cc\u9762\u5176\u5b9e\u662f\u4e00\u4e2a\u51fd\u6570\u8c03\u7528\uff0c\u5177\u4f53\u7684\u5b9a\u4e49\u5176\u5b9e\u662f\u5199\u5728\u5916\u90e8\u7684\u4e1a\u52a1\u4ee3\u7801\u4e2d\uff0c\u6709\u70b9\u7c7b\u4f3c ",Object(a.b)("inlineCode",{parentName:"p"},"reduce")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"reducer")," \u7684\u5173\u7cfb\uff0c\u8fd9\u79cd\u601d\u60f3\u5728 JS \u4e2d\u4e5f\u4f1a\u7528\u5230\u3002\u6700\u7ec8\u7684\u8f93\u51fa\u7ed3\u679c\u662f\u8fd9\u6837\u7684\uff1a"),Object(a.b)("img",{width:"180",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/Nl4J4H.png"}),Object(a.b)("p",null,"\u6211\u4eec\u53d1\u73b0\u5148\u8f93\u51fa\u7684\u662f middleware2, \u8fd9\u662f\u4e3a\u4ec0\u4e48\u5462\uff1f"),Object(a.b)("p",null,"\u6211\u4eec\u5728\u4e1a\u52a1\u4ee3\u7801\u4e2d dispatch \u4e00\u822c\u662f\u6309\u7167\u5982\u4e0b\u65b9\u5f0f\u8c03\u7528\u7684\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),"dispatch(action) // {type: 'SOME_TYPE', payload: {...}}\n")),Object(a.b)(r.a,{type:"tip",mdxType:"Hint"},"\u6b64\u65f6\u7684 dispatch \u5e76\u4e0d\u662f\u6e90\u7801\u4e2d\u6700\u539f\u59cb\u7684 dispatch \u800c\u662f\u7ecf\u8fc7\u4e86 middleware \u7b49\u4e00\u7cfb\u5217\u7684 enhancers \u7684\u589e\u5f3a\u3002"),Object(a.b)("p",null,"\u518d\u6df1\u5165\u4e00\u70b9\u53bb\u60f3\uff0c\u6700\u539f\u59cb\u7684\u6bcf\u6b21\u7a7f\u8fc7\u4e00\u5c42 middleware(\u67ef\u91cc\u5316\u7684\u51fd\u6570) \u7684\u65f6\u5019\u5176\u6700\u5185\u5c42\u7684\u51fd\u6570\u5e76\u6ca1\u6709\u6267\u884c\uff0c\u800c\u662f\u5c06 ",Object(a.b)("inlineCode",{parentName:"p"},"store.dispatch")," \u8fdb\u884c\u4e86\u589e\u5f3a\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),"store.dispatch = middleware(store)(next)\n")),Object(a.b)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u662f\u6838\u5fc3\u601d\u60f3\uff0c\u53ef\u4ee5\u6682\u65f6\u5148\u60f3\u8c61\u6210\u4e00\u4e2a\u6808\uff0c\u9075\u5faa\u5148\u8fdb\u540e\u51fa\u7684\u539f\u5219\uff0c\u800c\u51fa\u6808\u7684\u64cd\u4f5c\u5c31\u5de7\u5999\u5730\u8c03\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"next(action)")," \u5373\u53ef\uff0c\u56e0\u4e3a ",Object(a.b)("strong",{parentName:"p"},"next \u6b64\u65f6\u6307\u5411\u4e0a\u4e00\u4e2a middleware \u5305\u88c5\u540e\u7684 dispatch"),"\u3002\u91c7\u7528\u4f20\u53c2\u7684\u65b9\u5f0f\u5c06\u4e00\u4e2a\u4e2a\u589e\u5f3a\u540e\u7684 dispatch \u8fdb\u884c\u6709\u79e9\u5e8f\u7684\u201c\u73af\u73af\u76f8\u6263\u201d\uff0c\u8fd9\u4e5f\u5c31\u5f62\u6210\u4e86\u4e0a\u56fe\u6240\u793a\u7684",Object(a.b)("strong",{parentName:"p"},"\u201c\u6d0b\u8471\u201d\u6a21\u578b"),"\u3002"),Object(a.b)("h3",{id:"\u6539\u5584-middleware-\u7684\u987a\u5e8f"},"\u6539\u5584 middleware \u7684\u987a\u5e8f"),Object(a.b)("p",null,"\u5230\u8fd9\u91cc\u53ef\u80fd\u8fd8\u662f\u4f1a\u89c9\u5f97\u8fd9\u4e2a\u987a\u5e8f\u4e0d\u592a\u7b26\u5408\u5e38\u8bc6\uff0c\u4e5f\u548c\u4e0a\u56fe\u6240\u793a\u7684\u6d0b\u8471\u6a21\u578b\u4e0d\u592a\u4e00\u81f4\u3002\u5176\u5b9e redux \u7684\u771f\u5b9e middleware \u7684\u987a\u5e8f\u5c31\u662f\u6309\u7167\u5b9a\u4e49\u7684\u987a\u5e8f\uff0c\u6211\u4eec\u5728\u5185\u90e8\u5b9e\u73b0\u4e2d\u5bf9\u4f20\u5165\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"middlewares")," \u8fdb\u884c ",Object(a.b)("inlineCode",{parentName:"p"},"reverse()")," \u5373\u53ef\u3002"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-diff"}),"function enhanceDispatchByMiddleware (store, middlewares) {\n- middlewares.forEach(middleware => {\n+ middlewares.reverse().forEach(middleware => {\n    let next = store.dispatch\n    store.dispatch = middleware(store)(next)\n  })\n}\n")),Object(a.b)("p",null,"Redux \u5728 middleware \u7684\u5185\u90e8\u5b9e\u73b0\u7684\u6e90\u7801\u4e2d\u7528\u7684\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"compose")," \u51fd\u6570\uff0c\u56e0\u4e3a\u5176\u662f\u4ece\u53f3\u81f3\u5de6\u8fdb\u884c\u7684\uff0c\u6240\u4ee5\u5728 middlwware \u7684\u987a\u5e8f\u65b9\u9762\u672c\u8d28\u4e0a\u548c ",Object(a.b)("inlineCode",{parentName:"p"},"reverse()")," \u7684\u6548\u679c\u662f\u4e00\u6837\u7684\u3002"),Object(a.b)("h2",{id:"\u6d0b\u8471\u6a21\u578b\u4e2d\u91cd\u8981\u53d8\u91cf\u7684\u503c"},"\u6d0b\u8471\u6a21\u578b\u4e2d\u91cd\u8981\u53d8\u91cf\u7684\u503c"),Object(a.b)("p",null,"\u6211\u4eec\u518d\u6df1\u5165\u7814\u7a76\u4e00\u4e0b\u6d0b\u8471\u6a21\u578b\u5404\u4e2a\u90e8\u5206\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"getState"),", ",Object(a.b)("inlineCode",{parentName:"p"},"dispatch"),", ",Object(a.b)("inlineCode",{parentName:"p"},"next")," \u770b\u770b\u5b83\u4eec\u90fd\u5b9e\u9645\u6307\u7684\u662f\u4ec0\u4e48\u3002"),Object(a.b)("h3",{id:"storegetstate"},"store.getState"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),"const middleware1 = store => next => action => {\n  console.log('m1 left part:', store.getState())\n  next(action)\n  console.log('m1 right part:', store.getState())\n}\nconst middleware2 = store => next => action => {\n  console.log('m2 left part:', store.getState())\n  next(action)\n  console.log('m2 right part:', store.getState())\n}\n")),Object(a.b)("p",null,"\u8f93\u51fa\u7684\u7ed3\u679c\uff1a"),Object(a.b)("img",{width:"350",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/MFHyUR.png"}),Object(a.b)(r.a,{type:"tip",mdxType:"Hint"},"\u5f53\u5230\u8fbe\u4e2d\u95f4\u4ef6\u53f3\u534a\u8fb9\u7684\u65f6\u5019\uff0c `getState` \u8fd4\u56de\u7684\u662f\u6700\u65b0\u4fee\u6539\u540e\u7684 state\u3002"),Object(a.b)("h3",{id:"storedispatch"},"store.dispatch"),Object(a.b)("p",null,"\u6211\u4eec\u518d\u770b\u4e00\u4e0b dispatch \u5728\u5404\u4e2a\u4e2d\u95f4\u4ef6\u4e2d\u7684\u53d8\u5316\u60c5\u51b5\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),"const middleware1 = store => next => action => {\n  console.log('m1 left part:', store.dispatch)\n  next(action)\n  console.log('m1 right part:', store.dispatch)\n}\nconst middleware2 = store => next => action => {\n  console.log('m2 left part:', store.dispatch)\n  next(action)\n  console.log('m2 right part:', store.dispatch)\n}\n")),Object(a.b)("img",{width:"420",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/F0kIkM.png"}),Object(a.b)(r.a,{type:"tip",mdxType:"Hint"},"\u4e2d\u95f4\u4ef6\u4e2d\u6bcf\u4e00\u5c42\u8fd4\u56de\u7684 dispatch \u90fd\u662f\u4e00\u6837\u7684\uff0c\u90fd\u662f\u7ecf\u8fc7\u6240\u6709 middleware \u589e\u5f3a\u540e\u7684 dispatch\u3002"),Object(a.b)("p",null,"\u8fd9\u4e5f\u5c31\u4f7f\u5f97\u67d0\u4e2a middleware \u5185\u90e8\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"store.dispatch(action)"),", \u76f8\u5f53\u4e8e\u91cd\u65b0\u6765\u4e00\u904d\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),Object(a.b)(c.a,{width:"420",align:"center",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/c8qzUQ.png",mdxType:"Img"}),Object(a.b)(r.a,{type:"must",mdxType:"Hint"},"middleware \u5185\u90e8\u4e0d\u80fd\u7b80\u5355\u7c97\u66b4\u5730\u8c03\u7528 `store.dispatch(action)`, \u800c\u8981\u52a0\u4ee5\u5224\u65ad\u548c\u9650\u5236\uff0c\u5426\u5219\u4f1a\u5f62\u6210\u65e0\u9650\u5faa\u73af\u3002"),Object(a.b)("p",null,"\u770b\u770b middleware \u4e2d\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"store.dispatch")," \u7684\u6b63\u786e\u59ff\u52bf\uff0c\u4ee5 redux-thunk \u8fd9\u4e2a\u4e2d\u95f4\u4ef6\u4e3a\u4f8b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),"const thunk = store => next => action =>\n  typeof action === 'function' ? action(store.dispatch, store.getState) : next(action)\n")),Object(a.b)("p",null,"\u8fd9\u91cc\u52a0\u4ee5\u5224\u65ad\u907f\u514d\u4e86\u65e0\u9650\u5faa\u73af\uff0c\u53e6\u5916\u53ef\u4ee5\u5c06 ",Object(a.b)("inlineCode",{parentName:"p"},"store.dispatch, store.getState")," \u4f20\u9012\u7ed9\u4e1a\u52a1\u4e2d\u7684\u5f02\u6b65 action \u76f8\u5173\u4ee3\u7801\u3002"),Object(a.b)(r.a,{type:"tip",mdxType:"Hint"},"\u5728 middleware \u4e2d\u4f7f\u7528 dispatch \u573a\u666f\u4e00\u822c\u662f\u63a5\u53d7\u5230\u4e00\u4e2a\u5b9a\u5411 action\uff0c\u8fd9\u4e2a action \u5e76\u4e0d\u5e0c\u671b\u5230\u8fbe\u539f\u751f\u7684\u5206\u53d1 action\uff0c\u5f80\u5f80\u7528\u5728\u5f02\u6b65\u8bf7\u6c42\u7684\u9700\u6c42\u91cc\u3002"),Object(a.b)("h3",{id:"next"},"next"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),"const middleware1 = store => next => action => {\n  console.log('m1 left part:', next)\n  next(action)\n  console.log('m1 right part:', next)\n}\nconst middleware2 = store => next => action => {\n  console.log('m2 left part:', next)\n  next(action)\n  console.log('m2 right part:', next)\n}\n")),Object(a.b)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\uff1a"),Object(a.b)("img",{width:"410",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/1n2Ekr.png"}),Object(a.b)("p",null,"\u4e4b\u524d\u5728\u89e3\u91ca\u6d0b\u8471\u6a21\u578b\u7684\u65f6\u5019\u4e5f\u8bf4\u8fc7 next \u6307\u5411\u7684\u662f\u4e0a\u4e00\u4e2a middleware \u5305\u88c5\u540e\u7684 dispatch\u3002"),Object(a.b)(r.a,{type:"tip",mdxType:"Hint"},"next \u672c\u8d28\u4e0a\u662f dispatch \uff0c\u53ea\u662f\u589e\u5f3a\u7684\u5c42\u5ea6\u4e0d\u4e00\u6837\u3002"),Object(a.b)(r.a,{type:"tip",mdxType:"Hint"},"next \u5728\u540c\u4e00\u5c42\u7684\u5de6\u53f3\u4e24\u8fb9\u4e2d\uff0c\u5176\u503c\u90fd\u662f\u4e00\u6837\u7684\u3002"),Object(a.b)(r.a,{type:"tip",mdxType:"Hint"},"\u5728\u4ee3\u7801\u91cc\u9762\uff0c`next(action)` \u4e4b\u524d\u5904\u5728\u6d0b\u8471\u7684\u5de6\u8fb9\uff0c\u4e4b\u540e\u5904\u5728\u6d0b\u8471\u7684\u53f3\u8fb9\u3002"),Object(a.b)(r.a,{type:"must",mdxType:"Hint"},"\u8981\u60f3\u8fdb\u5165\u4e0b\u4e00\u4e2a middleware \u5fc5\u987b\u5199\u6210 `next(action);` \u800c\u4e0d\u662f `next;` \u3002"),Object(a.b)("h2",{id:"applymiddleware"},"applyMiddleware"),Object(a.b)("h3",{id:"\u5b9e\u73b0-applymiddleware"},"\u5b9e\u73b0 applyMiddleware"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),"const store = createStore(reducer, initialState)\nenhanceDispatchByMiddleware(store, [middleware1, middleware2])\n")),Object(a.b)("p",null,"\u8fd9\u4e24\u884c\u4ee3\u7801\u90fd\u662f\u4e3a\u751f\u6210 store \u800c\u670d\u52a1\uff0c\u90a3\u6211\u4eec\u5bf9 ",Object(a.b)("inlineCode",{parentName:"p"},"createStore")," \u4f5c\u4e00\u4e2a\u589e\u5f3a\uff0c\u8ba9 store \u8c03\u7528\u8be5\u51fd\u6570\u540e\u62ff\u5230\u7684\u5c31\u662f\u4e00\u4e2a\u52a0\u5f3a\u7248\u7684 store\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),"const enhancers = applyMiddleware([middleware1, middleware2])\nconst store = createStore(reducer, initialState, enhancers)\n")),Object(a.b)("p",null,"\u8fd9\u91cc\u6211\u4eec\u5c06 ",Object(a.b)("inlineCode",{parentName:"p"},"enhanceDispatchByMiddleware")," \u8fdb\u884c\u67ef\u91cc\u5316\uff0c\u5f62\u6210 ",Object(a.b)("inlineCode",{parentName:"p"},"applyMiddleware")," \u51fd\u6570 , \u4ee5\u4e0b\u662f\u6a21\u62df\u5b9e\u73b0 ",Object(a.b)("inlineCode",{parentName:"p"},"applyMiddleware")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"createStore")," \u52a0\u5f3a\u7684\u6e90\u7801\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-diff"}),"- function enhanceDispatchByMiddleware (store, middlewares) {\n+ function applyMiddleware (middlewares) {\n+   return function (store) {\n      middlewares.reverse().forEach(middleware => {\n        let next = store.dispatch\n        store.dispatch = middleware(store)(next)\n      })\n+     return store\n+   }\n  }\n\n- function createStore(reducer, initialState) {\n+ function createStore (reducer, initialState, enhancers) {\n+   funtion createStoreWithoutEnhancers (reducer, initialState) {\n      let state = initialState;\n      return {\n        getState: function () {\n          return state;\n        },\n        dispatch: function(action) {\n          state = reducer(state, action)\n        }\n      }\n+   }\n+   const store = createStoreWithoutEnhancers(reducer, initialState)\n+   return enhancers(store)\n  }\n")),Object(a.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0 ",Object(a.b)("inlineCode",{parentName:"p"},"applyMiddleware")," \u672c\u8d28\u4e0a\u662f\u5bf9 ",Object(a.b)("inlineCode",{parentName:"p"},"enhanceDispatchByMiddleware")," \u505a\u4e86\u4e00\u4e2a\u5c0f\u5916\u79d1\u624b\u672f\uff0c\u5c06\u5176\u8fdb\u884c\u4e86\u67ef\u91cc\u5316\uff0c\u8fd9\u6709\u4ec0\u4e48\u597d\u5904\uff1f\u672c\u8d28\u76ee\u7684\u8fd8\u662f\u5728\u201c\u89e3\u8026\u201d\uff0c\u5c06 applyMiddleware \u548c enhanceDispatch \u8fdb\u884c\u62c6\u5206\uff0c\u8ba9 enhanceDispatch \u8fd8\u53ef\u4ee5\u62fc\u88c5\u5176\u5b83 enhancer\uff0c\u66f4\u4e3a\u7075\u6d3b\u3002"),Object(a.b)("h3",{id:"\u5b98\u65b9-applymiddleware"},"\u5b98\u65b9 applyMiddleware"),Object(a.b)("p",null,"\u6211\u4eec\u518d\u770b\u4e00\u4e0b\u5b98\u65b9 ",Object(a.b)("inlineCode",{parentName:"p"},"applyMiddleware")," \u7684\u6e90\u7801\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),"import compose from './compose'\n\nexport default function applyMiddleware(...middlewares) {\n  return (createStore) => (reducer, preloadedState, enhancer) => {\n    var store = createStore(reducer, preloadedState, enhancer)\n    var dispatch = store.dispatch\n    var chain = []\n\n    var middlewareAPI = {\n      getState: store.getState,\n      dispatch: (action) => dispatch(action)\n    }\n\n    chain = middlewares.map(middleware => middleware(middlewareAPI))\n    dispatch = compose(...chain)(store.dispatch)\n\n    return {\n      ...store,\n      dispatch\n    }\n  }\n}\n")),Object(a.b)("p",null,"// TODO"))}p.isMDXComponent=!0},547:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(549),i=n.n(c);n(548);const l={best:{name:"\u63a8\u8350",color:"#50c610",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#50c610"}},r.a.createElement("g",null,r.a.createElement("path",{d:"M22 11.07V12a10 10 0 1 1-5.93-9.14"}),r.a.createElement("polyline",{points:"23 3 12 14 9 11"})))},must:{name:"\u5f3a\u5236",color:"#ff4642",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"#ff4642",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",stroke:"none",className:"custom-hint__icon"},r.a.createElement("g",null,r.a.createElement("path",{d:"M512 992c-262.4 0-480-217.6-480-480 0-262.4 217.6-480 480-480s480 217.6 480 480C992 774.4 774.4 992 512 992zM512 108.8C288 108.8 108.8 288 108.8 512c0 224 179.2 403.2 403.2 403.2s403.2-179.2 403.2-403.2C915.2 288 736 108.8 512 108.8zM697.6 684.8l-12.8 12.8c-6.4 6.4-19.2 6.4-25.6 0L512 550.4l-140.8 140.8c-6.4 6.4-19.2 6.4-25.6 0l-12.8-12.8c-6.4-6.4-6.4-19.2 0-25.6L473.6 512 326.4 371.2C320 358.4 320 345.6 326.4 339.2l12.8-12.8C345.6 320 358.4 320 371.2 326.4L512 473.6l140.8-140.8c6.4-6.4 19.2-6.4 25.6 0l12.8 12.8c6.4 6.4 6.4 19.2 0 25.6L550.4 512l140.8 140.8C704 665.6 704 678.4 697.6 684.8z"})))},tip:{name:"\u63d0\u793a",color:"#3884ff",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"none",className:"custom-hint__icon",style:{color:"#3884ff"}},r.a.createElement("g",null,r.a.createElement("path",{d:"M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11",fillRule:"evenodd"})))},warning:{name:"\u6ce8\u610f",color:"#fdbe12",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#fdbe12"}},r.a.createElement("g",null,r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"16"})))}};t.a=function({type:e,children:t}){return r.a.createElement("div",{className:"custom-hint",style:{borderLeft:"4px solid "+l[e].color}},r.a.createElement("div",{style:{float:"left"}},l[e].icon),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:i()("<strong>"+l[e].name+"</strong>\uff1a"+t)}}))}},548:function(e,t,n){},550:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){const{align:t,width:n,src:a,legend:c}=e;return t||c?r.a.createElement("div",{align:t||"center"},r.a.createElement("img",{src:a,width:n}),c&&r.a.createElement("p",null,c)):r.a.createElement("img",{src:a,width:n})}}}]);