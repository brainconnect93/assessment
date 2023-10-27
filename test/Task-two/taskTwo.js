/* <--- QUESTION ---> */

// Write a program that allows a user to enter an integer and tells them if it is a deficient, perfect or abundant number.

/* <--- ANSWER ---> */

// Declare a function to hold the integer with a parameter
function getInteger(int) {
  let sum = 0;

  // Loop through the numbers from 1 to the square root of the input integer
  for (let i = 1; i <= Math.floor(Math.sqrt(int)); i++) {
    if (int % i === 0) {
      if (int / i === i) {
        sum += i;
      } else {
        sum += i + int / i;
      }
    }
  }
  // Subtract the input integer from the sum
  sum -= int;
  // get the classification of the input integer based on the sum
  if (sum < int) {
    return "deficient";
  } else if (sum === int) {
    return "perfect";
  } else {
    return "abundant";
  }
}

// Print the result on the window alert 
function classifyNum() {
  let input = parseInt(prompt("Enter an integer:","0"));
  if (isNaN(input)) {
    alert("Invalid input. Please enter a valid integer.");
  } else {
    alert(`The number ${input} is ${getInteger(input)}.`);
  }
}
