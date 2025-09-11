/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
  const vowelArr = new MinHeap()
  const vowelSet = new Set('ueoaiUEOAI')
  const resultArr = []
  for (let c of s) {
    if (vowelSet.has(c)) vowelArr.push(c)
  }
  for (let i = 0; i < s.length; i++) {
    if (vowelSet.has(s[i])) {
      resultArr.push(vowelArr.pop())
    } else {
      resultArr.push(s[i])
    }
  }
  return resultArr.join('')
}

class MinHeap {
  constructor() {
    this.heap = []
  }

  getParent(i) {
    return Math.floor((i - 1) / 2)
  }
  getLeft(i) {
    return 2 * i + 1
  }
  getRight(i) {
    return 2 * i + 2
  }

  swap(i, j) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  push(val) {
    this.heap.push(val)
    this.bubbleUp(this.heap.length - 1)
  }

  bubbleUp(i) {
    while (i > 0 && this.heap[i] < this.heap[this.getParent(i)]) {
      this.swap(i, this.getParent(i))
      i = this.getParent(i)
    }
  }

  pop() {
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap.pop()

    const min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.bubbleDown(0)
    return min
  }

  bubbleDown(i) {
    let left = this.getLeft(i),
      right = this.getRight(i),
      smallest = i

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right
    }
    if (smallest !== i) {
      this.swap(i, smallest)
      this.bubbleDown(smallest)
    }
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null
  }

  size() {
    return this.heap.length
  }
}

sortVowels('lEetcOde')
