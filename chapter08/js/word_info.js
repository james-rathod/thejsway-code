// JavaScript code goes here

// Word info

// Write a program that asks you for a word then shows its length, lowercase, and uppercase values.

let word = prompt('Please type a word to see it\'s information');

function wordInfo(word) {
    console.log(`The length of the word is ${word.length}`);
    console.log(`Lowercase value: ${word.toLowerCase()}`);
    console.log(`Uppercase value: ${word.toUpperCase()}`);
}

wordInfo(word);