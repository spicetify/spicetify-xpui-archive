"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3538],{73538:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var s=a(79474),d=a(55732),n=a(84958),i=a(9997),l=a(42397),r=a(98764),o=a(2394),c=a(78278),h=a(74266),u=a(69956),v=a(83856),b=a(14056),x=a(32371),g=a(94710),m=a(59659);const _="oDE2lz5yWefYgu3avClU",f="nhMdxhHua8Ngp46Cr2MG";var w=a(13274);const p="40px",y=({leavebehinds:e})=>{let t;return 1===e.length&&(t=(0,w.jsx)(r.E,{variant:"bodySmallBold",semanticColor:"textBase",children:e[0].advertiser})),2===e.length&&(t=b.Ru.get("podcast-ads.recent_ads_just_two",(0,w.jsx)(r.E,{variant:"bodySmallBold",semanticColor:"textBase",children:e[0].advertiser}),(0,w.jsx)(r.E,{variant:"bodySmallBold",semanticColor:"textBase",children:e[1].advertiser}))),e.length>2&&(t=b.Ru.get("podcast-ads.recent_ads_more_than_two",(0,w.jsx)(r.E,{variant:"bodySmallBold",semanticColor:"textBase",children:e[0].advertiser}),(0,w.jsx)(r.E,{variant:"bodySmallBold",semanticColor:"textBase",children:e[1].advertiser}))),(0,w.jsxs)(r.E,{variant:"bodySmall",semanticColor:"textSubdued","data-testid":"show-leavebehinds-text",children:[b.Ru.get("podcast-ads.recent_ads_from"),t]})},j=({leavebehinds:e,uri:t,surface:a})=>{const n=(0,g.vh)();if((0,s.useEffect)((()=>{t&&e.length>0&&n.send((0,u.x)({leavebehind_request_id:e[0].requestId,event:"event_viewed",event_reason:`viewed_on_${(0,d.Fh)(a).toLowerCase()}`,surface:(0,d.Fh)(a),uri:t}))}),[n,e,t,a]),0===e.length)return null;const l=(0,v.o_)(t)?.id,h=1===e.length?e[0].clickthroughUrl:(0,m.V)(l),j=i.Qd,B=e.length>j,E=e.length-(j-1),S=e.slice(0,B?j-1:j);return(0,w.jsx)(x.default,{to:h,pathname:e.length>1?h:void 0,state:{uri:t},className:f,onClick:()=>n.send((0,u.x)({leavebehind_request_id:e[0].requestId,event:"event_clicked",event_reason:"cta_see_all",surface:(0,d.Fh)(a),uri:t})),"data-testid":"show-leavebehinds-container",children:(0,w.jsx)(o.v,{layout:"wide",variant:"tinted",size:"xl",id:"show-leavebehinds",title:(0,w.jsxs)("div",{className:_,"data-testid":"show-leavebehinds-logos-container",children:[S.map((e=>(0,w.jsx)(c.C,{"data-testid":"show-leavebehind-image",src:e.displayImage.src,alt:e.displayImage.alt,imageHeight:p,imageWidth:p},e.adId))),B?(0,w.jsx)(C,{"data-testid":"show-leavebehinds-more-count-indicator",variant:"tinted",minBlockSize:p,borderRadius:"4px",padding:"6px",children:(0,w.jsx)(r.E,{variant:"bodyMedium","data-testid":"show-leavebehinds-more-count-indicator-text",children:b.Ru.get("podcast-ads.show_more_indicator",E)})}):null]}),body:(0,w.jsx)(y,{leavebehinds:e})})})};var C=(0,l.Ay)(h.a).withConfig({displayName:"LeavebehindsPreview___StyledBox",componentId:"sc-gxwbwa-0"})({backgroundColor:"#121212",width:"40px",display:"flex",alignItems:"center",justifyContent:"center"});const B=d.ui.SHOW_PAGE;function E({uri:e}){const{data:t,error:a,getLeavebehinds:d}=(0,n.A)({surface:B,uri:e});(0,s.useEffect)((()=>{d()}),[d]);const l=(0,s.useMemo)((()=>t?(0,i.iT)(t,e):[]),[t?.requestId]);return a||t?.leavebehindAds&&t?.leavebehindAds?.length<1?null:(0,w.jsx)(j,{leavebehinds:l,uri:e,surface:B})}}}]);
//# sourceMappingURL=3538.js.map