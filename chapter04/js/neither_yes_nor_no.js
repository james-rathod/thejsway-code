// JavaScript code goes here

// Neither yes nor no

// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

let yesOrNo = '';
while(yesOrNo !== 'yes' && yesOrNo !== 'no'){
    yesOrNo = prompt('Want to play neither yes, nor no');
}
console.log('You lost')

