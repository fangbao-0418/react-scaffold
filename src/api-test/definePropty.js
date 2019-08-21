console.log(this, 'definePropty')
var a = {
  b: 0,
  c: []
}
Object.defineProperty(a,  'b', {
  get () {
    return 1
  },
  set (val) {
    console.log(this, val, 'val')
    // a.b = val
    // this.b = val
  }
})
Object.defineProperty(a,  'c', {
  get () {
    return []
  },
  set (val) {
    console.log(this, val, 'val')
    // a.b = val
    // this.b = val
  }
})
a.b = 2
a.c.push(1)
// a.c = [1, 2, 3]
console.log(a, 'a')