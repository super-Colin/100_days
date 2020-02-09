// 1/2/2020
// exploring some functional programming
// https://www.freecodecamp.org/news/an-introduction-to-functional-programming-style-in-javascript-71fcc050f064/

let display = document.getElementById('main-display');


// Evolution of a for loop into a more functional .. function
let test_array = [1,2,3];
display.innerHTML = 'starting point array is: ' +  test_array;
console.log('starting point array is: ' +  test_array);


for(i=0; i<test_array.length;i++){ console.log( 'inside for loop: ' + (test_array[i] + 1) );}
for(i=0; i<test_array.length;i++){ test_array[i] = test_array[i] + 1; }
console.log('the for loop has altered the values of the original array');


// map() is a higher order function
// using the map function since we're working with an array:
test_array.map( function(item) { console.log( 'inside map function: ' + (item + 1) );} );

// using an arrow function
test_array.map((item) => { console.log('inside map function: ' + (item + 1) );})


// next example was without a return command so here are the examples
// same function using return instead of console.log
for(i=0; i<test_array.length;i++){ test_array[i] = test_array[i] + 1; }
test_array.map( function(item) { return item + 1; } );
test_array.map( (item) => { return item + 1; } );
test_array.map( (item) => item + 1 );
// you could even go 1 step further by removing the ()'s around the input var
test_array.map( item => item + 1 );
// all the the map functions are returning the value though and not altering the value of the input array

// map() works with a copy of the array so even this will not alter the values in the original array
console.log('before "should alter" map function: ' + test_array);
test_array.map(item => item=item + 1);
console.log('after "should alter" map function: ' + test_array);

// we could make our inner function into a var:
add_1 = item => item + 1;
test_array.map( add_1 );

// so lets map() our new values into a new array
let new_array = test_array.map(add_1);
console.log('new array is: ' + new_array);
console.log('test array is still: ' + test_array);



// a and i stand for Accumulator + Item
let sum = (a,i) => a + i;

let another_array = test_array.map( add_1 );
console.log(another_array);

// this will not return an int
// ... becaus the has been established and is not altered here, ..as well it's an array and not and int
another_array.reduce(sum, 0);
console.log(another_array);


// this will return an int
let new_var = another_array.reduce(sum, 0);
console.log(new_var);

// this will return an int
console.log(another_array);
another_array = test_array.map( add_1 ).reduce(sum, 0);
console.log('but js is not strongly typed so it will change the var from an array to the int: ' + another_array + ' for you');
console.log(another_array);
