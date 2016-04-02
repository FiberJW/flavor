'use strict';

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var input = _shelljs2.default.cat('./main.js');
var keys = _shelljs2.default.cat('./keys.js');

var token = input.split(" ");
console.log(keys);
console.log(token);