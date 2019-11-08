(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{369:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return i}));n(0);var o=n(546),r=n(547);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const c={id:"context",title:"Context",sidebar_label:"Context"},l=[{value:"\u4f55\u65f6\u4f7f\u7528 Context",id:"\u4f55\u65f6\u4f7f\u7528-context",children:[]},{value:"API",id:"api",children:[{value:"React.createContext",id:"reactcreatecontext",children:[]},{value:"Context.Provider",id:"contextprovider",children:[]},{value:"Context.Consumer",id:"contextconsumer",children:[]},{value:"Context.displayName",id:"contextdisplayname",children:[]},{value:"Class.contextType",id:"classcontexttype",children:[]},{value:"useContext",id:"usecontext",children:[]}]},{value:"Examples",id:"examples",children:[{value:"\u4f7f\u7528\u591a\u4e2a Context",id:"\u4f7f\u7528\u591a\u4e2a-context",children:[]}]},{value:"Context \u5728 react-redux \u4e2d\u7684\u5e94\u7528",id:"context-\u5728-react-redux-\u4e2d\u7684\u5e94\u7528",children:[]}],s={rightToc:l},p="wrapper";function i({components:e,...t}){return Object(o.b)(p,a({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Context \u901a\u8fc7\u7ec4\u4ef6\u6811\u63d0\u4f9b\u4e86\u4e00\u4e2a\u4f20\u9012\u6570\u636e\u7684\u65b9\u6cd5\uff0c\u4ece\u800c\u907f\u514d\u4e86\u5728\u6bcf\u4e00\u4e2a\u5c42\u7ea7\u624b\u52a8\u7684\u4f20\u9012 props \u5c5e\u6027\u3002\u5728\u4e00\u4e2a\u5178\u578b\u7684 React \u5e94\u7528\u4e2d\uff0c\u6570\u636e\u662f\u901a\u8fc7 props \u5c5e\u6027\u7531\u4e0a\u5411\u4e0b\uff08\u7531\u7236\u53ca\u5b50\uff09\u7684\u8fdb\u884c\u4f20\u9012\u7684\uff0c\u4f46\u8fd9\u5bf9\u4e8e\u67d0\u4e9b\u7c7b\u578b\u7684\u5c5e\u6027\u800c\u8a00\u662f\u6781\u5176\u7e41\u7410\u7684\uff08\u4f8b\u5982\uff1a\u5730\u533a\u504f\u597d\uff0cUI\u4e3b\u9898\uff09\uff0c\u8fd9\u662f\u5e94\u7528\u7a0b\u5e8f\u4e2d\u8bb8\u591a\u7ec4\u4ef6\u90fd\u6240\u9700\u8981\u7684\u3002 Context \u63d0\u4f9b\u4e86\u4e00\u79cd\u5728\u7ec4\u4ef6\u4e4b\u95f4\u5171\u4eab\u6b64\u7c7b\u503c\u7684\u65b9\u5f0f\uff0c\u800c\u4e0d\u5fc5\u901a\u8fc7\u7ec4\u4ef6\u6811\u7684\u6bcf\u4e2a\u5c42\u7ea7\u663e\u5f0f\u5730\u4f20\u9012 props \u3002"),Object(o.b)("h2",{id:"\u4f55\u65f6\u4f7f\u7528-context"},"\u4f55\u65f6\u4f7f\u7528 Context"),Object(o.b)("p",null,"Context \u8bbe\u8ba1\u76ee\u7684\u662f\u4e3a\u5171\u4eab\u90a3\u4e9b\u88ab\u8ba4\u4e3a\u5bf9\u4e8e\u4e00\u4e2a\u7ec4\u4ef6\u6811\u800c\u8a00\u662f\u201c\u5168\u5c40\u201d\u7684\u6570\u636e\uff0c\u4f8b\u5982\u5f53\u524d\u8ba4\u8bc1\u7684\u7528\u6237\u3001\u4e3b\u9898\u6216\u9996\u9009\u8bed\u8a00\u3002\u4f8b\u5982\uff0c\u5728\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"theme")," \u5c5e\u6027\u624b\u52a8\u8c03\u6574\u4e00\u4e2a\u6309\u94ae\u7ec4\u4ef6\u7684\u6837\u5f0f\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-jsx"}),'function ThemedButton(props) {\n  return <Button theme={props.theme} />;\n}\n\n// \u4e2d\u95f4\u7ec4\u4ef6\nfunction Toolbar(props) {\n  // Toolbar \u7ec4\u4ef6\u5fc5\u987b\u6dfb\u52a0\u4e00\u4e2a\u989d\u5916\u7684 theme \u5c5e\u6027\n  // \u7136\u540e\u4f20\u9012\u5b83\u7ed9 ThemedButton \u7ec4\u4ef6\n  return (\n    <div>\n      <ThemedButton theme={props.theme} />\n    </div>\n  );\n}\n\nclass App extends React.Component {\n  render() {\n    return <Toolbar theme="dark" />;\n  }\n}\n')),Object(o.b)("p",null,"\u4f7f\u7528 context, \u6211\u53ef\u4ee5\u907f\u514d\u901a\u8fc7\u4e2d\u95f4\u5143\u7d20\u4f20\u9012 props\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"// \u521b\u5efa\u4e00\u4e2a theme Context,  \u9ed8\u8ba4 theme \u7684\u503c\u4e3a light\nconst ThemeContext = React.createContext('light');\n\nfunction ThemedButton(props) {\n  // ThemedButton \u7ec4\u4ef6\u4ece context \u63a5\u6536 theme\n  return (\n    <ThemeContext.Consumer>\n      {theme => <Button {...props} theme={theme} />}\n    </ThemeContext.Consumer>\n  );\n}\n\n// \u4e2d\u95f4\u7ec4\u4ef6\nfunction Toolbar(props) {\n  return (\n    <div>\n      <ThemedButton />\n    </div>\n  );\n}\n\nclass App extends React.Component {\n  render() {\n    return (\n      <ThemeContext.Provider value=\"dark\">\n        <Toolbar />\n      </ThemeContext.Provider>\n    );\n  }\n}\n")),Object(o.b)(r.a,{type:"warning",mdxType:"Hint"},"\u4e0d\u8981\u4ec5\u4ec5\u4e3a\u4e86\u907f\u514d\u5728\u51e0\u4e2a\u5c42\u7ea7\u4e0b\u7684\u7ec4\u4ef6\u4f20\u9012 props \u800c\u4f7f\u7528 context\uff0c\u5b83\u662f\u88ab\u7528\u4e8e\u5728\u591a\u4e2a\u5c42\u7ea7\u7684\u591a\u4e2a\u7ec4\u4ef6\u9700\u8981\u8bbf\u95ee\u76f8\u540c\u6570\u636e\u7684\u60c5\u666f\uff0c\u5373 **\u7ec4\u4ef6\u590d\u7528** \u7684\u573a\u666f\u3002"),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("h3",{id:"reactcreatecontext"},"React.createContext"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-js"}),"const MyContext = React.createContext(defaultValue);\n")),Object(o.b)("p",null,"\u521b\u5efa\u4e00\u5bf9 ",Object(o.b)("inlineCode",{parentName:"p"},"{ Provider, Consumer }"),"\u3002\u5f53 React \u6e32\u67d3 context \u7ec4\u4ef6 ",Object(o.b)("em",{parentName:"p"},"Consumer")," \u65f6\uff0c\u5b83\u5c06\u4ece\u7ec4\u4ef6\u6811\u7684\u4e0a\u5c42\u4e2d\u6700\u63a5\u8fd1\u7684\u5339\u914d\u7684 ",Object(o.b)("em",{parentName:"p"},"Provider")," \u8bfb\u53d6\u5f53\u524d\u7684 context \u503c\u3002"),Object(o.b)("p",null,"\u5982\u679c\u4e0a\u5c42\u7684\u7ec4\u4ef6\u6811\u6ca1\u6709\u4e00\u4e2a\u5339\u914d\u7684 Provider\uff0c\u800c\u6b64\u65f6\u4f60\u9700\u8981\u6e32\u67d3\u4e00\u4e2a Consumer \u7ec4\u4ef6\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u7528\u5230 ",Object(o.b)("inlineCode",{parentName:"p"},"defaultValue")," \u3002\u8fd9\u6709\u52a9\u4e8e\u5728\u4e0d\u5c01\u88c5\u5b83\u4eec\u7684\u60c5\u51b5\u4e0b\u5bf9\u7ec4\u4ef6\u8fdb\u884c\u6d4b\u8bd5\u3002"),Object(o.b)("h3",{id:"contextprovider"},"Context.Provider"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"<MyContext.Provider value={/* some value */}>\n")),Object(o.b)("p",null,"React \u7ec4\u4ef6\u5141\u8bb8 Consumers \u8ba2\u9605 context \u7684\u6539\u53d8\u3002"),Object(o.b)("p",null,"\u63a5\u6536\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"value")," \u5c5e\u6027\u4f20\u9012\u7ed9 Provider \u7684\u540e\u4ee3 Consumers\u3002",Object(o.b)("strong",{parentName:"p"},"\u4e00\u4e2a Provider \u53ef\u4ee5\u8054\u7cfb\u5230\u591a\u4e2a Consumers"),"\u3002Providers \u53ef\u4ee5\u88ab\u5d4c\u5957\u4ee5\u8986\u76d6\u7ec4\u4ef6\u6811\u5185\u66f4\u6df1\u5c42\u6b21\u7684\u503c\u3002"),Object(o.b)("h3",{id:"contextconsumer"},"Context.Consumer"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"<MyContext.Consumer>\n  {value => /* render something based on the context value */}\n</MyContext.Consumer>\n")),Object(o.b)("p",null,"\u4e00\u4e2a\u53ef\u4ee5\u8ba2\u9605 context \u53d8\u5316\u7684 React \u7ec4\u4ef6\u3002"),Object(o.b)("p",null,"\u63a5\u6536\u4e00\u4e2a",Object(o.b)("strong",{parentName:"p"},"\u51fd\u6570\u4f5c\u4e3a\u5b50\u8282\u70b9"),"\uff08\u5373Render Props\uff09\u3002 \u51fd\u6570\u63a5\u6536\u5f53\u524d context \u7684\u503c\u5e76\u8fd4\u56de\u4e00\u4e2a React \u8282\u70b9\u3002\u4f20\u9012\u7ed9\u51fd\u6570\u7684 value \u5c06\u7b49\u4e8e\u7ec4\u4ef6\u6811\u4e2d\u4e0a\u5c42 context \u7684",Object(o.b)("strong",{parentName:"p"},"\u6700\u8fd1\u7684 Provider \u7684 ",Object(o.b)("inlineCode",{parentName:"strong"},"value")," \u5c5e\u6027"),"\u3002\u5982\u679c context \u6ca1\u6709 Provider \uff0c\u90a3\u4e48 value \u53c2\u6570\u5c06\u7b49\u4e8e\u88ab\u4f20\u9012\u7ed9 ",Object(o.b)("inlineCode",{parentName:"p"},"createContext()")," \u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"defaultValue")," \u3002"),Object(o.b)("p",null,"\u6bcf\u5f53 Provider \u7684\u503c\u53d1\u751f\u6539\u53d8\u65f6, \u4f5c\u4e3a Provider \u540e\u4ee3\u7684\u6240\u6709 Consumers \u90fd\u4f1a\u91cd\u65b0\u6e32\u67d3\u3002 \u4ece Provider \u5230\u5176\u540e\u4ee3\u7684 Consumers \u4f20\u64ad\u4e0d\u53d7 ",Object(o.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," \u65b9\u6cd5\u7684\u7ea6\u675f\uff0c\u56e0\u6b64\u5373\u4f7f\u7956\u5148\u7ec4\u4ef6\u6ca1\u6709\u66f4\u65b0\uff0c\u540e\u4ee3 Consumer \u4e5f\u4f1a\u88ab\u66f4\u65b0\u3002"),Object(o.b)(r.a,{type:"best",mdxType:"Hint"},"\u56e0\u4e3a\u5185\u90e8\u901a\u8fc7\u4f7f\u7528\u4e0e `Object.is ` \u76f8\u540c\u7684\u7b97\u6cd5\u6bd4\u8f83\u65b0\u503c\u548c\u65e7\u503c\u6765\u786e\u5b9a\u53d8\u5316\u3002\u6240\u4ee5\u4e3a\u4e86\u907f\u514d\u4e00\u4e9b\u53ef\u80fd\u89e6\u53d1\u610f\u5916\u7684\u6e32\u67d3\uff0c\u53ef\u4ee5\u5c06\u63d0\u5347 `value` \u5230\u7236\u8282\u70b9\u7684 state \u91cc\u3002"),Object(o.b)("p",null,"\u56e0\u4e3a context \u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"reference identity")," \u786e\u5b9a\u4f55\u65f6\u91cd\u65b0\u6e32\u67d3\uff0c\u5728 Consumer \u4e2d\uff0c\u5f53\u4e00\u4e2a Provider \u7684\u7236\u8282\u70b9\u91cd\u65b0\u6e32\u67d3\u7684\u65f6\u5019\uff0c\u6709\u4e00\u4e9b\u95ee\u9898\u53ef\u80fd\u89e6\u53d1\u610f\u5916\u7684\u6e32\u67d3\u3002\u4f8b\u5982\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u6240\u6709\u7684 Consumer \u5728 Provider \u91cd\u65b0\u6e32\u67d3\u4e4b\u65f6\uff0c\u6bcf\u6b21\u90fd\u5c06\u91cd\u65b0\u6e32\u67d3\uff0c\u56e0\u4e3a\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\u603b\u662f\u88ab\u521b\u5efa\u5bf9\u5e94 Provider \u91cc\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"value\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"class App extends React.Component {\n  render() {\n    return (\n      <Provider value={{something: 'something'}}>\n        <Toolbar />\n      </Provider>\n    );\n  }\n}\n")),Object(o.b)("p",null,"\u4e3a\u4e86\u9632\u6b62\u8fd9\u6837, \u63d0\u5347 ",Object(o.b)("inlineCode",{parentName:"p"},"value")," \u5230\u7236\u8282\u70b9\u7684 state \u91cc:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"class App extends React.Component {\n  constructor(props) {\n    this.state = {\n      value: {something: 'something'},\n    };\n  }\n\n  render() {\n    return (\n      <Provider value={this.state.value}>\n        <Toolbar />\n      </Provider>\n    );\n  }\n}\n")),Object(o.b)("h3",{id:"contextdisplayname"},"Context.displayName"),Object(o.b)("p",null,"Context \u5bf9\u8c61\u63a5\u53d7\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"displayName")," \u5b57\u7b26\u4e32\u5c5e\u6027\u3002 React DevTools \u7528\u8fd9\u4e2a\u5b57\u6bb5\u53bb\u6765\u786e\u5b9a\u8981\u4e3a Context \u663e\u793a\u7684\u5185\u5bb9\u3002."),Object(o.b)("p",null,"\u4f8b\u5982, \u4ee5\u4e0b\u7ec4\u4ef6\u5c06\u5728 DevTools \u4e2d\u663e\u793a\u4e3a MyContext:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-jsx"}),'const MyContext = React.createContext(/* some value */);\nMyContext.displayName = \'MyDisplayName\';\n\n<MyContext.Provider> // "MyDisplayName.Provider" in DevTools\n<MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools\n')),Object(o.b)("p",null,"// TODO: add screenshots"),Object(o.b)("h3",{id:"classcontexttype"},"Class.contextType"),Object(o.b)("p",null,"\u53ef\u4ee5\u5c06\u7531 ",Object(o.b)("inlineCode",{parentName:"p"},"React.createContext()")," \u521b\u5efa\u7684 context \u5bf9\u8c61\u8d4b\u503c\u7ed9 class \u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"contextType")," \u5c5e\u6027\u3002 \u7136\u540e\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"this.context")," \u5373\u53ef\u62ff\u5230\u8be5\u503c\uff0c\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u751f\u547d\u5468\u671f\u65b9\u6cd5\uff08\u5305\u62ecrender\u51fd\u6570\uff09\u4e2d\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"this.context"),"\u3002\u5982\u4e0b\u4f8b\u6240\u793a\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"class MyClass extends React.Component {\n  componentDidMount() {\n    let value = this.context;\n    /* perform a side-effect at mount using the value of MyContext */\n  }\n  componentDidUpdate() {\n    let value = this.context;\n    /* ... */\n  }\n  componentWillUnmount() {\n    let value = this.context;\n    /* ... */\n  }\n  render() {\n    let value = this.context;\n    /* render something based on the value of MyContext */\n  }\n}\nMyClass.contextType = MyContext;\n")),Object(o.b)(r.a,{type:"warning",mdxType:"Hint"},"\u4f7f\u7528\u8fd9\u4e2a API\uff0c\u4f60\u53ea\u80fd\u8ba2\u9605\u5355\u4e2a context\u3002 \u5982\u679c\u4f60\u60f3\u8ba2\u9605\u591a\u4e2a context\uff0c\u8bf7\u53c2\u9605 [\u4f7f\u7528\u591a\u4e2a Contexts](#\u4f7f\u7528\u591a\u4e2a-context)\u3002"),Object(o.b)("p",null,"\u5982\u679c\u4f60\u5728\u4f7f\u7528\u5b9e\u9a8c\u6027\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"public class fields")," \u8bed\u6cd5, \u4f60\u53ef\u4ee5\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"static class field")," \u6765\u521d\u59cb\u5316\u4f60\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"contextType"),":"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"class MyClass extends React.Component {\n  static contextType = MyContext;\n  render() {\n    let value = this.context;\n    /* render something based on the value */\n  }\n}\n")),Object(o.b)("h3",{id:"usecontext"},"useContext"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useContext")," \u662f react \u4e2d\u4e09\u5927\u57fa\u7840 ",Object(o.b)("a",a({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html"}),"hooks")," \u4e4b\u4e00\uff0c\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"const value = useContext(MyContext);\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useContext")," \u63a5\u6536\u4e00\u4e2a context \u5bf9\u8c61\u7136\u540e\u8fd4\u56de\u8be5 context \u7684\u503c\u3002\u5f53 ",Object(o.b)("inlineCode",{parentName:"p"},"<MyContext.Provider>")," \u66f4\u65b0\u65f6\uff0c\u6b64 Hook \u5c06\u89e6\u53d1\u91cd\u65b0\u6e32\u67d3\u3002"),Object(o.b)(r.a,{type:"tip",mdxType:"Hint"},"\u4e0d\u8981\u5fd8\u8bb0\u4f20\u5165\u7684\u53c2\u6570\u662f Context\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Correct: useContext(MyContext)"),Object(o.b)("li",{parentName:"ul"},"Incorrect: useContext(MyContext.Consumer)"),Object(o.b)("li",{parentName:"ul"},"Incorrect: useContext(MyContext.Provider)")),Object(o.b)("p",null,"\u5f53 context \u503c\u66f4\u6539\u65f6\uff0c\u8c03\u7528 useContext \u7684\u7ec4\u4ef6\u5c06\u59cb\u7ec8\u91cd\u65b0\u6e32\u67d3\u3002\u5982\u679c\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u4ee3\u4ef7\u6bd4\u8f83\u5927\uff0c\u5219\u53ef\u4ee5",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/facebook/react/issues/15156#issuecomment-474590693"}),"\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"a"},"useMemo")," \u5bf9\u5176\u8fdb\u884c\u4f18\u5316"),"\uff0c\u5176\u5b9e\u5728 react-redux \u5185\u90e8\u4e5f\u662f\u5982\u6b64\u3002"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-jsx"}),'function Button() {\n  let appContextValue = useContext(AppContext);\n  let theme = appContextValue.theme; // Your "selector"\n\n  return useMemo(() => {\n    // The rest of your rendering logic\n    return <ExpensiveTree className={theme} />;\n  }, [theme])\n}\n')),Object(o.b)("p",null,"\u53e6\u5916\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"useContext(MyContext)")," \u4ec5\u4ec5\u7528\u6765\u8bfb\u53d6 context \u7684\u503c\u548c\u8ba2\u9605\u5176\u66f4\u65b0\uff0c\u4f46\u4ecd\u7136\u9700\u8981\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"<MyContext.Provider>")," \u3002"),Object(o.b)(r.a,{type:"tip",mdxType:"Hint"},"`useContext(MyContext)` \u7b49\u4ef7\u4e8e class \u4e2d\u7684 `static contextType = MyContext` \u6216\u8005 `MyContext.Consumer`\u3002"),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"\u4f7f\u7528\u591a\u4e2a-context"},"\u4f7f\u7528\u591a\u4e2a Context"),Object(o.b)("p",null,"\u4e3a\u4e86\u4fdd\u6301 Context \u7684\u5feb\u901f\u6e32\u67d3\uff0cReact \u9700\u8981\u4f7f\u6bcf\u4e2a context consumer \u6210\u4e3a\u6811\u4e2d\u4e00\u4e2a\u5355\u72ec\u7684\u8282\u70b9:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"// Theme context, default to light theme\nconst ThemeContext = React.createContext('light');\n\n// Signed-in user context\nconst UserContext = React.createContext({\n  name: 'Guest',\n});\n\nclass App extends React.Component {\n  render() {\n    const {signedInUser, theme} = this.props;\n\n    // App component that provides initial context values\n    return (\n      <ThemeContext.Provider value={theme}>\n        <UserContext.Provider value={signedInUser}>\n          <Layout />\n        </UserContext.Provider>\n      </ThemeContext.Provider>\n    );\n  }\n}\n\nfunction Layout() {\n  return (\n    <div>\n      <Sidebar />\n      <Content />\n    </div>\n  );\n}\n\n// A component may consume multiple contexts\nfunction Content() {\n  return (\n    <ThemeContext.Consumer>\n      {theme => (\n        <UserContext.Consumer>\n          {user => (\n            <ProfilePage user={user} theme={theme} />\n          )}\n        </UserContext.Consumer>\n      )}\n    </ThemeContext.Consumer>\n  );\n}\n")),Object(o.b)(r.a,{type:"warning",mdxType:"Hint"},"\u5982\u679c\u7ecf\u5e38\u5c06\u4e24\u4e2a\u6216\u591a\u4e2a context \u503c\u4e00\u8d77\u4f7f\u7528\uff0c\u4f60\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 render props \u7684\u65b9\u6cd5\u3002"),Object(o.b)("p",null,"\u66f4\u52a0\u590d\u6742\u7684\u4f8b\u5b50\u8bf7\u53c2\u8003\uff1a",Object(o.b)("a",a({parentName:"p"},{href:"https://reactjs.org/docs/context.html#examples"}),"https://reactjs.org/docs/context.html#examples")),Object(o.b)("h2",{id:"context-\u5728-react-redux-\u4e2d\u7684\u5e94\u7528"},"Context \u5728 react-redux \u4e2d\u7684\u5e94\u7528"),Object(o.b)("p",null,"\u5176\u5b9e\u539f\u7406\u673a\u5236\u5f88\u666e\u901a\uff0c\u4e5f\u662f\u5e94\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"React.createContext")," \u65b9\u6cd5\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-js"}),"ReactReduxContext = React.createContext(null)\n")),Object(o.b)("p",null,"\u5c01\u88c5\u4e86\u4e00\u4e0b Provider\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"function Provider({ store, context, children }) {\n  // ...\n  const Context = context || ReactReduxContext\n  return <Context.Provider value={contextValue}>{children}</Context.Provider>\n}\n")),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"connect")," HOC \u91cc\u9762\u672c\u8d28\u4e0a\u7684\u4ee3\u7801\u4e0e\u4ee5\u4e0b\u5b9e\u73b0\u7c7b\u4f3c\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"function connect (mapStateToProps, mapDispatchToProps) {\n  return function wrap(WrappedComponent) {\n    return function ConnectComponent(props) {\n      return (\n        <Context.Consumer>\n          {store => (\n            <WrappedComponent\n              {...props}\n              {...mapStateToProps(store.getState(), props)}\n              {...mapDispatchToProps(store.dispatch, props)}\n            />)\n          }\n        <Context.Consumer>\n      )\n    }\n  }\n}\n")),Object(o.b)("p",null,"\u8be6\u7ec6\u5b9e\u73b0\u8bf7\u53c2\u8003\u6e90\u7801\uff1a",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/reduxjs/react-redux"}),"https://github.com/reduxjs/react-redux")))}i.isMDXComponent=!0},547:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(549),c=n.n(a);n(548);const l={best:{name:"\u63a8\u8350",color:"#50c610",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#50c610"}},r.a.createElement("g",null,r.a.createElement("path",{d:"M22 11.07V12a10 10 0 1 1-5.93-9.14"}),r.a.createElement("polyline",{points:"23 3 12 14 9 11"})))},must:{name:"\u5f3a\u5236",color:"#ff4642",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"#ff4642",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",stroke:"none",className:"custom-hint__icon"},r.a.createElement("g",null,r.a.createElement("path",{d:"M512 992c-262.4 0-480-217.6-480-480 0-262.4 217.6-480 480-480s480 217.6 480 480C992 774.4 774.4 992 512 992zM512 108.8C288 108.8 108.8 288 108.8 512c0 224 179.2 403.2 403.2 403.2s403.2-179.2 403.2-403.2C915.2 288 736 108.8 512 108.8zM697.6 684.8l-12.8 12.8c-6.4 6.4-19.2 6.4-25.6 0L512 550.4l-140.8 140.8c-6.4 6.4-19.2 6.4-25.6 0l-12.8-12.8c-6.4-6.4-6.4-19.2 0-25.6L473.6 512 326.4 371.2C320 358.4 320 345.6 326.4 339.2l12.8-12.8C345.6 320 358.4 320 371.2 326.4L512 473.6l140.8-140.8c6.4-6.4 19.2-6.4 25.6 0l12.8 12.8c6.4 6.4 6.4 19.2 0 25.6L550.4 512l140.8 140.8C704 665.6 704 678.4 697.6 684.8z"})))},tip:{name:"\u63d0\u793a",color:"#3884ff",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"none",className:"custom-hint__icon",style:{color:"#3884ff"}},r.a.createElement("g",null,r.a.createElement("path",{d:"M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11",fillRule:"evenodd"})))},warning:{name:"\u6ce8\u610f",color:"#fdbe12",icon:r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"custom-hint__icon",style:{color:"#fdbe12"}},r.a.createElement("g",null,r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"16"})))}};t.a=function({type:e,children:t}){return r.a.createElement("div",{className:"custom-hint",style:{borderLeft:"4px solid "+l[e].color}},r.a.createElement("div",{style:{float:"left"}},l[e].icon),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c()("<strong>"+l[e].name+"</strong>\uff1a"+t)}}))}},548:function(e,t,n){}}]);