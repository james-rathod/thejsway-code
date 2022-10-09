// JavaScript code goes here

// FizzBuzz

// Write a program that shows all numbers between 1 and 100 with the following exceptions:

//     It shows "Fizz" instead if the number is divisible by 3.

//     It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

//     This exercise has many, many solutions. It's a job interview classic that a significant number of candidates fail. Try your best!

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} is Fizzbuzz`);
    }else if(i % 3 === 0){
        console.log(`${i} is Fizz`);
    }else if(i % 5 === 0){
        console.log(`${i} is Buzz`);
    }else{
        console.log(`${i}`)
    }
}