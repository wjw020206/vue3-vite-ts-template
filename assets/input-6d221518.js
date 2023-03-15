import{d as M,g as dt,ak as pt,m as f,al as ft,am as vt,an as Ze,A as s,i as mt,J as x,ao as ht,o as ue,a as Se,n as Ae,k as yt,ap as gt,F as me,H as Oe,Y as ie,l as xe,aq as bt,ar as Et,as as wt,at as St,a6 as xt,au as Tt,u as ze,av as he,aw as Ct,ax as Ft,ay as Pt,M as kt,e as j,E as z,az as It,x as Nt,C as _t,p as m,q as P,Q as y,U as ye,z as S,s as G,y as H,O as I,v as Z,S as oe,R as q,aA as ge,t as Lt,aB as Dt,V as Rt,N as At,B as ne,P as Ot,_ as qe,ac as Me,D as zt,aC as Mt}from"./index-84ae1b0e.js";function Ge(e){return e==null}class Vt extends Error{constructor(a){super(a),this.name="ElementPlusError"}}function xo(e,a){throw new Vt(`[${e}] ${a}`)}function To(e,a){}const Bt=(e,a)=>{if(!M)return!1;const o={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(a)],t=dt(e,o);return["scroll","auto","overlay"].some(r=>t.includes(r))},Co=(e,a)=>{if(!M)return;let o=e;for(;o;){if([window,document,document.documentElement].includes(o))return window;if(Bt(o,a))return o;o=o.parentNode}return o};let ae;const Fo=e=>{var a;if(!M)return 0;if(ae!==void 0)return ae;const o=document.createElement("div");o.className=`${e}-scrollbar__wrap`,o.style.visibility="hidden",o.style.width="100px",o.style.position="absolute",o.style.top="-9999px",document.body.appendChild(o);const t=o.offsetWidth;o.style.overflow="scroll";const r=document.createElement("div");r.style.width="100%",o.appendChild(r);const u=r.offsetWidth;return(a=o.parentNode)==null||a.removeChild(o),ae=t-u,ae};function Po(e,a){if(!M)return;if(!a){e.scrollTop=0;return}const o=[];let t=a.offsetParent;for(;t!==null&&e!==t&&e.contains(t);)o.push(t),t=t.offsetParent;const r=a.offsetTop+o.reduce((d,E)=>d+E.offsetTop,0),u=r+a.offsetHeight,c=e.scrollTop,b=c+e.clientHeight;r<c?e.scrollTop=r:u>b&&(e.scrollTop=u-e.clientHeight)}const Xe={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},we="update:modelValue",ko="change",Io=e=>["",...pt].includes(e),Ut=e=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e),$t=e=>e,Kt=["class","style"],Ht=/^on[A-Z]/,Wt=(e={})=>{const{excludeListeners:a=!1,excludeKeys:o}=e,t=f(()=>((o==null?void 0:o.value)||[]).concat(Kt)),r=vt();return r?f(()=>{var u;return ft(Object.entries((u=r.proxy)==null?void 0:u.$attrs).filter(([c])=>!t.value.includes(c)&&!(a&&Ht.test(c))))}):f(()=>({}))};var jt={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const Yt=e=>(a,o)=>Jt(a,o,s(e)),Jt=(e,a,o)=>ht(o,e,e).replace(/\{(\w+)\}/g,(t,r)=>{var u;return`${(u=a==null?void 0:a[r])!=null?u:`{${r}}`}`}),Zt=e=>{const a=f(()=>s(e).name),o=mt(e)?e:x(e);return{lang:a,locale:o,t:Yt(e)}},No=()=>{const e=Ze("locale");return Zt(f(()=>e.value||jt))};let W=[];const Ve=e=>{const a=e;a.key===Xe.esc&&W.forEach(o=>o(a))},qt=e=>{ue(()=>{W.length===0&&document.addEventListener("keydown",Ve),M&&W.push(e)}),Se(()=>{W=W.filter(a=>a!==e),W.length===0&&M&&document.removeEventListener("keydown",Ve)})},Be=x(0),_o=()=>{const e=Ze("zIndex",2e3),a=f(()=>e.value+Be.value);return{initialZIndex:e,currentZIndex:a,nextZIndex:()=>(Be.value++,a.value)}};function Gt(e){const a=x();function o(){if(e.value==null)return;const{selectionStart:r,selectionEnd:u,value:c}=e.value;if(r==null||u==null)return;const b=c.slice(0,Math.max(0,r)),d=c.slice(Math.max(0,u));a.value={selectionStart:r,selectionEnd:u,value:c,beforeTxt:b,afterTxt:d}}function t(){if(e.value==null||a.value==null)return;const{value:r}=e.value,{beforeTxt:u,afterTxt:c,selectionStart:b}=a.value;if(u==null||c==null||b==null)return;let d=r.length;if(r.endsWith(c))d=r.length-c.length;else if(r.startsWith(u))d=u.length;else{const E=u[b-1],T=r.indexOf(E,b-1);T!==-1&&(d=T+1)}e.value.setSelectionRange(d,d)}return[o,t]}let F;const Xt=`
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Qt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function eo(e){const a=window.getComputedStyle(e),o=a.getPropertyValue("box-sizing"),t=Number.parseFloat(a.getPropertyValue("padding-bottom"))+Number.parseFloat(a.getPropertyValue("padding-top")),r=Number.parseFloat(a.getPropertyValue("border-bottom-width"))+Number.parseFloat(a.getPropertyValue("border-top-width"));return{contextStyle:Qt.map(c=>`${c}:${a.getPropertyValue(c)}`).join(";"),paddingSize:t,borderSize:r,boxSizing:o}}function Ue(e,a=1,o){var t;F||(F=document.createElement("textarea"),document.body.appendChild(F));const{paddingSize:r,borderSize:u,boxSizing:c,contextStyle:b}=eo(e);F.setAttribute("style",`${b};${Xt}`),F.value=e.value||e.placeholder||"";let d=F.scrollHeight;const E={};c==="border-box"?d=d+u:c==="content-box"&&(d=d-r),F.value="";const T=F.scrollHeight-r;if(Ae(a)){let v=T*a;c==="border-box"&&(v=v+r+u),d=Math.max(v,d),E.minHeight=`${v}px`}if(Ae(o)){let v=T*o;c==="border-box"&&(v=v+r+u),d=Math.min(v,d)}return E.height=`${d}px`,(t=F.parentNode)==null||t.removeChild(F),F=void 0,E}const to=yt({id:{type:String,default:void 0},size:gt,disabled:Boolean,modelValue:{type:me([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:me([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Oe},prefixIcon:{type:Oe},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:me([Object,Array,String]),default:()=>$t({})}}),oo={[we]:e=>ie(e),input:e=>ie(e),change:e=>ie(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},no=["role"],ao=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],so=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],ro=xe({name:"ElInput",inheritAttrs:!1}),lo=xe({...ro,props:to,emits:oo,setup(e,{expose:a,emit:o}){const t=e,r=bt(),u=Et(),c=f(()=>{const n={};return t.containerRole==="combobox"&&(n["aria-haspopup"]=r["aria-haspopup"],n["aria-owns"]=r["aria-owns"],n["aria-expanded"]=r["aria-expanded"]),n}),b=f(()=>[t.type==="textarea"?w.b():l.b(),l.m(X.value),l.is("disabled",i.value),l.is("exceed",ot.value),{[l.b("group")]:u.prepend||u.append,[l.bm("group","append")]:u.append,[l.bm("group","prepend")]:u.prepend,[l.m("prefix")]:u.prefix||t.prefixIcon,[l.m("suffix")]:u.suffix||t.suffixIcon||t.clearable||t.showPassword,[l.bm("suffix","password-clear")]:Q.value&&de.value},r.class]),d=f(()=>[l.e("wrapper"),l.is("focus",N.value)]),E=Wt({excludeKeys:f(()=>Object.keys(c.value))}),{form:T,formItem:v}=wt(),{inputId:Y}=St(t,{formItemContext:v}),X=xt(),i=Tt(),l=ze("input"),w=ze("textarea"),g=he(),h=he(),N=x(!1),V=x(!1),_=x(!1),B=x(!1),R=x(),A=he(t.inputStyle),k=f(()=>g.value||h.value),U=f(()=>{var n;return(n=T==null?void 0:T.statusIcon)!=null?n:!1}),$=f(()=>(v==null?void 0:v.validateState)||""),C=f(()=>$.value&&Ct[$.value]),et=f(()=>B.value?Ft:Pt),tt=f(()=>[r.style,t.inputStyle]),Fe=f(()=>[t.inputStyle,A.value,{resize:t.resize}]),L=f(()=>Ge(t.modelValue)?"":String(t.modelValue)),Q=f(()=>t.clearable&&!i.value&&!t.readonly&&!!L.value&&(N.value||V.value)),de=f(()=>t.showPassword&&!i.value&&!t.readonly&&!!L.value&&(!!L.value||N.value)),K=f(()=>t.showWordLimit&&!!E.value.maxlength&&(t.type==="text"||t.type==="textarea")&&!i.value&&!t.readonly&&!t.showPassword),pe=f(()=>Array.from(L.value).length),ot=f(()=>!!K.value&&pe.value>Number(E.value.maxlength)),nt=f(()=>!!u.suffix||!!t.suffixIcon||Q.value||t.showPassword||K.value||!!$.value&&U.value),[at,st]=Gt(g);kt(h,n=>{if(!K.value||t.resize!=="both")return;const p=n[0],{width:O}=p.contentRect;R.value={right:`calc(100% - ${O+15+6}px)`}});const ee=()=>{const{type:n,autosize:p}=t;if(!(!M||n!=="textarea"))if(p){const O=Me(p)?p.minRows:void 0,ve=Me(p)?p.maxRows:void 0;A.value={...Ue(h.value,O,ve)}}else A.value={minHeight:Ue(h.value).minHeight}},J=()=>{const n=k.value;!n||n.value===L.value||(n.value=L.value)},fe=async n=>{at();let{value:p}=n.target;if(t.formatter&&(p=t.parser?t.parser(p):p,p=t.formatter(p)),!_.value){if(p===L.value){J();return}o(we,p),o("input",p),await z(),J(),st()}},Pe=n=>{o("change",n.target.value)},ke=n=>{o("compositionstart",n),_.value=!0},Ie=n=>{var p;o("compositionupdate",n);const O=(p=n.target)==null?void 0:p.value,ve=O[O.length-1]||"";_.value=!Ut(ve)},Ne=n=>{o("compositionend",n),_.value&&(_.value=!1,fe(n))},rt=()=>{B.value=!B.value,te()},te=async()=>{var n;await z(),(n=k.value)==null||n.focus()},lt=()=>{var n;return(n=k.value)==null?void 0:n.blur()},_e=n=>{N.value=!0,o("focus",n)},Le=n=>{var p;N.value=!1,o("blur",n),t.validateEvent&&((p=v==null?void 0:v.validate)==null||p.call(v,"blur").catch(O=>void 0))},it=n=>{V.value=!1,o("mouseleave",n)},ut=n=>{V.value=!0,o("mouseenter",n)},De=n=>{o("keydown",n)},ct=()=>{var n;(n=k.value)==null||n.select()},Re=()=>{o(we,""),o("change",""),o("clear"),o("input","")};return j(()=>t.modelValue,()=>{var n;z(()=>ee()),t.validateEvent&&((n=v==null?void 0:v.validate)==null||n.call(v,"change").catch(p=>void 0))}),j(L,()=>J()),j(()=>t.type,async()=>{await z(),J(),ee()}),ue(()=>{!t.formatter&&t.parser,J(),z(ee)}),a({input:g,textarea:h,ref:k,textareaStyle:Fe,autosize:It(t,"autosize"),focus:te,blur:lt,select:ct,clear:Re,resizeTextarea:ee}),(n,p)=>Nt((m(),P("div",ge(s(c),{class:s(b),style:s(tt),role:n.containerRole,onMouseenter:ut,onMouseleave:it}),[y(" input "),n.type!=="textarea"?(m(),P(ye,{key:0},[y(" prepend slot "),n.$slots.prepend?(m(),P("div",{key:0,class:S(s(l).be("group","prepend"))},[G(n.$slots,"prepend")],2)):y("v-if",!0),H("div",{class:S(s(d))},[y(" prefix slot "),n.$slots.prefix||n.prefixIcon?(m(),P("span",{key:0,class:S(s(l).e("prefix"))},[H("span",{class:S(s(l).e("prefix-inner")),onClick:te},[G(n.$slots,"prefix"),n.prefixIcon?(m(),I(s(q),{key:0,class:S(s(l).e("icon"))},{default:Z(()=>[(m(),I(oe(n.prefixIcon)))]),_:1},8,["class"])):y("v-if",!0)],2)],2)):y("v-if",!0),H("input",ge({id:s(Y),ref_key:"input",ref:g,class:s(l).e("inner")},s(E),{type:n.showPassword?B.value?"text":"password":n.type,disabled:s(i),formatter:n.formatter,parser:n.parser,readonly:n.readonly,autocomplete:n.autocomplete,tabindex:n.tabindex,"aria-label":n.label,placeholder:n.placeholder,style:n.inputStyle,form:t.form,onCompositionstart:ke,onCompositionupdate:Ie,onCompositionend:Ne,onInput:fe,onFocus:_e,onBlur:Le,onChange:Pe,onKeydown:De}),null,16,ao),y(" suffix slot "),s(nt)?(m(),P("span",{key:1,class:S(s(l).e("suffix"))},[H("span",{class:S(s(l).e("suffix-inner")),onClick:te},[!s(Q)||!s(de)||!s(K)?(m(),P(ye,{key:0},[G(n.$slots,"suffix"),n.suffixIcon?(m(),I(s(q),{key:0,class:S(s(l).e("icon"))},{default:Z(()=>[(m(),I(oe(n.suffixIcon)))]),_:1},8,["class"])):y("v-if",!0)],64)):y("v-if",!0),s(Q)?(m(),I(s(q),{key:1,class:S([s(l).e("icon"),s(l).e("clear")]),onMousedown:Rt(s(At),["prevent"]),onClick:Re},{default:Z(()=>[Lt(s(Dt))]),_:1},8,["class","onMousedown"])):y("v-if",!0),s(de)?(m(),I(s(q),{key:2,class:S([s(l).e("icon"),s(l).e("password")]),onClick:rt},{default:Z(()=>[(m(),I(oe(s(et))))]),_:1},8,["class"])):y("v-if",!0),s(K)?(m(),P("span",{key:3,class:S(s(l).e("count"))},[H("span",{class:S(s(l).e("count-inner"))},ne(s(pe))+" / "+ne(s(E).maxlength),3)],2)):y("v-if",!0),s($)&&s(C)&&s(U)?(m(),I(s(q),{key:4,class:S([s(l).e("icon"),s(l).e("validateIcon"),s(l).is("loading",s($)==="validating")])},{default:Z(()=>[(m(),I(oe(s(C))))]),_:1},8,["class"])):y("v-if",!0)],2)],2)):y("v-if",!0)],2),y(" append slot "),n.$slots.append?(m(),P("div",{key:1,class:S(s(l).be("group","append"))},[G(n.$slots,"append")],2)):y("v-if",!0)],64)):(m(),P(ye,{key:1},[y(" textarea "),H("textarea",ge({id:s(Y),ref_key:"textarea",ref:h,class:s(w).e("inner")},s(E),{tabindex:n.tabindex,disabled:s(i),readonly:n.readonly,autocomplete:n.autocomplete,style:s(Fe),"aria-label":n.label,placeholder:n.placeholder,form:t.form,onCompositionstart:ke,onCompositionupdate:Ie,onCompositionend:Ne,onInput:fe,onFocus:_e,onBlur:Le,onChange:Pe,onKeydown:De}),null,16,so),s(K)?(m(),P("span",{key:0,style:Ot(R.value),class:S(s(l).e("count"))},ne(s(pe))+" / "+ne(s(E).maxlength),7)):y("v-if",!0)],64))],16,no)),[[_t,n.type!=="hidden"]])}});var io=qe(lo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Lo=zt(io),be="focus-trap.focus-after-trapped",Ee="focus-trap.focus-after-released",uo="focus-trap.focusout-prevented",$e={cancelable:!0,bubbles:!1},co={cancelable:!0,bubbles:!1},Ke="focusAfterTrapped",He="focusAfterReleased",po=Symbol("elFocusTrap"),Te=x(),ce=x(0),Ce=x(0);let se=0;const Qe=e=>{const a=[],o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:t=>{const r=t.tagName==="INPUT"&&t.type==="hidden";return t.disabled||t.hidden||r?NodeFilter.FILTER_SKIP:t.tabIndex>=0||t===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)a.push(o.currentNode);return a},We=(e,a)=>{for(const o of e)if(!fo(o,a))return o},fo=(e,a)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(a&&e===a)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},vo=e=>{const a=Qe(e),o=We(a,e),t=We(a.reverse(),e);return[o,t]},mo=e=>e instanceof HTMLInputElement&&"select"in e,D=(e,a)=>{if(e&&e.focus){const o=document.activeElement;e.focus({preventScroll:!0}),Ce.value=window.performance.now(),e!==o&&mo(e)&&a&&e.select()}};function je(e,a){const o=[...e],t=e.indexOf(a);return t!==-1&&o.splice(t,1),o}const ho=()=>{let e=[];return{push:t=>{const r=e[0];r&&t!==r&&r.pause(),e=je(e,t),e.unshift(t)},remove:t=>{var r,u;e=je(e,t),(u=(r=e[0])==null?void 0:r.resume)==null||u.call(r)}}},yo=(e,a=!1)=>{const o=document.activeElement;for(const t of e)if(D(t,a),document.activeElement!==o)return},Ye=ho(),go=()=>ce.value>Ce.value,re=()=>{Te.value="pointer",ce.value=window.performance.now()},Je=()=>{Te.value="keyboard",ce.value=window.performance.now()},bo=()=>(ue(()=>{se===0&&(document.addEventListener("mousedown",re),document.addEventListener("touchstart",re),document.addEventListener("keydown",Je)),se++}),Se(()=>{se--,se<=0&&(document.removeEventListener("mousedown",re),document.removeEventListener("touchstart",re),document.removeEventListener("keydown",Je))}),{focusReason:Te,lastUserFocusTimestamp:ce,lastAutomatedFocusTimestamp:Ce}),le=e=>new CustomEvent(uo,{...co,detail:e}),Eo=xe({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[Ke,He,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:a}){const o=x();let t,r;const{focusReason:u}=bo();qt(i=>{e.trapped&&!c.paused&&a("release-requested",i)});const c={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},b=i=>{if(!e.loop&&!e.trapped||c.paused)return;const{key:l,altKey:w,ctrlKey:g,metaKey:h,currentTarget:N,shiftKey:V}=i,{loop:_}=e,B=l===Xe.tab&&!w&&!g&&!h,R=document.activeElement;if(B&&R){const A=N,[k,U]=vo(A);if(k&&U){if(!V&&R===U){const C=le({focusReason:u.value});a("focusout-prevented",C),C.defaultPrevented||(i.preventDefault(),_&&D(k,!0))}else if(V&&[k,A].includes(R)){const C=le({focusReason:u.value});a("focusout-prevented",C),C.defaultPrevented||(i.preventDefault(),_&&D(U,!0))}}else if(R===A){const C=le({focusReason:u.value});a("focusout-prevented",C),C.defaultPrevented||i.preventDefault()}}};Mt(po,{focusTrapRef:o,onKeydown:b}),j(()=>e.focusTrapEl,i=>{i&&(o.value=i)},{immediate:!0}),j([o],([i],[l])=>{i&&(i.addEventListener("keydown",b),i.addEventListener("focusin",T),i.addEventListener("focusout",v)),l&&(l.removeEventListener("keydown",b),l.removeEventListener("focusin",T),l.removeEventListener("focusout",v))});const d=i=>{a(Ke,i)},E=i=>a(He,i),T=i=>{const l=s(o);if(!l)return;const w=i.target,g=i.relatedTarget,h=w&&l.contains(w);e.trapped||g&&l.contains(g)||(t=g),h&&a("focusin",i),!c.paused&&e.trapped&&(h?r=w:D(r,!0))},v=i=>{const l=s(o);if(!(c.paused||!l))if(e.trapped){const w=i.relatedTarget;!Ge(w)&&!l.contains(w)&&setTimeout(()=>{if(!c.paused&&e.trapped){const g=le({focusReason:u.value});a("focusout-prevented",g),g.defaultPrevented||D(r,!0)}},0)}else{const w=i.target;w&&l.contains(w)||a("focusout",i)}};async function Y(){await z();const i=s(o);if(i){Ye.push(c);const l=i.contains(document.activeElement)?t:document.activeElement;if(t=l,!i.contains(l)){const g=new Event(be,$e);i.addEventListener(be,d),i.dispatchEvent(g),g.defaultPrevented||z(()=>{let h=e.focusStartEl;ie(h)||(D(h),document.activeElement!==h&&(h="first")),h==="first"&&yo(Qe(i),!0),(document.activeElement===l||h==="container")&&D(i)})}}}function X(){const i=s(o);if(i){i.removeEventListener(be,d);const l=new CustomEvent(Ee,{...$e,detail:{focusReason:u.value}});i.addEventListener(Ee,E),i.dispatchEvent(l),!l.defaultPrevented&&(u.value=="keyboard"||!go())&&D(t??document.body),i.removeEventListener(Ee,d),Ye.remove(c)}}return ue(()=>{e.trapped&&Y(),j(()=>e.trapped,i=>{i?Y():X()})}),Se(()=>{e.trapped&&X()}),{onKeydown:b}}});function wo(e,a,o,t,r,u){return G(e.$slots,"default",{handleKeydown:e.onKeydown})}var Do=qe(Eo,[["render",wo],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{ko as C,Xe as E,po as F,we as U,Do as a,Lo as b,No as c,To as d,Ge as e,Ut as f,Fo as g,Wt as h,Io as i,Co as j,$t as m,Po as s,xo as t,_o as u};
