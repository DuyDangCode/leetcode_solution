/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0
  let right = 0
  let set = new Set()
  let currentSubStringLength = 0
  let maxSubStringLength = 0

  for (; right < s.length; right++) {
    if (set.has(s[right])) {
      maxSubStringLength = Math.max(maxSubStringLength, set.size)
      while (set.has(s[right])) {
        set.delete(s[left])
        left++
      }
    }
    set.add(s[right])
  }
  maxSubStringLength = Math.max(maxSubStringLength, set.size)
  return maxSubStringLength
}

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
