"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[8785],{74762:(e,a,c)=>{c.r(a),c.d(a,{default:()=>S});var s=c(84875),r=c.n(s),t=c(29611),n=c(5701),l=(c(55330),c(50959)),h=c(76917),i=c(88798),o=c(84444),d=c(18895),g=c(69767),u=c(59242),p=c(61801),x=c(75654);const j="Ul_eSpTV7OKDhvXcgfzw",y="HFNTjI36ujrPacyLOwTT";var f=c(11527);const b=()=>{const{searchHistory:e,clearSearchHistory:a}=(0,x.u)(),c=(0,h.s0)(),{spec:s,logger:r,UBIFragment:t}=(0,u.fU)(o.createDesktopRecentSearchesEventFactory,{data:{uri:"spotify:app:recent-searches"}}),b=(0,l.useMemo)((()=>s.recentSearchesCardsFactory()),[s]),v=(0,l.useCallback)((()=>{const e=s.clearButtonFactory().hitClearRecentSearches();r.logInteraction(e),a(),c("/search")}),[a,r,c,s]),k=(0,l.useCallback)((s=>{const r=e.length;a(s),1===r&&c("/search")}),[a,c,e.length]);return 0===e.length?null:(0,f.jsxs)("div",{className:j,children:[(0,f.jsx)(t,{spec:b,children:(0,f.jsx)(p.P,{title:n.ag.get("search.title.recent-searches"),showAll:!0,children:e.map(((e,a)=>(0,f.jsx)(g.JL,{index:a,value:"search-history",children:(0,f.jsx)(d.q,{clearSearchHistory:k,entity:e,index:a})},e.uri)))})}),(0,f.jsx)("button",{onClick:v,className:y,children:(0,f.jsx)(i.x,{variant:"bodySmallBold",children:n.ag.get("search.clear-recent-searches")})})]})};var v=c(90343),k=c(8968),w=c(68881);const S=()=>{const e=(0,t.W6)(v.Dzq);return(0,f.jsxs)(g.JL,{value:"search-page",children:[(0,f.jsx)(k.$,{children:n.ag.get("search.page-title")}),(0,f.jsx)("div",{className:r()("contentSpacing",{[w.Z.narrowPage]:e}),id:"searchPage",children:(0,f.jsx)(b,{})})]})}}}]);
//# sourceMappingURL=xpui-routes-recent-searches.js.map