// 2/20/2020
// another method of the day!

// https://websitesetup.org/javascript-cheat-sheet/

function testOnMouseOver() {
    document.getElementById('info-text').innerHTML = '';
    document.getElementById('output-text').innerHTML = '';
    document.getElementById('output-text2').innerHTML = '';
    document.getElementById('output-text3').innerHTML = '';
    alert('The mouse entered the button');
}



function testOnMouseOut() {
    document.getElementById('info-text').innerHTML = '';
    document.getElementById('output-text').innerHTML = '';
    document.getElementById('output-text2').innerHTML = '';
    document.getElementById('output-text3').innerHTML = '';
    alert('The mouse exited the button');
}

function testOnMouseDown() {
    document.getElementById('info-text').innerHTML = '';
    document.getElementById('output-text').innerHTML = '';
    document.getElementById('output-text2').innerHTML = '';
    document.getElementById('output-text3').innerHTML = '';
    alert('Mouse button click initiated');
}

function testOnMouseUp() {
    document.getElementById('info-text').innerHTML = '';
    document.getElementById('output-text').innerHTML = '';
    document.getElementById('output-text2').innerHTML = '';
    document.getElementById('output-text3').innerHTML = '';
    alert('Mouse button released');
}