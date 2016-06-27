'use strict';

var _EventConstants = require('react/lib/EventConstants');

var _EventConstants2 = _interopRequireDefault(_EventConstants);

var _EventPluginRegistry = require('react/lib/EventPluginRegistry');

var _EventPluginRegistry2 = _interopRequireDefault(_EventPluginRegistry);

var _ResponderEventPlugin = require('react/lib/ResponderEventPlugin');

var _ResponderEventPlugin2 = _interopRequireDefault(_ResponderEventPlugin);

var _ResponderTouchHistoryStore = require('react/lib/ResponderTouchHistoryStore');

var _ResponderTouchHistoryStore2 = _interopRequireDefault(_ResponderTouchHistoryStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// based on https://github.com/facebook/react/pull/4303/files

var _EventConstants$topLe = _EventConstants2.default.topLevelTypes;
var topMouseDown = _EventConstants$topLe.topMouseDown;
var topMouseMove = _EventConstants$topLe.topMouseMove;
var topMouseUp = _EventConstants$topLe.topMouseUp;
var topScroll = _EventConstants$topLe.topScroll;
var topSelectionChange = _EventConstants$topLe.topSelectionChange;
var topTouchCancel = _EventConstants$topLe.topTouchCancel;
var topTouchEnd = _EventConstants$topLe.topTouchEnd;
var topTouchMove = _EventConstants$topLe.topTouchMove;
var topTouchStart = _EventConstants$topLe.topTouchStart;


var endDependencies = [topMouseUp, topTouchCancel, topTouchEnd];
var moveDependencies = [topMouseMove, topTouchMove];
var startDependencies = [topMouseDown, topTouchStart];

/**
 * Setup ResponderEventPlugin dependencies
 */
_ResponderEventPlugin2.default.eventTypes.responderMove.dependencies = moveDependencies;
_ResponderEventPlugin2.default.eventTypes.responderEnd.dependencies = endDependencies;
_ResponderEventPlugin2.default.eventTypes.responderStart.dependencies = startDependencies;
_ResponderEventPlugin2.default.eventTypes.responderRelease.dependencies = [];
_ResponderEventPlugin2.default.eventTypes.responderTerminationRequest.dependencies = [];
_ResponderEventPlugin2.default.eventTypes.responderGrant.dependencies = [];
_ResponderEventPlugin2.default.eventTypes.responderReject.dependencies = [];
_ResponderEventPlugin2.default.eventTypes.responderTerminate.dependencies = [];
_ResponderEventPlugin2.default.eventTypes.moveShouldSetResponder.dependencies = moveDependencies;
_ResponderEventPlugin2.default.eventTypes.selectionChangeShouldSetResponder.dependencies = [topSelectionChange];
_ResponderEventPlugin2.default.eventTypes.scrollShouldSetResponder.dependencies = [topScroll];
_ResponderEventPlugin2.default.eventTypes.startShouldSetResponder.dependencies = startDependencies;

// Mobile Safari re-uses touch objects, so we copy the properties we want and normalize the identifier
var normalizeTouches = function normalizeTouches() {
  var touches = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  return Array.prototype.slice.call(touches).map(function (touch) {
    var identifier = touch.identifier > 20 ? touch.identifier % 20 : touch.identifier;

    return {
      clientX: touch.clientX,
      clientY: touch.clientY,
      force: touch.force,
      identifier: identifier,
      pageX: touch.pageX,
      pageY: touch.pageY,
      radiusX: touch.radiusX,
      radiusY: touch.radiusY,
      rotationAngle: touch.rotationAngle,
      screenX: touch.screenX,
      screenY: touch.screenY,
      target: touch.target
    };
  });
};

var normalizeNativeEvent = function normalizeNativeEvent(nativeEvent) {
  var changedTouches = normalizeTouches(nativeEvent.changedTouches);
  var touches = normalizeTouches(nativeEvent.touches);

  var event = {
    changedTouches: changedTouches,
    pageX: nativeEvent.pageX,
    pageY: nativeEvent.pageY,
    target: nativeEvent.target,
    // normalize the timestamp
    // https://stackoverflow.com/questions/26177087/ios-8-mobile-safari-wrong-timestamp-on-touch-events
    timestamp: Date.now(),
    touches: touches
  };

  if (changedTouches[0]) {
    event.identifier = changedTouches[0].identifier;
    event.pageX = changedTouches[0].pageX;
    event.pageY = changedTouches[0].pageY;
  }

  return event;
};

var originalRecordTouchTrack = _ResponderTouchHistoryStore2.default.recordTouchTrack;

_ResponderTouchHistoryStore2.default.recordTouchTrack = function (topLevelType, nativeEvent) {
  originalRecordTouchTrack.call(_ResponderTouchHistoryStore2.default, topLevelType, normalizeNativeEvent(nativeEvent));
};

_EventPluginRegistry2.default.injectEventPluginsByName({
  ResponderEventPlugin: _ResponderEventPlugin2.default
});