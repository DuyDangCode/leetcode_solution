/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function (n, delay, forget) {
  const MOD = 1000000007
  let result = 1
  let countPeople = 0
  let delayStack = []
  delayStack.push([delay, 1])

  let forgetStack = []
  forgetStack.push([forget, 1])

  for (let i = 1; i <= n; i++) {
    result += countPeople % MOD

    if (countPeople > 0) {
      delayStack.push([i + delay - 1, countPeople % MOD])
      forgetStack.push([i + forget - 1, countPeople % MOD])
    }

    // console.log('day-' + i)
    // console.log(delayStack)
    // console.log('forget-' + forgetStack)
    // console.log('countPeople-' + countPeople)
    // console.log()

    if (i === delayStack[0][0]) {
      countPeople += delayStack[0][1] % MOD
      delayStack.shift()
    }

    if (i === forgetStack[0][0]) {
      countPeople -= forgetStack[0][1] % MOD
      if (i < n) result -= forgetStack[0][1] % MOD
      forgetStack.shift()
    }
  }

  return result % MOD
}

console.log(peopleAwareOfSecret(425, 81, 118))
console.log(peopleAwareOfSecret(4, 1, 3))
