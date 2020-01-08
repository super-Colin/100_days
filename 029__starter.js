// 1/8/2020
// learning some node.js

function get_user(){
    if(process.env.USER === undefined){
        return process.env.USERNAME;
    }else{
        return process.env.USER;
    }
}


const name = get_user();

console.log(`hello ${name}`)

