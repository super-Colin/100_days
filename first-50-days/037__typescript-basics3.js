// 1/16/2020
// been doing a lot of angular stuff lately, just wanted to have a reference to some typesrcipt fundamentals
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "Jane",
    lastName: "Person Object"
};
document.body.textContent = greeter(user);
// _________________________________________________________
// ---------------------------------------------------------
// _________________________________________________________
