// 2/26/2020
// another method of the day!

// https://websitesetup.org/javascript-cheat-sheet/


function testOnDragStart(event){
    event.dataTransfer.setData('Text', event.target.id);
}

function testOnDragOver(event){
    event.preventDefault();
}

function testOnDrop(event){
    event.preventDefault();
    let data = event.dataTransfer.getData('Text');
    event.target.appendChild(document.getElementById(data));
}
