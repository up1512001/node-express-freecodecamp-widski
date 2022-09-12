const express = require('express');

const app = express();

const {products,people} = require('./data');

// app.get('/',(req,res)=>{
//     res.json([{name:'utsav'},{name : 'patel'}])
// })

app.get('/',(req,res)=>{
    res.json(products);
})
app.get('/api',(req,res)=>{
    res.json(people);
})

app.listen(5000,()=>{
    console.log('listining on port 5000');
})