/*
 * This allows Ruby-esque code to be written and compiled to JS
 * 
 * unless (true) do
 *   return;
 * end
 * elsif (true) do
 *   print(true or false == true)
 * end
 *
 * will compile to 
 *
 * if (!true) {
 *   return;
 * }
 * else if (true) {
 *   console.log(true || false === true)
 * }
 */

module.exports.keys = [
  {
    alias: /\b(print\()\b/g,
    translation: 'console.log('
  },
  {
    alias: /\b(elsif\s?\()/g,
    translation: 'else if ('
  },
  {
    alias: /\b(or)\b/g,
    translation: '||'
  },
  {
    alias: /\s(\=\=)\s/g,
    translation: ' === '
  },
  {
    alias: /\b(and)\b/g,
    translation: '&&'
  },
  {
    alias: /\b(def)\b/g,
    translation: 'function'
  },
  {
    alias: /\b(unless\s?\()/g,
    translation: 'if (!'
  },
  {
    alias: /\b(is)\b/g,
    translation: '==='
  },
  {
    alias: /\b(do)\b/g,
    translation: '{'
  },
  {
    alias: /\b(end)\b/g,
    translation: '}'
  },
  {
    alias: /\b(next)\b/g,
    translation: 'continue'
  }
]
