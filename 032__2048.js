// 1/11/2020
// Just some coding for fun

// This iteration only has the functionality to add new tiles 


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
    } else if(empty.length ==1){
        let index = game_state.indexOf(0);

        tiles[index].classList.add('tile-2');
        game_state[index] = 2;
        console.log('-- went into else if -- , index is: ' + index);

    }else {
        console.log('-------------------------------');
        console.log('no room to add tiles.... you lose..');
        console.log('no room to add tiles.... you lose..');
        console.log('-------------------------------');

    }

    console.log('game state is: ' + game_state.length);
    console.log('tiles length is: ' + tiles.length);
        console.log(game_state);

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
    // console.log(grid_array.length + 1);
    console.log('grid size is: ' + grid_size);

    let new_column = [grid_array[(column_number-1)]];

    for(i = 1; i < grid_size; i++){
        new_column[i] = grid_array[(i+grid_size)];
    }
    return new_column;
};

let new_column = make_column(game_state, 2 );
console.log(new_column);