// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function e(){var e,n,s;if((e=arguments.length)<2)throw new Error("insufficient arguments. Must provide multiple functions to execute sequentially.");for(n=new Array(e),s=0;s<e;s++)if(n[s]=arguments[s],!r(n[s]))throw new TypeError(t("0juBQ",n[s]));return o;function o(){var r,t;for(r=new Array(arguments.length),t=0;t<r.length;t++)r[t]=arguments[t];for(r=n[0].apply(null,r),t=1;t<e;t++)r=n[t](r);return r}}export{e as default};
//# sourceMappingURL=index.mjs.map
