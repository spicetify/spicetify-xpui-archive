"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[42],{79586:(e,t,i)=>{i.d(t,{O:()=>h});var n=i(58184),l=i(95477),a=i(92937),o=i(86001),r=i(17893),s=i(89515),d=i(86070);const c={[o.E.MEDIUM]:"titleMedium",[o.E.LARGE]:"titleMedium",[o.E.XLARGE]:"headlineMedium"},u={[o.E.LARGE]:"bodyMedium",[o.E.XLARGE]:"bodyMediumBold"},b={[o.E.LARGE]:"bodySmall",[o.E.XLARGE]:"bodySmall"},h=({title:e,subtitle:t,body:i,footnote:o,buttonText:h,callToActionClicked:m})=>{const x=(0,r.y)(),E=x&&c[x]||"titleSmall",v=x&&u[x]||"bodySmall",p=x&&b[x]||"marginal";return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.E,{as:"h1",variant:E,semanticColor:"textBase",className:s.A.title,children:e}),(0,d.jsx)(n.E,{as:"h2",variant:v,semanticColor:"textSubdued",className:s.A.subtitle,children:t}),i,m&&(0,d.jsx)(l.$,{className:s.A.button,colorSet:"invertedLight",onClick:m,"data-testid":a.OL,children:h}),o&&(0,d.jsx)(n.E,{as:"p",variant:p,semanticColor:"textSubdued",className:s.A.note,children:o})]})}},87566:(e,t,i)=>{i.d(t,{d:()=>A});var n=i(97500),l=i.n(n),a=i(8539),o=i(61270),r=i(82342),s=i(79586),d=i(92937);const c="gJmoZouW_m4rUBRFHmu7",u="r4j9hiYJ8q0SQpEsgvSh";var b=i(86070);const h=e=>(0,b.jsx)("div",{className:c,children:(0,b.jsx)("div",{className:u,children:(0,b.jsx)("svg",{width:e.iconSize,height:e.iconSize,fill:"currentColor",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",children:(0,b.jsx)("path",{d:"M33 31.998v-23h-2v23H8v2h23v23h2v-23h23v-2z"})})})});var m=i(86001),x=i(17893),E=i(89515);const v={name:"",username:"",image_url:null,hash:""},p={[m.E.MEDIUM]:164,[m.E.LARGE]:164,[m.E.XLARGE]:270},g=(e,t)=>(0,b.jsx)(o.e,{label:a.Ru.get("web-player.blend.invite.button-title"),images:[],width:e,userIconSize:"xxlarge",customPlaceholder:(0,b.jsx)(h,{iconSize:t}),piled:!0}),A=({invitation:e,callToActionClicked:t,breakpointEltRef:i})=>{const n=!!e.members?.length,c=n&&e.members?.[0]||e.recipient||v,u=n&&e.recipient||null,h=(0,x.y)(),m=h&&p[h]||128,A=Math.round(.475*m);return(0,b.jsxs)("div",{className:l()(E.A.container,E.A.TwoUsers),"data-testid":d.xg,ref:i,children:[(0,b.jsx)(r.Q,{children:a.Ru.get("blend.invite.page-title")}),(0,b.jsxs)("div",{className:E.A.facepile,children:[(0,b.jsx)(o.e,{label:c.name,images:[{url:c.image_url??"",width:m,height:m}],width:m,userIconSize:"xxlarge"}),u?(0,b.jsx)(o.e,{label:u.name,images:[{url:u.image_url??"",width:m,height:m}],width:m,userIconSize:"xxlarge",piled:!0}):g(m,A)]}),(0,b.jsx)(s.O,{title:e.title,subtitle:e.subtitle,footnote:e.footnote,buttonText:e.button_text,callToActionClicked:t})]})}},70099:(e,t,i)=>{i.d(t,{A:()=>n});const n=()=>{const e=window.location.href;return window.location.href=`https://accounts.spotify.com/login?continue=${encodeURIComponent(e)}`,null}},92937:(e,t,i)=>{i.d(t,{OL:()=>r,VE:()=>n,ev:()=>a,rg:()=>o,xg:()=>l});const n="blend-deleted-container",l="blend-two-user-container",a="blend-multi-user-container",o="blend-full-container",r="blend-cta-button"},81063:(e,t,i)=>{i.d(t,{B6:()=>r,OE:()=>o,YW:()=>a,pd:()=>l});var n=i(50778);let l=function(e){return e.PENDING_INVITATION="PENDING_INVITATION",e.READY_TO_JOIN_EMPTY_BLEND="READY_TO_JOIN_EMPTY_BLEND",e.READY_TO_JOIN_ALREADY_CREATED_BLEND="READY_TO_JOIN_ALREADY_CREATED_BLEND",e.MAX_MEMBERS="MAX_MEMBERS",e.ALREADY_JOINED="ALREADY_JOINED",e.DELETED="DELETED",e}({});const a=(e,t)=>e.build().withHost(n.t2).withPath(`/v3/view-invitation/${encodeURIComponent(t)}`).withEndpointIdentifier("v3/view-invitation/{invitationId}").withLocale(e.locale).send(),o=(e,t)=>e.build().withHost(n.t2).withMethod("PUT").withPath(`/v2/join/${encodeURIComponent(t)}`).withEndpointIdentifier("join/{invitationId}").send(),r=e=>e.build().withHost(n.t2).withMethod("POST").withPath("/v1/generate").withEndpointIdentifier("v1/generate").send()},94513:(e,t,i)=>{i.d(t,{G:()=>a});var n=i(86001),l=i(32028);const a=()=>(0,l.x)({[n.E.SMALL]:536,[n.E.MEDIUM]:792,[n.E.LARGE]:1048,[n.E.XLARGE]:1688})},91105:(e,t,i)=>{i.d(t,{y:()=>u});var n=i(30758),l=i(93240),a=i(41978),o=i(8539),r=i(81063),s=i(68688),d=i(82933),c=i(7683);function u(e,t){const{user:i}=(0,a.d4)(s.Ht),{enqueueSnackbar:u}=(0,l.dh)(),b=(0,d.A9)(),h=(0,n.useCallback)((async()=>{const e=await(0,r.B6)(b),t=e.body?.invite;if(!t)throw new Error("unable to generate invite link");return i?.display_name?o.Ru.get("blend.invite.body-with-name",i.display_name,e.body?.invite):o.Ru.get("blend.invite.body-without-name",e.body?.invite)}),[i?.display_name,b]);return async()=>{try{await(0,c.l)(h()),u(o.Ru.get("feedback.link-copied"))}catch{u(o.Ru.get("error.generic"))}if(e&&t){const i=e.inviteButtonFactory().hitCopyToClipboard();t.logInteraction(i)}}}},66113:(e,t,i)=>{i.r(t),i.d(t,{default:()=>A});var n=i(30758),l=i(41978),a=i(25762),o=i(8539),r=i(82342),s=i(87566),d=i(70099),c=i(81063),u=i(94513),b=i(91105),h=i(68688),m=i(17893),x=i(58400),E=i(75610),v=i(59943),p=i(86070);const g={page_type:c.pd.PENDING_INVITATION,get title(){return o.Ru.get("web-player.blend.group-invite.header")},get subtitle(){return o.Ru.get("web-player.blend.duo-invite.description")},get button_text(){return o.Ru.get("web-player.blend.invite.button-title")},footnote:null,members:[],recipient:null,members_title:null,playlist_uri:null},A=()=>{const{spec:e,logger:t}=(0,x.r)(a.f,{}),i=(0,b.y)(e,t),{ref:c,breakpoint:A}=(0,u.G)(),{user:y}=(0,l.d4)(h.Ht),j=y?.uri?(0,E.v)(y?.uri):"",w=(e=>({...g,members:[e],footnote:o.Ru.get("web-player.blend.group-invite.warning")}))({name:y?.display_name||"",username:j,image_url:(0,v.g)(y?.images)?.url||null,hash:""});return y?(0,p.jsxs)(n.Suspense,{fallback:null,children:[(0,p.jsx)(r.Q,{children:o.Ru.get("web-player.blend.invite.page-title")}),(0,p.jsx)(m.o.Provider,{value:A,children:(0,p.jsx)(s.d,{invitation:w,callToActionClicked:i,breakpointEltRef:c})})]}):(0,p.jsx)(d.A,{})}},96952:(e,t,i)=>{i.r(t),i.d(t,{default:()=>F});var n=i(30758),l=i(41978),a=i(33165),o=i(64252),r=i(17635),s=i(25762),d=i(96839),c=i(8539),u=i(57528),b=i(11217),h=i(79586),m=i(92937),x=i(89515),E=i(86070);const v=({invitation:e,callToActionClicked:t,breakpointEltRef:i})=>(0,E.jsxs)("div",{className:x.A.container,"data-testid":m.rg,ref:i,children:[(0,E.jsx)(b.u,{size:"xxlarge"}),(0,E.jsx)(h.O,{title:e.title,subtitle:e.subtitle,buttonText:e.button_text,footnote:null,callToActionClicked:t})]});var p=i(82342),g=i(97500),A=i.n(g),y=i(58184),j=i(61270),w=i(87349),_=i(20610),R=i(36041);const f="HKAYWYmxd5Ie8WSi0a4y",I="i52u_T3b50wraodIaORk",N="xakiNVMlUf6geF67FEgy",T="IRhTesoeIiwswlly0Dvg",k="LNJzE17iskXWmfKAzY4U",L="qzBr7X7cdLUhWdk0r8lL",D=({uri:e,imageUrl:t,name:i})=>(0,E.jsx)("li",{children:(0,E.jsx)(w.h,{menu:(0,E.jsx)(_.B,{uri:e}),children:(0,E.jsx)(R.N,{to:e,children:(0,E.jsxs)("div",{className:T,children:[(0,E.jsx)(j.e,{images:[{url:t,width:null,height:null}],label:i,width:32,userIconSize:"medium",className:k}),(0,E.jsx)(y.E,{variant:"bodySmallBold",className:"standalone-ellipsis-one-line",semanticColor:"textBase",children:i})]})})})}),C=({members:e,headingText:t,className:i})=>(0,E.jsxs)("div",{className:A()(f,i),children:[(0,E.jsx)("div",{children:(0,E.jsx)(y.E,{as:"h4",variant:"marginalBold",semanticColor:"textSubdued",className:I,children:t})}),(0,E.jsx)("ul",{className:N,children:e&&e.map((e=>(0,E.jsx)(D,{imageUrl:e.image_url||"",name:e.name,uri:(0,d.Qj)(e.username).toURI()},e.username)))}),(0,E.jsx)("div",{className:L})]}),M=({invitation:e,callToActionClicked:t,breakpointEltRef:i})=>{const n=e.members||[],l=(0,E.jsx)("div",{className:x.A.userListContainer,"data-testid":m.ev,children:(0,E.jsx)(C,{className:x.A.userList,headingText:e.members_title,members:n})});return(0,E.jsxs)("div",{className:x.A.container,ref:i,children:[(0,E.jsx)(p.Q,{children:c.Ru.get("blend.join.title")}),(0,E.jsx)(h.O,{title:e.title,subtitle:e.subtitle,footnote:e.footnote,body:l,buttonText:e.button_text,callToActionClicked:t})]})};var O=i(87566),S=i(81063),Y=i(94513),B=i(91105),P=i(82092),U=i(82933);var G=i(46600),z=i(17893),J=i(59518),V=i(58400);const X=({invitationId:e})=>{const t=(0,a.Zp)(),i=(0,r.NC)(G.CXJ),{data:l,error:b,loading:p}=(0,J.Z)(S.YW,[e]),{spec:g,logger:A}=(0,V.r)(s.f,{}),y=(0,B.y)(g,A),j=function(e,t,i){const{enqueueSnackbar:n}=(0,P.d)(),l=(0,U.A9)(),o=(0,a.Zp)();return async()=>{try{const t=await(0,S.OE)(l,e),i=(0,d.o_)(t?.body.playlist_uri).toURLPath(!0);if(!i)throw new Error("unable to join");o(i,{replace:!0})}catch{n(c.Ru.get("error.request-playlist-failure"))}if(t&&i){const e=t.joinButtonFactory().hitCreatePlaylist();i.logInteraction(e)}}}(e,g,A),{ref:w,breakpoint:_}=(0,Y.G)();(0,n.useEffect)((()=>{if(l?.body?.page_type===S.pd.ALREADY_JOINED){const e=(0,d.o_)(l?.body.playlist_uri)?.toURLPath(!0);e&&t(e,{replace:!0})}}),[l?.body?.page_type,l?.body?.playlist_uri,t]);const R=null===l||!l.body;if(R||p||b)return(0,E.jsx)(u.A,{timeoutInMs:1e3,hasError:!!b||!p&&R,errorMessage:c.Ru.get("error.generic")});const f=l?.body.members?.length||0,I=i===G.YVK.TWO_USER;switch(l?.body.page_type){case S.pd.DELETED:return(0,E.jsx)(z.o.Provider,{value:_,children:(0,E.jsxs)("div",{className:x.A.container,ref:w,"data-testid":m.VE,children:[(0,E.jsx)(o.x,{size:"xxlarge"}),(0,E.jsx)(h.O,{title:l.body.title,subtitle:l.body.subtitle,buttonText:l.body.button_text,footnote:l.body.footnote,callToActionClicked:y})]})});case S.pd.ALREADY_JOINED:return(0,E.jsx)(u.A,{hasError:!1,errorMessage:c.Ru.get("error.request-playlist-failure")});case S.pd.READY_TO_JOIN_EMPTY_BLEND:return(0,E.jsx)(z.o.Provider,{value:_,children:(0,E.jsx)(O.d,{invitation:l.body,breakpointEltRef:w,callToActionClicked:j})});case S.pd.READY_TO_JOIN_ALREADY_CREATED_BLEND:return I&&f>=2?(0,E.jsx)(z.o.Provider,{value:_,children:(0,E.jsx)(v,{invitation:{...l.body,title:c.Ru.get("blend.link-invialid.header"),subtitle:c.Ru.get("blend.link-invalid.subtitle"),button_text:c.Ru.get("blend.invite.button-title")},callToActionClicked:y,breakpointEltRef:w})}):(0,E.jsx)(z.o.Provider,{value:_,children:(0,E.jsx)(M,{invitation:l.body,callToActionClicked:j,breakpointEltRef:w})});case S.pd.MAX_MEMBERS:return(0,E.jsx)(z.o.Provider,{value:_,children:(0,E.jsx)(v,{invitation:l.body,callToActionClicked:y,breakpointEltRef:w})});case S.pd.PENDING_INVITATION:return(0,E.jsx)(z.o.Provider,{value:_,children:(0,E.jsx)(O.d,{invitation:l.body,callToActionClicked:y,breakpointEltRef:w})});default:return(0,E.jsx)(u.A,{timeoutInMs:1e3,hasError:!0,errorMessage:c.Ru.get("error.generic")})}};var W=i(70099),q=i(68688);const H=({invitationId:e})=>{const{user:t}=(0,l.d4)(q.Ht);return t?(0,E.jsx)(n.Suspense,{fallback:null,children:(0,E.jsx)(X,{invitationId:e})}):(0,E.jsx)(W.A,{})},F=(0,n.memo)((()=>{const{invitationId:e=""}=(0,a.g)();return(0,E.jsx)(H,{invitationId:e})}))},89515:(e,t,i)=>{i.d(t,{A:()=>n});const n={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",container:"yMoj4jXSudxZ6BkKxV2E",TwoUsers:"IDgUCqAbkRah6OFywv1q",subtitle:"qmKxO5qV4XmVYfpFpaDA",facepile:"nWMdWl40O8K7HQT8Tagc",title:"csRAeNipsu1camQTMiIU",button:"nxFBywAeAI8Zk2fav3Yj",userList:"lxPLQIPb1VSV3VL18Ke3",userListContainer:"BzMKhmywgyIt6IUjcTGW",note:"DSdKNusLgsMX_iicYCU2"}}}]);
//# sourceMappingURL=xpui-routes-blend.js.map