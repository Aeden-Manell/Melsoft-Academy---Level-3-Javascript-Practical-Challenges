/* In this practical challenge, you will create a program that checks 
if a user is eligible for a discount at a store based on their age and 
membership status. The program will take user input for age and membership 
status and display a message about the user’s eligibility for a discount. */

// This is a JavaScript function for checking eligibility for discounts based on age and membership.

function checkEligibility() {
    // Retrieve the value of the age input field and convert it to an integer
    let age = parseInt(document.getElementById("age").value);

    let member = document.getElementById("member").checked;
    // Initialize an empty string for the output message.
  let output = "";

  // Check the eligibility criteria and update the output accordingly.
  if (age >= 65) {
    output = "Senior Discount!";
  } else if (age >= 18 && member) {
    output = "Member Discount!";
  } else {
    output = "NO DISCOUNT!";
  }

// Update the content of the output paragraph element with the calculated output message.
  document.getElementById("output").textContent = output;

}

