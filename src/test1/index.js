console.log('require test')
let m1 = require('./m1')
let m11 = require('./m1')
let m2 = require('./m2')
let m22 = require('./m2')
console.log(m1, 'm1')
m1.a = 444
console.log(m1, 'm1')
console.log(m1, m2, 'index.js')
console.log(m1 === m11, m2 === m22,  'module test')