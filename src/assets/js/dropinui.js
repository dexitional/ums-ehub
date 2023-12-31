"use strict;"
/* @preserve
 * The MIT License (MIT)
 *
 * Copyright (c) 2013-2018 Petka Antonov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
/**
 * bluebird build version 3.5.5
 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
*/
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.Promise=t()}}(function(){var t,e,n;return function r(t,e,n){function i(s,a){if(!e[s]){if(!t[s]){var c="function"==typeof _dereq_&&_dereq_;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=e[s]={exports:{}};t[s][0].call(u.exports,function(e){var n=t[s][1][e];return i(n?n:e)},u,u.exports,r,t,e,n)}return e[s].exports}for(var o="function"==typeof _dereq_&&_dereq_,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(t,e,n){"use strict";e.exports=function(t){function e(t){var e=new n(t),r=e.promise();return e.setHowMany(1),e.setUnwrap(),e.init(),r}var n=t._SomePromiseArray;t.any=function(t){return e(t)},t.prototype.any=function(){return e(this)}}},{}],2:[function(t,e,n){"use strict";function r(){this._customScheduler=!1,this._isTickUsed=!1,this._lateQueue=new h(16),this._normalQueue=new h(16),this._haveDrainedQueues=!1,this._trampolineEnabled=!0;var t=this;this.drainQueues=function(){t._drainQueues()},this._schedule=p}function i(t,e,n){this._lateQueue.push(t,e,n),this._queueTick()}function o(t,e,n){this._normalQueue.push(t,e,n),this._queueTick()}function s(t){this._normalQueue._pushOne(t),this._queueTick()}function a(t){for(;t.length()>0;)c(t)}function c(t){var e=t.shift();if("function"!=typeof e)e._settlePromises();else{var n=t.shift(),r=t.shift();e.call(n,r)}}var l;try{throw new Error}catch(u){l=u}var p=t("./schedule"),h=t("./queue"),f=t("./util");r.prototype.setScheduler=function(t){var e=this._schedule;return this._schedule=t,this._customScheduler=!0,e},r.prototype.hasCustomScheduler=function(){return this._customScheduler},r.prototype.enableTrampoline=function(){this._trampolineEnabled=!0},r.prototype.disableTrampolineIfNecessary=function(){f.hasDevTools&&(this._trampolineEnabled=!1)},r.prototype.haveItemsQueued=function(){return this._isTickUsed||this._haveDrainedQueues},r.prototype.fatalError=function(t,e){e?(process.stderr.write("Fatal "+(t instanceof Error?t.stack:t)+"\n"),process.exit(2)):this.throwLater(t)},r.prototype.throwLater=function(t,e){if(1===arguments.length&&(e=t,t=function(){throw e}),"undefined"!=typeof setTimeout)setTimeout(function(){t(e)},0);else try{this._schedule(function(){t(e)})}catch(n){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")}},f.hasDevTools?(r.prototype.invokeLater=function(t,e,n){this._trampolineEnabled?i.call(this,t,e,n):this._schedule(function(){setTimeout(function(){t.call(e,n)},100)})},r.prototype.invoke=function(t,e,n){this._trampolineEnabled?o.call(this,t,e,n):this._schedule(function(){t.call(e,n)})},r.prototype.settlePromises=function(t){this._trampolineEnabled?s.call(this,t):this._schedule(function(){t._settlePromises()})}):(r.prototype.invokeLater=i,r.prototype.invoke=o,r.prototype.settlePromises=s),r.prototype._drainQueues=function(){a(this._normalQueue),this._reset(),this._haveDrainedQueues=!0,a(this._lateQueue)},r.prototype._queueTick=function(){this._isTickUsed||(this._isTickUsed=!0,this._schedule(this.drainQueues))},r.prototype._reset=function(){this._isTickUsed=!1},e.exports=r,e.exports.firstLineError=l},{"./queue":26,"./schedule":29,"./util":36}],3:[function(t,e,n){"use strict";e.exports=function(t,e,n,r){var i=!1,o=function(t,e){this._reject(e)},s=function(t,e){e.promiseRejectionQueued=!0,e.bindingPromise._then(o,o,null,this,t)},a=function(t,e){0===(50397184&this._bitField)&&this._resolveCallback(e.target)},c=function(t,e){e.promiseRejectionQueued||this._reject(t)};t.prototype.bind=function(o){i||(i=!0,t.prototype._propagateFrom=r.propagateFromFunction(),t.prototype._boundValue=r.boundValueFunction());var l=n(o),u=new t(e);u._propagateFrom(this,1);var p=this._target();if(u._setBoundTo(l),l instanceof t){var h={promiseRejectionQueued:!1,promise:u,target:p,bindingPromise:l};p._then(e,s,void 0,u,h),l._then(a,c,void 0,u,h),u._setOnCancel(l)}else u._resolveCallback(p);return u},t.prototype._setBoundTo=function(t){void 0!==t?(this._bitField=2097152|this._bitField,this._boundTo=t):this._bitField=-2097153&this._bitField},t.prototype._isBound=function(){return 2097152===(2097152&this._bitField)},t.bind=function(e,n){return t.resolve(n).bind(e)}}},{}],4:[function(t,e,n){"use strict";function r(){try{Promise===o&&(Promise=i)}catch(t){}return o}var i;"undefined"!=typeof Promise&&(i=Promise);var o=t("./promise")();o.noConflict=r,e.exports=o},{"./promise":22}],5:[function(t,e,n){"use strict";var r=Object.create;if(r){var i=r(null),o=r(null);i[" size"]=o[" size"]=0}e.exports=function(e){function n(t,n){var r;if(null!=t&&(r=t[n]),"function"!=typeof r){var i="Object "+a.classString(t)+" has no method '"+a.toString(n)+"'";throw new e.TypeError(i)}return r}function r(t){var e=this.pop(),r=n(t,e);return r.apply(t,this)}function i(t){return t[this]}function o(t){var e=+this;return 0>e&&(e=Math.max(0,e+t.length)),t[e]}var s,a=t("./util"),c=a.canEvaluate;a.isIdentifier;e.prototype.call=function(t){var e=[].slice.call(arguments,1);return e.push(t),this._then(r,void 0,void 0,e,void 0)},e.prototype.get=function(t){var e,n="number"==typeof t;if(n)e=o;else if(c){var r=s(t);e=null!==r?r:i}else e=i;return this._then(e,void 0,void 0,t,void 0)}}},{"./util":36}],6:[function(t,e,n){"use strict";e.exports=function(e,n,r,i){var o=t("./util"),s=o.tryCatch,a=o.errorObj,c=e._async;e.prototype["break"]=e.prototype.cancel=function(){if(!i.cancellation())return this._warn("cancellation is disabled");for(var t=this,e=t;t._isCancellable();){if(!t._cancelBy(e)){e._isFollowing()?e._followee().cancel():e._cancelBranched();break}var n=t._cancellationParent;if(null==n||!n._isCancellable()){t._isFollowing()?t._followee().cancel():t._cancelBranched();break}t._isFollowing()&&t._followee().cancel(),t._setWillBeCancelled(),e=t,t=n}},e.prototype._branchHasCancelled=function(){this._branchesRemainingToCancel--},e.prototype._enoughBranchesHaveCancelled=function(){return void 0===this._branchesRemainingToCancel||this._branchesRemainingToCancel<=0},e.prototype._cancelBy=function(t){return t===this?(this._branchesRemainingToCancel=0,this._invokeOnCancel(),!0):(this._branchHasCancelled(),this._enoughBranchesHaveCancelled()?(this._invokeOnCancel(),!0):!1)},e.prototype._cancelBranched=function(){this._enoughBranchesHaveCancelled()&&this._cancel()},e.prototype._cancel=function(){this._isCancellable()&&(this._setCancelled(),c.invoke(this._cancelPromises,this,void 0))},e.prototype._cancelPromises=function(){this._length()>0&&this._settlePromises()},e.prototype._unsetOnCancel=function(){this._onCancelField=void 0},e.prototype._isCancellable=function(){return this.isPending()&&!this._isCancelled()},e.prototype.isCancellable=function(){return this.isPending()&&!this.isCancelled()},e.prototype._doInvokeOnCancel=function(t,e){if(o.isArray(t))for(var n=0;n<t.length;++n)this._doInvokeOnCancel(t[n],e);else if(void 0!==t)if("function"==typeof t){if(!e){var r=s(t).call(this._boundValue());r===a&&(this._attachExtraTrace(r.e),c.throwLater(r.e))}}else t._resultCancelled(this)},e.prototype._invokeOnCancel=function(){var t=this._onCancel();this._unsetOnCancel(),c.invoke(this._doInvokeOnCancel,this,t)},e.prototype._invokeInternalOnCancel=function(){this._isCancellable()&&(this._doInvokeOnCancel(this._onCancel(),!0),this._unsetOnCancel())},e.prototype._resultCancelled=function(){this.cancel()}}},{"./util":36}],7:[function(t,e,n){"use strict";e.exports=function(e){function n(t,n,a){return function(c){var l=a._boundValue();t:for(var u=0;u<t.length;++u){var p=t[u];if(p===Error||null!=p&&p.prototype instanceof Error){if(c instanceof p)return o(n).call(l,c)}else if("function"==typeof p){var h=o(p).call(l,c);if(h===s)return h;if(h)return o(n).call(l,c)}else if(r.isObject(c)){for(var f=i(p),_=0;_<f.length;++_){var d=f[_];if(p[d]!=c[d])continue t}return o(n).call(l,c)}}return e}}var r=t("./util"),i=t("./es5").keys,o=r.tryCatch,s=r.errorObj;return n}},{"./es5":13,"./util":36}],8:[function(t,e,n){"use strict";e.exports=function(t){function e(){this._trace=new e.CapturedTrace(r())}function n(){return i?new e:void 0}function r(){var t=o.length-1;return t>=0?o[t]:void 0}var i=!1,o=[];return t.prototype._promiseCreated=function(){},t.prototype._pushContext=function(){},t.prototype._popContext=function(){return null},t._peekContext=t.prototype._peekContext=function(){},e.prototype._pushContext=function(){void 0!==this._trace&&(this._trace._promiseCreated=null,o.push(this._trace))},e.prototype._popContext=function(){if(void 0!==this._trace){var t=o.pop(),e=t._promiseCreated;return t._promiseCreated=null,e}return null},e.CapturedTrace=null,e.create=n,e.deactivateLongStackTraces=function(){},e.activateLongStackTraces=function(){var n=t.prototype._pushContext,o=t.prototype._popContext,s=t._peekContext,a=t.prototype._peekContext,c=t.prototype._promiseCreated;e.deactivateLongStackTraces=function(){t.prototype._pushContext=n,t.prototype._popContext=o,t._peekContext=s,t.prototype._peekContext=a,t.prototype._promiseCreated=c,i=!1},i=!0,t.prototype._pushContext=e.prototype._pushContext,t.prototype._popContext=e.prototype._popContext,t._peekContext=t.prototype._peekContext=r,t.prototype._promiseCreated=function(){var t=this._peekContext();t&&null==t._promiseCreated&&(t._promiseCreated=this)}},e}},{}],9:[function(t,e,n){"use strict";e.exports=function(e,n){function r(t,e){return{promise:e}}function i(){return!1}function o(t,e,n){var r=this;try{t(e,n,function(t){if("function"!=typeof t)throw new TypeError("onCancel must be a function, got: "+H.toString(t));r._attachCancellationCallback(t)})}catch(i){return i}}function s(t){if(!this._isCancellable())return this;var e=this._onCancel();void 0!==e?H.isArray(e)?e.push(t):this._setOnCancel([e,t]):this._setOnCancel(t)}function a(){return this._onCancelField}function c(t){this._onCancelField=t}function l(){this._cancellationParent=void 0,this._onCancelField=void 0}function u(t,e){if(0!==(1&e)){this._cancellationParent=t;var n=t._branchesRemainingToCancel;void 0===n&&(n=0),t._branchesRemainingToCancel=n+1}0!==(2&e)&&t._isBound()&&this._setBoundTo(t._boundTo)}function p(t,e){0!==(2&e)&&t._isBound()&&this._setBoundTo(t._boundTo)}function h(){var t=this._boundTo;return void 0!==t&&t instanceof e?t.isFulfilled()?t.value():void 0:t}function f(){this._trace=new O(this._peekContext())}function _(t,e){if(U(t)){var n=this._trace;if(void 0!==n&&e&&(n=n._parent),void 0!==n)n.attachExtraTrace(t);else if(!t.__stackCleaned__){var r=E(t);H.notEnumerableProp(t,"stack",r.message+"\n"+r.stack.join("\n")),H.notEnumerableProp(t,"__stackCleaned__",!0)}}}function d(){this._trace=void 0}function v(t,e,n,r,i){if(void 0===t&&null!==e&&J){if(void 0!==i&&i._returnedNonUndefined())return;if(0===(65535&r._bitField))return;n&&(n+=" ");var o="",s="";if(e._trace){for(var a=e._trace.stack.split("\n"),c=C(a),l=c.length-1;l>=0;--l){var u=c[l];if(!q.test(u)){var p=u.match($);p&&(o="at "+p[1]+":"+p[2]+":"+p[3]+" ");break}}if(c.length>0)for(var h=c[0],l=0;l<a.length;++l)if(a[l]===h){l>0&&(s="\n"+a[l-1]);break}}var f="a promise was created in a "+n+"handler "+o+"but was not returned from it, see http://goo.gl/rRqMUw"+s;r._warn(f,!0,e)}}function y(t,e){var n=t+" is deprecated and will be removed in a future version.";return e&&(n+=" Use "+e+" instead."),m(n)}function m(t,n,r){if(at.warnings){var i,o=new N(t);if(n)r._attachExtraTrace(o);else if(at.longStackTraces&&(i=e._peekContext()))i.attachExtraTrace(o);else{var s=E(o);o.stack=s.message+"\n"+s.stack.join("\n")}nt("warning",o)||k(o,"",!0)}}function g(t,e){for(var n=0;n<e.length-1;++n)e[n].push("From previous event:"),e[n]=e[n].join("\n");return n<e.length&&(e[n]=e[n].join("\n")),t+"\n"+e.join("\n")}function b(t){for(var e=0;e<t.length;++e)(0===t[e].length||e+1<t.length&&t[e][0]===t[e+1][0])&&(t.splice(e,1),e--)}function w(t){for(var e=t[0],n=1;n<t.length;++n){for(var r=t[n],i=e.length-1,o=e[i],s=-1,a=r.length-1;a>=0;--a)if(r[a]===o){s=a;break}for(var a=s;a>=0;--a){var c=r[a];if(e[i]!==c)break;e.pop(),i--}e=r}}function C(t){for(var e=[],n=0;n<t.length;++n){var r=t[n],i="    (No stack trace)"===r||Q.test(r),o=i&&it(r);i&&!o&&(z&&" "!==r.charAt(0)&&(r="    "+r),e.push(r))}return e}function j(t){for(var e=t.stack.replace(/\s+$/g,"").split("\n"),n=0;n<e.length;++n){var r=e[n];if("    (No stack trace)"===r||Q.test(r))break}return n>0&&"SyntaxError"!=t.name&&(e=e.slice(n)),e}function E(t){var e=t.stack,n=t.toString();return e="string"==typeof e&&e.length>0?j(t):["    (No stack trace)"],{message:n,stack:"SyntaxError"==t.name?e:C(e)}}function k(t,e,n){if("undefined"!=typeof console){var r;if(H.isObject(t)){var i=t.stack;r=e+G(i,t)}else r=e+String(t);"function"==typeof V?V(r,n):("function"==typeof console.log||"object"==typeof console.log)&&console.log(r)}}function F(t,e,n,r){var i=!1;try{"function"==typeof e&&(i=!0,"rejectionHandled"===t?e(r):e(n,r))}catch(o){L.throwLater(o)}"unhandledRejection"===t?nt(t,n,r)||i||k(n,"Unhandled rejection "):nt(t,r)}function T(t){var e;if("function"==typeof t)e="[function "+(t.name||"anonymous")+"]";else{e=t&&"function"==typeof t.toString?t.toString():H.toString(t);var n=/\[object [a-zA-Z0-9$_]+\]/;if(n.test(e))try{var r=JSON.stringify(t);e=r}catch(i){}0===e.length&&(e="(empty array)")}return"(<"+x(e)+">, no stack trace)"}function x(t){var e=41;return t.length<e?t:t.substr(0,e-3)+"..."}function P(){return"function"==typeof st}function S(t){var e=t.match(ot);return e?{fileName:e[1],line:parseInt(e[2],10)}:void 0}function R(t,e){if(P()){for(var n,r,i=(t.stack||"").split("\n"),o=(e.stack||"").split("\n"),s=-1,a=-1,c=0;c<i.length;++c){var l=S(i[c]);if(l){n=l.fileName,s=l.line;break}}for(var c=0;c<o.length;++c){var l=S(o[c]);if(l){r=l.fileName,a=l.line;break}}0>s||0>a||!n||!r||n!==r||s>=a||(it=function(t){if(M.test(t))return!0;var e=S(t);return e&&e.fileName===n&&s<=e.line&&e.line<=a?!0:!1})}}function O(t){this._parent=t,this._promisesCreated=0;var e=this._length=1+(void 0===t?0:t._length);st(this,O),e>32&&this.uncycle()}var A,D,V,I=e._getDomain,L=e._async,N=t("./errors").Warning,H=t("./util"),B=t("./es5"),U=H.canAttachTrace,M=/[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,q=/\((?:timers\.js):\d+:\d+\)/,$=/[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,Q=null,G=null,z=!1,X=!(0==H.env("BLUEBIRD_DEBUG")||!H.env("BLUEBIRD_DEBUG")&&"development"!==H.env("NODE_ENV")),W=!(0==H.env("BLUEBIRD_WARNINGS")||!X&&!H.env("BLUEBIRD_WARNINGS")),K=!(0==H.env("BLUEBIRD_LONG_STACK_TRACES")||!X&&!H.env("BLUEBIRD_LONG_STACK_TRACES")),J=0!=H.env("BLUEBIRD_W_FORGOTTEN_RETURN")&&(W||!!H.env("BLUEBIRD_W_FORGOTTEN_RETURN"));e.prototype.suppressUnhandledRejections=function(){var t=this._target();t._bitField=-1048577&t._bitField|524288},e.prototype._ensurePossibleRejectionHandled=function(){if(0===(524288&this._bitField)){this._setRejectionIsUnhandled();var t=this;setTimeout(function(){t._notifyUnhandledRejection()},1)}},e.prototype._notifyUnhandledRejectionIsHandled=function(){F("rejectionHandled",A,void 0,this)},e.prototype._setReturnedNonUndefined=function(){this._bitField=268435456|this._bitField},e.prototype._returnedNonUndefined=function(){return 0!==(268435456&this._bitField)},e.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var t=this._settledValue();this._setUnhandledRejectionIsNotified(),F("unhandledRejection",D,t,this)}},e.prototype._setUnhandledRejectionIsNotified=function(){this._bitField=262144|this._bitField},e.prototype._unsetUnhandledRejectionIsNotified=function(){this._bitField=-262145&this._bitField},e.prototype._isUnhandledRejectionNotified=function(){return(262144&this._bitField)>0},e.prototype._setRejectionIsUnhandled=function(){this._bitField=1048576|this._bitField},e.prototype._unsetRejectionIsUnhandled=function(){this._bitField=-1048577&this._bitField,this._isUnhandledRejectionNotified()&&(this._unsetUnhandledRejectionIsNotified(),this._notifyUnhandledRejectionIsHandled())},e.prototype._isRejectionUnhandled=function(){return(1048576&this._bitField)>0},e.prototype._warn=function(t,e,n){return m(t,e,n||this)},e.onPossiblyUnhandledRejection=function(t){var e=I();D="function"==typeof t?null===e?t:H.domainBind(e,t):void 0},e.onUnhandledRejectionHandled=function(t){var e=I();A="function"==typeof t?null===e?t:H.domainBind(e,t):void 0};var Y=function(){};e.longStackTraces=function(){if(L.haveItemsQueued()&&!at.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");if(!at.longStackTraces&&P()){var t=e.prototype._captureStackTrace,r=e.prototype._attachExtraTrace,i=e.prototype._dereferenceTrace;at.longStackTraces=!0,Y=function(){if(L.haveItemsQueued()&&!at.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");e.prototype._captureStackTrace=t,e.prototype._attachExtraTrace=r,e.prototype._dereferenceTrace=i,n.deactivateLongStackTraces(),L.enableTrampoline(),at.longStackTraces=!1},e.prototype._captureStackTrace=f,e.prototype._attachExtraTrace=_,e.prototype._dereferenceTrace=d,n.activateLongStackTraces(),L.disableTrampolineIfNecessary()}},e.hasLongStackTraces=function(){return at.longStackTraces&&P()};var Z=function(){try{if("function"==typeof CustomEvent){var t=new CustomEvent("CustomEvent");return H.global.dispatchEvent(t),function(t,e){var n={detail:e,cancelable:!0};B.defineProperty(n,"promise",{value:e.promise}),B.defineProperty(n,"reason",{value:e.reason});var r=new CustomEvent(t.toLowerCase(),n);return!H.global.dispatchEvent(r)}}if("function"==typeof Event){var t=new Event("CustomEvent");return H.global.dispatchEvent(t),function(t,e){var n=new Event(t.toLowerCase(),{cancelable:!0});return n.detail=e,B.defineProperty(n,"promise",{value:e.promise}),B.defineProperty(n,"reason",{value:e.reason}),!H.global.dispatchEvent(n)}}var t=document.createEvent("CustomEvent");return t.initCustomEvent("testingtheevent",!1,!0,{}),H.global.dispatchEvent(t),function(t,e){var n=document.createEvent("CustomEvent");return n.initCustomEvent(t.toLowerCase(),!1,!0,e),!H.global.dispatchEvent(n)}}catch(e){}return function(){return!1}}(),tt=function(){return H.isNode?function(){return process.emit.apply(process,arguments)}:H.global?function(t){var e="on"+t.toLowerCase(),n=H.global[e];return n?(n.apply(H.global,[].slice.call(arguments,1)),!0):!1}:function(){return!1}}(),et={promiseCreated:r,promiseFulfilled:r,promiseRejected:r,promiseResolved:r,promiseCancelled:r,promiseChained:function(t,e,n){return{promise:e,child:n}},warning:function(t,e){return{warning:e}},unhandledRejection:function(t,e,n){return{reason:e,promise:n}},rejectionHandled:r},nt=function(t){var e=!1;try{e=tt.apply(null,arguments)}catch(n){L.throwLater(n),e=!0}var r=!1;try{r=Z(t,et[t].apply(null,arguments))}catch(n){L.throwLater(n),r=!0}return r||e};e.config=function(t){if(t=Object(t),"longStackTraces"in t&&(t.longStackTraces?e.longStackTraces():!t.longStackTraces&&e.hasLongStackTraces()&&Y()),"warnings"in t){var n=t.warnings;at.warnings=!!n,J=at.warnings,H.isObject(n)&&"wForgottenReturn"in n&&(J=!!n.wForgottenReturn)}if("cancellation"in t&&t.cancellation&&!at.cancellation){if(L.haveItemsQueued())throw new Error("cannot enable cancellation after promises are in use");e.prototype._clearCancellationData=l,e.prototype._propagateFrom=u,e.prototype._onCancel=a,e.prototype._setOnCancel=c,e.prototype._attachCancellationCallback=s,e.prototype._execute=o,rt=u,at.cancellation=!0}return"monitoring"in t&&(t.monitoring&&!at.monitoring?(at.monitoring=!0,e.prototype._fireEvent=nt):!t.monitoring&&at.monitoring&&(at.monitoring=!1,e.prototype._fireEvent=i)),e},e.prototype._fireEvent=i,e.prototype._execute=function(t,e,n){try{t(e,n)}catch(r){return r}},e.prototype._onCancel=function(){},e.prototype._setOnCancel=function(t){},e.prototype._attachCancellationCallback=function(t){},e.prototype._captureStackTrace=function(){},e.prototype._attachExtraTrace=function(){},e.prototype._dereferenceTrace=function(){},e.prototype._clearCancellationData=function(){},e.prototype._propagateFrom=function(t,e){};var rt=p,it=function(){return!1},ot=/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;H.inherits(O,Error),n.CapturedTrace=O,O.prototype.uncycle=function(){var t=this._length;if(!(2>t)){for(var e=[],n={},r=0,i=this;void 0!==i;++r)e.push(i),i=i._parent;t=this._length=r;for(var r=t-1;r>=0;--r){var o=e[r].stack;void 0===n[o]&&(n[o]=r)}for(var r=0;t>r;++r){var s=e[r].stack,a=n[s];if(void 0!==a&&a!==r){a>0&&(e[a-1]._parent=void 0,e[a-1]._length=1),e[r]._parent=void 0,e[r]._length=1;var c=r>0?e[r-1]:this;t-1>a?(c._parent=e[a+1],c._parent.uncycle(),c._length=c._parent._length+1):(c._parent=void 0,c._length=1);for(var l=c._length+1,u=r-2;u>=0;--u)e[u]._length=l,l++;return}}}},O.prototype.attachExtraTrace=function(t){if(!t.__stackCleaned__){this.uncycle();for(var e=E(t),n=e.message,r=[e.stack],i=this;void 0!==i;)r.push(C(i.stack.split("\n"))),i=i._parent;w(r),b(r),H.notEnumerableProp(t,"stack",g(n,r)),H.notEnumerableProp(t,"__stackCleaned__",!0)}};var st=function(){var t=/^\s*at\s*/,e=function(t,e){return"string"==typeof t?t:void 0!==e.name&&void 0!==e.message?e.toString():T(e)};if("number"==typeof Error.stackTraceLimit&&"function"==typeof Error.captureStackTrace){Error.stackTraceLimit+=6,Q=t,G=e;var n=Error.captureStackTrace;return it=function(t){return M.test(t)},function(t,e){Error.stackTraceLimit+=6,n(t,e),Error.stackTraceLimit-=6}}var r=new Error;if("string"==typeof r.stack&&r.stack.split("\n")[0].indexOf("stackDetection@")>=0)return Q=/@/,G=e,z=!0,function(t){t.stack=(new Error).stack};var i;try{throw new Error}catch(o){i="stack"in o}return"stack"in r||!i||"number"!=typeof Error.stackTraceLimit?(G=function(t,e){return"string"==typeof t?t:"object"!=typeof e&&"function"!=typeof e||void 0===e.name||void 0===e.message?T(e):e.toString()},null):(Q=t,G=e,function(t){Error.stackTraceLimit+=6;try{throw new Error}catch(e){t.stack=e.stack}Error.stackTraceLimit-=6})}([]);"undefined"!=typeof console&&"undefined"!=typeof console.warn&&(V=function(t){console.warn(t)},H.isNode&&process.stderr.isTTY?V=function(t,e){var n=e?"[33m":"[31m";console.warn(n+t+"[0m\n")}:H.isNode||"string"!=typeof(new Error).stack||(V=function(t,e){console.warn("%c"+t,e?"color: darkorange":"color: red")}));var at={warnings:W,longStackTraces:!1,cancellation:!1,monitoring:!1};return K&&e.longStackTraces(),{longStackTraces:function(){return at.longStackTraces},warnings:function(){return at.warnings},cancellation:function(){return at.cancellation},monitoring:function(){return at.monitoring},propagateFromFunction:function(){return rt},boundValueFunction:function(){return h},checkForgottenReturns:v,setBounds:R,warn:m,deprecated:y,CapturedTrace:O,fireDomEvent:Z,fireGlobalEvent:tt}}},{"./errors":12,"./es5":13,"./util":36}],10:[function(t,e,n){"use strict";e.exports=function(t){function e(){return this.value}function n(){throw this.reason}t.prototype["return"]=t.prototype.thenReturn=function(n){return n instanceof t&&n.suppressUnhandledRejections(),this._then(e,void 0,void 0,{value:n},void 0)},t.prototype["throw"]=t.prototype.thenThrow=function(t){return this._then(n,void 0,void 0,{reason:t},void 0)},t.prototype.catchThrow=function(t){if(arguments.length<=1)return this._then(void 0,n,void 0,{reason:t},void 0);var e=arguments[1],r=function(){throw e};return this.caught(t,r)},t.prototype.catchReturn=function(n){if(arguments.length<=1)return n instanceof t&&n.suppressUnhandledRejections(),this._then(void 0,e,void 0,{value:n},void 0);var r=arguments[1];r instanceof t&&r.suppressUnhandledRejections();var i=function(){return r};return this.caught(n,i)}}},{}],11:[function(t,e,n){"use strict";e.exports=function(t,e){function n(){return o(this)}function r(t,n){return i(t,n,e,e)}var i=t.reduce,o=t.all;t.prototype.each=function(t){return i(this,t,e,0)._then(n,void 0,void 0,this,void 0)},t.prototype.mapSeries=function(t){return i(this,t,e,e)},t.each=function(t,r){return i(t,r,e,0)._then(n,void 0,void 0,t,void 0)},t.mapSeries=r}},{}],12:[function(t,e,n){"use strict";function r(t,e){function n(r){return this instanceof n?(p(this,"message","string"==typeof r?r:e),p(this,"name",t),void(Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):Error.call(this))):new n(r)}return u(n,Error),n}function i(t){return this instanceof i?(p(this,"name","OperationalError"),p(this,"message",t),this.cause=t,this.isOperational=!0,void(t instanceof Error?(p(this,"message",t.message),p(this,"stack",t.stack)):Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor))):new i(t)}var o,s,a=t("./es5"),c=a.freeze,l=t("./util"),u=l.inherits,p=l.notEnumerableProp,h=r("Warning","warning"),f=r("CancellationError","cancellation error"),_=r("TimeoutError","timeout error"),d=r("AggregateError","aggregate error");try{o=TypeError,s=RangeError}catch(v){o=r("TypeError","type error"),s=r("RangeError","range error")}for(var y="join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "),m=0;m<y.length;++m)"function"==typeof Array.prototype[y[m]]&&(d.prototype[y[m]]=Array.prototype[y[m]]);a.defineProperty(d.prototype,"length",{value:0,configurable:!1,writable:!0,enumerable:!0}),d.prototype.isOperational=!0;var g=0;d.prototype.toString=function(){var t=Array(4*g+1).join(" "),e="\n"+t+"AggregateError of:\n";g++,t=Array(4*g+1).join(" ");for(var n=0;n<this.length;++n){for(var r=this[n]===this?"[Circular AggregateError]":this[n]+"",i=r.split("\n"),o=0;o<i.length;++o)i[o]=t+i[o];r=i.join("\n"),e+=r+"\n"}return g--,e},u(i,Error);var b=Error.__BluebirdErrorTypes__;b||(b=c({CancellationError:f,TimeoutError:_,OperationalError:i,RejectionError:i,AggregateError:d}),a.defineProperty(Error,"__BluebirdErrorTypes__",{value:b,writable:!1,enumerable:!1,configurable:!1})),e.exports={Error:Error,TypeError:o,RangeError:s,CancellationError:b.CancellationError,OperationalError:b.OperationalError,TimeoutError:b.TimeoutError,AggregateError:b.AggregateError,Warning:h}},{"./es5":13,"./util":36}],13:[function(t,e,n){var r=function(){"use strict";return void 0===this}();if(r)e.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,getDescriptor:Object.getOwnPropertyDescriptor,keys:Object.keys,names:Object.getOwnPropertyNames,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:r,propertyIsWritable:function(t,e){var n=Object.getOwnPropertyDescriptor(t,e);return!(n&&!n.writable&&!n.set)}};else{var i={}.hasOwnProperty,o={}.toString,s={}.constructor.prototype,a=function(t){var e=[];for(var n in t)i.call(t,n)&&e.push(n);return e},c=function(t,e){return{value:t[e]}},l=function(t,e,n){return t[e]=n.value,t},u=function(t){return t},p=function(t){try{return Object(t).constructor.prototype}catch(e){return s}},h=function(t){try{return"[object Array]"===o.call(t)}catch(e){return!1}};e.exports={isArray:h,keys:a,names:a,defineProperty:l,getDescriptor:c,freeze:u,getPrototypeOf:p,isES5:r,propertyIsWritable:function(){return!0}}}},{}],14:[function(t,e,n){"use strict";e.exports=function(t,e){var n=t.map;t.prototype.filter=function(t,r){return n(this,t,r,e)},t.filter=function(t,r,i){return n(t,r,i,e)}}},{}],15:[function(t,e,n){"use strict";e.exports=function(e,n,r){function i(t,e,n){this.promise=t,this.type=e,this.handler=n,this.called=!1,this.cancelPromise=null}function o(t){this.finallyHandler=t}function s(t,e){return null!=t.cancelPromise?(arguments.length>1?t.cancelPromise._reject(e):t.cancelPromise._cancel(),t.cancelPromise=null,!0):!1}function a(){return l.call(this,this.promise._target()._settledValue())}function c(t){return s(this,t)?void 0:(h.e=t,h)}function l(t){var i=this.promise,l=this.handler;if(!this.called){this.called=!0;var u=this.isFinallyHandler()?l.call(i._boundValue()):l.call(i._boundValue(),t);if(u===r)return u;if(void 0!==u){i._setReturnedNonUndefined();var f=n(u,i);if(f instanceof e){if(null!=this.cancelPromise){if(f._isCancelled()){var _=new p("late cancellation observer");return i._attachExtraTrace(_),h.e=_,h}f.isPending()&&f._attachCancellationCallback(new o(this))}return f._then(a,c,void 0,this,void 0)}}}return i.isRejected()?(s(this),h.e=t,h):(s(this),t)}var u=t("./util"),p=e.CancellationError,h=u.errorObj,f=t("./catch_filter")(r);return i.prototype.isFinallyHandler=function(){return 0===this.type},o.prototype._resultCancelled=function(){s(this.finallyHandler)},e.prototype._passThrough=function(t,e,n,r){return"function"!=typeof t?this.then():this._then(n,r,void 0,new i(this,e,t),void 0)},e.prototype.lastly=e.prototype["finally"]=function(t){return this._passThrough(t,0,l,l)},e.prototype.tap=function(t){return this._passThrough(t,1,l)},e.prototype.tapCatch=function(t){var n=arguments.length;if(1===n)return this._passThrough(t,1,void 0,l);var r,i=new Array(n-1),o=0;for(r=0;n-1>r;++r){var s=arguments[r];if(!u.isObject(s))return e.reject(new TypeError("tapCatch statement predicate: expecting an object but got "+u.classString(s)));i[o++]=s}i.length=o;var a=arguments[r];return this._passThrough(f(i,a,this),1,void 0,l)},i}},{"./catch_filter":7,"./util":36}],16:[function(t,e,n){"use strict";e.exports=function(e,n,r,i,o,s){function a(t,n,r){for(var o=0;o<n.length;++o){r._pushContext();var s=f(n[o])(t);if(r._popContext(),s===h){r._pushContext();var a=e.reject(h.e);return r._popContext(),a}var c=i(s,r);if(c instanceof e)return c}return null}function c(t,n,i,o){if(s.cancellation()){var a=new e(r),c=this._finallyPromise=new e(r);this._promise=a.lastly(function(){return c}),a._captureStackTrace(),a._setOnCancel(this)}else{var l=this._promise=new e(r);l._captureStackTrace()}this._stack=o,this._generatorFunction=t,this._receiver=n,this._generator=void 0,this._yieldHandlers="function"==typeof i?[i].concat(_):_,this._yieldedPromise=null,this._cancellationPhase=!1}var l=t("./errors"),u=l.TypeError,p=t("./util"),h=p.errorObj,f=p.tryCatch,_=[];p.inherits(c,o),c.prototype._isResolved=function(){return null===this._promise},c.prototype._cleanup=function(){this._promise=this._generator=null,s.cancellation()&&null!==this._finallyPromise&&(this._finallyPromise._fulfill(),this._finallyPromise=null)},c.prototype._promiseCancelled=function(){if(!this._isResolved()){var t,n="undefined"!=typeof this._generator["return"];if(n)this._promise._pushContext(),t=f(this._generator["return"]).call(this._generator,void 0),this._promise._popContext();else{var r=new e.CancellationError("generator .return() sentinel");e.coroutine.returnSentinel=r,this._promise._attachExtraTrace(r),this._promise._pushContext(),t=f(this._generator["throw"]).call(this._generator,r),this._promise._popContext()}this._cancellationPhase=!0,this._yieldedPromise=null,this._continue(t)}},c.prototype._promiseFulfilled=function(t){this._yieldedPromise=null,this._promise._pushContext();var e=f(this._generator.next).call(this._generator,t);this._promise._popContext(),this._continue(e)},c.prototype._promiseRejected=function(t){this._yieldedPromise=null,this._promise._attachExtraTrace(t),this._promise._pushContext();var e=f(this._generator["throw"]).call(this._generator,t);this._promise._popContext(),this._continue(e)},c.prototype._resultCancelled=function(){if(this._yieldedPromise instanceof e){var t=this._yieldedPromise;this._yieldedPromise=null,t.cancel()}},c.prototype.promise=function(){return this._promise},c.prototype._run=function(){this._generator=this._generatorFunction.call(this._receiver),this._receiver=this._generatorFunction=void 0,this._promiseFulfilled(void 0)},c.prototype._continue=function(t){var n=this._promise;if(t===h)return this._cleanup(),this._cancellationPhase?n.cancel():n._rejectCallback(t.e,!1);var r=t.value;if(t.done===!0)return this._cleanup(),this._cancellationPhase?n.cancel():n._resolveCallback(r);var o=i(r,this._promise);if(!(o instanceof e)&&(o=a(o,this._yieldHandlers,this._promise),
null===o))return void this._promiseRejected(new u("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s",String(r))+"From coroutine:\n"+this._stack.split("\n").slice(1,-7).join("\n")));o=o._target();var s=o._bitField;0===(50397184&s)?(this._yieldedPromise=o,o._proxy(this,null)):0!==(33554432&s)?e._async.invoke(this._promiseFulfilled,this,o._value()):0!==(16777216&s)?e._async.invoke(this._promiseRejected,this,o._reason()):this._promiseCancelled()},e.coroutine=function(t,e){if("function"!=typeof t)throw new u("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");var n=Object(e).yieldHandler,r=c,i=(new Error).stack;return function(){var e=t.apply(this,arguments),o=new r(void 0,void 0,n,i),s=o.promise();return o._generator=e,o._promiseFulfilled(void 0),s}},e.coroutine.addYieldHandler=function(t){if("function"!=typeof t)throw new u("expecting a function but got "+p.classString(t));_.push(t)},e.spawn=function(t){if(s.deprecated("Promise.spawn()","Promise.coroutine()"),"function"!=typeof t)return n("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");var r=new c(t,this),i=r.promise();return r._run(e.spawn),i}}},{"./errors":12,"./util":36}],17:[function(t,e,n){"use strict";e.exports=function(e,n,r,i,o,s){var a=t("./util");a.canEvaluate,a.tryCatch,a.errorObj;e.join=function(){var t,e=arguments.length-1;if(e>0&&"function"==typeof arguments[e]){t=arguments[e];var r}var i=[].slice.call(arguments);t&&i.pop();var r=new n(i).promise();return void 0!==t?r.spread(t):r}}},{"./util":36}],18:[function(t,e,n){"use strict";e.exports=function(e,n,r,i,o,s){function a(t,e,n,r){this.constructor$(t),this._promise._captureStackTrace();var i=l();this._callback=null===i?e:u.domainBind(i,e),this._preservedValues=r===o?new Array(this.length()):null,this._limit=n,this._inFlight=0,this._queue=[],f.invoke(this._asyncInit,this,void 0)}function c(t,n,i,o){if("function"!=typeof n)return r("expecting a function but got "+u.classString(n));var s=0;if(void 0!==i){if("object"!=typeof i||null===i)return e.reject(new TypeError("options argument must be an object but it is "+u.classString(i)));if("number"!=typeof i.concurrency)return e.reject(new TypeError("'concurrency' must be a number but it is "+u.classString(i.concurrency)));s=i.concurrency}return s="number"==typeof s&&isFinite(s)&&s>=1?s:0,new a(t,n,s,o).promise()}var l=e._getDomain,u=t("./util"),p=u.tryCatch,h=u.errorObj,f=e._async;u.inherits(a,n),a.prototype._asyncInit=function(){this._init$(void 0,-2)},a.prototype._init=function(){},a.prototype._promiseFulfilled=function(t,n){var r=this._values,o=this.length(),a=this._preservedValues,c=this._limit;if(0>n){if(n=-1*n-1,r[n]=t,c>=1&&(this._inFlight--,this._drainQueue(),this._isResolved()))return!0}else{if(c>=1&&this._inFlight>=c)return r[n]=t,this._queue.push(n),!1;null!==a&&(a[n]=t);var l=this._promise,u=this._callback,f=l._boundValue();l._pushContext();var _=p(u).call(f,t,n,o),d=l._popContext();if(s.checkForgottenReturns(_,d,null!==a?"Promise.filter":"Promise.map",l),_===h)return this._reject(_.e),!0;var v=i(_,this._promise);if(v instanceof e){v=v._target();var y=v._bitField;if(0===(50397184&y))return c>=1&&this._inFlight++,r[n]=v,v._proxy(this,-1*(n+1)),!1;if(0===(33554432&y))return 0!==(16777216&y)?(this._reject(v._reason()),!0):(this._cancel(),!0);_=v._value()}r[n]=_}var m=++this._totalResolved;return m>=o?(null!==a?this._filter(r,a):this._resolve(r),!0):!1},a.prototype._drainQueue=function(){for(var t=this._queue,e=this._limit,n=this._values;t.length>0&&this._inFlight<e;){if(this._isResolved())return;var r=t.pop();this._promiseFulfilled(n[r],r)}},a.prototype._filter=function(t,e){for(var n=e.length,r=new Array(n),i=0,o=0;n>o;++o)t[o]&&(r[i++]=e[o]);r.length=i,this._resolve(r)},a.prototype.preservedValues=function(){return this._preservedValues},e.prototype.map=function(t,e){return c(this,t,e,null)},e.map=function(t,e,n,r){return c(t,e,n,r)}}},{"./util":36}],19:[function(t,e,n){"use strict";e.exports=function(e,n,r,i,o){var s=t("./util"),a=s.tryCatch;e.method=function(t){if("function"!=typeof t)throw new e.TypeError("expecting a function but got "+s.classString(t));return function(){var r=new e(n);r._captureStackTrace(),r._pushContext();var i=a(t).apply(this,arguments),s=r._popContext();return o.checkForgottenReturns(i,s,"Promise.method",r),r._resolveFromSyncValue(i),r}},e.attempt=e["try"]=function(t){if("function"!=typeof t)return i("expecting a function but got "+s.classString(t));var r=new e(n);r._captureStackTrace(),r._pushContext();var c;if(arguments.length>1){o.deprecated("calling Promise.try with more than 1 argument");var l=arguments[1],u=arguments[2];c=s.isArray(l)?a(t).apply(u,l):a(t).call(u,l)}else c=a(t)();var p=r._popContext();return o.checkForgottenReturns(c,p,"Promise.try",r),r._resolveFromSyncValue(c),r},e.prototype._resolveFromSyncValue=function(t){t===s.errorObj?this._rejectCallback(t.e,!1):this._resolveCallback(t,!0)}}},{"./util":36}],20:[function(t,e,n){"use strict";function r(t){return t instanceof Error&&u.getPrototypeOf(t)===Error.prototype}function i(t){var e;if(r(t)){e=new l(t),e.name=t.name,e.message=t.message,e.stack=t.stack;for(var n=u.keys(t),i=0;i<n.length;++i){var o=n[i];p.test(o)||(e[o]=t[o])}return e}return s.markAsOriginatingFromRejection(t),t}function o(t,e){return function(n,r){if(null!==t){if(n){var o=i(a(n));t._attachExtraTrace(o),t._reject(o)}else if(e){var s=[].slice.call(arguments,1);t._fulfill(s)}else t._fulfill(r);t=null}}}var s=t("./util"),a=s.maybeWrapAsError,c=t("./errors"),l=c.OperationalError,u=t("./es5"),p=/^(?:name|message|stack|cause)$/;e.exports=o},{"./errors":12,"./es5":13,"./util":36}],21:[function(t,e,n){"use strict";e.exports=function(e){function n(t,e){var n=this;if(!o.isArray(t))return r.call(n,t,e);var i=a(e).apply(n._boundValue(),[null].concat(t));i===c&&s.throwLater(i.e)}function r(t,e){var n=this,r=n._boundValue(),i=void 0===t?a(e).call(r,null):a(e).call(r,null,t);i===c&&s.throwLater(i.e)}function i(t,e){var n=this;if(!t){var r=new Error(t+"");r.cause=t,t=r}var i=a(e).call(n._boundValue(),t);i===c&&s.throwLater(i.e)}var o=t("./util"),s=e._async,a=o.tryCatch,c=o.errorObj;e.prototype.asCallback=e.prototype.nodeify=function(t,e){if("function"==typeof t){var o=r;void 0!==e&&Object(e).spread&&(o=n),this._then(o,i,void 0,this,t)}return this}}},{"./util":36}],22:[function(t,e,n){"use strict";e.exports=function(){function n(){}function r(t,e){if(null==t||t.constructor!==i)throw new m("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");if("function"!=typeof e)throw new m("expecting a function but got "+f.classString(e))}function i(t){t!==b&&r(this,t),this._bitField=0,this._fulfillmentHandler0=void 0,this._rejectionHandler0=void 0,this._promise0=void 0,this._receiver0=void 0,this._resolveFromExecutor(t),this._promiseCreated(),this._fireEvent("promiseCreated",this)}function o(t){this.promise._resolveCallback(t)}function s(t){this.promise._rejectCallback(t,!1)}function a(t){var e=new i(b);e._fulfillmentHandler0=t,e._rejectionHandler0=t,e._promise0=t,e._receiver0=t}var c,l=function(){return new m("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")},u=function(){return new i.PromiseInspection(this._target())},p=function(t){return i.reject(new m(t))},h={},f=t("./util");c=f.isNode?function(){var t=process.domain;return void 0===t&&(t=null),t}:function(){return null},f.notEnumerableProp(i,"_getDomain",c);var _=t("./es5"),d=t("./async"),v=new d;_.defineProperty(i,"_async",{value:v});var y=t("./errors"),m=i.TypeError=y.TypeError;i.RangeError=y.RangeError;var g=i.CancellationError=y.CancellationError;i.TimeoutError=y.TimeoutError,i.OperationalError=y.OperationalError,i.RejectionError=y.OperationalError,i.AggregateError=y.AggregateError;var b=function(){},w={},C={},j=t("./thenables")(i,b),E=t("./promise_array")(i,b,j,p,n),k=t("./context")(i),F=k.create,T=t("./debuggability")(i,k),x=(T.CapturedTrace,t("./finally")(i,j,C)),P=t("./catch_filter")(C),S=t("./nodeback"),R=f.errorObj,O=f.tryCatch;return i.prototype.toString=function(){return"[object Promise]"},i.prototype.caught=i.prototype["catch"]=function(t){var e=arguments.length;if(e>1){var n,r=new Array(e-1),i=0;for(n=0;e-1>n;++n){var o=arguments[n];if(!f.isObject(o))return p("Catch statement predicate: expecting an object but got "+f.classString(o));r[i++]=o}if(r.length=i,t=arguments[n],"function"!=typeof t)throw new m("The last argument to .catch() must be a function, got "+f.toString(t));return this.then(void 0,P(r,t,this))}return this.then(void 0,t)},i.prototype.reflect=function(){return this._then(u,u,void 0,this,void 0)},i.prototype.then=function(t,e){if(T.warnings()&&arguments.length>0&&"function"!=typeof t&&"function"!=typeof e){var n=".then() only accepts functions but was passed: "+f.classString(t);arguments.length>1&&(n+=", "+f.classString(e)),this._warn(n)}return this._then(t,e,void 0,void 0,void 0)},i.prototype.done=function(t,e){var n=this._then(t,e,void 0,void 0,void 0);n._setIsFinal()},i.prototype.spread=function(t){return"function"!=typeof t?p("expecting a function but got "+f.classString(t)):this.all()._then(t,void 0,void 0,w,void 0)},i.prototype.toJSON=function(){var t={isFulfilled:!1,isRejected:!1,fulfillmentValue:void 0,rejectionReason:void 0};return this.isFulfilled()?(t.fulfillmentValue=this.value(),t.isFulfilled=!0):this.isRejected()&&(t.rejectionReason=this.reason(),t.isRejected=!0),t},i.prototype.all=function(){return arguments.length>0&&this._warn(".all() was passed arguments but it does not take any"),new E(this).promise()},i.prototype.error=function(t){return this.caught(f.originatesFromRejection,t)},i.getNewLibraryCopy=e.exports,i.is=function(t){return t instanceof i},i.fromNode=i.fromCallback=function(t){var e=new i(b);e._captureStackTrace();var n=arguments.length>1?!!Object(arguments[1]).multiArgs:!1,r=O(t)(S(e,n));return r===R&&e._rejectCallback(r.e,!0),e._isFateSealed()||e._setAsyncGuaranteed(),e},i.all=function(t){return new E(t).promise()},i.cast=function(t){var e=j(t);return e instanceof i||(e=new i(b),e._captureStackTrace(),e._setFulfilled(),e._rejectionHandler0=t),e},i.resolve=i.fulfilled=i.cast,i.reject=i.rejected=function(t){var e=new i(b);return e._captureStackTrace(),e._rejectCallback(t,!0),e},i.setScheduler=function(t){if("function"!=typeof t)throw new m("expecting a function but got "+f.classString(t));return v.setScheduler(t)},i.prototype._then=function(t,e,n,r,o){var s=void 0!==o,a=s?o:new i(b),l=this._target(),u=l._bitField;s||(a._propagateFrom(this,3),a._captureStackTrace(),void 0===r&&0!==(2097152&this._bitField)&&(r=0!==(50397184&u)?this._boundValue():l===this?void 0:this._boundTo),this._fireEvent("promiseChained",this,a));var p=c();if(0!==(50397184&u)){var h,_,d=l._settlePromiseCtx;0!==(33554432&u)?(_=l._rejectionHandler0,h=t):0!==(16777216&u)?(_=l._fulfillmentHandler0,h=e,l._unsetRejectionIsUnhandled()):(d=l._settlePromiseLateCancellationObserver,_=new g("late cancellation observer"),l._attachExtraTrace(_),h=e),v.invoke(d,l,{handler:null===p?h:"function"==typeof h&&f.domainBind(p,h),promise:a,receiver:r,value:_})}else l._addCallbacks(t,e,a,r,p);return a},i.prototype._length=function(){return 65535&this._bitField},i.prototype._isFateSealed=function(){return 0!==(117506048&this._bitField)},i.prototype._isFollowing=function(){return 67108864===(67108864&this._bitField)},i.prototype._setLength=function(t){this._bitField=-65536&this._bitField|65535&t},i.prototype._setFulfilled=function(){this._bitField=33554432|this._bitField,this._fireEvent("promiseFulfilled",this)},i.prototype._setRejected=function(){this._bitField=16777216|this._bitField,this._fireEvent("promiseRejected",this)},i.prototype._setFollowing=function(){this._bitField=67108864|this._bitField,this._fireEvent("promiseResolved",this)},i.prototype._setIsFinal=function(){this._bitField=4194304|this._bitField},i.prototype._isFinal=function(){return(4194304&this._bitField)>0},i.prototype._unsetCancelled=function(){this._bitField=-65537&this._bitField},i.prototype._setCancelled=function(){this._bitField=65536|this._bitField,this._fireEvent("promiseCancelled",this)},i.prototype._setWillBeCancelled=function(){this._bitField=8388608|this._bitField},i.prototype._setAsyncGuaranteed=function(){v.hasCustomScheduler()||(this._bitField=134217728|this._bitField)},i.prototype._receiverAt=function(t){var e=0===t?this._receiver0:this[4*t-4+3];return e===h?void 0:void 0===e&&this._isBound()?this._boundValue():e},i.prototype._promiseAt=function(t){return this[4*t-4+2]},i.prototype._fulfillmentHandlerAt=function(t){return this[4*t-4+0]},i.prototype._rejectionHandlerAt=function(t){return this[4*t-4+1]},i.prototype._boundValue=function(){},i.prototype._migrateCallback0=function(t){var e=(t._bitField,t._fulfillmentHandler0),n=t._rejectionHandler0,r=t._promise0,i=t._receiverAt(0);void 0===i&&(i=h),this._addCallbacks(e,n,r,i,null)},i.prototype._migrateCallbackAt=function(t,e){var n=t._fulfillmentHandlerAt(e),r=t._rejectionHandlerAt(e),i=t._promiseAt(e),o=t._receiverAt(e);void 0===o&&(o=h),this._addCallbacks(n,r,i,o,null)},i.prototype._addCallbacks=function(t,e,n,r,i){var o=this._length();if(o>=65531&&(o=0,this._setLength(0)),0===o)this._promise0=n,this._receiver0=r,"function"==typeof t&&(this._fulfillmentHandler0=null===i?t:f.domainBind(i,t)),"function"==typeof e&&(this._rejectionHandler0=null===i?e:f.domainBind(i,e));else{var s=4*o-4;this[s+2]=n,this[s+3]=r,"function"==typeof t&&(this[s+0]=null===i?t:f.domainBind(i,t)),"function"==typeof e&&(this[s+1]=null===i?e:f.domainBind(i,e))}return this._setLength(o+1),o},i.prototype._proxy=function(t,e){this._addCallbacks(void 0,void 0,e,t,null)},i.prototype._resolveCallback=function(t,e){if(0===(117506048&this._bitField)){if(t===this)return this._rejectCallback(l(),!1);var n=j(t,this);if(!(n instanceof i))return this._fulfill(t);e&&this._propagateFrom(n,2);var r=n._target();if(r===this)return void this._reject(l());var o=r._bitField;if(0===(50397184&o)){var s=this._length();s>0&&r._migrateCallback0(this);for(var a=1;s>a;++a)r._migrateCallbackAt(this,a);this._setFollowing(),this._setLength(0),this._setFollowee(r)}else if(0!==(33554432&o))this._fulfill(r._value());else if(0!==(16777216&o))this._reject(r._reason());else{var c=new g("late cancellation observer");r._attachExtraTrace(c),this._reject(c)}}},i.prototype._rejectCallback=function(t,e,n){var r=f.ensureErrorObject(t),i=r===t;if(!i&&!n&&T.warnings()){var o="a promise was rejected with a non-error: "+f.classString(t);this._warn(o,!0)}this._attachExtraTrace(r,e?i:!1),this._reject(t)},i.prototype._resolveFromExecutor=function(t){if(t!==b){var e=this;this._captureStackTrace(),this._pushContext();var n=!0,r=this._execute(t,function(t){e._resolveCallback(t)},function(t){e._rejectCallback(t,n)});n=!1,this._popContext(),void 0!==r&&e._rejectCallback(r,!0)}},i.prototype._settlePromiseFromHandler=function(t,e,n,r){var i=r._bitField;if(0===(65536&i)){r._pushContext();var o;e===w?n&&"number"==typeof n.length?o=O(t).apply(this._boundValue(),n):(o=R,o.e=new m("cannot .spread() a non-array: "+f.classString(n))):o=O(t).call(e,n);var s=r._popContext();i=r._bitField,0===(65536&i)&&(o===C?r._reject(n):o===R?r._rejectCallback(o.e,!1):(T.checkForgottenReturns(o,s,"",r,this),r._resolveCallback(o)))}},i.prototype._target=function(){for(var t=this;t._isFollowing();)t=t._followee();return t},i.prototype._followee=function(){return this._rejectionHandler0},i.prototype._setFollowee=function(t){this._rejectionHandler0=t},i.prototype._settlePromise=function(t,e,r,o){var s=t instanceof i,a=this._bitField,c=0!==(134217728&a);0!==(65536&a)?(s&&t._invokeInternalOnCancel(),r instanceof x&&r.isFinallyHandler()?(r.cancelPromise=t,O(e).call(r,o)===R&&t._reject(R.e)):e===u?t._fulfill(u.call(r)):r instanceof n?r._promiseCancelled(t):s||t instanceof E?t._cancel():r.cancel()):"function"==typeof e?s?(c&&t._setAsyncGuaranteed(),this._settlePromiseFromHandler(e,r,o,t)):e.call(r,o,t):r instanceof n?r._isResolved()||(0!==(33554432&a)?r._promiseFulfilled(o,t):r._promiseRejected(o,t)):s&&(c&&t._setAsyncGuaranteed(),0!==(33554432&a)?t._fulfill(o):t._reject(o))},i.prototype._settlePromiseLateCancellationObserver=function(t){var e=t.handler,n=t.promise,r=t.receiver,o=t.value;"function"==typeof e?n instanceof i?this._settlePromiseFromHandler(e,r,o,n):e.call(r,o,n):n instanceof i&&n._reject(o)},i.prototype._settlePromiseCtx=function(t){this._settlePromise(t.promise,t.handler,t.receiver,t.value)},i.prototype._settlePromise0=function(t,e,n){var r=this._promise0,i=this._receiverAt(0);this._promise0=void 0,this._receiver0=void 0,this._settlePromise(r,t,i,e)},i.prototype._clearCallbackDataAtIndex=function(t){var e=4*t-4;this[e+2]=this[e+3]=this[e+0]=this[e+1]=void 0},i.prototype._fulfill=function(t){var e=this._bitField;if(!((117506048&e)>>>16)){if(t===this){var n=l();return this._attachExtraTrace(n),this._reject(n)}this._setFulfilled(),this._rejectionHandler0=t,(65535&e)>0&&(0!==(134217728&e)?this._settlePromises():v.settlePromises(this),this._dereferenceTrace())}},i.prototype._reject=function(t){var e=this._bitField;if(!((117506048&e)>>>16))return this._setRejected(),this._fulfillmentHandler0=t,this._isFinal()?v.fatalError(t,f.isNode):void((65535&e)>0?v.settlePromises(this):this._ensurePossibleRejectionHandled())},i.prototype._fulfillPromises=function(t,e){for(var n=1;t>n;n++){var r=this._fulfillmentHandlerAt(n),i=this._promiseAt(n),o=this._receiverAt(n);this._clearCallbackDataAtIndex(n),this._settlePromise(i,r,o,e)}},i.prototype._rejectPromises=function(t,e){for(var n=1;t>n;n++){var r=this._rejectionHandlerAt(n),i=this._promiseAt(n),o=this._receiverAt(n);this._clearCallbackDataAtIndex(n),this._settlePromise(i,r,o,e)}},i.prototype._settlePromises=function(){var t=this._bitField,e=65535&t;if(e>0){if(0!==(16842752&t)){var n=this._fulfillmentHandler0;this._settlePromise0(this._rejectionHandler0,n,t),this._rejectPromises(e,n)}else{var r=this._rejectionHandler0;this._settlePromise0(this._fulfillmentHandler0,r,t),this._fulfillPromises(e,r)}this._setLength(0)}this._clearCancellationData()},i.prototype._settledValue=function(){var t=this._bitField;return 0!==(33554432&t)?this._rejectionHandler0:0!==(16777216&t)?this._fulfillmentHandler0:void 0},"undefined"!=typeof Symbol&&Symbol.toStringTag&&_.defineProperty(i.prototype,Symbol.toStringTag,{get:function(){return"Object"}}),i.defer=i.pending=function(){T.deprecated("Promise.defer","new Promise");var t=new i(b);return{promise:t,resolve:o,reject:s}},f.notEnumerableProp(i,"_makeSelfResolutionError",l),t("./method")(i,b,j,p,T),t("./bind")(i,b,j,T),t("./cancel")(i,E,p,T),t("./direct_resolve")(i),t("./synchronous_inspection")(i),t("./join")(i,E,j,b,v,c),i.Promise=i,i.version="3.5.5",t("./call_get.js")(i),t("./generators.js")(i,p,b,j,n,T),t("./map.js")(i,E,p,j,b,T),t("./nodeify.js")(i),t("./promisify.js")(i,b),t("./props.js")(i,E,j,p),t("./race.js")(i,b,j,p),t("./reduce.js")(i,E,p,j,b,T),t("./settle.js")(i,E,T),t("./some.js")(i,E,p),t("./timers.js")(i,b,T),t("./using.js")(i,p,j,F,b,T),t("./any.js")(i),t("./each.js")(i,b),t("./filter.js")(i,b),f.toFastProperties(i),f.toFastProperties(i.prototype),a({a:1}),a({b:2}),a({c:3}),a(1),a(function(){}),a(void 0),a(!1),a(new i(b)),T.setBounds(d.firstLineError,f.lastLineError),i}},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],23:[function(t,e,n){"use strict";e.exports=function(e,n,r,i,o){function s(t){switch(t){case-2:return[];case-3:return{};case-6:return new Map}}function a(t){var r=this._promise=new e(n);t instanceof e&&r._propagateFrom(t,3),r._setOnCancel(this),this._values=t,this._length=0,this._totalResolved=0,this._init(void 0,-2)}var c=t("./util");c.isArray;return c.inherits(a,o),a.prototype.length=function(){return this._length},a.prototype.promise=function(){return this._promise},a.prototype._init=function l(t,n){var o=r(this._values,this._promise);if(o instanceof e){o=o._target();var a=o._bitField;if(this._values=o,0===(50397184&a))return this._promise._setAsyncGuaranteed(),o._then(l,this._reject,void 0,this,n);if(0===(33554432&a))return 0!==(16777216&a)?this._reject(o._reason()):this._cancel();o=o._value()}if(o=c.asArray(o),null===o){var u=i("expecting an array or an iterable object but got "+c.classString(o)).reason();return void this._promise._rejectCallback(u,!1)}return 0===o.length?void(-5===n?this._resolveEmptyArray():this._resolve(s(n))):void this._iterate(o)},a.prototype._iterate=function(t){var n=this.getActualLength(t.length);this._length=n,this._values=this.shouldCopyValues()?new Array(n):this._values;for(var i=this._promise,o=!1,s=null,a=0;n>a;++a){var c=r(t[a],i);c instanceof e?(c=c._target(),s=c._bitField):s=null,o?null!==s&&c.suppressUnhandledRejections():null!==s?0===(50397184&s)?(c._proxy(this,a),this._values[a]=c):o=0!==(33554432&s)?this._promiseFulfilled(c._value(),a):0!==(16777216&s)?this._promiseRejected(c._reason(),a):this._promiseCancelled(a):o=this._promiseFulfilled(c,a)}o||i._setAsyncGuaranteed()},a.prototype._isResolved=function(){return null===this._values},a.prototype._resolve=function(t){this._values=null,this._promise._fulfill(t)},a.prototype._cancel=function(){!this._isResolved()&&this._promise._isCancellable()&&(this._values=null,this._promise._cancel())},a.prototype._reject=function(t){this._values=null,this._promise._rejectCallback(t,!1)},a.prototype._promiseFulfilled=function(t,e){this._values[e]=t;var n=++this._totalResolved;return n>=this._length?(this._resolve(this._values),!0):!1},a.prototype._promiseCancelled=function(){return this._cancel(),!0},a.prototype._promiseRejected=function(t){return this._totalResolved++,this._reject(t),!0},a.prototype._resultCancelled=function(){if(!this._isResolved()){var t=this._values;if(this._cancel(),t instanceof e)t.cancel();else for(var n=0;n<t.length;++n)t[n]instanceof e&&t[n].cancel()}},a.prototype.shouldCopyValues=function(){return!0},a.prototype.getActualLength=function(t){return t},a}},{"./util":36}],24:[function(t,e,n){"use strict";e.exports=function(e,n){function r(t){return!C.test(t)}function i(t){try{return t.__isPromisified__===!0}catch(e){return!1}}function o(t,e,n){var r=f.getDataPropertyOrDefault(t,e+n,b);return r?i(r):!1}function s(t,e,n){for(var r=0;r<t.length;r+=2){var i=t[r];if(n.test(i))for(var o=i.replace(n,""),s=0;s<t.length;s+=2)if(t[s]===o)throw new m("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s",e))}}function a(t,e,n,r){for(var a=f.inheritedDataKeys(t),c=[],l=0;l<a.length;++l){var u=a[l],p=t[u],h=r===j?!0:j(u,p,t);"function"!=typeof p||i(p)||o(t,u,e)||!r(u,p,t,h)||c.push(u,p)}return s(c,e,n),c}function c(t,r,i,o,s,a){function c(){var i=r;r===h&&(i=this);var o=new e(n);o._captureStackTrace();var s="string"==typeof u&&this!==l?this[u]:t,c=_(o,a);try{s.apply(i,d(arguments,c))}catch(p){o._rejectCallback(v(p),!0,!0)}return o._isFateSealed()||o._setAsyncGuaranteed(),o}var l=function(){return this}(),u=t;return"string"==typeof u&&(t=o),f.notEnumerableProp(c,"__isPromisified__",!0),c}function l(t,e,n,r,i){for(var o=new RegExp(E(e)+"$"),s=a(t,e,o,n),c=0,l=s.length;l>c;c+=2){var u=s[c],p=s[c+1],_=u+e;if(r===k)t[_]=k(u,h,u,p,e,i);else{var d=r(p,function(){return k(u,h,u,p,e,i)});f.notEnumerableProp(d,"__isPromisified__",!0),t[_]=d}}return f.toFastProperties(t),t}function u(t,e,n){return k(t,e,void 0,t,null,n)}var p,h={},f=t("./util"),_=t("./nodeback"),d=f.withAppended,v=f.maybeWrapAsError,y=f.canEvaluate,m=t("./errors").TypeError,g="Async",b={__isPromisified__:!0},w=["arity","length","name","arguments","caller","callee","prototype","__isPromisified__"],C=new RegExp("^(?:"+w.join("|")+")$"),j=function(t){return f.isIdentifier(t)&&"_"!==t.charAt(0)&&"constructor"!==t},E=function(t){return t.replace(/([$])/,"\\$")},k=y?p:c;e.promisify=function(t,e){if("function"!=typeof t)throw new m("expecting a function but got "+f.classString(t));if(i(t))return t;e=Object(e);var n=void 0===e.context?h:e.context,o=!!e.multiArgs,s=u(t,n,o);return f.copyDescriptors(t,s,r),s},e.promisifyAll=function(t,e){if("function"!=typeof t&&"object"!=typeof t)throw new m("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");e=Object(e);var n=!!e.multiArgs,r=e.suffix;"string"!=typeof r&&(r=g);var i=e.filter;"function"!=typeof i&&(i=j);var o=e.promisifier;if("function"!=typeof o&&(o=k),!f.isIdentifier(r))throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");for(var s=f.inheritedDataKeys(t),a=0;a<s.length;++a){var c=t[s[a]];"constructor"!==s[a]&&f.isClass(c)&&(l(c.prototype,r,i,o,n),l(c,r,i,o,n))}return l(t,r,i,o,n)}}},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(t,e,n){"use strict";e.exports=function(e,n,r,i){function o(t){var e,n=!1;if(void 0!==a&&t instanceof a)e=p(t),n=!0;else{var r=u.keys(t),i=r.length;e=new Array(2*i);for(var o=0;i>o;++o){var s=r[o];e[o]=t[s],e[o+i]=s}}this.constructor$(e),this._isMap=n,this._init$(void 0,n?-6:-3)}function s(t){var n,s=r(t);return l(s)?(n=s instanceof e?s._then(e.props,void 0,void 0,void 0,void 0):new o(s).promise(),s instanceof e&&n._propagateFrom(s,2),n):i("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n")}var a,c=t("./util"),l=c.isObject,u=t("./es5");"function"==typeof Map&&(a=Map);var p=function(){function t(t,r){this[e]=t,this[e+n]=r,e++}var e=0,n=0;return function(r){n=r.size,e=0;var i=new Array(2*r.size);return r.forEach(t,i),i}}(),h=function(t){for(var e=new a,n=t.length/2|0,r=0;n>r;++r){var i=t[n+r],o=t[r];e.set(i,o)}return e};c.inherits(o,n),o.prototype._init=function(){},o.prototype._promiseFulfilled=function(t,e){this._values[e]=t;var n=++this._totalResolved;if(n>=this._length){var r;if(this._isMap)r=h(this._values);else{r={};for(var i=this.length(),o=0,s=this.length();s>o;++o)r[this._values[o+i]]=this._values[o]}return this._resolve(r),!0}return!1},o.prototype.shouldCopyValues=function(){return!1},o.prototype.getActualLength=function(t){return t>>1},e.prototype.props=function(){return s(this)},e.props=function(t){return s(t)}}},{"./es5":13,"./util":36}],26:[function(t,e,n){"use strict";function r(t,e,n,r,i){for(var o=0;i>o;++o)n[o+r]=t[o+e],t[o+e]=void 0}function i(t){this._capacity=t,this._length=0,this._front=0}i.prototype._willBeOverCapacity=function(t){return this._capacity<t},i.prototype._pushOne=function(t){var e=this.length();this._checkCapacity(e+1);var n=this._front+e&this._capacity-1;this[n]=t,this._length=e+1},i.prototype.push=function(t,e,n){var r=this.length()+3;if(this._willBeOverCapacity(r))return this._pushOne(t),this._pushOne(e),void this._pushOne(n);var i=this._front+r-3;this._checkCapacity(r);var o=this._capacity-1;this[i+0&o]=t,this[i+1&o]=e,this[i+2&o]=n,this._length=r},i.prototype.shift=function(){var t=this._front,e=this[t];return this[t]=void 0,this._front=t+1&this._capacity-1,this._length--,e},i.prototype.length=function(){return this._length},i.prototype._checkCapacity=function(t){this._capacity<t&&this._resizeTo(this._capacity<<1)},i.prototype._resizeTo=function(t){var e=this._capacity;this._capacity=t;var n=this._front,i=this._length,o=n+i&e-1;r(this,0,this,e,o)},e.exports=i},{}],27:[function(t,e,n){"use strict";e.exports=function(e,n,r,i){function o(t,o){var c=r(t);if(c instanceof e)return a(c);if(t=s.asArray(t),null===t)return i("expecting an array or an iterable object but got "+s.classString(t));var l=new e(n);void 0!==o&&l._propagateFrom(o,3);for(var u=l._fulfill,p=l._reject,h=0,f=t.length;f>h;++h){var _=t[h];(void 0!==_||h in t)&&e.cast(_)._then(u,p,void 0,l,null)}return l}var s=t("./util"),a=function(t){return t.then(function(e){return o(e,t)})};e.race=function(t){return o(t,void 0)},e.prototype.race=function(){return o(this,void 0)}}},{"./util":36}],28:[function(t,e,n){"use strict";e.exports=function(e,n,r,i,o,s){function a(t,n,r,i){this.constructor$(t);var s=h();this._fn=null===s?n:f.domainBind(s,n),void 0!==r&&(r=e.resolve(r),r._attachCancellationCallback(this)),this._initialValue=r,this._currentCancellable=null,i===o?this._eachValues=Array(this._length):0===i?this._eachValues=null:this._eachValues=void 0,this._promise._captureStackTrace(),this._init$(void 0,-5)}function c(t,e){this.isFulfilled()?e._resolve(t):e._reject(t)}function l(t,e,n,i){if("function"!=typeof e)return r("expecting a function but got "+f.classString(e));var o=new a(t,e,n,i);return o.promise()}function u(t){this.accum=t,this.array._gotAccum(t);var n=i(this.value,this.array._promise);return n instanceof e?(this.array._currentCancellable=n,n._then(p,void 0,void 0,this,void 0)):p.call(this,n)}function p(t){var n=this.array,r=n._promise,i=_(n._fn);r._pushContext();var o;o=void 0!==n._eachValues?i.call(r._boundValue(),t,this.index,this.length):i.call(r._boundValue(),this.accum,t,this.index,this.length),o instanceof e&&(n._currentCancellable=o);var a=r._popContext();return s.checkForgottenReturns(o,a,void 0!==n._eachValues?"Promise.each":"Promise.reduce",r),o}var h=e._getDomain,f=t("./util"),_=f.tryCatch;f.inherits(a,n),a.prototype._gotAccum=function(t){void 0!==this._eachValues&&null!==this._eachValues&&t!==o&&this._eachValues.push(t)},a.prototype._eachComplete=function(t){return null!==this._eachValues&&this._eachValues.push(t),this._eachValues},a.prototype._init=function(){},a.prototype._resolveEmptyArray=function(){this._resolve(void 0!==this._eachValues?this._eachValues:this._initialValue)},a.prototype.shouldCopyValues=function(){return!1},a.prototype._resolve=function(t){this._promise._resolveCallback(t),this._values=null},a.prototype._resultCancelled=function(t){return t===this._initialValue?this._cancel():void(this._isResolved()||(this._resultCancelled$(),this._currentCancellable instanceof e&&this._currentCancellable.cancel(),this._initialValue instanceof e&&this._initialValue.cancel()))},a.prototype._iterate=function(t){this._values=t;var n,r,i=t.length;if(void 0!==this._initialValue?(n=this._initialValue,r=0):(n=e.resolve(t[0]),r=1),this._currentCancellable=n,!n.isRejected())for(;i>r;++r){var o={accum:null,value:t[r],index:r,length:i,array:this};n=n._then(u,void 0,void 0,o,void 0)}void 0!==this._eachValues&&(n=n._then(this._eachComplete,void 0,void 0,this,void 0)),n._then(c,c,void 0,n,this)},e.prototype.reduce=function(t,e){return l(this,t,e,null)},e.reduce=function(t,e,n,r){return l(t,e,n,r)}}},{"./util":36}],29:[function(t,e,n){"use strict";var r,i=t("./util"),o=function(){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")},s=i.getNativePromise();if(i.isNode&&"undefined"==typeof MutationObserver){var a=global.setImmediate,c=process.nextTick;r=i.isRecentNode?function(t){a.call(global,t)}:function(t){c.call(process,t)}}else if("function"==typeof s&&"function"==typeof s.resolve){var l=s.resolve();r=function(t){l.then(t)}}else r="undefined"!=typeof MutationObserver&&("undefined"==typeof window||!window.navigator||!window.navigator.standalone&&!window.cordova)&&"classList"in document.documentElement?function(){var t=document.createElement("div"),e={attributes:!0},n=!1,r=document.createElement("div"),i=new MutationObserver(function(){t.classList.toggle("foo"),n=!1});i.observe(r,e);var o=function(){n||(n=!0,r.classList.toggle("foo"))};return function(n){var r=new MutationObserver(function(){r.disconnect(),n()});r.observe(t,e),o()}}():"undefined"!=typeof setImmediate?function(t){setImmediate(t)}:"undefined"!=typeof setTimeout?function(t){setTimeout(t,0)}:o;e.exports=r},{"./util":36
}],30:[function(t,e,n){"use strict";e.exports=function(e,n,r){function i(t){this.constructor$(t)}var o=e.PromiseInspection,s=t("./util");s.inherits(i,n),i.prototype._promiseResolved=function(t,e){this._values[t]=e;var n=++this._totalResolved;return n>=this._length?(this._resolve(this._values),!0):!1},i.prototype._promiseFulfilled=function(t,e){var n=new o;return n._bitField=33554432,n._settledValueField=t,this._promiseResolved(e,n)},i.prototype._promiseRejected=function(t,e){var n=new o;return n._bitField=16777216,n._settledValueField=t,this._promiseResolved(e,n)},e.settle=function(t){return r.deprecated(".settle()",".reflect()"),new i(t).promise()},e.prototype.settle=function(){return e.settle(this)}}},{"./util":36}],31:[function(t,e,n){"use strict";e.exports=function(e,n,r){function i(t){this.constructor$(t),this._howMany=0,this._unwrap=!1,this._initialized=!1}function o(t,e){if((0|e)!==e||0>e)return r("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");var n=new i(t),o=n.promise();return n.setHowMany(e),n.init(),o}var s=t("./util"),a=t("./errors").RangeError,c=t("./errors").AggregateError,l=s.isArray,u={};s.inherits(i,n),i.prototype._init=function(){if(this._initialized){if(0===this._howMany)return void this._resolve([]);this._init$(void 0,-5);var t=l(this._values);!this._isResolved()&&t&&this._howMany>this._canPossiblyFulfill()&&this._reject(this._getRangeError(this.length()))}},i.prototype.init=function(){this._initialized=!0,this._init()},i.prototype.setUnwrap=function(){this._unwrap=!0},i.prototype.howMany=function(){return this._howMany},i.prototype.setHowMany=function(t){this._howMany=t},i.prototype._promiseFulfilled=function(t){return this._addFulfilled(t),this._fulfilled()===this.howMany()?(this._values.length=this.howMany(),1===this.howMany()&&this._unwrap?this._resolve(this._values[0]):this._resolve(this._values),!0):!1},i.prototype._promiseRejected=function(t){return this._addRejected(t),this._checkOutcome()},i.prototype._promiseCancelled=function(){return this._values instanceof e||null==this._values?this._cancel():(this._addRejected(u),this._checkOutcome())},i.prototype._checkOutcome=function(){if(this.howMany()>this._canPossiblyFulfill()){for(var t=new c,e=this.length();e<this._values.length;++e)this._values[e]!==u&&t.push(this._values[e]);return t.length>0?this._reject(t):this._cancel(),!0}return!1},i.prototype._fulfilled=function(){return this._totalResolved},i.prototype._rejected=function(){return this._values.length-this.length()},i.prototype._addRejected=function(t){this._values.push(t)},i.prototype._addFulfilled=function(t){this._values[this._totalResolved++]=t},i.prototype._canPossiblyFulfill=function(){return this.length()-this._rejected()},i.prototype._getRangeError=function(t){var e="Input array must contain at least "+this._howMany+" items but contains only "+t+" items";return new a(e)},i.prototype._resolveEmptyArray=function(){this._reject(this._getRangeError(0))},e.some=function(t,e){return o(t,e)},e.prototype.some=function(t){return o(this,t)},e._SomePromiseArray=i}},{"./errors":12,"./util":36}],32:[function(t,e,n){"use strict";e.exports=function(t){function e(t){void 0!==t?(t=t._target(),this._bitField=t._bitField,this._settledValueField=t._isFateSealed()?t._settledValue():void 0):(this._bitField=0,this._settledValueField=void 0)}e.prototype._settledValue=function(){return this._settledValueField};var n=e.prototype.value=function(){if(!this.isFulfilled())throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue()},r=e.prototype.error=e.prototype.reason=function(){if(!this.isRejected())throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue()},i=e.prototype.isFulfilled=function(){return 0!==(33554432&this._bitField)},o=e.prototype.isRejected=function(){return 0!==(16777216&this._bitField)},s=e.prototype.isPending=function(){return 0===(50397184&this._bitField)},a=e.prototype.isResolved=function(){return 0!==(50331648&this._bitField)};e.prototype.isCancelled=function(){return 0!==(8454144&this._bitField)},t.prototype.__isCancelled=function(){return 65536===(65536&this._bitField)},t.prototype._isCancelled=function(){return this._target().__isCancelled()},t.prototype.isCancelled=function(){return 0!==(8454144&this._target()._bitField)},t.prototype.isPending=function(){return s.call(this._target())},t.prototype.isRejected=function(){return o.call(this._target())},t.prototype.isFulfilled=function(){return i.call(this._target())},t.prototype.isResolved=function(){return a.call(this._target())},t.prototype.value=function(){return n.call(this._target())},t.prototype.reason=function(){var t=this._target();return t._unsetRejectionIsUnhandled(),r.call(t)},t.prototype._value=function(){return this._settledValue()},t.prototype._reason=function(){return this._unsetRejectionIsUnhandled(),this._settledValue()},t.PromiseInspection=e}},{}],33:[function(t,e,n){"use strict";e.exports=function(e,n){function r(t,r){if(u(t)){if(t instanceof e)return t;var i=o(t);if(i===l){r&&r._pushContext();var c=e.reject(i.e);return r&&r._popContext(),c}if("function"==typeof i){if(s(t)){var c=new e(n);return t._then(c._fulfill,c._reject,void 0,c,null),c}return a(t,i,r)}}return t}function i(t){return t.then}function o(t){try{return i(t)}catch(e){return l.e=e,l}}function s(t){try{return p.call(t,"_promise0")}catch(e){return!1}}function a(t,r,i){function o(t){a&&(a._resolveCallback(t),a=null)}function s(t){a&&(a._rejectCallback(t,p,!0),a=null)}var a=new e(n),u=a;i&&i._pushContext(),a._captureStackTrace(),i&&i._popContext();var p=!0,h=c.tryCatch(r).call(t,o,s);return p=!1,a&&h===l&&(a._rejectCallback(h.e,!0,!0),a=null),u}var c=t("./util"),l=c.errorObj,u=c.isObject,p={}.hasOwnProperty;return r}},{"./util":36}],34:[function(t,e,n){"use strict";e.exports=function(e,n,r){function i(t){this.handle=t}function o(t){return clearTimeout(this.handle),t}function s(t){throw clearTimeout(this.handle),t}var a=t("./util"),c=e.TimeoutError;i.prototype._resultCancelled=function(){clearTimeout(this.handle)};var l=function(t){return u(+this).thenReturn(t)},u=e.delay=function(t,o){var s,a;return void 0!==o?(s=e.resolve(o)._then(l,null,null,t,void 0),r.cancellation()&&o instanceof e&&s._setOnCancel(o)):(s=new e(n),a=setTimeout(function(){s._fulfill()},+t),r.cancellation()&&s._setOnCancel(new i(a)),s._captureStackTrace()),s._setAsyncGuaranteed(),s};e.prototype.delay=function(t){return u(t,this)};var p=function(t,e,n){var r;r="string"!=typeof e?e instanceof Error?e:new c("operation timed out"):new c(e),a.markAsOriginatingFromRejection(r),t._attachExtraTrace(r),t._reject(r),null!=n&&n.cancel()};e.prototype.timeout=function(t,e){t=+t;var n,a,c=new i(setTimeout(function(){n.isPending()&&p(n,e,a)},t));return r.cancellation()?(a=this.then(),n=a._then(o,s,void 0,c,void 0),n._setOnCancel(c)):n=this._then(o,s,void 0,c,void 0),n}}},{"./util":36}],35:[function(t,e,n){"use strict";e.exports=function(e,n,r,i,o,s){function a(t){setTimeout(function(){throw t},0)}function c(t){var e=r(t);return e!==t&&"function"==typeof t._isDisposable&&"function"==typeof t._getDisposer&&t._isDisposable()&&e._setDisposable(t._getDisposer()),e}function l(t,n){function i(){if(s>=l)return u._fulfill();var o=c(t[s++]);if(o instanceof e&&o._isDisposable()){try{o=r(o._getDisposer().tryDispose(n),t.promise)}catch(p){return a(p)}if(o instanceof e)return o._then(i,a,null,null,null)}i()}var s=0,l=t.length,u=new e(o);return i(),u}function u(t,e,n){this._data=t,this._promise=e,this._context=n}function p(t,e,n){this.constructor$(t,e,n)}function h(t){return u.isDisposer(t)?(this.resources[this.index]._setDisposable(t),t.promise()):t}function f(t){this.length=t,this.promise=null,this[t-1]=null}var _=t("./util"),d=t("./errors").TypeError,v=t("./util").inherits,y=_.errorObj,m=_.tryCatch,g={};u.prototype.data=function(){return this._data},u.prototype.promise=function(){return this._promise},u.prototype.resource=function(){return this.promise().isFulfilled()?this.promise().value():g},u.prototype.tryDispose=function(t){var e=this.resource(),n=this._context;void 0!==n&&n._pushContext();var r=e!==g?this.doDispose(e,t):null;return void 0!==n&&n._popContext(),this._promise._unsetDisposable(),this._data=null,r},u.isDisposer=function(t){return null!=t&&"function"==typeof t.resource&&"function"==typeof t.tryDispose},v(p,u),p.prototype.doDispose=function(t,e){var n=this.data();return n.call(t,t,e)},f.prototype._resultCancelled=function(){for(var t=this.length,n=0;t>n;++n){var r=this[n];r instanceof e&&r.cancel()}},e.using=function(){var t=arguments.length;if(2>t)return n("you must pass at least 2 arguments to Promise.using");var i=arguments[t-1];if("function"!=typeof i)return n("expecting a function but got "+_.classString(i));var o,a=!0;2===t&&Array.isArray(arguments[0])?(o=arguments[0],t=o.length,a=!1):(o=arguments,t--);for(var c=new f(t),p=0;t>p;++p){var d=o[p];if(u.isDisposer(d)){var v=d;d=d.promise(),d._setDisposable(v)}else{var g=r(d);g instanceof e&&(d=g._then(h,null,null,{resources:c,index:p},void 0))}c[p]=d}for(var b=new Array(c.length),p=0;p<b.length;++p)b[p]=e.resolve(c[p]).reflect();var w=e.all(b).then(function(t){for(var e=0;e<t.length;++e){var n=t[e];if(n.isRejected())return y.e=n.error(),y;if(!n.isFulfilled())return void w.cancel();t[e]=n.value()}C._pushContext(),i=m(i);var r=a?i.apply(void 0,t):i(t),o=C._popContext();return s.checkForgottenReturns(r,o,"Promise.using",C),r}),C=w.lastly(function(){var t=new e.PromiseInspection(w);return l(c,t)});return c.promise=C,C._setOnCancel(c),C},e.prototype._setDisposable=function(t){this._bitField=131072|this._bitField,this._disposer=t},e.prototype._isDisposable=function(){return(131072&this._bitField)>0},e.prototype._getDisposer=function(){return this._disposer},e.prototype._unsetDisposable=function(){this._bitField=-131073&this._bitField,this._disposer=void 0},e.prototype.disposer=function(t){if("function"==typeof t)return new p(t,this,i());throw new d}}},{"./errors":12,"./util":36}],36:[function(t,e,n){"use strict";function r(){try{var t=P;return P=null,t.apply(this,arguments)}catch(e){return x.e=e,x}}function i(t){return P=t,r}function o(t){return null==t||t===!0||t===!1||"string"==typeof t||"number"==typeof t}function s(t){return"function"==typeof t||"object"==typeof t&&null!==t}function a(t){return o(t)?new Error(v(t)):t}function c(t,e){var n,r=t.length,i=new Array(r+1);for(n=0;r>n;++n)i[n]=t[n];return i[n]=e,i}function l(t,e,n){if(!F.isES5)return{}.hasOwnProperty.call(t,e)?t[e]:void 0;var r=Object.getOwnPropertyDescriptor(t,e);return null!=r?null==r.get&&null==r.set?r.value:n:void 0}function u(t,e,n){if(o(t))return t;var r={value:n,configurable:!0,enumerable:!1,writable:!0};return F.defineProperty(t,e,r),t}function p(t){throw t}function h(t){try{if("function"==typeof t){var e=F.names(t.prototype),n=F.isES5&&e.length>1,r=e.length>0&&!(1===e.length&&"constructor"===e[0]),i=A.test(t+"")&&F.names(t).length>0;if(n||r||i)return!0}return!1}catch(o){return!1}}function f(t){function e(){}function n(){return typeof r.foo}e.prototype=t;var r=new e;return n(),n(),t}function _(t){return D.test(t)}function d(t,e,n){for(var r=new Array(t),i=0;t>i;++i)r[i]=e+i+n;return r}function v(t){try{return t+""}catch(e){return"[no string representation]"}}function y(t){return t instanceof Error||null!==t&&"object"==typeof t&&"string"==typeof t.message&&"string"==typeof t.name}function m(t){try{u(t,"isOperational",!0)}catch(e){}}function g(t){return null==t?!1:t instanceof Error.__BluebirdErrorTypes__.OperationalError||t.isOperational===!0}function b(t){return y(t)&&F.propertyIsWritable(t,"stack")}function w(t){return{}.toString.call(t)}function C(t,e,n){for(var r=F.names(t),i=0;i<r.length;++i){var o=r[i];if(n(o))try{F.defineProperty(e,o,F.getDescriptor(t,o))}catch(s){}}}function j(t){return H?process.env[t]:void 0}function E(){if("function"==typeof Promise)try{var t=new Promise(function(){});if("[object Promise]"==={}.toString.call(t))return Promise}catch(e){}}function k(t,e){return t.bind(e)}var F=t("./es5"),T="undefined"==typeof navigator,x={e:{}},P,S="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:void 0!==this?this:null,R=function(t,e){function n(){this.constructor=t,this.constructor$=e;for(var n in e.prototype)r.call(e.prototype,n)&&"$"!==n.charAt(n.length-1)&&(this[n+"$"]=e.prototype[n])}var r={}.hasOwnProperty;return n.prototype=e.prototype,t.prototype=new n,t.prototype},O=function(){var t=[Array.prototype,Object.prototype,Function.prototype],e=function(e){for(var n=0;n<t.length;++n)if(t[n]===e)return!0;return!1};if(F.isES5){var n=Object.getOwnPropertyNames;return function(t){for(var r=[],i=Object.create(null);null!=t&&!e(t);){var o;try{o=n(t)}catch(s){return r}for(var a=0;a<o.length;++a){var c=o[a];if(!i[c]){i[c]=!0;var l=Object.getOwnPropertyDescriptor(t,c);null!=l&&null==l.get&&null==l.set&&r.push(c)}}t=F.getPrototypeOf(t)}return r}}var r={}.hasOwnProperty;return function(n){if(e(n))return[];var i=[];t:for(var o in n)if(r.call(n,o))i.push(o);else{for(var s=0;s<t.length;++s)if(r.call(t[s],o))continue t;i.push(o)}return i}}(),A=/this\s*\.\s*\S+\s*=/,D=/^[a-z$_][a-z$_0-9]*$/i,V=function(){return"stack"in new Error?function(t){return b(t)?t:new Error(v(t))}:function(t){if(b(t))return t;try{throw new Error(v(t))}catch(e){return e}}}(),I=function(t){return F.isArray(t)?t:null};if("undefined"!=typeof Symbol&&Symbol.iterator){var L="function"==typeof Array.from?function(t){return Array.from(t)}:function(t){for(var e,n=[],r=t[Symbol.iterator]();!(e=r.next()).done;)n.push(e.value);return n};I=function(t){return F.isArray(t)?t:null!=t&&"function"==typeof t[Symbol.iterator]?L(t):null}}var N="undefined"!=typeof process&&"[object process]"===w(process).toLowerCase(),H="undefined"!=typeof process&&"undefined"!=typeof process.env,B={isClass:h,isIdentifier:_,inheritedDataKeys:O,getDataPropertyOrDefault:l,thrower:p,isArray:F.isArray,asArray:I,notEnumerableProp:u,isPrimitive:o,isObject:s,isError:y,canEvaluate:T,errorObj:x,tryCatch:i,inherits:R,withAppended:c,maybeWrapAsError:a,toFastProperties:f,filledRange:d,toString:v,canAttachTrace:b,ensureErrorObject:V,originatesFromRejection:g,markAsOriginatingFromRejection:m,classString:w,copyDescriptors:C,hasDevTools:"undefined"!=typeof chrome&&chrome&&"function"==typeof chrome.loadTimes,isNode:N,hasEnvVariables:H,env:j,global:S,getNativePromise:E,domainBind:k};B.isRecentNode=B.isNode&&function(){var t;return process.versions&&process.versions.node?t=process.versions.node.split(".").map(Number):process.version&&(t=process.version.split(".").map(Number)),0===t[0]&&t[1]>10||t[0]>0}(),B.isNode&&B.toFastProperties(process);try{throw new Error}catch(U){B.lastLineError=U}e.exports=B},{"./es5":13}]},{},[4])(4)}),"undefined"!=typeof window&&null!==window?window.P=window.Promise:"undefined"!=typeof self&&null!==self&&(self.P=self.Promise);

/*
 The TaxamoDropInUI function takes the transactionData (can be updated on the go) and globalOpts as input.

 The transactionData field can be updated by field changes (which can trigger a re-calculation of tax) or with code invocations.

 globalOpts params:
    * allowOverrides: boolean, default true.
      When set to true then globalOpts can be overridden with values set via the Dashboard.

    * clearBuyerTaxNumberOnBillingCountryChange: boolean, default false.
      When set to true then buyer tax number field will be cleared if `buyer_tax_number_valid` is true in
      the tax calculate response and billing country does not match detected country of the provided tax number.

    * disableBillingCountryOnBuyerTaxNumberValid: boolean, default true.
      When set to true then billing country input will be blocked when `buyer_tax_number_valid` is true in
      the tax calculate response.

    * syncBillingCountryWith: string, default: undefined.
      supported values:
        - "countries.by_tax_number"
      If syncBillingCountryWith is set to one of the supported values it will update the billing country field when compared countries do not match.
*/
var TaxamoDropInUI = function(transactionData, globalOpts) {

var countries=[{n:"Afghanistan",c:"AF"},{n:"Åland Islands",c:"AX"},{n:"Albania",c:"AL"},{n:"Algeria",c:"DZ"},{n:"American Samoa",c:"AS"},{n:"Andorra",c:"AD"},{n:"Angola",c:"AO"},{n:"Anguilla",c:"AI"},{n:"Antarctica",c:"AQ"},{n:"Antigua and Barbuda",c:"AG"},{n:"Argentina",c:"AR"},{n:"Armenia",c:"AM"},{n:"Aruba",c:"AW"},{n:"Australia",c:"AU"},{n:"Austria",c:"AT"},{n:"Azerbaijan",c:"AZ"},{n:"Bahamas",c:"BS"},{n:"Bahrain",c:"BH"},{n:"Bangladesh",c:"BD"},{n:"Barbados",c:"BB"},{n:"Belarus",c:"BY"},{n:"Belgium",c:"BE"},{n:"Belize",c:"BZ"},{n:"Benin",c:"BJ"},{n:"Bermuda",c:"BM"},{n:"Bhutan",c:"BT"},{n:"Bolivia",c:"BO"},{n:"Bonaire",c:"BQ"},{n:"Bosnia and Herzegovina",c:"BA"},{n:"Botswana",c:"BW"},{n:"Bouvet Island",c:"BV"},{n:"Brazil",c:"BR"},{n:"British Indian Ocean Territory",c:"IO"},{n:"British Virgin Islands",c:"VG"},{n:"Brunei",c:"BN"},{n:"Bulgaria",c:"BG"},{n:"Burkina Faso",c:"BF"},{n:"Burundi",c:"BI"},{n:"Cambodia",c:"KH"},{n:"Cameroon",c:"CM"},{n:"Canada",c:"CA",regions:[{n:"Alberta",c:"AB"},{n:"British Columbia",c:"BC"},{n:"Manitoba",c:"MB"},{n:"New Brunswick",c:"NB"},{n:"Newfoundland and Labrador",c:"NL"},{n:"Nova Scotia",c:"NS"},{n:"Nunavut",c:"NU"},{n:"Northwest Territories",c:"NT"},{n:"Ontario",c:"ON"},{n:"Prince Edward Island",c:"PE"},{n:"Quebec",c:"QC"},{n:"Saskatchewan",c:"SK"},{n:"Yukon",c:"YT"}]},{n:"Cape Verde",c:"CV"},{n:"Cayman Islands",c:"KY"},{n:"Central African Republic",c:"CF"},{n:"Chad",c:"TD"},{n:"Chile",c:"CL"},{n:"China",c:"CN"},{n:"Christmas Island",c:"CX"},{n:"Cocos (Keeling) Islands",c:"CC"},{n:"Colombia",c:"CO"},{n:"Comoros",c:"KM"},{n:"Republic of the Congo",c:"CG"},{n:"Democratic Republic of the Congo",c:"CD"},{n:"Cook Islands",c:"CK"},{n:"Costa Rica",c:"CR"},{n:"Côte d'Ivoire",c:"CI"},{n:"Croatia",c:"HR"},{n:"Cuba",c:"CU"},{n:"Curaçao",c:"CW"},{n:"Cyprus",c:"CY"},{n:"Czech Republic",c:"CZ"},{n:"Denmark",c:"DK"},{n:"Djibouti",c:"DJ"},{n:"Dominica",c:"DM"},{n:"Dominican Republic",c:"DO"},{n:"Ecuador",c:"EC"},{n:"Egypt",c:"EG"},{n:"El Salvador",c:"SV"},{n:"Equatorial Guinea",c:"GQ"},{n:"Eritrea",c:"ER"},{n:"Estonia",c:"EE"},{n:"Ethiopia",c:"ET"},{n:"Falkland Islands",c:"FK"},{n:"Faroe Islands",c:"FO"},{n:"Fiji",c:"FJ"},{n:"Finland",c:"FI"},{n:"France",c:"FR"},{n:"French Guiana",c:"GF"},{n:"French Polynesia",c:"PF"},{n:"French Southern and Antarctic Lands",c:"TF"},{n:"Gabon",c:"GA"},{n:"Gambia",c:"GM"},{n:"Georgia",c:"GE"},{n:"Germany",c:"DE"},{n:"Ghana",c:"GH"},{n:"Gibraltar",c:"GI"},{n:"Greece",c:"GR"},{n:"Greenland",c:"GL"},{n:"Grenada",c:"GD"},{n:"Guadeloupe",c:"GP"},{n:"Guam",c:"GU"},{n:"Guatemala",c:"GT"},{n:"Guernsey",c:"GG"},{n:"Guinea",c:"GN"},{n:"Guinea-Bissau",c:"GW"},{n:"Guyana",c:"GY"},{n:"Haiti",c:"HT"},{n:"Heard Island and McDonald Islands",c:"HM"},{n:"Vatican City",c:"VA"},{n:"Honduras",c:"HN"},{n:"Hong Kong",c:"HK"},{n:"Hungary",c:"HU"},{n:"Iceland",c:"IS"},{n:"India",c:"IN",regions:[{n:"Andhra Pradesh",c:"AP"},{n:"Arunachal Pradesh",c:"AR"},{n:"Assam",c:"AS"},{n:"Bihar",c:"BR"},{n:"Chhattisgarh",c:"CT"},{n:"Goa",c:"GA"},{n:"Gujarat",c:"GJ"},{n:"Haryana",c:"HR"},{n:"Himachal Pradesh",c:"HP"},{n:"Jammu and Kashmir",c:"JK"},{n:"Jharkhand",c:"JH"},{n:"Karnataka",c:"KA"},{n:"Kerala",c:"KL"},{n:"Ladakh",c:"LA"},{n:"Madhya Pradesh",c:"MP"},{n:"Maharashtra",c:"MH"},{n:"Manipur",c:"MN"},{n:"Meghalaya",c:"ML"},{n:"Mizoram",c:"MZ"},{n:"Nagaland",c:"NL"},{n:"Odisha",c:"OR"},{n:"Punjab",c:"PB"},{n:"Rajasthan",c:"RJ"},{n:"Sikkim",c:"SK"},{n:"Tamil Nadu",c:"TN"},{n:"Telangana",c:"TG"},{n:"Tripura",c:"TR"},{n:"Uttar Pradesh",c:"UP"},{n:"Uttarakhand",c:"UT"},{n:"West Bengal",c:"WB"},{n:"Andaman and Nicobar Islands",c:"AN"},{n:"Chandigarh",c:"CH"},{n:"Dadra and Nagar Haveli",c:"DN"},{n:"Daman and Diu",c:"DD"},{n:"Lakshadweep",c:"LD"},{n:"National Capital Territory of Delhi",c:"DL"},{n:"Puducherry",c:"PY"}]},{n:"Indonesia",c:"ID"},{n:"Iran",c:"IR"},{n:"Iraq",c:"IQ"},{n:"Ireland",c:"IE"},{n:"Isle of Man",c:"IM"},{n:"Israel",c:"IL"},{n:"Italy",c:"IT"},{n:"Jamaica",c:"JM"},{n:"Japan",c:"JP"},{n:"Jersey",c:"JE"},{n:"Jordan",c:"JO"},{n:"Kazakhstan",c:"KZ"},{n:"Kenya",c:"KE"},{n:"Kiribati",c:"KI"},{n:"Kosovo",c:"XK"},{n:"Kuwait",c:"KW"},{n:"Kyrgyzstan",c:"KG"},{n:"Laos",c:"LA"},{n:"Latvia",c:"LV"},{n:"Lebanon",c:"LB"},{n:"Lesotho",c:"LS"},{n:"Liberia",c:"LR"},{n:"Libya",c:"LY"},{n:"Liechtenstein",c:"LI"},{n:"Lithuania",c:"LT"},{n:"Luxembourg",c:"LU"},{n:"Macau",c:"MO"},{n:"Macedonia",c:"MK"},{n:"Madagascar",c:"MG"},{n:"Malawi",c:"MW"},{n:"Malaysia",c:"MY"},{n:"Maldives",c:"MV"},{n:"Mali",c:"ML"},{n:"Malta",c:"MT"},{n:"Marshall Islands",c:"MH"},{n:"Martinique",c:"MQ"},{n:"Mauritania",c:"MR"},{n:"Mauritius",c:"MU"},{n:"Mayotte",c:"YT"},{n:"Mexico",c:"MX"},{n:"Micronesia",c:"FM"},{n:"Moldova",c:"MD"},{n:"Monaco",c:"MC"},{n:"Mongolia",c:"MN"},{n:"Montenegro",c:"ME"},{n:"Montserrat",c:"MS"},{n:"Morocco",c:"MA"},{n:"Mozambique",c:"MZ"},{n:"Myanmar",c:"MM"},{n:"Namibia",c:"NA"},{n:"Nauru",c:"NR"},{n:"Nepal",c:"NP"},{n:"Netherlands",c:"NL"},{n:"New Caledonia",c:"NC"},{n:"New Zealand",c:"NZ"},{n:"Nicaragua",c:"NI"},{n:"Niger",c:"NE"},{n:"Nigeria",c:"NG"},{n:"Niue",c:"NU"},{n:"Norfolk Island",c:"NF"},{n:"North Korea",c:"KP"},{n:"Northern Mariana Islands",c:"MP"},{n:"Norway",c:"NO"},{n:"Oman",c:"OM"},{n:"Pakistan",c:"PK"},{n:"Palau",c:"PW"},{n:"Palestine",c:"PS"},{n:"Panama",c:"PA"},{n:"Papua New Guinea",c:"PG"},{n:"Paraguay",c:"PY"},{n:"Peru",c:"PE"},{n:"Philippines",c:"PH"},{n:"Pitcairn Islands",c:"PN"},{n:"Poland",c:"PL"},{n:"Portugal",c:"PT"},{n:"Puerto Rico",c:"PR"},{n:"Qatar",c:"QA"},{n:"Réunion",c:"RE"},{n:"Romania",c:"RO"},{n:"Russia",c:"RU"},{n:"Rwanda",c:"RW"},{n:"Saint Barthélemy",c:"BL"},{n:"Saint Helena",c:"SH"},{n:"Saint Kitts and Nevis",c:"KN"},{n:"Saint Lucia",c:"LC"},{n:"Saint Martin",c:"MF"},{n:"Saint Pierre and Miquelon",c:"PM"},{n:"Saint Vincent and the Grenadines",c:"VC"},{n:"Samoa",c:"WS"},{n:"San Marino",c:"SM"},{n:"São Tomé and Príncipe",c:"ST"},{n:"Saudi Arabia",c:"SA"},{n:"Senegal",c:"SN"},{n:"Serbia",c:"RS"},{n:"Seychelles",c:"SC"},{n:"Sierra Leone",c:"SL"},{n:"Singapore",c:"SG"},{n:"Sint Maarten",c:"SX"},{n:"Slovakia",c:"SK"},{n:"Slovenia",c:"SI"},{n:"Solomon Islands",c:"SB"},{n:"Somalia",c:"SO"},{n:"South Africa",c:"ZA"},{n:"South Georgia",c:"GS"},{n:"South Korea",c:"KR"},{n:"South Sudan",c:"SS"},{n:"Spain",c:"ES"},{n:"Sri Lanka",c:"LK"},{n:"Sudan",c:"SD"},{n:"Suriname",c:"SR"},{n:"Svalbard and Jan Mayen",c:"SJ"},{n:"Swaziland",c:"SZ"},{n:"Sweden",c:"SE"},{n:"Switzerland",c:"CH"},{n:"Syria",c:"SY"},{n:"Taiwan",c:"TW"},{n:"Tajikistan",c:"TJ"},{n:"Tanzania",c:"TZ"},{n:"Thailand",c:"TH"},{n:"Timor-Leste",c:"TL"},{n:"Togo",c:"TG"},{n:"Tokelau",c:"TK"},{n:"Tonga",c:"TO"},{n:"Trinidad and Tobago",c:"TT"},{n:"Tunisia",c:"TN"},{n:"Turkey",c:"TR"},{n:"Turkmenistan",c:"TM"},{n:"Turks and Caicos Islands",c:"TC"},{n:"Tuvalu",c:"TV"},{n:"Uganda",c:"UG"},{n:"Ukraine",c:"UA"},{n:"United Arab Emirates",c:"AE",regions:[{n:"Abu Dhabi",c:"AZ"},{n:"Ajman",c:"AJ"},{n:"Fujairah",c:"FU"},{n:"Sharjah",c:"SH"},{n:"Dubai",c:"DU"},{n:"Ras al-Khaimah",c:"RK"},{n:"Umm al-Quwain",c:"UQ"}]},{n:"United Kingdom",c:"GB"},{n:"United States",c:"US",regions:[{n:"Alabama",c:"AL"},{n:"Alaska",c:"AK"},{n:"American Samoa",c:"AS"},{n:"Arizona",c:"AZ"},{n:"Arkansas",c:"AR"},{n:"California",c:"CA"},{n:"Colorado",c:"CO"},{n:"Connecticut",c:"CT"},{n:"Delaware",c:"DE"},{n:"District Of Columbia",c:"DC"},{n:"Federated States Of Micronesia",c:"FM"},{n:"Florida",c:"FL"},{n:"Georgia",c:"GA"},{n:"Guam",c:"GU"},{n:"Hawaii",c:"HI"},{n:"Idaho",c:"ID"},{n:"Illinois",c:"IL"},{n:"Indiana",c:"IN"},{n:"Iowa",c:"IA"},{n:"Kansas",c:"KS"},{n:"Kentucky",c:"KY"},{n:"Louisiana",c:"LA"},{n:"Maine",c:"ME"},{n:"Marshall Islands",c:"MH"},{n:"Maryland",c:"MD"},{n:"Massachusetts",c:"MA"},{n:"Michigan",c:"MI"},{n:"Minnesota",c:"MN"},{n:"Mississippi",c:"MS"},{n:"Missouri",c:"MO"},{n:"Montana",c:"MT"},{n:"Nebraska",c:"NE"},{n:"Nevada",c:"NV"},{n:"New Hampshire",c:"NH"},{n:"New Jersey",c:"NJ"},{n:"New Mexico",c:"NM"},{n:"New York",c:"NY"},{n:"North Carolina",c:"NC"},{n:"North Dakota",c:"ND"},{n:"Northern Mariana Islands",c:"MP"},{n:"Ohio",c:"OH"},{n:"Oklahoma",c:"OK"},{n:"Oregon",c:"OR"},{n:"Palau",c:"PW"},{n:"Pennsylvania",c:"PA"},{n:"Puerto Rico",c:"PR"},{n:"Rhode Island",c:"RI"},{n:"South Carolina",c:"SC"},{n:"South Dakota",c:"SD"},{n:"Tennessee",c:"TN"},{n:"Texas",c:"TX"},{n:"Utah",c:"UT"},{n:"Vermont",c:"VT"},{n:"Virgin Islands",c:"VI"},{n:"Virginia",c:"VA"},{n:"Washington",c:"WA"},{n:"West Virginia",c:"WV"},{n:"Wisconsin",c:"WI"},{n:"Wyoming",c:"WY"},{n:"Armed Forces Americas",c:"AA"},{n:"Armed Forces Europe",c:"AE"},{n:"Armed Forces Pacific",c:"AP"}]},{n:"United States Minor Outlying Islands",c:"UM"},{n:"United States Virgin Islands",c:"VI"},{n:"Uruguay",c:"UY"},{n:"Uzbekistan",c:"UZ"},{n:"Vanuatu",c:"VU"},{n:"Venezuela",c:"VE"},{n:"Vietnam",c:"VN"},{n:"Wallis and Futuna",c:"WF"},{n:"Western Sahara",c:"EH"},{n:"Yemen",c:"YE"},{n:"Zambia",c:"ZM"},{n:"Zimbabwe",c:"ZW"}];
var countriesMap = countries.reduce(function(m, x) {
    m[x.c] = x; //other possible idea - only go through countries with regions list for this map
    return m;
}, {});

    var u = {};
    var taxResult = null;
    var setGlobalOptIfUndefined = function (field, defaultValue) {
        if (globalOpts[field] === undefined) {
            globalOpts[field] = defaultValue;
        }
    }
    setGlobalOptIfUndefined("allowOverrides", true);
    setGlobalOptIfUndefined("clearBuyerTaxNumberOnBillingCountryChange", false);
    setGlobalOptIfUndefined("disableBillingCountryOnBuyerTaxNumberValid", true);

    var setGlobalOptFromOverrides = function (field, overrides) {
        if (overrides && overrides[field] !== undefined) {
            globalOpts[field] = overrides[field];
        }
    };
    var overrideGlobalOpts = function(taxResult) {
        if (globalOpts.allowOverrides) {
            var overrides = u.getTaxResultFieldValueFn("ui_configuration.global_opts_overrides")(taxResult) || {};
            setGlobalOptFromOverrides("clearBuyerTaxNumberOnBillingCountryChange", overrides);
            setGlobalOptFromOverrides("disableBillingCountryOnBuyerTaxNumberValid", overrides);
            setGlobalOptFromOverrides("syncBillingCountryWith", overrides);
        }
    };
    /*
The MIT License (MIT)

Copyright (c) 2017 Leo Horie

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
(function(){function B(b,d,f,g,e,n){return{tag:b,key:d,attrs:f,children:g,text:e,dom:n,domSize:void 0,state:void 0,_state:void 0,events:void 0,instance:void 0,skip:!1}}function N(b){for(var d in b)if(G.call(b,d))return!1;return!0}function D(b){var d=arguments[1],f=2;if(null==b||"string"!==typeof b&&"function"!==typeof b&&"function"!==typeof b.view)throw Error("The selector must be either a string or a component.");if("string"===typeof b){var g;if(!(g=O[b])){var e="div";for(var n=[],h={};g=Q.exec(b);){var q=
g[1],m=g[2];""===q&&""!==m?e=m:"#"===q?h.id=m:"."===q?n.push(m):"["===g[3][0]&&((q=g[6])&&(q=q.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===g[4]?n.push(q):h[g[4]]=""===q?q:q||!0)}0<n.length&&(h.className=n.join(" "));g=O[b]={tag:e,attrs:h}}}if(null==d)d={};else if("object"!==typeof d||null!=d.tag||Array.isArray(d))d={},f=1;if(arguments.length===f+1)e=arguments[f],Array.isArray(e)||(e=[e]);else for(e=[];f<arguments.length;)e.push(arguments[f++]);f=B.normalizeChildren(e);if("string"===
typeof b){e=!1;var k,t;n=d.className||d["class"];if(!N(g.attrs)&&!N(d)){h={};for(var a in d)G.call(d,a)&&(h[a]=d[a]);d=h}for(a in g.attrs)G.call(g.attrs,a)&&(d[a]=g.attrs[a]);void 0!==n&&(void 0!==d["class"]&&(d["class"]=void 0,d.className=n),null!=g.attrs.className&&(d.className=g.attrs.className+" "+n));for(a in d)if(G.call(d,a)&&"key"!==a){e=!0;break}Array.isArray(f)&&1===f.length&&null!=f[0]&&"#"===f[0].tag?t=f[0].children:k=f;return B(g.tag,d.key,e?d:void 0,k,t)}return B(b,d.key,d,f)}function R(b){var d=
0,f=null,g="function"===typeof requestAnimationFrame?requestAnimationFrame:setTimeout;return function(){var e=Date.now();0===d||16<=e-d?(d=e,b()):null===f&&(f=g(function(){f=null;b();d=Date.now()},16-(e-d)))}}B.normalize=function(b){return Array.isArray(b)?B("[",void 0,void 0,B.normalizeChildren(b),void 0,void 0):null!=b&&"object"!==typeof b?B("#",void 0,void 0,!1===b?"":b,void 0,void 0):b};B.normalizeChildren=function(b){for(var d=0;d<b.length;d++)b[d]=B.normalize(b[d]);return b};var Q=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,
O={},G={}.hasOwnProperty;D.trust=function(b){null==b&&(b="");return B("<",void 0,void 0,b,void 0,void 0)};D.fragment=function(b,d){return B("[",b.key,b,B.normalizeChildren(d),void 0,void 0)};var x=function(b){function d(b,a){return function E(d){var h;try{if(!a||null==d||"object"!==typeof d&&"function"!==typeof d||"function"!==typeof(h=d.then))k(function(){a||0!==b.length||console.error("Possible unhandled promise rejection:",d);for(var f=0;f<b.length;f++)b[f](d);e.length=0;n.length=0;m.state=a;m.retry=
function(){E(d)}});else{if(d===g)throw new TypeError("Promise can't be resolved w/ itself");f(h.bind(d))}}catch(S){q(S)}}}function f(b){function a(a){return function(b){0<d++||a(b)}}var d=0,f=a(q);try{b(a(h),f)}catch(E){f(E)}}if(!(this instanceof x))throw Error("Promise must be called with `new`");if("function"!==typeof b)throw new TypeError("executor must be a function");var g=this,e=[],n=[],h=d(e,!0),q=d(n,!1),m=g._instance={resolvers:e,rejectors:n},k="function"===typeof setImmediate?setImmediate:
setTimeout;f(b)};x.prototype.then=function(b,d){function f(b,d,f,h){d.push(function(a){if("function"!==typeof b)f(a);else try{e(b(a))}catch(w){n&&n(w)}});"function"===typeof g.retry&&h===g.state&&g.retry()}var g=this._instance,e,n,h=new x(function(b,d){e=b;n=d});f(b,g.resolvers,e,!0);f(d,g.rejectors,n,!1);return h};x.prototype["catch"]=function(b){return this.then(null,b)};x.resolve=function(b){return b instanceof x?b:new x(function(d){d(b)})};x.reject=function(b){return new x(function(d,f){f(b)})};
x.all=function(b){return new x(function(d,f){var g=b.length,e=0,n=[];if(0===b.length)d([]);else for(var h=0;h<b.length;h++)(function(h){function m(b){e++;n[h]=b;e===g&&d(n)}null==b[h]||"object"!==typeof b[h]&&"function"!==typeof b[h]||"function"!==typeof b[h].then?m(b[h]):b[h].then(m,f)})(h)})};x.race=function(b){return new x(function(d,f){for(var g=0;g<b.length;g++)b[g].then(d,f)})};"undefined"!==typeof window?("undefined"===typeof window.Promise&&(window.Promise=x),x=window.Promise):"undefined"!==
typeof global&&("undefined"===typeof global.Promise&&(global.Promise=x),x=global.Promise);var F=function(b){function d(b,g){if(Array.isArray(g))for(var e=0;e<g.length;e++)d(b+"["+e+"]",g[e]);else if("[object Object]"===Object.prototype.toString.call(g))for(e in g)d(b+"["+e+"]",g[e]);else f.push(encodeURIComponent(b)+(null!=g&&""!==g?"="+encodeURIComponent(g):""))}if("[object Object]"!==Object.prototype.toString.call(b))return"";var f=[],g;for(g in b)d(g,b[g]);return f.join("&")},T=/^file:\/\//i,L=
function(b,d){function f(){function a(){0===--b&&"function"===typeof t&&t()}var b=0;return function u(d){var f=d.then;d.then=function(){b++;var e=f.apply(d,arguments);e.then(a,function(d){a();if(0===b)throw d;});return u(e)};return d}}function g(a,b){if("string"===typeof a){var d=a;a=b||{};null==a.url&&(a.url=d)}return a}function e(a,b){if(null==b)return a;for(var d=a.match(/:[^\/]+/gi)||[],f=0;f<d.length;f++){var e=d[f].slice(1);null!=b[e]&&(a=a.replace(d[f],b[e]))}return a}function n(a,b){var d=
F(b);if(""!==d){var f=0>a.indexOf("?")?"?":"&";a+=f+d}return a}function h(a){try{return""!==a?JSON.parse(a):null}catch(w){throw Error(a);}}function q(a){return a.responseText}function m(a,b){if("function"===typeof a)if(Array.isArray(b))for(var d=0;d<b.length;d++)b[d]=new a(b[d]);else return new a(b);return b}var k=0,t;return{request:function(a,k){var t=f();a=g(a,k);var w=new d(function(d,f){null==a.method&&(a.method="GET");a.method=a.method.toUpperCase();var g="GET"===a.method||"TRACE"===a.method?
!1:"boolean"===typeof a.useBody?a.useBody:!0;"function"!==typeof a.serialize&&(a.serialize="undefined"!==typeof FormData&&a.data instanceof FormData?function(a){return a}:JSON.stringify);"function"!==typeof a.deserialize&&(a.deserialize=h);"function"!==typeof a.extract&&(a.extract=q);a.url=e(a.url,a.data);g?a.data=a.serialize(a.data):a.url=n(a.url,a.data);var k=new b.XMLHttpRequest,t=!1,w=k.abort;k.abort=function(){t=!0;w.call(k)};k.open(a.method,a.url,"boolean"===typeof a.async?a.async:!0,"string"===
typeof a.user?a.user:void 0,"string"===typeof a.password?a.password:void 0);a.serialize!==JSON.stringify||!g||a.headers&&a.headers.hasOwnProperty("Content-Type")||k.setRequestHeader("Content-Type","application/json; charset=utf-8");a.deserialize!==h||a.headers&&a.headers.hasOwnProperty("Accept")||k.setRequestHeader("Accept","application/json, text/*");a.withCredentials&&(k.withCredentials=a.withCredentials);for(var u in a.headers)({}).hasOwnProperty.call(a.headers,u)&&k.setRequestHeader(u,a.headers[u]);
"function"===typeof a.config&&(k=a.config(k,a)||k);k.onreadystatechange=function(){if(!t&&4===k.readyState)try{var b=a.extract!==q?a.extract(k,a):a.deserialize(a.extract(k,a));if(200<=k.status&&300>k.status||304===k.status||T.test(a.url))d(m(a.type,b));else{var l=Error(k.responseText),c;for(c in b)l[c]=b[c];f(l)}}catch(p){f(p)}};g&&null!=a.data?k.send(a.data):k.send()});return!0===a.background?w:t(w)},jsonp:function(a,h){var t=f();a=g(a,h);var q=new d(function(d,f){var g=a.callbackName||"_mithril_"+
Math.round(1E16*Math.random())+"_"+k++,h=b.document.createElement("script");b[g]=function(f){h.parentNode.removeChild(h);d(m(a.type,f));delete b[g]};h.onerror=function(){h.parentNode.removeChild(h);f(Error("JSONP request failed"));delete b[g]};null==a.data&&(a.data={});a.url=e(a.url,a.data);a.data[a.callbackKey||"callback"]=g;h.src=n(a.url,a.data);b.document.documentElement.appendChild(h)});return!0===a.background?q:t(q)},setCompletionCallback:function(a){t=a}}}(window,x),P=function(b){function d(l,
c,p,a,b,d,g){for(;p<a;p++){var v=c[p];null!=v&&f(l,v,b,g,d)}}function f(l,c,p,a,b){var v=c.tag;if("string"===typeof v)switch(c.state={},null!=c.attrs&&D(c.attrs,c,p),v){case "#":return c.dom=A.createTextNode(c.children),k(l,c.dom,b),c.dom;case "<":return g(l,c,b);case "[":var h=A.createDocumentFragment();null!=c.children&&(v=c.children,d(h,v,0,v.length,p,null,a));c.dom=h.firstChild;c.domSize=h.childNodes.length;k(l,h,b);return h;default:var m=c.tag,r=(v=c.attrs)&&v.is;m=(a=c.attrs&&c.attrs.xmlns||
G[c.tag]||a)?r?A.createElementNS(a,m,{is:r}):A.createElementNS(a,m):r?A.createElement(m,{is:r}):A.createElement(m);c.dom=m;if(null!=v)for(h in r=a,v)E(c,h,null,v[h],r);k(l,m,b);null!=c.attrs&&null!=c.attrs.contenteditable?t(c):(null!=c.text&&(""!==c.text?m.textContent=c.text:c.children=[B("#",void 0,void 0,c.text,void 0,void 0)]),null!=c.children&&(l=c.children,d(m,l,0,l.length,p,null,a),l=c.attrs,"select"===c.tag&&null!=l&&("value"in l&&E(c,"value",null,l.value,void 0),"selectedIndex"in l&&E(c,"selectedIndex",
null,l.selectedIndex,void 0))));return m}else return e(c,p),null!=c.instance?(p=f(l,c.instance,p,a,b),c.dom=c.instance.dom,c.domSize=null!=c.dom?c.instance.domSize:0,k(l,p,b),c=p):(c.domSize=0,c=K),c}function g(l,c,a){var p={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"}[(c.children.match(/^\s*?<(\w+)/im)||[])[1]]||"div";p=A.createElement(p);p.innerHTML=c.children;c.dom=p.firstChild;c.domSize=p.childNodes.length;c=A.createDocumentFragment();
for(var b;b=p.firstChild;)c.appendChild(b);k(l,c,a);return c}function e(l,c){if("function"===typeof l.tag.view){l.state=Object.create(l.tag);var a=l.state.view;if(null!=a.$$reentrantLock$$)return K;a.$$reentrantLock$$=!0}else{l.state=void 0;a=l.tag;if(null!=a.$$reentrantLock$$)return K;a.$$reentrantLock$$=!0;l.state=null!=l.tag.prototype&&"function"===typeof l.tag.prototype.view?new l.tag(l):l.tag(l)}l._state=l.state;null!=l.attrs&&D(l.attrs,l,c);D(l._state,l,c);l.instance=B.normalize(l._state.view.call(l.state,
l));if(l.instance===l)throw Error("A view cannot return the vnode it received as argument");a.$$reentrantLock$$=null}function n(l,c,p,b,g,e,n){if(c!==p&&(null!=c||null!=p))if(null==c)d(l,p,0,p.length,g,e,n);else if(null==p)a(c,0,c.length,p);else{if(c.length===p.length){for(var v=!1,r=0;r<p.length;r++)if(null!=p[r]&&null!=c[r]){v=null==p[r].key&&null==c[r].key;break}if(v){for(r=0;r<c.length;r++)c[r]!==p[r]&&(null==c[r]&&null!=p[r]?f(l,p[r],g,n,m(c,r+1,e)):null==p[r]?a(c,r,r+1,p):h(l,c[r],p[r],g,m(c,
r+1,e),b,n));return}}if(!b)a:{if(null!=c.pool&&Math.abs(c.pool.length-p.length)<=Math.abs(c.length-p.length)&&(b=p[0]&&p[0].children&&p[0].children.length||0,Math.abs((c.pool[0]&&c.pool[0].children&&c.pool[0].children.length||0)-b)<=Math.abs((c[0]&&c[0].children&&c[0].children.length||0)-b))){b=!0;break a}b=!1}if(b){var t=c.pool;c=c.concat(c.pool)}r=v=0;for(var w=c.length-1,y=p.length-1,H;w>=v&&y>=r;){var u=c[v],z=p[r];if(u!==z||b)if(null==u)v++;else if(null==z)r++;else if(u.key===z.key){var C=null!=
t&&v>=c.length-t.length||null==t&&b;v++;r++;h(l,u,z,g,m(c,v,e),C,n);b&&u.tag===z.tag&&k(l,q(u),e)}else if(u=c[w],u!==z||b)if(null==u)w--;else if(null==z)r++;else if(u.key===z.key)C=null!=t&&w>=c.length-t.length||null==t&&b,h(l,u,z,g,m(c,w+1,e),C,n),(b||r<y)&&k(l,q(u),m(c,v,e)),w--,r++;else break;else w--,r++;else v++,r++}for(;w>=v&&y>=r;){u=c[w];z=p[y];if(u!==z||b)if(null==u)w--;else{if(null!=z)if(u.key===z.key)C=null!=t&&w>=c.length-t.length||null==t&&b,h(l,u,z,g,m(c,w+1,e),C,n),b&&u.tag===z.tag&&
k(l,q(u),e),null!=u.dom&&(e=u.dom),w--;else{if(!H){H=c;u=w;C={};var A;for(A=0;A<u;A++){var x=H[A];null!=x&&(x=x.key,null!=x&&(C[x]=A))}H=C}null!=z&&(u=H[z.key],null!=u?(C=c[u],h(l,C,z,g,m(c,w+1,e),b,n),k(l,q(C),e),c[u].skip=!0,null!=C.dom&&(e=C.dom)):e=f(l,z,g,n,e))}y--}else w--,y--;if(y<r)break}d(l,p,r,y+1,g,e,n);a(c,v,w+1,p)}}function h(l,c,a,b,d,m,k){var p=c.tag;if(p===a.tag){a.state=c.state;a._state=c._state;a.events=c.events;var v;if(v=!m){var C,z;null!=a.attrs&&"function"===typeof a.attrs.onbeforeupdate&&
(C=a.attrs.onbeforeupdate.call(a.state,a,c));"string"!==typeof a.tag&&"function"===typeof a._state.onbeforeupdate&&(z=a._state.onbeforeupdate.call(a.state,a,c));void 0===C&&void 0===z||C||z?v=!1:(a.dom=c.dom,a.domSize=c.domSize,a.instance=c.instance,v=!0)}if(!v)if("string"===typeof p)switch(null!=a.attrs&&(m?(a.state={},D(a.attrs,a,b)):J(a.attrs,a,b)),p){case "#":c.children.toString()!==a.children.toString()&&(c.dom.nodeValue=a.children);a.dom=c.dom;break;case "<":c.children!==a.children?(q(c),g(l,
a,d)):(a.dom=c.dom,a.domSize=c.domSize);break;case "[":n(l,c.children,a.children,m,b,d,k);c=0;b=a.children;a.dom=null;if(null!=b){for(m=0;m<b.length;m++){var y=b[m];null!=y&&null!=y.dom&&(null==a.dom&&(a.dom=y.dom),c+=y.domSize||1)}1!==c&&(a.domSize=c)}break;default:l=a.dom=c.dom;k=a.attrs&&a.attrs.xmlns||G[a.tag]||k;"textarea"===a.tag&&(null==a.attrs&&(a.attrs={}),null!=a.text&&(a.attrs.value=a.text,a.text=void 0));d=c.attrs;p=a.attrs;v=k;if(null!=p)for(y in p)E(a,y,d&&d[y],p[y],v);if(null!=d)for(y in d)null!=
p&&y in p||("className"===y&&(y="class"),"o"!==y[0]||"n"!==y[1]||u(y)?"key"!==y&&a.dom.removeAttribute(y):x(a,y,void 0));null!=a.attrs&&null!=a.attrs.contenteditable?t(a):null!=c.text&&null!=a.text&&""!==a.text?c.text.toString()!==a.text.toString()&&(c.dom.firstChild.nodeValue=a.text):(null!=c.text&&(c.children=[B("#",void 0,void 0,c.text,void 0,c.dom.firstChild)]),null!=a.text&&(a.children=[B("#",void 0,void 0,a.text,void 0,void 0)]),n(l,c.children,a.children,m,b,null,k))}else{if(m)e(a,b);else{a.instance=
B.normalize(a._state.view.call(a.state,a));if(a.instance===a)throw Error("A view cannot return the vnode it received as argument");null!=a.attrs&&J(a.attrs,a,b);J(a._state,a,b)}null!=a.instance?(null==c.instance?f(l,a.instance,b,k,d):h(l,c.instance,a.instance,b,d,m,k),a.dom=a.instance.dom,a.domSize=a.instance.domSize):null!=c.instance?(w(c.instance,null),a.dom=void 0,a.domSize=0):(a.dom=c.dom,a.domSize=c.domSize)}}else w(c,null),f(l,a,b,k,d)}function q(a){var c=a.domSize;if(null!=c||null==a.dom){var b=
A.createDocumentFragment();if(0<c){for(a=a.dom;--c;)b.appendChild(a.nextSibling);b.insertBefore(a,b.firstChild)}return b}return a.dom}function m(a,c,b){for(;c<a.length;c++)if(null!=a[c]&&null!=a[c].dom)return a[c].dom;return b}function k(a,c,b){b&&b.parentNode?a.insertBefore(c,b):a.appendChild(c)}function t(a){var c=a.children;if(null!=c&&1===c.length&&"<"===c[0].tag)c=c[0].children,a.dom.innerHTML!==c&&(a.dom.innerHTML=c);else if(null!=a.text||null!=c&&0!==c.length)throw Error("Child node of a contenteditable must be trusted");
}function a(a,c,b,d){for(;c<b;c++){var l=a[c];null!=l&&(l.skip?l.skip=!1:w(l,d))}}function w(a,c){function b(){if(++d===l&&(C(a),a.dom)){var b=a.domSize||1;if(1<b)for(var e=a.dom;--b;){var g=e.nextSibling,f=g.parentNode;null!=f&&f.removeChild(g)}b=a.dom;e=b.parentNode;null!=e&&e.removeChild(b);if(b=null!=c&&null==a.domSize)b=a.attrs,b=!(null!=b&&(b.oncreate||b.onupdate||b.onbeforeremove||b.onremove));b&&"string"===typeof a.tag&&(c.pool?c.pool.push(a):c.pool=[a])}}var l=1,d=0;if(a.attrs&&"function"===
typeof a.attrs.onbeforeremove){var e=a.attrs.onbeforeremove.call(a.state,a);null!=e&&"function"===typeof e.then&&(l++,e.then(b,b))}"string"!==typeof a.tag&&"function"===typeof a._state.onbeforeremove&&(e=a._state.onbeforeremove.call(a.state,a),null!=e&&"function"===typeof e.then&&(l++,e.then(b,b)));b()}function C(a){a.attrs&&"function"===typeof a.attrs.onremove&&a.attrs.onremove.call(a.state,a);if("string"!==typeof a.tag)"function"===typeof a._state.onremove&&a._state.onremove.call(a.state,a),null!=
a.instance&&C(a.instance);else if(a=a.children,Array.isArray(a))for(var c=0;c<a.length;c++){var b=a[c];null!=b&&C(b)}}function E(a,b,d,e,g){var c=a.dom;if("key"!==b&&"is"!==b&&(d!==e||"value"===b||"checked"===b||"selectedIndex"===b||"selected"===b&&a.dom===A.activeElement||"object"===typeof e)&&"undefined"!==typeof e&&!u(b)){var l=b.indexOf(":");if(-1<l&&"xlink"===b.substr(0,l))c.setAttributeNS("http://www.w3.org/1999/xlink",b.slice(l+1),e);else if("o"===b[0]&&"n"===b[1]&&"function"===typeof e)x(a,
b,e);else if("style"===b)if(a=d,a===e&&(c.style.cssText="",a=null),null==e)c.style.cssText="";else if("string"===typeof e)c.style.cssText=e;else{"string"===typeof a&&(c.style.cssText="");for(var f in e)c.style[f]=e[f];if(null!=a&&"string"!==typeof a)for(f in a)f in e||(c.style[f]="")}else if(b in c&&"href"!==b&&"list"!==b&&"form"!==b&&"width"!==b&&"height"!==b&&void 0===g&&!(a.attrs.is||-1<a.tag.indexOf("-"))){if("value"===b){f=""+e;if(("input"===a.tag||"textarea"===a.tag)&&a.dom.value===f&&a.dom===
A.activeElement)return;if("select"===a.tag)if(null===e){if(-1===a.dom.selectedIndex&&a.dom===A.activeElement)return}else if(null!==d&&a.dom.value===f&&a.dom===A.activeElement)return;if("option"===a.tag&&null!=d&&a.dom.value===f)return}"input"===a.tag&&"type"===b?c.setAttribute(b,e):c[b]=e}else"boolean"===typeof e?e?c.setAttribute(b,""):c.removeAttribute(b):c.setAttribute("className"===b?"class":b,e)}}function u(a){return"oninit"===a||"oncreate"===a||"onupdate"===a||"onremove"===a||"onbeforeremove"===
a||"onbeforeupdate"===a}function x(a,b,d){var c=a.dom,e="function"!==typeof F?d:function(a){var b=d.call(c,a);F.call(c,a);return b};if(b in c)c[b]="function"===typeof d?e:null;else{var f=b.slice(2);void 0===a.events&&(a.events={});a.events[b]!==e&&(null!=a.events[b]&&c.removeEventListener(f,a.events[b],!1),"function"===typeof d&&(a.events[b]=e,c.addEventListener(f,a.events[b],!1)))}}function D(a,b,d){"function"===typeof a.oninit&&a.oninit.call(b.state,b);"function"===typeof a.oncreate&&d.push(a.oncreate.bind(b.state,
b))}function J(a,b,d){"function"===typeof a.onupdate&&d.push(a.onupdate.bind(b.state,b))}var A=b.document,K=A.createDocumentFragment(),G={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},F;return{render:function(a,b){if(!a)throw Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var c=[],d=A.activeElement,e=a.namespaceURI;null==a.vnodes&&(a.textContent="");Array.isArray(b)||(b=[b]);n(a,a.vnodes,B.normalizeChildren(b),!1,c,null,"http://www.w3.org/1999/xhtml"===
e?void 0:e);a.vnodes=b;null!=d&&A.activeElement!==d&&d.focus();for(d=0;d<c.length;d++)c[d]()},setEventCallback:function(a){return F=a}}},I=function(b){function d(b){b=g.indexOf(b);-1<b&&g.splice(b,2)}function f(){for(var b=1;b<g.length;b+=2)g[b]()}b=P(b);b.setEventCallback(function(b){!1===b.redraw?b.redraw=void 0:f()});var g=[];return{subscribe:function(b,f){d(b);g.push(b,R(f))},unsubscribe:d,redraw:f,render:b.render}}(window);L.setCompletionCallback(I.redraw);D.mount=function(b){return function(d,
f){if(null===f)b.render(d,[]),b.unsubscribe(d);else{if(null==f.view&&"function"!==typeof f)throw Error("m.mount(element, component) expects a component, not a vnode");b.subscribe(d,function(){b.render(d,B(f))});b.redraw()}}}(I);var U=x,M=function(b){if(""===b||null==b)return{};"?"===b.charAt(0)&&(b=b.slice(1));b=b.split("&");for(var d={},f={},g=0;g<b.length;g++){var e=b[g].split("="),n=decodeURIComponent(e[0]);e=2===e.length?decodeURIComponent(e[1]):"";"true"===e?e=!0:"false"===e&&(e=!1);var h=n.split(/\]\[?|\[/),
q=d;-1<n.indexOf("[")&&h.pop();for(var m=0;m<h.length;m++){n=h[m];var k=h[m+1];k=""==k||!isNaN(parseInt(k,10));var t=m===h.length-1;""===n&&(n=h.slice(0,m).join(),null==f[n]&&(f[n]=0),n=f[n]++);null==q[n]&&(q[n]=t?e:k?[]:{});q=q[n]}}return d},V=function(b){function d(d){var e=b.location[d].replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent);"pathname"===d&&"/"!==e[0]&&(e="/"+e);return e}function f(b){return function(){null==h&&(h=n(function(){h=null;b()}))}}function g(b,d,e){var a=b.indexOf("?"),
f=b.indexOf("#"),g=-1<a?a:-1<f?f:b.length;if(-1<a){a=M(b.slice(a+1,-1<f?f:b.length));for(var h in a)d[h]=a[h]}if(-1<f)for(h in d=M(b.slice(f+1)),d)e[h]=d[h];return b.slice(0,g)}var e="function"===typeof b.history.pushState,n="function"===typeof setImmediate?setImmediate:setTimeout,h,q={prefix:"#!",getPath:function(){switch(q.prefix.charAt(0)){case "#":return d("hash").slice(q.prefix.length);case "?":return d("search").slice(q.prefix.length)+d("hash");default:return d("pathname").slice(q.prefix.length)+
d("search")+d("hash")}},setPath:function(d,f,h){var a={},k={};d=g(d,a,k);if(null!=f){for(var m in f)a[m]=f[m];d=d.replace(/:([^\/]+)/g,function(b,d){delete a[d];return f[d]})}(m=F(a))&&(d+="?"+m);(k=F(k))&&(d+="#"+k);e?(k=h?h.state:null,m=h?h.title:null,b.onpopstate(),h&&h.replace?b.history.replaceState(k,m,q.prefix+d):b.history.pushState(k,m,q.prefix+d)):b.location.href=q.prefix+d},defineRoutes:function(d,h,n){function a(){var a=q.getPath(),e={},f=g(a,e,e),k=b.history.state;if(null!=k)for(var m in k)e[m]=
k[m];for(var t in d)if(k=new RegExp("^"+t.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$"),k.test(f)){f.replace(k,function(){for(var b=t.match(/:[^\/]+/g)||[],f=[].slice.call(arguments,1,-2),g=0;g<b.length;g++)e[b[g].replace(/:|\./g,"")]=decodeURIComponent(f[g]);h(d[t],e,a,t)});return}n(a,e)}e?b.onpopstate=f(a):"#"===q.prefix.charAt(0)&&(b.onhashchange=a);a()}};return q};D.route=function(b,d){var f=V(b),g=function(b){return b},e,n,h,q,m,k=function(b,a,k){if(null==b)throw Error("Ensure the DOM element that was passed to `m.route` is not undefined");
var t=function(){null!=e&&d.render(b,e(B(n,h.key,h)))},w=function(b){if(b!==a)f.setPath(a,null,{replace:!0});else throw Error("Could not resolve default route "+a);};f.defineRoutes(k,function(a,b,d){var f=m=function(a,k){f===m&&(n=null==k||"function"!==typeof k.view&&"function"!==typeof k?"div":k,h=b,q=d,m=null,e=(a.render||g).bind(a),t())};a.view||"function"===typeof a?f({},a):a.onmatch?U.resolve(a.onmatch(b,d)).then(function(b){f(a,b)},w):f(a,"div")},w);d.subscribe(b,t)};k.set=function(b,a,d){null!=
m&&(d=d||{},d.replace=!0);m=null;f.setPath(b,a,d)};k.get=function(){return q};k.prefix=function(b){f.prefix=b};k.link=function(b){b.dom.setAttribute("href",f.prefix+b.attrs.href);b.dom.onclick=function(a){a.ctrlKey||a.metaKey||a.shiftKey||2===a.which||(a.preventDefault(),a.redraw=!1,a=this.getAttribute("href"),0===a.indexOf(f.prefix)&&(a=a.slice(f.prefix.length)),k.set(a,void 0,void 0))}};k.param=function(b){return"undefined"!==typeof h&&"undefined"!==typeof b?h[b]:h};return k}(window,I);D.withAttr=
function(b,d,f){return function(g){d.call(f||this,b in g.currentTarget?g.currentTarget[b]:g.currentTarget.getAttribute(b))}};var W=P(window);D.render=W.render;D.redraw=I.redraw;D.request=L.request;D.jsonp=L.jsonp;D.parseQueryString=M;D.buildQueryString=F;D.version="1.1.6";D.vnode=B;"undefined"!==typeof module?module.exports=D:u.m=D})();

    var ce = window.CustomEvent;
/** Polyfill for IE CustomEvent */
    (function () {

      if ( typeof ce === "function" ) return false; //If not IE

      function CustomEvent ( event, params ) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent( 'CustomEvent' );
        evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
        return evt;
       }

      CustomEvent.prototype = window.Event.prototype;

      ce = CustomEvent;
    })();

    u.addEventListener = function(eventType, lstnr) {
        var el = document.getElementById(globalOpts.listenerElementId) || window;
        el.addEventListener(eventType, lstnr);
        return function() { el.removeEventListener(eventType, lstnr); };
    }
    u.dispatchEvent = function(e) {
        var el = document.getElementById(globalOpts.listenerElementId) || window;
        el.dispatchEvent(e);
    }

    u.updateCountries = function(countriesList) {
        countries=countriesList;
        countriesMap = countries.reduce(function(m, x) {
            m[x.c] = x; //other possible idea - only go through countries with regions list for this map
            return m;
        }, {});
    }
    u.getCountries = function() {
        return countries;
    }

    var loadCountriesXHR = null;

    u.loadCountriesDict = function(languageCode) {
        if (loadCountriesXHR != null) {
            loadCountriesXHR.abort();
            loadCountriesXHR = null;
        }
        var p = m.request({
            method: "GET",
            url: (globalOpts.uriPrefix || '') + "/i18n/countries/" + languageCode + "?public_token=" + globalOpts.public_token,
            config: function(xhr) {
                loadCountriesXHR = xhr;
            }
        })
        .then(function(data) {
            u.updateCountries(data);
        });
        return p;

    }
    u.isFieldTaxRequiredFn = function(fieldName) {
        return function() {
            for (var i =0; i < (taxResult.tax_required_fields || []).length; i++){
                if (fieldName === taxResult.tax_required_fields[i].field_name) return true;
            }
        }
    }

    u.isFieldStorageRequiredFn = function(fieldName) {
        return function() {
            for (var i =0; i < (taxResult.storage_required_fields || []).length; i++){
                if (fieldName === taxResult.storage_required_fields[i].field_name) return true;
            }
        }
    }

    u.taxCalculateTriggers = {
        billing_country_code: function(v) {
            return v != null && v !== '';
        },
        'evidence.self_declaration.evidence_value': function(v) {
            return v != null && v !== {};
        },
        'evidence.by_payment_method.evidence_value': function(v) {
            return v != null && v !== {};
        },
        buyer_tax_number: function(v) {
            return true;
        },
        buyer_credit_card_prefix: function(v) {
            return v != null && v.length >= 6;
        }
    }

    u.handleMissingFields = function (response) {
        var transactionResponse = JSON.parse(JSON.stringify(transactionData));
        Object.assign(transactionResponse, response);
        taxResult = {transaction: transactionResponse};
        Object.assign(taxResult, response);

        for (var i=0; i < taxResult.transaction.transaction_lines.length;i++) {
            taxResult.transaction.transaction_lines[i].amount =
                taxResult.transaction.transaction_lines[i].amount || taxResult.transaction.transaction_lines[i].total_amount;

            taxResult.transaction.transaction_lines[i].total_amount =
                taxResult.transaction.transaction_lines[i].total_amount || taxResult.transaction.transaction_lines[i].amount;
        }
    }

    /**
     The calculateTax will take the current field values and send them to Taxamo API /api/v2/tax/calculate endpoint (proxied), then update the transaction result.

     It can be invoked automatically upon important data change, or triggered manually after the transaction data has been adjusted.
    */
    var calculateTaxXHR = null;

    u.calculateTax = function () {
        if (calculateTaxXHR != null) {
            calculateTaxXHR.abort();
            calculateTaxXHR = null;
        }
        var transaction = Object.assign({}, transactionData);
        var additionalInteractions = [];
        if (transaction.additional_interactions) {
            for (var k in transaction.additional_interactions) {
                if (transaction.additional_interactions.hasOwnProperty(k)) {
                    additionalInteractions.push(transaction.additional_interactions[k]);
                }
            }
        }
        transaction.additional_interactions = additionalInteractions;

        var p = m.request({
            method: "POST",
            //to check pre-flight
            url: (globalOpts.uriPrefix || '') + "/api/v2/tax/calculate?public_token=" + globalOpts.public_token,
            data: {transaction: transaction},
            config: function(xhr) {
                calculateTaxXHR = xhr;
                u.dispatchEvent(new CustomEvent('taxamo-loading-start', {}));
            }
        })
        .then(function(data) {

            if (data.transaction && data.transaction.additional_interactions) {
                var additionalInteractions = {};
                for (var i=0; i < data.transaction.additional_interactions.length; i++) {
                     var interaction = data.transaction.additional_interactions[i];
                     if (interaction.interaction_kind) {
                         additionalInteractions[interaction.interaction_kind.replace("-", "_")] = interaction;
                     }
                }
                data.transaction.additional_interactions = additionalInteractions;
            }
            taxResult = data;
            calculateTaxXHR = null;
            overrideGlobalOpts(taxResult);
            u.dispatchEvent(new CustomEvent('taxamo-tax-calculated', { detail: taxResult }));
            u.dispatchEvent(new CustomEvent('taxamo-loading-stop', {}));
            return data;
        }).then(function(data) {
            //captcha is available, we need to load it
            if (data.transaction && data.transaction.additional_interactions && data.transaction.additional_interactions.b2b_captcha) {
                var captchaInteraction = data.transaction.additional_interactions.b2b_captcha;
                if (!captchaInteraction.captcha && !captchaInteraction.solution) {
                    u.reloadCaptchaImage();
                }
            }
            return data;
        });

        p.catch(function(e) {
            d(e);
            calculateTaxXHR = null;
            var r = JSON.parse(e.message);
            if (r['error_code'] === 'missing_tax_required_fields') {
                u.handleMissingFields(r);
                u.dispatchEvent(new CustomEvent('taxamo-missing-tax-required-fields', { detail: e}));
            }
            u.dispatchEvent(new CustomEvent('taxamo-loading-error', { detail: e}));
            u.dispatchEvent(new CustomEvent('taxamo-loading-stop', {}));
            return e;
        });
        return p;

    }

    var d = function() {
        if (globalOpts.debug) {
            console.debug.apply(arguments);
        }
    }

    var m = u.m;
    var bindings = {};

    u.getFieldValue = function(fieldName, currObj) {
        var tokens = fieldName.split(/\./);
        d('Getting field value', fieldName, tokens, currObj);
        for (var i=0; i < tokens.length;i++){
            if (!currObj) return null;
            if (i != tokens.length-1) {
                currObj = currObj[tokens[i]];
            } else {
                return currObj[tokens[i]];
            }
        }
    }

    u.getTaxResultFieldValueFn = function(fieldName) {
        return function() {
            return u.getFieldValue(fieldName, taxResult);
        }
    }

    var targetEls = {};

    u.updateTransactionFieldValue = function(fieldName, fieldValue) {
        var tokens = fieldName.split(/\./);
        d('Updating field value', fieldName, tokens);
        var currObj = transactionData;
        if (u.getFieldValue(fieldName, currObj) === fieldValue) {
            d('Skipping field value update/trigger', fieldName, fieldValue);
            return;
        }
        for (var i=0; i < tokens.length;i++){
            if (i != tokens.length-1) {
                currObj[tokens[i]] = currObj[tokens[i]] || {};
                currObj = currObj[tokens[i]];
            } else {
                currObj[tokens[i]] = fieldValue;
            }
        }
        var trigger = u.taxCalculateTriggers[fieldName];
        if (fieldValue != null && taxResult && (u.isFieldTaxRequiredFn(fieldName)() || u.isFieldStorageRequiredFn(fieldName)() || (trigger && trigger(fieldValue)))) {
            u.calculateTax();
        }
        u.dispatchEvent(new CustomEvent('taxamo-field-updated', { detail: {name: fieldName, value: fieldValue}}));
        u.dispatchEvent(new CustomEvent('taxamo-field-updated-' + fieldName, { detail: {name: fieldName, value: fieldValue}}));

        if (targetEls[fieldName]) {
            var elementToBind = targetEls[fieldName];
            if (elementToBind.nodeName === "SELECT" || elementToBind.nodeName === "INPUT"
                && (elementToBind.type === 'text' || elementToBind.type === 'email')) {
               elementToBind.value = fieldValue;
            } else if (elementToBind.nodeName === "INPUT") {
                elementToBind.checked = fieldValue === true;
            }
        }

    }


    u.updateElementSelection = function(elementToBind, fieldName, dictForSelect, x) {
        var fv = u.getFieldValue(fieldName, x);
        if (u.getFieldValue(fieldName, transactionData) !== fv) {
            d('Updating selection', elementToBind, fieldName, fv);
            for (var i=0; i < dictForSelect.length; i++) {
                if (dictForSelect[i].c===fv) {
                    elementToBind.selectedIndex = i;
                    return;
                }
            }
        } else {
            d('Skipping selection update', elementToBind, fieldName, fv);
        }
    }

    /**
        Create bi-directional binding between the element and the field value. If the element gets updated, the field will update too.
        If the field gets updated programmatically, the element value has to change too.
    */
    var listeners = {};
    var debounceTimeouts = {};

    u.bindFieldToElement = function (elementToBind, fieldName, opts) {
        d('Binding field to element', fieldName, elementToBind);
        opts = opts || {};
        bindings[fieldName] = elementToBind;

        var requiredFn = function (e) {
            var required = u.isFieldTaxRequiredFn(fieldName)() || u.isFieldStorageRequiredFn(fieldName)();
            var requiredLevel = opts.requiredLevel;
            if (requiredLevel === 'always') {
                required = true;
            }
            elementToBind.required = required;
        };

        u.addEventListener('taxamo-tax-calculated', requiredFn);
        u.addEventListener('taxamo-missing-tax-required-fields', requiredFn);

        //remove old listener for this field
        if (listeners[fieldName]) {
            listeners[fieldName]();
        }
        var fieldVal = u.getFieldValue(fieldName, transactionData);
        if (globalOpts.updateElementsFromTransaction) {
            targetEls[fieldName] = elementToBind;
        }
        if (elementToBind.nodeName === "SELECT") {
            var lstnr = function(e) {
                u.updateTransactionFieldValue(fieldName, opts.dictForSelect[e.target.selectedIndex].c);
            };
            elementToBind.addEventListener('change', lstnr);
            listeners[fieldName] = function() { elementToBind.removeEventListener('change', lstnr); listeners[fieldName] = null };
            if (fieldVal) {
                var cnt = opts.dictForSelect.length;
                for (var i=0; i < cnt; i++) {
                    if (opts.dictForSelect[i].c === fieldVal) {
                        elementToBind.selectedIndex = i; break;
                    }
                }
            }
        } else if (elementToBind.nodeName === "INPUT" && (elementToBind.type === 'text' || elementToBind.type === 'email')) {
            var lstnr = function f(e) {
                if (opts.debounce) {
                    if (debounceTimeouts[f]) {
                        clearTimeout(debounceTimeouts[f]);
                        delete debounceTimeouts[f];
                    }
                    debounceTimeouts[f] = setTimeout(function() {
                        u.updateTransactionFieldValue(fieldName, elementToBind.value);
                    }, opts.debounce);
                } else {
                    u.updateTransactionFieldValue(fieldName, elementToBind.value);
                }

            };
            lstnr({target: elementToBind});
            elementToBind.addEventListener('keyup', lstnr);
            listeners[fieldName] = function() { elementToBind.removeEventListener('keyup', lstnr); listeners[fieldName] = null };
            if (fieldVal) { elementToBind.value = fieldVal; }
        } else if (elementToBind.nodeName === "INPUT") {
            var lstnr = function(e) { u.updateTransactionFieldValue(fieldName, e.target.value); };
            lstnr({target: elementToBind});
            elementToBind.addEventListener('change', lstnr);
            listeners[fieldName] = function() { elementToBind.removeEventListener('change', lstnr); listeners[fieldName] = null };
            elementToBind.checked = fieldVal === true;
        }
    }

    u.attachDisplay = function (elementToBind, checkFn) {
        var attachDisplayFn = function(e) {
            if (checkFn(e.detail)) {
                elementToBind.style.display = "";
            } else {
                elementToBind.style.display = "none";
            }
        };
        u.addEventListener('taxamo-tax-calculated', attachDisplayFn);
        u.addEventListener('taxamo-missing-tax-required-fields', attachDisplayFn);
    }


    u.attachBillingCountry =  function (elementToBind) {
        //fill out the options
        var options = countries.map(function(c)
                                          { return m("option", {value: c.c, selected: transactionData != null && transactionData.billing_country_code === c.c}, c.n)});
        options.unshift(m("option", {disabled: true, selected: true, value: "!"}, ""))
        m.render(elementToBind, options);
        var countriesCopy = Object.assign([], countries);
        countriesCopy.unshift({});

        u.bindFieldToElement(elementToBind, 'billing_country_code', {dictForSelect: countriesCopy});
//        elementToBind.addEventListener('change', function(e) { u.updateTransactionFieldValue("invoice_address.region", '');});

        var setCountryFn = function(data) {
           var bcc = u.getFieldValue("detail.transaction.billing_country_code", data) ||
                     u.getFieldValue("detail.transaction.countries.by_billing.code", data) ||
                     u.getFieldValue("detail.billing_country_code", data) ||
                     u.getFieldValue("detail.countries.by_billing.code", data) ||
                     u.getFieldValue("detail.transaction.countries.detected.code", data) ||
                     u.getFieldValue("detail.countries.detected.code", data);
           if (globalOpts.syncBillingCountryWith) {
               switch (globalOpts.syncBillingCountryWith) {
                   case "countries.by_tax_number":
                       var x = u.getFieldValue("detail.transaction.countries.by_tax_number.code", data) ||
                               u.getFieldValue("detail.countries.by_tax_number.code", data);
                       if (x !== null && x !== undefined && bcc !== x) {
                           bcc = x;
                       }
                       break;
                   default:
                       d("Invalid option provided for globalOpts.syncBillingCountryWith");
               }
           }
           if (bcc !== transactionData.billing_country_code && bcc !== null && bcc !== undefined) {
               transactionData.billing_country_code = bcc;
               var options = countriesCopy.map(function(c)
                                                 { return m("option", {value: c.c, selected: transactionData != null && bcc === c.c},
                                                  c.n)});
               m.render(elementToBind, options);
           }
           if (data.detail.transaction && data.detail.transaction.buyer_tax_number_valid && globalOpts.disableBillingCountryOnBuyerTaxNumberValid) {
               elementToBind.setAttribute('disabled', 'disabled');
           } else {
               elementToBind.removeAttribute('disabled');
           }

       }
        u.addEventListener('taxamo-tax-calculated', setCountryFn);
        u.addEventListener('taxamo-missing-tax-required-fields', setCountryFn);
    }


    u.attachSelfDeclaredCountry =  function (elementToBind) {
        //fill out the options
        var options = countries.map(function(c)
                                          { var selected = transactionData != null &&
                                                           transactionData.evidence != null &&
                                                           transactionData.evidence.self_declaration != null &&
                                                           transactionData.evidence.self_declaration.evidence_value === c.c;
                                            return m("option", {value: c.c, selected: selected}, c.n)});
        options.unshift(m("option", {disabled: true, selected: true, value: "!"}, ""));
        var countriesCopy = Object.assign([], countries);
        countriesCopy.unshift({});
        m.render(elementToBind, options);
        u.bindFieldToElement(elementToBind, 'evidence.self_declaration.evidence_value', {dictForSelect: countriesCopy});
    }

    var prevRegionCountry = null;
    u.updateRegion = function (selectWrapper, textInputWrapper, selectElement, textInputElement, opts) {
        var bcc = (transactionData && transactionData.billing_country_code) ||
                  (taxResult && taxResult.transaction && taxResult.transaction.countries && taxResult.transaction.countries.by_billing && taxResult.transaction.countries.by_billing.code) ||
                  (taxResult && taxResult.transaction && taxResult.transaction.countries && taxResult.transaction.countries.detected && taxResult.transaction.countries.detected.code) ||
                  (taxResult && taxResult.tax_country_code);
        if (bcc && prevRegionCountry !== bcc) {
            prevRegionCountry = bcc;
            u.updateTransactionFieldValue("invoice_address.region", '')
            var regions = Object.assign([], countriesMap[bcc].regions);
            if (regions && regions.length > 0) {
                selectElement.selectedIndex = -1;
                var options = regions.map(function(c)
                                                  { return m("option", {value: c.c, selected: transactionData != null && transactionData.invoice_address != null && transactionData.invoice_address.region === c.c},
                                                    c.n)});
                options.unshift(m("option", {disabled: true, selected: true, value: "!"}, ""))
                m.render(selectElement, options);
                selectElement.selectedIndex = -1;
                selectWrapper.style.display = "";
                selectWrapper.removeAttribute('disabled');
                textInputElement.disabled = 'disabled';
                textInputWrapper.style.display = "none";
                opts = opts || {};
                opts.dictForSelect = Object.assign([], regions);
                opts.dictForSelect.unshift(null);
                u.bindFieldToElement(selectElement, "invoice_address.region", opts);
            } else {
                textInputElement.value = '';
                textInputWrapper.style.display = "";
                textInputElement.removeAttribute('disabled');
                selectWrapper.disabled = 'disabled';
                selectWrapper.style.display = "none";
                u.bindFieldToElement(textInputElement, "invoice_address.region", opts);
            }
        }
    }

    u.attachRegion = function(selectWrapper, textInputWrapper, selectElement, textInputElement) {
        u.updateRegion(selectWrapper, textInputWrapper, selectElement, textInputElement);
        u.addEventListener('taxamo-field-updated-billing_country_code', function(e) {
            u.updateRegion(selectWrapper, textInputWrapper, selectElement, textInputElement);
        });
        u.addEventListener('taxamo-tax-calculated', function(e) {
            u.updateRegion(selectWrapper, textInputWrapper, selectElement, textInputElement);
        });
        u.addEventListener('taxamo-missing-tax-required-fields', function(e) {
            u.updateRegion(selectWrapper, textInputWrapper, selectElement, textInputElement);
        });
    }

    u.attachTaxamoLogo = function (elementToBind) {
        u.attachDisplay(elementToBind, function(x) {return x.is_delegated});
        m.render(elementToBind,  m("img", {src: globalOpts.uriPrefix + "/img/supported-by-taxamo.png"}));
    }

    var currencyDecimalPlaces = {JPY: 0, KRW: 0, CNY: 0, RMB: 0, IDR: 0, CLP: 0, VND: 0, XAF: 0, XOF: 0, ISK: 0}

    u.attachAmountLabel = function(elementToBind, lineCustomId, fieldName, formatter) {
        var renderLabel = function() {
            var transaction = (taxResult && taxResult.transaction) || transactionData;
            var decimalPlaces = currencyDecimalPlaces[transaction.currency_code];
            if (decimalPlaces === undefined) decimalPlaces = 2;
            var res;
            var line = null;
            var lines = transaction.transaction_lines;
            for (var i=0; i < lines.length;i++) {
                if (lines[i].custom_id === lineCustomId) {
                    line = lines[i]; break;
                }
            }
            if (!line) return ""; //line not found
            var num = u.getFieldValue(fieldName, line);
            if (num === null || num === undefined) return "";
            if (formatter === 'decimal-comma') {
                return num.toFixed(decimalPlaces).replace('.', ',').replace(/(\d)(?=(\d{3})+,)/g, '$1.');
            } else if (formatter) {
                return formatter(num, decimalPlaces, transaction.currency_code);
            }
            return num.toFixed(decimalPlaces);
        };
        m.mount(elementToBind, { view: function() {
            return m("span", renderLabel());
        }});
    }

    u.attachAmountLineLabel = u.attachAmountLabel;

    u.attachAmountTransactionLabel = function(elementToBind, fieldName, formatter) {
        var renderLabel = function() {
            var transaction = (taxResult && taxResult.transaction) || transactionData;
            var decimalPlaces = currencyDecimalPlaces[transaction.currency_code];
            if (decimalPlaces === undefined) decimalPlaces = 2;
            var num = u.getFieldValue(fieldName, transaction);
            if (num === null || num === undefined) return "";
            if (formatter === 'decimal-comma') {
                return num.toFixed(decimalPlaces).replace('.', ',').replace(/(\d)(?=(\d{3})+,)/g, '$1.');
            } else if (formatter) {
                return formatter(num, decimalPlaces, transaction.currency_code);
            }
            return num.toFixed(decimalPlaces);
        };
        m.mount(elementToBind, { view: function() {
            return m("span", renderLabel());
        }});
    }

    u.attachLineLabel = function(elementToBind, lineCustomId, fieldName) {
        var renderLabel = function() {
            var transaction = (taxResult && taxResult.transaction) || transactionData;
            var line = null;
            var lines = transaction.transaction_lines;
            for (var i=0; i < lines.length;i++) {
                if (lines[i].custom_id === lineCustomId) {
                    line = lines[i]; break;
                }
            }
            if (!line) return ""; //line not found
            var val = u.getFieldValue(fieldName, line);
            if (val === null || val === undefined) return "";
            return val;
        };
        m.mount(elementToBind, { view: function() {
            return m("span", renderLabel());
        }});
    }

    u.attachLabel = function(elementToBind, fieldName) {
        var renderLabel = function() {
            var data = taxResult || {transaction: transactionData};
            var val = u.getFieldValue(fieldName, data);
            if (val === null || val === undefined) return "";
            return val;
        };
        m.mount(elementToBind, { view: function() {
            return m("span", renderLabel());
        }});
    }


    u.attachLoading = function(elementToBind) {
        var loadingCheck = function(e) {
           if (calculateTaxXHR) {
               elementToBind.style.display = "";
           } else {
               elementToBind.style.display = "none";
           }
        }
        u.addEventListener('taxamo-loading-start', loadingCheck);
        u.addEventListener('taxamo-loading-stop', loadingCheck);
        loadingCheck();
    }


    u.canDisplayB2BFailureLabel = function (r) {
        var f1 = u.getTaxResultFieldValueFn("transaction.buyer_tax_number_format_valid")(r);
        var f2 = u.getTaxResultFieldValueFn("transaction.buyer_tax_number_valid")(r);
        var f3 = u.getTaxResultFieldValueFn("ui_configuration.b2b_current.b2b_treat_as_b2c")(r);

        var f4 = u.getTaxResultFieldValueFn("transaction.additional_interactions.b2b_captcha.interaction_prompt_message")(r);
        var f5 = u.getTaxResultFieldValueFn("transaction.additional_interactions.b2b_captcha.captcha.check_result")(r) === 'valid';

        var f6 = u.getTaxResultFieldValueFn("ui_configuration.b2b_current.region_enabled")(r);
        return f6 && (f1 === false || ((!f4 || f5) && f2 === false && f3 === false));
    }
    u.canDisplayTaxAppliedLabel = function (r) {
        var f1 = u.getTaxResultFieldValueFn("transaction.buyer_tax_number_format_valid")(r);
        var f2 = u.getTaxResultFieldValueFn("transaction.buyer_tax_number_valid")(r);
        var f3 = u.getTaxResultFieldValueFn("ui_configuration.b2b_current.b2b_treat_as_b2c")(r);

        var f6 = u.getTaxResultFieldValueFn("ui_configuration.b2b_current.region_enabled")(r);

        return f6 && f1 && f2 === false && f3;
    }
    u.attachBuyerTaxNumberStatusLabels = function(successLabelEl, failureLabelEl, errorLabelEl, taxAppliedLabelEl) {
        u.attachDisplay(successLabelEl, u.getTaxResultFieldValueFn("transaction.buyer_tax_number_valid"));
        u.attachDisplay(errorLabelEl, function(r) { return r.transaction && r.transaction.buyer_tax_number_valid === null; });
        u.attachDisplay(failureLabelEl, u.canDisplayB2BFailureLabel);
        u.attachDisplay(taxAppliedLabelEl, u.canDisplayTaxAppliedLabel);
    }

    u.checkCaptchaStatusResultFn = function(status) {
        return function() { return status === u.getFieldValue("transaction.additional_interactions.b2b_captcha.captcha.check_result", taxResult); };
    }
    u.attachCaptchaCheckResultStatusLabels = function(checkFailedLabel, refreshLabel) {
        u.attachDisplay(checkFailedLabel, u.checkCaptchaStatusResultFn('invalid'));
        u.attachDisplay(refreshLabel, u.checkCaptchaStatusResultFn('expired'));
    }

//    state.meta.additional_interactions.b2b_captcha.captcha.image_base64 &&
//    state.eu_vat.eu_vat_number_validation_status != 'valid' &&
//    state.meta.additional_interactions.b2b_captcha.captcha.check_result != 'valid'

    u.attachCaptchaImage = function(elementToBind) {
        u.addEventListener('taxamo-tax-calculated', function(e) {
            var b64 = u.getFieldValue("transaction.additional_interactions.b2b_captcha.captcha.image_base64", taxResult);
            if (b64) {
                elementToBind.src = "data:image/png;base64, " + b64;
            } else if (!u.getFieldValue("transaction.additional_interactions.b2b_captcha.captcha.riddle_key", taxResult)) {
                elementToBind.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
            }
        });
    }
    u.canDisplayCaptchaWidget = function (r) {
        var f1 = u.getTaxResultFieldValueFn("transaction.additional_interactions.b2b_captcha.interaction_prompt_message")(r);
        var f2 = u.getTaxResultFieldValueFn("transaction.buyer_tax_number_valid")(r);
        return f1 && f2 === false;
    };

    u.reloadCaptchaImage = function() {
        var data= taxResult;
        if (data.transaction && data.transaction.additional_interactions && data.transaction.additional_interactions.b2b_captcha) {
            var captchaInteraction = data.transaction.additional_interactions.b2b_captcha;
             transactionData.additional_interactions = transactionData.additional_interactions || {};
             transactionData.additional_interactions.b2b_captcha = {requested: true, interaction_key: captchaInteraction.interaction_key};
             u.dispatchEvent(new CustomEvent('taxamo-captcha-loading-start', {}));
             u.calculateTax().then(function(data) {
                 u.dispatchEvent(new CustomEvent('taxamo-captcha-loading-finished', {detail: data}));
                 return data;
             });
        }
    }

    u.submitCaptchaSolution = function(solution) {
        if (!solution) return;

        var data= taxResult;
        if (data.transaction && data.transaction.additional_interactions && data.transaction.additional_interactions.b2b_captcha) {
            var captchaInteraction = data.transaction.additional_interactions.b2b_captcha;
            var captchaDetails = captchaInteraction.captcha;
            if (captchaDetails) {
                transactionData.additional_interactions = transactionData.additional_interactions || {};
                transactionData.additional_interactions.b2b_captcha = {requested: true,
                                                                       interaction_key: captchaInteraction.interaction_key,
                                                                       captcha: {riddle_key: captchaDetails.riddle_key, solution: solution}};
                u.dispatchEvent(new CustomEvent('taxamo-captcha-submit-start', {}));
                u.calculateTax().then(function(data) {
                    u.dispatchEvent(new CustomEvent('taxamo-captcha-submit-finished', {detail: data}));
                    return data;
                });
            }
        }
    }

    u.scanDataAttributes = function() {

        var taxNumberFieldEl = document.querySelector("[data-taxamo-tax-number]");
        if (taxNumberFieldEl) {
            u.attachBuyerTaxNumberWidget(taxNumberFieldEl);
        }
        var taxRegionEl = document.querySelector("[data-taxamo-region]");
        if (taxRegionEl) {
            u.attachRegionWidget(taxRegionEl);
        }

        var displayEls = document.querySelectorAll("[data-taxamo-display]");
        for (var i=0; i < displayEls.length; i++) {
            var el = displayEls[i];
            var field = el.getAttribute("data-taxamo-display");
            u.attachDisplay(el, u.getTaxResultFieldValueFn(field));
        }

        var els = document.querySelectorAll("[data-taxamo-label]");
        for (var i=0; i < els.length;i++) {
            var el = els[i];
            var fieldName = el.getAttribute("data-taxamo-label");
            var customId = el.getAttribute("data-taxamo-label-line-custom-id");
            var amountCustomId = el.getAttribute("data-taxamo-label-line-amount-custom-id");
            if (amountCustomId) {
                var amountFormat = el.getAttribute("data-taxamo-label-line-amount-format");
                u.attachAmountLabel(el, amountCustomId, fieldName, amountFormat);
            } else if (customId) {
                u.attachLineLabel(el, customId, fieldName);
            }
            else {
                u.attachLabel(el, fieldName);
            }
        }
        var fieldEls = document.querySelectorAll("[data-taxamo-field]");
        for (var i=0; i < fieldEls.length;i++) {
            var el = fieldEls[i];
            var fieldName = el.getAttribute("data-taxamo-field");
            var opts = el.getAttribute("data-taxamo-field-opts");
            if (fieldName === 'billing_country_code') {
                u.attachBillingCountry(el);
            } else if (fieldName === 'evidence.self_declaration.evidence_value') {
               u.attachSelfDeclaredCountry(el);
            } else {
                u.bindFieldToElement(el, fieldName, eval("(" + opts + ")"));
            }
        }
        var logoEls = document.querySelectorAll("[data-taxamo-logo]");
        for (var i=0; i < logoEls.length; i++) {
            var el = logoEls[i];
            u.attachTaxamoLogo(el);
        }
        var loaderEls = document.querySelectorAll("[data-taxamo-loader]");
        for (var i=0; i < loaderEls.length; i++) {
            var el = loaderEls[i];
            u.attachLoading(el);
        }

    }
    /**
     * This function attaches buyer tax number fields/logic to the parent div
     */

    var defaultLabels = {
        numberNameLabel: "<span data-taxamo-label='ui_configuration.b2b_current.business_number_name'></span>",
        validNumber: "<span data-taxamo-label='ui_configuration.b2b_current.business_number_name'></span> is valid.",
        invalidNumber: "<span data-taxamo-label='ui_configuration.b2b_current.business_number_name'></span> is not valid, please re-check if it was provided correctly.",
        numberError: "There was an error validating your <span data-taxamo-label='ui_configuration.b2b_current.business_number_name'></span>, please try again.",
        taxApplied: "<span data-taxamo-label='ui_configuration.b2b_current.tax_name'></span> will be applied.",
        selfDeclarationDisclaimer: "By entering your <span data-taxamo-label='ui_configuration.b2b_current.business_number_name'></span>, you confirm you are a <span data-taxamo-label='ui_configuration.b2b_current.tax_name'></span> <span data-taxamo-label='ui_configuration.b2b_current.country_name'></span> registered business.",
        captchaPrompt: "<span data-taxamo-label='transaction.additional_interactions.b2b_captcha.interaction_prompt_message'></span>",
        reloadButton: "Refresh",
        submitButton: "Submit",
        captchaSolution: "Solution",
        captchaCheckFailed: "Captcha check failed, please try again.",
        captchaRefresh: "Captcha check failed or invalid <span data-taxamo-label='ui_configuration.b2b_current.business_number_name'></span>, please check your <span data-taxamo-label='ui_configuration.b2b_current.business_number_name'></span> and try again.",
        region: "Region",

    }

    u.attachRegionWidget = function(parentEl, labels) {
        parentEl.innerHTML = '';
        labels = Object.assign({}, defaultLabels, labels);

        var textInputWrapperEl = document.createElement("div");
        parentEl.appendChild(textInputWrapperEl);

        var textLabelEl = document.createElement("label");
        textLabelEl.innerHTML = labels.region;
        textInputWrapperEl.appendChild(textLabelEl);

        var inputEl = document.createElement("input");
        textInputWrapperEl.appendChild(inputEl);

        var selectWrapperEl = document.createElement("div");
        parentEl.appendChild(selectWrapperEl);

        var selectLabelEl = document.createElement("label");
        selectLabelEl.innerHTML = labels.region;
        selectWrapperEl.appendChild(selectLabelEl);

        var selectEl = document.createElement("select");
        selectWrapperEl.appendChild(selectEl);

        u.attachRegion(selectWrapperEl, textInputWrapperEl, selectEl, inputEl);
    }
    u.attachBuyerTaxNumberWidget = function(parentEl, labels) {

        parentEl.innerHTML = '';

        labels = Object.assign({}, defaultLabels, labels);
        u.attachDisplay(parentEl, u.getTaxResultFieldValueFn("ui_configuration.b2b_current"));

        //input
        var inputWrapperEl = document.createElement("div");
        parentEl.appendChild(inputWrapperEl);

        var labelEl = document.createElement("label");
        labelEl.innerHTML = labels.numberNameLabel;
        inputWrapperEl.appendChild(labelEl);

        var inputEl = document.createElement("input");
        u.bindFieldToElement(inputEl, "buyer_tax_number", {debounce: 1000});
        inputWrapperEl.appendChild(inputEl);
        labelEl.control = inputEl;

        //self declaration label
        var selfDeclarationDisclaimerLabel = document.createElement("span");
        selfDeclarationDisclaimerLabel.innerHTML = labels.selfDeclarationDisclaimer;
        u.attachDisplay(selfDeclarationDisclaimerLabel,
        u.getTaxResultFieldValueFn("ui_configuration.b2b_current.b2b_self_declaration"));

        inputWrapperEl.appendChild(selfDeclarationDisclaimerLabel);

        var validationStatusWrapperEl = document.createElement("div");
        parentEl.appendChild(validationStatusWrapperEl);


        var validNumberLabel = document.createElement("span");
        var invalidNumberLabel = document.createElement("span");
        var numberErrorLabel = document.createElement("span");
        var taxAppliedLabel = document.createElement("span");
        validNumberLabel.innerHTML = labels.validNumber;
        invalidNumberLabel.innerHTML = labels.invalidNumber;
        numberErrorLabel.innerHTML = labels.numberError;
        taxAppliedLabel.innerHTML = labels.taxApplied;

        validationStatusWrapperEl.appendChild(validNumberLabel);
        validationStatusWrapperEl.appendChild(invalidNumberLabel);
        validationStatusWrapperEl.appendChild(numberErrorLabel);
        validationStatusWrapperEl.appendChild(taxAppliedLabel);

        //validation result label
        u.attachBuyerTaxNumberStatusLabels(validNumberLabel,
                                            invalidNumberLabel,
                                            numberErrorLabel,
                                            taxAppliedLabel);

        //catpcha stuff
        var captchaWrapperEl = document.createElement("div");
        parentEl.appendChild(captchaWrapperEl);
        u.attachDisplay(captchaWrapperEl, u.canDisplayCaptchaWidget);
        var captchaPrompt = document.createElement("span");
        captchaPrompt.innerHTML = labels.captchaPrompt;
        captchaWrapperEl.appendChild(captchaPrompt);

        var captchaImageWrapperEl = document.createElement("div");
        captchaWrapperEl.appendChild(captchaImageWrapperEl);

        var captchaImageEl = document.createElement("img");
        captchaImageWrapperEl.appendChild(captchaImageEl);
        captchaImageEl.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

        u.attachDisplay(captchaImageWrapperEl, u.getTaxResultFieldValueFn("transaction.additional_interactions.b2b_captcha.captcha.riddle_key"));
        u.attachCaptchaImage(captchaImageEl);
        var reloadCaptchaButtonEl = document.createElement("button");
        captchaImageWrapperEl.appendChild(reloadCaptchaButtonEl);
        reloadCaptchaButtonEl.innerHTML = labels.reloadButton;
        reloadCaptchaButtonEl.addEventListener("click", u.reloadCaptchaImage);

        var captchaSolutionWrapperEl = document.createElement("div");
        captchaWrapperEl.appendChild(captchaSolutionWrapperEl);

        var captchaSolutionLabelEl = document.createElement("label");
        captchaSolutionLabelEl.innerHTML = labels.captchaSolution;
        captchaSolutionWrapperEl.appendChild(captchaSolutionLabelEl);

        var solutionInputEl = document.createElement("input");

        captchaSolutionWrapperEl.appendChild(solutionInputEl);
        captchaSolutionLabelEl.control = solutionInputEl;


        var submitButtonEl = document.createElement("button");
        captchaWrapperEl.appendChild(submitButtonEl);
        submitButtonEl.innerHTML = labels.submitButton;
        submitButtonEl.addEventListener("click", function() {
            u.submitCaptchaSolution(solutionInputEl.value);
        });


        var captchaCheckFailedEl = document.createElement("span");
        var captchaRefreshEl = document.createElement("span");

        captchaCheckFailedEl.innerHTML = labels.captchaCheckFailed;
        captchaRefreshEl.innerHTML = labels.captchaRefresh;

        captchaImageWrapperEl.appendChild(captchaCheckFailedEl);
        captchaImageWrapperEl.appendChild(captchaRefreshEl);

        u.attachCaptchaCheckResultStatusLabels(captchaCheckFailedEl,
                                                captchaRefreshEl);
    }

    u.getTaxResult = function() {
        return taxResult;
    }

    u.addAdditionalEventListeners = function () {
        if (globalOpts.clearBuyerTaxNumberOnBillingCountryChange) {
            u.addEventListener('taxamo-field-updated-billing_country_code', function(e) {
                var bcc = (transactionData && transactionData.billing_country_code) ||
                          (taxResult && taxResult.transaction && taxResult.transaction.countries && taxResult.transaction.countries.by_billing && taxResult.transaction.countries.by_billing.code);
                var tnc = (taxResult && taxResult.transaction && taxResult.transaction.countries && taxResult.transaction.countries.by_tax_number && taxResult.transaction.countries.by_tax_number.code);
                if (bcc !== null && bcc !== undefined && tnc !== null && tnc !== undefined && bcc !== tnc) {
                    d('Clearing buyer_tax_number field');
                    u.updateTransactionFieldValue("buyer_tax_number", null);
                }
            });
        }
    };

    u.addAdditionalEventListeners();

    return u;
}