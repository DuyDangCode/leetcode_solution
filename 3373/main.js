/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number[]}
 */
var maxTargetNodes = function (edges1, edges2) {
  const n = edges1.length + 1,
    m = edges2.length + 1,
    color1 = new Array(n).fill(0),
    color2 = new Array(m).fill(0),
    count1 = buildtree(edges1, color1),
    count2 = buildtree(edges2, color2),
    res = new Array(n).fill(0)

  for (let i = 0; i < n; i++) {
    res[i] = count1[color1[i]] + Math.max(count2[0], count2[1])
  }
  return res
}

/**
 * @param {number[]} edges
 * @param {number[]} color
 * @return {number[]}
 */
function buildtree(edges, color) {
  const n = edges.length + 1
  const arr = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    arr[u].push(v)
    arr[v].push(u)
  }
  const res = dfs(0, -1, 0, arr, color)
  return [res, n - res]
}

/**
 * @param {number} node
 * @param {number} parent
 * @param {number} depth
 * @param {number[][]} arr
 * @param {number[]} color
 * @return {number}
 * */
function dfs(node, parent, depth, arr, color) {
  let res = 1 - (depth % 2)
  color[node] = 1 - res
  for (const childNode of arr[node]) {
    if (childNode === parent) continue
    res += dfs(childNode, node, depth + 1, arr, color)
  }
  return res
}
