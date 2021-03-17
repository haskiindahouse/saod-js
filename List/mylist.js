class MyListNode{
  constructor() {
    this.Next = null
    this.Prev = null
    this.Value = null
  }
}
class MyList{
  constructor() {
    this.First = new MyListNode()
  }
  AddEnd(value){
    if (this.First == null){
      this.First = new MyListNode()
      this.First.Value = value
    }
    else{
      let lastNode = new MyListNode()
      lastNode.Value = value
      let tmp = this.Count()
      tmp[1].Next = lastNode
      lastNode.Prev = tmp[1]
    }
  }
  AddBegin(value){
    if (this.First == null){
      this.First = new MyListNode()
      this.First.Value = value
    }
    else{
      let firstNode = new MyListNode()
      firstNode.Value = value
      let tmp = this.First
      tmp.Prev = firstNode
      firstNode.Next = tmp
      this.First = firstNode
    }
  }
  Insert(value, index){
    if (this.First == null){
      this.First = new MyListNode()
      this.First.Value = value
    }
    else
    {
      let insertNode = new MyListNode()
      insertNode.Value = value
      if (index === 1){
        return this.AddBegin(value)
      }
      if (index === this.Count()[0]){
        return this.AddEnd(value)
      }
      let k = 1
      let step = this.First
      while (step.Next != null  && k !== index){
        k++
        step = step.Next
      }
      if (step.Next == null && k !== index){
        return alert('Такого элемента не существует!')
      }
      if (k === index){
        insertNode.Next = step
        insertNode.Prev = step.Prev
        step.Prev.Next = insertNode
        step.Prev = insertNode
      }
    }
  }
  Count() {
    let k = 1
    let step = this.First
    if (step.Value == null){
      return 0
    }
    while (step.Next != null){
      k++
      step = step.Next
    }
    return [k, step]
  }
  ToString(){
    let string = ""
    let k = 1
    let step = this.First
    string += "Index: " + k + " Value: " + step.Value + " "
    while (step.Next != null){
      k++
      step = step.Next
      string += "Index: " + k + " Value: " + step.Value + " "
    }
    return string
  }
  GetIndexByValue(value){
    let k = 1
    let step = this.First
    let result = new MyList()
    result.First.Value = null
    while(step.Next != null){
      if (step.Value === value){
        result.AddBegin(k)
      }
      k++
      step = step.Next
    }
    return result
  }
  GetByIndex(index){
    let k = 1
    let step = this.First
    while (step.Next != null && k !== index){
      k++
      step = step.Next
    }
    if (step.Next == null && k !== index){
      return alert('Такого элемента не существует!')
    }
    if (k === index){
      return step
    }
  }
  RemoveByIndex(index){
    let k = 1
    let step = this.First
    while (step.Next != null && k !== index){
      k++
      step = step.Next
    }
    if (step.Next == null && k !== index){
      return alert('!Такого элемента не существует!')
    }
    let c = this.Count()
    if (k === index && index !== c[0] && index !== 1){
      step.Prev.Next = step.Next
      step.Next.Prev = step.Prev
    }
    if (index === c[0]){
      step.Prev.Next = null
    }
    if (index === 1){
      this.First = step.Next
    }
  }
  Clear(){
    this.First = null
  }
}
