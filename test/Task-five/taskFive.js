// <--- QUESTION --->

/* Write a program that allows a user to calculate how many milliliters (ml) of their glass of sirup they
need to replace (with water or sirup) to achieve the recommended dilution as indicated on the sirup
bottle. The user can enter the amount of sirup in their glass (e.g. 200 ml), its dilution (e.g. 25 %) and
the recommended dilution (e.g. 20 %).
The program should then tell the user how many milliliters to replace with water or sirup. For
example: "Replace 40 ml of your sirup with water." */

// <--- ANSWER --->

// Step 1: Get user to input the data
const sirupAmount = parseFloat(
  prompt("Enter the amount of sirup in your glass (in ml):")
);
const mixPercent = parseFloat(
  prompt("Enter the current dilution percentage:")
);
const recommend = parseFloat(
  prompt("Enter the recommended dilution percentage:")
);

// Step 2: Calculate the amount to replace
if (
  !isNaN(sirupAmount) &&
  !isNaN(mixPercent) &&
  !isNaN(recommend)
) {
  const sirupReplace =
    (sirupAmount *
      (mixPercent - recommend)) /
    (recommend - 100);

  if (sirupReplace > 0) {
    alert(
      `Replace ${sirupReplace.toFixed(2)} ml of your sirup with water.`
    );
  } else if (sirupReplace < 0) {
    alert(`Replace ${Math.abs(sirupReplace).toFixed(2)} ml of your sirup with more sirup.`
    );
  } else {
    alert("Your sirup is already at the recommended dilution.");
  }
} else {
  alert("Invalid input. Please enter valid numbers.");
}
