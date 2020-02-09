// 1/9/2020
// node is so cool!

const crypto = require('crypto');


const algo = 'aes-192-cbc';

const pass = 'password used to generae key';
const key = crypto.scryptSync(pass, 'salt', 24);

const cipher = crypto.createCipher(algo, key);

let encrypted = '';
cipher.on('readable', () => {
    let chunk;
    while (null !== (chunk = cipher.read()) ){
        encrypted += chunk.toString('hex');
    }
});
cipher.on('end', () => console.log(encrypted) );

cipher.write('some clear text data');
cipher.end();