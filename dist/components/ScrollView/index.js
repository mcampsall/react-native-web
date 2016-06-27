'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _NativeMethodsMixin = require('../../modules/NativeMethodsMixin');

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyleSheet = require('../../apis/StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _View = require('../View');

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollView = (0, _NativeMethodsMixin.NativeMethodsDecorator)(_class = (_temp = _class2 = function (_Component) {
  _inherits(ScrollView, _Component);

  function ScrollView() {
    var _Object$getPrototypeO;

    _classCallCheck(this, ScrollView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ScrollView)).call.apply(_Object$getPrototypeO, [this].concat(args)));

    _this._debouncedOnScrollEnd = (0, _lodash2.default)(_this._onScrollEnd, 100);
    _this.state = {
      isScrolling: false
    };
    return _this;
  }

  _createClass(ScrollView, [{
    key: '_onScroll',
    value: function _onScroll(e) {
      var scrollEventThrottle = this.props.scrollEventThrottle;
      var _state = this.state;
      var isScrolling = _state.isScrolling;
      var scrollLastTick = _state.scrollLastTick;

      // A scroll happened, so the scroll bumps the debounce.

      this._debouncedOnScrollEnd(e);

      if (isScrolling) {
        // Scroll last tick may have changed, check if we need to notify
        if (this._shouldEmitScrollEvent(scrollLastTick, scrollEventThrottle)) {
          this._onScrollTick(e);
        }
      } else {
        // Weren't scrolling, so we must have just started
        this._onScrollStart(e);
      }
    }
  }, {
    key: '_onScrollStart',
    value: function _onScrollStart() {
      this.setState({
        isScrolling: true,
        scrollLastTick: Date.now()
      });
    }
  }, {
    key: '_onScrollTick',
    value: function _onScrollTick(e) {
      var onScroll = this.props.onScroll;

      this.setState({
        scrollLastTick: Date.now()
      });
      if (onScroll) onScroll(e);
    }
  }, {
    key: '_onScrollEnd',
    value: function _onScrollEnd(e) {
      var onScroll = this.props.onScroll;

      this.setState({
        isScrolling: false
      });
      if (onScroll) onScroll(e);
    }
  }, {
    key: '_shouldEmitScrollEvent',
    value: function _shouldEmitScrollEvent(lastTick, eventThrottle) {
      var timeSinceLastTick = Date.now() - lastTick;
      return eventThrottle > 0 && timeSinceLastTick >= 1000 / eventThrottle;
    }
  }, {
    key: '_maybePreventScroll',
    value: function _maybePreventScroll(e) {
      var scrollEnabled = this.props.scrollEnabled;

      if (!scrollEnabled) e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var children = _props.children;
      var contentContainerStyle = _props.contentContainerStyle;
      var horizontal = _props.horizontal;
      var style = _props.style;


      return _react2.default.createElement(
        _View2.default,
        {
          onScroll: function onScroll(e) {
            return _this2._onScroll(e);
          },
          onTouchMove: function onTouchMove(e) {
            return _this2._maybePreventScroll(e);
          },
          onWheel: function onWheel(e) {
            return _this2._maybePreventScroll(e);
          },
          style: [styles.initial, style]
        },
        children ? _react2.default.createElement(_View2.default, {
          children: children,
          style: [styles.initialContentContainer, contentContainerStyle, horizontal && styles.row]
        }) : null
      );
    }
  }]);

  return ScrollView;
}(_react.Component), _class2.propTypes = {
  children: _react.PropTypes.any,
  contentContainerStyle: _View2.default.propTypes.style,
  horizontal: _react.PropTypes.bool,
  onScroll: _react.PropTypes.func,
  scrollEnabled: _react.PropTypes.bool,
  scrollEventThrottle: _react.PropTypes.number,
  style: _View2.default.propTypes.style
}, _class2.defaultProps = {
  contentContainerStyle: {},
  horizontal: false,
  scrollEnabled: true,
  scrollEventThrottle: 0,
  style: {}
}, _temp)) || _class;

exports.default = ScrollView;


var styles = _StyleSheet2.default.create({
  initial: {
    flex: 1,
    overflow: 'auto'
  },
  initialContentContainer: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  }
});