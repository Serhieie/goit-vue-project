import{f as u,o as c,i as f,a as m,z as x,c as _,m as y,v as b,r as i}from"./index-B_hFGNso.js";const g={class:"w-full text-[#2C2C2C]"},h={class:"block"},k={class:"block text-xs px-3 mb-2"},d="w-full text-sm rounded-[4px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary",w=Object.assign({inheritAttrs:!1},{__name:"IInput",props:{modelValue:String,label:String,placeholder:String,type:{default:"text",type:String}},emits:["update:modelValue"],setup(t,{emit:a}){const e=t,n=a,s=u(()=>e.type==="textarea"),l=u(()=>s.value?d+" resize-none":d),p=u(()=>s.value?"textarea":"input");return(o,r)=>(c(),f("div",g,[m("label",h,[m("span",k,x(e.label),1),(c(),_(b(p.value),y({rows:"3",class:l.value},{...o.$props,...o.$attrs},{value:t.modelValue,onInput:r[0]||(r[0]=v=>n("update:modelValue",v.target.value))}),null,16,["class","value"]))])]))}}),B={class:"text-red-500 text-center mt-1 font-semibold select-none"},C={__name:"ErrorMessage",props:{text:{type:String,default:""},hasError:{type:Boolean,default:!1}},setup(t){return(a,e)=>(c(),f("div",B,x(t.text),1))}},S=({mutationFn:t,onSuccess:a,onError:e})=>{const n=i(),s=i(!1),l=i(null);return{data:n,isLoading:s,error:l,mutation:async(...o)=>{s.value=!0;try{n.value=await t(...o),l.value=null,a==null||a(n)}catch(r){l.value=r,e==null||e(l)}finally{s.value=!1}}}};export{C as _,w as a,S as u};
