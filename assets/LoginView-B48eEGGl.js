import{C as c,b as m,d as p,q as n,j as g,x as _,v as f,n as b,D as V,g as o,i as w,k as x,F as v,E as L}from"./index-C4fRqDKV.js";import{a as d,u as k,_ as S}from"./useMutation-CNFcXj_C.js";const $={__name:"LoginForm",props:{isLoading:{default:!1,type:Boolean}},emits:["submit"],setup(u,{emit:i}){const l=u,t=i,e=c({email:"",password:""});return(r,a)=>(m(),p("form",{onSubmit:a[2]||(a[2]=b(s=>t("submit",e),["prevent"]))},[n(d,{class:"mb-4",label:"Електронна пошта",modelValue:e.email,"onUpdate:modelValue":a[0]||(a[0]=s=>e.email=s)},null,8,["modelValue"]),n(d,{type:"password",label:"Пароль",modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=s=>e.password=s)},null,8,["modelValue"]),n(f,{class:"mt-10 w-full",variant:"gradient",type:"submit","is-loading":l.isLoading},{default:g(()=>[_(" Увійти ")]),_:1},8,["is-loading"])],32))}},F={__name:"LoginView",setup(u){const i=V(),{isLoading:l,error:t,mutation:e}=k({mutationFn:r=>L.login(r),onSuccess:()=>i.replace("/goit-vue-project/map")});return(r,a)=>(m(),p(v,null,[n($,{onSubmit:o(e),"is-loading":o(l)},null,8,["onSubmit","is-loading"]),o(t)?(m(),w(S,{key:0,text:o(t).message},null,8,["text"])):x("",!0)],64))}};export{F as default};
