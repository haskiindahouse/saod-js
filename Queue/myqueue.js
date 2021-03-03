class MyQueue {
  constructor() {
    this.elem = []
    this.length = 0
    this.first = NaN
  }
  Clear() {
    this.elem = []
    this.length = 0
    this.first = NaN
  }
  isEmpty() {
    return this.length === 0
  }
  Pop() {
    this.length -= 1
    let pop_elem = this.first
    this.elem = this.elem.slice(1)
    this.first = this.elem
    return pop_elem
  }
  Push(element) {
    this.elem[this.length] = element
    if (!this.length)
    {
      this.first = this.elem[this.length]
    }
    this.length += 1
  }
  Top() {
    return this.first
  }
}
