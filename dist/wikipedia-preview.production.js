!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.wikipediaPreview=n():t.wikipediaPreview=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=96)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(49))},function(t,n,e){var r=e(0),o=e(22),i=e(4),c=e(31),u=e(39),a=e(64),f=o("wks"),s=r.Symbol,p=a?s:c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=p("Symbol."+t)),f[t]}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(2);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(7),o=e(9),i=e(16);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(7),o=e(27),i=e(6),c=e(19),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(56),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(0),o=e(15).f,i=e(8),c=e(12),u=e(20),a=e(54),f=e(34);t.exports=function(t,n){var e,s,p,l,v,d=t.target,h=t.global,g=t.stat;if(e=h?r:g?r[d]||u(d,{}):(r[d]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(h?s:d+(g?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;a(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),c(e,s,l,t)}}},function(t,n,e){var r=e(0),o=e(8),i=e(4),c=e(20),u=e(21),a=e(30),f=a.get,s=a.enforce,p=String(String).split("String");(t.exports=function(t,n,e,u){var a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,l=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=p.join("string"==typeof n?n:"")),t!==r?(a?!l&&t[n]&&(f=!0):delete t[n],f?t[n]=e:o(t,n,e)):f?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n,e){var r=e(33),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(7),o=e(50),i=e(16),c=e(17),u=e(19),a=e(4),f=e(27),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(26),o=e(18);t.exports=function(t){return r(o(t))}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(0),o=e(8);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(22),o=Function.toString;t.exports=r("inspectSource",(function(t){return o.call(t)}))},function(t,n,e){var r=e(29),o=e(51);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.7",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(14);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r,o,i=e(0),c=e(41),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r={};r[e(1)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,n,e){var r=e(2),o=e(5),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(7),o=e(2),i=e(28);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(3),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n){t.exports=!1},function(t,n,e){var r,o,i,c=e(52),u=e(0),a=e(3),f=e(8),s=e(4),p=e(53),l=e(32),v=u.WeakMap;if(c){var d=new v,h=d.get,g=d.has,y=d.set;r=function(t,n){return y.call(d,t,n),n},o=function(t){return h.call(d,t)||{}},i=function(t){return g.call(d,t)}}else{var m=p("state");l[m]=!0,r=function(t,n){return f(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports={}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(2),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){"use strict";var r=e(63).forEach,o=e(65);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,n,e){var r=e(18);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(3),o=e(38),i=e(1)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(5);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){"use strict";var r=e(11),o=e(2),i=e(38),c=e(3),u=e(36),a=e(13),f=e(68),s=e(37),p=e(69),l=e(1),v=e(24),d=l("isConcatSpreadable"),h=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),g=p("concat"),y=function(t){if(!c(t))return!1;var n=t[d];return void 0!==n?!!n:i(t)};r({target:"Array",proto:!0,forced:!h||!g},{concat:function(t){var n,e,r,o,i,c=u(this),p=s(c,0),l=0;for(n=-1,r=arguments.length;n<r;n++)if(i=-1===n?c:arguments[n],y(i)){if(l+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,l++)e in i&&f(p,l,i[e])}else{if(l>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(p,l++,i)}return p.length=l,p}})},function(t,n,e){var r=e(10);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(25),o=e(5),i=e(1)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:c?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},function(t,n){t.exports={}},function(t,n,e){var r,o,i,c=e(0),u=e(2),a=e(5),f=e(23),s=e(84),p=e(28),l=e(45),v=c.location,d=c.setImmediate,h=c.clearImmediate,g=c.process,y=c.MessageChannel,m=c.Dispatch,x=0,w={},b=function(t){if(w.hasOwnProperty(t)){var n=w[t];delete w[t],n()}},S=function(t){return function(){b(t)}},j=function(t){b(t.data)},E=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};d&&h||(d=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return w[++x]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},r(x),x},h=function(t){delete w[t]},"process"==a(g)?r=function(t){g.nextTick(S(t))}:m&&m.now?r=function(t){m.now(S(t))}:y&&!l?(i=(o=new y).port2,o.port1.onmessage=j,r=f(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||u(E)?r="onreadystatechange"in p("script")?function(t){s.appendChild(p("script")).onreadystatechange=function(){s.removeChild(this),b(t)}}:function(t){setTimeout(S(t),0)}:(r=E,c.addEventListener("message",j,!1))),t.exports={set:d,clear:h}},function(t,n,e){var r=e(41);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,n,e){"use strict";var r=e(14),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,n,e){"use strict";var r=e(11),o=e(35);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(20),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(0),o=e(21),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(22),o=e(31),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(4),o=e(55),i=e(15),c=e(9);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},function(t,n,e){var r=e(10),o=e(57),i=e(62),c=e(6);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(58),o=e(61).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(4),o=e(17),i=e(59).indexOf,c=e(32);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(17),o=e(13),i=e(60),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(33),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(23),o=e(26),i=e(36),c=e(13),u=e(37),a=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,p=6==t,l=5==t||p;return function(v,d,h,g){for(var y,m,x=i(v),w=o(x),b=r(d,h,3),S=c(w.length),j=0,E=g||u,T=n?E(v,S):e?E(v,0):void 0;S>j;j++)if((l||j in w)&&(m=b(y=w[j],j,x),t))if(n)T[j]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return j;case 2:a.call(T,y)}else if(s)return!1;return p?-1:f||s?s:T}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,e){var r=e(39);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol()},function(t,n,e){"use strict";var r=e(2);t.exports=function(t,n){var e=[][t];return!e||!r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(0),o=e(67),i=e(35),c=e(8);for(var u in o){var a=r[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){"use strict";var r=e(19),o=e(9),i=e(16);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},function(t,n,e){var r=e(2),o=e(1),i=e(24),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){var r=e(25),o=e(12),i=e(71);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n,e){"use strict";var r=e(25),o=e(42);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,e){"use strict";var r,o,i,c,u=e(11),a=e(29),f=e(0),s=e(10),p=e(73),l=e(12),v=e(74),d=e(75),h=e(76),g=e(3),y=e(14),m=e(77),x=e(5),w=e(21),b=e(78),S=e(82),j=e(83),E=e(44).set,T=e(85),L=e(86),O=e(87),M=e(46),k=e(88),C=e(30),P=e(34),A=e(1),R=e(24),_=A("species"),I="Promise",N=C.get,F=C.set,H=C.getterFor(I),U=p,z=f.TypeError,D=f.document,G=f.process,W=s("fetch"),B=M.f,V=B,q="process"==x(G),J=!!(D&&D.createEvent&&f.dispatchEvent),X=P(I,(function(){if(!(w(U)!==String(U))){if(66===R)return!0;if(!q&&"function"!=typeof PromiseRejectionEvent)return!0}if(a&&!U.prototype.finally)return!0;if(R>=51&&/native code/.test(U))return!1;var t=U.resolve(1),n=function(t){t((function(){}),(function(){}))};return(t.constructor={})[_]=n,!(t.then((function(){}))instanceof n)})),K=X||!S((function(t){U.all(t).catch((function(){}))})),Y=function(t){var n;return!(!g(t)||"function"!=typeof(n=t.then))&&n},$=function(t,n,e){if(!n.notified){n.notified=!0;var r=n.reactions;T((function(){for(var o=n.value,i=1==n.state,c=0;r.length>c;){var u,a,f,s=r[c++],p=i?s.ok:s.fail,l=s.resolve,v=s.reject,d=s.domain;try{p?(i||(2===n.rejection&&nt(t,n),n.rejection=1),!0===p?u=o:(d&&d.enter(),u=p(o),d&&(d.exit(),f=!0)),u===s.promise?v(z("Promise-chain cycle")):(a=Y(u))?a.call(u,l,v):l(u)):v(o)}catch(t){d&&!f&&d.exit(),v(t)}}n.reactions=[],n.notified=!1,e&&!n.rejection&&Z(t,n)}))}},Q=function(t,n,e){var r,o;J?((r=D.createEvent("Event")).promise=n,r.reason=e,r.initEvent(t,!1,!0),f.dispatchEvent(r)):r={promise:n,reason:e},(o=f["on"+t])?o(r):"unhandledrejection"===t&&O("Unhandled promise rejection",e)},Z=function(t,n){E.call(f,(function(){var e,r=n.value;if(tt(n)&&(e=k((function(){q?G.emit("unhandledRejection",r,t):Q("unhandledrejection",t,r)})),n.rejection=q||tt(n)?2:1,e.error))throw e.value}))},tt=function(t){return 1!==t.rejection&&!t.parent},nt=function(t,n){E.call(f,(function(){q?G.emit("rejectionHandled",t):Q("rejectionhandled",t,n.value)}))},et=function(t,n,e,r){return function(o){t(n,e,o,r)}},rt=function(t,n,e,r){n.done||(n.done=!0,r&&(n=r),n.value=e,n.state=2,$(t,n,!0))},ot=function(t,n,e,r){if(!n.done){n.done=!0,r&&(n=r);try{if(t===e)throw z("Promise can't be resolved itself");var o=Y(e);o?T((function(){var r={done:!1};try{o.call(e,et(ot,t,r,n),et(rt,t,r,n))}catch(e){rt(t,r,e,n)}})):(n.value=e,n.state=1,$(t,n,!1))}catch(e){rt(t,{done:!1},e,n)}}};X&&(U=function(t){m(this,U,I),y(t),r.call(this);var n=N(this);try{t(et(ot,this,n),et(rt,this,n))}catch(t){rt(this,n,t)}},(r=function(t){F(this,{type:I,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(U.prototype,{then:function(t,n){var e=H(this),r=B(j(this,U));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=q?G.domain:void 0,e.parent=!0,e.reactions.push(r),0!=e.state&&$(this,e,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,n=N(t);this.promise=t,this.resolve=et(ot,t,n),this.reject=et(rt,t,n)},M.f=B=function(t){return t===U||t===i?new o(t):V(t)},a||"function"!=typeof p||(c=p.prototype.then,l(p.prototype,"then",(function(t,n){var e=this;return new U((function(t,n){c.call(e,t,n)})).then(t,n)}),{unsafe:!0}),"function"==typeof W&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return L(U,W.apply(f,arguments))}}))),u({global:!0,wrap:!0,forced:X},{Promise:U}),d(U,I,!1,!0),h(I),i=s(I),u({target:I,stat:!0,forced:X},{reject:function(t){var n=B(this);return n.reject.call(void 0,t),n.promise}}),u({target:I,stat:!0,forced:a||X},{resolve:function(t){return L(a&&this===i?U:this,t)}}),u({target:I,stat:!0,forced:K},{all:function(t){var n=this,e=B(n),r=e.resolve,o=e.reject,i=k((function(){var e=y(n.resolve),i=[],c=0,u=1;b(t,(function(t){var a=c++,f=!1;i.push(void 0),u++,e.call(n,t).then((function(t){f||(f=!0,i[a]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=B(n),r=e.reject,o=k((function(){var o=y(n.resolve);b(t,(function(t){o.call(n,t).then(e.resolve,r)}))}));return o.error&&r(o.value),e.promise}})},function(t,n,e){var r=e(0);t.exports=r.Promise},function(t,n,e){var r=e(12);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){var r=e(9).f,o=e(4),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){"use strict";var r=e(10),o=e(9),i=e(1),c=e(7),u=i("species");t.exports=function(t){var n=r(t),e=o.f;c&&n&&!n[u]&&e(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){var r=e(6),o=e(79),i=e(13),c=e(23),u=e(80),a=e(81),f=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,e,s,p){var l,v,d,h,g,y,m,x=c(n,e,s?2:1);if(p)l=t;else{if("function"!=typeof(v=u(t)))throw TypeError("Target is not iterable");if(o(v)){for(d=0,h=i(t.length);h>d;d++)if((g=s?x(r(m=t[d])[0],m[1]):x(t[d]))&&g instanceof f)return g;return new f(!1)}l=v.call(t)}for(y=l.next;!(m=y.call(l)).done;)if("object"==typeof(g=a(l,x,m.value,s))&&g&&g instanceof f)return g;return new f(!1)}).stop=function(t){return new f(!0,t)}},function(t,n,e){var r=e(1),o=e(43),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,e){var r=e(42),o=e(43),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(6);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){var r=e(6),o=e(14),i=e(1)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},function(t,n,e){var r=e(10);t.exports=r("document","documentElement")},function(t,n,e){var r,o,i,c,u,a,f,s,p=e(0),l=e(15).f,v=e(5),d=e(44).set,h=e(45),g=p.MutationObserver||p.WebKitMutationObserver,y=p.process,m=p.Promise,x="process"==v(y),w=l(p,"queueMicrotask"),b=w&&w.value;b||(r=function(){var t,n;for(x&&(t=y.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},x?c=function(){y.nextTick(r)}:g&&!h?(u=!0,a=document.createTextNode(""),new g(r).observe(a,{characterData:!0}),c=function(){a.data=u=!u}):m&&m.resolve?(f=m.resolve(void 0),s=f.then,c=function(){s.call(f,r)}):c=function(){d.call(p,r)}),t.exports=b||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},function(t,n,e){var r=e(6),o=e(3),i=e(46);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){var r=e(0);t.exports=function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}},function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,n,e){"use strict";var r=e(11),o=e(90).trim;r({target:"String",proto:!0,forced:e(91)("trim")},{trim:function(){return o(this)}})},function(t,n,e){var r=e(18),o="["+e(47)+"]",i=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),u=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(c,"")),e}};t.exports={start:u(1),end:u(2),trim:u(3)}},function(t,n,e){var r=e(2),o=e(47);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},function(t,n,e){var r=e(93);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};e(95)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(94)(!1)).push([t.i,".wp-popup {\n  box-sizing: border-box;\n  padding: 0;\n  position: absolute;\n  border: solid rgba(0, 0, 0, 0.05) 1px;\n  border-radius: 2px;\n  background-color: white;\n  box-shadow: 0 30px 90px -20px rgba(0, 0, 0, 0.3), 0 0 1px 1px rgba(0, 0, 0, 0.05);\n  height: 200px;\n  width: auto;\n  z-index: 110;\n}\n.wp-popup * {\n  box-sizing: border-box;\n}\n.wp-popup .wp-article-preview {\n  display: flex;\n}\n.wp-popup .wp-article-preview .wp-text-content {\n  width: 200px;\n  height: 200px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-title {\n  font-size: 20px;\n  font-family: 'Linux Libertine', 'Georgia', 'Times', serif;\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-preview {\n  font-size: 14px;\n  flex-grow: 1;\n  font-family: sans-serif;\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-preview p {\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  line-height: 20px;\n  max-height: 140px;\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-preview p:after {\n  content: ' ';\n  position: absolute;\n  bottom: 25px;\n  left: 10px;\n  right: 200px;\n  top: 160px;\n  background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, #ffffff 100%);\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, #ffffff 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#ffffff', GradientType=0);\n  /* IE6-9 */\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-preview .wp-link {\n  font-family: 'Linux Libertine';\n}\n.wp-popup .wp-article-preview .wp-image {\n  width: 200px;\n  height: 200px;\n  background-size: cover;\n  background-position: center;\n}\n",""])},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=(c=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(a," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[e].concat(i).concat([o]).join("\n")}var c,u,a;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2],"{").concat(e,"}"):e})).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var c=0;c<t.length;c++){var u=t[c];null!=u[0]&&r[u[0]]||(e&&!u[2]?u[2]=e:e&&(u[2]="(".concat(u[2],") and (").concat(e,")")),n.push(u))}},n}},function(t,n,e){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},c=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}();function u(t,n){for(var e=[],r={},o=0;o<t.length;o++){var i=t[o],c=n.base?i[0]+n.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[c]?r[c].parts.push(u):e.push(r[c]={id:c,parts:[u]})}return e}function a(t,n){for(var e=0;e<t.length;e++){var r=t[e],i=o[r.id],c=0;if(i){for(i.refs++;c<i.parts.length;c++)i.parts[c](r.parts[c]);for(;c<r.parts.length;c++)i.parts.push(g(r.parts[c],n))}else{for(var u=[];c<r.parts.length;c++)u.push(g(r.parts[c],n));o[r.id]={id:r.id,refs:1,parts:u}}}}function f(t){var n=document.createElement("style");if(void 0===t.attributes.nonce){var r=e.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(e){n.setAttribute(e,t.attributes[e])})),"function"==typeof t.insert)t.insert(n);else{var o=c(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var s,p=(s=[],function(t,n){return s[t]=n,s.filter(Boolean).join("\n")});function l(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=p(n,o);else{var i=document.createTextNode(o),c=t.childNodes;c[n]&&t.removeChild(c[n]),c.length?t.insertBefore(i,c[n]):t.appendChild(i)}}function v(t,n,e){var r=e.css,o=e.media,i=e.sourceMap;if(o&&t.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d=null,h=0;function g(t,n){var e,r,o;if(n.singleton){var i=h++;e=d||(d=f(n)),r=l.bind(null,e,i,!1),o=l.bind(null,e,i,!0)}else e=f(n),r=v.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i());var e=u(t,n);return a(e,n),function(t){for(var r=[],i=0;i<e.length;i++){var c=e[i],f=o[c.id];f&&(f.refs--,r.push(f))}t&&a(u(t,n),n);for(var s=0;s<r.length;s++){var p=r[s];if(0===p.refs){for(var l=0;l<p.parts.length;l++)p.parts[l]();delete o[p.id]}}}}},function(t,n,e){"use strict";e.r(n);e(48),e(66),e(40),e(70),e(72);var r,o=function(t,n){return n=n||{},new Promise((function(e,r){var o=new XMLHttpRequest,i=[],c=[],u={},a=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:a,headers:{keys:function(){return i},entries:function(){return c},get:function(t){return u[t.toLowerCase()]},has:function(t){return t.toLowerCase()in u}}}};for(var f in o.open(n.method||"get",t,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(t,n,e){i.push(n=n.toLowerCase()),c.push([n,e]),u[n]=u[n]?u[n]+","+e:e})),e(a())},o.onerror=r,o.withCredentials="include"==n.credentials,n.headers)o.setRequestHeader(f,n.headers[f]);o.send(n.body||null)}))},i={},c={},u=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o;return void 0!==i[t]?Promise.resolve(i[t]):c[t]?c[t]:c[t]=e(t).then((function(t){return t.json()})).then((function(t){return n(t)})).then((function(n){return i[t]=n,n}))},a=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u,r="https://".concat(t,".wikipedia.org/api/rest_v1/page/summary/").concat(encodeURIComponent(n));return e(r,(function(t){return"standard"===t.type&&("ltr"===t.dir&&{title:t.displaytitle,extractHtml:t.extract_html,pageUrl:t.content_urls.desktop.page,imgUrl:t.thumbnail?t.thumbnail.source:null})}))},f=function(t,n,e,r,o,i){var c,u="",a="";return c=t.x>o/2?e+t.right-n:e+t.left,t.y>i/2?a=i-t.top-r:u=r+t.bottom,{left:c,right:"",top:u,bottom:a}},s=function(t){return t?t+"px":t},p=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;r||((r=e.document.createElement("div")).setAttribute("dir","ltr"),r.classList.add("wp-popup"),r.style.visibility="hidden",t.appendChild(r));var o=function t(e){var o=e.toElement;o===n||r.contains(o)||(r.style.visibility="hidden",n.removeEventListener("mouseleave",t),n=null)};r.addEventListener("mouseleave",o);var i=function(t,i){r.innerHTML=t;var c=f(i.getBoundingClientRect(),r.offsetWidth,e.scrollX,e.scrollY,e.innerWidth,e.innerHeight);r.style.left=s(c.left),r.style.right=s(c.right),r.style.top=s(c.top),r.style.bottom=s(c.bottom),(n=i).addEventListener("mouseleave",o),r.style.visibility="visible"};return{show:i}},l=(e(89),{en:{wikipedia:"Wikipedia"},fr:{wikipedia:"Wikipédia"},es:{wikipedia:"Wikipedia"}}),v=function(t,n){var e=n.imgUrl?'<div class="wp-image" style="background-image: url(\''.concat(n.imgUrl,"');\" />"):"",r=function(t,n){return(l[t]||l.en)[n]}(t,"wikipedia");return'\n\t\t<div class="wp-article-preview">\n\t\t\t<div class="wp-text-content">\n\t\t\t\t<div class="wp-title">'.concat(n.title,'</div>\n\t\t\t\t<div class="wp-preview">').concat(n.extractHtml,'</div>\n\t\t\t\t<a class="wp-link" href="').concat(n.pageUrl,'" target="_blank">').concat(r,"</a>\n\t\t\t</div>\n\t\t\t").concat(e,"\n\t\t</div>\n\t").trim()};e(92);function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.root,e=t.selector,r=t.lang,o=t.popupContainer,i=r||"en";n=n||document,e=e||"[data-wikipedia-preview]",o=o||document.body;var c=p(o),u=function(t){var n=t.target,e=n.getAttribute("data-wp-title")||n.textContent,r=n.getAttribute("data-wp-lang")||i;a(r,e).then((function(t){t&&c.show(v(r,t),n)}))};Array.prototype.forEach.call(n.querySelectorAll(e),(function(t){t.addEventListener("mouseenter",u)}))}e.d(n,"init",(function(){return d}))}])}));