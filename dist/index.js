'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// apis


// components


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

require('./apis/PanResponder/injectResponderEventPlugin');

var _Animated = require('./apis/Animated');

var _Animated2 = _interopRequireDefault(_Animated);

var _AppRegistry = require('./apis/AppRegistry');

var _AppRegistry2 = _interopRequireDefault(_AppRegistry);

var _AppState = require('./apis/AppState');

var _AppState2 = _interopRequireDefault(_AppState);

var _AsyncStorage = require('./apis/AsyncStorage');

var _AsyncStorage2 = _interopRequireDefault(_AsyncStorage);

var _Dimensions = require('./apis/Dimensions');

var _Dimensions2 = _interopRequireDefault(_Dimensions);

var _Easing = require('./apis/Easing');

var _Easing2 = _interopRequireDefault(_Easing);

var _InteractionManager = require('./apis/InteractionManager');

var _InteractionManager2 = _interopRequireDefault(_InteractionManager);

var _NetInfo = require('./apis/NetInfo');

var _NetInfo2 = _interopRequireDefault(_NetInfo);

var _PanResponder = require('./apis/PanResponder');

var _PanResponder2 = _interopRequireDefault(_PanResponder);

var _PixelRatio = require('./apis/PixelRatio');

var _PixelRatio2 = _interopRequireDefault(_PixelRatio);

var _Platform = require('./apis/Platform');

var _Platform2 = _interopRequireDefault(_Platform);

var _StyleSheet = require('./apis/StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _ActivityIndicator = require('./components/ActivityIndicator');

var _ActivityIndicator2 = _interopRequireDefault(_ActivityIndicator);

var _Image = require('./components/Image');

var _Image2 = _interopRequireDefault(_Image);

var _ListView = require('./components/ListView');

var _ListView2 = _interopRequireDefault(_ListView);

var _Portal = require('./components/Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _ScrollView = require('./components/ScrollView');

var _ScrollView2 = _interopRequireDefault(_ScrollView);

var _Text = require('./components/Text');

var _Text2 = _interopRequireDefault(_Text);

var _TextInput = require('./components/TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Touchable = require('./components/Touchable');

var _Touchable2 = _interopRequireDefault(_Touchable);

var _View = require('./components/View');

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactNative = _extends({
  // apis
  Animated: _Animated2.default,
  AppRegistry: _AppRegistry2.default,
  AppState: _AppState2.default,
  AsyncStorage: _AsyncStorage2.default,
  Dimensions: _Dimensions2.default,
  Easing: _Easing2.default,
  InteractionManager: _InteractionManager2.default,
  NetInfo: _NetInfo2.default,
  PanResponder: _PanResponder2.default,
  PixelRatio: _PixelRatio2.default,
  Platform: _Platform2.default,
  StyleSheet: _StyleSheet2.default,

  // components
  ActivityIndicator: _ActivityIndicator2.default,
  Image: _Image2.default,
  ListView: _ListView2.default,
  Portal: _Portal2.default,
  ScrollView: _ScrollView2.default,
  Text: _Text2.default,
  TextInput: _TextInput2.default,
  TouchableBounce: _Touchable2.default,
  TouchableHighlight: _Touchable2.default,
  TouchableOpacity: _Touchable2.default,
  TouchableWithoutFeedback: _Touchable2.default,
  View: _View2.default

}, _react2.default, _reactDom2.default, _server2.default);

module.exports = ReactNative;