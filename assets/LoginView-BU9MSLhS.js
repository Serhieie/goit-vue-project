import{E as c,o as u,i as p,b as n,w as _,d as f,y as g,t as b,G as V,u as o,c as w,q as x,F as v,H as L}from"./index-B_hFGNso.js";import{a as d,u as y,_ as S}from"./useMutation-eO5KV1Kj.js";const $={__name:"LoginForm",props:{isLoading:{default:!1,type:Boolean}},emits:["submit"],setup(m,{emit:i}){const l=m,t=i,e=c({email:"",password:""});return(r,a)=>(u(),p("form",{onSubmit:a[2]||(a[2]=b(s=>t("submit",e),["prevent"]))},[n(d,{class:"mb-4",label:"Електронна пошта",modelValue:e.email,"onUpdate:modelValue":a[0]||(a[0]=s=>e.email=s)},null,8,["modelValue"]),n(d,{type:"password",label:"Пароль",modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=s=>e.password=s)},null,8,["modelValue"]),n(g,{class:"mt-10 w-full",variant:"gradient",type:"submit","is-loading":l.isLoading},{default:_(()=>[f(" Увійти ")]),_:1},8,["is-loading"])],32))}},F={__name:"LoginView",setup(m){const i=V(),{isLoading:l,error:t,mutation:e}=y({mutationFn:r=>L.login(r),onSuccess:()=>i.replace("/goit-vue-project/map")});return(r,a)=>(u(),p(v,null,[n($,{onSubmit:o(e),"is-loading":o(l)},null,8,["onSubmit","is-loading"]),o(t)?(u(),w(S,{key:0,text:o(t).message},null,8,["text"])):x("",!0)],64))}};export{F as default};