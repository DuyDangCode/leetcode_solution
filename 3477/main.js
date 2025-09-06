/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  let sumUnplaced = 0
  const usedBasket = new Set()
  Loop1: for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < baskets.length; j++) {
      if (baskets[j] >= fruits[i] && !usedBasket.has(j)) {
        usedBasket.add(j)
        continue Loop1
      }
    }
    sumUnplaced++
  }
  return sumUnplaced
}
