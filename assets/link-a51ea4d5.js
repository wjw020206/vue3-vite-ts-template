import{k as m,aG as y,m as u,u as h,x as v,F as a,O as i,G as r,H as b,P as C,ai as o,t as E,Q as t,K as c,q as d,_,am as g}from"./index-13efeb1f.js";const B=m({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:y}}),w={click:l=>l instanceof MouseEvent},P=["href"],$=u({name:"ElLink"}),L=u({...$,props:B,emits:w,setup(l,{emit:p}){const s=l,n=h("link"),f=v(()=>[n.b(),n.m(s.type),n.is("disabled",s.disabled),n.is("underline",s.underline&&!s.disabled)]);function k(e){s.disabled||p("click",e)}return(e,G)=>(a(),i("a",{class:c(o(f)),href:e.disabled||!e.href?void 0:e.href,onClick:k},[e.icon?(a(),r(o(E),{key:0},{default:b(()=>[(a(),r(C(e.icon)))]),_:1})):t("v-if",!0),e.$slots.default?(a(),i("span",{key:1,class:c(o(n).e("inner"))},[d(e.$slots,"default")],2)):t("v-if",!0),e.$slots.icon?d(e.$slots,"icon",{key:2}):t("v-if",!0)],10,P))}});var S=_(L,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const K=g(S);export{K as E};
