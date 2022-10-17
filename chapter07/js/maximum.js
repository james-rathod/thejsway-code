// JavaScript code goes here

// Create all these programs in a generic fashion: the program output should reflect any update in the array's content.

// Array maximum

// Write a program that creates the following array, then calculates and shows the array's maximum value.

const values = [3, 11, 7, 2, 9, 10];

let max = values[0];

// for (let i = 0; i < values.length; i++) {
//     if(values[i] > max){
//         max = values[i];
//     }
// }

// values.forEach( value => {
//     if( value > max){
//         max = value;
//     }
// });

for (const value of values){
    if(value > max){
        max = value;
    }
}

console.log(max);