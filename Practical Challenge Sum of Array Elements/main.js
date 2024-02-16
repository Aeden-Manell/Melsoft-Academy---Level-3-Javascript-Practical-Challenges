/* Create a program that calculates the sum of all the 
elements in a given array of numbers. You can use any of 
the iteration methods discussed above to traverse the 
array elements and accumulate the sum. */

let sum = 0;
let marks = [1, 2, 3, 4, 5];

for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}

console.log(sum);