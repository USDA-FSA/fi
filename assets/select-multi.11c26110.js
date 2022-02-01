import{u as v}from"./useErrorState.4249dbe8.js";import{u as D}from"./useUtilities.339b11e5.js";import{_ as L}from"./index.3baf1276.js";import{n as b,i as A,j as y,o as n,f as o,l as _,C,v as u,y as h,F as I,s as M,t as x}from"./vendor.98cfb40b.js";const F={props:{ID:String,LABEL:String,DATA:Array,REQUIRED:String,EXTRA_CLASSES:String,FIELD_ERROR_CLASS:String,ARIA_REQUIRED:String,HELP_MESSAGE:String,ERROR_MESSAGE:String,HAS_ERROR:String},setup(i){const m=i.DATA?i.DATA:b(null),t=i.FIELD_ERROR_CLASS?i.FIELD_ERROR_CLASS:A("fsa-field--error"),r=A("");let d=b([]);const{hasError:S,setHasError:s,errorMessage:P,setErrorMessage:Q}=v(),{getClosest:k}=D();y(()=>{i.HAS_ERROR=="true"&&s(!0),d=document.querySelectorAll('[data-behavior~="select-multi"]');let a=null;d.forEach(l=>{l.addEventListener("click",E,!1),l.value=="checked"&&(l.checked=!0,a=l)});let c=a!=null?a:d[0];E(c)});function E(a){let c=a.currentTarget?a.currentTarget:a;c.id;let l=k(c,".fsa-select-multi"),e=l.querySelector('[data-behavior~="select-multi-all"]');if(e)if(c!=e){let f=l.querySelectorAll('[data-behavior~="select-multi"]').length,g=l.querySelectorAll('[data-behavior~="select-multi"]:checked').length,R=f-g;c.checked?e.checked||(R<=1?(e.indeterminate=!1,e.checked=!0):(e.indeterminate=!0,e.checked=!1)):e.checked?(e.indeterminate=!0,e.checked=!1):R==f&&(e.indeterminate=!1,e.checked=!1)}else d.forEach(f=>{f.checked=e.checked}),e.indeterminate=!1}return{hasError:S,setHasError:s,fieldErrorClass:t,selectMultiData:m,extraFieldClasses:r,resetCheckboxes:E}}},O=["for","id"],T={key:0,class:"fsa-field__label-desc"},H={class:"fsa-select-multi fsa-field__item"},j=["aria-describedby"],q=["id","data-behavior","name","value"],B=["for"],G=["id"],U=["id"];function N(i,m,t,r,d,S){return n(),o("div",{class:x("fsa-field "+(r.hasError?r.fieldErrorClass:"")+" "+r.extraFieldClasses)},[_("label",{class:"fsa-field__label",for:t.ID,id:t.ID+"_label"},[C(u(t.LABEL)+" ",1),t.REQUIRED=="true"?(n(),o("span",T,"Required")):h("",!0)],8,O),_("div",H,[_("ul",{class:"fsa-select-multi__list","aria-describedby":t.ID+"__help"},[(n(!0),o(I,null,M(r.selectMultiData,s=>(n(),o("li",{key:s.id,class:"fsa-select-multi__item"},[_("input",{class:"fsa-checkbox fsa-select-multi__check",type:"checkbox",id:s.id,"data-behavior":"select-multi"+(s.behavior!=""?" "+s.behavior:""),name:s.name,value:s.val},null,8,q),_("label",{class:"fsa-select-multi__label",for:s.id},u(s.label),9,B)]))),128))],8,j)]),t.HELP_MESSAGE?(n(),o("span",{key:0,id:t.ID+"__help",class:"fsa-field__help"},u(t.HELP_MESSAGE),9,G)):h("",!0),r.hasError?(n(),o("span",{key:1,id:t.ID+"__error-message",class:"fsa-field__message",role:"alert"},u(t.ERROR_MESSAGE),9,U)):h("",!0)],2)}var J=L(F,[["render",N]]);export{J as default};