function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const result = []
  run(root, '', result)
  return result
}

/**
 * @param {TreeNode} root
 * @param {string} currentPath
 * @param {string[]} paths
 *
 */
function run(root, currentPath, paths) {
  if (!root) return
  currentPath += root.val
  if (!root.left && !root.right) {
    paths.push(currentPath)
    return
  }
  currentPath += '->'
  run(root.left, currentPath, paths)
  run(root.right, currentPath, paths)
}
