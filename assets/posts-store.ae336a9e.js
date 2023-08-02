import{O as y,P as m,r as L,R as h,_ as w,o as M,a as S,e as u}from"./index.2b38842c.js";import{B as l,t as f,T as d,c as g}from"./toast.1b9a566e.js";const k=y("loader",()=>{const n=m(),s=L(!1);return{loading:s,startLoad:()=>{s.value=!0},stopLoad:()=>{s.value=!1},redirectInMain:()=>{n.push({name:h.MAIN_PAGE.routeName})}}});const B={name:"UILoader"},T={class:"loader__wrap"},U=u("div",{class:"loader"},[u("div"),u("div"),u("div"),u("div")],-1),x=[U];function N(n,s,e,t,i,I){return M(),S("div",T,x)}const A=w(B,[["render",N]]),_="posts";class v{static async getPostsList(s,e,t=null){const i=await l.GET({service:_,query:{offset:s,limit:e,search:t}});return i.status.ok?i.payload:(f(d.serverError),null)}static async getPostById(s){const e=await l.GET({service:_,id:s});return e.status.ok?e.payload:(f(d.serverError),null)}static async changePostInfo(s,e){const t=await l.PUT({service:_,id:s,body:e});return t.status.ok?(g(d.postChanging),t.status.ok):(f(d.serverError),null)}static async deletePost(s){const e=await l.DELETE({service:_,id:s});return e.status.ok?(g(d.postDeleted),e.status.ok):(f(d.serverError),null)}}const D=y("posts",()=>{const n=L([]),s=L(0),e=L({}),t=k();async function i(o,a,p){t.startLoad();const r=await v.getPostsList(o,a,p);r||t.redirectInMain(),n.value=r.map(c=>({...c,id:String(c.id),userId:String(c.userId)})),s.value=r.length,t.stopLoad()}async function I(o){if(e.value.id===o)return;t.startLoad();const a=await v.getPostById(o);a||t.redirectInMain(),e.value=a,t.stopLoad()}async function P(o,a){t.startLoad(),await v.changePostInfo(o,a)||t.redirectInMain();const r=n.value.find(c=>(c==null?void 0:c.id)===o);r.title=a.title,r.body=a.body,t.stopLoad()}async function E(o){t.startLoad();const a=await v.deletePost(o);a||t.redirectInMain();const p=n.value.findIndex(r=>(r==null?void 0:r.id)===o);return n.value.splice(p,1),t.stopLoad(),a}return{postsList:n,totalValue:s,postInfo:e,getPostsList:i,getPostById:I,changePostInfo:P,deletePost:E}});export{A as U,k as a,D as u};
