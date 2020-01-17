// 1/16/2020
// been doing a lot of angular stuff lately, just wanted to have a reference to some typesrcipt fundamentals

// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

// _________________________________________________________
// ---------------------------------------------------------
// _________________________________________________________

// #1

// function greeter(person: string) {
//     return "Hello, " + person;
// }


// // let user = "Jane User"; // #1

// document.body.textContent = greeter(user);

// _________________________________________________________
// ---------------------------------------------------------
// _________________________________________________________

// #2
// function greeter(person: string) {
//     return "Hello, " + person;
// }


// let user [1,2,3,4]; 

// document.body.textContent = greeter(user);

// _________________________________________________________
// ---------------------------------------------------------
// _________________________________________________________

// // #3

// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }


// let user = {
//     firstName: "Jane",
//     lastName: "Person Object"
// }

// document.body.textContent = greeter(user);

// // _________________________________________________________
// // ---------------------------------------------------------
// // _________________________________________________________

// #4

class Student {
    fullName: string;
    constructor(public firstName: string, public middleIntitial: string, public lastName: string){
        this.fullName = firstName + " " + middleIntitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}


let user = new Student("Jhon", "m", "Class");

document.body.textContent = greeter(user);

// _________________________________________________________
// ---------------------------------------------------------
// _________________________________________________________