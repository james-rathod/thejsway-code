// JavaScript code goes here

// VAT calculation

// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.

let rawPrice = Number(prompt('Tell me the price.'));
const vat = 20.6

let finalPrice = (rawPrice * vat) / 100;
finalPrice = finalPrice + rawPrice;
console.log(finalPrice);