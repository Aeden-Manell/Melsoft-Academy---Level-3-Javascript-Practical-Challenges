/* Create a JavaScript program that finds all prime numbers within 
a given range (inclusive) and displays them in the console. 
A prime number is a number greater than 1 that can only be divided 
by 1 and itself. */

// The following variable define the range within which the prime numbers can found
const startRange = 2;
const endRange = 50;

for (let i = startRange; i <= endRange; i++) {

    let isPrime = true;

    // Code to check if i is a prime number
    for (let j = 2; j <= Math.sqrt(i); j++) {
        // Code to check if i is divisible by j
        if (i % j === 0) {
            isPrime = false;
            break;
          }

          if (isPrime) {
            console.log(i + " is a prime number.");
          }
      }
  }

