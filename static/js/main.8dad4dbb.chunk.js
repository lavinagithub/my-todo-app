(this["webpackJsonpmy-todo-app"]=this["webpackJsonpmy-todo-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),c=n(4),i=n.n(c),d=n(5),r=n(6),l=n(2),s=n(8),h=n(7),u=n(0);var p=function(e){return Object(u.jsxs)("div",{className:"todo-item",children:[Object(u.jsx)("input",{type:"checkbox",checked:e.item.completed,onChange:function(){return e.handleChange(e.item.id)}}),Object(u.jsx)("p",{style:e.item.completed?{fontStyle:"italic",color:"grey",textDecoration:"line-through"}:null,children:e.item.text})]})},m=(n(14),[{id:1,text:"Take out the trash",completed:!0},{id:2,text:"Grocery shopping",completed:!1},{id:3,text:"Clean fish tank",completed:!1},{id:4,text:"Mow the lawn",completed:!1},{id:5,text:"Learn React",completed:!0},{id:6,text:"Take Rest",completed:!1}]),j=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={todos:m},e.handleChange=e.handleChange.bind(Object(l.a)(e)),e}return Object(r.a)(n,[{key:"handleChange",value:function(e){this.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))}}))}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return Object(u.jsx)(p,{item:t,handleChange:e.handleChange},t.id)}));return Object(u.jsx)("div",{className:"todo-list",children:t})}}]),n}(a.a.Component);i.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8dad4dbb.chunk.js.map