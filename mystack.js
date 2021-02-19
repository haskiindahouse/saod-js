class MyStack {
  constructor() {
    this.elem = []
    this.length = 0
  }

  Clear() {
    this.elem = []
    this.length = 0
  }
  isEmpty() {
    /*
        if (this.data.length === 0)
        {
            return true;
        }
        else return false;
         */
    return this.length === 0
  }
  Pop() {
    this.length -= 1
    return this.elem.pop()
  }
  Push(element) {
    this.elem[this.length] = element
    this.length += 1
  }
  Top() {
    return this.elem[this.length - 1]
  }
}
