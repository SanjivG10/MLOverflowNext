(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{46452:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(85893),i=n(67294),o=n(809),a=n.n(o),s=n(59999),l=n(64121),c=n(92447),u=n(26265),d=n(41120),f=n(87623),g=n(12079),m=n(41664),p=n(41749),h=n(282),x=n(58533),v=n(66061),j=n(14016),b=n(23849);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=(0,d.Z)((function(e){return(0,f.Z)({main:{},root:{display:"flex",flexWrap:"wrap",backgroundColor:e.palette.background.paper},feed:{margin:10},mainLabel:{marginLeft:"auto",marginRight:"auto",fontSize:40,textAlign:"center","&:hover":{cursor:"pointer"},width:"fit-content"},moreButton:{width:"fit-content",marginLeft:"auto",marginRight:"auto"},seeMore:{fontSize:16},noFeedLabel:{margin:10,fontStyle:"italic",textAlign:"center",marginLeft:"auto",marginRight:"auto",fontSize:20,fontWeight:"bold"}})}));function k(e){var t,n,o,u,d,f=e.originalFeed,y=e.data,k=e.home,N=O(),Z=(0,i.useState)(y),P=Z[0],S=Z[1];(0,i.useEffect)((function(){y&&S(y)}),[y]);var L=function(e){var t=P.results.filter((function(t){return t.slug!==e}));S(w(w({},P),{},{results:t}))},R=function(e){for(var t=w({},P),n=0;n<t.results.length;n++){t.results[n].id===e.id&&(t.results[n]=e)}S(t)},E=function(){var e=(0,c.Z)(a().mark((function e(){var t,n,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===P||void 0===P||null===(t=P.links)||void 0===t||!t.next){e.next=8;break}return e.next=3,(0,j.XD)(P.links.next);case 3:n=e.sent,r=(0,l.Z)(n,2),i=r[0],r[1],(0,b.xb)(i)||S(w(w({},i),{},{results:[].concat((0,s.Z)(P.results),(0,s.Z)(i.results))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)("div",{className:N.main,children:[!f&&(0,r.jsx)(m.default,{href:"/feeds",children:(0,r.jsx)("h1",{className:N.mainLabel,children:"Feeds"})}),(0,r.jsxs)(x.Z,{dataLength:(null===P||void 0===P||null===(t=P.results)||void 0===t?void 0:t.length)||0,next:E,hasMore:Boolean(null===P||void 0===P||null===(n=P.links)||void 0===n?void 0:n.next)||!1,loader:(0,r.jsx)(v.Z,{}),children:[" ",(0,r.jsxs)(p.Z,{container:!0,className:N.root,children:[0===(null===P||void 0===P||null===(o=P.results)||void 0===o?void 0:o.length)&&(0,r.jsx)("div",{className:N.noFeedLabel,children:"no posts found"}),null===P||void 0===P||null===(u=P.results)||void 0===u?void 0:u.map((function(e){return(0,r.jsx)(p.Z,{item:!0,xs:12,sm:12,md:6,lg:6,xl:4,children:(0,r.jsx)("div",{className:N.feed,children:(0,i.createElement)(g.Z,w(w({home:k},e),{},{editSuccessFromList:R,key:e.id,updateOnDelete:L}))},e.id)},e.id)}))]})]}),!f&&(null===P||void 0===P||null===(d=P.results)||void 0===d?void 0:d.length)>0&&(0,r.jsx)(m.default,{href:"/feeds",children:(0,r.jsx)("div",{className:N.moreButton,children:(0,r.jsx)(h.Z,{color:"secondary",className:N.seeMore,children:"SEE MORE"})})})]})}},45373:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(85893),i=(n(67294),n(9008));function o(e){var t=e.title,n=e.description,o=e.ogTitle,a=e.image,s=e.url;return(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{property:"og:url",content:s}),(0,r.jsx)("meta",{property:"og:type",content:"article"}),(0,r.jsx)("meta",{property:"og:title",content:o}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:image",content:a})]})}},49965:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(85893),i=n(26265),o=n(67294),a=n(41120),s=n(87623),l=n(62822),c=n(23849),u=(0,a.Z)((function(e){return(0,s.Z)({root:{display:"flex",flexDirection:"column",backgroundColor:e.palette.background.paper,marginBottom:40,"&:hover":{cursor:"pointer"},boxShadow:"2px 2px 2px 2px #DAE0E6",padding:10},value:{marginLeft:10},title:{fontSize:18,fontWeight:"bolder"},abstract:{fontSize:16,overflow:"hidden"},link:{textDecoration:"none"},codes:{},icon:{width:24,height:24,padding:2},eachRow:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:5},langIcon:{marginLeft:10,height:20,width:20}})})),d=function(e){var t=e.title,n=e.abstract,i=e.link,o=e.codes,a=u();return(0,r.jsxs)("div",{className:a.root,children:[(0,r.jsx)("div",{className:a.title,children:(0,r.jsxs)("div",{className:a.eachRow,children:[(0,r.jsx)("img",{alt:"",className:a.icon,src:"/title.svg"}),(0,r.jsx)("div",{className:"".concat(a.title," ").concat(a.value),children:t&&t.toUpperCase()})]})}),(0,r.jsxs)("div",{className:a.eachRow,children:[(0,r.jsx)("img",{alt:"",className:a.icon,src:"/abstract.svg"}),(0,r.jsx)("div",{className:"".concat(a.abstract," ").concat(a.value),children:(0,c.Pq)(n,200)})]}),(0,r.jsxs)("div",{className:a.eachRow,children:[(0,r.jsx)("img",{alt:"",className:a.icon,src:"/link.svg"}),(0,r.jsx)("a",{href:i,target:"_blank",rel:"noreferer nofollow",className:"".concat(a.link," ").concat(a.value),children:i})]}),o&&o.length>0&&o[0].link&&o[0].language&&(0,r.jsxs)("div",{className:a.eachRow,children:[(0,r.jsx)("img",{alt:"",className:a.icon,src:"/code.svg"}),(0,r.jsx)("a",{href:i,target:"_blank",rel:"noreferer nofollow",className:"".concat(a.link," ").concat(a.value),children:o[0].link}),o[0].language&&(0,r.jsx)("img",{alt:"",className:a.langIcon,src:"/".concat(o[0].language,".svg")})]})]})},f=n(41664),g=n(282),m=n(11163);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=(0,a.Z)((function(e){return(0,s.Z)({root:{backgroundColor:e.palette.background.paper,marginTop:40},nested:{paddingLeft:e.spacing(4)},noPaper:{textAlign:"center",marginLeft:"auto",marginRight:"auto",fontSize:20,fontStyle:"italic"},mainLabel:{fontSize:40,marginLeft:"auto",marginRight:"auto",width:"fit-content","&:hover":{cursor:"pointer"}},moreButton:{width:"fit-content",marginLeft:"auto",marginRight:"auto"},seeMore:{fontSize:16}})}));function v(e){var t,n,i,a=e.original,s=e.data,c=x(),u=(0,m.useRouter)(),p=(0,o.useState)(s),v=p[0],j=p[1];return(0,o.useEffect)((function(){s&&j(s)}),[s]),(0,r.jsxs)(r.Fragment,{children:[!a&&(0,r.jsx)(f.default,{href:"/papers",children:(0,r.jsx)("h1",{className:c.mainLabel,children:"Papers"})}),(0,r.jsxs)(l.Z,{component:"nav","aria-labelledby":"nested-list-subheader",className:c.root,children:[0===(null===v||void 0===v||null===(t=v.results)||void 0===t?void 0:t.length)&&(0,r.jsx)("h3",{className:c.noPaper,children:"no paper found"}),null===v||void 0===v||null===(n=v.results)||void 0===n?void 0:n.map((function(e){return(0,r.jsx)("div",{onClick:function(){return u.push("/papers/".concat(e.slug))},children:(0,r.jsx)(d,h({},e))},e.id)}))]}),!a&&(null===v||void 0===v||null===(i=v.results)||void 0===i?void 0:i.length)>0&&(0,r.jsx)(f.default,{href:"/papers",children:(0,r.jsx)("div",{className:c.moreButton,children:(0,r.jsx)(g.Z,{color:"secondary",className:c.seeMore,children:"SEE MORE"})})})]})}},66824:function(e,t,n){"use strict";var r=n(85893),i=n(67294),o=n(41120),a=n(41749),s=n(6447),l=n(41664),c=(0,o.Z)((function(e){return{root:{flexGrow:1,marginTop:40},mainLabel:{marginLeft:20,fontSize:40,textAlign:"center","&:hover":{cursor:"pointer"}},img:{width:200,height:200,borderRadius:10},eachLinkContainer:{textAlign:"center","&:hover":{boxShadow:"2px 2px #F8F9FA",transform:"scale(1.05,1.05)"},marginTop:20,marginRight:20},name:{marginTop:10,fontSize:20},container:{display:"flex",flexWrap:"wrap",justifyContent:"center",width:"100%"},noQuickLink:{textAlign:"center",marginLeft:"auto",marginRight:"auto",fontSize:20,fontStyle:"italic"}}}));t.Z=function(e){var t,n,o=e.data,u=e.original,d=c(),f=(0,i.useState)(o),g=f[0],m=f[1];return(0,i.useEffect)((function(){o&&m(o)}),[o]),(0,r.jsxs)(a.Z,{className:d.root,children:[!u&&(0,r.jsx)(l.default,{href:"/quicklinks",children:(0,r.jsx)("h1",{className:d.mainLabel,children:"Quick Links"})}),(0,r.jsx)(a.Z,{item:!0,children:(0,r.jsxs)(a.Z,{container:!0,className:d.container,children:[0===(null===g||void 0===g||null===(t=g.results)||void 0===t?void 0:t.length)&&(0,r.jsx)("h3",{className:d.noQuickLink,children:"no quick links found"}),null===g||void 0===g||null===(n=g.results)||void 0===n?void 0:n.map((function(e){return(0,r.jsx)(l.default,{href:"/quicklinks/"+e.slug,children:(0,r.jsx)(s.ZP,{title:e.name,children:(0,r.jsx)(a.Z,{item:!0,className:d.eachLinkContainer,children:(0,r.jsx)("img",{src:e.image,alt:e.name,className:d.img})},e.id)})},e.id)}))]})})]})}},30272:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return w},default:function(){return O}});var r=n(85893),i=n(26265),o=(n(67294),n(41120)),a=n(43832),s=n(79895),l=n(51235),c=n(41664),u=n(282),d=n(11163),f=(0,o.Z)((function(e){return{homePageContainer:{margin:10,padding:10},pageIntro:{padding:10,minHeight:400,borderRadius:20},mainText:{fontFamily:"Helvetica",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"},mainLabel:{fontSize:60},secLabel:{fontSize:40},appendText:{color:"#bfbfbf"},quote:{fontStyle:"italic",marginTop:20},testText:{height:40},reportAndPolicyButtonsGroup:{display:"flex",margin:20,flexDirection:"row",justifyContent:"center"},button:{background:"#000",color:"#fff",margin:10,"&:hover":{color:"#000",background:"#fff"}},tagContainer:{marginLeft:40,marginRight:40,marginTop:20,marginBottom:10,display:"flex",flexWrap:"wrap",justifyContent:"center",padding:2,overflowWrap:"break-word"},tag:{marginLeft:10,marginTop:6,background:"#800000",width:"fit-content",marginBottom:2,color:"white",padding:4,lineHeight:"100%",display:"flex",alignItems:"center",borderRadius:4,"&:hover":{background:"#000",color:"#fff",cursor:"pointer"},overflowWrap:"break-word"}}})),g=function(e){var t,n=e.quote,i=e.tags,o=f(),a=(0,d.useRouter)();return(0,r.jsx)("div",{children:(0,r.jsxs)(s.Z,{elevation:3,className:o.pageIntro,children:[(0,r.jsxs)("div",{className:o.mainText,children:[(0,r.jsx)("div",{className:o.quote,children:n}),(0,r.jsxs)("div",{className:o.mainLabel,children:["ML",(0,r.jsx)("span",{className:o.appendText,children:"Overflow"})]}),(0,r.jsx)("img",{src:"logo.png",width:80,height:80}),(0,r.jsx)("div",{className:o.secLabel,children:l.W5}),(t=i,(0,r.jsx)("div",{className:o.tagContainer,children:null===t||void 0===t?void 0:t.map((function(e){return(0,r.jsx)("div",{className:o.tag,onClick:function(t){t.stopPropagation(),a.push("/search?key="+e.name)},children:e.name},e.name)}))}))]}),(0,r.jsxs)("div",{className:o.reportAndPolicyButtonsGroup,children:[(0,r.jsx)(c.default,{href:"/report",children:(0,r.jsx)(u.Z,{className:o.button,children:"Report problem"})}),(0,r.jsx)(c.default,{href:"/privacy",children:(0,r.jsx)(u.Z,{className:o.button,children:"Privacy Policy"})})]})]})})},m=n(66824),p=n(49965),h=n(46452),x=n(7858),v=n(45373);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=(0,o.Z)((function(e){return{homePageContainer:{margin:10,padding:10},modalBody:{color:"#000",fontSize:24},label:{fontSize:20}}})),w=!0,O=function(e){var t=e.feeds,n=e.papers,i=e.quote,o=e.tags,s=e.quickLinks,c=y(),u={title:l.Ru,description:l.qu,ogTitle:l.Ru,image:"/logo_white.png",url:x.ft};return(0,r.jsxs)("div",{className:c.homePageContainer,children:[(0,r.jsx)(v.Z,b({},u)),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(g,{quote:i,tags:o}),(0,r.jsx)(h.Z,{home:!0,data:t}),(0,r.jsx)(p.Z,{data:n}),(0,r.jsx)(m.Z,{original:!1,data:s})]})]})}},45301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(30272)}])}},function(e){e.O(0,[774,885,487,433,82,524,636,227,152,447,128,388,494,205],(function(){return t=45301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);