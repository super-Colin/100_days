// 12/23/2019
// more advanced mouse tracking, watches multiple objects

document.onmousemove = postcard_mouse_tracker;

function postcard_mouse_tracker(event){
    // panels to watch and rotate
    let postcard__titles = document.getElementsByClassName('postcard__title');
    let postcard__rotates = document.getElementsByClassName('postcard__rotating');
    let postcard__translate_zs = document.getElementsByClassName('postcard__translate-z');
    // mouse position
    let mouseX = event.pageX;
    let mouseY = event.pageY ;


    for(i=0; i < postcard__translate_zs.length; i++ ){
        let rect = postcard__translate_zs[i].getBoundingClientRect();

        if( mouseX > rect.left && mouseX < rect.right && mouseY > rect.top + window.scrollY && mouseY < rect.bottom + window.scrollY){
            // console.log('hovering over card number' + i);
            // At this point mouse is hovering over one of the postcards
            function center_coord(x, y){return( ((y - x) / 2) + x );}

            let postcard__centerX = center_coord(rect.left, rect.right);
            // dont forget to add the window scroll to the Y dimension
            let postcard__centerY = center_coord(rect.top, rect.bottom) + window.scrollY;
            let from_centerX = mouseX - postcard__centerX;
            let from_centerY = postcard__centerY - mouseY;
            // console.log(from_centerX, from_centerY);
            // convert distance from center X & Y into a usable angle
            let angle = Math.atan2( mouseY - postcard__centerY, postcard__centerX - mouseX ) * 180 / Math.PI;

            postcard__titles[i].innerHTML = 'Mouse Angle: ' + Math.round(angle);
            
            // How much to rotate each axis based on distance from the center
            // in this case 10deg maximum
            let incrementX = 10 / Math.abs(rect.left - postcard__centerX);
            let incrementY = 10 / Math.abs( (rect.top + window.scrollY) - postcard__centerY);

            // remove not-active class so that the panel will translateZ toward screen
            if( postcard__translate_zs[i].classList.contains('postcard__not-active') ){
                postcard__translate_zs[i].classList.remove('postcard__not-active');
            }
            postcard__rotates[i].style.cssText = 'transform: rotateY(' + (from_centerX * incrementX) + 'deg) rotateX(' + (from_centerY * incrementY) + 'deg);';


        // add not-active class so that the panel will fade back smoothly
        }else if( ! postcard__translate_zs[i].classList.contains('postcard__not-active') ){

            postcard__translate_zs[i].classList.add('postcard__not-active');
            postcard__rotates[i].style.cssText = 'transform: rotateY(0) rotateX(0);';

        }
        
    }


}