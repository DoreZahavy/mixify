import{Q as c,a as p}from"./QCard.47821bb5.js";import{Q as d}from"./QPage.4f43ebb8.js";import{b as l}from"./mixtape-store.18644f33.js";import{_,x as m,J as x,y as a,z as r,A as t,H as u,K as f,L as g,I as h,B as o,D as k,E as v}from"./index.a143abc5.js";import"./render.c391207e.js";const y=m({name:"MixtapeIndex",setup(){return{mixtapes:l().getMixtapes}}}),B=["src"];function C(s,n,I,M,Q,S){const i=x("router-link");return a(),r(d,{class:"mixtape-index flex flex-center"},{default:t(()=>[(a(!0),u(g,null,f(s.mixtapes,e=>(a(),r(c,{class:"card",key:e._id},{default:t(()=>[h("img",{src:e.imgUrl,alt:"mixtape image",style:{width:"250px",height:"250px"}},null,8,B),o(p,{class:"q-mb-md"},{default:t(()=>[o(i,{to:`mixtape/${e._id}`,class:"card-title text-bold text-h5"},{default:t(()=>[k(v(e.name),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})}var D=_(y,[["render",C],["__scopeId","data-v-5c8e18f0"]]);export{D as default};
