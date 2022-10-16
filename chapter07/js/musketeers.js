// JavaScript code goes here

// Create all these programs in a generic fashion: the program output should reflect any update in the array's content.

// Musketeers

// Write a program that:

//     Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
//     Shows each array element using a for loop.
//     Adds the "D'Artagnan" value to the array.
//     Shows each array element using the forEach() method.
//     Remove poor Aramis.
//     Shows each array element using a for-of loop.


//     Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
const musketeers = ['Athos', 'Porthos', 'Aramis']

//     Shows each array element using a for loop.
for (let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i]);
}

//     Adds the "D'Artagnan" value to the array.
musketeers.push('D\'Artagnan');

//     Shows each array element using the forEach() method.
musketeers.forEach(musketeer =>{
    console.log(musketeer);
});

//     Remove poor Aramis.
musketeers.splice(2,1);
//     Shows each array element using a for-of loop.
for(const musketeer of musketeers){
    console.log(musketeer);
}