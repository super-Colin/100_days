// 2/9/2020
// another method of the day!

// https: //websitesetup.org/javascript-cheat-sheet/

// eval() is extremely dangerous, use it with caution.. if ever!

function testEval() {
    let inputString = document.getElementById('input-text').value;
    let inputNumber = document.getElementById('input-number').value;


    document.getElementById('info-text').innerHTML = '';
    document.getElementById('output-text').innerHTML = 'output-text : ';
    document.getElementById('output-text2').innerHTML = 'output-text2 : ';
    
    console.log('---------');
    console.log(eval(inputString));
    // if(inputString == eval(inputString)).... things break

    document.getElementById('output-text3').innerHTML = 'RESULT : ';
}