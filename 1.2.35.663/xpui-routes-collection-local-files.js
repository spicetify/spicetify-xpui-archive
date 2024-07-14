"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[4389],{17997:(e,t,r)=>{r.d(t,{d:()=>T});var l=r(79474),s=r(22466),i=r(906),a=r(68114),n=r(2884);const o={"custom-order":a.RB,"title-and-artist-title":{column:n.$.TITLE_AND_ARTIST,order:n.H.ASC},"title-and-artist-artist":{column:n.$.TITLE_AND_ARTIST,order:n.H.SECONDARY_ASC},title:{column:n.$.TITLE,order:n.H.ASC},artist:{column:n.$.ARTIST,order:n.H.ASC},"added-by":{column:n.$.ADDED_BY,order:n.H.ASC},"added-at":{column:n.$.ADDED_AT,order:n.H.ASC},duration:{column:n.$.DURATION,order:n.H.ASC},album:{column:n.$.ALBUM,order:n.H.ASC},"album-or-podcast":{column:n.$.ALBUM_OR_PODCAST,order:n.H.ASC},"album-or-show":{column:n.$.ALBUM_OR_SHOW,order:n.H.ASC}},c={"title-and-artist-title":n.$.TITLE_AND_ARTIST,"title-and-artist-artist":n.$.TITLE_AND_ARTIST,title:n.$.TITLE,artist:n.$.ARTIST,"added-by":n.$.ADDED_BY,"added-at":n.$.ADDED_AT,duration:n.$.DURATION,album:n.$.ALBUM,"album-or-podcast":n.$.ALBUM_OR_PODCAST,"album-or-show":n.$.ALBUM_OR_SHOW},u={[n.H.NONE]:n.H.NONE,[n.H.ASC]:n.H.DESC,[n.H.DESC]:n.H.ASC,[n.H.SECONDARY_ASC]:n.H.SECONDARY_DESC,[n.H.SECONDARY_DESC]:n.H.SECONDARY_ASC},d=(n.$.INDEX,{[n.$.INDEX]:{key:"custom-order",get value(){return s.Ru.get("sort.custom-order")}},[n.$.TITLE_AND_ARTIST]:{key:"title",get value(){return s.Ru.get("sort.title")}},[n.$.TITLE]:{key:"title",get value(){return s.Ru.get("sort.title")}},[n.$.ARTIST]:{key:"artist",get value(){return s.Ru.get("sort.artist")}},[n.$.ADDED_BY]:{key:"added-by",get value(){return s.Ru.get("sort.added-by")}},[n.$.ADDED_AT]:{key:"added-at",get value(){return s.Ru.get("sort.date-added")}},[n.$.DURATION]:{key:"duration",get value(){return s.Ru.get("sort.duration")}},[n.$.EVENT_DATE]:null,[n.$.EVENT_INFO]:null,[n.$.ALBUM]:{key:"album",get value(){return s.Ru.get("sort.album")}},[n.$.ALBUM_OR_PODCAST]:{key:"album-or-podcast",get value(){return s.Ru.get("sort.album-or-podcast")}},[n.$.ALBUM_OR_SHOW]:{key:"album-or-show",get value(){return s.Ru.get("sort.album-or-show")}},[n.$.PLAYS]:null,[n.$.RELEASE_DATE]:null,[n.$.ADD]:null,[n.$.ACTIONS]:null,[n.$.CONCERT_VENUE]:null,[n.$.CONCERT_DATE]:null,[n.$.TITLE_AND_AUTHOR]:{key:"title",get value(){return s.Ru.get("sort.title")}},[n.$.AUTHOR]:null});var m=r(64614),g=r(13274);function x(e){return!!e}const T=({columns:e,disabled:t,onSort:r})=>{const T=[...e],A=T.indexOf(n.$.TITLE_AND_ARTIST),C=T.indexOf(n.$.TITLE_AND_AUTHOR);-1!==A&&T.splice(A,1,n.$.TITLE,n.$.ARTIST),-1!==C&&T.splice(C,1);const{sortState:p,setSortState:R}=(0,l.useContext)(a.cL),S=function(e){return null===e.column?d[n.$.INDEX]:(0,m.kj)(e.column,e)?d[n.$.ARTIST]:d[e.column]}(p),y=(0,l.useCallback)((e=>{r?.(),R(((e,t,r)=>e?t!==c[e]||"artist"===e&&[n.H.ASC,n.H.DESC].includes(r)||"title"===e&&[n.H.SECONDARY_ASC,n.H.SECONDARY_DESC].includes(r)?o[e]:{column:c[e],order:u[r]}:a.RB)(e,p.column,p.order))}),[r,R,p.column,p.order]),h=(0,l.useCallback)((()=>null!==p.column),[p.column]),E=T.map((e=>d[e])).filter(x);return(0,g.jsx)(i.g,{options:E,onSelect:y,selected:S,isSelectionChanged:h,sortOrder:p.order,heading:s.Ru.get("drop_down.sort_by"),disabled:t,enableViewModeMenu:!0})}},52621:(e,t,r)=>{r.r(t),r.d(t,{default:()=>be});var l=r(79474),s=r(19319),i=r(11249),a=r(49555),n=r(32778),o=r(85939),c=r(22466),u=r(32629),d=r(86682),m=r(62914),g=r(21740),x=r(93535),T=r(64614),A=r(21951),C=r(68114),p=r(88140),R=r(2884),S=r(82890),y=r(63479),h=r(41122),E=r(29345),b=r(34124),j=r(40088),D=r(67683),I=r(9869),f=r(22929),_=r(99964),$=r(78447),k=r(91377),N=r(17997);const O="uCHqQ74vvHOnctGg0X0B",v="feuNq1FTxMbdeOTuFgpA";var P=r(13274);const H=l.memo((({tracklistDomRef:e})=>{const{spec:t,logger:r}=(0,f.r)(_.createDesktopSearchBarEventFactory,{}),s=(0,l.useCallback)((()=>{r.logInteraction(t.filterFieldFactory().keyStrokeFilter())}),[r,t]),i=(0,l.useCallback)((()=>{r.logInteraction(t.filterFieldFactory().hitClearFilter())}),[r,t]),a=(0,$.w)().filter((e=>C.ws.includes(e)));return(0,P.jsxs)("div",{className:v,children:[(0,P.jsx)(l.Suspense,{fallback:null,children:(0,P.jsx)(k.S,{placeholder:c.Ru.get("playlist.search_in_playlist"),clearOnEscapeInElementRef:e,onFilter:s,onClear:i})}),(0,P.jsx)(N.d,{columns:a})]})}));var L=r(54800),M=r(82810),U=r(42091),B=r(80156),w=r(35281),F=r(60508);const Y=l.memo((function({tracklistDomRef:e,togglePlay:t,isPlaying:r,isActive:s,backgroundColor:i,spec:a,logger:n}){const o=(0,F.X)(),u=(0,l.useMemo)((()=>a.shuffleButtonContainerFactory()),[a]),d=(0,U.j)(),m=(0,l.useCallback)((()=>{const e=(0,B.$I)({isPlaying:r,isActive:s,spec:a.playButtonFactory(),logger:n,uri:h.b});t({loggingParams:e})}),[s,r,n,a,t]);return(0,P.jsx)(L.E,{backgroundColor:i,children:(0,P.jsxs)(M.S,{children:[(0,P.jsx)(x.D,{size:d,onClick:m,isPlaying:r,uri:h.b}),o&&(0,P.jsx)(D.r,{spec:u,children:(0,P.jsx)(w.Y,{entityName:c.Ru.get("local-files"),contextUri:h.b,activationPlacement:"bottomEnd",size:d})}),(0,P.jsx)(D.r,{spec:a,children:(0,P.jsx)(H,{tracklistDomRef:e})})]})})}));r(36805),r(4563),r(79606),r(98211),r(24164),r(79499),r(49271);var X=r(65903),z=r(20370),q=r(50812),W=r(85438),V=r(36943),Z=r(30620),K=r(50859),G=r(42524),Q=r(11854),J=r(19774),ee=r(6165),te=r(63378),re=r(98046),le=r(31853),se=r(12010),ie=r(73843),ae=r(23556),ne=r(32345),oe=r(40393),ce=r(25046),ue=r(77891),de=r(1250),me=r(61988);const ge=l.memo((function({uri:e,uid:t,name:r,duration_ms:s,artists:i,album:a,is19PlusOnly:n,isExplicit:o,isPlayable:u,index:d,contextUri:m,imgUrl:g,usePlayContextItem:x,isCompactMode:T=!1}){const{spec:C}=(0,f.r)(X.i,{data:{position:d,reason:"",uri:e}}),{filter:p}=(0,l.useContext)(A.g),{isActive:S,isPlaying:y,triggerPlay:h,togglePlay:E}=x({uid:t,uri:e,index:d}),{badges:b,hasBadges:j}=(0,K.b)({isExplicit:o}),D=i?.map((e=>e.name)).join(c.Ru.getSeparator())||"",I=(0,$.w)();return(0,P.jsx)(Z.pZ,{value:"row",index:d,children:(0,P.jsx)(z.h,{menu:(0,P.jsx)(G.A,{uri:e,uid:t,contextUri:m}),children:(0,P.jsx)(me.w,{uri:e,contextUri:m,isActive:S,index:d,onTriggerPlay:(e,t)=>{h({loggingParams:t})},ariaRowIndex:d+1,isPlayable:u,ageRestricted:n,dragMetadata:{name:r,createdBy:D},spec:C,isCompactMode:T,children:I.map(((l,n)=>{const o=(0,q.y)(n,l,I);switch(l){case R.$.INDEX:return(0,P.jsx)(o,{ariaColIndex:n,children:(0,P.jsx)(ae.$,{uri:e,playAriaLabel:c.Ru.get("tracklist.a11y.play",r,D),isPlaying:y,isActive:S,onClick:(e,t)=>{E({loggingParams:t})},spec:C,children:(0,P.jsx)(oe.a,{children:d+1})})},n);case R.$.TITLE_AND_ARTIST:return(0,P.jsxs)(o,{ariaColIndex:n,children:[(0,P.jsx)(le.e,{src:g}),(0,P.jsxs)(se.l,{children:[(0,P.jsx)(de.p,{titleText:r,children:(0,P.jsx)(Q.M,{searchWords:[p],textToHighlight:r})}),j&&(0,P.jsx)(te.P,{children:b.explicit?(0,P.jsx)(V.g,{}):null}),(0,P.jsx)(ce.p,{children:i&&(0,P.jsx)(J.E,{nonInteractive:!0,artists:i,filter:p})})]})]},n);case R.$.TITLE:return(0,P.jsx)(o,{ariaColIndex:n,children:(0,P.jsxs)(ie.q,{children:[(0,P.jsx)(de.p,{titleText:r,children:(0,P.jsx)(Q.M,{searchWords:[p],textToHighlight:r})}),j&&(0,P.jsx)(te.P,{children:b.explicit?(0,P.jsx)(V.g,{}):null})]})},n);case R.$.ARTIST:return(0,P.jsx)(o,{ariaColIndex:n,children:(0,P.jsx)(ue.Y,{children:i&&(0,P.jsx)(J.E,{nonInteractive:!0,artists:i,filter:p})})},n);case R.$.ALBUM:return(0,P.jsx)(o,{ariaColIndex:n,children:a?.name&&(0,P.jsx)(ee.g,{nonInteractive:!0,uri:a?.uri,name:a?.name,children:(0,P.jsx)(Q.M,{searchWords:[p],textToHighlight:a?.name})})},n);case R.$.DURATION:return(0,P.jsxs)(o,{ariaColIndex:n,children:[(0,P.jsx)(W.d,{uri:e}),(0,P.jsx)(re.P,{duration:s}),(0,P.jsx)(ne.Y,{menu:(0,P.jsx)(G.A,{uri:e,uid:t,contextUri:m}),label:c.Ru.get("more.label.track",r,D),spec:C})]},n);default:return null}}))})})})}),((e,t)=>e.uri===t.uri&&e.index===t.index&&e.isCompactMode===t.isCompactMode));var xe=r(70431),Te=r(52198);const Ae=new Set(C.ws),Ce=l.memo((function({uri:e,tracks:t,sortState:r,handleSort:s,usePlayContextItem:i,tracklistDomRef:a,isCompactMode:n=!1}){const o=(0,$.w)(),u=(0,l.useRef)(null),d=(0,l.useCallback)(((t,r)=>{const l=(0,xe.g)(t.album?.images,{desiredSize:40,desiredLabel:"small"});return(0,P.jsx)(ge,{index:r,contextUri:e,uri:t.uri,uid:t.uid,isPlayable:t.isPlayable,duration_ms:t.duration.milliseconds,name:t.name,artists:t.artists,album:t.album||void 0,isExplicit:t.isExplicit,is19PlusOnly:t.is19PlusOnly,type:t.type,imgUrl:l?.url||"",usePlayContextItem:i,isCompactMode:n},t.uid)}),[e,i,n]),m=(0,l.useCallback)((e=>({uri:e.uri,uid:e.uid})),[]);return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(Z.pZ,{value:"playlist-tracklist",children:(0,P.jsx)(Te.S4,{ariaLabel:c.Ru.get("local-files"),hasHeaderRow:!0,columns:o,sortableColumns:Ae,sortState:r,onSort:s,renderRow:d,resolveItem:m,tracks:t,nrTracks:t.length,limit:100,outerRef:u,outerDomRef:a,isCompactMode:n,columnPersistenceKey:"playlist-tracklist"},e)})})}));var pe=r(74142),Re=r(98954),Se=r(98475),ye=r(80236);const he=[R.$.INDEX,R.$.TITLE_AND_ARTIST,R.$.ALBUM,R.$.DURATION],Ee=()=>{const{filter:e}=(0,l.useContext)(A.g),{sortState:t,setSortState:r}=(0,l.useContext)(C.cL),_=(0,l.useContext)(E._),$=(0,b.P)(),k=(0,y.z)(a.kleinBlue),N=(0,l.useRef)(null),{spec:v}=(0,f.r)(o.Z,{data:{uri:h.b}}),H=(0,l.useMemo)((()=>v.actionBarFactory()),[v]),L=(0,l.useMemo)((()=>v.tracklistFactory()),[v]),M=(0,I.s)(),{isCompactMode:U}=(0,S.an)(),B=(({isCompactMode:e=!1})=>{const t=[...he];return e&&t.splice(t.indexOf(R.$.TITLE_AND_ARTIST),1,R.$.TITLE,R.$.ARTIST),t})({isCompactMode:U}),w=(0,l.useCallback)(((e,l)=>{r((0,T.So)(e,t)),M.logInteraction(v.tracklistFactory().columnHeaderFactory({identifier:e,position:l||0}).hitSort())}),[r,t,M,v]),{data:F}=(0,s.I)({queryKey:["local-files",t,e],queryFn:()=>_.getTracks((0,T.Xt)(t),e),staleTime:0,gcTime:3e5,placeholderData:i.rX,enabled:$}),{isActive:X,isPlaying:z,togglePlay:q,usePlayContextItem:W}=(0,j.P)({uri:h.b,pages:[{items:(F??[]).map((e=>({...e,provider:null})))}]},{featureIdentifier:"local_files"});return F?e||F.length&&$?(0,P.jsx)(p.a,{columns:B,children:(0,P.jsxs)("div",{role:"presentation",className:O,children:[(0,P.jsxs)(Re.z,{backgroundColor:k,children:[(0,P.jsxs)(d.h,{children:[(0,P.jsx)(x.D,{size:"medium",onClick:()=>q(),isPlaying:z,uri:h.b}),(0,P.jsx)(m.X,{text:c.Ru.get("local-files")})]}),(0,P.jsxs)(Se.Y,{children:[(0,P.jsx)(ye.mm,{children:c.Ru.get("local-files")}),(0,P.jsx)(pe.Z,{children:c.Ru.get("local-files.description")})]})]}),(0,P.jsx)(Y,{togglePlay:q,isPlaying:z,isActive:X,backgroundColor:k,tracklistDomRef:N,spec:H,logger:M}),(0,P.jsx)("div",{className:"contentSpacing",children:(0,P.jsx)(D.r,{spec:L,children:(0,P.jsx)(Ce,{tracks:F,uri:h.b,handleSort:w,sortState:t,usePlayContextItem:W,tracklistDomRef:N,isCompactMode:U})})})]})}):(0,P.jsx)(u.p,{linkTo:"/preferences",linkTitle:c.Ru.get("local-files.empty-button"),message:c.Ru.get("local-files.empty-description"),title:c.Ru.get("local-files.empty-header"),children:(0,P.jsx)(n.s,{size:"xxlarge","aria-hidden":"true"})}):(0,P.jsx)(g.A,{hasError:!1,errorMessage:c.Ru.get("error.request-artist-failure"),loadOffline:!0})},be=()=>(0,P.jsx)(C.sn,{uri:"spotify:internal:local-files",children:(0,P.jsx)(A.s,{uri:"spotify:internal:local-files",children:(0,P.jsx)(Ee,{})})})},34124:(e,t,r)=>{r.d(t,{P:()=>s});var l=r(60191);function s(){return(0,l.y)()[0]}},60191:(e,t,r)=>{r.d(t,{y:()=>i});var l=r(79474),s=r(29345);function i(){const e=(0,l.useContext)(s._),[t,r]=(0,l.useState)(e.getIsEnabled());(0,l.useEffect)((()=>{const t=e.subscribeIsEnabled(r);return()=>t()}),[e]);return[t,(0,l.useCallback)((t=>e.setIsEnabled(t)),[e])]}}}]);
//# sourceMappingURL=xpui-routes-collection-local-files.js.map