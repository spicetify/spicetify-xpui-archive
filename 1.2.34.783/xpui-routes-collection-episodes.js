"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6080],{10044:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Be});a(62355),a(48117);var r=a(79474),l=a(65440),i=a(37298),s=a(15123),n=a(12441),o=a(72861),c=a(57443),A=a(52590),u=a(47578),d=a(48593),E=a(35312);let g=function(e){return e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER",e}({});const p={"show-alphabetical":g.SHOW_ALPHABETICAL,"book-alphabetical":g.BOOK_ALPHABETICAL,"episode-alphabetical":g.EPISODE_ALPHABETICAL,"playlist-alphabetical":g.PLAYLIST_ALPHABETICAL,"album-alphabetical":g.ALBUM_ALPHABETICAL,"recently-added":g.ADDED_AT,"creator-name":g.CREATOR_NAME,"creator-name-alphabetical":g.CREATOR_NAME_ALPHABETICAL,"album-creator-name":g.ALBUM_CREATOR_NAME,"recently-played":g.RECENTLY_PLAYED,"playlist-most-relevant":g.MOST_RELEVANT,"playlist-custom-order":g.CUSTOM_ORDER},C={[g.RECENTLY_PLAYED]:{key:"recently-played",get value(){return i.R.get("collection.sort.recently-played")}},[g.ADDED_AT]:{key:"recently-added",get value(){return i.R.get("collection.sort.recently-added")}},[g.SHOW_ALPHABETICAL]:{key:"show-alphabetical",get value(){return i.R.get("collection.sort.alphabetical")}},[g.BOOK_ALPHABETICAL]:{key:"book-alphabetical",get value(){return i.R.get("collection.sort.alphabetical")}},[g.EPISODE_ALPHABETICAL]:{key:"episode-alphabetical",get value(){return i.R.get("collection.sort.alphabetical")}},[g.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",get value(){return i.R.get("collection.sort.alphabetical")}},[g.ALBUM_CREATOR_NAME]:{key:"album-creator-name",get value(){return i.R.get("collection.sort.creator")}},[g.CREATOR_NAME]:{key:"creator-name",get value(){return i.R.get("collection.sort.creator")}},[g.CREATOR_NAME_ALPHABETICAL]:{key:"creator-name-alphabetical",get value(){return i.R.get("collection.sort.alphabetical")}},[g.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",get value(){return i.R.get("collection.sort.alphabetical")}},[g.MOST_RELEVANT]:{key:"playlist-most-relevant",get value(){return i.R.get("collection.sort.most-relevant")}},[g.CUSTOM_ORDER]:{key:"playlist-custom-order",get value(){return i.R.get("collection.sort.custom-order")}}};g.ADDED_AT,g.ALBUM_ALPHABETICAL,g.CREATOR_NAME,g.ADDED_AT,u.uY.ADDED_AT,u.xB.DESC,g.ALBUM_ALPHABETICAL,u.uY.NAME,u.xB.ASC,g.CREATOR_NAME,u.uY.ARTIST_NAME,u.xB.ASC;g.ADDED_AT,g.CREATOR_NAME_ALPHABETICAL,g.ADDED_AT,u.af.ADDED_AT,u.xB.DESC,g.CREATOR_NAME_ALPHABETICAL,u.af.NAME,u.xB.ASC;g.ADDED_AT,g.SHOW_ALPHABETICAL,g.ADDED_AT,u.WW.ADDED_AT,u.xB.DESC,g.SHOW_ALPHABETICAL,u.WW.NAME,u.xB.ASC;g.ADDED_AT,g.BOOK_ALPHABETICAL,g.ADDED_AT,u.Ev.ADDED_AT,g.BOOK_ALPHABETICAL,u.Ev.NAME;g.MOST_RELEVANT,g.RECENTLY_PLAYED,g.ADDED_AT,g.PLAYLIST_ALPHABETICAL,g.CUSTOM_ORDER,g.ADDED_AT,E.nw.ADDED_AT,E.xB.DESC,g.RECENTLY_PLAYED,E.nw.RECENTLY_PLAYED,E.xB.ASC,g.PLAYLIST_ALPHABETICAL,E.nw.NAME,E.xB.ASC,g.MOST_RELEVANT,E.nw.RELEVANCE,E.xB.DESC,g.CUSTOM_ORDER;g.ADDED_AT,g.ADDED_AT,g.ADDED_AT,g.MOST_RELEVANT,g.ADDED_AT;var D=a(13274);const T=e=>e===g.ADDED_AT?u.xB.DESC:u.xB.ASC,L={option:g.ADDED_AT,order:u.xB.DESC},m={[u.xB.ASC]:u.xB.DESC,[u.xB.DESC]:u.xB.ASC},_=(0,r.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:L}),h=r.memo((function({uri:e,children:t,defaultSortOption:a}){const r={option:a,order:T(a)};return(0,D.jsx)(A.E,{uri:e,defaultState:r,sortContext:_,children:t})}));var y=a(2346),x=a(53846),P=a(123),R=a(13031),S=a(78051),b=a(4405),O=a(15339),f=a(81879),I=a(15486),B=(a(1137),a(70451));const M=r.memo((function({sortOptions:e,onSort:t}){const{sortState:a,setSortState:l}=(0,r.useContext)(_),i=(0,r.useCallback)((e=>{const r=p[e];t?.(r),l(((e,t,a)=>t!==e?{option:e,order:T(e)}:{option:e,order:m[a]})(r,a.option,a.order))}),[t,l,a.option,a.order]),s=e.map((e=>C[e])),n=C[a.option];return(0,D.jsx)(B.g,{options:s,onSelect:i,selected:n,sortOrder:(o=a.order,o===u.xB.ASC?d.H.ASC:d.H.DESC)});var o})),N="VuUpAVlUW_OfMfOcDEID",k=r.memo((function({canSort:e,canFilter:t,filterPlaceholder:a,sortOptions:l}){const{spec:i,logger:s}=(0,I.r)(O.createDesktopSearchBarEventFactory,{}),n=(0,r.useCallback)((()=>{s.logInteraction(i.filterFieldFactory().keyStrokeFilter())}),[s,i]),o=(0,r.useCallback)((()=>{s.logInteraction(i.filterFieldFactory().hitClearFilter())}),[s,i]);return(0,D.jsxs)("div",{className:N,children:[t?(0,D.jsx)(r.Suspense,{fallback:null,children:(0,D.jsx)(f.S,{placeholder:a,onFilter:n,onClear:o})}):null,e?(0,D.jsx)(M,{sortOptions:l}):null]})}));var j=a(23790);const v={[u.ci.NAME]:o.lU.TITLE,[u.ci.SHOW_NAME]:o.lU.SHOW,[u.ci.ADDED_AT]:o.lU.ADDED_AT},H=[g.ADDED_AT,g.CREATOR_NAME,g.EPISODE_ALPHABETICAL],w={[g.ADDED_AT]:u.ci.ADDED_AT,[g.CREATOR_NAME]:u.ci.SHOW_NAME,[g.EPISODE_ALPHABETICAL]:u.ci.NAME};const U=(e,t)=>{if(function(e){return H.includes(e)}(e))return{field:w[e],order:t}},W=(e,t)=>{if(!H.includes(e))return;return(e=>{if(!e?.field)return;const t=v[e.field];if(!t)return;return o.SL[t].map((t=>e.order?`${t} ${e.order}`:t)).join(",")})(U(e,t))};var Y=a(20533),F=a(63441),V=a(43608);const K="m9xwK71Ieq9cySIq4FAP",z="PkEMTu8sGqJeQWJ7HvEs",q="DbH2KkRA8yVWWpXGaNSW",$=({metadata:e,canSort:t,backgroundColor:a,isPlaying:r,isOnline:l,togglePlay:s})=>{const n=(0,j.t)(),{uri:o,name:c}=e,A=e.totalLength>0,u=(0,V.j)();return(0,D.jsx)(Y.E,{backgroundColor:a,children:(0,D.jsxs)(F.S,{children:[A&&(0,D.jsx)(b.D,{onClick:()=>s(),isPlaying:r,size:u,uri:o,disabled:!l,ariaPlayLabel:i.R.get("playlist.a11y.play",c),ariaPauseLabel:i.R.get("playlist.a11y.pause",c)}),t&&(0,D.jsx)("div",{className:q,children:(0,D.jsx)(k,{canSort:n.getCapabilities().canSort,canFilter:n.getCapabilities().canFilter,filterPlaceholder:i.R.get("playlist.search_in_playlist"),sortOptions:H})})]})})};var G=a(62701),Z=a(39431),J=a(70163),Q=a(97799),X=a(19134),ee=a(56260),te=a(41627),ae=a(70856),re=a(79745),le=a(43929),ie=a(67946),se=a(14186);const ne="p6DKqBcwmVtxmHt8ju43",oe="_OxEpxzAgJiTENfolVUN";var ce=a(59866),Ae=a(65948),ue=a(75206),de=a(35126),Ee=a(15094),ge=a(23e3),pe=a(36476),Ce=a(40588),De=a(38401),Te=a(73534);const Le={small:64,standard:300,large:640,xlarge:1024},me=r.memo((function({index:e,contextUri:t,episode:a,onRemove:l,usePlayContextItem:i}){const s=(0,r.useRef)(a.duration.milliseconds-a.timeLeft.milliseconds),n=a.uri,[o,A]=(0,r.useState)(0===a.timeLeft.milliseconds),{filter:u}=(0,r.useContext)(c.gM),{draggable:d,onDragStart:E}=(0,ce.P)(),g=(0,Q.y)(),p=(0,Ae.W)(),[C]=(0,j.A)(n,!0),T=(0,De.g)(a.uri,a.isPlayable),L=(0,y.n)(),{isPlaying:m,isActive:_,togglePlay:h}=i({uri:n,index:e}),[x]=(0,Ee.S)(1e4,(e=>e?.item?.uri===n));(0,r.useEffect)((()=>{m&&(s.current=x)}),[m,x]);const{isPlaying:P,isActive:S,togglePlay:b}=(0,R.P)({uri:n,pages:[{items:[{type:ge.c.EPISODE,uri:n,uid:null,provider:null}]}]},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});(0,r.useEffect)((()=>{C||l()}),[C,l]),(0,r.useEffect)((()=>{m||a.duration.milliseconds<=s.current&&A(!0)}),[m,a.duration.milliseconds]);const O=(0,r.useCallback)((e=>{e||(s.current=0),A(e)}),[]),f=(0,r.useCallback)((e=>{if(e.target!==e.currentTarget)return;let r=`${a.name}`;a.show?.name&&(r+=` • ${a.show.name}`),E(e,{itemUris:[n],dragLabelText:r,contextUri:t})}),[t,a.name,a.show?.name,n,E]),I=(0,r.useCallback)((()=>{p({type:"click",targetUri:n,intent:"navigate"})}),[n,p]),B=(0,r.useCallback)((()=>{L?(p({type:"click",intent:m?"pause":"play"}),h()):(p({type:"click",intent:P?"pause":"play"}),b())}),[L,m,P,p,h,b]),M=(0,r.useCallback)((e=>(0,D.jsx)(Ce.M,{searchWords:[u],textToHighlight:e})),[u]),N=a.podcastSubscription?.isPaywalled??!1,k=a.podcastSubscription?.isUserSubscribed??!1,{badges:v}=(0,pe.b)({isExplicit:a.isExplicit,isMOGEFRestricted:a.is19PlusOnly,isPaywalled:N});let H=!1;(_||!L&&S)&&(H=!0);const w=(0,ee.NC)(Te.cKd,{loadingValue:!1});return C?(0,D.jsxs)(Z.pZ,{value:"row",index:e,children:[(0,D.jsx)("hr",{className:ne,"aria-hidden":!0}),(0,D.jsx)(te.h,{menu:(0,D.jsx)(ae.b,{uri:n,contextUri:t,showUri:a.show?.uri,isPlayed:o,onMarkAsPlayed:O}),children:w?(0,D.jsx)(le.k,{requestId:a.requestId,index:e,uri:n,uid:n,size:g,images:a.images.map((e=>({url:e.url,width:e.width||(e.label?Le[e.label]:null),height:e.height||(e.label?Le[e.label]:null)}))),isPaywalled:N,isUserSubscribed:k,name:a.name,highlightText:M,showName:a.show?.name,showUri:a.show?.uri,description:a.description,isPlayable:T,fullyPlayed:o,durationMs:a.duration.milliseconds,releaseDate:a.release.date||"",resumePositionMs:s.current,draggable:d,handleDragStart:f,handlePlaybackClick:B,handleClick:I,isCurrentlyPlaying:H,isPlaying:L?m:P,position:H?x:void 0,episodeSharingInfo:null,onMarkAsPlayed:O,badges:(0,D.jsxs)(D.Fragment,{children:[v.explicit&&(0,D.jsx)(ue.g,{}),v.paid&&(0,D.jsx)(se.K,{}),v.nineteen&&(0,D.jsx)(de.q,{size:16})]}),playButtonWrapper:e=>(0,D.jsx)(ie.f,{enabled:N&&!k,showUri:a.show?.uri||void 0,children:e})}):(0,D.jsx)(re.R,{requestId:a.requestId,index:e,uri:n,uid:n,size:g,images:a.images.map((e=>({url:e.url,width:e.width||(e.label?Le[e.label]:null),height:e.height||(e.label?Le[e.label]:null)}))),isPaywalled:N,isUserSubscribed:k,name:a.name,highlightText:M,showName:a.show?.name,showUri:a.show?.uri,description:a.description,isPlayable:T,fullyPlayed:o,durationMs:a.duration.milliseconds,releaseDate:a.release.date||"",resumePositionMs:s.current,handleDragStart:f,handlePlaybackClick:B,handleClick:I,isCurrentlyPlaying:H,isPlaying:L?m:P,position:H?x:void 0,episodeSharingInfo:null,onMarkAsPlayed:O,badges:(0,D.jsxs)(D.Fragment,{children:[v.explicit&&(0,D.jsx)(ue.g,{}),v.paid&&(0,D.jsx)(se.K,{}),v.nineteen&&(0,D.jsx)(de.q,{size:16})]}),playButtonWrapper:e=>(0,D.jsx)(ie.f,{enabled:N&&!k,showUri:a.show?.uri||void 0,children:e})})})]}):null})),_e=r.memo((function({contextUri:e,usePlayContextItem:t}){const a=(0,r.useContext)(P.Z),{sortState:l}=(0,r.useContext)(_),[i,s]=(0,r.useState)({totalLength:0,unfilteredTotalLength:0,offset:0,items:[],limit:50}),n=(0,r.useRef)(!1),o=(0,r.useRef)(0),A=(0,r.useRef)(0),{filter:u}=(0,r.useContext)(c.gM),d=(0,r.useCallback)((()=>{A.current++}),[]),{ref:E,breakpoint:g}=(0,X.x)({[J.E.MEDIUM]:0,[J.E.LARGE]:600}),p=(0,r.useCallback)(((e=!1)=>{const t=o.current;null!==t&&(n.current||(n.current=!0,(async e=>{const t=await a.getEpisodes({offset:e-A.current,limit:50,sort:U(l.option,l.order),filter:u});return A.current=0,t})(Number(t)).then((a=>{s((r=>{const l=Number(a.offset)+a.items.length,i=e?[]:[...r.items];return i.splice(Number(t),a.items.length,...a.items),o.current=l<a.totalLength?l:null,{...a,items:i}})),n.current=!1}))))}),[u,a,l]);return(0,r.useEffect)((()=>{o.current=0,p(!0)}),[p]),(0,D.jsx)(Q.o.Provider,{value:g,children:(0,D.jsx)(Z.pZ,{value:"track-list",children:(0,D.jsx)("div",{ref:E,children:(0,D.jsx)(G._,{onReachBottom:p,triggerOnInitialLoad:!0,children:i.items.map(((a,r)=>(0,D.jsx)("div",{className:oe,children:(0,D.jsx)(me,{index:r,episode:a,contextUri:e,onRemove:d,usePlayContextItem:t},`${a.uri}/${r}`)},`${r}${a.uri}`)))})})})})}));var he=a(43029),ye=a(34015),xe=a(94315),Pe=a(86597),Re=a(4658),Se=a(47807);const be=({metadata:e,backgroundColor:t,isPlaying:a,isOnline:l,togglePlay:s})=>{const{uri:n,name:o,images:c,totalLength:A,owner:u}=e,d=(0,r.useMemo)((()=>({id:u.username,uri:u.uri,name:u.username,displayName:u.displayName||void 0,images:u.images||[]})),[u]);return(0,D.jsxs)(ye.z4,{backgroundColor:t,children:[(0,D.jsxs)(xe.h,{children:[(0,D.jsx)(b.D,{size:"medium",onClick:()=>s(),isPlaying:a,uri:n,disabled:!l,ariaPlayLabel:i.R.get("playlist.a11y.play",o),ariaPauseLabel:i.R.get("playlist.a11y.pause",o)}),(0,D.jsx)(Pe.X,{text:o})]}),(0,D.jsx)(ye.KU,{images:c,name:o,shape:Re.u.ROUNDED_CORNERS,renderImage:()=>(0,D.jsx)(Se.b,{})}),(0,D.jsxs)(ye.Y$,{children:[(0,D.jsx)(he.E,{variant:"bodySmallBold",children:i.R.get("playlist")}),(0,D.jsx)(ye.mm,{canEdit:!1,onClick:()=>{},children:o}),(0,D.jsx)(ye.tV,{creators:[d],totalItems:A,hasEpisodes:!0})]})]})};var Oe=a(96590),fe=a(42100);const Ie=({metadata:e,canSort:t})=>{const a=(0,x.z6)("#006450"),n=(0,y.n)(),{sortState:A}=(0,r.useContext)(_),{filter:u}=(0,r.useContext)(c.gM),{isPlaying:d,togglePlay:E,usePlayContextItem:g}=(0,R.P)({uri:e.uri,metadata:{[S.Wi.SORTING_CRITERIA]:W(A.option,A.order),[S.Wi.FILTERING_PREDICATE]:(0,o.ly)(u)}},{featureIdentifier:"your_library",referrerIdentifier:"your_library"},{shuffle:!1,repeat:S.pM.REPEAT_NONE});return(0,D.jsxs)("section",{className:z,"data-testid":"your-episodes-page",children:[(0,D.jsx)(Oe.Q,{children:i.R.get("sidebar.your_episodes")}),(0,D.jsx)(be,{metadata:e,backgroundColor:a,isPlaying:d,isOnline:n,togglePlay:E}),(0,D.jsxs)("div",{className:K,children:[(0,D.jsx)($,{metadata:e,backgroundColor:a,isPlaying:d,isOnline:n,togglePlay:E,canSort:t}),(0,D.jsx)("div",{className:"contentSpacing",children:e.totalLength>0?(0,D.jsx)(_e,{contextUri:e.uri,usePlayContextItem:g}):(0,D.jsx)(s.p,{message:i.R.get("collection.empty-page.episodes-subtitle"),title:i.R.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:i.R.get("collection.empty-page.shows-cta"),renderInline:!0,children:(0,D.jsx)(l.P,{"aria-hidden":"true"})})})]})]})},Be=(0,r.memo)((function(){const e=(0,r.useContext)(P.Z).getCapabilities(),t=(0,fe.u)();return t?(0,D.jsx)(h,{uri:t.uri,defaultSortOption:g.ADDED_AT,children:(0,D.jsx)(c.si,{uri:t.uri,children:(0,D.jsx)(Ie,{metadata:t,canSort:e.canSortTracksAndEpisodes&&t.totalLength>0})})}):(0,D.jsx)(n.A,{hasError:!1,errorMessage:i.R.get("error.not_found.title.page"),loadOffline:e.canModifyOffline})}))},53846:(e,t,a)=>{a.d(t,{Hk:()=>l.H,z6:()=>r.z});a(2272);var r=a(79730),l=a(4122)}}]);
//# sourceMappingURL=xpui-routes-collection-episodes.js.map