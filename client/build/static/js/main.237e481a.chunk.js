(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{115:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),o=c(19),s=c.n(o),r=(c(70),c(71),c(8)),i=c(117),l=c(122),j=c(118),d=c(119),u=c(17),b=c(20),h=c.n(b),p=c(1);var O=function(){var t=Object(n.useState)([]),e=Object(r.a)(t,2),c=e[0],a=e[1],o=function(){console.log("check"),fetch("http://localhost:5000/posts").then((function(t){return t.json()})).then((function(t){console.log(t),a(t.posts)})).catch((function(t){console.log("error !!!!!",t)}))};return Object(n.useEffect)((function(){o()}),[]),Object(p.jsxs)(i.a,{children:[Object(p.jsxs)(l.a.Group,{children:[Object(p.jsx)(l.a.Label,{children:"Search Here"}),Object(p.jsx)(l.a.Control,{type:"text",onChange:function(t){console.log(t.target.value),h.a.get("http://localhost:5000/posts").then((function(e){var c=e.data.posts.filter((function(e){return e.title.toLowerCase().includes(t.target.value)||e.description.toLowerCase().includes(t.target.value)||e.postCategory.toLowerCase().includes(t.target.value)}));a(c)})).catch((function(t){console.log(t)}))}})]}),Object(p.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Title"}),Object(p.jsx)("th",{children:"Description"}),Object(p.jsx)("th",{children:"Post Category"}),Object(p.jsx)("th",{children:"Edit"}),Object(p.jsx)("th",{children:"Delete"})]})}),Object(p.jsx)("tbody",{children:c.map((function(t){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)(u.b,{to:"/details/".concat(t._id),children:t.title})}),Object(p.jsx)("td",{dangerouslySetInnerHTML:{__html:t.description}}),Object(p.jsx)("td",{children:t.postCategory}),Object(p.jsx)("td",{children:Object(p.jsx)(d.a,{variant:"primary",as:u.b,to:"/editpost/".concat(t._id),children:"Edit"})}),Object(p.jsx)("td",{children:Object(p.jsx)(d.a,{variant:"danger",onClick:function(){return e=t._id,void(window.confirm("are you sure you want to delete")&&(h.a.delete("http://localhost:5000/posts/delete/"+e).then((function(t){console.log(t),o()})).catch((function(t){console.log(t)})),console.log("id is !!!!!!!!!!",e)));var e},children:"Delete"})})]},t._id)})}))})]})]})},x=c(7);var f=function(t){var e=Object(n.useState)({}),c=Object(r.a)(e,2),a=c[0],o=c[1];return Object(n.useEffect)((function(){fetch("http://localhost:5000/posts/details/"+t.match.params.id).then((function(t){return t.json()})).then((function(t){o(t.post)}))}),[]),Object(p.jsx)(i.a,{children:Object(p.jsxs)("div",{className:"details",children:[Object(p.jsxs)("h1",{children:["Details of ",a.title]}),Object(p.jsx)("p",{dangerouslySetInnerHTML:{__html:a.description}}),Object(p.jsx)("p",{children:a.postCategory})]})})},g=c(25),m=c(26),v=c.n(m);var y=function(t){var e=t.match.params.id,c=Object(n.useState)(),a=Object(r.a)(c,2),o=a[0],s=a[1],j=Object(n.useState)(),u=Object(r.a)(j,2),b=u[0],O=u[1],f=Object(n.useState)(),m=Object(r.a)(f,2),y=m[0],C=m[1],E=Object(x.f)();return Object(n.useEffect)((function(){h.a.get("http://localhost:5000/posts/details/".concat(e)).then((function(t){console.log(t.data.post),s(t.data.post.title),O(t.data.post.description),C(t.data.post.postCategory)})).catch((function(t){console.log(t)}))}),[]),Object(p.jsx)(i.a,{children:Object(p.jsxs)(l.a,{children:[Object(p.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(p.jsx)(l.a.Label,{children:"Enter Title"}),Object(p.jsx)(l.a.Control,{type:"email",placeholder:"Enter Title",value:o||"",onChange:function(t){s(t.target.value)}})]}),Object(p.jsxs)(l.a.Group,{className:"mb-3",children:[Object(p.jsx)(l.a.Label,{children:"Description"}),Object(p.jsx)(g.CKEditor,{editor:v.a,data:b,onReady:function(t){console.log("Editor is ready to use!",t)},onChange:function(t,e){!function(t){O(t)}(e.getData())}})]}),Object(p.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicPostCategory",children:[Object(p.jsx)(l.a.Label,{children:"Category"}),Object(p.jsx)(l.a.Control,{type:"text",placeholder:"Enter Category",value:y||"",onChange:function(t){C(t.target.value)}})]}),Object(p.jsx)(d.a,{variant:"primary",type:"submit",onClick:function(t){t.preventDefault();var c={title:o,description:b,postCategory:y};h.a.put("http://localhost:5000/posts/update/".concat(e),c).then((function(t){console.log(t),E.push("/")})).catch((function(t){console.log(t)}))},children:"Submit"})]})})};var C=function(){var t=Object(x.f)(),e=Object(n.useRef)(),c=Object(n.useRef)(),a=Object(n.useRef)(),o=Object(n.useState)(!1),s=Object(r.a)(o,2),j=s[0],u=s[1],b=Object(n.useState)(),O=Object(r.a)(b,2),f=O[0],m=O[1];return Object(p.jsxs)(i.a,{children:[Object(p.jsx)("h1",{className:"my-3 text-center",children:"Create New Post"}),Object(p.jsxs)(l.a,{validated:j,noValidate:!0,className:"justify-content-start text-left",children:[Object(p.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicTitle",children:[Object(p.jsx)(l.a.Label,{children:"Title"}),Object(p.jsx)(l.a.Control,{type:"text",placeholder:"Enter Title",ref:e,required:!0}),Object(p.jsx)(l.a.Text,{className:"text-muted",children:"Enter text of your post"}),Object(p.jsx)(l.a.Control.Feedback,{type:"invalid",children:"Please provide a valid title."})]}),Object(p.jsxs)(l.a.Group,{children:[Object(p.jsx)(l.a.Label,{children:"Description"}),Object(p.jsx)(g.CKEditor,{editor:v.a,data:f,onReady:function(t){console.log("Editor is ready to use!",t)},onChange:function(t,e){!function(t){m(t)}(e.getData())},ref:c})]}),Object(p.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicCategory",children:[Object(p.jsx)(l.a.Label,{children:"Post Category"}),Object(p.jsx)(l.a.Control,{type:"text",placeholder:"Enter Post Category",ref:a,required:!0}),Object(p.jsx)(l.a.Control.Feedback,{type:"invalid",children:"Please provide a valid state."})]}),Object(p.jsx)(d.a,{variant:"primary",type:"submit",onClick:function(c){u(!0),c.preventDefault();var n=function(t,e,c){var n={};return n.title=t?"":"title is required",n.description=e?"":"description is required",n.category=c?"":"category is required",n}(e.current.value,f,a.current.value);if(""===n.title&&""===n.description&&""===n.category){var o={title:e.current.value,description:f,postCategory:a.current.value};h.a.post("http://localhost:5000/posts/add",o).then((function(e){console.log(e),t.push("/")})).catch((function(t){console.log(t)}))}else console.log(n)},children:"Submit"})]})]})},E=c(120),L=c(121);var S=function(){return Object(p.jsx)(i.a,{children:Object(p.jsx)(E.a,{bg:"dark",expand:"lg",variant:"dark",children:Object(p.jsxs)(i.a,{children:[Object(p.jsx)(E.a.Brand,{as:u.b,to:"/",children:"Home"}),Object(p.jsxs)(L.a,{className:"me-auto",children:[Object(p.jsx)(L.a.Link,{as:u.b,to:"/createpost",children:"Create New Post"}),Object(p.jsx)(L.a.Link,{as:u.b,to:"/",children:"All Posts"})]})]})})})};var N=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(u.a,{children:[Object(p.jsx)(S,{}),Object(p.jsxs)(x.c,{children:[Object(p.jsx)(x.a,{path:"/",component:O,exact:!0}),Object(p.jsx)(x.a,{path:"/details/:id",component:f}),Object(p.jsx)(x.a,{path:"/editpost/:id",component:y}),Object(p.jsx)(x.a,{path:"/createpost",component:C})]})]})})},k=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,123)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;c(t),n(t),a(t),o(t),s(t)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root")),k()},70:function(t,e,c){}},[[115,1,2]]]);
//# sourceMappingURL=main.237e481a.chunk.js.map