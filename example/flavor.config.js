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
