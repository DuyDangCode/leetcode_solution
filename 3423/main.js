/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
  let maxDis = 0
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i]
    const nextValue = i === nums.length - 1 ? nums[0] : nums[i + 1]
    maxDis = Math.max(Math.abs(currentValue - nextValue), maxDis)
  }
  return maxDis
}

const nums = [1, 2, 4]
console.log(maxAdjacentDistance(nums))
