import shell from 'shelljs'
import { keys } from './keys'

const rawInput = shell.cat('./main.js')
const translate = (keys, input) => {
  keys.map(key => {
    input = input.replace(key.alias, key.translation)
  })
  return input
}

const input = translate(keys, rawInput)
console.log('the final input is', input)
