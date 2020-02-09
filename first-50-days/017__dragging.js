// 12/27/2019
// Working towards a 3d object that will keep spinning

// https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
// https://jsbin.com/gejuz/1/edit?html,output

// Drag div

const drag_div = document.getElementById('drag-only');
let drag_rect = drag_div.getBoundingClientRect();

let drag_drawing = false;
let dragX = 0;
let dragY = 0;


drag_div.addEventListener('mousedown', function (event) {
  drag_rect = drag_div.getBoundingClientRect();
  dragX = event.clientX - drag_rect.left;
  dragY = (event.clientY + window.scrollY) - drag_rect.top;
  drag_drawing = true;
}, false);


drag_div.addEventListener('mousemove', function () {
  if (drag_drawing == true) {
    dragX = event.clientX - drag_rect.left;
    dragY = event.clientY - drag_rect.top;

    // Add a dot
    console.log('adding a dot');
    let dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.left = dragX + 'px';
    dot.style.top = dragY + 'px';
    drag_div.appendChild(dot);


  }
}, false);



window.addEventListener('mouseup', function (event) {
  if (drag_drawing === true) {
    dragX = 0;
    dragY = 0;
    drag_drawing = false;
  }
}, false);


//  /Drag div
// -----------------------------------------------