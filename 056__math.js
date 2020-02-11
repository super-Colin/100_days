// 2/11/2020
// another method of the day!

// https://websitesetup.org/javascript-cheat-sheet/


function testMathProps() {
    let eul = Math.E;
    let sqrt = Math.SQRT1_2

    document.getElementById('info-text').innerHTML = '' ;
    document.getElementById('output-text').innerHTML = 'E is : ' + eul;
    document.getElementById('output-text2').innerHTML = 'SQRT1_2 is : ' + sqrt;
    
    console.log('---------');
    console.log('Eulers Number is : ');
    console.log(eul);

    document.getElementById('output-text3').innerHTML = 'RESULT : ';
}



function randNum(){
    let num = Math.random()
    document.getElementById('info-text').innerHTML = 'Random Number is : ' + num;
    document.getElementById('output-text').innerHTML = '';
    document.getElementById('output-text2').innerHTML = '';
    return num;
}

function testRound() {
    let num = randNum();
    let result = Math.round(num);
    document.getElementById('output-text3').innerHTML = 'RESULT : ' + result;
}
function testCeil(){
    let num = randNum();
    let result = Math.ceil(num);
    document.getElementById('output-text3').innerHTML = 'RESULT : ' + result;
}
function testFloor() {
    let num = randNum();
    let result = Math.floor(num);
    document.getElementById('output-text3').innerHTML = 'RESULT : ' + result;
}



