"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7564],{41731:(e,i,n)=>{n.r(i),n.d(i,{default:()=>Di});var a=n(26017),s=n(30758),t=n(67587),r=n(59619),l=n(59081),c=n(86575),d=n(81874),o=n(36253),u=n(2681),f=n(39133),m=n(45345),x=n(54509),v=n(10397),h=n(43407),j=n(82035),g=n(58618),b=n(54925),p=n(32303),N=n(54526),y=n(89715),C=n(2097),k=n(10372),S=function(e){return e[e.LOADING=0]="LOADING",e[e.CONNECTED=1]="CONNECTED",e[e.DISCONNECTED=2]="DISCONNECTED",e}({});n(94238),n(69645),n(93902),n(7410);var R=n(78370),E=n(46522),w=n(76470),L=n(95514),I=n(16247),T=n.n(I),O=(n(6990),n(48224),n(63624),n(98111)),A=(n(84008),n(50252),n(51945),n(83892),n(39921),n(97500)),B=n.n(A),D=n(88728),P=n(75633),_=n(18022),F=n(66516),U=n(26520);const Q="jmX3vUTqdroySvWZjafY",z="sy4ejRXtpCCm2rnVCsBh",M="HO7uMcLeIpPBUBfBUF7f",Y="EWRfCzpvY8DGEJrpWuib";var W=n(86070),Z=function(e){var i=e.name,n=e.following,r=e.imageUrl,d=e.uri,o=(0,F.f)(),u=(0,x.W)(),f=s.createRef(),m=(0,s.useState)(n),v=(0,a.A)(m,2),h=v[0],j=v[1];(0,U.N)(_.mc.OPERATION_COMPLETE,(function(e){if(e.data.uris.includes(d))switch(e.data.operation){case _.JK.FOLLOW_USER:j(!0);break;case _.JK.UNFOLLOW_USER:j(!1)}}));var g=(0,s.useCallback)((function(){h?o.unfollowUsers([d]):(o.followUsers([d]),u({intent:"follow",type:"click",itemIdSuffix:"buddyfeed"})),f.current&&f.current.blur()}),[h,f,d,o,u]);return(0,s.useEffect)((function(){j(n)}),[n]),(0,W.jsxs)("div",{className:Q,children:[(0,W.jsx)(P.e,{label:i,width:40,userIconSize:"small",images:(0,s.useMemo)((function(){return[{width:40,height:40,url:r}]}),[r])}),(0,W.jsxs)("div",{className:B()(z,"ellipsis-one-line"),children:[(0,W.jsx)(b.E,{as:"p",variant:"bodySmallBold",className:"ellipsis-one-line",children:i}),h&&(0,W.jsx)(b.E,{as:"p",variant:"marginal",className:"ellipsis-one-line",children:l.Ru.get("following")})]}),(0,W.jsx)("div",{className:M,children:(0,W.jsx)(c.a,{className:Y,size:"sm",ref:f,onClick:g,ariaLabel:h?l.Ru.get("buddy-feed.button.remove-friend"):l.Ru.get("buddy-feed.button.add-friend"),icon:h?D.M:t.k})})]})};const H="rnrQ23E2_XN8d7ZBqsTp";function G(e){var i=e.facebookFriends;return(0,W.jsx)("div",{className:H,children:i.map((function(e){var i=e.uri,n=e.following,a=e.title,s=e.image;return(0,W.jsx)(Z,{uri:i,name:a,imageUrl:s,following:n},"fb-friend-".concat(i))}))})}n(94589);const J="eGd6xxi5CmL4GBZoEnMi";function V(){return(0,W.jsx)("div",{className:J,children:Array(20).fill(0).map((function(e,i){return(0,W.jsx)(w.Y,{isLoading:!0,charCount:100,as:"p",variant:"titleSmall"},i)}))})}const X="wFKGrAXEW5REryzTsDIb",q="Na5e2ZRRgwg_8duvoFyo",K="sgUgGj3mSuAdpNv8AyYQ",$="ePqfotL3LdZXKKlsSp1G",ee="Jxd3auUMXwsqpPcizfbP",ie="KPTOp08r5MTyYMmcTBcM",ne="uaVnv8WopjiEsa4Hpl_r",ae="eI_jytcKj_NBe3vo5mvx",se="CxoJJA7kFeXzEeE2R6f7";var te=function(e){var i,n,t,r,d,o,u,f=e.onBackButtonClick,m=(0,s.useState)(""),x=(0,a.A)(m,2),v=x[0],h=x[1],j=(i=v,r=(0,k.C)(),d=i.trim().toLowerCase(),o=(0,O.I)({queryKey:["useFacebookFriends"],queryFn:(t=(0,L.A)(T().mark((function e(){var i;return T().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.fetchFacebookFriends();case 2:return i=e.sent,e.abrupt("return",i.sort((function(e,i){return e.title>i.title?1:-1})));case 4:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}),u=o.data,{isLoading:o.isLoading,friends:null!==(n=null==u?void 0:u.filter((function(e){return-1!==e.title.trim().toLowerCase().indexOf(d)})))&&void 0!==n?n:[]}),p=j.isLoading,y=j.friends,C=(0,R.YQ)((function(e){h(e.target.value)}),100),S=(0,s.useCallback)((function(e){null!==e&&e.focus()}),[]);return(0,W.jsxs)("div",{className:X,children:[(0,W.jsx)(c.a,{ariaLabel:l.Ru.get("buddy-feed.button.back"),onClick:f,ref:S,className:q,icon:g.g,size:"sm",testId:"back-to-friends"}),(0,W.jsxs)("div",{className:K,children:[(0,W.jsx)("div",{className:$,children:(0,W.jsx)(N.G,{className:ee,size:"large"})}),(0,W.jsx)("div",{className:ie,children:p?(0,W.jsx)(w.Y,{isLoading:!0,charCount:25,as:"p",variant:"bodySmall"}):(0,W.jsx)(b.E,{as:"p",variant:"bodySmall",children:l.Ru.get("buddy-feed.number-of-friends",y.length)})})]}),p?(0,W.jsx)(V,{}):(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)("div",{className:ne,children:[(0,W.jsx)(E.C,{className:se,size:"small",role:"presentation"}),(0,W.jsx)("input",{onChange:C,className:ae,placeholder:l.Ru.get("buddy-feed.find-in-playlists")})]}),(0,W.jsx)(G,{facebookFriends:y})]})]})},re=n(19733);function le(e){var i=e.isOpen,n=e.onClose,a=e.onConfirm;return(0,W.jsx)(re.T,{onClose:n,"aria-label":l.Ru.get("web-player.buddy-feed.connect-with-facebook-title"),onConfirm:a,titleText:l.Ru.get("web-player.buddy-feed.connect-with-facebook-title"),descriptionText:l.Ru.get("web-player.buddy-feed.connect-with-facebook-description"),cancelText:l.Ru.get("queue.cancel-button"),confirmText:l.Ru.get("web-player.buddy-feed.connect-button"),isOpen:i})}const ce="PWrXmnQx41DSpIe1D_nH",de="AzWuuC6HtstaRZSyCs3n",oe="VrSCtYccvuQZG9aY627D",ue="mSFjqxw0tzcwc0ZCN1YP",fe="Q9ZfLJTBuMTFz4HsBThH",me="_76MQUYO_OcYkQOL1dlw",xe="TOY_wX6BMTOxtaEcJX2X",ve="A_pGgx3U5jNWUM85mJLQ",he="ffXJrzSIg2CXoGlxDi0v",je="zmmtwzKSFa5srnl7Ftq2";var ge=function(e){var i=(0,x.W)(),n=e.onBackButtonClick,t=e.feedIsEmpty,r=e.goToAddFriends,d=void 0!==r&&r,o=function(){var e=(0,k.C)(),i=(0,s.useState)(S.LOADING),n=(0,a.A)(i,2),t=n[0],r=n[1];return(0,s.useEffect)((function(){return e.subscribeToFacebookConnectionState((function(e){r(e.connection?S.CONNECTED:S.DISCONNECTED)})).cancel}),[e]),t}(),u=(0,k.C)(),f=(0,s.useState)(!1),m=(0,a.A)(f,2),v=m[0],h=m[1],j=(0,s.useState)(!1),R=(0,a.A)(j,2),E=R[0],w=R[1],L=(0,s.useState)(!1),I=(0,a.A)(L,2),T=I[0],O=I[1],A=(0,s.useCallback)((function(e){null!==e&&e.focus()}),[]),B=(0,s.useCallback)((function(){location.reload()}),[]);if(E)return(0,W.jsxs)("div",{className:he,children:[(0,W.jsx)(c.a,{onClick:n,ref:A,className:oe,ariaLabel:l.Ru.get("buddy-feed.button.back"),icon:g.g,size:"sm"}),(0,W.jsxs)("div",{className:je,children:[(0,W.jsx)(b.E,{as:"h1",variant:"bodyMediumBold",className:de,children:l.Ru.get("error-dialog.generic.header")}),(0,W.jsx)(b.E,{as:"p",variant:"bodySmall",className:ue,children:l.Ru.get("error-dialog.generic.body")}),(0,W.jsx)(p.$,{colorSet:"invertedLight",onClick:B,children:l.Ru.get("error.reload")})]})]});var D=(d||T)&&o===S.CONNECTED;return(0,W.jsxs)("div",{className:ce,children:[D&&(0,W.jsx)(te,{onBackButtonClick:function(){t&&O(!1),n()}}),!D&&(0,W.jsxs)("div",{className:me,children:[(0,W.jsx)(c.a,{ariaLabel:l.Ru.get("buddy-feed.button.back"),onClick:n,className:oe,ref:A,icon:g.g,size:"sm"}),(0,W.jsx)(b.E,{as:"h1",variant:"bodyMediumBold",className:de,children:l.Ru.get("buddy-feed.friend-activity")}),(0,W.jsx)(b.E,{as:"p",variant:"bodySmall",className:ue,children:l.Ru.get("buddy-feed.facebook.connect-with-friends-default")}),(0,W.jsx)("div",{className:xe,children:(0,W.jsx)(p.$,{className:ve,size:"small",iconLeading:N.G,UNSAFE_colorSet:(0,y.mA)("#2374E1",C.white),onClick:function(){i({intent:"connect-to-facebook",type:"click",itemIdSuffix:"buddyfeed"}),o!==S.CONNECTED?h(!0):O(!0)},children:l.Ru.get("buddy-feed.facebook.button")})}),(0,W.jsx)(b.E,{as:"p",variant:"marginal",className:fe,children:l.Ru.get("buddy-feed.facebook.disclaimer")}),(0,W.jsx)(le,{isOpen:v,onClose:function(){h(!1)},onConfirm:function(){u.connectToFacebook().then((function(){O(!0),h(!1)})).catch((function(){w(!0)}))}})]})]})},be=n(33054),pe=n(56275);const Ne="jGcEaPyhr1c_janM2uRF",ye="OemaZktMXaRcYQ5bcfLZ",Ce="o5IJsOJEWBEyxtPVVVqQ",ke="yHlSWaHkqZHm5mcY8ZFh",Se="toPt7VOT_PiDx5Gj3SM2",Re="xU4sacBisQneHoQeHMP5",Ee="srjSlmxMGzXnJBc32BJa",we="lju7xv10a5Y5Z8h8CcKJ",Le="jr794VV4i2iUBRhfvS5i",Ie="KE3gK5ccLz2gL3dhJ4BW",Te="pO2rsGFqUdaNhpLrif21",Oe="Ydxgl4Y23orfVVVI9O2k",Ae="VhqWrkzIrJrvdyj7ZXMd",Be="T3liC_3fbMOTilR4HHKD",De="W_tr6AMQB9Chbc9bCS9w",Pe="yDdNxgieZmqjgHQCW3UE",_e="iRrzzadYGo2MSuVhmVCn",Fe="_8yOZhEqs2xrYtslnNcDw",Ue="aikUDGtqRnCX0ZwYHDUW",Qe="T_HXMW6n5qsbLbPTr1GS",ze="tYswKV9PmtTCv62LOPIV",Me="GlDNRQ2w0t4h9WBI4GgN",Ye="BQGSV5BvuAaJ5rmFAXLp",We="ZLbFjRdp1AMXebZH6UWM",Ze="jhtyHt6d9vbxK6VtCI7a",He="oCaGCB13zdReRutfBS8_",Ge="MR1n58Qu0kPorQtveOCQ",Je="y10vXronmQ6eYMlJrIp3";var Ve=function(e){var i=e.showOnlineIndicator;return(0,W.jsxs)("div",{className:ze,children:[(0,W.jsxs)("div",{className:Me,children:[(0,W.jsx)(pe.v,{size:"medium"}),i?(0,W.jsx)("div",{className:Ye}):null]}),(0,W.jsxs)("div",{className:We,children:[(0,W.jsx)("div",{className:B()(Ze,He)}),(0,W.jsx)("div",{className:Ze}),(0,W.jsx)("div",{className:Ze})]})]})},Xe=function(){return(0,W.jsxs)("div",{"data-testid":"buddy-feed-empty-state",className:Ue,children:[(0,W.jsx)(b.E,{as:"p",className:Qe,children:l.Ru.get("buddy-feed.let-followers-see-your-listening")}),(0,W.jsx)(Ve,{showOnlineIndicator:!0}),(0,W.jsx)(Ve,{showOnlineIndicator:!0}),(0,W.jsx)(Ve,{}),(0,W.jsx)(b.E,{as:"p",className:Qe,children:l.Ru.get("buddy-feed.enable-share-listening-activity")}),(0,W.jsx)(be.N_,{to:"/preferences",className:Ge,children:(0,W.jsx)(p.$,{colorSet:"invertedLight",className:Je,children:l.Ru.get("desktop.settings.settings")})})]})},qe=(n(67560),n(72757)),Ke=n(82087),$e=n(5994),ei=n(87710),ii=(n(98168),n(79443),n(78221)),ni=n(36092),ai=n(88354),si=n(65623),ti=n(93187),ri=n(26684),li=n(2856),ci=n(71348),di=n(7104),oi=n(91650),ui=n(69760),fi=n(82122),mi=n(34478),xi=n(97150),vi=n(53921),hi=n(53492),ji=n(12487),gi=function(e){var i=e.timestamp;return e.isNowPlaying?(0,W.jsx)(d.Zp,{label:l.Ru.get("time.now"),children:(0,W.jsx)(hi.A,{"aria-label":l.Ru.get("time.now"),size:"small"})}):(0,W.jsx)("span",{children:(0,ji.Z)(i)})},bi=function(e){return Date.now()-e<9e5},pi=function(e,i){var n;switch(null===(n=(0,ii.o_)(e))||void 0===n?void 0:n.type){case ii.NQ.PLAYLIST:case ii.NQ.PLAYLIST_V2:return(0,W.jsx)(ti.W,{uri:e});case ii.NQ.EPISODE:case ii.NQ.SHOW:return(0,W.jsx)(ri.H,{uri:e});case ii.NQ.ALBUM:return(0,W.jsx)(ai.h,{uri:e,artistUri:i});case ii.NQ.ARTIST:return(0,W.jsx)(si.t,{uri:e});default:return null}},Ni=function(e){switch(e){case ii.NQ.ALBUM:return vi.c.ALBUM;case ii.NQ.ARTIST:return vi.c.ARTIST;case ii.NQ.SHOW:return vi.c.SHOW;case ii.NQ.EPISODE:return vi.c.EPISODE;case ii.NQ.PLAYLIST:case ii.NQ.PLAYLIST_V2:return vi.c.PLAYLIST;default:return}},yi=function(e){var i,n,a,t,r,c,d,o,u,f,m,v,j,g,p,N,y,C=e.show,k=void 0===C||C,S=e.spec,R=e.friend,E=(0,s.useMemo)((function(){return R.user.imageUrl?[{url:R.user.imageUrl,width:0,height:0}]:[]}),[R.user.imageUrl]),w=(0,x.W)(),L=(0,h.s)(),I=R.track,T=I.uri,O=(0,xi.P)({uri:T},{featureIdentifier:"buddy_feed",referrerIdentifier:"buddy_feed"}),A=O.togglePlay,D=O.isPlaying,_=O.isActive,F=(0,ii.o_)(null===(i=I.context)||void 0===i?void 0:i.uri),U=null==F?void 0:F.type,Q=(0,s.useCallback)((function(){A(),w({intent:D?"pause":"play",type:"click",itemIdSuffix:"buddyfeed_play",targetUri:T});var e=S.friendRowFactory().playButtonFactory();_?D?L.logInteraction(e.hitPause({itemToBePaused:T})):L.logInteraction(e.hitResume({itemToBeResumed:T})):L.logInteraction(e.hitPlay({itemToBePlayed:T}))}),[w,D,T,S,_,A,L]),z=(0,s.useCallback)((function(e,i){L.logInteraction(S.friendRowFactory().friendRowLinkFactory({identifier:e}).hitUiNavigate({destination:i}))}),[L,S]),M=(0,ui.P)({itemUris:[T],dragLabelText:I.name}),Y=M.draggable,Z=M.onDragStart,H=(0,ui.P)({itemUris:[null===(n=I.artist)||void 0===n?void 0:n.uri],dragLabelText:null===(a=I.artist)||void 0===a?void 0:a.name}),G=H.draggable,J=H.onDragStart,V=(0,ui.P)({itemUris:[null===(t=I.context)||void 0===t?void 0:t.uri],dragLabelText:null===(r=I.context)||void 0===r?void 0:r.name}),X=V.draggable,q=V.onDragStart;return k?(0,W.jsxs)("div",{className:B()(Ne),children:[(0,W.jsx)(ni.h,{menu:pi(null===(c=I.context)||void 0===c?void 0:c.uri,null===(d=I.artist)||void 0===d?void 0:d.uri),children:(0,W.jsxs)("div",{className:Re,children:[(0,W.jsx)(P.e,{label:R.user.name,width:40,userIconSize:"small",images:E,withBadge:bi(R.timestamp)}),(0,W.jsx)(oi.x,{className:Ee,iconClassName:we,isPlaying:D,isLocked:!1,onClick:Q,playAriaLabel:D?l.Ru.get("pause"):"".concat(l.Ru.get("play")," ").concat(I.artist.name," ").concat(I.name)})]})}),(0,W.jsxs)("div",{className:B()(Le),children:[(0,W.jsxs)("div",{className:Ie,children:[(0,W.jsx)(b.E,{as:"p",variant:"bodySmallBold",className:B()(Te,"ellipsis-one-line"),children:(0,W.jsx)(mi.pZ,{value:"/buddyfeed_user_profile",children:(0,W.jsx)(ni.h,{menu:(0,W.jsx)(ci.B,{uri:R.user.uri}),children:(0,W.jsx)(di.Link,{title:R.user.name,to:R.user.uri,dir:"auto",onClick:function(){return z("profile_link",R.user.uri)},children:R.user.name})})})}),(0,W.jsx)(b.E,{as:"p",variant:"marginal",className:B()(Oe),children:(0,W.jsx)(gi,{timestamp:R.timestamp,isNowPlaying:bi(R.timestamp)})})]}),(0,W.jsxs)(b.E,{as:"p",variant:"marginal",className:Ae,children:[(0,W.jsx)(mi.pZ,{value:"/buddyfeed_track",children:(0,W.jsx)(ni.h,{menu:(0,W.jsx)(li.P,{uri:I.uri,contextUri:null===(o=I.context)||void 0===o?void 0:o.uri,albumUri:null===(u=I.album)||void 0===u?void 0:u.uri,artists:[I.artist]}),children:(0,W.jsx)(di.Link,{title:I.name,to:T,className:"ellipsis-one-line",dir:"auto",draggable:Y,onDragStart:Z,onClick:function(){return z("track_link",T)},children:I.name})})}),(0,W.jsx)("span",{"aria-hidden":!0,children:" • "}),(0,W.jsx)(mi.pZ,{value:"/buddyfeed_artist",children:(0,W.jsx)(ni.h,{menu:I.artist?(0,W.jsx)(si.t,{uri:I.artist.uri}):null,children:(0,W.jsx)(di.Link,{title:null===(f=I.artist)||void 0===f?void 0:f.name,to:null===(m=I.artist)||void 0===m?void 0:m.uri,className:"ellipsis-one-line",dir:"auto",draggable:G,onDragStart:J,onClick:function(){var e;return z("artist_link",null===(e=I.artist)||void 0===e?void 0:e.uri)},children:null===(v=I.artist)||void 0===v?void 0:v.name})})})]}),(0,W.jsx)(b.E,{as:"p",variant:"marginal",className:B()("ellipsis-one-line",De),children:(0,W.jsx)(mi.pZ,{value:"/buddyfeed_context",children:(0,W.jsx)(ni.h,{menu:pi(null===(j=I.context)||void 0===j?void 0:j.uri,null===(g=I.artist)||void 0===g?void 0:g.uri),children:(0,W.jsxs)(di.Link,{title:null===(p=I.context)||void 0===p?void 0:p.name,to:null===(N=I.context)||void 0===N?void 0:N.uri,className:Pe,draggable:X,onDragStart:q,onClick:function(){var e;return z("context_link",null===(e=I.context)||void 0===e?void 0:e.uri)},children:[(0,W.jsx)(fi.s,{type:Ni(U),iconSize:16,className:Be}),(0,W.jsx)("span",{dir:"auto",className:"ellipsis-one-line",children:null===(y=I.context)||void 0===y?void 0:y.name})]})})})})]})]},R.user.uri):null};function Ci(e){var i=e.friends,n=e.spec,t=(0,Ke.D)().currentSession,r=(0,ei.y)(),l=(0,s.useState)(!0),c=(0,a.A)(l,2),d=c[0],o=c[1],u=!(null!=t&&t.active)&&r&&d&&(0,W.jsx)("li",{className:Ce,children:(0,W.jsx)($e.p,{localStorageKey:"dismissStartJamButtonFromFriendFeed",onDismiss:function(){return o(!1)}})},"start-jam-button");return(0,W.jsx)(qe.ZI,{flipKey:i.map((function(e){return e.user.uri})).join(""),children:(0,W.jsxs)("ul",{className:ye,children:[u,i.map((function(e,i){return(0,W.jsx)(qe.lf,{flipId:e.user.uri,children:(0,W.jsx)("li",{children:(0,W.jsx)(yi,{friend:e,show:i<100,spec:n},e.user.uri)})},e.user.uri)}))]})})}var ki=n(95079),Si=n(94079);const Ri="VTOHA2pQ5UOAQhut6swb",Ei="y02ezh9Bcfm_61XcxvOS",wi="rb6j61g6Avhg8RARvz3b",Li="xDW2awz1Oc3Khs6Wsn8g",Ii="MOKoNTiYkc9jh0xhfoZH",Ti="gOHEpGu2st4QQtJy8OPw",Oi="ijngDXlnRFRYySzwV5JJ",Ai="oNiqjPtyJeYH6LqZlnVa";var Bi=function(e){var i=e.children,n=e.page,a=e.nodeRef,s=0===n,t=i.filter((function(e,i){return i!==n}));return(0,W.jsx)(ki.A,{component:null,children:t.map((function(e){return(0,W.jsx)(Si.A,{in:s,timeout:500,nodeRef:a,classNames:{enter:s?Ri:Ii,enterActive:s?Ei:Ti,exit:s?wi:Oi,exitActive:s?Li:Ai},children:e},s?"first-page":"second-page")}))})};const Di=function(e){var i=e.friends,n=(0,x.W)(),g=(0,h.s)(),b=(0,j.r)(r.W,{}).spec,p=(0,s.useRef)(null),N=(0,s.useRef)(null);(0,s.useEffect)((function(){n({intent:"view",type:"impression",itemIdSuffix:"buddyfeed"})}),[n]),(0,s.useEffect)((function(){g.logImpression(b.impression())}),[g,b]);var y=(0,s.useState)(!1),C=(0,a.A)(y,2),k=C[0],S=C[1],R=function(){k||g.logInteraction(b.addFriendButtonFactory().hitUiReveal()),S(!k)},E=0===i.length,w=(0,s.useCallback)((function(){g.logInteraction(b.closeButtonFactory().hitUiHide())}),[g,b]);return(0,W.jsx)(v.ql.Provider,{value:"buddy_feed",children:(0,W.jsx)(o._,{label:l.Ru.get("buddy-feed.friend-activity"),focusTransferId:"BUDDY-FEED",children:(0,W.jsxs)(Bi,{page:k?1:0,nodeRef:k?N:p,children:[(0,W.jsx)("div",{className:ke,ref:N,children:(0,W.jsx)(ge,{onBackButtonClick:R,feedIsEmpty:E,goToAddFriends:k})}),(0,W.jsx)("div",{className:Se,ref:p,children:(0,W.jsxs)(u.w,{children:[(0,W.jsx)(f.a,{title:l.Ru.get("buddy-feed.friend-activity"),panel:m.Z.BuddyFeed,onClose:w,actions:(0,W.jsx)(d.Zp,{label:l.Ru.get("buddy-feed.add-friends"),children:(0,W.jsx)(c.a,{ariaLabel:l.Ru.get("buddy-feed.add-friends"),testId:"add-friends-button",size:"sm",onClick:R,icon:t.k})})}),(0,W.jsx)("div",{className:_e,children:(0,W.jsx)(c.a,{ariaLabel:l.Ru.get("buddy-feed.add-friends"),className:Fe,size:"sm",onClick:R,icon:t.k})}),E?(0,W.jsx)(Xe,{}):(0,W.jsx)(Ci,{friends:i,spec:b})]})})]})})})}}}]);
//# sourceMappingURL=xpui-routes-buddy-feed.js.map