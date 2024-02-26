"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[5713],{84454:(e,t,a)=>{a.d(t,{j:()=>l});var i=a(50959),s=a(16254),n=a(76999),o=a(28528),r=a(11527);const l=i.memo((function({uri:e,size:t=n.q.md,className:a,onClick:l}){const[c,d]=(0,s.Z)(e),u=(0,o.o)(),g=(0,i.useCallback)((()=>{u({targetUri:e,intent:c?"unsave":"save",type:"click"}),d(!c)}),[u,e,c,d]);return(0,r.jsx)(n.o,{className:a,isFollowing:c,onFollow:g,onClick:l,uri:e,size:t})}))},47937:(e,t,a)=>{a.d(t,{V:()=>F,e:()=>R});var i=a(50959),s=a(92389),n=a(29611),o=a(76202),r=a(90880),l=a(79320),c=a(30336),d=a(54878),u=a(54975),g=a(90350),m=a(60081),p=a(24889),x=a(71986),h=a(45053),y=a(28528),j=a(84726),b=a(55220),k=a(44870),f=a(7637),v=a(28053),P=a(69767),C=a(10473),S=a(50832),w=a(59242),N=a(11024),I=a(22362),A=a(4704),E=a(90343),U=a(11527);function R(e){return{uri:e.uri,name:e.name,trailer:e.trailer,showTypes:e.showTypes}}const B=e=>`activation-trigger-mme-${e}`,F=i.memo((function({index:e=-1,showMetadata:t,episode:a,usePlayContextItem:F,status:D,variant:T}){const M=(0,A.E)(),L=a.playedState.playPositionMilliseconds,O=a.uri,z=(0,i.useRef)(null),[_,W]=(0,i.useState)(a.playedState.state===N.sY.Completed),G=(0,h.O)(),K=(0,j.g)(),Y=(0,C.jh)(),H=(0,y.o)(),q=(0,s.I0)(),{UBIFragment:X,spec:V,logger:Z}=(0,w.fU)(o.createDesktopEpisodeBlockEventFactory,{data:{uri:O,reason:a.requestId||"",position:e}}),$=(0,w.Wi)(V),{isActive:J,isPlaying:Q,togglePlay:ee}=F({uri:O}),[te]=(0,S.z)(1e4,(e=>e?.item?.uri===O));(0,i.useEffect)((()=>{Q&&(z.current=te)}),[Q,te]),(0,i.useEffect)((()=>{!Q&&z.current&&a.duration.milliseconds<=z.current&&W(!0)}),[Q,a.duration.milliseconds]);const ae=(0,i.useCallback)((e=>{e||(z.current=0),W(e)}),[]),ie=e=>{if(e.target!==e.currentTarget)return;const i=`${a.name} • ${t.name}`;G(e,{itemUris:[O],dragLabelText:i,contextUri:t.uri})},se=R(t),ne=(0,b.s)({...a,coverArt:{sources:a.coverArt}},se),oe=(0,i.useCallback)((()=>{if(a.episodeType===N.Wf.Episode&&M)p.y.set((()=>({triggerId:B(a.uri),triggerAction:null})));else if(K)ne();else{let e;e=Q?V.playButtonFactory().hitPause({itemToBePaused:O}):J?V.playButtonFactory().hitResume({itemToBeResumed:O}):V.playButtonFactory().hitPlay({itemToBePlayed:O});const t=Z.logInteraction(e);H({targetUri:O,intent:Q?"pause":"play",type:"click"}),ee({loggingParams:t})}}),[J,ne,H,ee,O,Q,K,a,M,Z,V]),re=(0,i.useCallback)((()=>{Z.logInteraction(V.hitUiNavigate({destination:O})),H({type:"click",targetUri:O,intent:"navigate"})}),[O,H,Z,V]),le=a.podcastSubscription?.isPaywalled??!1,ce=a.podcastSubscription?.isUserSubscribed??!1,de=le&&!ce,ue=le&&K,{badges:ge}=(0,I.r)({contentRating:a.contentRating?.label,isPaywalled:le}),me=(0,i.useCallback)((()=>q((0,l.RM)(t.uri))),[t.uri,q]),pe=(0,i.useCallback)((e=>{let i=e;return(de||ue)&&(i=(0,U.jsx)(m.l,{enabled:!0,showUri:t.uri,children:i})),!a.playability.playable&&ge.nineteen&&(i=(0,U.jsx)("div",{onClick:e=>{e.stopPropagation(),me()},children:e})),i=(0,U.jsx)(c.D,{id:B(O),targetURI:(0,r.EC)(O),children:i}),i}),[O,de,ue,t.uri,ge.nineteen,a.playability.playable,me]),xe=(0,n.W6)(E.eli,{loadingValue:!1});return(0,U.jsx)(X,{spec:V,children:(0,U.jsx)(P.JL,{value:"row",index:e,children:(0,U.jsx)(k._,{onShow:()=>{Z.logInteraction(V.secondaryHitUiReveal())},menu:(0,U.jsx)(d.k,{uri:O,showUri:t.uri,sharingInfo:a.sharingInfo,isPlayed:_,onMarkAsPlayed:ae}),children:xe?(0,U.jsx)(g.k,{ref:$,requestId:a.requestId,index:e,uri:O,size:Y,images:a.coverArt||[],name:a.name,showName:t.name,description:a.description,isPlayable:a.playability.playable||de,fullyPlayed:_,durationMs:a.duration.milliseconds,releaseDate:a.releaseDate?.isoString||"",resumePositionMs:z.current??L,handleDragStart:ie,handlePlaybackClick:oe,handleClick:re,isCurrentlyPlaying:J,isPaywalled:le,isUserSubscribed:ce,isPlaying:Q,position:Q?te:void 0,episodeSharingInfo:a.sharingInfo,onMarkAsPlayed:ae,contentInformation:a.contentInformation,showUri:t.uri,mediaTypes:a.mediaTypes??void 0,badges:(0,U.jsxs)(U.Fragment,{children:[ge.explicit&&(0,U.jsx)(f.N,{}),ge.paid&&(0,U.jsx)(x.g,{}),ge.nineteen&&(0,U.jsx)(v.X,{size:16})]}),playButtonWrapper:pe,onMoreButtonClick:()=>{Z.logInteraction(V.moreButtonFactory().hitUiReveal())},status:D,variant:T}):(0,U.jsx)(u.X,{ref:$,requestId:a.requestId,index:e,uri:O,size:Y,images:a.coverArt||[],name:a.name,showName:t.name,description:a.description,isPlayable:a.playability.playable||de,fullyPlayed:_,durationMs:a.duration.milliseconds,releaseDate:a.releaseDate?.isoString||"",resumePositionMs:z.current??L,handleDragStart:ie,handlePlaybackClick:oe,handleClick:re,isCurrentlyPlaying:J,isPaywalled:le,isUserSubscribed:ce,isPlaying:Q,position:Q?te:void 0,episodeSharingInfo:a.sharingInfo,onMarkAsPlayed:ae,contentInformation:a.contentInformation,badges:(0,U.jsxs)(U.Fragment,{children:[ge.explicit&&(0,U.jsx)(f.N,{}),ge.paid&&(0,U.jsx)(x.g,{}),ge.nineteen&&(0,U.jsx)(v.X,{size:16})]}),playButtonWrapper:pe,onMoreButtonClick:()=>{Z.logInteraction(V.moreButtonFactory().hitUiReveal())},showUri:t.uri,mediaTypes:a.mediaTypes??void 0,status:D,variant:T})})})})}))},76371:(e,t,a)=>{a.d(t,{k:()=>o});a(55330);var i=a(80956);const s="rTMkDBDp47Eo12ZEQv4U";var n=a(11527);const o=({copyrights:e,courtesyLine:t})=>{const a=(e||[]).map(((e,t)=>{const a=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let s;return s="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,(0,n.jsx)(i.D,{as:"p",variant:"finale",dir:"auto",children:`${s} ${a}`},t)}));return t&&a.unshift((0,n.jsx)(i.D,{as:"p",variant:"finale",dir:"auto",children:t},a.length)),(0,n.jsx)("div",{className:s,children:a})}},35494:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ja});var i=a(50959),s=a(76917),n=a(2454),o=a(32581),r=a(90880),l=a(5701),c=a(8968),d=a(77864),u=a(84875),g=a.n(u),m=a(92389),p=a(88798),x=a(29611),h=a(65312),y=a(29518),j=a(95018),b=a(15614),k=a(40174),f=a(28528),v=a(33325),P=a(75317),C=a(76371),S=a(80956),w=a(26146),N=a(48137);const I="_yl4tOZxcpoUt28k6B8I",A="lcJflizNrSwDM9yPNk6h",E="ret7iHkCxcJvsZU14oPY";var U=a(11527);const R=({rating:e,className:t,onClick:a})=>{if(!e)return null;const i=Boolean(e.rating?.rating);return(0,U.jsxs)("button",{className:g()(I,t),onClick:a,children:[(0,U.jsx)(S.D,{dir:"auto",variant:"mestoBold",children:e.averageRating?.showAverage?l.ag.formatNumber(e.averageRating.average,{maximumFractionDigits:1}):l.ag.get("web-player.audiobooks.noRating")}),i?(0,U.jsx)(w.u,{iconSize:16,className:g()(A)}):(0,U.jsx)(N.G,{iconSize:16,className:g()(A)}),e.averageRating?.showAverage&&(0,U.jsxs)(S.D,{variant:"mesto",className:g()(E),children:["(",l.ag.formatNumberCompact(Number(e.averageRating.totalRatings)),")"]})]})};var B=a(53981),F=a(50807),D=a(91733);const T="SpVoh9vvBN0kIwzfCiBh",M="nsGHaEmn310z9W4RMbb8",L="PfYVlZzroXSurDmS_kxY",O="kCT99_BcJQtW47mEfVF6",z="gmDgEbPyRXNixmjYAT9f",_="XlZGcb86bItwlMPQ2jOf",W="VGTtqfOlX2jIbpff6mPP",G="aexqooSgfdW95poEaxjH",K="Fui2wGupk4F1Khigbrhj",Y="jWcvSz47NFpbLjnkFT1O",H="Oo6MP8F01W5uGlnw8dag";var q=a(2513),X=a(67939),V=a(7637),Z=a(28053),$=a(82051),J=a(22362),Q=a(71751);let ee=function(e){return e.SMALL="small",e.LARGE="large",e}({});const te=({images:e,title:t,contentRating:a,duration:i,moreButton:s,onClick:n,onContextMenu:o,onTouchStart:r,onTouchEnd:l,isPlaying:c,isActive:d,size:u,className:m,label:p,isPlayable:x=!0})=>{const h=u===ee.LARGE?"medium":"small",{badges:y}=(0,J.r)({contentRating:a});return(0,U.jsxs)("div",{"data-testid":"trailer-component",className:g()(T,m,{[M]:d}),onContextMenu:o,onTouchStart:r,onTouchEnd:l,children:[(0,U.jsxs)("div",{className:O,children:[(0,U.jsxs)("div",{className:G,children:[(0,U.jsx)(B.O,{type:D.p.EPISODE,title:t,className:g()(W,{[H]:u===ee.SMALL,[Y]:u===ee.LARGE}),size:F.m$.SIZE_56,images:e,shape:B.K.ROUNDED_CORNERS}),(0,U.jsx)("div",{className:K,children:(0,U.jsx)(Q.f,{"data-testid":"trailer-play-button",version:q.ul.transparent,size:h,isPlaying:c,onClick:n,disabled:!x})})]}),(0,U.jsxs)("div",{children:[(0,U.jsx)("div",{className:z,children:(0,U.jsx)(S.D,{dir:"auto",className:L,variant:"balladBold",children:t})}),(0,U.jsxs)("div",{className:_,children:[(0,U.jsx)($.V,{text:p}),y.explicit&&(0,U.jsx)(V.N,{}),y.nineteen&&(0,U.jsx)(Z.X,{}),(0,U.jsx)(S.D,{dir:"auto",variant:"mesto",children:(0,U.jsx)(X.nL,{durationMs:i})})]})]})]}),s]})};var ae=a(10473),ie=a(46268),se=a(22038),ne=a(8801),oe=a(1186),re=a(59242),le=a(8823);const ce=({htmlDescription:e,narrators:t,spec:a})=>{const s=(0,f.o)(),n=(0,re.$P)(),o=(0,i.useCallback)((e=>{s({intent:"expand-description",type:"click"});const t=a.seeMoreButtonFactory();n.logInteraction(e?t.hitUiReveal():t.hitUiHide())}),[n,s,a]);return(0,U.jsxs)(U.Fragment,{children:[t.length?(0,U.jsx)(p.x,{as:"p",variant:"bodyMedium",children:l.ag.get("web-player.audiobooks.narratedByX",t.join(l.ag.getSeparator()))}):null,e&&(0,U.jsx)(le.o,{maxLines:4,content:e,htmlContent:e,onExpanded:o})]})};var de=a(84816),ue=a(96688),ge=a(84454),me=a(77167);const pe="8px",xe="mmCZ5VczybT9VqKB5wFU",he="At_ihDspJfh1yw3Cn2cq",ye="u3LLJx1KnMchfNCzi6k5",je="Yqz1Nv6wj1n3HmXL_qji",be="qRqn3JrWLPbGW9k2a63n",ke="HAah1_lK_dHgyyE71I8Z",fe="eiC4nh70nb5UHZBYMgNA",ve="hl2eRCaYcZ1Jm1bgNYlU",Pe="eYtmwXEvi1UdCevg8WoK",Ce="QOp2aYTYmZHZ6DFFHuYE",Se=({explicit:e,durationMs:t,publishDate:a})=>(0,U.jsxs)("div",{className:Pe,children:[e&&(0,U.jsx)(V.N,{fullText:!0}),(0,U.jsxs)("div",{children:[a&&(0,U.jsx)(p.x,{variant:"bodySmall",className:Ce,children:l.ag.formatDate(a)}),(0,U.jsx)(p.x,{variant:"bodySmall",children:(0,U.jsx)(X.nL,{durationMs:t})})]})]});var we=a(19320),Ne=a(16254),Ie=a(13323),Ae=a(79258),Ee=a(49857),Ue=a(60820),Re=a(25299),Be=a(84726),Fe=a(88878);const De="iZut9Dh2KEjNVhDUxzWw";function Te({uri:e,price:t,size:a,spec:i,logger:s,onPlayback:n}){const{enqueueSnackbar:o}=(0,Fe.D)(),r=(0,Be.g)(),c=0===t?.finalPrice?.amount,d=c?i.getButtonFactory({uri:e}):i.buyButtonFactory({uri:e}),u=(0,Ee.y1)((async()=>{if(s.logInteraction(d.hitShowPaywall({paywalledItem:e})),r)n();else{try{t?.finalPrice?await(0,Re.Q)({show_uri:e,currency:t.finalPrice.currency,price:t.finalPrice.amount}):o(l.ag.get("error.generic"))}catch(e){o(l.ag.get("error.generic"))}n()}}),2e3,{leading:!0,trailing:!1});return(0,U.jsx)(Ue.D,{size:a,className:De,style:{flexShrink:0},onClick:u,children:c?l.ag.get("web-player.audiobooks.buyFree"):l.ag.get("web-player.audiobooks.buy")})}const Me=({uri:e,isLocked:t,price:a,isPlaying:i,isConsumptionCapped:s,onPlayback:n,logger:o,spec:r,size:l="large"})=>t&&!s?(0,U.jsx)(Te,{size:l,uri:e,price:a,logger:o,spec:r,onPlayback:n}):(0,U.jsx)(Ae.$,{size:l,isPlaying:i,uri:e,onClick:n});var Le=a(92249),Oe=a(21393),ze=a(38776),_e=a(29729);const We=i.memo((function({backgroundColor:e,uri:t,name:a,isPlaying:s,togglePlay:n,isLocked:o,showDownloadButton:r,consumptionCapExplanation:c,price:d,spec:u,isExplicit:g,publishDate:p,duration:x}){const[h,y]=(0,Ne.Z)(t),b=!(0,_e.k)(),k=(0,m.I0)(),v=(0,f.o)(),P=(0,re.$P)(),C=(0,i.useCallback)((()=>{v({targetUri:t,intent:h?"unsave":"save",type:"click"});const e=u.saveToLibraryButtonFactory();h?P.logInteraction(e.hitUnfollow({itemToBeUnfollowed:t})):P.logInteraction(e.hitFollow({itemToBeFollowed:t})),y(!h)}),[v,t,h,u,y,P]),S=(0,i.useCallback)(((e,a)=>{const i=u.downloadButtonFactory();c?k((0,Le.S3)(c)):a===Ie.mc.ADD?P.logInteraction(i.hitDownload({itemToDownload:t})):a===Ie.mc.REMOVE?P.logInteraction(i.hitRemoveDownload({itemToRemoveFromDownloads:t})):a===Ie.mc.NO_PERMISSION&&P.logInteraction(i.hitUiReveal())}),[c,k,P,u,t]),w=(0,i.useCallback)((()=>{const e=u.contextButtonFactory().hitUiReveal();P.logInteraction(e)}),[P,u]),N=(0,ze.j)();return(0,U.jsxs)(de.o,{backgroundColor:e,style:{"--action-bar-padding-bottom":pe},children:[(0,U.jsx)(de.F,{testId:"book-action-bar-metadata",children:(0,U.jsx)(Se,{explicit:g,publishDate:p,durationMs:x})}),(0,U.jsxs)(de.F,{children:[(0,U.jsx)(Me,{uri:t,isLocked:o,isConsumptionCapped:!!c,price:d,isPlaying:s,onPlayback:n,logger:P,spec:u,size:N}),(0,U.jsx)(Oe.r,{children:(0,U.jsx)(ue.H,{isAdded:h,onClick:C,disabled:b,size:N,isAudiobook:!0})},"follow-button"),r&&(0,U.jsx)(ge.j,{uri:t,onClick:S,size:N}),(0,U.jsx)(we.yj,{menu:(0,U.jsx)(me.X,{uri:t}),children:(0,U.jsx)(j.z,{label:l.ag.get("more.label.context",a),onClick:w,size:N})})]})]})}));var Ge=a(22786),Ke=a(22866),Ye=a(17703),He=a(61925),qe=a(69082),Xe=a(81988);const Ve=i.memo((function({coverArt:e,name:t,authorName:a,uri:i,backgroundColor:s,isPlaying:n,togglePlay:o,isLocked:r,price:c,isConsumptionCapped:d,logger:u,spec:g}){return(0,U.jsxs)(Ke.gF,{backgroundColor:s,children:[(0,U.jsxs)(Ye.W,{children:[(0,U.jsx)(Me,{uri:i,isLocked:r,price:c,isPlaying:n,isConsumptionCapped:d,onPlayback:o,logger:u,spec:g,size:"medium"}),(0,U.jsx)(He.i,{text:t,dragUri:i,dragLabel:t})]}),(0,U.jsx)(we._P,{menu:(0,U.jsx)(me.X,{uri:i}),children:(0,U.jsx)(Ke.Oz,{images:e,name:t,dragUri:i,dragMimeType:Ge.RN.AUDIOBOOKS,shape:B.K.SQUARE})}),(0,U.jsxs)(Ke.sP,{children:[(0,U.jsx)(qe.g,{children:l.ag.get("web-player.audiobooks.audiobook")}),(0,U.jsx)(Ke.xd,{canEdit:!1,onClick:()=>{},scaleAtMinWidth:Ke.vz,dragUri:i,dragMimeType:Ge.RN.AUDIOBOOKS,dragLabel:t,children:t}),(0,U.jsx)(Xe.m,{children:a})]})]})})),Ze="HvVxzh4ZoggYAhgSxSth",$e=i.memo((({price:e})=>e.finalPrice&&e.finalListPrice?0===e.finalPrice.amount&&0===e.finalListPrice.amount?(0,U.jsxs)("div",{className:Ze,children:[(0,U.jsx)(p.x,{variant:"bodyMediumBold",semanticColor:"textBase",children:l.ag.get("audiobook.freePriceDescription")}),(0,U.jsx)(p.x,{variant:"bodySmall",children:l.ag.get("audiobook.freePriceExplanation")})]}):(0,U.jsxs)("div",{className:Ze,children:[(0,U.jsx)(p.x,{variant:"titleSmall",semanticColor:"textBase",children:e.finalPrice.formattedPrice}),e.finalPrice.amount<e.finalListPrice.amount&&(0,U.jsx)(p.x,{variant:"bodyMedium",semanticColor:"textSubdued",children:l.ag.get("web-player.audiobooks.retailPrice",(0,U.jsx)("span",{style:{textDecoration:"line-through"},children:e.finalListPrice.formattedPrice}))})]}):null));a(14534),a(99801),a(55330);var Je=a(89905),Qe=a(82349);var et=a(86769);var tt=a(67107),at=a(43113),it=a(90343),st=a(50832);const nt="b0Vng72SrQiFroJKXfk2",ot="FfeP3XKSZcAdfviyk8fv",rt="eWxDd0LanTnTlSl8SOHX",lt="eAOkseqV13_CAmzuDJpa",ct="fovofKIYdEIURgIYoKm2",dt="NXXFrQO7npgPCRuSKaAA",ut="ekkhhuxKVGAzkEmuh9kE",gt="zd6xqobF255bxHFtCmXy",mt=i.memo((function({name:e,duration:t,uri:a,bookName:s,usePlayContextItem:n,isChapterLocked:o,isPlayable:r,resumePositionMs:c,isFullyPlayed:d,isExplicit:u,is19PlusOnly:h,spec:y,index:k,consumptionCapExplanation:v}){const P=(0,i.useRef)(c),{isPlaying:C,togglePlay:S,isActive:w}=n({uri:a}),N=(0,re.$P)(),I=(0,Be.g)(),A=(0,m.I0)(),E=(0,x.W6)(it.vWw,{loadingValue:!1}),{position:R,isFullyPlayed:B}=((e,t,a,s)=>{const n=(0,i.useRef)(null),[o,r]=(0,i.useState)(s),[l]=(0,st.z)(1e4,(t=>t?.item?.uri===e));return(0,i.useEffect)((()=>{a&&(n.current=l)}),[a,l]),(0,i.useEffect)((()=>{!a&&n.current&&t.milliseconds<=n.current+1e4&&r(!0)}),[a,t.milliseconds]),{position:a?l:null,isFullyPlayed:o}})(a,t,C,d);null!==R&&(P.current=R);const F=(0,i.useCallback)((e=>{e.stopPropagation(),e.preventDefault()}),[]),D=(0,f.o)(),T=(0,i.useCallback)((e=>{if(F(e),v&&!I&&E)return void A((0,Le.S3)(v));const t=y.chapterBlockFactory({position:k,uri:a}).playButtonFactory();if(o)D({type:"click",intent:"audiobook-gated-entry-point",itemIdSuffix:"target-chapter"}),N.logInteraction(t.hitShowPaywall({paywalledItem:a}));else{const e=(0,at.aK)({isPlaying:C,isActive:w,spec:t,logger:N,uri:a});S({loggingParams:e})}}),[v,A,k,E,w,I,o,C,N,D,y,F,S,a]),M=(0,i.useCallback)((()=>{const e=y.chapterBlockFactory({position:k,uri:a}).secondaryHitUiReveal();N.logInteraction(e)}),[k,N,y,a]),L=(0,i.useCallback)((e=>{F(e);const t=y.chapterBlockFactory({position:k,uri:a}).contextMenuFactory().hitUiReveal();N.logInteraction(t)}),[k,N,y,F,a]),O=(0,i.useMemo)((()=>!(o||v)),[v,o]),z=(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)("hr",{className:rt,"aria-hidden":!0}),(0,U.jsxs)("div",{className:nt,onDoubleClick:e=>{D({targetUri:a,intent:"play",type:"double-click"}),T(e)},children:[(0,U.jsx)(p.x,{as:"h2",variant:"bodyMediumBold",className:g()(dt,{[ot]:w}),semanticColor:"textBase",children:e}),(0,U.jsxs)("div",{className:ut,children:[(0,U.jsx)(Q.f,{size:"small",version:Q.u.secondary,onClick:T,isPlaying:C,ariaPlayLabel:l.ag.get("tracklist.a11y.play",e,s),ariaPauseLabel:l.ag.get("tracklist.a11y.pause",e,s),locked:o&&!v,disabled:!r&&!(o||v)}),u&&(0,U.jsx)(V.N,{fullText:!0}),h&&(0,U.jsx)(Z.X,{size:16}),(0,U.jsx)("div",{className:gt,children:(0,U.jsx)(tt.E,{isPlaying:C,fullyPlayed:B,durationMs:t.milliseconds,resumePositionMs:P.current,position:R??void 0})})]}),O?(0,U.jsx)(we.yj,{menu:(0,U.jsx)(b.r,{uri:a}),children:(0,U.jsx)(j.z,{className:ct,size:j.q.sm,label:l.ag.get("more.label.context",e),onClick:L,condensedAll:!0})}):null]})]});return O?(0,U.jsx)(we._P,{menu:(0,U.jsx)(b.r,{uri:a}),onShow:M,children:(0,U.jsx)("div",{className:lt,children:z})}):(0,U.jsx)("div",{className:lt,children:z})}));var pt=a(55416),xt=a(9421),ht=a(71986),yt=a(81468),jt=a(22576);const bt="XG_S4BkuyAMohXFLGKU1",kt="NrMNU3Sf4iy2c6JJx7R8",ft="n8V7RFwuVx9PaIT1n_mA",vt="kTtB_Y_yizhUj6SMYY8e",Pt="f2XS5sEjEtvk4TdlzHK3",Ct="d9YBRXX3qqxAD43sqNzE",St="Jvp5er4UpzTljUao_SrR",wt="EQCGoB4MqhFPtwUwp1rh",Nt="UTBQUpUwOPb37ou2ULmH",It="Dnwv7PC1vjXvcwYEfqqf",At=i.memo((function({name:e,duration:t,uri:a,bookName:s,usePlayContextItem:n,isChapterLocked:o,isPlayable:r,resumePositionMs:c,isFullyPlayed:d,isExplicit:u,is19PlusOnly:p,spec:h,index:y,consumptionCapExplanation:k}){const v=(0,i.useRef)(c),{isPlaying:P,togglePlay:C,isActive:S}=n({uri:a}),w=(0,re.$P)(),N=(0,Be.g)(),I=(0,m.I0)(),A=(0,x.W6)(it.vWw,{loadingValue:!1}),E=(0,yt.Y)((e=>{if(e?.item?.uri===a){const t=(0,jt.k)(e)??0;return v.current=t,t}return 0})),R=(0,i.useCallback)((e=>{e.stopPropagation(),e.preventDefault()}),[]),B=(0,f.o)(),F=(0,i.useCallback)((e=>{if(R(e),k&&!N&&A)return void I((0,Le.S3)(k));const t=h.chapterBlockFactory({position:y,uri:a}).playButtonFactory();if(o)B({type:"click",intent:"audiobook-gated-entry-point",itemIdSuffix:"target-chapter"}),w.logInteraction(t.hitShowPaywall({paywalledItem:a}));else{const e=(0,at.aK)({isPlaying:P,isActive:S,spec:t,logger:w,uri:a});C({loggingParams:e})}}),[k,I,y,A,S,N,o,P,w,B,h,R,C,a]),D=(0,i.useCallback)((()=>{const e=h.chapterBlockFactory({position:y,uri:a}).secondaryHitUiReveal();w.logInteraction(e)}),[y,w,h,a]),T=(0,i.useCallback)((e=>{R(e);const t=h.chapterBlockFactory({position:y,uri:a}).contextMenuFactory().hitUiReveal();w.logInteraction(t)}),[y,w,h,R,a]),M=!(o||k),L=(0,U.jsx)(pt.g,{className:g()({[kt]:S}),children:e}),O=(0,U.jsxs)("div",{className:Ct,children:[o?(0,U.jsx)(ht.g,{}):null,u&&(0,U.jsx)(V.N,{fullText:!0}),p&&(0,U.jsx)(Z.X,{size:16}),(0,U.jsx)("div",{className:St,children:(0,U.jsx)(tt.E,{isPlaying:P,fullyPlayed:d,durationMs:t.milliseconds,resumePositionMs:v.current,position:P?E:void 0})})]}),z=(0,U.jsxs)("div",{className:Nt,children:[(0,U.jsx)("div",{className:It,children:M?(0,U.jsx)(we.yj,{menu:(0,U.jsx)(b.r,{uri:a}),children:(0,U.jsx)(j.z,{className:Pt,size:j.q.xs,label:l.ag.get("more.label.context",e),onClick:T})}):null}),(0,U.jsx)("div",{className:wt,children:(0,U.jsx)(Q.f,{size:"small",version:Q.u.secondary,onClick:F,isPlaying:P,ariaPlayLabel:l.ag.get("tracklist.a11y.play",e,s),ariaPauseLabel:l.ag.get("tracklist.a11y.pause",e,s),locked:o&&!k,disabled:!r&&!(o||k)})})]}),_=(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)("hr",{className:ft,"aria-hidden":!0}),(0,U.jsx)(xt.w,{id:`chapter-${y}`,title:L,body:O,footer:z,onDoubleClick:e=>{B({targetUri:a,intent:"play",type:"double-click"}),F(e)},className:bt})]});return M?(0,U.jsx)(we._P,{menu:(0,U.jsx)(b.r,{uri:a}),onShow:D,children:(0,U.jsx)("div",{className:vt,children:_})}):(0,U.jsx)("div",{className:vt,children:_})})),Et=({bookUri:e,bookName:t,sampleUri:a,isFinishedUnlockingJourney:s,usePlayContextItem:n,spec:o,consumptionCapExplanation:r})=>{const l=function(e,t){const a=(0,Qe.z)();return(0,i.useCallback)((async(i,s)=>a.getBookContents(e,{offset:i,limit:s,doRefreshSubscription:t})),[t,a,e])}(e,s),c=(0,i.useRef)(!1),d=(0,i.useRef)(0),u=(0,x.W6)(it.eli,{loadingValue:!1}),[g,m]=(0,i.useState)([]),p=(0,i.useCallback)((e=>e?.uri===a),[a]),h=(0,i.useCallback)((e=>(e=>null!==e)(e)&&!p(e)),[p]),y=(0,i.useCallback)((()=>{l&&(c.current||null===d.current||(c.current=!0,l(d.current,50).then((e=>{c.current=!1,d.current=e.nextOffset,e.items.length>0&&m((t=>t.concat(e.items.filter(h))))}))))}),[l,h]);return(0,i.useEffect)((()=>{d.current=0,m([])}),[e]),(0,U.jsx)("ul",{children:(0,U.jsx)(Je.C,{onReachBottom:y,triggerOnInitialLoad:!0,children:g.map(((e,a)=>{const{name:i,duration:s,uri:l,playability:{playable:c},playedState:{playPositionMilliseconds:d,state:g},isExplicit:m,is19PlusOnly:p}=e,x=function(e){return!e.playability?.playable&&(e.playability?.reason===et.WY.PaymentRequired||e.playability?.reason===et.WY.Anonymous)}(e);return u?(0,U.jsx)(At,{name:i,duration:s,uri:l,bookName:t,usePlayContextItem:n,isPlayable:c,isChapterLocked:x,consumptionCapExplanation:r,resumePositionMs:d,isFullyPlayed:g===et.sY.Completed,isExplicit:m,is19PlusOnly:p,spec:o,index:a},l):(0,U.jsx)(mt,{name:i,duration:s,uri:l,bookName:t,usePlayContextItem:n,isPlayable:c,isChapterLocked:x,consumptionCapExplanation:r,resumePositionMs:d,isFullyPlayed:g===et.sY.Completed,isExplicit:m,is19PlusOnly:p,spec:o,index:a},l)}))})})};var Ut=a(18436),Rt=a(95591),Bt=a(88923),Ft=a(99993),Dt=a(44436);const Tt="QEd1L2SSRW1ol_sQQN6m",Mt="ENuWK8u3C9kmadnqkErf",Lt="i0gSVhns0PjhiUKm4OG1",Ot="jKVb6K0dga3SfW1dp2Pg",zt="MOpV0_YizQER2NksxLju",_t="vrR8bh9DvivyDfUrh1vD",Wt="_toO3CqMPAPTbny7Rh8R",Gt="Iudw61HRePwOAJpbDRvA",Kt="GWaz1n1SADn9enzKdi_Z",Yt=i.memo((function({coverArt:e,toggleModal:t,uri:a,isBook:i}){const s=(0,Ft.X)(e,{desiredSize:320}),{spec:n,logger:r}=(0,re.fU)(Rt.createDesktopPodcastRatingEventFactory,{data:{identifier:i?o.Wg.RATINGS_AND_REVIEWS_RATINGS_AUDIOBOOK:o.Wg.RATINGS_AND_REVIEWS_RATINGS,uri:a}});return(0,U.jsx)(Dt.Z,{contentLabel:"podcast-rating-modal",isOpen:!0,onRequestClose:t,children:(0,U.jsxs)("div",{className:Tt,children:[(0,U.jsxs)("div",{className:Lt,children:[(0,U.jsx)(p.x,{as:"h1",variant:"titleSmall",className:Wt,children:i?l.ag.get("web-player.audiobooks.rating.rateAudiobook"):l.ag.get("web-player.show.rating.header")}),(0,U.jsxs)("button",{className:Ot,onClick:()=>{const e=n.closeButtonFactory().hitUiNavigateBack();r.logInteraction(e),t()},children:[(0,U.jsx)(Ut.k,{role:"presentation"}),(0,U.jsx)("span",{className:"hidden-visually",children:l.ag.get("web-player.audiobooks.rating.closeModal")})]})]}),(0,U.jsxs)("div",{className:zt,children:[(0,U.jsx)(Bt.Ee,{loading:"eager",src:s?.url,className:Mt}),(0,U.jsxs)("div",{className:_t,children:[(0,U.jsx)(p.x,{as:"p",variant:"bodyMediumBold",className:Gt,children:i?l.ag.get("web-player.audiobooks.rating.wantToRate"):l.ag.get("web-player.show.rating.want-to-rate")}),(0,U.jsx)(p.x,{as:"p",className:Kt,children:l.ag.get("web-player.audiobooks.rating.goToApp")}),(0,U.jsx)(Ue.D,{colorSet:"invertedLight",onClick:()=>{const e=n.okButtonFactory().hitUiNavigateBack();r.logInteraction(e),t()},children:l.ag.get("web-player.audiobooks.rating.ok")})]})]})]})})})),Ht={shuffle:!1,repeat:ne.zq.REPEAT_NONE},qt=i.memo((function({metadata:e}){const{uri:t,coverArt:a,name:n,htmlDescriptionPlain:r,authorName:d,sample:u,narrators:S,rating:w,isExplicit:N,duration:I,copyrights:A,publishDate:E,price:B,isLocked:F,consumptionCapExplanation:D,signifierText:T,latestPlayedEpisodeLink:M,topics:L}=e,{search:O}=(0,s.TH)(),z=!!new URLSearchParams(O).get("isUnlockingAudiobook"),_=!(!(0,ie.D)(z)||z),W=(0,Be.g)(),G=(0,v.Z)(a[0]?.url),K=(0,m.I0)(),[Y,H]=(0,i.useState)(!1),q=(0,f.o)(),X=(0,x.W6)(it.vWw,{loadingValue:!1}),{spec:V,logger:Z}=(0,re.fU)(h.createDesktopAudiobookEventFactory,{data:{uri:t,identifier:o.Wg.PODCAST_SHOW_AUDIOBOOK}}),{spec:$,logger:J}=(0,re.fU)(h.createDesktopAudiobookEventFactory,{data:{uri:t,identifier:o.Wg.RATINGS_AND_REVIEWS_RATINGS_AUDIOBOOK}}),{spec:Q,logger:ne}=(0,re.fU)(y.createDesktopLockedAudiobookEventFactory,{data:{uri:t,identifier:o.Wg.PODCAST_SHOW_AUDIOBOOK}}),le=(0,i.useMemo)((()=>V.actionBarFactory()),[V]),de=(0,i.useMemo)((()=>$.aboutSectionFactory()),[$]),ue=(0,i.useMemo)((()=>V.chapterListFactory()),[V]);(0,i.useEffect)((()=>{q({type:"view",intent:"audiobook"})}),[q]),(0,i.useEffect)((()=>{F&&ne.logImpression(Q.impression())}),[Q,ne,F]);const{isPlaying:ge,togglePlay:me,usePlayContextItem:pe,isActive:Pe,triggerPlay:Ce}=(0,se.n)({uri:t},{featureIdentifier:"audiobook"},Ht),{togglePlay:Se,isPlaying:we,isActive:Ne}=(0,se.n)({uri:u?.uri??""},{featureIdentifier:"audiobook"},Ht),Ie=ge&&!we,Ae=Pe&&!Ne,Ee=(0,i.useCallback)((async()=>{const e=V.actionBarFactory().playButtonFactory();if(D&&!W&&X)return Z.logInteraction(e.hitShowPaywall({paywalledItem:t})),void K((0,Le.S3)(D));if(!F||W)if(W)me();else{const a=(0,at.aK)({isPlaying:Ie,isActive:Ae,spec:e,logger:Z,uri:t});Ae?me({loggingParams:a}):Ce({skipTo:M?{uri:M}:void 0,loggingParams:a})}}),[V,D,W,X,F,Z,t,K,me,Ie,Ae,Ce,M]),Ue=(0,i.useCallback)((()=>{u?.uri&&(q({targetUri:u.uri,intent:we?"play":"pause",type:"click"}),Se())}),[we,q,Se,u?.uri]),Re=(0,i.useCallback)((()=>{const e=de.ratingButtonFactory().hitUiReveal();J.logInteraction(e),H((e=>!e))}),[de,J]),Fe=(0,ae.jh)(),De=F&&!D&&B;return(0,U.jsxs)("section",{className:xe,children:[(0,U.jsx)(c.$,{children:(0,oe.Od)({showOrAudiobookName:n,type:"Audiobook"})}),(0,U.jsx)(Ve,{name:n,authorName:d,uri:t,coverArt:a,backgroundColor:G,togglePlay:Ee,isPlaying:Ie,isLocked:F,isConsumptionCapped:!!D,price:B,logger:Z,spec:V.actionBarFactory()}),(0,U.jsx)(We,{name:n,backgroundColor:G,uri:t,togglePlay:Ee,isPlaying:Ie,isLocked:F,showDownloadButton:!F||!!D,consumptionCapExplanation:D,isExplicit:N,duration:I,publishDate:E,price:B,spec:le}),(0,U.jsxs)("div",{className:g()(he,"contentSpacing",{[ye]:Fe===ae.Uo.LARGE}),children:[(0,U.jsxs)("div",{className:je,children:[(0,U.jsxs)("div",{className:ve,children:[T&&(0,U.jsx)(p.x,{variant:"bodyMedium",as:"p",semanticColor:"textBrightAccent",children:T}),!T&&De&&(0,U.jsx)($e,{price:B})]}),(0,U.jsx)(ce,{htmlDescription:r,narrators:S,spec:de})]}),(0,U.jsxs)("div",{className:be,children:[u?.isPlayable&&(0,U.jsx)(te,{label:l.ag.get("audiobook.page.sample"),images:u.coverArt,title:u.name,duration:u.duration.milliseconds,moreButton:F?null:(0,U.jsx)(P.y,{menu:(0,U.jsx)(b.r,{uri:u.uri}),children:(0,U.jsx)(j.z,{})}),onClick:Ue,isPlaying:we,isActive:Ne,size:ee.LARGE,contentRating:u.contentRating?.label,isPlayable:u.isPlayable}),(0,U.jsx)("div",{className:ke,children:(0,U.jsx)(R,{rating:w,onClick:Re})}),L.length>0&&(0,U.jsx)(k.v,{topics:L})]}),(0,U.jsxs)("div",{className:fe,children:[(0,U.jsx)(Et,{bookUri:t,bookName:n,sampleUri:u?.uri,isFinishedUnlockingJourney:_,usePlayContextItem:pe,spec:ue,consumptionCapExplanation:D},`${t}-${F}-${!!D}`),(0,U.jsx)(C.k,{copyrights:A})]})]}),Y&&(0,U.jsx)(Yt,{toggleModal:()=>H(!1),coverArt:a,uri:t,isBook:!0})]})}));var Xt=a(9831),Vt=a(16078),Zt=a(75751),$t=a(42057),Jt=a(92131);const Qt=({uri:e,name:t,backgroundColor:a,spec:s})=>{const n=(0,re.$P)(),o=(0,f.o)(),r=!(0,_e.k)(),[c,d]=(0,Ne.Z)(e),u=(0,i.useCallback)((()=>{o({targetUri:e,intent:c?"unsave":"save",type:"click"});const t=s.followButtonFactory();n.logInteraction(c?t.hitUnfollow({itemToBeUnfollowed:e}):t.hitFollow({itemToBeFollowed:e})),d(!c)}),[o,e,c,s,n,d]),g=(0,i.useCallback)((()=>{n.logInteraction(s.contextButtonFactory().hitUiReveal())}),[n,s]),m=(0,ze.j)();return(0,U.jsx)(de.o,{backgroundColor:a,children:(0,U.jsxs)(de.F,{children:[(0,U.jsx)(Oe.r,{children:(0,U.jsx)(Jt.e,{isFollowing:c,onClick:u,disabled:r})},"follow-button"),(0,U.jsx)(P.y,{menu:(0,U.jsx)($t.M,{uri:e}),onShow:g,children:(0,U.jsx)(j.z,{label:l.ag.get("more.label.context",t),size:m})})]})})},ea=(0,i.lazy)((()=>a.e(1040).then(a.bind(a,91040)))),ta=(0,i.lazy)((()=>a.e(8215).then(a.bind(a,98215))));function aa(e){const t=(0,x.W6)(it.$f6),a=(0,x.W6)(it.BOn);return t&&a?(0,U.jsx)(ta,{uri:e.uri}):t?(0,U.jsx)(i.Suspense,{fallback:!0,children:(0,U.jsx)(ea,{...e})}):null}var ia=a(54878),sa=a(55220),na=a(44870),oa=a(30140),ra=a(47937),la=a(69767),ca=a(10615);const da=(0,i.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a ShowFilterProvider")},sortState:[]}),ua=i.memo((function({uri:e,children:t}){return(0,U.jsx)(ca.r,{uri:e,defaultState:[],sortContext:da,localStorageKey:"showFilterParams-v2",children:t})}));a(69776);var ga=a(37634);const ma={field:ga.ay.PUBLISH_DATE,order:ga.i5.DESC},pa={field:ga.ay.PUBLISH_DATE,order:ga.i5.ASC},xa={episodic:ma,sequential:pa,recent:ma};function ha(){return new Map([[ma,{key:"newest-to-oldest",value:l.ag.get("shows.sort.newest-to-oldest")}],[pa,{key:"oldest-to-newest",value:l.ag.get("shows.sort.oldest-to-newest")}]])}function ya(e){return xa[e]}const ja=(0,i.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a ShowSortProvider")},sortState:ya("recent")}),ba=e=>{const t=ha();return Array.from(t.keys()).some((({field:t})=>t===e?.field))},ka=i.memo((function({uri:e,children:t,defaultSortParam:a}){return(0,U.jsx)(ca.r,{uri:e,defaultState:a,sortContext:ja,localStorageKey:"showSortParam",validator:ba,children:t})})),fa="cJJXVm4gQW6AdfCQRhpX",va="hTRqaN61SDG95erQGMmx",Pa={totalCount:0,nextOffset:0,items:[]},Ca=i.memo((function({showMetadata:e,usePlayContextItem:t}){const{sortState:a}=(0,i.useContext)(ja),{sortState:s}=(0,i.useContext)(da),n=(0,oa.ZM)(e.uri,a,s),[o,r]=(0,i.useState)(Pa),l=(0,i.useRef)(!1),c=(0,i.useRef)(0),d=(0,i.useCallback)(((e=!1)=>{if(!n)return;const t=c.current;null!==t&&(l.current||(l.current=!0,n(t,50).then((a=>{r((i=>{const s=e?[]:[...i.items];return s.splice(t,a.items.length,...a.items),c.current=a.nextOffset,{...a,items:s}})),l.current=!1}))))}),[n]);return(0,i.useEffect)((()=>{r(Pa)}),[e.uri]),(0,i.useEffect)((()=>{c.current=0,d(!0)}),[d]),(0,U.jsx)(la.JL,{value:"track-list",children:(0,U.jsx)(Je.C,{onReachBottom:d,triggerOnInitialLoad:!0,children:o.items.map(((a,i)=>a&&(0,U.jsxs)("div",{className:va,children:[(0,U.jsx)("hr",{className:fa,"aria-hidden":!0}),(0,U.jsx)(ra.V,{index:i,episode:a,showMetadata:e,usePlayContextItem:t},`${a.uri}/${i}`)]},`${i}${a.uri}`)))})})}));a(53261);var Sa=a(83524);const wa={field:ga.YG.ISPLAYED,operator:ga.NK.EQUALS,value:!1},Na={field:ga.YG.STARTEDPLAYING,operator:ga.NK.GREATER_THAN,value:0};const Ia="all-episodes",Aa=({onFilter:e})=>{const{sortState:t,setSortState:a}=(0,i.useContext)(da),s=new Map([[wa,{key:"is-played",value:l.ag.get("shows.filter.unplayed")}],[Na,{key:"started-playing",value:l.ag.get("shows.filter.in-progress")}]]),n=Array.from(s.values());n.unshift({key:Ia,value:l.ag.get("mwp.podcast.all.episodes")});const o=Array.from(s.keys()),r=(0,i.useCallback)((t=>{if(t===Ia)a([]);else{const e=o.find((e=>s.get(e)?.key===t));e&&a([e])}e()}),[e,a,o,s]);if(!s.size||!o)return null;let c=n[0];const d=Array.from(s.entries()).filter((e=>t?.some((t=>t.field===e[0].field&&t.operator===e[0].operator))));return d.length>0&&(c=d[0][1]),(0,U.jsx)(Sa.A,{options:n,onSelect:e=>r(e),selected:c,variant:"bodyMediumBold",semanticColor:"textBase",heading:l.ag.get("drop_down.filter_by")})},Ea=({onSort:e})=>{const{sortState:t,setSortState:a}=(0,i.useContext)(ja),s=ha(),n=Array.from(s.values()),o=Array.from(s.keys()),r=(0,i.useCallback)((t=>{const i=o.find((e=>s.get(e)?.key===t));i&&a(i),e()}),[o,e,s,a]);if(!s.size||!t)return null;const c=Array.from(s.keys()).find((e=>e.field===t.field&&e.order===t.order));if(!c)return null;const d=s.get(c);return d?(0,U.jsx)(Sa.A,{options:n,onSelect:e=>r(e),selected:d,heading:l.ag.get("drop_down.sort_by")}):null},Ua="aQMtxnKeiJqZ9XCcDuZ7",Ra="TYB4Y2xQujO7cifhHush",Ba="sSXKiPRvp2AHmwfHoCCS",Fa="YJlizbhw6DBPHT9OYbdj",Da="TfjbWiK8hca4HHEBnonP",Ta="kR0M2WSYVUj4cohADSFM",Ma="ghfuv80I8uW_ymG_jfx9",La="jtfSxoRam9rzTtdXIjzc",Oa="fejGrhq7pxGC99cUdyVw",za="T0OjvsNXAJJGd23eBG2m",_a="Ppm5YkDdE5ktTPwZC1Dw",Wa="urKYEVZPj2k0hwDT1qzt",Ga=({spec:e})=>{const t=(0,re.$P)(),{canSort:a,canFilter:s}=(0,oa.zZ)().capabilities,n=(0,i.useCallback)((()=>{t.logInteraction(e.episodeListFactory().filterButtonFactory().hitFilter())}),[t,e]),o=(0,i.useCallback)((()=>{t.logInteraction(e.episodeListFactory().sortButtonFactory().hitSort())}),[t,e]);return(0,U.jsxs)("div",{className:Ta,children:[s&&(0,U.jsx)("div",{className:La,children:(0,U.jsx)(Aa,{onFilter:n})}),!s&&(0,U.jsx)(p.x,{as:"h3",variant:"titleSmall",semanticColor:"textBase",className:Oa,children:l.ag.get("mwp.podcast.all.episodes")}),a&&(0,U.jsx)("div",{className:Ma,children:(0,U.jsx)(Ea,{onSort:o})})]})},Ka=e=>{switch(e){case et.it.TRAILER:return l.ag.get("podcasts.next-episode.trailer");case et.it.UP_NEXT:return l.ag.get("podcasts.next-episode.up-next");case et.it.CONTINUE_LISTENING:return l.ag.get("podcasts.next-episode.continue-listening");case et.it.FIRST_PUBLISHED:return l.ag.get("podcasts.next-episode.first-published");case et.it.LATEST_PUBLISHED:return l.ag.get("podcasts.next-episode.latest-published");default:return}},Ya=({breakpoint:e,metadata:t,showId:a,spec:s})=>{const{uri:n,trailer:o,topics:r,description:c,htmlDescription:d,coverArt:u,rating:m}=t,x=(0,re.$P)(),h=(0,i.useMemo)((()=>s.episodeListFactory()),[s]),[y,b]=(0,i.useState)(!1),v=(0,f.o)(),S=(0,Be.g)(),{sortState:w}=(0,i.useContext)(ja),{sortState:N}=(0,i.useContext)(da),I=(0,oa.zZ)(),{usePlayContextItem:A}=(0,se.n)({uri:n,metadata:{[ne.sb.SORTING_CRITERIA]:I.getPlayerSort(w),[ne.sb.FILTERING_PREDICATE]:I.getPlayerFilter(N)}},{featureIdentifier:"show"}),{isActive:E,isPlaying:B,togglePlay:F}=A({uri:o?.uri||""}),D=(0,i.useCallback)((e=>{v({intent:"expand-description",type:"click"});const t=s.aboutSectionFactory().seeMoreButtonFactory(),a=e?t.hitUiReveal():t.hitUiHide();x.logInteraction(a)}),[x,v,s]),T=(0,i.useCallback)(((e,t)=>{const a=s.aboutSectionFactory().topicFactory(t).hitUiNavigate({destination:t.uri});x.logInteraction(a)}),[x,s]),M=o?{name:o.name,uri:o.uri,audio:{items:o.audio.items.map((e=>({url:e.url})))}}:null,L=(0,ra.e)(t),O=(0,sa.s)(M,L),z=(0,i.useCallback)((()=>{o?.uri&&(S?O():(v({targetUri:o.uri,intent:B?"play":"pause",type:"click"}),F()))}),[O,S,B,v,F,o?.uri]),{ref:_,breakpoint:W}=(0,ae.Db)({[ae.Uo.MEDIUM]:0,[ae.Uo.LARGE]:600}),G=r.length>0,K=c||d,Y=K||G;return(0,U.jsxs)("div",{className:g()(Ra,"contentSpacing",{[Ba]:e===ae.Uo.LARGE}),ref:_,children:[(0,U.jsxs)("div",{className:Fa,children:[Y&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(p.x,{as:"h3",variant:"titleSmall",semanticColor:"textBase",className:Oa,children:l.ag.get("artist.about")}),K&&(0,U.jsx)(le.o,{maxLines:4,content:(c||"").trim(),onExpanded:D,htmlContent:d||void 0}),m&&(0,U.jsx)("div",{className:Wa,children:(0,U.jsx)(R,{rating:m,onClick:()=>b(!0)})}),G&&(0,U.jsx)(k.v,{topics:r,onClick:T})]}),(0,U.jsx)(aa,{showId:a,uri:n}),o&&!t.nextBestEpisode&&(0,U.jsx)(na._,{menu:(0,U.jsx)(ia.k,{uri:o.uri,showUri:n,sharingInfo:o.sharingInfo}),children:(0,U.jsx)(te,{label:l.ag.get("track-trailer"),className:za,images:o.coverArt,title:o.name,duration:o.duration.milliseconds,moreButton:(0,U.jsx)(P.y,{menu:(0,U.jsx)(ia.k,{uri:o.uri,sharingInfo:o.sharingInfo,showUri:n}),children:(0,U.jsx)(j.z,{})}),onClick:z,isPlaying:B,isActive:E,size:ee.LARGE,contentRating:o.contentRating?.label})})]}),(0,U.jsx)(ae.ZU.Provider,{value:W,children:(0,U.jsxs)("div",{className:Da,"data-testid":"show-all-episode-list",children:[t.nextBestEpisode&&(0,U.jsx)(ra.V,{showMetadata:t,episode:t.nextBestEpisode.data,usePlayContextItem:A,status:Ka(t.nextBestEpisode.type),variant:"next-best-episode"}),(0,U.jsx)(Ga,{spec:s}),(0,U.jsx)(re.Nh,{spec:h,children:(0,U.jsx)(Ca,{showMetadata:t,usePlayContextItem:A})})]})}),(0,U.jsx)(C.k,{copyrights:[]}),y&&(0,U.jsx)(Yt,{toggleModal:()=>b(!1),coverArt:u,uri:n,isBook:!1})]})},Ha=i.memo(Ya);var qa=a(47990);const Xa=({reason:e})=>{const t=(0,x.W6)(it.ALT),a=function(e){switch(e){case"OTP":return l.ag.get("podcasts.subscriber-indicator.otp");case"SUBSCRIPTION":return l.ag.get("podcasts.subscriber-indicator.subscription");default:return""}}(e);return t&&a?(0,U.jsx)(S.D,{className:_a,children:a}):null};const Va=({metadata:e,backgroundColor:t})=>{const{uri:a,coverArt:i,name:s,podcastType:n,publisherName:o,gatedContentAccessReason:r}=e;return(0,U.jsxs)(Ke.gF,{backgroundColor:t,children:[(0,U.jsx)(Ye.W,{children:(0,U.jsx)(He.i,{text:s,dragUri:a,dragLabel:s})}),(0,U.jsx)(qa.k,{children:(0,U.jsx)(na._,{menu:(0,U.jsx)($t.M,{uri:a}),children:(0,U.jsx)(Ke.Oe,{loading:"eager",name:s,images:i,placeholderType:"show",shape:Ke.Kc.SQUARE})})}),(0,U.jsxs)(Ke.sP,{children:[(0,U.jsxs)(qe.g,{children:["SHOW"===n?l.ag.get("type.show"):l.ag.get("type.podcast"),r&&(0,U.jsx)(Xa,{reason:r})]}),(0,U.jsx)(na._,{menu:(0,U.jsx)($t.M,{uri:a}),children:(0,U.jsx)(Ke.xd,{dragUri:a,dragLabel:s,scaleAtMinWidth:Ke.vz,children:(0,U.jsx)("span",{"data-testid":"show-title",children:s})})}),(0,U.jsx)(Xe.m,{children:o})]})]})};var Za=a(90889);const $a=({metadata:e,showId:t})=>{const{coverArt:a,name:s,uri:o}=e,{spec:r}=(0,re.fU)(n.createDesktopPodcastEventFactory,{data:{uri:o}}),l=(0,i.useMemo)((()=>r.actionBarFactory()),[r]),d=(0,v.Z)(a[0]?.url||null),u=(0,ae.jh)();return(0,U.jsxs)("section",{className:Ua,children:[(0,U.jsx)(c.$,{children:(0,oe.Od)({showOrAudiobookName:s,type:"Podcast"})}),(0,U.jsx)(Va,{metadata:e,backgroundColor:d}),(0,U.jsx)(Qt,{uri:o,name:s,backgroundColor:d,spec:l}),(0,U.jsx)(Ha,{breakpoint:u,metadata:e,showId:t,spec:r})]})},Ja=(0,i.memo)((function(){const{showId:e=""}=(0,s.UO)(),t=`spotify:show:${e}`,{data:a,error:n,redirectUri:c}=(0,Zt.l)(t);if(c){const e=(0,r._b)(c);return(0,U.jsx)(Xt.InstrumentedRedirect,{to:e.toURLPath(!0)})}return!a||n?n instanceof Vt.E?(0,U.jsx)(d.h,{hasError:!0,errorMessage:l.ag.get("error-page.not-available-in-region.title")}):(0,U.jsx)(d.h,{hasError:!!n,errorMessage:l.ag.get("error.not_found.title.page")}):(0,et.l6)(a)?(0,U.jsx)(i.Suspense,{fallback:null,children:(0,U.jsx)(Za.C,{pageId:o.Wg.PODCAST_SHOW_AUDIOBOOK,uri:t,children:(0,U.jsx)(qt,{metadata:a},`${!!a.consumptionCapExplanation}`)})}):(0,U.jsx)(i.Suspense,{fallback:null,children:(0,U.jsx)(Za.C,{pageId:o.Wg.PODCAST,uri:t,children:(0,U.jsx)(ua,{uri:a.uri,children:(0,U.jsx)(ka,{uri:a.uri,defaultSortParam:ya(a.consumptionOrder),children:(0,U.jsx)($a,{showId:e,metadata:a})})})})})}))}}]);
//# sourceMappingURL=xpui-routes-show.js.map