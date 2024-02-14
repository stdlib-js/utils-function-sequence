// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function i(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(e){return"string"==typeof e}var u=Math.abs,p=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function E(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":u(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,v,"e"),t=g.call(t,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),e.alternate&&(t=g.call(t,w,"$1."),t=g.call(t,b,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):p.call(t)}function x(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function k(e,r,t){var i=r-e.length;return i<0?e:e=t?e+x(i):x(i)+e}var S=String.fromCharCode,_=isNaN,j=Array.isArray;function A(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,i,n,o,c,u,p,f;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",u=1,p=0;p<e.length;p++)if(l(i=e[p]))c+=i;else{if(r=void 0!==i.precision,!(i=A(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(u=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[u],10),u+=1,_(i.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[u],10),u+=1,_(i.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[u],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!_(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=_(o)?String(i.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=E(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=k(i.arg,i.width,i.padRight)),c+=i.arg||"",u+=1}return c}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,i,n;for(t=[],n=0,i=V.exec(e);i;)(r=e.slice(n,V.lastIndex-i[0].length)).length&&t.push(r),t.push($(i)),n=V.lastIndex,i=V.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function I(e){return"string"==typeof e}function C(e){var r,t;if(!I(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var R,O=Object.prototype,Z=O.toString,L=O.__defineGetter__,P=O.__defineSetter__,W=O.__lookupGetter__,B=O.__lookupSetter__;R=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(W.call(e,r)||B.call(e,r)?(i=e.__proto__,e.__proto__=O,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&L&&L.call(e,r,t.get),o&&P&&P.call(e,r,t.set),e};var G=R;function M(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function N(e){return"boolean"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,z=Object.prototype.hasOwnProperty,D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"",J=X()?function(e){var r,t,i,n,a;if(null==e)return q.call(e);t=e[H],a=H,r=null!=(n=e)&&z.call(n,a);try{e[H]=void 0}catch(r){return q.call(e)}return i=q.call(e),r?e[H]=t:delete e[H],i}:function(e){return q.call(e)},K=Boolean,Q=Boolean.prototype.toString,Y=X();function ee(e){return"object"==typeof e&&(e instanceof K||(Y?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function re(e){return N(e)||ee(e)}function te(){return new Function("return this;")()}M(re,"isPrimitive",N),M(re,"isObject",ee);var ie="object"==typeof self?self:null,ne="object"==typeof window?window:null,ae="object"==typeof globalThis?globalThis:null,oe=function(e){if(arguments.length){if(!N(e))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return te()}if(ae)return ae;if(ie)return ie;if(ne)return ne;throw new Error("unexpected error. Unable to resolve global object.")}(),ce=oe.document&&oe.document.childNodes,se=Int8Array;function le(){return/^\s*function\s*([^(]*)/i}var ue=/^\s*function\s*([^(]*)/i;M(le,"REGEXP",ue);var pe=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};function fe(e){return null!==e&&"object"==typeof e}function ge(e){var r,t,i,n;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=ue.exec(i.toString()))return r[1]}return fe(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}M(fe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!pe(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(fe));var de="function"==typeof e||"object"==typeof se||"function"==typeof ce?function(e){return ge(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ge(e).toLowerCase():r};function he(e){return"function"===de(e)}function we(e){return"number"==typeof e}function be(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ye(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+be(n):be(n)+e,i&&(e="-"+e)),e}var ve=String.prototype.toLowerCase,me=String.prototype.toUpperCase;function Ee(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!we(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ye(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ye(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===me.call(e.specifier)?me.call(t):ve.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function xe(e){return"string"==typeof e}var ke=Math.abs,Se=String.prototype.toLowerCase,_e=String.prototype.toUpperCase,je=String.prototype.replace,Ae=/e\+(\d)$/,Te=/e-(\d)$/,Ve=/^(\d+)$/,$e=/^(\d+)e/,Fe=/\.0$/,Ie=/\.0*e/,Ce=/(\..*[^0])0*e/;function Re(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!we(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":ke(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=je.call(t,Ce,"$1e"),t=je.call(t,Ie,"e"),t=je.call(t,Fe,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=je.call(t,Ae,"e+0$1"),t=je.call(t,Te,"e-0$1"),e.alternate&&(t=je.call(t,Ve,"$1."),t=je.call(t,$e,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===_e.call(e.specifier)?_e.call(t):Se.call(t)}function Oe(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ze(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Oe(i):Oe(i)+e}var Le=String.fromCharCode,Pe=isNaN,We=Array.isArray;function Be(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ge(e){var r,t,i,n,a,o,c,s,l;if(!We(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(xe(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Be(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Pe(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Pe(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Ee(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Pe(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Pe(a)?String(i.arg):Le(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Re(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ye(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ze(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Me=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ne(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ue(e){var r,t,i,n;for(t=[],n=0,i=Me.exec(e);i;)(r=e.slice(n,Me.lastIndex-i[0].length)).length&&t.push(r),t.push(Ne(i)),n=Me.lastIndex,i=Me.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Xe(e){return"string"==typeof e}function qe(e){var r,t,i;if(!Xe(e))throw new TypeError(qe("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ue(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Ge.apply(null,t)}return function(){var e,r,t;if((e=arguments.length)<2)throw new Error("insufficient arguments. Must provide multiple functions to execute sequentially.");for(r=new Array(e),t=0;t<e;t++)if(r[t]=arguments[t],!he(r[t]))throw new TypeError(qe("invalid argument. All arguments must be functions. Value: `%s`.",r[t]));return i;function i(){var t,i;for(t=new Array(arguments.length),i=0;i<t.length;i++)t[i]=arguments[i];for(t=r[0].apply(null,t),i=1;i<e;i++)t=r[i](t);return t}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).funseq=r();
//# sourceMappingURL=browser.js.map
