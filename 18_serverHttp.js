// two times req comming one from / and /favicon.ico

const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(`request event : ${req.url}`);
    res.end(`hello world mr.Patel`)
})

server.listen(5000,()=>{
    console.log(`server is listening on port : 5000....`);
})