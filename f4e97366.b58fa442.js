(window.webpackJsonp=window.webpackJsonp||[]).push([[445],{168:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));t(0);var r=t(546);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const l={id:"first-unique-character",title:"\u5b57\u7b26\u4e32\u4e2d\u7684\u7b2c\u4e00\u4e2a\u552f\u4e00\u5b57\u7b26",sidebar_label:"\u5b57\u7b26\u4e32\u4e2d\u7684\u7b2c\u4e00\u4e2a\u552f\u4e00\u5b57\u7b26"},c=[{value:"\u9898\u76ee",id:"\u9898\u76ee",children:[]},{value:"\u601d\u8def",id:"\u601d\u8def",children:[]},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",children:[]}],i={rightToc:c},o="wrapper";function u({components:e,...n}){return Object(r.b)(o,a({},i,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u9898\u6e90\uff1a\u300a\u5251\u6307Offer: \u9762\u8bd5\u9898 50\u300bP243"),Object(r.b)("li",{parentName:"ul"},"\u5728\u7ebf\uff1a",Object(r.b)("a",a({parentName:"li"},{href:"https://leetcode-cn.com/problems/first-unique-character-in-a-string/"}),"LeetCode: 387"))),Object(r.b)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),Object(r.b)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u627e\u5230\u5b83\u7684\u7b2c\u4e00\u4e2a\u4e0d\u91cd\u590d\u7684\u5b57\u7b26\uff0c\u5e76\u8fd4\u56de\u5b83\u7684\u7d22\u5f15\u3002\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de -1\u3002\u5047\u5b9a\u8be5\u5b57\u7b26\u4e32\u53ea\u5305\u542b\u5c0f\u5199\u5b57\u6bcd\u3002"),Object(r.b)("p",null,"\u793a\u4f8b:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-text"}),'\u8f93\u5165: "leetcode"\n\u8f93\u51fa: 0\n')),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-text"}),'\u8f93\u5165: "loveleetcode"\n\u8f93\u51fa: 2\n')),Object(r.b)("h2",{id:"\u601d\u8def"},"\u601d\u8def"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u4f7f\u7528\u54c8\u5e0c\u8868\uff0c\u7b2c\u4e00\u6b21\u904d\u5386\u8be5\u5b57\u7b26\u4e32\uff0c\u4ee5\u8be5\u5b57\u7b26\u4e3a key\uff0cvalue \u4e3a\u4e0b\u6807\u7d22\u5f15"),Object(r.b)("li",{parentName:"ol"},"\u5982\u679c\u51fa\u73b0\u6b21\u6570\u8d85\u8fc7\u4e00\u6b21\u5219 value \u8bbe\u4e3a -1"),Object(r.b)("li",{parentName:"ol"},"\u518d\u904d\u5386\u54c8\u5e0c\u8868\uff0c\u6216\u8005\u904d\u5386\u5b57\u7b26\u4e32\uff0c\u627e\u51fa\u7b2c\u4e00\u4e2a\u4e0d\u7b49\u4e8e -1 \u7684value\uff0c\u5373\u4e0b\u6807\u7d22\u5f15")),Object(r.b)("h2",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"function firstUniqChar (s) {\n    let hash = new Map();\n    len = s.length;\n    for (let i = 0; i < len; i++) {\n        if (hash.has(s[i])) {\n            hash.set(s[i], -1);\n        } else {\n            hash.set(s[i], i);\n        }\n    }\n    for (let [key, value] of hash) {\n        if (value !== -1) {\n            return value;\n        }\n    }\n    return -1;\n}\n")))}u.isMDXComponent=!0},546:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r),l=a.a.createContext({}),c=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=c(e.components);return a.a.createElement(l.Provider,{value:n},e.children)};var o="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),p=c(t),s=r,b=p[i+"."+s]||p[s]||u[s]||l;return t?a.a.createElement(b,Object.assign({},{ref:n},o,{components:t})):a.a.createElement(b,Object.assign({},{ref:n},o))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[o]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<l;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);