(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{517:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));n(58),n(31),n(22),n(23),n(59),n(0);var r=n(594);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o={title:"CORS",sidebar_label:"CORS"},c=[{value:"CORS\u7b80\u4ecb",id:"cors\u7b80\u4ecb",children:[]},{value:"\u7b80\u5355\u8bf7\u6c42\u57fa\u672c\u6d41\u7a0b",id:"\u7b80\u5355\u8bf7\u6c42\u57fa\u672c\u6d41\u7a0b",children:[]},{value:"\u975e\u7b80\u5355\u8bf7\u6c42",id:"\u975e\u7b80\u5355\u8bf7\u6c42",children:[]},{value:"CORS\u8de8\u57dfdemo",id:"cors\u8de8\u57dfdemo",children:[]}],a={rightToc:c},b="wrapper";function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(r.b)(b,l({},a,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"cors\u7b80\u4ecb"},"CORS\u7b80\u4ecb"),Object(r.b)("p",null,"CORS\u662f\u8de8\u6e90\u8d44\u6e90\u5171\u4eab\uff08Cross-Origin Resource Sharing\uff09\u7684\u7f29\u5199\u3002\u5b83\u662fW3C\u6807\u51c6\uff0c\u662f\u8de8\u6e90AJAX\u8bf7\u6c42\u7684\u6839\u672c\u89e3\u51b3\u65b9\u6cd5\u3002\u76f8\u6bd4JSONP\u53ea\u80fd\u53d1GET\u8bf7\u6c42\uff0c",Object(r.b)("strong",{parentName:"p"},"CORS\u5141\u8bb8\u4efb\u4f55\u7c7b\u578b\u7684\u8bf7\u6c42"),"\u3002"),Object(r.b)("p",null,"\u5b83\u5141\u8bb8\u6d4f\u89c8\u5668\u5411\u8de8\u6e90\u670d\u52a1\u5668\uff0c\u53d1\u51faXMLHttpRequest\u8bf7\u6c42\uff0c\u4ece\u800c\u514b\u670d\u4e86AJAX\u53ea\u80fd\u540c\u6e90\u4f7f\u7528\u7684\u9650\u5236\u3002"),Object(r.b)("p",null,"CORS\u9700\u8981",Object(r.b)("strong",{parentName:"p"},"\u6d4f\u89c8\u5668\u548c\u670d\u52a1\u5668\u540c\u65f6\u652f\u6301"),"\u3002\u76ee\u524d\uff0c\u6240\u6709\u6d4f\u89c8\u5668\u90fd\u652f\u6301\u8be5\u529f\u80fd\uff0cIE\u6d4f\u89c8\u5668\u4e0d\u80fd\u4f4e\u4e8eIE10\u3002"),Object(r.b)("p",null,"\u6574\u4e2aCORS\u901a\u4fe1\u8fc7\u7a0b\uff0c\u90fd\u662f\u6d4f\u89c8\u5668\u81ea\u52a8\u5b8c\u6210\uff0c\u4e0d\u9700\u8981\u7528\u6237\u53c2\u4e0e\u3002\u5bf9\u4e8e\u5f00\u53d1\u8005\u6765\u8bf4\uff0cCORS\u901a\u4fe1\u4e0e\u540c\u6e90\u7684AJAX\u901a\u4fe1\u6ca1\u6709\u5dee\u522b\uff0c\u4ee3\u7801\u5b8c\u5168\u4e00\u6837\u3002",Object(r.b)("strong",{parentName:"p"},"\u6d4f\u89c8\u5668\u4e00\u65e6\u53d1\u73b0AJAX\u8bf7\u6c42\u8de8\u6e90\uff0c\u5c31\u4f1a\u81ea\u52a8\u6dfb\u52a0\u4e00\u4e9b\u9644\u52a0\u7684\u5934\u4fe1\u606f\uff0c\u6709\u65f6\u8fd8\u4f1a\u591a\u51fa\u4e00\u6b21\u9644\u52a0\u7684\u8bf7\u6c42\uff0c\u4f46\u7528\u6237\u4e0d\u4f1a\u6709\u611f\u89c9"),"\u3002"),Object(r.b)("p",null,"\u56e0\u6b64\uff0c\u5b9e\u73b0CORS\u901a\u4fe1\u7684",Object(r.b)("strong",{parentName:"p"},"\u5173\u952e\u662f\u670d\u52a1\u5668"),"\u3002\u53ea\u8981\u670d\u52a1\u5668\u5b9e\u73b0\u4e86CORS\u63a5\u53e3\uff0c\u5c31\u53ef\u4ee5\u8de8\u6e90\u901a\u4fe1\u3002"),Object(r.b)("p",null,"\u4e24\u79cd\u8bf7\u6c42\n\u6d4f\u89c8\u5668\u5c06CORS\u8bf7\u6c42\u5206\u6210\u4e24\u7c7b\uff1a",Object(r.b)("strong",{parentName:"p"},"\u7b80\u5355\u8bf7\u6c42\uff08simple request\uff09\u548c\u975e\u7b80\u5355\u8bf7\u6c42\uff08not-so-simple request\uff09\u3002")),Object(r.b)("p",null,"\u53ea\u8981\u540c\u65f6\u6ee1\u8db3\u4ee5\u4e0b\u4e24\u5927\u6761\u4ef6\uff0c\u5c31\u5c5e\u4e8e",Object(r.b)("strong",{parentName:"p"},"\u7b80\u5355\u8bf7\u6c42"),"\u3002"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{}),"1.\u8bf7\u6c42\u65b9\u6cd5\u662f\u4ee5\u4e0b\u4e09\u79cd\u65b9\u6cd5\u4e4b\u4e00\uff1a\nHEAD\nGET\nPOST\n2.HTTP\u7684\u5934\u4fe1\u606f\u4e0d\u8d85\u51fa\u4ee5\u4e0b\u51e0\u79cd\u5b57\u6bb5\uff1a\nAccept\nAccept-Language\nContent-Language\nLast-Event-ID\nContent-Type\uff1a\u53ea\u9650\u4e8e\u4e09\u4e2a\u503capplication/x-www-form-urlencoded\u3001multipart/form-data\u3001text/plain\n")),Object(r.b)("p",null,"\u51e1\u662f\u4e0d\u540c\u65f6\u6ee1\u8db3\u4e0a\u9762\u4e24\u4e2a\u6761\u4ef6\uff0c\u5c31\u5c5e\u4e8e",Object(r.b)("strong",{parentName:"p"},"\u975e\u7b80\u5355\u8bf7\u6c42"),"\u3002"),Object(r.b)("p",null,"\u6d4f\u89c8\u5668\u5bf9\u8fd9\u4e24\u79cd\u8bf7\u6c42\u7684\u5904\u7406\uff0c\u662f\u4e0d\u4e00\u6837\u7684\u3002"),Object(r.b)("h2",{id:"\u7b80\u5355\u8bf7\u6c42\u57fa\u672c\u6d41\u7a0b"},"\u7b80\u5355\u8bf7\u6c42\u57fa\u672c\u6d41\u7a0b"),Object(r.b)("p",null,"\u5bf9\u4e8e\u7b80\u5355\u8bf7\u6c42\uff0c\u6d4f\u89c8\u5668\u4f1a\u5c06\u5176\u52a0\u5de5\u4e00\u4e0b\u53d8\u6210CORS\u8bf7\u6c42\uff0c\u5373\u5728\u5934\u4fe1\u606f\u4e4b\u4e2d\uff0c\u589e\u52a0\u4e00\u4e2aOrigin\u5b57\u6bb5\u3002"),Object(r.b)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\uff0c\u6d4f\u89c8\u5668\u53d1\u73b0\u8fd9\u6b21\u8de8\u6e90AJAX\u8bf7\u6c42\u662f\u7b80\u5355\u8bf7\u6c42\uff0c\u5c31\u81ea\u52a8\u5728\u5934\u4fe1\u606f\u4e4b\u4e2d\uff0c\u6dfb\u52a0\u4e00\u4e2aOrigin\u5b57\u6bb5\u3002"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{}),"GET /cors HTTP/1.1\nOrigin: http://api.bob.com\nHost: api.alice.com\nAccept-Language: en-US\nConnection: keep-alive\nUser-Agent: Mozilla/5.0...\n")),Object(r.b)("p",null,"\u4e0a\u9762\u7684\u5934\u4fe1\u606f\u4e2d\uff0cOrigin\u5b57\u6bb5\u7528\u6765\u8bf4\u660e\uff0c\u672c\u6b21\u8bf7\u6c42\u6765\u81ea\u54ea\u4e2a\u6e90\uff08\u534f\u8bae + \u57df\u540d + \u7aef\u53e3\uff09\u3002\u670d\u52a1\u5668\u6839\u636e\u8fd9\u4e2a\u503c\uff0c\u51b3\u5b9a\u662f\u5426\u540c\u610f\u8fd9\u6b21\u8bf7\u6c42\u3002"),Object(r.b)("p",null,"\u5982\u679cOrigin\u6307\u5b9a\u7684\u6e90\uff0c\u4e0d\u5728\u8bb8\u53ef\u8303\u56f4\u5185\uff0c\u670d\u52a1\u5668\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6b63\u5e38\u7684HTTP\u56de\u5e94\u3002\u6d4f\u89c8\u5668\u53d1\u73b0\uff0c\u8fd9\u4e2a\u56de\u5e94\u7684\u5934\u4fe1\u606f\u6ca1\u6709\u5305\u542bAccess-Control-Allow-Origin\u5b57\u6bb5\uff08\u8be6\u89c1\u4e0b\u6587\uff09\uff0c\u5c31\u77e5\u9053\u51fa\u9519\u4e86\uff0c\u4ece\u800c\u6d4f\u89c8\u5668\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\uff0c\u88abXMLHttpRequest\u7684onerror\u56de\u8c03\u51fd\u6570\u6355\u83b7\u3002\u6ce8\u610f\uff0c\u8fd9\u79cd\u9519\u8bef\u65e0\u6cd5\u901a\u8fc7\u72b6\u6001\u7801\u8bc6\u522b\uff0c\u56e0\u4e3aHTTP\u56de\u5e94\u7684\u72b6\u6001\u7801\u6709\u53ef\u80fd\u662f200\u3002"),Object(r.b)("p",null,"\u5982\u679cOrigin\u6307\u5b9a\u7684\u57df\u540d\u5728\u8bb8\u53ef\u8303\u56f4\u5185\uff0c\u670d\u52a1\u5668\u8fd4\u56de\u7684Response\uff0c\u4f1a\u591a\u51fa\u51e0\u4e2a\u5934\u4fe1\u606f\u5b57\u6bb5\u3002"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{}),"Access-Control-Allow-Origin: http://api.bob.com\nAccess-Control-Allow-Credentials: true\nAccess-Control-Expose-Headers: FooBar\nContent-Type: text/html; charset=utf-8\n")),Object(r.b)("p",null,"\u4e0a\u9762\u7684\u5934\u4fe1\u606f\u4e4b\u4e2d\uff0c\u6709\u4e09\u4e2a\u4e0eCORS\u8bf7\u6c42\u76f8\u5173\u7684\u5b57\u6bb5\uff0c\u90fd\u4ee5Access-Control-\u5f00\u5934\u3002"),Object(r.b)("p",null,"\uff081\uff09Access-Control-Allow-Origin"),Object(r.b)("p",null,"\u8be5\u5b57\u6bb5\u662f\u5fc5\u987b\u7684\u3002\u5b83\u7684\u503c\u8981\u4e48\u662f\u8bf7\u6c42\u65f6Origin\u5b57\u6bb5\u7684\u503c\uff0c\u8981\u4e48\u662f\u4e00\u4e2a*\uff0c\u8868\u793a\u63a5\u53d7\u4efb\u610f\u57df\u540d\u7684\u8bf7\u6c42\u3002"),Object(r.b)("p",null,"\uff082\uff09Access-Control-Allow-Credentials"),Object(r.b)("p",null,"\u8be5\u5b57\u6bb5\u53ef\u9009\u3002\u5b83\u7684\u503c\u662f\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u662f\u5426\u5141\u8bb8\u53d1\u9001Cookie\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cCookie\u4e0d\u5305\u62ec\u5728CORS\u8bf7\u6c42\u4e4b\u4e2d\u3002\u8bbe\u4e3atrue\uff0c\u5373\u8868\u793a\u670d\u52a1\u5668\u660e\u786e\u8bb8\u53ef\uff0cCookie\u53ef\u4ee5\u5305\u542b\u5728\u8bf7\u6c42\u4e2d\uff0c\u4e00\u8d77\u53d1\u7ed9\u670d\u52a1\u5668\u3002\u8fd9\u4e2a\u503c\u4e5f\u53ea\u80fd\u8bbe\u4e3atrue\uff0c\u5982\u679c\u670d\u52a1\u5668\u4e0d\u8981\u6d4f\u89c8\u5668\u53d1\u9001Cookie\uff0c\u5220\u9664\u8be5\u5b57\u6bb5\u5373\u53ef\u3002"),Object(r.b)("p",null,"\uff083\uff09Access-Control-Expose-Headers"),Object(r.b)("p",null,"\u8be5\u5b57\u6bb5\u53ef\u9009\u3002CORS\u8bf7\u6c42\u65f6\uff0cXMLHttpRequest\u5bf9\u8c61\u7684getResponseHeader()\u65b9\u6cd5\u53ea\u80fd\u62ff\u52306\u4e2a\u57fa\u672c\u5b57\u6bb5\uff1aCache-Control\u3001Content-Language\u3001Content-Type\u3001Expires\u3001Last-Modified\u3001Pragma\u3002\u5982\u679c\u60f3\u62ff\u5230\u5176\u4ed6\u5b57\u6bb5\uff0c\u5c31\u5fc5\u987b\u5728Access-Control-Expose-Headers\u91cc\u9762\u6307\u5b9a\u3002\u4e0a\u9762\u7684\u4f8b\u5b50\u6307\u5b9a\uff0cgetResponseHeader('FooBar')\u53ef\u4ee5\u8fd4\u56deFooBar\u5b57\u6bb5\u7684\u503c\u3002"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"withCredentials \u5c5e\u6027")),Object(r.b)("p",null,"\u4e0a\u9762\u8bf4\u5230\uff0cCORS\u8bf7\u6c42\u9ed8\u8ba4\u4e0d\u53d1\u9001Cookie\u548cHTTP\u8ba4\u8bc1\u4fe1\u606f\u3002\u5982\u679c\u8981\u628aCookie\u53d1\u5230\u670d\u52a1\u5668\uff0c\u4e00\u65b9\u9762\u8981\u670d\u52a1\u5668\u540c\u610f\uff0c\u6307\u5b9aAccess-Control-Allow-Credentials\u5b57\u6bb5\u3002"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{}),"Access-Control-Allow-Credentials: true\n")),Object(r.b)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0c\u5f00\u53d1\u8005\u5fc5\u987b\u5728AJAX\u8bf7\u6c42\u4e2d\u6253\u5f00withCredentials\u5c5e\u6027\u3002"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{}),"var xhr = new XMLHttpRequest();\nxhr.withCredentials = true;\n")),Object(r.b)("p",null,"\u5426\u5219\uff0c\u5373\u4f7f\u670d\u52a1\u5668\u540c\u610f\u53d1\u9001Cookie\uff0c\u6d4f\u89c8\u5668\u4e5f\u4e0d\u4f1a\u53d1\u9001\u3002\u6216\u8005\uff0c\u670d\u52a1\u5668\u8981\u6c42\u8bbe\u7f6eCookie\uff0c\u6d4f\u89c8\u5668\u4e5f\u4e0d\u4f1a\u5904\u7406\u3002"),Object(r.b)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u7701\u7565withCredentials\u8bbe\u7f6e\uff0c\u6709\u7684\u6d4f\u89c8\u5668\u8fd8\u662f\u4f1a\u4e00\u8d77\u53d1\u9001Cookie\u3002\u8fd9\u65f6\uff0c\u53ef\u4ee5\u663e\u5f0f\u5173\u95edwithCredentials\u3002"),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{}),"xhr.withCredentials = false;\n")),Object(r.b)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u8981\u53d1\u9001Cookie\uff0cAccess-Control-Allow-Origin\u5c31\u4e0d\u80fd\u8bbe\u4e3a\u661f\u53f7\uff0c\u5fc5\u987b\u6307\u5b9a\u660e\u786e\u7684\u3001\u4e0e\u8bf7\u6c42\u7f51\u9875\u4e00\u81f4\u7684\u57df\u540d\u3002\u540c\u65f6\uff0cCookie\u4f9d\u7136\u9075\u5faa\u540c\u6e90\u653f\u7b56\uff0c\u53ea\u6709\u7528\u670d\u52a1\u5668\u57df\u540d\u8bbe\u7f6e\u7684Cookie\u624d\u4f1a\u4e0a\u4f20\uff0c\u5176\u4ed6\u57df\u540d\u7684Cookie\u5e76\u4e0d\u4f1a\u4e0a\u4f20\uff0c\u4e14\uff08\u8de8\u6e90\uff09\u539f\u7f51\u9875\u4ee3\u7801\u4e2d\u7684document.cookie\u4e5f\u65e0\u6cd5\u8bfb\u53d6\u670d\u52a1\u5668\u57df\u540d\u4e0b\u7684Cookie\u3002"),Object(r.b)("h2",{id:"\u975e\u7b80\u5355\u8bf7\u6c42"},"\u975e\u7b80\u5355\u8bf7\u6c42"),Object(r.b)("p",null,"\u975e\u7b80\u5355\u8bf7\u6c42\u662f\u90a3\u79cd\u5bf9\u670d\u52a1\u5668\u6709\u7279\u6b8a\u8981\u6c42\u7684\u8bf7\u6c42\uff0c\u6bd4\u5982\u8bf7\u6c42\u65b9\u6cd5\u662fPUT\u6216DELETE\uff0c\u6216\u8005Content-Type\u5b57\u6bb5\u7684\u7c7b\u578b\u662fapplication/json\u3002"),Object(r.b)("p",null,"\u975e\u7b80\u5355\u8bf7\u6c42\u7684CORS\u8bf7\u6c42\uff0c\u4f1a\u5728\u6b63\u5f0f\u901a\u4fe1\u4e4b\u524d\uff0c\u589e\u52a0\u4e00\u6b21HTTP\u67e5\u8be2\u8bf7\u6c42\uff0c",Object(r.b)("strong",{parentName:"p"},'\u79f0\u4e3a"\u9884\u68c0"\u8bf7\u6c42\uff08preflight\uff09'),"\u3002"),Object(r.b)("p",null,"\u6d4f\u89c8\u5668\u5148\u8be2\u95ee\u670d\u52a1\u5668\uff0c\u5f53\u524d\u7f51\u9875\u6240\u5728\u7684\u57df\u540d\u662f\u5426\u5728\u670d\u52a1\u5668\u7684\u8bb8\u53ef\u540d\u5355\u4e4b\u4e2d\uff0c\u4ee5\u53ca\u53ef\u4ee5\u4f7f\u7528\u54ea\u4e9bHTTP\u52a8\u8bcd\u548c\u5934\u4fe1\u606f\u5b57\u6bb5\u3002\u53ea\u6709\u5f97\u5230\u80af\u5b9a\u7b54\u590d\uff0c\u6d4f\u89c8\u5668\u624d\u4f1a\u53d1\u51fa\u6b63\u5f0f\u7684XMLHttpRequest\u8bf7\u6c42\uff0c\u5426\u5219\u5c31\u62a5\u9519\u3002"),Object(r.b)("p",null,"\u4f8b\u5982\u5728\u4ee3\u7801\u4e2d\uff0cHTTP\u8bf7\u6c42\u7684\u65b9\u6cd5\u662fDELETE\uff0c\u5e76\u4e14\u53d1\u9001\u4e00\u7cfb\u5217\u81ea\u5b9a\u4e49\u5934\u4fe1\u606f",Object(r.b)("inlineCode",{parentName:"p"},"authorization,x-tradeshift-actorid,x-tradeshift-app,x-tradeshift-tenantid"),"\u3002"),Object(r.b)("p",null,"\u6d4f\u89c8\u5668\u901a\u5e38\u4f1a\u53d1\u4e24\u6b21\u8bf7\u6c42\uff0c\u4e00\u6b21\u662f",Object(r.b)("strong",{parentName:"p"},"\u9884\u68c0\u8bf7\u6c42"),"\uff0c\u5f53\u5f97\u5230\u670d\u52a1\u5668\u7684\u80af\u5b9a\u7b54\u590d\u540e\u4f1a\u53c8\u53d1\u4e00\u6b21\u771f\u6b63\u7684\u8bf7\u6c42\uff1a"),Object(r.b)("p",null,Object(r.b)("img",l({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/jyd7ZJ.png",alt:null}))),Object(r.b)("p",null,'"\u9884\u68c0"\u8bf7\u6c42\u7528\u7684\u8bf7\u6c42\u65b9\u6cd5\u662f',Object(r.b)("strong",{parentName:"p"},"options"),"\uff0c\u8868\u793a\u8fd9\u4e2a\u8bf7\u6c42\u662f\u7528\u6765\u8be2\u95ee\u7684\u3002\u5934\u4fe1\u606f\u91cc\u9762\uff0c\u5173\u952e\u5b57\u6bb5\u662fOrigin\uff0c\u8868\u793a\u8bf7\u6c42\u6765\u81ea\u54ea\u4e2a\u6e90\u3002"),Object(r.b)("p",null,'\u9664\u4e86Origin\u5b57\u6bb5\uff0c"\u9884\u68c0"\u8bf7\u6c42\u7684\u5934\u4fe1\u606f\u5305\u62ec\u4e24\u4e2a\u7279\u6b8a\u5b57\u6bb5\u3002'),Object(r.b)("p",null,"\uff081\uff09Access-Control-Request-Method"),Object(r.b)("p",null,"\u8be5\u5b57\u6bb5\u662f\u5fc5\u987b\u7684\uff0c\u7528\u6765\u5217\u51fa\u6d4f\u89c8\u5668\u7684CORS\u8bf7\u6c42\u4f1a\u7528\u5230\u54ea\u4e9bHTTP\u65b9\u6cd5\uff0c\u4e0a\u4f8b\u662fDELETE\u3002"),Object(r.b)("p",null,"\uff082\uff09Access-Control-Request-Headers"),Object(r.b)("p",null,"\u8be5\u5b57\u6bb5\u662f\u4e00\u4e2a\u9017\u53f7\u5206\u9694\u7684\u5b57\u7b26\u4e32\uff0c\u6307\u5b9a\u6d4f\u89c8\u5668CORS\u8bf7\u6c42\u4f1a\u989d\u5916\u53d1\u9001\u7684\u5934\u4fe1\u606f\u5b57\u6bb5\u3002"),Object(r.b)("p",null,"\u9884\u68c0\u8bf7\u6c42\u7684\u56de\u5e94"),Object(r.b)("p",null,'\u670d\u52a1\u5668\u6536\u5230"\u9884\u68c0"\u8bf7\u6c42\u4ee5\u540e\uff0c\u68c0\u67e5\u4e86Origin\u3001Access-Control-Request-Method\u548cAccess-Control-Request-Headers\u5b57\u6bb5\u4ee5\u540e\uff0c\u786e\u8ba4\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42\uff0c\u5c31\u53ef\u4ee5\u505a\u51fa\u56de\u5e94\u3002\n',Object(r.b)("img",l({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/wBmuWq.png",alt:null}))),Object(r.b)("p",null,"\u4e0a\u9762\u7684HTTP\u56de\u5e94\u4e2d\uff0c\u5173\u952e\u7684\u662fAccess-Control-Allow-Origin\u5b57\u6bb5\uff0c\u8868\u793a",Object(r.b)("a",l({parentName:"p"},{href:"https://go.tradeshift.com%E5%8F%AF%E4%BB%A5%E8%AF%B7%E6%B1%82%E6%95%B0%E6%8D%AE%E3%80%82%E8%AF%A5%E5%AD%97%E6%AE%B5%E4%B9%9F%E5%8F%AF%E4%BB%A5%E8%AE%BE%E4%B8%BA%E6%98%9F%E5%8F%B7%EF%BC%8C%E8%A1%A8%E7%A4%BA%E5%90%8C%E6%84%8F%E4%BB%BB%E6%84%8F%E8%B7%A8%E6%BA%90%E8%AF%B7%E6%B1%82%E3%80%82"}),"https://go.tradeshift.com\u53ef\u4ee5\u8bf7\u6c42\u6570\u636e\u3002\u8be5\u5b57\u6bb5\u4e5f\u53ef\u4ee5\u8bbe\u4e3a\u661f\u53f7\uff0c\u8868\u793a\u540c\u610f\u4efb\u610f\u8de8\u6e90\u8bf7\u6c42\u3002")),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{}),"Access-Control-Allow-Origin: *\n")),Object(r.b)("p",null,'\u5982\u679c\u670d\u52a1\u5668\u5426\u5b9a\u4e86"\u9884\u68c0"\u8bf7\u6c42\uff0c\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6b63\u5e38\u7684HTTP\u56de\u5e94\uff0c\u4f46\u662f\u6ca1\u6709\u4efb\u4f55CORS\u76f8\u5173\u7684\u5934\u4fe1\u606f\u5b57\u6bb5\u3002\u8fd9\u65f6\uff0c\u6d4f\u89c8\u5668\u5c31\u4f1a\u8ba4\u5b9a\uff0c\u670d\u52a1\u5668\u4e0d\u540c\u610f\u9884\u68c0\u8bf7\u6c42\uff0c\u56e0\u6b64\u89e6\u53d1\u4e00\u4e2a\u9519\u8bef\uff0c\u88abXMLHttpRequest\u5bf9\u8c61\u7684onerror\u56de\u8c03\u51fd\u6570\u6355\u83b7\u3002\u63a7\u5236\u53f0\u4f1a\u6253\u5370\u51fa\u5982\u4e0b\u7684\u62a5\u9519\u4fe1\u606f\u3002'),Object(r.b)("p",null,"\uff081\uff09Access-Control-Allow-Methods"),Object(r.b)("p",null,'\u8be5\u5b57\u6bb5\u5fc5\u9700\uff0c\u5b83\u7684\u503c\u662f\u9017\u53f7\u5206\u9694\u7684\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8868\u660e\u670d\u52a1\u5668\u652f\u6301\u7684\u6240\u6709\u8de8\u57df\u8bf7\u6c42\u7684\u65b9\u6cd5\u3002\u6ce8\u610f\uff0c\u8fd4\u56de\u7684\u662f\u6240\u6709\u652f\u6301\u7684\u65b9\u6cd5\uff0c\u800c\u4e0d\u5355\u662f\u6d4f\u89c8\u5668\u8bf7\u6c42\u7684\u90a3\u4e2a\u65b9\u6cd5\u3002\u8fd9\u662f\u4e3a\u4e86\u907f\u514d\u591a\u6b21"\u9884\u68c0"\u8bf7\u6c42\u3002'),Object(r.b)("p",null,"\uff082\uff09Access-Control-Allow-Headers"),Object(r.b)("p",null,'\u5982\u679c\u6d4f\u89c8\u5668\u8bf7\u6c42\u5305\u62ecAccess-Control-Request-Headers\u5b57\u6bb5\uff0c\u5219Access-Control-Allow-Headers\u5b57\u6bb5\u662f\u5fc5\u9700\u7684\u3002\u5b83\u4e5f\u662f\u4e00\u4e2a\u9017\u53f7\u5206\u9694\u7684\u5b57\u7b26\u4e32\uff0c\u8868\u660e\u670d\u52a1\u5668\u652f\u6301\u7684\u6240\u6709\u5934\u4fe1\u606f\u5b57\u6bb5\uff0c\u4e0d\u9650\u4e8e\u6d4f\u89c8\u5668\u5728"\u9884\u68c0"\u4e2d\u8bf7\u6c42\u7684\u5b57\u6bb5\u3002'),Object(r.b)("p",null,"\uff083\uff09Access-Control-Allow-Credentials"),Object(r.b)("p",null,"\u8be5\u5b57\u6bb5\u4e0e\u7b80\u5355\u8bf7\u6c42\u65f6\u7684\u542b\u4e49\u76f8\u540c\u3002"),Object(r.b)("p",null,"\uff084\uff09Access-Control-Max-Age"),Object(r.b)("p",null,"\u8be5\u5b57\u6bb5\u53ef\u9009\uff0c\u7528\u6765\u6307\u5b9a\u672c\u6b21\u9884\u68c0\u8bf7\u6c42\u7684\u6709\u6548\u671f\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002\u4e0a\u9762\u7ed3\u679c\u4e2d\uff0c\u6709\u6548\u671f\u662f1h\uff083600\u79d2\uff09\uff0c\u5373\u5141\u8bb8\u7f13\u5b58\u8be5\u6761\u56de\u5e941h\uff0c\u5728\u6b64\u671f\u95f4\uff0c\u4e0d\u7528\u53d1\u51fa\u53e6\u4e00\u6761\u9884\u68c0\u8bf7\u6c42\u3002"),Object(r.b)("p",null,"\u6d4f\u89c8\u5668\u7684\u6b63\u5e38\u8bf7\u6c42\u548c\u56de\u5e94"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},'\u4e00\u65e6\u670d\u52a1\u5668\u901a\u8fc7\u4e86"\u9884\u68c0"\u8bf7\u6c42\uff0c\u6d4f\u89c8\u5668\u4f1a\u53d1\u9001\u4e00\u4e2a\u6b63\u5e38\u7684CORS\u8bf7\u6c42'),"\uff0c\u5c31\u90fd\u8ddf\u7b80\u5355\u8bf7\u6c42\u4e00\u6837\uff0c\u4f1a\u6709\u4e00\u4e2aOrigin\u5934\u4fe1\u606f\u5b57\u6bb5\u3002\u670d\u52a1\u5668\u7684\u56de\u5e94\uff0c\u4e5f\u90fd\u4f1a\u6709\u4e00\u4e2aAccess-Control-Allow-Origin\u5934\u4fe1\u606f\u5b57\u6bb5\u3002"),Object(r.b)("p",null,'\u4e0b\u9762\u662f"\u9884\u68c0"\u8bf7\u6c42\u4e4b\u540e\uff0c\u6d4f\u89c8\u5668\u7684\u6b63\u5e38CORS\u8bf7\u6c42\u3002'),Object(r.b)("p",null,Object(r.b)("img",l({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/E2onl1.png",alt:null}))),Object(r.b)("p",null,"\u4e0a\u9762\u5934\u4fe1\u606f\u7684Origin\u5b57\u6bb5\u662f\u6d4f\u89c8\u5668\u81ea\u52a8\u6dfb\u52a0\u7684\u3002\u4e0b\u9762\u662f\u670d\u52a1\u5668\u6b63\u5e38\u7684\u56de\u5e94\u3002"),Object(r.b)("p",null,Object(r.b)("img",l({parentName:"p"},{src:"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/u82c3I.png",alt:null}))),Object(r.b)("p",null,"\u4e0a\u9762\u5934\u4fe1\u606f\u4e2d\uff0cAccess-Control-Allow-Origin\u5b57\u6bb5\u662f\u6bcf\u6b21\u56de\u5e94\u90fd\u5fc5\u5b9a\u5305\u542b\u7684\u3002"),Object(r.b)("h2",{id:"cors\u8de8\u57dfdemo"},"CORS\u8de8\u57dfdemo"),Object(r.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7",Object(r.b)("inlineCode",{parentName:"p"},"git clone git@github.com:USTC-Han/cross-domain.git"),"\u5c06demo\u62f7\u8d1d\u5230\u672c\u5730\uff0c\u7136\u540e\u53c2\u8003Readme\u4e2d\u7684\u6b65\u9aa4\uff0c\u8fd0\u884c\u5176\u4e2d\u7684",Object(r.b)("inlineCode",{parentName:"p"},"1-CORS"),"\u9879\u76ee\uff0c\u67e5\u770b\u63a7\u5236\u53f0network\u4e2d\u63a5\u53e3\u7684\u5b57\u6bb5\u3002"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u6838\u5fc3\u4ee3\u7801")),Object(r.b)("pre",null,Object(r.b)("code",l({parentName:"pre"},{className:"language-js"}),"app.get('/', (req, res) => {\n    res.set('Access-Control-Allow-Origin', 'http://localhost:3000'); // \u8bbe\u7f6e\u5141\u8bb8\u8de8\u57df\u7684origin\uff0c\u5141\u8bb83000\u7aef\u53e3\u8bbf\u95ee\u672c\u7aef\u53e3\uff083001\uff09\n    res.send(\"Hello world from CROS.\");   // \u7a7a\u683c\u90e8\u5206\u4e3a\u8868\u60c5\uff0c\u53ef\u80fd\u5728\u7f16\u8f91\u5668\u4e0d\u4f1a\u663e\u793a\n});\n")))}p.isMDXComponent=!0},594:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var r=n(0),l=n.n(r),o=l.a.createContext({}),c=function(e){var t=l.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},a=function(e){var t=c(e.components);return l.a.createElement(o.Provider,{value:t},e.children)};var b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),s=c(n),i=r,O=s[a+"."+i]||s[i]||p[i]||o;return n?l.a.createElement(O,Object.assign({},{ref:t},b,{components:n})):l.a.createElement(O,Object.assign({},{ref:t},b))}));function i(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[b]="string"==typeof e?e:r,c[1]=a;for(var i=2;i<o;i++)c[i]=n[i];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);