/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {
  const path1 = new Array(edges.length).fill(-1)
  const path2 = new Array(edges.length).fill(-1)

  dfs(edges, node1, path1, 0)
  dfs(edges, node2, path2, 0)

  let distance = Infinity
  let result = -1

  let count1 = 1
  for (let i = 0; i < path1.length; i++) {
    if (path1[i] === -1) break
    let count2 = 1
    for (let j = 0; j < path2.length; j++) {
      if (path2[j] === -1) break
      if (path1[i] === path2[j]) {
        const currentDistance = Math.max(count2, count1)
        if (distance < currentDistance) break
        if (distance === currentDistance) {
          result = Math.min(result, path1[i])
          break
        }
        distance = currentDistance
        result = path1[i]
      }
      count2++
    }
    count1++
  }
  console.log(result)
  return result
}

/**
 *
 * @param {number[]} graph
 * @param {number} node
 * @param {number} index
 * @param {number[]} path
 */

function dfs(graph, node, path, index) {
  if (path[index] !== -1 || node === -1 || node === undefined) return
  path[index] = node
  dfs(graph, graph[node], path, ++index)
}

const edges = [2, 2, 3, -1],
  node1 = 0,
  node2 = 1

closestMeetingNode(edges, node1, node2)
