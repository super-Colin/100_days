const grid_size = 4;
const tiles = [...document.getElementsByClassName('tile')];

// set our game state to all 0's
let game_state = [];
for (i = 0; i < 16; i++) {
    game_state[i] = 0;
}
console.log(game_state);
function nth_indoxOf(nth_occurance, of_what, in_array) {
    let i = 0;
    let new_array = [];

    while (i <= nth_occurance) {

        if (i == 0) {
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
    let result_index = Math.abs(new_array.length - in_array.length) - 1;
    console.log('nth of function is returning: ' + result_index);
    return result_index;

}





function add_new_tile() {
    let empty = [...game_state.filter(spot => spot < 2)];
    console.log('empty length is: ' + empty.length);

    let num = Math.floor(Math.random() * (empty.length + 1));
    // console.log('num is : ' + num);

    if (empty.length > 1) {
        let index = nth_indoxOf(num, 0, game_state);
        // console.log(index);

        tiles[index].classList.add('tile-2');
        game_state[index] = 2;
        // console.log('added tile to index: ' + index);
        // console.log(game_state);
    } else if (empty.length == 1) {
        let index = game_state.indexOf(0);

        tiles[index].classList.add('tile-2');
        game_state[index] = 2;
        // console.log('-- went into else if -- , index is: ' + index);

    } else {
        console.log('no room to add tiles.... you lose..');
    }


    console.log('-------------------------------');
}

function make_column(grid_array = game_state, column_number) {
    let grid_size = Math.sqrt(grid_array.length);
    let new_column = [];

    let i;
    for (i = 0; i < grid_size; i++) {
        new_column[i] = grid_array[((column_number - 1) + (i * grid_size))];
    }
    return new_column;
}

function make_row(grid_array = game_state, row_number) {
    let grid_size = Math.sqrt(grid_array.length);
    let new_row = [];

    let i;
    for (i = 0; i < grid_size; i++) {
        new_row[i] = grid_array[(grid_size * (row_number - 1)) + i];
    }
    return new_row;
}


function check_for_move(input_array) {
    let moves = false;
    let i = 0;
    for (i = 0; i < input_array.length; i++) {
        if (input_array[i] == 0) {
            moves = true;
            console.log('checkForMoves() found move in this row/column index # ' + i);
        }
    }
    return moves;
}

function make_moves(input_array, placement = 'before') {
    console.log(input_array);
    let return_array = [];
    let i = 0;
    for (i = 0; i <= input_array.length - 1; i++) {
        if (input_array[i] !== 0) {
            return_array.push(input_array[i]);
        }
    }

    // place 0's at the beggining or end of the array
    if (placement == 'before') {
        let diff = input_array.length - return_array.length;console.log('diff = ' + diff);
        i = 0;
        for (i = 0; i < diff; i++) {
            return_array.unshift(0);
        }
    } else {
        let diff = input_array.length - return_array.length;
        i = 0;
        for (i = 0; i < diff; i++) {
            return_array.push(0);
        }
    }

    // console.log('new array =:')
    // console.log(return_array);
    return return_array;
}


// this takes a 2D array (row or column) to operate on 
function update_game_state(input_array, orientation = 'row', game_state) {
    let new_game_state = [];

    if (orientation == 'row') {
        let i, x;
        for (i = 0; i < input_array.length; i++) {
            for (x = 0; x < input_array[i].length; x++) {
                new_game_state.push(input_array[i][x]);
            }
        }
        // else if we're dealing with a column:
    } else {
        let i, x;
        for (i = 0; i < input_array.length; i++) {
            for (x = 0; x < input_array[i].length; x++) {
                new_game_state.push(input_array[x][i]);
            }
        }
    }
    console.log('new state is: ');
    console.log(new_game_state);
    return new_game_state;
}

function update_tile_state(new_state, tile_array){
    let i;
    for(i=0; i<tile_array.length; i++){
        tile_array[i].classList.remove('tile-2');
        
        if(new_state[i] != 0){
            tile_array[i].classList.add('tile-' + new_state[i]);

        }
    }
}



function sweep_left() {
    // create a 2D array of rows based on the current global game_state
    let rows = [];
    let i;
    for (i = 1; i <= grid_size; i++) {
        rows.push(make_row(game_state, i));
    }

    // update rows with make_move() logic
    let updated_rows = [];
    i = 0;
    for (i = 0; i < grid_size; i++) {
        updated_rows.push(make_moves(rows[i], 'after'));
    }

    // Update tiles[] and game_state[]
    game_state = update_game_state(updated_rows, 'row', game_state);
    update_tile_state(game_state, tiles);
    add_new_tile();
}

function sweep_right() {
    let rows = [];
    let i;
    for (i = 1; i <= grid_size; i++) {
        rows.push(make_row(game_state, i));
    }
    let updated_rows = [];
    i = 0;
    for (i = 0; i < grid_size; i++) {
        updated_rows.push(make_moves(rows[i], 'before'));
    }
    game_state = update_game_state(updated_rows, 'row', game_state);
    update_tile_state(game_state, tiles);
    console.log('adding new tile after sweeping');
    add_new_tile();
}

function sweep_up(){
    let columns = [];
    let i;
    for (i = 1; i <= grid_size; i++) {
        columns.push(make_column(game_state, i));
    }
    console.log('columns= ');
    console.log(columns);

    let updated_columns = [];
    i = 0;
    for (i = 0; i < grid_size; i++) {
        updated_columns.push(make_moves(columns[i], 'after'));
    }
    console.log('updated_columns= ');
    console.log(updated_columns);

    game_state = update_game_state(updated_columns, 'column', game_state);
    update_tile_state(game_state, tiles);
    add_new_tile();
}

function sweep_down() {
    let columns = [];
    let i;
    for (i = 1; i <= grid_size; i++) {
        columns.push(make_column(game_state, i));
    }
    console.log('columns= ');
    console.log(columns);

    let updated_columns = [];
    i = 0;
    for (i = 0; i < grid_size; i++) {
        updated_columns.push(make_moves(columns[i], 'before'));
    }
    console.log('updated_columns= ');
    console.log(updated_columns);

    game_state = update_game_state(updated_columns, 'column', game_state);
    update_tile_state(game_state, tiles);
    add_new_tile();
}




