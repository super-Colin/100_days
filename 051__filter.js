// 2/6/2020
// first method of the day!

// https://www.w3schools.com/jsref/jsref_find.asp


const numberArray = [1,5,10,15,20,25,30,35,40,45,50];


function testFilterFunc(){
    document.getElementById('output-text').innerHTML = 'ARRAY TO SEARCH : ' + numberArray;

    document.getElementById('output-text2').innerHTML = 'RESULT : ' + numberArray.filter(x => x > document.getElementById('input-number').value);
}
