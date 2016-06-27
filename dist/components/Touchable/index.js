'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyleSheet = require('../../apis/StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _reactTappable = require('react-tappable');

var _reactTappable2 = _interopRequireDefault(_reactTappable);

var _View = require('../View');

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Touchable = (_temp = _class = function (_Component) {
  _inherits(Touchable, _Component);

  function Touchable(props, context) {
    _classCallCheck(this, Touchable);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Touchable).call(this, props, context));

    _this.state = {
      isActive: false
    };

    _this._onLongPress = _this._onLongPress.bind(_this);
    _this._onPress = _this._onPress.bind(_this);
    _this._onPressIn = _this._onPressIn.bind(_this);
    _this._onPressOut = _this._onPressOut.bind(_this);
    return _this;
  }

  _createClass(Touchable, [{
    key: '_getChildren',
    value: function _getChildren() {
      var _props = this.props;
      var activeOpacity = _props.activeOpacity;
      var children = _props.children;

      return _react2.default.cloneElement(_react2.default.Children.only(children), {
        style: [children.props.style, this.state.isActive && { opacity: activeOpacity }]
      });
    }
  }, {
    key: '_onKeyEnter',
    value: function _onKeyEnter(e, callback) {
      var ENTER = 13;
      if (e.keyCode === ENTER) {
        callback(e);
      }
    }
  }, {
    key: '_onLongPress',
    value: function _onLongPress(e) {
      if (this.props.onLongPress) this.props.onLongPress(e);
    }
  }, {
    key: '_onPress',
    value: function _onPress(e) {
      if (this.props.onPress) this.props.onPress(e);
    }
  }, {
    key: '_onPressIn',
    value: function _onPressIn(e) {
      this.setState({ isActive: true });
      if (this.props.onPressIn) this.props.onPressIn(e);
    }
  }, {
    key: '_onPressOut',
    value: function _onPressOut(e) {
      this.setState({ isActive: false });
      if (this.props.onPressOut) this.props.onPressOut(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props;
      var accessibilityLabel = _props2.accessibilityLabel;
      var accessibilityRole = _props2.accessibilityRole;
      var accessible = _props2.accessible;
      var activeUnderlayColor = _props2.activeUnderlayColor;
      var delayLongPress = _props2.delayLongPress;
      var style = _props2.style;

      /**
       * Creates a wrapping element that can receive keyboard focus. The
       * highlight is applied as a background color on this wrapper. The opacity
       * is set on the child element, allowing it to have its own background
       * color.
       */

      return _react2.default.createElement(_reactTappable2.default, {
        accessibilityLabel: accessibilityLabel,
        accessibilityRole: accessibilityRole,
        accessible: accessible,
        children: this._getChildren(),
        component: _View2.default,
        onKeyDown: function onKeyDown(e) {
          _this2._onKeyEnter(e, _this2._onPressIn);
        },
        onKeyPress: this._onPress,
        onKeyUp: function onKeyUp(e) {
          _this2._onKeyEnter(e, _this2._onPressOut);
        },
        onMouseDown: this._onPressIn,
        onMouseUp: this._onPressOut,
        onPress: this._onLongPress,
        onTap: this._onPress,
        onTouchEnd: this._onPressOut,
        onTouchStart: this._onPressIn,
        pressDelay: delayLongPress,
        pressMoveThreshold: 5,
        style: _StyleSheet2.default.flatten([styles.initial, style, activeUnderlayColor && this.state.isActive && { backgroundColor: activeUnderlayColor }]),
        tabIndex: '0'
      });
    }
  }]);

  return Touchable;
}(_react.Component), _class.propTypes = {
  accessibilityLabel: _View2.default.propTypes.accessibilityLabel,
  accessibilityRole: _View2.default.propTypes.accessibilityRole,
  accessible: _View2.default.propTypes.accessible,
  activeOpacity: _react.PropTypes.number,
  activeUnderlayColor: _react.PropTypes.string,
  children: _react.PropTypes.element,
  delayLongPress: _react.PropTypes.number,
  delayPressIn: _react.PropTypes.number,
  delayPressOut: _react.PropTypes.number,
  onLongPress: _react.PropTypes.func,
  onPress: _react.PropTypes.func,
  onPressIn: _react.PropTypes.func,
  onPressOut: _react.PropTypes.func,
  style: _View2.default.propTypes.style
}, _class.defaultProps = {
  accessibilityRole: 'button',
  activeOpacity: 0.8,
  activeUnderlayColor: 'black',
  delayLongPress: 500,
  delayPressIn: 0,
  delayPressOut: 100,
  style: {}
}, _temp);
exports.default = Touchable;


var styles = _StyleSheet2.default.create({
  initial: {
    cursor: 'pointer',
    userSelect: undefined
  }
});