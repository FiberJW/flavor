/*
 * Talk like a pirate while you code!
 * yar meHearties = ['Polly', 'Blackbeard', 'Frank']
 *
 * ahoy('Land ho!')
 *
 * yar landHo = nay
 * yar doubloons = aye
 *
 * sallyForth (meHearties) {
 *   aye meHearties
 * }
 *
 * tharSheBlows('Shiver me timbers!')
 *
 * will compile to
 *
 * var meHearties = ['Polly', 'Blackbeard', 'Frank']
 *
 * console.log('Land ho!')
 *
 * var landHo = false
 * var doubloons = true
 *
 * function (meHearties) {
 *   return meHearties
 * }
 *
 * alert('Shiver me timbers!')
 */

module.exports.keys = [
  {
    alias: /\b(ahoy\()\b/g,
    translation: 'console.log('
  },
  {
    alias: /\b(tharSheBlows\()\b/g,
    translation: 'alert('
  },
  {
    alias: /\b(sallyForth)\b/g,
    translation: 'function'
  },
  {
    alias: /\b(aye)\b/g,
    translation: 'true'
  },
  {
    alias: /\b(nay)\b/g,
    translation: 'false'
  },
  {
    alias: /\b(yar)\b/g,
    translation: 'var'
  }
]
