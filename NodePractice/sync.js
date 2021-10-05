const fs = require('fs');

// const hello = 'hello world';
// console.log(hello);

const text = fs.readFileSync('./inputdata/data.txt', 'utf-8');

const textOut = 'Weiting in the file: ${text}.\nCreated on ${Date.now()}';
fs.writeFileSync('./inputdata/data.txt', textout)
console.log('FIle written');
console.log(text);
