"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[9169,1550],{69169:(e,r,t)=>{t.r(r),t.d(r,{EpisodeSponsorsWrapper:()=>w,default:()=>S});var n=t(81226),o=(t(60905),t(94238),t(63619),t(60850),t(41679),t(81443),t(74457),t(6844),t(77458),t(69645),t(49932),t(36490),t(93902),t(7410),t(50247),t(88190),t(4207),t(30758));t(98168),t(84008),t(50252),t(21256);var s=t(41675),i=t(86070);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var c=(0,o.lazy)((function(){return t.e(5896).then(t.bind(t,85896))}));function u(e){var r=e.fetchedEpisodeSponsorsData,t=e.fireTrackingEvent,u=e.numberOfSponsorsToDisplay,p=e.firedViewedEvents,f=e.version,d=e.reason,l=e.uri,b=function(e){var r=e.fetchedEpisodeSponsorsData,t=e.numberOfSponsorsToDisplay;return(0,o.useMemo)((function(){return{displayedEpisodeSponsorsData:r.slice(0,t)}}),[r,t])}({fetchedEpisodeSponsorsData:r,numberOfSponsorsToDisplay:u}),v=b.displayedEpisodeSponsorsData,O=(0,s.I)({displayedEpisodeSponsorsData:v,uri:l,reason:d}),y=(0,o.useMemo)((function(){return v.map((function(e,r){return(0,i.jsx)(c,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){(0,n.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({fireTrackingEvent:t,firedViewedEvents:p,version:f,onClick:function(){return O({ui_navigate:v.map((function(e,t){var n=e.clickthrough;return r===t?n:""})),navigate_to_external_uri:v.map((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t[1];return r===o}))})}},e),"".concat(e.metadata.lineitem_id,"-").concat(r))}))}),[v,t,p,f,O]);return{displayedEpisodeSponsorsData:v,displayedSponsors:y}}var p=t(62651),f=t(78221);var d=t(7521);t(61689),t(22081),t(13903),t(3794),t(92063),t(32440),t(52767),t(41859);function l(e){var r,t=e.firedViewedEvents,n=(0,o.useRef)();return{firedViewedEvents:n.current=null!==(r=null!=t?t:n.current)&&void 0!==r?r:new Set}}function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,n.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function O(e){var r=e.uri,t=e.getEpisodeSponsors,n=e.fireTrackingEvent,s=e.numberOfSponsorsToDisplay,i=e.version,a=e.reason,c=(0,p.v)().state,b=function(e){var r=e.uri,t=e.episodeBase62Id;return(0,o.useMemo)((function(){var e=(0,f.o_)(r),n=t||(null==e?void 0:e.id);return{uri:(0,f.iM)(n).toURI(),episodeBase62Id:n}}),[r,t])}(v(v({},null==c?void 0:c[p.u]),{},{uri:r})),O=(0,d.P)(v(v(v({},c),b),{},{getEpisodeSponsors:t,version:i})).fetchedEpisodeSponsorsData,y=l(v({},null==c?void 0:c[p.u])).firedViewedEvents,j=u(v({fetchedEpisodeSponsorsData:O,fireTrackingEvent:n,numberOfSponsorsToDisplay:s,firedViewedEvents:y,version:i,reason:a},b));return v(v(v({},b),{},{fetchedEpisodeSponsorsData:O},j),{},{firedViewedEvents:y,reason:a})}var y=3;function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){(0,n.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g=(0,o.lazy)((function(){return t.e(825).then(t.bind(t,40825))}));function w(e){var r,t={numberOfSponsorsToDisplay:void 0===(r=e.numberOfSponsorsToDisplay)?y:r}.numberOfSponsorsToDisplay,n=O(h(h({},e),{},{numberOfSponsorsToDisplay:t}));return n.episodeBase62Id&&n.displayedSponsors.length?(0,i.jsx)(o.Suspense,{fallback:!0,children:(0,i.jsx)(g,h(h({},e),{},{numberOfSponsorsToDisplay:t,state:n}))}):null}const S=w},62651:(e,r,t)=>{t.d(r,{u:()=>o,v:()=>s});var n=t(61022),o="episodeSponsorsStateWithRequiredProps";function s(){return(0,n.zy)()}},7521:(e,r,t)=>{t.d(r,{F:()=>p,P:()=>f});var n=t(95514),o=t(26017),s=t(16247),i=t.n(s),a=(t(38858),t(62172),t(60850),t(69645),t(49932),t(36490),t(4207),t(30758)),c=t(78370),u=t(12169),p=420;function f(e){var r=e.episodeBase62Id,s=e.getEpisodeSponsors,f=e.fetchedEpisodeSponsorsData,d=void 0===f?[]:f,l=e.version,b=(0,a.useState)(d),v=(0,o.A)(b,2),O=v[0],y=v[1],j=(0,a.useCallback)((0,n.A)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r){e.next=3;break}throw new Error("episodeBase62Id is required to fetch episode sponsors");case 3:if(null==s){e.next=7;break}e.t0=s,e.next=10;break;case 7:return e.next=9,Promise.resolve().then(t.bind(t,53297));case 9:e.t0=e.sent.getEpisodeSponsors;case 10:return n=e.t0,e.t1=y,e.next=14,n(r,{version:l});case 14:e.t2=e.sent,(0,e.t1)(e.t2),e.next=21;break;case 18:e.prev=18,e.t3=e.catch(0),y([]);case 21:case"end":return e.stop()}}),e,null,[[0,18]])}))),[r,s,l]),h=(0,c.YQ)(j,p);(0,a.useEffect)((function(){d.length||h()}),[h,d.length]);var g=(0,a.useCallback)((function(){return{effectCallback:h}}),[h]);return(0,u.L)(g),{fetchedEpisodeSponsorsData:O}}},41675:(e,r,t)=>{t.d(r,{I:()=>f});var n=t(81226),o=t(95514),s=t(16247),i=t.n(s),a=(t(60905),t(94238),t(63619),t(60850),t(84008),t(41679),t(81443),t(74457),t(6844),t(77458),t(69645),t(49932),t(36490),t(93902),t(7410),t(50247),t(50252),t(88190),t(4207),t(30758)),c=t(91837);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(e){var r=e.uri,n=e.reason,s=e.displayedEpisodeSponsorsData,u=(0,c.vh)(),f=(0,a.useCallback)(function(){var e=(0,o.A)(i().mark((function e(o){var a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(4151).then(t.bind(t,92006));case 2:return a=e.sent,c=a.createPodcastAdCtaCardEvent,e.abrupt("return",u.send(c(p({uri:r,reason:n,lineitem_id:s.map((function(e){return e.metadata.lineitemId}))},o))));case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[r,s,n,u]);return(0,a.useEffect)((function(){f()}),[f]),f}},12169:(e,r,t)=>{t.d(r,{L:()=>u});t(177);var n=t(30758),o=t(1409),s=t(19919),i=t(69852),a=t(84747),c=t(87703);function u(e){var r=(0,o.NC)(s.CV8),t=(0,a.o)((function(e){var r,t,n=null!==(r=null==e?void 0:e.item)&&void 0!==r?r:void 0;return(0,c.N)(n)&&n.isPodcastAd&&null!==(t=n.id)&&void 0!==t?t:void 0})),u=(0,i.Z)(t);(0,n.useEffect)((function(){var n=e(),o=n.effectCallback,s=n.destructor;return t!==u&&Boolean(t)&&setTimeout(o,r),s}),[e,t,u,r])}}}]);
//# sourceMappingURL=9169.js.map