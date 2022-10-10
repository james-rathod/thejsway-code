// JavaScript code goes here

// Improved hello

// Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

// Say hello to the user
let firstName = prompt('Please type your first name.');
let lastName = prompt('Please type your last name.');

// function declaration
// function sayHello(firstName, lastName) {
//   const message = `Hello, ${firstName} ${lastName}!`;
//   return message;
// }

// fat arrow functions
const sayHello = (firstName, lastName) => {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
}
console.log(sayHello(firstName,lastName));
// TODO: ask user for first and last name
// TODO: call sayHello() and show its result


