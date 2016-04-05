/*
 * This recipe would allow you to write code like this
 *
 * psst suh $ = needs('jquery')
 *
 *  suh bish = {
 *    nutz: "got eeem!",
 *    fam: tru,
 *    prank: function() {
 *      unless(false) {
 *        sling log(deez.nutz or nahdeez.fam)
 *      }
 *    }
 * }
 *
 * tru and false aint nahtru or false
 *
 * that compiles to this
 *
 *
 * var bish = {
 *   nutz: "got eeem!",
 *   fam: true,
 *   prank: function() {
 *     if(!false) {
 *       return console.log(this.nutz || !this.fam)
 *     }
 *   }
 * }
 *
 * true && false !== !true || false
 */

module.exports.keys = [
  {
    alias: /\b(suh)\b/g,
    translation: 'var',
  },
  {
    alias: /\b(or)\b/g,
    translation: '||'
  },
  {
    alias: /(->)/g,
    translation: 'function()'
  },
  {
    alias: /\b(and)\b/g,
    translation: '&&'
  },
  {
    alias: /\b(unless\()/g,
    translation: 'if(!'
  },
  {
    alias: /\b(sling)\b/g,
    translation: 'return'
  },
  {
    alias: /\b(is)\b/g,
    translation: '==='
  },
  {
    alias: /\b(aint)\b/g,
    translation: '!=='
  },
  {
    alias: /\b(plus)\b/g,
    translation: '+'
  },
  {
    alias: /(tru)/g,
    translation: 'true'
  },
  {
    alias: /\b(log)/g,
    translation: 'console.log'
  },
  {
    alias: /\b(nah)/g,
    translation: '!'
  },
  {
    alias: /\b(psst)\b/g,
    translation: '//'
  },
  {
    alias: /\b(needs)/g,
    translation: 'require'
  },
  {
    alias: /\b(deez)/g,
    translation: 'this'
  }
]
