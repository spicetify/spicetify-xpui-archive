"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[4179],{50358:(e,a,s)=>{s.r(a),s.d(a,{default:()=>Ga});s(38910);var i=s(50959),t=s(82187),r=s.n(t),l=s(28150),n=s(97018),c=s(3557),o=s(69701),d=s(55147),u=s(10992),m=s(57877),g=s(34790),p=s(44930),y=s(52759),h=s(30760),x=s(88724),v=s(86343),L=s(69918),k=s(2213),j=s(74061);const b="o2TlnuNKxRO5RnB9BpHB",C="q0Ke_aAvTcc4dO4wCHQt",N="UlKUfS_GcROZmofuafOW",A="I5LORTI1u3A6VoUvRCBf",I="TS85Qkpioa31wR0p4kzT",f="yL1DLXBc05CR_ACv_NhA",R="k5kRkUyoz9znqg_SGOVQ";var T=s(87635),P=s(24038),w=s(77401),U=s(92718),S=s(18373),D=s(65267),B=s(11527);let F=function(e){return e.SMALL="small",e.LARGE="large",e}({});const E=({art:e,disabled:a=!1,LinkComponent:s,name:i,size:t=F.SMALL,type:n,uri:c})=>{const o=e?[e]:[],m=t===F.SMALL?(0,P.R)(n):function(e){switch(e){case T.albumType.SINGLE:return u.ag.get("track-page.from-the-single");case T.albumType.EP:return u.ag.get("track-page.from-the-ep");case T.albumType.COMPILATION:return u.ag.get("track-page.from-the-compilation");case T.albumType.ALBUM:default:return u.ag.get("track-page.from-the-album")}}(n),g=(0,l.s0)();return(0,B.jsxs)("div",{className:r()(b,{[N]:t===F.SMALL,[C]:a}),children:[(0,B.jsx)("div",{className:A,children:(0,B.jsx)(w.O,{images:o,size:S.m$.SIZE_80,title:i,type:U.p.ALBUM})}),(0,B.jsxs)("div",{className:I,children:[(0,B.jsx)(D.D,{variant:t===F.SMALL?"mestoBold":"finale",children:m}),(0,B.jsx)(s,{to:c,children:(0,B.jsx)(D.D,{as:"div",className:f,variant:"balladBold",dir:"auto",children:i})})]}),(0,B.jsx)("div",{onClick:()=>{g((0,d.EC)(c).toURLPath(!0))},className:R})]})};var O=s(67415),M=s(79287),_=s(22516),G=s(54329);let z=function(e){return e.LOADING="LOADING",e.LOADED="LOADED",e.UNAVAILABLE="UNAVAILABLE",e}({});const K=(e,a)=>{switch(a.type){case"LYRICS_LOADING":return{...e,[a.uri]:{status:z.LOADING}};case"LYRICS_LOADED":return{...e,[a.uri]:{status:z.LOADED,data:a.response}};case"LYRICS_ERROR":return{...e,[a.uri]:{status:z.UNAVAILABLE}};default:return(0,G.U)(a,`Unhandled lyrics action with type: ${a.type}`)}};var Y=s(8517),q=s(97167),$=s(39537);const H={status:z.LOADING},J={status:z.UNAVAILABLE},W=i.createContext(void 0),Z=({children:e,initialState:a={}})=>{const s=i.useReducer(K,a);return(0,B.jsx)(W.Provider,{value:s,children:e})},V=({uri:e,isAnonymous:a,imageForLyricsRequest:s})=>{const t=i.useContext(W);if(void 0===t)throw new Error("useTrackEntityLyrics must be used within a TrackEntityLyricsProvider");const[r,l]=t,n=e?r[e]:null;return(0,i.useEffect)((()=>{!n&&e&&(l({type:"LYRICS_LOADING",uri:e}),(async({trackUri:e,api:a,imageForLyricsRequest:s})=>{const i=(0,d.EC)(e);try{const e=await q.Zz.getTrackEntityLyrics(a||Y.b.getInstance(),i.id,s||"");return{hasLyrics:!0,syncType:e.lyrics.syncType,lyrics:e.lyrics.lines,provider:e.lyrics.provider,providerDisplayName:e.lyrics.providerDisplayName,providerLyricsId:e.lyrics.providerLyricsId,isRtlLanguage:e.lyrics.isRtlLanguage}}catch(e){if(e instanceof $.m&&404===e.status)return{hasLyrics:!1};throw e}})({trackUri:e,imageForLyricsRequest:s}).then((a=>{l({type:"LYRICS_LOADED",uri:e,response:a})})).catch((()=>{l({type:"LYRICS_ERROR",uri:e})})))}),[l,s,n,e]),e&&(0,d.wj)(e)&&!a?n||H:J};var Q=s(81085),X=s(47858),ee=s(10246),ae=s(31695),se=s(45066),ie=s(79519),te=s(38522);const re="oTRKhYD0MZlNPm66W3Tw",le="sc95MwPalcHwYGZ7j3xN",ne="zrCZCfYv4zZiB1HYv9i8",ce="RnlxIDmWcYTbbwNSJNjA",oe="SHkxfN1vy0wpRMP1hK7I",de="COXBS6zLyyxKNYuEAzjZ",ue="sR5IpdOUvoUGYKlC9Dk1",me="FHMr3WxshoYjZ7jd3YwI",ge="Evcwc4KM2tf9xrLbfB8B",pe="x4_dsi31Cx2SO1L0uYIj",ye="euPDqfFEBILj9KHDNLC1",he="x6FPRUKK40oDCPP7g6Ls",xe="k3SPcfaKewjfdYumDcGw",ve="t9C7vRiN1OSC9uWfJEr0",Le="Onv6dO4lntCzKUqYa8PE",ke="vHNIIDpwcSLuHumlKDbY",je=({richTrack:e})=>{const{search:a}=(0,l.TH)(),s=(0,i.useCallback)((()=>new URLSearchParams(a.slice(1)).get("highlight")||""),[a])(),{tracklistRef:t}=(0,te.W)(),r=e.albumOfTrack,n=(0,ie.Y)(r?.uri||""),{usePlayContextItem:c}=(0,M.n)({uri:n},{featureIdentifier:"album"}),o=(0,i.useMemo)((()=>({items:[],totalCount:0})),[]);return r?(0,B.jsx)("div",{ref:t,className:ue,children:(0,B.jsx)(se.L,{ariaLabel:r.name,nrTracks:r.tracks.totalCount,albumUri:r.uri,highlightUri:s,discs:o,usePlayContextItem:c,hasHeaderRow:!1})}):null};var be=s(9705),Ce=s(85509),Ne=s(93709),Ae=s(66562),Ie=s(44250),fe=s(71932),Re=s(48439),Te=s(73745);const Pe=i.memo((function({uri:e,togglePlay:a,isPlaying:s,isActive:t,spec:r,logger:l,backgroundColor:n,name:c,isPlayable:o,albumUri:d,artists:p}){const y=(0,Re.o)(),h=(0,Te.k)(),[k,j]=(0,Ie.Z)(e),b=(0,i.useCallback)((async()=>{y({targetUri:e,intent:k?"unsave":"save",type:"click"});const a=r.saveButtonFactory();l.logInteraction(k?a.hitRemoveLike({itemNoLongerLiked:e}):a.hitLike({itemToBeLiked:e}));try{await j(!k)}catch{}}),[y,e,k,r,l,j]),C=(0,i.useCallback)((()=>{const i=(0,v.aK)({isPlaying:s,isActive:t,spec:r.playButtonFactory(),logger:l,uri:e});a({loggingParams:i})}),[t,s,l,r,a,e]),N=(0,i.useCallback)((()=>{l.logInteraction(r.contextButtonFactory().hitUiReveal())}),[l,r]),A=(0,fe.j)();return(0,B.jsx)(be.o,{backgroundColor:n,children:(0,B.jsxs)(be.F,{children:[(0,B.jsx)(g.rn,{children:(0,B.jsx)(x.$,{onClick:C,isPlaying:s,disabled:!o,size:A,uri:e})}),(0,B.jsx)(g.rn,{children:(0,B.jsx)(Ce.H,{isAdded:!!k,onClick:b,disabled:!h,size:A})}),(0,B.jsx)(Ne.o,{uri:e,isFollowing:!!k,onFollow:b,size:A}),(0,B.jsx)(L.yj,{menu:(0,B.jsx)(m.$,{uri:e,albumUri:d,artists:p}),onShow:N,children:(0,B.jsx)(Ae.z,{label:u.ag.get("more.label.context",c),size:A})})]})})})),we="OH5mnpJIVCJozYM3raMt",Ue="etw0slM6uVrCi5RR3iDi",Se=({padded:e,providerDisplayName:a})=>a?(0,B.jsx)(D.D,{as:"p",dir:"auto",variant:"finale",className:`${we} ${e?Ue:""}`,children:u.ag.get("web-player.lyrics.providedBy",a)}):null,De=({uri:e,imageForLyricsRequest:a})=>{const{data:s}=V({uri:e,imageForLyricsRequest:a});return s?.hasLyrics?(0,B.jsx)(Se,{providerDisplayName:s.providerDisplayName}):null};var Be=s(35869),Fe=s(95264);const Ee="QhDsXG1Gmo7XmQWLggAO",Oe="bZgWQj7UxvK8GYKWDA7N",Me="AW61P3tnW5cKJCWtbhFh",_e=({buttonText:e,onSecondaryButtonClick:a,onPrimaryButtonClick:s,secondaryButtonText:i,text:t})=>(0,B.jsxs)("div",{className:Ee,"data-testid":"static-activation-trigger",children:[(0,B.jsx)(n.x,{className:Oe,variant:"bodyMediumBold",children:t}),(0,B.jsxs)("div",{className:Me,children:[(0,B.jsx)(c.o,{onClick:a,semanticColor:"textBase",children:i}),(0,B.jsx)(Fe.D,{onClick:s,colorSet:"invertedLight",children:e})]})]});var Ge=s(44288);const ze="T1nqQ4HEh3heHy4RCCKa",Ke="L8zjshPVgUMXyZR4FtOk",Ye="YMn1FWcFmOz9osBrNvhF",qe="Inbyq3TnvKDOJtcKFTDQ",$e="lWk5se4WETUOJwaEb8D6",He="i8DyQbWCmDV_8N5XGJQT",Je="t5WPFlGTY6GCd9UOFfLu",We="AGQ3wRyMVK1odq860qnT",Ze="ZX_r7uZgPgssaUplfpxT",Ve="qrqctaPu2XBpxsw23nPX",Qe="XnWidTagai3nQwMPxIMF";var Xe=s(97374),ea=s(65341);let aa=function(e){return e.SMALL="small",e.LARGE="large",e}({});const sa=e=>{const{disabled:a,images:s,LinkComponent:i,name:t,size:n,uri:c,enableI18nRoutes:o,enableI18nAdditionalPages:m}=e,g=n===aa.SMALL,p=(0,l.s0)(),y=(0,d.EC)(c),h=y?.type,x=u.ag.getLocaleForURLPath(),v=(0,Xe.S9)({localeFeatureFlag:o,entityFeatureFlag:m,urlLocale:x,entity:h,type:"link"});return(0,B.jsxs)("div",{className:r()(Ke,{[Ye]:a}),"data-testid":"track-artist-link-card",children:[(0,B.jsx)(w.O,{shape:w.K.CIRCLE,images:s,size:S.m$.SIZE_80,title:t,type:U.p.ARTIST}),(0,B.jsxs)("div",{className:r()($e,{[He]:g}),children:[(0,B.jsx)(D.D,{variant:"mestoBold",className:qe,children:u.ag.get("card.tag.artist")}),(0,B.jsx)(i,{to:c,children:(0,B.jsx)(D.D,{as:"div",dir:"ltr",className:Je,variant:"balladBold",children:t})})]}),(0,B.jsx)("div",{onClick:()=>{const e=y?.toURL(`/${ea.F0}${x}/`);if(y){const a=v?e:y.toURLPath(!0);p(a)}},className:We})]})},ia=({size:e=aa.LARGE,disabled:a=!1,enableI18nRoutes:s,enableI18nAdditionalPages:t,...l})=>{const[n,o]=(0,i.useState)(!1),d=(0,i.useCallback)((()=>{o(!n)}),[n]),m=l.artists;return(0,B.jsxs)("div",{"data-testid":"track-artist-link-card-container",children:[(0,B.jsx)("div",{className:ze,children:m.map(((i,c)=>(0,B.jsx)("div",{className:r()({[Ve]:n&&c>5,[Ze]:c>5}),children:(0,B.jsx)(sa,{name:i.name,uri:i.uri,images:i.images,size:e,LinkComponent:l.LinkComponent,disabled:a,enableI18nRoutes:s,enableI18nAdditionalPages:t},i.id)},`${i.uri}-${c}`)))}),m.length>6&&(0,B.jsx)(c.o,{onClick:d,className:Qe,children:(0,B.jsx)(D.D,{as:"p",variant:"violaBold",children:n?u.ag.get("show_less"):u.ag.get("mwp.search.artists.all")})})]})};var ta=s(25235);const ra="EaTxqhHk6J4ecKHwpY5m",la="dUQl9yd5x_1oWk4L0Ntm",na="xt5C47eHPYNiriMJxGnC",ca=({words:e})=>(0,B.jsx)(D.D,{as:"p",dir:"auto",variant:"ballad",className:na,children:e});var oa=s(49187);const da=({data:e,eventSender:a,isPlaying:s,playbackId:t,uri:r})=>{const{lyrics:l=[],provider:n,providerLyricsId:c,syncType:o}=e,d=function(e){const{uri:a,provider:s,providerLyricsId:t,syncType:r,eventSender:l,isPlaying:n,playbackId:c}=e,[o,d]=(0,i.useState)(!1),u=(0,i.useMemo)((()=>(0,oa.N)({lyrics_format:"track-page",track_uri:a,provider:s,provider_lyrics_id:t,sync_type:r,playback_id:n?c:void 0})),[a,s,t,r,n,c]);return(0,i.useCallback)((()=>{o||(l?.send(u),d(!0))}),[u,l,o])}({uri:r,provider:n,providerLyricsId:c,syncType:o,eventSender:a,isPlaying:s,playbackId:t});return(0,i.useEffect)((()=>{d()}),[d]),(0,B.jsxs)("div",{className:ra,children:[(0,B.jsx)(D.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:la,children:u.ag.get("web-player.lyrics.title")}),l.map((({words:e},a)=>(0,B.jsx)(ca,{words:e},`lyrics-seo-line-${a}`)))]})};var ua=s(67736),ma=s(5085),ga=s(27816);const pa=({uri:e,imageForLyricsRequest:a})=>{const{data:s}=V({uri:e,imageForLyricsRequest:a}),i=(0,ga.s4)(),{isPaused:t,currentTrackUri:r,playbackId:l}=(0,ua.Y)((e=>({isPaused:e?.isPaused,currentTrackUri:e?.item?.uri,playbackId:e?.playbackId})),ma.V),n=!t&&r===e;return s&&s?.hasLyrics?(0,B.jsx)(da,{data:s,uri:e,eventSender:i,isPlaying:n,playbackId:l}):null};var ya=s(52840),ha=s(53885);const xa=e=>{const{albumArtists:a,columnCount:s,imageForLyricsRequest:t,uri:l}=e,n=s-2,c={"--column-count":s,"--left-column-end":n-2,"--right-column-start":n},{isAnonymous:o}=(0,Be.v9)(ha.Gg),d=(0,Te.k)(),{data:m,status:g}=V({uri:l,isAnonymous:o,imageForLyricsRequest:t}),p=!!m&&m.hasLyrics&&g!==z.UNAVAILABLE||o,y=(0,Be.v9)(ya.br),h=(0,Be.v9)(ya.yE);return(0,B.jsxs)(i.Suspense,{fallback:null,children:[p&&(0,B.jsx)("div",{className:r()(ne,{[ce]:s>5}),style:{...c},"data-testid":"lyrics-container",children:o?(0,B.jsx)(_e,{buttonText:u.ag.get("sign_up"),secondaryButtonText:u.ag.get("login"),text:u.ag.get("track-page.sign-in-to-view-lyrics"),onPrimaryButtonClick:ta.L6,onSecondaryButtonClick:ta.h$}):(0,B.jsx)(pa,{uri:l,imageForLyricsRequest:t})}),(0,B.jsx)("div",{className:r()(re,{[le]:s>5&&p}),style:{...c},children:(0,B.jsx)(ia,{artists:a,LinkComponent:Ge.default,disabled:!d,enableI18nRoutes:y,enableI18nAdditionalPages:h})})]})};var va=s(39189),La=s(76841),ka=s(453),ja=s(99146),ba=s(48446),Ca=s(57144);const Na=({album:e,index:a,artistURI:s})=>(0,B.jsx)(ka.JL,{value:"card",index:a,children:(0,B.jsx)(Ca.i,{index:a,latest:!1,showType:!0,...(0,ba.B$)(e,s,e.name)})});var Aa=s(21432);const Ia=({albums:e,artistName:a,artistId:s,artistUri:i,className:t})=>e?(0,B.jsx)(ka.JL,{value:"shelf/albums",children:(0,B.jsx)(Aa.P,{total:e.totalCount,title:u.ag.get("rich-page.popular-albums-by-artist",{artist:a}),seeAllUri:`${(0,ba.GJ)(s)}:discography:${ja.VZ.Album.toLowerCase()}`,seeAllLabel:u.ag.get("shelf.see-all"),alwaysShowSeeAll:!0,className:t,children:(0,ba.Hr)(e.items).map(((e,a)=>(0,B.jsx)(Na,{album:e,index:a,artistURI:i},e.uri)))})}):null;var fa=s(88339);const Ra=({artistId:e,className:a,fansAlsoLike:s,title:i})=>(0,B.jsx)(ka.JL,{value:"shelf/fans-also-like",children:(0,B.jsx)(Aa.P,{total:s.length,title:i??u.ag.get("rich-page.fans-also-like"),seeAllUri:`${(0,ba.GJ)(e)}:related`,className:a,children:s.map(((e,a)=>(0,B.jsx)(ka.JL,{value:"card",index:a,children:(0,B.jsx)(fa.I,{index:a,uri:e.uri,name:e.profile.name,images:e.visuals.avatarImage?.sources||[]})},e.uri)))})});var Ta=s(74324);const Pa="ERm7dIKbVoqGwPb_lXPH",wa=({artistName:e,artistUri:a,headerClassName:s,rowClassName:t,topTracks:r,topTracksTransformer:l,uri:c})=>{const o=(0,i.useMemo)((()=>r?.items.map((e=>l(e,c)))),[r?.items,l,c]),{usePlayContextItem:d}=(0,M.n)({uri:a},{featureIdentifier:"artist"});return o&&o.length>0?(0,B.jsxs)("div",{className:t,children:[(0,B.jsxs)("div",{children:[(0,B.jsx)(n.x,{variant:"bodySmall",className:Pa,children:u.ag.get("rich-page.popular-tracks")}),(0,B.jsx)(n.x,{as:"h2",variant:"titleSmall",semanticColor:"textBase",className:s,children:e})]}),(0,B.jsx)(Ta.k,{nrTracks:o.length,initialTracks:o,usePlayContextItem:d})]}):null},Ua=({artistName:e,artistId:a,artistUri:s,className:i,releases:t,artistImages:r})=>t?(0,B.jsx)(ka.JL,{value:"shelf/releases",children:(0,B.jsx)(Aa.P,{total:10,title:u.ag.get("rich-page.popular-releases-by-artist",{artist:e}),seeAllUri:`${(0,ba.GJ)(a)}:discography:${ja.VZ.Album.toLowerCase()}`,seeAllLabel:u.ag.get("shelf.see-all"),alwaysShowSeeAll:!0,className:i,listRowHeaderProps:r?{title:e,pretitle:u.ag.get("artist-page.popular"),media:(0,X.o)(r,{desiredSize:48})||""}:null,children:t.items.map(((e,a)=>(0,B.jsx)(Na,{album:e,index:a,artistURI:s},e.uri)))})}):null,Sa=({artistId:e,artistName:a,artistUri:s,className:i,singles:t})=>t?(0,B.jsx)(ka.JL,{value:"shelf/singles-and-eps",children:(0,B.jsx)(Aa.P,{total:t.totalCount,title:u.ag.get("rich-page.popular-singles-and-eps-by-artist",{artist:a}),seeAllUri:`${(0,ba.GJ)(e)}:discography:${ja.VZ.Single.toLowerCase()}`,seeAllLabel:u.ag.get("shelf.see-all"),alwaysShowSeeAll:!0,className:i,children:(0,ba.Hr)(t.items).map(((e,a)=>(0,B.jsx)(Na,{album:e,index:a,artistURI:s},e.uri)))})}):null;var Da=s(79709),Ba=s(10732),Fa=s(70542),Ea=s(64794);const Oa=e=>(e.items||[]).map((e=>({name:e.profile.name,images:(e.visuals.avatarImage?.sources||[]).map((e=>({url:e.url,width:e.width,height:e.height}))),uri:e.uri,id:e.id}))),Ma=e=>(e||[]).map((e=>e.profile.name)),_a=({uri:e,track:a})=>{const s=(0,Te.k)(),t=(0,Ba.g)(),l=(0,Da.k)({type:"locale",uri:e}),d=u.ag.getLocaleForTranslation(),h=parseInt(a.playcount||"0",10),{firstArtist:b,otherArtists:C,albumOfTrack:N,duration:A,name:I}=a,f=N?.coverArt,R=N?.copyright.items,T=N?.courtesyLine,{date:P,precision:w}=N?.date?(0,ee.dR)(N.date):{date:void 0,precision:void 0},S=f?.extractedColors?.colorRaw.hex,D=(f?.sources||[]).map((e=>({url:e.url,width:e.width||void 0,height:e.height||void 0}))),O={uri:N?.uri||"",name:N?.name||""},G=Ma(b.items),z=Ma(C.items),K=Oa(b),Y=Oa(C),q=[...K,...Y],$=b.items[0],H=a.albumOfTrack,J=H?.playability?.playable,W={artistId:$?.id,artistName:$?.profile?.name,artistUri:$?.uri},V=a.albumOfTrack?.coverArt?.sources,se=(0,X.o)(V||void 0,{desiredLabel:"large",desiredSize:600})??V?.[0]?.url??"",[te,re]=(0,i.useState)(!1),le=(0,i.useCallback)((()=>{re(!te)}),[te]),ne=C&&C.items.length>5,{spec:ce,logger:ue}=(0,Q.fU)(o.createDesktopTrackEventFactory,{data:{uri:e}}),be=a.playability.playable,Ce=(0,ie.Y)(e),{togglePlay:Ne,isPlaying:Ae,isActive:Ie}=(0,M.n)({uri:Ce},{featureIdentifier:"track"}),fe=(0,i.useCallback)((()=>(0,_.Zs)({i18n:u.ag,trackArtistsList:[...G,...z].join(u.ag.getSeparator()),trackName:a.name,shouldLocalize:l})),[G,z,l,a.name]),Re=(0,i.useCallback)(((e,a)=>{ue.logInteraction(ce.headerFactory().artistLinkFactory({position:a.position,uri:a.creator.uri}).hitUiNavigate({destination:a.creator.uri}))}),[ue,ce]),we=(0,i.useCallback)((()=>{const a=(0,v.aK)({isPlaying:Ae,isActive:Ie,spec:ce.actionBarFactory().playButtonFactory(),logger:ue,uri:e});Ne({loggingParams:a})}),[Ie,Ae,ue,ce,Ne,e]),Ue=H?.uri,Se=(0,i.useMemo)((()=>[...b.items,...C.items].map((e=>({uri:e.uri,name:e.profile.name})))),[b.items,C.items]),Be=(0,B.jsx)(m.$,{uri:e,albumUri:Ue,artists:Se});return(0,B.jsxs)("section",{"data-testid":"track-page",children:[(0,B.jsx)(va.$,{children:fe()}),(0,B.jsxs)(g.gF,{backgroundColor:S,children:[(0,B.jsxs)(p.W,{children:[(0,B.jsx)(x.$,{size:"medium",onClick:we,disabled:!be,isPlaying:Ae,uri:e}),(0,B.jsx)(y.i,{text:I,dragUri:e,dragLabel:I})]}),(0,B.jsx)(L._P,{menu:Be,children:(0,B.jsx)(g.Oz,{dragUri:e,images:D,name:I,placeholderType:"album"})}),(0,B.jsxs)(g.sP,{children:[(0,B.jsx)(n.x,{variant:"bodySmallBold",children:u.ag.get("song")}),(0,B.jsx)(L._P,{menu:Be,children:(0,B.jsx)(g.xd,{dragUri:e,dragLabel:I,children:I})}),(0,B.jsx)(g.QS,{creators:K,releaseDate:P,releaseDatePrecision:w,durationMilliseconds:A.totalMilliseconds,onCreatorClick:Re,isTrack:!0,album:O,playcount:h})]})]}),(0,B.jsx)(Pe,{uri:e,togglePlay:Ne,isPlaying:Ae,isActive:Ie,spec:(0,i.useMemo)((()=>ce.actionBarFactory()),[ce]),logger:ue,backgroundColor:S,name:I,isPlayable:be,albumUri:Ue,artists:Se}),(0,B.jsxs)(Z,{children:[(0,B.jsxs)("div",{className:"contentSpacing",children:[(0,B.jsx)("div",{className:oe,children:(0,B.jsx)(j.T,{render:({columnCount:a})=>(0,B.jsx)(xa,{imageForLyricsRequest:se,albumArtists:q,columnCount:a,uri:e})})}),(0,B.jsx)(La.y,{subtitle:u.ag.get("internal-link-recommender.based-on-this-song"),uri:a.uri,entityType:U.p.TRACK}),(0,B.jsx)(wa,{artistName:$.profile.name,artistUri:$.uri,headerClassName:ge,rowClassName:oe,topTracks:$.discography.topTracks,topTracksTransformer:Fa.X7,uri:a.uri}),(0,B.jsx)(Ua,{className:me,releases:$?.discography?.popularReleasesAlbums,...W}),(0,B.jsx)(Ia,{albums:$?.discography?.albums,className:me,...W}),(0,B.jsx)(Sa,{className:me,singles:$?.discography?.singles,...W}),C&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("div",{className:ye,children:C.items.map(((e,a)=>(0,B.jsx)(Ua,{className:r()(pe,{[xe]:a>4,[ve]:te&&a>4}),releases:e.discography.popularReleasesAlbums,artistName:e.profile.name,artistId:e.id,artistUri:e.uri,artistImages:e.visuals.avatarImage?.sources},e.id)))}),ne&&(0,B.jsx)(c.o,{onClick:le,className:Le,children:(0,B.jsx)(n.x,{as:"h2",variant:"bodySmallBold",children:te?u.ag.get("show_less"):u.ag.get("mwp.search.artists.all")})}),(0,B.jsx)(Ra,{artistId:$.id,className:r()(me,{[he]:C.items.length>0}),fansAlsoLike:$.relatedContent.relatedArtists.items,title:u.ag.get("artist-page.fansalsolike")})]}),H&&(0,B.jsx)(E,{art:H.coverArt?.sources[0],disabled:!J||!s,LinkComponent:Ge.default,name:H.name,type:H.type,size:F.LARGE,uri:H.uri}),(0,B.jsx)(je,{richTrack:a})]}),(0,B.jsx)("div",{className:"contentSpacing",children:(0,B.jsxs)("div",{className:de,children:[P&&(0,B.jsx)(n.x,{as:"p",variant:"bodySmall",className:ke,children:(0,ae.BI)((0,ae.RX)(P),d,{year:"numeric",month:"long",day:"numeric"},w)}),(0,B.jsx)(k.k,{copyrights:R||[],courtesyLine:T}),!t&&(0,B.jsx)(De,{uri:e,imageForLyricsRequest:se})]})})]})]})},Ga=(0,i.memo)((function(){const{trackId:e=""}=(0,l.UO)(),a=(0,d.tn)(e).toURI(),s=(0,Ea.QN)({uri:a});return s.loading||s.error||"Track"!==s.data?.trackUnion?.__typename?(0,B.jsx)(h.h,{hasError:!s.loading,errorMessage:u.ag.get("track-page.error")}):(0,B.jsx)(O.fd,{surface:O.Tg.TRACK,uris:[a,s.data.trackUnion.albumOfTrack?.uri??null],children:(0,B.jsx)(_a,{uri:a,track:s.data.trackUnion})})}))}}]);
//# sourceMappingURL=xpui-routes-track-v2.js.map