// console.log('express running');

const http = require('http');


const server = http.createServer((req,res)=>{
    res.end(`hello utsav...`);
})

server.listen(5000);