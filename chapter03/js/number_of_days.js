// JavaScript code goes here

// Number of days in a month

// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

let monthNumber = Number(prompt('Tell me the number of the month.'));

// if(monthNumber == 1){
//     alert('There are 31 days in January!');
// } else if(monthNumber == 2){
//     alert('There are 28 days in February!');
// } else if(monthNumber == 3){
//     alert('There are 31 days in March!');
// } else if(monthNumber == 4){
//     alert('There are 30 days in April!');
// } else if(monthNumber == 5){
//     alert('Thera are 31 days in May!');
// } else if(monthNumber == 6){
//     alert('There are 30 days in June!');
// } else if(monthNumber == 7){
//     alert('There are 31 days in July!');
// } else if(monthNumber == 8){
//     alert('There are 31 days in August!');
// } else if(monthNumber == 9){
//     alert('There are 30 days in September!');
// } else if(monthNumber == 10){
//     alert('There are 31 days in October!');
// } else if(monthNumber == 11){
//     alert('There are 30 days in November!');
// } else if(monthNumber == 12){
//     alert('There are 31 days in December!');
// } else{
//     alert('Incorrect input.')
// }

// This is longer version of the solution because i also wanted to tell them the name of the month.

// below is the shorter solution using the same if-else statement

// if (monthNumber === 1 || monthNumber === 3 || monthNumber === 5 || monthNumber === 7 || monthNumber === 8 || monthNumber === 10 || monthNumber === 12){
//     alert('This month has 31 days.');
// } else if(monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber === 11){
//     alert('This month has 30 days.');
// } else if(monthNumber === 2){
//     alert('This month has 28 days.');
// } else{
//     alert('Incorrect input.')
// }


// solution using the switch statement

switch(monthNumber){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert('This month has 31 days!');
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert('This month has 30 days!');
        break;
    case 2:
        alert('This month has 28 days!')
    default:
        alert('Incorrect input!');
}