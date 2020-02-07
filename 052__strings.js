// 2/7/2020
// first method of the day!

// https://www.w3schools.com/jsref/jsref_find.asp


// const numberArray = [1,5,10,15,20,25,30,35,40,45,50];
const wordArray = [
    'More of a sentence',
    'word',
    'another',
    'something',
    'anything',
    'bee'
]

    document.getElementById('output-text').innerHTML = 'ARRAY TO SEARCH : ' + wordArray[0];

function testStartsWith(){
    let startsWithLetter = document.getElementById('input-text').value;
    let indexNumber = document.getElementById('input-number').value;
    console.log(startsWithLetter);

    document.getElementById('info-text').innerHTML = 'ARRAY TO SEARCH : ' + wordArray;
    document.getElementById('output-text').innerHTML = 'STRING TO SEARCH : ' + wordArray[indexNumber];
    document.getElementById('output-text2').innerHTML = 'LOOKING FOR : ' + startsWithLetter;

    document.getElementById('output-text3').innerHTML = 'RESULT : ' + wordArray[indexNumber].startsWith(startsWithLetter);
}


function testIncludes() {
    let stringToInclude = document.getElementById('input-text').value;
    let indexNumber = document.getElementById('input-number').value;
    console.log(typeof stringToInclude);

    document.getElementById('info-text').innerHTML = 'ARRAY TO SEARCH : ' + wordArray;
    document.getElementById('output-text').innerHTML = 'STRING TO SEARCH : ' + wordArray[indexNumber];
    document.getElementById('output-text2').innerHTML = 'LOOKING FOR : ' + stringToInclude;

    document.getElementById('output-text3').innerHTML = 'RESULT : ' + wordArray[indexNumber].includes(stringToInclude);
}