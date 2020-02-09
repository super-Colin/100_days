// 1/7/2020
// learning some more functional style, first exercise that gave me some trouble

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/refactor-global-variables-out-of-functions


// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
function add(fixedList, bookName) {
    // this will provide a different result
    // let newList = fixedList;
    let newList = [...fixedList];
    newList.push(bookName);
    return newList;

    // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(fixedList, bookName) {
    // this will provide a different result.. again... by not working when called with the previous function in the fixedList argument
    // let newList = fixedList;
    let newList = [...fixedList];
    var book_index = newList.indexOf(bookName);

    if (book_index >= 0) {

        newList.splice(book_index, 1);
        return newList;

        // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);