/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  const wordsSet = new Set(words)
  const wordsMap = new Map()
  let result = 0

  for (let word of words) {
    wordsMap.set(word, wordsMap.get(word) + 1 || 1)
  }

  let pairWordFlag = 0

  for (let word of words) {
    let frequenceWord = wordsMap.get(word)
    let reservedWord = `${word[1]}${word[0]}`

    if (frequenceWord <= 0) continue
    else if (wordsMap.get(reservedWord) > 0) {
      if (word === reservedWord && frequenceWord < 2) {
        if (pairWordFlag) continue
        result += 2
        wordsMap.set(word, frequenceWord - 1)
        pairWordFlag = 1
      } else {
        result += 4
        wordsMap.set(word, frequenceWord - 1)
        wordsMap.set(
          `${word[1]}${word[0]}`,
          wordsMap.get(`${word[1]}${word[0]}`) - 1,
        )
      }
    }
  }
  console.log(result)
  return result
}

longestPalindrome(['lc', 'cl', 'gg'])
longestPalindrome(['ab', 'ty', 'yt', 'lc', 'cl', 'ab'])
longestPalindrome(['cc', 'll', 'xx'])
