// 2/25/2020
// another method of the day!

// https://websitesetup.org/javascript-cheat-sheet/

let animationDiv = document.getElementById('animationDiv');
let animationP = document.getElementById('animationP');

animationDiv.addEventListener("animationstart", testOnAnimationStart);
animationDiv.addEventListener("animationiteration", testOnAnimationIteration);
animationDiv.addEventListener('animationend', testOnAnimationEnd);


function startTestAnimation(){
    animationDiv.style.animation = "testAnimation 3s 2"
}

function testOnAnimationStart(){
    animationP.innerHTML = 'animationstart triggered, starting';
}

function testOnAnimationIteration() {
    animationP.innerHTML = 'animationiteration triggered, playing again';
}

function testOnAnimationEnd() {
    animationP.innerHTML = 'animationend triggered, stopping';
}
