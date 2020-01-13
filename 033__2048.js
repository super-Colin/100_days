

const grid_size = 4;
const tiles = [...document.getElementsByClassName('tile')];

// set our game state to all 0's
let game_state = [];
for(i=0; i<16; i++){
    game_state[i] = 0;
}

// game_state = [2, 2, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0];

// console.log(game_state);




function nth_indoxOf(nth_occurance, of_what, in_array){
    let i=0;
    let new_array = [];

    while(i <= nth_occurance){

        if( i == 0){
            let index = in_array.indexOf(of_what);
            new_array = [...in_array.slice(index + 1)];
            // console.log(new_array);

            i++;
        } else {
            index = new_array.indexOf(of_what);
            new_array = [...new_array.slice(index + 1)];

            i++;
        }
    }
    let result_index = Math.abs(new_array.length - in_array.length) -1;
    console.log('nth of function is returning: ' + result_index);
    return result_index;

}





function add_new_tile() {
    let empty = [...game_state.filter(spot => spot < 2)];
    console.log('empty length is: ' + empty.length);

    let num = Math.floor(Math.random() * (empty.length + 1) );
    console.log('num is : ' + num);
    
    if(empty.length > 1){
        let index = nth_indoxOf(num, 0, game_state);
        console.log(index);

        tiles[index].classList.add('tile-2');
        game_state[index] = 2;
        console.log('added tile to index: ' + index);
        console.log(game_state);
    } else if(empty.length ==1){
        let index = game_state.indexOf(0);

        tiles[index].classList.add('tile-2');
        game_state[index] = 2;
        console.log('-- went into else if -- , index is: ' + index);

    }else {
        console.log('no room to add tiles.... you lose..');
    }

    
    console.log('-------------------------------');
}



// const row1 = [...tiles.slice(0, 4)];
// const row2 = [...tiles.slice(4, 8)];
// const row3 = [...tiles.slice(8, 12)];
// const row4 = [...tiles.slice(12, 16)];


// TODO 

function sweep_left(){

};


function make_column(grid_array, column_number){
    let grid_size = Math.sqrt(grid_array.length);

    let new_column = [];

    for(i = 0; i < grid_size; i++){
        new_column[i] = grid_array[( (column_number - 1) + (i * grid_size) )];
    }
    return new_column;
}
function col2() {
    let new_column = make_column(game_state, 2);
    console.log(new_column);
}

function make_row(grid_array, row_number){
    let grid_size = Math.sqrt(grid_array.length);
    // console.log('grid size is: '+ grid_size);
    let new_row = [];

    let i = 0;
    for(i=0; i< grid_size; i++){
        new_row[i] = grid_array[ ( grid_size *  (row_number - 1) ) + i  ];
        // console.log('row square index is: ' + ((grid_size * (row_number - 1)) + i));
    }
    return new_row;
}
function row2() {
    let new_row = make_row(game_state, 2);
    console.log(new_row);
}


function check_for_move(input_array){
    let moves = false;
    let i = 0;
    for(i=0; i < input_array.length; i++){
       if(input_array[i] == 0){
           moves = true;
        console.log('checked for ' + i + ' moves');
       }
    }
    return moves;
}


function sweep_up(){
    const old_game_state = [...game_state];

}

function sweep_left() {
    let rows = [];
    let i = 1;
    for (i = 1; i <= grid_size; i++) {
        rows.push(make_row(game_state, i));
    }
    console.log('sweep left, make_rows output array: ');
    console.log(rows);
    console.log('i = ' + i);

    // i= 1;
    // console.log('i = ' + i);

    for (i = 0; i < grid_size; i++) {
        console.log('i = ' + i);

        let moves = check_for_move(rows[i]);
        console.log(moves);
    }

    // return rows;
}