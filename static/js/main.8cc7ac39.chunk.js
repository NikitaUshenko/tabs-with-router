(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(33)},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),l=n.n(c),o=n(16),i=n(17),u=n(21),s=n(18),b=n(22),m=n(7),p=n(6),d=n(5),E=n.n(d),f=function(e){var t=e.children,n=e.currentTab,a=e.handleClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t.map(function(e){return r.a.createElement(m.b,{to:"/tabs/".concat(e.props.id)},r.a.createElement("button",{type:"button",key:e.props.id,onClick:function(){return a(e.props.id)},className:n===e.props.id?"button active":"button"},e.props.title))})),r.a.createElement("div",{className:"content"},t[n-1]))};(f.Tab=function(e){var t=e.children;return r.a.createElement("div",null,t)}).propTypes={children:E.a.arrayOf(E.a.object).isRequired};var h=f,T=function(){return r.a.createElement("h1",null,"Home page")},v=(n(32),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={tabs:[{title:"Tab 1",content:"Some text 1",id:1},{title:"Tab 2",content:"Some text 2",id:2},{title:"Tab 3",content:"Some text 3",id:3}],currentTab:1},n.setCurrentTab=function(e){n.setState({currentTab:e})},n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.tabs;return r.a.createElement(m.a,null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/",exact:!0},"Home")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/tabs/".concat(this.state.currentTab)},"Tabs")))),r.a.createElement("div",null,r.a.createElement(p.a,{path:"/",exact:!0,component:T}),r.a.createElement(p.a,{path:"/tabs/:tabId",render:function(){return r.a.createElement(h,{currentTab:e.state.currentTab,handleClick:e.setCurrentTab},t.map(function(e){return r.a.createElement(h.Tab,{title:e.title,id:e.id,key:e.id},e.content)}))}})))}}]),t}(r.a.Component));l.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.8cc7ac39.chunk.js.map