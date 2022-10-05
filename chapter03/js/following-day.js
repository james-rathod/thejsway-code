// JavaScript code goes here

// Following day

// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

let dayName = prompt('Tell me the day?');
dayName = dayName.toLowerCase();

if(dayName === 'sunday'){
            alert('Tomorrow is Monday');
    }   else if(dayName === 'monday'){
            alert('Tomorrow is Tuesday!');
    }   else if(dayName === 'tuesday'){
            alert('Tomorrow is Wednesday!');
    }   else if(dayName === 'wednesday'){
            alert('Tomorrow is Thursday!');
    }   else if(dayName === 'thursday'){
            alert('Tomorrow is Friday!');
    }   else if(dayName === 'friday'){
            alert('Tomorrow is Saturday!');
    }   else if(dayName === 'saturday'){
            alert('Tomorrow is Sunday!');
    }   else{
            alert('Please type a valid day name.')
    }