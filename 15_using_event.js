console.log(`starting...`);
console.time();
setTimeout(()=>{
    console.log(`set timeout finished`);
},0)
console.timeEnd();
console.log(`end...`)