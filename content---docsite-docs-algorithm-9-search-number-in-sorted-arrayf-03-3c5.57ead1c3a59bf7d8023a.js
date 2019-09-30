(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{271:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r),i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var o="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,f=d[c+"."+b]||d[b]||u[b]||i;return n?a.a.createElement(f,Object.assign({},{ref:t},o,{components:n})):a.a.createElement(f,Object.assign({},{ref:t},o))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[o]="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));n(0);var r=n(271);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l={id:"number-in-sorted-array",title:"有序数组中某数字出现的次数",sidebar_label:"有序数组中某数字出现的次数"},c=[{value:"题目",id:"题目",children:[]},{value:"思路",id:"思路",children:[]},{value:"特殊测试",id:"特殊测试",children:[]},{value:"代码实现",id:"代码实现",children:[]},{value:"拓展",id:"拓展",children:[]}],o={rightToc:c},u="wrapper";function d(e){var t=e.components,n=i(e,["components"]);return Object(r.b)(u,a({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"题源：《剑指Offer: 面试题 53-1》P263"),Object(r.b)("li",{parentName:"ul"},"在线：",Object(r.b)("a",a({parentName:"li"},{href:"https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/"}),"LeetCode: 34"))),Object(r.b)("h2",{id:"题目"},"题目"),Object(r.b)("p",null,"输入一个单调递增的数组和一个数字，统计这个数字在数组中出现的次数。例如："),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-text"}),"输入: [1,2,3,3,3,3,4,5], 3\n输出: 4\n")),Object(r.b)("h2",{id:"思路"},"思路"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"最容易想到用一个变量去循环统计该值出现的次数，时间复杂度为 O(n)"),Object(r.b)("li",{parentName:"ol"},"如果用首尾双指针的话，时间复杂度为 O(n)"),Object(r.b)("li",{parentName:"ol"},"用二分查找可以将时间复杂度降低至 O(logn)"),Object(r.b)("li",{parentName:"ol"},"二分查找可以分两次进行找第一个位置和最后一个位置"),Object(r.b)("li",{parentName:"ol"},"注意二分查找没有查找到返回什么值")),Object(r.b)("h2",{id:"特殊测试"},"特殊测试"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"数组中没有要查找的值"),Object(r.b)("li",{parentName:"ul"},"查找的是最大值或者最小值"),Object(r.b)("li",{parentName:"ul"},"数组只有一个元素"),Object(r.b)("li",{parentName:"ul"},"空数组")),Object(r.b)("h2",{id:"代码实现"},"代码实现"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"function getNumberOfK (data, k) {\n    let firstK = getFirstK(data, k);\n    let lastK = getLastK(data, k);\n    if (firstK === -1 || lastK === -1) {\n        return 0;\n    }\n    return lastK - firstK + 1;\n}\n\nfunction getFirstK (data, k) {\n    let left = 0;\n    let right = data.length - 1;\n    while (left <= right) {\n        let mid = left + (right - left >> 1);\n        if (data[mid] === k) {\n            if (data[mid - 1] !== k) {\n                return mid;\n            } else {\n                right = mid - 1;\n                continue;\n            }\n        }\n        if (data[mid] > k) {\n            right = mid - 1;\n        } else {\n            left = mid + 1;\n        }\n    }\n    return -1;\n}\n\nfunction getLastK (data, k) {\n    let left = 0;\n    let right = data.length - 1;\n    while (left <= right) {\n        let mid = left + (right - left >> 1);\n        if (data[mid] === k) {\n            if (data[mid + 1] !== k) {\n                return mid;\n            } else {\n                left = mid + 1;\n                continue;\n            }\n        }\n        if (data[mid] > k) {\n            right = mid - 1;\n        } else {\n            left = mid + 1;\n        }\n    }\n    return -1;\n}\n")),Object(r.b)("h2",{id:"拓展"},"拓展"),Object(r.b)("p",null,"可以思考一下二分查找的递归版。"))}d.isMDXComponent=!0}}]);