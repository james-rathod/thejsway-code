// JavaScript code goes here

// Parity

// Check the following program that shows even numbers (divisible by 2) between 1 and 10.

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//       console.log(`${i} is even`);
//     }
//   }

//   This program uses the modulo operator %, which calculates the remainder after division of one number by another. It's often used to assess number parity.

// console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
// console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
// console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
// console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
// console.log(20 % 3); // 2 because 20 = 3 * 6 + 2

// Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.

// This program must show exactly 10 numbers including the first one, not 11 numbers!

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//       console.log(`${i} is even`);
//     }else{
//       console.log(`${i} is odd`);
//     }
//   }

let number = Number(prompt('Enter the Number.'));

for (let i = number; i < number + 10; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    }else{
      console.log(`${i} is odd`);
    }
  }