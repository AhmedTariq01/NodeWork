const http = require('http');
const url = require('url');

const server = http.createServer((req, res) =>{
    // console.log(req.url);
    const PathName =req.url;
    if(PathName === '/' || PathName === '/overview'){
        res.end('This is the overview');
    }else if(PathName === '/Product'){
        res.end('This is the product');
    }else{
        res.writeHead(404,{
             'Content-Type': 'text/html',
             'my-own-header': 'Hello world'
        });
        res.end('<h1>Page not found!</h1>');
    }


    res.end('Creating a server...');
})

server.listen(8000, '127.0.0.1', () =>{
    console.log('Server listening on port 8000');
});
