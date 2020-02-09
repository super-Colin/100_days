// 12/27/2019
// Working towards a 3d object that will keep spinning


// Ahead of time, all arrays will be in [x, y] form or [x1, x2, y1, y2,]
// define our element constants
const drag_div = document.getElementById('drag-only');
const draggable = document.getElementById('draggable');
let draggable_rect = draggable.getBoundingClientRect();

// vars we'll use later
let drag_moving = false;
let dragX__old = 0;
let dragY__old = 0;
let dragX__new = 0;
let dragY__new = 0;
let distanceX = 0;
let distanceY = 0;

function distanceToCenter( clientRect ){
  let centerX = ( clientRect.right - clientRect.left) / 2 ;
  let centerY = ( clientRect.bottom - clientRect.top ) / 2;
  return [centerX, centerY]
}

// add event listeners
drag_div.addEventListener('mousedown', function (ev) {

  drag_rect = drag_div.getBoundingClientRect();
  draggable_rect = draggable.getBoundingClientRect();

  //if the mousedown was inside the draggable object
  if( ev.pageX > draggable_rect.left + window.scrollX && ev.pageX < draggable_rect.right + window.scrollX && ev.pageY > draggable_rect.top + window.scrollY && ev.pageY < draggable_rect.bottom + window.scrollY ){

    drag_moving = true;
    console.log(draggable_rect);
    console.log(ev.pageX, + ' ' + ev.pageY);
    console.log('moving is true');
  }

}, false);




drag_div.addEventListener('mousemove', function (ev) {

  if (drag_moving == true) {
    
    // update global vars
    drag_rect = drag_div.getBoundingClientRect();
    dragX__old = dragX__new;
    dragY__old = dragY__new;
    dragX__new = ev.pageX;
    dragY__new = ev.pageY;

    draggable_rect = draggable.getBoundingClientRect();

    distanceX = (ev.pageX - drag_rect.left) - distanceToCenter(draggable_rect)[0];
    distanceY = (ev.pageY - drag_rect.top) - distanceToCenter(draggable_rect)[1];
    

    // add the styles
    draggable.style.cssText = 'left:' + distanceX + 'px; top:' + distanceY + 'px;';

  }
}, false);



window.addEventListener('mouseup', function () {
  if (drag_moving === true) {

    drag_moving = false;

    let traveled = [dragX__new - dragX__old, dragY__new - dragY__old];
    let toMinus = [traveled[0] / 10, traveled[1] / 10];
    console.log(traveled, toMinus);

    // for(i=0; i<200; i++){
    //   distanceX = distanceX + toMinus[0];
    //   distanceY = distanceY + toMinus[1];
    //   draggable.style.cssText = 'left:' + distanceX  + 'px; top:' + distanceY + 'px;';
    // }

  }
}, false);
