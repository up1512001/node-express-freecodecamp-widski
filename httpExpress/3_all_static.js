const express = require('express');

const app = express();

const path = require('path');


// static and middleware 
app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

app.all('*',(req,res)=>{
    res.status(404).send('<h1>Not Found</h1>')
})

app.listen(5000,()=>{    
    console.log('server is on port 5000');
});