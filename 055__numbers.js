// 2/10/2020
// another method of the day!

// https://websitesetup.org/javascript-cheat-sheet/


function testNumProps() {

    document.getElementById('info-text').innerHTML = '' ;
    document.getElementById('output-text').innerHTML = 'MIN_VALUE is : ' + Number.MIN_VALUE;
    document.getElementById('output-text2').innerHTML = 'MAX_VALUE is : ' + Number.MAX_VALUE;
    
    console.log('---------');
    console.log('MAX_VALUE is : ');
    console.log(Number.MAX_VALUE);
    // if(inputString == eval(inputString)).... things break

    document.getElementById('output-text3').innerHTML = 'RESULT : These are the largest and smallest positive numeric values representable in JavaScript';
}


// THESE INFINITY "NUMBERS" SEEM TO BE TYPES OF THEIR OWN
function testInfinityProps() {

    document.getElementById('info-text').innerHTML = '' ;
    document.getElementById('output-text').innerHTML = 'NEGATIVE_INFINITY is : ' + Number.NEGATIVE_INFINITY;
    document.getElementById('output-text2').innerHTML = 'POSITIVE_INFINITY is : ' + Number.POSITIVE_INFINITY;
    
    console.log('---------');
    console.log('NEGATIVE_INFINITY is : ');
    console.log(Number.NEGATIVE_INFINITY);
    // if(inputString == eval(inputString)).... things break

    document.getElementById('output-text3').innerHTML = 'RESULT : These are the largest and smallest positive numeric values representable in JavaScript';
}