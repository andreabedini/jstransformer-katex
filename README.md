# jstransformer-katex

JSTransformers plumbing for rendering LaTeX formulas into HTML using KaTeX.

[![Build
Status](https://img.shields.io/travis/andreabedini/jstransformer-katex/master.svg)](https://travis-ci.org/andreabedini/jstransformer-katex)
[![Dependency
Status](https://img.shields.io/david/andreabedini/jstransformer-katex.svg)](https://david-dm.org/andreabedini/jstransformer-katex)
[![Coverage
Status](https://img.shields.io/coveralls/andreabedini/jstransformer-katex/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-katex?branch=master)
[![NPM
version](https://img.shields.io/npm/v/jstransformer-katex.svg)](https://www.npmjs.org/package/jstransformer-katex)

## Installation

    npm install jstransformer-katex

## Usage

    var transformer = require('jstransformer');
    var katex = transformer(require('jstransformer-katex'));

    var options = {};
    var res = katex.render('c = \\pm\\sqrt{a^2 + b^2}', options);
    // => {body: '<span class="katex">...</span>', dependencies: []}

Make sure to include KaTeX CSS and font files in your html. Options
documentation is [here](https://github.com/Khan/KaTeX#rendering-options).

## License

MIT

