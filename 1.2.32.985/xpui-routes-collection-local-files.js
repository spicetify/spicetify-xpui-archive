"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1432],{70192:(e,t,l)=>{l.d(t,{Q:()=>T});l(73952),l(97296),l(41260);var r=l(96651),s=l(12100),i=l(556),a=l(49372),n=l(29764);const o={"custom-order":a.cN,"title-and-artist-title":{column:n.y.TITLE_AND_ARTIST,order:n.g.ASC},"title-and-artist-artist":{column:n.y.TITLE_AND_ARTIST,order:n.g.SECONDARY_ASC},title:{column:n.y.TITLE,order:n.g.ASC},artist:{column:n.y.ARTIST,order:n.g.ASC},"added-by":{column:n.y.ADDED_BY,order:n.g.ASC},"added-at":{column:n.y.ADDED_AT,order:n.g.ASC},duration:{column:n.y.DURATION,order:n.g.ASC},album:{column:n.y.ALBUM,order:n.g.ASC},"album-or-podcast":{column:n.y.ALBUM_OR_PODCAST,order:n.g.ASC},"album-or-show":{column:n.y.ALBUM_OR_SHOW,order:n.g.ASC}},c={"title-and-artist-title":n.y.TITLE_AND_ARTIST,"title-and-artist-artist":n.y.TITLE_AND_ARTIST,title:n.y.TITLE,artist:n.y.ARTIST,"added-by":n.y.ADDED_BY,"added-at":n.y.ADDED_AT,duration:n.y.DURATION,album:n.y.ALBUM,"album-or-podcast":n.y.ALBUM_OR_PODCAST,"album-or-show":n.y.ALBUM_OR_SHOW},d={[n.g.NONE]:n.g.NONE,[n.g.ASC]:n.g.DESC,[n.g.DESC]:n.g.ASC,[n.g.SECONDARY_ASC]:n.g.SECONDARY_DESC,[n.g.SECONDARY_DESC]:n.g.SECONDARY_ASC},u=(n.y.INDEX,{[n.y.INDEX]:{key:"custom-order",get value(){return s._s.get("sort.custom-order")}},[n.y.TITLE_AND_ARTIST]:{key:"title",get value(){return s._s.get("sort.title")}},[n.y.TITLE]:{key:"title",get value(){return s._s.get("sort.title")}},[n.y.ARTIST]:{key:"artist",get value(){return s._s.get("sort.artist")}},[n.y.ADDED_BY]:{key:"added-by",get value(){return s._s.get("sort.added-by")}},[n.y.ADDED_AT]:{key:"added-at",get value(){return s._s.get("sort.date-added")}},[n.y.DURATION]:{key:"duration",get value(){return s._s.get("sort.duration")}},[n.y.EVENT_DATE]:null,[n.y.EVENT_INFO]:null,[n.y.ALBUM]:{key:"album",get value(){return s._s.get("sort.album")}},[n.y.ALBUM_OR_PODCAST]:{key:"album-or-podcast",get value(){return s._s.get("sort.album-or-podcast")}},[n.y.ALBUM_OR_SHOW]:{key:"album-or-show",get value(){return s._s.get("sort.album-or-show")}},[n.y.PLAYS]:null,[n.y.RELEASE_DATE]:null,[n.y.ADD]:null,[n.y.ACTIONS]:null,[n.y.CONCERT_VENUE]:null,[n.y.CONCERT_DATE]:null,[n.y.TITLE_AND_AUTHOR]:{key:"title",get value(){return s._s.get("sort.title")}},[n.y.AUTHOR]:null});var y=l(33912),g=l(60328),m=l(2488);function x(e){return!!e}const T=({columns:e,disabled:t,onSort:l})=>{const T=[...e],A=T.indexOf(y.yw.TITLE_AND_ARTIST),C=T.indexOf(y.yw.TITLE_AND_AUTHOR);-1!==A&&T.splice(A,1,y.yw.TITLE,y.yw.ARTIST),-1!==C&&T.splice(C,1);const{sortState:_,setSortState:p}=(0,r.useContext)(a.iC),S=function(e){return null===e.column?u[y.yw.INDEX]:(0,g.kv)(e.column,e)?u[y.yw.ARTIST]:u[e.column]}(_),h=(0,r.useCallback)((e=>{l?.(),p(((e,t,l)=>e?t!==c[e]||"artist"===e&&[n.g.ASC,n.g.DESC].includes(l)||"title"===e&&[n.g.SECONDARY_ASC,n.g.SECONDARY_DESC].includes(l)?o[e]:{column:c[e],order:d[l]}:a.cN)(e,_.column,_.order))}),[l,p,_.column,_.order]),I=(0,r.useCallback)((()=>null!==_.column),[_.column]),j=T.map((e=>u[e])).filter(x);return(0,m.jsx)(i.W,{options:j,onSelect:h,selected:S,isSelectionChanged:I,sortOrder:_.order,heading:s._s.get("drop_down.sort_by"),disabled:t,enableViewModeMenu:!0})}},88728:(e,t,l)=>{l.r(t),l.d(t,{default:()=>oe});l(73952),l(97296),l(41260);var r=l(96651),s=l(40468),i=l(86620),a=l(32976),n=l(90344),o=l(68376),c=l(12100),d=l(38064),u=l(1044),y=l(62688),g=l(73372),m=l(92376),x=l(62768),T=l(60328),A=l(78808),C=l(33912),_=l(49372),p=l(37200),S=l(60112),h=l(96956),I=l(33876),j=l(48348),D=l(35132),E=l(52588),f=l(40636),b=l(60484),k=l(45748),R=l(37535),N=l(70192);const O="uCHqQ74vvHOnctGg0X0B",v="feuNq1FTxMbdeOTuFgpA";var M=l(2488);const U=r.memo((({tracklistDomRef:e})=>{const{spec:t,logger:l}=(0,f.gp)(b.createDesktopSearchBarEventFactory,{}),s=(0,r.useCallback)((()=>{l.logInteraction(t.filterFieldFactory().keyStrokeFilter())}),[l,t]),i=(0,r.useCallback)((()=>{l.logInteraction(t.filterFieldFactory().hitClearFilter())}),[l,t]),a=(0,k.w)().filter((e=>_.Ur.includes(e)));return(0,M.jsxs)("div",{className:v,children:[(0,M.jsx)(r.Suspense,{fallback:null,children:(0,M.jsx)(R.Q,{placeholder:c._s.get("playlist.search_in_playlist"),clearOnEscapeInElementRef:e,onFilter:s,onClear:i})}),(0,M.jsx)(N.Q,{columns:a})]})}));var L=l(72144),P=l(26681),w=l(75480),B=l(83968),F=l(78e3),Y=l(96692);const H=r.memo((function({tracklistDomRef:e,togglePlay:t,isPlaying:l,isActive:s,backgroundColor:i,spec:a,logger:n}){const o=(0,Y.Y)(),d=(0,r.useMemo)((()=>a.shuffleButtonContainerFactory()),[a]),u=(0,w.u)(),y=(0,r.useCallback)((()=>{const e=(0,B.Il)({isPlaying:l,isActive:s,spec:a.playButtonFactory(),logger:n,uri:I.d});t({loggingParams:e})}),[s,l,n,a,t]);return(0,M.jsx)(L.g,{backgroundColor:i,children:(0,M.jsxs)(P.i,{children:[(0,M.jsx)(x.e,{size:u,onClick:y,isPlaying:l,uri:I.d}),o&&(0,M.jsx)(f.Ud,{spec:d,children:(0,M.jsx)(F.I,{entityName:c._s.get("local-files"),contextUri:I.d,activationPlacement:"bottomEnd",size:u})}),(0,M.jsx)(f.Ud,{spec:a,children:(0,M.jsx)(U,{tracklistDomRef:e})})]})})}));l(58032),l(78924),l(99696),l(63120),l(72248),l(1384),l(41256);var W=l(80296),q=l(7300),z=l(29764),K=l(63780),Q=l(42300),V=l(17556),X=l(81604),G=l(57148),Z=l(40700),$=l(94768),J=l(24300),ee=l(64928),te=l(45060);const le=r.memo((function({uri:e,uid:t,name:l,duration_ms:s,artists:i,album:a,is19PlusOnly:n,isExplicit:o,isPlayable:d,index:u,contextUri:y,imgUrl:g,usePlayContextItem:m,isCompactMode:x=!1}){const{spec:T}=(0,f.gp)(W.C,{data:{position:u,reason:"",uri:e}}),{filter:C}=(0,r.useContext)(A.on),{isActive:_,isPlaying:p,triggerPlay:S,togglePlay:h}=m({uid:t,uri:e,index:u}),{badges:I,hasBadges:j}=(0,G.C)({isExplicit:o}),D=i?.map((e=>e.name)).join(c._s.getSeparator())||"",E=(0,k.w)();return(0,M.jsx)(X.oL,{value:"row",index:u,children:(0,M.jsx)(q.U,{menu:(0,M.jsx)(Z.Y,{uri:e,uid:t,contextUri:y}),children:(0,M.jsx)(te.i,{uri:e,contextUri:y,isActive:_,index:u,onTriggerPlay:(e,t)=>{S({loggingParams:t})},ariaRowIndex:u+1,isPlayable:d,ageRestricted:n,dragMetadata:{name:l,createdBy:D},spec:T,isCompactMode:x,children:E.map(((r,n)=>{const o=(0,K.C)(n,r,E);switch(r){case z.y.INDEX:return(0,M.jsx)(o,{ariaColIndex:n,children:(0,M.jsx)(J.ae,{uri:e,playAriaLabel:c._s.get("tracklist.a11y.play",l,D),isPlaying:p,isActive:_,onClick:(e,t)=>{h({loggingParams:t})},spec:T,children:(0,M.jsx)(J.iq,{children:u+1})})},n);case z.y.TITLE_AND_ARTIST:return(0,M.jsxs)(o,{ariaColIndex:n,children:[(0,M.jsx)(J.Oy,{src:g}),(0,M.jsxs)(J.yY,{children:[(0,M.jsx)(J.Ml,{titleText:l,children:(0,M.jsx)($.S,{searchWords:[C],textToHighlight:l})}),j&&(0,M.jsx)(J.MV,{children:I.explicit?(0,M.jsx)(V.C,{}):null}),(0,M.jsx)(J.aU,{children:i&&(0,M.jsx)(ee.K,{nonInteractive:!0,artists:i,filter:C})})]})]},n);case z.y.TITLE:return(0,M.jsx)(o,{ariaColIndex:n,children:(0,M.jsxs)(J._e,{children:[(0,M.jsx)(J.Ml,{titleText:l,children:(0,M.jsx)($.S,{searchWords:[C],textToHighlight:l})}),j&&(0,M.jsx)(J.MV,{children:I.explicit?(0,M.jsx)(V.C,{}):null})]})},n);case z.y.ARTIST:return(0,M.jsx)(o,{ariaColIndex:n,children:(0,M.jsx)(J.Iz,{children:i&&(0,M.jsx)(ee.K,{nonInteractive:!0,artists:i,filter:C})})},n);case z.y.ALBUM:return(0,M.jsx)(o,{ariaColIndex:n,children:a?.name&&(0,M.jsx)(J.MZ,{nonInteractive:!0,uri:a?.uri,name:a?.name,children:(0,M.jsx)($.S,{searchWords:[C],textToHighlight:a?.name})})},n);case z.y.DURATION:return(0,M.jsxs)(o,{ariaColIndex:n,children:[(0,M.jsx)(Q.K,{uri:e}),(0,M.jsx)(J.U$,{duration:s}),(0,M.jsx)(J.op,{menu:(0,M.jsx)(Z.Y,{uri:e,uid:t,contextUri:y}),label:c._s.get("more.label.track",l,D),spec:T})]},n);default:return null}}))})})})}),((e,t)=>e.uri===t.uri&&e.index===t.index&&e.isCompactMode===t.isCompactMode));var re=l(40068);const se=new Set(_.Ur),ie=r.memo((function({uri:e,tracks:t,sortState:l,handleSort:s,usePlayContextItem:i,tracklistDomRef:a,isCompactMode:n=!1}){const o=(0,k.w)(),d=(0,r.useRef)(null),u=(0,r.useCallback)(((t,l)=>{const r=(0,re.C)(t.album?.images,{desiredSize:40,desiredLabel:"small"});return(0,M.jsx)(le,{index:l,contextUri:e,uri:t.uri,uid:t.uid,isPlayable:t.isPlayable,duration_ms:t.duration.milliseconds,name:t.name,artists:t.artists,album:t.album||void 0,isExplicit:t.isExplicit,is19PlusOnly:t.is19PlusOnly,type:t.type,imgUrl:r?.url||"",usePlayContextItem:i,isCompactMode:n},t.uid)}),[e,i,n]),y=(0,r.useCallback)((e=>({uri:e.uri,uid:e.uid})),[]);return(0,M.jsx)(M.Fragment,{children:(0,M.jsx)(X.oL,{value:"playlist-tracklist",children:(0,M.jsx)(C.aE,{ariaLabel:c._s.get("local-files"),hasHeaderRow:!0,columns:o,sortableColumns:se,sortState:l,onSort:s,renderRow:u,resolveItem:y,tracks:t,nrTracks:t.length,limit:100,outerRef:d,outerDomRef:a,isCompactMode:n,columnPersistenceKey:"playlist-tracklist"},e)})})})),ae=[C.yw.INDEX,C.yw.TITLE_AND_ARTIST,C.yw.ALBUM,C.yw.DURATION],ne=()=>{const{filter:e}=(0,r.useContext)(A.on),{sortState:t,setSortState:l}=(0,r.useContext)(_.iC),b=(0,r.useContext)(j.E),k=(0,D.C)(),R=(0,h.a)(a.eA),N=(0,r.useRef)(null),{spec:v}=(0,f.gp)(o.y,{data:{uri:I.d}}),U=(0,r.useMemo)((()=>v.actionBarFactory()),[v]),L=(0,r.useMemo)((()=>v.tracklistFactory()),[v]),P=(0,f.Mk)(),{isCompactMode:w}=(0,S.Q7)(),B=(({isCompactMode:e=!1})=>{const t=[...ae];return e&&t.splice(t.indexOf(C.yw.TITLE_AND_ARTIST),1,C.yw.TITLE,C.yw.ARTIST),t})({isCompactMode:w}),F=(0,r.useCallback)(((e,r)=>{l((0,T.Md)(e,t)),P.logInteraction(v.tracklistFactory().columnHeaderFactory({identifier:e,position:r||0}).hitSort())}),[l,t,P,v]),{data:Y}=(0,s.U)({queryKey:["local-files",t,e],queryFn:()=>b.getTracks((0,T.Qn)(t),e),staleTime:0,gcTime:3e5,placeholderData:i.iq,enabled:k}),{isActive:W,isPlaying:q,togglePlay:z,usePlayContextItem:K}=(0,E.I)({uri:I.d,pages:[{items:(Y??[]).map((e=>({...e,provider:null})))}]},{featureIdentifier:"local_files"});return Y?e||Y.length&&k?(0,M.jsx)(p.i,{columns:B,children:(0,M.jsxs)("div",{role:"presentation",className:O,children:[(0,M.jsxs)(u.I1,{backgroundColor:R,children:[(0,M.jsxs)(y.E,{children:[(0,M.jsx)(x.e,{size:"medium",onClick:()=>z(),isPlaying:q,uri:I.d}),(0,M.jsx)(g.e,{text:c._s.get("local-files")})]}),(0,M.jsxs)(u.a8,{children:[(0,M.jsx)(u.on,{children:c._s.get("local-files")}),(0,M.jsx)(u.iY,{children:c._s.get("local-files.description")})]})]}),(0,M.jsx)(H,{togglePlay:z,isPlaying:q,isActive:W,backgroundColor:R,tracklistDomRef:N,spec:U,logger:P}),(0,M.jsx)("div",{className:"contentSpacing",children:(0,M.jsx)(f.Ud,{spec:L,children:(0,M.jsx)(ie,{tracks:Y,uri:I.d,handleSort:F,sortState:t,usePlayContextItem:K,tracklistDomRef:N,isCompactMode:w})})})]})}):(0,M.jsx)(d.o,{linkTo:"/preferences",linkTitle:c._s.get("local-files.empty-button"),message:c._s.get("local-files.empty-description"),title:c._s.get("local-files.empty-header"),children:(0,M.jsx)(n.M,{size:"xxlarge","aria-hidden":"true"})}):(0,M.jsx)(m.K,{hasError:!1,errorMessage:c._s.get("error.request-artist-failure"),loadOffline:!0})},oe=()=>(0,M.jsx)(_.sB,{uri:"spotify:internal:local-files",children:(0,M.jsx)(A.WC,{uri:"spotify:internal:local-files",children:(0,M.jsx)(ne,{})})})}}]);
//# sourceMappingURL=xpui-routes-collection-local-files.js.map