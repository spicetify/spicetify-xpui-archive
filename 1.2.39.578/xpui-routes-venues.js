"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7241],{73462:(e,n,r)=>{r.d(n,{A:()=>f});var s=r(30758),a=r(73351),t=r(54925),l=r(96855),i=r(7104),d=r(42799),o=r(69880);const c="MUiWCNTfb6FcSwVPvQ1V",u="_eSrMs5LTUjW7l0vfuBg",v="UAk3bMhekwJTV_wIyfsT",m="X9w6LPfKsZHMCs38sVIQ",x="NXn5KjeUOjLGlAfS1Gao",j="N0wgFMDDvCiby4QB5kLJ",h="nloNe2BLRHjz9dxlwfLU",g="FyD0hF1e2PKzRxQ6sYDQ",C="GR08E4L_rOGljyQQX30R";var b=r(86070);const f=(0,s.memo)((function(e){var n=e.uri,r=e.title,s=e.imageUrl,f=e.date,w=e.subTitle,y=e.firstParty,p=e.onClick,k=f?(0,o.l4)(f):void 0;return(0,b.jsx)(i.N,{to:n,className:c,"data-testid":"concert-card",onClick:p,children:(0,b.jsxs)("div",{className:u,children:[(0,b.jsx)(d.b,{children:(0,b.jsx)("div",{role:"img",className:C,style:{backgroundImage:"url(".concat(s,")")},children:!s&&(0,b.jsx)(a.r,{role:"img",size:"xxlarge",semanticColor:"textSubdued"})})}),k&&(0,b.jsxs)("time",{className:v,dateTime:f,children:[(0,b.jsx)(t.E,{as:"div",variant:"bodySmall",children:(0,o.tj)(k)}),(0,b.jsx)(t.E,{as:"div",variant:"bodyMediumBold",children:(0,o.Py)(k)})]}),(0,b.jsxs)("div",{className:m,dir:"auto",children:[(0,b.jsx)(t.E,{as:"h2",variant:"bodyMedium",className:x,children:r}),(0,b.jsxs)("div",{className:j,children:[y&&(0,b.jsx)("span",{className:g,children:(0,b.jsx)(l.D,{size:"small"})}),(0,b.jsx)(t.E,{as:"span",className:h,variant:"bodySmall","data-testid":"location-name",semanticColor:"textSubdued",children:w})]})]})]})})}))},91375:(e,n,r)=>{r.r(n),r.d(n,{default:()=>A});r(67560),r(83892);var s=r(2097),a=r(59081),t=r(78227),l=(r(37892),r(7771)),i=r(54925);const d="Xlgy72kupmfCZqmbBxcw";var o=r(86070);const c=function(e){var n=e.venue,r=e.address;return(0,o.jsxs)("div",{className:d,children:[(0,o.jsx)(l.t,{semanticColor:"textBase"}),(0,o.jsxs)("div",{children:[(0,o.jsx)(i.E,{as:"div",semanticColor:"textBase",variant:"bodyMediumBold",children:n}),(0,o.jsx)(i.E,{semanticColor:"textSubdued",variant:"bodySmall",children:Object.values(r).join(a.Ru.getSeparator())})]})]})};r(94238),r(84008),r(69645),r(93902),r(7410),r(50252);var u=r(7766),v=r(73462),m=(r(51945),r(77458),r(39921),function(e){return null!=e}),x=function(e){return(0,o.jsx)(u.$,{total:e.concerts.items.length,title:a.Ru.get("web-player.venues.concerts"),showAll:!0,withEncoreCards:!1,children:e.concerts.items.map((function(e,n){var r;if(!("uri"in e.data))return null;var s=e.data.artists.items[0].data,t="visuals"in s?null===(r=s.visuals.avatarImage)||void 0===r?void 0:r.sources[0]:void 0;return(0,o.jsx)(v.A,{imageUrl:null==t?void 0:t.url,uri:e.data.uri,title:e.data.title,subTitle:[e.data.location.name,e.data.location.city].join(a.Ru.getSeparator()),date:e.data.startDateIsoString},n)})).filter(m)})},j=function(e){return(0,o.jsx)("svg",{width:e.iconSize,height:e.iconSize,viewBox:"0 0 42 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 0C21.0532 0 22.0879 0.278738 23 0.808199L38 9.51508C38.6081 9.86805 39.113 10.3757 39.4641 10.9871C39.8151 11.5984 40 12.2919 40 12.9978V39.9892C40 40.5225 39.7893 41.0339 39.4142 41.411C39.0391 41.7882 38.5304 42 38 42H26H14H2C1.46957 42 0.960859 41.7882 0.585786 41.411C0.210714 41.0339 0 40.5225 0 39.9892V12.9978C1.78369e-05 12.2919 0.184851 11.5984 0.535924 10.9871C0.886996 10.3757 1.39194 9.86805 2 9.51508L17 0.808199C17.9121 0.278738 18.9468 0 20 0ZM29.2728 14.7624H12.9091V27.5589H11.2728C10.5176 27.5589 9.77939 27.7841 9.15149 28.2059C8.52359 28.6277 8.03421 29.2273 7.74522 29.9287C7.45623 30.6302 7.38062 31.402 7.52794 32.1467C7.67527 32.8914 8.03891 33.5754 8.5729 34.1123C9.10688 34.6491 9.78721 35.0148 10.5279 35.1629C11.2685 35.311 12.0362 35.235 12.7339 34.9444C13.4316 34.6539 14.0279 34.1618 14.4475 33.5305C14.867 32.8992 15.0909 32.157 15.0909 31.3978V16.956H27.0909V27.5589H25.4546C24.6994 27.5589 23.9612 27.7841 23.3333 28.2059C22.7054 28.6277 22.216 29.2273 21.927 29.9287C21.638 30.6302 21.5624 31.402 21.7098 32.1467C21.8571 32.8914 22.2207 33.5754 22.7547 34.1123C23.2887 34.6491 23.969 35.0148 24.7097 35.1629C25.4503 35.311 26.2181 35.235 26.9157 34.9444C27.6134 34.6539 28.2097 34.1618 28.6293 33.5305C29.0488 32.8992 29.2728 32.157 29.2728 31.3978V14.7624Z",fill:"currentColor"})})},h=r(12475),g=r(27890),C=r(47872),b=r(82930),f=r(58701),w=r(98849),y=r(54212),p=r(19968),k=r(62472),N=r(11182),S=r(46317),R=r(37686),L=r(28937),M=new R.l("venue","query","c1f9cbd43884187f1fcf08a9689eb7ec854e4b8dbb1dc0442a2151d9aa8100cf",null),B=r(61022);const E="kpMIZFDu12cMBsz4ZxlE",V="gxdwhiUmWKrrk4VLbLJw",I="bARY0skKvlL8wtcg1Y2g";var z=[s.redOrange55,s.brown55,s.orange55,s.brownYellow55,s.yellow55,s.yellowGreen55,s.green55,s.greenBlue55,s.blue55,s.blueViolet55,s.violet55,s.violetPink55,s.pink55,s.red55],A=function(e){var n,r,s,l=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:B.g)().venueId;return"spotify:venue:".concat(e)}(),i=(n={uri:l},(0,L.I)(M,n,r)),d=i.data,u=i.loading,v=i.error;if(u)return(0,o.jsx)(S.A,{hasError:!1,errorMessage:""});if("NotFound"===(null==(s=null==d?void 0:d.venue)?void 0:s.__typename))return(0,o.jsx)(g.p,{title:a.Ru.get("web-player.venues.error.not_found.title"),message:a.Ru.get("web-player.venues.error.not_found.message"),renderInline:!0});if(v||!function(e){return Object.keys(null!=e?e:{}).includes("name")}(null==d?void 0:d.venue))return(0,o.jsx)(S.A,{hasError:!0,errorMessage:a.Ru.get("web-player.venues.error.generic.title")});var m=z[(""!==d.venue.name?d.venue.name.charCodeAt(0):0)%(z.length-1)];return(0,o.jsxs)("section",{children:[(0,o.jsxs)(b.z,{size:b.K.SMALL,backgroundColor:m,children:[(0,o.jsx)(f.K,{renderImage:function(){return(0,o.jsx)("div",{className:V,children:(0,o.jsx)(j,{iconSize:48})})},name:d.venue.name,shape:t.u.CIRCLE,images:[]}),(0,o.jsxs)(w.Y,{children:[(0,o.jsx)(k.B,{children:a.Ru.get("web-player.venues.venue")}),(0,o.jsx)(N.mm,{children:d.venue.name}),(0,o.jsx)(C.Z,{children:[d.venue.address.city,d.venue.address.country].join(a.Ru.getSeparator())})]}),(0,o.jsx)(y.h,{children:(0,o.jsx)(p.X,{text:d.venue.name})})]}),(0,o.jsx)(h.K,{backgroundColor:m}),(0,o.jsxs)("div",{className:E,children:[(0,o.jsx)(c,{venue:d.venue.name,address:d.venue.address}),(0,o.jsx)("div",{className:I,children:(0,o.jsx)(x,{concerts:d.venue.concerts})})]})]})}}}]);
//# sourceMappingURL=xpui-routes-venues.js.map