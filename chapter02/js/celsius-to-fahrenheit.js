// JavaScript code goes here

// From Celsius to Fahrenheit degrees

// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

//     The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.

let celsius = Number(prompt('Please write the temperature in celsius to see it fahrenheit.'));

let fahrenheit = celsius * 9 / 5 + 32;
alert(fahrenheit);