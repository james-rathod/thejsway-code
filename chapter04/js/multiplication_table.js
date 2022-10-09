// JavaScript code goes here

// Write a program that asks the user for a number, then shows the multiplication table for this number.

// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).


// let number = Number(prompt('Enter a number to see the multiplication table.'));
// for(let i = number; i < number + 10; i++){
//     console.log(`${number} x ${i} = ${number * i}`)
// }


// first make the user to enter the between 2 and 9
let number = 0;
while(number < 2 || number > 9){
    number = Number(prompt('Enter a number between 2 and 9 to see the multiplication table.'));
}
console.log(`Here is the multiplication table for ${number}`);

// then use the for loop to show the table
// for(let i = 1; i <= 10; i++){
//     console.log(`${number} x ${i} = ${number * i}`)
// }

// while loop can also be used to show the table
let i = 1;
while(i <= 10){
    console.log(`${number} x ${i} = ${number * i}`)
    i++;
}