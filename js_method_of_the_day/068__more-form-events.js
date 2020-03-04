// 2/23/2020
// another method of the day!

// https://websitesetup.org/javascript-cheat-sheet/

// https://www.w3schools.com/jsref/event_onchange.asp

function testOnFocus(elem){
    elem.style.background = 'yellow';
}

function testOnInput(elem){
    let p = document.getElementById('oninputP');
    p.innerHTML = 'onchange input value:' + elem.value;
}
