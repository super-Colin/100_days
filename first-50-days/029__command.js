// 1/8/2020
// learning some node.js

// this will take arguments (numbers) in the command line and add them together
const args = process.argv.slice(2);
const sum = args.reduce((acc,val) => acc + parseInt(val), 0);
console.log(sum);