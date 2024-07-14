"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6863],{65485:(e,r,t)=>{t.d(r,{u:()=>p});var i=t(97500),n=t.n(i),a=t(78370),s=t(38641),l=t(43407),o=t(54509),c=t(91650),u=t(15514),d=t(12493),m=t(86070),p=function(e){var r=e.uri,t=e.src,i=e.playAriaLabel,p=e.onClick,y=e.isPlaying,f=e.isActive,v=e.isLocked,b=e.isEpisode,g=e.isVideo,h=e.spec,x=(0,o.W)(),j=(0,l.s)(),k=(0,a.YQ)((function(e){var t;if(x({type:"click",intent:y?"pause":"play"}),h){var i,n=h.playbackButtonFactory();i=f&&y?n.hitPause({itemToBePaused:r}):f&&!y?n.hitResume({itemToBeResumed:r}):n.hitPlay({itemToBePlayed:r}),t=j.logInteraction(i)}p(e,t)}),s.d,{leading:!0,trailing:!1});return(0,m.jsxs)("div",{className:d.A.rowImageWithPlay,children:[(0,m.jsx)(u.e,{src:t,isEpisode:b,isVideo:g}),(0,m.jsx)(c.x,{className:n()(d.A.rowPlayPauseButton,d.A.rowImagePlayPauseButton),iconClassName:d.A.rowPlayPauseIcon,onClick:k,isPlaying:y,isLocked:v,playAriaLabel:i})]})}},83577:(e,r,t)=>{t.r(r),t.d(r,{default:()=>ji});var i=t(81226),n=t(26017),a=t(93209),s=(t(60905),t(98168),t(94238),t(63619),t(67560),t(84008),t(83892),t(41679),t(81443),t(74457),t(6844),t(77458),t(69645),t(39782),t(93902),t(7410),t(50247),t(50252),t(88190),t(30758)),l=t(97500),o=t.n(l),c=t(61022),u=t(54925),d=t(23908),m=t(13234),p=t(10348),y=t(78221),f=t(59081),v=t(36092),b=t(2856),g=t(54212),h=t(19968),x=t(46317),j=t(73690),k=t(59767),O=t(3205),P=t(76519);const A="o2TlnuNKxRO5RnB9BpHB",w="q0Ke_aAvTcc4dO4wCHQt",L="UlKUfS_GcROZmofuafOW",R="I5LORTI1u3A6VoUvRCBf",I="TS85Qkpioa31wR0p4kzT",N="yL1DLXBc05CR_ACv_NhA",C="k5kRkUyoz9znqg_SGOVQ";var E=t(19597),T=t(78227),U=t(53921),S=t(85262),D=t(45286),_=t(46803),F=t(86070),B=function(e){return e.SMALL="small",e.LARGE="large",e}({});var M=function(e){var r=e.art,t=e.disabled,n=void 0!==t&&t,a=e.LinkComponent,s=e.name,l=e.size,u=void 0===l?B.SMALL:l,d=e.type,m=e.uri,p=r?[r]:[],v=u===B.SMALL?(0,E.C)(d):function(e){switch(e){case _.s.SINGLE:return f.Ru.get("track-page.from-the-single");case _.s.EP:return f.Ru.get("track-page.from-the-ep");case _.s.COMPILATION:return f.Ru.get("track-page.from-the-compilation");case _.s.ALBUM:default:return f.Ru.get("track-page.from-the-album")}}(d),b=(0,c.Zp)();return(0,F.jsxs)("div",{className:o()(A,(0,i.A)((0,i.A)({},L,u===B.SMALL),w,n)),children:[(0,F.jsx)("div",{className:R,children:(0,F.jsx)(T.b,{images:p,size:S.Qe.SIZE_80,title:s,type:U.c.ALBUM})}),(0,F.jsxs)("div",{className:I,children:[(0,F.jsx)(D.Z,{variant:u===B.SMALL?"mestoBold":"finale",children:v}),(0,F.jsx)(a,{to:m,children:(0,F.jsx)(D.Z,{as:"div",className:N,variant:"balladBold",dir:"auto",children:s})})]}),(0,F.jsx)("div",{onClick:function(){b((0,y.o_)(m).toURLPath(!0))},className:C})]})},V=t(71658),q=t(17941),Z=t(97150),z=t(28480),G=(t(38858),t(62172),t(41485));function W(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function X(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?W(Object(t),!0).forEach((function(r){(0,i.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Y=function(e){return e.LOADING="LOADING",e.LOADED="LOADED",e.UNAVAILABLE="UNAVAILABLE",e}({}),Q=function(e,r){switch(r.type){case"LYRICS_LOADING":return X(X({},e),{},(0,i.A)({},r.uri,{status:Y.LOADING}));case"LYRICS_LOADED":return X(X({},e),{},(0,i.A)({},r.uri,{status:Y.LOADED,data:r.response}));case"LYRICS_ERROR":return X(X({},e),{},(0,i.A)({},r.uri,{status:Y.UNAVAILABLE}));default:return(0,G.d)(r,"Unhandled lyrics action with type: ".concat(r.type))}},H=t(95514),J=t(16247),K=t.n(J),$=t(56761),ee=t(26697),re=function(){var e=(0,H.A)(K().mark((function e(r,t,i){var n;return K().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.build().withHost(ee.Hj).withPath("/track/".concat(encodeURIComponent(t),"/image/").concat(encodeURIComponent(i))).withHeaders([{key:"App-Platform",value:"WebPlayer"}]).withQueryParameters({format:"json",vocalRemoval:!1}).withEndpointIdentifier("/track/{trackId}").send();case 2:return n=e.sent,e.abrupt("return",n.body);case 4:case"end":return e.stop()}}),e)})));return function(r,t,i){return e.apply(this,arguments)}}(),te=t(72668),ie=function(){var e=(0,H.A)(K().mark((function e(r){var t,i,n,a,s;return K().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.trackUri,i=r.api,n=r.imageForLyricsRequest,r.isPlayable){e.next=3;break}return e.abrupt("return",{hasLyrics:!1});case 3:return a=(0,y.o_)(t),e.prev=4,e.next=7,re(i||$.n.getInstance(),a.id,n||"");case 7:return s=e.sent,e.abrupt("return",{hasLyrics:!0,syncType:s.lyrics.syncType,lyrics:s.lyrics.lines,provider:s.lyrics.provider,providerDisplayName:s.lyrics.providerDisplayName,providerLyricsId:s.lyrics.providerLyricsId,isRtlLanguage:s.lyrics.isRtlLanguage});case 11:if(e.prev=11,e.t0=e.catch(4),!(e.t0 instanceof te.O&&404===e.t0.status)){e.next=15;break}return e.abrupt("return",{hasLyrics:!1});case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(r){return e.apply(this,arguments)}}(),ne={status:Y.LOADING},ae={status:Y.UNAVAILABLE},se=s.createContext(void 0),le=function(e){var r=e.children,t=e.initialState,i=void 0===t?{}:t,n=s.useReducer(Q,i);return(0,F.jsx)(se.Provider,{value:n,children:r})},oe=function(e){var r=e.uri,t=e.isNotPermittedToFetchLyrics,i=e.imageForLyricsRequest,a=e.isPlayable,l=s.useContext(se);if(void 0===l)throw new Error("useTrackEntityLyrics must be used within a TrackEntityLyricsProvider");var o=(0,n.A)(l,2),c=o[0],u=o[1],d=r?c[r]:null;return(0,s.useEffect)((function(){t||!d&&r&&(u({type:"LYRICS_LOADING",uri:r}),ie({trackUri:r,imageForLyricsRequest:i,isPlayable:a}).then((function(e){u({type:"LYRICS_LOADED",uri:r,response:e})})).catch((function(){u({type:"LYRICS_ERROR",uri:r})})))}),[u,i,t,a,d,r]),r&&(0,y.U_)(r)&&!t&&a?d||ne:ae},ce=t(82035),ue=t(15993),de=t(79247),me=t(207),pe=t(85107),ye=t(82930),fe=t(58701),ve=t(98849),be=t(73704),ge=t(11182),he=(t(21256),t(21245)),xe=t(10820),je=t(68067),ke=t(37686),Oe=t(28937),Pe=new ke.l("internalLinkRecommenderTrack","query","eda0a1e9140af4114340bf3098980172dfd1003b65cfc980c36ab238dbfcef84",null),Ae=t(23235),we=t(34293),Le=t(19269),Re=t(34478),Ie=t(31332),Ne=t(93928),Ce=t(30710),Ee=t(46824),Te=t(87440),Ue=t(6662),Se=t(82323),De=t(95597),_e=t(18001),Fe=t(65485),Be=t(70403),Me=t(35509),Ve=t(27317),qe=t(24009),Ze=t(98593),ze=t(31625),Ge=t(59133),We=t(7183),Xe=t(91080);const Ye="Z9Dr8PkXFtlO8KnnDcxp",Qe="Bm0LUMlhVIcF5qusgdUP",He="GIyB7JDkRwjtVL6PSBbg",Je="whTIka0YYAkqhqrs26Wa";var Ke=s.memo((function(e){var r=e.uri,t=e.name,i=e.imgUrl,n=e.artists,a=e.isExplicit,s=e.index,l=e.albumUri,o=e.contextUri,c=e.isPlayable,u=e.isMOGEFRestricted,d=e.totalMilliseconds,m=e.playcount,p=(0,Z.P)({uri:r},{featureIdentifier:"ilr"}),y=p.isActive,g=p.isPlaying,h=p.triggerPlay,x=p.togglePlay,j=(0,Ie.T)(r),k=(0,Te.g)(r,c),O=n.map((function(e){return e.name})).join(f.Ru.getSeparator()),P=(0,Ne.b)({isMOGEFRestricted:u,downloadAvailability:j,isExplicit:a}),A=P.badges,w=P.hasBadges,L=n.map((function(e){return e.name})).join(f.Ru.getSeparator()),R=(0,Ee.c)();return(0,F.jsx)(Re.pZ,{value:"row",index:s,children:(0,F.jsx)(v.h,{menu:(0,F.jsx)(b.P,{uri:r,albumUri:l,artists:n,contextUri:o}),children:(0,F.jsxs)(Xe.w,{uri:r,contextUri:o,isPlayable:k,onTriggerPlay:function(e,r){h({loggingParams:r})},isActive:y,index:s,ariaRowIndex:s,dragMetadata:{name:t,createdBy:O},children:[(0,F.jsxs)(Ze.U,{ariaColIndex:0,children:[(0,F.jsx)(Fe.u,{uri:r,src:i,onClick:function(e,r){x({loggingParams:r})},isLocked:!1,isPlaying:g,isActive:y,playAriaLabel:f.Ru.get("tracklist.a11y.play",t,O)}),(0,F.jsxs)(Be.l,{children:[(0,F.jsx)(Ue.R,{uri:r,enabled:R,className:He,children:(0,F.jsx)(We.p,{titleText:t,children:t})}),w&&(0,F.jsxs)(De.P,{children:[A.download&&(0,F.jsx)(Ae._,{}),A.explicit&&(0,F.jsx)(we.g,{}),A.nineteen&&(0,F.jsx)(Le.q,{className:Je,size:16})]}),(0,F.jsx)(Ge.p,{children:(0,F.jsx)(Se.l,{artists:n})})]})]}),(0,F.jsx)(ze.o,{ariaColIndex:1,children:(0,F.jsx)(Ve.Y,{playcount:m})}),(0,F.jsxs)(qe.l,{ariaColIndex:2,children:[(0,F.jsx)(Ce.d,{uri:r}),(0,F.jsx)(_e.P,{duration:d}),(0,F.jsx)(Me.Y,{menu:(0,F.jsx)(b.P,{uri:r,albumUri:l,contextUri:o,artists:n}),label:f.Ru.get("more.label.track",t,L)})]})]})})})}),(function(e,r){return e.uri===r.uri&&e.index===r.index})),$e=t(24427),er=t(84341),rr=t(99517),tr=t(96792);function ir(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function nr(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ir(Object(t),!0).forEach((function(r){(0,i.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ir(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ar=s.memo((function(e){var r,t,i=e.subtitle,n=e.uri,a=(r={uri:n},(0,Oe.I)(Pe,r,t)).data,l=null==a?void 0:a.seoRecommendedTrack.items,o=(0,s.useMemo)((function(){return null==l?void 0:l.slice(0,Math.min(l.length,5))}),[l]),c=(0,s.useCallback)((function(e){return{uri:"uri"in e.data?e.data.uri:""}}),[]),m=(0,s.useMemo)((function(){return[tr.$.TITLE_AND_ARTIST,tr.$.ALBUM,tr.$.DURATION]}),[]),p=(0,s.useCallback)((function(e,r){var t,i,a,l;if(!function(e){return"NotFound"!==(null==(r=e)?void 0:r.__typename)&&"GenericError"!==(null==r?void 0:r.__typename)&&"Track"===e.__typename;var r}(e.data))return(0,F.jsx)(s.Fragment,{});var o=e.data;return(0,F.jsx)(Ke,{index:r,contextUri:n,uri:o.uri,name:o.name,totalMilliseconds:o.duration.totalMilliseconds,imgUrl:null===(t=o.albumOfTrack)||void 0===t||null===(t=t.coverArt)||void 0===t||null===(t=t.sources[0])||void 0===t?void 0:t.url,isPlayable:o.playability.playable,artists:o.artists.items.map((function(e){return{uri:e.uri,id:e.id,name:e.profile.name}})),albumUri:(null==o||null===(i=o.albumOfTrack)||void 0===i?void 0:i.uri)||"",isExplicit:(null===(a=o.contentRating)||void 0===a?void 0:a.label)===je.x7.Explicit,isMOGEFRestricted:(null===(l=o.contentRating)||void 0===l?void 0:l.label)===je.x7.NineteenPlus,playcount:parseInt(o.playcount||"0",10)},"".concat(r,"-").concat(o.uri))}),[n]);return null!=l&&l.length?(0,F.jsxs)("div",{className:Ye,children:[(0,F.jsxs)("div",{className:Qe,children:[(0,F.jsx)(u.E,{variant:"titleSmall",semanticColor:"textBase",children:f.Ru.get("playlist.extender.recommended.title")}),(0,F.jsx)(u.E,{variant:"bodySmall",paddingBottom:d.CD,children:i})]}),(0,F.jsx)(rr.S4,{ariaLabel:f.Ru.get("playlist.extender.recommended.title"),nrTracks:Math.min(l.length,5),rowPlaceholder:er.qq,tracks:o,renderRow:p,resolveItem:c,columns:m},"internal-link-recommender-track-list")]}):null})),sr=function(e){var r=e.entityType;return(0,F.jsx)($e.s,{onError:function(){(0,xe.fE)({metric_type:he.MetricTypes.COUNTER,what:"dwp-ilr-component-error",value:1,tags:{entityType:r}})},children:(0,F.jsx)(ar,nr({},e))})},lr=t(7104),or=t(53397),cr=t(92017),ur=t(62579);function dr(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function mr(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?dr(Object(t),!0).forEach((function(r){(0,i.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):dr(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var pr=function(e){var r=e.album,t=e.index,i=e.artistURI;return(0,F.jsx)(Re.pZ,{value:"card",index:t,children:(0,F.jsx)(ur.R,mr({index:t,latest:!1,showType:!0},(0,cr.m)(r,i,r.name)))})},yr=t(7766),fr=function(e){var r=e.albums,t=e.artistName,i=e.artistId,n=e.artistUri,a=e.className;return r?(0,F.jsx)(Re.pZ,{value:"shelf/albums",children:(0,F.jsx)(yr.$,{total:r.totalCount,title:f.Ru.get("rich-page.popular-albums-by-artist",{artist:t}),seeAllUri:"".concat((0,or.Dh)(i),":discography:").concat(je._m.Album.toLowerCase()),seeAllLabel:f.Ru.get("shelf.see-all"),alwaysShowSeeAll:!0,className:a,children:(0,or.Ey)(r.items).map((function(e,r){return(0,F.jsx)(pr,{album:e,index:r,artistURI:n},e.uri)}))})}):null},vr=t(24121),br=function(e){var r=e.artistId,t=e.className,i=e.fansAlsoLike,n=e.title;return(0,F.jsx)(Re.pZ,{value:"shelf/fans-also-like",children:(0,F.jsx)(yr.$,{total:i.length,title:null!=n?n:f.Ru.get("rich-page.fans-also-like"),seeAllUri:"".concat((0,or.Dh)(r),":related"),className:t,children:i.map((function(e,r){var t;return(0,F.jsx)(Re.pZ,{value:"card",index:r,children:(0,F.jsx)(vr.a,{index:r,uri:e.uri,name:e.profile.name,images:(null===(t=e.visuals.avatarImage)||void 0===t?void 0:t.sources)||[]})},e.uri)}))})})},gr=t(25561);const hr="ERm7dIKbVoqGwPb_lXPH";var xr=function(e){var r=e.artistName,t=e.artistUri,i=e.headerClassName,n=e.rowClassName,a=e.topTracks,l=e.topTracksTransformer,o=e.uri,c=(0,s.useMemo)((function(){return null==a?void 0:a.items.map((function(e){return l(e,o)}))}),[null==a?void 0:a.items,l,o]);return c&&c.length>0?(0,F.jsxs)("div",{className:n,children:[(0,F.jsxs)("div",{children:[(0,F.jsx)(u.E,{variant:"bodySmall",className:hr,children:f.Ru.get("rich-page.popular-tracks")}),(0,F.jsx)(u.E,{as:"h2",variant:"titleSmall",semanticColor:"textBase",className:i,children:r})]}),(0,F.jsx)(gr.z,{uri:t,nrTracks:c.length,initialTracks:c})]}):null},jr=function(e){var r=e.artistName,t=e.artistId,i=e.artistUri,n=e.className,a=e.releases,s=e.artistImages;return a?(0,F.jsx)(Re.pZ,{value:"shelf/releases",children:(0,F.jsx)(yr.$,{total:10,title:f.Ru.get("rich-page.popular-releases-by-artist",{artist:r}),seeAllUri:"".concat((0,or.Dh)(t),":discography:").concat(je._m.Album.toLowerCase()),seeAllLabel:f.Ru.get("shelf.see-all"),alwaysShowSeeAll:!0,className:n,listRowHeaderProps:s?{title:r,pretitle:f.Ru.get("artist-page.popular"),media:(0,ue.h)(s,{desiredSize:48})||""}:null,children:a.items.map((function(e,r){return(0,F.jsx)(pr,{album:e,index:r,artistURI:i},e.uri)}))})}):null},kr=function(e){var r=e.artistId,t=e.artistName,i=e.artistUri,n=e.className,a=e.singles;return a?(0,F.jsx)(Re.pZ,{value:"shelf/singles-and-eps",children:(0,F.jsx)(yr.$,{total:a.totalCount,title:f.Ru.get("rich-page.popular-singles-and-eps-by-artist",{artist:t}),seeAllUri:"".concat((0,or.Dh)(r),":discography:").concat(je._m.Single.toLowerCase()),seeAllLabel:f.Ru.get("shelf.see-all"),alwaysShowSeeAll:!0,className:n,children:(0,or.Ey)(a.items).map((function(e,r){return(0,F.jsx)(pr,{album:e,index:r,artistURI:i},e.uri)}))})}):null},Or=t(66964),Pr=t(71526),Ar=t(7396),wr=t(73576),Lr=t(49923),Rr=t(60589),Ir=t(44398),Nr=(t(60850),t(9981),t(36490),t(51168),t(4207),t(64334),t(9433),t(26308),t(84815),t(88212)),Cr=t(72459),Er=t(39683),Tr=t(25199);const Ur="VdIaMy6YRQX6cN5B7OVC",Sr="LjkmarFarmUOq0nmv9iy",Dr="VHigmLQwT1FxkKEbCs4H",_r="qX5K6LTMIuXG1gFBXzjZ",Fr="fsH_X6pBkexdxtu19q5k",Br="sDbr7RxY_jjg1XXq8zU5",Mr="MiWZGlZeQCy1tibDTql5",Vr="uci6FedOoLZEL163ZR8k",qr="GDA6ugyRoV7ZiqIyOU4d",Zr="IUBwxdZXklSkRPTZ9w_Q",zr="f7XB243E_dNMV9dkUXV6",Gr="gQQC7YFmzffMUaCqbx3o",Wr="QJVNM_FcLpEHhjDc_FU3",Xr="Vd2oInYt1Ynz9X6KgL7o",Yr="yUA20RYjsLIb7xXNRlfn",Qr="MVDvKVX1aJ05U9lmHzaz";const Hr=function(e){var r=e.richTrack,t=(0,c.zy)().search,i=(0,s.useCallback)((function(){return new URLSearchParams(t.slice(1)).get("highlight")||""}),[t])(),n=(0,Er.h)().tracklistRef,a=r.albumOfTrack,l=(0,Ar.J)((null==a?void 0:a.uri)||""),o=(0,Z.P)({uri:l},{featureIdentifier:"album"}).usePlayContextItem,u=(0,s.useMemo)((function(){return{items:[],totalCount:0}}),[]),d=(0,Cr.t)();return a?(0,F.jsx)("div",{ref:n,className:Mr,children:(0,F.jsx)(Nr.a,{columns:d,children:(0,F.jsx)(Tr.F,{ariaLabel:a.name,nrTracks:a.tracks.totalCount,albumUri:a.uri,highlightUri:i,discs:u,usePlayContextItem:o,hasHeaderRow:!1})})}):null};var Jr=t(12074),Kr=t(35138),$r=t(78041),et=t(60828),rt=t(43909),tt=t(179),it=t(87238),nt=t(27672),at=t(530),st=t(54509),lt=s.memo((function(e){var r=e.uri,t=e.togglePlay,i=e.isPlaying,a=e.isActive,l=e.spec,o=e.logger,c=e.backgroundColor,u=e.name,d=e.isPlayable,m=e.albumUri,p=e.artists,y=(0,st.W)(),v=(0,wr.n)(),g=(0,tt.A)(r),h=(0,n.A)(g,2),x=h[0],O=h[1],P=(0,s.useCallback)((0,H.A)(K().mark((function e(){var t;return K().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y({targetUri:r,intent:x?"unsave":"save",type:"click"}),t=l.saveButtonFactory(),o.logInteraction(x?t.hitRemoveLike({itemNoLongerLiked:r}):t.hitLike({itemToBeLiked:r})),e.prev=3,e.next=6,O(!x);case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(3);case 10:case"end":return e.stop()}}),e,null,[[3,8]])}))),[y,r,x,l,o,O]),A=(0,s.useCallback)((function(){var e=(0,k.$I)({isPlaying:i,isActive:a,spec:l.playButtonFactory(),logger:o,uri:r});t({loggingParams:e})}),[a,i,o,l,t,r]),w=(0,s.useCallback)((function(){o.logInteraction(l.contextButtonFactory().hitUiReveal())}),[o,l]),L=(0,at.j)();return(0,F.jsx)(it.E,{backgroundColor:c,children:(0,F.jsxs)(nt.S,{children:[(0,F.jsx)(rt.e,{children:(0,F.jsx)(j.D,{onClick:A,isPlaying:i,disabled:!d,size:L,uri:r})}),(0,F.jsx)(rt.e,{children:(0,F.jsx)(Jr.M,{isAdded:!!x,onClick:P,disabled:!v,size:L})}),(0,F.jsx)(Kr.f,{uri:r,isFollowing:!!x,onFollow:P,size:L}),(0,F.jsx)(et.b,{menu:(0,F.jsx)(b.P,{uri:r,albumUri:m,artists:p}),onShow:w,children:(0,F.jsx)($r.e,{label:f.Ru.get("more.label.context",u),size:L})})]})})})),ot=t(93880);const ct="OH5mnpJIVCJozYM3raMt",ut="etw0slM6uVrCi5RR3iDi";var dt=function(e){var r=e.padded,t=e.providerDisplayName;return t?(0,F.jsx)(D.Z,{as:"p",dir:"auto",variant:"finale",className:"".concat(ct," ").concat(r?ut:""),children:f.Ru.get("web-player.lyrics.providedBy",t)}):null},mt=function(e){var r=e.uri,t=e.imageForLyricsRequest,i=e.isPlayable,n=(0,ot.l)(),a=oe({uri:r,imageForLyricsRequest:t,isNotPermittedToFetchLyrics:n,isPlayable:i}).data;return null!=a&&a.hasLyrics?(0,F.jsx)(dt,{providerDisplayName:a.providerDisplayName}):null},pt=t(45976),yt=t(32303);const ft="QhDsXG1Gmo7XmQWLggAO",vt="bZgWQj7UxvK8GYKWDA7N",bt="AW61P3tnW5cKJCWtbhFh";var gt=function(e){var r=e.buttonText,t=e.onSecondaryButtonClick,i=e.onPrimaryButtonClick,n=e.secondaryButtonText,a=e.text;return(0,F.jsxs)("div",{className:ft,"data-testid":"static-activation-trigger",children:[(0,F.jsx)(u.E,{className:vt,variant:"bodyMediumBold",children:a}),(0,F.jsxs)("div",{className:bt,children:[(0,F.jsx)(m.H,{onClick:t,semanticColor:"textBase",children:n}),(0,F.jsx)(yt.$,{onClick:i,colorSet:"invertedLight",children:r})]})]})},ht=t(17450);const xt="T1nqQ4HEh3heHy4RCCKa",jt="L8zjshPVgUMXyZR4FtOk",kt="YMn1FWcFmOz9osBrNvhF",Ot="Inbyq3TnvKDOJtcKFTDQ",Pt="lWk5se4WETUOJwaEb8D6",At="i8DyQbWCmDV_8N5XGJQT",wt="t5WPFlGTY6GCd9UOFfLu",Lt="AGQ3wRyMVK1odq860qnT",Rt="ZX_r7uZgPgssaUplfpxT",It="qrqctaPu2XBpxsw23nPX",Nt="XnWidTagai3nQwMPxIMF";var Ct=t(51434),Et=t(85680),Tt=["size","disabled","enableI18nRoutes","enableI18nAdditionalPages"],Ut=function(e){return e.SMALL="small",e.LARGE="large",e}({}),St=function(e){var r=e.disabled,t=e.images,n=e.LinkComponent,a=e.name,s=e.size,l=e.uri,u=e.enableI18nRoutes,d=e.enableI18nAdditionalPages,m=s===Ut.SMALL,p=(0,c.Zp)(),v=(0,y.o_)(l),b=null==v?void 0:v.type,g=f.Ru.getLocaleForURLPath(),h=(0,Ct.p)({localeFeatureFlag:u,entityFeatureFlag:d,urlLocale:g,entity:b,type:"link"});return(0,F.jsxs)("div",{className:o()(jt,(0,i.A)({},kt,r)),"data-testid":"track-artist-link-card",children:[(0,F.jsx)(T.b,{shape:T.u.CIRCLE,images:t,size:S.Qe.SIZE_80,title:a,type:U.c.ARTIST}),(0,F.jsxs)("div",{className:o()(Pt,(0,i.A)({},At,m)),children:[(0,F.jsx)(D.Z,{variant:"mestoBold",className:Ot,children:f.Ru.get("card.tag.artist")}),(0,F.jsx)(n,{to:l,children:(0,F.jsx)(D.Z,{as:"div",dir:"ltr",className:wt,variant:"balladBold",children:a})})]}),(0,F.jsx)("div",{onClick:function(){var e=null==v?void 0:v.toURL("/".concat(Et.CT).concat(g,"/"));if(v){var r=h?e:v.toURLPath(!0);p(r)}},className:Lt})]})},Dt=function(e){var r=e.size,t=void 0===r?Ut.LARGE:r,a=e.disabled,l=void 0!==a&&a,c=e.enableI18nRoutes,u=e.enableI18nAdditionalPages,d=(0,ht.A)(e,Tt),p=(0,s.useState)(!1),y=(0,n.A)(p,2),v=y[0],b=y[1],g=(0,s.useCallback)((function(){b(!v)}),[v]),h=d.artists;return(0,F.jsxs)("div",{"data-testid":"track-artist-link-card-container",children:[(0,F.jsx)("div",{className:xt,children:h.map((function(e,r){return(0,F.jsx)("div",{className:o()((0,i.A)((0,i.A)({},It,v&&r>5),Rt,r>5)),children:(0,F.jsx)(St,{name:e.name,uri:e.uri,images:e.images,size:t,LinkComponent:d.LinkComponent,disabled:l,enableI18nRoutes:c,enableI18nAdditionalPages:u},e.id)},"".concat(e.uri,"-").concat(r))}))}),h.length>6&&(0,F.jsx)(m.H,{onClick:g,className:Nt,children:(0,F.jsx)(D.Z,{as:"p",variant:"violaBold",children:v?f.Ru.get("show_less"):f.Ru.get("mwp.search.artists.all")})})]})},_t=t(52746),Ft=t(53874),Bt=t(13147),Mt=t(30278);const Vt="EaTxqhHk6J4ecKHwpY5m",qt="dUQl9yd5x_1oWk4L0Ntm",Zt="xt5C47eHPYNiriMJxGnC";var zt=function(e){var r=e.words,t=e.onObserve,i=e.lyricsInView,n=(0,Mt.Wx)({threshold:0}),a=n.ref,l=n.inView,o=(0,s.useRef)(!1);return(0,s.useEffect)((function(){i||(o.current=!1)}),[i]),(0,s.useEffect)((function(){o.current||l&&(t({text:r,outOfView:!1}),o.current=!0)}),[l,t,r]),(0,F.jsx)(u.E,{ref:a,as:"p",dir:"auto",variant:"bodyMedium",className:Zt,children:r})},Gt=(t(177),t(53428));t(51725),t(78381),t(9332),t(21932),t(66874),t(31840),t(45991);const Wt="q1JbsdMqX7OImgIFWa6J",Xt="hAGejMh7SncdbJ5wcfUi",Yt="IaG9Zc3xGxeYjsn73RAz",Qt="zgSEYVU2gMYxihFVEJPn";function Ht(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return Jt(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Jt(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){l=!0,a=e},f:function(){try{s||null==t.return||t.return()}finally{if(l)throw a}}}}function Jt(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,i=new Array(r);t<r;t++)i[t]=e[t];return i}var Kt="expandable-lyrics-container";var $t=function(e){var r=e.lyrics,t=e.lyricsInView,a=e.onObserve,l=e.previewCount,c=(0,s.useState)(!1),d=(0,n.A)(c,2),m=d[0],p=d[1],y=function(e,r){var t,i=0,a=-1,s=e.filter((function(e){return!!e.words})),l=Ht(s.entries());try{for(l.s();!(t=l.n()).done;){var o=(0,n.A)(t.value,2),c=o[0];if((i+=o[1].words.length)>r){a=c-1;break}}}catch(e){l.e(e)}finally{l.f()}return a>-1?{visibleLyrics:s.slice(0,a),collapsibleLyrics:s.slice(a)}:{visibleLyrics:s,collapsibleLyrics:[]}}(r,l),v=y.visibleLyrics,b=y.collapsibleLyrics,g=b.length>0,h=m?f.Ru.get("show_less"):"…".concat(f.Ru.get("show_more"));return(0,F.jsxs)(F.Fragment,{children:[v.map((function(e,r){var i=e.words;return(0,F.jsx)(zt,{onObserve:a,words:i,lyricsInView:t},"lyrics-seo-line-".concat(r))})),(0,F.jsx)("span",{"aria-hidden":!m,className:o()(Yt,(0,i.A)({},Qt,m)),children:b.map((function(e,r){var i=e.words;return(0,F.jsx)(zt,{onObserve:m?a:function(){},words:i,lyricsInView:m&&t},"lyrics-seo-line-".concat(r))}))}),g&&(0,F.jsx)("button",{className:Wt,onClick:function(){p(!m)},"aria-controls":Kt,"aria-owns":Kt,"aria-label":h,children:(0,F.jsx)(u.E,{variant:"bodyMediumBold",className:Xt,children:h})})]})},ei=function(e){var r=e.data,t=e.eventSender,i=e.playbackId,a=e.previewCount,l=e.trackPageEnhancedEnabled,o=e.uri,c=r.lyrics,d=void 0===c?[]:c,m=r.provider,p=r.providerLyricsId,y=r.syncType,v=(0,Mt.Wx)({threshold:0}),b=v.ref,g=v.inView,h=function(e){var r=e.trackUri,t=e.provider,i=e.providerLyricsId,a=e.syncType,l=e.eventSender,o=e.playbackId,c=e.isSnippet,u=(0,s.useRef)(null),d=(0,s.useState)(!1),m=(0,n.A)(d,2),p=m[0],y=m[1],f=(0,s.useState)(0),v=(0,n.A)(f,2),b=v[0],g=v[1],h=(0,s.useState)(!1),x=(0,n.A)(h,2),j=x[0],k=x[1],O=(0,s.useMemo)((function(){return(0,Gt.W)({lyrics_format:"track-page",track_uri:r,provider:t,provider_lyrics_id:i,sync_type:a,playback_id:o,is_snippet:c})}),[r,t,i,a,o,c]);return(0,s.useEffect)((function(){y(!1),g(0),k(!1),u.current=null}),[r]),(0,s.useEffect)((function(){p&&o&&y(!1)}),[o]),(0,s.useEffect)((function(){p||b>=140&&j&&(null==l||l.send(O),y(!0))}),[b,p,O,l,j]),(0,s.useCallback)((function(e){var r=e.text,t=e.outOfView;r&&r.length>1&&(g((function(e){return e+r.length})),p||null!==u.current||(u.current=setTimeout((function(){k(!0)}),1500))),t&&(u.current&&clearTimeout(u.current),u.current=null,g(0))}),[g,p])}({trackUri:o,provider:m,providerLyricsId:p,syncType:y,eventSender:t,playbackId:i});return(0,s.useEffect)((function(){g||h({outOfView:!0})}),[g,h]),(0,F.jsxs)("div",{className:Vt,ref:b,children:[(0,F.jsx)(u.E,{as:"h2",variant:"titleSmall",semanticColor:"textBase",className:qt,children:f.Ru.get("web-player.lyrics.title")}),!l&&d.map((function(e,r){var t=e.words;return(0,F.jsx)(zt,{onObserve:h,words:t,lyricsInView:g},"lyrics-seo-line-".concat(r))})),l&&(0,F.jsx)($t,{lyrics:d,lyricsInView:g,onObserve:h,previewCount:a})]})},ri=t(45820),ti=t(84747),ii=t(23036),ni=t(91837),ai=(t(11141),t(2264),t(1266)),si=t(90297),li=t(30961),oi=t(24865);function ci(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function ui(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ci(Object(t),!0).forEach((function(r){(0,i.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ci(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var di=function(e){var r=e.uri,t=e.imageForLyricsRequest,i=e.isPlayable,a=(0,s.useState)(420),l=(0,n.A)(a,2),o=l[0],c=l[1],u=(0,Rr.Zo)().trackPageEnhancedEnabled,d=oe({uri:r,imageForLyricsRequest:t,isPlayable:i}).data,m=(0,ni.vh)(),p=(0,ti.o)((function(e){var r;return{isPaused:null==e?void 0:e.isPaused,currentTrackUri:null==e||null===(r=e.item)||void 0===r?void 0:r.uri,playbackId:null==e?void 0:e.playbackId}}),ii.a),y=p.isPaused,f=p.currentTrackUri,v=p.playbackId,b=!y&&f===r,g=(0,s.useCallback)((function(){window.innerWidth<=768?c(280):window.innerWidth>768&&280===o&&c(420)}),[o]);return(0,s.useEffect)((function(){g()}),[g]),(0,ri.s)(g),d&&null!=d&&d.hasLyrics?(0,F.jsx)(ei,{data:d,uri:r,eventSender:m,playbackId:b?v:void 0,previewCount:o,trackPageEnhancedEnabled:u}):null},mi=function(e){var r,t,i,n,a,s,l=(r=e.uri,t=(0,ni.vh)(),i=(0,pt.d4)(Bt.F6),n=(0,pt.d4)(oi.JJ),a=(0,pt.d4)(Bt.oo),s=(0,Pr.V)(),function(){if(!s){(0,xe.fE)({metric_type:he.MetricTypes.COUNTER,what:"dwp-lyrics-component-error",value:1});var e={category:"lyrics_render_error",label:"dwp",os:(0,si.f)(),context:JSON.stringify({uri:r,product:a}),country:i?n:"",sp_t:(0,li.v8)("sp_t")};t.send((0,ai._)(e))}});return(0,F.jsx)($e.s,{onError:l,children:(0,F.jsx)(di,ui({},e))})};function pi(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function yi(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?pi(Object(t),!0).forEach((function(r){(0,i.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):pi(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var fi=function(e){var r,t=e.albumArtists,n=e.columnCount,a=e.imageForLyricsRequest,l=e.isPlayable,c=e.uri,u=n-2,d={"--column-count":n,"--left-column-end":u-2,"--right-column-start":u},m=(0,pt.d4)(Bt.Ht).isAnonymous,p=(0,wr.n)(),y=(0,ot.l)(),v=(0,Rr.Zo)(),b=v.trackPageEnhancedEnabled,g=v.trackPageLinksNoLyricsEnabled,h=v.trackPageNoLyricsEnabled,x=!g&&!h,j=oe({uri:c,isNotPermittedToFetchLyrics:m||y,imageForLyricsRequest:a,isPlayable:l}),k=j.data,O=j.status,P=!!k&&k.hasLyrics&&O!==Y.UNAVAILABLE,A=(P||m)&&x,w=(r=P,b?r?Rr.rt.HasLyrics:Rr.rt.NoLyrics:Rr.rt.Ineligible),L=(0,Rr.E6)(w),R=(0,pt.d4)(Ft.MU),I=(0,pt.d4)(Ft.NR);if((0,s.useEffect)((function(){L()}),[L]),y)return null;return(0,F.jsxs)(s.Suspense,{fallback:null,children:[A&&(0,F.jsx)("div",{className:o()(Dr,(0,i.A)({},_r,n>5)),style:yi({},d),"data-testid":"lyrics-container",children:m?(0,F.jsx)(gt,{buttonText:f.Ru.get("sign_up"),secondaryButtonText:f.Ru.get("login"),text:f.Ru.get("track-page.sign-into-premium-to-view-lyrics"),onPrimaryButtonClick:_t.ie,onSecondaryButtonClick:_t.PW}):(0,F.jsx)(mi,{uri:c,imageForLyricsRequest:a,isPlayable:l})}),(0,F.jsx)("div",{className:o()(Ur,(0,i.A)({},Sr,n>5&&A)),style:yi({},d),children:(0,F.jsx)(Dt,{artists:t,LinkComponent:lr.default,disabled:!p,enableI18nRoutes:R,enableI18nAdditionalPages:I})})]})};function vi(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function bi(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?vi(Object(t),!0).forEach((function(r){(0,i.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):vi(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var gi=function(e){return(e.items||[]).map((function(e){var r;return{name:e.profile.name,images:((null===(r=e.visuals.avatarImage)||void 0===r?void 0:r.sources)||[]).map((function(e){return{url:e.url,width:e.width,height:e.height}})),uri:e.uri,id:e.id}}))},hi=function(e){return(e||[]).map((function(e){return e.profile.name}))},xi=function(e){var r,t,l,c,y,x,A,w,L,R,I,N=e.uri,C=e.track,E=(0,wr.n)(),T=(0,Pr.V)(),S=(0,Or.W)({type:"locale",uri:N}),D=f.Ru.getLocaleForTranslation(),_=parseInt(C.playcount||"0",10),V=C.firstArtist,q=C.otherArtists,G=C.albumOfTrack,W=C.duration,X=C.name,Y=null==G?void 0:G.coverArt,Q=null==G?void 0:G.copyright.items,H=null==G?void 0:G.courtesyLine,J=null!=G&&G.date?(0,de.mp)(G.date):{date:void 0,precision:void 0},K=J.date,$=J.precision,ee=null==Y||null===(r=Y.extractedColors)||void 0===r?void 0:r.colorRaw.hex,re=((null==Y?void 0:Y.sources)||[]).map((function(e){return{url:e.url,width:e.width||void 0,height:e.height||void 0}})),te={uri:(null==G?void 0:G.uri)||"",name:(null==G?void 0:G.name)||""},ie=hi(V.items),ne=hi(q.items),ae=gi(V),se=gi(q),oe=[].concat((0,a.A)(ae),(0,a.A)(se)),he=V.items[0],xe=C.albumOfTrack,je=null==xe||null===(t=xe.playability)||void 0===t?void 0:t.playable,ke={artistId:null==he?void 0:he.id,artistName:null==he||null===(l=he.profile)||void 0===l?void 0:l.name,artistUri:null==he?void 0:he.uri},Oe=null===(c=C.albumOfTrack)||void 0===c||null===(c=c.coverArt)||void 0===c?void 0:c.sources,Pe=null!==(y=null!==(x=(0,ue.h)(Oe||void 0,{desiredLabel:"large",desiredSize:600}))&&void 0!==x?x:null==Oe||null===(A=Oe[0])||void 0===A?void 0:A.url)&&void 0!==y?y:"",Ae=(0,s.useState)(!1),we=(0,n.A)(Ae,2),Le=we[0],Re=we[1],Ie=(0,s.useCallback)((function(){Re(!Le)}),[Le]),Ne=q&&q.items.length>5,Ce=(0,ce.r)(p.y,{data:{uri:N}}),Ee=Ce.spec,Te=Ce.logger,Ue=C.playability.playable,Se=(0,Ar.J)(N),De=(0,Z.P)({uri:Se},{featureIdentifier:"track"}),_e=De.togglePlay,Fe=De.isPlaying,Be=De.isActive,Me=(0,Rr.Zo)(),Ve=Me.trackPageLinksNoLyricsEnabled,qe=Me.trackPageNoLyricsEnabled,Ze=Ve||qe,ze=(0,s.useCallback)((function(){return(0,z.rO)({i18n:f.Ru,trackArtistsList:[].concat((0,a.A)(ie),(0,a.A)(ne)).join(f.Ru.getSeparator()),trackName:C.name,shouldLocalize:S,disabled:Ze})}),[ie,Ze,ne,S,C.name]),Ge=(0,s.useCallback)((function(e,r){Te.logInteraction(Ee.headerFactory().artistLinkFactory({position:r.position,uri:r.creator.uri}).hitUiNavigate({destination:r.creator.uri}))}),[Te,Ee]),We=(0,s.useCallback)((function(){var e=(0,k.$I)({isPlaying:Fe,isActive:Be,spec:Ee.actionBarFactory().playButtonFactory(),logger:Te,uri:N});_e({loggingParams:e})}),[Be,Fe,Te,Ee,_e,N]),Xe=null==xe?void 0:xe.uri,Ye=(0,s.useMemo)((function(){return[].concat((0,a.A)(V.items),(0,a.A)(q.items)).map((function(e){return{uri:e.uri,name:e.profile.name}}))}),[V.items,q.items]),Qe=(0,F.jsx)(b.P,{uri:N,albumUri:Xe,artists:Ye});return(0,F.jsxs)("section",{"data-testid":"track-page",children:[(0,F.jsx)(pe.Q,{children:ze()}),(0,F.jsxs)(ye.z,{backgroundColor:ee,children:[(0,F.jsxs)(g.h,{children:[(0,F.jsx)(j.D,{size:"medium",onClick:We,disabled:!Ue,isPlaying:Fe,uri:N}),(0,F.jsx)(h.X,{text:X,dragUri:N,dragLabel:X})]}),(0,F.jsx)(v.h,{menu:Qe,children:(0,F.jsx)(fe.K,{dragUri:N,images:re,name:X,placeholderType:"album"})}),(0,F.jsxs)(ve.Y,{children:[(0,F.jsx)(u.E,{variant:"bodySmallBold",children:f.Ru.get("song")}),(0,F.jsx)(v.h,{menu:Qe,children:(0,F.jsx)(ge.mm,{dragUri:N,dragLabel:X,children:X})}),(0,F.jsx)(be.t,{creators:ae,releaseDate:K,releaseDatePrecision:$,durationMilliseconds:W.totalMilliseconds,onCreatorClick:Ge,isTrack:!0,album:te,playcount:_})]})]}),(0,F.jsx)(lt,{uri:N,togglePlay:_e,isPlaying:Fe,isActive:Be,spec:(0,s.useMemo)((function(){return Ee.actionBarFactory()}),[Ee]),logger:Te,backgroundColor:ee,name:X,isPlayable:Ue,albumUri:Xe,artists:Ye}),(0,F.jsxs)(le,{children:[(0,F.jsxs)("div",{className:"contentSpacing",children:[(0,F.jsx)("div",{className:Fr,children:(0,F.jsx)(P.E,{render:function(e){var r=e.columnCount;return(0,F.jsx)(fi,{imageForLyricsRequest:Pe,albumArtists:oe,columnCount:r,uri:N,isPlayable:Ue})},rowGap:d.lT})}),(0,F.jsx)(sr,{subtitle:f.Ru.get("internal-link-recommender.based-on-this-song"),uri:C.uri,entityType:U.c.TRACK}),(0,F.jsx)(xr,{artistName:he.profile.name,artistUri:he.uri,headerClassName:qr,rowClassName:Fr,topTracks:he.discography.topTracks,topTracksTransformer:Lr.fX,uri:C.uri}),(0,F.jsx)(jr,bi({className:Vr,releases:null==he||null===(w=he.discography)||void 0===w?void 0:w.popularReleasesAlbums},ke)),(0,F.jsx)(fr,bi({albums:null==he||null===(L=he.discography)||void 0===L?void 0:L.albums,className:Vr},ke)),(0,F.jsx)(kr,bi({className:Vr,singles:null==he||null===(R=he.discography)||void 0===R?void 0:R.singles},ke)),q&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("div",{className:zr,children:q.items.map((function(e,r){var t;return(0,F.jsx)(jr,{className:o()(Zr,(0,i.A)((0,i.A)({},Wr,r>4),Xr,Le&&r>4)),releases:e.discography.popularReleasesAlbums,artistName:e.profile.name,artistId:e.id,artistUri:e.uri,artistImages:null===(t=e.visuals.avatarImage)||void 0===t?void 0:t.sources},e.id)}))}),Ne&&(0,F.jsx)(m.H,{onClick:Ie,className:Yr,children:(0,F.jsx)(u.E,{as:"h2",variant:"bodySmallBold",children:Le?f.Ru.get("show_less"):f.Ru.get("mwp.search.artists.all")})}),(0,F.jsx)(br,{artistId:he.id,className:o()(Vr,(0,i.A)({},Gr,q.items.length>0)),fansAlsoLike:he.relatedContent.relatedArtists.items,title:f.Ru.get("artist-page.fansalsolike")})]}),xe&&(0,F.jsx)(M,{art:null===(I=xe.coverArt)||void 0===I?void 0:I.sources[0],disabled:!je||!E,LinkComponent:lr.default,name:xe.name,type:xe.type,size:B.LARGE,uri:xe.uri}),(0,F.jsx)(Hr,{richTrack:C})]}),(0,F.jsx)("div",{className:"contentSpacing",children:(0,F.jsxs)("div",{className:Br,children:[K&&(0,F.jsx)(u.E,{as:"p",variant:"bodySmall",className:Qr,children:(0,me.rh)((0,me.ad)(K),D,{year:"numeric",month:"long",day:"numeric"},$)}),(0,F.jsx)(O.Z,{copyrights:Q||[],courtesyLine:H}),!T&&(0,F.jsx)(mt,{uri:N,imageForLyricsRequest:Pe,isPlayable:Ue})]})})]})]})};const ji=(0,s.memo)((function(){var e,r,t,i=(0,c.g)().trackId,n=void 0===i?"":i,a=(0,y.tR)(n).toURI(),s=(0,Ir.J)({uri:a});return s.loading||s.error||"Track"!==(null===(e=s.data)||void 0===e||null===(e=e.trackUnion)||void 0===e?void 0:e.__typename)?(0,F.jsx)(x.A,{hasError:!s.loading,errorMessage:f.Ru.get("track-page.error")}):(0,F.jsx)(q.P,{surface:V.u.TRACK,uris:[a,null!==(r=null===(t=s.data.trackUnion.albumOfTrack)||void 0===t?void 0:t.uri)&&void 0!==r?r:null],children:(0,F.jsx)(xi,{uri:a,track:s.data.trackUnion})})}))},44398:(e,r,t)=>{t.d(r,{J:()=>s});var i=t(37686),n=t(28937),a=new i.l("getTrack","query","ae85b52abb74d20a4c331d4143d4772c95f34757bfa8c625474b912b9055b5c0",null),s=function(e,r){return(0,n.I)(a,e,r)}}}]);
//# sourceMappingURL=xpui-routes-track-v2.js.map