// path module

const path = require('path')

console.log(path);

// path seperator
console.log(path.sep);


const filePath = path.join('/content','subContent','temp.txt');
console.log(filePath);

// base name
console.log(path.basename(filePath));

// absolute path
const absPath = path.resolve(__dirname,'content','subContent','temp.txt');
console.log(absPath);