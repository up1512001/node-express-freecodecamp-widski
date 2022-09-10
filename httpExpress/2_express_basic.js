const express = require('express');

const app = express();

// app.get
// app.post
// app.delete
// app.put
// app.listen
// app.all
// app.use  middleware 

app.get('/',(req,res)=>{
    console.log('user hit /');
    res.send('home')
})

app.get('/about',(req,res)=>{
    console.log('user hitt /about');
    res.send('about')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>404 Error</h1>')
})

app.listen(5000,()=>{    
    console.log('server is on port 5000');
});