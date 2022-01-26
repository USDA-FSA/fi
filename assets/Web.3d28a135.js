import{i as v,s as d,g as n,j as h,r as _,o as p,f as E,l as e,k as f,t as m,m as g,n as i}from"./vendor.e8f60ee4.js";import{g as S,v as R}from"./global-nav.ba697739.js";import A from"./field.58c31aa9.js";import{_ as I}from"./index.9d0954b9.js";import"./useErrorState.24fd8ff0.js";import"./usePopoverControls.d469eb65.js";const w={components:{globalNav:S,field:A},setup(u){const a=v(),r=d(()=>a.getters["web/getNavigation"]),s=n("Header Default"),t=n(""),c=d(()=>[{label:"One",val:1},{label:"Two",val:2},{label:"Three",val:3},{label:"Four",val:4}]),l=b=>{s.value="Search Results:",t.value=b.phrase},o=n(R());return h(()=>{a.dispatch("web/setNavigation")}),{headerText:s,navigationData:r,scopedSearcCategories:c,submitSearch:l,searchResults:t,nameFieldId:o}}},P={id:"main-content",tabindex:"-1"},D=e("div",{class:"fsa-section"},[e("div",{class:"fsa-section__bd"},[e("div",{class:"fsa-breadcrumb"},[e("nav",{class:"fsa-breadcrumb__nav","aria-label":"Breadcrumbs"},[e("ol",{class:"fsa-breadcrumb__list"},[e("li",{class:"fsa-breadcrumb__item"},[e("a",{class:"fsa-breadcrumb__link",href:"link.html"},"Inspections")]),e("li",{class:"fsa-breadcrumb__item","aria-current":"page"},[e("a",{class:"fsa-breadcrumb__link",href:"link.html"},"Inspection Detail")])])])]),e("div",{class:"fsa-level@m fsa-level--justify-between"},[e("h1",{class:"fsa-m--none"},"Inspection\xA0#9458"),e("div",{class:"fsa-level fsa-level--justify-between fsa-level--grow-auto"},[e("span",null,[e("button",{class:"fsa-btn fsa-btn--block fsa-btn--secondary",type:"button"},[e("svg",{class:"fsa-icon fsa-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})]),i(" Edit ")])]),e("span",null,[e("button",{class:"fsa-btn fsa-btn--block fsa-btn--primary",type:"button"},[e("svg",{class:"fsa-icon fsa-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"})]),i(" Start ")])])])])])],-1),O={class:"fsa-section"},y={class:"fsa-section__bd"},N={class:"fsa-m-t--l"},x={class:"fsa-section"},V={class:"fsa-section__bd"},B=["id"],T=e("p",null,[e("strong",null,"Note:"),i(" Please provide your full legal given name, a it is written on your birth certificate.")],-1),C=[T];function j(u,a,r,s,t,c){const l=_("globalNav"),o=_("field");return p(),E("div",null,[e("header",null,[f(l,{NAV_DATA:s.navigationData,EXTRA_CLASSES:"fsa-nav-global__list-item--multi-column",USE_SEARCH:"true",onEmitSearch:s.submitSearch},null,8,["NAV_DATA","onEmitSearch"])]),e("main",P,[D,e("div",O,[e("div",y,[e("h2",null,m(s.headerText),1),e("span",N,m(s.searchResults),1)])]),e("div",x,[e("div",V,[f(o,{ID:s.nameFieldId,EXTRA_CLASSES:"",LABEL:"Full Name",INPUT_VALUE:"",INPUT_TYPE:"text",REQUIRED:"true",ARIA_REQUIRED:"true",BEHAVIOR:"",ARIA_DESCRIBEDBY:s.nameFieldId+"__help",HELP_MESSAGE:"Use your full name, please.",ERROR_MESSAGE:"Hey, you forgot your name, Buddy!",HAS_ERROR:"false",USE_POPOVER:"true",POPOVER_TYPE:"help",POPOVER_CLASSES:"fsa-popover--tr fsa-popover--size-small",POPOVER_ID:s.nameFieldId+"-help-popover",POPOVER_HEADER:"Full Name Help",ref:"nameField"},{default:g(()=>[e("div",{id:s.nameFieldId+"-popup-body"},C,8,B)]),_:1},8,["ID","ARIA_DESCRIBEDBY","POPOVER_ID"])])])])])}var M=I(w,[["render",j]]);export{M as default};
