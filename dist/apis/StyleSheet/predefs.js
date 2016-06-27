'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Reset unwanted styles beyond the control of React inline styles
 */
var resetCSS = exports.resetCSS = '/* React Native Web */\nhtml {font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}\nbody {margin:0}\nbutton::-moz-focus-inner, input::-moz-focus-inner {border:0;padding:0}\ninput[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration {-webkit-appearance:none}\nol,ul,li {list-style:none}';

/**
 * Custom pointer event styles
 */
var predefinedCSS = exports.predefinedCSS = '/* pointer-events */\n._s_pe-a, ._s_pe-bo, ._s_pe-bn * {pointer-events:auto}\n._s_pe-n, ._s_pe-bo *, ._s_pe-bn {pointer-events:none}';

var predefinedClassNames = exports.predefinedClassNames = {
  'pointerEvents:auto': '_s_pe-a',
  'pointerEvents:box-none': '_s_pe-bn',
  'pointerEvents:box-only': '_s_pe-bo',
  'pointerEvents:none': '_s_pe-n'
};