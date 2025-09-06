/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  let result = []
  words.forEach((word, index) => word.indexOf(x) !== -1 && result.push(index))
  return result
}

let words = ['leet', 'code']
let x = 'e'
let result = findWordsContaining(words, x)
console.log(result)
