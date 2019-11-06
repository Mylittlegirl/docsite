(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{298:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"rightToc",(function(){return a})),t.d(n,"default",(function(){return m}));t(58),t(31),t(22),t(23),t(59),t(0);var o=t(594),c=t(595);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var l={title:"\u7f13\u5b58\u4e0e\u8bb0\u5fc6\u5316",sidebar_label:"\u7f13\u5b58\u4e0e\u8bb0\u5fc6\u5316"},a=[{value:"\u4ec0\u4e48\u662f\u8bb0\u5fc6\u5316",id:"\u4ec0\u4e48\u662f\u8bb0\u5fc6\u5316",children:[]},{value:"\u540c\u6b65\u7f13\u5b58",id:"\u540c\u6b65\u7f13\u5b58",children:[]},{value:"\u5f02\u6b65\u7f13\u5b58",id:"\u5f02\u6b65\u7f13\u5b58",children:[]}],i={rightToc:a},s="wrapper";function m(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,c={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,["components"]);return Object(o.b)(s,r({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u4ec0\u4e48\u662f\u8bb0\u5fc6\u5316"},"\u4ec0\u4e48\u662f\u8bb0\u5fc6\u5316"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u901a\u8fc7\u4f7f\u7528\u8bb0\u5fc6\u5316\uff0c\u9047\u5230\u76f8\u540c\u7684\u8f93\u5165\u4f1a\u7acb\u5373\u89e6\u53d1\u5185\u90e8\u7f13\u5b58\u547d\u4e2d\u76f4\u63a5\u8fd4\u56de\u7ed3\u679c\u3002")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-text"}),"\u8bb0\u5fc6\u5316 -> \u5185\u90e8\u51fd\u6570\u7ea7\u7f13\u5b58 -> \u907f\u514d\u91cd\u590d\u8ba1\u7b97\n")),Object(o.b)(c.a,{type:"warning",mdxType:"Hint"},"\u5355\u8bcd\u662f memoize \u4e0d\u662f memorize \u3002"),Object(o.b)("h2",{id:"\u540c\u6b65\u7f13\u5b58"},"\u540c\u6b65\u7f13\u5b58"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"function memoize (fn) {\n let cache = {};\n return (...args) => {\n   let n = args[0];  // just taking one argument here\n   if (n in cache) {\n     console.log('Fetching from cache');\n     return cache[n];\n   }\n   console.log('Calculating result');\n   let result = fn(n);\n   cache[n] = result;\n   return result;\n }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"// a simple pure function to get a value adding 10\nconst add = (n) => (n + 10);\nconsole.log('Simple call', add(3));\n\nconst memorizedAdd = memoize(add);\nconsole.log(memorizedAdd(3));  // Calculating result\nconsole.log(memorizedAdd(3));  // Fetching from cache\nconsole.log(memorizedAdd(4));  // Calculating result\nconsole.log(memorizedAdd(4));  // Fetching from cache\n")),Object(o.b)("p",null,"\u4e3a\u4e86\u7b80\u5316\u751f\u6210\u5bc6\u5319\u7684\u903b\u8f91\uff0c\u7b80\u5355\u7684\u8bb0\u5fc6\u5316\u4ec5\u9650\u4e8e\u4e00\u5143\u51fd\u6570\u3002\u5bf9\u4e8e\u9700\u8981\u8bb0\u5fc6\u5316\u591a\u4e2a\u53c2\u6570\u7684\u51fd\u6570\u53ef\u4ee5\u4f7f\u7528\u67ef\u91cc\u5316\uff0c\u6765\u907f\u514d\u7f13\u5b58\u5c42\u7ed9\u51fd\u6570\u589e\u52a0\u989d\u5916\u7684\u5f00\u9500\u548c\u590d\u6742\u5ea6\u3002"),Object(o.b)("h2",{id:"\u5f02\u6b65\u7f13\u5b58"},"\u5f02\u6b65\u7f13\u5b58"))}m.isMDXComponent=!0},595:function(e,n,t){"use strict";t(597);var o=t(0),c=t.n(o),r=t(598),l=t.n(r),a=(t(596),{best:{name:"\u63a8\u8350",color:"#50c610",icon:c.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#50c610"}},c.a.createElement("g",null,c.a.createElement("path",{d:"M22 11.07V12a10 10 0 1 1-5.93-9.14"}),c.a.createElement("polyline",{points:"23 3 12 14 9 11"})))},must:{name:"\u5f3a\u5236",color:"#ff4642",icon:c.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"#ff4642",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",stroke:"none",className:"custom-hint__icon"},c.a.createElement("g",null,c.a.createElement("path",{d:"M512 992c-262.4 0-480-217.6-480-480 0-262.4 217.6-480 480-480s480 217.6 480 480C992 774.4 774.4 992 512 992zM512 108.8C288 108.8 108.8 288 108.8 512c0 224 179.2 403.2 403.2 403.2s403.2-179.2 403.2-403.2C915.2 288 736 108.8 512 108.8zM697.6 684.8l-12.8 12.8c-6.4 6.4-19.2 6.4-25.6 0L512 550.4l-140.8 140.8c-6.4 6.4-19.2 6.4-25.6 0l-12.8-12.8c-6.4-6.4-6.4-19.2 0-25.6L473.6 512 326.4 371.2C320 358.4 320 345.6 326.4 339.2l12.8-12.8C345.6 320 358.4 320 371.2 326.4L512 473.6l140.8-140.8c6.4-6.4 19.2-6.4 25.6 0l12.8 12.8c6.4 6.4 6.4 19.2 0 25.6L550.4 512l140.8 140.8C704 665.6 704 678.4 697.6 684.8z"})))},tip:{name:"\u63d0\u793a",color:"#3884ff",icon:c.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"none",className:"custom-hint__icon",style:{color:"#3884ff"}},c.a.createElement("g",null,c.a.createElement("path",{d:"M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11",fillRule:"evenodd"})))},warning:{name:"\u6ce8\u610f",color:"#fdbe12",icon:c.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#fdbe12"}},c.a.createElement("g",null,c.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),c.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),c.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"16"})))}});n.a=function(e){var n=e.type,t=e.children;return c.a.createElement("div",{className:"custom-hint",style:{borderLeft:"4px solid "+a[n].color}},c.a.createElement("div",{style:{float:"left"}},a[n].icon),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:l()("<strong>"+a[n].name+"</strong>\uff1a"+t)}}))}},596:function(e,n,t){}}]);