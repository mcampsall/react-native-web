'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyleSheet = require('../../apis/StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var roleComponents = {
  article: 'article',
  banner: 'header',
  button: 'button',
  complementary: 'aside',
  contentinfo: 'footer',
  form: 'form',
  heading: 'h1',
  link: 'a',
  list: 'ul',
  listitem: 'li',
  main: 'main',
  navigation: 'nav',
  region: 'section'
};

var createNativeComponent = function createNativeComponent(_ref) {
  var accessibilityLabel = _ref.accessibilityLabel;
  var accessibilityLiveRegion = _ref.accessibilityLiveRegion;
  var accessibilityRole = _ref.accessibilityRole;
  var _ref$accessible = _ref.accessible;
  var accessible = _ref$accessible === undefined ? true : _ref$accessible;
  var _ref$component = _ref.component;
  var component = _ref$component === undefined ? 'div' : _ref$component;
  var testID = _ref.testID;
  var type = _ref.type;

  var other = _objectWithoutProperties(_ref, ['accessibilityLabel', 'accessibilityLiveRegion', 'accessibilityRole', 'accessible', 'component', 'testID', 'type']);

  var Component = accessibilityRole && roleComponents[accessibilityRole] ? roleComponents[accessibilityRole] : component;

  return _react2.default.createElement(Component, _extends({}, other, _StyleSheet2.default.resolve(other), {
    'aria-hidden': accessible ? null : true,
    'aria-label': accessibilityLabel,
    'aria-live': accessibilityLiveRegion,
    'data-testid': testID,
    role: accessibilityRole,
    type: accessibilityRole === 'button' ? 'button' : type
  }));
};

createNativeComponent.propTypes = {
  accessibilityLabel: _react.PropTypes.string,
  accessibilityLiveRegion: _react.PropTypes.oneOf(['assertive', 'off', 'polite']),
  accessibilityRole: _react.PropTypes.string,
  accessible: _react.PropTypes.bool,
  component: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
  style: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]),
  testID: _react.PropTypes.string,
  type: _react.PropTypes.string
};

module.exports = createNativeComponent;