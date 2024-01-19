import{u as St,a as Mt,b as xt,c as qt,d as Lt,e as Tt,Q as Y,f as he,g as qe,h as Bt,i as Pt,j as At,k as Ft,l as st}from"./player-store.1a17a503.js";import{Q as le}from"./dom.a728217d.js";import{u as ct,a as dt,b as It,m as Dt}from"./mixtape-store.18644f33.js";import{P as Nt,c as pe,n as Rt,l as Et,a as Se,p as ze,d as tt,s as Oe,e as xe,f as Qe,g as vt,i as Vt,h as We,r as q,j as o,w as T,o as Ue,k as at,m as He,q as Ke,t as x,u as zt,v as Ge,x as ie,_ as ue,y as D,z as W,A as k,B as g,C as ft,D as be,E as oe,F as Ot,G as je,H as Je,I as O,J as ne,K as mt,L as pt,M as Qt,N as Wt,O as jt}from"./index.a143abc5.js";import{c as Yt,a as ht,h as Xe,b as Xt}from"./render.c391207e.js";import{Q as rt,a as Ut,b as Ht,c as Kt,d as Gt}from"./QFooter.f7db104e.js";import{Q as Ze}from"./QAvatar.05ac1e1a.js";import{R as bt}from"./Ripple.2359eaee.js";const et={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Jt=Object.keys(et);et.all=!0;function nt(t){const r={};for(const s of Jt)t[s]===!0&&(r[s]=!0);return Object.keys(r).length===0?et:(r.horizontal===!0?r.left=r.right=!0:r.left===!0&&r.right===!0&&(r.horizontal=!0),r.vertical===!0?r.up=r.down=!0:r.up===!0&&r.down===!0&&(r.vertical=!0),r.horizontal===!0&&r.vertical===!0&&(r.all=!0),r)}const Zt=["INPUT","TEXTAREA"];function lt(t,r){return r.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof r.handler=="function"&&Zt.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(r.uid)===-1)}function ea(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),Nt.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Ye(t,r,s){const c=xe(t);let e,n=c.left-r.event.x,u=c.top-r.event.y,d=Math.abs(n),v=Math.abs(u);const b=r.direction;b.horizontal===!0&&b.vertical!==!0?e=n<0?"left":"right":b.horizontal!==!0&&b.vertical===!0?e=u<0?"up":"down":b.up===!0&&u<0?(e="up",d>v&&(b.left===!0&&n<0?e="left":b.right===!0&&n>0&&(e="right"))):b.down===!0&&u>0?(e="down",d>v&&(b.left===!0&&n<0?e="left":b.right===!0&&n>0&&(e="right"))):b.left===!0&&n<0?(e="left",d<v&&(b.up===!0&&u<0?e="up":b.down===!0&&u>0&&(e="down"))):b.right===!0&&n>0&&(e="right",d<v&&(b.up===!0&&u<0?e="up":b.down===!0&&u>0&&(e="down")));let i=!1;if(e===void 0&&s===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};e=r.event.lastDir,i=!0,e==="left"||e==="right"?(c.left-=n,d=0,n=0):(c.top-=u,v=0,u=0)}return{synthetic:i,payload:{evt:t,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:c,direction:e,isFirst:r.event.isFirst,isFinal:s===!0,duration:Date.now()-r.event.time,distance:{x:d,y:v},offset:{x:n,y:u},delta:{x:c.left-r.event.lastX,y:c.top-r.event.lastY}}}}let ta=0;var Me=Yt({name:"touch-pan",beforeMount(t,{value:r,modifiers:s}){if(s.mouse!==!0&&pe.has.touch!==!0)return;function c(n,u){s.mouse===!0&&u===!0?vt(n):(s.stop===!0&&Oe(n),s.prevent===!0&&tt(n))}const e={uid:"qvtp_"+ta++,handler:r,modifiers:s,direction:nt(s),noop:Rt,mouseStart(n){lt(n,e)&&Et(n)&&(Se(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(n,!0))},touchStart(n){if(lt(n,e)){const u=n.target;Se(e,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),e.start(n)}},start(n,u){if(pe.is.firefox===!0&&ze(t,!0),e.lastEvt=n,u===!0||s.stop===!0){if(e.direction.all!==!0&&(u!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const b=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&tt(b),n.cancelBubble===!0&&Oe(b),Object.assign(b,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[e.uid]:n.qClonedBy.concat(e.uid)}),e.initialEvent={target:n.target,event:b}}Oe(n)}const{left:d,top:v}=xe(n);e.event={x:d,y:v,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:d,lastY:v}},move(n){if(e.event===void 0)return;const u=xe(n),d=u.left-e.event.x,v=u.top-e.event.y;if(d===0&&v===0)return;e.lastEvt=n;const b=e.event.mouse===!0,i=()=>{c(n,b);let w;s.preserveCursor!==!0&&s.preservecursor!==!0&&(w=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),b===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ea(),e.styleCleanup=m=>{if(e.styleCleanup=void 0,w!==void 0&&(document.documentElement.style.cursor=w),document.body.classList.remove("non-selectable"),b===!0){const F=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{F(),m()},50):F()}else m!==void 0&&m()}};if(e.event.detected===!0){e.event.isFirst!==!0&&c(n,e.event.mouse);const{payload:w,synthetic:m}=Ye(n,e,!1);w!==void 0&&(e.handler(w)===!1?e.end(n):(e.styleCleanup===void 0&&e.event.isFirst===!0&&i(),e.event.lastX=w.position.left,e.event.lastY=w.position.top,e.event.lastDir=m===!0?void 0:w.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||b===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){i(),e.event.detected=!0,e.move(n);return}const M=Math.abs(d),C=Math.abs(v);M!==C&&(e.direction.horizontal===!0&&M>C||e.direction.vertical===!0&&M<C||e.direction.up===!0&&M<C&&v<0||e.direction.down===!0&&M<C&&v>0||e.direction.left===!0&&M>C&&d<0||e.direction.right===!0&&M>C&&d>0?(e.event.detected=!0,e.move(n)):e.end(n,!0))},end(n,u){if(e.event!==void 0){if(Qe(e,"temp"),pe.is.firefox===!0&&ze(t,!1),u===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(Ye(n===void 0?e.lastEvt:n,e).payload);const{payload:d}=Ye(n===void 0?e.lastEvt:n,e,!0),v=()=>{e.handler(d)};e.styleCleanup!==void 0?e.styleCleanup(v):v()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,s.mouse===!0){const n=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";Se(e,"main",[[t,"mousedown","mouseStart",`passive${n}`]])}pe.has.touch===!0&&Se(e,"main",[[t,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,r){const s=t.__qtouchpan;s!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&s.end(),s.handler=r.value),s.direction=nt(r.modifiers))},beforeUnmount(t){const r=t.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),Qe(r,"main"),Qe(r,"temp"),pe.is.firefox===!0&&ze(t,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete t.__qtouchpan)}});function Q(t,r,s){return s<=r?r:Math.min(s,Math.max(r,t))}const ot=150;var aa=ht({name:"QDrawer",inheritAttrs:!1,props:{...St,...ct,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Mt,"onLayout","miniState"],setup(t,{slots:r,emit:s,attrs:c}){const e=Ge(),{proxy:{$q:n}}=e,u=dt(t,n),{preventBodyScroll:d}=Tt(),{registerTimeout:v,removeTimeout:b}=xt(),i=Vt(zt,We);if(i===We)return console.error("QDrawer needs to be child of QLayout"),We;let M,C=null,w;const m=q(t.behavior==="mobile"||t.behavior!=="desktop"&&i.totalWidth.value<=t.breakpoint),F=o(()=>t.mini===!0&&m.value!==!0),h=o(()=>F.value===!0?t.miniWidth:t.width),p=q(t.showIfAbove===!0&&m.value===!1?!0:t.modelValue===!0),P=o(()=>t.persistent!==!0&&(m.value===!0||Le.value===!0));function S(l,y){if(J(),l!==!1&&i.animate(),A(0),m.value===!0){const L=i.instances[ee.value];L!==void 0&&L.belowBreakpoint===!0&&L.hide(!1),V(1),i.isContainer.value!==!0&&d(!0)}else V(0),l!==!1&&ae(!1);v(()=>{l!==!1&&ae(!0),y!==!0&&s("show",l)},ot)}function N(l,y){ye(),l!==!1&&i.animate(),V(0),A(E.value*h.value),fe(),y!==!0?v(()=>{s("hide",l)},ot):b()}const{show:R,hide:K}=qt({showing:p,hideOnRouteChange:P,handleShow:S,handleHide:N}),{addToHistory:J,removeFromHistory:ye}=Lt(p,K,P),j={belowBreakpoint:m,hide:K},I=o(()=>t.side==="right"),E=o(()=>(n.lang.rtl===!0?-1:1)*(I.value===!0?1:-1)),se=q(0),X=q(!1),Z=q(!1),ge=q(h.value*E.value),ee=o(()=>I.value===!0?"left":"right"),U=o(()=>p.value===!0&&m.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:h.value:0),te=o(()=>t.overlay===!0||t.miniToOverlay===!0||i.view.value.indexOf(I.value?"R":"L")>-1||n.platform.is.ios===!0&&i.isContainer.value===!0),G=o(()=>t.overlay===!1&&p.value===!0&&m.value===!1),Le=o(()=>t.overlay===!0&&p.value===!0&&m.value===!1),Te=o(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&X.value===!1?" hidden":"")),Be=o(()=>({backgroundColor:`rgba(0,0,0,${se.value*.4})`})),ke=o(()=>I.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),Pe=o(()=>I.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),Ae=o(()=>{const l={};return i.header.space===!0&&ke.value===!1&&(te.value===!0?l.top=`${i.header.offset}px`:i.header.space===!0&&(l.top=`${i.header.size}px`)),i.footer.space===!0&&Pe.value===!1&&(te.value===!0?l.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(l.bottom=`${i.footer.size}px`)),l}),Fe=o(()=>{const l={width:`${h.value}px`,transform:`translateX(${ge.value}px)`};return m.value===!0?l:Object.assign(l,Ae.value)}),Ie=o(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),De=o(()=>`q-drawer q-drawer--${t.side}`+(Z.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(X.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${F.value===!0?"mini":"standard"}`+(te.value===!0||G.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(ke.value===!0?" q-drawer--top-padding":""))),Ce=o(()=>{const l=n.lang.rtl===!0?t.side:ee.value;return[[Me,_e,void 0,{[l]:!0,mouse:!0}]]}),Ne=o(()=>{const l=n.lang.rtl===!0?ee.value:t.side;return[[Me,we,void 0,{[l]:!0,mouse:!0}]]}),ce=o(()=>{const l=n.lang.rtl===!0?ee.value:t.side;return[[Me,we,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function de(){Re(m,t.behavior==="mobile"||t.behavior!=="desktop"&&i.totalWidth.value<=t.breakpoint)}T(m,l=>{l===!0?(M=p.value,p.value===!0&&K(!1)):t.overlay===!1&&t.behavior!=="mobile"&&M!==!1&&(p.value===!0?(A(0),V(0),fe()):R(!1))}),T(()=>t.side,(l,y)=>{i.instances[y]===j&&(i.instances[y]=void 0,i[y].space=!1,i[y].offset=0),i.instances[l]=j,i[l].size=h.value,i[l].space=G.value,i[l].offset=U.value}),T(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&de()}),T(()=>t.behavior+t.breakpoint,de),T(i.isContainer,l=>{p.value===!0&&d(l!==!0),l===!0&&de()}),T(i.scrollbarWidth,()=>{A(p.value===!0?0:void 0)}),T(U,l=>{z("offset",l)}),T(G,l=>{s("onLayout",l),z("space",l)}),T(I,()=>{A()}),T(h,l=>{A(),me(t.miniToOverlay,l)}),T(()=>t.miniToOverlay,l=>{me(l,h.value)}),T(()=>n.lang.rtl,()=>{A()}),T(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(ve(),i.animate())}),T(F,l=>{s("miniState",l)});function A(l){l===void 0?at(()=>{l=p.value===!0?0:h.value,A(E.value*l)}):(i.isContainer.value===!0&&I.value===!0&&(m.value===!0||Math.abs(l)===h.value)&&(l+=E.value*i.scrollbarWidth.value),ge.value=l)}function V(l){se.value=l}function ae(l){const y=l===!0?"remove":i.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function ve(){C!==null&&clearTimeout(C),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),Z.value=!0,C=setTimeout(()=>{C=null,Z.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function _e(l){if(p.value!==!1)return;const y=h.value,L=Q(l.distance.x,0,y);if(l.isFinal===!0){L>=Math.min(75,y)===!0?R():(i.animate(),V(0),A(E.value*y)),X.value=!1;return}A((n.lang.rtl===!0?I.value!==!0:I.value)?Math.max(y-L,0):Math.min(0,L-y)),V(Q(L/y,0,1)),l.isFirst===!0&&(X.value=!0)}function we(l){if(p.value!==!0)return;const y=h.value,L=l.direction===t.side,re=(n.lang.rtl===!0?L!==!0:L)?Q(l.distance.x,0,y):0;if(l.isFinal===!0){Math.abs(re)<Math.min(75,y)===!0?(i.animate(),V(1),A(0)):K(),X.value=!1;return}A(E.value*re),V(Q(1-re/y,0,1)),l.isFirst===!0&&(X.value=!0)}function fe(){d(!1),ae(!0)}function z(l,y){i.update(t.side,l,y)}function Re(l,y){l.value!==y&&(l.value=y)}function me(l,y){z("size",l===!0?t.miniWidth:y)}return i.instances[t.side]=j,me(t.miniToOverlay,h.value),z("space",G.value),z("offset",U.value),t.showIfAbove===!0&&t.modelValue!==!0&&p.value===!0&&t["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!0),Ue(()=>{s("onLayout",G.value),s("miniState",F.value),M=t.showIfAbove===!0;const l=()=>{(p.value===!0?S:N)(!1,!0)};if(i.totalWidth.value!==0){at(l);return}w=T(i.totalWidth,()=>{w(),w=void 0,p.value===!1&&t.showIfAbove===!0&&m.value===!1?R(!1):l()})}),He(()=>{w!==void 0&&w(),C!==null&&(clearTimeout(C),C=null),p.value===!0&&fe(),i.instances[t.side]===j&&(i.instances[t.side]=void 0,z("size",0),z("offset",0),z("space",!1))}),()=>{const l=[];m.value===!0&&(t.noSwipeOpen===!1&&l.push(Ke(x("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Ce.value)),l.push(Xe("div",{ref:"backdrop",class:Te.value,style:Be.value,"aria-hidden":"true",onClick:K},void 0,"backdrop",t.noSwipeBackdrop!==!0&&p.value===!0,()=>ce.value)));const y=F.value===!0&&r.mini!==void 0,L=[x("div",{...c,key:""+y,class:[Ie.value,c.class]},y===!0?r.mini():Xt(r.default))];return t.elevated===!0&&p.value===!0&&L.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(Xe("aside",{ref:"content",class:De.value,style:Fe.value},L,"contentclose",t.noSwipeClose!==!0&&m.value===!0,()=>Ne.value)),x("div",{class:"q-drawer-container"},l)}}});const ra=ie({name:"NavLink",props:{title:{type:String,required:!0},link:{type:String,default:"#"},icon:{type:String,default:""}}});function na(t,r,s,c,e,n){return D(),W(qe,{clickable:"",tag:"div",to:t.link,exact:""},{default:k(()=>[t.icon?(D(),W(Y,{key:0,avatar:""},{default:k(()=>[g(le,{name:t.icon},null,8,["name"])]),_:1})):ft("",!0),g(Y,null,{default:k(()=>[g(he,null,{default:k(()=>[be(oe(t.title),1)]),_:1})]),_:1})]),_:1},8,["to"])}var la=ue(ra,[["render",na]]);const it="q-slider__marker-labels",oa=t=>({value:t}),ia=({marker:t})=>x("div",{key:t.value,style:t.style,class:t.classes},t.label),yt=[34,37,40,33,39,38],ua={...ct,...Bt,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:t=>t>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,hideSelection:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:"20px"},trackSize:{type:String,default:"4px"},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:"M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}},sa=["pan","update:modelValue","change"];function ca({updateValue:t,updatePosition:r,getDragging:s,formAttrs:c}){const{props:e,emit:n,slots:u,proxy:{$q:d}}=Ge(),v=dt(e,d),b=Pt(c),i=q(!1),M=q(!1),C=q(!1),w=q(!1),m=o(()=>e.vertical===!0?"--v":"--h"),F=o(()=>"-"+(e.switchLabelSide===!0?"switched":"standard")),h=o(()=>e.vertical===!0?e.reverse===!0:e.reverse!==(d.lang.rtl===!0)),p=o(()=>isNaN(e.innerMin)===!0||e.innerMin<e.min?e.min:e.innerMin),P=o(()=>isNaN(e.innerMax)===!0||e.innerMax>e.max?e.max:e.innerMax),S=o(()=>e.disable!==!0&&e.readonly!==!0&&p.value<P.value),N=o(()=>{if(e.step===0)return f=>f;const a=(String(e.step).trim().split(".")[1]||"").length;return f=>parseFloat(f.toFixed(a))}),R=o(()=>e.step===0?1:e.step),K=o(()=>S.value===!0?e.tabindex||0:-1),J=o(()=>e.max-e.min),ye=o(()=>P.value-p.value),j=o(()=>ce(p.value)),I=o(()=>ce(P.value)),E=o(()=>e.vertical===!0?h.value===!0?"bottom":"top":h.value===!0?"right":"left"),se=o(()=>e.vertical===!0?"height":"width"),X=o(()=>e.vertical===!0?"width":"height"),Z=o(()=>e.vertical===!0?"vertical":"horizontal"),ge=o(()=>{const a={role:"slider","aria-valuemin":p.value,"aria-valuemax":P.value,"aria-orientation":Z.value,"data-step":e.step};return e.disable===!0?a["aria-disabled"]="true":e.readonly===!0&&(a["aria-readonly"]="true"),a}),ee=o(()=>`q-slider q-slider${m.value} q-slider--${i.value===!0?"":"in"}active inline no-wrap `+(e.vertical===!0?"row":"column")+(e.disable===!0?" disabled":" q-slider--enabled"+(S.value===!0?" q-slider--editable":""))+(C.value==="both"?" q-slider--focus":"")+(e.label||e.labelAlways===!0?" q-slider--label":"")+(e.labelAlways===!0?" q-slider--label-always":"")+(v.value===!0?" q-slider--dark":"")+(e.dense===!0?" q-slider--dense q-slider--dense"+m.value:""));function U(a){const f="q-slider__"+a;return`${f} ${f}${m.value} ${f}${m.value}${F.value}`}function te(a){const f="q-slider__"+a;return`${f} ${f}${m.value}`}const G=o(()=>{const a=e.selectionColor||e.color;return"q-slider__selection absolute"+(a!==void 0?` text-${a}`:"")}),Le=o(()=>te("markers")+" absolute overflow-hidden"),Te=o(()=>te("track-container")),Be=o(()=>U("pin")),ke=o(()=>U("label")),Pe=o(()=>U("text-container")),Ae=o(()=>U("marker-labels-container")+(e.markerLabelsClass!==void 0?` ${e.markerLabelsClass}`:"")),Fe=o(()=>"q-slider__track relative-position no-outline"+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),Ie=o(()=>{const a={[X.value]:e.trackSize};return e.trackImg!==void 0&&(a.backgroundImage=`url(${e.trackImg}) !important`),a}),De=o(()=>"q-slider__inner absolute"+(e.innerTrackColor!==void 0?` bg-${e.innerTrackColor}`:"")),Ce=o(()=>{const a=I.value-j.value,f={[E.value]:`${100*j.value}%`,[se.value]:a===0?"2px":`${100*a}%`};return e.innerTrackImg!==void 0&&(f.backgroundImage=`url(${e.innerTrackImg}) !important`),f});function Ne(a){const{min:f,max:_,step:$}=e;let B=f+a*(_-f);if($>0){const H=(B-p.value)%$;B+=(Math.abs(H)>=$/2?(H<0?-1:1)*$:0)-H}return B=N.value(B),Q(B,p.value,P.value)}function ce(a){return J.value===0?0:(a-e.min)/J.value}function de(a,f){const _=xe(a),$=e.vertical===!0?Q((_.top-f.top)/f.height,0,1):Q((_.left-f.left)/f.width,0,1);return Q(h.value===!0?1-$:$,j.value,I.value)}const A=o(()=>Ot(e.markers)===!0?e.markers:R.value),V=o(()=>{const a=[],f=A.value,_=e.max;let $=e.min;do a.push($),$+=f;while($<_);return a.push(_),a}),ae=o(()=>{const a=` ${it}${m.value}-`;return it+`${a}${e.switchMarkerLabelsSide===!0?"switched":"standard"}${a}${h.value===!0?"rtl":"ltr"}`}),ve=o(()=>e.markerLabels===!1?null:fe(e.markerLabels).map((a,f)=>({index:f,value:a.value,label:a.label||a.value,classes:ae.value+(a.classes!==void 0?" "+a.classes:""),style:{...z(a.value),...a.style||{}}}))),_e=o(()=>({markerList:ve.value,markerMap:Re.value,classes:ae.value,getStyle:z})),we=o(()=>{const a=ye.value===0?"2px":100*A.value/ye.value;return{...Ce.value,backgroundSize:e.vertical===!0?`2px ${a}%`:`${a}% 2px`}});function fe(a){if(a===!1)return null;if(a===!0)return V.value.map(oa);if(typeof a=="function")return V.value.map(_=>{const $=a(_);return je($)===!0?{...$,value:_}:{value:_,label:$}});const f=({value:_})=>_>=e.min&&_<=e.max;return Array.isArray(a)===!0?a.map(_=>je(_)===!0?_:{value:_}).filter(f):Object.keys(a).map(_=>{const $=a[_],B=Number(_);return je($)===!0?{...$,value:B}:{value:B,label:$}}).filter(f)}function z(a){return{[E.value]:`${100*(a-e.min)/J.value}%`}}const Re=o(()=>{if(e.markerLabels===!1)return null;const a={};return ve.value.forEach(f=>{a[f.value]=f}),a});function me(){if(u["marker-label-group"]!==void 0)return u["marker-label-group"](_e.value);const a=u["marker-label"]||ia;return ve.value.map(f=>a({marker:f,..._e.value}))}const l=o(()=>[[Me,y,void 0,{[Z.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function y(a){a.isFinal===!0?(w.value!==void 0&&(r(a.evt),a.touch===!0&&t(!0),w.value=void 0,n("pan","end")),i.value=!1,C.value=!1):a.isFirst===!0?(w.value=s(a.evt),r(a.evt),t(),i.value=!0,n("pan","start")):(r(a.evt),t())}function L(){C.value=!1}function re(a){r(a,s(a)),t(),M.value=!0,i.value=!0,document.addEventListener("mouseup",$e,!0)}function $e(){M.value=!1,i.value=!1,t(!0),L(),document.removeEventListener("mouseup",$e,!0)}function kt(a){r(a,s(a)),t(!0)}function Ct(a){yt.includes(a.keyCode)&&t(!0)}function _t(a){if(e.vertical===!0)return null;const f=d.lang.rtl!==e.reverse?1-a:a;return{transform:`translateX(calc(${2*f-1} * ${e.thumbSize} / 2 + ${50-100*f}%))`}}function wt(a){const f=o(()=>M.value===!1&&(C.value===a.focusValue||C.value==="both")?" q-slider--focus":""),_=o(()=>`q-slider__thumb q-slider__thumb${m.value} q-slider__thumb${m.value}-${h.value===!0?"rtl":"ltr"} absolute non-selectable`+f.value+(a.thumbColor.value!==void 0?` text-${a.thumbColor.value}`:"")),$=o(()=>({width:e.thumbSize,height:e.thumbSize,[E.value]:`${100*a.ratio.value}%`,zIndex:C.value===a.focusValue?2:void 0})),B=o(()=>a.labelColor.value!==void 0?` text-${a.labelColor.value}`:""),H=o(()=>_t(a.ratio.value)),Ee=o(()=>"q-slider__text"+(a.labelTextColor.value!==void 0?` text-${a.labelTextColor.value}`:""));return()=>{const Ve=[x("svg",{class:"q-slider__thumb-shape absolute-full",viewBox:"0 0 20 20","aria-hidden":"true"},[x("path",{d:e.thumbPath})]),x("div",{class:"q-slider__focus-ring fit"})];return(e.label===!0||e.labelAlways===!0)&&(Ve.push(x("div",{class:Be.value+" absolute fit no-pointer-events"+B.value},[x("div",{class:ke.value,style:{minWidth:e.thumbSize}},[x("div",{class:Pe.value,style:H.value},[x("span",{class:Ee.value},a.label.value)])])])),e.name!==void 0&&e.disable!==!0&&b(Ve,"push")),x("div",{class:_.value,style:$.value,...a.getNodeData()},Ve)}}function $t(a,f,_,$){const B=[];e.innerTrackColor!=="transparent"&&B.push(x("div",{key:"inner",class:De.value,style:Ce.value})),e.selectionColor!=="transparent"&&B.push(x("div",{key:"selection",class:G.value,style:a.value})),e.markers!==!1&&B.push(x("div",{key:"marker",class:Le.value,style:we.value})),$(B);const H=[Xe("div",{key:"trackC",class:Te.value,tabindex:f.value,..._.value},[x("div",{class:Fe.value,style:Ie.value},B)],"slide",S.value,()=>l.value)];if(e.markerLabels!==!1){const Ee=e.switchMarkerLabelsSide===!0?"unshift":"push";H[Ee](x("div",{key:"markerL",class:Ae.value},me()))}return H}return He(()=>{document.removeEventListener("mouseup",$e,!0)}),{state:{active:i,focus:C,preventFocus:M,dragging:w,editable:S,classes:ee,tabindex:K,attributes:ge,roundValueFn:N,keyStep:R,trackLen:J,innerMin:p,innerMinRatio:j,innerMax:P,innerMaxRatio:I,positionProp:E,sizeProp:se,isReversed:h},methods:{onActivate:re,onMobileClick:kt,onBlur:L,onKeyup:Ct,getContent:$t,getThumbRenderFn:wt,convertRatioToModel:Ne,convertModelToRatio:ce,getDraggingRatio:de}}}const da=()=>({});var ut=ht({name:"QSlider",props:{...ua,modelValue:{required:!0,default:null,validator:t=>typeof t=="number"||t===null},labelValue:[String,Number]},emits:sa,setup(t,{emit:r}){const{proxy:{$q:s}}=Ge(),{state:c,methods:e}=ca({updateValue:m,updatePosition:h,getDragging:F,formAttrs:At(t)}),n=q(null),u=q(0),d=q(0);function v(){d.value=t.modelValue===null?c.innerMin.value:Q(t.modelValue,c.innerMin.value,c.innerMax.value)}T(()=>`${t.modelValue}|${c.innerMin.value}|${c.innerMax.value}`,v),v();const b=o(()=>e.convertModelToRatio(d.value)),i=o(()=>c.active.value===!0?u.value:b.value),M=o(()=>{const S={[c.positionProp.value]:`${100*c.innerMinRatio.value}%`,[c.sizeProp.value]:`${100*(i.value-c.innerMinRatio.value)}%`};return t.selectionImg!==void 0&&(S.backgroundImage=`url(${t.selectionImg}) !important`),S}),C=e.getThumbRenderFn({focusValue:!0,getNodeData:da,ratio:i,label:o(()=>t.labelValue!==void 0?t.labelValue:d.value),thumbColor:o(()=>t.thumbColor||t.color),labelColor:o(()=>t.labelColor),labelTextColor:o(()=>t.labelTextColor)}),w=o(()=>c.editable.value!==!0?{}:s.platform.is.mobile===!0?{onClick:e.onMobileClick}:{onMousedown:e.onActivate,onFocus:p,onBlur:e.onBlur,onKeydown:P,onKeyup:e.onKeyup});function m(S){d.value!==t.modelValue&&r("update:modelValue",d.value),S===!0&&r("change",d.value)}function F(){return n.value.getBoundingClientRect()}function h(S,N=c.dragging.value){const R=e.getDraggingRatio(S,N);d.value=e.convertRatioToModel(R),u.value=t.snap!==!0||t.step===0?R:e.convertModelToRatio(d.value)}function p(){c.focus.value=!0}function P(S){if(!yt.includes(S.keyCode))return;vt(S);const N=([34,33].includes(S.keyCode)?10:1)*c.keyStep.value,R=([34,37,40].includes(S.keyCode)?-1:1)*(c.isReversed.value===!0?-1:1)*(t.vertical===!0?-1:1)*N;d.value=Q(c.roundValueFn.value(d.value+R),c.innerMin.value,c.innerMax.value),m()}return()=>{const S=e.getContent(M,c.tabindex,w,N=>{N.push(C())});return x("div",{ref:n,class:c.classes.value+(t.modelValue===null?" q-slider--no-value":""),...c.attributes.value,"aria-valuenow":t.modelValue},S)}}});const va=ie({name:"MediaPlayer",components:{},setup(){const t="youtube-player",r=Ft(),s=o(()=>r.getCurrSong),c=o(()=>r.getIsPlaying),e=q(0),n=q(50),u=q(0),d=q(0);let v;const b=()=>{c.value?v.pauseVideo():v.playVideo(),r.togglePlayPause()},i=()=>{v.setVolume(n.value)},M=h=>{const p=h.target,P=h.offsetX/p.offsetWidth*v.getDuration();v.seekTo(P)},C=h=>{v=h.target,d.value=v.getDuration()},w=h=>{h.data===YT.PlayerState.PLAYING?(console.log("playing"),m()):h.data===YT.PlayerState.BUFFERING&&(console.log("updating totalDuration old stateChange"),d.value=v.getDuration())},m=()=>{u.value=v.getCurrentTime(),e.value=u.value/d.value*100,c.value&&requestAnimationFrame(m)},F=h=>{const p=Math.floor(h/60),P=Math.floor(h%60);return`${String(p).padStart(2,"0")}:${String(P).padStart(2,"0")}`};return Ue(()=>{const h=document.createElement("script");h.src="https://www.youtube.com/iframe_api";const p=document.getElementsByTagName("script")[0];p.parentNode.insertBefore(h,p),window.onYouTubeIframeAPIReady=()=>{v=new YT.Player(t,{height:"0",width:"0",videoId:s.value.id,events:{onReady:C,onStateChange:w}})}}),T(s,h=>{v&&v.loadVideoById(h.id)}),He(()=>{delete window.onYouTubeIframeAPIReady}),{playerId:t,progress:e,isPlaying:c,volume:n,playPause:b,setVolume:i,seekTo:M,formatTime:F,totalDuration:d,currTime:u,currSong:s}}}),fa={class:"player-bar q-my-md"},ma=["src"],pa={class:"media-player"},ha=["id"],ba={class:"progress-container"},ya={class:"time-label"},ga={class:"time-label"},ka={class:"right-side"};function Ca(t,r,s,c,e,n){return D(),Je("section",fa,[Ke((D(),W(qe,{clickable:""},{default:k(()=>[g(Y,{avatar:""},{default:k(()=>[g(Ze,{rounded:""},{default:k(()=>[O("img",{src:t.currSong.imgUrl,alt:"song image"},null,8,ma)]),_:1})]),_:1}),g(Y,null,{default:k(()=>[g(he,null,{default:k(()=>[be(oe(t.currSong.title),1)]),_:1})]),_:1})]),_:1})),[[bt]]),O("div",pa,[O("div",{id:t.playerId},null,8,ha),g(le,{onClick:t.playPause,size:"32px",name:t.isPlaying?"pause_circle":"play_circle"},null,8,["onClick","name"]),O("div",ba,[O("span",ya,oe(t.formatTime(t.currTime)),1),g(ut,{modelValue:t.progress,"onUpdate:modelValue":r[0]||(r[0]=u=>t.progress=u),class:"time-slider q-mx-md",onClick:t.seekTo,min:0,max:100,color:"green"},null,8,["modelValue","onClick"]),O("span",ga,oe(t.formatTime(t.totalDuration)),1)])]),O("div",ka,[g(le,{name:"volume_off"}),g(ut,{modelValue:t.volume,"onUpdate:modelValue":r[1]||(r[1]=u=>t.volume=u),class:"volume-slider q-mx-sm",onChange:t.setVolume},null,8,["modelValue","onChange"]),g(le,{name:"volume_up"})])])}var gt=ue(va,[["render",Ca],["__scopeId","data-v-01671ca8"]]);const _a=ie({name:"MainFooter",components:{MediaPlayer:gt},setup(){return{}}}),wa=O("img",{src:"https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"},null,-1),$a=O("div",null,"Title",-1);function Sa(t,r,s,c,e,n){const u=ne("MediaPlayer");return D(),W(Ht,{elevated:"",class:"bg-grey-8 text-white"},{default:k(()=>[g(rt,{class:"h-8"},{default:k(()=>[g(u)]),_:1}),g(rt,{class:"lt-sm"},{default:k(()=>[g(Ut,null,{default:k(()=>[g(Ze,null,{default:k(()=>[wa]),_:1}),$a]),_:1})]),_:1})]),_:1})}var Ma=ue(_a,[["render",Sa]]);const xa=ie({name:"LibraryPreview",props:{mixtape:{type:Object}},components:{},setup(t){return{}}}),qa=["src"];function La(t,r,s,c,e,n){return Ke((D(),W(qe,{clickable:"",to:`/mixtape/${t.mixtape._id}`},{default:k(()=>[g(Y,{avatar:""},{default:k(()=>[g(Ze,{rounded:""},{default:k(()=>[O("img",{src:t.mixtape.imgUrl,alt:"mixtape image"},null,8,qa)]),_:1})]),_:1}),g(Y,null,{default:k(()=>[g(he,null,{default:k(()=>[be(oe(t.mixtape.name),1)]),_:1}),g(he,{caption:""},{default:k(()=>{var u;return[be("Mixtape * "+oe((u=t.mixtape.createdBy)==null?void 0:u.nickname),1)]}),_:1})]),_:1})]),_:1},8,["to"])),[[bt]])}var Ta=ue(xa,[["render",La]]);const Ba=ie({name:"LibraryList",props:{mixtapes:{type:Array}},components:{LibraryPreview:Ta},setup(t){return{}}});function Pa(t,r,s,c,e,n){const u=ne("LibraryPreview");return D(),W(st,null,{default:k(()=>[(D(!0),Je(pt,null,mt(t.mixtapes,d=>(D(),W(u,{key:d._id,mixtape:d},null,8,["mixtape"]))),128))]),_:1})}var Aa=ue(Ba,[["render",Pa]]);const Fa=[{title:"Home",icon:"home",link:"/"},{title:"Search",icon:"search",link:"/search"}],Ia=ie({name:"MainLayout",components:{NavLink:la,MediaPlayer:gt,MainFooter:Ma,LibraryList:Aa},setup(){const t=Qt(),r=It();Ue(()=>{r.loadMixtapes()});const s=async()=>{const u=await r.saveMixtape(Dt.getEmptyMixtape());t.push(`/mixtape/${u._id}`)},c=o(()=>r.getMixtapes),e=q(!0),n=q(!0);return{links:Fa,drawerMini:e,drawerOpen:n,mixtapes:c,onAddMixtape:s,toggleDrawerSize(){e.value=!e.value}}}}),Da={class:"library-container"};function Na(t,r,s,c,e,n){const u=ne("NavLink"),d=ne("LibraryList"),v=ne("router-view"),b=ne("MainFooter");return D(),W(Kt,{view:"lHh Lpr lFf"},{default:k(()=>[g(aa,{"show-if-above":"",bordered:"",mini:t.drawerMini,breakpoint:616},{default:k(()=>[g(st,null,{default:k(()=>[(D(!0),Je(pt,null,mt(t.links,i=>(D(),W(u,jt({key:i.title},i),null,16))),128))]),_:1}),O("section",Da,[g(qe,{clickable:"",tag:"div",onClick:t.toggleDrawerSize},{default:k(()=>[g(Y,{avatar:""},{default:k(()=>[g(le,{name:"album"})]),_:1}),g(Y,null,{default:k(()=>[g(he,null,{default:k(()=>[be("My library")]),_:1})]),_:1}),g(Y,null,{default:k(()=>[g(le,{name:"add",size:"24px",onClick:Wt(t.onAddMixtape,["prevent"])},null,8,["onClick"])]),_:1})]),_:1},8,["onClick"]),t.mixtapes?(D(),W(d,{key:0,mixtapes:t.mixtapes},null,8,["mixtapes"])):ft("",!0)])]),_:1},8,["mini"]),g(Gt,null,{default:k(()=>[g(v)]),_:1}),g(b)]),_:1})}var Ya=ue(Ia,[["render",Na]]);export{Ya as default};
