"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3600],{63600:(e,a,n)=>{n.r(a),n.d(a,{default:()=>b});n(1137);var o=n(79474),t=n(97500),r=n.n(t),l=n(43029),s=n(56260),u=n(37298),c=n(73534),i=n(3414);const d="R4AOm8lBixAuXc0zHhxV",f="ZEgB8UArQwhY4degXB0u",h="vHu13YiEjGcr1tNuM0PU",p="RLqo2hhldWUFTxjcB_R3";var m=n(13274);const b=({colorLight:e,colorDark:a,name:n,years:t})=>{const b=(0,s.NC)(c.yOO,{loadingValue:!1}),{enqueueSnackbar:y}=(0,i.d)();(0,o.useEffect)((()=>{if(!b)return;const e=0===t?u.R.get("web-player.album.release",{name:n}):u.R.get("web-player.album.anniversary",t,{name:n,years:`${t}`});y(e)}),[b,n,t,y]);const[x,M]=(0,o.useReducer)(g,{balloons:Array.from({length:25}).map((()=>({animationDuration:Math.floor(50*Math.random())/10+2+"s",transitionDuration:Math.floor(50*Math.random())/10+12+"s",transform:`scale(${Math.floor(.4*Math.random())+.8})`,left:Math.floor(25*Math.random())-25,popped:!1})))}),[k,v]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{const e=setTimeout((()=>{v(!0)}),1e3);return()=>{clearTimeout(e)}}),[v]),b?(0,m.jsx)("div",{className:d,children:x.balloons.map(((n,o)=>{const s=a&&o%2==0?a:e,u=s===a?"textBase":"textSubdued",{popped:c,...i}=n;return(0,m.jsx)("div",{children:(0,m.jsx)("button",{onClick:()=>M(o),className:r()(f,{[h]:k,[p]:c}),style:{"--color":s,...i},children:t>0&&o%3==0&&(0,m.jsx)(l.E,{variant:"headlineLarge",semanticColor:u,children:t})},o)},o)}))}):null};function g(e,a){return{balloons:e.balloons.map(((e,n)=>({...e,popped:a===n||e.popped})))}}}}]);
//# sourceMappingURL=3600.js.map