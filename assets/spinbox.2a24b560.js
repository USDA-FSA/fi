import{_ as c}from"./index.20900db3.js";import{i as b,o as l,f as o,l as s,t as u,y as _,v as I}from"./vendor.98cfb40b.js";function S(i,n=null){return{stepUp:()=>{document.getElementById(i).stepUp()},stepDown:()=>{document.getElementById(i).stepDown()}}}const E={props:{ID:String,INPUT_VALUE:String,LABEL_TITLE:String,STEP:String,USE_PREFIX:String,PREFIX:String,USE_SUFFIX:String,SUFFIX:String,USE_ICON:String,ICON_PATH:String,ICON_SIZE_CLASS:String,ARIA_DESCRIBEDBY:String},setup(i,{emit:n}){const e=b(null),{stepUp:a,stepDown:r}=S(i.ID,i.STEP),d=t=>{n("emitSpin",{id:i.ID,dir:t,val:parseInt(document.getElementById(i.ID).value)})};return{spin:t=>{t=="up"&&a(),t=="down"&&r(),d(t),e.value=parseInt(document.getElementById(i.ID).value)},handleKeydown:t=>{t.keyCode===38&&t.key=="ArrowUp"&&(t.preventDefault(),a(),d("up")),t.keyCode===40&&t.key=="ArrowDown"&&(t.preventDefault(),r(),d("down"))},handleBlur:()=>{let t=parseInt(document.getElementById(i.ID).value);e.value>t?d("up"):d("down"),e.value=t}}}},m={class:"fsa-spinbox fsa-field__item"},x={class:"fsa-spinbox__number"},h={key:0,class:"fsa-affix fsa-affix--fill"},v=["for","title"],y=["d"],g={key:1},w=["value","step","id","aria-describedby","name"],D={key:1,class:"fsa-affix fsa-affix--fill"},B=["value","step","id","aria-describedby","name"],U=["for"],C=["d"],A={key:1},P={class:"fsa-spinbox__actions","aria-hidden":"true"};function T(i,n,e,a,r,d){return l(),o("div",m,[s("div",x,[e.USE_PREFIX=="true"?(l(),o("span",h,[s("label",{for:e.ID,class:"fsa-affix__prefix","aria-hidden":"true",title:e.LABEL_TITLE},[e.USE_ICON=="true"?(l(),o("svg",{key:0,class:u("fsa-icon "+e.ICON_SIZE_CLASS),"aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[s("path",{d:e.ICON_PATH},null,8,y)],2)):_("",!0),e.PREFIX?(l(),o("span",g,I(e.PREFIX),1)):_("",!0)],8,v),s("input",{onBlur:n[0]||(n[0]=(...f)=>a.handleBlur&&a.handleBlur(...f)),onKeydown:n[1]||(n[1]=(...f)=>a.handleKeydown&&a.handleKeydown(...f)),class:"fsa-input fsa-spinbox__input fsa-affix__item",type:"number",value:e.INPUT_VALUE,step:e.STEP,id:e.ID,"aria-describedby":e.ARIA_DESCRIBEDBY,name:e.ID},null,40,w)])):_("",!0),e.USE_SUFFIX=="true"?(l(),o("span",D,[s("input",{class:"fsa-input fsa-spinbox__input fsa-affix__item",type:"number",value:e.INPUT_VALUE,step:e.STEP,id:e.ID,"aria-describedby":e.ARIA_DESCRIBEDBY,name:e.ID},null,8,B),s("label",{for:e.ID,class:"fsa-affix__suffix","aria-hidden":"true",title:"LABEL_TITLE"},[e.USE_ICON=="true"?(l(),o("svg",{key:0,class:u("fsa-icon "+e.ICON_SIZE_CLASS),"aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[s("path",{d:e.ICON_PATH},null,8,C)],2)):_("",!0),e.SUFFIX?(l(),o("span",A,I(e.SUFFIX),1)):_("",!0)],8,U)])):_("",!0)]),s("div",P,[s("button",{onClick:n[2]||(n[2]=f=>a.spin("up")),tabindex:"-1",class:"fsa-spinbox__btn fsa-spinbox__btn--increment",type:"button","data-behavior":"spinbox-spin",title:"Increase"}),s("button",{onClick:n[3]||(n[3]=f=>a.spin("down")),tabindex:"-1",class:"fsa-spinbox__btn fsa-spinbox__btn--decrement",type:"button","data-behavior":"spinbox-spin",title:"Decrease"})])])}var p=c(E,[["render",T]]);export{p as default};