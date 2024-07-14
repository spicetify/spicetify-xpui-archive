"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[9528],{63734:(e,t,s)=>{s.d(t,{A:()=>n});var i=s(56260),a=s(73534);function n(){return{version:(0,i.NC)(a._sf)?2:1}}},27079:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Lt});s(1137);var i=s(79474),a=s(48581),n=s(61343),r=s(63940),o=s(68087),l=s(48762),c=s(37298),d=s(96590),u=s(46428),p=s(12441),m=s(11520),h=s(56260),y=s(73534),x=s(63734),g=s(89663),b=s(13274);const j=(0,i.lazy)((()=>s.e(8437).then(s.bind(s,80818)))),C=(0,i.lazy)((()=>s.e(1682).then(s.bind(s,51682))));function k(e){const t=(0,g.L)(),s=(0,h.NC)(y.kIZ,{loadingValue:!1}),a=(0,x.A)();return t?s?e.uri?(0,b.jsx)(i.Suspense,{fallback:!0,children:(0,b.jsx)(C,{uri:e.uri})}):null:(0,b.jsx)(i.Suspense,{fallback:!0,children:(0,b.jsx)(j,{reason:"Episode page",...a,...e})}):null}const P="dpN5ViPOceUWNB5EQPHN",T="fBEA27lLw_sc60Zjd_qw",I="vBcxPq3E2okwgXOkVPEM",f="CxoSYuAjlcCDSOWnnbJe",S="HCCBXwdFvq6omWW2hR0N",v="bJOPO5Zo7dpjSVDwEpSw",E="TXdDDpokVTyJzDEDWHHf",R="tvj001zNcrC5VUZmTt9c",N="PC5kR03GYecc7syeoC0q",w="YldGldlfaI9myEGXQf9g",L="qJHVIpJn1vLPWsAKfTEZ",U="wSIzjkVlr0Zdy7di2vRm",A="hYS_K1NATGyWt6tCSRqQ",D="hVVaM4pF9arpQ8Nvn2a1",M="zf0Eac1LugsHUacz74Zf",B="TnNaqxbaI0hzhBQZ7wE0",F="zSw1lG1TNe_xm6KTqtCv",_="MlEQDkXnjdKKJueJ9kkB",O="jg0xlyD1yjh0DPNG6eOg",z="QiHXpFb4dLZNOFe5gpp3";var H=s(43029),$=s(78624),V=s(39974),Z=s(12793),q=s(61131);const K=({cardHeaderText:e,cardBodyText:t,buttonText:s,buttonTarget:i})=>(0,h.NC)(y._Nj)?(0,b.jsxs)("div",{className:w,children:[(0,b.jsxs)("div",{className:L,children:[(0,b.jsx)(H.E,{variant:"bodyMediumBold",semanticColor:"textBase",children:e}),(0,b.jsx)(H.E,{semanticColor:"textBase",children:t})]}),(0,b.jsx)(Z.$,{size:"small",colorSet:"invertedLight",href:(0,l.o_)(i).toURLPath(!0),component:q.v,children:s})]}):null,Q=({areHTMLDescriptionsEnabled:e,contentInformation:t,description:s,hasDescription:a,htmlDescription:n,onExpanded:r,onTimeStampClick:o,playability:l,showHeader:d=!0,spec:u})=>{const p=(0,V.s)(),m=(a||t)&&d,x=(0,i.useCallback)((e=>{const t=u.readMoreButtonFactory();p.logInteraction(e?t.hitUiReveal():t.hitUiHide()),r?.()}),[u,p,r]),g=(0,h.NC)(y.ZK8,{loadingValue:!1});return(0,b.jsxs)(b.Fragment,{children:[m&&(0,b.jsx)(H.E,{as:"h2",variant:"titleSmall",semanticColor:"textBase",className:S,children:c.R.get("episode.description-title")}),t&&(0,b.jsx)(K,{cardHeaderText:t.cardHeaderText,cardBodyText:t.cardBodyText,buttonText:t.buttonText,buttonTarget:t.buttonTarget}),a&&(0,b.jsx)($.N,{className:I,onTimeStampClick:o,maxLines:4,onExpanded:x,content:(s||"").trim(),htmlContent:e&&n?n:void 0,enableTimestamps:l.playable,enableAutomaticLinkification:g&&e&&!!n})]})};var W=s(97500),J=s.n(W),X=s(26972),Y=s(73731),G=s(69899),ee=s(85165),te=s(80982),se=s(5549),ie=function(e){return e.DESCRIPTION="description",e.TRANSCRIPT="transcript",e}(ie||{});const ae=i.memo((function({transcriptSections:e,descriptionContent:t,transcriptContent:s,spec:a}){const n=(0,V.s)(),[r,o]=(0,i.useState)(ie.DESCRIPTION),l=(0,se.v7)(),{ref:d,inView:u}=(0,X.Wx)({threshold:[1],root:l.current,rootMargin:`-${te.uC+1}px 100000px 0px 100000px`}),p=(0,i.useRef)(null),m=(0,i.useCallback)((e=>{p.current=e,d(e)}),[d]);return(0,i.useEffect)((()=>{const e=p.current?.parentElement?.offsetTop,t=l?.current;if(!e||!t)return;const s=e-te.uC;t.scrollTop>s&&t.scrollTo({top:s})}),[l,r]),(0,b.jsx)(Y.j,{list:(0,b.jsxs)(G.L,{className:J()(_,{[O]:!u}),ref:m,children:[(0,b.jsx)(ee.Y,{label:c.R.get("web-player.episode.description"),sentenceCase:!0,active:r===ie.DESCRIPTION,onClick:()=>{const e=a.tabsFactory().descriptionTabButtonFactory().hitUiReveal();n.logInteraction(e),o(ie.DESCRIPTION)},className:J()(z,{[U]:r===ie.DESCRIPTION})}),(0,b.jsx)(ee.Y,{label:c.R.get("web-player.episode.transcript"),sentenceCase:!0,disabled:null===e,active:r===ie.TRANSCRIPT,onClick:()=>{const e=a.tabsFactory().transcriptTabButtonFactory().hitUiReveal();n.logInteraction(e),o(ie.TRANSCRIPT)},className:J()(z,{[U]:r===ie.TRANSCRIPT})})]}),children:null===e||r===ie.DESCRIPTION?t:s})}));var ne=s(59681),re=s(97170),oe=s(13031),le=s(15486),ce=s(7491);const de=(0,i.memo)((function({transcriptSections:e,onTimeStampClick:t,episodeUri:s}){const{spec:i,logger:a}=(0,le.r)(ne.c,{data:{uri:s}}),{isPlaying:n}=(0,oe.P)({uri:s},{featureIdentifier:"episode"}),r=i.timestampLinkFactory();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:D,children:(0,b.jsx)(H.E,{variant:"bodySmall",semanticColor:"textBase",children:c.R.get("web-player.episode.transcript.disclaimer")})}),e.map(((e,i)=>{const o=`transcript-section-${i}`;return(0,b.jsxs)("div",{className:A,children:[(0,b.jsx)("button",{className:M,onClick:()=>{t(e.startMs,o),a.logInteraction(n?r.hitSeekToTime({msToSeekTo:e.startMs}):r.hitPlay({itemToBePlayed:s}))},children:(0,b.jsx)(re.k,{id:o,targetURI:(0,l.o_)(s),fadeOut:!0,children:(0,b.jsx)(H.E,{variant:"marginalBold",semanticColor:"textSubdued",className:B,children:(0,ce.f)(e.startMs)})})}),e.content.map(((e,t)=>(0,b.jsx)(H.E,{variant:"bodySmall",semanticColor:"textBase",className:F,dir:"auto",children:e},`transcript-text-${t}`)))]},o)}))]})}));s(62355),s(45689);var ue=s(51773),pe=s(10815),me=s(93121),he=s(88879),ye=s(58588),xe=s(12764),ge=s(75450),be=s(86342),je=s(85989),Ce=s(56134),ke=s(39431),Pe=s(62907);const Te="OYehkMWcGJRKPkByp46K",Ie="uc1bXkrZqrCz0CMK4lBb",fe="qZeibBbA3SVClzEueYND",Se=({episodeUri:e,index:t,duration:s,start:a,stop:n,name:r,uri:o,artists:l,album:d,playable:u})=>{const{isActive:p,isPlaying:m,onClick:h}=(0,Ce.L)({episodeUri:e,start:a,stop:n}),y=(0,i.useCallback)(((e,t)=>{h(t)}),[h]),{spec:x}=(0,le.r)(ye.i,{data:{position:t,reason:"",uri:o}});return(0,b.jsx)(ke.pZ,{value:"row",index:t,children:(0,b.jsx)(xe.tz,{trigger:"right-click",action:"open",menu:(0,b.jsx)(ge.P,{uri:o}),children:(0,b.jsxs)(je.w,{uri:o,index:t,ariaRowIndex:t+1,dragMetadata:{name:r,createdBy:l?.[0].name??""},onTriggerPlay:y,isActive:p,isPlayable:u,spec:x,children:[(0,b.jsxs)(be.U6,{ariaColIndex:0,children:[(0,b.jsx)(be.$H,{uri:o,playAriaLabel:c.R.get("tracklist.a11y.play",r,l?.[0].name),onClick:y,isPlaying:m,isActive:p,spec:x,children:(0,b.jsx)(be.aJ,{children:(0,b.jsx)("img",{className:Ie,src:d.image,alt:d.name})})}),(0,b.jsxs)(be.l1,{children:[(0,b.jsx)(be.pJ,{titleText:r,children:r}),(0,b.jsx)(be.pj,{children:(0,b.jsx)(be.lw,{artists:l,spec:x})})]})]}),(0,b.jsx)(be.oi,{ariaColIndex:1,children:(0,b.jsx)(be.gy,{uri:d.uri,name:d.name,spec:x,children:d.name})}),(0,b.jsxs)(be.lH,{ariaColIndex:2,children:[(0,b.jsx)(Pe.d,{uri:o,spec:x}),(0,b.jsx)(be.Po,{duration:s}),(0,b.jsx)(be.Y8,{spec:x,menu:(0,b.jsx)(ge.P,{uri:o,artists:l}),label:c.R.get("more.label.track",r,l?.[0].name)})]})]})})})};function ve(e,t,s){return e.reduce(((e,i,a)=>((a>0||t>0)&&e.push({type:"SPACER",id:`spacer-${e.length}`}),"MUSIC"===i.type?e.push(function(e,t,s){return{type:"MUSIC",index:t,uri:s.uri,episodeUri:e,start:s.start,stop:s.stop,duration:s.duration,name:s.track.name,artists:s.track.artists,album:s.track.album,playable:s.track.playable}}(s,a,i)):"TALK"===i.type&&e.push(function(e,t,s){return{type:"TALK",index:t,uri:e,title:s.title,subtitle:s.subtitle,start:s.start,stop:s.stop,duration:s.duration,showUri:s.show.uri,showName:s.show.name}}(s,a,i)),e)),[])}const Ee=({uri:e,segmentCount:t})=>{const s=(0,me.o)(),a=(0,i.useCallback)((async(i,a)=>{const n=Math.ceil(i/2);try{return{items:ve(await s.getSegments(e,n,a),n,e),totalLength:2*t-1}}catch(e){return{items:[],totalLength:0}}}),[t,s,e]),n=(0,i.useCallback)((t=>{switch(t.type){case"SPACER":return(0,b.jsx)("div",{className:fe},t.id);case"MUSIC":return(0,b.jsx)(Se,{...t},`${e}-${t.index}`);case"TALK":return(0,b.jsx)(pe.D,{...t},`${e}-${t.index}`);default:return(0,he.d)(t)}}),[e]),r=(0,i.useCallback)((e=>({uri:"MUSIC"===e.type?e.uri:""})),[]),o=c.R.get("music_and_talk.in_this_episode");return(0,b.jsxs)("div",{children:[(0,b.jsx)(H.E,{as:"h2",variant:"titleSmall",semanticColor:"textBase",className:Te,children:o}),(0,b.jsx)(ue.S4,{ariaLabel:o,hasHeaderRow:!0,rowPlaceholder:ue.qq,columns:[ue.$C.TITLE_AND_ARTIST,ue.$C.ALBUM_OR_SHOW,ue.$C.DURATION],renderRow:n,fetchTracks:a,resolveItem:r,limit:50,nrTracks:2*t-1,testID:"music-and-talk-tracklist"})]})};var Re=s(42939),Ne=s(49882);const we=({areHTMLDescriptionsEnabled:e,contentInformation:t,description:s,hasDescription:a,hasMusicAndTalkSegements:n,htmlDescription:r,onExpanded:o,onDescriptionTimestampClick:l,onTranscriptTimestampClick:d,playability:u,segmentCount:p,showUrl:h,transcript:y,uri:x,spec:g})=>{const j=(0,V.s)(),C=(0,i.useMemo)((()=>g.descriptionSectionFactory()),[g]),P=(0,i.useMemo)((()=>C.trackListFactory()),[C]),[T,I]=(0,i.useState)(null),f=(0,i.useCallback)((async e=>{const t=await(0,Re.Q)(e);I(t)}),[]);(0,i.useEffect)((()=>{y&&y.length>0&&f(y[0].cdnUrl)}),[f,y]);const S=i=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Q,{hasDescription:a,contentInformation:t,onTimeStampClick:l,onExpanded:o,description:s,areHTMLDescriptionsEnabled:e,htmlDescription:r,playability:u,showHeader:i,spec:C}),n&&(0,b.jsx)(Ne.r,{spec:P,children:(0,b.jsx)(Ee,{segmentCount:p,uri:x})}),h&&(0,b.jsx)(m.n,{size:"small",className:v,href:h,component:q.v,onClick:()=>{j.logInteraction(C.allEpisodesLinkFactory().hitUiNavigate({destination:h}))},children:c.R.get("episode.see_all_episodes")}),(0,b.jsx)(k,{uri:x})]}),E=y&&y?.length>0&&u.playable;return(0,b.jsx)(b.Fragment,{children:E?(0,b.jsx)(ae,{transcriptSections:T,descriptionContent:S(!1),transcriptContent:(0,b.jsx)(de,{transcriptSections:T||[],onTimeStampClick:d,episodeUri:x}),spec:g}):S(!0)})};var Le=s(67946),Ue=s(72226),Ae=s(3106),De=s(56707);const Me="activation-trigger-mme",Be=({episodeUri:e,showUri:t,isLocked:s,isPlaying:i,isPlayDisabled:a,playButtonPlayLabel:n,playButtonPauseLabel:r,onClick:o,size:c="large"})=>{const d=(0,De.c)();if((0,Ae.V)())return(0,b.jsx)(Ue.R,{size:c,onClick:o,isPlaying:i,disabled:a,locked:s,ariaPlayLabel:n,ariaPauseLabel:r});const u=(0,b.jsx)(Le.f,{showUri:t,enabled:s,renderInline:!1,children:(0,b.jsx)(Ue.R,{size:c,onClick:o,isPlaying:i,disabled:a,locked:s,ariaPlayLabel:n,ariaPauseLabel:r})});return d?(0,b.jsx)(re.k,{id:Me,targetURI:(0,l.o_)(e),fadeOut:!0,children:u}):u};var Fe=s(65948),_e=s(71897),Oe=s(53846),ze=s(82719),He=s(67404),$e=s(95616),Ve=s(64265),Ze=s(97894),qe=s(80427),Ke=s(34092),Qe=s(23e3),We=s(85980),Je=s(40041),Xe=s(5837),Ye=s(33032),Ge=s(32853),et=s(98805),tt=s(70856),st=s(97776),it=s(49245),at=s(35126),nt=s(15094),rt=s(68692),ot=s(36476),lt=s(20533),ct=s(63441),dt=s(43608),ut=s(54609);const pt=({episode:e,onPlayEpisode:t,isPlaying:s,isActive:a,isFullyPlayed:n,setIsFullyPlayed:r,backgroundColor:o,isLocked:l,spec:d})=>{const{uri:u,playedState:p,contentRating:m,playability:h}=e,y=(0,V.s)(),x=(0,We.wA)(),[g]=(0,nt.S)(1e4,(e=>e?.item?.uri===u)),j=(0,$e.o)((e=>e?.duration)),{badges:C}=(0,ot.b)({contentRating:m?.label}),k=(0,i.useCallback)((e=>{!h.playable&&C.nineteen&&(e.stopPropagation(),x((0,Je.Tf)(u||"")))}),[u,h.playable,C.nineteen,x]),P=(0,i.useCallback)((()=>{const e=d.contextMenuButtonFactory().hitUiReveal();y.logInteraction(e)}),[y,d]),T=(0,i.useCallback)(((e,t)=>{(0,it.Qv)(t,d.downloadButtonFactory(),y,u)}),[y,d,u]),I=(0,i.useCallback)((e=>{const t=d.saveButtonFactory();y.logInteraction(e?t.hitLike({itemToBeLiked:u}):t.hitRemoveLike({itemNoLongerLiked:u}))}),[y,d,u]),f=!l&&!e.playability.playable,S=c.R.get("tracklist.a11y.play",e.name,e.podcast?.name),v=c.R.get("tracklist.a11y.pause",e.name,e.podcast?.name),R=e.podcast?.uri,N=(0,dt.j)(),w=(0,st.v)(e.uri),L=!l;return(0,b.jsxs)(lt.E,{backgroundColor:o,children:[(0,b.jsxs)(ct.S,{children:[C.nineteen&&(0,b.jsx)(at.q,{className:E,size:16}),(0,b.jsx)(rt.j,{fullyPlayed:n,durationMs:a&&j?j:e.duration.milliseconds,releaseDate:Ut(e.releaseDate?.isoString),resumePositionMs:p.playPositionMilliseconds,isPlaying:s,position:a&&g||void 0})]}),(0,b.jsxs)(ct.S,{children:[(0,b.jsx)("div",{onClick:k,children:(0,b.jsx)(Be,{episodeUri:e.uri,showUri:R,isLocked:l,onClick:()=>{t(p.playPositionMilliseconds)},isPlaying:s,isPlayDisabled:f,playButtonPlayLabel:S,playButtonPauseLabel:v,size:N})}),(0,b.jsx)(Xe.e,{uri:e.uri,onClick:T,size:N,canDownload:L}),w?(0,b.jsx)(ut.g,{uri:e.uri,size:N}):(0,b.jsx)(Ge.b,{uri:e.uri,size:N,onClick:I}),(0,b.jsx)(et.b,{onShow:P,menu:(0,b.jsx)(tt.b,{uri:e.uri,sharingInfo:e.sharingInfo,showUri:R,contextUri:e.uri,isPlayed:n,onMarkAsPlayed:r}),children:(0,b.jsx)(Ye.e,{label:c.R.get("more.label.context",e.name),size:N})})]})]})};s(84856);var mt=s(41627),ht=s(34015),yt=s(34719),xt=s(94315),gt=s(86597),bt=s(66031),jt=s(47670),Ct=s(35195),kt=s(37066),Pt=s(70163),Tt=s(97799),It=s(4658),ft=s(96721);const St=({coverArt:e,name:t})=>{const s=(0,Tt.y)(),i=s===Pt.E.SMALL||s===Pt.E.XSMALL;return(0,b.jsx)(It.b,{images:e,type:Qe.c.EPISODE,shape:It.u.ROUNDED_CORNERS,title:t,size:i?ft.Qe.SIZE_20:ft.Qe.SIZE_24,className:R})};const vt=({episode:e,isFullyPlayed:t,setIsFullyPlayed:s,backgroundColor:a,spec:n})=>{const{uri:r,name:o,sharingInfo:d,playedState:u,episodeType:p,releaseDate:m,coverArt:h}=e,y=(0,V.s)(),x=function(e,t,s,i,a){const n=t===Ke.I_.Episode;return(0,kt.hD)(e,i,s,a)?(0,b.jsx)(kt.Ih,{isMusicAndTalk:n}):n?c.R.get("type.showEpisode"):c.R.get("type.podcastEpisode")}(r,p||Ke.I_.Unknown,u.playPositionMilliseconds,Ut(m?.isoString),u.state===Ke._w.Completed),g=e.podcast?.uri,j=function(e){const t=(0,l.o_)(e);return`/show/${(0,l.cE)(t?.id||"")}`}(g),C=(0,i.useCallback)((()=>{y.logInteraction(n.podcastLinkFactory().hitUiNavigate({destination:j}))}),[y,j,n]),k=e.podcast?.coverArt,P=!!(k&&k.length===h.length&&h.every(((e,t)=>e.url===k[t].url))),I=(0,Tt.y)();return(0,b.jsxs)(ht.z4,{backgroundColor:a,children:[(0,b.jsx)(xt.h,{children:(0,b.jsx)(gt.X,{text:o,dragUri:r,dragLabel:o})}),!P&&(0,b.jsx)(yt.X,{children:(0,b.jsx)(mt.h,{menu:(0,b.jsx)(tt.b,{uri:r,sharingInfo:d,showUri:g,contextUri:r,isPlayed:t,onMarkAsPlayed:s}),children:(0,b.jsx)(ht.bI,{loading:"eager",name:o,images:h,placeholderType:"episode",shape:ht.bg.SQUARE})})}),(0,b.jsxs)(ht.Y$,{children:[(0,b.jsx)(bt.B,{children:x}),(0,b.jsx)(mt.h,{menu:(0,b.jsx)(tt.b,{uri:r,sharingInfo:d,showUri:g,contextUri:r,isPlayed:t,onMarkAsPlayed:s}),children:(0,b.jsx)(ht.mm,{dragUri:r,dragLabel:o,scaleAtMinWidth:ht.tw,className:T,children:(0,b.jsx)("span",{"data-testid":"episodeTitle",children:o})})}),(0,b.jsx)(mt.h,{menu:(0,b.jsx)(tt.b,{uri:r,sharingInfo:d,showUri:g,contextUri:r,isPlayed:t,onMarkAsPlayed:s}),children:(0,b.jsxs)(Ct.default,{to:j,onClick:C,className:N,children:[P&&(0,b.jsx)(St,{name:o,coverArt:h}),(0,b.jsx)(jt.g,{className:I===Pt.E.SMALL&&P?"":f,children:(0,b.jsx)("span",{"data-testid":"showTitle",children:e.podcast?.name})})]})})]})]})};var Et=s(2346),Rt=s(90383),Nt=s(70491);const wt=({episode:e})=>{const{uri:t,episodeType:s,description:n,htmlDescription:o,podcastSubscription:c,segmentsCount:p,podcast:m,contentInformation:h,playedState:y,coverArt:x}=e,{spec:g,logger:j}=(0,le.r)(r.g,{data:{uri:t}}),C=(0,Et.n)(),k=(0,i.useMemo)((()=>g.headerFactory()),[g]),T=(0,i.useMemo)((()=>g.actionBarFactory()),[g]),[I,f]=(0,i.useState)(y.state===Ke._w.Completed),S=(0,ze.K)(),v=(0,Fe.W)(),E=void 0!==p&&p>0,R=(0,Ae.V)(),{triggerPlay:N,togglePlay:w,isActive:L}=(0,oe.P)({uri:t,...C?{}:{pages:[{items:[{type:Qe.c.EPISODE,uri:t,uid:null,provider:null}]}]}},{featureIdentifier:"episode"}),{isActive:U,isPlaying:A}=(0,He.te)(t),D=x[0].url,M=(0,Oe.Hk)(D||null),B=(0,$e.o)((e=>e?.isPaused??void 0)),F=(0,De.c)(),_=c.isPaywalled&&!c.isUserSubscribed,O=U||L,z=e?{name:e.name,uri:e.uri,mediaTypes:e.mediaTypes,audio:{items:e.audio.items.map((e=>({url:e.url})))}}:null,H=m?{name:m.name,uri:m.uri,trailer:m.trailer,showTypes:m.showTypes}:null,$=(0,_e.C)(z,H),V=(0,i.useCallback)(((e,i,a,n)=>{const r=()=>{B?(n?.("resume"),S.resume()):(n?.("pause"),S.pause())};if(_)return;let o="play";if(!A||0!==e&&i||(o="pause"),v({intent:o,targetUri:t,type:"click",itemIdSuffix:e>0?"podcast-description-timestamp":"button"}),s===Ke.I_.Episode&&F)u.h.set((()=>({triggerId:a||Me,triggerAction:null})));else if(L&&!i)R?r():w({loggingParams:n?.()});else if(U&&!i)r();else{const t=n?.("play");R?$({seekTo:e,loggingParams:t}):N({seekTo:e,loggingParams:t})}}),[_,A,v,t,s,F,U,L,R,B,S,w,$,N]),Z=(0,i.useCallback)((e=>{V(e,!1,void 0,(e=>{const s=g.actionBarFactory().playButtonFactory();let i;return i="pause"===e||A?s.hitPause({itemToBePaused:t}):"resume"===e||O?s.hitResume({itemToBeResumed:t}):s.hitPlay({itemToBePlayed:t}),j.logInteraction(i)}))}),[V,O,A,j,g,t]),q=(0,i.useCallback)((e=>{V(e,!0,void 0,(()=>j.logInteraction(g.descriptionSectionFactory().timestampLinkFactory().hitPlay({itemToBePlayed:t}))))}),[V,j,g,t]),K=(0,i.useCallback)(((e,t)=>{V(e,!0,t)}),[V]),Q=(0,i.useCallback)((()=>{v({intent:"expand-description",type:"click"})}),[v]),[W,J]=(0,a.ok)();(0,i.useEffect)((()=>{if(e&&!O&&W.has("t")){const t=W.get("t")||"0",s=1e3*parseInt(t,10);s<=e.duration.milliseconds&&(W.delete("t"),J(W,{replace:!0}),V(s,!0))}}),[e,V,O,W,J]);const X=!!n||!!o,Y=e.podcast?.uri,G=(0,l.o_)(Y)?.toURLPath(!0);return(0,b.jsxs)("section",{"data-testid":"episode",className:P,children:[(0,b.jsx)(d.Q,{children:(0,qe.L$)({episodeOrChapterName:e.name,showOrAudiobookName:e.podcast?.name??"",type:"Podcast"})}),(0,b.jsx)(vt,{episode:e,isFullyPlayed:I,setIsFullyPlayed:f,backgroundColor:M,spec:k}),(0,b.jsx)(pt,{episode:e,onPlayEpisode:Z,isPlaying:A,isActive:O,isFullyPlayed:I,setIsFullyPlayed:f,backgroundColor:M,isLocked:_,spec:T}),(0,b.jsx)("div",{className:"contentSpacing",children:(0,b.jsx)(we,{transcript:e.transcript,hasDescription:X,contentInformation:h,onDescriptionTimestampClick:q,onTranscriptTimestampClick:K,onExpanded:Q,description:e.description,areHTMLDescriptionsEnabled:!0,htmlDescription:e.htmlDescription,playability:e.playability,hasMusicAndTalkSegements:E,segmentCount:p,uri:e.uri,showUrl:G,spec:g})})]})},Lt=i.memo((function(){const{episodeId:e=""}=(0,n.g)(),t=(0,l.iM)(e).toURI(),s=(0,Ve.d)(t);return s?.isError||!s?.episodeOrChapter?(0,b.jsx)(p.A,{hasError:s?.isError||!1,errorMessage:c.R.get("error.not_found.title.podcast")}):(0,Ze.Gr)(s.episodeOrChapter)?(0,b.jsx)(Rt.InstrumentedRedirect,{to:(0,l.o_)(s.episodeOrChapter.book?.uri).toURLPath(!0)}):(0,b.jsx)(i.Suspense,{fallback:null,children:(0,b.jsx)(Nt.u,{pageId:o.$h.PODCAST_EPISODE,uri:t,children:(0,b.jsx)(wt,{episode:s.episodeOrChapter})})})}));function Ut(e){return e?.replace(/T.*/,"")||""}},53846:(e,t,s)=>{s.d(t,{Hk:()=>a.H,z6:()=>i.z});s(2272);var i=s(79730),a=s(4122)}}]);
//# sourceMappingURL=xpui-routes-episode.js.map