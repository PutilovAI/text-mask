!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.createNumberMask=t():e.createNumberMask=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},,function(e,t){"use strict";function o(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=e.length;if(e===l||e[0]===y[0]&&1===t)return y.split(l).concat([v]).concat(g.split(l));if(e===w&&T)return y.split(l).concat(["0",w,v]).concat(g.split(l));var o=e[0]===s&&k;o&&(e=e.toString().substr(1));var c=e.lastIndexOf(w),u=c!==-1,a=void 0,b=void 0,h=void 0,I=void 0;if(e.slice(G*-1)===g&&(e=e.slice(0,G*-1)),u&&(T||V)?(a=e.slice(e.slice(0,B)===y?B:0,c),b=e.slice(c+1,t),I=parseFloat(a+"."+b),b=n(b.replace(p,l))):(a=e.slice(0,B)===y?e.slice(B):e,I=parseInt(a)),I>Y||I<A)return!1;if($&&("undefined"==typeof $?"undefined":r($))===f){var S="."===N?"[.]":""+N,j=(a.match(new RegExp(S,"g"))||[]).length;a=a.slice(0,$+j*R)}return a=a.replace(p,l),F||(a=a.replace(/^0+(0$|[^0])/,"$1")),a=x?i(a,N):a,h=n(a),(u&&T||V===!0)&&(e[c-1]!==w&&h.push(m),h.push(w,m),b&&(("undefined"==typeof M?"undefined":r(M))===f&&(b=b.slice(0,M)),h=h.concat(b)),V===!0&&e[c-1]===w&&h.push(v)),B>0&&(h=y.split(l).concat(h)),o&&(h.length===B&&h.push(v),h=[d].concat(h)),g.length>0&&(h=h.concat(g.split(l))),h}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.prefix,y=void 0===o?c:o,b=t.suffix,g=void 0===b?l:b,h=t.includeThousandsSeparator,x=void 0===h||h,I=t.thousandsSeparatorSymbol,N=void 0===I?u:I,S=t.allowDecimal,T=void 0!==S&&S,j=t.decimalSymbol,w=void 0===j?a:j,E=t.decimalLimit,M=void 0===E?2:E,O=t.requireDecimal,V=void 0!==O&&O,_=t.allowNegative,k=void 0!==_&&_,D=t.allowLeadingZeroes,F=void 0!==D&&D,L=t.integerLimit,$=void 0===L?null:L,P=t.maxValue,Y=void 0===P?Number.POSITIVE_INFINITY:P,q=t.minValue,A=void 0===q?Number.NEGATIVE_INFINITY:q,B=y&&y.length||0,G=g&&g.length||0,R=N&&N.length||0;return e.instanceOf="createNumberMask",e}function n(e){return e.split(l).map(function(e){return v.test(e)?v:e})}function i(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var c="$",l="",u=",",a=".",s="-",d=/-/,p=/\D+/g,f="number",v=/\d/,m="[]"}])});