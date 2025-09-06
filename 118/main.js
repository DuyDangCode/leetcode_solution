/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1, 1]]

  const resultOfPreRow = generate(numRows - 1)
  const lastArr = resultOfPreRow[resultOfPreRow.length - 1]
  const tempArr = [1]

  for (let i = 0; i < lastArr.length - 1; i++) {
    tempArr.push(lastArr[i] + lastArr[i + 1])
  }
  tempArr.push(1)

  resultOfPreRow.push(tempArr)
  return resultOfPreRow
}

console.log(generate(5))
