const fs = require('fs');
fs.readFile('./inputdata/data.txt','utf-8', (err, data) => {
    console.log(data);

});