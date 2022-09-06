// npm - global command
// npm --version or npm -v

// local dependency installation
// npm i dep_name or npm install dep_name

// global installation of dependency
// npm install -g dep_name or sudo npm install -g dep_name

// to install package we need package.json file
// in node we can do node init
// or node init -y (default value for all things)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(items,newItems);