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
let stack = new MyStack()

let checker = new MyStack()
let oppBrackets = ['(', '[', '{']
let clsBrackets = [')', ']', '}']
for(let i = 0; i < stack.length; i++){
  console.log(stack.elem[i])
  if (oppBrackets.includes(stack.elem[i])){
    checker.Push(stack.elem[i])
  }
  if (clsBrackets.includes(stack.elem[i])){
    if (checker.length){
      if (oppBrackets.indexOf(checker.Top()) === clsBrackets.indexOf(stack.elem[i])){
        checker.Pop()
      }
    }
    else{
        console.log("Wrong brackets!")
    }
  }
}
if (checker.length == 0){
   console.log("Right brackets!")
}
else{
  console.log("Wrong brackets!")
}