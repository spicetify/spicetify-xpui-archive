"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[8493],{92453:(e,t,n)=>{n.d(t,{AboutSpotifyModal:()=>O});var s=n(79474),a=n(99754),l=n(98764),i=n(23689),o=n(14056),r=n(8548),u=n(12555),c=n(82274),d=n(55154);const p="hbpwhf54ljdKrhNTq4mA";var m=n(13274);const h=()=>{const e=(0,s.useContext)(u.b),t=(0,c.k)(),n=(0,s.useCallback)((()=>{e.prepareUpdate()}),[e]),a=(0,s.useCallback)((()=>{e.applyUpdate()}),[e]);switch(t?.state){case d.D.UPDATE_AVAILABLE:return(0,m.jsxs)("div",{children:[o.Ru.get("about.upgrade.pending",t.version)," ",(0,m.jsx)("button",{className:p,onClick:n,children:o.Ru.get("about.upgrade.pending_link")})]});case d.D.UPDATE_PROCESSING:return(0,m.jsx)("div",{children:o.Ru.get("about.upgrade.downloading")});case d.D.UPDATE_READY:return(0,m.jsxs)("div",{children:[o.Ru.get("about.upgrade.downloaded",t.version)," ",(0,m.jsx)("button",{className:p,onClick:a,children:o.Ru.get("about.upgrade.restart_link")})]});case d.D.UPDATE_NONE:default:return null}};var b=n(74089),x=n(72653);const g="qi0hX8uXrbQyS6tvdDBt",f="WomzHWnDO_yFyjnkd49P",j="R83hOohwVshnd6bEkDO4",k=new Map([["Win32",o.Ru.get("desktop-about.platform-win-x86")],["Win32_x86_64",o.Ru.get("desktop-about.platform-win-x86-64")],["Win32_ARM64",o.Ru.get("desktop-about.platform-win-arm-64")],["OSX",o.Ru.get("desktop-about.platform-mac-x86")],["OSX_ARM64",o.Ru.get("desktop-about.platform-mac-arm-64")],["Linux",o.Ru.get("desktop-about.platform-linux")]]),v=()=>{const e=(0,s.useRef)(null),{settings:t}=(0,x.t0)(),n=function(){const e=(0,s.useContext)(u.b),[t,n]=(0,s.useState)(null);return(0,s.useEffect)((()=>{let t=!0;return e.getVersionInfo().then((e=>{t&&n(e)})),()=>{t=!1}}),[e,n]),t}(),a=o.Ru.get("desktop-about.platform-unknown");if(null===n)return null;const l="1"===t.values.employee,i=t.values["app.enable-developer-mode"],r=l?n.containerBuildType:"",c=k.get(n.containerPlatform)??a,d=o.Ru.get("desktop-about.platform",{employee_build_type:r},{platform:c}),p=o.Ru.get("desktop-about.copy-version-info-tooltip");return(0,m.jsxs)("div",{className:g,children:[(0,m.jsxs)("div",{className:f,ref:e,children:[(0,m.jsx)("div",{children:d}),(0,m.jsx)("div",{children:n.containerVersion}),!!i&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{children:n.uiVersion}),(0,m.jsx)("div",{children:n.cefVersion}),(0,m.jsx)("div",{children:n.cefRuntime}),(0,m.jsx)("div",{children:n.buildSystem})]})]}),(0,m.jsx)("button",{title:p,className:j,onClick:()=>{e.current&&(0,b.l)(e.current.innerText)},children:"⎘"})]})};var R=n(80156),_=n(22269),A=n(60178);const C="UnLGG6p932k7WyjkB9Vo",N="GSFvITwD84dS2JA62Mtj",y="KlzblASEYfUfaykBFZgM",w="Ifnz1lh1jjvqPqJ4KPo8",D="XF1XXenkrbdAK2rRoxoU",O=(0,s.memo)((function(){const e=(0,a.wA)(),{isOpen:t}=(0,a.d4)((e=>e.aboutSpotify)),n=new Date("2024-05-03").getUTCFullYear().toString(),u=(0,s.useCallback)((()=>{e((0,R.DP)())}),[e]);return(0,m.jsx)(_.A,{animated:!0,isOpen:t,onRequestClose:u,contentLabel:o.Ru.get("about.title_label"),children:(0,m.jsxs)("div",{className:C,children:[(0,m.jsxs)("main",{className:y,children:[(0,m.jsx)(A.A,{noLink:!0,hasText:!0}),(0,m.jsx)(v,{}),(0,m.jsx)(h,{}),(0,m.jsx)(l.E,{as:"div",variant:"marginal",className:w,children:(0,m.jsx)(r.y,{source:o.Ru.get("about.copyright",n),paragraphClassName:D})})]}),(0,m.jsx)("button",{"aria-label":o.Ru.get("close_button_action"),className:N,onClick:u,children:(0,m.jsx)(i.M,{size:"medium"})})]})})}))},94473:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x,mapDispatchToProps:()=>b});var s=n(99754),a=n(51716),l=n(98764),i=n(61080),o=n(14056),r=n(22269);const u="uYKs_kQMPOziaeDj877B",c="i8qeSJJVx4PXb7fsvOTd",d="WhIzm3S3R6Ker3XvpYW6",p="qsKpcFrhrA8KtuTVIN_y";var m=n(13274);const h=({isOpen:e,onClose:t})=>(0,m.jsx)(r.A,{isOpen:e,onRequestClose:t,contentLabel:o.Ru.get("licenses.title"),children:(0,m.jsxs)("div",{className:u,children:[(0,m.jsxs)("main",{className:c,children:[(0,m.jsx)(l.E,{as:"h1",variant:"titleMedium",semanticColor:"textBase",children:o.Ru.get("licenses.title")}),(0,m.jsx)("iframe",{className:d,title:o.Ru.get("licenses.title"),src:"/licenses.html"})]}),(0,m.jsx)("div",{className:p,children:(0,m.jsx)(i.$,{onClick:t,children:o.Ru.get("close_button_action")})})]})});const b=e=>({hide:()=>e((0,a.ku)())}),x=(0,s.Ng)((e=>({isOpen:e.licenses.isOpen})),b)((function({isOpen:e,hide:t}){return(0,m.jsx)(h,{isOpen:e,onClose:t})}))}}]);
//# sourceMappingURL=xpui-desktop-modals.js.map