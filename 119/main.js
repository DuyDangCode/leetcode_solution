/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1]
  if (rowIndex === 1) return [1, 1]
  const preRow = getRow(rowIndex - 1)
  const result = [1]

  for (let i = 0; i < preRow.length - 1; i++) {
    result.push(preRow[i] + preRow[i + 1])
  }
  result.push(1)
  return result
}
