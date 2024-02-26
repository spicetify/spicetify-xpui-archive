"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1289],{99734:(e,t,a)=>{a.r(t),a.d(t,{default:()=>xe});a(14534),a(99801);var l=a(50959),r=a(18570),i=a(5701),s=a(45849),n=a(77864),o=a(49679),A=a(15120),c=a(10615),u=a(29123),d=a(15123);let E=function(e){return e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER",e}({});const g={"show-alphabetical":E.SHOW_ALPHABETICAL,"book-alphabetical":E.BOOK_ALPHABETICAL,"episode-alphabetical":E.EPISODE_ALPHABETICAL,"playlist-alphabetical":E.PLAYLIST_ALPHABETICAL,"album-alphabetical":E.ALBUM_ALPHABETICAL,"recently-added":E.ADDED_AT,"creator-name":E.CREATOR_NAME,"creator-name-alphabetical":E.CREATOR_NAME_ALPHABETICAL,"album-creator-name":E.ALBUM_CREATOR_NAME,"recently-played":E.RECENTLY_PLAYED,"playlist-most-relevant":E.MOST_RELEVANT,"playlist-custom-order":E.CUSTOM_ORDER},L={[E.RECENTLY_PLAYED]:{key:"recently-played",get value(){return i.ag.get("collection.sort.recently-played")}},[E.ADDED_AT]:{key:"recently-added",get value(){return i.ag.get("collection.sort.recently-added")}},[E.SHOW_ALPHABETICAL]:{key:"show-alphabetical",get value(){return i.ag.get("collection.sort.alphabetical")}},[E.BOOK_ALPHABETICAL]:{key:"book-alphabetical",get value(){return i.ag.get("collection.sort.alphabetical")}},[E.EPISODE_ALPHABETICAL]:{key:"episode-alphabetical",get value(){return i.ag.get("collection.sort.alphabetical")}},[E.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",get value(){return i.ag.get("collection.sort.alphabetical")}},[E.ALBUM_CREATOR_NAME]:{key:"album-creator-name",get value(){return i.ag.get("collection.sort.creator")}},[E.CREATOR_NAME]:{key:"creator-name",get value(){return i.ag.get("collection.sort.creator")}},[E.CREATOR_NAME_ALPHABETICAL]:{key:"creator-name-alphabetical",get value(){return i.ag.get("collection.sort.alphabetical")}},[E.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",get value(){return i.ag.get("collection.sort.alphabetical")}},[E.MOST_RELEVANT]:{key:"playlist-most-relevant",get value(){return i.ag.get("collection.sort.most-relevant")}},[E.CUSTOM_ORDER]:{key:"playlist-custom-order",get value(){return i.ag.get("collection.sort.custom-order")}}};E.ADDED_AT,E.ALBUM_ALPHABETICAL,E.CREATOR_NAME,E.ADDED_AT,u.lY.ADDED_AT,u.As.DESC,E.ALBUM_ALPHABETICAL,u.lY.NAME,u.As.ASC,E.CREATOR_NAME,u.lY.ARTIST_NAME,u.As.ASC;E.ADDED_AT,E.CREATOR_NAME_ALPHABETICAL,E.ADDED_AT,u.hx.ADDED_AT,u.As.DESC,E.CREATOR_NAME_ALPHABETICAL,u.hx.NAME,u.As.ASC;E.ADDED_AT,E.SHOW_ALPHABETICAL,E.ADDED_AT,u.aW.ADDED_AT,u.As.DESC,E.SHOW_ALPHABETICAL,u.aW.NAME,u.As.ASC;E.ADDED_AT,E.BOOK_ALPHABETICAL,E.ADDED_AT,u.VN.ADDED_AT,E.BOOK_ALPHABETICAL,u.VN.NAME;E.MOST_RELEVANT,E.RECENTLY_PLAYED,E.ADDED_AT,E.PLAYLIST_ALPHABETICAL,E.CUSTOM_ORDER,E.ADDED_AT,d.bD.ADDED_AT,d.As.DESC,E.RECENTLY_PLAYED,d.bD.RECENTLY_PLAYED,d.As.ASC,E.PLAYLIST_ALPHABETICAL,d.bD.NAME,d.As.ASC,E.MOST_RELEVANT,d.bD.RELEVANCE,d.As.DESC,E.CUSTOM_ORDER;E.ADDED_AT,E.ADDED_AT,E.ADDED_AT,E.MOST_RELEVANT,E.ADDED_AT;var T=a(11527);const D=(0,l.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:E.ADDED_AT}),h=l.memo((function({uri:e,children:t,defaultSortOption:a}){return(0,T.jsx)(c.r,{uri:e,defaultState:a,sortContext:D,children:t})}));var C=a(29729),y=a(6473),p=a(78776),_=a(22038),m=a(8801),P=a(84816),b=a(79258),x=a(42846),S=a(97253),O=a(59242),f=(a(55330),a(83524));const I=l.memo((function({sortOptions:e,onSort:t}){const{sortState:a,setSortState:r}=(0,l.useContext)(D),i=(0,l.useCallback)((e=>{const a=g[e];t?.(a),r(a)}),[t,r]),s=e.map((e=>L[e])),n=L[a];return(0,T.jsx)(f.A,{options:s,onSelect:i,selected:n})})),R="VuUpAVlUW_OfMfOcDEID",N=l.memo((function({canSort:e,canFilter:t,filterPlaceholder:a,sortOptions:r}){const{spec:i,logger:s}=(0,O.fU)(x.createDesktopSearchBarEventFactory,{}),n=(0,l.useCallback)((()=>{s.logInteraction(i.filterFieldFactory().keyStrokeFilter())}),[s,i]),o=(0,l.useCallback)((()=>{s.logInteraction(i.filterFieldFactory().hitClearFilter())}),[s,i]);return(0,T.jsxs)("div",{className:R,children:[t?(0,T.jsx)(l.Suspense,{fallback:null,children:(0,T.jsx)(S.K,{placeholder:a,onFilter:n,onClear:o})}):null,e?(0,T.jsx)(I,{sortOptions:r}):null]})}));var M=a(16254);const k={[u.yW.NAME]:o.hI.TITLE,[u.yW.SHOW_NAME]:o.hI.SHOW,[u.yW.ADDED_AT]:o.hI.ADDED_AT},j=[E.ADDED_AT,E.CREATOR_NAME,E.EPISODE_ALPHABETICAL],B={[E.ADDED_AT]:{field:u.yW.ADDED_AT,order:u.As.DESC},[E.CREATOR_NAME]:{field:u.yW.SHOW_NAME,order:u.As.ASC},[E.EPISODE_ALPHABETICAL]:{field:u.yW.NAME,order:u.As.ASC}};const H=e=>{if(function(e){return j.includes(e)}(e))return B[e]},v=e=>{if(!j.includes(e))return;const t=H(e);if(!t?.field)return;const a=k[t.field];if(!a)return;return o.Vd[a].map((e=>t.order?`${e} ${t.order}`:e)).join(",")};var U=a(38776);const w="m9xwK71Ieq9cySIq4FAP",W="PkEMTu8sGqJeQWJ7HvEs",Y="DbH2KkRA8yVWWpXGaNSW",F=({metadata:e,canSort:t,backgroundColor:a,isPlaying:l,isOnline:r,togglePlay:s})=>{const n=(0,M.y)(),{uri:o,name:A}=e,c=e.totalLength>0,u=(0,U.j)();return(0,T.jsx)(P.o,{backgroundColor:a,children:(0,T.jsxs)(P.F,{children:[c&&(0,T.jsx)(b.$,{onClick:()=>s(),isPlaying:l,size:u,uri:o,disabled:!r,ariaPlayLabel:i.ag.get("playlist.a11y.play",A),ariaPauseLabel:i.ag.get("playlist.a11y.pause",A)}),t&&(0,T.jsx)("div",{className:Y,children:(0,T.jsx)(N,{canSort:n.getCapabilities().canSort,canFilter:n.getCapabilities().canFilter,filterPlaceholder:i.ag.get("playlist.search_in_playlist"),sortOptions:j})})]})})};var V=a(89905),K=a(69767),$=a(10473),z=a(29611),q=a(54878),G=a(54975),J=a(90350),X=a(60081),Q=a(71986);const Z="p6DKqBcwmVtxmHt8ju43",ee="_OxEpxzAgJiTENfolVUN";var te=a(45053),ae=a(28528),le=a(44870),re=a(7637),ie=a(28053),se=a(81468),ne=a(22576),oe=a(91733),Ae=a(22362),ce=a(98927),ue=a(90950),de=a(90343);const Ee={small:64,standard:300,large:640,xlarge:1024},ge=l.memo((function({index:e,contextUri:t,episode:a,onRemove:r,usePlayContextItem:i}){const s=(0,l.useRef)(a.duration.milliseconds-a.timeLeft.milliseconds),n=a.uri,[o,c]=(0,l.useState)(0===a.timeLeft.milliseconds),{filter:u}=(0,l.useContext)(A.fo),d=(0,te.O)(),E=(0,$.jh)(),g=(0,ae.o)(),[L]=(0,M.Z)(n,!0),D=(0,ue.k)(a.uri,a.isPlayable),h=(0,C.k)(),y=(0,se.Y)((e=>{if(e?.item?.uri===a.uri){const t=(0,ne.k)(e)??0;return s.current=t,t}return 0})),{isPlaying:p,isActive:m,togglePlay:P}=i({uri:n,index:e}),{isPlaying:b,isActive:x,togglePlay:S}=(0,_.n)({uri:n,pages:[{items:[{type:oe.p.EPISODE,uri:n,uid:null,provider:null}]}]},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});(0,l.useEffect)((()=>{L||r()}),[L,r]),(0,l.useEffect)((()=>{p||a.duration.milliseconds<=s.current&&c(!0)}),[p,a.duration.milliseconds]);const O=(0,l.useCallback)((e=>{e||(s.current=0),c(e)}),[]),f=e=>{if(e.target!==e.currentTarget)return;let l=`${a.name}`;a.show&&(l+=` • ${a.show.name}`),d(e,{itemUris:[n],dragLabelText:l,contextUri:t})},I=(0,l.useCallback)((()=>{g({type:"click",targetUri:n,intent:"navigate"})}),[n,g]),R=(0,l.useCallback)((()=>{h?(g({type:"click",intent:p?"pause":"play"}),P()):(g({type:"click",intent:b?"pause":"play"}),S())}),[h,p,b,g,P,S]),N=(0,l.useCallback)((e=>(0,T.jsx)(ce.o,{searchWords:[u],textToHighlight:e})),[u]),k=a.podcastSubscription?.isPaywalled??!1,j=a.podcastSubscription?.isUserSubscribed??!1,{badges:B}=(0,Ae.r)({isExplicit:a.isExplicit,isMOGEFRestricted:a.is19PlusOnly,isPaywalled:k});let H=!1;(m||!h&&x)&&(H=!0);const v=(0,z.W6)(de.eli,{loadingValue:!1});return L?(0,T.jsxs)(K.JL,{value:"row",index:e,children:[(0,T.jsx)("hr",{className:Z,"aria-hidden":!0}),(0,T.jsx)(le._,{menu:(0,T.jsx)(q.k,{uri:n,contextUri:t,showUri:a.show?.uri,isPlayed:o,onMarkAsPlayed:O}),children:v?(0,T.jsx)(J.k,{requestId:a.requestId,index:e,uri:n,uid:n,size:E,images:a.images.map((e=>({url:e.url,width:e.width||(e.label?Ee[e.label]:null),height:e.height||(e.label?Ee[e.label]:null)}))),isPaywalled:k,isUserSubscribed:j,name:a.name,highlightText:N,showName:a.show?.name,showUri:a.show?.uri,description:a.description,isPlayable:D,fullyPlayed:o,durationMs:a.duration.milliseconds,releaseDate:a.release.date||"",resumePositionMs:s.current,handleDragStart:f,handlePlaybackClick:R,handleClick:I,isCurrentlyPlaying:H,isPlaying:h?p:b,position:H?y:void 0,episodeSharingInfo:null,onMarkAsPlayed:O,badges:(0,T.jsxs)(T.Fragment,{children:[B.explicit&&(0,T.jsx)(re.N,{}),B.paid&&(0,T.jsx)(Q.g,{}),B.nineteen&&(0,T.jsx)(ie.X,{size:16})]}),playButtonWrapper:e=>(0,T.jsx)(X.l,{enabled:k&&!j,showUri:a.show?.uri||void 0,children:e})}):(0,T.jsx)(G.X,{requestId:a.requestId,index:e,uri:n,uid:n,size:E,images:a.images.map((e=>({url:e.url,width:e.width||(e.label?Ee[e.label]:null),height:e.height||(e.label?Ee[e.label]:null)}))),isPaywalled:k,isUserSubscribed:j,name:a.name,highlightText:N,showName:a.show?.name,showUri:a.show?.uri,description:a.description,isPlayable:D,fullyPlayed:o,durationMs:a.duration.milliseconds,releaseDate:a.release.date||"",resumePositionMs:s.current,handleDragStart:f,handlePlaybackClick:R,handleClick:I,isCurrentlyPlaying:H,isPlaying:h?p:b,position:H?y:void 0,episodeSharingInfo:null,onMarkAsPlayed:O,badges:(0,T.jsxs)(T.Fragment,{children:[B.explicit&&(0,T.jsx)(re.N,{}),B.paid&&(0,T.jsx)(Q.g,{}),B.nineteen&&(0,T.jsx)(ie.X,{size:16})]}),playButtonWrapper:e=>(0,T.jsx)(X.l,{enabled:k&&!j,showUri:a.show?.uri||void 0,children:e})})})]}):null})),Le=l.memo((function({contextUri:e,usePlayContextItem:t}){const a=(0,l.useContext)(p.H),{sortState:r}=(0,l.useContext)(D),[i,s]=(0,l.useState)({totalLength:0,unfilteredTotalLength:0,offset:0,items:[],limit:50}),n=(0,l.useRef)(!1),o=(0,l.useRef)(0),c=(0,l.useRef)(0),{filter:u}=(0,l.useContext)(A.fo),d=(0,l.useCallback)((()=>{c.current++}),[]),{ref:E,breakpoint:g}=(0,$.Db)({[$.Uo.MEDIUM]:0,[$.Uo.LARGE]:600}),L=(0,l.useCallback)(((e=!1)=>{const t=o.current;null!==t&&(n.current||(n.current=!0,(async e=>{const t=await a.getEpisodes({offset:e-c.current,limit:50,sort:H(r),filter:u});return c.current=0,t})(Number(t)).then((a=>{s((l=>{const r=Number(a.offset)+a.items.length,i=e?[]:[...l.items];return i.splice(Number(t),a.items.length,...a.items),o.current=r<a.totalLength?r:null,{...a,items:i}})),n.current=!1}))))}),[u,a,r]);return(0,l.useEffect)((()=>{o.current=0,L(!0)}),[L]),(0,T.jsx)($.ZU.Provider,{value:g,children:(0,T.jsx)(K.JL,{value:"track-list",children:(0,T.jsx)("div",{ref:E,children:(0,T.jsx)(V.C,{onReachBottom:L,triggerOnInitialLoad:!0,children:i.items.map(((a,l)=>(0,T.jsx)("div",{className:ee,children:(0,T.jsx)(ge,{index:l,episode:a,contextUri:e,onRemove:d,usePlayContextItem:t},`${a.uri}/${l}`)},`${l}${a.uri}`)))})})})})}));var Te=a(88798),De=a(22866),he=a(17703),Ce=a(61925),ye=a(53981),pe=a(69793);const _e=({metadata:e,backgroundColor:t,isPlaying:a,isOnline:r,togglePlay:s})=>{const{uri:n,name:o,images:A,totalLength:c,owner:u}=e,d=(0,l.useMemo)((()=>({id:u.username,uri:u.uri,name:u.username,displayName:u.displayName||void 0,images:u.images||[]})),[u]);return(0,T.jsxs)(De.gF,{backgroundColor:t,children:[(0,T.jsxs)(he.W,{children:[(0,T.jsx)(b.$,{size:"medium",onClick:()=>s(),isPlaying:a,uri:n,disabled:!r,ariaPlayLabel:i.ag.get("playlist.a11y.play",o),ariaPauseLabel:i.ag.get("playlist.a11y.pause",o)}),(0,T.jsx)(Ce.i,{text:o})]}),(0,T.jsx)(De.Oz,{images:A,name:o,shape:ye.K.ROUNDED_CORNERS,renderImage:()=>(0,T.jsx)(pe.$,{})}),(0,T.jsxs)(De.sP,{children:[(0,T.jsx)(Te.x,{variant:"bodySmallBold",children:i.ag.get("playlist")}),(0,T.jsx)(De.xd,{canEdit:!1,onClick:()=>{},children:o}),(0,T.jsx)(De.QS,{creators:[d],totalItems:c,hasEpisodes:!0})]})]})};var me=a(8968),Pe=a(66541);const be=({metadata:e,canSort:t})=>{const a=(0,y.Y5)("#006450"),n=(0,C.k)(),{sortState:c}=(0,l.useContext)(D),{filter:u}=(0,l.useContext)(A.fo),{isPlaying:d,togglePlay:E,usePlayContextItem:g}=(0,_.n)({uri:e.uri,metadata:{[m.sb.SORTING_CRITERIA]:v(c),[m.sb.FILTERING_PREDICATE]:(0,o.aK)(u)}},{featureIdentifier:"your_library",referrerIdentifier:"your_library"},{shuffle:!1,repeat:m.zq.REPEAT_NONE});return(0,T.jsxs)("section",{className:W,"data-testid":"your-episodes-page",children:[(0,T.jsx)(me.$,{children:i.ag.get("sidebar.your_episodes")}),(0,T.jsx)(_e,{metadata:e,backgroundColor:a,isPlaying:d,isOnline:n,togglePlay:E}),(0,T.jsxs)("div",{className:w,children:[(0,T.jsx)(F,{metadata:e,backgroundColor:a,isPlaying:d,isOnline:n,togglePlay:E,canSort:t}),(0,T.jsx)("div",{className:"contentSpacing",children:e.totalLength>0?(0,T.jsx)(Le,{contextUri:e.uri,usePlayContextItem:g}):(0,T.jsx)(s.u,{message:i.ag.get("collection.empty-page.episodes-subtitle"),title:i.ag.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:i.ag.get("collection.empty-page.shows-cta"),renderInline:!0,children:(0,T.jsx)(r.G,{"aria-hidden":"true"})})})]})]})},xe=(0,l.memo)((function(){const e=(0,l.useContext)(p.H).getCapabilities(),t=(0,Pe.x)();return t?(0,T.jsx)(h,{uri:t.uri,defaultSortOption:E.ADDED_AT,children:(0,T.jsx)(A.hz,{uri:t.uri,children:(0,T.jsx)(be,{metadata:t,canSort:e.canSortTracksAndEpisodes&&t.totalLength>0})})}):(0,T.jsx)(n.h,{hasError:!1,errorMessage:i.ag.get("error.not_found.title.page"),loadOffline:e.canModifyOffline})}))}}]);
//# sourceMappingURL=xpui-routes-collection-episodes.js.map