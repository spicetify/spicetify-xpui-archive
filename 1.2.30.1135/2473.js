"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[2473],{85258:(e,a,s)=>{s.d(a,{T:()=>m});var o=s(50959),t=s(82187),i=s.n(t),n=s(73798),l=s(10992),r=s(44680),d=s(69260);const c="pvGZ831aNzHTQMZ8CA_u";var u=s(11527);const m=(0,o.memo)((function({onClick:e=(()=>{}),size:a,className:s,uri:t,sharingInfo:m,interactionData:h,ariaLabel:x=l.ag.get("mwp.list.item.share")}){const{onCopyLink:g}=(0,d.y)({sharingInfo:m,uri:t,interactionData:h}),p=(0,o.useCallback)((()=>{g(),e()}),[e,g]);return(0,u.jsx)(r.E,{ariaLabel:x,size:a,onClick:p,className:i()(c,s),icon:n.M,condensed:!0})}))},90830:(e,a,s)=>{s.d(a,{X:()=>me});var o=s(50959),t=s(82187),i=s.n(t),n=s(51909),l=s(28150),r=s(39753),d=s(97018),c=s(61550),u=s(55147),m=s(10992),h=s(84300);var x=s(73467),g=s(77401),p=s(18373),y=s(6879),k=s(29037),j=s(92718),b=s(30916),f=s(38010),v=s(85802),C=s(85509),P=s(44071),D=s(66562),I=s(36680),N=s(85258),T=s(33325),U=s(98090),E=s(69918),M=s(13814),w=s(51335),B=s(48545),S=s(81085),L=s(72269),Z=s(71145),A=s(11527);const z={intent:"share",type:"click",itemIdSuffix:"contextmenu/episode/share"},R=o.memo((function({episodeUri:e,showUri:a,sharingInfo:s,canDownload:t,requestId:n,onMarkAsPlayed:l,onMoreButtonClick:r,name:d,fullyPlayed:c,index:u}){const h=(0,B._)(e),{spec:x,logger:g}=(0,S.fU)(v.createDesktopEpisodeBlockEventFactory,{data:{uri:e,reason:n||"",position:u}}),p=(0,U.r)(e),y=(0,o.useMemo)((()=>(0,A.jsx)(L.T,{size:"medium",uri:e})),[e]),k=(0,o.useMemo)((()=>(0,A.jsx)(P.p,{uri:e,size:P.q.sm,className:i()({[Z.Z.visibleAction]:(0,w.y)(h)}),onClick:(a,s)=>{s===M.mc.ADD?g.logInteraction(x.downloadButtonFactory().hitDownload({itemToDownload:e})):M.mc.REMOVE&&g.logInteraction(x.downloadButtonFactory().hitRemoveDownload({itemToRemoveFromDownloads:e}))},canDownload:t})),[e,h,x,g,t]),j=(0,o.useMemo)((()=>(0,A.jsx)(N.T,{uri:e,sharingInfo:s,interactionData:z,onClick:()=>{g.logInteraction(x.copyLinkFactory().hitShare({entityToBeShared:e,shareId:s?.shareId||""}))}})),[e,s,x,g]),b=(0,o.useMemo)((()=>(0,A.jsx)(I.w,{uri:e,size:C.q.sm,className:Z.Z.visibleAction,onClick:a=>{a?g.logInteraction(x.saveToLibraryButtonFactory().hitLike({itemToBeLiked:e})):g.logInteraction(x.saveToLibraryButtonFactory().hitRemoveLike({itemNoLongerLiked:e}))}})),[e,x,g]),f=(0,o.useMemo)((()=>(0,A.jsx)(E.yj,{menu:(0,A.jsx)(T.k,{uri:e,showUri:a,isPlayed:c,onMarkAsPlayed:l}),children:(0,A.jsx)(D.z,{size:D.q.sm,label:m.ag.get("more.label.context",d),onClick:r})})),[e,c,d,l,r,a]);return(0,A.jsxs)(A.Fragment,{children:[j,k,p?y:b,f]})}));var F=s(39481),G=s(37376);const O="TT1tIewS2iI8Uz8kLuQB",_="Mn93NeoqnZzVnPIP83_9",V="bG5fSAAS6rRL8xxU5iyG",W="g5gZaZVzR0tGT4pK6iEU",H="DbMYFmOEEz9PH1h1zK9n",q="HLixBI5DbVZNC6lrUbAB",Y="q80ZFqNlDZCC7OTfUPj8",Q="y9kEPjDek0J80YRf8JJw",J="YhOAZFuFU1oI_YQSof4z",$="DKIjGP8CcZyjr2O2HNST",K="A7qeQBIk3sqr7bYadWA8",X="_IJaGA3ZdVU0NiTxbGsI",ee="ij5_Bi2LfqgWwHzQBXJS",ae="o_TP9z7A8LQvMXujJC7N",se="LbePDApGej12_NyRphHu",oe="hFCGY5gjCjN10WzV2VQ4",te="gk0rZwqBxJjSeiWV5lgV",ie="te8hrsPnSvx9SUkzV0ME",ne="V0pEigrddg3VxP_sTdAJ",le="acjrpluRnLumVxPt2QG9",re="upo8sAflD1byxWObSkgn",de="DyuLxip2Kl8P7H8fW62u",ce="vak8N953oXaq9F7jZDsD",ue="WBxE9PQe96PpkE9RuTo5",me=o.memo(o.forwardRef((function({uri:e,name:a,showName:s,showUri:t,size:v,description:C,durationMs:P,images:D,badges:I,fullyPlayed:N,releaseDate:T,resumePositionMs:U,isCurrentlyPlaying:E,isPlaying:M,onContextMenu:w,onTouchStart:B,onTouchEnd:S,handlePlaybackClick:L,handleDragStart:Z,handleClick:z,position:me,index:he,isPlayable:xe,isPaywalled:ge,isUserSubscribed:pe,episodeSharingInfo:ye,playButtonWrapper:ke=null,highlightText:je=(e=>e),onMarkAsPlayed:be,contentInformation:fe,requestId:ve,onMoreButtonClick:Ce,status:Pe,variant:De="default",mediaTypes:Ie},Ne){const Te=(0,l.s0)(),Ue=E&&M,Ee=(0,u.EC)(e).toURLPath(!0),Me=(0,u.EC)(t)?.toURLPath(!0),we=function({episodeUri:e}){const[a,s]=(0,o.useState)([]),t=(0,h.G)();return(0,o.useEffect)((()=>{let a=!0;return async function(){const o=await t.getArtists(e);a&&s(o)}(),()=>{a=!1}}),[e,t]),a}({episodeUri:e}),Be=(0,y.G3)(e,T,U,N),Se=Ie?.includes(b.$.Video)??!1,Le=(0,o.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),Te(Ee),z&&z(e)}),[Te,Ee,z]),Ze=(0,o.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),Me&&Te(Me)}),[Me,Te]),Ae=ge&&!pe,ze=(0,o.useCallback)((e=>{e.stopPropagation(),Ae||L(e)}),[L,Ae]),Re=Ae||xe,Fe=m.ag.get("tracklist.a11y.play",a,s),Ge=m.ag.get("tracklist.a11y.pause",a,s),Oe=(0,A.jsx)(x.f,{size:"small",version:"next-best-episode"===De?x.u.primary:x.u.secondary,onClick:ze,isPlaying:Ue,disabled:!Re,locked:Ae,ariaPlayLabel:Fe,ariaPauseLabel:Ge}),_e=ke?ke(Oe):Oe;return(0,A.jsxs)("div",{ref:Ne,className:i()(O,{[_]:E,[te]:v===k.Uo.MEDIUM,[ie]:v===k.Uo.LARGE,[X]:v===k.Uo.XSMALL,[ue]:"next-best-episode"===De}),"data-testid":`episode-${he}`,draggable:!!Z,onDragStart:Z,onClick:Le,onContextMenu:w,onTouchStart:B,onTouchEnd:S,children:[Pe&&(0,A.jsx)(d.x,{className:le,paddingBottom:r.hM,children:Pe}),fe&&(0,A.jsx)(F.m,{className:ce,cardHeaderText:fe.cardHeaderText,buttonText:fe.buttonText,buttonTarget:fe.buttonTarget}),"default"===De&&(0,A.jsx)("div",{className:ee,children:(0,A.jsx)(g.O,{className:ae,type:j.p.EPISODE,size:(e=>{switch(e){case k.Uo.LARGE:return p.m$.SIZE_112;case k.Uo.MEDIUM:return p.m$.SIZE_64;default:return p.m$.SIZE_48}})(v),title:a,shape:g.K.ROUNDED_CORNERS,images:D})}),(0,A.jsxs)("div",{className:ne,children:[(0,A.jsxs)("div",{className:q,children:[(0,A.jsx)(n.rU,{className:W,to:Ee,onClick:Le,children:(0,A.jsxs)(d.x,{as:"div",variant:"bodyMediumBold",className:V,"data-testid":"episodeTitle",children:[Be&&(0,A.jsx)(y.Rd,{}),je(a)]})}),we.length>0&&(0,A.jsxs)("div",{className:J,children:[(0,A.jsx)(c.U,{size:"small",className:K}),(0,A.jsx)(d.x,{as:"p",variant:"bodySmall",className:$,children:je(we.join(m.ag.getSeparator()))})]})]}),(0,A.jsxs)("div",{className:Y,children:[Se&&(0,A.jsx)(d.x,{variant:"bodySmall",semanticColor:"textSubdued",children:(0,A.jsx)(G.t,{})}),s&&Me&&(0,A.jsx)(n.rU,{className:W,to:Me,onClick:Ze,children:(0,A.jsx)(d.x,{variant:"bodySmall",semanticColor:"textSubdued",children:je(s)})})]})]}),(0,A.jsx)("div",{className:re,children:(0,A.jsx)(d.x,{as:"p",variant:"bodySmall",className:se,children:je(C??"")})}),(0,A.jsxs)("div",{className:Q,children:[(0,A.jsx)("div",{className:oe,children:I}),(0,A.jsx)(f.E,{isPlaying:Ue,fullyPlayed:N,durationMs:P,releaseDate:T,resumePositionMs:U,position:E?me:void 0})]}),(0,A.jsx)("div",{onClick:e=>{e.stopPropagation()},className:H,children:(0,A.jsx)(R,{episodeUri:e,showUri:t??"",sharingInfo:ye,canDownload:!ge||ge&&pe,requestId:ve,index:he,name:a,fullyPlayed:N,onMarkAsPlayed:be,onMoreButtonClick:Ce})}),(0,A.jsx)("div",{className:de,children:_e})]})})))},39481:(e,a,s)=>{s.d(a,{m:()=>y});var o=s(50959),t=s(82187),i=s.n(t),n=s(13999),l=s(97018),r=s(95264),d=s(12737),c=s(55147),u=s(73196),m=s(59544);const h="rFwxt8s8DYY8p1O7tYZW",x="sA2HogGQNi8R_zpCWei5",g="H92pPTuqDR5DcoTtjcb3";var p=s(11527);const y=({cardHeaderText:e,buttonText:a,buttonTarget:s,className:t})=>{const y=(0,d.W6)(u.XdP),k=(0,o.useCallback)((e=>{e.stopPropagation()}),[]),j=(0,c.EC)(s).toURLPath(!0);return y?(0,p.jsxs)("div",{className:i()(h,t),onClick:k,children:[(0,p.jsxs)("div",{className:x,children:[(0,p.jsx)(n.W,{className:g,size:"small",semanticColor:"textBase"}),(0,p.jsx)(l.x,{as:"span",variant:"bodyMediumBold",semanticColor:"textBase",children:e})]}),(0,p.jsx)(r.D,{size:"small",colorSet:"invertedLight",component:m.Z,href:j,children:a})]}):null}},76210:(e,a,s)=>{s.d(a,{k:()=>_});var o=s(50959),t=s(82187),i=s.n(t),n=s(28150),l=s(97018),r=s(39753),d=s(89963),c=s(94509),u=s(73474),m=s(3021),h=s(55147),x=s(10992),g=s(73467),p=s(77401),y=s(18373),k=s(6879),j=s(29037),b=s(92718),f=s(30916),v=s(38010),C=s(39481),P=s(85802),D=s(44071),I=s(66562),N=s(36680),T=s(85258),U=s(33325),E=s(98090),M=s(69918),w=s(13814),B=s(51335),S=s(48545),L=s(81085),Z=s(72269),A=s(71145),z=s(11527);const R={intent:"share",type:"click",itemIdSuffix:"contextmenu/episode/share"},F=o.memo((function({episodeUri:e,showUri:a,sharingInfo:s,size:t,canDownload:n,requestId:l,onMarkAsPlayed:r,onMoreButtonClick:d,name:c,fullyPlayed:u,index:m}){const h=(0,S._)(e),{spec:g,logger:p}=(0,L.fU)(P.createDesktopEpisodeBlockEventFactory,{data:{uri:e,reason:l||"",position:m}}),y=t===j.Uo.LARGE?"medium":"small",k=(0,o.useMemo)((()=>(0,z.jsx)(D.p,{uri:e,size:y,className:i()({[A.Z.visibleAction]:(0,B.y)(h)}),onClick:(a,s)=>{s===w.mc.ADD?p.logInteraction(g.downloadButtonFactory().hitDownload({itemToDownload:e})):w.mc.REMOVE&&p.logInteraction(g.downloadButtonFactory().hitRemoveDownload({itemToRemoveFromDownloads:e}))},canDownload:n})),[e,h,g,p,y,n]),b=(0,o.useMemo)((()=>(0,z.jsx)(T.T,{uri:e,sharingInfo:s,interactionData:R,size:y,onClick:()=>{p.logInteraction(g.copyLinkFactory().hitShare({entityToBeShared:e,shareId:s?.shareId||""}))}})),[e,s,g,p,y]),f=(0,o.useMemo)((()=>(0,z.jsx)(N.w,{uri:e,size:y,className:A.Z.visibleAction,onClick:a=>{a?p.logInteraction(g.saveToLibraryButtonFactory().hitLike({itemToBeLiked:e})):p.logInteraction(g.saveToLibraryButtonFactory().hitRemoveLike({itemNoLongerLiked:e}))}})),[e,g,p,y]),v=(0,E.r)(e),C=(0,o.useMemo)((()=>(0,z.jsx)(Z.T,{size:y,uri:e,className:A.Z.visibleAction})),[e,y]),F=(0,o.useMemo)((()=>(0,z.jsx)(M.yj,{menu:(0,z.jsx)(U.k,{uri:e,showUri:a,isPlayed:u,onMarkAsPlayed:r}),children:(0,z.jsx)(I.z,{size:y,label:x.ag.get("more.label.context",c),onClick:d})})),[e,u,c,r,d,a,y]);return(0,z.jsxs)(z.Fragment,{children:[v?C:f,k,b,F]})}));var G=s(44288),O=s(37376);const _=o.memo(o.forwardRef((function({uri:e,name:a,showName:s,showUri:t,size:P,description:D,durationMs:I,images:N,badges:T,fullyPlayed:U,releaseDate:E,resumePositionMs:M,isCurrentlyPlaying:w,isPlaying:B,onContextMenu:S,onTouchStart:L,onTouchEnd:Z,handlePlaybackClick:R,handleDragStart:_,handleClick:V,position:W,index:H,isPlayable:q,isPaywalled:Y,isUserSubscribed:Q,episodeSharingInfo:J,playButtonWrapper:$=null,highlightText:K=(e=>e),onMarkAsPlayed:X,contentInformation:ee,requestId:ae,mediaTypes:se,onMoreButtonClick:oe,status:te,variant:ie="default"},ne){const le=(0,n.s0)(),re=w&&B,de=P===j.Uo.LARGE,ce=(0,h.EC)(e).toURLPath(!0),ue=(0,h.EC)(t)?.toURLPath(!0),me=(0,k.G3)(e,E,M,U),he=Y&&!Q,xe=se?.includes(f.$.Video)??!1,ge=T?.props.children.filter((e=>!1!==e))||[],pe=he||q,ye=x.ag.get("tracklist.a11y.play",a,s),ke=x.ag.get("tracklist.a11y.pause",a,s),je=(0,o.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),le(ce),V&&V(e)}),[le,ce,V]),be=(0,o.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),ue&&le(ue)}),[ue,le]),fe=(0,o.useCallback)((e=>{e.stopPropagation(),he||R(e)}),[R,he]),ve=(0,z.jsx)(g.f,{size:"small",version:"next-best-episode"===ie?g.u.primary:g.u.secondary,onClick:fe,isPlaying:re,disabled:!pe,locked:he,ariaPlayLabel:ye,ariaPauseLabel:ke}),Ce=$?$(ve):ve,Pe=(0,z.jsx)(z.Fragment,{children:te&&(0,z.jsx)(l.x,{semanticColor:"textSubdued",paddingBottom:r.hM,children:te})}),De=(0,z.jsxs)(d.g,{className:A.Z.title,href:ce,onClick:je,lineClamp:2,children:[me&&(0,z.jsx)(k.Rd,{}),K(a)]}),Ie=(0,z.jsxs)(c.l,{lineClamp:2,paddingBottom:de?r.dl:void 0,children:[xe&&(0,z.jsx)(O.t,{}),s&&ue&&(0,z.jsx)(G.Link,{className:A.Z.showLink,to:ue,onClick:be,children:(0,z.jsx)(l.x,{semanticColor:"textSubdued",children:K(s)})})]}),Ne=(0,z.jsxs)("div",{className:A.Z.showDetailsWithProgress,children:[(0,z.jsx)(u.o,{lineClamp:2,paddingBottom:de?r.hM:void 0,children:K(D??"")}),(0,z.jsxs)("div",{className:A.Z.metadata,children:[ge.length>0&&(0,z.jsx)("div",{className:A.Z.badges,children:T}),(0,z.jsx)(v.E,{isPlaying:re,fullyPlayed:U,durationMs:I,releaseDate:E,resumePositionMs:M,position:w?W:void 0})]})]}),Te=(0,z.jsxs)("div",{className:A.Z.footer,children:[(0,z.jsx)("div",{onClick:e=>{e.stopPropagation()},className:A.Z.actions,children:(0,z.jsx)(F,{episodeUri:e,showUri:t??"",sharingInfo:J,size:P,canDownload:!Y||Y&&Q,requestId:ae,index:H,name:a,fullyPlayed:U,onMarkAsPlayed:X,onMoreButtonClick:oe})}),(0,z.jsx)("div",{children:Ce})]}),Ue="default"===ie&&(0,z.jsx)("div",{className:A.Z.imageContainer,children:(0,z.jsx)(p.O,{className:i()(A.Z.showImage,{[A.Z.largeImage]:de}),type:b.p.EPISODE,size:(e=>{switch(e){case j.Uo.LARGE:return y.m$.SIZE_112;case j.Uo.MEDIUM:return y.m$.SIZE_64;default:return y.m$.SIZE_48}})(P),title:a,shape:p.K.ROUNDED_CORNERS,images:N})});return(0,z.jsxs)("div",{className:i()(A.Z.episodeBlock,{[A.Z.isActive]:w,[A.Z.nextBestEpisode]:"next-best-episode"===ie}),"data-testid":`episode-${H}`,draggable:!!_,onDragStart:_,onClick:je,onContextMenu:S,onTouchStart:L,onTouchEnd:Z,children:[ee&&(0,z.jsx)(C.m,{className:A.Z.contentInformationBanner,cardHeaderText:ee.cardHeaderText,buttonText:ee.buttonText,buttonTarget:ee.buttonTarget}),(0,z.jsx)(m.w,{size:"xxl",ref:ne,media:Ue,title:De,id:`episode-${H}`,subtitle:s&&ue?Ie:Ne,pretitle:Pe,body:s&&ue?Ne:void 0,variant:"naked",footer:Te,hoverBackgroundColor:"backgroundHighlight",layout:de?"wide":"regular",horizontalGap:de?r.g4:r.nu,verticalGap:r.dl,paddingBlockStart:r.o7,paddingBlockEnd:r.o7})]})})))},30916:(e,a,s)=>{s.d(a,{$:()=>o});let o=function(e){return e.Audio="AUDIO",e.Unknown="UNKNOWN",e.Video="VIDEO",e}({})},71145:(e,a,s)=>{s.d(a,{Z:()=>o});const o={episodeBlock:"T9iBYqbERZHdwDl0U2tC",isActive:"DS4BYgmEO7Wy5RutUt60",title:"N2Fkohxhgu1_QAWUDc4O",selected:"DaxWgzoBoBnOEj43bZAA",actions:"hGbRiYkIjjy4sJvor0A2",visibleAction:"OgaF7O4ER8AvZfFd6JdJ",metadata:"bdGDIiYj50H66Hx5uevz",imageContainer:"kiT5NMttSzIDbtqBKc1J",showImage:"TG1hsDPHeO5QUf4EQasO",largeImage:"_NdByrVnM0OS7aK_GfRn",showLink:"CHUTnjCBTLRfQb048zjZ",badges:"UpgTvLnGW6GFjAUfaPXH",footer:"kxVuYXZ4sVWn6XuJgFhX",showDetailsWithProgress:"UvdRnanMNuY384mjTf2l",contentInformationBanner:"fmu47VumZ84IoKgMK1yU",nextBestEpisode:"dUScIGoP9fWn5IVsztB7"}}}]);
//# sourceMappingURL=2473.js.map