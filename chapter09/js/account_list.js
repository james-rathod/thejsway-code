// JavaScript code goes here

// Let's build upon a previous account object exercise. A bank account is still defined by:

//     A `name` property.
//     A `balance` property, initially set to 0.
//     A `credit` method adding the value passed as an argument to the account balance.
//     A `describe` method returning the account description.

// Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

class BankAccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = 0;
    }
    credit(amount) {
        this.balance += amount;
    }
    describe() {
        return `Owner: ${this.name}, balance: ${this.balance}`;
    }
}

const accountList = [];

accountList.push(new BankAccount('Sean'));
accountList.push(new BankAccount('Brad'));
accountList.push(new BankAccount('Georges'));

accountList.forEach(account => {
    account.credit(1000);
    console.log(account.describe());
});