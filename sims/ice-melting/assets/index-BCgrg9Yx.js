(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Jf={exports:{}},No={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function wy(){if(Eg)return No;Eg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return No.Fragment=t,No.jsx=i,No.jsxs=i,No}var Tg;function Dy(){return Tg||(Tg=1,Jf.exports=wy()),Jf.exports}var At=Dy(),$f={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function Uy(){if(bg)return ie;bg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),y=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,x={};function _(O,J,mt){this.props=O,this.context=J,this.refs=x,this.updater=mt||E}_.prototype.isReactComponent={},_.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function B(){}B.prototype=_.prototype;function L(O,J,mt){this.props=O,this.context=J,this.refs=x,this.updater=mt||E}var D=L.prototype=new B;D.constructor=L,R(D,_.prototype),D.isPureReactComponent=!0;var q=Array.isArray;function I(){}var P={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function w(O,J,mt){var W=mt.ref;return{$$typeof:o,type:O,key:J,ref:W!==void 0?W:null,props:mt}}function C(O,J){return w(O.type,J,O.props)}function F(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function rt(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(mt){return J[mt]})}var at=/\/+/g;function ft(O,J){return typeof O=="object"&&O!==null&&O.key!=null?rt(""+O.key):J.toString(36)}function ht(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(I,I):(O.status="pending",O.then(function(J){O.status==="pending"&&(O.status="fulfilled",O.value=J)},function(J){O.status==="pending"&&(O.status="rejected",O.reason=J)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function N(O,J,mt,W,lt){var xt=typeof O;(xt==="undefined"||xt==="boolean")&&(O=null);var yt=!1;if(O===null)yt=!0;else switch(xt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(O.$$typeof){case o:case t:yt=!0;break;case g:return yt=O._init,N(yt(O._payload),J,mt,W,lt)}}if(yt)return lt=lt(O),yt=W===""?"."+ft(O,0):W,q(lt)?(mt="",yt!=null&&(mt=yt.replace(at,"$&/")+"/"),N(lt,J,mt,"",function(ee){return ee})):lt!=null&&(F(lt)&&(lt=C(lt,mt+(lt.key==null||O&&O.key===lt.key?"":(""+lt.key).replace(at,"$&/")+"/")+yt)),J.push(lt)),1;yt=0;var Bt=W===""?".":W+":";if(q(O))for(var Pt=0;Pt<O.length;Pt++)W=O[Pt],xt=Bt+ft(W,Pt),yt+=N(W,J,mt,xt,lt);else if(Pt=M(O),typeof Pt=="function")for(O=Pt.call(O),Pt=0;!(W=O.next()).done;)W=W.value,xt=Bt+ft(W,Pt++),yt+=N(W,J,mt,xt,lt);else if(xt==="object"){if(typeof O.then=="function")return N(ht(O),J,mt,W,lt);throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return yt}function K(O,J,mt){if(O==null)return O;var W=[],lt=0;return N(O,W,"","",function(xt){return J.call(mt,xt,lt++)}),W}function X(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(mt){(O._status===0||O._status===-1)&&(O._status=1,O._result=mt)},function(mt){(O._status===0||O._status===-1)&&(O._status=2,O._result=mt)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var St=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Et={map:K,forEach:function(O,J,mt){K(O,function(){J.apply(this,arguments)},mt)},count:function(O){var J=0;return K(O,function(){J++}),J},toArray:function(O){return K(O,function(J){return J})||[]},only:function(O){if(!F(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ie.Activity=S,ie.Children=Et,ie.Component=_,ie.Fragment=i,ie.Profiler=l,ie.PureComponent=L,ie.StrictMode=s,ie.Suspense=m,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ie.__COMPILER_RUNTIME={__proto__:null,c:function(O){return P.H.useMemoCache(O)}},ie.cache=function(O){return function(){return O.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(O,J,mt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var W=R({},O.props),lt=O.key;if(J!=null)for(xt in J.key!==void 0&&(lt=""+J.key),J)!k.call(J,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&J.ref===void 0||(W[xt]=J[xt]);var xt=arguments.length-2;if(xt===1)W.children=mt;else if(1<xt){for(var yt=Array(xt),Bt=0;Bt<xt;Bt++)yt[Bt]=arguments[Bt+2];W.children=yt}return w(O.type,lt,W)},ie.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},ie.createElement=function(O,J,mt){var W,lt={},xt=null;if(J!=null)for(W in J.key!==void 0&&(xt=""+J.key),J)k.call(J,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(lt[W]=J[W]);var yt=arguments.length-2;if(yt===1)lt.children=mt;else if(1<yt){for(var Bt=Array(yt),Pt=0;Pt<yt;Pt++)Bt[Pt]=arguments[Pt+2];lt.children=Bt}if(O&&O.defaultProps)for(W in yt=O.defaultProps,yt)lt[W]===void 0&&(lt[W]=yt[W]);return w(O,xt,lt)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(O){return{$$typeof:d,render:O}},ie.isValidElement=F,ie.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:X}},ie.memo=function(O,J){return{$$typeof:p,type:O,compare:J===void 0?null:J}},ie.startTransition=function(O){var J=P.T,mt={};P.T=mt;try{var W=O(),lt=P.S;lt!==null&&lt(mt,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(I,St)}catch(xt){St(xt)}finally{J!==null&&mt.types!==null&&(J.types=mt.types),P.T=J}},ie.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ie.use=function(O){return P.H.use(O)},ie.useActionState=function(O,J,mt){return P.H.useActionState(O,J,mt)},ie.useCallback=function(O,J){return P.H.useCallback(O,J)},ie.useContext=function(O){return P.H.useContext(O)},ie.useDebugValue=function(){},ie.useDeferredValue=function(O,J){return P.H.useDeferredValue(O,J)},ie.useEffect=function(O,J){return P.H.useEffect(O,J)},ie.useEffectEvent=function(O){return P.H.useEffectEvent(O)},ie.useId=function(){return P.H.useId()},ie.useImperativeHandle=function(O,J,mt){return P.H.useImperativeHandle(O,J,mt)},ie.useInsertionEffect=function(O,J){return P.H.useInsertionEffect(O,J)},ie.useLayoutEffect=function(O,J){return P.H.useLayoutEffect(O,J)},ie.useMemo=function(O,J){return P.H.useMemo(O,J)},ie.useOptimistic=function(O,J){return P.H.useOptimistic(O,J)},ie.useReducer=function(O,J,mt){return P.H.useReducer(O,J,mt)},ie.useRef=function(O){return P.H.useRef(O)},ie.useState=function(O){return P.H.useState(O)},ie.useSyncExternalStore=function(O,J,mt){return P.H.useSyncExternalStore(O,J,mt)},ie.useTransition=function(){return P.H.useTransition()},ie.version="19.2.8",ie}var Ag;function bd(){return Ag||(Ag=1,$f.exports=Uy()),$f.exports}var Pn=bd(),th={exports:{}},Oo={},eh={exports:{}},nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function Ly(){return Rg||(Rg=1,(function(o){function t(N,K){var X=N.length;N.push(K);t:for(;0<X;){var St=X-1>>>1,Et=N[St];if(0<l(Et,K))N[St]=K,N[X]=Et,X=St;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var K=N[0],X=N.pop();if(X!==K){N[0]=X;t:for(var St=0,Et=N.length,O=Et>>>1;St<O;){var J=2*(St+1)-1,mt=N[J],W=J+1,lt=N[W];if(0>l(mt,X))W<Et&&0>l(lt,mt)?(N[St]=lt,N[W]=X,St=W):(N[St]=mt,N[J]=X,St=J);else if(W<Et&&0>l(lt,X))N[St]=lt,N[W]=X,St=W;else break t}}return K}function l(N,K){var X=N.sortIndex-K.sortIndex;return X!==0?X:N.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,S=null,y=3,M=!1,E=!1,R=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(N){for(var K=i(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=N)s(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function q(N){if(R=!1,D(N),!E)if(i(m)!==null)E=!0,I||(I=!0,rt());else{var K=i(p);K!==null&&ht(q,K.startTime-N)}}var I=!1,P=-1,k=5,w=-1;function C(){return x?!0:!(o.unstable_now()-w<k)}function F(){if(x=!1,I){var N=o.unstable_now();w=N;var K=!0;try{t:{E=!1,R&&(R=!1,B(P),P=-1),M=!0;var X=y;try{e:{for(D(N),S=i(m);S!==null&&!(S.expirationTime>N&&C());){var St=S.callback;if(typeof St=="function"){S.callback=null,y=S.priorityLevel;var Et=St(S.expirationTime<=N);if(N=o.unstable_now(),typeof Et=="function"){S.callback=Et,D(N),K=!0;break e}S===i(m)&&s(m),D(N)}else s(m);S=i(m)}if(S!==null)K=!0;else{var O=i(p);O!==null&&ht(q,O.startTime-N),K=!1}}break t}finally{S=null,y=X,M=!1}K=void 0}}finally{K?rt():I=!1}}}var rt;if(typeof L=="function")rt=function(){L(F)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ft=at.port2;at.port1.onmessage=F,rt=function(){ft.postMessage(null)}}else rt=function(){_(F,0)};function ht(N,K){P=_(function(){N(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(N){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var X=y;y=K;try{return N()}finally{y=X}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var X=y;y=N;try{return K()}finally{y=X}},o.unstable_scheduleCallback=function(N,K,X){var St=o.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?St+X:St):X=St,N){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=X+Et,N={id:g++,callback:K,priorityLevel:N,startTime:X,expirationTime:Et,sortIndex:-1},X>St?(N.sortIndex=X,t(p,N),i(m)===null&&N===i(p)&&(R?(B(P),P=-1):R=!0,ht(q,X-St))):(N.sortIndex=Et,t(m,N),E||M||(E=!0,I||(I=!0,rt()))),N},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(N){var K=y;return function(){var X=y;y=K;try{return N.apply(this,arguments)}finally{y=X}}}})(nh)),nh}var Cg;function Ny(){return Cg||(Cg=1,eh.exports=Ly()),eh.exports}var ih={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function Oy(){if(wg)return Rn;wg=1;var o=bd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},Rn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,S=d(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:y,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:S,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,S=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.2.8",Rn}var Dg;function Py(){if(Dg)return ih.exports;Dg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ih.exports=Oy(),ih.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function zy(){if(Ug)return Oo;Ug=1;var o=Ny(),t=bd(),i=Py();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var v=!1,T=c.child;T;){if(T===a){v=!0,a=c,r=f;break}if(T===r){v=!0,r=c,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,r=c;break}if(T===r){v=!0,r=f,a=c;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var S=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function rt(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case _:return"Profiler";case x:return"StrictMode";case q:return"Suspense";case I:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case k:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var ht=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},St=[],Et=-1;function O(e){return{current:e}}function J(e){0>Et||(e.current=St[Et],St[Et]=null,Et--)}function mt(e,n){Et++,St[Et]=e.current,e.current=n}var W=O(null),lt=O(null),xt=O(null),yt=O(null);function Bt(e,n){switch(mt(xt,n),mt(lt,e),mt(W,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?q_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=q_(n),e=Y_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(W),mt(W,e)}function Pt(){J(W),J(lt),J(xt)}function ee(e){e.memoizedState!==null&&mt(yt,e);var n=W.current,a=Y_(n,e.type);n!==a&&(mt(lt,e),mt(W,a))}function Ne(e){lt.current===e&&(J(W),J(lt)),yt.current===e&&(J(yt),wo._currentValue=X)}var he,qe;function H(e){if(he===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);he=n&&n[1]||"",qe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+he+e+qe}var bn=!1;function ue(e,n){if(!e||bn)return"";bn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ot){var et=ot}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(ot){et=ot}e.call(gt.prototype)}}else{try{throw Error()}catch(ot){et=ot}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ot){if(ot&&et&&typeof ot.stack=="string")return[ot.stack,et.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var z=v.split(`
`),tt=T.split(`
`);for(c=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(r===z.length||c===tt.length)for(r=z.length-1,c=tt.length-1;1<=r&&0<=c&&z[r]!==tt[c];)c--;for(;1<=r&&0<=c;r--,c--)if(z[r]!==tt[c]){if(r!==1||c!==1)do if(r--,c--,0>c||z[r]!==tt[c]){var ut=`
`+z[r].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=r&&0<=c);break}}}finally{bn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?H(a):""}function me(e,n){switch(e.tag){case 26:case 27:case 5:return H(e.type);case 16:return H("Lazy");case 13:return e.child!==n&&n!==null?H("Suspense Fallback"):H("Suspense");case 19:return H("SuspenseList");case 0:case 15:return ue(e.type,!1);case 11:return ue(e.type.render,!1);case 1:return ue(e.type,!0);case 31:return H("Activity");default:return""}}function Wt(e){try{var n="",a=null;do n+=me(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var De=Object.prototype.hasOwnProperty,Xt=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,b=o.unstable_shouldYield,nt=o.unstable_requestPaint,dt=o.unstable_now,Mt=o.unstable_getCurrentPriorityLevel,_t=o.unstable_ImmediatePriority,Vt=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,It=o.unstable_LowPriority,_e=o.unstable_IdlePriority,bt=o.log,Ft=o.unstable_setDisableYieldValue,qt=null,kt=null;function Ot(e){if(typeof bt=="function"&&Ft(e),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(qt,e)}catch{}}var Qt=Math.clz32?Math.clz32:Y,se=Math.log,Oe=Math.LN2;function Y(e){return e>>>=0,e===0?32:31-(se(e)/Oe|0)|0}var Rt=256,ct=262144,vt=4194304;function Ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?c=Ct(r):(v&=T,v!==0?c=Ct(v):a||(a=T&~e,a!==0&&(c=Ct(a))))):(T=r&~f,T!==0?c=Ct(T):v!==0?c=Ct(v):a||(a=r&~e,a!==0&&(c=Ct(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Jt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ye(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ln(){var e=vt;return vt<<=1,(vt&62914560)===0&&(vt=4194304),e}function Te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function vn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mi(e,n,a,r,c,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,z=e.expirationTimes,tt=e.hiddenUpdates;for(a=v&~a;0<a;){var ut=31-Qt(a),gt=1<<ut;T[ut]=0,z[ut]=-1;var et=tt[ut];if(et!==null)for(tt[ut]=null,ut=0;ut<et.length;ut++){var ot=et[ut];ot!==null&&(ot.lane&=-536870913)}a&=~gt}r!==0&&Hr(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Hr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Qt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Gr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Qt(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function wi(e,n){var a=n&-n;return a=(a&42)!==0?1:ja(a),(a&(e.suspendedLanes|n))!==0?0:a}function ja(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Cs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vr(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:_g(e.type))}function Za(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var _i=Math.random().toString(36).slice(2),Ke="__reactFiber$"+_i,Sn="__reactProps$"+_i,Ii="__reactContainer$"+_i,kr="__reactEvents$"+_i,Wc="__reactListeners$"+_i,qc="__reactHandles$"+_i,Zo="__reactResources$"+_i,Ka="__reactMarker$"+_i;function Xr(e){delete e[Ke],delete e[Sn],delete e[kr],delete e[Wc],delete e[qc]}function A(e){var n=e[Ke];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ii]||a[Ke]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=tg(e);e!==null;){if(a=e[Ke])return a;e=tg(e)}return n}e=a,a=e.parentNode}return null}function j(e){if(e=e[Ke]||e[Ii]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function it(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function st(e){var n=e[Zo];return n||(n=e[Zo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function V(e){e[Ka]=!0}var Tt=new Set,Ut={};function Nt(e,n){zt(e,n),zt(e+"Capture",n)}function zt(e,n){for(Ut[e]=n,e=0;e<n.length;e++)Tt.add(n[e])}var $t=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},Yt={};function Se(e){return De.call(Yt,e)?!0:De.call(te,e)?!1:$t.test(e)?Yt[e]=!0:(te[e]=!0,!1)}function ye(e,n,a){if(Se(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ke(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function be(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cn(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ee(e){if(!e._valueTracker){var n=Zt(e)?"checked":"value";e._valueTracker=cn(e,n,""+e[n])}}function Bn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Zt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dn=/[\n"\\]/g;function pn(e){return e.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pe(e,n,a,r,c,f,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ne(n)):e.value!==""+ne(n)&&(e.value=""+ne(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?An(e,v,ne(n)):a!=null?An(e,v,ne(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ne(T):e.removeAttribute("name")}function Un(e,n,a,r,c,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ee(e);return}a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=T?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ee(e)}function An(e,n,a){n==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Qe(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function yn(e,n,a){if(n!=null&&(n=""+ne(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ne(a):""}function ws(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ht(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ne(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Ee(e)}function In(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Tv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kd(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Tv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Xd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&kd(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&kd(e,f,n[f])}function Yc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Av=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(e){return Av.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Fi(){}var jc=null;function Zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ds=null,Us=null;function Wd(e){var n=j(e);if(n&&(e=n.stateNode)){var a=e[Sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Pe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[Sn]||null;if(!c)throw Error(s(90));Pe(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Bn(r)}break t;case"textarea":yn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qe(e,!!a.multiple,n,!1)}}}var Kc=!1;function qd(e,n,a){if(Kc)return e(n,a);Kc=!0;try{var r=e(n);return r}finally{if(Kc=!1,(Ds!==null||Us!==null)&&(Bl(),Ds&&(n=Ds,e=Us,Us=Ds=null,Wd(n),e)))for(n=0;n<e.length;n++)Wd(e[n])}}function Wr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Sn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=!1;if(Hi)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{Qc=!1}var da=null,Jc=null,Qo=null;function Yd(){if(Qo)return Qo;var e,n=Jc,a=n.length,r,c="value"in da?da.value:da.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===c[f-r];r++);return Qo=c.slice(e,1<r?1-r:void 0)}function Jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function jd(){return!1}function Fn(e){function n(a,r,c,f,v){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$o:jd,this.isPropagationStopped=jd,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Fn(Qa),Yr=S({},Qa,{view:0,detail:0}),Rv=Fn(Yr),$c,tu,jr,el=S({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?($c=e.screenX-jr.screenX,tu=e.screenY-jr.screenY):tu=$c=0,jr=e),$c)},movementY:function(e){return"movementY"in e?e.movementY:tu}}),Zd=Fn(el),Cv=S({},el,{dataTransfer:0}),wv=Fn(Cv),Dv=S({},Yr,{relatedTarget:0}),eu=Fn(Dv),Uv=S({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Lv=Fn(Uv),Nv=S({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ov=Fn(Nv),Pv=S({},Qa,{data:0}),Kd=Fn(Pv),zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Iv[e])?!!n[e]:!1}function nu(){return Fv}var Hv=S({},Yr,{key:function(e){if(e.key){var n=zv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(e){return e.type==="keypress"?Jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gv=Fn(Hv),Vv=S({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=Fn(Vv),kv=S({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),Xv=Fn(kv),Wv=S({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),qv=Fn(Wv),Yv=S({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jv=Fn(Yv),Zv=S({},Qa,{newState:0,oldState:0}),Kv=Fn(Zv),Qv=[9,13,27,32],iu=Hi&&"CompositionEvent"in window,Zr=null;Hi&&"documentMode"in document&&(Zr=document.documentMode);var Jv=Hi&&"TextEvent"in window&&!Zr,Jd=Hi&&(!iu||Zr&&8<Zr&&11>=Zr),$d=" ",tp=!1;function ep(e,n){switch(e){case"keyup":return Qv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ls=!1;function $v(e,n){switch(e){case"compositionend":return np(n);case"keypress":return n.which!==32?null:(tp=!0,$d);case"textInput":return e=n.data,e===$d&&tp?null:e;default:return null}}function tS(e,n){if(Ls)return e==="compositionend"||!iu&&ep(e,n)?(e=Yd(),Qo=Jc=da=null,Ls=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jd&&n.locale!=="ko"?null:n.data;default:return null}}var eS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!eS[e.type]:n==="textarea"}function ap(e,n,a,r){Ds?Us?Us.push(r):Us=[r]:Ds=r,n=Xl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Kr=null,Qr=null;function nS(e){H_(e,0)}function nl(e){var n=it(e);if(Bn(n))return e}function sp(e,n){if(e==="change")return n}var rp=!1;if(Hi){var au;if(Hi){var su="oninput"in document;if(!su){var op=document.createElement("div");op.setAttribute("oninput","return;"),su=typeof op.oninput=="function"}au=su}else au=!1;rp=au&&(!document.documentMode||9<document.documentMode)}function lp(){Kr&&(Kr.detachEvent("onpropertychange",cp),Qr=Kr=null)}function cp(e){if(e.propertyName==="value"&&nl(Qr)){var n=[];ap(n,Qr,e,Zc(e)),qd(nS,n)}}function iS(e,n,a){e==="focusin"?(lp(),Kr=n,Qr=a,Kr.attachEvent("onpropertychange",cp)):e==="focusout"&&lp()}function aS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(Qr)}function sS(e,n){if(e==="click")return nl(n)}function rS(e,n){if(e==="input"||e==="change")return nl(n)}function oS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:oS;function Jr(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!De.call(n,c)||!jn(e[c],n[c]))return!1}return!0}function up(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fp(e,n){var a=up(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=up(a)}}function hp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?hp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function dp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gi(e.document)}return n}function ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var lS=Hi&&"documentMode"in document&&11>=document.documentMode,Ns=null,ou=null,$r=null,lu=!1;function pp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lu||Ns==null||Ns!==gi(r)||(r=Ns,"selectionStart"in r&&ru(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$r&&Jr($r,r)||($r=r,r=Xl(ou,"onSelect"),0<r.length&&(n=new tl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Ns)))}function Ja(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Os={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},cu={},mp={};Hi&&(mp=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function $a(e){if(cu[e])return cu[e];if(!Os[e])return e;var n=Os[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in mp)return cu[e]=n[a];return e}var _p=$a("animationend"),gp=$a("animationiteration"),vp=$a("animationstart"),cS=$a("transitionrun"),uS=$a("transitionstart"),fS=$a("transitioncancel"),Sp=$a("transitionend"),yp=new Map,uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uu.push("scrollEnd");function vi(e,n){yp.set(e,n),Nt(n,[e])}var il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},si=[],Ps=0,fu=0;function al(){for(var e=Ps,n=fu=Ps=0;n<e;){var a=si[n];si[n++]=null;var r=si[n];si[n++]=null;var c=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,r!==null&&c!==null){var v=r.pending;v===null?c.next=c:(c.next=v.next,v.next=c),r.pending=c}f!==0&&xp(a,c,f)}}function sl(e,n,a,r){si[Ps++]=e,si[Ps++]=n,si[Ps++]=a,si[Ps++]=r,fu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function hu(e,n,a,r){return sl(e,n,a,r),rl(e)}function ts(e,n){return sl(e,null,null,n),rl(e)}function xp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Qt(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function rl(e){if(50<Mo)throw Mo=0,Mf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zs={};function hS(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,a,r){return new hS(e,n,a,r)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,n){var a=e.alternate;return a===null?(a=Zn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Mp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ol(e,n,a,r,c,f){var v=0;if(r=e,typeof e=="function")du(e)&&(v=1);else if(typeof e=="string")v=gy(e,a,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Zn(31,a,n,c),e.elementType=w,e.lanes=f,e;case R:return es(a.children,c,f,n);case x:v=8,c|=24;break;case _:return e=Zn(12,a,n,c|2),e.elementType=_,e.lanes=f,e;case q:return e=Zn(13,a,n,c),e.elementType=q,e.lanes=f,e;case I:return e=Zn(19,a,n,c),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break t;case B:v=9;break t;case D:v=11;break t;case P:v=14;break t;case k:v=16,r=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Zn(v,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function es(e,n,a,r){return e=Zn(7,e,r,n),e.lanes=a,e}function pu(e,n,a){return e=Zn(6,e,null,n),e.lanes=a,e}function Ep(e){var n=Zn(18,null,null,0);return n.stateNode=e,n}function mu(e,n,a){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Tp=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=Tp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Wt(n)},Tp.set(e,n),n)}return{value:e,source:n,stack:Wt(n)}}var Bs=[],Is=0,ll=null,to=0,oi=[],li=0,pa=null,Di=1,Ui="";function Vi(e,n){Bs[Is++]=to,Bs[Is++]=ll,ll=e,to=n}function bp(e,n,a){oi[li++]=Di,oi[li++]=Ui,oi[li++]=pa,pa=e;var r=Di;e=Ui;var c=32-Qt(r)-1;r&=~(1<<c),a+=1;var f=32-Qt(n)+c;if(30<f){var v=c-c%5;f=(r&(1<<v)-1).toString(32),r>>=v,c-=v,Di=1<<32-Qt(n)+c|a<<c|r,Ui=f+e}else Di=1<<f|a<<c|r,Ui=e}function _u(e){e.return!==null&&(Vi(e,1),bp(e,1,0))}function gu(e){for(;e===ll;)ll=Bs[--Is],Bs[Is]=null,to=Bs[--Is],Bs[Is]=null;for(;e===pa;)pa=oi[--li],oi[li]=null,Ui=oi[--li],oi[li]=null,Di=oi[--li],oi[li]=null}function Ap(e,n){oi[li++]=Di,oi[li++]=Ui,oi[li++]=pa,Di=n.id,Ui=n.overflow,pa=e}var xn=null,Xe=null,xe=!1,ma=null,ci=!1,vu=Error(s(519));function _a(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw eo(ri(n,e)),vu}function Rp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[Ke]=e,n[Sn]=r,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)pe(To[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Un(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),ws(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||X_(n.textContent,a)?(r.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),r.onScroll!=null&&pe("scroll",n),r.onScrollEnd!=null&&pe("scrollend",n),r.onClick!=null&&(n.onclick=Fi),n=!0):n=!1,n||_a(e,!0)}function Cp(e){for(xn=e.return;xn;)switch(xn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:xn=xn.return}}function Fs(e){if(e!==xn)return!1;if(!xe)return Cp(e),xe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Bf(e.type,e.memoizedProps)),a=!a),a&&Xe&&_a(e),Cp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Xe=$_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Xe=$_(e)}else n===27?(n=Xe,Da(e.type)?(e=Vf,Vf=null,Xe=e):Xe=n):Xe=xn?fi(e.stateNode.nextSibling):null;return!0}function ns(){Xe=xn=null,xe=!1}function Su(){var e=ma;return e!==null&&(kn===null?kn=e:kn.push.apply(kn,e),ma=null),e}function eo(e){ma===null?ma=[e]:ma.push(e)}var yu=O(null),is=null,ki=null;function ga(e,n,a){mt(yu,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=yu.current,J(yu)}function xu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Mu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var z=0;z<n.length;z++)if(T.context===n[z]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),xu(f.return,a,e),r||(v=null);break t}f=T.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),xu(v,a,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Hs(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=c.type;jn(c.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(c===yt.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}c=c.return}e!==null&&Mu(n,e,a,r),n.flags|=262144}function cl(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function as(e){is=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return wp(is,e)}function ul(e,n){return is===null&&as(e),wp(e,n)}function wp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(s(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var dS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},pS=o.unstable_scheduleCallback,mS=o.unstable_NormalPriority,nn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eu(){return{controller:new dS,data:new Map,refCount:0}}function no(e){e.refCount--,e.refCount===0&&pS(mS,function(){e.controller.abort()})}var io=null,Tu=0,Gs=0,Vs=null;function _S(e,n){if(io===null){var a=io=[];Tu=0,Gs=Cf(),Vs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Tu++,n.then(Dp,Dp),n}function Dp(){if(--Tu===0&&io!==null){Vs!==null&&(Vs.status="fulfilled");var e=io;io=null,Gs=0,Vs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function gS(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Up=N.S;N.S=function(e,n){p_=dt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&_S(e,n),Up!==null&&Up(e,n)};var ss=O(null);function bu(){var e=ss.current;return e!==null?e:Ve.pooledCache}function fl(e,n){n===null?mt(ss,ss.current):mt(ss,n.pool)}function Lp(){var e=bu();return e===null?null:{parent:nn._currentValue,pool:e}}var ks=Error(s(460)),Au=Error(s(474)),hl=Error(s(542)),dl={then:function(){}};function Np(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Op(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Fi,Fi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,zp(e),e;default:if(typeof n.status=="string")n.then(Fi,Fi);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,zp(e),e}throw os=n,ks}}function rs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(os=a,ks):a}}var os=null;function Pp(){if(os===null)throw Error(s(459));var e=os;return os=null,e}function zp(e){if(e===ks||e===hl)throw Error(s(483))}var Xs=null,ao=0;function pl(e){var n=ao;return ao+=1,Xs===null&&(Xs=[]),Op(Xs,e,n)}function so(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ml(e,n){throw n.$$typeof===y?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Bp(e){function n(Q,G){if(e){var $=Q.deletions;$===null?(Q.deletions=[G],Q.flags|=16):$.push(G)}}function a(Q,G){if(!e)return null;for(;G!==null;)n(Q,G),G=G.sibling;return null}function r(Q){for(var G=new Map;Q!==null;)Q.key!==null?G.set(Q.key,Q):G.set(Q.index,Q),Q=Q.sibling;return G}function c(Q,G){return Q=Gi(Q,G),Q.index=0,Q.sibling=null,Q}function f(Q,G,$){return Q.index=$,e?($=Q.alternate,$!==null?($=$.index,$<G?(Q.flags|=67108866,G):$):(Q.flags|=67108866,G)):(Q.flags|=1048576,G)}function v(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function T(Q,G,$,pt){return G===null||G.tag!==6?(G=pu($,Q.mode,pt),G.return=Q,G):(G=c(G,$),G.return=Q,G)}function z(Q,G,$,pt){var jt=$.type;return jt===R?ut(Q,G,$.props.children,pt,$.key):G!==null&&(G.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===k&&rs(jt)===G.type)?(G=c(G,$.props),so(G,$),G.return=Q,G):(G=ol($.type,$.key,$.props,null,Q.mode,pt),so(G,$),G.return=Q,G)}function tt(Q,G,$,pt){return G===null||G.tag!==4||G.stateNode.containerInfo!==$.containerInfo||G.stateNode.implementation!==$.implementation?(G=mu($,Q.mode,pt),G.return=Q,G):(G=c(G,$.children||[]),G.return=Q,G)}function ut(Q,G,$,pt,jt){return G===null||G.tag!==7?(G=es($,Q.mode,pt,jt),G.return=Q,G):(G=c(G,$),G.return=Q,G)}function gt(Q,G,$){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=pu(""+G,Q.mode,$),G.return=Q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case M:return $=ol(G.type,G.key,G.props,null,Q.mode,$),so($,G),$.return=Q,$;case E:return G=mu(G,Q.mode,$),G.return=Q,G;case k:return G=rs(G),gt(Q,G,$)}if(ht(G)||rt(G))return G=es(G,Q.mode,$,null),G.return=Q,G;if(typeof G.then=="function")return gt(Q,pl(G),$);if(G.$$typeof===L)return gt(Q,ul(Q,G),$);ml(Q,G)}return null}function et(Q,G,$,pt){var jt=G!==null?G.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return jt!==null?null:T(Q,G,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===jt?z(Q,G,$,pt):null;case E:return $.key===jt?tt(Q,G,$,pt):null;case k:return $=rs($),et(Q,G,$,pt)}if(ht($)||rt($))return jt!==null?null:ut(Q,G,$,pt,null);if(typeof $.then=="function")return et(Q,G,pl($),pt);if($.$$typeof===L)return et(Q,G,ul(Q,$),pt);ml(Q,$)}return null}function ot(Q,G,$,pt,jt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Q=Q.get($)||null,T(G,Q,""+pt,jt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return Q=Q.get(pt.key===null?$:pt.key)||null,z(G,Q,pt,jt);case E:return Q=Q.get(pt.key===null?$:pt.key)||null,tt(G,Q,pt,jt);case k:return pt=rs(pt),ot(Q,G,$,pt,jt)}if(ht(pt)||rt(pt))return Q=Q.get($)||null,ut(G,Q,pt,jt,null);if(typeof pt.then=="function")return ot(Q,G,$,pl(pt),jt);if(pt.$$typeof===L)return ot(Q,G,$,ul(G,pt),jt);ml(G,pt)}return null}function Ht(Q,G,$,pt){for(var jt=null,Ae=null,Gt=G,oe=G=0,ve=null;Gt!==null&&oe<$.length;oe++){Gt.index>oe?(ve=Gt,Gt=null):ve=Gt.sibling;var Re=et(Q,Gt,$[oe],pt);if(Re===null){Gt===null&&(Gt=ve);break}e&&Gt&&Re.alternate===null&&n(Q,Gt),G=f(Re,G,oe),Ae===null?jt=Re:Ae.sibling=Re,Ae=Re,Gt=ve}if(oe===$.length)return a(Q,Gt),xe&&Vi(Q,oe),jt;if(Gt===null){for(;oe<$.length;oe++)Gt=gt(Q,$[oe],pt),Gt!==null&&(G=f(Gt,G,oe),Ae===null?jt=Gt:Ae.sibling=Gt,Ae=Gt);return xe&&Vi(Q,oe),jt}for(Gt=r(Gt);oe<$.length;oe++)ve=ot(Gt,Q,oe,$[oe],pt),ve!==null&&(e&&ve.alternate!==null&&Gt.delete(ve.key===null?oe:ve.key),G=f(ve,G,oe),Ae===null?jt=ve:Ae.sibling=ve,Ae=ve);return e&&Gt.forEach(function(Pa){return n(Q,Pa)}),xe&&Vi(Q,oe),jt}function Kt(Q,G,$,pt){if($==null)throw Error(s(151));for(var jt=null,Ae=null,Gt=G,oe=G=0,ve=null,Re=$.next();Gt!==null&&!Re.done;oe++,Re=$.next()){Gt.index>oe?(ve=Gt,Gt=null):ve=Gt.sibling;var Pa=et(Q,Gt,Re.value,pt);if(Pa===null){Gt===null&&(Gt=ve);break}e&&Gt&&Pa.alternate===null&&n(Q,Gt),G=f(Pa,G,oe),Ae===null?jt=Pa:Ae.sibling=Pa,Ae=Pa,Gt=ve}if(Re.done)return a(Q,Gt),xe&&Vi(Q,oe),jt;if(Gt===null){for(;!Re.done;oe++,Re=$.next())Re=gt(Q,Re.value,pt),Re!==null&&(G=f(Re,G,oe),Ae===null?jt=Re:Ae.sibling=Re,Ae=Re);return xe&&Vi(Q,oe),jt}for(Gt=r(Gt);!Re.done;oe++,Re=$.next())Re=ot(Gt,Q,oe,Re.value,pt),Re!==null&&(e&&Re.alternate!==null&&Gt.delete(Re.key===null?oe:Re.key),G=f(Re,G,oe),Ae===null?jt=Re:Ae.sibling=Re,Ae=Re);return e&&Gt.forEach(function(Cy){return n(Q,Cy)}),xe&&Vi(Q,oe),jt}function Ie(Q,G,$,pt){if(typeof $=="object"&&$!==null&&$.type===R&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:t:{for(var jt=$.key;G!==null;){if(G.key===jt){if(jt=$.type,jt===R){if(G.tag===7){a(Q,G.sibling),pt=c(G,$.props.children),pt.return=Q,Q=pt;break t}}else if(G.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===k&&rs(jt)===G.type){a(Q,G.sibling),pt=c(G,$.props),so(pt,$),pt.return=Q,Q=pt;break t}a(Q,G);break}else n(Q,G);G=G.sibling}$.type===R?(pt=es($.props.children,Q.mode,pt,$.key),pt.return=Q,Q=pt):(pt=ol($.type,$.key,$.props,null,Q.mode,pt),so(pt,$),pt.return=Q,Q=pt)}return v(Q);case E:t:{for(jt=$.key;G!==null;){if(G.key===jt)if(G.tag===4&&G.stateNode.containerInfo===$.containerInfo&&G.stateNode.implementation===$.implementation){a(Q,G.sibling),pt=c(G,$.children||[]),pt.return=Q,Q=pt;break t}else{a(Q,G);break}else n(Q,G);G=G.sibling}pt=mu($,Q.mode,pt),pt.return=Q,Q=pt}return v(Q);case k:return $=rs($),Ie(Q,G,$,pt)}if(ht($))return Ht(Q,G,$,pt);if(rt($)){if(jt=rt($),typeof jt!="function")throw Error(s(150));return $=jt.call($),Kt(Q,G,$,pt)}if(typeof $.then=="function")return Ie(Q,G,pl($),pt);if($.$$typeof===L)return Ie(Q,G,ul(Q,$),pt);ml(Q,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,G!==null&&G.tag===6?(a(Q,G.sibling),pt=c(G,$),pt.return=Q,Q=pt):(a(Q,G),pt=pu($,Q.mode,pt),pt.return=Q,Q=pt),v(Q)):a(Q,G)}return function(Q,G,$,pt){try{ao=0;var jt=Ie(Q,G,$,pt);return Xs=null,jt}catch(Gt){if(Gt===ks||Gt===hl)throw Gt;var Ae=Zn(29,Gt,null,Q.mode);return Ae.lanes=pt,Ae.return=Q,Ae}finally{}}}var ls=Bp(!0),Ip=Bp(!1),va=!1;function Ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(we&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=rl(e),xp(e,null,a),n}return sl(e,r,n,a),rl(e)}function ro(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Gr(e,a)}}function wu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Du=!1;function oo(){if(Du){var e=Vs;if(e!==null)throw e}}function lo(e,n,a,r){Du=!1;var c=e.updateQueue;va=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var z=T,tt=z.next;z.next=null,v===null?f=tt:v.next=tt,v=z;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,T=ut.lastBaseUpdate,T!==v&&(T===null?ut.firstBaseUpdate=tt:T.next=tt,ut.lastBaseUpdate=z))}if(f!==null){var gt=c.baseState;v=0,ut=tt=z=null,T=f;do{var et=T.lane&-536870913,ot=et!==T.lane;if(ot?(ge&et)===et:(r&et)===et){et!==0&&et===Gs&&(Du=!0),ut!==null&&(ut=ut.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Ht=e,Kt=T;et=n;var Ie=a;switch(Kt.tag){case 1:if(Ht=Kt.payload,typeof Ht=="function"){gt=Ht.call(Ie,gt,et);break t}gt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=Kt.payload,et=typeof Ht=="function"?Ht.call(Ie,gt,et):Ht,et==null)break t;gt=S({},gt,et);break t;case 2:va=!0}}et=T.callback,et!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[et]:ot.push(et))}else ot={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ut===null?(tt=ut=ot,z=gt):ut=ut.next=ot,v|=et;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ut===null&&(z=gt),c.baseState=z,c.firstBaseUpdate=tt,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),ba|=v,e.lanes=v,e.memoizedState=gt}}function Fp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Hp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Fp(a[e],n)}var Ws=O(null),_l=O(0);function Gp(e,n){e=$i,mt(_l,e),mt(Ws,n),$i=e|n.baseLanes}function Uu(){mt(_l,$i),mt(Ws,Ws.current)}function Lu(){$i=_l.current,J(Ws),J(_l)}var Kn=O(null),ui=null;function xa(e){var n=e.alternate;mt(tn,tn.current&1),mt(Kn,e),ui===null&&(n===null||Ws.current!==null||n.memoizedState!==null)&&(ui=e)}function Nu(e){mt(tn,tn.current),mt(Kn,e),ui===null&&(ui=e)}function Vp(e){e.tag===22?(mt(tn,tn.current),mt(Kn,e),ui===null&&(ui=e)):Ma()}function Ma(){mt(tn,tn.current),mt(Kn,Kn.current)}function Qn(e){J(Kn),ui===e&&(ui=null),J(tn)}var tn=O(0);function gl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Hf(a)||Gf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wi=0,re=null,ze=null,an=null,vl=!1,qs=!1,cs=!1,Sl=0,co=0,Ys=null,vS=0;function Je(){throw Error(s(321))}function Ou(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!jn(e[a],n[a]))return!1;return!0}function Pu(e,n,a,r,c,f){return Wi=f,re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?bm:Ku,cs=!1,f=a(r,c),cs=!1,qs&&(f=Xp(n,a,r,c)),kp(e),f}function kp(e){N.H=ho;var n=ze!==null&&ze.next!==null;if(Wi=0,an=ze=re=null,vl=!1,co=0,Ys=null,n)throw Error(s(300));e===null||sn||(e=e.dependencies,e!==null&&cl(e)&&(sn=!0))}function Xp(e,n,a,r){re=e;var c=0;do{if(qs&&(Ys=null),co=0,qs=!1,25<=c)throw Error(s(301));if(c+=1,an=ze=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Am,f=n(a,r)}while(qs);return f}function SS(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?uo(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(re.flags|=1024),n}function zu(){var e=Sl!==0;return Sl=0,e}function Bu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Iu(e){if(vl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}vl=!1}Wi=0,an=ze=re=null,qs=!1,co=Sl=0,Ys=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?re.memoizedState=an=e:an=an.next=e,an}function en(){if(ze===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=an===null?re.memoizedState:an.next;if(n!==null)an=n,ze=e;else{if(e===null)throw re.alternate===null?Error(s(467)):Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},an===null?re.memoizedState=an=e:an=an.next=e}return an}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uo(e){var n=co;return co+=1,Ys===null&&(Ys=[]),e=Op(Ys,e,n),n=re,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?bm:Ku),e}function xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return uo(e);if(e.$$typeof===L)return Mn(e)}throw Error(s(438,String(e)))}function Fu(e){var n=null,a=re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=re.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yl(),re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=C;return n.index++,a}function qi(e,n){return typeof n=="function"?n(e):n}function Ml(e){var n=en();return Hu(n,ze,e)}function Hu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=v=null,z=null,tt=n,ut=!1;do{var gt=tt.lane&-536870913;if(gt!==tt.lane?(ge&gt)===gt:(Wi&gt)===gt){var et=tt.revertLane;if(et===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),gt===Gs&&(ut=!0);else if((Wi&et)===et){tt=tt.next,et===Gs&&(ut=!0);continue}else gt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},z===null?(T=z=gt,v=f):z=z.next=gt,re.lanes|=et,ba|=et;gt=tt.action,cs&&a(f,gt),f=tt.hasEagerState?tt.eagerState:a(f,gt)}else et={lane:gt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},z===null?(T=z=et,v=f):z=z.next=et,re.lanes|=gt,ba|=gt;tt=tt.next}while(tt!==null&&tt!==n);if(z===null?v=f:z.next=T,!jn(f,e.memoizedState)&&(sn=!0,ut&&(a=Vs,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=z,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Gu(e){var n=en(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=e(f,v.action),v=v.next;while(v!==c);jn(f,n.memoizedState)||(sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Wp(e,n,a){var r=re,c=en(),f=xe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!jn((ze||c).memoizedState,a);if(v&&(c.memoizedState=a,sn=!0),c=c.queue,Xu(jp.bind(null,r,c,e),[e]),c.getSnapshot!==n||v||an!==null&&an.memoizedState.tag&1){if(r.flags|=2048,js(9,{destroy:void 0},Yp.bind(null,r,c,a,n),null),Ve===null)throw Error(s(349));f||(Wi&127)!==0||qp(r,n,a)}return a}function qp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=re.updateQueue,n===null?(n=yl(),re.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Yp(e,n,a,r){n.value=a,n.getSnapshot=r,Zp(n)&&Kp(e)}function jp(e,n,a){return a(function(){Zp(n)&&Kp(e)})}function Zp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!jn(e,a)}catch{return!0}}function Kp(e){var n=ts(e,2);n!==null&&Xn(n,e,2)}function Vu(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),cs){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},n}function Qp(e,n,a,r){return e.baseState=a,Hu(e,ze,typeof r=="function"?r:qi)}function yS(e,n,a,r,c){if(bl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};N.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Jp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Jp(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=N.T,v={};N.T=v;try{var T=a(c,r),z=N.S;z!==null&&z(v,T),$p(e,n,T)}catch(tt){ku(e,n,tt)}finally{f!==null&&v.types!==null&&(f.types=v.types),N.T=f}}else try{f=a(c,r),$p(e,n,f)}catch(tt){ku(e,n,tt)}}function $p(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){tm(e,n,r)},function(r){return ku(e,n,r)}):tm(e,n,a)}function tm(e,n,a){n.status="fulfilled",n.value=a,em(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Jp(e,a)))}function ku(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,em(n),n=n.next;while(n!==r)}e.action=null}function em(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function nm(e,n){return n}function im(e,n){if(xe){var a=Ve.formState;if(a!==null){t:{var r=re;if(xe){if(Xe){e:{for(var c=Xe,f=ci;c.nodeType!==8;){if(!f){c=null;break e}if(c=fi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Xe=fi(c.nextSibling),r=c.data==="F!";break t}}_a(r)}r=!1}r&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nm,lastRenderedState:n},a.queue=r,a=Mm.bind(null,re,r),r.dispatch=a,r=Vu(!1),f=Zu.bind(null,re,!1,r.queue),r=Ln(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=yS.bind(null,re,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function am(e){var n=en();return sm(n,ze,e)}function sm(e,n,a){if(n=Hu(e,n,nm)[0],e=Ml(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=uo(n)}catch(v){throw v===ks?hl:v}else r=n;n=en();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(re.flags|=2048,js(9,{destroy:void 0},xS.bind(null,c,a),null)),[r,f,e]}function xS(e,n){e.action=n}function rm(e){var n=en(),a=ze;if(a!==null)return sm(n,a,e);en(),n=n.memoizedState,a=en();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function js(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=re.updateQueue,n===null&&(n=yl(),re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function om(){return en().memoizedState}function El(e,n,a,r){var c=Ln();re.flags|=e,c.memoizedState=js(1|n,{destroy:void 0},a,r===void 0?null:r)}function Tl(e,n,a,r){var c=en();r=r===void 0?null:r;var f=c.memoizedState.inst;ze!==null&&r!==null&&Ou(r,ze.memoizedState.deps)?c.memoizedState=js(n,f,a,r):(re.flags|=e,c.memoizedState=js(1|n,f,a,r))}function lm(e,n){El(8390656,8,e,n)}function Xu(e,n){Tl(2048,8,e,n)}function MS(e){re.flags|=4;var n=re.updateQueue;if(n===null)n=yl(),re.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function cm(e){var n=en().memoizedState;return MS({ref:n,nextImpl:e}),function(){if((we&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function um(e,n){return Tl(4,2,e,n)}function fm(e,n){return Tl(4,4,e,n)}function hm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function dm(e,n,a){a=a!=null?a.concat([e]):null,Tl(4,4,hm.bind(null,n,e),a)}function Wu(){}function pm(e,n){var a=en();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Ou(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function mm(e,n){var a=en();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Ou(n,r[1]))return r[0];if(r=e(),cs){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[r,n],r}function qu(e,n,a){return a===void 0||(Wi&1073741824)!==0&&(ge&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=__(),re.lanes|=e,ba|=e,a)}function _m(e,n,a,r){return jn(a,n)?a:Ws.current!==null?(e=qu(e,a,r),jn(e,n)||(sn=!0),e):(Wi&42)===0||(Wi&1073741824)!==0&&(ge&261930)===0?(sn=!0,e.memoizedState=a):(e=__(),re.lanes|=e,ba|=e,n)}function gm(e,n,a,r,c){var f=K.p;K.p=f!==0&&8>f?f:8;var v=N.T,T={};N.T=T,Zu(e,!1,n,a);try{var z=c(),tt=N.S;if(tt!==null&&tt(T,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ut=gS(z,r);fo(e,n,ut,ti(e))}else fo(e,n,r,ti(e))}catch(gt){fo(e,n,{then:function(){},status:"rejected",reason:gt},ti())}finally{K.p=f,v!==null&&T.types!==null&&(v.types=T.types),N.T=v}}function ES(){}function Yu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=vm(e).queue;gm(e,c,n,X,a===null?ES:function(){return Sm(e),a(r)})}function vm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Sm(e){var n=vm(e);n.next===null&&(n=e.alternate.memoizedState),fo(e,n.next.queue,{},ti())}function ju(){return Mn(wo)}function ym(){return en().memoizedState}function xm(){return en().memoizedState}function TS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();e=Sa(a);var r=ya(n,e,a);r!==null&&(Xn(r,n,a),ro(r,n,a)),n={cache:Eu()},e.payload=n;return}n=n.return}}function bS(e,n,a){var r=ti();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bl(e)?Em(n,a):(a=hu(e,n,a,r),a!==null&&(Xn(a,e,r),Tm(a,n,r)))}function Mm(e,n,a){var r=ti();fo(e,n,a,r)}function fo(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(bl(e))Em(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(c.hasEagerState=!0,c.eagerState=T,jn(T,v))return sl(e,n,c,0),Ve===null&&al(),!1}catch{}finally{}if(a=hu(e,n,c,r),a!==null)return Xn(a,e,r),Tm(a,n,r),!0}return!1}function Zu(e,n,a,r){if(r={lane:2,revertLane:Cf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},bl(e)){if(n)throw Error(s(479))}else n=hu(e,a,r,2),n!==null&&Xn(n,e,2)}function bl(e){var n=e.alternate;return e===re||n!==null&&n===re}function Em(e,n){qs=vl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Tm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Gr(e,a)}}var ho={readContext:Mn,use:xl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};ho.useEffectEvent=Je;var bm={readContext:Mn,use:xl,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:lm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,El(4194308,4,hm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return El(4194308,4,e,n)},useInsertionEffect:function(e,n){El(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var r=e();if(cs){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Ln();if(a!==void 0){var c=a(n);if(cs){Ot(!0);try{a(n)}finally{Ot(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=bS.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Vu(e);var n=e.queue,a=Mm.bind(null,re,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Wu,useDeferredValue:function(e,n){var a=Ln();return qu(a,e,n)},useTransition:function(){var e=Vu(!1);return e=gm.bind(null,re,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=re,c=Ln();if(xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(ge&127)!==0||qp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,lm(jp.bind(null,r,f,e),[e]),r.flags|=2048,js(9,{destroy:void 0},Yp.bind(null,r,f,a,n),null),a},useId:function(){var e=Ln(),n=Ve.identifierPrefix;if(xe){var a=Ui,r=Di;a=(r&~(1<<32-Qt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Sl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=vS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ju,useFormState:im,useActionState:im,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Zu.bind(null,re,!0,a),a.dispatch=n,[e,n]},useMemoCache:Fu,useCacheRefresh:function(){return Ln().memoizedState=TS.bind(null,re)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((we&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ku={readContext:Mn,use:xl,useCallback:pm,useContext:Mn,useEffect:Xu,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:fm,useMemo:mm,useReducer:Ml,useRef:om,useState:function(){return Ml(qi)},useDebugValue:Wu,useDeferredValue:function(e,n){var a=en();return _m(a,ze.memoizedState,e,n)},useTransition:function(){var e=Ml(qi)[0],n=en().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:Wp,useId:ym,useHostTransitionStatus:ju,useFormState:am,useActionState:am,useOptimistic:function(e,n){var a=en();return Qp(a,ze,e,n)},useMemoCache:Fu,useCacheRefresh:xm};Ku.useEffectEvent=cm;var Am={readContext:Mn,use:xl,useCallback:pm,useContext:Mn,useEffect:Xu,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:fm,useMemo:mm,useReducer:Gu,useRef:om,useState:function(){return Gu(qi)},useDebugValue:Wu,useDeferredValue:function(e,n){var a=en();return ze===null?qu(a,e,n):_m(a,ze.memoizedState,e,n)},useTransition:function(){var e=Gu(qi)[0],n=en().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:Wp,useId:ym,useHostTransitionStatus:ju,useFormState:rm,useActionState:rm,useOptimistic:function(e,n){var a=en();return ze!==null?Qp(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:xm};Am.useEffectEvent=cm;function Qu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:S({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ju={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ti(),c=Sa(r);c.payload=n,a!=null&&(c.callback=a),n=ya(e,c,r),n!==null&&(Xn(n,e,r),ro(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ti(),c=Sa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ya(e,c,r),n!==null&&(Xn(n,e,r),ro(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ti(),r=Sa(a);r.tag=2,n!=null&&(r.callback=n),n=ya(e,r,a),n!==null&&(Xn(n,e,a),ro(n,e,a))}};function Rm(e,n,a,r,c,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!Jr(a,r)||!Jr(c,f):!0}function Cm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Ju.enqueueReplaceState(n,n.state,null)}function us(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=S({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function wm(e){il(e)}function Dm(e){console.error(e)}function Um(e){il(e)}function Al(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Lm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function $u(e,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Al(e,n)},a}function Nm(e){return e=Sa(e),e.tag=3,e}function Om(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){Lm(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Lm(n,a,r),typeof c!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function AS(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Hs(n,a,c,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?Il():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),bf(e,r,c)),!1;case 22:return a.flags|=65536,r===dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),bf(e,r,c)),!1}throw Error(s(435,a.tag))}return bf(e,r,c),Il(),!1}if(xe)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==vu&&(e=Error(s(422),{cause:r}),eo(ri(e,a)))):(r!==vu&&(n=Error(s(423),{cause:r}),eo(ri(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=ri(r,a),c=$u(e.stateNode,r,c),wu(e,c),$e!==4&&($e=2)),!1;var f=Error(s(520),{cause:r});if(f=ri(f,a),xo===null?xo=[f]:xo.push(f),$e!==4&&($e=2),n===null)return!0;r=ri(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=$u(a.stateNode,r,e),wu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Nm(c),Om(c,e,a,r),wu(a,c),!1}a=a.return}while(a!==null);return!1}var tf=Error(s(461)),sn=!1;function En(e,n,a,r){n.child=e===null?Ip(n,null,a,r):ls(n,e.child,a,r)}function Pm(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var T in r)T!=="ref"&&(v[T]=r[T])}else v=r;return as(n),r=Pu(e,n,a,v,f,c),T=zu(),e!==null&&!sn?(Bu(e,n,c),Yi(e,n,c)):(xe&&T&&_u(n),n.flags|=1,En(e,n,r,c),n.child)}function zm(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!du(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Bm(e,n,f,r,c)):(e=ol(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!cf(e,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Jr,a(v,r)&&e.ref===n.ref)return Yi(e,n,c)}return n.flags|=1,e=Gi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Bm(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Jr(f,r)&&e.ref===n.ref)if(sn=!1,n.pendingProps=r=f,cf(e,c))(e.flags&131072)!==0&&(sn=!0);else return n.lanes=e.lanes,Yi(e,n,c)}return ef(e,n,a,r,c)}function Im(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Fm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&fl(n,f!==null?f.cachePool:null),f!==null?Gp(n,f):Uu(),Vp(n);else return r=n.lanes=536870912,Fm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(fl(n,f.cachePool),Gp(n,f),Ma(),n.memoizedState=null):(e!==null&&fl(n,null),Uu(),Ma());return En(e,n,c,a),n.child}function po(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Fm(e,n,a,r,c){var f=bu();return f=f===null?null:{parent:nn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&fl(n,null),Uu(),Vp(n),e!==null&&Hs(e,n,r,!0),n.childLanes=c,null}function Rl(e,n){return n=wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Hm(e,n,a){return ls(n,e.child,null,a),e=Rl(n,n.pendingProps),e.flags|=2,Qn(n),n.memoizedState=null,e}function RS(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(xe){if(r.mode==="hidden")return e=Rl(n,r),n.lanes=536870912,po(null,e);if(Nu(n),(e=Xe)?(e=J_(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:pa!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Ep(e),a.return=n,n.child=a,xn=n,Xe=null)):e=null,e===null)throw _a(n);return n.lanes=536870912,null}return Rl(n,r)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Nu(n),c)if(n.flags&256)n.flags&=-257,n=Hm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(sn||Hs(e,n,a,!1),c=(a&e.childLanes)!==0,sn||c){if(r=Ve,r!==null&&(v=wi(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,ts(e,v),Xn(r,e,v),tf;Il(),n=Hm(e,n,a)}else e=f.treeContext,Xe=fi(v.nextSibling),xn=n,xe=!0,ma=null,ci=!1,e!==null&&Ap(n,e),n=Rl(n,r),n.flags|=4096;return n}return e=Gi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Cl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ef(e,n,a,r,c){return as(n),a=Pu(e,n,a,r,void 0,c),r=zu(),e!==null&&!sn?(Bu(e,n,c),Yi(e,n,c)):(xe&&r&&_u(n),n.flags|=1,En(e,n,a,c),n.child)}function Gm(e,n,a,r,c,f){return as(n),n.updateQueue=null,a=Xp(n,r,a,c),kp(e),r=zu(),e!==null&&!sn?(Bu(e,n,f),Yi(e,n,f)):(xe&&r&&_u(n),n.flags|=1,En(e,n,a,f),n.child)}function Vm(e,n,a,r,c){if(as(n),n.stateNode===null){var f=zs,v=a.contextType;typeof v=="object"&&v!==null&&(f=Mn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Ru(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Mn(v):zs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Qu(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Ju.enqueueReplaceState(f,f.state,null),lo(n,r,f,c),oo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,z=us(a,T);f.props=z;var tt=f.context,ut=a.contextType;v=zs,typeof ut=="object"&&ut!==null&&(v=Mn(ut));var gt=a.getDerivedStateFromProps;ut=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||tt!==v)&&Cm(n,f,r,v),va=!1;var et=n.memoizedState;f.state=et,lo(n,r,f,c),oo(),tt=n.memoizedState,T||et!==tt||va?(typeof gt=="function"&&(Qu(n,a,gt,r),tt=n.memoizedState),(z=va||Rm(n,a,z,r,et,tt,v))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=tt),f.props=r,f.state=tt,f.context=v,r=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Cu(e,n),v=n.memoizedProps,ut=us(a,v),f.props=ut,gt=n.pendingProps,et=f.context,tt=a.contextType,z=zs,typeof tt=="object"&&tt!==null&&(z=Mn(tt)),T=a.getDerivedStateFromProps,(tt=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==gt||et!==z)&&Cm(n,f,r,z),va=!1,et=n.memoizedState,f.state=et,lo(n,r,f,c),oo();var ot=n.memoizedState;v!==gt||et!==ot||va||e!==null&&e.dependencies!==null&&cl(e.dependencies)?(typeof T=="function"&&(Qu(n,a,T,r),ot=n.memoizedState),(ut=va||Rm(n,a,ut,r,et,ot,z)||e!==null&&e.dependencies!==null&&cl(e.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=z,r=ut):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Cl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ls(n,e.child,null,c),n.child=ls(n,null,a,c)):En(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Yi(e,n,c),e}function km(e,n,a,r){return ns(),n.flags|=256,En(e,n,a,r),n.child}var nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function af(e){return{baseLanes:e,cachePool:Lp()}}function sf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=$n),e}function Xm(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(xe){if(c?xa(n):Ma(),(e=Xe)?(e=J_(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:pa!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Ep(e),a.return=n,n.child=a,xn=n,Xe=null)):e=null,e===null)throw _a(n);return Gf(e)?n.lanes=32:n.lanes=536870912,null}var T=r.children;return r=r.fallback,c?(Ma(),c=n.mode,T=wl({mode:"hidden",children:T},c),r=es(r,c,a,null),T.return=n,r.return=n,T.sibling=r,n.child=T,r=n.child,r.memoizedState=af(a),r.childLanes=sf(e,v,a),n.memoizedState=nf,po(null,r)):(xa(n),rf(n,T))}var z=e.memoizedState;if(z!==null&&(T=z.dehydrated,T!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=of(e,n,a)):n.memoizedState!==null?(Ma(),n.child=e.child,n.flags|=128,n=null):(Ma(),T=r.fallback,c=n.mode,r=wl({mode:"visible",children:r.children},c),T=es(T,c,a,null),T.flags|=2,r.return=n,T.return=n,r.sibling=T,n.child=r,ls(n,e.child,null,a),r=n.child,r.memoizedState=af(a),r.childLanes=sf(e,v,a),n.memoizedState=nf,n=po(null,r));else if(xa(n),Gf(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var tt=v.dgst;v=tt,r=Error(s(419)),r.stack="",r.digest=v,eo({value:r,source:null,stack:null}),n=of(e,n,a)}else if(sn||Hs(e,n,a,!1),v=(a&e.childLanes)!==0,sn||v){if(v=Ve,v!==null&&(r=wi(v,a),r!==0&&r!==z.retryLane))throw z.retryLane=r,ts(e,r),Xn(v,e,r),tf;Hf(T)||Il(),n=of(e,n,a)}else Hf(T)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,Xe=fi(T.nextSibling),xn=n,xe=!0,ma=null,ci=!1,e!==null&&Ap(n,e),n=rf(n,r.children),n.flags|=4096);return n}return c?(Ma(),T=r.fallback,c=n.mode,z=e.child,tt=z.sibling,r=Gi(z,{mode:"hidden",children:r.children}),r.subtreeFlags=z.subtreeFlags&65011712,tt!==null?T=Gi(tt,T):(T=es(T,c,a,null),T.flags|=2),T.return=n,r.return=n,r.sibling=T,n.child=r,po(null,r),r=n.child,T=e.child.memoizedState,T===null?T=af(a):(c=T.cachePool,c!==null?(z=nn._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=Lp(),T={baseLanes:T.baseLanes|a,cachePool:c}),r.memoizedState=T,r.childLanes=sf(e,v,a),n.memoizedState=nf,po(e.child,r)):(xa(n),a=e.child,e=a.sibling,a=Gi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function rf(e,n){return n=wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function wl(e,n){return e=Zn(22,e,null,n),e.lanes=0,e}function of(e,n,a){return ls(n,e.child,null,a),e=rf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Wm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),xu(e.return,n,a)}function lf(e,n,a,r,c,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function qm(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var v=tn.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,mt(tn,v),En(e,n,r,a),r=xe?to:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wm(e,a,n);else if(e.tag===19)Wm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&gl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),lf(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&gl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}lf(n,!0,a,null,f,r);break;case"together":lf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Hs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Gi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Gi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function cf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&cl(e)))}function CS(e,n,a){switch(n.tag){case 3:Bt(n,n.stateNode.containerInfo),ga(n,nn,e.memoizedState.cache),ns();break;case 27:case 5:ee(n);break;case 4:Bt(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Nu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Xm(e,n,a):(xa(n),e=Yi(e,n,a),e!==null?e.sibling:null);xa(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Hs(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return qm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),mt(tn,tn.current),r)break;return null;case 22:return n.lanes=0,Im(e,n,a,n.pendingProps);case 24:ga(n,nn,e.memoizedState.cache)}return Yi(e,n,a)}function Ym(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)sn=!0;else{if(!cf(e,a)&&(n.flags&128)===0)return sn=!1,CS(e,n,a);sn=(e.flags&131072)!==0}else sn=!1,xe&&(n.flags&1048576)!==0&&bp(n,to,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=rs(n.elementType),n.type=e,typeof e=="function")du(e)?(r=us(e,r),n.tag=1,n=Vm(null,n,e,r,a)):(n.tag=0,n=ef(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===D){n.tag=11,n=Pm(null,n,e,r,a);break t}else if(c===P){n.tag=14,n=zm(null,n,e,r,a);break t}}throw n=ft(e)||e,Error(s(306,n,""))}}return n;case 0:return ef(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=us(r,n.pendingProps),Vm(e,n,r,c,a);case 3:t:{if(Bt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Cu(e,n),lo(n,r,null,a);var v=n.memoizedState;if(r=v.cache,ga(n,nn,r),r!==f.cache&&Mu(n,[nn],a,!0),oo(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=km(e,n,r,a);break t}else if(r!==c){c=ri(Error(s(424)),n),eo(c),n=km(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Xe=fi(e.firstChild),xn=n,xe=!0,ma=null,ci=!0,a=Ip(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ns(),r===c){n=Yi(e,n,a);break t}En(e,n,r,a)}n=n.child}return n;case 26:return Cl(e,n),e===null?(a=ag(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,e=n.pendingProps,r=Wl(xt.current).createElement(a),r[Ke]=n,r[Sn]=e,Tn(r,a,e),V(r),n.stateNode=r):n.memoizedState=ag(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ee(n),e===null&&xe&&(r=n.stateNode=eg(n.type,n.pendingProps,xt.current),xn=n,ci=!0,c=Xe,Da(n.type)?(Vf=c,Xe=fi(r.firstChild)):Xe=c),En(e,n,n.pendingProps.children,a),Cl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&xe&&((c=r=Xe)&&(r=ay(r,n.type,n.pendingProps,ci),r!==null?(n.stateNode=r,xn=n,Xe=fi(r.firstChild),ci=!1,c=!0):c=!1),c||_a(n)),ee(n),c=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,r=f.children,Bf(c,f)?r=null:v!==null&&Bf(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Pu(e,n,SS,null,null,a),wo._currentValue=c),Cl(e,n),En(e,n,r,a),n.child;case 6:return e===null&&xe&&((e=a=Xe)&&(a=sy(a,n.pendingProps,ci),a!==null?(n.stateNode=a,xn=n,Xe=null,e=!0):e=!1),e||_a(n)),null;case 13:return Xm(e,n,a);case 4:return Bt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ls(n,null,r,a):En(e,n,r,a),n.child;case 11:return Pm(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ga(n,n.type,r.value),En(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,as(n),c=Mn(c),r=r(c),n.flags|=1,En(e,n,r,a),n.child;case 14:return zm(e,n,n.type,n.pendingProps,a);case 15:return Bm(e,n,n.type,n.pendingProps,a);case 19:return qm(e,n,a);case 31:return RS(e,n,a);case 22:return Im(e,n,a,n.pendingProps);case 24:return as(n),r=Mn(nn),e===null?(c=bu(),c===null&&(c=Ve,f=Eu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Ru(n),ga(n,nn,c)):((e.lanes&a)!==0&&(Cu(e,n),lo(n,null,null,a),oo()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ga(n,nn,r)):(r=f.cache,ga(n,nn,r),r!==c.cache&&Mu(n,[nn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ji(e){e.flags|=4}function uf(e,n,a,r,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(y_())e.flags|=8192;else throw os=dl,Au}else e.flags&=-16777217}function jm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!cg(n))if(y_())e.flags|=8192;else throw os=dl,Au}function Dl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ln():536870912,e.lanes|=n,Js|=n)}function mo(e,n){if(!xe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function wS(e,n,a){var r=n.pendingProps;switch(gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Xi(nn),Pt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fs(n)?ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Su())),We(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(ji(n),f!==null?(We(n),jm(n,f)):(We(n),uf(n,c,null,r,a))):f?f!==e.memoizedState?(ji(n),We(n),jm(n,f)):(We(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&ji(n),We(n),uf(n,c,e,r,a)),null;case 27:if(Ne(n),a=xt.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),null}e=W.current,Fs(n)?Rp(n):(e=eg(c,r,a),n.stateNode=e,ji(n))}return We(n),null;case 5:if(Ne(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),null}if(f=W.current,Fs(n))Rp(n);else{var v=Wl(xt.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(c,{is:r.is}):v.createElement(c)}}f[Ke]=n,f[Sn]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Tn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ji(n)}}return We(n),uf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ji(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=xt.current,Fs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=xn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[Ke]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||X_(e.nodeValue,a)),e||_a(n,!0)}else e=Wl(e).createTextNode(r),e[Ke]=n,n.stateNode=e}return We(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Fs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Ke]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),e=!1}else a=Su(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return We(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Fs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Ke]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),c=!1}else c=Su(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Dl(n,n.updateQueue),We(n),null);case 4:return Pt(),e===null&&Lf(n.stateNode.containerInfo),We(n),null;case 10:return Xi(n.type),We(n),null;case 19:if(J(tn),r=n.memoizedState,r===null)return We(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)mo(r,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=gl(e),f!==null){for(n.flags|=128,mo(r,!1),e=f.updateQueue,n.updateQueue=e,Dl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Mp(a,e),a=a.sibling;return mt(tn,tn.current&1|2),xe&&Vi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&dt()>Pl&&(n.flags|=128,c=!0,mo(r,!1),n.lanes=4194304)}else{if(!c)if(e=gl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Dl(n,e),mo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!xe)return We(n),null}else 2*dt()-r.renderingStartTime>Pl&&a!==536870912&&(n.flags|=128,c=!0,mo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=dt(),e.sibling=null,a=tn.current,mt(tn,c?a&1|2:a&1),xe&&Vi(n,r.treeForkCount),e):(We(n),null);case 22:case 23:return Qn(n),Lu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Dl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&J(ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(nn),We(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function DS(e,n){switch(gu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(nn),Pt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(s(340));ns()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Qn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ns()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(tn),null;case 4:return Pt(),null;case 10:return Xi(n.type),null;case 22:case 23:return Qn(n),Lu(),e!==null&&J(ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(nn),null;case 25:return null;default:return null}}function Zm(e,n){switch(gu(n),n.tag){case 3:Xi(nn),Pt();break;case 26:case 27:case 5:Ne(n);break;case 4:Pt();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:J(tn);break;case 10:Xi(n.type);break;case 22:case 23:Qn(n),Lu(),e!==null&&J(ss);break;case 24:Xi(nn)}}function _o(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==c)}}catch(T){Le(n,n.return,T)}}function Ea(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var v=r.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,c=n;var z=a,tt=T;try{tt()}catch(ut){Le(c,z,ut)}}}r=r.next}while(r!==f)}}catch(ut){Le(n,n.return,ut)}}function Km(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Hp(n,a)}catch(r){Le(e,e.return,r)}}}function Qm(e,n,a){a.props=us(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Le(e,n,r)}}function go(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){Le(e,n,c)}}function Li(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Le(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Le(e,n,c)}else a.current=null}function Jm(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Le(e,e.return,c)}}function ff(e,n,a){try{var r=e.stateNode;JS(r,e.type,a,n),r[Sn]=n}catch(c){Le(e,e.return,c)}}function $m(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function hf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||$m(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function df(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fi));else if(r!==4&&(r===27&&Da(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(df(e,n,a),e=e.sibling;e!==null;)df(e,n,a),e=e.sibling}function Ul(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Da(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ul(e,n,a),e=e.sibling;e!==null;)Ul(e,n,a),e=e.sibling}function t_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,r,a),n[Ke]=e,n[Sn]=a}catch(f){Le(e,e.return,f)}}var Zi=!1,rn=!1,pf=!1,e_=typeof WeakSet=="function"?WeakSet:Set,mn=null;function US(e,n){if(e=e.containerInfo,Pf=Jl,e=dp(e),ru(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,T=-1,z=-1,tt=0,ut=0,gt=e,et=null;e:for(;;){for(var ot;gt!==a||c!==0&&gt.nodeType!==3||(T=v+c),gt!==f||r!==0&&gt.nodeType!==3||(z=v+r),gt.nodeType===3&&(v+=gt.nodeValue.length),(ot=gt.firstChild)!==null;)et=gt,gt=ot;for(;;){if(gt===e)break e;if(et===a&&++tt===c&&(T=v),et===f&&++ut===r&&(z=v),(ot=gt.nextSibling)!==null)break;gt=et,et=gt.parentNode}gt=ot}a=T===-1||z===-1?null:{start:T,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(zf={focusedElem:e,selectionRange:a},Jl=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ht=us(a.type,c);e=r.getSnapshotBeforeUpdate(Ht,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(Kt){Le(a,a.return,Kt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ff(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ff(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function n_(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(e,a),r&4&&_o(5,a);break;case 1:if(Qi(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Le(a,a.return,v)}else{var c=us(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Le(a,a.return,v)}}r&64&&Km(a),r&512&&go(a,a.return);break;case 3:if(Qi(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Hp(e,n)}catch(v){Le(a,a.return,v)}}break;case 27:n===null&&r&4&&t_(a);case 26:case 5:Qi(e,a),n===null&&r&4&&Jm(a),r&512&&go(a,a.return);break;case 12:Qi(e,a);break;case 31:Qi(e,a),r&4&&s_(e,a);break;case 13:Qi(e,a),r&4&&r_(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=HS.bind(null,a),ry(e,a))));break;case 22:if(r=a.memoizedState!==null||Zi,!r){n=n!==null&&n.memoizedState!==null||rn,c=Zi;var f=rn;Zi=r,(rn=n)&&!f?Ji(e,a,(a.subtreeFlags&8772)!==0):Qi(e,a),Zi=c,rn=f}break;case 30:break;default:Qi(e,a)}}function i_(e){var n=e.alternate;n!==null&&(e.alternate=null,i_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Xr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,Hn=!1;function Ki(e,n,a){for(a=a.child;a!==null;)a_(e,n,a),a=a.sibling}function a_(e,n,a){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(qt,a)}catch{}switch(a.tag){case 26:rn||Li(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Li(a,n);var r=je,c=Hn;Da(a.type)&&(je=a.stateNode,Hn=!1),Ki(e,n,a),Ao(a.stateNode),je=r,Hn=c;break;case 5:rn||Li(a,n);case 6:if(r=je,c=Hn,je=null,Ki(e,n,a),je=r,Hn=c,je!==null)if(Hn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){Le(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){Le(a,n,f)}break;case 18:je!==null&&(Hn?(e=je,K_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),rr(e)):K_(je,a.stateNode));break;case 4:r=je,c=Hn,je=a.stateNode.containerInfo,Hn=!0,Ki(e,n,a),je=r,Hn=c;break;case 0:case 11:case 14:case 15:Ea(2,a,n),rn||Ea(4,a,n),Ki(e,n,a);break;case 1:rn||(Li(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Qm(a,n,r)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:rn=(r=rn)||a.memoizedState!==null,Ki(e,n,a),rn=r;break;default:Ki(e,n,a)}}function s_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{rr(e)}catch(a){Le(n,n.return,a)}}}function r_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rr(e)}catch(a){Le(n,n.return,a)}}function LS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new e_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new e_),n;default:throw Error(s(435,e.tag))}}function Ll(e,n){var a=LS(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=GS.bind(null,e,r);r.then(c,c)}})}function Gn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,v=n,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(Da(T.type)){je=T.stateNode,Hn=!1;break t}break;case 5:je=T.stateNode,Hn=!1;break t;case 3:case 4:je=T.stateNode.containerInfo,Hn=!0;break t}T=T.return}if(je===null)throw Error(s(160));a_(f,v,c),je=null,Hn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)o_(n,e),n=n.sibling}var Si=null;function o_(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gn(n,e),Vn(e),r&4&&(Ea(3,e,e.return),_o(3,e),Ea(5,e,e.return));break;case 1:Gn(n,e),Vn(e),r&512&&(rn||a===null||Li(a,a.return)),r&64&&Zi&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=Si;if(Gn(n,e),Vn(e),r&512&&(rn||a===null||Li(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ka]||f[Ke]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,r,a),f[Ke]=e,V(f),r=f;break t;case"link":var v=og("link","href",c).get(r+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;case"meta":if(v=og("meta","content",c).get(r+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[Ke]=e,V(f),r=f}e.stateNode=r}else lg(c,e.type,e.stateNode);else e.stateNode=rg(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?lg(c,e.type,e.stateNode):rg(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&ff(e,e.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,e),Vn(e),r&512&&(rn||a===null||Li(a,a.return)),a!==null&&r&4&&ff(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,e),Vn(e),r&512&&(rn||a===null||Li(a,a.return)),e.flags&32){c=e.stateNode;try{In(c,"")}catch(Ht){Le(e,e.return,Ht)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,ff(e,c,a!==null?a.memoizedProps:c)),r&1024&&(pf=!0);break;case 6:if(Gn(n,e),Vn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Ht){Le(e,e.return,Ht)}}break;case 3:if(jl=null,c=Si,Si=ql(n.containerInfo),Gn(n,e),Si=c,Vn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{rr(n.containerInfo)}catch(Ht){Le(e,e.return,Ht)}pf&&(pf=!1,l_(e));break;case 4:r=Si,Si=ql(e.stateNode.containerInfo),Gn(n,e),Vn(e),Si=r;break;case 12:Gn(n,e),Vn(e);break;case 31:Gn(n,e),Vn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ll(e,r)));break;case 13:Gn(n,e),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ol=dt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ll(e,r)));break;case 22:c=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,tt=Zi,ut=rn;if(Zi=tt||c,rn=ut||z,Gn(n,e),rn=ut,Zi=tt,Vn(e),r&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||Zi||rn||fs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=z.stateNode;var gt=z.memoizedProps.style,et=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Ht){Le(z,z.return,Ht)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(Ht){Le(z,z.return,Ht)}}}else if(n.tag===18){if(a===null){z=n;try{var ot=z.stateNode;c?Q_(ot,!0):Q_(z.stateNode,!1)}catch(Ht){Le(z,z.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ll(e,a))));break;case 19:Gn(n,e),Vn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ll(e,r)));break;case 30:break;case 21:break;default:Gn(n,e),Vn(e)}}function Vn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if($m(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=hf(e);Ul(e,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(In(v,""),a.flags&=-33);var T=hf(e);Ul(e,T,v);break;case 3:case 4:var z=a.stateNode.containerInfo,tt=hf(e);df(e,tt,z);break;default:throw Error(s(161))}}catch(ut){Le(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function l_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;l_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Qi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)n_(e,n.alternate,n),n=n.sibling}function fs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),fs(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Qm(n,n.return,a),fs(n);break;case 27:Ao(n.stateNode);case 26:case 5:Li(n,n.return),fs(n);break;case 22:n.memoizedState===null&&fs(n);break;case 30:fs(n);break;default:fs(n)}e=e.sibling}}function Ji(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Ji(c,f,a),_o(4,f);break;case 1:if(Ji(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(tt){Le(r,r.return,tt)}if(r=f,c=r.updateQueue,c!==null){var T=r.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Fp(z[c],T)}catch(tt){Le(r,r.return,tt)}}a&&v&64&&Km(f),go(f,f.return);break;case 27:t_(f);case 26:case 5:Ji(c,f,a),a&&r===null&&v&4&&Jm(f),go(f,f.return);break;case 12:Ji(c,f,a);break;case 31:Ji(c,f,a),a&&v&4&&s_(c,f);break;case 13:Ji(c,f,a),a&&v&4&&r_(c,f);break;case 22:f.memoizedState===null&&Ji(c,f,a),go(f,f.return);break;case 30:break;default:Ji(c,f,a)}n=n.sibling}}function mf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&no(a))}function _f(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&no(e))}function yi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)c_(e,n,a,r),n=n.sibling}function c_(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(e,n,a,r),c&2048&&_o(9,n);break;case 1:yi(e,n,a,r);break;case 3:yi(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&no(e)));break;case 12:if(c&2048){yi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Le(n,n.return,z)}}else yi(e,n,a,r);break;case 31:yi(e,n,a,r);break;case 13:yi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?yi(e,n,a,r):vo(e,n):f._visibility&2?yi(e,n,a,r):(f._visibility|=2,Zs(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&mf(v,n);break;case 24:yi(e,n,a,r),c&2048&&_f(n.alternate,n);break;default:yi(e,n,a,r)}}function Zs(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,T=a,z=r,tt=v.flags;switch(v.tag){case 0:case 11:case 15:Zs(f,v,T,z,c),_o(8,v);break;case 23:break;case 22:var ut=v.stateNode;v.memoizedState!==null?ut._visibility&2?Zs(f,v,T,z,c):vo(f,v):(ut._visibility|=2,Zs(f,v,T,z,c)),c&&tt&2048&&mf(v.alternate,v);break;case 24:Zs(f,v,T,z,c),c&&tt&2048&&_f(v.alternate,v);break;default:Zs(f,v,T,z,c)}n=n.sibling}}function vo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:vo(a,r),c&2048&&mf(r.alternate,r);break;case 24:vo(a,r),c&2048&&_f(r.alternate,r);break;default:vo(a,r)}n=n.sibling}}var So=8192;function Ks(e,n,a){if(e.subtreeFlags&So)for(e=e.child;e!==null;)u_(e,n,a),e=e.sibling}function u_(e,n,a){switch(e.tag){case 26:Ks(e,n,a),e.flags&So&&e.memoizedState!==null&&vy(a,Si,e.memoizedState,e.memoizedProps);break;case 5:Ks(e,n,a);break;case 3:case 4:var r=Si;Si=ql(e.stateNode.containerInfo),Ks(e,n,a),Si=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=So,So=16777216,Ks(e,n,a),So=r):Ks(e,n,a));break;default:Ks(e,n,a)}}function f_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function yo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,d_(r,e)}f_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)h_(e),e=e.sibling}function h_(e){switch(e.tag){case 0:case 11:case 15:yo(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:yo(e);break;case 12:yo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Nl(e)):yo(e);break;default:yo(e)}}function Nl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];mn=r,d_(r,e)}f_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Nl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nl(n));break;default:Nl(n)}e=e.sibling}}function d_(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:no(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,mn=r;else t:for(a=e;mn!==null;){r=mn;var c=r.sibling,f=r.return;if(i_(r),r===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var NS={getCacheForType:function(e){var n=Mn(nn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(nn).controller.signal}},OS=typeof WeakMap=="function"?WeakMap:Map,we=0,Ve=null,de=null,ge=0,Ue=0,Jn=null,Ta=!1,Qs=!1,gf=!1,$i=0,$e=0,ba=0,hs=0,vf=0,$n=0,Js=0,xo=null,kn=null,Sf=!1,Ol=0,p_=0,Pl=1/0,zl=null,Aa=null,un=0,Ra=null,$s=null,ta=0,yf=0,xf=null,m_=null,Mo=0,Mf=null;function ti(){return(we&2)!==0&&ge!==0?ge&-ge:N.T!==null?Cf():Vr()}function __(){if($n===0)if((ge&536870912)===0||xe){var e=ct;ct<<=1,(ct&3932160)===0&&(ct=262144),$n=e}else $n=536870912;return e=Kn.current,e!==null&&(e.flags|=32),$n}function Xn(e,n,a){(e===Ve&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(tr(e,0),Ca(e,ge,$n,!1)),vn(e,a),((we&2)===0||e!==Ve)&&(e===Ve&&((we&2)===0&&(hs|=a),$e===4&&Ca(e,ge,$n,!1)),Ni(e))}function g_(e,n,a){if((we&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Jt(e,n),c=r?BS(e,n):Tf(e,n,!0),f=r;do{if(c===0){Qs&&!r&&Ca(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!PS(a)){c=Tf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=e;c=xo;var z=T.current.memoizedState.isDehydrated;if(z&&(tr(T,v).flags|=256),v=Tf(T,v,!1),v!==2){if(gf&&!z){T.errorRecoveryDisabledLanes|=f,hs|=f,c=4;break t}f=kn,kn=c,f!==null&&(kn===null?kn=f:kn.push.apply(kn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){tr(e,0),Ca(e,n,0,!0);break}t:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ca(r,n,$n,!Ta);break t;case 2:kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Ol+300-dt(),10<c)){if(Ca(r,n,$n,!Ta),Dt(r,0,!0)!==0)break t;ta=n,r.timeoutHandle=j_(v_.bind(null,r,a,kn,zl,Sf,n,$n,hs,Js,Ta,f,"Throttled",-0,0),c);break t}v_(r,a,kn,zl,Sf,n,$n,hs,Js,Ta,f,null,-0,0)}}break}while(!0);Ni(e)}function v_(e,n,a,r,c,f,v,T,z,tt,ut,gt,et,ot){if(e.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},u_(n,f,gt);var Ht=(f&62914560)===f?Ol-dt():(f&4194048)===f?p_-dt():0;if(Ht=Sy(gt,Ht),Ht!==null){ta=f,e.cancelPendingCommit=Ht(A_.bind(null,e,n,f,a,r,c,v,T,z,ut,gt,null,et,ot)),Ca(e,f,v,!tt);return}}A_(e,n,f,a,r,c,v,T,z)}function PS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!jn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(e,n,a,r){n&=~vf,n&=~hs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Qt(c),v=1<<f;r[f]=-1,c&=~v}a!==0&&Hr(e,a,n)}function Bl(){return(we&6)===0?(Eo(0),!1):!0}function Ef(){if(de!==null){if(Ue===0)var e=de.return;else e=de,ki=is=null,Iu(e),Xs=null,ao=0,e=de;for(;e!==null;)Zm(e.alternate,e),e=e.return;de=null}}function tr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ey(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ta=0,Ef(),Ve=e,de=a=Gi(e.current,null),ge=n,Ue=0,Jn=null,Ta=!1,Qs=Jt(e,n),gf=!1,Js=$n=vf=hs=ba=$e=0,kn=xo=null,Sf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-Qt(r),f=1<<c;n|=e[c],r&=~f}return $i=n,al(),a}function S_(e,n){re=null,N.H=ho,n===ks||n===hl?(n=Pp(),Ue=3):n===Au?(n=Pp(),Ue=4):Ue=n===tf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,de===null&&($e=1,Al(e,ri(n,e.current)))}function y_(){var e=Kn.current;return e===null?!0:(ge&4194048)===ge?ui===null:(ge&62914560)===ge||(ge&536870912)!==0?e===ui:!1}function x_(){var e=N.H;return N.H=ho,e===null?ho:e}function M_(){var e=N.A;return N.A=NS,e}function Il(){$e=4,Ta||(ge&4194048)!==ge&&Kn.current!==null||(Qs=!0),(ba&134217727)===0&&(hs&134217727)===0||Ve===null||Ca(Ve,ge,$n,!1)}function Tf(e,n,a){var r=we;we|=2;var c=x_(),f=M_();(Ve!==e||ge!==n)&&(zl=null,tr(e,n)),n=!1;var v=$e;t:do try{if(Ue!==0&&de!==null){var T=de,z=Jn;switch(Ue){case 8:Ef(),v=6;break t;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var tt=Ue;if(Ue=0,Jn=null,er(e,T,z,tt),a&&Qs){v=0;break t}break;default:tt=Ue,Ue=0,Jn=null,er(e,T,z,tt)}}zS(),v=$e;break}catch(ut){S_(e,ut)}while(!0);return n&&e.shellSuspendCounter++,ki=is=null,we=r,N.H=c,N.A=f,de===null&&(Ve=null,ge=0,al()),v}function zS(){for(;de!==null;)E_(de)}function BS(e,n){var a=we;we|=2;var r=x_(),c=M_();Ve!==e||ge!==n?(zl=null,Pl=dt()+500,tr(e,n)):Qs=Jt(e,n);t:do try{if(Ue!==0&&de!==null){n=de;var f=Jn;e:switch(Ue){case 1:Ue=0,Jn=null,er(e,n,f,1);break;case 2:case 9:if(Np(f)){Ue=0,Jn=null,T_(n);break}n=function(){Ue!==2&&Ue!==9||Ve!==e||(Ue=7),Ni(e)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:Np(f)?(Ue=0,Jn=null,T_(n)):(Ue=0,Jn=null,er(e,n,f,7));break;case 5:var v=null;switch(de.tag){case 26:v=de.memoizedState;case 5:case 27:var T=de;if(v?cg(v):T.stateNode.complete){Ue=0,Jn=null;var z=T.sibling;if(z!==null)de=z;else{var tt=T.return;tt!==null?(de=tt,Fl(tt)):de=null}break e}}Ue=0,Jn=null,er(e,n,f,5);break;case 6:Ue=0,Jn=null,er(e,n,f,6);break;case 8:Ef(),$e=6;break t;default:throw Error(s(462))}}IS();break}catch(ut){S_(e,ut)}while(!0);return ki=is=null,N.H=r,N.A=c,we=a,de!==null?0:(Ve=null,ge=0,al(),$e)}function IS(){for(;de!==null&&!b();)E_(de)}function E_(e){var n=Ym(e.alternate,e,$i);e.memoizedProps=e.pendingProps,n===null?Fl(e):de=n}function T_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Gm(a,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=Gm(a,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:Iu(n);default:Zm(a,n),n=de=Mp(n,$i),n=Ym(a,n,$i)}e.memoizedProps=e.pendingProps,n===null?Fl(e):de=n}function er(e,n,a,r){ki=is=null,Iu(n),Xs=null,ao=0;var c=n.return;try{if(AS(e,c,n,a,ge)){$e=1,Al(e,ri(a,e.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;$e=1,Al(e,ri(a,e.current)),de=null;return}n.flags&32768?(xe||r===1?e=!0:Qs||(ge&536870912)!==0?e=!1:(Ta=e=!0,(r===2||r===9||r===3||r===6)&&(r=Kn.current,r!==null&&r.tag===13&&(r.flags|=16384))),b_(n,e)):Fl(n)}function Fl(e){var n=e;do{if((n.flags&32768)!==0){b_(n,Ta);return}e=n.return;var a=wS(n.alternate,n,$i);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);$e===0&&($e=5)}function b_(e,n){do{var a=DS(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);$e=6,de=null}function A_(e,n,a,r,c,f,v,T,z){e.cancelPendingCommit=null;do Hl();while(un!==0);if((we&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=fu,mi(e,a,f,v,T,z),e===Ve&&(de=Ve=null,ge=0),$s=n,Ra=e,ta=a,yf=f,xf=c,m_=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,VS(wt,function(){return U_(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=N.T,N.T=null,c=K.p,K.p=2,v=we,we|=4;try{US(e,n,a)}finally{we=v,K.p=c,N.T=r}}un=1,R_(),C_(),w_()}}function R_(){if(un===1){un=0;var e=Ra,n=$s,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var r=K.p;K.p=2;var c=we;we|=4;try{o_(n,e);var f=zf,v=dp(e.containerInfo),T=f.focusedElem,z=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&hp(T.ownerDocument.documentElement,T)){if(z!==null&&ru(T)){var tt=z.start,ut=z.end;if(ut===void 0&&(ut=tt),"selectionStart"in T)T.selectionStart=tt,T.selectionEnd=Math.min(ut,T.value.length);else{var gt=T.ownerDocument||document,et=gt&&gt.defaultView||window;if(et.getSelection){var ot=et.getSelection(),Ht=T.textContent.length,Kt=Math.min(z.start,Ht),Ie=z.end===void 0?Kt:Math.min(z.end,Ht);!ot.extend&&Kt>Ie&&(v=Ie,Ie=Kt,Kt=v);var Q=fp(T,Kt),G=fp(T,Ie);if(Q&&G&&(ot.rangeCount!==1||ot.anchorNode!==Q.node||ot.anchorOffset!==Q.offset||ot.focusNode!==G.node||ot.focusOffset!==G.offset)){var $=gt.createRange();$.setStart(Q.node,Q.offset),ot.removeAllRanges(),Kt>Ie?(ot.addRange($),ot.extend(G.node,G.offset)):($.setEnd(G.node,G.offset),ot.addRange($))}}}}for(gt=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&gt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<gt.length;T++){var pt=gt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Jl=!!Pf,zf=Pf=null}finally{we=c,K.p=r,N.T=a}}e.current=n,un=2}}function C_(){if(un===2){un=0;var e=Ra,n=$s,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var r=K.p;K.p=2;var c=we;we|=4;try{n_(e,n.alternate,n)}finally{we=c,K.p=r,N.T=a}}un=3}}function w_(){if(un===4||un===3){un=0,nt();var e=Ra,n=$s,a=ta,r=m_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?un=5:(un=0,$s=Ra=null,D_(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Aa=null),Cs(a),n=n.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(qt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=N.T,c=K.p,K.p=2,N.T=null;try{for(var f=e.onRecoverableError,v=0;v<r.length;v++){var T=r[v];f(T.value,{componentStack:T.stack})}}finally{N.T=n,K.p=c}}(ta&3)!==0&&Hl(),Ni(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Mf?Mo++:(Mo=0,Mf=e):Mo=0,Eo(0)}}function D_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,no(n)))}function Hl(){return R_(),C_(),w_(),U_()}function U_(){if(un!==5)return!1;var e=Ra,n=yf;yf=0;var a=Cs(ta),r=N.T,c=K.p;try{K.p=32>a?32:a,N.T=null,a=xf,xf=null;var f=Ra,v=ta;if(un=0,$s=Ra=null,ta=0,(we&6)!==0)throw Error(s(331));var T=we;if(we|=4,h_(f.current),c_(f,f.current,v,a),we=T,Eo(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(qt,f)}catch{}return!0}finally{K.p=c,N.T=r,D_(e,n)}}function L_(e,n,a){n=ri(a,n),n=$u(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(vn(e,2),Ni(e))}function Le(e,n,a){if(e.tag===3)L_(e,e,a);else for(;n!==null;){if(n.tag===3){L_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Aa===null||!Aa.has(r))){e=ri(a,e),a=Nm(2),r=ya(n,a,2),r!==null&&(Om(a,r,n,e),vn(r,2),Ni(r));break}}n=n.return}}function bf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new OS;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(gf=!0,c.add(a),e=FS.bind(null,e,n,a),n.then(e,e))}function FS(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(ge&a)===a&&($e===4||$e===3&&(ge&62914560)===ge&&300>dt()-Ol?(we&2)===0&&tr(e,0):vf|=a,Js===ge&&(Js=0)),Ni(e)}function N_(e,n){n===0&&(n=ln()),e=ts(e,n),e!==null&&(vn(e,n),Ni(e))}function HS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),N_(e,a)}function GS(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),N_(e,a)}function VS(e,n){return Xt(e,n)}var Gl=null,nr=null,Af=!1,Vl=!1,Rf=!1,wa=0;function Ni(e){e!==nr&&e.next===null&&(nr===null?Gl=nr=e:nr=nr.next=e),Vl=!0,Af||(Af=!0,XS())}function Eo(e,n){if(!Rf&&Vl){Rf=!0;do for(var a=!1,r=Gl;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var v=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-Qt(42|e)+1)-1,f&=c&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,B_(r,f))}else f=ge,f=Dt(r,r===Ve?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Jt(r,f)||(a=!0,B_(r,f));r=r.next}while(a);Rf=!1}}function kS(){O_()}function O_(){Vl=Af=!1;var e=0;wa!==0&&ty()&&(e=wa);for(var n=dt(),a=null,r=Gl;r!==null;){var c=r.next,f=P_(r,n);f===0?(r.next=null,a===null?Gl=c:a.next=c,c===null&&(nr=a)):(a=r,(e!==0||(f&3)!==0)&&(Vl=!0)),r=c}un!==0&&un!==5||Eo(e),wa!==0&&(wa=0)}function P_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Qt(f),T=1<<v,z=c[v];z===-1?((T&a)===0||(T&r)!==0)&&(c[v]=Ye(T,n)):z<=n&&(e.expiredLanes|=T),f&=~T}if(n=Ve,a=ge,a=Dt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&U(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Jt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&U(r),Cs(a)){case 2:case 8:a=Vt;break;case 32:a=wt;break;case 268435456:a=_e;break;default:a=wt}return r=z_.bind(null,e),a=Xt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&U(r),e.callbackPriority=2,e.callbackNode=null,2}function z_(e,n){if(un!==0&&un!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Hl()&&e.callbackNode!==a)return null;var r=ge;return r=Dt(e,e===Ve?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(g_(e,r,n),P_(e,dt()),e.callbackNode!=null&&e.callbackNode===a?z_.bind(null,e):null)}function B_(e,n){if(Hl())return null;g_(e,n,!0)}function XS(){ny(function(){(we&6)!==0?Xt(_t,kS):O_()})}function Cf(){if(wa===0){var e=Gs;e===0&&(e=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),wa=e}return wa}function I_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ko(""+e)}function F_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function WS(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=I_((c[Sn]||null).action),v=r.submitter;v&&(n=(n=v[Sn]||null)?I_(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new tl("action","action",null,r,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(wa!==0){var z=v?F_(c,v):new FormData(c);Yu(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(T.preventDefault(),z=v?F_(c,v):new FormData(c),Yu(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var wf=0;wf<uu.length;wf++){var Df=uu[wf],qS=Df.toLowerCase(),YS=Df[0].toUpperCase()+Df.slice(1);vi(qS,"on"+YS)}vi(_p,"onAnimationEnd"),vi(gp,"onAnimationIteration"),vi(vp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(cS,"onTransitionRun"),vi(uS,"onTransitionStart"),vi(fS,"onTransitionCancel"),vi(Sp,"onTransitionEnd"),zt("onMouseEnter",["mouseout","mouseover"]),zt("onMouseLeave",["mouseout","mouseover"]),zt("onPointerEnter",["pointerout","pointerover"]),zt("onPointerLeave",["pointerout","pointerover"]),Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function H_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var T=r[v],z=T.instance,tt=T.currentTarget;if(T=T.listener,z!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=tt;try{f(c)}catch(ut){il(ut)}c.currentTarget=null,f=z}else for(v=0;v<r.length;v++){if(T=r[v],z=T.instance,tt=T.currentTarget,T=T.listener,z!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=tt;try{f(c)}catch(ut){il(ut)}c.currentTarget=null,f=z}}}}function pe(e,n){var a=n[kr];a===void 0&&(a=n[kr]=new Set);var r=e+"__bubble";a.has(r)||(G_(n,e,2,!1),a.add(r))}function Uf(e,n,a){var r=0;n&&(r|=4),G_(a,e,r,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Lf(e){if(!e[kl]){e[kl]=!0,Tt.forEach(function(a){a!=="selectionchange"&&(jS.has(a)||Uf(a,!1,e),Uf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kl]||(n[kl]=!0,Uf("selectionchange",!1,n))}}function G_(e,n,a,r){switch(_g(n)){case 2:var c=My;break;case 8:c=Ey;break;default:c=Yf}a=c.bind(null,n,a,e),c=void 0,!Qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Nf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var T=r.stateNode.containerInfo;if(T===c)break;if(v===4)for(v=r.return;v!==null;){var z=v.tag;if((z===3||z===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;T!==null;){if(v=A(T),v===null)return;if(z=v.tag,z===5||z===6||z===26||z===27){r=f=v;continue t}T=T.parentNode}}r=r.return}qd(function(){var tt=f,ut=Zc(a),gt=[];t:{var et=yp.get(e);if(et!==void 0){var ot=tl,Ht=e;switch(e){case"keypress":if(Jo(a)===0)break t;case"keydown":case"keyup":ot=Gv;break;case"focusin":Ht="focus",ot=eu;break;case"focusout":Ht="blur",ot=eu;break;case"beforeblur":case"afterblur":ot=eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Xv;break;case _p:case gp:case vp:ot=Lv;break;case Sp:ot=qv;break;case"scroll":case"scrollend":ot=Rv;break;case"wheel":ot=jv;break;case"copy":case"cut":case"paste":ot=Ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Qd;break;case"toggle":case"beforetoggle":ot=Kv}var Kt=(n&4)!==0,Ie=!Kt&&(e==="scroll"||e==="scrollend"),Q=Kt?et!==null?et+"Capture":null:et;Kt=[];for(var G=tt,$;G!==null;){var pt=G;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||Q===null||(pt=Wr(G,Q),pt!=null&&Kt.push(bo(G,pt,$))),Ie)break;G=G.return}0<Kt.length&&(et=new ot(et,Ht,null,a,ut),gt.push({event:et,listeners:Kt}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",et&&a!==jc&&(Ht=a.relatedTarget||a.fromElement)&&(A(Ht)||Ht[Ii]))break t;if((ot||et)&&(et=ut.window===ut?ut:(et=ut.ownerDocument)?et.defaultView||et.parentWindow:window,ot?(Ht=a.relatedTarget||a.toElement,ot=tt,Ht=Ht?A(Ht):null,Ht!==null&&(Ie=u(Ht),Kt=Ht.tag,Ht!==Ie||Kt!==5&&Kt!==27&&Kt!==6)&&(Ht=null)):(ot=null,Ht=tt),ot!==Ht)){if(Kt=Zd,pt="onMouseLeave",Q="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Kt=Qd,pt="onPointerLeave",Q="onPointerEnter",G="pointer"),Ie=ot==null?et:it(ot),$=Ht==null?et:it(Ht),et=new Kt(pt,G+"leave",ot,a,ut),et.target=Ie,et.relatedTarget=$,pt=null,A(ut)===tt&&(Kt=new Kt(Q,G+"enter",Ht,a,ut),Kt.target=$,Kt.relatedTarget=Ie,pt=Kt),Ie=pt,ot&&Ht)e:{for(Kt=ZS,Q=ot,G=Ht,$=0,pt=Q;pt;pt=Kt(pt))$++;pt=0;for(var jt=G;jt;jt=Kt(jt))pt++;for(;0<$-pt;)Q=Kt(Q),$--;for(;0<pt-$;)G=Kt(G),pt--;for(;$--;){if(Q===G||G!==null&&Q===G.alternate){Kt=Q;break e}Q=Kt(Q),G=Kt(G)}Kt=null}else Kt=null;ot!==null&&V_(gt,et,ot,Kt,!1),Ht!==null&&Ie!==null&&V_(gt,Ie,Ht,Kt,!0)}}t:{if(et=tt?it(tt):window,ot=et.nodeName&&et.nodeName.toLowerCase(),ot==="select"||ot==="input"&&et.type==="file")var Ae=sp;else if(ip(et))if(rp)Ae=rS;else{Ae=aS;var Gt=iS}else ot=et.nodeName,!ot||ot.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?tt&&Yc(tt.elementType)&&(Ae=sp):Ae=sS;if(Ae&&(Ae=Ae(e,tt))){ap(gt,Ae,a,ut);break t}Gt&&Gt(e,et,tt),e==="focusout"&&tt&&et.type==="number"&&tt.memoizedProps.value!=null&&An(et,"number",et.value)}switch(Gt=tt?it(tt):window,e){case"focusin":(ip(Gt)||Gt.contentEditable==="true")&&(Ns=Gt,ou=tt,$r=null);break;case"focusout":$r=ou=Ns=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,pp(gt,a,ut);break;case"selectionchange":if(lS)break;case"keydown":case"keyup":pp(gt,a,ut)}var oe;if(iu)t:{switch(e){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Ls?ep(e,a)&&(ve="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Jd&&a.locale!=="ko"&&(Ls||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ls&&(oe=Yd()):(da=ut,Jc="value"in da?da.value:da.textContent,Ls=!0)),Gt=Xl(tt,ve),0<Gt.length&&(ve=new Kd(ve,e,null,a,ut),gt.push({event:ve,listeners:Gt}),oe?ve.data=oe:(oe=np(a),oe!==null&&(ve.data=oe)))),(oe=Jv?$v(e,a):tS(e,a))&&(ve=Xl(tt,"onBeforeInput"),0<ve.length&&(Gt=new Kd("onBeforeInput","beforeinput",null,a,ut),gt.push({event:Gt,listeners:ve}),Gt.data=oe)),WS(gt,e,tt,a,ut)}H_(gt,n)})}function bo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Xl(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Wr(e,a),c!=null&&r.unshift(bo(e,c,f)),c=Wr(e,n),c!=null&&r.push(bo(e,c,f))),e.tag===3)return r;e=e.return}return[]}function ZS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function V_(e,n,a,r,c){for(var f=n._reactName,v=[];a!==null&&a!==r;){var T=a,z=T.alternate,tt=T.stateNode;if(T=T.tag,z!==null&&z===r)break;T!==5&&T!==26&&T!==27||tt===null||(z=tt,c?(tt=Wr(a,f),tt!=null&&v.unshift(bo(a,tt,z))):c||(tt=Wr(a,f),tt!=null&&v.push(bo(a,tt,z)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var KS=/\r\n?/g,QS=/\u0000|\uFFFD/g;function k_(e){return(typeof e=="string"?e:""+e).replace(KS,`
`).replace(QS,"")}function X_(e,n){return n=k_(n),k_(e)===n}function Be(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||In(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&In(e,""+r);break;case"className":ke(e,"class",r);break;case"tabIndex":ke(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ke(e,a,r);break;case"style":Xd(e,r,f);break;case"data":if(n!=="object"){ke(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Ko(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(e,n,"name",c.name,c,null),Be(e,n,"formEncType",c.formEncType,c,null),Be(e,n,"formMethod",c.formMethod,c,null),Be(e,n,"formTarget",c.formTarget,c,null)):(Be(e,n,"encType",c.encType,c,null),Be(e,n,"method",c.method,c,null),Be(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Ko(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Fi);break;case"onScroll":r!=null&&pe("scroll",e);break;case"onScrollEnd":r!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Ko(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":pe("beforetoggle",e),pe("toggle",e),ye(e,"popover",r);break;case"xlinkActuate":be(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":be(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":be(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":be(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":be(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":be(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":be(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":be(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":be(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ye(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=bv.get(a)||a,ye(e,a,r))}}function Of(e,n,a,r,c,f){switch(a){case"style":Xd(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?In(e,r):(typeof r=="number"||typeof r=="bigint")&&In(e,""+r);break;case"onScroll":r!=null&&pe("scroll",e);break;case"onScrollEnd":r!=null&&pe("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Fi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ut.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):ye(e,a,r)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(e,n,f,v,a,null)}}c&&Be(e,n,"srcSet",a.srcSet,a,null),r&&Be(e,n,"src",a.src,a,null);return;case"input":pe("invalid",e);var T=f=v=c=null,z=null,tt=null;for(r in a)if(a.hasOwnProperty(r)){var ut=a[r];if(ut!=null)switch(r){case"name":c=ut;break;case"type":v=ut;break;case"checked":z=ut;break;case"defaultChecked":tt=ut;break;case"value":f=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:Be(e,n,r,ut,a,null)}}Un(e,f,T,z,tt,v,c,!1);return;case"select":pe("invalid",e),r=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":r=T;default:Be(e,n,c,T,a,null)}n=f,a=v,e.multiple=!!r,n!=null?Qe(e,!!r,n,!1):a!=null&&Qe(e,!!r,a,!0);return;case"textarea":pe("invalid",e),f=c=r=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":r=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Be(e,n,v,T,a,null)}ws(e,r,c,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(r=a[z],r!=null))switch(z){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Be(e,n,z,r,a,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(r=0;r<To.length;r++)pe(To[r],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(r=a[tt],r!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(e,n,tt,r,a,null)}return;default:if(Yc(n)){for(ut in a)a.hasOwnProperty(ut)&&(r=a[ut],r!==void 0&&Of(e,n,ut,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Be(e,n,T,r,a,null))}function JS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,T=null,z=null,tt=null,ut=null;for(ot in a){var gt=a[ot];if(a.hasOwnProperty(ot)&&gt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":z=gt;default:r.hasOwnProperty(ot)||Be(e,n,ot,null,r,gt)}}for(var et in r){var ot=r[et];if(gt=a[et],r.hasOwnProperty(et)&&(ot!=null||gt!=null))switch(et){case"type":f=ot;break;case"name":c=ot;break;case"checked":tt=ot;break;case"defaultChecked":ut=ot;break;case"value":v=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==gt&&Be(e,n,et,ot,r,gt)}}Pe(e,v,T,z,tt,ut,f,c);return;case"select":ot=v=T=et=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":ot=z;default:r.hasOwnProperty(f)||Be(e,n,f,null,r,z)}for(c in r)if(f=r[c],z=a[c],r.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==z&&Be(e,n,c,f,r,z)}n=T,a=v,r=ot,et!=null?Qe(e,!!a,et,!1):!!r!=!!a&&(n!=null?Qe(e,!!a,n,!0):Qe(e,!!a,a?[]:"",!1));return;case"textarea":ot=et=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Be(e,n,T,null,r,c)}for(v in r)if(c=r[v],f=a[v],r.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":et=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Be(e,n,v,c,r,f)}yn(e,et,ot);return;case"option":for(var Ht in a)if(et=a[Ht],a.hasOwnProperty(Ht)&&et!=null&&!r.hasOwnProperty(Ht))switch(Ht){case"selected":e.selected=!1;break;default:Be(e,n,Ht,null,r,et)}for(z in r)if(et=r[z],ot=a[z],r.hasOwnProperty(z)&&et!==ot&&(et!=null||ot!=null))switch(z){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Be(e,n,z,et,r,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)et=a[Kt],a.hasOwnProperty(Kt)&&et!=null&&!r.hasOwnProperty(Kt)&&Be(e,n,Kt,null,r,et);for(tt in r)if(et=r[tt],ot=a[tt],r.hasOwnProperty(tt)&&et!==ot&&(et!=null||ot!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:Be(e,n,tt,et,r,ot)}return;default:if(Yc(n)){for(var Ie in a)et=a[Ie],a.hasOwnProperty(Ie)&&et!==void 0&&!r.hasOwnProperty(Ie)&&Of(e,n,Ie,void 0,r,et);for(ut in r)et=r[ut],ot=a[ut],!r.hasOwnProperty(ut)||et===ot||et===void 0&&ot===void 0||Of(e,n,ut,et,r,ot);return}}for(var Q in a)et=a[Q],a.hasOwnProperty(Q)&&et!=null&&!r.hasOwnProperty(Q)&&Be(e,n,Q,null,r,et);for(gt in r)et=r[gt],ot=a[gt],!r.hasOwnProperty(gt)||et===ot||et==null&&ot==null||Be(e,n,gt,et,r,ot)}function W_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $S(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,v=c.initiatorType,T=c.duration;if(f&&T&&W_(v)){for(v=0,T=c.responseEnd,r+=1;r<a.length;r++){var z=a[r],tt=z.startTime;if(tt>T)break;var ut=z.transferSize,gt=z.initiatorType;ut&&W_(gt)&&(z=z.responseEnd,v+=ut*(z<T?1:(T-tt)/(z-tt)))}if(--r,n+=8*(f+v)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Pf=null,zf=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function q_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Y_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Bf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var If=null;function ty(){var e=window.event;return e&&e.type==="popstate"?e===If?!1:(If=e,!0):(If=null,!1)}var j_=typeof setTimeout=="function"?setTimeout:void 0,ey=typeof clearTimeout=="function"?clearTimeout:void 0,Z_=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof Z_<"u"?function(e){return Z_.resolve(null).then(e).catch(iy)}:j_;function iy(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function K_(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),rr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Ao(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ao(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[Ka]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Ao(e.ownerDocument.body);a=c}while(a);rr(n)}function Q_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Ff(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ff(a),Xr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ay(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ka])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function sy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fi(e.nextSibling),e===null))return null;return e}function J_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fi(e.nextSibling),e===null))return null;return e}function Hf(e){return e.data==="$?"||e.data==="$~"}function Gf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ry(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Vf=null;function $_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return fi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function tg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function eg(e,n,a){switch(n=Wl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ao(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Xr(e)}var hi=new Map,ng=new Set;function ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ea=K.d;K.d={f:oy,r:ly,D:cy,C:uy,L:fy,m:hy,X:py,S:dy,M:my};function oy(){var e=ea.f(),n=Bl();return e||n}function ly(e){var n=j(e);n!==null&&n.tag===5&&n.type==="form"?Sm(n):ea.r(e)}var ir=typeof document>"u"?null:document;function ig(e,n,a){var r=ir;if(r&&typeof n=="string"&&n){var c=pn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),ng.has(c)||(ng.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Tn(n,"link",e),V(n),r.head.appendChild(n)))}}function cy(e){ea.D(e),ig("dns-prefetch",e,null)}function uy(e,n){ea.C(e,n),ig("preconnect",e,n)}function fy(e,n,a){ea.L(e,n,a);var r=ir;if(r&&e&&n){var c='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+pn(a.imageSizes)+'"]')):c+='[href="'+pn(e)+'"]';var f=c;switch(n){case"style":f=ar(e);break;case"script":f=sr(e)}hi.has(f)||(e=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),hi.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(Ro(f))||n==="script"&&r.querySelector(Co(f))||(n=r.createElement("link"),Tn(n,"link",e),V(n),r.head.appendChild(n)))}}function hy(e,n){ea.m(e,n);var a=ir;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+pn(r)+'"][href="'+pn(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=sr(e)}if(!hi.has(f)&&(e=S({rel:"modulepreload",href:e},n),hi.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Co(f)))return}r=a.createElement("link"),Tn(r,"link",e),V(r),a.head.appendChild(r)}}}function dy(e,n,a){ea.S(e,n,a);var r=ir;if(r&&e){var c=st(r).hoistableStyles,f=ar(e);n=n||"default";var v=c.get(f);if(!v){var T={loading:0,preload:null};if(v=r.querySelector(Ro(f)))T.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":n},a),(a=hi.get(f))&&kf(e,a);var z=v=r.createElement("link");V(z),Tn(z,"link",e),z._p=new Promise(function(tt,ut){z.onload=tt,z.onerror=ut}),z.addEventListener("load",function(){T.loading|=1}),z.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Yl(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:T},c.set(f,v)}}}function py(e,n){ea.X(e,n);var a=ir;if(a&&e){var r=st(a).hoistableScripts,c=sr(e),f=r.get(c);f||(f=a.querySelector(Co(c)),f||(e=S({src:e,async:!0},n),(n=hi.get(c))&&Xf(e,n),f=a.createElement("script"),V(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function my(e,n){ea.M(e,n);var a=ir;if(a&&e){var r=st(a).hoistableScripts,c=sr(e),f=r.get(c);f||(f=a.querySelector(Co(c)),f||(e=S({src:e,async:!0,type:"module"},n),(n=hi.get(c))&&Xf(e,n),f=a.createElement("script"),V(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function ag(e,n,a,r){var c=(c=xt.current)?ql(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ar(a.href),a=st(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ar(a.href);var f=st(c).hoistableStyles,v=f.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=c.querySelector(Ro(e)))&&!f._p&&(v.instance=f,v.state.loading=5),hi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(e,a),f||_y(c,e,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=sr(a),a=st(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ar(e){return'href="'+pn(e)+'"'}function Ro(e){return'link[rel="stylesheet"]['+e+"]"}function sg(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function _y(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Tn(n,"link",a),V(n),e.head.appendChild(n))}function sr(e){return'[src="'+pn(e)+'"]'}function Co(e){return"script[async]"+e}function rg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+pn(a.href)+'"]');if(r)return n.instance=r,V(r),r;var c=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),V(r),Tn(r,"style",c),Yl(r,a.precedence,e),n.instance=r;case"stylesheet":c=ar(a.href);var f=e.querySelector(Ro(c));if(f)return n.state.loading|=4,n.instance=f,V(f),f;r=sg(a),(c=hi.get(c))&&kf(r,c),f=(e.ownerDocument||e).createElement("link"),V(f);var v=f;return v._p=new Promise(function(T,z){v.onload=T,v.onerror=z}),Tn(f,"link",r),n.state.loading|=4,Yl(f,a.precedence,e),n.instance=f;case"script":return f=sr(a.src),(c=e.querySelector(Co(f)))?(n.instance=c,V(c),c):(r=a,(c=hi.get(f))&&(r=S({},a),Xf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),V(c),Tn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Yl(r,a.precedence,e));return n.instance}function Yl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,v=0;v<r.length;v++){var T=r[v];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var jl=null;function og(e,n,a){if(jl===null){var r=new Map,c=jl=new Map;c.set(a,r)}else c=jl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ka]||f[Ke]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var T=r.get(v);T?T.push(f):r.set(v,[f])}}return r}function lg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function gy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function cg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function vy(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ar(r.href),f=n.querySelector(Ro(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Zl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,V(f);return}f=n.ownerDocument||n,r=sg(r),(c=hi.get(c))&&kf(r,c),f=f.createElement("link"),V(f);var v=f;v._p=new Promise(function(T,z){v.onload=T,v.onerror=z}),Tn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Wf=0;function Sy(e,n){return e.stylesheets&&e.count===0&&Ql(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Wf===0&&(Wf=62500*$S());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Wf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kl=null;function Ql(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kl=new Map,n.forEach(yy,e),Kl=null,Zl.call(e))}function yy(e,n){if(!(n.state.loading&4)){var a=Kl.get(e);if(a)var r=a.get(null);else{a=new Map,Kl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,c),a.set(v,c),this.count++,r=Zl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var wo={$$typeof:L,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function xy(e,n,a,r,c,f,v,T,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function ug(e,n,a,r,c,f,v,T,z,tt,ut,gt){return e=new xy(e,n,a,v,z,tt,ut,gt,T),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),e.current=f,f.stateNode=e,n=Eu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Ru(f),e}function fg(e){return e?(e=zs,e):zs}function hg(e,n,a,r,c,f){c=fg(c),r.context===null?r.context=c:r.pendingContext=c,r=Sa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ya(e,r,n),a!==null&&(Xn(a,e,n),ro(a,e,n))}function dg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function qf(e,n){dg(e,n),(e=e.alternate)&&dg(e,n)}function pg(e){if(e.tag===13||e.tag===31){var n=ts(e,67108864);n!==null&&Xn(n,e,67108864),qf(e,67108864)}}function mg(e){if(e.tag===13||e.tag===31){var n=ti();n=ja(n);var a=ts(e,n);a!==null&&Xn(a,e,n),qf(e,n)}}var Jl=!0;function My(e,n,a,r){var c=N.T;N.T=null;var f=K.p;try{K.p=2,Yf(e,n,a,r)}finally{K.p=f,N.T=c}}function Ey(e,n,a,r){var c=N.T;N.T=null;var f=K.p;try{K.p=8,Yf(e,n,a,r)}finally{K.p=f,N.T=c}}function Yf(e,n,a,r){if(Jl){var c=jf(r);if(c===null)Nf(e,n,r,$l,a),gg(e,r);else if(by(c,e,n,a,r))r.stopPropagation();else if(gg(e,r),n&4&&-1<Ty.indexOf(e)){for(;c!==null;){var f=j(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ct(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var z=1<<31-Qt(v);T.entanglements[1]|=z,v&=~z}Ni(f),(we&6)===0&&(Pl=dt()+500,Eo(0))}}break;case 31:case 13:T=ts(f,2),T!==null&&Xn(T,f,2),Bl(),qf(f,2)}if(f=jf(r),f===null&&Nf(e,n,r,$l,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Nf(e,n,r,null,a)}}function jf(e){return e=Zc(e),Zf(e)}var $l=null;function Zf(e){if($l=null,e=A(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return $l=e,null}function _g(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case _t:return 2;case Vt:return 8;case wt:case It:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Kf=!1,Ua=null,La=null,Na=null,Do=new Map,Uo=new Map,Oa=[],Ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gg(e,n){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Do.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(n.pointerId)}}function Lo(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=j(n),n!==null&&pg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function by(e,n,a,r,c){switch(n){case"focusin":return Ua=Lo(Ua,e,n,a,r,c),!0;case"dragenter":return La=Lo(La,e,n,a,r,c),!0;case"mouseover":return Na=Lo(Na,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Do.set(f,Lo(Do.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Uo.set(f,Lo(Uo.get(f)||null,e,n,a,r,c)),!0}return!1}function vg(e){var n=A(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Za(e.priority,function(){mg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Za(e.priority,function(){mg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=jf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);jc=r,a.target.dispatchEvent(r),jc=null}else return n=j(a),n!==null&&pg(n),e.blockedOn=a,!1;n.shift()}return!0}function Sg(e,n,a){tc(e)&&a.delete(n)}function Ay(){Kf=!1,Ua!==null&&tc(Ua)&&(Ua=null),La!==null&&tc(La)&&(La=null),Na!==null&&tc(Na)&&(Na=null),Do.forEach(Sg),Uo.forEach(Sg)}function ec(e,n){e.blockedOn===n&&(e.blockedOn=null,Kf||(Kf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ay)))}var nc=null;function yg(e){nc!==e&&(nc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){nc===e&&(nc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Zf(r||a)===null)continue;break}var f=j(a);f!==null&&(e.splice(n,3),n-=3,Yu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function rr(e){function n(z){return ec(z,e)}Ua!==null&&ec(Ua,e),La!==null&&ec(La,e),Na!==null&&ec(Na,e),Do.forEach(n),Uo.forEach(n);for(var a=0;a<Oa.length;a++){var r=Oa[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)vg(a),a.blockedOn===null&&Oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],v=c[Sn]||null;if(typeof f=="function")v||yg(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[Sn]||null)T=v.formAction;else if(Zf(c)!==null)continue}else T=v.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),yg(a)}}}function xg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Qf(e){this._internalRoot=e}ic.prototype.render=Qf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ti();hg(a,r,e,n,null,null)},ic.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;hg(e.current,2,null,e,null,null),Bl(),n[Ii]=null}};function ic(e){this._internalRoot=e}ic.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Oa.length&&n!==0&&n<Oa[a].priority;a++);Oa.splice(a,0,e),a===0&&vg(e)}};var Mg=t.version;if(Mg!=="19.2.8")throw Error(s(527,Mg,"19.2.8"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Ry={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{qt=ac.inject(Ry),kt=ac}catch{}}return Oo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=wm,f=Dm,v=Um;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=ug(e,1,!1,null,null,a,r,null,c,f,v,xg),e[Ii]=n.current,Lf(e),new Qf(n)},Oo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=wm,v=Dm,T=Um,z=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=ug(e,1,!0,n,a??null,r,c,z,f,v,T,xg),n.context=fg(null),a=n.current,r=ti(),r=ja(r),c=Sa(r),c.callback=null,ya(a,c,r),a=r,n.current.lanes=a,vn(n,a),Ni(n),e[Ii]=n.current,Lf(e),new ic(n)},Oo.version="19.2.8",Oo}var Lg;function By(){if(Lg)return th.exports;Lg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),th.exports=zy(),th.exports}var Iy=By();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ad="172",Ar={ROTATE:0,DOLLY:1,PAN:2},Er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fy=0,Ng=1,Hy=2,G0=1,V0=2,oa=3,qa=0,qn=1,la=2,Xa=0,Rr=1,Og=2,Pg=3,zg=4,Gy=5,ys=100,Vy=101,ky=102,Xy=103,Wy=104,qy=200,Yy=201,jy=202,Zy=203,Fh=204,Hh=205,Ky=206,Qy=207,Jy=208,$y=209,tx=210,ex=211,nx=212,ix=213,ax=214,Gh=0,Vh=1,kh=2,Dr=3,Xh=4,Wh=5,qh=6,Yh=7,k0=0,sx=1,rx=2,Wa=0,ox=1,lx=2,cx=3,ux=4,fx=5,hx=6,dx=7,X0=300,Ur=301,Lr=302,jh=303,Zh=304,Gc=306,Kh=1e3,Ms=1001,Qh=1002,Ri=1003,px=1004,sc=1005,Pi=1006,ah=1007,Es=1008,ha=1009,W0=1010,q0=1011,Xo=1012,Rd=1013,Ts=1014,ca=1015,qo=1016,Cd=1017,wd=1018,Nr=1020,Y0=35902,j0=1021,Z0=1022,Ai=1023,K0=1024,Q0=1025,Cr=1026,Or=1027,J0=1028,Dd=1029,$0=1030,Ud=1031,Ld=1033,wc=33776,Dc=33777,Uc=33778,Lc=33779,Jh=35840,$h=35841,td=35842,ed=35843,nd=36196,id=37492,ad=37496,sd=37808,rd=37809,od=37810,ld=37811,cd=37812,ud=37813,fd=37814,hd=37815,dd=37816,pd=37817,md=37818,_d=37819,gd=37820,vd=37821,Nc=36492,Sd=36494,yd=36495,tv=36283,xd=36284,Md=36285,Ed=36286,mx=3200,_x=3201,ev=0,gx=1,ka="",ii="srgb",Pr="srgb-linear",Pc="linear",Fe="srgb",or=7680,Bg=519,vx=512,Sx=513,yx=514,nv=515,xx=516,Mx=517,Ex=518,Tx=519,Ig=35044,Fg="300 es",ua=2e3,zc=2001;class Rs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hg=1234567;const Vo=Math.PI/180,Wo=180/Math.PI;function Br(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function fe(o,t,i){return Math.max(t,Math.min(i,o))}function Nd(o,t){return(o%t+t)%t}function bx(o,t,i,s,l){return s+(o-t)*(l-s)/(i-t)}function Ax(o,t,i){return o!==t?(i-o)/(t-o):0}function ko(o,t,i){return(1-i)*o+i*t}function Rx(o,t,i,s){return ko(o,t,1-Math.exp(-i*s))}function Cx(o,t=1){return t-Math.abs(Nd(o,t*2)-t)}function wx(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function Dx(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function Ux(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Lx(o,t){return o+Math.random()*(t-o)}function Nx(o){return o*(.5-Math.random())}function Ox(o){o!==void 0&&(Hg=o);let t=Hg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Px(o){return o*Vo}function zx(o){return o*Wo}function Bx(o){return(o&o-1)===0&&o!==0}function Ix(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Fx(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Hx(o,t,i,s,l){const u=Math.cos,h=Math.sin,d=u(i/2),m=h(i/2),p=u((t+s)/2),g=h((t+s)/2),S=u((t-s)/2),y=h((t-s)/2),M=u((s-t)/2),E=h((s-t)/2);switch(l){case"XYX":o.set(d*g,m*S,m*y,d*p);break;case"YZY":o.set(m*y,d*g,m*S,d*p);break;case"ZXZ":o.set(m*S,m*y,d*g,d*p);break;case"XZX":o.set(d*g,m*E,m*M,d*p);break;case"YXY":o.set(m*M,d*g,m*E,d*p);break;case"ZYZ":o.set(m*E,m*M,d*g,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function xr(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Nn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Od={DEG2RAD:Vo,RAD2DEG:Wo,generateUUID:Br,clamp:fe,euclideanModulo:Nd,mapLinear:bx,inverseLerp:Ax,lerp:ko,damp:Rx,pingpong:Cx,smoothstep:wx,smootherstep:Dx,randInt:Ux,randFloat:Lx,randFloatSpread:Nx,seededRandom:Ox,degToRad:Px,radToDeg:zx,isPowerOfTwo:Bx,ceilPowerOfTwo:Ix,floorPowerOfTwo:Fx,setQuaternionFromProperEuler:Hx,normalize:Nn,denormalize:xr};class ae{constructor(t=0,i=0){ae.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=fe(this.x,t.x,i.x),this.y=fe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=fe(this.x,t,i),this.y=fe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(fe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(fe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,i,s,l,u,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],S=s[7],y=s[2],M=s[5],E=s[8],R=l[0],x=l[3],_=l[6],B=l[1],L=l[4],D=l[7],q=l[2],I=l[5],P=l[8];return u[0]=h*R+d*B+m*q,u[3]=h*x+d*L+m*I,u[6]=h*_+d*D+m*P,u[1]=p*R+g*B+S*q,u[4]=p*x+g*L+S*I,u[7]=p*_+g*D+S*P,u[2]=y*R+M*B+E*q,u[5]=y*x+M*L+E*I,u[8]=y*_+M*D+E*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*u*g+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],S=g*h-d*p,y=d*m-g*u,M=p*u-h*m,E=i*S+s*y+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=S*R,t[1]=(l*p-g*s)*R,t[2]=(d*s-l*h)*R,t[3]=y*R,t[4]=(g*i-l*m)*R,t[5]=(l*u-d*i)*R,t[6]=M*R,t[7]=(s*m-p*i)*R,t[8]=(h*i-s*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(sh.makeScale(t,i)),this}rotate(t){return this.premultiply(sh.makeRotation(-t)),this}translate(t,i){return this.premultiply(sh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sh=new le;function iv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Bc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Gx(){const o=Bc("canvas");return o.style.display="block",o}const Gg={};function Mr(o){o in Gg||(Gg[o]=!0,console.warn(o))}function Vx(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function kx(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xx(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Vg=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kg=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wx(){const o={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Fe&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=wr(l.r),l.g=wr(l.g),l.b=wr(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ka?Pc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Pr]:{primaries:t,whitePoint:s,transfer:Pc,toXYZ:Vg,fromXYZ:kg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:t,whitePoint:s,transfer:Fe,toXYZ:Vg,fromXYZ:kg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),o}const Ce=Wx();function fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function wr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let lr;class qx{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{lr===void 0&&(lr=Bc("canvas")),lr.width=t.width,lr.height=t.height;const s=lr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=lr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Bc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=fa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(fa(i[s]/255)*255):i[s]=fa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yx=0;class av{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=Br(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(rh(l[h].image)):u.push(rh(l[h]))}else u=rh(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function rh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?qx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jx=0;class Yn extends Rs{constructor(t=Yn.DEFAULT_IMAGE,i=Yn.DEFAULT_MAPPING,s=Ms,l=Ms,u=Pi,h=Es,d=Ai,m=ha,p=Yn.DEFAULT_ANISOTROPY,g=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=Br(),this.name="",this.source=new av(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==X0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kh:t.x=t.x-Math.floor(t.x);break;case Ms:t.x=t.x<0?0:1;break;case Qh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kh:t.y=t.y-Math.floor(t.y);break;case Ms:t.y=t.y<0?0:1;break;case Qh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=X0;Yn.DEFAULT_ANISOTROPY=1;class Ge{constructor(t=0,i=0,s=0,l=1){Ge.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],g=m[4],S=m[8],y=m[1],M=m[5],E=m[9],R=m[2],x=m[6],_=m[10];if(Math.abs(g-y)<.01&&Math.abs(S-R)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+y)<.1&&Math.abs(S+R)<.1&&Math.abs(E+x)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(M+1)/2,q=(_+1)/2,I=(g+y)/4,P=(S+R)/4,k=(E+x)/4;return L>D&&L>q?L<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(L),l=I/s,u=P/s):D>q?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=I/l,u=k/l):q<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(q),s=P/u,l=k/u),this.set(s,l,u,i),this}let B=Math.sqrt((x-E)*(x-E)+(S-R)*(S-R)+(y-g)*(y-g));return Math.abs(B)<.001&&(B=1),this.x=(x-E)/B,this.y=(S-R)/B,this.z=(y-g)/B,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=fe(this.x,t.x,i.x),this.y=fe(this.y,t.y,i.y),this.z=fe(this.z,t.z,i.z),this.w=fe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=fe(this.x,t,i),this.y=fe(this.y,t,i),this.z=fe(this.z,t,i),this.w=fe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(fe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zx extends Rs{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Ge(0,0,t,i),this.scissorTest=!1,this.viewport=new Ge(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new Yn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,l=t.textures.length;s<l;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const i=Object.assign({},t.texture.image);return this.texture.source=new av(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends Zx{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class sv extends Yn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kx extends Yn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],S=s[l+3];const y=u[h+0],M=u[h+1],E=u[h+2],R=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=S;return}if(d===1){t[i+0]=y,t[i+1]=M,t[i+2]=E,t[i+3]=R;return}if(S!==R||m!==y||p!==M||g!==E){let x=1-d;const _=m*y+p*M+g*E+S*R,B=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const q=Math.sqrt(L),I=Math.atan2(q,_*B);x=Math.sin(x*I)/q,d=Math.sin(d*I)/q}const D=d*B;if(m=m*x+y*D,p=p*x+M*D,g=g*x+E*D,S=S*x+R*D,x===1-d){const q=1/Math.sqrt(m*m+p*p+g*g+S*S);m*=q,p*=q,g*=q,S*=q}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=S}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],S=u[h],y=u[h+1],M=u[h+2],E=u[h+3];return t[i]=d*E+g*S+m*M-p*y,t[i+1]=m*E+g*y+p*S-d*M,t[i+2]=p*E+g*M+d*y-m*S,t[i+3]=g*E-d*S-m*y-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),S=d(u/2),y=m(s/2),M=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=y*g*S+p*M*E,this._y=p*M*S-y*g*E,this._z=p*g*E+y*M*S,this._w=p*g*S-y*M*E;break;case"YXZ":this._x=y*g*S+p*M*E,this._y=p*M*S-y*g*E,this._z=p*g*E-y*M*S,this._w=p*g*S+y*M*E;break;case"ZXY":this._x=y*g*S-p*M*E,this._y=p*M*S+y*g*E,this._z=p*g*E+y*M*S,this._w=p*g*S-y*M*E;break;case"ZYX":this._x=y*g*S-p*M*E,this._y=p*M*S+y*g*E,this._z=p*g*E-y*M*S,this._w=p*g*S+y*M*E;break;case"YZX":this._x=y*g*S+p*M*E,this._y=p*M*S+y*g*E,this._z=p*g*E-y*M*S,this._w=p*g*S-y*M*E;break;case"XZY":this._x=y*g*S-p*M*E,this._y=p*M*S-y*g*E,this._z=p*g*E+y*M*S,this._w=p*g*S+y*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],S=i[10],y=s+d+S;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>S){const M=2*Math.sqrt(1+s-d-S);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>S){const M=2*Math.sqrt(1+d-s-S);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+S-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-s*p,this._z=u*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),S=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=h*S+this._w*y,this._x=s*S+this._x*y,this._y=l*S+this._y*y,this._z=u*S+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,s=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Xg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Xg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-u*l),S=2*(u*s-h*i);return this.x=i+m*p+h*S-d*g,this.y=s+m*g+d*p-u*S,this.z=l+m*S+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=fe(this.x,t.x,i.x),this.y=fe(this.y,t.y,i.y),this.z=fe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=fe(this.x,t,i),this.y=fe(this.y,t,i),this.z=fe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(fe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return oh.copy(this).projectOnVector(t),this.sub(oh)}reflect(t){return this.sub(oh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(fe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oh=new Z,Xg=new As;class Yo{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(xi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(xi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=xi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,xi):xi.fromBufferAttribute(u,h),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),rc.copy(s.boundingBox)),rc.applyMatrix4(t.matrixWorld),this.union(rc)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),oc.subVectors(this.max,Po),cr.subVectors(t.a,Po),ur.subVectors(t.b,Po),fr.subVectors(t.c,Po),za.subVectors(ur,cr),Ba.subVectors(fr,ur),ds.subVectors(cr,fr);let i=[0,-za.z,za.y,0,-Ba.z,Ba.y,0,-ds.z,ds.y,za.z,0,-za.x,Ba.z,0,-Ba.x,ds.z,0,-ds.x,-za.y,za.x,0,-Ba.y,Ba.x,0,-ds.y,ds.x,0];return!lh(i,cr,ur,fr,oc)||(i=[1,0,0,0,1,0,0,0,1],!lh(i,cr,ur,fr,oc))?!1:(lc.crossVectors(za,Ba),i=[lc.x,lc.y,lc.z],lh(i,cr,ur,fr,oc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(na),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const na=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],xi=new Z,rc=new Yo,cr=new Z,ur=new Z,fr=new Z,za=new Z,Ba=new Z,ds=new Z,Po=new Z,oc=new Z,lc=new Z,ps=new Z;function lh(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){ps.fromArray(o,u);const d=l.x*Math.abs(ps.x)+l.y*Math.abs(ps.y)+l.z*Math.abs(ps.z),m=t.dot(ps),p=i.dot(ps),g=s.dot(ps);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Qx=new Yo,zo=new Z,ch=new Z;class Vc{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Qx.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const i=zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(zo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ch.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(ch)),this.expandByPoint(zo.copy(t.center).sub(ch))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ia=new Z,uh=new Z,cc=new Z,Ia=new Z,fh=new Z,uc=new Z,hh=new Z;class Pd{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ia)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ia.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ia.copy(this.origin).addScaledVector(this.direction,i),ia.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){uh.copy(t).add(i).multiplyScalar(.5),cc.copy(i).sub(t).normalize(),Ia.copy(this.origin).sub(uh);const u=t.distanceTo(i)*.5,h=-this.direction.dot(cc),d=Ia.dot(this.direction),m=-Ia.dot(cc),p=Ia.lengthSq(),g=Math.abs(1-h*h);let S,y,M,E;if(g>0)if(S=h*m-d,y=h*d-m,E=u*g,S>=0)if(y>=-E)if(y<=E){const R=1/g;S*=R,y*=R,M=S*(S+h*y+2*d)+y*(h*S+y+2*m)+p}else y=u,S=Math.max(0,-(h*y+d)),M=-S*S+y*(y+2*m)+p;else y=-u,S=Math.max(0,-(h*y+d)),M=-S*S+y*(y+2*m)+p;else y<=-E?(S=Math.max(0,-(-h*u+d)),y=S>0?-u:Math.min(Math.max(-u,-m),u),M=-S*S+y*(y+2*m)+p):y<=E?(S=0,y=Math.min(Math.max(-u,-m),u),M=y*(y+2*m)+p):(S=Math.max(0,-(h*u+d)),y=S>0?u:Math.min(Math.max(-u,-m),u),M=-S*S+y*(y+2*m)+p);else y=h>0?-u:u,S=Math.max(0,-(h*y+d)),M=-S*S+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(uh).addScaledVector(cc,y),M}intersectSphere(t,i){ia.subVectors(t.center,this.origin);const s=ia.dot(this.direction),l=ia.dot(ia)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,S=1/this.direction.z,y=this.origin;return p>=0?(s=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(s=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),g>=0?(u=(t.min.y-y.y)*g,h=(t.max.y-y.y)*g):(u=(t.max.y-y.y)*g,h=(t.min.y-y.y)*g),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),S>=0?(d=(t.min.z-y.z)*S,m=(t.max.z-y.z)*S):(d=(t.max.z-y.z)*S,m=(t.min.z-y.z)*S),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ia)!==null}intersectTriangle(t,i,s,l,u){fh.subVectors(i,t),uc.subVectors(s,t),hh.crossVectors(fh,uc);let h=this.direction.dot(hh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ia.subVectors(this.origin,t);const m=d*this.direction.dot(uc.crossVectors(Ia,uc));if(m<0)return null;const p=d*this.direction.dot(fh.cross(Ia));if(p<0||m+p>h)return null;const g=-d*Ia.dot(hh);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(t,i,s,l,u,h,d,m,p,g,S,y,M,E,R,x){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,g,S,y,M,E,R,x)}set(t,i,s,l,u,h,d,m,p,g,S,y,M,E,R,x){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=S,_[14]=y,_[3]=M,_[7]=E,_[11]=R,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/hr.setFromMatrixColumn(t,0).length(),u=1/hr.setFromMatrixColumn(t,1).length(),h=1/hr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),S=Math.sin(u);if(t.order==="XYZ"){const y=h*g,M=h*S,E=d*g,R=d*S;i[0]=m*g,i[4]=-m*S,i[8]=p,i[1]=M+E*p,i[5]=y-R*p,i[9]=-d*m,i[2]=R-y*p,i[6]=E+M*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*g,M=m*S,E=p*g,R=p*S;i[0]=y+R*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*S,i[5]=h*g,i[9]=-d,i[2]=M*d-E,i[6]=R+y*d,i[10]=h*m}else if(t.order==="ZXY"){const y=m*g,M=m*S,E=p*g,R=p*S;i[0]=y-R*d,i[4]=-h*S,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*g,i[9]=R-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const y=h*g,M=h*S,E=d*g,R=d*S;i[0]=m*g,i[4]=E*p-M,i[8]=y*p+R,i[1]=m*S,i[5]=R*p+y,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,M=h*p,E=d*m,R=d*p;i[0]=m*g,i[4]=R-y*S,i[8]=E*S+M,i[1]=S,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*S+E,i[10]=y-R*S}else if(t.order==="XZY"){const y=h*m,M=h*p,E=d*m,R=d*p;i[0]=m*g,i[4]=-S,i[8]=p*g,i[1]=y*S+R,i[5]=h*g,i[9]=M*S-E,i[2]=E*S-M,i[6]=d*g,i[10]=R*S+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jx,t,$x)}lookAt(t,i,s){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Fa.crossVectors(s,ei),Fa.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Fa.crossVectors(s,ei)),Fa.normalize(),fc.crossVectors(ei,Fa),l[0]=Fa.x,l[4]=fc.x,l[8]=ei.x,l[1]=Fa.y,l[5]=fc.y,l[9]=ei.y,l[2]=Fa.z,l[6]=fc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],S=s[5],y=s[9],M=s[13],E=s[2],R=s[6],x=s[10],_=s[14],B=s[3],L=s[7],D=s[11],q=s[15],I=l[0],P=l[4],k=l[8],w=l[12],C=l[1],F=l[5],rt=l[9],at=l[13],ft=l[2],ht=l[6],N=l[10],K=l[14],X=l[3],St=l[7],Et=l[11],O=l[15];return u[0]=h*I+d*C+m*ft+p*X,u[4]=h*P+d*F+m*ht+p*St,u[8]=h*k+d*rt+m*N+p*Et,u[12]=h*w+d*at+m*K+p*O,u[1]=g*I+S*C+y*ft+M*X,u[5]=g*P+S*F+y*ht+M*St,u[9]=g*k+S*rt+y*N+M*Et,u[13]=g*w+S*at+y*K+M*O,u[2]=E*I+R*C+x*ft+_*X,u[6]=E*P+R*F+x*ht+_*St,u[10]=E*k+R*rt+x*N+_*Et,u[14]=E*w+R*at+x*K+_*O,u[3]=B*I+L*C+D*ft+q*X,u[7]=B*P+L*F+D*ht+q*St,u[11]=B*k+L*rt+D*N+q*Et,u[15]=B*w+L*at+D*K+q*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],S=t[6],y=t[10],M=t[14],E=t[3],R=t[7],x=t[11],_=t[15];return E*(+u*m*S-l*p*S-u*d*y+s*p*y+l*d*M-s*m*M)+R*(+i*m*M-i*p*y+u*h*y-l*h*M+l*p*g-u*m*g)+x*(+i*p*S-i*d*M-u*h*S+s*h*M+u*d*g-s*p*g)+_*(-l*d*g-i*m*S+i*d*y+l*h*S-s*h*y+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],S=t[9],y=t[10],M=t[11],E=t[12],R=t[13],x=t[14],_=t[15],B=S*x*p-R*y*p+R*m*M-d*x*M-S*m*_+d*y*_,L=E*y*p-g*x*p-E*m*M+h*x*M+g*m*_-h*y*_,D=g*R*p-E*S*p+E*d*M-h*R*M-g*d*_+h*S*_,q=E*S*m-g*R*m-E*d*y+h*R*y+g*d*x-h*S*x,I=i*B+s*L+l*D+u*q;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=B*P,t[1]=(R*y*u-S*x*u-R*l*M+s*x*M+S*l*_-s*y*_)*P,t[2]=(d*x*u-R*m*u+R*l*p-s*x*p-d*l*_+s*m*_)*P,t[3]=(S*m*u-d*y*u-S*l*p+s*y*p+d*l*M-s*m*M)*P,t[4]=L*P,t[5]=(g*x*u-E*y*u+E*l*M-i*x*M-g*l*_+i*y*_)*P,t[6]=(E*m*u-h*x*u-E*l*p+i*x*p+h*l*_-i*m*_)*P,t[7]=(h*y*u-g*m*u+g*l*p-i*y*p-h*l*M+i*m*M)*P,t[8]=D*P,t[9]=(E*S*u-g*R*u-E*s*M+i*R*M+g*s*_-i*S*_)*P,t[10]=(h*R*u-E*d*u+E*s*p-i*R*p-h*s*_+i*d*_)*P,t[11]=(g*d*u-h*S*u-g*s*p+i*S*p+h*s*M-i*d*M)*P,t[12]=q*P,t[13]=(g*R*l-E*S*l+E*s*y-i*R*y-g*s*x+i*S*x)*P,t[14]=(E*d*l-h*R*l-E*s*m+i*R*m+h*s*x-i*d*x)*P,t[15]=(h*S*l-g*d*l+g*s*m-i*S*m-h*s*y+i*d*y)*P,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,S=d+d,y=u*p,M=u*g,E=u*S,R=h*g,x=h*S,_=d*S,B=m*p,L=m*g,D=m*S,q=s.x,I=s.y,P=s.z;return l[0]=(1-(R+_))*q,l[1]=(M+D)*q,l[2]=(E-L)*q,l[3]=0,l[4]=(M-D)*I,l[5]=(1-(y+_))*I,l[6]=(x+B)*I,l[7]=0,l[8]=(E+L)*P,l[9]=(x-B)*P,l[10]=(1-(y+R))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=hr.set(l[0],l[1],l[2]).length();const h=hr.set(l[4],l[5],l[6]).length(),d=hr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Mi.copy(this);const p=1/u,g=1/h,S=1/d;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=g,Mi.elements[5]*=g,Mi.elements[6]*=g,Mi.elements[8]*=S,Mi.elements[9]*=S,Mi.elements[10]*=S,i.setFromRotationMatrix(Mi),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=ua){const m=this.elements,p=2*u/(i-t),g=2*u/(s-l),S=(i+t)/(i-t),y=(s+l)/(s-l);let M,E;if(d===ua)M=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===zc)M=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=ua){const m=this.elements,p=1/(i-t),g=1/(s-l),S=1/(h-u),y=(i+t)*p,M=(s+l)*g;let E,R;if(d===ua)E=(h+u)*S,R=-2*S;else if(d===zc)E=u*S,R=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=R,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const hr=new Z,Mi=new Ze,Jx=new Z(0,0,0),$x=new Z(1,1,1),Fa=new Z,fc=new Z,ei=new Z,Wg=new Ze,qg=new As;class Bi{constructor(t=0,i=0,s=0,l=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],S=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(fe(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-fe(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(fe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Wg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return qg.setFromEuler(this),this.setFromQuaternion(qg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class rv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tM=0;const Yg=new Z,dr=new As,aa=new Ze,hc=new Z,Bo=new Z,eM=new Z,nM=new As,jg=new Z(1,0,0),Zg=new Z(0,1,0),Kg=new Z(0,0,1),Qg={type:"added"},iM={type:"removed"},pr={type:"childadded",child:null},dh={type:"childremoved",child:null};class gn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const t=new Z,i=new Bi,s=new As,l=new Z(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new le}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return dr.setFromAxisAngle(t,i),this.quaternion.multiply(dr),this}rotateOnWorldAxis(t,i){return dr.setFromAxisAngle(t,i),this.quaternion.premultiply(dr),this}rotateX(t){return this.rotateOnAxis(jg,t)}rotateY(t){return this.rotateOnAxis(Zg,t)}rotateZ(t){return this.rotateOnAxis(Kg,t)}translateOnAxis(t,i){return Yg.copy(t).applyQuaternion(this.quaternion),this.position.add(Yg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(jg,t)}translateY(t){return this.translateOnAxis(Zg,t)}translateZ(t){return this.translateOnAxis(Kg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?hc.copy(t):hc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Bo,hc,this.up):aa.lookAt(hc,Bo,this.up),this.quaternion.setFromRotationMatrix(aa),l&&(aa.extractRotation(l.matrixWorld),dr.setFromRotationMatrix(aa),this.quaternion.premultiply(dr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qg),pr.child=t,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(iM),dh.child=t,this.dispatchEvent(dh),dh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qg),pr.child=t,this.dispatchEvent(pr),pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,eM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,nM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const S=m[p];u(t.shapes,S)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),S=h(t.shapes),y=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),S.length>0&&(s.shapes=S),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}gn.DEFAULT_UP=new Z(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new Z,sa=new Z,ph=new Z,ra=new Z,mr=new Z,_r=new Z,Jg=new Z,mh=new Z,_h=new Z,gh=new Z,vh=new Ge,Sh=new Ge,yh=new Ge;class bi{constructor(t=new Z,i=new Z,s=new Z){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ei.subVectors(t,i),l.cross(Ei);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Ei.subVectors(l,i),sa.subVectors(s,i),ph.subVectors(t,i);const h=Ei.dot(Ei),d=Ei.dot(sa),m=Ei.dot(ph),p=sa.dot(sa),g=sa.dot(ph),S=h*p-d*d;if(S===0)return u.set(0,0,0),null;const y=1/S,M=(p*m-d*g)*y,E=(h*g-d*m)*y;return u.set(1-M-E,E,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ra.x),m.addScaledVector(h,ra.y),m.addScaledVector(d,ra.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return vh.setScalar(0),Sh.setScalar(0),yh.setScalar(0),vh.fromBufferAttribute(t,i),Sh.fromBufferAttribute(t,s),yh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(vh,u.x),h.addScaledVector(Sh,u.y),h.addScaledVector(yh,u.z),h}static isFrontFacing(t,i,s,l){return Ei.subVectors(s,i),sa.subVectors(t,i),Ei.cross(sa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),Ei.cross(sa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return bi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return bi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;mr.subVectors(l,s),_r.subVectors(u,s),mh.subVectors(t,s);const m=mr.dot(mh),p=_r.dot(mh);if(m<=0&&p<=0)return i.copy(s);_h.subVectors(t,l);const g=mr.dot(_h),S=_r.dot(_h);if(g>=0&&S<=g)return i.copy(l);const y=m*S-g*p;if(y<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(mr,h);gh.subVectors(t,u);const M=mr.dot(gh),E=_r.dot(gh);if(E>=0&&M<=E)return i.copy(u);const R=M*p-m*E;if(R<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(_r,d);const x=g*E-M*S;if(x<=0&&S-g>=0&&M-E>=0)return Jg.subVectors(u,l),d=(S-g)/(S-g+(M-E)),i.copy(l).addScaledVector(Jg,d);const _=1/(x+R+y);return h=R*_,d=y*_,i.copy(s).addScaledVector(mr,h).addScaledVector(_r,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ov={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},dc={h:0,s:0,l:0};function xh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Me{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ce.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Ce.workingColorSpace){if(t=Nd(t,1),i=fe(i,0,1),s=fe(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=xh(h,u,t+1/3),this.g=xh(h,u,t),this.b=xh(h,u,t-1/3)}return Ce.toWorkingColorSpace(this,l),this}setStyle(t,i=ii){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ii){const s=ov[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ii){return Ce.fromWorkingColorSpace(wn.copy(this),t),Math.round(fe(wn.r*255,0,255))*65536+Math.round(fe(wn.g*255,0,255))*256+Math.round(fe(wn.b*255,0,255))}getHexString(t=ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.fromWorkingColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,u=wn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const S=h-d;switch(p=g<=.5?S/(h+d):S/(2-h-d),h){case s:m=(l-u)/S+(l<u?6:0);break;case l:m=(u-s)/S+2;break;case u:m=(s-l)/S+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=ii){Ce.fromWorkingColorSpace(wn.copy(this),t);const i=wn.r,s=wn.g,l=wn.b;return t!==ii?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ha),this.setHSL(Ha.h+t,Ha.s+i,Ha.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ha),t.getHSL(dc);const s=ko(Ha.h,dc.h,i),l=ko(Ha.s,dc.s,i),u=ko(Ha.l,dc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Me;Me.NAMES=ov;let aM=0;class Ir extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=Rr,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Hh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(s.blending=this.blending),this.side!==qa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Fh&&(s.blendSrc=this.blendSrc),this.blendDst!==Hh&&(s.blendDst=this.blendDst),this.blendEquation!==ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(s.stencilFail=this.stencilFail),this.stencilZFail!==or&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class lv extends Ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=k0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const on=new Z,pc=new ae;class zi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Ig,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)pc.fromBufferAttribute(this,i),pc.applyMatrix3(t),this.setXY(i,pc.x,pc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(t),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.transformDirection(t),this.setXYZ(i,on.x,on.y,on.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=xr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Nn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=xr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=xr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=xr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=xr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Nn(i,this.array),s=Nn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Nn(i,this.array),s=Nn(s,this.array),l=Nn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Nn(i,this.array),s=Nn(s,this.array),l=Nn(l,this.array),u=Nn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ig&&(t.usage=this.usage),t}}class cv extends zi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class uv extends zi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class zn extends zi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let sM=0;const di=new Ze,Mh=new gn,gr=new Z,ni=new Yo,Io=new Yo,_n=new Z;class Ci extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iv(t)?uv:cv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new le().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,s){return di.makeTranslation(t,i,s),this.applyMatrix4(di),this}scale(t,i,s){return di.makeScale(t,i,s),this.applyMatrix4(di),this}lookAt(t){return Mh.lookAt(t),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new zn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ni.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Io.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(ni.min,Io.min),ni.expandByPoint(_n),_n.addVectors(ni.max,Io.max),ni.expandByPoint(_n)):(ni.expandByPoint(Io.min),ni.expandByPoint(Io.max))}ni.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)_n.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)_n.fromBufferAttribute(d,p),m&&(gr.fromBufferAttribute(t,p),_n.add(gr)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let k=0;k<s.count;k++)d[k]=new Z,m[k]=new Z;const p=new Z,g=new Z,S=new Z,y=new ae,M=new ae,E=new ae,R=new Z,x=new Z;function _(k,w,C){p.fromBufferAttribute(s,k),g.fromBufferAttribute(s,w),S.fromBufferAttribute(s,C),y.fromBufferAttribute(u,k),M.fromBufferAttribute(u,w),E.fromBufferAttribute(u,C),g.sub(p),S.sub(p),M.sub(y),E.sub(y);const F=1/(M.x*E.y-E.x*M.y);isFinite(F)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(S,-M.y).multiplyScalar(F),x.copy(S).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(F),d[k].add(R),d[w].add(R),d[C].add(R),m[k].add(x),m[w].add(x),m[C].add(x))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let k=0,w=B.length;k<w;++k){const C=B[k],F=C.start,rt=C.count;for(let at=F,ft=F+rt;at<ft;at+=3)_(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const L=new Z,D=new Z,q=new Z,I=new Z;function P(k){q.fromBufferAttribute(l,k),I.copy(q);const w=d[k];L.copy(w),L.sub(q.multiplyScalar(q.dot(w))).normalize(),D.crossVectors(I,w);const F=D.dot(m[k])<0?-1:1;h.setXYZW(k,L.x,L.y,L.z,F)}for(let k=0,w=B.length;k<w;++k){const C=B[k],F=C.start,rt=C.count;for(let at=F,ft=F+rt;at<ft;at+=3)P(t.getX(at+0)),P(t.getX(at+1)),P(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new zi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new Z,u=new Z,h=new Z,d=new Z,m=new Z,p=new Z,g=new Z,S=new Z;if(t)for(let y=0,M=t.count;y<M;y+=3){const E=t.getX(y+0),R=t.getX(y+1),x=t.getX(y+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,x),g.subVectors(h,u),S.subVectors(l,u),g.cross(S),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,x),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),g.subVectors(h,u),S.subVectors(l,u),g.cross(S),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,S=d.normalized,y=new p.constructor(m.length*g);let M=0,E=0;for(let R=0,x=m.length;R<x;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*g;for(let _=0;_<g;_++)y[E++]=p[M++]}return new zi(y,g,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ci,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,S=p.length;g<S;g++){const y=p[g],M=t(y,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let S=0,y=p.length;S<y;S++){const M=p[S];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],S=u[p];for(let y=0,M=S.length;y<M;y++)g.push(S[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const S=h[p];this.addGroup(S.start,S.count,S.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $g=new Ze,ms=new Pd,mc=new Vc,t0=new Z,_c=new Z,gc=new Z,vc=new Z,Eh=new Z,Sc=new Z,e0=new Z,yc=new Z;class pi extends gn{constructor(t=new Ci,i=new lv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Sc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],S=u[m];g!==0&&(Eh.fromBufferAttribute(S,t),h?Sc.addScaledVector(Eh,g):Sc.addScaledVector(Eh.sub(i),g))}i.add(Sc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),mc.copy(s.boundingSphere),mc.applyMatrix4(u),ms.copy(t.ray).recast(t.near),!(mc.containsPoint(ms.origin)===!1&&(ms.intersectSphere(mc,t0)===null||ms.origin.distanceToSquared(t0)>(t.far-t.near)**2))&&($g.copy(u).invert(),ms.copy(t.ray).applyMatrix4($g),!(s.boundingBox!==null&&ms.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ms)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,S=u.attributes.normal,y=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,R=y.length;E<R;E++){const x=y[E],_=h[x.materialIndex],B=Math.max(x.start,M.start),L=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let D=B,q=L;D<q;D+=3){const I=d.getX(D),P=d.getX(D+1),k=d.getX(D+2);l=xc(this,_,t,s,p,g,S,I,P,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let x=E,_=R;x<_;x+=3){const B=d.getX(x),L=d.getX(x+1),D=d.getX(x+2);l=xc(this,h,t,s,p,g,S,B,L,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,R=y.length;E<R;E++){const x=y[E],_=h[x.materialIndex],B=Math.max(x.start,M.start),L=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let D=B,q=L;D<q;D+=3){const I=D,P=D+1,k=D+2;l=xc(this,_,t,s,p,g,S,I,P,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let x=E,_=R;x<_;x+=3){const B=x,L=x+1,D=x+2;l=xc(this,h,t,s,p,g,S,B,L,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function rM(o,t,i,s,l,u,h,d){let m;if(t.side===qn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===qa,d),m===null)return null;yc.copy(d),yc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(yc);return p<i.near||p>i.far?null:{distance:p,point:yc.clone(),object:o}}function xc(o,t,i,s,l,u,h,d,m,p){o.getVertexPosition(d,_c),o.getVertexPosition(m,gc),o.getVertexPosition(p,vc);const g=rM(o,t,i,s,_c,gc,vc,e0);if(g){const S=new Z;bi.getBarycoord(e0,_c,gc,vc,S),l&&(g.uv=bi.getInterpolatedAttribute(l,d,m,p,S,new ae)),u&&(g.uv1=bi.getInterpolatedAttribute(u,d,m,p,S,new ae)),h&&(g.normal=bi.getInterpolatedAttribute(h,d,m,p,S,new Z),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new Z,materialIndex:0};bi.getNormal(_c,gc,vc,y.normal),g.face=y,g.barycoord=S}return g}class jo extends Ci{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],S=[];let y=0,M=0;E("z","y","x",-1,-1,s,i,t,h,u,0),E("z","y","x",1,-1,s,i,-t,h,u,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,u,4),E("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new zn(p,3)),this.setAttribute("normal",new zn(g,3)),this.setAttribute("uv",new zn(S,2));function E(R,x,_,B,L,D,q,I,P,k,w){const C=D/P,F=q/k,rt=D/2,at=q/2,ft=I/2,ht=P+1,N=k+1;let K=0,X=0;const St=new Z;for(let Et=0;Et<N;Et++){const O=Et*F-at;for(let J=0;J<ht;J++){const mt=J*C-rt;St[R]=mt*B,St[x]=O*L,St[_]=ft,p.push(St.x,St.y,St.z),St[R]=0,St[x]=0,St[_]=I>0?1:-1,g.push(St.x,St.y,St.z),S.push(J/P),S.push(1-Et/k),K+=1}}for(let Et=0;Et<k;Et++)for(let O=0;O<P;O++){const J=y+O+ht*Et,mt=y+O+ht*(Et+1),W=y+(O+1)+ht*(Et+1),lt=y+(O+1)+ht*Et;m.push(J,mt,lt),m.push(mt,W,lt),X+=6}d.addGroup(M,X,w),M+=X,y+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function On(o){const t={};for(let i=0;i<o.length;i++){const s=zr(o[i]);for(const l in s)t[l]=s[l]}return t}function oM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function fv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const lM={clone:zr,merge:On};var cM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ya extends Ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cM,this.fragmentShader=uM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zr(t.uniforms),this.uniformsGroups=oM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class hv extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=ua}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new Z,n0=new ae,i0=new ae;class ai extends hv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Wo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z)}getViewSize(t,i){return this.getViewBounds(t,n0,i0),i.subVectors(i0,n0)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Vo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vr=-90,Sr=1;class fM extends gn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ai(vr,Sr,t,i);l.layers=this.layers,this.add(l);const u=new ai(vr,Sr,t,i);u.layers=this.layers,this.add(u);const h=new ai(vr,Sr,t,i);h.layers=this.layers,this.add(h);const d=new ai(vr,Sr,t,i);d.layers=this.layers,this.add(d);const m=new ai(vr,Sr,t,i);m.layers=this.layers,this.add(m);const p=new ai(vr,Sr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===ua)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===zc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,S=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(S,y,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class dv extends Yn{constructor(t,i,s,l,u,h,d,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:Ur,super(t,i,s,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hM extends bs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new dv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Pi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new jo(5,5,5),u=new Ya({name:"CubemapFromEquirect",uniforms:zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:Xa});u.uniforms.tEquirect.value=i;const h=new pi(l,u),d=i.minFilter;return i.minFilter===Es&&(i.minFilter=Pi),new fM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,s,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class zd{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Me(t),this.density=i}clone(){return new zd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class dM extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Th=new Z,pM=new Z,mM=new le;class Va{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Th.subVectors(s,i).cross(pM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Th),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||mM.getNormalMatrix(t),l=this.coplanarPoint(Th).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new Vc,Mc=new Z;class Bd{constructor(t=new Va,i=new Va,s=new Va,l=new Va,u=new Va,h=new Va){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ua){const s=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],S=l[6],y=l[7],M=l[8],E=l[9],R=l[10],x=l[11],_=l[12],B=l[13],L=l[14],D=l[15];if(s[0].setComponents(m-u,y-p,x-M,D-_).normalize(),s[1].setComponents(m+u,y+p,x+M,D+_).normalize(),s[2].setComponents(m+h,y+g,x+E,D+B).normalize(),s[3].setComponents(m-h,y-g,x-E,D-B).normalize(),s[4].setComponents(m-d,y-S,x-R,D-L).normalize(),i===ua)s[5].setComponents(m+d,y+S,x+R,D+L).normalize();else if(i===zc)s[5].setComponents(d,S,R,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Mc.x=l.normal.x>0?t.max.x:t.min.x,Mc.y=l.normal.y>0?t.max.y:t.min.y,Mc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pv extends Ir{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ic=new Z,Fc=new Z,a0=new Ze,Fo=new Pd,Ec=new Vc,bh=new Z,s0=new Z;class _M extends gn{constructor(t=new Ci,i=new pv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Ic.fromBufferAttribute(i,l-1),Fc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Ic.distanceTo(Fc);t.setAttribute("lineDistance",new zn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ec.copy(s.boundingSphere),Ec.applyMatrix4(l),Ec.radius+=u,t.ray.intersectsSphere(Ec)===!1)return;a0.copy(l).invert(),Fo.copy(t.ray).applyMatrix4(a0);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,y=s.attributes.position;if(g!==null){const M=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let R=M,x=E-1;R<x;R+=p){const _=g.getX(R),B=g.getX(R+1),L=Tc(this,t,Fo,m,_,B);L&&i.push(L)}if(this.isLineLoop){const R=g.getX(E-1),x=g.getX(M),_=Tc(this,t,Fo,m,R,x);_&&i.push(_)}}else{const M=Math.max(0,h.start),E=Math.min(y.count,h.start+h.count);for(let R=M,x=E-1;R<x;R+=p){const _=Tc(this,t,Fo,m,R,R+1);_&&i.push(_)}if(this.isLineLoop){const R=Tc(this,t,Fo,m,E-1,M);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Tc(o,t,i,s,l,u){const h=o.geometry.attributes.position;if(Ic.fromBufferAttribute(h,l),Fc.fromBufferAttribute(h,u),i.distanceSqToSegment(Ic,Fc,bh,s0)>s)return;bh.applyMatrix4(o.matrixWorld);const m=t.ray.origin.distanceTo(bh);if(!(m<t.near||m>t.far))return{distance:m,point:s0.clone().applyMatrix4(o.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:o}}const r0=new Z,o0=new Z;class gM extends _M{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)r0.fromBufferAttribute(i,l),o0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+r0.distanceTo(o0);t.setAttribute("lineDistance",new zn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tr extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class mv extends Yn{constructor(t,i,s,l,u,h,d,m,p,g=Cr){if(g!==Cr&&g!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===Cr&&(s=Ts),s===void 0&&g===Or&&(s=Nr),super(null,l,u,h,d,m,g,s,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Ri,this.minFilter=m!==void 0?m:Ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Id extends Ci{constructor(t=1,i=1,s=1,l=32,u=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const g=[],S=[],y=[],M=[];let E=0;const R=[],x=s/2;let _=0;B(),h===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new zn(S,3)),this.setAttribute("normal",new zn(y,3)),this.setAttribute("uv",new zn(M,2));function B(){const D=new Z,q=new Z;let I=0;const P=(i-t)/s;for(let k=0;k<=u;k++){const w=[],C=k/u,F=C*(i-t)+t;for(let rt=0;rt<=l;rt++){const at=rt/l,ft=at*m+d,ht=Math.sin(ft),N=Math.cos(ft);q.x=F*ht,q.y=-C*s+x,q.z=F*N,S.push(q.x,q.y,q.z),D.set(ht,P,N).normalize(),y.push(D.x,D.y,D.z),M.push(at,1-C),w.push(E++)}R.push(w)}for(let k=0;k<l;k++)for(let w=0;w<u;w++){const C=R[w][k],F=R[w+1][k],rt=R[w+1][k+1],at=R[w][k+1];(t>0||w!==0)&&(g.push(C,F,at),I+=3),(i>0||w!==u-1)&&(g.push(F,rt,at),I+=3)}p.addGroup(_,I,0),_+=I}function L(D){const q=E,I=new ae,P=new Z;let k=0;const w=D===!0?t:i,C=D===!0?1:-1;for(let rt=1;rt<=l;rt++)S.push(0,x*C,0),y.push(0,C,0),M.push(.5,.5),E++;const F=E;for(let rt=0;rt<=l;rt++){const ft=rt/l*m+d,ht=Math.cos(ft),N=Math.sin(ft);P.x=w*N,P.y=x*C,P.z=w*ht,S.push(P.x,P.y,P.z),y.push(0,C,0),I.x=ht*.5+.5,I.y=N*.5*C+.5,M.push(I.x,I.y),E++}for(let rt=0;rt<l;rt++){const at=q+rt,ft=F+rt;D===!0?g.push(ft,ft+1,at):g.push(ft+1,ft,at),k+=3}p.addGroup(_,k,D===!0?1:2),_+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Id(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kc extends Ci{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,S=t/d,y=i/m,M=[],E=[],R=[],x=[];for(let _=0;_<g;_++){const B=_*y-h;for(let L=0;L<p;L++){const D=L*S-u;E.push(D,-B,0),R.push(0,0,1),x.push(L/d),x.push(1-_/m)}}for(let _=0;_<m;_++)for(let B=0;B<d;B++){const L=B+p*_,D=B+p*(_+1),q=B+1+p*(_+1),I=B+1+p*_;M.push(L,D,I),M.push(D,q,I)}this.setIndex(M),this.setAttribute("position",new zn(E,3)),this.setAttribute("normal",new zn(R,3)),this.setAttribute("uv",new zn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Hc extends Ci{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],S=new Z,y=new Z,M=[],E=[],R=[],x=[];for(let _=0;_<=s;_++){const B=[],L=_/s;let D=0;_===0&&h===0?D=.5/i:_===s&&m===Math.PI&&(D=-.5/i);for(let q=0;q<=i;q++){const I=q/i;S.x=-t*Math.cos(l+I*u)*Math.sin(h+L*d),S.y=t*Math.cos(h+L*d),S.z=t*Math.sin(l+I*u)*Math.sin(h+L*d),E.push(S.x,S.y,S.z),y.copy(S).normalize(),R.push(y.x,y.y,y.z),x.push(I+D,1-L),B.push(p++)}g.push(B)}for(let _=0;_<s;_++)for(let B=0;B<i;B++){const L=g[_][B+1],D=g[_][B],q=g[_+1][B],I=g[_+1][B+1];(_!==0||h>0)&&M.push(L,D,I),(_!==s-1||m<Math.PI)&&M.push(D,q,I)}this.setIndex(M),this.setAttribute("position",new zn(E,3)),this.setAttribute("normal",new zn(R,3)),this.setAttribute("uv",new zn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ah extends Ir{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ev,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vM extends Ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class SM extends Ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class yM extends pv{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class Fd extends gn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class xM extends Fd{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Rh=new Ze,l0=new Z,c0=new Z;class _v{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bd,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;l0.setFromMatrixPosition(t.matrixWorld),i.position.copy(l0),c0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(c0),i.updateMatrixWorld(),Rh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Rh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const u0=new Ze,Ho=new Z,Ch=new Z;class MM extends _v{constructor(){super(new ai(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,u=t.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),Ho.setFromMatrixPosition(t.matrixWorld),s.position.copy(Ho),Ch.copy(s.position),Ch.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Ch),s.updateMatrixWorld(),l.makeTranslation(-Ho.x,-Ho.y,-Ho.z),u0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(u0)}}class f0 extends Fd{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new MM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class gv extends hv{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class EM extends _v{constructor(){super(new gv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class TM extends Fd{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new EM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class bM extends ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class h0{constructor(t=1,i=0,s=0){return this.radius=t,this.phi=i,this.theta=s,this}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(fe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class AM extends Rs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function d0(o,t,i,s){const l=RM(s);switch(i){case j0:return o*t;case K0:return o*t;case Q0:return o*t*2;case J0:return o*t/l.components*l.byteLength;case Dd:return o*t/l.components*l.byteLength;case $0:return o*t*2/l.components*l.byteLength;case Ud:return o*t*2/l.components*l.byteLength;case Z0:return o*t*3/l.components*l.byteLength;case Ai:return o*t*4/l.components*l.byteLength;case Ld:return o*t*4/l.components*l.byteLength;case wc:case Dc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Uc:case Lc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case $h:case ed:return Math.max(o,16)*Math.max(t,8)/4;case Jh:case td:return Math.max(o,8)*Math.max(t,8)/2;case nd:case id:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case ad:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case sd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case rd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case od:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case ld:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case cd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case ud:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case fd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case hd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case dd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case pd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case md:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case _d:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case gd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case vd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Nc:case Sd:case yd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case tv:case xd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Md:case Ed:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function RM(o){switch(o){case ha:case W0:return{byteLength:1,components:1};case Xo:case q0:case qo:return{byteLength:2,components:1};case Cd:case wd:return{byteLength:2,components:4};case Ts:case Rd:case ca:return{byteLength:4,components:1};case Y0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ad}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ad);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vv(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function CM(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,S=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:S}}function s(d,m,p){const g=m.array,S=m.updateRanges;if(o.bindBuffer(p,d),S.length===0)o.bufferSubData(p,0,g);else{S.sort((M,E)=>M.start-E.start);let y=0;for(let M=1;M<S.length;M++){const E=S[y],R=S[M];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++y,S[y]=R)}S.length=y+1;for(let M=0,E=S.length;M<E;M++){const R=S[M];o.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var wM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,UM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,IM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,VM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,JM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$M=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sE="gl_FragColor = linearToOutputTexel( gl_FragColor );",rE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_E=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ME=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,WE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,JE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_T=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ST=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,MT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ET=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,RT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$T=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ib=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ab=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:wM,alphahash_pars_fragment:DM,alphamap_fragment:UM,alphamap_pars_fragment:LM,alphatest_fragment:NM,alphatest_pars_fragment:OM,aomap_fragment:PM,aomap_pars_fragment:zM,batching_pars_vertex:BM,batching_vertex:IM,begin_vertex:FM,beginnormal_vertex:HM,bsdfs:GM,iridescence_fragment:VM,bumpmap_pars_fragment:kM,clipping_planes_fragment:XM,clipping_planes_pars_fragment:WM,clipping_planes_pars_vertex:qM,clipping_planes_vertex:YM,color_fragment:jM,color_pars_fragment:ZM,color_pars_vertex:KM,color_vertex:QM,common:JM,cube_uv_reflection_fragment:$M,defaultnormal_vertex:tE,displacementmap_pars_vertex:eE,displacementmap_vertex:nE,emissivemap_fragment:iE,emissivemap_pars_fragment:aE,colorspace_fragment:sE,colorspace_pars_fragment:rE,envmap_fragment:oE,envmap_common_pars_fragment:lE,envmap_pars_fragment:cE,envmap_pars_vertex:uE,envmap_physical_pars_fragment:xE,envmap_vertex:fE,fog_vertex:hE,fog_pars_vertex:dE,fog_fragment:pE,fog_pars_fragment:mE,gradientmap_pars_fragment:_E,lightmap_pars_fragment:gE,lights_lambert_fragment:vE,lights_lambert_pars_fragment:SE,lights_pars_begin:yE,lights_toon_fragment:ME,lights_toon_pars_fragment:EE,lights_phong_fragment:TE,lights_phong_pars_fragment:bE,lights_physical_fragment:AE,lights_physical_pars_fragment:RE,lights_fragment_begin:CE,lights_fragment_maps:wE,lights_fragment_end:DE,logdepthbuf_fragment:UE,logdepthbuf_pars_fragment:LE,logdepthbuf_pars_vertex:NE,logdepthbuf_vertex:OE,map_fragment:PE,map_pars_fragment:zE,map_particle_fragment:BE,map_particle_pars_fragment:IE,metalnessmap_fragment:FE,metalnessmap_pars_fragment:HE,morphinstance_vertex:GE,morphcolor_vertex:VE,morphnormal_vertex:kE,morphtarget_pars_vertex:XE,morphtarget_vertex:WE,normal_fragment_begin:qE,normal_fragment_maps:YE,normal_pars_fragment:jE,normal_pars_vertex:ZE,normal_vertex:KE,normalmap_pars_fragment:QE,clearcoat_normal_fragment_begin:JE,clearcoat_normal_fragment_maps:$E,clearcoat_pars_fragment:tT,iridescence_pars_fragment:eT,opaque_fragment:nT,packing:iT,premultiplied_alpha_fragment:aT,project_vertex:sT,dithering_fragment:rT,dithering_pars_fragment:oT,roughnessmap_fragment:lT,roughnessmap_pars_fragment:cT,shadowmap_pars_fragment:uT,shadowmap_pars_vertex:fT,shadowmap_vertex:hT,shadowmask_pars_fragment:dT,skinbase_vertex:pT,skinning_pars_vertex:mT,skinning_vertex:_T,skinnormal_vertex:gT,specularmap_fragment:vT,specularmap_pars_fragment:ST,tonemapping_fragment:yT,tonemapping_pars_fragment:xT,transmission_fragment:MT,transmission_pars_fragment:ET,uv_pars_fragment:TT,uv_pars_vertex:bT,uv_vertex:AT,worldpos_vertex:RT,background_vert:CT,background_frag:wT,backgroundCube_vert:DT,backgroundCube_frag:UT,cube_vert:LT,cube_frag:NT,depth_vert:OT,depth_frag:PT,distanceRGBA_vert:zT,distanceRGBA_frag:BT,equirect_vert:IT,equirect_frag:FT,linedashed_vert:HT,linedashed_frag:GT,meshbasic_vert:VT,meshbasic_frag:kT,meshlambert_vert:XT,meshlambert_frag:WT,meshmatcap_vert:qT,meshmatcap_frag:YT,meshnormal_vert:jT,meshnormal_frag:ZT,meshphong_vert:KT,meshphong_frag:QT,meshphysical_vert:JT,meshphysical_frag:$T,meshtoon_vert:tb,meshtoon_frag:eb,points_vert:nb,points_frag:ib,shadow_vert:ab,shadow_frag:sb,sprite_vert:rb,sprite_frag:ob},Lt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Oi={basic:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:On([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:On([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Me(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:On([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:On([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:On([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:On([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:On([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:On([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:On([Lt.common,Lt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:On([Lt.lights,Lt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Oi.physical={uniforms:On([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const bc={r:0,b:0,g:0},gs=new Bi,lb=new Ze;function cb(o,t,i,s,l,u,h){const d=new Me(0);let m=u===!0?0:1,p,g,S=null,y=0,M=null;function E(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:t).get(D)),D}function R(L){let D=!1;const q=E(L);q===null?_(d,m):q&&q.isColor&&(_(q,1),D=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(L,D){const q=E(D);q&&(q.isCubeTexture||q.mapping===Gc)?(g===void 0&&(g=new pi(new jo(1,1,1),new Ya({name:"BackgroundCubeMaterial",uniforms:zr(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),gs.copy(D.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,q.isCubeTexture&&q.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),g.material.uniforms.envMap.value=q,g.material.uniforms.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(lb.makeRotationFromEuler(gs)),g.material.toneMapped=Ce.getTransfer(q.colorSpace)!==Fe,(S!==q||y!==q.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,S=q,y=q.version,M=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):q&&q.isTexture&&(p===void 0&&(p=new pi(new kc(2,2),new Ya({name:"BackgroundMaterial",uniforms:zr(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=q,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(q.colorSpace)!==Fe,q.matrixAutoUpdate===!0&&q.updateMatrix(),p.material.uniforms.uvTransform.value.copy(q.matrix),(S!==q||y!==q.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,S=q,y=q.version,M=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,D){L.getRGB(bc,fv(o)),s.buffers.color.setClear(bc.r,bc.g,bc.b,D,h)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(d,m)},render:R,addToRenderList:x,dispose:B}}function ub(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let u=l,h=!1;function d(C,F,rt,at,ft){let ht=!1;const N=S(at,rt,F);u!==N&&(u=N,p(u.object)),ht=M(C,at,rt,ft),ht&&E(C,at,rt,ft),ft!==null&&t.update(ft,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,D(C,F,rt,at),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function S(C,F,rt){const at=rt.wireframe===!0;let ft=s[C.id];ft===void 0&&(ft={},s[C.id]=ft);let ht=ft[F.id];ht===void 0&&(ht={},ft[F.id]=ht);let N=ht[at];return N===void 0&&(N=y(m()),ht[at]=N),N}function y(C){const F=[],rt=[],at=[];for(let ft=0;ft<i;ft++)F[ft]=0,rt[ft]=0,at[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:rt,attributeDivisors:at,object:C,attributes:{},index:null}}function M(C,F,rt,at){const ft=u.attributes,ht=F.attributes;let N=0;const K=rt.getAttributes();for(const X in K)if(K[X].location>=0){const Et=ft[X];let O=ht[X];if(O===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),Et===void 0||Et.attribute!==O||O&&Et.data!==O.data)return!0;N++}return u.attributesNum!==N||u.index!==at}function E(C,F,rt,at){const ft={},ht=F.attributes;let N=0;const K=rt.getAttributes();for(const X in K)if(K[X].location>=0){let Et=ht[X];Et===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor));const O={};O.attribute=Et,Et&&Et.data&&(O.data=Et.data),ft[X]=O,N++}u.attributes=ft,u.attributesNum=N,u.index=at}function R(){const C=u.newAttributes;for(let F=0,rt=C.length;F<rt;F++)C[F]=0}function x(C){_(C,0)}function _(C,F){const rt=u.newAttributes,at=u.enabledAttributes,ft=u.attributeDivisors;rt[C]=1,at[C]===0&&(o.enableVertexAttribArray(C),at[C]=1),ft[C]!==F&&(o.vertexAttribDivisor(C,F),ft[C]=F)}function B(){const C=u.newAttributes,F=u.enabledAttributes;for(let rt=0,at=F.length;rt<at;rt++)F[rt]!==C[rt]&&(o.disableVertexAttribArray(rt),F[rt]=0)}function L(C,F,rt,at,ft,ht,N){N===!0?o.vertexAttribIPointer(C,F,rt,ft,ht):o.vertexAttribPointer(C,F,rt,at,ft,ht)}function D(C,F,rt,at){R();const ft=at.attributes,ht=rt.getAttributes(),N=F.defaultAttributeValues;for(const K in ht){const X=ht[K];if(X.location>=0){let St=ft[K];if(St===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(St=C.instanceColor)),St!==void 0){const Et=St.normalized,O=St.itemSize,J=t.get(St);if(J===void 0)continue;const mt=J.buffer,W=J.type,lt=J.bytesPerElement,xt=W===o.INT||W===o.UNSIGNED_INT||St.gpuType===Rd;if(St.isInterleavedBufferAttribute){const yt=St.data,Bt=yt.stride,Pt=St.offset;if(yt.isInstancedInterleavedBuffer){for(let ee=0;ee<X.locationSize;ee++)_(X.location+ee,yt.meshPerAttribute);C.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ee=0;ee<X.locationSize;ee++)x(X.location+ee);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let ee=0;ee<X.locationSize;ee++)L(X.location+ee,O/X.locationSize,W,Et,Bt*lt,(Pt+O/X.locationSize*ee)*lt,xt)}else{if(St.isInstancedBufferAttribute){for(let yt=0;yt<X.locationSize;yt++)_(X.location+yt,St.meshPerAttribute);C.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let yt=0;yt<X.locationSize;yt++)x(X.location+yt);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let yt=0;yt<X.locationSize;yt++)L(X.location+yt,O/X.locationSize,W,Et,O*lt,O/X.locationSize*yt*lt,xt)}}else if(N!==void 0){const Et=N[K];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(X.location,Et);break;case 3:o.vertexAttrib3fv(X.location,Et);break;case 4:o.vertexAttrib4fv(X.location,Et);break;default:o.vertexAttrib1fv(X.location,Et)}}}}B()}function q(){k();for(const C in s){const F=s[C];for(const rt in F){const at=F[rt];for(const ft in at)g(at[ft].object),delete at[ft];delete F[rt]}delete s[C]}}function I(C){if(s[C.id]===void 0)return;const F=s[C.id];for(const rt in F){const at=F[rt];for(const ft in at)g(at[ft].object),delete at[ft];delete F[rt]}delete s[C.id]}function P(C){for(const F in s){const rt=s[F];if(rt[C.id]===void 0)continue;const at=rt[C.id];for(const ft in at)g(at[ft].object),delete at[ft];delete rt[C.id]}}function k(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:w,dispose:q,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:x,disableUnusedAttributes:B}}function fb(o,t,i){let s;function l(p){s=p}function u(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,S){S!==0&&(o.drawArraysInstanced(s,p,g,S),i.update(g,s,S))}function d(p,g,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,S);let M=0;for(let E=0;E<S;E++)M+=g[E];i.update(M,s,1)}function m(p,g,S,y){if(S===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],g[E],y[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,y,0,S);let E=0;for(let R=0;R<S;R++)E+=g[R]*y[R];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function hb(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Ai&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const k=P===qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ha&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ca&&!k)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const S=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),q=E>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:S,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:B,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:q,maxSamples:I}}function db(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Va,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,y){const M=S.length!==0||y||s!==0||l;return l=y,s=S.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,y){i=g(S,y,0)},this.setState=function(S,y,M){const E=S.clippingPlanes,R=S.clipIntersection,x=S.clipShadows,_=o.get(S);if(!l||E===null||E.length===0||u&&!x)u?g(null):p();else{const B=u?0:s,L=B*4;let D=_.clippingState||null;m.value=D,D=g(E,y,L,M);for(let q=0;q!==L;++q)D[q]=i[q];_.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(S,y,M,E){const R=S!==null?S.length:0;let x=null;if(R!==0){if(x=m.value,E!==!0||x===null){const _=M+R*4,B=y.matrixWorldInverse;d.getNormalMatrix(B),(x===null||x.length<_)&&(x=new Float32Array(_));for(let L=0,D=M;L!==R;++L,D+=4)h.copy(S[L]).applyMatrix4(B,d),h.normal.toArray(x,D),x[D+3]=h.constant}m.value=x,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,x}}function pb(o){let t=new WeakMap;function i(h,d){return d===jh?h.mapping=Ur:d===Zh&&(h.mapping=Lr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===jh||d===Zh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new hM(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const br=4,p0=[.125,.215,.35,.446,.526,.582],xs=20,wh=new gv,m0=new Me;let Dh=null,Uh=0,Lh=0,Nh=!1;const Ss=(1+Math.sqrt(5))/2,yr=1/Ss,_0=[new Z(-Ss,yr,0),new Z(Ss,yr,0),new Z(-yr,0,Ss),new Z(yr,0,Ss),new Z(0,Ss,-yr),new Z(0,Ss,yr),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class g0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){Dh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Dh,Uh,Lh),this._renderer.xr.enabled=Nh,t.scissorTest=!1,Ac(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ur||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:qo,format:Ai,colorSpace:Pr,depthBuffer:!1},l=v0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=v0(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mb(u)),this._blurMaterial=_b(u,t,i)}return l}_compileMaterial(t){const i=new pi(this._lodPlanes[0],t);this._renderer.compile(i,wh)}_sceneToCubeUV(t,i,s,l){const d=new ai(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,y=g.toneMapping;g.getClearColor(m0),g.toneMapping=Wa,g.autoClear=!1;const M=new lv({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),E=new pi(new jo,M);let R=!1;const x=t.background;x?x.isColor&&(M.color.copy(x),t.background=null,R=!0):(M.color.copy(m0),R=!0);for(let _=0;_<6;_++){const B=_%3;B===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):B===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const L=this._cubeSize;Ac(l,B*L,_>2?L:0,L,L),g.setRenderTarget(l),R&&g.render(E,d),g.render(t,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=y,g.autoClear=S,t.background=x}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ur||t.mapping===Lr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=y0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S0());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new pi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Ac(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,wh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=_0[(l-u-1)%_0.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,S=new pi(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*xs-1),R=u/E,x=isFinite(u)?1+Math.floor(g*R):xs;x>xs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${xs}`);const _=[];let B=0;for(let P=0;P<xs;++P){const k=P/R,w=Math.exp(-k*k/2);_.push(w),P===0?B+=w:P<x&&(B+=2*w)}for(let P=0;P<_.length;P++)_[P]=_[P]/B;y.envMap.value=t.texture,y.samples.value=x,y.weights.value=_,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=E,y.mipInt.value=L-s;const D=this._sizeLods[l],q=3*D*(l>L-br?l-L+br:0),I=4*(this._cubeSize-D);Ac(i,q,I,3*D,2*D),m.setRenderTarget(i),m.render(S,wh)}}function mb(o){const t=[],i=[],s=[];let l=o;const u=o-br+1+p0.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-br?m=p0[h-o+br-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,S=1+p,y=[g,g,S,g,S,S,g,g,S,S,g,S],M=6,E=6,R=3,x=2,_=1,B=new Float32Array(R*E*M),L=new Float32Array(x*E*M),D=new Float32Array(_*E*M);for(let I=0;I<M;I++){const P=I%3*2/3-1,k=I>2?0:-1,w=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];B.set(w,R*E*I),L.set(y,x*E*I);const C=[I,I,I,I,I,I];D.set(C,_*E*I)}const q=new Ci;q.setAttribute("position",new zi(B,R)),q.setAttribute("uv",new zi(L,x)),q.setAttribute("faceIndex",new zi(D,_)),t.push(q),l>br&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function v0(o,t,i){const s=new bs(o,t,i);return s.texture.mapping=Gc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ac(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function _b(o,t,i){const s=new Float32Array(xs),l=new Z(0,1,0);return new Ya({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function S0(){return new Ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function y0(){return new Ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function Hd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gb(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===jh||m===Zh,g=m===Ur||m===Lr;if(p||g){let S=t.get(d);const y=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new g0(o)),S=p?i.fromEquirectangular(d,S):i.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,t.set(d,S),S.texture;if(S!==void 0)return S.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new g0(o)),S=p?i.fromEquirectangular(d):i.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,t.set(d,S),d.addEventListener("dispose",u),S.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function vb(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Mr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Sb(o,t,i,s){const l={},u=new WeakMap;function h(S){const y=S.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",h),delete l[y.id];const M=u.get(y);M&&(t.remove(M),u.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(S,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(S){const y=S.attributes;for(const M in y)t.update(y[M],o.ARRAY_BUFFER)}function p(S){const y=[],M=S.index,E=S.attributes.position;let R=0;if(M!==null){const B=M.array;R=M.version;for(let L=0,D=B.length;L<D;L+=3){const q=B[L+0],I=B[L+1],P=B[L+2];y.push(q,I,I,P,P,q)}}else if(E!==void 0){const B=E.array;R=E.version;for(let L=0,D=B.length/3-1;L<D;L+=3){const q=L+0,I=L+1,P=L+2;y.push(q,I,I,P,P,q)}}else return;const x=new(iv(y)?uv:cv)(y,1);x.version=R;const _=u.get(S);_&&t.remove(_),u.set(S,x)}function g(S){const y=u.get(S);if(y){const M=S.index;M!==null&&y.version<M.version&&p(S)}else p(S);return u.get(S)}return{get:d,update:m,getWireframeAttribute:g}}function yb(o,t,i){let s;function l(y){s=y}let u,h;function d(y){u=y.type,h=y.bytesPerElement}function m(y,M){o.drawElements(s,M,u,y*h),i.update(M,s,1)}function p(y,M,E){E!==0&&(o.drawElementsInstanced(s,M,u,y*h,E),i.update(M,s,E))}function g(y,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,y,0,E);let x=0;for(let _=0;_<E;_++)x+=M[_];i.update(x,s,1)}function S(y,M,E,R){if(E===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<y.length;_++)p(y[_]/h,M[_],R[_]);else{x.multiDrawElementsInstancedWEBGL(s,M,0,u,y,0,R,0,E);let _=0;for(let B=0;B<E;B++)_+=M[B]*R[B];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=S}function xb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Mb(o,t,i){const s=new WeakMap,l=new Ge;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=g!==void 0?g.length:0;let y=s.get(d);if(y===void 0||y.count!==S){let C=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),R===!0&&(D=2),x===!0&&(D=3);let q=d.attributes.position.count*D,I=1;q>t.maxTextureSize&&(I=Math.ceil(q/t.maxTextureSize),q=t.maxTextureSize);const P=new Float32Array(q*I*4*S),k=new sv(P,q,I,S);k.type=ca,k.needsUpdate=!0;const w=D*4;for(let F=0;F<S;F++){const rt=_[F],at=B[F],ft=L[F],ht=q*I*4*F;for(let N=0;N<rt.count;N++){const K=N*w;E===!0&&(l.fromBufferAttribute(rt,N),P[ht+K+0]=l.x,P[ht+K+1]=l.y,P[ht+K+2]=l.z,P[ht+K+3]=0),R===!0&&(l.fromBufferAttribute(at,N),P[ht+K+4]=l.x,P[ht+K+5]=l.y,P[ht+K+6]=l.z,P[ht+K+7]=0),x===!0&&(l.fromBufferAttribute(ft,N),P[ht+K+8]=l.x,P[ht+K+9]=l.y,P[ht+K+10]=l.z,P[ht+K+11]=ft.itemSize===4?l.w:1)}}y={count:S,texture:k,size:new ae(q,I)},s.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let x=0;x<p.length;x++)E+=p[x];const R=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function Eb(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,S=t.get(m,g);if(l.get(S)!==p&&(t.update(S),l.set(S,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return S}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const Sv=new Yn,x0=new mv(1,1),yv=new sv,xv=new Kx,Mv=new dv,M0=[],E0=[],T0=new Float32Array(16),b0=new Float32Array(9),A0=new Float32Array(4);function Fr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=M0[l];if(u===void 0&&(u=new Float32Array(l),M0[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function hn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function dn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Xc(o,t){let i=E0[t];i===void 0&&(i=new Int32Array(t),E0[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function Tb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function bb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2fv(this.addr,t),dn(i,t)}}function Ab(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;o.uniform3fv(this.addr,t),dn(i,t)}}function Rb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4fv(this.addr,t),dn(i,t)}}function Cb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,s))return;A0.set(s),o.uniformMatrix2fv(this.addr,!1,A0),dn(i,s)}}function wb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,s))return;b0.set(s),o.uniformMatrix3fv(this.addr,!1,b0),dn(i,s)}}function Db(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,s))return;T0.set(s),o.uniformMatrix4fv(this.addr,!1,T0),dn(i,s)}}function Ub(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function Lb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2iv(this.addr,t),dn(i,t)}}function Nb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3iv(this.addr,t),dn(i,t)}}function Ob(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4iv(this.addr,t),dn(i,t)}}function Pb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function zb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2uiv(this.addr,t),dn(i,t)}}function Bb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3uiv(this.addr,t),dn(i,t)}}function Ib(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4uiv(this.addr,t),dn(i,t)}}function Fb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(x0.compareFunction=nv,u=x0):u=Sv,i.setTexture2D(t||u,l)}function Hb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||xv,l)}function Gb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Mv,l)}function Vb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||yv,l)}function kb(o){switch(o){case 5126:return Tb;case 35664:return bb;case 35665:return Ab;case 35666:return Rb;case 35674:return Cb;case 35675:return wb;case 35676:return Db;case 5124:case 35670:return Ub;case 35667:case 35671:return Lb;case 35668:case 35672:return Nb;case 35669:case 35673:return Ob;case 5125:return Pb;case 36294:return zb;case 36295:return Bb;case 36296:return Ib;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return Hb;case 35680:case 36300:case 36308:case 36293:return Gb;case 36289:case 36303:case 36311:case 36292:return Vb}}function Xb(o,t){o.uniform1fv(this.addr,t)}function Wb(o,t){const i=Fr(t,this.size,2);o.uniform2fv(this.addr,i)}function qb(o,t){const i=Fr(t,this.size,3);o.uniform3fv(this.addr,i)}function Yb(o,t){const i=Fr(t,this.size,4);o.uniform4fv(this.addr,i)}function jb(o,t){const i=Fr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Zb(o,t){const i=Fr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Kb(o,t){const i=Fr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Qb(o,t){o.uniform1iv(this.addr,t)}function Jb(o,t){o.uniform2iv(this.addr,t)}function $b(o,t){o.uniform3iv(this.addr,t)}function tA(o,t){o.uniform4iv(this.addr,t)}function eA(o,t){o.uniform1uiv(this.addr,t)}function nA(o,t){o.uniform2uiv(this.addr,t)}function iA(o,t){o.uniform3uiv(this.addr,t)}function aA(o,t){o.uniform4uiv(this.addr,t)}function sA(o,t,i){const s=this.cache,l=t.length,u=Xc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Sv,u[h])}function rA(o,t,i){const s=this.cache,l=t.length,u=Xc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||xv,u[h])}function oA(o,t,i){const s=this.cache,l=t.length,u=Xc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Mv,u[h])}function lA(o,t,i){const s=this.cache,l=t.length,u=Xc(i,l);hn(s,u)||(o.uniform1iv(this.addr,u),dn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||yv,u[h])}function cA(o){switch(o){case 5126:return Xb;case 35664:return Wb;case 35665:return qb;case 35666:return Yb;case 35674:return jb;case 35675:return Zb;case 35676:return Kb;case 5124:case 35670:return Qb;case 35667:case 35671:return Jb;case 35668:case 35672:return $b;case 35669:case 35673:return tA;case 5125:return eA;case 36294:return nA;case 36295:return iA;case 36296:return aA;case 35678:case 36198:case 36298:case 36306:case 35682:return sA;case 35679:case 36299:case 36307:return rA;case 35680:case 36300:case 36308:case 36293:return oA;case 36289:case 36303:case 36311:case 36292:return lA}}class uA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=kb(i.type)}}class fA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=cA(i.type)}}class hA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Oh=/(\w+)(\])?(\[|\.)?/g;function R0(o,t){o.seq.push(t),o.map[t.id]=t}function dA(o,t,i){const s=o.name,l=s.length;for(Oh.lastIndex=0;;){const u=Oh.exec(s),h=Oh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){R0(i,p===void 0?new uA(d,o,t):new fA(d,o,t));break}else{let S=i.map[d];S===void 0&&(S=new hA(d),R0(i,S)),i=S}}}class Oc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);dA(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function C0(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const pA=37297;let mA=0;function _A(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const w0=new le;function gA(o){Ce._getMatrix(w0,Ce.workingColorSpace,o);const t=`mat3( ${w0.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(o)){case Pc:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function D0(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+_A(o.getShaderSource(t),h)}else return l}function vA(o,t){const i=gA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function SA(o,t){let i;switch(t){case ox:i="Linear";break;case lx:i="Reinhard";break;case cx:i="Cineon";break;case ux:i="ACESFilmic";break;case hx:i="AgX";break;case dx:i="Neutral";break;case fx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Rc=new Z;function yA(){Ce.getLuminanceCoefficients(Rc);const o=Rc.x.toFixed(4),t=Rc.y.toFixed(4),i=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function MA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function EA(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Go(o){return o!==""}function U0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function L0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const TA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(o){return o.replace(TA,AA)}const bA=new Map;function AA(o,t){let i=ce[t];if(i===void 0){const s=bA.get(t);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Td(i)}const RA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N0(o){return o.replace(RA,CA)}function CA(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function O0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wA(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===G0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===V0?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===oa&&(t="SHADOWMAP_TYPE_VSM"),t}function DA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ur:case Lr:t="ENVMAP_TYPE_CUBE";break;case Gc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function UA(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Lr:t="ENVMAP_MODE_REFRACTION";break}return t}function LA(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case k0:t="ENVMAP_BLENDING_MULTIPLY";break;case sx:t="ENVMAP_BLENDING_MIX";break;case rx:t="ENVMAP_BLENDING_ADD";break}return t}function NA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function OA(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=wA(i),p=DA(i),g=UA(i),S=LA(i),y=NA(i),M=xA(i),E=MA(u),R=l.createProgram();let x,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Go).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Go).join(`
`),_.length>0&&(_+=`
`)):(x=[O0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),_=[O0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+S:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wa?"#define TONE_MAPPING":"",i.toneMapping!==Wa?ce.tonemapping_pars_fragment:"",i.toneMapping!==Wa?SA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,vA("linearToOutputTexel",i.outputColorSpace),yA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Go).join(`
`)),h=Td(h),h=U0(h,i),h=L0(h,i),d=Td(d),d=U0(d,i),d=L0(d,i),h=N0(h),d=N0(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",i.glslVersion===Fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=B+x+h,D=B+_+d,q=C0(l,l.VERTEX_SHADER,L),I=C0(l,l.FRAGMENT_SHADER,D);l.attachShader(R,q),l.attachShader(R,I),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function P(F){if(o.debug.checkShaderErrors){const rt=l.getProgramInfoLog(R).trim(),at=l.getShaderInfoLog(q).trim(),ft=l.getShaderInfoLog(I).trim();let ht=!0,N=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,q,I);else{const K=D0(l,q,"vertex"),X=D0(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+rt+`
`+K+`
`+X)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(at===""||ft==="")&&(N=!1);N&&(F.diagnostics={runnable:ht,programLog:rt,vertexShader:{log:at,prefix:x},fragmentShader:{log:ft,prefix:_}})}l.deleteShader(q),l.deleteShader(I),k=new Oc(l,R),w=EA(l,R)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,pA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=mA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=q,this.fragmentShader=I,this}let PA=0;class zA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new BA(t),i.set(t,s)),s}}class BA{constructor(t){this.id=PA++,this.code=t,this.usedTimes=0}}function IA(o,t,i,s,l,u,h){const d=new rv,m=new zA,p=new Set,g=[],S=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function x(w,C,F,rt,at){const ft=rt.fog,ht=at.geometry,N=w.isMeshStandardMaterial?rt.environment:null,K=(w.isMeshStandardMaterial?i:t).get(w.envMap||N),X=K&&K.mapping===Gc?K.image.height:null,St=E[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const Et=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,O=Et!==void 0?Et.length:0;let J=0;ht.morphAttributes.position!==void 0&&(J=1),ht.morphAttributes.normal!==void 0&&(J=2),ht.morphAttributes.color!==void 0&&(J=3);let mt,W,lt,xt;if(St){const Te=Oi[St];mt=Te.vertexShader,W=Te.fragmentShader}else mt=w.vertexShader,W=w.fragmentShader,m.update(w),lt=m.getVertexShaderID(w),xt=m.getFragmentShaderID(w);const yt=o.getRenderTarget(),Bt=o.state.buffers.depth.getReversed(),Pt=at.isInstancedMesh===!0,ee=at.isBatchedMesh===!0,Ne=!!w.map,he=!!w.matcap,qe=!!K,H=!!w.aoMap,bn=!!w.lightMap,ue=!!w.bumpMap,me=!!w.normalMap,Wt=!!w.displacementMap,De=!!w.emissiveMap,Xt=!!w.metalnessMap,U=!!w.roughnessMap,b=w.anisotropy>0,nt=w.clearcoat>0,dt=w.dispersion>0,Mt=w.iridescence>0,_t=w.sheen>0,Vt=w.transmission>0,wt=b&&!!w.anisotropyMap,It=nt&&!!w.clearcoatMap,_e=nt&&!!w.clearcoatNormalMap,bt=nt&&!!w.clearcoatRoughnessMap,Ft=Mt&&!!w.iridescenceMap,qt=Mt&&!!w.iridescenceThicknessMap,kt=_t&&!!w.sheenColorMap,Ot=_t&&!!w.sheenRoughnessMap,Qt=!!w.specularMap,se=!!w.specularColorMap,Oe=!!w.specularIntensityMap,Y=Vt&&!!w.transmissionMap,Rt=Vt&&!!w.thicknessMap,ct=!!w.gradientMap,vt=!!w.alphaMap,Ct=w.alphaTest>0,Dt=!!w.alphaHash,Jt=!!w.extensions;let Ye=Wa;w.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Ye=o.toneMapping);const ln={shaderID:St,shaderType:w.type,shaderName:w.name,vertexShader:mt,fragmentShader:W,defines:w.defines,customVertexShaderID:lt,customFragmentShaderID:xt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:ee,batchingColor:ee&&at._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&at.instanceColor!==null,instancingMorph:Pt&&at.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:yt===null?o.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Pr,alphaToCoverage:!!w.alphaToCoverage,map:Ne,matcap:he,envMap:qe,envMapMode:qe&&K.mapping,envMapCubeUVHeight:X,aoMap:H,lightMap:bn,bumpMap:ue,normalMap:me,displacementMap:y&&Wt,emissiveMap:De,normalMapObjectSpace:me&&w.normalMapType===gx,normalMapTangentSpace:me&&w.normalMapType===ev,metalnessMap:Xt,roughnessMap:U,anisotropy:b,anisotropyMap:wt,clearcoat:nt,clearcoatMap:It,clearcoatNormalMap:_e,clearcoatRoughnessMap:bt,dispersion:dt,iridescence:Mt,iridescenceMap:Ft,iridescenceThicknessMap:qt,sheen:_t,sheenColorMap:kt,sheenRoughnessMap:Ot,specularMap:Qt,specularColorMap:se,specularIntensityMap:Oe,transmission:Vt,transmissionMap:Y,thicknessMap:Rt,gradientMap:ct,opaque:w.transparent===!1&&w.blending===Rr&&w.alphaToCoverage===!1,alphaMap:vt,alphaTest:Ct,alphaHash:Dt,combine:w.combine,mapUv:Ne&&R(w.map.channel),aoMapUv:H&&R(w.aoMap.channel),lightMapUv:bn&&R(w.lightMap.channel),bumpMapUv:ue&&R(w.bumpMap.channel),normalMapUv:me&&R(w.normalMap.channel),displacementMapUv:Wt&&R(w.displacementMap.channel),emissiveMapUv:De&&R(w.emissiveMap.channel),metalnessMapUv:Xt&&R(w.metalnessMap.channel),roughnessMapUv:U&&R(w.roughnessMap.channel),anisotropyMapUv:wt&&R(w.anisotropyMap.channel),clearcoatMapUv:It&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:_e&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&R(w.sheenRoughnessMap.channel),specularMapUv:Qt&&R(w.specularMap.channel),specularColorMapUv:se&&R(w.specularColorMap.channel),specularIntensityMapUv:Oe&&R(w.specularIntensityMap.channel),transmissionMapUv:Y&&R(w.transmissionMap.channel),thicknessMapUv:Rt&&R(w.thicknessMap.channel),alphaMapUv:vt&&R(w.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(me||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ht.attributes.uv&&(Ne||vt),fog:!!ft,useFog:w.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reverseDepthBuffer:Bt,skinning:at.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:J,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Ne&&w.map.isVideoTexture===!0&&Ce.getTransfer(w.map.colorSpace)===Fe,decodeVideoTextureEmissive:De&&w.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(w.emissiveMap.colorSpace)===Fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===la,flipSided:w.side===qn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Jt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&w.extensions.multiDraw===!0||ee)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ln.vertexUv1s=p.has(1),ln.vertexUv2s=p.has(2),ln.vertexUv3s=p.has(3),p.clear(),ln}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)C.push(F),C.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(B(C,w),L(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function B(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function L(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=E[w.type];let F;if(C){const rt=Oi[C];F=lM.clone(rt.uniforms)}else F=w.uniforms;return F}function q(w,C){let F;for(let rt=0,at=g.length;rt<at;rt++){const ft=g[rt];if(ft.cacheKey===C){F=ft,++F.usedTimes;break}}return F===void 0&&(F=new OA(o,C,w,u),g.push(F)),F}function I(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function P(w){m.remove(w)}function k(){m.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:D,acquireProgram:q,releaseProgram:I,releaseShaderCache:P,programs:g,dispose:k}}function FA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function HA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function P0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function z0(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(S,y,M,E,R,x){let _=o[t];return _===void 0?(_={id:S.id,object:S,geometry:y,material:M,groupOrder:E,renderOrder:S.renderOrder,z:R,group:x},o[t]=_):(_.id=S.id,_.object=S,_.geometry=y,_.material=M,_.groupOrder=E,_.renderOrder=S.renderOrder,_.z=R,_.group=x),t++,_}function d(S,y,M,E,R,x){const _=h(S,y,M,E,R,x);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(S,y,M,E,R,x){const _=h(S,y,M,E,R,x);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(S,y){i.length>1&&i.sort(S||HA),s.length>1&&s.sort(y||P0),l.length>1&&l.sort(y||P0)}function g(){for(let S=t,y=o.length;S<y;S++){const M=o[S];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function GA(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new z0,o.set(s,[h])):l>=u.length?(h=new z0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function VA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new Me};break;case"SpotLight":i={position:new Z,direction:new Z,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new Me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":i={color:new Me,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return o[t.id]=i,i}}}function kA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let XA=0;function WA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function qA(o){const t=new VA,i=kA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Z);const l=new Z,u=new Ze,h=new Ze;function d(p){let g=0,S=0,y=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,E=0,R=0,x=0,_=0,B=0,L=0,D=0,q=0,I=0,P=0;p.sort(WA);for(let w=0,C=p.length;w<C;w++){const F=p[w],rt=F.color,at=F.intensity,ft=F.distance,ht=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=rt.r*at,S+=rt.g*at,y+=rt.b*at;else if(F.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(F.sh.coefficients[N],at);P++}else if(F.isDirectionalLight){const N=t.get(F);if(N.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,X=i.get(F);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,s.directionalShadow[M]=X,s.directionalShadowMap[M]=ht,s.directionalShadowMatrix[M]=F.shadow.matrix,B++}s.directional[M]=N,M++}else if(F.isSpotLight){const N=t.get(F);N.position.setFromMatrixPosition(F.matrixWorld),N.color.copy(rt).multiplyScalar(at),N.distance=ft,N.coneCos=Math.cos(F.angle),N.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),N.decay=F.decay,s.spot[R]=N;const K=F.shadow;if(F.map&&(s.spotLightMap[q]=F.map,q++,K.updateMatrices(F),F.castShadow&&I++),s.spotLightMatrix[R]=K.matrix,F.castShadow){const X=i.get(F);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,s.spotShadow[R]=X,s.spotShadowMap[R]=ht,D++}R++}else if(F.isRectAreaLight){const N=t.get(F);N.color.copy(rt).multiplyScalar(at),N.halfWidth.set(F.width*.5,0,0),N.halfHeight.set(0,F.height*.5,0),s.rectArea[x]=N,x++}else if(F.isPointLight){const N=t.get(F);if(N.color.copy(F.color).multiplyScalar(F.intensity),N.distance=F.distance,N.decay=F.decay,F.castShadow){const K=F.shadow,X=i.get(F);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,s.pointShadow[E]=X,s.pointShadowMap[E]=ht,s.pointShadowMatrix[E]=F.shadow.matrix,L++}s.point[E]=N,E++}else if(F.isHemisphereLight){const N=t.get(F);N.skyColor.copy(F.color).multiplyScalar(at),N.groundColor.copy(F.groundColor).multiplyScalar(at),s.hemi[_]=N,_++}}x>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=S,s.ambient[2]=y;const k=s.hash;(k.directionalLength!==M||k.pointLength!==E||k.spotLength!==R||k.rectAreaLength!==x||k.hemiLength!==_||k.numDirectionalShadows!==B||k.numPointShadows!==L||k.numSpotShadows!==D||k.numSpotMaps!==q||k.numLightProbes!==P)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=x,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+q-I,s.spotLightMap.length=q,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=P,k.directionalLength=M,k.pointLength=E,k.spotLength=R,k.rectAreaLength=x,k.hemiLength=_,k.numDirectionalShadows=B,k.numPointShadows=L,k.numSpotShadows=D,k.numSpotMaps=q,k.numLightProbes=P,s.version=XA++)}function m(p,g){let S=0,y=0,M=0,E=0,R=0;const x=g.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const L=p[_];if(L.isDirectionalLight){const D=s.directional[S];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),S++}else if(L.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),M++}else if(L.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(x),h.identity(),u.copy(L.matrixWorld),u.premultiply(x),h.extractRotation(u),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const D=s.point[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(x),y++}else if(L.isHemisphereLight){const D=s.hemi[R];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(x),R++}}}return{setup:d,setupView:m,state:s}}function B0(o){const t=new qA(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function YA(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new B0(o),t.set(l,[d])):u>=h.length?(d=new B0(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const jA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KA(o,t,i){let s=new Bd;const l=new ae,u=new ae,h=new Ge,d=new vM({depthPacking:_x}),m=new SM,p={},g=i.maxTextureSize,S={[qa]:qn,[qn]:qa,[la]:la},y=new Ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:jA,fragmentShader:ZA}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const E=new Ci;E.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new pi(E,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=G0;let _=this.type;this.render=function(I,P,k){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),rt=o.state;rt.setBlending(Xa),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const at=_!==oa&&this.type===oa,ft=_===oa&&this.type!==oa;for(let ht=0,N=I.length;ht<N;ht++){const K=I[ht],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const St=X.getFrameExtents();if(l.multiply(St),u.copy(X.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/St.x),l.x=u.x*St.x,X.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/St.y),l.y=u.y*St.y,X.mapSize.y=u.y)),X.map===null||at===!0||ft===!0){const O=this.type!==oa?{minFilter:Ri,magFilter:Ri}:{};X.map!==null&&X.map.dispose(),X.map=new bs(l.x,l.y,O),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}o.setRenderTarget(X.map),o.clear();const Et=X.getViewportCount();for(let O=0;O<Et;O++){const J=X.getViewport(O);h.set(u.x*J.x,u.y*J.y,u.x*J.z,u.y*J.w),rt.viewport(h),X.updateMatrices(K,O),s=X.getFrustum(),D(P,k,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===oa&&B(X,k),X.needsUpdate=!1}_=this.type,x.needsUpdate=!1,o.setRenderTarget(w,C,F)};function B(I,P){const k=t.update(R);y.defines.VSM_SAMPLES!==I.blurSamples&&(y.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new bs(l.x,l.y)),y.uniforms.shadow_pass.value=I.map.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(P,null,k,y,R,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(P,null,k,M,R,null)}function L(I,P,k,w){let C=null;const F=k.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(F!==void 0)C=F;else if(C=k.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const rt=C.uuid,at=P.uuid;let ft=p[rt];ft===void 0&&(ft={},p[rt]=ft);let ht=ft[at];ht===void 0&&(ht=C.clone(),ft[at]=ht,P.addEventListener("dispose",q)),C=ht}if(C.visible=P.visible,C.wireframe=P.wireframe,w===oa?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:S[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const rt=o.properties.get(C);rt.light=k}return C}function D(I,P,k,w,C){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===oa)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,I.matrixWorld);const at=t.update(I),ft=I.material;if(Array.isArray(ft)){const ht=at.groups;for(let N=0,K=ht.length;N<K;N++){const X=ht[N],St=ft[X.materialIndex];if(St&&St.visible){const Et=L(I,St,w,C);I.onBeforeShadow(o,I,P,k,at,Et,X),o.renderBufferDirect(k,null,at,Et,I,X),I.onAfterShadow(o,I,P,k,at,Et,X)}}}else if(ft.visible){const ht=L(I,ft,w,C);I.onBeforeShadow(o,I,P,k,at,ht,null),o.renderBufferDirect(k,null,at,ht,I,null),I.onAfterShadow(o,I,P,k,at,ht,null)}}const rt=I.children;for(let at=0,ft=rt.length;at<ft;at++)D(rt[at],P,k,w,C)}function q(I){I.target.removeEventListener("dispose",q);for(const k in p){const w=p[k],C=I.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const QA={[Gh]:Vh,[kh]:qh,[Xh]:Yh,[Dr]:Wh,[Vh]:Gh,[qh]:kh,[Yh]:Xh,[Wh]:Dr};function JA(o,t){function i(){let Y=!1;const Rt=new Ge;let ct=null;const vt=new Ge(0,0,0,0);return{setMask:function(Ct){ct!==Ct&&!Y&&(o.colorMask(Ct,Ct,Ct,Ct),ct=Ct)},setLocked:function(Ct){Y=Ct},setClear:function(Ct,Dt,Jt,Ye,ln){ln===!0&&(Ct*=Ye,Dt*=Ye,Jt*=Ye),Rt.set(Ct,Dt,Jt,Ye),vt.equals(Rt)===!1&&(o.clearColor(Ct,Dt,Jt,Ye),vt.copy(Rt))},reset:function(){Y=!1,ct=null,vt.set(-1,0,0,0)}}}function s(){let Y=!1,Rt=!1,ct=null,vt=null,Ct=null;return{setReversed:function(Dt){if(Rt!==Dt){const Jt=t.get("EXT_clip_control");Rt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);const Ye=Ct;Ct=null,this.setClear(Ye)}Rt=Dt},getReversed:function(){return Rt},setTest:function(Dt){Dt?yt(o.DEPTH_TEST):Bt(o.DEPTH_TEST)},setMask:function(Dt){ct!==Dt&&!Y&&(o.depthMask(Dt),ct=Dt)},setFunc:function(Dt){if(Rt&&(Dt=QA[Dt]),vt!==Dt){switch(Dt){case Gh:o.depthFunc(o.NEVER);break;case Vh:o.depthFunc(o.ALWAYS);break;case kh:o.depthFunc(o.LESS);break;case Dr:o.depthFunc(o.LEQUAL);break;case Xh:o.depthFunc(o.EQUAL);break;case Wh:o.depthFunc(o.GEQUAL);break;case qh:o.depthFunc(o.GREATER);break;case Yh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}vt=Dt}},setLocked:function(Dt){Y=Dt},setClear:function(Dt){Ct!==Dt&&(Rt&&(Dt=1-Dt),o.clearDepth(Dt),Ct=Dt)},reset:function(){Y=!1,ct=null,vt=null,Ct=null,Rt=!1}}}function l(){let Y=!1,Rt=null,ct=null,vt=null,Ct=null,Dt=null,Jt=null,Ye=null,ln=null;return{setTest:function(Te){Y||(Te?yt(o.STENCIL_TEST):Bt(o.STENCIL_TEST))},setMask:function(Te){Rt!==Te&&!Y&&(o.stencilMask(Te),Rt=Te)},setFunc:function(Te,vn,mi){(ct!==Te||vt!==vn||Ct!==mi)&&(o.stencilFunc(Te,vn,mi),ct=Te,vt=vn,Ct=mi)},setOp:function(Te,vn,mi){(Dt!==Te||Jt!==vn||Ye!==mi)&&(o.stencilOp(Te,vn,mi),Dt=Te,Jt=vn,Ye=mi)},setLocked:function(Te){Y=Te},setClear:function(Te){ln!==Te&&(o.clearStencil(Te),ln=Te)},reset:function(){Y=!1,Rt=null,ct=null,vt=null,Ct=null,Dt=null,Jt=null,Ye=null,ln=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},S={},y=new WeakMap,M=[],E=null,R=!1,x=null,_=null,B=null,L=null,D=null,q=null,I=null,P=new Me(0,0,0),k=0,w=!1,C=null,F=null,rt=null,at=null,ft=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,K=0;const X=o.getParameter(o.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),N=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),N=K>=2);let St=null,Et={};const O=o.getParameter(o.SCISSOR_BOX),J=o.getParameter(o.VIEWPORT),mt=new Ge().fromArray(O),W=new Ge().fromArray(J);function lt(Y,Rt,ct,vt){const Ct=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(Y,Dt),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<ct;Jt++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,vt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Rt+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Dt}const xt={};xt[o.TEXTURE_2D]=lt(o.TEXTURE_2D,o.TEXTURE_2D,1),xt[o.TEXTURE_CUBE_MAP]=lt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[o.TEXTURE_2D_ARRAY]=lt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xt[o.TEXTURE_3D]=lt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),yt(o.DEPTH_TEST),h.setFunc(Dr),ue(!1),me(Ng),yt(o.CULL_FACE),H(Xa);function yt(Y){g[Y]!==!0&&(o.enable(Y),g[Y]=!0)}function Bt(Y){g[Y]!==!1&&(o.disable(Y),g[Y]=!1)}function Pt(Y,Rt){return S[Y]!==Rt?(o.bindFramebuffer(Y,Rt),S[Y]=Rt,Y===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Rt),Y===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function ee(Y,Rt){let ct=M,vt=!1;if(Y){ct=y.get(Rt),ct===void 0&&(ct=[],y.set(Rt,ct));const Ct=Y.textures;if(ct.length!==Ct.length||ct[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,Jt=Ct.length;Dt<Jt;Dt++)ct[Dt]=o.COLOR_ATTACHMENT0+Dt;ct.length=Ct.length,vt=!0}}else ct[0]!==o.BACK&&(ct[0]=o.BACK,vt=!0);vt&&o.drawBuffers(ct)}function Ne(Y){return E!==Y?(o.useProgram(Y),E=Y,!0):!1}const he={[ys]:o.FUNC_ADD,[Vy]:o.FUNC_SUBTRACT,[ky]:o.FUNC_REVERSE_SUBTRACT};he[Xy]=o.MIN,he[Wy]=o.MAX;const qe={[qy]:o.ZERO,[Yy]:o.ONE,[jy]:o.SRC_COLOR,[Fh]:o.SRC_ALPHA,[tx]:o.SRC_ALPHA_SATURATE,[Jy]:o.DST_COLOR,[Ky]:o.DST_ALPHA,[Zy]:o.ONE_MINUS_SRC_COLOR,[Hh]:o.ONE_MINUS_SRC_ALPHA,[$y]:o.ONE_MINUS_DST_COLOR,[Qy]:o.ONE_MINUS_DST_ALPHA,[ex]:o.CONSTANT_COLOR,[nx]:o.ONE_MINUS_CONSTANT_COLOR,[ix]:o.CONSTANT_ALPHA,[ax]:o.ONE_MINUS_CONSTANT_ALPHA};function H(Y,Rt,ct,vt,Ct,Dt,Jt,Ye,ln,Te){if(Y===Xa){R===!0&&(Bt(o.BLEND),R=!1);return}if(R===!1&&(yt(o.BLEND),R=!0),Y!==Gy){if(Y!==x||Te!==w){if((_!==ys||D!==ys)&&(o.blendEquation(o.FUNC_ADD),_=ys,D=ys),Te)switch(Y){case Rr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Og:o.blendFunc(o.ONE,o.ONE);break;case Pg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case zg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Rr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Og:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Pg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case zg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}B=null,L=null,q=null,I=null,P.set(0,0,0),k=0,x=Y,w=Te}return}Ct=Ct||Rt,Dt=Dt||ct,Jt=Jt||vt,(Rt!==_||Ct!==D)&&(o.blendEquationSeparate(he[Rt],he[Ct]),_=Rt,D=Ct),(ct!==B||vt!==L||Dt!==q||Jt!==I)&&(o.blendFuncSeparate(qe[ct],qe[vt],qe[Dt],qe[Jt]),B=ct,L=vt,q=Dt,I=Jt),(Ye.equals(P)===!1||ln!==k)&&(o.blendColor(Ye.r,Ye.g,Ye.b,ln),P.copy(Ye),k=ln),x=Y,w=!1}function bn(Y,Rt){Y.side===la?Bt(o.CULL_FACE):yt(o.CULL_FACE);let ct=Y.side===qn;Rt&&(ct=!ct),ue(ct),Y.blending===Rr&&Y.transparent===!1?H(Xa):H(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),h.setFunc(Y.depthFunc),h.setTest(Y.depthTest),h.setMask(Y.depthWrite),u.setMask(Y.colorWrite);const vt=Y.stencilWrite;d.setTest(vt),vt&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),De(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?yt(o.SAMPLE_ALPHA_TO_COVERAGE):Bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ue(Y){C!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),C=Y)}function me(Y){Y!==Fy?(yt(o.CULL_FACE),Y!==F&&(Y===Ng?o.cullFace(o.BACK):Y===Hy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Bt(o.CULL_FACE),F=Y}function Wt(Y){Y!==rt&&(N&&o.lineWidth(Y),rt=Y)}function De(Y,Rt,ct){Y?(yt(o.POLYGON_OFFSET_FILL),(at!==Rt||ft!==ct)&&(o.polygonOffset(Rt,ct),at=Rt,ft=ct)):Bt(o.POLYGON_OFFSET_FILL)}function Xt(Y){Y?yt(o.SCISSOR_TEST):Bt(o.SCISSOR_TEST)}function U(Y){Y===void 0&&(Y=o.TEXTURE0+ht-1),St!==Y&&(o.activeTexture(Y),St=Y)}function b(Y,Rt,ct){ct===void 0&&(St===null?ct=o.TEXTURE0+ht-1:ct=St);let vt=Et[ct];vt===void 0&&(vt={type:void 0,texture:void 0},Et[ct]=vt),(vt.type!==Y||vt.texture!==Rt)&&(St!==ct&&(o.activeTexture(ct),St=ct),o.bindTexture(Y,Rt||xt[Y]),vt.type=Y,vt.texture=Rt)}function nt(){const Y=Et[St];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function dt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Mt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _t(){try{o.texSubImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Vt(){try{o.texSubImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function wt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function It(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _e(){try{o.texStorage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function bt(){try{o.texStorage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ft(){try{o.texImage2D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function qt(){try{o.texImage3D.apply(o,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function kt(Y){mt.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),mt.copy(Y))}function Ot(Y){W.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),W.copy(Y))}function Qt(Y,Rt){let ct=p.get(Rt);ct===void 0&&(ct=new WeakMap,p.set(Rt,ct));let vt=ct.get(Y);vt===void 0&&(vt=o.getUniformBlockIndex(Rt,Y.name),ct.set(Y,vt))}function se(Y,Rt){const vt=p.get(Rt).get(Y);m.get(Rt)!==vt&&(o.uniformBlockBinding(Rt,vt,Y.__bindingPointIndex),m.set(Rt,vt))}function Oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},St=null,Et={},S={},y=new WeakMap,M=[],E=null,R=!1,x=null,_=null,B=null,L=null,D=null,q=null,I=null,P=new Me(0,0,0),k=0,w=!1,C=null,F=null,rt=null,at=null,ft=null,mt.set(0,0,o.canvas.width,o.canvas.height),W.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:yt,disable:Bt,bindFramebuffer:Pt,drawBuffers:ee,useProgram:Ne,setBlending:H,setMaterial:bn,setFlipSided:ue,setCullFace:me,setLineWidth:Wt,setPolygonOffset:De,setScissorTest:Xt,activeTexture:U,bindTexture:b,unbindTexture:nt,compressedTexImage2D:dt,compressedTexImage3D:Mt,texImage2D:Ft,texImage3D:qt,updateUBOMapping:Qt,uniformBlockBinding:se,texStorage2D:_e,texStorage3D:bt,texSubImage2D:_t,texSubImage3D:Vt,compressedTexSubImage2D:wt,compressedTexSubImage3D:It,scissor:kt,viewport:Ot,reset:Oe}}function $A(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ae,g=new WeakMap;let S;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,b){return M?new OffscreenCanvas(U,b):Bc("canvas")}function R(U,b,nt){let dt=1;const Mt=Xt(U);if((Mt.width>nt||Mt.height>nt)&&(dt=nt/Math.max(Mt.width,Mt.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const _t=Math.floor(dt*Mt.width),Vt=Math.floor(dt*Mt.height);S===void 0&&(S=E(_t,Vt));const wt=b?E(_t,Vt):S;return wt.width=_t,wt.height=Vt,wt.getContext("2d").drawImage(U,0,0,_t,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+_t+"x"+Vt+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),U;return U}function x(U){return U.generateMipmaps}function _(U){o.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(U,b,nt,dt,Mt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let _t=b;if(b===o.RED&&(nt===o.FLOAT&&(_t=o.R32F),nt===o.HALF_FLOAT&&(_t=o.R16F),nt===o.UNSIGNED_BYTE&&(_t=o.R8)),b===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(_t=o.R8UI),nt===o.UNSIGNED_SHORT&&(_t=o.R16UI),nt===o.UNSIGNED_INT&&(_t=o.R32UI),nt===o.BYTE&&(_t=o.R8I),nt===o.SHORT&&(_t=o.R16I),nt===o.INT&&(_t=o.R32I)),b===o.RG&&(nt===o.FLOAT&&(_t=o.RG32F),nt===o.HALF_FLOAT&&(_t=o.RG16F),nt===o.UNSIGNED_BYTE&&(_t=o.RG8)),b===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(_t=o.RG8UI),nt===o.UNSIGNED_SHORT&&(_t=o.RG16UI),nt===o.UNSIGNED_INT&&(_t=o.RG32UI),nt===o.BYTE&&(_t=o.RG8I),nt===o.SHORT&&(_t=o.RG16I),nt===o.INT&&(_t=o.RG32I)),b===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(_t=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(_t=o.RGB16UI),nt===o.UNSIGNED_INT&&(_t=o.RGB32UI),nt===o.BYTE&&(_t=o.RGB8I),nt===o.SHORT&&(_t=o.RGB16I),nt===o.INT&&(_t=o.RGB32I)),b===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(_t=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(_t=o.RGBA16UI),nt===o.UNSIGNED_INT&&(_t=o.RGBA32UI),nt===o.BYTE&&(_t=o.RGBA8I),nt===o.SHORT&&(_t=o.RGBA16I),nt===o.INT&&(_t=o.RGBA32I)),b===o.RGB&&nt===o.UNSIGNED_INT_5_9_9_9_REV&&(_t=o.RGB9_E5),b===o.RGBA){const Vt=Mt?Pc:Ce.getTransfer(dt);nt===o.FLOAT&&(_t=o.RGBA32F),nt===o.HALF_FLOAT&&(_t=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(_t=Vt===Fe?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function D(U,b){let nt;return U?b===null||b===Ts||b===Nr?nt=o.DEPTH24_STENCIL8:b===ca?nt=o.DEPTH32F_STENCIL8:b===Xo&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ts||b===Nr?nt=o.DEPTH_COMPONENT24:b===ca?nt=o.DEPTH_COMPONENT32F:b===Xo&&(nt=o.DEPTH_COMPONENT16),nt}function q(U,b){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ri&&U.minFilter!==Pi?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function I(U){const b=U.target;b.removeEventListener("dispose",I),k(b),b.isVideoTexture&&g.delete(b)}function P(U){const b=U.target;b.removeEventListener("dispose",P),C(b)}function k(U){const b=s.get(U);if(b.__webglInit===void 0)return;const nt=U.source,dt=y.get(nt);if(dt){const Mt=dt[b.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&w(U),Object.keys(dt).length===0&&y.delete(nt)}s.remove(U)}function w(U){const b=s.get(U);o.deleteTexture(b.__webglTexture);const nt=U.source,dt=y.get(nt);delete dt[b.__cacheKey],h.memory.textures--}function C(U){const b=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let Mt=0;Mt<b.__webglFramebuffer[dt].length;Mt++)o.deleteFramebuffer(b.__webglFramebuffer[dt][Mt]);else o.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)o.deleteFramebuffer(b.__webglFramebuffer[dt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const nt=U.textures;for(let dt=0,Mt=nt.length;dt<Mt;dt++){const _t=s.get(nt[dt]);_t.__webglTexture&&(o.deleteTexture(_t.__webglTexture),h.memory.textures--),s.remove(nt[dt])}s.remove(U)}let F=0;function rt(){F=0}function at(){const U=F;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),F+=1,U}function ft(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function ht(U,b){const nt=s.get(U);if(U.isVideoTexture&&Wt(U),U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){const dt=U.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(nt,U,b);return}}i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+b)}function N(U,b){const nt=s.get(U);if(U.version>0&&nt.__version!==U.version){W(nt,U,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+b)}function K(U,b){const nt=s.get(U);if(U.version>0&&nt.__version!==U.version){W(nt,U,b);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+b)}function X(U,b){const nt=s.get(U);if(U.version>0&&nt.__version!==U.version){lt(nt,U,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+b)}const St={[Kh]:o.REPEAT,[Ms]:o.CLAMP_TO_EDGE,[Qh]:o.MIRRORED_REPEAT},Et={[Ri]:o.NEAREST,[px]:o.NEAREST_MIPMAP_NEAREST,[sc]:o.NEAREST_MIPMAP_LINEAR,[Pi]:o.LINEAR,[ah]:o.LINEAR_MIPMAP_NEAREST,[Es]:o.LINEAR_MIPMAP_LINEAR},O={[vx]:o.NEVER,[Tx]:o.ALWAYS,[Sx]:o.LESS,[nv]:o.LEQUAL,[yx]:o.EQUAL,[Ex]:o.GEQUAL,[xx]:o.GREATER,[Mx]:o.NOTEQUAL};function J(U,b){if(b.type===ca&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Pi||b.magFilter===ah||b.magFilter===sc||b.magFilter===Es||b.minFilter===Pi||b.minFilter===ah||b.minFilter===sc||b.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,St[b.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,St[b.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,St[b.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Et[b.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Et[b.minFilter]),b.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ri||b.minFilter!==sc&&b.minFilter!==Es||b.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function mt(U,b){let nt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",I));const dt=b.source;let Mt=y.get(dt);Mt===void 0&&(Mt={},y.set(dt,Mt));const _t=ft(b);if(_t!==U.__cacheKey){Mt[_t]===void 0&&(Mt[_t]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),Mt[_t].usedTimes++;const Vt=Mt[U.__cacheKey];Vt!==void 0&&(Mt[U.__cacheKey].usedTimes--,Vt.usedTimes===0&&w(b)),U.__cacheKey=_t,U.__webglTexture=Mt[_t].texture}return nt}function W(U,b,nt){let dt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=o.TEXTURE_3D);const Mt=mt(U,b),_t=b.source;i.bindTexture(dt,U.__webglTexture,o.TEXTURE0+nt);const Vt=s.get(_t);if(_t.version!==Vt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+nt);const wt=Ce.getPrimaries(Ce.workingColorSpace),It=b.colorSpace===ka?null:Ce.getPrimaries(b.colorSpace),_e=b.colorSpace===ka||wt===It?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let bt=R(b.image,!1,l.maxTextureSize);bt=De(b,bt);const Ft=u.convert(b.format,b.colorSpace),qt=u.convert(b.type);let kt=L(b.internalFormat,Ft,qt,b.colorSpace,b.isVideoTexture);J(dt,b);let Ot;const Qt=b.mipmaps,se=b.isVideoTexture!==!0,Oe=Vt.__version===void 0||Mt===!0,Y=_t.dataReady,Rt=q(b,bt);if(b.isDepthTexture)kt=D(b.format===Or,b.type),Oe&&(se?i.texStorage2D(o.TEXTURE_2D,1,kt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,kt,bt.width,bt.height,0,Ft,qt,null));else if(b.isDataTexture)if(Qt.length>0){se&&Oe&&i.texStorage2D(o.TEXTURE_2D,Rt,kt,Qt[0].width,Qt[0].height);for(let ct=0,vt=Qt.length;ct<vt;ct++)Ot=Qt[ct],se?Y&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Ot.width,Ot.height,Ft,qt,Ot.data):i.texImage2D(o.TEXTURE_2D,ct,kt,Ot.width,Ot.height,0,Ft,qt,Ot.data);b.generateMipmaps=!1}else se?(Oe&&i.texStorage2D(o.TEXTURE_2D,Rt,kt,bt.width,bt.height),Y&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt.width,bt.height,Ft,qt,bt.data)):i.texImage2D(o.TEXTURE_2D,0,kt,bt.width,bt.height,0,Ft,qt,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){se&&Oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,kt,Qt[0].width,Qt[0].height,bt.depth);for(let ct=0,vt=Qt.length;ct<vt;ct++)if(Ot=Qt[ct],b.format!==Ai)if(Ft!==null)if(se){if(Y)if(b.layerUpdates.size>0){const Ct=d0(Ot.width,Ot.height,b.format,b.type);for(const Dt of b.layerUpdates){const Jt=Ot.data.subarray(Dt*Ct/Ot.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,Dt,Ot.width,Ot.height,1,Ft,Jt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Ot.width,Ot.height,bt.depth,Ft,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ct,kt,Ot.width,Ot.height,bt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Y&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Ot.width,Ot.height,bt.depth,Ft,qt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ct,kt,Ot.width,Ot.height,bt.depth,0,Ft,qt,Ot.data)}else{se&&Oe&&i.texStorage2D(o.TEXTURE_2D,Rt,kt,Qt[0].width,Qt[0].height);for(let ct=0,vt=Qt.length;ct<vt;ct++)Ot=Qt[ct],b.format!==Ai?Ft!==null?se?Y&&i.compressedTexSubImage2D(o.TEXTURE_2D,ct,0,0,Ot.width,Ot.height,Ft,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,ct,kt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Y&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Ot.width,Ot.height,Ft,qt,Ot.data):i.texImage2D(o.TEXTURE_2D,ct,kt,Ot.width,Ot.height,0,Ft,qt,Ot.data)}else if(b.isDataArrayTexture)if(se){if(Oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,kt,bt.width,bt.height,bt.depth),Y)if(b.layerUpdates.size>0){const ct=d0(bt.width,bt.height,b.format,b.type);for(const vt of b.layerUpdates){const Ct=bt.data.subarray(vt*ct/bt.data.BYTES_PER_ELEMENT,(vt+1)*ct/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,bt.width,bt.height,1,Ft,qt,Ct)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ft,qt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,kt,bt.width,bt.height,bt.depth,0,Ft,qt,bt.data);else if(b.isData3DTexture)se?(Oe&&i.texStorage3D(o.TEXTURE_3D,Rt,kt,bt.width,bt.height,bt.depth),Y&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ft,qt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,kt,bt.width,bt.height,bt.depth,0,Ft,qt,bt.data);else if(b.isFramebufferTexture){if(Oe)if(se)i.texStorage2D(o.TEXTURE_2D,Rt,kt,bt.width,bt.height);else{let ct=bt.width,vt=bt.height;for(let Ct=0;Ct<Rt;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,kt,ct,vt,0,Ft,qt,null),ct>>=1,vt>>=1}}else if(Qt.length>0){if(se&&Oe){const ct=Xt(Qt[0]);i.texStorage2D(o.TEXTURE_2D,Rt,kt,ct.width,ct.height)}for(let ct=0,vt=Qt.length;ct<vt;ct++)Ot=Qt[ct],se?Y&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Ft,qt,Ot):i.texImage2D(o.TEXTURE_2D,ct,kt,Ft,qt,Ot);b.generateMipmaps=!1}else if(se){if(Oe){const ct=Xt(bt);i.texStorage2D(o.TEXTURE_2D,Rt,kt,ct.width,ct.height)}Y&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ft,qt,bt)}else i.texImage2D(o.TEXTURE_2D,0,kt,Ft,qt,bt);x(b)&&_(dt),Vt.__version=_t.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function lt(U,b,nt){if(b.image.length!==6)return;const dt=mt(U,b),Mt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+nt);const _t=s.get(Mt);if(Mt.version!==_t.__version||dt===!0){i.activeTexture(o.TEXTURE0+nt);const Vt=Ce.getPrimaries(Ce.workingColorSpace),wt=b.colorSpace===ka?null:Ce.getPrimaries(b.colorSpace),It=b.colorSpace===ka||Vt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const _e=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,Ft=[];for(let vt=0;vt<6;vt++)!_e&&!bt?Ft[vt]=R(b.image[vt],!0,l.maxCubemapSize):Ft[vt]=bt?b.image[vt].image:b.image[vt],Ft[vt]=De(b,Ft[vt]);const qt=Ft[0],kt=u.convert(b.format,b.colorSpace),Ot=u.convert(b.type),Qt=L(b.internalFormat,kt,Ot,b.colorSpace),se=b.isVideoTexture!==!0,Oe=_t.__version===void 0||dt===!0,Y=Mt.dataReady;let Rt=q(b,qt);J(o.TEXTURE_CUBE_MAP,b);let ct;if(_e){se&&Oe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Qt,qt.width,qt.height);for(let vt=0;vt<6;vt++){ct=Ft[vt].mipmaps;for(let Ct=0;Ct<ct.length;Ct++){const Dt=ct[Ct];b.format!==Ai?kt!==null?se?Y&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,Dt.width,Dt.height,kt,Dt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,Qt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?Y&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,Dt.width,Dt.height,kt,Ot,Dt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,Qt,Dt.width,Dt.height,0,kt,Ot,Dt.data)}}}else{if(ct=b.mipmaps,se&&Oe){ct.length>0&&Rt++;const vt=Xt(Ft[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Qt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(bt){se?Y&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ft[vt].width,Ft[vt].height,kt,Ot,Ft[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Qt,Ft[vt].width,Ft[vt].height,0,kt,Ot,Ft[vt].data);for(let Ct=0;Ct<ct.length;Ct++){const Jt=ct[Ct].image[vt].image;se?Y&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,Jt.width,Jt.height,kt,Ot,Jt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,Qt,Jt.width,Jt.height,0,kt,Ot,Jt.data)}}else{se?Y&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,kt,Ot,Ft[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Qt,kt,Ot,Ft[vt]);for(let Ct=0;Ct<ct.length;Ct++){const Dt=ct[Ct];se?Y&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,kt,Ot,Dt.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,Qt,kt,Ot,Dt.image[vt])}}}x(b)&&_(o.TEXTURE_CUBE_MAP),_t.__version=Mt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function xt(U,b,nt,dt,Mt,_t){const Vt=u.convert(nt.format,nt.colorSpace),wt=u.convert(nt.type),It=L(nt.internalFormat,Vt,wt,nt.colorSpace),_e=s.get(b),bt=s.get(nt);if(bt.__renderTarget=b,!_e.__hasExternalTextures){const Ft=Math.max(1,b.width>>_t),qt=Math.max(1,b.height>>_t);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,_t,It,Ft,qt,b.depth,0,Vt,wt,null):i.texImage2D(Mt,_t,It,Ft,qt,0,Vt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),me(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,Mt,bt.__webglTexture,0,ue(b)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,Mt,bt.__webglTexture,_t),i.bindFramebuffer(o.FRAMEBUFFER,null)}function yt(U,b,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,U),b.depthBuffer){const dt=b.depthTexture,Mt=dt&&dt.isDepthTexture?dt.type:null,_t=D(b.stencilBuffer,Mt),Vt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=ue(b);me(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,_t,b.width,b.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,_t,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,_t,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Vt,o.RENDERBUFFER,U)}else{const dt=b.textures;for(let Mt=0;Mt<dt.length;Mt++){const _t=dt[Mt],Vt=u.convert(_t.format,_t.colorSpace),wt=u.convert(_t.type),It=L(_t.internalFormat,Vt,wt,_t.colorSpace),_e=ue(b);nt&&me(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,_e,It,b.width,b.height):me(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,_e,It,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,It,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Bt(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(b.depthTexture);dt.__renderTarget=b,(!dt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ht(b.depthTexture,0);const Mt=dt.__webglTexture,_t=ue(b);if(b.depthTexture.format===Cr)me(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(b.depthTexture.format===Or)me(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Pt(U){const b=s.get(U),nt=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const Mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",Mt)};dt.addEventListener("dispose",Mt),b.__depthDisposeCallback=Mt}b.__boundDepthTexture=dt}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");Bt(b.__webglFramebuffer,U)}else if(nt){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=o.createRenderbuffer(),yt(b.__webglDepthbuffer[dt],U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_t=b.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,_t),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,_t)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),yt(b.__webglDepthbuffer,U,!1);else{const dt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,Mt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ee(U,b,nt){const dt=s.get(U);b!==void 0&&xt(dt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&Pt(U)}function Ne(U){const b=U.texture,nt=s.get(U),dt=s.get(b);U.addEventListener("dispose",P);const Mt=U.textures,_t=U.isWebGLCubeRenderTarget===!0,Vt=Mt.length>1;if(Vt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=b.version,h.memory.textures++),_t){nt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer[wt]=[];for(let It=0;It<b.mipmaps.length;It++)nt.__webglFramebuffer[wt][It]=o.createFramebuffer()}else nt.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer=[];for(let wt=0;wt<b.mipmaps.length;wt++)nt.__webglFramebuffer[wt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Vt)for(let wt=0,It=Mt.length;wt<It;wt++){const _e=s.get(Mt[wt]);_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&me(U)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let wt=0;wt<Mt.length;wt++){const It=Mt[wt];nt.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[wt]);const _e=u.convert(It.format,It.colorSpace),bt=u.convert(It.type),Ft=L(It.internalFormat,_e,bt,It.colorSpace,U.isXRRenderTarget===!0),qt=ue(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Ft,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),yt(nt.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(_t){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),J(o.TEXTURE_CUBE_MAP,b);for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0)for(let It=0;It<b.mipmaps.length;It++)xt(nt.__webglFramebuffer[wt][It],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,It);else xt(nt.__webglFramebuffer[wt],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);x(b)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let wt=0,It=Mt.length;wt<It;wt++){const _e=Mt[wt],bt=s.get(_e);i.bindTexture(o.TEXTURE_2D,bt.__webglTexture),J(o.TEXTURE_2D,_e),xt(nt.__webglFramebuffer,U,_e,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),x(_e)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,dt.__webglTexture),J(wt,b),b.mipmaps&&b.mipmaps.length>0)for(let It=0;It<b.mipmaps.length;It++)xt(nt.__webglFramebuffer[It],U,b,o.COLOR_ATTACHMENT0,wt,It);else xt(nt.__webglFramebuffer,U,b,o.COLOR_ATTACHMENT0,wt,0);x(b)&&_(wt),i.unbindTexture()}U.depthBuffer&&Pt(U)}function he(U){const b=U.textures;for(let nt=0,dt=b.length;nt<dt;nt++){const Mt=b[nt];if(x(Mt)){const _t=B(U),Vt=s.get(Mt).__webglTexture;i.bindTexture(_t,Vt),_(_t),i.unbindTexture()}}}const qe=[],H=[];function bn(U){if(U.samples>0){if(me(U)===!1){const b=U.textures,nt=U.width,dt=U.height;let Mt=o.COLOR_BUFFER_BIT;const _t=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Vt=s.get(U),wt=b.length>1;if(wt)for(let It=0;It<b.length;It++)i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let It=0;It<b.length;It++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[It]);const _e=s.get(b[It]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,_e,0)}o.blitFramebuffer(0,0,nt,dt,0,0,nt,dt,Mt,o.NEAREST),m===!0&&(qe.length=0,H.length=0,qe.push(o.COLOR_ATTACHMENT0+It),U.depthBuffer&&U.resolveDepthBuffer===!1&&(qe.push(_t),H.push(_t),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,H)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,qe))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let It=0;It<b.length;It++){i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[It]);const _e=s.get(b[It]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.TEXTURE_2D,_e,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const b=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function ue(U){return Math.min(l.maxSamples,U.samples)}function me(U){const b=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Wt(U){const b=h.render.frame;g.get(U)!==b&&(g.set(U,b),U.update())}function De(U,b){const nt=U.colorSpace,dt=U.format,Mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||nt!==Pr&&nt!==ka&&(Ce.getTransfer(nt)===Fe?(dt!==Ai||Mt!==ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),b}function Xt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=rt,this.setTexture2D=ht,this.setTexture2DArray=N,this.setTexture3D=K,this.setTextureCube=X,this.rebindTextures=ee,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=bn,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=me}function t1(o,t){function i(s,l=ka){let u;const h=Ce.getTransfer(l);if(s===ha)return o.UNSIGNED_BYTE;if(s===Cd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===wd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Y0)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===W0)return o.BYTE;if(s===q0)return o.SHORT;if(s===Xo)return o.UNSIGNED_SHORT;if(s===Rd)return o.INT;if(s===Ts)return o.UNSIGNED_INT;if(s===ca)return o.FLOAT;if(s===qo)return o.HALF_FLOAT;if(s===j0)return o.ALPHA;if(s===Z0)return o.RGB;if(s===Ai)return o.RGBA;if(s===K0)return o.LUMINANCE;if(s===Q0)return o.LUMINANCE_ALPHA;if(s===Cr)return o.DEPTH_COMPONENT;if(s===Or)return o.DEPTH_STENCIL;if(s===J0)return o.RED;if(s===Dd)return o.RED_INTEGER;if(s===$0)return o.RG;if(s===Ud)return o.RG_INTEGER;if(s===Ld)return o.RGBA_INTEGER;if(s===wc||s===Dc||s===Uc||s===Lc)if(h===Fe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===wc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===wc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Uc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Lc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jh||s===$h||s===td||s===ed)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Jh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$h)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===td)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ed)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nd||s===id||s===ad)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===nd||s===id)return h===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===ad)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sd||s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===_d||s===gd||s===vd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===sd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===rd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===od)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ld)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ud)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===md)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_d)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vd)return h===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nc||s===Sd||s===yd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Nc)return h===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===tv||s===xd||s===Md||s===Ed)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Nc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===xd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Md)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ed)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Nr?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const e1={type:"move"};class Ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const x=i.getJointPose(R,s),_=this._getHandJoint(p,R);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],y=g.position.distanceTo(S.position),M=.02,E=.005;p.inputState.pinching&&y>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(e1)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Tr;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const n1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class a1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Yn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ya({vertexShader:n1,fragmentShader:i1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new pi(new kc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s1 extends Rs{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,S=null,y=null,M=null,E=null;const R=new a1,x=i.getContextAttributes();let _=null,B=null;const L=[],D=[],q=new ae;let I=null;const P=new ai;P.viewport=new Ge;const k=new ai;k.viewport=new Ge;const w=[P,k],C=new bM;let F=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let lt=L[W];return lt===void 0&&(lt=new Ph,L[W]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(W){let lt=L[W];return lt===void 0&&(lt=new Ph,L[W]=lt),lt.getGripSpace()},this.getHand=function(W){let lt=L[W];return lt===void 0&&(lt=new Ph,L[W]=lt),lt.getHandSpace()};function at(W){const lt=D.indexOf(W.inputSource);if(lt===-1)return;const xt=L[lt];xt!==void 0&&(xt.update(W.inputSource,W.frame,p||h),xt.dispatchEvent({type:W.type,data:W.inputSource}))}function ft(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",ht);for(let W=0;W<L.length;W++){const lt=D[W];lt!==null&&(D[W]=null,L[W].disconnect(lt))}F=null,rt=null,R.reset(),t.setRenderTarget(_),M=null,y=null,S=null,l=null,B=null,mt.stop(),s.isPresenting=!1,t.setPixelRatio(I),t.setSize(q.width,q.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){u=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){d=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(W){p=W},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return S},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",ht),x.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(q),l.enabledFeatures!==void 0&&l.enabledFeatures.includes("layers")){let xt=null,yt=null,Bt=null;x.depth&&(Bt=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=x.stencil?Or:Cr,yt=x.stencil?Nr:Ts);const Pt={colorFormat:i.RGBA8,depthFormat:Bt,scaleFactor:u};S=new XRWebGLBinding(l,i),y=S.createProjectionLayer(Pt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),B=new bs(y.textureWidth,y.textureHeight,{format:Ai,type:ha,depthTexture:new mv(y.textureWidth,y.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}else{const xt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new bs(M.framebufferWidth,M.framebufferHeight,{format:Ai,type:ha,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),mt.setContext(l),mt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ht(W){for(let lt=0;lt<W.removed.length;lt++){const xt=W.removed[lt],yt=D.indexOf(xt);yt>=0&&(D[yt]=null,L[yt].disconnect(xt))}for(let lt=0;lt<W.added.length;lt++){const xt=W.added[lt];let yt=D.indexOf(xt);if(yt===-1){for(let Pt=0;Pt<L.length;Pt++)if(Pt>=D.length){D.push(xt),yt=Pt;break}else if(D[Pt]===null){D[Pt]=xt,yt=Pt;break}if(yt===-1)break}const Bt=L[yt];Bt&&Bt.connect(xt)}}const N=new Z,K=new Z;function X(W,lt,xt){N.setFromMatrixPosition(lt.matrixWorld),K.setFromMatrixPosition(xt.matrixWorld);const yt=N.distanceTo(K),Bt=lt.projectionMatrix.elements,Pt=xt.projectionMatrix.elements,ee=Bt[14]/(Bt[10]-1),Ne=Bt[14]/(Bt[10]+1),he=(Bt[9]+1)/Bt[5],qe=(Bt[9]-1)/Bt[5],H=(Bt[8]-1)/Bt[0],bn=(Pt[8]+1)/Pt[0],ue=ee*H,me=ee*bn,Wt=yt/(-H+bn),De=Wt*-H;if(lt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(De),W.translateZ(Wt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Bt[10]===-1)W.projectionMatrix.copy(lt.projectionMatrix),W.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Xt=ee+Wt,U=Ne+Wt,b=ue-De,nt=me+(yt-De),dt=he*Ne/U*Xt,Mt=qe*Ne/U*Xt;W.projectionMatrix.makePerspective(b,nt,dt,Mt,Xt,U),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function St(W,lt){lt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(lt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let lt=W.near,xt=W.far;R.texture!==null&&(R.depthNear>0&&(lt=R.depthNear),R.depthFar>0&&(xt=R.depthFar)),C.near=k.near=P.near=lt,C.far=k.far=P.far=xt,(F!==C.near||rt!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,rt=C.far),P.layers.mask=W.layers.mask|2,k.layers.mask=W.layers.mask|4,C.layers.mask=P.layers.mask|k.layers.mask;const yt=W.parent,Bt=C.cameras;St(C,yt);for(let Pt=0;Pt<Bt.length;Pt++)St(Bt[Pt],yt);Bt.length===2?X(C,P,k):C.projectionMatrix.copy(P.projectionMatrix),Et(W,C,yt)};function Et(W,lt,xt){xt===null?W.matrix.copy(lt.matrixWorld):(W.matrix.copy(xt.matrixWorld),W.matrix.invert(),W.matrix.multiply(lt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(lt.projectionMatrix),W.projectionMatrixInverse.copy(lt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Wo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(W){m=W,y!==null&&(y.fixedFoveation=W),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=W)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let O=null;function J(W,lt){if(g=lt.getViewerPose(p||h),E=lt,g!==null){const xt=g.views;M!==null&&(t.setRenderTargetFramebuffer(B,M.framebuffer),t.setRenderTarget(B));let yt=!1;xt.length!==C.cameras.length&&(C.cameras.length=0,yt=!0);for(let Pt=0;Pt<xt.length;Pt++){const ee=xt[Pt];let Ne=null;if(M!==null)Ne=M.getViewport(ee);else{const qe=S.getViewSubImage(y,ee);Ne=qe.viewport,Pt===0&&(t.setRenderTargetTextures(B,qe.colorTexture,y.ignoreDepthValues?void 0:qe.depthStencilTexture),t.setRenderTarget(B))}let he=w[Pt];he===void 0&&(he=new ai,he.layers.enable(Pt),he.viewport=new Ge,w[Pt]=he),he.matrix.fromArray(ee.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ee.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Pt===0&&(C.matrix.copy(he.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),yt===!0&&C.cameras.push(he)}const Bt=l.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")){const Pt=S.getDepthInformation(xt[0]);Pt&&Pt.isValid&&Pt.texture&&R.init(t,Pt,l.renderState)}}for(let xt=0;xt<L.length;xt++){const yt=D[xt],Bt=L[xt];yt!==null&&Bt!==void 0&&Bt.update(yt,lt,p||h)}O&&O(W,lt),lt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:lt}),E=null}const mt=new vv;mt.setAnimationLoop(J),this.setAnimationLoop=function(W){O=W},this.dispose=function(){}}}const vs=new Bi,r1=new Ze;function o1(o,t){function i(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function s(x,_){_.color.getRGB(x.fogColor.value,fv(o)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function l(x,_,B,L,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(x,_):_.isMeshToonMaterial?(u(x,_),S(x,_)):_.isMeshPhongMaterial?(u(x,_),g(x,_)):_.isMeshStandardMaterial?(u(x,_),y(x,_),_.isMeshPhysicalMaterial&&M(x,_,D)):_.isMeshMatcapMaterial?(u(x,_),E(x,_)):_.isMeshDepthMaterial?u(x,_):_.isMeshDistanceMaterial?(u(x,_),R(x,_)):_.isMeshNormalMaterial?u(x,_):_.isLineBasicMaterial?(h(x,_),_.isLineDashedMaterial&&d(x,_)):_.isPointsMaterial?m(x,_,B,L):_.isSpriteMaterial?p(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,i(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===qn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,i(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===qn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,i(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,i(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const B=t.get(_),L=B.envMap,D=B.envMapRotation;L&&(x.envMap.value=L,vs.copy(D),vs.x*=-1,vs.y*=-1,vs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),x.envMapRotation.value.setFromMatrix4(r1.makeRotationFromEuler(vs)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,x.aoMapTransform))}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform))}function d(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function m(x,_,B,L){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*B,x.scale.value=L*.5,_.map&&(x.map.value=_.map,i(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function S(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function y(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function M(x,_,B){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===qn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=B.texture,x.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,_){_.matcap&&(x.matcap.value=_.matcap)}function R(x,_){const B=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(B.matrixWorld),x.nearDistance.value=B.shadow.camera.near,x.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function l1(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,L){const D=L.program;s.uniformBlockBinding(B,D)}function p(B,L){let D=l[B.id];D===void 0&&(E(B),D=g(B),l[B.id]=D,B.addEventListener("dispose",x));const q=L.program;s.updateUBOMapping(B,q);const I=t.render.frame;u[B.id]!==I&&(y(B),u[B.id]=I)}function g(B){const L=S();B.__bindingPointIndex=L;const D=o.createBuffer(),q=B.__size,I=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,q,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,D),D}function S(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(B){const L=l[B.id],D=B.uniforms,q=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let I=0,P=D.length;I<P;I++){const k=Array.isArray(D[I])?D[I]:[D[I]];for(let w=0,C=k.length;w<C;w++){const F=k[w];if(M(F,I,w,q)===!0){const rt=F.__offset,at=Array.isArray(F.value)?F.value:[F.value];let ft=0;for(let ht=0;ht<at.length;ht++){const N=at[ht],K=R(N);typeof N=="number"||typeof N=="boolean"?(F.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,rt+ft,F.__data)):N.isMatrix3?(F.__data[0]=N.elements[0],F.__data[1]=N.elements[1],F.__data[2]=N.elements[2],F.__data[3]=0,F.__data[4]=N.elements[3],F.__data[5]=N.elements[4],F.__data[6]=N.elements[5],F.__data[7]=0,F.__data[8]=N.elements[6],F.__data[9]=N.elements[7],F.__data[10]=N.elements[8],F.__data[11]=0):(N.toArray(F.__data,ft),ft+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,rt,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(B,L,D,q){const I=B.value,P=L+"_"+D;if(q[P]===void 0)return typeof I=="number"||typeof I=="boolean"?q[P]=I:q[P]=I.clone(),!0;{const k=q[P];if(typeof I=="number"||typeof I=="boolean"){if(k!==I)return q[P]=I,!0}else if(k.equals(I)===!1)return k.copy(I),!0}return!1}function E(B){const L=B.uniforms;let D=0;const q=16;for(let P=0,k=L.length;P<k;P++){const w=Array.isArray(L[P])?L[P]:[L[P]];for(let C=0,F=w.length;C<F;C++){const rt=w[C],at=Array.isArray(rt.value)?rt.value:[rt.value];for(let ft=0,ht=at.length;ft<ht;ft++){const N=at[ft],K=R(N),X=D%q,St=X%K.boundary,Et=X+St;D+=St,Et!==0&&q-Et<K.storage&&(D+=q-Et),rt.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=D,D+=K.storage}}}const I=D%q;return I>0&&(D+=q-I),B.__size=D,B.__cache={},this}function R(B){const L={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(L.boundary=4,L.storage=4):B.isVector2?(L.boundary=8,L.storage=8):B.isVector3||B.isColor?(L.boundary=16,L.storage=12):B.isVector4?(L.boundary=16,L.storage=16):B.isMatrix3?(L.boundary=48,L.storage=48):B.isMatrix4?(L.boundary=64,L.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),L}function x(B){const L=B.target;L.removeEventListener("dispose",x);const D=h.indexOf(L.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function _(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class c1{constructor(t={}){const{canvas:i=Gx(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:S=!1,reverseDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),R=new Int32Array(4);let x=null,_=null;const B=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=Wa,this.toneMappingExposure=1;const D=this;let q=!1,I=0,P=0,k=null,w=-1,C=null;const F=new Ge,rt=new Ge;let at=null;const ft=new Me(0);let ht=0,N=i.width,K=i.height,X=1,St=null,Et=null;const O=new Ge(0,0,N,K),J=new Ge(0,0,N,K);let mt=!1;const W=new Bd;let lt=!1,xt=!1;this.transmissionResolutionScale=1;const yt=new Ze,Bt=new Ze,Pt=new Z,ee=new Ge,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function qe(){return k===null?X:1}let H=s;function bn(A,j){return i.getContext(A,j)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ad}`),i.addEventListener("webglcontextlost",vt,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),H===null){const j="webgl2";if(H=bn(j,A),H===null)throw bn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ue,me,Wt,De,Xt,U,b,nt,dt,Mt,_t,Vt,wt,It,_e,bt,Ft,qt,kt,Ot,Qt,se,Oe,Y;function Rt(){ue=new vb(H),ue.init(),se=new t1(H,ue),me=new hb(H,ue,t,se),Wt=new JA(H,ue),me.reverseDepthBuffer&&y&&Wt.buffers.depth.setReversed(!0),De=new xb(H),Xt=new FA,U=new $A(H,ue,Wt,Xt,me,se,De),b=new pb(D),nt=new gb(D),dt=new CM(H),Oe=new ub(H,dt),Mt=new Sb(H,dt,De,Oe),_t=new Eb(H,Mt,dt,De),kt=new Mb(H,me,U),bt=new db(Xt),Vt=new IA(D,b,nt,ue,me,Oe,bt),wt=new o1(D,Xt),It=new GA,_e=new YA(ue),qt=new cb(D,b,nt,Wt,_t,M,m),Ft=new KA(D,_t,me),Y=new l1(H,De,me,Wt),Ot=new fb(H,ue,De),Qt=new yb(H,ue,De),De.programs=Vt.programs,D.capabilities=me,D.extensions=ue,D.properties=Xt,D.renderLists=It,D.shadowMap=Ft,D.state=Wt,D.info=De}Rt();const ct=new s1(D,H);this.xr=ct,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(N,K,!1))},this.getSize=function(A){return A.set(N,K)},this.setSize=function(A,j,it=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,K=j,i.width=Math.floor(A*X),i.height=Math.floor(j*X),it===!0&&(i.style.width=A+"px",i.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(N*X,K*X).floor()},this.setDrawingBufferSize=function(A,j,it){N=A,K=j,X=it,i.width=Math.floor(A*it),i.height=Math.floor(j*it),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,j,it,st){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,j,it,st),Wt.viewport(F.copy(O).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,j,it,st){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,j,it,st),Wt.scissor(rt.copy(J).multiplyScalar(X).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(A){Wt.setScissorTest(mt=A)},this.setOpaqueSort=function(A){St=A},this.setTransparentSort=function(A){Et=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(A=!0,j=!0,it=!0){let st=0;if(A){let V=!1;if(k!==null){const Tt=k.texture.format;V=Tt===Ld||Tt===Ud||Tt===Dd}if(V){const Tt=k.texture.type,Ut=Tt===ha||Tt===Ts||Tt===Xo||Tt===Nr||Tt===Cd||Tt===wd,Nt=qt.getClearColor(),zt=qt.getClearAlpha(),$t=Nt.r,te=Nt.g,Yt=Nt.b;Ut?(E[0]=$t,E[1]=te,E[2]=Yt,E[3]=zt,H.clearBufferuiv(H.COLOR,0,E)):(R[0]=$t,R[1]=te,R[2]=Yt,R[3]=zt,H.clearBufferiv(H.COLOR,0,R))}else st|=H.COLOR_BUFFER_BIT}j&&(st|=H.DEPTH_BUFFER_BIT),it&&(st|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",vt,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),qt.dispose(),It.dispose(),_e.dispose(),Xt.dispose(),b.dispose(),nt.dispose(),_t.dispose(),Oe.dispose(),Y.dispose(),Vt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Hr),ct.removeEventListener("sessionend",Gr),wi.stop()};function vt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const A=De.autoReset,j=Ft.enabled,it=Ft.autoUpdate,st=Ft.needsUpdate,V=Ft.type;Rt(),De.autoReset=A,Ft.enabled=j,Ft.autoUpdate=it,Ft.needsUpdate=st,Ft.type=V}function Dt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Jt(A){const j=A.target;j.removeEventListener("dispose",Jt),Ye(j)}function Ye(A){ln(A),Xt.remove(A)}function ln(A){const j=Xt.get(A).programs;j!==void 0&&(j.forEach(function(it){Vt.releaseProgram(it)}),A.isShaderMaterial&&Vt.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,it,st,V,Tt){j===null&&(j=Ne);const Ut=V.isMesh&&V.matrixWorld.determinant()<0,Nt=kr(A,j,it,st,V);Wt.setMaterial(st,Ut);let zt=it.index,$t=1;if(st.wireframe===!0){if(zt=Mt.getWireframeAttribute(it),zt===void 0)return;$t=2}const te=it.drawRange,Yt=it.attributes.position;let Se=te.start*$t,ye=(te.start+te.count)*$t;Tt!==null&&(Se=Math.max(Se,Tt.start*$t),ye=Math.min(ye,(Tt.start+Tt.count)*$t)),zt!==null?(Se=Math.max(Se,0),ye=Math.min(ye,zt.count)):Yt!=null&&(Se=Math.max(Se,0),ye=Math.min(ye,Yt.count));const ke=ye-Se;if(ke<0||ke===1/0)return;Oe.setup(V,st,Nt,it,zt);let be,ne=Ot;if(zt!==null&&(be=dt.get(zt),ne=Qt,ne.setIndex(be)),V.isMesh)st.wireframe===!0?(Wt.setLineWidth(st.wireframeLinewidth*qe()),ne.setMode(H.LINES)):ne.setMode(H.TRIANGLES);else if(V.isLine){let Zt=st.linewidth;Zt===void 0&&(Zt=1),Wt.setLineWidth(Zt*qe()),V.isLineSegments?ne.setMode(H.LINES):V.isLineLoop?ne.setMode(H.LINE_LOOP):ne.setMode(H.LINE_STRIP)}else V.isPoints?ne.setMode(H.POINTS):V.isSprite&&ne.setMode(H.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ne.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))ne.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Zt=V._multiDrawStarts,cn=V._multiDrawCounts,Ee=V._multiDrawCount,Bn=zt?dt.get(zt).bytesPerElement:1,gi=Xt.get(st).currentProgram.getUniforms();for(let Dn=0;Dn<Ee;Dn++)gi.setValue(H,"_gl_DrawID",Dn),ne.render(Zt[Dn]/Bn,cn[Dn])}else if(V.isInstancedMesh)ne.renderInstances(Se,ke,V.count);else if(it.isInstancedBufferGeometry){const Zt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,cn=Math.min(it.instanceCount,Zt);ne.renderInstances(Se,ke,cn)}else ne.render(Se,ke)};function Te(A,j,it){A.transparent===!0&&A.side===la&&A.forceSinglePass===!1?(A.side=qn,A.needsUpdate=!0,Ke(A,j,it),A.side=qa,A.needsUpdate=!0,Ke(A,j,it),A.side=la):Ke(A,j,it)}this.compile=function(A,j,it=null){it===null&&(it=A),_=_e.get(it),_.init(j),L.push(_),it.traverseVisible(function(V){V.isLight&&V.layers.test(j.layers)&&(_.pushLight(V),V.castShadow&&_.pushShadow(V))}),A!==it&&A.traverseVisible(function(V){V.isLight&&V.layers.test(j.layers)&&(_.pushLight(V),V.castShadow&&_.pushShadow(V))}),_.setupLights();const st=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Tt=V.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Nt=Tt[Ut];Te(Nt,it,V),st.add(Nt)}else Te(Tt,it,V),st.add(Tt)}),L.pop(),_=null,st},this.compileAsync=function(A,j,it=null){const st=this.compile(A,j,it);return new Promise(V=>{function Tt(){if(st.forEach(function(Ut){Xt.get(Ut).currentProgram.isReady()&&st.delete(Ut)}),st.size===0){V(A);return}setTimeout(Tt,10)}ue.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let vn=null;function mi(A){vn&&vn(A)}function Hr(){wi.stop()}function Gr(){wi.start()}const wi=new vv;wi.setAnimationLoop(mi),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(A){vn=A,ct.setAnimationLoop(A),A===null?wi.stop():wi.start()},ct.addEventListener("sessionstart",Hr),ct.addEventListener("sessionend",Gr),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(j),j=ct.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,j,k),_=_e.get(A,L.length),_.init(j),L.push(_),Bt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),W.setFromProjectionMatrix(Bt),xt=this.localClippingEnabled,lt=bt.init(this.clippingPlanes,xt),x=It.get(A,B.length),x.init(),B.push(x),ct.enabled===!0&&ct.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&ja(Tt,j,-1/0,D.sortObjects)}ja(A,j,0,D.sortObjects),x.finish(),D.sortObjects===!0&&x.sort(St,Et),he=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,he&&qt.addToRenderList(x,A),this.info.render.frame++,lt===!0&&bt.beginShadows();const it=_.state.shadowsArray;Ft.render(it,A,j),lt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=x.opaque,V=x.transmissive;if(_.setupLights(),j.isArrayCamera){const Tt=j.cameras;if(V.length>0)for(let Ut=0,Nt=Tt.length;Ut<Nt;Ut++){const zt=Tt[Ut];Vr(st,V,A,zt)}he&&qt.render(A);for(let Ut=0,Nt=Tt.length;Ut<Nt;Ut++){const zt=Tt[Ut];Cs(x,A,zt,zt.viewport)}}else V.length>0&&Vr(st,V,A,j),he&&qt.render(A),Cs(x,A,j);k!==null&&P===0&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(D,A,j),Oe.resetDefaultState(),w=-1,C=null,L.pop(),L.length>0?(_=L[L.length-1],lt===!0&&bt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?x=B[B.length-1]:x=null};function ja(A,j,it,st){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)it=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||W.intersectsSprite(A)){st&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Bt);const Ut=_t.update(A),Nt=A.material;Nt.visible&&x.push(A,Ut,Nt,it,ee.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||W.intersectsObject(A))){const Ut=_t.update(A),Nt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ee.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),ee.copy(Ut.boundingSphere.center)),ee.applyMatrix4(A.matrixWorld).applyMatrix4(Bt)),Array.isArray(Nt)){const zt=Ut.groups;for(let $t=0,te=zt.length;$t<te;$t++){const Yt=zt[$t],Se=Nt[Yt.materialIndex];Se&&Se.visible&&x.push(A,Ut,Se,it,ee.z,Yt)}}else Nt.visible&&x.push(A,Ut,Nt,it,ee.z,null)}}const Tt=A.children;for(let Ut=0,Nt=Tt.length;Ut<Nt;Ut++)ja(Tt[Ut],j,it,st)}function Cs(A,j,it,st){const V=A.opaque,Tt=A.transmissive,Ut=A.transparent;_.setupLightsView(it),lt===!0&&bt.setGlobalState(D.clippingPlanes,it),st&&Wt.viewport(F.copy(st)),V.length>0&&Za(V,j,it),Tt.length>0&&Za(Tt,j,it),Ut.length>0&&Za(Ut,j,it),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function Vr(A,j,it,st){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[st.id]===void 0&&(_.state.transmissionRenderTarget[st.id]=new bs(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?qo:ha,minFilter:Es,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[st.id],Ut=st.viewport||F;Tt.setSize(Ut.z*D.transmissionResolutionScale,Ut.w*D.transmissionResolutionScale);const Nt=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(ft),ht=D.getClearAlpha(),ht<1&&D.setClearColor(16777215,.5),D.clear(),he&&qt.render(it);const zt=D.toneMapping;D.toneMapping=Wa;const $t=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),_.setupLightsView(st),lt===!0&&bt.setGlobalState(D.clippingPlanes,st),Za(A,it,st),U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Yt=0,Se=j.length;Yt<Se;Yt++){const ye=j[Yt],ke=ye.object,be=ye.geometry,ne=ye.material,Zt=ye.group;if(ne.side===la&&ke.layers.test(st.layers)){const cn=ne.side;ne.side=qn,ne.needsUpdate=!0,_i(ke,it,st,be,ne,Zt),ne.side=cn,ne.needsUpdate=!0,te=!0}}te===!0&&(U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Nt),D.setClearColor(ft,ht),$t!==void 0&&(st.viewport=$t),D.toneMapping=zt}function Za(A,j,it){const st=j.isScene===!0?j.overrideMaterial:null;for(let V=0,Tt=A.length;V<Tt;V++){const Ut=A[V],Nt=Ut.object,zt=Ut.geometry,$t=st===null?Ut.material:st,te=Ut.group;Nt.layers.test(it.layers)&&_i(Nt,j,it,zt,$t,te)}}function _i(A,j,it,st,V,Tt){A.onBeforeRender(D,j,it,st,V,Tt),A.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(D,j,it,st,A,Tt),V.transparent===!0&&V.side===la&&V.forceSinglePass===!1?(V.side=qn,V.needsUpdate=!0,D.renderBufferDirect(it,j,st,V,A,Tt),V.side=qa,V.needsUpdate=!0,D.renderBufferDirect(it,j,st,V,A,Tt),V.side=la):D.renderBufferDirect(it,j,st,V,A,Tt),A.onAfterRender(D,j,it,st,V,Tt)}function Ke(A,j,it){j.isScene!==!0&&(j=Ne);const st=Xt.get(A),V=_.state.lights,Tt=_.state.shadowsArray,Ut=V.state.version,Nt=Vt.getParameters(A,V.state,Tt,j,it),zt=Vt.getProgramCacheKey(Nt);let $t=st.programs;st.environment=A.isMeshStandardMaterial?j.environment:null,st.fog=j.fog,st.envMap=(A.isMeshStandardMaterial?nt:b).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",Jt),$t=new Map,st.programs=$t);let te=$t.get(zt);if(te!==void 0){if(st.currentProgram===te&&st.lightsStateVersion===Ut)return Ii(A,Nt),te}else Nt.uniforms=Vt.getUniforms(A),A.onBeforeCompile(Nt,D),te=Vt.acquireProgram(Nt,zt),$t.set(zt,te),st.uniforms=Nt.uniforms;const Yt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Yt.clippingPlanes=bt.uniform),Ii(A,Nt),st.needsLights=qc(A),st.lightsStateVersion=Ut,st.needsLights&&(Yt.ambientLightColor.value=V.state.ambient,Yt.lightProbe.value=V.state.probe,Yt.directionalLights.value=V.state.directional,Yt.directionalLightShadows.value=V.state.directionalShadow,Yt.spotLights.value=V.state.spot,Yt.spotLightShadows.value=V.state.spotShadow,Yt.rectAreaLights.value=V.state.rectArea,Yt.ltc_1.value=V.state.rectAreaLTC1,Yt.ltc_2.value=V.state.rectAreaLTC2,Yt.pointLights.value=V.state.point,Yt.pointLightShadows.value=V.state.pointShadow,Yt.hemisphereLights.value=V.state.hemi,Yt.directionalShadowMap.value=V.state.directionalShadowMap,Yt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Yt.spotShadowMap.value=V.state.spotShadowMap,Yt.spotLightMatrix.value=V.state.spotLightMatrix,Yt.spotLightMap.value=V.state.spotLightMap,Yt.pointShadowMap.value=V.state.pointShadowMap,Yt.pointShadowMatrix.value=V.state.pointShadowMatrix),st.currentProgram=te,st.uniformsList=null,te}function Sn(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Oc.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Ii(A,j){const it=Xt.get(A);it.outputColorSpace=j.outputColorSpace,it.batching=j.batching,it.batchingColor=j.batchingColor,it.instancing=j.instancing,it.instancingColor=j.instancingColor,it.instancingMorph=j.instancingMorph,it.skinning=j.skinning,it.morphTargets=j.morphTargets,it.morphNormals=j.morphNormals,it.morphColors=j.morphColors,it.morphTargetsCount=j.morphTargetsCount,it.numClippingPlanes=j.numClippingPlanes,it.numIntersection=j.numClipIntersection,it.vertexAlphas=j.vertexAlphas,it.vertexTangents=j.vertexTangents,it.toneMapping=j.toneMapping}function kr(A,j,it,st,V){j.isScene!==!0&&(j=Ne),U.resetTextureUnits();const Tt=j.fog,Ut=st.isMeshStandardMaterial?j.environment:null,Nt=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Pr,zt=(st.isMeshStandardMaterial?nt:b).get(st.envMap||Ut),$t=st.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,te=!!it.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Yt=!!it.morphAttributes.position,Se=!!it.morphAttributes.normal,ye=!!it.morphAttributes.color;let ke=Wa;st.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ke=D.toneMapping);const be=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ne=be!==void 0?be.length:0,Zt=Xt.get(st),cn=_.state.lights;if(lt===!0&&(xt===!0||A!==C)){const Qe=A===C&&st.id===w;bt.setState(st,A,Qe)}let Ee=!1;st.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==cn.state.version||Zt.outputColorSpace!==Nt||V.isBatchedMesh&&Zt.batching===!1||!V.isBatchedMesh&&Zt.batching===!0||V.isBatchedMesh&&Zt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Zt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Zt.instancing===!1||!V.isInstancedMesh&&Zt.instancing===!0||V.isSkinnedMesh&&Zt.skinning===!1||!V.isSkinnedMesh&&Zt.skinning===!0||V.isInstancedMesh&&Zt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Zt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Zt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Zt.instancingMorph===!1&&V.morphTexture!==null||Zt.envMap!==zt||st.fog===!0&&Zt.fog!==Tt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==bt.numPlanes||Zt.numIntersection!==bt.numIntersection)||Zt.vertexAlphas!==$t||Zt.vertexTangents!==te||Zt.morphTargets!==Yt||Zt.morphNormals!==Se||Zt.morphColors!==ye||Zt.toneMapping!==ke||Zt.morphTargetsCount!==ne)&&(Ee=!0):(Ee=!0,Zt.__version=st.version);let Bn=Zt.currentProgram;Ee===!0&&(Bn=Ke(st,j,V));let gi=!1,Dn=!1,pn=!1;const Pe=Bn.getUniforms(),Un=Zt.uniforms;if(Wt.useProgram(Bn.program)&&(gi=!0,Dn=!0,pn=!0),st.id!==w&&(w=st.id,Dn=!0),gi||C!==A){Wt.buffers.depth.getReversed()?(yt.copy(A.projectionMatrix),kx(yt),Xx(yt),Pe.setValue(H,"projectionMatrix",yt)):Pe.setValue(H,"projectionMatrix",A.projectionMatrix),Pe.setValue(H,"viewMatrix",A.matrixWorldInverse);const yn=Pe.map.cameraPosition;yn!==void 0&&yn.setValue(H,Pt.setFromMatrixPosition(A.matrixWorld)),me.logarithmicDepthBuffer&&Pe.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Pe.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Dn=!0,pn=!0)}if(V.isSkinnedMesh){Pe.setOptional(H,V,"bindMatrix"),Pe.setOptional(H,V,"bindMatrixInverse");const Qe=V.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Pe.setValue(H,"boneTexture",Qe.boneTexture,U))}V.isBatchedMesh&&(Pe.setOptional(H,V,"batchingTexture"),Pe.setValue(H,"batchingTexture",V._matricesTexture,U),Pe.setOptional(H,V,"batchingIdTexture"),Pe.setValue(H,"batchingIdTexture",V._indirectTexture,U),Pe.setOptional(H,V,"batchingColorTexture"),V._colorsTexture!==null&&Pe.setValue(H,"batchingColorTexture",V._colorsTexture,U));const An=it.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&kt.update(V,it,Bn),(Dn||Zt.receiveShadow!==V.receiveShadow)&&(Zt.receiveShadow=V.receiveShadow,Pe.setValue(H,"receiveShadow",V.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Un.envMap.value=zt,Un.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&j.environment!==null&&(Un.envMapIntensity.value=j.environmentIntensity),Dn&&(Pe.setValue(H,"toneMappingExposure",D.toneMappingExposure),Zt.needsLights&&Wc(Un,pn),Tt&&st.fog===!0&&wt.refreshFogUniforms(Un,Tt),wt.refreshMaterialUniforms(Un,st,X,K,_.state.transmissionRenderTarget[A.id]),Oc.upload(H,Sn(Zt),Un,U)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Oc.upload(H,Sn(Zt),Un,U),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Pe.setValue(H,"center",V.center),Pe.setValue(H,"modelViewMatrix",V.modelViewMatrix),Pe.setValue(H,"normalMatrix",V.normalMatrix),Pe.setValue(H,"modelMatrix",V.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Qe=st.uniformsGroups;for(let yn=0,ws=Qe.length;yn<ws;yn++){const In=Qe[yn];Y.update(In,Bn),Y.bind(In,Bn)}}return Bn}function Wc(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function qc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,j,it){Xt.get(A.texture).__webglTexture=j,Xt.get(A.depthTexture).__webglTexture=it;const st=Xt.get(A);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=it===void 0,st.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const it=Xt.get(A);it.__webglFramebuffer=j,it.__useDefaultFramebuffer=j===void 0};const Zo=H.createFramebuffer();this.setRenderTarget=function(A,j=0,it=0){k=A,I=j,P=it;let st=!0,V=null,Tt=!1,Ut=!1;if(A){const zt=Xt.get(A);if(zt.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(H.FRAMEBUFFER,null),st=!1;else if(zt.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(zt.__hasExternalTextures)U.rebindTextures(A,Xt.get(A.texture).__webglTexture,Xt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Yt=A.depthTexture;if(zt.__boundDepthTexture!==Yt){if(Yt!==null&&Xt.has(Yt)&&(A.width!==Yt.image.width||A.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ut=!0);const te=Xt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(te[j])?V=te[j][it]:V=te[j],Tt=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?V=Xt.get(A).__webglMultisampledFramebuffer:Array.isArray(te)?V=te[it]:V=te,F.copy(A.viewport),rt.copy(A.scissor),at=A.scissorTest}else F.copy(O).multiplyScalar(X).floor(),rt.copy(J).multiplyScalar(X).floor(),at=mt;if(it!==0&&(V=Zo),Wt.bindFramebuffer(H.FRAMEBUFFER,V)&&st&&Wt.drawBuffers(A,V),Wt.viewport(F),Wt.scissor(rt),Wt.setScissorTest(at),Tt){const zt=Xt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,zt.__webglTexture,it)}else if(Ut){const zt=Xt.get(A.texture),$t=j;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,zt.__webglTexture,it,$t)}else if(A!==null&&it!==0){const zt=Xt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,zt.__webglTexture,it)}w=-1},this.readRenderTargetPixels=function(A,j,it,st,V,Tt,Ut){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){Wt.bindFramebuffer(H.FRAMEBUFFER,Nt);try{const zt=A.texture,$t=zt.format,te=zt.type;if(!me.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-st&&it>=0&&it<=A.height-V&&H.readPixels(j,it,st,V,se.convert($t),se.convert(te),Tt)}finally{const zt=k!==null?Xt.get(k).__webglFramebuffer:null;Wt.bindFramebuffer(H.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(A,j,it,st,V,Tt,Ut){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){const zt=A.texture,$t=zt.format,te=zt.type;if(!me.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-st&&it>=0&&it<=A.height-V){Wt.bindFramebuffer(H.FRAMEBUFFER,Nt);const Yt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Yt),H.bufferData(H.PIXEL_PACK_BUFFER,Tt.byteLength,H.STREAM_READ),H.readPixels(j,it,st,V,se.convert($t),se.convert(te),0);const Se=k!==null?Xt.get(k).__webglFramebuffer:null;Wt.bindFramebuffer(H.FRAMEBUFFER,Se);const ye=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Vx(H,ye,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Yt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Tt),H.deleteBuffer(Yt),H.deleteSync(ye),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,j=null,it=0){A.isTexture!==!0&&(Mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const st=Math.pow(2,-it),V=Math.floor(A.image.width*st),Tt=Math.floor(A.image.height*st),Ut=j!==null?j.x:0,Nt=j!==null?j.y:0;U.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,it,0,0,Ut,Nt,V,Tt),Wt.unbindTexture()};const Ka=H.createFramebuffer(),Xr=H.createFramebuffer();this.copyTextureToTexture=function(A,j,it=null,st=null,V=0,Tt=null){A.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,A=arguments[1],j=arguments[2],Tt=arguments[3]||0,it=null),Tt===null&&(V!==0?(Mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=V,V=0):Tt=0);let Ut,Nt,zt,$t,te,Yt,Se,ye,ke;const be=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(it!==null)Ut=it.max.x-it.min.x,Nt=it.max.y-it.min.y,zt=it.isBox3?it.max.z-it.min.z:1,$t=it.min.x,te=it.min.y,Yt=it.isBox3?it.min.z:0;else{const An=Math.pow(2,-V);Ut=Math.floor(be.width*An),Nt=Math.floor(be.height*An),A.isDataArrayTexture?zt=be.depth:A.isData3DTexture?zt=Math.floor(be.depth*An):zt=1,$t=0,te=0,Yt=0}st!==null?(Se=st.x,ye=st.y,ke=st.z):(Se=0,ye=0,ke=0);const ne=se.convert(j.format),Zt=se.convert(j.type);let cn;j.isData3DTexture?(U.setTexture3D(j,0),cn=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(U.setTexture2DArray(j,0),cn=H.TEXTURE_2D_ARRAY):(U.setTexture2D(j,0),cn=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const Ee=H.getParameter(H.UNPACK_ROW_LENGTH),Bn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),gi=H.getParameter(H.UNPACK_SKIP_PIXELS),Dn=H.getParameter(H.UNPACK_SKIP_ROWS),pn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,be.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,be.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$t),H.pixelStorei(H.UNPACK_SKIP_ROWS,te),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Yt);const Pe=A.isDataArrayTexture||A.isData3DTexture,Un=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const An=Xt.get(A),Qe=Xt.get(j),yn=Xt.get(An.__renderTarget),ws=Xt.get(Qe.__renderTarget);Wt.bindFramebuffer(H.READ_FRAMEBUFFER,yn.__webglFramebuffer),Wt.bindFramebuffer(H.DRAW_FRAMEBUFFER,ws.__webglFramebuffer);for(let In=0;In<zt;In++)Pe&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xt.get(A).__webglTexture,V,Yt+In),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xt.get(j).__webglTexture,Tt,ke+In)),H.blitFramebuffer($t,te,Ut,Nt,Se,ye,Ut,Nt,H.DEPTH_BUFFER_BIT,H.NEAREST);Wt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||Xt.has(A)){const An=Xt.get(A),Qe=Xt.get(j);Wt.bindFramebuffer(H.READ_FRAMEBUFFER,Ka),Wt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Xr);for(let yn=0;yn<zt;yn++)Pe?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,An.__webglTexture,V,Yt+yn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,An.__webglTexture,V),Un?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Qe.__webglTexture,Tt,ke+yn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Qe.__webglTexture,Tt),V!==0?H.blitFramebuffer($t,te,Ut,Nt,Se,ye,Ut,Nt,H.COLOR_BUFFER_BIT,H.NEAREST):Un?H.copyTexSubImage3D(cn,Tt,Se,ye,ke+yn,$t,te,Ut,Nt):H.copyTexSubImage2D(cn,Tt,Se,ye,$t,te,Ut,Nt);Wt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Un?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(cn,Tt,Se,ye,ke,Ut,Nt,zt,ne,Zt,be.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(cn,Tt,Se,ye,ke,Ut,Nt,zt,ne,be.data):H.texSubImage3D(cn,Tt,Se,ye,ke,Ut,Nt,zt,ne,Zt,be):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Tt,Se,ye,Ut,Nt,ne,Zt,be.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Tt,Se,ye,be.width,be.height,ne,be.data):H.texSubImage2D(H.TEXTURE_2D,Tt,Se,ye,Ut,Nt,ne,Zt,be);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ee),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Bn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,gi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Dn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,pn),Tt===0&&j.generateMipmaps&&H.generateMipmap(cn),Wt.unbindTexture()},this.copyTextureToTexture3D=function(A,j,it=null,st=null,V=0){return A.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,st=arguments[1]||null,A=arguments[2],j=arguments[3],V=arguments[4]||0),Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,it,st,V)},this.initRenderTarget=function(A){Xt.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),Wt.unbindTexture()},this.resetState=function(){I=0,P=0,k=null,Wt.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const I0={type:"change"},Gd={type:"start"},Ev={type:"end"},Cc=new Pd,F0=new Va,u1=Math.cos(70*Od.DEG2RAD),fn=new Z,Wn=2*Math.PI,He={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zh=1e-6;class f1 extends AM{constructor(t,i=null){super(t,i),this.state=He.NONE,this.enabled=!0,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ar.ROTATE,MIDDLE:Ar.DOLLY,RIGHT:Ar.PAN},this.touches={ONE:Er.ROTATE,TWO:Er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new As,this._lastTargetPosition=new Z,this._quat=new As().setFromUnitVectors(t.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new h0,this._sphericalDelta=new h0,this._scale=1,this._panOffset=new Z,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new Z,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=d1.bind(this),this._onPointerDown=h1.bind(this),this._onPointerUp=p1.bind(this),this._onContextMenu=x1.bind(this),this._onMouseWheel=g1.bind(this),this._onKeyDown=v1.bind(this),this._onTouchStart=S1.bind(this),this._onTouchMove=y1.bind(this),this._onMouseDown=m1.bind(this),this._onMouseMove=_1.bind(this),this._interceptControlDown=M1.bind(this),this._interceptControlUp=E1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(I0),this.update(),this.state=He.NONE}update(t=null){const i=this.object.position;fn.copy(i).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===He.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Wn:s>Math.PI&&(s-=Wn),l<-Math.PI?l+=Wn:l>Math.PI&&(l-=Wn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),i.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=fn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new Z(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new Z(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Cc.origin.copy(this.object.position),Cc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cc.direction))<u1?this.object.lookAt(this.target):(F0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cc.intersectPlane(F0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>zh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zh||this._lastTargetPosition.distanceToSquared(this.target)>zh?(this.dispatchEvent(I0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Wn/60*this.autoRotateSpeed*t:Wn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){fn.setFromMatrixColumn(i,0),fn.multiplyScalar(-t),this._panOffset.add(fn)}_panUp(t,i){this.screenSpacePanning===!0?fn.setFromMatrixColumn(i,1):(fn.setFromMatrixColumn(i,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(t),this._panOffset.add(fn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;fn.copy(l).sub(this.target);let u=fn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ae,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function h1(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function d1(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function p1(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ev),this.state=He.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function m1(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ar.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=He.DOLLY;break;case Ar.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=He.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=He.ROTATE}break;case Ar.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=He.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=He.PAN}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Gd)}function _1(o){switch(this.state){case He.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case He.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case He.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function g1(o){this.enabled===!1||this.enableZoom===!1||this.state!==He.NONE||(o.preventDefault(),this.dispatchEvent(Gd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Ev))}function v1(o){this.enabled!==!1&&this._handleKeyDown(o)}function S1(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Er.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=He.TOUCH_ROTATE;break;case Er.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=He.TOUCH_PAN;break;default:this.state=He.NONE}break;case 2:switch(this.touches.TWO){case Er.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=He.TOUCH_DOLLY_PAN;break;case Er.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=He.TOUCH_DOLLY_ROTATE;break;default:this.state=He.NONE}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Gd)}function y1(o){switch(this._trackPointer(o),this.state){case He.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case He.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case He.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case He.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=He.NONE}}function x1(o){this.enabled!==!1&&o.preventDefault()}function M1(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function E1(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Bh=56,T1=1.52;function Vd(o){let t=o%2147483647;return t<=0&&(t+=2147483646),()=>(t=t*16807%2147483647,(t-1)/2147483646)}function b1(o,t){return`${o.toFixed(3)}:${t.toFixed(3)}`}function A1(o){const t=new Map,i=T1;for(let s=-2;s<=2;s+=1)for(let l=-2;l<=2;l+=1){if(Math.max(Math.abs(s),Math.abs(l),Math.abs(-s-l))>2)continue;const u=i*1.5*s,h=i*Math.sqrt(3)*(l+s/2);for(let d=0;d<6;d+=1){const m=Math.PI/3*d,p=u+i*Math.cos(m),g=h+i*Math.sin(m),y=Math.abs(Math.round(p/i*2)+Math.round(g/i*2))%2===0?-.22:.22;t.set(b1(p,g),new Z(p,y,g))}}return[...t.values()].sort((s,l)=>s.lengthSq()-l.lengthSq()).slice(0,o)}function R1(o){const t=Vd(3847),i=[];let s=0;for(;i.length<o&&s<3e4;){s+=1;const l=new Z((t()-.5)*8.4,(t()-.5)*5.2,(t()-.5)*6.2);l.x*l.x/18+l.y*l.y/7+l.z*l.z/10>1||i.every(h=>h.distanceTo(l)>1.22)&&i.push(l)}return i}function C1(o,t,i,s){const l=new Z().subVectors(t,o),u=l.length(),h=new Id(i,i,u,8),d=new pi(h,s);return d.position.copy(o).add(t).multiplyScalar(.5),d.quaternion.setFromUnitVectors(new Z(0,1,0),l.normalize()),d}function w1(o){const t=new Tr,i=new Ah({color:15096659,roughness:.26,metalness:.05}),s=new Ah({color:16251903,roughness:.2,metalness:.02}),l=new Ah({color:12175576,roughness:.4}),u=new pi(new Hc(.23,20,16),i);u.castShadow=!0,t.add(u);const h=Od.degToRad(52.25),d=.5;[new Z(Math.sin(h)*d,Math.cos(h)*d,0),new Z(-Math.sin(h)*d,Math.cos(h)*d,0)].forEach(g=>{const S=C1(new Z,g,.046,l);t.add(S);const y=new pi(new Hc(.115,16,12),s);y.position.copy(g),y.castShadow=!0,t.add(y)});const p=Vd(90+o*31);return t.rotation.set(p()*Math.PI,p()*Math.PI,p()*Math.PI),t.userData.phase=p()*Math.PI*2,t.userData.spin=new Z(p()-.5,p()-.5,p()-.5).normalize(),t}function D1(o){const t=[];for(let i=0;i<o.length;i+=1)for(let s=i+1;s<o.length;s+=1){const l=o[i].distanceTo(o[s]);l>1.25&&l<1.95&&t.push([i,s])}return t}function U1(o){const t=Od.clamp(o,0,1);return t*t*(3-2*t)}function L1({simulation:o,showHydrogenBonds:t,cameraResetSignal:i}){const s=Pn.useRef(null),l=Pn.useRef(o),u=Pn.useRef(t),h=Pn.useRef(i);return Pn.useEffect(()=>{l.current=o},[o]),Pn.useEffect(()=>{u.current=t},[t]),Pn.useEffect(()=>{h.current=i},[i]),Pn.useEffect(()=>{const d=s.current;if(!d)return;const m=new dM;m.background=new Me(397599),m.fog=new zd(397599,.035);const p=new ai(44,1,.1,100),g=new Z(0,9.6,13.5);p.position.copy(g);const S=new c1({antialias:!0,alpha:!1,powerPreference:"high-performance"});S.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),S.setSize(d.clientWidth,d.clientHeight),S.outputColorSpace=ii,S.shadowMap.enabled=!0,S.shadowMap.type=V0,S.domElement.setAttribute("aria-label","可旋轉及縮放的三維水分子模型。冰的開放六角晶格在融化時瓦解，水分子隨後排列得更緊密。"),S.domElement.setAttribute("role","img"),d.appendChild(S.domElement);const y=new f1(p,S.domElement);y.enableDamping=!0,y.dampingFactor=.055,y.minDistance=8,y.maxDistance=24,y.target.set(0,0,0),y.autoRotate=!0,y.autoRotateSpeed=.24,y.enablePan=!1,m.add(new xM(12577535,661552,1.35));const M=new TM(16777215,2.1);M.position.set(5,8,7),M.castShadow=!0,m.add(M);const E=new f0(5822463,14,26);E.position.set(-6,2,-2),m.add(E);const R=new f0(16752451,7,20);R.position.set(5,-1,5),m.add(R);const x=new Tr;m.add(x);const _=A1(Bh),B=R1(Bh),L=[],D=_.map(N=>N.clone());_.forEach((N,K)=>{const X=w1(K);X.position.copy(N),x.add(X),L.push(X)});const q=D1(_),I=new Ci,P=new yM({color:5822463,transparent:!0,opacity:.76,dashSize:.16,gapSize:.11}),k=new gM(I,P);m.add(k);const w=Vd(7127),C=Array.from({length:Bh},()=>new Z(w()*2-1,w()*2-1,w()*2-1).normalize());let F,rt=performance.now(),at=h.current;const ft=new ResizeObserver(()=>{const N=d.clientWidth,K=d.clientHeight;S.setSize(N,K),p.aspect=N/K,p.updateProjectionMatrix()});ft.observe(d);const ht=N=>{const K=Math.min((N-rt)/1e3,.05);rt=N;const X=l.current,St=U1(X.meltProgress),Et=.035+X.kineticEnergy*.13;at!==h.current&&(at=h.current,p.position.copy(g),y.target.set(0,0,0),y.update()),L.forEach((J,mt)=>{const W=D[mt].copy(_[mt]).lerp(B[mt],St),lt=J.userData.phase,xt=C[mt],yt=.0012+X.kineticEnergy*.0015,Bt=Math.sin(N*yt+lt),Pt=St*(.06+X.kineticEnergy*.11)*Math.sin(N*75e-5+lt*1.7);J.position.set(W.x+xt.x*Et*Bt+Pt,W.y+xt.y*Et*Math.cos(N*yt*1.16+lt)+Pt*.45,W.z+xt.z*Et*Math.sin(N*yt*.83+lt)-Pt*.38);const ee=(.03+X.kineticEnergy*.42)*St+.008;J.rotateOnAxis(J.userData.spin,ee*K)});const O=[];if(u.current&&(St<.82&&q.forEach(([J,mt],W)=>{(W*47+13)%101/100>St*.88&&O.push(L[J].position,L[mt].position)}),St>.35)){let J=0;for(let mt=0;mt<L.length&&J<42;mt+=1)for(let W=mt+1;W<L.length&&J<42;W+=1){const lt=L[mt].position.distanceTo(L[W].position),xt=(mt*31+W*17)%97/97;lt>1.2&&lt<2.05&&xt<X.bondIntegrity*St*.58&&(O.push(L[mt].position,L[W].position),J+=1)}}I.setFromPoints(O),k.computeLineDistances(),P.opacity=.72-St*.24,k.visible=u.current&&O.length>0,x.rotation.y+=K*.025,y.update(),S.render(m,p),F=requestAnimationFrame(ht)};return F=requestAnimationFrame(ht),()=>{cancelAnimationFrame(F),ft.disconnect(),y.dispose(),S.dispose(),I.dispose(),P.dispose(),m.traverse(N=>{N.geometry&&N.geometry.dispose(),N.material&&(Array.isArray(N.material)?N.material:[N.material]).forEach(X=>X.dispose())}),d.removeChild(S.domElement)}},[]),At.jsx("div",{className:"water-scene",ref:s})}function Ih({icon:o,label:t,value:i,min:s,max:l,tone:u="cyan"}){const h=Math.min(100,Math.max(0,(Number(i)-s)/(l-s)*100));return At.jsxs("div",{className:"metric",children:[At.jsxs("div",{className:"metric__header",children:[At.jsxs("span",{className:"metric__label",children:[At.jsx("span",{"aria-hidden":"true",children:o}),t]}),At.jsx("strong",{children:i})]}),At.jsx("div",{className:"metric__track",role:"meter","aria-label":`${t}：${i}`,"aria-valuemin":s,"aria-valuemax":l,"aria-valuenow":Number(i),children:At.jsx("span",{className:`metric__fill metric__fill--${u}`,style:{width:`${h}%`}})})]})}const Ti={iceEnd:35,meltEnd:70};function N1(o){const t=Math.min(100,Math.max(0,o));let i,s,l;t<=Ti.iceEnd?(i=-20+t/Ti.iceEnd*20,s=0,l="ice"):t<Ti.meltEnd?(i=0,s=(t-Ti.iceEnd)/(Ti.meltEnd-Ti.iceEnd),l="melting"):(i=(t-Ti.meltEnd)/(100-Ti.meltEnd)*40,s=1,l="water");const u=Math.max(0,(t-Ti.meltEnd)/(100-Ti.meltEnd)),h=1.09-s*.09+u*.006,d=.917+s*.082-u*.007,m=s<1?1-s*.45:.55-u*.08,p=l==="ice"?.12+t/Ti.iceEnd*.24:l==="melting"?.4+s*.2:.64+u*.36;return{energy:t,temperature:i,meltProgress:s,stage:l,relativeVolume:h,relativeDensity:d,bondIntegrity:m,kineticEnergy:p}}function O1(o){const t=Math.round(o);return`${t<0?"−":""}${Math.abs(t)} °C`}function P1({simulation:o,energy:t,onEnergyChange:i,isPlaying:s,onPlayPause:l,onReset:u,showHydrogenBonds:h,onToggleHydrogenBonds:d,onResetCamera:m}){return At.jsxs("aside",{className:"control-panel","aria-label":"模擬控制及即時數據",children:[At.jsxs("section",{className:"temperature-block","aria-live":"polite",children:[At.jsx("div",{className:"eyeline",children:"溫度"}),At.jsx("div",{className:"temperature-value",children:O1(o.temperature)}),At.jsxs("div",{className:"heat-scale","aria-hidden":"true",children:[At.jsx("span",{children:"❄"}),At.jsx("div",{className:"heat-scale__line",children:At.jsx("span",{style:{left:`${t}%`}})}),At.jsx("span",{children:"♨"})]}),At.jsxs("div",{className:"heat-scale__labels",children:[At.jsx("span",{children:"−20 °C"}),At.jsx("span",{children:"熔化時維持 0 °C"}),At.jsx("span",{children:"40 °C"})]})]}),At.jsxs("label",{className:"energy-control",htmlFor:"energy",children:[At.jsxs("span",{children:[At.jsx("strong",{children:"加入的熱能"}),At.jsxs("output",{htmlFor:"energy",children:[Math.round(t),"%"]})]}),At.jsx("input",{id:"energy",type:"range",min:"0",max:"100",step:"0.2",value:t,onChange:p=>i(Number(p.target.value))})]}),At.jsxs("div",{className:"button-stack",children:[At.jsxs("button",{className:"button button--primary",type:"button",onClick:l,children:[At.jsx("span",{"aria-hidden":"true",children:s?"Ⅱ":"▶"}),s?"暫停":t>=100?"重新加熱":"開始加熱"]}),At.jsxs("div",{className:"secondary-actions",children:[At.jsxs("button",{className:"button",type:"button",onClick:u,children:[At.jsx("span",{"aria-hidden":"true",children:"↻"}),"重設"]}),At.jsxs("button",{className:"button",type:"button",onClick:m,children:[At.jsx("span",{"aria-hidden":"true",children:"⌖"}),"重置視角"]})]})]}),At.jsxs("label",{className:"toggle-row",htmlFor:"show-bonds",children:[At.jsxs("span",{children:[At.jsx("span",{"aria-hidden":"true",children:"┄"}),"顯示氫鍵"]}),At.jsx("input",{id:"show-bonds",type:"checkbox",checked:h,onChange:p=>d(p.target.checked)})]}),At.jsxs("section",{className:"metrics","aria-label":"即時結構數據",children:[At.jsx(Ih,{icon:"⬡",label:"相對體積",value:o.relativeVolume.toFixed(3),min:.98,max:1.1}),At.jsx(Ih,{icon:"◉",label:"相對密度",value:o.relativeDensity.toFixed(3),min:.9,max:1.01,tone:"blue"}),At.jsx(Ih,{icon:"⌁",label:"氫鍵網絡完整度",value:o.bondIntegrity.toFixed(2),min:0,max:1,tone:"amber"})]})]})}const H0=[{id:"ice",label:"冰",energy:12,icon:"❄",caption:"六角晶格"},{id:"melting",label:"融化中",energy:52,icon:"◒",caption:"晶格瓦解"},{id:"water",label:"液態水",energy:82,icon:"≈",caption:"排列緊密"}],z1={ice:{title:"氫鍵把水分子固定在開放的六角晶格中",body:"分子只能在平衡位置附近振動，晶格內保留較多空隙。"},melting:{title:"吸收的能量用來逐步破壞晶格",body:"溫度暫時維持在 0 °C；部分氫鍵斷裂和重組，長程有序結構逐漸消失。"},water:{title:"水分子可以移動並靠得更近",body:"液態水仍有短暫氫鍵，但不再形成固定的開放晶格，所以同一質量佔用較小體積。"}};function B1(){var M;const[o,t]=Pn.useState(12),[i,s]=Pn.useState(!1),[l,u]=Pn.useState(!0),[h,d]=Pn.useState(0),m=Pn.useMemo(()=>N1(o),[o]),p=z1[m.stage];Pn.useEffect(()=>{if(!i)return;let E,R=performance.now();const x=_=>{const B=(_-R)/1e3;R=_,t(L=>{const D=L+B*2.7;return D>=100?(s(!1),100):D}),E=requestAnimationFrame(x)};return E=requestAnimationFrame(x),()=>cancelAnimationFrame(E)},[i]);const g=()=>{o>=100&&t(0),s(E=>!E)},S=E=>{s(!1),t(E)},y=()=>{s(!1),t(12),u(!0),d(E=>E+1)};return At.jsxs("main",{className:"app-shell",children:[At.jsxs("header",{className:"app-header",children:[At.jsxs("div",{className:"brand",children:[At.jsx("span",{className:"brand__mark","aria-hidden":"true",children:"◇"}),At.jsxs("div",{children:[At.jsx("h1",{children:"冰融化：分子視角"}),At.jsx("p",{children:"以固定質量比較冰與液態水的粒子排列"})]})]}),At.jsxs("div",{className:"model-note",children:[At.jsx("span",{"aria-hidden":"true",children:"ⓘ"}),"模型示意（非按比例）｜1 atm"]})]}),At.jsxs("div",{className:"simulator-layout",children:[At.jsxs("section",{className:"visual-column","aria-label":"三維分子模擬",children:[At.jsxs("div",{className:"scene-frame",children:[At.jsx(L1,{simulation:m,showHydrogenBonds:l,cameraResetSignal:h}),At.jsxs("div",{className:"scene-topbar",children:[At.jsxs("div",{className:`phase-indicator phase-indicator--${m.stage}`,children:[At.jsx("span",{className:"phase-indicator__dot"}),(M=H0.find(E=>E.id===m.stage))==null?void 0:M.label]}),At.jsxs("div",{className:"scene-legend","aria-label":"模型圖例",children:[At.jsxs("span",{children:[At.jsx("i",{className:"atom atom--oxygen"})," 氧"]}),At.jsxs("span",{children:[At.jsx("i",{className:"atom atom--hydrogen"})," 氫"]}),At.jsxs("span",{children:[At.jsx("i",{className:"bond-key"})," 氫鍵"]})]})]}),At.jsxs("div",{className:"orbit-hint",children:[At.jsx("span",{"aria-hidden":"true",children:"↔"}),"拖曳旋轉 · 滾輪縮放"]}),At.jsxs("div",{className:"state-explainer","aria-live":"polite",children:[At.jsx("strong",{children:p.title}),At.jsx("span",{children:p.body})]})]}),At.jsxs("nav",{className:"stage-track","aria-label":"物態階段",children:[At.jsx("div",{className:"stage-track__line",children:At.jsx("span",{style:{width:`${o}%`}})}),H0.map(E=>{const R=E.id===m.stage;return At.jsxs("button",{type:"button",className:`stage ${R?"stage--active":""}`,"aria-pressed":R,onClick:()=>S(E.energy),children:[At.jsx("span",{className:"stage__icon","aria-hidden":"true",children:E.icon}),At.jsx("strong",{children:E.label}),At.jsx("small",{children:E.caption})]},E.id)})]}),At.jsxs("div",{className:"learning-note",children:[At.jsx("span",{className:"learning-note__icon","aria-hidden":"true",children:"✦"}),At.jsxs("p",{children:[At.jsx("strong",{children:"密度關鍵："}),"冰的開放晶格佔用較大體積；融化後水分子能夠靠得更近。"]})]})]}),At.jsx(P1,{simulation:m,energy:o,onEnergyChange:S,isPlaying:i,onPlayPause:g,onReset:y,showHydrogenBonds:l,onToggleHydrogenBonds:u,onResetCamera:()=>d(E=>E+1)})]})]})}Iy.createRoot(document.getElementById("root")).render(At.jsx(Pn.StrictMode,{children:At.jsx(B1,{})}));
