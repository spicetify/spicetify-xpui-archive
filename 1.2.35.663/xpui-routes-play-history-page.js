"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1460],{92917:(e,i,t)=>{t.d(i,{u:()=>x});var s=t(97500),r=t.n(s),a=t(98678),l=t(54452),n=t(9869),c=t(31853),d=t(3561),o=t(37125),u=t(97249),m=t(13274);const x=({uri:e,src:i,playAriaLabel:t,onClick:s,isPlaying:x,isActive:h,isLocked:j,isEpisode:p,isVideo:y,spec:g})=>{const f=(0,d.W)(),k=(0,n.s)(),b=(0,a.YQ)((i=>{let t;if(f({type:"click",intent:x?"pause":"play"}),g){const i=g.playbackButtonFactory();let s;s=h&&x?i.hitPause({itemToBePaused:e}):h&&!x?i.hitResume({itemToBeResumed:e}):i.hitPlay({itemToBePlayed:e}),t=k.logInteraction(s)}s(i,t)}),l.dG,{leading:!0,trailing:!1});return(0,m.jsxs)("div",{className:u.A.rowImageWithPlay,children:[(0,m.jsx)(c.e,{src:i,isEpisode:p,isVideo:y}),(0,m.jsx)(o.x,{className:r()(u.A.rowPlayPauseButton,u.A.rowImagePlayPauseButton),iconClassName:u.A.rowPlayPauseIcon,onClick:b,isPlaying:x,isLocked:j,playAriaLabel:t})]})}},47284:(e,i,t)=>{t.d(i,{U:()=>M});var s=t(59239),r=t(79474),a=t(22466),l=t(97500),n=t.n(l),c=t(83648),d=t(98891),o=t(12185),u=t(71662),m=t(57689),x=t(98678),h=t(66324),j=t(81465);var p=t(6174),y=t(89199);const g="BkpKedcdaMGbvgXMlmcg",f="muYk5XIwKmqR9iNibk_f",k="OEFWODerafYHGp09iLlA",b="m20ShRDiGGDpJ5LSABTi",v="Hvv0e7WKQ4kyftgSQJhg",R="yxf_6IsQEmHjijEBUMTP",E="oaNVBli46GtVjaQKB15g",P="JdlKTdpMquftpMwwegZo",w="Nts_ArOCGeROTDZND3M6",I="FvDsfgxSvLvL3q8d7nQv";var A=t(13274);const C=({items:e,activeItemId:i})=>(0,A.jsx)(p.W,{children:e.map((e=>e.disabled?(0,A.jsx)(y.D,{disabled:!0,role:"menuitemradio",className:R,onClick:e.handleClick,children:e.title},e.uri):(0,A.jsx)(y.D,{role:"menuitemradio",to:e.to,end:!0,"aria-checked":e.itemId===i,className:({isActive:e})=>n()(R,{[E]:e}),onClick:e.handleClick,children:e.title},e.uri)))});var N=t(70955);const T=(0,r.memo)((function({isCentered:e,links:i,landmarkLabel:t,className:s}){const l=(0,r.useRef)(null),[p,y]=(0,r.useState)([]),[R,T]=(0,r.useState)(0),[S,U]=(0,r.useState)([]),B=function(){const[e,i]=(0,r.useState)(window.innerWidth),{scrollNodeChildRef:t}=(0,r.useContext)(h.bi),s=(0,x.YQ)((e=>{e?.width&&i(e.width)}),250);return(0,j.w)({refOrElement:t,observeOnly:"width",onResize:s}),e}()??1/0,{pathname:L}=(0,c.zy)(),O=i.find((e=>e.to===L));return(0,r.useEffect)((()=>{l.current&&T(l.current.clientWidth)}),[B]),(0,r.useEffect)((()=>{if(!l.current)return;const e=Array.from(l.current.children).map((e=>e.clientWidth));y(e)}),[i]),(0,r.useEffect)((()=>{if(!l.current)return;if(p.slice(0,-1).reduce(((e,i)=>e+i),0)<=R)return void U([]);const e=p.reduce(((e,i)=>e>i?e:i),0),i=[];let t=e;p.forEach(((e,s)=>{R>=t+e?t+=e:i.push(s)})),U(i)}),[R,p]),(0,A.jsx)("nav",{className:n()(s,g),"aria-label":t,children:(0,A.jsxs)("ul",{className:e?f:w,ref:l,children:[i.filter(((e,i)=>!S.includes(i))).map((e=>{const i=e?.render??(e=>e);return(0,A.jsx)(r.Fragment,{children:i((0,A.jsx)("li",{className:k,children:e.disabled?(0,A.jsx)("div",{className:P,children:(0,A.jsx)(d.E,{variant:"bodySmallBold",children:e.title})}):(0,A.jsx)(N.k,{end:!0,className:({isActive:e})=>n()(P,{[E]:e}),to:e.to,onClick:e.handleClick,children:(0,A.jsx)(d.E,{variant:"bodySmallBold",children:e.title})})}))},e.to)})),S.length||0===p.length?(0,A.jsx)("li",{className:k,children:(0,A.jsx)(m.t,{renderInline:!0,menu:(0,A.jsx)(C,{items:i.filter(((e,i)=>S.includes(i))),activeItemId:O?.itemId}),children:(e,i,t)=>(0,A.jsxs)("button",{className:n()(b,{[v]:O}),type:"button",onClick:i,ref:t,children:[(0,A.jsx)(d.E,{variant:"bodySmallBold",children:O?O.title:a.Ru.get("more")}),e?(0,A.jsx)(o.J,{size:"small",className:I,"aria-hidden":"true"}):(0,A.jsx)(u.y,{size:"small",className:I,"aria-hidden":"true"})]})})}):null]})})}));var S=t(63963),U=t(38186),B=t(75004);const L="vhW0kRN8JJD5UwW4TdXi",O=()=>{const e=(0,B.U)(),i=(0,r.useCallback)((e=>(0,A.jsx)(U.u,{placement:"bottomEnd",arrow:"topStart",title:a.Ru.get("pick-and-shuffle.upsell.title.queue"),children:e})),[]),t=(0,r.useMemo)((()=>[{title:a.Ru.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue",render:i,disabled:e},{title:a.Ru.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}]),[e,i]);return(0,A.jsx)(S.g,{children:(0,A.jsx)(T,{className:L,links:t})})},M=({children:e})=>{const i=(0,s.yM)();return(0,A.jsxs)("section",{className:"contentSpacing",children:[e,i&&(0,A.jsx)(O,{})]})}},96655:(e,i,t)=>{t.r(i),t.d(i,{default:()=>se});var s=t(59239),r=t(98891),a=t(22466),l=t(44598),n=t(79474),c=t(2884),d=t(78776),o=t(30620),u=t(66758),m=t(28506),x=t(5486),h=t(35232),j=t(49066),p=t(42311),y=t(40360),g=t(70431),f=t(61444),k=t(20370),b=t(64647),v=t(42524),R=t(48521),E=t(97249),P=t(61988),w=t(94726),I=t(36943),A=t(1879),C=t(72078),N=t(40088),T=t(50859),S=t(28123),U=t(6165),B=t(12157),L=t(63378),O=t(98046),M=t(92917),_=t(12010),D=t(32345),q=t(30994),G=t(45129),F=t(75773),W=t(25046),K=t(1250),H=t(56404),Q=t(85438),z=t(13274);const J=n.memo((function({uri:e,name:i,duration_ms:t,index:s,imgUrl:r,artists:l,album:n,isExplicit:c,isMOGEFRestricted:d,contextItem:u,type:m}){const{isActive:x,isPlaying:h,triggerPlay:j,togglePlay:y}=(0,N.P)({uri:e,pages:[{items:[{...u}]}]},{featureIdentifier:"history"}),g=m===p.c.TRACK,J=m===p.c.EPISODE,Y=m===p.c.CHAPTER,Z=(0,C.T)(e),V=(0,H.g)(e),{badges:$,hasBadges:X}=(0,T.b)({downloadAvailability:Z,isExplicit:c,isMOGEFRestricted:d}),ee=l?.map((e=>e.name)).join(a.Ru.getSeparator())||"";let ie;return J?ie=(0,z.jsx)(b.b,{uri:e,contextUri:e,showUri:n.uri}):Y?ie=(0,z.jsx)(S.r,{uri:e}):g&&(0,f.Pk)(e)?ie=(0,z.jsx)(v.A,{uri:e,contextUri:e}):g&&(ie=(0,z.jsx)(R.P,{uri:e,contextUri:e,albumUri:n.uri,artists:l})),(0,z.jsx)(o.pZ,{value:"row",index:s,children:(0,z.jsx)(k.h,{menu:ie,children:(0,z.jsxs)(P.w,{uri:e,contextUri:e,index:s,ariaRowIndex:s,onTriggerPlay:()=>{j()},isActive:x,isPlayable:V,ageRestricted:d,dragMetadata:{name:i,createdBy:ee},children:[(0,z.jsxs)(G.U,{ariaColIndex:0,children:[(0,z.jsx)(M.u,{uri:e,src:r,isPlaying:h,isActive:x,isLocked:!1,onClick:()=>{y()},isEpisode:(0,f.gH)(e),playAriaLabel:a.Ru.get("tracklist.a11y.play",i,ee)}),(0,z.jsxs)(_.l,{children:[(0,z.jsx)(K.p,{titleText:i,children:i}),X&&(0,z.jsxs)(L.P,{children:[$.download&&(0,z.jsx)(w._,{}),$.explicit&&(0,z.jsx)(I.g,{}),$.nineteen&&(0,z.jsx)(A.q,{className:E.A.nineteen,size:16})]}),(0,z.jsx)(W.p,{children:(0,f.U_)(e)?(0,z.jsx)(B.l,{artists:l}):l[0]?.name??""})]})]}),(0,z.jsx)(F.o,{ariaColIndex:2,children:(0,z.jsx)(U.g,{nonInteractive:(0,f.Pk)(e),uri:n.uri,name:n.name,creatorUri:l?.[0]?.uri,children:n.name})}),(0,z.jsxs)(q.l,{ariaColIndex:1,children:[!Y&&(0,z.jsx)(Q.d,{uri:e,type:m}),(0,z.jsx)(O.P,{duration:t}),(0,z.jsx)(D.Y,{menu:ie,label:a.Ru.get("more.label.track",i,ee)})]})]})})})}),((e,i)=>e.uri===i.uri));var Y=t(55559),Z=t(52198);const V=n.memo((function({items:e}){const i=(0,n.useCallback)(((e,i)=>{const t=(0,g.g)(e.images??[],{desiredSize:40});return(0,h.v)(e)?(0,z.jsx)(J,{index:i,uri:e.isLocal?e.uri:(0,d.a)(e),name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.album,artists:e.artists,isExplicit:e.isExplicit??!1,isMOGEFRestricted:e.is19PlusOnly??!1,contextItem:e,type:p.c.TRACK},i+e.uri):(0,x.p)(e)?(0,z.jsx)(J,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.show,artists:[],isExplicit:!1,isMOGEFRestricted:!1,contextItem:e,type:p.c.EPISODE},i+e.uri):(0,m.d)(e)?(0,z.jsx)(J,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.book,artists:[],isExplicit:!1,isMOGEFRestricted:!1,contextItem:e,type:p.c.CHAPTER},i+e.uri):((0,u.N)(e)||(0,j.v)(e)||(0,y.k)(e),(0,z.jsx)(Y.qq,{height:`${Z.FL}px`}))}),[]),t=(0,n.useMemo)((()=>[c.$.TITLE_AND_ARTIST,c.$.ALBUM_OR_PODCAST,c.$.DURATION]),[]),s=(0,n.useCallback)((e=>({uri:e.uri})),[]);return(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(o.pZ,{value:"play-history-tracklist",children:(0,z.jsx)(Z.S4,{ariaLabel:"play-history",hasHeaderRow:!0,columns:t,renderRow:i,resolveItem:s,tracks:e,nrTracks:e.length,rowPlaceholder:Y.qq,limit:50,columnPersistenceKey:"play-history-tracklist"})})})})),$="dt3fysZYdQ6hhWfpmjAu",X="n6LsTkKvpO88xeRyRTdw",ee=()=>{const{isLoading:e,data:i}=(0,s.ao)();return e?null:i?.items.length?(0,z.jsxs)("div",{className:$,children:[(0,z.jsx)(r.E,{as:"h1",variant:"titleSmall",semanticColor:"textBase",className:X,children:a.Ru.get("view.recently-played")}),(0,z.jsx)(V,{items:i.items})]}):(0,z.jsx)(l.H,{})};var ie=t(47284),te=t(30719);const se=()=>(0,s.yM)()?(0,z.jsx)(ie.U,{children:(0,z.jsx)(ee,{})}):(0,z.jsx)(te.InstrumentedRedirect,{to:"/"})},78776:(e,i,t)=>{t.d(i,{a:()=>s});const s=e=>e?.linked_from?.uri||e.uri}}]);
//# sourceMappingURL=xpui-routes-play-history-page.js.map