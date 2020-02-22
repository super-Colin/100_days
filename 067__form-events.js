// 2/22/2020
// another method of the day!

// https://websitesetup.org/javascript-cheat-sheet/

// https://www.w3schools.com/jsref/event_onchange.asp

function testOnBlur(){
    let blured = document.getElementById('onblur');
    blured.value = blured.value.toUpperCase();
}

function testOnChange(){
    console.log('onchange fired');
    document.getElementById('onchangeP').innerHTML = document.getElementById('onchange').value;
}
