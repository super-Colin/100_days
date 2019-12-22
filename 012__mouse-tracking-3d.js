// 12/21/2019
// mouse tracking with javascript

document.onmousemove = mouse_tracking;

function mouse_tracking(event){
    let mouseX_display = document.getElementById('mouseX');
    let mouseY_display = document.getElementById('mouseY');
    let centerX_display = document.getElementById('centerX');
    let centerX_to_border_display = document.getElementById('centerX-to-border');
    let centerY_display = document.getElementById('centerY');
    let centerY_to_border_display = document.getElementById('centerY-to-border');
    let in_object_display = document.getElementById('in-object');
    let in_object__state = false;
    let angle_display = document.getElementById('angle');


    function center_coord(x, y){        
        return( ((y - x) / 2) + x );
    }

    let track_object = document.getElementById('track-me');

    let rect = track_object.getBoundingClientRect();
    let object_centerX = center_coord(rect.left, rect.right);
    let object_centerY = center_coord(rect.top, rect.bottom);



    let angle = Math.atan2(  event.pageY - object_centerY  , object_centerX - event.pageX ) * 180 / Math.PI ;

    // if(angle < 0){
    //     angle = Math.abs(angle);
    //     track_object.style.cssText = 'transform: rotateZ(' + Math.round(angle) + 'deg)';
    //     angle_display.innerHTML = 'Angle: ' + (angle);

    // }else{
        // track_object.style.cssText = 'transform: rotateZ(-' + Math.round(angle) + 'deg)';
    //     angle_display.innerHTML = 'Angle: -' + (angle);
    // }






    if( event.pageX > rect.left && event.pageX < rect.right && event.pageY > rect.top + window.scrollY && event.pageY < rect.bottom + window.window.scrollY){
        in_object__state = true;
    }
    in_object_display.innerHTML = 'Inside Box: ' + (in_object__state);

    let from_centerX = event.pageX - object_centerX;
    let from_centerY = object_centerY - event.pageY;
    let rotate_object = document.getElementById('rotate-me');
    // display
    centerX_display.innerHTML = 'From Center X: ' + from_centerX;
    centerY_display.innerHTML = 'From Center Y: ' + from_centerY;

    if( in_object__state == true){

        let incrementX = 15 / Math.abs(rect.left - object_centerX);
        let incrementY = 15 / Math.abs(rect.top - object_centerY);

        if(rotate_object.classList.contains('not-active')){
            rotate_object.style.cssText = 'transition: all 500ms; transform:translateZ(50px);';
            rotate_object.classList.remove('not-active');

        }

        rotate_object.style.cssText = 'transform: translateZ(50px) rotateY(' + (from_centerX * incrementX) + 'deg) rotateX(' + (from_centerY * incrementY) + 'deg);';

    }else{
        rotate_object.classList.add('not-active');
        rotate_object.style.cssText = 'transition: all 500ms;transform: translateZ(0) rotateY(0deg) rotateX(0deg);';
    }




    // display the mouse co-ords
    mouseX_display.innerHTML = 'Mouse X: ' + event.pageX;
    mouseY_display.innerHTML = 'Mouse Y: ' + event.pageY;

    centerX_display.innerHTML = 'From Center X: ' + ( event.pageX - object_centerX );
    centerY_display.innerHTML = 'From Center Y: ' + (object_centerY - event.pageY);

        
}

