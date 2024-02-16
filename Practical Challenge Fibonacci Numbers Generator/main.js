

/* Defined a function called generateFibonacci that 
takes one parameter n, representing the number of 
Fibonacci numbers to generate. */
function generateFibonacci(n) {

    /* an array called fibonacci with 
    the first two numbers of the sequence: [0, 1] */
    let fibonacci = [0, 1];

    // the following for loop is used to iterate from 2 to n
    for (let i = 2; i <= n; i++) {
        
        /* defines the sum variable and calculates 
        the next Fibonacci number by 
        adding the last two numbers in the fibonacci array. */
        let sum;
        sum = fibonacci[i-1] + fibonacci[i-2];
        
        /* used the push() Method to add 
        numerical values to the end of an array. */
        fibonacci.push(sum);        
    }

    // returns the fibonacci array.
    return fibonacci;
}

// Asks the user to enter the value of n
let n = prompt("Enter the value of n");

/* Calls the generateFibonacci function with an appropriate value of n 
 entered above and logs the result using console.log(). */
console.log(generateFibonacci(n));