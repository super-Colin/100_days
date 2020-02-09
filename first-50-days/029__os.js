// 1/8/2020
// learning some node.js

const os = require('os');

// all sorts of stuff:
console.log(process.env)
console.log(os.userInfo());
console.log(os.platform());
console.log(os.cpus());

console.log(__dirname);
console.log(__filename);


// create an process.env with node 
// export database_password = 123;
// but the point of that is to keep sensitive things out of codebase