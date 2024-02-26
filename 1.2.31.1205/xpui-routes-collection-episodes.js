"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1289],{84314:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ie});a(46758),a(53321);var r=a(50959),l=a(26520),i=a(85648),s=a(38024),n=a(91643),o=a(21536),A=a(65432),c=a(80090),u=a(42652),d=a(98328),E=a(59374);let g=function(e){return e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER",e}({});const D={"show-alphabetical":g.SHOW_ALPHABETICAL,"book-alphabetical":g.BOOK_ALPHABETICAL,"episode-alphabetical":g.EPISODE_ALPHABETICAL,"playlist-alphabetical":g.PLAYLIST_ALPHABETICAL,"album-alphabetical":g.ALBUM_ALPHABETICAL,"recently-added":g.ADDED_AT,"creator-name":g.CREATOR_NAME,"creator-name-alphabetical":g.CREATOR_NAME_ALPHABETICAL,"album-creator-name":g.ALBUM_CREATOR_NAME,"recently-played":g.RECENTLY_PLAYED,"playlist-most-relevant":g.MOST_RELEVANT,"playlist-custom-order":g.CUSTOM_ORDER},C={[g.RECENTLY_PLAYED]:{key:"recently-played",get value(){return i.ag.get("collection.sort.recently-played")}},[g.ADDED_AT]:{key:"recently-added",get value(){return i.ag.get("collection.sort.recently-added")}},[g.SHOW_ALPHABETICAL]:{key:"show-alphabetical",get value(){return i.ag.get("collection.sort.alphabetical")}},[g.BOOK_ALPHABETICAL]:{key:"book-alphabetical",get value(){return i.ag.get("collection.sort.alphabetical")}},[g.EPISODE_ALPHABETICAL]:{key:"episode-alphabetical",get value(){return i.ag.get("collection.sort.alphabetical")}},[g.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",get value(){return i.ag.get("collection.sort.alphabetical")}},[g.ALBUM_CREATOR_NAME]:{key:"album-creator-name",get value(){return i.ag.get("collection.sort.creator")}},[g.CREATOR_NAME]:{key:"creator-name",get value(){return i.ag.get("collection.sort.creator")}},[g.CREATOR_NAME_ALPHABETICAL]:{key:"creator-name-alphabetical",get value(){return i.ag.get("collection.sort.alphabetical")}},[g.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",get value(){return i.ag.get("collection.sort.alphabetical")}},[g.MOST_RELEVANT]:{key:"playlist-most-relevant",get value(){return i.ag.get("collection.sort.most-relevant")}},[g.CUSTOM_ORDER]:{key:"playlist-custom-order",get value(){return i.ag.get("collection.sort.custom-order")}}};g.ADDED_AT,g.ALBUM_ALPHABETICAL,g.CREATOR_NAME,g.ADDED_AT,u.lY.ADDED_AT,u.As.DESC,g.ALBUM_ALPHABETICAL,u.lY.NAME,u.As.ASC,g.CREATOR_NAME,u.lY.ARTIST_NAME,u.As.ASC;g.ADDED_AT,g.CREATOR_NAME_ALPHABETICAL,g.ADDED_AT,u.hx.ADDED_AT,u.As.DESC,g.CREATOR_NAME_ALPHABETICAL,u.hx.NAME,u.As.ASC;g.ADDED_AT,g.SHOW_ALPHABETICAL,g.ADDED_AT,u.aW.ADDED_AT,u.As.DESC,g.SHOW_ALPHABETICAL,u.aW.NAME,u.As.ASC;g.ADDED_AT,g.BOOK_ALPHABETICAL,g.ADDED_AT,u.VN.ADDED_AT,g.BOOK_ALPHABETICAL,u.VN.NAME;g.MOST_RELEVANT,g.RECENTLY_PLAYED,g.ADDED_AT,g.PLAYLIST_ALPHABETICAL,g.CUSTOM_ORDER,g.ADDED_AT,E.bD.ADDED_AT,E.As.DESC,g.RECENTLY_PLAYED,E.bD.RECENTLY_PLAYED,E.As.ASC,g.PLAYLIST_ALPHABETICAL,E.bD.NAME,E.As.ASC,g.MOST_RELEVANT,E.bD.RELEVANCE,E.As.DESC,g.CUSTOM_ORDER;g.ADDED_AT,g.ADDED_AT,g.ADDED_AT,g.MOST_RELEVANT,g.ADDED_AT;var T=a(11527);const p=e=>e===g.ADDED_AT?u.As.DESC:u.As.ASC,L={option:g.ADDED_AT,order:u.As.DESC},h={[u.As.ASC]:u.As.DESC,[u.As.DESC]:u.As.ASC},y=(0,r.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:L}),_=r.memo((function({uri:e,children:t,defaultSortOption:a}){const r={option:a,order:p(a)};return(0,T.jsx)(c.r,{uri:e,defaultState:r,sortContext:y,children:t})}));var m=a(9443),P=a(47262),b=a(20980),x=a(22527),S=a(98692),O=a(57986),f=a(51837),I=a(8824),R=a(80626),N=(a(86277),a(67408));const k=r.memo((function({sortOptions:e,onSort:t}){const{sortState:a,setSortState:l}=(0,r.useContext)(y),i=(0,r.useCallback)((e=>{const r=D[e];t?.(r),l(((e,t,a)=>t!==e?{option:e,order:p(e)}:{option:e,order:h[a]})(r,a.option,a.order))}),[t,l,a.option,a.order]),s=e.map((e=>C[e])),n=C[a.option];return(0,T.jsx)(N.A,{options:s,onSelect:i,selected:n,sortOrder:(o=a.order,o===u.As.ASC?d.k.ASC:d.k.DESC)});var o})),M="VuUpAVlUW_OfMfOcDEID",j=r.memo((function({canSort:e,canFilter:t,filterPlaceholder:a,sortOptions:l}){const{spec:i,logger:s}=(0,R.fU)(f.createDesktopSearchBarEventFactory,{}),n=(0,r.useCallback)((()=>{s.logInteraction(i.filterFieldFactory().keyStrokeFilter())}),[s,i]),o=(0,r.useCallback)((()=>{s.logInteraction(i.filterFieldFactory().hitClearFilter())}),[s,i]);return(0,T.jsxs)("div",{className:M,children:[t?(0,T.jsx)(r.Suspense,{fallback:null,children:(0,T.jsx)(I.K,{placeholder:a,onFilter:n,onClear:o})}):null,e?(0,T.jsx)(k,{sortOptions:l}):null]})}));var B=a(22795);const H={[u.yW.NAME]:o.hI.TITLE,[u.yW.SHOW_NAME]:o.hI.SHOW,[u.yW.ADDED_AT]:o.hI.ADDED_AT},v=[g.ADDED_AT,g.CREATOR_NAME,g.EPISODE_ALPHABETICAL],U={[g.ADDED_AT]:u.yW.ADDED_AT,[g.CREATOR_NAME]:u.yW.SHOW_NAME,[g.EPISODE_ALPHABETICAL]:u.yW.NAME};const w=(e,t)=>{if(function(e){return v.includes(e)}(e))return{field:U[e],order:t}},W=(e,t)=>{if(!v.includes(e))return;return(e=>{if(!e?.field)return;const t=H[e.field];if(!t)return;return o.Vd[t].map((t=>e.order?`${t} ${e.order}`:t)).join(",")})(w(e,t))};var Y=a(15842),F=a(66205),V=a(66819);const K="m9xwK71Ieq9cySIq4FAP",$="PkEMTu8sGqJeQWJ7HvEs",z="DbH2KkRA8yVWWpXGaNSW",q=({metadata:e,canSort:t,backgroundColor:a,isPlaying:r,isOnline:l,togglePlay:s})=>{const n=(0,B.y)(),{uri:o,name:A}=e,c=e.totalLength>0,u=(0,V.j)();return(0,T.jsx)(Y.o,{backgroundColor:a,children:(0,T.jsxs)(F.F,{children:[c&&(0,T.jsx)(O.$,{onClick:()=>s(),isPlaying:r,size:u,uri:o,disabled:!l,ariaPlayLabel:i.ag.get("playlist.a11y.play",A),ariaPauseLabel:i.ag.get("playlist.a11y.pause",A)}),t&&(0,T.jsx)("div",{className:z,children:(0,T.jsx)(j,{canSort:n.getCapabilities().canSort,canFilter:n.getCapabilities().canFilter,filterPlaceholder:i.ag.get("playlist.search_in_playlist"),sortOptions:v})})]})})};var G=a(80936),J=a(45438),X=a(61058),Q=a(10226),Z=a(82579),ee=a(64329),te=a(18050),ae=a(12553),re=a(51040),le=a(94739);const ie="p6DKqBcwmVtxmHt8ju43",se="_OxEpxzAgJiTENfolVUN";var ne=a(17053),oe=a(13734),Ae=a(44724),ce=a(52993),ue=a(23769),de=a(82857),Ee=a(74234),ge=a(4901),De=a(42783),Ce=a(17676);const Te={small:64,standard:300,large:640,xlarge:1024},pe=r.memo((function({index:e,contextUri:t,episode:a,onRemove:l,usePlayContextItem:i}){const s=(0,r.useRef)(a.duration.milliseconds-a.timeLeft.milliseconds),n=a.uri,[o,c]=(0,r.useState)(0===a.timeLeft.milliseconds),{filter:u}=(0,r.useContext)(A.fo),d=(0,ne.O)(),E=(0,X.jh)(),g=(0,oe.o)(),[D]=(0,B.Z)(n,!0),C=(0,De.k)(a.uri,a.isPlayable),p=(0,m.k)(),{isPlaying:L,isActive:h,togglePlay:y}=i({uri:n,index:e}),[_]=(0,ue.z)(1e4,(e=>e?.item?.uri===n));(0,r.useEffect)((()=>{L&&(s.current=_)}),[L,_]);const{isPlaying:P,isActive:b,togglePlay:S}=(0,x.n)({uri:n,pages:[{items:[{type:de.p.EPISODE,uri:n,uid:null,provider:null}]}]},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});(0,r.useEffect)((()=>{D||l()}),[D,l]),(0,r.useEffect)((()=>{L||a.duration.milliseconds<=s.current&&c(!0)}),[L,a.duration.milliseconds]);const O=(0,r.useCallback)((e=>{e||(s.current=0),c(e)}),[]),f=e=>{if(e.target!==e.currentTarget)return;let r=`${a.name}`;a.show&&(r+=` • ${a.show.name}`),d(e,{itemUris:[n],dragLabelText:r,contextUri:t})},I=(0,r.useCallback)((()=>{g({type:"click",targetUri:n,intent:"navigate"})}),[n,g]),R=(0,r.useCallback)((()=>{p?(g({type:"click",intent:L?"pause":"play"}),y()):(g({type:"click",intent:P?"pause":"play"}),S())}),[p,L,P,g,y,S]),N=(0,r.useCallback)((e=>(0,T.jsx)(ge.o,{searchWords:[u],textToHighlight:e})),[u]),k=a.podcastSubscription?.isPaywalled??!1,M=a.podcastSubscription?.isUserSubscribed??!1,{badges:j}=(0,Ee.r)({isExplicit:a.isExplicit,isMOGEFRestricted:a.is19PlusOnly,isPaywalled:k});let H=!1;(h||!p&&b)&&(H=!0);const v=(0,Q.W6)(Ce.eli,{loadingValue:!1});return D?(0,T.jsxs)(J.JL,{value:"row",index:e,children:[(0,T.jsx)("hr",{className:ie,"aria-hidden":!0}),(0,T.jsx)(Z._,{menu:(0,T.jsx)(ee.k,{uri:n,contextUri:t,showUri:a.show?.uri,isPlayed:o,onMarkAsPlayed:O}),children:v?(0,T.jsx)(ae.k,{requestId:a.requestId,index:e,uri:n,uid:n,size:E,images:a.images.map((e=>({url:e.url,width:e.width||(e.label?Te[e.label]:null),height:e.height||(e.label?Te[e.label]:null)}))),isPaywalled:k,isUserSubscribed:M,name:a.name,highlightText:N,showName:a.show?.name,showUri:a.show?.uri,description:a.description,isPlayable:C,fullyPlayed:o,durationMs:a.duration.milliseconds,releaseDate:a.release.date||"",resumePositionMs:s.current,handleDragStart:f,handlePlaybackClick:R,handleClick:I,isCurrentlyPlaying:H,isPlaying:p?L:P,position:H?_:void 0,episodeSharingInfo:null,onMarkAsPlayed:O,badges:(0,T.jsxs)(T.Fragment,{children:[j.explicit&&(0,T.jsx)(Ae.N,{}),j.paid&&(0,T.jsx)(le.g,{}),j.nineteen&&(0,T.jsx)(ce.X,{size:16})]}),playButtonWrapper:e=>(0,T.jsx)(re.l,{enabled:k&&!M,showUri:a.show?.uri||void 0,children:e})}):(0,T.jsx)(te.X,{requestId:a.requestId,index:e,uri:n,uid:n,size:E,images:a.images.map((e=>({url:e.url,width:e.width||(e.label?Te[e.label]:null),height:e.height||(e.label?Te[e.label]:null)}))),isPaywalled:k,isUserSubscribed:M,name:a.name,highlightText:N,showName:a.show?.name,showUri:a.show?.uri,description:a.description,isPlayable:C,fullyPlayed:o,durationMs:a.duration.milliseconds,releaseDate:a.release.date||"",resumePositionMs:s.current,handleDragStart:f,handlePlaybackClick:R,handleClick:I,isCurrentlyPlaying:H,isPlaying:p?L:P,position:H?_:void 0,episodeSharingInfo:null,onMarkAsPlayed:O,badges:(0,T.jsxs)(T.Fragment,{children:[j.explicit&&(0,T.jsx)(Ae.N,{}),j.paid&&(0,T.jsx)(le.g,{}),j.nineteen&&(0,T.jsx)(ce.X,{size:16})]}),playButtonWrapper:e=>(0,T.jsx)(re.l,{enabled:k&&!M,showUri:a.show?.uri||void 0,children:e})})})]}):null})),Le=r.memo((function({contextUri:e,usePlayContextItem:t}){const a=(0,r.useContext)(b.H),{sortState:l}=(0,r.useContext)(y),[i,s]=(0,r.useState)({totalLength:0,unfilteredTotalLength:0,offset:0,items:[],limit:50}),n=(0,r.useRef)(!1),o=(0,r.useRef)(0),c=(0,r.useRef)(0),{filter:u}=(0,r.useContext)(A.fo),d=(0,r.useCallback)((()=>{c.current++}),[]),{ref:E,breakpoint:g}=(0,X.Db)({[X.Uo.MEDIUM]:0,[X.Uo.LARGE]:600}),D=(0,r.useCallback)(((e=!1)=>{const t=o.current;null!==t&&(n.current||(n.current=!0,(async e=>{const t=await a.getEpisodes({offset:e-c.current,limit:50,sort:w(l.option,l.order),filter:u});return c.current=0,t})(Number(t)).then((a=>{s((r=>{const l=Number(a.offset)+a.items.length,i=e?[]:[...r.items];return i.splice(Number(t),a.items.length,...a.items),o.current=l<a.totalLength?l:null,{...a,items:i}})),n.current=!1}))))}),[u,a,l]);return(0,r.useEffect)((()=>{o.current=0,D(!0)}),[D]),(0,T.jsx)(X.ZU.Provider,{value:g,children:(0,T.jsx)(J.JL,{value:"track-list",children:(0,T.jsx)("div",{ref:E,children:(0,T.jsx)(G.C,{onReachBottom:D,triggerOnInitialLoad:!0,children:i.items.map(((a,r)=>(0,T.jsx)("div",{className:se,children:(0,T.jsx)(pe,{index:r,episode:a,contextUri:e,onRemove:d,usePlayContextItem:t},`${a.uri}/${r}`)},`${r}${a.uri}`)))})})})})}));var he=a(69736),ye=a(97922),_e=a(81639),me=a(16118),Pe=a(93421),be=a(84535);const xe=({metadata:e,backgroundColor:t,isPlaying:a,isOnline:l,togglePlay:s})=>{const{uri:n,name:o,images:A,totalLength:c,owner:u}=e,d=(0,r.useMemo)((()=>({id:u.username,uri:u.uri,name:u.username,displayName:u.displayName||void 0,images:u.images||[]})),[u]);return(0,T.jsxs)(ye.gF,{backgroundColor:t,children:[(0,T.jsxs)(_e.W,{children:[(0,T.jsx)(O.$,{size:"medium",onClick:()=>s(),isPlaying:a,uri:n,disabled:!l,ariaPlayLabel:i.ag.get("playlist.a11y.play",o),ariaPauseLabel:i.ag.get("playlist.a11y.pause",o)}),(0,T.jsx)(me.i,{text:o})]}),(0,T.jsx)(ye.Oz,{images:A,name:o,shape:Pe.K.ROUNDED_CORNERS,renderImage:()=>(0,T.jsx)(be.$,{})}),(0,T.jsxs)(ye.sP,{children:[(0,T.jsx)(he.x,{variant:"bodySmallBold",children:i.ag.get("playlist")}),(0,T.jsx)(ye.xd,{canEdit:!1,onClick:()=>{},children:o}),(0,T.jsx)(ye.QS,{creators:[d],totalItems:c,hasEpisodes:!0})]})]})};var Se=a(41038),Oe=a(72689);const fe=({metadata:e,canSort:t})=>{const a=(0,P.Y5)("#006450"),n=(0,m.k)(),{sortState:c}=(0,r.useContext)(y),{filter:u}=(0,r.useContext)(A.fo),{isPlaying:d,togglePlay:E,usePlayContextItem:g}=(0,x.n)({uri:e.uri,metadata:{[S.sb.SORTING_CRITERIA]:W(c.option,c.order),[S.sb.FILTERING_PREDICATE]:(0,o.aK)(u)}},{featureIdentifier:"your_library",referrerIdentifier:"your_library"},{shuffle:!1,repeat:S.zq.REPEAT_NONE});return(0,T.jsxs)("section",{className:$,"data-testid":"your-episodes-page",children:[(0,T.jsx)(Se.$,{children:i.ag.get("sidebar.your_episodes")}),(0,T.jsx)(xe,{metadata:e,backgroundColor:a,isPlaying:d,isOnline:n,togglePlay:E}),(0,T.jsxs)("div",{className:K,children:[(0,T.jsx)(q,{metadata:e,backgroundColor:a,isPlaying:d,isOnline:n,togglePlay:E,canSort:t}),(0,T.jsx)("div",{className:"contentSpacing",children:e.totalLength>0?(0,T.jsx)(Le,{contextUri:e.uri,usePlayContextItem:g}):(0,T.jsx)(s.u,{message:i.ag.get("collection.empty-page.episodes-subtitle"),title:i.ag.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:i.ag.get("collection.empty-page.shows-cta"),renderInline:!0,children:(0,T.jsx)(l.G,{"aria-hidden":"true"})})})]})]})},Ie=(0,r.memo)((function(){const e=(0,r.useContext)(b.H).getCapabilities(),t=(0,Oe.x)();return t?(0,T.jsx)(_,{uri:t.uri,defaultSortOption:g.ADDED_AT,children:(0,T.jsx)(A.hz,{uri:t.uri,children:(0,T.jsx)(fe,{metadata:t,canSort:e.canSortTracksAndEpisodes&&t.totalLength>0})})}):(0,T.jsx)(n.h,{hasError:!1,errorMessage:i.ag.get("error.not_found.title.page"),loadOffline:e.canModifyOffline})}))}}]);
//# sourceMappingURL=xpui-routes-collection-episodes.js.map