const express = require('express');
const app = express();
let {people} = require('./data');

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended:false}))


app.use(express.json()); 
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.post('/api/people',(req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:'enter name value'})
    }
    res.status(201).json({success:true,person:name});
})

app.post('/login',(req,res)=>{
    // console.log(req.body);
    const {name} = req.body
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Enter name')
})

app.listen(5000,()=>{
    console.log('5000 listning...');
})