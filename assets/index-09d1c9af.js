import{k as P,al as X,Z,n as O,am as H,K as I,an as ve,m as x,ao as ye,ap as _e,l as C,u as A,p as c,q as w,y as G,x as Y,aq as ee,A as e,i as le,z as B,s as N,aa as E,B as F,W as q,_ as D,E as oe,Q as ke,a6 as ge,ar as he,as as Ee,o as Ve,at as Be,a5 as Se,a7 as we,e as Re,D as $e,au as ae,P as V,v as i,V as K,av as z,t as _,a9 as xe,R as Q,aw as Ce,a4 as se,af as J}from"./index-a8835d9d.js";import{E as Fe}from"./card-3bd297aa.js";import{E as Ie,a as Ge,b as Ke,c as Le,d as ze,e as Pe}from"./form-item-a0ed2b2a.js";import{U as M,C as Ne,d as Ue,b as Te}from"./input-1c8ff233.js";const te=P({size:X,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),Ae=P({...te,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),ne={[M]:d=>Z(d)||O(d)||H(d),[Ne]:d=>Z(d)||O(d)||H(d)},re=Symbol("radioGroupKey"),de=(d,m)=>{const n=I(),a=ve(re,void 0),t=x(()=>!!a),b=x({get(){return t.value?a.modelValue:d.modelValue},set(s){t.value?a.changeEvent(s):m&&m(M,s),n.value.checked=d.modelValue===d.label}}),u=ye(x(()=>a==null?void 0:a.size)),v=_e(x(()=>a==null?void 0:a.disabled)),r=I(!1),f=x(()=>v.value||t.value&&b.value!==d.label?-1:0);return{radioRef:n,isGroup:t,radioGroup:a,focus:r,size:u,disabled:v,tabIndex:f,modelValue:b}},qe=["value","name","disabled"],De=C({name:"ElRadio"}),Me=C({...De,props:Ae,emits:ne,setup(d,{emit:m}){const n=d,a=A("radio"),{radioRef:t,radioGroup:b,focus:u,size:v,disabled:r,modelValue:f}=de(n,m);function s(){oe(()=>m("change",f.value))}return(o,p)=>{var k;return c(),w("label",{class:B([e(a).b(),e(a).is("disabled",e(r)),e(a).is("focus",e(u)),e(a).is("bordered",o.border),e(a).is("checked",e(f)===o.label),e(a).m(e(v))])},[G("span",{class:B([e(a).e("input"),e(a).is("disabled",e(r)),e(a).is("checked",e(f)===o.label)])},[Y(G("input",{ref_key:"radioRef",ref:t,"onUpdate:modelValue":p[0]||(p[0]=h=>le(f)?f.value=h:null),class:B(e(a).e("original")),value:o.label,name:o.name||((k=e(b))==null?void 0:k.name),disabled:e(r),type:"radio",onFocus:p[1]||(p[1]=h=>u.value=!0),onBlur:p[2]||(p[2]=h=>u.value=!1),onChange:s},null,42,qe),[[ee,e(f)]]),G("span",{class:B(e(a).e("inner"))},null,2)],2),G("span",{class:B(e(a).e("label")),onKeydown:p[3]||(p[3]=q(()=>{},["stop"]))},[N(o.$slots,"default",{},()=>[E(F(o.label),1)])],34)],2)}}});var We=D(Me,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const je=P({...te,name:{type:String,default:""}}),Ze=["value","name","disabled"],Oe=C({name:"ElRadioButton"}),He=C({...Oe,props:je,setup(d){const m=d,n=A("radio"),{radioRef:a,focus:t,size:b,disabled:u,modelValue:v,radioGroup:r}=de(m),f=x(()=>({backgroundColor:(r==null?void 0:r.fill)||"",borderColor:(r==null?void 0:r.fill)||"",boxShadow:r!=null&&r.fill?`-1px 0 0 0 ${r.fill}`:"",color:(r==null?void 0:r.textColor)||""}));return(s,o)=>{var p;return c(),w("label",{class:B([e(n).b("button"),e(n).is("active",e(v)===s.label),e(n).is("disabled",e(u)),e(n).is("focus",e(t)),e(n).bm("button",e(b))])},[Y(G("input",{ref_key:"radioRef",ref:a,"onUpdate:modelValue":o[0]||(o[0]=k=>le(v)?v.value=k:null),class:B(e(n).be("button","original-radio")),value:s.label,type:"radio",name:s.name||((p=e(r))==null?void 0:p.name),disabled:e(u),onFocus:o[1]||(o[1]=k=>t.value=!0),onBlur:o[2]||(o[2]=k=>t.value=!1)},null,42,Ze),[[ee,e(v)]]),G("span",{class:B(e(n).be("button","inner")),style:ke(e(v)===s.label?e(f):{}),onKeydown:o[3]||(o[3]=q(()=>{},["stop"]))},[N(s.$slots,"default",{},()=>[E(F(s.label),1)])],38)],2)}}});var ue=D(He,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const Qe=P({id:{type:String,default:void 0},size:X,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),Je=ne,Xe=["id","aria-label","aria-labelledby"],Ye=C({name:"ElRadioGroup"}),el=C({...Ye,props:Qe,emits:Je,setup(d,{emit:m}){const n=d,a=A("radio"),t=ge(),b=I(),{formItem:u}=he(),{inputId:v,isLabeledByFormItem:r}=Ee(n,{formItemContext:u}),f=o=>{m(M,o),oe(()=>m("change",o))};Ve(()=>{const o=b.value.querySelectorAll("[type=radio]"),p=o[0];!Array.from(o).some(k=>k.checked)&&p&&(p.tabIndex=0)});const s=x(()=>n.name||t.value);return Be(re,Se({...we(n),changeEvent:f,name:s})),Re(()=>n.modelValue,()=>{n.validateEvent&&(u==null||u.validate("change").catch(o=>Ue()))}),(o,p)=>(c(),w("div",{id:e(v),ref_key:"radioGroupRef",ref:b,class:B(e(a).b("group")),role:"radiogroup","aria-label":e(r)?void 0:o.label||"radio-group","aria-labelledby":e(r)?e(u).labelId:void 0},[N(o.$slots,"default")],10,Xe))}});var ie=D(el,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const ll=$e(We,{RadioButton:ue,RadioGroup:ie}),ol=ae(ie);ae(ue);const al=C({__name:"index",props:{fieldList:null,model:null,options:null},emits:["submit","reset","cancel"],setup(d,{expose:m,emit:n}){const a=d,t=I({}),b=I(),u=x(()=>Object.assign({labelPosition:"right",disabled:!1,submitButtonText:"提交",resetButtonText:"重置",cancelButtonText:"取消"},a==null?void 0:a.options));m({formRef:b}),a.fieldList.map(s=>{const o=s.type==="checkbox"?[]:"";a.model?t.value=a.model:t.value[s.field]=s.value||o});const v=s=>{s&&s.validate(o=>{if(o)n("submit",t.value);else return!1})},r=s=>{s&&v(b.value)},f=s=>{s&&s.resetFields()};return(s,o)=>{const p=ll,k=ol,h=Ie,W=Ge,pe=Ke,ce=Le,be=ze,fe=Te,U=se,me=Pe;return c(),V(me,Ce({onSubmit:o[3]||(o[3]=q(()=>{},["prevent"])),model:e(t),class:"demo-form-inline"},e(u),{ref_key:"formRef",ref:b}),{default:i(()=>[(c(!0),w(K,null,z(d.fieldList,(l,L)=>(c(),w(K,{key:L},[l.type==="radio"?(c(),V(h,{key:0,label:l.label,rules:l.rules,prop:[l.field]},{default:i(()=>[_(k,{modelValue:e(t)[l.field],"onUpdate:modelValue":y=>e(t)[l.field]=y,disabled:l.disabled},{default:i(()=>{var y;return[(c(!0),w(K,null,z((y=l.options)==null?void 0:y.data,g=>{var S,R;return c(),V(p,{label:g[((S=l.options)==null?void 0:S.valueKey)||"value"],size:"large",key:g[((R=l.options)==null?void 0:R.valueKey)||"value"]},{default:i(()=>{var $;return[E(F(g[(($=l.options)==null?void 0:$.labelkey)||"label"]),1)]}),_:2},1032,["label"])}),128))]}),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1032,["label","rules","prop"])):l.type==="checkbox"?(c(),V(h,{key:1,label:l.label,rules:l.rules,prop:[l.field]},{default:i(()=>[_(pe,{modelValue:e(t)[l.field],"onUpdate:modelValue":y=>e(t)[l.field]=y,disabled:l.disabled},{default:i(()=>{var y;return[(c(!0),w(K,null,z((y=l.options)==null?void 0:y.data,g=>{var S,R;return c(),V(W,{key:g[((S=l.options)==null?void 0:S.valueKey)||"value"],label:g[((R=l.options)==null?void 0:R.valueKey)||"value"]},{default:i(()=>{var $;return[E(F(g[(($=l.options)==null?void 0:$.labelkey)||"label"]),1)]}),_:2},1032,["label"])}),128))]}),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1032,["label","rules","prop"])):l.type==="select"?(c(),V(h,{key:2,label:l.label,rules:l.rules,prop:[l.field]},{default:i(()=>{var y;return[_(be,{modelValue:e(t)[l.field],"onUpdate:modelValue":g=>e(t)[l.field]=g,clearable:l.clearable,placeholder:((y=l.options)==null?void 0:y.placeholder)||"请选择"},{default:i(()=>{var g;return[(c(!0),w(K,null,z((g=l.options)==null?void 0:g.data,S=>{var R,$,j;return c(),V(ce,{key:S[((R=l.options)==null?void 0:R.valueKey)||"value"],label:S[(($=l.options)==null?void 0:$.labelkey)||"label"],value:S[((j=l.options)==null?void 0:j.valueKey)||"value"]},null,8,["label","value"])}),128))]}),_:2},1032,["modelValue","onUpdate:modelValue","clearable","placeholder"])]}),_:2},1032,["label","rules","prop"])):(c(),V(h,{key:3,label:l.label,rules:l.rules,prop:[l.field]},{default:i(()=>[_(fe,{modelValue:e(t)[l.field],"onUpdate:modelValue":y=>e(t)[l.field]=y,readonly:l.readonly,type:l.type??"text",showPassword:l.showPassword,clearable:l.clearable,placeholder:l.placeholder||l.label,disabled:l.disabled,onKeyup:xe(y=>r(l.enterable),["enter"])},null,8,["modelValue","onUpdate:modelValue","readonly","type","showPassword","clearable","placeholder","disabled","onKeyup"])]),_:2},1032,["label","rules","prop"]))],64))),128)),_(h,null,{default:i(()=>[N(s.$slots,"buttons",{model:e(t),formRef:e(b)},()=>{var l;return[_(U,{class:B({"w-full":(l=d.options)==null?void 0:l.blockSubmitButton}),type:"primary",onClick:o[0]||(o[0]=L=>v(e(b)))},{default:i(()=>[E(F(e(u).submitButtonText),1)]),_:1},8,["class"]),e(u).showResetButton?(c(),V(U,{key:0,type:"info",onClick:o[1]||(o[1]=L=>f(e(b)))},{default:i(()=>[E(F(e(u).resetButtonText),1)]),_:1})):Q("",!0),e(u).showCancelButton?(c(),V(U,{key:1,onClick:o[2]||(o[2]=L=>n("cancel"))},{default:i(()=>[E(F(e(u).cancelButtonText),1)]),_:1})):Q("",!0)]})]),_:3})]),_:3},16,["model"])}}}),sl=(d,m,n)=>{m||n(new Error("Please input the email")),/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(com|cn|net)$/.test(m)?n():n(new Error("Please input the correct email address"))},T={base:[{label:"姓名",field:"name",disabled:!0},{label:"性别",field:"gender",type:"radio",options:{data:[{label:"男",value:1},{label:"女",value:0}]}},{label:"爱好",field:"hobbies",type:"checkbox",options:{data:[{label:"吃饭",value:1},{label:"睡觉",value:2},{label:"写代码",value:3}]}},{label:"工作",field:"job",type:"select",options:{data:[{label:"吃饭",value:1},{label:"睡觉",value:2},{label:"写代码",value:3}]}},{label:"密码",field:"password",type:"password",placeholder:"这是一个密码输入框"},{label:"只读",field:"readonly",readonly:!0,placeholder:"这是一个只读输入框"},{label:"留言板",field:"summary",type:"textarea",placeholder:"留言板"}],customkeyForm:[{label:"标题",field:"name"},{label:"性别",field:"gender",type:"radio",options:{labelkey:"title",valueKey:"val",data:[{title:"男",val:1},{title:"女",val:0}]}}],ruleForm:[{label:"姓名",field:"name",rules:[{required:!0,message:"name is required"}]},{label:"邮箱",field:"email",rules:[{required:!0,validator:sl}]}]},tl={class:"p-5"},il=C({__name:"index",setup(d){const m=T.base,n=T.customkeyForm,a=T.ruleForm,t=I({name:"张三",gender:1,hobbies:[1],job:3,readonly:"只读输入框",summary:"尤雨溪懂个锤子vue是什么梗"}),b=I({name:"自定义key",gender:1}),u=r=>{console.log(r),J.error("演示模式，不做保存")},v=(r,f)=>{f&&f.validate(s=>{if(s)console.log("submit!",r),J.success("自定义验证表单");else return console.log("error submit!"),!1})};return(r,f)=>{const s=al,o=Fe,p=se;return c(),w("div",tl,[_(o,{class:"mb-5"},{header:i(()=>[E(" 基本表单 ")]),default:i(()=>[_(s,{fieldList:e(m),options:{labelWidth:100},model:e(t),onSubmit:u},null,8,["fieldList","model"])]),_:1}),_(o,{class:"mb-5"},{header:i(()=>[E(" 自定义key ")]),default:i(()=>[_(s,{fieldList:e(n),model:e(b),options:{labelWidth:100},onSubmit:u},null,8,["fieldList","model"])]),_:1}),_(o,{class:"mb-5"},{header:i(()=>[E(" 自定义验证的表单 （使用slot自定义按钮） ")]),default:i(()=>[_(s,{fieldList:e(a),options:{labelWidth:100}},{buttons:i(({model:k,formRef:h})=>[_(p,{onClick:W=>v(k,h)},{default:i(()=>[E("保存")]),_:2},1032,["onClick"])]),_:1},8,["fieldList"])]),_:1})])}}});export{il as default};
