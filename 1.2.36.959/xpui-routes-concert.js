"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[9209],{90696:(e,t,s)=>{s.d(t,{A:()=>y});var a=s(79474),r=s(41028),i=s(98764),n=s(85786),o=s(32371),c=s(14152),l=s(14485);const d="MUiWCNTfb6FcSwVPvQ1V",m="_eSrMs5LTUjW7l0vfuBg",u="UAk3bMhekwJTV_wIyfsT",h="X9w6LPfKsZHMCs38sVIQ",x="NXn5KjeUOjLGlAfS1Gao",g="N0wgFMDDvCiby4QB5kLJ",j="nloNe2BLRHjz9dxlwfLU",v="FyD0hF1e2PKzRxQ6sYDQ",p="GR08E4L_rOGljyQQX30R";var f=s(13274);const y=(0,a.memo)((e=>{const{uri:t,title:s,imageUrl:a,date:y,subTitle:N,firstParty:_,onClick:b}=e,S=y?(0,l.l4)(y):void 0;return(0,f.jsx)(o.Link,{to:t,className:d,"data-testid":"concert-card",onClick:b,children:(0,f.jsxs)("div",{className:m,children:[(0,f.jsx)(c.b,{children:(0,f.jsx)("div",{role:"img",className:p,style:{backgroundImage:`url(${a})`},children:!a&&(0,f.jsx)(r.r,{role:"img",size:"xxlarge",semanticColor:"textSubdued"})})}),S&&(0,f.jsxs)("time",{className:u,dateTime:y,children:[(0,f.jsx)(i.E,{as:"div",variant:"bodySmall",children:(0,l.tj)(S)}),(0,f.jsx)(i.E,{as:"div",variant:"bodyMediumBold",children:(0,l.Py)(S)})]}),(0,f.jsxs)("div",{className:h,dir:"auto",children:[(0,f.jsx)(i.E,{as:"h2",variant:"bodyMedium",className:x,children:s}),(0,f.jsxs)("div",{className:g,children:[_&&(0,f.jsx)("span",{className:v,children:(0,f.jsx)(n.D,{size:"small"})}),(0,f.jsx)(i.E,{as:"span",className:j,variant:"bodySmall","data-testid":"location-name",semanticColor:"textSubdued",children:N})]})]})]})})}))},38064:(e,t,s)=>{s.d(t,{I7:()=>m,bU:()=>u,f7:()=>l,fD:()=>o,he:()=>c,nm:()=>i,oh:()=>d});var a=s(12058),r=s(42534);const i=(e,t)=>{if(!e)return"/concerts";const s=t?.normalize().replaceAll(/\W+/g,"-");return s?`/concerts/location/${e}-${s}`:`/concerts/location/${e}`},n=10;function o(e){if(0===e.length)return[];if(0===e[0].events.length)return[];const t=[];let s={date:e[0].events[0].openingDate.slice(0,n),events:[]};for(const a of e)for(const e of a.events){const a=e.openingDate.slice(0,n);s.date!==a&&(t.push(s),s={date:a,events:[]}),s.events.push(e)}return t.push(s),t}const c=e=>e.ticketers.some((e=>"spotify"===e.partnerDisplayName.toLowerCase())),l=e=>{const t=new Date(e);t.setDate(e.getDate()+(6-e.getDay()));const s=new Date(t);return s.setDate(t.getDate()+1),{from:t,to:s}},d=e=>{const t=new Date(e);t.setDate(e.getDate()+(6-e.getDay()));const s=new Date(t);s.setDate(t.getDate()+7);const a=new Date(s);return a.setDate(s.getDate()+1),{from:s,to:a}},m=(e,t)=>!!(e?.from&&e?.to&&t?.from&&t?.to)&&((0,a.r)(e.from,t.from)&&(0,a.r)(e.to,t.to)),u=e=>(0,r.x)(e,{representation:"date"})},83836:(e,t,s)=>{s.d(t,{o:()=>o});var a=s(28049),r=s(21361),i=s(39944);const n=e=>{const[t,{username:s,concertUri:a}]=e.queryKey;return(async(e,t)=>{const s=await(0,i.aw)(r.n.getInstance(),e,t);return s.body?.found[0]})(s,a)},o=e=>{const t=["concertInCollection",e];return(0,a.I)({queryKey:t,queryFn:n,retry:!1,enabled:!!e.username})}},91662:(e,t,s)=>{s.r(t),s.d(t,{default:()=>kt});var a=s(83648),r=s(98764),i=s(69572),n=s(83856),o=s(14056),c=s(38417),l=s(64647),d=s(5745),m=s(29117),u=s(6950),h=s(27699),x=s(39517),g=s(46545),j=s(82089),v=s(79130),p=s(67302),f=s(79474),y=s(23276),N=s(25766),_=s(98950),b=s(22215),S=s(73068),k=s(32371),C=s(38064),D=s(14494),R=s(82548),I=s(50761);const w="DT8qnb2n6r8T68jLVthh",U="zTsWYsr2n9I1LMmEDGTU",E="qWd4xt94mckHYR2xmAKj",M="SkMjjVu2vVUOX8DzcDSo",T="tyNr9rDKx_AdxYH5e_JY",A="od7mn8s0l5iqP3Svx0AV";var F=s(13274);const L=(0,f.memo)((e=>{const{location:t,showTime:s,ageRestriction:a,htmlDescription:i,doorsOpenTime:n,spec:c}=e,l=(0,D.s)(),d=(0,b.NC)(R.Zx),m=t.metroAreaLocation?(0,C.nm)(t.metroAreaLocation?.geonameId,t.metroAreaLocation?.fullName):null;return(0,F.jsxs)("div",{className:w,children:[i?.trim()&&(0,F.jsxs)("div",{className:U,children:[(0,F.jsx)(r.E,{as:"h3",variant:"titleSmall",className:E,children:o.Ru.get("artist.about")}),(0,F.jsx)(S.q,{html:i,onTimeStampClick:()=>{}})]}),(0,F.jsxs)("div",{className:U,children:[(0,F.jsx)(r.E,{as:"h3",variant:"titleSmall",className:E,children:o.Ru.get("tracklist.header.venue")}),(0,F.jsxs)("div",{className:A,children:[(0,F.jsx)(y.t,{className:M}),(0,F.jsxs)("div",{children:[(0,F.jsx)(r.E,{as:"h4",variant:"bodyMediumBold",className:T,children:t.name}),(0,F.jsx)(r.E,{as:"p",variant:"bodyMedium",children:(0,I.im)({...t,name:""})})]})]}),(0,F.jsxs)("div",{className:A,children:[(0,F.jsx)(N.p,{className:M}),(0,F.jsxs)("div",{children:[(0,F.jsxs)(r.E,{as:"h4",variant:"bodyMediumBold",className:T,children:[n&&o.Ru.get("concert.door_time",o.Ru.formatDate(n,{timeStyle:"short"})),n&&" • ",o.Ru.get("concert.show_time",o.Ru.formatDate(s,{timeStyle:"short"}))]}),a?.trim()&&(0,F.jsx)(r.E,{as:"p",variant:"bodyMedium",children:a})]})]}),d&&m&&(0,F.jsxs)("div",{className:A,children:[(0,F.jsx)(_.T,{className:M}),(0,F.jsx)(k.default,{to:m,onClick:()=>(e=>{const t=c.concertLocationLinkFactory().hitUiNavigate({destination:e});l.logInteraction(t)})(m),children:(0,F.jsx)(r.E,{variant:"bodyMedium",semanticColor:"textSubdued",children:o.Ru.get("concert.see_more_events_in_location",t.metroAreaLocation?.fullName)})})]})]})]})}));var B=s(96608),P=s(83925),V=s(65325),z=s(20273),q=s(95999),G=s(64495),K=s(41190),O=s(80430),W=s(64645);const Y=f.memo((function({uri:e}){const{spec:t}=(0,G.o)(e);return(0,F.jsx)(q.pZ,{value:"concert",children:(0,F.jsxs)(z.W,{children:[(0,F.jsx)(W.h,{children:(0,F.jsx)(K.m,{spec:t,uri:e,displayText:o.Ru.get("context-menu.copy-concert-link")})}),(0,F.jsx)(O.q,{spec:t,uri:e})]})})}));var Q=s(7125),Z=s(99754),H=s(66675),X=s(25949),$=s(55129),J=s(88713),ee=s(31350),te=s(21361),se=s(39944),ae=s(52792),re=s(83836),ie=s(27742);const ne="x6zNCqcdrTezhaUq6pck",oe="ZcbYxrNgxYr3SbEDBTYc",ce="_vV79k5wVj4ojQrGsBb1",le="rdv_h11KFhUaePKRhMCV",de="Iq0_yrjNiWn8wRH7aDph",me="cywtrgfOWVwmo7QagmNV",ue="_vCmAsTSGBADcknU2Mzz",he="Y6ilq5IfXWe4NCTIEAQs",xe="F0GSgR3ItvuSGr62Oe5g",ge="LtnM_4Oyo1HSd2O3TmCE",je="IQqSOBxm76WfDmGIj1DU",ve="FSRM6nxcxudGRBZa4PTT",pe="ptXgOTvLktMzK0gfIr3K",fe="Y2Rtthdu0TlFAE_wU0Ah",ye="ntlY4xYsXqEM8EWs1uvk",Ne="a4SDu_eWa3Lmy8zYJJOU",_e="rkyLixjACVqakDzW70Fj",be="QktlqjloKFGPU6VeCdJB",Se="D5ikxKFFy7OrZoPNlsxA",ke="_OGSfzdUucEdm0ll_tF7",Ce="NoeAvmXKTUNWhszGUnHk",De="YmnPLOjioNCevJtMZ0WW",Re="y8RckB3uXs02SxhOZkH0",Ie="PnjkxsPxdfZjXVMFaK4X",we="USYJQ5misC_yxAwGf2i_",Ue="LXNtpDfChMRAPEOEhNGW",Ee="nfjG30FTqx4BgHijkNnt",Me="B6WEG6LOQLlkS_qAvKTq",Te="pjNrzKzBuV7XUPky3ier",Ae="i90BSV7_cgYaY8UBFCqg",Fe="TkfBKkvG2fmebTrGLIxi",Le="Cu2TG7TTa2wwKrEpEsKY",Be=(0,f.memo)((e=>{const{concertUri:t,entitySpec:s}=e,a=(0,f.useMemo)((()=>s.interestedButtonFactory()),[s]),r=(0,ae.t)(a),i=(0,D.s)(),{enqueueSnackbar:c}=(0,ie.d)(),l=(0,Z.d4)(ee.F6),{data:d,isLoading:m}=(0,re.o)({username:l,concertUri:t}),[u,h]=(0,f.useState)(),x=void 0===u?d:u,g=(0,n.o_)(t);return(0,F.jsx)(J.Zp,{label:o.Ru.get("concerts_interested_tooltip"),placement:"top-end",children:(0,F.jsx)(H.n,{ref:r,size:"small",iconLeading:x?X.i:$.u,className:Ce,"aria-checked":x,disabled:m,onClick:()=>{if(!m)if(x){const e=a.hitRemoveInterest();e&&i.logInteraction(e),h(!1),c(o.Ru.get("concerts_removed-from-your-saved-events")),(0,se.Jr)(te.n.getInstance(),g.id)}else{const e=a.hitAddInterest();e&&i.logInteraction(e),h(!0),c(o.Ru.get("concerts_added-to-your-saved-events")),(0,se.m9)(te.n.getInstance(),g.id)}},children:o.Ru.get("concerts_interested")})})}));var Pe=s(61080),Ve=s(14485),ze=s(36471),qe=s(65495),Ge=s(72423);const Ke=(0,f.memo)((e=>{const{concertUri:t,offer:s,position:a,spec:i,onRemindMe:n}=e,c=s.soldOut||(0,Ve.m7)(s.endDateIsoString),l="Spotify"===s.providerName,d=(0,Ve.PR)(s.startDateIsoString),m=d?void 0:s.url,u=(0,D.s)(),h=(0,ze.W)(),x=(0,f.useMemo)((()=>i.ticketProviderCellFactory({identifier:s.providerName,position:a,uri:s.url})),[i,s.providerName,a,s.url]),g=(0,ae.t)(x),j=(0,f.useMemo)((()=>{if(c)return(0,F.jsx)(r.E,{as:"p",variant:"bodyMediumBold",semanticColor:"textSubdued",className:Ue,children:o.Ru.get("concerts.soldout")});if(d){const e=s.startDateIsoString&&new Date(s.startDateIsoString);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(r.E,{as:"p",variant:"bodyMediumBold",semanticColor:"textPositive",className:Ie,children:o.Ru.get("concerts.tickets_on_sale_soon")}),e&&(0,F.jsx)(r.E,{as:"p",variant:"bodyMediumBold",semanticColor:"textPositive",className:Me,children:o.Ru.get("concerts.ticket_date_time",(0,Ve.Y)(e),(0,Ve.WB)(e))})]})}const e={"on-sale":o.Ru.get("concerts.on_sale"),presale:o.Ru.get("concerts.presale")};return(0,F.jsxs)(F.Fragment,{children:[e[s.saleType]&&(0,F.jsx)(r.E,{as:"p",variant:"bodyMediumBold",semanticColor:"textPositive",className:Ie,children:e[s.saleType]}),l&&s.minPrice&&(0,F.jsx)(r.E,{as:"p",variant:"bodyMediumBold",semanticColor:"textPositive",className:Re,children:o.Ru.get("concerts.ticket_price",s.minPrice)})]})}),[c,d,s.saleType,s.minPrice,s.startDateIsoString,l]),v=(0,f.useMemo)((()=>c?null:(d&&(Pe.$,o.Ru.get("concerts.remind_me")),(0,F.jsx)(Pe.$,{className:De,iconTrailing:qe.p,size:"small",children:l?o.Ru.get("concert_buy_tickets"):o.Ru.get("concert_find_tickets")}))),[c,d,l,n]);return(0,F.jsxs)("a",{href:m,className:je,target:"_blank",ref:g,onClick:()=>{const e=x.hitNavigateToExternalUri({destination:s.url});e&&u.logInteraction(e),h({targetUri:t,intent:"find-concert",type:"click"})},children:[(0,F.jsx)("div",{className:ve,children:(0,F.jsx)(Ge._,{loading:"eager",src:s.providerImageUrl,height:"100%",width:"100%",className:pe,children:(0,F.jsx)(_.T,{className:fe,size:"medium"})})}),(0,F.jsxs)("div",{className:ye,children:[(0,F.jsxs)("div",{dir:"auto",className:we,children:[j,(0,F.jsx)(r.E,{as:"p",semanticColor:"textSubdued",children:s.providerName})]}),v]})]})})),Oe=(0,f.memo)((e=>{const{concertUri:t,offers:s,entitySpec:a}=e,i=(0,f.useMemo)((()=>a.ticketProviderListFactory()),[a]),n=(0,ae.t)(i);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(r.E,{as:"h3",variant:"titleSmall",children:o.Ru.get("concert.header.tickets_available_on")}),(0,F.jsx)("div",{ref:n,className:xe,children:s.map(((e,s)=>(0,F.jsx)(Ke,{concertUri:t,offer:e,position:s,onRemindMe:()=>{},spec:i},e.url)))}),(0,F.jsx)(r.E,{as:"p",variant:"marginal",semanticColor:"textSubdued",className:ge,children:o.Ru.get("events_page.disclaimer")})]})})),We=(0,f.memo)((e=>{const{locationName:t,latitude:s,longitude:a,onClick:i}=e,n=new URL("https://maps.google.com/");return n.searchParams.set("q",t),s&&a&&n.searchParams.set("ll",`${s},${a}`),(0,F.jsx)("a",{href:n.href,target:"_blank",onClick:()=>i?.(n.href),children:(0,F.jsx)(r.E,{as:"h3",variant:"titleSmall",children:t})})})),Ye=(0,f.memo)((e=>{const{concert:t,entitySpec:s}=e,a=(0,D.s)(),i=(0,Q.V)(),n=(0,Ve.l4)(t.startDateIsoString);if((0,Ve.m7)(t.startDateIsoString))return(0,F.jsxs)("div",{className:he,children:[(0,F.jsx)(r.E,{as:"h3",variant:"titleSmall",children:o.Ru.get("concert_event_ended")}),(0,F.jsx)(r.E,{variant:"bodyMedium",children:(0,F.jsx)(k.default,{to:"spotify:concerts",children:o.Ru.get("concert_past_message")})})]});return(0,F.jsxs)("div",{className:he,children:[(0,F.jsx)(r.E,{as:"h3",variant:"titleSmall",className:Ee,children:(0,F.jsx)(We,{locationName:(0,I.im)(t.location),latitude:t.location.coordinates?.latitude,longitude:t.location.coordinates?.longitude})}),(0,F.jsx)(r.E,{as:"h3",variant:"bodySmall",className:Se,children:[(0,Ve.Y)(n),(0,Ve.WB)(n)].join(" • ")}),(0,F.jsxs)("div",{className:ne,children:[!i&&(0,F.jsx)(Be,{concertUri:t.uri,entitySpec:s}),(0,F.jsx)(P.w,{uri:t.uri,sharingInfo:null,interactionData:{intent:"share",type:"click"},onClick:()=>{const e=s.shareEventButtonFactory({uri:t.uri}).hitShare({entityToBeShared:t.uri,shareId:t.uri});e&&a.logInteraction(e)},className:Te,ariaLabel:o.Ru.get("concerts_share_with_friends")}),(0,F.jsx)(V.b,{menu:(0,F.jsx)(Y,{uri:t.uri}),onShow:()=>{const e=s.contextMenuButtonFactory().hitUiReveal();e&&a.logInteraction(e)},children:(0,F.jsx)(B.e,{size:"large"})})]}),(0,F.jsx)(Oe,{concertUri:t.uri,offers:t.offers.items,entitySpec:s})]})}));var Qe=s(88080),Ze=s(99426),He=s(96642),Xe=s(19448);const $e=(e,t)=>new Date(e.date.isoString).getTime()-new Date(t.date.isoString).getTime(),Je=({artist:e,spec:t})=>{const s=(0,D.s)(),a=e.goods.events.concerts.items.filter((e=>e.nearUser)).sort($e).shift(),r=a&&(e=>{const t=o.Ru.formatDate(new Date(e?.date.isoString),{day:"numeric",month:"short"});return e.venue.location?.name?`${t}, ${e.venue.location.name}`:t})(a),i=e.goods.events.userLocation?.name,n=`${e.uri}:concerts`;return(0,F.jsxs)("div",{className:Fe,children:[a&&i&&(0,F.jsxs)("div",{className:Le,children:[(0,F.jsx)(Xe.Z,{children:o.Ru.get("concerts.next_concert_near_location_colon",i)}),(0,F.jsx)(k.default,{to:a.uri,onClick:()=>(e=>{const a=t.nextConcertNearUserLinkFactory({uri:e}).hitUiNavigate({destination:e});s.logInteraction(a)})(a.uri),children:(0,F.jsx)(Xe.Z,{semanticColor:"textSubdued",children:r})})]}),(0,F.jsxs)("div",{className:Le,children:[(0,F.jsx)(Xe.Z,{children:o.Ru.get("concerts.on_tour_colon")}),(0,F.jsx)(k.default,{to:n,onClick:()=>{const e=t.artistEventsLinkFactory({uri:n}).hitUiNavigate({destination:n});s.logInteraction(e)},children:(0,F.jsx)(Xe.Z,{semanticColor:"textSubdued",children:o.Ru.get("concerts.view_all_upcoming_concerts_count",e.goods.events.concerts.totalCount)})})]})]})};var et=s(19498),tt=s(14152);const st="FjO33VzGE6gfBjmL653W",at="_NcmNLWwFe2sPY79b4Qa",rt="akNxAcOtC3FYI8sqvJjD",it="mUE9LjVEFQPKle8deylh",nt="Vf1WyewhhIsg7A_HPmBJ",ot="XY8pb4mCvOicd35GIUMg",ct="_KEuwafdCwVU1rKBhfQz",lt=(0,f.memo)((e=>{const{imageUri:t,name:s,uri:a,headliner:i,onClick:n}=e,c=(0,F.jsxs)(k.Link,{to:a,className:at,onClick:n,children:[t?(0,F.jsx)(tt.b,{children:(0,F.jsx)("div",{"data-testid":"image-container",className:ct,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 50.52%, rgba(18, 18, 18, 0.7) 100%), url(${t})`}})}):null,(0,F.jsxs)("div",{className:rt,children:[i&&(0,F.jsx)("div",{className:nt,children:(0,F.jsx)(r.E,{as:"h4",variant:"bodySmallBold",className:ot,children:o.Ru.get("concert.label.headliner")})}),(0,F.jsx)(r.E,{as:"h2",variant:"titleMedium",className:it,children:s})]})]});return(0,F.jsx)("div",{className:st,children:c})})),dt=lt,mt=(0,f.memo)((e=>{const{artist:t,position:s,lineupSpec:a}=e,r=(0,f.useMemo)((()=>a.artistRowFactory({position:s,uri:t.uri})),[a,s,t.uri]),i=(0,D.s)(),n=(0,b.NC)(et.DFH),c=t.relatedContent.featuringV2.items.flatMap((e=>{const{data:t}=e;return"Playlist"===t.__typename&&"artistsets"===t.format?[t]:[]})),l=t.discography.popularReleasesAlbums.items,d=t.visuals.avatarImage?.sources?.[0],m=(0,F.jsx)(dt,{uri:t.uri,name:t.profile.name,imageUri:d?.url,headliner:0===s,onClick:()=>{const e=r?.artistCardFactory().hitUiNavigate({destination:t.uri});e&&i.logInteraction(e)}},t.uri),u=c.map(((e,t)=>{const s="User"===e.ownerV2.data.__typename&&e.ownerV2.data.name||e.name;return(0,F.jsx)(Ze.B,{index:t,uri:e.uri,name:e.name,images:e.images.items[0]?.sources,description:e.description||"",authorName:s},e.uri)})),h=l.map(((e,t)=>{const s=e.artists.items.map((e=>({uri:e.uri,name:e.profile.name})));return(0,F.jsx)(Qe.a,{uri:e.uri,index:t,artists:s,images:e.coverArt?.sources||[],name:e.name,sharingInfo:e.sharingInfo},e.uri)}));return(0,F.jsxs)(q.pZ,{value:"headered-grid",index:s,children:[(0,F.jsx)(He.$,{title:0===s?o.Ru.get("concert.lineup"):"",total:2+u.length+h.length,seeAllUri:t.uri,seeAllLabel:o.Ru.get("view.see-all"),onClickShelfSeeAll:()=>{const e=r?.seeDiscographyLinkFactory().hitUiNavigate({destination:t.uri});e&&i.logInteraction(e)},showSeeAll:!0,alwaysShowSeeAll:!0,children:[m,null,...u,...h],className:Ae}),n&&(0,F.jsx)(Je,{artist:t,spec:r})]},t.uri)})),ut=(0,f.memo)((e=>{const{artists:t,entitySpec:s}=e,a=(0,f.useMemo)((()=>s.lineupArtistsFactory()),[s]),r=(0,ae.t)(a);return(0,F.jsx)("div",{ref:r,className:Ne,children:t.flatMap(((e,t)=>{if("Artist"!==e.data.__typename)return[];const s=e.data;return[(0,F.jsx)(mt,{artist:s,position:t,lineupSpec:a},s.uri)]}))})}));var ht=s(46232);const xt="Hfc2oes6xv_aDZe9NiT1",gt="SHue2Uo0VFHp8utelad9",jt="RR0j6Ja2HpvGlL7Hq2wg",vt=(0,f.memo)((e=>(0,F.jsxs)(k.Link,{to:"spotify:concerts",className:xt,onClick:e.onClick,children:[(0,F.jsx)(tt.b,{children:(0,F.jsx)("div",{className:jt,style:{backgroundImage:"linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 50.52%, rgba(18, 18, 18, 0.7) 100%), url(https://concerts.spotifycdn.com/ConcertHubCard.png)"}})}),(0,F.jsx)("div",{className:gt,children:(0,F.jsx)(r.E,{as:"h2",variant:"titleSmall",children:o.Ru.get("concerts_browse_more")})})]})));var pt=s(90696);const ft=(0,f.memo)((e=>{const{concert:t,position:s,recommendedSpec:a}=e,r=(0,D.s)(),i=t.artists.items.flatMap((e=>"Artist"===e.data.__typename?[e.data]:[])),n=i.map((e=>e.profile.name)),o=(0,I.tI)(t.title,t.festival,n)?t.title:(0,I.Ac)(n),c=i[0]?.visuals.avatarImage?.sources[0];return(0,F.jsx)(pt.A,{uri:t.uri,title:o,date:t.startDateIsoString,subTitle:(0,I.im)(t.location),imageUrl:c?.url,firstParty:t.firstParty,onClick:()=>{const e=a?.concertCardFactory({position:s,uri:t.uri}).hitUiNavigate({destination:t.uri});e&&r.logInteraction(e)}})})),yt=(0,f.memo)((e=>{const{relatedConcerts:t,entitySpec:s}=e,a=(0,f.useMemo)((()=>s.recommendedConcertsFactory()),[s]),r=(0,D.s)(),i=(0,ae.t)(a),n=t.items.flatMap((e=>"ConcertV2"===e.data.__typename?[e.data]:[]));if(0===n.length)return null;return(0,F.jsx)("div",{ref:i,className:be,"data-testid":"concert-recommendations",children:(0,F.jsx)(q.pZ,{value:"headered-grid",children:(0,F.jsxs)(He.$,{title:o.Ru.get("concert.similar_events"),total:t.totalCount,className:ke,showSeeAll:!0,alwaysShowSeeAll:!0,seeAllUri:"spotify:concerts",seeAllLabel:o.Ru.get("view.see-all"),colGap:(0,ht.po)("base"),withEncoreCards:!1,children:[(0,F.jsx)(vt,{onClick:()=>{const e=a?.browseCardFactory().hitUiNavigate({destination:"spotify:concerts"});e&&r.logInteraction(e)}},"browse"),n.map(((e,t)=>(0,F.jsx)(ft,{position:t,concert:e,recommendedSpec:a},e.uri)))]})})})}));var Nt=s(3775),_t=s(16990);const bt=new Nt.l("concert","query","bb464032342ed2e97f8ad0ba0202c43485d2652530deaa6b117c21c235a8bc5f",null),St=e=>{const{concert:t}=e,{spec:s}=(0,p.r)(i.b,{data:{identifier:(0,n.o_)(t.uri)?.id,uri:t.uri}}),a=t.artists.items.flatMap((e=>"Artist"===e.data.__typename?[e.data]:[])),j=a[0].visuals.headerImage;(0,v.z)(j?.extractedColors?.colorDark.hex);const f=a.map((e=>e.profile.name)),y=(0,I.tI)(t.title,t.festival,f)?t.title:(0,I.re)(f),N=(0,Ve.l4)(t.startDateIsoString);return(0,F.jsxs)("section",{className:de,children:[(0,F.jsx)(l.Q,{children:o.Ru.get("concert.entity_metadata.title",t.title,t.location.city,t.location.name)}),(0,F.jsxs)(m.z,{backgroundImages:j?.sources,children:[(0,F.jsxs)(u.Y,{children:[(0,F.jsx)(d.Z,{children:(0,F.jsx)("div",{className:oe,children:(0,F.jsx)(r.E,{as:"h3",variant:"titleSmall",className:ce,children:(0,Ve.Fn)(N)})})}),(0,F.jsx)(g.mm,{className:me,children:y})]}),(0,F.jsx)(h.h,{children:(0,F.jsx)("div",{className:_e,children:(0,F.jsx)(x.X,{text:y})})})]}),(0,F.jsxs)("div",{className:le,children:[(0,F.jsx)(c.K,{backgroundColor:j?.extractedColors?.colorDark.hex}),(0,F.jsxs)("div",{className:ue,children:[(0,F.jsx)(Ye,{concert:t,entitySpec:s}),(0,F.jsx)(ut,{artists:t.artists.items,entitySpec:s}),(0,F.jsx)(L,{location:t.location,showTime:N,htmlDescription:t.htmlDescription,ageRestriction:t.ageRestriction,doorsOpenTime:t.doorsOpenTimeIsoString?(0,Ve.l4)(t.doorsOpenTimeIsoString):null,spec:s}),(0,F.jsx)(yt,{relatedConcerts:t.relatedConcerts,entitySpec:s})]})]})]})},kt=()=>{const{concertId:e}=(0,a.g)(),t=`spotify:concert:${e}`,{loading:s,error:r,data:i}=(n={uri:t},(0,_t.I)(bt,n,c));var n,c;return s?(0,F.jsx)(j.A,{hasError:!1,errorMessage:""}):r||"ConcertV2"!==i?.concert.__typename?(0,F.jsx)(j.A,{hasError:!0,errorMessage:o.Ru.get("concert.error.concert_not_found_title")}):(0,F.jsx)(St,{concert:i.concert})}}}]);
//# sourceMappingURL=xpui-routes-concert.js.map