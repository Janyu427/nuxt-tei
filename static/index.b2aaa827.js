import{_ as Kn}from"./nuxt-link.a0eab205.js";import{B as Me,s as tt,C as Le,D as ze,r as M,f as qn,o as I,c as T,a as x,b as ct,w as zt,g as E,n as ut,F as ot,h as st,d as Jn,t as ft,j as K,q as xt,p as Qn,e as Zn,i as Fe,l as Re}from"./entry.9577e0a0.js";import{_ as te}from"./_plugin-vue_export-helper.c27b6911.js";function xn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function m(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?xn(Object(e),!0).forEach(function(a){P(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):xn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Ft(t){"@babel/helpers - typeof";return Ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ft(t)}function De(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _n(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function je(t,n,e){return n&&_n(t.prototype,n),e&&_n(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function P(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function ln(t,n){return Ye(t)||Ue(t,n)||ne(t,n)||We()}function yt(t){return $e(t)||Be(t)||ne(t)||He()}function $e(t){if(Array.isArray(t))return qt(t)}function Ye(t){if(Array.isArray(t))return t}function Be(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ue(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function ne(t,n){if(t){if(typeof t=="string")return qt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return qt(t,n)}}function qt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function He(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function We(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var An=function(){},cn={},ee={},ae=null,re={mark:An,measure:An};try{typeof window<"u"&&(cn=window),typeof document<"u"&&(ee=document),typeof MutationObserver<"u"&&(ae=MutationObserver),typeof performance<"u"&&(re=performance)}catch{}var Ve=cn.navigator||{},Sn=Ve.userAgent,On=Sn===void 0?"":Sn,V=cn,w=ee,Pn=ae,_t=re;V.document;var U=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",ie=~On.indexOf("MSIE")||~On.indexOf("Trident/"),At,St,Ot,Pt,Nt,$="___FONT_AWESOME___",Jt=16,oe="fa",se="svg-inline--fa",Q="data-fa-i2svg",Qt="data-fa-pseudo-element",Ge="data-fa-pseudo-element-pending",un="data-prefix",mn="data-icon",Nn="fontawesome-i2svg",Xe="async",Ke=["HTML","HEAD","STYLE","SCRIPT"],fe=function(){try{return!0}catch{return!1}}(),k="classic",_="sharp",dn=[k,_];function kt(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[k]}})}var vt=kt((At={},P(At,k,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),P(At,_,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),At)),pt=kt((St={},P(St,k,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),P(St,_,{solid:"fass",regular:"fasr",light:"fasl"}),St)),gt=kt((Ot={},P(Ot,k,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),P(Ot,_,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ot)),qe=kt((Pt={},P(Pt,k,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),P(Pt,_,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Pt)),Je=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,le="fa-layers-text",Qe=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ze=kt((Nt={},P(Nt,k,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),P(Nt,_,{900:"fass",400:"fasr",300:"fasl"}),Nt)),ce=[1,2,3,4,5,6,7,8,9,10],ta=ce.concat([11,12,13,14,15,16,17,18,19,20]),na=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},bt=new Set;Object.keys(pt[k]).map(bt.add.bind(bt));Object.keys(pt[_]).map(bt.add.bind(bt));var ea=[].concat(dn,yt(bt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q.GROUP,q.SWAP_OPACITY,q.PRIMARY,q.SECONDARY]).concat(ce.map(function(t){return"".concat(t,"x")})).concat(ta.map(function(t){return"w-".concat(t)})),mt=V.FontAwesomeConfig||{};function aa(t){var n=w.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function ra(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(w&&typeof w.querySelector=="function"){var ia=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ia.forEach(function(t){var n=ln(t,2),e=n[0],a=n[1],r=ra(aa(e));r!=null&&(mt[a]=r)})}var ue={styleDefault:"solid",familyDefault:"classic",cssPrefix:oe,replacementClass:se,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};mt.familyPrefix&&(mt.cssPrefix=mt.familyPrefix);var rt=m(m({},ue),mt);rt.autoReplaceSvg||(rt.observeMutations=!1);var p={};Object.keys(ue).forEach(function(t){Object.defineProperty(p,t,{enumerable:!0,set:function(e){rt[t]=e,dt.forEach(function(a){return a(p)})},get:function(){return rt[t]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(n){rt.cssPrefix=n,dt.forEach(function(e){return e(p)})},get:function(){return rt.cssPrefix}});V.FontAwesomeConfig=p;var dt=[];function oa(t){return dt.push(t),function(){dt.splice(dt.indexOf(t),1)}}var W=Jt,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function sa(t){if(!(!t||!U)){var n=w.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=w.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return w.head.insertBefore(n,a),t}}var fa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ht(){for(var t=12,n="";t-- >0;)n+=fa[Math.random()*62|0];return n}function it(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function vn(t){return t.classList?it(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function me(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function la(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(me(t[e]),'" ')},"").trim()}function $t(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function pn(t){return t.size!==D.size||t.x!==D.x||t.y!==D.y||t.rotate!==D.rotate||t.flipX||t.flipY}function ca(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function ua(t){var n=t.transform,e=t.width,a=e===void 0?Jt:e,r=t.height,i=r===void 0?Jt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&ie?f+="translate(".concat(n.x/W-a/2,"em, ").concat(n.y/W-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/W,"em), calc(-50% + ").concat(n.y/W,"em)) "):f+="translate(".concat(n.x/W,"em, ").concat(n.y/W,"em) "),f+="scale(".concat(n.size/W*(n.flipX?-1:1),", ").concat(n.size/W*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var ma=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function de(){var t=oe,n=se,e=p.cssPrefix,a=p.replacementClass,r=ma;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var In=!1;function Wt(){p.autoAddCss&&!In&&(sa(de()),In=!0)}var da={mixout:function(){return{dom:{css:de,insertCss:Wt}}},hooks:function(){return{beforeDOMElementCreation:function(){Wt()},beforeI2svg:function(){Wt()}}}},Y=V||{};Y[$]||(Y[$]={});Y[$].styles||(Y[$].styles={});Y[$].hooks||(Y[$].hooks={});Y[$].shims||(Y[$].shims=[]);var R=Y[$],ve=[],va=function t(){w.removeEventListener("DOMContentLoaded",t),Rt=1,ve.map(function(n){return n()})},Rt=!1;U&&(Rt=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),Rt||w.addEventListener("DOMContentLoaded",va));function pa(t){U&&(Rt?setTimeout(t,0):ve.push(t))}function wt(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?me(t):"<".concat(n," ").concat(la(a),">").concat(i.map(wt).join(""),"</").concat(n,">")}function En(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var ga=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},Vt=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?ga(e,r):e,f,c,l;for(a===void 0?(f=1,l=n[i[0]]):(f=0,l=a);f<o;f++)c=i[f],l=s(l,n[c],c,n);return l};function ba(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function Zt(t){var n=ba(t);return n.length===1?n[0].toString(16):null}function ha(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Cn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function tn(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=Cn(n);typeof R.hooks.addPack=="function"&&!r?R.hooks.addPack(t,Cn(n)):R.styles[t]=m(m({},R.styles[t]||{}),i),t==="fas"&&tn("fa",n)}var It,Et,Ct,nt=R.styles,ya=R.shims,ka=(It={},P(It,k,Object.values(gt[k])),P(It,_,Object.values(gt[_])),It),gn=null,pe={},ge={},be={},he={},ye={},wa=(Et={},P(Et,k,Object.keys(vt[k])),P(Et,_,Object.keys(vt[_])),Et);function xa(t){return~ea.indexOf(t)}function _a(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!xa(r)?r:null}var ke=function(){var n=function(i){return Vt(nt,function(o,s,f){return o[f]=Vt(s,i,{}),o},{})};pe=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),ge=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),ye=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in nt||p.autoFetchSvg,a=Vt(ya,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});be=a.names,he=a.unicodes,gn=Yt(p.styleDefault,{family:p.familyDefault})};oa(function(t){gn=Yt(t.styleDefault,{family:p.familyDefault})});ke();function bn(t,n){return(pe[t]||{})[n]}function Aa(t,n){return(ge[t]||{})[n]}function J(t,n){return(ye[t]||{})[n]}function we(t){return be[t]||{prefix:null,iconName:null}}function Sa(t){var n=he[t],e=bn("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function G(){return gn}var hn=function(){return{prefix:null,iconName:null,rest:[]}};function Yt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?k:e,r=vt[a][t],i=pt[a][t]||pt[a][r],o=t in R.styles?t:null;return i||o||null}var Tn=(Ct={},P(Ct,k,Object.keys(gt[k])),P(Ct,_,Object.keys(gt[_])),Ct);function Bt(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},P(n,k,"".concat(p.cssPrefix,"-").concat(k)),P(n,_,"".concat(p.cssPrefix,"-").concat(_)),n),o=null,s=k;(t.includes(i[k])||t.some(function(c){return Tn[k].includes(c)}))&&(s=k),(t.includes(i[_])||t.some(function(c){return Tn[_].includes(c)}))&&(s=_);var f=t.reduce(function(c,l){var u=_a(p.cssPrefix,l);if(nt[l]?(l=ka[s].includes(l)?qe[s][l]:l,o=l,c.prefix=l):wa[s].indexOf(l)>-1?(o=l,c.prefix=Yt(l,{family:s})):u?c.iconName=u:l!==p.replacementClass&&l!==i[k]&&l!==i[_]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var b=o==="fa"?we(c.iconName):{},g=J(c.prefix,c.iconName);b.prefix&&(o=null),c.iconName=b.iconName||g||c.iconName,c.prefix=b.prefix||c.prefix,c.prefix==="far"&&!nt.far&&nt.fas&&!p.autoFetchSvg&&(c.prefix="fas")}return c},hn());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===_&&(nt.fass||p.autoFetchSvg)&&(f.prefix="fass",f.iconName=J(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=G()||"fas"),f}var Oa=function(){function t(){De(this,t),this.definitions={}}return je(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=m(m({},e.definitions[s]||{}),o[s]),tn(s,o[s]);var f=gt[k][s];f&&tn(f,o[s]),ke()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];e[s]||(e[s]={}),l.length>0&&l.forEach(function(u){typeof u=="string"&&(e[s][u]=c)}),e[s][f]=c}),e}}]),t}(),Mn=[],et={},at={},Pa=Object.keys(at);function Na(t,n){var e=n.mixoutsTo;return Mn=t,et={},Object.keys(at).forEach(function(a){Pa.indexOf(a)===-1&&delete at[a]}),Mn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),Ft(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){et[o]||(et[o]=[]),et[o].push(i[o])})}a.provides&&a.provides(at)}),e}function nn(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=et[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function Z(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=et[t]||[];r.forEach(function(i){i.apply(null,e)})}function B(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return at[t]?at[t].apply(null,n):void 0}function en(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||G();if(n)return n=J(e,n)||n,En(xe.definitions,e,n)||En(R.styles,e,n)}var xe=new Oa,Ia=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,Z("noAuto")},Ea={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U?(Z("beforeI2svg",n),B("pseudoElements2svg",n),B("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,pa(function(){Ta({autoReplaceSvgRoot:e}),Z("watch",n)})}},Ca={icon:function(n){if(n===null)return null;if(Ft(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:J(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Yt(n[0]);return{prefix:a,iconName:J(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(p.cssPrefix,"-"))>-1||n.match(Je))){var r=Bt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||G(),iconName:J(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=G();return{prefix:i,iconName:J(i,n)||n}}}},z={noAuto:Ia,config:p,dom:Ea,parse:Ca,library:xe,findIconDefinition:en,toHtml:wt},Ta=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?w:e;(Object.keys(R.styles).length>0||p.autoFetchSvg)&&U&&p.autoReplaceSvg&&z.dom.i2svg({node:a})};function Ut(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return wt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(U){var a=w.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Ma(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(pn(o)&&e.found&&!a.found){var s=e.width,f=e.height,c={x:s/f/2,y:.5};r.style=$t(m(m({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function La(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(p.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function yn(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,u=t.extra,b=t.watchable,g=b===void 0?!1:b,A=a.found?a:e,O=A.width,N=A.height,d=r==="fak",v=[p.replacementClass,i?"".concat(p.cssPrefix,"-").concat(i):""].filter(function(H){return u.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(u.classes).join(" "),h={children:[],attributes:m(m({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:v,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(N)})},y=d&&!~u.classes.indexOf("fa-fw")?{width:"".concat(O/N*16*.0625,"em")}:{};g&&(h.attributes[Q]=""),f&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(l||ht())},children:[f]}),delete h.attributes.title);var S=m(m({},h),{},{prefix:r,iconName:i,main:e,mask:a,maskId:c,transform:o,symbol:s,styles:m(m({},y),u.styles)}),F=a.found&&e.found?B("generateAbstractMask",S)||{children:[],attributes:{}}:B("generateAbstractIcon",S)||{children:[],attributes:{}},L=F.children,Ht=F.attributes;return S.children=L,S.attributes=Ht,s?La(S):Ma(S)}function Ln(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,c=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[Q]="");var l=m({},o.styles);pn(r)&&(l.transform=ua({transform:r,startCentered:!0,width:e,height:a}),l["-webkit-transform"]=l.transform);var u=$t(l);u.length>0&&(c.style=u);var b=[];return b.push({tag:"span",attributes:c,children:[n]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function za(t){var n=t.content,e=t.title,a=t.extra,r=m(m(m({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=$t(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Gt=R.styles;function an(t){var n=t[0],e=t[1],a=t.slice(4),r=ln(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(q.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(q.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var Fa={found:!1,width:512,height:512};function Ra(t,n){!fe&&!p.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function rn(t,n){var e=n;return n==="fa"&&p.styleDefault!==null&&(n=G()),new Promise(function(a,r){if(B("missingIconAbstract"),e==="fa"){var i=we(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Gt[n]&&Gt[n][t]){var o=Gt[n][t];return a(an(o))}Ra(t,n),a(m(m({},Fa),{},{icon:p.showMissingIcons&&t?B("missingIconAbstract")||{}:{}}))})}var zn=function(){},on=p.measurePerformance&&_t&&_t.mark&&_t.measure?_t:{mark:zn,measure:zn},lt='FA "6.4.2"',Da=function(n){return on.mark("".concat(lt," ").concat(n," begins")),function(){return _e(n)}},_e=function(n){on.mark("".concat(lt," ").concat(n," ends")),on.measure("".concat(lt," ").concat(n),"".concat(lt," ").concat(n," begins"),"".concat(lt," ").concat(n," ends"))},kn={begin:Da,end:_e},Mt=function(){};function Fn(t){var n=t.getAttribute?t.getAttribute(Q):null;return typeof n=="string"}function ja(t){var n=t.getAttribute?t.getAttribute(un):null,e=t.getAttribute?t.getAttribute(mn):null;return n&&e}function $a(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(p.replacementClass)}function Ya(){if(p.autoReplaceSvg===!0)return Lt.replace;var t=Lt[p.autoReplaceSvg];return t||Lt.replace}function Ba(t){return w.createElementNS("http://www.w3.org/2000/svg",t)}function Ua(t){return w.createElement(t)}function Ae(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?Ba:Ua:e;if(typeof t=="string")return w.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Ae(o,{ceFn:a}))}),r}function Ha(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Lt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(Ae(r),e)}),e.getAttribute(Q)===null&&p.keepOriginalSource){var a=w.createComment(Ha(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~vn(e).indexOf(p.replacementClass))return Lt.replace(n);var r=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===p.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return wt(s)}).join(`
`);e.setAttribute(Q,""),e.innerHTML=o}};function Rn(t){t()}function Se(t,n){var e=typeof n=="function"?n:Mt;if(t.length===0)e();else{var a=Rn;p.mutateApproach===Xe&&(a=V.requestAnimationFrame||Rn),a(function(){var r=Ya(),i=kn.begin("mutate");t.map(r),i(),e()})}}var wn=!1;function Oe(){wn=!0}function sn(){wn=!1}var Dt=null;function Dn(t){if(Pn&&p.observeMutations){var n=t.treeCallback,e=n===void 0?Mt:n,a=t.nodeCallback,r=a===void 0?Mt:a,i=t.pseudoElementsCallback,o=i===void 0?Mt:i,s=t.observeMutationsRoot,f=s===void 0?w:s;Dt=new Pn(function(c){if(!wn){var l=G();it(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Fn(u.addedNodes[0])&&(p.searchPseudoElements&&o(u.target),e(u.target)),u.type==="attributes"&&u.target.parentNode&&p.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&Fn(u.target)&&~na.indexOf(u.attributeName))if(u.attributeName==="class"&&ja(u.target)){var b=Bt(vn(u.target)),g=b.prefix,A=b.iconName;u.target.setAttribute(un,g||l),A&&u.target.setAttribute(mn,A)}else $a(u.target)&&r(u.target)})}}),U&&Dt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Wa(){Dt&&Dt.disconnect()}function Va(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function Ga(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Bt(vn(t));return r.prefix||(r.prefix=G()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Aa(r.prefix,t.innerText)||bn(r.prefix,Zt(t.innerText))),!r.iconName&&p.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Xa(t){var n=it(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return p.autoA11y&&(e?n["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(a||ht()):(n["aria-hidden"]="true",n.focusable="false")),n}function Ka(){return{iconName:null,title:null,titleId:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Ga(t),a=e.iconName,r=e.prefix,i=e.rest,o=Xa(t),s=nn("parseNodeAttributes",{},t),f=n.styleParser?Va(t):[];return m({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var qa=R.styles;function Pe(t){var n=p.autoReplaceSvg==="nest"?jn(t,{styleParser:!1}):jn(t);return~n.extra.classes.indexOf(le)?B("generateLayersText",t,n):B("generateSvgReplacementMutation",t,n)}var X=new Set;dn.map(function(t){X.add("fa-".concat(t))});Object.keys(vt[k]).map(X.add.bind(X));Object.keys(vt[_]).map(X.add.bind(X));X=yt(X);function $n(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U)return Promise.resolve();var e=w.documentElement.classList,a=function(u){return e.add("".concat(Nn,"-").concat(u))},r=function(u){return e.remove("".concat(Nn,"-").concat(u))},i=p.autoFetchSvg?X:dn.map(function(l){return"fa-".concat(l)}).concat(Object.keys(qa));i.includes("fa")||i.push("fa");var o=[".".concat(le,":not([").concat(Q,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(Q,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=it(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=kn.begin("onTree"),c=s.reduce(function(l,u){try{var b=Pe(u);b&&l.push(b)}catch(g){fe||g.name==="MissingIcon"&&console.error(g)}return l},[]);return new Promise(function(l,u){Promise.all(c).then(function(b){Se(b,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),l()})}).catch(function(b){f(),u(b)})})}function Ja(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Pe(t).then(function(e){e&&Se([e],n)})}function Qa(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:en(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:en(r||{})),t(a,m(m({},e),{},{mask:r}))}}var Za=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?D:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,c=e.maskId,l=c===void 0?null:c,u=e.title,b=u===void 0?null:u,g=e.titleId,A=g===void 0?null:g,O=e.classes,N=O===void 0?[]:O,d=e.attributes,v=d===void 0?{}:d,h=e.styles,y=h===void 0?{}:h;if(n){var S=n.prefix,F=n.iconName,L=n.icon;return Ut(m({type:"icon"},n),function(){return Z("beforeDOMElementCreation",{iconDefinition:n,params:e}),p.autoA11y&&(b?v["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(A||ht()):(v["aria-hidden"]="true",v.focusable="false")),yn({icons:{main:an(L),mask:f?an(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:F,transform:m(m({},D),r),symbol:o,title:b,maskId:l,titleId:A,extra:{attributes:v,styles:y,classes:N}})})}},tr={mixout:function(){return{icon:Qa(Za)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=$n,e.nodeCallback=Ja,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?w:a,i=e.callback,o=i===void 0?function(){}:i;return $n(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,c=a.symbol,l=a.mask,u=a.maskId,b=a.extra;return new Promise(function(g,A){Promise.all([rn(r,s),l.iconName?rn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var N=ln(O,2),d=N[0],v=N[1];g([e,yn({icons:{main:d,mask:v},prefix:s,iconName:r,transform:f,symbol:c,maskId:u,title:i,titleId:o,extra:b,watchable:!0})])}).catch(A)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=$t(s);f.length>0&&(r.style=f);var c;return pn(o)&&(c=B("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},nr={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Ut({type:"layer"},function(){Z("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(yt(i)).join(" ")},children:o}]})}}}},er={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,c=f===void 0?{}:f,l=a.styles,u=l===void 0?{}:l;return Ut({type:"counter",content:e},function(){return Z("beforeDOMElementCreation",{content:e,params:a}),za({content:e.toString(),title:i,extra:{attributes:c,styles:u,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(yt(s))}})})}}}},ar={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?D:r,o=a.title,s=o===void 0?null:o,f=a.classes,c=f===void 0?[]:f,l=a.attributes,u=l===void 0?{}:l,b=a.styles,g=b===void 0?{}:b;return Ut({type:"text",content:e},function(){return Z("beforeDOMElementCreation",{content:e,params:a}),Ln({content:e,transform:m(m({},D),i),title:s,extra:{attributes:u,styles:g,classes:["".concat(p.cssPrefix,"-layers-text")].concat(yt(c))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(ie){var c=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/c,f=l.height/c}return p.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Ln({content:e.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},rr=new RegExp('"',"ug"),Yn=[1105920,1112319];function ir(t){var n=t.replace(rr,""),e=ha(n,0),a=e>=Yn[0]&&e<=Yn[1],r=n.length===2?n[0]===n[1]:!1;return{value:Zt(r?n[0]:n),isSecondary:a||r}}function Bn(t,n){var e="".concat(Ge).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=it(t.children),o=i.filter(function(L){return L.getAttribute(Qt)===n})[0],s=V.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(Qe),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&l!=="none"&&l!==""){var u=s.getPropertyValue("content"),b=~["Sharp"].indexOf(f[2])?_:k,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?pt[b][f[2].toLowerCase()]:Ze[b][c],A=ir(u),O=A.value,N=A.isSecondary,d=f[0].startsWith("FontAwesome"),v=bn(g,O),h=v;if(d){var y=Sa(O);y.iconName&&y.prefix&&(v=y.iconName,g=y.prefix)}if(v&&!N&&(!o||o.getAttribute(un)!==g||o.getAttribute(mn)!==h)){t.setAttribute(e,h),o&&t.removeChild(o);var S=Ka(),F=S.extra;F.attributes[Qt]=n,rn(v,g).then(function(L){var Ht=yn(m(m({},S),{},{icons:{main:L,mask:hn()},prefix:g,iconName:h,extra:F,watchable:!0})),H=w.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(H,t.firstChild):t.appendChild(H),H.outerHTML=Ht.map(function(Te){return wt(Te)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function or(t){return Promise.all([Bn(t,"::before"),Bn(t,"::after")])}function sr(t){return t.parentNode!==document.head&&!~Ke.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Qt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Un(t){if(U)return new Promise(function(n,e){var a=it(t.querySelectorAll("*")).filter(sr).map(or),r=kn.begin("searchPseudoElements");Oe(),Promise.all(a).then(function(){r(),sn(),n()}).catch(function(){r(),sn(),e()})})}var fr={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Un,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?w:a;p.searchPseudoElements&&Un(r)}}},Hn=!1,lr={mixout:function(){return{dom:{unwatch:function(){Oe(),Hn=!0}}}},hooks:function(){return{bootstrap:function(){Dn(nn("mutationObserverCallbacks",{}))},noAuto:function(){Wa()},watch:function(e){var a=e.observeMutationsRoot;Hn?sn():Dn(nn("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Wn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},cr={mixout:function(){return{parse:{transform:function(e){return Wn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=Wn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(f," ").concat(c," ").concat(l)},b={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:u,path:b};return{tag:"g",attributes:m({},g.outer),children:[{tag:"g",attributes:m({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),g.path)}]}]}}}},Xt={x:0,y:0,width:"100%",height:"100%"};function Vn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function ur(t){return t.tag==="g"?t.children:[t]}var mr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Bt(r.split(" ").map(function(o){return o.trim()})):hn();return i.prefix||(i.prefix=G()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,c=i.width,l=i.icon,u=o.width,b=o.icon,g=ca({transform:f,containerWidth:u,iconWidth:c}),A={tag:"rect",attributes:m(m({},Xt),{},{fill:"white"})},O=l.children?{children:l.children.map(Vn)}:{},N={tag:"g",attributes:m({},g.inner),children:[Vn(m({tag:l.tag,attributes:m(m({},l.attributes),g.path)},O))]},d={tag:"g",attributes:m({},g.outer),children:[N]},v="mask-".concat(s||ht()),h="clip-".concat(s||ht()),y={tag:"mask",attributes:m(m({},Xt),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,d]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:ur(b)},y]};return a.push(S,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(v,")")},Xt)}),{children:a,attributes:r}}}},dr={provides:function(n){var e=!1;V.matchMedia&&(e=V.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},vr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},pr=[da,tr,nr,er,ar,fr,lr,cr,mr,dr,vr];Na(pr,{mixoutsTo:z});z.noAuto;z.config;var gr=z.library;z.dom;var fn=z.parse;z.findIconDefinition;z.toHtml;var br=z.icon;z.layer;z.text;z.counter;function Gn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function j(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Gn(Object(e),!0).forEach(function(a){C(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Gn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function jt(t){"@babel/helpers - typeof";return jt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},jt(t)}function C(t,n,e){return n=wr(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function hr(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function yr(t,n){if(t==null)return{};var e=hr(t,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(e[a]=t[a])}return e}function kr(t,n){if(typeof t!="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var a=e.call(t,n||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function wr(t){var n=kr(t,"string");return typeof n=="symbol"?n:String(n)}var xr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ne={exports:{}};(function(t){(function(n){var e=function(d,v,h){if(!c(v)||u(v)||b(v)||g(v)||f(v))return v;var y,S=0,F=0;if(l(v))for(y=[],F=v.length;S<F;S++)y.push(e(d,v[S],h));else{y={};for(var L in v)Object.prototype.hasOwnProperty.call(v,L)&&(y[d(L,h)]=e(d,v[L],h))}return y},a=function(d,v){v=v||{};var h=v.separator||"_",y=v.split||/(?=[A-Z])/;return d.split(y).join(h)},r=function(d){return A(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(v,h){return h?h.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},i=function(d){var v=r(d);return v.substr(0,1).toUpperCase()+v.substr(1)},o=function(d,v){return a(d,v).toLowerCase()},s=Object.prototype.toString,f=function(d){return typeof d=="function"},c=function(d){return d===Object(d)},l=function(d){return s.call(d)=="[object Array]"},u=function(d){return s.call(d)=="[object Date]"},b=function(d){return s.call(d)=="[object RegExp]"},g=function(d){return s.call(d)=="[object Boolean]"},A=function(d){return d=d-0,d===d},O=function(d,v){var h=v&&"process"in v?v.process:v;return typeof h!="function"?d:function(y,S){return h(y,d,S)}},N={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(d,v){return e(O(r,v),d)},decamelizeKeys:function(d,v){return e(O(o,v),d,v)},pascalizeKeys:function(d,v){return e(O(i,v),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=N:n.humps=N})(xr)})(Ne);var _r=Ne.exports,Ar=["class","style"];function Sr(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=_r.camelize(e.slice(0,a)),i=e.slice(a+1).trim();return n[r]=i,n},{})}function Or(t){return t.split(/\s+/).reduce(function(n,e){return n[e]=!0,n},{})}function Ie(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return Ie(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,c){var l=t.attributes[c];switch(c){case"class":f.class=Or(l);break;case"style":f.style=Sr(l);break;default:f.attrs[c]=l}return f},{attrs:{},class:{},style:{}});e.class;var i=e.style,o=i===void 0?{}:i,s=yr(e,Ar);return ze(t.tag,j(j(j({},n),{},{class:r.class,style:j(j({},r.style),o)},r.attrs),s),a)}var Ee=!1;try{Ee=!0}catch{}function Pr(){if(!Ee&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Kt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?C({},t,n):{}}function Nr(t){var n,e=(n={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},C(n,"fa-".concat(t.size),t.size!==null),C(n,"fa-rotate-".concat(t.rotation),t.rotation!==null),C(n,"fa-pull-".concat(t.pull),t.pull!==null),C(n,"fa-swap-opacity",t.swapOpacity),C(n,"fa-bounce",t.bounce),C(n,"fa-shake",t.shake),C(n,"fa-beat",t.beat),C(n,"fa-fade",t.fade),C(n,"fa-beat-fade",t.beatFade),C(n,"fa-flash",t.flash),C(n,"fa-spin-pulse",t.spinPulse),C(n,"fa-spin-reverse",t.spinReverse),n);return Object.keys(e).map(function(a){return e[a]?a:null}).filter(function(a){return a})}function Xn(t){if(t&&jt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(fn.icon)return fn.icon(t);if(t===null)return null;if(jt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Tt=Me({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(n){return[!0,!1,"horizontal","vertical","both"].indexOf(n)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(n){return["right","left"].indexOf(n)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(n){return[90,180,270].indexOf(Number.parseInt(n,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(n){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(n)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(n,e){var a=e.attrs,r=tt(function(){return Xn(n.icon)}),i=tt(function(){return Kt("classes",Nr(n))}),o=tt(function(){return Kt("transform",typeof n.transform=="string"?fn.transform(n.transform):n.transform)}),s=tt(function(){return Kt("mask",Xn(n.mask))}),f=tt(function(){return br(r.value,j(j(j(j({},i.value),o.value),s.value),{},{symbol:n.symbol,title:n.title,titleId:n.titleId,maskId:n.maskId}))});Le(f,function(l){if(!l)return Pr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=tt(function(){return f.value?Ie(f.value.abstract[0],{},a):null});return function(){return c.value}}}),Ir={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"]},Er={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Cr={prefix:"fab",iconName:"line",icon:[512,512,[],"f3c0","M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z"]},Tr={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};const Ce=t=>(Qn("data-v-1ef57771"),t=t(),Zn(),t),Mr=Ce(()=>x("div",{class:"item"},null,-1)),Lr=Ce(()=>x("div",{class:"item"},null,-1)),zr=[Mr,Lr],Fr={class:"inner_box container"},Rr=["src","alt"],Dr={class:"mobile_nav_list"},jr={class:"info_box"},$r={class:"top_box"},Yr=["href","title"],Br={class:"bottom_box"},Ur={key:0,class:"list"},Hr={class:"title"},Wr=["href","title"],Vr={class:"social_media"},Gr=["href","title"],Xr={__name:"mobileNav",props:["isShow"],emits:["updateState"],setup(t,{emit:n}){gr.add(Ir,Er,Tr,Cr);const e=n,a=M(""),r=M(""),i=M([]),o=M([]),s=M([]),f=async()=>{try{const l=await fetch("https://janyu427.github.io/test/vueJson/companyInfo.json");if(!l.ok)throw new Error("Network response was not ok");const u=await l.json(),b=u.logo.logoNormal,g=u.logo.alt,A=u.navList,O=u.socialMediaInfo,N=u.basicInfo;a.value=b,r.value=g,i.value=A,o.value=O,s.value=N}catch(l){console.error("Error fetching or parsing data:",l)}},c=()=>{e("updateState",!1)};return qn(()=>{f()}),(l,u)=>{const b=Kn;return t.isShow?(I(),T("div",{key:0,class:ut(["mobile_nav",{show:t.isShow}]),id:"mobileNav"},[x("div",{class:"cross",onClick:c},zr),x("div",Fr,[ct(b,{class:ut(["logo_box",{show:t.isShow}]),id:"mobileNavLogo",to:"/",title:"Janyu",target:"_self"},{default:zt(()=>[x("img",{class:"image",src:E(a),alt:E(r),width:"270",height:"60"},null,8,Rr)]),_:1},8,["class"]),x("ul",Dr,[(I(!0),T(ot,null,st(E(i),g=>(I(),T("li",{class:ut(["mobile_list",{show:t.isShow}])},[ct(b,{class:"link",to:g.link,onClick:c},{default:zt(()=>[Jn(ft(g.title),1)]),_:2},1032,["to"])],2))),256))]),x("div",jr,[x("div",$r,[(I(!0),T(ot,null,st(E(s),g=>(I(),T("div",{key:g.key},[g.key=="address"?(I(),T("a",{key:0,class:"link",href:g.link,target:"_blank",title:g.titleTag},ft(g.text),9,Yr)):K("",!0)]))),128))]),x("div",Br,[(I(!0),T(ot,null,st(E(s),g=>(I(),T("div",{key:g.key},[g.key!=="address"?(I(),T("div",Ur,[x("span",Hr,ft(g.title),1),x("a",{class:"link",href:g.link,target:"_blank",title:g.titleTag},ft(g.text),9,Wr)])):K("",!0)]))),128))])]),x("div",Vr,[(I(!0),T(ot,null,st(E(o),g=>(I(),T("a",{class:"link",key:g.key,href:g.link,title:g.titleTag,target:"_blank"},[g.key==="fb"?(I(),xt(E(Tt),{key:0,icon:"fa-brands fa-facebook-f"})):K("",!0),g.key==="youtube"?(I(),xt(E(Tt),{key:1,icon:"fa-brands fa-youtube"})):K("",!0),g.key==="ig"?(I(),xt(E(Tt),{key:2,icon:"fa-brands fa-instagram"})):K("",!0),g.key==="line"?(I(),xt(E(Tt),{key:3,icon:"fa-brands fa-line"})):K("",!0)],8,Gr))),128))])])],2)):K("",!0)}}},Kr=te(Xr,[["__scopeId","data-v-1ef57771"]]);const qr=t=>(Qn("data-v-e4d7625a"),t=t(),Zn(),t),Jr={class:"header"},Qr={class:"container_wide"},Zr=qr(()=>x("div",{class:"item_box"},[x("div",{class:"item"}),x("div",{class:"item"}),x("div",{class:"item"})],-1)),ti=[Zr],ni=["src","alt"],ei={id:"nav"},ai={class:"list"},ri={__name:"index",props:["isScrollGreaterThanBannerHeight"],emits:["headerNavHeight"],setup(t,{emit:n}){const a=Fe().path,r=M(!1),i=M(null);M(!1);const o=n,s=()=>{const d=i.value.clientHeight;o("headerNavHeight",d)},f=()=>{a!=="/"&&(r.value=!r.value)},c=M(""),l=M(""),u=M([]),b=M(!1),g=M([]),A=M([]),O=async()=>{try{const d=await fetch("https://janyu427.github.io/test/vueJson/companyInfo.json");if(!d.ok)throw new Error("Network response was not ok");const v=await d.json(),h=v.logo.logoNormal,y=v.logo.alt,S=v.navList,F=v.socialMediaInfo,L=v.basicInfo;c.value=h,l.value=y,u.value=S,g.value=F,A.value=L}catch(d){console.error("Error fetching or parsing data:",d)}},N=()=>{b.value=!b.value};return qn(()=>{O(),f()}),Re(()=>{s()}),(d,v)=>{const h=Kn;return I(),T("header",null,[x("div",{class:ut(["header-nav",{fixed:E(r)||t.isScrollGreaterThanBannerHeight}]),ref_key:"headerNav",ref:i},[x("div",Jr,[x("div",Qr,[x("div",{class:"burger",onClick:N},ti),ct(h,{class:"logo",title:"程翊室內裝修",to:"/"},{default:zt(()=>[x("img",{class:"image",id:"navLogo",src:E(c),width:"226",height:"50",alt:E(l)},null,8,ni)]),_:1}),x("ul",ei,[(I(!0),T(ot,null,st(E(u),y=>(I(),T("li",ai,[ct(h,{class:ut(["link",{active:E(a)===y.link}]),to:y.link,title:y.title},{default:zt(()=>[Jn(ft(y.title),1)]),_:2},1032,["class","to","title"])]))),256))])])])],2),ct(Kr,{isShow:E(b),onUpdateState:v[0]||(v[0]=y=>b.value=y)},null,8,["isShow"])])}}},fi=te(ri,[["__scopeId","data-v-e4d7625a"]]);export{Tt as F,Kr as M,fi as _,Er as a,Tr as b,Cr as c,Ir as f,gr as l};
