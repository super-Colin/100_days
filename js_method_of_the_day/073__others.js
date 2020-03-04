// 2/27/2020
// another method of the day!

// https://websitesetup.org/javascript-cheat-sheet/

// https://www.w3schools.com/jsref/event_transitionend.asp


let othersP = document.getElementById('othersP');
let othersDiv = document.getElementById('transitionDiv');
let transitionAmount = 0;

// othersDiv.addEventListener('transitionend', ()=>{
//     // othersP.innerHTML = 'transitionend triggered';
//     // othersDiv.styleMedia.backgroundColor = 'pink';
//     othersP.innerHTML = 'transitionend triggered';
//     this.style.backgroundColor = 'red';
//     console.log('tets');
// });

othersDiv.addEventListener('transitionend', testTransitionEnd);

function testTransitionEnd(){
    transitionAmount ++;
    othersP.innerHTML = 'transitionend triggered, ' + transitionAmount + ' times';
    this.style.backgroundColor = 'red';
    // console.log('test' + 'triggered ' + transitionAmount + ' times');
}


