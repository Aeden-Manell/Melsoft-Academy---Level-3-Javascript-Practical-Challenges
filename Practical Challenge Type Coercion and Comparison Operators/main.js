/* Create a program that compares 2 user input values 
and provides a message based on the comparison results. */

// User inputs of the first and second numerical values
let num1 = prompt("Please Enter the first numerical value:");
let num2 = prompt("Please Enter the second numerical value:");

//Displays the entered numerical values
console.log("The first numerical value (num1): ", num1);
console.log("The second numerical value (num2): ", num2);

// Outputs Comparison results
console.log("num1 == num2 : ", num1 == num2);
console.log("num1 != num2 : ", num1 != num2);

console.log("num1 === num2 : ", num1 === num2);
console.log("num1 !== num2 : ", num1 !== num2);

console.log("num1 > num2 : ", num1 > num2);
console.log("num1 >= num2 : ", num1 >= num2);

console.log("num1 < num2 : ", num1 < num2);
console.log("num1 <= num2 : ", num1 <= num2);