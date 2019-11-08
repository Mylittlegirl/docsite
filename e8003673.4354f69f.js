(window.webpackJsonp=window.webpackJsonp||[]).push([[419],{270:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return o}));n(0);var a=n(546);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const r={title:"\u5206\u4ee3\u56de\u6536",sidebar_label:"\u5206\u4ee3\u56de\u6536"},l=[{value:"Node\u7684GC\u7279\u70b9",id:"node\u7684gc\u7279\u70b9",children:[]},{value:"\u65b0\u751f\u4ee3\uff1aScavenge\u7b97\u6cd5",id:"\u65b0\u751f\u4ee3\uff1ascavenge\u7b97\u6cd5",children:[]},{value:"\u8001\u751f\u4ee3\uff1aMark-Sweep\u7b97\u6cd5",id:"\u8001\u751f\u4ee3\uff1amark-sweep\u7b97\u6cd5",children:[]},{value:"\u8001\u751f\u4ee3\uff1aMark-Compact\u7b97\u6cd5",id:"\u8001\u751f\u4ee3\uff1amark-compact\u7b97\u6cd5",children:[]}],b={rightToc:l},p="wrapper";function o({components:e,...t}){return Object(a.b)(p,c({},b,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"node\u7684gc\u7279\u70b9"},"Node\u7684GC\u7279\u70b9"),Object(a.b)("p",null,Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/v8/v8/wiki"}),"https://github.com/v8/v8/wiki")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"64bit: 1.4GB"),Object(a.b)("li",{parentName:"ul"},"32bit: 0.7GB")),Object(a.b)("p",null,"\u65e0\u6cd5\u8bfb\u53d6\u5927\u6587\u4ef6\u5230\u5185\u5b58\uff0c\u5e26\u7740\u624b\u9563\u94d0\u8df3\u821e\u3002Why\uff1f"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u7528\u4e0d\u5230\u3002"),Object(a.b)("li",{parentName:"ul"},"GC\uff0c1.5GB\u5783\u573e\u9700\u89811s\u5de6\u53f3\u7684\u56de\u6536\u7684\u65f6\u95f4\uff0c\u4f1a\u963b\u585eJS\u4e3b\u7ebf\u7a0b\u3002")),Object(a.b)("img",{width:"400",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/6umXqr.jpg"}),Object(a.b)("img",{width:"400",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/x9XnBT.jpg"}),Object(a.b)("p",null,"process.memoryUsage\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5305\u542b\u4e86 Node \u8fdb\u7a0b\u7684\u5185\u5b58\u5360\u7528\u4fe1\u606f\u3002\u8be5\u5bf9\u8c61\u5305\u542b\u56db\u4e2a\u5b57\u6bb5\uff0c\u5355\u4f4d\u662f\u5b57\u8282\uff0c\u542b\u4e49\u5982\u4e0b\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"rss\uff08resident set size\uff09\uff1a\u6240\u6709\u5185\u5b58\u5360\u7528\uff0c\u5305\u62ec\u6307\u4ee4\u533a\u548c\u5806\u6808\u3002"),Object(a.b)("li",{parentName:"ul"},'heapTotal\uff1a"\u5806"\u5360\u7528\u7684\u5185\u5b58\uff0c\u5305\u62ec\u7528\u5230\u7684\u548c\u6ca1\u7528\u5230\u7684\u3002'),Object(a.b)("li",{parentName:"ul"},"heapUsed\uff1a\u7528\u5230\u7684\u5806\u7684\u90e8\u5206\u3002"),Object(a.b)("li",{parentName:"ul"},"external\uff1a V8 \u5f15\u64ce\u5185\u90e8\u7684 C++ \u5bf9\u8c61\u5360\u7528\u7684\u5185\u5b58\u3002")),Object(a.b)("p",null,"node\u7a0b\u5e8f\u542f\u52a8\u65f6\u5019\u53ef\u4ee5\u624b\u52a8\u8bbe\u7f6e\uff0c\u4f46\u542f\u52a8\u540e\u4e0d\u80fd\u52a8\u6001\u66f4\u6539\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-bash"}),"node --max-old-space-size=1700 app.js # \u5355\u4f4d\u4e3aMB\nnode --max-new-space-size=1024 app.js # \u5355\u4f4d\u4e3aKB\uff0c\u56e0\u4e3a\u65b0\u751f\u4ee3\u7a7a\u95f4\u6bd4\u8f83\u5c0f\n")),Object(a.b)("p",null,"GC\u7684\u4e09\u5927\u57fa\u7840\u7b97\u6cd5 ",Object(a.b)("a",c({parentName:"p"},{href:"https://segmentfault.com/a/1190000004665100#articleHeader4"}),"https://segmentfault.com/a/1190000004665100#articleHeader4")),Object(a.b)("p",null,"\u804a\u804aV8\u5f15\u64ce\u7684\u5783\u573e\u56de\u6536 ",Object(a.b)("a",c({parentName:"p"},{href:"https://juejin.im/post/5ad3f1156fb9a028b86e78be#heading-6"}),"https://juejin.im/post/5ad3f1156fb9a028b86e78be#heading-6")),Object(a.b)("p",null,"\u73b0\u4ee3\u7684\u5783\u573e\u56de\u6536\u5668\u6539\u826f\u4e86\u7b97\u6cd5\uff0c\u4f46\u662f\u672c\u8d28\u662f\u76f8\u540c\u7684\uff1a\u53ef\u8fbe\u5185\u5b58\u88ab\u6807\u8bb0\uff0c\u5176\u4f59\u7684\u88ab\u5f53\u4f5c\u5783\u573e\u56de\u6536\u3002"),Object(a.b)("p",null,"\u7279\u70b9\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u5206\u4ee3\u5f0f\u5783\u573e\u56de\u6536\u673a\u5236"),Object(a.b)("li",{parentName:"ul"},"\u4e0d\u540c\u573a\u666f\u5229\u4e8e\u5229\u7528\u4e0d\u540cGC\u7b97\u6cd5\uff08\u548c\u7edf\u8ba1\u5b66\u76f8\u5173\uff09")),Object(a.b)("img",{width:"600",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/M2O65a.jpg"}),Object(a.b)("h2",{id:"\u65b0\u751f\u4ee3\uff1ascavenge\u7b97\u6cd5"},"\u65b0\u751f\u4ee3\uff1aScavenge\u7b97\u6cd5"),Object(a.b)("p",null,"Scavenge\uff0c\u62f7\u8d1d-\u6536\u96c6\u7b97\u6cd5\uff0c\u5b83\u5c06\u65b0\u751f\u4ee3\u5212\u5206\u4e3a\u4e24\u534a\u5373 semi space \uff0c\u5c06\u5b58\u6d3b\u7684\u5bf9\u8c61\u4eceFrom\u7a7a\u95f4\u62f7\u8d1d\u5230To\u7a7a\u95f4\uff0c\u8fc7\u7a0b\u4e2d\u4e5f\u4f1a\u5224\u65ad\u662f\u5426\u9700\u8981\u5c06\u5bf9\u8c61\u201c\u664b\u5347\u201d\u5230\u8001\u751f\u4ee3\uff0c\u62f7\u8d1d\u5b8c\u540e\uff0cFrom\u7a7a\u95f4\u7684\u5bf9\u8c61\u5c06\u4f1a\u88ab\u56de\u6536\u3002\u7136\u540e\u5c06To\u7a7a\u95f4\u201c",Object(a.b)("strong",{parentName:"p"},"\u7ffb\u8f6c"),"\u201d\u6210\u201cFrom\u201d\u7a7a\u95f4\uff0c\u4e0b\u6b21\u56de\u6536\u7684\u65f6\u5019\u518d\u8fdb\u884c\u4ee5\u4e0a\u6d41\u7a0b\u3002"),Object(a.b)("p",null,"\u8fd9\u662f\u4e00\u79cd\u5178\u578b\u7684\u4ee5\u7a7a\u95f4\u6362\u65f6\u95f4\u7684\u7b97\u6cd5\uff0c\u7a7a\u95f4\u5229\u7528\u7387\u4f4e\uff0c\u5176\u901f\u5ea6\u4e5f\u6700\u5feb\uff0c\u53ea\u9002\u7528\u4e8e\u751f\u547d\u5468\u671f\u77ed\u7684\u573a\u666f\u3002\u572864bit\u8ba1\u7b97\u673a\u4e0a\u4e24\u5757\u6700\u5927\u603b\u5171\u536032MB\u7a7a\u95f4\uff0c\u6545max-new-space-size \u5355\u4f4d\u4e5f\u662f\u7528KB\u3002",Object(a.b)("strong",{parentName:"p"},"\u9ed8\u8ba4\u5927\u5c0f\u5462"),"\uff1f"),Object(a.b)("p",null,"\u664b\u5347\uff1a\u5bf9\u8c61\u591a\u6b21\u62f7\u8d1d\u540e\u4f9d\u7136\u5b58\u6d3b\u5c06\u4f1a\u664b\u5347\u5230\u8001\u751f\u4ee3\u3002"),Object(a.b)("p",null,"\u664b\u5347\u6761\u4ef6\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5bf9\u8c61\u662f\u5426\u7ecf\u5386\u8fc7Scavenge\u56de\u6536"),Object(a.b)("li",{parentName:"ul"},"To\u7a7a\u95f4\u7684\u5185\u5b58\u5360\u6bd4\u662f\u5426\u8d85\u8fc725%\uff08\u5982\u679c\u5360\u6bd4\u8fc7\u9ad8\uff0cTo\u8f6c\u6210From\u540e\u4f1a\u5f71\u54cd\u540e\u7eed\u5185\u5b58\u5206\u914d\uff09")),Object(a.b)("h2",{id:"\u8001\u751f\u4ee3\uff1amark-sweep\u7b97\u6cd5"},"\u8001\u751f\u4ee3\uff1aMark-Sweep\u7b97\u6cd5"),Object(a.b)("p",null,"V8 GC\u4e3b\u8981\u4f7f\u7528\u8be5\u7b97\u6cd5\u3002"),Object(a.b)("p",null,"Mark-Sweep\uff0c\u6807\u8bb0\u6e05\u9664\uff0c\u5206\u4e3a\u6807\u8bb0\u548c\u6e05\u9664\u4e24\u4e2a\u9636\u6bb5\u3002\u8001\u751f\u4ee3\u7a7a\u95f4\u7684\u7b97\u6cd5\u7b2c\u4e00\u4e2a\u9636\u6bb5\u90fd\u662f\u6807\u8bb0\u9636\u6bb5\u3002\u5f53\u53d8\u91cf\u8fdb\u5165\u6267\u884c\u73af\u5883\u7684\u65f6\u5019\uff0c\u6bd4\u5982",Object(a.b)("strong",{parentName:"p"},"\u51fd\u6570\u4e2d\u58f0\u660e\u4e00\u4e2a\u53d8\u91cf"),"\uff0c\u5783\u573e\u56de\u6536\u5668\u5c06\u5176\u6807\u8bb0\u4e3a\u201c\u8fdb\u5165\u73af\u5883\u201d\uff0c\u5f53\u53d8\u91cf\u79bb\u5f00\u73af\u5883\u7684\u65f6\u5019\uff08\u51fd\u6570\u6267\u884c\u7ed3\u675f\uff09\u5c06\u5176\u6807\u8bb0\u4e3a\u201c\u79bb\u5f00\u73af\u5883\u201d\u3002\u5783\u573e\u56de\u6536\u5668\u4f1a\u5728\u8fd0\u884c\u7684\u65f6\u5019\u7ed9\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\u7684\u6240\u6709\u53d8\u91cf\u52a0\u4e0a\u6807\u8bb0\uff0c\u7136\u540e\u53bb\u6389\u73af\u5883\u4e2d\u7684\u53d8\u91cf\u4ee5\u53ca\u88ab\u73af\u5883\u4e2d\u53d8\u91cf\u6240\u5f15\u7528\u7684\u53d8\u91cf\uff08\u95ed\u5305\uff09\uff0c\u5728\u8fd9\u4e9b\u5b8c\u6210\u4e4b\u540e\u4ecd\u5b58\u5728\u6807\u8bb0\u7684\u5c31\u662f\u8981\u5220\u9664\u7684\u53d8\u91cf\u4e86\u3002"),Object(a.b)("p",null,"\u4ece\u903b\u8f91\u4e0a\u8bb2\uff0c\u6c38\u8fdc\u4e0d\u80fd\u91ca\u653e\u8fdb\u5165\u73af\u5883\u7684\u53d8\u91cf\u6240\u5360\u7528\u7684\u5185\u5b58\uff0c\u56e0\u4e3a\u53ea\u8981\u6267\u884c\u6d41\u8fdb\u5165\u76f8\u5e94\u7684\u73af\u5883\uff0c\u5c31\u53ef\u80fd\u4f1a\u7528\u5230\u5b83\u4eec\u3002\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u65b9\u5f0f\u6765\u6807\u8bb0\u53d8\u91cf\u3002\u6bd4\u5982\uff0c\u53ef\u4ee5\u901a\u8fc7\u7ffb\u8f6c\u67d0\u4e2a\u7279\u6b8a\u7684\u4f4d\u6765\u8bb0\u5f55\u4e00\u4e2a\u53d8\u91cf\u4f55\u65f6\u8fdb\u5165\u73af\u5883\uff0c\u6216\u8005\u4f7f\u7528\u4e00\u4e2a\u201c\u8fdb\u5165\u73af\u5883\u7684\u201d\u53d8\u91cf\u5217\u8868\u53ca\u4e00\u4e2a\u201c\u79bb\u5f00\u73af\u5883\u7684\u201d\u53d8\u91cf\u5217\u8868\u6765\u8ddf\u8e2a\u54ea\u4e2a\u53d8\u91cf\u53d1\u751f\u4e86\u53d8\u5316\u3002\u5982\u4f55\u6807\u8bb0\u53d8\u91cf\u5e76\u4e0d\u91cd\u8981\uff0c\u5173\u952e\u5728\u4e8e\u91c7\u53d6\u4ec0\u4e48\u7b56\u7565\u3002"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u6807\u8bb0\u9636\u6bb5\uff1a\u904d\u5386\u8001\u751f\u4ee3\u5806\u4e2d\u6240\u6709\u5bf9\u8c61\uff08\u8fd9\u4e9b\u5bf9\u8c61\u662f\u4ece\u65b0\u751f\u4ee3\u664b\u5347\u8fc7\u6765\u7684\uff09\uff0c\u5e76",Object(a.b)("strong",{parentName:"li"},"\u6807\u8bb0\u5b58\u6d3b\u5bf9\u8c61"),"\u3002"),Object(a.b)("li",{parentName:"ul"},"\u6e05\u9664\u9636\u6bb5\uff1a\u76f4\u63a5\u6e05\u9664\u6b7b\u4ea1\u5bf9\u8c61\uff08\u5373\u6ca1\u6709\u6807\u8bb0\u7684\uff09\uff0c\u4f46\u4f1a\u9020\u6210\u788e\u7247\u5316\uff08\u4e00\u5c0f\u5757\u533a\u57df\u53ef\u80fd\u6c38\u8fdc\u4e0d\u4f1a\u88ab\u5206\u914d\uff0c\u4e5f\u53ef\u80fd\u63d0\u524d\u89e6\u53d1GC\u589e\u5927\u7a7a\u95f4\u540e\u53ef\u4ee5\u89e3\u51b3\uff0c\u4f46\u8fd9\u6b21\u662f\u4e0d\u5fc5\u8981\u7684\uff09")),Object(a.b)("p",null,"\u76ee\u524d\uff0cIE\u3001Firefox\u3001Opera\u3001Chrome\u548cSafari\u7684JavaScript\u5b9e\u73b0\u4f7f\u7528\u7684\u90fd\u662f\u6807\u8bb0\u6e05\u9664\u5f0f\u7684\u5783\u573e\u56de\u6536\u7b56\u7565\uff08\u6216\u7c7b\u4f3c\u7684\u7b56\u7565\uff09\uff0c\u53ea\u4e0d\u8fc7\u5783\u573e\u6536\u96c6\u7684\u65f6\u95f4\u95f4\u9694\u4e92\u6709\u4e0d\u540c\u3002"),Object(a.b)("img",{width:"600",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/yWLjGW.jpg"}),Object(a.b)("img",{width:"300",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/8TjihR.jpg"}),Object(a.b)("h2",{id:"\u8001\u751f\u4ee3\uff1amark-compact\u7b97\u6cd5"},"\u8001\u751f\u4ee3\uff1aMark-Compact\u7b97\u6cd5"),Object(a.b)("p",null,"V8 GC\u8f85\u52a9\u7b97\u6cd5\uff0c\u5f53\u4ece\u65b0\u751f\u4ee3\u664b\u5347\u8fc7\u6765\u7684\u5bf9\u8c61\u8fc7\u5927\uff0c\u7a7a\u95f4\u4e0d\u8db3\u65f6\u5019\u624d\u4f1a\u4f7f\u7528\u8be5\u7b97\u6cd5\u3002"),Object(a.b)("p",null,"Mark-Compact\uff0c\u6807\u8bb0\u6574\u7406\u3002\u5b83\u662fMark-Sweep\u7b97\u6cd5\u7684\u589e\u5f3a\uff0c\u8ba9\u6240\u6709\u5b58\u6d3b\u7684\u5bf9\u8c61\u90fd\u5411\u4e00\u7aef\u79fb\u52a8\uff0c\u7136\u540e\u76f4\u63a5\u6e05\u7406\u6389\u7aef\u8fb9\u754c\u4ee5\u5916\u7684\u5185\u5b58\u3002"),Object(a.b)("img",{width:"500",src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/o7N0wh.jpg"}))}o.isMDXComponent=!0},546:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var a=n(0),c=n.n(a),r=c.a.createContext({}),l=function(e){var t=c.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},b=function(e){var t=l(e.components);return c.a.createElement(r.Provider,{value:t},e.children)};var p="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},i=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,b=e.parentName,p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),i=l(n),s=a,u=i[b+"."+s]||i[s]||o[s]||r;return n?c.a.createElement(u,Object.assign({},{ref:t},p,{components:n})):c.a.createElement(u,Object.assign({},{ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=i;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b[p]="string"==typeof e?e:a,l[1]=b;for(var s=2;s<r;s++)l[s]=n[s];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}i.displayName="MDXCreateElement"}}]);