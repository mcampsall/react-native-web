'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _normalizeValue = require('./normalizeValue');

var _normalizeValue2 = _interopRequireDefault(_normalizeValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleShortHands = {
  borderColor: ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'],
  borderRadius: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'],
  borderStyle: ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'],
  borderWidth: ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'],
  margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
  marginHorizontal: ['marginRight', 'marginLeft'],
  marginVertical: ['marginTop', 'marginBottom'],
  padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
  paddingHorizontal: ['paddingRight', 'paddingLeft'],
  paddingVertical: ['paddingTop', 'paddingBottom'],
  writingDirection: ['direction']
};

/**
 * Alpha-sort properties, apart from shorthands which appear before the
 * properties they expand into. This ensures that more specific styles override
 * the shorthands, whatever the order in which they were originally declared.
 */
var sortProps = function sortProps(propsArray) {
  return propsArray.sort(function (a, b) {
    var expandedA = styleShortHands[a];
    var expandedB = styleShortHands[b];
    if (expandedA && expandedA.indexOf(b) > -1) {
      return -1;
    } else if (expandedB && expandedB.indexOf(a) > -1) {
      return 1;
    }
    return a < b ? -1 : a > b ? 1 : 0;
  });
};

/**
 * Expand the shorthand properties to isolate every declaration from the others.
 */
var expandStyle = function expandStyle(style) {
  var propsArray = Object.keys(style);
  var sortedProps = sortProps(propsArray);

  return sortedProps.reduce(function (resolvedStyle, key) {
    var expandedProps = styleShortHands[key];
    var value = (0, _normalizeValue2.default)(key, style[key]);

    if (expandedProps) {
      expandedProps.forEach(function (prop, i) {
        resolvedStyle[expandedProps[i]] = value;
      });
    } else if (key === 'flex') {
      resolvedStyle.flexGrow = value;
      resolvedStyle.flexShrink = 1;
      resolvedStyle.flexBasis = 'auto';
    } else {
      resolvedStyle[key] = value;
    }
    return resolvedStyle;
  }, {});
};

exports.default = expandStyle;