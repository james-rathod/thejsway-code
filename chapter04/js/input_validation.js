// JavaScript code goes here

// Input validation

// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.


// // let number = Number(prompt('Input the number.'));
// // while(number <= 100){
// //     console.log('Perfect');
// //     number++;
// // }

// let number = Number(prompt('Input the number.'));
// while(number >= 50 && number <= 100){
//     console.log('Perfect');
//     number++;
// }


let number = 0;
while(number < 50 || number > 100){
    number = Number(prompt('Enter a number between 50 and 100.'));
}