/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
  if (n / 3 > limit) return 0
  const resultSet = new Set()

  for (let i = 0; i <= limit; i++) {
    for (let j = 0; j <= limit; j++) {
      let g = n - i - j
      if (g > limit || g < 0) continue
      resultSet.add(`${i}${j}${g}`)
    }
  }
  console.log(resultSet)

  return resultSet.size
}

const n = 3
const limit = 3

console.log(distributeCandies(n, limit))
