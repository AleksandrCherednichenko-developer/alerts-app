import{o,a as c,b as g,d as u,t as i,D as x,_ as I,N as P,M as v,g as k,u as s,e as n,m as l,R as N}from"./index.308755a9.js";import{u as V,a as h,U as B}from"./index.37c8a886.js";import{S as $,_ as m}from"./index.96fa9cab.js";import"./toast.00273680.js";const C=["disabled"],M={key:1},U={name:"SimpleButton"},f=Object.assign(U,{props:{iconName:{type:String,default:""},text:{type:String,default:""},disabled:{type:Boolean},cssModifier:{type:String,default:""}},setup(r){const t=r;return(_,p)=>(o(),c("button",{class:x(["button",`button--${t.cssModifier}`]),disabled:t.disabled},[t.iconName?(o(),g($,{key:0,name:t.iconName,class:"button__icon"},null,8,["name"])):u("",!0),t.text?(o(),c("span",M,i(t.text),1)):u("",!0)],10,C))}});const D={class:"section-content container-content"},E={key:1,class:"post__page"},O={class:"post__page-info"},R={class:"post__page-buttons"},A={name:"PostDetailPage"},j=Object.assign(A,{setup(r){const t=P(),_=v(),p=V(),e=h(),b=async()=>{if(await e.deletePost(t.params.id))return _.push({name:N.POSTS_PAGE.routeName})},y=()=>{e.changePostInfo(t.params.id,{title:e.postInfo.title,body:e.postInfo.body})};return k(()=>{e.getPostById(t.params.id)}),(S,a)=>(o(),c("section",D,[s(p).loading?(o(),g(B,{key:0})):(o(),c("div",E,[n("div",O,[n("p",null,"Post: "+i(s(e).postInfo.id),1),n("p",null,"Author: "+i(s(e).postInfo.userId),1)]),l(m,{modelValue:s(e).postInfo.title,"onUpdate:modelValue":a[0]||(a[0]=d=>s(e).postInfo.title=d),class:"post__page-input","label-text":"Post title:"},null,8,["modelValue"]),l(m,{modelValue:s(e).postInfo.body,"onUpdate:modelValue":a[1]||(a[1]=d=>s(e).postInfo.body=d),class:"post__page-input","label-text":"Post text:"},null,8,["modelValue"]),n("div",R,[l(f,{text:"Delete","icon-name":"delete","css-modifier":"delete",onClick:b}),l(f,{text:"Save","icon-name":"save","css-modifier":"save",onClick:y})])]))]))}}),G=I(j,[["__scopeId","data-v-d72c9f83"]]);export{G as default};