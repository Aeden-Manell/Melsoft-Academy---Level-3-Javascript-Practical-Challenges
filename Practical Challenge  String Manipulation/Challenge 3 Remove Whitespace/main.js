/*Write a program that takes a string as input 
and prints the string without any whitespace. */

//Asks the user to enter the string and stores in a variable
let myString = prompt("Please enter the string below:");

//Stores the variablejhvk with the removed whitespace
let removedWhitespace = "";

//Removes whitespaces in the string
removedWhitespace = myString.replace(/\s/g, '');

//Outputs the string with the removed whitespace
console.log(removedWhitespace);

