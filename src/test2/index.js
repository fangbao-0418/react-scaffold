var obj1 = {
  a: 'obj1'
}
var obj2 = {
  a: 'obj2'
}
function f1 () {
  console.log(this, 'f1')
}
var f11 = f1.bind(obj2)
f1.call(obj1)
f11.call(obj1)
class A {
  constructor (props) {
    console.log(props, this, 'A')
  }
}
var B = A.bind(obj1)
var a = new B()
console.log(a, 'a')