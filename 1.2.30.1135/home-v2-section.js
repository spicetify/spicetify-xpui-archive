"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[5070],{6333:(e,t,a)=>{a.d(t,{E:()=>i});var n=a(50959),s=a(11527);const i=e=>(0,s.jsx)(n.Suspense,{fallback:null,children:(0,n.createElement)((0,n.lazy)((async()=>{const{FeatureActivationSection:e}=await Promise.all([a.e(1814),a.e(9792)]).then(a.bind(a,64064));return{default:e}})),e)})},63327:(e,t,a)=>{a.r(t),a.d(t,{SKELETON_CARDS_COUNT:()=>E,default:()=>C});var n=a(82187),s=a.n(n),i=a(35869),r=a(12737),o=a(10992),c=a(39189),l=a(30760),d=a(73196),u=a(47200),m=a(85054),h=a(6333),g=a(54329),x=(a(38910),a(30485)),S=a(84099),j=a(11527);const p=({section:e})=>(0,j.jsx)(x.q,{pageId:e.uri,title:e.data.title?.text??"",showAll:!0,index:0,id:e.uri,children:e.sectionItems.items.map(S.x)});var f=a(81307);const v=({section:e})=>{switch(e.data?.__typename){case"HomeGenericSectionData":return(0,j.jsx)(p,{section:(0,f.f)(e,e.data)});case"HomeShortsSectionData":case"HomeRecentlyPlayedSectionData":case"HomeFeedBaselineSectionData":case"HomeNativeAdsSectionData":case"HomeOnboardingSectionData":case null:case void 0:case"HomeFeatureActivationSectionData":case"HomeOnboardingSectionDataV2":case"HomeYourDJSectionData":return null;case"HomeFeatureActivationSectionDataV2":return(0,j.jsx)(h.E,{sectionItems:e.sectionItems.items,showAll:!0,uri:e.uri,localStorageKey:e.data.localStorageKey});default:return(0,g._)(e.data),null}};var y=a(50959),H=a(58721),_=a(82165);const b=(0,y.memo)((({cardCount:e})=>(0,j.jsx)(_.X,{isLoading:!0,showAll:!0,withTitle:!0,children:[...new Array(e).keys()].map(((e,t)=>(0,j.jsx)(H.A,{isLoading:!0},t)))})));var w=a(38317),D=a(82298),A=a(78267);const E=10,N=({uri:e})=>{const t=(0,i.v9)(D.rZ),{data:a,error:n,loading:c}=(0,m.xf)({uri:e,timeZone:(0,w.UE)(),sp_t:(0,u.vQ)("sp_t")??"",country:t},{gcTime:w.us,staleTime:w.fS}),h=(0,r.W6)(d.NHp);if(c)return(0,j.jsx)("section",{"data-testid":"home-page",children:(0,j.jsx)("div",{className:A.Z.home,children:(0,j.jsx)("div",{className:s()(A.Z.content,"contentSpacing"),children:(0,j.jsx)(b,{cardCount:E})})})});if(null!==n)return(0,j.jsx)(l.h,{hasError:!0,errorMessage:o.ag.get("error.generic")});const g=a?.homeSections;if("HomeSectionCollection"!==g?.__typename||0===g.sections.length)return(0,j.jsx)(l.h,{hasError:!0,errorMessage:o.ag.get("error.generic")});const x=g.sections[0];return"HomeSection"!==x.__typename?(0,j.jsx)(l.h,{hasError:!0,errorMessage:o.ag.get("error.generic")}):(0,j.jsx)("section",{"data-testid":"home-section-page",children:(0,j.jsx)("div",{className:s()(A.Z.home,{[A.Z.withGlobalNavBarEnabled]:h}),children:(0,j.jsx)("div",{className:s()(A.Z.content,"contentSpacing"),children:(0,j.jsx)(v,{section:x})})})})},C=({uri:e})=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c.$,{children:o.ag.get("page.generic-title")}),(0,j.jsx)(N,{uri:e})]})}}]);
//# sourceMappingURL=home-v2-section.js.map