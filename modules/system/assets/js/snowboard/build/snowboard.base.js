!function(){var t={2220:function(t,e,n){var r=n(2569),o=n(4354),i=n(3700),s=r.TypeError;t.exports=function(t){if(o(t))return t;throw s(i(t)+" is not a function")}},3467:function(t,e,n){var r=n(2569),o=n(4354),i=r.String,s=r.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw s("Can't set "+i(t)+" as a prototype")}},2834:function(t,e,n){var r=n(2931),o=n(9062),i=n(378),s=r("unscopables"),c=Array.prototype;null==c[s]&&i.f(c,s,{configurable:!0,value:o(null)}),t.exports=function(t){c[s][t]=!0}},1421:function(t,e,n){var r=n(2569),o=n(1651),i=r.String,s=r.TypeError;t.exports=function(t){if(o(t))return t;throw s(i(t)+" is not an object")}},4041:function(t,e,n){var r=n(7830),o=n(7841),i=n(6095),s=function(t){return function(e,n,s){var c,a=r(e),u=i(a),f=o(s,u);if(t&&n!=n){for(;u>f;)if((c=a[f++])!=c)return!0}else for(;u>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},8250:function(t,e,n){var r=n(1540),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},8778:function(t,e,n){var r=n(5320),o=n(6830),i=n(892),s=n(378);t.exports=function(t,e,n){for(var c=o(e),a=s.f,u=i.f,f=0;f<c.length;f++){var l=c[f];r(t,l)||n&&r(n,l)||a(t,l,u(e,l))}}},5031:function(t,e,n){var r=n(2112);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4170:function(t,e,n){"use strict";var r=n(5756).IteratorPrototype,o=n(9062),i=n(3233),s=n(2087),c=n(9259),a=function(){return this};t.exports=function(t,e,n,u){var f=e+" Iterator";return t.prototype=o(r,{next:i(+!u,n)}),s(t,f,!1,!0),c[f]=a,t}},7632:function(t,e,n){var r=n(1738),o=n(378),i=n(3233);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},3233:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},1084:function(t,e,n){"use strict";var r=n(7641),o=n(7425),i=n(1274),s=n(34),c=n(4354),a=n(4170),u=n(9299),f=n(4001),l=n(2087),h=n(7632),p=n(8946),g=n(2931),d=n(9259),b=n(5756),v=s.PROPER,y=s.CONFIGURABLE,w=b.IteratorPrototype,m=b.BUGGY_SAFARI_ITERATORS,O=g("iterator"),S="keys",x="values",j="entries",E=function(){return this};t.exports=function(t,e,n,s,g,b,P){a(n,e,s);var k,L,T,A=function(t){if(t===g&&B)return B;if(!m&&t in I)return I[t];switch(t){case S:case x:case j:return function(){return new n(this,t)}}return function(){return new n(this)}},C=e+" Iterator",F=!1,I=t.prototype,N=I[O]||I["@@iterator"]||g&&I[g],B=!m&&N||A(g),M="Array"==e&&I.entries||N;if(M&&(k=u(M.call(new t)))!==Object.prototype&&k.next&&(i||u(k)===w||(f?f(k,w):c(k[O])||p(k,O,E)),l(k,C,!0,!0),i&&(d[C]=E)),v&&g==x&&N&&N.name!==x&&(!i&&y?h(I,"name",x):(F=!0,B=function(){return o(N,this)})),g)if(L={values:A(x),keys:b?B:A(S),entries:A(j)},P)for(T in L)(m||F||!(T in I))&&p(I,T,L[T]);else r({target:e,proto:!0,forced:m||F},L);return i&&!P||I[O]===B||p(I,O,B,{name:g}),d[e]=B,L}},1738:function(t,e,n){var r=n(2112);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},7934:function(t,e,n){var r=n(2569),o=n(1651),i=r.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},7921:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},6583:function(t,e,n){var r=n(7934)("span").classList,o=r&&r.constructor&&r.constructor.prototype;t.exports=o===Object.prototype?void 0:o},2831:function(t,e,n){var r=n(2430);t.exports=r("navigator","userAgent")||""},9318:function(t,e,n){var r,o,i=n(2569),s=n(2831),c=i.process,a=i.Deno,u=c&&c.versions||a&&a.version,f=u&&u.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(!(r=s.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},4328:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},7641:function(t,e,n){var r=n(2569),o=n(892).f,i=n(7632),s=n(8946),c=n(2024),a=n(8778),u=n(8787);t.exports=function(t,e){var n,f,l,h,p,g=t.target,d=t.global,b=t.stat;if(n=d?r:b?r[g]||c(g,{}):(r[g]||{}).prototype)for(f in e){if(h=e[f],l=t.noTargetGet?(p=o(n,f))&&p.value:n[f],!u(d?f:g+(b?".":"#")+f,t.forced)&&void 0!==l){if(typeof h==typeof l)continue;a(h,l)}(t.sham||l&&l.sham)&&i(h,"sham",!0),s(n,f,h,t)}}},2112:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9581:function(t,e,n){var r=n(2112);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},7425:function(t,e,n){var r=n(9581),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},34:function(t,e,n){var r=n(1738),o=n(5320),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),a=c&&"something"===function(){}.name,u=c&&(!r||r&&s(i,"name").configurable);t.exports={EXISTS:c,PROPER:a,CONFIGURABLE:u}},1540:function(t,e,n){var r=n(9581),o=Function.prototype,i=o.bind,s=o.call,c=r&&i.bind(s,s);t.exports=r?function(t){return t&&c(t)}:function(t){return t&&function(){return s.apply(t,arguments)}}},2430:function(t,e,n){var r=n(2569),o=n(4354),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},5324:function(t,e,n){var r=n(2220);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},2569:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},5320:function(t,e,n){var r=n(1540),o=n(6416),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},9012:function(t){t.exports={}},99:function(t,e,n){var r=n(2430);t.exports=r("document","documentElement")},8232:function(t,e,n){var r=n(1738),o=n(2112),i=n(7934);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},6674:function(t,e,n){var r=n(2569),o=n(1540),i=n(2112),s=n(8250),c=r.Object,a=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?a(t,""):c(t)}:c},5193:function(t,e,n){var r=n(1540),o=n(4354),i=n(7039),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return s(t)}),t.exports=i.inspectSource},3500:function(t,e,n){var r,o,i,s=n(5965),c=n(2569),a=n(1540),u=n(1651),f=n(7632),l=n(5320),h=n(7039),p=n(9097),g=n(9012),d="Object already initialized",b=c.TypeError,v=c.WeakMap;if(s||h.state){var y=h.state||(h.state=new v),w=a(y.get),m=a(y.has),O=a(y.set);r=function(t,e){if(m(y,t))throw new b(d);return e.facade=t,O(y,t,e),e},o=function(t){return w(y,t)||{}},i=function(t){return m(y,t)}}else{var S=p("state");g[S]=!0,r=function(t,e){if(l(t,S))throw new b(d);return e.facade=t,f(t,S,e),e},o=function(t){return l(t,S)?t[S]:{}},i=function(t){return l(t,S)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw b("Incompatible receiver, "+t+" required");return n}}}},4354:function(t){t.exports=function(t){return"function"==typeof t}},8787:function(t,e,n){var r=n(2112),o=n(4354),i=/#|\.prototype\./,s=function(t,e){var n=a[c(t)];return n==f||n!=u&&(o(e)?r(e):!!e)},c=s.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=s.data={},u=s.NATIVE="N",f=s.POLYFILL="P";t.exports=s},1651:function(t,e,n){var r=n(4354);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1274:function(t){t.exports=!1},8937:function(t,e,n){var r=n(2569),o=n(2430),i=n(4354),s=n(7652),c=n(7374),a=r.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&s(e.prototype,a(t))}},5756:function(t,e,n){"use strict";var r,o,i,s=n(2112),c=n(4354),a=n(9062),u=n(9299),f=n(8946),l=n(2931),h=n(1274),p=l("iterator"),g=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(r=o):g=!0),null==r||s((function(){var t={};return r[p].call(t)!==t}))?r={}:h&&(r=a(r)),c(r[p])||f(r,p,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},9259:function(t){t.exports={}},6095:function(t,e,n){var r=n(9309);t.exports=function(t){return r(t.length)}},5598:function(t,e,n){var r=n(9318),o=n(2112);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5965:function(t,e,n){var r=n(2569),o=n(4354),i=n(5193),s=r.WeakMap;t.exports=o(s)&&/native code/.test(i(s))},9062:function(t,e,n){var r,o=n(1421),i=n(3116),s=n(4328),c=n(9012),a=n(99),u=n(7934),f=n(9097),l=f("IE_PROTO"),h=function(){},p=function(t){return"<script>"+t+"</"+"script>"},g=function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e},d=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}var t,e;d="undefined"!=typeof document?document.domain&&r?g(r):((e=u("iframe")).style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F):g(r);for(var n=s.length;n--;)delete d.prototype[s[n]];return d()};c[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(h.prototype=o(t),n=new h,h.prototype=null,n[l]=t):n=d(),void 0===e?n:i.f(n,e)}},3116:function(t,e,n){var r=n(1738),o=n(5734),i=n(378),s=n(1421),c=n(7830),a=n(2551);e.f=r&&!o?Object.defineProperties:function(t,e){s(t);for(var n,r=c(e),o=a(e),u=o.length,f=0;u>f;)i.f(t,n=o[f++],r[n]);return t}},378:function(t,e,n){var r=n(2569),o=n(1738),i=n(8232),s=n(5734),c=n(1421),a=n(7411),u=r.TypeError,f=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",p="configurable",g="writable";e.f=o?s?function(t,e,n){if(c(t),e=a(e),c(n),"function"==typeof t&&"prototype"===e&&"value"in n&&g in n&&!n.writable){var r=l(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:p in n?n.configurable:r.configurable,enumerable:h in n?n.enumerable:r.enumerable,writable:!1})}return f(t,e,n)}:f:function(t,e,n){if(c(t),e=a(e),c(n),i)try{return f(t,e,n)}catch(t){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},892:function(t,e,n){var r=n(1738),o=n(7425),i=n(7079),s=n(3233),c=n(7830),a=n(7411),u=n(5320),f=n(8232),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=c(t),e=a(e),f)try{return l(t,e)}catch(t){}if(u(t,e))return s(!o(i.f,t,e),t[e])}},9704:function(t,e,n){var r=n(9313),o=n(4328).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},419:function(t,e){e.f=Object.getOwnPropertySymbols},9299:function(t,e,n){var r=n(2569),o=n(5320),i=n(4354),s=n(6416),c=n(9097),a=n(5031),u=c("IE_PROTO"),f=r.Object,l=f.prototype;t.exports=a?f.getPrototypeOf:function(t){var e=s(t);if(o(e,u))return e[u];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof f?l:null}},7652:function(t,e,n){var r=n(1540);t.exports=r({}.isPrototypeOf)},9313:function(t,e,n){var r=n(1540),o=n(5320),i=n(7830),s=n(4041).indexOf,c=n(9012),a=r([].push);t.exports=function(t,e){var n,r=i(t),u=0,f=[];for(n in r)!o(c,n)&&o(r,n)&&a(f,n);for(;e.length>u;)o(r,n=e[u++])&&(~s(f,n)||a(f,n));return f}},2551:function(t,e,n){var r=n(9313),o=n(4328);t.exports=Object.keys||function(t){return r(t,o)}},7079:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},4001:function(t,e,n){var r=n(1540),o=n(1421),i=n(3467);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return o(n),i(r),e?t(n,r):n.__proto__=r,n}}():void 0)},6964:function(t,e,n){var r=n(2569),o=n(7425),i=n(4354),s=n(1651),c=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&i(n=t.toString)&&!s(r=o(n,t)))return r;if(i(n=t.valueOf)&&!s(r=o(n,t)))return r;if("string"!==e&&i(n=t.toString)&&!s(r=o(n,t)))return r;throw c("Can't convert object to primitive value")}},6830:function(t,e,n){var r=n(2430),o=n(1540),i=n(9704),s=n(419),c=n(1421),a=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(c(t)),n=s.f;return n?a(e,n(t)):e}},8946:function(t,e,n){var r=n(2569),o=n(4354),i=n(5320),s=n(7632),c=n(2024),a=n(5193),u=n(3500),f=n(34).CONFIGURABLE,l=u.get,h=u.enforce,p=String(String).split("String");(t.exports=function(t,e,n,a){var u,l=!!a&&!!a.unsafe,g=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet,b=a&&void 0!==a.name?a.name:e;o(n)&&("Symbol("===String(b).slice(0,7)&&(b="["+String(b).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||f&&n.name!==b)&&s(n,"name",b),(u=h(n)).source||(u.source=p.join("string"==typeof b?b:""))),t!==r?(l?!d&&t[e]&&(g=!0):delete t[e],g?t[e]=n:s(t,e,n)):g?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||a(this)}))},1196:function(t,e,n){var r=n(2569).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},2024:function(t,e,n){var r=n(2569),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},2087:function(t,e,n){var r=n(378).f,o=n(5320),i=n(2931)("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!o(t,i)&&r(t,i,{configurable:!0,value:e})}},9097:function(t,e,n){var r=n(9944),o=n(9225),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},7039:function(t,e,n){var r=n(2569),o=n(2024),i="__core-js_shared__",s=r[i]||o(i,{});t.exports=s},9944:function(t,e,n){var r=n(1274),o=n(7039);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.0",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE",source:"https://github.com/zloirock/core-js"})},7841:function(t,e,n){var r=n(1859),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},7830:function(t,e,n){var r=n(6674),o=n(1196);t.exports=function(t){return r(o(t))}},1859:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var r=+t;return r!=r||0===r?0:(r>0?n:e)(r)}},9309:function(t,e,n){var r=n(1859),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},6416:function(t,e,n){var r=n(2569),o=n(1196),i=r.Object;t.exports=function(t){return i(o(t))}},38:function(t,e,n){var r=n(2569),o=n(7425),i=n(1651),s=n(8937),c=n(5324),a=n(6964),u=n(2931),f=r.TypeError,l=u("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,r=c(t,l);if(r){if(void 0===e&&(e="default"),n=o(r,t,e),!i(n)||s(n))return n;throw f("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},7411:function(t,e,n){var r=n(38),o=n(8937);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},3700:function(t,e,n){var r=n(2569).String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},9225:function(t,e,n){var r=n(1540),o=0,i=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++o+i,36)}},7374:function(t,e,n){var r=n(5598);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5734:function(t,e,n){var r=n(1738),o=n(2112);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2931:function(t,e,n){var r=n(2569),o=n(9944),i=n(5320),s=n(9225),c=n(5598),a=n(7374),u=o("wks"),f=r.Symbol,l=f&&f.for,h=a?f:f&&f.withoutSetter||s;t.exports=function(t){if(!i(u,t)||!c&&"string"!=typeof u[t]){var e="Symbol."+t;c&&i(f,t)?u[t]=f[t]:u[t]=a&&l?l(e):h(e)}return u[t]}},5006:function(t,e,n){"use strict";var r=n(7830),o=n(2834),i=n(9259),s=n(3500),c=n(378).f,a=n(1084),u=n(1274),f=n(1738),l="Array Iterator",h=s.set,p=s.getterFor(l);t.exports=a(Array,"Array",(function(t,e){h(this,{type:l,target:r(t),index:0,kind:e})}),(function(){var t=p(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values");var g=i.Arguments=i.Array;if(o("keys"),o("values"),o("entries"),!u&&f&&"values"!==g.name)try{c(g,"name",{value:"values"})}catch(t){}},8669:function(t,e,n){var r=n(2569),o=n(7921),i=n(6583),s=n(5006),c=n(7632),a=n(2931),u=a("iterator"),f=a("toStringTag"),l=s.values,h=function(t,e){if(t){if(t[u]!==l)try{c(t,u,l)}catch(e){t[u]=l}if(t[f]||c(t,f,e),o[e])for(var n in s)if(t[n]!==s[n])try{c(t,n,s[n])}catch(e){t[n]=s[n]}}};for(var p in o)h(r[p]&&r[p].prototype,p);h(i,"DOMTokenList")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";n(8669);class t{constructor(t){this.snowboard=t}dependencies(){return[]}listens(){return{}}destructor(){this.detach(),delete this.snowboard}}class e extends t{}class r{constructor(t,n,r){this.name=t,this.snowboard=n,this.instance=r,this.instances=[],this.singleton=r.prototype instanceof e,this.mocks={},this.originalFunctions={}}hasMethod(t){return!this.isFunction()&&"function"==typeof this.instance.prototype[t]}callMethod(){if(this.isFunction())return null;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];const r=e,o=r.shift();return this.instance.prototype[o](r)}getInstance(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if(this.isFunction())return this.instance(...n);if(!this.dependenciesFulfilled()){const t=this.getDependencies().filter((t=>!this.snowboard.getPluginNames().includes(t)));throw new Error('The "'.concat(this.name,'" plugin requires the following plugins: ').concat(t.join(", ")))}if(this.isSingleton())return 0===this.instances.length&&this.initialiseSingleton(),Object.keys(this.mocks).length>0&&(Object.entries(this.originalFunctions).forEach((t=>{const[e,n]=t;this.instances[0][e]=n})),Object.entries(this.mocks).forEach((e=>{const[n,r]=e;this.instances[0][n]=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return r(t,...n)}}))),this.instances[0];Object.keys(this.mocks).length>0&&(Object.entries(this.originalFunctions).forEach((t=>{const[e,n]=t;this.instance.prototype[e]=n})),Object.entries(this.mocks).forEach((e=>{const[n,r]=e;this.instance.prototype[n]=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return r(t,...n)}})));const o=new this.instance(this.snowboard,...n);return o.detach=()=>this.instances.splice(this.instances.indexOf(o),1),this.instances.push(o),o}getInstances(){return this.isFunction()?[]:this.instances}isFunction(){return"function"==typeof this.instance&&this.instance.prototype instanceof t==!1}isSingleton(){return this.instance.prototype instanceof e==!0}initialiseSingleton(){if(!this.isSingleton())return;const t=new this.instance(this.snowboard);t.detach=()=>this.instances.splice(this.instances.indexOf(t),1),this.instances.push(t)}getDependencies(){return this.isFunction()||"function"!=typeof this.instance.prototype.dependencies?[]:this.instance.prototype.dependencies().map((t=>t.toLowerCase()))}dependenciesFulfilled(){const t=this.getDependencies();let e=!0;return t.forEach((t=>{this.snowboard.hasPlugin(t)||(e=!1)})),e}mock(t,e){var n=this;if(!this.isFunction()){if(!this.instance.prototype[t])throw new Error('Function "'.concat(t,'" does not exist and cannot be mocked'));this.mocks[t]=e,this.originalFunctions[t]=this.instance.prototype[t],this.isSingleton()&&0===this.instances.length&&(this.initialiseSingleton(),this.instances[0][t]=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return e(n,...r)})}}unmock(t){this.isFunction()||this.mocks[t]&&(this.isSingleton()&&(this.instances[0][t]=this.originalFunctions[t]),delete this.mocks[t],delete this.originalFunctions[t])}}
/*! js-cookie v3.0.1 | MIT */
function o(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}var i=function t(e,n){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=o({},n,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var c in i)i[c]&&(s+="; "+c,!0!==i[c]&&(s+="="+i[c].split(";")[0]));return document.cookie=t+"="+e.write(r,t)+s}}return Object.create({set:r,get:function(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var n=document.cookie?document.cookie.split("; "):[],r={},o=0;o<n.length;o++){var i=n[o].split("="),s=i.slice(1).join("=");try{var c=decodeURIComponent(i[0]);if(r[c]=e.read(s,c),t===c)break}catch(t){}}return t?r[t]:r}},remove:function(t,e){r(t,"",o({},e,{expires:-1}))},withAttributes:function(e){return t(this.converter,o({},this.attributes,e))},withConverter:function(e){return t(o({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(e)}})}({read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),s=i;function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class f extends e{constructor(t){super(t),this.defaults={expires:null,path:"/",domain:null,secure:!1,sameSite:"Lax"}}setDefaults(t){if("object"!=typeof t)throw new Error("Cookie defaults must be provided as an object");Object.entries(t).forEach((t=>{const[e,n]=t;void 0!==this.defaults[e]&&(this.defaults[e]=n)}))}getDefaults(){const t={};return Object.entries(this.defaults).forEach((e=>{const[n,r]=e;null!==this.defaults[n]&&(t[n]=r)})),t}get(t){if(void 0===t){const t=s.get();return Object.entries(t).forEach((e=>{const[n,r]=e;this.snowboard.globalEvent("cookie.get",n,r,(e=>{t[n]=e}))})),t}let e=s.get(t);return this.snowboard.globalEvent("cookie.get",t,e,(t=>{e=t})),e}set(t,e,n){let r=e;return this.snowboard.globalEvent("cookie.set",t,e,(t=>{r=t})),s.set(t,r,a(a({},this.getDefaults()),n))}remove(t,e){s.remove(t,a(a({},this.getDefaults()),e))}}class l extends e{constructor(t){super(t),window.wnJSON=t=>this.parse(t),window.ocJSON=window.wnJSON}parse(t){const e=this.parseString(t);return JSON.parse(e)}parseString(t){let e=t.trim();if(!e.length)throw new Error("Broken JSON object.");let n="",r=null,o=null,i="";for(;e&&","===e[0];)e=e.substr(1);if('"'===e[0]||"'"===e[0]){if(e[e.length-1]!==e[0])throw new Error("Invalid string JSON object.");i='"';for(let t=1;t<e.length;t+=1)if("\\"===e[t])"'"===e[t+1]||(i+=e[t]),i+=e[t+1],t+=1;else{if(e[t]===e[0])return i+='"',i;'"'===e[t]?i+='\\"':i+=e[t]}throw new Error("Invalid string JSON object.")}if("true"===e||"false"===e)return e;if("null"===e)return"null";const s=parseFloat(e);if(!Number.isNaN(s))return s.toString();if("{"===e[0]){r="needKey",o=null,n="{";for(let t=1;t<e.length;t+=1)if(!this.isBlankChar(e[t]))if("needKey"!==r||'"'!==e[t]&&"'"!==e[t]){if("needKey"===r&&this.canBeKeyHead(e[t]))o=this.parseKey(e,t),n+='"',n+=o,n+='"',t+=o.length-1,r="afterKey";else if("afterKey"===r&&":"===e[t])n+=":",r=":";else if(":"===r)i=this.getBody(e,t),t=t+i.originLength-1,n+=this.parseString(i.body),r="afterBody";else if("afterBody"===r||"needKey"===r){let o=t;for(;","===e[o]||this.isBlankChar(e[o]);)o+=1;if("}"===e[o]&&o===e.length-1){for(;","===n[n.length-1];)n=n.substr(0,n.length-1);return n+="}",n}o!==t&&"{"!==n&&(n+=",",r="needKey",t=o-1)}}else o=this.parseKey(e,t+1,e[t]),n+='"'.concat(o,'"'),t+=o.length,t+=1,r="afterKey";throw new Error("Broken JSON object near ".concat(n))}if("["===e[0]){n="[",r="needBody";for(let t=1;t<e.length;t+=1)if(" "!==e[t]&&"\n"!==e[t]&&"\t"!==e[t])if("needBody"===r){if(","===e[t]){n+="null,";continue}if("]"===e[t]&&t===e.length-1)return","===n[n.length-1]&&(n=n.substr(0,n.length-1)),n+="]",n;i=this.getBody(e,t),t=t+i.originLength-1,n+=this.parseString(i.body),r="afterBody"}else if("afterBody"===r)if(","===e[t])for(n+=",",r="needBody";","===e[t+1]||this.isBlankChar(e[t+1]);)","===e[t+1]&&(n+="null,"),t+=1;else if("]"===e[t]&&t===e.length-1)return n+="]",n;throw new Error("Broken JSON array near ".concat(n))}return""}getBody(t,e){let n="";if('"'===t[e]||"'"===t[e]){n=t[e];for(let r=e+1;r<t.length;r+=1)if("\\"===t[r])n+=t[r],r+1<t.length&&(n+=t[r+1]),r+=1;else{if(t[r]===t[e])return n+=t[e],{originLength:n.length,body:n};n+=t[r]}throw new Error("Broken JSON string body near ".concat(n))}if("t"===t[e]){if(t.indexOf("true",e)===e)return{originLength:"true".length,body:"true"};throw new Error("Broken JSON boolean body near ".concat(t.substr(0,e+10)))}if("f"===t[e]){if(t.indexOf("f",e)===e)return{originLength:"false".length,body:"false"};throw new Error("Broken JSON boolean body near ".concat(t.substr(0,e+10)))}if("n"===t[e]){if(t.indexOf("null",e)===e)return{originLength:"null".length,body:"null"};throw new Error("Broken JSON boolean body near ".concat(t.substr(0,e+10)))}if("-"===t[e]||"+"===t[e]||"."===t[e]||t[e]>="0"&&t[e]<="9"){n="";for(let r=e;r<t.length;r+=1){if(!("-"===t[r]||"+"===t[r]||"."===t[r]||t[r]>="0"&&t[r]<="9"))return{originLength:n.length,body:n};n+=t[r]}throw new Error("Broken JSON number body near ".concat(n))}if("{"===t[e]||"["===t[e]){const r=[t[e]];n=t[e];for(let o=e+1;o<t.length;o+=1){if(n+=t[o],"\\"===t[o])o+1<t.length&&(n+=t[o+1]),o+=1;else if('"'===t[o])'"'===r[r.length-1]?r.pop():"'"!==r[r.length-1]&&r.push(t[o]);else if("'"===t[o])"'"===r[r.length-1]?r.pop():'"'!==r[r.length-1]&&r.push(t[o]);else if('"'!==r[r.length-1]&&"'"!==r[r.length-1])if("{"===t[o])r.push("{");else if("}"===t[o]){if("{"!==r[r.length-1])throw new Error("Broken JSON ".concat("{"===t[e]?"object":"array"," body near ").concat(n));r.pop()}else if("["===t[o])r.push("[");else if("]"===t[o]){if("["!==r[r.length-1])throw new Error("Broken JSON ".concat("{"===t[e]?"object":"array"," body near ").concat(n));r.pop()}if(!r.length)return{originLength:o-e,body:n}}throw new Error("Broken JSON ".concat("{"===t[e]?"object":"array"," body near ").concat(n))}throw new Error("Broken JSON body near ".concat(t.substr(e-5>=0?e-5:0,50)))}parseKey(t,e,n){let r="";for(let o=e;o<t.length;o+=1){if(n&&n===t[o])return r;if(!n&&(" "===t[o]||":"===t[o]))return r;r+=t[o],"\\"===t[o]&&o+1<t.length&&(r+=t[o+1],o+=1)}throw new Error("Broken JSON syntax near ".concat(r))}canBeKeyHead(t){return"\\"!==t[0]&&(t[0]>="a"&&t[0]<="z"||t[0]>="A"&&t[0]<="Z"||"_"===t[0]||(t[0]>="0"&&t[0]<="9"||("$"===t[0]||t.charCodeAt(0)>255)))}isBlankChar(t){return" "===t||"\n"===t||"\t"===t}}class h extends e{constructor(t){super(t),window.wnSanitize=t=>this.sanitize(t),window.ocSanitize=window.wnSanitize}sanitize(t,e){const n=(new DOMParser).parseFromString(t,"text/html"),r=void 0===e||"boolean"!=typeof e||e;return this.sanitizeNode(n.getRootNode()),r?n.body.innerHTML:n.innerHTML}sanitizeNode(t){if("SCRIPT"===t.tagName)return void t.remove();this.trimAttributes(t);Array.from(t.children).forEach((t=>{this.sanitizeNode(t)}))}trimAttributes(t){if(t.attributes)for(let e=0;e<t.attributes.length;e+=1){const n=t.attributes.item(e).name,r=t.attributes.item(e).value;0!==n.indexOf("on")&&0!==r.indexOf("javascript:")||t.removeAttribute(n)}}}class p{constructor(t,e){this.debugEnabled="boolean"==typeof e&&!0===e,this.autoInitSingletons="boolean"==typeof t&&!1===t,this.plugins={},this.attachAbstracts(),this.loadUtilities(),this.initialise(),this.debug("Snowboard framework initialised")}attachAbstracts(){this.PluginBase=t,this.Singleton=e}loadUtilities(){this.addPlugin("cookie",f),this.addPlugin("jsonParser",l),this.addPlugin("sanitizer",h)}initialise(){window.addEventListener("DOMContentLoaded",(()=>{this.autoInitSingletons&&this.initialiseSingletons(),this.globalEvent("ready")}))}initialiseSingletons(){Object.values(this.plugins).forEach((t=>{t.isSingleton()&&t.initialiseSingleton()}))}addPlugin(e,n){var o=this;const i=e.toLowerCase();if(this.hasPlugin(i))throw new Error('A plugin called "'.concat(e,'" is already registered.'));if("function"!=typeof n&&n instanceof t==!1)throw new Error("The provided plugin must extend the PluginBase class, or must be a callback function.");if(void 0!==this[e]||void 0!==this[i])throw new Error("The given name is already in use for a property or method of the Snowboard class.");this.plugins[i]=new r(i,this,n);const s=function(){return o.plugins[i].getInstance(...arguments)};this[e]=s,this[i]=s,this.debug('Plugin "'.concat(e,'" registered'))}removePlugin(t){const e=t.toLowerCase();this.hasPlugin(e)?(this.plugins[e].getInstances().forEach((t=>{t.destructor()})),delete this.plugins[e],delete this[e],this.debug('Plugin "'.concat(t,'" removed'))):this.debug('Plugin "'.concat(t,'" already removed'))}hasPlugin(t){const e=t.toLowerCase();return void 0!==this.plugins[e]}getPlugins(){return this.plugins}getPluginNames(){return Object.keys(this.plugins)}getPlugin(t){if(!this.hasPlugin(t))throw new Error('No plugin called "'.concat(t,'" has been registered.'));return this.plugins[t]}listensToEvent(t){const e=[];return Object.entries(this.plugins).forEach((n=>{const[r,o]=n;if(o.isFunction())return;if(!o.hasMethod("listens"))return;"string"==typeof o.callMethod("listens")[t]&&e.push(r)})),e}globalEvent(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];this.debug('Calling global event "'.concat(t,'"'));const o=this.listensToEvent(t);if(0===o.length)return this.debug('No listeners found for global event "'.concat(t,'"')),!0;this.debug('Listeners found for global event "'.concat(t,'": ').concat(o.join(", ")));let i=!1;return o.forEach((e=>{const r=this.getPlugin(e);if(r.isFunction())return;r.isSingleton()&&0===r.getInstances().length&&r.initialiseSingleton();const o=r.callMethod("listens")[t];r.getInstances().forEach((r=>{if(!i){if(!r[o])throw new Error('Missing "'.concat(o,'" method in "').concat(e,'" plugin'));!1===r[o](...n)&&(i=!0,this.debug('Global event "'.concat(t,'" cancelled by "').concat(e,'" plugin')))}}))})),!i}globalPromiseEvent(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];this.debug('Calling global promise event "'.concat(t,'"'));const o=this.listensToEvent(t);if(0===o.length)return this.debug('No listeners found for global promise event "'.concat(t,'"')),Promise.resolve();this.debug('Listeners found for global promise event "'.concat(t,'": ').concat(o.join(", ")));const i=[];return o.forEach((e=>{const r=this.getPlugin(e);if(r.isFunction())return;r.isSingleton()&&0===r.getInstances().length&&r.initialiseSingleton();const o=r.callMethod("listens")[t];r.getInstances().forEach((t=>{const e=t[o](...n);e instanceof Promise!=!1&&i.push(e)}))})),0===i.length?Promise.resolve():Promise.all(i)}debug(){if(this.debugEnabled){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];console.groupCollapsed("%c[Snowboard]","color: rgb(45, 167, 199); font-weight: normal;",...e),console.trace(),console.groupEnd()}}}(t=>{const e=new p;t.snowboard=e,t.Snowboard=e,t.SnowBoard=e})(window)}()}();