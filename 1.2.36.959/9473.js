"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[9473],{61127:(e,t,r)=>{r.d(t,{M:()=>c});var i=r(2092),a=r(63),n=r(36894),l=r(52786),o=r(40292);const s="Ws8Ec3GREpT5PAUesr9b",d="kHu_FTRgoBLSLeAJtyKY";var u=r(13274);const c=function({onClick:e,name:t,images:r,canEdit:c,placeholderType:m,shape:p=o.u.SQUARE,dragUri:g=""}){const[T,C]=(0,a.P)(r),A=(0,n.b)(T,C)===n.g.loaded,{draggable:y,onDragStart:S}=(0,i.P)({itemUris:[g],dragLabelText:t});return(0,u.jsxs)("div",{className:s,"data-testid":`${m}-image`,draggable:y&&!!g,onDragStart:S,children:[(0,u.jsx)(o.b,{loading:"eager",name:t,images:r,placeholderType:m,shape:p}),c&&(0,u.jsx)("div",{className:d,children:(0,u.jsx)(l.a,{overlay:A,onClick:e,rounded:p===o.u.CIRCLE})})]})}},8092:(e,t,r)=>{r.d(t,{d:()=>T});var i=r(79474),a=r(14056),n=r(95063),l=r(98477),o=r(13411);const s={"custom-order":l.RB,"title-and-artist-title":{column:o.$.TITLE_AND_ARTIST,order:o.H.ASC},"title-and-artist-artist":{column:o.$.TITLE_AND_ARTIST,order:o.H.SECONDARY_ASC},title:{column:o.$.TITLE,order:o.H.ASC},artist:{column:o.$.ARTIST,order:o.H.ASC},"added-by":{column:o.$.ADDED_BY,order:o.H.ASC},"added-at":{column:o.$.ADDED_AT,order:o.H.ASC},duration:{column:o.$.DURATION,order:o.H.ASC},album:{column:o.$.ALBUM,order:o.H.ASC},"album-or-podcast":{column:o.$.ALBUM_OR_PODCAST,order:o.H.ASC},"album-or-show":{column:o.$.ALBUM_OR_SHOW,order:o.H.ASC}},d={"title-and-artist-title":o.$.TITLE_AND_ARTIST,"title-and-artist-artist":o.$.TITLE_AND_ARTIST,title:o.$.TITLE,artist:o.$.ARTIST,"added-by":o.$.ADDED_BY,"added-at":o.$.ADDED_AT,duration:o.$.DURATION,album:o.$.ALBUM,"album-or-podcast":o.$.ALBUM_OR_PODCAST,"album-or-show":o.$.ALBUM_OR_SHOW},u={[o.H.NONE]:o.H.NONE,[o.H.ASC]:o.H.DESC,[o.H.DESC]:o.H.ASC,[o.H.SECONDARY_ASC]:o.H.SECONDARY_DESC,[o.H.SECONDARY_DESC]:o.H.SECONDARY_ASC},c=(o.$.INDEX,{[o.$.INDEX]:{key:"custom-order",get value(){return a.Ru.get("sort.custom-order")}},[o.$.TITLE_AND_ARTIST]:{key:"title",get value(){return a.Ru.get("sort.title")}},[o.$.TITLE]:{key:"title",get value(){return a.Ru.get("sort.title")}},[o.$.ARTIST]:{key:"artist",get value(){return a.Ru.get("sort.artist")}},[o.$.ADDED_BY]:{key:"added-by",get value(){return a.Ru.get("sort.added-by")}},[o.$.ADDED_AT]:{key:"added-at",get value(){return a.Ru.get("sort.date-added")}},[o.$.DURATION]:{key:"duration",get value(){return a.Ru.get("sort.duration")}},[o.$.EVENT_DATE]:null,[o.$.EVENT_INFO]:null,[o.$.ALBUM]:{key:"album",get value(){return a.Ru.get("sort.album")}},[o.$.ALBUM_OR_PODCAST]:{key:"album-or-podcast",get value(){return a.Ru.get("sort.album-or-podcast")}},[o.$.ALBUM_OR_SHOW]:{key:"album-or-show",get value(){return a.Ru.get("sort.album-or-show")}},[o.$.PLAYS]:null,[o.$.RELEASE_DATE]:null,[o.$.ADD]:null,[o.$.ACTIONS]:null,[o.$.CONCERT_VENUE]:null,[o.$.CONCERT_DATE]:null,[o.$.TITLE_AND_AUTHOR]:{key:"title",get value(){return a.Ru.get("sort.title")}},[o.$.AUTHOR]:null});var m=r(18645),p=r(13274);function g(e){return!!e}const T=({columns:e,disabled:t,onSort:r})=>{const T=[...e],C=T.indexOf(o.$.TITLE_AND_ARTIST),A=T.indexOf(o.$.TITLE_AND_AUTHOR);-1!==C&&T.splice(C,1,o.$.TITLE,o.$.ARTIST),-1!==A&&T.splice(A,1);const{sortState:y,setSortState:S}=(0,i.useContext)(l.cL),E=function(e){return null===e.column?c[o.$.INDEX]:(0,m.kj)(e.column,e)?c[o.$.ARTIST]:c[e.column]}(y),h=(0,i.useCallback)((e=>{r?.(),S(((e,t,r)=>e?t!==d[e]?s[e]:{column:d[e],order:u[r]}:l.RB)(e,y.column,y.order))}),[r,S,y.column,y.order]),R=(0,i.useCallback)((()=>null!==y.column),[y.column]),b=T.map((e=>c[e])).filter(g);return(0,p.jsx)(n.g,{options:b,onSelect:h,selected:E,isSelectionChanged:R,sortOrder:y.order,heading:a.Ru.get("drop_down.sort_by"),disabled:t,enableViewModeMenu:!0})}},7964:(e,t,r)=>{r.d(t,{x:()=>O});var i=r(79474),a=r(99754),n=r(98764),l=r(22215),o=r(14056),s=r(88291),d=r(35663),u=r(61127),c=r(29117),m=r(6950),p=r(27699),g=r(39517),T=r(96343),C=r(36919),A=r(46545),y=r(73068),S=r(92585),E=r(79055),h=r(28275),R=r(64664),b=r(19498),D=r(14494),k=r(30797),_=r(63204),x=r(61623),I=r(13274);const O=function({metadata:e,isPlaying:t,isPublished:r,togglePlay:O,backgroundColor:N,spec:v,specLikedSongs:L,totalItems:w}){const{uri:$,name:f,description:U="",images:B,totalLikes:j,duration:H,owner:P,isOwnedBySelf:M=!1,formatListData:W,madeFor:F=null,collaborators:Y,hasSpotifyTracks:X,hasEpisodes:J,hasSpotifyAudiobooks:K}=e,V=W?.attributes||{},G=V.header_image_url_desktop||V.image_url||null,z=null!==G?[{url:G,width:null,height:null}]:[],Z="daylist"===W?.type?V.expires:void 0,q=(0,a.wA)(),Q=(0,l.NC)(b.G6N),ee=(0,D.s)(),te=(0,i.useMemo)((()=>(0,_.c)(F,P,Y?.items,Q)),[F,P,Y?.items,Q]),re=(0,i.useContext)(h.$$),ie=(0,i.useContext)(k.VV),ae=(0,i.useCallback)((()=>{if(v){const e=v.ownerFactory().hitUiReveal();ee.logInteraction(e)}ie({type:"open",uri:$})}),[ie,$,v,ee]),ne=(0,i.useCallback)((e=>{if(v){const e=v?.descriptionTextFactory().hitUiReveal();ee.logInteraction(e)}re({type:"open",playlistDetails:{name:f,description:U,image:B[0],uri:$},focusedElement:e})}),[v,re,f,U,B,$,ee]),le=(0,i.useCallback)((()=>{if(v){const e=v.coverArtFactory().hitUiReveal();ee.logInteraction(e)}re({type:"openWithImagePicker",playlistDetails:{name:f,description:U,image:B[0],uri:$}})}),[re,f,U,B,$,ee,v]),oe=(0,l.NC)(b.vvY),se=(0,i.useCallback)((()=>{q(R.I3.actions.open({name:f,uri:$}))}),[q,f,$]),de=(0,i.useCallback)(((e,t)=>{if(v){const e=v.ownerFactory().hitUiNavigate({destination:t.creator.uri});ee.logInteraction(e)}if(L){const e=L.ownerFactory().hitUiNavigate({destination:t.creator.uri});ee.logInteraction(e)}}),[ee,v,L]),ue=Q&&e.permissions?e.permissions?.isPrivate?o.Ru.get("private_playlist"):o.Ru.get("public_playlist"):o.Ru.get("playlist");return(0,I.jsxs)(c.z,{backgroundColor:N,backgroundImages:z,children:[(0,I.jsxs)(p.h,{children:[(0,I.jsx)(S.D,{size:"medium",onClick:O,isPlaying:t,uri:$}),(0,I.jsx)(g.X,{text:f,dragUri:$,dragLabel:f})]}),G?null:(0,I.jsx)(s.h,{menu:(0,I.jsx)(d.W,{uri:$,isPublished:r}),children:(0,I.jsx)(x.X,{children:(0,I.jsx)(u.M,{canEdit:M,name:f,images:B,onClick:oe?se:le,placeholderType:"playlist",dragUri:$})})}),(0,I.jsxs)(m.Y,{children:[(0,I.jsx)(C.B,{children:ue}),(0,I.jsx)(s.h,{menu:(0,I.jsx)(d.W,{uri:$,isPublished:r}),children:(0,I.jsx)(A.mm,{canEdit:M,onClick:()=>{if(v){const e=v.titleFactory().hitUiReveal();ee.logInteraction(e)}ne(h.NV.TITLE)},dragUri:$,dragLabel:f,ariaLabel:o.Ru.get("playlist.edit-details.button",f),scaleAtMinWidth:A.tw,children:f})}),U&&(0,I.jsx)(n.E,{variant:"bodySmall",className:E.A.whiteOpacity,onClick:e=>{M&&(e=>{"href"in e.target||ne(h.NV.DESCRIPTION)})(e)},children:(0,I.jsx)(y.q,{html:U,onTimeStampClick:()=>{},className:E.A.playlistDescription})}),(0,I.jsx)(T.t,{creators:te,onPiledCreatorsClick:ae,onCreatorClick:de,totalItems:w,totalLikes:j??0,durationMilliseconds:H?.milliseconds,isEstimatedDuration:H?.isEstimate,daylistNextUpdate:Z,newEntries:parseInt(V.new_entries_count||"0",10),hasTracks:X??!1,hasEpisodes:J??!1,hasAudiobooks:K??!1})]})]})}},63204:(e,t,r)=>{function i(e){return e.user||null}function a(e){return!!e}function n(e,t=!1){return{id:e.username,uri:e.uri,name:e.username,displayName:e.displayName||void 0,images:e.images,isMadeFor:t}}function l(e,t,r=[],l){return e?[n(e,!0)]:r.length>1&&l?r.map(i).filter(a).map((e=>n(e))):[n(t)]}function o(e){return e.every((e=>"audiobook"===e?.type||null===e))}r.d(t,{R:()=>o,c:()=>l})},36894:(e,t,r)=>{r.d(t,{b:()=>n,g:()=>a});var i=r(79474);let a=function(e){return e[e.loading=0]="loading",e[e.loaded=1]="loaded",e[e.error=2]="error",e}({});function n(e,t){const r=e?a.loading:a.error,[n,l]=(0,i.useState)(r);return(0,i.useEffect)((()=>{const r=()=>{l(a.loaded)},i=()=>{l(a.error)};if(!e)return l(a.error),()=>{};l(a.loading);const n=document.createElement("img");return n.addEventListener("load",r),n.addEventListener("error",i),n.setAttribute("src",e),t&&n.setAttribute("srcSet",t),()=>{n.removeEventListener("load",r),n.removeEventListener("error",i)}}),[e,t]),n}},79055:(e,t,r)=>{r.d(t,{A:()=>i});const i={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",playlist:"dZ3U5sTGUTdanNamXe1z",searchBoxContainer:"KodyK77Gzjb8NqPGpcgw",leadingSlot:"KzOZOlCPgREEBCJH1Ieg",recommendedTrackList:"kwe0I8sSNMv3gYBjkRYP",playlistContent:"rezqw3Q4OEPB1m4rmwfw",playlistDescription:"fUYMR7LuRXv0KJWFvRZA",top:"PZkwbwJD1afoCmJkGt8w",header:"yP3JLuwUNDIQHxRFilK3",subtitle:"NCKSUYdZaTMrobq8ilkc",refreshButton:"QmGi2oa43BTcEZ5MCr9T",playlistImageContainer:"oq1ci28WPaRsWkvRiB_J",playlistInlineCurationSection:"Ykd_JWqkR9gSLHISDBwP",playlistInlineCurationTitle:"SMJIXlalPk_TESlyt2pC",playlistInlineCurationWrapper:"g9xHCCSXDR8S5NvTbfwL",playlistInlineCurationCloseButton:"FC40AOSbVM9LXjVi7bjO",playlistInlineCurationBackButton:"hVcUafGrnsA6nD1dJzc5",artistResultListTitle:"rARdlCShKVQsvuXamFOX",seeMore:"STDuzt77yRCueC4Ohenl",emptyStateContainer:"Bl_kg24BjWgcXPokgEKy",searchResultListContainer:"sAPXlA_oxu_8x1Cn0NTC",emptySearchTermContainer:"_Z2TnFjt8GB5ryOtvyti",whiteOpacity:"jpVuvMOCbpaRr_6FLf3W",noBooklistSupportContainer:"u9KYiVXeDRQDGlTDH6rM",concertsFooter:"a4FkPOXWBc0nK4yzsJCf",promoRow:"DWkbhLMcDefEZwJ5jXCq",promoTitle:"byOUxNEoiJOtBN6xTY24",ctaLink:"IWWS0F3oiajJG7nlrjXj",promoImage:"pbkk9BuHlY36lmWvEmbg",disclaimerContainer:"mWbx87vgssexrOs2tx4I",icon:"tzeKawjOOKFw1KfQ34mG"}}}]);
//# sourceMappingURL=9473.js.map