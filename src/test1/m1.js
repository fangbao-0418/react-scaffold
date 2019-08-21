var a = 1
console.log(a, 'm1')
setTimeout(() => {
  console.log(a, 'm1') 
}, 2000)
module.exports = { a: a }

