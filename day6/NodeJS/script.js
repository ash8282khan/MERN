const obj = require('./module1');

console.log('hello')

obj.fn1(2,3);
obj.fn2(2,3);
obj.fn1(2,50);
obj.fn2(2,50);
console.log(obj.name);

console.log(obj.fn1);
console.log(obj.fn2);