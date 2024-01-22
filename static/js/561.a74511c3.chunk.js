"use strict";(self.webpackChunkreact_ts_phonebook=self.webpackChunkreact_ts_phonebook||[]).push([[561],{4252:(e,n,t)=>{t.d(n,{Z:()=>R});var o=t(7462),r=t(3366),i=t(2791);function a(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var r=e.length;for(n=0;n<r;n++)e[n]&&(t=a(e[n]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}const s=function(){for(var e,n,t=0,o="",r=arguments.length;t<r;t++)(e=arguments[t])&&(n=a(e))&&(o&&(o+=" "),o+=n);return o};var l=t(2421),c=t(104),u=t(2466),d=t(7416);const p=["sx"],h=e=>{var n,t;const o={systemProps:{},otherProps:{}},r=null!=(n=null==e||null==(t=e.theme)?void 0:t.unstable_sxConfig)?n:d.Z;return Object.keys(e).forEach((n=>{r[n]?o.systemProps[n]=e[n]:o.otherProps[n]=e[n]})),o};var f=t(3459),m=t(3329);const v=["className","component"];var b=t(5902),g=t(7107),y=t(988);const Z=(0,t(5878).Z)("MuiBox",["root"]),x=(0,g.Z)(),k=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:n,defaultTheme:t,defaultClassName:a="MuiBox-root",generateClassName:d}=e,b=(0,l.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(c.Z),g=i.forwardRef((function(e,i){const l=(0,f.Z)(t),c=function(e){const{sx:n}=e,t=(0,r.Z)(e,p),{systemProps:i,otherProps:a}=h(t);let s;return s=Array.isArray(n)?[i,...n]:"function"===typeof n?function(){const e=n(...arguments);return(0,u.P)(e)?(0,o.Z)({},i,e):i}:(0,o.Z)({},i,n),(0,o.Z)({},a,{sx:s})}(e),{className:g,component:y="div"}=c,Z=(0,r.Z)(c,v);return(0,m.jsx)(b,(0,o.Z)({as:y,ref:i,className:s(g,d?d(a):a),theme:n&&l[n]||l},Z))}));return g}({themeId:y.Z,defaultTheme:x,defaultClassName:Z.root,generateClassName:b.Z.generate}),R=k},6520:(e,n,t)=>{t.d(n,{Z:()=>ce});var o=t(3366),r=t(7462),i=t(2791),a=t(9278),s=t(4419),l=t(2065),c=t(7630),u=t(551),d=t(2071);const p=t(7054).Z;let h,f=!0,m=!1;const v={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function b(e){e.metaKey||e.altKey||e.ctrlKey||(f=!0)}function g(){f=!1}function y(){"hidden"===this.visibilityState&&m&&(f=!0)}function Z(e){const{target:n}=e;try{return n.matches(":focus-visible")}catch(t){}return f||function(e){const{type:n,tagName:t}=e;return!("INPUT"!==t||!v[n]||e.readOnly)||"TEXTAREA"===t&&!e.readOnly||!!e.isContentEditable}(n)}const x=function(){const e=i.useCallback((e=>{var n;null!=e&&((n=e.ownerDocument).addEventListener("keydown",b,!0),n.addEventListener("mousedown",g,!0),n.addEventListener("pointerdown",g,!0),n.addEventListener("touchstart",g,!0),n.addEventListener("visibilitychange",y,!0))}),[]),n=i.useRef(!1);return{isFocusVisibleRef:n,onFocus:function(e){return!!Z(e)&&(n.current=!0,!0)},onBlur:function(){return!!n.current&&(m=!0,window.clearTimeout(h),h=window.setTimeout((()=>{m=!1}),100),n.current=!1,!0)},ref:e}};var k=t(168);var R=t(1721),w=t(5545);function M(e,n){var t=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,i.isValidElement)(e)?n(e):e}(e)})),t}function C(e,n,t){return null!=t[n]?t[n]:e.props[n]}function E(e,n,t){var o=M(e.children),r=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var o,r=Object.create(null),i=[];for(var a in e)a in n?i.length&&(r[a]=i,i=[]):i.push(a);var s={};for(var l in n){if(r[l])for(o=0;o<r[l].length;o++){var c=r[l][o];s[r[l][o]]=t(c)}s[l]=t(l)}for(o=0;o<i.length;o++)s[i[o]]=t(i[o]);return s}(n,o);return Object.keys(r).forEach((function(a){var s=r[a];if((0,i.isValidElement)(s)){var l=a in n,c=a in o,u=n[a],d=(0,i.isValidElement)(u)&&!u.props.in;!c||l&&!d?c||!l||d?c&&l&&(0,i.isValidElement)(u)&&(r[a]=(0,i.cloneElement)(s,{onExited:t.bind(null,s),in:u.props.in,exit:C(s,"exit",e),enter:C(s,"enter",e)})):r[a]=(0,i.cloneElement)(s,{in:!1}):r[a]=(0,i.cloneElement)(s,{onExited:t.bind(null,s),in:!0,exit:C(s,"exit",e),enter:C(s,"enter",e)})}})),r}var T=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},P=function(e){function n(n,t){var o,r=(o=e.call(this,n,t)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o));return o.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},o}(0,R.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,o,r=n.children,a=n.handleExited;return{children:n.firstRender?(t=e,o=a,M(t.children,(function(e){return(0,i.cloneElement)(e,{onExited:o.bind(null,e),in:!0,appear:C(e,"appear",t),enter:C(e,"enter",t),exit:C(e,"exit",t)})}))):E(e,r,a),firstRender:!1}},t.handleExited=function(e,n){var t=M(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,r.Z)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,r=(0,o.Z)(e,["component","childFactory"]),a=this.state.contextValue,s=T(this.state.children).map(t);return delete r.appear,delete r.enter,delete r.exit,null===n?i.createElement(w.Z.Provider,{value:a},s):i.createElement(w.Z.Provider,{value:a},i.createElement(n,r,s))},n}(i.Component);P.propTypes={},P.defaultProps={component:"div",childFactory:function(e){return e}};const S=P;var z=t(2554),j=t(3329);const L=function(e){const{className:n,classes:t,pulsate:o=!1,rippleX:r,rippleY:s,rippleSize:l,in:c,onExited:u,timeout:d}=e,[p,h]=i.useState(!1),f=(0,a.Z)(n,t.ripple,t.rippleVisible,o&&t.ripplePulsate),m={width:l,height:l,top:-l/2+s,left:-l/2+r},v=(0,a.Z)(t.child,p&&t.childLeaving,o&&t.childPulsate);return c||p||h(!0),i.useEffect((()=>{if(!c&&null!=u){const e=setTimeout(u,d);return()=>{clearTimeout(e)}}}),[u,c,d]),(0,j.jsx)("span",{className:f,style:m,children:(0,j.jsx)("span",{className:v})})};var N=t(5878);const F=(0,N.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);var V,B,I,D;const O=["center","classes","className"];let A,K,U,X;const Y=(0,z.F4)(A||(A=V||(V=(0,k.Z)(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))),H=(0,z.F4)(K||(K=B||(B=(0,k.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))),W=(0,z.F4)(U||(U=I||(I=(0,k.Z)(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))),_=(0,c.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),q=(0,c.ZP)(L,{name:"MuiTouchRipple",slot:"Ripple"})(X||(X=D||(D=(0,k.Z)(["\n  opacity: 0;\n  position: absolute;\n\n  &."," {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  &."," {\n    animation-duration: ","ms;\n  }\n\n  & ."," {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & ."," {\n    opacity: 0;\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  & ."," {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",";\n    animation-duration: 2500ms;\n    animation-timing-function: ",";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"]))),F.rippleVisible,Y,550,(e=>{let{theme:n}=e;return n.transitions.easing.easeInOut}),F.ripplePulsate,(e=>{let{theme:n}=e;return n.transitions.duration.shorter}),F.child,F.childLeaving,H,550,(e=>{let{theme:n}=e;return n.transitions.easing.easeInOut}),F.childPulsate,W,(e=>{let{theme:n}=e;return n.transitions.easing.easeInOut})),$=i.forwardRef((function(e,n){const t=(0,u.Z)({props:e,name:"MuiTouchRipple"}),{center:s=!1,classes:l={},className:c}=t,d=(0,o.Z)(t,O),[p,h]=i.useState([]),f=i.useRef(0),m=i.useRef(null);i.useEffect((()=>{m.current&&(m.current(),m.current=null)}),[p]);const v=i.useRef(!1),b=i.useRef(0),g=i.useRef(null),y=i.useRef(null);i.useEffect((()=>()=>{b.current&&clearTimeout(b.current)}),[]);const Z=i.useCallback((e=>{const{pulsate:n,rippleX:t,rippleY:o,rippleSize:r,cb:i}=e;h((e=>[...e,(0,j.jsx)(q,{classes:{ripple:(0,a.Z)(l.ripple,F.ripple),rippleVisible:(0,a.Z)(l.rippleVisible,F.rippleVisible),ripplePulsate:(0,a.Z)(l.ripplePulsate,F.ripplePulsate),child:(0,a.Z)(l.child,F.child),childLeaving:(0,a.Z)(l.childLeaving,F.childLeaving),childPulsate:(0,a.Z)(l.childPulsate,F.childPulsate)},timeout:550,pulsate:n,rippleX:t,rippleY:o,rippleSize:r},f.current)])),f.current+=1,m.current=i}),[l]),x=i.useCallback((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{};const{pulsate:o=!1,center:r=s||n.pulsate,fakeElement:i=!1}=n;if("mousedown"===(null==e?void 0:e.type)&&v.current)return void(v.current=!1);"touchstart"===(null==e?void 0:e.type)&&(v.current=!0);const a=i?null:y.current,l=a?a.getBoundingClientRect():{width:0,height:0,left:0,top:0};let c,u,d;if(r||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)c=Math.round(l.width/2),u=Math.round(l.height/2);else{const{clientX:n,clientY:t}=e.touches&&e.touches.length>0?e.touches[0]:e;c=Math.round(n-l.left),u=Math.round(t-l.top)}if(r)d=Math.sqrt((2*l.width**2+l.height**2)/3),d%2===0&&(d+=1);else{const e=2*Math.max(Math.abs((a?a.clientWidth:0)-c),c)+2,n=2*Math.max(Math.abs((a?a.clientHeight:0)-u),u)+2;d=Math.sqrt(e**2+n**2)}null!=e&&e.touches?null===g.current&&(g.current=()=>{Z({pulsate:o,rippleX:c,rippleY:u,rippleSize:d,cb:t})},b.current=setTimeout((()=>{g.current&&(g.current(),g.current=null)}),80)):Z({pulsate:o,rippleX:c,rippleY:u,rippleSize:d,cb:t})}),[s,Z]),k=i.useCallback((()=>{x({},{pulsate:!0})}),[x]),R=i.useCallback(((e,n)=>{if(clearTimeout(b.current),"touchend"===(null==e?void 0:e.type)&&g.current)return g.current(),g.current=null,void(b.current=setTimeout((()=>{R(e,n)})));g.current=null,h((e=>e.length>0?e.slice(1):e)),m.current=n}),[]);return i.useImperativeHandle(n,(()=>({pulsate:k,start:x,stop:R})),[k,x,R]),(0,j.jsx)(_,(0,r.Z)({className:(0,a.Z)(F.root,l.root,c),ref:y},d,{children:(0,j.jsx)(S,{component:null,exit:!0,children:p})}))}));var G=t(1217);function J(e){return(0,G.Z)("MuiButtonBase",e)}const Q=(0,N.Z)("MuiButtonBase",["root","disabled","focusVisible"]),ee=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],ne=(0,c.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,n)=>n.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(Q.disabled)]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),te=i.forwardRef((function(e,n){const t=(0,u.Z)({props:e,name:"MuiButtonBase"}),{action:l,centerRipple:c=!1,children:h,className:f,component:m="button",disabled:v=!1,disableRipple:b=!1,disableTouchRipple:g=!1,focusRipple:y=!1,LinkComponent:Z="a",onBlur:k,onClick:R,onContextMenu:w,onDragLeave:M,onFocus:C,onFocusVisible:E,onKeyDown:T,onKeyUp:P,onMouseDown:S,onMouseLeave:z,onMouseUp:L,onTouchEnd:N,onTouchMove:F,onTouchStart:V,tabIndex:B=0,TouchRippleProps:I,touchRippleRef:D,type:O}=t,A=(0,o.Z)(t,ee),K=i.useRef(null),U=i.useRef(null),X=(0,d.Z)(U,D),{isFocusVisibleRef:Y,onFocus:H,onBlur:W,ref:_}=x(),[q,G]=i.useState(!1);v&&q&&G(!1),i.useImperativeHandle(l,(()=>({focusVisible:()=>{G(!0),K.current.focus()}})),[]);const[Q,te]=i.useState(!1);i.useEffect((()=>{te(!0)}),[]);const oe=Q&&!b&&!v;function re(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g;return p((o=>{n&&n(o);return!t&&U.current&&U.current[e](o),!0}))}i.useEffect((()=>{q&&y&&!b&&Q&&U.current.pulsate()}),[b,y,q,Q]);const ie=re("start",S),ae=re("stop",w),se=re("stop",M),le=re("stop",L),ce=re("stop",(e=>{q&&e.preventDefault(),z&&z(e)})),ue=re("start",V),de=re("stop",N),pe=re("stop",F),he=re("stop",(e=>{W(e),!1===Y.current&&G(!1),k&&k(e)}),!1),fe=p((e=>{K.current||(K.current=e.currentTarget),H(e),!0===Y.current&&(G(!0),E&&E(e)),C&&C(e)})),me=()=>{const e=K.current;return m&&"button"!==m&&!("A"===e.tagName&&e.href)},ve=i.useRef(!1),be=p((e=>{y&&!ve.current&&q&&U.current&&" "===e.key&&(ve.current=!0,U.current.stop(e,(()=>{U.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),T&&T(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!v&&(e.preventDefault(),R&&R(e))})),ge=p((e=>{y&&" "===e.key&&U.current&&q&&!e.defaultPrevented&&(ve.current=!1,U.current.stop(e,(()=>{U.current.pulsate(e)}))),P&&P(e),R&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&R(e)}));let ye=m;"button"===ye&&(A.href||A.to)&&(ye=Z);const Ze={};"button"===ye?(Ze.type=void 0===O?"button":O,Ze.disabled=v):(A.href||A.to||(Ze.role="button"),v&&(Ze["aria-disabled"]=v));const xe=(0,d.Z)(n,_,K);const ke=(0,r.Z)({},t,{centerRipple:c,component:m,disabled:v,disableRipple:b,disableTouchRipple:g,focusRipple:y,tabIndex:B,focusVisible:q}),Re=(e=>{const{disabled:n,focusVisible:t,focusVisibleClassName:o,classes:r}=e,i={root:["root",n&&"disabled",t&&"focusVisible"]},a=(0,s.Z)(i,J,r);return t&&o&&(a.root+=" ".concat(o)),a})(ke);return(0,j.jsxs)(ne,(0,r.Z)({as:ye,className:(0,a.Z)(Re.root,f),ownerState:ke,onBlur:he,onClick:R,onContextMenu:ae,onFocus:fe,onKeyDown:be,onKeyUp:ge,onMouseDown:ie,onMouseLeave:ce,onMouseUp:le,onDragLeave:se,onTouchEnd:de,onTouchMove:pe,onTouchStart:ue,ref:xe,tabIndex:v?-1:B,type:O},Ze,A,{children:[h,oe?(0,j.jsx)($,(0,r.Z)({ref:X,center:c},I)):null]}))})),oe=te;var re=t(4036);function ie(e){return(0,G.Z)("MuiIconButton",e)}const ae=(0,N.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),se=["edge","children","className","color","disabled","disableFocusRipple","size"],le=(0,c.ZP)(oe,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,"default"!==t.color&&n["color".concat((0,re.Z)(t.color))],t.edge&&n["edge".concat((0,re.Z)(t.edge))],n["size".concat((0,re.Z)(t.size))]]}})((e=>{let{theme:n,ownerState:t}=e;return(0,r.Z)({textAlign:"center",flex:"0 0 auto",fontSize:n.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(n.vars||n).palette.action.active,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.action.activeChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})}),(e=>{let{theme:n,ownerState:t}=e;var o;const i=null==(o=(n.vars||n).palette)?void 0:o[t.color];return(0,r.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,r.Z)({color:null==i?void 0:i.main},!t.disableRipple&&{"&:hover":(0,r.Z)({},i&&{backgroundColor:n.vars?"rgba(".concat(i.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(i.main,n.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===t.size&&{padding:5,fontSize:n.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:n.typography.pxToRem(28)},{["&.".concat(ae.disabled)]:{backgroundColor:"transparent",color:(n.vars||n).palette.action.disabled}})})),ce=i.forwardRef((function(e,n){const t=(0,u.Z)({props:e,name:"MuiIconButton"}),{edge:i=!1,children:l,className:c,color:d="default",disabled:p=!1,disableFocusRipple:h=!1,size:f="medium"}=t,m=(0,o.Z)(t,se),v=(0,r.Z)({},t,{edge:i,color:d,disabled:p,disableFocusRipple:h,size:f}),b=(e=>{const{classes:n,disabled:t,color:o,edge:r,size:i}=e,a={root:["root",t&&"disabled","default"!==o&&"color".concat((0,re.Z)(o)),r&&"edge".concat((0,re.Z)(r)),"size".concat((0,re.Z)(i))]};return(0,s.Z)(a,ie,n)})(v);return(0,j.jsx)(le,(0,r.Z)({className:(0,a.Z)(b.root,c),centerRipple:!0,focusRipple:!h,disabled:p,ref:n,ownerState:v},m,{children:l}))}))},4137:(e,n,t)=>{t.d(n,{t3:()=>Z});var o,r,i,a,s,l,c,u,d,p=t(168),h=t(3329),f=(t(2791),t(2978));const m={"aria-busy":!0,role:"progressbar"},v=(f.ZP.div(o||(o=(0,p.Z)(["\n  display: ",";\n"])),(e=>e.$visible?"flex":"none")),242.776657104492),b=(0,f.F4)(r||(r=(0,p.Z)(["\n12.5% {\n  stroke-dasharray: ","px, ","px;\n  stroke-dashoffset: -","px;\n}\n43.75% {\n  stroke-dasharray: ","px, ","px;\n  stroke-dashoffset: -","px;\n}\n100% {\n  stroke-dasharray: ","px, ","px;\n  stroke-dashoffset: -","px;\n}\n"])),33.98873199462888,v,26.70543228149412,84.97182998657219,v,84.97182998657219,2.42776657104492,v,240.34889053344708),g=(f.ZP.path(i||(i=(0,p.Z)(["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"])),2.42776657104492,v,b,1.6),(0,f.F4)(a||(a=(0,p.Z)(["\nto {\n   transform: rotate(360deg);\n }\n"])))),y=(f.ZP.svg(s||(s=(0,p.Z)(["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: 0.75s;\n"])),g),f.ZP.polyline(l||(l=(0,p.Z)(["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])),(e=>e.width)),(0,f.F4)(c||(c=(0,p.Z)(["\nto {\n   stroke-dashoffset: 136;\n }\n"])))),Z=(f.ZP.polygon(u||(u=(0,p.Z)(["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])),y),f.ZP.svg(d||(d=(0,p.Z)(["\n  transform-origin: 50% 65%;\n"]))),e=>{let{visible:n=!0,width:t="80",height:o="80",wrapperClass:r="",wrapperStyle:i={},ariaLabel:a="hourglass-loading",colors:s=["#306cce","#72a1ed"]}=e;return n?(0,h.jsxs)("svg",{width:t,height:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 350 350",preserveAspectRatio:"xMidYMid",className:r,style:i,"aria-label":a,"data-testid":"hourglass-svg",...m,children:[(0,h.jsx)("animateTransform",{attributeName:"transform",type:"rotate",values:"0; 0; -30; 360; 360",keyTimes:"0; 0.40; 0.55; 0.65; 1",dur:"3s",begin:"0s",calcMode:"linear",repeatCount:"indefinite"}),(0,h.jsxs)("g",{children:[(0,h.jsx)("path",{fill:s[0],stroke:s[0],d:"M324.658,20.572v-2.938C324.658,7.935,316.724,0,307.025,0H40.313c-9.699,0-17.635,7.935-17.635,17.634v2.938     c0,9.699,7.935,17.634,17.635,17.634h6.814c3.5,0,3.223,3.267,3.223,4.937c0,19.588,8.031,42.231,14.186,56.698     c12.344,29.012,40.447,52.813,63.516,69.619c4.211,3.068,3.201,5.916,0.756,7.875c-22.375,17.924-51.793,40.832-64.271,70.16     c-6.059,14.239-13.934,36.4-14.18,55.772c-0.025,1.987,0.771,5.862-3.979,5.862h-6.064c-9.699,0-17.635,7.936-17.635,17.634v2.94     c0,9.698,7.935,17.634,17.635,17.634h266.713c9.699,0,17.633-7.936,17.633-17.634v-2.94c0-9.698-7.934-17.634-17.633-17.634     h-3.816c-7,0-6.326-5.241-6.254-7.958c0.488-18.094-4.832-38.673-12.617-54.135c-17.318-34.389-44.629-56.261-61.449-68.915     c-3.65-2.745-4.018-6.143,0-8.906c17.342-11.929,44.131-34.526,61.449-68.916c8.289-16.464,13.785-38.732,12.447-57.621     c-0.105-1.514-0.211-4.472,3.758-4.472h6.482C316.725,38.206,324.658,30.272,324.658,20.572z M270.271,93.216     c-16.113,31.998-41.967,54.881-64.455,68.67c-1.354,0.831-3.936,2.881-3.936,8.602v6.838c0,6.066,2.752,7.397,4.199,8.286     c22.486,13.806,48.143,36.636,64.191,68.508c7.414,14.727,11.266,32.532,10.885,46.702c-0.078,2.947,1.053,8.308-6.613,8.308     H72.627c-6.75,0-6.475-3.37-6.459-5.213c0.117-12.895,4.563-30.757,12.859-50.255c14.404-33.854,44.629-54.988,64.75-67.577     c0.896-0.561,2.629-1.567,2.629-6.922v-10.236c0-5.534-2.656-7.688-4.057-8.57c-20.098-12.688-49.256-33.618-63.322-66.681     c-8.383-19.702-12.834-37.732-12.861-50.657c-0.002-1.694,0.211-4.812,3.961-4.812h206.582c4.168,0,4.127,3.15,4.264,4.829     C282.156,57.681,278.307,77.257,270.271,93.216z"}),(0,h.jsxs)("g",{children:[(0,h.jsx)("path",{fill:s[1],stroke:s[1],d:"M169.541,196.2l-68.748,86.03c-2.27,2.842-1.152,5.166,2.484,5.166h140.781c3.637,0,4.756-2.324,2.484-5.166     l-68.746-86.03C175.525,193.358,171.811,193.358,169.541,196.2z"}),(0,h.jsx)("animate",{attributeName:"opacity",values:"0; 0; 1; 1; 0; 0",keyTimes:"0; 0.1; 0.4; 0.6; 0.61; 1",dur:"3s",repeatCount:"indefinite"})]}),(0,h.jsxs)("g",{children:[(0,h.jsx)("path",{fill:s[1],stroke:s[1],d:"M168.986,156.219c2.576,2.568,6.789,2.568,9.363,0l34.576-34.489c2.574-2.568,1.707-4.67-1.932-4.67H136.34     c-3.637,0-4.506,2.102-1.932,4.67L168.986,156.219z"}),(0,h.jsx)("animate",{attributeName:"opacity",values:"1; 1; 0; 0; 1; 1",keyTimes:"0; 0.1; 0.4; 0.65; 0.66; 1",dur:"3s",repeatCount:"indefinite"})]})]})]}):null})},3848:(e,n,t)=>{t.d(n,{WUS:()=>r});var o=t(2119);function r(e){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12a9 9 0 1 1-6.219-8.56"},child:[]}]})(e)}},9128:(e,n,t)=>{t.d(n,{S1K:()=>r});var o=t(2119);function r(e){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"},child:[]}]})(e)}}}]);
//# sourceMappingURL=561.a74511c3.chunk.js.map