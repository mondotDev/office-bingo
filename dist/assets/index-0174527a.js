(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function yg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vg={exports:{}},ml={},wg={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xs=Symbol.for("react.element"),Bw=Symbol.for("react.portal"),jw=Symbol.for("react.fragment"),bw=Symbol.for("react.strict_mode"),Hw=Symbol.for("react.profiler"),Ww=Symbol.for("react.provider"),Kw=Symbol.for("react.context"),qw=Symbol.for("react.forward_ref"),Gw=Symbol.for("react.suspense"),Qw=Symbol.for("react.memo"),Yw=Symbol.for("react.lazy"),Vf=Symbol.iterator;function Xw(t){return t===null||typeof t!="object"?null:(t=Vf&&t[Vf]||t["@@iterator"],typeof t=="function"?t:null)}var Eg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sg=Object.assign,_g={};function Ii(t,e,n){this.props=t,this.context=e,this.refs=_g,this.updater=n||Eg}Ii.prototype.isReactComponent={};Ii.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ii.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ig(){}Ig.prototype=Ii.prototype;function Rh(t,e,n){this.props=t,this.context=e,this.refs=_g,this.updater=n||Eg}var Dh=Rh.prototype=new Ig;Dh.constructor=Rh;Sg(Dh,Ii.prototype);Dh.isPureReactComponent=!0;var zf=Array.isArray,Tg=Object.prototype.hasOwnProperty,xh={current:null},kg={key:!0,ref:!0,__self:!0,__source:!0};function Cg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Tg.call(e,r)&&!kg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xs,type:t,key:s,ref:o,props:i,_owner:xh.current}}function Jw(t,e){return{$$typeof:Xs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ph(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xs}function Zw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bf=/\/+/g;function hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Zw(""+t.key):e.toString(36)}function ta(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xs:case Bw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+hu(o,0):r,zf(i)?(n="",t!=null&&(n=t.replace(Bf,"$&/")+"/"),ta(i,e,n,"",function(u){return u})):i!=null&&(Ph(i)&&(i=Jw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Bf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",zf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+hu(s,a);o+=ta(s,e,n,l,i)}else if(l=Xw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+hu(s,a++),o+=ta(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ao(t,e,n){if(t==null)return t;var r=[],i=0;return ta(t,r,"","",function(s){return e.call(n,s,i++)}),r}function eE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qe={current:null},na={transition:null},tE={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:na,ReactCurrentOwner:xh};function Ng(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:Ao,forEach:function(t,e,n){Ao(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ao(t,function(){e++}),e},toArray:function(t){return Ao(t,function(e){return e})||[]},only:function(t){if(!Ph(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=Ii;j.Fragment=jw;j.Profiler=Hw;j.PureComponent=Rh;j.StrictMode=bw;j.Suspense=Gw;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tE;j.act=Ng;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Sg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Tg.call(e,l)&&!kg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Xs,type:t.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(t){return t={$$typeof:Kw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ww,_context:t},t.Consumer=t};j.createElement=Cg;j.createFactory=function(t){var e=Cg.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:qw,render:t}};j.isValidElement=Ph;j.lazy=function(t){return{$$typeof:Yw,_payload:{_status:-1,_result:t},_init:eE}};j.memo=function(t,e){return{$$typeof:Qw,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=na.transition;na.transition={};try{t()}finally{na.transition=e}};j.unstable_act=Ng;j.useCallback=function(t,e){return Qe.current.useCallback(t,e)};j.useContext=function(t){return Qe.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return Qe.current.useDeferredValue(t)};j.useEffect=function(t,e){return Qe.current.useEffect(t,e)};j.useId=function(){return Qe.current.useId()};j.useImperativeHandle=function(t,e,n){return Qe.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return Qe.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return Qe.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return Qe.current.useMemo(t,e)};j.useReducer=function(t,e,n){return Qe.current.useReducer(t,e,n)};j.useRef=function(t){return Qe.current.useRef(t)};j.useState=function(t){return Qe.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return Qe.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return Qe.current.useTransition()};j.version="18.3.1";wg.exports=j;var X=wg.exports;const _a=yg(X);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nE=X,rE=Symbol.for("react.element"),iE=Symbol.for("react.fragment"),sE=Object.prototype.hasOwnProperty,oE=nE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aE={key:!0,ref:!0,__self:!0,__source:!0};function Ag(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sE.call(e,r)&&!aE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rE,type:t,key:s,ref:o,props:i,_owner:oE.current}}ml.Fragment=iE;ml.jsx=Ag;ml.jsxs=Ag;vg.exports=ml;var Oh=vg.exports;const lE=Oh.Fragment,pe=Oh.jsx,Mt=Oh.jsxs;var sc={},Rg={exports:{}},ct={},Dg={exports:{}},xg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,V){var z=D.length;D.push(V);e:for(;0<z;){var he=z-1>>>1,Se=D[he];if(0<i(Se,V))D[he]=V,D[z]=Se,z=he;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var V=D[0],z=D.pop();if(z!==V){D[0]=z;e:for(var he=0,Se=D.length,Co=Se>>>1;he<Co;){var Yn=2*(he+1)-1,cu=D[Yn],Xn=Yn+1,No=D[Xn];if(0>i(cu,z))Xn<Se&&0>i(No,cu)?(D[he]=No,D[Xn]=z,he=Xn):(D[he]=cu,D[Yn]=z,he=Yn);else if(Xn<Se&&0>i(No,z))D[he]=No,D[Xn]=z,he=Xn;else break e}}return V}function i(D,V){var z=D.sortIndex-V.sortIndex;return z!==0?z:D.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,g=!1,y=!1,v=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(D){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=D)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function w(D){if(v=!1,m(D),!y)if(n(l)!==null)y=!0,lu(I);else{var V=n(u);V!==null&&uu(w,V.startTime-D)}}function I(D,V){y=!1,v&&(v=!1,p(N),N=-1),g=!0;var z=f;try{for(m(V),h=n(l);h!==null&&(!(h.expirationTime>V)||D&&!Et());){var he=h.callback;if(typeof he=="function"){h.callback=null,f=h.priorityLevel;var Se=he(h.expirationTime<=V);V=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&r(l),m(V)}else r(l);h=n(l)}if(h!==null)var Co=!0;else{var Yn=n(u);Yn!==null&&uu(w,Yn.startTime-V),Co=!1}return Co}finally{h=null,f=z,g=!1}}var C=!1,R=null,N=-1,K=5,B=-1;function Et(){return!(t.unstable_now()-B<K)}function Oi(){if(R!==null){var D=t.unstable_now();B=D;var V=!0;try{V=R(!0,D)}finally{V?Mi():(C=!1,R=null)}}else C=!1}var Mi;if(typeof d=="function")Mi=function(){d(Oi)};else if(typeof MessageChannel<"u"){var Uf=new MessageChannel,zw=Uf.port2;Uf.port1.onmessage=Oi,Mi=function(){zw.postMessage(null)}}else Mi=function(){T(Oi,0)};function lu(D){R=D,C||(C=!0,Mi())}function uu(D,V){N=T(function(){D(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,lu(I))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var z=f;f=V;try{return D()}finally{f=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,V){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=f;f=D;try{return V()}finally{f=z}},t.unstable_scheduleCallback=function(D,V,z){var he=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?he+z:he):z=he,D){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=z+Se,D={id:c++,callback:V,priorityLevel:D,startTime:z,expirationTime:Se,sortIndex:-1},z>he?(D.sortIndex=z,e(u,D),n(l)===null&&D===n(u)&&(v?(p(N),N=-1):v=!0,uu(w,z-he))):(D.sortIndex=Se,e(l,D),y||g||(y=!0,lu(I))),D},t.unstable_shouldYield=Et,t.unstable_wrapCallback=function(D){var V=f;return function(){var z=f;f=V;try{return D.apply(this,arguments)}finally{f=z}}}})(xg);Dg.exports=xg;var uE=Dg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cE=X,lt=uE;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pg=new Set,gs={};function Tr(t,e){si(t,e),si(t+"Capture",e)}function si(t,e){for(gs[t]=e,t=0;t<e.length;t++)Pg.add(e[t])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oc=Object.prototype.hasOwnProperty,hE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jf={},bf={};function dE(t){return oc.call(bf,t)?!0:oc.call(jf,t)?!1:hE.test(t)?bf[t]=!0:(jf[t]=!0,!1)}function fE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pE(t,e,n,r){if(e===null||typeof e>"u"||fE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ye(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pe[t]=new Ye(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pe[e]=new Ye(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pe[t]=new Ye(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pe[t]=new Ye(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pe[t]=new Ye(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pe[t]=new Ye(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pe[t]=new Ye(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pe[t]=new Ye(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pe[t]=new Ye(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mh=/[\-:]([a-z])/g;function Lh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mh,Lh);Pe[e]=new Ye(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mh,Lh);Pe[e]=new Ye(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mh,Lh);Pe[e]=new Ye(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pe[t]=new Ye(t,1,!1,t.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pe[t]=new Ye(t,1,!1,t.toLowerCase(),null,!0,!0)});function $h(t,e,n,r){var i=Pe.hasOwnProperty(e)?Pe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pE(e,n,i,r)&&(n=null),r||i===null?dE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fn=cE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),Mr=Symbol.for("react.portal"),Lr=Symbol.for("react.fragment"),Fh=Symbol.for("react.strict_mode"),ac=Symbol.for("react.profiler"),Og=Symbol.for("react.provider"),Mg=Symbol.for("react.context"),Uh=Symbol.for("react.forward_ref"),lc=Symbol.for("react.suspense"),uc=Symbol.for("react.suspense_list"),Vh=Symbol.for("react.memo"),yn=Symbol.for("react.lazy"),Lg=Symbol.for("react.offscreen"),Hf=Symbol.iterator;function Li(t){return t===null||typeof t!="object"?null:(t=Hf&&t[Hf]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,du;function Wi(t){if(du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);du=e&&e[1]||""}return`
`+du+t}var fu=!1;function pu(t,e){if(!t||fu)return"";fu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{fu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wi(t):""}function mE(t){switch(t.tag){case 5:return Wi(t.type);case 16:return Wi("Lazy");case 13:return Wi("Suspense");case 19:return Wi("SuspenseList");case 0:case 2:case 15:return t=pu(t.type,!1),t;case 11:return t=pu(t.type.render,!1),t;case 1:return t=pu(t.type,!0),t;default:return""}}function cc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Lr:return"Fragment";case Mr:return"Portal";case ac:return"Profiler";case Fh:return"StrictMode";case lc:return"Suspense";case uc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Mg:return(t.displayName||"Context")+".Consumer";case Og:return(t._context.displayName||"Context")+".Provider";case Uh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vh:return e=t.displayName||null,e!==null?e:cc(t.type)||"Memo";case yn:e=t._payload,t=t._init;try{return cc(t(e))}catch{}}return null}function gE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cc(e);case 8:return e===Fh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $g(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yE(t){var e=$g(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Do(t){t._valueTracker||(t._valueTracker=yE(t))}function Fg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$g(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ia(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hc(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=zn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ug(t,e){e=e.checked,e!=null&&$h(t,"checked",e,!1)}function dc(t,e){Ug(t,e);var n=zn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fc(t,e.type,n):e.hasOwnProperty("defaultValue")&&fc(t,e.type,zn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fc(t,e,n){(e!=="number"||Ia(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ki=Array.isArray;function qr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+zn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function pc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Ki(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zn(n)}}function Vg(t,e){var n=zn(e.value),r=zn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xo,Bg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xo=xo||document.createElement("div"),xo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ys(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var es={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vE=["Webkit","ms","Moz","O"];Object.keys(es).forEach(function(t){vE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),es[e]=es[t]})});function jg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||es.hasOwnProperty(t)&&es[t]?(""+e).trim():e+"px"}function bg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var wE=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gc(t,e){if(e){if(wE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function yc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vc=null;function zh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wc=null,Gr=null,Qr=null;function Qf(t){if(t=eo(t)){if(typeof wc!="function")throw Error(S(280));var e=t.stateNode;e&&(e=El(e),wc(t.stateNode,t.type,e))}}function Hg(t){Gr?Qr?Qr.push(t):Qr=[t]:Gr=t}function Wg(){if(Gr){var t=Gr,e=Qr;if(Qr=Gr=null,Qf(t),e)for(t=0;t<e.length;t++)Qf(e[t])}}function Kg(t,e){return t(e)}function qg(){}var mu=!1;function Gg(t,e,n){if(mu)return t(e,n);mu=!0;try{return Kg(t,e,n)}finally{mu=!1,(Gr!==null||Qr!==null)&&(qg(),Wg())}}function vs(t,e){var n=t.stateNode;if(n===null)return null;var r=El(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var Ec=!1;if(rn)try{var $i={};Object.defineProperty($i,"passive",{get:function(){Ec=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{Ec=!1}function EE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ts=!1,Ta=null,ka=!1,Sc=null,SE={onError:function(t){ts=!0,Ta=t}};function _E(t,e,n,r,i,s,o,a,l){ts=!1,Ta=null,EE.apply(SE,arguments)}function IE(t,e,n,r,i,s,o,a,l){if(_E.apply(this,arguments),ts){if(ts){var u=Ta;ts=!1,Ta=null}else throw Error(S(198));ka||(ka=!0,Sc=u)}}function kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yf(t){if(kr(t)!==t)throw Error(S(188))}function TE(t){var e=t.alternate;if(!e){if(e=kr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Yf(i),t;if(s===r)return Yf(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Yg(t){return t=TE(t),t!==null?Xg(t):null}function Xg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xg(t);if(e!==null)return e;t=t.sibling}return null}var Jg=lt.unstable_scheduleCallback,Xf=lt.unstable_cancelCallback,kE=lt.unstable_shouldYield,CE=lt.unstable_requestPaint,de=lt.unstable_now,NE=lt.unstable_getCurrentPriorityLevel,Bh=lt.unstable_ImmediatePriority,Zg=lt.unstable_UserBlockingPriority,Ca=lt.unstable_NormalPriority,AE=lt.unstable_LowPriority,ey=lt.unstable_IdlePriority,gl=null,Ft=null;function RE(t){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(gl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:PE,DE=Math.log,xE=Math.LN2;function PE(t){return t>>>=0,t===0?32:31-(DE(t)/xE|0)|0}var Po=64,Oo=4194304;function qi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Na(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=qi(a):(s&=o,s!==0&&(r=qi(s)))}else o=n&~i,o!==0?r=qi(o):s!==0&&(r=qi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ct(e),i=1<<n,r|=t[n],e&=~i;return r}function OE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ME(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ct(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=OE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _c(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ty(){var t=Po;return Po<<=1,!(Po&4194240)&&(Po=64),t}function gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Js(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ct(e),t[e]=n}function LE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ct(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function jh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ct(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Q=0;function ny(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ry,bh,iy,sy,oy,Ic=!1,Mo=[],An=null,Rn=null,Dn=null,ws=new Map,Es=new Map,En=[],$E="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jf(t,e){switch(t){case"focusin":case"focusout":An=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":ws.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Es.delete(e.pointerId)}}function Fi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=eo(e),e!==null&&bh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function FE(t,e,n,r,i){switch(e){case"focusin":return An=Fi(An,t,e,n,r,i),!0;case"dragenter":return Rn=Fi(Rn,t,e,n,r,i),!0;case"mouseover":return Dn=Fi(Dn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ws.set(s,Fi(ws.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Es.set(s,Fi(Es.get(s)||null,t,e,n,r,i)),!0}return!1}function ay(t){var e=nr(t.target);if(e!==null){var n=kr(e);if(n!==null){if(e=n.tag,e===13){if(e=Qg(n),e!==null){t.blockedOn=e,oy(t.priority,function(){iy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ra(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vc=r,n.target.dispatchEvent(r),vc=null}else return e=eo(n),e!==null&&bh(e),t.blockedOn=n,!1;e.shift()}return!0}function Zf(t,e,n){ra(t)&&n.delete(e)}function UE(){Ic=!1,An!==null&&ra(An)&&(An=null),Rn!==null&&ra(Rn)&&(Rn=null),Dn!==null&&ra(Dn)&&(Dn=null),ws.forEach(Zf),Es.forEach(Zf)}function Ui(t,e){t.blockedOn===e&&(t.blockedOn=null,Ic||(Ic=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,UE)))}function Ss(t){function e(i){return Ui(i,t)}if(0<Mo.length){Ui(Mo[0],t);for(var n=1;n<Mo.length;n++){var r=Mo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(An!==null&&Ui(An,t),Rn!==null&&Ui(Rn,t),Dn!==null&&Ui(Dn,t),ws.forEach(e),Es.forEach(e),n=0;n<En.length;n++)r=En[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)ay(n),n.blockedOn===null&&En.shift()}var Yr=fn.ReactCurrentBatchConfig,Aa=!0;function VE(t,e,n,r){var i=Q,s=Yr.transition;Yr.transition=null;try{Q=1,Hh(t,e,n,r)}finally{Q=i,Yr.transition=s}}function zE(t,e,n,r){var i=Q,s=Yr.transition;Yr.transition=null;try{Q=4,Hh(t,e,n,r)}finally{Q=i,Yr.transition=s}}function Hh(t,e,n,r){if(Aa){var i=Tc(t,e,n,r);if(i===null)Cu(t,e,r,Ra,n),Jf(t,r);else if(FE(i,t,e,n,r))r.stopPropagation();else if(Jf(t,r),e&4&&-1<$E.indexOf(t)){for(;i!==null;){var s=eo(i);if(s!==null&&ry(s),s=Tc(t,e,n,r),s===null&&Cu(t,e,r,Ra,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Cu(t,e,r,null,n)}}var Ra=null;function Tc(t,e,n,r){if(Ra=null,t=zh(r),t=nr(t),t!==null)if(e=kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ra=t,null}function ly(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(NE()){case Bh:return 1;case Zg:return 4;case Ca:case AE:return 16;case ey:return 536870912;default:return 16}default:return 16}}var kn=null,Wh=null,ia=null;function uy(){if(ia)return ia;var t,e=Wh,n=e.length,r,i="value"in kn?kn.value:kn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ia=i.slice(t,1<r?1-r:void 0)}function sa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Lo(){return!0}function ep(){return!1}function ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Lo:ep,this.isPropagationStopped=ep,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),e}var Ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kh=ht(Ti),Zs=ae({},Ti,{view:0,detail:0}),BE=ht(Zs),yu,vu,Vi,yl=ae({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vi&&(Vi&&t.type==="mousemove"?(yu=t.screenX-Vi.screenX,vu=t.screenY-Vi.screenY):vu=yu=0,Vi=t),yu)},movementY:function(t){return"movementY"in t?t.movementY:vu}}),tp=ht(yl),jE=ae({},yl,{dataTransfer:0}),bE=ht(jE),HE=ae({},Zs,{relatedTarget:0}),wu=ht(HE),WE=ae({},Ti,{animationName:0,elapsedTime:0,pseudoElement:0}),KE=ht(WE),qE=ae({},Ti,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),GE=ht(qE),QE=ae({},Ti,{data:0}),np=ht(QE),YE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=JE[t])?!!e[t]:!1}function qh(){return ZE}var eS=ae({},Zs,{key:function(t){if(t.key){var e=YE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?XE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qh,charCode:function(t){return t.type==="keypress"?sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tS=ht(eS),nS=ae({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=ht(nS),rS=ae({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qh}),iS=ht(rS),sS=ae({},Ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),oS=ht(sS),aS=ae({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lS=ht(aS),uS=[9,13,27,32],Gh=rn&&"CompositionEvent"in window,ns=null;rn&&"documentMode"in document&&(ns=document.documentMode);var cS=rn&&"TextEvent"in window&&!ns,cy=rn&&(!Gh||ns&&8<ns&&11>=ns),ip=String.fromCharCode(32),sp=!1;function hy(t,e){switch(t){case"keyup":return uS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function hS(t,e){switch(t){case"compositionend":return dy(e);case"keypress":return e.which!==32?null:(sp=!0,ip);case"textInput":return t=e.data,t===ip&&sp?null:t;default:return null}}function dS(t,e){if($r)return t==="compositionend"||!Gh&&hy(t,e)?(t=uy(),ia=Wh=kn=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cy&&e.locale!=="ko"?null:e.data;default:return null}}var fS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fS[t.type]:e==="textarea"}function fy(t,e,n,r){Hg(r),e=Da(e,"onChange"),0<e.length&&(n=new Kh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var rs=null,_s=null;function pS(t){Ty(t,0)}function vl(t){var e=Vr(t);if(Fg(e))return t}function mS(t,e){if(t==="change")return e}var py=!1;if(rn){var Eu;if(rn){var Su="oninput"in document;if(!Su){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),Su=typeof ap.oninput=="function"}Eu=Su}else Eu=!1;py=Eu&&(!document.documentMode||9<document.documentMode)}function lp(){rs&&(rs.detachEvent("onpropertychange",my),_s=rs=null)}function my(t){if(t.propertyName==="value"&&vl(_s)){var e=[];fy(e,_s,t,zh(t)),Gg(pS,e)}}function gS(t,e,n){t==="focusin"?(lp(),rs=e,_s=n,rs.attachEvent("onpropertychange",my)):t==="focusout"&&lp()}function yS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vl(_s)}function vS(t,e){if(t==="click")return vl(e)}function wS(t,e){if(t==="input"||t==="change")return vl(e)}function ES(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var At=typeof Object.is=="function"?Object.is:ES;function Is(t,e){if(At(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!oc.call(e,i)||!At(t[i],e[i]))return!1}return!0}function up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cp(t,e){var n=up(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=up(n)}}function gy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yy(){for(var t=window,e=Ia();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ia(t.document)}return e}function Qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function SS(t){var e=yy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gy(n.ownerDocument.documentElement,n)){if(r!==null&&Qh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=cp(n,s);var o=cp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _S=rn&&"documentMode"in document&&11>=document.documentMode,Fr=null,kc=null,is=null,Cc=!1;function hp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cc||Fr==null||Fr!==Ia(r)||(r=Fr,"selectionStart"in r&&Qh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),is&&Is(is,r)||(is=r,r=Da(kc,"onSelect"),0<r.length&&(e=new Kh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Fr)))}function $o(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ur={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},_u={},vy={};rn&&(vy=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function wl(t){if(_u[t])return _u[t];if(!Ur[t])return t;var e=Ur[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vy)return _u[t]=e[n];return t}var wy=wl("animationend"),Ey=wl("animationiteration"),Sy=wl("animationstart"),_y=wl("transitionend"),Iy=new Map,dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wn(t,e){Iy.set(t,e),Tr(e,[t])}for(var Iu=0;Iu<dp.length;Iu++){var Tu=dp[Iu],IS=Tu.toLowerCase(),TS=Tu[0].toUpperCase()+Tu.slice(1);Wn(IS,"on"+TS)}Wn(wy,"onAnimationEnd");Wn(Ey,"onAnimationIteration");Wn(Sy,"onAnimationStart");Wn("dblclick","onDoubleClick");Wn("focusin","onFocus");Wn("focusout","onBlur");Wn(_y,"onTransitionEnd");si("onMouseEnter",["mouseout","mouseover"]);si("onMouseLeave",["mouseout","mouseover"]);si("onPointerEnter",["pointerout","pointerover"]);si("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));function fp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,IE(r,e,void 0,t),t.currentTarget=null}function Ty(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;fp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;fp(i,a,u),s=l}}}if(ka)throw t=Sc,ka=!1,Sc=null,t}function Z(t,e){var n=e[xc];n===void 0&&(n=e[xc]=new Set);var r=t+"__bubble";n.has(r)||(ky(e,t,2,!1),n.add(r))}function ku(t,e,n){var r=0;e&&(r|=4),ky(n,t,r,e)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function Ts(t){if(!t[Fo]){t[Fo]=!0,Pg.forEach(function(n){n!=="selectionchange"&&(kS.has(n)||ku(n,!1,t),ku(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fo]||(e[Fo]=!0,ku("selectionchange",!1,e))}}function ky(t,e,n,r){switch(ly(e)){case 1:var i=VE;break;case 4:i=zE;break;default:i=Hh}n=i.bind(null,e,n,t),i=void 0,!Ec||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Cu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=nr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Gg(function(){var u=s,c=zh(n),h=[];e:{var f=Iy.get(t);if(f!==void 0){var g=Kh,y=t;switch(t){case"keypress":if(sa(n)===0)break e;case"keydown":case"keyup":g=tS;break;case"focusin":y="focus",g=wu;break;case"focusout":y="blur",g=wu;break;case"beforeblur":case"afterblur":g=wu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=bE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=iS;break;case wy:case Ey:case Sy:g=KE;break;case _y:g=oS;break;case"scroll":g=BE;break;case"wheel":g=lS;break;case"copy":case"cut":case"paste":g=GE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=rp}var v=(e&4)!==0,T=!v&&t==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var d=u,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=vs(d,p),w!=null&&v.push(ks(d,w,m)))),T)break;d=d.return}0<v.length&&(f=new g(f,y,null,n,c),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==vc&&(y=n.relatedTarget||n.fromElement)&&(nr(y)||y[sn]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?nr(y):null,y!==null&&(T=kr(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=tp,w="onMouseLeave",p="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(v=rp,w="onPointerLeave",p="onPointerEnter",d="pointer"),T=g==null?f:Vr(g),m=y==null?f:Vr(y),f=new v(w,d+"leave",g,n,c),f.target=T,f.relatedTarget=m,w=null,nr(c)===u&&(v=new v(p,d+"enter",y,n,c),v.target=m,v.relatedTarget=T,w=v),T=w,g&&y)t:{for(v=g,p=y,d=0,m=v;m;m=Rr(m))d++;for(m=0,w=p;w;w=Rr(w))m++;for(;0<d-m;)v=Rr(v),d--;for(;0<m-d;)p=Rr(p),m--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=Rr(v),p=Rr(p)}v=null}else v=null;g!==null&&pp(h,f,g,v,!1),y!==null&&T!==null&&pp(h,T,y,v,!0)}}e:{if(f=u?Vr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var I=mS;else if(op(f))if(py)I=wS;else{I=yS;var C=gS}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=vS);if(I&&(I=I(t,u))){fy(h,I,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&fc(f,"number",f.value)}switch(C=u?Vr(u):window,t){case"focusin":(op(C)||C.contentEditable==="true")&&(Fr=C,kc=u,is=null);break;case"focusout":is=kc=Fr=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,hp(h,n,c);break;case"selectionchange":if(_S)break;case"keydown":case"keyup":hp(h,n,c)}var R;if(Gh)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else $r?hy(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(cy&&n.locale!=="ko"&&($r||N!=="onCompositionStart"?N==="onCompositionEnd"&&$r&&(R=uy()):(kn=c,Wh="value"in kn?kn.value:kn.textContent,$r=!0)),C=Da(u,N),0<C.length&&(N=new np(N,t,null,n,c),h.push({event:N,listeners:C}),R?N.data=R:(R=dy(n),R!==null&&(N.data=R)))),(R=cS?hS(t,n):dS(t,n))&&(u=Da(u,"onBeforeInput"),0<u.length&&(c=new np("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=R))}Ty(h,e)})}function ks(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Da(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=vs(t,n),s!=null&&r.unshift(ks(t,s,i)),s=vs(t,e),s!=null&&r.push(ks(t,s,i))),t=t.return}return r}function Rr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=vs(n,s),l!=null&&o.unshift(ks(n,l,a))):i||(l=vs(n,s),l!=null&&o.push(ks(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var CS=/\r\n?/g,NS=/\u0000|\uFFFD/g;function mp(t){return(typeof t=="string"?t:""+t).replace(CS,`
`).replace(NS,"")}function Uo(t,e,n){if(e=mp(e),mp(t)!==e&&n)throw Error(S(425))}function xa(){}var Nc=null,Ac=null;function Rc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,AS=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,RS=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(t){return gp.resolve(null).then(t).catch(DS)}:Dc;function DS(t){setTimeout(function(){throw t})}function Nu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ss(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ss(e)}function xn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ki=Math.random().toString(36).slice(2),Pt="__reactFiber$"+ki,Cs="__reactProps$"+ki,sn="__reactContainer$"+ki,xc="__reactEvents$"+ki,xS="__reactListeners$"+ki,PS="__reactHandles$"+ki;function nr(t){var e=t[Pt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[sn]||n[Pt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yp(t);t!==null;){if(n=t[Pt])return n;t=yp(t)}return e}t=n,n=t.parentNode}return null}function eo(t){return t=t[Pt]||t[sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function El(t){return t[Cs]||null}var Pc=[],zr=-1;function Kn(t){return{current:t}}function te(t){0>zr||(t.current=Pc[zr],Pc[zr]=null,zr--)}function J(t,e){zr++,Pc[zr]=t.current,t.current=e}var Bn={},be=Kn(Bn),Ze=Kn(!1),fr=Bn;function oi(t,e){var n=t.type.contextTypes;if(!n)return Bn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function et(t){return t=t.childContextTypes,t!=null}function Pa(){te(Ze),te(be)}function vp(t,e,n){if(be.current!==Bn)throw Error(S(168));J(be,e),J(Ze,n)}function Cy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,gE(t)||"Unknown",i));return ae({},n,r)}function Oa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bn,fr=be.current,J(be,t),J(Ze,Ze.current),!0}function wp(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Cy(t,e,fr),r.__reactInternalMemoizedMergedChildContext=t,te(Ze),te(be),J(be,t)):te(Ze),J(Ze,n)}var qt=null,Sl=!1,Au=!1;function Ny(t){qt===null?qt=[t]:qt.push(t)}function OS(t){Sl=!0,Ny(t)}function qn(){if(!Au&&qt!==null){Au=!0;var t=0,e=Q;try{var n=qt;for(Q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qt=null,Sl=!1}catch(i){throw qt!==null&&(qt=qt.slice(t+1)),Jg(Bh,qn),i}finally{Q=e,Au=!1}}return null}var Br=[],jr=0,Ma=null,La=0,dt=[],ft=0,pr=null,Qt=1,Yt="";function Zn(t,e){Br[jr++]=La,Br[jr++]=Ma,Ma=t,La=e}function Ay(t,e,n){dt[ft++]=Qt,dt[ft++]=Yt,dt[ft++]=pr,pr=t;var r=Qt;t=Yt;var i=32-Ct(r)-1;r&=~(1<<i),n+=1;var s=32-Ct(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Qt=1<<32-Ct(e)+i|n<<i|r,Yt=s+t}else Qt=1<<s|n<<i|r,Yt=t}function Yh(t){t.return!==null&&(Zn(t,1),Ay(t,1,0))}function Xh(t){for(;t===Ma;)Ma=Br[--jr],Br[jr]=null,La=Br[--jr],Br[jr]=null;for(;t===pr;)pr=dt[--ft],dt[ft]=null,Yt=dt[--ft],dt[ft]=null,Qt=dt[--ft],dt[ft]=null}var at=null,ot=null,re=!1,Tt=null;function Ry(t,e){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ep(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,at=t,ot=xn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,at=t,ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pr!==null?{id:Qt,overflow:Yt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,at=t,ot=null,!0):!1;default:return!1}}function Oc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mc(t){if(re){var e=ot;if(e){var n=e;if(!Ep(t,e)){if(Oc(t))throw Error(S(418));e=xn(n.nextSibling);var r=at;e&&Ep(t,e)?Ry(r,n):(t.flags=t.flags&-4097|2,re=!1,at=t)}}else{if(Oc(t))throw Error(S(418));t.flags=t.flags&-4097|2,re=!1,at=t}}}function Sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;at=t}function Vo(t){if(t!==at)return!1;if(!re)return Sp(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rc(t.type,t.memoizedProps)),e&&(e=ot)){if(Oc(t))throw Dy(),Error(S(418));for(;e;)Ry(t,e),e=xn(e.nextSibling)}if(Sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ot=xn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ot=null}}else ot=at?xn(t.stateNode.nextSibling):null;return!0}function Dy(){for(var t=ot;t;)t=xn(t.nextSibling)}function ai(){ot=at=null,re=!1}function Jh(t){Tt===null?Tt=[t]:Tt.push(t)}var MS=fn.ReactCurrentBatchConfig;function zi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function zo(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _p(t){var e=t._init;return e(t._payload)}function xy(t){function e(p,d){if(t){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!t)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Ln(p,d),p.index=0,p.sibling=null,p}function s(p,d,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,w){return d===null||d.tag!==6?(d=Lu(m,p.mode,w),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,w){var I=m.type;return I===Lr?c(p,d,m.props.children,w,m.key):d!==null&&(d.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===yn&&_p(I)===d.type)?(w=i(d,m.props),w.ref=zi(p,d,m),w.return=p,w):(w=da(m.type,m.key,m.props,null,p.mode,w),w.ref=zi(p,d,m),w.return=p,w)}function u(p,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=$u(m,p.mode,w),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,w,I){return d===null||d.tag!==7?(d=cr(m,p.mode,w,I),d.return=p,d):(d=i(d,m),d.return=p,d)}function h(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Lu(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ro:return m=da(d.type,d.key,d.props,null,p.mode,m),m.ref=zi(p,null,d),m.return=p,m;case Mr:return d=$u(d,p.mode,m),d.return=p,d;case yn:var w=d._init;return h(p,w(d._payload),m)}if(Ki(d)||Li(d))return d=cr(d,p.mode,m,null),d.return=p,d;zo(p,d)}return null}function f(p,d,m,w){var I=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:a(p,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ro:return m.key===I?l(p,d,m,w):null;case Mr:return m.key===I?u(p,d,m,w):null;case yn:return I=m._init,f(p,d,I(m._payload),w)}if(Ki(m)||Li(m))return I!==null?null:c(p,d,m,w,null);zo(p,m)}return null}function g(p,d,m,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(d,p,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ro:return p=p.get(w.key===null?m:w.key)||null,l(d,p,w,I);case Mr:return p=p.get(w.key===null?m:w.key)||null,u(d,p,w,I);case yn:var C=w._init;return g(p,d,m,C(w._payload),I)}if(Ki(w)||Li(w))return p=p.get(m)||null,c(d,p,w,I,null);zo(d,w)}return null}function y(p,d,m,w){for(var I=null,C=null,R=d,N=d=0,K=null;R!==null&&N<m.length;N++){R.index>N?(K=R,R=null):K=R.sibling;var B=f(p,R,m[N],w);if(B===null){R===null&&(R=K);break}t&&R&&B.alternate===null&&e(p,R),d=s(B,d,N),C===null?I=B:C.sibling=B,C=B,R=K}if(N===m.length)return n(p,R),re&&Zn(p,N),I;if(R===null){for(;N<m.length;N++)R=h(p,m[N],w),R!==null&&(d=s(R,d,N),C===null?I=R:C.sibling=R,C=R);return re&&Zn(p,N),I}for(R=r(p,R);N<m.length;N++)K=g(R,p,N,m[N],w),K!==null&&(t&&K.alternate!==null&&R.delete(K.key===null?N:K.key),d=s(K,d,N),C===null?I=K:C.sibling=K,C=K);return t&&R.forEach(function(Et){return e(p,Et)}),re&&Zn(p,N),I}function v(p,d,m,w){var I=Li(m);if(typeof I!="function")throw Error(S(150));if(m=I.call(m),m==null)throw Error(S(151));for(var C=I=null,R=d,N=d=0,K=null,B=m.next();R!==null&&!B.done;N++,B=m.next()){R.index>N?(K=R,R=null):K=R.sibling;var Et=f(p,R,B.value,w);if(Et===null){R===null&&(R=K);break}t&&R&&Et.alternate===null&&e(p,R),d=s(Et,d,N),C===null?I=Et:C.sibling=Et,C=Et,R=K}if(B.done)return n(p,R),re&&Zn(p,N),I;if(R===null){for(;!B.done;N++,B=m.next())B=h(p,B.value,w),B!==null&&(d=s(B,d,N),C===null?I=B:C.sibling=B,C=B);return re&&Zn(p,N),I}for(R=r(p,R);!B.done;N++,B=m.next())B=g(R,p,N,B.value,w),B!==null&&(t&&B.alternate!==null&&R.delete(B.key===null?N:B.key),d=s(B,d,N),C===null?I=B:C.sibling=B,C=B);return t&&R.forEach(function(Oi){return e(p,Oi)}),re&&Zn(p,N),I}function T(p,d,m,w){if(typeof m=="object"&&m!==null&&m.type===Lr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ro:e:{for(var I=m.key,C=d;C!==null;){if(C.key===I){if(I=m.type,I===Lr){if(C.tag===7){n(p,C.sibling),d=i(C,m.props.children),d.return=p,p=d;break e}}else if(C.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===yn&&_p(I)===C.type){n(p,C.sibling),d=i(C,m.props),d.ref=zi(p,C,m),d.return=p,p=d;break e}n(p,C);break}else e(p,C);C=C.sibling}m.type===Lr?(d=cr(m.props.children,p.mode,w,m.key),d.return=p,p=d):(w=da(m.type,m.key,m.props,null,p.mode,w),w.ref=zi(p,d,m),w.return=p,p=w)}return o(p);case Mr:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else e(p,d);d=d.sibling}d=$u(m,p.mode,w),d.return=p,p=d}return o(p);case yn:return C=m._init,T(p,d,C(m._payload),w)}if(Ki(m))return y(p,d,m,w);if(Li(m))return v(p,d,m,w);zo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=Lu(m,p.mode,w),d.return=p,p=d),o(p)):n(p,d)}return T}var li=xy(!0),Py=xy(!1),$a=Kn(null),Fa=null,br=null,Zh=null;function ed(){Zh=br=Fa=null}function td(t){var e=$a.current;te($a),t._currentValue=e}function Lc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Xr(t,e){Fa=t,Zh=br=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Je=!0),t.firstContext=null)}function vt(t){var e=t._currentValue;if(Zh!==t)if(t={context:t,memoizedValue:e,next:null},br===null){if(Fa===null)throw Error(S(308));br=t,Fa.dependencies={lanes:0,firstContext:t}}else br=br.next=t;return e}var rr=null;function nd(t){rr===null?rr=[t]:rr.push(t)}function Oy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,nd(e)):(n.next=i.next,i.next=n),e.interleaved=n,on(t,r)}function on(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vn=!1;function rd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function My(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function en(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,on(t,n)}return i=r.interleaved,i===null?(e.next=e,nd(r)):(e.next=i.next,i.next=e),r.interleaved=e,on(t,n)}function oa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jh(t,n)}}function Ip(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ua(t,e,n,r){var i=t.updateQueue;vn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(f=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(g,h,f):y,f==null)break e;h=ae({},h,f);break e;case 2:vn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);gr|=o,t.lanes=o,t.memoizedState=h}}function Tp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var to={},Ut=Kn(to),Ns=Kn(to),As=Kn(to);function ir(t){if(t===to)throw Error(S(174));return t}function id(t,e){switch(J(As,e),J(Ns,t),J(Ut,to),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mc(e,t)}te(Ut),J(Ut,e)}function ui(){te(Ut),te(Ns),te(As)}function Ly(t){ir(As.current);var e=ir(Ut.current),n=mc(e,t.type);e!==n&&(J(Ns,t),J(Ut,n))}function sd(t){Ns.current===t&&(te(Ut),te(Ns))}var se=Kn(0);function Va(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ru=[];function od(){for(var t=0;t<Ru.length;t++)Ru[t]._workInProgressVersionPrimary=null;Ru.length=0}var aa=fn.ReactCurrentDispatcher,Du=fn.ReactCurrentBatchConfig,mr=0,oe=null,ye=null,Ie=null,za=!1,ss=!1,Rs=0,LS=0;function Oe(){throw Error(S(321))}function ad(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!At(t[n],e[n]))return!1;return!0}function ld(t,e,n,r,i,s){if(mr=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,aa.current=t===null||t.memoizedState===null?VS:zS,t=n(r,i),ss){s=0;do{if(ss=!1,Rs=0,25<=s)throw Error(S(301));s+=1,Ie=ye=null,e.updateQueue=null,aa.current=BS,t=n(r,i)}while(ss)}if(aa.current=Ba,e=ye!==null&&ye.next!==null,mr=0,Ie=ye=oe=null,za=!1,e)throw Error(S(300));return t}function ud(){var t=Rs!==0;return Rs=0,t}function xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?oe.memoizedState=Ie=t:Ie=Ie.next=t,Ie}function wt(){if(ye===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=ye.next;var e=Ie===null?oe.memoizedState:Ie.next;if(e!==null)Ie=e,ye=t;else{if(t===null)throw Error(S(310));ye=t,t={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Ie===null?oe.memoizedState=Ie=t:Ie=Ie.next=t}return Ie}function Ds(t,e){return typeof e=="function"?e(t):e}function xu(t){var e=wt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((mr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,oe.lanes|=c,gr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,At(r,e.memoizedState)||(Je=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,gr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pu(t){var e=wt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);At(s,e.memoizedState)||(Je=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $y(){}function Fy(t,e){var n=oe,r=wt(),i=e(),s=!At(r.memoizedState,i);if(s&&(r.memoizedState=i,Je=!0),r=r.queue,cd(zy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,xs(9,Vy.bind(null,n,r,i,e),void 0,null),Te===null)throw Error(S(349));mr&30||Uy(n,e,i)}return i}function Uy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vy(t,e,n,r){e.value=n,e.getSnapshot=r,By(e)&&jy(t)}function zy(t,e,n){return n(function(){By(e)&&jy(t)})}function By(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!At(t,n)}catch{return!0}}function jy(t){var e=on(t,1);e!==null&&Nt(e,t,1,-1)}function kp(t){var e=xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ds,lastRenderedState:t},e.queue=t,t=t.dispatch=US.bind(null,oe,t),[e.memoizedState,t]}function xs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function by(){return wt().memoizedState}function la(t,e,n,r){var i=xt();oe.flags|=t,i.memoizedState=xs(1|e,n,void 0,r===void 0?null:r)}function _l(t,e,n,r){var i=wt();r=r===void 0?null:r;var s=void 0;if(ye!==null){var o=ye.memoizedState;if(s=o.destroy,r!==null&&ad(r,o.deps)){i.memoizedState=xs(e,n,s,r);return}}oe.flags|=t,i.memoizedState=xs(1|e,n,s,r)}function Cp(t,e){return la(8390656,8,t,e)}function cd(t,e){return _l(2048,8,t,e)}function Hy(t,e){return _l(4,2,t,e)}function Wy(t,e){return _l(4,4,t,e)}function Ky(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qy(t,e,n){return n=n!=null?n.concat([t]):null,_l(4,4,Ky.bind(null,e,t),n)}function hd(){}function Gy(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ad(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Qy(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ad(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Yy(t,e,n){return mr&21?(At(n,e)||(n=ty(),oe.lanes|=n,gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Je=!0),t.memoizedState=n)}function $S(t,e){var n=Q;Q=n!==0&&4>n?n:4,t(!0);var r=Du.transition;Du.transition={};try{t(!1),e()}finally{Q=n,Du.transition=r}}function Xy(){return wt().memoizedState}function FS(t,e,n){var r=Mn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jy(t))Zy(e,n);else if(n=Oy(t,e,n,r),n!==null){var i=Ge();Nt(n,t,r,i),ev(n,e,r)}}function US(t,e,n){var r=Mn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jy(t))Zy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,At(a,o)){var l=e.interleaved;l===null?(i.next=i,nd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Oy(t,e,i,r),n!==null&&(i=Ge(),Nt(n,t,r,i),ev(n,e,r))}}function Jy(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function Zy(t,e){ss=za=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ev(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jh(t,n)}}var Ba={readContext:vt,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},VS={readContext:vt,useCallback:function(t,e){return xt().memoizedState=[t,e===void 0?null:e],t},useContext:vt,useEffect:Cp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,la(4194308,4,Ky.bind(null,e,t),n)},useLayoutEffect:function(t,e){return la(4194308,4,t,e)},useInsertionEffect:function(t,e){return la(4,2,t,e)},useMemo:function(t,e){var n=xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=FS.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=xt();return t={current:t},e.memoizedState=t},useState:kp,useDebugValue:hd,useDeferredValue:function(t){return xt().memoizedState=t},useTransition:function(){var t=kp(!1),e=t[0];return t=$S.bind(null,t[1]),xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=xt();if(re){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Te===null)throw Error(S(349));mr&30||Uy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Cp(zy.bind(null,r,s,t),[t]),r.flags|=2048,xs(9,Vy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=xt(),e=Te.identifierPrefix;if(re){var n=Yt,r=Qt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Rs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=LS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zS={readContext:vt,useCallback:Gy,useContext:vt,useEffect:cd,useImperativeHandle:qy,useInsertionEffect:Hy,useLayoutEffect:Wy,useMemo:Qy,useReducer:xu,useRef:by,useState:function(){return xu(Ds)},useDebugValue:hd,useDeferredValue:function(t){var e=wt();return Yy(e,ye.memoizedState,t)},useTransition:function(){var t=xu(Ds)[0],e=wt().memoizedState;return[t,e]},useMutableSource:$y,useSyncExternalStore:Fy,useId:Xy,unstable_isNewReconciler:!1},BS={readContext:vt,useCallback:Gy,useContext:vt,useEffect:cd,useImperativeHandle:qy,useInsertionEffect:Hy,useLayoutEffect:Wy,useMemo:Qy,useReducer:Pu,useRef:by,useState:function(){return Pu(Ds)},useDebugValue:hd,useDeferredValue:function(t){var e=wt();return ye===null?e.memoizedState=t:Yy(e,ye.memoizedState,t)},useTransition:function(){var t=Pu(Ds)[0],e=wt().memoizedState;return[t,e]},useMutableSource:$y,useSyncExternalStore:Fy,useId:Xy,unstable_isNewReconciler:!1};function _t(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $c(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Il={isMounted:function(t){return(t=t._reactInternals)?kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ge(),i=Mn(t),s=en(r,i);s.payload=e,n!=null&&(s.callback=n),e=Pn(t,s,i),e!==null&&(Nt(e,t,i,r),oa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ge(),i=Mn(t),s=en(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Pn(t,s,i),e!==null&&(Nt(e,t,i,r),oa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ge(),r=Mn(t),i=en(n,r);i.tag=2,e!=null&&(i.callback=e),e=Pn(t,i,r),e!==null&&(Nt(e,t,r,n),oa(e,t,r))}};function Np(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Is(n,r)||!Is(i,s):!0}function tv(t,e,n){var r=!1,i=Bn,s=e.contextType;return typeof s=="object"&&s!==null?s=vt(s):(i=et(e)?fr:be.current,r=e.contextTypes,s=(r=r!=null)?oi(t,i):Bn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Il,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ap(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Il.enqueueReplaceState(e,e.state,null)}function Fc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},rd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=vt(s):(s=et(e)?fr:be.current,i.context=oi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($c(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Il.enqueueReplaceState(i,i.state,null),Ua(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ci(t,e){try{var n="",r=e;do n+=mE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ou(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jS=typeof WeakMap=="function"?WeakMap:Map;function nv(t,e,n){n=en(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ba||(ba=!0,Gc=r),Uc(t,e)},n}function rv(t,e,n){n=en(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Uc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uc(t,e),typeof r!="function"&&(On===null?On=new Set([this]):On.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new jS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=n_.bind(null,t,e,n),e.then(t,t))}function Dp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=en(-1,1),e.tag=2,Pn(n,e,1))),n.lanes|=1),t)}var bS=fn.ReactCurrentOwner,Je=!1;function Ke(t,e,n,r){e.child=t===null?Py(e,null,n,r):li(e,t.child,n,r)}function Pp(t,e,n,r,i){n=n.render;var s=e.ref;return Xr(e,i),r=ld(t,e,n,r,s,i),n=ud(),t!==null&&!Je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,an(t,e,i)):(re&&n&&Yh(e),e.flags|=1,Ke(t,e,r,i),e.child)}function Op(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!wd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,iv(t,e,s,r,i)):(t=da(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Is,n(o,r)&&t.ref===e.ref)return an(t,e,i)}return e.flags|=1,t=Ln(s,r),t.ref=e.ref,t.return=e,e.child=t}function iv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Is(s,r)&&t.ref===e.ref)if(Je=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Je=!0);else return e.lanes=t.lanes,an(t,e,i)}return Vc(t,e,n,r,i)}function sv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Wr,st),st|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J(Wr,st),st|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,J(Wr,st),st|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,J(Wr,st),st|=r;return Ke(t,e,i,n),e.child}function ov(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vc(t,e,n,r,i){var s=et(n)?fr:be.current;return s=oi(e,s),Xr(e,i),n=ld(t,e,n,r,s,i),r=ud(),t!==null&&!Je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,an(t,e,i)):(re&&r&&Yh(e),e.flags|=1,Ke(t,e,n,i),e.child)}function Mp(t,e,n,r,i){if(et(n)){var s=!0;Oa(e)}else s=!1;if(Xr(e,i),e.stateNode===null)ua(t,e),tv(e,n,r),Fc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=et(n)?fr:be.current,u=oi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ap(e,o,r,u),vn=!1;var f=e.memoizedState;o.state=f,Ua(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ze.current||vn?(typeof c=="function"&&($c(e,n,c,r),l=e.memoizedState),(a=vn||Np(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,My(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:_t(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=vt(l):(l=et(n)?fr:be.current,l=oi(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Ap(e,o,r,l),vn=!1,f=e.memoizedState,o.state=f,Ua(e,r,o,i);var y=e.memoizedState;a!==h||f!==y||Ze.current||vn?(typeof g=="function"&&($c(e,n,g,r),y=e.memoizedState),(u=vn||Np(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return zc(t,e,n,r,s,i)}function zc(t,e,n,r,i,s){ov(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&wp(e,n,!1),an(t,e,s);r=e.stateNode,bS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=li(e,t.child,null,s),e.child=li(e,null,a,s)):Ke(t,e,a,s),e.memoizedState=r.state,i&&wp(e,n,!0),e.child}function av(t){var e=t.stateNode;e.pendingContext?vp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vp(t,e.context,!1),id(t,e.containerInfo)}function Lp(t,e,n,r,i){return ai(),Jh(i),e.flags|=256,Ke(t,e,n,r),e.child}var Bc={dehydrated:null,treeContext:null,retryLane:0};function jc(t){return{baseLanes:t,cachePool:null,transitions:null}}function lv(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(se,i&1),t===null)return Mc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cl(o,r,0,null),t=cr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=jc(n),e.memoizedState=Bc,t):dd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return HS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ln(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ln(a,s):(s=cr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?jc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Bc,r}return s=t.child,t=s.sibling,r=Ln(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function dd(t,e){return e=Cl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Bo(t,e,n,r){return r!==null&&Jh(r),li(e,t.child,null,n),t=dd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ou(Error(S(422))),Bo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Cl({mode:"visible",children:r.children},i,0,null),s=cr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&li(e,t.child,null,o),e.child.memoizedState=jc(o),e.memoizedState=Bc,s);if(!(e.mode&1))return Bo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=Ou(s,r,void 0),Bo(t,e,o,r)}if(a=(o&t.childLanes)!==0,Je||a){if(r=Te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,on(t,i),Nt(r,t,i,-1))}return vd(),r=Ou(Error(S(421))),Bo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=r_.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ot=xn(i.nextSibling),at=e,re=!0,Tt=null,t!==null&&(dt[ft++]=Qt,dt[ft++]=Yt,dt[ft++]=pr,Qt=t.id,Yt=t.overflow,pr=e),e=dd(e,r.children),e.flags|=4096,e)}function $p(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Lc(t.return,e,n)}function Mu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function uv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ke(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$p(t,n,e);else if(t.tag===19)$p(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Va(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Mu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Va(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Mu(e,!0,n,null,s);break;case"together":Mu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ua(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function an(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=Ln(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ln(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WS(t,e,n){switch(e.tag){case 3:av(e),ai();break;case 5:Ly(e);break;case 1:et(e.type)&&Oa(e);break;case 4:id(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J($a,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?lv(t,e,n):(J(se,se.current&1),t=an(t,e,n),t!==null?t.sibling:null);J(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return uv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,sv(t,e,n)}return an(t,e,n)}var cv,bc,hv,dv;cv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bc=function(){};hv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ir(Ut.current);var s=null;switch(n){case"input":i=hc(t,i),r=hc(t,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=pc(t,i),r=pc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=xa)}gc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(gs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(gs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Z("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};dv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Bi(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function KS(t,e,n){var r=e.pendingProps;switch(Xh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return et(e.type)&&Pa(),Me(e),null;case 3:return r=e.stateNode,ui(),te(Ze),te(be),od(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Vo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tt!==null&&(Xc(Tt),Tt=null))),bc(t,e),Me(e),null;case 5:sd(e);var i=ir(As.current);if(n=e.type,t!==null&&e.stateNode!=null)hv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Me(e),null}if(t=ir(Ut.current),Vo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Pt]=e,r[Cs]=s,t=(e.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<Gi.length;i++)Z(Gi[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":Wf(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":qf(r,s),Z("invalid",r)}gc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Uo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Uo(r.textContent,a,t),i=["children",""+a]):gs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":Do(r),Kf(r,s,!0);break;case"textarea":Do(r),Gf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=xa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Pt]=e,t[Cs]=r,cv(t,e,!1,!1),e.stateNode=t;e:{switch(o=yc(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<Gi.length;i++)Z(Gi[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":Wf(t,r),i=hc(t,r),Z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),Z("invalid",t);break;case"textarea":qf(t,r),i=pc(t,r),Z("invalid",t);break;default:i=r}gc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?bg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ys(t,l):typeof l=="number"&&ys(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(gs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Z("scroll",t):l!=null&&$h(t,s,l,o))}switch(n){case"input":Do(t),Kf(t,r,!1);break;case"textarea":Do(t),Gf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+zn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?qr(t,!!r.multiple,s,!1):r.defaultValue!=null&&qr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)dv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=ir(As.current),ir(Ut.current),Vo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pt]=e,(s=r.nodeValue!==n)&&(t=at,t!==null))switch(t.tag){case 3:Uo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Uo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=e,e.stateNode=r}return Me(e),null;case 13:if(te(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&ot!==null&&e.mode&1&&!(e.flags&128))Dy(),ai(),e.flags|=98560,s=!1;else if(s=Vo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Pt]=e}else ai(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),s=!1}else Tt!==null&&(Xc(Tt),Tt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?we===0&&(we=3):vd())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return ui(),bc(t,e),t===null&&Ts(e.stateNode.containerInfo),Me(e),null;case 10:return td(e.type._context),Me(e),null;case 17:return et(e.type)&&Pa(),Me(e),null;case 19:if(te(se),s=e.memoizedState,s===null)return Me(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Bi(s,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Va(t),o!==null){for(e.flags|=128,Bi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>hi&&(e.flags|=128,r=!0,Bi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Va(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!re)return Me(e),null}else 2*de()-s.renderingStartTime>hi&&n!==1073741824&&(e.flags|=128,r=!0,Bi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=se.current,J(se,r?n&1|2:n&1),e):(Me(e),null);case 22:case 23:return yd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?st&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function qS(t,e){switch(Xh(e),e.tag){case 1:return et(e.type)&&Pa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ui(),te(Ze),te(be),od(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sd(e),null;case 13:if(te(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));ai()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(se),null;case 4:return ui(),null;case 10:return td(e.type._context),null;case 22:case 23:return yd(),null;case 24:return null;default:return null}}var jo=!1,Fe=!1,GS=typeof WeakSet=="function"?WeakSet:Set,A=null;function Hr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(t,e,r)}else n.current=null}function Hc(t,e,n){try{n()}catch(r){ue(t,e,r)}}var Fp=!1;function QS(t,e){if(Nc=Aa,t=yy(),Qh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ac={focusedElem:t,selectionRange:n},Aa=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,T=y.memoizedState,p=e.stateNode,d=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:_t(e.type,v),T);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){ue(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return y=Fp,Fp=!1,y}function os(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Hc(e,n,s)}i=i.next}while(i!==r)}}function Tl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Wc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function fv(t){var e=t.alternate;e!==null&&(t.alternate=null,fv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pt],delete e[Cs],delete e[xc],delete e[xS],delete e[PS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pv(t){return t.tag===5||t.tag===3||t.tag===4}function Up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xa));else if(r!==4&&(t=t.child,t!==null))for(Kc(t,e,n),t=t.sibling;t!==null;)Kc(t,e,n),t=t.sibling}function qc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qc(t,e,n),t=t.sibling;t!==null;)qc(t,e,n),t=t.sibling}var Ne=null,It=!1;function mn(t,e,n){for(n=n.child;n!==null;)mv(t,e,n),n=n.sibling}function mv(t,e,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(gl,n)}catch{}switch(n.tag){case 5:Fe||Hr(n,e);case 6:var r=Ne,i=It;Ne=null,mn(t,e,n),Ne=r,It=i,Ne!==null&&(It?(t=Ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(It?(t=Ne,n=n.stateNode,t.nodeType===8?Nu(t.parentNode,n):t.nodeType===1&&Nu(t,n),Ss(t)):Nu(Ne,n.stateNode));break;case 4:r=Ne,i=It,Ne=n.stateNode.containerInfo,It=!0,mn(t,e,n),Ne=r,It=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hc(n,e,o),i=i.next}while(i!==r)}mn(t,e,n);break;case 1:if(!Fe&&(Hr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ue(n,e,a)}mn(t,e,n);break;case 21:mn(t,e,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,mn(t,e,n),Fe=r):mn(t,e,n);break;default:mn(t,e,n)}}function Vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new GS),e.forEach(function(r){var i=i_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function St(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,It=!1;break e;case 3:Ne=a.stateNode.containerInfo,It=!0;break e;case 4:Ne=a.stateNode.containerInfo,It=!0;break e}a=a.return}if(Ne===null)throw Error(S(160));mv(s,o,i),Ne=null,It=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ue(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gv(e,t),e=e.sibling}function gv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(St(e,t),Dt(t),r&4){try{os(3,t,t.return),Tl(3,t)}catch(v){ue(t,t.return,v)}try{os(5,t,t.return)}catch(v){ue(t,t.return,v)}}break;case 1:St(e,t),Dt(t),r&512&&n!==null&&Hr(n,n.return);break;case 5:if(St(e,t),Dt(t),r&512&&n!==null&&Hr(n,n.return),t.flags&32){var i=t.stateNode;try{ys(i,"")}catch(v){ue(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ug(i,s),yc(a,o);var u=yc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?bg(i,h):c==="dangerouslySetInnerHTML"?Bg(i,h):c==="children"?ys(i,h):$h(i,c,h,u)}switch(a){case"input":dc(i,s);break;case"textarea":Vg(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?qr(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?qr(i,!!s.multiple,s.defaultValue,!0):qr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Cs]=s}catch(v){ue(t,t.return,v)}}break;case 6:if(St(e,t),Dt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ue(t,t.return,v)}}break;case 3:if(St(e,t),Dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ss(e.containerInfo)}catch(v){ue(t,t.return,v)}break;case 4:St(e,t),Dt(t);break;case 13:St(e,t),Dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(md=de())),r&4&&Vp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Fe=(u=Fe)||c,St(e,t),Fe=u):St(e,t),Dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(A=t,c=t.child;c!==null;){for(h=A=c;A!==null;){switch(f=A,g=f.child,f.tag){case 0:case 11:case 14:case 15:os(4,f,f.return);break;case 1:Hr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ue(r,n,v)}}break;case 5:Hr(f,f.return);break;case 22:if(f.memoizedState!==null){Bp(h);continue}}g!==null?(g.return=f,A=g):Bp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jg("display",o))}catch(v){ue(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ue(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:St(e,t),Dt(t),r&4&&Vp(t);break;case 21:break;default:St(e,t),Dt(t)}}function Dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(pv(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ys(i,""),r.flags&=-33);var s=Up(t);qc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Up(t);Kc(t,a,o);break;default:throw Error(S(161))}}catch(l){ue(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function YS(t,e,n){A=t,yv(t)}function yv(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||jo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Fe;a=jo;var u=Fe;if(jo=o,(Fe=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?jp(i):l!==null?(l.return=o,A=l):jp(i);for(;s!==null;)A=s,yv(s),s=s.sibling;A=i,jo=a,Fe=u}zp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):zp(t)}}function zp(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Fe||Tl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:_t(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ss(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Fe||e.flags&512&&Wc(e)}catch(f){ue(e,e.return,f)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function Bp(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function jp(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tl(4,e)}catch(l){ue(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ue(e,i,l)}}var s=e.return;try{Wc(e)}catch(l){ue(e,s,l)}break;case 5:var o=e.return;try{Wc(e)}catch(l){ue(e,o,l)}}}catch(l){ue(e,e.return,l)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var XS=Math.ceil,ja=fn.ReactCurrentDispatcher,fd=fn.ReactCurrentOwner,yt=fn.ReactCurrentBatchConfig,W=0,Te=null,ge=null,De=0,st=0,Wr=Kn(0),we=0,Ps=null,gr=0,kl=0,pd=0,as=null,Xe=null,md=0,hi=1/0,Kt=null,ba=!1,Gc=null,On=null,bo=!1,Cn=null,Ha=0,ls=0,Qc=null,ca=-1,ha=0;function Ge(){return W&6?de():ca!==-1?ca:ca=de()}function Mn(t){return t.mode&1?W&2&&De!==0?De&-De:MS.transition!==null?(ha===0&&(ha=ty()),ha):(t=Q,t!==0||(t=window.event,t=t===void 0?16:ly(t.type)),t):1}function Nt(t,e,n,r){if(50<ls)throw ls=0,Qc=null,Error(S(185));Js(t,n,r),(!(W&2)||t!==Te)&&(t===Te&&(!(W&2)&&(kl|=n),we===4&&Sn(t,De)),tt(t,r),n===1&&W===0&&!(e.mode&1)&&(hi=de()+500,Sl&&qn()))}function tt(t,e){var n=t.callbackNode;ME(t,e);var r=Na(t,t===Te?De:0);if(r===0)n!==null&&Xf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Xf(n),e===1)t.tag===0?OS(bp.bind(null,t)):Ny(bp.bind(null,t)),RS(function(){!(W&6)&&qn()}),n=null;else{switch(ny(r)){case 1:n=Bh;break;case 4:n=Zg;break;case 16:n=Ca;break;case 536870912:n=ey;break;default:n=Ca}n=kv(n,vv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function vv(t,e){if(ca=-1,ha=0,W&6)throw Error(S(327));var n=t.callbackNode;if(Jr()&&t.callbackNode!==n)return null;var r=Na(t,t===Te?De:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Wa(t,r);else{e=r;var i=W;W|=2;var s=Ev();(Te!==t||De!==e)&&(Kt=null,hi=de()+500,ur(t,e));do try{e_();break}catch(a){wv(t,a)}while(1);ed(),ja.current=s,W=i,ge!==null?e=0:(Te=null,De=0,e=we)}if(e!==0){if(e===2&&(i=_c(t),i!==0&&(r=i,e=Yc(t,i))),e===1)throw n=Ps,ur(t,0),Sn(t,r),tt(t,de()),n;if(e===6)Sn(t,r);else{if(i=t.current.alternate,!(r&30)&&!JS(i)&&(e=Wa(t,r),e===2&&(s=_c(t),s!==0&&(r=s,e=Yc(t,s))),e===1))throw n=Ps,ur(t,0),Sn(t,r),tt(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:er(t,Xe,Kt);break;case 3:if(Sn(t,r),(r&130023424)===r&&(e=md+500-de(),10<e)){if(Na(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ge(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Dc(er.bind(null,t,Xe,Kt),e);break}er(t,Xe,Kt);break;case 4:if(Sn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ct(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*XS(r/1960))-r,10<r){t.timeoutHandle=Dc(er.bind(null,t,Xe,Kt),r);break}er(t,Xe,Kt);break;case 5:er(t,Xe,Kt);break;default:throw Error(S(329))}}}return tt(t,de()),t.callbackNode===n?vv.bind(null,t):null}function Yc(t,e){var n=as;return t.current.memoizedState.isDehydrated&&(ur(t,e).flags|=256),t=Wa(t,e),t!==2&&(e=Xe,Xe=n,e!==null&&Xc(e)),t}function Xc(t){Xe===null?Xe=t:Xe.push.apply(Xe,t)}function JS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!At(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sn(t,e){for(e&=~pd,e&=~kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ct(e),r=1<<n;t[n]=-1,e&=~r}}function bp(t){if(W&6)throw Error(S(327));Jr();var e=Na(t,0);if(!(e&1))return tt(t,de()),null;var n=Wa(t,e);if(t.tag!==0&&n===2){var r=_c(t);r!==0&&(e=r,n=Yc(t,r))}if(n===1)throw n=Ps,ur(t,0),Sn(t,e),tt(t,de()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,er(t,Xe,Kt),tt(t,de()),null}function gd(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(hi=de()+500,Sl&&qn())}}function yr(t){Cn!==null&&Cn.tag===0&&!(W&6)&&Jr();var e=W;W|=1;var n=yt.transition,r=Q;try{if(yt.transition=null,Q=1,t)return t()}finally{Q=r,yt.transition=n,W=e,!(W&6)&&qn()}}function yd(){st=Wr.current,te(Wr)}function ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,AS(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Xh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pa();break;case 3:ui(),te(Ze),te(be),od();break;case 5:sd(r);break;case 4:ui();break;case 13:te(se);break;case 19:te(se);break;case 10:td(r.type._context);break;case 22:case 23:yd()}n=n.return}if(Te=t,ge=t=Ln(t.current,null),De=st=e,we=0,Ps=null,pd=kl=gr=0,Xe=as=null,rr!==null){for(e=0;e<rr.length;e++)if(n=rr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}rr=null}return t}function wv(t,e){do{var n=ge;try{if(ed(),aa.current=Ba,za){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}za=!1}if(mr=0,Ie=ye=oe=null,ss=!1,Rs=0,fd.current=null,n===null||n.return===null){we=1,Ps=e,ge=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=De,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Dp(o);if(g!==null){g.flags&=-257,xp(g,o,a,s,e),g.mode&1&&Rp(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Rp(s,u,e),vd();break e}l=Error(S(426))}}else if(re&&a.mode&1){var T=Dp(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),xp(T,o,a,s,e),Jh(ci(l,a));break e}}s=l=ci(l,a),we!==4&&(we=2),as===null?as=[s]:as.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=nv(s,l,e);Ip(s,p);break e;case 1:a=l;var d=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(On===null||!On.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=rv(s,a,e);Ip(s,w);break e}}s=s.return}while(s!==null)}_v(n)}catch(I){e=I,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(1)}function Ev(){var t=ja.current;return ja.current=Ba,t===null?Ba:t}function vd(){(we===0||we===3||we===2)&&(we=4),Te===null||!(gr&268435455)&&!(kl&268435455)||Sn(Te,De)}function Wa(t,e){var n=W;W|=2;var r=Ev();(Te!==t||De!==e)&&(Kt=null,ur(t,e));do try{ZS();break}catch(i){wv(t,i)}while(1);if(ed(),W=n,ja.current=r,ge!==null)throw Error(S(261));return Te=null,De=0,we}function ZS(){for(;ge!==null;)Sv(ge)}function e_(){for(;ge!==null&&!kE();)Sv(ge)}function Sv(t){var e=Tv(t.alternate,t,st);t.memoizedProps=t.pendingProps,e===null?_v(t):ge=e,fd.current=null}function _v(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qS(n,e),n!==null){n.flags&=32767,ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,ge=null;return}}else if(n=KS(n,e,st),n!==null){ge=n;return}if(e=e.sibling,e!==null){ge=e;return}ge=e=t}while(e!==null);we===0&&(we=5)}function er(t,e,n){var r=Q,i=yt.transition;try{yt.transition=null,Q=1,t_(t,e,n,r)}finally{yt.transition=i,Q=r}return null}function t_(t,e,n,r){do Jr();while(Cn!==null);if(W&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(LE(t,s),t===Te&&(ge=Te=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bo||(bo=!0,kv(Ca,function(){return Jr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yt.transition,yt.transition=null;var o=Q;Q=1;var a=W;W|=4,fd.current=null,QS(t,n),gv(n,t),SS(Ac),Aa=!!Nc,Ac=Nc=null,t.current=n,YS(n),CE(),W=a,Q=o,yt.transition=s}else t.current=n;if(bo&&(bo=!1,Cn=t,Ha=i),s=t.pendingLanes,s===0&&(On=null),RE(n.stateNode),tt(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ba)throw ba=!1,t=Gc,Gc=null,t;return Ha&1&&t.tag!==0&&Jr(),s=t.pendingLanes,s&1?t===Qc?ls++:(ls=0,Qc=t):ls=0,qn(),null}function Jr(){if(Cn!==null){var t=ny(Ha),e=yt.transition,n=Q;try{if(yt.transition=null,Q=16>t?16:t,Cn===null)var r=!1;else{if(t=Cn,Cn=null,Ha=0,W&6)throw Error(S(331));var i=W;for(W|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:os(8,c,s)}var h=c.child;if(h!==null)h.return=c,A=h;else for(;A!==null;){c=A;var f=c.sibling,g=c.return;if(fv(c),c===u){A=null;break}if(f!==null){f.return=g,A=f;break}A=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var T=v.sibling;v.sibling=null,v=T}while(v!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:os(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,A=p;break e}A=s.return}}var d=t.current;for(A=d;A!==null;){o=A;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,A=m;else e:for(o=d;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tl(9,a)}}catch(I){ue(a,a.return,I)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(W=i,qn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(gl,t)}catch{}r=!0}return r}finally{Q=n,yt.transition=e}}return!1}function Hp(t,e,n){e=ci(n,e),e=nv(t,e,1),t=Pn(t,e,1),e=Ge(),t!==null&&(Js(t,1,e),tt(t,e))}function ue(t,e,n){if(t.tag===3)Hp(t,t,n);else for(;e!==null;){if(e.tag===3){Hp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(On===null||!On.has(r))){t=ci(n,t),t=rv(e,t,1),e=Pn(e,t,1),t=Ge(),e!==null&&(Js(e,1,t),tt(e,t));break}}e=e.return}}function n_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ge(),t.pingedLanes|=t.suspendedLanes&n,Te===t&&(De&n)===n&&(we===4||we===3&&(De&130023424)===De&&500>de()-md?ur(t,0):pd|=n),tt(t,e)}function Iv(t,e){e===0&&(t.mode&1?(e=Oo,Oo<<=1,!(Oo&130023424)&&(Oo=4194304)):e=1);var n=Ge();t=on(t,e),t!==null&&(Js(t,e,n),tt(t,n))}function r_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Iv(t,n)}function i_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Iv(t,n)}var Tv;Tv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ze.current)Je=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Je=!1,WS(t,e,n);Je=!!(t.flags&131072)}else Je=!1,re&&e.flags&1048576&&Ay(e,La,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ua(t,e),t=e.pendingProps;var i=oi(e,be.current);Xr(e,n),i=ld(null,e,r,t,i,n);var s=ud();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,et(r)?(s=!0,Oa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rd(e),i.updater=Il,e.stateNode=i,i._reactInternals=e,Fc(e,r,t,n),e=zc(null,e,r,!0,s,n)):(e.tag=0,re&&s&&Yh(e),Ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ua(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=o_(r),t=_t(r,t),i){case 0:e=Vc(null,e,r,t,n);break e;case 1:e=Mp(null,e,r,t,n);break e;case 11:e=Pp(null,e,r,t,n);break e;case 14:e=Op(null,e,r,_t(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),Vc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),Mp(t,e,r,i,n);case 3:e:{if(av(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,My(t,e),Ua(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ci(Error(S(423)),e),e=Lp(t,e,r,n,i);break e}else if(r!==i){i=ci(Error(S(424)),e),e=Lp(t,e,r,n,i);break e}else for(ot=xn(e.stateNode.containerInfo.firstChild),at=e,re=!0,Tt=null,n=Py(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ai(),r===i){e=an(t,e,n);break e}Ke(t,e,r,n)}e=e.child}return e;case 5:return Ly(e),t===null&&Mc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Rc(r,i)?o=null:s!==null&&Rc(r,s)&&(e.flags|=32),ov(t,e),Ke(t,e,o,n),e.child;case 6:return t===null&&Mc(e),null;case 13:return lv(t,e,n);case 4:return id(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=li(e,null,r,n):Ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),Pp(t,e,r,i,n);case 7:return Ke(t,e,e.pendingProps,n),e.child;case 8:return Ke(t,e,e.pendingProps.children,n),e.child;case 12:return Ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,J($a,r._currentValue),r._currentValue=o,s!==null)if(At(s.value,o)){if(s.children===i.children&&!Ze.current){e=an(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=en(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Lc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Lc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Xr(e,n),i=vt(i),r=r(i),e.flags|=1,Ke(t,e,r,n),e.child;case 14:return r=e.type,i=_t(r,e.pendingProps),i=_t(r.type,i),Op(t,e,r,i,n);case 15:return iv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),ua(t,e),e.tag=1,et(r)?(t=!0,Oa(e)):t=!1,Xr(e,n),tv(e,r,i),Fc(e,r,i,n),zc(null,e,r,!0,t,n);case 19:return uv(t,e,n);case 22:return sv(t,e,n)}throw Error(S(156,e.tag))};function kv(t,e){return Jg(t,e)}function s_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(t,e,n,r){return new s_(t,e,n,r)}function wd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function o_(t){if(typeof t=="function")return wd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Uh)return 11;if(t===Vh)return 14}return 2}function Ln(t,e){var n=t.alternate;return n===null?(n=gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function da(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")wd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Lr:return cr(n.children,i,s,e);case Fh:o=8,i|=8;break;case ac:return t=gt(12,n,e,i|2),t.elementType=ac,t.lanes=s,t;case lc:return t=gt(13,n,e,i),t.elementType=lc,t.lanes=s,t;case uc:return t=gt(19,n,e,i),t.elementType=uc,t.lanes=s,t;case Lg:return Cl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Og:o=10;break e;case Mg:o=9;break e;case Uh:o=11;break e;case Vh:o=14;break e;case yn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=gt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function cr(t,e,n,r){return t=gt(7,t,r,e),t.lanes=n,t}function Cl(t,e,n,r){return t=gt(22,t,r,e),t.elementType=Lg,t.lanes=n,t.stateNode={isHidden:!1},t}function Lu(t,e,n){return t=gt(6,t,null,e),t.lanes=n,t}function $u(t,e,n){return e=gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function a_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gu(0),this.expirationTimes=gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ed(t,e,n,r,i,s,o,a,l){return t=new a_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rd(s),t}function l_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Cv(t){if(!t)return Bn;t=t._reactInternals;e:{if(kr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(et(n))return Cy(t,n,e)}return e}function Nv(t,e,n,r,i,s,o,a,l){return t=Ed(n,r,!0,t,i,s,o,a,l),t.context=Cv(null),n=t.current,r=Ge(),i=Mn(n),s=en(r,i),s.callback=e??null,Pn(n,s,i),t.current.lanes=i,Js(t,i,r),tt(t,r),t}function Nl(t,e,n,r){var i=e.current,s=Ge(),o=Mn(i);return n=Cv(n),e.context===null?e.context=n:e.pendingContext=n,e=en(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Pn(i,e,o),t!==null&&(Nt(t,i,o,s),oa(t,i,o)),o}function Ka(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sd(t,e){Wp(t,e),(t=t.alternate)&&Wp(t,e)}function u_(){return null}var Av=typeof reportError=="function"?reportError:function(t){console.error(t)};function _d(t){this._internalRoot=t}Al.prototype.render=_d.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Nl(t,e,null,null)};Al.prototype.unmount=_d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yr(function(){Nl(null,t,null,null)}),e[sn]=null}};function Al(t){this._internalRoot=t}Al.prototype.unstable_scheduleHydration=function(t){if(t){var e=sy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<En.length&&e!==0&&e<En[n].priority;n++);En.splice(n,0,t),n===0&&ay(t)}};function Id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function c_(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ka(o);s.call(u)}}var o=Nv(e,r,t,0,null,!1,!1,"",Kp);return t._reactRootContainer=o,t[sn]=o.current,Ts(t.nodeType===8?t.parentNode:t),yr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ka(l);a.call(u)}}var l=Ed(t,0,!1,null,null,!1,!1,"",Kp);return t._reactRootContainer=l,t[sn]=l.current,Ts(t.nodeType===8?t.parentNode:t),yr(function(){Nl(e,l,n,r)}),l}function Dl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ka(o);a.call(l)}}Nl(e,o,t,i)}else o=c_(n,e,t,i,r);return Ka(o)}ry=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qi(e.pendingLanes);n!==0&&(jh(e,n|1),tt(e,de()),!(W&6)&&(hi=de()+500,qn()))}break;case 13:yr(function(){var r=on(t,1);if(r!==null){var i=Ge();Nt(r,t,1,i)}}),Sd(t,1)}};bh=function(t){if(t.tag===13){var e=on(t,134217728);if(e!==null){var n=Ge();Nt(e,t,134217728,n)}Sd(t,134217728)}};iy=function(t){if(t.tag===13){var e=Mn(t),n=on(t,e);if(n!==null){var r=Ge();Nt(n,t,e,r)}Sd(t,e)}};sy=function(){return Q};oy=function(t,e){var n=Q;try{return Q=t,e()}finally{Q=n}};wc=function(t,e,n){switch(e){case"input":if(dc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=El(r);if(!i)throw Error(S(90));Fg(r),dc(r,i)}}}break;case"textarea":Vg(t,n);break;case"select":e=n.value,e!=null&&qr(t,!!n.multiple,e,!1)}};Kg=gd;qg=yr;var h_={usingClientEntryPoint:!1,Events:[eo,Vr,El,Hg,Wg,gd]},ji={findFiberByHostInstance:nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},d_={bundleType:ji.bundleType,version:ji.version,rendererPackageName:ji.rendererPackageName,rendererConfig:ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yg(t),t===null?null:t.stateNode},findFiberByHostInstance:ji.findFiberByHostInstance||u_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ho.isDisabled&&Ho.supportsFiber)try{gl=Ho.inject(d_),Ft=Ho}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h_;ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Id(e))throw Error(S(200));return l_(t,e,null,n)};ct.createRoot=function(t,e){if(!Id(t))throw Error(S(299));var n=!1,r="",i=Av;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ed(t,1,!1,null,null,n,!1,r,i),t[sn]=e.current,Ts(t.nodeType===8?t.parentNode:t),new _d(e)};ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Yg(e),t=t===null?null:t.stateNode,t};ct.flushSync=function(t){return yr(t)};ct.hydrate=function(t,e,n){if(!Rl(e))throw Error(S(200));return Dl(null,t,e,!0,n)};ct.hydrateRoot=function(t,e,n){if(!Id(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Av;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Nv(e,null,t,1,n??null,i,!1,s,o),t[sn]=e.current,Ts(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Al(e)};ct.render=function(t,e,n){if(!Rl(e))throw Error(S(200));return Dl(null,t,e,!1,n)};ct.unmountComponentAtNode=function(t){if(!Rl(t))throw Error(S(40));return t._reactRootContainer?(yr(function(){Dl(null,null,t,!1,function(){t._reactRootContainer=null,t[sn]=null})}),!0):!1};ct.unstable_batchedUpdates=gd;ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Rl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Dl(t,e,n,!1,r)};ct.version="18.3.1-next-f1338f8080-20240426";function Rv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rv)}catch(t){console.error(t)}}Rv(),Rg.exports=ct;var f_=Rg.exports,qp=f_;sc.createRoot=qp.createRoot,sc.hydrateRoot=qp.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},p_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},xv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):p_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new m_;const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class m_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const g_=function(t){const e=Dv(t);return xv.encodeByteArray(e,!0)},qa=function(t){return g_(t).replace(/\./g,"")},Pv=function(t){try{return xv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=()=>y_().__FIREBASE_DEFAULTS__,w_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},E_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pv(t[1]);return e&&JSON.parse(e)},Td=()=>{try{return v_()||w_()||E_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ov=t=>{var e,n;return(n=(e=Td())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},S_=t=>{const e=Ov(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Mv=()=>{var t;return(t=Td())===null||t===void 0?void 0:t.config},Lv=t=>{var e;return(e=Td())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[qa(JSON.stringify(n)),qa(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function T_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function k_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function C_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function N_(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function A_(){try{return typeof indexedDB=="object"}catch{return!1}}function R_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="FirebaseError";class pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=D_,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,no.prototype.create)}}class no{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?x_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pn(i,a,r)}}function x_(t,e){return t.replace(P_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const P_=/\{\$([^}]+)}/g;function O_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ga(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Gp(s)&&Gp(o)){if(!Ga(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Gp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function M_(t,e){const n=new L_(t,e);return n.subscribe.bind(n)}class L_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fu),i.error===void 0&&(i.error=Fu),i.complete===void 0&&(i.complete=Fu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return t&&t._delegate?t._delegate:t}class vr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new __;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(V_(e))try{this.getOrInitializeService({instanceIdentifier:tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tr){return this.instances.has(e)}getOptions(e=tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:U_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tr){return this.component?this.component.multipleInstances?e:tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function U_(t){return t===tr?void 0:t}function V_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new F_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const B_={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},j_=q.INFO,b_={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},H_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=b_[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kd{constructor(e){this.name=e,this._logLevel=j_,this._logHandler=H_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?B_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const W_=(t,e)=>e.some(n=>t instanceof n);let Qp,Yp;function K_(){return Qp||(Qp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function q_(){return Yp||(Yp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $v=new WeakMap,Jc=new WeakMap,Fv=new WeakMap,Uu=new WeakMap,Cd=new WeakMap;function G_(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n($n(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$v.set(n,t)}).catch(()=>{}),Cd.set(e,t),e}function Q_(t){if(Jc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Jc.set(t,e)}let Zc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Y_(t){Zc=t(Zc)}function X_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Vu(this),e,...n);return Fv.set(r,e.sort?e.sort():[e]),$n(r)}:q_().includes(t)?function(...e){return t.apply(Vu(this),e),$n($v.get(this))}:function(...e){return $n(t.apply(Vu(this),e))}}function J_(t){return typeof t=="function"?X_(t):(t instanceof IDBTransaction&&Q_(t),W_(t,K_())?new Proxy(t,Zc):t)}function $n(t){if(t instanceof IDBRequest)return G_(t);if(Uu.has(t))return Uu.get(t);const e=J_(t);return e!==t&&(Uu.set(t,e),Cd.set(e,t)),e}const Vu=t=>Cd.get(t);function Z_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=$n(o);return r&&o.addEventListener("upgradeneeded",l=>{r($n(o.result),l.oldVersion,l.newVersion,$n(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const eI=["get","getKey","getAll","getAllKeys","count"],tI=["put","add","delete","clear"],zu=new Map;function Xp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zu.get(e))return zu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=tI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return zu.set(e,s),s}Y_(t=>({...t,get:(e,n,r)=>Xp(e,n)||t.get(e,n,r),has:(e,n)=>!!Xp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eh="@firebase/app",Jp="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new kd("@firebase/app"),iI="@firebase/app-compat",sI="@firebase/analytics-compat",oI="@firebase/analytics",aI="@firebase/app-check-compat",lI="@firebase/app-check",uI="@firebase/auth",cI="@firebase/auth-compat",hI="@firebase/database",dI="@firebase/database-compat",fI="@firebase/functions",pI="@firebase/functions-compat",mI="@firebase/installations",gI="@firebase/installations-compat",yI="@firebase/messaging",vI="@firebase/messaging-compat",wI="@firebase/performance",EI="@firebase/performance-compat",SI="@firebase/remote-config",_I="@firebase/remote-config-compat",II="@firebase/storage",TI="@firebase/storage-compat",kI="@firebase/firestore",CI="@firebase/firestore-compat",NI="firebase",AI="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="[DEFAULT]",RI={[eh]:"fire-core",[iI]:"fire-core-compat",[oI]:"fire-analytics",[sI]:"fire-analytics-compat",[lI]:"fire-app-check",[aI]:"fire-app-check-compat",[uI]:"fire-auth",[cI]:"fire-auth-compat",[hI]:"fire-rtdb",[dI]:"fire-rtdb-compat",[fI]:"fire-fn",[pI]:"fire-fn-compat",[mI]:"fire-iid",[gI]:"fire-iid-compat",[yI]:"fire-fcm",[vI]:"fire-fcm-compat",[wI]:"fire-perf",[EI]:"fire-perf-compat",[SI]:"fire-rc",[_I]:"fire-rc-compat",[II]:"fire-gcs",[TI]:"fire-gcs-compat",[kI]:"fire-fst",[CI]:"fire-fst-compat","fire-js":"fire-js",[NI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=new Map,nh=new Map;function DI(t,e){try{t.container.addComponent(e)}catch(n){wr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function di(t){const e=t.name;if(nh.has(e))return wr.debug(`There were multiple attempts to register component ${e}.`),!1;nh.set(e,t);for(const n of Qa.values())DI(n,t);return!0}function Nd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Fn=new no("app","Firebase",xI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=AI;function Uv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:th,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Fn.create("bad-app-name",{appName:String(i)});if(n||(n=Mv()),!n)throw Fn.create("no-options");const s=Qa.get(i);if(s){if(Ga(n,s.options)&&Ga(r,s.config))return s;throw Fn.create("duplicate-app",{appName:i})}const o=new z_(i);for(const l of nh.values())o.addComponent(l);const a=new PI(n,r,o);return Qa.set(i,a),a}function Vv(t=th){const e=Qa.get(t);if(!e&&t===th&&Mv())return Uv();if(!e)throw Fn.create("no-app",{appName:t});return e}function Un(t,e,n){var r;let i=(r=RI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wr.warn(a.join(" "));return}di(new vr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="firebase-heartbeat-database",MI=1,Os="firebase-heartbeat-store";let Bu=null;function zv(){return Bu||(Bu=Z_(OI,MI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Os)}}}).catch(t=>{throw Fn.create("idb-open",{originalErrorMessage:t.message})})),Bu}async function LI(t){try{return await(await zv()).transaction(Os).objectStore(Os).get(Bv(t))}catch(e){if(e instanceof pn)wr.warn(e.message);else{const n=Fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wr.warn(n.message)}}}async function Zp(t,e){try{const r=(await zv()).transaction(Os,"readwrite");await r.objectStore(Os).put(e,Bv(t)),await r.done}catch(n){if(n instanceof pn)wr.warn(n.message);else{const r=Fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wr.warn(r.message)}}}function Bv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=1024,FI=30*24*60*60*1e3;class UI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=em();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=FI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=em(),{heartbeatsToSend:n,unsentEntries:r}=VI(this._heartbeatsCache.heartbeats),i=qa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function em(){return new Date().toISOString().substring(0,10)}function VI(t,e=$I){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),tm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return A_()?R_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await LI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function tm(t){return qa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t){di(new vr("platform-logger",e=>new nI(e),"PRIVATE")),di(new vr("heartbeat",e=>new UI(e),"PRIVATE")),Un(eh,Jp,t),Un(eh,Jp,"esm2017"),Un("fire-js","")}BI("");function Ad(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function jv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jI=jv,bv=new no("auth","Firebase",jv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=new kd("@firebase/auth");function bI(t,...e){Ya.logLevel<=q.WARN&&Ya.warn(`Auth (${Ci}): ${t}`,...e)}function fa(t,...e){Ya.logLevel<=q.ERROR&&Ya.error(`Auth (${Ci}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw Rd(t,...e)}function Vt(t,...e){return Rd(t,...e)}function Hv(t,e,n){const r=Object.assign(Object.assign({},jI()),{[e]:n});return new no("auth","Firebase",r).create(e,{appName:t.name})}function HI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&bt(t,"argument-error"),Hv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bv.create(t,...e)}function F(t,e,...n){if(!t)throw Rd(e,...n)}function Xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fa(e),new Error(e)}function ln(t,e){t||Xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WI(){return nm()==="http:"||nm()==="https:"}function nm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WI()||k_()||"connection"in navigator)?navigator.onLine:!0}function qI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n){this.shortDelay=e,this.longDelay=n,ln(n>e,"Short delay should be less than long delay!"),this.isMobile=T_()||C_()}get(){return KI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t,e){ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=new io(3e4,6e4);function Kv(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function so(t,e,n,r,i={}){return qv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ro(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Wv.fetch()(Gv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function qv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GI),e);try{const i=new XI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Hv(t,c,u);bt(t,c)}}catch(i){if(i instanceof pn)throw i;bt(t,"network-request-failed",{message:String(i)})}}async function YI(t,e,n,r,i={}){const s=await so(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Gv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Dd(t.config,i):`${t.config.apiScheme}://${i}`}class XI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vt(this.auth,"network-request-failed")),QI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Vt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(t,e){return so(t,"POST","/v1/accounts:delete",e)}async function ZI(t,e){return so(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eT(t,e=!1){const n=rt(t),r=await n.getIdToken(e),i=xd(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:us(ju(i.auth_time)),issuedAtTime:us(ju(i.iat)),expirationTime:us(ju(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ju(t){return Number(t)*1e3}function xd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pv(n);return i?JSON.parse(i):(fa("Failed to decode base64 JWT payload"),null)}catch(i){return fa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function tT(t){const e=xd(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pn&&nT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=us(this.lastLoginAt),this.creationTime=us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ms(t,ZI(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?oT(s.providerUserInfo):[],a=sT(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Qv(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function iT(t){const e=rt(t);await Xa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function oT(t){return t.map(e=>{var{providerId:n}=e,r=Ad(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aT(t,e){const n=await qv(t,{},async()=>{const r=ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Gv(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await aT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ls;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ls,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ad(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ms(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eT(this,e)}reload(){return iT(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ms(this,JI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:I,providerData:C,stsTokenManager:R}=n;F(m&&R,e,"internal-error");const N=Ls.fromJSON(this.name,R);F(typeof m=="string",e,"internal-error"),gn(h,e.name),gn(f,e.name),F(typeof w=="boolean",e,"internal-error"),F(typeof I=="boolean",e,"internal-error"),gn(g,e.name),gn(y,e.name),gn(v,e.name),gn(T,e.name),gn(p,e.name),gn(d,e.name);const K=new hr({uid:m,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:I,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:N,createdAt:p,lastLoginAt:d});return C&&Array.isArray(C)&&(K.providerData=C.map(B=>Object.assign({},B))),T&&(K._redirectEventId=T),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ls;i.updateFromServerResponse(n);const s=new hr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xa(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=new Map;function Jt(t){ln(t instanceof Function,"Expected a class definition");let e=rm.get(t);return e?(ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yv.type="NONE";const im=Yv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t,e,n){return`firebase:${t}:${e}:${n}`}class Zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pa(this.userKey,i.apiKey,s),this.fullPersistenceKey=pa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zr(Jt(im),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Jt(im);const o=pa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=hr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Zr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Zr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(t0(e))return"Blackberry";if(n0(e))return"Webos";if(Pd(e))return"Safari";if((e.includes("chrome/")||Jv(e))&&!e.includes("edge/"))return"Chrome";if(e0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xv(t=He()){return/firefox\//i.test(t)}function Pd(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jv(t=He()){return/crios\//i.test(t)}function Zv(t=He()){return/iemobile/i.test(t)}function e0(t=He()){return/android/i.test(t)}function t0(t=He()){return/blackberry/i.test(t)}function n0(t=He()){return/webos/i.test(t)}function xl(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lT(t=He()){var e;return xl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uT(){return N_()&&document.documentMode===10}function r0(t=He()){return xl(t)||e0(t)||n0(t)||t0(t)||/windows phone/i.test(t)||Zv(t)}function cT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t,e=[]){let n;switch(t){case"Browser":n=sm(He());break;case"Worker":n=`${sm(He())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ci}/${r}`}async function s0(t,e){return so(t,"GET","/v2/recaptchaConfig",Kv(t,e))}function om(t){return t!==void 0&&t.enterprise!==void 0}class o0{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function a0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Vt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",hT().appendChild(r)})}function dT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const fT="https://www.google.com/recaptcha/enterprise.js?render=",pT="recaptcha-enterprise",mT="NO_RECAPTCHA";class gT{constructor(e){this.type=pT,this.auth=oo(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{s0(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new o0(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;om(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(mT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&om(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}a0(fT+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new am(this),this.idTokenSubscription=new am(this),this.beforeStateQueue=new yT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(e))})}async initializeRecaptchaConfig(){const e=await s0(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new o0(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new gT(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new no("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Zr.create(this,[Jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=i0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function oo(t){return rt(t)}class am{constructor(e){this.auth=e,this.observer=null,this.addObserver=M_(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t,e){const n=Nd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ga(s,e??{}))return i;bt(i,"already-initialized")}return n.initialize({options:e})}function ET(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ST(t,e,n){const r=oo(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=l0(e),{host:o,port:a}=_T(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||IT()}function l0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _T(t){const e=l0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:lm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:lm(o)}}}function lm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function IT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,n){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(t,e){return YI(t,"POST","/v1/accounts:signInWithIdp",Kv(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT="http://localhost";class Er extends u0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ad(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Er(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ei(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ei(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ei(e,n)}buildRequest(){const e={requestUri:TT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ro(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends Od{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends ao{constructor(){super("facebook.com")}static credential(e){return Er._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.FACEBOOK_SIGN_IN_METHOD="facebook.com";_n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Er._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gt.credential(n,r)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends ao{constructor(){super("github.com")}static credential(e){return Er._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends ao{constructor(){super("twitter.com")}static credential(e,n){return Er._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await hr._fromIdTokenResponse(e,r,i),o=um(r);return new fi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=um(r);return new fi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function um(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja extends pn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ja.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ja(e,n,r,i)}}function c0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ja._fromErrorAndOperation(t,s,e,r):s})}async function kT(t,e,n=!1){const r=await Ms(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CT(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ms(t,c0(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=xd(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),fi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NT(t,e,n=!1){const r="signIn",i=await c0(t,r,e),s=await fi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function AT(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function RT(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function DT(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}function xT(t){return rt(t).signOut()}const Za="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Za,"1"),this.storage.removeItem(Za),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(){const t=He();return Pd(t)||xl(t)}const OT=1e3,MT=10;class d0 extends h0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=PT()&&cT(),this.fallbackToPolling=r0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);uT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,MT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}d0.type="LOCAL";const LT=d0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0 extends h0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}f0.type="SESSION";const p0=f0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Pl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await $T(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Md("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return window}function UT(t){zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function VT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BT(){return m0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="firebaseLocalStorageDb",jT=1,el="firebaseLocalStorage",y0="fbase_key";class lo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ol(t,e){return t.transaction([el],e?"readwrite":"readonly").objectStore(el)}function bT(){const t=indexedDB.deleteDatabase(g0);return new lo(t).toPromise()}function ih(){const t=indexedDB.open(g0,jT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(el,{keyPath:y0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(el)?e(r):(r.close(),await bT(),e(await ih()))})})}async function cm(t,e,n){const r=Ol(t,!0).put({[y0]:e,value:n});return new lo(r).toPromise()}async function HT(t,e){const n=Ol(t,!1).get(e),r=await new lo(n).toPromise();return r===void 0?null:r.value}function hm(t,e){const n=Ol(t,!0).delete(e);return new lo(n).toPromise()}const WT=800,KT=3;class v0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ih(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return m0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pl._getInstance(BT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await VT(),!this.activeServiceWorker)return;this.sender=new FT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ih();return await cm(e,Za,"1"),await hm(e,Za),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>HT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ol(i,!1).getAll();return new lo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}v0.type="LOCAL";const qT=v0;new io(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t,e){return e?Jt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld extends u0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GT(t){return NT(t.auth,new Ld(t),t.bypassAuthState)}function QT(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),CT(n,new Ld(t),t.bypassAuthState)}async function YT(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),kT(n,new Ld(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GT;case"linkViaPopup":case"linkViaRedirect":return YT;case"reauthViaPopup":case"reauthViaRedirect":return QT;default:bt(this.auth,"internal-error")}}resolve(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=new io(2e3,1e4);async function JT(t,e,n){const r=oo(t);HI(t,e,Od);const i=w0(r,n);return new sr(r,"signInViaPopup",e,i).executeNotNull()}class sr extends E0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){ln(this.filter.length===1,"Popup operations only handle one event");const e=Md();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,XT.get())};e()}}sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT="pendingRedirect",ma=new Map;class ek extends E0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ma.get(this.auth._key());if(!e){try{const r=await tk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ma.set(this.auth._key(),e)}return this.bypassAuthState||ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tk(t,e){const n=ik(e),r=rk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nk(t,e){ma.set(t._key(),e)}function rk(t){return Jt(t._redirectPersistence)}function ik(t){return pa(ZT,t.config.apiKey,t.name)}async function sk(t,e,n=!1){const r=oo(t),i=w0(r,e),o=await new ek(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=10*60*1e3;class ak{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!S0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ok&&this.cachedEventUids.clear(),this.cachedEventUids.has(dm(e))}saveEventToCache(e){this.cachedEventUids.add(dm(e)),this.lastProcessedEventTime=Date.now()}}function dm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function S0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return S0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uk(t,e={}){return so(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hk=/^https?/;async function dk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uk(t);for(const n of e)try{if(fk(n))return}catch{}bt(t,"unauthorized-domain")}function fk(t){const e=rh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hk.test(n))return!1;if(ck.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=new io(3e4,6e4);function fm(){const t=zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mk(t){return new Promise((e,n)=>{var r,i,s;function o(){fm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fm(),n(Vt(t,"network-request-failed"))},timeout:pk.get()})}if(!((i=(r=zt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=zt().gapi)===null||s===void 0)&&s.load)o();else{const a=dT("iframefcb");return zt()[a]=()=>{gapi.load?o():n(Vt(t,"network-request-failed"))},a0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ga=null,e})}let ga=null;function gk(t){return ga=ga||mk(t),ga}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=new io(5e3,15e3),vk="__/auth/iframe",wk="emulator/auth/iframe",Ek={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _k(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dd(e,wk):`https://${t.config.authDomain}/${vk}`,r={apiKey:e.apiKey,appName:t.name,v:Ci},i=Sk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ro(r).slice(1)}`}async function Ik(t){const e=await gk(t),n=zt().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:_k(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ek,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),a=zt().setTimeout(()=>{s(o)},yk.get());function l(){zt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kk=500,Ck=600,Nk="_blank",Ak="http://localhost";class pm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rk(t,e,n,r=kk,i=Ck){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Tk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=He().toLowerCase();n&&(a=Jv(u)?Nk:n),Xv(u)&&(e=e||Ak,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(lT(u)&&a!=="_self")return Dk(e||"",a),new pm(null);const h=window.open(e||"",a,c);F(h,t,"popup-blocked");try{h.focus()}catch{}return new pm(h)}function Dk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk="__/auth/handler",Pk="emulator/auth/handler",Ok=encodeURIComponent("fac");async function mm(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ci,eventId:i};if(e instanceof Od){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",O_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof ao){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${Ok}=${encodeURIComponent(l)}`:"";return`${Mk(t)}?${ro(a).slice(1)}${u}`}function Mk({config:t}){return t.emulator?Dd(t,Pk):`https://${t.authDomain}/${xk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="webStorageSupport";class Lk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=p0,this._completeRedirectFn=sk,this._overrideRedirectResult=nk}async _openPopup(e,n,r,i){var s;ln((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await mm(e,n,r,rh(),i);return Rk(e,o,Md())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await mm(e,n,r,rh(),i);return UT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ik(e),r=new ak(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bu,{type:bu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bu];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return r0()||Pd()||xl()}}const $k=Lk;var gm="@firebase/auth",ym="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Vk(t){di(new vr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:i0(t)},u=new vT(r,i,s,l);return ET(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),di(new vr("auth-internal",e=>{const n=oo(e.getProvider("auth").getImmediate());return(r=>new Fk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un(gm,ym,Uk(t)),Un(gm,ym,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=5*60,Bk=Lv("authIdTokenMaxAge")||zk;let vm=null;const jk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Bk)return;const i=n==null?void 0:n.token;vm!==i&&(vm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _0(t=Vv()){const e=Nd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wT(t,{popupRedirectResolver:$k,persistence:[qT,LT,p0]}),r=Lv("authTokenSyncURL");if(r){const s=jk(r);RT(n,s,()=>s(n.currentUser)),AT(n,o=>s(o))}const i=Ov("auth");return i&&ST(n,`http://${i}`),n}Vk("Browser");var bk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,$d=$d||{},L=bk||self;function Ml(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function uo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Hk(t){return Object.prototype.hasOwnProperty.call(t,Hu)&&t[Hu]||(t[Hu]=++Wk)}var Hu="closure_uid_"+(1e9*Math.random()>>>0),Wk=0;function Kk(t,e,n){return t.call.apply(t.bind,arguments)}function qk(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ze=Kk:ze=qk,ze.apply(null,arguments)}function Ko(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ce(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Gn(){this.s=this.s,this.o=this.o}var Gk=0;Gn.prototype.s=!1;Gn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Gk!=0)&&Hk(this)};Gn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Fd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function wm(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ml(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var Qk=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",()=>{},e),L.removeEventListener("test",()=>{},e)}catch{}return t}();function $s(t){return/^[\s\xa0]*$/.test(t)}function Ll(){var t=L.navigator;return t&&(t=t.userAgent)?t:""}function Ot(t){return Ll().indexOf(t)!=-1}function Ud(t){return Ud[" "](t),t}Ud[" "]=function(){};function Yk(t,e){var n=j2;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Xk=Ot("Opera"),pi=Ot("Trident")||Ot("MSIE"),T0=Ot("Edge"),sh=T0||pi,k0=Ot("Gecko")&&!(Ll().toLowerCase().indexOf("webkit")!=-1&&!Ot("Edge"))&&!(Ot("Trident")||Ot("MSIE"))&&!Ot("Edge"),Jk=Ll().toLowerCase().indexOf("webkit")!=-1&&!Ot("Edge");function C0(){var t=L.document;return t?t.documentMode:void 0}var oh;e:{var Wu="",Ku=function(){var t=Ll();if(k0)return/rv:([^\);]+)(\)|;)/.exec(t);if(T0)return/Edge\/([\d\.]+)/.exec(t);if(pi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Jk)return/WebKit\/(\S+)/.exec(t);if(Xk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ku&&(Wu=Ku?Ku[1]:""),pi){var qu=C0();if(qu!=null&&qu>parseFloat(Wu)){oh=String(qu);break e}}oh=Wu}var ah;if(L.document&&pi){var Em=C0();ah=Em||parseInt(oh,10)||void 0}else ah=void 0;var Zk=ah;function Fs(t,e){if(Be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(k0){e:{try{Ud(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:e2[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Fs.$.h.call(this)}}Ce(Fs,Be);var e2={2:"touch",3:"pen",4:"mouse"};Fs.prototype.h=function(){Fs.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var co="closure_listenable_"+(1e6*Math.random()|0),t2=0;function n2(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++t2,this.fa=this.ia=!1}function $l(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Vd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function r2(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function N0(t){const e={};for(const n in t)e[n]=t[n];return e}const Sm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Sm.length;s++)n=Sm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Fl(t){this.src=t,this.g={},this.h=0}Fl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=uh(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new n2(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function lh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=I0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&($l(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function uh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var zd="closure_lm_"+(1e6*Math.random()|0),Gu={};function R0(t,e,n,r,i){if(r&&r.once)return x0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)R0(t,e[s],n,r,i);return null}return n=bd(n),t&&t[co]?t.O(e,n,uo(r)?!!r.capture:!!r,i):D0(t,e,n,!1,r,i)}function D0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=uo(i)?!!i.capture:!!i,a=jd(t);if(a||(t[zd]=a=new Fl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=i2(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Qk||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(O0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function i2(){function t(n){return e.call(t.src,t.listener,n)}const e=s2;return t}function x0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)x0(t,e[s],n,r,i);return null}return n=bd(n),t&&t[co]?t.P(e,n,uo(r)?!!r.capture:!!r,i):D0(t,e,n,!0,r,i)}function P0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)P0(t,e[s],n,r,i);else r=uo(r)?!!r.capture:!!r,n=bd(n),t&&t[co]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=uh(s,n,r,i),-1<n&&($l(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=jd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=uh(e,n,r,i)),(n=-1<t?e[t]:null)&&Bd(n))}function Bd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[co])lh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(O0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=jd(e))?(lh(n,t),n.h==0&&(n.src=null,e[zd]=null)):$l(t)}}}function O0(t){return t in Gu?Gu[t]:Gu[t]="on"+t}function s2(t,e){if(t.fa)t=!0;else{e=new Fs(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Bd(t),t=n.call(r,e)}return t}function jd(t){return t=t[zd],t instanceof Fl?t:null}var Qu="__closure_events_fn_"+(1e9*Math.random()>>>0);function bd(t){return typeof t=="function"?t:(t[Qu]||(t[Qu]=function(e){return t.handleEvent(e)}),t[Qu])}function ke(){Gn.call(this),this.i=new Fl(this),this.S=this,this.J=null}Ce(ke,Gn);ke.prototype[co]=!0;ke.prototype.removeEventListener=function(t,e,n,r){P0(this,t,e,n,r)};function xe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Be(e,t);else if(e instanceof Be)e.target=e.target||t;else{var i=e;e=new Be(r,t),A0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=qo(o,r,!0,e)&&i}if(o=e.g=t,i=qo(o,r,!0,e)&&i,i=qo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=qo(o,r,!1,e)&&i}ke.prototype.N=function(){if(ke.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)$l(n[r]);delete t.g[e],t.h--}}this.J=null};ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ke.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function qo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&lh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Hd=L.JSON.stringify;class o2{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function a2(){var t=Wd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class l2{constructor(){this.h=this.g=null}add(e,n){const r=M0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var M0=new o2(()=>new u2,t=>t.reset());class u2{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function c2(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function h2(t){L.setTimeout(()=>{throw t},0)}let Us,Vs=!1,Wd=new l2,L0=()=>{const t=L.Promise.resolve(void 0);Us=()=>{t.then(d2)}};var d2=()=>{for(var t;t=a2();){try{t.h.call(t.g)}catch(n){h2(n)}var e=M0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vs=!1};function Ul(t,e){ke.call(this),this.h=t||1,this.g=e||L,this.j=ze(this.qb,this),this.l=Date.now()}Ce(Ul,ke);k=Ul.prototype;k.ga=!1;k.T=null;k.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),xe(this,"tick"),this.ga&&(Kd(this),this.start()))}};k.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Kd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}k.N=function(){Ul.$.N.call(this),Kd(this),delete this.g};function qd(t,e,n){if(typeof t=="function")n&&(t=ze(t,n));else if(t&&typeof t.handleEvent=="function")t=ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function $0(t){t.g=qd(()=>{t.g=null,t.i&&(t.i=!1,$0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class f2 extends Gn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$0(this)}N(){super.N(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zs(t){Gn.call(this),this.h=t,this.g={}}Ce(zs,Gn);var _m=[];function F0(t,e,n,r){Array.isArray(n)||(n&&(_m[0]=n.toString()),n=_m);for(var i=0;i<n.length;i++){var s=R0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function U0(t){Vd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Bd(e)},t),t.g={}}zs.prototype.N=function(){zs.$.N.call(this),U0(this)};zs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Vl(){this.g=!0}Vl.prototype.Ea=function(){this.g=!1};function p2(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function m2(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Kr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+y2(t,n)+(r?" "+r:"")})}function g2(t,e){t.info(function(){return"TIMEOUT: "+e})}Vl.prototype.info=function(){};function y2(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Hd(n)}catch{return e}}var Cr={},Im=null;function zl(){return Im=Im||new ke}Cr.Ta="serverreachability";function V0(t){Be.call(this,Cr.Ta,t)}Ce(V0,Be);function Bs(t){const e=zl();xe(e,new V0(e))}Cr.STAT_EVENT="statevent";function z0(t,e){Be.call(this,Cr.STAT_EVENT,t),this.stat=e}Ce(z0,Be);function qe(t){const e=zl();xe(e,new z0(e,t))}Cr.Ua="timingevent";function B0(t,e){Be.call(this,Cr.Ua,t),this.size=e}Ce(B0,Be);function ho(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var Bl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},j0={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Gd(){}Gd.prototype.h=null;function Tm(t){return t.h||(t.h=t.i())}function b0(){}var fo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Qd(){Be.call(this,"d")}Ce(Qd,Be);function Yd(){Be.call(this,"c")}Ce(Yd,Be);var ch;function jl(){}Ce(jl,Gd);jl.prototype.g=function(){return new XMLHttpRequest};jl.prototype.i=function(){return{}};ch=new jl;function po(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new zs(this),this.P=v2,t=sh?125:void 0,this.V=new Ul(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new H0}function H0(){this.i=null,this.g="",this.h=!1}var v2=45e3,hh={},tl={};k=po.prototype;k.setTimeout=function(t){this.P=t};function dh(t,e,n){t.L=1,t.v=Hl(un(e)),t.s=n,t.S=!0,W0(t,null)}function W0(t,e){t.G=Date.now(),mo(t),t.A=un(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Z0(n.i,"t",r),t.C=0,n=t.l.J,t.h=new H0,t.g=E1(t.l,n?e:null,!t.s),0<t.O&&(t.M=new f2(ze(t.Pa,t,t.g),t.O)),F0(t.U,t.g,"readystatechange",t.nb),e=t.I?N0(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Bs(),p2(t.j,t.u,t.A,t.m,t.W,t.s)}k.nb=function(t){t=t.target;const e=this.M;e&&Lt(t)==3?e.l():this.Pa(t)};k.Pa=function(t){try{if(t==this.g)e:{const c=Lt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||sh||this.g&&(this.h.h||this.g.ja()||Am(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Bs(3):Bs(2)),bl(this);var n=this.g.da();this.ca=n;t:if(K0(this)){var r=Am(this.g);t="";var i=r.length,s=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),cs(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,m2(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$s(a)){var u=a;break t}}u=null}if(n=u)Kr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fh(this,n);else{this.i=!1,this.o=3,qe(12),or(this),cs(this);break e}}this.S?(q0(this,c,o),sh&&this.i&&c==3&&(F0(this.U,this.V,"tick",this.mb),this.V.start())):(Kr(this.j,this.m,o,null),fh(this,o)),c==4&&or(this),this.i&&!this.J&&(c==4?g1(this.l,this):(this.i=!1,mo(this)))}else V2(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,qe(12)):(this.o=0,qe(13)),or(this),cs(this)}}}catch{}finally{}};function K0(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function q0(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=w2(t,n),i==tl){e==4&&(t.o=4,qe(14),r=!1),Kr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==hh){t.o=4,qe(15),Kr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Kr(t.j,t.m,i,null),fh(t,i);K0(t)&&i!=tl&&i!=hh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,qe(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nf(e),e.M=!0,qe(11))):(Kr(t.j,t.m,n,"[Invalid Chunked Response]"),or(t),cs(t))}k.mb=function(){if(this.g){var t=Lt(this.g),e=this.g.ja();this.C<e.length&&(bl(this),q0(this,t,e),this.i&&t!=4&&mo(this))}};function w2(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?tl:(n=Number(e.substring(n,r)),isNaN(n)?hh:(r+=1,r+n>e.length?tl:(e=e.slice(r,r+n),t.C=r+n,e)))}k.cancel=function(){this.J=!0,or(this)};function mo(t){t.Y=Date.now()+t.P,G0(t,t.P)}function G0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ho(ze(t.lb,t),e)}function bl(t){t.B&&(L.clearTimeout(t.B),t.B=null)}k.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(g2(this.j,this.A),this.L!=2&&(Bs(),qe(17)),or(this),this.o=2,cs(this)):G0(this,this.Y-t)};function cs(t){t.l.H==0||t.J||g1(t.l,t)}function or(t){bl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Kd(t.V),U0(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function fh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ph(n.i,t))){if(!t.K&&ph(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)il(n),ql(n);else break e;tf(n),qe(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ho(ze(n.ib,n),6e3));if(1>=n1(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ar(n,11)}else if((t.K||n.g==t)&&il(n),!$s(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Xd(s,s.h),s.h=null))}if(r.F){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ee(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=w1(r,r.J?r.pa:null,r.Y),o.K){r1(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(bl(a),mo(a)),r.g=o}else p1(r);0<n.j.length&&Gl(n)}else u[0]!="stop"&&u[0]!="close"||ar(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ar(n,7):ef(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Bs(4)}catch{}}function E2(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ml(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function S2(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ml(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Q0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ml(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=S2(t),r=E2(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Y0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _2(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function dr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof dr){this.h=t.h,nl(this,t.j),this.s=t.s,this.g=t.g,rl(this,t.m),this.l=t.l;var e=t.i,n=new js;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),km(this,n),this.o=t.o}else t&&(e=String(t).match(Y0))?(this.h=!1,nl(this,e[1]||"",!0),this.s=Qi(e[2]||""),this.g=Qi(e[3]||"",!0),rl(this,e[4]),this.l=Qi(e[5]||"",!0),km(this,e[6]||"",!0),this.o=Qi(e[7]||"")):(this.h=!1,this.i=new js(null,this.h))}dr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Yi(e,Cm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Yi(e,Cm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Yi(n,n.charAt(0)=="/"?k2:T2,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Yi(n,N2)),t.join("")};function un(t){return new dr(t)}function nl(t,e,n){t.j=n?Qi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function rl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function km(t,e,n){e instanceof js?(t.i=e,A2(t.i,t.h)):(n||(e=Yi(e,C2)),t.i=new js(e,t.h))}function ee(t,e,n){t.i.set(e,n)}function Hl(t){return ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Yi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,I2),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function I2(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Cm=/[#\/\?@]/g,T2=/[#\?:]/g,k2=/[#\?]/g,C2=/[#\?@]/g,N2=/#/g;function js(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qn(t){t.g||(t.g=new Map,t.h=0,t.i&&_2(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=js.prototype;k.add=function(t,e){Qn(this),this.i=null,t=Ni(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function X0(t,e){Qn(t),e=Ni(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function J0(t,e){return Qn(t),e=Ni(t,e),t.g.has(e)}k.forEach=function(t,e){Qn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};k.ta=function(){Qn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};k.Z=function(t){Qn(this);let e=[];if(typeof t=="string")J0(this,t)&&(e=e.concat(this.g.get(Ni(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k.set=function(t,e){return Qn(this),this.i=null,t=Ni(this,t),J0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Z0(t,e,n){X0(t,e),0<n.length&&(t.i=null,t.g.set(Ni(t,e),Fd(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ni(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function A2(t,e){e&&!t.j&&(Qn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(X0(this,r),Z0(this,i,n))},t)),t.j=e}var R2=class{constructor(t,e){this.g=t,this.map=e}};function e1(t){this.l=t||D2,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ka&&L.g.Ka()&&L.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var D2=10;function t1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function n1(t){return t.h?1:t.g?t.g.size:0}function ph(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Xd(t,e){t.g?t.g.add(e):t.h=e}function r1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}e1.prototype.cancel=function(){if(this.i=i1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function i1(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Fd(t.i)}var x2=class{stringify(t){return L.JSON.stringify(t,void 0)}parse(t){return L.JSON.parse(t,void 0)}};function P2(){this.g=new x2}function O2(t,e,n){const r=n||"";try{Q0(t,function(i,s){let o=i;uo(i)&&(o=Hd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function M2(t,e){const n=new Vl;if(L.Image){const r=new Image;r.onload=Ko(Go,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ko(Go,n,r,"TestLoadImage: error",!1,e),r.onabort=Ko(Go,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ko(Go,n,r,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Go(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function go(t){this.l=t.fc||null,this.j=t.ob||!1}Ce(go,Gd);go.prototype.g=function(){return new Wl(this.l,this.j)};go.prototype.i=function(t){return function(){return t}}({});function Wl(t,e){ke.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Jd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ce(Wl,ke);var Jd=0;k=Wl.prototype;k.open=function(t,e){if(this.readyState!=Jd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bs(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||L).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yo(this)),this.readyState=Jd};k.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;s1(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function s1(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}k.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?yo(this):bs(this),this.readyState==3&&s1(this)}};k.Za=function(t){this.g&&(this.response=this.responseText=t,yo(this))};k.Ya=function(t){this.g&&(this.response=t,yo(this))};k.ka=function(){this.g&&yo(this)};function yo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bs(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var L2=L.JSON.parse;function ce(t){ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=o1,this.L=this.M=!1}Ce(ce,ke);var o1="",$2=/^https?$/i,F2=["POST","PUT"];k=ce.prototype;k.Oa=function(t){this.M=t};k.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ch.g(),this.C=this.u?Tm(this.u):Tm(ch),this.g.onreadystatechange=ze(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Nm(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=L.FormData&&t instanceof L.FormData,!(0<=I0(F2,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{u1(this),0<this.B&&((this.L=U2(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ze(this.ua,this)):this.A=qd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Nm(this,s)}};function U2(t){return pi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k.ua=function(){typeof $d<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xe(this,"timeout"),this.abort(8))};function Nm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,a1(t),Kl(t)}function a1(t){t.F||(t.F=!0,xe(t,"complete"),xe(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xe(this,"complete"),xe(this,"abort"),Kl(this))};k.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kl(this,!0)),ce.$.N.call(this)};k.La=function(){this.s||(this.G||this.v||this.l?l1(this):this.kb())};k.kb=function(){l1(this)};function l1(t){if(t.h&&typeof $d<"u"&&(!t.C[1]||Lt(t)!=4||t.da()!=2)){if(t.v&&Lt(t)==4)qd(t.La,0,t);else if(xe(t,"readystatechange"),Lt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Y0)[1]||null;!i&&L.self&&L.self.location&&(i=L.self.location.protocol.slice(0,-1)),r=!$2.test(i?i.toLowerCase():"")}n=r}if(n)xe(t,"complete"),xe(t,"success");else{t.m=6;try{var s=2<Lt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",a1(t)}}finally{Kl(t)}}}}function Kl(t,e){if(t.g){u1(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||xe(t,"ready");try{n.onreadystatechange=r}catch{}}}function u1(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}k.isActive=function(){return!!this.g};function Lt(t){return t.g?t.g.readyState:0}k.da=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}};k.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),L2(e)}};function Am(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case o1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function V2(t){const e={};t=(t.g&&2<=Lt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if($s(t[r]))continue;var n=c2(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}r2(e,function(r){return r.join(", ")})}k.Ia=function(){return this.m};k.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function c1(t){let e="";return Vd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Zd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=c1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ee(t,e,n))}function bi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function h1(t){this.Ga=0,this.j=[],this.l=new Vl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=bi("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=bi("baseRetryDelayMs",5e3,t),this.hb=bi("retryDelaySeedMs",1e4,t),this.eb=bi("forwardChannelMaxRetries",2,t),this.xa=bi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new e1(t&&t.concurrentRequestLimit),this.Ja=new P2,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}k=h1.prototype;k.ra=8;k.H=1;function ef(t){if(d1(t),t.H==3){var e=t.W++,n=un(t.I);if(ee(n,"SID",t.K),ee(n,"RID",e),ee(n,"TYPE","terminate"),vo(t,n),e=new po(t,t.l,e),e.L=2,e.v=Hl(un(n)),n=!1,L.navigator&&L.navigator.sendBeacon)try{n=L.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=E1(e.l,null),e.g.ha(e.v)),e.G=Date.now(),mo(e)}v1(t)}function ql(t){t.g&&(nf(t),t.g.cancel(),t.g=null)}function d1(t){ql(t),t.u&&(L.clearTimeout(t.u),t.u=null),il(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function Gl(t){if(!t1(t.i)&&!t.m){t.m=!0;var e=t.Na;Us||L0(),Vs||(Us(),Vs=!0),Wd.add(e,t),t.C=0}}function z2(t,e){return n1(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ho(ze(t.Na,t,e),y1(t,t.C)),t.C++,!0)}k.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new po(this,this.l,t);let s=this.s;if(this.U&&(s?(s=N0(s),A0(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=f1(this,i,e),n=un(this.I),ee(n,"RID",t),ee(n,"CVER",22),this.F&&ee(n,"X-HTTP-Session-Id",this.F),vo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(c1(s)))+"&"+e:this.o&&Zd(n,this.o,s)),Xd(this.i,i),this.bb&&ee(n,"TYPE","init"),this.P?(ee(n,"$req",e),ee(n,"SID","null"),i.aa=!0,dh(i,n,null)):dh(i,n,e),this.H=2}}else this.H==3&&(t?Rm(this,t):this.j.length==0||t1(this.i)||Rm(this))};function Rm(t,e){var n;e?n=e.m:n=t.W++;const r=un(t.I);ee(r,"SID",t.K),ee(r,"RID",n),ee(r,"AID",t.V),vo(t,r),t.o&&t.s&&Zd(r,t.o,t.s),n=new po(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=f1(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Xd(t.i,n),dh(n,r,e)}function vo(t,e){t.na&&Vd(t.na,function(n,r){ee(e,r,n)}),t.h&&Q0({},function(n,r){ee(e,r,n)})}function f1(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ze(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{O2(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function p1(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Us||L0(),Vs||(Us(),Vs=!0),Wd.add(e,t),t.A=0}}function tf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ho(ze(t.Ma,t),y1(t,t.A)),t.A++,!0)}k.Ma=function(){if(this.u=null,m1(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ho(ze(this.jb,this),t)}};k.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,qe(10),ql(this),m1(this))};function nf(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function m1(t){t.g=new po(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=un(t.wa);ee(e,"RID","rpc"),ee(e,"SID",t.K),ee(e,"AID",t.V),ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ee(e,"TO",t.qa),ee(e,"TYPE","xmlhttp"),vo(t,e),t.o&&t.s&&Zd(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Hl(un(e)),n.s=null,n.S=!0,W0(n,t)}k.ib=function(){this.v!=null&&(this.v=null,ql(this),tf(this),qe(19))};function il(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function g1(t,e){var n=null;if(t.g==e){il(t),nf(t),t.g=null;var r=2}else if(ph(t.i,e))n=e.F,r1(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=zl(),xe(r,new B0(r,n)),Gl(t)}else p1(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&z2(t,e)||r==2&&tf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ar(t,5);break;case 4:ar(t,10);break;case 3:ar(t,6);break;default:ar(t,2)}}}function y1(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ar(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ze(t.pb,t);n||(n=new dr("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||nl(n,"https"),Hl(n)),M2(n.toString(),r)}else qe(2);t.H=0,t.h&&t.h.za(e),v1(t),d1(t)}k.pb=function(t){t?(this.l.info("Successfully pinged google.com"),qe(2)):(this.l.info("Failed to ping google.com"),qe(1))};function v1(t){if(t.H=0,t.ma=[],t.h){const e=i1(t.i);(e.length!=0||t.j.length!=0)&&(wm(t.ma,e),wm(t.ma,t.j),t.i.i.length=0,Fd(t.j),t.j.length=0),t.h.ya()}}function w1(t,e,n){var r=n instanceof dr?un(n):new dr(n);if(r.g!="")e&&(r.g=e+"."+r.g),rl(r,r.m);else{var i=L.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new dr(null);r&&nl(s,r),e&&(s.g=e),i&&rl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ee(r,n,e),ee(r,"VER",t.ra),vo(t,r),r}function E1(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ce(new go({ob:!0})):new ce(t.va),e.Oa(t.J),e}k.isActive=function(){return!!this.h&&this.h.isActive(this)};function S1(){}k=S1.prototype;k.Ba=function(){};k.Aa=function(){};k.za=function(){};k.ya=function(){};k.isActive=function(){return!0};k.Va=function(){};function sl(){if(pi&&!(10<=Number(Zk)))throw Error("Environmental error: no available transport.")}sl.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){ke.call(this),this.g=new h1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!$s(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$s(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ai(this)}Ce(ut,ke);ut.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;qe(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=w1(t,null,t.Y),Gl(t)};ut.prototype.close=function(){ef(this.g)};ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Hd(t),t=n);e.j.push(new R2(e.fb++,t)),e.H==3&&Gl(e)};ut.prototype.N=function(){this.g.h=null,delete this.j,ef(this.g),delete this.g,ut.$.N.call(this)};function _1(t){Qd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ce(_1,Qd);function I1(){Yd.call(this),this.status=1}Ce(I1,Yd);function Ai(t){this.g=t}Ce(Ai,S1);Ai.prototype.Ba=function(){xe(this.g,"a")};Ai.prototype.Aa=function(t){xe(this.g,new _1(t))};Ai.prototype.za=function(t){xe(this.g,new I1)};Ai.prototype.ya=function(){xe(this.g,"b")};function B2(){this.blockSize=-1}function Rt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ce(Rt,B2);Rt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Yu(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Rt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Yu(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Yu(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Yu(this,r),i=0;break}}this.h=i,this.i+=e};Rt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Y(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var j2={};function rf(t){return-128<=t&&128>t?Yk(t,function(e){return new Y([e|0],0>e?-1:0)}):new Y([t|0],0>t?-1:0)}function $t(t){if(isNaN(t)||!isFinite(t))return ti;if(0>t)return Re($t(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=mh;return new Y(e,0)}function T1(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Re(T1(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=$t(Math.pow(e,8)),r=ti,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=$t(Math.pow(e,s)),r=r.R(s).add($t(o))):(r=r.R(n),r=r.add($t(o)))}return r}var mh=4294967296,ti=rf(0),gh=rf(1),Dm=rf(16777216);k=Y.prototype;k.ea=function(){if(pt(this))return-Re(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:mh+r)*e,e*=mh}return t};k.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Zt(this))return"0";if(pt(this))return"-"+Re(this).toString(t);for(var e=$t(Math.pow(t,6)),n=this,r="";;){var i=al(n,e).g;n=ol(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Zt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};k.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Zt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function pt(t){return t.h==-1}k.X=function(t){return t=ol(this,t),pt(t)?-1:Zt(t)?0:1};function Re(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Y(n,~t.h).add(gh)}k.abs=function(){return pt(this)?Re(this):this};k.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Y(n,n[n.length-1]&-2147483648?-1:0)};function ol(t,e){return t.add(Re(e))}k.R=function(t){if(Zt(this)||Zt(t))return ti;if(pt(this))return pt(t)?Re(this).R(Re(t)):Re(Re(this).R(t));if(pt(t))return Re(this.R(Re(t)));if(0>this.X(Dm)&&0>t.X(Dm))return $t(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Qo(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Qo(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Qo(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Qo(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Y(n,0)};function Qo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Hi(t,e){this.g=t,this.h=e}function al(t,e){if(Zt(e))throw Error("division by zero");if(Zt(t))return new Hi(ti,ti);if(pt(t))return e=al(Re(t),e),new Hi(Re(e.g),Re(e.h));if(pt(e))return e=al(t,Re(e)),new Hi(Re(e.g),e.h);if(30<t.g.length){if(pt(t)||pt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=gh,r=e;0>=r.X(t);)n=xm(n),r=xm(r);var i=Dr(n,1),s=Dr(r,1);for(r=Dr(r,2),n=Dr(n,2);!Zt(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Dr(r,1),n=Dr(n,1)}return e=ol(t,i.R(e)),new Hi(i,e)}for(i=ti;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=$t(n),o=s.R(e);pt(o)||0<o.X(t);)n-=r,s=$t(n),o=s.R(e);Zt(s)&&(s=gh),i=i.add(s),t=ol(t,o)}return new Hi(i,t)}k.gb=function(t){return al(this,t).h};k.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Y(n,this.h&t.h)};k.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Y(n,this.h|t.h)};k.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Y(n,this.h^t.h)};function xm(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Y(n,t.h)}function Dr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Y(i,t.h)}sl.prototype.createWebChannel=sl.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;Bl.NO_ERROR=0;Bl.TIMEOUT=8;Bl.HTTP_ERROR=6;j0.COMPLETE="complete";b0.EventType=fo;fo.OPEN="a";fo.CLOSE="b";fo.ERROR="c";fo.MESSAGE="d";ke.prototype.listen=ke.prototype.O;ce.prototype.listenOnce=ce.prototype.P;ce.prototype.getLastError=ce.prototype.Sa;ce.prototype.getLastErrorCode=ce.prototype.Ia;ce.prototype.getStatus=ce.prototype.da;ce.prototype.getResponseJson=ce.prototype.Wa;ce.prototype.getResponseText=ce.prototype.ja;ce.prototype.send=ce.prototype.ha;ce.prototype.setWithCredentials=ce.prototype.Oa;Rt.prototype.digest=Rt.prototype.l;Rt.prototype.reset=Rt.prototype.reset;Rt.prototype.update=Rt.prototype.j;Y.prototype.add=Y.prototype.add;Y.prototype.multiply=Y.prototype.R;Y.prototype.modulo=Y.prototype.gb;Y.prototype.compare=Y.prototype.X;Y.prototype.toNumber=Y.prototype.ea;Y.prototype.toString=Y.prototype.toString;Y.prototype.getBits=Y.prototype.D;Y.fromNumber=$t;Y.fromString=T1;var b2=function(){return new sl},H2=function(){return zl()},Xu=Bl,W2=j0,K2=Cr,Pm={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},q2=go,Yo=b0,G2=ce,Q2=Rt,ni=Y;const Om="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new kd("@firebase/firestore");function Mm(){return Sr.logLevel}function x(t,...e){if(Sr.logLevel<=q.DEBUG){const n=e.map(sf);Sr.debug(`Firestore (${Ri}): ${t}`,...n)}}function cn(t,...e){if(Sr.logLevel<=q.ERROR){const n=e.map(sf);Sr.error(`Firestore (${Ri}): ${t}`,...n)}}function mi(t,...e){if(Sr.logLevel<=q.WARN){const n=e.map(sf);Sr.warn(`Firestore (${Ri}): ${t}`,...n)}}function sf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t="Unexpected state"){const e=`FIRESTORE (${Ri}) INTERNAL ASSERTION FAILED: `+t;throw cn(e),new Error(e)}function ne(t,e){t||M()}function U(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Y2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n($e.UNAUTHENTICATED))}shutdown(){}}class X2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class J2{constructor(e){this.t=e,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new tn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ne(typeof r.accessToken=="string"),new k1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string"),new $e(e)}}class Z2{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class eC{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new Z2(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n($e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nC{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ne(typeof n.token=="string"),this.T=n.token,new tC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=rC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function G(t,e){return t<e?-1:t>e?1:0}function gi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ee(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new Ee(0,0))}static max(){return new $(new Ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n,r){n===void 0?n=0:n>e.length&&M(),r===void 0?r=e.length-n:r>e.length-n&&M(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Hs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends Hs{construct(e,n,r){return new ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const iC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends Hs{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return iC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new P(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new P(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new P(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new P(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(ie.fromString(e))}static fromName(e){return new O(ie.fromString(e).popFirst(5))}static empty(){return new O(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new ie(e.slice()))}}function sC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=$.fromTimestamp(r===1e9?new Ee(n+1,0):new Ee(n,r));return new jn(i,O.empty(),e)}function oC(t){return new jn(t.readTime,t.key,-1)}class jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new jn($.min(),O.empty(),-1)}static max(){return new jn($.max(),O.empty(),-1)}}function aC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:G(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==lC)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new _((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new _((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Eo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}of.ct=-1;function Ql(t){return t==null}function ll(t){return t===0&&1/t==-1/0}function cC(t){return typeof t=="number"&&Number.isInteger(t)&&!ll(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Di(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function N1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){this.comparator=e,this.root=n||Ae.EMPTY}insert(e,n){return new le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xo(this.root,e,this.comparator,!0)}}class Xo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ae.RED,this.left=i??Ae.EMPTY,this.right=s??Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ae(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ae.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ae(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $m(this.data.getIterator())}getIteratorFrom(e){return new $m(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class $m{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new kt([])}unionWith(e){let n=new je(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new A1("Invalid base64 string: "+i):i}}(e);return new We(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const hC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bn(t){if(ne(!!t),typeof t=="string"){let e=0;const n=hC.exec(t);if(ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _r(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lf(t){const e=t.mapValue.fields.__previous_value__;return af(e)?lf(e):e}function Ws(t){const e=bn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ks{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ks("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ks&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?af(t)?4:fC(t)?9007199254740991:10:M()}function Ht(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ws(t).isEqual(Ws(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=bn(r.timestampValue),o=bn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return _r(r.bytesValue).isEqual(_r(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return me(r.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(r.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return me(r.integerValue)===me(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=me(r.doubleValue),o=me(i.doubleValue);return s===o?ll(s)===ll(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return gi(t.arrayValue.values||[],e.arrayValue.values||[],Ht);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Lm(s)!==Lm(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Ht(s[a],o[a])))return!1;return!0}(t,e);default:return M()}}function qs(t,e){return(t.values||[]).find(n=>Ht(n,e))!==void 0}function yi(t,e){if(t===e)return 0;const n=Ir(t),r=Ir(e);if(n!==r)return G(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=me(i.integerValue||i.doubleValue),a=me(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Fm(t.timestampValue,e.timestampValue);case 4:return Fm(Ws(t),Ws(e));case 5:return G(t.stringValue,e.stringValue);case 6:return function(i,s){const o=_r(i),a=_r(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=G(o[l],a[l]);if(u!==0)return u}return G(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=G(me(i.latitude),me(s.latitude));return o!==0?o:G(me(i.longitude),me(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=yi(o[l],a[l]);if(u)return u}return G(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Jo.mapValue&&s===Jo.mapValue)return 0;if(i===Jo.mapValue)return 1;if(s===Jo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=G(a[c],u[c]);if(h!==0)return h;const f=yi(o[a[c]],l[u[c]]);if(f!==0)return f}return G(a.length,u.length)}(t.mapValue,e.mapValue);default:throw M()}}function Fm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return G(t,e);const n=bn(t),r=bn(e),i=G(n.seconds,r.seconds);return i!==0?i:G(n.nanos,r.nanos)}function vi(t){return yh(t)}function yh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=bn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?_r(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=yh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${yh(r.fields[a])}`;return s+"}"}(t.mapValue):M();var e,n}function vh(t){return!!t&&"integerValue"in t}function uf(t){return!!t&&"arrayValue"in t}function Um(t){return!!t&&"nullValue"in t}function Vm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ya(t){return!!t&&"mapValue"in t}function hs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Di(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=hs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function fC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ya(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hs(n)}setAll(e){let n=Ve.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=hs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ya(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ht(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ya(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Di(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(hs(this.value))}}function R1(t){const e=[];return Di(t.fields,(n,r)=>{const i=new Ve([n]);if(ya(r)){const s=R1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ue(e,0,$.min(),$.min(),$.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ue(e,1,n,$.min(),r,i,0)}static newNoDocument(e,n){return new Ue(e,2,n,$.min(),$.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new Ue(e,3,n,$.min(),$.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.position=e,this.inclusive=n}}function zm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),n.key):r=yi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ht(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n="asc"){this.field=e,this.dir=n}}function pC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{}class ve extends D1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new gC(e,n,r):n==="array-contains"?new wC(e,r):n==="in"?new EC(e,r):n==="not-in"?new SC(e,r):n==="array-contains-any"?new _C(e,r):new ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new yC(e,r):new vC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(yi(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.matchesComparison(yi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Wt extends D1{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Wt(e,n)}matches(e){return x1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function x1(t){return t.op==="and"}function P1(t){return mC(t)&&x1(t)}function mC(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function wh(t){if(t instanceof ve)return t.field.canonicalString()+t.op.toString()+vi(t.value);if(P1(t))return t.filters.map(e=>wh(e)).join(",");{const e=t.filters.map(n=>wh(n)).join(",");return`${t.op}(${e})`}}function O1(t,e){return t instanceof ve?function(n,r){return r instanceof ve&&n.op===r.op&&n.field.isEqual(r.field)&&Ht(n.value,r.value)}(t,e):t instanceof Wt?function(n,r){return r instanceof Wt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&O1(s,r.filters[o]),!0):!1}(t,e):void M()}function M1(t){return t instanceof ve?function(e){return`${e.field.canonicalString()} ${e.op} ${vi(e.value)}`}(t):t instanceof Wt?function(e){return e.op.toString()+" {"+e.getFilters().map(M1).join(" ,")+"}"}(t):"Filter"}class gC extends ve{constructor(e,n,r){super(e,n,r),this.key=O.fromName(r.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class yC extends ve{constructor(e,n){super(e,"in",n),this.keys=L1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vC extends ve{constructor(e,n){super(e,"not-in",n),this.keys=L1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function L1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>O.fromName(r.referenceValue))}class wC extends ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return uf(n)&&qs(n.arrayValue,this.value)}}class EC extends ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qs(this.value.arrayValue,n)}}class SC extends ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!qs(this.value.arrayValue,n)}}class _C extends ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!uf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>qs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function jm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new IC(t,e,n,r,i,s,o)}function cf(t){const e=U(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>wh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ql(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vi(r)).join(",")),e.dt=n}return e.dt}function hf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!O1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bm(t.startAt,e.startAt)&&Bm(t.endAt,e.endAt)}function Eh(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function TC(t,e,n,r,i,s,o,a){return new Yl(t,e,n,r,i,s,o,a)}function Xl(t){return new Yl(t)}function bm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kC(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function CC(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function NC(t){return t.collectionGroup!==null}function ri(t){const e=U(t);if(e.wt===null){e.wt=[];const n=CC(e),r=kC(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new ds(n)),e.wt.push(new ds(Ve.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ds(Ve.keyField(),s))}}}return e.wt}function hn(t){const e=U(t);if(!e._t)if(e.limitType==="F")e._t=jm(e.path,e.collectionGroup,ri(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ri(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ds(s.field,o))}const r=e.endAt?new ul(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ul(e.startAt.position,e.startAt.inclusive):null;e._t=jm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Sh(t,e,n){return new Yl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jl(t,e){return hf(hn(t),hn(e))&&t.limitType===e.limitType}function $1(t){return`${cf(hn(t))}|lt:${t.limitType}`}function _h(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>M1(r)).join(", ")}]`),Ql(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vi(r)).join(",")),`Target(${n})`}(hn(t))}; limitType=${t.limitType})`}function Zl(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of ri(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=zm(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ri(n),r)||n.endAt&&!function(i,s,o){const a=zm(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ri(n),r))}(t,e)}function AC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function F1(t){return(e,n)=>{let r=!1;for(const i of ri(t)){const s=RC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function RC(t,e,n){const r=t.field.isKeyField()?O.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?yi(a,l):M()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Di(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return N1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=new le(O.comparator);function dn(){return DC}const U1=new le(O.comparator);function Xi(...t){let e=U1;for(const n of t)e=e.insert(n.key,n);return e}function V1(t){let e=U1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function lr(){return fs()}function z1(){return fs()}function fs(){return new xi(t=>t.toString(),(t,e)=>t.isEqual(e))}const xC=new le(O.comparator),PC=new je(O.comparator);function b(...t){let e=PC;for(const n of t)e=e.add(n);return e}const OC=new je(G);function MC(){return OC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ll(e)?"-0":e}}function j1(t){return{integerValue:""+t}}function b1(t,e){return cC(e)?j1(e):B1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(){this._=void 0}}function LC(t,e,n){return t instanceof cl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&af(i)&&(i=lf(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Gs?W1(t,e):t instanceof Qs?K1(t,e):function(r,i){const s=H1(r,i),o=Hm(s)+Hm(r.gt);return vh(s)&&vh(r.gt)?j1(o):B1(r.serializer,o)}(t,e)}function $C(t,e,n){return t instanceof Gs?W1(t,e):t instanceof Qs?K1(t,e):n}function H1(t,e){return t instanceof Ys?vh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class cl extends eu{}class Gs extends eu{constructor(e){super(),this.elements=e}}function W1(t,e){const n=q1(e);for(const r of t.elements)n.some(i=>Ht(i,r))||n.push(r);return{arrayValue:{values:n}}}class Qs extends eu{constructor(e){super(),this.elements=e}}function K1(t,e){let n=q1(e);for(const r of t.elements)n=n.filter(i=>!Ht(i,r));return{arrayValue:{values:n}}}class Ys extends eu{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Hm(t){return me(t.integerValue||t.doubleValue)}function q1(t){return uf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,n){this.field=e,this.transform=n}}function UC(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Gs&&r instanceof Gs||n instanceof Qs&&r instanceof Qs?gi(n.elements,r.elements,Ht):n instanceof Ys&&r instanceof Ys?Ht(n.gt,r.gt):n instanceof cl&&r instanceof cl}(t.transform,e.transform)}class VC{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function va(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tu{}function G1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Y1(t.key,nn.none()):new So(t.key,t.data,nn.none());{const n=t.data,r=mt.empty();let i=new je(Ve.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Nr(t.key,r,new kt(i.toArray()),nn.none())}}function zC(t,e,n){t instanceof So?function(r,i,s){const o=r.value.clone(),a=Km(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Nr?function(r,i,s){if(!va(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Km(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Q1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ps(t,e,n,r){return t instanceof So?function(i,s,o,a){if(!va(i.precondition,s))return o;const l=i.value.clone(),u=qm(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Nr?function(i,s,o,a){if(!va(i.precondition,s))return o;const l=qm(i.fieldTransforms,a,s),u=s.data;return u.setAll(Q1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return va(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function BC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=H1(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function Wm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&gi(n,r,(i,s)=>UC(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class So extends tu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nr extends tu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Q1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Km(t,e,n){const r=new Map;ne(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,$C(o,a,n[i]))}return r}function qm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,LC(s,o,e))}return r}class Y1 extends tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jC extends tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&zC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ps(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ps(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=z1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=G1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),b())}isEqual(e){return this.batchId===e.batchId&&gi(this.mutations,e.mutations,(n,r)=>Wm(n,r))&&gi(this.baseMutations,e.baseMutations,(n,r)=>Wm(n,r))}}class df{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ne(e.mutations.length===r.length);let i=xC;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new df(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe,H;function KC(t){switch(t){default:return M();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function X1(t){if(t===void 0)return cn("GRPC error has no .code"),E.UNKNOWN;switch(t){case fe.OK:return E.OK;case fe.CANCELLED:return E.CANCELLED;case fe.UNKNOWN:return E.UNKNOWN;case fe.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case fe.INTERNAL:return E.INTERNAL;case fe.UNAVAILABLE:return E.UNAVAILABLE;case fe.UNAUTHENTICATED:return E.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case fe.NOT_FOUND:return E.NOT_FOUND;case fe.ALREADY_EXISTS:return E.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return E.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case fe.ABORTED:return E.ABORTED;case fe.OUT_OF_RANGE:return E.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return E.UNIMPLEMENTED;case fe.DATA_LOSS:return E.DATA_LOSS;default:return M()}}(H=fe||(fe={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Zo}static getOrCreateInstance(){return Zo===null&&(Zo=new ff),Zo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Zo=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=new ni([4294967295,4294967295],0);function Gm(t){const e=qC().encode(t),n=new Q2;return n.update(e),new Uint8Array(n.digest())}function Qm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ni([n,r],0),new ni([i,s],0)]}class pf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ji(`Invalid padding: ${n}`);if(r<0)throw new Ji(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ji(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ji(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=ni.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(ni.fromNumber(r)));return i.compare(GC)===1&&(i=new ni([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Gm(e),[r,i]=Qm(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new pf(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Gm(e),[r,i]=Qm(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,_o.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nu($.min(),i,new le(G),dn(),b())}}class _o{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new _o(r,n,b(),b(),b())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class J1{constructor(e,n){this.targetId=e,this.Vt=n}}class Z1{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ym{constructor(){this.St=0,this.Dt=Jm(),this.Ct=We.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=b(),n=b(),r=b();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:M()}}),new _o(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=Jm()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class QC{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=dn(),this.zt=Xm(),this.Wt=new le(G)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:M()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Eh(o))if(i===0){const a=new O(o.path);this.Yt(r,a,Ue.newNoDocument(a,$.min()))}else ne(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=ff.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var f,g,y,v,T,p;const d={localCacheCount:c,existenceFilterCount:h.count},m=h.unchangedNames;return m&&(d.bloomFilter={applied:u===0,hashCount:(f=m==null?void 0:m.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(v=(y=(g=m==null?void 0:m.bits)===null||g===void 0?void 0:g.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(p=(T=m==null?void 0:m.bits)===null||T===void 0?void 0:T.padding)!==null&&p!==void 0?p:0}),d}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=_r(s).toUint8Array()}catch(c){if(c instanceof A1)return mi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new pf(l,o,a)}catch(c){return mi(c instanceof Ji?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Eh(a.target)){const l=new O(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Ue.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=b();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new nu(e,n,this.Wt,this.jt,r);return this.jt=dn(),this.zt=Xm(),this.Wt=new le(G),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Ym,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new je(G),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Ym),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Xm(){return new le(O.comparator)}function Jm(){return new le(O.comparator)}const YC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),XC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),JC=(()=>({and:"AND",or:"OR"}))();class ZC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ih(t,e){return t.useProto3Json||Ql(e)?e:{value:e}}function hl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ew(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function eN(t,e){return hl(t,e.toTimestamp())}function Bt(t){return ne(!!t),$.fromTimestamp(function(e){const n=bn(e);return new Ee(n.seconds,n.nanos)}(t))}function mf(t,e){return function(n){return new ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function tw(t){const e=ie.fromString(t);return ne(sw(e)),e}function Th(t,e){return mf(t.databaseId,e.path)}function Ju(t,e){const n=tw(e);if(n.get(1)!==t.databaseId.projectId)throw new P(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(nw(n))}function kh(t,e){return mf(t.databaseId,e)}function tN(t){const e=tw(t);return e.length===4?ie.emptyPath():nw(e)}function Ch(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nw(t){return ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zm(t,e,n){return{name:Th(t,e),fields:n.value.mapValue.fields}}function nN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(ne(u===void 0||typeof u=="string"),We.fromBase64String(u||"")):(ne(u===void 0||u instanceof Uint8Array),We.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:X1(l.code);return new P(u,l.message||"")}(o);n=new Z1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ju(t,r.document.name),s=Bt(r.document.updateTime),o=r.document.createTime?Bt(r.document.createTime):$.min(),a=new mt({mapValue:{fields:r.document.fields}}),l=Ue.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new wa(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ju(t,r.document),s=r.readTime?Bt(r.readTime):$.min(),o=Ue.newNoDocument(i,s),a=r.removedTargetIds||[];n=new wa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ju(t,r.document),s=r.removedTargetIds||[];n=new wa([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new WC(i,s),a=r.targetId;n=new J1(a,o)}}return n}function rN(t,e){let n;if(e instanceof So)n={update:Zm(t,e.key,e.value)};else if(e instanceof Y1)n={delete:Th(t,e.key)};else if(e instanceof Nr)n={update:Zm(t,e.key,e.data),updateMask:dN(e.fieldMask)};else{if(!(e instanceof jC))return M();n={verify:Th(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof cl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Gs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Qs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ys)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw M()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:eN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M()}(t,e.precondition)),n}function iN(t,e){return t&&t.length>0?(ne(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Bt(r.updateTime):Bt(i);return s.isEqual($.min())&&(s=Bt(i)),new VC(s,r.transformResults||[])}(n,e))):[]}function sN(t,e){return{documents:[kh(t,e.path)]}}function oN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=kh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=kh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return iw(Wt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Pr(c.field),direction:uN(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ih(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function aN(t){let e=tN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ne(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=rw(c);return h instanceof Wt&&P1(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ds(Or(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Ql(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,f=c.values||[];return new ul(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,f=c.values||[];return new ul(f,h)}(n.endAt)),TC(e,i,o,s,a,"F",l,u)}function lN(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function rw(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Or(e.unaryFilter.field);return ve.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Or(e.unaryFilter.field);return ve.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Or(e.unaryFilter.field);return ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Or(e.unaryFilter.field);return ve.create(s,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(t):t.fieldFilter!==void 0?function(e){return ve.create(Or(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Wt.create(e.compositeFilter.filters.map(n=>rw(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(t):M()}function uN(t){return YC[t]}function cN(t){return XC[t]}function hN(t){return JC[t]}function Pr(t){return{fieldPath:t.canonicalString()}}function Or(t){return Ve.fromServerFormat(t.fieldPath)}function iw(t){return t instanceof ve?function(e){if(e.op==="=="){if(Vm(e.value))return{unaryFilter:{field:Pr(e.field),op:"IS_NAN"}};if(Um(e.value))return{unaryFilter:{field:Pr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Vm(e.value))return{unaryFilter:{field:Pr(e.field),op:"IS_NOT_NAN"}};if(Um(e.value))return{unaryFilter:{field:Pr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(e.field),op:cN(e.op),value:e.value}}}(t):t instanceof Wt?function(e){const n=e.getFilters().map(r=>iw(r));return n.length===1?n[0]:{compositeFilter:{op:hN(e.op),filters:n}}}(t):M()}function dN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function sw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n,r,i,s=$.min(),o=$.min(),a=We.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Nn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.fe=e}}function pN(t){const e=aN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(){this.rn=new gN}addToCollectionParentIndex(e,n){return this.rn.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(jn.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(jn.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class gN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new wi(0)}static Mn(){return new wi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(){this.changes=new xi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ps(r.mutation,i,kt.empty(),Ee.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,b()).next(()=>r))}getLocalViewOfDocuments(e,n,r=b()){const i=lr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,b()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=dn();const o=fs(),a=fs();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Nr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ps(c.mutation,u,c.mutation.getFieldMask(),Ee.now())):o.set(u.key,kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new vN(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=fs();let i=new le((o,a)=>o-a),s=b();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||kt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||b()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=z1();c.forEach(f=>{if(!s.has(f)){const g=G1(n.get(f),r.get(f));g!==null&&h.set(f,g),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return O.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):NC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):_.resolve(lr());let a=-1,l=s;return o.next(u=>_.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?_.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,b())).next(c=>({batchId:a,changes:V1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(r=>{let i=Xi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Xi();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const l=function(u,c){return new Yl(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ue.newInvalidDocument(u)))});let o=Xi();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&ps(u.mutation,l,kt.empty(),Ee.now()),Zl(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return _.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:Bt(r.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:pN(r.bundledQuery),readTime:Bt(r.readTime)}}(n)),_.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(){this.overlays=new le(O.comparator),this.ls=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=lr();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const i=lr(),s=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new le((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=lr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=lr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return _.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new HC(n,r));let s=this.ls.get(n);s===void 0&&(s=b(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(){this.fs=new je(_e.ds),this.ws=new je(_e._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new _e(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new _e(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new O(new ie([])),r=new _e(n,e),i=new _e(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new O(new ie([])),r=new _e(n,e),i=new _e(n,e+1);let s=b();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new _e(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class _e{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return O.comparator(e.key,n.key)||G(e.As,n.As)}static _s(e,n){return G(e.As,n.As)||O.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new je(_e.ds)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bC(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new _e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new _e(n,0),i=new _e(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(G);return n.forEach(i=>{const s=new _e(i,0),o=new _e(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),_.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;O.isDocumentKey(s)||(s=s.child(""));const o=new _e(new O(s),0);let a=new je(G);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),_.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ne(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return _.forEach(n.mutations,i=>{const s=new _e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new _e(n,0),i=this.Rs.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e){this.Ds=e,this.docs=new le(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():Ue.newInvalidDocument(n))}getEntries(e,n){let r=dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ue.newInvalidDocument(i))}),_.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=dn();const o=n.path,a=new O(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||aC(oC(c),r)<=0||(i.has(c.key)||Zl(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return _.resolve(s)}getAllFromCollectionGroup(e,n,r,i){M()}Cs(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new TN(this)}getSize(e){return _.resolve(this.size)}}class TN extends yN{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e){this.persistence=e,this.xs=new xi(n=>cf(n),hf),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Ns=0,this.ks=new gf,this.targetCount=0,this.Ms=wi.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),_.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new wi(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.Fn(n),_.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e,n){this.$s={},this.overlays={},this.Os=new of(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new kN(this),this.indexManager=new mN,this.remoteDocumentCache=function(r){return new IN(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new fN(n),this.qs=new EN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new SN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new _N(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){x("MemoryPersistence","Starting transaction:",e);const i=new NN(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return _.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class NN extends uC{constructor(e){super(),this.currentSequenceNumber=e}}class yf{constructor(e){this.persistence=e,this.Qs=new gf,this.js=null}static zs(e){return new yf(e)}get Ws(){if(this.js)return this.js;throw M()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),_.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Ws,r=>{const i=O.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,$.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return _.or([()=>_.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=b(),i=b();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new vf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(bm(n))return _.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Sh(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=b(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,Sh(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return bm(n)||i.isEqual($.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(Mm()<=q.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_h(n)),this.Wi(e,o,n,sC(i,-1)))})}ji(e,n){let r=new je(F1(e));return n.forEach((i,s)=>{Zl(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return Mm()<=q.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",_h(n)),this.Ui.getDocumentsMatchingQuery(e,n,jn.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new le(G),this.Yi=new xi(s=>cf(s),hf),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wN(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function DN(t,e,n,r){return new RN(t,e,n,r)}async function ow(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=b();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function xN(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let f=_.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);ne(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=b();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function aw(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function PN(t,e){const n=U(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let g=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(We.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,v,T){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(f,g,c)&&a.push(n.Bs.updateTargetData(s,g))});let l=dn(),u=b();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(ON(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual($.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function ON(t,e,n){let r=b(),i=b();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=dn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual($.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function MN(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function LN(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,_.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new Nn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Nh(t,e,n){const r=U(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Eo(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function eg(t,e,n){const r=U(t);let i=$.min(),s=b();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=U(a),h=c.Yi.get(u);return h!==void 0?_.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,hn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:$.min(),n?s:b())).next(a=>($N(r,AC(e),a),{documents:a,ir:s})))}function $N(t,e,n){let r=t.Xi.get(e)||$.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class tg{constructor(){this.activeTargetIds=MC()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FN{constructor(){this.Hr=new tg,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new tg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea=null;function Zu(){return ea===null?ea=268435456+Math.round(2147483648*Math.random()):ea++,"0x"+ea.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="WebChannelConnection";class BN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=Zu(),a=this.To(e,n);x("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(x("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw mi("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ri,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=VN[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=Zu();return new Promise((o,a)=>{const l=new G2;l.setWithCredentials(!0),l.listenOnce(W2.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Xu.NO_ERROR:const c=l.getResponseJson();x(Le,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Xu.TIMEOUT:x(Le,`RPC '${e}' ${s} timed out`),a(new P(E.DEADLINE_EXCEEDED,"Request time out"));break;case Xu.HTTP_ERROR:const h=l.getStatus();if(x(Le,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const y=function(v){const T=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(T)>=0?T:E.UNKNOWN}(g.status);a(new P(y,g.message))}else a(new P(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new P(E.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{x(Le,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);x(Le,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=Zu(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=b2(),a=H2(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new q2({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");x(Le,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let f=!1,g=!1;const y=new zN({ro:T=>{g?x(Le,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(f||(x(Le,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),x(Le,`RPC '${e}' stream ${i} sending:`,T),h.send(T))},oo:()=>h.close()}),v=(T,p,d)=>{T.listen(p,m=>{try{d(m)}catch(w){setTimeout(()=>{throw w},0)}})};return v(h,Yo.EventType.OPEN,()=>{g||x(Le,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Yo.EventType.CLOSE,()=>{g||(g=!0,x(Le,`RPC '${e}' stream ${i} transport closed`),y.wo())}),v(h,Yo.EventType.ERROR,T=>{g||(g=!0,mi(Le,`RPC '${e}' stream ${i} transport errored:`,T),y.wo(new P(E.UNAVAILABLE,"The operation could not be completed")))}),v(h,Yo.EventType.MESSAGE,T=>{var p;if(!g){const d=T.data[0];ne(!!d);const m=d,w=m.error||((p=m[0])===null||p===void 0?void 0:p.error);if(w){x(Le,`RPC '${e}' stream ${i} received error:`,w);const I=w.status;let C=function(N){const K=fe[N];if(K!==void 0)return X1(K)}(I),R=w.message;C===void 0&&(C=E.INTERNAL,R="Unknown error status: "+I+" with message "+w.message),g=!0,y.wo(new P(C,R)),h.close()}else x(Le,`RPC '${e}' stream ${i} received:`,d),y._o(d)}}),v(a,K2.STAT_EVENT,T=>{T.stat===Pm.PROXY?x(Le,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===Pm.NOPROXY&&x(Le,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function ec(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t){return new ZC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new lw(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(cn(n.toString()),cn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new P(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jN extends uw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=nN(this.serializer,e),r=function(i){if(!("targetChange"in i))return $.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?$.min():s.readTime?Bt(s.readTime):$.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Ch(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Eh(a)?{documents:sN(i,a)}:{query:oN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=ew(i,s.resumeToken);const l=Ih(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo($.min())>0){o.readTime=hl(i,s.snapshotVersion.toTimestamp());const l=Ih(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=lN(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Ch(this.serializer),n.removeTarget=e,this.Wo(n)}}class bN extends uw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=iN(e.writeResults,e.commitTime),r=Bt(e.commitTime);return this.listener.cu(r,n)}return ne(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Ch(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>rN(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new P(E.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(E.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(E.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class WN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(cn(n),this.mu=!1):x("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Ar(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=U(a);l.vu.add(4),await Io(l),l.bu.set("Unknown"),l.vu.delete(4),await iu(l)}(this))})}),this.bu=new WN(r,i)}}async function iu(t){if(Ar(t))for(const e of t.Ru)await e(!0)}async function Io(t){for(const e of t.Ru)await e(!1)}function cw(t,e){const n=U(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Sf(n)?Ef(n):Pi(n).Ko()&&wf(n,e))}function hw(t,e){const n=U(t),r=Pi(n);n.Au.delete(e),r.Ko()&&dw(n,e),n.Au.size===0&&(r.Ko()?r.jo():Ar(n)&&n.bu.set("Unknown"))}function wf(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Pi(t).su(e)}function dw(t,e){t.Vu.qt(e),Pi(t).iu(e)}function Ef(t){t.Vu=new QC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Pi(t).start(),t.bu.gu()}function Sf(t){return Ar(t)&&!Pi(t).Uo()&&t.Au.size>0}function Ar(t){return U(t).vu.size===0}function fw(t){t.Vu=void 0}async function qN(t){t.Au.forEach((e,n)=>{wf(t,e)})}async function GN(t,e){fw(t),Sf(t)?(t.bu.Iu(e),Ef(t)):t.bu.set("Unknown")}async function QN(t,e,n){if(t.bu.set("Online"),e instanceof Z1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await dl(t,r)}else if(e instanceof wa?t.Vu.Ht(e):e instanceof J1?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual($.min()))try{const r=await aw(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(We.EMPTY_BYTE_STRING,u.snapshotVersion)),dw(i,a);const c=new Nn(u.target,a,l,u.sequenceNumber);wf(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await dl(t,r)}}async function dl(t,e,n){if(!Eo(e))throw e;t.vu.add(1),await Io(t),t.bu.set("Offline"),n||(n=()=>aw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await iu(t)})}function pw(t,e){return e().catch(n=>dl(t,n,e))}async function su(t){const e=U(t),n=Hn(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;YN(e);)try{const i=await MN(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,XN(e,i)}catch(i){await dl(e,i)}mw(e)&&gw(e)}function YN(t){return Ar(t)&&t.Eu.length<10}function XN(t,e){t.Eu.push(e);const n=Hn(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function mw(t){return Ar(t)&&!Hn(t).Uo()&&t.Eu.length>0}function gw(t){Hn(t).start()}async function JN(t){Hn(t).hu()}async function ZN(t){const e=Hn(t);for(const n of t.Eu)e.uu(n.mutations)}async function eA(t,e,n){const r=t.Eu.shift(),i=df.from(r,e,n);await pw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await su(t)}async function tA(t,e){e&&Hn(t).ou&&await async function(n,r){if(i=r.code,KC(i)&&i!==E.ABORTED){const s=n.Eu.shift();Hn(n).Qo(),await pw(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await su(n)}var i}(t,e),mw(t)&&gw(t)}async function rg(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Ar(n);n.vu.add(3),await Io(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await iu(n)}async function nA(t,e){const n=U(t);e?(n.vu.delete(2),await iu(n)):e||(n.vu.add(2),await Io(n),n.bu.set("Unknown"))}function Pi(t){return t.Su||(t.Su=function(e,n,r){const i=U(e);return i.fu(),new jN(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:qN.bind(null,t),ao:GN.bind(null,t),nu:QN.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Sf(t)?Ef(t):t.bu.set("Unknown")):(await t.Su.stop(),fw(t))})),t.Su}function Hn(t){return t.Du||(t.Du=function(e,n,r){const i=U(e);return i.fu(),new bN(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:JN.bind(null,t),ao:tA.bind(null,t),au:ZN.bind(null,t),cu:eA.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await su(t)):(await t.Du.stop(),t.Eu.length>0&&(x("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new _f(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function If(t,e){if(cn("AsyncQueue",`${e}: ${t}`),Eo(t))return new P(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.comparator=e?(n,r)=>e(n,r)||O.comparator(n.key,r.key):(n,r)=>O.comparator(n.key,r.key),this.keyedMap=Xi(),this.sortedSet=new le(this.comparator)}static emptySet(e){return new ii(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ii)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ii;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.Cu=new le(O.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):M():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ei{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ei(e,n,ii.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(){this.Nu=void 0,this.listeners=[]}}class iA{constructor(){this.queries=new xi(e=>$1(e),Jl),this.onlineState="Unknown",this.ku=new Set}}async function Tf(t,e){const n=U(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new rA),i)try{s.Nu=await n.onListen(r)}catch(o){const a=If(o,`Initialization of query '${_h(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&Cf(n)}async function kf(t,e){const n=U(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function sA(t,e){const n=U(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&Cf(n)}function oA(t,e,n){const r=U(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Cf(t){t.ku.forEach(e=>{e.next()})}class Nf{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ei(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Ei.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){this.key=e}}class vw{constructor(e){this.key=e}}class aA{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=b(),this.mutatedKeys=b(),this.tc=F1(e),this.ec=new ii(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new ig,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),g=Zl(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;f&&g?f.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),T=!0):this.rc(f,g)||(r.track({type:2,doc:g}),T=!0,(l&&this.tc(g,l)>0||u&&this.tc(g,u)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),T=!0):f&&!g&&(r.track({type:1,doc:f}),T=!0,(l||u)&&(a=!0)),T&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return g(h)-g(f)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new Ei(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new ig,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=b(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new vw(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new yw(r))}),n}hc(e){this.Yu=e.ir,this.Zu=b();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Ei.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class lA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uA{constructor(e){this.key=e,this.fc=!1}}class cA{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new xi(a=>$1(a),Jl),this._c=new Map,this.mc=new Set,this.gc=new le(O.comparator),this.yc=new Map,this.Ic=new gf,this.Tc={},this.Ec=new Map,this.Ac=wi.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function hA(t,e){const n=SA(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await LN(n.localStore,hn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await dA(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&cw(n.remoteStore,o)}return i}async function dA(t,e,n,r,i){t.Rc=(h,f,g)=>async function(y,v,T,p){let d=v.view.sc(T);d.zi&&(d=await eg(y.localStore,v.query,!1).then(({documents:I})=>v.view.sc(I,d)));const m=p&&p.targetChanges.get(v.targetId),w=v.view.applyChanges(d,y.isPrimaryClient,m);return og(y,v.targetId,w.cc),w.snapshot}(t,h,f,g);const s=await eg(t.localStore,e,!0),o=new aA(e,s.ir),a=o.sc(s.documents),l=_o.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);og(t,n,u.cc);const c=new lA(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function fA(t,e){const n=U(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Jl(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Nh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),hw(n.remoteStore,r.targetId),Ah(n,r.targetId)}).catch(wo)):(Ah(n,r.targetId),await Nh(n.localStore,r.targetId,!0))}async function pA(t,e,n){const r=_A(t);try{const i=await function(s,o){const a=U(s),l=Ee.now(),u=o.reduce((f,g)=>f.add(g.key),b());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=dn(),y=b();return a.Zi.getEntries(f,u).next(v=>{g=v,g.forEach((T,p)=>{p.isValidDocument()||(y=y.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(v=>{c=v;const T=[];for(const p of o){const d=BC(p,c.get(p.key).overlayedDocument);d!=null&&T.push(new Nr(p.key,d,R1(d.value.mapValue),nn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,T,o)}).next(v=>{h=v;const T=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(f,v.batchId,T)})}).then(()=>({batchId:h.batchId,changes:V1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new le(G)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await To(r,i.changes),await su(r.remoteStore)}catch(i){const s=If(i,"Failed to persist write");n.reject(s)}}async function ww(t,e){const n=U(t);try{const r=await PN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?ne(o.fc):i.removedDocuments.size>0&&(ne(o.fc),o.fc=!1))}),await To(n,r,e)}catch(r){await wo(r)}}function sg(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=U(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&Cf(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mA(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new le(O.comparator);o=o.insert(s,Ue.newNoDocument(s,$.min()));const a=b().add(s),l=new nu($.min(),new Map,new le(G),o,a);await ww(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),Af(r)}else await Nh(r.localStore,e,!1).then(()=>Ah(r,e,n)).catch(wo)}async function gA(t,e){const n=U(t),r=e.batch.batchId;try{const i=await xN(n.localStore,e);Sw(n,r,null),Ew(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await To(n,i)}catch(i){await wo(i)}}async function yA(t,e,n){const r=U(t);try{const i=await function(s,o){const a=U(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ne(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Sw(r,e,n),Ew(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await To(r,i)}catch(i){await wo(i)}}function Ew(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function Sw(t,e,n){const r=U(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Ah(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||_w(t,r)})}function _w(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(hw(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Af(t))}function og(t,e,n){for(const r of n)r instanceof yw?(t.Ic.addReference(r.key,e),vA(t,r)):r instanceof vw?(x("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||_w(t,r.key)):M()}function vA(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(x("SyncEngine","New document in limbo: "+n),t.mc.add(r),Af(t))}function Af(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new O(ie.fromString(e)),r=t.Ac.next();t.yc.set(r,new uA(n)),t.gc=t.gc.insert(n,r),cw(t.remoteStore,new Nn(hn(Xl(n.path)),r,"TargetPurposeLimboResolution",of.ct))}}async function To(t,e,n){const r=U(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=vf.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=U(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>_.forEach(l,h=>_.forEach(h.Fi,f=>u.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>_.forEach(h.Bi,f=>u.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!Eo(c))throw c;x("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const f=u.Ji.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.Ji=u.Ji.insert(h,y)}}}(r.localStore,s))}async function wA(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await ow(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new P(E.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await To(n,r.er)}}function EA(t,e){const n=U(t),r=n.yc.get(e);if(r&&r.fc)return b().add(r.key);{let i=b();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function SA(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ww.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=EA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mA.bind(null,e),e.dc.nu=sA.bind(null,e.eventManager),e.dc.Pc=oA.bind(null,e.eventManager),e}function _A(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yA.bind(null,e),e}class ag{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ru(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return DN(this.persistence,new AN,e.initialUser,this.serializer)}createPersistence(e){return new CN(yf.zs,this.serializer)}createSharedClientState(e){return new FN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class IA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wA.bind(null,this.syncEngine),await nA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new iA}createDatastore(e){const n=ru(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new BN(i));var i;return function(s,o,a,l){return new HN(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>sg(this.syncEngine,a,0),o=ng.D()?new ng:new UN,new KN(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new cA(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);x("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Io(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):cn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=$e.UNAUTHENTICATED,this.clientId=C1.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{x("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(x("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=If(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tc(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ow(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function lg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await CA(t);x("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>rg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>rg(e.remoteStore,s)),t._onlineComponents=e}function kA(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function CA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await tc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!kA(n))throw n;mi("Error using user provided cache. Falling back to memory cache: "+n),await tc(t,new ag)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await tc(t,new ag);return t._offlineComponents}async function Iw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await lg(t,t._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await lg(t,new IA))),t._onlineComponents}function NA(t){return Iw(t).then(e=>e.syncEngine)}async function fl(t){const e=await Iw(t),n=e.eventManager;return n.onListen=hA.bind(null,e.syncEngine),n.onUnlisten=fA.bind(null,e.syncEngine),n}function AA(t,e,n={}){const r=new tn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Rf({next:h=>{s.enqueueAndForget(()=>kf(i,c));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new P(E.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new P(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Nf(Xl(o.path),u,{includeMetadataChanges:!0,Ku:!0});return Tf(i,c)}(await fl(t),t.asyncQueue,e,n,r)),r.promise}function RA(t,e,n={}){const r=new tn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Rf({next:h=>{s.enqueueAndForget(()=>kf(i,c)),h.fromCache&&a.source==="server"?l.reject(new P(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Nf(o,u,{includeMetadataChanges:!0,Ku:!0});return Tf(i,c)}(await fl(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t,e,n){if(!n)throw new P(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DA(t,e,n,r){if(e===!0&&r===!0)throw new P(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cg(t){if(!O.isDocumentKey(t))throw new P(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hg(t){if(O.isDocumentKey(t))throw new P(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Df(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":M()}function jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Df(t);throw new P(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new P(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new P(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new P(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new P(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class ou{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Y2;switch(n.type){case"firstParty":return new eC(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ug.get(e);n&&(x("ComponentProvider","Removing Datastore"),ug.delete(e),n.terminate())}(this),Promise.resolve()}}function xA(t,e,n,r={}){var i;const s=(t=jt(t,ou))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&mi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=$e.MOCK_USER;else{a=I_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new P(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new $e(u)}t._authCredentials=new X2(new k1(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nt(this.firestore,e,this._key)}}class ko{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ko(this.firestore,e,this._query)}}class Vn extends ko{constructor(e,n,r){super(e,n,Xl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nt(this.firestore,null,new O(e))}withConverter(e){return new Vn(this.firestore,e,this._path)}}function nc(t,e,...n){if(t=rt(t),kw("collection","path",e),t instanceof ou){const r=ie.fromString(e,...n);return hg(r),new Vn(t,null,r)}{if(!(t instanceof nt||t instanceof Vn))throw new P(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return hg(r),new Vn(t.firestore,null,r)}}function Jn(t,e,...n){if(t=rt(t),arguments.length===1&&(e=C1.A()),kw("doc","path",e),t instanceof ou){const r=ie.fromString(e,...n);return cg(r),new nt(t,null,new O(r))}{if(!(t instanceof nt||t instanceof Vn))throw new P(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return cg(r),new nt(t.firestore,t instanceof Vn?t.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new lw(this,"async_queue_retry"),this.Xc=()=>{const n=ec();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=ec();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new tn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Eo(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw cn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=_f.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&M()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function fg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Si extends ou{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new PA,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cw(this),this._firestoreClient.terminate()}}function OA(t,e){const n=typeof t=="object"?t:Vv(),r=typeof t=="string"?t:e||"(default)",i=Nd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=S_("firestore");s&&xA(i,...s)}return i}function au(t){return t._firestoreClient||Cw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Cw(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new dC(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Tw(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new TA(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _i(We.fromBase64String(e))}catch(n){throw new P(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _i(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=/^__.*__$/;class LA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new So(e,this.data,n,this.fieldTransforms)}}function Nw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Mf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Mf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return pl(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Nw(this.ca)&&MA.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class $A{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ru(e)}ya(e,n,r,i=!1){return new Mf({ca:e,methodName:n,ga:r,path:Ve.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function FA(t){const e=t._freezeSettings(),n=ru(t._databaseId);return new $A(t._databaseId,!!e.ignoreUndefinedProperties,n)}function UA(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);xw("Data must be an object, but it was:",o,r);const a=Rw(r,o);let l,u;if(s.merge)l=new kt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=zA(e,h,n);if(!o.contains(f))throw new P(E.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);jA(c,f)||c.push(f)}l=new kt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new LA(new mt(a),l,u)}class VA extends Pf{constructor(e,n){super(e),this.Ia=n}_toFieldTransform(e){const n=new Ys(e.serializer,b1(e.serializer,this.Ia));return new FC(e.path,n)}isEqual(e){return this===e}}function Aw(t,e){if(Dw(t=rt(t)))return xw("Unsupported field value:",e,t),Rw(t,e);if(t instanceof Pf)return function(n,r){if(!Nw(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Aw(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return b1(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ee.fromDate(n);return{timestampValue:hl(r.serializer,i)}}if(n instanceof Ee){const i=new Ee(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:hl(r.serializer,i)}}if(n instanceof Of)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof _i)return{bytesValue:ew(r.serializer,n._byteString)};if(n instanceof nt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:mf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Df(n)}`)}(t,e)}function Rw(t,e){const n={};return N1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Di(t,(r,i)=>{const s=Aw(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Dw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ee||t instanceof Of||t instanceof _i||t instanceof nt||t instanceof Pf)}function xw(t,e,n){if(!Dw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Df(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function zA(t,e,n){if((e=rt(e))instanceof xf)return e._internalPath;if(typeof e=="string")return Pw(t,e);throw pl("Field path arguments must be of type string or ",t,!1,void 0,n)}const BA=new RegExp("[~\\*/\\[\\]]");function Pw(t,e,n){if(e.search(BA)>=0)throw pl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xf(...e.split("."))._internalPath}catch{throw pl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new P(E.INVALID_ARGUMENT,a+t+l)}function jA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Mw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bA extends Ow{data(){return super.data()}}function Mw(t,e){return typeof e=="string"?Pw(t,e):e instanceof xf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class HA{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw M()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Di(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Of(me(e.latitude),me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=lf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ws(e));default:return null}}convertTimestamp(e){const n=bn(e);return new Ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ie.fromString(e);ne(sw(r));const i=new Ks(r.get(1),r.get(3)),s=new O(r.popFirst(5));return i.isEqual(n)||cn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $w extends Ow{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ea(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Mw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ea extends $w{data(e={}){return super.data(e)}}class Fw{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Zi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ea(this._firestore,this._userDataWriter,r.key,r,new Zi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Ea(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Zi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ea(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Zi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:KA(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function KA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t){t=jt(t,nt);const e=jt(t.firestore,Si);return AA(au(e),t._key).then(n=>Uw(e,t,n))}class Lf extends HA{constructor(e){super(),this.firestore=e}convertBytes(e){return new _i(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nt(this.firestore,null,n)}}function rc(t){t=jt(t,ko);const e=jt(t.firestore,Si),n=au(e),r=new Lf(e);return Lw(t._query),RA(n,t._query).then(i=>new Fw(e,r,t,i))}function xr(t,e,n){t=jt(t,nt);const r=jt(t.firestore,Si),i=WA(t.converter,e,n);return QA(r,[UA(FA(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,nn.none())])}function GA(t,...e){var n,r,i;t=rt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||fg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(fg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof nt)u=jt(t.firestore,Si),c=Xl(t._key.path),l={next:h=>{e[o]&&e[o](Uw(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=jt(t,ko);u=jt(h.firestore,Si),c=h._query;const f=new Lf(u);l={next:g=>{e[o]&&e[o](new Fw(u,f,h,g))},error:e[o+1],complete:e[o+2]},Lw(t._query)}return function(h,f,g,y){const v=new Rf(y),T=new Nf(f,v,g);return h.asyncQueue.enqueueAndForget(async()=>Tf(await fl(h),T)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>kf(await fl(h),T))}}(au(u),c,a,l)}function QA(t,e){return function(n,r){const i=new tn;return n.asyncQueue.enqueueAndForget(async()=>pA(await NA(n),r,i)),i.promise}(au(t),e)}function Uw(t,e,n){const r=n.docs.get(e._key),i=new Lf(t);return new $w(t,i,e._key,r,new Zi(n.hasPendingWrites,n.fromCache),e.converter)}function pg(t){return new VA("increment",t)}(function(t,e=!0){(function(n){Ri=n})(Ci),di(new vr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Si(new J2(n.getProvider("auth-internal")),new nC(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new P(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ks(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Un(Om,"3.13.0",t),Un(Om,"3.13.0","esm2017")})();var YA="firebase",XA="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un(YA,XA,"app");const JA={apiKey:"AIzaSyDzqQ9tObVT4-vW0WcZdp4RODlkgwiCKXw",authDomain:"holmes-office-bingo.firebaseapp.com",projectId:"holmes-office-bingo",storageBucket:"holmes-office-bingo.firebasestorage.app",messagingSenderId:"535146781731",appId:"1:535146781731:web:3a28608893fbc043226596"},mg=Uv(JA);function gg(t){const n=[...t].sort(()=>Math.random()-.5).slice(0,24);return n.splice(12,0,"FREE"),n}function ZA(t){const n=[];for(let r=0;r<5;r++)n.push(Array.from({length:5},(i,s)=>r*5+s));for(let r=0;r<5;r++)n.push(Array.from({length:5},(i,s)=>s*5+r));return n.push(Array.from({length:5},(r,i)=>i*5+i)),n.push(Array.from({length:5},(r,i)=>i*5+(5-1-i))),n.some(r=>r.every(i=>t[i]))}var Vw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Vw);var eR=Vw.exports;const tR=yg(eR);function nR({board:t,selected:e,onSelect:n}){return pe("div",{className:"grid grid-cols-5 gap-1 sm:gap-2 max-w-[95vw] sm:max-w-[500px] mx-auto",children:t.map((r,i)=>pe("button",{onClick:()=>n(i),className:tR("aspect-square flex items-center justify-center rounded text-center font-semibold p-1","transition duration-200 ease-in-out",e[i]?"bg-green-500 text-black":"bg-gray-700 hover:bg-gray-600 text-white","text-xs sm:text-sm md:text-base"),children:r},i))})}function rR(){const t=new Date,e=t.getDay(),n=t.getDate()-e,r=new Date(t.setDate(n));return r.setHours(0,0,0,0),r.getTime()}function iR({data:t}){const e=rR();return Mt("div",{className:"w-full md:w-64 bg-gray-800 p-4 text-white flex-shrink-0",children:[pe("h2",{className:"text-xl font-bold mb-2 text-center md:text-left",children:"Leaderboard"}),pe("ul",{className:"space-y-1 text-sm sm:text-base",children:t.map(n=>{const r=n.lastWin>=e?n.weeklyWins:0;return Mt("li",{children:[n.name||"Anonymous"," – Weekly: ",r]},n.id)})})]})}var Sa={linear:function(t,e,n,r){var i=n-e;return i*t/r+e},easeInQuad:function(t,e,n,r){var i=n-e;return i*(t/=r)*t+e},easeOutQuad:function(t,e,n,r){var i=n-e;return-i*(t/=r)*(t-2)+e},easeInOutQuad:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,n,r){var i=n-e;return i*(t/=r)*t*t+e},easeOutCubic:function(t,e,n,r){var i=n-e;return i*((t=t/r-1)*t*t+1)+e},easeInOutCubic:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,n,r){var i=n-e;return i*(t/=r)*t*t*t+e},easeOutQuart:function(t,e,n,r){var i=n-e;return-i*((t=t/r-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,n,r){var i=n-e;return i*(t/=r)*t*t*t*t+e},easeOutQuint:function(t,e,n,r){var i=n-e;return i*((t=t/r-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,n,r){var i=n-e;return-i*Math.cos(t/r*(Math.PI/2))+i+e},easeOutSine:function(t,e,n,r){var i=n-e;return i*Math.sin(t/r*(Math.PI/2))+e},easeInOutSine:function(t,e,n,r){var i=n-e;return-i/2*(Math.cos(Math.PI*t/r)-1)+e},easeInExpo:function(t,e,n,r){var i=n-e;return t==0?e:i*Math.pow(2,10*(t/r-1))+e},easeOutExpo:function(t,e,n,r){var i=n-e;return t==r?e+i:i*(-Math.pow(2,-10*t/r)+1)+e},easeInOutExpo:function(t,e,n,r){var i=n-e;return t===0?e:t===r?e+i:(t/=r/2)<1?i/2*Math.pow(2,10*(t-1))+e:i/2*(-Math.pow(2,-10*--t)+2)+e},easeInCirc:function(t,e,n,r){var i=n-e;return-i*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOutCirc:function(t,e,n,r){var i=n-e;return i*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOutCirc:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+e:i/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,n,r){var i=n-e,s,o,a;return a=1.70158,o=0,s=i,t===0?e:(t/=r)===1?e+i:(o||(o=r*.3),s<Math.abs(i)?(s=i,a=o/4):a=o/(2*Math.PI)*Math.asin(i/s),-(s*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o))+e)},easeOutElastic:function(t,e,n,r){var i=n-e,s,o,a;return a=1.70158,o=0,s=i,t===0?e:(t/=r)===1?e+i:(o||(o=r*.3),s<Math.abs(i)?(s=i,a=o/4):a=o/(2*Math.PI)*Math.asin(i/s),s*Math.pow(2,-10*t)*Math.sin((t*r-a)*(2*Math.PI)/o)+i+e)},easeInOutElastic:function(t,e,n,r){var i=n-e,s,o,a;return a=1.70158,o=0,s=i,t===0?e:(t/=r/2)===2?e+i:(o||(o=r*(.3*1.5)),s<Math.abs(i)?(s=i,a=o/4):a=o/(2*Math.PI)*Math.asin(i/s),t<1?-.5*(s*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o))+e:s*Math.pow(2,-10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)*.5+i+e)},easeInBack:function(t,e,n,r,i){var s=n-e;return i===void 0&&(i=1.70158),s*(t/=r)*t*((i+1)*t-i)+e},easeOutBack:function(t,e,n,r,i){var s=n-e;return i===void 0&&(i=1.70158),s*((t=t/r-1)*t*((i+1)*t+i)+1)+e},easeInOutBack:function(t,e,n,r,i){var s=n-e;return i===void 0&&(i=1.70158),(t/=r/2)<1?s/2*(t*t*(((i*=1.525)+1)*t-i))+e:s/2*((t-=2)*t*(((i*=1.525)+1)*t+i)+2)+e},easeInBounce:function(t,e,n,r){var i=n-e,s;return s=Sa.easeOutBounce(r-t,0,i,r),i-s+e},easeOutBounce:function(t,e,n,r){var i=n-e;return(t/=r)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,n,r){var i=n-e,s;return t<r/2?(s=Sa.easeInBounce(t*2,0,i,r),s*.5+e):(s=Sa.easeOutBounce(t*2-r,0,i,r),s*.5+i*.5+e)}},sR=Sa;function oR(t){return t*Math.PI/180}function it(t,e){return t+Math.random()*(e-t)}function aR(t,e){return Math.floor(t+Math.random()*(e-t+1))}var ms;(function(t){t[t.Circle=0]="Circle",t[t.Square=1]="Square",t[t.Strip=2]="Strip"})(ms||(ms={}));var wn;(function(t){t[t.Positive=1]="Positive",t[t.Negative=-1]="Negative"})(wn||(wn={}));const lR=1e3/60;class uR{constructor(e,n,r,i){this.getOptions=n;const{colors:s,initialVelocityX:o,initialVelocityY:a}=this.getOptions();this.context=e,this.x=r,this.y=i,this.w=it(5,20),this.h=it(5,20),this.radius=it(5,10),this.vx=typeof o=="number"?it(-o,o):it(o.min,o.max),this.vy=typeof a=="number"?it(-a,0):it(a.min,a.max),this.shape=aR(0,2),this.angle=oR(it(0,360)),this.angularSpin=it(-.2,.2),this.color=s[Math.floor(Math.random()*s.length)],this.rotateY=it(0,1),this.rotationDirection=it(0,1)?wn.Positive:wn.Negative}update(e){const{gravity:n,wind:r,friction:i,opacity:s,drawShape:o}=this.getOptions(),a=e/lR;this.x+=this.vx*a,this.y+=this.vy*a,this.vy+=n*a,this.vx+=r*a,this.vx*=i**a,this.vy*=i**a,this.rotateY>=1&&this.rotationDirection===wn.Positive?this.rotationDirection=wn.Negative:this.rotateY<=-1&&this.rotationDirection===wn.Negative&&(this.rotationDirection=wn.Positive);const l=.1*this.rotationDirection*a;if(this.rotateY+=l,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=s,this.context.lineCap="round",this.context.lineWidth=2,o&&typeof o=="function")o.call(this,this.context);else switch(this.shape){case ms.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case ms.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case ms.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class cR{constructor(e,n){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=i=>{this.particles.splice(i,1)},this.getParticle=()=>{const i=it(this.x,this.w+this.x),s=it(this.y,this.h+this.y);return new uR(this.context,this.getOptions,i,s)},this.animate=i=>{const{canvas:s,context:o,particlesGenerated:a,lastNumberOfPieces:l}=this,{run:u,recycle:c,numberOfPieces:h,debug:f,tweenFunction:g,tweenDuration:y}=this.getOptions();if(!u)return!1;const v=this.particles.length,T=c?v:a;if(T<h){l!==h&&(this.tweenProgress=0,this.tweenFrom=T,this.lastNumberOfPieces=h),this.tweenProgress=Math.min(y,Math.max(0,this.tweenProgress+i));const p=g(this.tweenProgress,this.tweenFrom,h,y),d=Math.round(p-T);for(let m=0;m<d;m++)this.particles.push(this.getParticle());this.particlesGenerated+=d}f&&(o.font="12px sans-serif",o.fillStyle="#333",o.textAlign="right",o.fillText(`Particles: ${v}`,s.width-10,s.height-20));for(let p=this.particles.length-1;p>=0;p--){const d=this.particles[p];d.update(i),(d.y>s.height||d.y<-100||d.x>s.width+100||d.x<-100)&&(c&&T<=h?this.particles[p]=this.getParticle():this.removeParticleAt(p))}return v>0||T<h},this.canvas=e;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.getOptions=n}}const $f={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:sR.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class hR{constructor(e,n){this.lastFrameTime=0,this.setOptionsWithDefaults=i=>{const s={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...s,...$f,...i},Object.assign(this,i.confettiSource)},this.update=(i=0)=>{const{options:{run:s,onConfettiComplete:o,frameRate:a},canvas:l,context:u}=this,c=Math.min(i-this.lastFrameTime,50);if(a&&c<1e3/a){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=i-(a?c%a:0),s&&(u.fillStyle="white",u.clearRect(0,0,l.width,l.height)),this.generator.animate(c)?this.rafId=requestAnimationFrame(this.update):(o&&typeof o=="function"&&this.generator.particlesGenerated>0&&o.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=e;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.generator=new cR(this.canvas,()=>this.options),this.options=n,this.update()}get options(){return this._options}set options(e){var i,s;const n=(i=this._options)==null?void 0:i.run,r=(s=this._options)==null?void 0:s.recycle;this.setOptionsWithDefaults(e),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof e.recycle=="boolean"&&e.recycle&&r===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof e.run=="boolean"&&e.run&&n===!1&&this.update()}}const dR=_a.createRef();class Ff extends _a.Component{constructor(e){super(e),this.canvas=_a.createRef(),this.canvas=e.canvasRef||dR}componentDidMount(){if(this.canvas.current){const e=ic(this.props)[0];this.confetti=new hR(this.canvas.current,e)}}componentDidUpdate(){const e=ic(this.props)[0];this.confetti&&(this.confetti.options=e)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[e,n]=ic(this.props),r={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...n.style};return pe("canvas",{width:e.width,height:e.height,ref:this.canvas,...n,style:r})}}Ff.defaultProps={...$f};Ff.displayName="ReactConfetti";function ic(t){const e={},n={},r={},i=[...Object.keys($f),"confettiSource","drawShape","onConfettiComplete","frameRate"],s=["canvasRef"];for(const o in t){const a=t[o];i.includes(o)?e[o]=a:s.includes(o)?s[o]=a:r[o]=a}return[e,r,n]}const fR=_a.forwardRef((t,e)=>pe(Ff,{canvasRef:e,...t}));function pR({title:t,titleId:e,...n},r){return X.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},n),t?X.createElement("title",{id:e},t):null,X.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"}))}const mR=X.forwardRef(pR),gR=mR;function yR({title:t,titleId:e,...n},r){return X.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},n),t?X.createElement("title",{id:e},t):null,X.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"}),X.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const vR=X.forwardRef(yR),wR=vR;function ER({title:t,titleId:e,...n},r){return X.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},n),t?X.createElement("title",{id:e},t):null,X.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"}))}const SR=X.forwardRef(ER),_R=SR;function IR({user:t}){const[e,n]=X.useState(!1),r=X.useRef(null),i=_0();X.useEffect(()=>{function o(a){r.current&&!r.current.contains(a.target)&&n(!1)}return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[]);const s=()=>{xT(i).catch(o=>{console.error("Sign out failed:",o)})};return Mt("div",{className:"absolute top-2 right-4 z-20",ref:r,children:[pe("button",{onClick:()=>n(o=>!o),className:"p-2 rounded-full hover:bg-gray-700 transition","aria-label":"Settings",children:pe(wR,{className:"h-6 w-6 text-white"})}),e&&Mt("div",{className:"mt-2 w-56 rounded-md bg-gray-800 shadow-lg ring-1 ring-black/10 transition-opacity duration-200 animate-fade-in",children:[Mt("div",{className:"px-4 py-3 text-sm text-white flex items-center gap-2",children:[pe(_R,{className:"w-4 h-4 text-gray-400"}),pe("span",{className:"truncate",children:t.email})]}),Mt("button",{onClick:s,className:"w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-gray-700 flex items-center gap-2",children:[pe(gR,{className:"w-5 h-5"}),"Sign out"]})]})]})}function TR(){const t=_0(mg),e=OA(mg),n=new Gt,[r,i]=X.useState(null),[s,o]=X.useState([]),[a,l]=X.useState([]),[u,c]=X.useState([]),[h,f]=X.useState([]),[g,y]=X.useState(null);X.useEffect(()=>DT(t,async d=>{if(!d){i(null),l([]),c([]);return}i(d),await xr(Jn(e,"users",d.uid),{name:d.displayName},{merge:!0});const w=(await rc(nc(e,"terms"))).docs.map(N=>N.data().text);o(w);const I=Jn(e,"boards",d.uid),C=await qA(I);if(C.exists()){const N=C.data();l(N.terms),c(N.selected)}else{const N=gg(w),K=Array(25).fill(!1);K[12]=!0,await xr(I,{terms:N,selected:K}),l(N),c(K)}const R=await rc(nc(e,"users"));f(R.docs.map(N=>({id:N.id,...N.data()})))}),[t,e]),X.useEffect(()=>{const p=Jn(e,"round","current");let d=!0;return GA(p,w=>{if(d){d=!1;return}if(w.exists()){const{winnerName:I,timestamp:C}=w.data();y({winnerName:I,timestamp:C})}})},[e]);const v=async p=>{if(!r||a[p]==="FREE")return;const d=[...u];if(d[p]=!d[p],c(d),await xr(Jn(e,"boards",r.uid),{selected:d},{merge:!0}),ZA(d)){const m=Date.now(),w=Jn(e,"users",r.uid);await xr(w,{name:r.displayName,weeklyWins:pg(1),allTimeWins:pg(1),lastWin:m},{merge:!0}),await xr(Jn(e,"round","current"),{winnerName:r.displayName||"Anonymous",timestamp:m});const I=await rc(nc(e,"users"));f(I.docs.map(C=>({id:C.id,...C.data()})))}},T=async()=>{const p=gg(s),d=Array(25).fill(!1);d[12]=!0,await xr(Jn(e,"boards",r.uid),{terms:p,selected:d},{merge:!0}),l(p),c(d),y(null)};return Mt("div",{className:"flex flex-col md:flex-row h-screen bg-gray-900 text-white overflow-hidden",children:[r&&pe(IR,{user:r}),pe(iR,{data:h}),pe("div",{className:"flex-1 p-4 overflow-y-auto",children:r?Mt(lE,{children:[g&&Mt("div",{className:"fixed top-0 w-full bg-green-600 text-center py-3 z-10 text-sm sm:text-base",children:["🎉 ",g.winnerName," got a BINGO!",pe("button",{onClick:T,className:"ml-4 px-3 py-1 bg-gray-800 rounded hover:bg-gray-700",children:"Reset my board"})]}),Mt("div",{className:"mt-12",children:[pe(nR,{board:a,selected:u,onSelect:v}),g&&pe(fR,{recycle:!1})]})]}):pe("div",{className:"flex justify-center items-center h-full",children:pe("button",{onClick:()=>JT(t,n),className:"bg-blue-500 px-6 py-3 text-lg rounded w-full sm:w-auto",children:"Sign in with Google"})})})]})}sc.createRoot(document.getElementById("root")).render(pe(TR,{}));
