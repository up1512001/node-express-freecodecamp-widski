// Events 

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',(name,age)=>{
    console.log(`data received ${name} and ${age}`);
})


customEmitter.on('response',()=>{
    console.log(`somthing other`);
})

customEmitter.emit('response','utsav',21);


// we need to first listen for event then we can emit it means oder of statements matter