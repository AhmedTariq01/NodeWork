const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

setTimeout(() => console.log('Timmer 1 ended'),0);
setTimeout(() =>console.log('Immediate 1 finished'));

fs.readFile('eventloop.txt',() =>{
    console.log('I/O finished');
    console.log('-----------');

    setTimeout(() => console.log('Timmer 2 ended'),0);
    setTimeout(() => console.log('Timmer 3 ended'),3000);
    setTimeout(() =>console.log('Immediate 2 finished'));

    process.nextTick(() => console.log('Process.nextTick'));

    crypto.pbkdf2('password','salt', 1000, 1024, 'sha512', () =>{
        console.log(Date.now() - start, 'Password Encrypted');
    });
});

console.log('Hello from the top level code');