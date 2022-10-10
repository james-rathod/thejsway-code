// JavaScript code goes here

// Circumference and area of a circle

// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

// Here are some tips for solving this exercise:

//     Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
//     The value of number π (Pi) is obtained with Math.PI in JavaScript.
//     You might want to use the exponentiation operator ** to perform computations.

// console.log(2 ** 3); // 8: 2 * 2 * 2
// console.log(3 ** 2); // 9: 3 * 3

let calcCircumference = (radius) => {
    let circumference = 2 * Math.PI * radius;
    return circumference;
}

let calcArea = (radius) => {
    let area = Math.PI * Math.pow(radius, 2);
    return area;
}

let radius = Number(prompt('Please enter the circle radius.'))
console.log(`The circumference of circle is ${calcCircumference(radius)}`);
console.log(`The area of the circle is ${calcArea(radius)}`);