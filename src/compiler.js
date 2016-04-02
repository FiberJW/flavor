import shell from 'shelljs'

const input = shell.cat('./main.js')
const keys = shell.cat('./keys.js')

const token = input.split(" ")
console.log(keys)
console.log(token)
