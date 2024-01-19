import{a as T,b as k,e as A}from"./render.c391207e.js";import{i as I,h as q,X as K,j as d,t as f,u as _,Y,v as C,w,o as H,m as V,n as U,S as E,r as p,Z as W,k as M,$ as P,a0 as Z}from"./index.a143abc5.js";import{b as G,a as J,g as ee,c as O}from"./QAvatar.05ac1e1a.js";var ae=T({name:"QPageContainer",setup(e,{slots:v}){const{proxy:{$q:i}}=C(),o=I(_,q);if(o===q)return console.error("QPageContainer needs to be child of QLayout"),q;K(Y,!0);const n=d(()=>{const s={};return o.header.space===!0&&(s.paddingTop=`${o.header.size}px`),o.right.space===!0&&(s[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(s.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(s[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),s});return()=>f("div",{class:"q-page-container",style:n.value},k(v.default))}});const{passive:N}=E,te=["both","horizontal","vertical"];var oe=T({name:"QScrollObserver",props:{axis:{type:String,validator:e=>te.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:v}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,n,s;w(()=>e.scrollTarget,()=>{a(),m()});function u(){o!==null&&o();const b=Math.max(0,J(n)),z=ee(n),g={top:b-i.position.top,left:z-i.position.left};if(e.axis==="vertical"&&g.top===0||e.axis==="horizontal"&&g.left===0)return;const $=Math.abs(g.top)>=Math.abs(g.left)?g.top<0?"up":"down":g.left<0?"left":"right";i.position={top:b,left:z},i.directionChanged=i.direction!==$,i.delta=g,i.directionChanged===!0&&(i.direction=$,i.inflectionPoint=i.position),v("scroll",{...i})}function m(){n=G(s,e.scrollTarget),n.addEventListener("scroll",r,N),r(!0)}function a(){n!==void 0&&(n.removeEventListener("scroll",r,N),n=void 0)}function r(b){if(b===!0||e.debounce===0||e.debounce==="0")u();else if(o===null){const[z,g]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];o=()=>{g(z),o=null}}}const{proxy:h}=C();return w(()=>h.$q.lang.rtl,u),H(()=>{s=h.$el.parentNode,m()}),V(()=>{o!==null&&o(),a()}),Object.assign(h,{trigger:r,getPosition:()=>i}),U}});function ne(){const e=p(!W.value);return e.value===!1&&H(()=>{e.value=!0}),e}const X=typeof ResizeObserver!="undefined",D=X===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var B=T({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:v}){let i=null,o,n={width:-1,height:-1};function s(a){a===!0||e.debounce===0||e.debounce==="0"?u():i===null&&(i=setTimeout(u,e.debounce))}function u(){if(i!==null&&(clearTimeout(i),i=null),o){const{offsetWidth:a,offsetHeight:r}=o;(a!==n.width||r!==n.height)&&(n={width:a,height:r},v("resize",n))}}const{proxy:m}=C();if(m.trigger=s,X===!0){let a;const r=h=>{o=m.$el.parentNode,o?(a=new ResizeObserver(s),a.observe(o),u()):h!==!0&&M(()=>{r(!0)})};return H(()=>{r()}),V(()=>{i!==null&&clearTimeout(i),a!==void 0&&(a.disconnect!==void 0?a.disconnect():o&&a.unobserve(o))}),U}else{let h=function(){i!==null&&(clearTimeout(i),i=null),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",s,E.passive),r=void 0)},b=function(){h(),o&&o.contentDocument&&(r=o.contentDocument.defaultView,r.addEventListener("resize",s,E.passive),u())};const a=ne();let r;return H(()=>{M(()=>{o=m.$el,o&&b()})}),V(h),()=>{if(a.value===!0)return f("object",{style:D.style,tabindex:-1,type:"text/html",data:D.url,"aria-hidden":"true",onLoad:b})}}}}),se=T({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:v,emit:i}){const{proxy:{$q:o}}=C(),n=p(null),s=p(o.screen.height),u=p(e.container===!0?0:o.screen.width),m=p({position:0,direction:"down",inflectionPoint:0}),a=p(0),r=p(W.value===!0?0:O()),h=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=d(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),z=d(()=>r.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),g=d(()=>r.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function $(l){if(e.container===!0||document.qScrollPrevented!==!0){const t={position:l.position.top,direction:l.direction,directionChanged:l.directionChanged,inflectionPoint:l.inflectionPoint.top,delta:l.delta.top};m.value=t,e.onScroll!==void 0&&i("scroll",t)}}function y(l){const{height:t,width:c}=l;let x=!1;s.value!==t&&(x=!0,s.value=t,e.onScrollHeight!==void 0&&i("scrollHeight",t),R()),u.value!==c&&(x=!0,u.value=c),x===!0&&e.onResize!==void 0&&i("resize",l)}function S({height:l}){a.value!==l&&(a.value=l,R())}function R(){if(e.container===!0){const l=s.value>a.value?O():0;r.value!==l&&(r.value=l)}}let L=null;const Q={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:n,height:s,containerHeight:a,scrollbarWidth:r,totalWidth:d(()=>u.value+r.value),rows:d(()=>{const l=e.view.toLowerCase().split(" ");return{top:l[0].split(""),middle:l[1].split(""),bottom:l[2].split("")}}),header:P({size:0,offset:0,space:!1}),right:P({size:300,offset:0,space:!1}),footer:P({size:0,offset:0,space:!1}),left:P({size:300,offset:0,space:!1}),scroll:m,animate(){L!==null?clearTimeout(L):document.body.classList.add("q-body--layout-animate"),L=setTimeout(()=>{L=null,document.body.classList.remove("q-body--layout-animate")},155)},update(l,t,c){Q[l][t]=c}};if(K(_,Q),O()>0){let c=function(){l=null,t.classList.remove("hide-scrollbar")},x=function(){if(l===null){if(t.scrollHeight>o.screen.height)return;t.classList.add("hide-scrollbar")}else clearTimeout(l);l=setTimeout(c,300)},F=function(j){l!==null&&j==="remove"&&(clearTimeout(l),c()),window[`${j}EventListener`]("resize",x)},l=null;const t=document.body;w(()=>e.container!==!0?"add":"remove",F),e.container!==!0&&F("add"),Z(()=>{F("remove")})}return()=>{const l=A(v.default,[f(oe,{onScroll:$}),f(B,{onResize:y})]),t=f("div",{class:h.value,style:b.value,ref:e.container===!0?void 0:n,tabindex:-1},l);return e.container===!0?f("div",{class:"q-layout-container overflow-hidden",ref:n},[f(B,{onResize:S}),f("div",{class:"absolute-full",style:z.value},[f("div",{class:"scroll",style:g.value},[t])])]):t}}}),ue=T({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:v}){const i=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>f("div",{class:i.value,role:"toolbar"},k(v.default))}}),ce=T({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:v}){const i=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>f("div",{class:i.value},k(v.default))}}),de=T({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:v,emit:i}){const{proxy:{$q:o}}=C(),n=I(_,q);if(n===q)return console.error("QFooter needs to be child of QLayout"),q;const s=p(parseInt(e.heightHint,10)),u=p(!0),m=p(W.value===!0||n.isContainer.value===!0?0:window.innerHeight),a=d(()=>e.reveal===!0||n.view.value.indexOf("F")>-1||o.platform.is.ios&&n.isContainer.value===!0),r=d(()=>n.isContainer.value===!0?n.containerHeight.value:m.value),h=d(()=>{if(e.modelValue!==!0)return 0;if(a.value===!0)return u.value===!0?s.value:0;const t=n.scroll.value.position+r.value+s.value-n.height.value;return t>0?t:0}),b=d(()=>e.modelValue!==!0||a.value===!0&&u.value!==!0),z=d(()=>e.modelValue===!0&&b.value===!0&&e.reveal===!0),g=d(()=>"q-footer q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(b.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(a.value!==!0?" hidden":""):"")),$=d(()=>{const t=n.rows.value.bottom,c={};return t[0]==="l"&&n.left.space===!0&&(c[o.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),t[2]==="r"&&n.right.space===!0&&(c[o.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),c});function y(t,c){n.update("footer",t,c)}function S(t,c){t.value!==c&&(t.value=c)}function R({height:t}){S(s,t),y("size",t)}function L(){if(e.reveal!==!0)return;const{direction:t,position:c,inflectionPoint:x}=n.scroll.value;S(u,t==="up"||c-x<100||n.height.value-r.value-c-s.value<300)}function Q(t){z.value===!0&&S(u,!0),i("focusin",t)}w(()=>e.modelValue,t=>{y("space",t),S(u,!0),n.animate()}),w(h,t=>{y("offset",t)}),w(()=>e.reveal,t=>{t===!1&&S(u,e.modelValue)}),w(u,t=>{n.animate(),i("reveal",t)}),w([s,n.scroll,n.height],L),w(()=>o.screen.height,t=>{n.isContainer.value!==!0&&S(m,t)});const l={};return n.instances.footer=l,e.modelValue===!0&&y("size",s.value),y("space",e.modelValue),y("offset",h.value),V(()=>{n.instances.footer===l&&(n.instances.footer=void 0,y("size",0),y("offset",0),y("space",!1))}),()=>{const t=A(v.default,[f(B,{debounce:0,onResize:R})]);return e.elevated===!0&&t.push(f("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f("footer",{class:g.value,style:$.value,onFocusin:Q},t)}}});export{ue as Q,ce as a,de as b,se as c,ae as d,B as e};
