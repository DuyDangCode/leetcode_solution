/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
  const result = []

  for (let h = 0; h < 12; h++)
    for (let m = 0; m < 60; m++) {
      const hOnes = h ? h.toString(2).match(/1/g).length : h
      const mOnes = m ? m.toString(2).match(/1/g).length : m
      if (hOnes + mOnes === turnedOn)
        result.push(`${h}:${m < 10 ? `0${m}` : m}`)
    }
  return result
}

console.log(readBinaryWatch(1))
