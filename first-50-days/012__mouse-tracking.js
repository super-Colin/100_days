// 12/21/2019
// basic mouse tracking with javascript

document.onmousemove = mouse_tracking;

function mouse_tracking(event){
    let mouseX_display = document.getElementById('mouseX');
    let mouseY_display = document.getElementById('mouseY');
    let centerX_display = document.getElementById('centerX');
    let centerY_display = document.getElementById('centerY');
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

    // console.log( rect.left, rect.right, rect.top, rect.bottom);
    // console.log(object_centerX, object_centerY);



    // display the mouse co-ords
    mouseX_display.innerHTML = 'Mouse X: ' + event.pageX;
    mouseY_display.innerHTML = 'Mouse Y: ' + event.pageY;

    centerX_display.innerHTML = 'From Center X: ' + ( event.pageX - object_centerX );
    centerY_display.innerHTML = 'From Center Y: ' + (object_centerY - event.pageY);

    if( event.pageX > rect.left && event.pageX < rect.right && event.pageY > rect.top && event.pageY < rect.bottom){
        in_object__state = true;
    }
    
    in_object_display.innerHTML = 'Inside Box: ' + (in_object__state);

    // let angle = Math.atan( (( event.pageX - object_centerX ) / (object_centerY - event.pageY)) );
    let angle = Math.atan2(  event.pageY - object_centerY  , object_centerX - event.pageX ) * 180 / Math.PI ;

    if(angle < 0){
        // angle = Math.abs(angle);
        // if( angle > 90 ){
        //     angle = angle + 90;
        // } else {
        //     angle = Math.abs(angle) - 180;
        // }

        // angle = Math.abs(angle);
        // angle =  (angle + 360);


        angle = Math.abs(angle);
        track_object.style.cssText = 'transform: rotateZ(' + Math.round(angle) + 'deg)';
        angle_display.innerHTML = 'Angle: ' + (angle);

    }else{
        track_object.style.cssText = 'transform: rotateZ(-' + Math.round(angle) + 'deg)';
        angle_display.innerHTML = 'Angle: -' + (angle);
    }

    // angle_display.innerHTML = 'Angle: ' + (angle);
    // track_object.style.cssText = 'transform: rotateZ(' + Math.round(angle) + 'deg)';



    // dot = document.createElement('div');
    // dot.className = 'dot';
    // dot.style.left = object_centerX + 'px';
    // dot.style.top = object_centerY + 'px';
    // document.body.appendChild(dot);


}

