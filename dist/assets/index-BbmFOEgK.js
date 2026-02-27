(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function yT(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Td={exports:{}},ja={},Id={exports:{}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function _T(){if(Sg)return De;Sg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function C(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,K={};function B(O,$,fe){this.props=O,this.context=$,this.refs=K,this.updater=fe||F}B.prototype.isReactComponent={},B.prototype.setState=function(O,$){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,$,"setState")},B.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function pe(){}pe.prototype=B.prototype;function de(O,$,fe){this.props=O,this.context=$,this.refs=K,this.updater=fe||F}var ae=de.prototype=new pe;ae.constructor=de,q(ae,B.prototype),ae.isPureReactComponent=!0;var me=Array.isArray,Pe=Object.prototype.hasOwnProperty,ve={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function I(O,$,fe){var Re,Ce={},xe=null,Oe=null;if($!=null)for(Re in $.ref!==void 0&&(Oe=$.ref),$.key!==void 0&&(xe=""+$.key),$)Pe.call($,Re)&&!P.hasOwnProperty(Re)&&(Ce[Re]=$[Re]);var ze=arguments.length-2;if(ze===1)Ce.children=fe;else if(1<ze){for(var $e=Array(ze),ct=0;ct<ze;ct++)$e[ct]=arguments[ct+2];Ce.children=$e}if(O&&O.defaultProps)for(Re in ze=O.defaultProps,ze)Ce[Re]===void 0&&(Ce[Re]=ze[Re]);return{$$typeof:r,type:O,key:xe,ref:Oe,props:Ce,_owner:ve.current}}function R(O,$){return{$$typeof:r,type:O.type,key:$,ref:O.ref,props:O.props,_owner:O._owner}}function N(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function D(O){var $={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(fe){return $[fe]})}var b=/\/+/g;function A(O,$){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):$.toString(36)}function Ke(O,$,fe,Re,Ce){var xe=typeof O;(xe==="undefined"||xe==="boolean")&&(O=null);var Oe=!1;if(O===null)Oe=!0;else switch(xe){case"string":case"number":Oe=!0;break;case"object":switch(O.$$typeof){case r:case e:Oe=!0}}if(Oe)return Oe=O,Ce=Ce(Oe),O=Re===""?"."+A(Oe,0):Re,me(Ce)?(fe="",O!=null&&(fe=O.replace(b,"$&/")+"/"),Ke(Ce,$,fe,"",function(ct){return ct})):Ce!=null&&(N(Ce)&&(Ce=R(Ce,fe+(!Ce.key||Oe&&Oe.key===Ce.key?"":(""+Ce.key).replace(b,"$&/")+"/")+O)),$.push(Ce)),1;if(Oe=0,Re=Re===""?".":Re+":",me(O))for(var ze=0;ze<O.length;ze++){xe=O[ze];var $e=Re+A(xe,ze);Oe+=Ke(xe,$,fe,$e,Ce)}else if($e=C(O),typeof $e=="function")for(O=$e.call(O),ze=0;!(xe=O.next()).done;)xe=xe.value,$e=Re+A(xe,ze++),Oe+=Ke(xe,$,fe,$e,Ce);else if(xe==="object")throw $=String(O),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Oe}function Tt(O,$,fe){if(O==null)return O;var Re=[],Ce=0;return Ke(O,Re,"","",function(xe){return $.call(fe,xe,Ce++)}),Re}function mt(O){if(O._status===-1){var $=O._result;$=$(),$.then(function(fe){(O._status===0||O._status===-1)&&(O._status=1,O._result=fe)},function(fe){(O._status===0||O._status===-1)&&(O._status=2,O._result=fe)}),O._status===-1&&(O._status=0,O._result=$)}if(O._status===1)return O._result.default;throw O._result}var je={current:null},ee={transition:null},ge={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:ee,ReactCurrentOwner:ve};function ne(){throw Error("act(...) is not supported in production builds of React.")}return De.Children={map:Tt,forEach:function(O,$,fe){Tt(O,function(){$.apply(this,arguments)},fe)},count:function(O){var $=0;return Tt(O,function(){$++}),$},toArray:function(O){return Tt(O,function($){return $})||[]},only:function(O){if(!N(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},De.Component=B,De.Fragment=t,De.Profiler=o,De.PureComponent=de,De.StrictMode=i,De.Suspense=g,De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,De.act=ne,De.cloneElement=function(O,$,fe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Re=q({},O.props),Ce=O.key,xe=O.ref,Oe=O._owner;if($!=null){if($.ref!==void 0&&(xe=$.ref,Oe=ve.current),$.key!==void 0&&(Ce=""+$.key),O.type&&O.type.defaultProps)var ze=O.type.defaultProps;for($e in $)Pe.call($,$e)&&!P.hasOwnProperty($e)&&(Re[$e]=$[$e]===void 0&&ze!==void 0?ze[$e]:$[$e])}var $e=arguments.length-2;if($e===1)Re.children=fe;else if(1<$e){ze=Array($e);for(var ct=0;ct<$e;ct++)ze[ct]=arguments[ct+2];Re.children=ze}return{$$typeof:r,type:O.type,key:Ce,ref:xe,props:Re,_owner:Oe}},De.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},De.createElement=I,De.createFactory=function(O){var $=I.bind(null,O);return $.type=O,$},De.createRef=function(){return{current:null}},De.forwardRef=function(O){return{$$typeof:f,render:O}},De.isValidElement=N,De.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:mt}},De.memo=function(O,$){return{$$typeof:_,type:O,compare:$===void 0?null:$}},De.startTransition=function(O){var $=ee.transition;ee.transition={};try{O()}finally{ee.transition=$}},De.unstable_act=ne,De.useCallback=function(O,$){return je.current.useCallback(O,$)},De.useContext=function(O){return je.current.useContext(O)},De.useDebugValue=function(){},De.useDeferredValue=function(O){return je.current.useDeferredValue(O)},De.useEffect=function(O,$){return je.current.useEffect(O,$)},De.useId=function(){return je.current.useId()},De.useImperativeHandle=function(O,$,fe){return je.current.useImperativeHandle(O,$,fe)},De.useInsertionEffect=function(O,$){return je.current.useInsertionEffect(O,$)},De.useLayoutEffect=function(O,$){return je.current.useLayoutEffect(O,$)},De.useMemo=function(O,$){return je.current.useMemo(O,$)},De.useReducer=function(O,$,fe){return je.current.useReducer(O,$,fe)},De.useRef=function(O){return je.current.useRef(O)},De.useState=function(O){return je.current.useState(O)},De.useSyncExternalStore=function(O,$,fe){return je.current.useSyncExternalStore(O,$,fe)},De.useTransition=function(){return je.current.useTransition()},De.version="18.3.1",De}var Ag;function vf(){return Ag||(Ag=1,Id.exports=_T()),Id.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function vT(){if(Rg)return ja;Rg=1;var r=vf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var E,T={},C=null,F=null;_!==void 0&&(C=""+_),g.key!==void 0&&(C=""+g.key),g.ref!==void 0&&(F=g.ref);for(E in g)i.call(g,E)&&!l.hasOwnProperty(E)&&(T[E]=g[E]);if(f&&f.defaultProps)for(E in g=f.defaultProps,g)T[E]===void 0&&(T[E]=g[E]);return{$$typeof:e,type:f,key:C,ref:F,props:T,_owner:o.current}}return ja.Fragment=t,ja.jsx=h,ja.jsxs=h,ja}var Cg;function ET(){return Cg||(Cg=1,Td.exports=vT()),Td.exports}var j=ET(),be=vf();const wT=yT(be);var Fu={},Sd={exports:{}},un={},Ad={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function TT(){return kg||(kg=1,(function(r){function e(ee,ge){var ne=ee.length;ee.push(ge);e:for(;0<ne;){var O=ne-1>>>1,$=ee[O];if(0<o($,ge))ee[O]=ge,ee[ne]=$,ne=O;else break e}}function t(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var ge=ee[0],ne=ee.pop();if(ne!==ge){ee[0]=ne;e:for(var O=0,$=ee.length,fe=$>>>1;O<fe;){var Re=2*(O+1)-1,Ce=ee[Re],xe=Re+1,Oe=ee[xe];if(0>o(Ce,ne))xe<$&&0>o(Oe,Ce)?(ee[O]=Oe,ee[xe]=ne,O=xe):(ee[O]=Ce,ee[Re]=ne,O=Re);else if(xe<$&&0>o(Oe,ne))ee[O]=Oe,ee[xe]=ne,O=xe;else break e}}return ge}function o(ee,ge){var ne=ee.sortIndex-ge.sortIndex;return ne!==0?ne:ee.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],_=[],E=1,T=null,C=3,F=!1,q=!1,K=!1,B=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(ee){for(var ge=t(_);ge!==null;){if(ge.callback===null)i(_);else if(ge.startTime<=ee)i(_),ge.sortIndex=ge.expirationTime,e(g,ge);else break;ge=t(_)}}function me(ee){if(K=!1,ae(ee),!q)if(t(g)!==null)q=!0,mt(Pe);else{var ge=t(_);ge!==null&&je(me,ge.startTime-ee)}}function Pe(ee,ge){q=!1,K&&(K=!1,pe(I),I=-1),F=!0;var ne=C;try{for(ae(ge),T=t(g);T!==null&&(!(T.expirationTime>ge)||ee&&!D());){var O=T.callback;if(typeof O=="function"){T.callback=null,C=T.priorityLevel;var $=O(T.expirationTime<=ge);ge=r.unstable_now(),typeof $=="function"?T.callback=$:T===t(g)&&i(g),ae(ge)}else i(g);T=t(g)}if(T!==null)var fe=!0;else{var Re=t(_);Re!==null&&je(me,Re.startTime-ge),fe=!1}return fe}finally{T=null,C=ne,F=!1}}var ve=!1,P=null,I=-1,R=5,N=-1;function D(){return!(r.unstable_now()-N<R)}function b(){if(P!==null){var ee=r.unstable_now();N=ee;var ge=!0;try{ge=P(!0,ee)}finally{ge?A():(ve=!1,P=null)}}else ve=!1}var A;if(typeof de=="function")A=function(){de(b)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,Tt=Ke.port2;Ke.port1.onmessage=b,A=function(){Tt.postMessage(null)}}else A=function(){B(b,0)};function mt(ee){P=ee,ve||(ve=!0,A())}function je(ee,ge){I=B(function(){ee(r.unstable_now())},ge)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){q||F||(q=!0,mt(Pe))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(C){case 1:case 2:case 3:var ge=3;break;default:ge=C}var ne=C;C=ge;try{return ee()}finally{C=ne}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,ge){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ne=C;C=ee;try{return ge()}finally{C=ne}},r.unstable_scheduleCallback=function(ee,ge,ne){var O=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?O+ne:O):ne=O,ee){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=ne+$,ee={id:E++,callback:ge,priorityLevel:ee,startTime:ne,expirationTime:$,sortIndex:-1},ne>O?(ee.sortIndex=ne,e(_,ee),t(g)===null&&ee===t(_)&&(K?(pe(I),I=-1):K=!0,je(me,ne-O))):(ee.sortIndex=$,e(g,ee),q||F||(q=!0,mt(Pe))),ee},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(ee){var ge=C;return function(){var ne=C;C=ge;try{return ee.apply(this,arguments)}finally{C=ne}}}})(Rd)),Rd}var Pg;function IT(){return Pg||(Pg=1,Ad.exports=TT()),Ad.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function ST(){if(Ng)return un;Ng=1;var r=vf(),e=IT();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,s){h(n,s),h(n+"Capture",s)}function h(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function C(n){return g.call(T,n)?!0:g.call(E,n)?!1:_.test(n)?T[n]=!0:(E[n]=!0,!1)}function F(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function q(n,s,a,c){if(s===null||typeof s>"u"||F(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function K(n,s,a,c,d,m,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=m,this.removeEmptyString=v}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new K(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];B[s]=new K(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new K(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new K(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new K(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new K(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new K(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new K(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new K(n,5,!1,n.toLowerCase(),null,!1,!1)});var pe=/[\-:]([a-z])/g;function de(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(pe,de);B[s]=new K(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(pe,de);B[s]=new K(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(pe,de);B[s]=new K(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new K(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new K(n,1,!1,n.toLowerCase(),null,!0,!0)});function ae(n,s,a,c){var d=B.hasOwnProperty(s)?B[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(q(s,a,d,c)&&(a=null),c||d===null?C(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var me=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pe=Symbol.for("react.element"),ve=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),D=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),Tt=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),ee=Symbol.iterator;function ge(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,O;function $(n){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+n}var fe=!1;function Re(n,s){if(!n||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(U){var c=U}Reflect.construct(n,[],s)}else{try{s.call()}catch(U){c=U}n.call(s.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,S=m.length-1;1<=v&&0<=S&&d[v]!==m[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==m[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==m[S]){var k=`
`+d[v].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=v&&0<=S);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function Ce(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Re(n.type,!1),n;case 11:return n=Re(n.type.render,!1),n;case 1:return n=Re(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case ve:return"Portal";case R:return"Profiler";case I:return"StrictMode";case A:return"Suspense";case Ke:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case b:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Tt:return s=n.displayName||null,s!==null?s:xe(n.type)||"Memo";case mt:s=n._payload,n=n._init;try{return xe(n(s))}catch{}}return null}function Oe(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(s);case 8:return s===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ze(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ct(n){var s=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function Vn(n){n._valueTracker||(n._valueTracker=ct(n))}function Jr(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function en(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ln(n,s){var a=s.checked;return ne({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ar(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=ze(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Rr(n,s){s=s.checked,s!=null&&ae(n,"checked",s,!1)}function Qi(n,s){Rr(n,s);var a=ze(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?ei(n,s.type,a):s.hasOwnProperty("defaultValue")&&ei(n,s.type,ze(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Zr(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ei(n,s,a){(s!=="number"||en(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Mn=Array.isArray;function dn(n,s,a,c){if(n=n.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=s.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ze(a),s=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function Yi(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ti(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(Mn(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:ze(a)}}function ni(n,s){var a=ze(s.value),c=ze(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Xi(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function ht(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function at(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?ht(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Fn,G=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,d)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(Fn=Fn||document.createElement("div"),Fn.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Fn.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function te(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var re={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(re).forEach(function(n){ke.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),re[s]=re[n]})});function Je(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||re.hasOwnProperty(n)&&re[n]?(""+s).trim():s+"px"}function ri(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Je(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Zo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ea(n,s){if(s){if(Zo[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ta(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ji=null;function js(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var zs=null,Tn=null,sr=null;function Bs(n){if(n=Aa(n)){if(typeof zs!="function")throw Error(t(280));var s=n.stateNode;s&&(s=Zl(s),zs(n.stateNode,n.type,s))}}function or(n){Tn?sr?sr.push(n):sr=[n]:Tn=n}function na(){if(Tn){var n=Tn,s=sr;if(sr=Tn=null,Bs(n),s)for(n=0;n<s.length;n++)Bs(s[n])}}function Zi(n,s){return n(s)}function ra(){}var Cr=!1;function ia(n,s,a){if(Cr)return n(s,a);Cr=!0;try{return Zi(n,s,a)}finally{Cr=!1,(Tn!==null||sr!==null)&&(ra(),na())}}function dt(n,s){var a=n.stateNode;if(a===null)return null;var c=Zl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var $s=!1;if(f)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){$s=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{$s=!1}function es(n,s,a,c,d,m,v,S,k){var U=Array.prototype.slice.call(arguments,3);try{s.apply(a,U)}catch(Y){this.onError(Y)}}var ts=!1,qs=null,jn=!1,sa=null,Yc={onError:function(n){ts=!0,qs=n}};function Hs(n,s,a,c,d,m,v,S,k){ts=!1,qs=null,es.apply(Yc,arguments)}function Sl(n,s,a,c,d,m,v,S,k){if(Hs.apply(this,arguments),ts){if(ts){var U=qs;ts=!1,qs=null}else throw Error(t(198));jn||(jn=!0,sa=U)}}function zn(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function ns(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Bn(n){if(zn(n)!==n)throw Error(t(188))}function Al(n){var s=n.alternate;if(!s){if(s=zn(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Bn(d),n;if(m===c)return Bn(d),s;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=m;break}if(S===c){v=!0,c=d,a=m;break}S=S.sibling}if(!v){for(S=m.child;S;){if(S===a){v=!0,a=m,c=d;break}if(S===c){v=!0,c=m,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function oa(n){return n=Al(n),n!==null?Ws(n):null}function Ws(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Ws(n);if(s!==null)return s;n=n.sibling}return null}var Gs=e.unstable_scheduleCallback,aa=e.unstable_cancelCallback,Rl=e.unstable_shouldYield,Xc=e.unstable_requestPaint,Qe=e.unstable_now,Cl=e.unstable_getCurrentPriorityLevel,rs=e.unstable_ImmediatePriority,ii=e.unstable_UserBlockingPriority,In=e.unstable_NormalPriority,la=e.unstable_LowPriority,kl=e.unstable_IdlePriority,is=null,fn=null;function Pl(n){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(is,n,void 0,(n.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:xl,ua=Math.log,Nl=Math.LN2;function xl(n){return n>>>=0,n===0?32:31-(ua(n)/Nl|0)|0}var Ks=64,Qs=4194304;function si(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ss(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=si(S):(m&=v,m!==0&&(c=si(m)))}else v=a&~d,v!==0?c=si(v):m!==0&&(c=si(m));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,m=s&-s,d>=m||d===16&&(m&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-Qt(s),d=1<<a,c|=n[a],s&=~d;return c}function Jc(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kr(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-Qt(m),S=1<<v,k=d[v];k===-1?((S&a)===0||(S&c)!==0)&&(d[v]=Jc(S,s)):k<=s&&(n.expiredLanes|=S),m&=~S}}function pn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function os(){var n=Ks;return Ks<<=1,(Ks&4194240)===0&&(Ks=64),n}function oi(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function ai(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-Qt(s),n[s]=a}function Ge(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Qt(a),m=1<<d;s[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function li(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-Qt(a),d=1<<c;d&s|n[c]&s&&(n[c]|=s),a&=~d}}var Me=0;function ui(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Dl,Ys,Ol,bl,Vl,ca=!1,ar=[],bt=null,$n=null,qn=null,ci=new Map,Sn=new Map,lr=[],Zc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ll(n,s){switch(n){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":ci.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(s.pointerId)}}function tn(n,s,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Aa(s),s!==null&&Ys(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function eh(n,s,a,c,d){switch(s){case"focusin":return bt=tn(bt,n,s,a,c,d),!0;case"dragenter":return $n=tn($n,n,s,a,c,d),!0;case"mouseover":return qn=tn(qn,n,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return ci.set(m,tn(ci.get(m)||null,n,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Sn.set(m,tn(Sn.get(m)||null,n,s,a,c,d)),!0}return!1}function Ml(n){var s=hs(n.target);if(s!==null){var a=zn(s);if(a!==null){if(s=a.tag,s===13){if(s=ns(a),s!==null){n.blockedOn=s,Vl(n.priority,function(){Ol(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Pr(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=Xs(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ji=c,a.target.dispatchEvent(c),Ji=null}else return s=Aa(a),s!==null&&Ys(s),n.blockedOn=a,!1;s.shift()}return!0}function as(n,s,a){Pr(n)&&a.delete(s)}function Fl(){ca=!1,bt!==null&&Pr(bt)&&(bt=null),$n!==null&&Pr($n)&&($n=null),qn!==null&&Pr(qn)&&(qn=null),ci.forEach(as),Sn.forEach(as)}function Hn(n,s){n.blockedOn===s&&(n.blockedOn=null,ca||(ca=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Fl)))}function Wn(n){function s(d){return Hn(d,n)}if(0<ar.length){Hn(ar[0],n);for(var a=1;a<ar.length;a++){var c=ar[a];c.blockedOn===n&&(c.blockedOn=null)}}for(bt!==null&&Hn(bt,n),$n!==null&&Hn($n,n),qn!==null&&Hn(qn,n),ci.forEach(s),Sn.forEach(s),a=0;a<lr.length;a++)c=lr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<lr.length&&(a=lr[0],a.blockedOn===null);)Ml(a),a.blockedOn===null&&lr.shift()}var Nr=me.ReactCurrentBatchConfig,hi=!0;function nt(n,s,a,c){var d=Me,m=Nr.transition;Nr.transition=null;try{Me=1,ha(n,s,a,c)}finally{Me=d,Nr.transition=m}}function th(n,s,a,c){var d=Me,m=Nr.transition;Nr.transition=null;try{Me=4,ha(n,s,a,c)}finally{Me=d,Nr.transition=m}}function ha(n,s,a,c){if(hi){var d=Xs(n,s,a,c);if(d===null)dh(n,s,c,ls,a),Ll(n,c);else if(eh(d,n,s,a,c))c.stopPropagation();else if(Ll(n,c),s&4&&-1<Zc.indexOf(n)){for(;d!==null;){var m=Aa(d);if(m!==null&&Dl(m),m=Xs(n,s,a,c),m===null&&dh(n,s,c,ls,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else dh(n,s,c,null,a)}}var ls=null;function Xs(n,s,a,c){if(ls=null,n=js(c),n=hs(n),n!==null)if(s=zn(n),s===null)n=null;else if(a=s.tag,a===13){if(n=ns(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return ls=n,null}function da(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cl()){case rs:return 1;case ii:return 4;case In:case la:return 16;case kl:return 536870912;default:return 16}default:return 16}}var mn=null,Js=null,nn=null;function fa(){if(nn)return nn;var n,s=Js,a=s.length,c,d="value"in mn?mn.value:mn.textContent,m=d.length;for(n=0;n<a&&s[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&s[a-c]===d[m-c];c++);return nn=d.slice(n,1<c?1-c:void 0)}function Zs(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function ur(){return!0}function pa(){return!1}function Vt(n){function s(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ur:pa,this.isPropagationStopped=pa,this}return ne(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),s}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=Vt(Gn),cr=ne({},Gn,{view:0,detail:0}),nh=Vt(cr),to,xr,di,us=ne({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==di&&(di&&n.type==="mousemove"?(to=n.screenX-di.screenX,xr=n.screenY-di.screenY):xr=to=0,di=n),to)},movementY:function(n){return"movementY"in n?n.movementY:xr}}),no=Vt(us),ma=ne({},us,{dataTransfer:0}),Ul=Vt(ma),ro=ne({},cr,{relatedTarget:0}),io=Vt(ro),jl=ne({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Dr=Vt(jl),zl=ne({},Gn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Bl=Vt(zl),$l=ne({},Gn,{data:0}),ga=Vt($l),so={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ql={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hl(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=ql[n])?!!s[n]:!1}function hr(){return Hl}var u=ne({},cr,{key:function(n){if(n.key){var s=so[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Zs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Yt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hr,charCode:function(n){return n.type==="keypress"?Zs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Zs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=Vt(u),y=ne({},us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Vt(y),V=ne({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hr}),z=Vt(V),Z=ne({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),We=Vt(Z),It=ne({},us,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Fe=Vt(It),Ct=[9,13,27,32],gt=f&&"CompositionEvent"in window,An=null;f&&"documentMode"in document&&(An=document.documentMode);var gn=f&&"TextEvent"in window&&!An,cs=f&&(!gt||An&&8<An&&11>=An),oo=" ",_p=!1;function vp(n,s){switch(n){case"keyup":return Ct.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ao=!1;function pw(n,s){switch(n){case"compositionend":return Ep(s);case"keypress":return s.which!==32?null:(_p=!0,oo);case"textInput":return n=s.data,n===oo&&_p?null:n;default:return null}}function mw(n,s){if(ao)return n==="compositionend"||!gt&&vp(n,s)?(n=fa(),nn=Js=mn=null,ao=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return cs&&s.locale!=="ko"?null:s.data;default:return null}}var gw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!gw[n.type]:s==="textarea"}function Tp(n,s,a,c){or(c),s=Yl(s,"onChange"),0<s.length&&(a=new eo("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var ya=null,_a=null;function yw(n){jp(n,0)}function Wl(n){var s=fo(n);if(Jr(s))return n}function _w(n,s){if(n==="change")return s}var Ip=!1;if(f){var rh;if(f){var ih="oninput"in document;if(!ih){var Sp=document.createElement("div");Sp.setAttribute("oninput","return;"),ih=typeof Sp.oninput=="function"}rh=ih}else rh=!1;Ip=rh&&(!document.documentMode||9<document.documentMode)}function Ap(){ya&&(ya.detachEvent("onpropertychange",Rp),_a=ya=null)}function Rp(n){if(n.propertyName==="value"&&Wl(_a)){var s=[];Tp(s,_a,n,js(n)),ia(yw,s)}}function vw(n,s,a){n==="focusin"?(Ap(),ya=s,_a=a,ya.attachEvent("onpropertychange",Rp)):n==="focusout"&&Ap()}function Ew(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Wl(_a)}function ww(n,s){if(n==="click")return Wl(s)}function Tw(n,s){if(n==="input"||n==="change")return Wl(s)}function Iw(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Kn=typeof Object.is=="function"?Object.is:Iw;function va(n,s){if(Kn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(s,d)||!Kn(n[d],s[d]))return!1}return!0}function Cp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function kp(n,s){var a=Cp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Cp(a)}}function Pp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Pp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Np(){for(var n=window,s=en();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=en(n.document)}return s}function sh(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function Sw(n){var s=Np(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&Pp(a.ownerDocument.documentElement,a)){if(c!==null&&sh(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=kp(a,m);var v=kp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(s),n.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Aw=f&&"documentMode"in document&&11>=document.documentMode,lo=null,oh=null,Ea=null,ah=!1;function xp(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ah||lo==null||lo!==en(c)||(c=lo,"selectionStart"in c&&sh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ea&&va(Ea,c)||(Ea=c,c=Yl(oh,"onSelect"),0<c.length&&(s=new eo("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=lo)))}function Gl(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var uo={animationend:Gl("Animation","AnimationEnd"),animationiteration:Gl("Animation","AnimationIteration"),animationstart:Gl("Animation","AnimationStart"),transitionend:Gl("Transition","TransitionEnd")},lh={},Dp={};f&&(Dp=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function Kl(n){if(lh[n])return lh[n];if(!uo[n])return n;var s=uo[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in Dp)return lh[n]=s[a];return n}var Op=Kl("animationend"),bp=Kl("animationiteration"),Vp=Kl("animationstart"),Lp=Kl("transitionend"),Mp=new Map,Fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fi(n,s){Mp.set(n,s),l(s,[n])}for(var uh=0;uh<Fp.length;uh++){var ch=Fp[uh],Rw=ch.toLowerCase(),Cw=ch[0].toUpperCase()+ch.slice(1);fi(Rw,"on"+Cw)}fi(Op,"onAnimationEnd"),fi(bp,"onAnimationIteration"),fi(Vp,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(Lp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kw=new Set("cancel close invalid load scroll toggle".split(" ").concat(wa));function Up(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,Sl(c,s,void 0,n),n.currentTarget=null}function jp(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var v=c.length-1;0<=v;v--){var S=c[v],k=S.instance,U=S.currentTarget;if(S=S.listener,k!==m&&d.isPropagationStopped())break e;Up(d,S,U),m=k}else for(v=0;v<c.length;v++){if(S=c[v],k=S.instance,U=S.currentTarget,S=S.listener,k!==m&&d.isPropagationStopped())break e;Up(d,S,U),m=k}}}if(jn)throw n=sa,jn=!1,sa=null,n}function Ze(n,s){var a=s[_h];a===void 0&&(a=s[_h]=new Set);var c=n+"__bubble";a.has(c)||(zp(s,n,2,!1),a.add(c))}function hh(n,s,a){var c=0;s&&(c|=4),zp(a,n,c,s)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Ta(n){if(!n[Ql]){n[Ql]=!0,i.forEach(function(a){a!=="selectionchange"&&(kw.has(a)||hh(a,!1,n),hh(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Ql]||(s[Ql]=!0,hh("selectionchange",!1,s))}}function zp(n,s,a,c){switch(da(s)){case 1:var d=nt;break;case 4:d=th;break;default:d=ha}a=d.bind(null,s,a,n),d=void 0,!$s||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(s,a,{capture:!0,passive:d}):n.addEventListener(s,a,!0):d!==void 0?n.addEventListener(s,a,{passive:d}):n.addEventListener(s,a,!1)}function dh(n,s,a,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;v=v.return}for(;S!==null;){if(v=hs(S),v===null)return;if(k=v.tag,k===5||k===6){c=m=v;continue e}S=S.parentNode}}c=c.return}ia(function(){var U=m,Y=js(a),X=[];e:{var Q=Mp.get(n);if(Q!==void 0){var ie=eo,ue=n;switch(n){case"keypress":if(Zs(a)===0)break e;case"keydown":case"keyup":ie=p;break;case"focusin":ue="focus",ie=io;break;case"focusout":ue="blur",ie=io;break;case"beforeblur":case"afterblur":ie=io;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=no;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Ul;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=z;break;case Op:case bp:case Vp:ie=Dr;break;case Lp:ie=We;break;case"scroll":ie=nh;break;case"wheel":ie=Fe;break;case"copy":case"cut":case"paste":ie=Bl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=w}var ce=(s&4)!==0,ft=!ce&&n==="scroll",L=ce?Q!==null?Q+"Capture":null:Q;ce=[];for(var x=U,M;x!==null;){M=x;var J=M.stateNode;if(M.tag===5&&J!==null&&(M=J,L!==null&&(J=dt(x,L),J!=null&&ce.push(Ia(x,J,M)))),ft)break;x=x.return}0<ce.length&&(Q=new ie(Q,ue,null,a,Y),X.push({event:Q,listeners:ce}))}}if((s&7)===0){e:{if(Q=n==="mouseover"||n==="pointerover",ie=n==="mouseout"||n==="pointerout",Q&&a!==Ji&&(ue=a.relatedTarget||a.fromElement)&&(hs(ue)||ue[Or]))break e;if((ie||Q)&&(Q=Y.window===Y?Y:(Q=Y.ownerDocument)?Q.defaultView||Q.parentWindow:window,ie?(ue=a.relatedTarget||a.toElement,ie=U,ue=ue?hs(ue):null,ue!==null&&(ft=zn(ue),ue!==ft||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(ie=null,ue=U),ie!==ue)){if(ce=no,J="onMouseLeave",L="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(ce=w,J="onPointerLeave",L="onPointerEnter",x="pointer"),ft=ie==null?Q:fo(ie),M=ue==null?Q:fo(ue),Q=new ce(J,x+"leave",ie,a,Y),Q.target=ft,Q.relatedTarget=M,J=null,hs(Y)===U&&(ce=new ce(L,x+"enter",ue,a,Y),ce.target=M,ce.relatedTarget=ft,J=ce),ft=J,ie&&ue)t:{for(ce=ie,L=ue,x=0,M=ce;M;M=co(M))x++;for(M=0,J=L;J;J=co(J))M++;for(;0<x-M;)ce=co(ce),x--;for(;0<M-x;)L=co(L),M--;for(;x--;){if(ce===L||L!==null&&ce===L.alternate)break t;ce=co(ce),L=co(L)}ce=null}else ce=null;ie!==null&&Bp(X,Q,ie,ce,!1),ue!==null&&ft!==null&&Bp(X,ft,ue,ce,!0)}}e:{if(Q=U?fo(U):window,ie=Q.nodeName&&Q.nodeName.toLowerCase(),ie==="select"||ie==="input"&&Q.type==="file")var he=_w;else if(wp(Q))if(Ip)he=Tw;else{he=Ew;var Ee=vw}else(ie=Q.nodeName)&&ie.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(he=ww);if(he&&(he=he(n,U))){Tp(X,he,a,Y);break e}Ee&&Ee(n,Q,U),n==="focusout"&&(Ee=Q._wrapperState)&&Ee.controlled&&Q.type==="number"&&ei(Q,"number",Q.value)}switch(Ee=U?fo(U):window,n){case"focusin":(wp(Ee)||Ee.contentEditable==="true")&&(lo=Ee,oh=U,Ea=null);break;case"focusout":Ea=oh=lo=null;break;case"mousedown":ah=!0;break;case"contextmenu":case"mouseup":case"dragend":ah=!1,xp(X,a,Y);break;case"selectionchange":if(Aw)break;case"keydown":case"keyup":xp(X,a,Y)}var we;if(gt)e:{switch(n){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else ao?vp(n,a)&&(Ie="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ie="onCompositionStart");Ie&&(cs&&a.locale!=="ko"&&(ao||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&ao&&(we=fa()):(mn=Y,Js="value"in mn?mn.value:mn.textContent,ao=!0)),Ee=Yl(U,Ie),0<Ee.length&&(Ie=new ga(Ie,n,null,a,Y),X.push({event:Ie,listeners:Ee}),we?Ie.data=we:(we=Ep(a),we!==null&&(Ie.data=we)))),(we=gn?pw(n,a):mw(n,a))&&(U=Yl(U,"onBeforeInput"),0<U.length&&(Y=new ga("onBeforeInput","beforeinput",null,a,Y),X.push({event:Y,listeners:U}),Y.data=we))}jp(X,s)})}function Ia(n,s,a){return{instance:n,listener:s,currentTarget:a}}function Yl(n,s){for(var a=s+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=dt(n,a),m!=null&&c.unshift(Ia(n,m,d)),m=dt(n,s),m!=null&&c.push(Ia(n,m,d))),n=n.return}return c}function co(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Bp(n,s,a,c,d){for(var m=s._reactName,v=[];a!==null&&a!==c;){var S=a,k=S.alternate,U=S.stateNode;if(k!==null&&k===c)break;S.tag===5&&U!==null&&(S=U,d?(k=dt(a,m),k!=null&&v.unshift(Ia(a,k,S))):d||(k=dt(a,m),k!=null&&v.push(Ia(a,k,S)))),a=a.return}v.length!==0&&n.push({event:s,listeners:v})}var Pw=/\r\n?/g,Nw=/\u0000|\uFFFD/g;function $p(n){return(typeof n=="string"?n:""+n).replace(Pw,`
`).replace(Nw,"")}function Xl(n,s,a){if(s=$p(s),$p(n)!==s&&a)throw Error(t(425))}function Jl(){}var fh=null,ph=null;function mh(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var gh=typeof setTimeout=="function"?setTimeout:void 0,xw=typeof clearTimeout=="function"?clearTimeout:void 0,qp=typeof Promise=="function"?Promise:void 0,Dw=typeof queueMicrotask=="function"?queueMicrotask:typeof qp<"u"?function(n){return qp.resolve(null).then(n).catch(Ow)}:gh;function Ow(n){setTimeout(function(){throw n})}function yh(n,s){var a=s,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Wn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Wn(s)}function pi(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Hp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var ho=Math.random().toString(36).slice(2),dr="__reactFiber$"+ho,Sa="__reactProps$"+ho,Or="__reactContainer$"+ho,_h="__reactEvents$"+ho,bw="__reactListeners$"+ho,Vw="__reactHandles$"+ho;function hs(n){var s=n[dr];if(s)return s;for(var a=n.parentNode;a;){if(s=a[Or]||a[dr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=Hp(n);n!==null;){if(a=n[dr])return a;n=Hp(n)}return s}n=a,a=n.parentNode}return null}function Aa(n){return n=n[dr]||n[Or],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function fo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Zl(n){return n[Sa]||null}var vh=[],po=-1;function mi(n){return{current:n}}function et(n){0>po||(n.current=vh[po],vh[po]=null,po--)}function Ye(n,s){po++,vh[po]=n.current,n.current=s}var gi={},zt=mi(gi),rn=mi(!1),ds=gi;function mo(n,s){var a=n.type.contextTypes;if(!a)return gi;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=s[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=d),d}function sn(n){return n=n.childContextTypes,n!=null}function eu(){et(rn),et(zt)}function Wp(n,s,a){if(zt.current!==gi)throw Error(t(168));Ye(zt,s),Ye(rn,a)}function Gp(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Oe(n)||"Unknown",d));return ne({},a,c)}function tu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gi,ds=zt.current,Ye(zt,n),Ye(rn,rn.current),!0}function Kp(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Gp(n,s,ds),c.__reactInternalMemoizedMergedChildContext=n,et(rn),et(zt),Ye(zt,n)):et(rn),Ye(rn,a)}var br=null,nu=!1,Eh=!1;function Qp(n){br===null?br=[n]:br.push(n)}function Lw(n){nu=!0,Qp(n)}function yi(){if(!Eh&&br!==null){Eh=!0;var n=0,s=Me;try{var a=br;for(Me=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}br=null,nu=!1}catch(d){throw br!==null&&(br=br.slice(n+1)),Gs(rs,yi),d}finally{Me=s,Eh=!1}}return null}var go=[],yo=0,ru=null,iu=0,Rn=[],Cn=0,fs=null,Vr=1,Lr="";function ps(n,s){go[yo++]=iu,go[yo++]=ru,ru=n,iu=s}function Yp(n,s,a){Rn[Cn++]=Vr,Rn[Cn++]=Lr,Rn[Cn++]=fs,fs=n;var c=Vr;n=Lr;var d=32-Qt(c)-1;c&=~(1<<d),a+=1;var m=32-Qt(s)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Vr=1<<32-Qt(s)+d|a<<d|c,Lr=m+n}else Vr=1<<m|a<<d|c,Lr=n}function wh(n){n.return!==null&&(ps(n,1),Yp(n,1,0))}function Th(n){for(;n===ru;)ru=go[--yo],go[yo]=null,iu=go[--yo],go[yo]=null;for(;n===fs;)fs=Rn[--Cn],Rn[Cn]=null,Lr=Rn[--Cn],Rn[Cn]=null,Vr=Rn[--Cn],Rn[Cn]=null}var yn=null,_n=null,rt=!1,Qn=null;function Xp(n,s){var a=xn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function Jp(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,yn=n,_n=pi(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,yn=n,_n=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=fs!==null?{id:Vr,overflow:Lr}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=xn(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,yn=n,_n=null,!0):!1;default:return!1}}function Ih(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Sh(n){if(rt){var s=_n;if(s){var a=s;if(!Jp(n,s)){if(Ih(n))throw Error(t(418));s=pi(a.nextSibling);var c=yn;s&&Jp(n,s)?Xp(c,a):(n.flags=n.flags&-4097|2,rt=!1,yn=n)}}else{if(Ih(n))throw Error(t(418));n.flags=n.flags&-4097|2,rt=!1,yn=n}}}function Zp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;yn=n}function su(n){if(n!==yn)return!1;if(!rt)return Zp(n),rt=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!mh(n.type,n.memoizedProps)),s&&(s=_n)){if(Ih(n))throw em(),Error(t(418));for(;s;)Xp(n,s),s=pi(s.nextSibling)}if(Zp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){_n=pi(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}_n=null}}else _n=yn?pi(n.stateNode.nextSibling):null;return!0}function em(){for(var n=_n;n;)n=pi(n.nextSibling)}function _o(){_n=yn=null,rt=!1}function Ah(n){Qn===null?Qn=[n]:Qn.push(n)}var Mw=me.ReactCurrentBatchConfig;function Ra(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(v){var S=d.refs;v===null?delete S[m]:S[m]=v},s._stringRef=m,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ou(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function tm(n){var s=n._init;return s(n._payload)}function nm(n){function s(L,x){if(n){var M=L.deletions;M===null?(L.deletions=[x],L.flags|=16):M.push(x)}}function a(L,x){if(!n)return null;for(;x!==null;)s(L,x),x=x.sibling;return null}function c(L,x){for(L=new Map;x!==null;)x.key!==null?L.set(x.key,x):L.set(x.index,x),x=x.sibling;return L}function d(L,x){return L=Ai(L,x),L.index=0,L.sibling=null,L}function m(L,x,M){return L.index=M,n?(M=L.alternate,M!==null?(M=M.index,M<x?(L.flags|=2,x):M):(L.flags|=2,x)):(L.flags|=1048576,x)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function S(L,x,M,J){return x===null||x.tag!==6?(x=gd(M,L.mode,J),x.return=L,x):(x=d(x,M),x.return=L,x)}function k(L,x,M,J){var he=M.type;return he===P?Y(L,x,M.props.children,J,M.key):x!==null&&(x.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===mt&&tm(he)===x.type)?(J=d(x,M.props),J.ref=Ra(L,x,M),J.return=L,J):(J=Nu(M.type,M.key,M.props,null,L.mode,J),J.ref=Ra(L,x,M),J.return=L,J)}function U(L,x,M,J){return x===null||x.tag!==4||x.stateNode.containerInfo!==M.containerInfo||x.stateNode.implementation!==M.implementation?(x=yd(M,L.mode,J),x.return=L,x):(x=d(x,M.children||[]),x.return=L,x)}function Y(L,x,M,J,he){return x===null||x.tag!==7?(x=Ts(M,L.mode,J,he),x.return=L,x):(x=d(x,M),x.return=L,x)}function X(L,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return x=gd(""+x,L.mode,M),x.return=L,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Pe:return M=Nu(x.type,x.key,x.props,null,L.mode,M),M.ref=Ra(L,null,x),M.return=L,M;case ve:return x=yd(x,L.mode,M),x.return=L,x;case mt:var J=x._init;return X(L,J(x._payload),M)}if(Mn(x)||ge(x))return x=Ts(x,L.mode,M,null),x.return=L,x;ou(L,x)}return null}function Q(L,x,M,J){var he=x!==null?x.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return he!==null?null:S(L,x,""+M,J);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Pe:return M.key===he?k(L,x,M,J):null;case ve:return M.key===he?U(L,x,M,J):null;case mt:return he=M._init,Q(L,x,he(M._payload),J)}if(Mn(M)||ge(M))return he!==null?null:Y(L,x,M,J,null);ou(L,M)}return null}function ie(L,x,M,J,he){if(typeof J=="string"&&J!==""||typeof J=="number")return L=L.get(M)||null,S(x,L,""+J,he);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Pe:return L=L.get(J.key===null?M:J.key)||null,k(x,L,J,he);case ve:return L=L.get(J.key===null?M:J.key)||null,U(x,L,J,he);case mt:var Ee=J._init;return ie(L,x,M,Ee(J._payload),he)}if(Mn(J)||ge(J))return L=L.get(M)||null,Y(x,L,J,he,null);ou(x,J)}return null}function ue(L,x,M,J){for(var he=null,Ee=null,we=x,Ie=x=0,Nt=null;we!==null&&Ie<M.length;Ie++){we.index>Ie?(Nt=we,we=null):Nt=we.sibling;var qe=Q(L,we,M[Ie],J);if(qe===null){we===null&&(we=Nt);break}n&&we&&qe.alternate===null&&s(L,we),x=m(qe,x,Ie),Ee===null?he=qe:Ee.sibling=qe,Ee=qe,we=Nt}if(Ie===M.length)return a(L,we),rt&&ps(L,Ie),he;if(we===null){for(;Ie<M.length;Ie++)we=X(L,M[Ie],J),we!==null&&(x=m(we,x,Ie),Ee===null?he=we:Ee.sibling=we,Ee=we);return rt&&ps(L,Ie),he}for(we=c(L,we);Ie<M.length;Ie++)Nt=ie(we,L,Ie,M[Ie],J),Nt!==null&&(n&&Nt.alternate!==null&&we.delete(Nt.key===null?Ie:Nt.key),x=m(Nt,x,Ie),Ee===null?he=Nt:Ee.sibling=Nt,Ee=Nt);return n&&we.forEach(function(Ri){return s(L,Ri)}),rt&&ps(L,Ie),he}function ce(L,x,M,J){var he=ge(M);if(typeof he!="function")throw Error(t(150));if(M=he.call(M),M==null)throw Error(t(151));for(var Ee=he=null,we=x,Ie=x=0,Nt=null,qe=M.next();we!==null&&!qe.done;Ie++,qe=M.next()){we.index>Ie?(Nt=we,we=null):Nt=we.sibling;var Ri=Q(L,we,qe.value,J);if(Ri===null){we===null&&(we=Nt);break}n&&we&&Ri.alternate===null&&s(L,we),x=m(Ri,x,Ie),Ee===null?he=Ri:Ee.sibling=Ri,Ee=Ri,we=Nt}if(qe.done)return a(L,we),rt&&ps(L,Ie),he;if(we===null){for(;!qe.done;Ie++,qe=M.next())qe=X(L,qe.value,J),qe!==null&&(x=m(qe,x,Ie),Ee===null?he=qe:Ee.sibling=qe,Ee=qe);return rt&&ps(L,Ie),he}for(we=c(L,we);!qe.done;Ie++,qe=M.next())qe=ie(we,L,Ie,qe.value,J),qe!==null&&(n&&qe.alternate!==null&&we.delete(qe.key===null?Ie:qe.key),x=m(qe,x,Ie),Ee===null?he=qe:Ee.sibling=qe,Ee=qe);return n&&we.forEach(function(gT){return s(L,gT)}),rt&&ps(L,Ie),he}function ft(L,x,M,J){if(typeof M=="object"&&M!==null&&M.type===P&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Pe:e:{for(var he=M.key,Ee=x;Ee!==null;){if(Ee.key===he){if(he=M.type,he===P){if(Ee.tag===7){a(L,Ee.sibling),x=d(Ee,M.props.children),x.return=L,L=x;break e}}else if(Ee.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===mt&&tm(he)===Ee.type){a(L,Ee.sibling),x=d(Ee,M.props),x.ref=Ra(L,Ee,M),x.return=L,L=x;break e}a(L,Ee);break}else s(L,Ee);Ee=Ee.sibling}M.type===P?(x=Ts(M.props.children,L.mode,J,M.key),x.return=L,L=x):(J=Nu(M.type,M.key,M.props,null,L.mode,J),J.ref=Ra(L,x,M),J.return=L,L=J)}return v(L);case ve:e:{for(Ee=M.key;x!==null;){if(x.key===Ee)if(x.tag===4&&x.stateNode.containerInfo===M.containerInfo&&x.stateNode.implementation===M.implementation){a(L,x.sibling),x=d(x,M.children||[]),x.return=L,L=x;break e}else{a(L,x);break}else s(L,x);x=x.sibling}x=yd(M,L.mode,J),x.return=L,L=x}return v(L);case mt:return Ee=M._init,ft(L,x,Ee(M._payload),J)}if(Mn(M))return ue(L,x,M,J);if(ge(M))return ce(L,x,M,J);ou(L,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,x!==null&&x.tag===6?(a(L,x.sibling),x=d(x,M),x.return=L,L=x):(a(L,x),x=gd(M,L.mode,J),x.return=L,L=x),v(L)):a(L,x)}return ft}var vo=nm(!0),rm=nm(!1),au=mi(null),lu=null,Eo=null,Rh=null;function Ch(){Rh=Eo=lu=null}function kh(n){var s=au.current;et(au),n._currentValue=s}function Ph(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function wo(n,s){lu=n,Rh=Eo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(on=!0),n.firstContext=null)}function kn(n){var s=n._currentValue;if(Rh!==n)if(n={context:n,memoizedValue:s,next:null},Eo===null){if(lu===null)throw Error(t(308));Eo=n,lu.dependencies={lanes:0,firstContext:n}}else Eo=Eo.next=n;return s}var ms=null;function Nh(n){ms===null?ms=[n]:ms.push(n)}function im(n,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Nh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Mr(n,c)}function Mr(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var _i=!1;function xh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sm(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Fr(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function vi(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Be&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Mr(n,a)}return d=c.interleaved,d===null?(s.next=s,Nh(c)):(s.next=d.next,d.next=s),c.interleaved=s,Mr(n,a)}function uu(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,li(n,a)}}function om(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function cu(n,s,a,c){var d=n.updateQueue;_i=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var k=S,U=k.next;k.next=null,v===null?m=U:v.next=U,v=k;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,S=Y.lastBaseUpdate,S!==v&&(S===null?Y.firstBaseUpdate=U:S.next=U,Y.lastBaseUpdate=k))}if(m!==null){var X=d.baseState;v=0,Y=U=k=null,S=m;do{var Q=S.lane,ie=S.eventTime;if((c&Q)===Q){Y!==null&&(Y=Y.next={eventTime:ie,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ue=n,ce=S;switch(Q=s,ie=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){X=ue.call(ie,X,Q);break e}X=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,Q=typeof ue=="function"?ue.call(ie,X,Q):ue,Q==null)break e;X=ne({},X,Q);break e;case 2:_i=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,Q=d.effects,Q===null?d.effects=[S]:Q.push(S))}else ie={eventTime:ie,lane:Q,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Y===null?(U=Y=ie,k=X):Y=Y.next=ie,v|=Q;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;Q=S,S=Q.next,Q.next=null,d.lastBaseUpdate=Q,d.shared.pending=null}}while(!0);if(Y===null&&(k=X),d.baseState=k,d.firstBaseUpdate=U,d.lastBaseUpdate=Y,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else m===null&&(d.shared.lanes=0);_s|=v,n.lanes=v,n.memoizedState=X}}function am(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ca={},fr=mi(Ca),ka=mi(Ca),Pa=mi(Ca);function gs(n){if(n===Ca)throw Error(t(174));return n}function Dh(n,s){switch(Ye(Pa,s),Ye(ka,n),Ye(fr,Ca),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:at(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=at(s,n)}et(fr),Ye(fr,s)}function To(){et(fr),et(ka),et(Pa)}function lm(n){gs(Pa.current);var s=gs(fr.current),a=at(s,n.type);s!==a&&(Ye(ka,n),Ye(fr,a))}function Oh(n){ka.current===n&&(et(fr),et(ka))}var it=mi(0);function hu(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var bh=[];function Vh(){for(var n=0;n<bh.length;n++)bh[n]._workInProgressVersionPrimary=null;bh.length=0}var du=me.ReactCurrentDispatcher,Lh=me.ReactCurrentBatchConfig,ys=0,st=null,St=null,kt=null,fu=!1,Na=!1,xa=0,Fw=0;function Bt(){throw Error(t(321))}function Mh(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!Kn(n[a],s[a]))return!1;return!0}function Fh(n,s,a,c,d,m){if(ys=m,st=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,du.current=n===null||n.memoizedState===null?Bw:$w,n=a(c,d),Na){m=0;do{if(Na=!1,xa=0,25<=m)throw Error(t(301));m+=1,kt=St=null,s.updateQueue=null,du.current=qw,n=a(c,d)}while(Na)}if(du.current=gu,s=St!==null&&St.next!==null,ys=0,kt=St=st=null,fu=!1,s)throw Error(t(300));return n}function Uh(){var n=xa!==0;return xa=0,n}function pr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?st.memoizedState=kt=n:kt=kt.next=n,kt}function Pn(){if(St===null){var n=st.alternate;n=n!==null?n.memoizedState:null}else n=St.next;var s=kt===null?st.memoizedState:kt.next;if(s!==null)kt=s,St=n;else{if(n===null)throw Error(t(310));St=n,n={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},kt===null?st.memoizedState=kt=n:kt=kt.next=n}return kt}function Da(n,s){return typeof s=="function"?s(n):s}function jh(n){var s=Pn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=St,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var S=v=null,k=null,U=m;do{var Y=U.lane;if((ys&Y)===Y)k!==null&&(k=k.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var X={lane:Y,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};k===null?(S=k=X,v=c):k=k.next=X,st.lanes|=Y,_s|=Y}U=U.next}while(U!==null&&U!==m);k===null?v=c:k.next=S,Kn(c,s.memoizedState)||(on=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,st.lanes|=m,_s|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function zh(n){var s=Pn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);Kn(m,s.memoizedState)||(on=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function um(){}function cm(n,s){var a=st,c=Pn(),d=s(),m=!Kn(c.memoizedState,d);if(m&&(c.memoizedState=d,on=!0),c=c.queue,Bh(fm.bind(null,a,c,n),[n]),c.getSnapshot!==s||m||kt!==null&&kt.memoizedState.tag&1){if(a.flags|=2048,Oa(9,dm.bind(null,a,c,d,s),void 0,null),Pt===null)throw Error(t(349));(ys&30)!==0||hm(a,s,d)}return d}function hm(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=st.updateQueue,s===null?(s={lastEffect:null,stores:null},st.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function dm(n,s,a,c){s.value=a,s.getSnapshot=c,pm(s)&&mm(n)}function fm(n,s,a){return a(function(){pm(s)&&mm(n)})}function pm(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!Kn(n,a)}catch{return!0}}function mm(n){var s=Mr(n,1);s!==null&&Zn(s,n,1,-1)}function gm(n){var s=pr();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:n},s.queue=n,n=n.dispatch=zw.bind(null,st,n),[s.memoizedState,n]}function Oa(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=st.updateQueue,s===null?(s={lastEffect:null,stores:null},st.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function ym(){return Pn().memoizedState}function pu(n,s,a,c){var d=pr();st.flags|=n,d.memoizedState=Oa(1|s,a,void 0,c===void 0?null:c)}function mu(n,s,a,c){var d=Pn();c=c===void 0?null:c;var m=void 0;if(St!==null){var v=St.memoizedState;if(m=v.destroy,c!==null&&Mh(c,v.deps)){d.memoizedState=Oa(s,a,m,c);return}}st.flags|=n,d.memoizedState=Oa(1|s,a,m,c)}function _m(n,s){return pu(8390656,8,n,s)}function Bh(n,s){return mu(2048,8,n,s)}function vm(n,s){return mu(4,2,n,s)}function Em(n,s){return mu(4,4,n,s)}function wm(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Tm(n,s,a){return a=a!=null?a.concat([n]):null,mu(4,4,wm.bind(null,s,n),a)}function $h(){}function Im(n,s){var a=Pn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Mh(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function Sm(n,s){var a=Pn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Mh(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function Am(n,s,a){return(ys&21)===0?(n.baseState&&(n.baseState=!1,on=!0),n.memoizedState=a):(Kn(a,s)||(a=os(),st.lanes|=a,_s|=a,n.baseState=!0),s)}function Uw(n,s){var a=Me;Me=a!==0&&4>a?a:4,n(!0);var c=Lh.transition;Lh.transition={};try{n(!1),s()}finally{Me=a,Lh.transition=c}}function Rm(){return Pn().memoizedState}function jw(n,s,a){var c=Ii(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Cm(n))km(s,a);else if(a=im(n,s,a,c),a!==null){var d=Jt();Zn(a,n,c,d),Pm(a,s,c)}}function zw(n,s,a){var c=Ii(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cm(n))km(s,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,S=m(v,a);if(d.hasEagerState=!0,d.eagerState=S,Kn(S,v)){var k=s.interleaved;k===null?(d.next=d,Nh(s)):(d.next=k.next,k.next=d),s.interleaved=d;return}}catch{}finally{}a=im(n,s,d,c),a!==null&&(d=Jt(),Zn(a,n,c,d),Pm(a,s,c))}}function Cm(n){var s=n.alternate;return n===st||s!==null&&s===st}function km(n,s){Na=fu=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function Pm(n,s,a){if((a&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,li(n,a)}}var gu={readContext:kn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},Bw={readContext:kn,useCallback:function(n,s){return pr().memoizedState=[n,s===void 0?null:s],n},useContext:kn,useEffect:_m,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,pu(4194308,4,wm.bind(null,s,n),a)},useLayoutEffect:function(n,s){return pu(4194308,4,n,s)},useInsertionEffect:function(n,s){return pu(4,2,n,s)},useMemo:function(n,s){var a=pr();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=pr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=jw.bind(null,st,n),[c.memoizedState,n]},useRef:function(n){var s=pr();return n={current:n},s.memoizedState=n},useState:gm,useDebugValue:$h,useDeferredValue:function(n){return pr().memoizedState=n},useTransition:function(){var n=gm(!1),s=n[0];return n=Uw.bind(null,n[1]),pr().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=st,d=pr();if(rt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Pt===null)throw Error(t(349));(ys&30)!==0||hm(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,_m(fm.bind(null,c,m,n),[n]),c.flags|=2048,Oa(9,dm.bind(null,c,m,a,s),void 0,null),a},useId:function(){var n=pr(),s=Pt.identifierPrefix;if(rt){var a=Lr,c=Vr;a=(c&~(1<<32-Qt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=xa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Fw++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},$w={readContext:kn,useCallback:Im,useContext:kn,useEffect:Bh,useImperativeHandle:Tm,useInsertionEffect:vm,useLayoutEffect:Em,useMemo:Sm,useReducer:jh,useRef:ym,useState:function(){return jh(Da)},useDebugValue:$h,useDeferredValue:function(n){var s=Pn();return Am(s,St.memoizedState,n)},useTransition:function(){var n=jh(Da)[0],s=Pn().memoizedState;return[n,s]},useMutableSource:um,useSyncExternalStore:cm,useId:Rm,unstable_isNewReconciler:!1},qw={readContext:kn,useCallback:Im,useContext:kn,useEffect:Bh,useImperativeHandle:Tm,useInsertionEffect:vm,useLayoutEffect:Em,useMemo:Sm,useReducer:zh,useRef:ym,useState:function(){return zh(Da)},useDebugValue:$h,useDeferredValue:function(n){var s=Pn();return St===null?s.memoizedState=n:Am(s,St.memoizedState,n)},useTransition:function(){var n=zh(Da)[0],s=Pn().memoizedState;return[n,s]},useMutableSource:um,useSyncExternalStore:cm,useId:Rm,unstable_isNewReconciler:!1};function Yn(n,s){if(n&&n.defaultProps){s=ne({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function qh(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:ne({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var yu={isMounted:function(n){return(n=n._reactInternals)?zn(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=Jt(),d=Ii(n),m=Fr(c,d);m.payload=s,a!=null&&(m.callback=a),s=vi(n,m,d),s!==null&&(Zn(s,n,d,c),uu(s,n,d))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=Jt(),d=Ii(n),m=Fr(c,d);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=vi(n,m,d),s!==null&&(Zn(s,n,d,c),uu(s,n,d))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=Jt(),c=Ii(n),d=Fr(a,c);d.tag=2,s!=null&&(d.callback=s),s=vi(n,d,c),s!==null&&(Zn(s,n,c,a),uu(s,n,c))}};function Nm(n,s,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):s.prototype&&s.prototype.isPureReactComponent?!va(a,c)||!va(d,m):!0}function xm(n,s,a){var c=!1,d=gi,m=s.contextType;return typeof m=="object"&&m!==null?m=kn(m):(d=sn(s)?ds:zt.current,c=s.contextTypes,m=(c=c!=null)?mo(n,d):gi),s=new s(a,m),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=yu,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),s}function Dm(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&yu.enqueueReplaceState(s,s.state,null)}function Hh(n,s,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},xh(n);var m=s.contextType;typeof m=="object"&&m!==null?d.context=kn(m):(m=sn(s)?ds:zt.current,d.context=mo(n,m)),d.state=n.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(qh(n,s,m,a),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&yu.enqueueReplaceState(d,d.state,null),cu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Io(n,s){try{var a="",c=s;do a+=Ce(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:s,stack:d,digest:null}}function Wh(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function Gh(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var Hw=typeof WeakMap=="function"?WeakMap:Map;function Om(n,s,a){a=Fr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Su||(Su=!0,ld=c),Gh(n,s)},a}function bm(n,s,a){a=Fr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){Gh(n,s)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Gh(n,s),typeof c!="function"&&(wi===null?wi=new Set([this]):wi.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Vm(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Hw;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),n=sT.bind(null,n,s,a),s.then(n,n))}function Lm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Mm(n,s,a,c,d){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Fr(-1,1),s.tag=2,vi(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Ww=me.ReactCurrentOwner,on=!1;function Xt(n,s,a,c){s.child=n===null?rm(s,null,a,c):vo(s,n.child,a,c)}function Fm(n,s,a,c,d){a=a.render;var m=s.ref;return wo(s,d),c=Fh(n,s,a,c,m,d),a=Uh(),n!==null&&!on?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Ur(n,s,d)):(rt&&a&&wh(s),s.flags|=1,Xt(n,s,c,d),s.child)}function Um(n,s,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!md(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,jm(n,s,m,c,d)):(n=Nu(a.type,null,c,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(m=n.child,(n.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:va,a(v,c)&&n.ref===s.ref)return Ur(n,s,d)}return s.flags|=1,n=Ai(m,c),n.ref=s.ref,n.return=s,s.child=n}function jm(n,s,a,c,d){if(n!==null){var m=n.memoizedProps;if(va(m,c)&&n.ref===s.ref)if(on=!1,s.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(on=!0);else return s.lanes=n.lanes,Ur(n,s,d)}return Kh(n,s,a,c,d)}function zm(n,s,a){var c=s.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ye(Ao,vn),vn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Ye(Ao,vn),vn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Ye(Ao,vn),vn|=c}else m!==null?(c=m.baseLanes|a,s.memoizedState=null):c=a,Ye(Ao,vn),vn|=c;return Xt(n,s,d,a),s.child}function Bm(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Kh(n,s,a,c,d){var m=sn(a)?ds:zt.current;return m=mo(s,m),wo(s,d),a=Fh(n,s,a,c,m,d),c=Uh(),n!==null&&!on?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~d,Ur(n,s,d)):(rt&&c&&wh(s),s.flags|=1,Xt(n,s,a,d),s.child)}function $m(n,s,a,c,d){if(sn(a)){var m=!0;tu(s)}else m=!1;if(wo(s,d),s.stateNode===null)vu(n,s),xm(s,a,c),Hh(s,a,c,d),c=!0;else if(n===null){var v=s.stateNode,S=s.memoizedProps;v.props=S;var k=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=kn(U):(U=sn(a)?ds:zt.current,U=mo(s,U));var Y=a.getDerivedStateFromProps,X=typeof Y=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||k!==U)&&Dm(s,v,c,U),_i=!1;var Q=s.memoizedState;v.state=Q,cu(s,c,v,d),k=s.memoizedState,S!==c||Q!==k||rn.current||_i?(typeof Y=="function"&&(qh(s,a,Y,c),k=s.memoizedState),(S=_i||Nm(s,a,S,c,Q,k,U))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=k),v.props=c,v.state=k,v.context=U,c=S):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,sm(n,s),S=s.memoizedProps,U=s.type===s.elementType?S:Yn(s.type,S),v.props=U,X=s.pendingProps,Q=v.context,k=a.contextType,typeof k=="object"&&k!==null?k=kn(k):(k=sn(a)?ds:zt.current,k=mo(s,k));var ie=a.getDerivedStateFromProps;(Y=typeof ie=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==X||Q!==k)&&Dm(s,v,c,k),_i=!1,Q=s.memoizedState,v.state=Q,cu(s,c,v,d);var ue=s.memoizedState;S!==X||Q!==ue||rn.current||_i?(typeof ie=="function"&&(qh(s,a,ie,c),ue=s.memoizedState),(U=_i||Nm(s,a,U,c,Q,ue,k)||!1)?(Y||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,k)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&Q===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&Q===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ue),v.props=c,v.state=ue,v.context=k,c=U):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&Q===n.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&Q===n.memoizedState||(s.flags|=1024),c=!1)}return Qh(n,s,a,c,m,d)}function Qh(n,s,a,c,d,m){Bm(n,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&Kp(s,a,!1),Ur(n,s,m);c=s.stateNode,Ww.current=s;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&v?(s.child=vo(s,n.child,null,m),s.child=vo(s,null,S,m)):Xt(n,s,S,m),s.memoizedState=c.state,d&&Kp(s,a,!0),s.child}function qm(n){var s=n.stateNode;s.pendingContext?Wp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Wp(n,s.context,!1),Dh(n,s.containerInfo)}function Hm(n,s,a,c,d){return _o(),Ah(d),s.flags|=256,Xt(n,s,a,c),s.child}var Yh={dehydrated:null,treeContext:null,retryLane:0};function Xh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Wm(n,s,a){var c=s.pendingProps,d=it.current,m=!1,v=(s.flags&128)!==0,S;if((S=v)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(m=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ye(it,d&1),n===null)return Sh(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,n=c.fallback,m?(c=s.mode,m=s.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=xu(v,c,0,null),n=Ts(n,c,a,null),m.return=s,n.return=s,m.sibling=n,s.child=m,s.child.memoizedState=Xh(a),s.memoizedState=Yh,n):Jh(s,v));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return Gw(n,s,v,c,S,d,a);if(m){m=c.fallback,v=s.mode,d=n.child,S=d.sibling;var k={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=k,s.deletions=null):(c=Ai(d,k),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?m=Ai(S,m):(m=Ts(m,v,a,null),m.flags|=2),m.return=s,c.return=s,c.sibling=m,s.child=c,c=m,m=s.child,v=n.child.memoizedState,v=v===null?Xh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,s.memoizedState=Yh,c}return m=n.child,n=m.sibling,c=Ai(m,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function Jh(n,s){return s=xu({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function _u(n,s,a,c){return c!==null&&Ah(c),vo(s,n.child,null,a),n=Jh(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function Gw(n,s,a,c,d,m,v){if(a)return s.flags&256?(s.flags&=-257,c=Wh(Error(t(422))),_u(n,s,v,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(m=c.fallback,d=s.mode,c=xu({mode:"visible",children:c.children},d,0,null),m=Ts(m,d,v,null),m.flags|=2,c.return=s,m.return=s,c.sibling=m,s.child=c,(s.mode&1)!==0&&vo(s,n.child,null,v),s.child.memoizedState=Xh(v),s.memoizedState=Yh,m);if((s.mode&1)===0)return _u(n,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,m=Error(t(419)),c=Wh(m,c,void 0),_u(n,s,v,c)}if(S=(v&n.childLanes)!==0,on||S){if(c=Pt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Mr(n,d),Zn(c,n,d,-1))}return pd(),c=Wh(Error(t(421))),_u(n,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=n.child,s=oT.bind(null,n),d._reactRetry=s,null):(n=m.treeContext,_n=pi(d.nextSibling),yn=s,rt=!0,Qn=null,n!==null&&(Rn[Cn++]=Vr,Rn[Cn++]=Lr,Rn[Cn++]=fs,Vr=n.id,Lr=n.overflow,fs=s),s=Jh(s,c.children),s.flags|=4096,s)}function Gm(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),Ph(n.return,s,a)}function Zh(n,s,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Km(n,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(Xt(n,s,c.children,a),c=it.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Gm(n,a,s);else if(n.tag===19)Gm(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ye(it,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)n=a.alternate,n!==null&&hu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Zh(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&hu(n)===null){s.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Zh(s,!0,a,null,m);break;case"together":Zh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function vu(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Ur(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),_s|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=Ai(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=Ai(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function Kw(n,s,a){switch(s.tag){case 3:qm(s),_o();break;case 5:lm(s);break;case 1:sn(s.type)&&tu(s);break;case 4:Dh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;Ye(au,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ye(it,it.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Wm(n,s,a):(Ye(it,it.current&1),n=Ur(n,s,a),n!==null?n.sibling:null);Ye(it,it.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(n.flags&128)!==0){if(c)return Km(n,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ye(it,it.current),c)break;return null;case 22:case 23:return s.lanes=0,zm(n,s,a)}return Ur(n,s,a)}var Qm,ed,Ym,Xm;Qm=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ed=function(){},Ym=function(n,s,a,c){var d=n.memoizedProps;if(d!==c){n=s.stateNode,gs(fr.current);var m=null;switch(a){case"input":d=Ln(n,d),c=Ln(n,c),m=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),m=[];break;case"textarea":d=Yi(n,d),c=Yi(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Jl)}ea(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var S=d[U];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?m||(m=[]):(m=m||[]).push(U,null));for(U in c){var k=c[U];if(S=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&k!==S&&(k!=null||S!=null))if(U==="style")if(S){for(v in S)!S.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in k)k.hasOwnProperty(v)&&S[v]!==k[v]&&(a||(a={}),a[v]=k[v])}else a||(m||(m=[]),m.push(U,a)),a=k;else U==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,S=S?S.__html:void 0,k!=null&&S!==k&&(m=m||[]).push(U,k)):U==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(U,""+k):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(k!=null&&U==="onScroll"&&Ze("scroll",n),m||S===k||(m=[])):(m=m||[]).push(U,k))}a&&(m=m||[]).push("style",a);var U=m;(s.updateQueue=U)&&(s.flags|=4)}},Xm=function(n,s,a,c){a!==c&&(s.flags|=4)};function ba(n,s){if(!rt)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function $t(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function Qw(n,s,a){var c=s.pendingProps;switch(Th(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(s),null;case 1:return sn(s.type)&&eu(),$t(s),null;case 3:return c=s.stateNode,To(),et(rn),et(zt),Vh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(su(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Qn!==null&&(hd(Qn),Qn=null))),ed(n,s),$t(s),null;case 5:Oh(s);var d=gs(Pa.current);if(a=s.type,n!==null&&s.stateNode!=null)Ym(n,s,a,c,d),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return $t(s),null}if(n=gs(fr.current),su(s)){c=s.stateNode,a=s.type;var m=s.memoizedProps;switch(c[dr]=s,c[Sa]=m,n=(s.mode&1)!==0,a){case"dialog":Ze("cancel",c),Ze("close",c);break;case"iframe":case"object":case"embed":Ze("load",c);break;case"video":case"audio":for(d=0;d<wa.length;d++)Ze(wa[d],c);break;case"source":Ze("error",c);break;case"img":case"image":case"link":Ze("error",c),Ze("load",c);break;case"details":Ze("toggle",c);break;case"input":Ar(c,m),Ze("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ze("invalid",c);break;case"textarea":ti(c,m),Ze("invalid",c)}ea(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var S=m[v];v==="children"?typeof S=="string"?c.textContent!==S&&(m.suppressHydrationWarning!==!0&&Xl(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(m.suppressHydrationWarning!==!0&&Xl(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Ze("scroll",c)}switch(a){case"input":Vn(c),Zr(c,m,!0);break;case"textarea":Vn(c),Xi(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Jl)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ht(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[dr]=s,n[Sa]=c,Qm(n,s,!1,!1),s.stateNode=n;e:{switch(v=ta(a,c),a){case"dialog":Ze("cancel",n),Ze("close",n),d=c;break;case"iframe":case"object":case"embed":Ze("load",n),d=c;break;case"video":case"audio":for(d=0;d<wa.length;d++)Ze(wa[d],n);d=c;break;case"source":Ze("error",n),d=c;break;case"img":case"image":case"link":Ze("error",n),Ze("load",n),d=c;break;case"details":Ze("toggle",n),d=c;break;case"input":Ar(n,c),d=Ln(n,c),Ze("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),Ze("invalid",n);break;case"textarea":ti(n,c),d=Yi(n,c),Ze("invalid",n);break;default:d=c}ea(a,d),S=d;for(m in S)if(S.hasOwnProperty(m)){var k=S[m];m==="style"?ri(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&G(n,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&te(n,k):typeof k=="number"&&te(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Ze("scroll",n):k!=null&&ae(n,m,k,v))}switch(a){case"input":Vn(n),Zr(n,c,!1);break;case"textarea":Vn(n),Xi(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ze(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?dn(n,!!c.multiple,m,!1):c.defaultValue!=null&&dn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Jl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return $t(s),null;case 6:if(n&&s.stateNode!=null)Xm(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=gs(Pa.current),gs(fr.current),su(s)){if(c=s.stateNode,a=s.memoizedProps,c[dr]=s,(m=c.nodeValue!==a)&&(n=yn,n!==null))switch(n.tag){case 3:Xl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Xl(c.nodeValue,a,(n.mode&1)!==0)}m&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[dr]=s,s.stateNode=c}return $t(s),null;case 13:if(et(it),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(rt&&_n!==null&&(s.mode&1)!==0&&(s.flags&128)===0)em(),_o(),s.flags|=98560,m=!1;else if(m=su(s),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[dr]=s}else _o(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;$t(s),m=!1}else Qn!==null&&(hd(Qn),Qn=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(it.current&1)!==0?At===0&&(At=3):pd())),s.updateQueue!==null&&(s.flags|=4),$t(s),null);case 4:return To(),ed(n,s),n===null&&Ta(s.stateNode.containerInfo),$t(s),null;case 10:return kh(s.type._context),$t(s),null;case 17:return sn(s.type)&&eu(),$t(s),null;case 19:if(et(it),m=s.memoizedState,m===null)return $t(s),null;if(c=(s.flags&128)!==0,v=m.rendering,v===null)if(c)ba(m,!1);else{if(At!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(v=hu(n),v!==null){for(s.flags|=128,ba(m,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ye(it,it.current&1|2),s.child}n=n.sibling}m.tail!==null&&Qe()>Ro&&(s.flags|=128,c=!0,ba(m,!1),s.lanes=4194304)}else{if(!c)if(n=hu(v),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),ba(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!rt)return $t(s),null}else 2*Qe()-m.renderingStartTime>Ro&&a!==1073741824&&(s.flags|=128,c=!0,ba(m,!1),s.lanes=4194304);m.isBackwards?(v.sibling=s.child,s.child=v):(a=m.last,a!==null?a.sibling=v:s.child=v,m.last=v)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=Qe(),s.sibling=null,a=it.current,Ye(it,c?a&1|2:a&1),s):($t(s),null);case 22:case 23:return fd(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(vn&1073741824)!==0&&($t(s),s.subtreeFlags&6&&(s.flags|=8192)):$t(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function Yw(n,s){switch(Th(s),s.tag){case 1:return sn(s.type)&&eu(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return To(),et(rn),et(zt),Vh(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Oh(s),null;case 13:if(et(it),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));_o()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return et(it),null;case 4:return To(),null;case 10:return kh(s.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var Eu=!1,qt=!1,Xw=typeof WeakSet=="function"?WeakSet:Set,le=null;function So(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){lt(n,s,c)}else a.current=null}function td(n,s,a){try{a()}catch(c){lt(n,s,c)}}var Jm=!1;function Jw(n,s){if(fh=hi,n=Np(),sh(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,S=-1,k=-1,U=0,Y=0,X=n,Q=null;t:for(;;){for(var ie;X!==a||d!==0&&X.nodeType!==3||(S=v+d),X!==m||c!==0&&X.nodeType!==3||(k=v+c),X.nodeType===3&&(v+=X.nodeValue.length),(ie=X.firstChild)!==null;)Q=X,X=ie;for(;;){if(X===n)break t;if(Q===a&&++U===d&&(S=v),Q===m&&++Y===c&&(k=v),(ie=X.nextSibling)!==null)break;X=Q,Q=X.parentNode}X=ie}a=S===-1||k===-1?null:{start:S,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(ph={focusedElem:n,selectionRange:a},hi=!1,le=s;le!==null;)if(s=le,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,le=n;else for(;le!==null;){s=le;try{var ue=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,ft=ue.memoizedState,L=s.stateNode,x=L.getSnapshotBeforeUpdate(s.elementType===s.type?ce:Yn(s.type,ce),ft);L.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var M=s.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){lt(s,s.return,J)}if(n=s.sibling,n!==null){n.return=s.return,le=n;break}le=s.return}return ue=Jm,Jm=!1,ue}function Va(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&td(s,a,m)}d=d.next}while(d!==c)}}function wu(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function nd(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function Zm(n){var s=n.alternate;s!==null&&(n.alternate=null,Zm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[dr],delete s[Sa],delete s[_h],delete s[bw],delete s[Vw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function eg(n){return n.tag===5||n.tag===3||n.tag===4}function tg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||eg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rd(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Jl));else if(c!==4&&(n=n.child,n!==null))for(rd(n,s,a),n=n.sibling;n!==null;)rd(n,s,a),n=n.sibling}function id(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(id(n,s,a),n=n.sibling;n!==null;)id(n,s,a),n=n.sibling}var Lt=null,Xn=!1;function Ei(n,s,a){for(a=a.child;a!==null;)ng(n,s,a),a=a.sibling}function ng(n,s,a){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(is,a)}catch{}switch(a.tag){case 5:qt||So(a,s);case 6:var c=Lt,d=Xn;Lt=null,Ei(n,s,a),Lt=c,Xn=d,Lt!==null&&(Xn?(n=Lt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Lt.removeChild(a.stateNode));break;case 18:Lt!==null&&(Xn?(n=Lt,a=a.stateNode,n.nodeType===8?yh(n.parentNode,a):n.nodeType===1&&yh(n,a),Wn(n)):yh(Lt,a.stateNode));break;case 4:c=Lt,d=Xn,Lt=a.stateNode.containerInfo,Xn=!0,Ei(n,s,a),Lt=c,Xn=d;break;case 0:case 11:case 14:case 15:if(!qt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&td(a,s,v),d=d.next}while(d!==c)}Ei(n,s,a);break;case 1:if(!qt&&(So(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){lt(a,s,S)}Ei(n,s,a);break;case 21:Ei(n,s,a);break;case 22:a.mode&1?(qt=(c=qt)||a.memoizedState!==null,Ei(n,s,a),qt=c):Ei(n,s,a);break;default:Ei(n,s,a)}}function rg(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Xw),s.forEach(function(c){var d=aT.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Jn(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=s,S=v;e:for(;S!==null;){switch(S.tag){case 5:Lt=S.stateNode,Xn=!1;break e;case 3:Lt=S.stateNode.containerInfo,Xn=!0;break e;case 4:Lt=S.stateNode.containerInfo,Xn=!0;break e}S=S.return}if(Lt===null)throw Error(t(160));ng(m,v,d),Lt=null,Xn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(U){lt(d,s,U)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)ig(s,n),s=s.sibling}function ig(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Jn(s,n),mr(n),c&4){try{Va(3,n,n.return),wu(3,n)}catch(ce){lt(n,n.return,ce)}try{Va(5,n,n.return)}catch(ce){lt(n,n.return,ce)}}break;case 1:Jn(s,n),mr(n),c&512&&a!==null&&So(a,a.return);break;case 5:if(Jn(s,n),mr(n),c&512&&a!==null&&So(a,a.return),n.flags&32){var d=n.stateNode;try{te(d,"")}catch(ce){lt(n,n.return,ce)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,S=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{S==="input"&&m.type==="radio"&&m.name!=null&&Rr(d,m),ta(S,v);var U=ta(S,m);for(v=0;v<k.length;v+=2){var Y=k[v],X=k[v+1];Y==="style"?ri(d,X):Y==="dangerouslySetInnerHTML"?G(d,X):Y==="children"?te(d,X):ae(d,Y,X,U)}switch(S){case"input":Qi(d,m);break;case"textarea":ni(d,m);break;case"select":var Q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ie=m.value;ie!=null?dn(d,!!m.multiple,ie,!1):Q!==!!m.multiple&&(m.defaultValue!=null?dn(d,!!m.multiple,m.defaultValue,!0):dn(d,!!m.multiple,m.multiple?[]:"",!1))}d[Sa]=m}catch(ce){lt(n,n.return,ce)}}break;case 6:if(Jn(s,n),mr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(ce){lt(n,n.return,ce)}}break;case 3:if(Jn(s,n),mr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Wn(s.containerInfo)}catch(ce){lt(n,n.return,ce)}break;case 4:Jn(s,n),mr(n);break;case 13:Jn(s,n),mr(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(ad=Qe())),c&4&&rg(n);break;case 22:if(Y=a!==null&&a.memoizedState!==null,n.mode&1?(qt=(U=qt)||Y,Jn(s,n),qt=U):Jn(s,n),mr(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!Y&&(n.mode&1)!==0)for(le=n,Y=n.child;Y!==null;){for(X=le=Y;le!==null;){switch(Q=le,ie=Q.child,Q.tag){case 0:case 11:case 14:case 15:Va(4,Q,Q.return);break;case 1:So(Q,Q.return);var ue=Q.stateNode;if(typeof ue.componentWillUnmount=="function"){c=Q,a=Q.return;try{s=c,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(ce){lt(c,a,ce)}}break;case 5:So(Q,Q.return);break;case 22:if(Q.memoizedState!==null){ag(X);continue}}ie!==null?(ie.return=Q,le=ie):ag(X)}Y=Y.sibling}e:for(Y=null,X=n;;){if(X.tag===5){if(Y===null){Y=X;try{d=X.stateNode,U?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(S=X.stateNode,k=X.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,S.style.display=Je("display",v))}catch(ce){lt(n,n.return,ce)}}}else if(X.tag===6){if(Y===null)try{X.stateNode.nodeValue=U?"":X.memoizedProps}catch(ce){lt(n,n.return,ce)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;Y===X&&(Y=null),X=X.return}Y===X&&(Y=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Jn(s,n),mr(n),c&4&&rg(n);break;case 21:break;default:Jn(s,n),mr(n)}}function mr(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(eg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(te(d,""),c.flags&=-33);var m=tg(n);id(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=tg(n);rd(n,S,v);break;default:throw Error(t(161))}}catch(k){lt(n,n.return,k)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function Zw(n,s,a){le=n,sg(n)}function sg(n,s,a){for(var c=(n.mode&1)!==0;le!==null;){var d=le,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Eu;if(!v){var S=d.alternate,k=S!==null&&S.memoizedState!==null||qt;S=Eu;var U=qt;if(Eu=v,(qt=k)&&!U)for(le=d;le!==null;)v=le,k=v.child,v.tag===22&&v.memoizedState!==null?lg(d):k!==null?(k.return=v,le=k):lg(d);for(;m!==null;)le=m,sg(m),m=m.sibling;le=d,Eu=S,qt=U}og(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,le=m):og(n)}}function og(n){for(;le!==null;){var s=le;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:qt||wu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!qt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Yn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&am(s,m,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}am(s,v,a)}break;case 5:var S=s.stateNode;if(a===null&&s.flags&4){a=S;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var U=s.alternate;if(U!==null){var Y=U.memoizedState;if(Y!==null){var X=Y.dehydrated;X!==null&&Wn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}qt||s.flags&512&&nd(s)}catch(Q){lt(s,s.return,Q)}}if(s===n){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function ag(n){for(;le!==null;){var s=le;if(s===n){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function lg(n){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{wu(4,s)}catch(k){lt(s,a,k)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(k){lt(s,d,k)}}var m=s.return;try{nd(s)}catch(k){lt(s,m,k)}break;case 5:var v=s.return;try{nd(s)}catch(k){lt(s,v,k)}}}catch(k){lt(s,s.return,k)}if(s===n){le=null;break}var S=s.sibling;if(S!==null){S.return=s.return,le=S;break}le=s.return}}var eT=Math.ceil,Tu=me.ReactCurrentDispatcher,sd=me.ReactCurrentOwner,Nn=me.ReactCurrentBatchConfig,Be=0,Pt=null,yt=null,Mt=0,vn=0,Ao=mi(0),At=0,La=null,_s=0,Iu=0,od=0,Ma=null,an=null,ad=0,Ro=1/0,jr=null,Su=!1,ld=null,wi=null,Au=!1,Ti=null,Ru=0,Fa=0,ud=null,Cu=-1,ku=0;function Jt(){return(Be&6)!==0?Qe():Cu!==-1?Cu:Cu=Qe()}function Ii(n){return(n.mode&1)===0?1:(Be&2)!==0&&Mt!==0?Mt&-Mt:Mw.transition!==null?(ku===0&&(ku=os()),ku):(n=Me,n!==0||(n=window.event,n=n===void 0?16:da(n.type)),n)}function Zn(n,s,a,c){if(50<Fa)throw Fa=0,ud=null,Error(t(185));ai(n,a,c),((Be&2)===0||n!==Pt)&&(n===Pt&&((Be&2)===0&&(Iu|=a),At===4&&Si(n,Mt)),ln(n,c),a===1&&Be===0&&(s.mode&1)===0&&(Ro=Qe()+500,nu&&yi()))}function ln(n,s){var a=n.callbackNode;kr(n,s);var c=ss(n,n===Pt?Mt:0);if(c===0)a!==null&&aa(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&aa(a),s===1)n.tag===0?Lw(cg.bind(null,n)):Qp(cg.bind(null,n)),Dw(function(){(Be&6)===0&&yi()}),a=null;else{switch(ui(c)){case 1:a=rs;break;case 4:a=ii;break;case 16:a=In;break;case 536870912:a=kl;break;default:a=In}a=_g(a,ug.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function ug(n,s){if(Cu=-1,ku=0,(Be&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Co()&&n.callbackNode!==a)return null;var c=ss(n,n===Pt?Mt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=Pu(n,c);else{s=c;var d=Be;Be|=2;var m=dg();(Pt!==n||Mt!==s)&&(jr=null,Ro=Qe()+500,Es(n,s));do try{rT();break}catch(S){hg(n,S)}while(!0);Ch(),Tu.current=m,Be=d,yt!==null?s=0:(Pt=null,Mt=0,s=At)}if(s!==0){if(s===2&&(d=pn(n),d!==0&&(c=d,s=cd(n,d))),s===1)throw a=La,Es(n,0),Si(n,c),ln(n,Qe()),a;if(s===6)Si(n,c);else{if(d=n.current.alternate,(c&30)===0&&!tT(d)&&(s=Pu(n,c),s===2&&(m=pn(n),m!==0&&(c=m,s=cd(n,m))),s===1))throw a=La,Es(n,0),Si(n,c),ln(n,Qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ws(n,an,jr);break;case 3:if(Si(n,c),(c&130023424)===c&&(s=ad+500-Qe(),10<s)){if(ss(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Jt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=gh(ws.bind(null,n,an,jr),s);break}ws(n,an,jr);break;case 4:if(Si(n,c),(c&4194240)===c)break;for(s=n.eventTimes,d=-1;0<c;){var v=31-Qt(c);m=1<<v,v=s[v],v>d&&(d=v),c&=~m}if(c=d,c=Qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*eT(c/1960))-c,10<c){n.timeoutHandle=gh(ws.bind(null,n,an,jr),c);break}ws(n,an,jr);break;case 5:ws(n,an,jr);break;default:throw Error(t(329))}}}return ln(n,Qe()),n.callbackNode===a?ug.bind(null,n):null}function cd(n,s){var a=Ma;return n.current.memoizedState.isDehydrated&&(Es(n,s).flags|=256),n=Pu(n,s),n!==2&&(s=an,an=a,s!==null&&hd(s)),n}function hd(n){an===null?an=n:an.push.apply(an,n)}function tT(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Kn(m(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Si(n,s){for(s&=~od,s&=~Iu,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-Qt(s),c=1<<a;n[a]=-1,s&=~c}}function cg(n){if((Be&6)!==0)throw Error(t(327));Co();var s=ss(n,0);if((s&1)===0)return ln(n,Qe()),null;var a=Pu(n,s);if(n.tag!==0&&a===2){var c=pn(n);c!==0&&(s=c,a=cd(n,c))}if(a===1)throw a=La,Es(n,0),Si(n,s),ln(n,Qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,ws(n,an,jr),ln(n,Qe()),null}function dd(n,s){var a=Be;Be|=1;try{return n(s)}finally{Be=a,Be===0&&(Ro=Qe()+500,nu&&yi())}}function vs(n){Ti!==null&&Ti.tag===0&&(Be&6)===0&&Co();var s=Be;Be|=1;var a=Nn.transition,c=Me;try{if(Nn.transition=null,Me=1,n)return n()}finally{Me=c,Nn.transition=a,Be=s,(Be&6)===0&&yi()}}function fd(){vn=Ao.current,et(Ao)}function Es(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,xw(a)),yt!==null)for(a=yt.return;a!==null;){var c=a;switch(Th(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&eu();break;case 3:To(),et(rn),et(zt),Vh();break;case 5:Oh(c);break;case 4:To();break;case 13:et(it);break;case 19:et(it);break;case 10:kh(c.type._context);break;case 22:case 23:fd()}a=a.return}if(Pt=n,yt=n=Ai(n.current,null),Mt=vn=s,At=0,La=null,od=Iu=_s=0,an=Ma=null,ms!==null){for(s=0;s<ms.length;s++)if(a=ms[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}ms=null}return n}function hg(n,s){do{var a=yt;try{if(Ch(),du.current=gu,fu){for(var c=st.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}fu=!1}if(ys=0,kt=St=st=null,Na=!1,xa=0,sd.current=null,a===null||a.return===null){At=1,La=s,yt=null;break}e:{var m=n,v=a.return,S=a,k=s;if(s=Mt,S.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var U=k,Y=S,X=Y.tag;if((Y.mode&1)===0&&(X===0||X===11||X===15)){var Q=Y.alternate;Q?(Y.updateQueue=Q.updateQueue,Y.memoizedState=Q.memoizedState,Y.lanes=Q.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var ie=Lm(v);if(ie!==null){ie.flags&=-257,Mm(ie,v,S,m,s),ie.mode&1&&Vm(m,U,s),s=ie,k=U;var ue=s.updateQueue;if(ue===null){var ce=new Set;ce.add(k),s.updateQueue=ce}else ue.add(k);break e}else{if((s&1)===0){Vm(m,U,s),pd();break e}k=Error(t(426))}}else if(rt&&S.mode&1){var ft=Lm(v);if(ft!==null){(ft.flags&65536)===0&&(ft.flags|=256),Mm(ft,v,S,m,s),Ah(Io(k,S));break e}}m=k=Io(k,S),At!==4&&(At=2),Ma===null?Ma=[m]:Ma.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var L=Om(m,k,s);om(m,L);break e;case 1:S=k;var x=m.type,M=m.stateNode;if((m.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(wi===null||!wi.has(M)))){m.flags|=65536,s&=-s,m.lanes|=s;var J=bm(m,S,s);om(m,J);break e}}m=m.return}while(m!==null)}pg(a)}catch(he){s=he,yt===a&&a!==null&&(yt=a=a.return);continue}break}while(!0)}function dg(){var n=Tu.current;return Tu.current=gu,n===null?gu:n}function pd(){(At===0||At===3||At===2)&&(At=4),Pt===null||(_s&268435455)===0&&(Iu&268435455)===0||Si(Pt,Mt)}function Pu(n,s){var a=Be;Be|=2;var c=dg();(Pt!==n||Mt!==s)&&(jr=null,Es(n,s));do try{nT();break}catch(d){hg(n,d)}while(!0);if(Ch(),Be=a,Tu.current=c,yt!==null)throw Error(t(261));return Pt=null,Mt=0,At}function nT(){for(;yt!==null;)fg(yt)}function rT(){for(;yt!==null&&!Rl();)fg(yt)}function fg(n){var s=yg(n.alternate,n,vn);n.memoizedProps=n.pendingProps,s===null?pg(n):yt=s,sd.current=null}function pg(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=Qw(a,s,vn),a!==null){yt=a;return}}else{if(a=Yw(a,s),a!==null){a.flags&=32767,yt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{At=6,yt=null;return}}if(s=s.sibling,s!==null){yt=s;return}yt=s=n}while(s!==null);At===0&&(At=5)}function ws(n,s,a){var c=Me,d=Nn.transition;try{Nn.transition=null,Me=1,iT(n,s,a,c)}finally{Nn.transition=d,Me=c}return null}function iT(n,s,a,c){do Co();while(Ti!==null);if((Be&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Ge(n,m),n===Pt&&(yt=Pt=null,Mt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Au||(Au=!0,_g(In,function(){return Co(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Nn.transition,Nn.transition=null;var v=Me;Me=1;var S=Be;Be|=4,sd.current=null,Jw(n,a),ig(a,n),Sw(ph),hi=!!fh,ph=fh=null,n.current=a,Zw(a),Xc(),Be=S,Me=v,Nn.transition=m}else n.current=a;if(Au&&(Au=!1,Ti=n,Ru=d),m=n.pendingLanes,m===0&&(wi=null),Pl(a.stateNode),ln(n,Qe()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Su)throw Su=!1,n=ld,ld=null,n;return(Ru&1)!==0&&n.tag!==0&&Co(),m=n.pendingLanes,(m&1)!==0?n===ud?Fa++:(Fa=0,ud=n):Fa=0,yi(),null}function Co(){if(Ti!==null){var n=ui(Ru),s=Nn.transition,a=Me;try{if(Nn.transition=null,Me=16>n?16:n,Ti===null)var c=!1;else{if(n=Ti,Ti=null,Ru=0,(Be&6)!==0)throw Error(t(331));var d=Be;for(Be|=4,le=n.current;le!==null;){var m=le,v=m.child;if((le.flags&16)!==0){var S=m.deletions;if(S!==null){for(var k=0;k<S.length;k++){var U=S[k];for(le=U;le!==null;){var Y=le;switch(Y.tag){case 0:case 11:case 15:Va(8,Y,m)}var X=Y.child;if(X!==null)X.return=Y,le=X;else for(;le!==null;){Y=le;var Q=Y.sibling,ie=Y.return;if(Zm(Y),Y===U){le=null;break}if(Q!==null){Q.return=ie,le=Q;break}le=ie}}}var ue=m.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var ft=ce.sibling;ce.sibling=null,ce=ft}while(ce!==null)}}le=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,le=v;else e:for(;le!==null;){if(m=le,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Va(9,m,m.return)}var L=m.sibling;if(L!==null){L.return=m.return,le=L;break e}le=m.return}}var x=n.current;for(le=x;le!==null;){v=le;var M=v.child;if((v.subtreeFlags&2064)!==0&&M!==null)M.return=v,le=M;else e:for(v=x;le!==null;){if(S=le,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:wu(9,S)}}catch(he){lt(S,S.return,he)}if(S===v){le=null;break e}var J=S.sibling;if(J!==null){J.return=S.return,le=J;break e}le=S.return}}if(Be=d,yi(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(is,n)}catch{}c=!0}return c}finally{Me=a,Nn.transition=s}}return!1}function mg(n,s,a){s=Io(a,s),s=Om(n,s,1),n=vi(n,s,1),s=Jt(),n!==null&&(ai(n,1,s),ln(n,s))}function lt(n,s,a){if(n.tag===3)mg(n,n,a);else for(;s!==null;){if(s.tag===3){mg(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(wi===null||!wi.has(c))){n=Io(a,n),n=bm(s,n,1),s=vi(s,n,1),n=Jt(),s!==null&&(ai(s,1,n),ln(s,n));break}}s=s.return}}function sT(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=Jt(),n.pingedLanes|=n.suspendedLanes&a,Pt===n&&(Mt&a)===a&&(At===4||At===3&&(Mt&130023424)===Mt&&500>Qe()-ad?Es(n,0):od|=a),ln(n,s)}function gg(n,s){s===0&&((n.mode&1)===0?s=1:(s=Qs,Qs<<=1,(Qs&130023424)===0&&(Qs=4194304)));var a=Jt();n=Mr(n,s),n!==null&&(ai(n,s,a),ln(n,a))}function oT(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),gg(n,a)}function aT(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),gg(n,a)}var yg;yg=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||rn.current)on=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return on=!1,Kw(n,s,a);on=(n.flags&131072)!==0}else on=!1,rt&&(s.flags&1048576)!==0&&Yp(s,iu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;vu(n,s),n=s.pendingProps;var d=mo(s,zt.current);wo(s,a),d=Fh(null,s,c,n,d,a);var m=Uh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,sn(c)?(m=!0,tu(s)):m=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,xh(s),d.updater=yu,s.stateNode=d,d._reactInternals=s,Hh(s,c,n,a),s=Qh(null,s,c,!0,m,a)):(s.tag=0,rt&&m&&wh(s),Xt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(vu(n,s),n=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=uT(c),n=Yn(c,n),d){case 0:s=Kh(null,s,c,n,a);break e;case 1:s=$m(null,s,c,n,a);break e;case 11:s=Fm(null,s,c,n,a);break e;case 14:s=Um(null,s,c,Yn(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Yn(c,d),Kh(n,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Yn(c,d),$m(n,s,c,d,a);case 3:e:{if(qm(s),n===null)throw Error(t(387));c=s.pendingProps,m=s.memoizedState,d=m.element,sm(n,s),cu(s,c,null,a);var v=s.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){d=Io(Error(t(423)),s),s=Hm(n,s,c,a,d);break e}else if(c!==d){d=Io(Error(t(424)),s),s=Hm(n,s,c,a,d);break e}else for(_n=pi(s.stateNode.containerInfo.firstChild),yn=s,rt=!0,Qn=null,a=rm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_o(),c===d){s=Ur(n,s,a);break e}Xt(n,s,c,a)}s=s.child}return s;case 5:return lm(s),n===null&&Sh(s),c=s.type,d=s.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,mh(c,d)?v=null:m!==null&&mh(c,m)&&(s.flags|=32),Bm(n,s),Xt(n,s,v,a),s.child;case 6:return n===null&&Sh(s),null;case 13:return Wm(n,s,a);case 4:return Dh(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=vo(s,null,c,a):Xt(n,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Yn(c,d),Fm(n,s,c,d,a);case 7:return Xt(n,s,s.pendingProps,a),s.child;case 8:return Xt(n,s,s.pendingProps.children,a),s.child;case 12:return Xt(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,m=s.memoizedProps,v=d.value,Ye(au,c._currentValue),c._currentValue=v,m!==null)if(Kn(m.value,v)){if(m.children===d.children&&!rn.current){s=Ur(n,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var S=m.dependencies;if(S!==null){v=m.child;for(var k=S.firstContext;k!==null;){if(k.context===c){if(m.tag===1){k=Fr(-1,a&-a),k.tag=2;var U=m.updateQueue;if(U!==null){U=U.shared;var Y=U.pending;Y===null?k.next=k:(k.next=Y.next,Y.next=k),U.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),Ph(m.return,a,s),S.lanes|=a;break}k=k.next}}else if(m.tag===10)v=m.type===s.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),Ph(v,a,s),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===s){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}Xt(n,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,wo(s,a),d=kn(d),c=c(d),s.flags|=1,Xt(n,s,c,a),s.child;case 14:return c=s.type,d=Yn(c,s.pendingProps),d=Yn(c.type,d),Um(n,s,c,d,a);case 15:return jm(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Yn(c,d),vu(n,s),s.tag=1,sn(c)?(n=!0,tu(s)):n=!1,wo(s,a),xm(s,c,d),Hh(s,c,d,a),Qh(null,s,c,!0,n,a);case 19:return Km(n,s,a);case 22:return zm(n,s,a)}throw Error(t(156,s.tag))};function _g(n,s){return Gs(n,s)}function lT(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(n,s,a,c){return new lT(n,s,a,c)}function md(n){return n=n.prototype,!(!n||!n.isReactComponent)}function uT(n){if(typeof n=="function")return md(n)?1:0;if(n!=null){if(n=n.$$typeof,n===b)return 11;if(n===Tt)return 14}return 2}function Ai(n,s){var a=n.alternate;return a===null?(a=xn(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Nu(n,s,a,c,d,m){var v=2;if(c=n,typeof n=="function")md(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case P:return Ts(a.children,d,m,s);case I:v=8,d|=8;break;case R:return n=xn(12,a,s,d|2),n.elementType=R,n.lanes=m,n;case A:return n=xn(13,a,s,d),n.elementType=A,n.lanes=m,n;case Ke:return n=xn(19,a,s,d),n.elementType=Ke,n.lanes=m,n;case je:return xu(a,d,m,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:v=10;break e;case D:v=9;break e;case b:v=11;break e;case Tt:v=14;break e;case mt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=xn(v,a,s,d),s.elementType=n,s.type=c,s.lanes=m,s}function Ts(n,s,a,c){return n=xn(7,n,c,s),n.lanes=a,n}function xu(n,s,a,c){return n=xn(22,n,c,s),n.elementType=je,n.lanes=a,n.stateNode={isHidden:!1},n}function gd(n,s,a){return n=xn(6,n,null,s),n.lanes=a,n}function yd(n,s,a){return s=xn(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function cT(n,s,a,c,d){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oi(0),this.expirationTimes=oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oi(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function _d(n,s,a,c,d,m,v,S,k){return n=new cT(n,s,a,S,k),s===1?(s=1,m===!0&&(s|=8)):s=0,m=xn(3,null,null,s),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},xh(m),n}function hT(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function vg(n){if(!n)return gi;n=n._reactInternals;e:{if(zn(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(sn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(sn(a))return Gp(n,a,s)}return s}function Eg(n,s,a,c,d,m,v,S,k){return n=_d(a,c,!0,n,d,m,v,S,k),n.context=vg(null),a=n.current,c=Jt(),d=Ii(a),m=Fr(c,d),m.callback=s??null,vi(a,m,d),n.current.lanes=d,ai(n,d,c),ln(n,c),n}function Du(n,s,a,c){var d=s.current,m=Jt(),v=Ii(d);return a=vg(a),s.context===null?s.context=a:s.pendingContext=a,s=Fr(m,v),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=vi(d,s,v),n!==null&&(Zn(n,d,v,m),uu(n,d,v)),v}function Ou(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function wg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function vd(n,s){wg(n,s),(n=n.alternate)&&wg(n,s)}function dT(){return null}var Tg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ed(n){this._internalRoot=n}bu.prototype.render=Ed.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Du(n,s,null,null)},bu.prototype.unmount=Ed.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;vs(function(){Du(null,n,null,null)}),s[Or]=null}};function bu(n){this._internalRoot=n}bu.prototype.unstable_scheduleHydration=function(n){if(n){var s=bl();n={blockedOn:null,target:n,priority:s};for(var a=0;a<lr.length&&s!==0&&s<lr[a].priority;a++);lr.splice(a,0,n),a===0&&Ml(n)}};function wd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Vu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ig(){}function fT(n,s,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var U=Ou(v);m.call(U)}}var v=Eg(s,c,n,0,null,!1,!1,"",Ig);return n._reactRootContainer=v,n[Or]=v.current,Ta(n.nodeType===8?n.parentNode:n),vs(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var U=Ou(k);S.call(U)}}var k=_d(n,0,!1,null,null,!1,!1,"",Ig);return n._reactRootContainer=k,n[Or]=k.current,Ta(n.nodeType===8?n.parentNode:n),vs(function(){Du(s,k,a,c)}),k}function Lu(n,s,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var S=d;d=function(){var k=Ou(v);S.call(k)}}Du(s,v,n,d)}else v=fT(a,s,n,d,c);return Ou(v)}Dl=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=si(s.pendingLanes);a!==0&&(li(s,a|1),ln(s,Qe()),(Be&6)===0&&(Ro=Qe()+500,yi()))}break;case 13:vs(function(){var c=Mr(n,1);if(c!==null){var d=Jt();Zn(c,n,1,d)}}),vd(n,1)}},Ys=function(n){if(n.tag===13){var s=Mr(n,134217728);if(s!==null){var a=Jt();Zn(s,n,134217728,a)}vd(n,134217728)}},Ol=function(n){if(n.tag===13){var s=Ii(n),a=Mr(n,s);if(a!==null){var c=Jt();Zn(a,n,s,c)}vd(n,s)}},bl=function(){return Me},Vl=function(n,s){var a=Me;try{return Me=n,s()}finally{Me=a}},zs=function(n,s,a){switch(s){case"input":if(Qi(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var d=Zl(c);if(!d)throw Error(t(90));Jr(c),Qi(c,d)}}}break;case"textarea":ni(n,a);break;case"select":s=a.value,s!=null&&dn(n,!!a.multiple,s,!1)}},Zi=dd,ra=vs;var pT={usingClientEntryPoint:!1,Events:[Aa,fo,Zl,or,na,dd]},Ua={findFiberByHostInstance:hs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mT={bundleType:Ua.bundleType,version:Ua.version,rendererPackageName:Ua.rendererPackageName,rendererConfig:Ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:me.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=oa(n),n===null?null:n.stateNode},findFiberByHostInstance:Ua.findFiberByHostInstance||dT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{is=Mu.inject(mT),fn=Mu}catch{}}return un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pT,un.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wd(s))throw Error(t(200));return hT(n,s,null,a)},un.createRoot=function(n,s){if(!wd(n))throw Error(t(299));var a=!1,c="",d=Tg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=_d(n,1,!1,null,null,a,!1,c,d),n[Or]=s.current,Ta(n.nodeType===8?n.parentNode:n),new Ed(s)},un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=oa(s),n=n===null?null:n.stateNode,n},un.flushSync=function(n){return vs(n)},un.hydrate=function(n,s,a){if(!Vu(s))throw Error(t(200));return Lu(null,n,s,!0,a)},un.hydrateRoot=function(n,s,a){if(!wd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=Tg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Eg(s,null,n,1,a??null,d,!1,m,v),n[Or]=s.current,Ta(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new bu(s)},un.render=function(n,s,a){if(!Vu(s))throw Error(t(200));return Lu(null,n,s,!1,a)},un.unmountComponentAtNode=function(n){if(!Vu(n))throw Error(t(40));return n._reactRootContainer?(vs(function(){Lu(null,null,n,!1,function(){n._reactRootContainer=null,n[Or]=null})}),!0):!1},un.unstable_batchedUpdates=dd,un.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!Vu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Lu(n,s,a,!1,c)},un.version="18.3.1-next-f1338f8080-20240426",un}var xg;function AT(){if(xg)return Sd.exports;xg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Sd.exports=ST(),Sd.exports}var Dg;function RT(){if(Dg)return Fu;Dg=1;var r=AT();return Fu.createRoot=r.createRoot,Fu.hydrateRoot=r.hydrateRoot,Fu}var CT=RT();const kT=()=>{};var Og={};/**
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
 */const R_=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},PT=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(g>>10)),e[i++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},C_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,E=l>>2,T=(l&3)<<4|f>>4;let C=(f&15)<<2|_>>6,F=_&63;g||(F=64,h||(C=64)),i.push(t[E],t[T],t[C],t[F])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(R_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):PT(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||_==null||T==null)throw new NT;const C=l<<2|f>>4;if(i.push(C),_!==64){const F=f<<4&240|_>>2;if(i.push(F),T!==64){const q=_<<6&192|T;i.push(q)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class NT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xT=function(r){const e=R_(r);return C_.encodeByteArray(e,!0)},ic=function(r){return xT(r).replace(/\./g,"")},k_=function(r){try{return C_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function DT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const OT=()=>DT().__FIREBASE_DEFAULTS__,bT=()=>{if(typeof process>"u"||typeof Og>"u")return;const r=Og.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},VT=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&k_(r[1]);return e&&JSON.parse(e)},Rc=()=>{try{return kT()||OT()||bT()||VT()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},P_=r=>{var e,t;return(t=(e=Rc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Ef=r=>{const e=P_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},N_=()=>{var r;return(r=Rc())===null||r===void 0?void 0:r.config},x_=r=>{var e;return(e=Rc())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class LT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Yr(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cc(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function D_(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[ic(JSON.stringify(t)),ic(JSON.stringify(h)),""].join(".")}const Qa={};function MT(){const r={prod:[],emulator:[]};for(const e of Object.keys(Qa))Qa[e]?r.emulator.push(e):r.prod.push(e);return r}function FT(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let bg=!1;function kc(r,e){if(typeof window>"u"||typeof document>"u"||!Yr(window.location.host)||Qa[r]===e||Qa[r]||bg)return;Qa[r]=e;function t(C){return`__firebase__banner__${C}`}const i="__firebase__banner",l=MT().prod.length>0;function h(){const C=document.getElementById(i);C&&C.remove()}function f(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function g(C,F){C.setAttribute("width","24"),C.setAttribute("id",F),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function _(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{bg=!0,h()},C}function E(C,F){C.setAttribute("id",F),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function T(){const C=FT(i),F=t("text"),q=document.getElementById(F)||document.createElement("span"),K=t("learnmore"),B=document.getElementById(K)||document.createElement("a"),pe=t("preprendIcon"),de=document.getElementById(pe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const ae=C.element;f(ae),E(B,K);const me=_();g(de,pe),ae.append(de,q,B,me),document.body.appendChild(ae)}l?(q.innerText="Preview backend disconnected.",de.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(de.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",F)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function Kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function UT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Kt())}function jT(){var r;const e=(r=Rc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function BT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function $T(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qT(){const r=Kt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function HT(){return!jT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function WT(){try{return typeof indexedDB=="object"}catch{return!1}}function GT(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const KT="FirebaseError";class ir extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=KT,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fl.prototype.create)}}class fl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?QT(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new ir(o,f,i)}}function QT(r,e){return r.replace(YT,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const YT=/\{\$([^}]+)}/g;function XT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ks(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=r[o],h=e[o];if(Vg(l)&&Vg(h)){if(!ks(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Vg(r){return r!==null&&typeof r=="object"}/**
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
 */function pl(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ba(r){const e={};return r.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function $a(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function JT(r,e){const t=new ZT(r,e);return t.subscribe.bind(t)}class ZT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");e0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Cd),o.error===void 0&&(o.error=Cd),o.complete===void 0&&(o.complete=Cd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function e0(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Cd(){}/**
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
 */function ut(r){return r&&r._delegate?r._delegate:r}class Hr{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Is="[DEFAULT]";/**
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
 */class t0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new LT;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(r0(e))try{this.getOrInitializeService({instanceIdentifier:Is})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Is){return this.instances.has(e)}getOptions(e=Is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:n0(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Is){return this.component?this.component.multipleInstances?e:Is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function n0(r){return r===Is?void 0:r}function r0(r){return r.instantiationMode==="EAGER"}/**
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
 */class i0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new t0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ve;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ve||(Ve={}));const s0={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},o0=Ve.INFO,a0={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},l0=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=a0[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wf{constructor(e){this.name=e,this._logLevel=o0,this._logHandler=l0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?s0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const u0=(r,e)=>e.some(t=>r instanceof t);let Lg,Mg;function c0(){return Lg||(Lg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h0(){return Mg||(Mg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const O_=new WeakMap,Bd=new WeakMap,b_=new WeakMap,kd=new WeakMap,Tf=new WeakMap;function d0(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(Oi(r.result)),o()},h=()=>{i(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&O_.set(t,r)}).catch(()=>{}),Tf.set(e,r),e}function f0(r){if(Bd.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Bd.set(r,e)}let $d={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Bd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||b_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Oi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function p0(r){$d=r($d)}function m0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(Pd(this),e,...t);return b_.set(i,e.sort?e.sort():[e]),Oi(i)}:h0().includes(r)?function(...e){return r.apply(Pd(this),e),Oi(O_.get(this))}:function(...e){return Oi(r.apply(Pd(this),e))}}function g0(r){return typeof r=="function"?m0(r):(r instanceof IDBTransaction&&f0(r),u0(r,c0())?new Proxy(r,$d):r)}function Oi(r){if(r instanceof IDBRequest)return d0(r);if(kd.has(r))return kd.get(r);const e=g0(r);return e!==r&&(kd.set(r,e),Tf.set(e,r)),e}const Pd=r=>Tf.get(r);function y0(r,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=Oi(h);return i&&h.addEventListener("upgradeneeded",g=>{i(Oi(h.result),g.oldVersion,g.newVersion,Oi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const _0=["get","getKey","getAll","getAllKeys","count"],v0=["put","add","delete","clear"],Nd=new Map;function Fg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Nd.get(e))return Nd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=v0.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||_0.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return i&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return Nd.set(e,l),l}p0(r=>({...r,get:(e,t,i)=>Fg(e,t)||r.get(e,t,i),has:(e,t)=>!!Fg(e,t)||r.has(e,t)}));/**
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
 */class E0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(w0(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function w0(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qd="@firebase/app",Ug="0.13.2";/**
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
 */const Wr=new wf("@firebase/app"),T0="@firebase/app-compat",I0="@firebase/analytics-compat",S0="@firebase/analytics",A0="@firebase/app-check-compat",R0="@firebase/app-check",C0="@firebase/auth",k0="@firebase/auth-compat",P0="@firebase/database",N0="@firebase/data-connect",x0="@firebase/database-compat",D0="@firebase/functions",O0="@firebase/functions-compat",b0="@firebase/installations",V0="@firebase/installations-compat",L0="@firebase/messaging",M0="@firebase/messaging-compat",F0="@firebase/performance",U0="@firebase/performance-compat",j0="@firebase/remote-config",z0="@firebase/remote-config-compat",B0="@firebase/storage",$0="@firebase/storage-compat",q0="@firebase/firestore",H0="@firebase/ai",W0="@firebase/firestore-compat",G0="firebase",K0="11.10.0";/**
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
 */const Hd="[DEFAULT]",Q0={[qd]:"fire-core",[T0]:"fire-core-compat",[S0]:"fire-analytics",[I0]:"fire-analytics-compat",[R0]:"fire-app-check",[A0]:"fire-app-check-compat",[C0]:"fire-auth",[k0]:"fire-auth-compat",[P0]:"fire-rtdb",[N0]:"fire-data-connect",[x0]:"fire-rtdb-compat",[D0]:"fire-fn",[O0]:"fire-fn-compat",[b0]:"fire-iid",[V0]:"fire-iid-compat",[L0]:"fire-fcm",[M0]:"fire-fcm-compat",[F0]:"fire-perf",[U0]:"fire-perf-compat",[j0]:"fire-rc",[z0]:"fire-rc-compat",[B0]:"fire-gcs",[$0]:"fire-gcs-compat",[q0]:"fire-fst",[W0]:"fire-fst-compat",[H0]:"fire-vertex","fire-js":"fire-js",[G0]:"fire-js-all"};/**
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
 */const sc=new Map,Y0=new Map,Wd=new Map;function jg(r,e){try{r.container.addComponent(e)}catch(t){Wr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Ui(r){const e=r.name;if(Wd.has(e))return Wr.debug(`There were multiple attempts to register component ${e}.`),!1;Wd.set(e,r);for(const t of sc.values())jg(t,r);for(const t of Y0.values())jg(t,r);return!0}function ml(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function En(r){return r==null?!1:r.settings!==void 0}/**
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
 */const X0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bi=new fl("app","Firebase",X0);/**
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
 */class J0{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bi.create("app-deleted",{appName:this._name})}}/**
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
 */const Os=K0;function V_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Hd,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw bi.create("bad-app-name",{appName:String(o)});if(t||(t=N_()),!t)throw bi.create("no-options");const l=sc.get(o);if(l){if(ks(t,l.options)&&ks(i,l.config))return l;throw bi.create("duplicate-app",{appName:o})}const h=new i0(o);for(const g of Wd.values())h.addComponent(g);const f=new J0(t,i,h);return sc.set(o,f),f}function Pc(r=Hd){const e=sc.get(r);if(!e&&r===Hd&&N_())return V_();if(!e)throw bi.create("no-app",{appName:r});return e}function bn(r,e,t){var i;let o=(i=Q0[r])!==null&&i!==void 0?i:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wr.warn(f.join(" "));return}Ui(new Hr(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const Z0="firebase-heartbeat-database",eI=1,nl="firebase-heartbeat-store";let xd=null;function L_(){return xd||(xd=y0(Z0,eI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(nl)}catch(t){console.warn(t)}}}}).catch(r=>{throw bi.create("idb-open",{originalErrorMessage:r.message})})),xd}async function tI(r){try{const t=(await L_()).transaction(nl),i=await t.objectStore(nl).get(M_(r));return await t.done,i}catch(e){if(e instanceof ir)Wr.warn(e.message);else{const t=bi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wr.warn(t.message)}}}async function zg(r,e){try{const i=(await L_()).transaction(nl,"readwrite");await i.objectStore(nl).put(e,M_(r)),await i.done}catch(t){if(t instanceof ir)Wr.warn(t.message);else{const i=bi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Wr.warn(i.message)}}}function M_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const nI=1024,rI=30;class iI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new oI(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Bg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>rI){const h=aI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Wr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bg(),{heartbeatsToSend:i,unsentEntries:o}=sI(this._heartbeatsCache.heartbeats),l=ic(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Wr.warn(t),""}}}function Bg(){return new Date().toISOString().substring(0,10)}function sI(r,e=nI){const t=[];let i=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),$g(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),$g(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class oI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WT()?GT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await tI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return zg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return zg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function $g(r){return ic(JSON.stringify({version:2,heartbeats:r})).length}function aI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
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
 */function lI(r){Ui(new Hr("platform-logger",e=>new E0(e),"PRIVATE")),Ui(new Hr("heartbeat",e=>new iI(e),"PRIVATE")),bn(qd,Ug,r),bn(qd,Ug,"esm2017"),bn("fire-js","")}lI("");function If(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(r);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(r,i[o])&&(t[i[o]]=r[i[o]]);return t}function F_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uI=F_,U_=new fl("auth","Firebase",F_());/**
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
 */const oc=new wf("@firebase/auth");function cI(r,...e){oc.logLevel<=Ve.WARN&&oc.warn(`Auth (${Os}): ${r}`,...e)}function Ku(r,...e){oc.logLevel<=Ve.ERROR&&oc.error(`Auth (${Os}): ${r}`,...e)}/**
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
 */function nr(r,...e){throw Sf(r,...e)}function _r(r,...e){return Sf(r,...e)}function j_(r,e,t){const i=Object.assign(Object.assign({},uI()),{[e]:t});return new fl("auth","Firebase",i).create(e,{appName:r.name})}function Vi(r){return j_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sf(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return U_.create(r,...e)}function ye(r,e,...t){if(!r)throw Sf(e,...t)}function Br(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ku(e),new Error(e)}function Gr(r,e){r||Br(e)}/**
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
 */function ac(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function hI(){return qg()==="http:"||qg()==="https:"}function qg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function dI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hI()||BT()||"connection"in navigator)?navigator.onLine:!0}function fI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class gl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Gr(t>e,"Short delay should be less than long delay!"),this.isMobile=UT()||$T()}get(){return dI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Af(r,e){Gr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class z_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gI=new gl(3e4,6e4);function Ki(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Xr(r,e,t,i,o={}){return B_(r,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=pl(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},l);return zT()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Yr(r.emulatorConfig.host)&&(_.credentials="include"),z_.fetch()(await $_(r,r.config.apiHost,t,f),_)})}async function B_(r,e,t){r._canInitEmulator=!1;const i=Object.assign(Object.assign({},pI),e);try{const o=new _I(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Uu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Uu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Uu(r,"user-disabled",h);const E=i[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw j_(r,E,_);nr(r,E)}}catch(o){if(o instanceof ir)throw o;nr(r,"network-request-failed",{message:String(o)})}}async function Nc(r,e,t,i,o={}){const l=await Xr(r,e,t,i,o);return"mfaPendingCredential"in l&&nr(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function $_(r,e,t,i){const o=`${e}${t}?${i}`,l=r,h=l.config.emulator?Af(r.config,o):`${r.config.apiScheme}://${o}`;return mI.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function yI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _I{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(_r(this.auth,"network-request-failed")),gI.get())})}}function Uu(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=_r(r,e,i);return o.customData._tokenResponse=t,o}function Hg(r){return r!==void 0&&r.enterprise!==void 0}class vI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return yI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function EI(r,e){return Xr(r,"GET","/v2/recaptchaConfig",Ki(r,e))}/**
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
 */async function wI(r,e){return Xr(r,"POST","/v1/accounts:delete",e)}async function lc(r,e){return Xr(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ya(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TI(r,e=!1){const t=ut(r),i=await t.getIdToken(e),o=Rf(i);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Ya(Dd(o.auth_time)),issuedAtTime:Ya(Dd(o.iat)),expirationTime:Ya(Dd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Dd(r){return Number(r)*1e3}function Rf(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return Ku("JWT malformed, contained fewer than 3 sections"),null;try{const o=k_(t);return o?JSON.parse(o):(Ku("Failed to decode base64 JWT payload"),null)}catch(o){return Ku("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Wg(r){const e=Rf(r);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rl(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ir&&II(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function II({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class SI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ya(this.lastLoginAt),this.creationTime=Ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uc(r){var e;const t=r.auth,i=await r.getIdToken(),o=await rl(r,lc(t,{idToken:i}));ye(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?q_(l.providerUserInfo):[],f=RI(r.providerData,h),g=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),E=g?_:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Gd(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(r,T)}async function AI(r){const e=ut(r);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RI(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function q_(r){return r.map(e=>{var{providerId:t}=e,i=If(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function CI(r,e){const t=await B_(r,{},async()=>{const i=pl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await $_(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:f,body:i};return r.emulatorConfig&&Yr(r.emulatorConfig.host)&&(g.credentials="include"),z_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function kI(r,e){return Xr(r,"POST","/v2/accounts:revokeToken",Ki(r,e))}/**
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
 */class Oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=Wg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await CI(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new Oo;return i&&(ye(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ye(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oo,this.toJSON())}_performRefresh(){return Br("not implemented")}}/**
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
 */function Ci(r,e){ye(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class er{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=If(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Gd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await rl(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return TI(this,e)}reload(){return AI(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await uc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(En(this.auth.app))return Promise.reject(Vi(this.auth));const e=await this.getIdToken();return await rl(this,wI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,g,_,E;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,C=(o=t.email)!==null&&o!==void 0?o:void 0,F=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,q=(h=t.photoURL)!==null&&h!==void 0?h:void 0,K=(f=t.tenantId)!==null&&f!==void 0?f:void 0,B=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,pe=(_=t.createdAt)!==null&&_!==void 0?_:void 0,de=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ae,emailVerified:me,isAnonymous:Pe,providerData:ve,stsTokenManager:P}=t;ye(ae&&P,e,"internal-error");const I=Oo.fromJSON(this.name,P);ye(typeof ae=="string",e,"internal-error"),Ci(T,e.name),Ci(C,e.name),ye(typeof me=="boolean",e,"internal-error"),ye(typeof Pe=="boolean",e,"internal-error"),Ci(F,e.name),Ci(q,e.name),Ci(K,e.name),Ci(B,e.name),Ci(pe,e.name),Ci(de,e.name);const R=new er({uid:ae,auth:e,email:C,emailVerified:me,displayName:T,isAnonymous:Pe,photoURL:q,phoneNumber:F,tenantId:K,stsTokenManager:I,createdAt:pe,lastLoginAt:de});return ve&&Array.isArray(ve)&&(R.providerData=ve.map(N=>Object.assign({},N))),B&&(R._redirectEventId=B),R}static async _fromIdTokenResponse(e,t,i=!1){const o=new Oo;o.updateFromServerResponse(t);const l=new er({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await uc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?q_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Oo;f.updateFromIdToken(i);const g=new er({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Gd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
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
 */const Gg=new Map;function $r(r){Gr(r instanceof Function,"Expected a class definition");let e=Gg.get(r);return e?(Gr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Gg.set(r,e),e)}/**
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
 */class H_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}H_.type="NONE";const Kg=H_;/**
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
 */function Qu(r,e,t){return`firebase:${r}:${e}:${t}`}class bo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Qu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Qu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await lc(this.auth,{idToken:e}).catch(()=>{});return t?er._fromGetAccountInfoResponse(this.auth,t,e):null}return er._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new bo($r(Kg),e,i);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||$r(Kg);const h=Qu(i,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const E=await _._get(h);if(E){let T;if(typeof E=="string"){const C=await lc(e,{idToken:E}).catch(()=>{});if(!C)break;T=await er._fromGetAccountInfoResponse(e,C,E)}else T=er._fromJSON(e,E);_!==l&&(f=T),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new bo(l,e,i):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new bo(l,e,i))}}/**
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
 */function Qg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Q_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(W_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(X_(e))return"Blackberry";if(J_(e))return"Webos";if(G_(e))return"Safari";if((e.includes("chrome/")||K_(e))&&!e.includes("edge/"))return"Chrome";if(Y_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function W_(r=Kt()){return/firefox\//i.test(r)}function G_(r=Kt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function K_(r=Kt()){return/crios\//i.test(r)}function Q_(r=Kt()){return/iemobile/i.test(r)}function Y_(r=Kt()){return/android/i.test(r)}function X_(r=Kt()){return/blackberry/i.test(r)}function J_(r=Kt()){return/webos/i.test(r)}function Cf(r=Kt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function PI(r=Kt()){var e;return Cf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NI(){return qT()&&document.documentMode===10}function Z_(r=Kt()){return Cf(r)||Y_(r)||J_(r)||X_(r)||/windows phone/i.test(r)||Q_(r)}/**
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
 */function ev(r,e=[]){let t;switch(r){case"Browser":t=Qg(Kt());break;case"Worker":t=`${Qg(Kt())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Os}/${i}`}/**
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
 */class xI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function DI(r,e={}){return Xr(r,"GET","/v2/passwordPolicy",Ki(r,e))}/**
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
 */const OI=6;class bI{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:OI,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(i=g.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class VI{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yg(this),this.idTokenSubscription=new Yg(this),this.beforeStateQueue=new xI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=U_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$r(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await bo.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await lc(this,{idToken:e}),i=await er._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(En(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(En(this.app))return Promise.reject(Vi(this));const t=e?ut(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return En(this.app)?Promise.reject(Vi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return En(this.app)?Promise.reject(Vi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($r(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DI(this),t=new bI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await kI(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$r(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await bo.create(this,[$r(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,i,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ev(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(En(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&cI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Wo(r){return ut(r)}class Yg{constructor(e){this.auth=e,this.observer=null,this.addObserver=JT(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function LI(r){xc=r}function tv(r){return xc.loadJS(r)}function MI(){return xc.recaptchaEnterpriseScript}function FI(){return xc.gapiScript}function UI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class jI{constructor(){this.enterprise=new zI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class zI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const BI="recaptcha-enterprise",nv="NO_RECAPTCHA";class $I{constructor(e){this.type=BI,this.auth=Wo(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{EI(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new vI(g);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;Hg(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(nv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jI().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&Hg(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=MI();g.length!==0&&(g+=f),tv(g).then(()=>{o(f,l,h)}).catch(_=>{h(_)})}}).catch(f=>{h(f)})})}}async function Xg(r,e,t,i=!1,o=!1){const l=new $I(r);let h;if(o)h=nv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,_=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Kd(r,e,t,i,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Xg(r,e,t,t==="getOobCode");return i(r,h)}else return i(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Xg(r,e,t,t==="getOobCode");return i(r,f)}else return Promise.reject(h)})}/**
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
 */function qI(r,e){const t=ml(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ks(l,e??{}))return o;nr(o,"already-initialized")}return t.initialize({options:e})}function HI(r,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map($r);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function WI(r,e,t){const i=Wo(r);ye(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=rv(e),{host:h,port:f}=GI(e),g=f===null?"":`:${f}`,_={url:`${l}//${h}${g}/`},E=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ye(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ye(ks(_,i.config.emulator)&&ks(E,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=_,i.emulatorConfig=E,i.settings.appVerificationDisabledForTesting=!0,Yr(h)?(Cc(`${l}//${h}${g}`),kc("Auth",!0)):KI()}function rv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function GI(r){const e=rv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Jg(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:Jg(h)}}}function Jg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function KI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class kf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Br("not implemented")}_getIdTokenResponse(e){return Br("not implemented")}_linkToIdToken(e,t){return Br("not implemented")}_getReauthenticationResolver(e){return Br("not implemented")}}async function QI(r,e){return Xr(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function YI(r,e){return Nc(r,"POST","/v1/accounts:signInWithPassword",Ki(r,e))}async function XI(r,e){return Xr(r,"POST","/v1/accounts:sendOobCode",Ki(r,e))}async function JI(r,e){return XI(r,e)}/**
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
 */async function ZI(r,e){return Nc(r,"POST","/v1/accounts:signInWithEmailLink",Ki(r,e))}async function eS(r,e){return Nc(r,"POST","/v1/accounts:signInWithEmailLink",Ki(r,e))}/**
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
 */class il extends kf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new il(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new il(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kd(e,t,"signInWithPassword",YI);case"emailLink":return ZI(e,{email:this._email,oobCode:this._password});default:nr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kd(e,i,"signUpPassword",QI);case"emailLink":return eS(e,{idToken:t,email:this._email,oobCode:this._password});default:nr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vo(r,e){return Nc(r,"POST","/v1/accounts:signInWithIdp",Ki(r,e))}/**
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
 */const tS="http://localhost";class Ps extends kf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=If(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new Ps(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Vo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Vo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vo(e,t)}buildRequest(){const e={requestUri:tS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pl(t)}return e}}/**
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
 */function nS(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rS(r){const e=Ba($a(r)).link,t=e?Ba($a(e)).deep_link_id:null,i=Ba($a(r)).deep_link_id;return(i?Ba($a(i)).link:null)||i||t||e||r}class Dc{constructor(e){var t,i,o,l,h,f;const g=Ba($a(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,E=(i=g.oobCode)!==null&&i!==void 0?i:null,T=nS((o=g.mode)!==null&&o!==void 0?o:null);ye(_&&E&&T,"argument-error"),this.apiKey=_,this.operation=T,this.code=E,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=rS(e);try{return new Dc(t)}catch{return null}}}/**
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
 */class Go{constructor(){this.providerId=Go.PROVIDER_ID}static credential(e,t){return il._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Dc.parseLink(t);return ye(i,"argument-error"),il._fromEmailAndCode(e,i.code,i.tenantId)}}Go.PROVIDER_ID="password";Go.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Go.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class iv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yl extends iv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ki extends yl{constructor(){super("facebook.com")}static credential(e){return Ps._fromParams({providerId:ki.PROVIDER_ID,signInMethod:ki.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ki.credentialFromTaggedObject(e)}static credentialFromError(e){return ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ki.credential(e.oauthAccessToken)}catch{return null}}}ki.FACEBOOK_SIGN_IN_METHOD="facebook.com";ki.PROVIDER_ID="facebook.com";/**
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
 */class Pi extends yl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ps._fromParams({providerId:Pi.PROVIDER_ID,signInMethod:Pi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pi.credentialFromTaggedObject(e)}static credentialFromError(e){return Pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Pi.credential(t,i)}catch{return null}}}Pi.GOOGLE_SIGN_IN_METHOD="google.com";Pi.PROVIDER_ID="google.com";/**
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
 */class Ni extends yl{constructor(){super("github.com")}static credential(e){return Ps._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ni.credentialFromTaggedObject(e)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ni.credential(e.oauthAccessToken)}catch{return null}}}Ni.GITHUB_SIGN_IN_METHOD="github.com";Ni.PROVIDER_ID="github.com";/**
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
 */class xi extends yl{constructor(){super("twitter.com")}static credential(e,t){return Ps._fromParams({providerId:xi.PROVIDER_ID,signInMethod:xi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xi.credentialFromTaggedObject(e)}static credentialFromError(e){return xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return xi.credential(t,i)}catch{return null}}}xi.TWITTER_SIGN_IN_METHOD="twitter.com";xi.PROVIDER_ID="twitter.com";/**
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
 */class Uo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await er._fromIdTokenResponse(e,i,o),h=Zg(i);return new Uo({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Zg(i);return new Uo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Zg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class cc extends ir{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new cc(e,t,i,o)}}function sv(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(r,l,e,i):l})}async function iS(r,e,t=!1){const i=await rl(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Uo._forOperation(r,"link",i)}/**
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
 */async function sS(r,e,t=!1){const{auth:i}=r;if(En(i.app))return Promise.reject(Vi(i));const o="reauthenticate";try{const l=await rl(r,sv(i,o,e,r),t);ye(l.idToken,i,"internal-error");const h=Rf(l.idToken);ye(h,i,"internal-error");const{sub:f}=h;return ye(r.uid===f,i,"user-mismatch"),Uo._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&nr(i,"user-mismatch"),l}}/**
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
 */async function ov(r,e,t=!1){if(En(r.app))return Promise.reject(Vi(r));const i="signIn",o=await sv(r,i,e),l=await Uo._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(l.user),l}async function oS(r,e){return ov(Wo(r),e)}/**
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
 */function aS(r,e,t){var i;ye(((i=t.url)===null||i===void 0?void 0:i.length)>0,r,"invalid-continue-uri"),ye(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),ye(typeof t.linkDomain>"u"||t.linkDomain.length>0,r,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(ye(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(ye(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function lS(r,e,t){const i=Wo(r),o={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function l(h,f){ye(f.handleCodeInApp,i,"argument-error"),f&&aS(i,h,f)}l(o,t),await Kd(i,o,"getOobCode",JI)}function uS(r,e){const t=Dc.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function cS(r,e,t){if(En(r.app))return Promise.reject(Vi(r));const i=ut(r),o=Go.credentialWithLink(e,t||ac());return ye(o._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),oS(i,o)}function hS(r,e,t,i){return ut(r).onIdTokenChanged(e,t,i)}function dS(r,e,t){return ut(r).beforeAuthStateChanged(e,t)}function fS(r,e,t,i){return ut(r).onAuthStateChanged(e,t,i)}function pS(r){return ut(r).signOut()}const hc="__sak";/**
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
 */class av{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hc,"1"),this.storage.removeItem(hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const mS=1e3,gS=10;class lv extends av{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Z_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);NI()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,gS):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},mS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}lv.type="LOCAL";const yS=lv;/**
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
 */class uv extends av{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}uv.type="SESSION";const cv=uv;/**
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
 */function _S(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Oc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,l)),g=await _S(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oc.receivers=[];/**
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
 */function Pf(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class vS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const _=Pf("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const C=T;if(C.data.eventId===_)switch(C.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(C.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function vr(){return window}function ES(r){vr().location.href=r}/**
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
 */function hv(){return typeof vr().WorkerGlobalScope<"u"&&typeof vr().importScripts=="function"}async function wS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TS(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function IS(){return hv()?self:null}/**
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
 */const dv="firebaseLocalStorageDb",SS=1,dc="firebaseLocalStorage",fv="fbase_key";class _l{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bc(r,e){return r.transaction([dc],e?"readwrite":"readonly").objectStore(dc)}function AS(){const r=indexedDB.deleteDatabase(dv);return new _l(r).toPromise()}function Qd(){const r=indexedDB.open(dv,SS);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(dc,{keyPath:fv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(dc)?e(i):(i.close(),await AS(),e(await Qd()))})})}async function ey(r,e,t){const i=bc(r,!0).put({[fv]:e,value:t});return new _l(i).toPromise()}async function RS(r,e){const t=bc(r,!1).get(e),i=await new _l(t).toPromise();return i===void 0?null:i.value}function ty(r,e){const t=bc(r,!0).delete(e);return new _l(t).toPromise()}const CS=800,kS=3;class pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>kS)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oc._getInstance(IS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await wS(),!this.activeServiceWorker)return;this.sender=new vS(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qd();return await ey(e,hc,"1"),await ty(e,hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ey(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>RS(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ty(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=bc(o,!1).getAll();return new _l(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pv.type="LOCAL";const PS=pv;new gl(3e4,6e4);/**
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
 */function NS(r,e){return e?$r(e):(ye(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Nf extends kf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Vo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xS(r){return ov(r.auth,new Nf(r),r.bypassAuthState)}function DS(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),sS(t,new Nf(r),r.bypassAuthState)}async function OS(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),iS(t,new Nf(r),r.bypassAuthState)}/**
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
 */class mv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xS;case"linkViaPopup":case"linkViaRedirect":return OS;case"reauthViaPopup":case"reauthViaRedirect":return DS;default:nr(this.auth,"internal-error")}}resolve(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bS=new gl(2e3,1e4);class Do extends mv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Do.currentPopupAction&&Do.currentPopupAction.cancel(),Do.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Gr(this.filter.length===1,"Popup operations only handle one event");const e=Pf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(_r(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_r(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Do.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_r(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bS.get())};e()}}Do.currentPopupAction=null;/**
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
 */const VS="pendingRedirect",Yu=new Map;class LS extends mv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Yu.get(this.auth._key());if(!e){try{const i=await MS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Yu.set(this.auth._key(),e)}return this.bypassAuthState||Yu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MS(r,e){const t=jS(e),i=US(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function FS(r,e){Yu.set(r._key(),e)}function US(r){return $r(r._redirectPersistence)}function jS(r){return Qu(VS,r.config.apiKey,r.name)}async function zS(r,e,t=!1){if(En(r.app))return Promise.reject(Vi(r));const i=Wo(r),o=NS(i,e),h=await new LS(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const BS=600*1e3;class $S{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!gv(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(_r(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BS&&this.cachedEventUids.clear(),this.cachedEventUids.has(ny(e))}saveEventToCache(e){this.cachedEventUids.add(ny(e)),this.lastProcessedEventTime=Date.now()}}function ny(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function gv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qS(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gv(r);default:return!1}}/**
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
 */async function HS(r,e={}){return Xr(r,"GET","/v1/projects",e)}/**
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
 */const WS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GS=/^https?/;async function KS(r){if(r.config.emulator)return;const{authorizedDomains:e}=await HS(r);for(const t of e)try{if(QS(t))return}catch{}nr(r,"unauthorized-domain")}function QS(r){const e=ac(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!GS.test(t))return!1;if(WS.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const YS=new gl(3e4,6e4);function ry(){const r=vr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function XS(r){return new Promise((e,t)=>{var i,o,l;function h(){ry(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ry(),t(_r(r,"network-request-failed"))},timeout:YS.get()})}if(!((o=(i=vr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=vr().gapi)===null||l===void 0)&&l.load)h();else{const f=UI("iframefcb");return vr()[f]=()=>{gapi.load?h():t(_r(r,"network-request-failed"))},tv(`${FI()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw Xu=null,e})}let Xu=null;function JS(r){return Xu=Xu||XS(r),Xu}/**
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
 */const ZS=new gl(5e3,15e3),eA="__/auth/iframe",tA="emulator/auth/iframe",nA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iA(r){const e=r.config;ye(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Af(e,tA):`https://${r.config.authDomain}/${eA}`,i={apiKey:e.apiKey,appName:r.name,v:Os},o=rA.get(r.config.apiHost);o&&(i.eid=o);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${pl(i).slice(1)}`}async function sA(r){const e=await JS(r),t=vr().gapi;return ye(t,r,"internal-error"),e.open({where:document.body,url:iA(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nA,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=_r(r,"network-request-failed"),f=vr().setTimeout(()=>{l(h)},ZS.get());function g(){vr().clearTimeout(f),o(i)}i.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const oA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aA=500,lA=600,uA="_blank",cA="http://localhost";class iy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hA(r,e,t,i=aA,o=lA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const g=Object.assign(Object.assign({},oA),{width:i.toString(),height:o.toString(),top:l,left:h}),_=Kt().toLowerCase();t&&(f=K_(_)?uA:t),W_(_)&&(e=e||cA,g.scrollbars="yes");const E=Object.entries(g).reduce((C,[F,q])=>`${C}${F}=${q},`,"");if(PI(_)&&f!=="_self")return dA(e||"",f),new iy(null);const T=window.open(e||"",f,E);ye(T,r,"popup-blocked");try{T.focus()}catch{}return new iy(T)}function dA(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const fA="__/auth/handler",pA="emulator/auth/handler",mA=encodeURIComponent("fac");async function sy(r,e,t,i,o,l){ye(r.config.authDomain,r,"auth-domain-config-required"),ye(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:Os,eventId:o};if(e instanceof iv){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",XT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof yl){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const g=await r._getAppCheckToken(),_=g?`#${mA}=${encodeURIComponent(g)}`:"";return`${gA(r)}?${pl(f).slice(1)}${_}`}function gA({config:r}){return r.emulator?Af(r,pA):`https://${r.authDomain}/${fA}`}/**
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
 */const Od="webStorageSupport";class yA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cv,this._completeRedirectFn=zS,this._overrideRedirectResult=FS}async _openPopup(e,t,i,o){var l;Gr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await sy(e,t,i,ac(),o);return hA(e,h,Pf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await sy(e,t,i,ac(),o);return ES(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Gr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await sA(e),i=new $S(e);return t.register("authEvent",o=>(ye(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Od,{type:Od},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Od];h!==void 0&&t(!!h),nr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=KS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Z_()||G_()||Cf()}}const _A=yA;var oy="@firebase/auth",ay="1.10.8";/**
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
 */class vA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function EA(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wA(r){Ui(new Hr("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ev(r)},_=new VI(i,o,l,g);return HI(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ui(new Hr("auth-internal",e=>{const t=Wo(e.getProvider("auth").getImmediate());return(i=>new vA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(oy,ay,EA(r)),bn(oy,ay,"esm2017")}/**
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
 */const TA=300,IA=x_("authIdTokenMaxAge")||TA;let ly=null;const SA=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>IA)return;const o=t==null?void 0:t.token;ly!==o&&(ly=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function AA(r=Pc()){const e=ml(r,"auth");if(e.isInitialized())return e.getImmediate();const t=qI(r,{popupRedirectResolver:_A,persistence:[PS,yS,cv]}),i=x_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=SA(l.toString());dS(t,h,()=>h(t.currentUser)),hS(t,f=>h(f))}}const o=P_("auth");return o&&WI(t,`http://${o}`),t}function RA(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}LI({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const l=_r("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",RA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wA("Browser");/**
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
 */const yv="firebasestorage.googleapis.com",_v="storageBucket",CA=120*1e3,kA=600*1e3;/**
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
 */class Ot extends ir{constructor(e,t,i=0){super(bd(e),`Firebase Storage: ${t} (${bd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ot.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return bd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Dt;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Dt||(Dt={}));function bd(r){return"storage/"+r}function vv(){const r="An unknown error occurred, please check the error payload for server response.";return new Ot(Dt.UNKNOWN,r)}function PA(r){return new Ot(Dt.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function NA(r){return new Ot(Dt.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xA(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ot(Dt.UNAUTHENTICATED,r)}function DA(){return new Ot(Dt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function OA(r){return new Ot(Dt.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function bA(){return new Ot(Dt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VA(){return new Ot(Dt.CANCELED,"User canceled the upload/download.")}function LA(r){return new Ot(Dt.INVALID_URL,"Invalid URL '"+r+"'.")}function MA(r){return new Ot(Dt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function FA(){return new Ot(Dt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+_v+"' property when initializing the app?")}function UA(){return new Ot(Dt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Yd(r){return new Ot(Dt.INVALID_ARGUMENT,r)}function Ev(){return new Ot(Dt.APP_DELETED,"The Firebase app was deleted.")}function jA(r){return new Ot(Dt.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function za(r){throw new Ot(Dt.INTERNAL_ERROR,"Internal error: "+r)}/**
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
 */class wn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=wn.makeFromUrl(e,t)}catch{return new wn(e,"")}if(i.path==="")return i;throw MA(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(me){me.path.charAt(me.path.length-1)==="/"&&(me.path_=me.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),g={bucket:1,path:3};function _(me){me.path_=decodeURIComponent(me.path)}const E="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),C="(/([^?#]*).*)?$",F=new RegExp(`^https?://${T}/${E}/b/${o}/o${C}`,"i"),q={bucket:1,path:3},K=t===yv?"(?:storage.googleapis.com|storage.cloud.google.com)":t,B="([^?#]*)",pe=new RegExp(`^https?://${K}/${o}/${B}`,"i"),ae=[{regex:f,indices:g,postModify:l},{regex:F,indices:q,postModify:_},{regex:pe,indices:{bucket:1,path:2},postModify:_}];for(let me=0;me<ae.length;me++){const Pe=ae[me],ve=Pe.regex.exec(e);if(ve){const P=ve[Pe.indices.bucket];let I=ve[Pe.indices.path];I||(I=""),i=new wn(P,I),Pe.postModify(i);break}}if(i==null)throw LA(e);return i}}class zA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function BA(r,e,t){let i=1,o=null,l=null,h=!1,f=0;function g(){return f===2}let _=!1;function E(...B){_||(_=!0,e.apply(null,B))}function T(B){o=setTimeout(()=>{o=null,r(F,g())},B)}function C(){l&&clearTimeout(l)}function F(B,...pe){if(_){C();return}if(B){C(),E.call(null,B,...pe);return}if(g()||h){C(),E.call(null,B,...pe);return}i<64&&(i*=2);let ae;f===1?(f=2,ae=0):ae=(i+Math.random())*1e3,T(ae)}let q=!1;function K(B){q||(q=!0,C(),!_&&(o!==null?(B||(f=2),clearTimeout(o),T(0)):B||(f=1)))}return T(0),l=setTimeout(()=>{h=!0,K(!0)},t),K}function $A(r){r(!1)}/**
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
 */function qA(r){return r!==void 0}function HA(r){return typeof r=="object"&&!Array.isArray(r)}function wv(r){return typeof r=="string"||r instanceof String}function uy(r,e,t,i){if(i<e)throw Yd(`Invalid value for '${r}'. Expected ${e} or greater.`);if(i>t)throw Yd(`Invalid value for '${r}'. Expected ${t} or less.`)}/**
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
 */function Tv(r,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${r}`}function Iv(r){const e=encodeURIComponent;let t="?";for(const i in r)if(r.hasOwnProperty(i)){const o=e(i)+"="+e(r[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var As;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(As||(As={}));/**
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
 */function WA(r,e){const t=r>=500&&r<600,o=[408,429].indexOf(r)!==-1,l=e.indexOf(r)!==-1;return t||o||l}/**
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
 */class GA{constructor(e,t,i,o,l,h,f,g,_,E,T,C=!0,F=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=g,this.timeout_=_,this.progressCallback_=E,this.connectionFactory_=T,this.retry=C,this.isUsingEmulator=F,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((q,K)=>{this.resolve_=q,this.reject_=K,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new ju(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const g=f.loaded,_=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,_)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===As.NO_ERROR,g=l.getStatus();if(!f||WA(g,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===As.ABORT;i(!1,new ju(!1,null,E));return}const _=this.successCodes_.indexOf(g)!==-1;i(!0,new ju(_,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(f,f.getResponse());qA(g)?l(g):l()}catch(g){h(g)}else if(f!==null){const g=vv();g.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,g)):h(g)}else if(o.canceled){const g=this.appDelete_?Ev():VA();h(g)}else{const g=bA();h(g)}};this.canceled_?t(!1,new ju(!1,null,!0)):this.backoffId_=BA(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$A(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ju{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function KA(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function QA(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function YA(r,e){e&&(r["X-Firebase-GMPID"]=e)}function XA(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function JA(r,e,t,i,o,l,h=!0,f=!1){const g=Iv(r.urlParams),_=r.url+g,E=Object.assign({},r.headers);return YA(E,e),KA(E,t),QA(E,l),XA(E,i),new GA(_,r.method,E,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,o,h,f)}/**
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
 */function Sv(r){let e;try{e=JSON.parse(r)}catch{return null}return HA(e)?e:null}/**
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
 */function ZA(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function eR(r,e){const t=e.split("/").filter(i=>i.length>0).join("/");return r.length===0?t:r+"/"+t}function Av(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */function tR(r,e){return e}class Zt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||tR}}let zu=null;function nR(r){return!wv(r)||r.length<2?r:Av(r)}function rR(){if(zu)return zu;const r=[];r.push(new Zt("bucket")),r.push(new Zt("generation")),r.push(new Zt("metageneration")),r.push(new Zt("name","fullPath",!0));function e(l,h){return nR(h)}const t=new Zt("name");t.xform=e,r.push(t);function i(l,h){return h!==void 0?Number(h):h}const o=new Zt("size");return o.xform=i,r.push(o),r.push(new Zt("timeCreated")),r.push(new Zt("updated")),r.push(new Zt("md5Hash",null,!0)),r.push(new Zt("cacheControl",null,!0)),r.push(new Zt("contentDisposition",null,!0)),r.push(new Zt("contentEncoding",null,!0)),r.push(new Zt("contentLanguage",null,!0)),r.push(new Zt("contentType",null,!0)),r.push(new Zt("metadata","customMetadata",!0)),zu=r,zu}function iR(r,e){function t(){const i=r.bucket,o=r.fullPath,l=new wn(i,o);return e._makeStorageReference(l)}Object.defineProperty(r,"ref",{get:t})}function sR(r,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];i[h.local]=h.xform(i,e[h.server])}return iR(i,r),i}function oR(r,e,t){const i=Sv(e);return i===null?null:sR(r,i,t)}function aR(r,e,t,i){const o=Sv(e);if(o===null||!wv(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(_=>{const E=r.bucket,T=r.fullPath,C="/b/"+h(E)+"/o/"+h(T),F=Tv(C,t,i),q=Iv({alt:"media",token:_});return F+q})[0]}class lR{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function uR(r){if(!r)throw vv()}function cR(r,e){function t(i,o){const l=oR(r,o,e);return uR(l!==null),aR(l,o,r.host,r._protocol)}return t}function hR(r){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=DA():o=xA():t.getStatus()===402?o=NA(r.bucket):t.getStatus()===403?o=OA(r.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function dR(r){const e=hR(r);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=PA(r.path)),l.serverResponse=o.serverResponse,l}return t}function fR(r,e,t){const i=e.fullServerUrl(),o=Tv(i,r.host,r._protocol),l="GET",h=r.maxOperationRetryTime,f=new lR(o,l,cR(r,t),h);return f.errorHandler=dR(e),f}class pR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=As.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=As.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=As.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o,l){if(this.sent_)throw za("cannot .send() more than once");if(Yr(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),l!==void 0)for(const h in l)l.hasOwnProperty(h)&&this.xhr_.setRequestHeader(h,l[h].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw za("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw za("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw za("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw za("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class mR extends pR{initXhr(){this.xhr_.responseType="text"}}function gR(){return new mR}/**
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
 */class Ns{constructor(e,t){this._service=e,t instanceof wn?this._location=t:this._location=wn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ns(e,t)}get root(){const e=new wn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Av(this._location.path)}get storage(){return this._service}get parent(){const e=ZA(this._location.path);if(e===null)return null;const t=new wn(this._location.bucket,e);return new Ns(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw jA(e)}}function yR(r){r._throwIfRoot("getDownloadURL");const e=fR(r.storage,r._location,rR());return r.storage.makeRequestWithTokens(e,gR).then(t=>{if(t===null)throw UA();return t})}function _R(r,e){const t=eR(r._location.path,e),i=new wn(r._location.bucket,t);return new Ns(r.storage,i)}/**
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
 */function vR(r){return/^[A-Za-z]+:\/\//.test(r)}function ER(r,e){return new Ns(r,e)}function Rv(r,e){if(r instanceof xf){const t=r;if(t._bucket==null)throw FA();const i=new Ns(t,t._bucket);return e!=null?Rv(i,e):i}else return e!==void 0?_R(r,e):r}function wR(r,e){if(e&&vR(e)){if(r instanceof xf)return ER(r,e);throw Yd("To use ref(service, url), the first argument must be a Storage instance.")}else return Rv(r,e)}function cy(r,e){const t=e==null?void 0:e[_v];return t==null?null:wn.makeFromBucketSpec(t,r)}function TR(r,e,t,i={}){r.host=`${e}:${t}`;const o=Yr(e);o&&(Cc(`https://${r.host}/b`),kc("Storage",!0)),r._isUsingEmulator=!0,r._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(r._overrideAuthToken=typeof l=="string"?l:D_(l,r.app.options.projectId))}class xf{constructor(e,t,i,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=yv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CA,this._maxUploadRetryTime=kA,this._requests=new Set,o!=null?this._bucket=wn.makeFromBucketSpec(o,this._host):this._bucket=cy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wn.makeFromBucketSpec(this._url,e):this._bucket=cy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){uy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){uy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(En(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ns(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new zA(Ev());{const h=JA(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const hy="@firebase/storage",dy="0.13.14";/**
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
 */const Cv="storage";function IR(r){return r=ut(r),yR(r)}function SR(r,e){return r=ut(r),wR(r,e)}function AR(r=Pc(),e){r=ut(r);const i=ml(r,Cv).getImmediate({identifier:e}),o=Ef("storage");return o&&RR(i,...o),i}function RR(r,e,t,i={}){TR(r,e,t,i)}function CR(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),i=r.getProvider("auth-internal"),o=r.getProvider("app-check-internal");return new xf(t,i,o,e,Os)}function kR(){Ui(new Hr(Cv,CR,"PUBLIC").setMultipleInstances(!0)),bn(hy,dy,""),bn(hy,dy,"esm2017")}kR();var PR="firebase",NR="11.10.0";/**
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
 */bn(PR,NR,"app");var fy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Li,kv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,I){function R(){}R.prototype=I.prototype,P.D=I.prototype,P.prototype=new R,P.prototype.constructor=P,P.C=function(N,D,b){for(var A=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)A[Ke-2]=arguments[Ke];return I.prototype[D].apply(N,A)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,I,R){R||(R=0);var N=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)N[D]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(D=0;16>D;++D)N[D]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=P.g[0],R=P.g[1],D=P.g[2];var b=P.g[3],A=I+(b^R&(D^b))+N[0]+3614090360&4294967295;I=R+(A<<7&4294967295|A>>>25),A=b+(D^I&(R^D))+N[1]+3905402710&4294967295,b=I+(A<<12&4294967295|A>>>20),A=D+(R^b&(I^R))+N[2]+606105819&4294967295,D=b+(A<<17&4294967295|A>>>15),A=R+(I^D&(b^I))+N[3]+3250441966&4294967295,R=D+(A<<22&4294967295|A>>>10),A=I+(b^R&(D^b))+N[4]+4118548399&4294967295,I=R+(A<<7&4294967295|A>>>25),A=b+(D^I&(R^D))+N[5]+1200080426&4294967295,b=I+(A<<12&4294967295|A>>>20),A=D+(R^b&(I^R))+N[6]+2821735955&4294967295,D=b+(A<<17&4294967295|A>>>15),A=R+(I^D&(b^I))+N[7]+4249261313&4294967295,R=D+(A<<22&4294967295|A>>>10),A=I+(b^R&(D^b))+N[8]+1770035416&4294967295,I=R+(A<<7&4294967295|A>>>25),A=b+(D^I&(R^D))+N[9]+2336552879&4294967295,b=I+(A<<12&4294967295|A>>>20),A=D+(R^b&(I^R))+N[10]+4294925233&4294967295,D=b+(A<<17&4294967295|A>>>15),A=R+(I^D&(b^I))+N[11]+2304563134&4294967295,R=D+(A<<22&4294967295|A>>>10),A=I+(b^R&(D^b))+N[12]+1804603682&4294967295,I=R+(A<<7&4294967295|A>>>25),A=b+(D^I&(R^D))+N[13]+4254626195&4294967295,b=I+(A<<12&4294967295|A>>>20),A=D+(R^b&(I^R))+N[14]+2792965006&4294967295,D=b+(A<<17&4294967295|A>>>15),A=R+(I^D&(b^I))+N[15]+1236535329&4294967295,R=D+(A<<22&4294967295|A>>>10),A=I+(D^b&(R^D))+N[1]+4129170786&4294967295,I=R+(A<<5&4294967295|A>>>27),A=b+(R^D&(I^R))+N[6]+3225465664&4294967295,b=I+(A<<9&4294967295|A>>>23),A=D+(I^R&(b^I))+N[11]+643717713&4294967295,D=b+(A<<14&4294967295|A>>>18),A=R+(b^I&(D^b))+N[0]+3921069994&4294967295,R=D+(A<<20&4294967295|A>>>12),A=I+(D^b&(R^D))+N[5]+3593408605&4294967295,I=R+(A<<5&4294967295|A>>>27),A=b+(R^D&(I^R))+N[10]+38016083&4294967295,b=I+(A<<9&4294967295|A>>>23),A=D+(I^R&(b^I))+N[15]+3634488961&4294967295,D=b+(A<<14&4294967295|A>>>18),A=R+(b^I&(D^b))+N[4]+3889429448&4294967295,R=D+(A<<20&4294967295|A>>>12),A=I+(D^b&(R^D))+N[9]+568446438&4294967295,I=R+(A<<5&4294967295|A>>>27),A=b+(R^D&(I^R))+N[14]+3275163606&4294967295,b=I+(A<<9&4294967295|A>>>23),A=D+(I^R&(b^I))+N[3]+4107603335&4294967295,D=b+(A<<14&4294967295|A>>>18),A=R+(b^I&(D^b))+N[8]+1163531501&4294967295,R=D+(A<<20&4294967295|A>>>12),A=I+(D^b&(R^D))+N[13]+2850285829&4294967295,I=R+(A<<5&4294967295|A>>>27),A=b+(R^D&(I^R))+N[2]+4243563512&4294967295,b=I+(A<<9&4294967295|A>>>23),A=D+(I^R&(b^I))+N[7]+1735328473&4294967295,D=b+(A<<14&4294967295|A>>>18),A=R+(b^I&(D^b))+N[12]+2368359562&4294967295,R=D+(A<<20&4294967295|A>>>12),A=I+(R^D^b)+N[5]+4294588738&4294967295,I=R+(A<<4&4294967295|A>>>28),A=b+(I^R^D)+N[8]+2272392833&4294967295,b=I+(A<<11&4294967295|A>>>21),A=D+(b^I^R)+N[11]+1839030562&4294967295,D=b+(A<<16&4294967295|A>>>16),A=R+(D^b^I)+N[14]+4259657740&4294967295,R=D+(A<<23&4294967295|A>>>9),A=I+(R^D^b)+N[1]+2763975236&4294967295,I=R+(A<<4&4294967295|A>>>28),A=b+(I^R^D)+N[4]+1272893353&4294967295,b=I+(A<<11&4294967295|A>>>21),A=D+(b^I^R)+N[7]+4139469664&4294967295,D=b+(A<<16&4294967295|A>>>16),A=R+(D^b^I)+N[10]+3200236656&4294967295,R=D+(A<<23&4294967295|A>>>9),A=I+(R^D^b)+N[13]+681279174&4294967295,I=R+(A<<4&4294967295|A>>>28),A=b+(I^R^D)+N[0]+3936430074&4294967295,b=I+(A<<11&4294967295|A>>>21),A=D+(b^I^R)+N[3]+3572445317&4294967295,D=b+(A<<16&4294967295|A>>>16),A=R+(D^b^I)+N[6]+76029189&4294967295,R=D+(A<<23&4294967295|A>>>9),A=I+(R^D^b)+N[9]+3654602809&4294967295,I=R+(A<<4&4294967295|A>>>28),A=b+(I^R^D)+N[12]+3873151461&4294967295,b=I+(A<<11&4294967295|A>>>21),A=D+(b^I^R)+N[15]+530742520&4294967295,D=b+(A<<16&4294967295|A>>>16),A=R+(D^b^I)+N[2]+3299628645&4294967295,R=D+(A<<23&4294967295|A>>>9),A=I+(D^(R|~b))+N[0]+4096336452&4294967295,I=R+(A<<6&4294967295|A>>>26),A=b+(R^(I|~D))+N[7]+1126891415&4294967295,b=I+(A<<10&4294967295|A>>>22),A=D+(I^(b|~R))+N[14]+2878612391&4294967295,D=b+(A<<15&4294967295|A>>>17),A=R+(b^(D|~I))+N[5]+4237533241&4294967295,R=D+(A<<21&4294967295|A>>>11),A=I+(D^(R|~b))+N[12]+1700485571&4294967295,I=R+(A<<6&4294967295|A>>>26),A=b+(R^(I|~D))+N[3]+2399980690&4294967295,b=I+(A<<10&4294967295|A>>>22),A=D+(I^(b|~R))+N[10]+4293915773&4294967295,D=b+(A<<15&4294967295|A>>>17),A=R+(b^(D|~I))+N[1]+2240044497&4294967295,R=D+(A<<21&4294967295|A>>>11),A=I+(D^(R|~b))+N[8]+1873313359&4294967295,I=R+(A<<6&4294967295|A>>>26),A=b+(R^(I|~D))+N[15]+4264355552&4294967295,b=I+(A<<10&4294967295|A>>>22),A=D+(I^(b|~R))+N[6]+2734768916&4294967295,D=b+(A<<15&4294967295|A>>>17),A=R+(b^(D|~I))+N[13]+1309151649&4294967295,R=D+(A<<21&4294967295|A>>>11),A=I+(D^(R|~b))+N[4]+4149444226&4294967295,I=R+(A<<6&4294967295|A>>>26),A=b+(R^(I|~D))+N[11]+3174756917&4294967295,b=I+(A<<10&4294967295|A>>>22),A=D+(I^(b|~R))+N[2]+718787259&4294967295,D=b+(A<<15&4294967295|A>>>17),A=R+(b^(D|~I))+N[9]+3951481745&4294967295,P.g[0]=P.g[0]+I&4294967295,P.g[1]=P.g[1]+(D+(A<<21&4294967295|A>>>11))&4294967295,P.g[2]=P.g[2]+D&4294967295,P.g[3]=P.g[3]+b&4294967295}i.prototype.u=function(P,I){I===void 0&&(I=P.length);for(var R=I-this.blockSize,N=this.B,D=this.h,b=0;b<I;){if(D==0)for(;b<=R;)o(this,P,b),b+=this.blockSize;if(typeof P=="string"){for(;b<I;)if(N[D++]=P.charCodeAt(b++),D==this.blockSize){o(this,N),D=0;break}}else for(;b<I;)if(N[D++]=P[b++],D==this.blockSize){o(this,N),D=0;break}}this.h=D,this.o+=I},i.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var I=1;I<P.length-8;++I)P[I]=0;var R=8*this.o;for(I=P.length-8;I<P.length;++I)P[I]=R&255,R/=256;for(this.u(P),P=Array(16),I=R=0;4>I;++I)for(var N=0;32>N;N+=8)P[R++]=this.g[I]>>>N&255;return P};function l(P,I){var R=f;return Object.prototype.hasOwnProperty.call(R,P)?R[P]:R[P]=I(P)}function h(P,I){this.h=I;for(var R=[],N=!0,D=P.length-1;0<=D;D--){var b=P[D]|0;N&&b==I||(R[D]=b,N=!1)}this.g=R}var f={};function g(P){return-128<=P&&128>P?l(P,function(I){return new h([I|0],0>I?-1:0)}):new h([P|0],0>P?-1:0)}function _(P){if(isNaN(P)||!isFinite(P))return T;if(0>P)return B(_(-P));for(var I=[],R=1,N=0;P>=R;N++)I[N]=P/R|0,R*=4294967296;return new h(I,0)}function E(P,I){if(P.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P.charAt(0)=="-")return B(E(P.substring(1),I));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=_(Math.pow(I,8)),N=T,D=0;D<P.length;D+=8){var b=Math.min(8,P.length-D),A=parseInt(P.substring(D,D+b),I);8>b?(b=_(Math.pow(I,b)),N=N.j(b).add(_(A))):(N=N.j(R),N=N.add(_(A)))}return N}var T=g(0),C=g(1),F=g(16777216);r=h.prototype,r.m=function(){if(K(this))return-B(this).m();for(var P=0,I=1,R=0;R<this.g.length;R++){var N=this.i(R);P+=(0<=N?N:4294967296+N)*I,I*=4294967296}return P},r.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(q(this))return"0";if(K(this))return"-"+B(this).toString(P);for(var I=_(Math.pow(P,6)),R=this,N="";;){var D=me(R,I).g;R=pe(R,D.j(I));var b=((0<R.g.length?R.g[0]:R.h)>>>0).toString(P);if(R=D,q(R))return b+N;for(;6>b.length;)b="0"+b;N=b+N}},r.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function q(P){if(P.h!=0)return!1;for(var I=0;I<P.g.length;I++)if(P.g[I]!=0)return!1;return!0}function K(P){return P.h==-1}r.l=function(P){return P=pe(this,P),K(P)?-1:q(P)?0:1};function B(P){for(var I=P.g.length,R=[],N=0;N<I;N++)R[N]=~P.g[N];return new h(R,~P.h).add(C)}r.abs=function(){return K(this)?B(this):this},r.add=function(P){for(var I=Math.max(this.g.length,P.g.length),R=[],N=0,D=0;D<=I;D++){var b=N+(this.i(D)&65535)+(P.i(D)&65535),A=(b>>>16)+(this.i(D)>>>16)+(P.i(D)>>>16);N=A>>>16,b&=65535,A&=65535,R[D]=A<<16|b}return new h(R,R[R.length-1]&-2147483648?-1:0)};function pe(P,I){return P.add(B(I))}r.j=function(P){if(q(this)||q(P))return T;if(K(this))return K(P)?B(this).j(B(P)):B(B(this).j(P));if(K(P))return B(this.j(B(P)));if(0>this.l(F)&&0>P.l(F))return _(this.m()*P.m());for(var I=this.g.length+P.g.length,R=[],N=0;N<2*I;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var D=0;D<P.g.length;D++){var b=this.i(N)>>>16,A=this.i(N)&65535,Ke=P.i(D)>>>16,Tt=P.i(D)&65535;R[2*N+2*D]+=A*Tt,de(R,2*N+2*D),R[2*N+2*D+1]+=b*Tt,de(R,2*N+2*D+1),R[2*N+2*D+1]+=A*Ke,de(R,2*N+2*D+1),R[2*N+2*D+2]+=b*Ke,de(R,2*N+2*D+2)}for(N=0;N<I;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=I;N<2*I;N++)R[N]=0;return new h(R,0)};function de(P,I){for(;(P[I]&65535)!=P[I];)P[I+1]+=P[I]>>>16,P[I]&=65535,I++}function ae(P,I){this.g=P,this.h=I}function me(P,I){if(q(I))throw Error("division by zero");if(q(P))return new ae(T,T);if(K(P))return I=me(B(P),I),new ae(B(I.g),B(I.h));if(K(I))return I=me(P,B(I)),new ae(B(I.g),I.h);if(30<P.g.length){if(K(P)||K(I))throw Error("slowDivide_ only works with positive integers.");for(var R=C,N=I;0>=N.l(P);)R=Pe(R),N=Pe(N);var D=ve(R,1),b=ve(N,1);for(N=ve(N,2),R=ve(R,2);!q(N);){var A=b.add(N);0>=A.l(P)&&(D=D.add(R),b=A),N=ve(N,1),R=ve(R,1)}return I=pe(P,D.j(I)),new ae(D,I)}for(D=T;0<=P.l(I);){for(R=Math.max(1,Math.floor(P.m()/I.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),b=_(R),A=b.j(I);K(A)||0<A.l(P);)R-=N,b=_(R),A=b.j(I);q(b)&&(b=C),D=D.add(b),P=pe(P,A)}return new ae(D,P)}r.A=function(P){return me(this,P).h},r.and=function(P){for(var I=Math.max(this.g.length,P.g.length),R=[],N=0;N<I;N++)R[N]=this.i(N)&P.i(N);return new h(R,this.h&P.h)},r.or=function(P){for(var I=Math.max(this.g.length,P.g.length),R=[],N=0;N<I;N++)R[N]=this.i(N)|P.i(N);return new h(R,this.h|P.h)},r.xor=function(P){for(var I=Math.max(this.g.length,P.g.length),R=[],N=0;N<I;N++)R[N]=this.i(N)^P.i(N);return new h(R,this.h^P.h)};function Pe(P){for(var I=P.g.length+1,R=[],N=0;N<I;N++)R[N]=P.i(N)<<1|P.i(N-1)>>>31;return new h(R,P.h)}function ve(P,I){var R=I>>5;I%=32;for(var N=P.g.length-R,D=[],b=0;b<N;b++)D[b]=0<I?P.i(b+R)>>>I|P.i(b+R+1)<<32-I:P.i(b+R);return new h(D,P.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,kv=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,Li=h}).apply(typeof fy<"u"?fy:typeof self<"u"?self:typeof window<"u"?window:{});var Bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pv,qa,Nv,Ju,Xd,xv,Dv,Ov;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bu=="object"&&Bu];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function o(u,p){if(p)e:{var y=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var V=u[w];if(!(V in y))break e;y=y[V]}u=u[u.length-1],w=y[u],p=p(w),p!=w&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,w=!1,V={next:function(){if(!w&&y<u.length){var z=y++;return{value:p(z,u[z]),done:!1}}return w=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function _(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function E(u,p,y){return u.call.apply(u.bind,arguments)}function T(u,p,y){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,w),u.apply(p,V)}}return function(){return u.apply(p,arguments)}}function C(u,p,y){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,C.apply(null,arguments)}function F(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function q(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(w,V,z){for(var Z=Array(arguments.length-2),We=2;We<arguments.length;We++)Z[We-2]=arguments[We];return p.prototype[V].apply(w,Z)}}function K(u){const p=u.length;if(0<p){const y=Array(p);for(let w=0;w<p;w++)y[w]=u[w];return y}return[]}function B(u,p){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(g(w)){const V=u.length||0,z=w.length||0;u.length=V+z;for(let Z=0;Z<z;Z++)u[V+Z]=w[Z]}else u.push(w)}}class pe{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function de(u){return/^[\s\xa0]*$/.test(u)}function ae(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function me(u){return me[" "](u),u}me[" "]=function(){};var Pe=ae().indexOf("Gecko")!=-1&&!(ae().toLowerCase().indexOf("webkit")!=-1&&ae().indexOf("Edge")==-1)&&!(ae().indexOf("Trident")!=-1||ae().indexOf("MSIE")!=-1)&&ae().indexOf("Edge")==-1;function ve(u,p,y){for(const w in u)p.call(y,u[w],w,u)}function P(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function I(u){const p={};for(const y in u)p[y]=u[y];return p}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,p){let y,w;for(let V=1;V<arguments.length;V++){w=arguments[V];for(y in w)u[y]=w[y];for(let z=0;z<R.length;z++)y=R[z],Object.prototype.hasOwnProperty.call(w,y)&&(u[y]=w[y])}}function D(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function b(u){f.setTimeout(()=>{throw u},0)}function A(){var u=ge;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class Ke{constructor(){this.h=this.g=null}add(p,y){const w=Tt.get();w.set(p,y),this.h?this.h.next=w:this.g=w,this.h=w}}var Tt=new pe(()=>new mt,u=>u.reset());class mt{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let je,ee=!1,ge=new Ke,ne=()=>{const u=f.Promise.resolve(void 0);je=()=>{u.then(O)}};var O=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(y){b(y)}var p=Tt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ee=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Re=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u})();function Ce(u,p){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Pe){e:{try{me(p.nodeName);var V=!0;break e}catch{}V=!1}V||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:xe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}q(Ce,fe);var xe={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Oe="closure_listenable_"+(1e6*Math.random()|0),ze=0;function $e(u,p,y,w,V){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!w,this.ha=V,this.key=++ze,this.da=this.fa=!1}function ct(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Vn(u){this.src=u,this.g={},this.h=0}Vn.prototype.add=function(u,p,y,w,V){var z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);var Z=en(u,p,w,V);return-1<Z?(p=u[Z],y||(p.fa=!1)):(p=new $e(p,this.src,z,!!w,V),p.fa=y,u.push(p)),p};function Jr(u,p){var y=p.type;if(y in u.g){var w=u.g[y],V=Array.prototype.indexOf.call(w,p,void 0),z;(z=0<=V)&&Array.prototype.splice.call(w,V,1),z&&(ct(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function en(u,p,y,w){for(var V=0;V<u.length;++V){var z=u[V];if(!z.da&&z.listener==p&&z.capture==!!y&&z.ha==w)return V}return-1}var Ln="closure_lm_"+(1e6*Math.random()|0),Ar={};function Rr(u,p,y,w,V){if(Array.isArray(p)){for(var z=0;z<p.length;z++)Rr(u,p[z],y,w,V);return null}return y=Xi(y),u&&u[Oe]?u.K(p,y,_(w)?!!w.capture:!1,V):Qi(u,p,y,!1,w,V)}function Qi(u,p,y,w,V,z){if(!p)throw Error("Invalid event type");var Z=_(V)?!!V.capture:!!V,We=ti(u);if(We||(u[Ln]=We=new Vn(u)),y=We.add(p,y,w,Z,z),y.proxy)return y;if(w=Zr(),y.proxy=w,w.src=u,w.listener=y,u.addEventListener)Re||(V=Z),V===void 0&&(V=!1),u.addEventListener(p.toString(),w,V);else if(u.attachEvent)u.attachEvent(dn(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Zr(){function u(y){return p.call(u.src,u.listener,y)}const p=Yi;return u}function ei(u,p,y,w,V){if(Array.isArray(p))for(var z=0;z<p.length;z++)ei(u,p[z],y,w,V);else w=_(w)?!!w.capture:!!w,y=Xi(y),u&&u[Oe]?(u=u.i,p=String(p).toString(),p in u.g&&(z=u.g[p],y=en(z,y,w,V),-1<y&&(ct(z[y]),Array.prototype.splice.call(z,y,1),z.length==0&&(delete u.g[p],u.h--)))):u&&(u=ti(u))&&(p=u.g[p.toString()],u=-1,p&&(u=en(p,y,w,V)),(y=-1<u?p[u]:null)&&Mn(y))}function Mn(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Oe])Jr(p.i,u);else{var y=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(y,w,u.capture):p.detachEvent?p.detachEvent(dn(y),w):p.addListener&&p.removeListener&&p.removeListener(w),(y=ti(p))?(Jr(y,u),y.h==0&&(y.src=null,p[Ln]=null)):ct(u)}}}function dn(u){return u in Ar?Ar[u]:Ar[u]="on"+u}function Yi(u,p){if(u.da)u=!0;else{p=new Ce(p,this);var y=u.listener,w=u.ha||u.src;u.fa&&Mn(u),u=y.call(w,p)}return u}function ti(u){return u=u[Ln],u instanceof Vn?u:null}var ni="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xi(u){return typeof u=="function"?u:(u[ni]||(u[ni]=function(p){return u.handleEvent(p)}),u[ni])}function ht(){$.call(this),this.i=new Vn(this),this.M=this,this.F=null}q(ht,$),ht.prototype[Oe]=!0,ht.prototype.removeEventListener=function(u,p,y,w){ei(this,u,p,y,w)};function at(u,p){var y,w=u.F;if(w)for(y=[];w;w=w.F)y.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new fe(p,u);else if(p instanceof fe)p.target=p.target||u;else{var V=p;p=new fe(w,u),N(p,V)}if(V=!0,y)for(var z=y.length-1;0<=z;z--){var Z=p.g=y[z];V=Fn(Z,w,!0,p)&&V}if(Z=p.g=u,V=Fn(Z,w,!0,p)&&V,V=Fn(Z,w,!1,p)&&V,y)for(z=0;z<y.length;z++)Z=p.g=y[z],V=Fn(Z,w,!1,p)&&V}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],w=0;w<y.length;w++)ct(y[w]);delete u.g[p],u.h--}}this.F=null},ht.prototype.K=function(u,p,y,w){return this.i.add(String(u),p,!1,y,w)},ht.prototype.L=function(u,p,y,w){return this.i.add(String(u),p,!0,y,w)};function Fn(u,p,y,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var V=!0,z=0;z<p.length;++z){var Z=p[z];if(Z&&!Z.da&&Z.capture==y){var We=Z.listener,It=Z.ha||Z.src;Z.fa&&Jr(u.i,Z),V=We.call(It,w)!==!1&&V}}return V&&!w.defaultPrevented}function G(u,p,y){if(typeof u=="function")y&&(u=C(u,y));else if(u&&typeof u.handleEvent=="function")u=C(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function te(u){u.g=G(()=>{u.g=null,u.i&&(u.i=!1,te(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class re extends ${constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:te(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ke(u){$.call(this),this.h=u,this.g={}}q(ke,$);var Je=[];function ri(u){ve(u.g,function(p,y){this.g.hasOwnProperty(y)&&Mn(p)},u),u.g={}}ke.prototype.N=function(){ke.aa.N.call(this),ri(this)},ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zo=f.JSON.stringify,ea=f.JSON.parse,ta=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Ji(){}Ji.prototype.h=null;function js(u){return u.h||(u.h=u.i())}function zs(){}var Tn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sr(){fe.call(this,"d")}q(sr,fe);function Bs(){fe.call(this,"c")}q(Bs,fe);var or={},na=null;function Zi(){return na=na||new ht}or.La="serverreachability";function ra(u){fe.call(this,or.La,u)}q(ra,fe);function Cr(u){const p=Zi();at(p,new ra(p))}or.STAT_EVENT="statevent";function ia(u,p){fe.call(this,or.STAT_EVENT,u),this.stat=p}q(ia,fe);function dt(u){const p=Zi();at(p,new ia(p,u))}or.Ma="timingevent";function $s(u,p){fe.call(this,or.Ma,u),this.size=p}q($s,fe);function Un(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function es(){this.g=!0}es.prototype.xa=function(){this.g=!1};function ts(u,p,y,w,V,z){u.info(function(){if(u.g)if(z)for(var Z="",We=z.split("&"),It=0;It<We.length;It++){var Fe=We[It].split("=");if(1<Fe.length){var Ct=Fe[0];Fe=Fe[1];var gt=Ct.split("_");Z=2<=gt.length&&gt[1]=="type"?Z+(Ct+"="+Fe+"&"):Z+(Ct+"=redacted&")}}else Z=null;else Z=z;return"XMLHTTP REQ ("+w+") [attempt "+V+"]: "+p+`
`+y+`
`+Z})}function qs(u,p,y,w,V,z,Z){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+V+"]: "+p+`
`+y+`
`+z+" "+Z})}function jn(u,p,y,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Yc(u,y)+(w?" "+w:"")})}function sa(u,p){u.info(function(){return"TIMEOUT: "+p})}es.prototype.info=function(){};function Yc(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var w=y[u];if(!(2>w.length)){var V=w[1];if(Array.isArray(V)&&!(1>V.length)){var z=V[0];if(z!="noop"&&z!="stop"&&z!="close")for(var Z=1;Z<V.length;Z++)V[Z]=""}}}}return Zo(y)}catch{return p}}var Hs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zn;function ns(){}q(ns,Ji),ns.prototype.g=function(){return new XMLHttpRequest},ns.prototype.i=function(){return{}},zn=new ns;function Bn(u,p,y,w){this.j=u,this.i=p,this.l=y,this.R=w||1,this.U=new ke(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Al}function Al(){this.i=null,this.g="",this.h=!1}var oa={},Ws={};function Gs(u,p,y){u.L=1,u.v=li(pn(p)),u.m=y,u.P=!0,aa(u,null)}function aa(u,p){u.F=Date.now(),Qe(u),u.A=pn(u.v);var y=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),ci(y.i,"t",w),u.C=0,y=u.j.J,u.h=new Al,u.g=$l(u.j,y?p:null,!u.m),0<u.O&&(u.M=new re(C(u.Y,u,u.g),u.O)),p=u.U,y=u.g,w=u.ca;var V="readystatechange";Array.isArray(V)||(V&&(Je[0]=V.toString()),V=Je);for(var z=0;z<V.length;z++){var Z=Rr(y,V[z],w||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Cr(),ts(u.i,u.u,u.A,u.l,u.R,u.m)}Bn.prototype.ca=function(u){u=u.target;const p=this.M;p&&nn(u)==3?p.j():this.Y(u)},Bn.prototype.Y=function(u){try{if(u==this.g)e:{const gt=nn(this.g);var p=this.g.Ba();const An=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||fa(this.g)))){this.J||gt!=4||p==7||(p==8||0>=An?Cr(3):Cr(2)),rs(this);var y=this.g.Z();this.X=y;t:if(Rl(this)){var w=fa(this.g);u="";var V=w.length,z=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){In(this),ii(this);var Z="";break t}this.h.i=new f.TextDecoder}for(p=0;p<V;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(z&&p==V-1)});w.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,qs(this.i,this.u,this.A,this.l,this.R,gt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var We,It=this.g;if((We=It.g?It.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!de(We)){var Fe=We;break t}}Fe=null}if(y=Fe)jn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,la(this,y);else{this.o=!1,this.s=3,dt(12),In(this),ii(this);break e}}if(this.P){y=!0;let gn;for(;!this.J&&this.C<Z.length;)if(gn=Xc(this,Z),gn==Ws){gt==4&&(this.s=4,dt(14),y=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(gn==oa){this.s=4,dt(15),jn(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else jn(this.i,this.l,gn,null),la(this,gn);if(Rl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||Z.length!=0||this.h.h||(this.s=1,dt(16),y=!1),this.o=this.o&&y,!y)jn(this.i,this.l,Z,"[Invalid Chunked Response]"),In(this),ii(this);else if(0<Z.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),ma(Ct),Ct.M=!0,dt(11))}}else jn(this.i,this.l,Z,null),la(this,Z);gt==4&&In(this),this.o&&!this.J&&(gt==4?io(this.j,this):(this.o=!1,Qe(this)))}else Zs(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),In(this),ii(this)}}}catch{}finally{}};function Rl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Xc(u,p){var y=u.C,w=p.indexOf(`
`,y);return w==-1?Ws:(y=Number(p.substring(y,w)),isNaN(y)?oa:(w+=1,w+y>p.length?Ws:(p=p.slice(w,w+y),u.C=w+y,p)))}Bn.prototype.cancel=function(){this.J=!0,In(this)};function Qe(u){u.S=Date.now()+u.I,Cl(u,u.I)}function Cl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Un(C(u.ba,u),p)}function rs(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Bn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(sa(this.i,this.A),this.L!=2&&(Cr(),dt(17)),In(this),this.s=2,ii(this)):Cl(this,this.S-u)};function ii(u){u.j.G==0||u.J||io(u.j,u)}function In(u){rs(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,ri(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function la(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||Qt(y.h,u))){if(!u.K&&Qt(y.h,u)&&y.G==3){try{var w=y.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var V=w;if(V[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)ro(y),Gn(y);else break e;no(y),dt(18)}}else y.za=V[1],0<y.za-y.T&&37500>V[2]&&y.F&&y.v==0&&!y.C&&(y.C=Un(C(y.Za,y),6e3));if(1>=Pl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Dr(y,11)}else if((u.K||y.g==u)&&ro(y),!de(p))for(V=y.Da.g.parse(p),p=0;p<V.length;p++){let Fe=V[p];if(y.T=Fe[0],Fe=Fe[1],y.G==2)if(Fe[0]=="c"){y.K=Fe[1],y.ia=Fe[2];const Ct=Fe[3];Ct!=null&&(y.la=Ct,y.j.info("VER="+y.la));const gt=Fe[4];gt!=null&&(y.Aa=gt,y.j.info("SVER="+y.Aa));const An=Fe[5];An!=null&&typeof An=="number"&&0<An&&(w=1.5*An,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const gn=u.g;if(gn){const cs=gn.g?gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(cs){var z=w.h;z.g||cs.indexOf("spdy")==-1&&cs.indexOf("quic")==-1&&cs.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(ua(z,z.h),z.h=null))}if(w.D){const oo=gn.g?gn.g.getResponseHeader("X-HTTP-Session-Id"):null;oo&&(w.ya=oo,Ge(w.I,w.D,oo))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var Z=u;if(w.qa=Bl(w,w.J?w.ia:null,w.W),Z.K){Nl(w.h,Z);var We=Z,It=w.L;It&&(We.I=It),We.B&&(rs(We),Qe(We)),w.g=Z}else us(w);0<y.i.length&&cr(y)}else Fe[0]!="stop"&&Fe[0]!="close"||Dr(y,7);else y.G==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?Dr(y,7):Vt(y):Fe[0]!="noop"&&y.l&&y.l.ta(Fe),y.v=0)}}Cr(4)}catch{}}var kl=class{constructor(u,p){this.g=u,this.map=p}};function is(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Pl(u){return u.h?1:u.g?u.g.size:0}function Qt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function ua(u,p){u.g?u.g.add(p):u.h=p}function Nl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}is.prototype.cancel=function(){if(this.i=xl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function xl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return K(u.i)}function Ks(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,w=0;w<y;w++)p.push(u[w]);return p}p=[],y=0;for(w in u)p[y++]=u[w];return p}function Qs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const w in u)p[y++]=w;return p}}}function si(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=Qs(u),w=Ks(u),V=w.length,z=0;z<V;z++)p.call(void 0,w[z],y&&y[z],u)}var ss=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jc(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var w=u[y].indexOf("="),V=null;if(0<=w){var z=u[y].substring(0,w);V=u[y].substring(w+1)}else z=u[y];p(z,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function kr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof kr){this.h=u.h,os(this,u.j),this.o=u.o,this.g=u.g,oi(this,u.s),this.l=u.l;var p=u.i,y=new ar;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),ai(this,y),this.m=u.m}else u&&(p=String(u).match(ss))?(this.h=!1,os(this,p[1]||"",!0),this.o=Me(p[2]||""),this.g=Me(p[3]||"",!0),oi(this,p[4]),this.l=Me(p[5]||"",!0),ai(this,p[6]||"",!0),this.m=Me(p[7]||"")):(this.h=!1,this.i=new ar(null,this.h))}kr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(ui(p,Ys,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(ui(p,Ys,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(ui(y,y.charAt(0)=="/"?bl:Ol,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",ui(y,ca)),u.join("")};function pn(u){return new kr(u)}function os(u,p,y){u.j=y?Me(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function oi(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function ai(u,p,y){p instanceof ar?(u.i=p,lr(u.i,u.h)):(y||(p=ui(p,Vl)),u.i=new ar(p,u.h))}function Ge(u,p,y){u.i.set(p,y)}function li(u){return Ge(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Me(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ui(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,Dl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Dl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ys=/[#\/\?@]/g,Ol=/[#\?:]/g,bl=/[#\?]/g,Vl=/[#\?@]/g,ca=/#/g;function ar(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function bt(u){u.g||(u.g=new Map,u.h=0,u.i&&Jc(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=ar.prototype,r.add=function(u,p){bt(this),this.i=null,u=Sn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function $n(u,p){bt(u),p=Sn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function qn(u,p){return bt(u),p=Sn(u,p),u.g.has(p)}r.forEach=function(u,p){bt(this),this.g.forEach(function(y,w){y.forEach(function(V){u.call(p,V,w,this)},this)},this)},r.na=function(){bt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let w=0;w<p.length;w++){const V=u[w];for(let z=0;z<V.length;z++)y.push(p[w])}return y},r.V=function(u){bt(this);let p=[];if(typeof u=="string")qn(this,u)&&(p=p.concat(this.g.get(Sn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},r.set=function(u,p){return bt(this),this.i=null,u=Sn(this,u),qn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function ci(u,p,y){$n(u,p),0<y.length&&(u.i=null,u.g.set(Sn(u,p),K(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var w=p[y];const z=encodeURIComponent(String(w)),Z=this.V(w);for(w=0;w<Z.length;w++){var V=z;Z[w]!==""&&(V+="="+encodeURIComponent(String(Z[w]))),u.push(V)}}return this.i=u.join("&")};function Sn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function lr(u,p){p&&!u.j&&(bt(u),u.i=null,u.g.forEach(function(y,w){var V=w.toLowerCase();w!=V&&($n(this,w),ci(this,V,y))},u)),u.j=p}function Zc(u,p){const y=new es;if(f.Image){const w=new Image;w.onload=F(tn,y,"TestLoadImage: loaded",!0,p,w),w.onerror=F(tn,y,"TestLoadImage: error",!1,p,w),w.onabort=F(tn,y,"TestLoadImage: abort",!1,p,w),w.ontimeout=F(tn,y,"TestLoadImage: timeout",!1,p,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function Ll(u,p){const y=new es,w=new AbortController,V=setTimeout(()=>{w.abort(),tn(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(z=>{clearTimeout(V),z.ok?tn(y,"TestPingServer: ok",!0,p):tn(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(V),tn(y,"TestPingServer: error",!1,p)})}function tn(u,p,y,w,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),w(y)}catch{}}function eh(){this.g=new ta}function Ml(u,p,y){const w=y||"";try{si(u,function(V,z){let Z=V;_(V)&&(Z=Zo(V)),p.push(w+z+"="+encodeURIComponent(Z))})}catch(V){throw p.push(w+"type="+encodeURIComponent("_badmap")),V}}function Pr(u){this.l=u.Ub||null,this.j=u.eb||!1}q(Pr,Ji),Pr.prototype.g=function(){return new as(this.l,this.j)},Pr.prototype.i=(function(u){return function(){return u}})({});function as(u,p){ht.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}q(as,ht),r=as.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Wn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Wn(this)),this.g&&(this.readyState=3,Wn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Hn(this):Wn(this),this.readyState==3&&Fl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Hn(this))},r.Qa=function(u){this.g&&(this.response=u,Hn(this))},r.ga=function(){this.g&&Hn(this)};function Hn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Wn(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function Wn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(as.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Nr(u){let p="";return ve(u,function(y,w){p+=w,p+=":",p+=y,p+=`\r
`}),p}function hi(u,p,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=Nr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):Ge(u,p,y))}function nt(u){ht.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}q(nt,ht);var th=/^https?$/i,ha=["POST","PUT"];r=nt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zn.g(),this.v=this.o?js(this.o):js(zn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(z){ls(this,z);return}if(u=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var V in w)y.set(V,w[V]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const z of w.keys())y.set(z,w.get(z));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),V=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ha,p,void 0))||w||V||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,Z]of y)this.g.setRequestHeader(z,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Js(this),this.u=!0,this.g.send(u),this.u=!1}catch(z){ls(this,z)}};function ls(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Xs(u),mn(u)}function Xs(u){u.A||(u.A=!0,at(u,"complete"),at(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,at(this,"complete"),at(this,"abort"),mn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mn(this,!0)),nt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?da(this):this.bb())},r.bb=function(){da(this)};function da(u){if(u.h&&typeof h<"u"&&(!u.v[1]||nn(u)!=4||u.Z()!=2)){if(u.u&&nn(u)==4)G(u.Ea,0,u);else if(at(u,"readystatechange"),nn(u)==4){u.h=!1;try{const Z=u.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var w;if(w=Z===0){var V=String(u.D).match(ss)[1]||null;!V&&f.self&&f.self.location&&(V=f.self.location.protocol.slice(0,-1)),w=!th.test(V?V.toLowerCase():"")}y=w}if(y)at(u,"complete"),at(u,"success");else{u.m=6;try{var z=2<nn(u)?u.g.statusText:""}catch{z=""}u.l=z+" ["+u.Z()+"]",Xs(u)}}finally{mn(u)}}}}function mn(u,p){if(u.g){Js(u);const y=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||at(u,"ready");try{y.onreadystatechange=w}catch{}}}function Js(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function nn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),ea(p)}};function fa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Zs(u){const p={};u=(u.g&&2<=nn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(de(u[w]))continue;var y=D(u[w]);const V=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=p[V]||[];p[V]=z,z.push(y)}P(p,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ur(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function pa(u){this.Aa=0,this.i=[],this.j=new es,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ur("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ur("baseRetryDelayMs",5e3,u),this.cb=ur("retryDelaySeedMs",1e4,u),this.Wa=ur("forwardChannelMaxRetries",2,u),this.wa=ur("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new is(u&&u.concurrentRequestLimit),this.Da=new eh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=pa.prototype,r.la=8,r.G=1,r.connect=function(u,p,y,w){dt(0),this.W=u,this.H=p||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=Bl(this,null,this.W),cr(this)};function Vt(u){if(eo(u),u.G==3){var p=u.U++,y=pn(u.I);if(Ge(y,"SID",u.K),Ge(y,"RID",p),Ge(y,"TYPE","terminate"),xr(u,y),p=new Bn(u,u.j,p),p.L=2,p.v=li(pn(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=$l(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Qe(p)}zl(u)}function Gn(u){u.g&&(ma(u),u.g.cancel(),u.g=null)}function eo(u){Gn(u),u.u&&(f.clearTimeout(u.u),u.u=null),ro(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function cr(u){if(!fn(u.h)&&!u.s){u.s=!0;var p=u.Ga;je||ne(),ee||(je(),ee=!0),ge.add(p,u),u.B=0}}function nh(u,p){return Pl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Un(C(u.Ga,u,p),jl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const V=new Bn(this,this.j,u);let z=this.o;if(this.S&&(z?(z=I(z),N(z,this.S)):z=this.S),this.m!==null||this.O||(V.H=z,z=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=di(this,V,p),y=pn(this.I),Ge(y,"RID",u),Ge(y,"CVER",22),this.D&&Ge(y,"X-HTTP-Session-Id",this.D),xr(this,y),z&&(this.O?p="headers="+encodeURIComponent(String(Nr(z)))+"&"+p:this.m&&hi(y,this.m,z)),ua(this.h,V),this.Ua&&Ge(y,"TYPE","init"),this.P?(Ge(y,"$req",p),Ge(y,"SID","null"),V.T=!0,Gs(V,y,null)):Gs(V,y,p),this.G=2}}else this.G==3&&(u?to(this,u):this.i.length==0||fn(this.h)||to(this))};function to(u,p){var y;p?y=p.l:y=u.U++;const w=pn(u.I);Ge(w,"SID",u.K),Ge(w,"RID",y),Ge(w,"AID",u.T),xr(u,w),u.m&&u.o&&hi(w,u.m,u.o),y=new Bn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=di(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ua(u.h,y),Gs(y,w,p)}function xr(u,p){u.H&&ve(u.H,function(y,w){Ge(p,w,y)}),u.l&&si({},function(y,w){Ge(p,w,y)})}function di(u,p,y){y=Math.min(u.i.length,y);var w=u.l?C(u.l.Na,u.l,u):null;e:{var V=u.i;let z=-1;for(;;){const Z=["count="+y];z==-1?0<y?(z=V[0].g,Z.push("ofs="+z)):z=0:Z.push("ofs="+z);let We=!0;for(let It=0;It<y;It++){let Fe=V[It].g;const Ct=V[It].map;if(Fe-=z,0>Fe)z=Math.max(0,V[It].g-100),We=!1;else try{Ml(Ct,Z,"req"+Fe+"_")}catch{w&&w(Ct)}}if(We){w=Z.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,w}function us(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;je||ne(),ee||(je(),ee=!0),ge.add(p,u),u.v=0}}function no(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Un(C(u.Fa,u),jl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Ul(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Un(C(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),Gn(this),Ul(this))};function ma(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Ul(u){u.g=new Bn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=pn(u.qa);Ge(p,"RID","rpc"),Ge(p,"SID",u.K),Ge(p,"AID",u.T),Ge(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ge(p,"TO",u.ja),Ge(p,"TYPE","xmlhttp"),xr(u,p),u.m&&u.o&&hi(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=li(pn(p)),y.m=null,y.P=!0,aa(y,u)}r.Za=function(){this.C!=null&&(this.C=null,Gn(this),no(this),dt(19))};function ro(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function io(u,p){var y=null;if(u.g==p){ro(u),ma(u),u.g=null;var w=2}else if(Qt(u.h,p))y=p.D,Nl(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var V=u.B;w=Zi(),at(w,new $s(w,y)),cr(u)}else us(u);else if(V=p.s,V==3||V==0&&0<p.X||!(w==1&&nh(u,p)||w==2&&no(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),V){case 1:Dr(u,5);break;case 4:Dr(u,10);break;case 3:Dr(u,6);break;default:Dr(u,2)}}}function jl(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function Dr(u,p){if(u.j.info("Error code "+p),p==2){var y=C(u.fb,u),w=u.Xa;const V=!w;w=new kr(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||os(w,"https"),li(w),V?Zc(w.toString(),y):Ll(w.toString(),y)}else dt(2);u.G=0,u.l&&u.l.sa(p),zl(u),eo(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function zl(u){if(u.G=0,u.ka=[],u.l){const p=xl(u.h);(p.length!=0||u.i.length!=0)&&(B(u.ka,p),B(u.ka,u.i),u.h.i.length=0,K(u.i),u.i.length=0),u.l.ra()}}function Bl(u,p,y){var w=y instanceof kr?pn(y):new kr(y);if(w.g!="")p&&(w.g=p+"."+w.g),oi(w,w.s);else{var V=f.location;w=V.protocol,p=p?p+"."+V.hostname:V.hostname,V=+V.port;var z=new kr(null);w&&os(z,w),p&&(z.g=p),V&&oi(z,V),y&&(z.l=y),w=z}return y=u.D,p=u.ya,y&&p&&Ge(w,y,p),Ge(w,"VER",u.la),xr(u,w),w}function $l(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new nt(new Pr({eb:y})):new nt(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ga(){}r=ga.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function so(){}so.prototype.g=function(u,p){return new Yt(u,p)};function Yt(u,p){ht.call(this),this.g=new pa(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!de(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!de(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new hr(this)}q(Yt,ht),Yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Yt.prototype.close=function(){Vt(this.g)},Yt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Zo(u),u=y);p.i.push(new kl(p.Ya++,u)),p.G==3&&cr(p)},Yt.prototype.N=function(){this.g.l=null,delete this.j,Vt(this.g),delete this.g,Yt.aa.N.call(this)};function ql(u){sr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}q(ql,sr);function Hl(){Bs.call(this),this.status=1}q(Hl,Bs);function hr(u){this.g=u}q(hr,ga),hr.prototype.ua=function(){at(this.g,"a")},hr.prototype.ta=function(u){at(this.g,new ql(u))},hr.prototype.sa=function(u){at(this.g,new Hl)},hr.prototype.ra=function(){at(this.g,"b")},so.prototype.createWebChannel=so.prototype.g,Yt.prototype.send=Yt.prototype.o,Yt.prototype.open=Yt.prototype.m,Yt.prototype.close=Yt.prototype.close,Ov=function(){return new so},Dv=function(){return Zi()},xv=or,Xd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hs.NO_ERROR=0,Hs.TIMEOUT=8,Hs.HTTP_ERROR=6,Ju=Hs,Sl.COMPLETE="complete",Nv=Sl,zs.EventType=Tn,Tn.OPEN="a",Tn.CLOSE="b",Tn.ERROR="c",Tn.MESSAGE="d",ht.prototype.listen=ht.prototype.K,qa=zs,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,Pv=nt}).apply(typeof Bu<"u"?Bu:typeof self<"u"?self:typeof window<"u"?window:{});const py="@firebase/firestore",my="4.8.0";/**
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
 */class Wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
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
 */let Ko="11.10.0";/**
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
 */const xs=new wf("@firebase/firestore");function ko(){return xs.logLevel}function se(r,...e){if(xs.logLevel<=Ve.DEBUG){const t=e.map(Df);xs.debug(`Firestore (${Ko}): ${r}`,...t)}}function Kr(r,...e){if(xs.logLevel<=Ve.ERROR){const t=e.map(Df);xs.error(`Firestore (${Ko}): ${r}`,...t)}}function ji(r,...e){if(xs.logLevel<=Ve.WARN){const t=e.map(Df);xs.warn(`Firestore (${Ko}): ${r}`,...t)}}function Df(r){if(typeof r=="string")return r;try{/**
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
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function Te(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,bv(r,i,t)}function bv(r,e,t){let i=`FIRESTORE (${Ko}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Kr(i),new Error(i)}function He(r,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,r||bv(e,o,i)}function Ae(r,e){return r}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends ir{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Vv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Wt.UNAUTHENTICATED)))}shutdown(){}}class DR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class OR{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){He(this.o===void 0,42304);let i=this.i;const o=g=>this.i!==i?(i=this.i,t(g)):Promise.resolve();let l=new Rs;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Rs,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},f=g=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>f(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Rs)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(He(typeof i.accessToken=="string",31837,{l:i}),new Vv(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new Wt(e)}}class bR{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class VR{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new bR(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Wt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LR{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,En(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){He(this.o===void 0,3512);const i=l=>{l.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new gy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(He(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new gy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function MR(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */function Lv(){return new TextEncoder}/**
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
 */class Of{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=MR(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Ne(r,e){return r<e?-1:r>e?1:0}function Jd(r,e){let t=0;for(;t<r.length&&t<e.length;){const i=r.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Ne(i,o);{const l=Lv(),h=FR(l.encode(yy(r,t)),l.encode(yy(e,t)));return h!==0?h:Ne(i,o)}}t+=i>65535?2:1}return Ne(r.length,e.length)}function yy(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function FR(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Ne(r[t],e[t]);return Ne(r.length,e.length)}function jo(r,e,t){return r.length===e.length&&r.every(((i,o)=>t(i,e[o])))}/**
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
 */const _y="__name__";class gr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Te(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Te(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return gr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof gr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=gr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ne(e.length,t.length)}static compareSegments(e,t){const i=gr.isNumericId(e),o=gr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?gr.extractNumericId(e).compare(gr.extractNumericId(t)):Jd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Li.fromString(e.substring(4,e.length-2))}}class Xe extends gr{construct(e,t,i){return new Xe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new oe(H.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Xe(t)}static emptyPath(){return new Xe([])}}const UR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ut extends gr{construct(e,t,i){return new Ut(e,t,i)}static isValidIdentifier(e){return UR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ut.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_y}static keyField(){return new Ut([_y])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new oe(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new oe(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new oe(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new oe(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ut(t)}static emptyPath(){return new Ut([])}}/**
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
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(Xe.fromString(e))}static fromName(e){return new _e(Xe.fromString(e).popFirst(5))}static empty(){return new _e(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new Xe(e.slice()))}}/**
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
 */function Mv(r,e,t){if(!t)throw new oe(H.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function jR(r,e,t,i){if(e===!0&&i===!0)throw new oe(H.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function vy(r){if(!_e.isDocumentKey(r))throw new oe(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ey(r){if(_e.isDocumentKey(r))throw new oe(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Fv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Vc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Te(12329,{type:typeof r})}function Lo(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new oe(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Vc(r);throw new oe(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Et(r,e){const t={typeString:r};return e&&(t.value=e),t}function vl(r,e){if(!Fv(r))throw new oe(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const h=r[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new oe(H.INVALID_ARGUMENT,t);return!0}/**
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
 */const wy=-62135596800,Ty=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Ty);return new tt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<wy)throw new oe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ty}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:tt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vl(e,tt._jsonSchema))return new tt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-wy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}tt._jsonSchemaVersion="firestore/timestamp/1.0",tt._jsonSchema={type:Et("string",tt._jsonSchemaVersion),seconds:Et("number"),nanoseconds:Et("number")};/**
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
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new tt(0,0))}static max(){return new Se(new tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const sl=-1;function zR(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,o=Se.fromTimestamp(i===1e9?new tt(t+1,0):new tt(t,i));return new zi(o,_e.empty(),e)}function BR(r){return new zi(r.readTime,r.key,sl)}class zi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new zi(Se.min(),_e.empty(),sl)}static max(){return new zi(Se.max(),_e.empty(),sl)}}function $R(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(r.documentKey,e.documentKey),t!==0?t:Ne(r.largestBatchId,e.largestBatchId))}/**
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
 */const qR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Qo(r){if(r.code!==H.FAILED_PRECONDITION||r.message!==qR)throw r;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,i)=>{t(e)}))}static reject(e){return new W(((t,i)=>{i(e)}))}static waitFor(e){return new W(((t,i)=>{let o=0,l=0,h=!1;e.forEach((f=>{++o,f.next((()=>{++l,h&&l===o&&t()}),(g=>i(g)))})),h=!0,l===o&&t()}))}static or(e){let t=W.resolve(!1);for(const i of e)t=t.next((o=>o?W.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new W(((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((E=>{h[_]=E,++f,f===l&&i(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new W(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function WR(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Yo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Lc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Lc.ue=-1;/**
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
 */const bf=-1;function Mc(r){return r==null}function fc(r){return r===0&&1/r==-1/0}function GR(r){return typeof r=="number"&&Number.isInteger(r)&&!fc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Uv="";function KR(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Iy(e)),e=QR(r.get(t),e);return Iy(e)}function QR(r,e){let t=e;const i=r.length;for(let o=0;o<i;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case Uv:t+="";break;default:t+=l}}return t}function Iy(r){return r+Uv+""}/**
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
 */function Sy(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function bs(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function jv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ot{constructor(e,t){this.comparator=e,this.root=t||Ft.EMPTY}insert(e,t){return new ot(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new ot(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $u(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $u(this.root,e,this.comparator,!1)}getReverseIterator(){return new $u(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $u(this.root,e,this.comparator,!0)}}class $u{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ft{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Ft.RED,this.left=o??Ft.EMPTY,this.right=l??Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Ft(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ft.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1;Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Ft(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Rt{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ay(this.data.getIterator())}getIteratorFrom(e){return new Ay(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Rt(this.comparator);return t.data=e,t}}class Ay{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class tr{constructor(e){this.fields=e,e.sort(Ut.comparator)}static empty(){return new tr([])}unionWith(e){let t=new Rt(Ut.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new tr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return jo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class zv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class jt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new zv("Invalid base64 string: "+l):l}})(e);return new jt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new jt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const YR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bi(r){if(He(!!r,39018),typeof r=="string"){let e=0;const t=YR.exec(r);if(He(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:pt(r.seconds),nanos:pt(r.nanos)}}function pt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function $i(r){return typeof r=="string"?jt.fromBase64String(r):jt.fromUint8Array(r)}/**
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
 */const Bv="server_timestamp",$v="__type__",qv="__previous_value__",Hv="__local_write_time__";function Vf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[$v])===null||t===void 0?void 0:t.stringValue)===Bv}function Fc(r){const e=r.mapValue.fields[qv];return Vf(e)?Fc(e):e}function ol(r){const e=Bi(r.mapValue.fields[Hv].timestampValue);return new tt(e.seconds,e.nanos)}/**
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
 */class XR{constructor(e,t,i,o,l,h,f,g,_,E){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=E}}const pc="(default)";class al{constructor(e,t){this.projectId=e,this.database=t||pc}static empty(){return new al("","")}get isDefaultDatabase(){return this.database===pc}isEqual(e){return e instanceof al&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Wv="__type__",JR="__max__",qu={mapValue:{}},Gv="__vector__",mc="value";function qi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Vf(r)?4:e1(r)?9007199254740991:ZR(r)?10:11:Te(28295,{value:r})}function Sr(r,e){if(r===e)return!0;const t=qi(r);if(t!==qi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ol(r).isEqual(ol(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Bi(o.timestampValue),f=Bi(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return $i(o.bytesValue).isEqual($i(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return pt(o.geoPointValue.latitude)===pt(l.geoPointValue.latitude)&&pt(o.geoPointValue.longitude)===pt(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return pt(o.integerValue)===pt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=pt(o.doubleValue),f=pt(l.doubleValue);return h===f?fc(h)===fc(f):isNaN(h)&&isNaN(f)}return!1})(r,e);case 9:return jo(r.arrayValue.values||[],e.arrayValue.values||[],Sr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Sy(h)!==Sy(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!Sr(h[g],f[g])))return!1;return!0})(r,e);default:return Te(52216,{left:r})}}function ll(r,e){return(r.values||[]).find((t=>Sr(t,e)))!==void 0}function zo(r,e){if(r===e)return 0;const t=qi(r),i=qi(e);if(t!==i)return Ne(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const f=pt(l.integerValue||l.doubleValue),g=pt(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1})(r,e);case 3:return Ry(r.timestampValue,e.timestampValue);case 4:return Ry(ol(r),ol(e));case 5:return Jd(r.stringValue,e.stringValue);case 6:return(function(l,h){const f=$i(l),g=$i(h);return f.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const f=l.split("/"),g=h.split("/");for(let _=0;_<f.length&&_<g.length;_++){const E=Ne(f[_],g[_]);if(E!==0)return E}return Ne(f.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const f=Ne(pt(l.latitude),pt(h.latitude));return f!==0?f:Ne(pt(l.longitude),pt(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Cy(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var f,g,_,E;const T=l.fields||{},C=h.fields||{},F=(f=T[mc])===null||f===void 0?void 0:f.arrayValue,q=(g=C[mc])===null||g===void 0?void 0:g.arrayValue,K=Ne(((_=F==null?void 0:F.values)===null||_===void 0?void 0:_.length)||0,((E=q==null?void 0:q.values)===null||E===void 0?void 0:E.length)||0);return K!==0?K:Cy(F,q)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===qu.mapValue&&h===qu.mapValue)return 0;if(l===qu.mapValue)return 1;if(h===qu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),_=h.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let T=0;T<g.length&&T<E.length;++T){const C=Jd(g[T],E[T]);if(C!==0)return C;const F=zo(f[g[T]],_[E[T]]);if(F!==0)return F}return Ne(g.length,E.length)})(r.mapValue,e.mapValue);default:throw Te(23264,{le:t})}}function Ry(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ne(r,e);const t=Bi(r),i=Bi(e),o=Ne(t.seconds,i.seconds);return o!==0?o:Ne(t.nanos,i.nanos)}function Cy(r,e){const t=r.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=zo(t[o],i[o]);if(l)return l}return Ne(t.length,i.length)}function Bo(r){return Zd(r)}function Zd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=Bi(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return $i(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return _e.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Zd(l);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Zd(t.fields[h])}`;return o+"}"})(r.mapValue):Te(61005,{value:r})}function Zu(r){switch(qi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fc(r);return e?16+Zu(e):16;case 5:return 2*r.stringValue.length;case 6:return $i(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+Zu(l)),0)})(r.arrayValue);case 10:case 11:return(function(i){let o=0;return bs(i.fields,((l,h)=>{o+=l.length+Zu(h)})),o})(r.mapValue);default:throw Te(13486,{value:r})}}function ky(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function ef(r){return!!r&&"integerValue"in r}function Lf(r){return!!r&&"arrayValue"in r}function Py(r){return!!r&&"nullValue"in r}function Ny(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ec(r){return!!r&&"mapValue"in r}function ZR(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Wv])===null||t===void 0?void 0:t.stringValue)===Gv}function Xa(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return bs(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Xa(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xa(r.arrayValue.values[t]);return e}return Object.assign({},r)}function e1(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===JR}/**
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
 */class Dn{constructor(e){this.value=e}static empty(){return new Dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!ec(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xa(t)}setAll(e){let t=Ut.emptyPath(),i={},o=[];e.forEach(((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=Xa(h):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());ec(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Sr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];ec(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){bs(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new Dn(Xa(this.value))}}function Kv(r){const e=[];return bs(r.fields,((t,i)=>{const o=new Ut([t]);if(ec(i)){const l=Kv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new tr(e)}/**
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
 */class Gt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Gt(e,0,Se.min(),Se.min(),Se.min(),Dn.empty(),0)}static newFoundDocument(e,t,i,o){return new Gt(e,1,t,Se.min(),i,o,0)}static newNoDocument(e,t){return new Gt(e,2,t,Se.min(),Se.min(),Dn.empty(),0)}static newUnknownDocument(e,t){return new Gt(e,3,t,Se.min(),Se.min(),Dn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gc{constructor(e,t){this.position=e,this.inclusive=t}}function xy(r,e,t){let i=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?i=_e.comparator(_e.fromName(h.referenceValue),t.key):i=zo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Dy(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Sr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class ul{constructor(e,t="asc"){this.field=e,this.dir=t}}function t1(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Qv{}class vt extends Qv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new r1(e,t,i):t==="array-contains"?new o1(e,i):t==="in"?new a1(e,i):t==="not-in"?new l1(e,i):t==="array-contains-any"?new u1(e,i):new vt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new i1(e,i):new s1(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(zo(t,this.value)):t!==null&&qi(this.value)===qi(t)&&this.matchesComparison(zo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rr extends Qv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new rr(e,t)}matches(e){return Yv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Yv(r){return r.op==="and"}function Xv(r){return n1(r)&&Yv(r)}function n1(r){for(const e of r.filters)if(e instanceof rr)return!1;return!0}function tf(r){if(r instanceof vt)return r.field.canonicalString()+r.op.toString()+Bo(r.value);if(Xv(r))return r.filters.map((e=>tf(e))).join(",");{const e=r.filters.map((t=>tf(t))).join(",");return`${r.op}(${e})`}}function Jv(r,e){return r instanceof vt?(function(i,o){return o instanceof vt&&i.op===o.op&&i.field.isEqual(o.field)&&Sr(i.value,o.value)})(r,e):r instanceof rr?(function(i,o){return o instanceof rr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,h,f)=>l&&Jv(h,o.filters[f])),!0):!1})(r,e):void Te(19439)}function Zv(r){return r instanceof vt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Bo(t.value)}`})(r):r instanceof rr?(function(t){return t.op.toString()+" {"+t.getFilters().map(Zv).join(" ,")+"}"})(r):"Filter"}class r1 extends vt{constructor(e,t,i){super(e,t,i),this.key=_e.fromName(i.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class i1 extends vt{constructor(e,t){super(e,"in",t),this.keys=eE("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class s1 extends vt{constructor(e,t){super(e,"not-in",t),this.keys=eE("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function eE(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>_e.fromName(i.referenceValue)))}class o1 extends vt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Lf(t)&&ll(t.arrayValue,this.value)}}class a1 extends vt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ll(this.value.arrayValue,t)}}class l1 extends vt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ll(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ll(this.value.arrayValue,t)}}class u1 extends vt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Lf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>ll(this.value.arrayValue,i)))}}/**
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
 */class c1{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function Oy(r,e=null,t=[],i=[],o=null,l=null,h=null){return new c1(r,e,t,i,o,l,h)}function Mf(r){const e=Ae(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>tf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Mc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Bo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Bo(i))).join(",")),e.Pe=t}return e.Pe}function Ff(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!t1(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Jv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Dy(r.startAt,e.startAt)&&Dy(r.endAt,e.endAt)}function nf(r){return _e.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Xo{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function h1(r,e,t,i,o,l,h,f){return new Xo(r,e,t,i,o,l,h,f)}function Uf(r){return new Xo(r)}function by(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function tE(r){return r.collectionGroup!==null}function Ja(r){const e=Ae(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new Rt(Ut.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(f=f.add(_.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new ul(l,i))})),t.has(Ut.keyField().canonicalString())||e.Te.push(new ul(Ut.keyField(),i))}return e.Te}function Er(r){const e=Ae(r);return e.Ie||(e.Ie=d1(e,Ja(r))),e.Ie}function d1(r,e){if(r.limitType==="F")return Oy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new ul(o.field,l)}));const t=r.endAt?new gc(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new gc(r.startAt.position,r.startAt.inclusive):null;return Oy(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function rf(r,e){const t=r.filters.concat([e]);return new Xo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function sf(r,e,t){return new Xo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Uc(r,e){return Ff(Er(r),Er(e))&&r.limitType===e.limitType}function nE(r){return`${Mf(Er(r))}|lt:${r.limitType}`}function Po(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>Zv(o))).join(", ")}]`),Mc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Bo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Bo(o))).join(",")),`Target(${i})`})(Er(r))}; limitType=${r.limitType})`}function jc(r,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):_e.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(r,e)&&(function(i,o){for(const l of Ja(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(i,o){return!(i.startAt&&!(function(h,f,g){const _=xy(h,f,g);return h.inclusive?_<=0:_<0})(i.startAt,Ja(i),o)||i.endAt&&!(function(h,f,g){const _=xy(h,f,g);return h.inclusive?_>=0:_>0})(i.endAt,Ja(i),o))})(r,e)}function f1(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function rE(r){return(e,t)=>{let i=!1;for(const o of Ja(r)){const l=p1(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function p1(r,e,t){const i=r.field.isKeyField()?_e.comparator(e.key,t.key):(function(l,h,f){const g=h.data.field(l),_=f.data.field(l);return g!==null&&_!==null?zo(g,_):Te(42886)})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return Te(19790,{direction:r.dir})}}/**
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
 */class Vs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){bs(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return jv(this.inner)}size(){return this.innerSize}}/**
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
 */const m1=new ot(_e.comparator);function Qr(){return m1}const iE=new ot(_e.comparator);function Ha(...r){let e=iE;for(const t of r)e=e.insert(t.key,t);return e}function sE(r){let e=iE;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Ss(){return Za()}function oE(){return Za()}function Za(){return new Vs((r=>r.toString()),((r,e)=>r.isEqual(e)))}const g1=new ot(_e.comparator),y1=new Rt(_e.comparator);function Le(...r){let e=y1;for(const t of r)e=e.add(t);return e}const _1=new Rt(Ne);function v1(){return _1}/**
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
 */function jf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fc(e)?"-0":e}}function aE(r){return{integerValue:""+r}}function E1(r,e){return GR(e)?aE(e):jf(r,e)}/**
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
 */class zc{constructor(){this._=void 0}}function w1(r,e,t){return r instanceof cl?(function(o,l){const h={fields:{[$v]:{stringValue:Bv},[Hv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Vf(l)&&(l=Fc(l)),l&&(h.fields[qv]=l),{mapValue:h}})(t,e):r instanceof hl?uE(r,e):r instanceof dl?cE(r,e):(function(o,l){const h=lE(o,l),f=Vy(h)+Vy(o.Ee);return ef(h)&&ef(o.Ee)?aE(f):jf(o.serializer,f)})(r,e)}function T1(r,e,t){return r instanceof hl?uE(r,e):r instanceof dl?cE(r,e):t}function lE(r,e){return r instanceof yc?(function(i){return ef(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class cl extends zc{}class hl extends zc{constructor(e){super(),this.elements=e}}function uE(r,e){const t=hE(e);for(const i of r.elements)t.some((o=>Sr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class dl extends zc{constructor(e){super(),this.elements=e}}function cE(r,e){let t=hE(e);for(const i of r.elements)t=t.filter((o=>!Sr(o,i)));return{arrayValue:{values:t}}}class yc extends zc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Vy(r){return pt(r.integerValue||r.doubleValue)}function hE(r){return Lf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class I1{constructor(e,t){this.field=e,this.transform=t}}function S1(r,e){return r.field.isEqual(e.field)&&(function(i,o){return i instanceof hl&&o instanceof hl||i instanceof dl&&o instanceof dl?jo(i.elements,o.elements,Sr):i instanceof yc&&o instanceof yc?Sr(i.Ee,o.Ee):i instanceof cl&&o instanceof cl})(r.transform,e.transform)}class A1{constructor(e,t){this.version=e,this.transformResults=t}}class qr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qr}static exists(e){return new qr(void 0,e)}static updateTime(e){return new qr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Bc{}function dE(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new pE(r.key,qr.none()):new El(r.key,r.data,qr.none());{const t=r.data,i=Dn.empty();let o=new Rt(Ut.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Ls(r.key,i,new tr(o.toArray()),qr.none())}}function R1(r,e,t){r instanceof El?(function(o,l,h){const f=o.value.clone(),g=My(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()})(r,e,t):r instanceof Ls?(function(o,l,h){if(!tc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=My(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(fE(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function el(r,e,t,i){return r instanceof El?(function(l,h,f,g){if(!tc(l.precondition,h))return f;const _=l.value.clone(),E=Fy(l.fieldTransforms,g,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,i):r instanceof Ls?(function(l,h,f,g){if(!tc(l.precondition,h))return f;const _=Fy(l.fieldTransforms,g,h),E=h.data;return E.setAll(fE(l)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(r,e,t,i):(function(l,h,f){return tc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f})(r,e,t)}function C1(r,e){let t=null;for(const i of r.fieldTransforms){const o=e.data.field(i.field),l=lE(i.transform,o||null);l!=null&&(t===null&&(t=Dn.empty()),t.set(i.field,l))}return t||null}function Ly(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&jo(i,o,((l,h)=>S1(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class El extends Bc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ls extends Bc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function fE(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function My(r,e,t){const i=new Map;He(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,T1(h,f,t[o]))}return i}function Fy(r,e,t){const i=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);i.set(o.field,w1(l,h,e))}return i}class pE extends Bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class k1 extends Bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class P1{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&R1(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=el(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=el(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=oE();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=dE(h,f);g!==null&&i.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Se.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Le())}isEqual(e){return this.batchId===e.batchId&&jo(this.mutations,e.mutations,((t,i)=>Ly(t,i)))&&jo(this.baseMutations,e.baseMutations,((t,i)=>Ly(t,i)))}}class zf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){He(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return g1})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new zf(e,t,i,o)}}/**
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
 */class N1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class x1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var _t,Ue;function D1(r){switch(r){case H.OK:return Te(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return Te(15467,{code:r})}}function mE(r){if(r===void 0)return Kr("GRPC error has no .code"),H.UNKNOWN;switch(r){case _t.OK:return H.OK;case _t.CANCELLED:return H.CANCELLED;case _t.UNKNOWN:return H.UNKNOWN;case _t.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case _t.INTERNAL:return H.INTERNAL;case _t.UNAVAILABLE:return H.UNAVAILABLE;case _t.UNAUTHENTICATED:return H.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case _t.NOT_FOUND:return H.NOT_FOUND;case _t.ALREADY_EXISTS:return H.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return H.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case _t.ABORTED:return H.ABORTED;case _t.OUT_OF_RANGE:return H.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return H.UNIMPLEMENTED;case _t.DATA_LOSS:return H.DATA_LOSS;default:return Te(39323,{code:r})}}(Ue=_t||(_t={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const O1=new Li([4294967295,4294967295],0);function Uy(r){const e=Lv().encode(r),t=new kv;return t.update(e),new Uint8Array(t.digest())}function jy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Li([t,i],0),new Li([o,l],0)]}class Bf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Wa(`Invalid padding: ${t}`);if(i<0)throw new Wa(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Wa(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Wa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Li.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Li.fromNumber(i)));return o.compare(O1)===1&&(o=new Li([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Uy(e),[i,o]=jy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Bf(l,o,t);return i.forEach((f=>h.insert(f))),h}insert(e){if(this.fe===0)return;const t=Uy(e),[i,o]=jy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Wa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $c{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,wl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new $c(Se.min(),o,new ot(Ne),Qr(),Le())}}class wl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new wl(i,t,Le(),Le(),Le())}}/**
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
 */class nc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class gE{constructor(e,t){this.targetId=e,this.De=t}}class yE{constructor(e,t,i=jt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class zy{constructor(){this.ve=0,this.Ce=By(),this.Fe=jt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Le(),t=Le(),i=Le();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Te(38017,{changeType:l})}})),new wl(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=By()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,He(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class b1{constructor(e){this.We=e,this.Ge=new Map,this.ze=Qr(),this.je=Hu(),this.Je=Hu(),this.He=new ot(Ne)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:Te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(nf(l))if(i===0){const h=new _e(l.path);this.Xe(t,h,Gt.newNoDocument(h,Se.min()))}else He(i===1,20013,{expectedCount:i});else{const h=this.ot(t);if(h!==i){const f=this._t(e),g=f?this.ut(f,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=$i(i).toUint8Array()}catch(g){if(g instanceof zv)return ji("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new Bf(h,o,l)}catch(g){return ji(g instanceof Wa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.fe===0?null:f}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const f=this.st(h);if(f){if(l.current&&nf(f.target)){const g=new _e(f.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,Gt.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let i=Le();this.Je.forEach(((l,h)=>{let f=!0;h.forEachWhile((g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new $c(e,t,this.He,this.ze,i);return this.ze=Qr(),this.je=Hu(),this.Je=Hu(),this.He=new ot(Ne),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new zy,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Rt(Ne),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Rt(Ne),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new zy),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Hu(){return new ot(_e.comparator)}function By(){return new ot(_e.comparator)}const V1={asc:"ASCENDING",desc:"DESCENDING"},L1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},M1={and:"AND",or:"OR"};class F1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function of(r,e){return r.useProto3Json||Mc(e)?e:{value:e}}function _c(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _E(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function U1(r,e){return _c(r,e.toTimestamp())}function wr(r){return He(!!r,49232),Se.fromTimestamp((function(t){const i=Bi(t);return new tt(i.seconds,i.nanos)})(r))}function $f(r,e){return af(r,e).canonicalString()}function af(r,e){const t=(function(o){return new Xe(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function vE(r){const e=Xe.fromString(r);return He(SE(e),10190,{key:e.toString()}),e}function lf(r,e){return $f(r.databaseId,e.path)}function Vd(r,e){const t=vE(e);if(t.get(1)!==r.databaseId.projectId)throw new oe(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new oe(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new _e(wE(t))}function EE(r,e){return $f(r.databaseId,e)}function j1(r){const e=vE(r);return e.length===4?Xe.emptyPath():wE(e)}function uf(r){return new Xe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function wE(r){return He(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function $y(r,e,t){return{name:lf(r,e),fields:t.value.mapValue.fields}}function z1(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:Te(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,E){return _.useProto3Json?(He(E===void 0||typeof E=="string",58123),jt.fromBase64String(E||"")):(He(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),jt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&(function(_){const E=_.code===void 0?H.UNKNOWN:mE(_.code);return new oe(E,_.message||"")})(h);t=new yE(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Vd(r,i.document.name),l=wr(i.document.updateTime),h=i.document.createTime?wr(i.document.createTime):Se.min(),f=new Dn({mapValue:{fields:i.document.fields}}),g=Gt.newFoundDocument(o,l,h,f),_=i.targetIds||[],E=i.removedTargetIds||[];t=new nc(_,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Vd(r,i.document),l=i.readTime?wr(i.readTime):Se.min(),h=Gt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new nc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Vd(r,i.document),l=i.removedTargetIds||[];t=new nc([],l,o,null)}else{if(!("filter"in e))return Te(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new x1(o,l),f=i.targetId;t=new gE(f,h)}}return t}function B1(r,e){let t;if(e instanceof El)t={update:$y(r,e.key,e.value)};else if(e instanceof pE)t={delete:lf(r,e.key)};else if(e instanceof Ls)t={update:$y(r,e.key,e.data),updateMask:X1(e.fieldMask)};else{if(!(e instanceof k1))return Te(16599,{Rt:e.type});t={verify:lf(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,h){const f=h.transform;if(f instanceof cl)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof hl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof dl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof yc)return{fieldPath:h.field.canonicalString(),increment:f.Ee};throw Te(20930,{transform:h.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:U1(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te(27497)})(r,e.precondition)),t}function $1(r,e){return r&&r.length>0?(He(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?wr(o.updateTime):wr(l);return h.isEqual(Se.min())&&(h=wr(l)),new A1(h,o.transformResults||[])})(t,e)))):[]}function q1(r,e){return{documents:[EE(r,e.path)]}}function H1(r,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=EE(r,o);const l=(function(_){if(_.length!==0)return IE(rr.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((E=>(function(C){return{field:No(C.field),direction:K1(C.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=of(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function W1(r){let e=j1(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){He(i===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(T){const C=TE(T);return C instanceof rr&&Xv(C)?C.getFilters():[C]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((C=>(function(q){return new ul(xo(q.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(q.direction))})(C)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let C;return C=typeof T=="object"?T.value:T,Mc(C)?null:C})(t.limit));let g=null;t.startAt&&(g=(function(T){const C=!!T.before,F=T.values||[];return new gc(F,C)})(t.startAt));let _=null;return t.endAt&&(_=(function(T){const C=!T.before,F=T.values||[];return new gc(F,C)})(t.endAt)),h1(e,o,h,l,f,"F",g,_)}function G1(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function TE(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=xo(t.unaryFilter.field);return vt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=xo(t.unaryFilter.field);return vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=xo(t.unaryFilter.field);return vt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=xo(t.unaryFilter.field);return vt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}})(r):r.fieldFilter!==void 0?(function(t){return vt.create(xo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return rr.create(t.compositeFilter.filters.map((i=>TE(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te(1026)}})(t.compositeFilter.op))})(r):Te(30097,{filter:r})}function K1(r){return V1[r]}function Q1(r){return L1[r]}function Y1(r){return M1[r]}function No(r){return{fieldPath:r.canonicalString()}}function xo(r){return Ut.fromServerFormat(r.fieldPath)}function IE(r){return r instanceof vt?(function(t){if(t.op==="=="){if(Ny(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NAN"}};if(Py(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ny(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NOT_NAN"}};if(Py(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:No(t.field),op:Q1(t.op),value:t.value}}})(r):r instanceof rr?(function(t){const i=t.getFilters().map((o=>IE(o)));return i.length===1?i[0]:{compositeFilter:{op:Y1(t.op),filters:i}}})(r):Te(54877,{filter:r})}function X1(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function SE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Di{constructor(e,t,i,o,l=Se.min(),h=Se.min(),f=jt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new Di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class J1{constructor(e){this.gt=e}}function Z1(r){const e=W1({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?sf(e,e.limit,"L"):e}/**
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
 */class eC{constructor(){this.Dn=new tC}addToCollectionParentIndex(e,t){return this.Dn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(zi.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(zi.min())}updateCollectionGroup(e,t,i){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class tC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Rt(Xe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Rt(Xe.comparator)).toArray()}}/**
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
 */const qy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},AE=41943040;class cn{static withCacheSize(e){return new cn(e,cn.DEFAULT_COLLECTION_PERCENTILE,cn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */cn.DEFAULT_COLLECTION_PERCENTILE=10,cn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,cn.DEFAULT=new cn(AE,cn.DEFAULT_COLLECTION_PERCENTILE,cn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),cn.DISABLED=new cn(-1,0,0);/**
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
 */class $o{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new $o(0)}static ur(){return new $o(-1)}}/**
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
 */const Hy="LruGarbageCollector",nC=1048576;function Wy([r,e],[t,i]){const o=Ne(r,t);return o===0?Ne(e,i):o}class rC{constructor(e){this.Tr=e,this.buffer=new Rt(Wy),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Wy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iC{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){se(Hy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Yo(t)?se(Hy,"Ignoring IndexedDB error during garbage collection: ",t):await Qo(t)}await this.Rr(3e5)}))}}class sC{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return W.resolve(Lc.ue);const i=new rC(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(qy)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,h,f,g,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(i=T,f=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,g=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(_=Date.now(),ko()<=Ve.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function oC(r,e){return new sC(r,e)}/**
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
 */class aC{constructor(){this.changes=new Vs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Gt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?W.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class lC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class uC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&el(i.mutation,o,tr.empty(),tt.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Le()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Le()){const o=Ss();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let h=Ha();return l.forEach(((f,g)=>{h=h.insert(f,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const i=Ss();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Le())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,f)=>{t.set(h,f)}))}))}computeViews(e,t,i,o){let l=Qr();const h=Za(),f=(function(){return Za()})();return t.forEach(((g,_)=>{const E=i.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof Ls)?l=l.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),el(E.mutation,_,E.mutation.getFieldMask(),tt.now())):h.set(_.key,tr.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>{var T;return f.set(_,new lC(E,(T=h.get(_))!==null&&T!==void 0?T:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=Za();let o=new ot(((h,f)=>h-f)),l=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const f of h)f.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let E=i.get(g)||tr.empty();E=f.applyToLocalView(_,E),i.set(g,E);const T=(o.get(f.batchId)||Le()).add(g);o=o.insert(f.batchId,T)}))})).next((()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,E=g.value,T=oE();E.forEach((C=>{if(!l.has(C)){const F=dE(t.get(C),i.get(C));F!==null&&T.set(C,F),l=l.add(C)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return W.waitFor(h)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(h){return _e.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):W.resolve(Ss());let f=sl,g=l;return h.next((_=>W.forEach(_,((E,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(E)?W.resolve():this.remoteDocumentCache.getEntry(e,E).next((C=>{g=g.insert(E,C)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,Le()))).next((E=>({batchId:f,changes:sE(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next((i=>{let o=Ha();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Ha();return this.indexManager.getCollectionParents(e,l).next((f=>W.forEach(f,(g=>{const _=(function(T,C){return new Xo(C,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,i,o).next((E=>{E.forEach(((T,C)=>{h=h.insert(T,C)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((h=>{l.forEach(((g,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,Gt.newInvalidDocument(E)))}));let f=Ha();return h.forEach(((g,_)=>{const E=l.get(g);E!==void 0&&el(E.mutation,_,tr.empty(),tt.now()),jc(t,_)&&(f=f.insert(g,_))})),f}))}}/**
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
 */class cC{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return W.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:wr(o.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:Z1(o.bundledQuery),readTime:wr(o.readTime)}})(t)),W.resolve()}}/**
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
 */class hC{constructor(){this.overlays=new ot(_e.comparator),this.kr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ss();return W.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.wt(e,t,l)})),W.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(i)),W.resolve()}getOverlaysForCollection(e,t,i){const o=Ss(),l=t.length+1,h=new _e(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>i&&o.set(g.getKey(),g)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new ot(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>i){let E=l.get(_.largestBatchId);E===null&&(E=Ss(),l=l.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const f=Ss(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,E)=>f.set(_,E))),!(f.size()>=o)););return W.resolve(f)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new N1(t,i));let l=this.kr.get(t);l===void 0&&(l=Le(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class dC{constructor(){this.sessionToken=jt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
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
 */class qf{constructor(){this.qr=new Rt(xt.Qr),this.$r=new Rt(xt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new xt(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new xt(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new _e(new Xe([])),i=new xt(t,e),o=new xt(t,e+1),l=[];return this.$r.forEachInRange([i,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new _e(new Xe([])),i=new xt(t,e),o=new xt(t,e+1);let l=Le();return this.$r.forEachInRange([i,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new xt(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class xt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return _e.comparator(e.key,t.key)||Ne(e.Hr,t.Hr)}static Ur(e,t){return Ne(e.Hr,t.Hr)||_e.comparator(e.key,t.key)}}/**
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
 */class fC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Rt(xt.Qr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new P1(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new xt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return W.resolve(h)}lookupMutationBatch(e,t){return W.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return W.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?bf:this.er-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new xt(t,0),o=new xt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],(h=>{const f=this.Zr(h.Hr);l.push(f)})),W.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Rt(Ne);return t.forEach((o=>{const l=new xt(o,0),h=new xt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(f=>{i=i.add(f.Hr)}))})),W.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;_e.isDocumentKey(l)||(l=l.child(""));const h=new xt(new _e(l),0);let f=new Rt(Ne);return this.Yr.forEachWhile((g=>{const _=g.key.path;return!!i.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.Hr)),!0)}),h),W.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){He(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return W.forEach(t.mutations,(o=>{const l=new xt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new xt(t,0),o=this.Yr.firstAfterOrEqual(i);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class pC{constructor(e){this.ni=e,this.docs=(function(){return new ot(_e.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return W.resolve(i?i.document.mutableCopy():Gt.newInvalidDocument(t))}getEntries(e,t){let i=Qr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Gt.newInvalidDocument(o))})),W.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Qr();const h=t.path,f=new _e(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||$R(BR(E),i)<=0||(o.has(E.key)||jc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return W.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Te(9500)}ri(e,t){return W.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new mC(this)}getSize(e){return W.resolve(this.size)}}class mC extends aC{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),W.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class gC{constructor(e){this.persistence=e,this.ii=new Vs((t=>Mf(t)),Ff),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.si=0,this.oi=new qf,this.targetCount=0,this._i=$o.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),W.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new $o(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.hr(t),W.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach(((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),W.waitFor(l).next((()=>o))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return W.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),W.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),W.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return W.resolve(i)}containsKey(e,t){return W.resolve(this.oi.containsKey(t))}}/**
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
 */class RE{constructor(e,t){this.ai={},this.overlays={},this.ui=new Lc(0),this.ci=!1,this.ci=!0,this.li=new dC,this.referenceDelegate=e(this),this.hi=new gC(this),this.indexManager=new eC,this.remoteDocumentCache=(function(o){return new pC(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new J1(t),this.Ti=new cC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new fC(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){se("MemoryPersistence","Starting transaction:",e);const o=new yC(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return W.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class yC extends HR{constructor(e){super(),this.currentSequenceNumber=e}}class Hf{constructor(e){this.persistence=e,this.Ai=new qf,this.Ri=null}static Vi(e){return new Hf(e)}get mi(){if(this.Ri)return this.Ri;throw Te(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),W.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.mi,(i=>{const o=_e.fromPath(i);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Se.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return W.or([()=>W.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class vc{constructor(e,t){this.persistence=e,this.gi=new Vs((i=>KR(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=oC(this,t)}static Vi(e,t){return new vc(e,t)}Ii(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return W.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((l=>l?W.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((f=>{f||(i++,l.removeEntry(h,Se.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),W.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zu(e.data.value)),t}Sr(e,t,i){return W.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return W.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Wf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=Le(),o=Le();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Wf(e,t.fromCache,i,o)}}/**
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
 */class _C{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class vC{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return HT()?8:WR(Kt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,i).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new _C;return this.ws(e,t,h).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)}))})).next((()=>l.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(ko()<=Ve.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",Po(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),W.resolve()):(ko()<=Ve.DEBUG&&se("QueryEngine","Query:",Po(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(ko()<=Ve.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",Po(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Er(t))):W.resolve())}ps(e,t){if(by(t))return W.resolve(null);let i=Er(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=sf(t,null,"F"),i=Er(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const h=Le(...l);return this.gs.getDocuments(e,h).next((f=>this.indexManager.getMinOffset(e,i).next((g=>{const _=this.bs(t,f);return this.Ds(t,_,h,g.readTime)?this.ps(e,sf(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ys(e,t,i,o){return by(t)||o.isEqual(Se.min())?W.resolve(null):this.gs.getDocuments(e,i).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,i,o)?W.resolve(null):(ko()<=Ve.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Po(t)),this.vs(e,h,t,zR(o,sl)).next((f=>f)))}))}bs(e,t){let i=new Rt(rE(e));return t.forEach(((o,l)=>{jc(e,l)&&(i=i.add(l))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return ko()<=Ve.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",Po(t)),this.gs.getDocumentsMatchingQuery(e,t,zi.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const Gf="LocalStore",EC=3e8;class wC{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new ot(Ne),this.Ms=new Vs((l=>Mf(l)),Ff),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uC(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function TC(r,e,t,i){return new wC(r,e,t,i)}async function CE(r,e){const t=Ae(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const h=[],f=[];let g=Le();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of l){f.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(i,g).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:f})))}))}))}function IC(r,e){const t=Ae(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,g,_,E){const T=_.batch,C=T.keys();let F=W.resolve();return C.forEach((q=>{F=F.next((()=>E.getEntry(g,q))).next((K=>{const B=_.docVersions.get(q);He(B!==null,48541),K.version.compareTo(B)<0&&(T.applyToRemoteDocument(K,_),K.isValidDocument()&&(K.setReadTime(_.commitVersion),E.addEntry(K)))}))})),F.next((()=>f.mutationQueue.removeMutationBatch(g,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let g=Le();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(g=g.add(f.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function kE(r){const e=Ae(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function SC(r,e){const t=Ae(r),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach(((E,T)=>{const C=o.get(T);if(!C)return;f.push(t.hi.removeMatchingKeys(l,E.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,E.addedDocuments,T))));let F=C.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?F=F.withResumeToken(jt.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):E.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(E.resumeToken,i)),o=o.insert(T,F),(function(K,B,pe){return K.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=EC?!0:pe.addedDocuments.size+pe.modifiedDocuments.size+pe.removedDocuments.size>0})(C,F,E)&&f.push(t.hi.updateTargetData(l,F))}));let g=Qr(),_=Le();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(AC(l,h,e.documentUpdates).next((E=>{g=E.Ls,_=E.ks}))),!i.isEqual(Se.min())){const E=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(E)}return W.waitFor(f).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function AC(r,e,t){let i=Le(),o=Le();return t.forEach((l=>i=i.add(l))),e.getEntries(r,i).next((l=>{let h=Qr();return t.forEach(((f,g)=>{const _=l.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Se.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):se(Gf,"Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function RC(r,e){const t=Ae(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=bf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function CC(r,e){const t=Ae(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((l=>l?(o=l,W.resolve(o)):t.hi.allocateTargetId(i).next((h=>(o=new Di(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function cf(r,e,t){const i=Ae(r),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(h=>i.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Yo(h))throw h;se(Gf,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function Gy(r,e,t){const i=Ae(r);let o=Se.min(),l=Le();return i.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,E){const T=Ae(g),C=T.Ms.get(E);return C!==void 0?W.resolve(T.Fs.get(C)):T.hi.getTargetData(_,E)})(i,h,Er(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(h,f.targetId).next((g=>{l=g}))})).next((()=>i.Cs.getDocumentsMatchingQuery(h,e,t?o:Se.min(),t?l:Le()))).next((f=>(kC(i,f1(e),f),{documents:f,qs:l})))))}function kC(r,e,t){let i=r.xs.get(e)||Se.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),r.xs.set(e,i)}class Ky{constructor(){this.activeTargetIds=v1()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PC{constructor(){this.Fo=new Ky,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Ky,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class NC{xo(e){}shutdown(){}}/**
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
 */const Qy="ConnectivityMonitor";class Yy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){se(Qy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){se(Qy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wu=null;function hf(){return Wu===null?Wu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Wu++,"0x"+Wu.toString(16)}/**
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
 */const Ld="RestConnection",xC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class DC{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===pc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const h=hf(),f=this.Go(e,t.toUriEncodedString());se(Ld,`Sending RPC '${e}' ${h}:`,f,i);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:_}=new URL(f),E=Yr(_);return this.jo(e,f,g,i,E).then((T=>(se(Ld,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw ji(Ld,`RPC '${e}' ${h} failed with error: `,T,"url: ",f,"request:",i),T}))}Jo(e,t,i,o,l,h){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ko})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const i=xC[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
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
 */class OC{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Ht="WebChannelConnection";class bC extends DC{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const h=hf();return new Promise(((f,g)=>{const _=new Pv;_.setWithCredentials(!0),_.listenOnce(Nv.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Ju.NO_ERROR:const T=_.getResponseJson();se(Ht,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),f(T);break;case Ju.TIMEOUT:se(Ht,`RPC '${e}' ${h} timed out`),g(new oe(H.DEADLINE_EXCEEDED,"Request time out"));break;case Ju.HTTP_ERROR:const C=_.getStatus();if(se(Ht,`RPC '${e}' ${h} failed with status:`,C,"response text:",_.getResponseText()),C>0){let F=_.getResponseJson();Array.isArray(F)&&(F=F[0]);const q=F==null?void 0:F.error;if(q&&q.status&&q.message){const K=(function(pe){const de=pe.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(de)>=0?de:H.UNKNOWN})(q.status);g(new oe(K,q.message))}else g(new oe(H.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new oe(H.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{se(Ht,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);se(Ht,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,i,15)}))}P_(e,t,i){const o=hf(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Ov(),f=Dv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,i),g.encodeInitMessageHeaders=!0;const E=l.join("");se(Ht,`Creating RPC '${e}' stream ${o}: ${E}`,g);const T=h.createWebChannel(E,g);this.T_(T);let C=!1,F=!1;const q=new OC({Ho:B=>{F?se(Ht,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(C||(se(Ht,`Opening RPC '${e}' stream ${o} transport.`),T.open(),C=!0),se(Ht,`RPC '${e}' stream ${o} sending:`,B),T.send(B))},Yo:()=>T.close()}),K=(B,pe,de)=>{B.listen(pe,(ae=>{try{de(ae)}catch(me){setTimeout((()=>{throw me}),0)}}))};return K(T,qa.EventType.OPEN,(()=>{F||(se(Ht,`RPC '${e}' stream ${o} transport opened.`),q.s_())})),K(T,qa.EventType.CLOSE,(()=>{F||(F=!0,se(Ht,`RPC '${e}' stream ${o} transport closed`),q.__(),this.I_(T))})),K(T,qa.EventType.ERROR,(B=>{F||(F=!0,ji(Ht,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),q.__(new oe(H.UNAVAILABLE,"The operation could not be completed")))})),K(T,qa.EventType.MESSAGE,(B=>{var pe;if(!F){const de=B.data[0];He(!!de,16349);const ae=de,me=(ae==null?void 0:ae.error)||((pe=ae[0])===null||pe===void 0?void 0:pe.error);if(me){se(Ht,`RPC '${e}' stream ${o} received error:`,me);const Pe=me.status;let ve=(function(R){const N=_t[R];if(N!==void 0)return mE(N)})(Pe),P=me.message;ve===void 0&&(ve=H.INTERNAL,P="Unknown error status: "+Pe+" with message "+me.message),F=!0,q.__(new oe(ve,P)),T.close()}else se(Ht,`RPC '${e}' stream ${o} received:`,de),q.a_(de)}})),K(f,xv.STAT_EVENT,(B=>{B.stat===Xd.PROXY?se(Ht,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===Xd.NOPROXY&&se(Ht,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{q.o_()}),0),q}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Md(){return typeof document<"u"?document:null}/**
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
 */function qc(r){return new F1(r,!0)}/**
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
 */class PE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Xy="PersistentStream";class NE{constructor(e,t,i,o,l,h,f,g){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new PE(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Kr(t.toString()),Kr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new oe(H.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return se(Xy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(se(Xy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class VC extends NE{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=z1(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Se.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Se.min():h.readTime?wr(h.readTime):Se.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=uf(this.serializer),t.addTarget=(function(l,h){let f;const g=h.target;if(f=nf(g)?{documents:q1(l,g)}:{query:H1(l,g).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=_E(l,h.resumeToken);const _=of(l,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(Se.min())>0){f.readTime=_c(l,h.snapshotVersion.toTimestamp());const _=of(l,h.expectedCount);_!==null&&(f.expectedCount=_)}return f})(this.serializer,e);const i=G1(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=uf(this.serializer),t.removeTarget=e,this.k_(t)}}class LC extends NE{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return He(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){He(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=$1(e.writeResults,e.commitTime),i=wr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=uf(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>B1(this.serializer,i)))};this.k_(t)}}/**
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
 */class MC{}class FC extends MC{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new oe(H.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,af(t,i),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new oe(H.UNKNOWN,l.toString())}))}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Jo(e,af(t,i),o,h,f,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new oe(H.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class UC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Kr(t),this._a=!1):se("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Ds="RemoteStore";class jC{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{i.enqueueAndForget((async()=>{Ms(this)&&(se(Ds,"Restarting streams for network reachability change."),await(async function(g){const _=Ae(g);_.Ia.add(4),await Tl(_),_.Aa.set("Unknown"),_.Ia.delete(4),await Hc(_)})(this))}))})),this.Aa=new UC(i,o)}}async function Hc(r){if(Ms(r))for(const e of r.da)await e(!0)}async function Tl(r){for(const e of r.da)await e(!1)}function xE(r,e){const t=Ae(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Xf(t)?Yf(t):Jo(t).x_()&&Qf(t,e))}function Kf(r,e){const t=Ae(r),i=Jo(t);t.Ta.delete(e),i.x_()&&DE(t,e),t.Ta.size===0&&(i.x_()?i.B_():Ms(t)&&t.Aa.set("Unknown"))}function Qf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Jo(r).H_(e)}function DE(r,e){r.Ra.$e(e),Jo(r).Y_(e)}function Yf(r){r.Ra=new b1({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Jo(r).start(),r.Aa.aa()}function Xf(r){return Ms(r)&&!Jo(r).M_()&&r.Ta.size>0}function Ms(r){return Ae(r).Ia.size===0}function OE(r){r.Ra=void 0}async function zC(r){r.Aa.set("Online")}async function BC(r){r.Ta.forEach(((e,t)=>{Qf(r,e)}))}async function $C(r,e){OE(r),Xf(r)?(r.Aa.la(e),Yf(r)):r.Aa.set("Unknown")}async function qC(r,e,t){if(r.Aa.set("Online"),e instanceof yE&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))})(r,e)}catch(i){se(Ds,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ec(r,i)}else if(e instanceof nc?r.Ra.Ye(e):e instanceof gE?r.Ra.it(e):r.Ra.et(e),!t.isEqual(Se.min()))try{const i=await kE(r.localStore);t.compareTo(i)>=0&&await(function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const E=l.Ta.get(_);E&&l.Ta.set(_,E.withResumeToken(g.resumeToken,h))}})),f.targetMismatches.forEach(((g,_)=>{const E=l.Ta.get(g);if(!E)return;l.Ta.set(g,E.withResumeToken(jt.EMPTY_BYTE_STRING,E.snapshotVersion)),DE(l,g);const T=new Di(E.target,g,_,E.sequenceNumber);Qf(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(i){se(Ds,"Failed to raise snapshot:",i),await Ec(r,i)}}async function Ec(r,e,t){if(!Yo(e))throw e;r.Ia.add(1),await Tl(r),r.Aa.set("Offline"),t||(t=()=>kE(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{se(Ds,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Hc(r)}))}function bE(r,e){return e().catch((t=>Ec(r,t,e)))}async function Wc(r){const e=Ae(r),t=Hi(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:bf;for(;HC(e);)try{const o=await RC(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,WC(e,o)}catch(o){await Ec(e,o)}VE(e)&&LE(e)}function HC(r){return Ms(r)&&r.Pa.length<10}function WC(r,e){r.Pa.push(e);const t=Hi(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function VE(r){return Ms(r)&&!Hi(r).M_()&&r.Pa.length>0}function LE(r){Hi(r).start()}async function GC(r){Hi(r).na()}async function KC(r){const e=Hi(r);for(const t of r.Pa)e.X_(t.mutations)}async function QC(r,e,t){const i=r.Pa.shift(),o=zf.from(i,e,t);await bE(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Wc(r)}async function YC(r,e){e&&Hi(r).Z_&&await(async function(i,o){if((function(h){return D1(h)&&h!==H.ABORTED})(o.code)){const l=i.Pa.shift();Hi(i).N_(),await bE(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Wc(i)}})(r,e),VE(r)&&LE(r)}async function Jy(r,e){const t=Ae(r);t.asyncQueue.verifyOperationInProgress(),se(Ds,"RemoteStore received new credentials");const i=Ms(t);t.Ia.add(3),await Tl(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Hc(t)}async function XC(r,e){const t=Ae(r);e?(t.Ia.delete(2),await Hc(t)):e||(t.Ia.add(2),await Tl(t),t.Aa.set("Unknown"))}function Jo(r){return r.Va||(r.Va=(function(t,i,o){const l=Ae(t);return l.ia(),new VC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:zC.bind(null,r),e_:BC.bind(null,r),n_:$C.bind(null,r),J_:qC.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Xf(r)?Yf(r):r.Aa.set("Unknown")):(await r.Va.stop(),OE(r))}))),r.Va}function Hi(r){return r.ma||(r.ma=(function(t,i,o){const l=Ae(t);return l.ia(),new LC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:GC.bind(null,r),n_:YC.bind(null,r),ea:KC.bind(null,r),ta:QC.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Wc(r)):(await r.ma.stop(),r.Pa.length>0&&(se(Ds,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
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
 */class Jf{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Rs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new Jf(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zf(r,e){if(Kr("AsyncQueue",`${e}: ${r}`),Yo(r))return new oe(H.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Mo{static emptySet(e){return new Mo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||_e.comparator(t.key,i.key):(t,i)=>_e.comparator(t.key,i.key),this.keyedMap=Ha(),this.sortedSet=new ot(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Mo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class Zy{constructor(){this.fa=new ot(_e.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Te(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class qo{constructor(e,t,i,o,l,h,f,g,_){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach((f=>{h.push({type:0,doc:f})})),new qo(e,t,Mo.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class JC{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class ZC{constructor(){this.queries=e_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=Ae(t),l=o.queries;o.queries=e_(),l.forEach(((h,f)=>{for(const g of f.wa)g.onError(i)}))})(this,new oe(H.ABORTED,"Firestore shutting down"))}}function e_(){return new Vs((r=>nE(r)),Uc)}async function ek(r,e){const t=Ae(r);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new JC,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Zf(h,`Initialization of query '${Po(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&ep(t)}async function tk(r,e){const t=Ae(r),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function nk(r,e){const t=Ae(r);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(i=!0);h.ya=o}}i&&ep(t)}function rk(r,e,t){const i=Ae(r),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function ep(r){r.Da.forEach((e=>{e.next()}))}var df,t_;(t_=df||(df={})).Fa="default",t_.Cache="cache";class ik{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new qo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=qo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==df.Cache}}/**
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
 */class ME{constructor(e){this.key=e}}class FE{constructor(e){this.key=e}}class sk{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Le(),this.mutatedKeys=Le(),this.Xa=rE(e),this.eu=new Mo(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new Zy,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,T)=>{const C=o.get(E),F=jc(this.query,T)?T:null,q=!!C&&this.mutatedKeys.has(C.key),K=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let B=!1;C&&F?C.data.isEqual(F.data)?q!==K&&(i.track({type:3,doc:F}),B=!0):this.iu(C,F)||(i.track({type:2,doc:F}),B=!0,(g&&this.Xa(F,g)>0||_&&this.Xa(F,_)<0)&&(f=!0)):!C&&F?(i.track({type:0,doc:F}),B=!0):C&&!F&&(i.track({type:1,doc:C}),B=!0,(g||_)&&(f=!0)),B&&(F?(h=h.add(F),l=K?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{eu:h,ru:i,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((E,T)=>(function(F,q){const K=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{At:B})}};return K(F)-K(q)})(E.type,T.type)||this.Xa(E.doc,T.doc))),this.su(i),o=o!=null&&o;const f=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new qo(this.query,e.eu,l,h,e.mutatedKeys,g===0,_,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Zy,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Le(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new FE(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new ME(i))})),t}uu(e){this.Ha=e.qs,this.Za=Le();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return qo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const tp="SyncEngine";class ok{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class ak{constructor(e){this.key=e,this.lu=!1}}class lk{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new Vs((f=>nE(f)),Uc),this.Tu=new Map,this.Iu=new Set,this.du=new ot(_e.comparator),this.Eu=new Map,this.Au=new qf,this.Ru={},this.Vu=new Map,this.mu=$o.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function uk(r,e,t=!0){const i=qE(r);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await UE(i,e,t,!0),o}async function ck(r,e){const t=qE(r);await UE(t,e,!0,!1)}async function UE(r,e,t,i){const o=await CC(r.localStore,Er(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await hk(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&xE(r.remoteStore,o),f}async function hk(r,e,t,i,o){r.gu=(T,C,F)=>(async function(K,B,pe,de){let ae=B.view.nu(pe);ae.Ds&&(ae=await Gy(K.localStore,B.query,!1).then((({documents:P})=>B.view.nu(P,ae))));const me=de&&de.targetChanges.get(B.targetId),Pe=de&&de.targetMismatches.get(B.targetId)!=null,ve=B.view.applyChanges(ae,K.isPrimaryClient,me,Pe);return r_(K,B.targetId,ve._u),ve.snapshot})(r,T,C,F);const l=await Gy(r.localStore,e,!0),h=new sk(e,l.qs),f=h.nu(l.documents),g=wl.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",o),_=h.applyChanges(f,r.isPrimaryClient,g);r_(r,t,_._u);const E=new ok(e,t,h);return r.Pu.set(e,E),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),_.snapshot}async function dk(r,e,t){const i=Ae(r),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter((h=>!Uc(h,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await cf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Kf(i.remoteStore,o.targetId),ff(i,o.targetId)})).catch(Qo)):(ff(i,o.targetId),await cf(i.localStore,o.targetId,!0))}async function fk(r,e){const t=Ae(r),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Kf(t.remoteStore,i.targetId))}async function pk(r,e,t){const i=wk(r);try{const o=await(function(h,f){const g=Ae(h),_=tt.now(),E=f.reduce(((F,q)=>F.add(q.key)),Le());let T,C;return g.persistence.runTransaction("Locally write mutations","readwrite",(F=>{let q=Qr(),K=Le();return g.Os.getEntries(F,E).next((B=>{q=B,q.forEach(((pe,de)=>{de.isValidDocument()||(K=K.add(pe))}))})).next((()=>g.localDocuments.getOverlayedDocuments(F,q))).next((B=>{T=B;const pe=[];for(const de of f){const ae=C1(de,T.get(de.key).overlayedDocument);ae!=null&&pe.push(new Ls(de.key,ae,Kv(ae.value.mapValue),qr.exists(!0)))}return g.mutationQueue.addMutationBatch(F,_,pe,f)})).next((B=>{C=B;const pe=B.applyToLocalDocumentSet(T,K);return g.documentOverlayCache.saveOverlays(F,B.batchId,pe)}))})).then((()=>({batchId:C.batchId,changes:sE(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(h,f,g){let _=h.Ru[h.currentUser.toKey()];_||(_=new ot(Ne)),_=_.insert(f,g),h.Ru[h.currentUser.toKey()]=_})(i,o.batchId,t),await Il(i,o.changes),await Wc(i.remoteStore)}catch(o){const l=Zf(o,"Failed to persist write");t.reject(l)}}async function jE(r,e){const t=Ae(r);try{const i=await SC(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(He(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?He(h.lu,14607):o.removedDocuments.size>0&&(He(h.lu,42227),h.lu=!1))})),await Il(t,i,e)}catch(i){await Qo(i)}}function n_(r,e,t){const i=Ae(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(h,f){const g=Ae(h);g.onlineState=f;let _=!1;g.queries.forEach(((E,T)=>{for(const C of T.wa)C.va(f)&&(_=!0)})),_&&ep(g)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function mk(r,e,t){const i=Ae(r);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let h=new ot(_e.comparator);h=h.insert(l,Gt.newNoDocument(l,Se.min()));const f=Le().add(l),g=new $c(Se.min(),new Map,new ot(Ne),h,f);await jE(i,g),i.du=i.du.remove(l),i.Eu.delete(e),np(i)}else await cf(i.localStore,e,!1).then((()=>ff(i,e,t))).catch(Qo)}async function gk(r,e){const t=Ae(r),i=e.batch.batchId;try{const o=await IC(t.localStore,e);BE(t,i,null),zE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Il(t,o)}catch(o){await Qo(o)}}async function yk(r,e,t){const i=Ae(r);try{const o=await(function(h,f){const g=Ae(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return g.mutationQueue.lookupMutationBatch(_,f).next((T=>(He(T!==null,37113),E=T.keys(),g.mutationQueue.removeMutationBatch(_,T)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,E,f))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>g.localDocuments.getDocuments(_,E)))}))})(i.localStore,e);BE(i,e,t),zE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Il(i,o)}catch(o){await Qo(o)}}function zE(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function BE(r,e,t){const i=Ae(r);let o=i.Ru[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function ff(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Tu.get(e))r.Pu.delete(i),t&&r.hu.pu(i,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((i=>{r.Au.containsKey(i)||$E(r,i)}))}function $E(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Kf(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),np(r))}function r_(r,e,t){for(const i of t)i instanceof ME?(r.Au.addReference(i.key,e),_k(r,i)):i instanceof FE?(se(tp,"Document no longer in limbo: "+i.key),r.Au.removeReference(i.key,e),r.Au.containsKey(i.key)||$E(r,i.key)):Te(19791,{yu:i})}function _k(r,e){const t=e.key,i=t.path.canonicalString();r.du.get(t)||r.Iu.has(i)||(se(tp,"New document in limbo: "+t),r.Iu.add(i),np(r))}function np(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new _e(Xe.fromString(e)),i=r.mu.next();r.Eu.set(i,new ak(t)),r.du=r.du.insert(t,i),xE(r.remoteStore,new Di(Er(Uf(t.path)),i,"TargetPurposeLimboResolution",Lc.ue))}}async function Il(r,e,t){const i=Ae(r),o=[],l=[],h=[];i.Pu.isEmpty()||(i.Pu.forEach(((f,g)=>{h.push(i.gu(g,e,t).then((_=>{var E;if((_||t)&&i.isPrimaryClient){const T=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=Wf.Es(g.targetId,_);l.push(T)}})))})),await Promise.all(h),i.hu.J_(o),await(async function(g,_){const E=Ae(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>W.forEach(_,(C=>W.forEach(C.Is,(F=>E.persistence.referenceDelegate.addReference(T,C.targetId,F))).next((()=>W.forEach(C.ds,(F=>E.persistence.referenceDelegate.removeReference(T,C.targetId,F)))))))))}catch(T){if(!Yo(T))throw T;se(Gf,"Failed to update sequence numbers: "+T)}for(const T of _){const C=T.targetId;if(!T.fromCache){const F=E.Fs.get(C),q=F.snapshotVersion,K=F.withLastLimboFreeSnapshotVersion(q);E.Fs=E.Fs.insert(C,K)}}})(i.localStore,l))}async function vk(r,e){const t=Ae(r);if(!t.currentUser.isEqual(e)){se(tp,"User change. New user:",e.toKey());const i=await CE(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((f=>{f.forEach((g=>{g.reject(new oe(H.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Il(t,i.Bs)}}function Ek(r,e){const t=Ae(r),i=t.Eu.get(e);if(i&&i.lu)return Le().add(i.key);{let o=Le();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function qE(r){const e=Ae(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=jE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ek.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mk.bind(null,e),e.hu.J_=nk.bind(null,e.eventManager),e.hu.pu=rk.bind(null,e.eventManager),e}function wk(r){const e=Ae(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yk.bind(null,e),e}class wc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return TC(this.persistence,new vC,e.initialUser,this.serializer)}Du(e){return new RE(Hf.Vi,this.serializer)}bu(e){return new PC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wc.provider={build:()=>new wc};class Tk extends wc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){He(this.persistence.referenceDelegate instanceof vc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new iC(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?cn.withCacheSize(this.cacheSizeBytes):cn.DEFAULT;return new RE((i=>vc.Vi(i,t)),this.serializer)}}class pf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>n_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=vk.bind(null,this.syncEngine),await XC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new ZC})()}createDatastore(e){const t=qc(e.databaseInfo.databaseId),i=(function(l){return new bC(l)})(e.databaseInfo);return(function(l,h,f,g){return new FC(l,h,f,g)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,h,f){return new jC(i,o,l,h,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>n_(this.syncEngine,t,0)),(function(){return Yy.C()?new Yy:new NC})())}createSyncEngine(e,t){return(function(o,l,h,f,g,_,E){const T=new lk(o,l,h,f,g,_);return E&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Ae(o);se(Ds,"RemoteStore shutting down."),l.Ia.add(5),await Tl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}pf.provider={build:()=>new pf};/**
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
 */class Ik{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Kr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Wi="FirestoreClient";class Sk{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Wt.UNAUTHENTICATED,this.clientId=Of.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async h=>{se(Wi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(i,(h=>(se(Wi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Zf(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Fd(r,e){r.asyncQueue.verifyOperationInProgress(),se(Wi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async o=>{i.isEqual(o)||(await CE(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{ji("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{se("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{ji("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function i_(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Ak(r);se(Wi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>Jy(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,o)=>Jy(e.remoteStore,o))),r._onlineComponents=e}async function Ak(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){se(Wi,"Using user provided OfflineComponentProvider");try{await Fd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;ji("Error using user provided cache. Falling back to memory cache: "+t),await Fd(r,new wc)}}else se(Wi,"Using default OfflineComponentProvider"),await Fd(r,new Tk(void 0));return r._offlineComponents}async function HE(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(se(Wi,"Using user provided OnlineComponentProvider"),await i_(r,r._uninitializedComponentsProvider._online)):(se(Wi,"Using default OnlineComponentProvider"),await i_(r,new pf))),r._onlineComponents}function Rk(r){return HE(r).then((e=>e.syncEngine))}async function s_(r){const e=await HE(r),t=e.eventManager;return t.onListen=uk.bind(null,e.syncEngine),t.onUnlisten=dk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ck.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=fk.bind(null,e.syncEngine),t}/**
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
 */function WE(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const o_=new Map;/**
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
 */const GE="firestore.googleapis.com",a_=!0;class l_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=GE,this.ssl=a_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:a_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=AE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<nC)throw new oe(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=WE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new l_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new l_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new xR;switch(i.type){case"firstParty":return new VR(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new oe(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=o_.get(t);i&&(se("ComponentProvider","Removing Datastore"),o_.delete(t),i.terminate())})(this),Promise.resolve()}}function Ck(r,e,t,i={}){var o;r=Lo(r,Gc);const l=Yr(e),h=r._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&(Cc(`https://${g}`),kc("Firestore",!0)),h.host!==GE&&h.host!==g&&ji("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:i});if(!ks(_,f)&&(r._setSettings(_),i.mockUserToken)){let E,T;if(typeof i.mockUserToken=="string")E=i.mockUserToken,T=Wt.MOCK_USER;else{E=D_(i.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const C=i.mockUserToken.sub||i.mockUserToken.user_id;if(!C)throw new oe(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Wt(C)}r._authCredentials=new DR(new Vv(E,T))}}/**
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
 */class Fs{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Fs(this.firestore,e,this._query)}}class wt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}toJSON(){return{type:wt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(vl(t,wt._jsonSchema))return new wt(e,i||null,new _e(Xe.fromString(t.referencePath)))}}wt._jsonSchemaVersion="firestore/documentReference/1.0",wt._jsonSchema={type:Et("string",wt._jsonSchemaVersion),referencePath:Et("string")};class Mi extends Fs{constructor(e,t,i){super(e,t,Uf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new _e(e))}withConverter(e){return new Mi(this.firestore,e,this._path)}}function KE(r,e,...t){if(r=ut(r),Mv("collection","path",e),r instanceof Gc){const i=Xe.fromString(e,...t);return Ey(i),new Mi(r,null,i)}{if(!(r instanceof wt||r instanceof Mi))throw new oe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Xe.fromString(e,...t));return Ey(i),new Mi(r.firestore,null,i)}}function Kc(r,e,...t){if(r=ut(r),arguments.length===1&&(e=Of.newId()),Mv("doc","path",e),r instanceof Gc){const i=Xe.fromString(e,...t);return vy(i),new wt(r,null,new _e(i))}{if(!(r instanceof wt||r instanceof Mi))throw new oe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Xe.fromString(e,...t));return vy(i),new wt(r.firestore,r instanceof Mi?r.converter:null,new _e(i))}}/**
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
 */const u_="AsyncQueue";class c_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new PE(this,"async_queue_retry"),this.oc=()=>{const i=Md();i&&se(u_,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=Md();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Md();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Rs;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Yo(e))throw e;se(u_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,Kr("INTERNAL UNHANDLED ERROR: ",h_(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Jf.createAndSchedule(this,e,t,i,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&Te(47125,{hc:h_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function h_(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
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
 */function d_(r){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}class Tc extends Gc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new c_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new c_(e),this._firestoreClient=void 0,await e}}}function kk(r,e){const t=typeof r=="object"?r:Pc(),i=typeof r=="string"?r:pc,o=ml(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=Ef("firestore");l&&Ck(o,...l)}return o}function QE(r){if(r._terminated)throw new oe(H.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Pk(r),r._firestoreClient}function Pk(r){var e,t,i;const o=r._freezeSettings(),l=(function(f,g,_,E){return new XR(f,g,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,WE(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new Sk(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}})(r._componentsProvider))}/**
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
 */class On{constructor(e){this._byteString=e}static fromBase64String(e){try{return new On(jt.fromBase64String(e))}catch(t){throw new oe(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new On(jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:On._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vl(e,On._jsonSchema))return On.fromBase64String(e.bytes)}}On._jsonSchemaVersion="firestore/bytes/1.0",On._jsonSchema={type:Et("string",On._jsonSchemaVersion),bytes:Et("string")};/**
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
 */class rp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ip{constructor(e){this._methodName=e}}/**
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
 */class Tr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Tr._jsonSchemaVersion}}static fromJSON(e){if(vl(e,Tr._jsonSchema))return new Tr(e.latitude,e.longitude)}}Tr._jsonSchemaVersion="firestore/geoPoint/1.0",Tr._jsonSchema={type:Et("string",Tr._jsonSchemaVersion),latitude:Et("number"),longitude:Et("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ir{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ir._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vl(e,Ir._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ir(e.vectorValues);throw new oe(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ir._jsonSchemaVersion="firestore/vectorValue/1.0",Ir._jsonSchema={type:Et("string",Ir._jsonSchemaVersion),vectorValues:Et("object")};/**
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
 */const Nk=/^__.*__$/;class xk{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ls(e,this.data,this.fieldMask,t,this.fieldTransforms):new El(e,this.data,t,this.fieldTransforms)}}function YE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{Ec:r})}}class sp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new sp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ic(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(YE(this.Ec)&&Nk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Dk{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||qc(e)}Dc(e,t,i,o=!1){return new sp({Ec:e,methodName:t,bc:i,path:Ut.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function XE(r){const e=r._freezeSettings(),t=qc(r._databaseId);return new Dk(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Ok(r,e,t,i,o,l={}){const h=r.Dc(l.merge||l.mergeFields?2:0,e,t,o);ew("Data must be an object, but it was:",h,i);const f=JE(i,h);let g,_;if(l.merge)g=new tr(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const C=Vk(e,T,t);if(!h.contains(C))throw new oe(H.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);Mk(E,C)||E.push(C)}g=new tr(E),_=h.fieldTransforms.filter((T=>g.covers(T.field)))}else g=null,_=h.fieldTransforms;return new xk(new Dn(f),g,_)}class op extends ip{_toFieldTransform(e){return new I1(e.path,new cl)}isEqual(e){return e instanceof op}}function bk(r,e,t,i=!1){return ap(t,r.Dc(i?4:3,e))}function ap(r,e){if(ZE(r=ut(r)))return ew("Unsupported field value:",e,r),JE(r,e);if(r instanceof ip)return(function(i,o){if(!YE(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const l=[];let h=0;for(const f of i){let g=ap(f,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(i,o){if((i=ut(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return E1(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=tt.fromDate(i);return{timestampValue:_c(o.serializer,l)}}if(i instanceof tt){const l=new tt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:_c(o.serializer,l)}}if(i instanceof Tr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof On)return{bytesValue:_E(o.serializer,i._byteString)};if(i instanceof wt){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:$f(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Ir)return(function(h,f){return{mapValue:{fields:{[Wv]:{stringValue:Gv},[mc]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw f.wc("VectorValues must only contain numeric values.");return jf(f.serializer,_)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${Vc(i)}`)})(r,e)}function JE(r,e){const t={};return jv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bs(r,((i,o)=>{const l=ap(o,e.Vc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function ZE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof tt||r instanceof Tr||r instanceof On||r instanceof wt||r instanceof ip||r instanceof Ir)}function ew(r,e,t){if(!ZE(t)||!Fv(t)){const i=Vc(t);throw i==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+i)}}function Vk(r,e,t){if((e=ut(e))instanceof rp)return e._internalPath;if(typeof e=="string")return tw(r,e);throw Ic("Field path arguments must be of type string or ",r,!1,void 0,t)}const Lk=new RegExp("[~\\*/\\[\\]]");function tw(r,e,t){if(e.search(Lk)>=0)throw Ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new rp(...e.split("."))._internalPath}catch{throw Ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ic(r,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${i}`),h&&(g+=` in document ${o}`),g+=")"),new oe(H.INVALID_ARGUMENT,f+r+g)}function Mk(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class nw{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Fk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(lp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Fk extends nw{data(){return super.data()}}function lp(r,e){return typeof e=="string"?tw(r,e):e instanceof rp?e._internalPath:e._delegate._internalPath}/**
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
 */function Uk(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new oe(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class up{}class rw extends up{}function iw(r,e,...t){let i=[];e instanceof up&&i.push(e),i=i.concat(t),(function(l){const h=l.filter((g=>g instanceof hp)).length,f=l.filter((g=>g instanceof cp)).length;if(h>1||h>0&&f>0)throw new oe(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)r=o._apply(r);return r}class cp extends rw{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new cp(e,t,i)}_apply(e){const t=this._parse(e);return ow(e._query,t),new Fs(e.firestore,e.converter,rf(e._query,t))}_parse(e){const t=XE(e.firestore);return(function(l,h,f,g,_,E,T){let C;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new oe(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){p_(T,E);const q=[];for(const K of T)q.push(f_(g,l,K));C={arrayValue:{values:q}}}else C=f_(g,l,T)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||p_(T,E),C=bk(f,h,T,E==="in"||E==="not-in");return vt.create(_,E,C)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class hp extends up{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new hp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:rr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)ow(h,g),h=rf(h,g)})(e._query,t),new Fs(e.firestore,e.converter,rf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class dp extends rw{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new dp(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new oe(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new oe(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ul(l,h)})(e._query,this._field,this._direction);return new Fs(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new Xo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function sw(r,e="asc"){const t=e,i=lp("orderBy",r);return dp._create(i,t)}function f_(r,e,t){if(typeof(t=ut(t))=="string"){if(t==="")throw new oe(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tE(e)&&t.indexOf("/")!==-1)throw new oe(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Xe.fromString(t));if(!_e.isDocumentKey(i))throw new oe(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return ky(r,new _e(i))}if(t instanceof wt)return ky(r,t._key);throw new oe(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vc(t)}.`)}function p_(r,e){if(!Array.isArray(r)||r.length===0)throw new oe(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ow(r,e){const t=(function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new oe(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class jk{convertValue(e,t="none"){switch(qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return bs(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[mc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((h=>pt(h.doubleValue)));return new Ir(l)}convertGeoPoint(e){return new Tr(pt(e.latitude),pt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Fc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ol(e));default:return null}}convertTimestamp(e){const t=Bi(e);return new tt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Xe.fromString(e);He(SE(i),9688,{name:e});const o=new al(i.get(1),i.get(3)),l=new _e(i.popFirst(5));return o.isEqual(t)||Kr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function zk(r,e,t){let i;return i=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,i}class Ga{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cs extends nw{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new rc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(lp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Cs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Cs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Cs._jsonSchema={type:Et("string",Cs._jsonSchemaVersion),bundleSource:Et("string","DocumentSnapshot"),bundleName:Et("string"),bundle:Et("string")};class rc extends Cs{data(e={}){return super.data(e)}}class Fo{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ga(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new rc(this._firestore,this._userDataWriter,i.key,i,new Ga(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((f=>{const g=new rc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ga(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const g=new rc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ga(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:Bk(f.type),doc:g,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Fo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Of.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Bk(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:r})}}Fo._jsonSchemaVersion="firestore/querySnapshot/1.0",Fo._jsonSchema={type:Et("string",Fo._jsonSchemaVersion),bundleSource:Et("string","QuerySnapshot"),bundleName:Et("string"),bundle:Et("string")};class aw extends jk{constructor(e){super(),this.firestore=e}convertBytes(e){return new On(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,t)}}function fp(r,e,t){r=Lo(r,wt);const i=Lo(r.firestore,Tc),o=zk(r.converter,e,t);return $k(i,[Ok(XE(i),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,qr.none())])}function pp(r,...e){var t,i,o;r=ut(r);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||d_(e[h])||(l=e[h++]);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(d_(e[h])){const T=e[h];e[h]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[h+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[h+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let g,_,E;if(r instanceof wt)_=Lo(r.firestore,Tc),E=Uf(r._key.path),g={next:T=>{e[h]&&e[h](qk(_,r,T))},error:e[h+1],complete:e[h+2]};else{const T=Lo(r,Fs);_=Lo(T.firestore,Tc),E=T._query;const C=new aw(_);g={next:F=>{e[h]&&e[h](new Fo(_,C,T,F))},error:e[h+1],complete:e[h+2]},Uk(r._query)}return(function(C,F,q,K){const B=new Ik(K),pe=new ik(F,B,q);return C.asyncQueue.enqueueAndForget((async()=>ek(await s_(C),pe))),()=>{B.Ou(),C.asyncQueue.enqueueAndForget((async()=>tk(await s_(C),pe)))}})(QE(_),E,f,g)}function $k(r,e){return(function(i,o){const l=new Rs;return i.asyncQueue.enqueueAndForget((async()=>pk(await Rk(i),o,l))),l.promise})(QE(r),e)}function qk(r,e,t){const i=t.docs.get(e._key),o=new aw(r);return new Cs(r,o,e._key,i,new Ga(t.hasPendingWrites,t.fromCache),e.converter)}function mp(){return new op("serverTimestamp")}(function(e,t=!0){(function(o){Ko=o})(Os),Ui(new Hr("firestore",((i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Tc(new OR(i.getProvider("auth-internal")),new LR(h,i.getProvider("app-check-internal")),(function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new oe(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new al(_.options.projectId,E)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),bn(py,my,e),bn(py,my,"esm2017")})();/**
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
 */const Hk="type.googleapis.com/google.protobuf.Int64Value",Wk="type.googleapis.com/google.protobuf.UInt64Value";function lw(r,e){const t={};for(const i in r)r.hasOwnProperty(i)&&(t[i]=e(r[i]));return t}function Sc(r){if(r==null)return null;if(r instanceof Number&&(r=r.valueOf()),typeof r=="number"&&isFinite(r)||r===!0||r===!1||Object.prototype.toString.call(r)==="[object String]")return r;if(r instanceof Date)return r.toISOString();if(Array.isArray(r))return r.map(e=>Sc(e));if(typeof r=="function"||typeof r=="object")return lw(r,e=>Sc(e));throw new Error("Data cannot be encoded in JSON: "+r)}function Ho(r){if(r==null)return r;if(r["@type"])switch(r["@type"]){case Hk:case Wk:{const e=Number(r.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+r);return e}default:throw new Error("Data cannot be decoded from JSON: "+r)}return Array.isArray(r)?r.map(e=>Ho(e)):typeof r=="function"||typeof r=="object"?lw(r,e=>Ho(e)):r}/**
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
 */const gp="functions";/**
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
 */const m_={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class hn extends ir{constructor(e,t,i){super(`${gp}/${e}`,t||""),this.details=i,Object.setPrototypeOf(this,hn.prototype)}}function Gk(r){if(r>=200&&r<300)return"ok";switch(r){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Ac(r,e){let t=Gk(r),i=t,o;try{const l=e&&e.error;if(l){const h=l.status;if(typeof h=="string"){if(!m_[h])return new hn("internal","internal");t=m_[h],i=h}const f=l.message;typeof f=="string"&&(i=f),o=l.details,o!==void 0&&(o=Ho(o))}}catch{}return t==="ok"?null:new hn(t,i,o)}/**
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
 */class Kk{constructor(e,t,i,o){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,En(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=i.getImmediate({optional:!0}),this.auth||t.get().then(l=>this.auth=l,()=>{}),this.messaging||i.get().then(l=>this.messaging=l,()=>{}),this.appCheck||o==null||o.get().then(l=>this.appCheck=l,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),o=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:o}}}/**
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
 */const mf="us-central1",Qk=/^data: (.*?)(?:\n|$)/;function Yk(r){let e=null;return{promise:new Promise((t,i)=>{e=setTimeout(()=>{i(new hn("deadline-exceeded","deadline-exceeded"))},r)}),cancel:()=>{e&&clearTimeout(e)}}}class Xk{constructor(e,t,i,o,l=mf,h=(...f)=>fetch(...f)){this.app=e,this.fetchImpl=h,this.emulatorOrigin=null,this.contextProvider=new Kk(e,t,i,o),this.cancelAllRequests=new Promise(f=>{this.deleteService=()=>Promise.resolve(f())});try{const f=new URL(l);this.customDomain=f.origin+(f.pathname==="/"?"":f.pathname),this.region=mf}catch{this.customDomain=null,this.region=l}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function Jk(r,e,t){const i=Yr(e);r.emulatorOrigin=`http${i?"s":""}://${e}:${t}`,i&&(Cc(r.emulatorOrigin),kc("Functions",!0))}function Zk(r,e,t){const i=o=>tP(r,e,o,{});return i.stream=(o,l)=>rP(r,e,o,l),i}async function eP(r,e,t,i){t["Content-Type"]="application/json";let o;try{o=await i(r,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let l=null;try{l=await o.json()}catch{}return{status:o.status,json:l}}async function uw(r,e){const t={},i=await r.contextProvider.getContext(e.limitedUseAppCheckTokens);return i.authToken&&(t.Authorization="Bearer "+i.authToken),i.messagingToken&&(t["Firebase-Instance-ID-Token"]=i.messagingToken),i.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=i.appCheckToken),t}function tP(r,e,t,i){const o=r._url(e);return nP(r,o,t,i)}async function nP(r,e,t,i){t=Sc(t);const o={data:t},l=await uw(r,i),h=i.timeout||7e4,f=Yk(h),g=await Promise.race([eP(e,o,l,r.fetchImpl),f.promise,r.cancelAllRequests]);if(f.cancel(),!g)throw new hn("cancelled","Firebase Functions instance was deleted.");const _=Ac(g.status,g.json);if(_)throw _;if(!g.json)throw new hn("internal","Response is not valid JSON object.");let E=g.json.data;if(typeof E>"u"&&(E=g.json.result),typeof E>"u")throw new hn("internal","Response is missing data field.");return{data:Ho(E)}}function rP(r,e,t,i){const o=r._url(e);return iP(r,o,t,i||{})}async function iP(r,e,t,i){var o;t=Sc(t);const l={data:t},h=await uw(r,i);h["Content-Type"]="application/json",h.Accept="text/event-stream";let f;try{f=await r.fetchImpl(e,{method:"POST",body:JSON.stringify(l),headers:h,signal:i==null?void 0:i.signal})}catch(F){if(F instanceof Error&&F.name==="AbortError"){const K=new hn("cancelled","Request was cancelled.");return{data:Promise.reject(K),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(K)}}}}}}const q=Ac(0,null);return{data:Promise.reject(q),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(q)}}}}}}let g,_;const E=new Promise((F,q)=>{g=F,_=q});(o=i==null?void 0:i.signal)===null||o===void 0||o.addEventListener("abort",()=>{const F=new hn("cancelled","Request was cancelled.");_(F)});const T=f.body.getReader(),C=sP(T,g,_,i==null?void 0:i.signal);return{stream:{[Symbol.asyncIterator](){const F=C.getReader();return{async next(){const{value:q,done:K}=await F.read();return{value:q,done:K}},async return(){return await F.cancel(),{done:!0,value:void 0}}}}},data:E}}function sP(r,e,t,i){const o=(h,f)=>{const g=h.match(Qk);if(!g)return;const _=g[1];try{const E=JSON.parse(_);if("result"in E){e(Ho(E.result));return}if("message"in E){f.enqueue(Ho(E.message));return}if("error"in E){const T=Ac(0,E);f.error(T),t(T);return}}catch(E){if(E instanceof hn){f.error(E),t(E);return}}},l=new TextDecoder;return new ReadableStream({start(h){let f="";return g();async function g(){if(i!=null&&i.aborted){const _=new hn("cancelled","Request was cancelled");return h.error(_),t(_),Promise.resolve()}try{const{value:_,done:E}=await r.read();if(E){f.trim()&&o(f.trim(),h),h.close();return}if(i!=null&&i.aborted){const C=new hn("cancelled","Request was cancelled");h.error(C),t(C),await r.cancel();return}f+=l.decode(_,{stream:!0});const T=f.split(`
`);f=T.pop()||"";for(const C of T)C.trim()&&o(C.trim(),h);return g()}catch(_){const E=_ instanceof hn?_:Ac(0,null);h.error(E),t(E)}}},cancel(){return r.cancel()}})}const g_="@firebase/functions",y_="0.12.9";/**
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
 */const oP="auth-internal",aP="app-check-internal",lP="messaging-internal";function uP(r){const e=(t,{instanceIdentifier:i})=>{const o=t.getProvider("app").getImmediate(),l=t.getProvider(oP),h=t.getProvider(lP),f=t.getProvider(aP);return new Xk(o,l,h,f,i)};Ui(new Hr(gp,e,"PUBLIC").setMultipleInstances(!0)),bn(g_,y_,r),bn(g_,y_,"esm2017")}/**
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
 */function cP(r=Pc(),e=mf){const i=ml(ut(r),gp).getImmediate({identifier:e}),o=Ef("functions");return o&&hP(i,...o),i}function hP(r,e,t){Jk(ut(r),e,t)}function dP(r,e,t){return Zk(ut(r),e)}uP();const cw={apiKey:"AIzaSyBYv_1Ef9bdTZdgp4NiSvn_nUTEm-TP0tc",authDomain:"bitacora-ditela.firebaseapp.com",projectId:"bitacora-ditela",storageBucket:"bitacora-ditela.firebasestorage.app",messagingSenderId:"632380004876",appId:"1:632380004876:web:b3a8525d9fc134a7a6ec29"},Fi=Object.values(cw).every(Boolean),Gi=Fi?V_(cw):null,yr=Gi?AA(Gi):null,Us=Gi?kk(Gi):null,__=Gi?AR(Gi):null,fP="us-central1",v_=Gi?cP(Gi,fP):null,tl="bitacora.emailForSignIn",gf="bitacora.pendingProfile",yf="bitacora/email-link-email-required";function pP(){return window.location.origin}function _f(r=window.location.href){return!Fi||!yr?!1:uS(yr,r)}function mP(r){localStorage.setItem(gf,JSON.stringify(r))}function gP(){const r=localStorage.getItem(gf);return localStorage.removeItem(gf),r?JSON.parse(r):null}function yP(){return localStorage.getItem(tl)||""}async function _P(r){if(!Fi||!yr)throw new Error("Firebase is not configured. Add variables from .env.example");const e={url:pP(),handleCodeInApp:!0};await lS(yr,r,e),localStorage.setItem(tl,r)}async function E_(r){if(!Fi||!yr||!_f(window.location.href))return null;let e=(r||localStorage.getItem(tl)||"").trim();if(!e){const i=new Error("Confirmá tu email para completar el ingreso.");throw i.code=yf,i}localStorage.setItem(tl,e);const t=await cS(yr,e,window.location.href);return localStorage.removeItem(tl),window.history.replaceState({},document.title,window.location.pathname),t.user}function Qc(){if(!Fi||!Us)throw new Error("Firebase is not configured. Add variables from .env.example")}async function yp(r,e,t){if(Qc(),v_)try{return(await dP(v_,r)(e)).data}catch(i){console.warn(`${r} callable failed, using direct Firestore fallback`,i)}return t()}async function w_(r,e){return yp("upsertProfile",e,async()=>{const t=Kc(Us,`users/${r}`),i={updatedAt:mp()};return typeof e.name=="string"&&(i.name=e.name.trim()),typeof e.email=="string"&&(i.email=e.email.trim()),typeof e.startDate=="string"&&e.startDate&&(i.startDate=e.startDate),await fp(t,i,{merge:!0}),{ok:!0}})}async function vP(r,e){const t=e.dateKey;return yp("saveEmotionEntry",e,async()=>{const i=Kc(Us,`users/${r}/emotions/${t}`);return await fp(i,{dateKey:t,pleasure:e.pleasure,energy:e.energy,updatedAt:mp()},{merge:!0}),{ok:!0}})}async function EP(r,e){return yp("saveJournalEntry",e,async()=>{const t=Kc(Us,`users/${r}/journal/${String(e.day)}`);return await fp(t,{day:e.day,data:e.data,completed:e.completed,updatedAt:mp()},{merge:!0}),{ok:!0}})}function wP(r,e,t){return Qc(),pp(Kc(Us,`users/${r}`),i=>{e(i.exists()?i.data():null)},t)}function TP(r,e,t){Qc();const i=iw(KE(Us,`users/${r}/emotions`),sw("dateKey","asc"));return pp(i,o=>{e(o.docs.map(l=>({id:l.id,...l.data()})))},t)}function IP(r,e,t){Qc();const i=iw(KE(Us,`users/${r}/journal`),sw("day","asc"));return pp(i,o=>{const l={};o.docs.forEach(h=>{const f=h.data();l[f.day]=f}),e(l)},t)}function zr(){return{title:"Presencia y consciencia",fields:[{id:"caracteristicaPropia",label:"Una característica positiva tuya (no repetir)",type:"textarea"},{id:"caracteristicaOtra",label:"Una característica positiva de otra persona (no repetir)",type:"textarea"},{id:"emocionActual",label:"Emoción actual",type:"text"},{id:"sensacionesCorporales",label:"Sensaciones corporales",type:"textarea"},{id:"respiracion",label:"Cómo está tu respiración",type:"text"},{id:"experienciaPresente",label:"Experiencia del momento presente",type:"textarea"}]}}const SP={1:{title:"Catalogate",fields:[{id:"humor",label:"Estado de humor general"},{id:"familia",label:"Familia"},{id:"amigos",label:"Amigos"},{id:"vidaSocial",label:"Vida social"},{id:"relaciones",label:"Relaciones"},{id:"trabajo",label:"Trabajo"},{id:"salud",label:"Salud"},{id:"estudio",label:"Estudio"},{id:"ejercicio",label:"Ejercicio"},{id:"alimentacion",label:"Alimentación"}],type:"rating"},2:{title:"Ves que puedo",fields:[{id:"situacion",label:"¿Cuándo fue la última vez que pensaste que no podías más y aun así continuaste?",type:"textarea"}],type:"text"},3:{title:"Mentalidad de crecimiento",fields:[{id:"deberiaSer",label:'Algo en lo que creías que "deberías ser bueno"',type:"textarea"},{id:"noSalio",label:'Algo que no te salió y creíste que era porque "no eras bueno"',type:"textarea"}],type:"text"},4:{title:"Crítica y vergüenza",fields:[{id:"critica",label:"Una crítica que te dio vergüenza",type:"textarea"},{id:"aprendizaje",label:"¿Qué aprendiste?",type:"textarea"}],type:"text"},5:{title:"Atención plena",fields:[{id:"lugar",label:"Lugar elegido",type:"text"},{id:"sentimiento",label:"¿Cómo te sentiste al terminar?",type:"textarea"}],type:"text"},6:{title:"Compromiso físico",fields:[{id:"compromiso",label:"Me comprometo a...",type:"textarea",placeholder:"Describe la actividad física o deporte"}],type:"text"},7:{title:"No me salió",fields:[{id:"quePaso",label:"Qué no salió",type:"textarea"},{id:"queBien",label:"Qué hiciste bien",type:"textarea"},{id:"repetir",label:"Qué repetirías en otros ámbitos",type:"textarea"}],type:"text"},8:{title:"Actividades que me hacen bien",fields:[{id:"hoy",label:"Hoy",type:"textarea"},{id:"semana",label:"Esta semana",type:"textarea"},{id:"mes",label:"Este mes",type:"textarea"}],type:"text"},9:{title:"Estrés consciente",fields:[{id:"estres",label:"¿Con qué te vas a estresar esta semana?",type:"textarea"}],type:"text"},10:{title:"Kit de auto-calma",fields:[{id:"kit",label:"¿Qué objetos o recursos elegís para calmarte?",type:"textarea"}],type:"text"},11:{title:"Detectar pensamientos negativos",fields:[{id:"pensamientosNegativos",label:"Detectar pensamientos negativos",type:"textarea"},{id:"pensamientosNuevos",label:"Crear pensamientos nuevos y precisos para cada situación",type:"textarea"}],type:"text"},12:{title:"Escaneo corporal",fields:[{id:"escaneo",label:"Escaneo corporal completo",type:"textarea",placeholder:"Describe tu experiencia durante el escaneo..."},{id:"sensaciones",label:"¿Qué sentiste durante el ejercicio?",type:"textarea"}],type:"text"},13:{title:"Registro de emociones",fields:[{id:"placenteras",label:"Emociones placenteras",type:"textarea"},{id:"neutras",label:"Emociones neutras",type:"textarea"},{id:"displacenteras",label:"Emociones displacenteras",type:"textarea"},{id:"planAccion",label:"Plan de acción",type:"textarea"}],type:"text"},14:{title:"Respiración 7/11 y cualidades",fields:[{id:"respiracion",label:"Experiencia con respiración 7/11",type:"textarea"},{id:"cualidades",label:"Escribe 5 cualidades positivas tuyas",type:"textarea",placeholder:`1.
2.
3.
4.
5.`}],type:"text"},15:{title:"Perdón y respiración al cuadrado",fields:[{id:"perdon",label:"Perdonar un error del pasado",type:"textarea"},{id:"respiracion",label:"Respiración al cuadrado",type:"textarea"},{id:"experiencia",label:"¿Qué experimentaste?",type:"textarea"}],type:"text"},16:{title:"Preocupado vs ocupado",fields:[{id:"preocupacion",label:"Preocupado vs ocupado",type:"textarea"},{id:"vidaPersonal",label:"Hacer algo distinto - Vida personal",type:"textarea"},{id:"vidaProfesional",label:"Hacer algo distinto - Vida profesional",type:"textarea"}],type:"text"},17:{title:"Ejercicio del color",fields:[{id:"colorFavorito",label:"Tu color favorito",type:"text"},{id:"detecciones",label:"Detectar tu color favorito durante el día",type:"textarea",placeholder:"Anota cada vez que veas tu color..."}],type:"text"},18:{title:"Si yo puedo...",fields:[{id:"frases",label:'Completar 10 frases: "Si yo puedo ___, entonces puedo ___"',type:"textarea",placeholder:`1. Si yo puedo..., entonces puedo...
2. Si yo puedo..., entonces puedo...
...`}],type:"text"},19:{title:"Resolver un conflicto",fields:[{id:"conflicto",label:"Describe el conflicto",type:"textarea"},{id:"soluciones",label:"5 soluciones posibles",type:"textarea",placeholder:`1.
2.
3.
4.
5.`},{id:"prosContras",label:"Pros y contras de cada solución",type:"textarea"}],type:"text"},20:{title:"Conociendo mi cuerpo",fields:[{id:"bitacora",label:"Bitácora corporal guiada",type:"textarea",placeholder:"Registra las sensaciones en cada parte de tu cuerpo..."}],type:"text"},21:{title:"Interocepción",fields:[{id:"latidos",label:"Escuchar y registrar latidos del corazón",type:"textarea",placeholder:"Describe tu experiencia escuchando tus latidos..."}],type:"text"},22:{...zr(),type:"presence"},23:{...zr(),type:"presence"},24:{...zr(),type:"presence"},25:{...zr(),type:"presence"},26:{...zr(),type:"presence"},27:{...zr(),type:"presence"},28:{...zr(),type:"presence"},29:{...zr(),type:"presence"},30:{...zr(),type:"presence"},31:{title:"Ponerse cómodo",fields:[{id:"postura",label:"Describe tu postura más cómoda",type:"textarea"},{id:"sensaciones",label:"¿Qué sientes en tu cuerpo?",type:"textarea"}],type:"text"},32:{title:"UFA",fields:[{id:"queSalioMal",label:"¿Qué salió mal?",type:"textarea"},{id:"comoTeSentiste",label:"¿Cómo te sentiste?",type:"textarea"}],type:"text"},33:{title:"Tengo / Hago",fields:[{id:"nuncaTuve",label:"Lo que nunca tuviste",type:"textarea"},{id:"nuncaHice",label:"Lo que nunca hiciste",type:"textarea"}],type:"text"},34:{title:"Frases limitantes",fields:[{id:"fraseLimitante",label:"Una frase limitante que te decís",type:"textarea"},{id:"evidencias",label:"Evidencias reales que contradicen esa frase",type:"textarea"}],type:"text"},35:{title:"Redescubrir un lugar",fields:[{id:"lugar",label:"Lugar habitual elegido",type:"text"},{id:"queViste",label:"¿Qué viste diferente?",type:"textarea"}],type:"text"},36:{title:"Ejercicio del sabor",fields:[{id:"alimento",label:"¿Qué comiste?",type:"text"},{id:"experiencia",label:"Describe la experiencia sensorial",type:"textarea"}],type:"text"},37:{title:"Chequeo emocional",fields:[{id:"manana",label:"Emoción de la mañana",type:"text"},{id:"tarde",label:"Emoción de la tarde",type:"text"},{id:"noche",label:"Emoción de la noche",type:"text"},{id:"reflexion",label:"Reflexión del día",type:"textarea"}],type:"text"},38:{title:"Detección de patrones",fields:[{id:"patronDetectado",label:"Patrón repetido que identificaste",type:"textarea"},{id:"cuandoOcurre",label:"¿Cuándo ocurre?",type:"textarea"}],type:"text"},39:{title:"Cambio consciente",fields:[{id:"reaccionAutomatica",label:"Reacción automática que querés cambiar",type:"textarea"},{id:"nuevaRespuesta",label:"Nueva respuesta elegida",type:"textarea"},{id:"resultado",label:"¿Qué pasó cuando lo intentaste?",type:"textarea"}],type:"text"},40:{title:"Integración",fields:[{id:"queEntiendo",label:"¿Qué estás entendiendo de vos?",type:"textarea"},{id:"aprendizajes",label:"Aprendizajes hasta ahora",type:"textarea"}],type:"text"},41:{title:"Identidad real vs imagen",fields:[{id:"comoMeVeo",label:"Cómo me veo",type:"textarea"},{id:"comoMeVenOtros",label:"Cómo creo que me ven otros",type:"textarea"},{id:"diferencias",label:"Diferencias entre ambas",type:"textarea"}],type:"text"},42:{title:"Qué ocultás",fields:[{id:"queOculto",label:"¿Qué parte de vos ocultás?",type:"textarea"},{id:"porQue",label:"¿Por qué?",type:"textarea"}],type:"text"},43:{title:"Qué te da orgullo",fields:[{id:"orgullo",label:"¿De qué estás orgulloso/a?",type:"textarea"},{id:"porQue",label:"¿Por qué te genera orgullo?",type:"textarea"}],type:"text"},44:{title:"Qué evitás",fields:[{id:"queEvito",label:"¿Qué situaciones o conversaciones evitás?",type:"textarea"},{id:"quePassaria",label:"¿Qué pasaría si no las evitaras?",type:"textarea"}],type:"text"},45:{title:"Bajo presión",fields:[{id:"comoReacciono",label:"¿Cómo reaccionás bajo presión?",type:"textarea"},{id:"queRevela",label:"¿Qué revela esto de vos?",type:"textarea"}],type:"text"},46:{title:"Autenticidad",fields:[{id:"cuandoSoyAutentico",label:"¿Cuándo sos más auténtico/a?",type:"textarea"},{id:"cuandoNo",label:"¿Cuándo no lo sos?",type:"textarea"}],type:"text"},47:{title:"Coherencia personal",fields:[{id:"valores",label:"Tus valores principales",type:"textarea"},{id:"coherencia",label:"¿Tus acciones están alineadas con ellos?",type:"textarea"}],type:"text"},48:{title:"Zona de confort",fields:[{id:"dentroZona",label:"¿Qué está dentro de tu zona de confort?",type:"textarea"},{id:"fueraZona",label:"¿Qué te gustaría hacer que está fuera?",type:"textarea"}],type:"text"},49:{title:"Relación contigo mismo/a",fields:[{id:"comoMeTrato",label:"¿Cómo me trato a mí mismo/a?",type:"textarea"},{id:"queNecesito",label:"¿Qué necesito de mí?",type:"textarea"}],type:"text"},50:{title:"Síntesis de identidad",fields:[{id:"quienSoy",label:"¿Quién soy realmente?",type:"textarea"},{id:"quienQuieroSer",label:"¿Quién quiero ser?",type:"textarea"}],type:"text"},51:{title:"Aprendizajes clave",fields:[{id:"aprendizajes",label:"Principales aprendizajes hasta ahora",type:"textarea"}],type:"text"},52:{title:"Cambios mentales",fields:[{id:"cambiosMentales",label:"¿Qué cambió en tu forma de pensar?",type:"textarea"}],type:"text"},53:{title:"Cambios corporales",fields:[{id:"cambiosCorporales",label:"¿Qué cambió en tu relación con tu cuerpo?",type:"textarea"}],type:"text"},54:{title:"Herramientas que funcionaron",fields:[{id:"herramientas",label:"¿Qué ejercicios o herramientas te funcionaron mejor?",type:"textarea"}],type:"text"},55:{title:"Hábitos a sostener",fields:[{id:"habitos",label:"¿Qué hábitos querés sostener?",type:"textarea"},{id:"como",label:"¿Cómo vas a hacerlo?",type:"textarea"}],type:"text"},56:{title:"Desafíos pendientes",fields:[{id:"desafios",label:"¿Qué desafíos quedan por delante?",type:"textarea"}],type:"text"},57:{title:"Proyección futura",fields:[{id:"comoMeVeoFuturo",label:"¿Cómo te ves en 3 meses?",type:"textarea"},{id:"queHaras",label:"¿Qué harás para llegar ahí?",type:"textarea"}],type:"text"},58:{title:"Agradecimientos",fields:[{id:"agradecimientos",label:"¿A quién o qué agradecés de este proceso?",type:"textarea"}],type:"text"},59:{title:"Preparación para el cierre",fields:[{id:"reflexion",label:"Reflexión final antes del último día",type:"textarea"}],type:"text"},60:{title:"Cierre final",fields:[{id:"sintesis",label:"Síntesis del proceso completo",type:"textarea"},{id:"queTeLlevas",label:"¿Qué te llevás?",type:"textarea"},{id:"queSigue",label:"¿Qué sigue ahora?",type:"textarea"}],type:"text"}};function hw(r){return SP[r]||{title:`Reflexion del dia ${r}`,type:"text",fields:[{id:"reflexion",label:"Escribe tu reflexion del dia",type:"textarea"}]}}const AP="/material-extra/WhatsApp%20Image%202026-02-11%20at%2023.40.08.jpeg",RP=["WhatsApp Video 2026-02-11 at 23.39.48.mp4","WhatsApp Video 2026-02-11 at 23.39.57.mp4","WhatsApp Video 2026-02-11 at 23.40.07.mp4","WhatsApp Video 2026-02-11 at 23.40.16.mp4","WhatsApp Video 2026-02-11 at 23.40.22.mp4","WhatsApp Video 2026-02-11 at 23.40.28.mp4","WhatsApp Video 2026-02-11 at 23.40.29.mp4","WhatsApp Video 2026-02-11 at 23.40.30.mp4"],Ud=RP.map((r,e)=>({id:`video-${e+1}`,title:`Meditacion guiada ${e+1}`,fileName:r,storagePath:`material-extra/${r}`,src:encodeURI(`/material-extra/${r}`),poster:AP})),CP=[{key:"emotion",label:"Emocionómetro"},{key:"calendar",label:"Bitácora"},{key:"material",label:"Material Extra"}];function kP(r){const e=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],t=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];return`${e[r.getDay()]}, ${r.getDate()} de ${t[r.getMonth()]}`}function T_(r){return r.toISOString().split("T")[0]}function PP(r){if(!r)return 1;const e=new Date(r),t=new Date,i=new Date(e.getFullYear(),e.getMonth(),e.getDate()),l=new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-i.getTime(),h=Math.floor(l/(1e3*60*60*24))+1;return Math.max(1,Math.min(60,h))}function NP(r){let e=0;for(let t=60;t>=1;t-=1){const i=r[t];if(i!=null&&i.completed)e+=1;else if(e>0)break}return e}function dw(){return{situacion:"",cuerpo:"",pensamientos:"",emociones:""}}const xP=[{key:"situacion",label:"SITUACIÓN",placeholder:"Describe la situación..."},{key:"cuerpo",label:"CUERPO",placeholder:"¿Qué sentiste en tu cuerpo?"},{key:"pensamientos",label:"PENSAMIENTOS DURANTE",placeholder:"¿Qué pensabas?"},{key:"emociones",label:"EMOCIONES DURANTE Y DESPUÉS",placeholder:"¿Qué emociones experimentaste?"}],DP=[{key:"visualizacion",label:"VISUALIZACIÓN",placeholder:"Describe la situación..."},{key:"pensamientosNuevos",label:"PENSAMIENTOS NUEVOS / PRECISOS",placeholder:"¿Qué pensamientos nuevos introduces?"},{key:"intento",label:"INTENTAR USARLOS EN LA SITUACIÓN REAL",placeholder:"¿Cómo los usaste?"},{key:"cambioEmocion",label:"¿CAMBIÓ LA EMOCIÓN O SU INTENSIDAD?",placeholder:"Describe..."},{key:"cambioCuerpo",label:"¿CAMBIÓ ALGUNA SEÑAL DEL CUERPO?",placeholder:"Describe..."},{key:"menosIncomoda",label:"¿LA SITUACIÓN FUE MENOS INCÓMODA?",placeholder:"Describe..."},{key:"masEficaz",label:"¿ACTUÉ O ME SENTÍ MÁS EFICAZ?",placeholder:"Describe..."}];function fw(){return{visualizacion:"",pensamientosNuevos:"",intento:"",cambioEmocion:"",cambioCuerpo:"",menosIncomoda:"",masEficaz:""}}function I_(r,e,t){const i=Array.isArray(r)?[...r]:[];for(;i.length<e;)i.push(t());return i}function OP(r,e){const t=e||{};return{pleasure:t.pleasure??5,energy:t.energy??5,gratitude:t.gratitude||"",situations:I_(t.situations,3,dw),cognitiveWork:I_(t.cognitiveWork,3,fw),variableExercise:t.variableExercise||{},dayNumber:r}}function Gu(r){return typeof r=="string"&&r.trim().length>0}function bP(r,e){const t=hw(r);let i=!1;if(t.type==="rating"?i=!0:i=t.fields.some(l=>Gu(e.variableExercise[l.id])),r<=10){const l=e.situations.filter(h=>Object.values(h).some(Gu)).length;return Gu(e.gratitude)&&l>=3&&i}return e.cognitiveWork.filter(l=>Object.values(l).some(Gu)).length>=3&&i}function jd(r,e){const t=localStorage.getItem(r);return t?JSON.parse(t):e}function zd(r,e){localStorage.setItem(r,JSON.stringify(e))}function VP(r,e){var o,l;const t=(o=r==null?void 0:r.name)==null?void 0:o.trim();if(t)return t;const i=(l=e==null?void 0:e.email)==null?void 0:l.trim();return i||"Usuario"}function LP(r){var e;return(((e=r==null?void 0:r.trim())==null?void 0:e.charAt(0))||"U").toUpperCase()}function MP(){const r="bitacora.guestMode",[e,t]=be.useState("emotion"),[i,o]=be.useState(""),[l,h]=be.useState(!0),[f,g]=be.useState(null),[_,E]=be.useState(()=>localStorage.getItem(r)==="1"),[T,C]=be.useState(null),[F,q]=be.useState({pleasure:5,energy:5}),[K,B]=be.useState([]),[pe,de]=be.useState({}),[ae,me]=be.useState(null),[Pe,ve]=be.useState(null),[P,I]=be.useState({name:"",email:""}),[R,N]=be.useState(!1),[D]=be.useState(()=>gP()),[b,A]=be.useState(Ud),[Ke,Tt]=be.useState(Ud[0]),[mt,je]=be.useState(!1),[ee,ge]=be.useState(!1),[ne,O]=be.useState(!1),[$,fe]=be.useState(!1),[Re,Ce]=be.useState(!1),[xe,Oe]=be.useState(!1),[ze,$e]=be.useState(!1),ct=be.useMemo(()=>PP(T==null?void 0:T.startDate),[T==null?void 0:T.startDate]),Vn=!!(T!=null&&T.startDate),Jr=be.useMemo(()=>NP(pe),[pe]),en=be.useMemo(()=>ae?hw(ae):null,[ae]),Ln=be.useMemo(()=>VP(T,f),[T,f]),Ar=be.useMemo(()=>LP(Ln),[Ln]),Rr=ee||xe;be.useEffect(()=>{if(_&&_f()){E(!1),localStorage.removeItem(r),o("Magic-link detectado. Modo invitado desactivado.");return}if(_){h(!1),C(jd("bitacora.guest.profile",{name:"Invitado/a",email:"",startDate:null})),B(jd("bitacora.guest.emotions",[])),de(jd("bitacora.guest.journal",{}));return}if(!Fi||!yr){h(!1);return}_f()&&(Oe(!0),$e(!1),E_().catch(te=>{if((te==null?void 0:te.code)===yf){$e(!0),I(re=>({...re,email:re.email||(D==null?void 0:D.email)||yP()}));return}o(te.message||"No se pudo completar el ingreso con magic-link.")}).finally(()=>{Oe(!1)}));const G=fS(yr,te=>{g(te),h(!1)});return()=>G()},[_,r,D]),be.useEffect(()=>{!f||!_||(E(!1),localStorage.removeItem(r),o("Sesión iniciada. Modo invitado desactivado."))},[_,r,f]),be.useEffect(()=>{if(!f||_)return;const G=wP(f.uid,ke=>{C(ke||{name:"",email:f.email||"",startDate:null})},ke=>o(ke.message)),te=TP(f.uid,ke=>{B(ke)},ke=>o(ke.message)),re=IP(f.uid,ke=>{de(ke)},ke=>o(ke.message));return()=>{G(),te(),re()}},[f,_]),be.useEffect(()=>{!f||!D||_||w_(f.uid,{name:D.name||"",email:f.email||D.email||""}).catch(G=>{o(G.message||"No se pudo guardar el perfil.")})},[f,D,_]),be.useEffect(()=>{if(!i)return;const G=setTimeout(()=>o(""),2800);return()=>clearTimeout(G)},[i]),be.useEffect(()=>{if(!__)return;let G=!1;return Promise.all(Ud.map(async te=>{try{const re=await IR(SR(__,te.storagePath));return{...te,src:re}}catch{return te}})).then(te=>{G||(A(te),Tt(te[0]))}),()=>{G=!0}},[]),be.useEffect(()=>{if(!mt)return;function G(te){te.key==="Escape"&&je(!1)}return window.addEventListener("keydown",G),()=>window.removeEventListener("keydown",G)},[mt]);function Qi(G){var re;const te=(re=pe[G])==null?void 0:re.data;ve(OP(G,te)),me(G)}function Zr(){me(null),ve(null)}function ei(G,te,re){ve(ke=>{const Je={...ke,situations:[...ke.situations]};return Je.situations[G]={...Je.situations[G],[te]:re},Je})}function Mn(G,te,re){ve(ke=>{const Je={...ke,cognitiveWork:[...ke.cognitiveWork]};return Je.cognitiveWork[G]={...Je.cognitiveWork[G],[te]:re},Je})}function dn(G,te){ve(re=>({...re,variableExercise:{...re.variableExercise,[G]:te}}))}async function Yi(){if(ne)return;const G=T_(new Date),te={dateKey:G,pleasure:Number(F.pleasure),energy:Number(F.energy)};O(!0);try{if(_){const re=K.filter(ke=>ke.dateKey!==G).concat(te).sort((ke,Je)=>ke.dateKey.localeCompare(Je.dateKey));B(re),zd("bitacora.guest.emotions",re),o("Dia guardado en modo invitado");return}if(!f){o("Primero iniciá sesión.");return}await vP(f.uid,te),o("Dia guardado")}catch(re){o(re.message||"No se pudo guardar el emocionómetro.")}finally{O(!1)}}async function ti(){if($||!ae||!Pe)return;const G=new Date().toISOString(),te=bP(ae,Pe),re=te&&!(T!=null&&T.startDate),ke={day:ae,data:Pe,completed:te};fe(!0);try{if(_){const Je={...pe,[ae]:ke};if(de(Je),zd("bitacora.guest.journal",Je),re){const ri={...T||{name:"Invitado/a",email:""},startDate:G};C(ri),zd("bitacora.guest.profile",ri)}o("Día guardado en modo invitado."),Zr();return}if(!f){o("Primero iniciá sesión.");return}await EP(f.uid,ke),re&&await w_(f.uid,{startDate:G}),o("Bitácora guardada."),Zr()}catch(Je){o(Je.message||"No se pudo guardar la bitácora.")}finally{fe(!1)}}async function ni(G){if(G.preventDefault(),ee)return;if(!Fi){o("Falta configurar Firebase en .env.");return}const te=P.email.trim();if(!te){o("Ingresá tu email para continuar.");return}ge(!0);try{mP({name:P.name.trim(),email:te}),await _P(te),N(!0),o("Te enviamos un magic-link. Abrilo en este mismo dispositivo.")}catch(re){o(re.message||"No se pudo enviar el magic-link.")}finally{ge(!1)}}async function Xi(G){if(G.preventDefault(),xe)return;const te=P.email.trim();if(!te){o("Ingresá el mismo email que usaste para recibir el magic-link.");return}Oe(!0);try{$e(!1),await E_(te),o("Ingreso completado.")}catch(re){if((re==null?void 0:re.code)===yf){$e(!0),o("Confirmá tu email para continuar.");return}$e(!0),o(re.message||"No se pudo completar el ingreso con magic-link.")}finally{Oe(!1)}}async function ht(){if(!Re){je(!1),Ce(!0);try{if(_){E(!1),localStorage.removeItem(r),C(null),B([]),de({}),me(null),ve(null),t("emotion"),o("Sesión cerrada.");return}if(!yr||!f){o("No hay una sesión activa.");return}await pS(yr),C(null),B([]),de({}),me(null),ve(null),t("emotion"),o("Sesión cerrada.")}catch(G){o(G.message||"No se pudo cerrar la sesión.")}finally{Ce(!1)}}}const at=T_(new Date),Fn=[...K.filter(G=>G.dateKey!==at).map(G=>({x:(G.pleasure-1)/9*100,y:(G.energy-1)/9*100,id:G.dateKey,isLive:!1})),{x:(F.pleasure-1)/9*100,y:(F.energy-1)/9*100,id:`live-${at}`,isLive:!0}];if(l)return j.jsx("div",{className:"screen-center",children:"Cargando..."});if(!_&&!f){const G=ze;return j.jsxs("div",{className:"app-shell auth-only",children:[j.jsx(S_,{}),j.jsx("main",{className:"section active profile-view",children:j.jsxs("div",{className:"profile-card",children:[j.jsx("h1",{children:G?"Confirmá tu email":j.jsxs(j.Fragment,{children:["Bienvenidos a",j.jsx("br",{}),"Desafíos de Liderazgo"]})}),j.jsx("p",{children:G?"Usá el mismo email con el que recibiste el magic-link para completar el ingreso.":"Crea tu perfil para comenzar"}),j.jsxs("form",{className:"profile-form",onSubmit:G?Xi:ni,children:[!G&&j.jsxs(j.Fragment,{children:[j.jsx("label",{htmlFor:"name",children:"Nombre"}),j.jsx("input",{id:"name",type:"text",value:P.name,placeholder:"Tu nombre",disabled:Rr,onChange:te=>I(re=>({...re,name:te.target.value}))})]}),j.jsx("label",{htmlFor:"email",children:"Email"}),j.jsx("input",{id:"email",type:"email",value:P.email,placeholder:"tu@email.com",disabled:Rr,onChange:te=>I(re=>({...re,email:te.target.value})),required:!0}),j.jsx("button",{type:"submit",className:"btn btn-primary",disabled:Rr,children:G?j.jsx(Ka,{loading:xe,loadingText:"Confirmando...",children:"Confirmar ingreso"}):j.jsx(Ka,{loading:ee,loadingText:"Enviando...",children:"Comenzar"})})]}),!G&&R&&j.jsx("p",{className:"auth-help",children:"Revisá tu email y abrí el magic-link en este mismo navegador/dispositivo."}),!G&&!Fi&&j.jsx("p",{className:"auth-help warning",children:"Falta Firebase config en `.env`."})]})}),j.jsx(A_,{message:i})]})}return j.jsxs("div",{className:"app-shell",children:[j.jsx(S_,{avatarInitial:Ar,onAvatarClick:()=>je(!0)}),j.jsxs("main",{className:"content-area",children:[j.jsxs("section",{className:`section ${e==="emotion"?"active":""}`,children:[j.jsxs("header",{className:"section-header",children:[j.jsx("h1",{children:"¿Cómo te sentiste hoy?"}),j.jsx("p",{children:kP(new Date)})]}),j.jsxs("div",{className:"question-block",children:[j.jsx("label",{htmlFor:"pleasureSlider",children:"¿Qué tan bien te sentiste hoy?"}),j.jsx("input",{id:"pleasureSlider",className:"slider",type:"range",min:"1",max:"10",value:F.pleasure,onChange:G=>q(te=>({...te,pleasure:Number(G.target.value)}))}),j.jsxs("div",{className:"scale-labels",children:[j.jsx("span",{children:"1"}),j.jsx("span",{children:"10"})]}),j.jsx("div",{className:"value-display",children:F.pleasure})]}),j.jsxs("div",{className:"question-block",children:[j.jsx("label",{htmlFor:"energySlider",children:"¿Qué nivel de energía tuviste hoy?"}),j.jsx("input",{id:"energySlider",className:"slider",type:"range",min:"1",max:"10",value:F.energy,onChange:G=>q(te=>({...te,energy:Number(G.target.value)}))}),j.jsxs("div",{className:"scale-labels",children:[j.jsx("span",{children:"1"}),j.jsx("span",{children:"10"})]}),j.jsx("div",{className:"value-display",children:F.energy})]}),j.jsxs("div",{className:"chart-panel",children:[j.jsx("p",{children:"Tu mapa emocional"}),j.jsxs("div",{className:"chart-grid",children:[j.jsx("span",{className:"chart-axis-label-y",children:"Energía"}),j.jsx("span",{className:"chart-axis-label-x",children:"Placer"}),Fn.map(G=>j.jsx("span",{className:`chart-point ${G.isLive?"live":""}`,style:{left:`${G.x}%`,bottom:`${G.y}%`}},G.id))]})]}),j.jsx("button",{className:"btn btn-primary",onClick:Yi,disabled:ne,children:j.jsx(Ka,{loading:ne,loadingText:"Guardando...",children:"Guardar día"})})]}),j.jsxs("section",{className:`section ${e==="calendar"?"active":""}`,children:[!ae&&j.jsxs(j.Fragment,{children:[j.jsxs("header",{className:"section-header",children:[j.jsx("h1",{children:"60 días con vos mismo"}),j.jsx("p",{children:"Reto de autoconocimiento"}),j.jsxs("div",{className:"pill",children:["Racha: ",Jr," días"]})]}),j.jsx("div",{className:"calendar-grid",children:Array.from({length:60},(G,te)=>{const re=te+1,ke=pe[re],Je=["day-cell"];return ke!=null&&ke.completed?Je.push("completed"):Vn&&re<ct&&Je.push("incomplete"),re===ct&&Je.push("today"),j.jsx("button",{className:Je.join(" "),onClick:()=>Qi(re),children:re},re)})})]}),ae&&Pe&&j.jsxs("div",{className:"day-detail",children:[j.jsx("button",{className:"back-link",onClick:Zr,children:"← VOLVER"}),j.jsxs("h2",{children:["Día ",ae]}),ae<=10&&j.jsxs("div",{className:"exercise-block",children:[j.jsx("h3",{children:"Ejercicios diarios"}),j.jsx("h4",{className:"exercise-index",children:"1. Gratitud"}),j.jsxs("div",{className:"field-wrap",children:[j.jsx("label",{className:"micro-label",children:"HOY AGRADEZCO A... / POR..."}),j.jsx("textarea",{value:Pe.gratitude,onChange:G=>ve(te=>({...te,gratitude:G.target.value})),placeholder:"Escribe aquí..."})]}),j.jsx("h4",{className:"exercise-index",children:"2. Situaciones incómodas (mínimo 3)"}),j.jsxs("div",{className:"field-wrap",children:[Pe.situations.map((G,te)=>j.jsxs("div",{className:"card-row",children:[j.jsxs("strong",{children:["SITUACIÓN ",te+1]}),xP.map(re=>j.jsxs("div",{className:"card-field",children:[j.jsx("label",{className:"micro-label",children:re.label}),j.jsx("textarea",{placeholder:re.placeholder,value:G[re.key],onChange:ke=>ei(te,re.key,ke.target.value)})]},re.key))]},`s-${te}`)),j.jsx("button",{type:"button",className:"btn btn-outline",onClick:()=>ve(G=>({...G,situations:[...G.situations,dw()]})),children:"+ AÑADIR OTRA SITUACIÓN"})]})]}),ae>=11&&j.jsxs("div",{className:"exercise-block",children:[j.jsx("h3",{children:"Situaciones incómodas - Trabajo cognitivo"}),j.jsxs("div",{className:"field-wrap",children:[Pe.cognitiveWork.map((G,te)=>j.jsxs("div",{className:"card-row",children:[j.jsxs("strong",{children:["SITUACIÓN ",te+1]}),DP.map(re=>j.jsxs("div",{className:"card-field",children:[j.jsx("label",{className:"micro-label",children:re.label}),j.jsx("textarea",{placeholder:re.placeholder,value:G[re.key],onChange:ke=>Mn(te,re.key,ke.target.value)})]},re.key))]},`c-${te}`)),j.jsx("button",{type:"button",className:"btn btn-outline",onClick:()=>ve(G=>({...G,cognitiveWork:[...G.cognitiveWork,fw()]})),children:"+ AÑADIR OTRA SITUACIÓN"})]})]}),j.jsxs("div",{className:"exercise-block",children:[j.jsx("h3",{children:"Ejercicio del día"}),j.jsx("h4",{children:en.title}),en.type==="rating"&&en.fields.map(G=>{const te=Pe.variableExercise[G.id]??5;return j.jsxs("div",{className:"field-wrap",children:[j.jsx("label",{children:G.label}),j.jsx("input",{className:"slider",type:"range",min:"1",max:"10",value:te,onChange:re=>dn(G.id,Number(re.target.value))}),j.jsx("div",{className:"value-display small",children:te})]},G.id)}),en.type!=="rating"&&en.fields.map(G=>{const te=Pe.variableExercise[G.id]||"";return G.type==="textarea"?j.jsxs("div",{className:"field-wrap",children:[j.jsx("label",{children:G.label}),j.jsx("textarea",{value:te,onChange:re=>dn(G.id,re.target.value)})]},G.id):j.jsxs("div",{className:"field-wrap",children:[j.jsx("label",{children:G.label}),j.jsx("input",{type:"text",value:te,onChange:re=>dn(G.id,re.target.value)})]},G.id)})]}),j.jsx("button",{className:"btn btn-primary",onClick:ti,disabled:$,children:j.jsx(Ka,{loading:$,loadingText:"Guardando...",children:"Guardar día"})})]})]}),j.jsxs("section",{className:`section ${e==="material"?"active":""}`,children:[j.jsxs("header",{className:"section-header",children:[j.jsx("h1",{children:"Material Extra"}),j.jsx("p",{children:"Meditaciones guiadas"})]}),j.jsx("div",{className:"material-intro",children:"Elegí una meditación y reproducila cuando lo necesites."}),j.jsxs("div",{className:"media-player-block",children:[j.jsxs("div",{className:"media-player-head",children:[j.jsx("span",{children:"Reproduciendo"}),j.jsx("h3",{children:Ke.title})]}),j.jsx("video",{controls:!0,preload:"metadata",playsInline:!0,src:Ke.src},Ke.id)]}),j.jsx("div",{className:"media-list",children:b.map(G=>j.jsxs("button",{className:`media-list-item ${Ke.id===G.id?"active":""}`,onClick:()=>Tt(G),children:[j.jsx("video",{className:"media-thumb-video",src:G.src,muted:!0,playsInline:!0,preload:"auto",onLoadedData:te=>{const re=te.currentTarget;if(re.currentTime===0)try{re.currentTime=.05}catch{}},"aria-hidden":"true"}),j.jsxs("div",{className:"media-list-copy",children:[j.jsx("strong",{children:G.title}),j.jsx("span",{children:"Meditación guiada"})]}),j.jsx("span",{className:"media-list-action",children:"Ver"})]},G.id))})]})]}),j.jsx("nav",{className:"bottom-nav",children:CP.map(G=>j.jsx("button",{className:e===G.key?"active":"",onClick:()=>t(G.key),children:G.label},G.key))}),mt&&j.jsx(FP,{name:Ln,avatarInitial:Ar,isSigningOut:Re,onClose:()=>je(!1),onSignOut:ht}),j.jsx(A_,{message:i})]})}function S_({avatarInitial:r,onAvatarClick:e}){return j.jsxs("header",{className:"brand-header",children:[j.jsx("div",{className:"left-brand brand-logo",children:j.jsx("img",{src:"/logo-di-tela.jpeg",alt:"Universidad Torcuato Di Tella"})}),j.jsx("div",{className:"separator",children:"x"}),j.jsx("div",{className:"right-brand",children:"Estanislao Bachrach"}),e&&j.jsx("button",{type:"button",className:"avatar-button",onClick:e,"aria-label":"Abrir menú",children:r})]})}function FP({name:r,avatarInitial:e,isSigningOut:t,onClose:i,onSignOut:o}){return j.jsx("div",{className:"menu-overlay",role:"dialog","aria-modal":"true","aria-label":"Menú",children:j.jsxs("div",{className:"menu-panel",children:[j.jsx("div",{className:"menu-head",children:j.jsx("button",{type:"button",className:"menu-close",onClick:i,"aria-label":"Cerrar menú",disabled:t,children:"×"})}),j.jsxs("div",{className:"menu-user",children:[j.jsx("span",{className:"menu-avatar",children:e}),j.jsx("p",{children:r})]}),j.jsx("div",{className:"menu-actions",children:j.jsx("button",{type:"button",className:"menu-action",onClick:o,disabled:t,children:j.jsx(Ka,{loading:t,loadingText:"Saliendo...",children:"Salir"})})})]})})}function Ka({loading:r,loadingText:e,children:t}){return j.jsxs("span",{className:"button-label",children:[r&&j.jsx("span",{className:"button-spinner","aria-hidden":"true"}),j.jsx("span",{children:r?e:t})]})}function A_({message:r}){return j.jsx("div",{className:`status-toast ${r?"show":""}`,children:r||" "})}CT.createRoot(document.getElementById("root")).render(j.jsx(wT.StrictMode,{children:j.jsx(MP,{})}));
