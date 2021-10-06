console.log(arguments);
console.log(require('module').wrapper);

// modules export
const C = require('./modulestest');
const calc1 = new C();
console.log(calc1.add(2,554444443));   


