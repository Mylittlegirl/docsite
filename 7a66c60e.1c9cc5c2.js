(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));n(0);var r=n(546);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const a={id:"for\u5faa\u73af\u4e2d\u7684setTimeout",title:"for\u5faa\u73af\u4e2d\u7684setTimeout",author:"Robbie Han",authorTitle:"Front End Engineer @ Tradeshift",authorURL:"https://github.com/USTC-Han",authorImageURL:"https://robbie-pic.oss-cn-beijing.aliyuncs.com/IMG_4175.JPG?x-oss-process=style/compress",authorTwitter:null,tags:["setTimeout","for"]},i=[{value:"\u524d\u8a00\uff1a",id:"\u524d\u8a00\uff1a",children:[]}],c={rightToc:i},u="wrapper";function s({components:e,...t}){return Object(r.b)(u,o({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u524d\u8a00\uff1a"},"\u524d\u8a00\uff1a"),Object(r.b)("p",null,"\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af\u7ecf\u5178\u9898\u76ee:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-js"}),"for (var i=0; i<5; i++) {\n    setTimeout( function timer() {\n        console.log(new Date, i);\n    }, 1000);\n}\nVM84:3 Wed Oct 09 2019 09:29:47 GMT+0800 (\u4e2d\u56fd\u6807\u51c6\u65f6\u95f4) 5\nVM84:3 Wed Oct 09 2019 09:29:47 GMT+0800 (\u4e2d\u56fd\u6807\u51c6\u65f6\u95f4) 5\nVM84:3 Wed Oct 09 2019 09:29:47 GMT+0800 (\u4e2d\u56fd\u6807\u51c6\u65f6\u95f4) 5\nVM84:3 Wed Oct 09 2019 09:29:47 GMT+0800 (\u4e2d\u56fd\u6807\u51c6\u65f6\u95f4) 5\nVM84:3 Wed Oct 09 2019 09:29:47 GMT+0800 (\u4e2d\u56fd\u6807\u51c6\u65f6\u95f4) 5\n")),Object(r.b)("p",null,"\u89e3\u6790\uff1a \u6839\u636esetTimeout\u5b9a\u4e49\u7684\u64cd\u4f5c\u5728\u51fd\u6570\u8c03\u7528\u6808\u6e05\u7a7a\u4e4b\u540e\u624d\u4f1a\u6267\u884c\u7684\u7279\u70b9\uff0cfor\u5faa\u73af\u91cc\u5b9a\u4e49\u4e865\u4e2asetTimeout\u64cd\u4f5c\u3002\u800c\u7b49\u5f851\u79d2\u540e\uff0c\u4efb\u52a1\u961f\u5217\u91cc\u7684setTimeout\u5f00\u59cb\u4f9d\u6b21\u6267\u884c\u65f6\uff0cfor\u5faa\u73af\u7684i\u503c\uff0c\u5df2\u7ecf\u5148\u4e00\u6b65\u53d8\u6210\u4e865\u3002\u56e0\u4e3a\u4efb\u52a1\u961f\u5217\u63a8\u5230\u51fd\u6570\u8c03\u7528\u6808\u6267\u884c\u7684\u65f6\u95f4\u53ef\u4ee5\u5ffd\u7565\u4e0d\u8bb0\uff08\u6beb\u79d2\u7ea7\uff09\uff0c\u6240\u4ee5\u6253\u5370\u7684GMT\u65f6\u95f4\uff08\u7cbe\u786e\u5230\u79d2\uff09\u548ci\u7684\u503c\u90fd\u662f\u76f8\u540c\u7684\u3002"))}s.isMDXComponent=!0},546:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n(0),o=n.n(r),a=o.a.createContext({}),i=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),l=r,f=p[c+"."+l]||p[l]||s[l]||a;return n?o.a.createElement(f,Object.assign({},{ref:t},u,{components:n})):o.a.createElement(f,Object.assign({},{ref:t},u))}));function l(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);