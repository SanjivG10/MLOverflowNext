(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[411,179],{62822:function(e,t,n){"use strict";var r=n(22122),o=n(2949),i=n(67294),a=(n(45697),n(86010)),c=n(14670),s=n(66987),u=i.forwardRef((function(e,t){var n=e.children,c=e.classes,u=e.className,l=e.component,f=void 0===l?"ul":l,d=e.dense,p=void 0!==d&&d,g=e.disablePadding,h=void 0!==g&&g,m=e.subheader,v=(0,o.Z)(e,["children","classes","className","component","dense","disablePadding","subheader"]),b=i.useMemo((function(){return{dense:p}}),[p]);return i.createElement(s.Z.Provider,{value:b},i.createElement(f,(0,r.Z)({className:(0,a.Z)(c.root,u,p&&c.dense,!h&&c.padding,m&&c.subheader),ref:t},v),m,n))}));t.Z=(0,c.Z)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(u)},66987:function(e,t,n){"use strict";var r=n(67294).createContext({});t.Z=r},83423:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(85893),o=(n(67294),n(9008)),i=n(51235);function a(e){var t=e.title;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:t||i.Ru}),(0,r.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"})]})})}},45373:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(85893),o=(n(67294),n(9008));function i(e){var t=e.title,n=e.description,i=e.ogTitle,a=e.image,c=e.url;return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{property:"og:url",content:c}),(0,r.jsx)("meta",{property:"og:type",content:"article"}),(0,r.jsx)("meta",{property:"og:title",content:i}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:image",content:a})]})}},49965:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(85893),o=n(26265),i=n(67294),a=n(41120),c=n(87623),s=n(62822),u=n(23849),l=(0,a.Z)((function(e){return(0,c.Z)({root:{display:"flex",flexDirection:"column",backgroundColor:e.palette.background.paper,marginBottom:40,"&:hover":{cursor:"pointer"},boxShadow:"2px 2px 2px 2px #DAE0E6",padding:10},value:{marginLeft:10},title:{fontSize:18,fontWeight:"bolder"},abstract:{fontSize:16,overflow:"hidden"},link:{textDecoration:"none"},codes:{},icon:{width:24,height:24,padding:2},eachRow:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:5},langIcon:{marginLeft:10,height:20,width:20}})})),f=function(e){var t=e.title,n=e.abstract,o=e.link,i=e.codes,a=l();return(0,r.jsxs)("div",{className:a.root,children:[(0,r.jsx)("div",{className:a.title,children:(0,r.jsxs)("div",{className:a.eachRow,children:[(0,r.jsx)("img",{alt:"",className:a.icon,src:"/title.svg"}),(0,r.jsx)("div",{className:"".concat(a.title," ").concat(a.value),children:t&&t.toUpperCase()})]})}),(0,r.jsxs)("div",{className:a.eachRow,children:[(0,r.jsx)("img",{alt:"",className:a.icon,src:"/abstract.svg"}),(0,r.jsx)("div",{className:"".concat(a.abstract," ").concat(a.value),children:(0,u.Pq)(n,200)})]}),(0,r.jsxs)("div",{className:a.eachRow,children:[(0,r.jsx)("img",{alt:"",className:a.icon,src:"/link.svg"}),(0,r.jsx)("a",{href:o,target:"_blank",rel:"noreferer nofollow",className:"".concat(a.link," ").concat(a.value),children:o})]}),i&&i.length>0&&i[0].link&&i[0].language&&(0,r.jsxs)("div",{className:a.eachRow,children:[(0,r.jsx)("img",{alt:"",className:a.icon,src:"/code.svg"}),(0,r.jsx)("a",{href:o,target:"_blank",rel:"noreferer nofollow",className:"".concat(a.link," ").concat(a.value),children:i[0].link}),i[0].language&&(0,r.jsx)("img",{alt:"",className:a.langIcon,src:"/".concat(i[0].language,".svg")})]})]})},d=n(41664),p=n(282),g=n(11163);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=(0,a.Z)((function(e){return(0,c.Z)({root:{backgroundColor:e.palette.background.paper,marginTop:40},nested:{paddingLeft:e.spacing(4)},noPaper:{textAlign:"center",marginLeft:"auto",marginRight:"auto",fontSize:20,fontStyle:"italic"},mainLabel:{fontSize:40,marginLeft:"auto",marginRight:"auto",width:"fit-content","&:hover":{cursor:"pointer"}},moreButton:{width:"fit-content",marginLeft:"auto",marginRight:"auto"},seeMore:{fontSize:16}})}));function b(e){var t,n,o,a=e.original,c=e.data,u=v(),l=(0,g.useRouter)(),h=(0,i.useState)(c),b=h[0],j=h[1];return(0,i.useEffect)((function(){c&&j(c)}),[c]),(0,r.jsxs)(r.Fragment,{children:[!a&&(0,r.jsx)(d.default,{href:"/papers",children:(0,r.jsx)("h1",{className:u.mainLabel,children:"Papers"})}),(0,r.jsxs)(s.Z,{component:"nav","aria-labelledby":"nested-list-subheader",className:u.root,children:[0===(null===b||void 0===b||null===(t=b.results)||void 0===t?void 0:t.length)&&(0,r.jsx)("h3",{className:u.noPaper,children:"no paper found"}),null===b||void 0===b||null===(n=b.results)||void 0===n?void 0:n.map((function(e){return(0,r.jsx)("div",{onClick:function(){return l.push("/papers/".concat(e.slug))},children:(0,r.jsx)(f,m({},e))},e.id)}))]}),!a&&(null===b||void 0===b||null===(o=b.results)||void 0===o?void 0:o.length)>0&&(0,r.jsx)(d.default,{href:"/papers",children:(0,r.jsx)("div",{className:u.moreButton,children:(0,r.jsx)(p.Z,{color:"secondary",className:u.seeMore,children:"SEE MORE"})})})]})}},51235:function(e,t,n){"use strict";n.d(t,{Ru:function(){return r},W5:function(){return o},qu:function(){return i},XN:function(){return a},Xu:function(){return c},En:function(){return s},lM:function(){return u},aT:function(){return l},An:function(){return f},WI:function(){return d},e$:function(){return p},Zg:function(){return g}});var r="MLOverflow",o="get machine learning resources",i="get ml/ai resources | ml news | ml information ",a=" Paper Authors ",c="MLOverflow - Feeds || Get Machine Learning News|| Resources || Information",s="Machine Learning NEWS || Resources || Information ",u="Machine Learning Paper",l="Machine Learning Resource Papers List",f="List of Machine Learning Papers || Get paper resources links ",d="Some Websites you must know as an ML enthusiast ",p="MLOVERFLOW_TOKEN",g="MLOVERFLOW_IMG"},23849:function(e,t,n){"use strict";n.d(t,{gg:function(){return s},Xz:function(){return u},Pq:function(){return l},xb:function(){return f},zp:function(){return d}});var r=n(26265);function o(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(e,t){var n,r,i,a=c(c({},e),t),s=o((n=e,r=t,Object.keys(n).filter((function(e){return r.hasOwnProperty(e)}))));try{for(s.s();!(i=s.n()).done;){var u=i.value;e[u]===t[u]&&delete a[u]}}catch(l){s.e(l)}finally{s.f()}return a},u=function(e){return"tensorflow"===e||"pytorch"===e||"scikit-learn"===e||"caffe"===e||"others"===e?{language:e}:"latest"===e||"oldest"===e?{order:e}:"bookmarked"===e?{bookmark:"true"}:"vote up"===e?{vote:"true"}:{}},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return e?e.length>t?e.substring(0,t)+" ...":e.substring(0,e.length):""},f=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},d=function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},7858:function(e,t,n){"use strict";n.d(t,{L9:function(){return r},vO:function(){return o},ft:function(){return i},ZE:function(){return c},f$:function(){return s},xI:function(){return u},To:function(){return l},BI:function(){return f},sK:function(){return d},PZ:function(){return p},OK:function(){return g},q$:function(){return h},lz:function(){return m}});var r="http://localhost:3000/",o="http://localhost:8000",i=o+"/",a=i+"api/v1/",c=a+"auth/google/",s=a+"upload/",u=a+"feeds/",l=r+"feeds/",f=a+"papers/",d=a+"report/",p=a+"quicklinks/",g=a+"feed-comments/",h=a+"paper-comments/",m=a+"resources/"},53751:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return m}});var r=n(85893),o=n(26265),i=(n(67294),n(41120)),a=n(83423),c=n(49965),s=n(43832),u=n(11163),l=n(7858),f=n(51235),d=n(45373);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=(0,i.Z)((function(e){return{container:{margin:10,padding:10},label:{fontSize:24,borderBottom:"1px solid teal",width:"fit-content",justifyContent:"center",marginLeft:"auto",marginRight:"auto"},nothing:{display:"flex",alignItems:"center",justifyContent:"center"}}})),m=!0;t.default=function(e){var t=e.papers,n=h(),o=(0,u.useRouter)().query.author,i={title:o+" results",description:f.XN,ogTitle:o+"results",image:"/logo_white.png",url:l.ft+"/authors/".concat(o)};return o?(0,r.jsxs)("div",{className:n.container,children:[(0,r.jsx)(d.Z,g({},i)),(0,r.jsx)(s.Z,{children:(0,r.jsx)("div",{children:(0,r.jsx)(c.Z,{original:!0,data:t})})})]}):(0,r.jsxs)("div",{className:n.nothing,children:[(0,r.jsx)(a.Z,{title:"No results found"}),(0,r.jsx)("h3",{children:"No author specified"})]})}},11061:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authors/[author]",function(){return n(53751)}])},14453:function(){}},function(e){e.O(0,[774,487,433,82,636],(function(){return t=11061,e(e.s=t);var t}));var t=e.O();_N_E=t}]);