import{c as _,r,i as l,H as u,o as m,b as v,f as p,I as d,_ as g,J as t}from"./index.2b38842c.js";const i=(a,e)=>{const s=a[e];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((n,c)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(c.bind(null,new Error("Unknown variable dynamic import: "+e)))})};const f={name:"SvgIcon"},I=Object.assign(f,{props:{name:{type:String,required:!0},pathToIcon:{type:String,default:""}},setup(a){const e=a,s=_(()=>{var o;return(o=e.name)!=null?o:"no-image"}),n=r(null),c=async()=>{if(!e.name)return;const o=e.pathToIcon?i(Object.assign({}),`../../../assets/icons/${e.pathToIcon}/${s.value}.svg`):i(Object.assign({"../../../assets/icons/delete.svg":()=>t(()=>import("./delete.29722c4f.js"),["assets/delete.29722c4f.js","assets/index.2b38842c.js","assets/index.700c0508.css"]),"../../../assets/icons/eye-closed.svg":()=>t(()=>import("./eye-closed.4f68507f.js"),["assets/eye-closed.4f68507f.js","assets/index.2b38842c.js","assets/index.700c0508.css"]),"../../../assets/icons/eye.svg":()=>t(()=>import("./eye.12337e67.js"),["assets/eye.12337e67.js","assets/index.2b38842c.js","assets/index.700c0508.css"]),"../../../assets/icons/logo.svg":()=>t(()=>import("./logo.ec6579cc.js"),["assets/logo.ec6579cc.js","assets/index.2b38842c.js","assets/index.700c0508.css"]),"../../../assets/icons/save.svg":()=>t(()=>import("./save.7b8d6862.js"),["assets/save.7b8d6862.js","assets/index.2b38842c.js","assets/index.700c0508.css"])}),`../../../assets/icons/${s.value}.svg`);n.value=await o};return l(()=>{u(()=>{c()})}),(o,y)=>(m(),v(d(n.value),{key:e.name,"aria-label":`icon-${e.name}`,class:p(["icon-svg",`icon-${e.name}`])},null,8,["aria-label","class"]))}}),E=g(I,[["__scopeId","data-v-9bf162a1"]]);export{E as S};