import{l as r,a8 as _,p as i,q as m,y as e,t,v as a,aa as s,ah as d,a4 as p}from"./index-a8835d9d.js";const x={class:"flex-center flex-col md:flex-row h-screen"},h={class:"p-5"},f=e("h1",{class:"text-6xl text-primary-default mb-8"},"糟糕！",-1),u=e("h2",{class:"text-3xl text-gray-700 dark:text-gray-300 mb-3"},"似乎断网了。",-1),y=e("p",{class:"text-gray-400 text-sm mb-3"},"请检查您的网络环境，或者点击下方的按钮刷新",-1),C=r({__name:"500",setup(k){const n=()=>{location.reload()};return(v,B)=>{const c=d,o=p,l=_("router-link");return i(),m("div",x,[e("div",null,[t(c,{size:"400",icon:"svg:500"})]),e("div",h,[f,u,y,t(o,{type:"primary",onClick:n},{default:a(()=>[s("刷新")]),_:1}),t(l,{replace:"",to:{name:"home"},class:"ml-4"},{default:a(()=>[t(o,{type:"primary",plain:""},{default:a(()=>[s("返回首页")]),_:1})]),_:1})])])}}});export{C as default};
