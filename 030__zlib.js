// 1/9/2020
// node is so cool!

const zlib = require('zlib');
const fs = require('fs');


const gzip = zlib.createGzip();

const input = fs.createReadStream('hello.html');
const output = fs.createWriteStream('hello.html.gzip');

input.pipe(gzip).pipe(output); 

