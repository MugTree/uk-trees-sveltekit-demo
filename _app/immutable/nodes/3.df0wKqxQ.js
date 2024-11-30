const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/index.Be0UuP-5.js","../chunks/disclose-version.B1ahSSfU.js","../chunks/runtime.D35DmKis.js","../chunks/legacy.BTCBhyVv.js","../chunks/index.Bnu0v0sE.js","../chunks/index.DAQCrZp-.js","../chunks/index.Cxax01RN.js","../chunks/index.Dv1ILtOU.js","../chunks/index.HxLTi4Vr.js"])))=>i.map(i=>d[i]);
import{_ as E,o as re,r as ie,b as se,a as oe,c as ne,s as le}from"../chunks/preload-helper.BGFQRm1Z.js";import{a as g,t as x,h as de}from"../chunks/disclose-version.B1ahSSfU.js";import{h as K,R as d,S as s,T as t,a3 as w,W as r,O as S,Q as C,P as H,X as W,ae as X,J as G,a2 as M}from"../chunks/runtime.D35DmKis.js";import{s as p}from"../chunks/render.CWOiPLgf.js";import{e as q,i as V}from"../chunks/each.C3QCvv9L.js";import{h as me,s as z}from"../chunks/attributes.V9_hgmvS.js";import{b as j}from"../chunks/paths.pEqxmcUD.js";function ce(o,a){var e=o.__className,i=ue(a);K&&o.className===i?o.__className=i:(e!==i||K&&o.className!==i)&&(a==null?o.removeAttribute("class"):o.className=i,o.__className=i)}function ue(o){return o??""}const ve=(o,a,e)=>{const i=o[a];return i?typeof i=="function"?i():Promise.resolve(i):new Promise((c,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+a+(a.split("/").length!==e?". Note that variables only represent file names one level deep.":""))))})};async function pe({data:o}){let{tree:a,trees:e,qa:i,treeMap:c}=o;const n=await ve(Object.assign({"../../../../data/trees/ash/index.md":()=>E(()=>import("../chunks/index.Be0UuP-5.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"../../../../data/trees/beech/index.md":()=>E(()=>import("../chunks/index.Bnu0v0sE.js"),__vite__mapDeps([4,1,2,3]),import.meta.url),"../../../../data/trees/elm/index.md":()=>E(()=>import("../chunks/index.DAQCrZp-.js"),__vite__mapDeps([5,1,2,3]),import.meta.url),"../../../../data/trees/fir/index.md":()=>E(()=>import("../chunks/index.Cxax01RN.js"),__vite__mapDeps([6,1,2,3]),import.meta.url),"../../../../data/trees/oak/index.md":()=>E(()=>import("../chunks/index.Dv1ILtOU.js"),__vite__mapDeps([7,1,2,3]),import.meta.url),"../../../../data/trees/pine/index.md":()=>E(()=>import("../chunks/index.HxLTi4Vr.js"),__vite__mapDeps([8,1,2,3]),import.meta.url)}),`../../../../data/trees/${o.tree.slug}/index.md`,8);return{trees:e,tree:a,qa:i,component:n.default,treeMap:c}}const De=Object.freeze(Object.defineProperty({__proto__:null,load:pe},Symbol.toStringTag,{value:"Module"}));var _e=x("<tr><td><span> </span></td><td> </td><td> </td><td> </td></tr>"),fe=x('<table class="striped"><thead><tr><th>Tree</th><th>Max Age (y)</th><th>Max Height (m)</th><th>Est. number</th></tr></thead><tbody></tbody></table>');function he(o,a){var e=fe(),i=d(s(e));q(i,21,()=>a.trees,V,(c,n)=>{var u=_e(),v=s(u),_=s(v),b=s(_,!0);t(_),t(v);var m=d(v),l=s(m,!0);t(m);var h=d(m),f=s(h,!0);t(h);var T=d(h),O=s(T,!0);t(T),t(u),w(()=>{ce(_,r(n).meta.title===a.treeName?"selected":""),p(b,r(n).meta.title),p(l,r(n).meta.maxAge),p(f,r(n).meta.maxHeight),p(O,r(n).meta.approxNumber)}),g(c,u)}),t(i),t(e),g(o,e)}var ge=x('<figure class="main-img"><img loading="lazy" width="340px" alt=""> <figcaption class="caption">Image by <a class="secondary"> </a></figcaption></figure>');function xe(o,a){S(a,!0);var e=ge(),i=s(e),c=d(i,2),n=d(s(c)),u=s(n,!0);t(n),t(c),t(e),w(()=>{z(i,"src",j+a.data.image.path),z(n,"href",j+a.data.image.path),p(u,a.data.image.credit)}),me(i),g(o,e),C()}var be=x('<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" crossorigin="">'),ye=x(`<div id="treemap" style="
    width: 340px;
    height: 340px;
    position: relative;
    margin: 24px auto 0 auto;
  " class="leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom" tabindex="0"></div> <p class="caption"> </p>`,1);function Le(o,a){S(a,!0);let e=X(void 0),i=X(void 0);re(async()=>{await c()});async function c(){if(console.log("setup()"),!r(e))try{await new Promise((l,h)=>{const f=document.createElement("script");f.src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",f.crossOrigin="",f.onload=()=>l(),f.onerror=()=>h(new Error("Failed to load Leaflet")),document.body.appendChild(f)}),W(e,oe(L.map(r(i)))),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(r(e))}catch(m){console.log(m)}}function n(){if(!r(e))return;console.log("drawing markers on map"),console.log("--------------------"),r(e).eachLayer(l=>{(l instanceof L.Marker||l instanceof L.Popup)&&r(e).removeLayer(l)});const m=[];a.markers.forEach(l=>{L.popup().setLatLng([l.latitude,l.longitude]).setContent(l.name).addTo(r(e)),m.push([l.latitude,l.longitude])}),m.length>0?r(e).fitBounds(m):console.log("No markers to fit bounds.")}ie(()=>{a.markers&&r(e)&&n()});var u=ye();de(m=>{var l=be();g(m,l)});var v=H(u);se(v,m=>W(i,m),()=>r(i));var _=d(v,2),b=s(_);t(_),w(()=>p(b,`${a.tree??""} trees in the UK`)),g(o,u),C()}var Ee=x("<details><summary><b> </b></summary> <p> </p></details> <hr>",1);function we(o,a){S(a,!0);var e=Ee(),i=H(e),c=s(i),n=s(c),u=s(n,!0);t(n),t(c);var v=d(c,2),_=s(v,!0);t(v),t(i),G(2),w(()=>{p(u,a.data.question),p(_,a.data.answer)}),g(o,e),C()}var Oe=x("<li><a> </a></li>"),Pe=x('<h1> </h1> <hr> <section><!> <p><em> </em></p> <!> <div class="clear"></div></section> <section><div><h2> </h2></div> <div class="databox"><div class="left"><!></div> <div class="right"><!></div></div></section> <section><h2 class="spacer"> </h2> <hr> <!></section> <section><h2 class="spacer">Other trees</h2> <ul></ul></section>',1);function qe(o,a){let e=M(()=>a.data.tree),i=M(()=>a.data.trees),c=M(()=>a.data.qa),n=M(()=>a.data.treeMap);var u=Pe(),v=H(u),_=s(v);t(v);var b=d(v,4),m=s(b);xe(m,{get data(){return r(e).meta}});var l=d(m,2),h=s(l),f=s(h,!0);t(h),t(l);var T=d(l,2);ne(T,()=>a.data.component,(P,y)=>{y(P,le(()=>r(e)))}),G(2),t(b);var O=d(b,2),N=s(O),Q=s(N),Y=s(Q);t(Q),t(N);var U=d(N,2),k=s(U),Z=s(k);he(Z,{get trees(){return r(i)},get treeName(){return r(e).meta.title}}),t(k);var B=d(k,2),$=s(B);Le($,{get markers(){return r(n).data},get tree(){return r(e).meta.title}}),t(B),t(U),t(O);var I=d(O,2),A=s(I),ee=s(A);t(A);var te=d(A,4);q(te,17,()=>r(c).data,V,(P,y)=>{we(P,{get data(){return r(y)}})}),t(I);var F=d(I,2),J=d(s(F),2);q(J,21,()=>r(i),V,(P,y)=>{var R=Oe(),D=s(R),ae=s(D,!0);t(D),t(R),w(()=>{z(D,"href",j+"/trees/"+r(y).slug),p(ae,r(y).meta.title)}),g(P,R)}),t(J),t(F),w(()=>{p(_,`${r(e).meta.title??""} - (${r(e).meta.latin??""})`),p(f,r(e).meta.summary),p(Y,`${r(e).meta.title??""} trees in context`),p(ee,`Questions about ${r(e).meta.title??""} trees`)}),g(o,u)}export{qe as component,De as universal};
