import{i as Oe,j as We,s as me,k as ie,R as Ze,l as Ke,m as Ee,n as Ye,p as at,q as K,t as O,v as Ne,O as Pe,x as lt,y as Se,z as ct,d as q,A as ue,F as ut,I as Re,B as dt,C as te,D as $e,E as Le,G as xe,r as k,h as Ce,u as i,w as pe,o as p,c as E,a as x,g as S,H as ye,J as be,f as I,K as ee,L as se,M as ce,N as F,b as L,P as W,e as ge,Q as V,S as je,T as ke,_ as de,U as ft,V as pt,W as ht,X as Fe,Y as mt,Z as Ue,$ as vt,a0 as gt,a1 as _t,a2 as yt,a3 as bt,a4 as Ge}from"./index-4981bd5b.js";import{u as wt}from"./useLayout-cdf396cb.js";const St={width:1024,height:1024,body:'<path fill="currentColor" d="M512 128L128 447.936V896h255.936V640H640v256h255.936V447.936z"/>'},kt={width:24,height:24,body:'<path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"/>'},xt={width:1024,height:1024,body:'<path fill="currentColor" d="M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0h1.28zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696zm105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744zm-54.464-36.032a321.92 321.92 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z"/>'};Oe("homeFilled",St);Oe("informationLine",kt);Oe("lollipop",xt);const Ct=We({id:"pure-app",state:()=>{var e,t;return{sidebar:{opened:((e=me().getItem("responsive-layout"))==null?void 0:e.sidebarStatus)??ie().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:((t=me().getItem("responsive-layout"))==null?void 0:t.layout)??ie().Layout,device:Ze()?"mobile":"desktop"}},getters:{getSidebarStatus(){return this.sidebar.opened},getDevice(){return this.device}},actions:{TOGGLE_SIDEBAR(e,t){const n=me().getItem("responsive-layout");e&&t?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,n.sidebarStatus=!0):!e&&t?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,n.sidebarStatus=!1):!e&&!t&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,n.sidebarStatus=this.sidebar.opened),me().setItem("responsive-layout",n)},async toggleSideBar(e,t){await this.TOGGLE_SIDEBAR(e,t)},toggleDevice(e){this.device=e},setLayout(e){this.layout=e}}});function ae(){return Ct(Ke)}const zt=We({id:"pure-setting",state:()=>({title:ie().Title,fixedHeader:ie().FixedHeader,hiddenSideBar:ie().HiddenSideBar}),getters:{getTitle(){return this.title},getFixedHeader(){return this.fixedHeader},getHiddenSideBar(){return this.HiddenSideBar}},actions:{CHANGE_SETTING({key:e,value:t}){this.hasOwnProperty(e)&&(this[e]=t)},changeSetting(e){this.CHANGE_SETTING(e)}}});function It(){return zt(Ke)}const Ve="当前路由配置不正确，请检查配置";function he(){var J;const e=Ee(),t=ae(),n=Ye().options.routes,{wholeMenus:o}=at(K()),l=((J=ie())==null?void 0:J.TooltipEffect)??"light",c=O(()=>{var h;return(h=Ne())==null?void 0:h.username}),d=O(()=>c.value?{marginRight:"10px"}:""),m=O(()=>!t.getSidebarStatus),g=O(()=>t.getDevice),{$storage:f,$config:y}=Pe(),v=O(()=>{var h;return(h=f==null?void 0:f.layout)==null?void 0:h.layout}),a=O(()=>y.Title);function w(h){const Y=ie().Title;Y?document.title=`${h.title} | ${Y}`:document.title=h.title}function _(){Ne().logOut()}function b(){lt.push("/welcome")}function H(){Se.emit("openPanel")}function U(){t.toggleSideBar()}function A(h){h==null||h.handleResize()}function C(h){var Z;if(!h.children)return console.error(Ve);const Y=/^http(s?):\/\//,B=(Z=h.children[0])==null?void 0:Z.path;return Y.test(B)?h.path+"/"+B:B}function T(h,Y){if(o.value.length===0||N(h))return;let B="";const Z=h.lastIndexOf("/");Z>0&&(B=h.slice(0,Z));function ne(X,fe){return fe?fe.map(re=>{re.path===X?re.redirect?ne(re.redirect,re.children):Se.emit("changLayoutRoute",{indexPath:X,parentPath:B}):re.children&&ne(X,re.children)}):console.error(Ve)}ne(h,Y)}function N(h){return ct.includes(h)}return{route:e,title:a,device:g,layout:v,logout:_,routers:n,$storage:f,backHome:b,onPanel:H,changeTitle:w,toggleSideBar:U,menuSelect:T,handleResize:A,resolvePath:C,isCollapse:m,pureApp:t,username:c,avatarsStyle:d,tooltipEffect:l}}function le(e,t){const n=/^IF-/;if(n.test(e)){const o=e.split(n)[1],l=o.slice(0,o.indexOf(" ")==-1?o.length:o.indexOf(" ")),c=o.slice(o.indexOf(" ")+1,o.length);return q({name:"FontIcon",render(){return ue(ut,{icon:l,iconType:c,...t})}})}else return typeof e=="function"||typeof(e==null?void 0:e.render)=="function"?e:typeof e=="object"?q({name:"OfflineIcon",render(){return ue(Re,{icon:e,...t})}}):q({name:"Icon",render(){const o=e&&e.includes(":")?dt:Re;return ue(o,{icon:e,...t})}})}const He={width:24,height:24,body:'<path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22zm7-6v-3h-8v-2h8V8l5 4l-5 4z"/>'},Qe={width:24,height:24,body:'<path fill="currentColor" d="M3.34 17a10.018 10.018 0 0 1-.978-2.326a3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674a9.99 9.99 0 0 1 5.007.002a3 3 0 0 0 4.632 2.672A9.99 9.99 0 0 1 20.66 7c.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347a9.99 9.99 0 0 1-2.501 4.337a3 3 0 0 0-4.631 2.674a9.99 9.99 0 0 1-5.007-.002a3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565a7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12a4.99 4.99 0 0 1-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2z"/>'},At={key:0,class:"horizontal-header"},Tt={class:"select-none"},Mt={class:"horizontal-header-right"},Ot={class:"el-dropdown-link navbar-bg-hover select-none"},Et={key:0,class:"dark:text-white"},Pt=q({__name:"mixNav",setup(e){const t=te(),n=te(null),{route:o,device:l,routers:c,logout:d,onPanel:m,menuSelect:g,resolvePath:f,username:y,avatarsStyle:v}=he();function a(w){var H,U;const _=K().wholeMenus,b=je(w,_)[0];n.value=(U=(H=ke(b,_))==null?void 0:H.children[0])==null?void 0:U.path}return $e(()=>{a(o.path)}),Le(()=>{var w;(w=t.value)==null||w.handleResize()}),xe(()=>[o.path,K().wholeMenus],()=>{a(o.path)}),(w,_)=>{const b=k("FontIcon"),H=k("el-menu-item"),U=k("el-menu"),A=k("IconifyIconOffline"),C=k("el-dropdown-item"),T=k("el-dropdown-menu"),N=k("el-dropdown"),J=Ce("loading");return i(l)!=="mobile"?pe((p(),E("div",At,[x(U,{router:"",ref_key:"menuRef",ref:t,mode:"horizontal",class:"horizontal-header-menu","default-active":n.value,onSelect:_[0]||(_[0]=h=>i(g)(h,i(c)))},{default:S(()=>[(p(!0),E(ye,null,be(i(K)().wholeMenus,h=>(p(),I(H,{key:h.path,index:i(f)(h)||h.redirect},{title:S(()=>[ee(h.meta.icon)?(p(),E("div",{key:0,class:se(["sub-menu-icon",h.meta.icon])},[(p(),I(ce(i(le)(h.meta&&ee(h.meta.icon)))))],2)):F("",!0),L("span",Tt,W(h.meta.title),1),h.meta.extraIcon?(p(),I(b,{key:1,width:"30px",height:"30px",style:{position:"absolute",right:"10px"},icon:h.meta.extraIcon.name,svg:!!h.meta.extraIcon.svg},null,8,["icon","svg"])):F("",!0)]),_:2},1032,["index"]))),128))]),_:1},8,["default-active"]),L("div",Mt,[x(N,{trigger:"click"},{dropdown:S(()=>[x(T,{class:"logout"},{default:S(()=>[x(C,{onClick:i(d)},{default:S(()=>[x(A,{icon:i(He),style:{margin:"5px"}},null,8,["icon"]),ge(" 退出系统 ")]),_:1},8,["onClick"])]),_:1})]),default:S(()=>[L("span",Ot,[L("img",{src:"https://avatars.githubusercontent.com/u/44761321?v=4",style:V(i(v))},null,4),i(y)?(p(),E("p",Et,W(i(y)),1)):F("",!0)])]),_:1}),L("span",{class:"set-icon navbar-bg-hover",title:"打开项目配置",onClick:_[1]||(_[1]=(...h)=>i(m)&&i(m)(...h))},[x(A,{icon:i(Qe)},null,8,["icon"])])])])),[[J,i(K)().wholeMenus.length===0]]):F("",!0)}}});const $t=de(Pt,[["__scopeId","data-v-64683d2b"]]),Lt=["onClick"],jt=q({__name:"breadCrumb",setup(e){const t=Ee(),n=te([]),o=Ye(),l=o.options.routes,c=ft().multiTags,d=f=>{const y=f&&f.name;return y?y.trim().toLocaleLowerCase()==="Welcome".toLocaleLowerCase():!1},m=()=>{let f;Object.keys(t.query).length>0?c.forEach(a=>{Fe(t.query,a==null?void 0:a.query)&&(f=ee(a))}):Object.keys(t.params).length>0?c.forEach(a=>{Fe(t.params,a==null?void 0:a.params)&&(f=ee(a))}):f=ke(o.currentRoute.value.path,c);const y=je(o.currentRoute.value.path,l);let v=[];y.forEach(a=>{a!=="/"&&v.push(ke(a,l))}),(f==null?void 0:f.path)!=="/welcome"&&v.push(f),d(v[0])||(v=[{path:"/welcome",parentPath:"/",meta:{title:"首页"}}].concat(v)),v.forEach((a,w)=>{f!=null&&f.query||f!=null&&f.params||a!=null&&a.children&&a.children.forEach(_=>{var b,H;((b=_==null?void 0:_.meta)==null?void 0:b.title)===((H=a==null?void 0:a.meta)==null?void 0:H.title)&&v.splice(w,1)})}),n.value=v.filter(a=>(a==null?void 0:a.meta)&&(a==null?void 0:a.meta.title)!==!1)},g=f=>{const{redirect:y,path:v}=f;y?o.push(y):o.push(v)};return $e(()=>{m()}),xe(()=>t.path,()=>{m()}),(f,y)=>{const v=k("el-breadcrumb-item"),a=k("el-breadcrumb");return p(),I(a,{class:"!leading-[50px] select-none",separator:"/"},{default:S(()=>[x(pt,{name:"breadcrumb"},{default:S(()=>[(p(!0),E(ye,null,be(n.value,w=>(p(),I(v,{class:"!inline !items-stretch",key:w.path},{default:S(()=>[L("a",{onClick:ht(_=>g(w),["prevent"])},W(w.meta.title),9,Lt)]),_:2},1024))),128))]),_:1})]),_:1})}}}),Xe={width:24,height:24,body:'<path fill="currentColor" d="M21 18v2H3v-2h18zM6.95 3.55v9.9L2 8.5l4.95-4.95zM21 11v2h-9v-2h9zm0-7v2h-9V4h9z"/>'},Ht={width:24,height:24,body:'<path fill="currentColor" d="M21 18v2H3v-2h18zM17.05 3.55L22 8.5l-4.95 4.95v-9.9zM12 11v2H3v-2h9zm0-7v2H3V4h9z"/>'},Bt=["title"],Dt=q({__name:"topCollapse",props:{isActive:{type:Boolean,default:!1}},emits:["toggleClick"],setup(e,{emit:t}){const n=e,o=()=>{t("toggleClick")};return(l,c)=>{const d=k("IconifyIconOffline");return p(),E("div",{class:"px-3 mr-1 navbar-bg-hover",title:n.isActive?"点击折叠":"点击展开",onClick:o},[x(d,{icon:n.isActive?i(Xe):i(Ht),class:"inline-block align-middle hover:text-primary dark:hover:!text-white"},null,8,["icon"])],8,Bt)}}}),Nt={class:"navbar bg-[#fff] shadow-sm shadow-[rgba(0, 21, 41, 0.08)] dark:shadow-[#0d0d0d]"},Rt={key:3,class:"vertical-header-right"},Ft={class:"el-dropdown-link navbar-bg-hover select-none"},Ut={key:0,class:"dark:text-white"},Gt=q({__name:"navbar",setup(e){const{layout:t,device:n,logout:o,pureApp:l,username:c,avatarsStyle:d,toggleSideBar:m}=he();return(g,f)=>{const y=k("IconifyIconOffline"),v=k("el-dropdown-item"),a=k("el-dropdown-menu"),w=k("el-dropdown");return p(),E("div",Nt,[i(n)==="mobile"?(p(),I(Dt,{key:0,class:"hamburger-container","is-active":i(l).sidebar.opened,onToggleClick:i(m)},null,8,["is-active","onToggleClick"])):F("",!0),i(t)!=="mix"&&i(n)!=="mobile"?(p(),I(jt,{key:1,class:"breadcrumb-container"})):F("",!0),i(t)==="mix"?(p(),I($t,{key:2})):F("",!0),i(t)==="vertical"?(p(),E("div",Rt,[x(w,{trigger:"click"},{dropdown:S(()=>[x(a,{class:"logout"},{default:S(()=>[x(v,{onClick:i(o)},{default:S(()=>[x(y,{icon:i(He),style:{margin:"5px"}},null,8,["icon"]),ge(" 退出系统 ")]),_:1},8,["onClick"])]),_:1})]),default:S(()=>[L("span",Ft,[L("img",{src:"https://avatars.githubusercontent.com/u/44761321?v=4",style:V(i(d))},null,4),i(c)?(p(),E("p",Ut,W(i(c)),1)):F("",!0)])]),_:1})])):F("",!0)])}}});const Vt=de(Gt,[["__scopeId","data-v-7ce18cb1"]]),qt={key:1},Jt=q({__name:"appMain",props:{fixedHeader:Boolean},setup(e){const t=e,{$storage:n,$config:o}=Pe(),l=O(()=>o==null?void 0:o.KeepAlive),c=O(()=>y=>y.meta.transition),d=O(()=>n==null?void 0:n.configure.hideTabs),m=O(()=>(n==null?void 0:n.layout.layout)==="vertical"),g=O(()=>[d.value&&m?"padding-top: 48px;":"",!d.value&&m?"padding-top: 45px;":"",d.value&&!m.value?"padding-top: 48px":"",!d.value&&!m.value?"padding-top: 45px;":"",t.fixedHeader?"":"padding-top: 0;"]),f=q({render(){return ue(mt,{name:c.value(this.route)&&this.route.meta.transition.enterTransition?"pure-classes-transition":c.value(this.route)&&this.route.meta.transition.name||"fade-transform",enterActiveClass:c.value(this.route)&&`animate__animated ${this.route.meta.transition.enterTransition}`,leaveActiveClass:c.value(this.route)&&`animate__animated ${this.route.meta.transition.leaveTransition}`,mode:"out-in",appear:!0},{default:()=>[this.$slots.default()]})},props:{route:{type:void 0,required:!0}}});return(y,v)=>{const a=k("el-scrollbar"),w=k("router-view");return p(),E("section",{class:se([t.fixedHeader?"app-main":"app-main-nofixed-header"]),style:V(i(g))},[x(w,null,{default:S(({Component:_,route:b})=>[t.fixedHeader?(p(),I(a,{key:0},{default:S(()=>[x(i(f),{route:b},{default:S(()=>[i(l)?(p(),I(Ue,{key:0,include:i(K)().cachePageList},[(p(),I(ce(_),{key:b.fullPath,class:"main-content"}))],1032,["include"])):(p(),I(ce(_),{key:b.fullPath,class:"main-content"}))]),_:2},1032,["route"])]),_:2},1024)):(p(),E("div",qt,[x(i(f),{route:b},{default:S(()=>[i(l)?(p(),I(Ue,{key:0,include:i(K)().cachePageList},[(p(),I(ce(_),{key:b.fullPath,class:"main-content"}))],1032,["include"])):(p(),I(ce(_),{key:b.fullPath,class:"main-content"}))]),_:2},1032,["route"])]))]),_:1})],6)}}});const Wt=de(Jt,[["__scopeId","data-v-9bb5cc7e"]]);var _e={},qe={get exports(){return _e},set exports(e){_e=e}},et={},Zt=function(t){return t&&typeof t=="object"&&typeof t.copy=="function"&&typeof t.fill=="function"&&typeof t.readUInt8=="function"},Me={},Je={get exports(){return Me},set exports(e){Me=e}};typeof Object.create=="function"?Je.exports=function(t,n){t.super_=n,t.prototype=Object.create(n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:Je.exports=function(t,n){t.super_=n;var o=function(){};o.prototype=n.prototype,t.prototype=new o,t.prototype.constructor=t};(function(e){var t=/%[sdj%]/g;e.format=function(r){if(!C(r)){for(var s=[],u=0;u<arguments.length;u++)s.push(l(arguments[u]));return s.join(" ")}for(var u=1,M=arguments,G=M.length,P=String(r).replace(t,function($){if($==="%%")return"%";if(u>=G)return $;switch($){case"%s":return String(M[u++]);case"%d":return Number(M[u++]);case"%j":try{return JSON.stringify(M[u++])}catch{return"[Circular]"}default:return $}}),z=M[u];u<G;z=M[++u])H(z)||!h(z)?P+=" "+z:P+=" "+l(z);return P},e.deprecate=function(r,s){if(N(vt.process))return function(){return e.deprecate(r,s).apply(this,arguments)};if(process.noDeprecation===!0)return r;var u=!1;function M(){if(!u){if(process.throwDeprecation)throw new Error(s);process.traceDeprecation?console.trace(s):console.error(s),u=!0}return r.apply(this,arguments)}return M};var n={},o;e.debuglog=function(r){if(N(o)&&(o={}.NODE_DEBUG||""),r=r.toUpperCase(),!n[r])if(new RegExp("\\b"+r+"\\b","i").test(o)){var s=process.pid;n[r]=function(){var u=e.format.apply(e,arguments);console.error("%s %d: %s",r,s,u)}}else n[r]=function(){};return n[r]};function l(r,s){var u={seen:[],stylize:d};return arguments.length>=3&&(u.depth=arguments[2]),arguments.length>=4&&(u.colors=arguments[3]),b(s)?u.showHidden=s:s&&e._extend(u,s),N(u.showHidden)&&(u.showHidden=!1),N(u.depth)&&(u.depth=2),N(u.colors)&&(u.colors=!1),N(u.customInspect)&&(u.customInspect=!0),u.colors&&(u.stylize=c),g(u,r,u.depth)}e.inspect=l,l.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},l.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function c(r,s){var u=l.styles[s];return u?"\x1B["+l.colors[u][0]+"m"+r+"\x1B["+l.colors[u][1]+"m":r}function d(r,s){return r}function m(r){var s={};return r.forEach(function(u,M){s[u]=!0}),s}function g(r,s,u){if(r.customInspect&&s&&Z(s.inspect)&&s.inspect!==e.inspect&&!(s.constructor&&s.constructor.prototype===s)){var M=s.inspect(u,r);return C(M)||(M=g(r,M,u)),M}var G=f(r,s);if(G)return G;var P=Object.keys(s),z=m(P);if(r.showHidden&&(P=Object.getOwnPropertyNames(s)),B(s)&&(P.indexOf("message")>=0||P.indexOf("description")>=0))return y(s);if(P.length===0){if(Z(s)){var $=s.name?": "+s.name:"";return r.stylize("[Function"+$+"]","special")}if(J(s))return r.stylize(RegExp.prototype.toString.call(s),"regexp");if(Y(s))return r.stylize(Date.prototype.toString.call(s),"date");if(B(s))return y(s)}var R="",oe=!1,we=["{","}"];if(_(s)&&(oe=!0,we=["[","]"]),Z(s)){var it=s.name?": "+s.name:"";R=" [Function"+it+"]"}if(J(s)&&(R=" "+RegExp.prototype.toString.call(s)),Y(s)&&(R=" "+Date.prototype.toUTCString.call(s)),B(s)&&(R=" "+y(s)),P.length===0&&(!oe||s.length==0))return we[0]+R+we[1];if(u<0)return J(s)?r.stylize(RegExp.prototype.toString.call(s),"regexp"):r.stylize("[Object]","special");r.seen.push(s);var Te;return oe?Te=v(r,s,u,z,P):Te=P.map(function(st){return a(r,s,u,z,st,oe)}),r.seen.pop(),w(Te,R,we)}function f(r,s){if(N(s))return r.stylize("undefined","undefined");if(C(s)){var u="'"+JSON.stringify(s).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return r.stylize(u,"string")}if(A(s))return r.stylize(""+s,"number");if(b(s))return r.stylize(""+s,"boolean");if(H(s))return r.stylize("null","null")}function y(r){return"["+Error.prototype.toString.call(r)+"]"}function v(r,s,u,M,G){for(var P=[],z=0,$=s.length;z<$;++z)De(s,String(z))?P.push(a(r,s,u,M,String(z),!0)):P.push("");return G.forEach(function(R){R.match(/^\d+$/)||P.push(a(r,s,u,M,R,!0))}),P}function a(r,s,u,M,G,P){var z,$,R;if(R=Object.getOwnPropertyDescriptor(s,G)||{value:s[G]},R.get?R.set?$=r.stylize("[Getter/Setter]","special"):$=r.stylize("[Getter]","special"):R.set&&($=r.stylize("[Setter]","special")),De(M,G)||(z="["+G+"]"),$||(r.seen.indexOf(R.value)<0?(H(u)?$=g(r,R.value,null):$=g(r,R.value,u-1),$.indexOf(`
`)>-1&&(P?$=$.split(`
`).map(function(oe){return"  "+oe}).join(`
`).substr(2):$=`
`+$.split(`
`).map(function(oe){return"   "+oe}).join(`
`))):$=r.stylize("[Circular]","special")),N(z)){if(P&&G.match(/^\d+$/))return $;z=JSON.stringify(""+G),z.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(z=z.substr(1,z.length-2),z=r.stylize(z,"name")):(z=z.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),z=r.stylize(z,"string"))}return z+": "+$}function w(r,s,u){var M=r.reduce(function(G,P){return P.indexOf(`
`)>=0,G+P.replace(/\u001b\[\d\d?m/g,"").length+1},0);return M>60?u[0]+(s===""?"":s+`
 `)+" "+r.join(`,
  `)+" "+u[1]:u[0]+s+" "+r.join(", ")+" "+u[1]}function _(r){return Array.isArray(r)}e.isArray=_;function b(r){return typeof r=="boolean"}e.isBoolean=b;function H(r){return r===null}e.isNull=H;function U(r){return r==null}e.isNullOrUndefined=U;function A(r){return typeof r=="number"}e.isNumber=A;function C(r){return typeof r=="string"}e.isString=C;function T(r){return typeof r=="symbol"}e.isSymbol=T;function N(r){return r===void 0}e.isUndefined=N;function J(r){return h(r)&&X(r)==="[object RegExp]"}e.isRegExp=J;function h(r){return typeof r=="object"&&r!==null}e.isObject=h;function Y(r){return h(r)&&X(r)==="[object Date]"}e.isDate=Y;function B(r){return h(r)&&(X(r)==="[object Error]"||r instanceof Error)}e.isError=B;function Z(r){return typeof r=="function"}e.isFunction=Z;function ne(r){return r===null||typeof r=="boolean"||typeof r=="number"||typeof r=="string"||typeof r=="symbol"||typeof r>"u"}e.isPrimitive=ne,e.isBuffer=Zt;function X(r){return Object.prototype.toString.call(r)}function fe(r){return r<10?"0"+r.toString(10):r.toString(10)}var re=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function ot(){var r=new Date,s=[fe(r.getHours()),fe(r.getMinutes()),fe(r.getSeconds())].join(":");return[r.getDate(),re[r.getMonth()],s].join(" ")}e.log=function(){console.log("%s - %s",ot(),e.format.apply(e,arguments))},e.inherits=Me,e._extend=function(r,s){if(!s||!h(s))return r;for(var u=Object.keys(s),M=u.length;M--;)r[u[M]]=s[u[M]];return r};function De(r,s){return Object.prototype.hasOwnProperty.call(r,s)}})(et);var Kt=process.platform==="win32",Q=et;function ze(e,t){for(var n=[],o=0;o<e.length;o++){var l=e[o];!l||l==="."||(l===".."?n.length&&n[n.length-1]!==".."?n.pop():t&&n.push(".."):n.push(l))}return n}function ve(e){for(var t=e.length-1,n=0;n<=t&&!e[n];n++);for(var o=t;o>=0&&!e[o];o--);return n===0&&o===t?e:n>o?[]:e.slice(n,o+1)}var tt=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,Yt=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,j={};function Ie(e){var t=tt.exec(e),n=(t[1]||"")+(t[2]||""),o=t[3]||"",l=Yt.exec(o),c=l[1],d=l[2],m=l[3];return[n,c,d,m]}function Be(e){var t=tt.exec(e),n=t[1]||"",o=!!n&&n[1]!==":";return{device:n,isUnc:o,isAbsolute:o||!!t[2],tail:t[3]}}function nt(e){return"\\\\"+e.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\")}j.resolve=function(){for(var e="",t="",n=!1,o=arguments.length-1;o>=-1;o--){var l;if(o>=0?l=arguments[o]:e?(l=process.env["="+e],(!l||l.substr(0,3).toLowerCase()!==e.toLowerCase()+"\\")&&(l=e+"\\")):l=process.cwd(),Q.isString(l)){if(!l)continue}else throw new TypeError("Arguments to path.resolve must be strings");var c=Be(l),d=c.device,m=c.isUnc,g=c.isAbsolute,f=c.tail;if(!(d&&e&&d.toLowerCase()!==e.toLowerCase())&&(e||(e=d),n||(t=f+"\\"+t,n=g),e&&n))break}return m&&(e=nt(e)),t=ze(t.split(/[\\\/]+/),!n).join("\\"),e+(n?"\\":"")+t||"."};j.normalize=function(e){var t=Be(e),n=t.device,o=t.isUnc,l=t.isAbsolute,c=t.tail,d=/[\\\/]$/.test(c);return c=ze(c.split(/[\\\/]+/),!l).join("\\"),!c&&!l&&(c="."),c&&d&&(c+="\\"),o&&(n=nt(n)),n+(l?"\\":"")+c};j.isAbsolute=function(e){return Be(e).isAbsolute};j.join=function(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(!Q.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&e.push(n)}var o=e.join("\\");return/^[\\\/]{2}[^\\\/]/.test(e[0])||(o=o.replace(/^[\\\/]{2,}/,"\\")),j.normalize(o)};j.relative=function(e,t){e=j.resolve(e),t=j.resolve(t);for(var n=e.toLowerCase(),o=t.toLowerCase(),l=ve(t.split("\\")),c=ve(n.split("\\")),d=ve(o.split("\\")),m=Math.min(c.length,d.length),g=m,f=0;f<m;f++)if(c[f]!==d[f]){g=f;break}if(g==0)return t;for(var y=[],f=g;f<c.length;f++)y.push("..");return y=y.concat(l.slice(g)),y.join("\\")};j._makeLong=function(e){if(!Q.isString(e))return e;if(!e)return"";var t=j.resolve(e);return/^[a-zA-Z]\:\\/.test(t)?"\\\\?\\"+t:/^\\\\[^?.]/.test(t)?"\\\\?\\UNC\\"+t.substring(2):e};j.dirname=function(e){var t=Ie(e),n=t[0],o=t[1];return!n&&!o?".":(o&&(o=o.substr(0,o.length-1)),n+o)};j.basename=function(e,t){var n=Ie(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n};j.extname=function(e){return Ie(e)[3]};j.format=function(e){if(!Q.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!Q.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);var n=e.dir,o=e.base||"";return n?n[n.length-1]===j.sep?n+o:n+j.sep+o:o};j.parse=function(e){if(!Q.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=Ie(e);if(!t||t.length!==4)throw new TypeError("Invalid path '"+e+"'");return{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}};j.sep="\\";j.delimiter=";";var Qt=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,D={};function Ae(e){return Qt.exec(e).slice(1)}D.resolve=function(){for(var e="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var o=n>=0?arguments[n]:process.cwd();if(Q.isString(o)){if(!o)continue}else throw new TypeError("Arguments to path.resolve must be strings");e=o+"/"+e,t=o[0]==="/"}return e=ze(e.split("/"),!t).join("/"),(t?"/":"")+e||"."};D.normalize=function(e){var t=D.isAbsolute(e),n=e&&e[e.length-1]==="/";return e=ze(e.split("/"),!t).join("/"),!e&&!t&&(e="."),e&&n&&(e+="/"),(t?"/":"")+e};D.isAbsolute=function(e){return e.charAt(0)==="/"};D.join=function(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];if(!Q.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&(e?e+="/"+n:e+=n)}return D.normalize(e)};D.relative=function(e,t){e=D.resolve(e).substr(1),t=D.resolve(t).substr(1);for(var n=ve(e.split("/")),o=ve(t.split("/")),l=Math.min(n.length,o.length),c=l,d=0;d<l;d++)if(n[d]!==o[d]){c=d;break}for(var m=[],d=c;d<n.length;d++)m.push("..");return m=m.concat(o.slice(c)),m.join("/")};D._makeLong=function(e){return e};D.dirname=function(e){var t=Ae(e),n=t[0],o=t[1];return!n&&!o?".":(o&&(o=o.substr(0,o.length-1)),n+o)};D.basename=function(e,t){var n=Ae(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n};D.extname=function(e){return Ae(e)[3]};D.format=function(e){if(!Q.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!Q.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);var n=e.dir?e.dir+D.sep:"",o=e.base||"";return n+o};D.parse=function(e){if(!Q.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=Ae(e);if(!t||t.length!==4)throw new TypeError("Invalid path '"+e+"'");return t[1]=t[1]||"",t[2]=t[2]||"",t[3]=t[3]||"",{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}};D.sep="/";D.delimiter=":";Kt?qe.exports=j:qe.exports=D;_e.posix=D;_e.win32=j;const Xt={width:1024,height:1024,body:'<path fill="currentColor" d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"/>'},en={width:1024,height:1024,body:'<path fill="currentColor" d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z"/>'},tn={width:1024,height:1024,body:'<path fill="currentColor" d="M609.408 149.376L277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0a30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688a29.12 29.12 0 0 0-41.728 0z"/>'},nn={width:1024,height:1024,body:'<path fill="currentColor" d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512L340.864 831.872a30.592 30.592 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"/>'},rn={key:0,class:"sub-menu-icon"},on={key:0},sn={key:0,class:"sub-menu-icon"},an={key:1},rt=q({__name:"sidebarItem",props:{item:{type:Object},isNest:{type:Boolean,default:!1},basePath:{type:String,default:""}},setup(e){const t=e,{layout:n,isCollapse:o,tooltipEffect:l}=he(),c=O(()=>o.value?{position:"static"}:{position:"absolute",right:"10px"}),d=O(()=>({display:"flex",alignItems:"center"})),m=O(()=>({width:o.value?"100%":"",display:"flex",alignItems:"center",justifyContent:"space-between",overflow:"hidden"})),g=O(()=>({overflow:"hidden",textOverflow:"ellipsis",outline:"none"})),f=O(()=>({width:o.value?"":"210px",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis"})),y=O(()=>({overflow:"hidden",textOverflow:"ellipsis"})),v=O(()=>{var A;return(A=ie())!=null&&A.MenuArrowIconNoTransition?{"expand-close-icon":le(en),"expand-open-icon":le(Xt),"collapse-close-icon":le(nn),"collapse-open-icon":le(tn)}:""}),a=te(null),w=new WeakMap,_=te(null);function b(A){w.get(A)||Le(()=>{var C,T;((C=_.value)==null?void 0:C.scrollWidth)>((T=_.value)==null?void 0:T.clientWidth)?Object.assign(A,{showTooltip:!0}):Object.assign(A,{showTooltip:!1}),w.set(A,!0)})}function H(A=[],C){var N,J;const T=A.filter(h=>(a.value=h,!0));return(J=(N=T[0])==null?void 0:N.meta)!=null&&J.showParent?!1:T.length===1?!0:T.length===0?(a.value={...C,path:"",noShowingChildren:!0},!0):!1}function U(A){const C=/^http(s?):\/\//;return C.test(A)||C.test(t.basePath)?A||t.basePath:_e.posix.resolve(t.basePath,A)}return(A,C)=>{const T=k("el-tooltip"),N=k("FontIcon"),J=k("el-menu-item"),h=k("sidebar-item",!0),Y=k("el-sub-menu");return H(t.item.children,t.item)&&(!a.value.children||a.value.noShowingChildren)?(p(),I(J,{key:0,index:U(a.value.path),class:se({"submenu-title-noDropdown":!e.isNest}),style:V(i(d))},{title:S(()=>[L("div",{style:V(i(m))},[i(n)==="horizontal"?(p(),E("span",on,W(a.value.meta.title),1)):(p(),I(T,{key:1,placement:"top",effect:i(l),offset:-10,disabled:!a.value.showTooltip},{content:S(()=>[ge(W(a.value.meta.title),1)]),default:S(()=>[L("span",{ref_key:"menuTextRef",ref:_,style:V(i(g)),onMouseover:C[0]||(C[0]=B=>b(a.value))},W(a.value.meta.title),37)]),_:1},8,["effect","disabled"])),a.value.meta.extraIcon?(p(),I(N,{key:2,width:"30px",height:"30px",style:V(i(c)),icon:a.value.meta.extraIcon.name,svg:!!a.value.meta.extraIcon.svg},null,8,["style","icon","svg"])):F("",!0)],4)]),default:S(()=>{var B,Z,ne,X;return[ee(t.item.meta.icon)?(p(),E("div",rn,[(p(),I(ce(i(le)(ee(a.value.meta.icon)||t.item.meta&&ee(t.item.meta.icon)))))])):F("",!0),i(o)&&i(n)==="vertical"&&((Z=(B=t.item)==null?void 0:B.pathList)==null?void 0:Z.length)===1?(p(),E("div",{key:1,style:V(i(m))},[L("span",{style:V(i(g))},W(a.value.meta.title),5)],4)):F("",!0),i(o)&&i(n)==="mix"&&((X=(ne=t.item)==null?void 0:ne.pathList)==null?void 0:X.length)===2?(p(),E("div",{key:2,style:V(i(m))},[L("span",{style:V(i(g))},W(a.value.meta.title),5)],4)):F("",!0)]}),_:1},8,["index","class","style"])):(p(),I(Y,gt({key:1,ref:"subMenu"},i(v),{index:U(t.item.path)}),{title:S(()=>[ee(t.item.meta.icon)?(p(),E("div",sn,[(p(),I(ce(i(le)(t.item.meta&&ee(t.item.meta.icon)))))])):F("",!0),i(n)==="horizontal"?(p(),E("span",an,W(t.item.meta.title),1)):(p(),I(T,{key:2,placement:"top",effect:i(l),offset:-10,disabled:!t.item.showTooltip},{content:S(()=>[ge(W(t.item.meta.title),1)]),default:S(()=>[L("div",{ref_key:"menuTextRef",ref:_,style:V(i(f)),onMouseover:C[1]||(C[1]=B=>b(t.item))},[L("span",{style:V(i(y))},W(t.item.meta.title),5)],36)]),_:1},8,["effect","disabled"])),t.item.meta.extraIcon?(p(),I(N,{key:3,width:"30px",height:"30px",style:{position:"absolute",right:"10px"},icon:t.item.meta.extraIcon.name,svg:!!t.item.meta.extraIcon.svg},null,8,["icon","svg"])):F("",!0)]),default:S(()=>[(p(!0),E(ye,null,be(t.item.children,B=>(p(),I(h,{key:B.path,"is-nest":!0,item:B,"base-path":U(B.path),class:"nest-menu"},null,8,["item","base-path"]))),128))]),_:1},16,["index"]))}}}),ln={class:"container"},cn=q({__name:"leftCollapse",props:{isActive:{type:Boolean,default:!1}},emits:["toggleClick"],setup(e,{emit:t}){const n=e,o=te(!1),{tooltipEffect:l}=he(),c=O(()=>["ml-4","mb-1","w-[16px]","h-[16px]","inline-block","align-middle","text-primary","cursor-pointer","duration-[360ms]","hover:text-primary","dark:hover:!text-white"]),d=()=>{t("toggleClick")};return(m,g)=>{const f=k("IconifyIconOffline"),y=k("el-tooltip");return p(),E("div",ln,[x(y,{placement:"right",visible:o.value,effect:i(l),content:n.isActive?"点击折叠":"点击展开"},{default:S(()=>[x(f,{icon:i(Xe),class:se(i(c)),style:V({transform:n.isActive?"none":"rotateY(180deg)"}),onClick:d,onMouseenter:g[0]||(g[0]=v=>o.value=!0),onMouseleave:g[1]||(g[1]=v=>o.value=!1)},null,8,["icon","class","style"])]),_:1},8,["visible","effect","content"])])}}});const un=de(cn,[["__scopeId","data-v-7335ccdd"]]),dn=q({__name:"vertical",setup(e){var a;const t=Ee(),n=te(((a=me().getItem("responsive-configure"))==null?void 0:a.showLogo)??!0),{routers:o,device:l,pureApp:c,isCollapse:d,menuSelect:m,toggleSideBar:g}=he(),f=te([]),y=O(()=>c.layout==="mix"&&l.value!=="mobile"?f.value:K().wholeMenus);function v(w){const _=je(w,K().wholeMenus),b=ke(_[0]||w,K().wholeMenus);b!=null&&b.children&&(f.value=b==null?void 0:b.children)}return v(t.path),_t(()=>{Se.on("logoChange",w=>{n.value=w})}),xe(()=>[t.path,K().wholeMenus],()=>{v(t.path),m(t.path,o)}),(w,_)=>{const b=k("Logo"),H=k("el-menu"),U=k("el-scrollbar"),A=Ce("loading");return pe((p(),E("div",{class:se(["sidebar-container",n.value?"has-logo":""])},[n.value?(p(),I(b,{key:0,collapse:i(d)},null,8,["collapse"])):F("",!0),x(U,{"wrap-class":"scrollbar-wrapper",class:se([i(l)==="mobile"?"mobile":"pc"])},{default:S(()=>[x(H,{router:"","unique-opened":"",mode:"vertical",class:"outer-most select-none",collapse:i(d),"default-active":i(t).path,"collapse-transition":!1,onSelect:_[0]||(_[0]=C=>i(m)(C,i(o)))},{default:S(()=>[(p(!0),E(ye,null,be(i(y),C=>(p(),I(rt,{key:C.path,item:C,"base-path":C.path,class:"outer-most select-none"},null,8,["item","base-path"]))),128))]),_:1},8,["collapse","default-active"])]),_:1},8,["class"]),i(l)!=="mobile"?(p(),I(un,{key:1,"is-active":i(c).sidebar.opened,onToggleClick:i(g)},null,8,["is-active","onToggleClick"])):F("",!0)],2)),[[A,i(y).length===0]])}}});const fn=de(dn,[["__scopeId","data-v-23f75f7d"]]),pn={class:"horizontal-header"},hn={class:"horizontal-header-right"},mn={class:"el-dropdown-link navbar-bg-hover"},vn={key:0,class:"dark:text-white"},gn=q({__name:"horizontal",setup(e){const t=te(),{route:n,title:o,routers:l,logout:c,backHome:d,onPanel:m,menuSelect:g,username:f,avatarsStyle:y}=he();return Le(()=>{var v;(v=t.value)==null||v.handleResize()}),xe(()=>n.path,()=>{g(n.path,l)}),(v,a)=>{const w=k("FontIcon"),_=k("el-menu"),b=k("IconifyIconOffline"),H=k("el-dropdown-item"),U=k("el-dropdown-menu"),A=k("el-dropdown"),C=Ce("loading");return pe((p(),E("div",pn,[L("div",{class:"horizontal-header-left",onClick:a[0]||(a[0]=(...T)=>i(d)&&i(d)(...T))},[x(w,{icon:"team-iconlogo",svg:"",style:{width:"35px",height:"35px"}}),L("h4",null,W(i(o)),1)]),x(_,{router:"",ref_key:"menuRef",ref:t,mode:"horizontal",class:"horizontal-header-menu","default-active":i(n).path,onSelect:a[1]||(a[1]=T=>i(g)(T,i(l)))},{default:S(()=>[(p(!0),E(ye,null,be(i(K)().wholeMenus,T=>(p(),I(rt,{key:T.path,item:T,"base-path":T.path},null,8,["item","base-path"]))),128))]),_:1},8,["default-active"]),L("div",hn,[x(A,{trigger:"click"},{dropdown:S(()=>[x(U,{class:"logout"},{default:S(()=>[x(H,{onClick:i(c)},{default:S(()=>[x(b,{icon:i(He),style:{margin:"5px"}},null,8,["icon"]),ge(" 退出系统 ")]),_:1},8,["onClick"])]),_:1})]),default:S(()=>[L("span",mn,[L("img",{src:"https://avatars.githubusercontent.com/u/44761321?v=4",style:V(i(y))},null,4),i(f)?(p(),E("p",vn,W(i(f)),1)):F("",!0)])]),_:1}),L("span",{class:"set-icon navbar-bg-hover",title:"打开项目配置",onClick:a[2]||(a[2]=(...T)=>i(m)&&i(m)(...T))},[x(b,{icon:i(Qe)},null,8,["icon"])])])])),[[C,i(K)().wholeMenus.length===0]])}}});const _n=de(gn,[["__scopeId","data-v-0663b282"]]),yn=q({__name:"enter",setup(e){const{isDark:t}=yt(),{layout:n}=wt(),o=Ze(),l=It(),{$storage:c}=Pe(),d=bt({sidebar:O(()=>ae().sidebar),device:O(()=>ae().device),fixedHeader:O(()=>l.fixedHeader),classes:O(()=>({hideSidebar:!d.sidebar.opened,openSidebar:d.sidebar.opened,withoutAnimation:d.sidebar.withoutAnimation,mobile:d.device==="mobile"})),hideTabs:O(()=>c==null?void 0:c.configure.hideTabs)});function m(v){var a,w,_,b;window.document.body.setAttribute("layout",v),c.layout={layout:`${v}`,theme:(a=c.layout)==null?void 0:a.theme,darkMode:(w=c.layout)==null?void 0:w.darkMode,sidebarStatus:(_=c.layout)==null?void 0:_.sidebarStatus,epThemeColor:(b=c.layout)==null?void 0:b.epThemeColor}}function g(v,a){ae().toggleDevice(v),ae().toggleSideBar(a,"resize")}let f=!0;Se.on("resize",({detail:v})=>{if(o)return;const{width:a}=v;a<=760?m("vertical"):m(ae().layout),a>0&&a<=760?(g("mobile",!1),f=!0):a>760&&a<=990?f&&(g("desktop",!1),f=!1):a>990&&(d.sidebar.isClickCollapse||(g("desktop",!0),f=!0))}),$e(()=>{o&&g("mobile",!1)});const y=q({render(){return ue("div",{class:{"fixed-header":d.fixedHeader},style:[d.hideTabs&&n.value.includes("horizontal")?t.value?"box-shadow: 0 1px 4px #0d0d0d":"box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08)":""]},{default:()=>[!l.hiddenSideBar&&(n.value.includes("vertical")||n.value.includes("mix"))?ue(Vt):null,!l.hiddenSideBar&&n.value.includes("horizontal")?ue(_n):null]})}});return(v,a)=>{const w=k("el-scrollbar"),_=Ce("resize");return pe((p(),E("div",{class:se(["app-wrapper",d.classes])},[pe(L("div",{class:"app-mask",onClick:a[0]||(a[0]=b=>i(ae)().toggleSideBar())},null,512),[[Ge,d.device==="mobile"&&d.sidebar.opened&&i(n).includes("vertical")]]),pe(x(fn,null,null,512),[[Ge,!i(l).hiddenSideBar&&(i(n).includes("vertical")||i(n).includes("mix"))]]),L("div",{class:se(["main-container",i(l).hiddenSideBar?"main-hidden":""])},[x(w,null,{default:S(()=>[x(i(y)),x(Wt,{"fixed-header":d.fixedHeader},null,8,["fixed-header"])]),_:1})],2)],2)),[[_]])}}});const Sn=de(yn,[["__scopeId","data-v-b3b2e408"]]);export{Sn as default};
