"use strict";var o=function(u,r){return function(){try{return r||u((r={exports:{}}).exports,r),r.exports}catch(e){throw r=0,e}}};var a=o(function(v,i){"use strict";var l=require("@stdlib/assert-is-function"),f=require("@stdlib/string-format");function g(){var u,r,e;if(u=arguments.length,u<2)throw new Error("insufficient arguments. Must provide multiple functions to execute sequentially.");for(r=new Array(u),e=0;e<u;e++)if(r[e]=arguments[e],!l(r[e]))throw new TypeError(f("invalid argument. All arguments must be functions. Value: `%s`.",r[e]));return s;function s(){var t,n;for(t=new Array(arguments.length),n=0;n<t.length;n++)t[n]=arguments[n];for(t=r[0].apply(null,t),n=1;n<u;n++)t=r[n](t);return t}}i.exports=g});var m=a();module.exports=m;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
