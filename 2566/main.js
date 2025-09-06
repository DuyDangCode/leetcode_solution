/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
  //222
  const numString = num.toString()
  const numArr = numString.split('')
  let min = -1,
    max = -1
  for (let i = 0; i < numString.length; i++) {
    if (min !== -1 && max !== -1) break
    if (max === -1 && numArr[i] != 0) {
      max = numArr[i]
    }
    if (min === -1 && numArr[i] != 9) {
      min = numArr[i]
    }
  }
  const maxNumString = numString.replaceAll(min, 9)
  const minNumString = numString.replaceAll(max, 0)

  return parseInt(maxNumString - minNumString)
}

const num = 90
console.log(minMaxDifference(num))
