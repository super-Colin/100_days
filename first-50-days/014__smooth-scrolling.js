// 12/24/2019
// learning some scroll tracking and smoother scrolling


window.onscroll = function(){
    
    let scroll_displays = document.getElementsByClassName('scroll-display');
    for(i=0; i<scroll_displays.length; i++){
        scroll_displays[i].innerHTML = 'scroll: ' + window.scrollY;
    }

}
// // This did not work :/ 
// function scroll_to(spot){
//     // window.scrollTo(0, spot);
//     let distance = window.scrollY - spot;
//     console.log(distance);

//     for(i=0; i<Math.abs(distance); i++){
//         // console.log(distance);

//         if(window.scrollY < spot){
//             console.log('in scroll down loop');
//             window.scrollBy(0, 1);
//         }else{
//             console.log('in scroll up loop');
//             window.scrollBy(0, -1);
//         }
//     }
// }

// // Turns out vanilla js has a utility for smooth scrolling already.. I dont regret diving in gung ho though :)
// function scroll_to(spot){
//     window.scrollTo({
//         left: 0,
//         top: spot,
//         behavior: 'smooth'
//     })
// }


// var child = document.getElementById('my_element');
// var parent = child.parentNode;
// // The equivalent of parent.children.indexOf(child)
// var index = Array.prototype.indexOf.call(parent.children, child);

const buttons = document.getElementsByClassName('scroll-button');
const range_inputs = document.getElementsByClassName('scroll-input');
const displays = document.getElementsByClassName('scroll-input__display');
console.log('displays length:' + displays.length);


function add_range_listeners(){
    // let range_inputs = document.getElementsByClassName('scroll-input');
    for(i=0; i<range_inputs.length; i++){
        console.log('adding listener to number' + i);
        console.log(range_inputs[i]);
        // not sure why I had to define another var here
        // but using i inside the coming function would return a 5?? (with range_inputs.length = 4)
        let count = i;

        range_inputs[i].addEventListener('change', function(){
            console.log('trying to update display' + count);
            console.log(this.value);
            displays[count].innerHTML = this.value;
        }, false);
    }
}
add_range_listeners();


function scroll_to(input_node){
    // let buttons = document.getElementsByClassName('scroll-button');
    // let range_inputs = document.getElementsByClassName('scroll-input');
    // let displays = document.getElementsByClassName('scroll-input__display');

    for(i=0; i<displays.length; i++){
        displays[i].innerHTML = range_inputs[i].value;
    }

    for(i=0; i<buttons.length; i++){
        // console.log(buttons[i]);

        if(buttons[i] == input_node){
            console.log('found it, button: ' + i);
            scrollTo({
                left: 0,
                top: range_inputs[i].value,
                behavior: 'smooth'
            })
            // range_inputs[i].value

        }else{
            console.log('didnt find');
        }
    }
}

function scroll_down(){
    // window.scrollBy(0, 200);
    window.scrollBy({
        left:0,
        top: 200,
        behavior: 'smooth'
    });
}

function scroll_up(){
    // window.scrollBy(0, -200);
    window.scrollBy({
        left: 0,
        top: -200,
        behavior: 'smooth'
    })
}