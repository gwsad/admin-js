import{E as w,d as _,r as d,o as x,B as h,c as D,b as a,w as o,u as E,q as N,s as T,f as L,h as u,i as g,k as p,j as M,e as A,C as F}from"./index-3b223619.js";const O=[{prop:"name",label:"银行卡名称"},{prop:"createdAt",label:"创建时间"},{prop:"option",label:"操作",width:"200px",slots:[{render(m,c,n){return[m(w,{type:"danger",text:"删除",size:"small",onClick(){c.emit("onDelete",n)}},"删除")]}}]}],S={class:"bs"},U={class:"dialog-footer"},q=_({__name:"enter",setup(m){_({name:"PageFooter"});const c=O,n=d([]),e=d(!1),l=d("");x(()=>{f()});const f=async()=>{const{data:s}=await h();n.value=s},k=()=>{L.confirm("确认注销该账号吗？",{type:"warning"}).then(()=>{}).catch(()=>{})},v=s=>{},b=()=>{e.value=!0},B=async()=>{if(!l.value)return A.error("请输入银行名称");try{await F({name:l.value}),f()}catch{return!1}e.value=!1};return(s,t)=>{const i=u("el-button"),C=u("SrmTable"),y=u("el-input"),V=u("el-dialog");return g(),D("div",S,[a(i,{class:"mb-10",type:"primary",onClick:b},{default:o(()=>[p("新增")]),_:1}),a(C,{columns:E(c),sourceData:n.value,listTotal:0,onOnDelete:k,onCurrentChange:v},null,8,["columns","sourceData"]),e.value?(g(),N(V,{key:0,modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=r=>e.value=r),title:"新增银行",width:"30%"},{footer:o(()=>[M("span",U,[a(i,{onClick:t[1]||(t[1]=r=>e.value=!1)},{default:o(()=>[p("取消")]),_:1}),a(i,{type:"primary",onClick:B},{default:o(()=>[p("确定")]),_:1})])]),default:o(()=>[a(y,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=r=>l.value=r),placeholder:"请输入银行名称"},null,8,["modelValue"])]),_:1},8,["modelValue"])):T("",!0)])}}});export{q as default};