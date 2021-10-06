const fs = require('fs');

setTimeout(() => console.log('Timmer 1 ended'),0);
setTimeout(() =>console.log('Immediate 1 finished'));

fs.readFile('eventloop.txt',() =>{
    console.log('I/O finished');
    console.log('-----------');

    setTimeout(() => console.log('Timmer 2 ended'),0);
    setTimeout(() => console.log('Timmer 3 ended'),3000);
    setTimeout(() =>console.log('Immediate 2 finished'));
});

console.log('Hello from the top level code');