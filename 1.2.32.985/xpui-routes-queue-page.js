"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[2156],{7552:(e,i,t)=>{t.d(i,{E:()=>M});var s=t(67544),a=t(96651),n=t(12100),r=(t(73952),t(97296),t(97768),t(39568),t(41260),t(99400),t(10124)),l=t.n(r),o=t(33220),u=t(8004),c=t(32040),d=t(71912),m=t(87832),x=t(18648),h=t(81040),p=t(62572);var y=t(44488),g=t(90484);const j="BkpKedcdaMGbvgXMlmcg",f="muYk5XIwKmqR9iNibk_f",b="OEFWODerafYHGp09iLlA",C="m20ShRDiGGDpJ5LSABTi",v="Hvv0e7WKQ4kyftgSQJhg",k="yxf_6IsQEmHjijEBUMTP",I="oaNVBli46GtVjaQKB15g",N="JdlKTdpMquftpMwwegZo",P="Nts_ArOCGeROTDZND3M6",w="FvDsfgxSvLvL3q8d7nQv";var E=t(2488);const U=({items:e,activeItemId:i})=>(0,E.jsx)(y.i,{children:e.map((e=>e.disabled?(0,E.jsx)(g.I,{disabled:!0,role:"menuitemradio",className:k,onClick:e.handleClick,children:e.title},e.uri):(0,E.jsx)(g.I,{role:"menuitemradio",to:e.to,end:!0,"aria-checked":e.itemId===i,className:({isActive:e})=>l()(k,{[I]:e}),onClick:e.handleClick,children:e.title},e.uri)))});var A=t(76872);const S=(0,a.memo)((function({isCentered:e,links:i,landmarkLabel:t,className:s}){const r=(0,a.useRef)(null),[y,g]=(0,a.useState)([]),[k,S]=(0,a.useState)(0),[_,O]=(0,a.useState)([]),R=function(){const[e,i]=(0,a.useState)(window.innerWidth),{scrollNodeChildRef:t}=(0,a.useContext)(h.Ib),s=(0,x.yK)((e=>{e?.width&&i(e.width)}),250);return(0,p.m)({refOrElement:t,observeOnly:"width",onResize:s}),e}()??1/0,{pathname:T}=(0,o.IT)(),q=i.find((e=>e.to===T));return(0,a.useEffect)((()=>{r.current&&S(r.current.clientWidth)}),[R]),(0,a.useEffect)((()=>{if(!r.current)return;const e=Array.from(r.current.children).map((e=>e.clientWidth));g(e)}),[i]),(0,a.useEffect)((()=>{if(!r.current)return;if(y.slice(0,-1).reduce(((e,i)=>e+i),0)<=k)return void O([]);const e=y.reduce(((e,i)=>e>i?e:i),0),i=[];let t=e;y.forEach(((e,s)=>{k>=t+e?t+=e:i.push(s)})),O(i)}),[k,y]),(0,E.jsx)("nav",{className:l()(s,j),"aria-label":t,children:(0,E.jsxs)("ul",{className:e?f:P,ref:r,children:[i.filter(((e,i)=>!_.includes(i))).map((e=>{const i=e?.render??(e=>e);return(0,E.jsx)(a.Fragment,{children:i((0,E.jsx)("li",{className:b,children:e.disabled?(0,E.jsx)("div",{className:N,children:(0,E.jsx)(u.a,{variant:"bodySmallBold",children:e.title})}):(0,E.jsx)(A.A,{end:!0,className:({isActive:e})=>l()(N,{[I]:e}),to:e.to,onClick:e.handleClick,children:(0,E.jsx)(u.a,{variant:"bodySmallBold",children:e.title})})}))},e.to)})),_.length||0===y.length?(0,E.jsx)("li",{className:b,children:(0,E.jsx)(m.SM,{renderInline:!0,menu:(0,E.jsx)(U,{items:i.filter(((e,i)=>_.includes(i))),activeItemId:q?.itemId}),children:(e,i,t)=>(0,E.jsxs)("button",{className:l()(C,{[v]:q}),type:"button",onClick:i,ref:t,children:[(0,E.jsx)(u.a,{variant:"bodySmallBold",children:q?q.title:n._s.get("more")}),e?(0,E.jsx)(c.s,{size:"small",className:w,"aria-hidden":"true"}):(0,E.jsx)(d.a,{size:"small",className:w,"aria-hidden":"true"})]})})}):null]})})}));var _=t(43052),O=t(7948),R=t(59604);const T="vhW0kRN8JJD5UwW4TdXi",q=()=>{const e=(0,R.k)(),i=(0,a.useCallback)((e=>(0,E.jsx)(O.i,{placement:"bottomEnd",arrow:"topStart",title:n._s.get("pick-and-shuffle.upsell.title.queue"),children:e})),[]),t=(0,a.useMemo)((()=>[{title:n._s.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue",render:i,disabled:e},{title:n._s.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}]),[e,i]);return(0,E.jsx)(_.J,{children:(0,E.jsx)(S,{className:T,links:t})})},M=({children:e})=>{const i=(0,s.E5)();return(0,E.jsxs)("section",{className:"contentSpacing",children:[e,i&&(0,E.jsx)(q,{})]})}},47656:(e,i,t)=>{t.r(i),t.d(i,{default:()=>de});var s=t(96651),a=t(10124),n=t.n(a),r=t(8004),l=t(48564),o=t(31024),u=t(12100),c=t(12980),d=t(11732),m=t(93544),x=t(81604),h=t(6912),p=t(52588),y=t(40636),g=t(49612),j=t(2488);const f=({onClick:e})=>(0,j.jsx)(g.w,{onClick:e,size:"small",children:u._s.get("queue.clear-queue")});var b=t(80400),C=t(73308),v=t(40748),k=t(33912),I=t(96800),N=t(7296),P=t(39188),w=t(16928),E=t(43619),U=t(40068),A=(t(41260),t(1079)),S=t(80296),_=t(14788),O=t(7300),R=t(1984),T=t(71464),q=t(40700),M=t(56684),Q=t(24300),F=t(94496),L=t(45060),D=t(6812),B=t(70480),G=t(17556),$=t(41436),H=t(50060),K=t(94192),z=t(57148),W=t(52184),Y=t(42300),J=t(32508),V=t(96692);let Z=function(e){return e.TRACK="track",e.EPISODE="episode",e.CHAPTER="chapter",e.LOCAL="local",e.AD="ad",e}({});const X=s.memo((function({uri:e,uid:i,contextUri:t,name:a,duration_ms:n,artists:r,index:l,rowNumberOffset:o,imgUrl:c,isExplicit:d,isPlayable:m,isMOGEFRestricted:p,album:g,type:f,section:b,usePlayContextItem:C,isAutoPlay:k=!1,isEnhanced:I,queueSpec:N,trackContextUri:P}){const w=(0,y.Mk)(),E=(0,h.Q)(),{triggerPlay:U,togglePlay:X}=C({uid:i,uri:e,index:l}),{spec:ee}=(0,y.gp)(S.C,{data:{position:l,reason:"",uri:e}}),{isActive:ie,isPlaying:te}=(0,K.Cu)(e),se=(0,s.useCallback)(((t,s)=>{i?U({loggingParams:s},(()=>E.skipToNext({uri:e,uid:i}))):U({loggingParams:s})}),[E,U,e,i]),ae=(0,s.useCallback)((t=>{i?X({loggingParams:t},(()=>ie?te?E.pause():E.resume():E.skipToNext({uri:e,uid:i}))):X({loggingParams:t})}),[E,X,e,i,ie,te]),ne=f===Z.TRACK,re=f===Z.EPISODE,le=f===Z.CHAPTER,oe=re&&"video"===g?.mediaType,ue=f===Z.LOCAL,ce=f===Z.AD,de=r?.map((e=>e.name)).join(u._s.getSeparator())||"",me=(0,H._)(e),xe=(0,W.E)(e,m,(0,_.UF)(e)),{badges:he,hasBadges:pe}=(0,z.C)({downloadAvailability:me,isExplicit:d,isMOGEFRestricted:p,isEnhanced:I}),ye=(0,V.Y)();let ge;ge=re?(0,j.jsx)(T.y,{uri:e,uid:k?void 0:i,showUri:g.uri,contextUri:t}):le?(0,j.jsx)(R.h,{uri:e,removeFromQueueData:{uid:k?void 0:i,contextUri:t}}):ue?(0,j.jsx)(q.Y,{uri:e,uid:k?void 0:i,contextUri:t}):ce?null:(0,j.jsx)(M.k,{uri:e,uid:k?void 0:i,albumUri:g.uri,artists:r,contextUri:t,recommendationContextUri:P,isSmartRecommendation:I});const je=(0,s.useCallback)(((t,s)=>{const{meta:a,uris:n}=t,r=n.map((e=>({uri:e,uid:null})));let l;l=s===L.U.Before?{before:{uri:e,uid:i??null}}:{after:{uri:e,uid:i??null}},a.section===v.e.NowPlaying?E.addToQueue(r):a.origin===v.e.NowPlaying?E.insertIntoQueue(r,l):E.reorderQueue(r,l)}),[E,i,e]),fe=(0,s.useCallback)(((t,s)=>{const{items:a}=t;let n;n=s===L.U.Before?{before:{uri:e,uid:i??null}}:{after:{uri:e,uid:i??null}},E.reorderQueue(a,n)}),[E,i,e]),be=k?[]:[D.y[_.cH.TRACK],D.y[_.cH.EPISODE]];return(0,j.jsx)(x.oL,{value:"row",index:l,children:(0,j.jsx)(O.U,{menu:ge,children:(0,j.jsxs)(L.i,{uri:e,contextUri:t,index:l,onTriggerPlay:se,isActive:b===v.e.NowPlaying&&ie,ariaRowIndex:l,isPlayable:xe,ageRestricted:p,spec:ee,dragMetadata:{name:a,createdBy:de,sectionId:b},onInsert:(i,t,s,a,n)=>{je({uris:i,dropIndex:t,meta:n},s),N&&w.logInteraction(N.dragAddItemToQueue({itemToAddToQueue:e}))},onMove:(e,i,t,s)=>{fe({items:e,dropIndex:i,meta:s},t),N&&w.logInteraction(N.dragSort())},allowedDropTypes:be,children:[(0,j.jsx)(Q.AB,{ariaColIndex:0,children:(0,j.jsx)(Q.ae,{uri:e,playAriaLabel:u._s.get("tracklist.a11y.play",a,de),isPlaying:b===v.e.NowPlaying&&te,isActive:b===v.e.NowPlaying&&ie,spec:ee,onClick:(e,i)=>{ae(i)},children:(0,j.jsx)(Q.iq,{children:l+o+1})})}),(0,j.jsxs)(Q.I9,{ariaColIndex:1,children:[(0,j.jsx)(Q.Oy,{src:c,isVideo:oe,isEpisode:re||le}),(0,j.jsxs)(Q.yY,{children:[(0,j.jsx)(Q.Ml,{titleText:a,children:a}),pe&&(0,j.jsxs)(Q.MV,{children:[he.enhanced&&(0,j.jsx)(A.O,{size:"small",className:F.c.enhanced,title:u._s.get("web-player.smart-shuffle.icon-hover-label"),"aria-label":u._s.get("web-player.smart-shuffle.icon-hover-label")}),he.download&&(0,j.jsx)(B.g,{}),he.explicit&&(0,j.jsx)(G.C,{}),he.nineteen&&(0,j.jsx)($.o,{className:F.c.nineteen,size:16})]}),(0,j.jsxs)(Q.aU,{children:[ne&&(0,j.jsx)(Q.ui,{artists:r,spec:ee}),(re||ue)&&!oe&&de]})]})]}),(0,j.jsx)(Q.sv,{ariaColIndex:2,children:(0,j.jsx)(Q.MZ,{nonInteractive:ue,uri:g.uri,name:g.name,creatorUri:r?.[0]?.uri,spec:ee,children:g.name})}),(0,j.jsxs)(Q.sP,{ariaColIndex:3,children:[I&&ye&&(0,j.jsx)(y.Ud,{spec:ee,children:(0,j.jsx)(J.W,{className:F.c.rowFeedback,contextUri:P,id:i??void 0,uri:e,isActive:b===v.e.NowPlaying&&ie})}),!le&&!I&&(0,j.jsx)(Y.K,{uri:e,type:f}),(0,j.jsx)(Q.U$,{duration:n}),(0,j.jsx)(Q.op,{menu:ge,label:u._s.get("more.label.track",a,de),spec:ee})]})]})})})}),((e,i)=>e.uri===i.uri&&e.index===i.index&&e.name===i.name&&e.isEnhanced===i.isEnhanced)),ee=s.memo((function({tracks:e,ariaLabel:i,contextUri:t,currentlyPlayingContextUri:a=t,rowNumberOffset:n=0,section:r,usePlayContextItem:l}){const o=(0,N.w)(),c=(0,h.Q)(),d=(0,s.useCallback)(((e,i)=>{o({intent:"remove-from-queue",type:"click"}),c.removeFromQueue(e).then(i)}),[c,o]),m=(0,s.useCallback)(((e,i)=>{if((0,w.sN)(e)){const s=(0,U.C)(e.show?.images,{desiredSize:40});return(0,j.jsx)(X,{index:i,rowNumberOffset:n,imgUrl:s?.url||"",uri:(0,P.a)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.show.name,uri:e.show.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:Z.EPISODE,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider},`${i}${n}${e.uid}`)}if((0,w.Q9)(e)){const s=(0,U.C)(e.images||void 0,{desiredSize:40});return(0,j.jsx)(X,{index:i,rowNumberOffset:n,imgUrl:s?.url||"",uri:(0,P.a)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.book.name,uri:e.book.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:Z.CHAPTER,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider},`${i}${n}${e.uid}`)}if((0,w.UZ)(e)){const s=(0,U.C)(e.images||void 0,{desiredSize:40});return(0,j.jsx)(X,{index:i,rowNumberOffset:n,imgUrl:s?.url||"",uri:e.uri,uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.advertiser??e.title??u._s.get("ad-formats.advertisement"),artists:[],album:{name:"",uri:""},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:Z.AD,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider,isEnhanced:!1},`${i}${n}${e.uid}`)}if((0,w.gB)(e)||(0,w.u_)(e)){const s=(0,U.C)(e?.album?.images,{desiredSize:40}),o=e.type===E.s.TRACK?e:null;return(0,j.jsx)(X,{index:i,rowNumberOffset:n,imgUrl:s?.url||"",uri:(0,P.a)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,album:e.album,isExplicit:o?.isExplicit??!1,isPlayable:!0,isMOGEFRestricted:o?.is19PlusOnly??!1,type:o?.isLocal?Z.LOCAL:Z.TRACK,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider,isEnhanced:(0,I.c)(e),trackContextUri:e.metadata?.context_uri??a},`${i}${n}${e.uid}`)}return(0,j.jsx)(k.iq,{height:`${k.k$}px`})}),[n,t,a,r,l]),x=(0,s.useMemo)((()=>[k.yw.INDEX,k.yw.TITLE_AND_ARTIST,k.yw.ALBUM,k.yw.DURATION]),[]),p=(0,s.useCallback)((e=>({uri:e.uri,uid:e.uid??e.uri})),[]);return(0,j.jsx)(k.aE,{ariaLabel:i,tracks:e,nrTracks:e.length,onRemove:d,renderRow:m,resolveItem:p,columns:x})}));var ie=t(23756);const te="rHpv7osDRvs3SUPMpQ_g",se="DG9CsoFIptJhAneKoo_F",ae="jf2HafzDEI9jn7Yo05eM",ne="H3Puuvc2nV0GoZRrfpRS",re="HckHyQocDDePWQL2baOY",le=()=>{const{uri:e,description:i,current:t,nextUp:a,queued:g,isEmpty:k,hasQueuedTracks:I,hasNextTracks:N}=(0,ie.G)(),{spec:P,logger:w,UBIFragment:E}=(0,y.gp)(l.a,{data:{identifier:o.eA.NOWPLAYING_QUEUE,uri:e??""}}),U=(0,s.useMemo)((()=>P.nowPlayingSectionFactory()),[P]),A=(0,s.useMemo)((()=>P.nextInQueueSectionFactory()),[P]),S=(0,s.useMemo)((()=>P.nextFromSectionFactory()),[P]),_=(0,h.Q)(),[O,R]=(0,s.useState)(!1),T=(0,s.useCallback)((()=>{R(!1)}),[R]),q=(0,s.useCallback)((()=>{_.clearQueue(),R(!1)}),[_]),M=(0,s.useCallback)((()=>{let e;const i=A.clearQueueButtonFactory();g.length>0&&(e=i.hitRemoveItemsFromQueue({numberOfItemsToRemoveFromQueue:g.length}),w.logInteraction(e))}),[w,A,g.length]),Q=(0,s.useCallback)((async()=>{M(),R(!0)}),[M]),{usePlayContextItem:F}=(0,p.I)({uri:e??""},{featureIdentifier:"queue"}),L=(0,s.useCallback)((async()=>{if(!N)return;const i=P.nextFromSectionFactory().queueContextLinkFactory().hitUiNavigate({destination:e??""});w.logInteraction(i)}),[N,w,P,e]);return k?(0,j.jsx)(C.c,{}):(0,j.jsxs)("div",{className:te,children:[(0,j.jsx)(c.Q,{children:u._s.get("queue.page-title")}),(0,j.jsx)(E,{spec:P,children:(0,j.jsx)(m.U,{className:se,emptyStateComponent:(0,j.jsx)(r.a,{as:"h1",variant:"titleSmall",semanticColor:"textBase",className:se,children:u._s.get("playback-control.queue")})})}),t&&e&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.a,{as:"h2",variant:"bodyMediumBold",semanticColor:"textSubdued",className:ae,children:u._s.get("queue.now-playing")}),(0,j.jsx)(E,{spec:U,children:(0,j.jsx)(x.oL,{value:"now-playing",children:(0,j.jsx)(ee,{ariaLabel:u._s.get("queue.now-playing"),tracks:[t],contextUri:e,section:v.e.NowPlaying,usePlayContextItem:F})})})]}),I&&e&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:n()(re,ae),children:[(0,j.jsx)(r.a,{as:"h2",variant:"bodyMediumBold",semanticColor:"textSubdued",children:u._s.get("queue.next-in-queue")}),I&&(0,j.jsx)(f,{onClick:Q})]}),(0,j.jsx)(E,{spec:A,children:(0,j.jsx)(x.oL,{value:"next-in-queue",children:(0,j.jsx)(ee,{ariaLabel:u._s.get("queue.next-in-queue"),tracks:g,rowNumberOffset:1,contextUri:"spotify:app:queue:NextInQueue",currentlyPlayingContextUri:e,section:v.e.NextInQueue,usePlayContextItem:F})})})]}),N&&e&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.a,{as:"h2",variant:"bodyMediumBold",semanticColor:"textSubdued",className:ae,children:i&&!(0,ie.Y)(t)?(0,j.jsxs)("span",{className:"standalone-ellipsis-one-line",children:[u._s.get("queue.next-from")," ",(0,j.jsx)(d.Link,{className:ne,to:e,onClick:L,children:i})]}):u._s.get("queue.next-up")}),(0,j.jsx)(E,{spec:S,children:(0,j.jsx)(x.oL,{value:"next-up",children:(0,j.jsx)(ee,{ariaLabel:u._s.get("queue.next-up"),tracks:a,rowNumberOffset:1+(g?.length||0),contextUri:"spotify:app:queue:NextUp",currentlyPlayingContextUri:e,section:v.e.NextUp,usePlayContextItem:F})})})]}),(0,j.jsx)(b.A,{itemCount:g?.length||0,isOpen:O,onClose:T,onConfirm:q})]})};var oe=t(7552),ue=t(59604),ce=t(46736);const de=()=>(0,ue.k)()?(0,j.jsx)(ce.InstrumentedRedirect,{to:"/history"}):(0,j.jsx)(oe.E,{children:(0,j.jsx)(s.Suspense,{fallback:null,children:(0,j.jsx)(le,{})})})},39188:(e,i,t)=>{t.d(i,{a:()=>s});const s=e=>e?.linked_from?.uri||e.uri}}]);
//# sourceMappingURL=xpui-routes-queue-page.js.map