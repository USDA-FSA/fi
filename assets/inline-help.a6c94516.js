import{u as _}from"./usePopoverControls.d469eb65.js";import{_ as c}from"./index.731a74f1.js";import{p as h,o as a,f as n,l as e,t as l,y as d,v as f,C as v,B as P}from"./vendor.13704ef5.js";const O={props:{POPOVER_TYPE:String,POPOVER_CLASSES:String,POPOVER_ID:String,POPOVER_HEADER:String,ICON_SIZE:String},setup(i){const{showPopover:t,hidePopover:s}=_();return{iconSize:h(()=>i.ICON_SIZE==""?"fsa-icon--size-1":i.ICON_SIZE),showPopover:t,hidePopover:s}}},g={class:"fsa-field"},E=["data-target"],m=e("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"},null,-1),p=[m],u=e("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"},null,-1),S=[u],w=["id"],V={class:"fsa-popover__content"},C={class:"fsa-popover__hd"},z={class:"fsa-level@m fsa-level--justify-between"},R={class:"fsa-popover__title"},b=e("svg",{class:"fsa-icon fsa-icon--size-2","aria-hidden":"false",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})],-1),x=[b],I={class:"fsa-popover__bd"},D=P("Help text body content");function y(i,t,s,o,B,k){return a(),n("div",g,[e("button",{onClick:t[0]||(t[0]=r=>o.showPopover(s.POPOVER_ID)),class:"fsa-btn fsa-btn--flat","data-behavior":"toggle-popover","data-target":s.POPOVER_ID},[s.POPOVER_TYPE=="help"?(a(),n("svg",{key:0,class:l("fsa-icon "+o.iconSize),"aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},p,2)):d("",!0),s.POPOVER_TYPE=="info"?(a(),n("svg",{key:1,class:l("fsa-icon "+o.iconSize),"aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},S,2)):d("",!0)],8,E),e("div",{class:l("fsa-popover "+s.POPOVER_CLASSES),id:s.POPOVER_ID,"aria-hidden":"true"},[e("div",V,[e("div",C,[e("div",z,[e("span",R,f(s.POPOVER_HEADER),1),e("button",{onClick:t[1]||(t[1]=r=>o.hidePopover(s.POPOVER_ID)),class:"",type:"button"},x)])]),e("div",I,[v(i.$slots,"default",{},()=>[D])])])],10,w)])}var A=c(O,[["render",y]]);export{A as default};
