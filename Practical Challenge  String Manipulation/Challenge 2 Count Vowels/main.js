/* Write a program that takes a string as input and prints 
the number of vowels in the string. */

// This JavaScript program counts the number of vowels in a given string.

// The user is prompted to enter a string
let myString = prompt("Please enter the string");

//The users input is converted to lowercase
let lowercaseMyString = myString.toLowerCase();

// All the vowels are listed in an array
let vowels = ["a", "e", "i", "o", "u"];

// The counter variable is initialized to 0
let vowelCounter = 0;

// the for loop calculates the vowel count.
// It utilizes a loop to iterate over each character of the string and checks if it is a vowel.
for (let i= 0; i < myString.length; i++) {
    vowelCounter = lowercaseMyString.indexOf(vowels[i]);
    vowelCounter++;
}

// The final count of vowels is printed to the console as the output.
console.log(vowelCounter);