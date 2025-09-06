/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const n = ratings.length
  const counts = Array(n).fill(1)

  for (let i = 1; i < n; i++) {
    if (ratings[i - 1] < ratings[i]) counts[i] += counts[i - 1] + 1
  }

  for (let i = n - 2; i > -1; i--) {
    if (ratings[i] > ratings[i + 1])
      counts[i] = Math.max(counts[i], counts[i + 1] + 1)
  }
  return counts.reduce((total, item) => total + item, 0)
}

const ratings = [1, 0, 2]
console.log(candy(ratings))
