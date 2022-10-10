// JavaScript code goes here

// Calculator

// Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

// TODO: complete program
// function declaration
// function calculate(num1, operator, num2){
//     if(operator === '+'){
//         return num1 + num2;
//     }else if(operator === '-'){
//         return num1 - num2;
//     }else if(operator === '*'){
//         return num1 * num2;
//     }else if(operator === '/'){
//         return num1 / num2;
//     }
// }

// function expression
let calculate = (num1, operator, num2) => {
    if(operator === '+'){
        return num1 + num2;
    }else if(operator === '-'){
        return num1 - num2;
    }else if(operator === '*'){
        return num1 * num2;
    }else if(operator === '/'){
        return num1 / num2;
    }
}

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity