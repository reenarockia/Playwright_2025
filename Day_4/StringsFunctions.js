// Escape Sequence

let statement1 = 'Reena\'s father name is Arockiasamy'

//Concatenation

let tcName='Create lead';
let tcId=123;

console.log( tcName.concat(tcId));

//Template Literal

let testCase = 150;

let output = `There are ${testCase} test cases in regression`;
console.log(output);

//length

let course="Playwright";

console.log("Length of course "+course.length);

//indexof
console.log("char 'a' is at index " + course.indexOf('a'));

//charat
console.log("char value at index 2 is "+ course.charAt(0));

//slice - End index is ignored = Result - ay - space is not considered
console.log("sliced course "+ course.slice(2,4));

//reverse index = -10,-9,-8, -7, -6, -5, -4, -3, -2, -1 - Negative index


console.log(course.slice(-4,-2));

//substring - Playwright - end index is ignored - space is considered
console.log(course.substring(2,5));
console.log(course.substring(5,2));
