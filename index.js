'use strict';

var katex = require('katex');

exports.name = 'katex';
exports.outputFormat = 'html';
exports.inputFormats = ['katex'];
exports.render = function (str, options) {
  return katex.renderToString(str, options);
};


