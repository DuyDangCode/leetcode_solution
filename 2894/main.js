/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  const divisibleSet = new Set()
  const notDivisibleArr = []
  for (let i = m; i <= n; i = i + m) divisibleSet.add(i)
  for (let i = 1; i <= n; ++i) {
    if (divisibleSet.has(i)) continue
    notDivisibleArr.push(i)
  }

  return (
    notDivisibleArr.reduce((total, number) => total + number, 0) -
    [...divisibleSet].reduce((total, number) => total + number, 0)
  )
}

console.log(differenceOfSums(10, 3))
console.log(differenceOfSums(5, 6))
console.log(differenceOfSums(5, 1))
