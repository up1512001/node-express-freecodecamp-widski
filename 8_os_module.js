//  os module

const os = require('os');

// info about user
console.log(os.userInfo());

// system uptime
console.log(os.uptime());

// current os 
console.log(os.release());

// total and free memory
console.log(os.freemem(),os.totalmem());

// os type
console.log(os.type());
