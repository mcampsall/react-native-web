'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inlineStylePrefixAll = require('inline-style-prefix-all');

var _inlineStylePrefixAll2 = _interopRequireDefault(_inlineStylePrefixAll);

var _hyphenate = require('./hyphenate');

var _hyphenate2 = _interopRequireDefault(_hyphenate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
  function Store() {
    var initialState = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var options = arguments.length <= 1 || arguments[1] === undefined ? { obfuscateClassNames: false } : arguments[1];

    _classCallCheck(this, Store);

    this._counter = 0;
    this._classNames = _extends({}, initialState.classNames);
    this._declarations = _extends({}, initialState.declarations);
    this._options = options;
  }

  _createClass(Store, [{
    key: 'get',
    value: function get(property, value) {
      var key = this._getDeclarationKey(property, value);
      return this._classNames[key];
    }
  }, {
    key: 'set',
    value: function set(property, value) {
      if (value != null) {
        var values = this._getPropertyValues(property) || [];
        if (values.indexOf(value) === -1) {
          values.push(value);
          this._setClassName(property, value);
          this._setPropertyValues(property, values);
        }
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      var _this = this;

      var obfuscate = this._options.obfuscateClassNames;

      // sort the properties to ensure shorthands are first in the cascade
      var properties = Object.keys(this._declarations).sort();

      // transform the class name to a valid CSS selector
      var getCssSelector = function getCssSelector(property, value) {
        var className = _this.get(property, value);
        if (!obfuscate && className) {
          className = className.replace(/[(),":?.%\\$#]/g, '\\$&');
        }
        return className;
      };

      // transform the declarations into CSS rules with vendor-prefixes
      var buildCSSRules = function buildCSSRules(property, values) {
        return values.reduce(function (cssRules, value) {
          var declarations = (0, _inlineStylePrefixAll2.default)(_defineProperty({}, property, value));
          var cssDeclarations = Object.keys(declarations).reduce(function (str, prop) {
            var value = declarations[prop];
            str += (0, _hyphenate2.default)(prop) + ':' + value + ';';
            return str;
          }, '');
          var selector = getCssSelector(property, value);

          cssRules += '\n.' + selector + '{' + cssDeclarations + '}';

          return cssRules;
        }, '');
      };

      var css = properties.reduce(function (css, property) {
        var values = _this._declarations[property];
        css += buildCSSRules(property, values);
        return css;
      }, '');

      return '/* ' + this._counter + ' unique declarations */' + css;
    }
  }, {
    key: '_getDeclarationKey',
    value: function _getDeclarationKey(property, value) {
      return property + ':' + value;
    }
  }, {
    key: '_getPropertyValues',
    value: function _getPropertyValues(property) {
      return this._declarations[property];
    }
  }, {
    key: '_setPropertyValues',
    value: function _setPropertyValues(property, values) {
      this._declarations[property] = values.map(function (value) {
        return value;
      });
    }
  }, {
    key: '_setClassName',
    value: function _setClassName(property, value) {
      var key = this._getDeclarationKey(property, value);
      var exists = !!this._classNames[key];
      if (!exists) {
        this._counter += 1;
        if (this._options.obfuscateClassNames) {
          this._classNames[key] = '_s_' + this._counter;
        } else {
          var val = ('' + value).replace(/\s/g, '-');
          this._classNames[key] = property + ':' + val;
        }
      }
    }
  }]);

  return Store;
}();

exports.default = Store;