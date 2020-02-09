// 12/24/2019
// learning some scroll tracking


function scroll_detection(){

    let scroll_displays = document.getElementsByClassName('scroll-display');
    for(i=0; i<scroll_displays.length; i++){
        scroll_displays[i].innerHTML = 'scroll: ' + window.scrollY;
    }


}


// setTimeout(scroll_detection(), 100);
// window.onscroll = scroll_detection();

window.onscroll = function(){
    
    let scroll_displays = document.getElementsByClassName('scroll-display');
    for(i=0; i<scroll_displays.length; i++){
        scroll_displays[i].innerHTML = 'scroll: ' + window.scrollY;
    }

}
