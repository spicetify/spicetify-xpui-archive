"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7553],{63806:(e,t,a)=>{a.r(t),a.d(t,{default:()=>xe});a(14534),a(99801);var n=a(50959),l=a(92389),r=a(76917),s=a(36969),i=a(67923),o=a(90880),c=a(5701),u=a(8968),d=a(45849),g=a(77864),f=a(71851),m=a(15120),h=a(41812),p=a(85712),y=a(70267),x=a(61058),T=a(43095),k=a(6473),F=a(90696),C=a(42643),j=a(82946),b=a(7511);function D(e,t,a){const n={uri:e};return(0,F.R4)(n,t),(0,C.U6)(n,a?.map((e=>(0,j.cj)(e)??null)).filter(b.K)),n}var I=a(78776),S=a(22038),E=a(59242),P=a(29611),R=a(84816),v=a(76999),w=a(49597),A=a(79258),L=a(83524),M=a(13323),N=a(6962),Q=a(42846),_=a(79446),O=a(97253),U=a(77558),B=a(11527);const K=n.memo((({tracklistDomRef:e})=>{const{spec:t,logger:a}=(0,E.fU)(Q.createDesktopSearchBarEventFactory,{}),l=(0,n.useCallback)((()=>{a.logInteraction(t.filterFieldFactory().keyStrokeFilter())}),[a,t]),r=(0,n.useCallback)((()=>{a.logInteraction(t.filterFieldFactory().hitClearFilter())}),[a,t]),s=(0,_.v)().filter((e=>p.P0.includes(e)));return(0,B.jsxs)("div",{className:f.Z.searchBoxContainer,children:[(0,B.jsx)(n.Suspense,{fallback:null,children:(0,B.jsx)(O.K,{placeholder:c.ag.get("playlist.search_in_playlist"),clearOnEscapeInElementRef:e,onFilter:l,onClear:r})}),(0,B.jsx)(U.l,{columns:s})]})}));a(53261),a(55330);var z=a(18142),V=a(39017),G=a(16254),H=a(14232);function W(){return(0,H.z)("liked-songs-current-tag-filter",null)}const J="bnAGyFvicDJD8TnVSKnq",Z=e=>({id:e.filter,getName:()=>e.name,ubiId:e.name}),$=(0,n.memo)((({spec:e})=>{const{tags:t,currentTag:a,setCurrentTag:l}=function(){const e=(0,G.y)(),[t,a]=W(),{data:l=[]}=(0,V.useQuery)("liked-songs-tags",(()=>e?.getTracksFilterTags()),{staleTime:864e5,cacheTime:864e5}),r=(0,n.useMemo)((()=>l.find((e=>e.filter===t))),[t,l]),s=(0,n.useCallback)((e=>{a(e?.filter??null)}),[a]);return{tags:l,currentTag:r,setCurrentTag:s}}(),r=(0,E.$P)(),s=(0,n.useCallback)(((a,n,s)=>{let i;if(!a)return i=e.clearButtonFactory().hitClearFilter(),void r.logInteraction(i);const o=t.find((({filter:e})=>e===a));if(!o)return;const c=e.filterChipFactory({identifier:o.name,position:s});n?(i=c.hitClearFilter(),l(null)):(i=c.hitFilter(),o&&l(o)),r.logInteraction(i)}),[r,l,e,t]),i=a?[]:t.map(Z),o=a?[Z(a)]:[];return(0,B.jsx)(z.V,{availableFilters:i,selectedFilters:o,toggleFilterId:()=>{},resetFilterIds:()=>l(null),onFilterClick:s,ariaLabel:"Liked Songs filter tags",className:J})}));var q=a(38776),X=a(90343),Y=a(54472),ee=a(36208),te=a(56685);const ae="bKlB8pmFVoswJlZ_jhtL",ne="hKfuETni1H5yAXl8wNgR",le=n.memo((function({metadata:e,onClickTogglePlay:t,isPlaying:a,spec:l,logger:r,backgroundColor:s,canSort:i,canFilter:o}){const{uri:u,name:d,totalLength:g}=e,f=(0,n.useRef)(null),m=(0,n.useMemo)((()=>l.actionBarFactory()),[l]),h=(0,n.useMemo)((()=>m.shuffleButtonContainerFactory()),[m]),p=(0,n.useMemo)((()=>m.filtersFactory()),[m]),y=g>0,x=g>0,T=i&&o,k=(0,ee.Q)(),F=(0,n.useCallback)(((e,t)=>{const a=m.downloadButtonFactory();t===M.mc.ADD?r.logInteraction(a.hitDownload({itemToDownload:u})):t===M.mc.REMOVE?r.logInteraction(a.hitRemoveDownload({itemToRemoveFromDownloads:u})):t===M.mc.NO_PERMISSION&&r.logInteraction(a.hitUiReveal())}),[m,r,u]),C=(0,q.j)(),j=(0,P.W6)(X.rVA),{shouldRenderTagsInline:b,inlineContainerRef:D}=function(){const e=(0,n.useRef)(null),[t,a]=(0,n.useState)(null);return(0,n.useLayoutEffect)((()=>{const t=e.current?.offsetWidth;t&&a(t>500)}),[e]),(0,te.y)({observeOnly:"width",onResize:({width:e})=>{e>=500!==t&&a(!t)},refOrElement:e}),{shouldRenderTagsInline:t,inlineContainerRef:e}}();return(0,B.jsxs)(R.o,{backgroundColor:s,children:[(0,B.jsxs)(R.F,{children:[x?(0,B.jsx)(A.$,{onClick:t,isPlaying:a,size:C,uri:u,ariaPauseLabel:c.ag.get("playlist.a11y.pause",d),ariaPlayLabel:c.ag.get("playlist.a11y.play",d)}):null,k&&(0,B.jsx)(E.Nh,{spec:h,children:(0,B.jsx)(Y.K,{entityName:d,contextUri:u,activationPlacement:"bottomEnd",size:C})}),(0,B.jsx)(v.o,{uri:u,canDownload:y,isFollowing:!0,onFollow:()=>{},size:C,onClick:F}),j&&(0,B.jsx)("div",{className:ne,ref:D,children:b&&(0,B.jsx)($,{spec:p})}),T?(0,B.jsx)(E.Nh,{spec:m,children:(0,B.jsx)(K,{tracklistDomRef:f})}):(0,B.jsx)("div",{className:ae,children:(0,B.jsx)(w.F,{property:N.FM,renderNewExperience:()=>(0,B.jsx)(L.A,{options:[],onSelect:()=>{},selected:null,enableViewModeMenu:!0})})})]}),j&&!1===b&&(0,B.jsx)(R.F,{children:(0,B.jsx)($,{spec:p})})]})}));var re=a(38683),se=a(44191),ie=a(76457),oe=a(43113),ce=a(47001),ue=a(33329),de=a(87296),ge=a(31027),fe=a(95467),me=a(55170);const he=[h.QD.INDEX,h.QD.TITLE_AND_ARTIST,h.QD.ALBUM,h.QD.ADDED_AT,h.QD.DURATION],pe=({data:e,canFilter:t,canSort:a})=>{const{uri:l,name:o,totalLength:F}=e.metadata,C=(0,n.useRef)(null),j=(0,k.Y5)("#5038a0"),[I]=W(),{filter:P}=(0,n.useContext)(m.fo),{sortState:R,setSortState:v}=(0,n.useContext)(p.Gb),{spec:w,logger:A}=(0,E.fU)(i.Q,{data:{uri:l}}),L=n.useMemo((()=>w.headerFactory()),[w]),M=n.useMemo((()=>w.tracklistFactory()),[w]);(0,n.useEffect)((()=>{null===R.column&&v({column:h.QD.ADDED_AT,order:h.kn.DESC})}),[R,v]);const N=(0,r.ur)(),Q=(0,r.TH)(),_="POP"!==N?new URLSearchParams(Q.search).get("uri"):null,{isPlaying:O,togglePlay:U,usePlayContextItem:K,isActive:z}=(0,S.n)(D(l,(0,re.w)(R),[P,I].filter(b.K)),{featureIdentifier:"your_library",referrerIdentifier:"your_library"}),V=()=>{const e=(0,oe.aK)({isPlaying:O,isActive:z,spec:w.actionBarFactory().playButtonFactory(),logger:A,uri:l});U({loggingParams:e})},[G]=(0,ie.d4)(),{isCompactMode:H}=(0,T.mJ)(),J=(({isCompactMode:e=!1})=>{const t=[...he];return e&&t.splice(t.indexOf(h.QD.TITLE_AND_ARTIST),1,h.QD.TITLE,h.QD.ARTIST),t})({isCompactMode:H});return(0,B.jsx)(y.a,{columns:J,children:(0,B.jsxs)("section",{role:"presentation",className:f.Z.playlist,"data-testid":"playlist-page",children:[(0,B.jsx)(u.$,{children:c.ag.get("playlist.page-title",o)}),(0,B.jsx)(x.s,{metadata:{...e.metadata,hasSpotifyTracks:!0},totalItems:G,isPlaying:O,togglePlay:V,backgroundColor:j,specLikedSongs:L}),(0,B.jsx)(le,{metadata:e.metadata,onClickTogglePlay:V,isPlaying:O,spec:w,logger:A,backgroundColor:j,canSort:a,canFilter:t}),(0,B.jsx)("div",{className:"contentSpacing",children:F>0?(0,B.jsx)(n.Suspense,{fallback:(0,B.jsx)(g.h,{hasError:!1,errorMessage:c.ag.get("error.request-collection-tracks-failure")}),children:(0,B.jsx)(E.Nh,{spec:M,children:(0,B.jsx)(se.p,{nrTracks:F,collectionUri:l,scrollToUri:_,usePlayContextItem:K,outerDomRef:C,spec:M,initialItems:e.contents.items,isCompactMode:H,tagFilter:I})})}):(0,B.jsx)(d.u,{message:c.ag.get("collection.empty-page.songs-subtitle"),title:c.ag.get("collection.empty-page.songs-title"),linkTo:"/search",linkTitle:c.ag.get("collection.empty-page.songs-cta"),renderInline:!0,children:(0,B.jsx)(s.F,{"aria-hidden":"true"})})})]})})},ye=n.memo((function({user:e,uri:t}){const{filter:a}=(0,n.useContext)(m.fo),{sortState:l}=(0,n.useContext)(p.Gb),[r]=W(),s=function(e,t,a){const l=(0,n.useContext)(I.H),r=(0,V.useQueryClient)(),s=(0,ue.jP)((()=>["useLikedSongs",e,a]),[e,a]),{data:i}=(0,V.useQuery)(s(),(()=>l.getTracks(a)),{cacheTime:18e5,keepPreviousData:!0,refetchOnWindowFocus:!1}),o=(0,n.useCallback)((()=>{r.invalidateQueries(s())}),[r,s]);(0,ge.b)(de.EW.UPDATE,o);const c=(0,me.I2)(t.id);return c&&i?{metadata:{uri:e,name:c.name,images:c.images,totalLength:i?.totalLength,unfilteredTotalLength:i.unfilteredTotalLength,owner:(0,fe.V)(t)},contents:i}:null}(t,e,{offset:0,limit:25,sort:(0,re.w)(l),filters:[a,r].filter(b.K)}),i=(0,n.useContext)(I.H).getCapabilities();return s?(0,B.jsx)(pe,{data:s,canFilter:i.canFilterTracksAndEpisodes&&s.metadata.unfilteredTotalLength>0,canSort:i.canSortTracksAndEpisodes&&s.metadata.unfilteredTotalLength>0}):(0,B.jsx)(g.h,{hasError:!1,errorMessage:c.ag.get("error.not_found.title.playlist"),loadOffline:i.canModifyOffline})})),xe=()=>{const{user:e}=(0,l.v9)(ce.Gg);if(null===e)return null;const t=(0,o.wG)(e.id).toURI();return(0,B.jsx)(p.kz,{uri:t,children:(0,B.jsx)(m.hz,{uri:t,children:(0,B.jsx)(ie.Y4,{children:(0,B.jsx)(ye,{uri:t,user:e})})})})}}}]);
//# sourceMappingURL=xpui-routes-collection-songs.js.map