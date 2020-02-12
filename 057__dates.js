// 2/12/2020
// another method of the day!

// https://websitesetup.org/javascript-cheat-sheet/


function testDateProps() {
    let newDate = Date();

    document.getElementById('info-text').innerHTML = '' ;
    document.getElementById('output-text').innerHTML = 'new Date is : ' + newDate;
    document.getElementById('output-text2').innerHTML = ' is : ';
    
    console.log('---------');
    console.log('new Date is : ');
    console.log(newDate);
    document.getElementById('output-text3').innerHTML = 'RESULT : ';
}



function testStringDate(){
    let string = document.getElementById('input-text').value;
    console.log(string)
    let newDate = Date(string)
    document.getElementById('info-text').innerHTML = 'string to make date from : ' + string;
    document.getElementById('output-text').innerHTML = 'new Date is : ' + newDate;
    document.getElementById('output-text2').innerHTML = '';
    document.getElementById('output-text3').innerHTML = 'Sample string for a new date "2017-06-23"';
    console.log(newDate);
}

function testParseDate(){
    let string = document.getElementById('input-text').value;
    console.log(string);
    let newDate = Date(string);
    let unixDate = Date.parse(newDate);

    document.getElementById('info-text').innerHTML = 'string to make date from : ' + string;
    document.getElementById('output-text').innerHTML = 'new Date is : ' + newDate;
    document.getElementById('output-text2').innerHTML = 'Unix Parsed Date is : ' + unixDate;
    document.getElementById('output-text3').innerHTML = 'Sample string for a new date "2017-06-23"';
    console.log(newDate);
    console.log('Parsed Date is : ' + unixDate);
}



