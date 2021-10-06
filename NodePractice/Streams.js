const fs = require('fs');
const server = require('http').createServer();

// reading file 
server.on('request',(req, res) => {

    // solution 1
    // fs.readFile('./inputdata/data.txt', (err,data) => {
    //     if (err) console.log('Error reading data');
    //     res.end(data);
    // });

    // now by using stream server

    // const readable = fs.createReadStream('./inputdata/data.txt');
    // readable.on('data', chunk => {
    //     res.write(chunk);
    // });
    // readable.on('end', () => {
    //     res.end(); 
    // });
    // readable.on('error', err =>{
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end('File not found');
    // });

    //  Solution 3

    const readable = fs.createReadStream('./inputdata/data.txt');
    readable.pipe(res);
    readable.on('error', err =>{
        console.log(err);
        res.statusCode = 500;
        res.end('File not found');
    });

});

server.listen(8000, '127.0.0.1', () =>{
    console.log('Server listening');
});


