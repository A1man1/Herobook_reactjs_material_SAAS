(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[0],{368:function(e,r,a){"use strict";var t=a(4),o=a(0),n=a(1),i=(a(7),a(76)),l=a(101),s=a(103),d=a(24),c=n.forwardRef((function(e,r){var a=e.children,d=e.classes,c=e.className,u=e.component,p=void 0===u?"p":u,m=(e.disabled,e.error,e.filled,e.focused,e.margin,e.required,e.variant,Object(t.a)(e,["children","classes","className","component","disabled","error","filled","focused","margin","required","variant"])),f=Object(s.a)(),b=Object(l.a)({props:e,muiFormControl:f,states:["variant","margin","disabled","error","filled","focused","required"]});return n.createElement(p,Object(o.a)({className:Object(i.a)(d.root,("filled"===b.variant||"outlined"===b.variant)&&d.contained,c,b.disabled&&d.disabled,b.error&&d.error,b.filled&&d.filled,b.focused&&d.focused,b.required&&d.required,"dense"===b.margin&&d.marginDense),ref:r},m)," "===a?n.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}}):a)}));r.a=Object(d.a)((function(e){return{root:Object(o.a)(Object(o.a)({color:e.palette.text.secondary},e.typography.caption),{},{textAlign:"left",marginTop:3,margin:0,"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),error:{},disabled:{},marginDense:{marginTop:4},contained:{marginLeft:14,marginRight:14},focused:{},filled:{},required:{}}}),{name:"MuiFormHelperText"})(c)},608:function(e,r,a){"use strict";var t=a(0),o=a(4),n=a(1),i=(a(7),a(76)),l=a(651),s=a(652),d=a(700),c=a(101),u=a(103),p=a(24),m=a(84),f=n.forwardRef((function(e,r){var a=e.children,l=e.classes,s=e.className,d=(e.color,e.component),p=void 0===d?"label":d,f=(e.disabled,e.error,e.filled,e.focused,e.required,Object(o.a)(e,["children","classes","className","color","component","disabled","error","filled","focused","required"])),b=Object(u.a)(),v=Object(c.a)({props:e,muiFormControl:b,states:["color","required","focused","disabled","error","filled"]});return n.createElement(p,Object(t.a)({className:Object(i.a)(l.root,l["color".concat(Object(m.a)(v.color||"primary"))],s,v.disabled&&l.disabled,v.error&&l.error,v.filled&&l.filled,v.focused&&l.focused,v.required&&l.required),ref:r},f),a,v.required&&n.createElement("span",{"aria-hidden":!0,className:Object(i.a)(l.asterisk,v.error&&l.error)},"\u2009","*"))})),b=Object(p.a)((function(e){return{root:Object(t.a)(Object(t.a)({color:e.palette.text.secondary},e.typography.body1),{},{lineHeight:1,padding:0,"&$focused":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),colorSecondary:{"&$focused":{color:e.palette.secondary.main}},focused:{},disabled:{},error:{},filled:{},required:{},asterisk:{"&$error":{color:e.palette.error.main}}}}),{name:"MuiFormLabel"})(f),v=n.forwardRef((function(e,r){var a=e.classes,l=e.className,s=e.disableAnimation,d=void 0!==s&&s,p=(e.margin,e.shrink),m=(e.variant,Object(o.a)(e,["classes","className","disableAnimation","margin","shrink","variant"])),f=Object(u.a)(),v=p;"undefined"===typeof v&&f&&(v=f.filled||f.focused||f.adornedStart);var h=Object(c.a)({props:e,muiFormControl:f,states:["margin","variant"]});return n.createElement(b,Object(t.a)({"data-shrink":v,className:Object(i.a)(a.root,l,f&&a.formControl,!d&&a.animated,v&&a.shrink,"dense"===h.margin&&a.marginDense,{filled:a.filled,outlined:a.outlined}[h.variant]),classes:{focused:a.focused,disabled:a.disabled,error:a.error,required:a.required,asterisk:a.asterisk},ref:r},m))})),h=Object(p.a)((function(e){return{root:{display:"block",transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},asterisk:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 12px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}}),{name:"MuiInputLabel"})(v),g=a(649),O=a(368),j=a(690),x={standard:l.a,filled:s.a,outlined:d.a},y=n.forwardRef((function(e,r){var a=e.autoComplete,l=e.autoFocus,s=void 0!==l&&l,d=e.children,c=e.classes,u=e.className,p=e.color,m=void 0===p?"primary":p,f=e.defaultValue,b=e.disabled,v=void 0!==b&&b,y=e.error,E=void 0!==y&&y,q=e.FormHelperTextProps,k=e.fullWidth,F=void 0!==k&&k,N=e.helperText,P=e.hiddenLabel,w=e.id,L=e.InputLabelProps,$=e.inputProps,T=e.InputProps,C=e.inputRef,I=e.label,R=e.multiline,S=void 0!==R&&R,D=e.name,M=e.onBlur,H=e.onChange,A=e.onFocus,W=e.placeholder,B=e.required,V=void 0!==B&&B,z=e.rows,J=e.rowsMax,_=e.select,G=void 0!==_&&_,K=e.SelectProps,Q=e.type,U=e.value,X=e.variant,Y=void 0===X?"standard":X,Z=Object(o.a)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","select","SelectProps","type","value","variant"]);var ee={};if("outlined"===Y&&(L&&"undefined"!==typeof L.shrink&&(ee.notched=L.shrink),I)){var re,ae=null!==(re=null===L||void 0===L?void 0:L.required)&&void 0!==re?re:V;ee.label=n.createElement(n.Fragment,null,I,ae&&"\xa0*")}G&&(K&&K.native||(ee.id=void 0),ee["aria-describedby"]=void 0);var te=N&&w?"".concat(w,"-helper-text"):void 0,oe=I&&w?"".concat(w,"-label"):void 0,ne=x[Y],ie=n.createElement(ne,Object(t.a)({"aria-describedby":te,autoComplete:a,autoFocus:s,defaultValue:f,fullWidth:F,multiline:S,name:D,rows:z,rowsMax:J,type:Q,value:U,id:w,inputRef:C,onBlur:M,onChange:H,onFocus:A,placeholder:W,inputProps:$},ee,T));return n.createElement(g.a,Object(t.a)({className:Object(i.a)(c.root,u),disabled:v,error:E,fullWidth:F,hiddenLabel:P,ref:r,required:V,color:m,variant:Y},Z),I&&n.createElement(h,Object(t.a)({htmlFor:w,id:oe},L),I),G?n.createElement(j.a,Object(t.a)({"aria-describedby":te,id:w,labelId:oe,value:U,input:ie},K),d):ie,N&&n.createElement(O.a,Object(t.a)({id:te},q),N))}));r.a=Object(p.a)({root:{}},{name:"MuiTextField"})(y)},679:function(e,r,a){"use strict";var t=a(0),o=a(4),n=a(1),i=(a(7),a(76)),l=a(644),s=a(24),d=a(141),c=n.forwardRef((function(e,r){var a=e.children,s=e.classes,c=e.className,u=e.component,p=void 0===u?"div":u,m=e.disablePointerEvents,f=void 0!==m&&m,b=e.disableTypography,v=void 0!==b&&b,h=e.position,g=e.variant,O=Object(o.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),j=Object(d.b)()||{},x=g;return g&&j.variant,j&&!x&&(x=j.variant),n.createElement(d.a.Provider,{value:null},n.createElement(p,Object(t.a)({className:Object(i.a)(s.root,c,f&&s.disablePointerEvents,j.hiddenLabel&&s.hiddenLabel,"filled"===x&&s.filled,{start:s.positionStart,end:s.positionEnd}[h],"dense"===j.margin&&s.marginDense),ref:r},O),"string"!==typeof a||v?a:n.createElement(l.a,{color:"textSecondary"},a)))}));r.a=Object(s.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(c)}}]);
//# sourceMappingURL=0.5b1bb67f.chunk.js.map