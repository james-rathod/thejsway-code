// JavaScript code goes here

// Create all these programs in a generic fashion: the program output should reflect any update in the array's content.

// List of words

// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".


// my solution
const otherWords = [];

// asks the user to type stop, 
let word = '';
// while (word !== 'stop'){
//     if(word !== 'stop'){
//         otherWords.push(word);
//         word = prompt(`Please type stop.`);
//     }
// }

// let removedWord = otherWords.shift(0);

// thejsway solution
while (word !== 'stop'){
    word = prompt(`Please type stop.`);
    if(word !== 'stop'){
        otherWords.push(word);
    } 
}

otherWords.forEach ( w => {
    console.log(w);
})
