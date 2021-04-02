describe("difference", function() {
  let test1 = new MySet()
  test1.Add(1)
  let test2 = new MySet()
  test2.Add(1)
  test2.Add(2)
  let result = "2"
  it("позволяет посмотреть разницу между двумя множествами: " + test1.list + " И " + test2.list + " Результат: " + result, function() {
    assert.equal(diff(test1, test2), result);
  });
});
describe("onion", function() {
  let test1 = new MySet()
  test1.Add(1)
  let test2 = new MySet()
  test2.Add(2)
  let result = "1,2"
  it("позволяет объединить два множества: " + test1.list + " И " + test2.list + " Результат: " + result, function() {
    assert.equal(onion(test1, test2), result);
  });
});
describe("intersection", function() {
  let test1 = new MySet()
  test1.Add(1)
  let test2 = new MySet()
  test1.Add(2)
  test2.Add(1)
  let result = "1"
  it("пересечение множеств A =" + test1.list + " B = " + test2.list + " Результат: " + result, function() {
    assert.equal(intersec(test1, test2), "1");
  });
});
describe("subset", function() {
  let test1 = new MySet()
  test1.Add(1)
  let test2 = new MySet()
  test1.Add(2)
  test2.Add(1)
  let result = true 
  it("проверяем является ли множество" + test1.list + " подмножеством " + test2.list + " result: " + result, function() {
    assert.equal(subset(test1, test2), result);
  });
});
