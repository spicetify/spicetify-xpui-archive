"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3522],{68189:(e,t,l)=>{l.r(t),l.d(t,{default:()=>w});var i=l(79474),s=l(15945),a=l(14056),n=l(43997),o=l(27778),r=l(2477),c=l(98764),d=l(75257);const h="SsxBZ9Nwxg30ZcXUcUcJ",u="HVN1FVVriodEnWgn1GZ4",p="legiK6gOuEtSJvxYKoXc",x="N6dpLHX_oZBYC1FQy8SA",m="krXyPxbq59r39DlZdHzv",j="_o0S4kMO8jLyHmiTwjxg",y="yuK7YlDkSnTHzZph5sQq";var g=l(13274);function b(){const[e,t]=(0,i.useState)(r.Ay.isEnabled());return(0,g.jsxs)("div",{children:[" ",(0,g.jsx)(c.E,{as:"h4",variant:"titleSmall",semanticColor:"textBase",children:"Pseudo localization"}),(0,g.jsxs)("div",{children:[(0,g.jsxs)(c.E,{variant:"bodyMedium",children:["Perform"," ",(0,g.jsx)("a",{href:"https://en.wikipedia.org/wiki/Pseudolocalization",children:"pseudolocalization"})," ","against the DOM.",(0,g.jsx)("br",{})]}),(0,g.jsx)(c.E,{variant:"bodySmall",children:"In Accented English all Latin letters are replaced by accented Unicode counterparts which don't impair the readability of the content. This allows developers to quickly test if any given string is being correctly displayed in its 'translated' form. Additionally, simple heuristics are used to make certain words longer to better simulate the experience of international users."})]}),(0,g.jsx)("br",{}),(0,g.jsxs)("div",{className:y,children:[(0,g.jsx)(c.E,{as:"label",htmlFor:"pseudo-localization",variant:"bodyMedium",children:"Toggle pseudo-localization"}),(0,g.jsx)(d.l,{id:"pseudo-localization",value:e,onSelected:e=>{e?(t(!0),r.Ay.start()):(t(!1),r.Ay.stop(),window.location.reload())}})]})]})}var f=l(22653),v=l(72653);const w=()=>{const{settings:e}=(0,v.t0)(),t=(0,f.Q)(e.values),l=(0,i.useMemo)((()=>({localeForTranslation:a.Ru.getLocaleForTranslation(),localeForFormatting:a.Ru.getLocaleForTranslation(),translations:a.Ru.getTranslations()})),[]),[r,c]=(0,i.useState)(null);(0,i.useEffect)((()=>{const e={};return Promise.all(Object.keys(o.IB).map((async t=>{e[t]=await(0,n.N)(t)}))).then((()=>{c(e)})),()=>{a.Ru.initialize(l)}}),[l]);const[d,y]=(0,i.useState)(null),w=a.Ru.get.bind(a.Ru);return t?(0,g.jsxs)("div",{className:h,children:[(0,g.jsx)("h1",{className:u,children:"Locales"}),(0,g.jsx)("h3",{children:"You can use this tool to test if the Desktop client is able to properly render every locale with correct font-family within Desktop UI."}),(0,g.jsx)(b,{}),r?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:j,children:[(0,g.jsx)("p",{children:"Choose a string key from the dropdown to test it"}),(0,g.jsxs)("select",{onChange:e=>{y(e.target.value)},children:[(0,g.jsx)("option",{selected:null===d,children:"Select a key"}),Object.keys(r[s.h.en]||{}).map((e=>(0,g.jsx)("option",{selected:d===e,children:e},e)))]})]}),(0,g.jsx)("div",{className:p,children:Object.entries(o.IB).map((([e,{displayName:t,displayNameEn:l}])=>(e in r&&a.Ru.initialize({localeForTranslation:e,localeForFormatting:e,translations:r[e]}),(0,g.jsxs)("div",{className:x,children:[(0,g.jsxs)("h3",{children:[l," (",e,") (",t,")"]}),d?(0,g.jsx)("p",{className:m,children:e in r?w(d):"💥 Can't load dictionary 💥 "}):null]},e))))})]}):(0,g.jsx)("p",{children:"Please wait until we fetch all dictionaries"})]}):null}}}]);
//# sourceMappingURL=debug-locales.js.map