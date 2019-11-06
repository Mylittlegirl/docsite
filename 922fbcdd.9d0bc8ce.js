(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{531:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));n(58),n(31),n(22),n(23),n(59),n(0);var r=n(594);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o={title:"Fetch",sidebar_label:"Fetch"},c=[],l={rightToc:c},s="wrapper";function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(s,a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"XMLHttpRequest \u662f\u4e00\u4e2a\u8bbe\u8ba1\u7c97\u7cd9\u7684 API\uff0c\u4e0d\u7b26\u5408\u5173\u6ce8\u5206\u79bb\uff08Separation of Concerns\uff09\u7684\u539f\u5219\uff0c\u914d\u7f6e\u548c\u8c03\u7528\u65b9\u5f0f\u975e\u5e38\u6df7\u4e71\uff0c\u800c\u4e14\u57fa\u4e8e\u4e8b\u4ef6\u7684\u5f02\u6b65\u6a21\u578b\u5199\u8d77\u6765\u4e5f\u6ca1\u6709\u73b0\u4ee3\u7684 Promise\uff0cgenerator/yield\uff0casync/await \u53cb\u597d\u3002"),Object(r.b)("p",null,"Fetch API \u662f\u8fd1\u5e74\u6765\u88ab\u63d0\u53ca\u5c06\u8981\u53d6\u4ee3 XHR \u7684\u6280\u672f\u65b0\u6807\u51c6\uff0c\u662f\u4e00\u4e2a HTML5 \u7684 API\u3002Fetch \u5e76\u4e0d\u662f XHR \u7684\u5347\u7ea7\u7248\u672c\uff0c\u800c\u662f\u4ece\u4e00\u4e2a\u5168\u65b0\u7684\u89d2\u5ea6\u6765\u601d\u8003\u7684\u4e00\u79cd\u8bbe\u8ba1\u3002Fetch \u662f\u57fa\u4e8e Promise \u8bed\u6cd5\u7ed3\u6784\uff0c\u800c\u4e14\u5b83\u7684\u8bbe\u8ba1\u8db3\u591f\u4f4e\u9636\uff0c\u8fd9\u8868\u793a\u5b83\u53ef\u4ee5\u5728\u5b9e\u9645\u9700\u6c42\u4e2d\u8fdb\u884c\u66f4\u591a\u7684\u5f39\u6027\u8bbe\u8ba1\u3002\u5bf9\u4e8e XHR \u6240\u63d0\u4f9b\u7684\u80fd\u529b\u6765\u8bf4\uff0cFetch \u5df2\u7ecf\u8db3\u591f\u53d6\u4ee3 XHR \uff0c\u5e76\u4e14\u63d0\u4f9b\u4e86\u66f4\u591a\u62d3\u5c55\u7684\u53ef\u80fd\u6027\u3002"),Object(r.b)("p",null,"Fetch API \u89c4\u8303\u660e\u786e\u4e86\u7528\u6237\u4ee3\u7406\u83b7\u53d6\u8d44\u6e90\u7684\u8bed\u4e49\u3002\u539f\u751f\u652f\u6301 Promise\uff0c\u8c03\u7528\u65b9\u4fbf\uff0c\u7b26\u5408\u8bed\u4e49\u5316\u3002\u53ef\u914d\u5408\u4f7f\u7528 ES2016 \u4e2d\u7684 async / await \u8bed\u6cd5\uff0c\u66f4\u52a0\u4f18\u96c5\u3002"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"// \u83b7\u53d6 some.json \u8d44\u6e90\nfetch('some.json')\n  .then(function(response) {\n    return response.json();\n  })\n  .then(function(data) {\n    console.log('data', data);\n  })\n  .catch(function(error) {\n    console.log('Fetch Error: ', error);\n  });\n\n// \u91c7\u7528ES2016\u7684 async/await \u8bed\u6cd5\nasync function() {\n  try {\n    const response = await fetch('some.json');\n    const data = response.json();\n    console.log('data', data);\n  } catch (error) {\n    console.log('Fetch Error: ', error)\n  }\n}\n")),Object(r.b)("p",null,"fetch \u65b9\u6cd5\u6709\u4e24\u79cd\u8c03\u7528\u65b9\u5f0f\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"Promise fetch(String url, [, Object options]) // \u5e38\u7528\nPromise fetch(Request req, [, Object options])\n")),Object(r.b)("p",null,"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a url\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u914d\u7f6e\u4fe1\u606f\uff0c\u53ef\u9009\n\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a Request \u5bf9\u8c61\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u914d\u7f6e\u4fe1\u606f\uff0c\u53ef\u9009"),Object(r.b)("p",null,"\u53ef\u9009\u914d\u7f6e\u4fe1\u606f\u662f\u4e00\u4e2a Object \u5bf9\u8c61\uff0c\u53ef\u4ee5\u5305\u542b\u4ee5\u4e0b\u5b57\u6bb5\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"method: \u8bf7\u6c42\u7684\u65b9\u6cd5\uff0c\u4f8b\u5982\uff1aGET, POST\u3002"),Object(r.b)("li",{parentName:"ul"},"headers: \u8bf7\u6c42\u5934\u90e8\u4fe1\u606f\uff0c\u53ef\u4ee5\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u662f Headers \u7c7b\u5b9e\u4f8b\u5316\u7684\u4e00\u4e2a\u5bf9\u8c61\u3002"),Object(r.b)("li",{parentName:"ul"},"body: \u9700\u8981\u53d1\u9001\u7684\u4fe1\u606f\u5185\u5bb9\uff0c\u53ef\u4ee5\u662f Blob, BufferSource, FormData, URLSearchParams \u6216\u8005 USVString\u3002\u6ce8\u610f\uff0cGET, HEAD\u65b9\u6cd5\u4e0d\u80fd\u5305\u542bbody\u3002"),Object(r.b)("li",{parentName:"ul"},"mode: \u8bf7\u6c42\u6a21\u5f0f\uff0c\u5206\u522b\u6709 cors, no-cors, same-origin, navigate \u8fd9\u51e0\u4e2a\u53ef\u9009\u503c\u3002",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"cors: \u5141\u8bb8\u8de8\u57df\uff0c\u8981\u6c42\u54cd\u5e94\u4e2d Acess-Control-Allow-Origin \u8fd9\u6837\u7684\u5934\u90e8\u8868\u793a\u5141\u8bb8\u8de8\u57df\u3002"),Object(r.b)("li",{parentName:"ul"},"no-cors: \u53ea\u5141\u8bb8\u4f7f\u7528 HEAD, GET, POST\u65b9\u6cd5\u3002"),Object(r.b)("li",{parentName:"ul"},"same-origin: \u53ea\u5141\u8bb8\u540c\u6e90\u8bf7\u6c42\uff0c\u5426\u5219\u76f4\u63a5\u62a5\u9519\u3002"),Object(r.b)("li",{parentName:"ul"},"navigate: \u652f\u6301\u9875\u9762\u5bfc\u822a\u3002"))),Object(r.b)("li",{parentName:"ul"},"credentials: \u8868\u793a\u662f\u5426\u53d1\u9001cookie\uff0c\u6709\u4e09\u4e2a\u9009\u9879\uff1a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"omit: \u4e0d\u53d1\u9001cookie\uff082017\u5e748\u670825\u65e5\u4ee5\u524d\u9ed8\u8ba4\uff09\u3002"),Object(r.b)("li",{parentName:"ul"},"same-origin: \u4ec5\u5728\u540c\u6e90\u65f6\u53d1\u9001cookie ",Object(r.b)("strong",{parentName:"li"},"\uff08\u73b0\u5728\u9ed8\u8ba4\uff09"),"\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"include"),": \u53d1\u9001cookie\u3002"))),Object(r.b)("li",{parentName:"ul"},"cache: \u8868\u793a\u5904\u7406\u7f13\u5b58\u7684\u7b56\u7565\u3002"),Object(r.b)("li",{parentName:"ul"},"redirect: \u8868\u793a\u53d1\u751f\u91cd\u5b9a\u5411\u65f6\uff0c\u6709\u4e09\u4e2a\u9009\u9879\uff1a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"follow: \u8ddf\u968f\u3002"),Object(r.b)("li",{parentName:"ul"},"error: \u53d1\u751f\u9519\u8bef\u3002"),Object(r.b)("li",{parentName:"ul"},"manual: \u9700\u8981\u7528\u6237\u624b\u52a8\u8ddf\u968f\u3002"))),Object(r.b)("li",{parentName:"ul"},"integrity: \u5305\u542b\u4e00\u4e2a\u7528\u4e8e\u9a8c\u8bc1\u8d44\u8d44\u6e90\u5b8c\u6574\u6027\u7684\u5b57\u7b26\u4e32\u3002")),Object(r.b)("p",null,"\u4f8b\u5b50\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"\n// Example POST method implementation:\n\npostData('http://example.com/answer', {answer: 42})\n  .then(data => console.log(data)) // JSON from `response.json()` call\n  .catch(error => console.error(error))\n\nfunction postData(url, data) {\n  // Default options are marked with *\n  return fetch(url, {\n    body: JSON.stringify(data), // must match 'Content-Type' header\n    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached\n    credentials: 'same-origin', // include, same-origin, *omit\n    headers: {\n      'user-agent': 'Mozilla/4.0 MDN Example',\n      'content-type': 'application/json'\n    },\n    method: 'POST', // *GET, POST, PUT, DELETE, etc.\n    mode: 'cors', // no-cors, cors, *same-origin\n    redirect: 'follow', // manual, *follow, error\n    referrer: 'no-referrer', // *client, no-referrer\n  })\n  .then(response => response.json()) // parses response to JSON\n}\n\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Headers")),Object(r.b)("p",null,"Headers \u53ef\u7528\u6765\u8868\u793a HTTP \u7684\u5934\u90e8\u4fe1\u606f\uff0c\u4f7f\u7528 Headers \u7684\u63a5\u53e3\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Headers() \u6784\u9020\u51fd\u6570\u6765\u521b\u5efa\u4e00\u4e2a\u4f60\u81ea\u5df1\u7684 headers \u5bf9\u8c61\u3002"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),'var headers = new Headers({\n  "Content-Type": "text/plain",\n  "Content-Length": content.length.toString(),\n  "X-Custom-Header": "ProcessThisImmediately",\n});\nheaders.append("X-Custom-Header", "AnotherValue");\nheaders.has("Content-Type") // true\nheaders.getAll("X-Custom-Header"); // ["ProcessThisImmediately", "AnotherValue"]\n')),Object(r.b)("p",null,"Headers \u63d0\u4f9b append, delete, get, getAll, has, set, forEach\u7b49\u8fd9\u4e9b\u5b9e\u4f8b\u65b9\u6cd5\uff0c\u53ef\u4f9b\u5f00\u53d1\u8005\u66f4\u52a0\u7075\u6d3b\u5730\u914d\u7f6e\u8bf7\u6c42\u4e2d\u7684 headers\u3002"),Object(r.b)("p",null,"Request\nRequest \u7c7b\u7528\u4e8e\u63cf\u8ff0\u8bf7\u6c42\u5185\u5bb9\u3002\u6784\u9020\u51fd\u6570\u63a5\u53d7\u7684\u53c2\u6570\u4e0efetch\u65b9\u6cd5\u4e00\u81f4\uff0c\u8fd9\u91cc\u5c31\u4e0d\u5c55\u5f00\u4ecb\u7ecd\u4e86\u3002\u6211\u4eec\u53ef\u4ee5\u8fd9\u4e48\u7406\u89e3\uff0c\u4e8b\u5b9e\u4e0a",Object(r.b)("strong",{parentName:"p"},"fetch\u65b9\u6cd5\u5728\u8c03\u7528\u65f6\uff0c\u4f1a\u5c06\u4f20\u5165\u7684\u53c2\u6570\u6784\u9020\u51fa\u4e00\u4e2a Request \u5bf9\u8c61\u5e76\u6267\u884c"),"\u3002"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"var URL = '//api.some.com';\nvar getReq = new Request(URL, {method: 'GET', cache: 'reload'});\nfetch(getReq).then(function(response) {\n  return response.json();\n}).catch(function(error) {\n  console.log('Fetch Error: ', error);\n});\n")),Object(r.b)("p",null,"Request \u63a5\u53e3\u4e2d\u7684\u914d\u7f6e\u9879 headers \u53ef\u4ee5\u662f\u5b9e\u4f8b\u5316\u7684 Headers \u3002"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),'var URL = \'//api.some.com\';\n// \u5b9e\u4f8b\u5316 Headers\nvar headers = new Headers({\n  "Content-Type": "text/plain",\n  "Content-Length": content.length.toString(),\n  "X-Custom-Header": "ProcessThisImmediately",\n});\nvar getReq = new Request(URL, {method: \'GET\', headers: headers });\nfetch(getReq).then(function(response) {\n  return response.json();\n}).catch(function(error) {\n  console.log(\'Fetch Error: \', error);\n});\n')),Object(r.b)("p",null,"\u66f4\u4fbf\u6377\u7684\u662f\uff0cRequest \u5bf9\u8c61\u53ef\u4ee5\u4ece\u5df2\u6709\u7684 Request \u5bf9\u8c61\u4e2d\u7ee7\u627f\uff0c\u5e76\u62d3\u5c55\u65b0\u7684\u914d\u7f6e\u3002"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"var URL = '//api.some.com';\nvar getReq = new Request(URL, {method: 'GET', headers: headers });\n// \u57fa\u4e8e\u5df2\u5b58\u5728\u7684 Request \u5b9e\u4f8b\uff0c\u62d3\u5c55\u521b\u5efa\u65b0\u7684 Request \u5b9e\u4f8b\nvar postReq = new Request(getReq, {method: 'POST'});\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Response"),"\nResponse \u5b9e\u4f8b\u662f\u5728fentch()\u5904\u7406\u5b8cpromises\u4e4b\u540e\u8fd4\u56de\u7684\u3002\u5b83\u7684\u5b9e\u4f8b\u4e5f\u53ef\u7528\u901a\u8fc7JS\u6765\u521b\u5efa\uff0c\u4f46\u53ea\u6709\u5728ServiceWorkers\u4e2d\u624d\u771f\u6b63\u6709\u7528\u3002"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{}),"var res = new Response(body, init);\n")),Object(r.b)("p",null,"\u5176\u4e2d body \u53ef\u4ee5\u662f Bolb, BufferSource, FormData, URLSearchParams, USVString \u8fd9\u4e9b\u7c7b\u578b\u7684\u503c\u3002"),Object(r.b)("p",null,"init \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u53ef\u4ee5\u5305\u62ec\u4ee5\u4e0b\u8fd9\u4e9b\u5b57\u6bb5\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"status: \u54cd\u5e94\u72b6\u6001\u7801")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"statusText: \u72b6\u6001\u4fe1\u606f")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"headers: \u5934\u90e8\u4fe1\u606f\uff0c\u53ef\u4ee5\u662f\u5bf9\u8c61\u6216\u8005Headers\u5b9e\u4f8b")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Response \u5b9e\u4f8b\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u5b9e\u4f8b\u5c5e\u6027\uff0c\u5747\u662f\u53ea\u8bfb\u5c5e\u6027\uff1a")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"bodyUsed: \u7528\u4e8e\u8868\u793a\u54cd\u5e94\u5185\u5bb9\u662f\u5426\u88ab\u4f7f\u7528\u8fc7")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"headers: \u5934\u90e8\u4fe1\u606f")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"ok: \u8868\u660e\u8bf7\u6c42\u662f\u5426\u6210\u529f\uff0c\u54cd\u5e94\u72b6\u6001\u4e3a 200 ~ 299 \u65f6\uff0c\u503c\u4e3a true")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"status: \u72b6\u6001\u7801")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"statusText: \u72b6\u6001\u4fe1\u606f")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"type: \u54cd\u5e94\u7c7b\u578b")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"basic: \u540c\u6e90")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"cors: \u8de8\u57df")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"error: \u51fa\u9519")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"opaque: Request mode \u8bbe\u7f6e\u4e3a \u201cno-cors\u201d\u7684\u54cd\u5e94")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"url: \u54cd\u5e94\u5730\u5740"))),Object(r.b)("p",null,"Response \u5b9e\u4f8b\u63d0\u4f9b\u4ee5\u4e0b\u5b9e\u4f8b\u65b9\u6cd5\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"clone: \u590d\u5236\u4e00\u4e2a\u54cd\u5e94\u5bf9\u8c61\u3002"),Object(r.b)("li",{parentName:"ul"},"arrayBuffer: \u5c06\u54cd\u5e94\u6570\u636e\u8f6c\u6362\u4e3a arrayBuffer \u540e reslove \u3002"),Object(r.b)("li",{parentName:"ul"},"bolb: \u628a\u54cd\u5e94\u6570\u636e\u8f6c\u6362\u4e3a Bolb \u540e reslove \u3002"),Object(r.b)("li",{parentName:"ul"},"formData: \u628a\u54cd\u5e94\u6570\u636e\u8f6c\u6362\u4e3a formData \u540e reslove \u3002"),Object(r.b)("li",{parentName:"ul"},"json: \u628a\u54cd\u5e94\u5185\u5bb9\u89e3\u6790\u4e3a\u5bf9\u8c61\u540e reslove \u3002"),Object(r.b)("li",{parentName:"ul"},"text: \u628a\u54cd\u5e94\u6570\u636e\u5f53\u505a\u5b57\u7b26\u4e32\u540e reslove \u3002")),Object(r.b)("p",null,"\u73b0\u5728\u6d4f\u89c8\u5668\u57fa\u672c\u4e0a\u90fd\u652f\u6301\uff0cgithub \u5b98\u65b9\u63a8\u51fa\u4e86\u4e00\u4e2a Fetch API \u7684 polyfill \u5e93\uff0c\u53ef\u4ee5\u8ba9\u66f4\u591a\u6d4f\u89c8\u5668\u63d0\u524d\u611f\u53d7\u5230 Fetch API \u7684\u4fbf\u6377\u7684\u5f00\u53d1\u4f53\u9a8c\u3002"),Object(r.b)("p",null,"\u867d\u7136 Fecth API \u4f7f\u7528\u65b9\u4fbf\u7b26\u5408\u8bed\u4e49\u5316\uff0c\u4f46\u662f\u73b0\u9636\u6bb5\u5b83\u4e5f\u6709\u6240\u9650\u5236\u3002Fetch API \u662f\u57fa\u4e8e Promise\uff0c\u7531\u4e8e Promise \u6ca1\u6709\u5904\u7406 timeout \u7684\u673a\u5236\uff0c",Object(r.b)("strong",{parentName:"p"},"\u6240\u4ee5\u65e0\u6cd5\u901a\u8fc7\u539f\u751f\u65b9\u5f0f\u5904\u7406\u8bf7\u6c42\u8d85\u65f6\u540e\u7684\u4e2d\u65ad\uff0c\u548c\u8bfb\u53d6\u8fdb\u5ea6\u7684\u80fd\u529b"),"\u3002\u4f46\u662f\u76f8\u4fe1\u672a\u6765\u4e3a\u4e86\u652f\u6301\u6d41\uff0cFetch API \u6700\u7ec8\u5c06\u4f1a\u63d0\u4f9b\u53ef\u4ee5\u4e2d\u65ad\u6267\u884c\u8bfb\u53d6\u8d44\u6e90\u7684\u80fd\u529b\uff0c\u5e76\u4e14\u63d0\u4f9b\u53ef\u4ee5\u8bfb\u53d6\u8fdb\u5ea6\u7684 API\u3002"),Object(r.b)("p",null,"Fetch API \u7684\u4e00\u4e2a\u5e94\u7528\uff1a",Object(r.b)("a",a({parentName:"p"},{href:"https://github.com/muwenzi/http-chain/blob/master/src/BrowserRequest.js#L97"}),"https://github.com/muwenzi/http-chain/blob/master/src/BrowserRequest.js#L97")," "),Object(r.b)("p",null,"Fetch MDN API: ",Object(r.b)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch"}),"https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch")))}b.isMDXComponent=!0},594:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return i}));var r=n(0),a=n.n(r),o=a.a.createContext({}),c=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=c(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var s="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=c(n),i=r,u=p[l+"."+i]||p[i]||b[i]||o;return n?a.a.createElement(u,Object.assign({},{ref:t},s,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},s))}));function i(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l[s]="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);