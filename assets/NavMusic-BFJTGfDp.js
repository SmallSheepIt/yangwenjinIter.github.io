const __vite__fileDeps=["assets/APlayer.min-CAgWaKXK.js","assets/commonjsHelpers-Cpj98o6Y.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{g as p,o as _,c as v,i as y,_ as f,j as h,h as b,u as P,k as A,n as g,r as E,l as w,w as x,a as i,m as G,e as I}from"./app-LjaeJhQO.js";import{a as B}from"./axios-B6xwUs71.js";const C=["spin"],S=p({__name:"MyIcon",props:{name:String,spin:Boolean},setup(r){const s=r;return(a,l)=>(_(),v("span",{class:y(["iconfont icon",`icon-${s.name}`]),spin:s.spin},null,10,C))}}),k=f(S,[["__file","MyIcon.vue"]]),N={class:"MyMusic"},L=i("div",{id:"GlobalAPlayer"},null,-1),T=p({__name:"NavMusic",setup(r){let s,a=h(!1),l=[];const M=()=>{a.value=!a.value},u=()=>{a.value&&(a.value=!1)},d=()=>{const n=document.querySelector(".vp-navbar-end");if(!n)return;if(!document.querySelector("#MyMusic_Menu")){const o=document.createElement("div");o.id="MyMusic_Menu",o.classList.add("nav-item"),o.innerHTML='<div id="MyMusic_icon" class="btnImg"></div>',n.appendChild(o)}const e=document.querySelector("#MyMusic_Menu");e.onclick=o=>{M(),o.stopPropagation()};const t=document.querySelector(".MyMusic");t.onclick=o=>{o.stopPropagation()}},m=()=>{if(!s)return;const n=window,e=document.getElementById("GlobalAPlayer");!e||l.length<1||(c(),e.classList.contains("aplayer"))||(n.GlobalAPlayer=new s({container:document.getElementById("GlobalAPlayer"),audio:l,lrcType:3,listFolded:!1,listMaxHeight:"324px",mini:!1,fixed:!1,volume:1,storageName:"GlobalAPlayer"}),n.GlobalAPlayer.on("play",function(){c()}),n.GlobalAPlayer.on("pause",function(){c()}))};function c(){var e,t;const n=window;n.GlobalAPlayer&&n.GlobalAPlayer.mode&&(n.GlobalAPlayer.paused?(e=document.getElementById("MyMusic_icon"))==null||e.setAttribute("spin","false"):(t=document.getElementById("MyMusic_icon"))==null||t.setAttribute("spin","true"))}return b(()=>{const n=P();B({method:"get",url:"//file.mo7.cc/music/list.json",params:{}}).then(e=>{var t=e.data;t&&t.length>0&&(l=t)}),A(()=>import("./APlayer.min-CAgWaKXK.js").then(e=>e.A),__vite__mapDeps([0,1])).then(e=>{g(()=>{s=e.default,d(),m(),window.document.body.onclick=()=>{u()}}),n.beforeEach(()=>{setTimeout(()=>{d(),m()},50)})})}),(n,e)=>{const t=E("ClientOnly");return _(),w(t,null,{default:x(()=>[i("div",N,[i("div",{class:y(["MyMusic_Play",{hide:!G(a)}])},[i("div",{class:"close",onClick:u},[I(k,{name:"guanbi"})]),L],2)])]),_:1})}}}),V=f(T,[["__file","NavMusic.vue"]]);export{V as default};
