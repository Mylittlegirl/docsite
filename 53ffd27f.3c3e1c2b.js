(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{156:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));t(58),t(31),t(22),t(23),t(59),t(0);var r=t(594);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o={id:"reverse-proxy",title:"\u6b63\u5411\u4ee3\u7406\u548c\u53cd\u5411\u4ee3\u7406",author:"Robbie Han",authorTitle:"Front End Engineer @ Tradeshift",authorURL:"https://github.com/USTC-Han",authorImageURL:"https://robbie-pic.oss-cn-beijing.aliyuncs.com/IMG_4175.JPG?x-oss-process=style/compress",authorTwitter:null,tags:["\u6b63\u5411\u4ee3\u7406","\u53cd\u5411\u4ee3\u7406"]},c=[{value:"\u6b63\u5411\u4ee3\u7406",id:"\u6b63\u5411\u4ee3\u7406",children:[]}],i={rightToc:c},p="wrapper";function u(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(p,a({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u6b63\u5411\u4ee3\u7406"},"\u6b63\u5411\u4ee3\u7406"),Object(r.b)("p",null,"A\u540c\u5b66\u521b\u4e1a\u9700\u8981\u542f\u52a8\u8d44\u91d1\uff0c\u4e8e\u662f\u4ed6\u51b3\u5b9a\u53bb\u627e\u9a6c\u4e91\u7238\u7238\u501f\u94b1\uff0c\u53ef\u60f3\u800c\u77e5\uff0c\u6700\u540e\u78b0\u4e00\u9f3b\u5b50\u7070\u56de\u6765\u4e86\u3002\u60c5\u6025\u4e4b\u4e0b\uff0c\u4ed6\u60f3\u5230\u4e00\u4e2a\u529e\u6cd5\uff0c\u627e\u5173\u7cfb\u5f00\u540e\u95e8\uff0c\u7ecf\u8fc7\u4e00\u756a\u6d88\u606f\u6253\u63a2\uff0c\u539f\u6765A\u540c\u5b66\u7684\u5927\u5b66\u8001\u5e08\u738b\u8001\u5e08\u662f\u9a6c\u4e91\u7684\u540c\u5b66\uff0c\u4e8e\u662fA\u540c\u5b66\u627e\u5230\u738b\u8001\u5e08\uff0c\u6258\u738b\u8001\u5e08\u5e2e\u5fd9\u53bb\u9a6c\u4e91\u90a3\u501f500\u4e07\u8fc7\u6765\u3002"),Object(r.b)("p",null,"\u4e0d\u8fc7\u9a6c\u4e91\u5e76\u4e0d\u77e5\u9053\u8fd9\u94b1\u662fA\u540c\u5b66\u501f\u7684\uff0c\u9a6c\u4e91\u662f\u501f\u7ed9\u738b\u8001\u5e08\u7684\uff0c\u6700\u540e\u7531\u738b\u8001\u5e08\u8f6c\u4ea4\u7ed9A\u540c\u5b66\u3002\u8fd9\u91cc\u7684\u738b\u8001\u5e08\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u626e\u6f14\u4e86\u4e00\u4e2a\u975e\u5e38\u5173\u952e\u7684\u89d2\u8272\uff0c\u5c31\u662f",Object(r.b)("strong",{parentName:"p"},"\u4ee3\u7406"),"\uff0c\u4e5f\u53ef\u4ee5\u8bf4\u662f",Object(r.b)("strong",{parentName:"p"},"\u6b63\u5411\u4ee3\u7406"),"\u3002\u738b\u8001\u5e08\u4ee3\u66ffA\u540c\u5b66\u529e\u8fd9\u4ef6\u4e8b\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u771f\u6b63\u501f\u94b1\u7684\u4eba\u662f\u8c01\uff0c\u9a6c\u4e91\u662f\u4e0d\u77e5\u9053\u7684\uff0c\u8fd9\u70b9\u975e\u5e38\u5173\u952e\u3002"),Object(r.b)("p",null,"\u6b63\u5411\u4ee3\u7406\u7684\u8fc7\u7a0b\u4e2d\uff0c\u670d\u52a1\u5668\u5e76\u4e0d\u77e5\u9053\u771f\u6b63\u7684\u5ba2\u6237\u7aef\u662f\u8c01\uff0c\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u90fd\u662f\u4f9d\u9760\u4ee3\u7406\u670d\u52a1\u5668\u6765\u8bf7\u6c42\u3002\u5728\u6211\u4eec\u8bbf\u95ee\u8c37\u6b4c\u7684\u65f6\u5019\uff0c\u4f1a\u88ab\u9632\u706b\u5899\u963b\u6b62\uff0c\u6b64\u65f6\u6211\u4eec\u9700\u8981\u8d2d\u4e70\u4e00\u6b3e\u53ef\u4ee5\u7ffb\u5899\u7684\u670d\u52a1\u5668\uff0c\u8fd9\u4e2a\u7ffb\u5899\u7684\u670d\u52a1\u5668\u5c31\u626e\u6f14\u8005\u6b63\u5411\u4ee3\u7406\u7684\u89d2\u8272\u3002"),Object(r.b)("div",{align:"center"},Object(r.b)("img",{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/INXnEj.jpg",width:"540",height:"320"})))}u.isMDXComponent=!0},594:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return l}));var r=t(0),a=t.n(r),o=a.a.createContext({}),c=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=c(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),s=c(t),l=r,f=s[i+"."+l]||s[l]||u[l]||o;return t?a.a.createElement(f,Object.assign({},{ref:n},p,{components:t})):a.a.createElement(f,Object.assign({},{ref:n},p))}));function l(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=s;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);