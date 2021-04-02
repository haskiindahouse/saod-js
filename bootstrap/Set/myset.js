class MySet{
  constructor() {
   this.list = []
  }
  Count(){
    return this.list.length
  }
  Add(item){
    let flag = true
    for (let i = 0; i < this.Count(); i++){
      if (item === this.list[i]){
        flag = false
        break
      }
    }
    if (flag){
      this.list.push(item)
    }
  }
  Remove(item){
    for (let i = 0; i < this.Count(); i++){
      if (item === this.list[i]){
        this.list.splice(i, 1)
        break
      }
    }
  }
  static Difference(s1, s2){
    let a = []
    let diff = new MySet()
    for (let i = 0; i < s1.Count(); i++){
      a[s1.list[i]] = true
    }
    for (let i = 0; i < s2.Count(); i++){
      if (a[s2.list[i]]){
        delete  a[s2.list[i]]
      }
      else{
        a[s2.list[i]] = true
      }
    }
    for (let el in a){
      diff.Add(String(el))
    }
    return diff
  }
  static Union(s1, s2){
    let union = new MySet()
    for (let i = 0; i < s1.Count(); i++){
      union.Add(String(s1.list[i]))
    }
    for(let i = 0; i < s2.Count(); i++){
      union.Add(String(s2.list[i]))
    }
    return union
  }
  static Intersection(s1, s2) {
    let diff = MySet.Difference(s1, s2)
    let union = MySet.Union(s1, s2)
    for (let i = 0; i < diff.Count(); i++){
      if (union.list.includes(diff.list[i])){
        union.Remove(diff.list[i])
      }
    }
    return union
  }
  static Subset(s1, s2){
    // проверяем является ли множество s2 подмножеством s1
    if (s2.Count() > s1.Count()){
      return false
    }
    else{
      for (let i = 0; i < s2.Count(); i++){
        if (!s1.list.includes(s2.list[i])){
          return false
        }
      }
      return true
    }
  }
  Shuffle(){
    for (let i = 0; i < this.Count(); i++){
      let position = Math.floor(Math.random() * Math.floor(this.Count()))
      let tmp = this.list[position]
      this.list[position] = this.list[i]
      this.list[i] = tmp
    }
  }
}