'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (string) {
  return string.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^ms-/, '-ms-');
};