// 12/25/2019 X-mas!
// Learning about dragging html elements


// some things worth looking at:
// https://www.w3schools.com/html/html5_draganddrop.asp


function allow_drop(event){
    event.preventDefault();
}

function start_drag(event){
    event.dataTransfer.setData('text', event.target.id);
    // console.log('drag start');
}

function drag_drop(event){
    event.preventDefault();
    let data = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(data))
}