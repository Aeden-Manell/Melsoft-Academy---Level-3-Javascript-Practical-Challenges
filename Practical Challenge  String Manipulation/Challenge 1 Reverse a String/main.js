//Write a program that takes a string as input and prints the string in reverse order.

//Ask the user to enter a string
let myString = prompt("Please enter the string below: ");


//Store the reversed string a variable
let reversedString = "";

//Reverse the string and it reversed string a variable
for(let i = myString.length - 1; i >= 0; i--){
 reversedString += myString[i];
}

//Display the reversed string
console.log(reversedString);
