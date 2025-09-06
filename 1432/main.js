/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function (num) {
  const numString = num.toString()
  const numArr = numString.split('')
  const maxStringNum = numString.replaceAll(numArr[0], 9)
  let notBeReplaceDigit = numArr[0]
  let replaceDigit = -1

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] !== notBeReplaceDigit && numArr[i] != 0) {
      replaceDigit = numArr[i]
      break
    }
  }
  let minStringNum = '0'
  if (replaceDigit == -1) {
    minStringNum = numString.replaceAll(numArr[0], 1)
  } else {
    minStringNum = numString.replaceAll(replaceDigit, 0)
  }
  console.log(minStringNum, maxStringNum)

  return parseInt(maxStringNum - minStringNum)
}

let num = 123456
console.log(maxDiff(num))

num = 555
console.log(maxDiff(num))

num = 9
console.log(maxDiff(num))
