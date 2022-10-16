// JavaScript code goes here

// Create all these programs in a generic fashion: the program output should reflect any update in the array's content.

// Sum of values

// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10];

let total = 0;

// values.forEach(value =>{
//     total += value;
// })



// for-of loop 
// for(const value of values){
//     total += value;
// }


// for loop
for(let i = 0; i < values.length; i++){
    total += values[i];
}
console.log(total);