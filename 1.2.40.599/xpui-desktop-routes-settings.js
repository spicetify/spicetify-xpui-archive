"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1785],{15884:(e,t,n)=>{n.d(t,{Z:()=>c,h:()=>o});n(40313),n(24847);var r=n(30758),i=n(90056),a=n(58400),s=n(86070),l=(0,r.createContext)(null),c=function(e){var t=e.children,n=(0,a.r)(i.g,{}),r=n.spec,c=n.UBIFragment;return(0,s.jsx)(c,{spec:r,children:(0,s.jsx)(l.Provider,{value:n,children:t})})},o=function(){var e=(0,r.useContext)(l);if(null===e)throw new Error("useSettingsUBI must be used within a SettingsUBIProvider");return e}},54461:(e,t,n)=>{n.d(t,{A:()=>c,R:()=>l});var r=n(98866),i=(n(40313),n(24847),n(45191),n(62980),n(54858),n(36389),n(85194),n(27092),n(68925),n(31796),n(21467),n(22064),n(92114),n(77020),n(30758)),a=n(86070),s=(0,i.createContext)(void 0),l=function(e){var t=e.children,n=(0,i.useState)(!1),l=(0,r.A)(n,2),c=l[0],o=l[1],u=(0,i.useState)(new Set),d=(0,r.A)(u,2),h=d[0],v=d[1],f=(0,i.useCallback)((function(e,t){v((function(n){if(n.has(e)===t)return n;var r=new Set(n);return t?r.add(e):r.delete(e),r}))}),[]),S=h.size>0;return(0,a.jsx)(s.Provider,{value:{sectionMatch:c,setSectionMatch:o,sectionContainsMatch:S,setSectionFilterMatchQueryValue:f},children:t})},c=function(){var e=(0,i.useContext)(s);if(void 0===e)throw new Error("useSectionMatchState() must be used within a SectionFilterMatchContextProvider");return e}},32265:(e,t,n)=>{n.d(t,{W:()=>u});var r=n(25259),i=(n(9555),n(62980),n(75231),n(21977),n(30758)),a=n(58184),s=n(72368),l=n(35242),c=n(86070),o=["htmlString","children","htmlFor","semanticColor","variant","className"];function u(e){var t=e.htmlString,n=e.children,u=e.htmlFor,d=e.semanticColor,h=void 0===d?"textSubdued":d,v=e.variant,f=void 0===v?"bodySmall":v,S=e.className,g=(0,r.A)(e,o),m=(0,i.useContext)(l.g).filter;if(!n&&!t)return null;var x=n;return t&&(x=(0,c.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})),(0,c.jsx)(a.E,{as:"label",variant:f,semanticColor:h,htmlFor:u,className:S,"data-testid":g["data-testid"],children:m.length>0?(0,c.jsx)(s.M,{searchWords:[m],textToHighlight:n||t||""}):x})}},28684:(e,t,n)=>{n.d(t,{i:()=>o});n(9555),n(62980),n(75231),n(21977);var r=n(30758),i=n(39974),a=n(35242),s=n(54461);const l="BMtRRwqaJD_95vJFMFD0";var c=n(86070),o=function(e){var t=e.children,n=e.filterMatchQuery,o=(0,r.useContext)(a.g).filter,u=(0,s.A)(),d=u.setSectionFilterMatchQueryValue,h=u.sectionMatch,v=(0,i.C)(o,n);return(0,r.useEffect)((function(){d(n,v)}),[v,n,d]),h||v?(0,c.jsx)("div",{className:l,children:t}):null}},18971:(e,t,n)=>{n.d(t,{n:()=>a});const r="rtzkwMH3kqwgnS_BxP_t";var i=n(86070),a=function(e){var t=e.children;return(0,i.jsx)("div",{className:r,children:t})}},78301:(e,t,n)=>{n.d(t,{q:()=>l});var r=n(97500),i=n.n(r);const a="g2SG95QPZfbn5RINccth";var s=n(86070),l=function(e){var t=e.className,n=e.children;return(0,s.jsx)("div",{className:i()(a,t),children:n})}},39974:(e,t,n)=>{n.d(t,{C:()=>i});var r=n(14022),i=function(e,t){return"string"==typeof e&&"string"==typeof t?!(e.length>0)||null!==(0,r.u)(e,t):"boolean"!=typeof e||e}},74665:(e,t,n)=>{n.r(t),n.d(t,{SettingsLabel:()=>c.W,SettingsRow:()=>o.i,SettingsRowEnd:()=>d.n,SettingsRowStart:()=>u.q,default:()=>l});n(45191),n(62980),n(22711),n(36389),n(77020);var r=n(30758),i=n(15884),a=n(86070),s=(0,r.lazy)((function(){return Promise.all([n.e(4151),n.e(2617),n.e(2391)]).then(n.bind(n,45610))}));const l=function(){return(0,a.jsx)(i.Z,{children:(0,a.jsx)(s,{})})};var c=n(32265),o=n(28684),u=n(78301),d=n(18971)}}]);
//# sourceMappingURL=xpui-desktop-routes-settings.js.map