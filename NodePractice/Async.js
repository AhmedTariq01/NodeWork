const fs = require('fs');
fs.readFile('./inputdata/start.txt','utf-8', (err, data1) => {
    fs.readFile(`./inputdata/${data1}.txt`,'utf-8', (err, data2) => {
    console.log(data2);
     });
});
console.log('Reading two files now: ');