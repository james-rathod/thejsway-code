// JavaScript code goes here

// Following second

// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

//     This is not as simple as it seems... Look at the following results to see for yourself:

//         14h17m59s => 14h18m0s
//         6h59m59s => 7h0m0s
//         23h59m59s => 0h0m0s (midnight)

let hours = Number(prompt('Input hours'));
let minutes = Number(prompt('Input minutes'));
let seconds = Number(prompt('Input seconds'));

if(
    hours <= 23 &&
    hours >= 1 &&
    minutes <= 59 &&
    minutes >= 1 &&
    seconds <= 59 &&
    seconds >= 1
){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
    if(minutes === 60){
        minutes = 0;
        hours++;
    if(hours === 24){
        hours = 0;
            }
        }
    }
    console.log(`In the next second time will be ${hours} hours ${minutes} minutes ${seconds} seconds`);
} else {
    console.log('Incorrect input');
}