import{E as L,d as k,r as s,a as q,o as A,g as E,b as c,c as N,e as z,f as n,u as v,w as m,h as I,i as D,j as O,k as M,l as R}from"./index-9c9c226d.js";const U=[{prop:"username",label:"用户名"},{prop:"region",label:"地区"},{prop:"phone",label:"手机号"},{prop:"cardId",label:"身份证号",slots:[{render(a,o,t){var u;return[a("span",{type:"primary",size:"small"},((u=t==null?void 0:t.identityInformation)==null?void 0:u.id)||"-")]}}]},{prop:"userLevel",label:"用户等级"},{prop:"userLevel",label:"用户状态",slots:[{render(a,o,t){return[a("span",{type:"primary"},t.deletedAt?"已注销":"正常")]}}]},{prop:"cashTotal",label:"账户金额(HK$)"},{prop:"createdAt",label:"创建时间"},{prop:"option",label:"操作",width:"200px",slots:[{render(a,o,t){return[a(L,{type:t.deletedAt?"danger":"primary",size:"small",onClick(){o.emit("onLogOut",t)}},t.deletedAt?"已注销":"注销")]}},{render(a,o,t){return[a(L,{type:"primary",size:"small",onClick(){o.emit("onShareData",t)}},"查看分享数据")]}}]}],$=[{prop:"username",label:"用户名"},{prop:"phone",label:"手机号"}],j=[{name:"用户名称",key:"nickname",showLabel:!0},{name:"手机号",key:"phone",showLabel:!0},{name:"用户状态",key:"status",type:"select",showLabel:!0,options:[{value:"0",label:"全部"},{value:"2",label:"注销"},{value:"1",label:"正常"}]}],w={class:"bs"},J={class:"dialog-footer"},K=k({__name:"enter",setup(a){k({name:"PageFooter"});const o=U,t=j,u=$,f=s([]),d=s({}),b=q({}),r=s(!1),h=s(0),i=s({page:1,limit:10}),_=s([]);A(()=>{p()});const p=async()=>{const{data:e}=await E(Object.assign(d.value,{current:i.value.page,pageSize:i.value.limit}));f.value=e==null?void 0:e.list,h.value=e==null?void 0:e.totalCount},T=e=>{r.value=!0,_.value=e.userShareList},V=e=>{if(e.deletedAt){O.error("该账号已注销");return}M.confirm("确认注销该账号吗？",{type:"warning"}).then(()=>{R(e._id).then(()=>{O.success("注销成功"),p()})}).catch(()=>{})},x=e=>{i.value=e,p()};function y(e){b.value=JSON.stringify(e)==="{}"?{}:e,d.value=JSON.stringify(e)==="{}"?{}:e,p()}return(e,l)=>{const B=c("SrmFilter"),C=c("SrmTable"),S=c("el-button"),F=c("el-dialog");return N(),z("div",w,[n(B,{items:v(t),"search-params":b,onSearch:y,onReset:y},null,8,["items","search-params"]),n(C,{columns:v(o),sourceData:f.value,pageRequest:i.value,listTotal:h.value,reqData:d.value,onOnShareData:T,onOnLogOut:V,onCurrentChange:x},null,8,["columns","sourceData","pageRequest","listTotal","reqData"]),n(F,{modelValue:r.value,"onUpdate:modelValue":l[2]||(l[2]=g=>r.value=g),title:"分享数据",width:"30%"},{footer:m(()=>[I("span",J,[n(S,{onClick:l[0]||(l[0]=g=>r.value=!1)},{default:m(()=>[D("取消")]),_:1}),n(S,{type:"primary",onClick:l[1]||(l[1]=g=>r.value=!1)},{default:m(()=>[D(" 确认 ")]),_:1})])]),default:m(()=>[n(C,{sourceData:_.value,columns:v(u)},null,8,["sourceData","columns"])]),_:1},8,["modelValue"])])}}});export{K as default};
