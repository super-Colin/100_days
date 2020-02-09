// 12/26/2019
// Working towards a 3d object that will keep spinning

// https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event

const draw_canvas = document.getElementById('draw-me');

draw_canvas.addEventListener('mouseenter', function(event){
    let rect = draw_canvas.getBoundingClientRect();
    console.log(rect.top, rect.left, event.pageX, event.pageY);

    draw_canvas.innerHTML = rect.top + ' ' + rect.left + ' ' + event.pageX + ' ' + event.pageY;

}, false)

draw_canvas.addEventListener('mouseover', function(event){
    draw_canvas.innerHTML = event.pageX + ' ' + event.pageY;

}, false)

//  /Draw Canvas
// -----------------------------------------------


// Drag Canvas
const drag_canvas = document.getElementById('drag-only');
const drag_context = drag_canvas.getContext('2d');
const drag_rect = drag_canvas.getBoundingClientRect();

let drag_drawing = false;
let dragX = 0;
let dragY = 0;


drag_canvas.addEventListener('mousedown', function(event){
    dragX = event.clientX - drag_rect.left;
    dragY = event.clientY - drag_rect.top;
    drag_drawing = true;
}, false);


drag_canvas.addEventListener('mousemove', function(){
    if(drag_drawing == true){
        drag__draw_line(drag_context, dragX, dragY, event.clientX - drag_rect.left, event.clientY - drag_rect.top);
        dragX = event.clientX - drag_rect.left;
        dragY = event.clientY - drag_rect.top;

    }
}, false);



window.addEventListener('mouseup', function(event){
    if(drag_drawing === true){
        drag__draw_line(drag_context, dragX, dragY, event.clientX - drag_rect.left, event.clientY - drag_rect.top);
        dragX = 0;
        dragY = 0;
        drag_drawing = false;
    }
}, false);

function drag__draw_line(context, x1, y1, x2, y2){
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}






//  /Drag Canvas
// -----------------------------------------------


let test = document.getElementById('test');
  
// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener('mouseenter', function( event ) {   
  // highlight the mouseenter target
  event.target.style.color = 'purple';

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = '';
  }, 500);
}, false);

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener('mouseover', function( event ) {   
  // highlight the mouseover target
  event.target.style.color = 'orange';

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = '';
  }, 500);
}, false);