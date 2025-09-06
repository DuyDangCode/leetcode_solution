/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const dp1 = Array.from({ length: s.length }, () => Array(s.length).fill(-1))
  for (let i = 0; i < s.length; i++) {
    dp1[i][i] = 1
  }
  for (let right = s.length - 1; right > 0; right--)
    for (let left = 0; left < s.length - right; left++) {
      if (checkPalindrome(s, left, right, dp1)) {
        return s.slice(left, right + 1)
      }
    }
  return ''
}

function checkPalindrome(s, left, right, dp) {
  if (dp[left][right] === 1) return true
  if (dp[left][right] === 0) return false
  while (left < right) {
    if (s[left] !== s[right]) {
      dp[left][right] = 0
      return false
    }
    left++
    right--
  }
  dp[left][right] = 1
  return true
}
// console.log(longestPalindrome('duy'))
// console.log(longestPalindrome('cbbdd'))
console.log(longestPalindrome('abacc'))
