(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{249:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var o=n(0),r=n.n(o),a=r.a.createContext({}),c=function(e){var t=r.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},p=function(e){var t=c(e.components);return r.a.createElement(a.Provider,{value:t},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),b=c(n),u=o,i=b[p+"."+u]||b[u]||s[u]||a;return n?r.a.createElement(i,Object.assign({},{ref:t},l,{components:n})):r.a.createElement(i,Object.assign({},{ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=b;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:o,c[1]=p;for(var u=2;u<a;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));n(0);var o=n(249);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={id:"context",title:"Context",sidebar_label:"Context"},p=[{value:"何时使用 Context",id:"何时使用-context",children:[]},{value:"API",id:"api",children:[{value:"React.createContext",id:"reactcreatecontext",children:[]},{value:"Context.Provider",id:"contextprovider",children:[]},{value:"Context.Consumer",id:"contextconsumer",children:[]},{value:"Context.displayName",id:"contextdisplayname",children:[]},{value:"Class.contextType",id:"classcontexttype",children:[]},{value:"useContext",id:"usecontext",children:[]}]},{value:"Examples",id:"examples",children:[{value:"使用多个 Context",id:"使用多个-context",children:[]}]},{value:"Context 在 react-redux 中的应用",id:"context-在-react-redux-中的应用",children:[]}],l={rightToc:p},s="wrapper";function b(e){var t=e.components,n=a(e,["components"]);return Object(o.b)(s,r({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性。在一个典型的 React 应用中，数据是通过 props 属性由上向下（由父及子）的进行传递的，但这对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI主题），这是应用程序中许多组件都所需要的。 Context 提供了一种在组件之间共享此类值的方式，而不必通过组件树的每个层级显式地传递 props 。"),Object(o.b)("h2",{id:"何时使用-context"},"何时使用 Context"),Object(o.b)("p",null,"Context 设计目的是为共享那些被认为对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。例如，在下面的代码中，我们通过一个 ",Object(o.b)("inlineCode",{parentName:"p"},"theme")," 属性手动调整一个按钮组件的样式："),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),'function ThemedButton(props) {\n  return <Button theme={props.theme} />;\n}\n\n// 中间组件\nfunction Toolbar(props) {\n  // Toolbar 组件必须添加一个额外的 theme 属性\n  // 然后传递它给 ThemedButton 组件\n  return (\n    <div>\n      <ThemedButton theme={props.theme} />\n    </div>\n  );\n}\n\nclass App extends React.Component {\n  render() {\n    return <Toolbar theme="dark" />;\n  }\n}\n')),Object(o.b)("p",null,"使用 context, 我可以避免通过中间元素传递 props："),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"// 创建一个 theme Context,  默认 theme 的值为 light\nconst ThemeContext = React.createContext('light');\n\nfunction ThemedButton(props) {\n  // ThemedButton 组件从 context 接收 theme\n  return (\n    <ThemeContext.Consumer>\n      {theme => <Button {...props} theme={theme} />}\n    </ThemeContext.Consumer>\n  );\n}\n\n// 中间组件\nfunction Toolbar(props) {\n  return (\n    <div>\n      <ThemedButton />\n    </div>\n  );\n}\n\nclass App extends React.Component {\n  render() {\n    return (\n      <ThemeContext.Provider value=\"dark\">\n        <Toolbar />\n      </ThemeContext.Provider>\n    );\n  }\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"注意"),"：不要仅仅为了避免在几个层级下的组件传递 props 而使用 context，它是被用于在多个层级的多个组件需要访问相同数据的情景，即 ",Object(o.b)("strong",{parentName:"p"},"组件复用")," 的场景。")),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("h3",{id:"reactcreatecontext"},"React.createContext"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"const MyContext = React.createContext(defaultValue);\n")),Object(o.b)("p",null,"创建一对 ",Object(o.b)("inlineCode",{parentName:"p"},"{ Provider, Consumer }"),"。当 React 渲染 context 组件 ",Object(o.b)("em",{parentName:"p"},"Consumer")," 时，它将从组件树的上层中最接近的匹配的 ",Object(o.b)("em",{parentName:"p"},"Provider")," 读取当前的 context 值。"),Object(o.b)("p",null,"如果上层的组件树没有一个匹配的 Provider，而此时你需要渲染一个 Consumer 组件，那么你可以用到 ",Object(o.b)("inlineCode",{parentName:"p"},"defaultValue")," 。这有助于在不封装它们的情况下对组件进行测试。"),Object(o.b)("h3",{id:"contextprovider"},"Context.Provider"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"<MyContext.Provider value={/* some value */}>\n")),Object(o.b)("p",null,"React 组件允许 Consumers 订阅 context 的改变。"),Object(o.b)("p",null,"接收一个 ",Object(o.b)("inlineCode",{parentName:"p"},"value")," 属性传递给 Provider 的后代 Consumers。",Object(o.b)("strong",{parentName:"p"},"一个 Provider 可以联系到多个 Consumers"),"。Providers 可以被嵌套以覆盖组件树内更深层次的值。"),Object(o.b)("h3",{id:"contextconsumer"},"Context.Consumer"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"<MyContext.Consumer>\n  {value => /* render something based on the context value */}\n</MyContext.Consumer>\n")),Object(o.b)("p",null,"一个可以订阅 context 变化的 React 组件。"),Object(o.b)("p",null,"接收一个",Object(o.b)("strong",{parentName:"p"},"函数作为子节点"),"（即Render Props）。 函数接收当前 context 的值并返回一个 React 节点。传递给函数的 value 将等于组件树中上层 context 的",Object(o.b)("strong",{parentName:"p"},"最近的 Provider 的 ",Object(o.b)("inlineCode",{parentName:"strong"},"value")," 属性"),"。如果 context 没有 Provider ，那么 value 参数将等于被传递给 ",Object(o.b)("inlineCode",{parentName:"p"},"createContext()")," 的 ",Object(o.b)("inlineCode",{parentName:"p"},"defaultValue")," 。"),Object(o.b)("p",null,"每当 Provider 的值发生改变时, 作为 Provider 后代的所有 Consumers 都会重新渲染。 从 Provider 到其后代的 Consumers 传播不受 ",Object(o.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," 方法的约束，因此即使祖先组件没有更新，后代 Consumer 也会被更新。"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"推荐"),"：因为内部通过使用与 ",Object(o.b)("inlineCode",{parentName:"p"},"Object.is ")," 相同的算法比较新值和旧值来确定变化。所以为了避免一些可能触发意外的渲染，可以将提升 ",Object(o.b)("inlineCode",{parentName:"p"},"value")," 到父节点的 state 里。")),Object(o.b)("p",null,"因为 context 使用 ",Object(o.b)("inlineCode",{parentName:"p"},"reference identity")," 确定何时重新渲染，在 Consumer 中，当一个 Provider 的父节点重新渲染的时候，有一些问题可能触发意外的渲染。例如下面的代码，所有的 Consumer 在 Provider 重新渲染之时，每次都将重新渲染，因为一个新的对象总是被创建对应 Provider 里的 ",Object(o.b)("inlineCode",{parentName:"p"},"value：")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"class App extends React.Component {\n  render() {\n    return (\n      <Provider value={{something: 'something'}}>\n        <Toolbar />\n      </Provider>\n    );\n  }\n}\n")),Object(o.b)("p",null,"为了防止这样, 提升 ",Object(o.b)("inlineCode",{parentName:"p"},"value")," 到父节点的 state 里:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"class App extends React.Component {\n  constructor(props) {\n    this.state = {\n      value: {something: 'something'},\n    };\n  }\n\n  render() {\n    return (\n      <Provider value={this.state.value}>\n        <Toolbar />\n      </Provider>\n    );\n  }\n}\n")),Object(o.b)("h3",{id:"contextdisplayname"},"Context.displayName"),Object(o.b)("p",null,"Context 对象接受一个 ",Object(o.b)("inlineCode",{parentName:"p"},"displayName")," 字符串属性。 React DevTools 用这个字段去来确定要为 Context 显示的内容。."),Object(o.b)("p",null,"例如, 以下组件将在 DevTools 中显示为 MyContext:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),'const MyContext = React.createContext(/* some value */);\nMyContext.displayName = \'MyDisplayName\';\n\n<MyContext.Provider> // "MyDisplayName.Provider" in DevTools\n<MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools\n')),Object(o.b)("p",null,"// TODO: add screenshots"),Object(o.b)("h3",{id:"classcontexttype"},"Class.contextType"),Object(o.b)("p",null,"可以将由 ",Object(o.b)("inlineCode",{parentName:"p"},"React.createContext()")," 创建的 context 对象赋值给 class 的 ",Object(o.b)("inlineCode",{parentName:"p"},"contextType")," 属性。 然后使用 ",Object(o.b)("inlineCode",{parentName:"p"},"this.context")," 即可拿到该值，你可以在任何生命周期方法（包括render函数）中使用 ",Object(o.b)("inlineCode",{parentName:"p"},"this.context"),"。如下例所示："),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"class MyClass extends React.Component {\n  componentDidMount() {\n    let value = this.context;\n    /* perform a side-effect at mount using the value of MyContext */\n  }\n  componentDidUpdate() {\n    let value = this.context;\n    /* ... */\n  }\n  componentWillUnmount() {\n    let value = this.context;\n    /* ... */\n  }\n  render() {\n    let value = this.context;\n    /* render something based on the value of MyContext */\n  }\n}\nMyClass.contextType = MyContext;\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"注意"),": 使用这个 API，你只能订阅单个 context。 如果你想订阅多个 context，请参阅 ",Object(o.b)("a",r({parentName:"p"},{href:"#%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA-context"}),"使用多个 Contexts"),"。")),Object(o.b)("p",null,"如果你在使用实验性的 ",Object(o.b)("inlineCode",{parentName:"p"},"public class fields")," 语法, 你可以使用 ",Object(o.b)("inlineCode",{parentName:"p"},"static class field")," 来初始化你的 ",Object(o.b)("inlineCode",{parentName:"p"},"contextType"),":"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"class MyClass extends React.Component {\n  static contextType = MyContext;\n  render() {\n    let value = this.context;\n    /* render something based on the value */\n  }\n}\n")),Object(o.b)("h3",{id:"usecontext"},"useContext"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useContext")," 是 react 中三大基础 ",Object(o.b)("a",r({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html"}),"hooks")," 之一，使用方式如下："),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"const value = useContext(MyContext);\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useContext")," 接收一个 context 对象然后返回该 context 的值。当 ",Object(o.b)("inlineCode",{parentName:"p"},"<MyContext.Provider>")," 更新时，此 Hook 将触发重新渲染。"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Tips"),": 不要忘记传入的参数是 Context。")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Correct: useContext(MyContext)"),Object(o.b)("li",{parentName:"ul"},"Incorrect: useContext(MyContext.Consumer)"),Object(o.b)("li",{parentName:"ul"},"Incorrect: useContext(MyContext.Provider)")),Object(o.b)("p",null,"当 context 值更改时，调用 useContext 的组件将始终重新渲染。如果重新渲染组件代价比较大，则可以",Object(o.b)("a",r({parentName:"p"},{href:"https://github.com/facebook/react/issues/15156#issuecomment-474590693"}),"使用 ",Object(o.b)("inlineCode",{parentName:"a"},"useMemo")," 对其进行优化"),"，其实在 react-redux 内部也是如此。"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),'function Button() {\n  let appContextValue = useContext(AppContext);\n  let theme = appContextValue.theme; // Your "selector"\n\n  return useMemo(() => {\n    // The rest of your rendering logic\n    return <ExpensiveTree className={theme} />;\n  }, [theme])\n}\n')),Object(o.b)("p",null,"另外，",Object(o.b)("inlineCode",{parentName:"p"},"useContext(MyContext)")," 仅仅用来读取 context 的值和订阅其更新，但仍然需要使用 ",Object(o.b)("inlineCode",{parentName:"p"},"<MyContext.Provider>")," 。"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Tips"),": ",Object(o.b)("inlineCode",{parentName:"p"},"useContext(MyContext)")," 等价于 class 中的 ",Object(o.b)("inlineCode",{parentName:"p"},"static contextType = MyContext")," 或者 ",Object(o.b)("inlineCode",{parentName:"p"},"<MyContext.Consumer>"),"。")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"使用多个-context"},"使用多个 Context"),Object(o.b)("p",null,"为了保持 Context 的快速渲染，React 需要使每个 context consumer 成为树中一个单独的节点:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"// Theme context, default to light theme\nconst ThemeContext = React.createContext('light');\n\n// Signed-in user context\nconst UserContext = React.createContext({\n  name: 'Guest',\n});\n\nclass App extends React.Component {\n  render() {\n    const {signedInUser, theme} = this.props;\n\n    // App component that provides initial context values\n    return (\n      <ThemeContext.Provider value={theme}>\n        <UserContext.Provider value={signedInUser}>\n          <Layout />\n        </UserContext.Provider>\n      </ThemeContext.Provider>\n    );\n  }\n}\n\nfunction Layout() {\n  return (\n    <div>\n      <Sidebar />\n      <Content />\n    </div>\n  );\n}\n\n// A component may consume multiple contexts\nfunction Content() {\n  return (\n    <ThemeContext.Consumer>\n      {theme => (\n        <UserContext.Consumer>\n          {user => (\n            <ProfilePage user={user} theme={theme} />\n          )}\n        </UserContext.Consumer>\n      )}\n    </ThemeContext.Consumer>\n  );\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"注意"),"：如果经常将两个或多个 context 值一起使用，你可以考虑使用 render props 的方法。")),Object(o.b)("p",null,"更加复杂的例子请参考：",Object(o.b)("a",r({parentName:"p"},{href:"https://reactjs.org/docs/context.html#examples"}),"https://reactjs.org/docs/context.html#examples")),Object(o.b)("h2",{id:"context-在-react-redux-中的应用"},"Context 在 react-redux 中的应用"),Object(o.b)("p",null,"其实原理机制很普通，也是应用 ",Object(o.b)("inlineCode",{parentName:"p"},"React.createContext")," 方法："),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"ReactReduxContext = React.createContext(null)\n")),Object(o.b)("p",null,"封装了一下 Provider："),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"function Provider({ store, context, children }) {\n  // ...\n  const Context = context || ReactReduxContext\n  return <Context.Provider value={contextValue}>{children}</Context.Provider>\n}\n")),Object(o.b)("p",null,"在 ",Object(o.b)("inlineCode",{parentName:"p"},"connect")," HOC 里面本质上的代码与以下实现类似："),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"function connect (mapStateToProps, mapDispatchToProps) {\n  return function wrap(WrappedComponent) {\n    return function ConnectComponent(props) {\n      return (\n        <Context.Consumer>\n          {store => (\n            <WrappedComponent\n              {...props}\n              {...mapStateToProps(store.getState(), props)}\n              {...mapDispatchToProps(store.dispatch, props)}\n            />)\n          }\n        <Context.Consumer>\n      )\n    }\n  }\n}\n")),Object(o.b)("p",null,"详细实现请参考源码：",Object(o.b)("a",r({parentName:"p"},{href:"https://github.com/reduxjs/react-redux"}),"https://github.com/reduxjs/react-redux")))}b.isMDXComponent=!0}}]);