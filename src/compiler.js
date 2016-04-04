#!/usr/bin/env node

import shell from 'shelljs'
import fs from 'fs'
import path from 'path'
import mkdirp from 'mkdirp'

const argz = process.argv.slice(2) // the specified args to the bin call
const inputPath = path.resolve(argz[0]) // including file name
const config = path.parse(inputPath).dir + '/flavor.config.js'

fs.openSync(argz[0], 'r'); // check if inputfile exists

if (argz.length !== 2) { // check if an output path is specified
  throw new Error('Must specify <inputfile> and <outputfile> in that order.')
}

fs.openSync(config, 'r'); // Check for config

const rawInput = shell.cat(inputPath) // store plain text from input
const { keys } = require(config)
const outputFile = path.resolve(argz[1])
const outputDir = path.parse(outputFile).dir

const translate = (keys, input) => {
  keys.map(key => {
    input = input.replace(key.alias, key.translation)
  })
  return input
}

const output = translate(keys, rawInput) // the transformed output

mkdirp(outputDir, function (err) { // Creates specified outputDir if it doesn't exist
    if (err) console.error(err)
});

fs.writeFile(outputFile, output, 'utf8', (err) => {
  if (err) {
    console.error(err)
  }
  console.log(`${argz[0]} successfully compiled to ${argz[1]}`)
})
