// 1/23/2020
// Password generator


// our "alphabet"
const char_set = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}.';

//turn it into an array
const char_array = char_set.split("");
//desired length
const password_length = 10;


//make password
function generate_password(character_set=char_array,desired_length=8){
    let new_password = [];
    let last_rand;
    let i = 0;
    for(i;i<desired_length;i++){
        let rand = Math.floor(Math.random() * Math.floor(character_set.length));
        // make sure the same char isn't repeated twice in a row
        while( rand == last_rand ){
            rand = Math.floor(Math.random() * Math.floor(character_set.length));
        }
        new_password.push(character_set[rand]);
        last_rand = rand;
    }
    return new_password.join('');
}


console.log('Your new password is: ' + generate_password(char_array, 20));