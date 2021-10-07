const EventEmitter = require('events');

const myEmitter = new EventEmitter();

class NewSale extends EventEmitter {
    constructor() {
        super();
    }
}

myEmitter.on('NewSale', () =>{
    console.log('There was a new sale!');
});

myEmitter.on('NewSale', () =>{
    console.log('Customer name: Ahmed');
});

myEmitter.on('NewSale', stock => {
    console.log(`There are now ${stock} items left in the stock`);
});

myEmitter.emit('NewSale', 9);

console.log('Creating a web Server');

const http = require('http');

const server1 = http.createServer((req, res) => {
    res.end('Hello from the server');
})

server1.listen(8000, '127.0.0.1', () =>{
    console.log('Server listening on port 8000');
});


// Another way pf creating a server

// const server2 = http.createServer();

// server2.on('request' ,(res,req) =>{
//     console.log('Server created');
//     res.end('Hello from the server2');
// });

// server2.listen(8000, '127.0.0.1', () =>{
//     console.log('Waiting for server');
// });