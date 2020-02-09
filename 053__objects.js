// 2/7/2020
// first method of the day!

// https: //medium.com/better-programming/most-useful-javascript-methods-355139f96d75

let dest1 = {aa: 1, bb:2, cc:3};
let source = {dd: 4, ee: 5};
let newVar = Object.assign({}, source);


function testAssign() {
    let stringToInclude = document.getElementById('input-text').value;
    let indexNumber = document.getElementById('input-number').value;
    console.log(typeof stringToInclude);

    document.getElementById('info-text').innerHTML = '';
    document.getElementById('output-text').innerHTML = 'dest1 object : ' + dest1;
    console.log(dest1);
    document.getElementById('output-text2').innerHTML = 'source object : ' + source;
    console.log(source);
    document.getElementById('output-text3').innerHTML = 'RESULT : ' + Object.assign(dest1, source);
    console.log(Object.assign(dest1));

}