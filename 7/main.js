/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isPositive = x >= 0
  const max = 2147483647
  const min = -2147483648
  if (!isPositive) x *= -1
  const number =
    x
      .toString()
      .split('')
      .reverse()
      .reduce((acc, num) => {
        return acc * 10 + num * 1
      }, 0) * (isPositive ? 1 : -1)
  if (number > max || number < min) return 0
  return number
}
console.log(reverse(123))
console.log(reverse(-123))
