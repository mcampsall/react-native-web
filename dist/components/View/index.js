'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _NativeMethodsMixin = require('../../modules/NativeMethodsMixin');

var _CoreComponent = require('../CoreComponent');

var _CoreComponent2 = _interopRequireDefault(_CoreComponent);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyleSheet = require('../../apis/StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _StyleSheetPropType = require('../../apis/StyleSheet/StyleSheetPropType');

var _StyleSheetPropType2 = _interopRequireDefault(_StyleSheetPropType);

var _ViewStylePropTypes = require('./ViewStylePropTypes');

var _ViewStylePropTypes2 = _interopRequireDefault(_ViewStylePropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var View = (0, _NativeMethodsMixin.NativeMethodsDecorator)(_class = (_temp = _class2 = function (_Component) {
  _inherits(View, _Component);

  function View(props, context) {
    _classCallCheck(this, View);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(View).call(this, props, context));

    _this._handleClick = _this._handleClick.bind(_this);
    _this._handleClickCapture = _this._handleClickCapture.bind(_this);
    _this._handleTouchCancel = _this._handleTouchCancel.bind(_this);
    _this._handleTouchCancelCapture = _this._handleTouchCancelCapture.bind(_this);
    _this._handleTouchEnd = _this._handleTouchEnd.bind(_this);
    _this._handleTouchEndCapture = _this._handleTouchEndCapture.bind(_this);
    _this._handleTouchMove = _this._handleTouchMove.bind(_this);
    _this._handleTouchMoveCapture = _this._handleTouchMoveCapture.bind(_this);
    _this._handleTouchStart = _this._handleTouchStart.bind(_this);
    _this._handleTouchStartCapture = _this._handleTouchStartCapture.bind(_this);
    return _this;
  }

  _createClass(View, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var pointerEvents = _props.pointerEvents;
      var style = _props.style;

      var other = _objectWithoutProperties(_props, ['pointerEvents', 'style']);

      var pointerEventsStyle = pointerEvents && { pointerEvents: pointerEvents };

      return _react2.default.createElement(_CoreComponent2.default, _extends({}, other, {
        onClick: this._handleClick,
        onClickCapture: this._handleClickCapture,
        onTouchCancel: this._handleTouchCancel,
        onTouchCancelCapture: this._handleTouchCancelCapture,
        onTouchEnd: this._handleTouchEnd,
        onTouchEndCapture: this._handleTouchEndCapture,
        onTouchMove: this._handleTouchMove,
        onTouchMoveCapture: this._handleTouchMoveCapture,
        onTouchStart: this._handleTouchStart,
        onTouchStartCapture: this._handleTouchStartCapture,
        style: [styles.initial, style, pointerEventsStyle]
      }));
    }

    /**
     * React Native expects `pageX` and `pageY` to be on the `nativeEvent`, but
     * React doesn't include them for touch events.
     */

  }, {
    key: '_normalizeTouchEvent',
    value: function _normalizeTouchEvent(event) {
      var _event$nativeEvent = event.nativeEvent;
      var pageX = _event$nativeEvent.pageX;
      var changedTouches = _event$nativeEvent.changedTouches;

      if (pageX === undefined) {
        var _changedTouches$ = changedTouches[0];
        var _pageX = _changedTouches$.pageX;
        var pageY = _changedTouches$.pageY;

        event.nativeEvent.pageX = _pageX;
        event.nativeEvent.pageY = pageY;
      }
      return event;
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(e) {
      if (this.props.onClick) {
        this.props.onClick(this._normalizeTouchEvent(e));
      }
    }
  }, {
    key: '_handleClickCapture',
    value: function _handleClickCapture(e) {
      if (this.props.onClickCapture) {
        this.props.onClickCapture(this._normalizeTouchEvent(e));
      }
    }
  }, {
    key: '_handleTouchCancel',
    value: function _handleTouchCancel(e) {
      if (this.props.onTouchCancel) {
        this.props.onTouchCancel(this._normalizeTouchEvent(e));
      }
    }
  }, {
    key: '_handleTouchCancelCapture',
    value: function _handleTouchCancelCapture(e) {
      if (this.props.onTouchCancelCapture) {
        this.props.onTouchCancelCapture(this._normalizeTouchEvent(e));
      }
    }
  }, {
    key: '_handleTouchEnd',
    value: function _handleTouchEnd(e) {
      if (this.props.onTouchEnd) {
        this.props.onTouchEnd(this._normalizeTouchEvent(e));
      }
    }
  }, {
    key: '_handleTouchEndCapture',
    value: function _handleTouchEndCapture(e) {
      if (this.props.onTouchEndCapture) {
        this.props.onTouchEndCapture(this._normalizeTouchEvent(e));
      }
    }
  }, {
    key: '_handleTouchMove',
    value: function _handleTouchMove(e) {
      if (this.props.onTouchMove) {
        this.props.onTouchMove(this._normalizeTouchEvent(e));
      }
    }
  }, {
    key: '_handleTouchMoveCapture',
    value: function _handleTouchMoveCapture(e) {
      if (this.props.onTouchMoveCapture) {
        this.props.onTouchMoveCapture(this._normalizeTouchEvent(e));
      }
    }
  }, {
    key: '_handleTouchStart',
    value: function _handleTouchStart(e) {
      if (this.props.onTouchStart) {
        this.props.onTouchStart(this._normalizeTouchEvent(e));
      }
    }
  }, {
    key: '_handleTouchStartCapture',
    value: function _handleTouchStartCapture(e) {
      if (this.props.onTouchStartCapture) {
        this.props.onTouchStartCapture(this._normalizeTouchEvent(e));
      }
    }
  }]);

  return View;
}(_react.Component), _class2.propTypes = {
  accessibilityLabel: _CoreComponent2.default.propTypes.accessibilityLabel,
  accessibilityLiveRegion: _CoreComponent2.default.propTypes.accessibilityLiveRegion,
  accessibilityRole: _CoreComponent2.default.propTypes.accessibilityRole,
  accessible: _CoreComponent2.default.propTypes.accessible,
  children: _react.PropTypes.any,
  onClick: _react.PropTypes.func,
  onClickCapture: _react.PropTypes.func,
  onMoveShouldSetResponder: _react.PropTypes.func,
  onMoveShouldSetResponderCapture: _react.PropTypes.func,
  onResponderGrant: _react.PropTypes.func,
  onResponderMove: _react.PropTypes.func,
  onResponderReject: _react.PropTypes.func,
  onResponderRelease: _react.PropTypes.func,
  onResponderTerminate: _react.PropTypes.func,
  onResponderTerminationRequest: _react.PropTypes.func,
  onStartShouldSetResponder: _react.PropTypes.func,
  onStartShouldSetResponderCapture: _react.PropTypes.func,
  onTouchCancel: _react.PropTypes.func,
  onTouchCancelCapture: _react.PropTypes.func,
  onTouchEnd: _react.PropTypes.func,
  onTouchEndCapture: _react.PropTypes.func,
  onTouchMove: _react.PropTypes.func,
  onTouchMoveCapture: _react.PropTypes.func,
  onTouchStart: _react.PropTypes.func,
  onTouchStartCapture: _react.PropTypes.func,
  pointerEvents: _react.PropTypes.oneOf(['auto', 'box-none', 'box-only', 'none']),
  style: (0, _StyleSheetPropType2.default)(_ViewStylePropTypes2.default),
  testID: _CoreComponent2.default.propTypes.testID
}, _class2.defaultProps = {
  accessible: true
}, _temp)) || _class;

exports.default = View;


var styles = _StyleSheet2.default.create({
  // https://github.com/facebook/css-layout#default-values
  initial: {
    alignItems: 'stretch',
    borderWidth: 0,
    borderStyle: 'solid',
    boxSizing: 'border-box',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    flexShrink: 0,
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
    textDecoration: 'none',
    // button reset
    backgroundColor: 'transparent',
    color: 'inherit',
    font: 'inherit',
    textAlign: 'inherit'
  }
});