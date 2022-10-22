// JavaScript code goes here




// Word info
// Write a program that asks you for a word then shows its length, lowercase, and uppercase values.

let word = prompt('Please type a word to see it\'s information');


let vowelsCount = 0;

function wordInfo(word) {

    console.log(`The length of the word is ${word.length}`);
    console.log(`Lowercase value: ${word.toLowerCase()}`);
    console.log(`Uppercase value: ${word.toUpperCase()}`);

    // Vowel count
    // Improve the previous program so that it also shows the number of vowels inside the word.
    let wordToLowerCase = word.toLowerCase();
    let vowels = wordToLowerCase.split('');
    
    vowels.forEach(letter => {
        if(letter === 'a'){
            vowelsCount++;
        }
        if(letter === 'e'){
            vowelsCount++;
        }
        if(letter === 'i'){
            vowelsCount++;
        }
        if(letter === 'o'){
            vowelsCount++;
        }
        if(letter === 'u'){
            vowelsCount++;
        }
    }); 


}






wordInfo(word);
console.log(vowelsCount);