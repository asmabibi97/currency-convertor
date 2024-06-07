import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    IND: 74.57,
    PKR: 278
};
let answer = await inquirer.prompt([{
        name: "from",
        message: "enter from currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'IND', 'PKR']
    },
    {
        name: "to",
        message: "enter to currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'IND', 'PKR']
    },
    {
        name: "amount",
        message: "enter your amount",
        type: 'number'
    }
]);
let fromamount = currency[answer.from];
let toamount = currency[answer.to];
let amount = answer.amount;
let base_amount = amount / fromamount;
let converted_amount = base_amount * toamount;
Math.floor(converted_amount);
console.log(converted_amount);
