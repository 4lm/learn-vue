(function(t){function e(e){for(var n,i,c=e[0],u=e[1],d=e[2],l=0,f=[];l<c.length;l++)i=c[l],r[i]&&f.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);s&&s(e);while(f.length)f.shift()();return a.push.apply(a,d||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var u=o[i];0!==r[u]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={app:0},a=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d288b4f1"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise(function(e,n){o=r[t]=[e,n]});e.push(o[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t),a=function(e){u.onerror=u.onload=null,clearTimeout(d);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");i.type=n,i.request=a,o[1](i)}r[t]=void 0}};var d=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=d;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),r=o.n(n);r.a},1167:function(t,e,o){"use strict";var n=o("aef3"),r=o.n(n);r.a},"1feb":function(t,e,o){"use strict";var n=o("cbe1"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("router-view")],1)},a=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("TodoList")]),o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("|\n    "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])},c=[],u={name:"Header"},d=u,l=(o("1feb"),o("2877")),s=Object(l["a"])(d,i,c,!1,null,"3f7eca73",null),f=s.exports,p={name:"app",components:{Header:f}},m=p,h=(o("034f"),Object(l["a"])(m,r,a,!1,null,null,null)),v=h.exports,b=o("8c4f"),_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("AddTodo",{on:{"add-todo":t.addTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"delete-todo":t.deleteTodo}})],1)},y=[],g=o("75fc"),T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:t.addTodo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])},j=[],w={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault();var e={title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}},x=w,O=(o("1167"),Object(l["a"])(x,T,j,!1,null,"6968b319",null)),k=O.exports,$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"delete-todo":function(o){return t.$emit("delete-todo",e.id)}}})],1)}),0)},P=[],E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-complete":t.todo.completed}},[o("p",[o("input",{attrs:{type:"checkbox"},on:{change:t.markComplete}}),t._v("\n    "+t._s(t.todo.title)+"\n    "),o("button",{staticClass:"delete",on:{click:function(e){return t.$emit("delete-todo",t.todo.id)}}},[t._v("x")])])])},C=[],A={name:"TodoItem",props:["todo"],methods:{markComplete:function(){this.todo.completed=!this.todo.completed}}},S=A,H=(o("a566"),Object(l["a"])(S,E,C,!1,null,"658bb671",null)),M=H.exports,I={name:"Todos",components:{TodoItem:M},props:["todos"]},J=I,L=Object(l["a"])(J,$,P,!1,null,"6d029ef8",null),q=L.exports,D=o("bc3a"),N=o.n(D),z={name:"home",components:{AddTodo:k,Todos:q},data:function(){return{todos:[]}},methods:{addTodo:function(t){var e=this,o=t.title,n=t.completed;N.a.post("https://jsonplaceholder.typicode.com/todos",{title:o,completed:n}).then(function(t){return e.todos=[].concat(Object(g["a"])(e.todos),[t.data])}).catch(function(t){return console.log(t)})},deleteTodo:function(t){var e=this;N.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(o){return e.todos=e.todos.filter(function(e){return e.id!==t})}).catch(function(t){return console.log(t)})}},created:function(){var t=this;N.a.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then(function(e){return t.todos=e.data}).catch(function(t){return console.log(t)})}},B=z,F=(o("cccb"),Object(l["a"])(B,_,y,!1,null,null,null)),G=F.exports;n["a"].use(b["a"]);var K=new b["a"]({routes:[{path:"/",name:"home",component:G},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}]});n["a"].config.productionTip=!1,new n["a"]({router:K,render:function(t){return t(v)}}).$mount("#app")},"64a9":function(t,e,o){},a566:function(t,e,o){"use strict";var n=o("ef03"),r=o.n(n);r.a},aef3:function(t,e,o){},cbe1:function(t,e,o){},cccb:function(t,e,o){"use strict";var n=o("d563"),r=o.n(n);r.a},d563:function(t,e,o){},ef03:function(t,e,o){}});
//# sourceMappingURL=app.6986e9d2.js.map