/* <--- QUESTION ---> */

// Write a program that allows a user to enter an integer and tells them if it is a Harshad number.




/* <--- ANSWER ---> */

// Declare a function to hold the harshard with a parameter
function isHarshad(number) {
  let sumHarshad = 0;
  let temp = number;

  while (temp > 0) {
    sumHarshad += temp % 10;
    temp = Math.floor(temp / 10);
  }

  // use if and else statement to get modulus(i.e remainder)
  if (number % sumHarshad === 0) {
    return true;
  } else {
    return false;
  }
}

// Print the harshad number on the window alert 
function main() {
  // prompt user for interger input 
  let userInput = parseInt(prompt("Enter an integer:"));

  // Check for invalid input
  if (isNaN(userInput)) {
    alert("Invalid data input. Please enter a valid integer.");
  } else {
    // Check if number is Harshad 
    if (isHarshad(userInput)) {
      alert(userInput + " is a Harshad number.");
    } else {
      alert(userInput + " is not a Harshad number.");
    }
  }
}s
