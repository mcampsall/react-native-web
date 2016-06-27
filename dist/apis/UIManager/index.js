'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CSSPropertyOperations = require('react/lib/CSSPropertyOperations');

var _CSSPropertyOperations2 = _interopRequireDefault(_CSSPropertyOperations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var measureAll = function measureAll(node, callback, relativeToNativeNode) {
  var relativeNode = relativeToNativeNode || node.parentNode;
  var relativeRect = relativeNode.getBoundingClientRect();

  var _node$getBoundingClie = node.getBoundingClientRect();

  var height = _node$getBoundingClie.height;
  var left = _node$getBoundingClie.left;
  var top = _node$getBoundingClie.top;
  var width = _node$getBoundingClie.width;

  var x = left - relativeRect.left;
  var y = top - relativeRect.top;
  callback(x, y, width, height, left, top);
};

var UIManager = {
  measure: function measure(node, callback) {
    measureAll(node, callback);
  },
  measureLayout: function measureLayout(node, relativeToNativeNode, onFail, onSuccess) {
    measureAll(node, function (x, y, width, height) {
      return onSuccess(x, y, width, height);
    }, relativeToNativeNode);
  },
  updateView: function updateView(node, props) {
    for (var prop in props) {
      var value = props[prop];
      if (prop === 'style') {
        _CSSPropertyOperations2.default.setValueForStyles(node, value);
      } else if (prop === 'className') {
        node.classList.add(value);
      } else {
        node.setAttribute(prop, value);
      }
    }
  }
};

exports.default = UIManager;