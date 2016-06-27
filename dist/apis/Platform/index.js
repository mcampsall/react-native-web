'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var Platform = {
  OS: 'web',
  userAgent: _ExecutionEnvironment.canUseDOM ? window.navigator.userAgent : ''
};

exports.default = Platform;