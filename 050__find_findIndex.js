// 2/5/2020
// first method of the day!

// https://www.w3schools.com/jsref/jsref_find.asp


let inputText;
let inputNumber;
// console.log('text value is ' + inputText);
// console.log('number is ' + inputNumber);

let infoTextElement = document.getElementById('info-text');
let infoTextElement2 = document.getElementById('info-text2');

let outputTextElement = document.getElementById('output-text');
let outputTextElement2 = document.getElementById('output-text2');

function updateValues(){
    inputText = document.getElementById('input-text').value;
    inputNumber = document.getElementById('input-number').value;
    console.log('New text value is ' + inputText);
    console.log('New number is ' + inputNumber);
}

const numberArray = [1,5,10,15,20,25,30,35,40,45,50];

const demoArray = [
    'Apples',
    'Banana',
    'Pear',
    1,
    20,
    55,
    101,
    // 'Something',
    // ['Nested Array', 'Nested Array Again'],
    // {type: 'object', value: 'key', number: 2},
    // true,
    // false
];


function checkNumbers(number) {
    console.log('------------------------------');
    console.log('type of input number : ' + typeof(number) + '; original value : ' + number);
    let newNumber = parseInt(number);
    console.log('type of new number : ' + typeof(newnumber));
    
    if(typeof(newnumber) == 'number' ){
        console.log('newNumber is type number');
        return newnumber >= inputNumber;
    } else {
        console.log('Number ' + number + ' did not pass');
    }
}

function findNumber(number) {
    return number > 18;
}



// display the array to search
// outputTextElement.innerHTML = 'ARRAY TO SEARCH : ' + demoArray;
// display result
// outputTextElement2.innerHTML = 'RESULT : ' + demoArray.find(checkNumbers())

function testFunc(){
    updateValues();
    outputTextElement.innerHTML = 'ARRAY TO SEARCH : ' + demoArray;

    outputTextElement2.innerHTML = 'RESULT : ' + demoArray.find(checkNumbers)
}

function testFunc2() {
    updateValues();
    outputTextElement.innerHTML = 'ARRAY TO SEARCH : ' + numberArray;

    outputTextElement2.innerHTML = 'RESULT : ' + numberArray.find(findNumber)
}