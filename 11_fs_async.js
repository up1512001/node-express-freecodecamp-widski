// fs module

// async fs

const {readFile,writeFile} = require('fs');

// readFile('./content/first.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log('error appear');
//     }else{
//         console.log(`resule : ${result}`);
//     }
// })
console.log(`starting async`);
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log('error appear');
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(`error appear ${err}`);
            return;;
        }
        const second = result;
        writeFile('./content/resultAsync.txt',`here's async result : ${first} and ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(`done with reading`);
        })
    })
})
console.log(`staring next task`);