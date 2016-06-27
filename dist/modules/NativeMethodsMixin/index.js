'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NativeMethodsDecorator = undefined;
var _arguments = arguments; /**
                             * Copyright (c) 2015-present, Nicolas Gallagher.
                             * Copyright (c) 2015-present, Facebook, Inc.
                             * All rights reserved.
                             *
                             * 
                             */

var _react = require('react');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _UIManager = require('../../apis/UIManager');

var _UIManager2 = _interopRequireDefault(_UIManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NativeMethodsMixin = {
  /**
   * Removes focus from an input or view. This is the opposite of `focus()`.
   */

  blur: function blur() {
    _reactDom2.default.findDOMNode(this).blur();
  },


  /**
   * Requests focus for the given input or view.
   * The exact behavior triggered will depend the type of view.
   */
  focus: function focus() {
    _reactDom2.default.findDOMNode(this).focus();
  },


  /**
   * Determines the position and dimensions of the view
   */
  measure: function measure(callback) {
    _UIManager2.default.measure(_reactDom2.default.findDOMNode(this), mountSafeCallback(this, callback));
  },


  /**
   * Measures the view relative to another view (usually an ancestor)
   */
  measureLayout: function measureLayout(relativeToNativeNode, onSuccess, onFail /* currently unused */
  ) {
    _UIManager2.default.measureLayout(_reactDom2.default.findDOMNode(this), relativeToNativeNode, mountSafeCallback(this, onFail), mountSafeCallback(this, onSuccess));
  },


  /**
   * This function sends props straight to the underlying DOM node.
   */
  setNativeProps: function setNativeProps(nativeProps) {
    _UIManager2.default.updateView(_reactDom2.default.findDOMNode(this), nativeProps);
  }
};

/**
 * In the future, we should cleanup callbacks by cancelling them instead of
 * using this.
 */
var mountSafeCallback = function mountSafeCallback(context, callback) {
  return function () {
    if (!callback || context.isMounted && !context.isMounted()) {
      return;
    }
    return callback.apply(context, _arguments);
  };
};

var NativeMethodsDecorator = exports.NativeMethodsDecorator = function NativeMethodsDecorator(Component) {
  Object.keys(NativeMethodsMixin).forEach(function (method) {
    Component.prototype[method] = NativeMethodsMixin[method];
  });
  return Component;
};

exports.default = NativeMethodsMixin;