import{A as c,o as u,f as d,b as s,w as g,d as f,B as _,E as V,C as b,u as l,v as w,q as v,F as x,D as S}from"./index-BZj1POOr.js";import{_ as y}from"./IButton-B1fVepn_.js";import{_ as m,u as R}from"./useMutation-Bt756gJl.js";const U={__name:"RegistrationForm",props:{isLoading:{default:!1,type:Boolean}},emits:["submit"],setup(p,{emit:i}){const n=p,o=i,e=c({name:"",email:"",password:""});return(r,a)=>(u(),d("form",{onSubmit:a[3]||(a[3]=_(t=>o("submit",V(e)),["prevent"]))},[s(m,{class:"mb-4",label:"Повне ім’я",modelValue:e.name,"onUpdate:modelValue":a[0]||(a[0]=t=>e.name=t)},null,8,["modelValue"]),s(m,{class:"mb-4",label:"Електронна пошта",placeholder:"email@gmail.com",modelValue:e.email,"onUpdate:modelValue":a[1]||(a[1]=t=>e.email=t)},null,8,["modelValue"]),s(m,{label:"Пароль",type:"password",modelValue:e.password,"onUpdate:modelValue":a[2]||(a[2]=t=>e.password=t)},null,8,["modelValue"]),s(y,{class:"mt-10 w-full",variant:"gradient",type:"submit","is-loading":n.isLoading},{default:g(()=>[f(" Створити аккаунт ")]),_:1},8,["is-loading"])],32))}},B={key:0,class:"text-red-500"},C={__name:"RegistrationView",setup(p){const i=b(),{isLoading:n,error:o,mutation:e}=R({mutationFn:r=>S.registerUser(r),onSuccess:()=>i.replace("/goit-vue-project/map")});return(r,a)=>(u(),d(x,null,[s(U,{onSubmit:l(e),"is-loading":l(n)},null,8,["onSubmit","is-loading"]),l(o)?(u(),d("div",B,w(l(o).message),1)):v("",!0)],64))}};export{C as default};
