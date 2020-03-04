// 2/27/2020
// another method of the day!

// https://websitesetup.org/javascript-cheat-sheet/

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondrag


let draggingP2 = document.getElementById('draggingP2');

// ------------------
function testOnDragStart2(event){ event.dataTransfer.setData('Text', event.target.id); 
draggingP2.innerHTML = 'ondragStart was triggered'
}
function testOnDragOver2(event){ event.preventDefault(); }
function testOnDrop2(event){
    event.preventDefault();
    let data = event.dataTransfer.getData('Text');
    event.target.appendChild(document.getElementById(data));
}
// ------------------------
function testOnDrag2(){
    draggingP2.innerHTML = 'ondrag was triggered';
}

function testOnDragEnd2() {
    draggingP2.innerHTML = 'ondragEnd was triggered';
    
}

function testOnDragEnter2() {
    draggingP2.innerHTML = 'ondragEnter was triggered';
}

function testOnDragLeave2() {
    draggingP2.innerHTML = 'ondragLeave was triggered';
}