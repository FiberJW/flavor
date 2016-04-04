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

var argz = process.argv.slice(2); // the specified args to the bin call
var inputPath = _path2.default.resolve(argz[0]); // including file name
var config = _path2.default.parse(inputPath).dir + '/flavor.config.js';

_fs2.default.openSync(argz[0], 'r'); // check if inputfile exists

if (argz.length !== 2) {
  // check if an output path is specified
  throw new Error('Must specify <inputfile> and <outputfile> in that order.');
}

_fs2.default.openSync(config, 'r'); // Check for config

var rawInput = _shelljs2.default.cat(inputPath); // store plain text from input

var _require = require(config);

var keys = _require.keys;

var outputFile = _path2.default.resolve(argz[1]);
var outputDir = _path2.default.parse(outputFile).dir;

var translate = function translate(keys, input) {
  keys.map(function (key) {
    input = input.replace(key.alias, key.translation);
  });
  return input;
};

var output = translate(keys, rawInput); // the transformed output

(0, _mkdirp2.default)(outputDir, function (err) {
  // Creates specified outputDir if it doesn't exist
  if (err) console.error(err);
});

_fs2.default.writeFile(outputFile, output, 'utf8', function (err) {
  if (err) {
    console.error(err);
  }
  console.log(argz[0] + ' successfully compiled to ' + argz[1]);
});