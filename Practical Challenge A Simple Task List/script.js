// Practical Challenge: A Simple Task List
/* Create a simple task list program that 
allows the user to add, remove, and display tasks. */

// Print a welcome message and prompt the user to select an operation
console.log(
  "Welcome to the Task List App \nWhich operation do you wish to perform: \n"
);

// Print options for different task list operations
console.log(
  "1. Add a task to the end of the task list \n2. Remove a task from the beginning of the task list. \n"
);
console.log(
  "3. Remove a task from the end of the task list. \n4. Remove a task from a specific position in the task list. \n"
);
console.log("5. Display the current task list.");

// Prompt the user to input "EXIT" to stop the program
console.log("Input EXIT to stop the program!");


//This variable is an empty array that will be used to store the tasks in the task list.
let taskList = [];

//This variable is declared but not assigned a value at this point. It will be used to store the user input for a task.
let mytask;

//This variable is also declared but not assigned a value initially. It will be used to store the user's input for selecting an operation in the task list program.
let taskInput;

function taskProgram(taskInput) {
        
    if (taskInput == 1) {
    // Add a task to the end of the task list.
    mytask = prompt("Input Task:");
    console.log(mytask + " has been added to the end of Task List.");
    taskList.push(mytask);
    }
    // Remove a task from the beginning of the task list.
    else if (taskInput == 2) {
    mytask = prompt("Input Task:");
    console.log(
        mytask + " has been removed from the beginning of the task list."
    );
    taskList.unshift(mytask);
    }
    // Remove a task from the end of the task list.
    else if (taskInput == 3) {
    mytask = prompt("Input Task:");
    console.log(mytask + " has been removed from the end of the task list.");
    taskList.pop();
    }
    // Remove a task from a specific position in the task list.
    else if (taskInput == 4) {
    mytask = prompt("Input Task:");
    console.log(mytask + " has been added to the end of Task List.");
    taskList.splice(mytask, 1);
    }
    // Display the current task list.
    else {
    console.log(taskList);
    }
}

//The input is obtained using the prompt function, which displays a dialog box to the user with the provided message.
taskInput = prompt(
    "Which operation do you wish to perform \n(OPERATION NUMBER ONLY) \n\nInput EXIT to stop the program!");

 while (taskInput != "EXIT") {
    taskInput = prompt(
        "Which operation do you wish to perform \n(OPERATION NUMBER ONLY) \n\nInput EXIT to stop the program!");
  
    taskProgram(taskInput);
} 
