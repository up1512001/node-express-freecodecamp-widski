// fs module

// sync fs

const {readFileSync,writeFileSync} = require('fs');
// console.log(readFileSync());

// const fs = require('fs');
// fs.readFileSync(); 5th line is also same

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first,second);

writeFileSync('./content/resultSync.txt',`Here is resule ${first} and ${second}`,{flag:'a'});
// third argument is flag='a' for append

console.log(`done with this task`);
console.log(`doing new one`);
