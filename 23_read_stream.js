// streams 

// readstrem

// file creation big.txt
// const {writeFileSync} = require('fs');

// for(let i=0;i<10000;i++){
//     writeFileSync('./content/big.txt',`hello from ${i}\n`,{flag:'a'},);
// }


const { createReadStream} = require('fs');


const stream = createReadStream('./content/big.txt',{highWaterMark:90000,encoding:'utf-8'});
// default readstream reads 64Kb data we can change using highWaterMark property

stream.on('data',(result)=>{
    console.log(result);
})

stream.on('error',(error)=>{
    console.log(error); 
})