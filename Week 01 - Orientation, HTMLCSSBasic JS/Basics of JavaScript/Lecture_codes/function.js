// Write a function sum that finds the sum of two numbers. 

function sum(a, b){
    let total = a + b;
    return total;
}

// Side quest - Try passing in a string instead of a number and see what happens?
console.log(sum(5, 6));
console.log(sum('5', '6'));

// Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age){
    if(age>18)return true;
    else return false;
}

console.log(canVote(11));