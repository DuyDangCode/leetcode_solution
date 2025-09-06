/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const arr = [0]
  for (let i = 1; i < n + 1; i++) {
    arr.push(arr[i >> 1] + (i & 1))
  }
  return arr
}

countBits(5)
