/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  const map = new Map()
  const set = new Set()
  let sum = 0
  let currentSum = 0
  let i = 0

  while (i < nums.length) {
    if (set.has(nums[i])) {
      sum = Math.max(sum, currentSum)
      i = map.get(nums[i]) + 1
      currentSum = 0
      set.delete(nums[i])
    } else {
      set.add(nums[i])
      map.set(nums[i], i)
      currentSum += nums[i]
      i++
    }
  }
  return Math.max(sum, currentSum)
}
