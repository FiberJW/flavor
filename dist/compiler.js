#!/usr/bin/env node
'use strict';

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argz = process.argv.slice(2);
var inputPath = _path2.default.resolve(argz[0]);
var rawInput = _shelljs2.default.cat(inputPath);

var _require = require(_path2.default.parse(inputPath).dir + '/flavor.config.js');

var keys = _require.keys;

var outputFile = _path2.default.resolve(argz[1]);
var outputDir = _path2.default.parse(outputFile).dir;

var translate = function translate(keys, input) {
  keys.map(function (key) {
    input = input.replace(key.alias, key.translation);
  });
  return input;
};

var output = translate(keys, rawInput);

(0, _mkdirp2.default)(outputDir, function (err) {
  if (err) console.error(err);
});

_fs2.default.writeFile(outputFile, output, 'utf8', function (err) {
  if (err) {
    console.error(err);
  }
  console.log('It\'s been real');
});