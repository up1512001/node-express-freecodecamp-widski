// http module

const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req);
    if(req.url==='/'){
        res.end('hello my name is utsav...');
    }
    if(req.url==='/about'){
        res.end('you are on about page...')
    }
    if(req.url === '/feedback'){
        res.end('you are on feedback page...')
    }
    res.end(
        `<h1>OOPS on wrong page...</h1>
        <a href="/"> HOME </a>
        `
    )
})


server.listen(5000);