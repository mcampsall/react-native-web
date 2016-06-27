'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2016-present, Nicolas Gallagher.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _inlineStylePrefixAll = require('inline-style-prefix-all');

var _inlineStylePrefixAll2 = _interopRequireDefault(_inlineStylePrefixAll);

var _flattenStyle = require('./flattenStyle');

var _flattenStyle2 = _interopRequireDefault(_flattenStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    _classCallCheck(this, StyleSheetRegistry);
  }

  _createClass(StyleSheetRegistry, null, [{
    key: 'registerStyle',
    value: function registerStyle(style, store) {
      if (process.env.NODE_ENV !== 'production') {
        Object.freeze(style);
      }

      var normalizedStyle = (0, _flattenStyle2.default)(style);
      Object.keys(normalizedStyle).forEach(function (prop) {
        // add each declaration to the store
        store.set(prop, normalizedStyle[prop]);
      });
    }
  }, {
    key: 'getStyleAsNativeProps',
    value: function getStyleAsNativeProps(style, store) {
      var _className = void 0;
      var _style = {};
      var classList = [];
      var normalizedStyle = (0, _flattenStyle2.default)(style);

      for (var prop in normalizedStyle) {
        var styleClass = store.get(prop, normalizedStyle[prop]);

        if (styleClass) {
          classList.push(styleClass);
        } else {
          _style[prop] = normalizedStyle[prop];
        }
      }

      _className = classList.join(' ');
      _style = (0, _inlineStylePrefixAll2.default)(_style);

      return { className: _className, style: _style };
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;