const fs = require('fs');
fs.readFile('./inputdata/start.txt','utf-8', (err, data1) => {
    fs.readFile(`./inputdata/${data1}.txt`,'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./inputdata/input2.txt','utf-8', (err, data3) => {
            console.log(data3);
            fs.writeFile('./inputdata/write.txt',`${data1}\n${data2}\n${data3}`,'utf-8', err => {
                console.log('Files has been written successfully');
            });
        });
    });
});
console.log('Reading two files now: ');