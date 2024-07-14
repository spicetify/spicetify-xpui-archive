"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[8865],{54648:(e,t,r)=>{r.r(t),r.d(t,{AlbumPrerelease:()=>ce});r(62355),r(48117),r(1137);var a=r(97500),n=r.n(a),s=r(61343),i=r(43029),l=r(48762),o=r(37298),c=r(25005),u=r(13031),d=r(23e3),m=r(79474),p=r(98235),f=r(12764),x=r(15486),b=r(12793),h=r(57309),g=r(13274);const y=({uri:e})=>{const t=(0,h.V)(e),{spec:r,logger:a}=(0,x.r)(p.k,{data:{uri:e||""}}),n=(0,m.useCallback)((()=>{e&&(a.logInteraction(r.actionBarFactory().preSaveButtonFactory().hitUiNavigate({destination:e})),t())}),[t,r,e,a]);return e?(0,g.jsx)(b.$,{onClick:n,children:o.R.get("web-player.album-prerelease.listen_now")}):null};var k=r(20533),j=r(63441),C=r(33032),R=r(89116),v=r(78714),P=r(5526),I=r(43608);const T=({prerelease:e,backgroundColor:t})=>{const r=function(e){const[t,r]=(0,m.useState)((()=>!!e&&(0,v.u)(e)<=0));return(0,m.useEffect)((()=>{if(!e)return;const t=(0,v.u)(e);if(t<=0)return void r(!0);if(t>=36e5)return void r(!1);const a=setTimeout((()=>{r(!0)}),t);return()=>{clearTimeout(a)}}),[e]),t}(e.releaseDate),{spec:a,UBIFragment:n}=(0,x.r)(p.k,{data:{uri:e.uri}}),s=(0,I.j)();return(0,g.jsx)(k.E,{backgroundColor:t,children:(0,g.jsxs)(j.S,{children:[r?(0,g.jsx)(y,{uri:e.content?.uri}):(0,g.jsx)(P.v,{uri:e.uri}),(0,g.jsx)(n,{spec:a,children:(0,g.jsx)(f.bz,{menu:(0,g.jsx)(R.P,{uri:e.uri,artistUri:e.content?.artists[0].uri}),children:(0,g.jsx)(C.e,{label:o.R.get("more.label.context",e.content?.name),size:s})})})]})})};var _=r(70163),w=r(97799),A=r(80664),L=r(71980),U=r(34015),E=r(94315),D=r(86597),S=r(66031);const N="xjbmV4vvBCu7c5U6nAgL",z=({prerelease:e,children:t})=>(0,g.jsx)(f.hy,{menu:(0,g.jsx)(R.P,{uri:e.uri,artistUri:e.content?.artists[0].uri}),children:t}),M=({prerelease:e,backgroundColor:t})=>{const{content:r,releaseDate:a}=e,n=(0,w.y)(),s=n===_.E.SMALL||n===_.E.XSMALL,{spec:i,logger:l}=(0,x.r)(p.k,{data:{uri:e.uri}}),o=(0,m.useCallback)(((e,t)=>{if(i){const e=i.headerFactory().artistNameFactory().hitUiNavigate({destination:t.creator.uri});l.logInteraction(e)}}),[l,i]),c=r,u=(0,m.useMemo)((()=>a?new Date(a):void 0),[a]);return(0,g.jsxs)(U.z4,{backgroundColor:t,size:U.KR.LARGE,children:[(0,g.jsx)(E.h,{children:c.name?(0,g.jsx)(D.X,{text:c.name}):null}),!s&&(0,g.jsx)(z,{prerelease:e,children:(0,g.jsx)(U.KU,{images:c.coverArt.sources,name:c.name??"",placeholderType:"album"})}),(0,g.jsxs)(U.Y$,{children:[(0,g.jsx)(S.B,{children:(0,A.C)(c.type)}),(0,g.jsx)(z,{prerelease:e,children:(0,g.jsx)(U.mm,{scaleAtMinWidth:U.Cl,children:c.name})}),(0,g.jsx)(U.tV,{creators:c.artists,onCreatorClick:o,releaseDate:a,timeZone:e.timezone}),u&&c.name?(0,g.jsx)(L.G,{images:s?c.coverArt.sources:[],className:N,imageTitle:c.name,targetDate:u}):null]})]})};var B=r(51773),F=r(20115),H=r(23138),G=r(34092),O=r(82871),$=r(17094);const K=new O.l("albumPreReleaseTracks","query","57be1f8d98e931e2b072477e574702caa67263d4ee779bc9bf4d9b0727b5effe",null),Z={totalLength:0,items:[]};function q(e){const t=e.preReleaseContent,r=[];if(t?.tracks)for(const e of t.tracks.items)r.push({uri:e.uri,name:e.name?e.name:"",isPlayable:e.playability.playable,durationMs:e.duration?.totalMilliseconds??0,artists:V(e.artists.items),isExplicit:e.contentRating?.label===G.x7.Explicit,is19PlusOnly:e.contentRating?.label===G.x7.NineteenPlus});return{totalLength:t?.tracks.totalCount??0,items:r}}function V(e){const t=[];for(const r of e)"Artist"===r.data.__typename&&t.push({name:r.data.profile.name,uri:r.data.uri});return t}const W=[B.$C.INDEX,B.$C.TITLE_AND_ARTIST,B.$C.DURATION],X=m.memo((function({ariaLabel:e,nrTracks:t,prereleaseUri:r,highlightUri:a,scrollToIndex:n,usePlayContextItem:s,hasHeaderRow:i=!0,initalTracks:l}){const{spec:o,UBIFragment:c}=(0,x.r)(p.k,{data:{uri:r}}),u=(e=>{const{request:t}=(0,m.useContext)(H.jH);return(0,m.useCallback)((async(r,a)=>{const n=await t(K,{uri:e,offset:r,limit:a});for(const t of n?.data?.lookup||[])if("PreReleaseResponseWrapper"===t.__typename&&"PreRelease"===t.data.__typename&&t.data.uri===e)return q(t.data);return Z}),[t,e])})(r),d=(0,m.useRef)(!1),f=(0,m.useRef)(null),[b,h]=(0,m.useState)(null),y=(0,m.useCallback)((e=>({uri:e.uri})),[]);(0,m.useEffect)((()=>{f.current&&(b?f.current.scrollToIndex(b):n&&f.current.scrollToIndex(n))}),[b,n]);const k=(0,m.useCallback)((async(e,t)=>{const r=await u(e,t);if(a&&!b){const e=r.items.findIndex((e=>e?.uri===a));h(e||-1)}return r}),[u,a,b]),j=(0,m.useCallback)(((e,t)=>{const n=!d.current&&!!a&&a===e.uri;return n&&(d.current=!0),(0,g.jsx)(B.dO,{uri:e.uri,isPlayable:e.isPlayable,name:e.name,trackNumber:t+1,index:t,artists:e.artists,playcount:0,contextUri:r,duration_ms:e.durationMs,usePlayContextItem:s,isMOGEFRestricted:e.is19PlusOnly,isExplicit:e.isExplicit,shouldHighLight:n,isReleased:e.isPlayable},t+e.uri)}),[a,r,s]);return(0,g.jsx)(c,{spec:o,children:(0,g.jsx)(F.a,{columns:W,children:(0,g.jsx)(B.S4,{ariaLabel:e,columns:W,hasHeaderRow:i,rowPlaceholder:B.Bz,renderRow:j,resolveItem:y,nrTracks:t,fetchTracks:k,limit:300,tracks:l,outerRef:f,columnPersistenceKey:"album-tracklist"},r)})})}));var Q=r(39806),J=r(12441),Y=r(90383);const ee=new O.l("albumPreRelease","query","f8fb044f6c0f01764e8264814366456656ea7775866a7a9bd7bd5ba96a78679a",null),te=(e,t)=>(0,$.I)(ee,e,t),re=(e,t=te)=>{const{data:r,loading:a,error:n}=t({uri:e},{staleTime:3e5,gcTime:36e5});return{loading:a,error:!!n,prerelease:(0,m.useMemo)((()=>{if(!r)return null;for(const t of r.lookup)if("PreReleaseResponseWrapper"===t.__typename&&"PreRelease"===t.data.__typename&&t.data.uri===e)return ne(t.data);return null}),[r,e])}};function ae(e){return e.includes("℗")?{type:"P",text:e}:{type:"C",text:e}}function ne(e){const t=e.preReleaseContent;let r;if(t){const a=q(e);r={artists:se(t.artists.items),name:t.name??void 0,uri:t.uri,coverArt:{extractedColors:t.coverArt?.extractedColors?.colorRaw,sources:t.coverArt?.sources??[]},type:t.type,tracks:a,copyrights:t.copyright?.split("\n").map(ae)??[]}}return{uri:e.uri,releaseDate:e.releaseDate?.isoString,timezone:e.timezone??void 0,content:r}}function se(e){const t=[];for(const r of e)"Artist"===r.data.__typename&&t.push({name:r.data.profile.name,id:r.data.id,uri:r.data.uri,images:r.data.visuals.avatarImage?.sources??[]});return t}var ie=r(79730);const le="H2kQJCtEGTjIDaPPniwb",oe="ZSU92ZH1fIuGwPp1cuDi",ce=e=>{const{uri:t}=e,{prerelease:r,loading:a,error:m}=re(t),p=(e=>{const t=e?.content?.coverArt.extractedColors?.hex;return(0,ie.z)(t),t})(r),f=parseInt(new URLSearchParams((0,s.zy)().search).get("index")||"0",10),{usePlayContextItem:x}=(0,u.P)({uri:t,pages:[{items:(b=r?.content?.tracks.items||[],b.filter((e=>e.isPlayable)).map((e=>({uri:e.uri,uid:null,type:d.c.TRACK,provider:null}))))}]},{featureIdentifier:"album_prerelease"});var b;if(a||m||!r)return(0,g.jsx)(J.A,{hasError:!!m,errorMessage:o.R.get("error.not_found.title.album")});if(r?.content?.uri&&function(e,t){if(!e.content?.uri||!e.releaseDate)return!1;const r=(0,v.u)(e.releaseDate);if(r>0)return!1;return r<=-1*t}(r,1728e5)){const e=(0,l.cA)(r?.content?.uri);if(e)return(0,g.jsx)(Y.InstrumentedRedirect,{to:e.toURLPath(!0)})}return(0,g.jsxs)("section",{className:le,children:[(0,g.jsx)(Q.Q,{children:o.R.get("album.page-title",r.content?.name??"")}),(0,g.jsx)(M,{prerelease:r,backgroundColor:p}),(0,g.jsx)(T,{prerelease:r,backgroundColor:p}),r.content?.tracks.totalLength?(0,g.jsxs)("div",{className:"contentSpacing",children:[(0,g.jsx)(i.E,{as:"h2",variant:"titleSmall",semanticColor:"textBase",children:o.R.get("web-player.album-prerelease.tracklist_preview")}),(0,g.jsx)(X,{prereleaseUri:t,ariaLabel:r.content?.name??o.R.get("error.not_found.title.album"),nrTracks:r.content?.tracks.totalLength??0,scrollToIndex:f,usePlayContextItem:x,initalTracks:r.content?.tracks.items,albumUri:r.content?.uri})]}):null,(0,g.jsx)("div",{className:n()(oe,"contentSpacing"),children:(0,g.jsx)(c.Z,{copyrights:r.content?.copyrights??[]})})]})}}}]);
//# sourceMappingURL=xpui-routes-album-prerelease.js.map