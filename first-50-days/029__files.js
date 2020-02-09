// 1/8/2020
// learning some node.js

const fs = require('fs');


// read from a file
// const data = fs.readFileSync('os.js');
// console.log(data.toString());

// this will return a "buffer" so besure to "toString()" it
// console.log(data);


// create a file and write to it:
fs.writeFileSync('newFile.txt', 'this file was made by node.js ;)');
