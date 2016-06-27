'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flattenStyle;

var _invariant = require('fbjs/lib/invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _expandStyle = require('./expandStyle');

var _expandStyle2 = _interopRequireDefault(_expandStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2016-present, Nicolas Gallagher.
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * 
 */
function flattenStyle(style) {
  if (!style) {
    return undefined;
  }

  (0, _invariant2.default)(style !== true, 'style may be false but not true');

  if (!Array.isArray(style)) {
    // we must expand styles during the flattening because expanded styles
    // override shorthands
    return (0, _expandStyle2.default)(style);
  }

  var result = {};
  for (var i = 0; i < style.length; ++i) {
    var computedStyle = flattenStyle(style[i]);
    if (computedStyle) {
      for (var key in computedStyle) {
        result[key] = computedStyle[key];
      }
    }
  }
  return result;
}