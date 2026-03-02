"use strict";var o=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var a=o(function(v,i){"use strict";var l=require("@stdlib/assert-is-function"),f=require("@stdlib/string-format");function g(){var t,r,u;if(t=arguments.length,t<2)throw new Error("insufficient arguments. Must provide multiple functions to execute sequentially.");for(r=new Array(t),u=0;u<t;u++)if(r[u]=arguments[u],!l(r[u]))throw new TypeError(f("invalid argument. All arguments must be functions. Value: `%s`.",r[u]));return s;function s(){var n,e;for(n=new Array(arguments.length),e=0;e<n.length;e++)n[e]=arguments[e];for(n=r[0].apply(null,n),e=1;e<t;e++)n=r[e](n);return n}}i.exports=g});var m=a();module.exports=m;
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
