#!/usr/bin/node

import shell from 'shelljs'
import fs from 'fs'
import path from 'path'
import mkdirp from 'mkdirp'

const argz = process.argv.slice(2)
const inputPath = path.resolve(argz[0])
const rawInput = shell.cat(inputPath)
const { keys } = require(path.parse(inputPath).dir + '/flavor.config.js')
const outputFile = path.resolve(argz[1])
const outputDir = path.parse(outputFile).dir

const translate = (keys, input) => {
  keys.map(key => {
    input = input.replace(key.alias, key.translation)
  })
  return input
}

const output = translate(keys, rawInput)

mkdirp(outputDir, function (err) {
    if (err) console.error(err)
});

fs.writeFile(outputFile, output, 'utf8', (err) => {
  if (err) {
    console.error(err)
  }
  console.log('It\'s been real')
})
