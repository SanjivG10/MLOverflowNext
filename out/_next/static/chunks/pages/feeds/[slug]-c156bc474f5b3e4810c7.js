(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{45373:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(85893),i=(n(67294),n(9008));function c(t){var e=t.title,n=t.description,c=t.ogTitle,o=t.image,s=t.url;return(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("meta",{property:"og:url",content:s}),(0,r.jsx)("meta",{property:"og:type",content:"article"}),(0,r.jsx)("meta",{property:"og:title",content:c}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:image",content:o})]})}},3628:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSP:function(){return y}});var r=n(85893),i=n(64121),c=n(26265),o=n(59999),s=n(67294),a=n(41749),u=n(41120),l=n(12079),m=n(51709),f=n(25823),p=n(7858),d=n(51235),g=n(45373);function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){(0,c.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h=(0,u.Z)((function(t){return{main:{marginTop:40},container:{display:"flex",marginRight:"auto",marginLeft:"auto",width:"100%",justifyContent:"center"},feed:{marginLeft:"auto",marginRight:"auto"},commentContainer:{marginTop:20},commentList:{}}})),y=!0;e.default=function(t){var e=t._data,n=t.comments,c=h(),u=(0,s.useState)(e),j=u[0],y=u[1],b=(0,s.useState)(n),v=b[0],O=b[1],_=(0,s.useState)(""),w=(_[0],_[1],function(t){var e=document.createElement("div");e.innerHTML=t;var n="",r=e.querySelector("img");return null!==r&&(n=r.getAttribute("src")||"/logo_white.png"),[e.textContent||e.innerText,n]}(j.text)),N=(0,i.Z)(w,2),P=N[0],Z=N[1],S={title:P?P.substr(0,100):d.Xu,description:P||d.Xu,ogTitle:P?P.substr(0,100):d.Xu,image:Z,url:p.ft+"feeds/"+"".concat(j.slug)};return(0,r.jsxs)("div",{className:c.main,children:[(0,r.jsx)(g.Z,x({},S)),(0,r.jsx)(a.Z,{container:!0,spacing:3,className:c.container,children:(0,r.jsx)(a.Z,{item:!0,sm:6,children:(0,r.jsxs)("div",{className:c.feed,children:[(0,r.jsx)(l.Z,x(x({},j),{},{editSuccess:function(t){y(t)}})),(0,r.jsx)("div",{className:c.commentContainer,children:(0,r.jsx)(m.Z,{onSuccess:function(t){var e=[t].concat((0,o.Z)(v.results)),n=x(x({},v),{},{results:e});O(n)},feedId:j.id})}),(0,r.jsx)("div",{className:c.commentList,children:(0,r.jsx)(f.Z,{comments:v})})]})})})]})}},97751:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/feeds/[slug]",function(){return n(3628)}])}},function(t){t.O(0,[774,885,487,433,82,524,636,227,152,447,128,388,494,205,823],(function(){return e=97751,t(t.s=e);var e}));var e=t.O();_N_E=e}]);