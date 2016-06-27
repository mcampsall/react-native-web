'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _predefs = require('./predefs');

var _flattenStyle = require('./flattenStyle');

var _flattenStyle2 = _interopRequireDefault(_flattenStyle);

var _Store = require('./Store');

var _Store2 = _interopRequireDefault(_Store);

var _StyleSheetRegistry = require('./StyleSheetRegistry');

var _StyleSheetRegistry2 = _interopRequireDefault(_StyleSheetRegistry);

var _StyleSheetValidation = require('./StyleSheetValidation');

var _StyleSheetValidation2 = _interopRequireDefault(_StyleSheetValidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ELEMENT_ID = 'react-stylesheet';
var isRendered = false;
var lastStyleSheet = '';

/**
 * Initialize the store with pointer-event styles mapping to our custom pointer
 * event classes
 */
var initialState = { classNames: _predefs.predefinedClassNames };
var options = { obfuscateClassNames: !(process.env.NODE_ENV !== 'production') };
var createStore = function createStore() {
  return new _Store2.default(initialState, options);
};
var store = createStore();

/**
 * Destroy existing styles
 */
var _destroy = function _destroy() {
  store = createStore();
  isRendered = false;
};

/**
 * Render the styles as a CSS style sheet
 */
var _renderToString = function _renderToString() {
  var css = store.toString();
  isRendered = true;
  return _predefs.resetCSS + '\n' + _predefs.predefinedCSS + '\n' + css;
};

var create = function create(styles) {
  for (var key in styles) {
    _StyleSheetValidation2.default.validateStyle(key, styles);
    _StyleSheetRegistry2.default.registerStyle(styles[key], store);
  }

  // update the style sheet in place
  if (isRendered) {
    var stylesheet = document.getElementById(ELEMENT_ID);
    if (stylesheet) {
      var newStyleSheet = _renderToString();
      if (lastStyleSheet !== newStyleSheet) {
        stylesheet.textContent = newStyleSheet;
        lastStyleSheet = newStyleSheet;
      }
    } else if (process.env.NODE_ENV !== 'production') {
      console.error('ReactNative: cannot find "react-stylesheet" element');
    }
  }

  return styles;
};

/**
 * Accepts React props and converts inline styles to single purpose classes
 * where possible.
 */
var resolve = function resolve(_ref) {
  var _ref$style = _ref.style;
  var style = _ref$style === undefined ? {} : _ref$style;

  return _StyleSheetRegistry2.default.getStyleAsNativeProps(style, store);
};

exports.default = {
  _destroy: _destroy,
  _renderToString: _renderToString,
  create: create,
  elementId: ELEMENT_ID,
  flatten: _flattenStyle2.default,
  resolve: resolve
};