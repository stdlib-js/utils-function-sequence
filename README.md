<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# funseq

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Function sequence.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import funseq from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-function-sequence@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/utils-function-sequence/tags). For example,

```javascript
import funseq from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-function-sequence@v0.2.0-deno/mod.js';
```

#### funseq( ...fcn )

Returns a pipeline function. Starting from the left, the pipeline function evaluates each function and passes the result as an argument to the next function. The result of the rightmost function is the result of the whole.

```javascript
function a( x ) {
    return 2 * x;
}

function b( x ) {
    return x + 3;
}

function c( x ) {
    return x / 5;
}

var f = funseq( a, b, c );

var z = f( 6 ); // ((2*x)+3)/5
// returns 3
```

**Only** the leftmost function is explicitly permitted to accept multiple arguments. All other functions are evaluated as **unary** functions.

```javascript
function a( x, y ) {
    return (x*5) + (y*3);
}

function b( r ) {
    return r + 12;
}

var f = funseq( a, b );

var z = f( 4, 6 );
// returns 50
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function will throw if provided fewer than `2` input arguments.
-   The difference between this function and [`compose`][@stdlib/utils/compose] is that this function evaluates input arguments from left-to-right, rather than right-to-left.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import funseq from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-function-sequence@deno/mod.js';

function a( x, y ) {
    return x * y;
}

function b( z ) {
    return z + 5;
}

function c( r ) {
    return r / 10;
}

var f = funseq( a, b, c );

var v = f( 5, 3 );
// returns 2
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-compose`][@stdlib/utils/compose]</span><span class="delimiter">: </span><span class="description">function composition.</span>
-   <span class="package-name">[`@stdlib/utils-async/function-sequence`][@stdlib/utils/async/function-sequence]</span><span class="delimiter">: </span><span class="description">function sequence.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-function-sequence.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-function-sequence

[test-image]: https://github.com/stdlib-js/utils-function-sequence/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/utils-function-sequence/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-function-sequence/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-function-sequence?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-function-sequence.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-function-sequence/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-function-sequence/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-function-sequence/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-function-sequence/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-function-sequence/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-function-sequence/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-function-sequence/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-function-sequence/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-function-sequence/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/compose]: https://github.com/stdlib-js/utils-compose/tree/deno

[@stdlib/utils/async/function-sequence]: https://github.com/stdlib-js/utils-async-function-sequence/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
