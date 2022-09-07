const {readFile} = require('fs');

console.log(`starting reading using event loop...`);

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(`error : ${err}`);
        return;
    }
    console.log(result);
    console.log(`completed reading...`);
})
console.log(`end of file next is evnt execution`);