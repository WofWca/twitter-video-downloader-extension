(()=>{var t={591:(t,e,r)=>{var n=r(8).default;function o(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p={};function d(){}function v(){}function y(){}var g={};l(g,c,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(O([])));w&&w!==r&&i.call(w,c)&&(g=w);var b=y.prototype=d.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,a,c,s){var u=h(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return v.prototype=y,l(b,"constructor",y),l(y,"constructor",v),v.displayName=l(y,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},x(_.prototype),l(_.prototype,s,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new _(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),l(b,u,"Generator"),l(b,c,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),s=i.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},757:(t,e,r)=>{t.exports=r(591)()}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=e.apply(r,n);function c(e){t(a,o,i,c,s,"next",e)}function s(e){t(a,o,i,c,s,"throw",e)}c(void 0)}))}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=r(757),a=r.n(i);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t?("object"!==c(t)||(void 0!==t[e]?r.push(t):Object.values(t).forEach((function(t){r.push.apply(r,o(s(t,e)))}))),r):r}function u(t){var e=t.id_str||t.conversation_id_str;if(!t.full_text)return e;var r=t.full_text.split("https://t.co")[0].trim().replace(/(\r\n|\n|\r)/gm,"").substr(0,50);return r||(r=e),r}function l(t){return"video"===t.type||"animated_gif"===t.type}function f(t,e){return h.apply(this,arguments)}function h(){return(h=e(a().mark((function t(e,r){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(e).then((function(t){return t.blob()})).then((function(t){var e=document.createElement("a");e.style.display="none",document.body.appendChild(e),e.href=window.URL.createObjectURL(t),e.setAttribute("target","_blank"),e.setAttribute("download","".concat(r,".mp4")),e.click(),window.URL.revokeObjectURL(e.href),document.body.removeChild(e)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
var p=Object.prototype.toString,d=Array.isArray||function(t){return"[object Array]"===p.call(t)};function v(t){return"function"==typeof t}function y(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function g(t,e){return null!=t&&"object"==typeof t&&e in t}var m=RegExp.prototype.test;var w=/\S/;function b(t){return!function(t,e){return m.call(t,e)}(w,t)}var x={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};var _=/\s*/,L=/\s+/,E=/\s*=/,S=/\s*\}/,k=/#|\^|\/|>|\{|&|=|!/;function O(t){this.string=t,this.tail=t,this.pos=0}function j(t,e){this.view=t,this.cache={".":this.view},this.parent=e}function C(){this.templateCache={_cache:{},set:function(t,e){this._cache[t]=e},get:function(t){return this._cache[t]},clear:function(){this._cache={}}}}O.prototype.eos=function(){return""===this.tail},O.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var r=e[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r},O.prototype.scanUntil=function(t){var e,r=this.tail.search(t);switch(r){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=e.length,e},j.prototype.push=function(t){return new j(t,this)},j.prototype.lookup=function(t){var e,r,n,o=this.cache;if(o.hasOwnProperty(t))e=o[t];else{for(var i,a,c,s=this,u=!1;s;){if(t.indexOf(".")>0)for(i=s.view,a=t.split("."),c=0;null!=i&&c<a.length;)c===a.length-1&&(u=g(i,a[c])||(r=i,n=a[c],null!=r&&"object"!=typeof r&&r.hasOwnProperty&&r.hasOwnProperty(n))),i=i[a[c++]];else i=s.view[t],u=g(s.view,t);if(u){e=i;break}s=s.parent}o[t]=e}return v(e)&&(e=e.call(this.view)),e},C.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},C.prototype.parse=function(t,e){var r=this.templateCache,n=t+":"+(e||A.tags).join(":"),o=void 0!==r,i=o?r.get(n):void 0;return null==i&&(i=function(t,e){if(!t)return[];var r,n,o,i=!1,a=[],c=[],s=[],u=!1,l=!1,f="",h=0;function p(){if(u&&!l)for(;s.length;)delete c[s.pop()];else s=[];u=!1,l=!1}function v(t){if("string"==typeof t&&(t=t.split(L,2)),!d(t)||2!==t.length)throw new Error("Invalid tags: "+t);r=new RegExp(y(t[0])+"\\s*"),n=new RegExp("\\s*"+y(t[1])),o=new RegExp("\\s*"+y("}"+t[1]))}v(e||A.tags);for(var g,m,w,x,j,C,T=new O(t);!T.eos();){if(g=T.pos,w=T.scanUntil(r))for(var I=0,M=w.length;I<M;++I)b(x=w.charAt(I))?(s.push(c.length),f+=x):(l=!0,i=!0,f+=" "),c.push(["text",x,g,g+1]),g+=1,"\n"===x&&(p(),f="",h=0,i=!1);if(!T.scan(r))break;if(u=!0,m=T.scan(k)||"name",T.scan(_),"="===m?(w=T.scanUntil(E),T.scan(E),T.scanUntil(n)):"{"===m?(w=T.scanUntil(o),T.scan(S),T.scanUntil(n),m="&"):w=T.scanUntil(n),!T.scan(n))throw new Error("Unclosed tag at "+T.pos);if(j=">"==m?[m,w,g,T.pos,f,h,i]:[m,w,g,T.pos],h++,c.push(j),"#"===m||"^"===m)a.push(j);else if("/"===m){if(!(C=a.pop()))throw new Error('Unopened section "'+w+'" at '+g);if(C[1]!==w)throw new Error('Unclosed section "'+C[1]+'" at '+g)}else"name"===m||"{"===m||"&"===m?l=!0:"="===m&&v(w)}if(p(),C=a.pop())throw new Error('Unclosed section "'+C[1]+'" at '+T.pos);return function(t){for(var e,r=[],n=r,o=[],i=0,a=t.length;i<a;++i)switch((e=t[i])[0]){case"#":case"^":n.push(e),o.push(e),n=e[4]=[];break;case"/":o.pop()[5]=e[2],n=o.length>0?o[o.length-1][4]:r;break;default:n.push(e)}return r}(function(t){for(var e,r,n=[],o=0,i=t.length;o<i;++o)(e=t[o])&&("text"===e[0]&&r&&"text"===r[0]?(r[1]+=e[1],r[3]=e[3]):(n.push(e),r=e));return n}(c))}(t,e),o&&r.set(n,i)),i},C.prototype.render=function(t,e,r,n){var o=this.getConfigTags(n),i=this.parse(t,o),a=e instanceof j?e:new j(e,void 0);return this.renderTokens(i,a,r,t,n)},C.prototype.renderTokens=function(t,e,r,n,o){for(var i,a,c,s="",u=0,l=t.length;u<l;++u)c=void 0,"#"===(a=(i=t[u])[0])?c=this.renderSection(i,e,r,n,o):"^"===a?c=this.renderInverted(i,e,r,n,o):">"===a?c=this.renderPartial(i,e,r,o):"&"===a?c=this.unescapedValue(i,e):"name"===a?c=this.escapedValue(i,e,o):"text"===a&&(c=this.rawValue(i)),void 0!==c&&(s+=c);return s},C.prototype.renderSection=function(t,e,r,n,o){var i=this,a="",c=e.lookup(t[1]);if(c){if(d(c))for(var s=0,u=c.length;s<u;++s)a+=this.renderTokens(t[4],e.push(c[s]),r,n,o);else if("object"==typeof c||"string"==typeof c||"number"==typeof c)a+=this.renderTokens(t[4],e.push(c),r,n,o);else if(v(c)){if("string"!=typeof n)throw new Error("Cannot use higher-order sections without the original template");null!=(c=c.call(e.view,n.slice(t[3],t[5]),(function(t){return i.render(t,e,r,o)})))&&(a+=c)}else a+=this.renderTokens(t[4],e,r,n,o);return a}},C.prototype.renderInverted=function(t,e,r,n,o){var i=e.lookup(t[1]);if(!i||d(i)&&0===i.length)return this.renderTokens(t[4],e,r,n,o)},C.prototype.indentPartial=function(t,e,r){for(var n=e.replace(/[^ \t]/g,""),o=t.split("\n"),i=0;i<o.length;i++)o[i].length&&(i>0||!r)&&(o[i]=n+o[i]);return o.join("\n")},C.prototype.renderPartial=function(t,e,r,n){if(r){var o=this.getConfigTags(n),i=v(r)?r(t[1]):r[t[1]];if(null!=i){var a=t[6],c=t[5],s=t[4],u=i;0==c&&s&&(u=this.indentPartial(i,s,a));var l=this.parse(u,o);return this.renderTokens(l,e,r,u,n)}}},C.prototype.unescapedValue=function(t,e){var r=e.lookup(t[1]);if(null!=r)return r},C.prototype.escapedValue=function(t,e,r){var n=this.getConfigEscape(r)||A.escape,o=e.lookup(t[1]);if(null!=o)return"number"==typeof o&&n===A.escape?String(o):n(o)},C.prototype.rawValue=function(t){return t[1]},C.prototype.getConfigTags=function(t){return d(t)?t:t&&"object"==typeof t?t.tags:void 0},C.prototype.getConfigEscape=function(t){return t&&"object"==typeof t&&!d(t)?t.escape:void 0};var A={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){T.templateCache=t},get templateCache(){return T.templateCache}},T=new C;A.clearCache=function(){return T.clearCache()},A.parse=function(t,e){return T.parse(t,e)},A.render=function(t,e,r,n){if("string"!=typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+((d(o=t)?"array":typeof o)+'" was given as the first argument for mustache#render(template, view, partials)'));var o;return T.render(t,e,r,n)},A.escape=function(t){return String(t).replace(/[&<>"'`=\/]/g,(function(t){return x[t]}))},A.Scanner=O,A.Context=j,A.Writer=C;const I=A;function M(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return P(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var U,N,R=[];U=function(t){var e=function(t){var e=o(s(t,"extended_entities")),r=o(s(t,"string_value")).map((function(t){try{var e=JSON.parse(t.string_value),r=Object.values(e.media_entities).filter((function(t){return["video","animated_gif"].indexOf(t.type)>-1})).shift();if(r)return{extended_entities:{media:[r]},id_str:r.id_str}}catch(t){return!1}return!1})).filter(Boolean);return[].concat(o(r),o(e)).filter((function(t){return t.extended_entities.media.filter(l).length})).flatMap((function(t){var e=t.id_str||t.conversation_id_str;return t.extended_entities.media.filter(l).map((function(r){var n=r.video_info.variants.filter((function(t){return"video/mp4"===t.content_type})).sort((function(t,e){return e.bitrate-t.bitrate})).shift();return{id:r.id_str,entityId:e,photo:r.media_url_https.substr(0,r.media_url_https.lastIndexOf(".")),video:n.url,text:u(t)}}))})).filter((function(t,e,r){return r.indexOf(t)===e}))}(t);e.length&&R.push.apply(R,o(e))},N=XMLHttpRequest.prototype.open,XMLHttpRequest.prototype.open=function(t,e){if(/(api\.)?twitter\.com\/(i\/api\/)?(2|graphql|1\.1)\//i.test(e)){var r=this.send;this.send=function(){var t=this.onreadystatechange;return this.onreadystatechange=function(){var e=this.readyState,r=this.responseText;if(e===XMLHttpRequest.DONE&&r)try{U(JSON.parse(r))}catch(t){console.log(t)}return t.apply(this,arguments)},r.apply(this,arguments)}}return N.apply(this,arguments)},function(t){new MutationObserver((function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){if(e instanceof HTMLElement==!1)return!1;if("IMG"===e.nodeName){var r=e.closest("article[role='article']");if(r){var n=r.querySelector("[role='group']:last-child");n&&t({$image:e,$group:n})}}}))}))})).observe(document,{childList:!0,subtree:!0})}((function(t){var r=t.$group,n=t.$image,o=R.find((function(t){return n.src.indexOf(t.photo)>-1})),i=r.getAttribute("data-twitter-video-downloader-extension");if(o&&!i){r.setAttribute("data-twitter-video-downloader-extension","true");var c=r.querySelector("svg").getBoundingClientRect(),s=c.width,u=c.height,l=document.createElement("button");l.classList.add("extension-button"),l.setAttribute("role","button"),l.setAttribute("title","Download"),l.insertAdjacentHTML("beforeend",I.render('<div class="extension-button-container"> <div class="extension-button-hover"></div> <svg class="download-icon" width="{{ width }}" height="{{ height }}" viewBox="0 0 24 24" aria-hidden="true"> <g> <path d="M11.99 16l-5.7-5.7L7.7 8.88l3.29 3.3V2.59h2v9.59l3.3-3.3 1.41 1.42-5.71 5.7zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"> </path> </g> </svg> <svg class="loading-icon" viewBox="0 0 32 32" aria-hidden="true" width="{{ width }}" height="{{ height }}"> <circle cx="16" cy="16" fill="none" r="14" stroke-width="4"></circle> <circle cx="16" cy="16" fill="none" r="14" stroke-width="4"></circle> </svg> <svg class="success-icon" viewBox="0 0 24 24" aria-hidden="true" width="{{ width }}" height="{{ height }}"> <g> <path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"> </path> </g> </svg> </div>',{width:s,height:u})),r.appendChild(l),l.addEventListener("click",function(){var t=e(a().mark((function t(e){var r,n,i,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),this.disabled=!0,this.classList.add("loading"),r=R.filter((function(t){return t.entityId===o.entityId})).filter((function(t,e,r){return e===r.findIndex((function(e){return e.id===t.id}))})),n=M(r),t.prev=5,n.s();case 7:if((i=n.n()).done){t.next=13;break}return c=i.value,t.next=11,f(c.video,c.text);case 11:t.next=7;break;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),n.e(t.t0);case 18:return t.prev=18,n.f(),t.finish(18);case 21:this.classList.remove("loading"),this.classList.add("success");case 23:case"end":return t.stop()}}),t,this,[[5,15,18,21]])})));return function(e){return t.apply(this,arguments)}}())}}))})()})();