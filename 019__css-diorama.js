// 12/29/2019
// just experimenting with css and 3d
document.onmousemove = diorama_mouse_tracker;

function diorama_mouse_tracker(ev){
    let diorama__z_planes = document.getElementsByClassName('diorama__z-plane-frame');
    let diorama__rotation_frames = document.getElementsByClassName('diorama__rotation-frame');

    for(i=0; i<diorama__z_planes.length; i++){
        let rect = diorama__z_planes[i].getBoundingClientRect();

        if(ev.pageX > rect.left && ev.pageX < rect.right && ev.pageY > rect.top && ev.pageY < rect.bottom){
            let diorama__centerX = ( (rect.right - rect.left) / 2) + rect.left;
            let diorama__centerY = ( (rect.bottom - rect.top) / 2) + rect.top;
            let from__centerX = diorama__centerX - ev.pageX;
            let from__centerY = diorama__centerY - ev.pageY;
            let rotation_angle__incrementX = 20 / Math.abs(diorama__centerX - rect.left);
            let rotation_angle__incrementY = 20 / Math.abs(diorama__centerY - rect.top);

            if(diorama__z_planes[i].classList.contains('diorama__not-active')){
                diorama__z_planes[i].classList.remove('diorama__not-active');
            }

            diorama__rotation_frames[i].style.cssText = 'transform: rotateY( ' + ( (from__centerX * rotation_angle__incrementX) * -1 ) + 'deg) rotateX(' + (from__centerY * rotation_angle__incrementY) + 'deg);';

        }else if( ! diorama__z_planes[i].classList.contains('diorama__not-active') ){
            diorama__z_planes[i].classList.add('diorama__not-active');
            diorama__rotation_frames[i].style.cssText = 'transform: rotateY(0) rotateX(0);';
        }
    }
}