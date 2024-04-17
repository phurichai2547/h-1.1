// 15. // Expressions, Operators, and Control Structures / Arrays
// Instruction:
// - Destructure the first two elements and the last element of an array into new variables.
// Initiate code:
// const numbers = [1, 2, 3, 4, 5];
// // Insert your code here
const numbers = [1, 2, 3, 4, 5];
const [first, second, ,last]  = numbers;
console.log(first);
console.log(second);
console.log(last);