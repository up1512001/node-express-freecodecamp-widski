
const http = require('http');

const {readFileSync} = require('fs');

const homePage = readFileSync('./navbar_app/index.html')
const homeStyles = readFileSync('./navbar_app/styles.css')
const homebrowserApp = readFileSync('./navbar_app/browser-app.js')
const homeLogo = readFileSync('./navbar_app/logo.svg')


const server = http.createServer((req,res)=>{
    // console.log('using 5000 port');
    // console.log(req);
    // console.log(req.method);
    // console.log(req.url);

    const url = req.url;
    console.log(url);
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage);
        res.end();
    }else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>');
        res.end();
    }else if(url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles);
        res.end();
    }else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homebrowserApp);
        res.end();
    }else if(url === '/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeLogo);
        res.end();
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>404 Error</h1>');
        res.end();
    }

})

server.listen(5000);