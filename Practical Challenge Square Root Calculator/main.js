/* write a function that calculates the square root of a given number. 
If the input is a negative number, throw a custom error with 
an appropriate message. Use Try-Catch statements to handle the 
error gracefully and log the error message to the console. */

// The following function calculates the square root of a given number.
function squarerootCalculator(givenNumber) {

    // code that might throw an exception
    try {
        if (givenNumber <= 0) {
            throw new Error("There is no true square root of a negative number");           
        } 
        // Used the sqrt() method which computes the square root of a specified number and returns it.
        console.log(Math.sqrt(givenNumber));    
    } catch (error) {
        // code to handle the error
      console.log("An error occurred:");
    }
  }

// Ask the user to enter any given number.
let inputNumber = prompt("Enter any given number : ");

// Calls the squarerootCalculator function and outputs the result.
squarerootCalculator(inputNumber);