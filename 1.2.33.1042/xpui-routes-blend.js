"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[42],{35767:(e,t,i)=>{i.d(t,{O:()=>h});var n=i(88514),l=i(18331),a=i(2318),o=i(31912),r=i(1902),s=i(45324),d=i(13274);const c={[a.E.MEDIUM]:"titleMedium",[a.E.LARGE]:"titleMedium",[a.E.XLARGE]:"headlineMedium"},u={[a.E.LARGE]:"bodyMedium",[a.E.XLARGE]:"bodyMediumBold"},b={[a.E.LARGE]:"bodySmall",[a.E.XLARGE]:"bodySmall"},h=({title:e,subtitle:t,body:i,footnote:a,buttonText:h,callToActionClicked:m})=>{const x=(0,o.y)(),E=x&&c[x]||"titleSmall",v=x&&u[x]||"bodySmall",p=x&&b[x]||"marginal";return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.E,{as:"h1",variant:E,semanticColor:"textBase",className:s.A.title,children:e}),(0,d.jsx)(n.E,{as:"h2",variant:v,semanticColor:"textSubdued",className:s.A.subtitle,children:t}),i,m&&(0,d.jsx)(l.$,{className:s.A.button,colorSet:"invertedLight",onClick:m,"data-testid":r.OL,children:h}),a&&(0,d.jsx)(n.E,{as:"p",variant:p,semanticColor:"textSubdued",className:s.A.note,children:a})]})}},44610:(e,t,i)=>{i.d(t,{d:()=>A});var n=i(97500),l=i.n(n),a=i(89551),o=i(98862),r=i(19935),s=i(2318),d=i(31912),c=i(35767),u=i(1902);const b="NTT5CathoDEMjrmgfv9y",h="WmmNhmwHDNvDxInfukYO";var m=i(13274);const x=e=>(0,m.jsx)("div",{className:b,children:(0,m.jsx)("div",{className:h,children:(0,m.jsx)("svg",{width:e.iconSize,height:e.iconSize,fill:"currentColor",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",children:(0,m.jsx)("path",{d:"M33 31.998v-23h-2v23H8v2h23v23h2v-23h23v-2z"})})})});var E=i(45324);const v={name:"",username:"",image_url:null,hash:""},p={[s.E.MEDIUM]:164,[s.E.LARGE]:164,[s.E.XLARGE]:270},g=(e,t)=>(0,m.jsx)(o.e,{label:a.R.get("web-player.blend.invite.button-title"),images:[],width:e,userIconSize:"xxlarge",customPlaceholder:(0,m.jsx)(x,{iconSize:t}),piled:!0}),A=({invitation:e,callToActionClicked:t,breakpointEltRef:i})=>{const n=!!e.members?.length,s=n&&e.members?.[0]||e.recipient||v,b=n&&e.recipient||null,h=(0,d.y)(),x=h&&p[h]||128,A=Math.round(.475*x);return(0,m.jsxs)("div",{className:l()(E.A.container,E.A.TwoUsers),"data-testid":u.xg,ref:i,children:[(0,m.jsx)(r.Q,{children:a.R.get("blend.invite.page-title")}),(0,m.jsxs)("div",{className:E.A.facepile,children:[(0,m.jsx)(o.e,{label:s.name,images:[{url:s.image_url??"",width:x,height:x}],width:x,userIconSize:"xxlarge"}),b?(0,m.jsx)(o.e,{label:b.name,images:[{url:b.image_url??"",width:x,height:x}],width:x,userIconSize:"xxlarge",piled:!0}):g(x,A)]}),(0,m.jsx)(c.O,{title:e.title,subtitle:e.subtitle,footnote:e.footnote,buttonText:e.button_text,callToActionClicked:t})]})}},62538:(e,t,i)=>{i.d(t,{A:()=>n});const n=()=>{const e=window.location.href;return window.location.href=`https://accounts.spotify.com/login?continue=${encodeURIComponent(e)}`,null}},1902:(e,t,i)=>{i.d(t,{OL:()=>r,VE:()=>n,ev:()=>a,rg:()=>o,xg:()=>l});const n="blend-deleted-container",l="blend-two-user-container",a="blend-multi-user-container",o="blend-full-container",r="blend-cta-button"},12124:(e,t,i)=>{i.d(t,{B6:()=>r,OE:()=>o,YW:()=>a,pd:()=>l});var n=i(29821);let l=function(e){return e.PENDING_INVITATION="PENDING_INVITATION",e.READY_TO_JOIN_EMPTY_BLEND="READY_TO_JOIN_EMPTY_BLEND",e.READY_TO_JOIN_ALREADY_CREATED_BLEND="READY_TO_JOIN_ALREADY_CREATED_BLEND",e.MAX_MEMBERS="MAX_MEMBERS",e.ALREADY_JOINED="ALREADY_JOINED",e.DELETED="DELETED",e}({});const a=(e,t)=>e.build().withHost(n.t2).withPath(`/v3/view-invitation/${encodeURIComponent(t)}`).withEndpointIdentifier("v3/view-invitation/{invitationId}").withLocale(e.locale).send(),o=(e,t)=>e.build().withHost(n.t2).withMethod("PUT").withPath(`/v2/join/${encodeURIComponent(t)}`).withEndpointIdentifier("join/{invitationId}").send(),r=e=>e.build().withHost(n.t2).withMethod("POST").withPath("/v1/generate").withEndpointIdentifier("v1/generate").send()},46870:(e,t,i)=>{i.d(t,{G:()=>a});var n=i(2318),l=i(49469);const a=()=>(0,l.x)({[n.E.SMALL]:536,[n.E.MEDIUM]:792,[n.E.LARGE]:1048,[n.E.XLARGE]:1688})},76516:(e,t,i)=>{i.d(t,{y:()=>u});var n=i(79474),l=i(62328),a=i(85980),o=i(89551),r=i(50034),s=i(21524),d=i(82383),c=i(12124);function u(e,t){const{user:i}=(0,a.d4)(d.Ht),{enqueueSnackbar:u}=(0,l.dh)(),b=(0,r.A9)(),h=(0,n.useCallback)((async()=>{const e=await(0,c.B6)(b),t=e.body?.invite;if(!t)throw new Error("unable to generate invite link");return i?.display_name?o.R.get("blend.invite.body-with-name",i.display_name,e.body?.invite):o.R.get("blend.invite.body-without-name",e.body?.invite)}),[i?.display_name,b]);return async()=>{try{await(0,s.l)(h()),u(o.R.get("feedback.link-copied"))}catch{u(o.R.get("error.generic"))}if(e&&t){const i=e.inviteButtonFactory().hitCopyToClipboard();t.logInteraction(i)}}}},82718:(e,t,i)=>{i.r(t),i.d(t,{default:()=>A});var n=i(79474),l=i(85980),a=i(2001),o=i(89551),r=i(19935),s=i(82383),d=i(31912),c=i(52745),u=i(47586),b=i(47177),h=i(12124),m=i(46870),x=i(76516),E=i(44610),v=i(62538),p=i(13274);const g={page_type:h.pd.PENDING_INVITATION,get title(){return o.R.get("web-player.blend.group-invite.header")},get subtitle(){return o.R.get("web-player.blend.duo-invite.description")},get button_text(){return o.R.get("web-player.blend.invite.button-title")},footnote:null,members:[],recipient:null,members_title:null,playlist_uri:null},A=()=>{const{spec:e,logger:t}=(0,c.r)(a.f,{}),i=(0,x.y)(e,t),{ref:h,breakpoint:A}=(0,m.G)(),{user:y}=(0,l.d4)(s.Ht),j=y?.uri?(0,u.v)(y?.uri):"",w=(e=>({...g,members:[e],footnote:o.R.get("web-player.blend.group-invite.warning")}))({name:y?.display_name||"",username:j,image_url:(0,b.g)(y?.images)?.url||null,hash:""});return y?(0,p.jsxs)(n.Suspense,{fallback:null,children:[(0,p.jsx)(r.Q,{children:o.R.get("web-player.blend.invite.page-title")}),(0,p.jsx)(d.o.Provider,{value:A,children:(0,p.jsx)(E.d,{invitation:w,callToActionClicked:i,breakpointEltRef:h})})]}):(0,p.jsx)(v.A,{})}},19231:(e,t,i)=>{i.r(t),i.d(t,{default:()=>K});var n=i(79474),l=i(85980),a=i(61343),o=i(82383),r=i(17979),s=i(94080),d=i(2001),c=i(63275),u=i(89551),b=i(60327),h=i(31912),m=i(1369),x=i(52745),E=i(92825),v=i(35767),p=i(1902),g=i(45324),A=i(13274);const y=({invitation:e,callToActionClicked:t,breakpointEltRef:i})=>(0,A.jsxs)("div",{className:g.A.container,"data-testid":p.rg,ref:i,children:[(0,A.jsx)(E.u,{size:"xxlarge"}),(0,A.jsx)(v.O,{title:e.title,subtitle:e.subtitle,buttonText:e.button_text,footnote:null,callToActionClicked:t})]});var j=i(19935),w=(i(1137),i(97500)),f=i.n(w),_=i(88514),R=i(98862),I=i(46570),N=i(63392),T=i(53326);const k="HKAYWYmxd5Ie8WSi0a4y",D="i52u_T3b50wraodIaORk",L="xakiNVMlUf6geF67FEgy",C="IRhTesoeIiwswlly0Dvg",M="LNJzE17iskXWmfKAzY4U",O="qzBr7X7cdLUhWdk0r8lL",S=({uri:e,imageUrl:t,name:i})=>(0,A.jsx)("li",{children:(0,A.jsx)(I.h,{menu:(0,A.jsx)(N.B,{uri:e}),children:(0,A.jsx)(T.Link,{to:e,children:(0,A.jsxs)("div",{className:C,children:[(0,A.jsx)(R.e,{images:[{url:t,width:null,height:null}],label:i,width:32,userIconSize:"medium",className:M}),(0,A.jsx)(_.E,{variant:"bodySmallBold",className:"standalone-ellipsis-one-line",semanticColor:"textBase",children:i})]})})})}),Y=({members:e,headingText:t,className:i})=>(0,A.jsxs)("div",{className:f()(k,i),children:[(0,A.jsx)("div",{children:(0,A.jsx)(_.E,{as:"h4",variant:"marginalBold",semanticColor:"textSubdued",className:D,children:t})}),(0,A.jsx)("ul",{className:L,children:e&&e.map((e=>(0,A.jsx)(S,{imageUrl:e.image_url||"",name:e.name,uri:(0,c.Qj)(e.username).toURI()},e.username)))}),(0,A.jsx)("div",{className:O})]}),P=({invitation:e,callToActionClicked:t,breakpointEltRef:i})=>{const n=e.members||[],l=(0,A.jsx)("div",{className:g.A.userListContainer,"data-testid":p.ev,children:(0,A.jsx)(Y,{className:g.A.userList,headingText:e.members_title,members:n})});return(0,A.jsxs)("div",{className:g.A.container,ref:i,children:[(0,A.jsx)(j.Q,{children:u.R.get("blend.join.title")}),(0,A.jsx)(v.O,{title:e.title,subtitle:e.subtitle,footnote:e.footnote,body:l,buttonText:e.button_text,callToActionClicked:t})]})};var B=i(44610),U=i(81891),G=i(12124),z=i(46870),V=i(76516),X=i(50034),J=i(69624);const W=({invitationId:e})=>{const t=(0,a.Zp)(),i=(0,s.NC)(b.CXJ),{data:l,error:o,loading:E}=(0,m.Z)(G.YW,[e]),{spec:j,logger:w}=(0,x.r)(d.f,{}),f=(0,V.y)(j,w),_=function(e,t,i){const{enqueueSnackbar:n}=(0,J.d)(),l=(0,X.A9)(),o=(0,a.Zp)();return async()=>{try{const t=await(0,G.OE)(l,e),i=(0,c.o_)(t?.body.playlist_uri).toURLPath(!0);if(!i)throw new Error("unable to join");o(i,{replace:!0})}catch{n(u.R.get("error.request-playlist-failure"))}if(t&&i){const e=t.joinButtonFactory().hitCreatePlaylist();i.logInteraction(e)}}}(e,j,w),{ref:R,breakpoint:I}=(0,z.G)();(0,n.useEffect)((()=>{if(l?.body?.page_type===G.pd.ALREADY_JOINED){const e=(0,c.o_)(l?.body.playlist_uri)?.toURLPath(!0);e&&t(e,{replace:!0})}}),[l?.body?.page_type,l?.body?.playlist_uri,t]);const N=null===l||!l.body;if(N||E||o)return(0,A.jsx)(U.A,{timeoutInMs:1e3,hasError:!!o||!E&&N,errorMessage:u.R.get("error.generic")});const T=l?.body.members?.length||0,k=i===b.YVK.TWO_USER;switch(l?.body.page_type){case G.pd.DELETED:return(0,A.jsx)(h.o.Provider,{value:I,children:(0,A.jsxs)("div",{className:g.A.container,ref:R,"data-testid":p.VE,children:[(0,A.jsx)(r.x,{size:"xxlarge"}),(0,A.jsx)(v.O,{title:l.body.title,subtitle:l.body.subtitle,buttonText:l.body.button_text,footnote:l.body.footnote,callToActionClicked:f})]})});case G.pd.ALREADY_JOINED:return(0,A.jsx)(U.A,{hasError:!1,errorMessage:u.R.get("error.request-playlist-failure")});case G.pd.READY_TO_JOIN_EMPTY_BLEND:return(0,A.jsx)(h.o.Provider,{value:I,children:(0,A.jsx)(B.d,{invitation:l.body,breakpointEltRef:R,callToActionClicked:_})});case G.pd.READY_TO_JOIN_ALREADY_CREATED_BLEND:return k&&T>=2?(0,A.jsx)(h.o.Provider,{value:I,children:(0,A.jsx)(y,{invitation:{...l.body,title:u.R.get("blend.link-invialid.header"),subtitle:u.R.get("blend.link-invalid.subtitle"),button_text:u.R.get("blend.invite.button-title")},callToActionClicked:f,breakpointEltRef:R})}):(0,A.jsx)(h.o.Provider,{value:I,children:(0,A.jsx)(P,{invitation:l.body,callToActionClicked:_,breakpointEltRef:R})});case G.pd.MAX_MEMBERS:return(0,A.jsx)(h.o.Provider,{value:I,children:(0,A.jsx)(y,{invitation:l.body,callToActionClicked:f,breakpointEltRef:R})});case G.pd.PENDING_INVITATION:return(0,A.jsx)(h.o.Provider,{value:I,children:(0,A.jsx)(B.d,{invitation:l.body,callToActionClicked:f,breakpointEltRef:R})});default:return(0,A.jsx)(U.A,{timeoutInMs:1e3,hasError:!0,errorMessage:u.R.get("error.generic")})}};var H=i(62538);const q=({invitationId:e})=>{const{user:t}=(0,l.d4)(o.Ht);return t?(0,A.jsx)(n.Suspense,{fallback:null,children:(0,A.jsx)(W,{invitationId:e})}):(0,A.jsx)(H.A,{})},K=(0,n.memo)((()=>{const{invitationId:e=""}=(0,a.g)();return(0,A.jsx)(q,{invitationId:e})}))},45324:(e,t,i)=>{i.d(t,{A:()=>n});const n={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",container:"yMoj4jXSudxZ6BkKxV2E",TwoUsers:"IDgUCqAbkRah6OFywv1q",subtitle:"qmKxO5qV4XmVYfpFpaDA",facepile:"nWMdWl40O8K7HQT8Tagc",title:"csRAeNipsu1camQTMiIU",button:"nxFBywAeAI8Zk2fav3Yj",userList:"lxPLQIPb1VSV3VL18Ke3",userListContainer:"BzMKhmywgyIt6IUjcTGW",note:"DSdKNusLgsMX_iicYCU2"}}}]);
//# sourceMappingURL=xpui-routes-blend.js.map