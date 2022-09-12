const express = require('express');

const {products} = require('./data');

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image};
    })
    // res.json(products);
    res.json(newProducts); 
})

app.get('/api/products/:productID',(req,res)=>{
    // console.log(req.params);
    const {productID} = req.params;
    const singleProduct = products.find((product)=>product.id === Number(productID));    
    
    if(!singleProduct){
        return res.status(404).send('Not Found...');
    }
    
    res.json(singleProduct);
})

app.listen(5000,()=>{
    console.log('hello world 5000 on');
})