'use strict';

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _keys = require('./keys');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rawInput = _shelljs2.default.cat('./main.js');
var translate = function translate(keys, input) {
  keys.map(function (key) {
    input = input.replace(key.alias, key.translation);
  });
  return input;
};

var input = translate(_keys.keys, rawInput);
console.log('the final input is', input);