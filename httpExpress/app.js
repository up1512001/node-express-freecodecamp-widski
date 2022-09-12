const express = require('express');
const logger = require('./logger');
const authorize = require('./authorize');

const app = express();
// order matters for logger 
// all above will not get middleware only below will get
// app.use(logger); // applies to all path
// app.use('/api',logger) // applies to api/*


// app.use([logger,authorize])  // executed in order


app.use(express.static('./public'))


app.get('/',(req,res)=>{

    res.send('Home Page');
})
app.get('/about',(req,res)=>{
    res.send('About Page');
})
app.get('/api/products',(req,res)=>{

    res.send('Products');
})
app.get('/api/items',[logger,authorize],(req,res)=>{
    console.log(req.user);
    res.send('Items Page');
})

app.listen(5000,()=>{
    console.log('listning on port 5000');
})