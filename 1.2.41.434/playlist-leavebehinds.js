"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[9718],{84988:(e,l,s)=>{s.r(l),s.d(l,{default:()=>h});var a=s(30758),t=s(41978),i=s(96839),n=s(45150),u=s(91867),r=s(2749),d=s(60594),p=s(86070);const o=({uri:e,playlistId:l,leavebehinds:s,playlistName:a})=>{const t=r.ui.PLAYLIST;return s&&s.length>0?(0,p.jsx)(n.o,{surface:t,uri:e,leavebehinds:s.slice(0,d.pU),seeAllButton:s.length>d.pU?(0,p.jsx)(u.J,{leavebehinds:s,surface:t,pathname:`/playlist/${l}/see-all-ads`,state:{uri:e,playlistName:a},uri:e}):null}):null};var c=s(73161);const f=e=>e.ads.sponsoredPlaylist.sponsoredPlaylist.get("allSponsorships"),h=({uri:e,playlistName:l})=>{const s=(0,i.o_)(e)?.id,n=(0,t.d4)(f),u=n?.some((e=>e.playlistId===s)),h=r.ui.PLAYLIST,{data:b,error:y,getLeavebehinds:v}=(0,c.A)({surface:h,uri:e,playlistName:l});if((0,a.useEffect)((()=>{v()}),[v]),!b?.leavebehindAds||y||u)return null;const g=(0,d.iT)(b,e);return b&&b.leavebehindAds.length>0&&s?(0,p.jsx)(o,{uri:e,playlistId:s,leavebehinds:g,playlistName:l}):null}}}]);
//# sourceMappingURL=playlist-leavebehinds.js.map