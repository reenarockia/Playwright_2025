/* Program to categorize a number as 
positive, negative, or zero using conditional statements in JavaScript*/

function findNumberType(n){
    if (n > 0) {
        return "The given number "+ n +" is positive"
    } else if(n < 0) {
        return "The given number "+n + " is negative"
    } else {
        return "The given number is zero"
    }
}

console.log(findNumberType(0));
console.log(findNumberType(-5));
console.log(findNumberType(26));

