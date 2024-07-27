// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function e(){var e,n,o;if((e=arguments.length)<2)throw new Error(t("1U71Z"));for(n=new Array(e),o=0;o<e;o++)if(n[o]=arguments[o],!r(n[o]))throw new TypeError(t("1U7Aj",n[o]));return function(){var r,t;for(r=new Array(arguments.length),t=0;t<r.length;t++)r[t]=arguments[t];for(r=n[0].apply(null,r),t=1;t<e;t++)r=n[t](r);return r}}export{e as default};
//# sourceMappingURL=index.mjs.map
