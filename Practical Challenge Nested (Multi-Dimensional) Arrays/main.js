/* Practical Challenge:
Create a program that calculates the total 
of all the numbers inside the nested array. */

let nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

// Write your code here to calculate the total of all numbers in the nestedArray
  let counter = 0;

for (let i = 0; i < nestedArray.length; i++) {
  for (let j = 0; j < nestedArray[i].length; j++) {
    counter += nestedArray[i][j];
  }
}
console.log(counter);





