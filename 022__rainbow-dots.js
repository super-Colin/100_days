




function make_dots(container_id, columns_to_make, rows_to_make, dot_width=4){

    let grid = document.getElementById(container_id);
    let rect = grid.getBoundingClientRect();

    let incrementX = Math.abs(rect.right - rect.left) / columns_to_make;
    let incrementY = Math.abs(rect.bottom - rect.top) / rows_to_make;
    let color_increment = 345 / columns_to_make;

    console.log(incrementX, incrementY, color_increment);

    for(i=0; i <= rows_to_make; i++){
        let on_column = i;
        for(x=0; x <= columns_to_make; x++){
            let dot = document.createElement('div');
            dot.classList.add('dot');
            // dot.style.cssText = 'width:' + dot_width + 'px; height:' + dot_width + 'px; left:' + ((incrementX * x) - (dot_width / 2)) + 'px; top:' + ((incrementY * x) - (dot_width / 2)) + 'px;';
            dot.style.cssText = 'width:' + dot_width + 'px; height:' + dot_width + 'px; background-color: hsl( ' + (color_increment * x) + ' , 90%, 80%); left:' + ((incrementX * x) - (dot_width / 2)) + 'px; top:' + ((incrementY * on_column) - (dot_width / 2)) + 'px;';


            grid.appendChild(dot);
        }
    }


}

make_dots('grid-container', 107, 106, 4);