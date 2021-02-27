class MyQueue {
  constructor() {
    this.elem = []
    this.length = 0;
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
    this.first = this.elem[0]
    return pop_elem
  }
  Push(element, position) {
    this.elem[this.length] = [element, position]
    if (!this.length)
    {
      this.first = this.elem[this.length]
    }
    this.length += 1
  }
  Top() {
    return this.first[1]
  }
}

setTimeout(sayHi, 1000);
let test = new MyQueue()
test.Push(2)
test.Push(4)
test.Push(15)
console.log(test.isEmpty())
console.log(test.Top())
console.log(test.Pop())
console.log(test)
test.Pop()
console.log(test)
test.Push(144)
console.log(test.Top())