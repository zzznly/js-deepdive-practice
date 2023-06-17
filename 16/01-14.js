// 16-01
const o = {};
o.[[Prototype]] // -> Uncaught SyntaxError: Unexpected token '['
o.__proto__ // -> Object.prototype
