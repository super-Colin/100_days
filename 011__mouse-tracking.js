// 12/21/2019
// basic mouse tracking with javascript

document.onmousemove = mouse_tracking;

function mouse_tracking(event){
    let mouseX_display = document.getElementById('mouseX');
    let mouseY_display = document.getElementById('mouseY');
    // console.log(event.pageX);
    mouseX_display.innerHTML = 'Mouse X: ' + event.pageX;
    mouseY_display.innerHTML = 'Mouse Y: ' + event.pageY;

}