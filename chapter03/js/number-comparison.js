// JavaScript code goes here

// Number comparison

// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

let number1 = Number(prompt('Type a first number to compare.'));
let number2 = Number(prompt('Type a second number to compare.'));

if (number1 < number2) {
        alert(`${number1} is less than ${number2}.`);
}   else if (number1 > number2) {
        alert(`${number1} is greater than ${number2}.`);
}   else if (number1 === number2) {
        alert('Both of the numbers are equal!')
}