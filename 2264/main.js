/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
  let result = ''
  for (let i = 0; i < num.length - 3; i++) {
    if (num[i] === num[i + 1] && num[i + 1] === num[i + 2]) {
      result =
        parseInt(result[0]) > parseInt(num[i]) ? result : num.slice(i, i + 3)
    }
  }
  return result
}

console.log(largestGoodInteger('6777133339'))
