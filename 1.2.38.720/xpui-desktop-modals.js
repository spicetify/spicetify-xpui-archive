"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[8493],{25630:(e,n,t)=>{t.r(n),t.d(n,{AboutSpotifyModal:()=>S});t(62172),t(66874),t(69645),t(45991);var s=t(30758),i=t(45976),a=t(54925),l=t(88728),r=t(59081),o=t(13149),u=t(59990),c=t(18517),d=t(76473);const p="hbpwhf54ljdKrhNTq4mA";var f=t(86070),m=function(){var e=(0,s.useContext)(u.b),n=(0,c.k)(),t=(0,s.useCallback)((function(){e.prepareUpdate()}),[e]),i=(0,s.useCallback)((function(){e.applyUpdate()}),[e]);switch(null==n?void 0:n.state){case d.D.UPDATE_AVAILABLE:return(0,f.jsxs)("div",{children:[r.Ru.get("about.upgrade.pending",n.version)," ",(0,f.jsx)("button",{className:p,onClick:t,children:r.Ru.get("about.upgrade.pending_link")})]});case d.D.UPDATE_PROCESSING:return(0,f.jsx)("div",{children:r.Ru.get("about.upgrade.downloading")});case d.D.UPDATE_READY:return(0,f.jsxs)("div",{children:[r.Ru.get("about.upgrade.downloaded",n.version)," ",(0,f.jsx)("button",{className:p,onClick:i,children:r.Ru.get("about.upgrade.restart_link")})]});case d.D.UPDATE_NONE:default:return null}},h=(t(60850),t(55815),t(36490),t(4207),t(26017));var b=t(51736),v=t(33115);const x="qi0hX8uXrbQyS6tvdDBt",g="WomzHWnDO_yFyjnkd49P",j="R83hOohwVshnd6bEkDO4";var k=new Map([["Win32",r.Ru.get("desktop-about.platform-win-x86")],["Win32_x86_64",r.Ru.get("desktop-about.platform-win-x86-64")],["Win32_ARM64",r.Ru.get("desktop-about.platform-win-arm-64")],["OSX",r.Ru.get("desktop-about.platform-mac-x86")],["OSX_ARM64",r.Ru.get("desktop-about.platform-mac-arm-64")],["Linux",r.Ru.get("desktop-about.platform-linux")]]),R=function(){var e,n=(0,s.useRef)(null),t=(0,v.t0)().settings,i=function(){var e=(0,s.useContext)(u.b),n=(0,s.useState)(null),t=(0,h.A)(n,2),i=t[0],a=t[1];return(0,s.useEffect)((function(){var n=!0;return e.getVersionInfo().then((function(e){n&&a(e)})),function(){n=!1}}),[e,a]),i}(),a=r.Ru.get("desktop-about.platform-unknown");if(null===i)return null;var l="1"===t.values.employee,o=t.values["app.enable-developer-mode"],c=l?i.containerBuildType:"",d=null!==(e=k.get(i.containerPlatform))&&void 0!==e?e:a,p=r.Ru.get("desktop-about.platform",{employee_build_type:c},{platform:d}),m=r.Ru.get("desktop-about.copy-version-info-tooltip");return(0,f.jsxs)("div",{className:x,children:[(0,f.jsxs)("div",{className:g,ref:n,children:[(0,f.jsx)("div",{children:p}),(0,f.jsx)("div",{children:i.containerVersion}),!!o&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{children:i.uiVersion}),(0,f.jsx)("div",{children:i.cefVersion}),(0,f.jsx)("div",{children:i.cefRuntime}),(0,f.jsx)("div",{children:i.buildSystem})]})]}),(0,f.jsx)("button",{title:m,className:j,onClick:function(){n.current&&(0,b.l)(n.current.innerText)},children:"⎘"})]})},_=t(42583),A=t(16655),C=t(32294);const N="UnLGG6p932k7WyjkB9Vo",y="GSFvITwD84dS2JA62Mtj",w="KlzblASEYfUfaykBFZgM",D="Ifnz1lh1jjvqPqJ4KPo8",O="XF1XXenkrbdAK2rRoxoU";var S=(0,s.memo)((function(){var e=(0,i.wA)(),n=(0,i.d4)((function(e){return e.aboutSpotify})).isOpen,t=new Date("2024-05-17").getUTCFullYear().toString(),u=(0,s.useCallback)((function(){e((0,_.DP)())}),[e]);return(0,f.jsx)(A.A,{animated:!0,isOpen:n,onRequestClose:u,contentLabel:r.Ru.get("about.title_label"),children:(0,f.jsxs)("div",{className:N,children:[(0,f.jsxs)("main",{className:w,children:[(0,f.jsx)(C.A,{noLink:!0,hasText:!0}),(0,f.jsx)(R,{}),(0,f.jsx)(m,{}),(0,f.jsx)(a.E,{as:"div",variant:"marginal",className:D,children:(0,f.jsx)(o.y,{source:r.Ru.get("about.copyright",t),paragraphClassName:O})})]}),(0,f.jsx)("button",{"aria-label":r.Ru.get("close_button_action"),className:y,onClick:u,children:(0,f.jsx)(l.M,{size:"medium"})})]})})}))},58011:(e,n,t)=>{t.r(n),t.d(n,{default:()=>b,mapDispatchToProps:()=>h});var s=t(45976),i=t(85519),a=t(54925),l=t(32303),r=t(59081),o=t(16655);const u="uYKs_kQMPOziaeDj877B",c="i8qeSJJVx4PXb7fsvOTd",d="WhIzm3S3R6Ker3XvpYW6",p="qsKpcFrhrA8KtuTVIN_y";var f=t(86070),m=function(e){var n=e.isOpen,t=e.onClose;return(0,f.jsx)(o.A,{isOpen:n,onRequestClose:t,contentLabel:r.Ru.get("licenses.title"),children:(0,f.jsxs)("div",{className:u,children:[(0,f.jsxs)("main",{className:c,children:[(0,f.jsx)(a.E,{as:"h1",variant:"titleMedium",semanticColor:"textBase",children:r.Ru.get("licenses.title")}),(0,f.jsx)("iframe",{className:d,title:r.Ru.get("licenses.title"),src:"/licenses.html"})]}),(0,f.jsx)("div",{className:p,children:(0,f.jsx)(l.$,{onClick:t,children:r.Ru.get("close_button_action")})})]})})};var h=function(e){return{hide:function(){return e((0,i.ku)())}}};const b=(0,s.Ng)((function(e){return{isOpen:e.licenses.isOpen}}),h)((function(e){var n=e.isOpen,t=e.hide;return(0,f.jsx)(m,{isOpen:n,onClose:t})}))}}]);
//# sourceMappingURL=xpui-desktop-modals.js.map