"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[9194],{1964:(e,t,i)=>{i.d(t,{M:()=>c});var r=i(59866),a=i(11862),n=i(22726),l=i(47805),o=i(34015);const s="Ws8Ec3GREpT5PAUesr9b",d="kHu_FTRgoBLSLeAJtyKY";var u=i(13274);const c=function({onClick:e,name:t,images:i,canEdit:c,placeholderType:m,shape:g=o.bg.SQUARE,dragUri:C=""}){const[p,T]=(0,a.P)(i),A=(0,n.b)(p,T)===n.g.loaded,{draggable:S,onDragStart:E}=(0,r.P)({itemUris:[C],dragLabelText:t});return(0,u.jsxs)("div",{className:s,"data-testid":`${m}-image`,draggable:S&&!!C,onDragStart:E,children:[(0,u.jsx)(o.bI,{loading:"eager",name:t,images:i,placeholderType:m,shape:g}),c&&(0,u.jsx)("div",{className:d,children:(0,u.jsx)(l.a,{overlay:A,onClick:e,rounded:g===o.bg.CIRCLE})})]})}},66551:(e,t,i)=>{i.d(t,{d:()=>T});i(62355),i(48117),i(1137);var r=i(79474),a=i(37298),n=i(70451),l=i(87349),o=i(48593);const s={"custom-order":l.RB,"title-and-artist-title":{column:o.$.TITLE_AND_ARTIST,order:o.H.ASC},"title-and-artist-artist":{column:o.$.TITLE_AND_ARTIST,order:o.H.SECONDARY_ASC},title:{column:o.$.TITLE,order:o.H.ASC},artist:{column:o.$.ARTIST,order:o.H.ASC},"added-by":{column:o.$.ADDED_BY,order:o.H.ASC},"added-at":{column:o.$.ADDED_AT,order:o.H.ASC},duration:{column:o.$.DURATION,order:o.H.ASC},album:{column:o.$.ALBUM,order:o.H.ASC},"album-or-podcast":{column:o.$.ALBUM_OR_PODCAST,order:o.H.ASC},"album-or-show":{column:o.$.ALBUM_OR_SHOW,order:o.H.ASC}},d={"title-and-artist-title":o.$.TITLE_AND_ARTIST,"title-and-artist-artist":o.$.TITLE_AND_ARTIST,title:o.$.TITLE,artist:o.$.ARTIST,"added-by":o.$.ADDED_BY,"added-at":o.$.ADDED_AT,duration:o.$.DURATION,album:o.$.ALBUM,"album-or-podcast":o.$.ALBUM_OR_PODCAST,"album-or-show":o.$.ALBUM_OR_SHOW},u={[o.H.NONE]:o.H.NONE,[o.H.ASC]:o.H.DESC,[o.H.DESC]:o.H.ASC,[o.H.SECONDARY_ASC]:o.H.SECONDARY_DESC,[o.H.SECONDARY_DESC]:o.H.SECONDARY_ASC},c=(o.$.INDEX,{[o.$.INDEX]:{key:"custom-order",get value(){return a.R.get("sort.custom-order")}},[o.$.TITLE_AND_ARTIST]:{key:"title",get value(){return a.R.get("sort.title")}},[o.$.TITLE]:{key:"title",get value(){return a.R.get("sort.title")}},[o.$.ARTIST]:{key:"artist",get value(){return a.R.get("sort.artist")}},[o.$.ADDED_BY]:{key:"added-by",get value(){return a.R.get("sort.added-by")}},[o.$.ADDED_AT]:{key:"added-at",get value(){return a.R.get("sort.date-added")}},[o.$.DURATION]:{key:"duration",get value(){return a.R.get("sort.duration")}},[o.$.EVENT_DATE]:null,[o.$.EVENT_INFO]:null,[o.$.ALBUM]:{key:"album",get value(){return a.R.get("sort.album")}},[o.$.ALBUM_OR_PODCAST]:{key:"album-or-podcast",get value(){return a.R.get("sort.album-or-podcast")}},[o.$.ALBUM_OR_SHOW]:{key:"album-or-show",get value(){return a.R.get("sort.album-or-show")}},[o.$.PLAYS]:null,[o.$.RELEASE_DATE]:null,[o.$.ADD]:null,[o.$.ACTIONS]:null,[o.$.CONCERT_VENUE]:null,[o.$.CONCERT_DATE]:null,[o.$.TITLE_AND_AUTHOR]:{key:"title",get value(){return a.R.get("sort.title")}},[o.$.AUTHOR]:null});var m=i(51773),g=i(72861),C=i(13274);function p(e){return!!e}const T=({columns:e,disabled:t,onSort:i})=>{const T=[...e],A=T.indexOf(m.$C.TITLE_AND_ARTIST),S=T.indexOf(m.$C.TITLE_AND_AUTHOR);-1!==A&&T.splice(A,1,m.$C.TITLE,m.$C.ARTIST),-1!==S&&T.splice(S,1);const{sortState:E,setSortState:y}=(0,r.useContext)(l.cL),R=function(e){return null===e.column?c[m.$C.INDEX]:(0,g.kj)(e.column,e)?c[m.$C.ARTIST]:c[e.column]}(E),h=(0,r.useCallback)((e=>{i?.(),y(((e,t,i)=>e?t!==d[e]||"artist"===e&&[o.H.ASC,o.H.DESC].includes(i)||"title"===e&&[o.H.SECONDARY_ASC,o.H.SECONDARY_DESC].includes(i)?s[e]:{column:d[e],order:u[i]}:l.RB)(e,E.column,E.order))}),[i,y,E.column,E.order]),b=(0,r.useCallback)((()=>null!==E.column),[E.column]),D=T.map((e=>c[e])).filter(p);return(0,C.jsx)(n.g,{options:D,onSelect:h,selected:R,isSelectionChanged:b,sortOrder:E.order,heading:a.R.get("drop_down.sort_by"),disabled:t,enableViewModeMenu:!0})}},68548:(e,t,i)=>{i.d(t,{x:()=>k});var r=i(79474),a=i(85980),n=i(43029),l=i(56260),o=i(37298),s=i(41627),d=i(31995),u=i(1964),c=i(34015),m=i(94315),g=i(86597),C=i(66031),p=i(29303),T=i(4405),A=i(21919),S=i(96139),E=i(10470),y=i(73534),R=i(39974),h=i(17237),b=i(73167),D=i(34719),_=i(13274);const k=function({metadata:e,isPlaying:t,isPublished:i,togglePlay:k,backgroundColor:x,spec:I,specLikedSongs:O,totalItems:N}){const{uri:v,name:L,description:$="",images:w,totalLikes:f,duration:H,owner:U,isOwnedBySelf:B=!1,formatListData:j,madeFor:P=null,collaborators:M,hasSpotifyTracks:Y,hasEpisodes:W,hasSpotifyAudiobooks:F}=e,X=j?.attributes||{},V=X.header_image_url_desktop||X.image_url||null,J=null!==V?[{url:V,width:null,height:null}]:[],K="daylist"===j?.type?X.expires:void 0,G=(0,a.wA)(),z=(0,l.NC)(y.G6N),Z=(0,R.s)(),q=(0,r.useMemo)((()=>(0,b.c)(P,U,M?.items,z)),[P,U,M?.items,z]),Q=(0,r.useContext)(S.$$),ee=(0,r.useContext)(h.VV),te=(0,r.useCallback)((()=>{if(I){const e=I.ownerFactory().hitUiReveal();Z.logInteraction(e)}ee({type:"open",uri:v})}),[ee,v,I,Z]),ie=(0,r.useCallback)((e=>{if(I){const e=I?.descriptionTextFactory().hitUiReveal();Z.logInteraction(e)}Q({type:"open",playlistDetails:{name:L,description:$,image:w[0],uri:v},focusedElement:e})}),[I,Q,L,$,w,v,Z]),re=(0,r.useCallback)((()=>{if(I){const e=I.coverArtFactory().hitUiReveal();Z.logInteraction(e)}Q({type:"openWithImagePicker",playlistDetails:{name:L,description:$,image:w[0],uri:v}})}),[Q,L,$,w,v,Z,I]),ae=(0,l.NC)(y.vvY),ne=(0,r.useCallback)((()=>{G(E.I3.actions.open({name:L,uri:v}))}),[G,L,v]),le=(0,r.useCallback)(((e,t)=>{if(I){const e=I.ownerFactory().hitUiNavigate({destination:t.creator.uri});Z.logInteraction(e)}if(O){const e=O.ownerFactory().hitUiNavigate({destination:t.creator.uri});Z.logInteraction(e)}}),[Z,I,O]),oe=z&&e.permissions?e.permissions?.isPrivate?o.R.get("private_playlist"):o.R.get("public_playlist"):o.R.get("playlist");return(0,_.jsxs)(c.z4,{backgroundColor:x,backgroundImages:J,children:[(0,_.jsxs)(m.h,{children:[(0,_.jsx)(T.D,{size:"medium",onClick:k,isPlaying:t,uri:v}),(0,_.jsx)(g.X,{text:L,dragUri:v,dragLabel:L})]}),V?null:(0,_.jsx)(s.h,{menu:(0,_.jsx)(d.W,{uri:v,isPublished:i}),children:(0,_.jsx)(D.X,{children:(0,_.jsx)(u.M,{canEdit:B,name:L,images:w,onClick:ae?ne:re,placeholderType:"playlist",dragUri:v})})}),(0,_.jsxs)(c.Y$,{children:[(0,_.jsx)(C.B,{children:oe}),(0,_.jsx)(s.h,{menu:(0,_.jsx)(d.W,{uri:v,isPublished:i}),children:(0,_.jsx)(c.mm,{canEdit:B,onClick:()=>{if(I){const e=I.titleFactory().hitUiReveal();Z.logInteraction(e)}ie(S.NV.TITLE)},dragUri:v,dragLabel:L,ariaLabel:o.R.get("playlist.edit-details.button",L),scaleAtMinWidth:c.tw,children:L})}),$&&(0,_.jsx)(n.E,{variant:"bodySmall",className:A.A.whiteOpacity,onClick:e=>{B&&(e=>{"href"in e.target||ie(S.NV.DESCRIPTION)})(e)},children:(0,_.jsx)(p.q,{html:$,onTimeStampClick:()=>{},className:A.A.playlistDescription})}),(0,_.jsx)(c.tV,{creators:q,onPiledCreatorsClick:te,onCreatorClick:le,totalItems:N,totalLikes:f??0,durationMilliseconds:H?.milliseconds,isEstimatedDuration:H?.isEstimate,daylistNextUpdate:K,newEntries:parseInt(X.new_entries_count||"0",10),hasTracks:Y??!1,hasEpisodes:W??!1,hasAudiobooks:F??!1})]})]})}},73167:(e,t,i)=>{i.d(t,{R:()=>o,c:()=>l});i(62355),i(84856),i(48117),i(1137);function r(e){return e.user||null}function a(e){return!!e}function n(e,t=!1){return{id:e.username,uri:e.uri,name:e.username,displayName:e.displayName||void 0,images:e.images,isMadeFor:t}}function l(e,t,i=[],l){return e?[n(e,!0)]:i.length>1&&l?i.map(r).filter(a).map((e=>n(e))):[n(t)]}function o(e){return e.every((e=>"audiobook"===e?.type||null===e))}},22726:(e,t,i)=>{i.d(t,{b:()=>n,g:()=>a});var r=i(79474);let a=function(e){return e[e.loading=0]="loading",e[e.loaded=1]="loaded",e[e.error=2]="error",e}({});function n(e,t){const i=e?a.loading:a.error,[n,l]=(0,r.useState)(i);return(0,r.useEffect)((()=>{const i=()=>{l(a.loaded)},r=()=>{l(a.error)};if(!e)return l(a.error),()=>{};l(a.loading);const n=document.createElement("img");return n.addEventListener("load",i),n.addEventListener("error",r),n.setAttribute("src",e),t&&n.setAttribute("srcSet",t),()=>{n.removeEventListener("load",i),n.removeEventListener("error",r)}}),[e,t]),n}},21919:(e,t,i)=>{i.d(t,{A:()=>r});const r={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",playlist:"dZ3U5sTGUTdanNamXe1z",searchBoxContainer:"KodyK77Gzjb8NqPGpcgw",leadingSlot:"KzOZOlCPgREEBCJH1Ieg",recommendedTrackList:"kwe0I8sSNMv3gYBjkRYP",playlistContent:"rezqw3Q4OEPB1m4rmwfw",playlistDescription:"fUYMR7LuRXv0KJWFvRZA",top:"PZkwbwJD1afoCmJkGt8w",header:"yP3JLuwUNDIQHxRFilK3",subtitle:"NCKSUYdZaTMrobq8ilkc",refreshButton:"QmGi2oa43BTcEZ5MCr9T",playlistImageContainer:"oq1ci28WPaRsWkvRiB_J",playlistInlineCurationSection:"Ykd_JWqkR9gSLHISDBwP",playlistInlineCurationTitle:"SMJIXlalPk_TESlyt2pC",playlistInlineCurationWrapper:"g9xHCCSXDR8S5NvTbfwL",playlistInlineCurationCloseButton:"FC40AOSbVM9LXjVi7bjO",playlistInlineCurationBackButton:"hVcUafGrnsA6nD1dJzc5",artistResultListTitle:"rARdlCShKVQsvuXamFOX",seeMore:"STDuzt77yRCueC4Ohenl",emptyStateContainer:"Bl_kg24BjWgcXPokgEKy",searchResultListContainer:"sAPXlA_oxu_8x1Cn0NTC",emptySearchTermContainer:"_Z2TnFjt8GB5ryOtvyti",whiteOpacity:"jpVuvMOCbpaRr_6FLf3W",noBooklistSupportContainer:"u9KYiVXeDRQDGlTDH6rM",concertsFooter:"a4FkPOXWBc0nK4yzsJCf",promoRow:"DWkbhLMcDefEZwJ5jXCq",promoTitle:"byOUxNEoiJOtBN6xTY24",ctaLink:"IWWS0F3oiajJG7nlrjXj",promoImage:"pbkk9BuHlY36lmWvEmbg",disclaimerContainer:"mWbx87vgssexrOs2tx4I",icon:"tzeKawjOOKFw1KfQ34mG"}}}]);
//# sourceMappingURL=9194.js.map