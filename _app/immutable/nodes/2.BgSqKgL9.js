import{a as g,t as v}from"../chunks/disclose-version.BjN4KwoF.js";import{p as z,g as B,j as n,a3 as y,r,s as _,i as W,k as b}from"../chunks/runtime.UYpW1pR2.js";import{h as A,s as f,e as w,i as x}from"../chunks/attributes.DYabQLMa.js";import{s as k}from"../chunks/render.BEgy4mVX.js";import{b as p}from"../chunks/paths.DIpba9c3.js";var F=v('<a><img alt="" loading="lazy" width="340px" class="grid-img"></a> <h2 class="grid-head"><a> </a></h2> <p class="grid-content"> </p>',1);function G(i,e){z(e,!0);const o=d=>d.replace("trees","trees/thumbs");var a=F(),t=B(a),c=n(t);y(()=>f(c,"src",p+o(e.data.meta.image.path))),r(t);var l=_(t,2),s=n(l),h=n(s,!0);r(s),r(l);var m=_(l,2),u=n(m,!0);r(m),y(()=>{f(t,"href",p+"/trees/"+e.data.slug),f(s,"href",p+"/trees/"+e.data.slug),k(h,e.data.meta.title),k(u,e.data.meta.summary)}),A(c),g(i,a),W()}function I(i,e){const o=[];let a=0;for(;a<i.length;){const t=i.slice(a,a+e);o.push(t),a+=e}return o}var K=v('<div class="grid-item"><!></div>'),M=v('<section><div class="grid"></div></section>'),P=v(`<h1>Welcome to this website British trees</h1> <hr> <section><p>The UK is home to a diverse range of tree species, many of which play
    crucial roles in the country’s ecosystems, culture, and history. From
    towering oaks and elegant ash trees to resilient pines and graceful elms,
    British woodlands offer habitats for countless wildlife species.</p></section> <!>`,1);function E(i,e){z(e,!0);const o=I(e.data.pages,3);var a=P(),t=_(B(a),6);w(t,17,()=>o,x,(c,l)=>{var s=M(),h=n(s);w(h,21,()=>b(l),x,(m,u)=>{var d=K(),j=n(d);G(j,{get data(){return b(u)}}),r(d),g(m,d)}),r(h),r(s),g(c,s)}),g(i,a),W()}export{E as component};