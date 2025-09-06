/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function (n) {
  let reverseBinaryString = n
    .toString(2)
    .split('')
    .reduce((acc, c) => c + acc, '')

  if (reverseBinaryString.length < 32) {
    const appendedString = new Array(32 - reverseBinaryString.length)
      .fill(1)
      .reduce((acc, i) => acc + '0', '')
    reverseBinaryString += appendedString

    console.log(reverseBinaryString)
  }
  return parseInt(reverseBinaryString, 2)
}

console.log(reverseBits(43261596))
